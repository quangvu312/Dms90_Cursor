export type NotificationTabKey = 'chung' | 'khuyenmai';

export type NotificationIconKey = 'maintenance' | 'approval' | 'policy' | 'promo' | 'event';

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  // Mỗi phần tử là 1 mục đánh số; nếu có dòng con bắt đầu bằng "- " (nối bằng \n)
  // thì được render thành danh sách gạch đầu dòng thụt lề bên trong mục đó.
  | { type: 'orderedList'; items: string[] };

export interface NotificationItem {
  id: string;
  tab: NotificationTabKey;
  title: string;
  fullTitle: string;
  summary: string;
  time: string;
  unread: boolean;
  highlight: boolean;
  iconKey: NotificationIconKey;
  typeLabel: string;
  sentDate: string;
  category: string;
  content: ContentBlock[];
}

export interface NotificationHistoryRow {
  id: string;
  maThongBao: string;
  tieuDe: string;
  loaiThongBao: string;
  kieuHienThi: string;
  trangThaiThongBao: 'Đã gửi' | 'Nháp' | 'Đã hủy';
  ngayGuiThongBao: string;
  maNhanVien: string;
  tenNhanVien: string;
  chucVu: string;
  trangThaiNhan: 'Đã xem' | 'Chưa xem';
  ngayNhanThongBao: string;
}
