none

| Target release |  |
| --- | --- |
| US |  |
| Version | 1.0.0  trueRedV1.1.0: Enhance thêm thông tin lý do trả hàng cho chức năng trả hàng |
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
| Version | trueYellow1.0.2  trueRedV1.1.0: Bổ sung thêm trường Lý do trả hàng, nhập lý do trả hàng, ghi chú đơn hàng, ghi chú trên từng dòng sản phẩm |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Lịch sử tài liệu**

3

## **Description**

Tính năng này cho phép NPP tạo phiếu trả hàng nguyên đơn

### Workflow

## **Requirements**

### Xem danh sách phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn | N/A | Bán hàng → Điểm bán trả hàng |
| Màn hình danh sách phiếu trả hàng nguyên đơn |  | Màn hình danh sách điểm bán trả lẻ hiển thị tất cả danh sách phiếu trả hàng nguyên đơn  của NPP, bao gồm các thông tin:   * Thông tin tìm kiếm:   + - Tìm kiếm theo Mã trả hàng: tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Trạng thái:        * Gồm các trạng thái {Khởi tạo/Đã duyệt/Đã hủy}.       * Mặc định trống       * Cho phép chọn nhiều trạng thái.       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Mã đơn hàng trả        * Khi nhấn vào sẽ load hết danh sách đơn hàng thoả các điều kiện sau:         + Là đơn hàng sell-out         + Đơn hàng đã được xuất kho thành công       * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã đơn hàng       * Cho phép chọn nhiều đơn hàng       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.       * Mặc định trống.     - Điểm bán:        * Khi nhấn vào sẽ load hết danh sách điểm bán đang còn ở trạng thái hoạt động thuộc NPP, danh sách hiển thị với các thông tin gồm Mã điểm bán - Tên điểm bán.       * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên điểm bán.       * Cho phép chọn nhiều điểm bán       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.       * Mặc định trống.     - Ngày trả hàng: Cho phép chọn Từ ngày - Đến ngày: mặc định trống     - Tìm kiếm: khi nhấn vào sẽ tìm kiếm dữ liệu theo các thông tin được nhập/chọn. * Tạo mới: khi nhấn vào sẽ hiển thị Màn hình tạo mới phiếu trả hàng nguyên đơn * Danh sách điểm bán trả hàng hiển thị danh sách theo điều kiện tìm kiếm, sắp xếp theo theo ngày tạo mới nhất trước, có phân trang theo {10, 50, 100}, có các thông tin gồm:    + - Mã trả hàng: khi nhấn vào hiển thị màn hình xem chi tiết phiếu trả hàng nguyên đơn     - Ngày trả hàng: hiển thị theo format dd-mm-yyyy     - Mã đơn hàng trả     - Điểm bán trả hàng: Hiển thị theo format Mã điểm bán - Tên điểm bán     - Trạng thái: Khởi tạo/Đã duyệt/Đã hủy     - Ngày tạo: theo định dạng dd-mm-yyyy h24:mi:ss     - Ngày cập nhật: theo định dạng dd-mm-yyyy h24:mi:ss     - Người tạo: hiển thị username của người tạo     - Người cập nhật: hiển thị username của người cập nhật gần nhất     - Button Chỉnh sửa:  Chỉ hiển thị khi ở trạng thái Khởi tạo, khi nhấn vào sẽ hiển thị màn hình Chỉnh sửa phiếu trả hàng nguyên đơn     - Button Duyệt: Chỉ hiển thị khi ở trạng thái Khởi tạo     - Button Hủy: Chỉ hiển thị khi ở trạng thái Khởi tạo |

### Tạo mới phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Thêm thông tin trả hàng |  | * Ngày trả hàng [datepicker]:   + Bắt buộc nhập   + Mặc định autofill ngày hiện tại, cho phép chỉnh sửa  * Đơn hàng trả [dropdown]:    + Bắt buộc chọn.   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của trường Mã đơn hàng thoả các điều kiện:     - Là đơn hàng sell-out của NPP     - Ngày tạo đơn hàng trước/bằng ngày trả hàng được chọn     - Đơn hàng đã được xuất kho thành công     - Không thuộc trong phiếu trả hàng trước đó   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã đơn hàng   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Điểm bán trả hàng [disabled]: Mặc định hiển thị Mã - Tên điểm bán của điểm bán trong đơn hàng được chọn * Kho [disabled]: Mặc định hiển thị Kho tron đơn hàng được chọn * Kênh [disabled]: Mặc định hiển thị Kênh trong đơn hàng được chọn  * trueRedV1.1.0 Lý do trả hàng   + Bắt buộc chọn.   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu từ màn hình Danh sách dữ liệu chung - Lý do trả đơn bán hàng + Lý do "Khác"     - Khi người dùng chọn lý do Khác, ô nhập lý do sẽ hiển thị bên cạnh, người dùng bắt buộc phải nhập thêm lý do (text, 300) bằng chữ trong ô lý do     - Ô nhập lý do chỉ hiển thị khi người dùng chọn lý do "Khác"     - Khi nhấn lại vào trường lý do sẽ xem được thông tin Lý do khác đã nhập       * Nếu chọn qua các lý do còn lại, chưa nhấn Lưu, khi chọn lại lý do Khác vẫn thấy được nội dung trong ô "Nhập lý do khác"       * Nếu chọn qua lý do còn lại, nhấn Lưu, sẽ xóa thông tin nội dung trong ô "Nhập lý do khác"   + Cho phép nhập dữ liệu để tìm kiếm like thông tin lý do * trueRedV1.1.0 Ghi chú:    + Nhập ghi chú cho đơn hàng   + Không bắt buộc   + Tối đa 300 ký tự. * Danh sách sản phẩm bao gồm danh sách sản phẩm có trong đơn hàng trả được chọn, gồm các thông tin gồm:     + Mã SKU:   + Tên sản phẩm   + Số lượng   + Đơn vị tính   + Thông tin lô     - Số lượng     - Số lô     - Hạn sử dụng     - Nút Đóng: Nhân vào nút -> hệ thống thực hiện đóng popup Thông tin lô * Nút Đóng: Click vào nút → hệ thống hiển thị popup yêu cầu xác nhận    + Nếu chọn Đồng ý: Hệ thống thực hiện đóng popup tạo mới và trở về màn hình danh sách trả hàng nguyên đơn   + Nếu chọn Hủy: Hệ thống thực hiện đóng popup xác nhận * Nút Lưu: Khi nhấn lưu hệ thống thực hiện kiểm tra và xử lý:   + Kiểm tra:     - **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)     - Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý:       * + Lưu thông tin tạo mới         + Hệ thống thực hiện tạo dòng dữ liệu phiếu trả hàng nguyên đơn với trạng thái **Khởi tạo**.     - Nếu đóng: thực hiện đóng popup xác nhận. |
| **Xem danh sách khuyến mãi trả sản phẩm** |  | Để thực hiện trả hàng khuyến mãi, người dùng chọn 1 đơn hàng sellout  Nếu đơn hàng trên không áp dụng khuyến mãi tặng sản phẩm → Ẩn section Khuyến mãi  Ngược lại hiển thị section Khuyến mãi gồm danh sách các chương trình khuyến mãi có gói khuyến mãi là Tặng sản phẩm (các chương trình khuyến mãi không có tặng sản phẩm không hiển thị)   | UI | Type | Description | | --- | --- | --- | | Tên chương trình khuyến mãi | Text | Hiển thị tên chương trình khuyến mãi  Tối đa 100 ký tự, nếu dài hơn → hiển thị truncated. Khi hover → hiển thị tooltips đầy đủ nội dung | | Thể lệ chương trình | Icon | Hiển thị icon "i" → khi hover → Hiển thị nội dung thể lệ chương trình khuyến mãi | | Kho xuất hàng khuyến mãi | Input Disabled | Mặc định hiển thị tên kho xuất hàng khuyến mãi  Người dùng chỉ xem, không được thay đổi | | **Table sản phẩm trả thưởng**  Chỉ hiển thị các sản phẩm trả thưởng có số lượng > 0 | | | | Mã sản phẩm | Text | Hiển thị mã SKU | | Tên sản phẩm | Text | Hiển thị tên sản phẩm | | Số lượng | Input Disabled | Hiển thị số lượng sản phẩm trả thưởng | | Đơn vị | Text | Hiển thị đơn vị sản phẩm được chọn khi áp dụng khuyến mãi | | Thông tin lô | Icon | Khi click vào → hiển thị Popup Thông tin lô với :   * Số lượng * Số lô * Hạn sử dụng   Nút "Đóng" → Đóng Popup Thông tin Lô và quay về **Table Sản phẩm trả thưởng** | | Nút "Đóng" | Button | Popup Màn hình xác nhận   * Nhấn "Đóng" → Đóng màn hình xác nhận * Nhấn "Lưu" → Đóng màn hình xác nhận & màn hình Thêm mới → Kết thúc luồng | | Nút "Lưu" | Button | * Thực hiện luồng Tạo phiếu Trả hàng nguyên đơn * Lưu các sản phẩm khuyến mãi trong trả hàng nguyên đơn | |

### Cập nhật phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Cập nhật phiếu trả hàng nguyên đơn | trueRedV1.1.0: Bổ sung thêm trường Lý do trả hàng, nhập lý do trả hàng, ghi chú đơn hàng, ghi chú trên từng dòng sản phẩm | Cập nhật phiếu trả hàng nguyên đơn  hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:   * + "**Tạo mới phiếu trả hàng nguyên đơn** " đổi thành "**Cập nhật phiếu trả hàng nguyên đơn** ".   + Khi đổi lựa chọn đơn hàng trả → hệ thống tự động cập nhật thông tin trong phiếu trả nguyên đơn (bao gồm cả danh sách sản phẩm khuyến mãi).   + Thêm nút "**Lưu & Duyệt**": khi click vào nút → hệ thống thực hiện      - **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)     - Cập nhật thông tin phiếu trả hàng     - Chuyển trạng thái trả hàng sang **Đã duyệt**.     - Cập nhật tồn kho theo **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**   + Sau khi nhấn Lưu, hệ thống thực hiện     - Cập nhật thông tin phiếu trả hàng     - Cập nhật danh sách sản phẩm khuyến mãi trả hàng |
| **Xem danh sách khuyến mãi trả sản phẩm** |  | Tương tự như Mô tả luồng Thêm mới |

### Xem chi tiết phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn | N/A | Mua hàng → Điểm bán trả lẻ → Click vào 1 mã trả hàng bất kì tại danh sách trả hàng nguyên đơn |
| Popup Xem chi tiết phiếu trả hàng nguyên đơn |  | Popup xem chi tiết phiếu trả hàng nguyên đơn  bao gồm các thông tin sau:   * Ngày trả hàng * Đơn hàng trả * Điểm bán trả hàng * Kho * Kênh * trueRedV1.1.0: Lý do trả hàng * trueRedV1.1.0: Ghi chú * Trạng thái: Khởi tạo/Đã duyệt/Đã hủy * Danh sách sản phẩm:   + Mã SKU   + Tên sản phẩm   + Số lượng   + Đơn vị tính   + Thông tin lô     - Số lượng     - Số lô     - Hạn sử dụng   + trueRedV1.1.0 Ghi chú * Lý do hủy: Chỉ hiển thị nếu trạng thái của phiếu là Đã hủy * Nút Đóng: Nhấn vào nút → hệ thống thực hiện đóng popup xem chi tiết phiếu trả hàng |
| Danh sách sản phẩm khuyến mãi trả hàng |  | Tương tự như Mô tả Xem Danh sách sản phẩm khuyến mãi trả hàng trên Luồng Thêm mới |

### Duyệt phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> Điểm bán trả lẻ  -> Chọn nút Duyệt một phiếu trả hàng nguyên đơn  trên danh sách |
| Duyệt phiếu trả hàng nguyên đơn | N/A | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu trả hàng nguyên đơn " ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)       * Chuyển trạng thái trả hàng sang **Đã duyệt**.       * Cập nhật tồn kho của NPP theo **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**       * **Thực hiện Revert Promotion tương ứng với đơn Sellout đã trả hàng**     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt phiếu trả hàng có trạng thái Khởi tạo |

### Huỷ phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> Điểm bán trả lẻ  -> Chọn nút Hủy một phiếu trả hàng nguyên đơn  trên danh sách |
|  | N/A | Khi nhấn vào hệ thống thực hiện xử lý:   * Xử lý: Hiển thị popup Xác nhận hủy phiếu trả hàng nguyên đơn  ngay trên nút:   + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất: Hệ thống thực hiện cập nhật trạng thái phiếu trả hàng nguyên đơn  sang **Đã hủy**     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được hủy phiếu trả hàng nguyên đơn  có trạng thái Khởi tạo |

## **Rules**

### **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**

Sau khi duyệt phiếu trả hàng lẻ thành công, hệ thống thực hiện kiểm tra thông tin sản phẩm trong phiếu, kho và kênh để thực hiện cập nhật tồn như sau:

1. Hệ thống thực kiểm tra Kho và Kênh trong phiếu trả hàng lẻ và thực hiện cập nhật tồn theo Kho và Kênh tương ứng, ngày nhập kho = ngày trả hàng được ghi nhận trên phiếu
2. Hệ thống thực hiện kiểm tra đơn vị tính và thông tin lô của sản phẩm:

* + Nếu **đơn vị tính là đơn vị cơ bản** của sản phẩm: Cộng số lượng sản phẩm trên phiếu trả hàng lẻ vào Tồn kho và Có sẵn theo từng lô tương ứng của sản phẩm
  + Nếu **đơn vị tính là đơn vị quy đổi** của sản phẩm:
    - Bước 1: Thực hiện quy đổi sang đơn vị cơ bản theo công thức: Số lượng theo đơn vị cơ bản = Số lượng theo đơn vị quy đổi \* Giá trị quy đổi
    - Bước 2: Cộng số lượng vừa tính được vào Tồn kho và Có sẵn theo từng lô tương ứng của sản phẩm

Ví dụ:

* Phiếu trả hàng nguyên đơn có danh sách sản phẩm như sau:

Kho nhận: Kho hàng bán; Kênh nhận: Kênh MT

Ngày trả hàng: 26/12/2024

| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Số lượng** | **Thông tin lô** | | |
| --- | --- | --- | --- | --- | --- | --- |
| **Số lượng** | **Số lô** | **Hạn sử dụng** |
| SP01 | Sản phẩm A | thùng | 10 | 7 | LO01 | 1-1-2025 |
| 3 | LO02 | 1-2-2025 |

Trong đó: SP A có đơn vị cơ bản là gói, đơn vị quy đổi là thùng - giá trị là 24 (1 thùng = 24 gói)

* Thông tin Kho hàng bán - Kênh MT của NPP hiện tại như sau:

| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Số lô** | **Hạn sử dụng** | **Ngày nhập** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP01 | Sản phẩm A | lon | 200 | 150 | 50 | LO01 | 1-1-2025 | 20-12-2024 | 50 | 20 | 30 |
| 22-12-2024 | 50 | 30 | 20 |
| LO02 | 1-2-2025 | 23-12-2024 | 100 | 100 | 0 |

→ Hệ thống thực hiện cập nhật tồn kho theo phiếu trả hàng lẻ trên như sau:

* Kiểm tra đơn vị tính của sản phẩm: Vì *Thùng* là đơn vị quy đổi của sản phẩm nên hệ thống thực hiện
  + Bước 1: Quy đổi sang đơn vị cơ bản:
    - 10 thùng = 10 \* 24 = 240 lon
    - 7 thùng = 7 \* 24 = 168 lon
    - 3 thùng = 3 \* 24 =72 lon

* + Bước 2:
    - Cộng 240 lon vào Tồn kho và Có sẵn của sản phẩm với ngày nhập là 26/12/2024
    - Cộng 168 lon vào Tồn kho và Có sẵn của lô LO01 với ngày nhập là 26/12/2024
    - Cộng 72 lon vào Tồn kho và Có sẵn của lô LO02 với ngày nhập là 26/12/2024

Tồn kho sau khi cập nhật thành công:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | | |
| **Số lô** | **Hạn sử dụng** | **Ngày nhập** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP01 | Sản phẩm A | lon | 440 | 150 | 290 | LO01 | 1-1-2025 | 20-12-2024 | 50 | 20 | 30 |
| 22-12-2024 | 50 | 30 | 20 |
| **26-12-2024** | **168** | **0** | **168** |
| LO02 | 1-2-2025 | 23-12-2024 | 100 | 100 | 0 |
| **26-12-2024** | **72** | **0** | **72** |

/

| Target release |  |
| --- | --- |
| US |  |
| Version | 1.0.0  trueRedV1.1.0: Enhance thêm thông tin lý do trả hàng cho chức năng trả hàng |
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
| Version | trueYellow1.0.2  trueRedV1.1.0: Bổ sung thêm trường Lý do trả hàng, nhập lý do trả hàng, ghi chú đơn hàng, ghi chú trên từng dòng sản phẩm |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Lịch sử tài liệu**

3

## **Description**

Tính năng này cho phép NPP tạo phiếu trả hàng nguyên đơn

### Workflow

## **Requirements**

### Xem danh sách phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn | N/A | Bán hàng → Điểm bán trả hàng |
| Màn hình danh sách phiếu trả hàng nguyên đơn |  | Màn hình danh sách điểm bán trả lẻ hiển thị tất cả danh sách phiếu trả hàng nguyên đơn  của NPP, bao gồm các thông tin:   * Thông tin tìm kiếm:   + - Tìm kiếm theo Mã trả hàng: tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Trạng thái:        * Gồm các trạng thái {Khởi tạo/Đã duyệt/Đã hủy}.       * Mặc định trống       * Cho phép chọn nhiều trạng thái.       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Mã đơn hàng trả        * Khi nhấn vào sẽ load hết danh sách đơn hàng thoả các điều kiện sau:         + Là đơn hàng sell-out         + Đơn hàng trên phiếu trả hàng         + Nghĩa là những đơn hàng có trên phiếu trả hàng sẽ được load ở selectbox này.       * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã đơn hàng       * Cho phép chọn nhiều đơn hàng       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.       * Mặc định trống.     - Điểm bán:        * Khi nhấn vào sẽ load hết danh sách điểm bán đang còn ở trạng thái hoạt động thuộc NPP, danh sách hiển thị với các thông tin gồm Mã điểm bán - Tên điểm bán.       * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên điểm bán.       * Cho phép chọn nhiều điểm bán       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.       * Mặc định trống.     - Ngày trả hàng: Cho phép chọn Từ ngày - Đến ngày: mặc định trống     - Tìm kiếm: khi nhấn vào sẽ tìm kiếm dữ liệu theo các thông tin được nhập/chọn. * Tạo mới: khi nhấn vào sẽ hiển thị Màn hình tạo mới phiếu trả hàng nguyên đơn * Danh sách điểm bán trả hàng hiển thị danh sách theo điều kiện tìm kiếm, sắp xếp theo theo ngày tạo mới nhất trước, có phân trang theo {10, 50, 100}, có các thông tin gồm:    + - Mã trả hàng: khi nhấn vào hiển thị màn hình xem chi tiết phiếu trả hàng nguyên đơn     - Ngày trả hàng: hiển thị theo format dd-mm-yyyy     - Mã đơn hàng trả     - Điểm bán trả hàng: Hiển thị theo format Mã điểm bán - Tên điểm bán     - Trạng thái: Khởi tạo/Đã duyệt/Đã hủy     - Ngày tạo: theo định dạng dd-mm-yyyy h24:mi:ss     - Ngày cập nhật: theo định dạng dd-mm-yyyy h24:mi:ss     - Người tạo: hiển thị username của người tạo     - Người cập nhật: hiển thị username của người cập nhật gần nhất     - Button Chỉnh sửa:  Chỉ hiển thị khi ở trạng thái Khởi tạo, khi nhấn vào sẽ hiển thị màn hình Chỉnh sửa phiếu trả hàng nguyên đơn     - Button Duyệt: Chỉ hiển thị khi ở trạng thái Khởi tạo     - Button Hủy: Chỉ hiển thị khi ở trạng thái Khởi tạo |

### Tạo mới phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Thêm thông tin trả hàng |  | * Ngày trả hàng [datepicker]:   + Bắt buộc nhập   + Mặc định autofill ngày hiện tại, cho phép chỉnh sửa  * Đơn hàng trả [dropdown]:    + Bắt buộc chọn.   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu của trường Mã đơn hàng thoả các điều kiện:     - Là đơn hàng sell-out của NPP     - Ngày tạo đơn hàng trước/bằng ngày trả hàng được chọn     - Đơn hàng đã được xuất kho thành công     - Không thuộc trong phiếu trả hàng trước đó   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã đơn hàng   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. * Điểm bán trả hàng [disabled]: Mặc định hiển thị Mã - Tên điểm bán của điểm bán trong đơn hàng được chọn * Kho [disabled]: Mặc định hiển thị Kho tron đơn hàng được chọn * Kênh [disabled]: Mặc định hiển thị Kênh trong đơn hàng được chọn  * trueRedV1.1.0 Lý do trả hàng   + Bắt buộc chọn.   + Mặc định trống   + Chỉ được phép chọn 1   + Hệ thống thực hiện lấy dữ liệu từ màn hình Danh sách dữ liệu chung - Lý do trả đơn bán hàng + Lý do "Khác"     - Khi người dùng chọn lý do Khác, ô nhập lý do sẽ hiển thị bên cạnh, người dùng bắt buộc phải nhập thêm lý do (text, 300) bằng chữ trong ô lý do     - Ô nhập lý do chỉ hiển thị khi người dùng chọn lý do "Khác"     - Khi nhấn lại vào trường lý do sẽ xem được thông tin Lý do khác đã nhập       * Nếu chọn qua các lý do còn lại, chưa nhấn Lưu, khi chọn lại lý do Khác vẫn thấy được nội dung trong ô "Nhập lý do khác"       * Nếu chọn qua lý do còn lại, nhấn Lưu, sẽ xóa thông tin nội dung trong ô "Nhập lý do khác"   + Cho phép nhập dữ liệu để tìm kiếm like thông tin lý do * trueRedV1.1.0 Ghi chú:    + Nhập ghi chú cho đơn hàng   + Không bắt buộc   + Tối đa 300 ký tự. * Danh sách sản phẩm bao gồm danh sách sản phẩm có trong đơn hàng trả được chọn, gồm các thông tin gồm:     + Mã SKU:   + Tên sản phẩm   + Số lượng   + Đơn vị tính   + Thông tin lô     - Số lượng     - Số lô     - Hạn sử dụng     - Nút Đóng: Nhân vào nút -> hệ thống thực hiện đóng popup Thông tin lô * Nút Đóng: Click vào nút → hệ thống hiển thị popup yêu cầu xác nhận    + Nếu chọn Đồng ý: Hệ thống thực hiện đóng popup tạo mới và trở về màn hình danh sách trả hàng nguyên đơn   + Nếu chọn Hủy: Hệ thống thực hiện đóng popup xác nhận * Nút Lưu: Khi nhấn lưu hệ thống thực hiện kiểm tra và xử lý:   + Kiểm tra:     - **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)     - Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý:       * + Lưu thông tin tạo mới         + Hệ thống thực hiện tạo dòng dữ liệu phiếu trả hàng nguyên đơn với trạng thái **Khởi tạo**.     - Nếu đóng: thực hiện đóng popup xác nhận. |
| **Xem danh sách khuyến mãi trả sản phẩm** |  | Để thực hiện trả hàng khuyến mãi, người dùng chọn 1 đơn hàng sellout  Nếu đơn hàng trên không áp dụng khuyến mãi tặng sản phẩm → Ẩn section Khuyến mãi  Ngược lại hiển thị section Khuyến mãi gồm danh sách các chương trình khuyến mãi có gói khuyến mãi là Tặng sản phẩm (các chương trình khuyến mãi không có tặng sản phẩm không hiển thị)   | UI | Type | Description | | --- | --- | --- | | Tên chương trình khuyến mãi | Text | Hiển thị tên chương trình khuyến mãi  Tối đa 100 ký tự, nếu dài hơn → hiển thị truncated. Khi hover → hiển thị tooltips đầy đủ nội dung | | Thể lệ chương trình | Icon | Hiển thị icon "i" → khi hover → Hiển thị nội dung thể lệ chương trình khuyến mãi | | Kho xuất hàng khuyến mãi | Input Disabled | Mặc định hiển thị tên kho xuất hàng khuyến mãi  Người dùng chỉ xem, không được thay đổi | | **Table sản phẩm trả thưởng**  Chỉ hiển thị các sản phẩm trả thưởng có số lượng > 0 | | | | Mã sản phẩm | Text | Hiển thị mã SKU | | Tên sản phẩm | Text | Hiển thị tên sản phẩm | | Số lượng | Input Disabled | Hiển thị số lượng sản phẩm trả thưởng | | Đơn vị | Text | Hiển thị đơn vị sản phẩm được chọn khi áp dụng khuyến mãi | | Thông tin lô | Icon | Khi click vào → hiển thị Popup Thông tin lô với :   * Số lượng * Số lô * Hạn sử dụng   Nút "Đóng" → Đóng Popup Thông tin Lô và quay về **Table Sản phẩm trả thưởng** | | Ghi chú | Textbox | trueRedV1.1.0   * Nhập ghi chú cho từng dòng sản phẩm * Không bắt buộc * Tối đa 100 ký tự | | Nút "Đóng" | Button | Popup Màn hình xác nhận   * Nhấn "Đóng" → Đóng màn hình xác nhận * Nhấn "Lưu" → Đóng màn hình xác nhận & màn hình Thêm mới → Kết thúc luồng | | Nút "Lưu" | Button | * Thực hiện luồng Tạo phiếu Trả hàng nguyên đơn * Lưu các sản phẩm khuyến mãi trong trả hàng nguyên đơn | |

### Cập nhật phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Cập nhật phiếu trả hàng nguyên đơn | trueRedV1.1.0: Bổ sung thêm trường Lý do trả hàng, nhập lý do trả hàng, ghi chú đơn hàng, ghi chú trên từng dòng sản phẩm | Cập nhật phiếu trả hàng nguyên đơn  hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:   * + "**Tạo mới phiếu trả hàng nguyên đơn** " đổi thành "**Cập nhật phiếu trả hàng nguyên đơn** ".   + Khi đổi lựa chọn đơn hàng trả → hệ thống tự động cập nhật thông tin trong phiếu trả nguyên đơn (bao gồm cả danh sách sản phẩm khuyến mãi).   + Thêm nút "**Lưu & Duyệt**": khi click vào nút → hệ thống thực hiện      - **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)     - Cập nhật thông tin phiếu trả hàng     - Chuyển trạng thái trả hàng sang **Đã duyệt**.     - Cập nhật tồn kho theo **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**   + Sau khi nhấn Lưu, hệ thống thực hiện     - Cập nhật thông tin phiếu trả hàng     - Cập nhật danh sách sản phẩm khuyến mãi trả hàng |
| **Xem danh sách khuyến mãi trả sản phẩm** |  | Tương tự như Mô tả luồng Thêm mới |

### Xem chi tiết phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn | N/A | Mua hàng → Điểm bán trả lẻ → Click vào 1 mã trả hàng bất kì tại danh sách trả hàng nguyên đơn |
| Popup Xem chi tiết phiếu trả hàng nguyên đơn |  | Popup xem chi tiết phiếu trả hàng nguyên đơn  bao gồm các thông tin sau:   * Ngày trả hàng * Đơn hàng trả * Điểm bán trả hàng * Kho * Kênh * trueRedV1.1.0: Lý do trả hàng * trueRedV1.1.0: Ghi chú * Trạng thái: Khởi tạo/Đã duyệt/Đã hủy * Danh sách sản phẩm:   + Mã SKU   + Tên sản phẩm   + Số lượng   + Đơn vị tính   + Thông tin lô     - Số lượng     - Số lô     - Hạn sử dụng   + trueRedV1.1.0 Ghi chú * Lý do hủy: Chỉ hiển thị nếu trạng thái của phiếu là Đã hủy * Nút Đóng: Nhấn vào nút → hệ thống thực hiện đóng popup xem chi tiết phiếu trả hàng |
| Danh sách sản phẩm khuyến mãi trả hàng |  | Tương tự như Mô tả Xem Danh sách sản phẩm khuyến mãi trả hàng trên Luồng Thêm mới |

### Duyệt phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> Điểm bán trả lẻ  -> Chọn nút Duyệt một phiếu trả hàng nguyên đơn  trên danh sách |
| Duyệt phiếu trả hàng nguyên đơn | N/A | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu trả hàng nguyên đơn " ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * **Thực hiện kiểm tra danh sách sản phẩm theo [Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)       * Chuyển trạng thái trả hàng sang **Đã duyệt**.       * Cập nhật tồn kho của NPP theo **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**       * **Thực hiện Revert Promotion tương ứng với đơn Sellout đã trả hàng**     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt phiếu trả hàng có trạng thái Khởi tạo |

### Huỷ phiếu trả hàng nguyên đơn

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> Điểm bán trả lẻ  -> Chọn nút Hủy một phiếu trả hàng nguyên đơn  trên danh sách |
|  | N/A | Khi nhấn vào hệ thống thực hiện xử lý:   * Xử lý: Hiển thị popup Xác nhận hủy phiếu trả hàng nguyên đơn  ngay trên nút:   + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất: Hệ thống thực hiện cập nhật trạng thái phiếu trả hàng nguyên đơn  sang **Đã hủy**     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được hủy phiếu trả hàng nguyên đơn  có trạng thái Khởi tạo |

## **Rules**

### **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**

Sau khi duyệt phiếu trả hàng lẻ thành công, hệ thống thực hiện kiểm tra thông tin sản phẩm trong phiếu, kho và kênh để thực hiện cập nhật tồn như sau:

1. Hệ thống thực kiểm tra Kho và Kênh trong phiếu trả hàng lẻ và thực hiện cập nhật tồn theo Kho và Kênh tương ứng, ngày nhập kho = ngày trả hàng được ghi nhận trên phiếu
2. Hệ thống thực hiện kiểm tra đơn vị tính và thông tin lô của sản phẩm:

* + Nếu **đơn vị tính là đơn vị cơ bản** của sản phẩm: Cộng số lượng sản phẩm trên phiếu trả hàng lẻ vào Tồn kho và Có sẵn theo từng lô tương ứng của sản phẩm
  + Nếu **đơn vị tính là đơn vị quy đổi** của sản phẩm:
    - Bước 1: Thực hiện quy đổi sang đơn vị cơ bản theo công thức: Số lượng theo đơn vị cơ bản = Số lượng theo đơn vị quy đổi \* Giá trị quy đổi
    - Bước 2: Cộng số lượng vừa tính được vào Tồn kho và Có sẵn theo từng lô tương ứng của sản phẩm

Ví dụ:

* Phiếu trả hàng nguyên đơn có danh sách sản phẩm như sau:

Kho nhận: Kho hàng bán; Kênh nhận: Kênh MT

Ngày trả hàng: 26/12/2024

| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Số lượng** | **Thông tin lô** | | |
| --- | --- | --- | --- | --- | --- | --- |
| **Số lượng** | **Số lô** | **Hạn sử dụng** |
| SP01 | Sản phẩm A | thùng | 10 | 7 | LO01 | 1-1-2025 |
| 3 | LO02 | 1-2-2025 |

Trong đó: SP A có đơn vị cơ bản là gói, đơn vị quy đổi là thùng - giá trị là 24 (1 thùng = 24 gói)

* Thông tin Kho hàng bán - Kênh MT của NPP hiện tại như sau:

| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Số lô** | **Hạn sử dụng** | **Ngày nhập** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP01 | Sản phẩm A | lon | 200 | 150 | 50 | LO01 | 1-1-2025 | 20-12-2024 | 50 | 20 | 30 |
| 22-12-2024 | 50 | 30 | 20 |
| LO02 | 1-2-2025 | 23-12-2024 | 100 | 100 | 0 |

→ Hệ thống thực hiện cập nhật tồn kho theo phiếu trả hàng lẻ trên như sau:

* Kiểm tra đơn vị tính của sản phẩm: Vì *Thùng* là đơn vị quy đổi của sản phẩm nên hệ thống thực hiện
  + Bước 1: Quy đổi sang đơn vị cơ bản:
    - 10 thùng = 10 \* 24 = 240 lon
    - 7 thùng = 7 \* 24 = 168 lon
    - 3 thùng = 3 \* 24 =72 lon

* + Bước 2:
    - Cộng 240 lon vào Tồn kho và Có sẵn của sản phẩm với ngày nhập là 26/12/2024
    - Cộng 168 lon vào Tồn kho và Có sẵn của lô LO01 với ngày nhập là 26/12/2024
    - Cộng 72 lon vào Tồn kho và Có sẵn của lô LO02 với ngày nhập là 26/12/2024

Tồn kho sau khi cập nhật thành công:

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Mã SKU** | **Tên sản phẩm** | **Đơn vị tính** | **Tồn kho** | **Tạm giữ** | **Có sẵn** | **Thông tin lô** | | | | | |
| **Số lô** | **Hạn sử dụng** | **Ngày nhập** | **Tồn kho** | **Tạm giữ** | **Có sẵn** |
| SP01 | Sản phẩm A | lon | 440 | 150 | 290 | LO01 | 1-1-2025 | 20-12-2024 | 50 | 20 | 30 |
| 22-12-2024 | 50 | 30 | 20 |
| **26-12-2024** | **168** | **0** | **168** |
| LO02 | 1-2-2025 | 23-12-2024 | 100 | 100 | 0 |
| **26-12-2024** | **72** | **0** | **72** |

/