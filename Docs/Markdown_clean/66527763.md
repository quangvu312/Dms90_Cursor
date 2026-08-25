|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Giám sát lộ trình nhân viên -> Thông tin viếng thăm điểm bán: Cho phép hệ thống hiển thị giá trị doanh số theo từng định dạng liên quan đến thuế giá trị gia tăng (VAT) đã config trên portal tại màn hình [HO] [HT] Danh sách cấu hình chung → **'Cấu hình xem dữ liệu doanh số KPI trước VAT hay sau VAT'** |
| Document version | RedV1.0.0  RedV1.0.1 Giám sát lộ trình nhân viên→ Doanh số nhân viên hiển thị theo config, Theo quy tắc tính doanh số |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Liên quan đến chức năng [Manager\_App] Giám sát lộ trình nhân viên

BRD:

Nội dung bổ sung: Cho phép hệ thống hiển thị giá trị doanh số theo từng định dạng liên quan đến thuế giá trị gia tăng (VAT) đã config trên portal tại màn hình [HO] [HT] Danh sách cấu hình chung → **'Cấu hình xem dữ liệu doanh số KPI trước VAT hay sau VAT'**

* **Trước VAT**: Doanh số chưa bao gồm VAT (giá trị thuần).
* **Sau VAT**: Doanh số đã bao gồm VAT (giá trị tổng).

RedV1.0.1 Giám sát lộ trình nhân viên→ Quy tắc tính doanh số

Quy tắc tính doanh số:

* Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên thuộc tất cả nhân viên cấp dưới của nhân viên đang chọn và nhân viên đang chọn (nếu là SUP, Sales) đặt hàng trong khoảng thời gian được chọn
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện dưới đây
* + Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
  + Doanh số được tính theo công thức được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo config [VAT\_DISPLAY\_CONFIGURATION](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)
  + Trạng thái đơn hàng: Trạng thái được chọn ở config [ORDER\_STATUS\_FOR\_APP\_REPORT](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)
* Lưu ý thông tin ngày tính doanh số = Ngày đặt hàng

Màn hình:

| **Tên Trường** | **Loại dữ liệu/Loại field** | Cho phép thao tác? | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Doanh số | Button | Có | Có | Popup đầy đủ:   * Hình ảnh điểm bán: Trường hợp có nhiều ảnh sẽ lấy ảnh được chụp gần nhất, trường hợp không có ảnh sẽ lấy ảnh mặc định: * Tên điểm bán * Địa chỉ điểm bán * Số điện thoại điểm bán * Mã điểm bán * Thông tin viếng thăm:   + Trường hợp chưa viếng thăm (Chưa có checkin và checkout), hiển thị: Chưa thực hiện viếng thăm   + Trường hợp đã viếng thăm, hiển thị thông tin viếng thăm cơ bản như sau:     - Tổng thời gian viếng thăm: Thời gian checkout - THời gian checkin. Format HH:MM:SS     - Checkin lúc: Thời gian checkin. Format HH:MM:SS     - Checkout lúc: Thời gian checkout. Format HH:MM:SS     - Phát sinh n đơn hàng: Hiển thị thông tin Số đơn hàng của nhân viên đang chọn đã tạo tại thời điểm viếng thăm điểm bán trong ngày được chọn. Quy tắc tính đơn hàng hợp lệ được mô tả ở đầu tài liệu này.   **BỔ SUNG THÊM "Doanh số + Giá trị + đ" , giá trị có format phần nghìn**  Trong đó giá trị dựa vào config đã config trên portal tại màn hình [HO] [HT] Danh sách cấu hình chung → **'Cấu hình xem dữ liệu doanh số KPI trước VAT hay sau VAT'** để hiển thị giá trị tương ứng:  VAT\_DISPLAY\_CONFIGURATION = False: Xem dữ liệu trước VAT => field @Doanh số trước VAT theo [Thông tin lịch sử di chuyển nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525827#id-[HO][HT]Truyv%E1%BA%A5nt%E1%BB%8Da%C4%91%E1%BB%99nh%C3%A2nvi%C3%AAn-Th%C3%B4ngtinl%E1%BB%8Bchs%E1%BB%ADdichuy%E1%BB%83nnh%C3%A2nvi%C3%AAn) → Doanh số trước VAT  VAT\_DISPLAY\_CONFIGURATION = True: Xem dữ liệu sau VAT => field @Doanh số sau VAT theo [Thông tin lịch sử di chuyển nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525827#id-[HO][HT]Truyv%E1%BA%A5nt%E1%BB%8Da%C4%91%E1%BB%99nh%C3%A2nvi%C3%AAn-Th%C3%B4ngtinl%E1%BB%8Bchs%E1%BB%ADdichuy%E1%BB%83nnh%C3%A2nvi%C3%AAn) → Doanh số sauVAT |

RedV1.0.1 Giám sát lộ trình nhân viên→ Doanh số nhân viên hiển thị theo config

Thông tin Doanh số sẽ đi theo công thức được mô tả theo quy tắc tính doanh số

Quy tắc tính doanh số:

* Tính tổng **DOANH SỐ** của sản phẩm trên đơn hàng được nhân viên thuộc tất cả nhân viên cấp dưới của nhân viên đang chọn và nhân viên đang chọn (nếu là SUP, Sales) đặt hàng trong khoảng thời gian được chọn
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện dưới đây
* + Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
  + Doanh số được tính theo công thức được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo config [VAT\_DISPLAY\_CONFIGURATION](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)
  + Trạng thái đơn hàng: Trạng thái được chọn ở config [ORDER\_STATUS\_FOR\_APP\_REPORT](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)
* Lưu ý thông tin ngày tính doanh số = Ngày đặt hàng