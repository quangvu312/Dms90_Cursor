|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature | Yêu cầu bán hàng trái tuyến |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1. Mục đích**

NVBH có thể tạo yêu cầu bán hàng trái tuyến trên mobile.

GSBH có thể duyệt yêu cầu bán hàng trái tuyến trên mobile.

NVBH tạo được đơn hàng bán trái tuyến trên mobile

**2. Chức năng**

Danh sách yêu cầu bán hàng trái tuyến trên mobile.

Tạo yêu cầu bán hàng trái tuyến trên mobile.

Duyệt yêu cầu bán hàng trái tuyến trên mobile.

Tạo được đơn hàng bán trái tuyến trên mobile.

**trueBán hàng trái tuyếnfalseautotoptrue4013**

## **3. Mô tả chi tiết**

3.1 Danh sách yêu cầu bán hàng trái tuyến trên mobile.

Là nơi hiển thị tất cả yêu cầu bán hàng trái tuyến đã tạo của từng nhân viên.

Có thể filter tìm kiếm theo ngày tạo và trạng thái cuối cùng.

Có phân quyền chỉ xem yêu cầu theo người tạo.

Link tab menu: Khác

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** | Dữ liệu |
| --- | --- | --- | --- | --- |
| 1 | Chọn ngày | Date | * Mặc định hiển thị ngày 1 đầu tháng hiện tại và ngày hiện tại. * Người dùng chọn ngày tạo yêu cầu; hệ thống tự động hiển thị yêu cầu có ngày tạo theo ngày đã chọn. |  |
| 2 | Trạng thái | Dropdownlist | * Mặc định không có dữ liệu. * Chỉ cho chọn 1 điều kiện sau:   Đã duyệt: yêu cầu đã được gửi sang app Quản lý và được duyệt đồng ý.  Từ chối: yêu cầu đã được gửi sang app Quản lý và được duyệt đồng ý kèm lý do.  Chờ duyệt: yêu cầu đã được gửi sang app Quản lý nhưng chưa được duyệt.   * Người dùng chọn trạng thái của yêu cầu; hệ thống tự động hiển thị yêu cầu có đúng trạng thái đã chọn |  |
| 3 | Mã yêu cầu | Text | * Chỉ xem yêu cầu * Hệ thống gen mã yêu cầu theo format ROyymmdd0000:   Với RO là (Request Order)  yymmdd là ngày tháng năm hiện tại khi tạo yêu cầu mới  0000 là số tự tăng tính theo ngày.  Ví dụ: RO2410290001 Là yêu cầu số 0001 được tạo vào ngày 29/10/2024 |  |
| 4 | Tuyến | Text | * Chỉ xem yêu cầu * Hiển thị Mã tuyến - tên tuyến theo yêu cầu đã tạo    Ví dụ: ROUTE1234567890 - Nguyễn Văn A |  |
| 5 | Điểm bán | Text | * Chỉ xem yêu cầu * Hiển thị Mã điểm bán- tên điểm bán theo yêu cầu đã tạo    Ví dụ: CH000002 - Tạp hóa Chị Ngọc |  |
| 6 | Ngày tạo | Date | * Chỉ xem yêu cầu * Hiển thị ngày tạo yêu cầu trên app nhân viên    Ví dụ: 29/10/2024 15:45:00 |  |
| 7 | Ngày duyệt | Date | * Chỉ xem yêu cầu * Chi hiển thị ngày duyệt khi yêu cầu đã được duyệt từ app quản lý.    Ví dụ: 29/10/2024 15:45:20 |  |
| 8 | Lý do | Text | * Chỉ xem yêu cầu * Chỉ hiển thị lý do khi Quản lý chọn duyệt từ chối.   Ví dụ: Cửa hàng còn nợ cao |  |
| 9 | Trạng thái | Text | * Chỉ xem yêu cầu * Hiển thị trạng thái khi Quản lý chọn trạng thái duyệt: Đã duyệt; Từ chối; Chờ duyệt |  |
| 10 | Tạo yêu cầu | Button | * Nhấn nút này mở ra màn hình Tạo yêu cầu bán hàng trái tuyến. * Xem chi tiết mô tả 3.3 |  |
| 11 | Trở lại | Button | * Nhấn nút này để thoát ra màn hình tab menu Khác |  |

### 3.2 Xem yêu cầu bán hàng trái tuyến trên mobile.

Xem chi tiết yêu cầu bán hàng trái tuyến đã tạo.

Có phân quyền theo chức năng xem yêu cầu bán trái tuyến.

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** | Dữ liệu |
| --- | --- | --- | --- | --- |
| 1 | Mã yêu cầu | Text | * Xem Mã yêu cầu theo yêu cầu đã tạo |  |
| 2 | Người yêu cầu | Text | * Xem Người yêu cầu theo yêu cầu đã tạo |  |
| 3 | Mã Tuyến | Text | * Xem Mã Tuyến theo yêu cầu đã tạo |  |
| 4 | Điểm bán | Text | * Xem Mã điểm bán- tên điểm bán theo yêu cầu đã tạo |  |
| 5 | Tần suất | Text | * Xem Tần suất theo yêu cầu đã tạo * Lấy thông tin tần suất theo Mã điểm bán đã chọn |  |
| 6 | Ngày tạo | Date | * Xem Ngày tạo theo yêu cầu đã tạo |  |
| 7 | Nội dung | Text | * Xem Nội dung theo yêu cầu đã tạo |  |
| 8 | Người duyệt | Text | * Xem Người duyệt theo yêu cầu đã tạo |  |
| 9 | Ngày duyệt | Date | * Xem Ngày duyệt theo yêu cầu đã tạo |  |
| 10 | Trạng thái | Text | * Xem Trạng thái theo yêu cầu đã tạo |  |
| 11 | Lý do | Text | * Xem Lý do từ chối theo yêu cầu đã tạo * Nếu không có thì ẩn trường lý do này |  |
| 12 | Đóng | Button | * Nhấn nút này để tắt màn hình xem chi tiết. * Trở lại màn hình danh sách yêu cầu |  |

### 3.3 Tạo yêu cầu bán hàng trái tuyến trên mobile.

Là nơi tạo yêu cầu bán hàng trái tuyến .

Có phân quyền theo chức năng tạo yêu cầu bán trái tuyến.

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** | Dữ liệu |
| --- | --- | --- | --- | --- |
| 1 | Chọn tuyến bán hàng | Dropdownlist | * Mặc định hiển thị tuyến bán hàng của nhân viên. * Bắt buộc chọn tuyến bán hàng khi tạo yêu cầu * Chỉ cho phép chọn 1 tuyến bán hàng. |  |
| 2 | Chọn Điểm bán | Dropdownlist | * Mặc định trống * Load tất cả điểm bán theo tuyến nhân viên đã chọn |  |
| 3 | Nội dung yêu cầu | Textbox | * Nhân viên nhập nội dung muốn yêu cầu * Nhập tối đa 500 kya t |  |
| 4 | Chọn người duyệt | Text | * Mặc định hiên thị Quản lý trực tiếp theo Nhân viên |  |
| 5 | Gửi yêu cầu | Button | * Nhấn nút này gửi yêu cầu sang app Quản lý |  |
| 6 | Trở lại | Button | * Nhấn nút này để thoát ra màn hình tab menu Khác |  |

|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature | Yêu cầu bán hàng trái tuyến |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1. Mục đích**

NVBH có thể tạo yêu cầu bán hàng trái tuyến trên mobile.

GSBH có thể duyệt yêu cầu bán hàng trái tuyến trên mobile.

NVBH tạo được đơn hàng bán trái tuyến trên mobile

**2. Chức năng**

Danh sách yêu cầu bán hàng trái tuyến trên mobile.

Tạo yêu cầu bán hàng trái tuyến trên mobile.

Duyệt yêu cầu bán hàng trái tuyến trên mobile.

Tạo được đơn hàng bán trái tuyến trên mobile.

**trueBán hàng trái tuyếnfalseautotoptrue4013**

## **3. Mô tả chi tiết**

3.1 Danh sách yêu cầu bán hàng trái tuyến trên mobile.

Là nơi hiển thị tất cả yêu cầu bán hàng trái tuyến đã tạo của từng nhân viên.

Có thể filter tìm kiếm theo ngày tạo và trạng thái cuối cùng.

Có phân quyền chỉ xem yêu cầu theo người tạo.

Link tab menu: Khác

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** | Dữ liệu |
| --- | --- | --- | --- | --- |
| 1 | Chọn ngày | Date | * Mặc định hiển thị ngày 1 đầu tháng hiện tại và ngày hiện tại. * Người dùng chọn ngày tạo yêu cầu; hệ thống tự động hiển thị yêu cầu có ngày tạo theo ngày đã chọn. |  |
| 2 | Trạng thái | Dropdownlist | * Mặc định không có dữ liệu. * Chỉ cho chọn 1 điều kiện sau:   Đã duyệt: yêu cầu đã được gửi sang app Quản lý và được duyệt đồng ý.  Từ chối: yêu cầu đã được gửi sang app Quản lý và được duyệt đồng ý kèm lý do.  Chờ duyệt: yêu cầu đã được gửi sang app Quản lý nhưng chưa được duyệt.   * Người dùng chọn trạng thái của yêu cầu; hệ thống tự động hiển thị yêu cầu có đúng trạng thái đã chọn |  |
| 3 | Mã yêu cầu | Text | * Chỉ xem yêu cầu * Hệ thống gen mã yêu cầu theo format ROyymmdd0000:   Với RO là (Request Order)  yymmdd là ngày tháng năm hiện tại khi tạo yêu cầu mới  0000 là số tự tăng tính theo ngày.  Ví dụ: RO2410290001 Là yêu cầu số 0001 được tạo vào ngày 29/10/2024 |  |
| 4 | Tuyến | Text | * Chỉ xem yêu cầu * Hiển thị Mã tuyến - tên tuyến theo yêu cầu đã tạo    Ví dụ: ROUTE1234567890 - Nguyễn Văn A |  |
| 5 | Điểm bán | Text | * Chỉ xem yêu cầu * Hiển thị Mã điểm bán- tên điểm bán theo yêu cầu đã tạo    Ví dụ: CH000002 - Tạp hóa Chị Ngọc |  |
| 6 | Ngày tạo | Date | * Chỉ xem yêu cầu * Hiển thị ngày tạo yêu cầu trên app nhân viên    Ví dụ: 29/10/2024 15:45:00 |  |
| 7 | Ngày duyệt | Date | * Chỉ xem yêu cầu * Chi hiển thị ngày duyệt khi yêu cầu đã được duyệt từ app quản lý.    Ví dụ: 29/10/2024 15:45:20 |  |
| 8 | Lý do | Text | * Chỉ xem yêu cầu * Chỉ hiển thị lý do khi Quản lý chọn duyệt từ chối.   Ví dụ: Cửa hàng còn nợ cao |  |
| 9 | Trạng thái | Text | * Chỉ xem yêu cầu * Hiển thị trạng thái khi Quản lý chọn trạng thái duyệt: Đã duyệt; Từ chối; Chờ duyệt |  |
| 10 | Tạo yêu cầu | Button | * Nhấn nút này mở ra màn hình Tạo yêu cầu bán hàng trái tuyến. * Xem chi tiết mô tả 3.3 |  |
| 11 | Trở lại | Button | * Nhấn nút này để thoát ra màn hình tab menu Khác |  |

### 3.2 Xem yêu cầu bán hàng trái tuyến trên mobile.

Xem chi tiết yêu cầu bán hàng trái tuyến đã tạo.

Có phân quyền theo chức năng xem yêu cầu bán trái tuyến.

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** | Dữ liệu |
| --- | --- | --- | --- | --- |
| 1 | Mã yêu cầu | Text | * Xem Mã yêu cầu theo yêu cầu đã tạo |  |
| 2 | Người yêu cầu | Text | * Xem Người yêu cầu theo yêu cầu đã tạo |  |
| 3 | Mã Tuyến | Text | * Xem Mã Tuyến theo yêu cầu đã tạo |  |
| 4 | Điểm bán | Text | * Xem Mã điểm bán- tên điểm bán theo yêu cầu đã tạo |  |
| 5 | Tần suất | Text | * Xem Tần suất theo yêu cầu đã tạo * Lấy thông tin tần suất theo Mã điểm bán đã chọn |  |
| 6 | Ngày tạo | Date | * Xem Ngày tạo theo yêu cầu đã tạo |  |
| 7 | Nội dung | Text | * Xem Nội dung theo yêu cầu đã tạo |  |
| 8 | Người duyệt | Text | * Xem Người duyệt theo yêu cầu đã tạo |  |
| 9 | Ngày duyệt | Date | * Xem Ngày duyệt theo yêu cầu đã tạo |  |
| 10 | Trạng thái | Text | * Xem Trạng thái theo yêu cầu đã tạo |  |
| 11 | Lý do | Text | * Xem Lý do từ chối theo yêu cầu đã tạo * Nếu không có thì ẩn trường lý do này |  |
| 12 | Đóng | Button | * Nhấn nút này để tắt màn hình xem chi tiết. * Trở lại màn hình danh sách yêu cầu |  |

### 3.3 Tạo yêu cầu bán hàng trái tuyến trên mobile.

Là nơi tạo yêu cầu bán hàng trái tuyến .

Có phân quyền theo chức năng tạo yêu cầu bán trái tuyến.

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** | Dữ liệu |
| --- | --- | --- | --- | --- |
| 1 | Chọn tuyến bán hàng | Dropdownlist | * Mặc định hiển thị tuyến bán hàng của nhân viên. * Bắt buộc chọn tuyến bán hàng khi tạo yêu cầu * Chỉ cho phép chọn 1 tuyến bán hàng. |  |
| 2 | Chọn Điểm bán | Dropdownlist | * Mặc định trống * Load tất cả điểm bán theo tuyến nhân viên đã chọn |  |
| 3 | Nội dung yêu cầu | Textbox | * Nhân viên nhập nội dung muốn yêu cầu * Nhập tối đa 500 kya t |  |
| 4 | Chọn người duyệt | Text | * Mặc định hiên thị Quản lý trực tiếp theo Nhân viên |  |
| 5 | Gửi yêu cầu | Button | * Nhấn nút này gửi yêu cầu sang app Quản lý |  |
| 6 | Trở lại | Button | * Nhấn nút này để thoát ra màn hình tab menu Khác |  |