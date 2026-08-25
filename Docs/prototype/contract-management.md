# Quản Lý Hợp Đồng

## 1. Overview

Prototype SPA (hash router) cho module **Quản Lý Hợp Đồng**, tích hợp vào Prototype Workspace hiện tại. Clone UI theo:

- `Contract_List.png` — màn Danh sách hợp đồng
- `Contract_Create.png` — popup Tạo mới Hợp Đồng

Dữ liệu mock local, không gọi API production.

## 2. Route

| Màn | Prototype |
| --- | --- |
| Danh sách hợp đồng | `#/contract/list` (alias `#/contract`) |
| Tạo mới | `#/contract/list?mode=create` |
| Chỉnh sửa | `#/contract/list?mode=edit&id={id}` |
| Chi tiết | `#/contract/list?mode=view&id={id}` |
| In | `#/contract/list?mode=print&id={id}` |

Create / Edit / View / Print dùng **Modal** trên page danh sách. Refresh browser và Back/Forward giữ đúng hash.

## 3. Sidebar

```
Quản Lý Hợp Đồng
└── Danh sách hợp đồng
```

Vị trí: ngay sau **Quản Lý Bán Hàng**. Parent expand/collapse theo Menu hiện tại.

### Source

Đối chiếu Left Menu với website DEV `https://eco-dms-dev.finviet.com.vn/` (Ant Design Pro sider). Prototype **không** tạo Sidebar mới; chỉnh shared `Menu` + `sidebar.css` + `menu.json`.

### Changes

- Icon emoji/unicode trong `menu.json` đổi sang key Ant Design outline (`dashboard`, `cluster`, `fund`, `shop`, `idcard`, `file-text`, `ordered-list`, `gift`, `database`, `tags`, `file-search`, `profile`, `bell`, `bar-chart`).
- `Menu` render SVG 14×14, `fill="currentColor"`, layout `flex` + `align-items: center`.
- Arrow chevron xuống, xoay 180° khi expand; parent padding-right 34px để chừa chỗ arrow.
- Child indent `16 + level * 16` px (child level 1 = 32px).
- Router: khi child active thì **expand ancestor**, không tô vàng parent.

### Design details (DEV)

| Token | Giá trị |
| --- | --- |
| Font | `--font-family` (system / Segoe UI / Roboto), 14px, weight 400, line-height 40px |
| Item height | 40px |
| Item margin | 4px 8px |
| Radius | 6px |
| Parent padding | `0 34px 0 16px` |
| Child padding-left | 32px |
| Icon | 14×14, opacity 0.65 (1 khi active) |
| Icon ↔ text | gap 10px |
| Active child | nền `#fac515`, chữ `rgba(0,0,0,0.79)` |
| Expanded parent | chữ `#2b579a` |
| Sidebar width | giữ `--sidebar-width` (310px) |
| Scroll | `.dms-sidebar__menu` overflow-y auto |

## 4. Breadcrumb

| Context | Breadcrumb |
| --- | --- |
| Danh sách | Quản lý hợp đồng / Danh sách hợp đồng |
| Chi tiết (modal) | Quản lý hợp đồng / Danh sách hợp đồng / Chi tiết hợp đồng |
| Chỉnh sửa (modal) | Quản lý hợp đồng / Danh sách hợp đồng / Chỉnh sửa hợp đồng |
| In (modal) | Quản lý hợp đồng / Danh sách hợp đồng / In hợp đồng |

Active sidebar luôn là **Danh sách hợp đồng**.

## 5. Danh sách hợp đồng

### Filter

Card **Tìm kiếm theo**:

| Field | Placeholder / Options |
| --- | --- |
| Search | Tìm kiếm theo Mã Hợp Đồng |
| Loại hợp đồng | Hợp đồng mẫu, Hợp đồng khách hàng |
| Trạng thái | Khởi tạo, Đã duyệt, Từ chối, Hết hạn |
| Thời gian | Từ ngày → Đến ngày (lọc theo Ngày bắt đầu) |

Buttons: **Làm mới**, **Tìm kiếm**. Tìm kiếm apply filter, reset page 1, mô phỏng loading ngắn. Làm mới xóa toàn bộ điều kiện.

### Table

Thứ tự cột: Tên · Mã hợp đồng · Trạng thái · Loại HĐ · Ngày bắt đầu · Ngày kết thúc · Người tạo · Ngày tạo · Tùy chỉnh.

Mã hợp đồng là link → View detail. Table `overflow-x: auto` theo Table component hiện có.

Pagination unit clone screenshot: `cấp`. Page size 10/20/50/100.

### Status

| Status | Tag |
| --- | --- |
| Khởi tạo | purple |
| Đã duyệt | green |
| Từ chối | orange |
| Hết hạn | red |

### Actions

| Action | Khi nào hiện |
| --- | --- |
| Edit | Chỉ **Khởi tạo** (status khác thì ẩn) |
| Approve | Chỉ **Khởi tạo** (status khác thì ẩn) |
| Delete | Mọi dòng |

In **không** còn trên cột Tùy chỉnh. In từ **Chi tiết hợp đồng**.

## 6. Tạo mới

Modal title: **Tạo mới Hợp Đồng**. Footer: **Đóng** · **Lưu**. Khối thông tin hợp đồng grid **3 cột** (desktop), 2 cột (≤1200px), 1 cột (≤768px). Khu vực **Đối tượng áp dụng** tách riêng bên dưới, không nằm chung grid với các field hợp đồng.

### Form

| Field | Required | Placeholder |
| --- | --- | --- |
| Mã hợp đồng | Hệ thống | Disabled. Create: placeholder `Tự động tạo khi lưu`, generate `CTRddmmyyhhmmss` lúc bấm **Lưu**. Edit/Detail: hiện mã đã lưu, không generate lại. |
| Tên hợp đồng | Có | Nhập tên hợp đồng |
| Loại hợp đồng | Có | Chọn loại hợp đồng |
| Đối tượng áp dụng | Không | Chọn đối tượng áp dụng |
| File đính kèm | Có | Upload nhiều file PDF |
| Ngày bắt đầu | Không | Từ ngày |
| Ngày kết thúc | Không | Đến ngày |
| Mô tả | Không | Nhập mô tả hợp đồng |

Loại hợp đồng chỉ 2 option: **Hợp đồng mẫu**, **Hợp đồng khách hàng**.

Đóng khi form dirty: Dialog `Màn hình đang có dữ liệu, bạn có muốn đóng?`

### Dynamic fields

| Đối tượng áp dụng | Field hiện thêm |
| --- | --- |
| Nhóm khách hàng | MultiSelect **Nhóm khách hàng** (master data) |
| Khách hàng | Section **Danh sách khách hàng** (table + Thêm), **không** dùng MultiSelect/dropdown |

Đổi loại đối tượng → ẩn field kia và **reset** giá trị (tránh lưu nhầm data cũ).

Thứ tự form (ổn định phía trên, dynamic phía dưới):

1. Mã hợp đồng · Tên hợp đồng · Loại hợp đồng
2. File đính kèm · Ngày bắt đầu · Ngày kết thúc
3. Mô tả
4. Đối tượng áp dụng
5. Dynamic: Nhóm khách hàng **hoặc** Danh sách khách hàng

Khi đổi Nhóm khách hàng ↔ Khách hàng, các field hàng 1–3 **không đổi vị trí**. Dynamic content render **ngay dưới** Đối tượng áp dụng (flex column, `gap` 16px), không bọc `.ct-form-grid` 3 cột — tránh khoảng trống lớn.

## Customer selection flow

Pattern clone từ **Chương Trình Trưng Bày → Đối tượng áp dụng → Điểm bán → Thêm** (website DEV). Prototype Display chưa có đủ popup danh sách điểm bán; Contract reuse pattern **Thêm sản phẩm** (Bảng giá) + **Thêm điểm bán** (Tuyến bán hàng): search/filter, checkbox, pagination, Đồng ý.

Master khách hàng **không** có Tỉnh/Quận/Phường → popup **không** thêm filter địa lý. Filter thực tế: Tìm kiếm (Mã KH / Tên) + Trạng thái.

### Create

1. Chọn Đối tượng áp dụng = **Khách hàng**.
2. Hiện section **Danh sách khách hàng** (empty state **Chưa có dữ liệu**).
3. Click **+ Thêm** → popup **Thêm khách hàng**.
4. Search / Filter / tick nhiều / phân trang → **Đồng ý**.
5. Popup đóng, bảng Contract cập nhật. Không duplicate id.

### Edit

Giống Create. Load `applicableCustomers` đã lưu (vd. KH001, KH002). Có thể Thêm / Xóa / Search.

Chi tiết (view): hiện bảng, **không** Thêm/Xóa.

### Search

- Section Contract: ô **Tìm kiếm...** lọc live theo Mã KH / Tên trên danh sách đã chọn.
- Popup: nhập ô Tìm kiếm rồi bấm **Tìm kiếm** mới apply; reset page 1.

### Filter

Popup: **Trạng thái** (Hoạt động / Ngưng hoạt động). Apply khi **Tìm kiếm**. **Làm mới** xóa điều kiện filter, giữ selection đang tick.

### Pagination

Cả section đã chọn và popup dùng Pagination hiện có, unit `khách hàng`, 10/20/50/100. Selection trong popup **giữ khi đổi trang**.

### Select

Tick từng dòng, tick header = chọn tất cả **trang hiện tại**. Khách đã có trên Contract được pre-check khi mở lại popup. Đồng ý đồng bộ **toàn bộ** tập đang chọn (uncheck = gỡ khỏi list khi confirm).

### Remove

Cột Tùy chỉnh → **Xóa** (link), không confirm (cùng pattern Xóa 1 dòng Bảng giá). Chỉ gỡ khỏi list hợp đồng, không xóa master.

### Confirm

**Đồng ý** → đóng popup (`#ct-pick-modal` remove) → `applicableCustomers` unique id → refresh bảng. Nút X / Đóng / click overlay chỉ đóng popup, **không** đóng form Tạo/Sửa.

### File upload

Cho phép **nhiều file PDF**. Chọn thêm lần nữa sẽ **nối** vào danh sách hiện tại. File không hợp lệ: `Chỉ được upload file PDF` — không add vào list. Mỗi file có tên, loại (PDF) và nút xóa. Lưu metadata local, không upload server.

### Validation

- Tên / Loại / File bắt buộc. **Mã hợp đồng không nhập tay**, hệ thống generate lúc Lưu (`CTR` + DDMMYYHHMMSS). Trùng mã (cùng giây) thì tăng 1 giây đến khi unique.
- Ngày kết thúc ≥ Ngày bắt đầu (nếu cả hai có giá trị) — validation của prototype.

Lưu thành công: tạo record status **Khởi tạo**, đóng modal, refresh table, toast.

## 7. Edit

Mở từ icon Edit (chỉ Khởi tạo). Load dữ liệu, **giữ nguyên mã hợp đồng**, giữ dynamic field và danh sách file hiện tại, cho phép thêm/xóa từng PDF. Lưu cập nhật mock + toast `Cập nhật hợp đồng thành công`.

## 8. View detail

Click **Mã hợp đồng**. Modal **Chi tiết hợp đồng**, read-only, đủ field đã nhập + field động + danh sách file + Trạng thái + Người tạo + Ngày tạo. Footer: **In** · **Đóng**.

## 9. Print

Từ Chi tiết → **In** mở modal preview. Nút **In** gọi `window.print()`. `@media print` ẩn sidebar / filter / action / chrome modal.

## 10. Approve / Từ chối

Chỉ status **Khởi tạo**. Modal **Duyệt hợp đồng**: `Bạn muốn xử lý hợp đồng này?` — **Từ chối** / **Duyệt**.

- Duyệt → status **Đã duyệt**, toast `Duyệt hợp đồng thành công`.
- Từ chối → status **Từ chối**, toast `Từ chối hợp đồng thành công`.

Không có field lý do từ chối.

## 11. Delete

Confirm: `Bạn có chắc chắn muốn xóa hợp đồng này?` — **Hủy** / **Xóa**. Xóa khỏi mock, refresh table, toast.

## 12. Master Data

Nguồn: `Prototype/data/contract.json` (không hard-code option trong page).

### Customer Groups

Diamond, Platinum, Gold, Silver, Bronze, VIP, Standard.

### Customers

KH001–KH025. Field: `id`, `code`, `name`, `phone`, `address`, `status` (`Hoạt động` / `Ngưng hoạt động`). Contract lưu `applicableCustomers` là mảng **id**.

Bảng **Danh sách khách hàng** (Create/Edit/Detail) và popup **Thêm khách hàng** cùng cột: `#` / checkbox · Mã KH · Tên khách hàng · Số điện thoại · Địa chỉ · Trạng thái · (Tùy chỉnh). Section + table `width: 100%` theo content modal; cột Địa chỉ linh hoạt. Địa chỉ ellipsis + `title` tooltip. Horizontal scroll chỉ khi thật sự cần.

## 13. Mock Data

19 hợp đồng mẫu (đủ phân trang 10/trang). Mix 4 status (gồm **Từ chối**) và 2 loại. Một số HĐ có 1/2/3 file. Persist in-memory sau lần load JSON đầu (`window.__contractStore`).

## 14. Components Reused

PageLayout (MainLayout), Sidebar, Header, Breadcrumb, Card, Table, Pagination, Modal, Dialog, Toast, Tag, Select, MultiSelect, DatePicker, SearchBox, Input, Button, EmptyState, Loading, Spinner.

Filter list tự compose trên class `dms-filter-panel` để có 1 ô **Từ ngày → Đến ngày** (FilterPanel hiện tại không có date-range 1 ô).

## 15. Components Created

Không tạo component library mới. Module-specific:

| File | Vai trò |
| --- | --- |
| `Prototype/data/contract.json` | Mock + master data |
| `Prototype/scripts/contract-shared.js` | Store, tag, draft, breadcrumb |
| `Prototype/pages/contract/page.js` | List + CRUD/flow |
| `Prototype/styles/contract.css` | Form 4 cột, upload, print, tag purple/cyan |

## 16. Known Limitations

- Không gọi API / không persist khi reload trang (mock in-memory).
- Upload PDF chỉ lưu tên file, không đọc nội dung PDF.
- Filter thời gian theo **Ngày bắt đầu** (UI reference không ghi rõ field ngày nào).
- Pagination wording `cấp` theo screenshot; không đổi Pagination component toàn cục.
- Dialog native `alert`/`confirm` không dùng. Delete dùng Modal confirm. Approve dùng modal Duyệt / Từ chối.
- Status **Hết hạn** là mock thủ công, không tự chuyển theo ngày hệ thống.
- Filter Tỉnh/Quận/Phường **không** clone vào popup khách hàng vì master `customers` không có field địa lý.
- Popup **Thêm khách hàng** nested in-page (`#ct-pick-modal`), không `Modal.show` ra `document.body`.
