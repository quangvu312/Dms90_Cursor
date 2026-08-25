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

# Báo cáo doanh số tháng

**Quy tắc tính doanh số:**

* Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên đang login đặt hàng trong khoảng thời gian được chọn. Doanh số = Số lượng x giá bán (Giá bán chưa  tính VAT, không tính toán CTKM)
* Trường hợp user login = Salesman, thì xem doanh số của nhân viên Salesman
* Trường hợp user login = SUP, user được chọn = SUP, thì xem doanh số của nhân viên SUP
* Trường hợp user login = SUP, user được chọn = Salesman, thì xem doanh số của nhân viên Salesman
* Format tiền tệ
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như:
  + Tính đơn hàng trong tuyến, ngoại tuyến, chăm sóc. Đơn hàng được tạo trên App và Web có chọn thông tin nhân viên
  + Đơn hàng phải có trạng thái = Đã xuất kho trong khoảng thời gian xem báo cáo, không có đơn hàng trả
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
| Thời gian | * Hiển thị select gồm Tháng/Năm để user chọn. * Có thể chọn Từ tháng - Đến tháng      * Có thể chọn bất cứ khoảng tháng nào. Chọn tối đa 6 tháng. * Mặc định chọn: 5 tháng liền trước → Tháng hiện tại (Ví dụ tháng hiện tại là 02/2025, thì lấy thời gian từ tháng 09/2024 → 02/2025) * Thời gian này sử dụng để tính toán báo cáo dựa theo ngày tạo đơn hàng * Đến tháng >= Từ tháng * Hệ thống sẽ dựa trên thời gian đã chọn ở trường này để hiển thị dữ liệu cho biểu đồ và danh sách đơn hàng bên dưới (Tab Tổng, Tab Sản Phẩm, Tab Điểm Bán) |

## Tab Tổng

| Chức năng | Mô tả |
| --- | --- |
| Biểu đồ | * **Trục tung (Y - Giá trị doanh số)**   + Đơn vị: **Triệu đồng (triệu ₫)**   + Thể hiện **doanh số bán hàng từ tháng đến tháng của của nhân viên đang login**.   + Các mức giá trị trên trục tung theo quy tắc: [Cách Phân chia trục tung cho các biểu đồ dạng cột trên hệ thống](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App#SalesmanApp-C%C3%A1chPh%C3%A2nchiatr%E1%BB%A5ctungchoc%C3%A1cbi%E1%BB%83u%C4%91%E1%BB%93d%E1%BA%A1ngc%E1%BB%99ttr%C3%AAnh%E1%BB%87th%E1%BB%91ng) * **Trục hoành (X - Thời gian)**   + Đơn vị: Tháng (MM/YY)     - Mặc định trên 1 view biểu đồ là 6 tháng     - Có thể trượt ngang để xem các tháng tiếp theo   + Hiển thị doanh số theo từng tháng * Có thể chọn vào cột trên biểu đồ hoặc chọn vào Tháng trên trục hoành để hiển thị chi tiết báo cáo bên dưới |
| Thông tin báo cáo | Thông tin báo cáo sẽ thay đổi khi chọn vào cột trên biểu đồ hoặc chọn vào Tháng trên trục hoành  Hiển thị mặc định thông tin của cột đầu tiên trên báo cáo.  Doanh số: Hiển thị thông tin Doanh số của nhân viên đang login trong các tháng được chọn. Format tiền tệ hàng nghìn kèm icon tiền tệ  Số đơn hàng: Hiển thị thông tin Số đơn hàng trong các tháng được chọn  10 sản phẩm bán nhiều nhất: Hiển thị thông tin sản phẩm được đặt hàng nhiều nhất trong các tháng được chọn. Thông tin bao gồm:   * Hình ảnh sản phẩm * Tên sản phẩm * Đơn vị cơ bản * Số lượng sản phẩm được đặt theo đơn vị cơ bản (Đưa về đơn vị cơ bản, sản phẩm nào có số lượng đặt nhiều nhất thì đưa lên đầu tiên) |
| Xem thêm | * Nhấn vào xem thêm, hiển thị thông tin chi tiết doanh số theo tháng được chọn:   + Doanh số: Hiển thị thông tin Doanh số trong tháng được chọn. Format tiền tệ hàng nghìn kèm icon tiền tệ   + Số đơn hàng: Hiển thị thông tin Số đơn hàng trong tháng được chọn   + Danh sách đơn hàng: Hiển thị thông tin danh sách đơn hàng trong tháng được chọn.     - Thông tin mã của đơn hàng     - Thời gian tạo đơn hàng: Format: hh:mm dd/mm/yyyy. Sắp xếp đơn hàng theo ngày tạo đơn hàng từ mới nhất → cũ nhất.     - Trạng thái của đơn hàng     - Thông tin điểm bán trên đơn hàng        * Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.       * Mã điểm bán       * Tên điểm bán       * Địa chỉ điểm bán       * Số điện thoại điểm bán     - Thông tin nhà phân phối user đã chọn để tạo đơn hàng     - Loại đơn hàng     - Nguồn tạo đơn hàng     - Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng: Format tiền tệ hàng nghìn kèm icon tiền tệ     - Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53031629#Khuyếnmãiđồngthời-MôtảkhuyếnmãitrênmànhìnhXácnhậnđơnhàng/Chitiếtđơnhàng)(Có kèm thông tin CTKM) |

## Tab Sản phẩm

| Chức năng | Mô tả |
| --- | --- |
| Tìm kiếm | Cho phép nhập text tìm kiếm sản phẩm theo mã mã sản phẩm, tên sản phẩm   * Tooltip: Tìm kiếm theo Mã sản phẩm, Tên sản phẩm * Placeholder: Tìm kiếm theo Mã sản phẩm, Tên sản phẩm * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm → Trên danh sách sẽ hiển thị thông tin sản phẩm phù hợp với thông tin đã nhập (Search like) |
| Thông tin báo cáo | Hiển thị thông tin sản phẩm được nhân viên đang login đặt hàng trong các tháng được chọn. Thông tin bao gồm:   * Hình ảnh sản phẩm * Tên sản phẩm * Mã sản phẩm * VAT * Đơn vị: Trường hợp bán nhiều sản phẩm thì hiển thị nhiều dòng đơn vị * Đơn giá của sản phẩm: Lấy đơn giá theo thời điểm hiện tại * Số lượng sản phẩm được đặt theo đơn vị, lấy theo thông tin số lượng trên đơn hàng trên các tháng được chọn * Doanh số sản phẩm theo từng đơn vị: Doanh số = Số lượng x giá bán (không VAT) (Giá bán lấy trên đơn hàng tại thời điểm đơn hàng ở trạng thái Đã xuất kho) * Doanh thu sản phẩm theo từng đơn vị: Doanh thu= Số lượng x giá bán (tính VAT) - KM +/- Tiền điều chỉnh (Giá bán lấy trên đơn hàng tại thời điểm đơn hàng ở trạng thái Đã xuất kho)   Sản phẩm trên đơn hàng đủ điều kiện lên báo cáo sẽ tuân theo quy tắc tính doanh số được mô tả đầu tài liệu này |
| View thu gọn |  |
| View mở rộng |  |
| Mở rộng tất cả/Thu gọn tất cả | Mặc định khi mở màn hinh sẽ hiển thị view thu gọn tất cả các card sản phẩm  Trường hợp user muốn xem đầy đủ tất cả các card sản phẩm → chọn Mở rộng tất cả → Lúc nào text Mở rộng tất cả sẽ đổi tên thành → Thu gọn tất cả  Khi ở trạng thái thu gọn, chỉ có 1 số card được mở rộng thì text vẫn giữ "Mở rộng tất cả", khi tất cả các card đều đã được mở rộng text sẽ đổi thành "Thu gọn tất cả"  Khi ở trạng thaí mở rộng, chỉ có 1 số card được thu gọn, thì text vẫn giữ "Thu gọn tất cả", khi tất cả các card đều đã được thu gọn text sẽ đổi thành"Mở rộng tất cả" |

## Tab Điểm bán

| Chức năng | Mô tả |
| --- | --- |
| Tìm kiếm | Cho phép nhập text tìm kiếm theo Mã, tên, số điện thoại điểm bán   * Tooltip: Tìm kiếm theo Mã, tên, số điện thoại điểm bán * Placeholder: Tìm kiếm theo Mã, tên, số điện thoại điểm bán * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm → Trên danh sách sẽ hiển thị thông tin điểm bán với thông tin đã nhập (Search like) |
| Thông tin báo cáo | Hiển thị thông tin điểm bán mà nhân viên  đang login đã đặt hàng trong các tháng được chọn   * Hình ảnh điểm bán * Tên điểm bán * Mã điểm bán * Số điện thoại điểm bán * Địa chỉ điểm bán * Doanh số: Doanh số trên các đơn hàng mà điểm bán đã đặt. Doanh số = Số lượng x giá bán (không VAT), thông tin lấy từ đơn hàng mà điểm bán đã đặt * Doanh thu: Doanh thu trên các đơn hàng mà điểm bán đã đặt. Doanh thu = Số lượng x giá bán (tính VAT) - KM +/- Tiền điều chỉnh, thông tin lấy từ đơn hàng mà điểm bán đã đặt * Số lượng SP đã đặt Tổng số lượng sản phẩm mà điểm bán đã đặt trong các tháng được chọn   + Chọn vào trường này sẽ hiển thị thông tin chi tiết sản phẩm mà điểm bán đã đặt trong các tháng được chọn:     - Tìm kiếm, Thông tin sản phẩm, thu gọn, mở rộng, thu gọn tất cả, mở rộng tất cả giống đã mô tả ở tab Sản phẩm     Đơn hàng đủ điều kiện lên báo cáo sẽ tuân theo quy tắc tính doanh số được mô tả đầu tài liệu này |