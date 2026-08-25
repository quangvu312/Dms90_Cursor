import type { Customer, CustomerAddress } from './types';

const NAMES = [
  'Cty TNHH Thương mại Phúc An', 'Tạp hóa Cô Ba', 'Siêu thị Mini Gia Phát',
  'Cty CP Phân phối Đông Dương', 'Nhà thuốc Minh Tâm', 'Cửa hàng Bách Hóa Xanh Q7',
  'Cty TNHH SX-TM Việt Thịnh', 'Đại lý Kim Ngân', 'Cty CP Thương mại Toàn Cầu',
  'Hộ KD Nguyễn Thị Lan', 'Tạp hóa Anh Tuấn', 'Siêu thị Mini Thành Đạt',
  'Cty TNHH Phân phối Sao Việt', 'Nhà thuốc Hồng Phúc', 'Cửa hàng tiện lợi 24h Q1',
  'Cty CP Đầu tư Nam Long', 'Đại lý Hưng Thịnh', 'Hộ KD Trần Văn Bình',
  'Cty TNHH TM Đại Phát', 'Tạp hóa Chị Sáu',
];
const WARDS = ['Bến Nghé', 'Tân Định', 'Linh Trung', 'Bình Mỹ', 'An Phú'];
const CITIES = ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ'];
const REGIONS = ['Miền Nam', 'Miền Bắc', 'Miền Trung'];
const AREAS = ['Khu vực 1', 'Khu vực 2', 'Khu vực 3', 'Khu vực 4'];
const ROUTES = ['Tuyến Q1-Q3', 'Tuyến Bình Thạnh', 'Tuyến Thủ Đức', 'Tuyến Q7-Nhà Bè'];
const STAFF = ['Trần Văn Hùng', 'Lê Thị Mai', 'Phạm Quốc Bảo', 'Ngô Thị Thu'];
const GROUPS = ['Bán lẻ', 'Đại lý cấp 1', 'Đại lý cấp 2', 'Nhà phân phối'];
const CHANNELS = ['GT (Truyền thống)', 'MT (Hiện đại)', 'Online', 'Horeca'];
const SYNC: Customer['syncStatus'][] = ['Synced', 'Pending', 'Failed'];

function buildCustomer(i: number): Customer {
  const idx = i - 1;
  const isCompany = i % 3 !== 0;
  const sync = SYNC[idx % 3];
  const city = CITIES[idx % 4];
  const ward = WARDS[idx % 5];
  const addressLine1 = `${12 + i} Đường Lê Lợi`;
  const companyName = NAMES[idx];

  return {
    id: String(i),
    customerCode: `KH-${1000 + i}`,
    erpCode: sync === 'Synced' ? `ERP-${50000 + i}` : '',
    syncStatus: sync,

    customerType: isCompany ? 'Công ty' : 'Cá nhân',
    active: i % 4 !== 0,
    companyName: isCompany ? companyName : '',
    lastName: isCompany ? '' : 'Nguyễn',
    middleName: isCompany ? '' : 'Thị',
    firstName: isCompany ? '' : `Lan ${i}`,
    parentCustomer: '',

    email: `khachhang${i}@email.com`,
    phone: `09${(10 + i) % 100}${String(100 + i).padStart(3, '0')}${String(i).padStart(3, '0')}`.slice(0, 10),
    fax: isCompany ? `028-3${900 + i}-${1000 + i}` : '',
    taxCode: isCompany ? `031${(1000000 + i)}` : `0${79000000 + i * 137}`,
    taxIssuePlace: isCompany ? 'Cục thuế TP. HCM' : `CA ${city}`,
    taxIssueDate: `0${(i % 9) + 1}/0${(i % 9) + 1}/2022`,
    businessType: isCompany ? 'Công ty TNHH' : '',
    taxValidityStatus: sync === 'Failed' ? 'Chưa xác thực' : 'Đã xác thực',
    taxIdentityLocked: sync !== 'Failed',

    customerGroup: GROUPS[idx % 4],
    businessUnit: `BU ${REGIONS[idx % 3]}`,
    saleChannel: CHANNELS[idx % 4],
    storeType: ['Tạp hóa', 'Siêu thị mini', 'Nhà thuốc', 'Cửa hàng tiện lợi'][idx % 4],
    storeRank: ['Hạng A', 'Hạng B', 'Hạng C'][idx % 3],
    storeLocation: ['Mặt tiền đường lớn', 'Trong hẻm', 'Trong chợ', 'Khu dân cư'][idx % 4],

    currency: 'VND',
    paymentTerm: ['Thanh toán ngay', 'Công nợ 15 ngày', 'Công nợ 30 ngày'][idx % 3],
    creditLimit: (idx % 5) * 20_000_000,

    images: [],

    contacts: [
      { id: `${i}-c1`, contactCode: `LH-${1040 + i}`, name: `Người liên hệ ${i}A`, phone: '0901 234 567', jobTitle: 'Quản lý', status: 'Active' },
    ],

    addresses: buildAddresses(i, idx, isCompany, companyName, city, ward, addressLine1),
    mapAddress: `${addressee(isCompany, companyName, i)}; ${addressLine1}; P. ${ward}; ${city}; Việt Nam`,
    latitude: (10.7 + idx * 0.013).toFixed(6),
    longitude: (106.6 + idx * 0.011).toFixed(6),

    vung: REGIONS[idx % 3],
    khuVuc: AREAS[idx % 4],
    tuyen: ROUTES[idx % 4],
    nvChamSoc: STAFF[idx % 4],
    ngayTao: `0${(i % 28) + 1}/06/2026`,
    nguoiTao: STAFF[(idx + 1) % 4],
    ngayCapNhat: `1${idx % 9}/07/2026`,
    nguoiCapNhat: STAFF[(idx + 2) % 4],
  };
}

function addressee(isCompany: boolean, companyName: string, i: number): string {
  return isCompany ? companyName : `Nguyễn Thị Lan ${i}`;
}

function buildAddresses(
  i: number,
  idx: number,
  isCompany: boolean,
  companyName: string,
  city: string,
  ward: string,
  addressLine1: string,
): CustomerAddress[] {
  const name = addressee(isCompany, companyName, i);
  const mainAddress: CustomerAddress = {
    id: `${i}-a1`,
    label: 'Trụ sở chính',
    isDefaultShipping: true,
    isDefaultBilling: true,
    addressee: name,
    phone: `09${(10 + i) % 100}${String(100 + i).padStart(3, '0')}${String(i).padStart(3, '0')}`.slice(0, 10),
    country: 'Việt Nam',
    city,
    ward,
    addressLine1,
  };

  if (i % 3 !== 0) {
    return [mainAddress];
  }

  const otherCity = CITIES[(idx + 1) % 4];
  const otherWard = WARDS[(idx + 2) % 5];
  const otherAddressLine1 = `${20 + i} Đường Nguyễn Huệ`;
  const shippingAddress: CustomerAddress = {
    id: `${i}-a2`,
    label: 'Kho giao hàng',
    isDefaultShipping: false,
    isDefaultBilling: false,
    addressee: name,
    phone: mainAddress.phone,
    country: 'Việt Nam',
    city: otherCity,
    ward: otherWard,
    addressLine1: otherAddressLine1,
  };
  mainAddress.isDefaultShipping = false;
  shippingAddress.isDefaultShipping = true;

  return [mainAddress, shippingAddress];
}

export const INITIAL_CUSTOMERS: Customer[] = Array.from({ length: 20 }, (_, i) => buildCustomer(i + 1));
