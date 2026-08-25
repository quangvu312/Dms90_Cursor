|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-1894 |
| Feature |  |
| Description | Đăng ký tham gia CTTB   * từ app saleman * cho phép import đăng ký danh sách CTTB |
| Document version | RedV1.0.0 Khởi tạo  RedV1.0.1 Điều chỉnh  13/02/25   * Duyệt all trên 1 page * Upload file chỉ hiển thị logofile ở view hình   RedV1.0.2  17/02/25   * Đã duyệt và từ chối cùng 1 lúc => msg: "Điểm bán đã duyệt/ từ chối. Vui lòng kiểm tra lại" * Điểm bán lưu theo tuyến bán hàng, bỏ thông tin nhân viên thay bằng mã tuyến - tên tuyến   6/3/25: Bổ sung Dòng thông báo lỗi import có @ID   ---   **RedV2.0.0**  **Note cho phase 2:**   * Đăng ký lại (app/import) sẽ ghi nhận 2 record, hiển thị cả 2 * Check toàn bộ điều kiện trước duyệt thành công, nếu có lỗi => trả lỗi về tương ứng và không cho duyệt thành công   13/5/25:  Danh sách đăng ký hiển thị thêm cột Người đăng ký  Import: **Lưu thông tin người import = người đăng ký (mã - tên)**  **RedV2.0.1 CTTB loại chương trình = Merchant thì template import không cần check tuyến bán hàng**  11/07/2025: Hiển thị thông tin người upload  Với mỗi hình ảnh upload (upload từ portal) hiển thị đầy đủ:   * dd-mm-yyyy hh:mm:ss * Mã nhân viên - Tên nhân viên đăng nhập và upload   **RedV2.1.0: Thêm Mã NPP, tên NPP vào danh sách đăng ký trưng bày**  **RedV2.2.0 : Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.**  **: Kiểm tra danh sách import Mã điểm bán- Mã điểm bán chỉ import thành công khi thỏa điều kiện của CTTB** |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Trạng thái đăng ký

1/ Sale man thực hiện đăng ký trên app tại task vụ Chương trình trưng bày

2/ Người dùng có quyền được Import danh sách đăng ký CTTB trên portal

3/ Xem danh sách đăng ký CTTB

# Danh sách đăng ký

Màn hình:

Thay mã nhân viên - tên nhân viên = mã tuyến - tên tuyến;

RedV2.0.0

Update UI danh sách bổ sung cột "Người đăng ký"

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Truy vấn | | | | |
| Tìm kiếm | Textsearch | Có | Không | * **Nhập thông tin tìm kiếm**:    + Người dùng nhập **mã điểm bán** hoặc **tên điểm bán** vào trường tìm kiếm. Nhấn "Tìm kiếm"   + Hệ thống tự động lọc và hiển thị các kết quả phù hợp với thông tin đã nhập.   + Placeholder và tooltip: Tìm theo mã điểm bán, tên điểm bán * **Tìm kiếm theo từng tiêu chí**:    + **Mã điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần mã điểm bán để tìm kiếm. → Nhập enter     - Hệ thống sẽ hiển thị tất cả các mục có mã điểm bán chứa chuỗi ký tự được nhập.   + **Tên điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần tên điểm bán để tìm kiếm.→ Nhập enter     - Hệ thống sẽ hiển thị các mục có tên điểm bán khớp với chuỗi ký tự nhập vào. * **Kết quả tìm kiếm**: Nhấn "Tìm kiếm"    + Danh sách đăng ký CTTB bên dưới sẽ tự động cập nhật để chỉ hiển thị các mục phù hợp với thông tin mã hoặc tên điểm bán đã nhập.   + Nếu không tìm thấy kết quả khớp, hệ thống sẽ hiển thị l*ưới danh sách rỗng* * **Xóa tìm kiếm**:    + Người dùng có thể xóa nội dung trong trường tìm kiếm để hiển thị lại toàn bộ danh sách đăng ký mà không áp dụng bộ lọc. |
| Nhà phân phối  **RedV2.1.0** | Select Onechoice | Có | Không | * **Mục đích**: Cho phép người dùng lọc danh sách đăng ký CTTB dựa trên thông tin NPP * Placeholder: Nhà phân phối * **Hành vi của trường chọn**:   + **Mở danh sách**: Khi nhấp vào trường "Nhà phân phối", danh sách các Nhà phân phối đang active theo vùng/khu vực dữ liệu được phân quyền của người dùng từ master sẽ xuất hiện.   + **Tìm kiếm và chọn**:     - Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa (nhập tên hoặc mã NPP) để tìm kiếm NPP mong muốn.     - Nhấp vào mã - Tên tuyến NPP hiển thị để chọn.   + **Hiển thị lựa chọn**: mã - tên NPP được chọn sẽ hiển thị trong trường.   + **Kết quả lọc**:     - Nhấn "Tìm kiếm" Danh sách đăng ký CTTB bên dưới sẽ tự động lọc chỉ hiển thị dữ liệu liên quan đến NPP được chọn     - NPP được xác định dựa trên NPP trong tuyến bán hàng đăng ký CTTB   + **Xóa lựa chọn**:     - Người dùng có thể nhấn x để xóa NPP đã chọn     - Nếu bỏ chọn toàn bộ, hệ thống sẽ mặc định hiển thị tất cả các NPP đang active trên hệ thống |
| RedV1.0.2 Tuyến bán hàng | Select Onechoice | Có | Không | * **Mục đích**: Cho phép người dùng lọc danh sách đăng ký CTTB dựa trên tên hoặc mã tuyến bán hàng. * Placeholder: Tuyến bán hàng * **Hành vi của trường chọn**:   + **Mở danh sách**: Khi nhấp vào trường "Tuyến bán hàng", danh sách các Tuyến bán hàng đang active từ master sẽ xuất hiện.   + **Tìm kiếm và chọn**:     - Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa (nhập tên hoặc mã tuyến) để tìm kiếm tuyến mong muốn.     - Nhấp vào mã - Tên tuyến bán hàng hiển thị để chọn.   + **Hiển thị lựa chọn**: mã - tên tuyến bán hàng được chọn sẽ hiển thị trong trường.   + **Kết quả lọc**: Nhấn "Tìm kiếm" Danh sách đăng ký CTTB bên dưới sẽ tự động lọc chỉ hiển thị dữ liệu liên quan đến Tuyến bán hàng được chọn.   + **Xóa lựa chọn**:     - Người dùng có thể nhấn x để xóa tuyến đã chọn     - Nếu bỏ chọn toàn bộ, hệ thống sẽ mặc định hiển thị tất cả các tuyến bán hàng đang active trên hệ thống |
| Chương trình trưng bày | Select Onechoice | Có | Không | * **Mục đích**: Lọc danh sách đăng ký CTTB theo chương trình trưng bày cụ thể. * Placeholder: Chương trình trưng bày * **Hành vi của trường chọn**:   + **Mở danh sách**: Hiển thị danh sách các chương trình trưng bày hiện có trạng thái đang diễn ra, ngưng hoạt động, kết thúc   + **Tìm kiếm và chọn**:     - Cuộn hoặc nhập từ khóa mã hoặc tên CTTB để tìm kiếm chương trình trưng bày mong muốn.     - Chọn chương trình bằng cách nhấp vào mục tương ứng.   + **Hiển thị lựa chọn**: Tên Chương trình được chọn sẽ hiển thị trong hộp chọn.   + **Kết quả lọc**: Nhấn "Tìm kiếm". Danh sách bên dưới sẽ tự động hiển thị các đăng ký thuộc chương trình đã chọn.   + **Xóa lựa chọn**:     - Bỏ chọn chương trình bằng cách chọn x để xóa     - Nếu không chọn chương trình nào, danh sách sẽ hiển thị tất cả các chương trình trưng bày. |
| Trạng thái | Select Onechoice | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc danh sách đăng ký chương trình trưng bày dựa trên trạng thái đã chọn. * RedV1.0.1Placeholder: Trạng thái * Default bộ lọc Tất cả các trạng thái * Người dùng có thể tìm kiếm và chọn một trạng thái từ danh sách đăng ký có sẵn để tinh chỉnh kết quả hiển thị trong danh sách. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:  * + Chờ duyệt   + Đã duyệt   + Ngưng hoạt động:   + Từ chối duyệt   + Hết hạn duyệt * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. (chỉ chọn một trạng thái)  * + Field này không yêu cầu người dùng phải chọn, có thể bỏ trống, bỏ trống hiểu là chọn tất cả các trạng thái * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng text * **Kết quả lọc:** Nhấn "Tìm kiếm". Lưới danh sách CTTB hiển thị trạng thái tương ứng * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định hiển thị tất cả |
| Thời gian đăng ký | Date picker | Có | Không | **Chức năng:**  **Placeholder: Thời gian đăng ký**   * Default hiển thị 7 ngày đến thời điểm hiện tại. * Trường này cho phép người dùng lọc danh sách đăng ký chương trình trưng bày theo khoảng thời gian nhất định, dựa trên Thời gian đăng ký * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các danh sách điểm bán đăng ký trong khoảng thời gian đó.  * Phải chọn cả từ ngày - đến ngày; Không chọn hiểu là mặc định * Nhấn Tìm Kiếm --> Mới hiển thị danh sách điểm bán đăng ký CTTB trong khoảng thời gian đã chọn   **Cách sử dụng:**  **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu.  **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc.  **Hiển thị kết quả: Nhấn "Tìm kiếm"** danh sách đăng ký chương trình trưng bày sẽ tự động được lọc và chỉ hiển thị những điểm bán có Thời gian đăng ký trong khoảng thời gian đã chọn.  chọn x để xóa ngày đã nhập, xóa ngày hiển thị placeholder: Ngày bắt đầu - Ngày kết thúc |
| Thời gian duyệt | Select Onechoice | Có | Không | **Chức năng:**  **Placeholder: Thời gian duyệt**   * Trường này cho phép người dùng lọc danh sách đăng ký chương trình trưng bày theo khoảng thời gian nhất định, dựa trên Ngày bắt đầu đăng ký đến ngày Kết thúc đăng ký. * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các chương trình trưng bày diễn ra trong khoảng thời gian đó.  * Phải chọn cả từ ngày - đến ngày; Không chọn hiểu là không chọn ngày nào. * Nhấn Tìm Kiếm --> Mới hiển thị danh sách điểm bán đăng ký đã duyệt có Thời gian duyệt trong khoảng thời gian đã chọn   **Cách sử dụng:**  **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu.  **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc.  **Hiển thị kết quả:** danh sách đăng ký chương trình trưng bày sẽ tự động được lọc và chỉ hiển thị những điểm bán có trạng thái "Đã duyệt" và có thời gian duyệt trong trong khoảng thời gian đã chọn.  chọn x để xóa ngày đã nhập, xóa ngày hiển thị placeholder: Ngày bắt đầu - Ngày kết thúc |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Đăng ký CTTB, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các Đăng ký CTTB mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Đăng ký CTTB 2. **Danh sách Đăng ký CTTB làm mới:** Sau khi nhấp, danh sách Đăng ký CTTB sẽ hiển thị toàn bộ các Đăng ký CTTB hiện có theo bộ lọc mặc định.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Đăng ký CTTB. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách Đăng ký CTTB. không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Đăng ký CTTB theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Đăng ký CTTB. 3. **Hiển thị kết quả:** Danh sách Đăng ký CTTB sẽ cập nhật và hiển thị các Đăng ký CTTB phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Đăng ký CTTB sẽ không thay đổi khi nhấn nút "Tìm kiếm". |

**Lưới danh sách đăng ký**

| Tên trường | Kiểu dữ liệu | **Mô tả** |
| --- | --- | --- |
| **Check box** | Chckbox | Cho phép check một/ nhiều/ check all CTTB có trạng thái "Chờ duyệt" để duyệt CTTB |
| **Mã điểm bán** | Datacomlumn have copy | Hiển thị Mã điểm bán |
| **Tên điểm bán** | Datacomlumn | Hiển thị tên điểm bán theo mã |
| **Số điện thoại điểm bán** | Datacomlumn have copy | Hiển thị SDT điểm bán |
| Địa chỉ | Datacomlumn | Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ. |
| **Tỉnh/ thành** | Datacomlumn | Hiển thị thông tin Tỉnh thành của điểm bán |
| Trạng thái đăng ký | Datacomlumn - Tag | Hiển thị trạng thái đăng ký tham gia CTTB của điểm bán, bao gồm: - Chờ duyệt: điểm bán đăng ký nhưng chưa được Admin duyệt - Đã duyệt: điểm bán đăng ký và đã được Admin duyệt tham gia, Với CTTB có cấu hình "Tự động duyệt đăng ký = ON" thì khi User thực hiện đăng ký/ import CTTB có trạng thái default= "Đã duyệt" - Từ chối duyệt:   * điểm bán đăng ký và Admin đã thao tác "Từ chối" tham gia - lý do từ chối hiển thị theo giá trị user nhập khi từ chối * Khi CTTB đang diễn ra thực hiện Ngưng hoạt đông => Các đăng ký chưa duyệt auto chuyển sang Từ chối duyệt - lý do từ chối mặc định = **"Ngưng hoạt động chương trình trưng bày"**   - Hết hạn duyệt: Thời gian hiện tại > thời gian kết thúc đăng ký - Ngưng hoạt động: điểm bán được duyệt và đã bị Ngưng hoạt động tất cả các kỳ ở màn hình Tiến trình trưng bày (Trạng thái này không manual thực hiện ngưng hoạt động ở màn hình đăng ký) - lý do ngưng hoạt động hiển thị theo lý do đã nhập ở ngưng tiến trình |
| **RedV1.0.2Mã tuyến** | Datacomlumn have copy | - Hiển thị thông tin tuyến bán hàng của điểm bán đăng ký |
| **RedV1.0.2Tên tuyến** | Datacomlumn | Hiển thị tên tuyến bán hàng dựa vào mã tuyến |
| **RedV2.1.0**  Mã NPP | Datacolumn | Mã NPP trên tuyến bán hàng |
| **RedV2.1.0**  Tên NPP | Datacolumn | Tên NPP trên tuyến bán hàng |
| **Mã CTTB** | Datacomlumn have copy | Hiển thị mã CTTB mà điểm bán đăng ký. |
| **Tên CTTB** | Datacomlumn | Hiển thị tên CTTB theo mã CTTB |
| **Ngày bắt đầu** | Datacomlumn | Ngày bắt đầu đăng ký chương trình trưng bày dd-mm-yyyy |
| **Ngày kết thúc** | Datacomlumn | Ngày kết thúc đăng ký chương trình trưng bày dd-mm-yyyy |
| **Hạn mức đăng ký** | Datacomlumn | Hiển thị hạn mức mà điểm bán đã đăng ký  ~~**Trường hợp đăng ký lại Hiển thị record gần nhất**~~  **RedV2.0.0** phase 2: Đăng ký lại (app/import) sẽ ghi nhận 2 record, hiển thị cả 2 |
| **Số suất đăng ký** | Datacomlumn | Hiển thị số suất mà điểm bán đã đăng ký  ~~**Trường hợp đăng ký lại Hiển thị record gần nhất**~~  **RedV2.0.0** phase 2: Đăng ký lại (app/import) sẽ ghi nhận 2 record, hiển thị cả 2 |
| **Thời gian đăng ký** | Datacomlumn | Hiển thị thời gian mà điểm bán đã thao tác đăng ký dd-mm-yyyy  ~~**Trường hợp đăng ký lại Hiển thị record gần nhất**~~  **RedV2.0.0** phase 2: Đăng ký lại (app/import) sẽ ghi nhận 2 record, hiển thị cả 2 |
| **Hợp đồng đăng ký** | image | Xem nội dung cập nhật trường hợp tích hợp CTTB với merchant theo link sau: [HO] CTTB tích hợp Merchant |
| **Hình ảnh đăng ký** |  | Hiển thị hình ảnh đăng ký của user từ app / upload ở chức năng cập nhật đăng ký  Hiển thị và xem hình theo rule hiện tại của portal |
| **RedV2.0.0**  **Người đăng ký** | Datacomlumn | Đăng ký CTTB - Danh sách đăng ký thêm cột Người đăng ký:   * Trường hợp đăng ký từ app merchant: Hiển thị rỗng * Đăng ký app saleman: Hiển thị Mã - Họ và tên người đăng ký * Import đăng ký: Hiển thị  Hiển thị Mã - Họ và tên người Import đăng ký   + lưu ý Tại màn hình tài khoản người dùng có nếu người import có gắn Vai trò tài khoản thị trường + tài khoản thị trường thì mới hiển thị trên app để duyệt đăng ký |
| **Thời gian duyệt đăng ký** | Datacomlumn | - Hiển thị thời gian mà điểm bán được admin thao tác duyệt đăng ký dd-mm-yyyy - Nếu điểm bán bị thao tác từ chối đăng ký thì không lấy và hiển thị trong mốc thời gian này  - Nếu điểm bán đăng ký vào Chương trình (có cấu hình auto Duyệt) thì thời gian Duyệt đăng ký = Thời gian đăng ký |
| **Lý do** | Datacomlumn | - Hiển thị lý do từ chối đã nhập - Nếu đăng ký nhiều lần và bị từ chối nhiều lần thì hiển thị lý do gần nhất |
| **Người cập nhật** | Datacomlumn | - Hiển thị thông tin đối tượng nếu Đăng ký được thay đổi sang các trạng thái khác - Mặc định khi đăng ký mới sẽ lưu người cập nhật = đối tượng đăng ký |
| **Ngày cập nhật** | Datacomlumn | - Hiển thị thời gian cập nhật dd-mm-yyy hh:mm:ss |
| **Tùy chỉnh** | Button | Bao gồm các thao tác   * Chỉnh sửa: Chỉ hiện thị khi trạng thái đăng ký = Chờ duyệt/ Đã duyệt/ Ngưng hoạt động/Từ chối duyệt/ Hết hạn duyệt * Phê duyệt: Chỉ hiện thị khi trạng thái đăng ký = "Chờ duyệt" |
| **Cập nhật đăng ký**  **Cập nhật đăng ký** | Button Chỉnh sửa: Cho phép xem thông tin đăng ký (chỉ xem) tại điểm bán và cập nhật  hình ảnh "hợp đồng đăng ký"  **Cập nhật đăng ký tham gia: Header màn hình**  **Tab "Thông tin tham gia":**   * Chỉ xem, không cho phép chỉnh sửa bất kỳ trường thông tin nào ở tab "Thông tin tham gia", Khi click vào button chỉnh sửa trên danh sách đăng ký hiển thị màn hình như sau:   RedV1.0.2 UI bỏ mã nhân viên- tên nhân viên - sđt nhân viên => thay mã tuyến - tên tuyến     | Tên trường | Mô tả | | --- | --- | | **Cập nhật đăng ký tham gia** | * Hiển thị tên tiêu đề màn hình | | **Thông tin tham gia** | * Hiển thị tên tiêu đề tab | | Mã CTTB | Hiển thị mã CTTB | | Tên CTTB | Hiển thị tên CTTB | | Trạng thái CTTB | Hiển thị trạng thái CTTB | | Thời gian chương trình | Hiển thị thời gian chương trình Ngày bắt đầu → Ngày kết thúc (dd-mm-yyyy) | | Thời gian đăng ký | Hiển thị thời gian đăng ký Ngày bắt đầu → Ngày kết thúc (dd-mm-yyyy) | | Mã điểm bán | Hiển thị mã điểm bán đăng ký cttb | | Tên điểm bán | Hiển thị tên điểm bán theo mã điểm bán | | Số điện thoại điểm bán | Hiển thị sdt điểm bán | | RedV1.0.2Mã tuyến | Hiển thị mã tuyến của điểm bán đăng ký CTTB | | RedV1.0.2Tên tuyến | Hiển thị tên tuyến theo mã tuyến | | Ngày đăng ký | Hiển thị ngày đăng ký CTTB dd-mm-yyyy | | Hạn mức đăng ký | Hiển thị hạn mức đăng ký | | Số suất đăng ký | Hiển thị số suất đăng ký | | Trạng thái đăng ký | Hiện thị trạng thái đăng ký | | Loại chương trình | Hiện thị loại chương trình CTTB | | Hợp đồng | Hiển thị hyperlink pdf hợp đồng đăng ký (với Loại chương trình = merchant - Hợp đồng điện tử) | | Đồng ý | Button "Đồng ý" hiển thị khi có add thêm từ 01 hình ảnh tham gia. Thông báo "Cập nhật thành công" và lưu hình ảnh tham gia đã thêm vào DB.   Trường hợp chỉ mở ra xem chưa có thay đổi bất kỳ dữ liệu nào disable button "Đồng ý" |   **Tab "Hình ảnh tham gia":**   * Cho phép add thêm hợp đồng đã ký/ thêm hình ảnh tham gia chương trình:     | Tên trường | Mô tả | | --- | --- | | **Cập nhật đăng ký tham gia** | * Hiển thị tên tiêu đề màn hình | | **Hình ảnh tham gia** | * Hiển thị tên tiêu đề tab | | **Button "Thêm file"** | * Cho phép chọn và thêm hình ảnh từ máy tính   **Số lượng hình ảnh tối đa = 10  (thẻ tag hiển thị)**   * Chọn button "Thêm file" cho phép upload   + Các file hình ảnh: PNG, JPEG, JPG,   + Các file tập tin: PDF, Word. * Mỗi file kích thước tối đa 10mb hiển thị trong khung cố định (5cm x 5cm - Hoặc các bạn dev đề xuất phù hợp là được) * Cho phép upload tối đa 10 file (Đã chụp từ app + upload thêm) * Khi upload các file dạng PDF, Word (hợp đồng) hiển thị      * Cho phép xóa các file vừa thêm mới chưa lưu     11/07/2025: Bổ sung   * các file đã lưu   + Kiểm tra trạng thái đăng ký = Chờ duyệt: cho phép xóa hình ảnh/ file đã upload. Được xóa cả hình ảnh/file đã lưu trước đó   + Kiểm tra trạng thái đăng ký Khác Chờ duyệt: chỉ cho view, không cho xóa | | **List danh sách hình ảnh** | * Hiển thị danh sách hình ảnh đã thêm * Cho phép scroll để xem đầy đủ toàn bộ hình ảnh đã thêm * **Hiển thị thời gian up hình:**    + **dd-mm-yyyy hh:mm:ss**   + **Mã nhân viên - Tên nhân viên**   + **Hiển thị logo + tên file trên khung hình để view** * Hiển thị logo file trên khung hình để view và hiển thị tên các file dạng .PDF, .Word (hợp đồng) dưới hình logo     **Khi sau lưu,**  **Click vào hình => xem hình**  **Click vào logo word/ pdf thì xem file đã đính kèm (Bỏ qua action show logo)**   * Có thể xem và tải về các file đã upload | |  | * Validate số lượng hình ảnh tối đa cho phép lưu trữ  =  10 * Chỉ được phép  Xóa hình ảnh/file  đối với các **Đăng ký** (trạng thái Chờ duyệt). * Chỉ được phép Thêm mới  ~~hoặc Xóa~~    hình ảnh/file  đối với các **Đăng ký** (trạng thái Chờ duyệt/ Đã duyệt ~~/ Từ chối duyệt)~~ **(1)** * Chỉ được phép Thêm mới ~~hoặc Xóa~~  hình ảnh/file đối với các đăng ký thuộc **chương trình trưng bày** (trạng thái = Đang diễn ra) **(2)** * Những đăng ký nào không thỏa **mục (1) và (2)** sẽ disable icon button | | Đồng ý | Button "Đồng ý" hiển thị khi có thêm từ 01 hình ảnh tham gia, chỉ mở ra để view thì disable button đồng ý. Thông báo "Cập nhật thành công" và lưu hình ảnh tham gia đã thêm vào DB. Và vẫn ở màn hình để xem file  Trường hợp chỉ mở ra xem chưa có thay đổi bất kỳ dữ liệu nào disable button "Đồng ý" |     => Chọn "x" tắt popup và không có thay đổi dữ liệu nào mới của đăng ký CTTB đang chọn |
|  | Button Phê duyệt  Duyệt   * Đối với Đăng ký có trạng thái = "Chờ duyệt" : Hiển thị 2 thao tác        * + - **Duyệt**: Duyệt và chuyển trạng thái đăng ký của điểm bán sang Đã duyệt đăng ký  * + - **Từ chối:** Onclick nhập lý do từ chối (bắt buộc nhập): validate sl ký tự <=100.   => Chọn Cập nhật: Cập nhật dữ liệu và hiển thị thông báo   * Khi đó CTTB đã duyệt có trạng thái Đã duyệt * CTT từ chối có trạng thái Từ chối duyệt   => Chọn "Đóng" tắt popup và không thay đổi trạng thái của đăng ký CTTB đang chọn  RedV1.0.2  Cùng lúc thực hiện duyệt + từ chối =>mesg: "Điểm bán đã duyệt/ từ chối. Vui lòng kiểm tra lại!" |

# **Button trên màn hình danh sách CTTB:**

## **Xét duyệt:**

**Duyệt**

1/ Disable button "Xét duyệt" nếu chưa chọn bất kỳ dữ liệu đăng ký nào

2/ Khi check chọn từ 1 đăng ký CTTB (có trạng thái Chờ duyệt) trở lên sẽ hiển thị button "Xét duyệt" để thực hiện  

* Đối với những danh sách đăng ký có trạng thái = Chờ duyệt: Sau khi thao tác chọn nhiều Đăng ký có trạng thái Chờ duyệt sẽ cho phép Xét duyệt hoặc Từ chối  những Đăng ký đó
  + Nếu lựa chọn là "Từ chối" và nhập lý do thì lý do đó sẽ appy trạng thái "Từ chối duyệt" cho tất cả
  + Nếu chọn Duyệt thì sẽ apply trạng thái "đã duyệt" cho tất cả
* Đối với những danh sách đăng ký không áp dụng bộ lọc nào, tức là = "Tất cả" : Sau khi thao tác chọn nhiều sẽ chỉ hiển thị dấu checked ở các đăng ký có trạng thái "Chờ duyệt" trên page đang view. Cho phép click button "Xét duyệt" để Xét duyệt hoặc Từ chối những Đăng ký có trạng thái = "Chờ duyệt". RedV1.0.1 Chỉ duyệt trên 1 pgae
  + Nếu lựa chọn là "Từ chối" và nhập lý do thì lý do đó sẽ appy trạng thái "Từ chối duyệt" cho tất cả
  + Nếu chọn Duyệt thì sẽ apply trạng thái "đã duyệt" cho tất cả
* Những trạng thái # Chờ duyệt không cho check chọn

**RedV1.0.3** phase 2: check toàn bộ điều kiện trước duyệt thành công, nếu có lỗi => trả lỗi về tương ứng và không cho duyệt thành công

## Import danh sách đăng ký chương trình trưng bày

**Chỉ cho phép import thành công khi**

* **CTTB có field "Hình thức đăng ký = 1. Đăng ký trên Web/ 3. Đăng ký trên Web và App"**
* **Có Ngày hiện tại thuộc thời gian đăng ký CTTB**
* **Chưa có đăng ký nào/ đã có đăng ký và trạng thái = "Chờ duyệt"**

**Bước 1: Chuẩn bị file import**

* **Tải xuống file template:**

  + Người dùng tải file template mẫu từ hệ thống, có dạng tên:  
    `Import_RegisterDisplayProgram_DDMMYYYYhhmmss.xlsx`.
* **Điền dữ liệu vào template:**

  + Điền thông tin cần thiết vào các cột theo đúng định dạng yêu cầu.

**Bước 2: Mở giao diện Import**

* Truy cập vào giao diện quản lý Danh sách đăng ký chương trình trưng bày.
* Click nút “Import”.

**Bước 3:** **Chọn file import**

* Trong cửa sổ **Import danh sách đăng ký**, thực hiện:

  + Click **“Chọn file”** để tải lên file template đã điền dữ liệu.
  + Định dạng file phải là `.xlsx`.
* Sau khi chọn file, hệ thống sẽ tự động kiểm tra nội dung file.

**Bước 4: Các case Import và các dữ liệu cần kiểm tra**

### Quy trình Import:

trueUntitled Diagramfalse1500autotoptrue168314

trueflow basicfalseautotop48444522true741.5

* Click button Import excel → Hiển thị popup

* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc Kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống: Hiển thị thông báo: "Bạn chắc chắn thao tác này không?"

* + Đồng ý: Chạy tiến trình xử lý, kiểm tra dữ liệu inport từ file
  + Hủy: Đóng cảnh báo và giữ nguyên trạng thái import

**Button: "Lấy file mẫu" : cho phép export file excel mẫu**

* Nhập thông tin và Import vào hệ thống.

**Templates**: 

  

12/03/2025- Phase 1: template IMPORT  bỏ đi cái header trên đầu file và name sheet (tên sheet để "data") -> này theo core hiện tại chưa đáp ứng 

### Kiểm tra Case trạng thái import -

RedV1.0.2  **Lưu thông tin người import = người đăng ký (mã - tên)**

Các case import 

**RedV1.0.26/3/25: Bổ sung Dòng thông báo lỗi import có @ID**

#### **CTTB có Field "Tự dộng duyệt tham gia" = ON**

* Nếu chọn On: Mặc định khi Điểm bán đăng ký tham gia trên portal hoặc app, phiếu đăng ký sẽ tự động được Duyệt tham gia, trạng thái = Đã duyệt

|  | Trạng thái đăng ký của khách hàng | Trạng thái import = 0  *Chờ duyệt* | Trạng thái import = 1  *Đã duyệt* | Trạng thái import = 2  *Từ chối duyệt* |
| --- | --- | --- | --- | --- |
| 1 | Trạng thái đăng ký của khách hàng = **Chưa đăng ký** | Chuyển đăng ký của khách hàng sang trạng thái **Đã** **duyệt**  **Ngày đăng ký được cập nhật = Ngày import**  **Ngày duyệt đăng ký = Ngày import**  **Lưu thông tin người import = người đăng ký (mã - tên)** | Chuyển đăng ký của khách hàng sang trạng thái **Đã** **duyệt**  **Ngày đăng ký được cập nhật = Ngày import**  **Ngày duyệt đăng ký = Ngày import**  **Lưu thông tin người import = người đăng ký (mã - tên)** | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán chưa có đăng ký CTTB. Vui lòng kiểm tra lại!" |
| 2 | Trạng thái đăng ký của khách hàng = **Chờ duyệt**  ****(Case này sẽ không cảy ra vì CTTB auto duyệt tham gia rồi → có thể bỏ qua)**** | **Update số suất và hạn mức đăng ký**  Chuyển đăng ký của khách hàng sang trạng thái **Đã** **duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** | **Update số suất và hạn mức đăng ký**  →  Chuyển đăng ký của khách hàng sang trạng thái **Đã duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** | Chuyển đăng ký của khách hàng sang trạng thái **Từ chối duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** |
| 3 | Trạng thái đăng ký của khách hàng = **Đã duyệt** | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" |
| 4 | Trạng thái đăng ký của khách hàng = **Ngưng hoạt động** | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" |
| 5 | Trạng thái đăng ký của khách hàng = **Từ chối duyệt**  *Vẫn còn khung thời gian đăng ký*    *****(Case này sẽ không cảy ra vì CTTB auto duyệt tham gia rồi → có thể bỏ qua)***** | Ghi nhận đăng ký lại giống như đăng ký mới  Chuyển đăng ký của khách hàng sang trạng thái **Đã****duyệt**  (Case đăng ký lại trong khung đăng ký)  **Ngày đăng ký = Ngày import**  **Ngày duyệt đăng ký = Ngày import** | Ghi nhận đăng ký lại giống như đăng ký mới  Chuyển đăng ký của khách hàng sang trạng thái **Đã duyệt**  (Case đăng ký lại trong khung đăng ký)  **Ngày đăng ký = Ngày import**  **Ngày duyệt đăng ký = Ngày import** | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" |
| 6 | Trạng thái đăng ký của khách hàng = **Từ chối duyệt**  *Đã hết khung thời gian đăng ký*    *****(Case này sẽ không cảy ra vì CTTB auto duyệt tham gia rồi → có thể bỏ qua)***** | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" |

#### **CTTB có Field "Tự dộng duyệt tham gia" = OFF**

|  | Trạng thái đăng ký của khách hàng | Trạng thái import = 0  *Chờ duyệt* | Trạng thái import = 1  *Đã duyệt* | Trạng thái import = 2  *Từ chối duyệt* |
| --- | --- | --- | --- | --- |
| 1 | Trạng thái đăng ký của khách hàng = **Chưa đăng ký** | Chuyển đăng ký của khách hàng sang trạng thái **Chờ duyệt**  **Ngày đăng ký được cập nhật = Ngày import**  **Ngày duyệt đăng ký  rỗng**  **Lưu thông tin người import = người đăng ký (mã - tên)** | Chuyển đăng ký của khách hàng sang trạng thái **Đã** **duyệt**  **Ngày đăng ký được cập nhật = Ngày import**  **Ngày duyệt đăng ký = Ngày import**  **Lưu thông tin người import = người đăng ký (mã - tên)** | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán chưa có đăng ký CTTB. Vui lòng kiểm tra lại!" |
| 2 | Trạng thái đăng ký của khách hàng = **Chờ duyệt** | **Update số suất và hạn mức đăng ký**  **Giữ nguyên trạng thái đăng ký Chờ duyệt của khách hàng**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký giữ nguyên** | **Update số suất và hạn mức đăng ký**  →  Chuyển đăng ký của khách hàng sang trạng thái **Đã duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** | Chuyển đăng ký của khách hàng sang trạng thái **Từ chối duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** |
| 3 | Trạng thái đăng ký của khách hàng = **Đã duyệt** | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" |
| 4 | Trạng thái đăng ký của khách hàng = **Ngưng hoạt động** | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" |
| 5 | Trạng thái đăng ký của khách hàng = **Từ chối duyệt**  *Vẫn còn khung thời gian đăng ký* | Ghi nhận đăng ký lại giống như đăng ký mới  Chuyển đăng ký của khách hàng sang trạng thái **Chờ duyệt**  (Case đăng ký lại trong khung đăng ký)  **Ngày đăng ký = Ngày import**  **Ngày duyệt đăng ký rỗng** | Ghi nhận đăng ký lại giống như đăng ký mới  Chuyển đăng ký của khách hàng sang trạng thái **Đã duyệt**  (Case đăng ký lại trong khung đăng ký)  **Ngày đăng ký = Ngày import**  **Ngày duyệt đăng ký = Ngày import** | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" |
| 6 | Trạng thái đăng ký của khách hàng = **Từ chối duyệt đăng ký**  *Đã hết khung thời gian đăng ký* | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @Mã diểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" |

**Kiểm tra dữ liệu**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã điểm bán (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập Mã điểm bán đăng ký CTTB | * Mã điểm bán để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Điểm bán @mã điểm bán nhập không đúng định dạng. Vui lòng kiểm tra lại!   + Dòng n: Mã điểm bán bị bỏ trống. Vui lòng kiểm tra lại! * Mã điểm bán không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi   + Dòng n: Điểm bán @mã điểm bán không tồn tại. Vui lòng kiểm tra lại!   + Dòng n: Điểm bán @mã điểm bán không hoạt động. Vui lòng kiểm tra lại! * Mã điểm bán tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi    + Dòng n: Dòng n1,n2,n3 có @mã điểm bán trùng. Vui lòng kiểm tra lại!   RedV2.2.0  : Kiểm tra danh sách import Mã điểm bán:    | Mã điểm bán chỉ import thành công khi thỏa điều kiện của CTTB (Hệ thống so sánh tất cả các điểm bán của các tuyến bán hàng thuộc Vùng/ khu vực ; thuộc NPP; Thuộc điểm bán; thuộc các giá trị thuộc tính của CTTB) như sau:   * ĐK = Vùng/ Khu vực: Hệ thống so sánh Vùng/Khu vực của tuyến bán hàng của NPP với danh sách Vùng/Khu vực mà CTTB áp dụng. -> tất cả các điểm bán của các tuyến bán hàng thuộc Vùng/ khu vực này sẽ import thành công  * ĐK = Điểm bán: Chỉ những điểm bán được chọn mới import thành công  * ĐK = Nhà phân phối: Chỉ những điểm bán thuộc NPP mới import thành công  * ĐK = Loại điểm bán/Hạng điểm bán/ Vị trí điểm bán/ Kênh bán hàng/ thuộc tính điểm bán: Dựa vào master điểm bán, các điểm bán thỏa điều kiện mới import thành công  * Trường hợp cài đặt nhiều điều kiện: MIX (**Logic AND)**tất cả các điều kiện, điểm bán nào thỏa tất cả điều kiện thì mới import thành công | | --- |  * Kiểm tra điểm bán KHÔNG thỏa điều kiện: Hiển thị thông báo lỗi    + Dòng n: Điểm bán @mã điểm bán chưa thỏa điều kiện của chương trình. Vui lòng kiểm tra lại! |
| 2 | RedV1.0.2Mã tuyến (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập mã tuyến đăng ký cho điểm bán | * **Nếu không nhập:**   + Để trống: Trống 1 line => bỏ qua   + Chỉ Mã tuyến để trống: Hiển thị thông báo lỗi: "Dòng n: Mã tuyến bị bỏ trống, vui lòng kiểm tra lại!" * **Nếu có nhập:** Kiểm tra lần lượt các điều kiện:   + **Định dạng dữ liệu.** → Nhập không đúng:"Dòng n: Mã tuyến @Mã tuyến nhập không đúng định dạng. Vui lòng kiểm tra lại!"   + **Tính tồn tại và trạng thái hoạt động**.  * + - **Mã tuyến phải tồn tại và đang hoạt động trong hệ thống.**       * Dòng n: Mã tuyến @Mã tuyến không tồn tại. Vui lòng kiểm tra lại!"       * Dòng n: Mã tuyến @Mã tuyến không hoạt động. Vui lòng kiểm tra lại!"   + Trường hợp đã tồn tại đăng ký của điểm bán theo tuyến, nhưng check mã tuyến import KHÁC mã tuyến đã tồn tại trên hệ thống theo điểm bán. hiển thị: Dòng n: Mã tuyến @Mã tuyến chưa hợp lệ!   + RedV2.2.0: Trường hợp Mã điểm bán không thuộc tuyến bán hàng:     - "Dòng n: Điểm bán **@mã điểm bán** không thuộc tuyến bán hàng **@mã tuyến**. Vui lòng kiểm tra lại!"   + Kiểm tra **Tuyến phải thuộc phân quyền người dùng (vùng/ NPP chăm sóc)**     - "Dòng n: Dữ liệu không thuộc phân quyền của người dùng. Vui lòng kiểm tra lại!" |
| 3 | Mã CTTB (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt (Trừ dấu "."; "-"; "\_") | * Nhập mã CTTB mà điểm bán đăng ký | * Mã CTTB:   + Hiển thị thông báo lỗi "Dòng n: Mã CTTB @Mã không tồn tại. Vui lòng kiểm tra lại!"   + Hiển thị thông báo lỗi "Dòng n: Mã CTTB bị để trống. Vui lòng kiểm tra lại!"   + Hiển thị thông báo lỗi "Dòng n: Mã CTTB @Mã nhập không đúng định dạng. Vui lòng kiểm tra lại!" * CTTB phải đang ở trạng thái:   + Sắp diễn ra hoặc Đang diễn ra hoặc hết hạn duyệt (có ngày hiện tại LỚN HƠN thời gian đăng ký)     - Hiển thị thông báo lỗi "Dòng n: Mã CTTB @Mã không nằm trong thời gian có thể đăng ký. Vui lòng kiểm tra lại!"   + CTTB có trạng thái = ngưng hoạt động;  = Kết thúc     - Hiển thị thông báo lỗi "Dòng n: Mã CTTB @Mã không hoạt động. Vui lòng kiểm tra lại!"   + CTTB có trạng thái = Khởi tạo     - Dòng n: CTTB @Mã CTTB đang có trạng thái khởi tạo. Vui lòng kiểm tra lại!   + RedV2.2.0: Khi import data (mã điểm bán- mã tuyến- mã CTTB) có trên hệ thống & CTTB không thuộc phân quyền Vùng/ Khu vực; Không thuộc TKTT; không thuộc NPP chăm sóc, nếu không thuộc hiển thị thông báo:     - "Dòng n: Dữ liệu không thuộc phân quyền của người dùng. Vui lòng kiểm tra lại!" |
| 4 | Hạn mức (\*) | Nhập số >0 | * Nhập hạn mức đăng ký là số >0 | * Hạn mức để trống hoặc nhập không đúng định dạng.   + Hiển thị thông báo lỗi "Dòng n: Hạn mức @Tên hạn mức .... Vui lòng kiểm tra lại!"     - nhập không đúng định dạng       * nhập không đúng định dạng     - để trống       * "Dòng n: Hạn mức đang để trống. Vui lòng kiểm tra lại! * Hạn mức phải có trong hạn mức CTTB, nếu không:   + Hiển thị thông báo lỗi "Dòng n: Hạn mức @Tên hạn mức không nằm trong hạn mức của CTTB đã nhập. Vui lòng kiểm tra lại!" |
| 5 | Số suất (\*) | Chỉ nhập số nguyên dương > 0 | * Nhập số suất đăng ký | * Số suất để trống hoặc nhập không đúng định dạng.   + Hiển thị thông báo lỗi "Dòng n: Số suất .... Vui lòng kiểm tra lại!"   + nhập không đúng định dạng     - nhập không đúng định dạng   + để trống     - để trống * Số suất nhập trong file phải <= số suất tối đa được đăng ký của CTTB. Nếu không   + Hiển thị thông báo lỗi "Dòng n: Số suất lớn hơn số suất tối đa của CTTB đã nhập. Vui lòng kiểm tra lại!" |
| 6 | Trạng thái (\*) | Chỉ nhập các số 0, 1, 2 | Trạng thái đăng ký CTTB của khách hàng  *0: Chờ duyệt*  *1: Đã duyệt*  *2: Từ chối duyệt* | * Trạng thái để trống hoặc nhập không đúng định dạng.   + Hiển thị thông báo lỗi "Dòng n: Trạng thái ... . Vui lòng kiểm tra lại!"     - nhập không đúng định dạng       * nhập không đúng định dạng     - để trống       * để trống * Kiểm tra trạng thái đăng ký theo bảng [các case import](https://kb.finviet.com.vn/pages/viewpage.action?pageId=47448921#id-%C4%90%C4%83ngk%C3%BDCTTB(EnhanceT10)-Cac_Case_Import). |
| 7 | Lý do | text (100) | Bắt buộc khi Trạng thái đăng ký = 2  Valid khi Trạng thái đăng ký = 2 | * Lý do để trống hoặc nhập không đúng định dạng khi Trạng thái đăng ký = 2   + Hiển thị thông báo lỗi "Dòng n: Lý do nhập không đúng định dạng hoặc để trống. Vui lòng kiểm tra lại!" |
| 8 | Lưu thông tin |  |  | * Khi đã kiểm tra thỏa các điều kiện:   + Lưu thông tin đăng ký CTTB cho khách hàng, Ghi nhận đăng ký lại giống như đăng ký mới (lưu đăng ký lại là 1 record mới)   + **Lưu thông tin người import = người đăng ký (mã - tên)**   + Thông báo: Import thành công   + Ghi nhận thời gian đăng ký CTTB theo mô tả trong các case import |

**Trường hợp import thành công:**

→ Nhấn X → Tắt popup và hiển thị danh sách Điểm bán đã import thành công

**Trường hợp import lỗi:**

Hiển thị các dòng lỗi để user điều chỉnh: => các form Import trên web sẽ có rule chung như đã mô tả =>

* hiển thị lỗi theo từng dòng lỗi
* hiển thị tất cả các lỗi
* có phân trang hiển thị lỗi

**RedV2.0.1 CTTB loại chương trình = Merchant thì template import không cần check tuyến bán hàng. Mã tuyến có thể để trống, hoặc có nhập nhưng không lưu, không check tuyến**

**Trường hợp đăng ký lại lưu history, hiển thị record gần nhất**

**-------------**

# Export

  

Mục đích:  Click button để xuất dữ liệu; Hệ thống sẽ thực hiện export dữ liệu danh sách đăng ký CTTB file excel, template được mô tả bên dưới, template chỉ xuất danh sách điểm bán đăng ký CTTB của tất cả nhân viên hoặc theo bộ lọc trong khoảng thời gian được chọn

báo cáo  sẽ hiển thị theo dạng:

fieldname: Export\_RegisterDisplayProgram\_DDMMYYYYhhmmss.xlsx

Templates export:

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| **Mã điểm bán** | Datacolumns | Mã định danh duy nhất của từng điểm bán. |
| **Tên điểm bán** | Datacolumns | Tên đầy đủ của điểm bán |
| **Số điện thoại điểm bán** | Datacolumns | Số điện thoại liên hệ của điểm bán. |
| Địa chỉ | Datacolumn | Địa chỉ của điểm bán (Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.) |
| **Tỉnh/Thành phố** | Datacolumns | Vị trí địa lý - tỉnh /thành phố nơi điểm bán hoạt động. |
| **Trạng thái đăng ký** | Datacolumns | Trạng thái đăng ký của điểm bán (**Chờ duyệt, Từ chối duyệt, Ngừng hoạt động, Hết hạn duyệt**). |
| **RedV1.0.2Mã tuyến** | Datacolumns | Mã tuyến bán hàng |
| **RedV1.0.2Tên tuyến** | Datacolumns | Tên tuyến bán hàng |
| **RedV2.1.0**  Mã NPP | Datacolumn | Mã NPP trên tuyến bán hàng |
| **RedV2.1.0**  Tên NPP | Datacolumn | Tên NPP trên tuyến bán hàng |
| **Mã chương trình trưng bày** | Datacolumns | Mã định danh của chương trình trưng bày (CTTB) mà điểm bán đã đăng ký. |
| **Tên chương trình trưng bày** | Datacolumns | Tên đầy đủ của chương trình CTTB. |
| **Ngày bắt đầu ĐK** | Datacolumns | Ngày bắt đầu đăng ký CTTB. |
| **Ngày kết thúc ĐK** | Datacolumns | Ngày kết thúc đăng ký CTTB. |
| **Hạn mức đăng ký** | Datacolumns | Hạn mức được áp dụng cho từng điểm bán (ví dụ: Hạn mức 1, Hạn mức 2, v.v.). |
| **Số suất đăng ký** | Datacolumns | Số lượng suất đăng ký chương trình CTTB tại điểm bán (ví dụ: 20) |
| **Thời gian đăng ký** | Datacolumns | Thời gian cụ thể khi điểm bán thực hiện đăng ký dd-mm-yyyy |
| **Hợp đồng đăng ký** | Datacolumn hyperlink | ~~Hiển thị hyperlink để xem hợp đồng đính kèm~~  hiển thị nhiều link nếu có nhiều hình ~~(**Hoặc** 1 link mà có nhiều hình)- click vào link để xem hình~~  Nếu có nhiều link thì hiện text, nếu có 1 link thì hiện hyperlink |
| **Lý do** | Datacolumns | Lý do trạng thái từ chối duyệt |
| **Thời gian duyệt đăng ký** | Datacolumns | Thời gian cụ thể khi điểm bán được duyệt/import gần nhất dd-mm-yyyy |
| **Người cập nhật** | Datacolumns | Tên hoặc mã của người thực hiện cập nhật gần nhất của hệ thống |
| **Ngày cập nhật** | DateTime | Thời điểm cuối cùng trạng thái được cập nhật. dd-mm-yyyy hh:mm:ss của hệ thống |