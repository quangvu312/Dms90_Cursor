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

# 1 Hủy đơn trả hàng

Trường hợp đơn trả hàng có trạng thái = Khởi tạo và người tạo đơn hàng = tài khoản người dùng đang login → Khi nhấn vào xem chi tiết đơn hàng sẽ hiển thị button Hủy đơn hàng (Cả đơn trả lẻ và trả nguyên đơn đều có thể hủy)

* Khi nhấn button Hủy đơn hàng, hệ thống hiển thị thông báo: Bạn có muốn hủy đơn hàng này không?

* + Đồng ý:
    - Hiển thị popup để người dùng nhập lý do hủy đơn hàng, textarea, 300 ký tự, có thể scroll để xem toàn bộ thông tin chi tiết đã nhập → Đồng ý → Hệ thống kiểm tra lại 1 lần nữa trạng thái của đơn hàng, nếu đúng trạng thái Khởi tạo
      * → **Thực hiện chuyển đơn hàng sang trạng thái "Đã hủy"**
      * Lưu thông tin lý do hủy đơn hàng
      * Lưu thông tin thời gian hủy đơn hàng
      * Lưu thông tin tài khoản người dùng thực hiện hủy đơn hàng
      * Thông báo: Hủy đơn thành công.
  + Trở lại: Đóng popup và quay về màn hình Chi tiết đơn hàng.