# Quản Lý Khảo Sát

## 1. Module Overview

Prototype SPA clone 2 màn Portal HO:

- **Bộ Khảo Sát** — danh sách + tạo/sửa/copy/xem/preview bộ khảo sát
- **Thống Kê Khảo Sát** — báo cáo thực hiện theo bộ khảo sát (không KPI, không chart)

Nguồn UI: website DEV. Nguồn rule: Confluence 050, 078 — **website thắng** khi khác tài liệu.

## 2. Source Website

- List: `https://eco-dms-dev.finviet.com.vn/survey/setting`
- Report: `https://eco-dms-dev.finviet.com.vn/survey/report`
- Parent: `/survey`

## 3. Routes

| Màn | Website | Prototype |
| --- | --- | --- |
| Bộ Khảo Sát | `/survey/setting` | `#/survey/setting` (alias `#/survey`) |
| Thống Kê Khảo Sát | `/survey/report` | `#/survey/report` |

Không dùng `/survey/statistics` (404 trên DEV).

Query form Bộ Khảo Sát:

- `?mode=create`
- `?mode=edit&id=`
- `?mode=copy&id=`
- `?id=` — xem chi tiết (read-only)
- `?preview=` — Preview từ lưới

## 4. Bộ Khảo Sát

### UI

- Breadcrumb: Quản Lý Khảo Sát / Bộ Khảo Sát
- Title: Bộ Khảo Sát
- Filter card **Tìm kiếm theo**
- Table card **Danh sách bộ khảo sát** + **+ Tạo mới**
- Pagination unit: `bộ khảo sát`

### Filter

| Field | Default | Ghi chú |
| --- | --- | --- |
| Bộ khảo sát (text) | trống | Mã + tên |
| Thời gian từ / đến | **Hôm nay → hôm nay** | Overlap khoảng hiệu lực CTKS |
| Trạng thái | trống = tất cả | Hoạt động, Không hoạt động |
| Đối tượng khảo sát | trống = tất cả | Nhân viên, Điểm bán |

Buttons: **Làm mới** (về default hôm nay), **Tìm kiếm** (reset page 1).

### Table

Cột (thứ tự DEV): Mã khảo sát (copy), Tên khảo sát (link), Đối tượng khảo sát, Điều kiện áp dụng, Từ ngày, Đến ngày, Số lần khảo sát (`n lần`), Ngày tạo, Người tạo, Ngày cập nhật, Người cập nhật, Trạng thái (**Switch**), Tùy chỉnh.

### Actions

- Tên khảo sát → modal chi tiết read-only
- ✎ Chỉnh sửa → modal edit (khóa field nếu đã có kết quả / đã bắt đầu)
- ⧉ Sao chép → modal create với data copy, mã mới khi Lưu
- 👁 Preview → modal preview câu hỏi
- Switch → Dialog xác nhận, đổi Hoạt động / Không hoạt động (mock)

### Detail / Form

Modal **Thêm mới Khảo sát** / **Chỉnh sửa khảo sát** / **Chi tiết khảo sát**, size `xl`.

Tab **Thông tin cơ bản**: Tiêu đề*, Thời gian*, Số lần khảo sát* (1–999), Đối tượng*, Điều kiện áp dụng*. Checkbox **Bắt buộc Checkin** chỉ khi Đối tượng = Điểm bán.

Điều kiện:

- Điểm bán → Vùng | Nhân viên | Tuyến bán hàng | Điểm bán
- Nhân viên → Vùng | Nhân viên

Tab **Câu hỏi khảo sát**: trái danh sách + Thêm câu hỏi; phải cài đặt (6 kiểu: Kiểu chữ, Kiểu số, Đúng/Sai, Chọn một, Chọn nhiều, Ảnh).

Footer: Preview, Đóng, Lưu (view chỉ Đóng). Lưu → Dialog. Đóng dirty → Dialog thoát.

### Business behavior

Xem mục 9–10.

## 5. Thống Kê Khảo Sát

### UI

- Breadcrumb: Quản Lý Khảo Sát / Thống Kê Khảo Sát
- Title: Thống Kê Khảo Sát
- Filter + table. **Không KPI card. Không chart.**

### Filter

| Field | Default | Bắt buộc |
| --- | --- | --- |
| Bộ khảo sát | bộ tạo gần nhất | Có |
| Thời gian thực hiện | tháng hiện tại | Có |
| Vùng/Khu Vực | trống = tất cả | Không |

Bỏ chọn bộ khảo sát + Tìm kiếm → `"Bắt buộc phải chọn 1 bộ khảo sát"`.

### KPI

Không có trên website nguồn — prototype không thêm.

### Charts

Không có trên website nguồn — prototype không thêm.

### Table

Cột: Mã nhân viên (copy + hyperlink), Tên nhân viên, Vùng (tag), Khu vực (tag), Mã khảo sát, Tên khảo sát, Từ ngày, Đến ngày, Số kết quả/Số lần.

Empty: **Trống**. Card extra: **Xuất Excel**.

### Detail

Click mã NV → modal:

- Đối tượng Điểm bán: mã/tên ĐB, lần, ngày, ảnh checkin, Q&A
- Đối tượng Nhân viên: ngày, lần, Q&A

Export trên list/detail: modal chọn khảo sát + khoảng thời gian (≤ 3 tháng) → toast prototype, không gọi API.

### Business behavior

Chỉ nhân viên có ≥ 1 kết quả mới hiện trên lưới (mock tuân thủ).

## 6. Components Reused

Button, Input, Textarea, Select, MultiSelect, DatePicker, Checkbox, Radio, Switch, Tag, Table, Pagination, Card, Breadcrumb, SearchBox, FilterPanel, EmptyState, Modal, Dialog, Toast, Tabs, MainLayout / Sidebar / Header.

CSS list: class `display-page`, `display-form-grid`, `display-actions`, `display-copy`.

## 7. Components Created

Không tạo component duplicate. Chỉ:

- `Prototype/scripts/survey-shared.js`
- `Prototype/pages/survey/page.js`
- `Prototype/styles/survey.css`
- `Prototype/data/survey.json`

## 8. Mock Data

`Prototype/data/survey.json`

- 15 bộ khảo sát (ACTIVE/INACTIVE, dài/ngắn, overlap hôm nay / quá khứ / tương lai)
- Master NV / ĐB / tuyến / vùng
- 12 dòng thống kê + chi tiết Q&A (kể cả empty khi chọn bộ không có kết quả, ví dụ KS copy mẫu)

## 9. Observed Behavior

- Menu 2 con, route `/survey/setting` và `/survey/report`
- Filter list default hôm nay; report default tháng hiện tại + bộ gần nhất
- Status list = Switch, filter chỉ 2 giá trị
- Modal tạo 2 tab, footer Preview / Đóng / Lưu
- Report không chart/KPI
- Empty **Trống**

## 10. Inferred Behavior

(Từ Confluence 050/078, chưa persist trên DEV)

- Confirm đổi Switch / Lưu / đóng dirty
- Validate `@field là bắt buộc!`, tối thiểu 1 câu hỏi
- Mã `SV` + 10 số
- Khóa edit khi đã có câu trả lời hoặc đã bắt đầu
- Export popup + giới hạn 3 tháng
- Checkbox Checkin chỉ với Điểm bán
- Dependency điều kiện theo đối tượng

## 11. Differences From Source

| Hạng mục | Website | Prototype |
| --- | --- | --- |
| Modal width | ~1046px | `xl` 1200px |
| Thời gian filter | 1 range picker | 2 DatePicker |
| DEV report T8/2026 | Trống | Có mock để demo table/detail |
| Nested import Excel / cây vùng / câu hỏi con | Đầy đủ | Rút gọn: picker + toast import; không câu hỏi con |
| Upload ảnh câu hỏi | File thật | Toast |
| Export Excel | File | Toast mock |

## 12. Known Limitations

- Không clone App SM (076/049)
- Không nested import Excel / file mẫu
- Không câu hỏi con (1 cấp) trên Đúng-Sai / Chọn một
- Ảnh checkin/Q&A là placeholder, không load file production
- Status **Hết hạn** có trong doc 050 nhưng **không** có trên dropdown DEV — không thêm
