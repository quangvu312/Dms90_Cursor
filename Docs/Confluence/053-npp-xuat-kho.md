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

### **Xem danh sách xuất kho nha**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Bán hàng → Xuất kho |
| Màn hình *Danh sách xuất kho* |  | Màn hình danh sách xuất kho bao gồm:   * Tìm kiếm   + Tìm kiếm theo Mã xuất kho : tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Trạng thái     - Gồm các trạng thái {Khởi tạo/Đã duyệt/Đã hủy}.     - Mặc định trống     - Cho phép chọn nhiều trạng thái.     - Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Ngày xuất kho [datepicker]: Từ ngày - đến ngày     - Đến ngày chỉ được chọn lớn hơn hoặc bằng Từ ngày   + Nút Tìm kiếm: Click vào nút -> thực hiện tìm kiếm theo điều kiện lọc  * Nút Tạo mới: Click vào nút -> hiển thị popup Tạo mới phiếu xuất kho * Danh sách bao gồm:   + Mã xuất kho :     - Click vào mã xuất kho  -> hiển thị màn hình Xem chi tiết phiếu xuất kho     - Khi nhấn vào hiển thị màn hình xem chi tiết đơn hàng bán, tự động generate theo format SOxxxxxxx (trong đó <xxxxxxx>: là dãy số tự nhiên và tăng dần đều)   + Ngày xuất kho   + Trạng thái: bao gồm Khởi tạo/Đã duyệt/Đã huỷ   + Ngày tạo: theo format dd-mm-yyyy hh:mm:ss   + Ngày cập nhật: hiển thị thời gian cập nhật gần nhất, theo format dd-mm-yyyy hh:mm:ss   + Người tạo: hiển thị username của tài khoản   + Người cập nhật: hiển thị username của tài khoản   + Phân trang theo {10; 50; 100}   + Nút Duyệt: Chỉ hiện thị ở đơn hàng có trạng thái “Khởi tạo”   + Nút Từ chối: Chỉ hiển thị ở đơn hàng có trạng thái “Khởi tạo”   + Nút Chỉnh sửa: Chỉ hiện thị ở đơn hàng có trạng thái "Khởi tạo" |

### **Tạo mới phiếu xuất kho**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Đường dẫn: Bán hàng → Xuất kho → Chọn nút Tạo mới |
| Popup *Tạo mới phiếu xuất kho* | *Popup*Tạo mới phiếu xuất kho    *Popup*Chọn đơn hàng      *Popup*Thông tin lô | * Ngày xuất kho [datepicker]:   + Bắt buộc nhập   + Mặc định autofill ngày hiện tại, cho phép chỉnh sửa  * Kho [dropdown]   + Bắt buộc chọn   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của  trường Kho hệ thống trong Core Kho DMS   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kho hệ thống   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Kênh bán hàng [dropdown]   + Bắt buộc chọn.   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của trường Tên kênh bán hàng tại màn hình chức năng Kênh bán hàng   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kênh bán hàng   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Danh sách đơn hàng   + Tìm kiếm:     - Click vào searchbox → hệ thống hiển thị popup kết quả tìm kiếm gồm các đơn hàng thỏa mãn các điều kiện:        * Ngày đặt hàng của đơn hàng sell-out trước hoặc bằng ngày xuất kho đươc chọn trên phiếu       * Kho của đơn hàng trùng với Kho được chọn trên phiếu       * Kênh bán hàng của đơn hàng trùng với Kênh bán hàng được chọn trên phiếu       * Đơn hàng có trạng thái "Đã duyệt"       * Đơn hàng không nằm trong phiếu xuất kho trạng thái "Khởi tạo"/"Đã duyệt" nào     - Khi input keyword tìm kiếm -> Tìm kiếm like theo Mã đơn hàng (tối đa 200 ký tự dạng string), mặc định trống     - Phải có ít nhất một đơn hàng     - Popup kết quả tìm kiếm bao gồm:        * Checkbox       * Mã đơn hàng       * Mã điểm bán       * Tên điểm bán       * Ngày đặt hàng       * Nút Đóng: Click vào đây -> đóng bảng kết quả tìm kiếm và xóa keyword trong field Tìm kiếm       * Nút Hoàn tất: Click vào đây -> đóng bảng kết quả tìm kiếm và thêm các đơn hàng đã chọn vào danh sách đơn hàng trên phiếu xuất.  * + Danh sách đơn hàng bao gồm:     - Mã đơn hàng     - Mã điểm bán     - Tên điểm bán     - Ngày đặt hàng     - Nút Xóa: Click vào nút → hệ thống thực hiện       * Xóa đơn hàng khỏi danh sách       * Tự động cập nhật lại danh sách sản phẩm * Danh sách sản phẩm hiển thị tất cả sản phẩm có trong các đơn hàng đã được chọn. Hệ thống thực hiện gộp các sản phẩm giống nhau trong các đơn hàng theo **Quy tắc gộp sản phẩm**. Danh sách bao gồm các thông tin:   + Mã SKU   + Tên sản phẩm   + Số lượng:   + Đơn vị tính   + Thông tin lô: bắt buộc nhập, Click vào nút → hiển thị popup bao gồm các lô có trong kho & kênh bán hàng được chọn tại trường *Kho* & *Kênh bán hàng*:     - Số lượng:       * Autofill số lượng sản phẩm của lô theo **Quy tắc cộng số lượng sản phẩm các lô**       * Nếu phiếu xuất kho **có nhiều đơn hàng**, không cho phép chỉnh sửa       * Nếu phiếu xuất kho **có 1 đơn hàng**, thì cho phép chỉnh sửa trường *"Số lượng"*, chỉ được nhập bé hơn hoặc bằng Tồn kho     - Tồn kho : Hiển thị theo **Quy tắc tính tồn kho tại Thông tin lô**     - Số lô     - Hạn sử dụng     - Nút Đóng     - Nút Hoàn tất: Click vào nút → hệ thống thực hiện kiểm tra       * Tổng số lượng được nhập từ các dòng lô phải bằng số lượng sản phẩm được nhập ở màn hình danh sách sản phẩm, nếu không báo lỗi *"Tổng số lượng sản phẩm phải bằng số lượng sản phẩm ngoài danh sách."*       * Nếu số lượng lớn hơn tồn kho, báo lỗi: *"Số lượng không được lớn hơn Tồn kho"* * Nút Đóng: Click vào nút → hệ thống hiển thị popup yêu cầu xác nhận   + Nếu chọn Đồng ý: Hệ thống thực hiện đóng popup tạo mới và trở về màn hình danh sách xuất kho   + Nếu chọn Hủy: Hệ thống thực hiện đóng popup xác nhận * Nút Lưu: Khi nhấn lưu hệ thống thực hiện kiểm tra và xử lý:   + Kiểm tra:     - Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.     - Thực hiên tính lại cột *Tồn kho* trong Thông tin lô theo **Quy tắc tính tồn kho tại Thông tin lô,**nếu số lượng lớn hơn tồn kho mới, báo lỗi: *"Số lượng từng lô không được lớn hơn Tồn kho".*     - ***Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)***   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý:       * + Hệ thống thực hiện tạo dòng dữ liệu phiếu xuất kho với trạng thái **Khởi tạo**.         + Thực hiện cập nhật tồn kho theo **Quy tắc cập nhật tồn kho sau khi tạo phiếu xuất kho**.     - Nếu đóng: thực hiện đóng popup xác nhận. |

### **Chỉnh sửa phiếu xuất kho**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Đường dẫn: Bán hàng → Xuất kho → Chọn nút Chỉnh sửa một phiếu trả hàng trên danh sách |
| Popup *Chỉnh sửa phiếu xuất kho* |  | Cập nhật phiếu xuất kho hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:   * + "**Tạo mới phiếu xuất kho**" đổi thành "**Cập nhật phiếu xuất kho**".   + Khi cập nhật sẽ cho phép sửa hết toàn bộ thông tin phiếu xuất.   + Sau khi nhấn Lưu     - Hệ thống Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)     - hệ thống thực hiện cập nhật lại tồn kho theo như cập nhật đơn hàng bán sell-out. **Xem tại đây** |

### **Duyệt phiếu xuất kho**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> xuất kho  -> Chọn nút Duyệt một phiếu xuất kho trên danh sách |
| Duyệt phiếu xuất kho | N/A | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu xuất kho" ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * Chuyển trạng thái phiếu xuất kho sang **Đã duyệt**       * Chuyển trạng thái đơn hàng sang **Đã xuất kho**.       * Cập nhật kho của NPP     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt đơn hàng có trạng thái Khởi tạo  **Quy tắc cập nhật tồn kho khi duyệt phiếu xuất kho**   1. Hệ thống thực hiện kiểm tra Kho và Kênh bán hàng trong phiếu xuất kho và thực hiện cập nhật tồn kho theo Kho và Kênh tương ứng 2. *Hệ thống thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)* 3. Hệ thống thực hiện *đơn vị tính* của từng dòng sản phẩm    1. Nếu **Đơn vị tính là đơn vị cơ bản**: Trừ trực tiếp số lượng sản phẩm trên phiếu xuất kho vào Tồn kho và Tạm giữ của sản phẩm    2. Nếu **Đơn vị tính là đơn vị quy đổi** của sản phẩm:       * Bước 1: Thực hiện quy đổi sang đơn vị cơ bản theo công thức: Số lượng theo đơn vị cơ bản = Số lượng theo đơn vị quy đổi \* Giá trị quy đổi       * Bước 2: Trừ số lượng vừa tính được vào Tồn kho và Tạm giữ của sản phẩm 4. Hệ thống thực hiện kiểm tra *Số lô và Hạn sử dụng* của từng dòng sản phẩm     1. Quy đổi số lượng của từng lô sang đơn vị cơ bản (nếu có)    2. Trừ số lượng vừa tính được vào Tồn kho và Tạm giữ theo lô tương ứng   Ví dụ:   * Phiếu xuất kho có thông tin danh sách sản phẩm như sau:   Kho: Kho hàng bán  Kênh bán hàng: Kênh MT   |  | Mã SKU | Tên sản phẩm | Số lượng | Đơn vị tính | Thông tin lô | | | | --- | --- | --- | --- | --- | --- | --- | --- | | **Số lượng** | **Số lô** | **Hạn sử dụng** | | 1 | SP02 | Sản phẩm B | 1500 | thùng | 1500 | B01 | 1-1-2028 | | 2 | SP01 | Sản phẩm A (1) | 100 | thùng | 70 | A01 | 1-1-2028 | | 30 | A02 | 1-1-2029 | | 3 | SP01 | Sản phẩm A (2) | 2000 | lon | 800 | A01 | 1-1-2028 | | 500 | A02 | 1-1-2029 | | 700 | A03 | 1-1-2030 |   Note: lon là đơn vị cơ bản; thùng là đơn vị quy đổi (1 thùng = 10 lon); (1) (2) là cùng 1 sản phẩm nhưng ghi nhận đơn vị tính khác nhau.   * Thông tin hiện tại trong Kho hàng bán - Kênh MT của NPP hiện tại như sau:  | Mã SKU | Tên sản phẩm | Đơn vị tính | Tồn kho | Tạm giữ | Có sẵn | Thông tin lô | | | | | | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | | SP01 | Sản phẩm A | lon | 10000 | 3200 | 6800 | A01 | 1-1-2028 | 2000 | 1700 | 300 | | A02 | 1-1-2029 | 5000 | 800 | 4200 | | A03 | 1-1-2030 | 3000 | 700 | 2300 |   → Hệ thống thực hiện cập nhật kho sau khi duyệt phiếu xuất kho thành công như sau:   * Đối với Dòng 1: Sản phẩm A (1)   + Hệ thống thực hiện kiểm tra đơn vị tính của Sản phẩm A (1): Vì *Thùng* là đơn vị quy đổi của sản phẩm nên hệ thống thực hiện     - Bước 1: Quy đổi số lượng tổng của sản phẩm A (1) từ thùng sang lon như sau: 100 thùng = 100 \* 10 = 1000 lon     - Bước 2: Trừ 1000 lon vào Tồn kho và Tạm giữ của sản phẩm, lúc này Tồn kho = 9000 và Tạm giữ = 2200   + Hệ thống thực hiện kiểm tra số lô và Hạn sử dụng của sản phẩm     - Bước 1: Quy đổi số lượng sản phẩm A (1) của từng lô từ thùng sang lon như sau:       * Lô A01: 70 thùng = 70\*10 = 700 lon       * Lô A02: 30 thùng = 30 \*10 = 300 lon     - Bước 2:       * Trừ 700 lon vào Tồn kho và Tạm giữ của lô A01, lúc này Tồn kho = 1300 và Tạm giữ = 1000       * Trừ 300 lon vào Tồn kho và Tạm giữ của lô A02, lúc này Tồn kho = 4700 và Tạm giữ = 500 * Đối với Dòng 2: Sản phẩm A (2)   + Hệ thống thực hiện kiểm tra đơn vị tính của Sản phẩm A (2): Vì Lonlà đơn vị cơ bản của sản phẩm nên hệ thống thực hiện     - Trừ 2000 lon vào Tồn kho và Tạm giữ của sản phẩm, lúc này Tồn kho = 7000 và Tạm giữ = 200   + Hệ thống thực hiện kiểm tra số lô và Hạn sử dụng của sản phẩm     - Trừ 800 lon vào Tồn kho và Tạm giữ của lô A01, lúc này Tồn kho = 500 và Tạm giữ = 200     - Trừ 500 lon vào Tồn kho và Tạm giữ của lô A02, lúc này Tồn kho = 4200 và Tạm giữ = 0     - Trừ 700 lon vào Tồn kho và Tạm giữ của lô A02, lúc này Tồn kho = 2300 và Tạm giữ = 0  | Mã SKU | Tên sản phẩm | Đơn vị tính | Tồn kho | Tạm giữ | Có sẵn | Thông tin lô | | | | | | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | | SP01 | Sản phẩm A | lon | 7000 | 200 | 7000 | A01 | 1/1/2028 | 500 | 200 | 300 | | A02 | 1/1/2029 | 4200 | 0 | 4200 | | A03 | 1/1/2030 | 2300 | 0 | 2300 | |

### **Huỷ phiếu xuất kho**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> Xuất kho  -> Chọn nút Hủy mộheteai bit phiếu xuất kho trên danh sách |
|  | N/A | Khi nhấn vào hệ thống thực hiện xử lý:   * Xử lý: Hiển thị popup Xác nhận hủy phiếu xuất kho ngay trên nút:   + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất: Hệ thống thực hiện       * Cập nhật trạng thái phiếu xuất kho sang **Đã hủy**       * Cập nhật trạng thái các đơn hàng trong phiếu xuất kho sang **Khởi tạo**     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được hủy phiếu xuất kho có trạng thái Khởi tạo  **Kết quả:** Chuyển trạng thái của phiếu xuất kho từ Khởi tạo sang Đã hủy |

### Xem chi tiết phiếu xuất kho

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | Đường dẫn |  | Đường dẫn: Bán hàng → Xuất kho  → Chọn vào mã xuất kho bất kì |
|  |  |  | * Ngày xuất kho * Kho * Kênh bán hàng * Trạng thái: Khỏi tạo/ Đã duyệt/ Đã hủy * Lý do hủy: Chỉ hiển thị khi phiếu xuất kho ở trạng thái "Đã hủy" * Danh sách đơn hàng   + Mã đơn hàng   + Mã điểm bán   + Tên điểm bán   + Ngày đặt hàng * Danh sách sản phẩm hiển thị các sản phẩm trong đơn hàng được ref tới của phiếu xuất kho  bao gồm   + Mã SKU   + Tên sản phẩm   + Đơn vị tính   + Số lượng   + Thông tin lô: Click vào icon Xem → hiển thị popup Thông tin lô bao gồm:     - Số lượng     - Số lô     - Hạn sử dụng     - Nút Đóng: Click vào nút → thực hiện đóng popup Thông tin lô  * Nút Đóng: Click vào nút → hệ thống thực hiện đóng màn hình xem chi tiết mà không hiển thị popup xác nhận. |

## **Rules**

### **1. Quy tắc gộp sản phẩm gopsanpham**

* Các sản phẩm trong phiếu xuất kho có thể trùng nhau trong các đơn hàng khác nhau, do đó hệ thống thực hiện gộp số lượng của sản phẩm trùng

+ Nếu **Mã SKU giống nhau**, hệ thống thực hiện gộp số lượng sản phẩm đó từ các đơn hàng
+ Trường hợp **Mã SKU giống nhau** nhưng **đơn vị tính khác nhau**, hệ thống cộng riêng số lượng theo từng đơn vị tính

* Ví dụ:

+ Đơn hàng 1: SP001 - Sản phẩm A - Số lượng: 100 - Đơn vị tính: lon
+ Đơn hàng 2: SP001 - Sản phẩm A - Số lượng: 10 - Đơn vị tính: lốc
+ Đơn hàng 3: SP001 - Sản phẩm A - Số lượng: 15 - Đơn vị tính: lốc

→ Danh sách sản phẩm trong phiếu ghi nhận:

| Mã SKU | Tên sản phẩm | Số lượng | Đơn vị tính | Thông tin lô |
| --- | --- | --- | --- | --- |
| SP001 | Sản phẩm A | 100 | lon | ... |
| SP001 | Sản phẩm A | 25 | lốc | ... |

### **2. Quy tắc tính Tồn kho tại thông tin lô tinhtonkho**

**Các thao tác tính Tồn kho tại thông tin lô bao gồm:**

1. Kiểm tra Kho và Kênh bán hàng trong phiếu xuất kho và thực hiện chọn Kho và Kênh tương ứng của NPP
2. Kiểm tra số lượng “Có sẵn” theo từng lô của sản phẩm tại ngày xuất kho:   
   * Hệ thống sẽ dựa vào ngày xuất kho và ngày nhập để thực hiện lấy tổng số lượng "Có sẵn" theo lô tại thời điểm xuất kho, tham khảo ví dụ tại **bước 2** của **Quy tắc lấy tồn kho đáp ứng**
3. Hệ thống thực hiện kiểm tra đơn vị tính của sản phẩm trong phiếu xuất kho:

* + Nếu đơn vị tính là đơn vị quy đổi:
    - Thực hiện quy đổi số lượng “Có sẵn” của lô sang đơn vị quy đổi theo công thức: số lượng theo đơn vị cơ bản: giá trị quy đổi
  + Nếu đơn vị tính là đơn vị cơ bản: bỏ qua bước này

  4. Thực hiện tính giá trị tại trường "Tồn kho " theo công thức: “Có sẵn” tại thời điểm *Ngày xuất kho* của lô + “Tạm giữ” của lô 

Ví dụ: Ta có thông tin sản phẩm trong **Kho bán hàng** và **Kênh MT** như sau: (sử dụng cho tất cả các trường hợp bên dưới)

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm** | **Đơn vị** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | |
| **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP 01 | lon | 1000 | 500 | 500 | LO1 | 1-1-2025 | 400 | 150 | 250 |
| LO2 | 1-1-2026 | 300 | 170 | 130 |
| LO3 | 1-1-2027 | 300 | 180 | 120 |

Với: SP01 có đơn vị cơ bản là *lon*; đơn vị quy đổi là *thùng* (1 thùng = 10 lon)

**Trường hợp 1:**  **Trong phiếu xuất kho  có 1 sản phẩm - đơn vị tính là đơn vị quy đổi**

**Đơn hàng 1:**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Sản phẩm** | **Đơn vị tính** | **Số lượng** | **Tạm giữ trong kho theo lô** | | |
| **LO1** | **LO2** | **LO3** |
| SP 01 | thùng | 27 | 25 | 2 | 0 |

**Phiếu xuất kho** chứa đơn hàng như sau: 

Kho: Kho bán hàng

Kênh: MT

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên Sản phẩm** | **Số lượng** | **Đơn vị tính** | **Thông tin lô** | | | |
| **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** |
| SKU01 | SP 01 | 27 | thùng | 25 | (1) | LO1 | 1-1-2025 |
| 2 | (2) | LO2 | 1-1-2026 |
| 0 | (3) | LO3 | 1-1-2027 |

1. Kiểm tra Kho và Kênh bán hàng trong phiếu xuất kho và thực hiện chọn Kho và Kênh tương ứng của NPP → đều là Kho bán hàng và Kênh MT
2. Kiểm tra “Có sẵn” của sản phẩm tại ngày xuất kho theo từng lô

Kho của NPP sau khi phát sinh đơn hàng như sau: 

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm** | **Đơn vị** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | |
| **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP 01 | gói | 1000 | 770 | 230 | LO1 | 1-1-2025 | 400 | 400 | 0 |
| LO2 | 1-1-2026 | 300 | 190 | 110 |
| LO3 | 1-1-2027 | 300 | 180 | 120 |

=> Ta thấy, “Có sẵn” tại thời điểm *Ngày xuất kho* của lô là: LO1 = 0 gói; LO2 = 110 gói; LO3 = 120 gói

3. Hệ thống thực hiện kiểm tra đơn vị tính của sản phẩm trong phiếu xuất kho

Vì đơn vị tính của sản phẩm trong phiếu xuất kho là đơn vị quy đổi → Thực hiện quy đổi số lượng “Có sẵn” của lô sang đơn vị quy đổi:

* "Có sẵn" tại thời điểm *Ngày xuất kho* của LO1 = 0 : 10 = 0 thùng
* "Có sẵn" tại thời điểm *Ngày xuất kho* của LO2 = 110 : 10 = 11 thùng
* "Có sẵn" tại thời điểm *Ngày xuất kho* của LO3 = 120 : 10 = 12 thùng

4.  Thực hiện tính giá trị tại trường "Tồn kho " theo công thức: “Có sẵn” tại thời điểm *Ngày xuất kho* của lô + “Tạm giữ” của lô

Tồn kho của LO1 = “Có sẵn” tại thời điểm *Ngày xuất kho* của LO1 + “Tạm giữ” của LO1 trong đơn hàng

                            = 0 + 25 = 25 thùng

Tồn kho của LO2 = “Có sẵn” tại thời điểm *Ngày xuất kho* của LO2 + “Tạm giữ” của LO2 trong đơn hàng

                            = 11 + 2 = 13 thùng

Tồn kho của LO2 = “Có sẵn” tại thời điểm *Ngày xuất kho* của LO2 + “Tạm giữ” của LO3 trong đơn hàng

                            = 12 + 0 = 12 thùng

**Như vậy**, tại màn hình phiếu xuất kho, trường Tồn kho hiển thị như sau:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên Sản phẩm** | **Số lượng** | **Đơn vị tính** | **Thông tin lô** | | | |
| **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** |
| SKU01 | SP 01 | 27 | thùng | 25 | **25** | LO1 | 1-1-2025 |
| 2 | **13** | LO2 | 1-1-2026 |
| 0 | **12** | LO3 | 1-1-2027 |

**Trường hợp 2: Trong phiếu xuất kho có 1 sản phẩm - đơn vị tính là đơn vị cơ bản - có trong 1 đơn hàng**

**Đơn hàng**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Sản phẩm** | **Đơn vị tính** | **Số lượng** | **Tạm giữ trong kho theo lô** | | |
| **LO1** | **LO2** | **LO3** |
| SP 01 | gói | 270 | 250 | 20 | 0 |

**Phiếu xuất kho** cho đơn hàng như sau:

Kho: Kho bán hàng

Kênh: MT

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên Sản phẩm** | **Số lượng** | **Đơn vị tính** | **Thông tin lô** | | | |
| **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** |
| SKU01 | SP 01 | 270 | gói | 250 | (1) | LO1 | 1-1-2025 |
| 20 | (2) | LO2 | 1-1-2026 |
| 0 | (3) | LO3 | 1-1-2027 |

1. Kiểm tra Kho và Kênh bán hàng trong phiếu xuất kho và thực hiện chọn Kho và Kênh tương ứng của NPP → đều là Kho bán hàng và Kênh MT
2. Kiểm tra “Có sẵn” của sản phẩm tại ngày xuất kho theo từng lô

 Kho của NPP sau khi phát sinh đơn hàng như sau:

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm** | **Đơn vị** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | |
| **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP 01 | lon | 1000 | 500 | 500 | LO1 | 1-1-2025 | 400 | 400 | 0 |
| LO2 | 1-1-2026 | 300 | 190 | 110 |
| LO3 | 1-1-2027 | 300 | 180 | 120 |

=> Ta thấy, “Có sẵn” tại thời điểm *Ngày xuất kho* của lô là: LO1 = 0 gói; LO2 = 110 gói; LO3 = 120 gói

      3. Hệ thống thực hiện kiểm tra đơn vị tính của sản phẩm trong phiếu xuất kho

Vì đơn vị tính của sản phẩm trong phiếu xuất kho là đơn vị cơ bản → Không cần thực hiện quy đổi số lượng “Có sẵn” của lô sang đơn vị quy đổi:

      4. Thực hiện tính giá trị tại trường "Tồn kho " theo công thức: s

Tồn kho của LO1 = “Có sẵn” tại thời điểm *Ngày xuất kho* của LO1 + “Tạm giữ” của LO1 trong đơn hàng

                            = 0 + 250 = 250 gói

Tồn kho của LO2 = “Có sẵn” tại thời điểm *Ngày xuất kho* của LO2 + “Tạm giữ” của LO2 trong đơn hàng

                            = 110 + 20 = 130 gói

Tồn kho của LO2 = “Có sẵn” tại thời điểm *Ngày xuất kho* của LO2 + “Tạm giữ” của LO3 trong đơn hàng

                            = 120 + 0 = 120 gói 

**Như vậy**, tại màn hình phiếu xuất kho, trường Tồn kho hiển thị như sau:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên Sản phẩm** | **Số lượng** | **Đơn vị tính** | **Thông tin lô** | | | |
| **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** |
| SKU01 | SP 01 | 270 | gói | 250 | **250** | LO1 | 1-1-2025 |
| 20 | **130** | LO2 | 1-1-2026 |
| 0 | **120** | LO3 | 1-1-2027 |

### **3. Quy tắc cộng số lượng sản phẩm các lô soluongtheolo**

"Số lượng" của sản phẩm theo từng lô tại phiếu xuất kho = SUM(Số lượng sản phẩm theo từng lô trong các đơn hàng có sản phẩm)

Ví dụ: Ta có thông tin 2 đơn hàng với số lượng được chia theo các lô như sau:

**Đơn hàng 1:**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Sản phẩm** | **Đơn vị tính** | **Số lượng** | **Tạm giữ trong kho theo lô** | | |
| **LO1** | **LO2** | **LO3** |
| SP 01 | gói | 270 | 250 | 20 | 0 |

**Đơn hàng 2:**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Sản phẩm** | **Đơn vị tính** | **Số lượng** | **Tạm giữ trong kho theo lô** | | |
| **LO1** | **LO2** | **LO3** |
| SP 01 | gói | 200 | 0 | 110 | 90 |

**Phiếu xuất kho** cho đơn hàng như sau:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên Sản phẩm** | **Số lượng** | **Đơn vị tính** | **Thông tin lô** | | | |
| **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** |
| SKU01 | SP 01 | 470 | gói | (1) | 250 | LO1 | 1-1-2025 |
| (2) | 130 | LO2 | 1-1-2026 |
| (3) | 120 | LO3 | 1-1-2027 |

Áp dụng công thức: "Số lượng" của sản phẩm theo từng lô tại phiếu xuất kho = SUM(Số lượng sản phẩm theo từng lô trong các đơn hàng có sản phẩm), ta có:

* Số lượng sản phẩm của LO1 = SUM(Số lượng sản phẩm của LO1 trong các đơn hàng có sản phẩm)

                                                        = 250 + 0 = 250 gói

* Số lượng sản phẩm của LO2 = SUM(Số lượng sản phẩm của LO2 trong các đơn hàng có sản phẩm)

                                                         = 20 + 110 = 130 gói

* Số lượng sản phẩm của LO3 = SUM(Số lượng sản phẩm của LO3 trong các đơn hàng có sản phẩm)

                                                         = 0 + 90 = 90 gói 

**Như vậy**, tại màn hình phiếu xuất kho, trường Số lượng theo từng lô hiển thị như sau:

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên Sản phẩm** | **Số lượng** | **Đơn vị tính** | **Thông tin lô** | | | |
| **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** |
| SKU01 | SP 01 | 470 | gói | **250** | 250 | LO1 | 1-1-2025 |
| **130** | 130 | LO2 | 1-1-2026 |
| **90** | 120 | LO3 | 1-1-2027 |

### 4. Quy tắc cập nhật tồn kho sau khi tạo phiếu xuất kho

1. Thực hiện trả lại số lượng sản phẩm mà đơn hàng trong phiếu xuất kho đang tạm giữ "Tạm giữ" số lượng sản phẩm theo lô
2. Quy đổi số lượng sản phẩm của các lô sang đơn vị cơ bản nếu đơn vị tính trên phiếu xuất kho là đơn vị quy đổi
3. Thực hiện cập nhật số lượng trong kho như sau:
   * Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu xuất kho với nguyên tắc: trừ "Có sẵn" của lô có ngày hết hạn gần nhất để trừ dần cho đến khi đáp ứng đủ số lượng yêu cầu, nếu một lô không đủ đáp ứng số lượng yêu cầu, hệ thống sẽ tiếp tục lấy từ lô kế tiếp có ngày hết hạn gần nhất để trừ tiếp. Nhưng nếu lô có nhiều ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước để trừ trước. Công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong phiếu nhập kho
   * Cập nhật số lượng "Tạm giữ" của từng lô trong kho với công thức: Tạm giữ  = Tồn kho - Tạm giữ hiện tại

Ví dụ: 

Ta có thông tin sản phẩm trong **Kho bán hàng** và **Kênh MT** trước khi phát sinh đơn hàng A như sau:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Tên sản phẩm** | **Đơn vị** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP 01 | gói | 1000 | 500 | 500 | 1/11 | 170 | LO1 | 1-1-2025 | 170 | 150 | 20 |
| 2/11 | 100 | LO2 | 1-1-2026 | 100 | 100 | 0 |
| 3/11 | 230 | LO1 | 1-1-2025 | 230 | 0 | 230 |
| 5/11 | 200 | LO2 | 1-1-2026 | 200 | 70 | 130 |
| 9/11 | 300 | LO3 | 1-1-2027 | 300 | 180 | 120 |

**Ta có Đơn hàng A ban đầu như sau:**

| Tên sản phẩm | Đơn vị tính | Số lượng |
| --- | --- | --- |
| SP 01 | gói | 270 |

Giả sử theo **Quy tắc cập nhật tồn kho sau khi tạo đơn hàng**, Kho của NPP sau khi phát sinh đơn hàng như sau:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Tên sản phẩm** | **Đơn vị** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP 01 | gói | 1000 | 770 | 230 | 1/11 | 170 | LO1 | 1-1-2025 | 170 | **170 (150 + 20)** | 0 |
| 2/11 | 100 | LO2 | 1-1-2026 | 100 | 100 | 0 |
| 3/11 | 230 | LO1 | 1-1-2025 | 230 | **230 (0 + 230)** | 0 |
| 5/11 | 200 | LO2 | 1-1-2026 | 200 | **90 (70 + 20)** | 110 |
| 9/11 | 300 | LO3 | 1-1-2027 | 300 | 180 | 120 |

**Ta có Phiếu xuất kho như sau:**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên Sản phẩm** | **Số lượng** | **Đơn vị tính** | **Thông tin lô** | | | |
| **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** |
| SKU01 | SP 01 | 270 | gói | **100** | 250 | LO1 | 1-1-2025 |
| **70** | 130 | LO2 | 1-1-2026 |
| **100** | 120 | LO3 | 1-1-2027 |

Áp dụng **Quy tắc cập nhật tồn kho sau khi tạo phiếu xuất kho**,

1. Thực hiện trả lại số lượng sản phẩm mà đơn hàng trong phiếu xuất kho đang tạm giữ số lượng sản phẩm theo lô và ngày nhập hàng (không thực hiện trả lại số lượng tổng của sản phẩm)

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| 1000 | 770 | 230 | 1/11 | 170 | LO1 | 1-1-2025 | 170 | **150 (170 - 20)** | **20** |
| 2/11 | 100 | LO2 | 1-1-2026 | 100 | 100 | 0 |
| 3/11 | 230 | LO1 | 1-1-2025 | 230 | **0 (230 - 230)** | **230** |
| 5/11 | 200 | LO2 | 1-1-2026 | 200 | **70 (90 - 20)** | **130** |
| 9/11 | 300 | LO3 | 1-1-2027 | 300 | 180 | 120 |

2. Quy đổi số lượng sản phẩm của các lô sang đơn vị cơ bản nếu đơn vị tính trên phiếu xuất kho là đơn vị quy đổi.

Vì đơn vị tính của sản phẩm trong phiếu xuất kho là đơn vị cơ bản nên không cần thực hiện quy đổi 

3. Thực hiện cập nhật số lượng trong kho với số lượng trong phiếu xuất kho theo quy tắc trên ta có:

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| 1000 | 770 | 230 | 1/11 | 170 | LO1 | 1-1-2025 | 170 | **170** | **0** |
| 2/11 | 100 | LO2 | 1-1-2026 | 100 | **100** | **0** |
| 3/11 | 230 | LO1 | 1-1-2025 | 230 | **80** | **150** |
| 5/11 | 200 | LO2 | 1-1-2026 | 200 | **140** | **60** |
| 9/11 | 300 | LO3 | 1-1-2027 | 300 | **280** | **20** |

### 5. Quy tắc cập nhật tồn kho sau khi duyệt phiếu xuất kho

Sau khi duyệt phiếu xuất kho thành công, hệ thống thực hiện cập nhật tồn kho theo quy tắc sau:

* Trừ số lượng "Tồn kho" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu xuất kho
* Trừ số lượng "Tạm giữ" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu xuất kho

Ví dụ:

Với thông tin đơn hàng, phiếu xuất kho và tồn kho sau khi tạo phiếu xuất kho như **Q****uy tắc cộng số lượng sản phẩm các lô**, sau khi áp dụng **Quy tắc cập nhật tồn kho sau khi duyệt phiếu xuất kho**, ta có thông tin tồn kho như sau:

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| 630 | 500 | 230 | 1/11 | 170 | LO1 | 1-1-2025 | **150** | **150** | 0 |
| 2/11 | 100 | LO2 | 1-1-2026 | **100** | **100** | 0 |
| 3/11 | 230 | LO1 | 1-1-2025 | **150** | **0** | 150 |
| 5/11 | 200 | LO2 | 1-1-2026 | **130** | **70** | 60 |
| 9/11 | 300 | LO3 | 1-1-2027 | **200** | **180** | 20 |