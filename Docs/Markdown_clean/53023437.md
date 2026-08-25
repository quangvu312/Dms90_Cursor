Chọn vào tab Báo cáo trên thanh menu sẽ hiển thị UI báo cáo như sau

| Chức năng | Mô tả |
| --- | --- |
| **Thông tin đang xem**   * RedV1.1.0 | **Thông tin đang xem**  Khi nhân viên mới đăng nhập, hiển thị tên, ảnh đại diện, và chức vụ của nhân viên đang đăng nhập  Nhân viên có thể chọn để đổi lại nhân viên khác, khi đổi sang nhân viên khác trường này sẽ hiển thị thông tin nhân viên được chọn để xem dữ liệu  Toàn bộ thông tin bên dưới sẽ hiển thị theo nhân viên được chọn ở trường này.  Đổi: Chức năng được mô tả ở [[Manager App] Chọn nhân viên và xem danh sách cây Salesforce nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53035242)  Nhân viên được chọn này sẽ reload theo nhân viên được chọn từ màn hình Tổng quan (Homepage) |
| Biểu đồ   * RedV1.1.0 | Hển thị thông tin Thực đạt KPI doanh số tháng của nhân viên đang được chọn và tất cả nhân viên cấp dưới của nhân viên đang được chọn.   * % thực đạt =    + Thực đạt/Mục tiêu \*100%, lấy 2 số thập phân sau dấu phẩy. Nếu không có mục tiêu (không được giao KPI, thì % KPI = 0)   + Thực đạt = 0 hoặc Mục tiêu = 0 hoặc Thực đạt = Mục tiêu = 0 thì hiển thị 0% * Thực đạt:    + Thực đạt doanh số theo tháng đã được mô tả ở mục KPI Doanh Số Tháng   + Không có thực đạt thì hiển thị 0 * Mục tiêu:    + Lấy tổng KPI doanh số tháng của tất cả nhân viên cấp dưới của nhân viên đang được chọn.   + Không có mục tiêu thì hiển thị 0 * Chi tiết:    + Chọn vào chi tiết trên biểu đồ sẽ chuyển sang báo cáo KPI Doanh số tháng, vào thẳng màn hình chi tiết KPI doanh số tháng và focus vào tháng hiện tại   + Trường hợp nhân viên chưa được giao KPI khi click vào chi tiết sẽ hiển thị thông báo: Chưa được giao KPI Doanh Số Tháng! * Giữ neo màn hình từ đoạn này. |
| Danh sách báo cáo | Tất cả các báo cáo có dạng chart trong mục này:   * Các chart sẽ focus ngày/tháng hiện tại và auto chọn ngày/tháng hiện tại và hiển thị thông tin của ngày/tháng hiện tại |

* Hiển thị danh sách báo cáo của cấp quản lý
* Click vào từng mục sẽ chuyển đến trang thông tin báo cáo cụ thể, như dưới danh sách sau:

V1.1.0 Tất cả các báo cáo có dạng chart trong mục này:

* RedV1.1.0:
  + Các chart sẽ focus ngày/tháng hiện tại và auto chọn ngày/tháng hiện tại và hiển thị thông tin của ngày/tháng hiện tại
  + Trường hợp khoảng thời gian filter không chứa ngày hiện tại/tháng hiện tại thì focus ngày đầu tiên/tháng đầu tiên
  + Bổ sung chức năng pull refresh cho màn hình này, khi pull refresh thì sẽ reload lại dữ liệu mới nhất.

true