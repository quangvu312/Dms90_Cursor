|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature | Khai báo nhiệm vụ viếng thăm |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1. Mục đích**

Xem danh sách nhiệm vụ đã được IT khai báo

## **2. Chức năng**

Sử dụng lại chức năng của DMS V.1.

Tìm kiếm và Xem danh sách nhiệm vụ đã được khai báo.

## **3. Mô tả**

Link khai báo MCP/MCL/Nhiệm vụ.

Tìm kiếm và Xem danh sách nhiệm vụ đã được khai báo.

Không cho phép chỉnh sửa.

## 

|  | **Tên Trường** | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| Tìm kiếm theo | | | |
| 1 | Nhiệm vụ | Textbox | * Mặc định không có dữ liệu. * Cho phép tìm kiếm 1 hoặc nhiều điều kiện; cách nhau bằng khoảng trắng. |
| 2 | Trạng thái | Dropdownlist | * Mặc định không có dữ liệu. * Chỉ cho chọn 1 điều kiện.   Hoạt động: với nhiệm vụ còn hoạt động  Không hoạt động: với nhiệm vụ không còn hoạt động |
| 3 | Làm mới | Button | * Nhấn làm mới: tất cả các thông tin các trường tìm kiếm quay về dữ liệu mặc định. |
| 4 | Tìm kiếm | Button | * Nhấn tìm kiếm: thực hiện tìm kiếm theo điều kiện đã filter. * Hiển thị tất cả dữ liệu thỏa điều kiện tìm kiếm ở giao diện danh sách nhân viên. |
| Danh sách nhiệm vụ | | | |
| 1 | Ảnh | Image | * Mặc định không có dữ liệu. * Chỉ upload hình ảnh SVG |
| 2 | **Mã nhiệm vụ** | Text | * Hiển thị mã nhiệm vụ đã tạo |
| 3 | **Tên nhiệm vụ** | Text | * Hiển thị tên nhiệm vụ đã tạo |
| 4 | **Ngày tạo** | Text | * Hiển thị ngày tạo nhiệm vụ * dd/mm/yyyy hh:mm:ss |
| 5 | **Người tạo** | Text | * Hiển thị user người tạo nhiệm vụ |
| 6 | Ngày cập nhật | Text | * Mặc định lấy dữ liệu ngày tạo * Format dd/mm/yyyy hh:mm:ss; 30/10/2024 15:00:01 * Hiển thị dữ liệu ngày cập nhật dữ liệu gần nhất. |
| 7 | Người cập nhật | Text | * Mặc định lấy dữ liệu người tạo * Hiển thị dữ liệu người cập nhật dữ liệu gần nhất. |
| 8 | Trạng thái | Text | * Hiển thị trạng thái * Không cho chỉnh sửa. |
| 9 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |