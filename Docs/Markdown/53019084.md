|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-647  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-1262 |
| Epic | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-639 |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# **1.MỤC ĐÍCH**

Tạo chức năng chụp hình bày hàng sản phẩm tại điểm bán; phục vụ cho nghiệp vụ trưng bày hàng hóa sản phẩm.

Hỗ trợ nhân viên chụp hình hàng ngày khi viếng thăm điểm bán

# **2.CHỨC NĂNG**

Chụp hình bày hàng điểm bán trên SM App.

Xem hình ảnh chụp bày hàng trên portal

# **3.MÔ TẢ**

## **3.1 Chụp hình bày hàng điểm bán trên SM App trong chức năng viếng thăm điểm bán**

**Thao tác:**

Sau khi checkin viếng thăm điểm bán thành công.  
Người dùng chọn tính năng bày hàng, chụp hình và lưu hình ảnh hoàn tất bày hàng.

**Ràng buộc:**

Bắt buộc phải checkin viếng thăm điểm bán mới được chụp hình bày hàng

Chỉ chụp hình bày hàng của 1 điểm bán trong cùng 1 thời điểm.

Không được chỉnh sửa thông tin khi đã hoàn tất chụp hình bày hàng trên SM app.

**Luồng thao tác bày hàng trên SM App**

| STT | **Tên Trường** | **Mô tả** |
| --- | --- | --- |
| 1 | Bày hàng | Mô tả: Người dùng nhấn nhiệm vụ Bày hàng mở ra màn hình chụp hình bày hàng  Ràng buộc:   * Chỉ được nhấn nhiệm vụ khi đã checkin viếng thăm điểm bán * Nếu chưa checkin viếng thăm điểm bán khi chọn vào hiển thị thông báo: Vui lòng viếng thăm điểm bán trước khi thực hiện các tác vụ!   Background bày hàng:   * Sẽ hiển thị background khi chưa có hình ảnh nào * Trường hợp có hình ảnh sẽ ẩn background |
| 2 | Button back | Khi nhấn trở về, nếu màn hình đã có nhập liệu, [hiển thị cảnh báo trước khi thoát](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App) |
| 3 | Chụp hình | * Người dùng nhấn nút chụp hình để chụp bày hàng, chụp hình theo rule từ [Ảnh upload/Ảnh chụp trực tiếp](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App).     Sau khi chụp sẽ có thông tin timestamp được đính kèm trên hình như sau:   * Title hình chụp: Hình ảnh bày hàng * Thời gian chụp ảnh:  * + Lấy thời gian hiện tại tại thời điểm ảnh được chụp.   + Định dạng thời gian: HH:MM:SS DD-MM-YYYY   + Lấy thời gian của server hệ thống, không lấy thời gian trên thiết bị người dùng.     - Trường hợp server có vấn đề không lấy được thời gian (timeout), sẽ hiển thị dòng text: "Không lấy được thời gian của hệ thống" * Địa chỉ chấm công: Chuyển đổi tọa độ địa chỉ chụp ảnh thành địa chỉ chi tiết: số nhà, đường, phường, quận/huyện, tỉnh/thành phố, quốc gia.  * Tọa độ chấm công:Lấy thông tin tọa độ địa lý (kinh độ và vĩ độ) tại vị trí ảnh được chụp. * **Mã nhân viên - Tên nhân viên**: Lấy mã nhân viên và tên nhân viên từ thông tin người dùng đã đăng nhập trong ứng dụng để chụp ảnh.     * Button back: Nhấn để quay về màn hình trước đó * Chụp lại: Nhấn để chụp hình lại * Xong: Nhấn để ghi nhận hình ảnh đã chụp, hệ thống hiển thị UI như sau:      * Hiển thị hình ảnh đã chụp, mỗi dòng 3 hình ảnh * Cho phép xóa ảnh đã chụp để chụp lại * Tổng số hình ảnh: Hiển thị tổng số lượng hình ảnh hiện tại đang có trên màn hình |
| 3 | Xác nhận     * Nhiệm vụ được tính là hoàn thành khi user chụp 1 hình ảnh và nhấn Xác nhận thành công. | Mô tả: Người dùng nhấn nút để hoàn tất tính năng chụp bày hàng  Ràng buộc:   * Bắt buộc phải chụp ít nhất 1 hình ảnh mới được Xác nhận, trường hợp chưa chụp hình, hiển thị thông báo: Vui lòng chụp ít nhất 1 hình ảnh!   + Đồng ý: Trở lại màn hình hiện tại  * Nếu đã đầy đủ các điều kiện, hiển thị [Cảnh báo trước khi lưu dữ liệu](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App)   + Chọn Đồng ý để ghi nhận hình ảnh bày hàng (lúc này sẽ tạo thành 1 dòng hình ảnh trưng bày trên [Portal] Báo cáo Hình Ảnh Bày Hàng), ghi nhận thời tạo hình ảnh bày hàng = thời gian hoàn thành nhiệm vụ), lưu lại thời gian hoàn thành nhiệm vụ   + chọn Trở lại để tắt thông báo và Trở lại màn hình hiện tại * Ghi nhận hoàn thành nhiệm vụ như sau:      * Trường hợp chưa rời điểm bán → Chọn lại vào bày hàng   + Nếu số hình ảnh < 10 → Có thể tiếp tục chụp thêm hình ảnh → Nhấn xác nhận     - → Lưu thêm những hình ảnh chưa lưu vào dòng hình ảnh bày hàng trên [Portal] Báo cáo Hình Ảnh Bày Hàng     - Có thể xóa những hình ảnh cũ đã chụp trước đó     - Ghi nhận thời gian cập nhật = thời gian Xác nhận hoàn thành nhiệm vụ lúc này.     - Ví dụ       * Step 1: Lúc đầu vào chụp 2 hình, bấm vào lại chụp thêm 3 hình → Lúc này trên báo cáo sẽ chỉ có 1 dòng hình ảnh bày hàng nhưng sẽ có 5 tấm hình, thời gian cập nhật là thời gian Xác nhận hoàn thành nhiệm vụ gần nhất.       * Step 2: Vào tiếp lần nữa, xóa 3 hình → Lúc này trên báo cáo sẽ chỉ có 1 dòng hình ảnh bày hàng nhưng sẽ có 2 tấm hình, thời gian cập nhật là thời gian Xác nhận hoàn thành nhiệm vụ gần nhất.     - Ở danh sách nhiệm vụ sẽ ghi đè thời gian hoàn thành nhiệm vụ = thời gian Xác nhận hoàn thành nhiệm vụ gần nhất. * Trường hợp rời điểm bán, ra danh sách điểm bán viếng thăm, chọn : Hệ thống hiển thị lại danh sách nhiệm vụ đã thực hiện và thời gian hoàn thành. Lúc này chọn vào nhiệm vụ bày hàng sẽ xem lại được hình ảnh bày hàng đã chụp và không thể chỉnh sửa.      * Trường hợp chọn :   + Sẽ mở màn hình danh sách nhiệm vụ + button Viếng thăm lại, phải thực hiện checkin lại mới có thể thực hiện nhiệm vụ      * + Trường hợp thực hiện checkin để viếng thăm lại sẽ là 1 lần chụp hình hoàn toàn mới và không hiển thị các hình ảnh cũ đã chụp trong lần viếng thăm trước đó. * Trường hợp chưa nhấn "Xác nhận" hoàn thành nhiệm vụ + chưa rời điểm bán nhưng đã đến thời gian tự động chấm công cuối ngày   + Không ghi nhận bất cứ thông tin gì   + Ghi nhận checkout cửa hàng = 23:59:59   + Ghi nhận chấm công cuối ngày = 23:59:59 |

## **3.2 Chụp hình bày hàng điểm bán trên SM App trong chức năng chăm sóc điểm bán**

* Người dùng chọn menu Khác → Điểm bán → Điểm Bán Chăm sóc

* Hệ thống mở danh sách nhiệm vụ chăm sóc → người dùng chọn tính năng bày hàng, chụp hình và lưu hình ảnh hoàn tất bày hàng như viếng thăm điểm bán
* Không cần checkin cũng có thể thực hiện nhiệm vụ
* Sau khi thực hiện nhiệm vụ, dữ liệu hình ảnh bày hàng trên báo cáo sẽ không có các thông tin sau: Mã tuyến, Tên tuyến, Tần suất viếng thăm, Loại tuyến, Khoảng cách check-in (m), Khoảng cách check-out (m), Thời gian bắt đầu viếng thăm, Thời gian kết thúc viếng thăm
* Khi thực hiện bày hàng trên điểm bán chăm sóc:
  + Nếu trong ngày hiện tại vào lại nhiệm vụ này
    - Vẫn hiển thị hình ảnh đã chụp trong ngày.
    - Cho phép xóa hình đã chụp và chụp lại theo rule từ [Ảnh upload/Ảnh chụp trực tiếp](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App).
    - Lúc này trên báo cáo sẽ chỉ có 1 dòng hình ảnh bày hàng nhưng sẽ có số lượng hình ảnh cuối cùng được ghi nhận.
    - Đến 23:59:59 sẽ lưu trữ và reset hình ảnh của ngày hiện tại.
  + Nếu qua ngày mới vào nhiệm vụ này sẽ thực hiện chụp hình ảnh mới và không hiển thị hình ảnh cũ đã chụp ngày hôm trước.

## **3.3 Trường hợp vừa chụp hình bày hàng ở viếng thăm và chăm sóc**

* Ở chức năng nào sẽ theo flow ở chức năng đó.
* Ở chức năng nào sẽ lưu và hiển thị hình ảnh theo chức năng đó.