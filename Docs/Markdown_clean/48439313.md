|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2224 |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Lịch sử tài liệu**

3

**Backlog**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  | nhi.pham | Tạo mới tài liệu |
| 2 | 1.1.0 | 26/03/2025 |  | Cập nhật chức năng Export Bảng giá bán |
| 3 | 1.2.0 | 25/04/2025 | nhi.pham | Bổ sung chức năng   * Cho phép NPP chỉnh sửa bảng gía bán cho ĐB * Thiết lập mức giá cho phép NPP chỉnh sửa |

## **Description**

## 

## **Requirements**

### **Xem danh sách bảng giá**

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | Đường dẫn |  | Dữ liệu nền → Sản phẩm → Giá bán cho cửa hàng |

### **Thiết lập NPP điều chỉnh giá**

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  |  |  | **1. Đường dẫn**: Dữ liệu nền > Sản phẩm > Bảng giá bán   **2. Mô tả**  Tại màn hình Tạo mới/Chỉnh sửa bảng giá bán, bổ sung thêm các trường thông tin sau:    * NPP điều chỉnh giá *[toggle]*:    + Nếu ON: Cho phép chỉnh sửa giá bán trên bảng giá, danh sách sản phẩm bổ sung 2 trường thông tin gồm:     - Giá tối thiểu áp dụng *[textbox]*:       * Mặc định giá bằng 0       * Chỉ nhập số nguyên dương     - Giá tối đa áp dụng *[textbox]*:       * Mặc định giá bằng 0       * Chỉ nhập số nguyên dương     - Lưu ý: Giá tối thiểu áp dụng *≤*Giá niêm yết *≤*Giá tối đa áp dụng   + Nếu OFF: Không cho phép chỉnh sửa giá bán trên bảng giá |

### Xem lịch sử cập nhật - Ghi nhận lịch sử thay đổi thiết lập NPP điều chỉnh giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Cập nhật lịch sử thiết lập NPP điểu chỉnh giá |  | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Giá mua → Chọn Tên bảng giá → Chọn tab Lịch sử cập nhật  **2. Mô tả:**  Tại tab Lịch sử cập nhật, hệ thống thực hiện ghi nhận lịch sử cho phần Thiết lập NPP điều chỉnh giá.   * Trường thông tin: **NPP điều chỉnh giá** * Nội dung cũ/Nội dung mới:   + Nếu ON thì hiển thị "**NPP điều chỉnh giá:** Cho phép điều chỉnh"   + Nếu OFF thì hiển thị "**NPP điều chỉnh giá:** Không cho phép điều chỉnh" |
| 2 | Cập nhật lịch sử chỉnh sửa giá |  | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Giá mua → Chọn Tên bảng giá → Chọn tab Lịch sử cập nhật → Thay đổi bảng giá & NPP  **2. Mô tả**   * Tại Lịch sử thay đổi bảng giá và NPP, hệ thống thực hiện ghi nhận lịch sử chỉnh sửa "Giá tối đa áp dụng" và "Giá tối thiểu áp dụng' * Table Thay đổi bảng giá và NPP - Bảng giá gốc cập nhật thêm cột: *Trường thông tin*, ghi nhận tên trường thông tin có chỉnh sửa giá gồm: *Giá niêm yết, Giá tối thiểu áp dụng, Giá tối đa áp dụng.* |

### Xem danh sách bảng giá bán

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Màn hình "Danh sách bảng giá" |  | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Bảng giá bán   **2. Mô tả:**  Đối với bảng giá được tạo bởi HO có trạng thái "Đã duyệt", hiển thị danh sách bảng giá của NPP được tạo ra từ bảng giá đó.   * Cho phép click vào mũi tên ở mỗi dòng để ẩn/hiện danh sách bảng giá của NPP. Mặc định ẩn. * Danh sách bảng giá của NPP gồm các trường thông tin:   + Mã bảng giá: Lấy theo thông tin của bảng giá tương ứng   + Tên bảng giá: Click vào tên bảng giá → hệ thống hiển thị màn hình **[Xem chi tiết bảng giá của NPP](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61166100#:~:text=%C4%91%E1%BB%8Bnh%20d%E1%BA%A1ng.%22-,Xem%20chi%20ti%E1%BA%BFt%20b%E1%BA%A3ng%20gi%C3%A1%C2%A0,-%23)**.   + Nhà phân phối: Click vào Nhà phân phối → hệ thống hiển thị màn hìnhXem chi tiết NPP.   + Trạng thái: Lấy theo thông tin của bảng giá tương ứng   + Ngày tạo: Lấy theo thông tin của bảng giá tương ứng   + Người tạo: Lấy theo thông tin của bảng giá tương ứng   + Ngày cập nhật: Lấy theo thông tin của bảng giá tương ứng   + Người cập: Lấy theo thông tin của bảng giá tương ứng |

### Export bảng giá bán

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Màn hình "Danh sách bảng giá" |  | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Bảng giá bán   **2. Mô tả:**  Đối với bảng giá được tạo bởi HO có trạng thái "Đã duyệt", hiển thị danh sách bảng giá của NPP được tạo ra từ bảng giá đó.   * Cho phép click vào mũi tên ở mỗi dòng để ẩn/hiện danh sách bảng giá của NPP. Mặc định ẩn. * Danh sách bảng giá của NPP gồm các trường thông tin:   + Mã bảng giá: Lấy theo thông tin của bảng giá tương ứng   + Tên bảng giá: Click vào tên bảng giá → hệ thống hiển thị màn hình **[Xem chi tiết bảng giá của NPP](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61166100#:~:text=%C4%91%E1%BB%8Bnh%20d%E1%BA%A1ng.%22-,Xem%20chi%20ti%E1%BA%BFt%20b%E1%BA%A3ng%20gi%C3%A1%C2%A0,-%23)**.   + Nhà phân phối: Click vào Nhà phân phối → hệ thống hiển thị màn hìnhXem chi tiết NPP.   + Trạng thái: Lấy theo thông tin của bảng giá tương ứng   + Ngày tạo: Lấy theo thông tin của bảng giá tương ứng   + Người tạo: Lấy theo thông tin của bảng giá tương ứng   + Ngày cập nhật: Lấy theo thông tin của bảng giá tương ứng   + Người cập: Lấy theo thông tin của bảng giá tương ứng   Danh sách bảng giá của NPP có bao gồm các bảng giá được sao chép. |

### Export bảng giá bán

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | N/A | N/A | * Chỉ export bảng giá do HO tạo, không export bảng giá được tạo cho NPP áp dụng. * Dữ liệu export bảng giá bán bổ sung thêm các thông tin sau:   + Loại bảng giá: Bảng giá điều chỉnh/Bảng giá không điều chỉnh     - Nếu bảng giá cho phép NPP điều chỉnh giá, hiển thị "Bảng giá điều chỉnh"     - Nếu bảng giá không cho phép NPP điều chỉnh giá, hiển thị "Bảng giá không điều chỉnh"   + Giá bán tối đa: Hiển thị giá tối đa áp dụng của sản phẩm ứng với bảng giá đó   + Giá bán tối thiểu: Hiển thị giá tối thiểu áp dụng của sản phẩm ứng với bảng giá đó  * Template export mới: <https://docs.google.com/spreadsheets/d/1tWLS3xYv7F9KxpPHQzVghi5JfPil9xaf/edit?gid=1396474757#gid=1396474757> |

### Export bảng giá bán cho Điểm bán

**Wireframe**

**Mô tả chi tiết**

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Đối tượng thực hiện chức năng | N/A | HO |
| 2 | Đường dẫn | N/A | Dữ liệu nền | Sản phẩm | Bảng giá bán |
| 3 | Xuất dữ liệu điểm bán |  | Tại màn hình **Bảng giá bán,** HO click nút "Export Excel" , hệ thống kiểm tra và xử lý:    * Kiểm tra danh sách bảng giá có dữ liệu   + Nếu không, hiển thị toast error "Không thể xuất file vì không có dữ liệu"   + Nếu có, thực hiện tiếp bước tiếp theo  * Hệ thống hiển thị popup xác nhận:   * + Text: Bạn có muốn xuất danh sách bảng giá bán không ?   + Nút Huỷ: Click vào nút → hệ thống thực hiện đóng popup   + Nút Lưu: Click vào nút → hệ thống thực hiện xuất dữ liệu theo với:     - [Template export](https://docs.google.com/spreadsheets/d/1tWLS3xYv7F9KxpPHQzVghi5JfPil9xaf/edit?usp=sharing&ouid=106646539584081727110&rtpof=true&sd=true)     - Tên format file: Danhsachbanggiaban\_DD-MM-YYYY-hh-mm-ss     - Rules thông tin trong file:        * Mỗi bảng giá sẽ được hiển thị từng sheet       * Tên của sheet là "Mã bảng giá"       * Mỗi sheet sẽ có column thông tin Bảng giá & column SKU sản phẩm:  | Trường thông tin | Mô tả | | --- | --- | | **Thông tin bảng giá** | | | STT | Số thứ tự của từng SKU  STT tăng dần | | Mã bảng giá | Hiển thị mã bảng giá bán | | Tên bảng giá | Hiển thị tên bảng giá bán | | Áp dụng từ ngày | Hiển thị thời gian bắt đầu áp dụng bảng giá | | Vùng bán hàng | Hiển thị tên của Vùng bán hàng (được lấy từ master data) | | Khu vực bán hàng | Hiển thị tên của Khu vực bán hàng (được lấy từ master data) | | Nhà phân phối áp dụng | Nếu bảng giá áp dụng cho nhiều NPP → Mỗi NPP hiển thị cách nhau dấu ", "  Cấu trúc hiển thị mỗi NPP là **Mã NPP - Tên NPP** | | Ngày tạo | Hiển thị ngày tạo  Format DD-MM-YYYY hh:mm | | Người tạo | Hiển thị user name người tạo | | Ngày cập nhật | Hiển thị ngày cập nhật  Format DD-MM-YYYY hh:mm | | Người cập nhật | Hiển thị user name người cập nhật | | Trạng thái bảng giá | Hiển thị trạng thái của bảng giá | | **Bảng giá sản phẩm** | | | Mã SKU | Hiển thị mã SKU của sản phẩm | | Tên sản phẩm | Hiển thị tên của sản phẩm | | Đơn vị | Hiển thị đơn vị cơ bản | | Giá gốc (VND) | Hiển thị giá của sản phẩm ứng với bảng giá đó   Hiển thị giá được cập nhật mới nhất của bảng giá | | Trạng thái sản phẩm | Nếu sản phẩm active → hiển thị "Hoạt động"  Ngược lại, hiển thị "Không hoạt động" | |