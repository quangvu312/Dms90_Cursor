|  |  |
| --- | --- |
| Issue Link |  |
| Story | BRD: <https://kb.finviet.com.vn/pages/viewpage.action?pageId=61163316> |
| Epic |  |
| Feature | [APP] Enhance CTTB |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1. CHẤM CÔNG**

Thông tin hiện tại:

Bắt buộc chấm công đầu ngày khi thực hiện chăm sóc/tạo ghi chú/khảo sát điểm bán ngoài nhiệm vụ viếng thăm điểm bán

Thông tin thay đổi:

Bỏ chức năng chấm công đầu ngày ở các chức năng sau:

* Chăm sóc điểm bán (link Khác/Điểm bán/Chọn điểm bán chăm sóc).
* Tạo ghi chú điểm bán (link Khác/Điểm bán/Chọn điểm bán chăm sóc/Tạo ghi chú).
* Khảo sát (link Khác/Khảo sát).
* Chỉ bỏ qua bước chấm công đầu ngày cho những chức năng trên; không làm thay đổi luồng xử lý của chức năng.

## **2. CHƯƠNG TRÌNH TRƯNG BÀY**

hand-off link : ''''''''

### 2.1 Số suất đăng ký chương trình trưng bày

Thông tin hiện tại:

Phải chọn radio-button ON mới cho phép chọn số suất của hạn mức.

Link doc hiện tại: 4.[Đăng ký chương trình](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036542#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y-%C4%90%C4%83ngk%C3%BDch%C6%B0%C6%A1ngtr%C3%ACnh)

Thông tin thay đổi:

* Khi nhấn vào một số (1, 2, 3) hoặc button "Nhập" để nhập số bất kỳ ==> auto bật on radio-button tương ứng với hạn mức đó.
* Item của hạn mức đó sẽ được highlight để thể hiện rằng đã chọn.
* Bổ sung rule auto chọn số suất giống với chọn số suất của CTTL.

Rule bổ sung:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- |
| Màn hình **Hạn mức đăng ký** |  | Thao tác nhấn vào nút **"Đăng ký chương trình"** của CTTB mở hạn mức đăng ký.  **Rule bổ sung:**  **1/ Auto bật on radio-button**   * Mặc định **bật off** **radio-button** của hạn mức. * Khi nhấn vào option (1, 2, 3) hoặc hoàn tất nhập số bất kỳ trong textbox "Nhập", **auto bật on radio-button tương ứng** với hạn mức đó. * Highlight item hạn mức sau khi đã bật on radio-button.   **2/****Đã chọn một option và chưa lưu**   * Cùng hạn mức: nếu nhấn vào option khác đã chọn hoặc nhập lại số khác thì **option mới chọn sẽ được cập nhật**. * Khác hạn mức: nếu nhấn vào option khác đã chọn hoặc nhập lại số khác thì:    + Bật on radio-button của hạn mức mới.   + Bật off radio-button của hạn mức trước đó đã chọn.   + Highlight item hạn mức mới, bỏ highlight item hạn mức cũ trước đó.  * Nếu nhấn vào item và trúng option (1,2,3) hoặc nhập số khác bất kỳ trong item:    + Hệ thống sẽ hiểu là chọn số suất, auto bật on radio-button như mô tả ở trên.   + Highlight item hạn mức đã chọn, nhưng không điều hướng (vì đây là thao tác chọn số suất). * Nếu nhấn vào phần còn lại của item hoặc mũi tên bên phải:    + Sẽ được chuyển hướng sang hiển thị popup thông tin [Xem hạn mức](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036542#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y-Xemh%E1%BA%A1nm%E1%BB%A9c) của hạn mức đó   **3/ Đã chọn một option và đã lưu thành công (ở lại màn hình)**  Nếu nhấn vào option (1,2,3) hoặc nhập số khác bất kỳ để thực hiển đổi hạn mức đăng ký:   * Cùng hạn mức đã chọn → Cho phép chọn lại một option khác và sẽ được cập nhật sau khi submit Đổi hạn mức đăng ký. * Khác hạn mức đã chọn → Cho phép chọn một option khác, radio-button của hạn mức cũ sẽ bật off và bỏ highlight, radio-button của hạn mức mới sẽ bật on và highlight item. * Và không điều hướng khi chọn option hoặc nhập số trong textbox khi thực hiện đổi hạn mức.   Nếu nhấn vào phần còn lại của item hoặc mũi tên bên phải:   * Sẽ được chuyển hướng sang hiển thị popup thông tin [Xem hạn mức](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036542#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y-Xemh%E1%BA%A1nm%E1%BB%A9c) của hạn mức đó. |

### 2.2 Xem thông tin chi tiết Nhóm sản phẩm

Thông tin hiện tại:

Xem Nhóm sản phẩm chưa hiển thị sản phẩm thuộc nhóm.

Link doc hiện tại: 3.3[Nhóm sản phẩm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036542#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y-Nh%C3%B3ms%E1%BA%A3nph%E1%BA%A9m)

hand-off: ''''''''''''''''''''

Thông tin thay đổi:

* Khi xem chi tiết Nhóm sản phẩm người dùng có thể xem tất cả sản phẩm thuộc nhóm bằng cách nhấn vào xem chi tiết.
* Áp dụng khi xem chi tiết CTTB có setup điều kiện là Nhóm sản phẩm.
* Bổ sung xem chi tiết sản phẩm thuộc nhóm sản phẩm; không làm thay đổi luồng xử lý của chức năng.

Rule bổ sung:

| **Tên Trường** | **Loại dữ liệu/Loại field** | Mô tả |
| --- | --- | --- |
| Nếu CTTB có điều kiện là: **Nhóm sản phẩm** | Hyperlink | Khi nhấn vào hyperlink Nhóm sản phẩm hiển thị popup xem thông tin chi tiết Nhóm sản phẩm/Sản phẩm → **hiển thị sản phẩm/nhóm sản phẩm đang active**    **Nhóm sản phẩm**   1. Title: Danh sách nhóm sản phẩm 2. Text hiển thị Highlight màuđỏ sẽ thay đổi theo điều kiện cài đặt trên portal là Và/Hoặc:    * Với điều kiện "**Và**" => dòng text hiển thị "**Cần thỏa tất cả các yêu cầu dưới đây:**"    * Với điều kiện "**Hoặc**" => dòng text hiển thị "**Thỏa một trong các yêu cầu dưới đây:**" 3. Format field @nhóm sản phẩm áp dụng là:    * Tên nhóm sản phẩm (Đếm số lượng sản phẩm thuộc nhóm)    * Trường hợp nhóm sản phẩm không còn tồn tại thì hiển thị text "**Không có dữ liệu**" 4. Format field @sản phẩm thuộc nhóm là:    * Avatar sản phẩm - Tên sản phẩm - Mã sản phẩm    * Trường hợp chưa có avatar thì để hình mặc định; tên sản phẩm không có thì để trống. 5. Nút xem chi tiết nhóm sản phẩm:    * Nhấn vào nút xem chi tiết  từng Nhóm sản phẩm thì hiển thị tất cả Sản phẩm thuộc nhóm.    * Nhấn vào nút xem chi tiết  từng Nhóm sản phẩm thì ẩn tất cả Sản phẩm thuộc nhóm.    * Trường hợp số lượng sản phẩm thuộc nhóm = 0 thì ẩn nút xem chi tiết. 6. Hiển thị text mờ "**Đã hết danh sách**" ở cuối danh sách. 7. Nhấn nút **X** để tắt popup về màn hình trước đó. |

### 2.3 Xem Chi tiết Quà tặng

Thông tin hiện tại:

Chưa hiển thị thông tin quà tặng theo điều kiện Và hoặc Hoặc

Link doc hiện tại: 8.[Trả thưởng CTTB](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036542#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y-Tr%E1%BA%A3th%C6%B0%E1%BB%9FngCTTB)

Thông tin thay đổi:

* Hiển thị thêm text thông tin quà tặng theo điều kiện Và hoặc Hoặc.
* Bổ sung hiển thị thêm text thông tin quà tặng theo điều kiện; không làm thay đổi luồng xử lý của chức năng.

Rule bổ sung:

| **Tên Trường** | **Loại dữ liệu/Loại field** | Mô tả |
| --- | --- | --- |
| Onclick hiển thị popup  **Chi tiết hàng tặng** | Hyperlink | **Chi tiết hàng tặng:**V2.0.0   * Title: Chi tiết hàng tặng * Mã đơn hàng tặng:   + Mã đơn trả thưởng CTTB tương ứng từ field @Mã đơn hàng trên màn hình trả thưởng.   + Hiển thị góc bên phải * Nếu trên portal cài đặt điều kiện hàng tặng là Và/Hoặc, text hiển thị highlight đỏ sẽ thay đổi:   + Điều kiện "**Và**" => dòng text hiển thị "Tất cả các sản phẩm dưới đây:"   + Điều kiện "**Hoặc**" => dòng text hiển thị "Một trong các sản phẩm dưới đây:" * Danh sách sản phẩm trên đơn hàng tặng tương ứng theo chi tiết quà tặng trên màn hình trả thưởng   + Tên sản phẩm   + Số lượng   + Đơn vị cơ bản   Nhấn nút "**Đóng**" hoặc nút **X** để tắt popup về màn hình trước đó. |

### 2.4 Xem chi tiết nhiệm vụ cần đạt

Thông tin hiện tại:

Chưa hiển thị thông tin sản phẩm theo nhóm sản phẩm

Link doc hiện tại: 7.[Xem lịch sử tham gia và Lịch sử giai đoạn chụp hình](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036542#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y-Xeml%E1%BB%8Bchs%E1%BB%ADthamgiav%C3%A0L%E1%BB%8Bchs%E1%BB%ADgiai%C4%91o%E1%BA%A1nch%E1%BB%A5ph%C3%ACnh)

Thông tin thay đổi:

* Hiển thị sản phẩm theo nhóm sản phẩm ở 2 tab Doanh số nhóm và Số lượng nhóm.
* Bổ sung hiển thị thêm thông tin sản phẩm theo nhóm; không làm thay đổi luồng xử lý của chức năng.

link hand-off: ''''''''''''''''

Rule bổ sung:

| **Tên Trường** | **Loại dữ liệu/Loại field** | Mô tả |
| --- | --- | --- |
| Nhấn Nhiệm vụ cần đạt/xem chi tiết theo điều kiện mua hàng | Hyperlink | Màn hình **Lịch sử tham gia:**    1. Title: Lịch sử mua hàng  2. Hình thức hiển thị:   * Có 4 Tab theo thứ tự: Tab 1-**Số lượng mua;** Tab-2**: Doanh số nhóm;** Tab-3**: Số lượng nhóm;** Tab-4**: Doanh số đơn.** * Thao tác khi vuốt sang phải hoặc trái, với Tab 2 & Tab 3 có thể vuốt sang trái và sang phải. * Riêng Tab 1 chỉ được vuốt sang phải; Tab 4 chỉ được vuốt sang trái   3. Chuyển hướng:  Tại **Nhiệm vụ cần đạt** chọn hyperlink **Chi tiết** từ **"Doanh số nhóm" →** điều hướng đếnTab-2**: Doanh số nhóm**  Tại **Nhiệm vụ cần đạt** chọn hyperlink **Chi tiết** từ **"Số lượng nhóm" →** điều hướng đếnTab-3**: Số lượng nhóm**  Tại **Nhiệm vụ cần đạt** chọn hyperlink **Chi tiết** từ **"Doanh số đơn" →** điều hướng đếnTab-4**: Doanh số đơn**  4. Nội dung hiển thị:  Theo từng Tab như UI; dữ liệu tính dựa trên đơn hàng mua của điểm bán.  **Tab "Số lượng mua":**  Hiển thị danh sách sản phẩm mua gồm:   * Tên sản phẩm * Đếm tổng số lượng đã mua theo từng mã sản phẩm (thỏa điều kiện theo nhóm sản phẩm hoặc giá trị đơn hàng) * Đơn vị tính cơ bản của sản phẩm   **Tab "Doanh số nhóm"**  Tổng hợp doanh số mua từ nhóm sản phẩm, gồm:   * Tên nhóm sản phẩm (có thể mở rộng xem sản phẩm) * Tổng doanh số đã mua của từng nhóm sản phẩm. * Đơn vị tiền đồng (đ) * Mở rộng xem sản phẩm:   + Tên sản phẩm   + Tổng doanh số đã mua của từng sản phẩm.   + Đơn vị tiền đồng (đ)   **Tab "Số lượng nhóm":**  Tổng hợp số lượng mua từ nhóm sản phẩm, gồm:   * Tên nhóm sản phẩm (có thể mở rộng xem sản phẩm) * Tổng số lượng sản phẩm đã mua thuộc nhóm * Mở rộng xem sản phẩm:   + Tên sản phẩm   + Tổng số lượng đã mua của từng sản phẩm.   **Tab "Doanh số đơn"**  Tổng hợp doanh số theo từng đơn hàng, gồm:   * Text "Mã đơn:" * Mã đơn hàng (nhấn vào mã đơn hàng xem được chi tiết của đơn hàng) * Tổng doanh số đã mua của từng đơn hàng. * Đơn vị tiền đồng (đ)  **Ràng buộc:**   * Thông tin dữ liệu thực tế đạt của cửa hàng lấy theo thông tin thực tế đạt của tiến trình. * Sort hiển thị danh sách nhóm sản phẩm/sản phẩm theo alphabet. * Sort hiển thị đơn hàng theo ngày đặt hàng gần nhất lên đầu trang. * Hiển thị text "Bạn đã xem hết danh sách"ở cuối danh sách theo từng Tab. * Chọn icon back trên màn hình để quay về màn hình trước đó. |

### 2.5 Xem thông tin tham gia CTTB/CTTL

Thông tin hiện tại:

Hiển thị thông tin CTTB; CTTL chưa đăng ký và đã đăng ký.

Mục đích chỉ xem thông tin chương trình đã đăng ký; không cho phép đăng ký hoặc điều chỉnh đăng ký.

link thao tác: Khác/Điểm bán/Chọn điểm bán/Chọn thông tin điểm bán/Chọn icon CT Trưng bày - CT tích lũy.

link doc hiện tại: 4.2[Danh sách menu trong chi tiết điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443971#id-[SMAPP]Danhs%C3%A1chc%E1%BB%ADah%C3%A0ngch%C4%83ms%C3%B3c-Danhs%C3%A1chmenutrongchiti%E1%BA%BFt%C4%91i%E1%BB%83mb%C3%A1n)

Thông tin thay đổi:

* Chỉ hiển thị thông tin CTTB; CTTL điểm bán đã đăng ký.
* Xem thông tin chương trình đã tham gia không cho phép điều chỉnh thông tin (chỉ thực hiện điều chỉnh tham gia ở màn hình viếng thăm).
* Điều kiện hiển thị danh sách chương trình đã đăng ký là: ngày hiện tại < (ngày trả thưởng đến của kỳ cuối cùng + 30 ngày); ngược lại ẩn hiển thị.
* Thay đổi thông tin hiển thị không làm thay đổi luồng xử lý của chức năng.
* **Tại Chăm sóc > Thông tin điểm bán > CT trưng bày/ CT Tích lũy: Chọn Xem chi tiết Nhóm sản phẩm/ sản phẩm hiển thị popup chứa danh sách các sản phẩm đang active.**

link hand-off: ''''''''''

Rule thay đổi:

| Menu | Màn hình | Mô tả |
| --- | --- | --- |
| Khi chọn icon |  | **Ràng buộc:**   * Hiển thị tất cả những Chương trình tích lũy mà điểm bán đã đăng ký tham gia (với tất cả trạng thái đăng ký). * Điều kiện hiển thị chương trình đã đăng ký là: ngày hiện tại < (ngày trả thưởng đến của kỳ cuối cùng + 30 ngày)  * Sort danh sách Chương trình ưu tiên theo trạng thái:   Chờ duyệt > Đã duyệt> Từ chối duyệt> Ngưng hoạt động > Hết hạn duyệt  + Độ Ưu tiên càng nhỏ thì sẽ hiển thị trên cùng + Nếu cùng độ ưu tiên thì sẽ hiển thị theo cập nhật đăng ký gần nhất   * Có thể scroll xuống để xem toàn bộ danh sách chương trình đã tham gia. * Chỉ xem tiến độ, không được phép thực hiện các thao tác Đăng ký lại/Đổi mốc tích lũy (ẩn nút).   **Mô tả:**   * **Thanh tìm kiếm:**Tìm kiếm theo mã, tên chương trình * **Bộ lọc, lọc theo:**    + Thời gian diễn ra:     - Mặc định hiển thị Từ ngày = ngày 1 tháng hiện tại; Đến ngày = ngày hiện tại.     - Thời gian diễn ra chương trình từ ngày đến ngày     - Từ ngày <= Đến ngày (tối đa xem được 90 ngày)     - Không chọn Từ ngày và Đến ngày (tương đương không áp dụng filter) thì vẫn ấn áp dụng được.     - Nếu chỉ chọn Từ ngày hoặc Đến ngày thì show lỗi ô còn lại.     - Nếu chọn Từ ngày và Đến ngày thì apply filter.   + Trạng thái chương trình (Đang diễn ra, Kết thúc, Ngưng hoạt động)   + Trạng thái đăng ký (Chờ duyệt , Đã duyệt , Từ chối duyệt , Hết hạn duyệt, Ngưng hoạt động).   + Có bật dấu chọn  khi có filter điều kiện tìm kiếm.      * **Tên chương trình:**    + Hiển thị tên chương trình tích lũy, nếu độ dài chữ nhiều hơn 2 dòng thì cuối dòng 2 hiển thị ...   + Onclick vào tên chương trình tích lũy: để xem chi tiết Chương trình tích lũy đã đăng ký.  * **Trạng thái chương trình:**      + Hiển thị trạng thái theo từng Chương trình tích lũy mà điểm bán đã đăng ký. * **Thời gian diễn ra/Thời gian đăng ký/Thời gian tích lũy:**   + Hiển thị thời gian áp dụng theo từng Chương trình tích lũy mà điểm bán đã đăng ký. * **Mốc tích lũy:**  * + Hiển thị mốc tích lũy theo từng Chương trình tích lũy mà điểm bán đã đăng ký.   + Onclick vào tên mốc tích lũy: để xem chi tiết mốc tích lũy của chương trình đã đăng ký  * **Trạng thái đăng ký**:   + Hiển thị trạng thái đăng ký Chương trình tích lũy mà điểm bán đã đăng ký.   + Bao gồm các trạng thái: Chờ duyệt; Đã duyệt; Ngưng hoạt động; Hết hạn duyệt; Từ chối duyệt: Hiển thị thêm lý do từ chối (nếu có). * **Button "Xem tiến độ"**    + Hoạt động như mô tả [Xem tiến độ](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53050412#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnht%C3%ADchl%C5%A9y-Xemti%E1%BA%BFn%C4%91%E1%BB%99) * **Button "Xem lịch sử"**    + Hoạt động như mô tả [Xem lịch sử tham gia](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53050412#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnht%C3%ADchl%C5%A9y-Xeml%E1%BB%8Bchs%E1%BB%ADthamgia) |
| Khi chọn icon |  | **Ràng buộc:**   * Hiển thị tất cả những Chương trình trưng bày mà điểm bán đã đăng ký tham gia (với tất cả trạng thái đăng ký). * Điều kiện hiển thị chương trình đã đăng ký là: ngày hiện tại < (ngày trả thưởng đến của kỳ cuối cùng + 30 ngày) * Sort danh sách Chương trình ưu tiên theo trạng thái:   Chờ duyệt > Đã duyệt> Từ chối duyệt> Ngưng hoạt động > Hết hạn duyệt  + Độ Ưu tiên càng nhỏ thì sẽ hiển thị trên cùng + Nếu cùng độ ưu tiên thì sẽ hiển thị theo cập nhật đăng ký gần nhất   * Có thể scroll xuống để xem toàn bộ danh sách chương trình đã tham gia. * Chỉ xem tiến độ, không được phép thực hiện các thao tác Đăng ký lại/Đổi hạn mức (ẩn nút).   **Mô tả:**   * **Thanh tìm kiếm:**Tìm kiếm theo mã, tên chương trình * **Bộ lọc, lọc theo:**    + Thời gian diễn ra:     - Mặc định hiển thị Từ ngày = ngày 1 tháng hiện tại; Đến ngày = ngày hiện tại.     - Thời gian diễn ra chương trình từ ngày đến ngày     - Từ ngày <= Đến ngày (tối đa xem được 90 ngày)     - Không chọn Từ ngày và Đến ngày (tương đương không áp dụng filter) thì vẫn ấn áp dụng được.     - Nếu chỉ chọn Từ ngày hoặc Đến ngày thì show lỗi ô còn lại.     - Nếu chọn Từ ngày và Đến ngày thì apply filter.   + Trạng thái chương trình (Đang diễn ra, Kết thúc, Ngưng hoạt động)   + Trạng thái đăng ký (Chờ duyệt , Đã duyệt , Từ chối duyệt , Hết hạn duyệt, Ngưng hoạt động)   + Có bật dấu chọn  khi có filter điều kiện tìm kiếm.      * **Tên chương trình:**    + Hiển thị tên chương trình trưng bày, nếu độ dài chữ nhiều hơn 2 dòng thì cuối dòng 2 hiển thị ...   + Onclick vào tên chương trình trưng bày: để xem chi tiết Chương trình trưng bày đã đăng ký.  * **Trạng thái chương trình:**      + Hiển thị trạng thái theo từng Chương trình trưng bày mà điểm bán đã đăng ký. * **Thời gian diễn ra/Thời gian đăng ký/Thời gian trưng bày:**   + Hiển thị thời gian áp dụng theo từng Chương trình trưng bày mà điểm bán đã đăng ký. * **Hạn mức-số suất:**  * + Hiển thị hạn mức-số suất theo từng Chương trình trưng bày mà điểm bán đã đăng ký.   + Onclick vào tên hạn mức: để xem chi tiết hạn mức trưng bày của chương trình đã đăng ký.  * **Trạng thái đăng ký**:   + Hiển thị trạng thái đăng ký Chương trình trưng bày mà điểm bán đã đăng ký.   + Bao gồm các trạng thái: Chờ duyệt; Đã duyệt; Ngưng hoạt động; Hết hạn duyệt; Từ chối duyệt: Hiển thị thêm lý do từ chối (nếu có). * **Button "Xem tiến độ"**    + Hoạt động như mô tả [Xem tiến độ](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036542#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y-Xemti%E1%BA%BFn%C4%91%E1%BB%99). * **Button "Xem lịch sử"**    + Hoạt động như mô tả [Xem lịch sử tham gia và Lịch sử giai đoạn chụp hình](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036542#id-[SMAPP]Ch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y-Xeml%E1%BB%8Bchs%E1%BB%ADthamgiav%C3%A0L%E1%BB%8Bchs%E1%BB%ADgiai%C4%91o%E1%BA%A1nch%E1%BB%A5ph%C3%ACnh) |