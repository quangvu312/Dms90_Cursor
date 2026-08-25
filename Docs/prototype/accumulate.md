# Prototype — Quản Lý Tích Lũy

## 1. Module overview

Prototype SPA mô phỏng module **Quản Lý Tích Lũy** trên Eco DMS DEV, chạy độc lập trên localhost, dùng chung layout/menu/header với các module khác.

- **Website nguồn:** `https://eco-dms-dev.finviet.com.vn/accumulate/overview`
- **Prototype:** `http://127.0.0.1:8770/#/accumulate/overview`
- **Phạm vi:** Portal HO — 5 màn hình. App SM / Merchant ngoài scope.
- **Nguồn sự thật:** Website DEV = UI/UX. Tài liệu Confluence (191, 200, 206, 216, 228, 441) = business rule khi UI không đủ.

## 2. Routes

Giữ route website nguồn (không dùng `/programs`, `/registrations`, `/progress`, `/rewards`).

| Menu | Route website / prototype |
|------|---------------------------|
| Tổng Quan Chương Trình Tích Lũy | `/accumulate/overview` |
| Chương Trình Tích Lũy | `/accumulate/event` |
| Danh Sách Đăng Ký Tích Lũy | `/accumulate/participant` |
| Tiến Trình Tích Lũy | `/accumulate/process` |
| Danh Sách Trả Thưởng Tích Lũy | `/accumulate/reward` |

Alias: `/accumulation` → Overview.

## 3. Pages

### 3.1 Overview — `/accumulate/overview`

- Breadcrumb: Quản Lý Tích Lũy / Tổng Quan Chương Trình Tích Lũy
- Preset: Hôm nay / Tuần này / **Tháng này** (default). DatePicker trống khi chọn preset.
- 4 donut (không phải KPI card số liệu riêng):
  1. Chương trình tích lũy
  2. Danh sách tham gia
  3. Danh sách tiến trình
  4. Danh sách trả thưởng
- Empty chart: **Không có dữ liệu**
- Chart 2–4 chỉ tính CTTL `RUNNING | ENDED | STOPPED`

### 3.2 Chương Trình Tích Lũy — `/accumulate/event`

- Filter mặc định **tháng hiện tại**
- Filter: CTTL, Trạng thái, Hình thức ĐK, Hình thức TT, Tự động duyệt, Thời gian
- Table: STT, Ảnh, Mã CTTL, Tên CTTL (link xem), Nội dung (Xem chi tiết), Độ ưu tiên, Trạng thái, Lý do từ chối, Hình thức ĐK, Hình thức TT, Tự động duyệt, Ngày BĐ/KT, Ngày tạo, Người tạo, Ngày/Người cập nhật, Tùy chỉnh
- Pagination: `x-y trên n chương trình tích lũy`
- Actions: Xem, Sửa, Sao chép, Duyệt/Ngưng (theo status)
- Wizard modal 4 bước, width 1500 (`xxl`):
  1. Thông tin chung
  2. Đối tượng áp dụng (optional)
  3. Thời gian áp dụng — Số giai đoạn + Tạo giai đoạn; TT: Theo giai đoạn | Theo chương trình
  4. Hạn mức — mốc + điều kiện + phần thưởng
- Footer: Tiếp tục / Quay lại / **Tạo chương trình**
- Validate bắt buộc: `{Tên field} là bắt buộc!`

### 3.3 Đăng ký — `/accumulate/participant`

- Filter mặc định **30 ngày** (DEV 14/08/2026 → `15-07-2026` … `14-08-2026`)
- Filter: Tìm ĐB, NPP, Tuyến, CTTL, Trạng thái ĐK, Thời gian ĐK, Thời gian duyệt
- Cột **Mốc tích lũy** (không dùng Hạn mức như Display)
- Bulk **Xét duyệt**, Import/Export Excel (toast)

### 3.4 Tiến trình — `/accumulate/process`

- 1 list theo **giai đoạn** (không tab Theo kỳ)
- **Không** progress bar / timeline / Gantt
- Thực đạt = link **Chi tiết** (3 tab: SL nhóm / DS SP / DS tổng)
- Filter mặc định tháng hiện tại
- Pagination: `x-y trên n dòng`

### 3.5 Trả thưởng — `/accumulate/reward`

- Filter mặc định tháng hiện tại
- Mã: `REWARD` + 10 số
- Buttons: Xem lịch sử, Import, Export
- Tuỳ chọn Trả / Từ chối (mã ĐH bắt buộc khi trả)

## 4. Components reused

Button, Input, Textarea, Select, MultiSelect, DatePicker, Switch, Checkbox, Radio, Table, Pagination, Card, Breadcrumb, SearchBox, FilterPanel, EmptyState, Modal, Dialog, Toast, Tag, DonutChart, Sidebar, Header, Menu.

Layout / routing: `layouts/main-layout.js`, `data/menu.json`, `data/route.json`.

Pattern list/overview clone từ module Trưng Bày (`display.css` classes).

## 5. Components created

Không tạo component library mới.

| File | Vai trò |
|------|---------|
| `Prototype/scripts/accumulate-shared.js` | Catalog, overlap, wizard, validate, sinh GĐ/tiến trình/thưởng |
| `Prototype/pages/accumulate/page.js` | 5 handlers |
| `Prototype/styles/accumulate.css` | Mốc / điều kiện / Có giới hạn |
| `Prototype/data/accumulate.json` | Mock |

FilterPanel: thêm prop optional `title` (backward compatible, default rỗng) để hiện **Tìm kiếm theo**.

## 6. Mock data

`Prototype/data/accumulate.json` — không gọi API production.

- ~10 CTTL nhiều status
- ~12 đăng ký
- ~12 tiến trình
- ~6 trả thưởng + lịch sử

Dữ liệu khác DEV (DEV tháng 8/2026: 1 CTTL overlapping, 6 ĐK đã duyệt, 144 GĐ, 0 trả thưởng). Mock đủ để BA test pagination, filter, wizard, xét duyệt.

## 7. UI behavior

- SPA hash router, không reload full app
- Filter: Tìm kiếm / Làm mới → table + page 1
- Table horizontal scroll, empty **Trống**
- Wizard dirty close: Dialog xác nhận
- Save: Dialog → toast Lưu thành công
- Import/Export: toast prototype

## 8. Business behavior inferred from UI

Chỉ ghi nhận từ UI DEV + doc nội bộ đã dùng khi clone:

- CTTL status: Khởi tạo, Sắp diễn ra, Đang diễn ra, Kết thúc, Từ chối duyệt, Hết hạn duyệt, Ngưng hoạt động
- ĐK: Chờ duyệt / Đã duyệt / Từ chối / Hết hạn / Ngưng
- GĐ: Chưa diễn ra / Đang diễn ra / Đã kết thúc / Ngưng; Kết quả: Chờ duyệt / Đạt / Không đạt
- TT: Chờ / Đã / Từ chối / Hết hạn trả thưởng
- 4 loại điều kiện tích lũy (tối đa 4, VÀ/HOẶC): SL nhóm SP, DS nhóm SP, % DS nhóm SP, DS SP
- Saleman → Yêu cầu HĐ khóa “Không yêu cầu hợp đồng”
- PER_PRODUCT → phần thưởng khóa Tiền
- Phải Tạo giai đoạn trước khi Next bước 3

## 9. Differences between source website and prototype

| Hạng mục | Website nguồn | Prototype |
|----------|---------------|-----------|
| Nội dung CTTL | Rich text editor | Textarea (cùng Display; chưa có component RTE) |
| Dữ liệu | Production DEV | Mock độc lập |
| Action CTTL RUNNING | edit / copy / tool | Thêm icon Xem (name vẫn là link xem) |
| Filter card title | Tìm kiếm theo | Đã thêm qua FilterPanel `title` |
| Route đề xuất prompt | `/programs`… | Giữ `/event` `/participant` `/process` `/reward` |
| Doc 403/404/441 | Không có trên DEV | Không clone |

## 10. Known limitations

- Import/Export Excel = toast, không file thật
- Upload ảnh/hợp đồng = mock
- RTE Nội dung chưa clone
- App SM / Manager ngoài scope
- Không gọi API DEV sau khi clone
- FilterPanel `title` chỉ bật trên 4 list Accumulate; Display giữ như cũ
