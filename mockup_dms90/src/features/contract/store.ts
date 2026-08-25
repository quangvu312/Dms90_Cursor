import { useEffect, useState } from 'react';
import rawContract from './data/contract.json';
import rawEmployees from '../../../data/employee.json';
import rawPositions from './data/positions.json';
import { VUNG_OPTIONS } from '../customer/types';
import type { ContractCustomer, ContractFile, ContractModule, ContractRecord, ViewerTargetType } from './types';
import { enrichFile } from './fileRules';

interface ContractDoc {
  customers?: ContractCustomer[];
  contracts?: ContractRecord[];
}

interface EmployeeDoc {
  items?: { id: string; code: string; name: string; status?: string }[];
}

interface PositionDoc {
  items?: { code: string; name: string }[];
}

const contractDoc = rawContract as ContractDoc;
const employeeDoc = rawEmployees as EmployeeDoc;
const positionDoc = rawPositions as PositionDoc;

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

const VIEWER_TYPES: ViewerTargetType[] = ['region', 'employee', 'position'];

export function parseViewerType(value?: string): ViewerTargetType {
  return VIEWER_TYPES.includes(value as ViewerTargetType) ? (value as ViewerTargetType) : '';
}

function stripFileDates(file: ContractFile & { effectiveFrom?: string; effectiveTo?: string }): ContractFile {
  const next = { ...file };
  delete (next as { effectiveFrom?: string }).effectiveFrom;
  delete (next as { effectiveTo?: string }).effectiveTo;
  return next;
}

function liftContractDates(item: ContractRecord): { from: string; to: string } {
  if (item.effectiveFrom || item.effectiveTo) {
    return { from: item.effectiveFrom || '', to: item.effectiveTo || '' };
  }
  let minT = Infinity;
  let maxT = -Infinity;
  let minS = '';
  let maxS = '';
  (item.files || []).forEach((f) => {
    const raw = f as ContractFile & { effectiveFrom?: string; effectiveTo?: string };
    const from = parseDmy(raw.effectiveFrom);
    const to = parseDmy(raw.effectiveTo);
    if (from) {
      const t = from.getTime();
      if (t < minT) {
        minT = t;
        minS = raw.effectiveFrom || '';
      }
    }
    if (to) {
      const t = to.getTime();
      if (t > maxT) {
        maxT = t;
        maxS = raw.effectiveTo || '';
      }
    }
  });
  return { from: minS, to: maxS };
}

function normalize(item: ContractRecord): ContractRecord {
  const files = (item.files || []).filter((f) => f && f.name).map((f, i) => enrichFile(stripFileDates(f), `${item.id}-F${String(i + 1).padStart(2, '0')}`));
  const module: ContractModule = item.module === 'template' ? 'template' : 'customer';
  const dates = module === 'customer' ? liftContractDates(item) : { from: '', to: '' };
  const viewerType = module === 'template' ? parseViewerType(item.viewerTargetType) : undefined;
  return {
    ...item,
    module,
    type: undefined,
    contractTypeId: module === 'customer' ? String(item.contractTypeId || item.type || '') : '',
    customerId: module === 'customer' ? String(item.customerId || '') : '',
    files,
    description: item.description || '',
    isActive: module === 'template' ? item.isActive !== false : undefined,
    viewerTargetType: viewerType,
    viewerTargetIds: module === 'template' ? (viewerType ? [...(item.viewerTargetIds || [])] : []) : undefined,
    effectiveFrom: module === 'customer' ? dates.from : undefined,
    effectiveTo: module === 'customer' ? dates.to : undefined,
  };
}

let contracts: ContractRecord[] = (contractDoc.contracts || []).map((c) => normalize({ ...c, files: [...(c.files || [])] }));
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

export const CONTRACT_CUSTOMERS: ContractCustomer[] = contractDoc.customers || [];
export const CONTRACT_REGIONS = VUNG_OPTIONS.map((v) => ({ value: v, label: v }));
export const CONTRACT_EMPLOYEES = (employeeDoc.items || [])
  .filter((e) => !e.status || e.status === 'ACTIVE')
  .map((e) => ({ value: e.id || e.code, label: `${e.code} — ${e.name}` }));
export const CONTRACT_POSITIONS = (positionDoc.items || []).map((p) => ({ value: p.code, label: p.name }));
export const VIEWER_TYPE_OPTIONS = [
  { value: 'region', label: 'Vùng/Khu vực' },
  { value: 'employee', label: 'Nhân viên' },
  { value: 'position', label: 'Chức vụ' },
];
export const CONTRACT_ACTIVE_OPTIONS = [
  { value: 'true', label: 'Hoạt động' },
  { value: 'false', label: 'Ngừng hoạt động' },
];
export const CONTRACT_CUSTOMER_OPTIONS = CONTRACT_CUSTOMERS.map((c) => ({
  value: c.id,
  label: `${c.code} — ${c.name}`,
}));

export function viewerOptionsFor(type?: ViewerTargetType) {
  if (type === 'region') return CONTRACT_REGIONS;
  if (type === 'employee') return CONTRACT_EMPLOYEES;
  if (type === 'position') return CONTRACT_POSITIONS;
  return [];
}

export function viewerFieldMeta(type?: ViewerTargetType) {
  if (type === 'region') return { label: 'Vùng/Khu vực', placeholder: 'Chọn vùng/khu vực...' };
  if (type === 'employee') return { label: 'Nhân viên', placeholder: 'Chọn nhân viên...' };
  if (type === 'position') return { label: 'Chức vụ', placeholder: 'Chọn chức vụ...' };
  return { label: 'Đối tượng xem', placeholder: 'Chọn đối tượng...' };
}

export function findContractType(id?: string) {
  if (!id) return null;
  return contracts.find((c) => c.module === 'template' && (c.id === id || c.contractCode === id)) || null;
}

export function typeMeta(id?: string) {
  const rec = findContractType(id);
  if (rec) {
    return {
      code: rec.contractCode,
      name: rec.name,
      shortName: rec.contractCode,
      status: rec.isActive !== false ? 'Hoạt động' : 'Ngừng hoạt động',
    };
  }
  return { code: id || '', name: id || '', shortName: id || '', status: '' };
}

export function typeLabel(id?: string) {
  const t = typeMeta(id);
  if (!t.code) return '';
  return t.code === t.name ? t.name : `${t.code} — ${t.name}`;
}

/** Hiển thị trên lưới danh sách — chỉ tên loại hợp đồng */
export function typeName(id?: string) {
  const t = typeMeta(id);
  return t.name || '';
}

export function getContractTypeOptions(includeId?: string, activeOnly = true) {
  return contracts
    .filter((c) => c.module === 'template')
    .filter((c) => !activeOnly || c.isActive !== false || (includeId && (c.id === includeId || c.contractCode === includeId)))
    .map((c) => ({ value: c.id, label: `${c.contractCode} — ${c.name}` }));
}

/** Options chỉ tên — dùng List/Filter khi không hiển thị mã */
export function getContractTypeNameOptions(activeOnly = false) {
  return contracts
    .filter((c) => c.module === 'template')
    .filter((c) => !activeOnly || c.isActive !== false)
    .map((c) => ({ value: c.id, label: c.name }));
}

export function findCustomer(id?: string) {
  if (!id) return null;
  return CONTRACT_CUSTOMERS.find((c) => String(c.id) === String(id) || String(c.code) === String(id)) || null;
}

export function customerLabel(id?: string) {
  const c = findCustomer(id);
  return c ? `${c.code} - ${c.name}` : '';
}

/** Hiển thị trên lưới danh sách — chỉ tên khách hàng */
export function customerName(id?: string) {
  const c = findCustomer(id);
  return c ? c.name : '';
}

export function viewerLabel(item: ContractRecord) {
  if (item.module !== 'template') return '';
  const type = item.viewerTargetType;
  const ids = item.viewerTargetIds || [];
  if (!type) return '—';
  const kind = VIEWER_TYPE_OPTIONS.find((o) => o.value === type)?.label || type;
  if (!ids.length) return kind;
  const opts = viewerOptionsFor(type);
  const names = ids.map((id) => opts.find((o) => o.value === id)?.label || id);
  return `${kind}: ${names.join(', ')}`;
}

export function periodsOverlap(contractFrom?: string, contractTo?: string, filterFrom?: string, filterTo?: string) {
  const a1 = toIsoDate(contractFrom);
  const a2 = toIsoDate(contractTo);
  const b1 = toIsoDate(filterFrom);
  const b2 = toIsoDate(filterTo);
  if (!b1 && !b2) return true;
  if (!a1 && !a2) return false;
  if (b2 && a1 && a1 > b2) return false;
  if (b1 && a2 && a2 < b1) return false;
  return true;
}

export function isCodeTaken(code: string, exceptId?: string, module?: ContractModule) {
  const needle = String(code || '').trim().toLowerCase();
  if (!needle) return false;
  return contracts.some((c) => {
    if (exceptId && c.id === exceptId) return false;
    if (module && c.module !== module) return false;
    return String(c.contractCode || '').trim().toLowerCase() === needle;
  });
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
    setActive(id: string, isActive: boolean, actor: string) {
      const now = nowLabel();
      contracts = contracts.map((c) => (c.id === id ? { ...c, isActive, updatedBy: actor, updatedAt: now } : c));
      notify();
    },
  };
}
