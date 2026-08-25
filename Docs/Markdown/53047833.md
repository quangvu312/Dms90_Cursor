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

# Báo cáo theo dõi đơn hàng

**Quy tắc tính doanh số:**

* Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên đặt hàng trong khoảng thời gian được chọn.
* Đơn hàng được đặt trên App + Web có chọn thông tin nhân viên.
* Đơn hàng của tất cả khách hàng trong tuyến được chọn của nhân viên.
* Doanh số = Số lượng x giá bán (Giá bán chưa  tính VAT, không tính toán CTKM)
* Format tiền tệ
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như:
  + Tính đơn hàng trong tuyến, ngoại tuyến, chăm sóc. Đơn hàng được tạo trên App và Web có chọn thông tin nhân viên
  + Đơn hàng phải có trạng thái = Đã duyệt trong khoảng thời gian xem báo cáo, không có đơn hàng trả
  + Đơn hàng trả
    - Chỉ tính trả nguyên đơn
    - Phải có ngày trả hàng trong khoảng thời gian xem báo cáo
    - Phải có trạng thái = Đã duyệt
  + Ví dụ:
    - Ngày viếng thăm là 10/1, có đặt đơn hàng
    - Ngày 11/1 đơn hàng chuyển trạng thái Đã duyệt
    - Ngày 12/1 điểm bán trả đơn hàng, ngày trả hàng = 12/1
    - Xem báo cáo
      * Xem báo cáo ngày 10/1, điểm bán không có đơn hàng
      * Xem báo cáo ngày 11/1, điểm bán có đơn hàng (giả định xem sau thời điểm duyệt đơn hàng)
      * Xem báo cáo ngày 12/1, điểm bán không có đơn hàng (giả định xem sau thời điểm trả đơn hàng)

| Chức năng | Mô tả |
| --- | --- |
| Tìm kiếm | Cho phép nhập text tìm kiếm theo Mã đơn hàng, Mã, tên, số dt điểm bán   * Tooltip: Tìm kiếm theo Mã đơn hàng, Mã, tên, số dt điểm bán * Placeholder: Tìm kiếm theo Mã đơn hàng, Mã, tên, số dt điểm bán * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm → Trên biểu đồ và danh sách sẽ hiển thị thông tin đơn hàng với thông tin đã nhập (Search like) |
| Thời gian | * Thời gian từ đầu tháng đến cuối tháng của ngày hiện tại (Ví dụ ngày hiện tại là 10/12/2024, thì lấy thời gian từ 1/12 - 31/12) * Thời gian này sử dụng để tính hiển thị dữ liệu đơn hàng trên báo cáo dựa theo ngày tạo đơn hàng * User có thể nhấn để chọn lại thời gian      * Đến ngày >= Từ ngày * Từ ngày → Đến ngày có thể chọn bất cứ khoảng thời gian nào miễn là Từ ngày → Đến ngày trong vòng 30 ngày. * Hệ thống sẽ dựa trên thời gian đã chọn ở trường này để hiển thị dữ liệu cho biểu đồ và danh sách đơn hàng bên dưới |
| Bộ lọc | Click vào bộ lọc hiển thị màn hình lọc như sau:  **Có thể lọc theo các tiêu chí sau**   * **Loại đơn hàng (multichoice)**   + Đơn đặt: Đơn đặt mua hàng     - Được tạo trên App Salesman DMS (ở chức năng viếng thăm điểm bán, chăm sóc điểm bán)     - Được tạo trên web portal   + Đơn trả: Hiển thị đơn trả hàng được tạo trên web portal (trả nguyên đơn), loại đơn = Đơn trả hàng,   + Đơn trả thưởng: Đơn trả thưởng được tạo ra khi người dùng trả thưởng CTTB/CTTL với loại phần thưởng = số lượng sản phẩm. Sẽ mô tả chi tiết ở giai đoạn phát triển chức năng trả thưởng CTTB/CTTL   + Đơn vansales: Đơn hàng Vansales được tạo trên App từ chức năng Đặt hàng   + Mặc định không chọn dữ liệu nào <=> chọn tất cả dữ liệu để lọc * **Nguồn tạo (multichoice)**   + APP: Đơn hàng được tạo trên app Salesman   + WEB: Đơn hàng được tạo trên web portal có nhân viên được chọn là nhân viên đang đăng nhập   + Mặc định không chọn dữ liệu nào <=> chọn tất cả dữ liệu để lọc * **Trạng thái đơn hàng (multichoice):**   + Khởi tạo: Nhân viên mới tạo đơn hàng   + Đã duyệt: Đơn hàng được chuyển sang trạng thái Đã duyệt.   + Đã hủy: Đơn hàng được chuyển sang trạng thái Đã hủy.   + Đã xuất kho: Đơn hàng có trạng thái Đã duyệt và có Phiếu xuất kho ở trạng thái Đã duyệt.   + Mặc định không chọn dữ liệu nào <=> chọn tất cả dữ liệu để lọc * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào biểu đồ và danh sách đơn hàng và reload danh sách đơn hàng hiển thị kết quả tìm kiếm |
| **Doanh số trong n ngày** | |
| Doanh số trong n ngày | Hiển thị tổng số ngày được chọn trên vùng chọn thời gian  Doanh số:   * Hiển thị tổng doanh số của nhân viên đang đăng nhập trong khoảng thời gian được chọn theo bộ lọc đã chọn * Format tiền tệ + đơn vị "đ"   Số đơn hàng:   * Hiển thị tổng số lượng đơn hàng của nhân viên đang đăng nhập trong khoảng thời gian được chọn theo bộ lọc đã chọn * Format phần nghìn. |
| Biểu đồ | * **Trục tung (Y - Giá trị doanh số)**   + Đơn vị: **Doanh số**   + Thể hiện **Doanh số đơn hàng theo thời gian trên**bộ lọc của nhân viên đang đăng nhập trong khoảng thời gian được chọn****   + Các mức giá trị trên trục tung theo quy tắc: [Cách Phân chia trục tung cho các biểu đồ dạng cột trên hệ thống](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App#SalesmanApp-C%C3%A1chPh%C3%A2nchiatr%E1%BB%A5ctungchoc%C3%A1cbi%E1%BB%83u%C4%91%E1%BB%93d%E1%BA%A1ngc%E1%BB%99ttr%C3%AAnh%E1%BB%87th%E1%BB%91ng) * **Trục hoành (X - Thời gian)**    + Đơn vị: Ngày (DD/MM)     - Hiển thị tất cả các ngày được chọn     - Mặc định trên 1 view biểu đồ là 6 ngày     - Có thể trượt ngang để xem các ngày tiếp theo   + Hiển thị doanh số theo từng ngày * Có thể chọn vào cột trên biểu đồ hoặc chọn vào Ngày trên trục hoành để hiển thị tooltip thông tin doanh số đơn hàng theo từng ngày |
| Thu gọn | * Có thể thu gọn nguyên cụm này tới phần Danh sách đơn hàng để xem được nhiều đơn hàng hơn * Mặc định khi mở màn hình sẽ thu gọn biểu đồ |
| Danh sách đơn hàng | |
| Danh sách đơn hàng | * Hiển thị danh sách tất cả đơn hàng của tất cả điểm bán được tạo bởi của nhân viên đang đăng nhập trong khoảng thời gian được chọn theo bộ lọc đã chọn:  * Hiển thị tất cả đơn hàng theo bộ lọc * Group theo ngày đặt đơn hàng, ngày gần nhất sẽ để trên lên   + Ngày đặt đơn hàng = Ngày hiện tại, label sẽ hiển thị "Hôm nay"   + Trong 1 group ngày tạo, sắp xếp đơn hàng theo thời gian cập nhật từ mới nhất → Cũ nhất |
| Mã đơn hàng | Thông tin mã của đơn hàng  : Đơn hàng có dấu hiệu này là đơn hàng có loại đơn = đơn trả, và loại trả hàng = trả nguyên đơn  : Đơn hàng có dấu hiệu này là đơn hàng có loại đơn = đơn đặt nhưng đã bị trả hàng và loại trả hàng = trả nguyên đơn (đơn hàng gốc của đơn trả), đơn trả có trạng thái = Đã duyệt |
| Thời gian tạo đơn | Thời gian tạo đơn hàng  Format: dd/mm/yyyy |
| Trạng thái | Trạng thái của đơn hàng   * + Khởi tạo: Nhân viên mới tạo đơn hàng   + Đã duyệt: Đơn hàng được chuyển sang trạng thái Đã duyệt.   + Đã hủy: Đơn hàng được chuyển sang trạng thái Đã hủy.   + Đã xuất kho: Đơn hàng có trạng thái Đã duyệt và có Phiếu xuất kho ở trạng thái Đã duyệt. |
| Điểm bán | Thông tin điểm bán trên đơn hàng   * Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán * Mã điểm bán * Tên điểm bán * Địa chỉ điểm bán * Số điện thoại điểm bán |
| Nhà phân phối | Thông tin nhà phân phối user đã chọn để tạo đơn hàng |
| Loại đơn | Loại đơn hàng:   * Đơn đặt: Đơn đặt mua hàng   + Được tạo trên App Salesman DMS (ở chức năng viếng thăm điểm bán, chăm sóc điểm bán)   + Được tạo trên web portal * Đơn trả: Hiển thị đơn trả hàng được tạo trên web portal (trả nguyên đơn, trả hàng lẻ), loại đơn = Đơn trả hàng, * Đơn trả thưởng: Đơn trả thưởng được tạo ra khi người dùng trả thưởng CTTB/CTTL với loại phần thưởng = số lượng sản phẩm. Sẽ mô tả chi tiết ở giai đoạn phát triển chức năng trả thưởng CTTB/CTTL * Đơn vansales: Đơn hàng Vansales được tạo trên App từ chức năng Đặt hàng |
| Nguồn tạo | Nguồn tạo:   * APP: Đơn hàng được tạo trên app Salesman * WEB: Đơn hàng được tạo trên web portal có chọn nhân viên là nhân viên đang đăng nhập |
| Giá trị đơn hàng | Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng  Format tiền tệ hàng nghìn kèm icon tiền tệ |
| Chi tiết đơn hàng | Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752#id-[SMAPP]%C4%90%E1%BA%B7th%C3%A0ng%E1%BB%9Fnhi%E1%BB%87mv%E1%BB%A5vi%E1%BA%BFngth%C4%83m(kh%C3%B4ngkhuy%E1%BA%BFnm%C3%A3i)-2.2.Chiti%E1%BA%BFt%C4%91%C6%A1nh%C3%A0ngDETAIL_ORDER) |