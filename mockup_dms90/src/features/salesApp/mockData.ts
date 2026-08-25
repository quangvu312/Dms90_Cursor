export interface CustomerPoint {
  code: string;
  name: string;
  phone: string;
  address: string;
  distance?: string;
  /** NOT_VISIT | VISITING | VISITED — đồng bộ sales-app.json */
  status?: 'NOT_VISIT' | 'VISITING' | 'VISITED';
}

export const CURRENT_USER = {
  name: 'Nguyễn Thị Xuân',
  code: '135260',
  phone: '0908706789',
};

export const CURRENT_ROUTE = {
  code: 'ROUTE0000000286',
  label: '[Cici] Route 02 NPP Lan Thà... (002)',
  fullLabel: '[Cici] Route 02 NPP Lan Thà (002)',
};

export const VISIT_CUSTOMERS: CustomerPoint[] = [
  { code: 'HCM_00188891', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 33', phone: '0911233488', address: 'Hoàng Việt 33, QUẬN TÂN BÌNH, TP HCM', distance: '83.00 m', status: 'NOT_VISIT' },
  { code: 'HCM_00188892', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 34', phone: '0911233489', address: 'Hoàng Việt 34, QUẬN TÂN BÌNH, TP HCM', distance: '15.00 m', status: 'VISITING' },
  { code: 'HCM_00188893', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 35', phone: '0911233490', address: 'Hoàng Việt 35, QUẬN TÂN BÌNH, TP HCM', distance: '394.00 m', status: 'VISITED' },
];

export const CARE_CUSTOMERS: CustomerPoint[] = [
  { code: 'HCM_00188913', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 55', phone: '0911233510', address: 'Hoàng Việt 55, QUẬN TÂN BÌNH, TP HCM' },
  { code: 'HCM_00188914', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 56', phone: '0911233511', address: 'Hoàng Việt 56, QUẬN TÂN BÌNH, TP HCM' },
  { code: 'HCM_00188915', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 57', phone: '0911233512', address: 'Hoàng Việt 57, QUẬN TÂN BÌNH, TP HCM' },
  { code: 'HCM_00188916', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 58', phone: '0911233513', address: 'Hoàng Việt 58, QUẬN TÂN BÌNH, TP HCM' },
  { code: 'HCM_00188917', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 59', phone: '0911233514', address: 'Hoàng Việt 59, QUẬN TÂN BÌNH, TP HCM' },
  { code: 'HCM_00188918', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 60', phone: '0911233515', address: 'Hoàng Việt 60, QUẬN TÂN BÌNH, TP HCM' },
  { code: 'HCM_00188919', name: '[Cici] Tạp hóa ÁNH SÁNG PHƯƠNG ĐÔNG 61', phone: '0911233516', address: 'Hoàng Việt 61, QUẬN TÂN BÌNH, TP HCM' },
];

export const MORE_MENU_ITEMS = [
  { key: 'khuyen-mai', label: 'Chương trình khuyến mãi', icon: 'percent' as const },
  { key: 'trung-bay', label: 'Chương trình trưng bày', icon: 'gift' as const },
  { key: 'khach-hang', label: 'Khách hàng', icon: 'store' as const },
  { key: 'thong-bao', label: 'Thông báo', icon: 'bell' as const, badge: 2 },
  { key: 'nghi-phep', label: 'Nghỉ phép', icon: 'calendar-off' as const },
  { key: 'khao-sat', label: 'Khảo sát', icon: 'clipboard' as const },
  { key: 'ho-tro', label: 'Hỗ trợ', icon: 'headset' as const },
  { key: 'hop-dong', label: 'Hợp đồng', icon: 'file' as const },
  { key: 'telling-story', label: 'Telling Story', icon: 'book' as const },
  { key: 'cai-dat', label: 'Cài đặt ứng dụng', icon: 'settings' as const },
];

export const KPI_REPORTS = [
  { slug: 'kpi', label: 'Báo cáo KPI', summary: '92%', items: [{ label: 'Doanh số', value: '95%' }, { label: 'Coverage', value: '88%' }] },
  { slug: 'tracking', label: 'Báo cáo theo dõi đơn hàng', summary: '24 đơn', items: [{ label: 'Đang giao', value: '8' }] },
  { slug: 'daily', label: 'Báo cáo doanh số ngày', summary: '8.5M đ', items: [{ label: 'Đơn hàng', value: '5' }, { label: 'Viếng thăm', value: '12' }] },
  { slug: 'monthly', label: 'Báo cáo doanh số tháng', summary: '125M đ', items: [{ label: 'Chỉ tiêu', value: '80%' }] },
  { slug: 'stock', label: 'Báo cáo tồn kho hiện tại NPP', summary: '156 SKU', items: [{ label: 'Hết hàng', value: '3' }] },
  { slug: 'attendance', label: 'Lịch sử chấm công', summary: '22 ngày', items: [{ label: 'Đúng giờ', value: '20' }] },
  { slug: 'showcase', label: 'Báo cáo chương trình', summary: '3 CT', items: [{ label: 'Đang chạy', value: '2' }] },
  { slug: 'accumulation', label: 'Báo cáo chương trình tích lũy', summary: '3 CT', items: [{ label: 'Đang tham gia', value: '2' }] },
];

export const ORDERS = [
  {
    id: 'SO0193566',
    erpCode: 'ERP-987654321',
    time: '00:00, 28/07/2026',
    storeName: 'NORTH - lần 3 - 254',
    storeAddress: 'NORTH - lần 3 - 254, Phường Bắc Giang, BAC NINH',
    storeId: 'BNI_00516048',
    distributor: '[QC][MT] NPP - lock inventories-3000005',
    source: 'APP',
    type: 'Đơn đặt',
    warehouse: 'Kho bán - [QC][MT] NPP - lock inventories-3000005',
    total: '536,000 đ',
    status: 'Khởi tạo',
  },
  {
    id: 'SO0193565',
    erpCode: 'ERP-112233445',
    time: '00:00, 28/07/2026',
    storeName: 'NORTH - lần 3 - 254',
    storeAddress: 'NORTH - lần 3 - 254, Phường Bắc Giang, BAC NINH',
    storeId: 'BNI_00516048',
    distributor: '[QC][MT] NPP - lock inventories-3000005',
    source: 'APP',
    type: 'Đơn đặt',
    warehouse: 'Kho bán - [QC][MT] NPP - lock inventories-3000005',
    total: '2,208,400 đ',
    status: 'Khởi tạo',
  },
];

export const ORDER_STATUS_TABS = ['Khởi tạo', 'Đã duyệt', 'Đã xuất kho', 'Đã hủy'] as const;

export const NEW_CUSTOMERS_GROUPED = [
  {
    date: 'Wednesday, 08/07/2026',
    items: [
      {
        id: 'AGI_00524622',
        name: '8/7 - new 2',
        address: 'Ag 2, Phường Long Xuyên, AN GIANG',
        time: '14:34 - 08/07/2026',
        status: 'Hoạt động',
      },
      {
        id: 'BGI_00524621',
        name: '8/7- new 1',
        address: 'Bg 1, Không Biết Địa Chỉ, BAC GIANG, BAC GIANG',
        time: '14:31 - 08/07/2026',
        status: 'Hoạt động',
      }
    ]
  },
  {
    date: 'Thursday, 07/05/2026',
    items: [
      {
        id: 'CGI_00524620',
        name: '7/5 - new 1',
        address: 'Cg 1, Phường Châu Phú A, AN GIANG',
        time: '09:12 - 07/05/2026',
        status: 'Ngưng hoạt động',
      },
      {
        id: 'DGI_00524619',
        name: '7/5 - new 2',
        address: 'Dg 2, Phường Châu Phú B, AN GIANG',
        time: '08:45 - 07/05/2026',
        status: 'Ngưng hoạt động',
      }
    ]
  }
];
