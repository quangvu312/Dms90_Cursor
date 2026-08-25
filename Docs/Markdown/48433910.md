### 1. Tìm kiếm

* Searchbox:
  + Tìm kiếm like thông tin được nhập (tối đa là 500 ký tự dạng string)
  + Mặc định trống
  + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.
* Dropdown
  + Khi nhấn vào sẽ load hết danh sách NPP đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Nhà phân phối, danh sách hiển thị với các thông tin gồm Mã NPP - Tên NPP.

* + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên NPP.
  + Cho phép chọn nhiều NPP, khi chọn NPP thì hệ thống sẽ thực hiện tìm kiếm mà không cần phải nhấn nút tìm kiếm.
  + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.
  + Mặc định trống.

### 2. Dropdown

| Dropdown | Textfield, Textarea |
| --- | --- |
| Khi nhấn vào sẽ load hết danh sách NPP đang còn ở trạng thái hoccạt động, dữ liệu được lấy từ màn hình Nhà phân phối, danh sách hiển thị với các thông tin gồm Mã NPP - Tên NPP |  |
| Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên trường dữ liệu |  |
|  |  |
| * Mặc định trống. * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. | |

* Khi nhấn vào sẽ load hết danh sách NPP đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Nhà phân phối, danh sách hiển thị với các thông tin gồm Mã NPP - Tên NPP.
* Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên NPP.
* Cho phép chọn nhiều NPP, khi chọn NPP thì hệ thống sẽ thực hiện tìm kiếm mà không cần phải nhấn nút tìm kiếm.
* Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.
* Mặc định trống

### 3. Upload hình ảnh/video

Định dạng hình ảnh

* JPEG / JPG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"
* PNG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"
* SVG: kích thước <= 1MB. → Nếu dung lượng ảnh > 1MB, báo lỗi "Dung lượng ảnh SVG vượt quá giới hạn cho phép (1MB)"

### 4. Phân trang

Phân trang tại các danh sách cần có các thông tin sau:

* Số lượng hiển thị trong tổng số lượng data: Ví dụ: 1-50 trên 123 sản phẩm.
* Các page : Hiển thị các số page, user có thể click để chuyển đến page danh sách tương ứng. Số page được chia như sau: Tổng số lượng Item / Số lượng data hiển thị trong 1 page và làm tròn lên. ví dụ 160 data / 50 data trên 1 page = 3.2 => làm tròn 4 pages.
* Chuyển page kế tiếp hoặc trước đó : User có thể click => Chuyển đến page kế  
  tiếp hoặc page trước đó.
* Số lượng data hiển thị trên 1 trang: Click hiển thị danh sách số lượng data hiển thị  
  trên 1 page. Sau khi lựa chọn hệ thống sẽ reload page. Bao gồm các lựa chọn: 10; 50; 100

### 5. Thời gian

Đối với những trường hợp hiển thị thời gian đầy đủ của 1 tính năng cần hiển thị như sau: DD-MM-YYYY hh:mm:ss, ví dụ: 19-07-2024 14:42:57