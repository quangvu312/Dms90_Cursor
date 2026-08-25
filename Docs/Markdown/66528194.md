|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Link doc hiện tại: [[HO] Báo cáo Độ Phủ Theo Sản Phẩm - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53037847)

# Màn hình Báo cáo độ phủ theo sản phẩm

| Tên Trường | Loại Dữ Liệu | Chỉnh Sửa? | Bắt Buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Bộ lọc | | | | |
| Trạng thái đơn hàng | Selectbox multichoice | Có | Không | * **Mở danh sách**:    + Khi người dùng nhấp vào trường "Trạng thái đơn hàng" hiển thị danh sách tất cả trạng thái đơn hàng, trừ trạng thái Hủy.   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn   + Placeholder: Theo [rule chung](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO)  "Chọn [Tên]" * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Tên Trạng thái đơn hàng   + Người dùng có thể chọn nhiều Trạng thái đơn hàng để lọc dữ liệu   + Trường hợp không có Trạng thái đơn hàng nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * **Hiển thị lựa chọn:**     + Trạng thái đơn hàng đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags).   + Trường hợp bỏ chọn Trạng thái đơn hàng trong hộp chọn thì hiểu là chọn tất cả các Trạng thái đơn hàng trong hộp chọn   + Các trạng thái đơn hàng được chọn sẽ được tính theo điều kiện "**Hoặc**"     - Nghĩa là sẽ lấy tất cả các dữ liệu có trạng thái được chọn.     - Ví dụ lấy đơn hàng có trạng thái Đã duyệt hoặc Đã xuất kho * **Kết quả lọc:**    + Thông tin các cột "**Số lượng điểm bán có đơn hàng**", **"Số đơn hàng"**, "**Doanh số trước VAT**", "**Doanh số sau VAT**" sẽ được tính toán dựa trên trạng thái được chọn ở trường này. * **Xóa lựa chọn:**    + Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Trạng thái đơn hàng không mong muốn. |
| Dữ liệu báo cáo | | | | |
| Số lượng điểm bán có đơn hàng | Datacolumn | Không | Không | * Đếm tổng số lượng điểm bán của NPP có đặt hàng và trên đơn hàng có sản phẩm bên trên và trong khoảng thời gian được chọn * Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện dưới đây  * + Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DBáoCáo-Côngthứctínhdoanhsố)   + Nguồn đơn hàng: Chỉ cần có đơn hàng là sẽ đếm, không quan tâm trong tuyến hay ngoại tuyến hay tạo ở chức năng chăm sóc hay tạo trên Portal   + Trạng thái đơn hàng: Trạng thái được chọn ở trường "Trạng thái đơn hàng" ở bộ lọc |
| Số đơn bán hàng | Datacolumn | Không | Không | * Đếm tổng số lượng đơn bán hàng của NPP có đặt hàng và trên đơn hàng có sản phẩm bên trên và trong khoảng thời gian được chọn  * Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như đã mô tả ở cột "Số lượng điểm bán có đơn hàng" |
| Doanh số trước VAT | Datacolumn | Không | Không | Doanh số đổi thành "Doanh số trước VAT"  Tính tổng doanh số đơn hàng trong ngày viếng thăm của điểm bán   * **Doanh số trước VAT**= Số lượng x giá bán (Giá bán chưa tính VAT, không tính toán CTKM) * Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như đã mô tả ở cột "Số lượng điểm bán có đơn hàng" * Format tiền tệ phần nghìn |
| Doanh số sau VAT | Datacolumn | Không | Không | Doanh thu đơn hàng trong ngày đổi thành "doanh số sau VAT"  Tính tổng doanh số đơn hàng trong ngày viếng thăm của điểm bán   * **Doanh số sau VAT** = Số lượng × Đơn giá sau V – Khuyến mãi + Giảm trừ * Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như đã mô tả ở cột "Số lượng điểm bán có đơn hàng" * Format tiền tệ phần nghìn   Thông tin ghi nhận trên từng lần viếng thăm điểm bán trong ngày |
| Tỷ trọng doanh số trước VAT (%) | Datacolumn | Không | Không | = Doanh số trước VAT của từng NPP/Doanh số tổng trước VAT \*100  Lấy 2 số thập phân sau dấu phẩy |
| Tỷ trọng doanh số sau VAT (%) | Datacolumn | Không | Không | = Doanh số sau VAT của từng NPP/Doanh số tổng sau VAT \*100  Lấy 2 số thập phân sau dấu phẩy |
| Tính tổng theo từng sản phẩm | | | | |
| Tổng doanh số | Datacolumn | Không | Không | Tính tổng doanh số theo từng sản phẩm   * Format tiền tệ |
| Tổng số lượng | Datacolumn | Không | Không | Tính tổng số lượng theo từng sản phẩm   * Format phần nghìn |
| Tổng tỷ trọng doanh số trước VAT (%) | Datacolumn | Không | Không | Luôn hiển thị 100% |
| Tổng tỷ trọng doanh số sau VAT (%) | Datacolumn | Không | Không | Luôn hiển thị 100% |

# Export

Template export thay đổi: