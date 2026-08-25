|  |  |
| --- | --- |
| Issue Link | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-2863 |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Màn hình **"Tiến trình tích lũy"** được thiết kế để:   1. Quản lý, theo dõi, và hiển thị tiến trình các đợt tích lũy (CTTL) theo từng Giai đoạn (Giai đoạn). 2. Tự động tạo các Giai đoạn tích lũy dựa trên số Giai đoạn đã được cài đặt trong CTTL. 3. Ghi nhận và quản lý thông tin tích lũy thực đạt từng GĐ tích lũy. 4. Cung cấp thông tin chi tiết, giúp quản trị viên (admin) theo dõi trạng thái duyệt, nhân sự phụ trách, và các thông số liên quan đến từng GĐ. |
| Document version | RedV1.0.0 Khởi tạo: **Trạng thái giai đoạn gọi tắt (GD)/ (GĐ)/ (gđ)**  RedV1.0.1   * Bỏ tab Số lượng sản phẩm và gọp chung vào tab Doanh số sản phẩm  * wording msg báo lỗi   RedV1.0.2 **Mar 19, 2025 15:06**  Chọn chương trình tích lũy để export  Nhiều quà tặng hiển thị cách nhau dấu chấm phẩy ';'  RedV1.0.321/3/25   * Phần thưởng theo mốc: chỉ hiển thị giá trị phần thưởng của mốc đạt được theo cấu hình CTTL   **RedV1.1.0 : Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.** |
| Document status | GreenDONE |
| Document owner | thao.nguyen |
| Chage History | 2 |

truenone

# **Nội dung update Phase 2**

| Phase | Version | Ngày điều chỉnh | Nội dung | Người điều chỉnh | Nội dung bổ sung/update thêm | BRD |
| --- | --- | --- | --- | --- | --- | --- |
| **Phase 1** | **v. 22** | **Apr 21, 2025 09:12** | **Done phase 1** | **ThaoNTT** |  |  |
| Phase 2 | v.23  RedV2.0.0 | May 05, 2025  14:59 | 1/ Màn hình danh sách bổ sung điều kiện Và/ Hoặc cho Diễn giải mốc tích lũy đăng ký  2/ Thêm field Diễn giải mốc đạt được  3/ Phần thưởng hiển thị text hyperlink với phần thưởng tương ứng Mốc tích lũy đạt được  Click hyperlink => hiển thị reltime popup giá trị tiền thưởng/ Quà tặng tương ứng  4/ Thực đạt tính lại có select multichoice Nguồn mua hàng  5/ Popup Chi tiết thực đạt thêm tab Doanh số tổng  6/ Export:   * bổ sung format phần nghìn 1,000,000 với các dữ liệu là số lượng; số tiền * export diễn giải giống với màn hình danh sách | ThaoNTT | v.24 → v.29 wording ...  v.30:  Xóa nhầm tên mốc tích lũy đạt được nên đã bổ sung lại + Update UI Chi tiết tiền thưởng có bỏ cột số lượng | Copy of BRD [DMS90] QUẢN LÝ TÍCH LŨY |
| Phase 2 | RedV2.0.1 | 19/5/2025 | Tab Doanh số tổng => chỉ xét tất cả các sản phẩm  thỏa điều kiện cài đặt CTTL | ThaoNTT | v.31   * Bổ sung doc thiếu  mô tả chi tiết tab Doanh số tổng * Bỏ dòng text dư do version trước xóa dư (cụ thể compare version 30-31 sẽ thấy) |  |
| Phase 2 | RedV2.0.2 | 14/07/2025 | 1/ Xem chi tiết đăng ký → UI bổ sung field "Loại chương trình" và "Hợp đồng"    2/ Nguồn đơn hàng; Tùy theo nguồn đơn hàng đã cấu hình khi tạo CTTL   * Tính các đơn tạo trên app saleman + Portal cho điểm bán (không quan tâm đơn hàng có/ hay không chọn nhân viên bán hàng) + đơn đặt cho merchant  (Không tính đơn trả, không tính khuyến mãi) trong đoạn thời gian tích lũy doanh số | ThaoNTT | Anh   confirm    * Tính các đơn tạo trên app saleman + Portal cho điểm bán (không quan tâm đơn hàng có/ hay không chọn nhân viên bán hàng) + đơn đặt cho merchant  (Không tính đơn trả, không tính khuyến mãi) trong đoạn thời gian tích lũy doanh số |  |

---

Tóm tắt trạng thái

Thống nhất Rule chung của màn hình:

1/ inline bắt buộc lấy theo format chung: " @field là bắt buộc!"

2/ Placeholder Input/Select: Nhập vào [Tên]. / Chọn [Tên] 

Những lỗi chính tả/ câu text chưa khớp 100% so với Rule chung, vui lòng  lấy theo rule chung   [Lưu ý chung cho toàn bộ Portal](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO)

# Tiến trình tích lũy:

## Màn hình Danh sách Tiến trình tích lũy:

RedV2.0.0 UI bổ sung field "Diễn giải mốc đạt được; Phần thưởng"

Sau khi duyệt thành công đăng ký tích lũy cho điểm bán, hệ thống tự gen các tiến trình theo số GĐ của CTTL.

Giả dụ CTTL có 12 GĐ; và điểm bán duyệt đăng ký thành công => Hệ thống auto gen 12 tiến trình đăng ký cho điểm bán (12 line)

**ID: Mã giai đoạn**

**Cấu trúc Mã giai đoạn**

* **PREFIX**: Chuỗi cố định, ví dụ `"GD"` (đại diện cho "GĐ").

  + **Ý nghĩa**: Giúp phân loại hoặc xác định mã thuộc loại GĐ tích lũy.
  + **Cách xử lý**: Giá trị cố định, không thay đổi.
* **YY**: Hai chữ số cuối của năm. Refresh hằng năm

  + **Ý nghĩa**: Thể hiện năm phát hành GĐ tích lũy.
  + **Cách xử lý**: Lấy **hai chữ số cuối** từ giá trị năm hiện tại trên hệ thống.
    - Ví dụ: Năm 2025 → **"25";** Năm 2026 **→ 26**
* **xxxxxxxxxx**: 10 ký tự số tự tăng.

  + **Ý nghĩa**: Tạo tính duy nhất (unique) cho Mã giai đoạn.
  + **Cách xử lý**: Tự tăng 10 ký tự theo thứ tự không trùng lặp.
    - Ví dụ: 1234567801; 1234567802; 1234567803

**Cách hoạt động**

**a. Quy trình tạo Mã giai đoạn tự động**

1. Khi người dùng duyệt thành công đăng ký tích lũy cho điểm bán, hệ thống thực hiện gen các GĐ gồm các bước:

   * **Lấy giá trị PREFIX** từ cấu hình cố định (ví dụ: "GD").
   * **Lấy năm hiện tại** từ hệ thống và trích xuất **hai chữ số cuối (YY)**.
   * Tạo một chuỗi **10 ký tự số tự tăng** đảm bảo không trùng lặp.
2. Hệ thống kết hợp các thành phần:  
   `PREFIX + YY + xxxxxxxxxx`

**b. Ví dụ minh họa**

Năm 2025; CTTL có 12 GĐ

* GĐ 1: GD251234567801
* GĐ 2: GD251234567802
* GĐ 3: GD251234567803
* GĐ 4: GD251234567805
* ..
* GĐ 12: GD251234567813

Năm 2026; CTTL có 2 GĐ

* GĐ 1: GD261234567891
* GĐ 2: GD261234567892

**c. Kiểm tra và tránh trùng lặp**

* Trước khi lưu Mã giai đoạn, hệ thống sẽ:
  + **Kiểm tra trùng lặp**: So sánh Mã giai đoạn vừa tạo với các Mã giai đoạn đã có trong cơ sở dữ liệu.
  + Nếu trùng, hệ thống sẽ **tạo lại mã** cho đến khi đảm bảo tính duy nhất.

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Truy vấn | | | | |
| Tìm kiếm | Textsearch | Có | Không | * **Nhập thông tin tìm kiếm**:    + Người dùng nhập **mã điểm bán** hoặc **tên điểm bán** vào trường tìm kiếm.   + Hệ thống tự động lọc và hiển thị các kết quả phù hợp với thông tin đã nhập.   + Placeholder và tooltip: Tìm theo mã điểm bán, tên điểm bán * **Tìm kiếm theo từng tiêu chí**:    + **Mã điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần mã điểm bán để tìm kiếm. → Nhập enter     - Hệ thống sẽ hiển thị tất cả các mục có mã điểm bán chứa chuỗi ký tự được nhập.   + **Tên điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần tên điểm bán để tìm kiếm.→ Nhập enter     - Hệ thống sẽ hiển thị các mục có tên điểm bán khớp với chuỗi ký tự nhập vào. * **Kết quả tìm kiếm**: Nhấn "Tìm kiếm"    + Danh sách tiến trình CTTL của điểm bán đã nhập sẽ hiển thị bên dưới lưới   + Nếu không tìm thấy kết quả khớp, hệ thống sẽ hiển thị *lưới danh sách rỗng* * **Xóa tìm kiếm**:    + Người dùng có thể xóa nội dung trong trường tìm kiếm  và nhấn "Tìm kiếm" để hiển thị lại toàn bộ Tiến trình tích lũy theo bộ lọc mặc định |
| Tuyến bán hàng | Select Onechoice | Có | Không | * **Mục đích**: Cho phép người dùng lọc tiến trình CTTL dựa trên tuyến bán hàng * Placeholder: Chọn Tuyến bán hàng * **Hành vi của trường chọn**:   + **Mở danh sách**: Khi nhấp vào trường "Tuyến bán hàng", danh sách các tuyến bán hàng đang active từ master sẽ xuất hiện.   + **Tìm kiếm và chọn**:     - Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa (theo mã  hoặc tên tuyến bán hàng) để tìm kiếm tuyến bán hàng mong muốn.     - Nhấp vào tên - mã tuyến để chọn.   + **Hiển thị lựa chọn**: Mã - Tên tuyến bán hàng được chọn sẽ hiển thị trong trường.   + **Kết quả lọc**: Nhấn "Tìm kiếm" Tiến trình tích lũy CTTL bên dưới sẽ tự động lọc chỉ hiển thị dữ liệu liên quan đến tuyến được chọn.   + **Xóa lựa chọn**:     - Người dùng có thể nhấn x để xóa     - Nếu bỏ chọn toàn bộ, hệ thống sẽ mặc định hiển thị tất cả |
| Chương trình tích lũy | Select Onechoice | Có | Không | * **Mục đích**: Lọc Tiến trình tích lũy CTTL theo chương trình tích lũy cụ thể. * Placeholder: Chọn Chương trình tích lũy * **Hành vi của trường chọn**:   + **Mở danh sách**: Hiển thị danh sách các chương trình tích lũy, chỉ lấy các CTTL có trạng thái Đang diễn ra, Ngưng hoạt động, Kết thúc   + **Tìm kiếm và chọn**:     - Cuộn hoặc nhập từ khóa mã hoặc nhập tên CTTL để tìm kiếm chương trình tích lũy mong muốn.     - Chọn chương trình bằng cách nhấp vào mục tương ứng.   + **Hiển thị lựa chọn**: Tên chương trình được chọn sẽ hiển thị trong hộp chọn.   + **Kết quả lọc**: Nhấn "Tìm kiếm". Danh sách bên dưới sẽ tự động hiển thị các tiến trình tích lũy của điểm bán liên quan đến chương trình đã chọn.   + **Xóa lựa chọn**:     - Bỏ chọn chương trình nhấn x     - Nếu không chọn chương trình nào, danh sách sẽ hiển thị tất cả các chương trình tích lũy. |
| Trạng thái giai đoạn | Select Onechoice | Có | Không | **Mục đích**: Cho phép người dùng lọc Tiến trình tích lũy của GD dựa trên trạng thái của GD đó.  **Danh sách trạng thái**:   * **Chưa diễn ra**: Trạng thái này áp dụng cho các GĐ chưa bắt đầu, tức là thời gian diễn ra chưa đến. * **Đang diễn ra**: Trạng thái này áp dụng cho các GĐ hiện tại, tức là đang diễn ra trong thời gian hiện tại. * **Đã kết thúc**: Trạng thái này áp dụng cho các GĐ đã hoàn thành, tức là đã kết thúc theo thời gian đã định. * **Ngưng hoạt động**: Trạng thái này áp dụng cho các GĐ không còn hoạt động nữa, do Người dùng thực hiện "Ngưng hoạt động" theo điểm bán hoặc theo GĐ   **Placeholder**: "Chọn Trạng thái giai đoạn"  **Hành vi của trường chọn**:   1. **Mở danh sách**: Khi người dùng nhấp vào trường "Trạng thái giai đoạn", danh sách các Trạng thái giai đoạn sẽ hiện ra với các lựa chọn sau:     * Chưa diễn ra    * Đang diễn ra    * Đã kết thúc    * Ngưng hoạt động 2. **Tìm kiếm và chọn**:     * Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa để tìm Trạng thái giai đoạn mong muốn.    * Sau khi chọn, Trạng thái giai đoạn sẽ được hiển thị trong trường. 3. **Không bắt buộc chọn trạng thái**:     * Trường này không yêu cầu người dùng phải chọn Trạng thái giai đoạn. Nếu không chọn trạng thái nào, hệ thống sẽ hiểu là người dùng muốn lọc theo **tất cả các Trạng thái giai đoạn**.   **Hiển thị lựa chọn**:   * Trạng thái giai đoạn đã chọn sẽ hiển thị trong trường dưới dạng văn bản (text).   **Kết quả lọc**:   * Sau khi nhấn "Tìm kiếm", hệ thống sẽ tự động lọc và hiển thị Tiến trình tích lũy dựa trên Trạng thái giai đoạn đã chọn.   **Xóa lựa chọn**:   * Người dùng có thể nhấp vào biểu tượng xóa (x) để bỏ chọn Trạng thái giai đoạn hiện tại. * Khi không có Trạng thái giai đoạn nào được chọn, hệ thống sẽ mặc định hiểu là **tất cả các Trạng thái giai đoạn**.   **Màn hình mặc định**:   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định hiển thị tất cả |
| Kết quả giai đoạn | Select Onechoice | Có | Không | **Kết quả GĐ (Đạt/Không đạt)**  **Mục đích**: Cho phép người dùng lọc Tiến trình tích lũy của kỳ dựa trên Kết quả GĐ, cụ thể là "Đạt" hoặc "Không đạt".  **Danh sách kết quả**:   * **Chờ duyệt**: chỉ hiển thị các tiến trình tích lũy có trạng thái chờ duyệt * **Đạt**: Chỉ hiển thị các Tiến trình tích lũy của kỳ có kết quả "Đạt", tức là đã hoàn thành các mục tiêu, yêu cầu hoặc tiêu chí đặt ra cho kỳ đó. * **Không đạt**: Chỉ hiển thị các Tiến trình tích lũy của kỳ có kết quả "Không đạt", tức là kỳ không hoàn thành các mục tiêu hoặc yêu cầu đã đề ra.   **Placeholder**: "Chọn kết quả giai đoạn" (Mặc định là tất cả kết quả)  **Hành vi của trường chọn**:   1. **Mở danh sách**: Khi người dùng nhấp vào trường "Kết quả GĐ", danh sách các Kết quả GĐ sẽ hiện ra với các lựa chọn sau:     * Đạt    * Không đạt    * Chờ duyệt 2. **Tìm kiếm và chọn**:     * Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa để tìm kiếm Kết quả GĐ mong muốn.    * Sau khi chọn, Kết quả GĐ sẽ được hiển thị trong trường. 3. **Không bắt buộc chọn Kết quả GĐ**:     * Trường này không yêu cầu người dùng phải chọn Kết quả GĐ. Nếu không chọn kết quả nào, hệ thống sẽ hiểu là người dùng muốn lọc theo **tất cả các Kết quả GĐ**.   **Hiển thị lựa chọn**:   * Kết quả GĐ đã chọn sẽ hiển thị trong trường dưới dạng văn bản (text).   **Kết quả lọc**:   * Sau khi nhấn "Tìm kiếm", hệ thống sẽ tự động lọc và hiển thị Tiến trình tích lũy dựa trên Kết quả GĐ đã chọn (Đạt hoặc Không đạt).   **Xóa lựa chọn**:   * Người dùng có thể nhấp vào biểu tượng xóa (x) để bỏ chọn Kết quả GĐ hiện tại. * Khi không có Kết quả GĐ nào được chọn, hệ thống sẽ mặc định hiểu là **tất cả các Kết quả GĐ**.   **Màn hình mặc định**:   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả kết quả. * Khi mở màn hình mặc định hiển thị tất cả |
| Thời gian tích lũy | Date picker | Có | Không | **Chức năng:**  **Placeholder: Thời gian tích lũy**   * Default hiển thị kỳ hiện tại (từ đầu tháng đến cuối tháng theo today() )   + (Ví dụ: Nếu hôm nay là 26/01/2025, mặc định lọc từ 01/01/2025 đến 31/01/2025) * Trường này cho phép người dùng lọc Tiến trình tích lũy chương trình tích lũy theo khoảng thời gian nhất định, dựa trên Thời gian tích lũy * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các danh sách các tiến trình thuộc khoảng thời gian đã chọn  * Phải chọn cả từ ngày - đến ngày; Không chọn hiểu là mặc định * Nhấn Tìm Kiếm --> Mới hiển thị danh sách tiến trình tích lũy trong khoảng thời gian đã chọn   **Cách sử dụng:**  **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu.  **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc.  **Hiển thị kết quả: Nhấn "Tìm kiếm". hiển thị danh sách tiến trình tích lũy trong khoảng thời gian đã chọn**  **Xóa:**   * Nhấn x hoặc chọn xóa các ngày đã chọn * Sau khi xóa hiển thị Placeholder: Ngày bắt đầu - Ngày kết thúc   Ví dụ:     * **Từ ngày (From Date)**: **01/01/2025** * **Đến ngày (To Date)**: **15/01/2025**  | Tên tiến trình | Thời gian | Kết quả | | --- | --- | --- | | Tiến trình 1 | 05/01/2025 - 10/01/2025 | **hiển thị** | | Tiến trình 2 | 10/01/2025 - 15/01/2025 | **hiển thị** | | Tiến trình 3 | 28/12/2024 - 05/01/2025 | **hiển thị** | | Tiến trình 4 | 10/01/2025 - 20/01/2025 | **hiển thị** | | Tiến trình 5 | 20/12/2024 - 30/12/2024 | **Không **hiển thị**** | | Tiến trình 6 | 16/01/2025 - 20/01/2025 | **Không **hiển thị**** | |
| Hình thức trả thưởng | Select Onechoice | Có | Không | **Placeholder**: "Chọn hình thức trả thưởng" (Default: Không chọn, hiển thị tất cả).  **Hành vi của trường chọn**:   1. **Mở danh sách**:     * Khi nhấp vào trường "Hình thức trả thưởng", danh sách gồm hai lựa chọn sẽ hiển thị:      + **Theo giai đoạn**      + **Theo chương trình** 2. **Tìm kiếm và chọn**:     * Người dùng có thể:      + Cuộn qua danh sách để tìm lựa chọn.      + Nhập từ khóa ("Theo giai đoạn" hoặc "Theo chương trình") để tìm kiếm nhanh. 3. **Hiển thị lựa chọn**:     * Sau khi chọn, hình thức trả thưởng đã chọn sẽ hiển thị trong trường 4. **Kết quả lọc**:     * Người dùng nhấn nút **"Tìm kiếm"**, danh sách Tiến trình tích lũy sẽ được lọc:      + **Theo giai đoạn**: Chỉ hiển thị các Tiến trình có hình thức trả thưởng là theo giai đoạn.      + **Theo chương trình**: Chỉ hiển thị các Tiến trình có hình thức trả thưởng là theo chương trình. 5. **Xóa lựa chọn**:     * Người dùng có thể nhấp vào biểu tượng xóa hoặc bỏ chọn bằng cách chọn lại.    * Nếu không chọn bất kỳ loại chương trình nào, danh sách sẽ hiển thị "Placeholder" - hiểu là tất cả các hình thức trả thưởng |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Tiến trình tích lũy, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái default của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các Tiến trình tích lũy mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Tiến trình tích lũy 2. **Danh sách Tiến trình tích lũy làm mới:** Sau khi nhấp, danh sách Tiến trình tích lũy sẽ hiển thị toàn bộ các Tiến trình tích lũy hiện có theo bộ lọc default   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Tiến trình tích lũy. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách Tiến trình tích lũy. không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Tiến trình tích lũy theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Tiến trình tích lũy. 3. **Hiển thị kết quả:** Danh sách Tiến trình tích lũy sẽ cập nhật và hiển thị các Tiến trình tích lũy phù hợp với các tiêu chí đã chọn.   Dữ liệu đã được sắp xếp chính xác như sau:  **1/ Danh sách CTTL** được chia thành:  today() thuộc thời gian diễn ra chương trình, sort theo 2 level: - 1/ Đang diễn ra -> Ngưng hoạt động - 2/ Ngày bắt đầu gần hiện tại nhất hiển thị trên cùng, nếu trùng thì random hiển thị  today() lớn hơn thời gian diễn ra chương trình, sort theo 1 level: -  Ngày bắt đầu gần hiện tại nhất hiển thị trên cùng, nếu trùng thì random hiển thị    **2/ Sắp xếp điểm bán theo CTTL:**   * **Theo thời gian duyệt đăng ký gần nhất (giảm dần).** * Nếu cùng thời gian duyệt, **sắp xếp theo ID điểm bán (tăng dần).**   Ví dụ:  Today (3/3/25)   | Mã điểm bán | Tên điểm bán | Thời gian duyệt đăng ký | | --- | --- | --- | | ST000579 | TH 0320000193 | 14-02-2025 | | ST000444 | TH 0320000140 | 20-02-2025 | | ST000445 | TH 0320000141 | 20-02-2025 |   **3/ Sắp xếp các GĐ trong từng điểm bán:**  Nếu có GĐ **hiện tại** → Hiển thị trước, rồi **GĐ quá khứ gần nhất → quá khứ xa hơn → GĐ tương lai gần → GĐ tương lai xa**   * + Nếu **không có GĐ hiện tại** → Hiển thị **GĐ quá khứ gần nhất → xa hơn**.   + Nếu **Không có GĐ quá khứ** → Hiển thị **GĐ tương lai gần nhất → xa hơn**.   Ví dụ:  Today (3/3/25)  Danh sách GĐ trong Điểm bán B (DB02 - CTTL03) 15-01-2025 → 15-05-2025   | Mã GĐ | Tên GĐ | Ngày bắt đầu | Ngày kết thúc | | --- | --- | --- | --- | | GD02 | GĐ 2 | 16-03-2024 | 15-04-2025 | | GD01 | GĐ 1 | 15-01-2025 | 15-02-2025 | | GD03 | GĐ 3 | 16-04-2024 | 20-04-2025 | | GD04 | GĐ 4 | 21-04-2025 | 30-04-2025 | | GD05 | GĐ 5 | 01-05-2025 | 15-05-2025 |   Trường hợp chỉ có GĐ tương lai Today (3/3/25); CTTL05 01-03-2025→ 31-06-2025   | Mã GĐ | Tên GĐ | Ngày bắt đầu | Ngày kết thúc | | --- | --- | --- | --- | | GD01 | GĐ 1 | 04-03-2025 | 31-03-2025 | | GD02 | GĐ 2 | 01-04-2025 | 30-04-2025 | | GD03 | GĐ 3 | 01-05-2025 | 30-05-2025 | | GD04 | GĐ 4 | 01-06-2025 | 31-06-2025 |   Danh sách GĐ trong Điểm bán C (DB12 - CTTL02) 01-01-2025→ 31-03-2025   | Mã GĐ | Tên GĐ | Ngày bắt đầu | Ngày kết thúc | | --- | --- | --- | --- | | GD04 | GĐ 4 | 01-03-2025 | 31-03-2025 | | GD03 | GĐ 3 | 01-02-2025 | 28-02-2025 | | GD02 | GĐ 2 | 16-01-2025 | 30-01-2025 | | GD01 | GĐ 1 | 01-01-2025 | 15-01-2025 |   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Tiến trình tích lũy sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Lưới danh sách** | | | | |
| | **Tên trường** | **Loại dữ liệu** | **Cho phép thao tác** | Mô tả | | --- | --- | --- | --- | | Mã giai đoạn | Datacolumns have copy | Không | Mã định danh duy nhất cho GD hệ thống tự tăng  **Ví dụ Mã giai đoạn minh họa**  Năm 2025; CTTL có 12 GD   * GD1: GD251234567801 * GD2: GD251234567802 * GD3: GD251234567803 * GD4: DG251234567805 * .. * GD12: DG251234567813 | | Mã điểm bán | Datacolumns have copy | Không | Mã định danh của điểm bán | | Tên điểm bán | Datacolumns | Không | Tên của điểm bán | | Số điện thoại điểm bán | Datacolumns | Không | Số điện thoại liên hệ của điểm bán | | Tỉnh/Thành | Datacolumns | Không | Tên tỉnh hoặc thành phố | | Địa chỉ | Datacolumns | Không | Địa chỉ chi tiết của điểm bán (Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.) | | Mã tuyến | Datacolumns have copy | Không | Mã tuyến bán hàng theo điểm bán | | Tên tuyến | Datacolumns | Không | Tên của tuyến theo mã tuyến | | Mã nhân viên | Datacolumns have copy | Không | Mã nhân viên theo mã tuyến | | Tên nhân viên | Datacolumns | Không | Tên tuyến theo mã tuyến | | Mã chương trình tích lũy | Datacolumns have copy  Hyperlink để xem "Chi tiết chương trình tích lũy" | Không | Mã định danh của chương trình  Click hyperlink: Xem chi tiết tích lũy | | Tên chương trình tích lũy | Datacolumns | Không | Tên chương trình tích lũy | | Trạng thái chương trình | Datacolumns   - Tag | Không | *Màu của thẻ tags trạng thái chương trình tích lũy dựa vào mã CTTL*   * ***Đang diễn ra: Vàng nhạt/ màu portal define Kết thúc: đỏ  Ngưng hoạt động: đỏ*** | | Ngày bắt đầu chương trình | Datacolumns | Không | Ngày bắt đầu của chương trình tích lũy (dd-mm-yyy) | | Ngày kết thúc chương trình | Datacolumns | Không | Ngày kết thúc của chương trình tích lũy (dd-mm-yyy) | | Mốc tích lũy | Datacolumns  Hyperlink để xem "Chi tiết đăng ký" | Không | Mốc tích lũy đã đăng ký của điểm bán  Click hyperlink: Chi tiết đăng ký | | RedV2.0.0Diễn giải mốc đăng ký | Datacolums | Không | Diễn giải mốc: Show nội dung diễn giải mặc định **nối chuỗi điều kiện** với giá trị ở Cài đặt CTTL tab - Hạn mức - Mốc tích lũy tương ứng. Format phần nghìn 1,000,000  **ví dụ 1: điều kiện Và/Hoặc có range Từ - Đến**  Số lượng nhóm sản phẩm từ 1 đến 5 **Và** Doanh số nhóm sản phẩm từ 1,000,000 đến 5,000,000  **Ví dụ 2: điều kiện Và/Hoặc có range Từ - Không giới hạn**  Số lượng nhóm sản phẩm từ 1,000 **Hoặc** Doanh số nhóm sản phẩm từ 5,000,000 | | Số suất đăng ký | Datacolumns | Không | Số suất điểm bán đăng ký | | Giai đoạn tích lũy | Datacolumns | Không | Tên của GD | | Ngày bắt đầu GĐ | Datacolumns | Không | Ngày bắt đầu tích lũy của GD (dd-mm-yyy) | | Ngày kết thúc GĐ | Datacolumns | Không | Ngày kết thúc Tích lũy của giai đoạn  (dd-mm-yyy) | | Trạng thái giai đoạn | Datacolumns  - Tag | Không | Trạng thái hiện tại của GĐ   * Chưa diễn ra: màu Vàng nhạt/màu portal define. ngày hiện tại < Ngày bắt đầu áp dụng tích lũy của giai đoạn * Đang diễn ra:  Xanh. ngày hiện tại >= ngày bắt đầu && < ngày kết thúc áp dụng tích lũy của giai đoạn * Đã kết thúc:  đỏ. Ngày hiện tại > ngày kết thúc áp dụng tích lũy của giai đoạn * Ngưng hoạt động: đỏ. Khi admin có thao tác ngưng hoạt động tiến trình tương lai | | Thực đạt | link | Không | Show real time kết quả  Click text "Chi tiết" hyperlink" hiển thị popup Chi tiết thực đạt | | Mốc tích lũy đạt được | Datacolumns | Không | Hiển thị tên mốc tích lũy đã đạt được.   * Đối với "hình thức áp dụng" = Trả thưởng theo mốc cao nhất đạt được  * + Show mốc cao nhất mà thực tế điểm bán đã đạt được   + Chưa đạt mốc nào thì để trống => phần thưởng hiển thị theo setting mốc đạt được tương ứng  * Đối vối "hình thức áp dụng" = Trả thưởng theo mốc đăng ký của điểm bán   + Khi nào thực đạt của điểm bán >= mốc đăng ký thì chỉ hiển thị mốc đạt được = mốc đăng ký thôi.   + Chưa đạt mốc nào thì để trống => phần thưởng hiển thị theo setting mốc đạt được tương ứng | | RedV2.0.0Diễn giải mốc đạt được | Datacolums | Không | Diễn giải mốc: Show nội dung diễn giải mặc định **nối chuỗi điều kiện** với giá trị ở Cài đặt CTTL tab - Hạn mức - Mốc tích lũy tương ứng. Format phần nghìn 1,000,000  **ví dụ 1: điều kiện Và/Hoặc có range Từ - Đến**  Số lượng nhóm sản phẩm từ 1 đến 5 **Và** Doanh số nhóm sản phẩm từ 1,000,000 đến 5,000,000  **Ví dụ 2: điều kiện Và/Hoặc có range Từ - Không giới hạn**  Số lượng nhóm sản phẩm từ 1,000 **Hoặc** Doanh số nhóm sản phẩm từ 5,000,000 | | Hình thức áp dụng | Datacolumns | Không | Show theo cấu hình @field Hình thức áp dụng   * Trả thưởng theo mốc cao nhất đạt được * Trả thưởng theo đăng ký của điểm bán | | Loại phần thưởng | Datacolumns | Không | Show theo cấu hình @Field Loại phần thưởng   * Thưởng cho mốc tích lũy * Thưởng cho mỗi sản phẩm tích lũy | | RedV2.0.0Phần thưởng | Datacolumns | Không | Hiển thị phần thưởng tương ứng dạng text hyperlink  **Dựa vào Mốc tích lũy đạt được để hiển thị @Phần thưởng tương ứng**,   * Tiền thưởng * Quà tặng * Chiết khấu %   Click hyperlink hiển thị popup tương ứng, Show real time   * format phần nghìn với số lượng, số tiền: 1,000,000 * Quy tắc làm tròn khi tính tiền như sau:  >= 0.75 làm tròn lên 1  0.5=<x<0.75 làm tròn 0.5  0.25=<x<0.5 làm tròn 0.5  x<0.25 làm tròn xuống 0 * Chọn dấu x để đóng popup không cần confirm dữ liệu   **1/ Tiền thưởng**  Click hyperlink text Tiền thưởng  Title: **Chi tiết tiền thưởng**  Tablename: **Kết quả tiền thưởng**      @Loại phần thưởng = Thưởng cho mốc tích lũy:   * Số suất = Số suất điểm bán đăng ký * Số tiền = Số tiền thưởng cài đặt Phần thưởng tương ứng * **Tiền thưởng = Số suất \* Số tiền**     @Loại phần thưởng = Thưởng cho mỗi sản phẩm tích lũy     * Số suất = Số suất điểm bán đăng ký * Số lượng = Tab Doanh số tổng (**Số lượng đạt)** * Số tiền = Số tiền thưởng cài đặt Phần thưởng tương ứng * **Tiền thưởng = Số suất \* Số lượng \* Số tiền**   **2/ Quà tặng**  (Chỉ hiển thị @Loại phần thưởng = Thưởng cho mốc tích lũy)  Click hyperlink text **Quà tặng** để xem chi tiết quà tặng  Title: **Chi tiết quà tăng**  Tablename: **Kết quả quà tặng**     * Điều kiện: Và/ Hoặc theo điều kiện quà tặng * Mã sản phẩm * Tên sản phẩm * Đơn vị cơ bản theo sản phẩm * **Số lượng = (Số lượng theo cài đặt quà tặng CTTL) \* số suất đăng ký**   + lấy từ danh sách quà tặng khi tạo CTTL→  Tab hạn mức →  Quà tặng  theo @mốc tích lũy đạt được tương ứng     **3/ Chiết khấu %**  (Chỉ hiển thị @Loại phần thưởng = Thưởng cho mốc tích lũy)  Click hyperlink text Chiết khấu %  Title: **Chi tiết chiết khấu**  Tablename: **Kết quả chiết khấu**     * Số suất = Số suất điểm bán đăng ký * Doanh số = Tab Doanh số tổng (**Doanh số đạt)** * Tiền thưởng tối đa = Số tiền thưởng tối đa cài đặt @Tiền thưởng tối đa theo mốc tích lũy đạt được. Nếu Tiền thưởng tối đa không nhập thì hiển thị số text "Không giới hạn" (hiểu là rỗng không có giới hạn) * **Tiền thưởng = Số suất \* Doanh số \* Chiết khấu**   + Nếu      - Giá trị tiền thưởng > Field @Tiền thưởng tối đa thì hiển thị Giá trị = Field @Tiền thưởng tối đa     - Giá trị tiền <= Field @Tiền thưởng tối đa thì hiển thị bằng Giá trị tiền đã tính     - Ví dụ Điều kiện mua từ 1tr → 2tr sẽ được thưởng 10%; **Tiền thưởng tối đa là 500,000 đ**  1/ Thực đạt là 4tr; đăng ký 2 suất nên Điều kiện cũng sẽ nhân 2  2/ Khi đó ĐK: 2tr → 4tr; Thực đạt 4 tr => Giá trị tiền thưởng = 4tr \* 10% \* 2 = 800,000 đ  3/  **Giá trị tiền thưởng > Tiền thưởng tối đa nên Giá trị tiền thưởng hiển thị là 500,000 đ** | | Kết quả giai đoạn | Datacolumns   - Tag | Không | Kết quả đạt được trong giai đoạn tích lũy *(Màu của trạng thái kết quả từng giai đoạn portal define vàng nhạt/xanh/đỏ/ ... tương tự kết quả trưng bày đã làm)*  **1/Chờ duyệt:** CTTL đang diễn ra và tiến trình có trạng thái sắp diễn ra; Đang diễn ra   * Khi CTTL bị ngưng hoạt động => các kỳ tương lai có trạng thái chờ duyệt => auto chuyển thành KHÔNG ĐẠT   **2/ Đạt:** Điểm bán đăng ký có thực đạt thỏa điều kiện tích lũy  **3/ Không đạt:**   * Khi Trạng thái giai đoạn = Đã kết thúc và điểm bán đăng ký nhưng thực đạt không thỏa điều kiện của mốc tích lũy đăng ký * Khi Trạng thái giai đoạn = Ngưng hoạt động =>  auto trạng thái chờ duyệt  thành KHÔNG ĐẠT     **-- Ví dụ**  **1/ CTTL cài đặt điều kiện tích lũy - mốc tích lũy như sau:**  **ĐK tích lũy VÀ: Tức là mỗi điều kiện đều phải đạt là mốc tích lũy. ĐK HOẶC: Tức là chỉ cần 1 trong 4 điều kiện đạt là mốc tích lũy**      **2/ Mô tả**  Điều kiện nhóm sản phẩm: VÀ/ HOẶC   ví dụ:  Nhóm sản phẩm áp dụng 1: có 3 Nhóm: A; B;C Nhóm sản phẩm áp dụng 2: có 3 Nhóm: B;D Nhóm sản phẩm áp dụng 3: có 3 Nhóm: E;  ĐK VÀ: Kết quả chỉ ĐẠT khi thỏa cả 2 kết quả sau:  1/ Sum tất cả các nhóm sp của Nhóm sản phẩm 1+2+3 ( A+ B+ C + D+E) phải đạt  2/ Phải đồng thời có các sản phẩm của nhóm A; B; C; D; E    ĐK HOẶC:  Kết quả ĐẠT khi chỉ cần 1 trong các "Nhóm sản phẩm áp dụng n" đạt khi thỏa 1 trong các kết quả sau  1/ Sum tất cả các nhóm sp của Nhóm sản phẩm 1- (A+ B + C) ĐẠT;  2/ Sum tất cả các nhóm sp của Nhóm sản phẩm 2 - (B +D) ĐẠT  3/ Kết quả của Nhóm sản phẩm 3- E ĐẠT  --   * **Bao gồm tức là sum tất cả doanh số sản phẩm trong lưới danh sách được chọn thỏa đk tích lũy là được thưởng** * **Loại trừ: sum tất cả doanh số sản phẩm TRỪ CÁC SẢN PHẨM trong lưới danh sách được chọn, NẾU THỎA ĐIỀU KIỆN TÍCH LŨY là được thưởng**     **3/ DỰA VÀO chi tiết thực đạt của điểm bán**  **Giai đoạn 1: 1/1→10/2**  **Ngày đăng ký được duyệt: 2/1**   | Ngày đơn hàng | Ngày duyệt đơn | Mã đơn | Mã sản phẩm - số lượng - Số tiền | Giả dụ tất cả các đơn sau đều thỏa điều kiện tích lũy  (và không có trả hàng) | | --- | --- | --- | --- | --- | | 31/12 | 2/1 | 1 | SP1 - 10 -1,000,000  SP2- 20- 2,000,000 | Không tính thực đạt (Vì tạo trước thời gian giai đoạn diễn ra) | | 1/1 | 2/1 | 2 | SP3 - 10 -1,000,000  SP4 - 20- 2,000,000 | **Tính thực đạt** (Tạo trong thời gian tích lũy, duyệt trong và sau ngày duyệt đăng ký tích lũy) | | 2/1 | 3/1 | 3 | SP4 - 10 -1,000,000  SP5- 20- 2,000,000 | **Tính thực đạt** | | 5/1 | 11/1 | 4 | SP1 - 10 -1,000,000  SP2- 20- 2,000,000 | Không tính thực đạt | | 11/1 | 11/1 | 5 | SP1 - 10 -1,000,000  SP2- 20- 2,000,000 | Không tính thực đạt |   Số lượng nhóm sản phẩm:   * Bia rượu: 100 * Nước yến: 20 * Bánh bao: 10   Doanh số nhóm sản phẩm   * Bia rượu: 1,000,000 * Bánh bao: 3,000,000 * Nước yến: 4,000,000   %Doanh số nhóm:  % doanh số xét theo từng mốc tích lũy = Thực đạt / Chỉ tiêu \* 100   * Bia rượu: 1,000,000 * Bánh bao: 3,000,000 * Nước yến:  4,000,000  |  |  |  |  |  |  |  |  | | --- | --- | --- | --- | --- | --- | --- | --- | |  | **đăng ký số suất =1** | | **đăng ký số suất =2** | | **đăng ký số suất =3** | |  | | ĐK VÀ | Chỉ tiêu theo mốc | % (doanh số Bia rượu + Doanh số bánh bao + nước yến) =8,000,000 / chỉ tiêu \*100 | **Chỉ tiêu = số suất đăng ký \* chỉ tiêu cài đặt** | % (doanh số Bia rượu + Doanh số bánh bao + nước yến) =8,000,000 / chỉ tiêu \*100 | **Chỉ tiêu = số suất đăng ký \* chỉ tiêu cài đặt** | % (doanh số Bia rượu + Doanh số bánh bao + nước yến) =8,000,000 / chỉ tiêu \*100 |  | | Chỉ tiêu theo mốc tích lũy 1 | 10,000,000 | 80 | 20,000,000 | 40 | 30,000,000 | 26.67 |  | | Chỉ tiêu theo mốc tích lũy 2 | 20,000,000 | 40 | 40,000,000 | 20 | 60,000,000 | 13.33 |  | | Chỉ tiêu theo mốc tích lũy 3 | 30,000,000 | 27 | 60,000,000 | 13.33 | 90,000,000 | 8.89 |  | |  | | | | | | | | |  |  | **đăng ký số suất =1** | | **đăng ký số suất =2** | | **đăng ký số suất =3** | | | **ĐK HOẶC** | **Chỉ tiêu theo mốc****= số suất đăng ký \* chỉ tiêu cài đặt** | **% Nhóm sp áp dụng 1**  **(doanh số Bia rượu + nước yến) = 5,000,000/chỉ tiêu \*100** | **% Nhóm sp áp dụng 2**  **(doanh số Bánh bao+ nước yến) =7,000,000/chỉ tiêu \*100** | **% Nhóm sp áp dụng 1 = 5,000,000/chỉ tiêu \*100** | **% Nhóm sp áp dụng 2 = 7,000,000/chỉ tiêu \*100** | **% Nhóm sp áp dụng 1 = 5,000,000/chỉ tiêu \*100** | **% Nhóm sp áp dụng 2 = 7,000,000/chỉ tiêu \*100** | | Chỉ tiêu theo mốc tích lũy 1 | 10,000,000 \* số suất đăng ký | 50 | 70 | 25 | 35 | 16.67 | 23.33 | | Chỉ tiêu theo mốc tích lũy 2 | 20,000,000 \* số suất đăng ký | 25 | 35 | 12.5 | 17.50 | 8.33 | 11.67 | | Chỉ tiêu theo mốc tích lũy 3 | 30,000,000 \* số suất đăng ký | 17 | 23 | 8.33 | 11.67 | 5.56 | 7.78 |     Doanh số sản phẩm: Total = 3,500,000   * Bánh bao nhân thịt * Bánh mì trứng * Xúc xích đức * Gà chiên nước mắm     **Bước 1: Xác định điều kiện tích lũy cần đạt**  Xét điều kiện = **VÀ**, tức là tất cả các tiêu chí phải đạt, nên cần kiểm tra:   1. **Số lượng nhóm sản phẩm** đạt 2. **Doanh số nhóm sản phẩm** đạt 3. **% Doanh số nhóm sản phẩm** đạt 4. **Doanh số sản phẩm** đạt   **Bước 2: Kiểm tra điều kiện**   * **Điểm bán đăng ký** **mốc tích lũy 1** * **Hình thức áp dụng = Trả thưởng theo mốc cao nhất đạt được** * **Số suất đăng ký 2**     **Bước 3: Vì đăng ký 2 suất nên mục tiêu = số suất đăng ký \* Giá trị tương ứng**   |  | Mốc tích lũy 1 |  |  | **số suất đăng ký \* Giá trị tương ứng** | **số suất đăng ký \* Giá trị tương ứng** | | --- | --- | --- | --- | --- | --- | |  | từ | đến |  |  | | Số lượng nhóm sản phẩm | 1 | 2 | **2** | **4** | | Doanh số nhóm sản phẩm | 1,000,000 | 2,000,000 | **2,000,000** | **4,000,000** | | %Doanh số nhóm sản phẩm | 10 - mục tiêu 10,000,000 | 15 - mục tiêu 10,000,000 | 10 **- mục tiêu 20,000,000** | 15 **- mục tiêu 20,000,000** | | Doanh số sản phẩm | 1,000,000 | 2,000,000 | **2,000,000** | **4,000,000** |   Xét mốc tích lũy 1:   | ĐK tích lũy =VÀ | **Số suất đăng ký 2 \* Mốc tích lũy 1** | | Thực đạt | Kết quả | | --- | --- | --- | --- | --- | |  | từ | đến |  |  | | Số lượng nhóm sản phẩm | **2** | **4** | Sum Bia rượu + nước yến + Bánh bao = 130 | Đạt | | Doanh số nhóm sản phẩm | **2,000,000** | **4,000,000** | sum  Bia rượu + nước yến + Bánh bao = 21,000,000 | Đạt | | %Doanh số nhóm sản phẩm | 10 - **mục tiêu 20,000,000** | 15 **- mục tiêu 20,000,000** | **đk % là HOẶC**  **thực đạt % Nhóm sp áp dụng 1 (=25%) hoặc 2 (=35%) đều đạt** | Đạt | | Doanh số sản phẩm | **2,000,000** | **4,000,000** | Doanh số sản phẩm: Total = 3,500,000 | Đạt |   **ĐK VÀ: Tức là mỗi điều kiện đều phải đạt => kết quả: ĐẠT mốc tích lũy 1**    **vì Hình thức áp dụng = Trả thưởng theo mốc cao nhất đạt được nên xét tiếp đến mốc cao nhất (Xét mốc tích lũy cao hơn)**   * Vì hình thức áp dụng = **Trả thưởng theo mốc cao nhất đạt được**, sau khi đạt **mốc tích lũy 1**, cần xét tiếp đến **mốc tích lũy 2** và **mốc tích lũy 3**. * Lặp lại quy trình kiểm tra với các điều kiện của **mốc tích lũy 2** và **mốc tích lũy 3**:   + Nếu **mốc tích lũy 2** cũng đạt, tiếp tục xét **mốc tích lũy 3**.   + Nếu không đạt mốc tích lũy cao hơn, thì dừng lại ở mốc tích lũy cao nhất mà điểm bán đã đạt.  ---   **Bước 1: Xác định điều kiện tích lũy cần đạt**  Xét điều kiện = **HOẶC**, tức là ĐẠT MỘT TRONG các tiêu chí,   1. **Số lượng nhóm sản phẩm** 2. **Doanh số nhóm sản phẩm** 3. **% Doanh số nhóm sản phẩm** 4. **Doanh số sản phẩm**   **Bước 2: Kiểm tra điều kiện**   * **Điểm bán đăng ký** **mốc tích lũy 2** * **Hình thức áp dụng = Trả thưởng theo mốc đăng ký của điểm bán** * **Số suất đăng ký 3**   Xét mốc tích lũy 2   | ĐK tích lũy =HOẶC | **Số suất đăng ký 3 \* Mốc tích lũy 2** | | Thực đạt | Kết quả | | --- | --- | --- | --- | --- | |  | từ | đến |  |  | | Số lượng nhóm sản phẩm | **9** | **15** | Sum Bia rượu + nước yến + Bánh bao = 130 | Đạt | | Doanh số nhóm sản phẩm | **6,000,003** | **9,000,000** | sum  Bia rượu + nước yến + Bánh bao = 21,000,000 | Đạt | | %Doanh số nhóm sản phẩm | 16 **- mục tiêu 60,000,000** | 20**- mục tiêu 60,000,000** | **% Nhóm sp áp dụng 1 (=16.67%) hoặc 2 (=23.33%)**  **đk Hoặc** | Đạt | | Doanh số sản phẩm | **6,000,003** | **9,000,000** | Doanh số sản phẩm: Total = 3,500,000 | Không đạt |    ĐK tích lũy =HOẶC Tức là chỉ cần 1 trong 4 điều kiện đạt => **kết quả: ĐẠT mốc tích lũy 2**  vÌ **Hình thức áp dụng = Trả thưởng theo mốc đăng ký của điểm bán NÊN CHỈ XÉT VÀ TRẢ THƯỞNG CHO MỐC TÍCH LŨY 2** | | Hình thức trả thưởng | Datacolumns | Không | Theo giai đoạn/ theo chương trình | | Lý do Ngưng hoạt động | Datacolumns | Không | Hiển thị lý do Ngưng hoạt động User đã nhập khi thực hiện ngưng hoạt động tiến trình  Khi CTTL đang diễn ra, người dùng thực hiện ngưng hoạt động chương trình thì   * giai đoạn chưa diễn ra : Chuyển thành Ngưng hoạt động, lý do theo lý do của CTTL ngưng hoạt động | | Người cập nhật | Datacolumns | Không | Mã nhân viên người thực hiện cập nhật | | Thời gian cập nhật | Datacolumns | Không | Thời điểm cuối cùng cập nhật dữ liệu (dd-mm-yyy hh:mm:ss) | | | | | |
| Export | Button | Có | Không | Chức năng Export danh sách tiến trình CTTL  Export danh sách tiến trình tích lũy |
| Import | Button | Có | Không | Chức năng Import Ngưng hoạt động tiến trình CTTL  1/ theo điểm bán  2/ Theo giai đoạn |
| Ngưng hoạt động | Button | Có | Không | Chức năng  Ngưng hoạt động tiến trình tích lũy Theo giai đoạn tương lai |

Chi tiết thực đạt

### Chi tiết thực đạt

Onclick "Chi tiết" hiển thị popup

RedV1.0.1 Bỏ tab Số lượng sản phẩm và gọp chung vào tab Doanh số sản phẩm

**Xét điều kiện tích lũy đã cài đặt để hiện thị tab tương ứng**

CTTL cài đặt Tab Hạn mức - Điều kiện tích lũy = Doanh só nhóm thuộc các điều kiện như sau:

1/ Số lượng nhóm sản phẩm

2/ Doanh số nhóm sản phẩm

3/ %Doanh số nhóm sản phẩm

4/ Doanh số sản phẩm

| ĐK tích lũy | Hiển thị tab chi tiết thực đạt |  |
| --- | --- | --- |
| Số lượng nhóm | Số lượng nhóm | 1/ Danh sách Số lượng nhóm sản phẩm (Không đếm trùng sku trên đơn)  Các Item sẽ bao gồm: Mã sản phẩm, tên sản phẩm, đơn vị cơ bản, nhóm sản phẩm   * RedV2.0.0Nhóm sản phẩm: Nhóm sản phẩm trên đơn hàng, 1 sản phẩm thuộc nhiều nhóm thì hiển thị các nhóm cách nhau bằng dấu phẩy   , Số lượng => get list + sum doanh số theo sản phẩm thuộc group SP đã cài đặt điều kiện tích lũy |
| Doanh số nhóm  %Doanh số nhóm | Doanh số nhóm | 2/ Danh sách doanh số của nhóm sản phẩm: (Không đếm trùng)  Các Item sẽ bao gồm: Mã sản phẩm, tên sản phẩm, đơn vị cơ bản, nhóm sản phẩm   * RedV2.0.0Nhóm sản phẩm: Nhóm sản phẩm trên đơn hàng, 1 sản phẩm thuộc nhiều nhóm thì hiển thị các nhóm cách nhau bằng dấu phẩy   , Số tiền đã bán => get list + sum doanh số theo sản phẩm thuộc group SP đã cài đặt điều kiện tích lũy |
| Doanh số sản phẩm | Doanh số sản phẩm | Danh sách doanh số mua theo sản phẩm:  Các Item sẽ bao gồm: Mã sản phẩm, Tên sản phẩm, đơn vị cơ bản, số lượng, Số tiền đã bán => count theo SP đã bán   * **Nếu CTTL cài điều kiện tương ứng = "BAO GỒM" => chỉ get item sản phẩm thuộc danh sách điều kiện "Doanh số sản phẩm"** * **Nếu CTTL cài điều kiện tương ứng = "LOẠI TRỪ" => Get tất cả item sản phẩm loại trừ các sản phẩm trong danh sách điều kiện "Doanh số sản phẩm"**   **Doanh số đạt = Sum  (số tiền all item all page)** |

Điều kiện

**Thỏa tất cả các điều kiện:**

* Get các item từ ngày -> ngày (Thời gian tích lũy giai đoạn tương ứng, nếu Ngày duyệt đăng ký thuộc giai đoạn tích lũy → Get từ ngày duyệt đăng ký đến ngày kết thúc giai đoạn tích lũy)
* Không tính đơn trả
* Không tính đơn khuyến mãi có hưởng khuyến mãi thuộc CTKM loại trừ đã cài đặt theo CTTL
* Filter theo điểm bán

**Note**:

* Doanh số = SL \* đơn giá sau VAT
* Tính Doanh số/Số lượng của các sản phẩm bị inactive trước ngày inactive.
* Các sản phẩm bị chuyển qua nhóm sản phẩm khác (Không thuộc cài đặt CTTL)/ bị remove giữa chừng thì tính giá trị thực đạt:
* Sản phẩm bị remove giữa chừng: tính doanh số và số lượng của sản phẩm đó trước thời điểm remove vẫn được tính vào giá trị thực đạt của điểm bán. Sau thời điểm remove, các sản phẩm này sẽ không được tính vào Chương trình tích lũy nữa.
* Sản phẩm bị chuyển nhóm: doanh số và số lượng của sản phẩm trước thời điểm chuyển nhóm vẫn được tính vào giá trị thực đạt của điểm bán. Sau thời điểm chuyển nhóm, các sản phẩm này sẽ không được tính vào Chương trình tích lũy nữa nếu nhóm mới không thuộc điều kiện đơn hàng trưng bày, nếu nhóm này thuộc đk trưng bày thì tính từ thời điểm được gán nhóm.
* Inactive nhóm sản phẩm: Chỉ tính doanh số và số lượng CÁC đơn hàng của các sản phẩm trên nhóm trước thời điểm inactive.
* Nhóm sản phẩm được tính tính dựa vào nhóm sản phẩm lưu trên đơn hàng  
  Tính thực đạt, không quan tâm ĐB mua hàng từ NPP nào 
  + Thực đạt: tổng giá trị TIỀN (SL\* đơn giá)/SỐ LƯỢNG  sản phẩm trên các đơn hàng đã duyệt (hiện tại dev đang lấy theo ngày duyệt), ~~tính các đơn tạo trên app saleman + Portal có chọn nhân viên bán hàng~~ (Không tính đơn trả (RedV2.0.0đơn trả phải có trạng thái THÀNH CÔNG; đơn hàng đã duyệt thành công là 2 trạng thái Đã duyệt; Đã xuất kho) trong ngày bắt đầu tích lũy đến ngày cuối cùng của giai đoạn tích lũy. Nếu ngày duyệt đăng ký thuộc giai đoạn thì lấy từ Ngày duyệt đăng ký đến ngày cuối cùng của giai đoạn.
  + RedV2.0.2 **Nguồn đơn hàng; Tùy theo nguồn đơn hàng đã cấu hình khi tạo CTTL.**

    - **Tính các đơn tạo trên app saleman + Portal cho điểm bán (không quan tâm đơn hàng có/ hay không chọn nhân viên bán hàng) + đơn đặt cho merchant  (Không tính đơn trả, không tính khuyến mãi)**
* CTTL cài đặt CTKM loại trừ → thì không tính các đơn hàng có add các mã CTKM đã setting này
* Chỉ lấy các nguồn mua hàng được setting theo các nguồn tương ứng: Merchant/ WEB/ APP/ Tất cả/RedV2.0.0 Select multichoice nguồn mua hàng: (Merchant/ WEB) hoặc (WEB/ APP) hoặc (Merchant/ APP)

---

RedV2.0.0 Thêm tab Doanh số tổng

**Redirect khi chọn "Chi tiết"→** Hiển thị tab Doanh số tổng. 

**Doanh số đạt = Sum  (số tiền)**. Format phần nghìn 1,000,000

**Số lượng đạt = Sum  (số lượng).** Format phần nghìn 1,000,000

**Mốc tích lũy thực đạt: Hiển thị mốc tích lũy thực tế cửa hàng đạt được (realtime) tính tương tự theo công thức thực đạt đã mô tả ở trên. (NẾU CHƯA ĐẠT BẤT KỲ MỐC NÀO→ ẨN LUÔN)**

Danh sách sản phẩm: RedV2.0.1  Lấy tất cả các sản phẩm thuộc điều kiện CTTL và thỏa điều kiện đã mô tả ở phase 1 phía trên (KHÔNG PHẢI LẤY TẤT CẢ SẢN PHẨM TRÊN ĐƠN HÀNG CỦA ĐIỂM BÁN)

Các Item sẽ bao gồm:

* #: Số thứ tự sản phẩm
* Mã sản phẩm: Mã sản phẩm trên đơn hàng. Mỗi mã sản phẩm là đại diện cho một dòng sản phẩm, không lặp lại
* Tên sản phẩm: theo mã sản phẩm
* Đơn vị cơ bản
* Nhóm sản phẩm: Nhóm sản phẩm trên đơn hàng, 1 sản phẩm thuộc nhiều nhóm thì hiển thị các nhóm cách nhau bằng dấu phẩy
* Số lượng: sum số lượng theo mã sản phẩm, không đếm trùng. format phần nghìn 1,000,000
* Số tiền đã bán:
  + Doanh số:Số tiền sau VAT= số lượng \* đơn giá sau VAT, dựa vào đơn giá trên đơn hàng, theo các nhóm sản phẩm, không đếm trùng. format phần nghìn 1,000,000
  + Tính theo đơn giá sau VAT, đơn trả phải có trạng thái THÀNH CÔNG; đơn hàng đã duyệt thành công là 2 trạng thái Đã duyệt; Đã xuất kho
* Có phân trang hiển thị
* Tắt popup không cần confirm

Xem chi tiết trưng bày

## Xem chi tiết chương trình tích lũy

Click vào Hyperlink Mã chương trình tích lũy → hiển thị màn hình Xem chi [tiết chương trình tích lũy](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53046507#id-%5BHO%5DKh%E1%BB%9Fit%E1%BA%A1och%C6%B0%C6%A1ngtr%C3%ACnht%C3%ADchl%C5%A9y-Xemchiti%E1%BA%BFtCh%C6%B0%C6%A1ngtr%C3%ACnht%C3%ADchl%C5%A9y)

* Chỉ view thông tin và không được điều chỉnh bất kỳ dữ liệu nào như đã mô tả
* Chọn x tắt popup mà không cần confirm

Chi tiết đăng ký

## Xem thông tin đăng ký chương trình

Click vào Hyperlink Mốc tích lũy=> hiển thị màn hình Chi tiết đăng ký

Header màn hình: "Chi tiết đăng ký" Có nội dung như đã mô tả ở màn hình đăng ký tích lũy - **Tab "Cập nhật thông tin tham gia":**

RedV2.0.2 bổ sung UI xem chi tiết đăng ký

Chỉ xem, không cho phép chỉnh sửa bất kỳ trường thông tin nào ở màn hình Chi tiết đăng ký (Ẩn button "Đồng ý"; "Thêm file")

Export tiến trình

## Export

Button cho phép export các tiến trình tích lũy / hình ảnh tích lũy theo  [rule Export](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO) đã mô tả

Mục đích: Cung cấp chức năng xuất danh sách các Tiến trình tích lũy (CTTL) ra file để lưu trữ, phân tích, hoặc chia sẻ. Tính năng này giúp người dùng dễ dàng xử lý dữ liệu ngoài hệ thống.

RedV1.0.2 Click button Export hiển thị popup: chọn thông tin để xuất dữ liệu

 1/ Popup hiển thị default CTTL từ bộ lọc, cho phép chọn lại.

2/ Xuất dữ liệu theo truy vấn của bộ lọc trên màn hình

Chọn "Xuất dữ liệu" để export danh sách tiến trình

Không chọn chương trình tích lũy mà nhấn button Xuất dữ liệu => @Field là bắt buộc!

Chọn tắt popup không tải file export về thiết bị

RedV2.0.0

* Export theo nội dung nối chuỗi diễn giải mốc tích lũy
* Format phần nghìn 1,000,000 với các dữ liệu là số lượng; số tiền

Template: Export\_ProgressAccumulateProgram

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Người xuất báo cáo: | FVCUS0914588981 - Thảo BA | | | | | | | | | | | | | | | | | |
| Thời gian xuất báo cáo: | 08/12/2024 - 07:16:08 | | | | | | | | | | | | | | | | | |
| Dữ liệu theo thời gian: | Từ ngày 01/12/2024 đến ngày 21/12/2024 | | | | | | | | | | | | | | | | | |

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Mã giai đoạn | Datacolumns | Mã giai đoạn |
| Mã điểm bán | Datacolumns | Mã điểm bán |
| Tên điểm bán | Datacolumns | Tên điểm bán |
| Số điện thoại điểm bán | Datacolumns | Số điện thoại điểm bán |
| Tỉnh/Thành | Datacolumns | Tỉnh/Thành |
| Địa chỉ | Datacolumns | Địa chỉ (Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.) |
| Mã tuyến | Datacolumns | Mã tuyến |
| Tên tuyến | Datacolumns | Tên tuyến |
| Mã nhân viên | Datacolumns | Mã nhân viên |
| Tên nhân viên | Datacolumns | Tên nhân viên |
| Mã chương trình tích lũy | Datacolumns | Mã chương trình tích lũy |
| Tên chương trình tích lũy | Datacolumns | Tên chương trình tích lũy |
| Trạng thái chương trình | Datacolumns | Trạng thái chương trình |
| Ngày bắt đầu chương trình | Datacolumns | Ngày bắt đầu chương trình |
| Ngày kết thúc chương trình | Datacolumns | Ngày kết thúc chương trình |
| Mốc tích lũy | Datacolumns | Mốc tích lũy |
| RedV2.0.0  Diễn giải mốc đăng ký | Datacolumns | Show nội dung diễn giải mặc định **nối chuỗi điều kiện** với giá trị ở Cài đặt CTTL tab - Hạn mức - Mốc tích lũy tương ứng. Format phần nghìn 1,000,000  **ví dụ 1: điều kiện Và/Hoặc có range Từ - Đến**  Số lượng nhóm sản phẩm từ 1 đến 5 **Và** Doanh số nhóm sản phẩm từ 1,000,000 đến 5,000,000  **Ví dụ 2: điều kiện Và/Hoặc có range Từ - Không giới hạn**  Số lượng nhóm sản phẩm từ 1,000 **Hoặc** Doanh số nhóm sản phẩm từ 5,000,000 |
| Số suất đăng ký | Datacolumns | Số suất đăng ký |
| Giai đoạn tích lũy | Datacolumns | Giai đoạn tích lũy |
| Ngày bắt đầu GĐ | Datacolumns | Ngày bắt đầu GĐ |
| Ngày kết thúc GĐ | Datacolumns | Ngày kết thúc GĐ |
| Trạng thái giai đoạn | Datacolumns | Trạng thái giai đoạn |
| Nhóm sản phẩm | Datacolumns   (Dựa vào tab Doanh số tổng, Mỗi mã sản phẩm - nhóm sản phẩm là đại diện cho một dòng sản phẩm, không lặp lại) | Nhóm sản phẩm |
| Mã sản phẩm | Mã sp |
| Tên sản phẩm | tên sp |
| Đơn vị | Đơn vị cơ bản |
| Số lượng | Số lượng, format phần nghìn 1,000,000 |
| Số tiền | Số tiền, format phần nghìn 1,000,000 |
| Mốc tích lũy đạt được | Datacolumns | Tên mốc tích lũy đạt được của điểm bán |
| RedV2.0.0  Diễn giải mốc đạt được | Datacolumns | Show nội dung diễn giải mặc định **nối chuỗi điều kiện** với giá trị ở Cài đặt CTTL tab - Hạn mức - Mốc tích lũy tương ứng. Format phần nghìn 1,000,000  **ví dụ 1: điều kiện Và/Hoặc có range Từ - Đến**  Số lượng nhóm sản phẩm từ 1 đến 5 **Và** Doanh số nhóm sản phẩm từ 1,000,000 đến 5,000,000  **Ví dụ 2: điều kiện Và/Hoặc có range Từ - Không giới hạn**  Số lượng nhóm sản phẩm từ 1,000 **Hoặc** Doanh số nhóm sản phẩm từ 5,000,000 |
| Hình thức áp dụng | Datacolumns | Hình thức áp dụng |
| Loại phần thưởng | Datacolumns | Loại phần thưởng |
| RedV2.0.0  Phần thưởng | Datacolumns | Hiển thị  1/ Tiền thưởng  2/ Quà tặng  3/ Chiết khấu |
| Phần thưởng theo mốc | Datacolumns | Phần thưởng theo mốc RedV2.0.0 Hiển thị rỗng với Phần thưởng = Quà tặng  Format phần nghìn 1,000,000 số tiền với Phần thưởng = Chiết khấu % và Tiền thưởng |
| Mã sản phẩm tặng | Datacolumns | Mã sản phẩm tặng hiển thị cách nhau dấu chấm phẩy ';' |
| Tên sản phẩm tặng | Datacolumns | Tên sản phẩm tặng hiển thị cách nhau dấu chấm phẩy ';' |
| Đơn vị | Datacolumns | Đơn vị cơ bản của sản phẩm hiển thị cách nhau dấu chấm phẩy ';' |
| Số lượng | Datacolumns | Số lượng hiển thị cách nhau dấu chấm phẩy ';'  RedV2.0.0 Format phần nghìn 1,000,000 với số lượng |
| Kết quả giai đoạn | Datacolumns | Kết quả giai đoạn |
| Hình thức trả thưởng | Datacolumns | Hình thức trả thưởng |
| Lý do Ngưng hoạt động | Datacolumns | Lý do Ngưng hoạt động |
| Người cập nhật | Datacolumns | Người cập nhật |
| Thời gian cập nhật | Datacolumns | Thời gian cập nhật |

Ngưng hoạt động

## Ngưng hoạt động

Trạng thái giai đoạn = Chưa diễn ra => Hiển thị button ở cột Điều chỉnh cho phép Ngưng hoạt động giai đoạn tương lai . Trạng thái khác hide icon

Click icon hiển thị popup

Nhập lý do: text(100), bắt buộc phải nhập lý do. Không nhập lý do => Bấm cập nhật hiển thị bolder đỏ inline "Lý do là bắt buộc!"

Cập nhật: hiển thị thông báo cập nhật thành công => Chuyển trạng thái của kỳ từ Chưa diễn ra thành "Ngưng hoạt động" thông báo: "Cập nhật thành công!"

Đóng: Tắt popup và không cập nhật dữ liệu

--  24/3/25

bổ sung mô tả đã có từ màn hình đăng ký:

 Khi all tiến trình của điểm bán có trạng thái Ngưng hoạt động => Đăng ký của điểm bán auto chuyển thành "Ngưng hoạt động". lý do ngưng hoạt động đăng ký hiển thị **mặc định = "Ngưng hoạt động tiến trình tích lũy"**

Import

## Import

**1/ Chọn button Import, hiển thị màn hình import như hình**

**2/ Người dùng thực hiện import:**

* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc Kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống: Hiển thị thông báo: "Bạn chắc chắn thao tác này không?"

* + Đồng ý: Chạy tiến trình xử lý, kiểm tra dữ liệu inport từ file
  + Hủy: Đóng cảnh báo và giữ nguyên trạng thái import

**3/ Ràng buộc chung:**

* Áp dụng cho những CTTL có trạng thái **Đang diễn ra.**
* Áp dụng cho những tiến trình có trạng thái **Chưa diễn ra**

=>  [Import theo rule chung](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode) của hệ thống

### Ngưng Theo điểm bán

**Button: "Lấy file mẫu" : cho phép export file excel mẫu**

**Templates**: Import\_STOPProcessStoreAccumulate

RedV1.0.1

* Import 12/03/2025- Phase 1: template IMPORT  bỏ đi cái header trên đầu file và name sheet (tên sheet để "data") -> này theo core hiện tại chưa đáp ứng

* wording msg báo lỗi

**Quy trình import:**

**trueFlow import ngung hoạt độngfalseautotoptrue16222**

trueflow basicfalseautotop48444522true741.5

**Kiểm tra dữ liệu:**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã điểm bán (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập Mã điểm bán đăng ký CTTL | * **Mã điểm bán**để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Điểm bán @mã điểm bán nhập không đúng định dạng. Vui lòng kiểm tra lại!   + Dòng n: Điểm bán bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã điểm bán**không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi   + Dòng n: Điểm bán @mã điểm bán không hoạt động. Vui lòng kiểm tra lại!   + Dòng n: Điểm bán @mã điểm bán không tồn tại. Vui lòng kiểm tra lại! * **Mã điểm bán** tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi   + Dòng n: Dòng n1,n2.n3 có Mã điểm bán @mã điểm bán trùng. Vui lòng kiểm tra lại! * Mã điểm bán có trạng thái đăng ký khác Đã duyệt   + Dòng n: Điểm bán @mã điểm bán chưa có trạng thái đăng ký là "Đã duyệt. Vui lòng kiểm tra lại! * Mã điểm bán chưa có đăng ký CTTL này:   + Dòng n: Điểm bán @mã điểm bán chưa có trạng thái đăng ký là "Đã duyệt. Vui lòng kiểm tra lại! |
| 2 | Mã chương trình tích lũy (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt (cho phép "\_") | * Nhập mã CTTL | * **Mã Chương trình tích lũy**để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Chương trình tích lũy @mã CTTL nhập không đúng định dạng. Vui lòng kiểm tra lại!   + Dòng n: Chương trình tích lũy bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã Chương trình tích lũy**không tồn tại, ngưng hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi   + Dòng n: Chương trình tích lũy @mã CTTL không tồn tại. Vui lòng kiểm tra lại!   + Dòng n: Chương trình tích lũy @mã CTTL ngưng hoạt động. Vui lòng kiểm tra lại!  * **Mã Chương trình tích lũy** có trạng thái **#Đang diễn ra; #Ngưng hoạt động**   + Dòng n: Chương trình tích lũy @mã CTTL không hợp lệ, trạng thái đăng ký hiện tại không phải "Đang diễn ra". Vui lòng kiểm tra lại! |
| 3 | Lý do Ngưng hoạt động (\*) | Text (100) | * Nhập lý do Ngưng hoạt động, validate 100 ký tự, bắt buộc phải nhập lý do | * Nếu không nhập/ nhập >100 ký tự:   + Dòng n: Lý do Ngưng hoạt động chưa hợp lệ. Vui lòng kiểm tra lại! |

**Thực hiện Ngưng hoạt động:**

* Lấy tất cả các GĐ tương lai liên quan đến điểm bán.
* Đánh dấu trạng thái "Ngưng hoạt động" cho các GĐ tương lai của điểm bán.
* Lưu lý do Ngưng hoạt động vào DB

### Ngưng Theo giai đoạn

**Button: "Lấy file mẫu" : cho phép export file excel mẫu**

**Templates**:

RedV1.0.1

* Import 12/03/2025- Phase 1: template IMPORT  bỏ đi cái header trên đầu file và name sheet (tên sheet để "data") -> này theo core hiện tại chưa đáp ứng

* wording msg báo lỗi

**Quy trình import:**

trueFlow NHĐ-Theo kỳfalseautotoptrue16222

trueQuy trình kk cơ bản Ngưng hoạt độngfalseautotoptrue7421

**Kiểm tra dữ liệu:**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã giai đoạn (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập Mã giai đoạn | * **Mã giai đoạn**để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Mã giai đoạn @Mã giai đoạn nhập không đúng định dạng. Vui lòng kiểm tra lại!   + Dòng n: Mã giai đoạn bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã giai đoạn**không tồn tại. Hiển thị thông báo lỗi   + Dòng n: Mã giai đoạn @Mã giai đoạn không tồn tại. Vui lòng kiểm tra lại! * **Mã giai đoạn** tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi   + Dòng n: Dòng n1,n2.n3 có Mã giai đoạn @Mã giai đoạn trùng. Vui lòng kiểm tra lại! * **Mã giai đoạn** có trạng thái khác Chưa diễn ra   + - Đang diễn ra: Mã giai đoạn @Mã giai đoạn không hợp lệ, trạng thái đăng ký hiện tại không phải "Chưa diễn ra". Vui lòng kiểm tra lại!   + - Đã kết thúc: Mã giai đoạn @Mã giai đoạn không hợp lệ, trạng thái đăng ký hiện tại không phải "Chưa diễn ra". Vui lòng kiểm tra lại!   + - Ngưng hoạt động: Mã giai đoạn @Mã giai đoạn không hoạt động. Vui lòng kiểm tra lại! |
| 2 | Lý do Ngưng hoạt động (\*) | Text (100) | * Nhập lý do Ngưng hoạt động, validate 100 ký tự, bắt buộc phải nhập lý do | * Nếu không nhập/ nhập >100 ký tự:   + Dòng n: Lý do Ngưng hoạt động chưa hợp lệ. Vui lòng kiểm tra lại! |

****Thực hiện Ngưng hoạt động:****

* Đánh dấu trạng thái "Ngưng hoạt động" cho các GĐ tương lai có Mã giai đoạn hợp lệ trong template.
* Lưu lý do Ngưng hoạt động vào cơ sở dữ liệu.

Rule [import theo rule chung của portal](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode)

* Hiển thị lỗi theo từng dòng
* hiển thị tất cả các lỗi
* có phân trang hiển thị