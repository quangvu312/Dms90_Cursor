|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | **Vansales** là một mô hình bán hàng trực tiếp, trong đó nhân viên bán hàng sử dụng xe tải (van) hoặc phương tiện di chuyển để chở hàng hóa và bán trực tiếp cho khách hàng tại các điểm bán lẻ. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Chọn hình thức đặt hàng

Từ các chức năng Tạo đơn hàng:

* Tạo đơn ở chức năng viếng thăm
* Tạo đơn ở chức năng Chăm sóc

Trước khi vào màn hình chọn sản phẩm để tạo một đơn hàng mới, hệ thống thực hiện kiểm tra xem nhân viên có kho vansales hay không (có ít nhất 1 sản phẩm trong kho vansales có tồn kho >0)

* Nếu nhân viên không có kho vansales →vào thẳng màn hình Chọn sản phẩm → Thực hiện bán hàng trên tồn kho của NPP như cũ không thay đổi

* Nếu nhân viên có kho vansales → Hiển thị popup để user chọn hình thức đặt hàng như sau:

* Chọn hình thức Đơn bán hàng → Thực hiện bán hàng trên tồn kho của NPP như cũ không thay đổi
* Chọn hình thức Đơn Vansales → Toàn bộ quy trình bán hàng sẽ kiểm tra trên tồn kho của nhân viên
  + Trường NPP sẽ hiển thị thông tin Kho của nhân viên
  + Kênh bán hàng sẽ giống kênh bán hàng của đơn bán hàng bình thường, sử dụng chung config SALE\_WAREHOUSE\_APP
  + Kho hàng bán sẽ kiểm tra trên kho của nhân viên, kho hàng khuyến mãi cũng sẽ kiểm tra trên kho của nhân viên
  + Đơn hàng khi lưu:
    - Chuyển thẳng sang trạng thái Đã xuất kho, hoàn thành các quy trình trừ tồn kho và xuất kho
    - Lưu thông tin loại đơn hàng = Đơn Vansales
    - Lưu trạng thái đơn hàng = Đã xuất khvà trừ tồn kho thực tế trong kho của nhân viên

# Bộ lọc đơn hàng

* Bộ lọc đơn hàng ở Menu đơn hàng
* Bộ lọc đơn hàng ở chức năng chi tiết cửa hàng → Lịch sử đơn hàng

* + Bổ sung Loại đơn hàng Vansales để lọc như sau
  + Bổ sung trạng thái "Đã xuất kho"

Rule bộ lọc vẫn giữ như cũ.

Khi chọn đơn Vansales thì chọn các đơn hàng có loại = Đơn Vansales

# Danh sách đơn hàng

Danh sách đơn hàng sẽ xuất hiện Loại đơn hàng = Đơn vansales

# Đặt lại đơn hàng

Lưu ý đối với tính năng đặt lại đơn hàng, đơn hàng ở loại nào thì sẽ giữ loại đơn hàng đó không thay đổi

Trường hợp đặt lại đơn hàng vansales, sẽ thực hiện kiểm tra tồn kho trên kho Vansales của nhân viên. Trường hợp tại thời điểm đặt lại, nhân viên không được cài đặt kho vansales, sẽ hiển thị thông báo: Bạn chưa được cài đặt kho vansales, vui lòng liên hệ admin để được hỗ trợ.

Quy trình kiểm tra tồn kho, sản phẩm như đơn hàng bình thường.