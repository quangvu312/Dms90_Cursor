**Mục đích:**Cho phép người dùng NPP được phân quyền xem/xuất báo cáo doanh thu theo các khách hàng của đơn vị đang quản lý. Có thể truy vấn theo Thời gian, Khách hàng, Trạng thái đơn hàng.

# Màn hình Báo cáo doanh thu theo điểm bán

Mô tả

* **Lưu ý:**
  + Báo cáo doanh thu theo khách hàng của Nhà phân phối sẽ được truy vấn trongdanh sách khách hàng thuộc quản lý của Nhà phân phối**.** Không được phép truy xuất dữ liệu từ Nhà phân phối khác.
  + Phân quyền chức năng theo [Tài liệu phân quyền](https://kb.finviet.com.vn/x/iG4pAw)

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| **Tìm kiếm**   * Khi lần đầu truy cập vào trang, hệ thống sẽ tự động load báo cáo mặc định bộ lọc:   + Thời gian: Tháng hiện tại (từ ngày đầu tháng tới ngày hiện tại trong tháng)   + **Trạng thái đơn hàng: Đã xuất kho**   + Lấy tất cả các khách hàng thuộc quản lý của NPP | | | | |
| Tìm kiếm theo Mã | Tên | SĐT khách hàng | Textbox | Có | Không | * Tìm kiếm theo mã khách hàng, tên khách hàng, số điện thoại khách hàng (tìm kiếm trong danh sách khách hàng thuộc NPP) * Placeholder và Tootip: Nhập mã, tên, số điện thoại khách hàng * Danh sách doanh thu theo khách hàng sẽ hiển thị theo thông tin khách hàng được tìm kiếm |
| Trạng thái đơn hàng | Selectbox  Onechoice | Có | Không | Lọc danh sách doanh thu tính trên các Trạng thái đơn hàng được chọn   * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái đơn hàng", hệ thống hiển thị danh sách các trạng thái đơn hàng bao gồm:    + Đã duyệt     - Xuất cá đơn sellout ở trạng thái Đã duyệt (không quan tâm đơn Sellout đó đã xuất hay chưa xuất kho)   + Đã xuất kho (mặc định chọn ban đầu)     - Xuất các đơn sellout có phiếu xuất kho ở trạng thái "Đã duyệt" * Chỉ được chọn 1 trạng thái * **Kết quả lọc:** Danh sách sẽ load lại theo bộ lọc người dùng chọn sau khi nhấn nút "Tìm kiếm" |
| Từ ngày - đến ngày | Datepicker (Ngày) | Có | Có | Lọc danh sách doanh thu theo   * Khi mở màn hình Default chọn Ngày bắt đầu là Ngày đầu Tháng hiện tại & Ngày kết thúc là Ngày hiện tại * Người dùng chọn ngày để tìm kiếm tại icon calendar → Hiển thị popup calendar để chọn ngày; Định dạng thời gian: Từ ngày **dd-mm-yyyy****→**Đến ngày**dd-mm-yyyy** * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn:      * Xóa lựa chọn:    + Người dùng có thể nhấn vào trường "Thười gian" và chọn thời gian khác trong lịch.   + Trường hợp người dùng xóa lựa chọn (để trống trường Thời gian) và nhấn tìm kiếm, hiển thị viền đỏ cho trường "Thời gian" và hiển thị text label báo lỗi "Vui lòng chọn thời gian xem báo cáo" * **Kết quả lọc:** Danh sách sẽ load lại theo bộ lọc người dùng chọn sau khi nhấn nút "Tìm kiếm" |
| Tìm kiếm | Button | Có | Không | Khi người dùng nhấn vào **Tìm kiếm**, hệ thống sẽ thực hiện lọc dữ liệu danh sách doanh thu theo khách hàng theo các điều kiện tìm kiếm hiện có và hiển thị kết quả trong danh sách bên dưới. |
| Làm mới | Button | Có | Không | Khi nhấn vào **Làm mới**, toàn bộ các trường tìm kiếm sẽ được reset về trạng thái mặc định   Danh sách dữ liệu đưa về trạng thái default |
| **Lưới danh sách** | | | | |
| **Danh sách doanh thu theo khách hàng**   * **Điều kiện lấy đơn hàng tính cho báo cáo:**    + Số liệu được tính trên các đơn hàng thỏa **TẤT CẢ** các điều kiện dưới đây:      - Có thời gian đặt hàng nằm trong khoảng thời gian được chọn tại filter "Thời gian" của báo cáo     - Đơn hàng được tạo cho khách hàng tương ứng     - Đơn hàng có trạng thái được chọn tại filter "Trạng thái đơn hàng" của báo cáo * **Quy tắc hiển thị dữ liệu báo cáo:**   + Danh sách hiển thị có phân trang. Số bản ghi/trang hiển thị mặc định theo nguyên tắc chung của hệ thống.   + Thứ tự hiển thị:      - Sort theo mã khách hàng (a-z) | | | | |
| **Dòng 1**   * Dòng 1 luôn là dòng hiển thị tổng các giá trị của báo cáo theo bộ lọc xem báo cáo đã chọn (tổng của tập giá trị trích xuất, không tính phân trang) | | | | |
| Tổng cộng | Label | Không | Không | Label "Tổng cộng" là title đánh dấu dòng hiển thị tổng giá trị báo cáo. |
| Số đơn bán | Datacolumn  Number | Không | Không | Tính = sum (Số đơn bán) của các bản ghi trong danh sách được truy xuất theo điều kiện báo cáo (không tính phân trang) |
| Sản lượng | Datacolumn  Number | Không | Không | Tính = sum (Sản lượng) của các bản ghi trong danh sách được truy xuất theo điều kiện báo cáo (không tính phân trang) |
| Số SKU | Datacolumn  Number | Không | Không | Tính = Count Distinct (SKU) của các bản ghi trong danh sách được truy xuất theo điều kiện báo cáo (không tính phân trang) |
| Doanh số trước VAT | Datacolumn  Number | Không | Không | Tính = sum (Doanh số trước VAT) của các bản ghi trong danh sách được truy xuất theo điều kiện báo cáo (không tính phân trang) |
| Doanh số sau VAT | Datacolumn  Number | Không | Không | Tính = sum (Doanh số sau VAT) của các bản ghi trong danh sách được truy xuất theo điều kiện báo cáo (không tính phân trang) |
| **Các dòng dữ liệu báo cáo** | | | | |
| Mã khách hàng | Datacolumn have copy | Không | Không | Hiển thị mã khách hàng  Có thể copy mã khách hàng |
| Tên khách hàng | Datacolumn | Không | Không | Hiển thị tên khách hàng theo mã khách hàng |
| Địa chỉ | Datacolumn | Không | Không | Hiển thị địa chỉ khách hàng theo mã khách hàng |
| Số điện thoại | Datacolumn | Không | Không | Hiển thị số điện thoại khách hàng theo mã khách hàng |
| Số đơn bán | Datacolumn  Number | Không | Không | Hiển thị tổng số đơn hàng đã bán của khách hàng (lấy đơn thỏa điều kiện báo cáo)   * Tính = count (mã đơn hàng) |
| Sản lượng | Datacolumn  Number | Không | Không | Hiển thị tổng số sản lượng trong các đơn hàng đã bán cho khách hàng (lấy đơn thỏa điều kiện báo cáo)   * Tính =**sum (quantity) của các sản phẩm theo đơn vị cơ bản** trong các đơn hàng thỏa điều kiện * Chỉ tính sản phẩm bán, không tính sản phẩm khuyến mãi |
| Số SKU | Datacolumn  Number | Không | Không | Hiển thị tổng số SKU trong các đơn hàng đã bán cho khách hàng (lấy đơn thỏa điều kiện báo cáo)  Trong đó:   * Số SKU trong mỗi đơn hàng = count disticnt (mã sản phẩm) của đơn hàng * Chỉ tính sản phẩm bán, không tính sản phẩm khuyến mãi |
| Doanh số trước VAT | Datacolumn  Number | Không | Không | Hiển thị Doanh số trước VAT trong các đơn hàng đã bán cho khách hàng (lấy đơn thỏa điều kiện báo cáo)  Trong đó:   * **Doanh số trước VAT = Tổng thành tiền trước VAT trong các đơn sellout được lọc** * Chỉ tính sản phẩm bán, không tính sản phẩm khuyến mãi |
| Doanh số sau VAT | Datacolumn Number | Không | Không | Hiển thị Doanh số sau VAT trong các đơn hàng đã bán cho khách hàng (lấy đơn thỏa điều kiện báo cáo)   * **Doanh số sau VAT =** **Tổng thành tiền sau VAT trong các đơn sellout được lọc - Tổng tiền khuyến mãi + Tiền nhập giảm trừ** * Chỉ tính sản phẩm bán, không tính sản phẩm khuyến mãi |

# Export Excel Báo cáo doanh thu theo Khách hàng

# **Chức năng:**

* Nút "Export Excel" cho phép người dùng xuất dữ liệu báo cáo ra một tập tin Excel.
* Nếu không có dữ liệu hoặc lỗi dữ liệu chưa được cập nhật mới nhất → Hiển thị lỗi "Không có dữ liệu hoặc dữ liệu xuất chưa cập nhật để xuất file"
* Nút này giúp người dùng lưu trữ và phân tích dữ liệu báo cáo ngoài ứng dụng, hoặc chia sẻ với các bên liên quan.
* Phân quyền:  người dùng được phân quyền mới được thấy/sử dụng chức năng này

**Cách sử dụng:**

1. **Thiết lập dữ liệu:** Người dùng có thể chọn các bộ lọc và tìm kiếm để hiển thị các bản ghi doanh thu theo Khách hàng mong muốn ra Excel.
2. **Nhấp vào nút:** Khi người dùng nhấp vào nút "Export Excel", hệ thống sẽ tạo và tải về một tập tin Excel chứa dữ liệu báo cáo doanh thu trên danh sách hiện tại (không tính phân trang)

**Lưu ý:**

* Dữ liệu xuất ra sẽ bao gồm các thông tin báo cáo trên danh sách hiện tại (không tính phân trang), theo định dạng và cấu trúc mà ứng dụng đã thiết lập.
* Nút "Export Excel" sẽ xuất dữ liệu dựa trên các bộ lọc và tiêu chí tìm kiếm đã áp dụng, nếu có.
* Template excel như sau:
* Format tên file xuất ra: DoanhThuTheoKhachHang\_DDMMYYYYHHMMSS
* Dữ liệu như đã mô tả bên trên

**Template Excel:**