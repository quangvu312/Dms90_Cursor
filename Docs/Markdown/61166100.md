gia

|  |  |
| --- | --- |
| Target release | Release name or number |
| US |  |
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

## **Description**

## **Requirements**

### Xem danh sách bảng giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Màn hình *"Danh sách bảng giá"* |  | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Bảng giá bán  **2. Mô tả:**Màn hình Danh sách bảng giá bao gồm các thông tin  a. Tìm kiếm bảng giá   * **Tìm kiếm** theo Mã bảng giá/ Tên bảng giá: Tìm kiếm like thông tin được nhập (tối đa là 500 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * **Trạng thái**:   + Gồm các trạng thái {Khởi tạo, Tạm ngưng, Đã duyệt, Đã huỷ}.   + Mặc định trống.   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Nút **tìm kiếm**: Click vào nút → thực hiện tìm kiếmtheo các điều kiện đã nhập/chọn.   b. Danh sách bảng giá gồm các thông tin:   * + Mã bảng giá   + Tên bảng giá   + Thời gian áp dụng: Hiển thị theo format: dd-mm-yyyy   + Trạng thái: Khởi tạo/Đã duyệt/Đã hủy/Đã kết thúc   + Ngày tạo: Hiển thị theo format: dd-mm-yyyy hh:mm:ss   + Ngày cập nhật: Lấy thời gian cập nhật gần nhất, hiển thị theo format: dd-mm-yyyy hh:mm:ss   + Người tạo   + Người cập nhật: Lấy tên người cập nhật gần nhất   + Nút Chỉnh sửa: Chỉ hiển thị tại bảng giá có trạng thái "Khởi tạo"   + Nút Duyệt: Chỉ hiển thị tại bảng giá có trạng thái "Khởi tạo"   + Nút Sao chép: Hiển thị tại tất cả bảng giá   + Phân trang theo {10; 50; 100} |

### Chỉnh sửa bảng giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Màn hình *"Chỉnh sửa bảng giá"* |  | **1. Đường dẫn:**Dữ liệu nền → Sản phẩm  → Bảng giá bán → Chọn Nút Chỉnh sửa  **2. Mô tả**   * Chỉ cho phép chỉnh sửa bảng giá có trạng thái *"Khởi tạo"* * Chỉ cho phép chỉnh sửa thông tin *Giá bán* (VND)   + Giá tối thiểu áp dụng **≤** Giá bán (VND) **≤**Giá tối đa áp dụng   + Mặc định giá bằng 0   + Chỉ được nhập giá trị nguyên dương * *Giá niêm yết (VND)* mặc định hiển thị giá được nhập tại portal HO * Nút **Lưu**: Click vào nút → hiển thị popup "Xác nhận lưu bảng giá bán" ngay trên nút   + Nếu đồng ý: Hệ thống thực hiện xác minh     - Nếu Giá bán lớn hơn Giá tối đa áp dụng hoặc bé hơn Giá tối thiểu áp dụng, hệ thống báo lỗi inline: *"Giá bán phải nằm trong mức giá cho phép chỉnh sửa."*     - Nếu Giá bán để trống, hệ thống báo lỗi: *"Trường này là bắt buộc."*     - Nếu các thông tin hợp lệ, hệ thống thực hiện       * Cập nhật thông tin chỉnh sửa của bảng giá       * Đóng popup, trở về màn hình Danh sách bảng giá       * Cập nhật thông tin lịch sử cập nhật của bảng giá tại portal HO và portal NPP   + Nếu không đồng ý, hệ thống thực hiện đóng popup xác nhận * Nút **Lưu và Duyệt:**Click vào nút: Hệ thống thực hiện xử lý giống với nút Lưuvà **[Duyệt bảng giá](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61166100#:~:text=g%E1%BB%91c%20(VND)%22.-,Duy%E1%BB%87t%20b%E1%BA%A3ng%20gi%C3%A1%C2%A0,-%23)** * Nút **Đóng**: Click vào nút → hệ thống thực hiện đóng màn hình chỉnh sửa bảng giá |

### Import sản phẩm

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Popup Import |  | **1. Đường dẫn:**  **2. Mô tả:** Popup Import sản phẩm bao gồm:   * Nút **Lấy file mẫu**: Click vào nút → hệ thống thực hiện tải về template mẫu: , trong đó:   + Template chứa sẵn danh sách sản phẩm đã có trong bảng giá     - Danh sách sản phẩm đã có trong bảng giá hiển thị các thông tin: Mã SKU, Tên sản phẩm, Giá bán nhỏ nhất, Giá bán lớn nhất, Giá bán hiện tại * Nút **Tải lên**: Người dùng chọn vào kéo thả file import vào ô "Chọn hoặc kéo file đến vị trí này" * Nút **Tiến hành xử lý**:   + Mặc định disable, enable khi có file được import   + Ràng buộc tối đa 10.000 dòng.   + Click vào nút -> nhấn nút "Tiến hành xử lý" để import file dữ liệu vào hệ thống. Chỉ cho phép import file excel.     - Nếu file không đúng định dạng, báo lỗi: *"File import không đúng định dạng. Vui lòng kiểm tra lại"*     - Nếu file không có dữ liệu, báo lỗi: "*File import không chứa dữ liệu."*   + Hệ thống thực hiện xử lý dữ liệu trong file import     - Nếu tất cả đều hợp lệ, hệ thống thực hiện thêm dữ liệu vào bảng giá theo quy tắc sau:       * Hệ thống chỉ thực hiện cập nhật giá trị tại trường Giá bán (VND) theo Giá chỉnh sửa trong file excel.       * Nếu Giá chỉnh sửa trong file excelđể trống, mặc định lấy Giá niêm yết.     - Nếu có ít nhất 1 dữ liệu lỗi, hệ thống thực hiện show popup Chi tiết Import Giá bán sản phẩm - Trạng thái "Thất bại". |
| 2 | Popup *"Chi tiết Import Giá bán sản phẩm - Trạng thái "Thất bại""* |  | Thông tin Chi tiết Import Giá bán sản phẩm - Trạng thái "Thất bại" bao gồm:   * Số dòng hợp lệ: Tổng số dòng hợp lệ/Tổng số dòng dữ liệu trong file import. VD: 10/21 * Số dòng không hợp lệ: Tổng số dòng không hợp lệ/Tổng số dòng dữ liệu trong file import. VD: 11/21 * Danh sách dòng không hợp lệ:   + Dòng thứ: Hiển thị số thứ tự của dòng có lỗi trong file   + Mô tả lỗi: Mô tả lỗi của từng dòng tương ứng các trường hợp bên dưới.   + Phân trang theo 10; 50; 100.   Các trường hợp báo lỗi bao gồm:   * Nếu Mã SKU không tồn tại trong danh sách sản phẩm của bảng giá: "*Mã SKU không tồn tại trong danh sách sản phẩm của bảng giá."* * Nếu Giá chỉnh sửa lớn hơn Giá bán lớn nhất hoặc nhỏ hơn Giá bán nhỏ nhất: *"Giá bán không nằm trong mức giá được phép chỉnh sửa."* * Nếu giá tại Giá chỉnh sửa khác giá trị số nguyên dương: *"*Giá bán không đúng định dạng.**" |

### Xem chi tiết bảng giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Màn hình *"Xem chi tiết bảng giá"* | *Bảng giá NPP không được điều chỉnh*    *Bảng giá NPP được điều chỉnh* | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Bảng giá bán → Chọn Tên bảng giá  **2. Mô tả**  Màn hình xem chi tiết bao gồm:   * Mã bảng giá * Tên bảng giá * Thời gian áp dụng * Trạng thái * Danh sách sản phẩm   + Mã SKU   + Tên sản phẩm   + Đơn vị   + Giá gốc (VND) * Nút đóng: Click vào nút → đóng popup xem chi tiết bảng giá và trở về màn hình danh sách bảng giá   Đối với bảng giá cho phép NPP chỉnh sửa giá, chi tiết sản phẩm hiển thị thêm các thông tin sau:   * 2 tab: Thông tin bảng giá & Lịch sử bảng giá. Trong đó:   + Thông tin bảng giá: Hiển thị các trường thông tin ở trên và các trường: *Giá tối thiểu áp dụng* và *Giá tối đa áp dụng*   + Lịch sử cập nhật: Hiển thị lịch sử cập nhật bảng giá của NPP |

### Xem lịch sử cập nhật

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | Màn hình "*Xem lịch sử cập nhật"* |  | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Bảng giá bán → Chọn Tên bảng giá → Chọn tab Lịch sử cập nhật  **2. Mô tả**  Cho phép xem lịch sử cập nhật của bảng giá đang xem.  Danh sách thông tin lịch sử chỉnh sửa sắp xếp theo ngày cập nhật mới nhất trước, hiển thị với các thông tin gồm:   * STT * Ngày cập nhật: hiển thị theo format: dd-mm-yyyy hh:mm:ss * Người cập nhật * Mã SKU * Trường thông tin * Nội dung cũ * Nội dung mới   Nút Đóng: Click vào nút → đóng popup xem chi tiết bảng giá và trở về màn hình danh sách bảng giá |

### Sao chép bảng giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | Màn hình *"Thêm mới bảng giá"* |  | **1. Đường dẫn:**Dữ liệu nền → Sản phẩm  → Bảng giá bán → Chọn "Sao chép" một bảng giá bất kì  **2. Mô tả:**   * Cho phép sao chép tất cả bảng giá với mọi trạng thái. * Chỉ sao chép bảng giá được HO thiết lập cho phép NPP điều chỉnh giá  * Sau khi chọn sao chép một bảng giá, hệ thống thực hiện:    + Xử lý theo [**Quy tắc hiển thị sản phẩm trên bảng giá**](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181#:~:text=Quy%20tắc%20hiển%20thị%20sản%20phẩm%20trên%20bảng%20giá)   + Mở popup Tạo mới bảng giá với các thông tin sau:     - Mã bảng giá: Tự động gen 1 mã bảng giá mới với chuỗi PM + 6 ký tự số tăng dần. Ví dụ: PM000001.     - Tên bảng giá: Tự động thêm numberic suffix vào tên bảng giá. Ví dụ: Bảng giá tháng 5 (1), Bảng giá tháng 5 (2),...     - Các trường còn lại, hiển thị thông tin theo bảng giá được sao chép. * Chỉ được chỉnh sửa trường thông tin *"Giá gốc (VND)"*. |

### Duyệt bảng giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | N/A |  | **1. Đường dẫn:**Dữ liệu nền → Sản phẩm  → Bảng giá bán → Chọn "Duyệt" một bảng giá bất kì  **2. Mô tả:**   * Chỉ cho phép duyệt bảng giá có trạng thái *"Khởi tạo"* * Khi duyệt, hiển thị popup "Xác nhận duyệt bảng giá bán" ngay trên nút:    + - Nếu đồng ý: Hệ thống thực hiện xác minh       * Nếu trong danh sách bảng giá có một bảng giá có đủ các điều kiện sau:         + Trạng thái = "Đã duyệt"         + Thời gian áp dụng trùng với thời gian áp dụng của bảng giá đang được tạo.   → Khi đó, hệ thống thông báo: *"Bằng việc chọn "Xác nhận", bạn xác nhận duyệt bảng giá, hệ thống sẽ kết thúc bảng giá cũ và kích hoạt bảng giá mới ? Hành động này không thể hoàn tác, bạn chắc chắn chứ**?"*   * + - * + - Nếu đồng ý, hệ thống thực hiện             * Chuyển trạng thái của bảng giá đang chạy sang "Đã kết thúc"             * Chuyển trạng thái của bảng giá đang duyệt sang "Đã duyệt"           - Nếu không đồng ý, hệ thống thực hiện đóng popup thông báo     - Nếu không, hệ thống thực hiện chuyển trạng thái bảng giá sang **Đã duyệt**.   + Nếu đóng: thực hiện đóng popup xác nhận. |

### Huỷ bảng giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | N/A | N/A | **1. Đường dẫn:**Dữ liệu nền → Sản phẩm  → Bảng giá bán → Chọn "Hủy" một bảng giá "Khởi tạo"  **2. Mô tả:**Khi chọn Hủy bảng giá, hệ thống thực hiện hiển thị popup Xác nhận hủy bảng giá ngay trên nút:   * + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất: Hệ thống cập nhật trạng thái bảng giá sang **Đã hủy**.     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận. * Chỉ được hủy bảng giá có trạng thái "Khởi tạo" |

### Export bảng giá bán

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | Xuất dữ liệu điểm bán |  | **1. Đường dẫn:** Dữ liệu nền | Sản phẩm | Bảng giá bán  **2. Mô tả**  Tại màn hình **Bảng giá bán,**NPP click nút "Export Excel" , hệ thống kiểm tra và xử lý:   * Kiểm tra danh sách bảng giá có dữ liệu   + Nếu không, hiển thị toast error "Không thể xuất file vì không có dữ liệu"   + Nếu có, thực hiện tiếp bước tiếp theo  * Hệ thống hiển thị popup xác nhận:   * + Text: Bạn có muốn xuất danh sách bảng giá bán không ?   + Nút Huỷ: Click vào nút → hệ thống thực hiện đóng popup   + Nút Lưu: Click vào nút → hệ thống thực hiện xuất dữ liệu theo với:      - Tên format file: Danhsachbanggiaban\_DD-MM-YYYY     - Rules thông tin trong file:       * Mỗi bảng giá sẽ được hiển thị từng sheet       * Tên của sheet là "Mã bảng giá"       * Mỗi sheet sẽ có column thông tin Bảng giá & column SKU sản phẩm:  | Trường thông tin | Mô tả | | --- | --- | | **Thông tin bảng giá** | | | STT | Số thứ tự của từng SKU  STT tăng dần | | Mã bảng giá | Hiển thị mã bảng giá | | Tên bảng giá | Hiển thị tên bảng giá | | Áp dụng từ ngày | Hiển thị thời gian bắt đầu áp dụng bảng giá | | Ngày tạo | Hiển thị ngày tạo  Format DD-MM-YYYY hh:mm | | Người tạo | Hiển thị user name người tạo | | Ngày cập nhật | Hiển thị ngày cập nhật  Format DD-MM-YYYY hh:mm | | Người cập nhật | Hiển thị user name người cập nhật | | Trạng thái bảng giá | Hiển thị trạng thái của bảng giá bán | | **Bảng giá sản phẩm** | | | Mã SKU | Hiển thị mã SKU của sản phẩm | | Tên sản phẩm | Hiển thị tên của sản phẩm | | Đơn vị | Hiển thị đơn vị cơ bản | | Giá bán (VND) | Hiển thị giá của sản phẩm ứng với bảng giá đó  Hiển thị giá được cập nhật mới nhất của bảng giá | | Giá niêm yết (VND) | Hiển thị giá niêm yết của sản phẩm ứng với bảng giá đó | | Giá tối thiểu áp dụng | Hiển thị tối thiểu áp dụng của sản phẩm ứng với bảng giá đó | | Giá tối đa áp dụng | Hiển thị tối đa áp dụng của sản phẩm ứng với bảng giá đó | | Trạng thái sản phẩm | Nếu sản phẩm active → hiển thị "Hoạt động"  Ngược lại, hiển thị "Không hoạt động" | |