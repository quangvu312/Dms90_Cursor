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

# 1 Chỉnh sửa đơn trả hàng lẻ

* Trường hợp đơn trả hàng có Loại trả hàng bằng = Trả hàng lẻ và trạng thái đơn trả hàng = Khởi tạo và người tạo đơn hàng = tài khoản người dùng đang login, khi vào Chi tiết đơn hàng sẽ hiển thị button Chỉnh sửa như sau:
* Khi nhấn button Chỉnh sửa, hệ thống thực hiện kiểm tra điều kiện như sau:

|  |  |
| --- | --- |
| * Kiểm tra sản phẩm và đơn vị của sản phẩm trên đơn có đang hoạt động/có giá bán tại kho trả hàng của NPP trên tuyến bán hàng đang chọn? | * **Không đủ điều kiện**: Vẫn thêm sản phẩm vào đơn hàng tuy nhiên sẽ hiển thị inline message trên từng sản phẩm lỗi: Sản phẩm không hoạt động/không có giá bán nên không thể thêm vào đơn hàng.  ---  * **Đủ điều kiện**: Thêm các sản phẩm và số lượng đang hoạt động, đủ giá bán, thuộc danh sách sản phẩm nằm trong nhãn hàng trong tuyến của nhân viên đang đăng nhập hoặc đang được chọn vào danh sách sản phẩm đã chọn để chỉnh sửa đơn hàng |
| Kiểm tra sản phẩm trên đơn có thuộc nhãn hàng trên tuyến bán hàng của nhân viên đang login hoặc nhân viên đang được chọn ? | * **Không đủ điều kiện**: Vẫn thêm sản phẩm vào đơn hàng tuy nhiên sẽ hiển thị inline message trên từng sản phẩm lỗi: Sản phẩm không thuộc nhãn hàng trong tuyến nên không thể thêm vào đơn hàng!  ---  * Có: Thêm các sản phẩm và số lượng đang hoạt động, đủ giá bán, thuộc danh sách sản phẩm nằm trong nhãn hàng trong tuyến của nhân viên đang đăng nhập hoặc đang được chọn vào danh sách sản phẩm đã chọn để tạo đơn hàng |

* + Sau khi đã thỏa các điều kiện trên, hiển thị màn hình Chọn sản phẩm với:

    - NPP là NPP trên đơn hàng đã chọn để chỉnh sửa
    - Kho trả hàng là kho trả trên đơn hàng đã chọn để chỉnh sửa
    - Lý do trả hàng là lý do trả trên đơn hàng đã chọn để chỉnh sửa
    - Điểm bán là điểm bán trên đơn hàng đã để chỉnh sửa
    - Danh sách các sản phẩm và số lượng đã được thêm vào danh sách sản phẩm đã chọn
    - Giá sẽ lấy giá mới nhất tại thời điểm chỉnh sửa đơn hàng
    - VAT sẽ lấy VAT mới nhất tại thời điểm thêm sản phẩm vào đơn hàng
    - Thông tin sản phẩm (tên sản phẩm, tên đơn vị,) sẽ hiển thị mới nhất tại thời điểm thêm sản phẩm vào đơn hàng
    - Ghi chú đơn hàng, ghi chú sản phẩm là thông tin trên đơn đã chọn để chỉnh sửa
  + Lưu ý:

    - Những sản phẩm nào đủ điều kiện thì thêm vào
    - Sản phẩm không đủ điều kiện thì hiển thị thông báo như đã mô tả bên trên
* Tại màn hình Chọn sản phẩm, sẽ thao tác như đã mô tả ở chức năng [[SM-APP] Trả hàng ở nhiệm vụ viếng thăm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66544813)
* Lưu đơn trả hàng với ngày trả hàng = Ngày chỉnh sửa đơn hàng
  + Khi lưu thực hiện kiểm tra lại trạng thái của đơn trả hàng, nếu khác Khởi tạo sẽ hiển thị thông báo: Đơn trả hàng đã được xét duyệt, không thể điều chỉnh.
    - Đồng ý → Xóa các thao tác điều chỉnh và trở về màn hình danh sách.