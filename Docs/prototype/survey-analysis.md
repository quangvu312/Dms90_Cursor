# Khảo sát UI — Quản Lý Khảo Sát

Nguồn: `https://eco-dms-dev.finviet.com.vn/survey/setting` (DEV, 14/08/2026, user Admin).  
Chỉ khảo sát read-only. Không submit/lưu/đổi trạng thái thật.

| Item | Bộ Khảo Sát | Thống Kê Khảo Sát |
| --- | --- | --- |
| Route | `/survey/setting` (parent `/survey`) | `/survey/report` (**không** `/survey/statistics` — 404) |
| Page title | Bộ Khảo Sát | Thống Kê Khảo Sát |
| Breadcrumb | Quản Lý Khảo Sát / Bộ Khảo Sát | Quản Lý Khảo Sát / Thống Kê Khảo Sát |
| Filter card | **Tìm kiếm theo** | **Tìm kiếm theo** |
| Filter | Bộ khảo sát (text); Thời gian (range, **default hôm nay → hôm nay**); Trạng thái; Đối tượng khảo sát | Bộ khảo sát (select, **bắt buộc**, default bộ gần nhất); Thời gian thực hiện khảo sát (range, **default tháng hiện tại**); Vùng/Khu Vực (multi) |
| Search | Button **Tìm kiếm** + **Làm mới** | Button **Tìm kiếm** + **Làm mới** |
| Table card | Danh sách bộ khảo sát | Danh sách khảo sát |
| Column | Mã khảo sát (copy); Tên khảo sát (link xanh); Đối tượng khảo sát; Điều kiện áp dụng; Từ ngày; Đến ngày; Số lần khảo sát; Ngày tạo; Người tạo; Ngày cập nhật; Người cập nhật; Trạng thái (**Switch**); Tùy chỉnh | Mã nhân viên (copy + hyperlink); Tên nhân viên; Vùng (tag); Khu vực (tag); Mã khảo sát; Tên khảo sát; Từ ngày; Đến ngày; Số kết quả khảo sát/Số lần khảo sát; Tùy chỉnh |
| Sort | Không thấy sort trên header | Không thấy sort |
| Pagination | `x-y trên n bộ khảo sát`; 10/20/50/100 / trang | Có khi có dữ liệu; tháng 8/2026 **Trống** nên không hiện pag |
| Button | Tạo mới (primary, trên table card); Làm mới; Tìm kiếm | Xuất Excel (table card); Làm mới; Tìm kiếm |
| Modal | **Thêm mới Khảo sát** (~1046px): 2 tab Thông tin cơ bản / Câu hỏi khảo sát; Preview, Đóng, Lưu. Lưu → Dialog Hủy/Đồng ý. | Export: có trên UI; **không click** (tránh side-effect). Doc 078: popup chọn khảo sát trước khi xuất. |
| Drawer | Không | Không |
| Chart | Không | **Không** (không KPI card, không donut/bar) |
| Status | Filter: **Hoạt động**, **Không hoạt động**. Lưới: Switch checked = Hoạt động. Doc 050 còn **Hết hạn** — **DEV dropdown chỉ 2 giá trị**. | Không cột status |
| Row action | Edit, Copy, Eye (Preview). Tên khảo sát = xem chi tiết. | Mã nhân viên → popup chi tiết (doc 078). Tùy chỉnh: không thấy icon khi empty. |
| Detail | Modal giống form tạo, read-only khi xem. Tab câu hỏi: trái danh sách, phải cài đặt. | Popup danh sách theo Điểm bán hoặc Nhân viên (câu hỏi / câu trả lời). |
| Empty state | Ảnh cột/ô **Trống**; list tháng hôm nay vẫn có 1 dòng overlapping | Folder empty **Trống** |
| KPI | Không | Không — **không tự thêm** |

## Menu

```
Quản Lý Khảo Sát
├── Bộ Khảo Sát      → /survey/setting
└── Thống Kê Khảo Sát → /survey/report
```

Active: nền vàng. Click không reload full app (SPA website). Refresh giữ route.

## Form tạo mới (Observed)

Tab Thông tin cơ bản (bắt buộc *): Tiêu đề; Thời gian (Ngày bắt đầu → Ngày kết thúc); Số lần khảo sát; Đối tượng khảo sát; Điều kiện áp dụng.  
Checkbox **Bắt buộc Checkin** chỉ khi Đối tượng = Điểm bán (doc 050; create mặc định chưa hiện).

Tab Câu hỏi: trái “Danh sách câu hỏi” + Thêm câu hỏi; phải “Cài đặt câu hỏi” (Kiểu câu hỏi, Tiêu đề câu hỏi).  
Kiểu (doc 050): Kiểu chữ, Kiểu số, Đúng/Sai, Chọn một, Chọn nhiều, Ảnh.

## Observed vs Inferred

**Observed:** route, filter, cột, switch, 3 action, modal 2 tab, empty Thống kê tháng 8, không chart.

**Inferred (doc 050/078, chưa bấm lưu/toggle trên DEV):** confirm đổi switch; validate `@field là bắt buộc!` / tối thiểu 1 câu hỏi; mã `SV`+10 số; chi tiết NV trên report.
