import { fileExt, formatSize } from '../contract/fileRules';
import {
  findCustomer,
  getContractTypeNameOptions,
  getContractsSnapshot,
  typeName,
  VIEWER_TYPE_OPTIONS,
  viewerFieldMeta,
  viewerOptionsFor,
} from '../contract/store';
import type { ContractFile, ContractRecord, ViewerTargetType } from '../contract/types';
import { getCareCustomers, getCareRouteCustomerIds } from './careRouteCustomers';

/** Tab Loại hợp đồng — entity chính (Website module=template) */
export type ContractKind = 'contract-type' | 'customer';

export interface AppTemplateFile {
  id?: string;
  name: string;
  extension: string;
  size: string;
  url?: string;
}

/** Loại hợp đồng — chủ thể tab 1; Hợp đồng mẫu = templateFiles[] */
export interface AppContractType {
  id: string;
  code: string;
  name: string;
  viewerType: ViewerTargetType | '';
  viewerTypeLabel: string;
  viewerValueLabel: string;
  viewerValueFieldLabel: string;
  note: string;
  isActive: boolean;
  status: string;
  templateFiles: AppTemplateFile[];
}

/** Hợp đồng khách hàng — model riêng */
export interface AppCustomerContract {
  id: string;
  code: string;
  name: string;
  module: 'customer';
  contractTypeId?: string;
  customerId?: string;
  customerCode?: string;
  customerName?: string;
  typeLabel: string;
  status: string;
  startDate: string;
  endDate: string;
  description: string;
  files: AppTemplateFile[];
}

/** @deprecated dùng AppCustomerContract / AppContractType */
export type AppContract = AppCustomerContract & {
  module: ContractKind;
  viewerLabel?: string;
  typeLabel: string;
  files: AppTemplateFile[];
};

export type AppContractFile = AppTemplateFile;

export const APP_CONTRACT_TYPE_STATUSES = ['Hoạt động', 'Ngừng hoạt động'];
/** @deprecated dùng APP_CONTRACT_TYPE_STATUSES */
export const APP_TEMPLATE_STATUSES = APP_CONTRACT_TYPE_STATUSES;
export const APP_CUSTOMER_CONTRACT_STATUSES = ['Khởi tạo', 'Đã duyệt', 'Từ chối', 'Hết hạn'];
/** @deprecated dùng APP_CONTRACT_TYPE_STATUSES / APP_CUSTOMER_CONTRACT_STATUSES */
export const APP_CONTRACT_STATUSES = [...APP_CUSTOMER_CONTRACT_STATUSES, ...APP_CONTRACT_TYPE_STATUSES];

function mapTemplateFiles(files: ContractFile[] | AppTemplateFile[]): AppTemplateFile[] {
  return (files || []).map((f, i) => {
    const raw = f as ContractFile;
    const name = f.name || '';
    const extension = (raw.extension || fileExt({ name }) || '').toLowerCase();
    const size =
      typeof raw.size === 'number'
        ? formatSize(raw.size)
        : String((f as AppTemplateFile).size || '');
    return {
      id: raw.id || `F${i + 1}`,
      name,
      extension,
      size,
      url: raw.url || raw.previewUrl,
    };
  });
}

function fromWebContractType(item: ContractRecord): AppContractType {
  const viewerType = (item.viewerTargetType || '') as ViewerTargetType | '';
  const kind = VIEWER_TYPE_OPTIONS.find((o) => o.value === viewerType)?.label || '';
  const ids = item.viewerTargetIds || [];
  const opts = viewerOptionsFor(viewerType || undefined);
  const names = ids.map((id) => opts.find((o) => o.value === id)?.label || id);
  const meta = viewerFieldMeta(viewerType || undefined);
  return {
    id: item.id,
    code: item.contractCode,
    name: item.name,
    viewerType,
    viewerTypeLabel: kind || '—',
    viewerValueLabel: names.length ? names.join(', ') : '',
    viewerValueFieldLabel: viewerType ? meta.label : '',
    note: item.description || '',
    isActive: item.isActive !== false,
    status: item.isActive !== false ? 'Hoạt động' : 'Ngừng hoạt động',
    templateFiles: mapTemplateFiles(item.files || []),
  };
}

function fromWebCustomerRecord(item: ContractRecord): AppCustomerContract {
  const contractTypeId = String(item.contractTypeId || item.type || '');
  const cust = item.customerId ? findCustomer(item.customerId) : null;
  return {
    id: item.id,
    code: item.contractCode,
    name: item.name,
    module: 'customer',
    contractTypeId: contractTypeId || undefined,
    customerId: item.customerId || undefined,
    customerCode: cust?.code,
    customerName: cust?.name,
    typeLabel: typeName(contractTypeId),
    status: '',
    startDate: item.effectiveFrom || '',
    endDate: item.effectiveTo || '',
    description: item.description || '',
    files: mapTemplateFiles(item.files || []),
  };
}

function careContract(
  partial: Omit<AppCustomerContract, 'module' | 'customerCode' | 'customerName' | 'typeLabel'> & { customerId: string },
): AppCustomerContract {
  const cust = getCareCustomers().find((c) => c.code === partial.customerId);
  return {
    ...partial,
    module: 'customer',
    customerCode: cust?.code || partial.customerId,
    customerName: cust?.name || partial.customerId,
    typeLabel: typeName(partial.contractTypeId) || 'Hợp đồng khách hàng',
  };
}

const CARE_CUSTOMER_CONTRACTS: AppCustomerContract[] = [
  careContract({
    id: 'HD-CARE-013',
    code: 'CUS210826101530',
    name: 'Hợp đồng phân phối 2026',
    customerId: 'HCM_00188913',
    contractTypeId: 'CT-T01',
    status: 'Đã duyệt',
    startDate: '01-08-2026',
    endDate: '31-12-2026',
    description: 'Hợp đồng phân phối điểm bán trên tuyến chăm sóc.',
    files: [
      { name: 'HopDong_HCM_00188913.pdf', extension: 'pdf', size: '1.2 MB' },
      { name: 'ChuKyKhachHang.jpg', extension: 'jpg', size: '39 KB' },
    ],
  }),
  careContract({
    id: 'HD-CARE-013B',
    code: 'CUS210826111000',
    name: 'Phụ lục trưng bày Q3',
    customerId: 'HCM_00188913',
    contractTypeId: 'CT-T03',
    status: 'Khởi tạo',
    startDate: '01-09-2026',
    endDate: '30-11-2026',
    description: 'Phụ lục trưng bày quý 3.',
    files: [{ name: 'PhuLuc_Q3.pdf', extension: 'pdf', size: '640 KB' }],
  }),
  careContract({
    id: 'HD-CARE-014',
    code: 'CUS210826120000',
    name: 'Hợp đồng nguyên tắc 2026',
    customerId: 'HCM_00188914',
    contractTypeId: 'CT-T02',
    status: 'Từ chối',
    startDate: '15-03-2026',
    endDate: '15-03-2027',
    description: 'Từ chối do thiếu thông tin điểm bán.',
    files: [{ name: 'HD_NguyenTac.pdf', extension: 'pdf', size: '880 KB' }],
  }),
  careContract({
    id: 'HD-CARE-015',
    code: 'CUS210826130000',
    name: 'Hợp đồng dịch vụ điểm bán',
    customerId: 'HCM_00188915',
    contractTypeId: 'CT-T03',
    status: 'Đã duyệt',
    startDate: '01-06-2026',
    endDate: '01-06-2027',
    description: '',
    files: [
      { name: 'HD_DichVu.pdf', extension: 'pdf', size: '1.0 MB' },
      { name: 'TrangChuKy.png', extension: 'png', size: '48 KB' },
    ],
  }),
];

const OUT_OF_ROUTE_CONTRACTS: AppCustomerContract[] = [
  {
    id: 'HD-OUT-999',
    code: 'CUS999999999999',
    name: 'Hợp đồng ngoài tuyến — KH999',
    module: 'customer',
    customerId: 'KH999',
    customerCode: 'KH999',
    customerName: 'Khách hàng ngoài tuyến',
    contractTypeId: 'CT-T01',
    typeLabel: typeName('CT-T01') || 'Hợp đồng khách hàng',
    status: 'Đã duyệt',
    startDate: '01-01-2026',
    endDate: '31-12-2026',
    description: 'Không thuộc tuyến chăm sóc — không được hiển thị trên App.',
    files: [{ name: 'HD_KH999.pdf', extension: 'pdf', size: '500 KB' }],
  },
];

function allCustomerContracts(): AppCustomerContract[] {
  const fromWeb = getContractsSnapshot()
    .filter((c) => c.module === 'customer')
    .map(fromWebCustomerRecord);
  return [...fromWeb, ...CARE_CUSTOMER_CONTRACTS, ...OUT_OF_ROUTE_CONTRACTS];
}

/** Shared Loại hợp đồng master (Website) — options chỉ tên (filter HĐ KH) */
export function getSharedContractTypeOptions() {
  return getContractTypeNameOptions(false);
}

/** Iterate Contract Types từ shared Website store — 1 type = 1 item */
export function getContractTypes(): AppContractType[] {
  return getContractsSnapshot()
    .filter((c) => c.module === 'template')
    .map(fromWebContractType);
}

/** @deprecated dùng getContractTypes */
export function getTemplateContracts(): AppContractType[] {
  return getContractTypes();
}

export function getVisibleCustomerContracts(): AppCustomerContract[] {
  const ids = new Set(getCareRouteCustomerIds());
  return allCustomerContracts().filter((c) => !!c.customerId && ids.has(c.customerId));
}

export function findContractType(id?: string): AppContractType | null {
  if (!id) return null;
  return getContractTypes().find((c) => c.id === id || c.code === id) || null;
}

export function findVisibleCustomerContract(id?: string): AppCustomerContract | null {
  if (!id) return null;
  return getVisibleCustomerContracts().find((c) => c.id === id || c.code === id) || null;
}

/** Tìm theo id — ưu tiên Loại hợp đồng, sau đó HĐ khách hàng trong scope */
export function findVisibleContract(
  id?: string,
): { kind: 'contract-type'; item: AppContractType } | { kind: 'customer'; item: AppCustomerContract } | null {
  const type = findContractType(id);
  if (type) return { kind: 'contract-type', item: type };
  const cust = findVisibleCustomerContract(id);
  if (cust) return { kind: 'customer', item: cust };
  return null;
}

export function fileMetaLine(file: AppTemplateFile): string {
  const ext = (file.extension || fileExt({ name: file.name }) || '').toUpperCase();
  if (ext && file.size) return `${ext} · ${file.size}`;
  return ext || file.size || '';
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
