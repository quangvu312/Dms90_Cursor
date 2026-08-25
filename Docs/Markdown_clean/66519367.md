|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Báo cáo: DTD, WTD, MTD  DTD - day to date  WTD - week to date  MTD - month to date    Dashboard bao gồm:   * Tổng quan chương trình (Các chương trình khởi tạo, Chương trình đang hoạt động, Chương trình ngưng hoạt động, Chương trình hết hạn) * Các điểm bán tham gia chương trình (Chờ duyệt đăng ký, Đã duyệt, Từ chối, Hết hạn duyệt) * Danh sách trả thưởng * Duyệt chương trình trưng bày   ***Lưu ý:*** Có thể xem chi tiết thông tin của từng dashboard. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Yêu cầu:

* **Giúp người quản trị hệ thống (admin/marketing/sales)** theo dõi tình hình hoạt động của các chương trình tích lũy theo thời gian (hôm nay, tuần này, tháng này).
* **Cung cấp cái nhìn toàn diện và nhanh chóng (tổng quan)** về trạng thái chương trình, tiến trình duyệt, danh sách trả thưởng, và sự tham gia của các điểm bán.
* **Ra quyết định nhanh chóng** (ví dụ: chương trình nào đang chậm duyệt, số lượng trả thưởng đang tồn đọng lớn,…)

# Màn hình chức năng

# Mô tả

## Điều kiện lọc

**Thời gian:**Điều kiện lọc thời gian theo Ngày bắt đầu diễn ra của Chương trình tích lũy

* Hôm nay: Mặc định ngày bắt đầu và ngày kết thúc theo ngày hiện tại
* Tuần này: Mặc định ngày bắt đầu là thứ 2 của tuần hiện tại, ngày kết thúc = chủ nhật của tuần hiện tại
* **Tháng này: Mặc định ngày bắt đầu bằng ngày 1 của tháng hiện tại, ngày kết thúc = ngày cuối cùng của tháng hiện tại. Bộ lọc này default khi mở màn hình**
* Từ ngày đến ngày: Cho phép lọc xem từ ngày đến ngày, Giới hạn 2 năm

Ví dụ: Có 2 Chương trình A và B

Chương trình A: Bắt đầu diễn ra là ngày 10/7 , kết thúc diễn ra là ngày 20/8

Chương trình B: Bắt đầu diễn ra là ngày 01/08, kết thúc diễn ra là 20/8

→ Nếu lọc theo thời gian là ngày 01/7 đến ngày 30/7  sẽ ra chương trình A

→ Nếu lọc theo thời gian là ngày 01/07 → ngày 09/07 sẽ không ra chương trình nào

→ Nếu lọc theo thời gian là ngày 01/07 đến 05/08 sẽ ra 2 chương trình A và B

→ Nếu lọc theo thời gian là ngày 01/08 đến ngày 05/08 sẽ ra chương trình B

→ Nếu lọc theo thời gian là ngày 21/08 đến ngày 25/08 sẽ không ra chương trình nào

## Hiển thị

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Tên trường** | **Mô tả** | | | | | |
| **Tổng quan chương trình tích lũy** | Hiển thị tiêu đề màn hình | | | | | |
| **Hôm nay/ Tuần này/ Tháng này/ Lọc ngày đến ngày** | Hiển thị bộ lọc thời gian, cho  phép người dùng chọn | | | | | |
| Biểu đồ tròn, summany tổng số lượng theo từng danh sách chương trình, bao gồm   * Tên biểu đồ: Bao gồm 4 loại (Chương trình tích lũy, Danh sách tham gia, Danh sách tiến trình, Danh sách trả thưởng) * Số thứ tự biểu đồ: Mặc định từ 1 đến 4 theo từng danh sách * Chi tiết biểu đồ theo từng danh sách tương ứng   + Chương trình tích lũy: Hiển thị Count Tổng số chương trình theo thời gian lọc ở tất cả trạng thái. Số chương trình theo từng trạng thái     - Lọc thời gian, ra các chương trình trong khoảng thời gian đó. Còn lại các danh sách khác như danh sách tham gia, tiến trình, trả thưởng sẽ đi theo Chương trình đó  ví dụ : Lọc từ ngày 1 -> 10 sẽ ra 2 chương trình Tất cả các danh sách còn lại (Danh sách tham gia, Danh sách tiến trình, Danh sách trả thưởng) sẽ chỉ only theo 2 chương trình tích lũy đã lọc theo thời gian     - Danh sách trạng thái chương trình tích lũy và màu sắc tương ứng của màn hình danh sách tích lũy     - **Mã màu**       * **Khởi tạo:** ***faad14***       * **Sắp diễn ra; 15CD74**       * **Đang diễn ra: 0958D9**       * **Kết thúc: A5A5A5**       * **Từ chối duyệt: CF1322**       * **Hết hạn duyệt: D46B08**       * **Ngưng hoạt động: FF4D4F**   + Danh sách tham gia: Hiển thị tổng số đăng ký theo Tổng số chương trình ở tất cả trạng thái. Số đăng ký theo từng trạng thái       - Count theo chương trình tích lũy đã lọc theo thời gian, Bao gồm các điểm bán đăng ký tham gia theo bộ lọc CTTL có trạng thái       * + Đang diễn ra         + Kết thúc         + Ngưng hoạt động     - Danh sách trạng thái đăng ký chương trình tích lũy và màu sắc tương ứng với màn hình Đăng ký tích lũy     - **Mã màu**       * **Chờ duyệt:** ***faad14***       * **Đang diễn ra: 0958D9**       * **Từ chối duyệt: CF1322**       * **Hết hạn duyệt: D46B08**       * **Ngưng hoạt động: FF4D4F**   + Danh sách tiến trình: Hiển thị tổng số lượng tiến trình theo Tổng số chương trình ở tất cả trạng thái. Số tiến trình theo từng trạng thái     - Count theo chương trình tích lũy đã lọc theo thời gian       * Đang diễn ra       * Kết thúc       * Ngưng hoạt động     - Danh sách trạng thái tiến trình tích lũy và màu sắc tương ứng với màn hình Tiến trình tích lũy     - **Mã màu**       * **Chữa diễn ra:** ***faad14***       * **Đang diễn ra: 0958D9**       * **Đã kết thúc: A5A5A5**       * **Ngưng hoạt động: FF4D4F**   + Danh sách trả thưởng: Hiển thị tổng số lượng phiếu Trả thưởng theo tổng số chương trình ở tất cả trạng thái. Số phiếu trả thưởng theo từng trạng thái     - Count theo chương trình tích lũy đã lọc theo thời gian       * Đang diễn ra       * Kết thúc       * Ngưng hoạt động     - Danh sách trạng thái tiến trình tích lũy và màu sắc tương ứng với màn hình Trả thưởng tích lũy     - **Mã màu**       * **Chờ trả thưởng:** ***faad14***       * **Đã trả thưởng: 389E0D**       * **Từ chối trả thưởng: CF1322**       * **Hết hạn trả thưởng: D46B08** * Khi không có dữ liệu: show data trống (follow theo các màn hình hiện có) * Khi có dữ liệu: show tất cả status ở bên phải (màu sắc dựa theo trạng thái khởi tạo CTTL) | | | | | | |
| Tính năng  1/ Popup on Chart Click:    Khi người dùng **click vào một phần tử trên biểu đồ (ví dụ: trạng thái “Kết thúc”)**, hệ thống sẽ:   * Hiển thị một **box nhỏ** có nội dung chi tiết hơn về phần được chọn: Trạng thái + Số lượng tương ứng * Màu sắc theo màu trạng thái tương ứng; phân chia tỷ lệ theo count số lượng các trạng thái trên tỷ lệ tổng là 100%   2/ Chọn xem chi tiết từ text trạng thái    Khi **click vào một trạng thái cụ thể từ danh sách Trạng thái**, biểu đồ sẽ lọc và   * Làm mờ trạng thái đã chọn. * Ẩn phần tử đã chọn trên biểu đồ. | | | | | | |