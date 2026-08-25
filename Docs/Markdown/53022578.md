lonone

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-605  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-606  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-607  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-608  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-609  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-610 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

pr

## **Lịch sử tài liệu**

3

## **Description**

## **Requirements**

### **Xem danh sách chuyển kho vansale**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Kho → Chuyển kho → Chuyển kho vansales |
| Màn hình *Danh sách chuyển kho* |  | Màn hình danh sách chuyển kho bao gồm:   * Tìm kiếm   + Tìm kiếm theo Mã chuyển kho : tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Trạng thái     - Gồm các trạng thái {Khởi tạo/Đã duyệt/Đã hủy}.     - Mặc định trống     - Cho phép chọn nhiều trạng thái.     - Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Ngày chuyển kho [datepicker]: Từ ngày - đến ngày     - Đến ngày chỉ được chọn lớn hơn hoặc bằng Từ ngày   + Nút Tìm kiếm: Click vào nút -> thực hiện tìm kiếm theo điều kiện lọc  * Nút Tạo mới: Click vào nút -> hiển thị popup Tạo mới phiếu chuyển kho vansales * Danh sách bao gồm:   + Mã chuyển kho: Click vào mã chuyển kho  -> hiển thị màn hình Xem chi tiết phiếu chuyển kho   + Ngày chuyển kho: hiển thị theo format dd-mm-yyyy   + Trạng thái: bao gồm Khởi tạo/Đã duyệt/Đã huỷ   + Ngày tạo: theo format dd-mm-yyyy hh:mm:ss   + Ngày cập nhật: hiển thị thời gian cập nhật gần nhất, theo format dd-mm-yyyy hh:mm:ss   + Người tạo: hiển thị username của người tạo phiếu   + Người cập nhật: hiển thị username của người cập nhật gần nhất   + Phân trang theo {10; 50; 100}   + Nút Duyệt: Chỉ hiện thị ở đơn hàng có trạng thái “Khởi tạo”   + Nút Từ chối: Chỉ hiển thị ở đơn hàng có trạng thái “Khởi tạo”   + Nút Chỉnh sửa: Chỉ hiện thị ở đơn hàng có trạng thái "Khởi tạo" |

### **Tạo mới phiếu chuyển kho vansales**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Kho → Chuyển kho → Chuyển kho vansales  → Chọn nút Tạo mới |
| Popup*Tạo mới phiếu chuyển kho* | *Popup*Tạo mới phiếu chuyển kho    *Popup*Chọn danh sách sản phẩm      *Popup*Thông tin lô | * Ngày chuyển kho [datepicker]:   + Bắt buộc nhập   + Mặc định autofill ngày hiện tại, cho phép chỉnh sửa  * Kho [dropdown]   + Bắt buộc chọn   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của  trường Kho hệ thống trong Core Kho DMS   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kho hệ thống   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Kênh [dropdown]   + Bắt buộc chọn.   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của trường Tên kênh bán hàng tại màn hình chức năng Kênh bán hàng   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kênh bán hàng   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Nhân viên:   + Bắt buộc chọn   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện load danh sách Nhân viên bán hàng từ **TUYẾN** đang hoạt động của NPP, danh sách hiển thị Mã nhân viên - Tên nhân viên. → Khi thực hiện chọn dữ liệu, trường thông tin hiển thị Tên nhân viên.   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã nhân viên, Tên nhân viên.   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Loại phiếu [dropdown]   + Bao gồm 2 giá trị: Nhập kho vansales & Trả kho vansales   + Chỉ được chọn 1   + Mặc định chọn Nhập kho vansales   Danh sách sản phẩm, bắt buộc phải có thông tin sản phẩm, có các thông tin gồm:    * + Mã SKU:     - Hiển thị field cho phép nhập để tìm kiếm sản phẩm     - Cho phép tìm kiếm thông tin sản phẩm like theo Mã sản phẩm, Tên sản phẩm → Danh sách sản phẩm theo kết quả tìm kiếm gồm các sản phẩm thỏa mãn tất cả điều kiện       * Sản phẩm thuộc Kho và Kênh được chọn trên phiếu       * Sản phẩm có "Available" tại ngày chuyển kho đã chọn > 0     - Mặc định trống     - Cho nhập tìm kiếm tối đa 200 ký tự.     - Sản phẩm khi được chọn sẽ tự động dùng thông tin của sản phẩm đó để điền vào các field còn lại trong danh sách sản phẩm gồm: Mã SKU, Tên sản phẩm, Đơn vị tính   + Tên sản phẩm: được tự động điền vào khi có sản phẩm đã được chọn khi thêm sản phẩm vào danh sách.   + Đơn vị tính: được tự động điền vào khi có sản phẩm được chọn khi thêm sản phẩm vào danh sách.   + Số lượng [textbox]     - Mặc định là 0,     - Chỉ cho phép nhập số.     - Cho phép nhập tối đa 6 ký tự.     - Bắt buộc nhỏ hơn hoặc bằng giá trị cột Có sẵn   + Tồn kho: Hiển thị số lượng có sẵn của sản phẩm trong kho, bằng tổng số lượng Có sẵn theo từng lô của sản phẩm được tính theo **Quy tắc tính Có sẵn của sản phẩm**   + Thông tin lô: bắt buộc nhập, Click vào nút → hiển thị popup bao gồm các lô có trong kho & kênh bán hàng được chọn tại trường *Kho* & *Kênh bán hàng*:     - Số lượng *[textbox]*       * Chỉ cho phép nhập số nguyên dương       * Bắt buộc nhỏ hơn hoặc bằng giá trị cột Tồn kho     - Tồn kho : Hiển thị theo **Quy tắc tính tồn kho tại Thông tin lô**     - Số lô     - Hạn sử dụng     - Nút Đóng: Click vào nút → hệ thống thực hiện đóng popup thông tin lô     - Nút Hoàn tất: Click vào nút → hệ thống thực hiện kiểm tra       * Tổng số lượng được nhập từ các dòng lô phải bằng số lượng sản phẩm được nhập ở màn hình danh sách sản phẩm, nếu không báo lỗi *"Tổng số lượng sản phẩm phải bằng số lượng sản phẩm ngoài danh sách."*       * Nếu số lượng lớn hơn tồn kho, báo lỗi: *"Số lượng không được lớn hơn Tồn kho"*   + Nút Xóa: Click vào nút → thực hiện xóa dòng sản phẩm khỏi danh sách   + Nút Thêm sản phẩm: Click vào nút →thêm dòng sản phẩm để cho người dùng thêm vào danh sách sản phẩm.  * Nút Đóng: Click vào nút → hệ thống hiển thị popup yêu cầu xác nhận   + Nếu chọn Đồng ý: Hệ thống thực hiện đóng popup tạo mới và trở về màn hình danh sách chuyển kho   + Nếu chọn Hủy: Hệ thống thực hiện đóng popup xác nhận * Nút Lưu: Khi nhấn lưu hệ thống thực hiện kiểm tra và xử lý:   + Kiểm tra:     - Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.     - Nếu loại phiếu = **"Nhập kho vansales**", thực hiên tính lại cột *Tồn kho* trong Thông tin lô theo **[Quy tắc tính tồn kho tại Thông tin lô](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445066#id-[NPP]Xu%E1%BA%A5tkho-tinhtonkho),**nếu số lượng lớn hơn tồn kho mới, báo lỗi: *"Số lượng từng lô không được lớn hơn Tồn kho".*     - Nếu loại phiếu = **"Nhập kho vansales**", khi giá trị nhập tại trường Số lượng của 1 sản phẩm > Có sẵn của sản phẩm đó, báo lỗi dưới line của trường "Số lượng" của sản phẩm: *"Số lượng không được lớn hơn Có sẵn"*     - Nếu có sản phẩm để số lượng là trống hoặc 0 thì thì báo lỗi trên từng line sản phẩm với thông báo *"Vui lòng nhập số lượng cho sản phẩm".*   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý:       * + Hệ thống thực hiện tạo dòng dữ liệu phiếu chuyển kho với trạng thái **Khởi tạo**.         + Tạo mã trả hàng với chuỗi VT + 6 ký tự số tăng dần. VD: VT000001.         + Nếu loại phiếu = **"Nhập kho vansales**", Thực hiện cập nhật tồn kho theo **Quy tắc cập nhật tồn kho sau khi tạo phiếu chuyển kho**.     - Nếu đóng: thực hiện đóng popup xác nhận. |

### **Chỉnh sửa phiếu chuyển kho**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Kho → Chuyển kho → Chuyển kho vansales  → Chọn nút Chỉnh sửa một phiếu chuyển kho bất kì |
| Popup*Chỉnh sửa phiếu chuyển kho* |  | Cập nhật phiếu chuyển kho hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:   * + "**Tạo mới phiếu chuyển kho**" đổi thành "**Cập nhật phiếu chuyển kho**".   + Khi cập nhật sẽ cho phép sửa hết toàn bộ thông tin phiếu chuyển kho.   + Thêm nút "**Lưu & Duyệt**": khi click vào nút → hệ thống thực hiện     - Cập nhật thông tin phiếu chuyển kho     - Cập nhật tồn kho theo **Quy tắc cập nhật tồn kho sau khi duyệt phiếu chuyển kho**.   + Sau khi nhấn Lưu, hệ thống thực hiện cập nhật lại tồn kho:     - Cập nhật thông tin phiếu chuyển kho     - Nếu loại phiếu = "Nhập kho vansales":       * Thực hiện trả lại số lượng Tạm giữ.       * Tính lại tồn theo **Quy tắc cập nhật tồn kho sau khi tạo phiếu chuyển kho**   **Lưu ý:** Chỉ được duyệt đơn hàng có trạng thái **Khởi tạo** |

### **Duyệt phiếu chuyển kho**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Kho → Chuyển kho → Chuyển kho vansales  → Chọn nút Duyệt một phiếu chuyển kho trên danh sách |
| Duyệt phiếu chuyển kho | N/A | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu chuyển kho" ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * Chuyển trạng thái đơn hàng sang **Đã duyệt**.       * Cập nhật kho của NPP theo **Quy tắc cập nhật tồn kho khi duyệt phiếu chuyển kho**     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt đơn hàng có trạng thái Khởi tạo |

### **Huỷ phiếu chuyển kho**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Kho → Chuyển kho → Chuyển kho vansales  → Chọn nút Hủy một phiếu chuyển kho trên danh sách |
|  | N/A | Khi nhấn vào hệ thống thực hiện xử lý:   * Xử lý: Hiển thị popup Xác nhận hủy phiếu chuyển kho ngay trên nút:   + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất: Hệ thống thực hiện       * Cập nhật trạng thái phiếu chuyển kho sang **Đã hủy**       * Nếu loại phiếu = " Nhập kho vansales" → Trả lại số lượng sản phẩm mà phiếu chuyển kho đang tạm giữ.     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được hủy phiếu chuyển kho có trạng thái Khởi tạo |

### Xem chi tiết phiếu chuyển kho

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | Đường dẫn |  | Đường dẫn: Bán hàng → chuyển kho  → Chọn vào mã chuyển kho bất kì |
|  |  |  | * Ngày chuyển kho * Kho * Kênh bán hàng * Nhân viên * Loại phiếu: {Nhập kho vansales/ Trả kho vansales} * Trạng thái: Khỏi tạo/ Đã duyệt/ Đã hủy * Lý do hủy: Chỉ hiển thị khi phiếu chuyển kho ở trạng thái "Đã hủy" * Danh sách sản phẩm bao gồm:   + Mã SKU   + Tên sản phẩm   + Số lượng   + Tồn kho   + Đơn vị tính   + Thông tin lô: Click vào icon Xem → hiển thị popup Thông tin lô bao gồm:     - Số lượng     - Số lô     - Hạn sử dụng     - Nút Đóng: Click vào nút → thực hiện đóng popup Thông tin lô * Nút Đóng: Click vào nút → hệ thống thực hiện đóng màn hình xem chi tiết mà không hiển thị popup xác nhận. |

## **Rules**

### **Q****uy tắc tính Tồn kho của sản phẩm và theo từng lô của sản phẩm tinhcosan**

**A. Tại màn hình Tạo mới**

1. Hệ thống thực kiểm tra Kho và Kênh bán hàng trong kho và thực hiện lấy tồn theo Kho và Kênh tương ứng.
2. Hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập để thực hiện lấy tổng số lượng có sẵn theo lô tại thời điểm ngày chuyển kho.

Ví dụ:

1. Hệ thống thực kiểm tra Kho và Kênh bán hàng trong kho và thực hiện lấy tồn theo Kho và Kênh tương ứng.

VD: Sản phẩm SKU01 có các thông tin tồn kho gồm:

| Kho | Kênh bán hàng | Tồn kho | Tạm giữ | Có sẵn | Thông ngày nhập và lô | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ngày nhập | Số lượng nhập | Số lô | Hạn sử dụng | Tồn kho | Tạm giữ | Có sẵn |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 10 | 0 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |
| Hàng bán | MT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |
| Khuyến mãi | GT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |

Người dùng khi tạo phiếu chuyển kho thực hiện chọn Kho = **Hàng bán** và Kênh bán hàng = **GT** → Hệ thống sẽ lấy kho theo thông tin Kho và Kênh bán hàng được chọn:

| Kho | Kênh bán hàng | Tồn kho | Tạm giữ | Có sẵn | Thông ngày nhập và lô | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ngày nhập | Số lượng nhập | Số lô | Hạn sử dụng | Tồn kho | Tạm giữ | Có sẵn |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 10 | 0 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

2. Hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập để thực hiện lấy tổng số lượng có sẵn theo lô tại thời điểm ngày chuyển kho.  
VD: Tiếp nối ví dụ ở trên, sử dụng SKU01 để đặt hàng:

* + **Ví dụ 1**: Giả sử chọn ngày chuyển kho = 10/11, hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm:

| Kho | Kênh bán hàng | Tồn kho | Tạm giữ | Có sẵn | Thông ngày nhập và lô | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ngày nhập | Số lượng nhập | Số lô | Hạn sử dụng | Tồn kho | Tạm giữ | Có sẵn |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 10 | 0 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

→ Lấy được các thông tin lô nhập vào các ngày 1/11, 2/11, 3/11, 5/11, 9/11 và lấy được tổng số lượng Có sẵn của sản phẩm và từng lô tại thời điểm ngày 10/11 là:

* + - Tổng số lượng Có sẵn của sản phẩm là 85
    - Số lượng Có sẵn của LO01 là 25
    - Số lượng Có sẵn của LO02 là 10
    - Số lượng Có sẵn của LO03 là 20
    - Số lượng Có sẵn của LO04 là 30
* + **Ví dụ 2**: Ví dụ ở VD1 chưa thực hiện book kho, người dùng chọn lại ngày chuyển kho = 4/11, hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm:

| Kho | Kênh bán hàng | Tồn kho | Tạm giữ | Có sẵn | Thông ngày nhập và lô | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ngày nhập | Số lượng nhập | Số lô | Hạn sử dụng | Tồn kho | Tạm giữ | Có sẵn |
| Hàng bán | GT | 35 | 0 | 35 | 1/11 | 10 | LO01 | 7/12 | 10 | 0 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |

→ Lấy được các thông tin lô nhập đến ngày 4/11 thì chỉ lấy được các ngày nhập là 1/11,  2/11 và 3/11 → Lây được tổng số lượng Có sẵn của sản phẩm và từng lô tại thời điểm ngày 4/11 là:

* + - Tổng số lượng Có sẵn của sản phẩm là 35
    - Số lượng Có sẵn của LO01 là 25
    - Số lượng Có sẵn của LO02 là 10
* + **Ví dụ 3**: Ví dụ ở VD1 đã thực hiện book đi số lượng 25 sản phẩm, theo quy tắc book kho (*trừ số lượng Có sẵn của lô có Hạn sử dụng gần nhất để trừ dần cho đến khi đáp ứng đủ số lượng yêu cầu, nếu một lô không đủ đáp ứng số lượng yêu cầu, hệ thống sẽ tiếp tục lấy từ lô kế tiếp có Hạn sử dụng gần nhất để trừ tiếp*), hệ thống lấy ngày sắp hết hạn 3/12 gần nhất để trừ trước và trừ với số lượng hết 20 thì thực hiện lấy lô kế tiếp có Hạn sử dụng gần nhất là 4/12 để trừ tiếp số lượng 5 → Lúc này tồn kho của SKU01 sẽ cập nhật thành:

| Kho | Kênh bán hàng | Tồn kho | Tạm giữ | Có sẵn | Thông ngày nhập và lô | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ngày nhập | Số lượng nhập | Số lô | Hạn sử dụng | Tồn kho | Tạm giữ | Có sẵn |
| Hàng bán | GT | 85 | 25 | 60 | 1/11 | 10 | LO01 | 7/12 | 10 | 0 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 5 | 5 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 20 | 0 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

Giả sử chọn ngày chuyển kho = 4/11,hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm ngày 1/11, 2/11, 3/11 → Lấy được tổng số lượng Có sẵn của sản phẩm và từng lô tại thời điểm ngày 4/11 là:

* + - Tổng số lượng Có sẵn của sản phẩm là 30
    - Số lượng Có sẵn của LO01 là 25
    - Số lượng Có sẵn của LO02 là 5
* + **Ví dụ 4**: Ví dụ ở VD3 đã thực hiện book đi số lượng 15 sản phẩm, theo quy tắc book kho, hệ thống lấy ngày sắp hết hạn 4/12 gần nhất để trừ trước và trừ với số lượng hết 5 thì thực hiện lấy lô kế tiếp có Hạn sử dụng gần nhất là 7/12, lúc này phát hiện có LO01 có 2 ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước (1/11) để trừ tiếp số lượng 10 → Lúc này tồn kho của SKU01 sẽ cập nhật thành:

| Kho | Kênh bán hàng | Tồn kho | Tạm giữ | Có sẵn | Thông ngày nhập và lô | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ngày nhập | Số lượng nhập | Số lô | Hạn sử dụng | Tồn kho | Tạm giữ | Có sẵn |
| Hàng bán | GT | 85 | 40 | 45 | 1/11 | 10 | LO01 | 7/12 | 10 | 10 | 0 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 10 | 0 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 20 | 0 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

Giả sử chọn ngày chuyển kho = 2/11, hệ thống sẽ dựa vào ngày đặt hệ thống sẽ dựa vào ngày chuyển kho và ngày nhập từ đầu đến ngày chuyển kho và lấy được thông tin kho gồm ngày 1/11, 2/11 → Lấy được tổng số lượng Có sẵn của sản phẩm và từng lô tại thời điểm ngày 2/11 là:

* + - Tổng số lượng Có sẵn của sản phẩm là 0
    - Số lượng Có sẵn của LO01 là 0
    - Số lượng Có sẵn của LO02 là 0

**B. Tại màn hình Chỉnh sửa**

1. Hệ thống thực hiện tính **Có sẵn/Tồn kho từng lô của sản phẩm**như tại màn hình Tạo mới
2. Hệ thống thực hiện cộng số lượng có sẵn/tồn kho từng lô của sản phẩm tính được ở bước 1 với số lượng "Tạm giữ" từng lô, cụ thể:
   * Cộng số lượng Có sẵn tính được ở bước 1 với số lượng "Tạm giữ" của sản phẩm trong phiếu chuyển kho
   * Cộng số lượng Tồn kho từng lô tính được ở bước 1 với số lượng "Tạm giữ" từng lô tương ứng trong phiếu chuyển kho

Ví dụ:

Giả sử người dùng tạo phiếu chuyển kho TW000001 với những thông tin sản phẩm như sau:

| Mã SKU | Tên sản phẩm | Đơn vị tính | Số lượng | Thông tin lô | | |
| --- | --- | --- | --- | --- | --- | --- |
| Số lượng | Số lô | Hạn sử dụng |
| SKU001 | Sản phẩm 01 | lon | 20 | 5 | LO01 | 7/12 |
| 10 | LO02 | 4/12 |
| 5 | LO03 | 3/12 |

1. Hệ thống thực hiện tính **Có sẵn/Tồn kho từng lô của sản phẩm**như tại màn hình Tạo mới

Giả sử tồn kho của SKU01 tại thời điểm chỉnh sửa phiếu chuyển kho như sau:

| Kho | Kênh bán hàng | Tồn kho | Tạm giữ | Có sẵn | Thông ngày nhập và lô | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Ngày nhập | Số lượng nhập | Số lô | Hạn sử dụng | Tồn kho | Tạm giữ | Có sẵn |
| Hàng bán | GT | 85 | 0 | 45 | 1/11 | 10 | LO01 | 7/12 | 10 | 10 | 0 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 10 | 0 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 20 | 0 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

→ Lấy được tổng số lượng Có sẵn của sản phẩm và từng lô tại thời điểm chỉnh sửa phiếu chuyển kho là:

* + - Tổng số lượng Có sẵn của sản phẩm là 45
    - Số lượng Có sẵn của LO01 là 15
    - Số lượng Có sẵn của LO02 là 0
    - Số lượng Có sẵn của LO03 là 0

2. Hệ thống thực hiện cộng số lượng có sẵn/tồn kho từng lô của sản phẩm tính được ở bước 1 với số lượng "Tạm giữ" từng lô, cụ thể:

* + Cộng số lượng Có sẵn tính được ở bước 1 với số lượng "Tạm giữ" của sản phẩm trong phiếu chuyển kho
* → Trường "Có sẵn" của sản phẩm trên phiếu chuyển kho hiển thị giá trị là:  45 +  20 = 65
  + Cộng số lượng Tồn kho từng lô tính được ở bước 1 với số lượng "Tạm giữ" từng lô tương ứng trong phiếu chuyển kho

→ Trường "Tồn kho" từng lô trên phiếu chuyển kho hiển thị giá trị là:

* + - Lô LO01: 15 + 5 = 20
    - Lô LO02: 0 + 10 = 10
    - Lô LO03: 0 + 5 = 5

Như vậy, thông tin danh sách sản phẩm trên màn hình Chỉnh sửa phiếu chuyển kho hiển thị như sau:

| Mã SKU | Tên sản phẩm | Đơn vị tính | Số lượng | Có sẵn | Thông tin lô | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Số lượng | Tồn kho | Số lô | Hạn sử dụng |
| SKU001 | Sản phẩm 01 | lon | 20 | **65** | 5 | **20** | LO01 | 7/12 |
| 10 | **10** | LO02 | 4/12 |
| 5 | **5** | LO03 | 3/12 |

### **Quy tắc cập nhật tồn kho sau khi tạo phiếu chuyển kho tonkhosautao**

Chỉ áp dụng nếu loại phiếu = " Nhập kho vansales"

Thực hiện cập nhật số lượng trong kho như sau:

* Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu chuyển kho theo từng lô. Nếu lô có nhiều ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước để trừ trước. Công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong phiếu nhập kho
* Thực hiện cộng số lượng tạm giữ tương ứng với số lượng đã được nhập từ phiếu chuyển kho. Công thức: Tạm giữ = Tạm giữ hiện tại + Số lượng chuyển kho.

**Quy tắc cập nhật tồn kho khi duyệt phiếu chuyển kho tonkhosauduyet**

Nếu loại phiếu = "Nhập kho vansales" → Sau khi duyệt phiếu chuyển kho thành công, hệ thống thực hiện cập nhật tồn kho theo quy tắc sau:

* Trừ số lượng "Tồn kho" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu chuyển kho
* Trừ số lượng "Tạm giữ" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu chuyển kho

Nếu loại phiếu = "Trả kho vansales" → Sau khi duyệt phiếu chuyển kho thành công, hệ thống thực hiện cập nhật tồn kho theo quy tắc sau:

* Cộng số lượng sản phẩm vào "Tồn kho" và "Có sẵn" theo từng lô tương ứng