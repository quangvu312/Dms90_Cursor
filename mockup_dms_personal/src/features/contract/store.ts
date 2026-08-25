import { useEffect, useState } from 'react';
import rawContract from './data/contract.json';
import rawTypes from './data/contract-types.json';
import type { ContractCustomer, ContractModule, ContractRecord, ContractTypeOption } from './types';
import { enrichFile } from './fileRules';

interface ContractDoc {
  statuses?: { value: string; label: string }[];
  customers?: ContractCustomer[];
  contracts?: ContractRecord[];
}

interface TypeDoc {
  contractTypes?: ContractTypeOption[];
}

const contractDoc = rawContract as ContractDoc;
const typeDoc = rawTypes as TypeDoc;

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export function nowLabel(d = new Date()) {
  return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function parseDmy(str?: string): Date | null {
  if (!str) return null;
  const iso = String(str).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));
  const dmy = String(str).match(/^(\d{2})[/\-](\d{2})[/\-](\d{4})/);
  if (dmy) return new Date(Number(dmy[3]), Number(dmy[2]) - 1, Number(dmy[1]));
  return null;
}

export function toIsoDate(dmy?: string): string {
  const d = parseDmy(dmy);
  if (!d) return '';
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function fromIsoDate(iso?: string): string {
  if (!iso) return '';
  const d = parseDmy(iso);
  if (!d) return iso;
  return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
}

function formatCode(date: Date, moduleKey: ContractModule) {
  const prefix = moduleKey === 'template' ? 'TMP' : 'CUS';
  return `${prefix}${pad(date.getDate())}${pad(date.getMonth() + 1)}${String(date.getFullYear()).slice(-2)}${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`;
}

function normalize(item: ContractRecord): ContractRecord {
  const files = (item.files || []).filter((f) => f && f.name).map((f, i) => enrichFile(f, `${item.id}-F${String(i + 1).padStart(2, '0')}`));
  return {
    ...item,
    module: item.module === 'template' ? 'template' : 'customer',
    customerId: item.module === 'customer' ? String(item.customerId || '') : '',
    files,
    description: item.description || '',
  };
}

let contracts: ContractRecord[] = (contractDoc.contracts || []).map((c) => normalize({ ...c, files: [...(c.files || [])] }));
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

export const CONTRACT_TYPES: ContractTypeOption[] = (typeDoc.contractTypes || []).filter((t) => !t.status || t.status === 'Hoạt động');
export const CONTRACT_CUSTOMERS: ContractCustomer[] = contractDoc.customers || [];
export const CONTRACT_STATUS_OPTIONS = contractDoc.statuses || [
  { value: 'Khởi tạo', label: 'Khởi tạo' },
  { value: 'Đã duyệt', label: 'Đã duyệt' },
  { value: 'Từ chối', label: 'Từ chối' },
  { value: 'Hết hạn', label: 'Hết hạn' },
];

export function typeMeta(code: string) {
  const t = CONTRACT_TYPES.find((x) => x.code === code);
  return t || { code, name: code, shortName: code, status: 'Hoạt động' };
}

export function findCustomer(id?: string) {
  if (!id) return null;
  return CONTRACT_CUSTOMERS.find((c) => String(c.id) === String(id)) || null;
}

export function customerLabel(id?: string) {
  const c = findCustomer(id);
  return c ? `${c.code} - ${c.name}` : '';
}

export function isCodeTaken(code: string, exceptId?: string) {
  const needle = String(code || '').trim().toLowerCase();
  if (!needle) return false;
  return contracts.some((c) => {
    if (exceptId && c.id === exceptId) return false;
    return String(c.contractCode || '').trim().toLowerCase() === needle;
  });
}

export function nextContractCode(moduleKey: ContractModule) {
  let t = new Date();
  let code = formatCode(t, moduleKey);
  let n = 0;
  while (isCodeTaken(code) && n < 120) {
    t = new Date(t.getTime() + 1000);
    code = formatCode(t, moduleKey);
    n += 1;
  }
  return code;
}

export function getContractsSnapshot(): ContractRecord[] {
  return contracts;
}

export function useContractStore() {
  const [, bump] = useState(0);
  useEffect(() => {
    const fn = () => bump((x) => x + 1);
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  }, []);
  return {
    contracts,
    upsert(item: ContractRecord) {
      const idx = contracts.findIndex((c) => c.id === item.id);
      if (idx >= 0) {
        contracts = contracts.map((c) => (c.id === item.id ? normalize(item) : c));
      } else {
        contracts = [normalize(item), ...contracts];
      }
      notify();
    },
    remove(id: string) {
      contracts = contracts.filter((c) => c.id !== id);
      notify();
    },
    updateStatus(id: string, status: string, actor: string) {
      const now = nowLabel();
      contracts = contracts.map((c) => (c.id === id ? { ...c, status, updatedBy: actor, updatedAt: now } : c));
      notify();
    },
  };
}
