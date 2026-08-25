|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature | Màn hình tổng quan chương trình trưng bày |
| Description | Báo cáo: DTD (hôm nay), WTD (tuần này), MTD (tháng này)  DTD - day to date  WTD - week to date  MTD - month to date    Dashboard bao gồm:   * Trạng thái của danh sách Chương trình trưng bày * Trạng thái của danh sách tham gia Chương trình trưng bày * Trạng thái của danh sách tiến trình Chương trình trưng bày * Trạng thái của danh sách trả thưởng Chương trình trưng bày   ***Lưu ý:*** Có thể lọc dashboard theo từng trạng thái chọn. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1.YÊU CẦU**

* **Giúp người quản trị hệ thống (admin/marketing/sales)** theo dõi tình hình hoạt động của các chương trình trưng bày theo thời gian (hôm nay, tuần này, tháng này).
* **Cung cấp cái nhìn toàn diện và nhanh chóng (tổng quan)** về trạng thái chương trình, tiến trình duyệt, danh sách trả thưởng, và sự tham gia của các điểm bán.
* **Ra quyết định nhanh chóng** (ví dụ: chương trình nào đang chậm duyệt, số lượng trả thưởng đang tồn đọng lớn,…)

## **2.CHỨC NĂNG**

link khai báo: [Quản lý trưng bày](https://eco-dms-dev.finviet.com.vn/display)/Tổng quan chương trình trưng bày:

## **3.MÔ TẢ**

### 3.1 Điều kiện lọc

**Thời gian:**Điều kiện lọc thời gian theo Ngày bắt đầu diễn ra của Chương trình trưng bày

* Hôm nay: Mặc định lọc chương trình khoảng thời gian áp dụng (ngày bắt đầu hoặc ngày kết thúc chương trình) có chứa ngày hiện tại.
* Tuần này: Mặc định lọc chương trình khoảng thời gian áp dụng (ngày bắt đầu hoặc ngày kết thúc chương trình) có chứa tuần hiện tại; với ngày bắt đầu là thứ Hai và ngày kết thúc là Chủ nhật.
* Tháng này: Mặc định lọc chương trình khoảng thời gian áp dụng (ngày bắt đầu hoặc ngày kết thúc chương trình) có chứa tháng hiện tại; với ngày bắt đầu bằng ngày 1 của tháng hiện tại và ngày kết thúc = ngày cuối cùng của tháng hiện tại. **Đây là điều kiện lọc mặc định khi vào màn hình.**
* Từ ngày đến ngày: Mặc định lọc theo Tháng này và có thể lọc từ ngày đến ngày giới hạn 2 năm so với năm hiện tại.

Ví dụ: Có 2 Chương trình A và B

Chương trình A: Bắt đầu diễn ra là ngày 10/7 , kết thúc diễn ra là ngày 20/8

Chương trình B: Bắt đầu diễn ra là ngày 01/08, kết thúc diễn ra là 20/8

→ Nếu lọc theo thời gian là ngày 01/7 đến ngày 30/7  sẽ ra chương trình A

→ Nếu lọc theo thời gian là ngày 01/07 → ngày 09/07 sẽ không ra chương trình nào

→ Nếu lọc theo thời gian là ngày 01/07 đến 05/08 sẽ ra 2 chương trình A và B

→ Nếu lọc theo thời gian là ngày 01/08 đến ngày 05/08 sẽ ra chương trình B

→ Nếu lọc theo thời gian là ngày 21/08 đến ngày 25/08 sẽ không ra chương trình nào

### 3.2 Hiển thị

* Khi biểu đồ không có dữ liệu: hiển thị text "Không có dữ liệu"
* Khi biểu đồ có dữ liệu: hiện thị dữ liệu theo biểu đồ, màu sắc và danh sách trạng thái.

### 3.3 Mô tả

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| **Tên trường** | **Mô tả** | | | | | |
| **Tổng quan chương trình trưng bày** | Hiển thị tiêu đề màn hình | | | | | |
| **Hôm nay/ Tuần này/ Tháng này/ Lọc từ ngày đến ngày** | Hiển thị bộ lọc thời gian, cho phép người dùng chọn | | | | | |
| Biểu đồ hình tròn, đếm tổng số lượng theo từng danh sách chương trình bao gồm:   * Tên biểu đồ: Bao gồm 4 loại (Chương trình trưng bày, Danh sách tham gia, Danh sách tiến trình, Danh sách trả thưởng) * Số thứ tự biểu đồ: Mặc định từ 1 đến 4 theo từng danh sách * Chi tiết biểu đồ theo từng danh sách tương ứng   **3.3.1Chương trình trưng bày:**   * Đếm tất cả chương trình theo thời gian lọc ở tất cả trạng thái. Số chương trình theo từng trạng thái của chương trình trưng bày. * Danh sách tham gia, tiến trình, trả thưởng sẽ lọc theo tất cả chương trình trưng bày đã lọc.   Ví dụ : Lọc từ ngày 1 -> 10 sẽ ra 2 chương trình trưng bày A và B thì dữ liệu Danh sách tham gia, Danh sách tiến trình, Danh sách trả thưởng sẽ chỉ lọc theo 2 chương trình trưng bày A và B.   * Màu sắc biểu đồ chia theo trạng thái chương trình. * Danh sách trạng thái chương trình trưng bày và màu sắc tương ứng:      * **Mã màu:**   Khởi tạo: *faad14*  Sắp diễn ra; 15CD74  Đang diễn ra: 0958D9  Kết thúc: A5A5A5  Từ chối duyệt: CF1322  Hết hạn duyệt: D46B08  Ngưng hoạt động: FF4D4F  **3.3.2Danh sách tham gia:**   * Đếm tất cả điểm bán đã đăng ký theo tất cả chương trình trưng bày đã lọc với những trạng thái sau: **Đang diễn ra; Kết thúc; Ngưng hoạt động** * Số điểm bán lọc theo từng trạng thái đăng ký. * Màu sắc biểu đồ chia theo trạng thái đăng ký chương trình. * Danh sách trạng thái đăng ký chương trình trưng bày và màu sắc tương ứng:      * **Mã màu**   Chờ duyệt: *faad14*  Đã duyệt: 0958D9  Từ chối duyệt: CF1322  Hết hạn duyệt: D46B08  Ngưng hoạt động: FF4D4F  **3.3.3Danh sách tiến trình:**   * Đếm tất cả tiến trình theo tất cả chương trình trưng bày đã lọc với những trạng thái sau: **Đang diễn ra; Kết thúc; Ngưng hoạt động** * Số tiến trình lọc theo từng trạng thái đăng ký. * Màu sắc biểu đồ chia theo trạng thái tiến trình. * Danh sách trạng thái tiến trình và màu sắc tương ứng:      * **Mã màu**   Chưa diễn ra: *faad14*  Đang diễn ra: 0958D9  Đã kết thúc: A5A5A5  Ngưng hoạt động: FF4D4F  **3.3.4Danh sách trả thưởng:**   * Đếm tất cả phiếu trả thưởng theo tất cả chương trình trưng bày đã lọc với những trạng thái sau: **Đang diễn ra; Kết thúc; Ngưng hoạt động** * Số phiếu trả thưởng lọc theo từng trạng thái đăng ký. * Màu sắc biểu đồ chia theo trạng thái phiếu trả thưởng. * Danh sách trạng thái phiếu trả thưởng và màu sắc tương ứng:        * **Mã màu**   Chờ trả thưởng: *faad14*  Đã nhận thưởng: 389E0D  Từ chối: CF1322  Hết hạn: D46B08 | | | | | | |
| 3.4 Tính năng: **Xem tổng quan và chi tiết trạng thái**       * Màu sắc chia tỉ lệ theo màu sắc trạng thái tương ứng với max của biểu đồ là 100%. * Có hiển thị thông tin trạng thái và số lượng tương ứng theo màu sắc trên biểu đồ. * Khi thao tác **click vào một màu sắc trên biểu đồ (ví dụ: trạng thái “Sắp diễn ra”)** sẽ nêu bật thông tin trạng thái lên bằng 1 popup với nội dung là **trạng thái và số lượng tương ứng.**     **Biểu đồ lọc theo trạng thái chọn**    Khi **click vào text của một trạng thái cụ thể từ danh sách Trạng thái** biểu đồ sẽ:   * Chỉ làm mờ trạng thái đã chọn. * Biểu đồ ẩn màu sắc tương ứng với trạng thái đã chọn và chia lại tỉ lệ màu sắc còn lại (loại trừ trạng thái mờ ra) với max của biểu đồ là 100%.   Khi **click vào text của một trạng thái đã mờ từ danh sách Trạng thái** biểu đồ sẽ:   * Bỏ mờ trạng thái đã chọn. * Màu sắc chia lại tỉ lệ theo màu sắc trạng thái (không mờ) tương ứng và max của biểu đồ là 100%.   Khi **click vào nút điều hướng của một trạng thái từ danh sách Trạng thái** biểu đồ sẽ:   * Làm mờ tất cả trạng thái còn lại khác với trạng thái đã chọn. * Màu sắc chia lại tỉ lệ theo màu sắc trạng thái (không mờ) tương ứng và max của biểu đồ là 100%. | | | | | | |