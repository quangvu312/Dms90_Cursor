|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Màn hình **"Tiến trình trưng bày"** được thiết kế để:   1. Quản lý, theo dõi, và hiển thị tiến trình các đợt trưng bày (CTTB) theo từng kỳ (kỳ). 2. Tự động tạo các kỳ trưng bày dựa trên số kỳ đã được cài đặt trong CTTB. 3. Ghi nhận và quản lý thông tin đăng ký cho từng kỳ trưng bày. 4. Cung cấp thông tin chi tiết, giúp quản trị viên (admin) theo dõi trạng thái duyệt, nhân sự phụ trách, và các thông số liên quan đến từng kỳ. |
| Document version | RedV1.0.0  RedV1.0.1  17/02/25   * Thay thông tin nhân viên = thông tin tuyến * Field CTTB chỉ lấy các CTTB có trạng thái Đang diễn ra, Ngưng hoạt động, Kết thúc * UI lấy theo format mới nhất (về màu sắc và hiển thị) nội dung không thay đổi |
| Document status | GreenDONE |
| Document owner | thao.nguyen |
| Chage History | 2 |

truenone

Tóm tắt trạng thái

Tham khảo file danh sách các trạng thái:

# Mô tả tóm tắt trạng thái:

# Tab Theo kỳ\_Tiến trình trưng bày:

## Màn hình Danh sách Tiến trình trưng bày:

Sau khi duyệt thành công đăng ký trưng bày cho điểm bán, thống tự gen các tiến trình theo số kỳ của CTTB.

Giả dụ CTTB có 12 kỳ; và điểm bán duyệt đăng ký thành công=> Hệ thống auto gen 12 tiến trình đăng ký cho điểm bán (12 line)

**ID: Mã kỳ**

**Cấu trúc mã kỳ**

* **PREFIX**: Chuỗi cố định, ví dụ `"K"` (đại diện cho "Kỳ").

  + **Ý nghĩa**: Giúp phân loại hoặc xác định mã thuộc loại kỳ trưng bày.
  + **Cách xử lý**: Giá trị cố định, không thay đổi.
* **YY**: Hai chữ số cuối của năm. Refresh hằng năm

  + **Ý nghĩa**: Thể hiện năm phát hành kỳ trưng bày.
  + **Cách xử lý**: Lấy **hai chữ số cuối** từ giá trị năm hiện tại trên hệ thống.
    - Ví dụ: Năm 2025 → **"25";** Năm 2026 **→ 26**
* **xxxxxxxxxx**: 10 ký tự số tự tăng.

  + **Ý nghĩa**: Tạo tính duy nhất (unique) cho mã kỳ.
  + **Cách xử lý**: Tự tăng 10 ký tự không trùng lặp.
    - Ví dụ: 1234567801; 1234567802; 1234567803

**Cách hoạt động**

**a. Quy trình tạo mã kỳ tự động**

1. Khi người dùng duyệt thành công đăng ký trưng bày cho điểm bán, hệ thống thực hiện gen các kỳ gồm các bước:

   * **Lấy giá trị PREFIX** từ cấu hình cố định (ví dụ: "K").
   * **Lấy năm hiện tại** từ hệ thống và trích xuất **hai chữ số cuối (YY)**.
   * Tạo một chuỗi **10 ký tự số tự tăng** đảm bảo không trùng lặp.
2. Hệ thống kết hợp các thành phần:  
   `PREFIX + YY + xxxxxxxxxx`

**b. Ví dụ minh họa**

Năm 2025; CTTB có 12 kỳ

* Kỳ 1: K251234567801
* Kỳ 2: K251234567802
* Kỳ 3: K251234567803
* Kỳ 4: K251234567805
* ..
* Kỳ 12: K251234567813

Năm 2026; CTTB có 2 kỳ

* Kỳ 1: K261234567891
* Kỳ 2: K261234567892

**c. Kiểm tra và tránh trùng lặp**

* Trước khi lưu mã kỳ, hệ thống sẽ:
  + **Kiểm tra trùng lặp**: So sánh mã kỳ vừa tạo với các mã kỳ đã có trong cơ sở dữ liệu.
  + Nếu trùng, hệ thống sẽ **tạo lại mã** cho đến khi đảm bảo tính duy nhất.

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Truy vấn | | | | |
| Tìm kiếm | Textsearch | Có | Không | * **Nhập thông tin tìm kiếm**:    + Người dùng nhập **mã điểm bán** hoặc **tên điểm bán** vào trường tìm kiếm.   + Hệ thống tự động lọc và hiển thị các kết quả phù hợp với thông tin đã nhập.   + Placeholder: Tìm theo mã điểm bán, tên điểm bán * **Tìm kiếm theo từng tiêu chí**:    + **Mã điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần mã điểm bán để tìm kiếm. → Nhập enter     - Hệ thống sẽ hiển thị tất cả các mục có mã điểm bán chứa chuỗi ký tự được nhập.   + **Tên điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần tên điểm bán để tìm kiếm.→ Nhập enter     - Hệ thống sẽ hiển thị các mục có tên điểm bán khớp với chuỗi ký tự nhập vào. * **Kết quả tìm kiếm**: Nhấn "Tìm kiếm"    + Danh sách tiến trình CTTB của điểm bán đã nhập sẽ hiển thị bên dưới lưới   + Nếu không tìm thấy kết quả khớp, hệ thống sẽ hiển thị *lưới danh sách rỗng* * **Xóa tìm kiếm**:    + Người dùng có thể xóa nội dung trong trường tìm kiếm  và nhấn "Tìm kiếm" để hiển thị lại toàn bộ Tiến trình trưng bày theo bộ lọc mặc định |
| Tuyến bán hàng RedV1.0.1 | Select Onechoice | Có | Không | * **Mục đích**: Cho phép người dùng lọc tiến trình CTTB dựa trên tuyến bán hàng * Placeholder: Tuyến bán hàng * **Hành vi của trường chọn**:   + **Mở danh sách**: Khi nhấp vào trường "Tuyến bán hàng", danh sách các tuyến bán hàng đang active từ master sẽ xuất hiện.   + **Tìm kiếm và chọn**:     - Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa (theo mã  hoặc tên tuyến bán hàng) để tìm kiếm tuyến bán hàng mong muốn.     - Nhấp vào tên - mã tuyến để chọn.   + **Hiển thị lựa chọn**: Mã - Tên tuyến bán hàng được chọn sẽ hiển thị trong trường.   + **Kết quả lọc**: Nhấn "Tìm kiếm" Tiến trình trưng bày CTTB bên dưới sẽ tự động lọc chỉ hiển thị dữ liệu liên quan đến tuyến được chọn.   + **Xóa lựa chọn**:     - Người dùng có thể bỏ chọn tuyến bằng cách nhấp lại vào mục đã chọn. Nhấn x     - Nếu bỏ chọn toàn bộ, hệ thống sẽ mặc định hiển thị tất cả |
| Chương trình trưng bày | Select Onechoice | Có | Không | * **Mục đích**: Lọc Tiến trình trưng bày CTTB theo chương trình trưng bày cụ thể. * Placeholder: Chương trình trưng bày * **Hành vi của trường chọn**:   + **Mở danh sách**: Hiển thị danh sách các chương trình trưng bày, chỉ lấy các CTTB có trạng thái Đang diễn ra, Ngưng hoạt động, Kết thúc   + **Tìm kiếm và chọn**:     - Cuộn hoặc nhập từ khóa mã hoặc nhập tên CTTB để tìm kiếm chương trình trưng bày mong muốn.     - Chọn chương trình bằng cách nhấp vào mục tương ứng.   + **Hiển thị lựa chọn**: Tên chương trình được chọn sẽ hiển thị trong hộp chọn.   + **Kết quả lọc**: Nhấn "Tìm kiếm". Danh sách bên dưới sẽ tự động hiển thị các tiến trình trưng bày của điểm bán liên quan đến chương trình đã chọn.   + **Xóa lựa chọn**:     - Bỏ chọn chương trình bằng cách nhấp lại. nhấn x     - Nếu không chọn chương trình nào, danh sách sẽ hiển thị tất cả các chương trình trưng bày. |
| Trạng thái kỳ | Select Onechoice | Có | Không | **Trạng thái kỳ**  **Mục đích**: Cho phép người dùng lọc Tiến trình trưng bày của kỳ dựa trên trạng thái của kỳ đó.  **Danh sách trạng thái**:   * **Chưa diễn ra**: Trạng thái này áp dụng cho các kỳ chưa bắt đầu, tức là thời gian diễn ra kỳ chưa đến. * **Đang diễn ra**: Trạng thái này áp dụng cho các kỳ hiện tại, tức là kỳ đang diễn ra trong thời gian hiện tại. * **Đã kết thúc**: Trạng thái này áp dụng cho các kỳ đã hoàn thành, tức là kỳ đã kết thúc theo thời gian đã định. * **Ngưng hoạt động**: Trạng thái này áp dụng cho các kỳ không còn hoạt động nữa, do Người dùng thực hiện "Ngưng hoạt động" theo điểm bán hoặc theo kỳ   **Placeholder**: "Trạng thái kỳ"  **Hành vi của trường chọn**:   1. **Mở danh sách**: Khi người dùng nhấp vào trường "Trạng thái kỳ", danh sách các trạng thái kỳ sẽ hiện ra với các lựa chọn sau:     * Chưa diễn ra    * Đang diễn ra    * Đã kết thúc    * Ngưng hoạt động 2. **Tìm kiếm và chọn**:     * Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa để tìm trạng thái kỳ mong muốn.    * Sau khi chọn, trạng thái kỳ sẽ được hiển thị trong trường. 3. **Không bắt buộc chọn trạng thái**:     * Trường này không yêu cầu người dùng phải chọn trạng thái kỳ. Nếu không chọn trạng thái nào, hệ thống sẽ hiểu là người dùng muốn lọc theo **tất cả các trạng thái kỳ**.   **Hiển thị lựa chọn**:   * Trạng thái kỳ đã chọn sẽ hiển thị trong trường dưới dạng văn bản (text).   **Kết quả lọc**:   * Sau khi nhấn "Tìm kiếm", hệ thống sẽ tự động lọc và hiển thị Tiến trình trưng bày dựa trên trạng thái kỳ đã chọn.   **Xóa lựa chọn**:   * Người dùng có thể nhấp vào biểu tượng xóa (x) để bỏ chọn trạng thái kỳ hiện tại. * Nếu người dùng nhấp lại vào trạng thái đã chọn trong danh sách, hệ thống sẽ bỏ chọn trạng thái đó. Khi không có trạng thái kỳ nào được chọn, hệ thống sẽ mặc định hiểu là **tất cả các trạng thái kỳ**.   **Màn hình mặc định**:   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định hiển thị tất cả |
| Kết quả kỳ | Select Onechoice | Có | Không | **Kết quả kỳ (Đạt/Không đạt)**  **Mục đích**: Cho phép người dùng lọc Tiến trình trưng bày của kỳ dựa trên kết quả kỳ, cụ thể là "Đạt" hoặc "Không đạt".  **Danh sách kết quả**:   * **Đạt**: Chỉ hiển thị các Tiến trình trưng bày của kỳ có kết quả "Đạt", tức là đã hoàn thành các mục tiêu, yêu cầu hoặc tiêu chí đặt ra cho kỳ đó. * **Không đạt**: Chỉ hiển thị các Tiến trình trưng bày của kỳ có kết quả "Không đạt", tức là kỳ không hoàn thành các mục tiêu hoặc yêu cầu đã đề ra.   **Placeholder**: "Kết quả kỳ" (Mặc định là tất cả kết quả)  **Hành vi của trường chọn**:   1. **Mở danh sách**: Khi người dùng nhấp vào trường "Kết quả kỳ", danh sách các kết quả kỳ sẽ hiện ra với các lựa chọn sau:     * Đạt    * Không đạt    * Chờ duyệt 2. **Tìm kiếm và chọn**:     * Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa để tìm kiếm kết quả kỳ mong muốn.    * Sau khi chọn, kết quả kỳ sẽ được hiển thị trong trường. 3. **Không bắt buộc chọn kết quả kỳ**:     * Trường này không yêu cầu người dùng phải chọn kết quả kỳ. Nếu không chọn kết quả nào, hệ thống sẽ hiểu là người dùng muốn lọc theo **tất cả các kết quả kỳ**.   **Hiển thị lựa chọn**:   * Kết quả kỳ đã chọn sẽ hiển thị trong trường dưới dạng văn bản (text).   **Kết quả lọc**:   * Sau khi nhấn "Tìm kiếm", hệ thống sẽ tự động lọc và hiển thị Tiến trình trưng bày dựa trên kết quả kỳ đã chọn (Đạt hoặc Không đạt).   **Xóa lựa chọn**:   * Người dùng có thể nhấp vào biểu tượng xóa (x) để bỏ chọn kết quả kỳ hiện tại. * Nếu người dùng nhấp lại vào kết quả đã chọn trong danh sách, hệ thống sẽ bỏ chọn kết quả đó. Khi không có kết quả kỳ nào được chọn, hệ thống sẽ mặc định hiểu là **tất cả các kết quả kỳ**.   **Màn hình mặc định**:   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả kết quả. * Khi mở màn hình mặc định hiển thị tất cả |
| Thời gian trưng bày | Date picker | Có | Không | **Chức năng:**  **Placeholder: Thời gian trưng bày**   * Default hiển thị 30 ngày đến thời điểm hiện tại. (Ngày hiện tại  lùi về quá khứ 30 ngày)   + (Ví dụ: Nếu hôm nay là 26/01/2025, mặc định lọc từ 27/12/2024 đến 26/01/2025). * Trường này cho phép người dùng lọc Tiến trình trưng bày chương trình trưng bày theo khoảng thời gian nhất định, dựa trên Thời gian trưng bày * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các danh sách  các tiến trình thuộc khoảng thời gian đã chọn  * Phải chọn cả từ ngày - đến ngày; Không chọn hiểu là mặc định (30 ngày đến hiện tại) * Nhấn Tìm Kiếm --> Mới hiển thị danh sách tiến trình trưng bày trong khoảng thời gian đã chọn   **Cách sử dụng:**  **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu.  **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc.  **Hiển thị kết quả: Nhấn "Tìm kiếm". hiển thị danh sách tiến trình trưng bày trong khoảng thời gian đã chọn**  **Xóa:**   * Nhấn x hoặc chọn xóa các ngày đã chọn * Sau khi xóa hiển thị Placeholder: Ngày bắt đầu - Ngày kết thúc   Ví dụ:     * **Từ ngày (From Date)**: **01/01/2025** * **Đến ngày (To Date)**: **15/01/2025**  | Tên tiến trình | Thời gian | Kết quả | | --- | --- | --- | | Tiến trình 1 | 05/01/2025 - 10/01/2025 | **hiển thị** | | Tiến trình 2 | 10/01/2025 - 15/01/2025 | **hiển thị** | | Tiến trình 3 | 28/12/2024 - 05/01/2025 | **hiển thị** | | Tiến trình 4 | 10/01/2025 - 20/01/2025 | **hiển thị** | | Tiến trình 5 | 20/12/2024 - 30/12/2024 | **Không **hiển thị**** | | Tiến trình 6 | 16/01/2025 - 20/01/2025 | **Không **hiển thị**** | |
| Hình thức trả thưởng | Select Onechoice | Có | Không | **Placeholder**: "Hình thức trả thưởng" (Default: Không chọn, hiển thị tất cả).  **Hành vi của trường chọn**:   1. **Mở danh sách**:     * Khi nhấp vào trường "Hình thức trả thưởng", danh sách gồm hai lựa chọn sẽ hiển thị:      + **Theo kỳ**      + **Theo chương trình** 2. **Tìm kiếm và chọn**:     * Người dùng có thể:      + Cuộn qua danh sách để tìm lựa chọn.      + Nhập từ khóa ("Theo Kỳ" hoặc "Theo chương trình") để tìm kiếm nhanh. 3. **Hiển thị lựa chọn**:     * Sau khi chọn, hình thức trả thưởng đã chọn sẽ hiển thị trong trường 4. **Kết quả lọc**:     * Người dùng nhấn nút **"Tìm kiếm"**, danh sách Tiến trình Trưng Bày sẽ được lọc:      + **Theo kỳ**: Chỉ hiển thị các Tiến trình có hình thức trả thưởng là theo kỳ.      + **Theo chương trình**: Chỉ hiển thị các Tiến trình có hình thức trả thưởng là theo chương trình. 5. **Xóa lựa chọn**:     * Người dùng có thể nhấp vào biểu tượng xóa hoặc bỏ chọn bằng cách chọn lại.    * Nếu không chọn bất kỳ loại chương trình nào, danh sách sẽ hiển thị "Placeholder" - hiểu là tất cả các hình thức trả thưởng |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Tiến trình trưng bày, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái default của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các Tiến trình trưng bày mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Tiến trình trưng bày 2. **Danh sách Tiến trình trưng bày làm mới:** Sau khi nhấp, danh sách Tiến trình trưng bày sẽ hiển thị toàn bộ các Tiến trình trưng bày hiện có theo bộ lọc default   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Tiến trình trưng bày. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách Tiến trình trưng bày. không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Tiến trình trưng bày theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Tiến trình trưng bày. 3. **Hiển thị kết quả:** Danh sách Tiến trình trưng bày sẽ cập nhật và hiển thị các Tiến trình trưng bày phù hợp với các tiêu chí đã chọn.     1. Orderby hiển thị CTTB nào có ngày bắt đầu gần nhất hiển thị trên cùng    2. Trong danh sách CTTB ở (a) Orderby hiển thị điểm bán đăng ký được duyệt gần nhất lên trên cùng    3. Trong danh sách điểm bán đăng ký duyệt ở (b) orderby các tiến trình có trạng thái Đang diễn ra lên đầu    4. Trong danh sách các tiến trình có trạng thái = Đang diễn ra, orderby kỳ theo thứ tự       1. Kỳ hiện tại       2. Kỳ quá khứ       3. Kỳ tương lai từ gần hiện tại → tương lai       4. **Ví dụ có 4 kỳ, hiện tại kỳ 2 → thứ tự là: 2→ 1→ 3→ 4**    5. Các trạng thái còn lại: hiển thị thứ tự lần lượt Chưa diễn ra →  đã diễn ra → ngưng hoạt động,       1. Chưa diễn ra thì thứ tự từ hiện tại đến tương lai. Ví dụ có 4 kỳ tương lai → thứ tự là 1->2->3->4       2. Đã diễn ra hiển thị thứ tự các kỳ gần hiện tại nhất trở về trước. Ví dụ có 4 kỳ quá khứ; → thứ tự là: 4->3->2→1       3. Ngưng hoạt động: Kỳ nào ngưng gần nhất hiển thị trước, ví dụ có 4 kỳ, ngưng hoạt động kỳ 1 vs kỳ 3 => hiển thị thứ tự: 3→ 1   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Tiến trình trưng bày sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Lưới danh sách** | | | | |
| | **Tên trường** | **Loại dữ liệu** | **Cho phép thao tác** | Mô tả | | --- | --- | --- | --- | | Mã kỳ | Datacolumns have copy | Không | Mã định danh duy nhất cho kỳ  **Ví dụ Mã kỳ minh họa**  Năm 2025; CTTB có 12 kỳ   * Kỳ 1: K251234567801 * Kỳ 2: K251234567802 * Kỳ 3: K251234567803 * Kỳ 4: K251234567805 * .. * Kỳ 12: K251234567813 | | Tên kỳ | Datacolumns | Không | Tên của kỳ | | Ngày bắt đầu kỳ | Datacolumns | Không | Ngày bắt đầu mua hàng và trưng bày của kỳ (dd-mm-yyy) | | Ngày kết thúc kỳ | Datacolumns | Không | Ngày kết thúc mua hàng và trưng bày của kỳ (dd-mm-yyy) | | Trạng thái kỳ | Datacolumns  - Tag | Không | Trạng thái hiện tại của kỳ   * Chưa diễn ra: màu Vàng nhạt/màu portal define Đang diễn ra:  Xánh lá Đã kết thúc:  đỏ cam Ngưng hoạt động: đỏ * *(=> Tham khảo trạng thái đã mô tả ở đầu page)* | | Lý do Ngưng hoạt động | Datacolumns | Không | Hiển thị lý do Ngưng hoạt động User đã nhập khi thực hiện ngưng hoạt động tiến trình  Khi CTTB đang diễn ra, người dùng thực hiện ngưng hoạt động chương trình thì   * Kỳ chưa diễn ra : Chuyển thành Ngưng hoạt động, lý do theo lý do của CTTB ngưng hoạt động | | Mã điểm bán | Datacolumns have copy | Không | Mã định danh của điểm bán | | Tên điểm bán | Datacolumns | Không | Tên của điểm bán | | Số điện thoại điểm bán | Datacolumns have copy | Không | Số điện thoại liên hệ của điểm bán | | Tỉnh/Thành | Datacolumns | Không | Tên tỉnh hoặc thành phố | | Địa chỉ | Datacolumns | Không | Địa chỉ chi tiết của điểm bán | | Kết quả kỳ | Datacolumns   - Tag | Không | Kết quả đạt được trong kỳ  *(Màu của trạng thái kết quả từng kỳ*   * Chờ duyệt: vàng nhạt / màu portal define Đạt: Xanh lá Không đạt:  đỏ   Tham khảo tóm tắt trạng thái | | Số lần yêu cầu duyệt | Datacolumns | Không | Field số lần duyệt hình ảnh của CTTB | | RedV1.0.1Mã tuyến | Datacolumns have copy | Không | Mã tuyến bán hàng | | RedV1.0.1Tên tuyến | Datacolumns | Không | Tên của tuyến theo mã tuyến | | Mã chương trình trưng bày | Datacolumns have copy  Hyperlink để xem "Chi tiết chương trình trưng bày" | Không | Mã định danh của chương trình  Click hyperlink: Xem chi tiết trưng bày | | Tên chương trình trưng bày | Datacolumns | Không | Tên chương trình trưng bày | | Trạng thái chương trình | Datacolumns   - Tag | Không | *Màu của thẻ tags trạng thái chương trình trưng bày*   * ***Đang diễn ra: Vàng nhạt/ màu portal define Kết thúc: đỏ cam Ngưng hoạt động: đỏ***   => Tham khảo tóm tắt trạng thái   * Với CTTB có trạng thái kết thúc thì kết quả kỳ và trạng thái kỳ tương ứng      * Với CTTB có trạng thái Ngưng hoạt động thì kết quả kỳ và trạng thái kỳ tương ứng | | Ngày bắt đầu | Datacolumns | Không | Ngày bắt đầu của chương trình (dd-mm-yyy) | | Ngày kết thúc | Datacolumns | Không | Ngày kết thúc của chương trình (dd-mm-yyy) | | Hình thức trả thưởng | Datacolumns | Không | Hình thức trả thưởng (Theo kỳ/ Theo chương trình) | | Hạn mức đăng ký | Datacolumns  Hyperlink để xem "Chi tiết đăng ký" | Không | Hạn mức đã đăng ký của điểm bán  Click hyperlink: Chi tiết đăng ký | | Số suất đăng ký | Datacolumns | Không | Số suất đã được đăng ký của điểm bán | | Thời gian đăng ký | Datacolumns | Không | Thời điểm đăng ký chương trình | | Thời gian duyệt đăng ký | Datacolumns | Không | Thời điểm duyệt đăng ký | | Người cập nhật | Datacolumns | Không | Mã nhân viên người thực hiện cập nhật | | Thời gian cập nhật | Datacolumns | Không | Thời điểm cuối cùng cập nhật dữ liệu (dd-mm-yyy hh:mm:ss) | | | | | |
| Export | Button | Có | Không | Chức năng Export danh sách tiến trình CTTB    1/ Export danh sách tiến trình trưng bày  2/ Export hình ảnh trưng bày |
| Import | Button | Có | Không | Chức năng Import Ngưng hoạt động tiến trình CTTB  1/ theo điểm bán  2/ theo kỳ |
| View | Button | Có | Không | Chức năng View hình ảnh trưng bày theo kỳ trưng bày |
| Ngưng hoạt động | Button | Có | Không | Chức năng  Ngưng hoạt động tiến trình trưng bày theo kỳ |

Xem chi tiết trưng bày

## Xem chi tiết chương trình trưng bày

Click vào Hyperlink Mã chương trình trưng bày → hiển thị màn hình [Xem chi tiết chương trình trưng bày](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028714#id-[HO]Kh%E1%BB%9Fit%E1%BA%A1oCTTB-Xemchiti%E1%BA%BFtch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y)

* Chỉ view thông tin và không được điều chỉnh bất kỳ dữ liệu nào như đã mô tả
* Chọn x tắt popup mà không cần confirm

Chi tiết đăng ký

## Xem thông tin đăng ký chương trình

Click vào Hyperlink Hạn mức đăng ký=> hiển thị màn hình Chi tiết đăng ký

Header màn hình: "Chi tiết đăng ký" Có nội dung như đã mô tả ở màn hình **Cập nhật đăng ký (link: [HO] Đăng ký trưng bày )**

RedV1.0.1

Chỉ xem, không cho phép chỉnh sửa bất kỳ trường thông tin nào ở màn hình Chi tiết đăng ký (Ẩn button "Đồng ý"; "Thêm file")

Export tiến trình

## Export

Button cho phép export các tiến trình trưng bày / hình ảnh trưng bày theo  [rule Export](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO) đã mô tả

Mục đích: Cung cấp chức năng xuất danh sách các Tiến trình Trưng Bày (CTTB) ra file để lưu trữ, phân tích, hoặc chia sẻ. Tính năng này giúp người dùng dễ dàng xử lý dữ liệu ngoài hệ thống.

Click button Export hiển thị popup:

default check chọn radio "Danh sách tiến trình trưng bày",(Chỉ được chọn 1 trong 2)

Chọn "Đồng ý" để export danh sách tiến trình

Chọn Hủy, tắt popup và không tải file export về thiết bị

### Export danh sách tiến trình trưng bày

Tenplate:

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Người xuất báo cáo: | FVCUS0914588981 - Thảo BA | | | | | | | | | | | | | | | | | |
| Thời gian xuất báo cáo: | 08/12/2024 - 07:16:08 | | | | | | | | | | | | | | | | | |
| Dữ liệu theo thời gian: | Từ ngày 01/12/2024 đến ngày 21/12/2024 | | | | | | | | | | | | | | | | | |

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Mã kỳ | Datacolumns | Hiển thị mã kỳ |
| Tên kỳ | Datacolumns | Tên đầy đủ của điểm bán |
| Mã chương trình trưng bày | Datacolumns | Hiển thị mã CTTB |
| Tên chương trình trưng bày | Datacolumns | Hiển thị tên CTTB |
| Trạng thái chương trình | Datacolumns | Hiển thị trạng thái CTTB |
| Ngày bắt đầu kỳ | Datacolumns | dd-mm-yyyy |
| Ngày kết thúc kỳ | Datacolumns | dd-mm-yyyy |
| Trạng thái kỳ | Datacolumns | Hiển thị trạng thái kỳ |
| Lý do Ngưng hoạt động | Datacolumns | Kỳ Ngưng hoạt động → hiển thị lý do Ngưng hoạt động |
| Mã điểm bán | Datacolumns | Hiển thị mã điểm bán đăng ký CTTB |
| Tên điểm bán | Datacolumns | Hiển thị tên ĐB |
| Số điện thoại điểm bán | Datacolumns | Hiển thị sdt ĐB |
| Tỉnh/Thành | Datacolumns | Hiển thị Tỉnh/Thành điểm bán |
| Địa chỉ | Datacolumns | Hiển thị địa chỉ điểm bán, full address nối chuỗi |
| Kết quả kỳ | Datacolumns | Hiển thị kết quả chấm của kỳ |
| Số lần yêu cầu duyệt | Datacolumns | HIển thị số  lần duyệt CTTB |
| Mã tuyến | Datacolumns | Hiển thị mã tuyến |
| Tên tuyến | Datacolumns | Hiển thị tên tuyến |
| Ngày bắt đầu | Datacolumns | dd-mm-yyyy |
| Ngày kết thúc | Datacolumns | dd-mm-yyyy |
| Hình thức trả thưởng | Datacolumns | Theo kỳ / theo chương trình |
| Hạn mức đăng ký | Datacolumns | Hạn mức đăng ký của CTTB |
| Số suất đăng ký | Datacolumns | Số suất đăng ký CTTB |
| Thời gian đăng ký | Datacolumns | dd-mm-yyyy |
| Thời gian duyệt đăng ký | Datacolumns | dd-mm-yyyy |
| Người cập nhật | Datacolumns | ID người cập nhật gần nhất |
| Thời gian cập nhật | Datacolumns | dd-mm-yyyy  hh:mm:ss cập nhật gần nhất theo giờ hệ thống |

### Export hình ảnh trưng bày

Thực hiện Truy vấn dữ liệu trên bộ lọc/ Giữ nguyên dữ liệu default trên màn hình. Nhấn nút **Export** để tiến hành xuất dữ liệu.. hiển thị popup như hình:

default check chọn radio "Danh sách tiến trình trưng bày", Check Hình ảnh trưng bày (Chỉ được chọn 1 trong 2)

Chọn "Đồng ý" để export danh sách hình ảnh trưng bày. Hệ thông kiếm tra đã chọn điểm bán hay chưa?

* Trước khi xuất dữ liệu, người dùng cần chọn **điểm bán,**
* **Ngược lại hiển thị warning: Bắt buộc phải chọn điểm bán**

Chọn Hủy, tắt popup và không tải file export về thiết bị

Export folder image theo cấu trúc:

**Cấu trúc thư mục xuất dữ liệu:**

* **Cấp I:** Tên thư mục chứa mã chương trình trưng bày (**Mã CTTB**).
* **Cấp II:** Tên thư mục chứa mã kỳ và kết quả kỳ (**Tên kỳ - Kết quả kỳ**).
* **Cấp III:** Thư mục chứa từng giai đoạn trong kỳ\_Ngày bắt đầu - Ngày kết thúc kỳ (**Tên Giai đoạn\_Kết quả giai đoạn**).
* **Cấp IV:** Thư mục chứa từng lần thực hiện trong giai đoạn (**Lần X - Kết quả lần**).
* **Cấp V:** Hình ảnh của từng lần thực hiện (**N**).

Cần

* **Tạo cấu trúc thư mục:**

  + Tạo thư mục cha có Filename: **PictureDisplayProcess\_DDMMYYYY**
  + Tạo các thư mục con theo cấu trúc
  + Mỗi hình ảnh trong thư mục cuối cùng được lưu theo dạng:  n`.jpg` (hoặc n`.png`). Trong đó n là số thứ tự hình ảnh bắt đầu từ 1 (max 10 tấm cho mỗi lần chụp)
* **Lưu hình ảnh:**

  + Tải hình ảnh từ cơ sở dữ liệu hoặc file hệ thống.
  + Lưu vào thư mục tương ứng.

**Tải xuống file**

* **Tạo file nén:**

  + Sau khi tạo cấu trúc thư mục và lưu hình ảnh, nén toàn bộ dữ liệu thành file `.zip`.
* **Cung cấp file tải về:**

  + Trả file nén về giao diện người dùng để tải xuống.

Ngưng hoạt động

## Ngưng hoạt động

Trạng thái Kỳ = Chưa diễn ra => Hiển thị button ở cột Điều chỉnh cho phép Ngưng hoạt động kỳ tương lai . Trạng thái khác hide icon

Click icon hiển thị popup

Nhập lý do: text(100), bắt buộc phải nhập lý do. Không nhập lý do => Bấm cập nhật hiển thị bolder đỏ inline "Lý do là bắt buộc!"

Cập nhật: hiển thị thông báo cập nhật thành công => Chuyển trạng thái của kỳ từ Chưa diễn ra thành "Ngưng hoạt động" thông báo: "Cập nhật thành công!"

Đóng: Tắt popup và không cập nhật dữ liệu

Import

## Import

**1/ Chọn button Import, hiển thị màn hình import như hình**

**2/ Người dùng thực hiện import:**

* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc Kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống: Hiển thị thông báo: "Bạn chắc chắn thao tác này không?"

* + Đồng ý: Chạy tiến trình xử lý, kiểm tra dữ liệu inport từ file
  + Hủy: Đóng cảnh báo và giữ nguyên trạng thái import

**3/ Ràng buộc chung:**

* Áp dụng cho những CTTB có trạng thái **Đang diễn ra.**
* Áp dụng cho những tiến trình có trạng thái **Chờ trưng bày.**

=>  [Import theo rule chung](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode) của hệ thống

### Ngưng Theo điểm bán

**Button: "Lấy file mẫu" : cho phép export file excel mẫu**

**Templates**:

**Quy trình import:**

**trueFlow import ngung hoạt độngfalseautotoptrue16221**

trueflow basicfalseautotop48444522true741.5

**Kiểm tra dữ liệu:**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã điểm bán (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập Mã điểm bán đăng ký CTTB | * **Mã điểm bán**để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Điểm bán nhập không đúng định dạng / bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã điểm bán**không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi   + Dòng n: Điểm bán không tồn tại / không hoạt động. Vui lòng kiểm tra lại! * **Mã điểm bán** tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi   + Dòng n: Mã điểm bán trùng với dòng n1 vui lòng kiểm tra lại! * Mã điểm bán có trạng thái đăng ký khác Đã duyệt   + Dòng n: Điểm bán không hợp lệ, trạng thái đăng ký hiện tại không phải 'Đã duyệt'. Vui lòng kiểm tra lại! |
| 2 | Mã chương trình trưng bày (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt (cho phép "\_"; "-"; ".") | * Nhập mã CTTB | * **Mã chương trình trưng bày**để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Chương trình trưng bày nhập không đúng định dạng / bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã chương trình trưng bày**không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi   + Dòng n: Chương trình trưng bày không tồn tại / không hoạt động. Vui lòng kiểm tra lại! * **Mã chương trình trưng bày**  tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi   + Dòng n: Mã chương trình trưng bày trùng với dòng n1 vui lòng kiểm tra lại! * **Mã chương trình trưng bày** có trạng thái khác Đang diễn ra   + Dòng n: Chương trình trưng bày không hợp lệ, trạng thái đăng ký hiện tại không phải "Đang diễn ra". Vui lòng kiểm tra lại! |
| 3 | Lý do Ngưng hoạt động (\*) | Text (100) | * Nhập lý do Ngưng hoạt động, validate 100 ký tự, bắt buộc phải nhập lý do | * Nếu không nhập/ nhập >100 ký tự:   + Dòng n: Lý do Ngưng hoạt động chưa hợp lệ. Vui lòng kiểm tra lại! |

**Thực hiện Ngưng hoạt động:**

* Lấy tất cả các kỳ tương lai liên quan đến điểm bán.
* Đánh dấu trạng thái "Ngưng hoạt động" cho các kỳ tương lai của điểm bán.
* Lưu lý do Ngưng hoạt động vào DB

### Ngưng Theo kỳ

**Button: "Lấy file mẫu" : cho phép export file excel mẫu**

**Templates**:

**Quy trình import:**

trueFlow NHĐ-Theo kỳfalseautotoptrue16221

trueQuy trình kk cơ bản Ngưng hoạt độngfalseautotoptrue7421

**Kiểm tra dữ liệu:**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã kỳ (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập Mã kỳ | * **Mã kỳ**để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Mã kỳ nhập không đúng định dạng / bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã kỳ**không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi   + Dòng n: Mã kỳ không tồn tại / không hoạt động. Vui lòng kiểm tra lại! * **Mã kỳ** tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi   + Dòng n: Mã kỳ trùng với dòng n1 vui lòng kiểm tra lại! * **Mã kỳ** có trạng thái khác Chưa diễn ra   + Dòng n: Mã kỳ không hợp lệ, trạng thái đăng ký hiện tại không phải "Chưa diễn ra". Vui lòng kiểm tra lại! |
| 2 | Lý do Ngưng hoạt động (\*) | Text (100) | * Nhập lý do Ngưng hoạt động, validate 100 ký tự, bắt buộc phải nhập lý do | * Nếu không nhập/ nhập >100 ký tự:   + Dòng n: Lý do Ngưng hoạt động chưa hợp lệ. Vui lòng kiểm tra lại! |

****Thực hiện Ngưng hoạt động:****

* Đánh dấu trạng thái "Ngưng hoạt động" cho các kỳ tương lai có mã kỳ hợp lệ trong template.
* Lưu lý do Ngưng hoạt động vào cơ sở dữ liệu.

Rule [import theo rule chung của portal](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode)

* Hiển thị lỗi theo từng dòng
* hiển thị tất cả các lỗi
* có phân trang hiển thị

Xem giai đoạn

## View

Hiển thị thông tin chung và chi tiết các giai đoạn của kỳ trưng bày.

Chỉ view thông tin, chọn x để đóng popup và không cần confirm

**default Collapse all**

**RedV1.0.1 UI có thay đổi về màu sắc và cách hiển thị, nội dung không thay đổi nên các UI khác trong doc sẽ design và update sau nhé!**

### Tab Kỳ n

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tab Kỳ n | Label | Không |  | **Hiển thị label Kỳ động** |
|  | | | | |
| **Kết quả kỳ** | Datacomlums- Tag | Không |  | **Hiển thị kết quả đánh giá Đạt/ Không đạt**  Kết quả hiển thị realtime ngay lúc mở màn hình  *(Màu của trạng thái kết quả từng kỳ theo thẻ tag*   * Đạt (Hiển thị dạng Tag màu Xanh lá cây/ màu theo porta define tương tự).   + **Hình thức trả thưởng = Theo kỳ**     - **Trạng thái tất cả các giai đoạn = ĐẠT**   + **Hình thức trả thưởng = Theo chương trình → Cần thỏa cả 2 điều kiện**     - **1/ Trạng thái tất cả các giai đoạn = ĐẠT**     - **2/ Doanh số/Số lượng thực đạt >= Mục tiêu** * Không đạt (Hiển thị dạng Tag màu đỏ/ màu theo porta define tương tự). Có một giai đoạn có trạng thái giai đoạn = Không đạt * Chờ duyệt: (Hiển thị tag màu Vàng nhạt/ màu theo porta define tương tự Chưa có duyệt 01 lần chụp nào |
| **Thời gian mua hàng và trưng bày** | Datacomlums-Date | Không |  | **Thời gian mua hàng và trưng bày**: Hiển thị khoảng thời gian cụ thể theo cài đặt CTTB |
| **Số lần duyệt đạt** | Datacomlums | Không |  | **Số lần duyệt đạt**: Số lần hình ảnh được duyệt thành công hiển thị = sum "số lần duyệt đạt" của các giai đoạn  Chưa có duyệt đạt lần nào hiển thị số 0 |
| **Số lần yêu cầu duyệt hình ảnh** | Datacomlums | Không |  | **Số lần yêu cầu duyệt hình ảnh**: hiển thị theo cài đặt CTTB field "**Số lần yêu cầu duyệt hình ảnh**" |
| Chi tiết giai đoạn  Hiển thị danh sách các group Giai đoạn - Tag kết quả (Đạt/ Không đạt) -  (màu theo porta define tương tự)  Hiển thị **default Collapse all**  T**hứ tự hiển thị từ giai đoạn có thời gian gần hiện tại nhất hiển thị trên cùng**  Chọn để expand giai đoạn/ lần ; chọn  để collapse giai đoạn/ lần | | | | |
| Trạng thái giai đoạn | Datacomlums-Tag | Không |  | **Hiển thị kết quả đánh giá Đạt/ Không đạt**  *(Màu của trạng thái kết quả từng giai đoạn - portal define tương tự) hiển thị realtime khi mở màn hình*   * **Chờ duyệt (**Hiển thị dạng Tag màu)**:**   + chưa duyệt 01 lần nào cả;   + Khi Khi trạng thái kỳ = Chưa diễn ra * **Đạt** (Hiển thị dạng Tag màu).   + Hình thức trả thưởng = Theo kỳ/ theo chương trình đều check điều kiện: Số lần quyệt đạt >= Số lần duyệt * **Không đạt** (Hiển thị dạng Tag màu).   + Kỳ đang diễn ra: Số lần quyệt đạt < Số lần duyệt   + Khi trạng thái kỳ = Ngưng hoạt động/ Đã kết thúc =>  - Các giai đoạn chưa chấm sẽ auto chuyển Chờ duyệt sang Không đạt |
| Thời gian | Datacomlums- Date | Không |  | Hiển thị thời gian của giai đoạn theo cài đặt |
| Số lần duyệt đạt | Datacomlums | Không |  | **Số lần duyệt đạt**: Số lần hình ảnh được duyệt thành công hiển thị = sum "số lần duyệt đạt" của các lần duyệt  Hiển thị = 0 khi chưa duyệt 01 lần nào. |
| Số lần duyệt | Datacomlums | Không |  | Hiển thị theo cài đặt CTTB field "**Số lần duyệt"** |
| **Hiển thị danh sách các group lần - Tag kết quả  các lần chụp (Đạt/ Không đạt/Chờ duyệt) khi có hình ảnh chụp từ mobile. Màu portal define tương ứng với mô tả.**   * **Đạt**: Kết quả duyệt Đạt. Tag mày xanh lá cây * **Không đạt:** Kết quả duyệt Không đạt. Tag màu đỏ   + **Không đạt do người duyệt manual đánh giá => Lý do = giá trị người dùng đã nhập**   + **Trường hợp ngày hiện tại > Ngày kết thúc chấm trưng bày của kỳ thì các lần chụp chưa chấm sẽ tự động chuyển từ Chờ duyệt sang trạng thái KHÔNG ĐẠT và lý do = Hết hạn chấm trưng bày** * **Chờ duyệt**: Trạng thái chờ duyệt của lần chụp. Tag màu Vàng nhạt   Thứ tự hiển thị từ  lần chụp có thời gian gần hiện tại nhất hiển thị trên cùng | | | | |
| Số lượng hình ảnh | Datacomlums | Không |  | SUM số lượng hình ảnh đã chụp gửi về từ mobile (theo lần chụp) |
| Số mặt trưng bày | Datacomlums | Không |  | lấy từ @field Số mặt trưng bày ở màn hình CTTB |
| Người chụp | Datacomlums | Không |  | Hiển thị mã - Tên người chụp hình |
| Thời gian chụp | Datacomlums - Datetime | Không |  | Hiển thị thời gian dd-mm-yyyy hh:mm:ss |
| Người duyệt | Datacomlums | Không |  | Hiển thị mã - Tên người duyệt |
| Thời gian duyệt | Datacomlums-Datetime | Không |  | Hiển thị thời gian dd-mm-yyyy hh:mm:ss |
| Hình ảnh | image | Không |  | Hiển thị tối đa 10 hình ảnh từ lần thực hiện, kèm theo số mặt trưng bày tương ứng.  Timestamp đã chụp đính kèm trong hình. Click hiển thị popup xem hình theo rule xem hình hiện tại |
| Lý do không đạt yêu cầu | Datacomlums | Không |  | * Chỉ hiển thị nếu lần duyệt đang xem có kết quả là KHÔNG ĐẠT   + **Không đạt do người duyệt manual đánh giá => Lý do = giá trị người dùng đã nhập**   + **Trường hợp ngày hiện tại > Ngày kết thúc chấm trưng bày của kỳ thì các lần chụp chưa chấm sẽ tự động chuyển sang trạng thái KHÔNG ĐẠT và lý do = Hết hạn chấm trưng bày**     Ví dụ các lý do cụ thể được ghi nhận trong quá trình đánh giá, ví dụ:  **Hình ảnh không rõ nét**.  **Sản phẩm không đủ số lượng**.  **Không đúng bố cục trưng bày yêu cầu**. |

### Điều kiện chấm

### Tab Điều kiện chấm

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tab Điều kiện chấm | Label | Không |  | **Hiển thị label Điều kiện chấm theo dữ liệu đã cài đặt ở Tab hạn mức của CTTB- Lấy theo kỳ tương ứng** |
|  | | | | |
| Thời gian mua hàng và trưng bày | Datacolumns | Không |  | Hiển thị theo Thời gian mua hàng và trưng bày của kỳ tương ứng của CTTB |
| Thời gian chấm trưng bày | Datacolumns | Không |  | Hiển thị theo Thời gian chấm trưng bày của kỳ tương ứng của CTTB |
|  | | | | |
| Điều kiện trưng bày | Label | Không |  |  |
| Số lượng hình ảnh yêu cầu | Datacolumns | Không |  | Hiển thị số lượng hình ảnh yêu cầu theo kỳ đã cài đặt ở tab Hạn mức |
| Số lần yêu cầu duyệt hình ảnh | Datacolumns | Không |  | Hiển thị Số lần yêu cầu duyệt hình ảnh theo kỳ đã cài đặt ở tab Hạn mức |
| Số mặt trưng bày | Datacolumns | Không |  | Hiển thị Số mặt trưng bày theo kỳ đã cài đặt ở tab Hạn mức |
|  | | | | |
| Điều kiện đơn hàng | Label | Không |  | **Lưu ý:**   * **Nhóm sản phẩm 1 có 3 sản phẩm A; B;C** **1/ Khi này tại điểm bán đã đăng ký CTTB-> lên đơn hàng có các sản phẩm A; B; C của nhóm sp1** **2/ Sau đó lên portal remove sản phẩm B ra khỏi nhóm sp 1; chuyển qua nhóm sản phẩm 2** **3/ Thực hiện inactive sản phẩm A** **4/ Inactive nhóm sản phẩm 1**  **Tính giá trị thực đạt của điểm bán:** * **Tính Doanh số/Số lượng của các sản phẩm bị inactive trước ngày inactive.** * **Các sản phẩm bị chuyển qua nhóm sản phẩm khác (Không thuộc cài đặt CTTB)/ bị remove giữa chừng thì tính giá trị thực đạt như thế nào?**    + **Sản phẩm bị remove giữa chừng: tính doanh số và số lượng của sản phẩm đó trước thời điểm remove vẫn được tính vào giá trị thực đạt của điểm bán. Sau thời điểm remove, các sản phẩm này sẽ không được tính vào chương trình trưng bày nữa.**   + **Sản phẩm bị chuyển nhóm: doanh số và số lượng của sản phẩm trước thời điểm chuyển nhóm vẫn được tính vào giá trị thực đạt của điểm bán. Sau thời điểm chuyển nhóm, các sản phẩm này sẽ không được tính vào chương trình trưng bày nữa nếu nhóm mới không thuộc điều kiện đơn hàng trưng bày, nếu nhóm này thuộc đk trưng bày thì tính từ thời điểm được gán nhóm.** * **Inactive nhóm sản phẩm: Chỉ tính doanh số và số lượng đơn hàng của các sản phẩm trên nhóm trước thời điểm inactive.** * RedV1.0.1Nếu điểm bán được duyệt đăng ký => Tính thực đạt, không quan tâm ĐB mua hàng từ NPP nào * Nhóm sản phẩm được tính tính dựa vào nhóm sản phẩm lưu trên đơn hàng |
| Doanh số đơn hàng | Datacolumns | Không |  | * Mục tiêu: Điểm bán đăng ký Số suất (n), thì mục tiêu = Doanh số đơn hàng (CTTB - Tab Hạn mức - Điều kiện đơn hàng - Doanh số đơn hàng) \* Số suất đăng ký (n) * Thực đạt: tổng giá trị đơn hàng đã duyệt, tính các đơn tạo trên app saleman + Portal có chọn nhân viên bán hàng (Không tính đơn trả, không tính khuyến mãi) trong khoảng thời gian    + Ngày bắt đầu mua hàng và trưng bày của kỳ đến ngày cuối cùng của kỳ. Nếu ngày duyệt đăng ký thuộc kỳ thì lấy từ Ngày duyệt đăng ký đến ngày cuối cùng của kỳ. |
| Doanh số nhóm sản phẩm | Datacolumns | Không |  | * Mục tiêu: Điểm bán đăng ký Số suất (n), thì mục tiêu = Doanh số nhóm sản phẩm (CTTB - Tab Hạn mức - Điều kiện đơn hàng - Doanh số nhóm sản phẩm) \* Số suất đăng ký (n) * Thực đạt: tổng doanh số nhóm sản phẩm thỏa điều kiện của đơn hàng đã duyệt, tinh các đơn tạo trên app saleman + Portal có chọn nhân viên bán hàng (Không tính đơn trả, không tính khuyến mãi) trong khoảng thời gian    + Ngày bắt đầu mua hàng và trưng bày của kỳ đến ngày cuối cùng của kỳ. Nếu ngày duyệt đăng ký thuộc kỳ thì lấy từ Ngày duyệt đăng ký đến ngày cuối cùng của kỳ.   + Nhóm sản phẩm lấy theo đơn hàng |
| Số lượng nhóm sản phẩm | Datacolumns | Không |  | * Mục tiêu: Điểm bán đăng ký Số suất (n), thì mục tiêu = Số lượng nhóm sản phẩm (CTTB - Tab Hạn mức - Điều kiện đơn hàng - Số lượng nhóm sản phẩm) \* Số suất đăng ký (n) * Thực đạt: tổng số lượng sản phẩm thuộc nhóm sản phẩm thỏa điều kiện của đơn hàng đã duyệt. tính các đơn tạo trên app saleman + Portal có chọn nhân viên bán hàng (Không tính đơn trả, không tính khuyến mãi) trong khoảng thời gian    + Ngày bắt đầu mua hàng và trưng bày của kỳ đến ngày cuối cùng của kỳ. Nếu ngày duyệt đăng ký thuộc kỳ thì lấy từ Ngày duyệt đăng ký đến ngày cuối cùng của kỳ.   + Nhóm sản phẩm lấy theo đơn hàng |
| CLick icon + với trường hợp Điều kiện = Doanh số nhóm sản phẩm/ Số lượng nhóm sản phẩm để show danh sách Nhóm sản phẩm tương ứng  sau khi chọn  dấu + sẽ chuyển thành - | | | | |
| Mã nhóm sản phẩm | Datacolumns | Không |  | Hiển thị mã nhóm sản phẩm tương ứng khi cài đặt CTTB |
| Tên nhóm sản phẩm | Datacolumns | Không |  | Tên nhóm sản phẩm hiển thị theo mã nhóm sản phẩm |
| Thưởng tiền:    Thưởng quà: | | | | |
| Phần thưởng | Label | Không |  |  |
| Theo kỳ/ Theo chương trình | Label | Không |  | Hình thức trả thưởng tương ứng |
| Tiền thưởng | Datacolumns | Không |  | Loại phần thưởng = Tiền thưởng ; hiển thị giá trị tiền tương ứng theo CTTB |
| Quà tặng |  | Không |  | Loại phần thưởng = Quà tặng=> hiển thị Phân trang danh sách quà tặng |
|  | | | | |
| Mã sản phẩm | Datacolumns | Không |  | Hiển thị mã sản phẩm |
| Tên sản phẩm | Datacolumns | Không |  | Hiển thị tên sản phẩm theo mã sản phẩm |
| Số lượng | Datacolumns | Không |  | Điểm bán đăng ký Số suất (n), thì  Hiển thị số lượng tặng của sản phẩm  = Số lượng sản phẩm (CTTB - Tab Hạn mức - Quà tặng - Số lượng) \* Số suất đăng ký (n) |
|  | | | | |
| Hình mẫu | label | Không |  |  |
| Hinh | Datacolumns | Không |  | Hiển thị hình ảnh đã upload Hình mẫu khi cài đặt CTTB. Click hiển thị popup xem hình theo rule xem hình hiện tại  Hiển thị 4 hình 1 hàng. |
| Mô tả | Datacolumns | Không |  | Hiển thị nội dung hướng dẫn chụp ảnh khi cài đặt CTTB. hình không có mô tả thì không hiển thị mô tả |
| Mỗi group cho phép chọn  : để thu gọn group  : để show detail group | | | | |
|  |  |  |  |  |

# Tab Theo giai đoạn\_Tiến trình trưng bày:

## Màn hình Danh sách Tiến trình trưng bày theo giai đoạn:

Dựa vào Giai đoạn trưng bày theo từng kỳ đã cài đặt của CTTB, hệ thống tự gen các giai đoạn tương ứng, bao nhiêu giai đoạn bấy nhiêu line

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Truy vấn | | | | |
| Tìm kiếm | Textsearch | Có | Không | * **Nhập thông tin tìm kiếm**:    + Người dùng nhập **mã điểm bán** hoặc **tên điểm bán** vào trường tìm kiếm.   + Hệ thống tự động lọc và hiển thị các kết quả phù hợp với thông tin đã nhập.   + Placeholder: Tìm theo mã điểm bán, tên điểm bán * **Tìm kiếm theo từng tiêu chí**:    + **Mã điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần mã điểm bán để tìm kiếm. → Nhập enter     - Hệ thống sẽ hiển thị tất cả các mục có mã điểm bán chứa chuỗi ký tự được nhập.   + **Tên điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần tên điểm bán để tìm kiếm.→ Nhập enter     - Hệ thống sẽ hiển thị các mục có tên điểm bán khớp với chuỗi ký tự nhập vào. * **Kết quả tìm kiếm**: Nhấn "Tìm kiếm"    + Danh sách các giai đoạn của điểm bán đã nhập sẽ hiển thị bên dưới lưới   + Nếu không tìm thấy kết quả khớp, hệ thống sẽ hiển thị *lưới danh sách rỗng* * **Xóa tìm kiếm**:    + Người dùng có thể xóa nội dung trong trường tìm kiếm  và nhấn "Tìm kiếm" để hiển thị lại toàn bộ giai đoạn chụp hình theo bộ lọc mặc định |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tuyến bán hàng RedV1.0.1 | Select Onechoice | Có | Không | * **Mục đích**: Cho phép người dùng lọc giai đoạn bán hàng CTTB dựa trên tuyến bán hàng * Placeholder: Tuyến bán hàng * **Hành vi của trường chọn**:   + **Mở danh sách**: Khi nhấp vào trường "Tuyến bán hàng", danh sách các tuyến bán hàng đang active từ master sẽ xuất hiện.   + **Tìm kiếm và chọn**:     - Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa (theo mã  hoặc tên tuyến bán hàng) để tìm kiếm tuyến bán hàng mong muốn.     - Nhấp vào tên - mã tuyến để chọn.   + **Hiển thị lựa chọn**: Mã - Tên tuyến bán hàng được chọn sẽ hiển thị trong trường.   + **Kết quả lọc**: Nhấn "Tìm kiếm" Tiến trình trưng bày CTTB bên dưới sẽ tự động lọc chỉ hiển thị dữ liệu liên quan đến tuyến được chọn.   + **Xóa lựa chọn**:     - Người dùng có thể bỏ chọn tuyến bằng cách nhấp lại vào mục đã chọn. Nhấn x     - Nếu bỏ chọn toàn bộ, hệ thống sẽ mặc định hiển thị tất cả |
| Chương trình trưng bày | Select Onechoice | Có | Không | * **Mục đích**: Lọc giai đoạn trưng bày CTTB theo chương trình trưng bày cụ thể. * Placeholder: Chương trình trưng bày * **Hành vi của trường chọn**:   + **Mở danh sách**: Hiển thị danh sách các chương trình trưng bày có chỉ lấy các CTTB có trạng thái Đang diễn ra, Ngưng hoạt động, Kết thúc   + **Tìm kiếm và chọn**:     - Cuộn hoặc nhập từ khóa mã hoặc tên CTTB để tìm kiếm chương trình trưng bày mong muốn.     - Chọn chương trình bằng cách nhấp vào mục tương ứng.   + **Hiển thị lựa chọn**: Tên chương trình được chọn sẽ hiển thị trong hộp chọn.   + **Kết quả lọc**: Nhấn "Tìm kiếm". Danh sách bên dưới sẽ tự động hiển thị các giai đoạn trưng bày của điểm bán liên quan đến chương trình đã chọn.   + **Xóa lựa chọn**:     - Bỏ chọn chương trình bằng cách nhấp lại, nhấn x     - Nếu không chọn chương trình nào, danh sách sẽ hiển thị tất cả các chương trình trưng bày. |
| Trạng thái kỳ | Select Onechoice | Có | Không | **Kỳ - theo thời gian mua hàng và trưng bày**  **Mục đích**: Cho phép người dùng lọc giai đoạn trưng bày của kỳ dựa trên trạng thái của kỳ đó.  **Danh sách trạng thái**:   * **Chưa diễn ra**: Trạng thái này áp dụng cho các kỳ chưa bắt đầu, tức là thời gian diễn ra kỳ chưa đến. * **Đang diễn ra**: Trạng thái này áp dụng cho các kỳ hiện tại, tức là kỳ đang diễn ra trong thời gian hiện tại. * **Đã kết thúc**: Trạng thái này áp dụng cho các kỳ đã hoàn thành, tức là kỳ đã kết thúc theo thời gian đã định. * **Ngưng hoạt động**: Trạng thái này áp dụng cho các kỳ không còn hoạt động nữa, do Người dùng thực hiện "Ngưng hoạt động" theo điểm bán hoặc theo kỳ   **Placeholder**: "Trạng thái kỳ"  **Hành vi của trường chọn**:   1. **Mở danh sách**: Khi người dùng nhấp vào trường "Trạng thái kỳ", danh sách các trạng thái kỳ sẽ hiện ra với các lựa chọn sau:     * Chưa diễn ra    * Đang diễn ra    * Đã kết thúc    * Ngưng hoạt động 2. **Tìm kiếm và chọn**:     * Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa để tìm trạng thái kỳ mong muốn.    * Sau khi chọn, trạng thái kỳ sẽ được hiển thị trong trường. 3. **Không bắt buộc chọn trạng thái**:     * Trường này không yêu cầu người dùng phải chọn trạng thái kỳ. Nếu không chọn trạng thái nào, hệ thống sẽ hiểu là người dùng muốn lọc theo **tất cả các trạng thái kỳ**.   **Hiển thị lựa chọn**:   * Trạng thái kỳ đã chọn sẽ hiển thị trong trường dưới dạng văn bản (text).   **Kết quả lọc**:   * Sau khi nhấn "Tìm kiếm", hệ thống sẽ tự động lọc và hiển thị giai đoạn trưng bày dựa trên trạng thái kỳ đã chọn.   **Xóa lựa chọn**:   * Người dùng có thể nhấp vào biểu tượng xóa (x) để bỏ chọn trạng thái kỳ hiện tại. * Nếu người dùng nhấp lại vào trạng thái đã chọn trong danh sách, hệ thống sẽ bỏ chọn trạng thái đó. Khi không có trạng thái kỳ nào được chọn, hệ thống sẽ mặc định hiểu là **tất cả các trạng thái kỳ**.   **Màn hình mặc định**:   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định hiển thị tất cả |
| Kết quả kỳ | Select Onechoice | Có | Không | **Kết quả kỳ (Đạt/Không đạt)**  **Mục đích**: Cho phép người dùng lọc giai đoạn trưng bày của kỳ dựa trên kết quả kỳ, cụ thể là "Đạt" hoặc "Không đạt" hoặc "Chờ duyệt"  **Danh sách kết quả**:   * **Đạt**: Chỉ hiển thị các giai đoạn trưng bày của kỳ có kết quả "Đạt", tức là đã hoàn thành các mục tiêu, yêu cầu hoặc tiêu chí đặt ra cho kỳ đó. * **Không đạt**: Chỉ hiển thị các giai đoạn trưng bày của kỳ có kết quả "Không đạt", tức là kỳ không hoàn thành các mục tiêu hoặc yêu cầu đã đề ra.   **Placeholder**: "Kết quả kỳ" (Mặc định là tất cả kết quả)  **Hành vi của trường chọn**:   1. **Mở danh sách**: Khi người dùng nhấp vào trường "Kết quả kỳ", danh sách các kết quả kỳ sẽ hiện ra với các lựa chọn sau:     * Đạt    * Không đạt    * Chờ duyệt 2. **Tìm kiếm và chọn**:     * Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa để tìm kiếm kết quả kỳ mong muốn.    * Sau khi chọn, kết quả kỳ sẽ được hiển thị trong trường. 3. **Không bắt buộc chọn kết quả kỳ**:     * Trường này không yêu cầu người dùng phải chọn kết quả kỳ. Nếu không chọn kết quả nào, hệ thống sẽ hiểu là người dùng muốn lọc theo **tất cả các kết quả kỳ**.   **Hiển thị lựa chọn**:   * Kết quả kỳ đã chọn sẽ hiển thị trong trường dưới dạng văn bản (text).   **Kết quả lọc**:   * Sau khi nhấn "Tìm kiếm", hệ thống sẽ tự động lọc và hiển thị giai đoạn trưng bày dựa trên kết quả kỳ đã chọn (Đạt hoặc Không đạt).   **Xóa lựa chọn**:   * Người dùng có thể nhấp vào biểu tượng xóa (x) để bỏ chọn kết quả kỳ hiện tại. * Nếu người dùng nhấp lại vào kết quả đã chọn trong danh sách, hệ thống sẽ bỏ chọn kết quả đó. Khi không có kết quả kỳ nào được chọn, hệ thống sẽ mặc định hiểu là **tất cả các kết quả kỳ**.   **Màn hình mặc định**:   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả kết quả. * Khi mở màn hình mặc định hiển thị tất cả |
| Thời gian trưng bày | Date picker | Có | Không | **Chức năng:**  **Placeholder: Thời gian trưng bày**   * Default hiển thị 30 ngày đến thời điểm hiện tại. (Ngày hiện tại  lùi về quá khứ 30 ngày)   + (Ví dụ: Nếu hôm nay là 26/01/2025, mặc định lọc từ 27/12/2024 đến 26/01/2025). * Trường này cho phép người dùng lọc giai đoạn trưng bày chương trình trưng bày theo khoảng thời gian nhất định, dựa trên Thời gian trưng bày * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các danh sách  các tiến trình thuộc khoảng thời gian đã chọn  * Phải chọn cả từ ngày - đến ngày; Không chọn hiểu là mặc định (30 ngày đến hiện tại) * Nhấn Tìm Kiếm --> Mới hiển thị danh sách giai đoạn trưng bày trong khoảng thời gian đã chọn   **Cách sử dụng:**  **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu.  **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc.  **Hiển thị kết quả: Nhấn "Tìm kiếm". hiển thị danh sách giai đoạn trưng bày trong khoảng thời gian đã chọn**  **Xóa:**   * Người dùng có thể nhấp vào biểu tượng xóa hoặc bỏ chọn bằng cách chọn lại. * Sau khi xóa hiển thị placeholder: Ngày bắt đầu - Ngàykết thúc   Ví dụ:     * **Từ ngày (From Date)**: **01/01/2025** * **Đến ngày (To Date)**: **15/01/2025**  | Tên Giai đoạn | Thời gian | Kết quả | | --- | --- | --- | | Giai đoạn 1 | 05/01/2025 - 10/01/2025 | **hiển thị** | | Giai đoạn 2 | 10/01/2025 - 15/01/2025 | **hiển thị** | | Giai đoạn 3 | 28/12/2024 - 05/01/2025 | **hiển thị** | | Giai đoạn 4 | 10/01/2025 - 20/01/2025 | **hiển thị** | | Giai đoạn 5 | 20/12/2024 - 30/12/2024 | **Không hiển thị** | | Giai đoạn 6 | 16/01/2025 - 20/01/2025 | **Không hiển thị** | |
| Hình thức trả thưởng | Select Onechoice | Có | Không | **Placeholder**: "Hình thức trả thưởng" (Default: Không chọn, hiển thị tất cả).  **Hành vi của trường chọn**:   1. **Mở danh sách**:     * Khi nhấp vào trường "Hình thức trả thưởng", danh sách gồm hai lựa chọn sẽ hiển thị:      + **Theo kỳ**      + **Theo chương trình** 2. **Tìm kiếm và chọn**:     * Người dùng có thể:      + Cuộn qua danh sách để tìm lựa chọn.      + Nhập từ khóa ("Theo Kỳ" hoặc "Theo chương trình") để tìm kiếm nhanh. 3. **Hiển thị lựa chọn**:     * Sau khi chọn, hình thức trả thưởng đã chọn sẽ hiển thị trong trường 4. **Kết quả lọc**:     * Người dùng nhấn nút **"Tìm kiếm"**, danh sách giai đoạn trưng bày sẽ được lọc:      + **Theo kỳ**: Chỉ hiển thị các Tiến trình có hình thức trả thưởng là theo kỳ.      + **Theo chương trình**: Chỉ hiển thị các Tiến trình có hình thức trả thưởng là theo chương trình. 5. **Xóa lựa chọn**:     * Người dùng có thể nhấp vào biểu tượng xóa hoặc bỏ chọn bằng cách chọn lại.    * Nếu không chọn bất kỳ loại chương trình nào, danh sách sẽ hiển thị "Placeholder" - hiểu là tất cả các hình thức trả thưởng |
| Trạng thái giai đoạn | Select Onechoice | Có | Không | **Trạng thái giai đoạn**  **Mục đích**: Cho phép người dùng lọc giai đoạn trưng bày của kỳ dựa trên trạng thái giai đoạn, cụ thể là "Đạt" hoặc "Không đạt"/ "Chờ duyệt"  **Danh sách kết quả**:   * **Đạt**: Chỉ hiển thị các giai đoạn trưng bày của kỳ có kết quả "Đạt", tức là đã hoàn thành các mục tiêu, yêu cầu hoặc tiêu chí đặt ra cho kỳ đó. * **Không đạt**: Chỉ hiển thị các giai đoạn trưng bày của kỳ có kết quả "Không đạt", tức là kỳ không hoàn thành các mục tiêu hoặc yêu cầu đã đề ra.   **Placeholder**: "Trạng thái giai đoạn" (Mặc định là tất cả kết quả)  **Hành vi của trường chọn**:   1. **Mở danh sách**: Khi người dùng nhấp vào trường "Trạng thái giai đoạn", danh sách các  trạng thái giai đoạn sẽ hiện ra với các lựa chọn sau:     * Đạt    * Không đạt    * Chờ duyệt 2. **Tìm kiếm và chọn**:     * Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa để tìm kiếm  trạng thái giai đoạn mong muốn.    * Sau khi chọn,  trạng thái giai đoạn sẽ được hiển thị trong trường. 3. **Không bắt buộc chọn Kết quả giai đoạn**:     * Trường này không yêu cầu người dùng phải chọn trạng thái giai đoạn. Nếu không chọn kết quả nào, hệ thống sẽ hiểu là người dùng muốn lọc theo **tất cả các  trạng thái giai đoạn**.   **Hiển thị lựa chọn**:   * trạng thái giai đoạn đã chọn sẽ hiển thị trong trường dưới dạng văn bản (text).   **Kết quả lọc**:   * Sau khi nhấn "Tìm kiếm", hệ thống sẽ tự động lọc và hiển thị giai đoạn trưng bày dựa trên  trạng thái giai đoạn đã chọn (Đạt hoặc Không đạt hoặc chờ duyệt).   **Xóa lựa chọn**:   * Người dùng có thể nhấp vào biểu tượng xóa (x) để bỏ chọn  trạng thái giai đoạn hiện tại. * Nếu người dùng nhấp lại vào kết quả đã chọn trong danh sách, hệ thống sẽ bỏ chọn kết quả đó. Khi không có Kết quả giai đoạn nào được chọn, hệ thống sẽ mặc định hiểu là **tất cả các kết quả**   **Màn hình mặc định**:   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả kết quả. * Khi mở màn hình mặc định hiển thị tất cả |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách giai đoạn trưng bày, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái default của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các giai đoạn trưng bày mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách giai đoạn trưng bày 2. **Danh sách giai đoạn trưng bày làm mới:** Sau khi nhấp, danh sách giai đoạn trưng bày sẽ hiển thị toàn bộ các giai đoạn trưng bày hiện có theo bộ lọc default   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách giai đoạn trưng bày. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách giai đoạn trưng bày. không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách giai đoạn trưng bày theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách giai đoạn trưng bày. 3. **Hiển thị kết quả:** Danh sách giai đoạn trưng bày sẽ cập nhật và hiển thị các giai đoạn trưng bày phù hợp với các tiêu chí đã chọn.     1. Orderby hiển thị CTTB nào có ngày bắt đầu gần nhất hiển thị trên cùng    2. Trong danh sách CTTB ở (a) Orderby hiển thị điểm bán đăng ký được duyệt gần nhất lên trên cùng    3. Trong danh sách điểm bán đăng ký duyệt ở (b) orderby các tiến trình có trạng thái Đang diễn ra lên đầu    4. Trong danh sách các tiến trình có trạng thái = Đang diễn ra, orderby kỳ theo thứ tự       1. Kỳ hiện tại       2. Kỳ quá khứ       3. Kỳ tương lai từ gần hiện tại → tương lai       4. **Ví dụ có 4 kỳ, hiện tại kỳ 2 → thứ tự là: 2→ 1→ 3→ 4**    5. **Trong danh sách các kỳ hiện tại hiển thị giai đoạn orderby giai đoạn hiện tại → giai đoạn quá khứ → giai đoạn tương lai gần. Ví dụ** **có 4 giai đoạn, hiện tại giai đoạn 2 → thứ tự là: 2→ 1→ 3→ 4**    6. **Các kỳ quá khứ thì hiển thị giai đoạn theo thứ tự gần hiện tại nhất trở về trước. Ví dụ có 4 giai đoạn quá khứ; → thứ tự là: 4->3→2→1**    7. **Các kỳ tương lai: thứ tự từ hiện tại đến tương lai. Ví dụ có 4 giai đoạn tương lai → thứ tự là 1->2->3→4**   **---**   1. 1. Các trạng thái còn lại: hiển thị thứ tự lần lượt Chưa diễn ra →  đã diễn ra → ngưng hoạt động,       1. Chưa diễn ra thì thứ tự từ hiện tại đến tương lai. Ví dụ có 4 kỳ tương lai → thứ tự là 1->2->3->4       2. Đã diễn ra hiển thị thứ tự các kỳ gần hiện tại nhất trở về trước. Ví dụ có 4 kỳ quá khứ; → thứ tự là: 4->3->2→1       3. Ngưng hoạt động: Kỳ nào ngưng gần nhất hiển thị trước, ví dụ có 4 kỳ, ngưng hoạt động kỳ 1 vs kỳ 3 => hiển thị thứ tự: 3→ 1    2. **Trong danh sách các kỳ**        1. **Hiện tại hiển thị giai đoạn orderby giai đoạn hiện tại → giai đoạn quá khứ → giai đoạn tương lai gần. Ví dụ** **có 4 giai đoạn, hiện tại giai đoạn 2 → thứ tự là: 2→ 1→ 3→ 4**       2. **Các kỳ quá khứ thì hiển thị giai đoạn theo thứ tự gần hiện tại nhất trở về trước. Ví dụ có 4 giai đoạn quá khứ; → thứ tự là: 4->3→2→1**       3. **Các kỳ tương lai: thứ tự từ hiện tại đến tương lai. Ví dụ có 4 giai đoạn tương lai → thứ tự là 1->2->3→4**   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách giai đoạn trưng bày sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Lưới danh sách** | | | | |
| | **Tên trường** | **Loại dữ liệu** | **Cho phép thao tác** | Mô tả | | --- | --- | --- | --- | | Mã kỳ | Datacolumns have copy | Không | Mã định danh duy nhất cho kỳ  **Ví dụ Mã kỳ minh họa**  Năm 2025; CTTB có 12 kỳ   * Kỳ 1: K251234567801 * Kỳ 2: K251234567802 * Kỳ 3: K251234567803 * Kỳ 4: K251234567805 * .. * Kỳ 12: K251234567813 | | Tên kỳ | Datacolumns | Không | Tên của kỳ | | Ngày bắt đầu kỳ | Datacolumns | Không | Ngày bắt đầu mua hàng và trưng bày của kỳ (dd-mm-yyy) | | Ngày kết thúc kỳ | Datacolumns | Không | Ngày kết thúc mua hàng và trưng bày của kỳ (dd-mm-yyy) | | Trạng thái kỳ | Datacolumns  - Tag | Không | Trạng thái hiện tại của kỳ hiển thị dang tag - màu theo portal define | | Kết quả kỳ | Datacolumns - Tag | Không | **Hiển thị kết quả đánh giá Đạt/ Không đạt/ Chờ duyệt**  Kết quả hiển thị realtime ngay lúc mở màn hình  *(Màu của trạng thái kết quả từng kỳ theo thẻ tag*   * Đạt (Hiển thị dạng Tag màu Xanh lá cây/ màu theo porta define tương tự).   + **Hình thức trả thưởng = Theo kỳ**     - **Trạng thái tất cả các giai đoạn = ĐẠT**   + **Hình thức trả thưởng = Theo chương trình → Cần thỏa cả 2 điều kiện**     - **1/ Trạng thái tất cả các giai đoạn = ĐẠT**     - **2/ Doanh số/Số lượng thực đạt >= Mục tiêu** * Không đạt (Hiển thị dạng Tag màu đỏ/ màu theo porta define tương tự). Có một giai đoạn có trạng thái giai đoạn = Không đạt * Chờ duyệt: (Hiển thị tag màu Vàng nhạt/ màu theo porta define tương tự Chưa có duyệt 01 lần chụp nào | | Tên giai đoạn | Datacolumns | Không | Hiển thị tên giai đoạn | | Ngày bắt đầu GĐ | Datacolumns | Không | Hiển thị ngày bắt đầu giai đoạn | | Ngày kết thúc GĐ | Datacolumns | Không | Hiển thị ngày kết thúc giai đoạn | | Trạng thái giai đoạn | Datacolumns - Tag |  | hiển thị tag màu theo trạng thái giai đoạn - màu theo portal define   * **Chờ duyệt (**Hiển thị dạng Tag màu)**:**   + chưa duyệt 01 lần nào cả;   + Khi Khi trạng thái kỳ = Chưa diễn ra * **Đạt** (Hiển thị dạng Tag màu).   + Hình thức trả thưởng = Theo kỳ/ theo chương trình đều check điều kiện: Số lần quyệt đạt >= Số lần duyệt * **Không đạt** (Hiển thị dạng Tag màu).   + Kỳ đang diễn ra: Số lần quyệt đạt < Số lần duyệt   + Khi trạng thái kỳ = Ngưng hoạt động/ Đã kết thúc =>  - Các giai đoạn chưa chấm sẽ auto chuyển Chờ duyệt sang Không đạt | | Mã điểm bán | Datacolumns have copy | Không | Mã định danh của điểm bán | | Tên điểm bán | Datacolumns | Không | Tên của điểm bán | | Số điện thoại điểm bán | Datacolumns have copy | Không | Số điện thoại liên hệ của điểm bán | | Tỉnh/Thành | Datacolumns | Không | Tên tỉnh hoặc thành phố | | Địa chỉ | Datacolumns | Không | Địa chỉ chi tiết của điểm bán | | Số lần duyệt đạt | Datacolumns | Không | Số lần duyệt đạt của giai đoạn | | Số lần duyệt | Datacolumns | Không | Số lần duyệt (cài đặt theo giai đoạn) | | Số lần yêu cầu duyệt | Datacolumns | Không | Số lần yêu cầu duyệt (Sum của các giai đoạn= @field Số lần yêu cầu duyệt hình ảnh) | | RedV1.0.1Mã tuyến | Datacolumns have copy | Không | Mã tuyến bán hàng | | RedV1.0.1Tên tuyến | Datacolumns | Không | Tên tuyến bán hàng | | Mã chương trình trưng bày | Datacolumns have copy  Hyperlink để xem "Chi tiết chương trình trưng bày" | Không | Mã định danh của chương trình  Click hyperlink: Xem chi tiết trưng bày | | Tên chương trình trưng bày | Datacolumns | Không | Tên chương trình trưng bày | | Trạng thái chương trình | Datacolumns   - Tag | Không | *Màu của thẻ tags trạng thái chương trình trưng bày tương ứng (trạng thái CTTB lấy realtime theo mã CTTB)* | | Hình thức trả thưởng | Datacolumns | Không | Hình thức trả thưởng (Theo kỳ/ Theo chương trình) | | Ngày bắt đầu | Datacolumns | Không | Ngày bắt đầu của chương trình (dd-mm-yyy) | | Ngày kết thúc | Datacolumns | Không | Ngày kết thúc của chương trình (dd-mm-yyy) | | Hạn mức đăng ký | Datacolumns  Hyperlink để xem "Chi tiết đăng ký" | Không | Hạn mức đã đăng ký của điểm bán  Click hyperlink: Chi tiết đăng ký | | Số suất đăng ký | Datacolumns | Không | Số suất đã được đăng ký của điểm bán | | Thời gian đăng ký | Datacolumns | Không | Thời điểm đăng ký chương trình (dd-mm-yyy) | | Thời gian duyệt đăng ký | Datacolumns | Không | Thời điểm duyệt đăng ký (dd-mm-yyy) | | Người cập nhật | Datacolumns | Không | Mã nhân viên người thực hiện cập nhật | | Thời gian cập nhật | Datacolumns | Không | Thời điểm cuối cùng cập nhật dữ liệu (dd-mm-yyy hh:mm:ss) | | | | | |
| Button/Tùy chỉnh | | | | |
| Export | Button | Có | Không | Chức năng  Export danh sách giai đoạn trưng bày của các kỳ |
| Xem chi tiết | Button | Có | Không | Chức năng xem chi tiết và chấm hình ảnh trưng bày theo các lần chụp trong giai đoạn trưng bày |

Export tiến trình theo giai đoạn

## Export danh sách giai đoạn trưng bày

Button cho phép export các giai đoạn trưng bày theo  [rule Export](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO) đã mô tả

Mục đích: Cung cấp chức năng xuất danh sách các Tiến trình Trưng Bày (CTTB) ra file để lưu trữ, phân tích, hoặc chia sẻ. Tính năng này giúp người dùng dễ dàng xử lý dữ liệu ngoài hệ thống.

Click button Export hiển thị popup "Bạn có chắc chắn muốn xuất file excel ?" - default check chọn radio "Danh sách tiến trình trưng bày",

Chọn "Đồng ý" để export danh sách tiến trình

Chọn Hủy, tắt popup và không tải file export về thiết bị

Tenplate:

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Người xuất báo cáo: | FVCUS0914588981 - Thảo BA | | | | | | | | | | | | | | | | | |
| Thời gian xuất báo cáo: | 08/12/2024 - 07:16:08 | | | | | | | | | | | | | | | | | |
| Dữ liệu theo thời gian: | Từ ngày 01/12/2024 đến ngày 21/12/2024 | | | | | | | | | | | | | | | | | |

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Mã kỳ | Datacolumns | Hiển thị mã kỳ |
| Tên kỳ | Datacolumns | Tên kỳ |
| Ngày bắt đầu kỳ | Datacolumns | dd-mm-yyyy |
| Ngày kết thúc kỳ | Datacolumns | dd-mm-yyyy |
| Trạng thái kỳ | Datacolumns | Trạng thái kỳ |
| Kết quả kỳ | Datacolumns | Kết quả kỳ |
| Tên giai đoạn | Datacolumns | Hiển thị Tên giai đoạn (Giai đoạn 1; Giai đoạn 2; ..) |
| Ngày bắt đầu GĐ | Datacolumns | dd-mm-yyyy |
| Ngày kết thúc GĐ | Datacolumns | dd-mm-yyyy |
| Trạng thái giai đoạn | Datacolumns | Hiển thị trạng thái giai đoạn |
| Mã điểm bán | Datacolumns | Mã điểm bán |
| Tên điểm bán | Datacolumns | Tên điểm bán |
| Số điện thoại điểm bán | Datacolumns | Số điện thoại điểm bán |
| Tỉnh/Thành | Datacolumns | Tỉnh/Thành |
| Địa chỉ | Datacolumns | Địa chỉ |
| Số lần duyệt đạt | Datacolumns | Số lần duyệt đạt |
| Số lần duyệt | Datacolumns | Số lần duyệt |
| Số lần yêu cầu duyệt | Datacolumns | Số lần yêu cầu duyệt |
| RedV1.0.1Mã tuyến | Datacolumns | Mã tuyến |
| RedV1.0.1Tên tuyến | Datacolumns | Tên tuyến |
| Mã chương trình trưng bày | Datacolumns | Mã chương trình trưng bày |
| Tên chương trình trưng bày | Datacolumns | Tên chương trình trưng bày |
| Trạng thái chương trình | Datacolumns | Trạng thái chương trình |
| Hình thức trả thưởng | Datacolumns | Hình thức trả thưởng |
| Ngày bắt đầu | Datacolumns | dd-mm-yyyy |
| Ngày kết thúc | Datacolumns | dd-mm-yyyy |
| Hạn mức đăng ký | Datacolumns | Hạn mức đăng ký của CTTB |
| Số suất đăng ký | Datacolumns | Số suất đăng ký CTTB |
| Thời gian đăng ký | Datacolumns | dd-mm-yyyy |
| Thời gian duyệt đăng ký | Datacolumns | dd-mm-yyyy |
| Người cập nhật | Datacolumns | ID người cập nhật gần nhất |
| Thời gian cập nhật | Datacolumns | dd-mm-yyyy  hh:mm:ss cập nhật gần nhất theo giờ hệ thống |

Xem chi tiết giai đoạn

## Xem chi tiết giai đoạn

Mục đích: Xem chi tiết và chấm hình ảnh trưng bày theo các lần chụp trong giai đoạn trưng bày

RedV1.0.1 về màu sắc và cách hiển thị có thay đổi khác so với UI trong doc, nhưng nội dung không thay đổi, UI thì BA sẽ design và bổ sung sau. 

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tab Hình ảnh giai đoạn Default expand lần chụp gần nhất  Hình ảnh GĐ n: tile động theo giai đoạn  Kỳ n: Hiển thị kỳ đang chọn xem chi tiết  Chọn để expand lần chụp ; chọn  để collapse lần | | | | |
| **Trường dữ liệu** | **Kiểu dữ liệu** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| Trạng thái giai đoạn | Datacomlums-Tag | Không |  | **Hiển thị kết quả đánh giá Đạt/ Không đạt**  *(Màu của trạng thái kết quả từng giai đoạn - portal define tương tự) hiển thị realtime khi mở màn hình*   * **Chờ duyệt (**Hiển thị dạng Tag màu)**:**   + chưa duyệt 01 lần nào cả;   + Khi Khi trạng thái kỳ = Chưa diễn ra * **Đạt** (Hiển thị dạng Tag màu).   + Hình thức trả thưởng = Theo kỳ/ theo chương trình đều check điều kiện: Số lần quyệt đạt >= Số lần duyệt * **Không đạt** (Hiển thị dạng Tag màu).   + Kỳ đang diễn ra: Số lần quyệt đạt < Số lần duyệt   + Khi trạng thái kỳ = Ngưng hoạt động/ Đã kết thúc =>  - Các giai đoạn chưa chấm sẽ auto chuyển Chờ duyệt sang Không đạt |
| Thời gian | Datacomlums- Date | Không |  | Hiển thị thời gian của giai đoạn theo cài đặt |
| Số lần duyệt đạt | Datacomlums | Không |  | **Số lần duyệt đạt**: Số lần hình ảnh được duyệt thành công hiển thị = sum "số lần duyệt đạt" của các lần duyệt  Hiển thị = 0 khi chưa duyệt 01 lần nào. |
| Số lần duyệt | Datacomlums | Không |  | Hiển thị theo cài đặt CTTB field "**Số lần duyệt"** |
| Số lần duyệt | Datacomlums | Không |  | Hiển thị theo cài đặt CTTB field "**Số lần duyệt"** |
| **Hiển thị danh sách các group lần - Tag kết quả  các lần chụp (Đạt/ Không đạt/Chờ duyệt) khi có hình ảnh chụp từ mobile. Màu portal define tương ứng với mô tả.**   * **Đạt**: Kết quả duyệt Đạt. Tag mày xanh lá cây * **Không đạt:** Kết quả duyệt Không đạt. Tag màu đỏ   + **Không đạt do người duyệt manual đánh giá => Lý do = giá trị người dùng đã nhập**   + **Trường hợp ngày hiện tại > Ngày kết thúc chấm trưng bày của kỳ thì các lần chụp chưa chấm sẽ tự động chuyển từ Chờ duyệt sang trạng thái KHÔNG ĐẠT và lý do = Hết hạn chấm trưng bày** * **Chờ duyệt**: Trạng thái chờ duyệt của lần chụp. Tag màu Vàng nhạt   Thứ tự hiển thị từ  lần chụp có thời gian gần hiện tại nhất hiển thị trên cùng  Default khi mở màn hình show tất cả hình của Lần chụp gần nhất như UI trên. | | | | |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Số lượng hình ảnh | Datacomlums | Không |  | SUM số lượng hình ảnh đã chụp gửi về từ mobile (theo lần chụp) |
| Số mặt trưng bày | Datacomlums | Không |  | lấy từ @field Số mặt trưng bày ở màn hình CTTB |
| Người chụp | Datacomlums | Không |  | Hiển thị mã - Tên người chụp hình |
| Thời gian chụp | Datacomlums - Datetime | Không |  | Hiển thị thời gian dd-mm-yyyy hh:mm:ss |
| Người duyệt | Datacomlums | Không |  | Hiển thị mã - Tên người duyệt |
| Thời gian duyệt | Datacomlums-Datetime | Không |  | Hiển thị thời gian dd-mm-yyyy hh:mm:ss |
| Hình ảnh | image | Không |  | Hiển thị tối đa 10 hình ảnh từ lần thực hiện, kèm theo số mặt trưng bày tương ứng. Timestamp đã chụp đính kèm trong hình. Click hiển thị popup xem hình theo rule xem hình hiện tại  **Khi giai đoạn thuộc thời gian chấm trưng bày**  Hiển thị button  để chấm trưng bày  Chỉ cho phép chấm 1 lần duy nhất, đã chấm rồi thì hide 2 button này  Chọn Đạt→ hiển thị thông báo: Bạn chắc chắn chấm đạt yêu cầu   * Đồng ý: **Tag kết quả các lần chụp chuyển từ "Chờ duyệt" sang ĐẠT; Field "Số lần duyệt đạt" tăng lên = n+1** * Hủy: tắt thông báo và không thay đổi   Chọn Không đạt   * hiển thị lý do không đạt: text(100) nhập vượt không lấy ký tự vượt, không nhập hiển thị @Field là bắt buộc. * Chọn Lưu => Cập nhật **Tag kết quả các lần chụp chuyển từ "Chờ duyệt" sang KHÔNG ĐẠT; Field "Số lần duyệt đạt" giữ nguyên**   **Khi giai đoạn không thuộc thời gian chấm trưng bày**   * **Trường hợp ngày hiện tại > Ngày kết thúc chấm trưng bày của kỳ thì các lần chụp chưa chấm sẽ tự động chuyển từ Chờ duyệt sang trạng thái KHÔNG ĐẠT và lý do = Hết hạn chấm trưng bày và không hiển thị button ĐẠT- KHÔNG ĐẠT** |
| Lý do không đạt yêu cầu | Datacomlums | Không |  | * Chỉ hiển thị nếu lần duyệt đang xem có kết quả là KHÔNG ĐẠT   + **Không đạt do người duyệt manual đánh giá => Lý do = giá trị người dùng đã nhập**   + **Trường hợp ngày hiện tại > Ngày kết thúc chấm trưng bày của kỳ thì các lần chụp chưa chấm sẽ tự động chuyển sang trạng thái KHÔNG ĐẠT và lý do = Hết hạn chấm trưng bày**     Ví dụ các lý do cụ thể được ghi nhận trong quá trình đánh giá, ví dụ:  **Hình ảnh không rõ nét**.  **Sản phẩm không đủ số lượng**.  **Không đúng bố cục trưng bày yêu cầu**. |

### Tab Điều kiện chấm

Nội dung đã mô tả ở  trên

UI Thưởng tiền

UI Thưởng quà: