|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Đăng ký tham gia CTTL   * Cho phép đăng ký CTTL trên **App saleman** khi CTTL có Hình thức đăng ký = **App** hoặc = cả app và web * Cho phép **import** đăng ký danh sách CTTL khi CTTL có Hình thức đăng ký = **Web** hoặc = cả app và web |
| Document version | RedV1.0.0 Khởi tạo  RedV1.0.1  14/03/2025:   * Phase 1: template IMPORT  bỏ đi cái header trên đầu file và name sheet (tên sheet để "data") -> này theo core hiện tại chưa đáp ứng   RedV1.0.2  1/ Bổ sung trạng thái Khởi tạo CTTL => ko cho import thành công.   RedV1.0.3 **CTTL loại chương trình = Merchant thì template import không cần check tuyến bán hàng. Mã tuyến có thể để trống, hoặc có nhập nhưng không lưu, không check tuyến**  ---  BlueV2.0.0 Update ngày 14/07/2025   * Cho phép upload file word/ pdf vào đăng ký của điểm bán * Danh sách đăng ký bổ sung thêm field "Hợp đồng đăng ký" * Màn hình xem thông tin chi tiết đăng ký → Hiển thị thêm field Loại chương trình và Hợp đồng   **RedV2.1.0: Thêm Mã NPP, tên NPP vào danh sách đăng ký trưng bày**  **RedV2.2.0 : Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.**   * **Kiểm tra danh sách import Mã điểm bán thỏa điều kiện của CTTL** * **Bổ sung phân quyền dữ liệu** |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Trạng thái đăng ký

1/ Sale man thực hiện đăng ký trên app tại task vụ Chương trình tích lũy

2/ Người dùng có quyền được Import danh sách đăng ký CTTL trên portal

3/ Xem danh sách đăng ký CTTL

Thống nhất Rule chung của màn hình:

1/ inline bắt buộc lấy theo forrmart chung: " @field là bắt buộc!"

2/ Placeholder Input/Select: Nhập vào [Tên]. / Chọn [Tên] 

Những lỗi chính tả/ câu text chưa khớp 100% so với Rule chung, vui lòng  lấy theo rule chung   [Lưu ý chung cho toàn bộ Portal](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO)

# Danh sách đăng ký

Màn hình:

Check chọn  duyệt đăng ký

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Truy vấn | | | | |
| Tìm kiếm | Textsearch | Có | Không | * **Nhập thông tin tìm kiếm**:    + Người dùng nhập **mã điểm bán** hoặc **tên điểm bán** vào trường tìm kiếm. Nhấn "Tìm kiếm"   + Hệ thống tự động lọc và hiển thị các kết quả phù hợp với thông tin đã nhập.   + Placeholder và tooltip: Tìm theo mã điểm bán, tên điểm bán * **Tìm kiếm theo từng tiêu chí**:    + **Mã điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần mã điểm bán để tìm kiếm. → Nhập enter     - Hệ thống sẽ hiển thị tất cả các mục có mã điểm bán chứa chuỗi ký tự được nhập.   + **Tên điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần tên điểm bán để tìm kiếm.→ Nhập enter     - Hệ thống sẽ hiển thị các mục có tên điểm bán khớp với chuỗi ký tự nhập vào. * **Kết quả tìm kiếm**: Nhấn "Tìm kiếm"    + Danh sách đăng ký CTTL bên dưới sẽ tự động cập nhật để chỉ hiển thị các mục phù hợp với thông tin mã hoặc tên điểm bán đã nhập.   + Nếu không tìm thấy kết quả khớp, hệ thống sẽ hiển thị l*ưới danh sách rỗng* * **Xóa tìm kiếm**:    + Người dùng có thể xóa nội dung trong trường tìm kiếm để hiển thị lại toàn bộ danh sách đăng ký mà không áp dụng bộ lọc. |
| Nhà phân phối  **RedV2.1.0** | Select Onechoice | Có | Không | * **Mục đích**: Cho phép người dùng lọc danh sách đăng ký CTTL dựa trên thông tin NPP * Placeholder: Nhà phân phối * **Hành vi của trường chọn**:   + **Mở danh sách**: Khi nhấp vào trường "Nhà phân phối", danh sách các Nhà phân phối đang active theo vùng/khu vực dữ liệu được phân quyền của người dùng từ master sẽ xuất hiện.   + **Tìm kiếm và chọn**:     - Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa (nhập tên hoặc mã NPP) để tìm kiếm NPP mong muốn.     - Nhấp vào mã - Tên tuyến NPP hiển thị để chọn.   + **Hiển thị lựa chọn**: mã - tên NPP được chọn sẽ hiển thị trong trường.   + **Kết quả lọc**:     - Nhấn "Tìm kiếm" Danh sách đăng ký CTTL bên dưới sẽ tự động lọc chỉ hiển thị dữ liệu liên quan đến NPP được chọn     - NPP được xác định dựa trên NPP trong tuyến bán hàng đăng ký CTTL   + **Xóa lựa chọn**:     - Người dùng có thể nhấn x để xóa NPP đã chọn     - Nếu bỏ chọn toàn bộ, hệ thống sẽ mặc định hiển thị tất cả các NPP đang active trên hệ thống |
| Tuyến bán hàng | Select Onechoice | Có | Không | * **Mục đích**: Cho phép người dùng lọc danh sách đăng ký CTTL dựa trên tên hoặc mã tuyến bán hàng. * Placeholder: Tuyến bán hàng * **Hành vi của trường chọn**:   + **Mở danh sách**: Khi nhấp vào trường "Tuyến bán hàng", danh sách các Tuyến bán hàng đang active từ master sẽ xuất hiện.   + **Tìm kiếm và chọn**:     - Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa (nhập tên hoặc mã tuyến) để tìm kiếm tuyến mong muốn.     - Nhấp vào Mã - Tên tuyến bán hàng hiển thị để chọn.   + **Hiển thị lựa chọn**: Mã - tên tuyến bán hàng được chọn sẽ hiển thị trong trường.   + **Kết quả lọc**: Nhấn "Tìm kiếm" Danh sách đăng ký CTTL bên dưới sẽ tự động lọc chỉ hiển thị dữ liệu liên quan đến Tuyến bán hàng được chọn.   + **Xóa lựa chọn**:     - Người dùng có thể bỏ chọn Tuyến bằng cách nhấn x để xóa tuyến đã chọn     - Nếu bỏ chọn toàn bộ, hệ thống sẽ mặc định hiển thị tất cả các tuyến bán hàng đang active trên hệ thống |
| Chương trình tích lũy | Select Onechoice | Có | Không | * **Mục đích**: Lọc danh sách đăng ký CTTL theo chương trình tích lũy cụ thể. * Placeholder: Chương trình tích lũy * **Hành vi của trường chọn**:   + **Mở danh sách**: Hiển thị danh sách các chương trình tích lũy hiện có trạng thái đang diễn ra, ngưng hoạt động, kết thúc   + **Tìm kiếm và chọn**:     - Cuộn hoặc nhập từ khóa mã hoặc tên CTTL để tìm kiếm chương trình tích lũy mong muốn.     - Chọn chương trình bằng cách nhấp vào mục tương ứng.   + **Hiển thị lựa chọn**: Tên Chương trình được chọn sẽ hiển thị trong hộp chọn.   + **Kết quả lọc**: Nhấn "Tìm kiếm". Danh sách bên dưới sẽ tự động hiển thị các đăng ký thuộc chương trình đã chọn.   + **Xóa lựa chọn**:     - Bỏ chọn chương trình bằng cách chọn x để xóa     - Nếu không chọn chương trình nào, danh sách sẽ hiển thị tất cả các chương trình tích lũy. |
| Trạng thái đăng ký | Select Onechoice | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc danh sách đăng ký chương trình tích lũy dựa trên trạng thái đã chọn. * Placeholder: Chọn trạng thái * Default bộ lọc Tất cả các trạng thái * Người dùng có thể tìm kiếm và chọn một trạng thái từ danh sách đăng ký có sẵn để tinh chỉnh kết quả hiển thị trong danh sách. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:  * + Chờ duyệt   + Đã duyệt   + Ngưng hoạt động:   + Từ chối duyệt   + Hết hạn duyệt * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. (chỉ chọn một trạng thái)  * + Field này không yêu cầu người dùng phải chọn, có thể bỏ trống, bỏ trống hiểu là chọn tất cả các trạng thái * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng text * **Kết quả lọc:** Nhấn "Tìm kiếm". Lưới danh sách CTTL hiển thị trạng thái tương ứng * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định hiển thị tất cả |
| Thời gian đăng ký | Date picker | Có | Không | **Chức năng:**  **Placeholder: Thời gian đăng ký**   * Default hiển thị 30 ngày đến thời điểm hiện tại. * Trường này cho phép người dùng lọc danh sách đăng ký chương trình tích lũy theo khoảng thời gian nhất định, dựa trên Thời gian đăng ký * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các danh sách điểm bán đăng ký trong khoảng thời gian đó.  * Phải chọn cả từ ngày - đến ngày; Không chọn hiểu là mặc định * Nhấn Tìm Kiếm --> Mới hiển thị danh sách điểm bán đăng ký CTTL trong khoảng thời gian đã chọn   **Cách sử dụng:**  **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu.  **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc.  **Hiển thị kết quả: Nhấn "Tìm kiếm"** danh sách đăng ký chương trình tích lũy sẽ tự động được lọc và chỉ hiển thị những điểm bán có Thời gian đăng ký trong khoảng thời gian đã chọn.  chọn x để xóa ngày đã nhập, xóa ngày hiển thị placeholder: Ngày bắt đầu - Ngày kết thúc |
| Thời gian duyệt đăng ký | Select Onechoice | Có | Không | **Chức năng:**  **Placeholder: Thời gian duyệt đăng ký**   * Trường này cho phép người dùng lọc danh sách đăng ký chương trình tích lũy theo khoảng thời gian nhất định, dựa trên Ngày bắt đầu đăng ký đến ngày Kết thúc đăng ký. * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các chương trình tích lũy diễn ra trong khoảng thời gian đó.  * Phải chọn cả từ ngày - đến ngày; Không chọn hiểu là không chọn ngày nào. * Nhấn Tìm Kiếm --> Mới hiển thị danh sách điểm bán đăng ký đã duyệt có Thời gian duyệt trong khoảng thời gian đã chọn   **Cách sử dụng:**  **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu.  **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc.  **Hiển thị kết quả:** danh sách đăng ký chương trình tích lũy sẽ tự động được lọc và chỉ hiển thị những điểm bán có trạng thái "Đã duyệt" và có thời gian duyệt trong trong khoảng thời gian đã chọn.  chọn x để xóa ngày đã nhập, xóa ngày hiển thị placeholder: Ngày bắt đầu - Ngày kết thúc |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Đăng ký CTTL, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các Đăng ký CTTL mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Đăng ký CTTL 2. **Danh sách Đăng ký CTTL làm mới:** Sau khi nhấp, danh sách Đăng ký CTTL sẽ hiển thị toàn bộ các Đăng ký CTTL hiện có theo bộ lọc mặc định.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Đăng ký CTTL. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách Đăng ký CTTL. không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Đăng ký CTTL theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Đăng ký CTTL. 3. **Hiển thị kết quả:** Danh sách Đăng ký CTTL sẽ cập nhật và hiển thị các Đăng ký CTTL có cập nhật gần hiện tại nhất   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Đăng ký CTTL sẽ không thay đổi khi nhấn nút "Tìm kiếm". |

**Lưới danh sách đăng ký**

| Tên trường | Kiểu dữ liệu | **Mô tả** |
| --- | --- | --- |
| **Check box** | Chckbox | Cho phép check một/ nhiều/ check all CTTL có trạng thái "Chờ duyệt" để duyệt CTTL |
| **Mã điểm bán** | Datacomlumn have copy | Hiển thị Mã điểm bán |
| **Tên điểm bán** | Datacomlumn | Hiển thị tên điểm bán theo mã |
| **Số điện thoại điểm bán** | Datacomlumn have copy | Hiển thị SDT điểm bán |
| **Tỉnh/ thành phố** | Datacomlumn | Hiển thị thông tin Tỉnh thành của điểm bán |
| **Địa chỉ** | Datacomlumn | Hiển thị đỉa chỉ điểm bán (Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.) |
| **Trạng thái đăng ký** | Datacomlumn - Tag | Hiển thị trạng thái đăng ký tham gia CTTL của điểm bán, bao gồm: - Chờ duyệt: điểm bán đăng ký nhưng chưa được Admin duyệt - Đã duyệt: điểm bán đăng ký và đã được Admin duyệt tham gia, Với CTTL có cấu hình "Tự động duyệt đăng ký = ON" thì khi User thực hiện đăng ký/ import CTTL có trạng thái default= "Đã duyệt" - Từ chối duyệt:   * điểm bán đăng ký và Admin đã thao tác "Từ chối" tham gia - **lý do từ chối hiển thị theo giá trị user nhập khi từ chối** * Khi CTTL đang diễn ra thực hiện Ngưng hoạt đông => Các đăng ký chưa duyệt auto chuyển sang Từ chối duyệt - lý do từ chối mặc định = **"Ngưng hoạt động chương trình tích lũy"**   - Hết hạn duyệt: Thời gian hiện tại > thời gian kết thúc đăng ký - Ngưng hoạt động: điểm bán được duyệt và đã bị Ngưng hoạt động tất cả các kỳ ở màn hình Tiến trình tích lũy (Trạng thái này không manual thực hiện ngưng hoạt động ở màn hình đăng ký) - lý do ngưng hoạt động đăng ký hiển thị **mặc định = "Ngưng hoạt động tiến trình tích lũy"** |
| **Mã tuyến** | Datacomlumn have copy | - Hiển thị thông tin tuyến bán hàng của điểm bán đăng ký |
| **Tên tuyến** | Datacomlumn | Hiển thị tên tuyến bán hàng dựa vào mã tuyến |
| **RedV2.1.0**  Mã NPP | Datacolumn | Mã NPP trên tuyến bán hàng |
| **RedV2.1.0**  Tên NPP | Datacolumn | Tên NPP trên tuyến bán hàng |
| **Mã CTTL** | Datacomlumn have copy | Hiển thị mã CTTL mà điểm bán đăng ký. |
| **Tên CTTL** | Datacomlumn | Hiển thị tên CTTL theo mã CTTL |
| **Ngày bắt đầu đăng ký** | Datacomlumn | Ngày bắt đầu đăng ký chương trình tích lũy dd-mm-yyyy |
| **Ngày kết thúc đăng ký** | Datacomlumn | Ngày kết thúc đăng ký chương trình tích lũy dd-mm-yyyy |
| **Mốc tích lũy** | Datacomlumn | Hiển thị mốc tích lũy mà điểm bán đã đăng ký  Trường hợp đăng ký lại trên app / import: Lưu thông tin đăng ký lại như đăng ký mới |
| **Số suất đăng ký** | Datacomlumn | Hiển thị số suất mà điểm bán đã đăng ký  Trường hợp đăng ký lại trên app / import: Lưu thông tin đăng ký lại như đăng ký mới |
| **Người đăng ký** | Datacomlumn | Trường hợp đăng ký CTTL trên app hiển thị mã - tên nhân viên saleman trên tuyến  Trường hợp Import hiển thị mã - tên nhân viên portal  Đăng ký lại trên app / import: Lưu thông tin đăng ký lại như đăng ký mới |
| **Thời gian đăng ký** | Datacomlumn | Hiển thị thời gian mà điểm bán đã thao tác đăng ký dd-mm-yyyy  **Trường hợp đăng ký lại trên app / import: Lưu thông tin đăng ký lại như đăng ký mới** |
| **Thời gian duyệt đăng ký** | Datacomlumn | - Hiển thị thời gian mà điểm bán được admin thao tác duyệt đăng ký dd-mm-yyyy - Nếu điểm bán bị thao tác từ chối đăng ký thì không lấy và hiển thị trong mốc thời gian này  - Nếu điểm bán đăng ký vào Chương trình (có cấu hình auto Duyệt) thì thời gian Duyệt đăng ký = Thời gian đăng ký |
| **Lý do từ chối** | Datacomlumn | - Hiển thị lý do từ chối đã nhập - Nếu đăng ký nhiều lần và bị từ chối nhiều lần thì hiển thị lý do gần nhất |
| **Hình ảnh đăng ký** | Datacomlumn | Hiển thị hình ảnh đăng ký chụp từ app merchant/ sale man/ upload từ portal tương ứng   * Nếu không có hình ảnh thì hiển thị rỗng * Xem hình theo rule xem hình hiện tại * BlueV2.0.0 trường hợp là file word/pdf upload trên portal→ hiển thị logo hình. click vào logo để xem file tương ứng. bỏ qua ation show logo |
| BlueV2.0.0  **Hợp đồng đăng ký** | Datacomlumn | Sau khi input và submit hợp đồng từ app Merchant. Theo flow tích hợp, Sau khi ký hợp đồng thành công tích hợp gửi thông tin hợp đồng đã ký từ eContract về DMS  1/ Khi yêu cầu hợp đồng = Hợp đồng điện tử: Hiển thị Hyperlink hợp đồng pdf; onclick hyperlink để view hợp đồng dạng pdf   * Tên hợp đồng lưu trên DMS: [Số điện thoại merchant] \_ [ddmmyyyyhhmmss]   2/ Khi yêu cầu hợp đồng = Hợp đồng giấy: Hiển thị hình ảnh chụp hợp đồng từ merchant , view theo rule view hình hiện tại của DMS |
| **Người cập nhật** | Datacomlumn | - Hiển thị thông tin đối tượng nếu Đăng ký được thay đổi sang các trạng thái khác - Mặc định khi đăng ký mới sẽ lưu người cập nhật = đối tượng đăng ký  BlueV2.0.0  Không ghi nhận người cập nhật từ app merchant, chỉ ghi nhận user cập nhật trên portal |
| **Ngày cập nhật** | Datacomlumn | - Hiển thị thời gian cập nhật dd-mm-yyy hh:mm:ss |
| **Tùy chỉnh** | Button | Bao gồm các thao tác   * Chỉnh sửa: Hiển thị tất cả các trạng thái đăng ký = Chờ duyệt/ Đã duyệt/ Ngưng hoạt động/Từ chối duyệt/ Hết hạn duyệt * Phê duyệt: Chỉ hiện thị khi trạng thái đăng ký = "Chờ duyệt" |
| **Cập nhật đăng ký**  **Cập nhật đăng ký** | Button Chỉnh sửa: Cho phép xem thông tin đăng ký (chỉ xem) tại điểm bán và cập nhật  hình ảnh đăng ký  **Cập nhật đăng ký tham gia: Header màn hình**  **Tab "Thông tin tham gia":**   * Chỉ xem, không cho phép chỉnh sửa bất kỳ trường thông tin nào ở tab "Thông tin tham gia", Khi click vào button chỉnh sửa trên danh sách đăng ký hiển thị màn hình như sau:     BlueV2.0.0 Bổ sung 2 field trên màn hình: Loại chương trình và hợp đồng     | Tên trường | Mô tả | | --- | --- | | **Cập nhật đăng ký tham gia** | * Hiển thị tên tiêu đề màn hình | | **Thông tin tham gia** | * Hiển thị tên tiêu đề tab | | Mã CTTL | Hiển thị mã CTTL | | Tên CTTL | Hiển thị tên CTTL | | Trạng thái CTTL | Hiển thị trạng thái CTTL | | Thời gian chương trình | Hiển thị thời gian chương trình Ngày bắt đầu → Ngày kết thúc (dd-mm-yyyy) | | Thời gian đăng ký | Hiển thị thời gian đăng ký Ngày bắt đầu → Ngày kết thúc (dd-mm-yyyy) | | Mã điểm bán | Hiển thị mã điểm bán đăng ký CTTL | | Tên điểm bán | Hiển thị tên điểm bán theo mã điểm bán | | Số điện thoại điểm bán | Hiển thị sdt điểm bán | | Mã tuyến | Hiển thị mã tuyến của điểm bán đăng ký CTTL | | Tên tuyến | Hiển thị tên tuyến theo mã tuyến | | Nhân viên đăng ký | Hiển thị mã - tên nhân viên đăng ký CTTL | | Ngày đăng ký | Hiển thị ngày đăng ký CTTL dd-mm-yyyy | | Mốc tích lũy | Hiển thị mốc tích lũy đăng ký | | Số suất đăng ký | Hiển thị số suất đăng ký | | Trạng thái đăng ký | Hiển thị trạng thái đăng ký | | BlueV2.0.0  Loại chương trình | Hiển thị loại chương trình tương ứng Merchant/ Saleman | | BlueV2.0.0  Hợp đồng | Chỉ hiển thị với Loại chương trình = Merchant  1/ Hợp đồng điện tử: Hiển thị Hyperlink hợp đồng pdf; onclick hyperlink để view hợp đồng dạng pd. Tên file hiển thị theo tên đã lưu trên DMS.  2/ Hợp đồng giấy: Hiển thị hình ảnh chụp hợp đồng từ merchant. view theo rule view hình hiện tại của DMS  Hình ảnh hợp đồng giấy > 2 hình  thì Thêm dấu + để xem chi tiết  *Lưu ý:*  Yêu cầu hợp động = Không yêu cầu hợp đồng => Ẩn luôn field này Yêu cầu hợp động = # Không yêu cầu hợp đồng: Chỉ cần chưa có 1 tấm hình nào hoặc 1 file hợp đồng nào thì mình ẩn luôn field này | | Đồng ý | Button "Đồng ý" hiển thị khi có add thêm từ 01 hình ảnh tham gia. Thông báo "Cập nhật thành công" và lưu hình ảnh tham gia đã thêm vào DB.   Trường hợp chỉ mở ra xem chưa có thay đổi bất kỳ dữ liệu nào disable button "Đồng ý" |   **Tab "Hình ảnh tham gia":**   * Cho phép add thêm hợp đồng đã ký/ thêm hình ảnh tham gia chương trình:     | Tên trường | Mô tả | | --- | --- | | **Cập nhật đăng ký tham gia** | * Hiển thị tên tiêu đề màn hình | | **Hình ảnh tham gia** | * Hiển thị tên tiêu đề tab | | **Button "Thêm file"** | * Cho phép chọn và thêm hình ảnh từ máy tính * **Số lượng hình ảnh tối đa = 10  (thẻ tag hiển thị)** * Chọn button "Thêm file" cho phép upload    + Các file hình ảnh: PNG, JPEG, JPG,   + BlueV2.0.0Các file tập tin: **PDF, Word.**   + Mỗi file kích thước tối đa 10mb hiển thị trong khung cố định (5cm x 5cm - Hoặc các bạn dev đề xuất phù hợp là được)   + Cho phép upload tối đa 10 file (Đã chụp từ app + upload thêm)   + Khi upload các file dạng PDF, Word (hợp đồng)      * Cho phép xóa các file vừa thêm mới chưa lưu     11/07/2025: Bổ sung   * các file đã lưu   + Kiểm tra trạng thái đăng ký = Chờ duyệt: cho phép xóa hình ảnh/ file đã upload.  Được xóa cả hình ảnh/file đã lưu trước đó   + Kiểm tra trạng thái đăng ký Khác Chờ duyệt: chỉ cho view, không cho xóa | | **List danh sách hình ảnh** | * Hiển thị danh sách hình ảnh đã thêm * Cho phép scroll để xem đầy đủ toàn bộ hình ảnh đã thêm * **Hiển thị thời gian up hình:**    + **dd-mm-yyyy hh:mm:ss**   + **Mã nhân viên - Tên nhân viên**   + **Hiển thị logo + tên file trên khung hình để view**        **→ Khi sau lưu,**  **Click vào hình => xem hình**  **Click vào logo word/ pdf thì xem file đã đính kèm (Bỏ qua action show logo)**   * Có thể xem và tải về các file đã upload | |  | * Validate số lượng hình ảnh tối đa cho phép lưu trữ  =  10 * Chỉ được phép  Xóa hình ảnh/file  đối với các **Đăng ký** (trạng thái Chờ duyệt). * Chỉ được phép Thêm mới  ~~hoặc Xóa~~    hình ảnh/file  đối với các **Đăng ký** (trạng thái Chờ duyệt/ Đã duyệt ~~/ Từ chối duyệt)~~ **(1)** * Chỉ được phép Thêm mới ~~hoặc Xóa~~  hình ảnh/file đối với các đăng ký thuộc **chương trình tích lũy** (trạng thái = Đang diễn ra) **(2)** * Những đăng ký nào không thỏa **mục (1) và (2)** sẽ disable icon button | | Đồng ý | Button "Đồng ý" hiển thị khi có thêm từ 01 hình ảnh tham gia, chỉ mở ra để view thì disable button đồng ý. Thông báo "Cập nhật thành công" và lưu hình ảnh tham gia đã thêm vào DB. Và vẫn ở màn hình để xem file  Trường hợp chỉ mở ra xem chưa có thay đổi bất kỳ dữ liệu nào disable button "Đồng ý" |     => Chọn "x" tắt popup và không có thay đổi dữ liệu nào mới của đăng ký CTTL đang chọn |
|  | Button Phê duyệt  Duyệt   * Đối với Đăng ký có trạng thái = "Chờ duyệt" : Hiển thị 2 thao tác        * + - **Duyệt**: Duyệt và chuyển trạng thái đăng ký của điểm bán sang Đã duyệt đăng ký  * + - **Từ chối:** Onclick nhập lý do từ chối (bắt buộc nhập): validate sl ký tự <=100.   => Chọn Cập nhật: Cập nhật dữ liệu và hiển thị thông báo   * Khi đó CTTL đã duyệt có trạng thái Đã duyệt * CTT từ chối có trạng thái Từ chối duyệt   => Chọn "Đóng" tắt popup và không thay đổi trạng thái của đăng ký CTTL đang chọn    Cùng lúc thực hiện duyệt + từ chối =>mesg: "Điểm bán đã duyệt/ từ chối. Vui lòng kiểm tra lại!" |

# **Button trên màn hình danh sách CTTL:**

## **Xét duyệt:**

**Duyệt**

1/ Disable button "Xét duyệt" nếu chưa chọn bất kỳ dữ liệu đăng ký nào

2/ Khi check chọn từ 1 đăng ký CTTL (có trạng thái Chờ duyệt) trở lên sẽ hiển thị button "Xét duyệt" để thực hiện  

* Đối với những danh sách đăng ký có trạng thái = Chờ duyệt: Sau khi thao tác chọn nhiều Đăng ký có trạng thái Chờ duyệt sẽ cho phép Xét duyệt hoặc Từ chối  những Đăng ký đó
  + Nếu lựa chọn là "Từ chối" và nhập lý do thì lý do đó sẽ appy trạng thái "Từ chối duyệt" cho tất cả
  + Nếu chọn Duyệt thì sẽ apply trạng thái "đã duyệt" cho tất cả
* Đối với những danh sách đăng ký không áp dụng bộ lọc nào, tức là = "Tất cả" : Sau khi thao tác chọn nhiều sẽ chỉ hiển thị dấu checked ở các đăng ký có trạng thái "Chờ duyệt" trên page đang view. Cho phép click button "Xét duyệt" để Xét duyệt hoặc Từ chối những Đăng ký có trạng thái = "Chờ duyệt".  Chỉ duyệt trên 1 pgae
  + Nếu lựa chọn là "Từ chối" và nhập lý do thì lý do đó sẽ appy trạng thái "Từ chối duyệt" cho tất cả
  + Nếu chọn Duyệt thì sẽ apply trạng thái "đã duyệt" cho tất cả
* Những trạng thái # Chờ duyệt không cho check chọn

## Import danh sách đăng ký chương trình tích lũy

**Chỉ cho phép import thành công khi**

* **CTTL có field "Hình thức đăng ký = 1. Đăng ký trên Web/ 3. Đăng ký trên Web và App"**
* **Có Ngày hiện tại thuộc thời gian đăng ký CTTL**
* **Chưa có đăng ký nào/ đã có đăng ký và trạng thái = "Chờ duyệt"**

**Bước 1: Chuẩn bị file import**

* **Tải xuống file template:**

  + Người dùng tải file template mẫu từ hệ thống
* **Điền dữ liệu vào template:**

  + Điền thông tin cần thiết vào các cột theo đúng định dạng yêu cầu.

**Bước 2: Mở giao diện Import**

* Truy cập vào giao diện quản lý Danh sách đăng ký chương trình tích lũy.
* Click nút “Import”.

**Bước 3:** **Chọn file import**

* Trong cửa sổ **Import danh sách đăng ký**, thực hiện:

  + Click **“Chọn file”** để tải lên file template đã điền dữ liệu.
  + Định dạng file phải là `.xlsx`.
* Sau khi chọn file, hệ thống sẽ tự động kiểm tra nội dung file.

**Bước 4: Các case Import và các dữ liệu cần kiểm tra**

### Quy trình Import:

trueUntitled Diagramfalse1500autotoptrue16834

trueflow basicfalseautotop48444522true741.5

* Click button Import excel → Hiển thị popup

* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc Kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống: Hiển thị thông báo: "Bạn chắc chắn thao tác này không?"

* + Đồng ý: Chạy tiến trình xử lý, kiểm tra dữ liệu inport từ file
  + Hủy: Đóng cảnh báo và giữ nguyên trạng thái import

**Button: "Lấy file mẫu" : cho phép export file excel mẫu**

* Nhập thông tin và Import vào hệ thống.

**Templates**:

  

Import 12/03/2025- Phase 1: template IMPORT  bỏ đi cái header trên đầu file và name sheet (tên sheet để "data") -> này theo core hiện tại chưa đáp ứng

### Kiểm tra Case trạng thái import

Các case import 

#### **CTTL có Field "Tự dộng duyệt tham gia" = ON**

* Nếu chọn On: Mặc định khi Điểm bán đăng ký tham gia trên portal hoặc app, phiếu đăng ký sẽ tự động được Duyệt tham gia, trạng thái = Đã duyệt

|  | Trạng thái đăng ký của khách hàng | Trạng thái import = 0  *Chờ duyệt* | Trạng thái import = 1  *Đã duyệt* | Trạng thái import = 2  *Từ chối duyệt* |
| --- | --- | --- | --- | --- |
| 1 | Trạng thái đăng ký của khách hàng = **Chưa đăng ký** | Chuyển đăng ký của khách hàng sang trạng thái **Đã** **duyệt**  **Ngày đăng ký được cập nhật = Ngày import**  **Ngày duyệt đăng ký = Ngày import** | Chuyển đăng ký của khách hàng sang trạng thái **Đã** **duyệt**  **Ngày đăng ký được cập nhật = Ngày import**  **Ngày duyệt đăng ký = Ngày import** | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán chưa có đăng ký CTTL. Vui lòng kiểm tra lại!" |
| 2 | Trạng thái đăng ký của khách hàng = **Chờ duyệt**    **(Case này sẽ không cảy ra vì CTTL auto duyệt tham gia rồi → có thể bỏ qua)** | **Update số suất và mốc tích lũy đăng ký**  Chuyển đăng ký của khách hàng sang trạng thái **Đã** **duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** | **Update số suất và mốc tích lũy đăng ký**  →  Chuyển đăng ký của khách hàng sang trạng thái **Đã duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** | Chuyển đăng ký của khách hàng sang trạng thái **Từ chối duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** |
| 3 | Trạng thái đăng ký của khách hàng = **Đã duyệt** | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" |
| 4 | Trạng thái đăng ký của khách hàng = **Ngưng hoạt động** | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" |
| 5 | Trạng thái đăng ký của khách hàng = **Từ chối duyệt**  *Vẫn còn khung thời gian đăng ký*    ***(Case này sẽ không cảy ra vì CTTL auto duyệt tham gia rồi → có thể bỏ qua)*** | **Lưu thông tin đăng ký lại như đăng ký mới**  Chuyển đăng ký của khách hàng sang trạng thái **Đã****duyệt**  (Case đăng ký lại trong khung đăng ký)  **Ngày đăng ký = Ngày import**  **Ngày duyệt đăng ký = Ngày import** | **Lưu thông tin đăng ký lại như đăng ký mới**  Chuyển đăng ký của khách hàng sang trạng thái **Đã duyệt**  (Case đăng ký lại trong khung đăng ký)  **Ngày đăng ký = Ngày import**  **Ngày duyệt đăng ký = Ngày import** | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" |
| 6 | Trạng thái đăng ký của khách hàng = **Từ chối duyệt**  *Đã hết khung thời gian đăng ký*    ***(Case này sẽ không cảy ra vì CTTL auto duyệt tham gia rồi → có thể bỏ qua)*** | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" |

#### **CTTL có Field "Tự dộng duyệt tham gia" = OFF**

|  | Trạng thái đăng ký của khách hàng | Trạng thái import = 0  *Chờ duyệt* | Trạng thái import = 1  *Đã duyệt* | Trạng thái import = 2  *Từ chối duyệt* |
| --- | --- | --- | --- | --- |
| 1 | Trạng thái đăng ký của khách hàng = **Chưa đăng ký** | Chuyển đăng ký của khách hàng sang trạng thái **Chờ duyệt**  **Ngày đăng ký được cập nhật = Ngày import**  **Ngày duyệt đăng ký  rỗng** | Chuyển đăng ký của khách hàng sang trạng thái **Đã** **duyệt**  **Ngày đăng ký được cập nhật = Ngày import**  **Ngày duyệt đăng ký = Ngày import** | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán chưa có đăng ký CTTL. Vui lòng kiểm tra lại!" |
| 2 | Trạng thái đăng ký của khách hàng = **Chờ duyệt** | **Update số suất và mốc tích lũy đăng ký**  **Giữ nguyên trạng thái đăng ký Chờ duyệt của khách hàng**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký giữ nguyên** | **Update số suất và mốc tích lũy đăng ký**  →  Chuyển đăng ký của khách hàng sang trạng thái **Đã duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** | Chuyển đăng ký của khách hàng sang trạng thái **Từ chối duyệt**  **Ngày đăng ký giữ nguyên**  **Ngày duyệt đăng ký = Ngày import** |
| 3 | Trạng thái đăng ký của khách hàng = **Đã duyệt** | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Đã duyệt". Vui lòng kiểm tra lại!" |
| 4 | Trạng thái đăng ký của khách hàng = **Ngưng hoạt động** | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Ngưng hoạt động". Vui lòng kiểm tra lại!" |
| 5 | Trạng thái đăng ký của khách hàng = **Từ chối duyệt**  *Vẫn còn khung thời gian đăng ký* | **Lưu thông tin đăng ký lại như đăng ký mới**  Chuyển đăng ký của khách hàng sang trạng thái **Chờ duyệt**  (Case đăng ký lại trong khung đăng ký)  **Ngày đăng ký = Ngày import**  **Ngày duyệt đăng ký rỗng** | **Lưu thông tin đăng ký lại như đăng ký mới**  Chuyển đăng ký của khách hàng sang trạng thái **Đã duyệt**  (Case đăng ký lại trong khung đăng ký)  **Ngày đăng ký = Ngày import**  **Ngày duyệt đăng ký = Ngày import** | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" |
| 6 | Trạng thái đăng ký của khách hàng = **Từ chối duyệt đăng ký**  *Đã hết khung thời gian đăng ký* | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" | Hiển thị thông báo: "Dòng n: Điểm bán @mã điểm bán đã có tồn tại đăng ký khác có trạng thái "Từ chối duyệt". Vui lòng kiểm tra lại!" |

**Kiểm tra dữ liệu**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã điểm bán (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập Mã điểm bán đăng ký CTTL | * **Mã điểm bán**để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Điểm bán @mã điểm bán nhập không đúng định dạng. Vui lòng kiểm tra lại!   + Dòng n: Mã điểm bán bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã điểm bán**không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi   + Dòng n: Điểm bán @mã điểm bán không tồn tại. Vui lòng kiểm tra lại!   + Dòng n: Điểm bán @mã điểm bán không hoạt động. Vui lòng kiểm tra lại! * **Mã điểm bán** tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi   + Dòng n: Dòng n1,n2,n3 có @mã điểm bán trùng. Vui lòng kiểm tra lại!   **RedV2.2.0 Kiểm tra danh sách import Mã điểm bán:**   | Mã điểm bán chỉ import thành công khi thỏa điều kiện của CTTL (Hệ thống so sánh tất cả các điểm bán của các tuyến bán hàng thuộc Vùng/ khu vực ; thuộc NPP; Thuộc điểm bán; thuộc các giá trị thuộc tính của CTTL) như sau:   * ĐK = Vùng/ Khu vực: Hệ thống so sánh Vùng/Khu vực của tuyến bán hàng của NPP với danh sách Vùng/Khu vực mà CTTL áp dụng. -> tất cả các điểm bán của các tuyến bán hàng thuộc Vùng/ khu vực này sẽ import thành công  * ĐK = Điểm bán: Chỉ những điểm bán được chọn mới import thành công  * ĐK = Nhà phân phối: Chỉ những điểm bán thuộc NPP mới import thành công  * ĐK = Loại điểm bán/Hạng điểm bán/ Vị trí điểm bán/ Kênh bán hàng/ thuộc tính điểm bán: Dựa vào master điểm bán, các điểm bán thỏa điều kiện mới import thành công  * Trường hợp cài đặt nhiều điều kiện: MIX (**Logic AND)**tất cả các điều kiện, điểm bán nào thỏa tất cả điều kiện thì mới import thành công | | --- |  * Kiểm tra điểm bán KHÔNG thỏa điều kiện: Hiển thị thông báo lỗi    + Dòng n: Điểm bán @mã điểm bán chưa thỏa điều kiện của chương trình. Vui lòng kiểm tra lại! |
| 2 | Mã tuyến  (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập mã tuyến đăng ký cho điểm bán | * **Nếu không nhập:**   + Để trống: Trống 1 line => bỏ qua   + Chỉ Mã tuyến để trống: Hiển thị thông báo lỗi: "Dòng n: Mã tuyến bị bỏ trống, vui lòng kiểm tra lại!" * **Nếu có nhập:** Kiểm tra lần lượt các điều kiện:   + **Định dạng dữ liệu.** → Nhập không đúng:"Dòng n: Mã tuyến @Mã tuyến nhập không đúng định dạng. Vui lòng kiểm tra lại!"   + **Tính tồn tại và trạng thái hoạt động**.  * + - **Mã tuyến phải tồn tại và đang hoạt động trong hệ thống.**       * Dòng n: Mã tuyến @Mã tuyến không tồn tại. Vui lòng kiểm tra lại!"       * Dòng n: Mã tuyến @Mã tuyến không hoạt động. Vui lòng kiểm tra lại!"   + Trường hợp đã tồn tại đăng ký của điểm bán theo tuyến, nhưng check mã tuyến import KHÁC mã tuyến đã tồn tại trên hệ thống theo điểm bán. hiển thị: Dòng n: Mã tuyến @Mã tuyến chưa hợp lệ!   **RedV2.2.0**   * Trường hợp Mã điểm bán không thuộc tuyến bán hàng:   + "Dòng n: Điểm bán **@mã điểm bán** không thuộc tuyến bán hàng **@mã tuyến**. Vui lòng kiểm tra lại!" * Kiểm tra **Tuyến phải thuộc phân quyền người dùng (vùng/ NPP chăm sóc)**   + "Dòng n: Dữ liệu không thuộc phân quyền của người dùng. Vui lòng kiểm tra lại!" |
| 3 | Mã CTTL (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt (Trừ "\_") | * Nhập mã CTTL mà điểm bán đăng ký | * Mã CTTL:   + Hiển thị thông báo lỗi "Dòng n: Mã CTTL @Mã không tồn tại. Vui lòng kiểm tra lại!"   + Hiển thị thông báo lỗi "Dòng n: Mã CTTL bị để trống. Vui lòng kiểm tra lại!"   + Hiển thị thông báo lỗi "Dòng n: Mã CTTL @Mã nhập không đúng định dạng. Vui lòng kiểm tra lại!" * CTTL phải đang ở trạng thái:   + Sắp diễn ra hoặc Đang diễn ra hoặc Hết hạn duyệt (có ngày hiện tại LỚN HƠN thời gian đăng ký)     - Hiển thị thông báo lỗi "Dòng n: Mã CTTL @Mã không nằm trong thời gian có thể đăng ký. Vui lòng kiểm tra lại!"   + CTTL có trạng thái = ngưng hoạt động;  = Kết thúc     - Hiển thị thông báo lỗi "Dòng n: Mã CTTL @Mã không hoạt động. Vui lòng kiểm tra lại!"   Bổ sung trạng thái Khởi tạo CTTL => ko cho import thành công.   * + CTTL có trạng thái = Khởi tạo     - Dòng n: CTTL @Mã CTTL đang có trạng thái khởi tạo. Vui lòng kiểm tra lại!  * RedV2.2.0: Khi import data (mã điểm bán- mã tuyến- mã CTTL) có trên hệ thống & CTTL không thuộc phân quyền Vùng/ Khu vực; Không thuộc TKTT; không thuộc NPP chăm sóc, nếu không thuộc hiển thị thông báo:   + "Dòng n: Dữ liệu không thuộc phân quyền của người dùng. Vui lòng kiểm tra lại!" |
| 4 | Mốc tích lũy (\*) | Nhập text mốc tích lũy | * Nhập mốc tích lũy đăng ký theo mã CTTL | * Mốc tích lũy để trống, nhập không đúng định dạng.   + Hiển thị thông báo lỗi "Dòng n: Mốc tích lũy @Tên mốc tích lũy nhập không đúng định dạng. Vui lòng kiểm tra lại!"   + Hiển thị thông báo lỗi "Dòng n: Mốc tích lũy bị để trống. Vui lòng kiểm tra lại!" * Mốc tích lũy phải có trong Mốc tích lũy CTTL, nếu không:   + Hiển thị thông báo lỗi "Dòng n: Mốc tích lũy @Tên mốc tích lũy không nằm trong mốc tích lũy của CTTL đã nhập. Vui lòng kiểm tra lại!" |
| 5 | Số suất (\*) | Chỉ nhập số nguyên dương > 0 | * Nhập số suất đăng ký | * Số suất để trống; nhập không đúng định dạng.   + Hiển thị thông báo lỗi "Dòng n: Số suất .... Vui lòng kiểm tra lại!"   + nhập không đúng định dạng     - nhập không đúng định dạng   + để trống     - để trống * Số suất nhập trong file phải <= số suất tối đa được đăng ký của CTTL. Nếu không   + Hiển thị thông báo lỗi "Dòng n: Số suất lớn hơn số suất tối đa của CTTL đã nhập. Vui lòng kiểm tra lại!" |
| 6 | Trạng thái (\*) | Chỉ nhập các số 0, 1, 2 | Trạng thái đăng ký CTTL của khách hàng  *0: Chờ duyệt*  *1: Đã duyệt*  *2: Từ chối duyệt* | * Trạng thái để trống; nhập không đúng định dạng.   + Hiển thị thông báo lỗi "Dòng n: Trạng thái nhập không đúng định dạng. Vui lòng kiểm tra lại!"   + Hiển thị thông báo lỗi "Dòng n: Trạng thái bị để trống. Vui lòng kiểm tra lại!" * Kiểm tra trạng thái đăng ký theo bảng [các case import](https://kb.finviet.com.vn/pages/viewpage.action?pageId=47448921#id-%C4%90%C4%83ngk%C3%BDCTTB(EnhanceT10)-Cac_Case_Import). |
| 7 | Lý do | text (100) | Bắt buộc khi Trạng thái đăng ký = 2  valid khi  Trạng thái đăng ký = 2 | * Lý do để trống; nhập không đúng định dạng khi Trạng thái đăng ký = 2   + Hiển thị thông báo lỗi "Dòng n: Lý do nhập không đúng định dạng hoặc để trống. Vui lòng kiểm tra lại!" |
| 8 | Lưu thông tin |  |  | * Khi đã kiểm tra thỏa các điều kiện:   + Lưu/ Update thông tin đăng ký CTTL cho điểm bán   + Thông báo: Import thành công   + Ghi nhận thời gian đăng ký CTTL theo mô tả trong các case import   + Đăng ký mới / đăng ký lại ghi nhận người đăng ký (mã nhân viên - tên nhân viên- ngày đăng ký) theo mã tuyến của điểm bán . Lưu thông tin đăng ký lại như đăng ký mới |

**Trường hợp import thành công:**

→ Nhấn X → Tắt popup và hiển thị danh sách Điểm bán đã import thành công

**Trường hợp import lỗi:**

Hiển thị các dòng lỗi để user điều chỉnh: => các form Import trên web sẽ có rule chung như đã mô tả =>

* hiển thị lỗi theo từng dòng lỗi
* hiển thị tất cả các lỗi
* có phân trang hiển thị lỗi

BlueV2.0.0 **CTTL loại chương trình = Merchant thì template import không cần check tuyến bán hàng. Mã tuyến có thể để trống, hoặc có nhập nhưng không lưu, không check tuyến**

# Export

  

Mục đích:  Click button để xuất dữ liệu; Hệ thống sẽ thực hiện export dữ liệu danh sách đăng ký CTTL file excel, template được mô tả bên dưới, template chỉ xuất danh sách điểm bán đăng ký CTTL của tất cả nhân viên hoặc theo bộ lọc trong khoảng thời gian được chọn

báo cáo  sẽ hiển thị theo dạng:

Templates export:

BlueV2.0.0: Template bổ sung cột "Hợp đồng đăng ký"

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| **Mã điểm bán** | Datacolumns | Mã định danh duy nhất của từng điểm bán. |
| **Tên điểm bán** | Datacolumns | Tên đầy đủ của điểm bán |
| **Số điện thoại điểm bán** | Datacolumns | Số điện thoại liên hệ của điểm bán. |
| **Tỉnh/Thành phố** | Datacolumns | Vị trí địa lý - tỉnh /thành phố nơi điểm bán hoạt động. |
| **Địa chỉ** | Datacolumns | Hiển thị địa chỉ điểm bán (Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.) |
| **Trạng thái đăng ký** | Datacolumns | Trạng thái đăng ký của điểm bán (**Chờ duyệt, Từ chối duyệt, Ngưng hoạt động, Hết hạn duyệt**).  Trường hợp điểm bán đăng ký lại nhiều lần hiển thị nhiều line tương ứng |
| **Mã tuyến** | Datacolumns | Mã tuyến bán hàng |
| **Tên tuyến** | Datacolumns | Tên tuyến bán hàng |
| **RedV2.1.0**  Mã NPP | Datacolumn | Mã NPP trên tuyến bán hàng |
| **RedV2.1.0**  Tên NPP | Datacolumn | Tên NPP trên tuyến bán hàng |
| **Mã chương trình** | Datacolumns | Mã định danh của chương trình tích lũy (CTTL) mà điểm bán đã đăng ký. |
| **Tên chương trình** | Datacolumns | Tên đầy đủ của chương trình CTTL. |
| **Ngày bắt đầu ĐK** | Datacolumns | Ngày bắt đầu đăng ký CTTL. |
| **Ngày kết thúc ĐK** | Datacolumns | Ngày kết thúc đăng ký CTTL. |
| **Mốc tích lũy** | Datacolumns | Mốc tích lũy được áp dụng cho từng điểm bán (ví dụ: mốc tích lũy 1, mốc tích lũy 2, v.v.). |
| **Số suất đăng ký** | Datacolumns | Số lượng suất đăng ký chương trình CTTL tại điểm bán (ví dụ: 20) |
| **Người đăng ký** | Datacolumns | Hiển thị mã - tên nhân viên đăng ký CTTL |
| **Thời gian đăng ký** | Datacolumns | Thời gian cụ thể khi điểm bán thực hiện đăng ký dd-mm-yyyy |
| **Thời gian duyệt đăng ký** | Datacolumns | Thời gian cụ thể khi điểm bán được duyệt/import gần nhất dd-mm-yyyy |
| **Lý do từ chối** | Datacolumns | Lý do trạng thái từ chối duyệt |
| BlueV2.0.0  **Hình ảnh đăng ký** | Datacolumns | Hình ảnh/ file được chụp hoặc upload từ portal  Hiển thị dạng link, nhiều hình nhiều link (Nếu có nhiều link thì hiện text, nếu có 1 link thì hiện hyperlink)   * Lưu ý: nếu là file thì click vào link để xem file word/ pdf tương ứng |
| BlueV2.0.0  **Hợp đồng đăng ký** |  | Bổ sung thêm field Hợp đồng đăng ký; export hiển thị dạng link, nhiều hình nhiều link (Nếu có nhiều link thì hiện text, nếu có 1 link thì hiện hyperlink)   * click để xem file pdf hợp đồng đã ký/ hình ảnh hợp đồng giấy đã ký |
| **Người cập nhật** | Datacolumns | Tên hoặc mã của người thực hiện cập nhật gần nhất của hệ thống |
| **Ngày cập nhật** | DateTime | Thời điểm cuối cùng trạng thái được cập nhật. dd-mm-yyyy hh:mm:ss của hệ thống |