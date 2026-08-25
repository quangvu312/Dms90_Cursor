export type ContractModule = 'template' | 'customer';

export type ContractStatus = 'Khởi tạo' | 'Đã duyệt' | 'Từ chối' | 'Hết hạn';

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
  type: string;
  status: ContractStatus | string;
  customerId?: string;
  startDate: string;
  endDate: string;
  description: string;
  createdBy: string;
  createdAt: string;
  updatedBy: string;
  updatedAt: string;
  files: ContractFile[];
}

export interface ContractFilters {
  q: string;
  type: string;
  status: string;
  from: string;
  to: string;
}

export const EMPTY_CONTRACT_FILTERS: ContractFilters = {
  q: '',
  type: '',
  status: '',
  from: '',
  to: '',
};

export const CONTRACT_STATUSES: ContractStatus[] = ['Khởi tạo', 'Đã duyệt', 'Từ chối', 'Hết hạn'];
