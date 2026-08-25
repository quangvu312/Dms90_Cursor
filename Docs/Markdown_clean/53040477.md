true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1444 |
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

# Requirement

## Xem báo cáo đơn hàng hủy NPP

Chức năng cho HO xem danh sách đơn đặt hàng mà HO hủy

Đường dẫn: Phân tích bán hàng | Đơn đặt hàng NPP

| UI | Type | Mô tả |
| --- | --- | --- |
| Tìm kiếm theo mã đơn | Input | Mặc định trống  Người dùng nhập keyword tìm kiếm → Enter → Thực hiện lọc Table Báo cáo Đơn hàng hủy NPP có Mã đơn hàng Sell in like keyword  Click chọn dấu "x" trên Input để xóa keyword |
| Kênh bán hàng | Auto Completed | Mặc định trống  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách Kênh bán hàng active có tên kênh bán hàng like keyword  Click chọn nhiều kênh bán hàng  Thực hiện lọc Table Báo cáo Đơn hàng hủy NPP có đơn hàng Sell in thuộc Kênh bán hàng được chọn |
| Vùng bán hàng | Auto Completed | Mặc định trống  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách Vùng bán hàng active có tên vùng bán hàng like keyword  Click chọn 1 vùng bán hàng → Hệ thống lấy danh sách Khu vực bán hàng tương ứng  Thực hiện lọc Table Báo cáo Đơn hàng hủy NPP có đơn hàng Sell in từ NPP trực thuộc Vùng bán hàng được chọn |
| Khu vực bán hàng | Auto Completed | Mặc định trống  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách Khu vực bán hàng active thuộc vùng bán hàng được chọn ở trên và có tên vùng bán hàng like keyword  Click chọn 1 vùng bán hàng  Thực hiện lọc **Table Báo cáo Đơn hàng hủy NPP** có đơn hàng Sell in từ NPP trực thuộc Vùng bán hàng được chọn |
| Nhà phân phối | Auto Completed | Mặc định trống  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách Nhà phân phối trực thuộc HO active và có Mã | Tên NPP like keyword  Click chọn nhiều NPP  Thực hiện lọc **Table Báo cáo Đơn hàng hủy NPP** có đơn hàng Sell in từ NPP trực thuộc Vùng bán hàng được chọn |
| Khoảng thời gian lọc báo cáo - Bắt đầu | Date picker | Start date  Format hiển thị DD-MM-YYYY  Giá trị mặc định là trống  Start date không được lớn hơn End date  Lọc **Table Báo cáo Đơn hàng hủy NPP** có ngày hủy nằm trong khoảng thời gian đầu & kết thúc |
| Khoảng thời gian lọc báo cáo - Kết thúc | Date picker | End date  Format hiển thị DD-MM-YYYY  Giá trị mặc định là trống  Start date không được lớn hơn End date  Lọc **Table Báo cáo Đơn hàng hủy NPP** có ngày hủy nằm trong khoảng thời gian đầu & kết thúc |
| Làm mới | Button | Reset bộ Filter setting ở trạng thái mặc định |
| Export Excel | Button | Click nút này → Hệ thống thực hiện nghiệp vụ **Xuất báo cáo Đơn hàng hủy NPP** |
| Tìm kiếm | Button | Click "Tìm kiếm" → Thực hiện Filter & Search **Table Báo cáo Đơn hàng hủy NPP** theo điều kiện |
| **Table Báo cáo Đơn hàng hủy NPP**   * **Hệ thống load danh sách đơn Sell in có trạng thái "Từ chối" (những đơn Sell in nào mà HO đã từ chối)** * Mỗi row record sẽ tương ứng:   + 1 đơn hàng - 1 SKU sản phẩm bán   + **1 đơn hàng - 1 hình thức khuyến mãi Chiết khấu**   + **1 đơn hàng - 1 hình thức khuyến mãi Giảm tiền**   + **1 đơn hàng - 1 sản phẩm khuyến mãi** (nếu tặng nhiều sản phẩm, mỗi sản phẩm là 1 dòng riêng). * Hệ thống hiển thị danh sách record có ngày hủy từ mới nhất → cũ nhất | | |
| Số hóa đơn | Text | Mã hóa đơn được tích hợp từ 1 hệ thống khác với DMS  Nếu không có, để trống |
| Mã Đơn hàng HO duyệt | Text | Mã đơn hàng Sell in |
| Mã Đơn hàng NPP | Text | Mã đơn hàng PO gắn với Sell in được NPP tạo  Nếu đơn Sell in được HO khởi tạo, để trống |
| Ngày Tạo | Date | Hiển thị ngày giờ tạo trên đơn  Format : DD-MM-YYYY hh:mm |
| Ngày Hủy | Date | Hiển thị ngày hủy trên đơn  Format : DD-MM-YYYY hh:mm |
| Trạng Thái Hủy | Tag (Trên UI)  Text (Khi xuất bc) | Hiển thị trạng thái Hủy |
| Ngành Hàng | Text | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin cây phân cấp của sản phẩm trong đơn hàng → Sau đó lấy cây phân cấp Level 1  Nếu không có sản phẩm hoặc không có **phân cấp level 1** → Để trống |
| Nhãn hàng | Text | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin cây phân cấp của sản phẩm trong đơn hàng → Sau đó lấy cây phân cấp Level 2  Nếu không có sản phẩm hoặc không có **phân cấp level 2** → Để trống |
| Chủng loại | Text | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin cây phân cấp của sản phẩm trong đơn hàng → Sau đó lấy cây phân cấp Level 3  Nếu không có sản phẩm hoặc không có **phân cấp level 3** → Để trống |
| Nhóm sản phẩm | Tag (Trên UI)  Text (Khi xuất bc) | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin nhóm của sản phẩm trong đơn hàng → Sau đó lấy Nhóm sản phẩm tương ứng,  Trên báo cáo xuất, mỗi sản phẩm cách nhau bằng dấu "," |
| Mã Sản phẩm | Text | Hiển thị Mã SKU  Mã sản phẩm có thể là:   * Sản phẩm thuộc đơn hàng bán * Sản phẩm thuộc hàng khuyến mãi   Nếu không thuộc 2 TH trên, để trống |
| Tên sản phẩm | Text | Hiển thị Tên Sản phẩm tương ứng với Mã SKU |
| Số lượng NPP đặt | Number | Lấy số lượng đặt trong đơn PO gắn với đơn Sell in  Nếu đơn Sell in được HO khởi tạo, để trống |
| Số lượng bán | Number | Lấy số lượng đặt bán đơn Sell in |
| Đơn vị tính | Text | Đơn vị tính dựa trên sản phẩm được lựa chọn trong đơn hàng bán hoặc hàng khuyến mãi |
| VAT | Text (Trên UI) Percentage (khi xuất bc) | Lấy VAT của SKU tương ứng |
| Kho | Text | Lấy kho trong đơn Sell in tương ứng |
| Số lượng khuyến mãi | Text | Nếu record là **1 đơn hàng - 1 sản phẩm khuyến mãi**, hiển thị số lượng sản phẩm SKU  Các TH còn lại, để trống |
| Đơn vị tính (khuyến mãi) | Text | Nếu record là **1 đơn hàng - 1 sản phẩm khuyến mãi,** hiển thị đơn vị tính tương ứng với SKU khuyến mãi  Các TH còn lại, để trống |
| Mã chương trình khuyến mãi | Text | Nếu record là **1 đơn hàng - 1 CTKM ,** hiển thị mã CTKM  Các TH còn lại, để trống |
| Tên chương trình khuyến mãi | Text | Nếu record là **1 đơn hàng - 1 CTKM ,** hiển thị mã CTKM  Các TH còn lại, để trống |
| Loại chương trình khuyến mãi | Text | Nếu record là **1 đơn hàng - 1 CTKM ,** hiển thị Loại CTKM tương ứng  Có 2 loại CTKM là : Bình thường & Ontop |
| Đơn giá chưa VAT | Text | Đơn giá trước VAT của sản phẩm hàng bán  Nếu record là **1 đơn hàng - 1 CTKM,** hiển thị "0" |
| Đơn giá tính VAT | Text | Đơn giá sau khi tính VAT của sản phẩm  Nếu record là **1 đơn hàng - 1 CTKM,** hiển thị "0" |
| Phần trăm chiết khấu | Text (Trên UI) Percentage (khi xuất bc) | Nếu record là **1 đơn hàng - Chiếu khấu,** hiển thị phần trăm chiết khấu |
| Tiền chiết khấu | Text | Nếu record là **1 đơn hàng - Giảm tiền,** hiển thị giá trị tiền được chiết khấu |
| Tổng tiền khuyến mãi | Text | Nếu record là **1 đơn hàng - Giảm tiền,** Tổng tiền khuyến mãi = Tổng các giảm tiền của 1 CTKM  Các TH còn lại, hiển thị 0 |
| Thành tiền trước chiết khấu chưa VAT | Text | Cột Đơn giá trước VAT \* cột số lượng bán |
| Thành tiền  trước chiết khấu có VAT | Text | Cột Đơn giá trước VAT \* cột số lượng bán |
| Phương thức thanh toán | Text | Để trống |
| Nguồn tiền | Text | Để trống |

## Xuất báo cáo đơn hàng hủy NPP

| UI | Type | Description |
| --- | --- | --- |
| Export excel | Button | Khi click chọn "Export excel" → Hệ thống thực hiện xuất báo cáo dưới format Excel  Tên file được định dạng : BaoCaoDonhanghuyNPP - [DD-MM-YYYY]  Template Excel:  Mô tả column của Export Excel được mô tả như **Xem Báo cáo đơn hàng hủy NPP** |