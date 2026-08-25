|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6150 |
| Epic |  |
| Feature | Cung cấp một cái nhìn toàn diện về tất cả các hoạt động trong ngày của nhân viên. Xem tổng quan toàn bộ hoạt động của nhân viên tại một điểm bán cụ thể trong một lần viếng thăm. Danh sách đơn hàng tại điểm bán |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | Thaonguyen |
| Chage History | 2 |

truenone

# Báo cáo viếng thăm điểm bán

**Mục đích:** Chức năng bao gồm các màn hình và luồng nghiệp vụ sau:

* Giúp nhân viên bán hàng (SM) tự theo dõi lịch sử viếng thăm, kết quả làm việc (số đơn, doanh số) và tiến độ thực hiện tuyến bán hàng của chính mình theo từng ngày.
* Lọc danh sách điểm bán theo nhiều tiêu chí.
* Xem chi tiết một lượt viếng thăm, bao gồm timeline các hoạt động và hình ảnh.

Định nghĩa Nghiệp vụ tạo đơn

Nguồn đặt đơn app:

* viếng thăm trong tuyến: Nghiệp vụ tạo đơn = **Đơn hàng trong tuyến**
* viếng thăm ngoại tuyến: Nghiệp vụ tạo đơn = **Đơn hàng ngoại tuyến**
* chăm sóc -> điểm bán -> đặt hàng: Nghiệp vụ tạo đơn = **Đơn hàng chăm sóc**
* user chỉnh sửa đơn hàng → Nghiệp vụ tạo đơn giữ nguyên như lúc lưu đơn hàng lần đầu tiên; Ngày đơn hàng = ngày chỉnh sửa đơn hàng.
* Các trường hợp đặt hàng còn lại → Nghiệp vụ tạo đơn = **Đơn hàng chăm sóc**

Nguồn đặt đơn Portal: mặc định  "Nghiệp vụ tạo đơn" = **Tạo đơn trên web**

Rule DS

Quy tắc tính doanh số

**Quy tắc tính doanh số:**

* Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên đang login đặt hàng trong khoảng thời gian được chọn. 

  + Trường hợp user login = Salesman, thì xem doanh số của nhân viên Salesman
  + Trường hợp user login = SUP, user được chọn = SUP, thì xem doanh số của nhân viên SUP
  + Trường hợp user login = SUP, user được chọn = Salesman, thì xem doanh số của nhân viên Salesman
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện dưới đây

  + Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
  + Doanh số được tính theo công thức được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo config [VAT\_DISPLAY\_CONFIGURATION](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)
  + Trạng thái đơn hàng: Trạng thái được chọn ở config [ORDER\_STATUS\_FOR\_APP\_REPORT](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)
* Lưu ý thông tin ngày tính doanh số = Ngày đặt hàng
* Quy tắc tính đơn hàng hợp lệ:  

  + Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như:

    - Nguồn đơn hàng: Tùy "Trong tuyến/ Ngoại tuyến" bên dưới
    - Trạng thái đơn hàng:

      * Trên App: Theo config [ORDER\_STATUS\_FOR\_APP\_REPORT](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)
    - Đơn hàng không có trạng thái “**Đã hủy**”:

      * Ví dụ:

        + Ngày 10/6, điểm bán đặt đơn hàng A001.
        + Ngày 11/6, đơn hàng bị cập nhật trạng thái "Đã hủy".  
          → Khi xem báo cáo doanh số ngày 10/6, đơn hàng này sẽ **không được**tính vì đã bị hủy.
        + → Khi xem báo cáo doanh số ngày 11/6,đơn hàng này sẽ **không được** tính vì đã bị hủy.
    - Đơn hàng không có **đơn hàng trả**. Trong đó:

      * Chỉ tính trả nguyên đơn
      * Phải có ngày trả hàng trong khoảng thời gian xem báo cáo
      * Phải có trạng thái = Đã duyệt
      * Ví dụ:

        + Ngày viếng thăm là 10/1, có đặt đơn hàng ngày đặt hàng = 10/1
        + Ngày 11/1 đơn hàng chuyển trạng thái **Đã duyệt/Đã xuất kho/Đã giao hàng/...**
        + Ngày 12/1 điểm bán trả đơn hàng, ngày trả hàng = 12/1
        + Xem báo cáo

          - Xem báo cáo ngày 10/1, điểm bán không có đơn hàng
          - Xem báo cáo ngày 11/1, chọn ngày xem báo cáo = 10/1 điểm bán có đơn hàng (giả định xem sau thời điểm duyệt đơn hàng)
          - Xem báo cáo ngày 12/1, chọn ngày xem báo cáo = 10/1 điểm bán không có đơn hàng (giả định xem sau thời điểm trả đơn hàng)

**Màn hình:**

1/ SS/ SM chọn tuyến bán hàng và login thành công trên app SM

2/ Vào **[Báo cáo]** -> Người dùng nhấn vào mục **"Báo cáo viếng thăm điểm bán"**. Khi chưa có chọn tuyến và xem báo cáo → **Hiển thị "Chưa có tuyến bán hàng nên chưa có thông tin viếng thăm trên tuyến!"**

Mô tả:

| Chức năng | Mô tả |
| --- | --- |
| **Header** | * Tiêu đề: "Báo cáo viếng thăm điểm bán". * Nút "Back" (<): Quay lại màn hình "Báo cáo" chính. |
| Thời gian | * Thời gian từ đầu tháng đến cuối tháng của ngày hiện tại (Ví dụ ngày hiện tại là 10/12/2024, thì lấy thời gian từ 1/12 - 31/12) - Quy tắc của bộ lọc áp dụng chung cho APP SM có ngày mặc định → Xem [Salesman App](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App) * Thời gian này sử dụng để tính doanh số trên báo cáo dựa theo ngày tạo đơn hàng * User có thể nhấn để chọn lại thời gian  * Đến ngày >= Từ ngày * Từ ngày → Đến ngày có thể chọn bất cứ khoảng thời gian nào miễn là Từ ngày → **Đến ngày trong vòng 30 ngày.** |
| Ghi nhận viếng thăm | Label: "Ghi nhận viếng thăm" |
| Thu gọn tất cả/ Mở rộng tất cả | * Nút **Collapse (Thu gọn tất cả)/ Expand (Mở rộng tất cả)** dữ liệu của từng ngày. Mặc định "collapse all" và dấu mũi tên hướng xuống * Dữ liệu được nhóm theo từng ngày * Mỗi nhóm ngày có thể được mở rộng hoặc thu gọn độc lập. |
| Thanh tìm kiếm | Chọn vào ô này để tìm kiếm thông tin điểm bán theo Tên, mã điểm bán, số điện thoại (Search like, không phân biệt có dấu/ không dấu, chữ hoa hay chữ thường)  Những điểm bán thỏa điều kiện sẽ hiển thị trên danh sách |
| Bộ lọc | Cho phép lọc theo trạng thái: Đã viếng thăm, Chưa viếng thăm, Có đơn hàng, Không có đơn hàng, Trong tuyến, Ngoại tuyến.  Chọn icon filter hiển thị Màn hình "Bộ lọc", chọn back để thoát về màn hình trước đó     * **Trạng thái viếng thăm**(chọn 1, không bắt buộc):   + **Đã viếng thăm:**Hệ thống hiển thị mặc định danh sách các điểm bán trên tuyến bán hàng đang chọn      - Khi chọn trạng thái "Đã viếng thăm"     - Hiển thị danh sách các điểm bán đã viếng thăm (checkin + checkout) trong tuyến và ngoại tuyến   + **Chưa viếng thăm:**Hệ thống hiển thị mặc định danh sách các điểm bán trên tuyến bán hàng đang chọn      - Khi chọn trạng thái "Chưa viếng thăm"     - Hiển thị danh sách các điểm bán chưa viếng thăm (chưa checkin) trong tuyến và ngoại tuyến * **Loại điểm bán** (chọn 1, không bắt buộc):   + **Trong tuyến:**      - Khi chọn trạng thái "Trong tuyến"     - Hiển thị danh sách các điểm bán đã viếng thăm (checkin + checkout) trong tuyến   + **Ngoại tuyến:**      - Khi chọn trạng thái "Ngoại tuyến"     - Hiển thị danh sách các điểm bán đã viếng thăm (checkin + checkout) ngoại tuyến * **Phát sinh đơn hàng (chọn 1, không bắt buộc)**:****   + **Có:**Hệ thống hiển thị mặc định danh sách các điểm bán trên tuyến có hoặc không có đơn hàng      - Chọn "Có": Hệ thống hiển thị danh sách các điểm bán trên tuyến có tồn tại từ một đơn hàng   + **Không:**      - Hiển thị danh sách các điểm bán trên tuyến bán hàng không có tồn tại bất kì đơn hàng nào * Kết hợp nhiều điều kiện theo logic AND. thỏa tất cả các điều kiện sẽ hiển thị các điểm bán thỏa theo ngày.  * **Nút "Đặt lại":** Xóa tất cả các tiêu chí đã chọn * **Nút "Áp dụng":** Đóng màn hình bộ lọc và áp dụng các tiêu chí lọc |
| Thẻ tổng hợp theo từng ngày | * **Ngày tháng:** Hiển thị ngày "04/11/2024", nếu là hôm nay hiển thị "Hôm nay"; * **Nút** "Danh sách điểm bán" icon mũi tên xuống/ "Thu gọn" icon mũi tên lên. Mặc định hiển thị "Danh sách điểm bán"  và icon mũi tên xuống. * **Thẻ Tổng quan (Summary Card) trong ngày:**    + Chia làm 2 cột: **Trong tuyến** & **Ngoại tuyến**      - **icon theo UI**     - Số liệu hiển thị:        * **Trong tuyến:**         + **Điểm bán:** Số ĐB đã viếng thăm trong tuyến của ngày/ Tổng ĐB trên tuyến thực tế trong ngày           - **Tổng số điểm bán trên tuyến bán hàng đang chọn** có thực hiện viếng thăm (Phải checkin và checkout) trong ngày được chọn              * Chỉ đếm điểm bán viếng thăm trong tuyến. Đếm trường hợp nhân viên quên checkout (hiện tại hệ thống tự động check out 23:59) điểm bán và điểm bán đóng cửa             * Có đếm trùng điểm bán, 1 điểm bán 2 nhân viên viếng thăm thì đếm = 2             * 1 điểm bán thuộc 2 tuyến bán hàng của nhân viên thì đếm =2             * 1 điểm bán viếng thăm 2 lần trên cùng 1 tuyến bán hàng thì đếm 1             * Hiển thị có dấu phân cách phần nghìn.             * Trường hợp không viếng thăm điểm bán trong tuyến nào trong ngày thì để bằng 0         + **Đơn hàng:** Tổng số lượng đơn hàng đã tạo khi viếng thăm trong tuyến của các điểm bán (N) trong ngày trên tuyến của nhân viên.           - Quy tắc tính đơn hàng hợp lệ           - Hiển thị thông tin tổng Số đơn hàng của nhân viên đang chọn trong ngày được chọn.           - Các đơn hàng có Nghiệp vụ tạo đơn = **Đơn hàng trong tuyến**           - Nguồn đơn hàng:              * + Thông tin ghi nhận trên từng lần viếng thăm điểm bán trong ngày đã chọn (Trong tuyến). Chỉ đếm các đơn hàng được tạo ở chức năng viếng thăm trên App.               + Không ghi nhận khi thực hiện đặt hàng bên chức năng Nhiệm Vụ Chăm sóc               + Không ghi nhận khi thực hiện đặt đơn trên web có/ không chọn thông tin nhân viên           - Hiển thị có dấu phân cách phần nghìn.           - Trường hợp không có đơn hàng trong ngày thì để bằng 0         + **Ngoại tuyến:**           - **Điểm bán:** Số ĐB đã viếng thăm ngoại tuyến của ngày             * **Tổng số điểm bán trên tuyến bán hàng đang chọn** là ngoại tuyến và có thực hiện viếng thăm (Phải checkin và checkout) trong ngày được chọn                + Chỉ đếm điểm bán viếng thăm ngoại tuyến. Đếm trường hợp nhân viên quên checkout (hiện tại hệ thống tự động check out 23:59) điểm bán và điểm bán đóng cửa               + Có đếm trùng điểm bán, 1 điểm bán 2 nhân viên viếng thăm thì đếm = 2               + 1 điểm bán thuộc 2 tuyến bán hàng của nhân viên thì đếm =2               + 1 điểm bán viếng thăm 2 lần trên cùng 1 tuyến bán hàng thì đếm 1               + Hiển thị có dấu phân cách phần nghìn.               + Trường hợp không viếng thăm điểm bán trong tuyến nào trong ngày thì để bằng 0           - **Đơn hàng:** Tổng số lượng đơn hàng đã tạo khi viếng thăm ngoại tuyến của các điểm bán (N) trong ngày trên tuyến của nhân viên.             * Quy tắc tính đơn hàng hợp lệ             * Hiển thị thông tin tổng Số đơn hàng của nhân viên đang chọn trong ngày được chọn.             * Các đơn hàng có Nghiệp vụ tạo đơn = **Đơn hàng ngoại tuyến + Đơn hàng chăm sóc + Tạo đơn trên web** *(có chọn nhân viên bán hàng khi tạo đơn)*             * Nguồn đơn hàng:                + - Ghi nhận trên từng lần viếng thăm điểm bán trong ngày đã chọn = Ngoại tuyến                 - Ghi nhận đặt hàng bên chức năng Nhiệm Vụ Chăm sóc                 - Ghi nhận đặt hàng trên WEB có chọn nhân viên.                 - Không ghi nhận khi thực hiện đặt đơn trên web KHÔNG chọn thông tin nhân viên             * Hiển thị có dấu phân cách phần nghìn.             * Trường hợp không có đơn hàng trong ngày thì để bằng 0 * **Thẻ tổng hợp: dựa vào chi tiết viếng thăm điểm bán của tuyến [[HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036896)** |
| Danh sách Điểm bán | Chọn Nút "Danh sách điểm bán" icon mũi tên xuống =>UI hiển thị "Thu gọn" và icon mũi tên lên.   * **Hiển thị danh sách các điểm bán trên tuyến bán hàng trong ngày: dựa trên thông tin [HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán**    + **Thông tin trên mỗi thẻ (card) điểm bán Infor store**     - (Ngoại tuyến) nếu là điểm bán được chọn là ngoại tuyến. Điểm bán trong tuyến không hiển thị text này.     - Avata điểm bán: hình chụp gần nhất, không có hiển thị hình mặc định     - Tên điểm bán     - Mã điểm bán     - Số điện thoại điểm bán, nếu không có sđt hiển thị dấu -     - Địa chỉ:       * HT: hiển thị địa chỉ nối chuỗi & Ẩn phường/ xã. Địa chỉ mới hiện tại của HT.       * Core: hiển thị địa chỉ nối chuỗi full     - **Đơn hàng:** Hiển thị **số lượng** đơn hàng được tạo tại điểm bán (Ví dụ: 25).       * Có dấu phân cách phần nghìn,       * **Đơn hàng =** SUM các đơn hàng có Nghiệp vụ tạo đơn là **Đơn hàng trong tuyến trong ngày của điểm bán+** **Đơn hàng ngoại tuyến + Đơn hàng chăm sóc + Tạo đơn trên web** *(có chọn nhân viên bán hàng khi tạo đơn)*       * Hiển thị có dấu phân cách phần nghìn.     - **Doanh số:** Hiển thị **tổng giá trị** của các đơn hàng đó         * Có dấu phân cách phần nghìn, hiển thị đơn vị "đ"       * Quy tắc tính đơn hàng hợp lệ     - **Chưa viếng thăm:** text highlight hiển thị với những điểm bán chưa viếng thăm trong tuyến hoặc ngoại tuyến.       * **Những điểm bán không có thông tin đơn hàng và doanh số thì Ẩn Đơn hàng và Doanh số. Nếu có từ 1 đơn hàng thì hiển thị giống các trường hợp đã mô tả.**  * + - Chọn dấu mũi tên hoặc chọn vùng thông tin điểm bán → Điều hướng đến màn hình "Số lần viếng thăm trong ngày"   Hiển thị "Đã hết thông tin" ở cuối page  *Lưu ý Khi expand điểm bán theo ngày, vuốt lên để xem more →  Neo cụm ngày đang được scroll.* |

# Số lần viếng thăm trong ngày

**Mục đích:** Cung cấp một cái nhìn toàn diện về tất cả các hoạt động và xem tổng quan toàn bộ hoạt động của nhân viên tại một điểm bán cụ thể trong suốt cả ngày (vì nhân viên có thể ghé thăm một cửa hàng nhiều lần trong ngày)

Màn hình:

Mô tả:

|  |  |
| --- | --- |
| **Chức năng** | **Mô tả** |
| Tiêu đề | Nút "Back": Quay trở lại màn hình "Báo cáo viếng thăm điểm bán" Tiêu đề: "Số lần viếng thăm trong ngày". |
| **Thẻ thông tin Điểm bán** | **Thẻ thông tin Điểm bán:**hiển thị lại thông tin điểm bán đã chọn    * + Hiển thị thông tin cố định của điểm bán đang xem   + Hiển thị lại tổng hợp **số lượng đơn hàng phát sinh** và **Doanh số** tổng được tạo của điểm bán trong ngày      - Formart phần nghìn, số tiền có "đ"     - Quy tắc tính đơn hàng hợp lệ   + Nếu không có đơn nào thì Số đơn hàng và Doanh số = 0   Chọn Vùng thông tin Số đơn hàng phát sinh & Doanh số hiển thị màn hình Chi tiết lượt viếng thăm - Ẩn Tab Chi tiết lượt viếng thăm. Focus vào "Tab\_Danh sách đơn hàng" chứa tất cả các đơn hàng của điểm bán đang chọn → "Danh sách đơn hàng". Không có đơn hàng nào hiển thị "Không có dữ liệu" |
| Tổng thời gian viếng thăm | * Label: "Tổng thời gian viếng thăm ngày dd/mm/yyyy". * Value: Icon đồng hồ + Tổng thời gian (Sum "@Tổng thời gian VT" của tất cả các lượt). |
| Danh sách các lượt viếng thăm | **Danh sách lượt viếng thăm:**   * Sắp xếp: Mới nhất lên trên (theo giờ Check-in). * **Cấu trúc mỗi Item (Card):**    + **Header:**  Lúc "hh:mm:ss - hh:mm:ss". vd Lúc 15:09:09 - 16:09:09: tức là checkin lúc 15:09:09 đến checkout 16:09:09. Chưa checkout thì ẩn không hiển thị giờ checkout   + **Link Action:** Text "Chi tiết"-> Dẫn sang màn hình **Chi tiết lượt viếng thăm**   + **Cụm thông tin:**      - **Đơn hàng: [Số lượng] -****Doanh số: [Số tiền]:** hiển thị số đơn hàng và số tiền của lần viếng thăm.        * Formart phần nghìn, số tiền có "đ", đơn hàng và doanh số không có → hiển thị giá trị = '0'       * Quy tắc tính đơn hàng hợp lệ       * Nếu điểm bán trong tuyến thì Nghiệp vụ tạo đơn = **Đơn hàng tron tuyến**       * Nếu điểm bán ngoại tuyến thì Nghiệp vụ tạo đơn = **Đơn hàng ngoại tuyến**     - **Tổng thời gian VT: Format [hh:mm:ss] màu vàng**        * Tính theo (Thời gian Check-out - Thời gian Check-in): Dựa vào "Số giờ viếng thăm" của [HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán      * + - * Trường hợp: **Đang viếng thăm:** SM đang ở trong cửa hàng (Chưa Check-out).          + - Dòng "Rời cửa hàng": Ẩn.           - Tổng thời gian VT: Hiển thị format: 00:00:00           - Nút **""**: Đến màn hình Chi tiết lượt viếng thăm       * Trường hợp đóng cửa hiển thịformat: 00:00:00   + **Nút mũi tên hướng xuống (Expand/Collapse):**     - **Vùng mở rộng (Expandable Area):** Hiển thị tóm tắt [nhật ký các hoạt động chính kèm thời gian](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53047676) (dạng list đơn giản) theo hoạt động diễn ra trước đến sau:  * + - * **Nhiệm vụ viếng thăm và thời gian hh:mm:ss:**       * **Cấu trúc dòng:** • [Tên nhiệm vụ]   [hh:mm:ss]  * + - * + Viếng thăm **hh:mm:ss**         + **...**         + Rời cửa hàng **hh:mm:ss** * Viếng thăm nhiều lần hiển thị nhiều cụm thông tin theo thời gian viếng thăm. * Hiển thị "Đã hết thông tin   **Điểm bán KHÔNG có viếng thăm thì hiển thị "Không có dữ liệu"** |

Chi tiết

# Chi tiết lượt viếng thăm

Mục đích: Cung cấp một cái nhìn toàn diện về tất cả các hoạt động và xem tổng quan toàn bộ hoạt động của nhân viên tại một điểm bán cụ thể trong một lần viếng thăm

Màn hình:

Mô tả:

|  |  |
| --- | --- |
| **Chức năng** | **Mô tả** |
| Tiêu đề | Nút "Back": Quay trở lại màn hình "Số lần viếng thăm trong ngày" Tiêu đề: "Chi tiết lượt viếng thăm". |
| **Thẻ thông tin Điểm bán** | Hiển thị thẻ thông tin điểm bán và số lượng đơn hàng + Doanh số của điểm bán **tại lượt viếng thăm đã chọn**  Lượt viếng thăm không có đơn hàng → hiển thị Đơn hàng và doanh số =0 |
| **Tab Chi tiết viếng thăm và Danh sách đơn hàng** | * hiển thị 2 tabs: **"Chi tiết lượt viếng thăm" và "Danh sách đơn hàng".**   + Tab **"Chi tiết lượt viếng thăm"** sẽ được chọn mặc định.   + **Tab "Danh sách đơn hàng" Hiển thị tất cả các đơn hàng của điểm bán trong ngày được chọn** * **Tab nào không có dữ liệu hiển thị** **"Không có dữ liệu"** |
| **Tab " Chi tiết lượt viếng thăm"** | |
| **Tổng thời gian lượt VT** | * Label: "Tổng thời gian lượt VT lúc [Giờ Check-in], ngày [dd/mm/yyyy]"  * Value: Icon đồng hồ + Tổng thời gian   + Tính theo (Thời gian Check-out - Thời gian Check-in): Dựa vào "Số giờ viếng thăm" của [HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán      * + Trường hợp: **Đang viếng thăm:** SM đang ở trong cửa hàng (Chưa Check-out).      - * Dòng "Rời cửa hàng": Ẩn.       * Tổng thời gian VT: Hiển thị format: 00:00:00   + Trường hợp đóng cửa hiển thị format: 00:00:00 |
| **Thời gian + Nhiệm vụ** | * **Timeline chi tiết: Hiển thị thời gian chi tiết khi checkin; khi thực hiện các nhiệm vụ viếng thăm tại điểm bán và thời gian checkout**    + **hh:mm:ss.**Hiển thị dòng thời gian chạy dọc nối các sự kiện.   + **Hiển thị thẻ tag nhiệm vụ thực hiện theo nhật ký hoạt động tại điểm bán**      - Riêng nhiệm vụ  "Viếng thăm" và Rời cửa hàng có hiển thị **Thông tin GPS:**        * Địa chỉ ghi nhận lúc check-in/ check-out theo vị trí       * Tọa độ: Latitude, Longitude (VD: 41°24'12.2"N...).       * **Độ lệch khoảng cách:**           + Khoảng cách từ [Vị trí nhân viên] đến [Địa chỉ theo Vị trí của cửa hàng] lúc checkin/out         + Hiển thị: **"Cách [X]m tới [Địa chỉ theo vị trí của cửa hàng]"**.            - Nếu khoảng cách > Ngưỡng cho phép (VD: 300m) -> In đậm hoặc tô màu đỏ       * Lý do vượt khoảng cách: hiển thị lý do mà người dùng chọn/ nhập tại thời điểm checkin/out   + **Các sự kiện NHIỆM VỤ VIẾNG THĂM:** (Đặt hàng, Chụp ảnh trưng bày, Kiểm tồn, v.v.) hiển thị theo giờ thực hiện.   + Hiển thị lần lượt Giờ → Tên nhiệm vụ từ trên xuống dưới: từ Checkin → nhiệm vụ thực hiện tại điểm bán → checkout   + **Khu vực Hình ảnh viếng thăm:**      - Hiển thị Grid ảnh thumbnail.     - Loại ảnh: Viếng thăm (Check-in), Rời cửa hàng (Check-out)     - Trên ảnh có Timestamp.     - Action: Click vào ảnh để xem full-size. |
| **Tabs Danh sách đơn hàng: Hiển thị dữ liệu các đơn hàng được tạo trong lần viếng thăm** | |
| Danh sách đơn hàng  Danh sách đơn hàng | Chọn Tab " Danh sách đơn hàng"   * Hiển thị:   + Danh sách đơn hàng: hiển thị danh sách các đơn hàng điểm bán trong ngày có Nghiệp vụ tạo đơn là **Đơn hàng trong tuyến +** **Đơn hàng ngoại tuyến + Đơn hàng chăm sóc + Tạo đơn trên web** *(có chọn nhân viên bán hàng khi tạo đơn).*     - Thông tin mã của đơn hàng     - Thời gian tạo đơn hàng: Format: hh:mm dd/mm/yyyy. Sắp xếp đơn hàng theo ngày tạo đơn hàng từ mới nhất → cũ nhất.     - Trạng thái của đơn hàng     - Thông tin nhà phân phối user đã chọn để tạo đơn hàng     - Nguồn tạo đơn hàng     - Loại đơn hàng     - Kho bán     - Giá trị đơn hàng: Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng thỏa Quy tắc tính doanh số: Format tiền tệ hàng nghìn kèm icon tiền tệ     - Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=92775206)(Có kèm thông tin CTKM) |

Link Figma: