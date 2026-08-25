|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Thêm thông tin địa chỉ của điểm bán theo kinh độ vĩ độ để user compare trên báo cáo chi tiết viếng thăm khi checkin - Checkout |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Link doc hiện tại: [HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán

Dưới dây là nội dung bổ sung: Thêm Vĩ độ; Thêm Kinh độ khi check in và check out điểm bán

**Vĩ độ/kinh độ ở dạng thập phân** (Decimal Degrees – DD) lấy 5 **chữ số sau dấu phẩy.**

# Màn hình Báo cáo chi tiết viếng thăm điểm bán

| Tên Trường | Loại Dữ Liệu | Chỉnh Sửa? | Bắt Buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Bộ lọc | | | | |
| Trạng thái đơn hàng | Selectbox multichoice | Có | Không | * **Mở danh sách**:    + Khi người dùng nhấp vào trường "Trạng thái đơn hàng" hiển thị danh sách tất cả trạng thái đơn hàng, trừ trạng thái Hủy.   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Tên Trạng thái đơn hàng   + Người dùng có thể chọn nhiều Trạng thái đơn hàng để lọc dữ liệu   + Trường hợp không có Trạng thái đơn hàng nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * **Hiển thị lựa chọn:**     + Trạng thái đơn hàng đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags).   + Trường hợp bỏ chọn Trạng thái đơn hàng trong hộp chọn thì hiểu là chọn tất cả các Trạng thái đơn hàng trong hộp chọn   + Các trạng thái đơn hàng được chọn sẽ được tính theo điều kiện "**Hoặc**"     - Nghĩa là sẽ lấy tất cả các dữ liệu có trạng thái được chọn.     - Ví dụ lấy đơn hàng có trạng thái Đã duyệt hoặc Đã xuất kho * **Kết quả lọc:**    + Thông tin các cột "**Điểm bán viếng thăm trong tuyến có đơn hàng**", "**Điểm bán viếng thăm ngoại tuyến có đơn hàng**", "**Doanh số trước VAT**", "**Doanh số sau VAT**" sẽ được tính toán dựa trên trạng thái được chọn ở trường này. * **Xóa lựa chọn:**    + Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Trạng thái đơn hàng không mong muốn. |
| Dữ liệu báo cáo | | | | |
| ĐB viếng thăm trong tuyến có đơn hàng | Datacolumn | Không | Không | Nếu điểm bán là điểm bán trong tuyến và trong ngày viếng thăm nhân viên có đặt đơn hàng cho điểm bán → đánh dấu "x" ở trường này  Điều kiện tính có đơn hàng:   * Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DBáoCáo-Côngthứctínhdoanhsố) * Nguồn đơn hàng:   + Thông tin ghi nhận trên từng lần viếng thăm điểm bán trong ngày (Trong tuyến).   + Không ghi nhận khi thực hiện đặt hàng bên chức năng Nhiệm Vụ Chăm sóc   + Không ghi nhận khi thực hiện đặt đơn trên web có chọn thông tin nhân viên * Trạng thái đơn hàng: Trạng thái được chọn ở trường "Trạng thái đơn hàng" ở bộ lọc |
| ĐB viếng thăm ngoại tuyến có đơn hàng | Datacolumn | Không | Không | Nếu điểm bán là điểm bán ngoại tuyến và trong ngày viếng thăm nhân viên có đặt đơn hàng cho điểm bán → đánh dấu "x" ở trường này  Điều kiện tính có đơn hàng:   * Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DBáoCáo-Côngthứctínhdoanhsố) * Nguồn đơn hàng:   + Thông tin ghi nhận trên từng lần viếng thăm điểm bán trong ngày (Ngoại tuyến).   + Không ghi nhận khi thực hiện đặt hàng bên chức năng Nhiệm Vụ Chăm sóc   + Không ghi nhận khi thực hiện đặt đơn trên web có chọn thông tin nhân viên * Trạng thái đơn hàng: Trạng thái được chọn ở trường "Trạng thái đơn hàng" ở bộ lọc |
| Thời gian check in |  |  |  | Không thay đổi |
| Khoảng cách check in |  |  |  | Không thay đổi |
| Địa chỉ check in |  |  |  | Không thay đổi |
| Vĩ độ check in | Datacolumn | Không | Không | **là  "Latitude" (vĩ độ), hiển thị ở dạng thập phân** (Decimal Degrees – DD) |
| Kinh độ check in | Datacolumn | Không | Không | **là "Longitude" (kinh độ), hiển thị ở dạng thập phân** (Decimal Degrees – DD) |
| Thời gian check out |  |  |  | Không thay đổi |
| Khoảng cách check out |  |  |  | Không thay đổi |
| Địa chỉ check out |  |  |  | Không thay đổi |
| Vĩ độ check out | Datacolumn | Không | Không | **là  "Latitude" (vĩ độ), hiển thị ở dạng thập phân** (Decimal Degrees – DD) |
| Kinh độ check out | Datacolumn | Không | Không | **là "Longitude" (kinh độ), hiển thị ở dạng thập phân** (Decimal Degrees – DD) |
| Doanh số trước VAT | Datacolumn | Không | Không | Doanh số đơn hàng trong ngày đổi thành "Doanh số trước VAT"  Tính tổng doanh số đơn hàng trong ngày viếng thăm của điểm bán   * **Doanh số trước VAT**= Số lượng x giá bán (Giá bán chưa tính VAT, không tính toán CTKM) * Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như đã mô tả ở cột "ĐB viếng thăm trong tuyến có đơn hàng" và "ĐB viếng thăm ngoại tuyến có đơn hàng". Nghĩa là đếm cả đơn trong tuyến và ngoại tuyến. * Format tiền tệ phần nghìn   Thông tin ghi nhận trên từng lần viếng thăm điểm bán trong ngày |
| Doanh số sau VAT | Datacolumn | Không | Không | Doanh thu đơn hàng trong ngày đổi thành "doanh số sau VAT"  Tính tổng doanh số đơn hàng trong ngày viếng thăm của điểm bán   * **Doanh số sau VAT** = Số lượng × Đơn giá sau V – Khuyến mãi + Giảm trừ * Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như đã mô tả ở cột "ĐB viếng thăm trong tuyến có đơn hàng" và "ĐB viếng thăm ngoại tuyến có đơn hàng". Nghĩa là đếm cả đơn trong tuyến và ngoại tuyến. * Format tiền tệ phần nghìn   Thông tin ghi nhận trên từng lần viếng thăm điểm bán trong ngày |

# Export

| Nội dung báo cáo | | | | |
| --- | --- | --- | --- | --- |
| Thời gian check in |  |  |  | Không thay đổi |
| Khoảng cách check in |  |  |  | Không thay đổi |
| Địa chỉ check in |  |  |  | Không thay đổi |
| Vĩ độ check in | Datacolumn | Không | Không | **là  "Latitude" (vĩ độ), hiển thị ở dạng thập phân** (Decimal Degrees – DD) |
| Kinh độ check in | Datacolumn | Không | Không | **là "Longitude" (kinh độ), hiển thị ở dạng thập phân** (Decimal Degrees – DD) |
| Thời gian check out |  |  |  | Không thay đổi |
| Khoảng cách check out |  |  |  | Không thay đổi |
| Địa chỉ check out |  |  |  | Không thay đổi |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Vĩ độ check out | Datacolumn | Không | Không | **là  "Latitude" (vĩ độ), hiển thị ở dạng thập phân** (Decimal Degrees – DD) |
| Kinh độ check out | Datacolumn | Không | Không | **là "Longitude" (kinh độ), hiển thị ở dạng thập phân** (Decimal Degrees – DD) |
| Doanh số trước VAT | Datacolumn | Không | Không | * Tổng doanh số đơn hàng trong ngày viếng thăm của điểm bán * Format tiền tệ phần nghìn |
| Doanh số sau VAT | Datacolumn | Không | Không | * Tổng doanh số đơn hàng trong ngày viếng thăm của điểm bán * Format tiền tệ phần nghìn |