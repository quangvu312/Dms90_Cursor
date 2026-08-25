|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-887] [APP QL] Chấm công đầu ngày - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-887) |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Cấu hình chấm công đầu ngày trên App quản lý

Sử dụng cấu hình MANAGER\_REQUIRED\_CHECKIN\_WORKING\_TIME

Config tắt ↔  = 0: Không hiển thị chức năng chấm công đầu ngày, cuối ngày trên App quản lý ↔ Báo cáo chấm công sẽ không có thông tin ngày công của quản lý

Config bật ↔ = 1: Hiển thị và bắt buộc thực hiện chức năng chấm công đầu ngày, cuối ngày trên App quản lý. Không chấm công đầu ngày thì sẽ không thực hiện được một số chức năng

# Chấm công đầu ngày

Lưu ý chấm công dành cho SUP

Khi SUP login vào App QL, hệ thống sẽ thực hiện kiểm tra SUP đã có thực hiện chấm công đầu ngày ở App Salesman hay chưa.

Nếu đã có thông tin chấm công đầu ngày, App QL sẽ hiển thị thông tin chấm công đầu ngày của SUP và SUP sẽ không chấm công ở App QL nữa

Các đường dẫn để có thể thực hiện chấm công đầu ngày.

**Trường hợp 1:** Khi user thực hiện đăng nhập vào app thành công, hệ thống kiểm tra thấy user chưa có thông tin chấm công đầu ngày → Hệ thống sẽ mở màn hình Chấm Công Đầu Ngày.

**Trường hợp 2:**

* User không chấm công đầu ngày ở trường hợp 1
* Có thể vào menu Khác để thực hiện chấm công đầu ngày
* Chọn Thực hiện ngay → Hệ thống sẽ mở màn hình Chấm Công Đầu Ngày.

**Trường hợp 3:** Ở chức năng [Manager\_App] Lịch sử chấm công, trường hợp user đang xem thông tin lịch sử chấm công của bản thân mình ngày hiện tại. Nếu chưa thực hiện chấm công, hệ thống sẽ hiển thị như sau:

User chọn vào Thực hiện chấm công → Hệ thống sẽ mở màn hình Chấm Công Đầu Ngày.

**Lưu ý:**

* Nếu không chấm công đầu ngày thì một số chức năng trên App sẽ không sử dụng được, sẽ mô tả chi tiết yêu cầu chấm công đầu ngày ở từng chức năng cụ thể.
* Hiển thị cảnh báo như sau:

# Popup chấm công đầu ngày hiển thị như sau:

* Nhấn Để sau: Tắt popup và quay về màn hình hiện tại (màn hình Home)
* Nhấn Bắt đầu:
  + Trường hợp ứng dụng chưa cho phép truy cập vị trí, sẽ hiển thị yêu cầu truy cập vị trí theo rule chung của App.

* + Trường hợp ứng dụng chưa cho phép truy cập máy ảnh, sẽ hiển thị yêu cầu truy cập máy ảnh theo rule chung của App.

* + Trường hợp ứng dụng đã cho phép truy cập vị trí và máy ảnh sẽ đi thẳng qua màn hình Chấm công đầu ngày

# Màn hình Chấm công đầu ngày

| Màn hình | Tên Trường | Mô tả |
| --- | --- | --- |
|  | Địa điểm chấm công | Địa điểm chấm công đã được cài đặt ở chức năng [HO] Thiết lập vị trí chấm công   * Nếu config  CONFIG\_LOCATION\_WORKING\_TIME = Off thì Vị trí chấm công = Vị trí hiện tại của thiết bị của nhân viên  * Nếu  CONFIG\_LOCATION\_WORKING\_TIME = On   + Có thiết lập vị trí chấm công, lấy từ cài đặt [HO] Thiết lập vị trí chấm công   + Không thiết lập vị trí chấm công, màn hình sẽ hiển thị cảnh báo: Vị trí chấm công chưa được thiết lập, vui lòng liên hệ admin để được hỗ trợ!     - Đóng: Nhấn button quay về màn hình Home. |
| Vị trí của bạn | Địa điểm hiện tại của thiết bị di động mà nhân viên đang sử dụng, lấy từ GPS  Cập nhật: Nhấn để lấy lại GPS mới nhất |
| Khoảng cách | Khoảng cách tính bằng mét (m) giữa địa điểm của thiết bị và địa điểm chấm công được cài đặt |
| Khoảng cách cho phép | Khoảng cách tối đa cho phép để nhân viên được phép chấm công, ví dụ: 50m Khoảng cách được cài đặt ở chức năng [HO] Thiết lập vị trí chấm công |
| Cảnh báo vượt quá khoảng cách | Nếu khoảng cách > khoảng cách cho phép, hiển thị cảnh báo: Khoảng cách nằm ngoài giới hạn cho phép chấm công. Vui lòng điều chỉnh vị trí hoặc bổ sung lý do vượt khoảng cách. Disable button Hoàn tất cho đến khi điều chỉnh lại vị trí sao cho : - Khoảng cách <= khoảng cách cho phép hoặc - Chọn lý do vượt khoảng cách |
| Lý do vượt khoảng cách | Nhân viên chọn lý do nếu khoảng cách > khoảng cách cho phép Danh sách lý do lấy từ:   * Màn hình Dữ liệu chung, loại = Lý do vượt khoảng cách chấm công app quản lý * Lý do khác     Trường hợp người dùng chọn lý do khác, phải nhập thông tin ghi chú lý do khác (text, 200)    Lý do khác sau khi nhập sẽ hiển thị ở màn hình chính như sau |
| Hình ảnh chấm công | User nhấn nút chụp hình để thực hình chụp hình chấm công    Sau khi chụp hình, hệ thống sẽ thực hiện gán timestamp lên hình chụp, thông tin timestamp bao gồm:   * Title hình chụp: Chấm công đầu ngày * Thời gian chụp ảnh:  * + Lấy thời gian hiện tại tại thời điểm ảnh được chụp.   + Định dạng thời gian: HH:MM:SS DD-MM-YYYY   + Lấy thời gian của server hệ thống, không lấy thời gian trên thiết bị người dùng.     - Trường hợp server có vấn đề không lấy được thời gian (timeout), sẽ hiển thị dòng text: "Không lấy được thời gian của hệ thống" * Địa chỉ chấm công: Chuyển đổi tọa độ địa chỉ chụp ảnh thành địa chỉ chi tiết: số nhà, đường, phường, quận/huyện, tỉnh/thành phố, quốc gia.  * Tọa độ chấm công:Lấy thông tin tọa độ địa lý (kinh độ và vĩ độ) tại vị trí ảnh được chụp. * **Mã nhân viên - Tên nhân viên**: Lấy mã nhân viên và tên nhân viên từ thông tin người dùng đã đăng nhập trong ứng dụng để chụp ảnh.   Sau khi chụp xong có thể nhấn:   * Chụp lại → Chụp lại hình khác * Xong → Quay về màn hình Chấm Công Đầu Ngày |
| Hủy | Nhấn hủy để bỏ thao tác chấm công, hệ thống hiển thị cảnh báo: Các thông tin sẽ không được lưu. Bạn chắc chắn muốn Huỷ?     * Chắn chắn Hủy: Hủy bỏ thao tác chấm công và quay về màn hình trước đó * Không hủy: Tắt popup và quay về màn hình chấm công |
| Hoàn tất | Nhấn để lưu thông tin chấm công.   * Nếu lưu thông tin thành công, hệ thống trả thông báo: Thông tin chấm công đầu ngày đã được ghi nhận!      * + Nhấn Đồng Ý:     - Quay về màn hình trước đó.     - Ở mục Khác, ghi nhận thời gian chấm công đầu ngày như sau:      * Nếu lưu thông tin không thành công, hệ thống trả thông báo: Thao tác chấm công đầu ngày đã xảy ra lỗi do @thông tin lỗi, vui lòng thử lại!      * + Nhấn Đồng Ý: Quay về màn hình chấm công để thao tác lại |