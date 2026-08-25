|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0 : Thêm bộ tần suất F12, viếng thăm 3 lần/1 tuần |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# 1 Chỉnh sửa thông tin điểm bán

Lưu ý

Đối với khách hàng **Direct Sales**: Chỉ được phép chỉnh sửa **Định vị trên bản đồ** và **Hình ảnh điểm bán**, các cụm thông tin còn lại không được chỉnh sửa

Đối với khách hàng Indirect Sales: Được chỉnh sửa tất cả thông tin

Link UI Figma:

Trên màn hình thông tin điểm bán:

* Chỉ áp dụng với những điểm bán có trạng thái Hoạt động và thuộc tuyến bán hàng đang chọn của nhân viên
* Trường hợp Tuyến bán hàng và Nhà phân phối không có dữ liệu, khi nhấn button edit sẽ cảnh báo:
  + Tuyến bán hàng không có dữ liệu không thể chỉnh sửa thông tin.
  + Áp dụng cho tất cả các section chỉnh sửa trên màn hình

Mỗi group thông tin sẽ có thêm chức năng chỉnh sửa, trừ thông tin xuất hóa đơn không được điều chỉnh, giao diện như sau:

Khi nhấn vào button  sẽ mở ra các giao diện tương ứng như sau:

| Mục điều chỉnh | **Màn hình điều chỉnh** | **Mô tả** |
| --- | --- | --- |
| Thông tin chung |  | Có thể chỉnh sửa các thông tin như lúc tạo mới điểm bán [[SM-APP] Tạo mới điểm bán - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48440328), các thông tin có thể chỉnh sửa bao gồm:   * Tên điểm bán * Số điện thoại * Email * Tần suất * Ngày đi tuyến  * Ngày đi tuyến phải phù hợp với tần suất   + F1-1, F1-2, F1-3, F1-4, F2-1, F2-2, F4: Ràng buộc chọn 1 thứ   + F8: Ràng buộc chọn 2 thứ   + RedV1.1.0 F12: Ràng buộc chọn 3 thứ   + F16: Ràng buộc chọn 4 thứ   + F24: Ràng buộc chọn 6 thứ   + Trường hợp chọn nhiều hơn hoặc ít hơn so với tần suất sẽ hiển thị thông báo:      - Với **tần suất @Tên tần suất** yêu cầu chọn @số thứ viếng thăm 1 tuần". Vui lòng kiểm tra lại.     - VD: Với tần suất là F8, yêu cầu chọn 2 thứ viếng thăm 1 tuần. |
| Thông tin người đại diện |  | Có thể chỉnh sửa tất cả các thông tin như lúc tạo mới điểm bán [[SM-APP] Tạo mới điểm bán - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48440328) |
| Phân loại điểm bán |  | Có thể chỉnh sửa tất cả các thông tin như lúc tạo mới điểm bán [[SM-APP] Tạo mới điểm bán - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48440328) |
| Thông tin vị trí |  | Có thể chỉnh sửa tất cả các thông tin như lúc tạo mới điểm bán [[SM-APP] Tạo mới điểm bán - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48440328) |
| Định vị trên bản đồ |  | * Hiển thị vị trí điểm bán ngay tại thời điểm nhân viên điều chỉnh điểm bán, không được thay đổi * Zoom In vào vị trí của điểm bán * Không di chuyển định vị trên bản đồ, nhưng có thể zoomin, zoomout và kéo bản đồ để xem |
| Hình ảnh điểm bán  Lưu ý cho button edit ở cụm thông tin Hình ảnh điểm bán: Trường hợp hình ảnh hiện tại của khách hàng đã đạt số hình tối đa.  Khi nhấn button edit sẽ hiển thị thông báo: Số lượng hình ảnh của khách hàng đã đạt tối đa, không thể điều chỉnh thêm!  Đồng ý → Đóng popup cảnh báo và ở lại màn hình hiện tại, không hiển thị màn hình chỉnh sửa. |  | Chụp ảnh theo yêu cầu  Số lượng ảnh đã chụp/ Số lượng hình ảnh tối đa (Tối đa 10 ảnh)  Lưu ý:**Không được xóa hình ảnh cũ đã lưu trước đó, chỉ được xóa hình mới chụp.**  Trường hợp đã chụp đủ 10 ảnh, [theo quy tắc Ảnh upload/Ảnh chụp trực tiếp](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App)  Trường hợp update này sẽ thêm vào hình ảnh đã có, không phải ghi đè lên hình ảnh cũ. |
|  | Rule chung khi nhấn Cập nhật | * Sau khi điều chỉnh → Nhấn Cập nhật để lưu lại thông tin. * Khi nhấn Cập nhật thực hiện lưu thông tin và kiểm tra như lúc tạo mới điểm bán. * Ngoài ra sẽ kiểm tra các trường hợp sau:   + Nhà phân phối có còn đang hoạt động không     - Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Nhà phân phối của điểm bán không hoạt động, không thể gửi yêu cầu điều chỉnh!   + Tuyến bán hàng có còn đang hoạt động không     - Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Tuyến bán hàng của điểm bán không hoạt động, không thể gửi yêu cầu điều chỉnh!   + Điểm bán có còn đang hoạt động không     - Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Điểm bán không hoạt động, không thể gửi yêu cầu điều chỉnh!   + Nhân viên có còn đang hoạt động không     - Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Nhân viên không hoạt động, không thể gửi yêu cầu điều chỉnh!   + Điểm bán có còn nằm trong tuyến bán hàng không     - Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Điểm bán không còn nằm trên tuyến bán hàng, không thể gửi yêu cầu điều chỉnh!   + Trường hợp có dữ liệu trên các màn hình chỉnh sửa bị ngưng hoạt động     - Khi nhấn Cập nhật sẽ hiển thị thông báo: <Tên trường> bị ngưng hoạt động, không thể điều chỉnh điểm bán!     - Trường hợp có nhiều trường dữ liệu bị ngưng hoạt động, sẽ hiển thị: <Tên trường 1>, <Tên trường 2>,...  bị ngưng hoạt động, không thể điều chỉnh điểm bán!   + Tuyến bán hàng có dữ liệu không (Do tuyến không tồn tại hoặc tuyến đã gán cho nhân viên khác hoặc nhân viên đã bị gỡ khỏi tuyến)?     - Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Tuyến bán hàng không có dữ liệu, không thể điều chỉnh điểm bán!   + Trường hợp có dữ liệu trên màn hình bị trống, mà trường dữ liệu đó là trường bắt buộc, khi nhấn Cập nhật sẽ hiển thị thông báo:     - <Tên trường> không có dữ liệu, không thể điều chỉnh điểm bán!     - Trường hợp có nhiều trường dữ liệu bị trống, sẽ hiển thị: <Tên trường 1>, <Tên trường 2>,...  không có dữ liệu, không thể điều chỉnh điểm bán! * Sau khi kiểm tra đúng thông tin:   + Lưu yêu cầu lên hệ thống và user có phân quyền sẽ thực hiện duyệt trên Portal hoặc Manager App   + Nếu User login = Salesman thì lưu người tạo = chính salesman đó   + Nếu User login = SUP chọn SUP lúc đăng nhập thì lưu người tạo = chính SUP đó   + Nếu User login = SUP chọn Salesman lúc đăng nhập thì lưu người tạo = Salesman được chọn đó * Mỗi màn hình chỉnh sửa thông tin sẽ là 1 request điều chỉnh thông tin trên Portal/App Manager * Quay lại màn hình trước đó:  * + Vẫn giữ các thông tin hiện tại của điểm bán   + Hiển thị warning: Có yêu cầu điều chỉnh điểm bán đang chờ duyệt   + Disable button edit ở group thông tin có yêu cầu đang chờ duyệt trên màn hình Thông tin điểm bán   + Các group thông tin nào không có yêu cầu duyệt thì vẫn hiển thị button edit cho edit bình thường |
|  | Rule sau khi yêu cầu cập nhật được duyệt đồng ý | Hiển thị thông tin mới được điều chỉnh của điểm bán |
|  | Rule sau khi yêu cầu cập nhật được duyệt từ chối | * Vẫn giữ các thông tin hiện tại của điểm bán * Kèm thông báo kèm lý do từ chối như sau:   + Hiển thị lý do từ chối   + Trường hợp lý do từ chối = Khác, thì hiển thị Lý do từ chối được nhập   + Button edit sẽ enable trở lại để user có thể chỉnh sửa lại thông tin   + Khi nhấn vào chỉnh sửa sẽ hiển thị thông tin hiện tại của điểm bán (Không hiển thị thông tin chỉnh sửa đã bị từ chối)        * Thông tin yêu cầu bị từ chối sẽ ẩn khi   + User nhấn button edit và tạo thành công một request mới cho loại điều chỉnh này   + Trường hợp không có request nào được tạo thì sau 14 ngày kể từ ngày request bị từ chối sẽ ẩn request này đi (Ngày hiện tại - Ngày update từ chối > 14 ngày) |

# 2 Nhận thông báo duyệt điều chỉnh thông tin điểm bán

* Khi yêu cầu điều chỉnh điểm bán đã được duyệt, hệ thống sẽ gửi thông báo đến App SM của nhân viên tạo yêu cầu điều chỉnh
* Thông báo hiển thị dưới dạng như sau:
  + Thông báo Chung
  + Loại = Nổi bật
  + Tiêu đề = Yêu cầu duyệt điểm bán - Điều chỉnh + @Loại điều chỉnh (Ví dụ: Yêu cầu duyệt điểm bán - Điều chỉnh Thông tin chung)
  + Nội dung:
    - Nếu duyệt Chấp nhận: Yêu cầu điều chỉnh điểm bán @Mã điểm bán - Tên điểm bán đã được duyệt Chấp nhận!
    - Nếu duyệt Từ chối: Yêu cầu điều chỉnh điểm bán @Mã điểm bán - Tên điểm bán đã được duyệt Từ chối. Lý do: Hiển thị thông tin lý do từ chối duyệt

* Các chức năng khác của thông báo sẽ giống như ở chức năng [[SM-APP] Thông báo - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53044663)