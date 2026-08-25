|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-736  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-737  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-738  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-739  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-821  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-820 |
| Version | trueYellow1.0.2 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Lịch sử tài liệu**

3

## **Description**

Tính năng này cho phép NPP tạo phiếu trả hàng cho Công ty (HO)

Note: Chỉ cần test NPP trực thuộc NPP HO

### State Diagram

### Workflow

truetrả hàng công ty false600autotoptrue11621

## **Requirements**

### Xem danh sách phiếu trả hàng Công ty

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn | N/A | Mua hàng → Trả hàng Công ty |
| Màn hình danh sách phiếu trả hàng công ty |  | Màn hình danh sách phiếu trả hàng công ty hiển thị tất cả danh sách phiếu trả hàng công ty của NPP, bao gồm các thông tin:   * Thông tin tìm kiếm:   + - Tìm kiếm theo Mã trả hàng: tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Trạng thái:        * Gồm các trạng thái {Khởi tạo/Chờ duyệt/Đã duyệt/Đã hủy/Đã từ chối}.       * Mặc định chọn Khởi tạo, Chờ duyệt, và Đã duyệt.       * Cho phép chọn nhiều trạng thái.       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Ngày trả hàng: Cho phép chọn Từ ngày - Đến ngày: mặc định trống       * "Đến ngày" chỉ được chọn từ "Từ ngày" trở đi, ví dụ: "Từ ngày" = 12/12/2024 → "Đến ngày" chỉ được chọn từ ngày 12/12 trở đi (13/12, 14/12, ... )     - Tìm kiếm: khi nhấn vào sẽ tìm kiếm dữ liệu theo các thông tin được nhập/chọn. * Tạo mới: khi nhấn vào sẽ hiển thị Màn hình tạo mới phiếu trả hàng Công ty * Danh sách phiếu trả hàng hiển thị danh sách theo điều kiện tìm kiếm, sắp xếp theo theo ngày tạo mới nhất trước, có phân trang theo {10, 50, 100}, có các thông tin gồm:    + - Mã trả hàng: khi nhấn vào hiển thị màn hình xem chi tiết phiếu trả hàng công ty     - Ngày trả hàng     - Trạng thái: Khởi tạo/Chờ duyệt/Đã duyệt/Đã hủy/Đã từ chối     - Ngày tạo: theo định dạng dd-mm-yyyy h24:mi:ss     - Ngày cập nhật: theo định dạng dd-mm-yyyy h24:mi:ss     - Người tạo: hiển thị username của người tạo     - Người cập nhật: hiển thị username của người cập nhật gần nhất     - Button Chỉnh sửa:  Chỉ hiển thị khi ở trạng thái Khởi tạo, khi nhấn vào sẽ hiển thị màn hình Chỉnh sửa phiếu trả hàng công ty     - Button Duyệt: Chỉ hiển thị khi ở trạng thái Khởi tạo     - Button Hủy: Chỉ hiển thị khi ở trạng thái Khởi tạo |

### Tạo mới phiếu trả hàng Công ty

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng → Trả hàng Công ty → Click vào nút Tạo mới tại màn hình Danh sách |
| Popup Tạo mới phiếu trả hàng |  | * Ngày trả hàng [datepicker]:   + Bắt buộc nhập   + Mặc định autofill ngày hiện tại, cho phép chỉnh sửa  * Nhà phân phối trực thuộc [textbox, disabled]:    + Mặc định chọn nhà phân phối cha mà NPP login đang trực thuộc   + Hiển thị theo format: *Mã NPP - Tên NPP* * Kho [dropdown]   + Bắt buộc chọn   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của  trường Kho hệ thống trong Core Kho DMS   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kho hệ thống   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Kênh [dropdown]   + Bắt buộc chọn.   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của trường Tên kênh bán hàng tại màn hình chức năng Kênh bán hàng   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kênh bán hàng   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu.  * Danh sách sản phẩm, bắt buộc phải có thông tin sản phẩm, có các thông tin gồm:     + Mã SKU:     - Hiển thị field cho phép nhập để tìm kiếm sản phẩm     - Cho phép tìm kiếm thông tin sản phẩm like theo Mã sản phẩm, Tên sản phẩm → Danh sách sản phẩm sẽ load ra danh sách sản phẩm có trong kho và kênh đã được chọn và chưa được đưa vào danh sách sản phẩm, hiển thị các thông tin trên danh sách gồm Mã SKU, Tên sản phẩm, Đơn vị.     - Mặc định trống     - Cho nhập tìm kiếm tối đa 200 ký tự.     - Sản phẩm khi được chọn sẽ tự động dùng thông tin của sản phẩm đó để điền vào các field còn lại trong danh sách sản phẩm gồm: Mã SKU, Tên sản phẩm, Đơn vị tính   + Tên sản phẩm: được tự động điền vào khi có sản phẩm đã được chọn khi thêm sản phẩm vào danh sách.   + Đơn vị tính: được tự động điền vào khi có sản phẩm được chọn khi thêm sản phẩm vào danh sách.      - Nếu sản phẩm có khai báo đơn vị quy đổi thì sẽ cho chọn đơn vị tính với mặc định là đơn vị căn bản được khai khi khai báo sản phẩm.     - Nếu chọn đơn vị tính khác thì giá trị tại trường Số lượng được nhập trước đó sẽ bị reset về số 0.   + Số lượng [textbox]     - Mặc định là 0,     - Chỉ cho phép nhập số.     - Cho phép nhập tối đa 6 ký tự.     - Bắt buộc nhỏ hơn hoặc bằng giá trị cột Tồn kho   + Tồn kho: Hiển thị số lượng có sẵn của sản phẩm trong kho, bằng tổng số lượng Tồn kho theo từng lô của sản phẩm được tính theo **Quy tắc tính Tồn kho của sản phẩm**   + Thông tin lô: bắt buộc nhập, Click vào nút → hiển thị popup bao gồm các lô có trong kho & kênh bán hàng được chọn tại trường *Kho* & *Kênh bán hàng*:     - Số lượng *[textbox]*       * Chỉ cho phép nhập số nguyên dương       * Bắt buộc nhỏ hơn hoặc bằng giá trị cột Tồn kho     - Tồn kho : Hiển thị theo **Quy tắc tính tồn kho theo từng lô**     - Số lô     - Hạn sử dụng     - Nút Đóng: Click vào nút → hệ thống thực hiện đóng popup thông tin lô     - Nút Hoàn tất: Click vào nút → hệ thống thực hiện kiểm tra       * Tổng số lượng được nhập từ các dòng lô phải bằng số lượng sản phẩm được nhập ở màn hình danh sách sản phẩm, nếu không báo lỗi *"Tổng số lượng sản phẩm phải bằng số lượng sản phẩm ngoài danh sách."*       * Nếu số lượng lớn hơn tồn kho, báo lỗi: *"Số lượng không được lớn hơn Tồn kho"*   + Nút Xóa: Click vào nút → thực hiện xóa dòng sản phẩm khỏi danh sách   + Nút Thêm sản phẩm: Click vào nút → thêm dòng sản phẩm để cho người dùng thêm vào danh sách sản phẩm. * Nút Đóng: Click vào nút → hệ thống hiển thị popup yêu cầu xác nhận    + Nếu chọn Đồng ý: Hệ thống thực hiện đóng popup tạo mới và trở về màn hình danh sách trả hàng công ty   + Nếu chọn Hủy: Hệ thống thực hiện đóng popup xác nhận * Nút Lưu: Khi nhấn lưu hệ thống thực hiện kiểm tra và xử lý:   + Kiểm tra:     - Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.     - Thực hiên tính lại cột *Tồn kho* trong Thông tin lô theo **Quy tắc tính tồn kho theo từng lô,** nếu số lượng lớn hơn tồn kho mới, báo lỗi: *"Số lượng từng lô không được lớn hơn Tồn kho".*     - Nếu số lượng của sản phẩm tại danh sách sản phẩm lớn hơn giá trị tại cột "Tồn kho" tương ứng,, báo lỗi: *"Số lượng không được lớn hơn Tồn kho"*     - Nếu có sản phẩm để số lượng là trống hoặc 0 thì thì báo lỗi trên từng line sản phẩm với thông báo *"Vui lòng nhập số lượng cho sản phẩm".*     - **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý:       * + Hệ thống thực hiện tạo dòng dữ liệu phiếu trả hàng công ty với trạng thái **Khởi tạo**.         + Thực hiện cập nhật tồn kho theo **Quy tắc cập nhật tồn kho sau khi tạo phiếu trả hàng**.         + Tạo mã trả hàng với chuỗi GR + 6 ký tự số tăng dần. VD: GR000001.     - Nếu đóng: thực hiện đóng popup xác nhận. |

### Cập nhật phiếu trả hàng công ty

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng → Trả hàng Công ty → Click vào ,à 1 mã trả hàng bất kì tại danh sách Trả hàng Công ty |
| Popup Chỉnh sửa phiếu trả hàng |  | Cập nhật phiếu trả hàng công ty hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:   * + "**Tạo mới phiếu trả hàng công ty**" đổi thành "**Cập nhật phiếu trả hàng công ty**".   + Khi cập nhật sẽ cho phép sửa hết toàn bộ thông tin phiếu trả hàng.   + Thêm nút "**Lưu & Duyệt**": khi click vào nút → hệ thống thực hiện      - Cập nhật thông tin phiếu trả hàng     - Chuyển trạng thái đơn hàng sang **Chờ duyệt**.     - Hiển thị thông tin phiếu trả hàng công ty vừa được duyệt tại danh sách trả hàng công ty của NPP trực thuộc     - **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)   + Sau khi nhấn Lưu, hệ thống thực hiện cập nhật lại tồn kho theo các bước     1. Thực hiện trả lại số lượng Tạm giữ.     2. Tính lại tồn theo **Quy tắc cập nhật tồn kho sau khi tạo phiếu trả hàng**   **Lưu ý:** Chỉ được duyệt đơn hàng có trạng thái **Khởi tạo** |

### Xem chi tiết phiếu trả hàng công ty

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
|  | Đường dẫn |  | Mua hàng → Trả hàng Công ty → Click vào 1 mã trả hàng bất kì tại danh sách Trả hàng Công ty |
| 1 | Popup Xem chi tiết phiếu trả hàng công ty |  | Popup xem chi tiết phiếu trả hàng công ty bao gồm các thông tin sau:   * Ngày trả hàng * Nhà phân phối * Kho * Kênh * Trạng thái: Khởi tạo/Chờ duyệt/Đã duyệt/Đã từ chối/Đã hủy * Lý do hủy: Chỉ hiển thị nếu trạng thái của phiếu là Đã hủy * Lý do từ chối: Chỉ hiển thị nếu trạng thái của phiếu là Đã từ chối * Danh sách sản phẩm bao gồm   + Mã SKU   + Tên sản phẩm   + Số lượng   + Có sẵn   + Đơn vị tính   + Thông tin lô: Click vào icon Xem → hiển thị popup Thông tin lô bao gồm:     - Số lượng     - Số lô     - Hạn sử dụng     - Nút Đóng: Click vào nút → thực hiện đóng popup Thông tin lô * Nút Đóng: Nhấn vào nút → hệ thống thực hiện đóng popup xem chi tiết phiếu trả hàng |

### Duyệt phiếu trả hàng công ty

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> Trả hàng công ty  -> Chọn nút Duyệt một phiếu trả hàng công ty trên danh sách |
| Duyệt phiếu trả hàng công ty |  | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu trả hàng công ty" ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)       * Cập nhật thông tin phiếu trả hàng       * Chuyển trạng thái trả hàng sang **Chờ duyệt**.       * Hiển thị thông tin phiếu trả hàng công ty vừa được duyệt tại danh sách trả hàng công ty của NPP trực thuộc     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt phiếu trả hàng có trạng thái Khởi tạo |

### Huỷ phiếu trả hàng công ty

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> trả hàng công ty  -> Chọn nút Hủy một phiếu trả hàng công ty trên danh sách |
|  | N/A | Khi nhấn vào hệ thống thực hiện xử lý:   * Xử lý: Hiển thị popup Xác nhận hủy phiếu trả hàng công ty ngay trên nút:   + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất: Hệ thống thực hiện cập nhật trạng thái phiếu trả hàng công ty sang **Đã hủy**     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được hủy phiếu trả hàng công ty có trạng thái Khởi tạo |

## **Rules**

### **Q****uy tắc tính Tồn kho của sản phẩm và theo từng lô của sản phẩm tinhtonkhotrahang**

**A. Tại màn hình Tạo mới**

1. Hệ thống thực kiểm tra Kho và Kênh bán hàng trong kho và thực hiện lấy tồn theo Kho và Kênh tương ứng.
2. Hệ thống sẽ dựa vào ngày trả hàng và ngày nhập để thực hiện lấy tổng số lượng có sẵn theo lô tại thời điểm ngày trả hàng.
3. Quy đổi số lượng có sẵn từ đơn vị cơ bản sang đơn vị quy đổi được chọn tại trường Đơn vị tính của sản phẩm trên phiếu trả hàng (nếu có)

Ví dụ:

1. Hệ thống thực kiểm tra Kho và Kênh bán hàng trong kho và thực hiện lấy tồn theo Kho và Kênh tương ứng.

VD: Sản phẩm SKU01 có các thông tin tồn kho gồm:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 10 | 0 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |
| Hàng bán | MT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |
| Khuyến mãi | GT | 100 | 0 | 100 | 5/11 | 20 | LO03 | 3/12 | 100 | 0 | 100 |

Người dùng khi tạo phiếu trả hàng thực hiện chọn Kho = **Hàng bán** và Kênh bán hàng = **GT** → Hệ thống sẽ lấy kho theo thông tin Kho và Kênh bán hàng được chọn:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| Hàng bán | GT | 85 | 0 | 85 | 1/11 | 10 | LO01 | 7/12 | 10 | 0 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 0 | 20 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

2. Hệ thống sẽ dựa vào ngày trả hàng và ngày nhập để thực hiện lấy tổng số lượng có sẵn theo lô tại thời điểm ngày trả hàng.  
VD: Tiếp nối ví dụ ở trên, sử dụng SKU01 để đặt hàng:

* + **Ví dụ 1**: Giả sử chọn ngày trả hàng = 10/11, hệ thống sẽ dựa vào ngày trả hàng và ngày nhập từ đầu đến ngày trả hàng và lấy được thông tin kho gồm:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
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
* + **Ví dụ 2**: Ví dụ ở VD1 chưa thực hiện book kho, người dùng chọn lại ngày trả hàng = 4/11, hệ thống sẽ dựa vào ngày trả hàng và ngày nhập từ đầu đến ngày trả hàng và lấy được thông tin kho gồm:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| Hàng bán | GT | 35 | 0 | 35 | 1/11 | 10 | LO01 | 7/12 | 10 | 0 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 0 | 10 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |

→ Lấy được các thông tin lô nhập đến ngày 4/11 thì chỉ lấy được các ngày nhập là 1/11,  2/11 và 3/11 → Lây được tổng số lượng Có sẵn của sản phẩm và từng lô tại thời điểm ngày 4/11 là:

* + - Tổng số lượng Có sẵn của sản phẩm là 35
    - Số lượng Có sẵn của LO01 là 25
    - Số lượng Có sẵn của LO02 là 10
* + **Ví dụ 3**: Ví dụ ở VD1 đã thực hiện book đi số lượng 25 sản phẩm, theo quy tắc book kho (*trừ số lượng Có sẵn của lô có Hạn sử dụng gần nhất để trừ dần cho đến khi đáp ứng đủ số lượng yêu cầu, nếu một lô không đủ đáp ứng số lượng yêu cầu, hệ thống sẽ tiếp tục lấy từ lô kế tiếp có Hạn sử dụng gần nhất để trừ tiếp*), hệ thống lấy ngày sắp hết hạn 3/12 gần nhất để trừ trước và trừ với số lượng hết 20 thì thực hiện lấy lô kế tiếp có Hạn sử dụng gần nhất là 4/12 để trừ tiếp số lượng 5 → Lúc này tồn kho của SKU01 sẽ cập nhật thành:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| Hàng bán | GT | 85 | 25 | 60 | 1/11 | 10 | LO01 | 7/12 | 10 | 0 | 10 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 5 | 5 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 20 | 0 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

Giả sử chọn ngày trả hàng = 4/11,hệ thống sẽ dựa vào ngày trả hàng và ngày nhập từ đầu đến ngày trả hàng và lấy được thông tin kho gồm ngày 1/11, 2/11, 3/11 → Lấy được tổng số lượng Có sẵn của sản phẩm và từng lô tại thời điểm ngày 4/11 là:

* + - Tổng số lượng Có sẵn của sản phẩm là 30
    - Số lượng Có sẵn của LO01 là 25
    - Số lượng Có sẵn của LO02 là 5
* + **Ví dụ 4**: Ví dụ ở VD3 đã thực hiện book đi số lượng 15 sản phẩm, theo quy tắc book kho, hệ thống lấy ngày sắp hết hạn 4/12 gần nhất để trừ trước và trừ với số lượng hết 5 thì thực hiện lấy lô kế tiếp có Hạn sử dụng gần nhất là 7/12, lúc này phát hiện có LO01 có 2 ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước (1/11) để trừ tiếp số lượng 10 → Lúc này tồn kho của SKU01 sẽ cập nhật thành:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| Hàng bán | GT | 85 | 40 | 45 | 1/11 | 10 | LO01 | 7/12 | 10 | 10 | 0 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 10 | 0 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 20 | 0 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

Giả sử chọn ngày trả hàng = 2/11, hệ thống sẽ dựa vào ngày đặt hệ thống sẽ dựa vào ngày trả hàng và ngày nhập từ đầu đến ngày trả hàng và lấy được thông tin kho gồm ngày 1/11, 2/11 → Lấy được tổng số lượng Có sẵn của sản phẩm và từng lô tại thời điểm ngày 2/11 là:

* + - Tổng số lượng Có sẵn của sản phẩm là 0
    - Số lượng Có sẵn của LO01 là 0
    - Số lượng Có sẵn của LO02 là 0

**B. Tại màn hình Chỉnh sửa**

1. Hệ thống thực hiện tính **Có sẵn/Tồn kho từng lô của sản phẩm**như tại màn hình Tạo mới
2. Hệ thống thực hiện cộng số lượng có sẵn/tồn kho từng lô của sản phẩm tính được ở bước 1 với số lượng "Tạm giữ" từng lô, cụ thể:
   * Cộng số lượng Có sẵn tính được ở bước 1 với số lượng "Tạm giữ" của sản phẩm trong phiếu trả hàng
   * Cộng số lượng Tồn kho từng lô tính được ở bước 1 với số lượng "Tạm giữ" từng lô tương ứng trong phiếu trả hàng

Ví dụ:

Giả sử người dùng tạo phiếu trả hàng TW000001 với những thông tin sản phẩm như sau:

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Số lượng** | **Thông tin lô** | | |
| **Số lượng** | **Số lô** | **Hạn sử dụng** |
| SKU001 | Sản phẩm 01 | lon | 20 | 5 | LO01 | 7/12 |
| 10 | LO02 | 4/12 |
| 5 | LO03 | 3/12 |

1. Hệ thống thực hiện tính **Có sẵn/Tồn kho từng lô của sản phẩm**như tại màn hình Tạo mới

Giả sử tồn kho của SKU01 tại thời điểm chỉnh sửa phiếu trả hàng như sau:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh bán hàng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông ngày nhập và lô** | | | | | | |
| **Ngày nhập** | **Số lượng nhập** | **Số lô** | **Hạn sử dụng** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| Hàng bán | GT | 85 | 0 | 45 | 1/11 | 10 | LO01 | 7/12 | 10 | 10 | 0 |
| 2/11 | 10 | LO02 | 4/12 | 10 | 10 | 0 |
| 3/11 | 15 | LO01 | 7/12 | 15 | 0 | 15 |
| 5/11 | 20 | LO03 | 3/12 | 20 | 20 | 0 |
| 9/11 | 30 | LO04 | 30/12 | 30 | 0 | 30 |

→ Lấy được tổng số lượng Có sẵn của sản phẩm và từng lô tại thời điểm chỉnh sửa phiếu trả hàng là:

* + - Tổng số lượng Có sẵn của sản phẩm là 45
    - Số lượng Có sẵn của LO01 là 15
    - Số lượng Có sẵn của LO02 là 0
    - Số lượng Có sẵn của LO03 là 0

2. Hệ thống thực hiện cộng số lượng có sẵn/tồn kho từng lô của sản phẩm tính được ở bước 1 với số lượng "Tạm giữ" từng lô, cụ thể:

* + Cộng số lượng Có sẵn tính được ở bước 1 với số lượng "Tạm giữ" của sản phẩm trong phiếu trả hàng
* → Trường "Có sẵn" của sản phẩm trên phiếu trả hàng hiển thị giá trị là:  45 +  20 = 65
  + Cộng số lượng Tồn kho từng lô tính được ở bước 1 với số lượng "Tạm giữ" từng lô tương ứng trong phiếu trả hàng

→ Trường "Tồn kho" từng lô trên phiếu trả hàng hiển thị giá trị là:

* + - Lô LO01: 15 + 5 = 20
    - Lô LO02: 0 + 10 = 10
    - Lô LO03: 0 + 5 = 5

Như vậy, thông tin danh sách sản phẩm trên màn hình Chỉnh sửa phiếu trả hàng hiển thị như sau:

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Số lượng** | **Có sẵn** | **Thông tin lô** | | | |
| **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** |
| SKU001 | Sản phẩm 01 | lon | 20 | **65** | 5 | **20** | LO01 | 7/12 |
| 10 | **10** | LO02 | 4/12 |
| 5 | **5** | LO03 | 3/12 |

### **Quy tắc cập nhật tồn kho sau khi tạo phiếu trả hàng tinhtonkhosaukhitaophieu**

Thực hiện cập nhật số lượng trong kho như sau:

* Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu trả hàng. Nếu lô có nhiều ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước để trừ trước. Công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong phiếu nhập kho
* Thực hiện cộng số lượng tạm giữ tương ứng với số lượng đã được nhập từ phiếu xuất kho. Công thức: Tạm giữ = Tạm giữ hiện tại + Số lượng trả hàng.