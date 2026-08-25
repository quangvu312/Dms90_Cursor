# Navigation

> Ghi nhận từ website ht-portal-uat.finviet.com.vn

## Sidebar Menu

### Top-level modules observed

1. Dữ Liệu Nền → Địa Lý, Kinh Doanh, Sản Phẩm
2. Quản Lý Chi Tiêu
3. Quản Lý Kho
4. Quản Lý Bán Hàng → Đặt Hàng NPP, Tổng Hợp Đơn Hàng Điểm Bán
5. Quản Lý Tuyến Bán Hàng
6. Chương Trình Khuyến Mãi
7. Quản Lý Trưng Bày
8. Quản Lý Tích Lũy
9. Quản Lý Khảo Sát
10. Quản Lý Làm Việc
11. Hỗ Trợ
12. Quản Lý Thông Báo
13. Báo cáo
14. Quản Trị Hệ Thống

### Menu item style

| State | Style |
|-------|-------|
| Default | Text rgba(0,0,0,0.79), icon left, chevron right |
| Hover | Light gray background |
| Active | Yellow background highlight |
| Expanded | Chevron rotated, submenu visible |

### Submenu

- Indented items
- Active sub-item also yellow highlight

## Breadcrumb

- Format: `Module / Page` (e.g. "Quản Lý Bán Hàng / Đặt Hàng NPP")
- Separator: `/`
- Color: rgba(0,0,0,0.45)
- Padding top: 18px

## Tabs (Dashboard map section)

- Tab observed: "Nhân viên Online"
- Selected tab: underline/bottom border primary color

## SPA behavior

- URL changes without full page reload (React SPA)
- Prototype mimics with hash router
