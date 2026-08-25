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

# Chỉnh sửa đơn hàng

* Trường hợp đơn hàng có trạng thái = Khởi tạo và người tạo đơn hàng = tài khoản người dùng đang login → Khi nhấn vào xem chi tiết đơn hàng sẽ hiển thị button Chỉnh sửa
* Khi nhấn button Chỉnh sửa, hệ thống thực hiện kiểm tra điều kiện như sau:

| Điều kiện | Mô tả |
| --- | --- |
| * Kiểm tra sản phẩm và đơn vị của sản phẩm trên đơn có đang hoạt động/có đủ tồn kho/có giá bán tại kho hàng bán của NPP trên tuyến bán hàng đang chọn? | * **Không đủ điều kiện**: Vẫn thêm sản phẩm vào đơn hàng tuy nhiên sẽ hiển thị inline message trên từng sản phẩm lỗi: Sản phẩm không hoạt động/không đủ tồn kho/không có giá bán nên không thể thêm vào đơn hàng.  ---  * **Đủ điều kiện**: Thêm các sản phẩm và số lượng đang hoạt động, đủ tồn kho, đủ giá bán, thuộc danh sách sản phẩm nằm trong nhãn hàng trong tuyến của nhân viên đang đăng nhập hoặc đang được chọn vào danh sách sản phẩm đã chọn để chỉnh sửa đơn hàng |
| Kiểm tra sản phẩm trên đơn có thuộc nhãn hàng trên tuyến bán hàng của nhân viên đang login hoặc nhân viên đang được chọn ? | * **Không đủ điều kiện**: Vẫn thêm sản phẩm vào đơn hàng tuy nhiên sẽ hiển thị inline message trên từng sản phẩm lỗi: Sản phẩm không thuộc nhãn hàng trong tuyến nên không thể thêm vào đơn hàng.  ---  * Có: Thêm các sản phẩm và số lượng đang hoạt động, đủ tồn kho, đủ giá bán, thuộc danh sách sản phẩm nằm trong nhãn hàng trong tuyến của nhân viên đang đăng nhập hoặc đang được chọn vào danh sách sản phẩm đã chọn để tạo đơn hàng |

* + Sau khi đã thỏa các điều kiện trên, hiển thị màn hình Chọn sản phẩm với:

    - NPP là NPP trên đơn hàng đã chọn để chỉnh sửa
    - Điểm bán là điểm bán trên đơn hàng đã để chỉnh sửa
    - Danh sách các sản phẩm và số lượng đã được thêm vào danh sách sản phẩm đã chọn
    - Giá sẽ lấy giá mới nhất tại thời điểm chỉnh sửa đơn hàng
    - VAT sẽ lấy VAT mới nhất tại thời điểm thêm sản phẩm vào đơn hàng
    - Thông tin sản phẩm (tên sản phẩm, tên đơn vị) sẽ hiển thị mới nhất tại thời điểm thêm sản phẩm vào đơn hàng
    - Giữ lại thông tin ghi chú trên đơn hàng khi thực hiện chỉnh sửa.
  + Lưu ý:

    - Những sản phẩm nào đủ điều kiện thì thêm vào
    - Sản phẩm không đủ điều kiện thì hiển thị thông báo như đã mô tả bên trên
* Tại màn hình Chọn sản phẩm:
  + Sẽ thao tác như đã mô tả ở chức năng [Tạo đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752#id-%5BSMAPP%5DĐặthàngởnhiệmvụviếngthăm(khôngkhuyếnmãi)-3.TạođơnhàngCREATE_ORDER) và có kèm Chương trình khuyến mãi
  + Tổng tiền sau giảm > 0 (Trường hợp thay đổi đơn hàng mà Tổng tiền sau giảm <=0 thì ko cho lưu đơn hàng, người dùng tự thay đổi thông tin sản phẩm, khuyến mãi trên đơn hàng sao cho hợp lệ hoặc tự liên hệ với admin để hỗ trợ điều chỉnh đơn)
* Lưu đơn hàng với:
  + Ngày đặt hàng = Ngày chỉnh sửa đơn hàng
  + Lưu thông tin Tiền điều chỉnh

# Hủy đơn hàng

* Trường hợp đơn hàng có trạng thái = Khởi tạo và người tạo đơn hàng = tài khoản người dùng đang login → Khi nhấn vào xem chi tiết đơn hàng sẽ hiển thị button Hủy đơn hàng
* Khi nhấn button Hủy đơn hàng, hệ thống hiển thị thông báo: Bạn có muốn hủy đơn hàng này không?

* + Đồng ý:
    - Hiển thị popup để người dùng nhập lý do hủy đơn hàng, textarea, 300 ký tự, có thể scroll để xem toàn bộ thông tin chi tiết đã nhập → Đồng ý → Hệ thống kiểm tra lại 1 lần nữa trạng thái của đơn hàng, nếu đúng trạng thái Khởi tạo
      * → **Thực hiện chuyển đơn hàng sang trạng thái "Đã hủy"**
      * Lưu thông tin lý do hủy đơn hàng
      * Lưu thông tin thời gian hủy đơn hàng
      * Lưu thông tin tài khoản người dùng thực hiện hủy đơn hàng
      * Thông báo: Hủy đơn thành công.
  + Trở lại: Đóng popup và quay về màn hình Chi tiết đơn hàng.