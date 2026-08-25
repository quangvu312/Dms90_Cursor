# Quản Trị Hệ Thống

## 1. Module Overview

Prototype SPA clone module **Quản Trị Hệ Thống** (Portal HO) trên Prototype Workspace. 9 chức năng dùng shared layout (Sidebar + Header + Content), mock JSON, không gọi API DEV/production.

## 2. Source Website

- DEV: `https://eco-dms-dev.finviet.com.vn/`
- Khảo sát: 14/08/2026, Admin / Thảo BA, read-only
- Chi tiết khảo sát: `Docs/prototype/system-admin-analysis.md`

## 3. Routes

Route **umi website** là source of truth. Hash SPA local:

| Màn hình | Route prototype / website |
| --- | --- |
| Tài Khoản Người Dùng | `#/system/account` |
| Chốt Sổ Kỳ | `#/system/closing` |
| Mở Chốt Sổ | `#/system/unlock` |
| Dữ Liệu Chung | `#/system/master-data` |
| Cấu Hình Chấm Công | `#/system/working-time-setting` |
| Thiết Lập Vị Trí Chấm Công | `#/system/time-keeping-position` |
| Cấu Hình Chung | `#/system/setting` |
| Nhóm Quyền | `#/system/role` |
| Thuộc Tính | `#/system/attribute` |
| Parent | `#/system` → redirect account |

Alias (prompt) vẫn chạy: `/system/users`, `/close-period`, `/open-period`, `/common-data`, `/attendance-config`, `/attendance-location`, `/general-config`, `/permission-groups`, `/attributes`.

Form: `?mode=create|edit|view|copy&id=`.

---

## 4. Tài Khoản Người Dùng

### UI
Title + breadcrumb Quản Trị Hệ Thống / Tài Khoản Người Dùng. Filter **Tìm kiếm theo**. Card **Danh sách nhân viên**. Pagination đơn vị **nhân viên**.

### Filter
Mã NV \| Tên NV \| Mã tham chiếu \| SĐT \| Email · Nhóm quyền HO · Nhóm quyền NPP · Tài khoản thị trường… · Trạng thái. Làm mới / Tìm kiếm.

### Table
Ảnh · Mã tài khoản · Mã tham chiếu · Tên tài khoản · Vùng · Khu vực · Nhà phân phối chăm sóc · Số điện thoại · Email · Nhóm quyền HO · Nhóm quyền NPP · Tài khoản thị trường · Đăng nhập gần nhất · Ngày tạo · Người tạo · Ngày cập nhật · Người cập nhật · Trạng thái · Tùy chỉnh.

### CRUD
Import Excel / Export Excel (mock toast) · Tạo mới · Sao chép · Chỉnh sửa · Cấp lại mật khẩu (confirm).

### Detail
Click tên → modal view.

### Permission
Radio Quyền HO / Quyền Nhà Phân Phối + select nhóm quyền tương ứng (Inferred form từ doc 023).

### Status
Switch Hoạt động / Không hoạt động + confirm.

### Observed Behavior
19 cột; switch; copy/edit/unlock; 423 nhân viên trên DEV.

### Inferred Behavior
Form field bắt buộc Mã/Tên/Mật khẩu(create)/Quyền/Nhóm quyền/Vùng. Toggle confirm. Cấp lại MK confirm.

---

## 5. Chốt Sổ Kỳ

### UI
Filter Nhà phân phối + Tháng. Button **Khoá sổ**. 5 cột NPP.

### Period
Tháng khoá sổ format `mm/yyyy`. Mock có 2 NPP (DEV list **Trống**).

### Chốt sổ
Chọn NPP → Khoá sổ → Dialog *Bạn chắc chắn muốn khoá sổ tháng {tháng} của {Tên NPP}?* → tháng +1.

### Confirmation
Dialog Hủy / Đồng ý. Thiếu NPP → toast bắt buộc.

### Status
Không có status dòng; chỉ tháng khoá hiện tại.

### Observed Behavior
Empty DEV; filter Tháng; button Khoá sổ.

### Inferred Behavior
Confirm text + tăng tháng (doc 158). Không clone rule “đơn/phiếu phải hoàn tất” (không quan sát được trên UI).

---

## 6. Mở Chốt Sổ

### UI
Filter chỉ Nhà phân phối. Button **Mở khóa sổ**.

### Period
Cùng cột với Chốt Sổ Kỳ.

### Mở chốt
Confirm *Bạn chắc chắn muốn mở khoá sổ tháng {tháng} của {Tên NPP}?* → lùi 1 tháng.

### Confirmation
Dialog. Không field lý do trên list (Observed).

### Status
Tháng khoá sổ giảm.

### Observed Behavior
Empty DEV; wording **Mở khóa sổ**.

### Inferred Behavior
Mở tuần tự tháng gần nhất (doc 158).

---

## 7. Dữ Liệu Chung

### UI
List phẳng, không tree.

### Structure
Filter Dữ liệu + Loại. Cột Mã, Mã tham chiếu, Hệ thống tham chiếu, Tên, Loại, audit, Tùy chỉnh.

### CRUD
Tạo / Sửa / View (click Tên). Mã unique. Lưu confirm.

### Observed Behavior
72 dòng DEV; loại lý do; SFA; edit + copy mã.

---

## 8. Cấu Hình Chấm Công

### UI
List theo năm, không phải 1 form global.

### Configuration
Số giờ, khung giờ `08:00 - 17:00`, ngày làm, năm, switch, edit.

### Form
Modal 2 tab: Thông tin cơ bản / Cấu hình (12 tháng). Năm unique. Ngày đặc biệt.

### Validation
Năm / Ngày trong tuần / Thời gian làm việc / Nghỉ trưa bắt buộc (Inferred doc 037 + prototype).

### Observed Behavior
6 cấu hình; Tạo mới; switch; edit.

---

## 9. Thiết Lập Vị Trí Chấm Công

### UI
List; không map trên list. Card title giữ **Danh sách thiết Lập Vị Trí Chấm Công**.

### Location
Địa chỉ đầu/cuối ngày, bán kính (m), Đối tượng Toàn quốc / Vùng / Nhân viên.

### Map
Mock map + marker + radius trên form. Button **Tọa độ** (mock lat/lng). Không Google Maps.

### Form
Mã*, địa chỉ*, đối tượng*, không cài đặt cuối ngày, Vùng tree-select (multi), lưới nhân viên.

### Observed Behavior
60 dòng DEV; Sao chép; Import/Export; không icon Sửa trên list.

---

## 10. Cấu Hình Chung

### UI
List tham số, không tab A/B/C.

### Tabs
Không có trên list.

### Configuration
BOOLEAN → Bật/Tắt; TABLE/OBJECT → Chi tiết.

### Form
Tên, Từ khóa, Loại, Đối tượng, Tên nhóm, Mô tả, Giá trị, Cho phép chỉnh sửa.

### Observed Behavior
34 cấu hình DEV; edit + copy.

---

## 11. Nhóm Quyền

### UI
Danh sách vai trò; expand hàng; tag HO (blue) / Nhà phân phối (green). Filter mặc định Hoạt động.

### Role List
Tên (link), Quyền, audit, switch, copy, edit. Tạo mới.

### Permission
Modal: Tên*, Quyền*, Mô tả, Chọn tất cả, matrix 9 màn Quản Trị Hệ Thống × Tất cả/Xem/Thêm/Sửa/Xóa/Import/Export.

### Permission Tree
Không tree Ant Design trên DEV list. Prototype dùng bảng checkbox (doc 333). Expand hàng = tóm tắt quyền đã gán.

### Observed Behavior
101 dòng DEV; expand; copy/edit/switch.

---

## 12. Thuộc Tính

### UI
Label **Thuộc Tính**. Filter Tìm kiếm / Trạng thái / Kiểu dữ liệu.

### List
Mã, Tên (link), Kiểu dữ liệu, switch, audit, edit.

### CRUD
Modal **Thêm mới Thuộc tính**: Mã, Tên, Kiểu, Bắt buộc, Trạng thái, radio Sản phẩm/Điểm bán. Lưu → Popconfirm *Bạn có chắc chắn thao tác thêm mới hay không?*

Chọn một/Chọn nhiều → cấu hình giá trị. Điểm bán + chọn → checkbox CTKM/CTTB/CTTL (Inferred).

### Observed Behavior
34 thuộc tính; modal tạo; confirm Lưu trước validate (Observed trên DEV).

---

## 13. Components Reused

Sidebar, Header, Breadcrumb, FilterPanel, Card, Table, Pagination, Button, Input, Textarea, Select, MultiSelect, DatePicker, Switch, Checkbox, Radio, Tag, Modal, Dialog, Toast, Tabs, EmptyState, Avatar (letter).

## 14. Components Created

Không tạo component library mới. Chỉ page + shared + CSS module + mock JSON.

## 15. Mock Data

`Prototype/data/system.json` — users, periods, masterData, attendanceConfigs, locations, generalConfigs, roles, attributes + catalogs.

## 16. Differences From Source

| Điểm | Source | Prototype |
| --- | --- | --- |
| Chốt/Mở chốt list | Trống trên DEV | 2 NPP mock để demo flow |
| Form account / chấm công / vị trí / role | Chưa mở hết trên DEV | Field từ list Observed + Confluence (Inferred) |
| Map vị trí | Không trên list | Mock map trên form |
| Permission | Expand hàng; matrix trong modal (doc) | Matrix 9 màn hệ thống (không full sidebar DMS) |
| Import/Export | Có button | Toast mock, không file |
| Pagination DEV | 1 2 3 … 43 | Prev/current/next + page size |
| Session user header | Thảo BA | Prototype Header: Vũ BA (layout chung) |

## 17. Known Limitations

- Không gọi SSO / không đồng bộ role thật.
- Không validate điều kiện phiếu trước khi chốt sổ (không quan sát được).
- Map không geocode thật.
- Permission matrix không cover toàn bộ menu Portal.
- Import Excel không parse file.
- Ảnh user = chữ cái, không upload.
- Một số form field (tỉnh/quận/phường user, lịch sử tài khoản) không clone vì không mở trên DEV.
