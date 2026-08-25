|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-404] [HO] Báo cáo chấm công - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-404) |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Báo cáo chấm công

* Chức năng này giúp quản lý và theo dõi hiệu quả làm việc của nhân viên theo từng ngày, từng tháng.
* Cung cấp dữ liệu chính xác về chấm công để hỗ trợ tính toán lương, đánh giá năng suất lao động và phát hiện các bất thường (như vào trễ, ra sớm, chấm công sai vị trí).

## Tìm kiếm

| Tên Trường | Loại dữ liệu / Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm theo | Textbox | Có | Không | Cho phép tìm kiếm theo các tiêu chí: mã nhân viên, tên nhân viên, số điện thoại, email, mã tham chiếu. |
| Chức vụ | Dropdown select onechoice | Có | Không | Lọc danh sách nhân viên theo chức vụ: Giám đốc toàn quốc, Quản lý vùng, Quản lý khu vực, Giám sát bán hàng, Nhân viên bán hàng. |
| Thời gian | Dropdown/Date Picker | Có | Có | Chọn khoảng thời gian báo cáo, gồm năm và tháng. Bắt buộc phải chọn ít nhất một thời gian (năm hoặc tháng).  Mặc định hiển thị tháng/năm hiện tại |

## Chi tiết báo cáo

| Tên Trường | Loại dữ liệu / Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tùy chọn | Button | Có | Không | Nhấn vào button để mở rộng/thu gọn chi tiết chấm công của nhân viên theo từng ngày |
| Vùng | Datacolum | Không | Không | Hiển thị tên vùng của nhân viên, được cài đặt ở [[Portal HO][DMS] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) |
| Khu vực | Datacolum | Không | Không | Hiển thị tên khu vực của nhân viên, được cài đặt ở [[Portal HO][DMS] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) |
| Quản lý trực tiếp | Datacolum | Không | Không | Hiển thị người quản lý trực tiếp nhân viên , được cài đặt ở [[Portal HO][DMS] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357)  Hiển thị Mã quản lý trực tiếp - Tên quản lý trực tiếp |
| Mã nhân viên | Datacolum | Không | Không | Mã định danh duy nhất của nhân viên.  Sort theo nhân viên có ngày chấm công mới nhất |
| Mã tham chiếu | Datacolum | Không | Không | Mã tham chiếu của nhân viên (nếu có). |
| Tên nhân viên | Datacolum | Không | Không | Hiển thị đầy đủ họ tên của nhân viên. |
| Số điện thoại NV | Datacolum | Không | Không | Hiển thị số điện thoại của nhân viên. |
| Chức vụ | Datacolum | Không | Không | Chức vụ của nhân viên |
| Trạng thái nhân viên | Datacolum | Không | Không | Hiển thị trạng thái hoạt động của nhân viên   * Hoạt động * Không hoạt động |
| Tổng ngày công | Number | Không | Không | Tổng số ngày làm việc của nhân viên trong tháng.  Đếm + 1 khi nhân viên có thực hiện chấm công đầu ngày trong ngày (chỉ cần có chấm công là đếm, không quan tâm ngày đó có nghỉ phép được duyệt hay không, không quan tâm có chấm công cuối ngày hay không)  Trường hợp = 0 thì hiển thị "0" |
| Tổng giờ công | Time (HH:MM:SS) | Không | Không | Tổng số giờ làm việc trong tháng của nhân viên  = Tổng giờ công của tất cả các ngày dưới chi tiết, quy đổi ra thành HH:MM:SS  Trường hợp = 0 thì hiển thị "00:00:00" |
| Tổng số ngày phép được duyệt | Number | Không | Không | Tổng số ngày phép trong tháng của nhân viên được duyệt Chấp nhận.  Trường hợp = 0 thì hiển thị "0" |
| Số lần chấm công đầu ngày sai vị trí | Number | Không | Không | Hiển thị số lần trong tháng mà khoảng cách từ vị trí chấm công đầu ngày đến vị trí chấm công quy định > khoảng cách cho phép trong cấu hình vị trí chấm công đầu ngày  Cấu hình tại chức năng Thiết lập vị trí chấm công trên App  Trường hợp = 0 thì hiển thị "0" |
| Số lần chấm công cuối ngày sai vị trí | Number | Không | Không | Hiển thị số lần trong tháng mà khoảng cách từ vị trí chấm công cuối ngày đến vị trí chấm công quy định > khoảng cách cho phép trong cấu hình vị trí chấm công cuối ngày  Cấu hình tại chức năng Thiết lập vị trí chấm công trên App  Trường hợp = 0 thì hiển thị "0" |
| Số lần vào trễ | Number | Không | Không | Hiển thị số lần vào trễ so với cấu hình thời gian chấm công trong tháng được chọn  Trường hợp = 0 thì hiển thị "0" |
| Tổng số giờ vào trễ | Time (HH:MM:SS) | Không | Không | = Tổng số giờ vào trễ của tất cả các ngày dưới chi tiết, quy đổi ra thành HH:MM:SS  Trường hợp = 0 thì hiển thị "00:00:00" |
| Số lần ra sớm | Number | Không | Không | Hiển thị số lần ra sớm so với cấu hình thời gian chấm công trong tháng được chọn  Trường hợp = 0 thì hiển thị "0" |
| Tổng số giờ ra sớm | Time (HH:MM:SS) | Không | Không | = Tổng số giờ ra sớm của tất cả các ngày dưới chi tiết, quy đổi ra thành HH:MM:SS  Trường hợp = 0 thì hiển thị "00:00:00" |

### Chi tiết ngày công

Nhấn mở rộng từng dòng trên chi tiết báo cáo sẽ có chi tiết ngày công như sau:

| Tên Trường | Loại dữ liệu / Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Thứ | Datacolum | Không | Không | Hiển thị thứ tương ứng với ngày trong tháng |
| Ngày | Number | Không | Không | Hiển thị đầy đủ số ngày trong tháng được chọn từ vùng tìm kiếm.  Sort theo ngày có chấm công mới nhất |
| Chấm công đầu ngày | Time (HH:MM:SS) | Không | Không | Thời gian nhân viên chấm công đầu ngày, ghi nhận tại chức năng Chấm công đầu ngày trên App |
| Chấm công cuối ngày | Number | Không | Không | Thời gian nhân viên chấm công cuối ngày, ghi nhận tại chức năng Chấm công cuối ngày trên App |
| Tổng giờ công | Time (HH:MM:SS) | Không | Không | = Chấm công cuối ngày - Chấm công đầu ngày  Quy đổi ra HH:MM:SS  Dữ liệu trường này sẽ không ảnh hưởng từ cột Xin nghỉ phép.  Trường hợp = 0 thì hiển thị "00:00:00" |
| Vào trễ | Time (HH:MM:SS) | Không | Không | Vào trễ = Chấm công đầu ngày - Giờ bắt đầu làm việc được quy định trong Cấu hình chấm công.  Nếu Vào trễ > 0 → Quy số giờ vào trễ ra HH:MM:SS  Nếu Vào trễ <=0 → hiển thị "00:00:00"  Trường hợp <=0 hoặc chưa có cấu hình chấm công thì hiển thị "00:00:00" |
| Ra sớm | Time (HH:MM:SS) | Không | Không | Ra sớm = Giờ kết thúc làm việc được quy định trong Cấu hình chấm công - Chấm công cuối ngày.  Nếu Ra sớm > 0 → Quy số giờ ra sớm ra HH:MM:SS  Nếu Ra sớm <=0 → hiển thị "00:00:00"  Trường hợp <=0 hoặc chưa có cấu hình chấm công thì hiển thị "00:00:00" |
| Xin nghỉ phép được duyệt | Checkbox disabled | Không | Không | Hiển thị checked nếu trong ngày có xin nghỉ phép của nhân viên được duyệt chấp nhận  Nếu không có  xin nghỉ phép của nhân viên được duyệt chấp nhận thì không hiển thị thông tin  Khi xuất excel sẽ thay checkbox bằng từ "Có" |
| Hình chấm công đầu ngày | Image | Có | Không | Hiển thị hình ảnh chấm công đầu ngày của nhân viên  Có thể click vào để phóng to xem ảnh |
| Hình chấm công cuối ngày | Image | Có | Không | Hiển thị hình ảnh chấm công cuối ngày của nhân viên  Có thể click vào để phóng to xem ảnh |
| Chấm công đầu ngày sai vị trí | Checkbox disabled | Không | Không | Hiển thị checked nếu:   * Khoảng cách từ vị trí chấm công đầu ngày đến vị trí chấm công quy định  > khoảng cách cho phép trong cấu hình vị trí chấm công đầu ngày * Cấu hình tại chức năng Thiết lập vị trí chấm công trên App   Ẩn checkbox nếu:   * Khoảng cách từ vị trí chấm công đầu ngày đến vị trí chấm công quy định  <= khoảng cách cho phép trong cấu hình vị trí chấm công đầu ngày * Cấu hình tại chức năng Thiết lập vị trí chấm công trên App     **Lưu ý**:   * Nếu không có thiết lập vị trí chấm công thì checkbox này sẽ ẩn. * Khi xuất excel sẽ thay checkbox bằng từ "Có" |
| Chấm công cuối ngày sai vị trí | Checkbox disabled | Không | Không | Hiển thị checked nếu:   * Khoảng cách từ vị trí chấm công đầu ngày đến vị trí chấm công quy định  > khoảng cách cho phép trong cấu hình vị trí chấm công đầu ngày * Cấu hình tại chức năng Thiết lập vị trí chấm công trên App   Ẩn checkbox nếu:   * Khoảng cách từ vị trí chấm công đầu ngày đến vị trí chấm công quy định  <= khoảng cách cho phép trong cấu hình vị trí chấm công đầu ngày * Cấu hình tại chức năng Thiết lập vị trí chấm công trên App     **Lưu ý**:   * Nếu không có thiết lập vị trí chấm công thì checkbox này sẽ ẩn. * Khi xuất excel sẽ thay checkbox bằng từ "Có" |

# Export Excel Báo cáo chấm công

# **Chức năng:**

* Nút "Export Excel" cho phép người dùng xuất dữ liệu chấm công ra một tập tin Excel.
* Nút này giúp người dùng lưu trữ và phân tích dữ liệu chấm công ngoài ứng dụng, hoặc chia sẻ với các bên liên quan.
* Phân quyền: có yêu cầu phân quyền mới thấy được button này.

**Cách sử dụng:**

1. **Thiết lập dữ liệu:** Người dùng có thể chọn các bộ lọc và tìm kiếm để hiển thị các nhân viên mà họ muốn xuất chấm công ra Excel.
2. **Nhấp vào nút:** Khi người dùng nhấp vào nút "Export Excel", hệ thống sẽ tạo và tải về một tập tin Excel chứa dữ liệu của chấm công trên danh sách hiện tại.

**Lưu ý:**

* Dữ liệu xuất ra sẽ bao gồm các thông tin chấm công trên danh sách hiện tại, theo định dạng và cấu trúc mà ứng dụng đã thiết lập.
* Nút "Export Excel" sẽ xuất dữ liệu dựa trên các bộ lọc và tiêu chí tìm kiếm đã áp dụng, nếu có.
* Template excel như sau:
* Format tên file xuất ra: BaoCaoChamCong\_DDMMYYYYHHMMSS
* Dữ liệu như đã mô tả bên trên

**Template Excel:**