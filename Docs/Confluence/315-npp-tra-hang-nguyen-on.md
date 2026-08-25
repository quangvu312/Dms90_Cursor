|  |  |
| --- | --- |
| Target release | Release name or number |
| US |  |
| Version | trueYellow1.0.2 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Lịch sử tài liệu**

3

## **Description**

### State Diagram

trueTrả hàng nguyên đơn 9cD5lszwljl9iMBG41tE1false700autotop66541954true

### Workflow

trueTrả hàng nguyên đơn 1false700autotop66541954true

## **Requirements**

### Xem danh sách phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn | N/A | Quản lý bán hàng → NPP Trả hàng nguyên đơn |
| Màn hình danh sách phiếu trả hàng công ty |  | Màn hình danh sách phiếu trả hàng công ty hiển thị tất cả danh sách phiếu trả hàng công ty của NPP trực thuộc HO, bao gồm các thông tin:   * Thông tin tìm kiếm:   + - Tìm kiếm theo Mã trả hàng: tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Trạng thái:        * Gồm các trạng thái {Chờ duyệt/Đã duyệt/Đã từ chối}.       * Mặc định chọn Chờ duyệt, và Đã duyệt.       * Cho phép chọn nhiều trạng thái.       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Nhà phân phối:        * Khi nhấn vào sẽ load hết danh sách NPP đang còn ở trạng thái hoạt động trực thuộc HO, danh sách hiển thị với các thông tin gồm Mã NPP - Tên NPP.       * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên NPP.       * Cho phép chọn nhiều NPP       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.       * Mặc định trống.     - Ngày trả hàng: Cho phép chọn Từ ngày - Đến ngày: mặc định trống     - Tìm kiếm: khi nhấn vào sẽ tìm kiếm dữ liệu theo các thông tin được nhập/chọn. * Danh sách phiếu trả hàng hiển thị danh sách theo điều kiện tìm kiếm, sắp xếp theo theo ngày tạo mới nhất trước, có phân trang theo {10, 50, 100}, có các thông tin gồm:    + - Mã trả hàng: khi nhấn vào hiển thị màn hình xem chi tiết phiếu trả hàng công ty     - Ngày trả hàng: hiển thị theo định dạng dd-mm-yyyy     - Nhà phân phối:       * Hiển thị theo Mã NPP - Tên NPP       * Là NPP tạo phiếu trả hàng công ty     - Trạng thái: Chờ duyệt/Đã duyệt/Đã từ chối     - Ngày tạo: theo định dạng dd-mm-yyyy h24:mi:ss     - Ngày cập nhật: theo định dạng dd-mm-yyyy h24:mi:ss     - Người tạo: hiển thị username của người tạo     - Người cập nhật: hiển thị username của người cập nhật gần nhất     - Button Duyệt: Chỉ hiển thị khi ở trạng thái **Chờ duyệt**     - Button Từ chối: Chỉ hiển thị khi ở trạng thái **Chờ duyệt** |

### Xem chi tiết phiếu trả hàng công ty

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | Đường dẫn |  | Bán hàng → NPP Trả hàng → Click vào 1 mã trả hàng bất kì tại danh sách Trả hàng Công ty |
| 1 | Popup Xem chi tiết phiếu trả hàng công ty |  | Popup xem chi tiết phiếu trả hàng công ty bao gồm các thông tin sau:   * Ngày trả hàng * Nhà phân phối: nhà phân phối trả hàng * Kho * Kênh * Trạng thái: Chờ duyệt/Đã duyệt/Đã từ chối * Lý do từ chối: Chỉ hiển thị nếu trạng thái của phiếu là Đã từ chối * Danh sách sản phẩm   + Mã SKU   + Tên sản phẩm   + Số lượng   + Đơn vị tính   + hông tin lô: Click vào icon Xem → hiển thị popup Thông tin lô bao gồm:     - Số lượng     - Số lô     - Hạn sử dụng     - Nút Đóng: Click vào nút → thực hiện đóng popup Thông tin lô * Nút Đóng: Nhấn vào nút → hệ thống thực hiện đóng popup xem chi tiết phiếu trả hàng |

### Duyệt phiếu trả hàng công ty

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Bán hàng → NPP Trả hàng -> Chọn nút Duyệt một phiếu trả hàng công ty trên danh sách |
| Duyệt phiếu trả hàng công ty |  | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu trả hàng công ty" ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * Chuyển trạng thái đơn hàng sang **Đã duyệt**.       * Cập nhật trạng thái **Đã duyệt** cho phiếu trả hàng công ty tại danh sách trả hàng công ty của NPP trả hàng.       * Revert ngân sách CTKM nếu có.       * Cập nhật thông tin tồn kho của NPP theo **Quy tắc cập nhật tồn kho sau khi HO duyệt phiếu**     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt đơn hàng có trạng thái Khởi tạo |

### Từ chối phiếu trả hàng công ty

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Bán hàng → NPP Trả hàng  -> Chọn nút Từ chối một phiếu trả hàng công ty trên danh sách |
|  | N/A | Khi nhấn vào hệ thống thực hiện xử lý:   * Xử lý: Hiển thị popup Xác nhận từ chối phiếu trả hàng công ty ngay trên nút:   + Nếu đồng ý: Hiển thị popup nhập Lý do từ chối và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất: Hệ thống thực hiện cập nhật trạng thái phiếu trả hàng công ty sang **Đã từ chối**     - Nhấn Từ chối: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được từ chối phiếu trả hàng công ty có trạng thái Chờ duyệt |

### **Quy tắc cập nhật tồn kho sau khi HO duyệt phiếu**

Sau khi duyệt phiếu trả hàng công ty thành công, hệ thống thực hiện cập nhật tồn kho theo quy tắc sau:

* Trừ số lượng "Tồn kho" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu trả hàng công ty
* Trừ số lượng "Tạm giữ" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu trả hàng công ty

Ví dụ:

Với thông tin đơn hàng, phiếu trả hàng công ty và tồn kho sau khi tạo phiếu trả hàng công ty tại portal NPP **(xem tại đây)**, sau khi áp dụng **Quy tắc cập nhật tồn kho sau khi HO duyệt phiếu**, ta có thông tin tồn kho như sau:

| Tên sản phẩm | Đơn vị tính | Tồn kho | Tạm giữ | Có sẵn | Thông tin ngày nhập và lô | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ngày nhập | Số lượng nhập | Số lô | Ngày hết hạn | Tồn kho | Tạm giữ | Có sẵn |
| SP 01 | gói | 630 | 500 | 230 | 1/11 | 170 | LO1 | 1-1-2025 | **150 (170 - 20)** | **150 (170 - 20)** | 0 |
| 2/11 | 100 | LO2 | 1-1-2026 | 100 | 100 | 0 |
| 3/11 | 230 | LO1 | 1-1-2025 | **50 (230 - 180)** | **0 (180 - 180)** | 50 |
| 5/11 | 200 | LO2 | 1-1-2026 | **150 (200 - 50)** | **70 (120 - 50)** | 80 |
| 9/11 | 300 | LO3 | 1-1-2027 | **280 (300 - 20)** | **180 (200 - 20)** | 100 |

### **Quy tắc cập nhật tồn kho sau khi HO từ chối phiếu**

Sau khi từ chối phiếu trả hàng công ty, hệ thống thực hiện trả lại số lượng sản phẩm Tạm giữ trong tồn kho theo quy tắc sau:

* Cộng số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu trả hàng công ty
* Trừ số lượng "Tạm giữ" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu trả hàng công ty

Ví dụ:

Với thông tin đơn hàng, phiếu trả hàng công ty và tồn kho sau khi tạo phiếu trả hàng công ty tại portal NPP **(xem tại đây)**, sau khi áp dụng **Quy tắc cập nhật tồn kho sau khi HO duyệt phiếu**, ta có thông tin tồn kho như sau:

| Tên sản phẩm | Đơn vị | Tồn kho | Tạm giữ | Có sẵn | Thông tin ngày nhập và lô | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP 01 | gói | 1000 | 770 | 230 | 1/11 | 170 | LO1 | 1-1-2025 | 170 | **150 (170 - 20)** | **0 (0 + 20)** |
| 2/11 | 100 | LO2 | 1-1-2026 | 100 | 100 | 0 |
| 3/11 | 230 | LO1 | 1-1-2025 | 230 | **0 (180 - 180)** | **230 (180 + 50)** |
| 5/11 | 200 | LO2 | 1-1-2026 | 200 | **70 (120 - 50)** | **130 (80 + 50)** |
| 9/11 | 300 | LO3 | 1-1-2027 | 300 | **180 (200 - 20)** | **120 (100 + 20)** |