none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-744  Finviet - Management Systemissuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolutionkey,summary,type,created,updated,due,assignee,reporter,priority,status,resolution70327f0f-d77b-320c-9607-8ab3659b722fECD-745  Finviet - Management Systemissuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolutionkey,summary,type,created,updated,due,assignee,reporter,priority,status,resolution70327f0f-d77b-320c-9607-8ab3659b722fECD-746  Finviet - Management Systemissuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolutionkey,summary,type,created,updated,due,assignee,reporter,priority,status,resolution70327f0f-d77b-320c-9607-8ab3659b722fECD-747  Finviet - Management Systemissuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolutionkey,summary,type,created,updated,due,assignee,reporter,priority,status,resolution70327f0f-d77b-320c-9607-8ab3659b722fECD-748  Finviet - Management Systemissuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolutionkey,summary,type,created,updated,due,assignee,reporter,priority,status,resolution70327f0f-d77b-320c-9607-8ab3659b722fECD-749 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

## **Requirements**

|  |  |
| --- | --- |
| Target release | Release name or number |
| US |  |
| Version | trueYellow1.0.2  trueRedV1.1.0: Thêm thông tin lý do trả hàng và ghi chú cho đơn trả hàng lẻ |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Lịch sử tài liệu**

3

## **Description**

Tính năng này cho phép NPP tạo phiếu trả hàng cho Công ty (HO)

### Workflow

## **Requirements**

### Xem danh sách Điểm bán trả lẻ

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn | N/A | Bán hàng → Điểm bán trả hàng |
| Màn hình danh sách phiếu trả hàng lẻ |  | Màn hình danh sách điểm bán trả lẻ hiển thị tất cả danh sách phiếu trả hàng lẻ của NPP, bao gồm các thông tin:   * Thông tin tìm kiếm:   + - Tìm kiếm theo Mã trả hàng: tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Trạng thái:        * Gồm các trạng thái {Khởi tạo/Đã duyệt/Đã hủy}.       * Mặc định trống       * Cho phép chọn nhiều trạng thái.       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Điểm bán:        * Khi nhấn vào sẽ load hết danh sách điểm bán đang còn ở trạng thái hoạt động thuộc NPP, danh sách hiển thị với các thông tin gồm Mã điểm bán - Tên điểm bán.       * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên điểm bán.       * Cho phép chọn nhiều điểm bán       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.       * Mặc định trống.     - Ngày trả hàng: Cho phép chọn Từ ngày - Đến ngày: mặc định trống     - Tìm kiếm: khi nhấn vào sẽ tìm kiếm dữ liệu theo các thông tin được nhập/chọn. * Tạo mới: khi nhấn vào sẽ hiển thị Màn hình tạo mới phiếu trả hàng lẻ * Danh sách điểm bán trả hàng hiển thị danh sách theo điều kiện tìm kiếm, sắp xếp theo theo ngày tạo mới nhất trước, có phân trang theo {10, 50, 100}, có các thông tin gồm:    + - Mã trả hàng: khi nhấn vào hiển thị màn hình xem chi tiết phiếu trả hàng lẻ     - Ngày trả hàng: hiển thị theo format dd-mm-yyyy     - Điểm bán trả hàng: Hiển thị theo format Mã điểm bán - Tên điểm bán     - Trạng thái: Khởi tạo/Đã duyệt/Đã hủy     - Ngày tạo: theo định dạng dd-mm-yyyy h24:mi:ss     - Ngày cập nhật: theo định dạng dd-mm-yyyy h24:mi:ss     - Người tạo: hiển thị username của người tạo     - Người cập nhật: hiển thị username của người cập nhật gần nhất     - Button Chỉnh sửa:  Chỉ hiển thị khi ở trạng thái Khởi tạo, khi nhấn vào sẽ hiển thị màn hình Chỉnh sửa phiếu trả hàng lẻ     - Button Duyệt: Chỉ hiển thị khi ở trạng thái Khởi tạo     - Button Hủy: Chỉ hiển thị khi ở trạng thái Khởi tạo |

### Tạo mới phiếu trả hàng lẻ

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
|  |  | * Ngày trả hàng [datepicker]:   + Bắt buộc nhập   + Mặc định autofill ngày hiện tại, cho phép chỉnh sửa  * Điểm bán trả hàng [dropdown]   + Bắt buộc chọn   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của trường Mã - Tên điểm bán của điểm bán thuộc NPP tạo phiếu   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã/Tên điểm bán   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Kho [dropdown]   + Bắt buộc chọn   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của  trường Kho hệ thống trong Core Kho DMS   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kho hệ thống   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Kênh [dropdown]   + Bắt buộc chọn.   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của trường Tên kênh bán hàng tại màn hình chức năng Kênh bán hàng   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kênh bán hàng   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu.  * trueRedV1.1.0 Lý do trả hàng   + Bắt buộc chọn.   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu từ màn hình [Danh sách dữ liệu chung - Lý do trả đơn bán hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) + Lý do "Khác"     - Khi người dùng chọn lý do Khác, ô nhập lý do sẽ hiển thị bên cạnh, người dùng bắt buộc phải nhập thêm lý do (text, 300) bằng chữ trong ô lý do     - Ô nhập lý do chỉ hiển thị khi người dùng chọn lý do "Khác"     - Khi nhấn lại vào trường lý do sẽ xem được thông tin Lý do khác đã nhập       * Nếu chọn qua các lý do còn lại, chưa nhấn Lưu, khi chọn lại lý do Khác vẫn thấy được nội dung trong ô "Nhập lý do khác"       * Nếu chọn qua lý do còn lại, nhấn Lưu, sẽ xóa thông tin nội dung trong ô "Nhập lý do khác"   + Cho phép nhập dữ liệu để tìm kiếm like thông tin lý do * trueRedV1.1.0: Ghi chú:   + Nhập ghi chú cho đơn hàng   + Không bắt buộc   + Tối đa 300 ký tự. * Danh sách sản phẩm, bắt buộc phải có thông tin sản phẩm, có các thông tin gồm:     + Mã SKU:     - Hiển thị field cho phép nhập để tìm kiếm sản phẩm     - Cho phép tìm kiếm thông tin sản phẩm like theo Mã sản phẩm, Tên sản phẩm → Danh sách sản phẩm sẽ load ra danh sách sản phẩm có trong kho và kênh đã được chọn và chưa được đưa vào danh sách sản phẩm, hiển thị các thông tin trên danh sách gồm Mã SKU, Tên sản phẩm, Đơn vị.     - Mặc định trống     - Cho nhập tìm kiếm tối đa 200 ký tự.     - Sản phẩm khi được chọn sẽ tự động dùng thông tin của sản phẩm đó để điền vào các field còn lại trong danh sách sản phẩm gồm: Mã SKU, Tên sản phẩm, Đơn vị tính   + Tên sản phẩm: được tự động điền vào khi có sản phẩm đã được chọn khi thêm sản phẩm vào danh sách.   + Đơn vị tính: được tự động điền vào khi có sản phẩm được chọn khi thêm sản phẩm vào danh sách.      - Nếu sản phẩm có khai báo đơn vị quy đổi thì sẽ cho chọn đơn vị tính với mặc định là đơn vị căn bản được khai khi khai báo sản phẩm.     - Nếu chọn đơn vị tính khác thì giá trị tại trường Số lượng được nhập trước đó sẽ bị reset về số 0.   + Số lượng [textbox]     - Mặc định là 0,     - Chỉ cho phép nhập số.     - Cho phép nhập tối đa 6 ký tự.   + Thông tin lô (bắt buộc phải có lô):      - Khi nhấn vào hiển thị popup khai báo thông tin lô, với các thông tin gồm:       * Số lượng:         + Cho phép nhập tối đa 6 ký tự.         + Chỉ cho nhập ký tự số.       * Số lô:         + Cho phép nhập tối đa 20 ký tự.         + Không cho phép nhập khoảng trắng.         + Nếu có ký tự chữ được nhập sẽ tự động viết in hoa.       * Hạn sử dụng *[datepicker]*:          + Mặc định trống.       * Nút Thêm dòng: Khi nhấn thêm dòng sẽ thêm dòng lô để nhập thông tin. Mặc định khi vào sẽ có sẵn 1 dòng.       * Nút Xóa: Nhấn váo nút -> thực hiện xoá dòng lô       * Nút Hoàn tất: Nhấn vào nút -> hệ thống kiếm tra         + Số lô & hạn sử dụng trên các dòng không được trùng nhau, nếu không báo lỗi dưới dòng lô và hạn sử dụng bị trùng *"Số lô và hạn sử dụng không trùng nhau giữa các dòng."*         + Tổng số lượng được nhập từ các dòng lô phải bằng số lượng sản phẩm được nhập ở màn hình danh sách sản phẩm, nếu không báo lỗi *"Tổng số lượng sản phẩm phải bằng số lượng sản phẩm ngoài danh sách."*       * Nút Đóng: Nhân vào nút -> không thực hiện thay đổi thông tin lô.   + trueRedV1.1.0: Ghi chú     - Nhập ghi chú cho từng dòng sản phẩm     - Không bắt buộc     - Tối đa 100 ký tự   + Nút Xóa: Click vào nút → thực hiện xóa dòng sản phẩm khỏi danh sách   + Nút Thêm sản phẩm: Click vào nút → thêm dòng sản phẩm để cho người dùng thêm vào danh sách sản phẩm. * Nút Đóng: Click vào nút → hệ thống hiển thị popup yêu cầu xác nhận    + Nếu chọn Đồng ý: Hệ thống thực hiện đóng popup tạo mới và trở về màn hình danh sách trả hàng lẻ   + Nếu chọn Hủy: Hệ thống thực hiện đóng popup xác nhận * Nút Lưu: Khi nhấn lưu hệ thống thực hiện kiểm tra và xử lý:   + Kiểm tra:     - Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.     - Nếu có sản phẩm để số lượng là trống hoặc 0 thì thì báo lỗi trên từng line sản phẩm với thông báo*"Vui lòng nhập số lượng cho sản phẩm".*     - **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý:       * + Lưu thông tin tạo mới         + Hệ thống thực hiện tạo dòng dữ liệu phiếu trả hàng lẻ với trạng thái **Khởi tạo**.     - Nếu đóng: thực hiện đóng popup xác nhận. |

### Cập nhật phiếu trả hàng lẻ

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
|  | trueRedV1.1.0 Bổ sung thêm Lý do trả hàng, ghi chú đơn hàng, ghi chú trên từng dòng sản phẩm | Cập nhật phiếu trả hàng lẻ hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:   * + "**Tạo mới phiếu trả hàng lẻ**" đổi thành "**Cập nhật phiếu trả hàng lẻ**".   + Khi cập nhật sẽ cho phép sửa hết toàn bộ thông tin phiếu xuất.   + Thêm nút "**Lưu & Duyệt**": khi click vào nút → hệ thống thực hiện      - **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)     - Cập nhật thông tin phiếu trả hàng     - Chuyển trạng thái trả hàng sang **Đã duyệt**.     - Cập nhật tồn kho theo **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**   + Sau khi nhấn Lưu, hệ thống thực hiện     - Cập nhật thông tin phiếu trả hàng |

### Xem chi tiết phiếu trả hàng lẻ

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng → Điểm bán trả lẻ → Click vào 1 mã trả hàng bất kì tại danh sách trả hàng lẻ |
| Popup Xem chi tiết phiếu trả hàng lẻ |  | Popup xem chi tiết phiếu trả hàng lẻ bao gồm các thông tin sau:   * Ngày trả hàng * Điểm bán trả hàng * Kho * Kênh * Trạng thái: Khởi tạo/Đã duyệt/Đã hủy * trueRedV1.1.0Lý do trả hàng * trueRedV1.1.0 Ghi chú * Danh sách sản phẩm:   + Mã SKU   + Tên sản phẩm   + Số lượng   + Đơn vị tính   + Thông tin lô     - Số lượng     - Số lô     - Hạn sử dụng     - Đóng: Click vào nút → hệ thống thực hiện đóng popup Thông tin lô   + trueRedV1.1.0Ghi chú * Lý do hủy: Chỉ hiển thị nếu trạng thái của phiếu là Đã hủy * Nút Đóng: Nhấn vào nút → hệ thống thực hiện đóng popup xem chi tiết phiếu trả hàng |

### Duyệt phiếu trả hàng lẻ

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> Điểm bán trả lẻ  -> Chọn nút Duyệt một phiếu trả hàng lẻ trên danh sách |
| Duyệt phiếu trả hàng lẻ |  | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu trả hàng lẻ" ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)       * Chuyển trạng thái trả hàng sang **Đã duyệt**.       * Cập nhật tồn kho của NPP theo **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt phiếu trả hàng có trạng thái Khởi tạo |

### Huỷ phiếu trả hàng lẻ

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> Điểm bán trả lẻ  -> Chọn nút Hủy một phiếu trả hàng lẻ trên danh sách |
|  | N/A | Khi nhấn vào hệ thống thực hiện xử lý:   * Xử lý: Hiển thị popup Xác nhận hủy phiếu trả hàng lẻ ngay trên nút:   + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất: Hệ thống thực hiện cập nhật trạng thái phiếu trả hàng lẻ sang **Đã hủy**     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được hủy phiếu trả hàng lẻ có trạng thái Khởi tạo |

## **Rules**

### **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**

Sau khi duyệt phiếu trả hàng lẻ thành công, hệ thống thực hiện kiểm tra thông tin sản phẩm trong phiếu, kho và kênh để thực hiện cập nhật tồn như sau:

1. Hệ thống thực kiểm tra Kho và Kênh trong phiếu trả hàng lẻ và thực hiện cập nhật tồn theo Kho và Kênh tương ứng
2. Hệ thống thực hiện kiểm tra đơn vị tính và thông tin lô của sản phẩm:

* + Nếu **đơn vị tính là đơn vị cơ bản** của sản phẩm: Cộng số lượng sản phẩm trên phiếu trả hàng lẻ vào Tồn kho và Có sẵn theo từng lô tương ứng của sản phẩm
  + Nếu **đơn vị tính là đơn vị quy đổi** của sản phẩm:
    - Bước 1: Thực hiện quy đổi sang đơn vị cơ bản theo công thức: Số lượng theo đơn vị cơ bản = Số lượng theo đơn vị quy đổi \* Giá trị quy đổi
    - Bước 2: Cộng số lượng vừa tính được vào Tồn kho và Có sẵn theo từng lô tương ứng của sản phẩm

Ví dụ:

* Phiếu trả hàng có danh sách sản phẩm như sau:

Kho nhận: Kho hàng bán; Kênh nhận: Kênh MT

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Số lượng** | **Thông tin lô** | | |
| **Số lượng** | **Số lô** | **Hạn sử dụng** |
| SP01 | Sản phẩm A | thùng | 10 | 7 | LO01 | 1-1-2025 |
| 3 | LO02 | 1-2-2025 |

Trong đó: SP A có đơn vị cơ bản là gói, đơn vị quy đổi là thùng - giá trị là 24 (1 thùng = 24 gói)

* Thông tin Kho hàng bán - Kênh MT của NPP hiện tại như sau:

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | |
| **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP01 | Sản phẩm A | lon | 200 | 150 | 50 | LO01 | 1-1-2025 | 100 | 50 | 50 |
|  |  |  |  |  |  | LO02 | 1-2-2025 | 100 | 100 | 0 |

→ Hệ thống thực hiện cập nhật tồn kho theo phiếu trả hàng lẻ trên như sau:

* Kiểm tra đơn vị tính của sản phẩm: Vì *Thùng* là đơn vị quy đổi của sản phẩm nên hệ thống thực hiện
  + Bước 1: Quy đổi sang đơn vị cơ bản:
    - 10 thùng = 10 \* 24 = 240 lon
    - 7 thùng = 7 \* 24 = 168 lon
    - 3 thùng = 3 \* 24 =72 lon

* + Bước 2:
    - Cộng 240 lon vào Tồn kho và Có sẵn của sản phẩm, lúc này Tồn kho = 440, Tạm giữ = 150 và Có sẵn = 290
    - Cộng 168 lon vào Tồn kho và Có sẵn của lô LO01, lúc này Tồn kho = 268, Tạm giữ = 50 và Có sẵn = 218
    - Cộng 72 lon vào Tồn kho và Có sẵn của lô LO02, lúc này Tồn kho = 172, Tạm giữ = 100 và Có sẵn = 72

Tồn kho sau khi cập nhật thành công:

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | |
| **Số lô** | **HSD** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP01 | Sản phẩm A | lon | 440 | 150 | 290 | LO01 | 1-1-2025 | 268 | 50 | 218 |
| LO02 | 1-2-2025 | 172 | 100 | 72 |