|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Cho phép duyệt hàng loạt đơn hàng bán |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Requirements

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Danh sách đơn hàng bán |  | **Mô tả:** Tại màn hình danh sách Đơn hàng bán, hệ thống bổ sung button **Cập nhật trạng thái** và checkbox tại từng đơn hàng. Người dùng có thể tick chọn các đơn hàng trong danh sách và thực hiện cập nhật trạng thái hàng loạt.   * Checkbox: Cho phép người dùng tick chọn một hoặc nhiều đơn hàng trong danh sách. * Cập nhật trạng thái *[button]*: Người dùng nhấn button **Cập nhật trạng thái** → Hệ thống thực hiện kiểm tra:   + Nếu **không có đơn hàng nào được chọn** → hiển thị thông báo lỗi: *"Chưa có đơn hàng nào được chọn."*   + Nếu **các đơn hàng được chọn có trạng thái khác nhau** → hiển thị thông báo lỗi: *"Đơn hang đã ở trạng thái cuối cùng nên không thể cập nhật."*   + Nếu kiểm tra hợp lệ, hệ thống hiển thị popup **Chọn trạng thái**, gồm các trạng thái Hủy, Duyệt      * + - **Duyệt***[button]*: Nhấn vào nút → hệ thống thực hiện luồng Duyệt các đơn hàng đã chọn, mô tả **[luồng Duyệt đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444590#Sellout/%C4%90%C6%A1nh%C3%A0ngb%C3%A1n(NPP)-tonsaukhitao:~:text=th%C3%A1i%20Kh%E1%BB%9Fi%20t%E1%BA%A1o.-,Button%20Duy%E1%BB%87t%3A,-ch%E1%BB%89%20xu%E1%BA%A5t%20hi%E1%BB%87n)**     - **Hủy***[button]*: Nhấn vào nút → hệ thống thực hiện luồng Hủy các đơn hàng đã chọn, mô tả **[luồng Hủy đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444590#Sellout/%C4%90%C6%A1nh%C3%A0ngb%C3%A1n(NPP)-tonsaukhitao:~:text=hi%E1%BB%87n%20c%E1%BA%ADp%20nh%E1%BA%ADt.-,Button%20H%E1%BB%A7y,-%3A%20Ch%E1%BB%89%20hi%E1%BB%83n%20th%E1%BB%8B)** |