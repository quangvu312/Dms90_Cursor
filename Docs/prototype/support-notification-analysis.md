# Khảo sát UI — Hỗ Trợ & Quản Lý Thông Báo

Nguồn: `https://eco-dms-dev.finviet.com.vn/` (DEV, 14/08/2026, user Admin / Thảo BA).  
Chỉ khảo sát read-only. Không Lưu / Gửi / Export trên dữ liệu thật.

Route umi (bundle): `/support/ticket`, `/notify/setting`, `/notify/history`.  
Menu tiếng Việt lấy từ sidebar DEV, không lấy `name` kỹ thuật trong umi (`ticket`, `notify`, `history`).

| Item | Hỗ Trợ - Xử Lý Yêu Cầu | Cài Đặt Thông Báo | Lịch Sử Thông Báo |
| --- | --- | --- | --- |
| Route | `/support/ticket` (parent `/support`) | `/notify/setting` (parent `/notify`) | `/notify/history` |
| Page title | Hỗ Trợ - Xử Lý Yêu Cầu | Cài Đặt Thông Báo | Lịch Sử Thông Báo |
| Breadcrumb | Hỗ Trợ / Hỗ Trợ - Xử Lý Yêu Cầu | Quản Lý Thông Báo / Cài Đặt Thông Báo | Quản Lý Thông Báo / Lịch Sử Thông Báo |
| Filter card | **Tìm kiếm theo** | **Tìm kiếm theo** | **Tìm kiếm theo** |
| Filter | Tìm theo (textbox); Điểm bán (combobox, label **Mã điểm bán**); Nhân viên chăm sóc; Nhân viên tiếp nhận; Loại vấn đề; Trạng thái; Thời gian **Từ ngày** / **Đến ngày** (không default) | Textbox placeholder **theo Tiêu đề, Tóm tắt thông báo, nội dung thông báo**; Loại thông báo; Đối tượng; Trạng thái | Textbox **Theo Tiêu đề, Tóm tắt thông báo, nội dung thông báo**; Trạng thái thông báo; Trạng thái nhận thông báo; **Ngày gửi thông báo** (Từ ngày / Đến ngày) |
| Search | **Làm mới** + **Tìm kiếm** (không auto-search khi gõ) | **Làm mới** + **Tìm kiếm** | **Làm mới** + **Tìm kiếm** |
| Table card | **Danh sách xử lý yêu cầu** | **Danh sách cài đặt thông báo** | **Danh sách lịch sử thông báo** |
| Columns | 1 Mã yêu cầu hỗ trợ (link + mã `SP`+10 số) · 2 Mã điểm bán · 3 Tên điểm bán · 4 Nhân viên chăm sóc (`Mã - Tên`) · 5 Nhân viên tiếp nhận · 6 Nội dung · 7 Loại vấn đề · 8 Trạng thái · 9 Ngày duyệt · 10 Người duyệt · 11 Ngày tạo · 12 Người tạo · 13 Ngày cập nhật · 14 Người cập nhật · 15 Trao đổi (2 icon) | 1 Mã thông báo (`NOTI`+10 số, copy) · 2 Tiêu đề (link xanh) · 3 Vùng áp dụng (tag xanh) · 4 Đối tượng · 5 Loại thông báo · 6 Tóm tắt thông báo · 7 Nội dung thông báo (**Xem chi tiết**) · 8 Kiểu hiển thị · 9 Trạng thái · 10 Ngày tạo · 11 Người tạo · 12 Ngày cập nhật · 13 Người cập nhật · 14 Tùy chỉnh | 1 Mã thông báo · 2 Tiêu đề · 3 Loại thông báo · 4 Nội dung thông báo · 5 Kiểu hiển thị · 6 Trạng thái thông báo · 7 Ngày gửi thông báo · 8 Mã nhân viên nhận thông báo · 9 Tên nhân viên · 10 Chức vụ · 11 Trạng thái nhận thông báo · 12 Ngày nhận thông báo |
| Sort | Không thấy sort trên header | Không thấy sort | Không thấy sort |
| Pagination | `1-10 trên 51 xử lý yêu cầu`; `10 / trang`; trang 1–6 | `1-10 trên 136 dòng`; `10 / trang` | Không hiện khi **Trống** |
| Button | Làm mới; Tìm kiếm; **Export Excel** (table extra) | Làm mới; Tìm kiếm; **+ Tạo mới** | Làm mới; Tìm kiếm. Không Tạo mới / Export |
| Modal | **Xử lý yêu cầu** (~1046px): Đóng, Lưu. Dirty close → Dialog **Hủy / Đồng ý**. Assign: icon `user-switch` (chưa mở hết form — xem Inferred). | **Thêm mới Thông báo** (~1046px): Lưu. HTML editor. Không footer Hủy (chỉ X + Lưu). | Không modal list. **Xem chi tiết** (doc 181, chưa click trên history empty). |
| Drawer | Không | Không | Không |
| Detail | Click **wechat (Trao đổi)** = modal xử lý. Click mã = view (doc 039; chưa click trên DEV lần này). | Click **Tạo mới** = modal form. Edit/Send = icon Tùy chỉnh (Khởi tạo có pencil + send). **Xem chi tiết** = nội dung. | Chỉ log đã gửi; không form sửa. |
| Status | Tag `ant-tag-default`: **Khởi tạo** (viewport trang 1). Doc 039: Khởi tạo, Đang xử lý, Từ chối, Đã giải quyết | **Khởi tạo** (`ant-tag-default`); **Đã gửi** (`ant-tag-success`). Loại: Thông báo chung (`gold`), Khuyến mãi (`blue`). Kiểu: Bình thường (`blue`). Đối tượng: Tất cả (`default`). Doc 166 thêm Đang xử lý, Thất bại | Doc 181: TB = Đang xử lý / Đã gửi / Thất bại; Nhận = Chưa nhận / Chưa xem / Đã xem. Tháng 8/2026 **Trống** nên chưa thấy tag trên lưới |
| Action | Icon **wechat** = Trao đổi/xử lý; icon **user-switch** = chọn NV tiếp nhận. Trao đổi disable khi Đã giải quyết/Từ chối (doc 039) | Sao chép mã; Sửa (Khởi tạo); Gửi (paper plane); Tạo mới | Sao chép mã (doc). Không retry/resend trên UI DEV |
| Empty state | Không thấy trên trang 1 (51 dòng) | Không thấy (136 dòng) | Ảnh hộp + **Trống** |
| Loading state | Modal Trao đổi: Đóng/Lưu disabled lúc fetch chi tiết + messages, sau đó enable | SPA title `Salesman` rồi đổi title trang | Giống Cài Đặt: title `Salesman` lúc load |

## Menu DEV (Observed)

```
Hỗ Trợ
└── Hỗ Trợ - Xử Lý Yêu Cầu     → /support/ticket

Quản Lý Thông Báo
├── Cài Đặt Thông Báo          → /notify/setting
└── Lịch Sử Thông Báo          → /notify/history
```

Active: nền vàng. Không có Email / SMS / Push / In-app toggle trên 2 màn Thông Báo.

## Hỗ Trợ — Modal Xử lý yêu cầu (Observed, ticket SP6597362588)

Header read-only (grid): Tên điểm bán · Mã điểm bán (copy) · Số điện thoại (copy) · Địa chỉ.

Form:

| Field | Bắt buộc | Editable trên Khởi tạo |
| --- | --- | --- |
| Loại vấn đề | Không | Disable |
| Nhân viên | Không | Disable |
| Lý do | Có | Có (select) |
| Lý do nhân viên nhập | Không | Disable |
| Nội dung | Không | Disable |
| Tập tin đính kèm | Không | Empty **Không có hình ảnh** |
| Trạng thái | Có | Có |
| Ghi chú xét duyệt | Không | Có (placeholder `Nhập ghi chú xét duyệt.`) |
| Lý do từ chối duyệt | Không (bắt buộc nếu Từ chối — doc) | Disable khi status ≠ Từ chối; placeholder `Chọn lý do từ chối duyệt.` |
| Chat | Không | Textarea `Nhập vào nội dung.` + **Gửi**; empty **Trống** |

Footer: **Đóng**, **Lưu**. Không thấy field **Công ty** trên modal ticket này (doc 039 có).

Đóng khi form dirty: Dialog Hủy / Đồng ý (Observed).

## Cài Đặt Thông Báo — Form tạo (Observed)

Title: **Thêm mới Thông báo**.

Bắt buộc `*`: Tiêu đề (`Nhập vào tiêu đề.`); Vùng áp dụng; Loại thông báo; Kiểu hiển thị; Đối tượng (`Chọn đối tượng.`); Tóm tắt (`Nhập vào tóm tắt thông báo.`); Nội dung (HTML editor, `Nhập vào nội dung thông báo.`).

Không bắt buộc: checkbox **Gửi tự động**.

Không có channel Email/SMS/Push.

## Lịch Sử Thông Báo — Date (Observed)

Default **01-08-2026 → 31-08-2026** (tháng hiện tại). Empty **Trống**. Pagination ẩn khi empty.

## Observed vs Inferred

**Observed:** 3 route; cột; filter labels; modal xử lý; modal tạo thông báo; tag Khởi tạo/Đã gửi; empty history tháng hiện tại; Export Excel trên support; Tạo mới trên setting; 2 icon Trao đổi.

**Inferred (doc 039 / 166 / 181, chưa bấm Lưu/Gửi/Assign hết trên DEV):**

- Status support: Đang xử lý / Từ chối / Đã giải quyết + transition + disable Trao đổi khi kết thúc.
- Click mã yêu cầu = cùng form, chỉ view.
- Assign = 1 user có quyền màn hình.
- Notify status Đang xử lý / Thất bại; Gửi confirm `Bạn có muốn gửi thông báo này không?`; Sửa ẩn khi không Khởi tạo.
- Đối tượng = Chức vụ / Nhân viên → field phụ.
- Gửi tự động check → hiện datetime (> now).
- History: date bắt buộc, max 90 ngày; Xem chi tiết nội dung.
- Màu tag Đang xử lý / Từ chối / Thất bại / nhận — chưa thấy trên viewport.

Không biến inference thành rule chắc chắn nếu UI DEV khác doc.
