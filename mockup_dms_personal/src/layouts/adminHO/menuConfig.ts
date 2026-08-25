import {
  LayoutDashboard, Database, BarChart2, Package, ShoppingCart, MapPin,
  Tag, Monitor, Award, ClipboardList, Briefcase,
  HelpCircle, Bell, FileText, Settings, ScrollText, Smartphone, BookOpen,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Level3Item {
  key: string;
  label: string;
}

export interface Level2Item {
  key: string;
  label: string;
  children?: Level3Item[];
}

export interface MenuItem {
  key: string;
  label: string;
  icon: LucideIcon;
  children?: Level2Item[];
}

export const adminHOMenu: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    key: 'app-saleman',
    label: 'App SaleMan',
    icon: Smartphone,
  },
  {
    key: 'du-lieu-nen',
    label: 'Dữ Liệu Nền',
    icon: Database,
    children: [
      {
        key: 'dia-ly',
        label: 'Địa Lý',
        children: [
          { key: 'phan-vung', label: 'Phân Vùng' },
        ],
      },
      {
        key: 'kinh-doanh',
        label: 'Kinh Doanh',
        children: [
          { key: 'cong-ty', label: 'Công Ty' },
          { key: 'kenh-ban-hang', label: 'Kênh Bán Hàng' },
          { key: 'don-vi-kinh-doanh', label: 'Đơn Vị Kinh Doanh' },
          { key: 'loai-diem-ban', label: 'Loại Khách Hàng' },
          { key: 'hang-diem-ban', label: 'Hạng Khách Hàng' },
          { key: 'nhom-diem-ban', label: 'Nhóm Khách Hàng' },
          { key: 'vi-tri-diem-ban', label: 'Vị Trí Khách Hàng' },
          { key: 'danh-sach-diem-ban', label: 'Danh Sách Khách Hàng' },
          { key: 'nhan-vien-ban-hang', label: 'Nhân Viên Kinh Doanh' },
          { key: 'danh-sach-lien-he', label: 'Danh Sách Liên Hệ' },
          { key: 'danh-sach-khach-hang', label: 'Danh Sách Khách Hàng' },
          { key: 'nha-phan-phoi', label: 'Nhà Phân Phối' },
        ],
      },
      {
        key: 'san-pham',
        label: 'Sản Phẩm',
        children: [
          { key: 'cay-phan-cap', label: 'Cây Phân Cấp' },
          { key: 'don-vi-do-luong', label: 'Đơn Vị Đo Lường' },
          { key: 'danh-sach-san-pham', label: 'Danh Sách Sản Phẩm' },
          { key: 'nhom-san-pham', label: 'Nhóm Sản Phẩm' },
          { key: 'bang-gia-ban', label: 'Bảng Giá Bán' },
          { key: 'bang-gia-mua', label: 'Bảng Giá Mua' },
          { key: 'thue', label: 'Thuế' },
        ],
      },
    ],
  },
  {
    key: 'quan-ly-chi-tieu',
    label: 'Quản Lý Chỉ Tiêu',
    icon: BarChart2,
    children: [
      { key: 'chi-tieu-kpi', label: 'Chỉ Tiêu KPI' },
      { key: 'giao-kpi', label: 'Giao KPI' },
      { key: 'bao-cao-kpi', label: 'Báo Cáo KPI' },
    ],
  },
  {
    key: 'quan-ly-kho',
    label: 'Quản Lý Kho',
    icon: Package,
    children: [
      { key: 'duyet-kiem-kho-npp', label: 'Duyệt Kiểm Kho NPP' },
      { key: 'duyet-npp-tra-hang', label: 'Duyệt NPP Trả Hàng' },
      { key: 'duyet-tra-hang-nguyen-don', label: 'Duyệt Trả Hàng Nguyên Đơn' },
      { key: 'import-ton-kho-dau-ky', label: 'Import Tồn Kho Đầu Kỳ' },
      { key: 'chuyen-kho-npp', label: 'Chuyển Kho NPP' },
    ],
  },
  {
    key: 'quan-ly-ban-hang',
    label: 'Quản Lý Bán Hàng',
    icon: ShoppingCart,
    children: [
      { key: 'duyet-chuyen-kho-noi-bo-npp', label: 'Duyệt Chuyển Kho Nội Bộ NPP' },
      { key: 'dat-hang-npp', label: 'Đặt hàng NPP' },
      { key: 'tong-hop-don-hang-diem-ban', label: 'Tổng Hợp Đơn Hàng Khách Hàng' },
    ],
  },
  {
    key: 'quan-ly-tuyen-ban-hang',
    label: 'Quản Lý Tuyến Bán Hàng',
    icon: MapPin,
    children: [
      { key: 'nhiem-vu', label: 'Nhiệm vụ' },
      { key: 'nhom-nhiem-vu', label: 'Nhóm nhiệm vụ' },
      { key: 'tuyen-ban-hang', label: 'Tuyến bán hàng' },
      { key: 'tuyen-thuc-te', label: 'Tuyến thực tế' },
      { key: 'chuyen-tuyen-nha-phan-phoi', label: 'Chuyển tuyến Nhà phân phối' },
    ],
  },
  {
    key: 'chuong-trinh-khuyen-mai',
    label: 'Chương Trình Khuyến Mãi',
    icon: Tag,
    children: [
      { key: 'quan-ly-khuyen-mai', label: 'Quản lý khuyến mãi' },
    ],
  },
  {
    key: 'quan-ly-trung-bay',
    label: 'Quản Lý Trưng Bày',
    icon: Monitor,
    children: [
      { key: 'tong-quan-ct-trung-bay', label: 'Tổng Quan Chương Trình Trưng Bày' },
      { key: 'ct-trung-bay', label: 'Chương Trình Trưng Bày' },
      { key: 'ds-dang-ky-trung-bay', label: 'Danh Sách Đăng Ký Trưng Bày' },
      { key: 'tien-trinh-trung-bay', label: 'Tiến Trình Trưng Bày' },
      { key: 'ds-tra-thuong-trung-bay', label: 'Danh Sách Trả Thưởng Trưng Bày' },
    ],
  },
  {
    key: 'quan-ly-tich-luy',
    label: 'Quản Lý Tích Lũy',
    icon: Award,
    children: [
      { key: 'tong-quan-ct-tich-luy', label: 'Tổng Quan Chương Trình Tích Lũy' },
      { key: 'ct-tich-luy', label: 'Chương Trình Tích Lũy' },
      { key: 'ds-dang-ky-tich-luy', label: 'Danh Sách Đăng Ký Tích Lũy' },
      { key: 'tien-trinh-tich-luy', label: 'Tiến Trình Tích Lũy' },
      { key: 'ds-tra-thuong-tich-luy', label: 'Danh Sách Trả Thưởng Tích Lũy' },
    ],
  },
  {
    key: 'quan-ly-khao-sat',
    label: 'Quản Lý Khảo Sát',
    icon: ClipboardList,
    children: [
      { key: 'bo-khao-sat', label: 'Bộ Khảo Sát' },
      { key: 'thong-ke-khao-sat', label: 'Thống Kê Khảo Sát' },
    ],
  },
  {
    key: 'quan-ly-lich-lam-viec',
    label: 'Quản Lý Lịch Làm Việc',
    icon: Briefcase,
    children: [
      { key: 'ke-hoach-lam-viec', label: 'Kế Hoạch Làm Việc' },
      { key: 'duyet-ke-hoach-lam-viec', label: 'Duyệt Kế Hoạch Làm Việc' },
      { key: 'yeu-cau-nghi-phep', label: 'Yêu Cầu Nghỉ Phép' },
    ],
  },
  {
    key: 'ho-tro',
    label: 'Hỗ Trợ',
    icon: HelpCircle,
    children: [
      { key: 'xu-ly-yeu-cau', label: 'Hỗ Trợ - Xử Lý Yêu Cầu' },
    ],
  },
  {
    key: 'quan-ly-thong-bao',
    label: 'Quản Lý Thông Báo',
    icon: Bell,
    children: [
      { key: 'cai-dat-thong-bao', label: 'Cài Đặt Thông Báo' },
      { key: 'lich-su-thong-bao', label: 'Lịch Sử Thông Báo' },
    ],
  },
  {
    key: 'telling-story',
    label: 'Telling Story',
    icon: BookOpen,
    children: [
      { key: 'quan-ly-danh-muc', label: 'Quản lý danh mục' },
      { key: 'quan-ly-noi-dung', label: 'Quản lý nội dung' },
    ],
  },
  {
    key: 'quan-ly-hop-dong',
    label: 'Quản Lý Hợp Đồng',
    icon: ScrollText,
    children: [
      { key: 'hop-dong-mau', label: 'Hợp đồng mẫu' },
      { key: 'hop-dong-khach-hang', label: 'Hợp đồng khách hàng' },
    ],
  },
  {
    key: 'bao-cao',
    label: 'Báo Cáo',
    icon: FileText,
    children: [
      {
        key: 'bao-cao-kho',
        label: 'Báo Cáo Kho',
        children: [
          { key: 'ton-kho-hien-tai-npp', label: 'Báo Cáo Tồn Kho Hiện Tại NPP' },
          { key: 'nhap-xuat-ton-npp', label: 'Nhập Xuất Tồn NPP' },
          { key: 'nhap-kho', label: 'Nhập Kho' },
          { key: 'xuat-kho', label: 'Xuất Kho' },
        ],
      },
      {
        key: 'bao-cao-khao-sat',
        label: 'Báo Cáo Khảo Sát',
        children: [
          { key: 'bks-bo-khao-sat', label: 'Bộ khảo sát' },
          { key: 'bks-thong-ke-khao-sat', label: 'Thống kê khảo sát' },
        ],
      },
      {
        key: 'bao-cao-ban-hang',
        label: 'Báo Cáo Bán Hàng',
        children: [
          { key: 'tong-hop-don-hang-ban-npp', label: 'Tổng Hợp Đơn Hàng Bán NPP' },
          { key: 'doanh-thu-san-pham', label: 'Doanh Thu Theo Sản Phẩm' },
          { key: 'doanh-thu-diem-ban', label: 'Doanh Thu Theo Khách Hàng' },
          { key: 'doanh-thu-nhan-vien', label: 'Doanh Thu Theo Nhân Viên Kinh Doanh' },
          { key: 'don-tra-hang', label: 'Đơn Trả Hàng' },
          { key: 'npp-dat-hang', label: 'NPP Đặt Hàng' },
        ],
      },
      {
        key: 'bao-cao-tuyen-giam-sat',
        label: 'Báo Cáo Tuyến & Giám Sát',
        children: [
          { key: 'tong-hop-vieng-tham-db', label: 'Tổng Hợp Viếng Thăm Khách Hàng' },
          { key: 'chi-tiet-vieng-tham-db', label: 'Chi Tiết Viếng Thăm Khách Hàng' },
          { key: 'phan-tich-hieu-qua-tuyen', label: 'Phân Tích Hiệu Quả Tuyến' },
          { key: 'tong-hop-tuyen-ban-hang', label: 'Tổng Hợp Tuyến Bán Hàng' },
          { key: 'doanh-so-db-tren-tuyen', label: 'Doanh Số Khách Hàng Trên Tuyến' },
          { key: 'truy-van-toa-do-nv', label: 'Truy Vấn Tọa Độ Nhân Viên' },
          { key: 'do-phu-san-pham', label: 'Độ Phủ Sản Phẩm' },
          { key: 'cham-cong', label: 'Chấm Công' },
          { key: 'hinh-anh-bay-hang', label: 'Hình Ảnh Bày Hàng' },
          { key: 'ton-kho-diem-ban', label: 'Tồn Kho Khách Hàng' },
        ],
      },
    ],
  },
  {
    key: 'quan-tri-he-thong',
    label: 'Quản Trị Hệ Thống',
    icon: Settings,
    children: [
      { key: 'tai-khoan-nguoi-dung', label: 'Tài Khoản Người Dùng' },
      { key: 'chot-so-ky', label: 'Chốt Số Kỳ' },
      { key: 'mo-chot-so', label: 'Mở Chốt Số' },
      { key: 'nhom-quyen', label: 'Nhóm Quyền' },
      { key: 'du-lieu-chung', label: 'Dữ Liệu Chung' },
      { key: 'cau-hinh-cham-cong', label: 'Cấu Hình Chấm Công' },
      { key: 'thiet-lap-vi-tri-cham-cong', label: 'Thiết Lập Vị Trí Chấm Công' },
      { key: 'cau-hinh-chung', label: 'Cấu Hình Chung' },
      { key: 'thuoc-tinh', label: 'Thuộc Tính' },
    ],
  },
];
