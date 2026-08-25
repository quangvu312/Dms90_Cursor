|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-255] [AppQL] Homepage - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-255) |
| Epic | [[ECDM-253] MANAGER APP - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-253) |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0: Phase 1  RedV1.1.0: Phase 2 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Màn hình chính

* Quy tắc tính doanh số:

  + Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên đặt hàng trong khoảng thời gian được chọn. Doanh số = Số lượng x giá bán (Giá bán chưa  tính VAT, không tính toán CTKM)
  + Format tiền tệ
  + Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như:
    - Tính đơn hàng trong tuyến, ngoại tuyến, chăm sóc. Đơn hàng được tạo trên App và Web có chọn thông tin nhân viên
    - Đơn hàng phải có trạng thái = Đã xuất kho trong khoảng thời gian xem báo cáo, không có đơn hàng trả
    - Đơn hàng trả
      * Chỉ tính trả nguyên đơn
      * Phải có ngày trả hàng trong khoảng thời gian xem báo cáo
      * Phải có trạng thái = Đã duyệt
    - Ví dụ:
      * Ngày viếng thăm là 10/1, có đặt đơn hàng
      * Ngày 11/1 đơn hàng chuyển trạng thái Đã xuất kho
      * Ngày 12/1 điểm bán trả đơn hàng, ngày trả hàng = 12/1
      * Xem báo cáo
        + Xem báo cáo ngày 10/1, điểm bán không có đơn hàng
        + Xem báo cáo ngày 11/1, điểm bán có đơn hàng (giả định xem sau thời điểm duyệt đơn hàng)
        + Xem báo cáo ngày 12/1, điểm bán không có đơn hàng (giả định xem sau thời điểm trả đơn hàng)

| Trường dữ liệu | Mô tả |
| --- | --- |
| Tên tài khoản đang login | Hiển thị thông tin tên tài khoản đang login |
| Thông báo | * **Biểu tượng thông báo** thể hiện trạng thái thông báo trên ứng dụng. * Khi có thông báo mới, sẽ xuất hiện **số lượng thông báo** bên cạnh icon để báo hiệu cho người dùng rằng có các thông báo chưa đọc. * Sẽ mô tả chi tiết ở chức năng Thông báo |
| Thông tin đang xem | Khi nhân viên mới đăng nhập, hiển thị tên, ảnh đại diện, và chức vụ của nhân viên đang đăng nhập  Nhân viên có thể chọn để đổi lại nhân viên khác, khi đổi sang nhân viên khác trường này sẽ hiển thị thông tin nhân viên được chọn để xem dữ liệu |
| Xem thông tin của tôi | Nhân viên có thể chọn để đổi lại nhân viên khác, khi đổi sang nhân viên khác trường **Thông tin đang xem** sẽ hiển thị thông tin nhân viên được chọn để xem dữ liệu  Khi nhấn vào trường này sẽ thực hiện quay về tài khoản nhân viên đang đăng nhập và hiển thị dữ liệu của nhân viên đang đăng nhập |
| Đổi | Chức năng được mô tả ở [[Manager App] Chọn nhân viên và xem danh sách cây Salesforce nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53035242) |
| Chỉ số hoạt động trong ngày  RedV1.1.0 | Danh sách các chỉ số hoạt động trong ngày   | Chỉ số | Kế hoạch | Thực đạt | | --- | --- | --- | | Kế hoạch viếng thăm | Tổng kế hoạch:  Tổng số điểm bán trên tuyến thực tế của nhân viên đang chọn và tất cả nhân viên cấp dưới của nhân viên đang chọn trong ngày hiện tại (Có đếm trùng điểm bán, 1 điểm bán 2 nhân viên viếng thăm thì đếm = 2)  Nếu ngày hiện tại không có kế hoạch viếng thăm thì Tổng kế hoạch = Đã viếng thăm = Chưa viếng thăm = 0  Chart % luôn = 0% | * Đã viếng thăm:   + Tổng số điểm bán trong tuyến của nhân viên đang chọn và tất cả nhân viên cấp dưới của nhân viên đang chọn có thực hiện viếng thăm (Phải checkin và checkout, tính luôn trường hợp checkout tự động) trong ngày hiện tại   + Chỉ đếm điểm bán viếng thăm trong tuyến   + Có đếm trùng điểm bán, 1 điểm bán 2 nhân viên viếng thăm thì đếm = 2   + 1 điểm bán viếng thăm 2 lần thì đếm 1   + % Đã viếng thăm = Đã viếng thăm/Tổng kế hoạch\*100 (Lấy 2 số thập phân) * Chưa viếng thăm   + = Tổng kế hoạch - Đã viếng thăm   + % Chưa viếng thăm = 100 - % Đã viếng thăm (Lấy 2 số thập phân) | | Số điểm bán đã viếng thăm | * Tổng kế hoạch:   + Tổng số điểm bán trong tuyến của nhân viên đang chọn và tất cả nhân viên cấp dưới của nhân viên đang chọn có thực hiện viếng thăm (Phải checkin và checkout, tính luôn trường hợp checkout tự động) trong ngày hiện tại.   + Đếm viếng thăm trong tuyến và ngoại tuyến   + Có đếm trùng điểm bán, 1 điểm bán 2 nhân viên viếng thăm thì đếm = 2   + 1 điểm bán viếng thăm 2 lần thì đếm 1 * Nếu ngày hiện tại chưa viếng thăm bất cứ điểm bán nào thì Số điểm bán đã viếng thăm = Trong tuyến = Ngoại tuyến = 0. Chart % luôn = 0% | * Trong tuyến:   + Quy tắc đếm như cột kế hoạch nhưng chỉ đếm trong tuyến   + % = Trong tuyến/Tổng kế hoạch\*100 (Lấy 2 số thập phân) * Ngoại tuyến:   + = Tổng kế hoạch - Trong tuyến   + % = 100 - % trong tuyến (Lấy 2 số thập phân) | | Đơn hàng | Tổng kế hoạch:   * Hiển thị thông tin Số đơn hàng của nhân viên đang chọn và tất cả nhân viên cấp dưới của nhân viên đang chọn trong ngày hiện tại. Quy tắc tính đơn hàng hợp lệ được mô tả ở đầu tài liệu này. * Nếu ngày hiện tại chưa tạo bất cứ đơn hàng nào thì Tổng đơn hàng = Trong tuyến = Ngoại tuyến = 0. Chart % luôn = 0% | * Trong tuyến:   + Quy tắc đếm như cột kế hoạch nhưng chỉ đếm các đơn hàng được tạo ở chức năng viếng thăm trên App (không tính đơn hàng trên web được tạo trong thời điểm đang viếng thăm)   + % = Trong tuyến/Tổng kế hoạch\*100 (Lấy 2 số thập phân) * Ngoại tuyến:   + Tổng kế hoạch - Trong tuyến   + % = 100 - % trong tuyến (Lấy 2 số thập phân) |   Khi các chỉ số hoạt động = 0 thì chart hiển thị xám như sau: |
| Chỉ tiêu KPI  RedV1.1.0 | Danh sách các chỉ tiêu KPI sẽ được mô tả khi phân tích chức năng KPI   * Tên KPI * Thực đạt * Chỉ tiêu * %thực đạt/Chỉ tiêu: Lấy 2 chữ số thập phân sau dấu phẩy * Với mỗi KPI: Hiển thị thêm thông tin Kế hoạch trong ngày + chỉ tiêu cần đạt theo timegone sẽ hiển thị ẩn/hiện theo config của từng KPI. Và chỉ hiển thị ở loại KPI theo thời gian và KPI theo tháng. Sẽ được mô tả chi tiết ở [Manager\_APP] Báo cáo KPI   Xem tất cả: Nhấn xem tất cả để hiển thị tất cả KPI được gán cho nhân viên đang đăng nhập và tất cả nhân viên cấp dưới của nhân viên đang đăng nhập.  Tháng/Theo giời gian/Ngày   * Người dùng chọn tab Tháng sẽ hiển thị danh sách các KPI theo tháng * Người dùng chọn tab Theo thời gian sẽ hiển thị danh sách các KPI theo thời gian * Người dùng chọn tab Ngày sẽ hiển thị danh sách các KPI theo ngày * Hiển thị mặc định 4 chỉ tiêu KPI cho mỗi loại * Khi nhấn Xem Tất cả sẽ hiển thị màn hình chi tiết KPI, sẽ được mô tả khi phân tích chức năng KPI     Thanh tiến trình KPI:   * Đỏ: % thực đạt từ: 0 - 49% * Vàng: % thực đạt từ: 50 - 99 * Xanh: % thực đạt >100 |
| Doanh số 7 ngày gần nhất  RedV1.1.0 | Hiển thị thông tin doanh số/đơn hàng 7 ngày gần nhất của của nhân viên đang chọn và tất cả nhân viên cấp dưới của nhân viên đang chọn (Ngày hiện tại + 6 ngày liền trước)   * **Trục tung (Y - Giá trị doanh số)**   + Đơn vị: **Triệu đồng (triệu ₫)**   + Thể hiện**doanh số bán hàng theo thời gian.**   + Các mức giá trị trên trục tung theo quy tắc: [Cách Phân chia trục tung cho các biểu đồ dạng cột trên hệ thống](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App#SalesmanApp-C%C3%A1chPh%C3%A2nchiatr%E1%BB%A5ctungchoc%C3%A1cbi%E1%BB%83u%C4%91%E1%BB%93d%E1%BA%A1ngc%E1%BB%99ttr%C3%AAnh%E1%BB%87th%E1%BB%91ng) * **Trục hoành (X - Thời gian)**  * + Thời gian: <<< (Ngày hiện tại - 6) → Ngày hiện tại >>>   + Xem thêm: Click vào button này, điều hướng đến chức năng [Manager\_App] Báo cáo doanh số ngày và tự động điền thời gian là <<< (Ngày hiện tại - 6) →  Ngày hiện tại >>> và báo cáo cũng hiển thị thông tin theo thời gian này.  * + Số đơn hàng: Tổng số đơn hàng trong 7 ngày gần nhất của nhân viên. Quy tắc tính đơn hàng hợp lệ được mô tả ở đầu tài liệu này.   + Tổng tiền: Tổng tiền đơn hàng trong 7 ngày gần nhất của nhân viên.     - Quy tắc tính doanh số được mô tả ở đầu tài liệu này     - Đơn vị là triệu đồng, lấy 2 số thập phân sau dấu phẩy   + Khi chọn vào ngày trên biểu đồ hoặc chọn vào các chấm trên biểu đồ sẽ hiển thị chi tiết như sau: |
| **Thanh điều hướng (Menu dưới cùng)** | * Bao gồm các mục:   + **Tổng quan**: Màn hình chính, nơi hiển thị các số liệu và chỉ số tổng quan.   + **Công việc**: Truy cập vào các công việc cần thực hiện hoặc danh sách nhiệm vụ.   + **Báo cáo**: Truy cập các báo cáo chi tiết về các chỉ số và hoạt động.   + **Khác**: Các cài đặt và tính năng khác của ứng dụng. |
|  | Icon, nhấn vào icon này, chuyển về đầu trang  Khi mới vào màn hình Home thì sẽ không xuất hiện icon này,  khi user scroll xuống hết 1 màn hình thì mới hiện ra, khi user click vào thì chuyển lên đầu trang, đồng thời ẩn nút. |