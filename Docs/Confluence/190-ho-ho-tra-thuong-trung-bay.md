|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Theo dõi thông tin trả thưởng trưng bày,tình trạng trả thường tại điểm bán |
| Document version | RedV1.0.0  RedV1.0.1  18/2/25   * Thay thông tin nhân viên = Thông tin Tuyến bán hàng |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

Mục đích của việc **theo dõi thông tin trả thưởng trưng bày** và **tình trạng trả thưởng tại điểm bán** là:

✅ **Đảm bảo minh bạch**: Giám sát quá trình trả thưởng để tránh sai sót hoặc gian lận.  
✅ **Kiểm soát tiến độ**: Xác định điểm bán nào đã nhận thưởng, điểm nào chưa, từ đó có kế hoạch xử lý kịp thời.  
✅ **Hỗ trợ quản lý**: Cung cấp dữ liệu cho việc đánh giá hiệu quả chương trình khuyến mãi, tối ưu hóa chiến lược trong tương lai.  
✅ **Cải thiện trải nghiệm**: Đảm bảo điểm bán nhận thưởng đúng hạn, đúng số lượng, giúp duy trì quan hệ hợp tác tốt.

truenone

# Quy trình:

*Kết quả trả thưởng*

# Danh sách trả thưởng theo chương trình trưng bày

RedV1.0.1 Bỏ thông tin nhân viên - Thêm Mã - Tên tuyến bán hàng

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Truy vấn | | | | |
| Tìm kiếm | Textsearch | Có | Không | * **Nhập thông tin tìm kiếm**:    + Người dùng nhập **mã điểm bán** hoặc **tên điểm bán** vào trường tìm kiếm.   + Hệ thống tự động lọc và hiển thị các kết quả phù hợp với thông tin đã nhập.   + Placeholder: Tìm theo mã điểm bán, tên điểm bán * **Tìm kiếm theo từng tiêu chí**:    + **Mã điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần mã điểm bán để tìm kiếm. → Nhập enter     - Hệ thống sẽ hiển thị tất cả các mục có mã điểm bán chứa chuỗi ký tự được nhập.   + **Tên điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần tên điểm bán để tìm kiếm.→ Nhập enter     - Hệ thống sẽ hiển thị các mục có tên điểm bán khớp với chuỗi ký tự nhập vào. * **Kết quả tìm kiếm**: Nhấn "Tìm kiếm"    + Danh sách trả thưởng CTTB của điểm bán đã nhập sẽ hiển thị bên dưới lưới   + Nếu không tìm thấy kết quả khớp, hệ thống sẽ hiển thị *lưới danh sách rỗng* * **Xóa tìm kiếm**:    + Người dùng có thể xóa nội dung trong trường tìm kiếm  và nhấn "Tìm kiếm" để hiển thị lại toàn bộ Trả thưởng trưng bày theo bộ lọc mặc định |
| RedV1.0.1  Tuyến bán hàng V1.0.1 | Select Onechoice | Có | Không | * **Mục đích**: Cho phép người dùng lọc kết quả trả thưởng CTTB dựa trên tuyến bán hàng * Placeholder: Tuyến bán hàng * **Hành vi của trường chọn**:   + **Mở danh sách**: Khi nhấp vào trường "Tuyến bán hàng", danh sách các tuyến bán hàng đang active từ master sẽ xuất hiện.   + **Tìm kiếm và chọn**:     - Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa (theo mã  hoặc tên tuyến bán hàng) để tìm kiếm tuyến bán hàng mong muốn.     - Nhấp vào tên - mã tuyến để chọn.   + **Hiển thị lựa chọn**: Mã - Tên tuyến bán hàng được chọn sẽ hiển thị trong trường.   + **Kết quả lọc**: Nhấn "Tìm kiếm"  kết quả trả thưởng CTTB bên dưới sẽ tự động lọc chỉ hiển thị dữ liệu liên quan đến tuyến được chọn.   + **Xóa lựa chọn**:     - Người dùng có thể bỏ chọn tuyến bằng cách nhấp lại vào mục đã chọn. Nhấn x     - Nếu bỏ chọn toàn bộ, hệ thống sẽ mặc định hiển thị tất cả |
| Chương trình trưng bày | Select Onechoice | Có | Không | * **Mục đích**: Lọc Trả thưởng trưng bày theo chương trình trưng bày cụ thể. * Placeholder: Chương trình trưng bày * **Hành vi của trường chọn**:   + **Mở danh sách**: Hiển thị danh sách các chương trình trưng bày (tất cả trạng thái trừ khởi tạo)   + **Tìm kiếm và chọn**:     - Cuộn hoặc nhập từ khóa để tìm kiếm chương trình trưng bày mong muốn.     - Chọn chương trình bằng cách nhấp vào mục tương ứng.   + **Hiển thị lựa chọn**: Chương trình được chọn sẽ hiển thị trong hộp chọn.   + **Kết quả lọc**: Nhấn "Tìm kiếm". Danh sách bên dưới sẽ tự động hiển thị các Trả thưởng trưng bày của điểm bán liên quan đến chương trình đã chọn.   + **Xóa lựa chọn**:     - Bỏ chọn chương trình bằng cách nhấp lại.     - Nếu không chọn chương trình nào, danh sách sẽ hiển thị tất cả các chương trình trưng bày. |
| Loại chương trình | Selectbox one choice | Có | Không | **Mô tả:**  Field **"Loại chương trình"** là một trường dạng **SelectOneChoice**, cho phép người dùng lựa chọn một loại chương trình cụ thể để phân loại và quản lý các chương trình trong hệ thống.  **Mở danh sách**:   * Khi người dùng click vào field "Loại chương trình trưng bày", danh sách lựa chọn sẽ hiển thị (dưới dạng dropdown)   **Chọn loại chương trình**:   * Người dùng có thể chọn 1 trong 2 loại: **Merchant** hoặc **Saleman**.   **Hiển thị lựa chọn**: Điều kiện đã chọn sẽ hiển thị trong hộp chọn  dạng text  **Xóa lựa chọn**:   * Người dùng có thể xóa loại chương trình đã chọn. * Khi xóa hết lựa chọn, hệ thống sẽ hiển thị **tất cả các chương trình** (Merchant + Saleman).   **Kết quả lọc**: Lọc danh sách CTTB  khi Nhấn Tìm Kiếm  **Lưu ý khi sử dụng:**   * **Loại field:**    + SelectOneChoice – Người dùng chỉ được phép chọn **một giá trị duy nhất** tại một thời điểm. * **Giao diện hiển thị:**    + Placeholder: Loại chương trình |
| Hình thức trả thưởng | Select Onechoice | Có | Không | **Placeholder**: "Hình thức trả thưởng" (Default: Không chọn, hiển thị tất cả).  **Hành vi của trường chọn**:   1. **Mở danh sách**:     * Khi nhấp vào trường "Hình thức trả thưởng", danh sách gồm hai lựa chọn sẽ hiển thị:      + **Theo kỳ**      + **Theo chương trình** 2. **Tìm kiếm và chọn**:     * Người dùng có thể:      + Cuộn qua danh sách để tìm lựa chọn.      + Nhập từ khóa ("Theo Kỳ" hoặc "Theo chương trình") để tìm kiếm nhanh. 3. **Hiển thị lựa chọn**:     * Sau khi chọn, hình thức trả thưởng đã chọn sẽ hiển thị trong trường 4. **Kết quả lọc**:     * Người dùng nhấn nút **"Tìm kiếm"**, danh sách Trả thưởng Trưng Bày sẽ được lọc:      + **Theo kỳ**: Chỉ hiển thị các Trả thưởng có hình thức trả thưởng là theo kỳ.      + **Theo chương trình**: Chỉ hiển thị các Trả thưởng có hình thức trả thưởng là theo chương trình. 5. **Xóa lựa chọn**:     * Người dùng có thể nhấp vào biểu tượng xóa hoặc bỏ chọn bằng cách chọn lại.    * Nếu không chọn bất kỳ loại chương trình nào, danh sách sẽ hiển thị "Placeholder" - hiểu là tất cả các hình thức trả thưởng |
| Loại phần thưởng | Select Onechoice | Có | Không | **Placeholder**: "Loại phần thưởng" (Default: Không chọn, hiển thị tất cả).  **Hành vi của trường chọn**:   1. **Mở danh sách**:     * Khi nhấp vào trường "Loại phần thưởng", danh sách gồm hai lựa chọn sẽ hiển thị:      + **Thưởng tiền**      + **Quà tặng** 2. **Tìm kiếm và chọn**:     * Người dùng có thể:      + Cuộn qua danh sách để tìm lựa chọn.      + Nhập từ khóa để tìm kiếm nhanh. 3. **Hiển thị lựa chọn**:     * Sau khi chọn, Loại phần thưởng đã chọn sẽ hiển thị trong trường 4. **Kết quả lọc**:     * Người dùng nhấn nút **"Tìm kiếm"**, danh sách Trả thưởng Trưng Bày sẽ được lọc theo Loại phần thưởng tương ứng. 5. **Xóa lựa chọn**:     * Người dùng có thể nhấp vào biểu tượng xóa hoặc bỏ chọn bằng cách chọn lại.    * Nếu không chọn bất kỳ loại chương trình nào, danh sách sẽ hiển thị "Placeholder" - hiểu là tất cả các Loại phần thưởng |
| Kết quả trả thưởng | Select Onechoice | Có | Không | **Kết quả trả thưởng**  **Mục đích**: Cho phép người dùng lọc Trả thưởng trưng bày của kỳ dựa trên Kết quả trả thưởng,  **Danh sách kết quả**:   * Chờ trả thưởng * Đã trả thưởng * Từ chối * Hết hạn   **Placeholder**: "Kết quả trả thưởng" (Mặc định là tất cả kết quả)  **Hành vi của trường chọn**:   1. **Mở danh sách**: Khi người dùng nhấp vào trường "Kết quả trả thưởng", danh sách các Kết quả trả thưởng sẽ hiện ra 2. **Tìm kiếm và chọn**:     * Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa để tìm kiếm Kết quả trả thưởng mong muốn.    * Sau khi chọn, Kết quả trả thưởng sẽ được hiển thị trong trường. 3. **Không bắt buộc chọn Kết quả trả thưởng**:     * Trường này không yêu cầu người dùng phải chọn Kết quả trả thưởng. Nếu không chọn kết quả nào, hệ thống sẽ hiểu là người dùng muốn lọc theo **tất cả các Kết quả trả thưởng**.   **Hiển thị lựa chọn**:   * Kết quả trả thưởng đã chọn sẽ hiển thị trong trường dưới dạng văn bản (text).   **Kết quả lọc**:   * Sau khi nhấn "Tìm kiếm", hệ thống sẽ tự động lọc và hiển thị Trả thưởng trưng bày dựa trên Kết quả trả thưởng đã chọn   **Xóa lựa chọn**:   * Người dùng có thể nhấp vào biểu tượng xóa (x) để bỏ chọn Kết quả trả thưởng hiện tại. * Nếu người dùng nhấp lại vào kết quả đã chọn trong danh sách, hệ thống sẽ bỏ chọn kết quả đó. Khi không có Kết quả trả thưởng nào được chọn, hệ thống sẽ mặc định hiểu là **tất cả các Kết quả trả thưởng**.   **Màn hình mặc định**:   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả kết quả. * Khi mở màn hình mặc định hiển thị tất cả |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Trả thưởng trưng bày, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái default của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các Trả thưởng trưng bày mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Trả thưởng trưng bày 2. **Danh sách Trả thưởng trưng bày làm mới:** Sau khi nhấp, danh sách Trả thưởng trưng bày sẽ hiển thị toàn bộ các Trả thưởng trưng bày hiện có theo bộ lọc default   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Trả thưởng trưng bày. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách Trả thưởng trưng bày. không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Trả thưởng trưng bày theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Trả thưởng trưng bày. 3. **Hiển thị kết quả:** Danh sách Trả thưởng trưng bày sẽ cập nhật và hiển thị các Trả thưởng trưng bày phù hợp với các tiêu chí đã chọn.     1. Dựa vào mã kỳ và mã CTTB để order các phiếu trả thưởng có ngày chấm trưng bày gần hiện tại lên đầu   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Trả thưởng trưng bày sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Lưới danh sách** | | | | |
| | **Tên trường** | **Loại dữ liệu** | **Cho phép thao tác** | Mô tả | | --- | --- | --- | --- | | Mã trả thưởng | Datacolumns have copy | Không | **Cơ chế sinh mã**:   * Hệ thống kiểm tra điều kiện trả thưởng. * Nếu điều kiện hợp lệ   + Hình thức trả thưởng = Theo kỳ => **kết quả kỳ = Đạt** => hệ thống tự động sinh mã vào ngày trả thưởng của kỳ   + Hình thức trả thưởng = Theo chương trình => Kết quả tất cả các kỳ = Đạt => hệ thống tự động sinh mã vào ngày trả thưởng của chương trình * Mã trả thưởng duy nhất cho từng lần đủ điều kiện nhận thưởng.   Mã trả thưởng: Refix TT+ xxxxxxxxxx: Dãy số ngẫu nhiên gồm 10 chữ số.   * Ví dụ mã trả thưởng: **TT1234567890** * Trong đó:   + **"TT"**: Ký hiệu cố định của mã trả thưởng.   + **"1234567890"**: Dãy số ngẫu nhiên gồm 10 chữ số. | | Mã kỳ | Datacolumns have copy | Không | Chỉ Hiển thị mã kỳ với Hình thức trả thưởng = Theo kỳ | | Tên kỳ | Datacolumns | Không | Tên kỳ hiển thị theo mã kỳ | | Mã điểm bán | Datacolumns have copy | Không | Mã định danh của điểm bán | | Tên điểm bán | Datacolumns | Không | Tên của điểm bán | | Số điện thoại điểm bán | Datacolumns | Không | Số điện thoại liên hệ của điểm bán | | Tỉnh/Thành phố | Datacolumns | Không | Tên tỉnh hoặc thành phố | | Địa chỉ | Datacolumns | Không | Địa chỉ chi tiết của điểm bán | | Mã chương trình trưng bày | Datacolumns have copy - Hyperlink | Không | Mã định danh của chương trình  Click hyperlink:  "Chi tiết chương trình trưng bày" (xem bên dưới) | | Tên chương trình trưng bày | Datacolumns | Không | Tên chương trình trưng bày | | Loại chương trình | Datacolumns | Không | Hiển thị loại chương trình saleman/ merchant | | Hạn mức đăng ký | Datacolumns | Không | Hạn mức đã đăng ký của điểm bán | | Số suất đăng ký | Datacolumns | Không | Số suất đã được đăng ký của điểm bán | | Hình thức trả thưởng | Datacolumns | Không | Hiển thị Hình thức trả thưởng theo kỳ/ theo chương trình | | Loại phần thưởng | Datacolumns | Không | Hiển thị loại phần thưởng | | Phần thưởng | Datacolumns | Không | Hiển thị số tiền với loại phần thưởng = Thưởng tiền  Loại phần thưởng = Quà tặng hiển thị *"Chi tiết"*   * Click *"Chi tiết"* để xem popup chi tiết Chi tiết trả thưởng (xem bên dưới) | | Kết quả trả thưởng | Datacolumns   - Tag | Không | Bao gồm 4 kết quả   * **Chờ trả thưởng**    + Điều kiện:  * + - Mỗi mã trả thưởng gen ra tương ứng với trạng thái default = Chờ nhận thưởng     - Trạng thái mặc định: Chờ nhận thưởng.     - Thời gian hiện tại ≤ Ngày kết thúc trả thưởng.   + Ý nghĩa:     - Đây là trạng thái ban đầu của phần thưởng.     - Chưa có thao tác xử lý (tạo đơn hàng hoặc thao tác trả thưởng).     - Người nhận có thể thực hiện các hành động chuyển trạng thái đã trả thưởng manual  * **Đã trả thưởng:**  * + Khi thực hiện Cập nhật trả thưởng => Kết quả trả thưởng = Đã trả thưởng   + Ý nghĩa:     - Phần thưởng đã được xử lý và giao đến người nhận * **Từ chối:** Phần thưởng có thao tác Từ chối => trạng thái trả thưởng = Từ chối * **Hết hạn:** Phần thưởng chưa có thao tác trả thưởng/ từ chối và có ngày hiện tại > Ngày kết thúc trả thưởng.   + Đối với trạng thái này vẫn cho thao tác Trả thưởng/ từ chối bình thường và cập nhật trạng thái tương ứng (Tức là cho phép trả thưởng/ Từ chối khi hết hạn) | | RedV1.0.1Mã tuyến | Datacolumns have copy | Không | Mã tuyến bán hàng | | RedV1.0.1Tên tuyến | Datacolumns | Không | Tên của tuyến | | Ngày bắt đầu trả thưởng | Datacolumns | Không | Ngày bắt đầu của chương trình (dd-mm-yyy) | | Ngày kết thúc trả thưởng | Datacolumns | Không | Ngày kết thúc của chương trình (dd-mm-yyy) | | Mã đơn hàng | Datacolumns | Không | Hiển thị Mã đơn hàng khi Khi saleman thực hiện tạo đơn hàng trả thưởng cho điểm bán thỏa điều kiện trả thưởng  Mã đơn hàng NULL khi trong giai đoạn này | | Ngày đơn hàng | Datacolumns | Không | Hiển thị ngày đơn hàng (dd-mm-yyyy hh:mm:ss)  Ngày đơn hàng hiển thị theo mã đơn hàng | | Lý do từ chối | Datacolumns | Không | Hiển thị lý do từ chối trả thưởng đã nhập | | Người cập nhật | Datacolumns | Không | Mã nhân viên người thực hiện cập nhật | | Thời gian cập nhật | Datacolumns | Không | Thời điểm cuối cùng cập nhật dữ liệu (dd-mm-yyy hh:mm:ss) | | Tùy chỉnh | icon button | Có | Tooltip: Trả thưởng cho phép cập nhật kết quả trả thưởng là Đã nhận thưởng  Onclick cho phép cập nhật trạng thái thanh toán thành Đã nhận thưởng, hiển thị popup default check radio Trả thưởng      Bao gồm 2 thao tác:   * Trả thưởng: Onclick hiển thị popup default check radio Trả thưởng;   + Chọn Cập nhật: Update kết quả trả thưởng = Đã trả thưởng   + Chọn Đóng: đóng popup và không thay đổi dữ liệu; về màn hình danh sách trả thưởng * Từ chối: chọn radio Từ chối    + Placeholder: Lý do từ chối   + Nhập lý do từ chối     - Lý do từ chối validate <= 100 ký tự text     - Bắt buộc nhập lý do;     - Nhập vượt: ko lấy ký tự nhập vượt     - Không nhập: @field là bắt buộc!   + Chọn Cập nhật: Update kết quả trả thưởng = "Từ chối"; Lý do từ chối = giá trị đã nhập   + Chọn Đóng: đóng popup và không thay đổi dữ liệu; về màn hình danh sách trả thưởng   Thực hiện đồng thời 2 action: hiển thị msg: "Mã trả thưởng đã có trạng thái Đã trả thưởng/ Từ chối/ Hết hạn . Vui lòng kiểm tra lại!" | | | | | |
| Export | Button | Có | Không | Xem mô tả chức năng bên dưới |
| Import | Button | Có | Không | Xem mô tả chức năng bên dưới |

### Chi tiết chương trình trưng bày

Click hyperlink để xem chi tiết CTTB theo nội dung đã mô tả [Xem chi tiết chương trình trưng bày](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028751#id-[HO]Ti%E1%BA%BFntr%C3%ACnhtr%C6%B0ngb%C3%A0y-Xemchiti%E1%BA%BFtch%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y)

### Chi tiết trả thưởng

Click hyperlink *"Chi tiết"* hiển thị popup dạng lưới danh sách sản phẩm,

**Label: "Chi tiết trả thưởng"**

Chọn x để đóng popup

Hiển thị phân trang sản phẩm

Mô tả lưới danh sách sản phẩm trả thưởng:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| **Kết quả trả thưởng** | Label |  |  |  |
| Mã sản phẩm | Datacolumns | Không |  | Hiển thị mã quà tặng theo mã CTTB, lấy từ [Tab Điều kiện chấm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028751#id-[HO]Ti%E1%BA%BFntr%C3%ACnhtr%C6%B0ngb%C3%A0y-Tab%C4%90i%E1%BB%81uki%E1%BB%87nch%E1%BA%A5m) **- Phần thưởng** |
| Tên sản phẩm | Datacolumns | Không |  | Hiển thị tên sản phẩm theo mã sản phẩm |
| Đơn vị | Datacolumns | Không |  | Hiển thị đơn vị cơ bản theo mã sản phẩm |
| Số lượng | Datacolumns | Không |  | Hiển thị số lượng sản phẩm tương ứng lấy từ tiến trình trưng bày [Tab Điều kiện chấm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028751#id-[HO]Ti%E1%BA%BFntr%C3%ACnhtr%C6%B0ngb%C3%A0y-Tab%C4%90i%E1%BB%81uki%E1%BB%87nch%E1%BA%A5m) **- Phần thưởng** |

# Export

Button cho phép export các kết quả trả thưởng trưng bày theo [rule Export](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO)đã mô tả

Mục đích: Cung cấp chức năng xuất danh sách các kết quả trả thưởng trưng bày (CTTB) ra file để lưu trữ, phân tích, hoặc chia sẻ. Tính năng này giúp người dùng dễ dàng xử lý dữ liệu ngoài hệ thống.

Click button Export hiển thị popup:

default check chọn radio "Danh sách nhận thưởng"

Chọn "Đồng ý" để export danh sách

Chọn Hủy, tắt popup và không tải file export về thiết bị

Template:

Mô tả: 

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Người xuất báo cáo: | FVCUS0914588981 - Thảo BA | | | | | | | | | | | | | | | | | |
| Thời gian xuất báo cáo: | 08/12/2024 - 07:16:08 | | | | | | | | | | | | | | | | | |
| Dữ liệu theo thời gian: | Từ ngày 01/12/2024 đến ngày 21/12/2024 | | | | | | | | | | | | | | | | | |

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Mã trả thưởng | Datacolumns | Hiển thị mã trả thưởng |
| Mã kỳ | Datacolumns | Chỉ Hiển thị mã kỳ với Hình thức trả thưởng = Theo kỳ |
| Tên kỳ | Datacolumns | Tên kỳ hiển thị theo mã kỳ |
| Mã điểm bán | Datacolumns | Hiển thị Mã điểm bán |
| Tên điểm bán | Datacolumns | Hiển thị Tên điểm bán |
| Số điện thoại điểm bán | Datacolumns | Hiển thị Số điện thoại điểm bán |
| Tỉnh/Thành phố | Datacolumns | Hiển thị Tỉnh/Thành phố |
| Địa chỉ | Datacolumns | Hiển thị Địa chỉ |
| Mã chương trình | Datacolumns | Hiển thị Hiển thị Mã chương trình |
| Tên chương trình | Datacolumns | Hiển thị Tên chương trình |
| Loại chương trình | Datacolumns | Hiển thị Loại chương trình |
| Hạn mức đăng ký | Datacolumns | Hiển thị Hạn mức đăng ký |
| Số suất đăng ký | Datacolumns | Hiển thị Số suất đăng ký |
| Hình thức trả thưởng | Datacolumns | Hiển thị Hình thức trả thưởng |
| Loại phần thưởng | Datacolumns | Hiển thị Loại phần thưởng |
| Phần thưởng | Datacolumns | Hiển thị số tiền với loại phần thưởng = Tiền thưởng  Null với loại phần thưởng = Quà tặng |
| Mã sản phẩm | Datacolumns | Hiển thị Mã sản phẩm với loại phần thưởng = Quà tặng |
| Tên sản phẩm | Datacolumns | Hiển thị Tên sản phẩm với loại phần thưởng = Quà tặng |
| Đơn vị | Datacolumns | Hiển thị Đơn vị với loại phần thưởng = Quà tặng |
| Số lượng | Datacolumns | Hiển thị Số lượng với loại phần thưởng = Quà tặng |
| Kết quả trả thưởng | Datacolumns | Hiển thị Kết quả trả thưởng |
| RedV1.0.1  Mã tuyến | Datacolumns | Hiển thị Mã tuyến bán hàng |
| RedV1.0.1  Tên tuyến | Datacolumns | Hiển thị Tên tuyến bán hàng |
| Ngày bắt đầu trả thưởng | Datacolumns | Hiển thị Ngày bắt đầu trả thưởng |
| Ngày kết thúc trả thưởng | Datacolumns | Hiển thị Ngày kết thúc trả thưởng |
| Mã đơn hàng | Datacolumns | Hiển thị Mã đơn hàng khi thực hiện trả thưởng trên đơn hàng trên appsaleman  Mã đơn hàng NULL khi thực hiện Trả thưởng manual trên portal |
| Ngày đơn hàng | Datacolumns | Hiển thị Ngày đơn hàng theo mã đơn hàng |
| Lý do từ chối | Datacolumns | Hiển thị Lý do từ chối |
| Người cập nhật | Datacolumns | Hiển thị Người cập nhật |
| Ngày cập nhật | Datacolumns | Hiển thị Ngày cập nhật |

# Import

**1/ Chọn button Import, hiển thị màn hình import như hình**

**2/ Người dùng thực hiện import:**

* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc Kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống: Hiển thị thông báo: "Bạn chắc chắn thao tác này không?"

* + Đồng ý: Chạy tiến trình xử lý, kiểm tra dữ liệu inport từ file
  + Hủy: Đóng cảnh báo và giữ nguyên trạng thái import

**3/ Ràng buộc chung:**

* Áp dụng cho những phiếu trả thưởng có kết quả trả thưởng = "Chờ trả thưởng"

=> [Import theo rule chung](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode)của hệ thống

**Button: "Lấy file mẫu" : cho phép export file excel mẫu**

**Template:**

**Quy trình Import:**

trueImport trả thưởngfalseautotoptrue14531

trueKiểm tra cơ bản trả thưởngfalseautotoptrue6911

**Kiểm tra dữ liệu:**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã trả thưởng (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập Mã trả thưởng trưng bày | * **Mã trả thưởng**để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Mã trả thưởng nhập không đúng định dạng / bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã trả thưởng**không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi   + Dòng n: Mã trả thưởng không tồn tại / không hoạt động. Vui lòng kiểm tra lại! * **Mã trả thưởng** tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi   + Dòng n: Mã trả thưởng bán trùng với dòng n1 vui lòng kiểm tra lại! * Mã trả thưởng có kết quả trả thưởng = Từ chối/ Đã trả thưởng   + Dòng n: Mã trả thưởng đã có kết quả Đã trả thưởng/Từ chối. Vui lòng kiểm tra lại! |
| 2 | Action (\*) | 1. Trả thưởng 2. Từ chối | Nhập 1 hoặc 2;   * Không đúng định dạng: nhập tiếng việt, số khác 1 / 2, ký tự đặc biệt, hoặc bỏ trống | * **Action** để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Mã trả thưởng nhập action không đúng định dạng / bị bỏ trống. Vui lòng kiểm tra lại! |
| 3 | Lý do từ chối | Text (100) | * Nhập lý do từ chối, validate 100 ký tự, bắt buộc phải nhập lý do | * Nếu không nhập/ nhập >100 ký tự:   + Dòng n: Lý do từ chối chưa hợp lệ. Vui lòng kiểm tra lại! |

Thông báo lỗi theo rule chung đã define cho các màn hình trước đây

* hiển thị lỗi theo từng dòng
* có phân trang hiển thị
* hiển thị tất cả các lỗi