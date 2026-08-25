|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-774  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-778 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-779 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-776 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-777 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-775 |
| Version | trueYellow1.0.0  trueRed1.2.0: Thêm kênh bán hàng cho kho nhận: Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-359 |
| History | 3 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

true

 

**BACKLOG**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |
| 2 | 1.1.0 | 16/04/2025 |  | Bổ sung phân quyền xem dữ liệu |
| 3 | 1.2.0  trueRed1.2.0 |  |  | Thêm kênh bán hàng cho kho nhận  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-359 |
| 4 | 1.3.0 |  |  | * Cập nhật luồng Chuyển kho nội bộ (HO duyệt phiếu chuyển kho nội bộ) * Cập nhật bộ trạng thái phiếu chuyển kho |

# **Requirement**

* Chức năng cho phép Admin chuyển hàng giữa các kho nội bộ trong 1 Nhà phân phối
* Phân quyền chức năng theo [Tài liệu phân quyền](https://kb.finviet.com.vn/x/iG4pAw)

## **Mô hình nghiệp vụ Chuyển kho nội bộ**

trueUntitled Diagramfalseautotoptrue15122

### Sơ đồ trạng thái

truestatefalseautotoptrue9721

## **Tạo phiếu chuyển kho**

trueRed1.2.0: Thêm kênh bán hàng cho kho nhận

Đường dẫn: Kho → Chuyển kho → Chuyển kho nội bộ 

Để thêm mới phiếu chuyển kho, người dùng nhấn chọn nút "Thêm mới" tại màn hình Danh sách Phiếu Chuyển Kho → Hệ thống popup Dialog "Thêm phiếu chuyển kho" được define dưới đây

**Mô tả Form Thêm mới phiếu chuyển kho**

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Ngày chuyển kho | Date Picker | Bắt buộc | Giá trị mặc định là "Trống"  Chọn ngày chuyển kho từ Date picker |
| Kho chuyển | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Nhấn chọn vào Dropdown Kho Chuyển -> Hệ thống popup dropdown danh sách kho trực thuộc Nhà phân phối  Người dùng tìm kiếm kho chuyển theo tên kho   Chỉ được chọn 1 kho chuyển  ~~Kho chuyển và kho nhận không được giống nhau~~  trueRed1.2.0: Kho chuyển và kho nhận có thể giống hoặc nhau |
| ~~Kênh bán hàng~~  trueRed1.2.0: Đổi tên cột thành   **Kênh bán hàng kho chuyển** | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Click chọn vào Dropdown Kênh bán -> Hệ thống popup dropdown danh sách Kênh bán hàng còn hoạt động  Người dùng tìm kiếm kênh bán hàng theo tên kênh bán hàng  Chỉ được chọn 1 kênh bán hàng |
| Kho nhận | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Khi người dùng click chọn vào Dropdown Kho Nhận ->  Hệ thống popup dropdown danh sách kho trực thuộc Nhà phân phối  Người dùng tìm kiếm kho nhận theo tên kho nhận  Chỉ được chọn 1 kho nhận  trueRed1.2.0: Kho chuyển và kho nhận có thể giống hoặc nhau |
| trueRed1.2.0: Bổ sung trường này  Kênh bán hàng kho nhận | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Click chọn vào Dropdown Kênh bán -> Hệ thống popup dropdown danh sách Kênh bán hàng còn hoạt động  Người dùng tìm kiếm kênh bán hàng theo tên kênh bán hàng  Chỉ được chọn 1 kênh bán hàng  Kênh bán hàng kho chuyển và kênh bán hàng kho nhận có thể giống hoặc khác nhau. |
| Danh sách sản phẩm | Table | Bắt buộc | Hiển thị danh sách sản phẩm được thêm ở bước **Thêm sản phẩm vào phiếu (được define bên dưới)**  Nếu chưa có sản phẩm nào được chọn, hiển thị Giao diện trống  Nếu có, hiển thị danh sách sản phẩm theo Mô tả **Table "Danh sách sản phẩm"** **được define ở dưới đây** |
| Nút "Lưu" | Button | - | Sau khi hoàn tất nhập thông tin, người dùng nhấn "Lưu" , hệ thống thực hiện kiểm tra và xử lý:   * Kiểm tra:   + Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.   + Thực hiên tính lại cột *Tồn kho* trong Thông tin lô theo **[Quy tắc tính tồn kho tại Thông tin lô](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445066#id-[NPP]Xu%E1%BA%A5tkho-tinhtonkho),**nếu số lượng lớn hơn tồn kho mới, báo lỗi: *"Số lượng không được lớn hơn Tồn kho".*   + **trueRed1.2.0: Kiểm tra thông tin Kho và kênh trên phiếu chuyển kho**     - Kho chuyển và Kho nhận có thể giống hoặc khác nhau     - Kênh chuyển và Kênh nhận có thể giống hoặc khác nhau     - Nhưng <Kho chuyển và Kênh chuyển> với <Kho nhận và Kênh nhận> không được giống nhau       * Ví dụ:          + Chuyển từ Kho bán Kênh GT → Kho bán Kênh GT → **Báo lỗi: Kho và kênh chuyển không được giống Kho và kênh nhận, vui lòng kiểm tra lại!**         + Chuyển từ Kho bán Kênh GT → Kho bán Kênh MT → Có thể chuyển.         + Chuyển từ Kho bán Kênh GT → Kho khuyến mãi Kênh GT → Có thể chuyển. * Xử lý: Hiển thị popup xác nhận ngay trên nút:   + Nếu đồng ý:     - * Hệ thống tạo dữ liệu phiếu chuyển kho với trạng thái **Khởi tạo**.       * Cập nhật tồn kho trong kho Chuyển theo **[Quy tắc cập nhật tồn kho sau khi tạo phiếu chuyển kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFcc%E1%BA%ADpnh%E1%BA%ADtt%E1%BB%93nkhosaukhit%E1%BA%A1ophi%E1%BA%BFuchuy%E1%BB%83nkho)**.   + Nếu đóng: thực hiện đóng popup xác nhận. |
|  |  |  |  |
| --- | --- | --- | --- |
| Nút "Đóng" | Button |  | Để ngừng thao tác thêm phiếu chuyển kho -> người dùng click chọn nút "Đóng" -> hệ thống popup Confirmation Dialog    * + Xác nhận: Đóng popup "Thêm mới phiếu chuyển kho" và không thực hiện hành động gì.   + Đóng: Đóng Confirmation Dialog và tiếp tục luồng thêm mới. |
| *Lưu ý: Nếu người dùng chọn lại 1 trong 3 thông tin "Kênh bán hàng", "Kho chuyển", "Ngày chuyển kho" và Danh sách sản phẩm đang có ít nhất 1 sản phẩm, hệ thống popup Dialog Confirmation "Cập nhật thông tin" với 2 thao tác:*   * *Nhấn "Xác nhận": Hệ thống đưa danh sách sản phẩm về măc định* * *Nhấn "Đóng": Đóng Confirmation Dialog và không thực hiện cập nhật thông tin gì* | | | |

**Thêm sản phẩm vào phiếu**

|  |  |  |  |
| --- | --- | --- | --- |
| * Click vào nút "Thêm sản phẩm"→ Hệ thống thêm 1 dòng dữ liệu vào Table → Người dùng click chọn vào ô "Tìm kiếm theo mã SKU" và nhập keyword tìm kiếm (tìm kiếm tối đa 200 ký tự dưới dạng Text) → Hệ thống hiển thị popup kết quả tìm kiếm gồm các sản phẩm thỏa mãn tất cả điều kiện:   + Sản phẩm thuộc kho chuyển được chọn trên phiếu   + Sản phẩm có "Available" > 0 (Available được tính dựa trên ngày chuyển kho được chọn trên phiếu)   + Kênh bán hàng của sản phẩm trùng với kênh bán hàng được chọn trên phiếu * Popup kết quả tìm kiếm bao gồm:    + Mã SKU   + Tên sản phẩm   + Đơn vị cơ bản * Click vào sản phẩm → đóng bảng kết quả tìm kiếm và thêm các sản phẩm đã chọn vào danh sách sản phẩm trên phiếu chuyển kho.  * **Thêm sản phẩm vào phiếu tuân theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)** | | | |

**Table "Danh sách sản phẩm"**

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Mã SKU | Text | - | Hệ thống hiển thị SKU của sản phẩm |
| Tên sản phẩm | Text | - | Hệ thống hiển thị tên sản phẩm |
| Số lượng có sẵn | Number | - | Dựa vào "Ngày chuyển kho", "Kho chuyển", "Kênh bán hàng" được chọn trên phiếu, hệ thống hiển thị số lượng có sẵn của sản phẩm theo **Quy tắc lấy số lượng có sẵn từ kho chuyển dựa vào ngày chuyển kho**n |
| Số lượng chuyển kho | Input Number | Bắt buộc | Giá trị mặc định là "Trống"  Người dùng nhập số lượng chuyển kho   Số lượng chuyển kho phải lớn hơn 0  Số lượng chuyển kho là số nguyên  Khi thay đổi số lượng chuyển kho → Thực hiện luồng Đề xuất thông tin Lô theo **[Quy tắc đề xuất thông tin lô sản phẩm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFc%C4%91%E1%BB%81xu%E1%BA%A5tth%C3%B4ngtinl%C3%B4s%E1%BA%A3nph%E1%BA%A9m)** |
| Đơn vị tính | Auto Complete | Bắt buộc | Giá trị mặc định là đơn vị cơ bản   Dropdown menu gồm các đơn vị tính theo sản phẩm  Có thể chọn các đơn vị quy đổi khác  Khi thay đổi đơn vị tính, hệ thống reset số lượng chuyển kho về mặc định |
| Thông tin lô | Icon Button | - | Click chọn button "Thêm mới", kiểm tra:   1. Nếu vừa nhập lại số lượng chuyển kho hoặc chưa nhập thông tin lô trước đó →  Popup Dialog Thông tin lô được đề xuất theo quy tắc **[Quy tắc đề xuất thông tin lô sản phẩm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFc%C4%91%E1%BB%81xu%E1%BA%A5tth%C3%B4ngtinl%C3%B4s%E1%BA%A3nph%E1%BA%A9m)** 2. Nếu không có thay đổi số lượng chuyển kho & đã nhập thông tin lô trước đó →  Popup Dialog Thông tin lô được người dùng nhập trước đó   Hiển thị danh sách lô theo **Mô tả Danh sách lô** được define dưới đây |
| Nút Xóa | Button | - | Nhấn nút xóa → hệ thống xóa dòng record tương ứng |

**Mô tả Danh sách lô**

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Số lô | Text | - | Hệ thống hiển thị số lô |
| Số lượng có sẵn | Number | - | Hệ thống hiển thị số lượng có sẵn |
| Số lượng chuyển kho | Input Number | Bắt buộc | Giá trị mặc định là số lượng được đề xuất  Min là 0   Số lượng chuyển kho trong lô là số nguyên |
| Hạn sử dụng | Date | - | Hệ thống hiển thị hạn sử dụng của sản phẩm  Định dạng là DD-MM-YYYY |
| Nút "Lưu" | Button | - | Bấm Lưu -> hệ thống kiểm tra   1. Tổng số lượng trong lô phải bằng số lượng sản phẩm ngoài danh sách    * Nếu đúng -> Check tiếp điều kiện tiếp theo    * Nếu sai -> Hiển thị toast lỗi "Tổng số lượng chuyển trong lô phải bằng số lượng chuyển sản phẩm" 2. Kiểm tra số lượng chuyển <= có sẵn     1. Nếu đúng → lưu lại và back về màn hình Danh sách sản phẩm    2. Nếu sai→ HIển toast lỗi "Số lượng chuyển không được lớn hơn số lượng có sẵn trong kho" |
| Nút "Đóng" | Button | - | Bấm Đóng → Hệ thống đóng popup và bỏ qua các thay đổi về số lô của người dùng |

## **Xem danh sách phiếu chuyển kho**

trueRed1.2.0: Thêm kênh bán hàng cho kho nhận

Đường dẫn: Kho | Chuyển kho | Chuyển kho nội bộ 

Hệ thống load Danh sách Phiếu chuyển kho theo cấu trúc dưới đây

| Trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Quy tắc load danh sách Phiếu chuyển kho nội bộ: Load danh sách phiếu chuyển kho của NPP mà user đang login | | |
| Mã chuyển kho | Text | Click vào mã chuyển kho  -> hiển thị màn hình Xem chi tiết phiếu chuyển kho  Mã chuyển kho tự động generate theo format TWxxxxxxx (trong đó <xxxxxxx>: là dãy số tự nhiên và tăng dần đều) |
| Ngày chuyển kho | Date | Hiển thị định dạng DD-MM-YYYY |
| Kho chuyển | Text | Hiển thị tên kho chuyển |
| trueRed1.2.0: Đổi tên cột này  Kênh bán hàng kho chuyển | Text | Hiển thị tên kênh bán hàng của kho chuyển |
| Kho nhận | Text | Hiển thị tên kho nhận |
| trueRed1.2.0: Bổ sung cột này  Kênh bán hàng kho nhận | Text | Hiển thị tên kênh bán hàng của kho nhận |
| Trạng thái | Badge | Hiển thị dạng tag  Có 3 trạng thái: Khởi tạo, Đã duyệt, Đã hủy, Chờ duyệt, Đã từ chối |
| Lý do | Text | Hiển thị lý do hủy  Hiển thị tối đa 20 ký tự  Hover vào sẽ hiển thị tooltips nội dung đầy đủ |
| Ngày tạo | Date | Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Ngày cập nhật | Date | Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Người tạo | Text | Hiển thị username của tài khoản người tạo phiếu |
| Người cập nhật | Text | Hiển thị username của tài khoản người cập nhật phiếu |
| Phân trang | Pagination | Phân trang theo {10; 50; 100} |
| Nút Duyệt | Button | Chỉ hiện thị ở phiếu có trạng thái “Khởi tạo” |
| Nút Chỉnh sửa | Button | Chỉ hiện thị ở phiếu có trạng thái "Khởi tạo" |
| Nút Hủy | Button | Chỉ hiện thị ở phiếu có trạng thái "Khởi tạo" |
| **Tìm kiếm & Lọc phiếu chuyển kho có điều kiện** | | |
| Tìm kiếm | Input search | Tìm kiếm Phiếu theo Mã chuyển kho : tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng Text).  Mặc định trống.  Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.  Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |
| Trạng thái | Auto Complete | Lọc phiếu theo trạng thái    * Gồm các trạng thái {Khởi tạo/Chờ duyệt/Đã duyệt/Đã hủy/Đã từ chối}. * Mặc định trống * Cho phép chọn nhiều trạng thái. * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |
| Start Date & End date | Date Picker | Lọc phiếu có ngày chuyển kho trong khoảng thời gian được chọn   * end date > start date |
| Nút "Tìm kiếm" | Button | Click vào nút -> thực hiện tìm kiếm theo điều kiện lọc |

## **Xem chi tiết phiếu chuyển kho**

trueRed1.2.0: Thêm kênh bán hàng cho kho nhận

Đường dẫn: Kho | Chuyển kho | Chuyển kho nội bộ

Để xem chi tiết 1 phiếu chuyển kho, người dùng click chọn Mã phiếu chuyển kho

Hệ thống popup "Xem phiếu chuyển kho" có định dạng dưới đây

Trong Form dưới đây, người dùng chỉ xem được (không thực hiện cập nhật bất kỳ thông tin gì)

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Chỉ Xem Chi tiết phiếu chuyển kho của NPP mà user đang login | | |
| Ngày chuyển kho | Date Picker | Hiển thị ngày chuyển kho |
| Kho chuyển | Auto Complete | Hiển thị kho chuyển |
| trueRed1.2.0: *Đổi tên cột này*  Kênh bán hàng kho chuyển | Auto Complete | Hiển thị kênh bán hàng của kho chuyển |
| Kho nhận | Auto Complete | Hiển thị kho nhận |
| trueRed1.2.0: *Bổ sung cột này*  Kênh bán hàng kho nhận | Auto Complete | Hiển thị kênh bán hàng của kho nhận |
| Trạng thái | Badge | Hiển thị trạng thái dưới dạng tag |
| Lý do hủy | Text | Chỉ hiển thị với phiếu có trạng thái là "Đã hủy" |
| Danh sách sản phẩm | Table | HIển thị theo format được define dưới đây |
| Nút "Đóng" | Button | Nhấn nút "Đóng" → hệ thống đóng popup "Xem phiếu chuyển kho" |

**Mô tả Danh sách sản phẩm**

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Mã SKU | Text | Hiển thị SKU |
| Tên sản phẩm | Text | Hiển thị Tên sản phẩm |
| Số lượng | Text | Hiển thị số lượng |
| Có sẵn | Text | Với phiếu ở trạng thái "Đã hủy", "Đã duyệt", "Đã từ chối", "Chờ duyệt" → Hiển thị số lượng có sẵn  Với phiếu ở trạng thái "Khởi tạo" → hiển thị số lượng có sẵn = có sẵn + số lượng chuyển |
| Đơn vị tính | Text | Hiển thị đơn vị tính |
| Thông tin lô | Icon button | Nhấn vào nút "Xem" → hệ thống mở popup "Xem thông tin lô" |

**Mô tả thông tin lô**

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Số lượng | Text | Hiển thị số lượng |
| Có sẵn | Text | Hiển thị số có sẵn  Với phiếu ở trạng thái "Đã hủy", "Đã duyệt", "Đã từ chối", "Chờ duyệt"→ Hiển thị số lượng có sẵn  Với phiếu ở trạng thái "Khởi tạo" → hiển thị số lượng có sẵn = có sẵn + số lượng chuyển |
| Số lô | Text | Hiển thị số lô |
| Hạn sử dụng | Text | Hiển thị định dạng DD-MM-YYYY |
| Nút Đóng | Button | Nhấn nút đóng → hệ thống đóng popup "Xem thông tin lô" |

## **Chỉnh sửa phiếu chuyển kho**

trueRed1.2.0: Thêm thông tin kênh bán hàng kho nhận

Đường dẫn: Kho | Chuyển kho | Chuyển kho nội bộ

Để chỉnh sửa 1 phiếu chuyển kho, người dùng click chọn nút "Chỉnh sửa" (nút chỉnh sửa chỉ xuất hiện khi phiếu ở trạng thái "Khởi tạo")

Người dùng có thể chỉnh sửa tất cả thông tin giống với Form Thêm mới phiếu chuyển kho

Hệ thống popup **Form** **Cập nhật phiếu chuyển kho** hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:

| Mô tả chi tiết |
| --- |
| "**Thêm mới phiếu chuyển kho**" đổi thành "**Cập nhật phiếu chuyển kho**". |
| Khi cập nhật sẽ cho phép chỉnh sửa tất cả thông tin giống với Form Thêm mới phiếu chuyển kho. |
| Khi hệ thống bật Popup "Cập nhật Phiếu chuyển kho" , số lượng **"Có sẵn" trong Lô và "Tổng có sẵn" ngoài sản phẩm** trong từng sản phẩm được tính theo các bước sau   1. Thực hiện lấy số tạm giữ của phiếu chuyển kho cộng với số lượng tồn kho đáp ứng của sản phẩm. 2. Sử dụng **Quy tắc lấy tồn kho đáp ứng** dựa theo số đã tính ở bước 1 để hiển thị tồn kho   Xem ví dụ sau để hiểu chi tiết hơn  Giả sử sản phẩm A (SKU 001) có thông tin nhập hàng như sau:   |  |  |  |  |  |  |  |  |  |  |  | | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông tin ngày nhập và lô** | | | | | | | **Ngày nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | | Hàng bán | GT | 85 | 0 | 85 | 1/11 | L001 | 30/12 | 290 | 10  (PCK01 tạm giữ 10) | 300 | | 2/11 | L002 | 4/12 | 60 | 40  (PCK01 tạm giữ 40) | 100 | | 5/11 | L003 | 3/12 | 200 |  | 200 | | 9/11 | L001 | 7/12 | 0 | 100  (PCK01 chỉ tạm giữ 50) | 100 | | 15/11 | L001 | 6/12 | 150 |  | 150 |   **Bước 1:**Thực hiện lấy số tạm giữ của phiếu chuyển kho cộng với số lượng tồn kho đáp ứng của sản phẩm.   | Ngày nhập | Số lô | Ngày hết hạn | Số lượng có sẵn hiển thị Table Sản phẩm PCK 01 | Giải thích chi tiết | | --- | --- | --- | --- | --- | | 1/11 | L001 | 30/12 | 300 | Có sẵn = 290 + 10 = 300 (vì PCK01 đang tạm giữ 10) | | 2/11 | L002 | 4/12 | 100 | Có sẵn = 60 + 40 = 100 (vì PCK01 đang tạm giữ 40) | | 5/11 | L003 | 3/12 | 200 | - | | 9/11 | L001 | 7/12 | 50 | Có sẵn = 0 + 50 = 50 (vì PCK01 đang tạm giữ 50) | | 15/11 | L001 | 6/12 | 150 | - |   **Bước 2:** Sử dụng **Quy tắc lấy tồn kho đáp ứng** tại **ngày chuyển kho 10/11/2024 →** Chỉ tính tồn kho đáp ứng với các dữ liệu nhập hàng ngày 1/11, 2/11, 5/11, 9/11  **Số lượng tồn kho của Lô:**   | Số lượng chuyển | Số lượng có sẵn | Số lô | Hạn sử dụng | | --- | --- | --- | --- | | 10 | 300 | L001 | 30/12 | | 40 | 100 | L002 | 4/12 | | 0 | 200 | L003 | 3/12 | | 50 | 50 | L001 | 7/12 |   **→ Tổng tồn kho (có sẵn) sản phẩm A = 650** |
| **Lưu:** Sau khi nhấn Lưu, hệ thống thực hiện:   * Kiểm tra:   + Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo "Trường <a> là bắt buộc". Với <a> là tên trường.   + Nếu có sản phẩm để số lượng là trống hoặc 0 thì thì báo lỗi trên từng line sản phẩm với thông báo "Vui lòng nhập số lượng cho sản phẩm".   + Kiểm tra tồn kho theo **Quy tắc tồn kho**, nếu không đủ tồn kho thì báo lỗi "Tồn kho không đáp ứng" dưới mỗi dòng dữ liệu.   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - * Nếu đồng ý:           + - Thực hiện tính toán lại tồn kho:              * Bước 1: Thực hiện trả lại tồn kho đáp ứng.             * Bước 2: Tính lại tồn theo **Cập nhật tồn kho theo tạo mới đơn hàng**.       * Nếu hủy → Đóng popup lại và không thực hiện thay đổi gì |
| Lưu & Duyệt:    1. **Kiểm tra sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)** 2. Thực hiện luồng Cập nhật Phiếu chuyển kho 3. Thực hiện luồng Duyệt phiếu chuyển kho |
| *Lưu ý: Tại màn hình edit, nếu các trường chọn giá trị đang lưu 1 giá trị không hoạt động thì hệ thống sẽ hiển thị field đó là rỗng mà không cần báo lỗi gì, nếu người dùng không chọn lại mà nhấn lưu thì sẽ báo lỗi nếu trường đó bắt buộc hoặc lưu rỗng nếu trường đó không bắt buộc.* |

## **Duyệt phiếu chuyển kho**

Đường dẫn: Kho -> Chuyển kho -> Chọn nút Duyệt một phiếu chuyển kho trên danh sách

Xử lý: Hiển thị popup "Xác nhận duyệt phiếu chuyển kho" ngay trên nút:

* + Xử lý: Hiển thị popup xác nhận ngay trên nút:
    - Nếu đồng ý: Hệ thống thực hiện
      * **Kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**
      * Chuyển trạng thái phiếu chuyển kho sang **Chờ duyệt**.
    - Nếu đóng: thực hiện đóng popup xác nhận.

**Lưu ý:** Chỉ được duyệt phiếu chuyển kho trạng thái Khởi tạo 

## **Hủy phiếu chuyển kho**

Đường dẫn: Kho -> Chuyển kho -> Chuyển kho nội bộ 

Để Hủy phiếu chuyển Kho, người dùng nhấn chọn nút Hủy phiếu chuyển kho" trên danh sách". Hệ thống thực hiện xử lý:

* Hiển thị popup **Xác nhận hủy phiếu chuyển kho**:
  + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":
    - Độ dài tối đa: 200 ký tự
    - Nhấn Đồng ý: Hệ thống thực hiện
      * Cập nhật trạng thái phiếu chuyển kho sang **Đã hủy**
      * Thực hiện Revert lại số lượng Tạm giữ & Có sẵn trong Kho Chuyển
    - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.
  + Nếu đóng: thực hiện đóng popup xác nhận.

**Lưu ý:** Chỉ được hủy phiếu chuyển kho có trạng thái Khởi tạo 

**Kết quả:** Chuyển trạng thái của phiếu chuyển kho từ Khởi tạo sang Đã hủy 

# **Business Rules**

## **Quy tắc đề xuất thông tin lô sản phẩm**

| Thông tin đầu vào | Quy trình xử lý | Kết quả đầu ra |
| --- | --- | --- |
| Kênh bán hàng  Kho chuyển  Ngày chuyển kho  Sản phẩm - Số lượng | 1. Dựa vào thông tin "Sản phẩm", "Kho chuyển", "Kênh bán hàng", hệ thống lấy danh sách tồn kho tương ứng 2. Dựa vào "ngày chuyển kho" & danh sách tồn kho được lọc ra từ bước (1)     1. Hệ thống lọc danh sách tồn kho đáo ứng tại thời điểm ngày chuyển kho    2. Thực hiện đề xuất số lượng **Tạm giữ** theo lô theo cơ chế:        1. Tăng số tạm giữ ở dòng dữ liệu tồn kho có hạn sử dụng gần nhất       2. Nếu hạn sử dụng trùng nhau, thì xét đến ngày nhập hàng → tăng tạm giữ dữ liệu tồn kho có ngày nhập hàng xa nhất | Danh sách lô được đề xuất  Số lượng đề xuất - Số lượng có sẵn - Số lô - Hạn sử dụng |

Xem ví dụ dưới đây để hiểu quy tắc đề xuất thông tin lô sản phẩm :

**Thông tin đầu vào**

* Sản phẩm A
  + Trường hợp 1: Số lượng chuyển 40
  + Trường hợp 2: Số lượng chuyển 25
* Kênh bán hàng: GT
* Kho chuyển: Hàng bán
* Ngày chuyển kho: 
  + Trường hợp 1:  10/11/2024
  + Trường hợp 2: 6/11/2024
  + Trường hợp 3: 30/10/2024

**Quy trình xử lý:**

Sản phẩm A có SKU 001 có thông tin tồn kho như sau: 

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |
| Hàng bán | MT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |
| Khuyến mãi | GT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |

**Bước 1: Dựa vào thông tin "Sản phẩm" được chọn, "Kho chuyển", "Kênh bán hàng", hệ thống lấy danh sách tồn kho tương ứng**

Hệ thống lấy danh sách kho tương ứng có **Kho chuyển = Hàng bán, Kênh bán hàng = GT, Sản phẩm là A**

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

**Bước 2: Dựa vào "ngày chuyển kho" & danh sách tồn kho được lọc ra từ bước (1) , hệ thống lọc danh sách tồn kho đáo ứng tại thời điểm ngày chuyển kho**

1. Trường hợp 1: **Ngày chuyển kho = 10/11 & Số lượng chuyển : 40**

   1. **Bước 2.1 : Hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm:**

      |  |  |  |  |  |  |  |  |  |  |  |  |
      | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
      | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
      | **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
      | Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
      | 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
      | 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
      | 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
      | 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

      => Lấy được các thông tin lô nhập vào các ngày **1/11, 2/11, 3/11, 5/11, 9/11**
   2. **Bước 2.2: Dựa vào "Hạn sử dụng", hệ thống đề xuất theo thứ tự: L003 → L002 → L001 → L004**

      | Số lô | Có sẵn | Số lượng đề xuất | Hạn sử dụng |
      | --- | --- | --- | --- |
      | L003 | 20  Lấy số lượng có sẵn L003 ngày 3/11 | 20  Chọn lô L003 đề xuất đầu tiên vì có HSD là 3/12 . CHỉ đề xuất được 20 vì lô L003 chỉ có sẵn số lượng 20  Số lượng còn lại phải đề xuất = 40 - 20 = 20 | 3/12 |
      | L002 | 10  Lấy số lượng có sẵn L002 ngày 2/11 | 10  Tiếp tục chọn lô L002 đề xuất vì có HSD là 4/12.  Chỉ đề xuất được 10 vì lô L003 chỉ có sẵn số lượng 10  Số lượng còn lại phải đề xuất = 20 - 10 = 10 | 4/12 |
      | L001 | 20  số lượng có sẵn L001 ngày 1/11 + số lượng có sẵn L001 ngày 3/11 | 10  Tiếp tục chọn lô L001 để đề xuất vì có HSD là 7/12. Lô L001 có sẵn 20 và đề xuất 10 → Kết thúc đề xuất | 7/12 |
      | L004 | 30  số lượng có sẵn L004 ngày 9/11 | 0  Không cần đề xuất vì đã đủ số lượng | 30/12 |
2. Trường hợp 2: **Ngày chuyển kho = 6/11 & Số lượng chuyển là 25**
   1. **Bước 2.1: Hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm:**Lấy được các thông tin lô nhập vào các ngày **1/11, 2/11, 3/11, 5/11** và lấy được tổng tồn kho đáp ứng tại thời điểm ngày **6/11**

      |  |  |  |  |  |  |  |  |  |  |  |  |
      | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
      | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
      | **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
      | Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
      | 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
      | 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
      | 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
   2. **Bước 2.2: Dựa vào "Ngày hết hạn", hệ thống đề xuất theo thứ tự: L003 → L002 → L001**

      | Số lô | Có sẵn | Số lượng đề xuất | Hạn sử dụng |
      | --- | --- | --- | --- |
      | L003 | 20  Lấy số lượng có sẵn L003 ngày 5/11 | 20  Chọn lô L003 đề xuất đầu tiên vì có HSD là 3/12 . Vì lô L003 chỉ có sẵn số lượng 20, nên chỉ đề xuất 20 → Số lượng còn lại phải đề xuất = 40 - 20 = 20 | 3/12 |
      | L002 | 10  Lấy số lượng có sẵn L002 ngày 2/11 | 10  Tiếp tục chọn lô L002 đề xuất vì có HSD là 4/12.Vì lô L002 chỉ có sẵn số lượng 10, nên chỉ đề xuất 10 → Số lượng còn lại phải đề xuất = 20 - 10 = 10 | 4/12 |
      | L001 | 20  số lượng có sẵn L001 ngày 1/11 + số lượng có sẵn L001 ngày 3/11 | 10  Tiếp tục chọn lô L001 để đề xuất vì có HSD là 7/12. Lô L001 có sẵn 20 và đề xuất 10 → Kết thúc đề xuất | 7/12 |
3. Trường hợp 3:**ngày chuyển kho =** **30/10**, tuy nhiên ngày 30/10 sẽ không có record tồn kho nào thỏa điều kiện → danh sách lô sẽ không có giá trị

**Kết quả đầu ra:**

1. Ngày chuyển kho = 10/11 → Có sẵn = 80 , Đơn vị : gói

   | Số lô | Có sẵn | Số lượng đề xuất | Hạn sử dụng |
   | --- | --- | --- | --- |
   | L003 | 20 | 20 | 3/12 |
   | L002 | 10 | 10 | 4/12 |
   | L001 | 20 | 10 | 7/12 |
   | L004 | 30 | 0 | 30/12 |
2. Ngày chuyển kho = 06/11 → Có sẵn = 30 , Đơn vị : gói

   | Số lô | Có sẵn | Số lượng đề xuất | Hạn sử dụng |
   | --- | --- | --- | --- |
   | L003 | 20 | 20 | 3/12 |
   | L002 | 10 | 10 | 4/12 |
   | L001 | 20 | 10 | 7/12 |
3. Ngày chuyển kho = 30/11 → Dữ liệu rỗng

## **Quy tắc lấy số lượng có sẵn từ kho chuyển dựa vào ngày chuyển kho**

| Thông tin đầu vào | Quy trình xử lý | Kết quả đầu ra |
| --- | --- | --- |
| "Ngày chuyển kho" , "Kho chuyển", "Kênh bán hàng" và "Sản phẩm" được người dùng chọn | 1. Dựa vào thông tin "Sản phẩm" được chọn, "Kho chuyển", "Kênh bán hàng", hệ thống lấy danh sách tồn kho tương ứng ở bước (1) 2. Dựa vào "ngày chuyển kho" & danh sách tồn kho được lọc ra từ bước (1) , hệ thống lấy tổng số lượng có sẵn đáp ứng theo lô tại thời điểm ngày chuyển kho | Sản phẩm X - [số lượng có sẵn] - Đơn vị tính |

Xem ví dụ dưới đây để hiểu quy tắc lấy số lượng có sẵn:

**Thông tin đầu vào**

* NPP: HO
* Sản phẩm A (SKU = 001)
* Kênh bán hàng: GT
* Kho chuyển: Hàng bán
* Ngày chuyển kho: 
  + Trường hợp 1:  10/11/2024
  + Trường hợp 2: 4/11/2024
  + Trường hợp 3: 30/10/2024

**Quy trình xử lý:**

Sản phẩm A có SKU 001 có thông tin tồn kho như sau: 

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |
| Hàng bán | MT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |
| Khuyến mãi | GT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |

**Bước 1: Dựa vào thông tin "Sản phẩm" được chọn, "Kho chuyển", "Kênh bán hàng", hệ thống lấy danh sách tồn kho tương ứng**

Hệ thống lấy danh sách kho tương ứng

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

**Bước 2: Dựa vào "ngày chuyển kho" & "ngày nhập hàng" , hệ thống lấy tổng số lượng có sẵn đáp ứng theo lô tại thời điểm ngày chuyển kho**

1. Trường hợp 1:**ngày chuyển kho =** **10/11**, hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm:

   |  |  |  |  |  |  |  |  |  |  |  |  |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
   | **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
   | Hàng bán | GT | 80 | 5 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
   | 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
   | 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
   | 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
   | 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

   Lấy được các thông tin lô nhập vào các ngày 1/11, 2/11, 3/11, 5/11, 9/11 và lấy được tổng **có sẵn** tại thời điểm ngày 10/11 là 80 → Hiển thị **80**.
2. Trường hợp 2:**ngày chuyển kho =** **04/11**, hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập và lấy được thông tin tồn kho gồm:

   |  |  |  |  |  |  |  |  |  |  |  |  |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
   | **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
   | Hàng bán | GT | 30 | 5 | 35 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
   | 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
   | 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |

   Lấy được các thông tin lô nhập vào các ngày 1/11, 2/11, 3/11 và lấy được tổng tồn kho đáp ứng tại thời điểm ngày 04/11 là 30 → Hiển thị **30**
3. Trường hợp 3:**ngày chuyển kho =** **30/10**, tuy nhiên ngày 30/10 sẽ không có record tồn kho nào thỏa điều kiện → tổng số lượng **có sẵn**sẽ là **0 →** Hiển thị **0**

**Lưu ý**: Trường hợp sản phẩm đang được chọn có đơn vị tính là đơn vị quy đổi thì thực hiện tính số lượng quy đổi = số lượng của đơn vị căn bản / hệ số quy đổi. Nếu số lượng tính ra là số thập phần thì làm tròn số theo [Quy tắc làm tròn số thập phân](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)

VD:

* Sản phẩm có các thông tin sau:
  + Đơn vị cơ bản là Gói
  + Đơn vị quy đổi là Thùng với hệ số quy đổi là 1 thùng có 10 gói.
  + Hệ thống áp dụng quy tắc hiển thị tồn kho đáp ứng lấy ra được số lượng tồn kho theo gói là 1000.  
    → Khi chọn lại đơn vị là Thùng thì phải tính lại số lượng theo thùng = 1000 / 10 = 100 Thùng. → Hiển thị 100.
* Sản phẩm có các thông tin sau:
  + Đơn vị cơ bản là Thùng
  + Đơn vị quy đổi là Thùng với hệ số quy đổi là 1 thùng = 0.17 gói
  + Hệ thống áp dụng quy tắc hiển thị tồn kho đáp ứng lấy ra được số lượng tồn kho theo thùng là 100.  
    → Khi chọn lại đơn vị là Gói thì phải tính lại số lượng theo gói = 111 / 0.17 = 652.941176471 → Làm tròn thành 652.941177 để hiển thị lên.

**Kết quả đầu ra**

1. Ngày chuyển kho = 10/11 → Có sẵn = 80 ; Đơn vị : gói
2. Ngày chuyển kho = 04/11 → Có sẵn = 30 ; Đơn vị : gói
3. Ngày chuyển kho = 30/10 → Có sẵn = 0 ; Đơn vị : gói

## **Quy tắc cập nhật tồn kho sau khi tạo phiếu chuyển kho**

| Thông tin đầu vào | Quy trình xử lý | Kết quả mong đợi |
| --- | --- | --- |
| Ngày chuyển kho  Kho chuyển  Kênh bán hàng  Sản phẩm   * Số lô - Số lượng chuyển kho - Đơn vị tính | 1. Quy đổi số lượng sản phẩm của các lô sang đơn vị cơ bản nếu đơn vị tính trên phiếu chuyển kho là đơn vị quy đổi (nếu trên phiếu là đơn vị cơ bản thì bỏ qua bước này) 2. Thực hiện cập nhật số lượng trong kho như sau:    * Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu chuyển kho với nguyên tắc: trừ "Có sẵn" của lô có ngày hết hạn gần nhất để trừ dần cho đến khi đáp ứng đủ số lượng yêu cầu, nếu một lô không đủ đáp ứng số lượng yêu cầu, hệ thống sẽ tiếp tục lấy từ lô kế tiếp có ngày hết hạn gần nhất để trừ tiếp. Nhưng nếu lô có nhiều ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước để trừ trước. Công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong phiếu nhập kho    * Cập nhật số lượng "Tạm giữ" của từng lô trong kho với công thức: Tạm giữ  = Tồn kho - Tạm giữ hiện tại | Tồn kho dùng lô được cập nhật |

Xem ví dụ dưới đây để hiểu quy tắc tính tồn kho sau khi tạo mới phiếu chuyển kho:

**Thông tin đầu vào**

Sản phẩm A (SKU = 001)

Kênh bán hàng: GT

Kho chuyển: Hàng bán

Ngày chuyển kho: **10/11/2024**

Danh sách sản phẩm 

| Sản phẩm | SKU | Số lượng | Đơn vị | Số lô | Số lượng |
| --- | --- | --- | --- | --- | --- |
| A | 001 | 5 | Thùng | L001 | 3 |
| L002 | 2 |
| L003 | 0 |

Sản phẩm A có SKU 001, đơn vị cơ bản là "Lon", đơn vị quy đổi Thùng (1 thùng = 20 lon) có thông tin tồn kho như sau: 

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 100 | LO01 | 30/12 | 300 | 0 | 300 |
| 2/11 | 100 | LO02 | 4/12 | 100 | 0 | 100 |
| 5/11 | 200 | LO03 | 3/12 | 200 | 0 | 200 |
| 9/11 | 300 | LO01 | 07/12 | 50 | 50 | 100 |
| 15/11 | 150 | LO01 | 6/12 | 150 | 0 | 150 |

**Bước 1: Quy đổi số lượng sản phẩm của các lô sang đơn vị cơ bản nếu đơn vị tính trên phiếu chuyển kho là đơn vị quy đổi**

| Sản phẩm | SKU | Số lượng | Đơn vị | Số lô | Số lượng |
| --- | --- | --- | --- | --- | --- |
| A | 001 | 100 | Lon | L001 | 60 |
| L002 | 40 |
| L003 | 0 |

**Bước 2: Thực hiện cập nhật số lượng trong kho như sau**

Lọc danh sách tồn kho trước ngày chuyển kho (10/11/2024). Kết quả sẽ gồm danh sách nhập kho ngày 1/11, 2/11, 5/11, 9/11

| Ngày nhập | Số lô | Ngày hết hạn | Có sẵn | Tạm giữ | Tồn kho |
| --- | --- | --- | --- | --- | --- |
| 1/11 | LO01 | 30/12 | 300 | 0 | 300 |
| 2/11 | LO02 | 4/12 | 100 | 0 | 100 |
| 5/11 | LO03 | 3/12 | 200 | 0 | 200 |
| 9/11 | LO01 | 07/12 | 50 | 50 | 100 |

Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu chuyển kho với nguyên tắc: trừ "Có sẵn" của lô có ngày hết hạn gần nhất để trừ dần cho đến khi đáp ứng đủ số lượng yêu cầu, nếu một lô không đủ đáp ứng số lượng yêu cầu, hệ thống sẽ tiếp tục lấy từ lô kế tiếp có ngày hết hạn gần nhất để trừ tiếp. Nhưng nếu lô có nhiều ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước để trừ trước. Công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong phiếu nhập kho

| Ngày nhập | Số lô | Ngày hết hạn | Có sẵn | Tạm giữ | Tồn kho | Giải thích chi tiết |
| --- | --- | --- | --- | --- | --- | --- |
| 1/11 | LO01 | 30/12 | 290 | 10 | 300 | 1. Chọn L001 có HSD là 07/12 , vì trong lô L001 - HSD 07/12 chỉ còn **Có sẵn** **50** → thực hiện tăng **Tạm giữ thêm 50**      1. Tạm giữ = 50 + 50 = 100    2. Có sẵn = Tồn kho - Tạm giữ = 100 - 100 = 0    3. Số lượng còn lại cần chuyển lô L001 = 60 - 50 = 10 2. Tiếp tục chọn L001 có HSD là 30/12 để lấy số lượng → thực hiện tăng tạm giữ lên 10    1. Tạm giữ = 0 + 10 = 10    2. Có sẵn = Tồn kho - Tạm giữ = 300 - 10 = 290    3. Số lượng cần chuyển trong lô L001 đã đủ, kết thúc 3. Chọn L002 có HSD là 4/12, thực hiện tăng tạm giữ lên 40     1. Tạm giữ = 0 + 40 = 40    2. Có sẵn = Tồn kho - Tạm giữ = 100 - 40 = 60    3. Số lượng cần chuyển trong lô L002 đã đủ, kết thúc |
| 2/11 | LO02 | 4/12 | 60 | 40 | 100 |
| 5/11 | LO03 | 3/12 | 200 | 0 | 200 |
| 9/11 | LO01 | 7/12 | 0 | 100 | 100 |

## **Quy tắc hiển thị tồn kho đáp ứng**

| Thông tin đầu vào | Quy trình xử lý | Kết quả đầu ra |
| --- | --- | --- |
| Phiếu chuyển kho  Nhà phân phối  Sản phẩm   Kênh bán hàng  Ngày chuyển kho  Sản phẩm | 1. Thực hiện lấy số tạm giữ của phiếu chuyển kho cộng với số lượng tồn kho đáp ứng của sản phẩm. 2. Sử dụng **Quy tắc lấy tồn kho đáp ứng** dựa theo số đã tính ở bước 1 để hiển thị tồn kho. | Số lượng "Có sẵn" của sản phẩm |

Xem ví dụ dưới đây: 

**Thông tin đầu vào**

* Phiếu chuyển kho: PCK01
* NPP: HO
* Sản phẩm A (SKU = 001)
* Kênh bán hàng: GT
* Kho chuyển: Hàng bán
* Ngày chuyển kho: **10/11/2024**
* Danh sách sản phẩm : Sản phẩm A - SKU 001

**Quy trình xử lý :**

Giả sử sản phẩm A (SKU 001) có thông tin nhập hàng như sau:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 100 | LO01 | 30/12 | 290 | 10  (PCK01 tạm giữ 10) | 300 |
| 2/11 | 100 | LO02 | 4/12 | 60 | 40  (PCK01 tạm giữ 40) | 100 |
| 5/11 | 200 | LO03 | 3/12 | 200 | 0 | 200 |
| 9/11 | 300 | LO01 | 07/12 | 0 | 100  (PCK01 chỉ tạm giữ 50) | 100 |
| 15/11 | 150 | LO01 | 6/12 | 150 | 0 | 150 |

**Bước 1:**Thực hiện lấy số tạm giữ của phiếu chuyển kho cộng với số lượng tồn kho đáp ứng của sản phẩm.

| Ngày nhập | Số lô | Ngày hết hạn | Số lượng có sẵn hiển thị Table Sản phẩm PCK 01 | Giải thích chi tiết |
| --- | --- | --- | --- | --- |
| 1/11 | LO01 | 30/12 | 300 | Có sẵn = 290 + 10 = 300 (vì PCK01 đang tạm giữ 10) |
| 2/11 | LO02 | 4/12 | 100 | Có sẵn = 60 + 40 = 100 (vì PCK01 đang tạm giữ 40) |
| 5/11 | LO03 | 3/12 | 200 |  |
| 9/11 | LO01 | 07/12 | 50 | Có sẵn = 0 + 50 = 50 (vì PCK01 đang tạm giữ 50) |
| 15/11 | LO01 | 6/12 | 150 |  |

Bước 2: Sử dụng **Quy tắc lấy tồn kho đáp ứng** tại **ngày chuyển kho 10/11/2024 →** Chỉ tính tồn kho đáp ứng với các dữ liệu nhập hàng ngày 1/11, 2/11, 5/11, 9/11

| Ngày nhập | Số lô | Ngày hết hạn | Số lượng có sẵn hiển thị Table Sản phẩm PCK 01 |
| --- | --- | --- | --- |
| 1/11 | LO01 | 30/12 | 300 |
| 2/11 | LO02 | 4/12 | 100 |
| 5/11 | LO03 | 3/12 | 200 |
| 9/11 | LO01 | 07/12 | 50 |

**Tổng tồn kho (có sẵn) sản phẩm A = 650**

|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-774  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-778 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-779 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-776 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-777 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-775 |
| Version | trueYellow1.0.0  trueRed1.2.0: Thêm kênh bán hàng cho kho nhận: Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-359 |
| History | 3 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

true

 

**BACKLOG**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |
| 2 | 1.1.0 | 16/04/2025 |  | Bổ sung phân quyền xem dữ liệu |
| 3 | 1.2.0  trueRed1.2.0 |  |  | Thêm kênh bán hàng cho kho nhận  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-359 |
| 4 | 1.3.0 |  |  | * Cập nhật luồng Chuyển kho nội bộ (HO duyệt phiếu chuyển kho nội bộ) * Cập nhật bộ trạng thái phiếu chuyển kho |

# **Requirement**

* Chức năng cho phép Admin chuyển hàng giữa các kho nội bộ trong 1 Nhà phân phối
* Phân quyền chức năng theo [Tài liệu phân quyền](https://kb.finviet.com.vn/x/iG4pAw)

## **Mô hình nghiệp vụ Chuyển kho nội bộ**

trueUntitled Diagramfalseautotoptrue15122

### Sơ đồ trạng thái

truestatefalseautotoptrue9721

## **Tạo phiếu chuyển kho**

trueRed1.2.0: Thêm kênh bán hàng cho kho nhận

Đường dẫn: Kho → Chuyển kho → Chuyển kho nội bộ 

Để thêm mới phiếu chuyển kho, người dùng nhấn chọn nút "Thêm mới" tại màn hình Danh sách Phiếu Chuyển Kho → Hệ thống popup Dialog "Thêm phiếu chuyển kho" được define dưới đây

**Mô tả Form Thêm mới phiếu chuyển kho**

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Ngày chuyển kho | Date Picker | Bắt buộc | Giá trị mặc định là "Trống"  Chọn ngày chuyển kho từ Date picker |
| Kho chuyển | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Nhấn chọn vào Dropdown Kho Chuyển -> Hệ thống popup dropdown danh sách kho trực thuộc Nhà phân phối  Người dùng tìm kiếm kho chuyển theo tên kho   Chỉ được chọn 1 kho chuyển  ~~Kho chuyển và kho nhận không được giống nhau~~  trueRed1.2.0: Kho chuyển và kho nhận có thể giống hoặc nhau |
| ~~Kênh bán hàng~~  trueRed1.2.0: Đổi tên cột thành   **Kênh bán hàng kho chuyển** | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Click chọn vào Dropdown Kênh bán -> Hệ thống popup dropdown danh sách Kênh bán hàng còn hoạt động  Người dùng tìm kiếm kênh bán hàng theo tên kênh bán hàng  Chỉ được chọn 1 kênh bán hàng |
| Kho nhận | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Khi người dùng click chọn vào Dropdown Kho Nhận ->  Hệ thống popup dropdown danh sách kho trực thuộc Nhà phân phối  Người dùng tìm kiếm kho nhận theo tên kho nhận  Chỉ được chọn 1 kho nhận  trueRed1.2.0: Kho chuyển và kho nhận có thể giống hoặc nhau |
| trueRed1.2.0: Bổ sung trường này  Kênh bán hàng kho nhận | Auto Complete | Bắt buộc | Giá trị mặc định là "Trống"  Click chọn vào Dropdown Kênh bán -> Hệ thống popup dropdown danh sách Kênh bán hàng còn hoạt động  Người dùng tìm kiếm kênh bán hàng theo tên kênh bán hàng  Chỉ được chọn 1 kênh bán hàng  Kênh bán hàng kho chuyển và kênh bán hàng kho nhận có thể giống hoặc khác nhau. |
| Danh sách sản phẩm | Table | Bắt buộc | Hiển thị danh sách sản phẩm được thêm ở bước **Thêm sản phẩm vào phiếu (được define bên dưới)**  Nếu chưa có sản phẩm nào được chọn, hiển thị Giao diện trống  Nếu có, hiển thị danh sách sản phẩm theo Mô tả **Table "Danh sách sản phẩm"** **được define ở dưới đây** |
| Nút "Lưu" | Button | - | Sau khi hoàn tất nhập thông tin, người dùng nhấn "Lưu" , hệ thống thực hiện kiểm tra và xử lý:   * Kiểm tra:   + Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.   + Thực hiên tính lại cột *Tồn kho* trong Thông tin lô theo **[Quy tắc tính tồn kho tại Thông tin lô](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445066#id-[NPP]Xu%E1%BA%A5tkho-tinhtonkho),**nếu số lượng lớn hơn tồn kho mới, báo lỗi: *"Số lượng không được lớn hơn Tồn kho".*   + **trueRed1.2.0: Kiểm tra thông tin Kho và kênh trên phiếu chuyển kho**     - Kho chuyển và Kho nhận có thể giống hoặc khác nhau     - Kênh chuyển và Kênh nhận có thể giống hoặc khác nhau     - Nhưng <Kho chuyển và Kênh chuyển> với <Kho nhận và Kênh nhận> không được giống nhau       * Ví dụ:          + Chuyển từ Kho bán Kênh GT → Kho bán Kênh GT → **Báo lỗi: Kho và kênh chuyển không được giống Kho và kênh nhận, vui lòng kiểm tra lại!**         + Chuyển từ Kho bán Kênh GT → Kho bán Kênh MT → Có thể chuyển.         + Chuyển từ Kho bán Kênh GT → Kho khuyến mãi Kênh GT → Có thể chuyển. * Xử lý: Hiển thị popup xác nhận ngay trên nút:   + Nếu đồng ý:     - * Hệ thống tạo dữ liệu phiếu chuyển kho với trạng thái **Khởi tạo**.       * Cập nhật tồn kho trong kho Chuyển theo **[Quy tắc cập nhật tồn kho sau khi tạo phiếu chuyển kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFcc%E1%BA%ADpnh%E1%BA%ADtt%E1%BB%93nkhosaukhit%E1%BA%A1ophi%E1%BA%BFuchuy%E1%BB%83nkho)**.   + Nếu đóng: thực hiện đóng popup xác nhận. |
|  |  |  |  |
| --- | --- | --- | --- |
| Nút "Đóng" | Button |  | Để ngừng thao tác thêm phiếu chuyển kho -> người dùng click chọn nút "Đóng" -> hệ thống popup Confirmation Dialog    * + Xác nhận: Đóng popup "Thêm mới phiếu chuyển kho" và không thực hiện hành động gì.   + Đóng: Đóng Confirmation Dialog và tiếp tục luồng thêm mới. |
| *Lưu ý: Nếu người dùng chọn lại 1 trong 3 thông tin "Kênh bán hàng", "Kho chuyển", "Ngày chuyển kho" và Danh sách sản phẩm đang có ít nhất 1 sản phẩm, hệ thống popup Dialog Confirmation "Cập nhật thông tin" với 2 thao tác:*   * *Nhấn "Xác nhận": Hệ thống đưa danh sách sản phẩm về măc định* * *Nhấn "Đóng": Đóng Confirmation Dialog và không thực hiện cập nhật thông tin gì* | | | |

**Thêm sản phẩm vào phiếu**

|  |  |  |  |
| --- | --- | --- | --- |
| * Click vào nút "Thêm sản phẩm"→ Hệ thống thêm 1 dòng dữ liệu vào Table → Người dùng click chọn vào ô "Tìm kiếm theo mã SKU" và nhập keyword tìm kiếm (tìm kiếm tối đa 200 ký tự dưới dạng Text) → Hệ thống hiển thị popup kết quả tìm kiếm gồm các sản phẩm thỏa mãn tất cả điều kiện:   + Sản phẩm thuộc kho chuyển được chọn trên phiếu   + Sản phẩm có "Available" > 0 (Available được tính dựa trên ngày chuyển kho được chọn trên phiếu)   + Kênh bán hàng của sản phẩm trùng với kênh bán hàng được chọn trên phiếu * Popup kết quả tìm kiếm bao gồm:    + Mã SKU   + Tên sản phẩm   + Đơn vị cơ bản * Click vào sản phẩm → đóng bảng kết quả tìm kiếm và thêm các sản phẩm đã chọn vào danh sách sản phẩm trên phiếu chuyển kho.  * **Thêm sản phẩm vào phiếu tuân theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)** | | | |

**Table "Danh sách sản phẩm"**

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Mã SKU | Text | - | Hệ thống hiển thị SKU của sản phẩm |
| Tên sản phẩm | Text | - | Hệ thống hiển thị tên sản phẩm |
| Số lượng có sẵn | Number | - | Dựa vào "Ngày chuyển kho", "Kho chuyển", "Kênh bán hàng" được chọn trên phiếu, hệ thống hiển thị số lượng có sẵn của sản phẩm theo **Quy tắc lấy số lượng có sẵn từ kho chuyển dựa vào ngày chuyển kho**n |
| Số lượng chuyển kho | Input Number | Bắt buộc | Giá trị mặc định là "Trống"  Người dùng nhập số lượng chuyển kho   Số lượng chuyển kho phải lớn hơn 0  Số lượng chuyển kho là số nguyên  Khi thay đổi số lượng chuyển kho → Thực hiện luồng Đề xuất thông tin Lô theo **[Quy tắc đề xuất thông tin lô sản phẩm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFc%C4%91%E1%BB%81xu%E1%BA%A5tth%C3%B4ngtinl%C3%B4s%E1%BA%A3nph%E1%BA%A9m)** |
| Đơn vị tính | Auto Complete | Bắt buộc | Giá trị mặc định là đơn vị cơ bản   Dropdown menu gồm các đơn vị tính theo sản phẩm  Có thể chọn các đơn vị quy đổi khác  Khi thay đổi đơn vị tính, hệ thống reset số lượng chuyển kho về mặc định |
| Thông tin lô | Icon Button | - | Click chọn button "Thêm mới", kiểm tra:   1. Nếu vừa nhập lại số lượng chuyển kho hoặc chưa nhập thông tin lô trước đó →  Popup Dialog Thông tin lô được đề xuất theo quy tắc **[Quy tắc đề xuất thông tin lô sản phẩm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFc%C4%91%E1%BB%81xu%E1%BA%A5tth%C3%B4ngtinl%C3%B4s%E1%BA%A3nph%E1%BA%A9m)** 2. Nếu không có thay đổi số lượng chuyển kho & đã nhập thông tin lô trước đó →  Popup Dialog Thông tin lô được người dùng nhập trước đó   Hiển thị danh sách lô theo **Mô tả Danh sách lô** được define dưới đây |
| Nút Xóa | Button | - | Nhấn nút xóa → hệ thống xóa dòng record tương ứng |

**Mô tả Danh sách lô**

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Số lô | Text | - | Hệ thống hiển thị số lô |
| Số lượng có sẵn | Number | - | Hệ thống hiển thị số lượng có sẵn |
| Số lượng chuyển kho | Input Number | Bắt buộc | Giá trị mặc định là số lượng được đề xuất  Min là 0   Số lượng chuyển kho trong lô là số nguyên |
| Hạn sử dụng | Date | - | Hệ thống hiển thị hạn sử dụng của sản phẩm  Định dạng là DD-MM-YYYY |
| Nút "Lưu" | Button | - | Bấm Lưu -> hệ thống kiểm tra   1. Tổng số lượng trong lô phải bằng số lượng sản phẩm ngoài danh sách    * Nếu đúng -> Check tiếp điều kiện tiếp theo    * Nếu sai -> Hiển thị toast lỗi "Tổng số lượng chuyển trong lô phải bằng số lượng chuyển sản phẩm" 2. Kiểm tra số lượng chuyển <= có sẵn     1. Nếu đúng → lưu lại và back về màn hình Danh sách sản phẩm    2. Nếu sai→ HIển toast lỗi "Số lượng chuyển không được lớn hơn số lượng có sẵn trong kho" |
| Nút "Đóng" | Button | - | Bấm Đóng → Hệ thống đóng popup và bỏ qua các thay đổi về số lô của người dùng |

## **Xem danh sách phiếu chuyển kho**

trueRed1.2.0: Thêm kênh bán hàng cho kho nhận

Đường dẫn: Kho | Chuyển kho | Chuyển kho nội bộ 

Hệ thống load Danh sách Phiếu chuyển kho theo cấu trúc dưới đây

| Trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Quy tắc load danh sách Phiếu chuyển kho nội bộ: Load danh sách phiếu chuyển kho của NPP mà user đang login | | |
| Mã chuyển kho | Text | Click vào mã chuyển kho  -> hiển thị màn hình Xem chi tiết phiếu chuyển kho  Mã chuyển kho tự động generate theo format TWxxxxxxx (trong đó <xxxxxxx>: là dãy số tự nhiên và tăng dần đều) |
| Ngày chuyển kho | Date | Hiển thị định dạng DD-MM-YYYY |
| Kho chuyển | Text | Hiển thị tên kho chuyển |
| trueRed1.2.0: Đổi tên cột này  Kênh bán hàng kho chuyển | Text | Hiển thị tên kênh bán hàng của kho chuyển |
| Kho nhận | Text | Hiển thị tên kho nhận |
| trueRed1.2.0: Bổ sung cột này  Kênh bán hàng kho nhận | Text | Hiển thị tên kênh bán hàng của kho nhận |
| Trạng thái | Badge | Hiển thị dạng tag  Có 3 trạng thái: Khởi tạo, Đã duyệt, Đã hủy, Chờ duyệt, Đã từ chối |
| Lý do | Text | Hiển thị lý do hủy  Hiển thị tối đa 20 ký tự  Hover vào sẽ hiển thị tooltips nội dung đầy đủ |
| Ngày tạo | Date | Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Ngày cập nhật | Date | Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Người tạo | Text | Hiển thị username của tài khoản người tạo phiếu |
| Người cập nhật | Text | Hiển thị username của tài khoản người cập nhật phiếu |
| Phân trang | Pagination | Phân trang theo {10; 50; 100} |
| Nút Duyệt | Button | Chỉ hiện thị ở phiếu có trạng thái “Khởi tạo” |
| Nút Chỉnh sửa | Button | Chỉ hiện thị ở phiếu có trạng thái "Khởi tạo" |
| Nút Hủy | Button | Chỉ hiện thị ở phiếu có trạng thái "Khởi tạo" |
| **Tìm kiếm & Lọc phiếu chuyển kho có điều kiện** | | |
| Tìm kiếm | Input search | Tìm kiếm Phiếu theo Mã chuyển kho : tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng Text).  Mặc định trống.  Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.  Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |
| Trạng thái | Auto Complete | Lọc phiếu theo trạng thái    * Gồm các trạng thái {Khởi tạo/Chờ duyệt/Đã duyệt/Đã hủy/Đã từ chối}. * Mặc định trống * Cho phép chọn nhiều trạng thái. * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Hệ thống lấy dữ liệu mới nhất sau người dùng nhấn "Enter" hoặc sau khi người dùng nhấn nút "Tìm kiếm" |
| Start Date & End date | Date Picker | Lọc phiếu có ngày chuyển kho trong khoảng thời gian được chọn   * end date > start date |
| Nút "Tìm kiếm" | Button | Click vào nút -> thực hiện tìm kiếm theo điều kiện lọc |

## **Xem chi tiết phiếu chuyển kho**

trueRed1.2.0: Thêm kênh bán hàng cho kho nhận

Đường dẫn: Kho | Chuyển kho | Chuyển kho nội bộ

Để xem chi tiết 1 phiếu chuyển kho, người dùng click chọn Mã phiếu chuyển kho

Hệ thống popup "Xem phiếu chuyển kho" có định dạng dưới đây

Trong Form dưới đây, người dùng chỉ xem được (không thực hiện cập nhật bất kỳ thông tin gì)

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Chỉ Xem Chi tiết phiếu chuyển kho của NPP mà user đang login | | |
| Ngày chuyển kho | Date Picker | Hiển thị ngày chuyển kho |
| Kho chuyển | Auto Complete | Hiển thị kho chuyển |
| trueRed1.2.0: *Đổi tên cột này*  Kênh bán hàng kho chuyển | Auto Complete | Hiển thị kênh bán hàng của kho chuyển |
| Kho nhận | Auto Complete | Hiển thị kho nhận |
| trueRed1.2.0: *Bổ sung cột này*  Kênh bán hàng kho nhận | Auto Complete | Hiển thị kênh bán hàng của kho nhận |
| Trạng thái | Badge | Hiển thị trạng thái dưới dạng tag |
| Lý do hủy | Text | Chỉ hiển thị với phiếu có trạng thái là "Đã hủy" |
| Danh sách sản phẩm | Table | HIển thị theo format được define dưới đây |
| Nút "Đóng" | Button | Nhấn nút "Đóng" → hệ thống đóng popup "Xem phiếu chuyển kho" |

**Mô tả Danh sách sản phẩm**

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Mã SKU | Text | Hiển thị SKU |
| Tên sản phẩm | Text | Hiển thị Tên sản phẩm |
| Số lượng | Text | Hiển thị số lượng |
| Có sẵn | Text | Với phiếu ở trạng thái "Đã hủy", "Đã duyệt", "Đã từ chối", "Chờ duyệt" → Hiển thị số lượng có sẵn  Với phiếu ở trạng thái "Khởi tạo" → hiển thị số lượng có sẵn = có sẵn + số lượng chuyển |
| Đơn vị tính | Text | Hiển thị đơn vị tính |
| Thông tin lô | Icon button | Nhấn vào nút "Xem" → hệ thống mở popup "Xem thông tin lô" |

**Mô tả thông tin lô**

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Số lượng | Text | Hiển thị số lượng |
| Có sẵn | Text | Hiển thị số có sẵn  Với phiếu ở trạng thái "Đã hủy", "Đã duyệt", "Đã từ chối", "Chờ duyệt"→ Hiển thị số lượng có sẵn  Với phiếu ở trạng thái "Khởi tạo" → hiển thị số lượng có sẵn = có sẵn + số lượng chuyển |
| Số lô | Text | Hiển thị số lô |
| Hạn sử dụng | Text | Hiển thị định dạng DD-MM-YYYY |
| Nút Đóng | Button | Nhấn nút đóng → hệ thống đóng popup "Xem thông tin lô" |

## **Chỉnh sửa phiếu chuyển kho**

trueRed1.2.0: Thêm thông tin kênh bán hàng kho nhận

Đường dẫn: Kho | Chuyển kho | Chuyển kho nội bộ

Để chỉnh sửa 1 phiếu chuyển kho, người dùng click chọn nút "Chỉnh sửa" (nút chỉnh sửa chỉ xuất hiện khi phiếu ở trạng thái "Khởi tạo")

Người dùng có thể chỉnh sửa tất cả thông tin giống với Form Thêm mới phiếu chuyển kho

Hệ thống popup **Form** **Cập nhật phiếu chuyển kho** hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:

| Mô tả chi tiết |
| --- |
| "**Thêm mới phiếu chuyển kho**" đổi thành "**Cập nhật phiếu chuyển kho**". |
| Khi cập nhật sẽ cho phép chỉnh sửa tất cả thông tin giống với Form Thêm mới phiếu chuyển kho. |
| Khi hệ thống bật Popup "Cập nhật Phiếu chuyển kho" , số lượng **"Có sẵn" trong Lô và "Tổng có sẵn" ngoài sản phẩm** trong từng sản phẩm được tính theo các bước sau   1. Thực hiện lấy số tạm giữ của phiếu chuyển kho cộng với số lượng tồn kho đáp ứng của sản phẩm. 2. Sử dụng **Quy tắc lấy tồn kho đáp ứng** dựa theo số đã tính ở bước 1 để hiển thị tồn kho   Xem ví dụ sau để hiểu chi tiết hơn  Giả sử sản phẩm A (SKU 001) có thông tin nhập hàng như sau:   |  |  |  |  |  |  |  |  |  |  |  | | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông tin ngày nhập và lô** | | | | | | | **Ngày nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | | Hàng bán | GT | 85 | 0 | 85 | 1/11 | L001 | 30/12 | 290 | 10  (PCK01 tạm giữ 10) | 300 | | 2/11 | L002 | 4/12 | 60 | 40  (PCK01 tạm giữ 40) | 100 | | 5/11 | L003 | 3/12 | 200 |  | 200 | | 9/11 | L001 | 7/12 | 0 | 100  (PCK01 chỉ tạm giữ 50) | 100 | | 15/11 | L001 | 6/12 | 150 |  | 150 |   **Bước 1:**Thực hiện lấy số tạm giữ của phiếu chuyển kho cộng với số lượng tồn kho đáp ứng của sản phẩm.   | Ngày nhập | Số lô | Ngày hết hạn | Số lượng có sẵn hiển thị Table Sản phẩm PCK 01 | Giải thích chi tiết | | --- | --- | --- | --- | --- | | 1/11 | L001 | 30/12 | 300 | Có sẵn = 290 + 10 = 300 (vì PCK01 đang tạm giữ 10) | | 2/11 | L002 | 4/12 | 100 | Có sẵn = 60 + 40 = 100 (vì PCK01 đang tạm giữ 40) | | 5/11 | L003 | 3/12 | 200 | - | | 9/11 | L001 | 7/12 | 50 | Có sẵn = 0 + 50 = 50 (vì PCK01 đang tạm giữ 50) | | 15/11 | L001 | 6/12 | 150 | - |   **Bước 2:** Sử dụng **Quy tắc lấy tồn kho đáp ứng** tại **ngày chuyển kho 10/11/2024 →** Chỉ tính tồn kho đáp ứng với các dữ liệu nhập hàng ngày 1/11, 2/11, 5/11, 9/11  **Số lượng tồn kho của Lô:**   | Số lượng chuyển | Số lượng có sẵn | Số lô | Hạn sử dụng | | --- | --- | --- | --- | | 10 | 300 | L001 | 30/12 | | 40 | 100 | L002 | 4/12 | | 0 | 200 | L003 | 3/12 | | 50 | 50 | L001 | 7/12 |   **→ Tổng tồn kho (có sẵn) sản phẩm A = 650** |
| **Lưu:** Sau khi nhấn Lưu, hệ thống thực hiện:   * Kiểm tra:   + Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo "Trường <a> là bắt buộc". Với <a> là tên trường.   + Nếu có sản phẩm để số lượng là trống hoặc 0 thì thì báo lỗi trên từng line sản phẩm với thông báo "Vui lòng nhập số lượng cho sản phẩm".   + Kiểm tra tồn kho theo **Quy tắc tồn kho**, nếu không đủ tồn kho thì báo lỗi "Tồn kho không đáp ứng" dưới mỗi dòng dữ liệu.   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - * Nếu đồng ý:           + - Thực hiện tính toán lại tồn kho:              * Bước 1: Thực hiện trả lại tồn kho đáp ứng.             * Bước 2: Tính lại tồn theo **Cập nhật tồn kho theo tạo mới đơn hàng**.       * Nếu hủy → Đóng popup lại và không thực hiện thay đổi gì |
| Lưu & Duyệt:    1. **Kiểm tra sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)** 2. Thực hiện luồng Cập nhật Phiếu chuyển kho 3. Thực hiện luồng Duyệt phiếu chuyển kho |
| *Lưu ý: Tại màn hình edit, nếu các trường chọn giá trị đang lưu 1 giá trị không hoạt động thì hệ thống sẽ hiển thị field đó là rỗng mà không cần báo lỗi gì, nếu người dùng không chọn lại mà nhấn lưu thì sẽ báo lỗi nếu trường đó bắt buộc hoặc lưu rỗng nếu trường đó không bắt buộc.* |

## **Duyệt phiếu chuyển kho**

Đường dẫn: Kho -> Chuyển kho -> Chọn nút Duyệt một phiếu chuyển kho trên danh sách

Xử lý: Hiển thị popup "Xác nhận duyệt phiếu chuyển kho" ngay trên nút:

* + Xử lý: Hiển thị popup xác nhận ngay trên nút:
    - Nếu đồng ý: Hệ thống thực hiện
      * **Kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**
      * Chuyển trạng thái phiếu chuyển kho sang **Chờ duyệt**.
    - Nếu đóng: thực hiện đóng popup xác nhận.

**Lưu ý:** Chỉ được duyệt phiếu chuyển kho trạng thái Khởi tạo 

## **Hủy phiếu chuyển kho**

Đường dẫn: Kho -> Chuyển kho -> Chuyển kho nội bộ 

Để Hủy phiếu chuyển Kho, người dùng nhấn chọn nút Hủy phiếu chuyển kho" trên danh sách". Hệ thống thực hiện xử lý:

* Hiển thị popup **Xác nhận hủy phiếu chuyển kho**:
  + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":
    - Độ dài tối đa: 200 ký tự
    - Nhấn Đồng ý: Hệ thống thực hiện
      * Cập nhật trạng thái phiếu chuyển kho sang **Đã hủy**
      * Thực hiện Revert lại số lượng Tạm giữ & Có sẵn trong Kho Chuyển
    - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.
  + Nếu đóng: thực hiện đóng popup xác nhận.

**Lưu ý:** Chỉ được hủy phiếu chuyển kho có trạng thái Khởi tạo 

**Kết quả:** Chuyển trạng thái của phiếu chuyển kho từ Khởi tạo sang Đã hủy 

# **Business Rules**

## **Quy tắc đề xuất thông tin lô sản phẩm**

| Thông tin đầu vào | Quy trình xử lý | Kết quả đầu ra |
| --- | --- | --- |
| Kênh bán hàng  Kho chuyển  Ngày chuyển kho  Sản phẩm - Số lượng | 1. Dựa vào thông tin "Sản phẩm", "Kho chuyển", "Kênh bán hàng", hệ thống lấy danh sách tồn kho tương ứng 2. Dựa vào "ngày chuyển kho" & danh sách tồn kho được lọc ra từ bước (1)     1. Hệ thống lọc danh sách tồn kho đáo ứng tại thời điểm ngày chuyển kho    2. Thực hiện đề xuất số lượng **Tạm giữ** theo lô theo cơ chế:        1. Tăng số tạm giữ ở dòng dữ liệu tồn kho có hạn sử dụng gần nhất       2. Nếu hạn sử dụng trùng nhau, thì xét đến ngày nhập hàng → tăng tạm giữ dữ liệu tồn kho có ngày nhập hàng xa nhất | Danh sách lô được đề xuất  Số lượng đề xuất - Số lượng có sẵn - Số lô - Hạn sử dụng |

Xem ví dụ dưới đây để hiểu quy tắc đề xuất thông tin lô sản phẩm :

**Thông tin đầu vào**

* Sản phẩm A
  + Trường hợp 1: Số lượng chuyển 40
  + Trường hợp 2: Số lượng chuyển 25
* Kênh bán hàng: GT
* Kho chuyển: Hàng bán
* Ngày chuyển kho: 
  + Trường hợp 1:  10/11/2024
  + Trường hợp 2: 6/11/2024
  + Trường hợp 3: 30/10/2024

**Quy trình xử lý:**

Sản phẩm A có SKU 001 có thông tin tồn kho như sau: 

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |
| Hàng bán | MT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |
| Khuyến mãi | GT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |

**Bước 1: Dựa vào thông tin "Sản phẩm" được chọn, "Kho chuyển", "Kênh bán hàng", hệ thống lấy danh sách tồn kho tương ứng**

Hệ thống lấy danh sách kho tương ứng có **Kho chuyển = Hàng bán, Kênh bán hàng = GT, Sản phẩm là A**

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

**Bước 2: Dựa vào "ngày chuyển kho" & danh sách tồn kho được lọc ra từ bước (1) , hệ thống lọc danh sách tồn kho đáo ứng tại thời điểm ngày chuyển kho**

1. Trường hợp 1: **Ngày chuyển kho = 10/11 & Số lượng chuyển : 40**

   1. **Bước 2.1 : Hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm:**

      |  |  |  |  |  |  |  |  |  |  |  |  |
      | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
      | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
      | **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
      | Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
      | 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
      | 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
      | 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
      | 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

      => Lấy được các thông tin lô nhập vào các ngày **1/11, 2/11, 3/11, 5/11, 9/11**
   2. **Bước 2.2: Dựa vào "Hạn sử dụng", hệ thống đề xuất theo thứ tự: L003 → L002 → L001 → L004**

      | Số lô | Có sẵn | Số lượng đề xuất | Hạn sử dụng |
      | --- | --- | --- | --- |
      | L003 | 20  Lấy số lượng có sẵn L003 ngày 3/11 | 20  Chọn lô L003 đề xuất đầu tiên vì có HSD là 3/12 . CHỉ đề xuất được 20 vì lô L003 chỉ có sẵn số lượng 20  Số lượng còn lại phải đề xuất = 40 - 20 = 20 | 3/12 |
      | L002 | 10  Lấy số lượng có sẵn L002 ngày 2/11 | 10  Tiếp tục chọn lô L002 đề xuất vì có HSD là 4/12.  Chỉ đề xuất được 10 vì lô L003 chỉ có sẵn số lượng 10  Số lượng còn lại phải đề xuất = 20 - 10 = 10 | 4/12 |
      | L001 | 20  số lượng có sẵn L001 ngày 1/11 + số lượng có sẵn L001 ngày 3/11 | 10  Tiếp tục chọn lô L001 để đề xuất vì có HSD là 7/12. Lô L001 có sẵn 20 và đề xuất 10 → Kết thúc đề xuất | 7/12 |
      | L004 | 30  số lượng có sẵn L004 ngày 9/11 | 0  Không cần đề xuất vì đã đủ số lượng | 30/12 |
2. Trường hợp 2: **Ngày chuyển kho = 6/11 & Số lượng chuyển là 25**
   1. **Bước 2.1: Hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm:**Lấy được các thông tin lô nhập vào các ngày **1/11, 2/11, 3/11, 5/11** và lấy được tổng tồn kho đáp ứng tại thời điểm ngày **6/11**

      |  |  |  |  |  |  |  |  |  |  |  |  |
      | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
      | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
      | **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
      | Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
      | 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
      | 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
      | 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
   2. **Bước 2.2: Dựa vào "Ngày hết hạn", hệ thống đề xuất theo thứ tự: L003 → L002 → L001**

      | Số lô | Có sẵn | Số lượng đề xuất | Hạn sử dụng |
      | --- | --- | --- | --- |
      | L003 | 20  Lấy số lượng có sẵn L003 ngày 5/11 | 20  Chọn lô L003 đề xuất đầu tiên vì có HSD là 3/12 . Vì lô L003 chỉ có sẵn số lượng 20, nên chỉ đề xuất 20 → Số lượng còn lại phải đề xuất = 40 - 20 = 20 | 3/12 |
      | L002 | 10  Lấy số lượng có sẵn L002 ngày 2/11 | 10  Tiếp tục chọn lô L002 đề xuất vì có HSD là 4/12.Vì lô L002 chỉ có sẵn số lượng 10, nên chỉ đề xuất 10 → Số lượng còn lại phải đề xuất = 20 - 10 = 10 | 4/12 |
      | L001 | 20  số lượng có sẵn L001 ngày 1/11 + số lượng có sẵn L001 ngày 3/11 | 10  Tiếp tục chọn lô L001 để đề xuất vì có HSD là 7/12. Lô L001 có sẵn 20 và đề xuất 10 → Kết thúc đề xuất | 7/12 |
3. Trường hợp 3:**ngày chuyển kho =** **30/10**, tuy nhiên ngày 30/10 sẽ không có record tồn kho nào thỏa điều kiện → danh sách lô sẽ không có giá trị

**Kết quả đầu ra:**

1. Ngày chuyển kho = 10/11 → Có sẵn = 80 , Đơn vị : gói

   | Số lô | Có sẵn | Số lượng đề xuất | Hạn sử dụng |
   | --- | --- | --- | --- |
   | L003 | 20 | 20 | 3/12 |
   | L002 | 10 | 10 | 4/12 |
   | L001 | 20 | 10 | 7/12 |
   | L004 | 30 | 0 | 30/12 |
2. Ngày chuyển kho = 06/11 → Có sẵn = 30 , Đơn vị : gói

   | Số lô | Có sẵn | Số lượng đề xuất | Hạn sử dụng |
   | --- | --- | --- | --- |
   | L003 | 20 | 20 | 3/12 |
   | L002 | 10 | 10 | 4/12 |
   | L001 | 20 | 10 | 7/12 |
3. Ngày chuyển kho = 30/11 → Dữ liệu rỗng

## **Quy tắc lấy số lượng có sẵn từ kho chuyển dựa vào ngày chuyển kho**

| Thông tin đầu vào | Quy trình xử lý | Kết quả đầu ra |
| --- | --- | --- |
| "Ngày chuyển kho" , "Kho chuyển", "Kênh bán hàng" và "Sản phẩm" được người dùng chọn | 1. Dựa vào thông tin "Sản phẩm" được chọn, "Kho chuyển", "Kênh bán hàng", hệ thống lấy danh sách tồn kho tương ứng ở bước (1) 2. Dựa vào "ngày chuyển kho" & danh sách tồn kho được lọc ra từ bước (1) , hệ thống lấy tổng số lượng có sẵn đáp ứng theo lô tại thời điểm ngày chuyển kho | Sản phẩm X - [số lượng có sẵn] - Đơn vị tính |

Xem ví dụ dưới đây để hiểu quy tắc lấy số lượng có sẵn:

**Thông tin đầu vào**

* NPP: HO
* Sản phẩm A (SKU = 001)
* Kênh bán hàng: GT
* Kho chuyển: Hàng bán
* Ngày chuyển kho: 
  + Trường hợp 1:  10/11/2024
  + Trường hợp 2: 4/11/2024
  + Trường hợp 3: 30/10/2024

**Quy trình xử lý:**

Sản phẩm A có SKU 001 có thông tin tồn kho như sau: 

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |
| Hàng bán | MT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |
| Khuyến mãi | GT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |

**Bước 1: Dựa vào thông tin "Sản phẩm" được chọn, "Kho chuyển", "Kênh bán hàng", hệ thống lấy danh sách tồn kho tương ứng**

Hệ thống lấy danh sách kho tương ứng

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

**Bước 2: Dựa vào "ngày chuyển kho" & "ngày nhập hàng" , hệ thống lấy tổng số lượng có sẵn đáp ứng theo lô tại thời điểm ngày chuyển kho**

1. Trường hợp 1:**ngày chuyển kho =** **10/11**, hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm:

   |  |  |  |  |  |  |  |  |  |  |  |  |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
   | **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
   | Hàng bán | GT | 80 | 5 | 85 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
   | 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
   | 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
   | 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
   | 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

   Lấy được các thông tin lô nhập vào các ngày 1/11, 2/11, 3/11, 5/11, 9/11 và lấy được tổng **có sẵn** tại thời điểm ngày 10/11 là 80 → Hiển thị **80**.
2. Trường hợp 2:**ngày chuyển kho =** **04/11**, hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập và lấy được thông tin tồn kho gồm:

   |  |  |  |  |  |  |  |  |  |  |  |  |
   | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
   | **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
   | **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
   | Hàng bán | GT | 30 | 5 | 35 | 1/11 | 10 | LO01 | 7/12 | 5 | 5 | 10 |
   | 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
   | 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |

   Lấy được các thông tin lô nhập vào các ngày 1/11, 2/11, 3/11 và lấy được tổng tồn kho đáp ứng tại thời điểm ngày 04/11 là 30 → Hiển thị **30**
3. Trường hợp 3:**ngày chuyển kho =** **30/10**, tuy nhiên ngày 30/10 sẽ không có record tồn kho nào thỏa điều kiện → tổng số lượng **có sẵn**sẽ là **0 →** Hiển thị **0**

**Lưu ý**: Trường hợp sản phẩm đang được chọn có đơn vị tính là đơn vị quy đổi thì thực hiện tính số lượng quy đổi = số lượng của đơn vị căn bản / hệ số quy đổi. Nếu số lượng tính ra là số thập phần thì làm tròn số theo [Quy tắc làm tròn số thập phân](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)

VD:

* Sản phẩm có các thông tin sau:
  + Đơn vị cơ bản là Gói
  + Đơn vị quy đổi là Thùng với hệ số quy đổi là 1 thùng có 10 gói.
  + Hệ thống áp dụng quy tắc hiển thị tồn kho đáp ứng lấy ra được số lượng tồn kho theo gói là 1000.  
    → Khi chọn lại đơn vị là Thùng thì phải tính lại số lượng theo thùng = 1000 / 10 = 100 Thùng. → Hiển thị 100.
* Sản phẩm có các thông tin sau:
  + Đơn vị cơ bản là Thùng
  + Đơn vị quy đổi là Thùng với hệ số quy đổi là 1 thùng = 0.17 gói
  + Hệ thống áp dụng quy tắc hiển thị tồn kho đáp ứng lấy ra được số lượng tồn kho theo thùng là 100.  
    → Khi chọn lại đơn vị là Gói thì phải tính lại số lượng theo gói = 111 / 0.17 = 652.941176471 → Làm tròn thành 652.941177 để hiển thị lên.

**Kết quả đầu ra**

1. Ngày chuyển kho = 10/11 → Có sẵn = 80 ; Đơn vị : gói
2. Ngày chuyển kho = 04/11 → Có sẵn = 30 ; Đơn vị : gói
3. Ngày chuyển kho = 30/10 → Có sẵn = 0 ; Đơn vị : gói

## **Quy tắc cập nhật tồn kho sau khi tạo phiếu chuyển kho**

| Thông tin đầu vào | Quy trình xử lý | Kết quả mong đợi |
| --- | --- | --- |
| Ngày chuyển kho  Kho chuyển  Kênh bán hàng  Sản phẩm   * Số lô - Số lượng chuyển kho - Đơn vị tính | 1. Quy đổi số lượng sản phẩm của các lô sang đơn vị cơ bản nếu đơn vị tính trên phiếu chuyển kho là đơn vị quy đổi (nếu trên phiếu là đơn vị cơ bản thì bỏ qua bước này) 2. Thực hiện cập nhật số lượng trong kho như sau:    * Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu chuyển kho với nguyên tắc: trừ "Có sẵn" của lô có ngày hết hạn gần nhất để trừ dần cho đến khi đáp ứng đủ số lượng yêu cầu, nếu một lô không đủ đáp ứng số lượng yêu cầu, hệ thống sẽ tiếp tục lấy từ lô kế tiếp có ngày hết hạn gần nhất để trừ tiếp. Nhưng nếu lô có nhiều ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước để trừ trước. Công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong phiếu nhập kho    * Cập nhật số lượng "Tạm giữ" của từng lô trong kho với công thức: Tạm giữ  = Tồn kho - Tạm giữ hiện tại | Tồn kho dùng lô được cập nhật |

Xem ví dụ dưới đây để hiểu quy tắc tính tồn kho sau khi tạo mới phiếu chuyển kho:

**Thông tin đầu vào**

Sản phẩm A (SKU = 001)

Kênh bán hàng: GT

Kho chuyển: Hàng bán

Ngày chuyển kho: **10/11/2024**

Danh sách sản phẩm 

| Sản phẩm | SKU | Số lượng | Đơn vị | Số lô | Số lượng |
| --- | --- | --- | --- | --- | --- |
| A | 001 | 5 | Thùng | L001 | 3 |
| L002 | 2 |
| L003 | 0 |

Sản phẩm A có SKU 001, đơn vị cơ bản là "Lon", đơn vị quy đổi Thùng (1 thùng = 20 lon) có thông tin tồn kho như sau: 

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 100 | LO01 | 30/12 | 300 | 0 | 300 |
| 2/11 | 100 | LO02 | 4/12 | 100 | 0 | 100 |
| 5/11 | 200 | LO03 | 3/12 | 200 | 0 | 200 |
| 9/11 | 300 | LO01 | 07/12 | 50 | 50 | 100 |
| 15/11 | 150 | LO01 | 6/12 | 150 | 0 | 150 |

**Bước 1: Quy đổi số lượng sản phẩm của các lô sang đơn vị cơ bản nếu đơn vị tính trên phiếu chuyển kho là đơn vị quy đổi**

| Sản phẩm | SKU | Số lượng | Đơn vị | Số lô | Số lượng |
| --- | --- | --- | --- | --- | --- |
| A | 001 | 100 | Lon | L001 | 60 |
| L002 | 40 |
| L003 | 0 |

**Bước 2: Thực hiện cập nhật số lượng trong kho như sau**

Lọc danh sách tồn kho trước ngày chuyển kho (10/11/2024). Kết quả sẽ gồm danh sách nhập kho ngày 1/11, 2/11, 5/11, 9/11

| Ngày nhập | Số lô | Ngày hết hạn | Có sẵn | Tạm giữ | Tồn kho |
| --- | --- | --- | --- | --- | --- |
| 1/11 | LO01 | 30/12 | 300 | 0 | 300 |
| 2/11 | LO02 | 4/12 | 100 | 0 | 100 |
| 5/11 | LO03 | 3/12 | 200 | 0 | 200 |
| 9/11 | LO01 | 07/12 | 50 | 50 | 100 |

Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu chuyển kho với nguyên tắc: trừ "Có sẵn" của lô có ngày hết hạn gần nhất để trừ dần cho đến khi đáp ứng đủ số lượng yêu cầu, nếu một lô không đủ đáp ứng số lượng yêu cầu, hệ thống sẽ tiếp tục lấy từ lô kế tiếp có ngày hết hạn gần nhất để trừ tiếp. Nhưng nếu lô có nhiều ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước để trừ trước. Công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong phiếu nhập kho

| Ngày nhập | Số lô | Ngày hết hạn | Có sẵn | Tạm giữ | Tồn kho | Giải thích chi tiết |
| --- | --- | --- | --- | --- | --- | --- |
| 1/11 | LO01 | 30/12 | 290 | 10 | 300 | 1. Chọn L001 có HSD là 07/12 , vì trong lô L001 - HSD 07/12 chỉ còn **Có sẵn** **50** → thực hiện tăng **Tạm giữ thêm 50**      1. Tạm giữ = 50 + 50 = 100    2. Có sẵn = Tồn kho - Tạm giữ = 100 - 100 = 0    3. Số lượng còn lại cần chuyển lô L001 = 60 - 50 = 10 2. Tiếp tục chọn L001 có HSD là 30/12 để lấy số lượng → thực hiện tăng tạm giữ lên 10    1. Tạm giữ = 0 + 10 = 10    2. Có sẵn = Tồn kho - Tạm giữ = 300 - 10 = 290    3. Số lượng cần chuyển trong lô L001 đã đủ, kết thúc 3. Chọn L002 có HSD là 4/12, thực hiện tăng tạm giữ lên 40     1. Tạm giữ = 0 + 40 = 40    2. Có sẵn = Tồn kho - Tạm giữ = 100 - 40 = 60    3. Số lượng cần chuyển trong lô L002 đã đủ, kết thúc |
| 2/11 | LO02 | 4/12 | 60 | 40 | 100 |
| 5/11 | LO03 | 3/12 | 200 | 0 | 200 |
| 9/11 | LO01 | 7/12 | 0 | 100 | 100 |

## **Quy tắc hiển thị tồn kho đáp ứng**

| Thông tin đầu vào | Quy trình xử lý | Kết quả đầu ra |
| --- | --- | --- |
| Phiếu chuyển kho  Nhà phân phối  Sản phẩm   Kênh bán hàng  Ngày chuyển kho  Sản phẩm | 1. Thực hiện lấy số tạm giữ của phiếu chuyển kho cộng với số lượng tồn kho đáp ứng của sản phẩm. 2. Sử dụng **Quy tắc lấy tồn kho đáp ứng** dựa theo số đã tính ở bước 1 để hiển thị tồn kho. | Số lượng "Có sẵn" của sản phẩm |

Xem ví dụ dưới đây: 

**Thông tin đầu vào**

* Phiếu chuyển kho: PCK01
* NPP: HO
* Sản phẩm A (SKU = 001)
* Kênh bán hàng: GT
* Kho chuyển: Hàng bán
* Ngày chuyển kho: **10/11/2024**
* Danh sách sản phẩm : Sản phẩm A - SKU 001

**Quy trình xử lý :**

Giả sử sản phẩm A (SKU 001) có thông tin nhập hàng như sau:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 100 | LO01 | 30/12 | 290 | 10  (PCK01 tạm giữ 10) | 300 |
| 2/11 | 100 | LO02 | 4/12 | 60 | 40  (PCK01 tạm giữ 40) | 100 |
| 5/11 | 200 | LO03 | 3/12 | 200 | 0 | 200 |
| 9/11 | 300 | LO01 | 07/12 | 0 | 100  (PCK01 chỉ tạm giữ 50) | 100 |
| 15/11 | 150 | LO01 | 6/12 | 150 | 0 | 150 |

**Bước 1:**Thực hiện lấy số tạm giữ của phiếu chuyển kho cộng với số lượng tồn kho đáp ứng của sản phẩm.

| Ngày nhập | Số lô | Ngày hết hạn | Số lượng có sẵn hiển thị Table Sản phẩm PCK 01 | Giải thích chi tiết |
| --- | --- | --- | --- | --- |
| 1/11 | LO01 | 30/12 | 300 | Có sẵn = 290 + 10 = 300 (vì PCK01 đang tạm giữ 10) |
| 2/11 | LO02 | 4/12 | 100 | Có sẵn = 60 + 40 = 100 (vì PCK01 đang tạm giữ 40) |
| 5/11 | LO03 | 3/12 | 200 |  |
| 9/11 | LO01 | 07/12 | 50 | Có sẵn = 0 + 50 = 50 (vì PCK01 đang tạm giữ 50) |
| 15/11 | LO01 | 6/12 | 150 |  |

Bước 2: Sử dụng **Quy tắc lấy tồn kho đáp ứng** tại **ngày chuyển kho 10/11/2024 →** Chỉ tính tồn kho đáp ứng với các dữ liệu nhập hàng ngày 1/11, 2/11, 5/11, 9/11

| Ngày nhập | Số lô | Ngày hết hạn | Số lượng có sẵn hiển thị Table Sản phẩm PCK 01 |
| --- | --- | --- | --- |
| 1/11 | LO01 | 30/12 | 300 |
| 2/11 | LO02 | 4/12 | 100 |
| 5/11 | LO03 | 3/12 | 200 |
| 9/11 | LO01 | 07/12 | 50 |

**Tổng tồn kho (có sẵn) sản phẩm A = 650**