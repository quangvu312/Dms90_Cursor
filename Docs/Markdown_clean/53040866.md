true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1446 |
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
| 2 | 1.1.0 | 24/02/2024 |  | Define thêm cột Kho  Chỉnh format ngày đơn trả sang DD/MM/YYYY  Đơn giá trước VAT & sau VAT lấy từ bảng giá mua theo đơn vị quy đổi (làm tròn số nguyên) |

# Requirement

Cho phép HO xem và xuất báo cáo NPP trả hàng theo khoảng thời gian , theo NPP, mã trả hàng , trạng thái

Lưu ý: Phân quyền chức năng theo [Tài liệu phân quyền](https://kb.finviet.com.vn/x/iG4pAw)

## Xem báo cáo NPP trả hàng

| UI | Type | Mô tả chi tiết |
| --- | --- | --- |
| Tìm kiếm | Input | Mặc định trống  Người dùng nhập keyword tìm kiếm → Enter → Thực hiện tìm kiếm danh sách trả hàng từ NPP có Mã đơn trả hàng like keyword  Click chọn dấu "x" trên Input để xóa keyword  Lọc **Table Báo cáo trả hàng** có mã trả hàng like keyword tìm kiếm |
| Khoảng thời gian lọc - Bắt đầu | Date picker | Start date  Format hiển thị DD-MM-YYYY  Giá trị mặc định là ngày đầu của tháng hiện tại  Start date không được lớn hơn End date  Nếu để trống khi bấm "Tìm kiếm" → Hiển thị error message Input "Vui lòng chọn thời gian xem báo cáo"  Lọc **Table Báo cáo trả hàng** có ngày trả hàng nằm trong khoảng thời gian đầu & kết thúc |
| Khoảng thời gian lọc - Kết thúc | Date picker | End date  Format hiển thị DD-MM-YYYY  Giá trị mặc định là ngày hiện tại của tháng hiện tại  Start date không được lớn hơn End date  Nếu để trống khi bấm "Tìm kiếm" → Hiển thị error message Input "Vui lòng chọn thời gian xem báo cáo"  Lọc **Table Báo cáo trả hàng** có ngày trả hàng nằm trong khoảng thời gian đầu & kết thúc |
| Nhà phân phối | Auto completed | Mặc định trống  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách NPP trực thuộc active có Mã hoặc Tên NPP like keyword  Click chọn nhiều NPP  Lọc **Table Báo cáo trả hàng** có đơn hàng trả từ NPP được chọn |
| Vùng bán hàng | Auto Completed | Mặc định trống  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách Vùng bán hàng active có Mã hoặc Tên vùng like keyword  Click chọn 1 Vùng bán hàng  Lọc **Table Báo cáo trả hàng** có đơn hàng trả của NPP thuộc Vùng được chọn |
| Khu vực bán hàng | Auto Completed | Mặc định trống  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách Khu vực bán hàng active trực thuộc Vùng bán hàng được chọn ở trên và có Mã hoặc Tên vùng like keyword  Click chọn nhiều Khu vực bán hàng  Lọc **Table Báo cáo trả hàng** có đơn hàng trả của NPP thuộc Khu vực bán hàng được chọn |
| Trạng thái | Auto Completed | Mặc định là cả 5 trạng thái "Khởi tạo", "Đã duyệt", "Đã hủy", "Đã Từ chối", "Chờ duyệt"  Click chọn và nhập keyword → Hệ thống hiển thị dropdown danh sách Trạng thái của phiếu trả hàng có tên trạng thái like keyword  Click chọn nhiều trạng thái  Lọc **Table Báo cáo trả hàng** có đơn hàng trả của NPP thuộc trạng thái được chọn |
| Export Excel | Button | Click nút này → Hệ thống thực hiện nghiệp vụ **Xuất báo cáo NPP trả hàng** |
| Tìm kiếm | Button | Click "Tìm kiếm" → Thực hiện Filter & Search danh sách Phiếu trả hàng theo điều kiện |
| **Table Báo cáo Trả hàng**   * Hệ thống load danh sách phiếu trả hàng từ NPP lên HO * **Mỗi row record sẽ tương ứng 1 phiếu trả hàng - 1 SKU sản phẩm trả** * Hệ thống hiển thị danh sách record theo NPP và ngày trả hàng của phiếu trả hàng từ mới nhất → cũ nhất | | |
| STT | Text | Chỉ hiển thị trong báo cáo xuất ra  STT tăng dần |
| Kênh bán hàng | Text | Hiển thị kênh bán hàng trong phiếu trả hàng |
| Vùng bán hàng | Text | Lấy theo thông tin địa chỉ của nhà phân phối trả |
| Khu vực bán hàng | Text | Lấy theo thông tin địa chỉ của nhà phân phối trả |
| Mã NPP | Text | Mã NPP trả |
| Tên NPP | Text | Tên NPP trả |
| Người tạo | Text | Hiển thị username Người tạo đơn trả hàng |
| Số hóa đơn trả | Text | Hiển thị mã đơn hàng trả |
| Trạng thái | Text | Hiển thị trạng thái của phiếu trả hàng |
| Người duyệt | Text | Đối với phiếu trả hàng trạng thái "Đã duyệt" → Hiển thị username của người duyệt  Ngược lại, ẩn đi cột này |
| Ngày đơn trả | Date time | Hiển thị ngày giờ trên đơn  Format : DD-MM-YYYY |
| Ngành hàng | Text | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin cây phân cấp của sản phẩm trong phiếu trả hàng → Sau đó lấy cây phân cấp Level 1  Nếu không có phân cấp level 1 → Để trống |
| Nhãn hàng | Text | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin cây phân cấp của sản phẩm trong đơn hàng → Sau đó lấy cây phân cấp Level 2  Nếu không có phân cấp level 2 → Để trống |
| Chủng loại | Text | **Dựa vào sản phẩm tại row record đó** → Lấy thông tin cây phân cấp của sản phẩm trong đơn hàng → Sau đó lấy cây phân cấp Level 3  Nếu không có phân cấp level 3 → Để trống |
| Nhóm Sản phẩm | Tag (Trên UI)  Text (Khi xuất bc) | Hiển thị Nhóm sản phẩm. Nếu nhiều nhóm sản phẩm cách nhau bằng dấu ";" |
| Mã sản phẩm | Text | Hiển thị Mã SKU |
| Tên sản phẩm | Text | Hiển thị Tên Sản phẩm tương ứng với Mã SKU |
| Đơn vị tính | Text | Lấy theo đơn vị SKU chọn trên phiếu trả hàng |
| Kho | Text | Lấy giá trị cột Kho trong phiếu trả hàng |
| Đơn giá | Number | Từ bảng giá mua → Lấy Đơn giá trước VAT của SKU  Đơn giá lấy từ **bảng giá mua** mà ngày trả hàng nằm trong thời gian áp dụng (lấy tại thời điểm xem báo cáo)  Nếu đơn vị là đơn vị quy đổi → Thực hiện quy đổi đơn giá theo đơn vị quy đổi (làm tròn số nguyên)  Tại thời điểm xem báo cáo nếu sản phẩm không có trong bất kì bảng giá mua nào thì Đơn giá = 0 |
| Đơn giá VAT | Number | Từ bảng giá mua → Lấy Đơn giá sau VAT của SKU  Đơn giá lấy từ **bảng giá mua** mà ngày trả hàng nằm trong thời gian áp dụng (lấy tại thời điểm xem báo cáo)  Nếu đơn vị là đơn vị quy đổi → Thực hiện quy đổi đơn giá theo đơn vị quy đổi (làm tròn số nguyên)  Tại thời điểm xem báo cáo nếu sản phẩm không có trong bất kì bảng giá mua nào thì Đơn giá = 0 |
| Số lượng trả | Number | Hiển thị số lượng trả sản phẩm trên phiếu trả hàng |
| Thành tiền | Number | Cột Đơn giá trước VAT \* cột số lượng trả |
| Doanh thu | Number | Cột Đơn giá sau VAT \* cột số lượng trả |

## Xuất báo cáo NPP trả hàng

| UI | Type | Mô tả |
| --- | --- | --- |
| Export excel | Button | Khi click chọn "Export excel" → Hệ thống thực hiện xuất báo cáo dưới format Excel  Tên file được định dạng : BaoCaoNPPTrahang - [DD-MM-YYYY-HH-MM-SS]  Template Excel: <https://docs.google.com/spreadsheets/d/1zlb5ygh6wRnTUIt5bB93jHLIcr-0Xdld/edit?usp=drive_link&ouid=106646539584081727110&rtpof=true&sd=true>  Mô tả column của Export Excel được mô tả như Xem báo cáo NPP Trả hàng |