|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-315 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-316Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-317Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-318 |
| Epic |  |
| Feature | Cấu hình chấm công |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1.Mục đích**

Xây dựng màn hình khai báo cấu hình chấm công cho SM App trên portal

## **2. Chức năng**

Danh sách cấu hình.

Thêm mới cấu hình.

Xem cấu hình.

Chỉnh sửa cấu hình.

## **3. Mô tả**

### 3.1 Danh sách cấu hình

Người dùng xem tất cả cấu hình đã tạo với tất cả trạng thái

| STT | **Tên Trường** | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| **Tìm kiếm theo** | | | |
| 1 | Năm |  | * Thao tác: Người dùng chọn năm để filter điều kiện tìm kiếm  Mô tả:    + Mặc định không có dữ liệu   + Hiển thị list năm cho chọn.   + Chỉ chọn 1 điều kiện   + Cho phép xóa chọn lại điều kiện đã chọn |
| 2 | Trạng thái | Dropdownlist | Thao tác: Người dùng chọn trạng thái để filter điều kiện tìm kiếm  Mô tả:   * Mặc định không có dữ liệu * Chỉ chọn 1 điều kiện * Trạng thái gồm : Hoạt động và Không hoạt động |
| 3 | Làm mới | Button | Thao tác: Người dùng chọn làm mới để thay đổi điều kiện tìm kiếm  Mô tả:   * Nhấn làm mới: tất cả các thông tin các trường tìm kiếm quay về dữ liệu mặc định. |
| 4 | Tìm kiếm | Button | Thao tác: Người dùng nhấn nút để thực hiện tìm kiếm như điều kiện đã filter  Mô tả:   * Danh sách cấu hình hiển thị tất cả dữ liệu thỏa điều kiện tìm kiếm. |
| **Danh sách cấu hình** | | | |
| 5 | Số giờ làm việc | Text | * Hiển thị Số giờ làm việc của cấu hình đã khai báo * Chỉ xem |
| 6 | Thời gian làm việc | Text | * Hiển thị Thời gian làm việc của cấu hình đã khai báo * Chỉ xem |
| 7 | Ngày làm | Text | * Hiển thị Ngày làm của cấu hình đã khai báo * Chỉ xem |
| 8 | Năm | Hyperlink | Thao tác: Người dùng nhấn vào hyperlink mở ra màn hình xem chi tiết 1 cấu hình  Mô tả:   * + Hiển thị Năm cấu hình đã khai báo   + *Mở hyperlink chi tiết (xem mô tả Xem chi tiết cấu hình 3.4)* |
| 9 | Ngày tạo | Text | * Hiển thị Ngày tạo của cấu hình đã khai báo * Chỉ xem |
| 10 | Người tạo | Text | * Hiển thị Mã nhân viên người tạo của cấu hình đã khai báo * Chỉ xem |
| 11 | Ngày cập nhật | Text | * Hiển thị Ngày cập nhật của cấu hình * Chỉ xem |
| 12 | Người cập nhật | Text | * Hiển thị Mã nhân viên người cập nhật của cấu hình * Chỉ xem |
| 13 | Trạng thái | Button | * Trạng thái:   bên phải ON = Hoạt động  bên trái OFF = Không hoạt động   * Mặc định là trạng thái ON   *Sửa OFF/ON sẽ có hiện thông báo:*     * Nhấn Đồng ý thì xét thực hiện OFF/ON cấu hình  * Nhấn Hủy tắt thông báo. |
| 14 | Tùy chỉnh | Button | * Nhấn Sửa mở ra màn hình chỉnh sửa cấu hình * Xem mô tả chức năng chỉnh sửa cấu hình * Có phân quyền tính năng này. |
| 15 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |

### 3.2 Thêm mới cấu hình

Sử dụng lại tính năng của DMS v1.

Link khai báo Quản trị hệ thống/Cấu hình chấm công

Người dùng khai báo đầy đủ 2 tab Thông tin cơ bản và Cấu hình.

**Tab Thông tin cơ bản**

| STT | **Tên Trường** | **Loại dữ liệu/Loại field** | **Có bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| 1 | Năm | Year | Có | Thao tác: Người dùng chọn năm để setup cấu hình chấm công; 1 năm chỉ khai báo 1 dòng.  Mô tả:   * Mặc định hiển thị năm hiện tại. * *Hiển thị list năm; chỉ chọn 1 điều kiện và chọn năm hiện tại trở đi.* * Cho phép xóa chọn lại điều kiện đã chọn * Có thông báo là trường bắt buộc khi bỏ trống * Có thông báo khi tạo trùng dữ liệu: "Năm đã tồn tại khai báo. Vui lòng kiểm tra lại" |
| 2 | Ngày trong tuần | Dropdown | Có | Thao tác: Người dùng chọn Ngày trong tuần để setup cấu hình chấm công.  Mô tả:   * Mặc định trống * Cho phép 1 hoặc nhiều điều kiện. * Hiển thị list điều kiện: Thứ 2; Thứ 3; Thứ 4; Thứ 5; Thứ 6; Thứ 7; Chủ Nhật * Cho phép xóa chọn lại điều kiện đã chọn * Khi chọn điều kiện Thứ 2 rồi thì ẩn nó ở list chọn chỉ còn Thứ 3; Thứ 4; Thứ 5; Thứ 6; Thứ 7; Chủ Nhật * Khi xóa điều kiện Thứ 2 rồi thì hiện lại nó ở list chọn Thứ 2; Thứ 3; Thứ 4; Thứ 5; Thứ 6; Thứ 7; Chủ Nhật * Có thông báo là trường bắt buộc khi bỏ trống |
| 3 | Thời gian làm việc | hh:mm | Có | Thao tác: Người dùng chọn Thời gian làm việc để setup cấu hình chấm công.  Mô tả:   * Mặc định trống * Chọn 1 giờ bắt đầu; chọn 1 giờ kết thúc. * Nhấn OK để lưu giờ. * Cho phép chọn lại giờ bắt đầu; giờ kết thúc. * *Giờ bắt đầu phải nhỏ hơn hoặc bằng giờ kết thúc.* * Có thông báo là trường bắt buộc khi bỏ trống |
| 4 | Số giờ làm việc | Number |  | * Lấy thời gian làm việc * Số giờ làm việc = Giờ kết thúc - Giờ bắt đầu - Giờ nghỉ trưa * Lấy 2 số thập phân sau dấu phẩy * Chỉ xem |
| 5 | Thời gian nghỉ trưa | hh:mm | Có | Thao tác: Người dùng chọn Thời gian nghỉ trưa để setup cấu hình chấm công.  Mô tả:   * Mặc định disable * Chỉ enbale khi đã chọn Thời gian làm việc. * Chọn 1 giờ bắt đầu; chọn 1 giờ kết thúc và sẽ giới hạn giờ theo Thời gian làm việc đã chọn. * Nhấn OK để lưu giờ. * Thời gian nghỉ trưa phải nằm trong khoảng Thời gian làm việc * Cho phép chọn lại giờ bắt đầu; giờ kết thúc. * Giờ bắt đầu phải nhỏ hơn hoặc bằng giờ kết thúc. * Có thông báo là trường bắt buộc khi bỏ trống |
| 6 | Số giờ nghỉ trưa | Number |  | * Lấy thời gian nghỉ trưa * Số nghỉ trưa = Giờ kết thúc nghỉ trưa - Giờ bắt đầu nghỉ trưa * Lấy 2 số thập phân sau dấu phẩy * Chỉ xem |
| 7 | Chọn thời điểm | Date |  | Thao tác: Người dùng chọn ngày đặc biệt (lễ; tết) để setup không tính chấm công.  Mô tả:   * Xuất hiện khi người dùng nhấn **Thêm ngày đặc biệt** * Mặc định trống * Chọn ngày theo lịch có sẵn. * Chỉ chọn 1 điều kiện * Cho phép chọn lại ngày |
| 8 | Tên ngày | Text |  | Thao tác: Người dùng chọn ngày đặc biệt (lễ; tết) để setup không tính chấm công.  Mô tả:   * Xuất hiện khi người dùng nhấn **Thêm ngày đặc biệt** * Mặc định trống * *Giới hạn 200 ký tự và cho phép nhận tất cả ký tự* * Là trường bắt buộc khi đã trường **Chọn thời điểm** * Có thông báo là trường bắt buộc khi bỏ trống |
| 9 | Xóa | Button |  | Thao tác: Người dùng chọn xóa dữ liệu đã khai báo  Mô tả:   * Chỉ hiển thị khi đã thêm ngày đặc biệt * Xóa dữ liệu trường Chọn thời điểm và Tên ngày. |
| 10 | Thêm ngày đặc biệt | Button |  | Thao tác: Người dùng thêm mới 1 khai báo ngày đặc biệt  Mô tả:   * Nhấn nút tạo 1 dòng mặc định dữ liệu với trường Chọn thời điểm và Tên ngày * Được phép thêm nhiều dòng nhưng ràng buộc phải có khai báo dữ liệu * Có thông báo khi bỏ trống * **Ngày chọn phải nằm trong Năm đã khai báo.** * Có thông báo khi tạo trùng dữ liệu: "Ngày đặc biệt đã tồn tại khai báo. Vui lòng kiểm tra lại" |
| 11 | Lưu | Button |  | Thao tác: Người dùng lưu cấu hình đã khai báo  Mô tả:   * Phải thỏa tất cả trường ràng buộc. * Nhấn lưu để hoàn tất khai báo và lưu dữ liệu. * Và tắt màn hình khai báo. |
| 12 | Đóng | Button |  | * Nếu màn hình đang có dữ liệu chưa lưu, hiển thị cảnh báo: "Màn hình đang có dữ liệu, bạn có muốn đóng?"   + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |

**Tab cấu hình**

| STT | **Tên Trường** | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| 1 | Tháng | Text | Thao tác: Người dùng xem lại thông tin hệ thống đã tính như Tháng; ngày; ngày đặc biệt đã khai báo ở tab Thông tin cơ bản  Mô tả:   * Mặc định không có dữ liệu * Chỉ hiển thị thông tin khi đã khai báo **Thời gian làm việc** * Hiển thị 12 tháng * Chỉ xem |
| 2 | Ngày trong tháng | Text | Thao tác: Người dùng xem lại thông tin hệ thống đã tính như Tháng; ngày; ngày đặc biệt đã khai báo ở tab Thông tin cơ bản  Mô tả:   * Mặc định không có dữ liệu * Chỉ hiển thị thông tin khi đã khai báo **Thời gian làm việc** * Là tổng số ngày làm việc trong tháng lấy theo số thứ mà Ngày trong tuần đã khai báo * Chỉ xem |
| 3 | Ngày đặc biệt | Text | Thao tác: Người dùng xem lại thông tin hệ thống đã tính như Tháng; ngày; ngày đặc biệt đã khai báo ở tab Thông tin cơ bản  Mô tả:   * Mặc định không có dữ liệu * Chỉ hiển thị thông tin khi đã khai báo **Thêm ngày đặc biệt** * Hiển thị gồm Chọn thời điểm - Tên ngày * Chỉ xem |
| 4 | Lưu | Button | Thao tác: Người dùng lưu cấu hình đã khai báo  Mô tả:   * Phải thỏa tất cả trường ràng buộc. * Nhấn lưu để hoàn tất khai báo và lưu dữ liệu. * Và tắt màn hình khai báo. |
| 5 | Đóng | Button | * Tắt màn hình khai báo và không lưu dữ liệu. |

### 3.3  Chỉnh sửa cấu hình

Người dùng chọn Cấu hình đã khai báo để chỉnh sửa thông tin .

**Tab Thông tin cơ bản** được phép chỉnh sửa

**Tab Cấu hình** không chỉnh sửa. Phải kiểm tra lại thông tin cấu hình khi đã chỉnh sửa thông tin cơ bản; rule ràng buộc giống với luồng Thêm mới cấu hình.

| STT | **Tên Trường** | **Loại dữ liệu/Loại field** | **Có chỉnh sửa?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| 1 | Năm | Year |  | * Chỉ xem không được phép chỉnh sửa. |
| 2 | Ngày trong tuần | Dropdown | Có | Thao tác: Người dùng chọn Ngày trong tuần để setup cấu hình chấm công.  Mô tả:   * Khi sửa sẽ tính lại thông tin Tab cấu hình * Cho phép 1 hoặc nhiều điều kiện. * Hiển thị list điều kiện: Thứ 2; Thứ 3; Thứ 4; Thứ 5; Thứ 6; Thứ 7; Chủ Nhật * Cho phép xóa chọn lại điều kiện đã chọn * Khi chọn điều kiện Thứ 2 rồi thì ẩn nó ở list chọn chỉ còn Thứ 3; Thứ 4; Thứ 5; Thứ 6; Thứ 7; Chủ Nhật * Khi xóa điều kiện Thứ 2 rồi thì hiện lại nó ở list chọn Thứ 2; Thứ 3; Thứ 4; Thứ 5; Thứ 6; Thứ 7; Chủ Nhật * Có thông báo là trường bắt buộc khi bỏ trống |
| 3 | Thời gian làm việc | hh:mm | Có | Thao tác: Người dùng chọn Thời gian làm việc để setup cấu hình chấm công.  Mô tả:   * + Khi sửa sẽ tính lại thông tin Tab cấu hình   + Chọn 1 giờ bắt đầu; chọn 1 giờ kết thúc.   + Nhấn OK để lưu giờ.   + Cho phép chọn lại giờ bắt đầu; giờ kết thúc.   + Giờ bắt đầu phải nhỏ hơn hoặc bằng giờ kết thúc.   + Có thông báo là trường bắt buộc khi bỏ trống |
| 4 | Số giờ làm việc | Number |  | * Trường thông tin chỉ xem. * Lấy thời gian làm việc * Số giờ làm việc = Giờ kết thúc - giờ bắt đầu - Số giờ nghỉ trưa * Lấy 2 số thập phân sau dấu phẩy |
| 5 | Thời gian nghỉ trưa | hh:mm | Có | Thao tác: Người dùng chọn Thời gian nghỉ trưa để setup cấu hình chấm công.  Mô tả:   * + Giờ nghỉ trưa sẽ giới hạn giờ theo Thời gian làm việc đã chọn.   + Nhấn OK để lưu giờ.   + Thời gian nghỉ trưa phải nằm trong khoảng Thời gian làm việc   + Cho phép chọn lại giờ bắt đầu; giờ kết thúc nghỉ trưa   + Giờ bắt đầu phải nhỏ hơn hoặc bằng giờ kết thúc.   + Có thông báo là trường bắt buộc khi bỏ trống |
| 6 | Số giờ nghỉ trưa | Number |  | * Trường thông tin chỉ xem. * Lấy thời gian nghỉ trưa * Số giờ nghỉ trưa = Giờ kết thúc nghỉ trưa - giờ bắt đầu nghỉ trưa * Lấy 2 số thập phân sau dấu phẩy |
| 7 | Chọn thời điểm | Date | Có | Thao tác: Người dùng chọn ngày đặc biệt (lễ; tết) để setup không tính chấm công.  Mô tả:   * Khi sửa sẽ tính lại thông tin Tab cấu hình * Chọn ngày theo lịch có sẵn. * Chỉ chọn 1 điều kiện * Cho phép chọn lại ngày * **Ngày chọn phải nằm trong Năm đã khai báo.** |
| 8 | Tên ngày | Text | Có | Thao tác: Người dùng chọn ngày đặc biệt (lễ; tết) để setup không tính chấm công.  Mô tả:   * + Khi sửa sẽ tính lại thông tin Tab cấu hình   + Giới hạn 200 ký tự và cho phép nhận tất cả ký tự   + Là trường bắt buộc khi đã trường **Chọn thời điểm**   + Có thông báo là trường bắt buộc khi bỏ trống |
| 9 | Xóa | Button | Có | Thao tác: Người dùng chọn xóa dữ liệu đã khai báo  Mô tả:   * Xóa dữ liệu trường Chọn thời điểm và Tên ngày.  * Nhấn Xóa. Có hiện thông báo xác nhận      * Chọn Đồng ý: thực hiện xóa cấu hình đã tạo * Chọn Hủy: tắt thông báo; vẫn ở lại màn hình xem chi tiết cấu hình |
| 10 | Thêm ngày đặc biệt | Button | Có | Thao tác: Người dùng thêm mới 1 khai báo ngày đặc biệt  Mô tả:   * + Nhấn nút tạo 1 dòng mặc định dữ liệu với trường Chọn thời điểm và Tên ngày   + Được phép thêm nhiều dòng nhưng ràng buộc phải có khai báo dữ liệu   + Có thông báo khi bỏ trống   + **Ngày chọn phải nằm trong Năm đã khai báo.** |
| 11 | Lưu | Button |  | * Thao tác: Người dùng lưu cấu hình chỉnh sửa  Mô tả:    + Phải thỏa tất cả trường ràng buộc.   + Nhấn lưu để hoàn tất khai báo và lưu dữ liệu.   + Và tắt màn hình khai báo. |
| 12 | Đóng | Button |  | * Tắt màn hình khai báo và không lưu dữ liệu. |

### 3.4 Xem chi tiết cấu hình

Sử dụng lại tính năng của DMS v1.

Người dùng nhấn vào hyperlink Năm trên danh sách để xem lại chi tiết 1 cấu hình.

Với thông tin chi tiết cấu hình disable tất cả các trường thông tin; không được chỉnh sửa.

**Tab Thông tin cơ bản**

| STT | **Tên Trường** | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| 1 | Năm | Year | * Hiển thị thông tin năm đã khai báo * Chỉ xem |
| 2 | Ngày trong tuần | Dropdown | * Hiển thị thông tin Ngày trong tuần đã khai báo * Chỉ xem |
| 3 | Thời gian làm việc | hh:mm | * Hiển thị thông tin Thời gian làm việc đã khai báo * Chỉ xem |
| 4 | Số giờ làm việc | Number | * Hiển thị thông tin Số giờ làm việc đã khai báo * Chỉ xem |
| 5 | Thời gian nghỉ trưa | hh:mm | * Hiển thị thông tin Thời gian nghỉ trưa đã khai báo * Chỉ xem |
| 6 | Số giờ nghỉ trưa | Number | * Hiển thị thông tin Số giờ nghỉ trưa đã khai báo * Chỉ xem |
| 7 | Chọn thời điểm | Date | * Hiển thị thông tin thời điểm đã khai báo nếu có * Chỉ xem |
| 8 | Tên ngày | Text | * Hiển thị thông tin tên ngày khi khai báo thời điểm nếu có * Chỉ xem |
| 9 | Đóng | Button | * Tắt màn hình xem chi tiết cấu hình |

**Tab cấu hình**

| STT | **Tên Trường** | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| 1 | Tháng | Text | * Hiển thị thông tin 12 tháng * Chỉ xem |
| 2 | Ngày trong tháng | Text | * Hiển thị thông tin số ngày làm việc của tháng * Chỉ xem |
| 3 | Ngày đặc biệt | Text | * Hiển thị thông tin Ngày đặc biệt đã khai báo nếu có * Chỉ xem |
| 5 | Đóng | Button | * Tắt màn hình xem chi tiết cấu hình |