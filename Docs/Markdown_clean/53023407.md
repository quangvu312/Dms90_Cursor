|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-891] [APP QL] Báo cáo chấm công - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-891) |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Lịch sử chấm công

* Chức năng này giúp quản lý và theo dõi hiệu quả làm việc của nhân viên theo từng ngày, từng tháng.
* Cung cấp dữ liệu chính xác về chấm công để hỗ trợ tính toán lương, đánh giá năng suất lao động và phát hiện các bất thường (như vào trễ, ra sớm, chấm công sai vị trí).
* Tạm thời để ở menu Khác → Sẽ move vào mục Báo Cáo

Khi chọn vào lịch sử chấm công, hiển thị màn hình như sau:

| Màn hình | Trường dữ liệu | Mô tả |
| --- | --- | --- |
|  | Thông tin đang xem | Khi nhân viên mới đăng nhập, hiển thị tên, ảnh đại diện, và chức vụ của nhân viên đang đăng nhập  Nhân viên có thể chọn để đổi lại nhân viên khác, khi đổi sang nhân viên khác trường này sẽ hiển thị thông tin nhân viên được chọn để xem dữ liệu |
| Đổi | Chức năng được mô tả ở [[Manager App] Chọn nhân viên và xem danh sách cây Salesforce nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53035242) |
| Xem thông tin của tôi | Nhân viên có thể chọn để đổi lại nhân viên khác, khi đổi sang nhân viên khác trường **Thông tin đang xem** sẽ hiển thị thông tin nhân viên được chọn để xem dữ liệu  Khi nhấn vào trường này sẽ thực hiện quay về tài khoản nhân viên đang đăng nhập và hiển thị dữ liệu của nhân viên đang đăng nhập |
| Hôm nay | * Hiển thị thông tin ngày hiện tại, người dùng có thể chọn vào trường này để chọn lại khoảng thời gian lịch sử.   + Trường hợp ngày hiện tại thông tin chấm công đầu ngày chưa có và đối tượng được chọn là tài khoản đang đăng nhập thì sẽ hiển thị: Không tìm thấy ghi nhận chấm công và button Thực hiện chấm công. User click vào button Thực hiện chấm công → Hệ thống sẽ mở màn hình [Manager\_App] Chấm công đầu ngày   + Trường hợp ngày hiện tại thông tin chấm công đầu ngày chưa có và đối tượng được chọn không phải là tài khoản đang đăng nhập thì sẽ hiển thị: Không tìm thấy ghi nhận chấm công  * Có thể chọn 1 ngày để xem lịch sử hoặc chọn từ ngày - đến ngày (Đến ngày >= Từ ngày)      * Trên lịch sẽ highlight ngày hiện tại * Đặt lại: Clear ngày đã chọn * Xác nhận: Hiển thị thông tin thời gian đã chọn ra màn hình chính * Cho phép chọn tối đa 90 ngày để xem dữ liệu |
| Lịch sử chấm công |  | * Tất cả: Hiển thị tất cả thông tin lịch sử chấm công theo khoảng thời gian được chọn  * Không chấm công: Hiển thị thông tin các ngày không thực hiện chấm công đầu ngày * Nghỉ phép: Hiển thị thông tin các ngày có nghỉ phép được duyệt thành công * Số trong ngoặc: Đếm số lượng các ngày theo từng mục mô tả ở trên. |
| Ngày | * Hiển thị đầy đủ số ngày trong thời gian được chọn từ vùng tìm kiếm.   + Trường hợp Ngày trong khoảng được chọn là **ngày làm việc** được cấu hình trong [HO] Cấu hình chấm công → Sẽ hiển thị ngày này lên lịch sử. Cho dù có thông tin chấm công hay không có thông tin chấm công cũng đều hiển thị ngày này.   + Trường hợp Ngày trong khoảng được chọn **không phải** **ngày làm việc** được cấu hình trong [HO] Cấu hình chấm công và nhân viên **không có thông tin chấm công đầu ngày** trong ngày này → Không hiển thị ngày này lên lịch sử chấm công.   + Trường hợp Ngày trong khoảng được chọn **không phải** **ngày làm việc** được cấu hình trong [HO] Cấu hình chấm công và nhân viên **CÓ thông tin chấm công đầu ngày** trong ngày này → Hiển thị ngày này lên lịch sử chấm công.  * Rule màu của các thẻ:  * + Đỏ: Các case ko ghi nhận chấm công hoặc auto check out hoặc chỉ mới check in chưa check out   + Xanh: Ghi nhận nghỉ phép được duyệt thành công   + Xám: chấm công đủ * Trường hợp ngày hôm đó có thông tin nghỉ phép được duyệt thành công, khi nhấn chi tiết sẽ hiển thị chi tiết phiếu nghỉ phép, sẽ được mô tả ở chức năng Nghỉ phép * Nghỉ phép chỉ tính phiếu nghỉ phép được duyệt thành công, các phiếu nghỉ phép chưa được duyệt hoặc từ chối thì xem như chưa ghi nhận nghỉ phép. |
| Bắt đầu | * Thời gian nhân viên chấm công đầu ngày, ghi nhận tại chức năng Chấm công đầu ngày trên App * Trường hợp ngày trong lịch sử = ngày hiện tại và chưa có dữ liệu chấm công đầu ngày và đối tượng được chọn là chủ tài khoản thì sẽ hiển thị link "Thực hiện chấm công" → Khi click vào sẽ điều hướng đến màn hình Chấm công đầu ngày      * Khoảng cách: Khoảng cách tính bằng mét (m) giữa địa điểm của thiết bị và địa điểm chấm công được cài đặt, được ghi nhận khi thực hiện chấm công đầu ngày   + Trường hợp bị vượt khoảng cách, sẽ hiển thị icon như sau:   + Click vào icon sẽ có thông tin lý do vượt khoảng cách: |
| Kết thúc | * Thời gian nhân viên chấm công cuối ngày, ghi nhận tại chức năng Chấm công cuối ngày trên App * Trường hợp chưa thực hiện chấm công cuối ngày và đối tượng được chọn là chủ tài khoản thì sẽ hiển thị link "Thực hiện chấm công" → Khi click vào sẽ điều hướng đến màn hình Chấm công cuối ngày: * Trường hợp chưa thực hiện chấm công cuối ngày và đối tượng được chọn không phải chủ tài khoản thì sẽ hiển thị như sau: * Trường hợp hệ thống tự động chấm công cuối ngày sẽ hiển thị như sau * Khoảng cách: Khoảng cách tính bằng mét (m) giữa địa điểm của thiết bị và địa điểm chấm công được cài đặt, được ghi nhận khi thực hiện chấm công đầu ngày   + Trường hợp bị vượt khoảng cách, sẽ hiển thị icon như sau:   + Click vào icon sẽ có thông tin lý do vượt khoảng cách: |
| Tổng giờ công | = Chấm công cuối ngày - Chấm công đầu ngày  Quy đổi ra HH:MM:SS  Dữ liệu trường này sẽ không ảnh hưởng từ thông tin Xin nghỉ phép. |
| Hình chấm công đầu ngày | Hiển thị hình ảnh chấm công đầu ngày của nhân viên  Click vào để xem chi tiết hình ảnh chấm công, trường hợp có nhiều ảnh, có thể trượt ngang để xem |
| Hình chấm công cuối ngày | Hiển thị hình ảnh chấm công cuối ngày của nhân viên  Click vào để xem chi tiết hình ảnh chấm công, trường hợp có nhiều ảnh, có thể trượt ngang để xem |
| Chi tiết chấm công | Tổng thời gian làm việc ngày 22/11/2024 | = Chấm công cuối ngày - Chấm công đầu ngày  Quy đổi ra HH:MM:SS  Dữ liệu trường này sẽ không ảnh hưởng từ thông tin Xin nghỉ phép. |
| Bắt đầu | * Địa chỉ chấm công * Kinh độ, vĩ độ chấm công * Khoảng cách chấm công * Địa chỉ chấm công được cài đặt * Trạng thái:   + Hoàn thành: Chấm công đầu ngày đúng vị trí   + Sai vị trí: Chấm công đầu ngày sai vị trí + hiển thị lý do vượt khoảng cách |
| Kết thúc | * Địa chỉ chấm công * Kinh độ, vĩ độ chấm công * Khoảng cách chấm công * Địa chỉ chấm công được cài đặt * Trường hợp chưa thực hiện chấm công cuối ngày và đối tượng được chọn là chủ tài khoản thì sẽ hiển thị link "Thực hiện chấm công" → Khi click vào sẽ điều hướng đến màn hình Chấm công cuối ngày: * Trường hợp chưa thực hiện chấm công cuối ngày và đối tượng được chọn không phải chủ tài khoản thì sẽ hiển thị như sau:      * Trường hợp chưa thực hiện chấm công cuối ngày, hệ thống tự động chấm công cuối ngày vào 23:59:00, thì sẽ hiển thị như sau:      * Trạng thái:   + Chưa thực hiện: Chưa thực hiện chấm công cuối ngày   + Hoàn thành: Chấm công cuối ngày đúng vị trí   + Sai vị trí: Chấm công cuối ngày sai vị trí + hiển thị lý do vượt khoảng cách |
| Hình ảnh chấm công | Hình ảnh chấm công đầu ngày, cuối ngày  Click vào để xem chi tiết hình ảnh chấm công, trường hợp có nhiều ảnh, có thể trượt ngang để xem |