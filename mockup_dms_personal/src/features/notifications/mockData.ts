import type { NotificationItem, NotificationHistoryRow } from './types';

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  // ─── Tab "Chung" ───────────────────────────────────────────────────────────
  {
    id: 'c1',
    tab: 'chung',
    title: 'Bảo trì hệ thống DMS định kỳ',
    fullTitle: 'Bảo trì hệ thống DMS định kỳ',
    summary: 'Hệ thống DMS sẽ tạm ngưng hoạt động để nâng cấp phiên bản 2.4. Khách hàng vui lòng...',
    time: '5 phút trước',
    unread: true,
    highlight: true,
    iconKey: 'maintenance',
    typeLabel: 'Hệ thống',
    sentDate: '2/7/2026 09:25',
    category: 'Hệ thống',
    content: [
      { type: 'paragraph', text: 'Kính gửi Quý khách hàng và Đại lý,' },
      { type: 'paragraph', text: 'Nhằm nâng cao chất lượng dịch vụ, hệ thống DMS sẽ tạm ngưng hoạt động trong khung giờ bảo trì dưới đây:' },
      {
        type: 'orderedList',
        items: [
          'Thời gian bắt đầu: 02/07/2026, 23:00.',
          'Thời gian dự kiến hoàn tất: 03/07/2026, 03:00.',
          'Phạm vi ảnh hưởng: Toàn bộ chức năng đặt hàng, tra cứu công nợ và báo cáo trên DMS.',
        ],
      },
      { type: 'paragraph', text: 'Trong thời gian bảo trì, Quý khách vui lòng không thực hiện giao dịch trên hệ thống để tránh sai lệch dữ liệu. Chúng tôi xin lỗi vì sự bất tiện này và cảm ơn sự thông cảm của Quý khách.' },
    ],
  },
  {
    id: 'c2',
    tab: 'chung',
    title: 'Yêu cầu phê duyệt đơn hàng mới',
    fullTitle: 'Yêu cầu phê duyệt đơn hàng mới',
    summary: 'Nhân viên tiếp thị Nguyễn Văn A vừa gửi một yêu cầu phê duyệt đơn hàng đạt hạn mức chi...',
    time: '2 giờ trước',
    unread: true,
    highlight: false,
    iconKey: 'approval',
    typeLabel: 'Duyệt đơn hàng',
    sentDate: '2/7/2026 07:10',
    category: 'Bán hàng',
    content: [
      { type: 'paragraph', text: "Nhân viên tiếp thị Nguyễn Văn A vừa gửi một yêu cầu phê duyệt đơn hàng đạt hạn mức chiết khấu đặc biệt." },
      { type: 'paragraph', text: 'Chi tiết đơn hàng:' },
      {
        type: 'orderedList',
        items: [
          'Mã đơn hàng: DH00012456.',
          'Khách hàng: Đại lý Hoàng Gia - Khu vực Miền Nam.',
          'Giá trị đơn hàng: 128,500,000 VND.',
          'Mức chiết khấu đề xuất: 8% (vượt hạn mức tiêu chuẩn 5%).',
        ],
      },
      { type: 'paragraph', text: "Vui lòng truy cập màn hình 'Phê duyệt đơn hàng' để xem xét và phản hồi trong vòng 24 giờ." },
    ],
  },
  {
    id: 'c3',
    tab: 'chung',
    title: 'Ban hành chỉ tiêu KPI kinh doanh Tháng 7...',
    fullTitle: 'Ban hành chỉ tiêu KPI kinh doanh Tháng 7/2026',
    summary: 'Ban giám đốc đã chính thức phê duyệt và ban hành bảng chỉ tiêu doanh số và độ bao phủ cho tất cả...',
    time: '1 ngày trước',
    unread: false,
    highlight: false,
    iconKey: 'policy',
    typeLabel: 'Chính sách kinh doanh',
    sentDate: '1/7/2026 17:40',
    category: 'Kinh doanh',
    content: [
      { type: 'paragraph', text: 'Ban giám đốc đã chính thức phê duyệt và ban hành bảng chỉ tiêu doanh số và độ bao phủ cho tất cả các khu vực kinh doanh trong Tháng 7/2026.' },
      { type: 'paragraph', text: 'Nội dung chính:' },
      {
        type: 'orderedList',
        items: [
          'Chỉ tiêu doanh số toàn quốc tăng 12% so với Tháng 6/2026.',
          'Chỉ tiêu độ bao phủ khách hàng mới: tối thiểu 150 khách hàng/khu vực.',
          'Thời gian áp dụng: Từ 01/07/2026 đến 31/07/2026.',
        ],
      },
      { type: 'paragraph', text: 'Đề nghị các Giám sát bán hàng và Quản lý khu vực phổ biến chỉ tiêu đến toàn bộ nhân viên kinh doanh và cập nhật tiến độ thực hiện hàng tuần trên hệ thống DMS.' },
    ],
  },

  // ─── Tab "Khuyến mãi" ──────────────────────────────────────────────────────
  {
    id: 'k1',
    tab: 'khuyenmai',
    title: 'CTKM hè 2026: Tặng 5% chiết khấu đ...',
    fullTitle: 'CTKM hè 2026: Tặng 5% chiết khấu đơn hàng trên 50 triệu',
    summary: 'Áp dụng chương trình khuyến mãi đặc biệt dành riêng cho ngành hàng gia dụng. Nhập mã...',
    time: '1 giờ trước',
    unread: true,
    highlight: true,
    iconKey: 'promo',
    typeLabel: 'Khuyến mãi',
    sentDate: '1/7/2026 04:30',
    category: 'Kinh doanh',
    content: [
      { type: 'paragraph', text: "Chi tiết Chương trình khuyến mãi 'Bùng nổ doanh số hè 2026':" },
      {
        type: 'orderedList',
        items: [
          'Đối tượng áp dụng: Tất cả Đại lý và Khách hàng hoạt động trên hệ thống DMS.',
          'Ngành hàng áp dụng: Nhóm sản phẩm Điện gia dụng và Thiết bị nhà bếp thông minh.',
          'Thể lệ:\n- Đối với đơn hàng có giá trị thanh toán từ 50,000,000 VND trở lên (chưa VAT), khách hàng được tặng trực tiếp 5% chiết khấu thương mại vào hóa đơn.\n- Được cộng dồn với các chương trình khuyến mãi tích lũy tháng nếu có.',
          'Thời gian áp dụng: Từ ngày 01/07/2026 đến hết ngày 31/07/2026.',
        ],
      },
      { type: 'paragraph', text: 'Thông tin đã được cấu hình tự động trên hệ thống tạo đơn hàng DMS. Hãy chủ động tư vấn cho khách hàng tối ưu giá trị đơn hàng!' },
    ],
  },
  {
    id: 'k2',
    tab: 'khuyenmai',
    title: "Đăng ký tham gia 'Hội nghị Khách hàn...",
    fullTitle: "Đăng ký tham gia 'Hội nghị Khách hàng DMS 2026'",
    summary: 'Sự kiện thường niên kết nối hệ sinh thái phân phối. Đăng ký trước ngày 10/07 để nhận ngay...',
    time: '4 giờ trước',
    unread: true,
    highlight: false,
    iconKey: 'event',
    typeLabel: 'Sự kiện',
    sentDate: '2/7/2026 05:30',
    category: 'Đào tạo & Sự kiện',
    content: [
      { type: 'paragraph', text: "Sự kiện thường niên kết nối hệ sinh thái phân phối 'Hội nghị Khách hàng DMS 2026' sẽ chính thức diễn ra vào tháng 8/2026." },
      { type: 'paragraph', text: 'Thông tin sự kiện:' },
      {
        type: 'orderedList',
        items: [
          'Thời gian: 15/08/2026 - 16/08/2026.',
          'Địa điểm: Trung tâm Hội nghị Quốc gia, Hà Nội.',
          'Đối tượng tham gia: Toàn bộ Đại lý, NPP và Khách hàng hoạt động trên hệ thống DMS.',
        ],
      },
      { type: 'paragraph', text: 'Vui lòng đăng ký tham gia trước ngày 10/07/2026 để nhận ưu đãi quà tặng dành cho 100 người đăng ký sớm nhất.' },
    ],
  },
  {
    id: 'k3',
    tab: 'khuyenmai',
    title: 'Kết quả đua top doanh số tuần 4 Tháng 6...',
    fullTitle: 'Kết quả đua top doanh số tuần 4 Tháng 6/2026',
    summary: 'Chúc mừng NPP Hoàng Gia đã xuất sắc dẫn đầu bảng xếp hạng khu vực miền Nam với mức tăng...',
    time: '2 ngày trước',
    unread: false,
    highlight: false,
    iconKey: 'promo',
    typeLabel: 'Khuyến mãi',
    sentDate: '30/6/2026 18:00',
    category: 'Kinh doanh',
    content: [
      { type: 'paragraph', text: 'Chúc mừng NPP Hoàng Gia đã xuất sắc dẫn đầu bảng xếp hạng khu vực miền Nam với mức tăng trưởng doanh số vượt trội trong tuần 4 Tháng 6/2026.' },
      { type: 'paragraph', text: 'Bảng xếp hạng Top 3:' },
      {
        type: 'orderedList',
        items: [
          'NPP Hoàng Gia - Khu vực Miền Nam: Tăng trưởng 24.5%.',
          'NPP Phú Thành - Khu vực Miền Trung: Tăng trưởng 19.2%.',
          'NPP Đại Phát - Khu vực Miền Bắc: Tăng trưởng 15.8%.',
        ],
      },
      { type: 'paragraph', text: 'Chương trình đua top doanh số tiếp tục diễn ra đến hết Tháng 7/2026. Chúc các đơn vị tiếp tục đạt thành tích cao!' },
    ],
  },
];

// Chi tiết đại diện cho các dòng trong bảng "Lịch Sử Thông Báo" (NOTI00000082),
// dùng khi người dùng bấm "Xem chi tiết" trên màn hình lịch sử.
export const HISTORY_DETAIL_NOTIFICATION: NotificationItem = {
  id: 'noti-00000082',
  tab: 'khuyenmai',
  title: '29/6 - thông báo dài 2',
  fullTitle: '29/6 - thông báo dài 2',
  summary: 'Chi tiết chương trình khuyến mãi gửi đến toàn bộ nhân viên kinh doanh khu vực Mekong.',
  time: '29-06-2026 18:02:10',
  unread: false,
  highlight: false,
  iconKey: 'promo',
  typeLabel: 'Khuyến mãi',
  sentDate: '29/6/2026 18:02',
  category: 'Kinh doanh',
  content: [
    { type: 'paragraph', text: 'Thông báo được gửi đồng loạt đến các Giám sát bán hàng và Quản lý khu vực thuộc khu vực Mekong.' },
    {
      type: 'orderedList',
      items: [
        'Nội dung: Cập nhật chương trình khuyến mãi áp dụng từ Tháng 7/2026.',
        'Đối tượng nhận: Giám sát bán hàng, Quản lý khu vực, Quản lý vùng.',
        'Kênh gửi: Ứng dụng DMS và ERP.',
      ],
    },
    { type: 'paragraph', text: 'Vui lòng xem chi tiết trạng thái tiếp nhận của từng nhân viên trong bảng dữ liệu bên dưới.' },
  ],
};

const HISTORY_RECIPIENTS: Array<Pick<NotificationHistoryRow, 'maNhanVien' | 'tenNhanVien' | 'chucVu'>> = [
  { maNhanVien: 'QCMTSS1', tenNhanVien: 'qcmtss 1', chucVu: 'Giám sát bán hàng' },
  { maNhanVien: 'QCMTSS2', tenNhanVien: 'QC MT SS 2', chucVu: 'Giám sát bán hàng' },
  { maNhanVien: 'QCMTSS3', tenNhanVien: 'QC MT SS 3', chucVu: 'Giám sát bán hàng' },
  { maNhanVien: 'QCMTBTRSM', tenNhanVien: 'QCMT bến tre - RSM - Mekong', chucVu: 'Quản lý vùng' },
  { maNhanVien: 'QCMTBTRASM', tenNhanVien: 'QCMT BẾN TRE - ASM - mekong1-UNKNOWN', chucVu: 'Quản lý khu vực' },
  { maNhanVien: 'QCMTBTRSS', tenNhanVien: 'QCMTBT SS - mekong1', chucVu: 'Giám sát bán hàng' },
  { maNhanVien: 'QCMTBTRSM1', tenNhanVien: 'QCMT - ASM - Mekong - BEN TRE - DONG THAP', chucVu: 'Quản lý khu vực' },
  { maNhanVien: 'QCMTNEWASMSE', tenNhanVien: 'QCMTNEW - ASM - QL KHU VỰC ĐÔNG NAM', chucVu: 'Quản lý khu vực' },
  { maNhanVien: 'ERPQCMTSS02', tenNhanVien: '[ERP][QCMT] SS 01', chucVu: 'Giám sát bán hàng' },
  { maNhanVien: 'ERPQCMTSS03', tenNhanVien: '[ERP][QCMT] SS 03', chucVu: 'Giám sát bán hàng' },
];

export const MOCK_HISTORY_ROWS: NotificationHistoryRow[] = HISTORY_RECIPIENTS.map((r, idx) => ({
  id: `noti00000082-${idx}`,
  maThongBao: 'NOTI00000082',
  tieuDe: '29/6 - thông báo dài 2',
  loaiThongBao: 'Khuyến mãi',
  kieuHienThi: 'Bình thường',
  trangThaiThongBao: 'Đã gửi',
  ngayGuiThongBao: '29-06-2026 18:02:10',
  ...r,
  trangThaiNhan: 'Chưa xem',
  ngayNhanThongBao: '29-06-2026 18:02:10',
}));

// Số liệu phân trang tĩnh mô phỏng khối lượng dữ liệu thật của bảng (32.598 dòng),
// chỉ hiển thị khi chưa áp dụng bộ lọc tìm kiếm nào.
export const HISTORY_TOTAL_ROWS_DECORATIVE = 32598;
