/** React-only pages (không có trong Prototype). */
export const REACT_ONLY_ADMIN_ROUTES = new Set<string>([
  'dashboard',
  'du-lieu-nen/dia-ly/phan-vung',
  'du-lieu-nen/kinh-doanh/danh-sach-lien-he',
  'du-lieu-nen/kinh-doanh/danh-sach-khach-hang',
  'quan-ly-hop-dong/hop-dong-mau',
  'quan-ly-hop-dong/hop-dong-khach-hang',
  'quan-ly-hop-dong/danh-sach-hop-dong',
]);

/** Menu admin → route Prototype. Prototype là gốc khi trùng màn. */
export const ADMIN_TO_PROTO: Record<string, string> = {
  // dashboard dùng React DashboardPage

  'du-lieu-nen/kinh-doanh/cong-ty': '/master/business/company',
  'du-lieu-nen/kinh-doanh/kenh-ban-hang': '/master/business/channel',
  'du-lieu-nen/kinh-doanh/don-vi-kinh-doanh': '/master/business/business-unit',
  'du-lieu-nen/kinh-doanh/loai-diem-ban': '/master/business/store-type',
  'du-lieu-nen/kinh-doanh/hang-diem-ban': '/master/business/store-rank',
  'du-lieu-nen/kinh-doanh/nhom-diem-ban': '/master/business/store-group',
  'du-lieu-nen/kinh-doanh/vi-tri-diem-ban': '/master/business/store-location',
  'du-lieu-nen/kinh-doanh/danh-sach-diem-ban': '/master/business/store',
  'du-lieu-nen/kinh-doanh/nhan-vien-ban-hang': '/master/business/employee',
  'du-lieu-nen/kinh-doanh/nha-phan-phoi': '/master/business/distributor',

  'du-lieu-nen/san-pham/cay-phan-cap': '/master/product/category',
  'du-lieu-nen/san-pham/don-vi-do-luong': '/master/product/uom',
  'du-lieu-nen/san-pham/danh-sach-san-pham': '/master/product/list',
  'du-lieu-nen/san-pham/nhom-san-pham': '/master/product/group',
  'du-lieu-nen/san-pham/bang-gia-ban': '/master/product/selling-price',

  'quan-ly-chi-tieu/chi-tieu-kpi': '/kpi/indicator',
  'quan-ly-chi-tieu/giao-kpi': '/kpi/target',
  'quan-ly-chi-tieu/bao-cao-kpi': '/kpi/report',

  'quan-ly-kho/duyet-kiem-kho-npp': '/inventories/distributor',
  'quan-ly-kho/duyet-npp-tra-hang': '/inventories/retored-distributor',
  'quan-ly-kho/duyet-tra-hang-nguyen-don': '/inventories/restored-full-order',

  'quan-ly-ban-hang/dat-hang-npp': '/sale/order',
  'quan-ly-ban-hang/tong-hop-don-hang-diem-ban': '/sale/order-summary',

  'quan-ly-tuyen-ban-hang/nhiem-vu': '/route/task',
  'quan-ly-tuyen-ban-hang/nhom-nhiem-vu': '/route/task-group',
  'quan-ly-tuyen-ban-hang/tuyen-ban-hang': '/route',
  'quan-ly-tuyen-ban-hang/tuyen-thuc-te': '/route/real-route',
  'quan-ly-tuyen-ban-hang/chuyen-tuyen-nha-phan-phoi': '/route/distributor-transfer',

  'chuong-trinh-khuyen-mai/quan-ly-khuyen-mai': '/promotion/event',

  'quan-ly-trung-bay/tong-quan-ct-trung-bay': '/display/overview',
  'quan-ly-trung-bay/ct-trung-bay': '/display/event',
  'quan-ly-trung-bay/ds-dang-ky-trung-bay': '/display/participant',
  'quan-ly-trung-bay/tien-trinh-trung-bay': '/display/process',
  'quan-ly-trung-bay/ds-tra-thuong-trung-bay': '/display/reward',

  'quan-ly-tich-luy/tong-quan-ct-tich-luy': '/accumulate/overview',
  'quan-ly-tich-luy/ct-tich-luy': '/accumulate/event',
  'quan-ly-tich-luy/ds-dang-ky-tich-luy': '/accumulate/participant',
  'quan-ly-tich-luy/tien-trinh-tich-luy': '/accumulate/process',
  'quan-ly-tich-luy/ds-tra-thuong-tich-luy': '/accumulate/reward',

  'quan-ly-khao-sat/bo-khao-sat': '/survey/setting',
  'quan-ly-khao-sat/thong-ke-khao-sat': '/survey/report',

  'ho-tro/xu-ly-yeu-cau': '/support/ticket',

  'quan-ly-thong-bao/cai-dat-thong-bao': '/notify/setting',
  'quan-ly-thong-bao/lich-su-thong-bao': '/notify/history',

  'bao-cao/bao-cao-kho/ton-kho-hien-tai-npp': '/inventories/report/distributor',
  'bao-cao/bao-cao-kho/nhap-xuat-ton-npp': '/inventories/report/existence',
  'bao-cao/bao-cao-kho/nhap-kho': '/inventories/report/import',
  'bao-cao/bao-cao-kho/xuat-kho': '/inventories/report/export',
  'bao-cao/bao-cao-khao-sat/bks-bo-khao-sat': '/survey/setting',
  'bao-cao/bao-cao-khao-sat/bks-thong-ke-khao-sat': '/survey/report',
  'bao-cao/bao-cao-ban-hang/tong-hop-don-hang-ban-npp': '/report/sale/selling-order',
  'bao-cao/bao-cao-ban-hang/doanh-thu-san-pham': '/report/sale/product-revenue',
  'bao-cao/bao-cao-ban-hang/doanh-thu-diem-ban': '/report/sale/customer-revenue',
  'bao-cao/bao-cao-ban-hang/doanh-thu-nhan-vien': '/report/sale/salesman-revenue',
  'bao-cao/bao-cao-ban-hang/don-tra-hang': '/report/sale/return-order',

  'quan-tri-he-thong/tai-khoan-nguoi-dung': '/system/account',
  'quan-tri-he-thong/chot-so-ky': '/system/closing',
  'quan-tri-he-thong/mo-chot-so': '/system/unlock',
  'quan-tri-he-thong/nhom-quyen': '/system/role',
  'quan-tri-he-thong/du-lieu-chung': '/system/master-data',
  'quan-tri-he-thong/cau-hinh-cham-cong': '/system/working-time-setting',
  'quan-tri-he-thong/thiet-lap-vi-tri-cham-cong': '/system/time-keeping-position',
  'quan-tri-he-thong/cau-hinh-chung': '/system/setting',
  'quan-tri-he-thong/thuoc-tinh': '/system/attribute',

  'quan-ly-hop-dong/hop-dong-mau': '/contract/templates',
  'quan-ly-hop-dong/hop-dong-khach-hang': '/contract/customers',
  // Backward compatible (redirect handler → /contract/customers)
  'quan-ly-hop-dong/danh-sach-hop-dong': '/contract/list',

  'telling-story/quan-ly-danh-muc': '/telling-story/catalog',
  'telling-story/quan-ly-noi-dung': '/telling-story/content',
};

const PROTO_TO_ADMIN: Record<string, string> = Object.fromEntries(
  Object.entries(ADMIN_TO_PROTO).map(([admin, proto]) => [proto, `/admin/${admin}`]),
);

export function isAdminRouteEnabled(routeKey: string): boolean {
  return REACT_ONLY_ADMIN_ROUTES.has(routeKey) || Boolean(ADMIN_TO_PROTO[routeKey]);
}

export function protoPathToAdmin(protoPath: string): string {
  const pathOnly = protoPath.split('?')[0];
  return PROTO_TO_ADMIN[pathOnly] || `/admin/page${pathOnly}`;
}

export function adminPathToProto(pathname: string): string | null {
  const rest = pathname.replace(/^\/admin\/?/, '');
  if (ADMIN_TO_PROTO[rest]) return ADMIN_TO_PROTO[rest];
  if (rest.startsWith('page/')) {
    return '/' + rest.slice('page/'.length);
  }
  return null;
}
