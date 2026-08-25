export type AddressType = 'billing' | 'shipping' | 'work' | 'home';

export interface ContactAddress {
  id: string;
  /** Nhãn địa chỉ — ví dụ: Tổng công ty, Nhà riêng... */
  label: string;
  /** Loại địa chỉ, có thể chọn nhiều. 'billing' và 'shipping' chỉ duy nhất 1 địa chỉ trong toàn bộ danh sách. */
  types: AddressType[];
  country: string;
  attention: string;
  addressee: string;
  phone: string;
  addressLine1: string;
  /** Tỉnh/Thành phố (đơn vị hành chính cấp tỉnh, sau sáp nhập 2025). */
  city: string;
  /** Phường/Xã (đơn vị hành chính cấp xã, phụ thuộc vào Tỉnh/Thành phố đã chọn). */
  ward: string;
  zipCode: string;
  latitude: string;
  longitude: string;
}

export interface Contact {
  id: string;
  contactId: string;
  role: string;
  salutation: string;
  lastName: string;
  middleName: string;
  firstName: string;
  jobTitle: string;
  category: string;
  email: string;
  mainPhone: string;
  fax: string;
  leadSource: string;
  /** Ghi chú tự do — map field `comments` bên Vigo/NetSuite, tối đa 999 ký tự. */
  comments: string;
  addresses: ContactAddress[];
  status: 'Active' | 'Inactive';
  /** Số Khách hàng đang liên kết với Contact này (PRD CT-1). */
  linkedCustomerCount: number;
  /**
   * Nguồn tạo/cập nhật gần nhất — 'DMS' (nhập tay) hoặc 'ERP' (đồng bộ tự động).
   * UX-proposed: hiển thị trên UI chờ xác nhận câu hỏi mở #8 (Contact.md).
   */
  source: 'DMS' | 'ERP';
}

export interface ContactFilters {
  searchText: string;
  role: string;
  status: string;
  leadSource: string;
}
