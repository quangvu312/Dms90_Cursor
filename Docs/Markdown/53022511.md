true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-730Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-731Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-732Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-733  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-734Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-735Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-823 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-824 |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

3

**BACKLOG**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |

# **Requirement**

Chức năng cho phép người dùng chuyển hàng từ 1 kho NPP A sang kho của 1 NPP B.

Phân quyền chức năng theo [Tài liệu phân quyền](https://kb.finviet.com.vn/x/iG4pAw)

## **Quy trình nghiệp vụ Chuyển kho NPP**

Quy trình mô tả nghiệp vụ Nhà Phân phối A chuyển hàng sang kho NPP B

trueQuy trình nghiệp vụ Phiếu chuyển kho NPP2oqCLNb6USz3FQ03btJWfalse14007baeb9dbccf9a4c39d1b2ee74566ae07de4e4bc1autotoptrue263212

## **Trạng thái phiếu chuyển kho**

trueTrạng thái phiếu chuyển khofalseautotoptrue12008

## **Tạo phiếu chuyển kho NPP**

Đường dẫn: Kho → Chuyển kho → Chuyển kho NPP

Để thêm mới phiếu chuyển kho, người dùng nhấn chọn nút "Thêm mới" tại màn hình Danh sách Phiếu Chuyển Kho → Hệ thống popup Dialog "Thêm phiếu chuyển kho" với mô tả được define dưới đây

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Ngày chuyển kho | Date Picker | Bắt buộc | Giá trị mặc định là "Trống"  Click chọn và Date Picker để chọn ngày chuyển kho |
| Kho chuyển | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Nhấn chọn hoặc nhập keyword tìm kiếm vào đây -> Hệ thống popup danh sách kho trực thuộc Nhà phân phối và cho phép tìm kiếm kho chuyển theo tên kho  Chỉ được chọn 1 kho chuyển |
| Kênh bán hàng | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Nhấn chọn hoặc nhập keyword tìm kiếm vào đây  -> Hệ thống popup dropdown danh sách Kênh bán hàng còn hoạt động và cho phép tìm kiếm kênh bán hàng theo tên kênh  Chỉ được chọn 1 kênh bán hàng |
| Nhà phân phối nhận | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Nhấn chọn hoặc nhập keyword tìm kiếm vào đây -> Hệ thống popup danh sách Nhà phân phối cùng cấp và cùng trực thuộc NPP cha   Cho phép tìm kiếm NPP nhận theo mã hoặc tên NPP  Chỉ được chọn 1 NPP nhận |
| Danh sách sản phẩm | Table | Bắt buộc | Hiển thị danh sách sản phẩm được thêm ở bước **Thêm sản phẩm vào phiếu (được define bên dưới)**  Nếu chưa có sản phẩm nào được chọn, hiển thị Giao diện trống  Nếu có, hiển thị danh sách sản phẩm theo Mô tả **Table "Danh sách sản phẩm" (****được define ở dưới).** |
| Nút "Lưu" | Button |  | Sau khi hoàn tất nhập thông tin, người dùng nhấn "Lưu" , hệ thống thực hiện kiểm tra và xử lý:  * Kiểm tra:   + Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.   + Thực hiên tính lại cột ***Có sẵn*** trong Thông tin lô theo **[Quy tắc tính tồn kho tại Thông tin lô](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445066#id-[NPP]Xu%E1%BA%A5tkho-tinhtonkho),**nếu số lượng lớn hơn **Có sẵn** mới, báo lỗi: *"Số lượng chuyển không được lớn hơn số lượng có sẵn".* * Xử lý: Hiển thị popup xác nhận ngay trên nút:   + Nếu đồng ý:     - * Hệ thống tạo dữ liệu phiếu chuyển kho NPP với trạng thái **Khởi tạo**.       * Cập nhật tồn kho theo **[Quy tắc cập nhật tồn kho sau khi tạo phiếu chuyển kho NPP](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53022511#Chuy%E1%BB%83nkhoNPP-Quyt%E1%BA%AFcc%E1%BA%ADpnh%E1%BA%ADtt%E1%BB%93nkhosaukhiduy%E1%BB%87tphi%E1%BA%BFuchuy%E1%BB%83nkhoNPP).**       * Hệ thống generate mã nhân hàng theo cấu trúc [RWXXXXXX]. XXXXXX là STT 6 số tăng dần.       * Mã chuyển kho được generate theo cấu trúc [EWXXXXXX] (XXXXXX là số thứ tự 6 số tăng dần)   + Nếu đóng: thực hiện đóng popup xác nhận. |
|  |  |  |  |
| --- | --- | --- | --- |
| Nút "Đóng" | Button |  | Ngừng thao tác tạo phiếu chuyển kho bằng cách click nút "Đóng" -> hệ thống popup Confirmation Dialog    * + Xác nhận: Đóng popup "Thêm mới phiếu chuyển kho NPP" và không thực hiện hành động gì.   + Đóng: Đóng Confirmation Dialog và tiếp tục luồng thêm mới. |
| *Lưu ý: Nếu người dùng chọn lại 1 trong 3 thông tin "Kênh bán hàng", "Kho chuyển", "Ngày chuyển kho" và Danh sách sản phẩm đang có ít nhất 1 sản phẩm, hệ thống popup Dialog Confirmation "Cập nhật thông tin" với 2 thao tác:*   * *Nhấn "Xác nhận": Hệ thống đưa danh sách sản phẩm về măc định* * *Nhấn "Đóng": Đóng Confirmation Dialog và không thực hiện cập nhật thông tin gì* | | | |

**Mô tả luồng thêm sản phẩm vào phiếu**

|  |  |  |  |
| --- | --- | --- | --- |
| * Click vào nút "Thêm sản phẩm"→ Hệ thống thêm 1 row record vào Table → Người dùng click chọn vào ô "Tìm kiếm theo mã SKU" và nhập keyword tìm kiếm (tìm kiếm tối đa 200 ký tự dưới dạng string) → Hệ thống hiển thị popup kết quả tìm kiếm gồm các sản phẩm thỏa mãn tất cả điều kiện:   + Sản phẩm thuộc kho chuyển được chọn trên phiếu   + Sản phẩm có "Available" > 0 (Available được tính dựa trên ngày chuyển kho được chọn trên phiếu)   + Kênh bán hàng của sản phẩm trùng với kênh bán hàng được chọn trên phiếu   **Lưu ý: Thêm sản phẩm vào phiếu tuân theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**   * Popup kết quả tìm kiếm bao gồm:    + Mã SKU   + Tên sản phẩm   + Đơn vị cơ bản   + Nút Đóng: Click vào đây -> đóng bảng kết quả tìm kiếm và xóa keyword trong field Tìm kiếm   + Nút Hoàn tất: Click vào đây -> đóng bảng kết quả tìm kiếm và thêm các sản phẩm đã chọn vào danh sách sản phẩm trên phiếu chuyển kho. | | | |

**Mô tả Table "Danh sách sản phẩm"**

|  |  |  |  |
| --- | --- | --- | --- |
| **Trường thông tin** | **Định dạng** | **Quy tắc** | **Mô tả chi tiết** |
| Mã SKU | Text | - | Hệ thống hiển thị SKU của sản phẩm |
| Tên sản phẩm | Text | - | Hệ thống hiển thị tên sản phẩm |
| Số lượng có sẵn | Number | - | Dựa vào "Ngày chuyển kho", "Kho chuyển", "Kênh bán hàng" được chọn trên phiếu, hệ thống hiển thị số lượng có sẵn của sản phẩm theo **[Quy tắc lấy số lượng có sẵn từ kho chuyển dựa vào ngày chuyển kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFcl%E1%BA%A5ys%E1%BB%91l%C6%B0%E1%BB%A3ngc%C3%B3s%E1%BA%B5nt%E1%BB%ABkhochuy%E1%BB%83nd%E1%BB%B1av%C3%A0ong%C3%A0ychuy%E1%BB%83nkho)** |
| Số lượng chuyển kho | Input Number | Bắt buộc | Giá trị mặc định là "Trống"  Người dùng nhập số lượng chuyển kho  Số lượng chuyển kho phải lớn hơn 0  Số lượng chuyển kho là số nguyên  Khi thay đổi số lượng chuyển kho → Thực hiện luồng Đề xuất thông tin Lô theo **[Quy tắc đề xuất thông tin lô sản phẩm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFc%C4%91%E1%BB%81xu%E1%BA%A5tth%C3%B4ngtinl%C3%B4s%E1%BA%A3nph%E1%BA%A9m)** |
| Đơn vị tính | Auto Complete | Bắt buộc | Giá trị mặc định là đơn vị cơ bản   Để thay đổi đơn vị quy đổi → người dùng click chọn Ô Đơn vị tính và nhập keyword tìm kiếm → Hệ thống hiển thị option các đơn vị tính theo sản phẩm  Có thể chọn các đơn vị quy đổi khác |
| Thông tin lô | Icon Button | - | Click chọn button "Thêm mới" → Popup Dialog Thông tin lô được đề xuất theo quy tắc **[Quy tắc đề xuất thông tin lô sản phẩm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFc%C4%91%E1%BB%81xu%E1%BA%A5tth%C3%B4ngtinl%C3%B4s%E1%BA%A3nph%E1%BA%A9m)**  Hiển thị danh sách Lô theo **Mô tả Danh sách lô** được define dưới đây |
| Nút Xóa | Button | - | Nhấn nút xóa → hệ thống xóa dòng record tương ứng |

**Mô tả Danh sách lô**

|  |  |  |  |
| --- | --- | --- | --- |
| **Trường thông tin** | **Định dạng** | **Quy tắc** | **Mô tả chi tiết** |
| Số lô | Text | - | Hệ thống hiển thị số lô |
| Số lượng Có sẵn | Number | - | Hệ thống hiển thị số lượng có sẵn |
| Số lượng chuyển kho | Input Number | Bắt buộc | Giá trị mặc định là số lượng được đề xuất  Min là 0  Số lượng chuyển kho trong lô là số nguyên |
| Hạn sử dụng | Date | - | Hệ thống hiển thị hạn sử dụng của sản phẩm  Định dạng là DD-MM-YYYY |
| Nút "Lưu" | Button | - | Bấm Lưu -> hệ thống kiểm tra Tổng số lượng trong lô phải bằng số lượng sản phẩm ngoài danh sách   * Nếu đúng -> lưu lại và back về màn hình Danh sách sản phẩm * Nếu sai -> Thực hiện cập nhật lại số lượng bên ngoài sản phẩm   Lưu ý: Đảm bảo rules Tổng số lượng các lô = Số lượng bên ngoài sản phẩm |
| Nút "Đóng" | Button | - | Bấm Đóng → Hệ thống đóng popup và bỏ qua các thay đổi về số lô của người dùng |

## **Xem danh sách phiếu chuyển kho NPP**

Đường dẫn: Kho | Chuyển kho | Chuyển kho NPP

Hệ thống load Danh sách Phiếu chuyển kho NPP theo cấu trúc dưới đây

| Trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| **Mô tả thông tin Phiếu chuyển kho** | | |
| Mã chuyển kho | Text | Hiển thị mã chuyển kho  Mã chuyển kho được generate theo cấu trúc [EWXXXXXX] (XXXXXX là số thứ tự 6 số tăng dần)  Click vào mã chuyển kho  -> hiển thị màn hình Xem chi tiết phiếu chuyển kho |
| Ngày chuyển kho | Date | Hiển thị định dạng DD-MM-YYYY |
| Kho chuyển | Text | Hiển thị tên kho chuyển |
| Nhà phân phối nhận | Date | Hiển thị theo cấu trúc [Mã NPP nhận]-[Tên NPP nhận] |
| Trạng thái | Badge | Hiển thị trạng thái phiếu chuyển kho  Có 4 trạng thái: Khởi tạo, Đã duyệt, Đã hủy, Từ chối, Hoàn thành |
| Lý do | Text | Chỉ hiển thị lý do khi phiếu chuyển kho ở trạng thái "Đã hủy" hoặc "Từ chối"  Hiển thị tối đa 20 ký tự, nếu dài hơn sẽ hiển thị truncated  Khi hover vào → hiển thị tooltips và nội dung đầy đủ |
| Ngày tạo | Date | Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Ngày cập nhật | Date | Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Người tạo | Text | Hiển thị username của tài khoản |
| Người cập nhật | Text | Hiển thị username của tài khoản người cập nhật  Khi phiếu chuyển qua trạng thái "Từ chối" hoặc "Hoàn thành" → hiển thị user name System Admin (vì hệ thống tự chuyển phiếu chuyển kho khi phiếu nhập kho được duyệt hoặc hủy ) |
| Phân trang | Pagination | Phân trang theo {10; 50; 100} |
| Nút Duyệt | Icon Button | Chỉ hiện thị ở phiếu có trạng thái “Khởi tạo” |
| Nút Hủy | Icon Button | Chỉ hiện thị ở phiếu có trạng thái “Khởi tạo”. |
| Nút Chỉnh sửa | Icon Button | Chỉ hiện thị ở phiếu có trạng thái "Khởi tạo". |

**Tìm kiếm & Lọc phiếu chuyển kho NPP**

| Trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Tìm kiếm | Input search | Tìm kiếm Phiếu theo Mã chuyển kho : tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string).  Mặc định trống.  Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.  Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |
| Trạng thái | Auto Complete | Lọc phiếu theo trạng thái   * Gồm các trạng thái {Khởi tạo/Đã duyệt/Đã hủy/Từ chối/Hoàn thành}. * Mặc định trống * Cho phép chọn nhiều trạng thái. * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |
| Nhà phân phối nhận | Auto Complete | Lọc phiếu theo Nhà phân phối nhận   * Khi click để chọn Nhà phân phối nhân, hệ thống hiển thị danh sách Nhà phân phối cùng cấp và có cùng NPP cha   Mặc định trống |
| Start Date & End date | Date Picker | Lọc phiếu có ngày chuyển kho trong khoảng thời gian được chọn   * End date > start date   Mặc định trống |
| Nút "Tìm kiếm" | Button | Click vào nút -> thực hiện tìm kiếm theo điều kiện lọc |
| Nút "Làm mới" | Button | Reset bộ Filter về giá trị mặc định |

## **Xem chi tiết phiếu chuyển kho** **NPP**

Đường dẫn: Kho | Chuyển kho | Chuyển kho NPP

Để xem chi tiết 1 phiếu chuyển kho, người dùng click chọn "Mã chuyển Kho" trên danh sách

Hệ thống popup Dialog "Xem phiếu chuyển kho NPP" được mô tả dưới đây

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Ngày chuyển kho | Date Picker | Hiển thị ngày chuyển kho |
| Kho chuyển | Auto Complete | Hiển thị tên kho chuyển |
| Nhà phân phối nhận | Auto Complete | Hiển thị theo cấu trúc [Mã Nhà phân phối nhận] - [Tên nhà phân phối nhận] |
| Kênh bán hàng | Auto Complete | Hiển thị kênh bán hàng |
| Trạng thái | Tag | Hiển thị trạng thái |
| Lý do | Text | Chỉ hiển thị với phiếu có trạng thái là "Đã hủy" hoặc "Từ chối"  Phiếu ở trạng thái đã hủy có 2 trường hợp:   * NPP chuyển hủy phiếu chuyển kho→ hiển thị lý do hủy do **NPP chuyển** nhập trong **phiếu chuyển kho** * NPP nhận hủy phiếu nhập kho → hiển thị lý do hủy do **NPP nhận** hủy **phiếu nhập kho** |
| Danh sách sản phẩm | Table | HIển thị theo format **Danh sách sản phẩm** được define bên dưới |
| Nút "Đóng" | Button | Nhấn nút "Đóng" → hệ thống đóng popup "Xem phiếu chuyển kho" |

**Danh sách sản phẩm**

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Mã SKU | Text | Hiển thị SKU |
| Tên sản phẩm | Text | Hiển thị Tên sản phẩm |
| Số lượng | Text | Hiển thị số lượng chuyển |
| Có sẵn | Text | Hiển thị số lượng có sẵn  Với phiếu ở trạng thái "Đã hủy", "Từ chối", "Hoàn thành" → Hiển thị số lượng có sẵn  Với phiếu ở trạng thái "Khởi tạo", "Đã duyệt" → hiển thị số lượng có sẵn = có sẵn + số lượng chuyển |
| Đơn vị tính | Text | Hiển thị đơn vị tính |
| Thông tin lô | Icon button | Nhấn vào nút "Xem" → hệ thống đóng popup "Xem thông tin lô" |

**Thông tin lô**

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Số lượng | Text | Hiển thị số lượng |
| Có sẵn | Text | Với phiếu ở trạng thái "Đã hủy", "Từ chối", "Hoàn thành" → Hiển thị số lượng có sẵn  Với phiếu ở trạng thái "Khởi tạo", "Đã duyệt" → hiển thị số lượng có sẵn = có sẵn + số lượng chuyển |
| Số lô | Text | Hiển thị số lô |
| Hạn sử dụng | Date | Hiển thị định dạng DD-MM-YYYY |
| Nút Đóng | Button | Nhấn nút đóng → hệ thống đóng popup "Xem thông tin lô" |

## **Chỉnh sửa phiếu chuyển kho NPP**

Đường dẫn: Kho | Chuyển kho | Chuyển kho NPP

Để chỉnh sửa 1 phiếu chuyển kho, người dùng click chọn nút "Chỉnh sửa" (nút chỉnh sửa chỉ xuất hiện khi phiếu ở trạng thái "Khởi tạo")

Hệ thống popup **Form** **Cập nhật phiếu chuyển kho** hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:

| Mô tả chi tiết | UI & WIREFRAME |
| --- | --- |
| "**Thêm mới phiếu chuyển kho NPP**" đổi thành "**Cập nhật phiếu chuyển kho NPP**". | N/A |
| Khi cập nhật sẽ cho phép sửa hết toàn bộ thông tin phiếu. | N/A |
| Khi hệ thống bật Popup "Cập nhật Phiếu chuyển kho" , số lượng **"Có sẵn" trong Lô và "Có sẵn" ngoài sản phẩm** trong từng sản phẩm được tính theo các bước sau   1. Thực hiện lấy số **Tạm giữ** của phiếu chuyển kho cộng với **Có sẵn** của sản phẩm. 2. Sử dụng **Quy tắc lấy tồn kho đáp ứng** dựa theo số đã tính ở bước 1 để hiển thị tồn kho   Xem ví dụ sau để hiểu chi tiết hơn  Giả sử sản phẩm A (SKU 001) có thông tin nhập hàng như sau:   |  |  |  |  |  |  |  |  |  |  |  | | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông tin ngày nhập và lô** | | | | | | | **Ngày nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | | Hàng bán | GT | 85 | 0 | 85 | 1/11 | L001 | 30/12 | 290 | 10  (PCK01 tạm giữ 10) | 300 | | 2/11 | L002 | 4/12 | 60 | 40  (PCK01 tạm giữ 40) | 100 | | 5/11 | L003 | 3/12 | 200 | 0 | 200 | | 9/11 | L001 | 7/12 | 0 | 100  (PCK01 chỉ tạm giữ 50) | 100 | | 15/11 | L001 | 6/12 | 150 | 0 | 150 |   **Bước 1:**Thực hiện lấy số **Tạm giữ** của phiếu chuyển kho cộng với **Có sẵn** của sản phẩm.   | Ngày nhập | Số lô | Ngày hết hạn | Số lượng có sẵn  (hiển thị Table Sản phẩm PCK 01) | Giải thích chi tiết | | --- | --- | --- | --- | --- | | 1/11 | L001 | 30/12 | 300 | Có sẵn = 290 + 10 = 300 (vì PCK01 đang tạm giữ 10) | | 2/11 | L002 | 4/12 | 100 | Có sẵn = 60 + 40 = 100 (vì PCK01 đang tạm giữ 40) | | 5/11 | L003 | 3/12 | 200 | - | | 9/11 | L001 | 7/12 | 50 | Có sẵn = 0 + 50 = 50 (vì PCK01 đang tạm giữ 50) | | 15/11 | L001 | 6/12 | 150 | - |   **Bước 2:** Sử dụng **Quy tắc lấy tồn kho đáp ứng** tại **ngày chuyển kho 10/11/2024 →** Chỉ tính tồn kho đáp ứng với các dữ liệu nhập kho ngày 1/11, 2/11, 5/11, 9/11  **Số lượng tồn kho của Lô:**   | Số lượng chuyển | Số lượng có sẵn | Số lô | Hạn sử dụng | | --- | --- | --- | --- | | 10 | 300 | L001 | 30/12 | | 40 | 100 | L002 | 4/12 | | 0 | 200 | L003 | 3/12 | | 50 | 50 | L001 | 7/12 |   **→ Tổng tồn kho (có sẵn) sản phẩm A = 650** |  |
| **Lưu:** Sau khi nhấn Lưu, hệ thống thực hiện:   * Kiểm tra:   + Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo "Trường <a> là bắt buộc". Với <a> là tên trường.   + Nếu có sản phẩm để số lượng là trống hoặc 0 thì thì báo lỗi trên từng line sản phẩm với thông báo "Vui lòng nhập số lượng cho sản phẩm".   + Kiểm tra tồn kho theo **Quy tắc tồn kho**, nếu không đủ tồn kho thì báo lỗi "Tồn kho không đáp ứng" dưới mỗi dòng dữ liệu.   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - * Nếu đồng ý:          + **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**         + Thực hiện tính toán lại tồn kho:            - Bước 1: Thực hiện trả lại **Tồn kho đáp ứng.**           - Bước 2: Tính lại tồn theo **Cập nhật tồn kho theo tạo mới Phiếu chuyển kho**.       * Nếu hủy → Đóng popup lại và không thực hiện thay đổi gì | |
| Mã nhận hàng: Hiển thị mã nhận hàng được generate khi khởi tạo phiếu chuyển kho NPP | |
| Lưu & Duyệt:   1. **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)** 2. Thực hiện luồng Cập nhật Phiếu chuyển kho 3. Thực hiện luồng Duyệt phiếu chuyển kho | |
| *Lưu ý: Tại màn hình edit, nếu các trường chọn giá trị đang lưu 1 giá trị không hoạt động thì hệ thống sẽ hiển thị field đó là rỗng mà không cần báo lỗi gì, nếu người dùng không chọn lại mà nhấn lưu thì sẽ báo lỗi nếu trường đó bắt buộc hoặc lưu rỗng nếu trường đó không bắt buộc.* | |

## **Duyệt phiếu chuyển kho NPP**

Đường dẫn: Kho | Chuyển kho | Chuyển kho NPP

Chỉ Nhà phân phối chuyển mới được duyệt phiếu chuyển kho

Chọn nút Duyệt một phiếu chuyển kho trên danh sách

Chỉ được duyệt phiếu chuyển kho ở trạng thái "Khởi tạo"

Xử lý: Hiển thị popup "Xác nhận duyệt phiếu chuyển kho" ngay trên nút:

* + Xử lý: Hiển thị popup xác nhận ngay trên nút:
    - Nếu đồng ý: Hệ thống thực hiện
      * **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**
      * Chuyển trạng thái phiếu chuyển kho sang **Đã duyệt**.
      * Tự động thêm mới 1 phiếu nhập kho ở trạng thái "Khởi tạo" cho NPP nhận 
        + Thông tin phiếu nhập kho bao gồm:

          - Ngày nhập kho: Mặc định là ngày chuyển kho được người dùng chọn trong phiếu chuyển kho.
          - Mã nhập hàng: Mặc định để trống, NPP nhận có thể chỉnh sửa sau.
          - Kênh nhận: Mặc định để trống, NPP nhận có thể chỉnh sửa sau.
          - Kho nhận: Mặc định để trống, NPP có thể chỉnh sửa sau.
          - Danh sách sản phẩm: Mặc định là tất cả sản phẩm thuộc Phiếu chuyển kho: Mã SKU, Tên sản phẩm, Đơn vị tính, Số lượng, Thông tin lô [Số lượng từng lô, Số lô, Hạn sử dụng]
          - **Nguồn nhập hàng: "Chuyển kho NPP"**
      * Nếu đóng: thực hiện đóng popup xác nhận.

## **Hủy phiếu chuyển kho NPP**

Đường dẫn: Kho -> Chuyển kho -> Chọn nút Hủy phiếu chuyển kho trên danh sách

Khi nhấn vào hệ thống thực hiện xử lý:

* Xử lý: Hiển thị popup Xác nhận hủy phiếu chuyển kho ngay trên nút:
  + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":
    - Nhấn Hoàn tất: Hệ thống thực hiện
      * Cập nhật trạng thái phiếu chuyển kho sang **Đã hủy**
      * Thực hiện cập nhật lại tồn kho của NPP chuyển (revert lại số lượng Tạm giữ & Có sẵn trong Kho Chuyển)
    - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.
  + Nếu đóng: thực hiện đóng popup xác nhận.

**Lưu ý:** Chỉ được hủy phiếu chuyển kho có trạng thái Khởi tạo

## **Tự động đổi phiếu chuyển kho sang "Đã hủy" khi NPP nhận hủy phiếu nhập kho**

Trigger: Khi NPP nhận hàng hủy phiếu nhập kho 

Khi phiếu nhập kho chuyển qua trạng thái "Đã hủy" → Hệ thống thực hiện :

1. Chuyển phiếu chuyển kho liên kết đến phiếu nhập trên qua trạng thái "Đã hủy" (**Lý do hủy của phiếu chuyển kho** mặc định là **Lý do hủy được nhập khi hủy phiếu nhập kho)**
2. Cập nhật tồn kho cho NPP chuyển (revert lại số lượng Tạm giữ & Có sẵn trong Kho Chuyển)
3. Xử lý luồng Hủy phiếu nhập kho

## **Tự động đổi phiếu chuyển kho sang "Hoàn thành" khi NPP nhận duyệt phiếu nhập kho**

Trigger: Khi NPP nhận hàng duyệt phiếu nhập kho 

Khi phiếu nhập kho chuyển qua trạng thái "Đã duyệt" → Hệ thống thực hiện:

1. Chuyển phiếu chuyển kho liên kết đến phiếu nhập sang trạng thái "Hoàn thành"
2. Cập nhật tồn kho của NPP A & B theo **Quy tắc cập nhật tồn kho khi duyệt phiếu chuyển kho NPP**

# **Business rules**

## **Quy tắc cập nhật tồn kho sau khi duyệt phiếu chuyển kho NPP**

| Thông tin đầu vào | Quy trình xử lý | Kết quả đầu ra |
| --- | --- | --- |
| Phiếu chuyển kho được duyệt | 1. **Bước 1: Hệ thống thực hiện quy đổi đơn vị tính từng dòng sản phẩm trong phiếu chuyển kho** 2. **Bước 2: Hệ thống thực hiện xuất số lượng sản phẩm ở kho chuyển**    1. Hệ thống trừ số lượng vừa tính được vào Tồn kho và Tạm giữ của sản phẩm    2. Hệ thống thực hiện kiểm tra *Số lô và Hạn sử dụng* của từng dòng sản phẩm, trừ số lượng vừa tính được vào Tồn kho và Tạm giữ theo lô tương ứng 3. **Bước 3: Hệ thống thực hiện nhập số lượng sản phẩm vào kho nhận**    1. Nếu sản phẩm tồn tại       1. Hệ thống cộng số lượng vừa tính được vào Tồn kho & Tạm giữ của sản phẩm như trên phiếu chuyển kho.       2. Hệ thống thực hiện kiểm tra *Số lô, Hạn sử dụng & Ngày nhập* của từng dòng sản phẩm          1. Nếu trùng Sô lô, Hạn sử dụng & Ngày nhập hàng → Cộng số lượng chuyển vào số tồn kho & tạm giữ như trên phiếu chuyển kho.          2. Ngược lại, thêm mới 1 dòng dữ liệu nhập hàng tương ứng    2. Nếu sản phẩm chưa tồn tại,  thực hiện thêm thông tin sản phẩm, thông tin lô như trên phiếu chuyển kho | 1. Cập nhật tồn kho Kho Chuyển: Giảm số lượng sản phẩm & lô trong kho Chuyển   2. Cập nhật tồn kho Kho Nhận: Tăng số lượng sản phẩm & lô trong kho Nhận |

**Thông tin đầu vào:**

Ví dụ: Phiếu chuyển kho PCK01

* NPP chuyển: NPP chi nhánh Tân Bình
* Kho chuyển: Kho hàng bán
* NPP nhân: NPP chi nhánh Thủ Đức
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

**Thông tin hiện tại trong Kho hàng bán - NPP Chi nhánh Thủ Đức (Kho chuyển)**

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

**Bước 1: Hệ thống thực hiện chuyển *đơn vị tính* của từng dòng sản phẩm trong phiếu chuyển kho**

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
| P001 | Sản phẩm A | 650 (800 - 150) | 50 (200-150) | 600 | 1/11/2024 | lon | 650 (800 - 150) | 50 (200-150) | 600 | P1L001 | 1/1/2028 | **Trừ tồn kho & Tạm giữ** của **lô P1L001** đi **150** sản phẩm A trong phiếu chuyển kho |
| P002 | Sản phẩm B | 400 (500 - 100) | 0 (100-100) | 400 | 3/11/2024 | lon | 180 (250 - 70) | 0 (70-70) | 180 | P2L001 | 1/1/2029 | **Trừ tồn kho & Tạm giữ** của **lô P2L001** đi **70** sản phẩm B trong phiếu chuyển kho |
| 6/11/2024 | 220 (250-30) | 0 (30-30) | 220 | P2L002 | 1/1/2028 | **Trừ tồn kho & Tạm giữ** của **lô P2L002** đi **30** sản phẩm B trong phiếu chuyển kho |
| P003 | Sản phẩm C | 1000 (3000-2000) | 200 (2200-2000) | 800 | 8/11/2024 | lon | 0 (800 - 800) | 800 (800 - 800) | 0 | P3L001 | 1/1/2028 | **Ở lô sản phẩm C lô P3L001**  **Trừ tồn kho & Tạm giữ** của **lô P3L001 - HSD 1/1/2028 có đến 2 dòng nhập hàng** → Ưu tiên trừ tồn kho dữ liệu có ngày nhập hàng xa nhất |
| 9/11/2024 | 300 (800 - 500) | 100 (600-500) | 200 | P3L002 | 1/1/2030 | **Trừ tồn kho & Tạm giữ** của **lô P3L002** đi **500** sản phẩm C trong phiếu chuyển kho |
| 11/11/2024 | 200 | 0 | 200 | P3L001 | 1/1/2028 | - |
| 15/11/2024 | 500 (1200-700) | 100 (800-700) | 400 | P3L003 | 1/1/2028 | **Trừ tồn kho & Tạm giữ** của **lô P3L003** đi **700** sản phẩm C trong phiếu chuyển kho |

**Thông tin hiện tại trong Kho hàng khuyến mãi - NPP Chi nhánh Tân Bình (Kho nhận)**

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