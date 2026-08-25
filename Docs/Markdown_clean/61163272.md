|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.0.1:   * Khi đặt lại đơn hàng, nếu đặt lại từ chức năng viếng thăm thì đơn đặt lại sẽ có loại đơn = Viếng thăm. Mặc dù trước đó đơn được chọn để đặt lại đang là loại đơn chăm sóc * Còn đặt lại ở chức năng ngoài viếng thăm thì dù cho trước đó đơn được chọn để đặt lại có loại đơn là viếng thăm thì khi đặt lại ở chức năng ngoài viếng thăm cũng sẽ trở thành loại đơn chăm sóc |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Đặt lại đơn hàng

trueDatLaiDonHangfalse500autotoptrue9621

* Chức năng hỗ trợ user đặt lại đơn hàng đã đặt trước đó nhanh hơn.

* Button sẽ hiển thị khi đơn hàng (Đơn đặt và đơn trả) có trạng thái **Đã duyệt** hoặc **Đã hủy**

* Khi nhấn button này, hệ thống thực hiện kiểm tra điều kiện như sau:

* + Kiểm tra sản phẩm và đơn vị của sản phẩm trên đơn có đang hoạt động/có đủ tồn kho/có giá bán tại kho hàng bán của NPP trên tuyến bán hàng đang chọn nữa không?

    - Không: Thông báo: Sản phẩm @tên sản phẩm 1,@tên sản phẩm 2 không hoạt động, không đủ tồn kho, không có giá bán hoặc không thuộc nhãn hàng trong tuyến nên không thể thêm vào đơn hàng!
    - Có: Thêm các sản phẩm và số lượng đang hoạt động, đủ tồn kho, đủ giá bán, thuộc danh sách sản phẩm nằm trong nhãn hàng trong tuyến của nhân viên đang đăng nhập hoặc đang được chọn vào danh sách sản phẩm đã chọn để tạo đơn hàng
  + Kiểm tra sản phẩm trên đơn có thuộc nhãn hàng trên tuyến bán hàng của nhân viên đang login hoặc nhân viên đang được chọn hay không?
    - Không: Thông báo: Sản phẩm @tên sản phẩm 1,@tên sản phẩm 2 không hoạt động, không đủ tồn kho, không có giá bán hoặc không thuộc nhãn hàng trong tuyến nên không thể thêm vào đơn hàng!
    - Có: Thêm các sản phẩm và số lượng đang hoạt động, đủ tồn kho, đủ giá bán, thuộc danh sách sản phẩm nằm trong nhãn hàng trong tuyến của nhân viên đang đăng nhập hoặc đang được chọn vào danh sách sản phẩm đã chọn để tạo đơn hàng

* + Hiển thị màn hình Chọn sản phẩm với:

    - NPP là NPP trên đơn hàng đã chọn đặt lại
    - Điểm bán là điểm bán trên đơn hàng đã chọn đặt lại
    - Danh sách các sản phẩm và số lượng đã được thêm vào danh sách sản phẩm đã chọn
    - Giá sẽ lấy giá mới nhất tại thời điểm thêm sản phẩm vào đơn hàng
    - VAT sẽ lấy VAT mới nhất tại thời điểm thêm sản phẩm vào đơn hàng
    - Thông tin sản phẩm (tên sản phẩm, tên đơn vị) sẽ hiển thị mới nhất tại thời điểm thêm sản phẩm vào đơn hàng
    - Thông tin khuyến mãi sẽ lấy thông tin CTKM mới nhất tại thời điểm thêm sản phẩm vào đơn hàng
  + Lưu ý:

    - Những sản phẩm nào đủ điều kiện thì thêm vào
    - Sản phẩm không đủ điều kiện thì hiển thị thông báo: Sản phẩm @tên sản phẩm 1,@tên sản phẩm 2 không hoạt động, không đủ tồn kho, không có giá bán hoặc không thuộc nhãn hàng trong tuyến nên không thể thêm vào đơn hàng!
    - Ví Dụ:

      * Trên đơn cũ có 5 sản phẩm
      * 3 sản phẩm đủ điều kiện
      * 2 sản phẩm không đủ điều kiện
      * →   Thêm 3 sản phẩm đủ điều kiện vào, 2 SP còn lại hiển thị thông báo: Sản phẩm Sản phẩm @tên sản phẩm 1,@tên sản phẩm 2 không hoạt động, không đủ tồn kho, không có giá bán hoặc không thuộc nhãn hàng trong tuyến nên không thể thêm vào đơn hàng!
* Nếu thỏa điều kiện tất cả sản phẩm trong đơn hàng sẽ được thêm vào danh sách các sản phẩm đã chọn và đi thẳng đến trang chọn sản phẩm
* RedV1.0.1 Khi đặt lại đơn hàng, nếu đặt lại từ chức năng viếng thăm thì đơn đặt lại sẽ có loại đơn = Viếng thăm. Mặc dù trước đó đơn được chọn để đặt lại đang là loại đơn chăm sóc
* Còn đặt lại ở chức năng ngoài viếng thăm thì dù cho trước đó đơn được chọn để đặt lại có loại đơn là viếng thăm thì khi đặt lại ở chức năng ngoài viếng thăm cũng sẽ trở thành loại đơn chăm sóc