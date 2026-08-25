# Khảo sát UI — Quản Trị Hệ Thống

Nguồn: `https://eco-dms-dev.finviet.com.vn/` (DEV, 14/08/2026, user Admin / Thảo BA).  
Chỉ khảo sát read-only. Không Lưu / Khoá sổ / Mở khóa sổ / Import / Export / Cấp lại mật khẩu trên dữ liệu thật.

Route umi (bundle `umi.47e07000.js`): 9 path list, không có nested `/create` trong `path:"/system..."`. Create/Edit/Detail mở **Modal** trên cùng URL list.

Menu tiếng Việt lấy từ sidebar DEV. Label **Thuộc Tính** giữ nguyên spelling trên website (không đổi thành “Thuộc Tính”).

| Chức năng | Route | Loại màn hình | Filter | Table | CRUD | Detail | Modal | Config |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Tài Khoản Người Dùng | `/system/account` | List + Modal form | Có | Có | Tạo / Sửa / Sao chép / Toggle / Cấp lại MK. Import/Export | Click tên tài khoản | Form tạo/sửa/chi tiết (Confluence; list Observed) | Không |
| Chốt Sổ Kỳ | `/system/closing` | List + action Khoá sổ | Có | Có (empty DEV) | Không CRUD dòng. Button **Khoá sổ** | Không | Chưa mở confirm (list empty, chưa chọn NPP) | Không |
| Mở Chốt Sổ | `/system/unlock` | List + action Mở khóa sổ | Có | Có (empty DEV) | Không CRUD dòng. Button **Mở khóa sổ** | Không | Chưa mở confirm | Không |
| Dữ Liệu Chung | `/system/master-data` | List + Modal form | Có | Có | Tạo / Sửa (icon edit). Copy mã. Không toggle | Click **Tên** | Form tạo/sửa/chi tiết | Không |
| Cấu Hình Chấm Công | `/system/working-time-setting` | List cấu hình theo năm (không phải 1 form global) | Có | Có | Tạo / Sửa / Toggle trạng thái | Click **Năm** | Form 2 tab (Confluence) | Có — từng bản ghi năm |
| Thiết Lập Vị Trí Chấm Công | `/system/time-keeping-position` | List vị trí | Có | Có | Tạo / Sao chép / Toggle. Import/Export. **Không** icon Sửa trên list | Click **Mã cài đặt** | Form tạo (Confluence). List không map | Có — từng bản ghi |
| Cấu Hình Chung | `/system/setting` | List tham số (không tab A/B/C) | Có | Có | Tạo / Sửa / Sao chép | Click **Tên cấu hình** | Form theo Loại BOOLEAN/TABLE/OBJECT… | Có — từng bản ghi |
| Nhóm Quyền | `/system/role` | List + expand + Modal | Có | Có | Tạo / Sửa / Sao chép / Toggle | Click **Tên vai trò** | Form + lưới phân quyền (Confluence) | Permission matrix |
| Thuộc Tính | `/system/attribute` | List + Modal | Có | Có | Tạo / Sửa / Toggle | Click **Tên thuộc tính** (doc) | **Thêm mới Thuộc tính** Observed | Không |

Parent sidebar: `/system`. Active menu: nền vàng. Expand **Quản Trị Hệ Thống** khi đang ở 1 child.

## Menu DEV (Observed)

```
Quản Trị Hệ Thống                         → /system
├── Tài Khoản Người Dùng                  → /system/account
├── Chốt Sổ Kỳ                            → /system/closing
├── Mở Chốt Sổ                            → /system/unlock
├── Dữ Liệu Chung                         → /system/master-data
├── Cấu Hình Chấm Công                    → /system/working-time-setting
├── Thiết Lập Vị Trí Chấm Công            → /system/time-keeping-position
├── Cấu Hình Chung                        → /system/setting
├── Nhóm Quyền                            → /system/role
└── Thuộc Tính                           → /system/attribute
```

Không dùng route đề xuất `/system/users`, `/system/close-period`, … — **ưu tiên route umi thật**.

---

## 1. Tài Khoản Người Dùng

**UI (Observed)**

- Title / breadcrumb: Quản Trị Hệ Thống / Tài Khoản Người Dùng
- Filter card: **Tìm kiếm theo**
- Table card: **Danh sách nhân viên**
- Pagination: `1-10 trên 423 nhân viên` · `10 / trang`

**Filter (Observed)**

| Field | Loại |
| --- | --- |
| Nhập Mã NV \| Tên NV \| Mã tham chiếu \| SĐT \| Email | Text |
| Nhóm quyền HO | Select (multi trên UI ant-select) |
| Nhóm quyền NPP | Select |
| Tài khoản thị trường \| tên… \| sđt… \| email… \| mã tham chiếu… | Text |
| Trạng thái | Select |
| Làm mới / Tìm kiếm | Button |

**Table columns (Observed, đúng thứ tự)**

Ảnh · Mã tài khoản · Mã tham chiếu · Tên tài khoản · Vùng · Khu vực · Nhà phân phối chăm sóc · Số điện thoại · Email · Nhóm quyền HO · Nhóm quyền NPP · Tài khoản thị trường · Đăng nhập gần nhất · Ngày tạo · Người tạo · Ngày cập nhật · Người cập nhật · Trạng thái · Tùy chỉnh

Format ngày: `DD-MM-YYYY HH:MM:SS`. Copy icon trên một số cell. Tên = link.

**CRUD / Action (Observed)**

- Table extra: **Import Excel**, **Export Excel**, **Tạo mới**
- Tùy chỉnh: icon **copy** (Sao chép), **edit**, **unlock** (Cấp lại mật khẩu — title anticon-unlock)
- Trạng thái: `ant-switch` (checked = hoạt động)

**Create / Edit / Detail**

Chưa mở form Tạo mới trên DEV lần này (tránh ghi dữ liệu). Field form lấy từ Confluence `023-ho-tai-khoan-nguoi-dung.md` → **Inferred**.

**Status (Observed + doc)**

Switch ON/OFF. Doc: Hoạt động / Không hoạt động. Không thấy status Locked trên list.

**Observed:** 19 cột; 423 nhân viên; switch; 3 icon Tùy chỉnh; filter 5 field.  
**Inferred:** Toggle → confirm; Cấp lại MK → confirm; form gồm Mã*, Tên*, Mật khẩu* (chỉ create), Quyền HO/NPP radio*, Nhóm quyền*, Vùng*; click tên = view.

---

## 2. Chốt Sổ Kỳ

**UI (Observed)**

- Title / breadcrumb: Quản Trị Hệ Thống / Chốt Sổ Kỳ
- Filter: **Tìm kiếm theo** · Nhà phân phối · Tháng (placeholder **Chọn thời gian**)
- Buttons: Làm mới · Tìm kiếm · **Khoá sổ**
- Columns: Mã nhà phân phối · Tên nhà phân phối · Thời gian khoá sổ · Người khoá sổ · Tháng khoá sổ
- Empty: **Trống**. Không pagination khi trống.

**Observed:** Không có dòng. Không click Khoá sổ (tránh thao tác trên DEV).  
**Inferred (doc 158):** Chọn NPP → message tháng sẽ khoá; Khoá sổ → popup *Bạn chắc chắn muốn khoá sổ tháng {tháng} của {Tên NPP}?* Điều kiện đơn/phiếu phải ở trạng thái cuối. **Không** biến “khoá toàn bộ dữ liệu hệ thống” thành rule chắc chắn.

---

## 3. Mở Chốt Sổ

**UI (Observed)**

- Title / breadcrumb: Quản Trị Hệ Thống / Mở Chốt Sổ
- Filter: **Tìm kiếm theo** · Nhà phân phối (**không** có Tháng)
- Buttons: Làm mới · Tìm kiếm · **Mở khóa sổ** (wording website)
- Columns: giống Chốt Sổ Kỳ
- Empty: **Trống**

**Observed:** List empty; button **Mở khóa sổ**.  
**Inferred (doc 158):** Mở tuần tự tháng gần nhất; confirm *Bạn chắc chắn muốn mở khoá sổ tháng {tháng} của {Tên NPP}?* Không quan sát được field “Lý do” trên list. **Không** giả định mở chốt = cho phép sửa mọi chứng từ.

---

## 4. Dữ Liệu Chung

**UI (Observed)**

- Không phải tree. List phẳng.
- Filter: **Dữ liệu** · **Loại**
- Table card: **Danh sách dữ liệu chung** · **Tạo mới**
- Pagination: `1-10 trên 72 dữ liệu chung`

**Columns (Observed):** Mã · Mã tham chiếu · Hệ thống tham chiếu · Tên · Loại · Ngày tạo · Người tạo · Ngày cập nhật · Người cập nhật · Tùy chỉnh

**Loại nhìn thấy trên trang 1:** Lý do hủy phiếu xuất kho · Lý do trả đơn bán hàng · Lý do từ chối duyệt điều chỉnh điểm bán · Lý do vượt khoảng cách.

Hệ thống tham chiếu mẫu: **SFA**. Action: copy, edit. Không switch.

**Observed:** List + Tạo mới + edit.  
**Inferred (doc 038):** Form Mã* Tên* Loại*; Mã unique; click Tên = view; Lưu confirm.

---

## 5. Cấu Hình Chấm Công

**Không** phải 1 màn form cấu hình duy nhất. **Observed:** danh sách cấu hình theo **Năm**.

**Filter:** Năm (placeholder **Chọn năm**) · Trạng thái  
**Table card:** **Danh sách cấu hình** · **Tạo mới**  
**Pagination:** `1-6 trên 6 cấu hình`

**Columns (Observed):** Số giờ làm việc · Thời gian làm việc · Ngày làm · Năm · Ngày tạo · Người tạo · Ngày cập nhật · Người cập nhật · Trạng thái · Tùy chỉnh

Ví dụ: `8.00` · `08:00 - 17:00` · Thứ 2…Thứ 7 · Năm 2026. Switch × 6. Icon **edit**.

**Inferred (doc 037):** Modal 2 tab Thông tin cơ bản / Cấu hình. Field: Năm*, Ngày trong tuần*, Thời gian làm việc*, Số giờ (readonly), Thời gian nghỉ trưa*, Số giờ nghỉ, ngày đặc biệt. 1 năm 1 bản ghi.

---

## 6. Thiết Lập Vị Trí Chấm Công

**List không có map** (Observed). Map/tọa độ — nếu có — nằm form tạo (chưa mở trên DEV).

**Filter:** theo mã cài đặt · Nhân viên · Đối tượng áp dụng · Trạng thái  
**Table card:** **Danh sách thiết Lập Vị Trí Chấm Công** (capital L như website)  
**Buttons:** Import Excel · Export Excel · Tạo mới  
**Pagination:** `1-10 trên 60 dòng`

**Columns (Observed):** Mã cài đặt · Vị trí chấm công đầu ngày · Khoảng cách chấm công đầu ngày (m) · Vị trí chấm công cuối ngày · Khoảng cách chấm công cuối ngày (m) · Đối tượng áp dụng · Trạng thái · Ngày tạo · Người tạo · Ngày cập nhật · Người cập nhật

Không cột Tùy chỉnh edit. Mỗi dòng button **Sao chép**. Switch trạng thái. Copy mã.

Đối tượng trên lưới (Observed, mapping cột): **Toàn quốc**; một số dòng hiện **Nổi bật** / **Bình thường** — chưa xác nhận đây là giá trị Đối tượng hay tag khác. Doc 185: Toàn quốc / Vùng / Nhân viên.

Ngày format: `DD/MM/YYYY HH:MM:SS` (khác account dùng `-`).

**Inferred (doc 185):** Form địa chỉ đầu/cuối ngày, tọa độ button, bán kính (m), Đối tượng, Vùng tree, lưới nhân viên. Không Sửa trên list (ghi chú 24/3/2025).

---

## 7. Cấu Hình Chung

**Không** có Tab A/B/C trên list. List 34 cấu hình.

**Filter:** Cấu hình · Đối tượng áp dụng · Tên nhóm  
**Table card:** **Danh sách cấu hình chung** · **Tạo mới**

**Columns (Observed):** Tên cấu hình · Từ khóa · Loại · Mô tả · Giá trị hiện tại · Đối tượng áp dụng · Tên nhóm · Ngày tạo · Người tạo · Ngày cập nhật · Người cập nhật · Tùy chỉnh

Loại Observed: **BOOLEAN** (giá trị **Bật**), **TABLE** / **OBJECT** (giá trị **Chi tiết**).  
Đối tượng mẫu: APIWEBAPP, WEBAPP, APP, APIAPPWEB.  
Tên nhóm mẫu: Đơn hàng, Tuyến, Khác.

Action: edit, copy.

**Inferred (doc 046):** Form Tên*, Từ khóa*, Loại*, Đối tượng*, Tên nhóm*, Mô tả, Cho phép chỉnh sửa, Giá trị theo loại. Lưu confirm.

---

## 8. Nhóm Quyền

**Filter:** Tìm kiếm · Trạng thái (snippet mặc định **Hoạt động**)  
**Table card:** **Danh sách vai trò** · **Tạo mới**  
**Pagination:** `1-10 trên 101 dòng`

**Columns (Observed):** (expand) · Tên vai trò · Quyền · Người tạo · Ngày tạo · Người cập nhật · Ngày cập nhật · Trạng thái · Tùy chỉnh

Quyền tag Observed: **HO** · **Nhà phân phối**.  
Expand: button **Mở rộng dòng**. Copy + edit. Switch.

Chưa expand hàng / chưa mở Tạo mới trên DEV (tránh ghi SSO).

**Inferred (doc 333):** Modal Tên vai trò*, Quyền HO|NPP*, Mô tả, **Chọn tất cả**, accordion menu × checkbox (Tất cả / Xem / Thêm / Sửa / Xóa / Import / Export…). Lưu: *Bạn có muốn lưu thông tin không?* Phải có ≥1 quyền.

---

## 9. Thuộc Tính

**UI (Observed)**

- Title đúng: **Thuộc Tính**
- Filter: Tìm kiếm · Trạng thái · Kiểu dữ liệu
- Table card: **Danh sách thuộc tính** · **Tạo mới**
- Pagination: `1-10 trên 34 thuộc tính`

**Columns (Observed):** Mã thuộc tính · Tên thuộc tính · Kiểu dữ liệu · Trạng thái · Ngày tạo · Người tạo · Ngày cập nhật · Người cập nhật · Tùy chỉnh

Kiểu dữ liệu Observed: **Chọn một** · **Chọn nhiều** · **Văn bản**. Switch + edit.

**Modal Tạo mới (Observed, không Lưu)**

- Title: **Thêm mới Thuộc tính**
- Mã thuộc tính — placeholder `Nhập vào mã thuộc tính.`
- Tên thuộc tính — `Nhập vào tên thuộc tính.`
- Kiểu dữ liệu — `Chọn kiểu dữ liệu.`
- **Bắt buộc:** checkbox
- **Trạng thái:** switch default ON
- **Đối tượng áp dụng:** radio **Sản phẩm** (`PRODUCT`) / **Điểm bán** (`STORE`)
- Footer: **Đóng** · **Lưu**
- Click Lưu (form trống): Popconfirm **Bạn có chắc chắn thao tác thêm mới hay không?** · Hủy / Đồng ý. Đã **Hủy** — không ghi DEV.
- Validation field-level chưa thấy vì confirm hiện trước (Observed). Doc: validate sau Đồng ý.

**Inferred (doc 337):** Chọn một/Chọn nhiều → Cấu hình lựa chọn (Mã giá trị, Tên giá trị, toggle, Thêm giá trị). Điểm bán + chọn một/nhiều → checkbox CTKM/CTTB/CTTL.

---

## Design System mapping

Tái sử dụng: Sidebar, Header, Breadcrumb, FilterPanel (`Tìm kiếm theo`), Card, Table, Pagination, Button, Input, Select, MultiSelect, DatePicker, Switch, Checkbox, Radio, Tag, Modal, Dialog (Popconfirm), Toast, Tabs, Tree, EmptyState, Avatar.

Variant: switch cột Trạng thái; icon-only Tùy chỉnh; mock map block (không Google Maps) nếu form vị trí cần tọa độ.

## Prototype routes

Hash SPA, trùng website:

`#/system/account` · `#/system/closing` · `#/system/unlock` · `#/system/master-data` · `#/system/working-time-setting` · `#/system/time-keeping-position` · `#/system/setting` · `#/system/role` · `#/system/attribute`

Form: `?mode=create|edit|view|copy&id=`.

Mock: `Prototype/data/system.json` — không gọi API DEV.
