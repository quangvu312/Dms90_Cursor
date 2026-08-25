|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1. Mục đích**

Tạo màn hình khai báo nhóm nhiệm vụ.

## **2. Chức năng**

Tạo mới nhóm nhiệm vụ.

Xem danh sách nhóm nhiệm vụ.

Chỉnh sửa nhóm nhiệm vụ.

## **3. Mô tả**

### 3.1 Tạo mới nhóm nhiệm vụ

Sử dụng lại chức năng cũ của DMS V.1

Người dùng khai báo Thông tin cơ bản và thêm danh sách nhiệm vụ vào Nhóm.

Tab thông tin cơ bản

hình 1

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | Có bắt buộc? | Có chỉnh sửa? | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Thông tin cơ bản** | | | | | |
| 1 | \*Vùng | Selectbox | Có | Có | * Mặc định hiển thị cây Vùng/Khu vực đã khai báo * Chọn Vùng sổ ra Khu vực * Cho phép chọn 1 hoặc nhiều dữ liệu * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 2 | \*Tên nhóm nhiêm vụ | Textbox | Có | Có | * Mặc định không có dữ liệu. * Người dùng nhập tên nhóm. * Ràng buộc tối đa 500 ký tự. * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 3 | Loại nhóm nhiệm vụ | Dropdownlist |  | Có | * Mặc định Theo tuyến * Lấy dữ liệu config: Theo tuyến; Mở mới; Chăm sóc * Người dùng tìm kiếm và chọn 1 theo dropdownlist. |
| 4 | Đóng | Button |  |  | * Người dùng nhấn Đóng tắt màn hình khai báo và không lưu dữ liệu. |
| 5 | Lưu | Button |  |  | * Người dùng nhấn Lưu. Có hiện thông báo.:      * Nhấn Đồng ý hệ thống xét tất cả ràng buộc; thỏa điều kiện sẽ lưu thông tin * Nhấn Hủy tắt thông báo. |

Tab Danh sách nhiệm vụ

hình 2

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | Có bắt buộc? | Có chính sửa? | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Danh sách nhiệm vụ** | | | | | |
| 1 | \*Chọn nhiệm vụ | Dropdownlist | Có | Có | * Hiển thị mặc định trống. * Hiển thị Tên nhiệm vụ còn hoạt động * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 2 | Bắt buộc | Button |  | Có | * Trạng thái:   bên phải ON = Bắt buộc (có ràng bắt buộc thực hiện nhiệm vụ trên SM App)  bên trái OFF = Không hoạt động (không ràng bắt buộc thực hiện nhiệm vụ trên SM App)   * Mặc định là trạng thái OFF |
| 3 | Thứ tự | Text |  |  | * Mặc định = 1 khi thêm dòng mới. * Thứ tự tăng khi thêm dòng mới. * Khi xóa dòng thứ tự auto điều chỉnh lại thứ tự và bắt đầu = 1. |
| 4 |  | Button |  |  | * Chọn Xóa dòng khai báo tương ứng. |
| 5 | Thêm nhiệm vụ | Button |  |  | * Nhấn Thêm nhiệm vụ tạo thêm 1 dòng dữ liệu mới. * Người dùng khai báo thông tin nhiệm vụ. |
| 6 | Đóng | Button |  |  | * Người dùng nhấn Đóng tắt màn hình khai báo và không lưu dữ liệu. |
| 7 | Lưu |  |  |  | * Người dùng nhấn Lưu. Có hiện thông báo.:      * Nhấn Đồng ý hệ thống xét tất cả ràng buộc; thỏa điều kiện sẽ lưu thông tin * Ngược lại sẽ có thông báo lỗi "Tên trường là bắt buộc" * Nhấn Hủy tắt thông báo. |

### 3.2 Danh sách nhóm nhiệm vụ

Sử dụng lại chức năng cũ của DMS V.1

Link khai báo MCP/MCL/Nhóm nhiệm vụ.

Màn hình cho phép tìm kiếm và hiển thị danh sách nhiệm vụ.

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| **Tìm kiếm** | | | |
| 1 | Nhóm nhiệm vụ | Textbox | * Mặc định không có dữ liệu. * Tìm kiếm theo Mã nhóm - Tên nhóm nhiệm vụ. * Chỉ cho chọn 1 hoặc nhiều điều kiện cách nhau bằng khoảng trắng |
| 2 | Loại nhóm nhiệm vụ | Button | * Mặc định không có dữ liệu. * Chỉ cho chọn 1 điều kiện. |
| 3 | Trạng thái | Dropdownlist | * Mặc định không có dữ liệu. * Chỉ cho chọn 1 điều kiện:   Hoạt động: với nhóm nhiệm vụ có trạng thái hoạt động  Không hoạt động: với nhóm nhiệm vụ có trạng thái không hoạt động. |
| 4 | Làm mới | Button | * Nhấn làm mới: tất cả các thông tin các trường tìm kiếm quay về dữ liệu mặc định. |
| 5 | Tìm kiếm | Button | * Nhấn tìm kiếm: thực hiện tìm kiếm theo điều kiện đã filter. * Hiển thị tất cả dữ liệu thỏa điều kiện tìm kiếm ở giao diện danh sách tuyến |
| **Danh sách nhóm nhiệm vụ** | | | |
| 2 | Tạo mới | Button | * Nhấn nút này mở ra màn hình Tạo nhóm nhiệm vụ. * Xem chức năng 3.1 |
| 4 | Mã nhóm nhiệm vụ | Text | * Hệ thống tự gen mã nhóm nhiệm vụ * Theo format 9 ký tự  gồm BU và 7 ký tự tự tăng (BU0000001) |
| 5 | Tên nhóm nhiệm vụ | Hyperlink | * Nhấn vào mở ra màn hình chi tiết Nhóm nhiệm vụ * Xem mô tả chức năng 3.4 |
| 6 | Vùng | Text | * Hiển thị tất cả Vùng đã tạo; cách nhau bằng khoảng trắng * Chỉ xem |
|  | Khu vực | Text | * Hiển thị tất cả Khu vực đã tạo; ; cách nhau bằng khoảng trắng * Chỉ xem |
| 7 | Loại nhóm nhiệm vụ | Text | * Hiển thị Loại nhóm nhiệm vụ đã tạo |
| 8 | Ngày tạo | Text | * Hiển thị ngày tạo nhóm nhiệm vụ * dd/mm/yyyy hh:mm:ss |
| 9 | Người tạo | Text | * Hiển thị user người tạo nhóm nhiệm vụ |
| 10 | Ngày cập nhật | Text | * Mặc định lấy dữ liệu ngày tạo * Format dd/mm/yyyy hh:mm:ss; 30/10/2024 15:00:01 * Hiển thị dữ liệu ngày cập nhật dữ liệu gần nhất. |
| 11 | Người cập nhật | Text | * Mặc định lấy dữ liệu người tạo * Hiển thị dữ liệu người cập nhật dữ liệu gần nhất. |
| 12 | Trạng thái | Button | * Trạng thái:   bên phải ON = Hoạt động  bên trái OFF = Không hoạt động   * Mặc định là trạng thái ON   Sửa OFF/ON sẽ có hiện thông báo:    Với trường hợp Nhóm nhiệm vụ cưa được gán vào tuyến   * Nhấn Đồng ý thì xét thực hiện OFF/ON  * Nhấn Hủy tắt thông báo.   Trường hợp Nhóm nhiệm vụ đã được gán vào tuyến   * Nhấn Đồng ý; có thông báo và không thể OFF      * Nhấn Hủy tắt thông báo. |
| 13 |  | Button | * Nhấn vào nút này cho phép chỉnh sửa thông tin nhóm nhiệm vụ * Xem mô tả chức năng 3.3 |
| 14 |  | Button | * Nhấn vào nút này mở ra chức năng nhân bản nhóm nhiệm vụ * Xem mô tả chức năng 3.4 |
| 15 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |
| **Danh sách nhiệm vụ** | | | |
| 1 | Mã nhiệm vụ | Text | * Hiển thị Mã nhiệm vụ của nhóm đã tạo |
| 2 | Tên nhiệm vụ | Text | * Hiển thị Tên nhiệm vụ của nhóm đã tạo |
| 3 | Bắt buộc | Text | * Hiển thị Bắt buộc của nhóm đã tạo |
| 4 | Thứ tự | Text | * Hiển thị Thứ tự của nhóm đã tạo |
| 5 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |

3.3 Sửa nhóm nhiệm vụ

Sử dụng lại chức năng cũ của DMS V.1

Cho phép chỉnh sửa thông tin Nhóm nhiệm vụ

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | Có bắt buộc? | Có chỉnh sửa? | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Thông tin cơ bản** | | | | | |
| 1 | Tên nhóm nhiệm vụ | Text |  | Có | * Mặc định không có dữ liệu. * Người dùng nhập tên nhóm. * Ràng buộc tối đa 500 ký tự. * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 2 | Lưu | Button |  |  | * Người dùng nhấn Lưu. Có hiện thông báo.:      * Nhấn Đồng ý hệ thống xét tất cả ràng buộc; thỏa điều kiện sẽ lưu thông tin * Ngược lại sẽ có thông báo lỗi "Tên trường là bắt buộc" * Nhấn Hủy tắt thông báo. |
| 3 | Đóng | Button |  |  | * Người dùng nhấn Đóng tắt màn hình khai báo và không lưu dữ liệu. |
| **Danh sách nhiệm vụ** | | | | | |
|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 1 | \*Chọn nhiệm vụ | Dropdownlist | Có | Có | * Hiển thị mặc định trống. * Hiển thị Tên nhiệm vụ còn hoạt động * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 2 | Bắt buộc | Button |  | Có | * Trạng thái:   bên phải ON = Bắt buộc (có ràng bắt buộc thực hiện nhiệm vụ trên SM App)  bên trái OFF = Không hoạt động (không ràng bắt buộc thực hiện nhiệm vụ trên SM App)   * Mặc định là trạng thái OFF |
| 3 | Thứ tự | Text |  | Có | * Mặc định = 1 khi thêm dòng mới. * Thứ tự tăng khi thêm dòng mới. * Khi xóa dòng thứ tự auto điều chỉnh lại thứ tự và bắt đầu = 1. |
| 4 |  | Button |  | Có | * Chọn xóa dòng khai báo tương ứng. |
| 5 | Thêm nhiệm vụ | Button |  | Có | * Nhấn Thêm nhiệm vụ tạo thêm 1 dòng dữ liệu mới. * Người dùng khai báo thông tin nhiệm vụ. |
| 6 | Lưu |  |  |  | * Người dùng nhấn Lưu. Có hiện thông báo.:      * Nhấn Đồng ý hệ thống xét tất cả ràng buộc; thỏa điều kiện sẽ lưu thông tin * Ngược lại sẽ có thông báo lỗi "Tên trường là bắt buộc" * Nhấn Hủy tắt thông báo. |
| 7 | Đóng |  |  |  | * Người dùng nhấn Đóng tắt màn hình khai báo và không lưu dữ liệu. |

### 3.4 Xem chi tiết nhóm nhiệm vụ

Người dùng xem chi tiết Nhóm nhiệm vụ bằng cách nhấn vào hyperlink Tên nhóm nhiệm vụ

Nhấn Đóng thoát màn hình.

Disable tất cả trường thông tin và không cho phép chỉnh sửa trường thông tin.

### 3.5 Sao chép nhóm nhiệm vụ

Sử dụng lại chức năng cũ của DMS V.1

Cho phép sao chép 1 thông tin Nhóm nhiệm vụ có sẵn

Cho phép chỉnh sửa trường thông tin như mô tả

Xét ràng buộc như rule thêm mới.

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | Có bắt buộc? | Có chỉnh sửa? | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Thông tin cơ bản** | | | | | |
| 1 | \*Vùng | Selectbox | Có | Có | * Mặc định hiển thị cây Vùng/Khu vực giống với dữ liệu đã sao chép * Cho phép chỉnh sửa. * Chọn Vùng sổ ra Khu vực * Cho phép chọn 1 hoặc nhiều dữ liệu * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 2 | \*Tên nhóm nhiêm vụ | Textbox | Có | Có | * Mặc định không có dữ liệu. * Người dùng nhập tên nhóm. * Ràng buộc tối đa 500 ký tự. * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 3 | Loại nhóm nhiệm vụ | Dropdownlist |  | Có | * Mặc định Theo tuyến * Lấy dữ liệu config: Theo tuyến; Mở mới; Chăm sóc * Người dùng tìm kiếm và chọn 1  hoặc nhiều theo dropdownlist. |
| 4 | Đóng | Button |  |  | * Người dùng nhấn Đóng tắt màn hình khai báo và không lưu dữ liệu. |
| 5 | Lưu | Button |  |  | * Người dùng nhấn Lưu. Có hiện thông báo.:      * Nhấn Đồng ý hệ thống xét tất cả ràng buộc; thỏa điều kiện sẽ lưu thông tin * Nhấn Hủy tắt thông báo. |

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | Có bắt buộc? | Có chính sửa? | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Danh sách nhiệm vụ** | | | | | |
| 1 | \*Chọn nhiệm vụ | Dropdownlist | Có | Có | * Hiển thị mặc định Mã công ty - Tên công ty * Mỗi DMS có chỉ có 1 cty duy nhất * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 2 | Bắt buộc | Button |  | Có | * Trạng thái:   bên phải ON = Bắt buộc (có ràng bắt buộc thực hiện nhiệm vụ trên SM App)  bên trái OFF = Không hoạt động (không ràng bắt buộc thực hiện nhiệm vụ trên SM App)   * Mặc định là trạng thái OFF |
| 3 | Thứ tự | Text |  |  | * Mặc định = 1 khi thêm dòng mới. * Thứ tự tăng khi thêm dòng mới. * Khi xóa dòng thứ tự auto điều chỉnh lại thứ tự và bắt đầu = 1. |
| 4 |  | Button |  |  | * Chọn Xóa dòng khai báo tương ứng. |
| 5 | Thêm nhiệm vụ | Button |  |  | * Nhấn Thêm nhiệm vụ tạo thêm 1 dòng dữ liệu mới. * Người dùng khai báo thông tin nhiệm vụ. |
| 6 | Đóng | Button |  |  | * Người dùng nhấn Đóng tắt màn hình khai báo và không lưu dữ liệu. |
| 7 | Lưu |  |  |  | * Người dùng nhấn Lưu. Có hiện thông báo.:      * Nhấn Đồng ý hệ thống xét tất cả ràng buộc; thỏa điều kiện sẽ lưu thông tin * Ngược lại sẽ có thông báo lỗi "Tên trường là bắt buộc" * Nhấn Hủy tắt thông báo. |