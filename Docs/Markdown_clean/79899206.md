|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Trên app Quản lý coi được chi tiết kết quả viếng thăm của từng sale (đã viếng thăm, chưa viếng thăm, VT có đơn hàng và không có đơn hàng) +hình chụp của từng cửa hàng |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Figma:

## **Từ màn hình Giám sát lộ trình nhân viên → Chọn "Báo cáo viếng thăm"**

* Từ màn hình [Giám sát lộ trình nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53047162)
* Chọn một nhân viên cụ thể để xem thông tin.
* Nhấn vào nút **"Báo cáo viếng thăm"**.
* Hệ thống hiển thị màn hình Báo cáo viếng thăm điểm bán**"** với dữ liệu đã được lọc sẵn cho nhân viên đó.

## Báo Cáo → Chọn **Báo cáo viếng thăm điểm bán**

1/ Đăng nhập app QL

2/ Chọn mục Báo cáo

3/ Chọn Báo cáo viếng thăm điểm bán

Hiển thị màn hình **Báo cáo viếng thăm điểm bán** và Thông tin đang xem là tất cả nhân viên cấp dưới của nhân viên đang đăng nhập (Nếu SS sẽ thấy cả SS và SM)

**Mục đích:**

Chức năng bao gồm các màn hình và luồng nghiệp vụ sau:

* Xem báo cáo tổng hợp hiệu suất chấm công của tất cả nhân viên, được nhóm theo từng ngày.
* Xem báo cáo chi tiết của một nhân viên trong một ngày cụ thể.
* Lọc danh sách điểm bán theo nhiều tiêu chí.
* Xem chi tiết một lượt viếng thăm, bao gồm timeline các hoạt động và hình ảnh.

**Người dùng:**

* SD (Giám đốc kinh doanh), RSM (Quản lý vùng), ASM (Quản lý khu vực), SS (Giám sát)

**Rule1**

**Quy tắc xem dữ liệu:**

* Khi login là "SD/RSM/ASM/SS thì **SD/RSM/ASM** xem các tuyến bán hàng của nhân viên cấp dưới (SS+ SM);
  + Nếu chọn các đối tượng là: SS; ASM; RSM; SD → Load lại màn hình Báo cáo viếng thăm điểm bán và toàn bộ dữ liệu trên màn hình sẽ được tải lại theo phạm vi của nhân viên mới được chọn
  + Danh sách các nhân viên cấp dưới trực tiếp của người quản lý đang xem gồm SS và SM
* Riêng SS có thể xem tuyến của chính mình và nhân viên cấp dưới do mình quản lý

* RIêng SM không có login trên app QL nhưng người login có thể chọn đối tượng là SM: Load lại màn hình Báo cáo viếng thăm điểm bán và toàn bộ dữ liệu trên màn hình sẽ được tải lại theo phạm vi của nhân viên được chọn (Hiển thị thông tin của SM đã chọn)

Báo cáo viếng thăm điểm bán

# **Báo Cáo Viếng Thăm Điểm Bán**

Quy tắc tính đơn hàng hợp lệ

Quy tắc tính doanh số

Quy tắc tính doanh số:

* Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên thuộc tất cả nhân viên cấp dưới của nhân viên đang chọn và nhân viên đang chọn (SS; SM - Theo quy tắc xem dữ liệu) đặt hàng trong khoảng thời gian được chọn
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

Màn hình:

Mô tả:

| Nội dung | Mô tả |
| --- | --- |
|  | Nút "Back": Quay trở lại màn hình "Báo cáo" Tiêu đề: "Báo cáo viếng thăm điểm bán". |
| Thông tin đang xem | * Hiển thị tên và vai trò của người đang được chọn để xem báo cáo    + Avatar: hình nhân viên, không có  thì hiển thị hình mặc định   + Tên nhân viên   + Chức vụ nhân viên * Nhân viên có thể chọn để đổi lại nhân viên khác, khi đổi sang nhân viên khác trường này sẽ hiển thị thông tin nhân viên được chọn để xem dữ liệu * Thông tin doanh số; số đơn hàng; số điểm bán trên tuyến, số điểm bán viếng thăm,.. có trên màn hình sẽ hiển thị của tất cả nhân viên thuộc cấp dưới của nhân viên được chọn ở trường này. * Đổi: Chức năng được mô tả ở**[[Manager App] Chọn nhân viên và xem danh sách cây Salesforce nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53035242)**. Khi chọn, toàn bộ dữ liệu trên màn hình sẽ được tải lại theo phạm vi của nhân viên mới được chọn.     + Xem thêm Quy tắc tải dữ liệu |
|  | * **UI:** Biểu đồ tròn dựa vào X/Y:    + **P = (X\*100/Y):**      - **Màu xanh:** P ≥ 90%. Maximum = 100%     - **Màu vàng:** 60% ≤ P< 90%     - **Màu đỏ:** P ≤ 60%   + Màu xám: [100% - P] * **Dữ liệu hiển thị:**    + Ngày hiện tại (Hôm nay, dd/mm/yyyy): Hôm nay, dd/mm/yyyy   + Số lượng: **X/Y (**Nhân viên đã chấm công)      - **X-Nhân viên đã chấm công (đầu ngày) ngày hôm nay/ Y-Tổng nhân viên đang có trên hệ thống là cấp dưới của user đang chọn (Chỉ lấy cấp dưới không đếm chính mình)**     - Dựa vào báo cáo chấm công của nhân viên: [HO] Báo cáo chấm công |
|  | Báo cáo theo ngày: tiêu đề  Thời gian:   * Thời gian mặc định ngày hiện tại; được chọn lại từ ngày → đến ngày; * Thời gian này sử dụng để tính doanh số trên báo cáo dựa theo ngày viếng thăm điểm bán, ngày tạo đơn hàng thuộc ngày viếng thăm điểm bán * User có thể nhấn để chọn lại thời gian      * Đến ngày >= Từ ngày * Từ ngày → Đến ngày có thể chọn bất cứ khoảng thời gian nào miễn là Từ ngày → Đến ngày trong vòng 30 ngày. |
| **Danh sách nhân viên**  Show tất cả nhân viên có tuyến thực tế trong từng ngày thuộc Thời gian đã chọn | |
| Tìm kiếm | Chọn vào ô này để tìm kiếm thông tin nhân viên theo Tên, mã nhân viên (Search like, không phân biệt có dấu/ không dấu, chữ hoa hay chữ thường)  Những nhân viên thỏa điều kiện sẽ hiển thị trên danh sách  Placeholder: Tìm kiếm theo Tên, SĐT, Mã nhân viên |
| Cấu trúc hiển thị | **Cấu trúc hiển thị:** Group (nhóm) theo **Ngày** (Date).   * **Sắp xếp:** Ngày gần nhất lên trên (Descending). * **Tính năng Group:**    + Hiển thị Header ngày (ví dụ: "Hôm nay", "04/11/2024").   + Nút **Expand/Collapse (Tất cả nhân viên/Thu gọn)** dữ liệu của từng ngày. Mặc định hiển thị "Tất cả nhân viên"  và icon mũi tên xuống. Mỗi nhóm ngày có thể được mở rộng hoặc thu gọn độc lập.   + **Bên trong mỗi nhóm là danh sách các nhân viên có tuyến trong ngày đó:  Show tất cả nhân viên có tuyến thực tế trong ngày gồm SS; SM**.     - Hiển thị mặc định hiển thị 2 nhân viên mỗi ngày (nếu chỉ có 1 nhân viên có TTT → hiển thị 1); nếu ngày đó không có TTT nào thì ẩn ngày.     - Dropdown "Tất cả nhân viên": Cho phép hiển thị tất cả nhân viên có tuyến thực tế (đã / chưa chấm công đều show hết ra) theo ngày. * Neo cụm ngày đang được scroll |
| **Thẻ thông tin nhân viên** | * **Thẻ thông tin nhân viên:**    + Hiển thị: Avatar (Nhân viên không có avata lấy hình mặc định), Tên nhân viên: hiển thị trên 1 dòng; mã - sđt nhân viên:  hiển thị trên 1 dòng, dữ liệu thiếu hiển thị dấu gạch ngang (-)   + ****Số điểm bán**:** N/K (N-Số điểm bán đã viếng thăm trong tất cả các tuyến thực tế của ngày/ K-Tổng số điểm bán trong tất cả các tuyến thực tế).       - [HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán - dữ liệu dựa vào báo cáo chi tiết viếng thăm điểm bán     - **N-Tổng số điểm bán của tất cả các tuyến bán hàng của nhân viên đang chọn** **có thực hiện viếng thăm (Phải checkin và checkout) trong ngày được chọn**        * Chỉ đếm điểm bán viếng thăm trong tuyến. Đếm trường hợp nhân viên quên checkout (hiện tại hệ thống tự động check out 23:59) điểm bán và điểm bán đóng cửa       * Có đếm trùng điểm bán, 1 điểm bán 2 nhân viên viếng thăm thì đếm = 2       * 1 điểm bán thuộc 2 tuyến bán hàng của nhân viên thì đếm =2       * 1 điểm bán viếng thăm 2 lần trên cùng 1 tuyến bán hàng thì đếm 1     - Hiển thị có dấu phân cách phần nghìn.     - Trường hợp không viếng thăm điểm bán trong tuyến nào trong ngày thì để bằng 0   + **Đơn hàng:** **T****ổng số lượng đơn hàng đã tạo của nhân viên trong ngày trong tất cả các tuyến bán hàng**      - Quy tắc tính đơn hàng hợp lệ     - Hiển thị thông tin tổng Số đơn hàng của nhân viên đang chọn trong ngày được chọn.     - **Nghiệp vụ tạo đơn = Đơn hàng trong tuyến + Đơn hàng ngoại tuyến + Đơn hàng chăm sóc + Đơn hàng WEB (Có chọn nhân viên)** * **Hành động:** Chạm vào **"dấu mũi tên hoặc component nhân viên"** sẽ điều hướng đến **Màn hình:**  "**Chi tiết viếng thăm**"  * Trên màn hình khi  Chọn "Tất cả nhân viên" và thực hiện vuốt để xem nhân viên thì Neo cụm ngày đang được scroll cho đến khi hết nhân viên và tự động nhả neo. |

**Chi tiết**

## **Chi tiết viếng thăm**

Mục đích:   Hiển thị chi tiết hoạt động của một nhân viên trong một ngày làm việc cụ thể, **hiển thị tất cả các TTT của nhân viên trong ngày được chọn**

Mô tả: Xuất hiện khi user click vào một nhân viên cụ thể ở Màn hình Báo cáo viếng thăm điểm bán

| Nội dung | Mô tả |
| --- | --- |
|  | Nút "Back": Quay trở lại màn hình "Báo cáo viếng thăm điểm bán". Tiêu đề: "Chi tiết viếng thăm". |
| Thông tin đang xem | * Hiển thị thông tin nhân viên bán hàng được chọn sau khi chọn "Chi tiết tuyến" ở màn hình Báo cáo viếng thăm điểm bán. * Thông tin doanh số; số đơn hàng; số điểm bán trên tuyến, số điểm bán viếng thăm,.. có trên màn hình sẽ hiển thị của tuyến bán hàng của nhân viên được chọn |
| Tuyến bán hàng | * Hiển thị các tuyến mà nhân viên được phân công dưới dạng Tab (ví dụ: "TBH001", "Tuyến 2").    + **Các tuyến thực tế trong ngày được chọn mà chính nhân viên được chọn quản lý** * Người dùng có thể chọn để xem dữ liệu của từng tuyến. Mặc định chọn tuyến đầu tiên. Hiển thị thứ tự ngẫu nhiên |
| Ngày viếng thăm | * Ngày đã chọn: "dd/mm/yyyy" * Hôm nay → hiển thị "Hôm nay, dd/mm/yyyy" |
| Thẻ tổng hợp | Hiển thị theo từng tab đã chọn   * **Trong tuyến:**  icon  mặc định    + Số ĐB đã viếng thăm trong tuyến / Tổng ĐB thuộc tuyến thực tế đã gen trong ngày.  * + **Tổng số điểm bán có thực hiện viếng thăm trong tuyến đang chọn** có thực hiện viếng thăm (Phải checkin và checkout) trong ngày được chọn      - Chỉ đếm điểm bán viếng thăm trong tuyến. Đếm trường hợp nhân viên quên checkout (hiện tại hệ thống tự động check out 23:59) điểm bán và điểm bán đóng cửa     - Có đếm trùng điểm bán, 1 điểm bán 2 nhân viên viếng thăm thì đếm = 2     - 1 điểm bán thuộc 2 tuyến bán hàng của nhân viên thì đếm =2     - 1 điểm bán viếng thăm 2 lần trên cùng 1 tuyến bán hàng thì đếm 1     - Trường hợp không viếng thăm điểm bán trong tuyến nào trong ngày thì để bằng 0  * + **Đơn hàng:** Tổng số lượng đơn hàng đã tạo khi viếng thăm điểm bán (N) trên tuyến đang chọn của nhân viên.      - Quy tắc tính đơn hàng hợp lệ     - Hiển thị thông tin tổng Số đơn hàng của nhân viên đang chọn trong ngày được chọn. Không có đơn hàng nào hiển thị ='0'     - **Nghiệp vụ tạo đơn = Đơn hàng trong tuyến**  * **Ngoại tuyến:**  icon mặc định    + Số ĐB đã viếng thăm ngoại tuyến trên Tuyến đang chọn      - Tổng số điểm bán **ngoại tuyến** của nhân viên trên tuyến đang chọn có thực hiện viếng thăm (Phải checkin và checkout) trong ngày được chọn     - Chỉ đếm điểm bán viếng thăm ngoại tuyến. Đếm trường hợp nhân viên quên checkout điểm bán (hiện tại hệ thống tự động check out 23:59) và điểm bán đóng cửa     - Có đếm trùng điểm bán, 1 điểm bán 2 nhân viên viếng thăm thì đếm = 2     - 1 điểm bán viếng thăm 2 lần trên cùng tuyến thì đếm 1     - 1 điểm bán viếng thăm 2 lần trên các tuyến khác nhau thì đếm 2     - Trường hợp không viếng thăm điểm bán ngoại tuyến nào trong ngày thì để bằng 0   + **Đơn hàng:** Tổng số lượng đơn hàng      - Quy tắc tính đơn hàng hợp lệ     - Hiển thị thông tin tổng Số đơn hàng của nhân viên đang chọn trong ngày được chọn. Trường hợp không có đơn hàng nào hiển thị số 0     - **Nghiệp vụ tạo đơn = Đơn hàng ngoại tuyến + Đơn hàng chăm sóc + Đơn hàng Web (Có chọn nhân viên)** * Hiển thị các số có phân cách phần nghìn * Thẻ tổng hợp: dựa vào chi tiết viếng thăm điểm bán của tuyến [HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán |
| **Danh sách điểm bán** | |
| Tìm kiếm | Chọn vào ô này để tìm kiếm thông tin điểm bán theo Tên, mã điểm bán, số điện thoại (Search like, không phân biệt có dấu/ không dấu, chữ hoa hay chữ thường)  Những điểm bán thỏa điều kiện sẽ hiển thị trên danh sách |
| **Bộ lọc** | Nhấn vào sẽ mở **Popup: Bộ lọc**  **Hiển thị màn hình bộ lọc như sau: màn hình bộ lọc sẽ tuân theo [Bộ lọc dữ liệu](https://kb.finviet.com.vn/display/DMSNEW/Manager+App) ở quy tắc chung**   * **Trạng thái viếng thăm** (chọn 1, không bắt buộc):   + **Đã viếng thăm:**Hệ thống hiển thị mặc định danh sách các điểm bán trên tuyến bán hàng đang chọn      - Khi chọn trạng thái "Đã viếng thăm"     - Hiển thị danh sách các điểm bán đã viếng thăm (checkin + checkout) trong tuyến và ngoại tuyến   + **Chưa viếng thăm:** Hệ thống hiển thị mặc định danh sách các điểm bán trên tuyến bán hàng đang chọn      - Khi chọn trạng thái "Chưa viếng thăm"     - Hiển thị danh sách các điểm bán chưa viếng thăm (chưa checkin) trong tuyến và ngoại tuyến * **Loại điểm bán** (chọn 1, không bắt buộc):   + **Trong tuyến:**      - Khi chọn trạng thái "Trong tuyến"     - Hiển thị danh sách các điểm bán đã viếng thăm (checkin + checkout) trong tuyến   + **Ngoại tuyến:**      - Khi chọn trạng thái "Ngoại tuyến"     - Hiển thị danh sách các điểm bán đã viếng thăm (checkin + checkout) ngoại tuyến * **Phát sinh đơn hàng** (chọn 1, không bắt buộc):   + **Có:**Hệ thống hiển thị mặc định danh sách các điểm bán trên tuyến có hoặc không có đơn hàng      - Chọn "Có": Hệ thống hiển thị danh sách các điểm bán trên tuyến có tồn tại từ một đơn hàng   + **Không:**      - Hiển thị danh sách các điểm bán trên tuyến bán hàng không có tồn tại bất kì đơn hàng nào * Sau khi áp dụng bộ lọc, trong từng tab sẽ có hiển thị bộ lọc như sau:      * + Có thể scroll ngang những bộ lọc đã chọn   + Khi bấm vào bộ lọc sẽ hiển thị popup danh sách bộ lọc tương ứng, người dùng có thể thêm các dữ liệu lọc từ đây  * + Số trên từng bộ lọc hiển thị dữ liệu trong bộ lọc đã chọn (VD chọn 2 loại công việc, bên ngoài sẽ hiển thị (2))   + Trường hợp bộ lọc có lọc dữ liệu sẽ hiển thị icon , không lọc bất cứ dữ liệu nào sẽ hiển thị icon   + Trường hợp không chọn thì bộ lọc đó sẽ không hiển thị ở màn hình chính. |
| Danh sách điểm bán | * **Hiển thị danh sách điểm bán trong tuyến được chọn:**    + Mặc định hiển thị danh sách tất cả điểm bán trên tuyến bán hàng của nhân viên đang chọn trong ngày được chọn   + **Thông tin trên mỗi thẻ (card) điểm bán: Infor store**      - Hiển thị cụm thông tin:       * (Ngoại tuyến) nếu là điểm bán viếng thăm ngoại tuyến. Ẩn nếu là Trong tuyến       * Avata điểm bán: hình chụp gần nhất, không có thì hiển thị hình mặc định       * Tên điểm bán       * Mã điểm bán       * Số điện thoại điểm bán, nếu không có sđt hiển thị dấu -       * Địa chỉ:         + HT: hiển thị địa chỉ nối chuỗi & Ẩn phường/ xã theo địa chỉ mới của HT         + Core: hiển thị địa chỉ nối chuỗi       * **Đơn hàng:** Hiển thị **số lượng** đơn hàng được tạo tại điểm bán (Ví dụ: 25).         + Có dấu phân cách phần nghìn,         + Sum tất cả các đơn hàng         + **Nguồn đơn hàng có Nghiệp vụ tạo đơn = Đơn hàng trong tuyến + Đơn hàng ngoại tuyến + Đơn hàng chăm sóc + Đơn hàng Web (Có chọn nhân viên)**         + Hiển thị có dấu phân cách phần nghìn.         + Trường hợp không có đơn hàng trong ngày thì ẩn luôn cụm Đơn hàng và doanh số       * **Doanh số:** Hiển thị **tổng giá trị** của các đơn hàng đó (Ví dụ: 20,000,000 đ)  = Sum(Doanh số đơn 1 + Doanh số đơn 2 + ...).          + Có dấu phân cách phần nghìn, hiển thị đơn vị "đ"         + Quy tắc tính đơn hàng hợp lệ         + Trường hợp không có đơn hàng trong ngày thì ẩn luôn cụm Đơn hàng và doanh số       * **Chưa viếng thăm:** text highlight hiển thị với những điểm bán chưa viếng thăm trong tuyến hoặc ngoại tuyến.         + Trường hợp không có đơn hàng trong ngày thì ẩn luôn cụm Đơn hàng và doanh số  * + - Chọn dấu mũi tên hoặc chọn vùng thông tin điểm bán → Điều hướng đến màn hình "Số lần viếng thăm trong ngày"   Hiển thị "Đã hết thông tin" ở cuối page |

Số lần viếng thăm trong ngày

## Số lần viếng thăm trong ngày

Mục đích: Cung cấp một cái nhìn toàn diện về tất cả các hoạt động và xem tổng quan toàn bộ hoạt động của nhân viên tại một điểm bán cụ thể trong suốt cả ngày (vì nhân viên có thể ghé thăm một cửa hàng nhiều lần trong ngày)

Mô tả:

| Nội dung | Mô tả |
| --- | --- |
| Nút "Back": Quay trở lại màn hình "Chi tiết viếng thăm" Tiêu đề: "Số lần viếng thăm trong ngày". | |
| **Thẻ thông tin Điểm bán:** | **Thẻ thông tin Điểm bán:** hiển thị lại thông tin điểm bán đã chọn    * + Hiển thị thông tin cố định của điểm bán đang xem   + Hiển thị lại tổng hợp **số lượng đơn hàng phát sinh** và **Doanh số** tổng theo thẻ thông tin điểm bán      - Formart phần nghìn, số tiền có "đ"     - Quy tắc tính đơn hàng hợp lệ   + Nếu Số đơn hàng và Doanh số = 0. Hiển thị số 0.   + Chọn vùng thông tin này hiển thị Màn hình Chi tiết lượt viếng thăm nhưng ẩn Tab "Chi tiết lượt viếng thăm" chỉ hiển thị Tab Danh sách đơn hàng. Không có đơn hàng nào hiển thị "Không có dữ liệu" |
| Tổng thời gian viếng thăm | * Label: "Tổng thời gian viếng thăm ngày dd/mm/yyyy". * Value: Icon đồng hồ + Tổng thời gian (Sum "@Tổng thời gian VT" của tất cả các lượt). |
| Danh sách các lượt viếng thăm | **Danh sách lượt viếng thăm:**   * Sắp xếp: Mới nhất lên trên (theo giờ Check-in). * **Cấu trúc mỗi Item (Card):**    + **Header:**  Lúc hh:mm:ss - hh:mm:ss → vd Lúc 15:09:09 - 15:29:09 tức là checkin lúc 15:09:09 và checkout lúc 15:29:09. Chưa checkout thì ẩn thời gian checkout   + **Link Action:** Text "Chi tiết"-> Dẫn sang màn hình **Chi tiết lượt viếng thăm**   + **Cụm lượt viếng thăm:**      - **Đơn hàng:** [Số lượng] - **Doanh số:** [Số tiền] (Màu xanh): hiển thị số đơn hàng và số tiền của lần viếng thăm.        * Formart phần nghìn, số tiền có "đ"       * Quy tắc tính đơn hàng hợp lệ       * Nếu điểm bán trong tuyến thì Nghiệp vụ tạo đơn = **Đơn hàng tronh tuyến**       * Nếu điểm bán ngoại tuyến thì Nghiệp vụ tạo đơn = **Đơn hàng ngoại tuyến**     - **Tổng thời gian VT**: Format **[hh:mm:ss]****màu vàng**        * Tính theo (Thời gian Check-out - Thời gian Check-in): Dựa vào "Số giờ viếng thăm" của [[HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036896)      * + - * Trường hợp: **Đang viếng thăm:**SM đang ở trong cửa hàng (Chưa Check-out).          + - Dòng "Rời cửa hàng": Ẩn.           - Tổng thời gian VT: Hiển thị format: 00:00:00       * Trường hợp đóng cửa hiển thịformat: 00:00:00  * + **Vùng mở rộng (Expandable Area):** Hiển thị tóm tắt [nhật ký các hoạt động chính kèm thời gian](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53047676) (dạng list đơn giản) theo hoạt động diễn ra trước đến sau:  * + - * **Nhiệm vụ viếng thăm và thời gian hh:mm:ss:**       * **Cấu trúc dòng:** • [Tên nhiệm vụ]   [hh:mm:ss]  * + - * + Viếng thăm **hh:mm:ss**         + **...**         + Rời cửa hàng **hh:mm:ss** * Viếng thăm nhiều lần hiển thị nhiều cụm thông tin * Hiển thị "Đã hết thông tin |

Chi tiết lượt viếng thăm

## Chi tiết lượt viếng thăm

Mục đích: Chi tiết từng hành động, vị trí GPS và hình ảnh bằng chứng của một lần viếng thăm duy nhất.  
Màn hình:

| Nội dung | Mô tả |
| --- | --- |
| Nút "Back": Quay trở lại màn hình "Số lần viếng thăm trong ngày" Tiêu đề: "Chi tiết lượt viếng thăm". | |
| **Thẻ thông tin Điểm bán:** | Hiển thị thẻ thông tin điểm bán và số lượng đơn hàng + Doanh số của điểm bán tại lượt viếng thăm  Lượt viếng thăm không có đơn hàng → hiển thị = 0  và màn hình hiển thị "Không có dữ liệu" |
| **Tab Chi tiết viếng thăm và Danh sách đơn hàng** | * Nếu lượt viếng thăm **có phát sinh đơn hàng** (Số đơn hàng > 0) → hiển thị 2 tabs: **"Chi tiết lượt viếng thăm" và "Danh sách đơn hàng".**    + Tab **"Chi tiết lượt viếng thăm"**  sẽ được chọn mặc định.   + Tab **"Danh sách đơn hàng"** chứa danh sách tất cả  các đơn hàng của điểm bán trong ngày |
| **Tab " Chi tiết lượt viếng thăm"** | |
| **Tổng thời gian lượt VT** | * Label: "Tổng thời gian lượt VT lúc [Giờ Check-in], ngày [dd/mm/yyyy]"  * Value: Icon đồng hồ + Tổng thời gian   + Tính theo (Thời gian Check-out - Thời gian Check-in): Dựa vào "Số giờ viếng thăm" của [[HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036896)      * + Trường hợp: **Đang viếng thăm:**SM đang ở trong cửa hàng (Chưa Check-out).      - * Dòng "Rời cửa hàng": Ẩn.       * Tổng thời gian VT: Hiển thị format: 00:00:00   + Trường hợp đóng cửa hiển thị format: 00:00:00 |
| **Thời gian + Nhiệm vụ** | * **Timeline chi tiết: Hiển thị thời gian chi tiết khi checkin; khi thực hiện các nhiệm vụ viếng thăm tại điểm bán và thời gian checkout**    + **hh:mm:ss.**Hiển thị dòng thời gian chạy dọc nối các sự kiện.   + **Hiển thị thẻ tag nhiệm vụ thực hiện theo nhật ký hoạt động tại điểm bán**      - Riêng nhiệm vụ  "Viếng thăm" và Rời cửa hàng có hiển thị **Thông tin GPS:**        * Địa chỉ ghi nhận lúc check-in/ check-out theo vị trí       * Tọa độ: Latitude, Longitude (VD: 41°24'12.2"N...).       * **Độ lệch khoảng cách:**           + Khoảng cách từ [Vị trí nhân viên] đến [Địa chỉ theo Vị trí của cửa hàng] lúc checkin/out         + Hiển thị: **"Cách [X]m tới [Địa chỉ theo vị trí của cửa hàng]"**.            - Nếu khoảng cách > Ngưỡng cho phép (VD: 300m) -> In đậm hoặc tô màu đỏ       * Lý do vượt khoảng cách: hiển thị lý do mà người dùng chọn/ nhập tại thời điểm checkin/out   + **Các sự kiện NHIỆM VỤ VIẾNG THĂM:** (Đặt hàng, Chụp ảnh trưng bày, Kiểm tồn, v.v.) hiển thị theo giờ thực hiện.   + Hiển thị lần lượt Giờ (hhmmss) → Tên nhiệm vụ từ trên xuống dưới: từ Checkin → nhiệm vụ thực hiện tại điểm bán → checkout   + **Khu vực Hình ảnh viếng thăm:**      - Hiển thị Grid ảnh thumbnail.     - Loại ảnh: Viếng thăm (Check-in), Rời cửa hàng (Check-out)     - Trên ảnh có Timestamp.     - Action: Click vào ảnh để xem full-size. |
| **Tabs Danh sách đơn hàng**  **Danh sách đơn hàng** | |
|  | **Danh sách đơn hàng**   * Danh sách đơn hàng: hiển thị danh sách các đơn hàng điểm bán trong ngày có Nghiệp vụ tạo đơn là **Đơn hàng trong tuyến +** **Đơn hàng ngoại tuyến + Đơn hàng chăm sóc + Tạo đơn trên web** *(có chọn nv bán hàng khi tạo đơn).* * Thông tin mã của đơn hàng   + Thời gian tạo đơn hàng: Format: hh:mm dd/mm/yyyy. Sắp xếp đơn hàng theo ngày tạo đơn hàng từ mới nhất → cũ nhất.   + Trạng thái của đơn hàng  * Thông tin nhà phân phối user đã chọn để tạo đơn hàng * Nguồn tạo đơn hàng * Loại đơn hàng * Kho bán * Giá trị đơn hàng: Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng theo quy tắc tính đơn hàng hợp lệ: Format tiền tệ hàng nghìn kèm icon tiền tệ * Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=92775206)(Có kèm thông tin CTKM)   Nút "Back" màn hình Chi tiết đơn hàng →  Quay trở lại màn hình "Chi tiết lượt viếng thăm" |