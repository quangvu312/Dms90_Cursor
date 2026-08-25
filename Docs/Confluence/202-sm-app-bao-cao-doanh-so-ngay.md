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

# Báo cáo doanh số ngày

Quy tắc tính doanh số:

* Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên đặt hàng trong khoảng thời gian được chọn. Doanh số = Số lượng x giá bán (Giá bán chưa  tính VAT, không tính toán CTKM)
* Trường hợp user login = Salesman, thì xem doanh số của nhân viên Salesman
* Trường hợp user login = SUP, user được chọn = SUP, thì xem doanh số của nhân viên SUP
* Trường hợp user login = SUP, user được chọn = Salesman, thì xem doanh số của nhân viên Salesman
* Format tiền tệ
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như:
  + Tính đơn hàng trong tuyến, ngoại tuyến, chăm sóc. Đơn hàng được tạo trên App và Web có chọn thông tin nhân viên
  + Đơn hàng phải có trạng thái = Đã xuất k trong khoảng thời gian xem báo cáo, không có đơn hàng trả
  + Đơn hàng trả
    - Chỉ tính trả nguyên đơn
    - Phải có ngày trả hàng trong khoảng thời gian xem báo cáo
    - Phải có trạng thái = Đã duyệt
  + Ví dụ:
    - Ngày viếng thăm là 10/1, có đặt đơn hàng
    - Ngày 11/1 đơn hàng chuyển trạng thái Đã xuất kho
    - Ngày 12/1 điểm bán trả đơn hàng, ngày trả hàng = 12/1
    - Xem báo cáo
      * Xem báo cáo ngày 10/1, điểm bán không có đơn hàng
      * Xem báo cáo ngày 11/1, điểm bán có đơn hàng (giả định xem sau thời điểm duyệt đơn hàng)
      * Xem báo cáo ngày 12/1, điểm bán không có đơn hàng (giả định xem sau thời điểm trả đơn hàng)

| Chức năng | Mô tả |
| --- | --- |
| Thời gian | * Thời gian từ đầu tháng đến cuối tháng của ngày hiện tại (Ví dụ ngày hiện tại là 10/12/2024, thì lấy thời gian từ 1/12 - 31/12) * Thời gian này sử dụng để tính doanh số trên báo cáo dựa theo ngày tạo đơn hàng * User có thể nhấn để chọn lại thời gian  * Đến ngày >= Từ ngày * Từ ngày → Đến ngày có thể chọn bất cứ khoảng thời gian nào miễn là Từ ngày → Đến ngày trong vòng 30 ngày. * Hệ thống sẽ dựa trên thời gian đã chọn ở trường này để hiển thị dữ liệu cho biểu đồ và danh sách đơn hàng bên dưới |
| Doanh số trong n ngày | Hiển thị tổng số ngày được chọn trên vùng chọn thời gian  Doanh số:   * Hiển thị tổng doanh số của nhân viên đang đăng nhập trong khoảng thời gian được chọn * Format tiền tệ + đơn vị "đ"   Số đơn hàng:   * Hiển thị tổng số lượng đơn hàng của nhân viên đang đăng nhập trong khoảng thời gian được chọn * Format phần nghìn. |
| Biểu đồ | * **Trục tung (Y - Giá trị doanh số)**   + Đơn vị: **Triệu đồng (Triệu ₫)**   + Thể hiện **doanh số bán hàng theo ngày**.   + Các mức giá trị trên trục tung theo quy tắc: [Cách Phân chia trục tung cho các biểu đồ dạng cột trên hệ thống](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App#SalesmanApp-C%C3%A1chPh%C3%A2nchiatr%E1%BB%A5ctungchoc%C3%A1cbi%E1%BB%83u%C4%91%E1%BB%93d%E1%BA%A1ngc%E1%BB%99ttr%C3%AAnh%E1%BB%87th%E1%BB%91ng) * **Trục hoành (X - Thời gian)**   + Đơn vị: Ngày (DD/MM)     - Hiển thị tất cả các ngày được chọn     - Mặc định trên 1 view biểu đồ là 6 ngày     - Có thể trượt ngang để xem các ngày tiếp theo   + Hiển thị doanh số theo từng ngày * Có thể chọn vào cột trên biểu đồ hoặc chọn vào Ngày trên trục hoành để hiển thị:   + Tooltip Thông tin tổng doanh số của nhân viên đang đăng nhập trong khoảng thời gian được chọn   + Chi tiết báo cáo bên dưới |
| Thông tin báo cáo trong ngày | Thông tin báo cáo sẽ thay đổi khi chọn vào cột trên biểu đồ hoặc chọn vào Ngày trên trục hoành  Hiển thị mặc định thông tin của cột đầu tiên trên báo cáo.  Doanh số: Hiển thị thông tin doanh số của nhân viên đang đăng nhập trong ngày được chọn. Format tiền tệ hàng nghìn kèm icon tiền tệ  Số đơn hàng: Hiển thị thông tin Số đơn hàng của nhân viên đang đăng nhập trong ngày được chọn  10 Sản phẩm bán nhiều nhất trong ngày: Hiển thị thông tin sản phẩm được đặt hàng nhiều nhất bởi của nhân viên đang đăng nhập trong ngày được chọn. Thông tin bao gồm:   * Hình ảnh sản phẩm * Tên sản phẩm * Đơn vị cơ bản * Số lượng sản phẩm được đặt theo đơn vị cơ bản (Đưa về đơn vị cơ bản, sản phẩm nào có số lượng đặt nhiều nhất thì đưa lên đầu tiên) |
| Xem thêm | * Nhấn vào Xem thêm, hiển thị thông tin chi tiết doanh số theo ngày được chọn:   + Doanh số: Hiển thị thông tin Doanh số của nhân viên đang đăng nhập trong ngày được chọn. Format tiền tệ hàng nghìn kèm icon tiền tệ   + Số đơn hàng: Hiển thị thông tin Số đơn hàng của nhân viên đang đăng nhập trong ngày được chọn   + Danh sách đơn hàng: Hiển thị thông tin danh sách đơn hàng trong ngày được chọn.     - Thông tin mã của đơn hàng     - Thời gian tạo đơn hàng: Format: hh:mm dd/mm/yyyy. Sắp xếp đơn hàng theo ngày tạo đơn hàng từ mới nhất → cũ nhất.     - Trạng thái của đơn hàng     - Thông tin điểm bán trên đơn hàng        * Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.       * Mã điểm bán       * Tên điểm bán       * Địa chỉ điểm bán       * Số điện thoại điểm bán     - Thông tin nhà phân phối user đã chọn để tạo đơn hàng     - Loại đơn hàng     - Nguồn tạo đơn hàng     - Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng: Format tiền tệ hàng nghìn kèm icon tiền tệ     - Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53031629#Khuyếnmãiđồngthời-MôtảkhuyếnmãitrênmànhìnhXácnhậnđơnhàng/Chitiếtđơnhàng)(Có kèm thông tin CTKM) |