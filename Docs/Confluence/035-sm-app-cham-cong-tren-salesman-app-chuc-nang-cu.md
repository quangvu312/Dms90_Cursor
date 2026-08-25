|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature | Chấm công trên Salesman App |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

**1. CHẤM CÔNG ĐẦU NGÀY**

1.1 Mục đích

Thực hiện chấm công đầu ngày trên SM App

1.2 Mô tả

Điều kiện cần đã login SM App.  
Các bước thực hiện chấm công đầu ngày thành công

| Chức năng | Màn hình |
| --- | --- |
| Chấm công đầu ngày |  |
| Hiển thị chấm công thành công, user = Salesman |  |
| Hiển thị chấm công thành công, user = SUP |  |

| Trường hợp | Kết quả mong muốn | Hiện tại |
| --- | --- | --- |
| Sau khi login thành công   * Trường hợp nhân viên login = Nhân viên bán hàng, chấm công đầu ngày ghi nhận cho nhân viên * Trường hợp nhân viên login = Giám sát bán hàng, chấm công đầu ngày ghi nhận cho nhân viên được chọn lúc login.   Chọn bắt đầu ngày làm việc | * Hiển thị cài đặt chụp ảnh cho lần đầu tiên sử dụng SM App * Từ lần thứ 2 sẽ không hiển thị thông báo này. | Đã có |
| Chọn cài đặt Trong khi dùng ứng dụng | * Mở camera và thực hiện chụp ảnh. | Đã có |
| Thực hiện hoàn tất chụp ảnh checkin | * Không cho chọn hình ảnh có sẵn * Cho phép chụp lại hình ảnh đã chụp bằng cách xóa hình đã chụp. * Có ghi nhận thông tin chụp ảnh thành công: ngày giờ chụp ảnh; địa chỉ chụp ảnh; tọa độ chụp ảnh; Mã nhân viên - Tên nhân viên; dung lượng hình * Checkin thành công mở ra màn hình danh sách tuyến viếng thăm. * Có ghi nhận thời gian bắt đầu checkin ở màn hình checkout * Ghi nhận lịch sử thời gian checkin theo ngày | Đã có |
| Trường hợp không thực hiện chụp ảnh checkin | * Không ghi nhận checkin thành công * Bắt buộc chụp ảnh checkin mới được thao tác viếng thăm tuyến | Đã có |

**1.3 Kết quả**

Thực hiện chấm công đầu ngày trên SM App

Có ràng buộc checkin mới được viếng thăm tuyến.

* Trường hợp nhân viên login = Nhân viên bán hàng, chấm công đầu ngày ghi nhận cho nhân viên
* Trường hợp nhân viên login = Giám sát bán hàng, chấm công đầu ngày ghi nhận cho nhân viên được chọn lúc login.

**2. CHẤM CÔNG CUỐI NGÀY**

2.1 Mục đích

Thực hiện chấm công cuối ngày trên SM App

2.2 Mô tả

Điều kiện cần đã login và checkin SM App.

Các bước thực hiện chấm công cuối ngày thành công

| Chức năng | Màn hình |
| --- | --- |
| Chấm công cuối ngày, user = Salesman |  |
| Chấm công cuối ngày, user = SUP |  |

| Trường hợp | Kết quả mong muốn |
| --- | --- |
| Sau khi login thành công Chọn kết thúc ngày công | * Hiển thị xác nhận Kết thúc ngày công |
| Chọn tắt màn hình | * Thực hiện tắt màn hình và không thực hiện checkout |
| Chọn kết thúc ngày công | * Mở camera và thực hiện chụp ảnh |
| Thực hiện hoàn tất chụp ảnh checkout | * Không cho chọn hình ảnh có sẵn * Cho phép chụp lại hình ảnh đã chụp bằng cách xóa hình đã chụp. * Có ghi nhận thông tin chụp ảnh thành công: ngày giờ chụp ảnh; địa chỉ chụp ảnh; tọa độ chụp ảnh; Mã nhân viên - Tên nhân viên; dung lượng hình * Checkin thành công mở ra màn hình danh sách tuyến viếng thăm. * Có ghi nhận thời gian chấm công trong ngày ở màn hình checkout * Ghi nhận lịch sử thời gian chấm công đầu ngày/cuối ngày theo ngày |
| Trường hợp còn điểm bán chưa hoàn tất viếng thăm | * Sẽ có thông báo buộc phải hoàn tất viếng thăm điểm bán. * Và không cho phép checkout. |

2.3 Kết quả

Thực hiện chấm công cuối ngày trên SM App thành công.

Có ràng buộc phải hoàn tất viếng thăm điểm bán.

Có ghi nhận lịch sử checkout.

* Tổng thời gian = chấm công cuối ngày - chấm công đầu ngày

**Lưu ý:**

* + Thực hiện chấm công cuối ngày, chụp hình chấm công thành công
  + Trước khi chấm công cuối ngày, kiểm tra user có đang thực hiện viếng thăm điểm bán nào mà chưa thực hiện checkout hay không.
    - Nếu có hiển thị cảnh báo: Vui lòng checkout điểm bán trước khi chấm công cuối ngày
    - Nếu không: Hiển thị màn hình chấm công cuối ngày
  + Trường hợp user không chấm công cuối ngày.
    - Trước khi qua ngày mới thực hiện checkout điểm bán mà nhân viên đang viếng thăm, ghi nhận thời gian checkout = 23:59:59
    - Trước khi qua ngày mới thực hiện chấm công cuối ngày cho nhân viên, ghi nhận thời gian chấm công cuối ngày = 23:59:59
  + Trường hợp nhân viên login = Nhân viên bán hàng, chấm công cuối ngày ghi nhận cho nhân viên
  + Trường hợp nhân viên login = Giám sát bán hàng, chấm công cuối ngày ghi nhận cho nhân viên được chọn lúc login.

: Bổ sung:

* Trước khi chấm công cuối ngày, kiểm tra user có đang thực hiện viếng thăm điểm bán nào mà chưa thực hiện checkout hay không.
  + Nếu có hiển thị cảnh báo: Vui lòng checkout điểm bán @mã điểm bán - @tên điểm bán trước khi chấm công cuối ngày!

## **3. LỊCH SỬ CHẤM CÔNG**

**3.1 Mục đích**

Xem lịch sử checkin/checkout theo ngày/tháng của tài khoản.

**3.2 Mô tả**

Điều kiện cần đã login và checkin/checkout SM App

Các bước thực hiện xem lịch sử chấm công

| Trường hợp | Dữ liệu mẫu | Kết quả mong muốn | Hiện tại |
| --- | --- | --- | --- |
| Chọn xem lịch sử chấm công trên màn hình Kết thúc ngày công |  | * Hiển thị lịch sử chấm công theo 3 tháng gần nhất * Chọn tháng để xem ngày chấm công * Nếu không có dữ liệu chấm công sẽ hiện Dữ liệu trống * Hiển thị ngày chấm công gần nhất lên đầu tiên. * Hiển thị thông tin chấm công: Ngày; thời lượng công; Giờ bắt đầu; giờ kết thúc. | Đã có |
| Chọn nút back để quay lại màn hình trước |  | * Khi nhấn nút back thực hiện quay về màn hình Kết thúc ngày công | Đã có |

**3.3 Kết quả**

Xem được lịch sử checkin/checkout theo ngày/tháng của tài khoản.

## **4. BẢN ĐỒ CỦA TUYẾN**

### 4.1 Mục đích

Người dùng xem bản đồ tất cả điểm bán của tuyến trong ngày làm việc.

4.2 Mô tả

Điều kiện cần đã login và checkin SM App

Các bước thực hiện xem bản đồ điểm bán của tuyến.

| Trường hợp | Dữ liệu mẫu | Kết quả mong muốn | Hiện tại |
| --- | --- | --- | --- |
| Chọn Tab bản đồ |  | * Hiển thị tất cả số lượng điểm bán trong tuyến/ngày. * Có thể phóng to/thu nhỏ bản đồ | Đã có |
| Chọn vị trí hiện tại |  | * Định vị tọa độ hiện tại của thiết bị (điện thoại) | Đã có |
| Chọn filter |  | * Có thể filter theo các điều kiện bộ lọc: Tất cả; Trong tuyến; Ngoại tuyến; Đã viếng thăm; Đang viếng thăm; Chưa viếng thăm; Tiềm năng; Không tiềm năng; Khách hàng sỉ; Khách hàng khác sỉ; Đã cài ECO; Chưa cài ECO; Điểm bán đã Active; Điểm bán chưa Active; Điểm bán đã ReActive; Điểm bán chưa ReActive; Có tài sản; Không có tài sản; Đã gán QR Ecopay; Chưa gán QR Ecopay. * Filter điểm bán theo điều kiện đã lọc. | Đã có |
| Chọn thông tin tuyến |  | * Hiển thị số lượng điểm bán trong tuyến; Đã viếng thăm; Trái tuyến. | Đã có |
| Chọn vào điểm bán |  | * Hiển thị thông tin điểm bán: Tên điểm bán'; SĐT; địa chỉ, khoảng cách... * Có thể viếng thăm. | Đã có |
| Chọn viếng thăm |  | * Mở ra màn hình viếng thăm chi tiết | Đã có |

4.3. Kết quả  
  
Người dùng xem được bản đồ tất cả điểm bán của tuyến trong ngày làm việc.

Có thể filter thông tin điểm bán.