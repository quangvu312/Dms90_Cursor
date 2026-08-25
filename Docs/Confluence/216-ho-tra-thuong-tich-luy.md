|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Theo dõi thông tin trả thưởng tích lũy, tình trạng trả thường tại điểm bán |
| Document version | RedV2.0.0 Khởi tạo  RedV2.0.1 14/5/25: Thiếu 1 case check đơn hàng tại popup nhập mã đơn hàng manual (Bổ sung giống import)  RedV2.0.2  8/7/25:   * Bỏ check trùng đơn hàng trên cùng 1 CTTB với nhiều phiếu trả thưởng   **RedV2.1.0Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ** |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

Mục đích của việc **theo dõi thông tin trả thưởng tích lũy** và **tình trạng trả thưởng tại điểm bán** là:

✅ **Đảm bảo minh bạch**: Giám sát quá trình trả thưởng để tránh sai sót hoặc gian lận.  
✅ **Kiểm soát tiến độ**: Xác định điểm bán nào đã nhận thưởng, điểm nào chưa, từ đó có kế hoạch xử lý kịp thời.  
✅ **Hỗ trợ quản lý**: Cung cấp dữ liệu cho việc đánh giá hiệu quả chương trình tối ưu hóa chiến lược trong tương lai.  
✅ **Cải thiện trải nghiệm**: Đảm bảo điểm bán nhận thưởng đúng hạn, đúng số lượng, giúp duy trì quan hệ hợp tác tốt.

truenone

# Quy trình:

*Trạng thái trả thưởng*

# Danh sách trả thưởng tích lũy

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Truy vấn | | | | |
| Tìm kiếm | Textsearch | Có | Không | * **Nhập thông tin tìm kiếm**:    + Người dùng nhập **mã điểm bán** hoặc **tên điểm bán** vào trường tìm kiếm.   + Hệ thống tự động lọc và hiển thị các kết quả phù hợp với thông tin đã nhập.   + Placeholder và tooltip:: Tìm theo mã điểm bán, tên điểm bán * **Tìm kiếm theo từng tiêu chí**:    + **Mã điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần mã điểm bán để tìm kiếm. → Nhập enter     - Hệ thống sẽ hiển thị tất cả các mục có mã điểm bán chứa chuỗi ký tự được nhập.   + **Tên điểm bán**:     - Người dùng có thể nhập toàn bộ hoặc một phần tên điểm bán để tìm kiếm.→ Nhập enter     - Hệ thống sẽ hiển thị các mục có tên điểm bán khớp với chuỗi ký tự nhập vào. * **Kết quả tìm kiếm**: Nhấn "Tìm kiếm"    + Danh sách trả thưởng CTTL của điểm bán đã nhập sẽ hiển thị bên dưới lưới   + Nếu không tìm thấy kết quả khớp, hệ thống sẽ hiển thị *lưới danh sách rỗng* * **Xóa tìm kiếm**:    + Người dùng có thể xóa nội dung trong trường tìm kiếm  và nhấn "Tìm kiếm" để hiển thị lại toàn bộ trả thưởng tích lũy theo bộ lọc mặc định |
| Tuyến bán hàng | Select Onechoice | Có | Không | * **Mục đích**: Cho phép người dùng lọc Trạng thái trả thưởng CTTL dựa trên tuyến bán hàng * Placeholder: Chọn tuyến bán hàng * **Hành vi của trường chọn**:   + **Mở danh sách**: Khi nhấp vào trường "Tuyến bán hàng", danh sách các tuyến bán hàng đang active từ master sẽ xuất hiện.   + **Tìm kiếm và chọn**:     - Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa (theo mã  hoặc tên tuyến bán hàng) để tìm kiếm tuyến bán hàng mong muốn.     - Nhấp vào tên - mã tuyến để chọn.   + **Hiển thị lựa chọn**: Mã - Tên tuyến bán hàng được chọn sẽ hiển thị trong trường.   + **Kết quả lọc**: Nhấn "Tìm kiếm"  Trạng thái trả thưởng CTTL bên dưới sẽ tự động lọc chỉ hiển thị dữ liệu liên quan đến tuyến được chọn.   + **Xóa lựa chọn**:     - Người dùng có thể bỏ chọn tuyến bằng cách nhấn x     - Nếu bỏ chọn toàn bộ, hệ thống sẽ mặc định hiển thị tất cả |
| Chương trình tích lũy | Select Onechoice | Có | Không | * **Mục đích**: Lọc trả thưởng tích lũy theo chương trình tích lũy cụ thể. * Placeholder: Chọn chương trình tích lũy * **Hành vi của trường chọn**:   + **Mở danh sách**: Hiển thị danh sách các chương trình tích lũy (tất cả trạng thái trừ: khởi tạo, hết hạn duyệt chương trình tích lũy, sắp diễn ra)   + **Tìm kiếm và chọn**:     - Cuộn hoặc nhập từ khóa để tìm kiếm chương trình tích lũy mong muốn.     - Chọn chương trình bằng cách nhấp vào mục tương ứng.   + **Hiển thị lựa chọn**: Chương trình được chọn sẽ hiển thị trong hộp chọn.   + **Kết quả lọc**: Nhấn "Tìm kiếm". Danh sách bên dưới sẽ tự động hiển thị các trả thưởng tích lũy của điểm bán liên quan đến chương trình đã chọn.   + **Xóa lựa chọn**:     - Bỏ chọn chương trình bằng cách nhấn x     - Nếu không chọn chương trình nào, danh sách sẽ hiển thị tất cả các chương trình tích lũy. |
| Hình thức trả thưởng | Select Onechoice | Có | Không | **Placeholder**: "Chọn hình thức trả thưởng" (Default: Không chọn, hiển thị tất cả).  **Hành vi của trường chọn**:   1. **Mở danh sách**:     * Khi nhấp vào trường "Hình thức trả thưởng", danh sách gồm hai lựa chọn sẽ hiển thị:      + **Theo giai đoạn**      + **Theo chương trình** 2. **Tìm kiếm và chọn**:     * Người dùng có thể:      + Cuộn qua danh sách để tìm lựa chọn.      + Nhập từ khóa ("Theo giai đoạn" hoặc "Theo chương trình") để tìm kiếm nhanh. 3. **Hiển thị lựa chọn**:     * Sau khi chọn, hình thức trả thưởng đã chọn sẽ hiển thị trong trường 4. **Kết quả lọc**:     * Người dùng nhấn nút **"Tìm kiếm"**, danh sách trả thưởng tích lũy sẽ được lọc:      + **Theo giai đoạn** Chỉ hiển thị các Trả thưởng có hình thức trả thưởng là theo giai đoạn.      + **Theo chương trình**: Chỉ hiển thị các Trả thưởng có hình thức trả thưởng là theo chương trình. 5. **Xóa lựa chọn**:     * Người dùng có thể nhấp vào biểu tượng xóa hoặc bỏ chọn bằng cách chọn lại.    * Nếu không chọn bất kỳ loại chương trình nào, danh sách sẽ hiển thị "Placeholder" - hiểu là tất cả các hình thức trả thưởng |
| Phần thưởng | Select Onechoice | Có | Không | **Placeholder**: "Chọn phần thưởng" (Default: Không chọn, hiển thị tất cả).  **Hành vi của trường chọn**:   1. **Mở danh sách**:     * Khi nhấp vào trường "Phần thưởng", danh sách gồm hai lựa chọn sẽ hiển thị:      + **Tiền thưởng**      + **Quà tặng**      + **Chiết khấu %** 2. **Tìm kiếm và chọn**:     * Người dùng có thể:      + Cuộn qua danh sách để tìm lựa chọn.      + Nhập từ khóa để tìm kiếm nhanh. 3. **Hiển thị lựa chọn**:     * Sau khi chọn, Phần thưởng đã chọn sẽ hiển thị trong trường 4. **Kết quả lọc**:     * Người dùng nhấn nút **"Tìm kiếm"**, danh sách trả thưởng tích lũy sẽ được lọc theo Phần thưởng tương ứng. 5. **Xóa lựa chọn**:     * Người dùng có thể nhấp vào biểu tượng xóa hoặc bỏ chọn bằng cách chọn lại.    * Nếu không chọn bất kỳ loại chương trình nào, danh sách sẽ hiển thị "Placeholder" - hiểu là tất cả các Phần thưởng |
| Trạng thái trả thưởng | Select Onechoice | Có | Không | **trạng thái trả thưởng**  **Mục đích**: Cho phép người dùng lọc trả thưởng tích lũy của kỳ dựa trên Trạng thái trả thưởng,  **Danh sách kết quả**:   * Chờ trả thưởng * Đã trả thưởng * Từ chối trả thưởng * Hết hạn trả thưởng   **Placeholder**: "Chọn trạng thái trả thưởng" (Mặc định là tất cả kết quả)  **Hành vi của trường chọn**:   1. **Mở danh sách**: Khi người dùng nhấp vào trường "Trạng thái trả thưởng", danh sách các Trạng thái trả thưởng sẽ hiện ra 2. **Tìm kiếm và chọn**:     * Người dùng có thể cuộn qua danh sách hoặc nhập từ khóa để tìm kiếm Trạng thái trả thưởng mong muốn.    * Sau khi chọn, Trạng thái trả thưởng sẽ được hiển thị trong trường. 3. **Không bắt buộc chọn Trạng thái trả thưởng**:     * Trường này không yêu cầu người dùng phải chọn trạng thái trả thưởng. Nếu không chọn kết quả nào, hệ thống sẽ hiểu là người dùng muốn lọc theo **tất cả các trạng thái trả thưởng**.   **Hiển thị lựa chọn**:   * Trạng thái trả thưởng đã chọn sẽ hiển thị trong trường dưới dạng văn bản (text).   **Kết quả lọc**:   * Sau khi nhấn "Tìm kiếm", hệ thống sẽ tự động lọc và hiển thị trả thưởng tích lũy dựa trên Trạng thái trả thưởng đã chọn   **Xóa lựa chọn**:   * Người dùng có thể nhấp vào biểu tượng xóa (x) để bỏ chọn Trạng thái trả thưởng hiện tại. * Khi không có Trạng thái trả thưởng nào được chọn, hệ thống sẽ mặc định hiểu là **tất cả các Trạng thái trả thưởng**.   **Màn hình mặc định**:   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả kết quả. * Khi mở màn hình mặc định hiển thị tất cả |
| Thời gian trả thưởng | Date | Có | Không | **Chức năng:**  **Placeholder: Từ ngày → Đến ngày**   * Default hiển thị tháng hiện tại. * Trường này cho phép người dùng lọc trả thưởng chương trình tích lũy theo khoảng thời gian nhất định, dựa trên Thời gian trả thưởng * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các danh sách các trả thưởng thuộc khoảng thời gian đã chọn  * Phải chọn cả từ ngày - đến ngày; Không chọn hiểu là mặc định * Nhấn Tìm Kiếm --> Mới hiển thị danh sách trả thưởng tích lũy trong khoảng thời gian đã chọn   **Cách sử dụng:**  **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu.  **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc.  **Hiển thị kết quả: Nhấn "Tìm kiếm". hiển thị danh sách trả thưởng tích lũy trong khoảng thời gian đã chọn**  **Xóa:**   * Nhấn x hoặc chọn xóa các ngày đã chọn * Sau khi xóa hiển thị Placeholder   Ví dụ:     * **Từ ngày (From Date)**: **01/01/2025** * **Đến ngày (To Date)**: **15/01/2025**  | Thời gian trả thưởng | Kết quả | | --- | --- | | 05/01/2025 - 10/01/2025 | **hiển thị** | | 10/01/2025 - 15/01/2025 | **hiển thị** | | 28/12/2024 - 05/01/2025 | **hiển thị** | | 10/01/2025 - 20/01/2025 | **hiển thị** | | 20/12/2024 - 30/12/2024 | **Không hiển thị** | | 16/01/2025 - 20/01/2025 | **Không hiển thị** | | 01/01/2025 - 15/01/2025 | **hiển thị** | |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách trả thưởng tích lũy, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái default của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các trả thưởng tích lũy mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách trả thưởng tích lũy 2. **Danh sách trả thưởng tích lũy làm mới:** Sau khi nhấp, danh sách trả thưởng tích lũy sẽ hiển thị toàn bộ các trả thưởng tích lũy hiện có theo bộ lọc default   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách trả thưởng tích lũy. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách trả thưởng tích lũy. không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách trả thưởng tích lũy theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách trả thưởng tích lũy. 3. **Hiển thị kết quả:** Danh sách trả thưởng tích lũy sẽ cập nhật và hiển thị các trả thưởng tích lũy phù hợp với các tiêu chí đã chọn.     1. Sort hiển thị các phiếu trả thưởng có ngày cập nhật gần hiện tại lên đầu   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách trả thưởng tích lũy sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Lưới danh sách** | | | | |
| | **Tên trường** | **Loại dữ liệu** | **Cho phép thao tác** | Mô tả | | --- | --- | --- | --- | | Mã trả thưởng | Datacolumns have copy | Không | **Cơ chế sinh mã**:   * Hệ thống kiểm tra điều kiện trả thưởng. * Nếu điều kiện hợp lệ   + Hình thức trả thưởng = Theo giai đoạn=> K**ết quả giai đoạn = Đạt** => hệ thống tự động sinh mã vào ngày trả thưởng của giai đoạn   + Hình thức trả thưởng = Theo chương trình => Kết quả tất cả các giai đoạn = Đạt => hệ thống tự động sinh mã vào ngày trả thưởng của chương trình * Mã trả thưởng duy nhất cho từng lần đủ điều kiện nhận thưởng.   Mã trả thưởng: Refix REWARD+ xxxxxxxxxx: Dãy số gồm 10 chữ số không lặp lại   * Ví dụ mã trả thưởng: **REWARD1234567890** * Trong đó:   + **"REWARD"**: Ký hiệu cố định của mã trả thưởng.   + **"1234567890"**: Dãy số gồm 10 chữ số không lặp lại | | Mã điểm bán | Datacolumns have copy | Không | Mã định danh của điểm bán | | Tên điểm bán | Datacolumns | Không | Tên của điểm bán | | Số điện thoại điểm bán | Datacolumns | Không | Số điện thoại liên hệ của điểm bán | | Tỉnh/Thành phố | Datacolumns | Không | Tên tỉnh hoặc thành phố | | Địa chỉ | Datacolumns | Không | Địa chỉ chi tiết của điểm bán (Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.) | | Mã tuyến | Datacolumns | Không | Mã tuyến của điểm bán | | Tên tuyến | Datacolumns | Không | Hiển thị tên tuyến theo mã tuyến | | Mã nhân viên | Datacolumns | Không | Mã nhân viên chăm sóc theo tuyến bán hàng | | Tên nhân viên | Datacolumns | Không | Tên nhân viên theo mã nhân viên | | Mã chương trình tích lũy | Datacolumns have copy - Hyperlink | Không | Mã định danh của chương trình  Click hyperlink:  "Chi tiết chương trình tích lũy" (xem bên dưới) | | Tên chương trình tích lũy | Datacolumns | Không | Tên chương trình tích lũy | | Ngày bắt đầu trả thưởng | Datacolumns | Không | (dd-mm-yyy) theo mã CTTB tích lũy | | Ngày kết thúc trả thưởng | Datacolumns | Không | (dd-mm-yyy) theo mã CTTB tích lũy | | Mã giai đoạn | Datacolumns have copy | Không | Hiển thị Mã giai đoạn theo tiến trình  Chỉ hiển thị khi Hình thức trả thưởng = Theo giai đoạn | | Tên giai đoạn | Datacolumns | Không | Hiển thị tên giai đoạn theo Mã giai đoạn  Chỉ hiển thị khi Hình thức trả thưởng = Theo giai đoạn | | Mốc tích lũy đăng ký | Datacolumns | Không | Mốc tích lũy đăng ký của điểm bán | | Số suất đăng ký | Datacolumns | Không | Số suất đã được đăng ký của điểm bán | | Mốc tích lũy đạt được | Datacolumns | Không | Tên mốc tích lũy đạt được | | Hình thức trả thưởng | Datacolumns | Không | Hiển thị hình thức "Theo giai đoạn"/ "Theo chương trình" | | Phần thưởng | Datacolumns | Không | Hiển thị Phần thưởng theo tích lũy đạt được theo mốc đạt được   1. Tiền thưởng 2. Quà tặng 3. Chiết khấu % | | Phần thưởng theo mốc | Datacolumns | Không | **Hiển thị phần thưởng theo mốc, lấy theo field @Phần thưởng theo mốc của tiến trình tích lũy**  **Số tiền có format phần nghìn vd 1,000,000**    **Với Phần thưởng = Quà tặng** Click hyperlink *"Chi tiết"*hiển thị popup dạng lưới danh sách sản phẩm bên dưới | | Ngày trả thưởng | Datetime | Không | Khi thực hiện chuyển trạng thái từ "Chờ trả thưởng"; "Hết hạn trả thưởng" sang "Đã trả thưởng". Lưu và hiển thị Ngày trả thưởng dd-mm-yyyyhh:mm:ss  TH đã có thông tin Mã đơn hàng cho Mã trả thưởng, trong lần cập nhật tiếp theo vẫn có thông tin thì sẽ ghi đè thông tin, cập nhật lại Ngày trả thưởng | | Trạng thái trả thưởng | Datacolumns   - Tag | Không | Bao gồm 4 kết quả   * **Chờ trả thưởng**    + Điều kiện:  * + - Mỗi mã trả thưởng gen ra tương ứng với trạng thái default = Chờ nhận thưởng     - Thời gian hiện tại ≤ Ngày kết thúc trả thưởng.   + Ý nghĩa:     - Đây là trạng thái ban đầu của phần thưởng.     - Chưa có thao tác xử lý (tạo đơn hàng hoặc thao tác trả thưởng).     - Người nhận có thể thực hiện các hành động chuyển trạng thái đã trả thưởng manual  * **Đã trả thưởng:**  * + Khi thực hiện Cập nhật trả thưởng => Trạng thái trả thưởng = Đã trả thưởng   + Ý nghĩa:     - Phần thưởng đã được xử lý và giao đến người nhận * **Từ chối trả thưởng:** Phần thưởng có thao tác Từ chối trả thưởng => trạng thái trả thưởng = Từ chối trả thưởng * **Hết hạn trả thưởng:**Phần thưởng chưa có thao tác trả thưởng/ từ chối và có ngày hiện tại > Ngày kết thúc trả thưởng.   + Đối với trạng thái này vẫn cho thao tác Trả thưởng/ từ chối bình thường và cập nhật trạng thái tương ứng (Tức là cho phép trả thưởng/ Từ chối khi hết hạn) | | Lý do từ chối | Datacolumns | Không | * **Từ chối trả thưởng:** Phần thưởng có thao tác Từ chối trả thưởng => Lý do từ chối = giá trị user đã nhập | | Mã đơn hàng | Datacolumns | Không | Hiển thị Mã đơn hàng khi Khi thực hiện import danh sách trả thưởng/ Hoặc khi thực hiện duyệt trả thưởng manual từng lần  Cho phép import nhiều mã đơn hàng cách nhau dấu "Phẩy" | | Người cập nhật | Datacolumns | Không | Mã nhân viên người thực hiện cập nhật gần nhất | | Nhóm quyền | Datacolumns - tag | Không | Hiển thị nhóm quyền người cập nhật, hiển thị theo người cập nhật gần nhất | | Thời gian cập nhật | Datacolumns | Không | Khi gen mã trả thưởng lần đầu   Khi cập nhật hiển thị Thời điểm cuối cùng cập nhật dữ liệu (dd-mm-yyy hh:mm:ss) | | Tùy chỉnh | icon button | Có | Hiển thị button duyệt khi trả thưởng có trạng thái =  Chờ trả thưởng; Đã trả thưởng; Hết hạn trả thưởng  Tooltip: Trả thưởng cho phép cập nhật Trạng thái trả thưởng là Đã nhận thưởng hoặc Từ chối trả thưởng    **a/ Khi Trạng thái trả tưởng = Chờ trả thưởng ; Hết hạn trả thưởng** → Onclick cho phép cập nhật trạng thái thanh toán thành Đã nhận thưởng, hiển thị popup default check radio Trả thưởng  Bao gồm 2 thao tác:    **b/  Khi Trạng thái trả tưởng = Đã trả thưởng** → Disable option Từ chối như hình:     ---   **Mô tả popup:**   * Onclick icon duyệt hiển thị popup default check radio Trả thưởng;   + Mã đơn hàng:     - **Mỗi mã đơn hàng** phân cách mỗi mã bằng dấu phẩy (`,`). tổng cộng text(1000)     - placeholder: Nhập vào mã đơn hàng     - Không nhập: @Field là bắt buộc!     - Nhập vượt: ko lấy ký tự nhập vượt   + Chọn Cập nhật:     - 1/ Kiểm tra tất cả các mã đơn hàng đã nhập và báo lỗi 1 lần tất cả các lỗi (nếu có) - báo lỗi inline  * + - * **Kiểm tra tồn tại:** Mã đơn hàng @mã đơn hàng không tồn tại trên hệ thống. Vui lòng kiểm tra lại!       * RedV2.0.1Trường hợp Mã đơn hàng có tồn tại nhưng không thuộc phân quyền import của user (Dựa vào vùng- Khu vực được phân quyền và Vùng-Khu vực của NPP trên đơn hàng)         + Hển thị thông báo lỗi: Mã đơn hàng @Mã đơn hàng không thuộc phân quyền của tài khoản đang đăng nhập. Vui lòng kiểm tra lại!       * Kiểm tra trường hợp : **Mã đơn hàng trả thưởng**khác trạng thái Thành công (Đã duyệt; Đã xuất kho): Hiển thị thông báo lỗi:         + Mã đơn hàng trả thưởng **@mã đơn hàng** khác trạng thái Thành công. Vui lòng kiểm tra lại!       * ~~**RedV2.0.2Mã đơn hàng trả thưởng**đã tồn tại trong 1 phiếu trả thưởng khác của cùng chương trình trưng bày:~~         + ~~Hiển thị thông báo lỗi  Mã đơn hàng trả thưởng ****@mã đơn hàng**** đã tồn tại trong mã trả thưởng @mã trả thưởng của cùng chương trình trưng bày, vui lòng kiểm tra lại!~~       * Kiểm tra cùng 1 phiếu trả thưởng trùng mã đơn hàng trong khung input:         + Mã đơn hàng trả thưởng @mã đơn hàng bị trùng. Vui lòng kiểm tra lại!       * Mã điểm bán trên đơn hàng khác mã điểm bán trên Mã trả thưởng: Kiểm tra dựa vào điểm bán trên đơn hàng  có trùng khớp với mã điểm bán trên phiếu trả thưởng hay không         + Mã đơn hàng @mã đơn hàng không thuộc điểm bán. Vui lòng kiểm tra lại!      * + - 2/ Nếu tất cả đều thuộc điểm bán của phiếu trả thưởng       * Update Trạng thái trả thưởng = **Đã trả thưởng** (đối với trạng thái chờ nhận thưởng; Hết hạn trả thưởng)       * Lưu thông tin Mã đơn hàng trả thưởng cho Mã trả thưởng vào cột "Mã đơn hàng". Nối chuỗi cách nhau bằng dấu 'Phẩy'       * Trường hợp đã có thông tin Mã đơn hàng cho Mã trả thưởng, trong lần cập nhật tiếp theo vẫn có thông tin thì sẽ ghi đè thông tin của lần cập nhật mới nhất.       * Lưu Nhóm quyền theo người cập nhật   + Chọn Đóng: đóng popup và không thay đổi dữ liệu; về màn hình danh sách trả thưởng        * Từ chối: chọn radio Từ chối    + Placeholder: Nhập vào lý do từ chối   + Lý do từ chối:     - Lý do từ chối validate <= 100 ký tự text     - Bắt buộc nhập lý do;     - Nhập vượt: ko lấy ký tự nhập vượt     - Không nhập: @field là bắt buộc!   + Chọn Cập nhật: Update Trạng thái trả thưởng = "Từ chối trả thưởng"; Lý do từ chối = giá trị đã nhập   + Lưu nhóm quyền theo người cập nhật   + Chọn Đóng: đóng popup và không thay đổi dữ liệu; về màn hình danh sách trả thưởng    Thực hiện đồng thời 2 action:   * Action từ chối được ghi nhận trước thì hiển thị msg: "Mã trả thưởng đã có trạng thái Từ chối trả thưởng . Vui lòng kiểm tra lại!" * Action Đã trả thưởng ghi nhận trước thì báo msg:  "Mã trả thưởng đã có trạng thái Đã trả thưởng . Vui lòng kiểm tra lại!" | | | | | |
| Export | Button | Có | Không | Xem mô tả chức năng bên dưới |
| Import | Button | Có | Không | Xem mô tả chức năng bên dưới |
| Xem lịch sử | Button | Có | Không | Xem mô tả chức năng bên dưới |

### Chi tiết chương trình tích lũy

[Click hyperlink để xem chi tiết CTTL theo nội dung đã mô tả](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53046507#id-%5BHO%5DKh%E1%BB%9Fit%E1%BA%A1och%C6%B0%C6%A1ngtr%C3%ACnht%C3%ADchl%C5%A9y-Xemchiti%E1%BA%BFtCh%C6%B0%C6%A1ngtr%C3%ACnht%C3%ADchl%C5%A9y)

Click vào Hyperlink Mã chương trình tích lũy → hiển thị màn hình Xem chi [tiết chương trình tích lũy](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53046507#id-%5BHO%5DKh%E1%BB%9Fit%E1%BA%A1och%C6%B0%C6%A1ngtr%C3%ACnht%C3%ADchl%C5%A9y-Xemchiti%E1%BA%BFtCh%C6%B0%C6%A1ngtr%C3%ACnht%C3%ADchl%C5%A9y)

* Chỉ view thông tin và không được điều chỉnh bất kỳ dữ liệu nào như đã mô tả
* Chọn x tắt popup mà không cần confirm

### Chi tiết trả thưởng

Click hyperlink *"Chi tiết"*hiển thị popup dạng lưới danh sách sản phẩm,

**Label: "Chi tiết trả thưởng"**

Chọn x để đóng popup

Hiển thị phân trang sản phẩm

Mô tả lưới danh sách sản phẩm trả thưởng:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| **Chi tiết trả thưởng**  **Kết quả trả thưởng** | Label |  |  |  |
| Điều kiện | Label |  |  | hiển thị điều kiện VÀ/ HOẶC theo cài đặt CTTL |
| Mã sản phẩm | Datacolumns | Không |  | Hiển thị mã quà tặng theo mã CTTL, lấy từ **Chi tiết trả thưởng của tiến trình tích lũy** |
| Tên sản phẩm | Datacolumns | Không |  | Hiển thị tên sản phẩm theo mã sản phẩm |
| Đơn vị | Datacolumns | Không |  | Hiển thị đơn vị cơ bản theo mã sản phẩm |
| Số lượng | Datacolumns | Không |  | Hiển thị số lượng sản phẩm tương ứng lấy từ  **Chi tiết trả thưởng của tiến trình tích lũy - cột số lượng theo mã sản phẩm**   * **Có format phần nghìn vd 1,000,000** |

Export trả thưởng  
Export 

Button cho phép export các Trạng thái trả thưởng tích lũy theo [rule Export](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO)đã mô tả

Mục đích: Cung cấp chức năng xuất danh sách các Trạng thái trả thưởng tích lũy (CTTL) ra file để lưu trữ, phân tích, hoặc chia sẻ. Tính năng này giúp người dùng dễ dàng xử lý dữ liệu ngoài hệ thống.

Click button Export hiển thị popup:

* Chọn "Đồng ý" để export danh sách
* Chọn Hủy, tắt popup và không tải file export về thiết bị

Tên file: Export\_RewardAccumulate

Mô tả: 

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Người xuất báo cáo: | FVCUS0914588981 - Thảo BA | | | | | | | | | | | | | | | | | |
| Thời gian xuất báo cáo: | 08/12/2024 - 07:16:08 | | | | | | | | | | | | | | | | | |
| Dữ liệu theo thời gian: | Từ ngày 01/12/2024 đến ngày 21/12/2024 | | | | | | | | | | | | | | | | | |

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Mã trả thưởng | Datacolumns | Hiển thị mã trả thưởng |
| Mã điểm bán | Datacolumns | Hiển thị Mã điểm bán |
| Tên điểm bán | Datacolumns | Hiển thị Tên điểm bán |
| Số điện thoại điểm bán | Datacolumns | Hiển thị Số điện thoại điểm bán |
| Tỉnh/Thành phố | Datacolumns | Hiển thị Tỉnh/Thành phố |
| Địa chỉ | Datacolumns | Hiển thị Địa chỉ (Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.) |
| Mã tuyến | Datacolumns | Hiển thị mã tuyến |
| Tên tuyến | Datacolumns | Hiển thị tên tuyến |
| Mã nhân viên | Datacolumns | Hiển thị mã nhân viên của tuyến |
| Tên nhân viên | Datacolumns | Hiển thị tên nhân viên theo mã nhân viên |
| Mã chương trình tích lũy | Datacolumns | Hiển thị Hiển thị Mã chương trình |
| Tên chương trình tích lũy | Datacolumns | Hiển thị Tên chương trình |
| Ngày bắt đầu trả thưởng | Datacolumns | dd/mm/yyyy |
| Ngày kết thúc trả thưởng | Datacolumns | dd/mm/yyyy |
| Mã giai đoạn | Datacolumns | Hiển thị Mã giai đoạn tích lũy  Trả thưởng theo chương trình thì hiển thị rỗng |
| Tên giai đoạn | Datacolumns | Hiển thị tên giai đoạn  Trả thưởng theo chương trình thì hiển thị rỗng |
| Mốc tích lũy đăng ký | Datacolumns | Mốc tích lũy đăng ký của điểm bán |
| Số suất đăng ký | Datacolumns | Hiển thị Số suất đăng ký |
| Mốc tích lũy đạt được | Datacolumns | Hiển thị mốc tích lũy đạt được |
| Hình thức trả thưởng | Datacolumns | Hiển thị Theo giai đoạn/ Theo chương trình |
| Phần thưởng | Datacolumns | Hiển thị phần thưởng tương ứng theo cột Phần thưởng của tiến trình tích lũy  Hiển thị Phần thưởng   1. Tiền thưởng 2. Quà tặng 3. Chiết khấu % |
| Phần thưởng theo mốc | Datacolumns | Hiển thị số tiền (có phân cách phần nghìn 1,000)  Quà tặng hiển thị rỗng |
| Mã sản phẩm | Datacolumns | Hiển thị Mã sản phẩm với Phần thưởng = Quà tặng |
| Tên sản phẩm | Datacolumns | Hiển thị với Phần thưởng = Quà tặng  Hiển thị tên sản phẩm theo mã sản phẩm |
| Đơn vị | Datacolumns | Hiển thị với Phần thưởng = Quà tặng  Hiển thị đơn vị cơ bản theo mã sản phẩm |
| Số lượng | Datacolumns | Hiển thị Phần thưởng = Quà tặng  Hiển thị số lượng sản phẩm tương ứng lấy từ  **Chi tiết trả thưởng của tiến trình tích lũy - cột số lượng theo mã sản phẩm, (có phân cách phần nghìn 1,000)** |
| Ngày trả thưởng | Datacolumns | Hiển thị ngày chuyển trạng thái Chờ trả thưởng → Đã trả thưởng. dd-mm-yyyy |
| Trạng thái trả thưởng | Datacolumns | Trạng thái trả thưởng tương ứng |
| Lý do từ chối | Datacolumns | Hiển thị lý do từ chối |
| Mã đơn hàng | Datacolumns | Hiển thị Mã đơn hàng khi thực hiện import vào hệ thống / manual duyệt trả thưởng  Mã đơn hàng rỗng khi trạng thái khác Đã trả thưởng |
| Người cập nhật | Datacolumns | Hiển thị mã người cập nhật |
| Nhóm quyền | Datacolumns | Nhóm quyền theo mã người cập nhật |
| Thời gian cập nhật | Datacolumns | Hiển thị thời gian cập nhật dd-mm-yyyy hh:mm:ss |

Import trả thưởng

# Import

**1/ Chọn button Import, hiển thị màn hình import như hình**

**2/ Người dùng thực hiện import:**

* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc Kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống: Hiển thị thông báo: "Bạn chắc chắn thao tác này không?"

* + Đồng ý: Chạy tiến trình xử lý, kiểm tra dữ liệu inport từ file
  + Hủy: Đóng cảnh báo và giữ nguyên trạng thái import

**3/ Ràng buộc chung:**

* Áp dụng cho những phiếu trả thưởng có Trạng thái trả thưởng = "Chờ trả thưởng"; "Hết hạn trả thưởng"; "Đã trả thưởng"

=> [Import theo rule chung](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode)của hệ thống

**Button: "Lấy file mẫu" : cho phép export file excel mẫu**

**Template: Import\_RewardAccumulate**

**Quy trình Import:**

trueImport trả thưởngfalse1200autotoptrue152811

trueKiểm tra cơ bản trả thưởngfalseautotoptrue6913

**Kiểm tra dữ liệu:**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã trả thưởng (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập Mã trả thưởng tích lũy | * Mã trả thưởng để trống (trống 1 line => bỏ qua), * **Mã trả thưởng**để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Mã trả thưởng @Mã trả thưởng nhập không đúng định dạng. Vui lòng kiểm tra lại!   + Dòng n: Mã trả thưởng bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã trả thưởng**không tồn tại trên hệ thống. Hiển thị thông báo lỗi   + Dòng n: Mã trả thưởng @Mã trả thưởng không tồn tại trong hệ thống. Vui lòng kiểm tra lại!   + Bỏ qua trường hợp này không cần kiểm tra:      * **Mã trả thưởng** có trạng thái   + Từ chối trả thưởng: Dòng n: Mã trả thưởng @Mã trả thưởng đã có kết quả Từ chối trả thưởng. Vui lòng kiểm tra lại! * (23/5/25) Trường hợp đã lưu trạng thái Đã trả thưởng. Import có action = Từ chối trả thưởng: Báo msg: Dòng n: Mã trả thưởng @mã trả thưởng có action khác "Đã trả thưởng". Vui lòng kiểm tra lại!   Update thêm msg 2 case như bên dưới (22/5/25)  1/ Check trùng action, 1 mã trả thưởng mà khác action => msg: Dòng n: "Mã trả thưởng @mã trả thưởng khác action. Vui lòng kiểm tra lại!"  2/ Check trùng action "Từ chối trả thưởng":  Cùng 1 mã trả thưởng - cùng action "Từ chối trả thưởng"- Không cần biết lý do từ chối là gì, luôn báo => "Dòng n: "Mã trả thưởng @mã trả thưởng có nhiều dòng cùng action "Từ chối trả thưởng". Vui lòng kiểm tra lại!" |
| 2 | Action (\*) | 1. Đã trả thưởng 2. Từ chối trả thưởng | **Chọn** trong template một trong 2 option   1. Đã trả thưởng 2. Từ chối trả thưởng | **Chỉ kiểm tra case sau:**   * **Action**để trống hiển thị thông báo: Dòng n:  Mã trả thưởng @MTT Action bị bỏ trống. Vui lòng kiểm tra lại! * Nhập khác định dạng: Dòng n:  Mã trả thưởng @MTT Action không đúng định dạng. Vui lòng kiểm tra lại! * Để trống nguyên 1 dòng excel: Bỏ qua |
| 3 | Mã đơn hàng | Text (50) | * Validate khi Action = Đã trả thưởng | * Để trống nguyên 1 dòng excel: Bỏ qua * Khi Action #  Đã trả thưởng: bỏ qua không ghi nhận * Action = Đã trả thưởng:    + Để trống: Dòng n: Mã đơn hàng là bắt buộc. Vui lòng kiểm tra lại! * **Kiểm tra tồn tại:**    + Dòng n: Mã đơn hàng @mã đơn hàng không tồn tại trên hệ thống. Vui lòng kiểm tra lại!   + Trường hợp Mã đơn hàng có tồn tại nhưng không thuộc phân quyền import của user (Dựa vào vùng- Khu vực được phân quyền và Vùng-Khu vực của NPP trên đơn hàng)     - Hển thị thông báo lỗi: Dòng n: Mã đơn hàng @Mã đơn hàng không thuộc phân quyền của tài khoản đang đăng nhập. Vui lòng kiểm tra lại! * Kiểm tra mã đơn hàng khác trạng thái thành công (Đã duyệt; Đã xuất kho):   + Dòng n: Mã đơn hàng @mã đơn khác trạng thái Thành công. Vui lòng kiểm tra lại! * ~~RedV2.0.2 Kiểm tra mã đơn hàng trên các phiếu trả thưởng: Chỉ tồn tại 1 đơn hàng trong tất cả các phiếu trả thưởng, Mã đơn hàng trả thưởng có thể trùng trong các CTTL khác nhau.~~   + ~~**Mã đơn hàng trả thưởng**đã tồn tại trong 1 phiếu trả thưởng khác của cùng chương trình tích lũy: Hiển thị thông báo lỗi: **Dòng n:**  **Mã đơn hàng** @mã đơn đã tồn tại trong phiếu trả thưởng @mã trả thưởng của cùng chương trình tích lũy. Vui lòng kiểm tra lại!~~   + Trùng mã đơn hàng trong cùng 1 phiếu trả thưởng trên template import:     - **Dòng n:**  **Mã đơn hàng** @mã đơn bị trùng trong phiếu trả thưởng @mã trả thưởng. Vui lòng kiểm tra lại! * Kiểm tra mã đơn hàng thuộc điểm bán, dựa vào mã trả thưởng, kiểm tra mã đơn hàng có phải được tạo cho điểm bán tương ứng trên mã trả thưởng hay không? Nếu không báo lỗi: Dòng n: Mã đơn hàng @Mã đơn hàng không thuộc điểm bán. Vui lòng kiểm tra lại! |
| 4 | Lý do từ chối | Text (100) | * Nhập lý do từ chối, validate 100 ký tự, bắt buộc phải nhập lý do * **valid khi action Từ chối trả thưởng** | * Nếu không nhập hoặc nhập >100 ký tự:   + Dòng n: Lý do từ chối tối đa 100 ký tự. Vui lòng kiểm tra lại! |
| 5 | Lưu thông tin |  |  | Sau khi tiến hành xử lý thành công, Lưu thông tin   * Mã trả thưởng có Action = Đã trả thưởng   1/ Cập nhật kết quả trả thưởng = Đã trả thưởng  2/ Cập nhật mã đơn hàng, nếu cùng mã trả thưởng thì nối chuỗi các mã đơn hàng cách nhau dấu phẩy ','. Trường hợp đã có thông tin Mã đơn hàng cho Mã trả thưởng, thì lần cập nhật tiếp theo vẫn có thông tin thì sẽ ghi đè thông tin của lần cập nhật mới nhất.  3/ Ngày trả thưởng = ngày cập nhật 4/ Ghi nhận ngày cập nhật, người cập nhật, Nhóm quyền cập theo người cập nhật   * Action = Từ chối trả thưởng   1/ Ghi nhận lý do từ chối 2. Cập nhật trạng thái trả thưởng 3/ Ghi nhận ngày cập nhật, người cập nhật, Nhóm quyền cập theo người cập nhật |

Thông báo lỗi theo rule chung đã define cho các màn hình trước đây

* hiển thị lỗi theo từng dòng
* có phân trang hiển thị
* hiển thị tất cả các lỗi

Lịch sử

# Xem lịch sử

Mục tiêu: Hiển thị chi tiết **lịch sử thay đổi** của các bản ghi trả thưởng, phục vụ cho:

* Theo dõi, kiểm tra sự thay đổi thông tin.
* Đảm bảo minh bạch trong xử lý trả thưởng.
* Hỗ trợ kiểm duyệt viên, nhân viên vận hành, hoặc kiểm toán nội bộ

Mô tả:

**Trạng thái UI (Loading / Empty / Error) khi tìm kiếm hoặc export dữ liệu:**

* Trong lúc chờ → có thể hiển thị trạng thái "Đang tải dữ liệu" hoặc không hiển thị
* Nếu không có dữ liệu → hiển thị: “Không có lịch sử cập nhật trong khoảng thời gian đã chọn.”
* Nếu lỗi từ server → hiện thông báo lỗi phù hợp. Nếu chưa báo theo từng mã lỗi cụ thể thì hiển thị chung:  "Đang có lỗi. Vui lòng thử lại sau!"

Chọn button "Xem lịch sử" hiển thị popup Title: Chi tiết cập nhật

chọn x để đóng màn hình

**1/ Bộ lọc thời gian**  
Nhãn: "Chọn thời gian xem lịch sử (tối đa 31 ngày)"

* Hiển thị mặc định ngày hiện tại;
* cho phép xóa ngày, chọn lại ngày (giới hạn 31 ngày);
* hiển thị placeholder: Từ ngày → Đến ngày

**2/ Button Tìm kiếm**

Validate ngày đã nhập:

* Kiểm tra người dùng đã nhập đủ từ ngày – đến ngày.
* Kiểm tra khoảng thời gian không vượt quá 31 ngày.
* Nếu lỗi chọn vượt 31 ngày (case chưa giới hạn 31 ngày theo "Từ ngày")→ hiển thị thông báo lỗi “Vui lòng chọn khoảng thời gian tối đa 31 ngày”

Hiển thị dữ liệu trên lưới danh sách "Lịch sử cập nhật"

* Hiển thị mỗi dòng ứng với **một trường thông tin bị thay đổi**.
* Tự động phân trang nếu có quá nhiều dòng (ví dụ: 10 dòng/trang).

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- | --- |
| 1 | STT | number | số thứ tự các dòng |
| 2 | Thời gian cập nhật | Datacolumns | dd/mm/yyyy hh:mm:ss |
| 3 | Người cập nhật | Datacolumns | Mã người cập nhật |
| 4 | Tên người cập nhật | Datacolumns | Tên người cập nhật |
| 5 | Nhóm quyền | Datacolumns- tag | Nhóm quyền của người cập nhật |
| 6 | Mã trả thưởng | Datacolumns | Mã trả thưởng định danh bản ghi thay đổi |
| 7 | Trường thông tin | Datacolumns | Field đã thay đổi |
| 8 | Nội dung cũ | Datacolumns | Giá trị trước khi thay đổi |
| 9 | Nội dung mới | Datacolumns | Giá trị sau khi thay đổi |

**3/ Button "Export"**

Chọn button export hiển thị thông báo "Bạn có muốn xuất lịch sử cập nhật không?"

* Chọn "Đồng ý" để export danh sách
* Chọn Hủy, tắt popup và không tải file export về thiết bị

Khi người dùng nhấn nút Export, hệ thống sẽ:

* Gửi yêu cầu tới backend kèm theo bộ lọc thời gian.
* Backend truy vấn toàn bộ bản ghi lịch sử cập nhật theo tiêu chí đó (không phân trang).
* Tạo file Excel động và trả lại để người dùng tải xuống.

Tên file: Export\_RewardUpdateHistory

Mô tả: 

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Người xuất báo cáo: | FVCUS0914588981 - Thảo BA | | | | | | | | | | | | | | | | | |
| Thời gian xuất báo cáo: | 08/12/2024 - 07:16:08 | | | | | | | | | | | | | | | | | |
| Dữ liệu theo thời gian: | Từ ngày 01/12/2024 đến ngày 21/12/2024 | | | | | | | | | | | | | | | | | |

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Thời gian cập nhật | Datacolumns | dd/mm/yyyy hh:mm:ss |
| Người cập nhật | Datacolumns | Mã người cập nhật |
| Tên người cập nhật | Datacolumns | Tên người cập nhật |
| Nhóm quyền | Datacolumns | Nhóm quyền của người cập nhật |
| Mã trả thưởng | Datacolumns | Mã trả thưởng định danh bản ghi thay đổi |
| Trường thông tin | Datacolumns | Field đã thay đổi |
| Nội dung cũ | Datacolumns | Giá trị trước khi thay đổi |
| Nội dung mới | Datacolumns | Giá trị sau khi thay đổi |