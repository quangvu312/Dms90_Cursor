|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Danh sách màn hình portal HO for Vigo |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

## **Danh sách màn hình HO**

**Định nghĩa các màn hình *(Xem Lefmenu HO)***

Leftmenu HO

|  | Level 1 | Level 2 | Level 3 | Mô tả | Role1  Phân quyền SFA = Nhân viên kinh doanh |
| --- | --- | --- | --- | --- | --- |
|  | Dữ liệu nền | Địa lý | **Phân vùng** |  | Không |
|  | Kinh doanh | **Công ty** |  | Không |
|  | **Kênh bán hàng** | Kênh H&A; H& B (Một nhân viên chỉ bán cho 1 kênh) | Không |
|  | **Hạng khách hàng** | Không cho phép CRUD ở màn hình này.   * Priority: Không cần duyệt * Platinum: Manager duyệt * Diamond: Sale Head/Sale Director duyệt * Prime: Sale Head/Sale Director duyệt | Không |
|  | **Danh sách người liên hệ** | Quản lý người liên hệ của khách hàng | Có |
|  | **Cấu hình khách hàng** | Cấu hình khách hàng theo hạng khách hàng | Không |
|  | **Danh sách khách hàng** | Danh sách khách hàng | Có |
|  | **Nhân viên kinh doanh** | Màn hình "Nhân viên bán hàng" | Không |
|  | **Đại lý** | Nhà phân phối  Note thêm: Hiện tại ViGo chỉ có 1 NPP vận hành cho cả hệ thống. | Không |
|  | Sản phẩm | **Cây phân cấp sản phẩm** | Division Description  Department Description  Sub-Department Description  Category  Mdse Catgry Desc. | Không |
|  | **Đơn vị đo lường** |  | Không |
|  | **Nhóm sản phẩm** |  | Không |
|  | **Danh sách sản phẩm** |  | Không |
|  | **Bảng giá bán** |  | Không |
|  | Quản lý chỉ tiêu | Chỉ Tiêu KPI |  |  | Không |
|  | Giao KPI |  |  | Không |
|  | Báo cáo KPI |  |  | Không |
|  | Quản lý bán hàng | Đơn hàng bán |  | Đơn Bán Hàng "Phân quyền CRUD đơn hàng" | **Quyền Tạo đơn hàng:** Khi tài khoản này vào màn hình tạo đơn mới, hệ thống tự động gán cứng thông tin bán hàng theo đúng cấu hình liên kết của tài khoản. User không được phép chọn sang nhân viên khác.    * Màn hình hiển thị danh sách Nhà phân phối thuộc tuyến bán hàng của nhân viên để chọn lên đơn. nếu chỉ có 1 NPP → hiển thị mặc định NPP này.   **Quyền Xem danh sách đơn hàng (Grid View):**   * + Hệ thống tự động chèn thêm điều kiện SQL ẩn khi gọi API lấy danh sách đơn hàng: WHERE salesman\_id = 'MÃ\_SALESMAN\_LIÊN\_KẾT'.   + Người dùng chỉ xem được các đơn hàng do chính mình tạo |
|  | Đơn hàng trả |  | Tạo Trả Hàng Nguyên Đơn |
|  | Duyệt Trả Hàng |  | Menu "Điểm Bán Trả Hàng Nguyên Đơn" | Không |
|  | Quản lý tuyến chăm sóc | Nhiệm vụ |  | Đơn bán hàng | Không |
|  | Nhóm nhiệm vụ |  | Đơn hàng trả | Không |
|  | Tuyến chăm sóc |  |  | Không |
|  | Tuyến thực tế |  |  | Có |
|  | Chương trình khuyến mãi | Quản lý khuyến mãi |  |  | Không |
|  | Báo cáo | **Báo Cáo Tổng Hợp CTKM** |  | Không |
|  | **Báo Cáo Chi Tiết CTKM** |  | Không |
|  | Quản lý trưng bày | Tổng quan chương trình trưng bày |  |  | Có |
|  | Chương trình trưng bày |  |  | Không |
|  | Danh sách đăng ký trưng bày |  |  | Có |
|  | Tiến trình trưng bày |  |  | Có |
|  | Danh sách trả thưởng trưng bày |  |  | Có |
|  | Chương trình tích lũy | Tổng quan chương trình tích lũy |  |  | Có |
|  | Chương trình tích lũy |  |  | Không |
|  | Danh sách đăng ký tích lũy |  |  | Có |
|  | Tiến trình tích lũy |  |  | Có |
|  | Danh sách trả thưởng tích lũy |  |  | Có |
|  | Quản lý khảo sát | Bộ khảo sát |  |  | Không |
|  | Thống kê khảo sát |  |  | Có |
|  | Quản lý lịch thông báo | Cài đặt thông báo |  |  | Không |
|  | Lịch sử thông báo |  |  | Có |
|  | Thông tin sản phẩm |  |  |  | Có |
|  | Quản lý hợp đồng |  |  |  | Có |
|  | Dự báo bán hàng | Phân bổ chỉ tiêu |  |  | Có |
|  | Báo cáo dự báo bán hàng |  |  | Có |
|  | Báo cáo | Báo cáo bán hàng | **Tổng hợp đơn hàng bán** |  | Có |
|  | **Doanh thu theo sản phẩm** |  | Có |
|  | **Doanh thu theo khách hàng** |  | Có |
|  | **Doanh thu theo Nhân viên kinh doanh** |  | Có |
|  | **Đơn trả hàng** |  | Có |
|  | Kho | **Nhập kho** |  | Không |
|  | **Xuất kho** |  | Không |
|  | **Báo cáo Tồn kho hiện tại** |  | Không |
|  | Tuyến chăm sóc | **Tổng hợp viếng thăm khách hàng** |  | Có |
|  | **Chi tiết viếng thăm khách hàng** |  | Có |
|  | Phân tích | **Phân tích hiệu quả tuyến** |  | Có |
|  | **Truy vấn tọa độ nhân viên** |  | Không |
|  | **Hình ảnh bày hàng** |  | Có |
|  | Quản trị hệ thống | Tài khoản người dùng |  |  | Không |
|  | Nhóm quyền |  |  | Không |
|  | Dữ liệu chung |  |  | Không |
|  |  |  |  |  |  |

### **Phân quyền SFA = Nhân viên kinh doanh**

#### **Định nghĩa dữ liệu Nhân viên kinh doanh được nhìn thấy**

**Mục đích:**Nhân viên kinh doanh không thấy dữ liệu của Salesman khác cùng tuyến/NPP/khu vực. Chỉ Role Quản lý kinh doanh trở lên mới có scope kế thừa.

| Loại | Định nghĩa | Cơ chế xác định | Ví dụ nghiệp vụ |
| --- | --- | --- | --- |
| **Dữ liệu do chính mình tạo** | Bản ghi giao dịch có `created_by_salesman_id` = salesman\_id của user | Trường Người tạo trên bảng giao dịch | Đơn hàng, Đơn trả hàng, Phiếu thu, Check-in/Visit, Ảnh trưng bày, Khảo sát |
| **Dữ liệu được gán cho mình** | Bản ghi danh mục/vận hành có quan hệ phân công tới salesman\_id | Các màn hình có đối tượng áp dụng mà gán đến từng nhân viên kinh doanh | Tuyến (Route), Chỉ tiêu KPI, Dự báo bán hàng; ... |

#### Logic xử lý dữ liệu Inactive

* Trường hợp `Nhân viên kinh doanh(Salesman)` bị ngưng hoạt động (Inactive) ở danh mục gốc:

  + **Màn hình Danh sách/Xem chi tiết:** Vẫn hiển thị thông tin Mã - Tên Salesman bình thường để đảm bảo tính toàn vẹn lịch sử.
  + **Màn hình Tạo mới/ Chỉnh sửa:** Nếu giữ nguyên Salesman bị Inactive và bấm **Lưu**, hệ thống sẽ chặn và hiển thị thông tin báo lỗi động:  “Nhân viên kinh doanh @Mã\_Salesman đã bị ngừng hoạt động trên hệ thống. Vui lòng kiểm tra lại!”

#### **Quyền CRUD-View**

**Quyền Khởi tạo/ điều chỉnh:** Khi tài khoản này vào màn hình tạo mới, hệ thống tự động gán cứng thông tin bán hàng theo đúng cấu hình liên kết của tài khoản. User không được phép chọn sang nhân viên khác. 

* Màn hình hiển thị danh sách Nhà phân phối thuộc tuyến bán hàng của nhân viên để chọn tạo mưới/ điều chỉnh. nếu chỉ có 1 NPP → hiển thị mặc định NPP này.

**Quyền Xem danh sách:**

* + Hệ thống tự động chèn thêm điều kiện SQL ẩn khi gọi API lấy danh sách: WHERE salesman\_id = 'MÃ\_SALESMAN\_LIÊN\_KẾT'.
  + Người dùng chỉ xem được các bản ghi do chính mình tạo

**Phân hệ Báo cáo:** tất cả các báo cáo liên quan (Báo cáo doanh số, Báo cáo viếng thăm khách hàng, Báo cáo tiến độ KPI...)

* Filter Nhân viên bán hàng trên thanh Bộ lọc (Filter Bar) sẽ bị khóa (Disabled) và tự động chọn chính mã Salesman của tài khoản đó.
* Danh sách NPP hiển thị theo Tuyến của nhân viên kinh doanh
* Dữ liệu kết xuất (View trên giao diện hoặc Export Excel) chỉ hiển thị dữ liệu phát sinh của chính Salesman được liên kết.

## **Danh sách màn hình NPP**

Leftmenu HO

|  | Level 1 | Level 2 | Level 3 | Mô tả |
| --- | --- | --- | --- | --- |
|  | Dữ liệu nền | Danh sách sản phẩm |  |  |
|  | Danh sách khách hàng |  |  |
|  | Tuyến chăm sóc |  |  |
|  | Giá bán |  |  |
|  | Quản lý bán hàng | Đơn Bán Hàng |  | Đơn Bán Hàng |
|  | Xuất kho |  |  |
|  | Đơn hàng trả |  | Menu "Điểm Bán Trả Hàng Nguyên Đơn" |
|  | Quản lý khảo sát | Thống kê khảo sát |  |  |
|  | Quản lý lịch thông báo | Lịch sử thông báo |  |  |
|  | Báo cáo | Phân tích | **Phân tích tuyến** |  |
|  | **Tổng hợp đơn hàng bán** |  |
|  | **Doanh thu theo sản phẩm** |  |
|  | **Doanh thu theo khách hàng** |  |
|  | **Doanh thu theo Nhân viên kinh doanh** |  |
|  | **Khách hàng trả hàng** |  |
|  | Kho | **Nhập kho** |  |
|  | **Xuất kho** |  |
|  | **Báo cáo Tồn kho hiện tại** |  |
|  | Trưng bày | **Danh sách đăng ký trưng bày** |  |
|  | **Tiến trình trưng bày** |  |
|  | **Danh sách trả thưởng trưng bày** |  |
|  | Tích lũy | **Danh sách đăng ký tích lũy** |  |
|  | **Tiến trình tích lũy** |  |
|  | **Danh sách trả thưởng tích lũy** |  |
|  |  |  |  |  |