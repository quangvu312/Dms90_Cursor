export type CustomerType = 'Công ty' | 'Cá nhân';
export type SyncStatus = 'Synced' | 'Pending' | 'Failed';

export interface CustomerContact {
  id: string;
  contactCode: string;
  name: string;
  phone: string;
  jobTitle: string;
  status: 'Active' | 'Inactive';
}

/** 'shipping' và 'billing' chỉ được đánh dấu mặc định cho duy nhất 1 địa chỉ trong toàn bộ danh sách của khách hàng. */
export type CustomerAddressType = 'shipping' | 'billing';

export interface CustomerAddress {
  id: string;
  /** Nhãn địa chỉ — ví dụ: Trụ sở chính, Kho hàng Q7... */
  label: string;
  /** Đánh dấu địa chỉ giao hàng mặc định (shipping) / xuất hóa đơn mặc định (billing). Có thể vừa là shipping vừa là billing. */
  isDefaultShipping: boolean;
  isDefaultBilling: boolean;
  addressee: string;
  phone: string;
  country: string;
  city: string;
  ward: string;
  addressLine1: string;
}

export interface CustomerImage {
  id: string;
  url: string;
  name: string;
}

export interface Customer {
  id: string;
  customerCode: string;
  erpCode: string;
  syncStatus: SyncStatus;

  // Khung 1: Loại khách hàng
  customerType: CustomerType;
  active: boolean;
  companyName: string;
  lastName: string;
  middleName: string;
  firstName: string;
  parentCustomer: string;

  // Khung 2: Thông tin định danh
  email: string;
  phone: string;
  fax: string;
  taxCode: string;
  taxIssuePlace: string;
  taxIssueDate: string;
  businessType: string;
  taxValidityStatus: string;
  /** true sau khi kiểm tra MST/CCCD thành công — khóa các field auto-fill từ masothue.com (readonly), reset về false khi taxCode đổi. */
  taxIdentityLocked: boolean;

  // Khung 3: Phân loại và kênh
  customerGroup: string;
  businessUnit: string;
  saleChannel: string;
  storeType: string;
  storeRank: string;
  storeLocation: string;

  // Khung 4: Tài chính
  currency: string;
  paymentTerm: string;
  creditLimit: number;

  // Khung 5: Hình ảnh
  images: CustomerImage[];

  // Tab Người liên hệ
  contacts: CustomerContact[];

  // Tab Địa chỉ — một khách hàng có nhiều địa chỉ, đánh dấu 1 địa chỉ giao hàng mặc định và 1 địa chỉ xuất hóa đơn mặc định
  addresses: CustomerAddress[];
  /** Địa chỉ theo vị trí (geocode) — độc lập với danh sách địa chỉ, chỉ 1 bộ duy nhất cho toàn bộ khách hàng. */
  mapAddress: string;
  latitude: string;
  longitude: string;

  // Cột lưới bổ sung
  vung: string;
  khuVuc: string;
  tuyen: string;
  nvChamSoc: string;
  ngayTao: string;
  nguoiTao: string;
  ngayCapNhat: string;
  nguoiCapNhat: string;
}

export interface CustomerFilters {
  searchText: string;
  vungSelected: string[];
  tuNgay: string;
  denNgay: string;
  trangThai: string;
  nvChamSoc: string;
  customerType: string;
  customerRank: string;
  saleChannel: string;
  customerGroup: string;
  city: string;
  ward: string;
  route: string;
}

export const VUNG_OPTIONS = ['Miền Bắc', 'Miền Trung', 'Miền Nam'];
export const NV_CHAM_SOC_OPTIONS = ['Trần Văn Hùng', 'Lê Thị Mai', 'Phạm Quốc Bảo', 'Ngô Thị Thu'];
export const CUSTOMER_RANK_OPTIONS = ['Hạng A', 'Hạng B', 'Hạng C'];
export const SALE_CHANNEL_OPTIONS = ['GT (Truyền thống)', 'MT (Hiện đại)', 'Online', 'Horeca'];
export const CUSTOMER_GROUP_OPTIONS = ['Bán lẻ', 'Đại lý cấp 1', 'Đại lý cấp 2', 'Nhà phân phối'];
export const ROUTE_OPTIONS = ['Tuyến Q1-Q3', 'Tuyến Bình Thạnh', 'Tuyến Thủ Đức', 'Tuyến Q7-Nhà Bè'];
export const BUSINESS_UNIT_OPTIONS = ['BU Miền Nam', 'BU Miền Bắc', 'BU Miền Trung'];
export const STORE_TYPE_OPTIONS = ['Tạp hóa', 'Siêu thị mini', 'Nhà thuốc', 'Cửa hàng tiện lợi'];
export const STORE_LOCATION_OPTIONS = ['Mặt tiền đường lớn', 'Trong hẻm', 'Trong chợ', 'Khu dân cư'];
export const PAYMENT_TERM_OPTIONS = ['Thanh toán ngay', 'Công nợ 15 ngày', 'Công nợ 30 ngày', 'Công nợ 45 ngày'];
export const BUSINESS_TYPE_OPTIONS = ['Công ty TNHH', 'Công ty Cổ phần', 'Doanh nghiệp tư nhân', 'Hộ kinh doanh cá thể'];

/** Địa chỉ đại diện hiển thị trên lưới: ưu tiên địa chỉ giao hàng mặc định, sau đó xuất hóa đơn mặc định, cuối cùng là địa chỉ đầu tiên. */
export function getPrimaryAddress(addresses: CustomerAddress[]): CustomerAddress | null {
  return (
    addresses.find((a) => a.isDefaultShipping) ??
    addresses.find((a) => a.isDefaultBilling) ??
    addresses[0] ??
    null
  );
}

export const EMPTY_CUSTOMER_FILTERS: CustomerFilters = {
  searchText: '',
  vungSelected: [],
  tuNgay: '',
  denNgay: '',
  trangThai: '',
  nvChamSoc: '',
  customerType: '',
  customerRank: '',
  saleChannel: '',
  customerGroup: '',
  city: '',
  ward: '',
  route: '',
};
