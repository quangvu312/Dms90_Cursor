|  |  |
| --- | --- |
| Target release | Release name or number |
| US |  |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Lịch sử tài liệu**

3

## **Description**

### State Diagram

truetrạng tháifalseautotoptrue9721

### Workflow

trueworkflowfalseautotoptrue12091

## **Requirements**

### 1. Xem danh sách phiếu chuyển kho nội bộ NPP

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn | N/A | Kho → Duyệt chuyển kho nội bộ NPP |
| Màn hình danh sách phiếu chuyển kho nội bộ NPP |  | Màn hình danh sáchchuyển kho nội bộ NPP hiển thị tất cả phiếu chuyển kho nội bộ NPP trực thuộc HO, có trạng thái = "Chờ duyệt", "Đã duyệt", "Đã từ chối", bao gồm các thông tin:   * Thông tin tìm kiếm:   + - Tìm kiếm theo Mã phiếu chuyển kho: tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Trạng thái:        * Gồm các trạng thái {Chờ duyệt/Đã duyệt/Đã từ chối}.       * Mặc định chọn Chờ duyệt, và Đã duyệt.       * Cho phép chọn nhiều trạng thái.       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Nhà phân phối:        * Cho phép tìm kiếm nhiều nhà phân phối       * Tính năng select filter NPP xem tại đây: **[[IMPROVEMENT] Enhance chức năng select all cho selectbox chọn NPP trên các màn hình](https://kb.finviet.com.vn/pages/viewpage.action?pageId=79908234)**     - Kho chuyển       * Mặc định trống       * Chỉ được phép chọn một       * Hệ thống thực hiện lấy dữ liệu tất cả kho trong hệ thống.       * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên/loại kho hệ thống       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu.     - Kênh chuyển:       * Giá trị mặc định là "Trống"       * Click chọn vào Dropdown Kênh bán hàng -> Hệ thống popup dropdown danh sách Kênh bán hàng còn hoạt động       * Người dùng tìm kiếm kênh bán hàng theo tên kênh bán hàng       * Chỉ được chọn 1 kênh bán hàng     - Kho nhận       * Mặc định trống       * Chỉ được phép chọn một       * Hệ thống thực hiện lấy dữ liệu tất cả kho trong hệ thống.       * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên/loại kho hệ thống       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu.     - Kênh nhận:       * Giá trị mặc định là "Trống"       * Click chọn vào Dropdown Kênh bán hàng -> Hệ thống popup dropdown danh sách Kênh bán hàng còn hoạt động       * Người dùng tìm kiếm kênh bán hàng theo tên kênh bán hàng       * Chỉ được chọn 1 kênh bán hàng     - Ngày chuyển kho: Cho phép chọn Từ ngày - Đến ngày, mặc định trống     - Tìm kiếm: khi nhấn vào sẽ tìm kiếm dữ liệu theo các thông tin được nhập/chọn. * Danh sách phiếu chuyển kho nội bộ hiển thị danh sách theo điều kiện tìm kiếm, sắp xếp theo theo ngày tạo mới nhất trước, có phân trang theo {10, 50, 100}, có các thông tin gồm:    + - Mã chuyển kho: khi nhấn vào hiển thị màn hình xem chi tiết phiếu chuyển kho nội bộ     - Ngày chuyển: hiển thị theo định dạng dd-mm-yyyy     - Nhà phân phối:       * Hiển thị theo Mã NPP - Tên NPP       * Là NPP tạo phiếu chuyển kho nội bộ     - Kho chuyển: Hiển thị tên kho chuyển     - Kênh bán hàng kho chuyển: Hiển thị tên kênh bán hàng của kho chuyển     - Kho nhận: Hiển thị tên kho nhận     - Kênh bán hàng kho nhận: Hiển thị tên kênh bán hàng của kho chuyển     - Trạng thái: Chờ duyệt/Đã duyệt/Đã từ chối     - Lý do:        * Hiển thị lý do từ chối       * Hiển thị tối đa 20 ký tự       * Hover vào sẽ hiển thị tooltips nội dung đầy đủ     - Ngày tạo: theo định dạng dd-mm-yyyy h24:mi:ss     - Ngày cập nhật: theo định dạng dd-mm-yyyy h24:mi:ss     - Người tạo: hiển thị username của người tạo     - Người cập nhật: hiển thị username của người cập nhật gần nhất     - Button Duyệt: Chỉ hiển thị khi ở trạng thái **Chờ duyệt**     - Button Từ chối: Chỉ hiển thị khi ở trạng thái **Chờ duyệt** |

### 2. Xem chi tiết phiếu chuyển kho nội bộ

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Ngày chuyển kho | Date Picker | Hiển thị ngày chuyển kho |
| Kho chuyển | Auto Complete | Hiển thị kho chuyển |
| Kênh bán hàng kho chuyển | Auto Complete | Hiển thị kênh bán hàng của kho chuyển |
| Kho nhận | Auto Complete | Hiển thị kho nhận |
| Kênh bán hàng kho nhận | Auto Complete | Hiển thị kênh bán hàng của kho nhận |
| Trạng thái | Badge | Hiển thị trạng thái dưới dạng tag |
| Lý do từ chối | Text | Chỉ hiển thị với phiếu có trạng thái là "Đã từ chối" |
| Danh sách sản phẩm | Table | HIển thị theo format được define dưới đây |
| Nút "Đóng" | Button | Nhấn nút "Đóng" → hệ thống đóng popup "Xem phiếu chuyển kho" |

**Mô tả Danh sách sản phẩm**

|  |  |  |
| --- | --- | --- |
| Mã SKU | Text | Hiển thị SKU |
| Tên sản phẩm | Text | Hiển thị Tên sản phẩm |
| Số lượng | Text | Hiển thị số lượng |
| Đơn vị tính | Text | Hiển thị đơn vị tính |
| Thông tin lô | Icon button | Nhấn vào nút "Xem" → hệ thống mở popup "Xem thông tin lô" |

**Mô tả thông tin lô**

|  |  |  |
| --- | --- | --- |
| Số lượng | Text | Hiển thị số lượng |
| Số lô | Text | Hiển thị số lô |
| Hạn sử dụng | Text | Hiển thị định dạng DD-MM-YYYY |
| Nút Đóng | Button | Nhấn nút đóng → hệ thống đóng popup "Xem thông tin lô" |

### 3. Duyệt phiếu chuyển kho nội bộ

| Title | User interaction and wireframe | cóDescription |
| --- | --- | --- |
| Đường dẫn |  | Đường dẫn: Kho -> Chuyển kho nội bộ NPP -> Chọn nút Duyệt một phiếu chuyển kho trên danh sách |
| Duyệt phiếu chuyển kho nội bộ |  | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu chuyển kho nội bộ" ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * **Kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**       * Chuyển trạng thái phiếu chuyển kho sang **Đã duyệt**.       * Cập nhật lại tồn của kho chuyển & kho nhận theo **[Quy tắc cập nhật tồn kho sau khi duyệt phiếu chuyển kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFcc%E1%BA%ADpnh%E1%BA%ADtt%E1%BB%93nkhosaukhiduy%E1%BB%87tphi%E1%BA%BFuchuy%E1%BB%83nkho)**     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt đơn hàng có trạng thái Chờ duyệt |

### 4. Từ chối phiếu chuyển kho nội bộ

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Kho ->  Chuyển kho nội bộ → Chọn nút Từ chối một phiếu chuyển kho trên danh sách |
|  | N/A | Để Từ chối phiếu chuyển Kho, người dùng nhấn chọn nút Từ chối phiếu chuyển kho trên danh sách. Hệ thống thực hiện xử lý:   * Hiển thị popup **Xác nhận từ chối phiếu chuyển kho**:   + Nếu đồng ý: Hiển thị popup nhập Lý do từ chối và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Độ dài tối đa: 200 ký tự     - Nhấn Đồng ý: Hệ thống thực hiện       * Cập nhật trạng thái phiếu chuyển kho sang **Đã từ chối**       * Thực hiện Revert lại số lượng Tạm giữ & Có sẵn trong Kho Chuyển     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được hủy phiếu chuyển kho có trạng thái Chờ duyệt |

## **Rules**

### 1. Quy tắc cập nhật tồn kho sau khi HO duyệt phiếu

|  |  |  |
| --- | --- | --- |
| Phiếu chuyển kho được duyệt | 1. **Bước 1: Hệ thống thực hiện quy đổi đơn vị tính từng dòng sản phẩm trong phiếu chuyển kho** 2. **Bước 2: Hệ thống thực hiện xuất số lượng sản phẩm ở kho, kênh chuyển**    1. Hệ thống trừ số lượng vừa tính được vào Tồn kho và Tạm giữ của sản phẩm    2. Hệ thống thực hiện kiểm tra *Số lô và Hạn sử dụng* của từng dòng sản phẩm, trừ số lượng vừa tính được vào Tồn kho và Tạm giữ theo lô tương ứng 3. **Bước 3: Hệ thống thực hiện nhập số lượng sản phẩm vào kho, kênh nhận**    1. Nếu sản phẩm tồn tại       1. Hệ thống cộng số lượng vừa tính được vào Tồn kho & Có sẵn của sản phẩm như trên phiếu chuyển kho.       2. Hệ thống thực hiện kiểm tra *Số lô, Hạn sử dụng & Ngày nhập* của từng dòng sản phẩm          1. Nếu trùng Sô lô, Hạn sử dụng & Ngày nhập hàng → Cộng số lượng tồn kho & có sẵn như trên phiếu chuyển kho.          2. Ngược lại, thêm mới 1 dòng dữ liệu nhập hàng tương ứng    2. Nếu sản phẩm chưa tồn tại,  thực hiện thêm thông tin sản phẩm, thông tin lô như trên phiếu chuyển kho | Giảm số lượng sản phẩm & lô trong kho Chuyển  Tăng số lượng sản phẩm & lô trong kho Nhận |

**Thông tin đầu vào:**

Ví dụ: Phiếu chuyển kho PCK01

* NPP: HO
* Kho chuyển: Kho hàng bán
* Kho nhận: Kho hàng khuyến mãi
* Ngày chuyển kho : 16/11/2024
* Danh sách sản phẩm chuyển kho:

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Số lượng chuyển** | **Thông tin lô** | | | |
| **Đơn vị tính** | **Số lượng chuyển** | **Số lô** | **Hạn sử dụng** |
| P001 | Sản phẩm A | 15 | thùng | 15 | P1L001 | 1/1/2028 |
| P002 | Sản phẩm B | 10 | thùng | 7 | P2L001 | 1/1/2028 |
| 3 | P2L002 | 1/1/2029 |
| P003 | Sản phẩm C | 200 | thùng | 80 | P3L001 | 1/1/2028 |
| 50 | P3L002 | 1/1/2030 |
| 70 | P3L003 | 1/1/2028 |

Note: lon là đơn vị cơ bản; thùng là đơn vị quy đổi (1 thùng = 10 lon)

**Quy trình xử lý:**

**Thông tin hiện tại trong kho chuyển**

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | | | |
| **Ngày nhập hàng** | **Đơn vị tính** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Số lô** | **Hạn sử dụng** |
| P001 | Sản phẩm A | 800 | 200 | 600 | 1/11/2024 | lon | 800 | 200 | 600 | P1L001 | 1/1/2028 |
| P002 | Sản phẩm B | 500 | 100 | 400 | 3/11/2024 | lon | 250 | 70 | 180 | P2L001 | 1/1/2029 |
| 6/11/2024 | 250 | 30 | 220 | P2L002 | 1/1/2028 |
| P003 | Sản phẩm C | 3000 | 2200 | 800 | 8/11/2024 | lon | 800 | 800 | 0 | P3L001 | 1/1/2028 |
| 9/11/2024 | 800 | 600 | 200 | P3L002 | 1/1/2030 |
| 11/11/2024 | 200 | 0 | 200 | P3L001 | 1/1/2028 |
| 15/11/2024 | 1200 | 800 | 400 | P3L003 | 1/1/2028 |

**Bước 1: Hệ thống thực hiện chuyển *đơn vị tính* của từng dòng sản phẩm trong phiếu chuyển kho**

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Số lượng chuyển** | **Thông tin lô** | | | |
| **Đơn vị tính** | **Số lượng chuyển** | **Số lô** | **Hạn sử dụng** |
| P001 | Sản phẩm A | 150 | lon | 150 | P1L001 | 1/1/2028 |
| P002 | Sản phẩm B | 100 | lon | 70 | P2L001 | 1/1/2028 |
| 30 | P2L002 | 1/1/2029 |
| P003 | Sản phẩm C | 2000 | lon | 800 | P3L001 | 1/1/2028 |
| 500 | P3L002 | 1/1/2030 |
| 700 | P3L003 | 1/1/2028 |

**Bước 2: Hệ thống thực hiện trừ tồn kho sản phẩm & lô tương ứng trong kho chuyển**

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | | | | **Giải thích chi tiết** |
| **Ngày nhập hàng** | **Đơn vị tính** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Số lô** | **Hạn sử dụng** |
| P001 | Sản phẩm A | 650 (800 - 150) | 50 (200-150) | 600 | 1/11/2024 | lon | 650 (800 - 150) | 50 (200-150) | 600 | P1L001 | 1/1/2028 | **Trừ tồn kho & Tạm giữ** của **lô P1L001** đi **150** sản phẩm A trong phiếu chuyển kho |
| P002 | Sản phẩm B | 400 (500 - 100) | 0 (100-100) | 400 | 3/11/2024 | lon | 180 (250 - 70) | 0 (70-70) | 180 | P2L001 | 1/1/2029 | **Trừ tồn kho & Tạm giữ** của **lô P2L001** đi **70** sản phẩm B trong phiếu chuyển kho |
| 6/11/2024 | 220 (250-30) | 0 (30-30) | 220 | P2L002 | 1/1/2028 | **Trừ tồn kho & Tạm giữ** của **lô P2L002** đi **30** sản phẩm B trong phiếu chuyển kho |
| P003 | Sản phẩm C | 1000 (3000-2000) | 200 (2200-2000) | 800 | 8/11/2024 | lon | 0 (800 - 800) | 800 (800 - 800) | 0 | P3L001 | 1/1/2028 | **Ở lô sản phẩm C lô P3L001**  **Trừ tồn kho & Tạm giữ** của **lô P3L001 - HSD 1/1/2028 có đến 2 dòng nhập hàng**→ Ưu tiên trừ tồn kho dữ liệu có ngày nhập hàng xa nhất |
| 9/11/2024 | 300 (800 - 500) | 100 (600-500) | 200 | P3L002 | 1/1/2030 | **Trừ tồn kho & Tạm giữ** của **lô P3L002** đi **500** sản phẩm C trong phiếu chuyển kho |
| 11/11/2024 | 200 | 0 | 200 | P3L001 | 1/1/2028 | - |
| 15/11/2024 | 500 (1200-700) | 100 (800-700) | 400 | P3L003 | 1/1/2028 | **Trừ tồn kho & Tạm giữ** của **lô P3L003** đi **700** sản phẩm C trong phiếu chuyển kho |

**Thông tin hiện tại trong kho nhận**

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | | |
| **Ngày nhập hàng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Số lô** | **Hạn sử dụng** |
| P004 | Sản phẩm D | 5 | 5 | 0 | 1/11/2024 | 5 | 5 | 0 | P1L001 | 1/1/2028 |
| P002 | Sản phẩm B | 100 | 50 | 50 | 3/11/2024 | 80 | 30 | 50 | P2L001 | 1/1/2029 |
| 16/11/2024 | 20 | 0 | 20 | P2L002 | 1/1/2029 |
| P003 | Sản phẩm C | 300 | 100 | 200 | 8/11/2024 | 100 | 20 | 80 | P3L001 | 1/1/2028 |
| 9/11/2024 | 80 | 60 | 20 | P3L002 | 1/1/2030 |
| 15/11/2024 | 120 | 20 | 100 | P3L004 | 1/1/2028 |

**Bước 3: Hệ thống thực hiện cộng tồn kho sản phẩm và lô tương ứng trong kho nhận**

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | | | **Giải thích chi tiết** |
| **Ngày nhập hàng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Số lô** | **Hạn sử dụng** |
| P004 | Sản phẩm D | 5 | 5 | 0 | 1/11/2024 | 5 | 5 | 0 | P1L001 | 1/1/2028 | - |
| P002 | Sản phẩm B | 200 | 50 | 150 | 3/11/2024 | 80 | 30 | 50 | P2L001 | 1/1/2029 | - |
| 16/11/2024 | 70 | 0 | 70 | P2L001 | 1/1/2028 | Vì lô P2L001 khác ngày nhập hàng và HSD nên tạo ra 1 dữ liệu nhập hàng mới |
| 16/11/2024 | 50 (20+30) | 0 | 50 | P2L002 | 1/1/2029 | Vì Sản phẩm B - lô P2L002 trùng ngày nhập hàng, số lô, hạn sử dụng → thực hiện cộng số lượng chuyển kho thay vì tạo ra 1 dữ liệu nhập hàng mới |
| P003 | Sản phẩm C | 2300 | 100 | 2200 | 8/11/2024 | 100 | 20 | 80 | P3L001 | 1/1/2028 | - |
| 9/11/2024 | 80 | 60 | 20 | P3L002 | 1/1/2030 | - |
| 15/11/2024 | 120 | 20 | 100 | P3L004 | 1/1/2028 | - |
| 16/11/2024 | 800 | 0 | 800 | P3L001 | 1/1/2028 | Thêm 3 dòng dữ liệu nhập hàng tương ứng từ phiếu chuyển kho |
| 16/11/2024 | 500 | 0 | 500 | P3L002 | 1/1/2030 |
| 16/11/2024 | 700 | 0 | 700 | P3L003 | 1/1/2028 |
| P001 | Sản phẩm A | 150 | 0 | 150 | 16/11/2024 | 150 | 0 | 150 | PL1001 | 1/1/2028 | Vì sản phẩm A chưa tồn tại, thêm sản phẩm A & lô tương ứng từ phiếu chuyển kho |

### 2. Quy tắc cập nhật tồn kho sau khi HO từ chối phiếu

Sau khi từ chối phiếu chuyển kho nội bộ, hệ thống thực hiện trả lại số lượng sản phẩm Tạm giữ trong tồn kho của kho, kênh chuyển theo quy tắc sau:

* Cộng số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu chuyển kho nội bộ
* Trừ số lượng "Tạm giữ" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu chuyển kho nội bộ