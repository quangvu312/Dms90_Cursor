|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature | Báo cáo KPI |
| Description |  |
| Document version | RedV1.0.0: Phase 1  RedV1.1.0: Phase 2: Bổ sung timegone và 2 KPI Điểm bán hoạt động, Tỷ lệ Điểm bán hoạt động |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

### 1. Báo cáo KPI KPI\_REPORT

Công thức tính Thực đạt của các KPI xem tại: [[Phase 1] - Báo cáo KPI](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53043526) và [[Phase 2] - Báo cáo KPI](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61160399)

Tính năng Quản lý phiếu giao KPI xem tại: [[HO] Giao KPI](https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+Giao+KPI)

**Lưu ý:**

* KPI của SM được ghi nhận cho SS, ASM, RSM, SM mà SM đang trực thuộc tại thời điểm phát sinh thực đạt. Trường hợp SM không còn thuộc cây salesforce ban đầu (do đổi role hoặc trực thuộc một cây salesforce khác), các KPI phát sinh sau thời điểm thay đổi sẽ không được tính cho cây salesforce cũ, mà được tính cho cây salesforce mới.

| Màn hình | Mô tả |
| --- | --- |
|  | Đường dẫn: Báo cáo → Báo cáo KPI   Màn hình Báo cáo KPI bao gồm:   * Thông tin đang xem   + Hiển thị thông tin nhân viên được chọn ở màn hình Báo cáo bên ngoài   + Nhân viên có thể chọn để đổi lại nhân viên khác, khi đổi sang nhân viên khác trường này sẽ hiển thị thông tin nhân viên được chọn để xem dữ liệu   + Đối với thông tin của các cấp quản lý (RSM, ASM, SS) nếu không được giao KPI, thì KPI của các role này = SUM các KPI của nhân viên thuộc cấp dưới. Chỉ tiêu = SUM (Chỉ tiêu của các nhân viên cấp dưới); Thực đạt = SUM (Thực đạt của các nhân viên cấp dưới) *(Phase 1 chỉ áp dụng cho role SS)*   + Đổi: Chức năng được mô tả ở [[Manager App] Chọn nhân viên và xem danh sách cây Salesforce nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53035242) * Danh sách KPI   + Hiển thị theo tab KPI ngày và KPI tháng     - KPI tháng: Hiển thị các KPI:       * Được giao trong phiếu giao KPI có thời gian áp dụng theo tháng       * Đang được giao cho user đang được chọn tại Thông tin đang xem tại ngày xem báo cáo. VD thời điểm xem báo cáo là ngày 15/2/2025 → hiển thị KPI áp dụng cho tháng 2/2025     - KPI theo thời gian        * Được giao trong phiếu giao KPI có thời gian áp dụng từ ngày đến ngày       * Đang được giao cho user đang được chọn tại Thông tin đang xemus tại thời điểm xem báo cáo. VD thời điểm xem báo cáo là ngày 15/2/2025 → hiển thị KPI áp dụng từ ngày 1/2/2025 đến 20/2/2025   + Filter theo Tất cả, Đạt, Chưa đạt     - Tất cả: Hiển thị tất cả KPI đang được giao cho SM tại thời điểm xem báo cáo     - Đạt: Hiển thị các KPI đang được giao cho SM tại thời điểm xem báo cáo có %Thực đạt/Chỉ tiêu >=100%     - Chưa đạt: Hiển thị các KPI đang được giao cho SM tại thời điểm xem báo cáo có %Thực đạt/Chỉ tiêu <100%   + Sort by %Thực đạt/Chỉ tiêu: từ cao nhất đến thấp nhất/ từ thấp nhất đến cao nhất   + Thẻ KPI: Click vào từng thẻ → hệ thống hiển thị màn hình xem chi tiết theo từng KPI tương ứng      - Tên chỉ tiêu     - Progress Bar     - Thực đạt/Chỉ tiêu:       * Thực đạt: được tính theo công thức của từng KPI tới thời điểm xem báo cáo       * Chỉ tiêu: Chỉ tiêu đang được giao cho user đang được chọn tại Thông tin đang xem, thiết lập tại chức năng **[Giao KPI](https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+Giao+KPI)**       * %Thực đạt/Chỉ tiêu = Thực đạt/Chỉ tiêu x 100%   + RedV1.1.0: Kế hoạch trong ngày + chỉ tiêu cần đạt theo timegone sẽ hiển thị ẩn/hiện theo config của từng KPI. Và chỉ hiển thị ở loại KPI theo thời gian và KPI theo tháng.  | KPI có config timegone = True | KPI có config timegone = False | | --- | --- | | * Nếu thực đạt = chỉ tiêu:   + Hệ thống hiển thị: Đạt chỉ tiêu + Hoàn thành | * Nếu thực đạt = chỉ tiêu: Hệ thống hiển thị: Hoàn thành | | * Nếu thực đạt > chỉ tiêu:   + Hệ thống hiển thị: Vượt chỉ tiêu + số (Thực đạt - Chỉ tiêu) + Hoàn thành   + Nếu có lẻ thì lấy 2 số thập phân (làm tròn lên).   + Nếu tiền tệ thì format tiền tệ.   + Màu của số vượt chỉ tiêu: Đen (Như trên UI) | * Nếu thực đạt > chỉ tiêu:   + Hệ thống hiển thị: Hoàn thành | | * Nếu thực đạt < chỉ tiêu, hệ thống sẽ hiển thị:   + Thiếu = Chỉ tiêu - Thực đạt   + Màu của số thiếu: Cam (Như trên UI) * Kế hoạch trong ngày + chỉ tiêu cần đạt theo timegone. Công thức tính timegone như sau: * Tính A (Kế hoạch trong ngày) =  (Chỉ tiêu - Thực đạt)/Số ngày làm việc còn lại trong khoảng thời gian được gán KPI (Tính luôn ngày hiện tại)   + Nếu KPI theo tháng thì lấy số ngày làm việc theo tháng   + Nếu KPI theo thời gian thì lấy số ngày làm việc theo thời gian được gán KPI * Tính B (Chỉ tiêu trung bình ngày) = Chỉ tiêu/Số ngày làm việc trong khoảng thời gian được gán KPI * Nếu B > A → Chỉ tiêu cần đạt theo timegone = B (Vì chỉ tiêu trung bình theo ngày > Kế hoạch cần đạt còn lại, nhằm tăng hiệu suất của sales nên sẽ lấy timegone theo chỉ số lớn hơn là = Chỉ tiêu trung bình theo ngày) * Nếu B <= A → Chỉ tiêu cần đạt theo timegone = A (Vì lúc này Kế hoạch cần đạt > chỉ tiêu trung bình, nhằm tăng hiệu suất của sales nên sẽ lấy timegone theo chỉ số lớn hơn là = Kế hoạch cần đạt trong ngày) | * Nếu thực đạt < chỉ tiêu, hệ thống sẽ hiển thị:   + Thiếu = Chỉ tiêu - Thực đạt   + Màu của số thiếu: Cam (Như trên UI)   + Nếu có lẻ thì lấy 2 số thập phân (làm tròn lên).   + Nếu tiền tệ thì format tiền tệ. |  * —————- Các KPI làm tròn timegone theo rule bình thường: 1/ Doanh số trung bình theo ngày 2/ Doanh số tháng 3/ % Độ bao phủ 4/ Tỷ lệ điểm bán hoạt động  ——————Các KPI làm tròn timegone lên số nguyên gần nhất (0.1...0.9 -> 1) 1/ Tỷ lệ viếng thăm thành công 2/ Điểm bán mở mới 3/ Số đơn hàng 4/ SKUs/Đơn hàng 5/ Điểm bán hoạt động |

### 2. Xem chi tiết KPI

**1.Thông tin đang xem**

* + Hiển thị thông tin nhân viên được chọn ở màn hình Báo cáo bên ngoài
  + Nhân viên có thể chọn để đổi lại nhân viên khác, khi đổi sang nhân viên khác trường này sẽ hiển thị thông tin nhân viên được chọn để xem dữ liệu
  + Đối với thông tin của các cấp quản lý (RSM, ASM, SS) nếu không được giao KPI, thì KPI của các role này = SUM các KPI của nhân viên thuộc cấp dưới. Chỉ tiêu = SUM (Chỉ tiêu của các nhân viên cấp dưới); Thực đạt = SUM (Thực đạt của các nhân viên cấp dưới) *(Phase 1 chỉ áp dụng cho role SS)*
  + Đổi: Chức năng được mô tả ở [[Manager App] Chọn nhân viên và xem danh sách cây Salesforce nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53035242)

**2. Thời gian**

Đới với KPI tháng

Thời gian hiển thị từ tháng đến tháng, VD: 01/2025 - 03/2025

* Click vào thời gian để chọn lại Từ tháng - Đến tháng
* Chỉ được chọn Đến tháng >= Từ tháng
* Chỉ được chọn tối đa 6 tháng
* Khi vào màn hình, mặc định chọn 1 tháng tại thời điểm xem báo cáo

Đối với KPI theo thời gian:

* Thời gian hiển thị từ ngày đến ngày áp dụng của KPI đang được giao tại thời điểm xem báo cáo. VD thời điểm xem báo cáo là ngày 15/2/2025 → hiển thị KPI áp dụng từ ngày 1/2/2025 đến 20/2/2025
* Nếu thông tin đang xem là của quản lý, hiển thị min - max thời gian áp dụng của tất cả các KPI đang được giao tại thời điểm xem báo cáo của nhân viên cấp dưới. VD: Thời gian xem báo cáo là ngày 10/3, thông tin đang xem là SS A. SS A có các Saleman cấp dưới được giao KPI ở các khoảng thời gian:
  + SM A: 1/3 - 10/3
  + SM B: 5/3 - 15/3
  + SM C: 20/3 - 31/3
  + → Thời gian hiển thị: 1/3 - 15/3

**3. Biểu đồ:**

Chỉ hiển thị đối với **KPI tháng** và**KPI ngày**

* Biểu đồ hiển thị dạng cột kép gồm: Cột Chỉ tiêu và Cột Thực đạt
* **Trục tung (Y - Thực đạt & Chỉ tiêu)**
  + Đơn vị: Lấy theo độ đo của KPI Bình quân SKU/Đơn
  + Thể hiện **thực đạt và chỉ tiêu của KPI mà user đang được chọn tại Thông tin đang xem đang được giao**.
  + Các mức giá trị trên trục tung theo quy tắc mô tả [**tại đây**](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App#:~:text=C%C3%A1ch%20Ph%C3%A2n%20chia%20tr%E1%BB%A5c%20tung%20cho%20c%C3%A1c%20bi%E1%BB%83u%20%C4%91%E1%BB%93%20d%E1%BA%A1ng%20c%E1%BB%99t%20tr%C3%AAn%20h%E1%BB%87%20th%E1%BB%91ng)
* #### **Trục hoành (X - Thời gian)**

  + Nếu KPI theo tháng 
    - Đơn vị: Tháng, hiển thị theo format MM/YY. VD: 03/25  
      * Hiển thị tất cả các tháng được chọn
      * Có thể trượt ngang để xem các tháng sau đó
  + Click vào cột trên biểu đồ hoặc chọn vào mốc thời gian trên trục hoành, mặc định chọn tháng đầu tiên trên biểu đồ:  
    - Hiển thị tooltip Thông tin Thực đạt/Chỉ tiêu của tháng/ngày đó. VD: 1.5/2
    - Chi tiết các SKU trong đơn hàng

| Tên chỉ tiêu | Màn hình | Mô tả |
| --- | --- | --- |
| Tỷ lệ viếng thăm thành công |  | 4. Chi tiết KPI:   * Thẻ KPI: Đã mô tả chung ở mục Báo cáo KPI * Danh sách điểm bán đã viếng thăm: Hiển thị thông tin danh sách điểm bán thỏa điều kiện tính KPI trong thời gian được chọn     + Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.   + Mã điểm bán   + Tên điểm bán   + Địa chỉ điểm bán   + Số điện thoại điểm bán   + Click vào thẻ điểm bán, hiển thị màn hình [Chi tiết điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443971#:~:text=ch%C4%83m%20s%C3%B3c%3A-,Chi%20ti%E1%BA%BFt%20%C4%91i%E1%BB%83m%20b%C3%A1n,-Th%E1%BB%B1c%20hi%E1%BB%87n%20pin) đó |
| Điểm bán mở mới |  | 4. Chi tiết KPI:   * Thẻ KPI: Đã mô tả chung ở mục Báo cáo KPI * Danh sách điểm bán đã mở mới thành công: Hiển thị thông tin danh sách điểm bán trong thời gian được chọn     + Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.   + Mã điểm bán   + Tên điểm bán   + Địa chỉ điểm bán   + Số điện thoại điểm bán   + Click vào thẻ điểm bán, hiển thị màn hình [Chi tiết điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443971#:~:text=ch%C4%83m%20s%C3%B3c%3A-,Chi%20ti%E1%BA%BFt%20%C4%91i%E1%BB%83m%20b%C3%A1n,-Th%E1%BB%B1c%20hi%E1%BB%87n%20pin) đó |
| Số đơn hàng |  | 4. Chi tiết KPI:   * Thẻ KPI: Đã mô tả chung ở mục Báo cáo KPI * Danh sách đơn hàng: Hiển thị thông tin danh sách đơn hàng trong thời gian được chọn    + Thông tin mã của đơn hàng   + Thời gian tạo đơn hàng: Format: hh:mm dd/mm/yyyy   + Trạng thái của đơn hàng   + Thông tin điểm bán trên đơn hàng      - Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.     - Mã điểm bán     - Tên điểm bán     - Địa chỉ điểm bán     - Số điện thoại điểm bán   + Tên nhà phân phối đã chọn trên đơn hàng   + Loại đơn hàng: Đơn đặt   + Nguồn tạo đơn hàng   + Giá trị đơn hàng: Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng, format tiền tệ hàng nghìn kèm icon tiền tệ   + Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53031629#Khuy%E1%BA%BFnm%C3%A3i%C4%91%E1%BB%93ngth%E1%BB%9Di-M%C3%B4t%E1%BA%A3khuy%E1%BA%BFnm%C3%A3itr%C3%AAnm%C3%A0nh%C3%ACnhX%C3%A1cnh%E1%BA%ADn%C4%91%C6%A1nh%C3%A0ng/Chiti%E1%BA%BFt%C4%91%C6%A1nh%C3%A0ng)(Có kèm thông tin CTKM) |
| Doanh số trung bình theo ngày |  | 4. Chi tiết KPI:   * Thẻ KPI: Đã mô tả chung ở mục Báo cáo KPI * Danh sách đơn hàng: Hiển thị thông tin danh sách đơn hàng trong thời gian được chọn    + Thông tin mã của đơn hàng   + Thời gian tạo đơn hàng: Format: hh:mm dd/mm/yyyy   + Trạng thái của đơn hàng   + Thông tin điểm bán trên đơn hàng      - Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.     - Mã điểm bán     - Tên điểm bán     - Địa chỉ điểm bán     - Số điện thoại điểm bán   + Tên nhà phân phối đã chọn trên đơn hàng   + Loại đơn hàng: Đơn đặt   + Nguồn tạo đơn hàng   + Giá trị đơn hàng: Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng, format tiền tệ hàng nghìn kèm icon tiền tệ   + Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53031629#Khuy%E1%BA%BFnm%C3%A3i%C4%91%E1%BB%93ngth%E1%BB%9Di-M%C3%B4t%E1%BA%A3khuy%E1%BA%BFnm%C3%A3itr%C3%AAnm%C3%A0nh%C3%ACnhX%C3%A1cnh%E1%BA%ADn%C4%91%C6%A1nh%C3%A0ng/Chiti%E1%BA%BFt%C4%91%C6%A1nh%C3%A0ng)(Có kèm thông tin CTKM) * Lưu ý: Trường hợp Doanh số tính ra có chữ số thập phân thì sẽ thực hiện là tròn đến số thập phân thứ 2 và làm tròn theo 4 xuống, 5 lên. |
| Doanh số tháng |  | 4. Chi tiết KPI:   * Thẻ KPI: Đã mô tả chung ở mục Báo cáo KPI * Danh sách đơn hàng: Hiển thị thông tin danh sách đơn hàng trong thời gian được chọn    + Thông tin mã của đơn hàng   + Thời gian tạo đơn hàng: Format: hh:mm dd/mm/yyyy   + Trạng thái của đơn hàng   + Thông tin điểm bán trên đơn hàng      - Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.     - Mã điểm bán     - Tên điểm bán     - Địa chỉ điểm bán     - Số điện thoại điểm bán   + Tên nhà phân phối đã chọn trên đơn hàng   + Loại đơn hàng: Đơn đặt   + Nguồn tạo đơn hàng   + Giá trị đơn hàng: Tổng tiền cuối cùng mà điểm bán phải thanh toán cho đơn hàng, format tiền tệ hàng nghìn kèm icon tiền tệ   + Chọn vào từng thẻ đơn hàng, hiển thị thông tin [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53031629#Khuy%E1%BA%BFnm%C3%A3i%C4%91%E1%BB%93ngth%E1%BB%9Di-M%C3%B4t%E1%BA%A3khuy%E1%BA%BFnm%C3%A3itr%C3%AAnm%C3%A0nh%C3%ACnhX%C3%A1cnh%E1%BA%ADn%C4%91%C6%A1nh%C3%A0ng/Chiti%E1%BA%BFt%C4%91%C6%A1nh%C3%A0ng)(Có kèm thông tin CTKM)  * Lưu ý: Trường hợp Doanh số tính ra có chữ số thập phân thì sẽ thực hiện là tròn đến số thập phân thứ 2 và làm tròn theo 4 xuống, 5 lên. |
| %Độ bao phủ |  | 4. Chi tiết KPI:   * Thẻ KPI: Đã mô tả chung ở mục Báo cáo KPI * Danh sách điểm bán: Hiển thị thông tin danh sách điểm bán thỏa mãn điều kiện tính KPI Penetration (điểm bán trong tuyến thực tế có phát sinh đơn hàng, không tính đơn hủy và có trả hàng) trong thời gian được chọn     + Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.   + Mã điểm bán   + Tên điểm bán   + Địa chỉ điểm bán   + Số điện thoại điểm bán   + Click vào thẻ điểm bán, hiển thị màn hình [Chi tiết điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443971#:~:text=ch%C4%83m%20s%C3%B3c%3A-,Chi%20ti%E1%BA%BFt%20%C4%91i%E1%BB%83m%20b%C3%A1n,-Th%E1%BB%B1c%20hi%E1%BB%87n%20pin) đó |
| SKUs/Đơn hàng |  | 4. Chi tiết KPI    * Thẻ KPI: Đã mô tả chung ở mục Báo cáo KPI * Danh sách sản phẩm: Hiển thị thông tin danh sách các sản phẩm chỉ định trong thời gian được chọn     + Thông tin sản phẩm     - Hình ảnh sản phẩm     - Mã SKU     - VAT   + Số lần bán ra của SKU     - Đơn vị tính: Lấy theo đơn vị tính trên đơn hàng bán ra     - Đơn hàng: Số đơn hàng có xuất hiện SKU     - Số lượng: Số lượng SKU trong tất cả các đơn |
| Điểm bán hoạt động  RedV1.1.0 |  | 4. Chi tiết KPI:   * Thẻ KPI: Đã mô tả chung ở mục Báo cáo KPI * Danh sách điểm bán active: Hiển thị thông tin danh sách điểm bán active trong thời gian được chọn     + Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.   + Mã điểm bán   + Tên điểm bán   + Địa chỉ điểm bán   + Số điện thoại điểm bán   + Click vào thẻ điểm bán, hiển thị màn hình [Chi tiết điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443971#:~:text=ch%C4%83m%20s%C3%B3c%3A-,Chi%20ti%E1%BA%BFt%20%C4%91i%E1%BB%83m%20b%C3%A1n,-Th%E1%BB%B1c%20hi%E1%BB%87n%20pin) đó |
| Tỷ lệ điểm bán hoạt động  RedV1.1.0 |  | 4. Chi tiết KPI:   * Thẻ KPI: Đã mô tả chung ở mục Báo cáo KPI * Danh sách điểm bán active: Hiển thị thông tin danh sách điểm bán active trong thời gian được chọn     + Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán, điểm bán không có hình ảnh, lấy hình mặc định.   + Mã điểm bán   + Tên điểm bán   + Địa chỉ điểm bán   + Số điện thoại điểm bán   + Click vào thẻ điểm bán, hiển thị màn hình [Chi tiết điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443971#:~:text=ch%C4%83m%20s%C3%B3c%3A-,Chi%20ti%E1%BA%BFt%20%C4%91i%E1%BB%83m%20b%C3%A1n,-Th%E1%BB%B1c%20hi%E1%BB%87n%20pin) đó |