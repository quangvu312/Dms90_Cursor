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

Mục đích: Người dùng là endusser có thể thay đổi mật khẩu trên màn hình đăng nhập của mình.

API SSO:

## Màn hình

Chọn Đổi mật khẩu → hiển thị màn hình:

Màn hình hiển thị mặc định popup "Thay đổi mật khẩu"

### Mô tả:

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Mật khẩu cũ | Text | Có | Có | Nhập mật khẩu hiện tại đang đăng nhập của người dùng  Ẩn khi nhập, chỉ khi chọn icon "Xem" →  mới hiển thị các ký tự text đã nhập. |
| Mật khẩu | Text | Có | Có | **Trường: Mật khẩu**   * Mô tả: Cho phép user nhập mật khẩu mới cho tài khoản người dùng cần cấp lại mật khẩu. * Yêu cầu bảo mật:    + Độ dài tối thiểu: 8 ký tự.   + Mật khẩu phải bao gồm ít nhất một chữ cái in hoa, một chữ cái in thường, một chữ số và một ký tự đặc biệt (ví dụ: @, #, $). * Hành động:    1. User nhập mật khẩu mới theo đúng yêu cầu bảo mật.   2. Nếu mật khẩu không đáp ứng các tiêu chuẩn bảo mật, hệ thống sẽ hiển thị thông báo yêu cầu nhập lại. |
| Xác nhận mật khẩu | Text | Có | Có | **Trường: Xác nhận mật khẩu**   * Mô tả: Yêu cầu User nhập lại mật khẩu mới để đảm bảo tính chính xác. * Hành động:    1. User nhập lại mật khẩu mới vào trường "Xác nhận mật khẩu".   2. Hệ thống so sánh giá trị của trường "Mật khẩu" và "Xác nhận mật khẩu":       + Nếu hai trường khớp nhau, cho phép cập nhật mật khẩu mới.      + Nếu không khớp, hệ thống hiển thị thông báo inline: "Mật khẩu không khớp!" |
| Cập nhật |  |  |  | * Mô tả: Sau khi xác nhận đúng mật khẩu mới, hệ thống sẽ lưu lại mật khẩu đã cấp lại cho tài khoản người dùng. * Hành động:   Người dùng bấm "Cập nhật" để hoàn tất đổi mật khẩu, hệ thống kiểm tra Mật khẩu cũ đã khớp với mật khẩu hiện tại chưa? [HO] Tài Khoản Người Dùng   1. Nếu chưa hiển thị thông báo: "Mật khẩu hiện tại không chính xác." 2. Nếu khớp:    1. Kiểm tra mật khẩu mới thêm có trùng với mật khẩu cũ không?       1. Nếu có: "Mật khẩu thay đổi trùng với mật khẩu cũ. Vui lòng cập nhật mật khẩu mới"       2. Nếu không: tiến hành cập nhật mật khẩu mới cho người dùng          1. Hệ thống mã hóa mật khẩu mới và lưu vào cơ sở dữ liệu để đảm bảo an toàn bảo mật.          2. Hiển thị thông báo "Cập nhật mật khẩu thành công" cho người dùng.   Lưu lại thời gian, user thực hiện cập nhật lại mật khẩu, phục vụ cho việc kiểm tra và quản lý tài khoản.   1. 1. Hệ thống ghi nhận thông tin cập nhật mật khẩu gần nhất, bao gồm thời gian và người thực hiện.    2. Thông tin này được hiển thị trong phần lịch sử của tài khoản người dùng [HO] Tài Khoản Người Dùng     Các trường hợp kiểm tra khác báo lỗi khi cập nhật mật khẩu như sau:   * Khi tài khoản người dùng bị inactive:  Người dùng đang login sẽ bị đá ra ngoài màn hình Login và hiển thị thông báo: Người dùng không có quyền (mã thông báo, tên người dùng, mật khẩu sai) * **system.error khác: "**Đã xảy ra lỗi của hệ thống. Vui lòng liên hệ admin!" |
| Làm mới |  |  |  | **Chức năng:**   * Nút "Làm mới" cho phép người dùng xóa mọi ký tự đã nhập trong form.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả ký tự đã nhập |