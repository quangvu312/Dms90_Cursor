|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Thay đổi thông tin   * Doanh số trước VAT  * Doanh số sau VAT * Thêm bộ lọc trạng thái đơn hàng * Thông tin đơn hàng và doanh số sẽ được tính dựa trên bộ lọc trạng thái đơn hàng |
| Document version | RedV1.0.0  RedV1.1.0 20/4/2026: Cập nhật lại cách tính cột “Tổng số điểm bán trong tuyến”  = Tổng số điểm bán thuộc tuyến tuyến thực tế trong ngày  RedV1.2.0 20/5/2026: Bổ sung Trạng thái đơn hàng: Lấy đơn hàng có trạng thái cuối cùng thuộc các trạng thái được chọn có ngày đặt hàng thuộc khoảng thời gian đã chọn |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Link doc hiện tại: [[HO] Báo cáo Tổng Hợp Viếng Thăm Điểm Bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036726)

# Màn hình Báo cáo tổng hợp viếng thăm điểm bán

| Tên Trường | Loại Dữ Liệu | Chỉnh Sửa? | Bắt Buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Bộ lọc | | | | |
| Trạng thái đơn hàng | Selectbox multichoice | Có | Không | * **Mở danh sách**:    + Khi người dùng nhấp vào trường "Trạng thái đơn hàng" hiển thị danh sách tất cả trạng thái đơn hàng, trừ trạng thái Hủy.   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Tên Trạng thái đơn hàng   + Người dùng có thể chọn nhiều Trạng thái đơn hàng để lọc dữ liệu   + Trường hợp không có Trạng thái đơn hàng nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * **Hiển thị lựa chọn:**     + Trạng thái đơn hàng đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags).   + Trường hợp bỏ chọn Trạng thái đơn hàng trong hộp chọn thì hiểu là chọn tất cả các Trạng thái đơn hàng trong hộp chọn   + Các trạng thái đơn hàng được chọn sẽ được tính theo điều kiện "**Hoặc**"     - Nghĩa là sẽ lấy tất cả các dữ liệu có trạng thái được chọn.     - Ví dụ lấy đơn hàng có trạng thái Đã duyệt hoặc Đã xuất kho * **Kết quả lọc:**    + Thông tin các cột **"Số đơn hàng trong ngày";** "**Doanh số trước VAT**", "**Doanh số sau VAT**" sẽ được tính toán dựa trên trạng thái được chọn ở trường này.   + Trạng thái đơn hàng: Là trạng thái cuối cùng của đơn hàng tại thời điểm xem báo cáo * **Xóa lựa chọn:**    + Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Trạng thái đơn hàng không mong muốn. |
| Dữ liệu báo cáo | | | | |
| Số đơn hàng trong ngày | Datacolumn | Không | Không | Tính tổng số đơn hàng trong ngày được tạo bởi nhân viên ở trường "Mã nhân viên"  Điều kiện tính có đơn hàng:   * Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DBáoCáo-Côngthứctínhdoanhsố) * Nguồn đơn hàng   + Thông tin ghi nhận trên từng lần viếng thăm điểm bán trong ngày (Trong tuyến/Ngoại tuyến).   + Không ghi nhận khi thực hiện đặt hàng bên chức năng Nhiệm Vụ Chăm sóc   + Không ghi nhận khi thực hiện đặt đơn trên web * Trạng thái đơn hàng: Trạng thái được chọn ở trường "Trạng thái đơn hàng" ở bộ lọc mapping với trạng thái cuối cùng của các đơn hàng đặt trong Thời gian của bộ lọc   **RedV1.2.0****Ví dụ:**   * Ngày 6/5 Tạo đơn hàng 1 cho tuyến 1-NV1  của NPP 1; -> Ngày 6/5  duyệt -> Ngày 7/5 xuất kho * Thực  hiện  chuyển tuyến: tuyến 1-NV1  của NPP 1 => Chuyển sang NPP 2 (Tuyến 1-NV1 ko thay đổi)   + Đặt đơn ngày 6/5 cho NPP2- Tuyến 1-NV1; Ngày 6/5  duyệt -> Ngày 6/5 xuất kho   Filter:   * Ngày hiện tại là 20/5-> chọn filter ngày quá kh\*ứ là 6/5\* * Trạng thái đơn hàng và bộ lọc như sau: * | Bộ lọc | Trạng thái đơn | Kết quả |   | --- | --- | --- |   | Tuyến 1 | Khởi tạo/Đã duyệt Đã xuất kho | 0 2 |   | Nhân viên 1 | Khởi tạo/Đã duyệt Đã xuất kho | 0 2 |   | Tuyến 1/NV1 + NPP 1 | Khởi tạo/Đã duyệt Đã xuất kho | 0 1 |   | Tuyến 1/NV1 + NPP 2 | Khởi tạo/Đã duyệt Đã xuất kho | 0 1 | |
| Doanh số trước VAT | Datacolumn | Không | Không | Doanh số trong ngày đổi thành "Doanh số trước VAT"  Tính tổng doanh số đơn hàng trong ngày viếng thăm của điểm bán   * **Doanh số trước VAT**= Số lượng x giá bán (Giá bán chưa tính VAT, không tính toán CTKM) * Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như đã mô tả ở cột "Số đơn hàng trong ngày" * Format tiền tệ phần nghìn |
| Doanh số sau VAT | Datacolumn | Không | Không | Doanh trong ngày đổi thành "Doanh số sau VAT"  Tính tổng doanh số đơn hàng trong ngày viếng thăm của điểm bán   * **Doanh số sau VAT** = Số lượng × Đơn giá sau V – Khuyến mãi + Giảm trừ * Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như đã mô tả ở cột "Số đơn hàng trong ngày" * Format tiền tệ phần nghìn |
| RedV1.1.0 20/4/2026: Cập nhật lại cách tính cột “Tổng số điểm bán trong tuyến”  = Tổng số điểm bán thuộc tuyến thực tế trong ngày | | | | |
| Tổng số điểm bán trong tuyến | Datacolumn | Không | Không | 1. **Hiện tại: Báo cáo → Tuyến bán hàng → Tổng hợp viếng thăm điểm bán** 2. Cột “Tổng số điểm bán trong tuyến” = Điểm bán trong tuyến thực tế + Điểm bán viếng thăm ngoại tuyến (Tức là Tất cả các điểm bán trên MCP) 3. **Expected Rule (Rule mới):**    * Tổng số điểm bán trong tuyến: **Lấy tổng số điểm bán trong tuyến thực tế bán hàng trong ngày làm việc** |