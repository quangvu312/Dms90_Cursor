|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Phân hệ này cung cấp một nơi tập trung để **xem, tìm kiếm, tạo mới, chỉnh sửa, ngưng hoạt động, import/export** và **theo dõi lịch sử** dữ liệu khách hàng trên Web Portal theo Phân quyền |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

# Nội dung chính

**Mục đích:**

**Khách hàng (Customer)** là thực thể Master Data trung tâm của hệ thống DMS, đóng vai trò gốc cho hầu hết các giao dịch: đơn hàng, công nợ, khuyến mãi, viếng thăm tuyến (route). Phân hệ này cung cấp một nơi tập trung để **xem, tìm kiếm, tạo mới, chỉnh sửa, ngưng hoạt động, import/export** và **theo dõi lịch sử** dữ liệu khách hàng trên Web Portal.

* **Khách hàng ↔ Người liên hệ (Contact):** quan hệ nhiều-nhiều. Một Khách hàng gắn nhiều Contact; một Contact gắn nhiều Khách hàng (kế thừa từ phân hệ Contact).
* **Đồng bộ ERP hai chiều:** cả DMS và ERP đều có quyền tạo/sửa Khách hàng. Hệ thống khớp bản ghi theo Mã KH DMS (primary key) và áp dụng cơ chế Last-Write-Wins (ghi đè toàn bộ theo last\_update) khi có xung đột.
* **Cổng tiếp nhận từ web portal:** Sale tạo Khách hàng + Contact; Web chờ cấp trên duyệt trước khi ghi vào Master và push ERP.
* **Cổng tiếp nhận từ App Mobile:** Sale tạo Khách hàng + Contact ngoài thị trường, đẩy về Web chờ cấp trên duyệt trước khi ghi vào Master và push ERP.

## **Phạm vi tính năng & Mã FR**

| **Mã FR** | **Tính năng** |
| --- | --- |
| **KH\_US\_01** | Màn hình Danh sách Khách hàng: filter, grid, badge Sync ERP, toggle trạng thái, điều hướng nhanh. |
| **KH\_US\_02** | Tạo mới Khách hàng (Màn hình gồm 3 tab: Thông tin KH / Người liên hệ / Địa chỉ). |
| **KH\_US\_03** | Chỉnh sửa Khách hàng (chỉ cho gán người liên hệ). |
| **KH\_US\_04** | Gắn Người liên hệ (Contact N-N) trong luồng KH. |
| **KH\_US\_05** | Ngưng/Kích hoạt Khách hàng (toggle trạng thái, cảnh báo nếu có giao dịch mở). |
| **KH\_US\_06** | Kiểm tra MST (MST/CCCD) online +tự động điền Tên. Địa chỉ, Tình trạng MST |
| **KH\_US\_07** | Đồng bộ 2 chiều DMS↔ERP (Upsert theo Mã KH, ghi đè toàn bộ theo last\_update). |
| ~~**KH\_US\_08**~~ | ~~Duyệt điều chỉnh Khách hàng~~ |
| **KH\_US\_09** | Import Excel (tạo mới/cập nhật hàng loạt) |
| **KH\_US\_10** | Export Excel (theo filter hiện hành) |
| **KH\_US\_11** | Lịch sử Khách hàng (Cho xem /xuất tối đa 31 ngày/lần xuất). |
| **KH\_US\_12** | Phân quyền thao tác Xem/Thêm/Sửa/Hủy/ Ngưng/Import/Export/Duyệt + quyền dữ liệu (Vùng/Khu vực và cây phân cấp SFA) |

## **Người dùng liên quan (Actors)**

|  |  |
| --- | --- |
| **Actor** | **Nhu cầu / Vai trò** |
| **Backoffice / Admin (Web)** | Quản trị toàn bộ Master KH: tạo, sửa, ngưng hoạt động, import/export, duyệt điều chỉnh. Xem toàn bộ KH. |
| **Sale web / NV Thị trường (App)** | Tạo mới KH khách hàng + Contact ngoài thị trường; gửi về duyệt; không sửa trực tiếp Master. Chỉ xem KH mình tạo hoặc thuộc tuyến mình quản lý (QĐ-07). |
| **Nhân viên quản lý  (Web)** | Duyệt hoặc từ chối các bản ghi KH do Sale tạo/chỉnh sửa. Xem KH theo cây SFA cấp dưới mình quản lý (QĐ-07). |
| **Hệ thống ERP** | Tạo/cập nhật KH ở phía ERP và đồng bộ về DMS; nhận dữ liệu DMS đẩy sang. Quản lý external\_id, parent\_id. |
| **Hệ thống phân quyền** | Cung cấp nhóm quyền dữ liệu (Vùng/Khu vực và cây phân cấp SFA) / phân quyền thao tác |

# **Danh sách màn hình và mô tả**

## **Màn hình Danh sách Khách hàng (KH\_US\_01)**

**Breadcrumb:** Dữ Liệu Nền › Kinh Doanh › Danh Sách Khách Hàng.

**Mô tả:** Cho phép tìm kiếm, lọc, hiển thị toàn bộ Khách hàng (theo data scope người dùng); theo dõi trạng thái đồng bộ ERP; thao tác nhanh (toggle trạng thái, điều chỉnh) và điều hướng tới các luồng tạo mới/import/export/duyệt.

| Tên Trường | Loại dữ liệu/Loại field | Thao tác? | Bắt buộc? | **Mô tả nghiệp vụ** |
| --- | --- | --- | --- | --- |
| Vùng tìm kiếm | | | | |
| **Tìm kiếm theo** | Text Field | Có | Không | Tooltip: Nội dung hiển thị mờ/popup gợi ý khi di chuột vào icon/ô nhập liệu.  Placeholder: “Tìm theo Mã | Tên | Mã số thuế| SĐT khách hàng”  Search LIKE %keyword% khớp Mã KH, Tên KH, SĐT, Mã số thuế. Nhập → Enter/Tìm kiếm → lọc grid.  Logic Search: Thực hiện lọc khi bấm nút Tìm kiếm hay Auto-search sau người dùng ngừng gõ. Liệt kê chính xác danh sách các trường dữ liệu được áp dụng logic tìm kiếm (ví dụ: Tìm kiếm theo Mã, Tên, Số điện thoại, Email, Mã tham chiếu). |
| **Vùng** | Tree multichoice | Có | Không | Placeholder “Chọn vùng”. Dữ liệu phân cấp (tree) từ màn hình Phân Vùng. Chọn nhiều; hiển thị tag; bỏ chọn hết = tìm tất cả. |
| **Từ ngày – Đến ngày** | Date Picker | Có | Không | * **Định dạng hiển thị (Format):** Quy định chuẩn định dạng `DD/MM/YYYY->` `DD/MM/YYYY` * **Ràng buộc khoảng thời gian (Validation Rules):**    + `Từ ngày` phải `<= Đến ngày`.   + Cho chọn ngày quá khứ   + Lọc theo Ngày tạo. * **Giá trị mặc định (Default Value):** Ví dụ: Mặc định `Từ ngày` = Đầu tháng hiện tại, `Đến ngày` = Ngày hiện tại. |
| **Trạng thái** | Selectbox multichoice | Có | Không | * **Mở danh sách:** Nguồn dữ liệu truyền vào Dropdown Giá trị: **Hoạt động / Ngưng hoạt động.** Mặc định trống = tất cả. * **Tìm kiếm & Chọn:** Cho phép gõ từ khóa để lọc các option trong Dropdown hay không; cơ chế cuộn trang khi danh sách quá dài. * **Hiển thị lựa chọn:**    + *Chế độ *chọn nhiều:** Hiển thị danh sách dạng thẻ (Tags), ngăn cách bởi dấu phẩy. * **Xóa lựa chọn :** Hành vi khi bấm nút xóa (xóa từng tag lẻ, hay nút "Clear All" trả về giá trị mặc định). * **Giá trị mặc định:** Trạng thái ban đầu khi load trang (mặc định để trống, chọn tất cả, hay mặc định chọn dòng đầu tiên). |
| **Nhân viên kinh doanh** | Selectbox multichoice | Có | Không | * **Mở danh sách:** Nguồn dữ liệu truyền vào Dropdown Danh sách nhân viên phụ trách. Danh sách nhân viên theo phân quyền (**KH\_US\_12**). Mặc định trống = tất cả. * **Tìm kiếm & Chọn:** Cho phép gõ từ khóa để lọc các option trong Dropdown hay không; cơ chế cuộn trang khi danh sách quá dài. * **Hiển thị lựa chọn (Format):**    + *Chế độ chọn nhiều:* Hiển thị `[Mã] - [Tên]`. * **Xóa lựa chọn:** Hành vi khi bấm nút xóa hay nút "Clear All" trả về giá trị mặc định). * **Giá trị mặc định:** Trạng thái ban đầu khi load trang (mặc định để trống, chọn tất cả, hay mặc định chọn dòng đầu tiên). |
| **Loại/Hạng/Kênh/Nhóm khách hàng** | Selectbox multichoice | Có | Không | * **Mở danh sách:** Nguồn dữ liệu truyền vào Dropdown Giá trị: từ master đang hoạt động của màn hình tương ứng. Mặc định trống = tất cả. * **Tìm kiếm & Chọn:** Cho phép gõ từ khóa để lọc các option trong Dropdown hay không; cơ chế cuộn trang khi danh sách quá dài. * **Hiển thị lựa chọn:**    + *Chế độ chọn nhiều:* Hiển thị danh sách dạng thẻ (Tags), ngăn cách bởi dấu phẩy. * **Xóa lựa chọn :** Hành vi khi bấm nút xóa (xóa từng tag lẻ, hay nút "Clear All" trả về giá trị mặc định). * **Giá trị mặc định:** Trạng thái ban đầu khi load trang (mặc định để trống, chọn tất cả, hay mặc định chọn dòng đầu tiên). |
| **Tỉnh/TP** | Selectbox onechoice | Có | Không | Địa lý VN. |
| **Phường-Xã** |  |  |  | Phường/Xã phụ thuộc Tỉnh/TP đã chọn. |
| **Tuyến chăm sóc** | Selectbox multichoice | Có | Không | * **Mở danh sách:** Nguồn dữ liệu truyền vào Dropdown Danh sách tuyến Mặc định “Tất cả tuyến” (Danh sách tuyến theo phân quyền **KH\_US\_12**). Mặc định trống = tất cả. * **Tìm kiếm & Chọn:** Cho phép gõ từ khóa để lọc các option trong Dropdown hay không; cơ chế cuộn trang khi danh sách quá dài. * **Hiển thị lựa chọn (Format):**    + Chế độ chọn nhiều: Hiển thị [Mã] - [Tên]. * **Xóa lựa chọn:** Hành vi khi bấm nút xóa hay nút "Clear All" trả về giá trị mặc định). * **Giá trị mặc định:** Trạng thái ban đầu khi load trang (mặc định để trống, chọn tất cả, hay mặc định chọn dòng đầu tiên). |
| **Làm mới** | Button (viền) | Có | Không | Xóa toàn bộ filter, reset grid về mặc định. |
| **Tìm kiếm** | Button (primary) | Có | Không | Áp dụng tất cả tiêu chí filter, refresh grid. Sort bản ghi cập nhật gần nhất lên đầu. |
| **Thu gọn / Mở rộng** | Link | Có | Không | Mặc định mở rộng.  Thu gọn → chỉ 1 hàng (ô search + nút).  Mở rộng → hiện đủ lưới filter. |
| Thanh công cụ | | | | |
| ~~**Duyệt điều chỉnh KH**~~ | ~~Button~~ | ~~Có~~ | ~~Không~~ | ~~Mở màn hình hàng đợi duyệt các bản ghi KH do Sale/App tạo/sửa (KH\_US\_08). Hiển thị theo phân quyền duyệt.~~ |
| **Import Excel** | Button | Có | Không | Mở luồng Import (KH\_US\_09). Hiển thị theo phân quyền. |
| **Export Excel** | Button | Có | Không | Xuất grid theo filter hiện hành (KH\_US\_10). Tên file: DanhSachKhachHang\_DDMMYYYY.xlsx. |
| **+ Tạo mới** | Button (primary) | Có | Không | Mở màn hình Thêm mới Khách hàng (KH\_US\_02). Hiển thị theo phân quyền. |
| **Sync (icon)** | Button Icon | Có | Không | Kích hoạt đồng bộ thủ công / refresh trạng thái Sync ERP của grid. |
| Lưới dữ liệu (Data Table) | | | | |
| **Trạng thái Sync ERP** | Badge màu | Không | Không | * Xanh = Synced; thường là sync sau khi chạy schedule thành công * Vàng = Pending; trong ngày có điều chỉnh thêm bớt người liên hệ * Đỏ = Failed. Trạng thái nhận dc sau khi sync, từ ERP hoặc từ DMS   Neo ở đầu lưới danh sách |
| **Vùng** | Data (tag) | Không | Không | Hiển thị dạng tag. |
| **Khu vực** | Data (tag) | Không | Không | Hiển thị dạng tag. |
| **Mã Khách hàng** | Data Column | Không | Không | Mã định danh nội bộ DMS. Format:  Refix DMSCUS + xxxxxxx: Là dãy 7 số tự tăng |
| **Mã khách hàng ERP** | Data Column | Không | Không | external\_id do ERP sinh sau đồng bộ. Trống nếu chưa sync. |
| **Tên khách hàng** | Data (Link) | Có | Không | Click → mở Chi tiết khách hàng (bố cục như Tạo mới + tab Lịch sử), read-only. |
| **Loại khách hàng** | Data Column - tag | Không | Không | Cá nhân / Công ty. |
| **SĐT** | Data Column | Không | Không | Thông tin định danh khách hàng |
| **Email** | Data Column | Không | Không | Thông tin định danh khách hàng |
| **MST/CCCD** | Data Column | Không | Không | Thông tin định danh khách hàng MST/CCCD |
| **Trạng thái MST** | Data Column | Không | Không | Trạng thái hoạt động của mã số thuế |
| **Địa chỉ hóa đơn** | Data Column | Không | Không | Địa chỉ là địa chỉ nỗi chuỗi của khách hàng.  Với loại = Công ty bắt buộc phải có  Với loại  = Cá nhân không bắt buộc |
| **Địa chỉ giao hàng mặc định** | Data Column | Không | Không | Không bắt buộc |
| **Địa chỉ khách hàng** | Data Column | Không | Có | **Nếu chỉ có 1 địa chỉ là Giao hàng mặc định thì lưu địa chỉ khách hàng trên danh sách bằng địa chỉ giao hàng mặc định này** |
| **Địa chỉ theo vị trí** | Data Column | Không | Có | Hiển thị theo Toạ độ khách hàng. |
| **Kinh độ / Vĩ độ** | Data Column | Không | Không | Toạ độ khách hàng. |
| **Trạng thái** | Toggle Switch | Có | Không | Bật/tắt trực tiếp (nếu đủ quyền). Tắt → gọi luồng Ngưng hoạt động (KH\_US\_05) kèm popup xác nhận + cảnh báo nếu có giao dịch mở. |
| **Danh sách người liên hệ** | Data (Link/Badge) | Có | Không | Hiển thị số lượng Contact. Click → popup: STT · Mã LH · Tên LH · SĐT · Chức vụ · Trạng thái. |
| **Tuyến chăm sóc** | Data Column - Tag | Không | Không | Hiển thị dạng tag, nhiều tuyến hiển thị dấu +; - để expand/ collpase  Nếu khách hàng thuộc nhiều tuyến và mỗi tuyến (mỗi tuyến có 1 Nhân viên kinh doanh phụ trách) → hiển thị mỗi Tuyến cách nhau bằng dấu ";"  Hiển thị NPP gồm "Mã tuyến - Tên nhân viên"  Nếu khách hàng không thuộc tuyến nào → hiển thị trống  Nếu Tuyến chăm sóc không gán nhân viên thì hiển thị dưới dạng: Mã tuyến - Chưa gán nhân viên (VD: ROUTE0001 - Chưa gán nhân viên) |
| **Nhân viên chăm sóc** | Data Column - Tag | Không | Không | Hiển thị theo Tuyến chăm sóc  1 Nhân viên nhiều tuyến hiển thị 1 tag. |
| **Nhóm khách hàng** | Data Column | Không | Không | Hiển thị từ Master Data khi tạo khách hàng  Nếu không có → Hiển thị trống |
| **Kênh bán hàng** | Data Column | Không | Không | Hiển thị từ Master Data khi tạo khách hàng  Nếu không có → Hiển thị trống |
| **Phân loại khách hàng** | Data Column | Không | Không | Hiển thị từ Master Data khi tạo khách hàng  Nếu không có  → Hiển thị trống |
| **Hạng khách hàng** | Data Column | Không | Không | Hiển thị từ Master Data khi tạo khách hàng  Nếu không có → Hiển thị trống |
| **Vị trí khách hàng** | Data Column | Không | Không | Hiển thị từ Master Data khi tạo khách hàng  Nếu không có → Hiển thị trống |
| **Đơn vị kinh doanh** | Data Column | Không | Không | Hiển thị từ Master Data khi tạo khách hàng  Nếu không có → Hiển thị trống |
| **Ngày tạo / Người tạo / Ngày cập nhật / Người cập nhật** | Data Column | Không | Không | Thông tin hệ thống. Format DD-MM-YYYY HH:MM:SS.   * Nếu sync từ ERP hiển thị người: "service-account-erp-vg" * Thời gian cập nhật: Last Modify |
| **Tùy chỉnh** | Button Icon | Có | Không | Chọn icon Điều chỉnh → Mở Màn hình Chỉnh sửa (KH\_US\_03). Hiển thị theo phân quyền. |
| **Footer / Phân trang** | Pagination | Có | Không | “1-10 trên N khách hàng” + trang [1][2] + dropdown “10/trang”. |

### Trạng thái nghiệp vụ

| **Trạng thái** | **ERP Sync** | **Ý nghĩa** | **Chuyển tiếp cho phép** |
| --- | --- | --- | --- |
| ~~**INIT**~~ |  | ~~Bản khởi tạo~~ | ~~→ PENDING\_APPROVAL (submit)~~ |
| ~~**PENDING\_APPROVAL**~~ |  | ~~Đã gửi về Web, chờ cấp trên duyệt.~~ | ~~→ ACTIVE (approve) · → (reject, trả App)~~ |
| **ACTIVE** | **CUSTOMER-Closed Won** | Đang hoạt động trong Master, dùng cho giao dịch. | → INACTIVE (ngưng) · → ACTIVE (sửa/sync) |
| **INACTIVE** |  | Ngưng hoạt động; giữ bản ghi & liên kết, không dùng cho giao dịch mới | → ACTIVE (kích hoạt lại / sync ghi đè) |
|  |  |  |  |

### Trạng thái đồng bộ ERP (Sync Status) **KH\_US\_07**

Cơ chế Sync: Ghi đè TOÀN BỘ bản ghi theo last\_update mới nhất . Không merge field-level.

| **Trạng thái** | **Badge** | **Điều kiện chuyển** |
| --- | --- | --- |
| **PENDING** | **Vàng** | Vừa tạo/sửa (đã duyệt), đang chờ đẩy ERP. |
| **SYNCED** | **Xanh** | ERP xác nhận thành công, đã trả external\_id. |
| **FAILED** | **Đỏ** | ERP trả lỗi → cho retry thủ công (nút Sync). |

## **Tạo mới / Chỉnh sửa Khách hàng (KH\_US\_02 / KH\_US\_03)**

**Mô tả:** Màn hình dạng Modal, tiêu đề “Thêm mới Khách hàng” + nút [X].

Chia 3 Tab:

* Thông tin khách hàng ·
* Người liên hệ ·
* Địa chỉ. Footer cố định (Đóng / Lưu) luôn hiển thị khi scroll.

| Tên Trường | Loại dữ liệu/Loại field | Thao tác? | Bắt buộc? | **Mô tả nghiệp vụ** | Trường ERP |
| --- | --- | --- | --- | --- | --- |
| TAB 1 — Thông tin khách hàng | | | | | |
| KHUNG 1 · Thông tin khách hàng | | | | | |
| **Loại khách hàng** | Radio | Có | **Có** | ( ) Công ty ( ) Cá nhân — mặc định Công ty.   * Chỉ chọn một. * Checked (True), * Unchecked (False) * Null - Chưa được ai bấm vào (False)     Logic:   * Công ty → hiện “Tên công ty” (bắt buộc), ẩn Họ/Tên đệm/Tên. * Cá nhân → hiện Họ\*/Tên đệm/Tên\*.   + Hiển thị “Tên khách hàng”= Nối chuỗi  "Họ + Tên đệm + Tên" (là trường "Tên công ty" nhưng đổi label) | TYPE   * firstname * middlename * lastname * companyname |
| **Trạng thái** | Toggle | Có | Có | Hoạt động / Ngưng hoạt động. Mặc định Hoạt động. | STATUS |
| **Mã khách hàng** | Text (Disabled) | Không | Có | “Tự động sinh khi lưu” — readonly, nền xám, icon khóa. Format DMS\_CU+ 7 số tự tăng | GOMS CUSTOMER ID |
| **Mã ERP (external\_id)** | Hidden/Readonly | Không | Không | ERP tự sinh khi sync. Ẩn trên form, chỉ hiển thị ở lưới danh sách. Readonly. | External ID |
| **Mã số thuế/CCCD** | Text + Button | Có | **Có** | Validate định dạng theo mode  1/ Tự động loại bỏ các khoảng trắng ở đầu/cuối chuỗi và bỏ tất cả ký tự đặc biệt (chỉ giữ lại các chữ số `0-9`).  2/ Quy tắc validat theo mode  Mode: **Công ty**   * **Mục đích:** Xác thực Mã số thuế (MST) của doanh nghiệp hoặc chi nhánh. * **Quy định độ dài:**    + Chuỗi nhập vào **bắt buộc phải là 10 chữ số** (MST doanh nghiệp/tổ chức) **hoặc 13 chữ số** (MST chi nhánh/đơn vị trực thuộc dạng 10 số gốc + 3 số nhánh). * **Xử lý lỗi & Cảnh báo:**    + Nếu độ dài chuỗi khác 10 và khác 13 chữ số (ví dụ: nhập <10; 11, 12 hoặc >13 ký tự):      - Hành động: Chặn ngay lập tức, không cho phép gửi yêu cầu (gọi API).     - Thông báo lỗi: Mã số thuế không hợp lệ hoặc không tồn tại, vui lòng kiểm tra lại!   Mode: **Cá nhân**   * **Mục đích:** Xác thực Mã số thuế cá nhân hoặc Căn cước công dân (CCCD). * **Quy định độ dài:**    + Chuỗi nhập vào **bắt buộc phải thuộc một trong hai trường hợp**:      1. **Đúng 10 chữ số:** Định dạng Mã số thuế cá nhân.     2. **Đúng 12 chữ số:** Định dạng Căn cước công dân (CCCD). * **Xử lý lỗi & Cảnh báo:**    + Nếu độ dài chuỗi **khác 10 và khác 12 chữ số** (ví dụ: nhập <10, 11, 13 hoặc >12 ký tự):      - Hành động: Chặn ngay lập tức, không cho phép gửi yêu cầu (gọi API).     - Thông báo lỗi: Mã số thuế hoặc CCCD không hợp lệ, vui lòng kiểm tra lại!   **Nút “Kiểm tra MST”** gọi API Thuế real-time **(KH\_US\_06).** | TAX REG. NUMBER |
| **Địa chỉ hóa đơn** | Text | Không | Có | Địa chỉ hóa đơn dạng checkbox = True/False  Đánh dấu địa chỉ xuất hóa đơn mặc định.  Có thể bỏ chọn.   * Checked (True), * Unchecked (False) * Null - Chưa được ai bấm vào (False)  1. Default = TRUE và disable nếu dữ liệu tự động điền từ API 2. Cho phép check chọn và nhập nếu dữ liệu trống | Default Billing |
| **Trạng thái MST** | Text  (readonly) | Không | Không | Dữ liệu tự động điền từ API  Không cho nhập | VALIDITY STATUS |
| **Tên công ty** | Text Field (String- Max size 83) | Có | **Có**\* | \*Bắt buộc & chỉ hiển thị cho nhập khi Loại KH = Công ty.   * Readonly hiển thị “Tên khách hàng= Nối chuỗi  "Họ + Tên đệm + Tên" khi Loại KH = Cá nhân. | COMPANY NAME |
| **Họ / Tên đệm / Tên** | Text Field (Max Size 32 Chars.) | Có | **Có**\* | Chỉ hiển thị khi Loại KH = Cá nhân. Bắt buộc: Họ, Tên. | * firstname * middlename * lastname * companyname |
| **Khách hàng cha** | Selectbox onechoice (Readonly) | Không | Không | parent\_id đồng bộ từ ERP. “Đồng bộ từ ERP” — readonly | PARENT COMPANY |
| Nhà phân phối | ẨN | ẨN | ẨN | Hiện tại ViGO đang chỉ có 1 NPP là ERP. hệ thống ẩn field Nhà phân phối và set default = NPP hiện tại của VIGO  Trường hợp VIGO có từ 2 NPP trở lên thì BA sẽ define hiển thị và chọn phù hợp với từng màn hình. |  |
| **Email** | Email Field/Text (Sting max size 300) | Có | Không | Validate regex email chuẩn. Placeholder [ten@congty.com](mailto:ten@congty.com)./ [ten@gmail.com](mailto:ten@gmail.com)  “Email không đúng định dạng, vui lòng kiểm tra lại!” | EMAIL |
| **Số điện thoại** | Phone Field/ Text (String. Max Size 21) | Có | **Có** | Chỉ số; validate định dạng SĐT VN (10 số, đầu 0). Dùng để CHECK TRÙNG (cảnh báo), KHÔNG phải khóa khớp. CHO PHÉP sửa sau khi lưu   * “Số điện thoại không đúng định dạng, vui lòng kiểm tra lại!” | PHONE |
| **Fax** | Text Field | Có | Không | Placeholder 028-xxxx-xxxx. | FAX |
| KHUNG 2 · Phân loại và kênh | | | | | |
| **Nhóm khách hàng** | Selectbox onechoice | Có | Không | Dữ liệu từ màn hình Nhóm khách hàng. Tất cả dữ liệu đang hoạt động | Customer Group.  *ERP Truyền dạng mảng Array[[internalid.name](http://internalid.name)] hoặc name. DMS nhận và tự động lưu danh sách nếu chưa có.*  ***Cho phép tạo mới trên DMS*** |
| **Đơn vị kinh doanh** | Selectbox onechoice | Có | Không | ERP Truyền dạng mảng Array[[internalid.name](http://internalid.name)] hoặc name. DMS nhận và tự động lưu danh sách đơn vị kinh doanh nếu chưa có.  Cho phép người dùng tạo khách hàng chọn một đơn vị kinh doanh có sẵn. | Business Unit.  *ERP Truyền dạng mảng Array[[internalid.name](http://internalid.name)] hoặc name. DMS nhận và tự động lưu danh sách nếu chưa có.*  ***Cho phép tạo mới trên DMS*** |
| **Kênh bán hàng** | Selectbox onechoice | Có | Không | Kênh bán hàng như H&A; H&B từ màn hình Kênh bán hàng.  Tất cả dữ liệu đang hoạt động | SALE CHANNEL  *ERP Truyền dạng mảng Array[[internalid.name](http://internalid.name)] hoặc name. DMS nhận và tự động lưu danh sách nếu chưa có.*  ***Cho phép tạo mới trên DMS*** |
| **Phân loại/Hạng/Vị trí khách hàng** | Selectbox onechoice | Có | Không | Phân loại bổ sung phục vụ chính sách bán hàng | ***Cho phép tạo mới trên DMS*** |
| KHUNG 3 · Thông tin tài chính | | | | | |
| **Tiền tệ** | Selectbox onechoice (Ẩn) | Có | Có | Mặc định VND.  Hệ thống không hiển thị nhưng lưu mặc định cho khách hàng | Primary Currency  *Default value: VND* *Nếu khác VND thì điền theo ISO* |
| **Điều khoản thanh toán** | Selectbox onechoice | Có | Không | Payment Term. | Term  *ERP Truyền dạng mảng Array[[internalid.name](http://internalid.name)] hoặc name. DMS nhận và tự động lưu danh sách nếu chưa có.* |
| **Hạn mức tín dụng** | Number (Decimal) | Có | Không | Hạn mức tín dụng của KH  Format tiền tệ. ≥ 0, mặc định 0   * “Hạn mức tín dụng phải lớn hơn hoặc bằng 0!” | Credit Limit |
| KHUNG 4 · Hình ảnh khách hàng | | | | | |
| **Hình ảnh khách hàng** | Image Upload | Có | Không | cho phép upload Tối đa 10 ảnh (0/10). JPG/PNG/JPEG/SVG, ≤ 5MB/ảnh. Ảnh chỉ lưu DMS, không sync ERP.   * “Ảnh vượt quá dung lượng/định dạng cho phép!” |  |
| **TAB 2 — Gắn người liên hệ (KH\_US\_04)** | | | | | |
| **Ô tìm "Người liên hệ"** | Selectbox multichoice | Có | Không | Placeholder “Theo Mã | Tên | Email | SĐT người liên hệ”.   * Nhập keyword → Tìm kiếm/Enter → hiển thị danh sách Mã–Tên Contact- Số điện thoại để chọn (chọn nhiều). |  |
| **Bảng Người liên hệ đã chọn** | Data Table | Có | Không | Cột: STT · Mã người liên hệ · Tên người liên hệ · SĐT · Chức vụ · Trạng thái.  Cho phép bỏ gắn liên hệ bằng cách chọn icon xóa ở cuối mỗi hàng. Một Contact gắn nhiều KH (N-N).  Contact ngưng hoạt động không xuất hiện trong danh sách chọn gắn mới.   * **Khi lưu tạo mới/ điều chỉnh** hiển thị lỗi nếu có người liên hệ không hoạt động **"Người liên hệ @mã - tên đã ngưng hoạt động. Vui lòng kiểm tra lại!"** * Khi xem danh sách/chi tiết: Vẫn hiển thị trạng thái "ngưng hoạt động và hoạt động" |  |
| **TAB 3 — Địa chỉ (1-N)** | | | | | |
| **Thêm địa chỉ** | Button | Có | Không | Mặc định hiển thị button "Thêm địa chỉ" và khung Định vị trên bản đồ |  |
| **Danh sách địa chỉ** | Data | Có | Có | Nhãn địa chỉ - Tag địa chỉ - Địa chỉ như hình.  Cho phép xóa không cần hỏi |  |
| **Địa chỉ giao hàng mặc định** | Checkbox | Có | Không | Chọn Thêm địa chỉ lần đầu hệ thống tự đánh dấu địa chỉ giao hàng mặc định Default Shipping = True. Có thể bỏ chọn.  Khi đa có default shipping. Địa chỉ khác sẽ disable checkbox default shipping; và Default Shipping = False   * Checked (True), * Unchecked (False) * Null - Chưa được ai bấm vào (False)   Sau khi chọn hiển thị trên Danh sách địa chỉ tương ứng dạng Tag- Giao hàng mặc định.  Trường hợp không chọn hiển thị tag - Địa chỉ khác  **(Nếu Default Shipping = False thì đây là địa chỉ khách hàng (nếu có nhiều địa chỉ khác thì lấy địa chỉ ngẫu nhiên/ đầu tiên)**  **Nếu Default Shipping = True và không có địa chỉ khác thì Địa chỉ khách hàng = Địa chỉ giao hàng mặc định này)** | Default Shipping |
| **Nhãn địa chỉ** |  |  |  | **Placeholder:** "Ví dụ: Trụ sở chính, kho hàng, ...".  Sau khi nhập hiển thị trên Danh sách địa chỉ ngay text "Địa chỉ chưa đặt tên" |  |
| **Tên người nhận** | Text Field | Có | Không | Auto theo tên khách hàng; cho phép sửa. | Addressee |
| **Số điện thoại người nhận** | Text Field | Có | Không | Hiển thị số điện thoại (PHONE) Thông tin khách hàng  Cho phép sửa, không validate | Phone |
| **Đất nước** | Selectbox onechoice | Có | Có | Mặc định Việt Nam. | Country |
| **Tỉnh/Thành Phố** | Selectbox onechoice | Có | Có | Tỉnh thành phố theo Địa lý VN. | Tỉnh/TP |
| **Phường/Xã** | Selectbox onechoice | Có | Có | Phụ thuộc Tỉnh/TP đã chọn. | Xã/Phường |
| **Số nhà/tên đường** | Text Field | Có | Có | VD: Số 12 đường Lê Lợi. | Address 1 |
| **Địa chỉ** | Text (Readonly)- Sting Max Size 150 | Không | Không | Nối chuỗi: Tên người nhận + Số nhà/đường + Phường/Xã + Tỉnh/TP + Đất nước. | ADDRESS (default\_address) |
| **Địa chỉ theo vị trí** | Text (Readonly) | Không | Không | Trả về từ map sau “Tìm vị trí theo địa chỉ đang chọn”. |  |
| **Kinh độ** | Text (Disabled) | Không | Không | Auto từ map. |  |
| **Vĩ độ** | Text (Disabled) | Không | Không | Auto từ map. |  |
| **Tìm vị trí theo địa chỉ đang chọn** | Button (xanh lá) | Có | Không | Nút  là geocode dựa trên **địa chỉ đang được chọn/mở xem** trong danh sách (`selected`), nhưng kết quả (`mapAddress`/`latitude`/`longitude`) được lưu vào **Customer** (dùng chung, không nhân bản theo từng địa chỉ).  Nếu người dùng bấm "Tìm vị trí" khi đang xem địa chỉ khác, nó sẽ ghi đè lên bộ tọa độ chung duy nhất đó.  Autofill Địa chỉ theo vị trí + Kinh/Vĩ độ + ghim pin bản đồ. |  |
| **Bản đồ (Google Map)** | Map + Pin | Có | Không | Pin đỏ + popup “Cập nhật vị trí” →tự động điền lại toạ độ theo pin kéo thả. |  |
| **Nút “Đóng”** | Button | Có | Không | Nút “Đóng” (viền xám) → xác nhận “Bạn có chắc chắn muốn Thoát?” nếu có dữ liệu chưa lưu. |  |
|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Nút “Lưu”** | Button | Có | Không | Nút “Lưu” → xác nhận “Bạn có chắc chắn thao tác thêm mới?”    * Kiểm tra:    + Check khách hàng là unique, Nếu trùng khách hàng qua Mã số thuế/ số điện thoại: "Khách hàng **@mã khách hàng** có số điện thoại **@số điện thoại** vàMST **@mã số thuế** đã tồn tại. Vui lòng kiểm tra lại!"   + Nếu không nhập dữ liệu tại trường thông tin bắt buộc thì báo lỗi "[Tên trường] là bắt buộc." ở dưới mỗi trường dữ liệu.   + Nếu vi phạm định dạng/độ dài: "[Tên trường] không vượt quá {x} ký tự!"   + Email chưa đúng định dạng, báo lỗi "Email không đúng định dạng." Nhiều email cách nhau bởi dấu ";"   + **nếu 'Công ty' thì bắt buộc phải có 1 địa chỉ đánh dấu địa chỉ xuất hóa đơn mặc định, nếu không có hiển thị** "Chưa có địa chỉ xuất hóa đơn cho công ty, vui lòng thêm trước khi lưu."   + Nếu thông tin Địa chỉ hiển thị theo vị trí chưa được chọn thì báo lỗi "Bạn chưa tìm vị trí trên bản đồ."     - Xử lý: *Hiển thị popup xác nhận ngay trên nút:*       * + *Nếu đồng ý: Hệ thống thực hiện tạo dòng dữ liệu khách hàng với trạng thái **Đang hoạt động**.  đóng modal → refresh grid.*         + *Nếu đóng: thực hiện đóng popup xác nhận.* * : *Hiển thị popup xác nhận ngày trên nút:*   + - *Nếu đồng ý: hệ thống thực hiện đóng popup, không thực hiện lưu dữ liệu.*     - *Nếu đóng: thực hiện đóng popup xác nhận.*  * *Nếu nhấn thoát (**X**) thì hiển thị popup xác nhận giữa màn hình. Thông tin xử lý sẽ giống nút*   **Lưu ý: Khi lưu mặc định NPP là NPP ERP** |  |

## **Chỉnh sửa/ Xử lý dữ liệu Inactive (KH\_US\_03 / KH\_US\_05)**

**Phân quyền người được chỉnh sửa có thể:**

* Thấy icon chỉnh sửa và được gán / gỡ người liên hệ

  + Khóa tất cả dữ liệu không cho điều chỉnh
* Enable nút chuyển trạng thái khách hàng  để **Ngưng hoạt động (KH\_US\_05):**

  + toggle tắt → popup xác nhận → set Inactive, giữ nguyên bản ghi & liên kết Contact; KH inactive không xuất hiện ở danh sách chọn gắn mới nhưng vẫn tra cứu được qua filter.
  + Nếu KH đang có GIAO DỊCH MỞ (đơn hàng bán chưa xử lý (Trạng thái chờ duyệt), hệ thống CẢNH BÁO nhưng KHÔNG chặn: popup “Khách hàng @Mã KH đang có đơn hàng chưa hoàn tất. Bạn có chắc chắn muốn ngưng hoạt động?” → Xác nhận vẫn cho ngưng.
  + Giữ nguyên bản ghi & liên kết Contact; KH inactive không xuất hiện ở danh sách chọn gắn mới nhưng vẫn tra cứu được qua filter. Không sync qua ERP khách hàng ngưng hoạt động

Note - Nội dung chưa làm

**Duyệt điều chỉnh Khách hàng (KH\_US\_08)**

1/ Màn hình Danh sách khách hàng, bổ sung button Duyệt điều chỉnh điểm bán (button chỉ hiển thị khi user được phân quyền phê duyệt.) 

2/ Tính năng hiện tại đã đáp ứng: [HO] Duyệt điều chỉnh điểm bán

Bản ghi KH do Sale tạo mới hoặc chỉnh sửa không ghi thẳng vào Master mà vào hàng đợi Pending Approval. Cấp trên duyệt mới có hiệu lực và mới được đẩy sang ERP.

| **Bước** | | **Xử lý** |  |
| --- | --- | --- | --- |
| 1 | | Sale tạo/sửa KH (kèm Contact) trên App/Web → bản ghi lưu trạng thái Chờ duyệt (PENDING\_APPROVAL), kèm base\_version = version Master tại thời điểm bắt đầu sửa (nếu là sửa bản đã tồn tại). Ghi nhận thời gian và người điều chỉnh. |  |
| 2 | | Quản lý mở “Duyệt điều chỉnh KH” → xem danh sách chờ + so sánh Dữ liệu cũ / Dữ liệu mới. |  |
| 3 | | Trước khi apply: hệ thống so base\_version với version. Nếu Master đã được đồng bộ từ ERP (bản gốc # Master hiện tại # bản đề xuất)    * Khi Quản lý bấm Duyệt, hệ thống sẽ kiểm tra:    + **Nếu `base_version` == Master hiện tại**: Nghĩa là ERP chưa hề cập nhật gì mới kể từ lúc DMS sửa. Hệ thống cho phép **Duyệt thành công** và ghi đè dữ liệu DMS lên Master.   + **Nếu `base_version` != Master hiện tại**: Nghĩa là ERP đã đồng bộ dữ liệu mới về trong lúc DMS đang chờ duyệt. Hệ thống phải **Chặn lại (Block hay warning)** và cảnh báo xung đột "Dữ liệu mới nhất đã được đồng bộ. Vui lòng kiểm tra lại!". |  |
| 4 | | Duyệt → ghi đè Master (Last-Write-Wins theo last\_update), tăng version, đưa vào hàng đợi Sync ERP (Pending) |  |
| 5 | | Từ chối → trả lý do; bản ghi KHÔNG vào Master; Khách hàng vẫn hoạt động ở version hiện tại. |  |
| 6 | | Ghi log toàn bộ thao tác duyệt/từ chối vào Lịch sử KH (KH\_US\_11). |

**Chỉnh sửa khách hàng**

* **Kế thừa:** Form Chỉnh sửa dùng lại toàn bộ cấu trúc Tạo mới.

  + Lưu ý: Tại màn hình edit, nếu các trường selectbox không bắt buộc như: Nhóm khách hàng, Vị trí khách hàng, Loại khách hàng, Hạng khách hàng, Kênh bán hàng, ...  đang lưu 1 giá trị không hoạt động thì hệ thống sẽ hiển thị field đó là rỗng mà không cần báo lỗi gì, nếu người dùng không chọn lại mà nhấn lưu thì lưu rỗng.
* **Khóa dữ liệu:** Mã KH, Mã ERP (external\_id), Khách hàng cha (parent\_id) — Disabled.

  + SĐT là BẮT BUỘC và CHO PHÉP sửa ở màn Chỉnh sửa. Chỉ Mã KH và các trường ERP readonly (external\_id, parent\_id) không cho sửa. Mọi thay đổi SĐT được ghi Lịch sử khách hàng

* **Nhân viên kinh doanh / danh mục người liên hệ Inactive:** nếu bản ghi tham chiếu tới một danh mục đã Inactive — khi xem chi tiết vẫn hiển thị thông tin cũ; khi Lưu mà vẫn giữ giá trị inactive → chặn & báo lỗi động.

  + ***Thông báo mẫu:*** *“ Người liên hệ @mã - tên, @mã - tên đã ngưng hoạt động. Vui lòng kiểm tra lại!"*

### **Kiểm tra mã số thuế (KH\_US\_06)**

Respon trả về theo API như sau: 

Ví dụ cấu trúc JSON trả về từ masothue.com

{  
  "success": true,  
  "data": {  
    "**taxCode": "0316794479",**  
    **"name": "CÔNG TY TNHH CASSO",**  
    "internationalName": "CASSO COMPANY LIMITED",  
    "shortName": "CASSO",  
  **"address": "Nhà A, Khu Công Nghệ Phần Mềm, Phường Linh Trung, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",**  
    "representative": "Nguyễn Văn A",  
    **"taxDepartment": "Chi cục Thuế Thành phố Thủ Đức",**  
    "status": "Đang hoạt động (đã được cấp MST)",  
  **"startDate": "2021-04-01"**  
  }  
}

**Nút “Kiểm tra MST”** gọi API Thuế real-time (MST DUY NHẤT toàn hệ thống — dùng check trùng. Không hợp lệ → chặn lưu; API timeout → báo lỗi cho lưu cờ tax\_verified=false.)

* Trường hợp không tìm thấy (tax\_verified=false.): Hệ thống trả về thông báo: "Không tìm thấy thông tin cho Mã số thuế hoặc CCCD này. Vui lòng kiểm tra lại và thử lại."
* Hợp lệ → hiển thị "Mã số thuế hợp lệ"

1/ Chuẩn hóa hiển thị theo từng Mode

**Mode: Cá nhân**

* **Xử lý Tên khách hàng (Cắt chuỗi):**

  + Tự động lấy giá trị Họ và Tên từ API trả về, thực hiện cắt chuỗi từ từ đầu tiên để điền tự động vào các trường  **Họ**,  từ cuối cùng là **Tên**, từ còn lại là → **Tên đệm**, Giá trị name = **Tên khách hàng.**
* **Địa chỉ hóa đơn:**

  + Hệ thống tự động điền theo giá trị address trả về từ API.
  + Tự động đánh dấu thuộc tính default billing = True.
  + Chuyển trường này sang trạng thái chỉ đọc (Readonly).
* **Trạng thái MST:**

  + Tự động điền theo giá trị `status` từ API và đặt trạng thái **chỉ đọc (Readonly)**.

**Mode: Công ty**

* **Tên công ty:** Tự động điền tên công ty trả về từ API vào trường **Tên công ty**.
* **Địa chỉ hóa đơn:**

  + Hệ thống tự động điền theo giá trị address trả về từ API.
  + Tự động đánh dấu thuộc tính default billing = True.
  + Chuyển trường này sang trạng thái chỉ đọc (Readonly).
* **Trạng thái MST:**

  + Tự động điền theo giá trị `status` từ API và đặt trạng thái **chỉ đọc (Readonly)**.

2/ Quy tắc ngoại lệ & Tính linh hoạt

* **Xử lý dữ liệu thiếu:** Nếu API trả về thiếu bất kỳ thông tin nào, hệ thống giữ trống trường tương ứng và **mở quyền cho phép người dùng nhập tay trừ "Trạng thái MST"**
* **Tính năng tra cứu lại:** Sau khi tra cứu thành công, hệ thống **không khóa ô nhập MST**. Người dùng vẫn có thể thay đổi/chỉnh sửa mã số và bấm tra cứu lại bất kỳ lúc nào để cập nhật dữ liệu mới.

**Trường hợp người dùng không nhấn nút "Tra cứu MST" => vẫn cho nhập tên, địa chỉ hóa đơn. không cho nhập "Trạng thái MST".**

## **Import Excel (KH\_US\_09)**

* Định dạng hỗ trợ: XLS/XLSX. Có Template tải về.
* **Rule chung:** khi cập nhật, ô không bắt buộc để trống = giữ nguyên dữ liệu cũ (không ghi đè bằng rỗng). ô bắt buộc nhưng để trống: " **Tên cột để trống** dòng n bị bỏ trống, vui lòng kiểm tra lại!”
* Nhấn vào import, hiển thị 2 chức năng để người dùng lựa chọn như sau:

  + Nếu chọn "Import khách hàng từ hệ thống khác":

    - Bắt buộc trường Mã khách hàng phải có dữ liệu, nếu không có hiển thị thông báo: Dòng n: Mã khách hàng là trường bắt buộc.
    - Sử dụng cột Mã khách hàng, kiểm tra trong cơ sở dữ liệu

      * Nếu đã tồn tại → Update thông tin khách hàng
      * Nếu chưa tồn tại → Tạo mới khách hàng với Mã khách hàng user đã nhập. Nhà phân phối: mặc định là NPP ERP
  + Nếu chọn "Import tạo mới khách hàng":

    - Kiểm tra cột Mã khách hàng

      * Nếu để trống: Hiểu là đang thực hiện chức năng Tạo mới, kiểm tra các dữ liệu để tạo mới khách hàng. Nhà phân phối: mặc định là NPP ERP
      * Nếu có nhập thông tin: Hiểu là đang thực hiện Cập nhật, kiểm tra các dữ liệu để cập nhật khách hàng.

| **Trường** | **Bắt buộc?** | **Rule & Thông báo lỗi** |
| --- | --- | --- |
| **Mã Khách hàng** | Không | * Để trống = tạo mới. * Có Mã & sai định dạng DMSCUS + 7 số → “Mã KH dòng n nhập không đúng định dạng!”. Trùng nội bộ file → “Mã KH @Mã KH dòng n có xuất hiện tại dòng n1, n2… không được trùng trong file import!”. * Có Mã & Đã tồn tại DB = cập nhật. |
| **Khách hàng cá nhân** | Có | Dropdownlist:   1. Yes 2. No |
| **Tên khách hàng/ Tên công ty** | Có | Trống → “Tên KH dòng n bị bỏ trống, vui lòng kiểm tra lại!” |
| **Số điện thoại** | Có | * Trống → “Số điện thoại dòng n bị bỏ trống, vui lòng kiểm tra lại!” * Sai định dạng → “Số điện thoại dòng n nhập không đúng định dạng!”. * Trùng KH khác → cảnh báo (không chặn). |
| **Email** | Không | Nếu có nhập, sai format → “Email dòng n nhập không đúng định dạng!” |
| **MST (Công ty) / CCCD (Cá nhân)** | Có | MST/CCCD bắt buộc & DUY NHẤT: trùng → “MST/CCCD dòng n đã tồn tại, không được trùng!”. |
| **Kênh bán hàng**  **Nhóm khách hàng**  **Phân loại khách hàng**  **Hạng khách hàng**  **Vị trí khách hàng** | Không  (Mỗi loại một cột) | Không khớp master → “'@tên Trường' dòng n không tồn tại hoặc không hoạt động!” |
| **Địa chỉ hóa đơn** | Không | Lưu dạng text, |
| **Địa chỉ giao hàng** | Không | Lưu dạng text, |
| **Số nhà/ Tên đường** | Không | Lưu dạng text, |
| **Tỉnh/TP**  **Phường/Xã**  **Địa chỉ** | Không | * Địa chỉ khách hàng/Địa chỉ theo Vị trí khách hàng * Tạo mới: Các trường dữ liệu này bắt buộc nhập và Tỉnh/Thành Phố, Quận/Huyện, Phường/Xã ràng buộc lẫn nhau * Cập nhật: Các trường dữ liệu này không bắt buộc, nhưng nếu nhập 1 trong 4 trường này thì bắt buộc phải nhập cả 4 trường dữ liệu.    + Sai địa lý → báo lỗi dòng n.   + Nhập Phường/Xã mà thiếu Tỉnh/TP → " Phường/Xã @Tên dòng n chưa có Tỉnh/Thành phố, vui lòng kiểm tra lại!” |
| **Kinh độ** | Không | * Nếu có nhập thông tin: hệ thống ghi nhập dự liệu được nhập * Nếu để trống: hệ thống tự động điền Kinh độ, Vĩ độ được lấy dựa trên địa chỉ của khách hàng đó. |
| **Vĩ độ** | Không | * Nếu có nhập thông tin: hệ thống ghi nhập dự liệu được nhập * Nếu để trống: hệ thống tự động điền Kinh độ, Vĩ độ được lấy dựa trên địa chỉ của khách hàng đó. |
| **Người liên hệ** | Không | Nhập mã cách nhau bởi dấu phẩy. tự động bỏ khoảng trắng khi validate.   * Không tồn tại: Báo lỗi "Người liên hệ @Mã người liên hệ không tồn tại. Vui lòng kiểm tra lại * Tồn tại. Gắn liên kết người liên hệ vào khách hàng |
| **Mã Tuyến chăm sóc** | Không | * Trường này cho phép người dùng nhập mã Tuyến chăm sóc để thêm khách hàng vào Tuyến chăm sóc. * Hệ thống thực hiện kiểm tra Mã Tuyến chăm sóc có đang tồn tại trên hệ thống không    + Nếu không hiển thị thông báo: Dòng n: Mã Tuyến chăm sóc không tồn tại. Vui lòng kiểm tra lại! * Hệ thống thực hiện kiểm tra Mã NPP của khách hàng phải giống Mã NPP của Tuyến chăm sóc.    + Nếu không hiển thị thông báo: Dòng n: Mã NPP của khách hàng và NPP của Tuyến chăm sóc không giống nhau. Vui lòng kiểm tra lại! * Hệ thống thực hiện kiểm tra Mã Tuyến chăm sóc có đang hoạt động không    + Nếu không hiển thị thông báo: Dòng n: Mã Tuyến chăm sóc không hoạt động. Vui lòng kiểm tra lại! * Trường hợp Mã Tuyến chăm sóc không được nhập, nhưng user nhập một hoặc nhiều trường: Ngày bắt đầu, Ngày kết thúc, Tần suất, Thứ viếng thăm.    + Bỏ qua (không validate): Nếu thiếu Mã tuyến → coi các trường kia là không có giá trị (bỏ trống), không báo lỗi. |
| **Tên Tuyến chăm sóc** | Không | Nhập tên Tuyến chăm sóc, có thể để trống  Cột này chỉ để user kiểm tra dữ liệu trước khi import, hệ thống không kiểm tra dữ liệu và ko xử lý ở cột này. |
| **Ngày bắt đầu tuyến** | Required khi có Mã Tuyến chăm sóc | * Nhập ngày bắt đầu hoạt động của khách hàng trên tuyến * Nhập ngày bắt đầu hoạt động >= Ngày hiện tại    + Nếu không đúng hiển thị thông báo: Dòng n: Ngày bắt đầu tuyến phải lớn hơn hoặc bằng ngày hiện tại. Vui lòng kiểm tra lại! * Format: Định dạng ngày giống trường Ngày cấp    + Ngày bắt đầu tuyến sai định dạng hoặc không hợp lệ  → Thông báo: Ngày bắt đầu tuyến không hợp lệ. Vui lòng kiểm tra lại! |
| **Ngày kết thúc tuyến** | Không | * Nhập ngày kết thúc hoạt động của khách hàng trên tuyến    + Ngày kết thúc >= Ngày bắt đầu >= Ngày hiện tại   + Nếu không đúng hiển thị thông báo: Dòng n: Ngày kết thúc tuyến phải lớn hơn hoặc bằng ngày bắt đầu tuyến.   + Định dạng ngày giống trường Ngày cấp      - Ngày kết thúc tuyến sai định dạng hoặc không hợp lệ  → Thông báo: Ngày kết thúc tuyến không hợp lệ. Vui lòng kiểm tra lại! |
| **Tần suất viếng thăm** | Required khi có Mã Tuyến chăm sóc | * Hiển thị selectbox onechoice danh sách tần suất viếng thăm như sau:    + F1-1: Viếng thăm 1 tháng 1 lần vào tuần 1,5,9,13,...   + F1-2: Viếng thăm 1 tháng  1 lần vào tuần 2,6,10,14,…   + F1-3: Viếng thăm 1 tháng 1 lần vào tuần 3,7,11,15,…   + F1-4: Viếng thăm 1 tháng 1 lần vào tuần 4,8,12,16,…   + F2-1: Viếng thăm 1 tháng 2 lần vào tuần lẻ của tháng   + F2-2: Viếng thăm 1 tháng 2 lần vào tuần chẵn của tháng   + F4: Viếng thăm 1 tuần 1 lần   + F8: Viếng thăm 1 tuần 2 lần   + F12: Viếng thăm 1 tuần 3 lần   + F16: Viếng thăm 1 tuần 4 lần   + F24: Viếng thăm 1 tuần 6 lần * User chỉ chọn 1 tần suất viếng thăm * Bắt buộc chọn |
| **Thứ viếng thăm** | Required khi có Mã Tuyến chăm sóc | * User nhập tần suất viếng thăm tương ứng theo thứ viếng thăm * Các thứ cách nhau bằng dấu ; 2→ 8 (8 là chủ nhật) * Ràng buộc chọn Thứ viếng thăm theo tần suất đã chọn như sau:    + F1-1, F1-2, F1-3, F1-4, F2-1, F2-2, F4: Ràng buộc chọn 1 thứ   + F8: Ràng buộc chọn 2 thứ   + F12: Ràng buộc chọn 3 thứ   + F16: Ràng buộc chọn 4 thứ   + F24: Ràng buộc chọn 6 thứ Trường hợp chọn nhiều hơn hoặc ít hơn so với tần suất sẽ hiển thị thông báo:    + Với **tần suất @Tên tần suất** yêu cầu chọn @số thứ viếng thăm 1 tuần". Vui lòng kiểm tra lại.   + VD: Với tần suất là F8, yêu cầu chọn 2 thứ viếng thăm 1 tuần. * Thứ viếng thăm không tồn tại, hiển thị thông báo: Thứ viếng thăm không hợp lệ. Vui lòng kiểm tra lại! |
| **Tiến hành xử lý** |  | * Nếu tất cả đều hợp lệ, hệ thống thực hiện thêm dữ liệu vào danh sách khách hàng theo quy tắc sau:     + Nếu khách hàng trùng với khách hàng đã có trên hệ thống, hệ thống chỉ thực hiện cập nhật các trường thông tin bị thay đổi.   + Nếu khách hàng chưa có trên hệ thống, hệ thống thực hiện thêm mới khách hàng. Mặc định trạng thái "Đang hoạt động".   + Nếu khách hàng đã có trên hệ thống nhưng không có trong file import, hệ thống thực hiện giữ nguyên dữ liệu đó trên danh sách.   + IMPORT có gán tuyến bán hàng:      - Theo chức năng [[HO] Tuyến bán hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48431425) và [[HO][HT] Tuyến bán hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66526110)     - Kiểm tra nếu thỏa các điều kiện trên thì tạo mới/cập nhật khách hàng     - Khi lưu thành công: Trường hợp tạo mới/cập nhật: Sẽ tự động thêm khách hàng này vào tuyến và tự động làm mới Tuyến thực tế của ngày viếng thăm gần nhất (Trường hợp ngày hiện tại có tuyến thực tế viếng thăm thì sẽ update luôn vào ngày hiện tại) * Nếu có ít nhất 1 dữ liệu lỗi, hệ thống thực hiện show popup Chi tiết Import khách hàng - Trạng thái "Thất bại". |
| **Import gán tuyến thất bại** |  | Trường hợp import khách hàng thành công nhưng gán tuyến thất bại,   * Trạng thái import vẫn sẽ thành công * Nhưng ở màn hình Danh sách khách hàng sẽ hiển thị button Gán lại tuyến (User có phân quyền tạo mới/chỉnh sửa/import ở màn hình này sẽ được thấy button này).      * Button này chỉ hiển thị: Đối với tài khoản người dùng có thực hiện import khách hàng và tiến trình import này bị gán tuyến thất bại. * Đối với tài khoản người dùng khác, button này sẽ không hiển thị. Hoặc tài khoản người dùng có thực hiện import khách hàng và import gán tuyến thành công cũng sẽ không hiển thị button này. * Khi người dùng click vào button này, button sẽ đổi text thành "Đang xử lý" và disable đi, người dùng sẽ không click vào được. * Khi nhấn button này hệ thống sẽ thực hiện gán lại các tuyến import thất bại trong các file import mà tài khoản người dùng đang đăng nhập đã import lên. * Sau khi xử lý thành công các tuyến gán thất bại, button này sẽ ẩn đi.   Popup xem chi tiết thất bại không thay đổi so với luồng cũ ([HO] Danh sách điểm bán) |
|  |  |  |

## **Export Excel (KH\_US\_10)**

* Xuất theo bộ lọc & tìm kiếm hiện hành. Có phân quyền mới thấy nút. Dữ liệu bị giới hạn theo data scope người dùng.
* Tên file: DanhSachKhachHang\_DDMMYYYYHHMMSS.xlsx.
* Danh sách các trường dữ liệu trên lưới danh sách, data tải về theo dữ liệu được filter trên màn hình.

## **Lịch sử Khách hàng (KH\_US\_11)**

* **Bộ lọc thời gian:** Từ ngày – Đến ngày; Đến ngày ≥ Từ ngày; khoảng cách ≤ 31 ngày. Chưa chọn đủ mà bấm Export → “Vui lòng chọn thời gian để xem lịch sử!”
* Tên file: HIS\_CUSTOMER\_DDMMYYYYHHMMSS.xlsx.

**Cấu trúc dữ liệu Log**

| **Trường** | **Mô tả** |
| --- | --- |
| Header | Màn hình (Khách hàng) · Dữ liệu theo thời gian (từ–đến) · Thời gian xuất · Người xuất (Mã – Tên). |
| Mã ghi nhận lịch sử | Format: CUSTOMER\_ + 13 ký tự timestamp. |
| Thời gian ghi nhận | DD-MM-YYYY hh:mm:ss. |
| Mã đối tượng | Mã KH. |
| Trường dữ liệu | Tên trường có thay đổi. |
| Thao tác | Thêm mới / Cập nhật / Xóa (chỉ ẩn trên UI, không xóa DB) / Ngưng / Duyệt / Từ chối / Sync. |
| Dữ liệu cũ | Giá trị trước cập nhật (trống nếu Thêm mới). Ảnh → link mở hình. |
| Dữ liệu mới | Giá trị sau cập nhật (trống nếu Xóa). Ảnh → link mở hình. |
| Mã / Tên người thực hiện | User cập nhật. (không cần ghi nhận khi ERP sync tại đây) |
| Nguồn cập nhật | Web Portal DMS / App Salesman / ERP Sync / Import. |

## **Phân quyền thao tác (KH\_US\_12)**

Các nút Xem / Thêm / Sửa / Ngưng / Import / Export / Duyệt chỉ hiển thị khi tài khoản thỏa nhóm quyền tương ứng [HO][HT] Chức năng phân quyền - Nhóm quyền. Người dùng không đủ quyền không thấy nút và không gọi được API tương ứng (kiểm tra 2 lớp: ẩn UI + chặn ở backend).

**Ma trận phân quyền (Role × Action)**

| **Hành động** | **Backoffice/Admin** | **Gán TKTT # Sale** | **Sale (WEB)** | **ERP (System)** |
| --- | --- | --- | --- | --- |
| Xem danh sách / chi tiết | ✔ | ✔ | ✔ | — |
| Tạo mới | ✔ | ✔ | ✔ | ✔ (Sync) |
| Chỉnh sửa | ✔ | ✔ | ✔ | ✔ (Sync) |
| Ngưng / Kích hoạt | ✔ | ✔ | ✘ | ✔ (Sync) |
| Duyệt điều chỉnh | ✔ | ✔ | ✘ | — |
| Import Excel | ✔ | ✔ | ✘ | — |
| Export Excel | ✔ | ✔ | ✔ | — |
| Xem lịch sử (Audit) | ✔ | ✔ | ✘ | — |

**QUY TẮC PHÂN QUYỀN DỮ LIỆU: Thỏa Danh sách màn hình DMS Vigo > [Định nghĩa dữ liệu Nhân viên kinh doanh được nhìn thấy](https://kb.finviet.com.vn/pages/viewpage.action?pageId=99236849#Danhs%C3%A1chm%C3%A0nh%C3%ACnhDMSVigo-%C4%90%E1%BB%8Bnhngh%C4%A9ad%E1%BB%AFli%E1%BB%87uNh%C3%A2nvi%C3%AAnkinhdoanh%C4%91%C6%B0%E1%BB%A3cnh%C3%ACnth%E1%BA%A5y)**

* **(1) Sale chỉ xem KH có Người tạo = chính mình HOẶC KH thuộc Tuyến chăm sóc do Sale đó quản lý.**
* **(2) Quản lý cấp trên xem theo cây SFA: thấy toàn bộ KH của các Sale và nhân viên cấp dưới trực thuộc mình trong cây SFA.**
* **(3) Các nhân viên khác theo quy tắc phân quyền của hệ thống [HO & NPP] Phân quyền dữ liệu**