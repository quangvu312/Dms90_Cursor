# Hỗ Trợ & Quản Lý Thông Báo

## 1. Module Overview

Prototype SPA (hash router) clone 3 màn Portal HO:

- Hỗ Trợ - Xử Lý Yêu Cầu
- Cài Đặt Thông Báo (danh sách + tạo/sửa/gửi thông báo App — **không** phải toggle Email/SMS/Push)
- Lịch Sử Thông Báo

Shared layout: Sidebar + Header + Content. Mock data local, không gọi API DEV.

## 2. Source Website

`https://eco-dms-dev.finviet.com.vn/` (14/08/2026, Admin).  
Khảo sát: `Docs/prototype/support-notification-analysis.md`.  
Doc nội bộ: Confluence 039, 166, 181 — dùng khi UI chưa mở hết; website thắng khi khác.

## 3. Routes

| Màn | Route website | Prototype |
| --- | --- | --- |
| Hỗ Trợ - Xử Lý Yêu Cầu | `/support/ticket` | `#/support/ticket` (alias `#/support`, `#/support/request`) |
| Cài Đặt Thông Báo | `/notify/setting` | `#/notify/setting` (alias `#/notify`, `#/notification`, `#/notification/settings`) |
| Lịch Sử Thông Báo | `/notify/history` | `#/notify/history` (alias `#/notification/history`) |

Menu:

```
Hỗ Trợ
└── Hỗ Trợ - Xử Lý Yêu Cầu

Quản Lý Thông Báo
├── Cài Đặt Thông Báo
└── Lịch Sử Thông Báo
```

## 4. Hỗ Trợ - Xử Lý Yêu Cầu

### UI

Breadcrumb `Hỗ Trợ / Hỗ Trợ - Xử Lý Yêu Cầu`. Card filter **Tìm kiếm theo**. Card table **Danh sách xử lý yêu cầu** + **Export Excel**.

### Filter

Tìm theo (mã SP); Mã điểm bán; NV chăm sóc; NV tiếp nhận; Loại vấn đề; Trạng thái; Từ ngày / Đến ngày. **Làm mới** / **Tìm kiếm** (không auto-search).

### Table

15 cột như DEV. Mã = link xem. Trao đổi: 💬 (wechat) + ⇄ (assign). Disable khi Từ chối / Đã giải quyết.

### Detail

Modal **Xử lý yêu cầu**: thông tin ĐB, form, chat **Trống** + Gửi, footer Đóng / Lưu. Click mã = cùng modal, chỉ xem.

### Actions

Trao đổi, phân công NV tiếp nhận (1 user), đổi trạng thái + Lưu, chat Gửi, Export Excel (toast mock).

### Status

Khởi tạo, Đang xử lý, Từ chối, Đã giải quyết.

### Observed Behavior

List 51 dòng DEV; tag Khởi tạo default; modal ~1046px; dirty close Dialog Hủy/Đồng ý.

### Inferred Behavior

Transition status (doc 039); Trao đổi disable khi kết thúc; Lý do từ chối bắt buộc nếu Từ chối.

## 5. Cài Đặt Thông Báo

### UI

Không phải màn ON/OFF channel. Là **danh sách thông báo** + Tạo mới.

### Configuration

Form **Thêm mới Thông báo**: Tiêu đề, Vùng (multi), Loại (Thông báo chung / Khuyến mãi), Kiểu (Bình thường / Nổi bật), Đối tượng (Tất cả / Chức vụ / Nhân viên), Gửi tự động, Tóm tắt, Nội dung (textarea + toolbar giả lập HTML editor).

### Filter

Text tiêu đề/tóm tắt/nội dung; Loại; Đối tượng; Trạng thái. Làm mới / Tìm kiếm.

### Actions

Tạo mới; Sửa (chỉ Khởi tạo); Gửi (confirm); Sao chép mã; Xem chi tiết nội dung.

### Status

Khởi tạo, Đang xử lý, Đã gửi, Thất bại.

### Observed Behavior

136 dòng DEV; Tạo mới modal HTML editor; tag Đã gửi xanh; Gửi tự động checkbox.

### Inferred Behavior

Confirm lưu / gửi (doc 166); Đối tượng Chức vụ/NV hiện field phụ; Gửi: Khởi tạo → Đang xử lý → Đã gửi (mock timeout).

## 6. Lịch Sử Thông Báo

### UI

Chỉ log đã gửi. Không Tạo mới.

### Filter

Text; Trạng thái thông báo; Trạng thái nhận; Ngày gửi (default tháng hiện tại, bắt buộc, max 90 ngày).

### Table

12 cột như DEV (Tên nhân viên và Chức vụ tách 2 cột — Observed).

### Detail

Link **Xem chi tiết** → modal HTML nội dung.

### Status

TB: Đang xử lý / Đã gửi / Thất bại. Nhận: Chưa nhận / Chưa xem / Đã xem.

### Actions

Copy mã. **Không** retry/resend trên UI DEV.

### Observed Behavior

DEV tháng 8/2026 **Trống**. Date default 01–31 tháng hiện tại.

### Inferred Behavior

Max 90 ngày (doc 181) — prototype toast cảnh báo.

## 7. Components Reused

FilterPanel, Table, Pagination, Button, Input, Select, MultiSelect, DatePicker, Textarea, Checkbox, Tag, Card, Breadcrumb, Modal, Dialog, Toast, EmptyState, Sidebar, Header.

## 8. Components Created

Không tạo component mới. Chỉ page + shared + CSS module + mock JSON.

## 9. Mock Data

- `Prototype/data/support.json` — ticket + master loại/lý do/ĐB/NV; `support-shared` nhân bản thêm dòng để paginate.
- `Prototype/data/notification.json` — settings + history + vùng/chức vụ/NV.

## 10. Differences From Source

- HTML editor = toolbar tĩnh + textarea (không TinyMCE/SunEditor).
- Filter support/notify status = single select (Confluence mô tả multi; DEV combobox trống).
- Pagination prototype chỉ prev/next, không 1–6.
- History mặc định **có dữ liệu tháng hiện tại** để demo (DEV 8/2026 trống). Empty khi search không khớp.
- Nested picker NV/vùng rút gọn.
- Export / Gửi không gọi API.
- Không widget chat Omi.

## 11. Known Limitations

- Không realtime socket chat.
- Không Import Excel nhân viên (doc 166).
- Không tree vùng đầy đủ.
- Màu tag Đang xử lý / Từ chối / Thất bại suy từ Design System (DEV chưa thấy đủ trên viewport).
