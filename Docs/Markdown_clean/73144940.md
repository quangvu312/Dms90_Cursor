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

# 1 Trả hàng nguyên đơn

## 1.1 Chọn đơn hàng để trả

* Chọn trả hàng nguyên đơn, hệ thống hiển thị danh sách đơn hàng (Điều kiện Và):

* + Có thông tin điểm bán đang chọn trên đơn hàng
  + Nếu hệ thống:
    - CORE DMS90: Tất cả đơn hàng
    - HƯƠNG THỦY: Đơn hàng phải là đơn **Indirect Sales**
  + Ở trạng Đã Xuất Kho
  + Chưa được trả hàng
    - Chỉ cần đơn trả hàng ở trạng thái Khởi tạo thì cũng được tính là đã có trả hàng.
    - Trường hợp đã có đơn trả hàng, nhưng đơn trả hàng ở trạng thái Đã hủy, thì được hiểu là đơn chưa trả hàng
  + Có ngày đặt hàng nằm trong tháng chưa khóa sổ, những tháng đã khóa sổ thì không hiển thị các đơn hàng lên để trả
  + Loại đơn hàng = Đơn đặt hàng
  + Hình thức đặt hàng = Đơn bán hàng (Không hiển thị đơn Vansales)
  + Đơn hàng phải chứa các sản phẩm còn hoạt động.
    - Đơn hàng chỉ cần chứa 1 sản phẩm bị ngưng hoạt động sẽ không hiển thị đơn hàng để người dùng chọn
    - Trường hợp dữ liệu xảy ra đồng thời, khi chọn đơn hàng sẽ kiểm tra và hiển thị thông báo: Đơn hàng gốc có sản phẩm @Mã sản phẩm - Tên sản phẩm đã ngưng hoạt động, không thể trả nguyên đơn hàng, vui lòng chọn chức năng trả hàng lẻ!
    - Nếu có nhiều sản phẩm, chỉ hiển thị thông báo 1 sản phẩm bất kỳ.
  + Đơn hàng phải chứa tất cả sản phẩm thuộc nhãn hàng trên tuyến bán hàng của nhân viên bán hàng đang đăng nhập (hoặc nhân viên đang được chọn nếu đang login role SUP)
    - Đơn hàng chỉ cần chứa 1 sản phẩm không thuộc nhãn hàng trên tuyến bán hàng của nhân viên bán hàng đang đăng nhập (hoặc nhân viên đang được chọn nếu đang login role SUP) thì sẽ không hiển thị đơn hàng để người dùng chọn
    - Trường hợp dữ liệu xảy ra đồng thời, khi chọn đơn hàng sẽ kiểm tra và hiển thị thông báo: Đơn hàng gốc có sản phẩm @Mã sản phẩm - Tên sản phẩm không thuộc nhãn hàng trên tuyến bán hàng, không thể trả nguyên đơn hàng, vui lòng chọn chức năng trả hàng lẻ!
    - Nếu có nhiều sản phẩm, chỉ hiển thị thông báo 1 sản phẩm bất kỳ.
  + NPP trên đơn hàng gốc phải là NPP trên tuyến bán hàng của nhân viên bán hàng đang đăng nhập (hoặc nhân viên đang được chọn nếu đang login role SUP)
    - Nếu khác NPP sẽ không hiển thị đơn hàng để người dùng chọn
    - Trường hợp dữ liệu xảy ra đồng thời, khi chọn đơn hàng sẽ kiểm tra và hiển thị thông báo: Đơn hàng gốc có NPP khác NPP trên tuyến bán hàng, không thể trả nguyên đơn hàng, vui lòng chọn chức năng trả hàng lẻ!

| Tên trường | Mô tả |
| --- | --- |
| Tìm kiếm | * Tìm kiếm Search like theo mã đơn hàng |
| Bộ lọc | Click vào bộ lọc hiển thị màn hình lọc như sau:     * **Ngày tạo đơn hàng:**   + Chọn từ ngày - đến ngày để lọc thông tin đơn hàng   + Đến ngày >= Từ ngày   + Phải chọn cả từ ngày và đến ngày. Trường hợp không chọn, hiển thị lỗi inline bên dưới dòng: Không được để trống.   + Lọc theo ngày tạo đơn hàng * **Nguồn tạo đơn hàng:**   + App   + Web * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào danh sách đơn hàng theo từng tab và reload danh sách đơn hàng hiển thị kết quả tìm kiếm |
| Thông tin đơn hàng | * Mã đơn hàng: Thông tin mã của đơn hàng * Thời gian tạo đơn: Thời gian tạo đơn hàng. Format: dd/mm/yyyy * Trạng thái: Trạng thái của đơn hàng, chỉ hiển thị các đơn hàng có trạng thái Đã xuất kho và chưa được trả hàng * Điểm bán: Thông tin điểm bán trên đơn hàng   + Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán   + Mã điểm bán   + Tên điểm bán   + Địa chỉ điểm bán   + Số điện thoại điểm bán * Nhà phân phối: Thông tin nhà phân phối user trên đơn hàng * Loại đơn: Đơn đặt hàng * Nguồn tạo:  * + APP: Đơn hàng được tạo trên app Salesman   + WEB: Đơn hàng được tạo trên web portal * Giá trị đơn hàng:    + Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng   + Format tiền tệ hàng nghìn kèm icon tiền tệ * Chi tiết đơn hàng:    + Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752#id-[SMAPP]%C4%90%E1%BA%B7th%C3%A0ng%E1%BB%9Fnhi%E1%BB%87mv%E1%BB%A5vi%E1%BA%BFngth%C4%83m(kh%C3%B4ngkhuy%E1%BA%BFnm%C3%A3i)-2.2.Chiti%E1%BA%BFt%C4%91%C6%A1nh%C3%A0ngDETAIL_ORDER)   + Đối với những đơn hàng có trạng thái Đã xuất kho, bổ sung button Trả hàng.   + Chọn vào Trả hàng sẽ thực hiện trả hàng nguyên đơn giống chức năng được mô tả bên dưới |

## 1.2 Xác nhận đơn hàng trả

| Tên trường | Mô tả |
| --- | --- |
| Nhà phân phối | Nhà phân phối trên đơn hàng gốc |
| Kho trả hàng | Mặc định kho bán hàng trên đơn hàng gốc |
| Điểm bán | Thông tin điểm bán trên đơn hàng gốc:   * Tên điểm bán - Mã điểm bán * Số điện thoại điểm bán * Địa chỉ điểm bán (Địa chỉ đầy đủ) |
| Lý do trả hàng | * Hiển thị lý do trả hàng đã chọn * Có thể nhấn vào để chọn lý do trả hàng * Khi chọn vào hiển thị popup như sau:          * Hiển thị danh sách lý do được cài đặt ở màn hình **Dữ liệu chung - Lý do trả đơn bán hàng** để user chọn (chỉ load các lý do đang hoạt động) * Nếu chọn lý do khác, user bắt buộc phải nhập thêm lý do (text, 300) bằng chữ trong ô lý do * Chọn lý do → Xác nhận * Khi nhấn lại vào trường lý do sẽ xem được thông tin Lý do khác đã nhập   + Nếu chọn qua các lý do còn lại, chưa nhấn đồng ý, khi chọn lại lý do Khác vẫn thấy được nội dung trong ô "Nhập lý do khác"   + Nếu chọn qua lý do còn lại, nhấn đồng ý, sẽ xóa thông tin nội dung trong ô "Nhập lý do khác" |
| Thông tin sản phẩm và khuyến mãi | * Sản phẩm, đơn vị, lô là thông tin trên đơn hàng gốc * Giá bán của sản phẩm là giá bán trên đơn hàng gốc * Số lượng của sản phẩm là số lượng trên đơn hàng gốc * Các thông tin như thành tiền, khuyến mãi đều là thông tin trên đơn hàng gốc * Ghi chú sản phẩm   + Clear ghi chú trên đơn gốc để người dùng nhập lại ghi chú mới cho từng sản phẩm trên đơn trả hàng   + Nhập tối đa 100 ký tự   + Không bắt buộc nhập |
| Thông tin thanh toán | Thông tin thanh toán trên đơn hàng gốc |
| Ghi chú đơn hàng | Freetext để sales nhập ghi chú cho đơn trả hàng   * Clear ghi chú trên đơn gốc để người dùng nhập lại ghi chú mới cho đơn trả hàng * Nhập tối đa 300 ký tự * Không bắt buộc nhập * Nếu nhập quá dài sẽ có thanh scroll để xem đầy đủ ghi chú đã nhập |
| Tạo đơn trả | * Mặc định kho hàng trả = kho hàng bán trên đơn hàng chọn để trả * Mặc định kênh bán hàng trên đơn trả hàng = Kênh bán hàng trên đơn hàng chọn để trả * Trạng thái đơn hàng trả = Khởi tạo, chưa cập nhật thông tin tồn kho/ngân sách/khuyến mãi, sẽ thực hiện duyệt và cập nhật tồn kho/ngân sách/khuyến mãi theo quy trình trên Portal: [Điểm bán trả hàng nguyên đơn - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023457) * Ngày trả hàng = Ngày hiện tại * Lưu thông tin nhân viên tạo đơn trả * Nguồn tạo đơn trả = APP * Loại trả hàng = Trả hàng nguyên đơn |