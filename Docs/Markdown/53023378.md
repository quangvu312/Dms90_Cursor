|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-888] [APP QL] Chấm công cuối ngày - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-888) |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Cấu hình chấm công cuối ngày trên App quản lý

Sử dụng cấu hình MANAGER\_REQUIRED\_CHECKIN\_WORKING\_TIME

Config tắt ↔  = 0: Không hiển thị chức năng chấm công cuối ngày, cuối ngày trên App quản lý

Config bật ↔ = 1: Hiển thị và bắt buộc thực hiện chức năng chấm công cuối ngày, cuối ngày trên App quản lý. Không chấm công cuối ngày thì sẽ không thực hiện được một số chức năng

# Chấm công cuối ngày

Lưu ý chấm công dành cho SUP

Khi SUP login vào App QL, hệ thống sẽ thực hiện kiểm tra SUP đã có thực hiện chấm công cuối ngày ở App Salesman hay chưa.

Nếu đã có thông tin chấm công cuối ngày, App QL sẽ hiển thị thông tin chấm công cuối ngày của SUP và SUP sẽ không chấm công ở App QL nữa

Đường dẫn để có thể thực hiện chấm công cuối ngày: User vào menu Khác để thực hiện chấm công cuối ngày

# Màn hình Chấm công cuối ngày

| Màn hình | Tên Trường | Mô tả |
| --- | --- | --- |
|  | Địa điểm chấm công | Địa điểm chấm công đã được cài đặt ở chức năng [HO] Thiết lập vị trí chấm công   * Nếu config  CONFIG\_LOCATION\_WORKING\_TIME = Off thì Vị trí chấm công = Vị trí hiện tại của thiết bị của nhân viên  * Nếu  CONFIG\_LOCATION\_WORKING\_TIME = On   + Có thiết lập vị trí chấm công, lấy từ cài đặt [HO] Thiết lập vị trí chấm công     - Nếu Thiết lập vị trí chấm công không cài đặt Vị trí chấm công cuối ngày thì Vị trí chấm công cuối ngày = Vị trí hiện tại của thiết bị của nhân viên   + Không thiết lập vị trí chấm công, màn hình sẽ hiển thị cảnh báo: Vị trí chấm công chưa được thiết lập, vui lòng liên hệ admin để được hỗ trợ!     - Đóng: Nhấn button quay về màn hình Home. |
| Vị trí của bạn | Địa điểm hiện tại của thiết bị di động mà nhân viên đang sử dụng, lấy từ GPS  Cập nhật: Nhấn để lấy lại GPS mới nhất |
| Khoảng cách | Khoảng cách tính bằng mét (m) giữa địa điểm của thiết bị và địa điểm chấm công được cài đặt |
| Khoảng cách cho phép | Khoảng cách tối đa cho phép để nhân viên được phép chấm công, ví dụ: 50m Khoảng cách được cài đặt ở chức năng [HO] Thiết lập vị trí chấm công |
| Cảnh báo vượt quá khoảng cách | Nếu khoảng cách > khoảng cách cho phép, hiển thị cảnh báo: Khoảng cách nằm ngoài giới hạn cho phép chấm công. Vui lòng điều chỉnh vị trí hoặc bổ sung lý do vượt khoảng cách. Disable button Hoàn tất cho đến khi điều chỉnh lại vị trí sao cho : - Khoảng cách <= khoảng cách cho phép hoặc - Chọn lý do vượt khoảng cách |
| Lý do vượt khoảng cách | Nhân viên chọn lý do nếu khoảng cách > khoảng cách cho phép Danh sách lý do lấy từ:   * Màn hình Dữ liệu chung, loại = Lý do vượt khoảng cách chấm công app quản lý * Lý do khác     Trường hợp người dùng chọn lý do khác, phải nhập thông tin ghi chú lý do khác (text, 200)    Lý do khác sau khi nhập sẽ hiển thị ở màn hình chính như sau |
| Hình ảnh chấm công | User nhấn nút chụp hình để thực hình chụp hình chấm công    Sau khi chụp hình, hệ thống sẽ thực hiện gán timestamp lên hình chụp, thông tin timestamp bao gồm:   * Title hình chụp: Chấm công cuối ngày * Thời gian chụp ảnh:  * + Lấy thời gian hiện tại tại thời điểm ảnh được chụp.   + Định dạng thời gian: HH:MM:SS DD-MM-YYYY   + Lấy thời gian của server hệ thống, không lấy thời gian trên thiết bị người dùng.     - Trường hợp server có vấn đề không lấy được thời gian (timeout), sẽ hiển thị dòng text: "Không lấy được thời gian của hệ thống" * Địa chỉ chấm công: Chuyển đổi tọa độ địa chỉ chụp ảnh thành địa chỉ chi tiết: số nhà, đường, phường, quận/huyện, tỉnh/thành phố, quốc gia.  * Tọa độ chấm công:Lấy thông tin tọa độ địa lý (kinh độ và vĩ độ) tại vị trí ảnh được chụp. * **Mã nhân viên - Tên nhân viên**: Lấy mã nhân viên và tên nhân viên từ thông tin người dùng đã đăng nhập trong ứng dụng để chụp ảnh.   Sau khi chụp xong có thể nhấn:   * Chụp lại → Chụp lại hình khác * Xong → Quay về màn hình Chấm Công cuối ngày |
| Hủy | Nhấn hủy để bỏ thao tác chấm công, hệ thống hiển thị cảnh báo: Các thông tin sẽ không được lưu. Bạn chắc chắn muốn Huỷ?     * Chắn chắn Hủy: Hủy bỏ thao tác chấm công và quay về màn hình trước đó * Không hủy: Tắt popup và quay về màn hình chấm công |
| Hoàn tất | Nhấn để lưu thông tin chấm công.   * Nếu lưu thông tin thành công, hệ thống trả thông báo: Thông tin chấm công cuối ngày đã được ghi nhận!      * + Nhấn Đồng Ý:     - Quay về màn hình trước đó.     - Ở mục Khác, ghi nhận tổng thời gian làm việc như sau: Tổng thời gian làm việc = Thời gian chấm công cuối ngày - Thời gian chấm công đầu ngày.      * + - Lưu ý: Trường hợp nhân viên không thực hiện chấm công cuối ngày:       * Hệ thống sẽ ghi nhận thời gian chấm công cuối ngày lúc 23:59:59       * Tổng thời gian làm việc = Thời gian chấm công cuối ngày - Thời gian chấm công đầu ngày.  * Nếu lưu thông tin không thành công, hệ thống trả thông báo: Thao tác chấm công cuối ngày đã xảy ra lỗi do @thông tin lỗi, vui lòng thử lại!      * + Nhấn Đồng Ý: Quay về màn hình chấm công để thao tác lại |