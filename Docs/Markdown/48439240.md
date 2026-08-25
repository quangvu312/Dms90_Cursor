|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-254] [AppQL] Login - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-254) |
| Epic | [[ECDM-253] MANAGER APP - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-253) |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Màn hình Đăng nhập khi mới vào App

| Tên Trường | Loại dữ liệu/Loại field | Chỉnh sửa? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Mã nhân viên | Text | Có | Bắt buộc | * Mã của nhân viên dùng để đăng nhập vào hệ thống. * Được tạo từ màn hình [[Portal HO][DMS] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) * Chỉ cho phép nhập chữ và số (ví dụ: "NV12345"), không nhập khoảng trắng và ký tự đặc biệt.  * Lúc chưa nhập liệu hiển thị UI như sau      * Sau khi nhập sẽ hiển thị UI như sau:      * + Có thế nhấn icon x để xóa hết dữ liệu đã nhập  * Trường hợp mã nhân viên dài có thể scroll ngang để xem đầy đủ mã nhân viên |
| Mật khẩu | Password | Có | Bắt buộc | * Mật khẩu đăng nhập của nhân viên. * Được tạo từ màn hình [[Portal HO][DMS] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) * Khi chưa nhập mật khẩu hiển thị UI như sau:      * Sau khi nhập hiển thị UI như sau:      * + Có thế nhấn icon x để xóa hết dữ liệu đã nhập   + Nhấn icon xem mật khẩu hiển thị UI như sau:      * + Sau đó nếu tiếp tục nhập thì thấy được mật khẩu cho đến khi chuyển về icon ẩn mật khẩu. * Mật khẩu có thể nhập chữ cái, số và ký tự đặc biệt, không được nhập khoảng trống. * Trường hợp mật khẩu dài có thể scroll ngang để xem đầy đủ mật khẩu. |
| Ghi nhớ mật khẩu | Checkbox | Có | Không | Tùy chọn cho phép người dùng lưu lại thông tin đăng nhập.   * Khi bật:  * + Hệ thống sẽ lưu mã nhân viên và mật khẩu để tự động điền ở lần đăng nhập sau.  * + Khi người dùng thực hiện đăng xuất hoặc kiil app, khi quay trở về trang đăng nhập thông tin  mã nhân viên và mật khẩu sẽ tự động điền vào. * Khi tắt: * + Hệ thống không thực hiện lưu mã nhân viên và mật khẩu   + Khi người dùng thực hiện đăng xuất hoặc kiil app khi quay trở về trang đăng nhập thông tin mã nhân viên và mật khẩu sẽ trống. |
| Button Đăng nhập | Button | - | - | Khi nhấn vào, hệ thống sẽ thực hiện kiểm tra thông tin:   * Nếu thiếu Mã nhân viên hoặc Mật khẩu, hệ thống sẽ hiển thị thông báo yêu cầu nhập đủ thông tin. * Thông báo:   + Vui lòng nhập Mã nhân viên   + Vui lòng nhập Mật khẩu   + Thông báo hiển thị bên dưới mỗi trường như sau:      * Hệ thống kiểm tra mã nhân viên và mật khẩu được tạo từ màn hình [[Portal HO][DMS] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357)   + **Chỉ có phép các nhân viên có các chức vụ sau đăng nhập**:     - SD (Sales Director): giám đốc bán hàng toàn quốc     - RSM (Region Sales Manager): quản lý vùng bán hàng     - ASM (Area Sales Manager):  quản lý khu vực bán hàng     - SS (Sales Supervior): quản lý trực tiếp salesman   + Nếu nhân viên có chức vụ nằm ngoài các chức vụ kể trên đăng nhập vào hệ thống, hiển thị thông báo: Bạn không có quyền đăng nhập vào ứng dụng này, vui lòng liên hệ Admin để được hỗ trợ! * Nếu thông tin đăng nhập đúng, hệ thống sẽ:   + Điều hướng người dùng đến trang chính của ứng dụng quản lý.   + Nếu tùy chọn **Ghi nhớ mật khẩu** được chọn, thông tin đăng nhập sẽ được lưu lại cho lần đăng nhập sau. * Nếu thông tin đăng nhập sai:   + Hiển thị thông báo lỗi: "Mã nhân viên hoặc mật khẩu không đúng. Vui lòng thử lại."   + Hiển thị thông báo trên dưới dạng popup thông báo. |

# Màn hình Đăng nhập sau khi nhập liệu