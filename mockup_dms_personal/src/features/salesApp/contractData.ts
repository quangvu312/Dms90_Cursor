import { formatSize } from '../contract/fileRules';
import { CONTRACT_STATUS_OPTIONS, findCustomer, getContractsSnapshot, typeMeta } from '../contract/store';
import type { ContractFile, ContractRecord } from '../contract/types';
import { getCareCustomers, getCareRouteCustomerIds } from './careRouteCustomers';

export type ContractKind = 'template' | 'customer';

export interface AppContractFile {
  name: string;
  size: string;
  url?: string;
}

export interface AppContract {
  id: string;
  code: string;
  name: string;
  module: ContractKind;
  customerId?: string;
  customerCode?: string;
  customerName?: string;
  typeLabel: string;
  status: string;
  startDate: string;
  endDate: string;
  description: string;
  files: AppContractFile[];
}

export const APP_CONTRACT_STATUSES = CONTRACT_STATUS_OPTIONS.map((s) => s.value);

function mapFiles(files: ContractFile[] | AppContractFile[]): AppContractFile[] {
  return (files || []).map((f) => ({
    name: f.name,
    size: typeof (f as ContractFile).size === 'number' ? formatSize((f as ContractFile).size) : String((f as AppContractFile).size || ''),
    url: (f as ContractFile).url || (f as ContractFile).previewUrl,
  }));
}

function fromWebRecord(item: ContractRecord): AppContract {
  const type = typeMeta(item.type);
  const cust = item.customerId ? findCustomer(item.customerId) : null;
  return {
    id: item.id,
    code: item.contractCode,
    name: item.name,
    module: item.module,
    customerId: item.customerId || undefined,
    customerCode: cust?.code,
    customerName: cust?.name,
    typeLabel: type.name,
    status: String(item.status || ''),
    startDate: item.startDate,
    endDate: item.endDate,
    description: item.description || '',
    files: mapFiles(item.files || []),
  };
}

function careContract(
  partial: Omit<AppContract, 'module' | 'customerCode' | 'customerName' | 'typeLabel'> & { customerId: string },
): AppContract {
  const cust = getCareCustomers().find((c) => c.code === partial.customerId);
  return {
    ...partial,
    module: 'customer',
    customerCode: cust?.code || partial.customerId,
    customerName: cust?.name || partial.customerId,
    typeLabel: 'Hợp đồng khách hàng',
  };
}

const CARE_CUSTOMER_CONTRACTS: AppContract[] = [
  careContract({
    id: 'HD-CARE-013',
    code: 'CUS210826101530',
    name: 'Hợp đồng phân phối 2026',
    customerId: 'HCM_00188913',
    status: 'Đã duyệt',
    startDate: '01-08-2026',
    endDate: '31-12-2026',
    description: 'Hợp đồng phân phối điểm bán trên tuyến chăm sóc.',
    files: [{ name: 'HopDong_HCM_00188913.pdf', size: '1.2 MB' }, { name: 'ChuKyKhachHang.jpg', size: '39 KB' }],
  }),
  careContract({
    id: 'HD-CARE-013B',
    code: 'CUS210826111000',
    name: 'Phụ lục trưng bày Q3',
    customerId: 'HCM_00188913',
    status: 'Khởi tạo',
    startDate: '01-09-2026',
    endDate: '30-11-2026',
    description: 'Phụ lục trưng bày quý 3.',
    files: [{ name: 'PhuLuc_Q3.pdf', size: '640 KB' }],
  }),
  careContract({
    id: 'HD-CARE-014',
    code: 'CUS210826120000',
    name: 'Hợp đồng nguyên tắc 2026',
    customerId: 'HCM_00188914',
    status: 'Từ chối',
    startDate: '15-03-2026',
    endDate: '15-03-2027',
    description: 'Từ chối do thiếu thông tin điểm bán.',
    files: [{ name: 'HD_NguyenTac.pdf', size: '880 KB' }],
  }),
  careContract({
    id: 'HD-CARE-015',
    code: 'CUS210826130000',
    name: 'Hợp đồng dịch vụ điểm bán',
    customerId: 'HCM_00188915',
    status: 'Đã duyệt',
    startDate: '01-06-2026',
    endDate: '01-06-2027',
    description: '',
    files: [{ name: 'HD_DichVu.pdf', size: '1.0 MB' }, { name: 'TrangChuKy.png', size: '48 KB' }],
  }),
];

const OUT_OF_ROUTE_CONTRACTS: AppContract[] = [
  {
    id: 'HD-OUT-999',
    code: 'CUS999999999999',
    name: 'Hợp đồng ngoài tuyến — KH999',
    module: 'customer',
    customerId: 'KH999',
    customerCode: 'KH999',
    customerName: 'Khách hàng ngoài tuyến',
    typeLabel: 'Hợp đồng khách hàng',
    status: 'Đã duyệt',
    startDate: '01-01-2026',
    endDate: '31-12-2026',
    description: 'Không thuộc tuyến chăm sóc — không được hiển thị trên App.',
    files: [{ name: 'HD_KH999.pdf', size: '500 KB' }],
  },
];

function allCustomerContracts(): AppContract[] {
  const fromWeb = getContractsSnapshot()
    .filter((c) => c.module === 'customer')
    .map(fromWebRecord);
  return [...fromWeb, ...CARE_CUSTOMER_CONTRACTS, ...OUT_OF_ROUTE_CONTRACTS];
}

export function getTemplateContracts(): AppContract[] {
  return getContractsSnapshot()
    .filter((c) => c.module === 'template')
    .map(fromWebRecord);
}

export function getVisibleCustomerContracts(): AppContract[] {
  const ids = new Set(getCareRouteCustomerIds());
  return allCustomerContracts().filter((c) => !!c.customerId && ids.has(c.customerId));
}

export function findVisibleContract(id?: string): AppContract | null {
  if (!id) return null;
  const hit = (c: AppContract) => c.id === id || c.code === id;
  const template = getTemplateContracts().find(hit);
  if (template) return template;
  return getVisibleCustomerContracts().find(hit) || null;
}

export function fmtDate(str?: string) {
  if (!str) return '—';
  const iso = String(str).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return `${iso[3]}/${iso[2]}/${iso[1]}`;
  const dmy = String(str).match(/^(\d{2})[/\-](\d{2})[/\-](\d{4})/);
  if (dmy) return `${dmy[1]}/${dmy[2]}/${dmy[3]}`;
  return str;
}

export function downloadMockPdf(filename: string) {
  const body = [
    '%PDF-1.4',
    '1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj',
    '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj',
    '3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj',
    '4 0 obj<</Length 68>>stream',
    `BT /F1 16 Tf 72 720 Td (${filename.replace(/[()\\]/g, '')}) Tj ET`,
    'endstream endobj',
    '5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj',
    'xref',
    '0 6',
    '0000000000 65535 f ',
    'trailer<</Size 6/Root 1 0 R>>',
    'startxref',
    '0',
    '%%EOF',
  ].join('\n');
  const blob = new Blob([body], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'hop-dong.pdf';
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
