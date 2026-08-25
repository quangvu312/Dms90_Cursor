|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-758  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-759  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-760  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-761  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-762  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-763  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-764  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-765   Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1028   Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1029 |
| Version | trueYellow1.0.0  trueRed1.1.0: Enhance chọn sản phẩm Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5236 |
| History | 3 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

true

**Requirement**

Chức năng cho phép nhân viên kho thực hiện kiểm tra đô chênh lệch tồn kho trong kho so với tồn kho trên hệ thống. Bao gồm các chức năng: 

* NPP Thêm mới phiếu kiểm kho
* NPP xem danh sách phiếu kiểm kho
* NPP xem chi tiết phiếu kiểm kho
* NPP Chỉnh sửa phiếu kiểm kho
* NPP Duyệt phiếu kiểm kho
* NPP hủy phiếu kiểm kho
* HO xem danh sách phiếu kiểm kho
* HO duyệt phiếu kiểm kho
* HO hủy phiếu kiểm kho
* HO xem chi tiết phiếu kiểm kho

## **Workflow Phiếu kiểm kho**

## **Trạng thái phiếu kiểm kho**

**trueTrạng thái Phiếu kiểm khofalseautotoptrue8722**

## **NPP tạo phiếu kiểm pho**

Đường dẫn: Kho → Kiểm kho 

Để thêm mới phiếu kiểm kho, người dùng nhấn chọn nút "Thêm mới" → Hệ thống popup Dialog "Thêm phiếu kiểm kho" với mô tả được define dưới đây

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Ngày kiểm kho | Date Picker | Bắt buộc | Giá trị mặc định là "Trống"  Click chọn và Date Picker để chọn ngày kiểm kho |
| Kho | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Có thể tìm kiếm kho theo tên kho → hệ thống hể thị dropdown danh sách kết quả  Chỉ được chọn 1 kho |
| Kênh bán hàng | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Có thể tìm kiếm kênh theo tên kênh bán hàng→ hệ thống hể thị dropdown danh sách kết quả  Chỉ được chọn 1 kênh bán hàng |
| Danh sách sản phẩm | Table | Bắt buộc | Mô tả bên dưới |
| Nút "Lưu" | Button | - | Sau khi hoàn tất nhập thông tin, người dùng nhấn "Lưu" , hệ thống thực hiện kiểm tra và xử lý:  1. Kiểm tra chênh lệch tồn kho người dùng nhập với **[Quy tắc kiểm tra tồn kho thực tế hợp lệ](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023843#id-%5BNPP%5DKi%E1%BB%83mkho-Quyt%E1%BA%AFcki%E1%BB%83mtrat%E1%BB%93nkhoth%E1%BB%B1ct%E1%BA%BFh%E1%BB%A3pl%E1%BB%87)**     1. Nếu không hợp lệ → Báo lỗi *"Chênh lệch vượt quá mức cho phép"* → Tiếp tục luồng thêm mới phiếu kiểm kho    2. Nếu hợp lệ, thực hiện bước 2. 2. Kiểm traTổng chênh lệch tồn kho trong lô phải bằng chênh lệch tồn kho sản phẩm ngoài danh sách    * Nếu sai -> Hiển thị toast lỗi *"Tổng chênh lệch lô phải bằng chênh lệch sản phẩm"*    * Nếu đúng -> hiển thị popup xác nhận ngay trên nút:      1. 1. Nếu đồng ý:            + Hệ thống tạo dữ liệu phiếu kiểm kho với trạng thái Khởi tạo.            + Mã phiếu kiểm kho được generate theo cấu trúc "ICXXXXXX" (với XXXXXX là 6 số tăng dần)            + Cập nhật tồn kho theo **[Quy tắc cập nhật tồn kho sau khi tạo phiếu kiểm kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023843#id-%5BNPP%5DKi%E1%BB%83mkho-Quyt%E1%BA%AFcc%E1%BA%ADpnh%E1%BA%ADtt%E1%BB%93nkhokhiNPPkh%E1%BB%9Fit%E1%BA%A1ophi%E1%BA%BFuki%E1%BB%83mkho).**         2. Nếu Đóng:             1. Hệ thống tắt Confirmation Dialog và tiếp tục luồng thêm mới  * + Nếu đóng: thực hiện đóng popup xác nhận. |
|  |  |  |  |
| --- | --- | --- | --- |
| Nút "Đóng" | Button | - | Ngừng thao tác tạo phiếu kiểm kho bằng cách click nút "Đóng" -> hệ thống popup Confirmation Dialog    * + Xác nhận: Đóng popup "Thêm mới phiếu kiểm kho" và không thực hiện hành động gì.   + Đóng: Đóng Confirmation Dialog và tiếp tục luồng thêm mới. |
| *Lưu ý: Nếu người dùng chọn lại 1 trong 3 thông tin "Kênh bán hàng", "Kho", "Ngày kiểm kho" và có ít nhất 1 sản phẩm có nhập số lượng chênh lệch tồn kho →  hệ thống popup Confirmation Dialog "Cập nhật thông tin" với 2 thao tác:*   * *Nhấn "Xác nhận": Hệ thống đưa danh sách sản phẩm về view măc định* * *Nhấn "Đóng": Đóng Confirmation Dialog và không thực hiện cập nhật thông tin gì* | | | |

**Mô tả Table "Danh sách sản phẩm"**

trueRed1.1.0: Mặc định danh sách sản phẩm trống, khi nhấn Thêm sản phẩm mới chọn sản phẩm để thêm vào danh sách sản phẩm

### Button Thêm sản phẩm

Nhấn button Thêm sản phẩm

Mở ra danh sách sản phẩm như sau: 

* Filter: Trạng thái
  + Placeholder: Tìm kiếm theo Mã, tên sản phẩm
  + Tooltip: Tìm kiếm theo Mã, tên sản phẩm
  + Chọn Tìm kiếm: Hiển thị danh sách sản phẩm đang hoạt động dựa vào textsearch, Không nhập gì → hiển thị tất cả danh sách sản phẩm đang hoạt động
  + Chọn Làm mới: Refresh màn hình và hiển thị placeholder: "Tìm kiếm; lưới danh sách vẫn giữ nguyên không thay đổi

Danh sách sản phẩm: 

* ~~Chỉ cần trong master data sản phẩm có và sản phẩm đang hoạt động thì hiển thị~~
* Sản phẩm có ngày nhập hàng trước ngày kiểm kho (ngày nhập hàng của lô <= ngày kiểm kho)
* Hệ thống mặc định lấy danh sách sản phẩm theo **[Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**
* Thông tin sản phẩm bao gồm:

* + Mã sản phẩm
  + Tên sản phẩm, phân cấp, đơn vị kinh doanh: hiển thị theo mã sản phẩm
  + Trạng thái: hiển thị theo trạng thái  của sản phẩm
  + Phân trang hiển thị

 Check để chọn sản phẩm;

* Check box cho phép chọn các Sản phẩm để insert vào Danh sách Sản phẩm.
* Cho phép check một hoặc nhiều
* Cho phép check All sản phẩm. chỉ check all trên 1 page nhưng khi click các page khác vẫn giữ check all tại page cũ, để có thể check all nhiều page

=> Sau khi chọn →  hiển thị số mục được chọn và cho phép xóa hàng loạt

Chọn Xóa hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Đồng ý: Xóa tất cả các mục đã chọn; chọn Hủy: Tắt popup và vẫn giữ nguyên trạng thái

-------

***lưu ý:***

* Khi thao tác trên pop-up Thêm Sản phẩm, thì ngoài danh sách Sản phẩm của chương trình trưng bày cũng update theo, và ngược lại
  + Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại

* + Nếu xóa trên lưới danh sách thì khi mở popup, filter dữ liệu Sản phẩm đã xóa sẽ thấy uncheck Sản phẩm
* Mở Popup lần sau, hiển thị checked đối với các sản phẩm đã chọn trước đó.

*--*

Button "**Đồng ý**" cho phép người dùng insert danh sách Sản phẩm đã chọn vào Grid Danh sách Sản phẩm ngoài màn hình chính và đóng Popup

**Lưu ý:**

* Khi đã add Sản phẩm ; Chọn  back về màn hình trước rồi quay lại vẫn hiển thị danh sách đã chọn
* Hoặc chọn Tiếp tục => Chọn back về lại vẫn thấy danh sách Sản phẩm đã chọn
* Chọn add Thêm thành công; sau đó chọn add thêm nữa => Danh sách đã chọn vẫn hiển thị "đã chọn", muốn bỏ chọn thì uncheck và nhấn Đồng ý

### Danh sách sản phẩm

trueRed1.1.0: Bổ sung tìm kiếm theo Mã sản phẩm, Tên sản phẩm

* Placeholder: Tìm kiếm theo Mã sản phẩm, Tên sản phẩm
* Tooltip: Tìm kiếm theo Mã sản phẩm, Tên sản phẩm
* Chọn Tìm kiếm:
  + Hiển thị danh sách sản phẩm trên lưới danh sách dựa vào textsearch, Không nhập gì → hiển thị tất cả danh sách sản phẩm đang hoạt động
  + Search tiếng việt có dấu,không dấu, không phân biệt chữ hoa, chữ thường

trueRed1.1.0: Bổ sung phân trang cho danh sách sản phẩm

| **Trường thông tin** | **Định dạng** | **Quy tắc** | **Mô tả chi tiết** |
| --- | --- | --- | --- |
| Mã SKU | Text | - | Hệ thống hiển thị SKU của sản phẩm |
| Tên sản phẩm | Text | - | Hệ thống hiển thị tên sản phẩm |
| Tồn kho hệ thống | Number | - | Dựa vào "Ngày kiểm kho", "Kho", "Kênh bán hàng" được chọn trên phiếu, hệ thống hiển thị số lượng **tồn kho hệ thống** theo quy tắc Lấy tồn kho đáp ứng (Lấy số lượng tồn kho có ngày nhập hàng diễn ra trước ngày kiểm kho)  trueRed1.1.0 Nếu không có thì hiển thị = 0 |
| Có sẵn | Text | - | Dựa vào "Ngày kiểm kho", "Kho", "Kênh bán hàng" được chọn trên phiếu, hệ thống hiển thị số lượng **tồn kho đáp ứng** theo quy tắc Lấy tồn kho đáp ứng (Lấy số lượng tồn kho có sẵn có ngày nhập hàng diễn ra trước ngày kiểm kho)  trueRed1.1.0 Nếu không có thì hiển thị = 0 |
| Chênh lệch tồn kho | Input Number | Bắt buộc | Giá trị mặc định là 0  Người dùng nhập số lượng chênh lệch tồn kho  Cho phép người dùng nhập số thập phân, tối đa 2 chữ số thập phân  Cho phép nhập giá trị nguyên dương hoặc nguyên âm |
| Đơn vị tính | Text | Bắt buộc | Hiển thị đơn vị cơ bản của sản phẩm |
| Thông tin lô | Icon Button | - | Click chọn button "Thêm mới" → Popup Dialog Thông tin lô được đề xuất theo quy tắc **[Quy tắc đề xuất tồn kho thực tế từng lô khi kiểm kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023843#id-%5BNPP%5DKi%E1%BB%83mkho-Quyt%E1%BA%AFc%C4%91%E1%BB%81xu%E1%BA%A5tt%E1%BB%93nkhoth%E1%BB%B1ct%E1%BA%BFt%E1%BB%ABngl%C3%B4khiki%E1%BB%83mkho)**  Hiển thị danh sách Lô theo **Mô tả Danh sách lô** được define dưới đây |
| Nút Xóa | Button | - | Nhấn nút xóa → hệ thống xóa dòng record tương ứng |

**Mô tả Danh sách lô**

|  |  |  |  |
| --- | --- | --- | --- |
| **Trường thông tin** | **Định dạng** | **Quy tắc** | **Mô tả chi tiết** |
| Số lô | Text | - | Hệ thống hiển thị số lô |
| Tồn kho hệ thống | Number | - | Hệ thống hiển thị số lượng tồn kho hệ thống |
| Có sẵn | Text | - | Dựa vào "Ngày kiểm kho", "Kho", "Kênh bán hàng" được chọn trên phiếu, hệ thống hiển thị số lượng **tồn kho đáp ứng** theo quy tắc Lấy tồn kho đáp ứng (Lấy số lượng tồn kho có sẵn có ngày nhập hàng diễn ra trước ngày kiểm kho) |
| Chênh lệch tồn kho | Input Number | Bắt buộc | Giá trị mặc định là số lượng được đề xuất  Người dùng nhập số lượng chênh lệch tồn kho  Cho phép người dùng nhập số thập phân, tối đa 2 chữ số thập phân  Cho phép nhập giá trị nguyên dương hoặc nguyên âm  Nếu không nhập chênh lệch tồn kho, khi bấm "Lưu" phiếu kiểm kho → báo lỗi error message dưới ô input "Chênh lệch tồn kho là bắt buộc |
| Hạn sử dụng | Date | - | Hệ thống hiển thị hạn sử dụng của lô tương ứng  Định dạng là DD-MM-YYYY |
| Nút "Lưu" | Button | - | Bấm Lưu -> hệ thống kiểm tra :   1. **Tổng chênh lệch tồn kho trong lô** phải bằng **chênh lệch tồn kho sản phẩm** ngoài danh sách    * Nếu đúng -> Tiếp tục check rules (2)    * Nếu sai -> Hiển thị toast lỗi "Tổng chênh lệch lô phải bằng chênh lệch sản phẩm" 2. Kiểm tra chênh lệch tồn kho hợp lệ theo các bước sau:     * Nếu Chênh lệch tồn kho sản phẩm < 0 → Tất cả chênh lệch lô < 0 & Giá trị tuyệt đối (Tất cả chênh lệch tồn kho lô) <= Tồn kho.    * Nếu Chênh lệch tồn kho sản phẩm > 0 → Tất cả chênh lệch lô > 0.    * Nếu Chênh lệch tồn kho sản phẩm = 0  → Tất cả chênh lệch lô = 0   → Nếu không thỏa 1 trong 3 điều kiện trên, hệ thống báo lỗi: *"Chênh lệch tồn kho theo lô phải cùng chiều với hướng điều chỉnh tồn kho sản phẩm."*   * + Nếu người dùng để trống trường này hoặc nhập giá trị không hợp lệ với quy tắc trên → Hiển thị error message "Trường <a> là bắt buộc" (với <a> là tên trường)   Nếu thỏa cả 3 điều kiện trên → đóng Dialog Thông tin Lô và quay lại màn hình danh sách sản phẩm |
| Nút "Đóng" | Button | - | Bấm Đóng → Hệ thống đóng popup và bỏ qua các thay đổi về số lô của người dùng |

## **NPP xem danh sách phiếu kiểm kho**

Đường dẫn: Kho | Kiểm kho

Hệ thống hiển thị danh sách kiểm kho ở tất cả trạng thái

| Trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| **Mô tả thông tin Phiếu kiểm kho** | | |
| Mã kiểm kho | Text | Hiển thị mã kiểm kho  Click vào mã kiểm kho  -> hiển thị màn hình Xem chi tiết phiếu kiểm kho |
| Ngày kiểm kho | Date | Hiển thị định dạng DD-MM-YYYY |
| Kho | Text | Hiển thị tên kho |
| Kênh bán hàng | Text | Hiển thị tên kênh bán hàng |
| Trạng thái | Badge | Hiển thị trạng thái phiếu kiểm kho  Có 5 trạng thái: Khởi tạo, Đã duyệt, Đã hủy, Từ chối, Hoàn thành |
| Lý do | Text | Chỉ hiển thị lý do khi phiếu kiểm kho ở trạng thái "Đã hủy" hoặc "Từ chối"   Hiển thị tối đa 20 ký tự, nếu dài hơn sẽ hiển thị truncated  Khi hover vào → hiển thị tooltips và nội dung đầy đủ |
| Ngày tạo | Date | Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Ngày cập nhật | Date | Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Người tạo | Text | Hiển thị username của tài khoản |
| Người cập nhật | Text | Hiển thị username của tài khoản |
| Phân trang | Pagination | Phân trang theo {10; 50; 100} |
| Nút Duyệt | Icon Button | Chỉ hiện thị ở phiếu có trạng thái “Khởi tạo” |
| Nút Hủy | Icon Button | Chỉ hiện thị ở phiếu có trạng thái “Khởi tạo” |
| Nút Chỉnh sửa | Icon Button | Chỉ hiện thị ở phiếu có trạng thái "Khởi tạo" |

**Tìm kiếm & Lọc phiếu kiểm kho**

| Trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Tìm kiếm | Input search | Tìm kiếm Phiếu theo Mã kiểm kho : tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string).  Mặc định trống.  Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.  Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |
| Trạng thái | Auto Complete | Lọc phiếu theo trạng thái    * Gồm các trạng thái {Khởi tạo/Đã duyệt/Đã hủy/Từ chối/Hoàn thành}. * Mặc định trống * Cho phép chọn nhiều trạng thái. * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |
| Start Date & End date | Date Picker | Lọc phiếu có ngày kiểm kho trong khoảng thời gian được chọn   * End date > start date   Mặc định trống |
| Nút "Tìm kiếm" | Button | Click vào nút -> thực hiện tìm kiếm theo điều kiện lọc |
| Nút "Làm mới" | Button | Reset bộ Filter về giá trị mặc định |

## **NPP xem chi tiết phiếu kiểm kho**

Đường dẫn: Kho | Kiểm kho

Để xem chi tiết 1 phiếu kiểm kho, người dùng click chọn vào "Mã phiếu kiểm kho"

Hệ thống popup "Xem phiếu kiểm kho" có định dạng dưới đây

Trong Form dưới đây, người dùng chỉ xem được (không thực hiện cập nhật bất kỳ thông tin gì)

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Ngày kiểm kho | Date Picker | Hiển thị ngày kiểm kho |
| Kho | Auto Complete | Hiển thị tên kho |
| Kênh bán hàng | Auto Complete | Hiển thị kênh bán hàng |
| Trạng thái | Badge | Hiển thị trạng thái dưới dạng badge |
| Lý do hủy | Text | Chỉ hiển thị với phiếu có trạng thái là "Đã hủy" hoặc "Từ chối"  Hiển thị nội dung lý do hủy của NPP hoặc HO đã hủy/từ chối |
| Danh sách sản phẩm | Table | Hệ thống mặc định lấy danh sách sản phẩm đã được điều chỉnh chênh lệch tồn kho ở bước khởi tạo/chỉnh sửa và có chênh lệch tồn kho khác 0  Nếu chưa có sản phẩm nào thỏa điều kiện, hiển thị Giao diện trống  Nếu có, hiển thị danh sách sản phẩm theo Mô tả **Table "Danh sách sản phẩm" (****được mô tả ở dưới).** |
| Nút "Đóng" | Button | Nhấn nút "Đóng" → hệ thống đóng popup "Xem phiếu kiểm kho" |

**Mô tả Danh sách sản phẩm**

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Mã SKU | Text | Hiển thị SKU |
| Tên sản phẩm | Text | Hiển thị Tên sản phẩm |
| Chênh lệch tồn kho | Input Number | Hiển thị số lượng chênh lệch tồn kho được người dùng nhập trước đó |
| Tồn kho hệ thống | Text | Dựa vào trạng thái phiếu kiểm kho:    1. Nếu trạng thái = "Hoàn thành" → hệ thống lấy tồn kho hệ thống được ghi nhận khi ngay trước khi HO đồng ý phiếu kiểm kho (Xem chi tiết tại luồng HO duyệt phiếu kiểm kho).  * + Ví dụ:      - Trước khi hoàn thành, Tồn kho hệ thống = 10     - Chênh lệch tồn kho = -3     - Sau khi hoàn thành, Tồn kho hệ thống = 7   → Hệ thống hiển thị tồn kho hệ thống trên phiếu kiểm kho là 10   1. Ngược lại, lấy tồn kho hệ thống dựa trên **Quy tắc lấy tồn kho thực tế. (**Dựa vào "Ngày kiểm kho", "Kho", "Kênh bán hàng" được chọn trên phiếu, hệ thống hiển thị số lượng tồn kho hệ thống theo quy tắc Lấy tồn kho đáp ứng (Lấy số lượng tồn kho có ngày nhập hàng diễn ra trước ngày kiểm kho) ) |
| Có sẵn | Text | Nếu chênh lệch tồn kho < 0 → Hiển thị "có sẵn" = Có sẵn hiện tại + ABS (chênh lệch tồn kho)  Ngược lại, hiển thị "Có sẵn" = Có sẵn hiện tại |
| Đơn vị tính | Text | Hiển thị đơn vị tính |
| Thông tin lô | Icon button | Nhấn vào nút "Xem" → hệ thống mở popup "Xem thông tin lô"  Format Table Thông tin lô được define dưới đây  Chỉ hiển thị các lô có chênh lệch tồn kho khác 0 |

**Mô tả thông tin lô**

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Chênh lệch tồn kho | Input Number | Hiển thị số lượng chênh lệch tồn kho được người dùng nhập trước đó |
| Tồn kho hệ thống | Text | Dựa vào trạng thái phiếu kiểm kho:    1. Nếu trạng thái = "Hoàn thành" → hệ thống lấy tồn kho thực tế được ghi nhận khi HO duyệt phiếu kiểm kho (Xem chi tiết tại luồng HO đồng ý phiếu kiểm kho).  * + Ví dụ:      - Trước khi hoàn thành, Tồn kho hệ thống = 10     - Chênh lệch tồn kho = -3     - Sau khi hoàn thành, Tồn kho hệ thống = 7   → Hệ thống hiển thị tồn kho hệ thống trên phiếu kiểm kho là 10   1. Ngược lại, lấy tồn kho hệ thống dựa trên **Quy tắc lấy tồn kho thực tế. (**Dựa vào "Ngày kiểm kho", "Kho", "Kênh bán hàng" được chọn trên phiếu, hệ thống hiển thị số lượng tồn kho hệ thống theo quy tắc Lấy tồn kho đáp ứng (Lấy số lượng tồn kho có ngày nhập hàng diễn ra trước ngày kiểm kho) ) |
| Có sẵn | Text | Nếu chênh lệch tồn kho < 0 → Hiển thị "có sẵn" = Có sẵn hiện tại + ABS (chênh lệch tồn kho)  Ngược lại, hiển thị "Có sẵn" = Có sẵn hiện tại |
| Số lô | Text | Hiển thị số lô |
| Hạn sử dụng | Text | Hiển thị định dạng DD-MM-YYYY |
| Nút Đóng | Button | Nhấn nút đóng → hệ thống đóng popup "Xem thông tin lô" |

## **NPP Chỉnh sửa phiếu kiểm kho**

Đường dẫn: Kho | Kiểm kho

Để chỉnh sửa 1 phiếu kiểm kho, người dùng click chọn nút "Chỉnh sửa" (nút chỉnh sửa chỉ xuất hiện khi phiếu ở trạng thái "Khởi tạo")

Hệ thống popup **Form** **Cập nhật phiếu kiểcosm kho** hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:

"**Thêm mới phiếu kiểm kho**" đổi thành "**Cập nhật phiếu kiểm kho**".

Khi cập nhật sẽ cho phép sửa hết toàn bộ thông tin phiếu.

Sau khi hoàn tất nhập thông tin, người dùng nhấn "Lưu" , hệ thống thực hiện kiểm tra và xử lý:

1. Kiểm tra chênh lệch tồn kho người dùng nhập với **[Quy tắc kiểm tra tồn kho thực tế hợp lệ](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023843#id-%5BNPP%5DKi%E1%BB%83mkho-Quyt%E1%BA%AFcki%E1%BB%83mtrat%E1%BB%93nkhoth%E1%BB%B1ct%E1%BA%BFh%E1%BB%A3pl%E1%BB%87)**
   1. Nếu không hợp lệ → Hiển thị  báo lỗi "Chênh lệch tồn kho vượt quá mức cho phép" → Tiếp tục luồng Chỉnh sửa phiếu kiểm kho
   2. Nếu hợp lệ, thực hiện bước 2.
2. Kiểm traTổng chênh lệch tồn kho trong lô phải bằng chênh lệch tồn kho sản phẩm ngoài danh sách
   * Nếu sai -> Hiển thị toast lỗi *"Tổng chênh lệch lô phải bằng chênh lệch sản phẩm"*
   * Nếu đúng -> hiển thị popup xác nhận ngay trên nút: 
     + Nếu đồng ý:
       - Thực hiện kiểm tra danh sách sản phẩm theo **[Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**
       - Hệ thống cập nhật dữ liệu phiếu kiểm kho.
       - Tính toán lại tồn kho:
         * Bước 1: Thực hiện trả lại Tồn kho đáp ứng (trả lại tồn kho đáp ứng với các lô và sản phẩm đã booked trước đó)
         * Bước 2: Tính lại tồn theo **[Quy tắc cập nhật tồn kho sau khi tạo phiếu kiểm kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023843#id-%5BNPP%5DKi%E1%BB%83mkho-Quyt%E1%BA%AFcc%E1%BA%ADpnh%E1%BA%ADtt%E1%BB%93nkhokhiNPPkh%E1%BB%9Fit%E1%BA%A1ophi%E1%BA%BFuki%E1%BB%83mkho).**

* + - Nếu đóng: thực hiện đóng popup xác nhận.

## **NPP duyệt phiếu kiểm kho**

Đường dẫn: Kho -> Kiểm kho (NPP)

Chọn nút Duyệt một phiếu kiểm kho trên danh sách

Xử lý: Hiển thị popup "Xác nhận duyệt phiếu kiểm kho" ngay trên nút:

* + Xử lý: Hiển thị popup xác nhận ngay trên nút:
    - Nếu đồng ý:
      * **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**
      * Hệ thống chuyển trạng thái phiếu kiểm kho sang **Chờ duyệt**.
    - Nếu đóng: thực hiện đóng popup xác nhận.

**Lưu ý:** Chỉ được duyệt phiếu kiểm kho trạng thái Khởi tạo 

**NPP hủy phiếu kiểm kho**

Đường dẫn: Kho -> Kiểm kho 

Để Hủy phiếu kiểm kho, người dùng nhấn chọn nút "Hủy phiếu kiểm kho" trên danh sách. Hệ thống thực hiện xử lý:

* Hiển thị popup **Xác nhận hủy phiếu kiểm kho**:
  + Nếu đồng ý: Hiển thị popup nhập Lý do hủy ( người dùng bắt buộc phải nhập lý do hủy"), sau đó người dùng có thể chọn: 
    - Nhấn Đồng ý: Hệ thống thực hiện cập nhật trạng thái phiếu kiểm kho sang **Đã hủy.**  
      * Nếu phiếu kiểm kho có thực hiện **Cập nhật tồn kho →** thực hiện revert lại tồn kho tương ứng
    - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.
  + Nếu đóng: thực hiện đóng popup xác nhận.

**Lưu ý:** Chỉ được hủy phiếu kiểm kho có trạng thái Khởi tạo 

## **HO xem danh sách phiếu kiểm kho**

Đường dẫn: Kho | Kiểm kho (HO)

Hệ thống hiển thị danh sách phiếu kiểm kho ở trạng thái "Chờ duyệt" , "Hoàn thành", "Từ chối"

Danh sách phiếu kiểm kho được hiển thị giống với Danh sách phiếu kiểm kho NPP và có 1 số thay đổi: 

| Trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Nhà phân phối | Badge | Hiển thị Mã NPP - Tên NPP |
| Lý do | Text | Chỉ hiển thị lý do khi phiếu kiểm kho ở trạng thái "Từ chối"   Hiển thị tối đa 20 ký tự, nếu dài hơn sẽ hiển thị truncated  Khi hover vào → hiển thị tooltips và nội dung đầy đủ |
| Nút "Đồng ý" | Icon Button | Chỉ hiện thị ở phiếu có trạng thái “Chờ duyệt”  Click vào nút "Đồng ý" → thực hiện luồng "HO Duyệt phiếu kiểm kho " |
| Nút "Từ chối" | Icon Button | Chỉ hiện thị ở phiếu có trạng thái “Chờ duyệt”   Click vào nút "Từ chối" → thực hiện luồng "HO Từ chối phiếu kiểm kho " |

**Tìm kiếm & Lọc phiếu kiểm kho**

Luồng tìm kiếm & lọc phiếu kiểm kho cũng như luồng đã được define ở **NPP Xem chi tiết phiếu kiểm kho. Có các thay đổi gồm:**

| Trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Trạng thái | Auto Complete | Lọc phiếu theo trạng thái    * Gồm các trạng thái {Chờ duyệt/Từ chối/Hoàn thành}. * Mặc định trống * Cho phép chọn nhiều trạng thái. * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |
| Nhà phân phối | Auto Complete | Lọc phiếu theo NPP  Mặc định trống  Cho phép chọn nhiều NPP  Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.  Có thể tìm kiếm NPP theo like mã NPP hoặc tên NPP . Nhập keyword vào Auto Complete → hệ thống dropdown menu danh sách NPP trực thuộc HO có mã hoặc tên gần giống với keyword   Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |

## **HO xem chi tiết phiếu kiểm kho**

Đường dẫn: Kho | Kiểm kho (HO)

Để xem chi tiết 1 phiếu kiểm kho, người dùng click chọn vào "Mã phiếu kiểm kho"

Hệ thống popup "Xem phiếu kiểm kho" có định dạng giống với **"NPP Xem chi tiết phiếu kiểm kho"**

HO chỉ xem được chi tiết phiếu kiểm kho ở trạng thái "Chờ duyệt", "Hoàn thành", "Từ chối"

|  |  |  |
| --- | --- | --- |
| **Trường thông tin** | **Định dạng** | **Mô tả chi tiết** |
| Nhà phân phối | Auto Complete | Hiển thị NPP khởi tạo phiếu kiểm kho trên (chỉ xem và không được thao tác)  Hiển thị định dạng: Mã NPP - Tên NPP |

## **HO đồng ý phiếu kiểm kho**

Đường dẫn:Kho | Kiểm kho (HO)

Để 'Đồng ý phiếu kiểm kho từ NPP" , HO click chọn nút "Đồng ý" → Hệ thống popup Dialog Confirmation "Xác nhận đồng ý phiếu kiểm kho" với 2 hành động: 

* Chọn "Đồng ý" → hệ thống thực hiện : 

  + **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**
  + Chuyển phiếu kiểm kho sang trạng thái "Hoàn thành"
  + Ghi nhận giá trị **tồn kho hệ thống** vào phiếu kiểm kho tại thời điểm đã đồng ý phiếu kiểm kho
  + **Quy tắc cập nhật tồn kho khi HO đồng ý duyệt phiếu kiểm kho**
* Chọn “Hủy” → hệ thống thực hiện đóng Confirmation Dialog

## **HO hủy phiếu kiểm kho**

Đường dẫn: Kho | Kiểm kho (HO)

Hiển thị popup **Xác nhận từ chối phiếu kiểm kho** với 2 hành động:

1. Nếu đồng ý: Hiển thị popup nhập Lý do hủy ( người dùng bắt buộc phải nhập lý do hủy), sau đó người dùng có thể chọn:

   1. Nhấn Đồng ý:

      1. Hệ thống thực hiện cập nhật trạng thái phiếu kiểm kho sang **Từ chối.**
      2. Nếu phiếu kiểm kho có thực hiện **Cập nhật tồn kho trước đó →** thực hiện revert lại tồn kho tương ứng
   2. Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.
2. Nhấn đóng: thực hiện đóng popup xác nhận.

**Lưu ý:** Chỉ được từ chối phiếu kiểm kho có trạng thái Chờ duyệt

# **Business rules**

## **Quy tắc cập nhật tồn kho khi NPP khởi tạo phiếu kiểm kho**

| Thông tin đầu vào | Quy trình xử lý | Kết quả đầu ra |
| --- | --- | --- |
| Phiếu kiểm kho:   1. Danh sách sản phẩm - chênh lệch tồn kho    1. Số lô - Chênh lệch tồn kho 2. Ngày kiểm kho 3. Kênh bán hàng 4. Kho | Xét từng sản phẩm, cập nhật tồn kho các bước sau:   1. Dựa vào kho, kênh và ngày kiểm kho, hệ thống lấy danh sách tồn kho có ngày nhập trước ngày kiểm kho 2. Nếu chênh lệch tồn kho >= 0 → Bỏ qua cập nhật tồn kho cho sản phẩm 3. Ngược lại thực hiện cập nhật tồn kho như sau:      1. Tăng "Tạm giữ" = Tạm giữ hiện tại + ABS (Chênh lệch tồn kho)    2. Tính lại "Có sẵn" = Tồn kho hệ thống - Tạm giữ | Cập nhật tồn kho |

Xem ví dụ dưới đây để hiểu chi tiết hơn

Ví dụ thông tin lô của sản phẩm A có ngày nhập hàng trước 11/12/2024 như sau: 

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Sản phẩm - SKU** | **Tồn kho hệ thống** | **Thông tin lô** | | | | | |
| **Ngày nhập** | **Lô** | **HSD** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| Kho hàng bán | GT | A - SKU0003 | 90 | 1/12 | L001 | 10/12/2025 | 5 | 0 | 5 |
| 5/12 | L002 | 10/12/2026 | 20 | 0 | 20 |
| 11/12 | L003 | 10/12/2027 | 35 | 10 | 25 |
| 15/12 | L001 | 10/12/2025 | 20 | 0 | 20 |
| 16/12 | L002 | 10/12/2026 | 10 | 10 | 0 |

**Trường hợp 1:** **Phiếu kiểm kho EW192342**

* **KHo hàng bán**
* **Ngày kiểm kho 11/12/2024**
* **Sản phẩm A - SKU0003 - Chênh lệch tồn kho : -20**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Thông tin lô** | | | | |
| **Ngày nhập** | **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** |
| A - SKU0003 | -20 | 60 | 1/12 | L001 | 10/12/2025 | 0 | 5 |
| 5/12 | L002 | 10/12/2026 | 0 | 20 |
| 11/12 | L003 | 10/12/2027 | -20 | 35 |

**Bước 1: Dựa vào kho, kênh và ngày kiểm kho, hệ thống lấy danh sách tồn kho có ngày nhập trước ngày kiểm kho**

**Lấy thông tin nhập kho ngày 1/12, 5/12, 11/12**

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Sản phẩm - SKU** | **Tồn kho hệ thống** | **Thông tin lô** | | | | | |
| **Ngày nhập** | **Lô** | **HSD** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| Kho hàng bán | GT | A - SKU0003 | 60 | 1/12 | L001 | 10/12/2025 | 5 | 0 | 5 |
| 5/12 | L002 | 10/12/2026 | 20 | 0 | 20 |
| 11/12 | L003 | 10/12/2027 | 35 | 10 | 25 |

**Bước 2: Nếu độ chênh lệch < 0 → cập nhật tồn kho**

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Sản phẩm - SKU** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | | | |
| **Ngày nhập** | **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| Kho hàng bán | GT | A - SKU0003 | -20 | 60 | 30 ( 20 là số tạm giữ của phiếu kiểm kho) | 30 | 1/12 | L001 | 10/12/2025 | 0 | 5 | 0 | 5 |
| 5/12 | L002 | 10/12/2026 | 0 | 20 | 0 | 20 |
| 11/12 | L003 | 10/12/2027 | -20 | 35 | 30 (20 là số tạm giữ của phiếu kiểm kho) | 5 (35 - 30) |

Hoàn tất quá trình cập nhật tồn kho

## **Quy tắc đề xuất chênh lệch tồn kho từng lô khi kiểm kho**

| Thông tin đầu vào | Quy trình xử lý | Kết quả đầu ra |
| --- | --- | --- |
| Sản phẩm - Số lượng chênh lệch tồn kho  Ngày kiểm kho  Kho   Kênh bán hàng | 1. Dựa vào "Ngày kiểm kho" & "Kênh bán hàng" & "Kho", hệ thống lấy danh sách nhập kho thuộc kho & kênh bán hàng được chọn, có ngày nhập hàng diễn ra trước ngày kiểm kho 2. Dựa vào cặp số lô - hạn sử dụng, đề xuất theo thứ tự lô có HSD gần nhất đến xa nhất 3. Đối với điều chỉnh giảm    1. Thực hiện quy tắc trừ đần độ chênh lệch tồn kho theo thứ tự đề xuất        1. Đề xuất chênh lệch tồn kho cho lô có HSD gần nhất đề xuất trước, nếu còn số lượng phải đề xuất → tiếp tục đề xuất lô tiếp theo       2. Xem ví dụ dưới đây để hiểu quy tắc cộng chênh lệch tồn kho 4. Đối với điều chỉnh tăng    1. Toàn bộ chênh lệch được cộng vào lô có HSD gần nhất | Danh sách số lượng tồn kho thực tế của Lô |

Xem ví dụ dưới đây để hiểu quy tắc đề xuất tồn kho thực tế từng lô:

Ví dụ thông tin lô của sản phẩm A có ngày nhập hàng trước 11/12/2024 như sau: 

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Tồn kho hệ thống** | **Thông tin lô** | | | | |
| **Lô** | **HSD** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| A - SKU0003 | 60 | L001 | 10/12/2025 | 15 | 10 | 5 |
| L002 | 10/12/2026 | 20 | 0 | 20 |
| L003 | 10/12/2027 | 35 | 10 | 25 |

**Trường hợp 1:** **Phiếu kiểm kho EW192342**

* **Sản phẩm A - SKU0003 - Chênh lệch tồn kho: -20**
* **KHo hàng bán**
* **Ngày kiểm kho 11/12/2024**

Dựa vào HSD, thứ tự đề xuất lô lần lượt là L001, L002, L003

Áp dụng quy tắc cộng dần độ chênh lệch tồn kho theo thứ tự đề xuất

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Thông tin lô** | | | | | | |
| **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** | **Giải thích chi tiết** |
| A - SKU0003 | -20 | 60 | L001 | 10/12/2025 | **-5** | 15 | 10 | 5 | L001 có "Có sẵn" là 5 → đề xuất Chênh lệch tồn kho -5 Chênh lệch tồn kho cần đề xuất: -20 + 5 = -15 |
| L002 | 10/12/2026 | **-15** | 20 | 0 | 20 | L002 có Có sẵn là 20 → đề xuất chênh lệch tồn kho -15  Kết thúc đề xuất |
| L003 | 10/12/2027 | **0** | 35 | 10 | 25 | L003 dề xuất chênh lệch là 0 |

**Trường hợp 2:** **Phiếu kiểm kho EW134182**

* **Sản phẩm A - SKU0003 - Chênh lệch tồn kho : 20**
* **KHo hàng bán**
* **Ngày kiểm kho 11/12/2024**

Hệ thống tính độ chênh lệch = 80 - 60 = 20

Dựa vào HSD, thứ tự đề xuất lô lần lượt là L001, L002, L003

Áp dụng quy tắc cộng dần độ chênh lệch tồn kho theo thứ tự đề xuất

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Thông tin lô** | | | | | | |
| **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** | **Giải thích chi tiết** |
| A - SKU0003 | 20 | 60 | L001 | 10/12/2025 | **20** | 15 | 10 | 5 | Vì là đề xuất tăng, toàn bộ số chênh lệch tồn kho được đề xuất vào lô có HSD gần nhất  **Chênh lệch L001 = 20** |
| L002 | 10/12/2026 | **0** | 20 | 0 | 20 | Chênh lệch L002 = 0 |
| L003 | 10/12/2027 | **0** | 35 | 10 | 25 | Chênh lệch L003 = 0 |

## **Quy tắc kiểm tra tồn kho thực tế hợp lệ**

| Thông tin đầu vào | Quy trình xử lý | Kết quả trả ra |
| --- | --- | --- |
| Sản phẩm - tồn kho thực tế    * Danh sách lô - HSD - tồn kho thực tế   Ngày kiểm kho | Bước 1: Kiểm tra **chênh lệch tồn kho** thực tế so với **tồn kho có sẵn** của sản phẩm   1. Tính tồn kho có sẵn theo **Quy tắc lấy tồn kho đáp ứng** dựa vào ngày kiểm kho (tính tồn kho các lô nhập hàng có ngày nhập hàng trước ngày kiểm kho, thuộc kho và kênh được người dùng chọn) 2. Nếu số Chênh lệch tồn kho  < Tồn kho có sẵn → Trả về lỗi "Chênh lệch tồn kho vượt quá mức cho phép" 3. Ngược lại, kết quả "Hợp lệ" → tiếp tục bước 2   Bước 2: Nếu bước (1) thỏa, xét tiếp tục điều kiện Chênh lệch tồn kho thực tế so với tồn kho hệ thống của từng lô. Lần lượt xét từng cặp lô - HSD   1. Tiếp tục các bước tính toán như các bước kiểm tra chênh lệch tồn kho thực tế so với hệ thống ở sản phẩm   Nếu thỏa bước (1) & (2) → trả về kết quả Hợp lệ  Ngược lại, trả về kết quả "Không hợp lệ" | Hợp lệ hoặc không hợp lệ |

Xem ví dụ dưới đây để hiểu chi tiết : 

Thông tin tồn kho sản phẩm A 

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Tồn kho hệ thống** | **Thông tin lô** | | | | |
| **Lô** | **HSD** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| A - SKU0003 | 45 | L001 | 10/12/2025 | 25 | 10 | 15 |
| L002 | 10/12/2026 | 20 | 0 | 20 |

**Trường hợp 1: Phiếu kiểm kho A**

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Tồn kho hệ thống** | **Chênh lệch tồn kho** | **Thông tin lô** | | | | | |
| **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| A - SKU0003 | 45 | -25 | L001 | 10/12/2025 | -20 | 25 | 10 | 15 |
| L002 | 10/12/2026 | -5 | 20 | 0 | 20 |

Bước 1: Kiểm tra chênh lệch tồn kho thực tế so với tồn kho của sản phẩm

* Vì chênh lệch < 0 & (ABS Chênh lệch) <= Available (25 < 35) → Tiếp tục xét tới bước 2

Bước 2: Kiểm tra chênh lệch tồn kho thực tế so với hệ thống của lô

* Chênh lệch lô L001 = -20 < 0
* ABS(độ chênh lệch) > Available (20 > 15) → Trả về lỗi "Số lượng tồn kho thực tế vượt mức cho phép"

Bước (2) không hợp lệ , hệ thống trả lỗi "Số lượng tồn kho thực tế vượt mức cho phép"

**Trường hợp 2: Phiếu kiểm kho A**

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Tồn kho hệ thống** | **Chênh lệch tồn kho** | **Thông tin lô** | | | | | |
| **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| A - SKU0003 | 45 | 35 | L001 | 10/12/2025 | 15 | 25 | 10 | 15 |
| L002 | 10/12/2026 | 20 | 20 | 0 | 20 |

Bước 1: Kiểm tra chênh lệch tồn kho thực tế so với tồn kho của sản phẩm

* Vì chênh lệch > 0 & (ABS Chênh lệch) <= Available (25 < 35) → Tiếp tục xét tới bước 2

Bước 2: Kiểm tra chênh lệch tồn kho thực tế so với hệ thống của lô

* Chênh lệch lô L001 = -20 > 0 & Chênh lệch lô L002 = 20 > 0

Bước (2) không hợp lệ , hệ thống trả lỗi "Số lượng tồn kho thực tế vượt mức cho phép"

Bước (1) & (2) đều thỏa, hệ thống trả kết quả hợp hệ

## **Quy tắc cập nhật tồn kho sau khi tạo phiếu kiểm kho**

**Tiền điều kiện**

* Phiếu kiểm kho hợp lệ theo **Quy tắc Kiểm tra tồn kho hợp lệ**
* Phiếu kiểm kho có độ chênh lệch tồn kho < 0

| Thông tin đầu vào | Quy trình xử lý | Kết quả trả ra |
| --- | --- | --- |
| 1. Sản phẩm - chênh lệch tồn kho 2. Danh sách lô - chênh lệch tồn kho 3. Ngày kiểm kho | Bước 1: Hệ thống ghi nhận giá trị tồn kho hệ thống vào phiếu kiểm kho tại thời điểm HO đồng ý phiếu (Mục tiêu sau khi người dùng xem lại phiếu kiểm kho trên có thể xem được chính xác tồn kho hệ thống tại thời điểm đồng ý phiếu của HO)  Bước 2: Nếu phiếu kiểm kho không có cập nhật tồn kho trước đó (bỏ qua bước này). Nếu có, hệ thống revert lại kho ở thời điểm trước khi tạo phiếu kiểm kho   1. Tạm giữ = Tạm giữ - (số tạm giữ phiếu kiểm kho A)   Bước 3: Hệ thống cập nhật tồn kho sản phẩm & lô   1. Cập nhật tồn kho hệ thống = tồn kho thực tế 2. Tính lại Có sẵn = Tồn kho hệ thống - tạm giữ | 1. Ghi nhận phiếu kiểm kho tại thời điểm HO duyệt 2. Cập nhật lại tồn kho sản phẩm & lô |

Xem ví dụ dưới đây để hiểu quy tắc cập nhật tồn kho sau khi tạo phiếu kiểm kho

**Phiếu kiểm kho A - Ngày 1/10 - trạng thái “Chờ duyệt” :**

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Tồn kho thực tế** | **Tồn kho thực tế** | **Thông tin lô** | | | |  |  |
| **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| A - SKU0003 | -15 | 45 | L001 | 10/12/2025 | -5 | 25 | 15  (5 là số tạm giữ cho phiếu kiểm kho A) | 10 |
| L002 | 10/12/2026 | -10 | 20 | 10  (10 là số tạm giữ cho phiếu kiểm kho A) | 10 |

Ngày 4/10, tồn kho hệ thống bị thay đổi, số tồn kho hệ thống của SP A - lô L001 **tăng lên 5 vì Lô L001 có 1 phiếu nhập hàng vào trước ngày 1/10 (trước thời điểm tạo phiếu kiểm kho)**

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Thông tin lô** | | | |  |  |
| **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| A - SKU0003 | -15 | 50 | L001 | 10/12/2025 | -5 | 30 | 15  (5 là số tạm giữ cho phiếu kiểm kho A) | 15 |
| L002 | 10/12/2026 | -10 | 20 | 10  (10 là số tạm giữ cho phiếu kiểm kho A) | 10 |

**Ngày 4/10, HO duyệt phiếu kiểm kho.**

**Bước 1: Hệ thống ghi nhận giá trị tồn kho hệ thống vào phiếu kiểm kho tại thời điểm**

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Trạng thái** | **Thông tin lô** | | | |
| **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** |
| A - SKU0003 | -15 | 50 | Hoàn thành | L001 | 10/12/2025 | -5 | 30 |
| L002 | 10/12/2026 | -10 | 20 |

**Bước 2: Nếu phiếu kiểm kho không có cập nhật tồn kho trước đó (bỏ qua bước này). Nếu có, hệ thống revert lại kho ở thời điểm trước khi tạo phiếu kiểm kho**

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Thông tin lô** | | | |  |  |
| **Lô** | **HSD** | **Chênh lệch tồn kho** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| A - SKU0003 | -15 | 50 | L001 | 10/12/2025 | -5 | 30 | 10 (15 - 5) (5 là số tạm giữ cho phiếu kiểm kho A) | 20 |
| L002 | 10/12/2026 | -10 | 20 | 0  (10 là số tạm giữ cho phiếu kiểm kho A) | 20 |

**Bước 3: Hệ thống cập nhật tồn kho sản phẩm & tồn kho của lô**

1. Cập nhật tồn kho hệ thống = tồn kho hệ thống +chênh lệch tồn kho
2. Tính lại Có sẵn = Tồn kho hệ thống - tạm giữ

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Sản phẩm - SKU** | **Tồn kho hệ thống** | **Thông tin lô** | | |  |  |
| **Lô** | **HSD** | **Tồn kho hệ thống** | **Tạm giữ** | **Có sẵn** |
| A - SKU0003 | 30 | L001 | 10/12/2025 | 25 (30 - 5) | 10 | 15 |
| L002 | 10/12/2026 | 10 (20-5) | 0 | 10 |