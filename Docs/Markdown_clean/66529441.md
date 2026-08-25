|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Thiết lập quy trình chuyển tuyến nhà phân phối từ Nhà Phân Phối (NPP) cũ sang một NPP mới cùng khu vực với NPP cũ, đảm bảo các ràng buộc và điều kiện kinh doanh.   * Áp dụng cho việc thay thế NPP cũ (đã ngưng hoạt động) bằng NPP mới trong tuyến bán hàng. điều kiện chưa phát sinh dữ liệu trong ngày với các tuyến bị chuyển. Và không có đơn đặt hàng tồn tại với trạng thái "Khởi tạo" * Áp dụng cho các điểm bán, tuyến bán hàng, CT Tích lũy; CT trưng bày, các TTT (Tuyến thực tế) |
| Document version | RedV1.0.0  24/6/25: Khi thêm mới tuyến bán hàng/ Import tuyến: Không load các tuyến có trạng thái "Đang xử lý" (đang chạy xử lý hoặc nằm trong hàng chờ để xử lý tiếp theo) |
| Document status | GreenDONE |
| Document owner | thao.nguyen@finviet.com.vn |
| Chage History | 2 |

truenone

Liên quan đến chức năng:  [[HO] Tuyến bán hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48431425)

BRD:

--

Mục đích: Tài liệu này mô tả chi tiết các yêu cầu về chức năng, giao diện và phi chức năng cho tính năng "Chuyển tuyến nhà phân phối". Chức năng này cho phép người dùng có thẩm quyền (ví dụ: AdminHO) di chuyển một hoặc nhiều tuyến bán hàng từ một Nhà phân phối (NPP nguồn) sang một Nhà phân phối khác (NPP đích) một cách tự động, an toàn và có kiểm soát.

Viết tắt:

|  |  |
| --- | --- |
| Thuật ngữ/Viết tắt | Diễn giải |
| **NPP** | Nhà phân phối |
| **TBH** | Tuyến bán hàng |
| **ĐB** | Điểm bán |
| **TTT** | Tuyến thực tế (Lịch trình viếng thăm ĐB hàng ngày đã tạo) |
| **NVBH** | Nhân viên bán hàng |
| **CTTB** | Chương trình trưng bày |
| **CTTL** | Chương trình tích lũy |
| **ĐTAD** | Đối tượng áp dụng |

Quy trình chuyển tuyến:

trueChyển tuyến NPPfalseautotoptrue9214

# Màn hình Chuyển tuyến nhà phân phối

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| NPP nguồn | Select onechoice | Có | Không | * **Mục đích:** Cho phép người dùng chọn nhà phân phối (NPP) nguồn từ hệ thống để tìm kiếm * **Mở danh sách**:    + Khi người dùng nhấp vào trường "Nhà phân phối nguồn" hiển thị danh sách tất cả các NPP theo master NPP (Tất cả các trạng thái)   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn   + placeholder: Chọn nhà phân phối nguồn * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Tên Nhà phân phối hoặc mã nhà phân phối   + Hiển thị Mã NPP - Tên NPP sau khi chọn   + Lọc realtime theo keyword người dùng nhập.   + Nếu chọn trùng: hệ thống hiển thị cảnh báo lỗi inline: *“Nhà phân phối nguồn không được trùng với nhà phân phối đích”*  * **Hiển thị lựa chọn:**     + Nhà phân phối nguồn đã chọn sẽ hiển thị trong hộp chọn dưới dạng Mã nhà phân phối - Tên NPP   + Trường hợp bỏ chọn hiểu là không chọn NPP nguồn nào * **Xóa lựa chọn:**    + Người dùng có thể nhấp vào biểu tượng xóa hoặc chọn lại trong danh sách để bỏ chọn nhà phân phối không mong muốn. |
| NPP đích | Select onechoice | Có | Không | * **Mục đích:** Cho phép người dùng chọn nhà phân phối (NPP) đích từ hệ thống để tìm kiếm * **Mở danh sách**:    + Khi người dùng nhấp vào trường "Nhà phân phối đích" hiển thị danh sách tất cả các NPP theo master NPP (Tất cả các trạng thái)   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn   + placeholder: Chọn nhà phân phối đích * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Tên Nhà phân phối hoặc mã nhà phân phối   + Hiển thị Mã NPP - Tên NPP sau khi chọn   + Lọc realtime theo keyword người dùng nhập.   + Nếu chọn trùng: hệ thống hiển thị cảnh báo lỗi inline: *“Nhà phân phối đích không được trùng với nhà phân phối nguồn”*  * **Hiển thị lựa chọn:**     + Nhà phân phối đích đã chọn sẽ hiển thị trong hộp chọn dưới dạng Mã nhà phân phối - Tên NPP   + Trường hợp bỏ chọn hiểu là không chọn NPP nguồn nào * **Xóa lựa chọn:**    + Người dùng có thể nhấp vào biểu tượng xóa hoặc chọn lại trong danh sách để bỏ chọn nhà phân phối không mong muốn. |
| Ngày thực hiện | Date | Có | Không | Default ngày hiện tại  Cho phép chọn lại nhiều ngày để xem theo lịch sử đã lưu |
| Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách , xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách  mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách 2. **Danh sách làm mới:** Sau khi nhấp, danh sách sẽ hiển thị mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách 3. **Hiển thị kết quả:** Danh sách trên lưới sẽ cập nhật và hiển thị phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Danh sách kết quả (Grid):** |  |  |  | Phân trang danh sách.  Khi tiến hành xử lý nhiều lần trên 1 record hệ thống không gen record mới mà ghi đè vào record đã gen. |
| Ngày tạo | Datacomlums | Không | Không | Hiển thị dd-mm-yyyy hh:mm:ss |
| NPP nguồn | Datacomlums | Không | Không | Hiển thị mã - tên NPP nguồn |
| NPP đích | Datacomlums | Không | Không | Hiển thị mã - tên NPP đích |
| Tổng tuyến | Datacomlums | Không | Không | Hiển thị tổng số lượng tuyến được chọn xử lý  Ví dụ: có 10 tuyến, 8 tuyến xử lý thành công, 2 tuyến thất bại.  Sau đó xử lý manual 1 tuyến thành công.  Cột tổng tuyến hiển thị số (10-1) =9  Cột Thành công vẫn như cũ (không thay đổi)  Cột Thất bại hiển thị (2-1) =1 |
| Thành công | Datacomlums | Không | Không | Hiển thị tổng số lượng tuyến có trạng thái thành công |
| Thất bại | Datacomlums | Không | Không | Hiển thị tổng số lượng tuyến có trạng thái thất bại |
| Người tạo | Datacomlums | Không | Không | Hiển thị mã người tạo |
| Ngày cập nhật | Datacomlums | Không | Không | Hiển thị ngày cập nhật dd-mm-yyyy hh:mm:ss |
| Người cập nhật | Datacomlums | Không | Không | Hiển thị mã người cập nhật |
|  | | | | |
| Tạo mới | button |  |  | Chuyển hướng người dùng đến Màn hình **Thêm chuyển tuyến nhà phân phối.** |
| Xem chi tiết | icon |  |  | icon  Thất bại = 0 => ẩn icon view này  Click icon Chuyển hướng đến màn hình Chi tiết chuyển tuyến nhà phân phối    * Trường hợp Tiến trình đang xử lý: Hiển thị popup  Thêm chuyển tuyến nhà phân phối để xem các tiến trình đang xử lý cho đến hiện tại * Trường hợp Đã xử lý hoàn tất, chọn để xem: Popup "Chi tiết chuyển tuyến nhà phân phối" load y chang popup **Thêm chuyển tuyến nhà phân phối** nhưng:  * + ẩn button: **"Import; Tạo mới"**  * + Disable NPP nguồn; NPP đích   + Chỉ load tất cả các tuyến có trạng thái thất bại   + Cho phép xóa tuyến thất bại:  Onclick show popup "Bạn có chắc chắn thao tác xóa hay không? Đồng ý để xóa, Hủy để tắt popup.   + Cho phép chọn button "Tiến hành xử lý" để xử lý tiếp các tuyến đang bị lỗi |

Thêm chuyển tuyến

# Màn hình Thêm chuyển tuyến nhà phân phối

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Nhà phân phối nguồn | Select onechoice | Có | Có | * **Mục đích:** Cho phép người dùng chọn nhà phân phối (NPP) nguồn từ hệ thống, làm cơ sở để hiển thị danh sách các tuyến bán hàng thuộc nhà phân phối đó. * **Mở danh sách**:    + Khi người dùng nhấp vào trường "Nhà phân phối nguồn" hiển thị danh sách tất cả các NPP theo master NPP (Tất cả các trạng thái)   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn   + placeholder: Chọn nhà phân phối nguồn * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Tên Nhà phân phối hoặc mã nhà phân phối   + Hiển thị Mã NPP - Tên NPP sau khi chọn   + Lọc realtime theo keyword người dùng nhập.   + Nếu chọn trùng: hệ thống hiển thị cảnh báo lỗi inline: *“Nhà phân phối nguồn không được trùng với nhà phân phối đích”*  * **Hiển thị lựa chọn:**     + Nhà phân phối nguồn đã chọn sẽ hiển thị trong hộp chọn dưới dạng Mã nhà phân phối - Tên NPP   + Trường hợp bỏ chọn hiểu là không chọn NPP nguồn nào * **Xóa lựa chọn:**    + Người dùng có thể nhấp vào biểu tượng xóa hoặc chọn lại trong danh sách để bỏ chọn nhà phân phối không mong muốn.   + Khi chọn lại NPP nguồn, NPP đích và Danh sách tuyến bên dưới sẽ được xóa trắng (reset).   + Sau khi nhấn nút Tiến hành xử lý (từ lần đầu tiên), hai ô chọn NPP nguồn và NPP đích sẽ bị vô hiệu hóa (disabled). |
| Nhà phân phối đích | Select onechoice | Có | Có | * **Mục đích:** Cho phép người dùng chọn nhà phân phối (NPP) đích từ hệ thống, làm cơ sở để chuyển danh sách các tuyến bán hàng thuộc nhà phân phối nguồn đến nhà phân phối đích * **Mở danh sách**:    + Khi người dùng nhấp vào trường "Nhà phân phối đích" hiển thị danh sách tất cả các NPP đang active thuộc Vùng bán hàng của NPP nguồn đã chọn theo master NPP.     - Nếu không chọn NPP nguồn thì khi chọn NPP đích sẽ không load bất kỳ dữ liệu nào.   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn   + placeholder: Chọn nhà phân phối đích * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Tên Nhà phân phối hoặc mã nhà phân phối   + Hiển thị Mã NPP - Tên NPP sau khi chọn   + Lọc realtime theo keyword người dùng nhập.   + Nếu chọn trùng: hệ thống hiển thị cảnh báo lỗi inline: *“Nhà phân phối đích không được trùng với nhà phân phối nguồn”*  * **Hiển thị lựa chọn:**     + Nhà phân phối đích đã chọn sẽ hiển thị trong hộp chọn dưới dạng Mã nhà phân phối - Tên NPP   + Trường hợp bỏ chọn hiểu là không chọn NPP đích nào * **Xóa lựa chọn:**    + Người dùng có thể nhấp vào biểu tượng xóa hoặc chọn lại trong danh sách để bỏ chọn nhà phân phối không mong muốn.   + Khi đã chọn NPP nguồn, Chọn NPP đích => sau đó Xóa NPP nguồn thì NPP đích cũng bị xóa theo.   + Sau khi nhấn nút Tiến hành xử lý (từ lần đầu tiên), hai ô chọn NPP nguồn và NPP đích sẽ bị vô hiệu hóa (disabled). |
|  | | | | |
| Chọn tuyến | Button | Có | Không | Xem mô tả chức năng "Thêm tuyến bán hàng" |
| Import | Button | Có | Không | Xem mô tả chức năng "" |
| Danh sách tuyến bán hàng: Mặc định danh sách rỗng khi tạo mới. (Click button Tạo mới trên màn hình Tiến trình xử lý") | | | | |
| Mã tuyến | Datacolums have copy | Không | Không | Hiển thị mã tuyến, có thể mở rộng dòng để xem quy trình xử lý.  Default + (Collapse all)  Click dấu + để expand tiến trình xử lý  và dấu + chuyển thành dấu - |
|  | | | | Xử lý tuần tự theo tiến trình  Xử lý tuần tự theo tiến trình:    Mô tả icon:   * Icon loading ở tất cả các bước khi kiểm tra * Bước nào thành công hiển thị icon hoàn thành tại bước đó để nhận biết * Bước nào lỗi: hiển thị icon lỗi để nhận biết lỗi tại bước nào trên giao diện   Mô tả các bước kiểm tra:  **1. Khởi tạo xử lý:** Kiểm tra trong tuyến bán hàng đã có tồn tại viếng thăm điểm bán hoặc phát sinh bất kỳ giao dịch nào (Ngoại tuyến/ trong tuyến)   * **Hành động:** Hệ thống kiểm tra trong Tuyến bán hàng **trong tuyến hoặc ngoại tuyến** của ngày hiện tại (today()):    1. Tuyến có điểm bán nào đã được NVBH check-in (viếng thăm) không?   2. Tuyến có tồn tại đơn hàng có trạng thái khác trạng thái Đã xuất kho, Đã giao hàng, Đã hủy (Tức là đang có đơn hàng sellin/sellout trạng thái Khởi tạo, Đã duyệt)   3. Tuyến có tồn tại giao dịch khác (ví dụ làm khảo sát, nhiệm vụ chăm sóc điểm bán, giao dịch khác)  * **Nếu KHÔNG** → **Tiếp tục xử lý Bước 2** * **Nếu CÓ**  →    + Hiển thị thông báo:      - Đã checkin điểm bán: “Không thể thay đổi NPP vì đã có sale viếng thăm điểm bán @mã-tên điểm bán"     - Tồn tại đơn hàng sellin/sellout chưa xử lý (ở trạng thái Khởi tạo, Đã duyệt): "Các đơn hàng @mã đơn 1, @mã đơn 2,... đang có trạng thái khác Đã xuất kho, Đã giao hàng, Đã hủy"     - Có phát sinh giao dịch tại điểm bán nhưng chưa checkin: "Không thể thay đổi NPP vì đã có phát sinh giao dịch tại điểm bán @mã -tên điểm bán"   + Cập nhật trạng thái tuyến thành Thất bại.   + **Dừng toàn bộ quy trình xử lý trên tuyến bán hàng**   **2. Cập nhật tuyến bán hàng**   * **Mục đích:** Chuyển quyền sở hữu tuyến từ NPP nguồn sang NPP đích. * **Hành động:**    1. Cập nhật tuyến bán hàng, xóa NPP nguồn, gán NPP đích vào thay thế.   2. **Kiểm tra trùng nhãn bán hàng (nếu có):** Nếu tuyến có gán NVBH, và NVBH này cũng thuộc NPP đích, hệ thống phải kiểm tra xem NVBH này có bị trùng nhãn bán hàng trên các tuyến khác của họ hay không (theo rule đã định nghĩa ở chức năng quản lý tuyến)   3. Ghi nhận vào history\_log: .... Thao tác [ Chuyển tuyến NPP ]; Nội dung cũ [NPP nguồn]; Nội dung mới [NPP đích] * **Kết quả thành công:** Chuyển sang **Bước 3**.    + Gán NPP đích vào NPP nguồn, Cập nhật Vùng/Khu vực theo NPP đích * **Xử lý lỗi:** Nếu có lỗi:    + **Rollback bước đang xử lý về như cũ**      - Ghi nhận trạng thái "Thất bại" cho tuyến này.     - Cập nhật giao diện (tăng số đếm Thất bại, cập nhật Tóm tắt tiến trình end page, hiển thị tag trạng thái thất bại trên dòng của tuyến, hiển thị chi tiết lỗi tương ứng).     - Log và ho phép hiển thị thông báo lỗi cụ thể:         * Inactive tuyến bán hàng khi đang xử lý: "Mã tuyến không hoạt động!       * inactive NPP đích: "Nhà phân phối không hoạt động!       * Lỗi check trùng nhãn: Theo msg [rule khi lưu đã mô tả trên tuyến](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66526110).       * Lỗi khác: Cập nhật tuyến bán hàng @Mã tuyến - tên tuyến không thành công!   **3.** **Xóa và tạo lại Tuyến thực tế (TTT)**   * **Mục đích:** Cập nhật lịch trình viếng thăm hàng ngày theo NPP mới. * **Hành động:**    1. Xóa các bản ghi TTT đã được tạo sẵn cho tuyến này từ ngày hiện tại trở về sau.   2. Gọi hàm để tạo lại TTT mới cho tuyến với thông tin NPP đích. * **Kết quả thành công:** Chuyển sang **Bước 4**. * **Xử lý lỗi:** Nếu có lỗi:    + **Rollback toàn bộ về như cũ (bước 3,2)**      - Ghi nhận trạng thái "Thất bại" cho tuyến này.     - Cập nhật giao diện (tăng số đếm Thất bại, cập nhật Tóm tắt tiến trình end page, hiển thị tag trạng thái thất bại trên dòng của tuyến, hiển thị chi tiết lỗi tương ứng)   + Hiển thị thông báo:       - Xóa tuyến thực tế không thành công tại các điểm bán: @mã-tên điểm bán 1, @mã-tên điểm bán 2     - Tạo lại tuyến thực tế không thành công tại các điểm bán: @mã-tên điểm bán 1, @mã-tên điểm bán 2   **4. Thêm đối tượng áp dụng chương trình trưng bày**   * **Mục đích:** Đảm bảo NPP đích được hưởng các CTTB phù hợp. * **Hành động:**    1. Lấy danh sách tất cả CTTB đang hoạt động (trạng thái khác Hết hạn, Ngưng hoạt động, Từ chối duyệt và ngày kết thúc chương trình >= ngày hiện tại).   2. Với mỗi CTTB, kiểm tra ĐTAD:       + Nếu ĐTAD là NPP: Tự động gán thêm NPP đích vào danh sách NPP của CTTB. Nếu đã tồn tại NPP đích rồi thì bỏ qua.      + Nếu ĐTAD là Vùng-Khu vực mà NPP đích thuộc vào: Không cần làm gì, NPP đích đã được hưởng.      + Nếu CTTB không chọn ĐTAD (áp dụng toàn quốc): Không cần làm gì, NPP đích đã được hưởng. * **Kết quả thành công:** Chuyển sang **Bước 5**. * **Xử lý lỗi:** Nếu có lỗi khi cập nhật CTTB:    + **Rollback toàn bộ về như cũ (bước 4,3,2)**   + Ghi nhận trạng thái "Thất bại" cho tuyến này.   + Cập nhật giao diện (tăng số đếm Thất bại, cập nhật Tóm tắt tiến trình end page, hiển thị tag trạng thái thất bại trên dòng của tuyến, hiển thị chi tiết lỗi tương ứng)   + Hiển thị thông báo: Lỗi cập nhật đối tượng áp dụng cho CTTB @mã-chương-trình, @mã-chương-trình, @mã-chương-trình   **5. Thêm đối tượng áp dụng chương trình tích lũy**   * **Mục đích:** Đảm bảo NPP đích được hưởng các CTTL phù hợp. * **Hành động:**    1. Lấy danh sách tất cả CTTL đang hoạt động (trạng thái khác Hết hạn, Ngưng hoạt động, Từ chối duyệt và ngày kết thúc chương trình >= ngày hiện tại).   2. Với mỗi CTTL, kiểm tra ĐTAD:       + Nếu ĐTAD là NPP: Tự động gán thêm NPP đích vào danh sách NPP của CTTL. Nếu đã tồn tại NPP đích rồi thì bỏ qua.      + Nếu ĐTAD là Vùng-Khu vực mà NPP đích thuộc vào: Không cần làm gì, NPP đích đã được hưởng.      + Nếu CTTB không chọn ĐTAD (áp dụng toàn quốc): Không cần làm gì, NPP đích đã được hưởng. * **Kết quả thành công:** Chuyển sang **Bước 6**. * **Xử lý lỗi:** Nếu có lỗi khi cập nhật CTTB:    + **Rollback toàn bộ về như cũ (bước 5,4,3,2)**   + Ghi nhận trạng thái "Thất bại" cho tuyến này.   + Cập nhật giao diện (tăng số đếm Thất bại, cập nhật Tóm tắt tiến trình end page, hiển thị tag trạng thái thất bại trên dòng của tuyến, hiển thị chi tiết lỗi tương ứng)   + Hiển thị thông báo: Lỗi cập nhật đối tượng áp dụng cho CTTL [@mã-chương-trình].   **6. Cập nhật điểm bán:**   * **Mục đích:** Gán NPP đích cho các điểm bán thuộc tuyến * **Hành động:** Với tất cả các ĐB (mọi trạng thái) trong tuyến đang xử lý:    + Gán NPP đích làm NPP phục vụ bán hàng cho các ĐB này.   + **Lưu ý quan trọng:** Thao tác này chỉ gán NPP phục vụ cho tuyến, không thay đổi NPP nguồn trong master data của điểm bán. * **Kết quả thành công:** đến Bước Xử lý hoàn tất * **Xử lý lỗi:** Nếu có lỗi:    + **Rollback toàn bộ về như cũ (bước 6,5,4,3,2)**   + Ghi nhận trạng thái "Thất bại" cho tuyến này.   + Cập nhật giao diện (tăng số đếm Thất bại, cập nhật Tóm tắt tiến trình end page, iển thị tag trạng thái lỗi trên dòng của tuyến, hiển thị chi tiết lỗi tương ứng)   + Hiển thị thông báo:       - NPP đích bị ngưng hoạt động: Nhà phân phối không hoạt động!     - Điểm bán không hoạt động!     - Lỗi khác chưa xác định: Lỗi gán nhà phân phối cho điểm bán @mã-tên điểm bán 1, @mã-tên điểm bán 2   **Bước 7:** **Xử lý hoàn tất**   * **Mục đích:** Hoàn thành quy trình cho tuyến. * **Hành động:**    1. Cập nhật trạng thái của tuyến trong Danh sách tuyến Đang xử lý thành Thành công.   2. Cập nhật giao diện (tăng số đếm Thành công, cập nhật Tóm tắt tiến trình end page, hiển thị tag trạng thái thành công trên dòng của tuyến) * **Kết quả:** Hệ thống tiếp tục xử lý tuyến tiếp theo trong danh sách. Nếu là tuyến cuối cùng, toàn bộ tiến trình kết thúc.   **Lưu ý:**   * **Ghi log để truy vết xử lý khi cần**   **Hiển thị Tóm tắt tiến trình xử lý sau khi người dùng nhấn nút Tiến hành xử lý.**   * **Đang xử lý... [ 0% ] - Thành công: 0/100 - Thất bại: 100/100** * **Đang xử lý... [ 10% ] - Thành công: 10/100 - Thất bại: 90/100** * Khi xử lý xong tiến trình: ****Thành công: 50/100 - Thất bại: 50/100**** |
| Tên tuyến | Datacolums | Không | Không | Hiển thị tên tuyến bán hàng theo mã tuyến |
| Mã nhân viên chăm sóc | Datacolums have copy | Không | Không | Hiển thị tên nhân viên bán hàng theo tuyến bán hàng |
| Tên nhân viên chăm sóc | Datacolums | Không | Không | Hiển thị tên nhân viên theo mã nhân viên |
| Trạng thái xử lý | Datacolums - Tag | Không | Không | 1/ Trống: Chỉ mới thêm tuyến vào danh sách mà chưa thao tác chọn button "Tiến hành xử lý"  2/ Đang xử lý: Đang chạy xử lý tiến trình của tuyến  3/ Thất bại: Thực hiện Xử lý tuần tự theo tiến trình thất bại   4/ Thành công: Thực hiện Xử lý tuần tự theo tiến trình thành công |
| Chi tiết lỗi | Datacolums | Không | Không | Hiển thị chi tiết lỗi cụ thể cho từng tuyến bán hàng |
| Xóa |  |  |  | Show Icon button Xóa với trạng thái xử lý = trống, Thất bại. Onclick show popup "Bạn có chắc chắn thao tác xóa hay không? Đồng ý để xóa, Hủy để tắt popup. |
|  | | | | |
| Tiến hành xử lý  Tiến hành xử lý | Button | Không | Không | * Tiến hành xử lý:     + Nút này bị vô hiệu hóa (disable) khi danh sách tuyến rỗng hoặc không tồn tại tuyến có trạng thái xử lý nào = rỗng / thất bại. Disable khi đang xử lý.   + Sau khi nhấn, các nút Chọn tuyến, Import và icon Xóa trên dòng sẽ bị vô hiệu hóa. NPP nguồn và NPP đích cũng bị disable không cho chọn lại.   + Nếu quá trình xử lý gặp lỗi và dừng toàn bộ tiến trình, nút này sẽ được kích hoạt (enabled) trở lại để người dùng có thể xử lý tiếp sau khi đã khắc phục vấn đề. (Lúc đó có thể chọn icon xóa để xóa tuyến, Chọn Tiến hành xử lý để xử lý tiếp)   Chọn button hiển thị confirm: "Quá trình thực hiện thành công sẽ không thể khôi phục được dữ liệu trước đó. Bạn có chắc muốn chuyển tuyến nhà phân phối?"   * Hủy: Tắt popup và vẫn ở lại màn hình * Đồng ý: Button sẽ chuyển sang trạng thái xử lý (làm mờ và không cho thao tác)   Hệ thống sẽ xử lý tuần tự theo tiến trình   **Lưu ý quan trọng:**   * Vẫn xem được data cũ trước ngày thực hiện xử lý Tại màn hình Chi tiết tuyến bán hàng → Lịch sử thay đổi * Nếu có một tuyến có trạng thái xử lý Thất bại thì rollback tuyến lỗi và chạy tiếp tuyến tiếp theo, hiển thị đầy đủ trạng thái tại field Trạng thái xử lý, Chi tiết lỗi (nếu có) |

Chọn tuyến

## Chọn tuyến

Màn hình

Mô tả

* Hiển thị popup Thêm tuyến bán hàng:
  + Mặc định mở màn hình rỗng
  + Khi chọn Button "Tìm kiếm" - chưa chọn bất kì dữ liệu lọc nào => Hiểu là search tất cả => hiển thị all danh sách tuyến đang active trên lưới
  + Khi chọn Button "Tìm kiếm" - Đã chọn các tiêu chí lọc => Hiểu là search theo tiêu chí bộ lọc => hiển thị danh sách tuyến đang active thỏa tiêu chí bộ lọc trên lưới
  + có phân trang hiển thị trên lưới

**Mô tả: - Chỉ load các Tuyến bán hàng đang active để chọn**

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| **Tìm kiếm tuyến bán hàng** | | | | |
| Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu tuyến trên danh sách tuyến bán hàng đang active của Nhà phân phối nguồn Tìm theo mã tuyến, tên tuyến  Lưu ý: Không load các tuyến có trạng thái "Đang xử lý" (đang chạy xử lý hoặc nằm trong hàng chờ để xử lý tiếp theo)  **Chi tiết hoạt động:**  Cho phép nhập text   * Tooltip: Tìm theo mã tuyến, tên tuyến * Placeholder: Tìm theo mã tuyến, tên tuyến * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các tuyến bán hàng đang active của NPP nguồn có thông tin được nhập trong ô này. * Nếu không có dữ liệu thì lưới danh sách hiển thị rỗng |
| Nhân viên chăm sóc | selectonechoice | Có | Không | **Chức năng:**   * Tìm kiếm các nhân viên chăm sóc trên các tuyến của NPP nguồn đã chọn   **Cách sử dụng:**   1. **Chọn nhân viên** 2. Hiển thị: Hiển thị trong hộp chọn dưới dạng text, cho phép xóa/ chọn lại 3. **Kết quả lọc:** lưới danh sách sẽ hiển thị các nhân viên chăm sóc trên các tuyến của NPP nguồn đã chọn. Hiển thị mã - tên nhân viên   **Lưu ý:**   * Trường Nhân viên chăm sóc chỉ có dữ liệu sau khi người dùng đã chọn NPP nguồn |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách , xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách  mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách 2. **Danh sách làm mới:** Sau khi nhấp, danh sách sẽ hiển thị toàn bộ các tuyến bán hàng đang active theo NPP nguồn có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách 3. **Hiển thị kết quả:** Danh sách trên lưới sẽ cập nhật và hiển thị phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Grid Danh sách tuyến bán hàng** | | | | |
| Checkbox | checkbox | Có | Không | * Check box cho phép chọn các tuyến để insert vào Grid Danh sách tuyến bán hàng. Mở Popup lần sau, khi chọn bộ lọc có tuyến đã chọn trước, màn hình vẫn hiển thị checkbox đã chọn, người dùng có thể bỏ check * Cho phép check một hoặc nhiều * Cho phép check All   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt  Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Đồng ý: Xóa tất cả các mục đã chọn; chọn Hủy: Tắt popup và vẫn giữ nguyên trạng thái    Icon check trên header hiển thị check khi tồn tại từ 1 check dưới lưới danh sách |
| Mã tuyến | Datacolumn have copy | Không | Không | Mã định danh của tuyến |
| Tên tuyến | Datacolumn | Không | Không | Tên tuyến |
| Mã nhân viên chăm sóc | Datacolumn have copy | Không | Không | Mã nhân viên theo tuyến |
| **Tên nhân viên chăm sóc** | Datacolumn | Không | Không | Tên nhân viên theo mã nhân viên |
| Trạng thái | Datacolumn | Không | Không | Hoạt động (Chỉ load những tuyến bán hàng có trạng thái Hoạt động) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Đồng ý** | Button | Có | Không | **Chức năng:**   * Nút "**Đồng ý**" cho phép người dùng insert danh sách tuyến đã chọn vào lưới danh sách tuyến và đóng Popup   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Đồng ý" để  insert danh sách đã chọn vào lưới Danh sách tuyến ban hàng và đóng Popup 2. **Hành động diễn ra**: insert danh sách đã chọn vào Grid và đóng Popup   **Lưu ý:**   * Tại màn hình Thêm tuyến, chọn tuyến quay về màn hình Thêm chuyển tuyến nhà phân phối. Sau đó chọn "Thêm tuyến"  vẫn hiển thị danh sách đã chọn. Và ngược lại * Chọn add Thêm thành công; sau đó chọn add thêm nữa => Danh sách đã chọn vẫn hiển thị "đã chọn", muốn bỏ chọn thì uncheck và nhấn Đồng ý * Trường hợp 1. chọn thêm tuyến manual → 2. Import thêm → 3. Chọn thêm tuyến: Vẫn hiển thị checked all tuyến đã chọn ở step1 +2. |

Import

## Import

**1/ Chọn button Import, hiển thị màn hình import như hình**

**2/ Người dùng thực hiện import:**

* Double click / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc Kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống: Hiển thị thông báo: "Bạn chắc chắn thao tác này không?"

* + Đồng ý: Chạy tiến trình xử lý, kiểm tra dữ liệu inport từ file
  + Hủy: Đóng cảnh báo và giữ nguyên trạng thái import

**3/ Ràng buộc chung:**

* Click button Import, nhưng chưa chọn NPP nguồn và NPP đích => không cho import, hiển thị warning khi click vào button: **"Bắt buộc phải chọn nhà phân phối nguồn và nhà phân phối đích để import!" Chọn "Đồng ý" để tắt popup**
* Trong popup import: Hệ thống cung cấp một file mẫu. Template chỉ yêu cầu 2 cột: Mã tuyến (bắt buộc) và Tên tuyến. **Dữ liệu mẫu sẽ là tất cả các tuyến bán hàng đang hoạt động của NPP nguồn đã chọn và Không lấy các tuyến có trạng thái "Đang xử lý" (đang chạy xử lý hoặc nằm trong hàng chờ để xử lý tiếp theo)**
* Khi người dùng upload file, hệ thống sẽ đọc và thêm các tuyến hợp lệ (có tồn tại trong danh sách tuyến của NPP nguồn) vào Danh sách tuyến chờ xử lý.
* Báo lỗi nếu có mã tuyến không tồn tại hoặc trùng lặp.

* Ràng buộc trên màn hình phải chọn NPP nguồn và NPP đích

=> [Import theo rule chung](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode)của hệ thống

**Button: "Lấy file mẫu" : cho phép export file excel mẫu**

**Template: Import\_NPP\_Route\_Transfer**

**4/ Quy trình import**

**trueTransfer NPP Routefalse1200autotoptrue10916**

**trueKTCBfalseautotoptrue6912**

**5/ Validate dữ liệu**

**Kiểm tra dữ liệu:**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã tuyến  (\*) | Text, không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Validate  tuyến có tồn tại, đang hoạt động và thuộc NPP nguồn * Dữ liệu mẫu là danh sách các tuyến bán hàng đang active của NPP nguồn (trừ tuyến có trạng thái xử lý: Đang xử lý) | * Mã tuyến để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Mã tuyến @Mã tuyến - tên tuyến nhập không đúng định dạng. Vui lòng kiểm tra lại!   + Dòng n: Mã tuyến bị bỏ trống. Vui lòng kiểm tra lại!  * Mã tuyến không tồn tại trên hệ thống. Hiển thị thông báo lỗi   + Dòng n: Mã tuyến @Mã tuyến - tên tuyến không tồn tại trong hệ thống. Vui lòng kiểm tra lại! * Mã tuyến bị inactive:   + Dòng n: Mã tuyến @Mã tuyến- tên tuyến không hoạt động. Vui lòng kiểm tra lại! * Mã tuyến không thuộc NPP nguồn   + Dòng n: Mã tuyến @Mã tuyến- tên tuyến không tồn tại trong nhà phân phối @Mã NPP nguồn. Vui lòng kiểm tra lại! * Trùng tuyến trên template:   + Dòng n: Dòng n1,n2,n3 có tuyến @Mã tuyến- tên tuyến trùng. Vui lòng kiểm tra lại! * Trùng tuyến trên màn hình Thêm chuyển tuyến nhà phân phối → Danh sách tuyến bán hàng   + Dòng n: Dòng n1,n2,n3 có tuyến @Mã tuyến-tên tuyến trùng. Vui lòng kiểm tra lại! * Trường hợp kiểm tra tuyến đang có trạng thái xử lý = Đang xử lý, hoặc tuyến đang nằm trong hàng đợi để xử lý tiếp theo của một tiến trình chuyển tuyến đang chạy   + Dòng n: Mã tuyến @Mã tuyến-tên tuyến đang được xử lý ở tiến trình khác. Vui lòng kiểm tra lại! |
| 2 | Tên tuyến | Text | * Không bắt buộc * Dữ liệu mẫu hiển thị tên tuyến theo mã tuyến | Không bắt buộc nhập tên tuyến |
| 3 | Lưu thông tin |  |  | Import thành công!  Trường hợp thất bại [báo lỗi thất bại](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO) theo rule chung đã mô tả  Sau khi import thành công hiển thị danh sách các tuyến bán hàng trên màn hình Chuyển tuyến nhà phân phối. Chọn button "Tiến hành xử lý"  để xử lý chuyển tuyến nhà phân phối. |

*Lưu ý: Check trùng tuyến trong template và tuyến đã được thêm trước đó trên màn hình (manual)*

# Các màn hình liên quan:

1/ Màn hình Danh sách điểm bán → Lưu thêm mã - tên Nhà phân phối đích vào master điểm bán trên tuyến bán hàng

2/ Màn hình Tuyến bán hàng: 

* Danh sách tuyến: Gỡ toàn bộ NPP nguồn và gán NPP đích
* Chi tiết tuyến: Tab Thêm tuyến → Field "Nhà phân phối":  Gỡ toàn bộ NPP nguồn và gán NPP đích
* Lịch sử thay đổi: Ghi log lịch sử thay đổi

3/ Tuyến thực tế

* Xóa TTT cũ và gen lại TTT mới

4/ Chương trình trưng bày:

* Lấy danh sách tất cả CTTB đang hoạt động (trạng thái khác Hết hạn, Ngưng hoạt động, Từ chối duyệt và ngày kết thúc chương trình >= ngày hiện tại).
* Với mỗi CTTB, kiểm tra ĐTAD:

  + Nếu ĐTAD là NPP: Tự động gán thêm NPP đích vào danh sách NPP của CTTB. Nếu đã tồn tại NPP đích rồi thì bỏ qua.
  + Nếu ĐTAD là Vùng-Khu vực mà NPP đích thuộc vào: Không cần làm gì, NPP đích đã được hưởng.
  + Nếu CTTB không chọn ĐTAD (áp dụng toàn quốc): Không cần làm gì, NPP đích đã được hưởng.

5/ Chương trình tích lũy

* Lấy danh sách tất cả CTTL đang hoạt động (trạng thái khác Hết hạn, Ngưng hoạt động, Từ chối duyệt và ngày kết thúc chương trình >= ngày hiện tại).
* Với mỗi CTTL, kiểm tra ĐTAD:

  + Nếu ĐTAD là NPP: Tự động gán thêm NPP đích vào danh sách NPP của CTTL. Nếu đã tồn tại NPP đích rồi thì bỏ qua.
  + Nếu ĐTAD là Vùng-Khu vực mà NPP đích thuộc vào: Không cần làm gì, NPP đích đã được hưởng.
  + Nếu CTTB không chọn ĐTAD (áp dụng toàn quốc): Không cần làm gì, NPP đích đã được hưởng.