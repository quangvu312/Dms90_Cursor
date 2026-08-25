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

Xem thông báo trên app

|  |  |
| --- | --- |
|  | Menu Khác của Manager App bổ sung chức năng Thông báo kèm noti số thông báo mà nhân viên chưa xem  Người dùng có thể xem thông báo mà không cần chấm công đầu ngày |
| Chọn vào thông báo hiển thị danh sách thông báo như sau: | * Với thông báo có Kiểu hiện thị = Nổi bật, sẽ có text "Nổi bật" phía trước * Các thông báo còn lại sẽ được hiển thị group theo thời gian bên dưới * Thông báo thuộc loại Thông báo chung sẽ hiển thị ở tab Thông báo chung * Thông báo thuộc loại Khuyến mãi sẽ hiển thị ở tab Khuyến mãi * Tìm kiếm: Nhập Tiêu đề, Nội dung tóm tắt, Nội dung thông báo để tìm kiếm.   + - Tooltip: Tìm kiếm theo Tiêu đề, Nội dung tóm tắt, Nội dung thông báo .     - Placeholder: Tìm kiếm theo Tiêu đề, Nội dung tóm tắt, Nội dung thông báo     - Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các thông báo có Tiêu đề, Nội dung thông báo được nhập trong ô này (search like). * Nội dung thông báo gồm:  * + Tiêu đề   + Nội dung tóm tắt.   + Nếu thông báo nào chưa xem sẽ hiển thị highlight, thông báo đã xem sẽ hiển thị mờ   + Thời gian nhận thông báo: HH:MM DD/MM/YYYY   + Khi click vào hiển thị chi tiết thông báo     * Đọc tất cả:   + Hiển thị số lượng thông báo mà nhân viên chưa xem   + Khi nhấn button này sẽ hiển thị cảnh báo: Bạn có muốn đọc hết tất cả thông báo?     - Đồng ý: Đánh dấu tất cả thông báo Chưa xem → Đã xem     - Trở lại: Đóng cảnh báo, quay về màn hình hiện tại, không thực hiện bất cứ hành động nào. |
|  | Bộ lọc: Các quy tắc cơ bản của bộ lọc đã mô tả ở Quy tắc chung  **Ngày gửi thông báo**   * Khi mở màn hình Default không chọn ngày nào (Hiểu là chọn thời gian hiển thị trong vòng 90 ngày kể từ ngày hiện tại tính về trước) * Người dùng chọn ngày để tìm kiếm tại icon calendar → Hiển thị popup calendar để chọn ngày; Định dạng thời gian: Từ ngày **dd/mm/yyyy****→**Đến ngày**dd/mm/yyyy**  * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn  * Đến Ngày >= Từ Ngày, * Đến Ngày - Từ Ngày: Có thể chọn bất kỳ khoảng thời gian nào miễn là trong vòng 90 ngày    Trạng thái:   * Chọn trạng thái để lọc thông báo:   + Đã xem   + Chưa xem * Có thể chọn nhiều trạng thái     * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào danh sáchthông báo và reload danh sách thông báo hiển thị kết quả tìm kiếm |
| Click vào để xem chi tiết thông báo như sau: | Nội dung bao gồm:   * Tiêu đề thông báo * Nội dung thông báo * Các hình ảnh/file đính kèm   Khi nhân viên vào màn hình này thì đánh dấu thông báo đã xem. |
| Trường hợp thông báo có kiểu hiển thị = Nổi bật, sẽ bật lên giữa màn hình user đang thao tác. | Chức năng này yêu cầu phải cài đặt quyền thông báo, Trường hợp user không cấp quyền thông báo thì sẽ không hiển thị dạng nổi bật mà chỉ hiển thị dưới dạng thông báo bình thường.  Thông báo sẽ tự động ẩn đi sau 5s.  Hoặc người dùng vuốt ngược lên trên, hoặc sang trái, hoặc sang phải, thông báo sẽ ẩn đi  Nhấn vào popup sẽ đến màn hình chi tiết thông báo: |
|  | Icon , hiển thị số lượng thông báo chưa đọc của tài khoản đang đăng nhập. |