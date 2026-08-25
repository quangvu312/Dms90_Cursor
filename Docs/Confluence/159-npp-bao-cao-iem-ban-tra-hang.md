true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1445 |
| Version | trueYellow1.0.0  trueRedV1.1.0: Thêm thông tin Lý do trả hàng, Ghi chú đơn hàng, Ghi chú trên từng dòng sản phẩm |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

3

**BACKLOG**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |
|  | 1.1.0 | 24/02/2025 |  | Cập nhật format Ngày đơn trả thành DD/MM/YYYY  Define thêm cột Kho (trong template có nhưng chưa được define trong Doc) |

# Requirement

Cho phép NPP xem và xuất báo cáo Điểm bán trả hàng theo khoảng thời gian , theo Điểm bán, mã trả hàng , trạng thái

Lưu ý: Phân quyền chức năng theo [Tài liệu phân quyền](https://kb.finviet.com.vn/x/iG4pAw)

## Xem & Lọc báo cáo điểm bán trả hàng

**Mô tả thông tin :**

**trueRedV1.1.0:** Thêm thông tin Lý do trả hàng, Ghi chú đơn hàng, Ghi chú trên từng dòng sản phẩm

| UI | Type | Mô tả chi tiết |
| --- | --- | --- |
| Tìm kiếm | Input | Mặc định trống  Người dùng nhập keyword tìm kiếm → Enter → Thực hiện tìm kiếm danh sách trả hàng từ Điểm bán có Mã đơn trả hàng like keyword  Click chọn dấu "x" trên Input để xóa keyword  Lọc **Table Báo cáo trả hàng** có mã trả hàng like keyword tìm kiếm |
| Khoảng thời gian lọc - Bắt đầu | Date picker | Start date   Format hiển thị DD-MM-YYYY  Giá trị mặc định là ngày đầu tháng hiện tại  Start date không được lớn hơn End date  Lọc **Table Báo cáo trả hàng** có ngày trả hàng nằm trogn khoảng thời gian đầu & kết thúc  Nếu để trống khi bấm "Tìm kiếm" → Hiển thị error message Input "Vui lòng chọn thời gian xem báo cáo" |
| Khoảng thời gian lọc - Kết thúc | Date picker | End date   Format hiển thị DD-MM-YYYY  Giá trị mặc định là ngày hiện tại của tháng  Start date không được lớn hơn End date  Lọc **Table Báo cáo trả hàng** có ngày trả hàng nằm trong khoảng thời gian đầu & kết thúc  Nếu để trống khi bấm "Tìm kiếm" → Hiển thị error message Input "Vui lòng chọn thời gian xem báo cáo" |
| Điểm bán | Auto complete | Mặc định trống  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách Điểm bán có tên điểm bán like keyword  Click chọn nhiều điểm bán  Lọc **Table Báo cáo trả hàng** có đơn hàng trả từ Điểm bán được chọn |
| Trạng thái | Auto complete | Mặc định 3 trạng thái "Khởi tạo", "Đã duyệt", "Đã hủy"  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách trạng thái phiếu trả hàng có tên like keyword  Click chọn nhiều trạng thái  Lọc **Table Báo cáo trả hàng** có phiếu trả hàng thuộc trạng thái được chọn |
| Export Excel | Button | Click nút này → Hệ thống thực hiện nghiệp vụ **Xuất báo cáo điểm bán trả hàng** |
| Tìm kiếm | Button | Click "Tìm kiếm" → Thực hiện Filter & Search danh sách Phiếu trả hàng theo điều kiện |
| **Table Báo cáo Trả hàng**   * Hệ thống load danh sách đơn hàng trả nguyên đơn & trả lẻ từ Điểm bán ứng với NPP * Mỗi row record sẽ tương ứng:   + 1 đơn hàng - 1 SKU sản phẩm bán   + **1 đơn hàng - 1 hình thức khuyến mãi Chiết khấu**   + **1 đơn hàng - 1 hình thức khuyến mãi Giảm tiền**   + **1 đơn hàng - 1 sản phẩm khuyến mãi** (nếu tặng nhiều sản phẩm, mỗi sản phẩm là 1 dòng riêng). * Hệ thống hiển thị danh sách record sắp xếp theo **NPP và** **ngày trả hàng** từ mới nhất → cũ nhất | | |
| Lưu ý, trường hợp đơn hàng trả lẻ, không hiển thị thông tin các trường sau:   * Mã giám sát * Tên giám sát * Mã tuyến * Tên tuyến * Mã nhân viên bán hàng * Tên nhân viên bán hàng * Số lượng trả khuyến mãi * Tên chương trình khuyến mãi * Chiết khấu * Tổng tiền chiết khấu * Tổng tiền giảm trừ | | |
| Kênh bán hàng | Text | Hiển thị kênh bán hàng của đơn hàng Sellout ứng với phiếu trả hàng nguyên đơn  Nếu phiếu trả hàng lẻ → Để trống |
| Vùng bán hàng | Text | Lấy theo thông tin địa chỉ của nhà phân phối trực thuộc |
| Khu vực bán hàng | Text | Lấy theo thông tin địa chỉ của nhà phân phối trực thuộc |
| Mã NPP | Text | Mã NPP |
| Tên NPP | Text | Tên NPP |
| Mã giám sát | Text | Lấy theo tin giám sát quản lý nhân viên tạo đơn hàng |
| Tên giám sát | Text | Lấy theo tin giám sát quản lý nhân viên tạo đơn hàng |
| Mã tuyến bán hàng | Text | Lấy theo thông tin mã tuyến của nhân viên tạo đơn hàng |
| Tên tuyến bán hàng | Text | Lấy theo thông tin mã tuyến của nhân viên tạo đơn hàng |
| Mã NVBH | Text | Lấy mã của NV tạo đơn |
| Tên NVBH | Text | Lấy tên của NV tạo đơn |
| Mã Điểm bán | Text | Mã điểm bán trả hàng |
| Tên Điểm bán | Text | Tên điểm bán trả hàng |
| Loại Điểm bán | Text | Loại điểm bán trả hàng |
| Người tạo | Text | Hiển thị username Người tạo đơn trả hàng |
| Mã Đơn hàng gốc | Text | Nếu phiếu trả nguyên đơn → HIển thị mã đơn hàng Sellout tương ứng  Ngược lại, để trống cột này |
| Số hóa đơn trả | Text | Hiển thị mã trả hàng |
| Trạng thái | Text | Hiển thị trạng thái phiếu trả hàng |
| Ghi chú đơn hàng | Text | trueRedV1.1.0 Thông tin ghi chú trả hàng trên đơn hàng |
| Lý do trả hàng | Text | trueRedV1.1.0 Thông tin lý do trả hàng trên đơn hàng |
| Người duyệt | Text | Đối với phiếu trả hàng trạng thái "Đã duyệt" → Hiển thị username của người duyệt  Ngược lại → Để trống |
| Ngày đơn trả | Date time | Hiển thị ngày giờ trên đơn  Format : DD-MM-YYYY |
| Ngành hàng | Text | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin cây phân cấp của sản phẩm trong đơn hàng → Sau đó lấy cây phân cấp Level 1  Nếu không có sản phẩm hoặc không có phân cấp level 1 → Để trống |
| Nhãn hàng | Text | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin cây phân cấp của sản phẩm trong đơn hàng → Sau đó lấy cây phân cấp Level 2  Nếu không có sản phẩm hoặc không có phân cấp level 2 → Để trống |
| Chủng loại | Text | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin cây phân cấp của sản phẩm trong đơn hàng → Sau đó lấy cây phân cấp Level 3  Nếu không có sản phẩm hoặc không có phân cấp level 3 → Để trống |
| Nhóm Sản phẩm | Tag (Trên UI)  Text (Khi xuất bc) | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin nhóm của sản phẩm trong đơn hàng → Sau đó lấy cây phân cấp Level 3 |
| Mã sản phẩm | Text | Hiển thị Mã SKU  Mã sản phẩm có thể là:   * Sản phẩm thuộc đơn hàng bán * Sản phẩm thuộc hàng khuyến mãi |
| Tên sản phẩm | Text | Hiển thị Tên Sản phẩm tương ứng với Mã SKU |
| Đơn vị tính | Text | Đơn vị tính dựa trên sản phẩm được lựa chọn trong đơn hàng bán hoặc hàng khuyến mãi |
| Kho | Text | Hiển thị giá trị Kho của SKU tương ứng    * Nếu SKU là SP mua → Hiển thị kho trên phiếu trả hàng * Nếu SKU là SP khuyến mãi nằm trong phiếu trả nguyên đơn → Hiển thị kho lấy hàng khuyến mãi trên đơn Sellout * Nếu là khuyến mãi tặng tiền → Hiển thị kho theo CTKM trên đơn Sellout |
| Đơn giá | Number | Nếu trả hàng nguyên đơn :   * Sản phẩm hàng bán → Lấy theo đơn giá trước VAT đơn hàng Sellout theo * Sản phẩm khuyến mãi → Lấy đơn giá trước VAT theo bảng giá bán của NPP tại thời điểm đặt hàng. Nếu đơn vị là đơn vị quy đổi → Thực hiện quy đổi đơn giá theo đơn vị quy đổi (làm tròn số nguyên)   Nếu trả lẻ → Lấy đơn giá trước VAT theo bảng giá bán của NPP tại thời điểm xem báo cáo. Nếu đơn vị là đơn vị quy đổi → Thực hiện quy đổi đơn giá theo đơn vị quy đổi (làm tròn số nguyên) |
| Đơn giá VAT | Number | Nếu trả hàng nguyên đơn:    * Sản phẩm hàng bán → Lấy theo đơn giá sau VAT đơn hàng Sellout * Sản phẩm khuyến mãi → Lấy đơn giá sau VAT theo bảng giá bán của NPP tại thời điểm đặt hàng. Nếu đơn vị là đơn vị quy đổi → Thực hiện quy đổi đơn giá theo đơn vị quy đổi (làm tròn số nguyên)   Nếu trả lẻ:   * Lấy theo bảng giá bán của NPP tại thời điểm xem báo cáo  (Đơn sellout), theo độ ưu tiên của bảng giá bán. * Nếu đơn vị là đơn vị quy đổi → Thực hiện quy đổi đơn giá theo đơn vị quy đổi (làm tròn số nguyên) |
| Số lượng trả | Number | Hiển thị số lượng trả sản phẩm hàng bán  Nếu Row record là Trả hàng khuyến mãi → Để trống |
| Số lượng trả khuyến mãi | Number | Hiển thị số lượng trả sản phẩm khuyến mãi  Nếu row record không phải Hình thức trả sản phẩm khuyến mãi → Để trống |
| Tên Chương trình khuyến mãi | Text | Tên CTKM |
| Chiết khấu | Number (trên UI)  % khi xuất báo cáo | Hiển thị số % chiết khấu của hình thức Chiết khấu khuyến mãi  Nếu row record không phải Hình thức trả chiết khấu khuyến mãi → Để trống |
| Tổng tiền chiết khấu | Number | Hiển thị số tiền chiết khấu của hình thức Chiết khấu khuyến mãi  Nếu row record không phải Hình thức trả chiết khấu khuyến mãi → Để trống |
| Tổng tiền giảm trừ | Number | Hiển thị tổng tiền giảm trừ của hình thức Giảm tiền khuyến mãi  Nếu row record không phải Hình thức Giảm tiền khuyến mãi → Để trống |
| Thành tiền | Number | Cột Đơn giá trước VAT \* cột số lượng trả |
| Doanh thu | Number | Cột Đơn giá sau VAT \* cột số lượng trả |
| Ghi chú | Text | trueRedV1.1.0 Ghi chú trả hàng trên từng dòng sản phẩm |

## Xuất báo cáo điểm bán trả hàng

| UI | Type | Mô tả |
| --- | --- | --- |
| Export excel | Button | Khi click chọn "Export excel" → Hệ thống thực hiện xuất báo cáo dưới format Excel  Tên file được định dạng : BaoCaoDiembanTrahang - [DD-MM-YYYY-HH-MM-SS]  Template Excel: <https://docs.google.com/spreadsheets/d/1dD9hSXBPmM0Y8q2uyHZTgKw-eUgeLZ_D/edit?usp=drive_link&ouid=106646539584081727110&rtpof=true&sd=true>  Mô tả column của Export Excel được mô tả như Xem báo cáo Điểm bán Trả hàng  trueRedV1.1.0: Thêm thông tin Lý do trả hàng, Ghi chú đơn hàng, Ghi chú trên từng dòng sản phẩm |