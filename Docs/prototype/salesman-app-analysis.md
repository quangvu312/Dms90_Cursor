# SaleMan App Analysis

Nguồn Mobile: `VIGO.html` — chỉ phần `/sales-app/*`. Không clone Desktop DMS trong file đó.

## Mobile Routes

| Path | Màn hình |
|------|----------|
| `/sales-app` | Redirect → `/sales-app/login` |
| `/sales-app/login` | Đăng nhập |
| `/sales-app/vieng-tham` | Danh sách viếng thăm |
| `/sales-app/vieng-tham/:id` | Chi tiết viếng thăm |
| `/sales-app/vieng-tham/:id/don-hang` | Đơn hàng tại điểm bán |
| `/sales-app/vieng-tham/:id/don-hang/:orderId` | Chi tiết đơn |
| `/sales-app/vieng-tham/:id/tao-don-hang` | Tạo đơn |
| `/sales-app/vieng-tham/:id/tao-don-hang/san-pham` | Chọn sản phẩm |
| `/sales-app/vieng-tham/:id/tao-don-hang/san-pham/bo-loc` | Bộ lọc SP |
| `/sales-app/vieng-tham/:id/tao-don-hang/san-pham/khuyen-mai` | Khuyến mãi |
| `/sales-app/vieng-tham/:id/tao-don-hang/san-pham/xac-nhan` | Xác nhận đơn |
| `/sales-app/vieng-tham/:id/tao-don-hang/san-pham/xac-nhan/bao-gia` | Báo giá |
| `/sales-app/bao-cao` | Báo cáo |
| `/sales-app/don-hang` | Đơn hàng (tab trạng thái) |
| `/sales-app/khac` | Khác |
| `/sales-app/khach-hang` | Khách hàng (Chăm sóc / Mở mới) |
| `/sales-app/khach-hang/tao-moi` | Tạo mới KH |
| `/sales-app/khach-hang/chi-tiet/:id` | Chi tiết KH |
| `/sales-app/khach-hang/cham-soc/:id` | Chăm sóc KH |
| `/sales-app/hop-dong` | Danh sách hợp đồng (Sale — View/Download) |
| `/sales-app/hop-dong/:id` | Chi tiết hợp đồng + file đính kèm |

## Mobile Screens

- Login: ECO salesman, mã NV + mật khẩu, mock login → viếng thăm.
- Viếng thăm: header user/tuyến, search, card điểm bán + CTA.
- Visit detail: bắt đầu viếng thăm, task list (Đặt hàng, CTTB, CTTL, Tồn kho, Khảo sát, Bày hàng).
- Đơn hàng: tabs Khởi tạo / Đã duyệt / Đã xuất kho / Đã hủy.
- Khác: menu chức năng + QR + kết thúc ngày công.
- Khách hàng: 2 tab, search, tạo mới.
- Hợp đồng: menu Khác → danh sách HĐ của khách hàng do Sale quản lý; search/filter; chi tiết; download file. Không tạo/sửa/xóa/duyệt.
- Báo cáo: màn trong source (placeholder + bottom nav).

## Bottom Navigation

Viếng thăm · Báo cáo · Đơn hàng · Khác. Active color `#1437D6`, inactive `#94a3b8`.

## Mobile Components

Phone frame (`sc` trong VIGO), MobileHeader, BottomNav, StoreCard, SearchBar, ActionBar, StatusBar.

## Shared Data Candidates

Customer / điểm bán, Product (SKU kẹo), Order, Employee (salesman `135260`). Đặt trong `window.DMSShared` + `data/sales-app.json`. Web có thể đọc cùng store sau này.

## Mobile-only Data

Tuyến `ROUTE0000000286`, khoảng cách GPS, ngày công, menu Khác (nghỉ phép, QR).

## Integration into Existing Project

- Một Prototype, một hash router (`/sales-app/*`).
- Left Menu Web: **App SaleMan** → `/sales-app`.
- `SalesmanMobileLayout` (phone 390px desktop / 100% mobile). WebLayout không render sidebar bên trong app.
- CSS scoped `.sales-app` / `body.is-sales-app`.
- Không iframe, không project/port riêng.
