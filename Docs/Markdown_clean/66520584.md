number

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

### Thiết lập NPP điều chỉnh giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | Màn hình "*Tạo mới bảng giá"* |  | **1. Đường dẫn**: Dữ liệu nền > Sản phẩm > Bảng giá bán   **2. Mô tả**  Tại màn hình Tạo mới/Chỉnh sửa bảng giá bán, bổ sung thêm các trường thông tin sau:    * NPP điều chỉnh giá *[toggle]*:    + Nếu ON: Cho phép chỉnh sửa giá bán trên bảng giá, danh sách sản phẩm bổ sung 2 trường thông tin gồm:     - Giá tối thiểu áp dụng *[textbox]*:       * Mặc định giá bằng 0       * Chỉ nhập số nguyên dương     - Giá tối đa áp dụng *[textbox]*:       * Mặc định giá bằng 0       * Chỉ nhập số nguyên dương     - Lưu ý: Giá tối thiểu áp dụng *≤*Giá niêm yết *≤*Giá tối đa áp dụng   + Nếu OFF: Không cho phép chỉnh sửa giá bán trên bảng giá |

### Xem chi tiết bảng giá - Ghi nhận thiết lập NPP điều chỉnh giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Màn hình *"Xem chi tiết bảng giá"* |  | **1. Đường dẫn**: Dữ liệu nền > Sản phẩm > Bảng giá bán   **2. Mô tả**  Tại màn hình xem chi tiết, bổ sung thêm các trường thông tin sau:    * NPP điều chỉnh giá *[toggle, disable]*    + Nếu ON: Danh sách sản phẩm bổ sung 2 trường thông tin gồm:     - Giá tối thiểu áp dụng     - Giá tối đa áp dụng   + Nếu OFF: Danh sách sản phẩm không hiển thị 2 trường thông tin trên |

### Xem lịch sử cập nhật - Ghi nhận lịch sử thay đổi thiết lập NPP điều chỉnh giá

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Cập nhật lịch sử thiết lập NPP điểu chỉnh giá |  | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Giá mua → Chọn Tên bảng giá → Chọn tab Lịch sử cập nhật  **2. Mô tả:**  Tại tab Lịch sử cập nhật, hệ thống thực hiện ghi nhận lịch sử cho phần Thiết lập NPP điều chỉnh giá.   * Trường thông tin: **NPP điều chỉnh giá** * Nội dung cũ/Nội dung mới:   + Nếu ON thì hiển thị "**NPP điều chỉnh giá:** Cho phép điều chỉnh"   + Nếu OFF thì hiển thị "**NPP điều chỉnh giá:** Không cho phép điều chỉnh" |
| 2 | Cập nhật lịch sử chỉnh sửa giá |  | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Giá mua → Chọn Tên bảng giá → Chọn tab Lịch sử cập nhật → Thay đổi bảng giá & NPP  **2. Mô tả**   * Tại Lịch sử thay đổi bảng giá và NPP, hệ thống thực hiện ghi nhận lịch sử chỉnh sửa "Giá tối đa áp dụng" và "Giá tối thiểu áp dụng' * Table Thay đổi bảng giá và NPP - Bảng giá gốc cập nhật thêm cột: *Trường thông tin*, ghi nhận tên trường thông tin có chỉnh sửa giá gồm: *Giá niêm yết, Giá tối thiểu áp dụng, Giá tối đa áp dụng.* |

### Xem danh sách bảng giá bán

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Màn hình "Danh sách bảng giá" |  | **1. Đường dẫn:** Dữ liệu nền → Sản phẩm  → Bảng giá bán   **2. Mô tả:**  Đối với bảng giá được tạo bởi HO có trạng thái "Đã duyệt", hiển thị danh sách bảng giá của NPP được tạo ra từ bảng giá đó.   * Cho phép click vào mũi tên ở mỗi dòng để ẩn/hiện danh sách bảng giá của NPP. Mặc định ẩn. * Danh sách bảng giá của NPP gồm các trường thông tin:   + Mã bảng giá: Lấy theo thông tin của bảng giá tương ứng   + Tên bảng giá: Click vào tên bảng giá → hệ thống hiển thị màn hình **[Xem chi tiết bảng giá của NPP](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61166100#:~:text=%C4%91%E1%BB%8Bnh%20d%E1%BA%A1ng.%22-,Xem%20chi%20ti%E1%BA%BFt%20b%E1%BA%A3ng%20gi%C3%A1%C2%A0,-%23)**.   + Nhà phân phối: Click vào Nhà phân phối → hệ thống hiển thị màn hìnhXem chi tiết NPP.   + Trạng thái: Lấy theo thông tin của bảng giá tương ứng   + Ngày tạo: Lấy theo thông tin của bảng giá tương ứng   + Người tạo: Lấy theo thông tin của bảng giá tương ứng   + Ngày cập nhật: Lấy theo thông tin của bảng giá tương ứng   + Người cập: Lấy theo thông tin của bảng giá tương ứng |

### Import danh sách sản phẩm

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Popup Import |  | **1. Đường dẫn:**  **2. Mô tả:** Popup Import sản phẩm bao gồm:   * Nút **Lấy file mẫu**: Click vào nút → hệ thống thực hiện tải về template mẫu: , trong đó:   + Template chứa sẵn danh sách sản phẩm đã có trong bảng giá     - Danh sách sản phẩm đã có trong bảng giá hiển thị các thông tin: *Mã SKU, Tên sản phẩm*   + Trường hợp bảng giá không cho phép NPP điều chỉnh giá, template export bỏ các cột: *Giá bán lớn nhất, Giá bán nhỏ nhất* * Nút **Tải lên**: Người dùng chọn vào kéo thả file import vào ô "Chọn hoặc kéo file đến vị trí này" * Nút **Tiến hành xử lý**:   + Mặc định disable, enable khi có file được import   + Ràng buộc tối đa 10.000 dòng.   + Click vào nút -> nhấn nút "Tiến hành xử lý" để import file dữ liệu vào hệ thống. Chỉ cho phép import file excel.     - Nếu file không đúng định dạng, báo lỗi: *"File import không đúng định dạng. Vui lòng kiểm tra lại"*     - Nếu file không có dữ liệu, báo lỗi: "*File import không chứa dữ liệu."*   + Hệ thống thực hiện xử lý dữ liệu trong file import     - Nếu tất cả đều hợp lệ, hệ thống thực hiện thêm dữ liệu vào bảng giá theo quy tắc sau:       * Hệ thống chỉ thực hiện cập nhật giá trị tại trường Giá niêm yết (VND), Giá bán nhỏ nhất (nếu có), Giá bán lớn nhất (nếu có).     - Nếu có ít nhất 1 dữ liệu lỗi, hệ thống thực hiện show popup Chi tiết Import Giá bán sản phẩm - Trạng thái "Thất bại". |
| 2 | Popup *"Chi tiết Import Giá bán sản phẩm - Trạng thái "Thất bại""* |  | Thông tin Chi tiết Import Giá bán sản phẩm - Trạng thái "Thất bại" bao gồm:   * Số dòng hợp lệ: Tổng số dòng hợp lệ/Tổng số dòng dữ liệu trong file import. VD: 10/21 * Số dòng không hợp lệ: Tổng số dòng không hợp lệ/Tổng số dòng dữ liệu trong file import. VD: 11/21 * Danh sách dòng không hợp lệ:   + Dòng thứ: Hiển thị số thứ tự của dòng có lỗi trong file   + Mô tả lỗi: Mô tả lỗi của từng dòng tương ứng các trường hợp bên dưới.   + Phân trang theo 10; 50; 100.   Các trường hợp báo lỗi bao gồm:   * Nếu Mã SKU không tồn tại trong danh sách sản phẩm của bảng giá: "*Mã SKU không tồn tại trong danh sách sản phẩm của bảng giá."* * Nếu Giá niêm yết lớn hơn Giá bán lớn nhất hoặc nhỏ hơn Giá bán nhỏ nhất: *"Giá bán không nằm trong mức giá được phép chỉnh sửa."* * Nếu giá tại Giá niêm yết khác giá trị số nguyên dương: *"*Giá bán không đúng định dạng.**" |

### Export bảng giá bán

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | N/A | N/A | * Chỉ export bảng giá do HO tạo, không export bảng giá được tạo cho NPP áp dụng. * Dữ liệu export bảng giá bán bổ sung thêm các thông tin sau:   + Loại bảng giá: Bảng giá điều chỉnh/Bảng giá không điều chỉnh     - Nếu bảng giá cho phép NPP điều chỉnh giá, hiển thị "Bảng giá điều chỉnh"     - Nếu bảng giá không cho phép NPP điều chỉnh giá, hiển thị "Bảng giá không điều chỉnh"   + Giá bán tối đa: Hiển thị giá tối đa áp dụng của sản phẩm ứng với bảng giá đó   + Giá bán tối thiểu: Hiển thị giá tối thiểu áp dụng của sản phẩm ứng với bảng giá đó * Template export mới: <https://docs.google.com/spreadsheets/d/1tWLS3xYv7F9KxpPHQzVghi5JfPil9xaf/edit?gid=1396474757#gid=1396474757> |