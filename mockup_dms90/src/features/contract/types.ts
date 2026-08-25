export type ContractModule = 'template' | 'customer';

export type ViewerTargetType = 'region' | 'employee' | 'position' | '';

export type CustomerStatus = 'Hoạt động' | 'Ngưng hoạt động';

export interface ContractTypeOption {
  code: string;
  name: string;
  shortName: string;
  status: string;
}

export interface ContractFile {
  id?: string;
  name: string;
  extension?: string;
  type?: string;
  category?: 'document' | 'image';
  size?: number;
  uploadedAt?: string;
  uploadedBy?: string;
  url?: string;
  previewUrl?: string;
  objectUrl?: string;
  textContent?: string;
}

export interface ContractCustomer {
  id: string;
  code: string;
  name: string;
  phone: string;
  address: string;
  status: CustomerStatus | string;
}

export interface ContractRecord {
  id: string;
  module: ContractModule;
  contractCode: string;
  name: string;
  /** Hợp đồng khách hàng — tham chiếu Loại hợp đồng (id bản ghi template) */
  contractTypeId?: string;
  /** @deprecated dùng contractTypeId; giữ để migrate mock cũ */
  type?: string;
  customerId?: string;
  description: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
  files: ContractFile[];
  /** Loại hợp đồng */
  isActive?: boolean;
  viewerTargetType?: ViewerTargetType;
  viewerTargetIds?: string[];
  /** Hợp đồng khách hàng — thời gian áp dụng cấp hợp đồng */
  effectiveFrom?: string;
  effectiveTo?: string;
}

export interface ContractFilters {
  q: string;
  type: string;
  active: string;
  customerId: string;
  effectiveFrom: string;
  effectiveTo: string;
}

export const EMPTY_CONTRACT_FILTERS: ContractFilters = {
  q: '',
  type: '',
  active: '',
  customerId: '',
  effectiveFrom: '',
  effectiveTo: '',
};
