|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Màn hình quy trình duyệt cho phép thiết lập cơ chế phê duyệt linh hoạt, cho phép quản trị viên tự định nghĩa các quy trình duyệt nhiều cấp cho nhiều nghiệp vụ khác nhau (Đơn hàng, Đăng ký trưng bày, Bảng giá, chương trình khuyến mãi, Kiểm kho, Duyệt điểm bán). Quy trình này cần áp dụng cho các nhóm người dùng thuộc các nhóm quyền khác nhau, với các quy tắc và hành động riêng biệt, hỗ trợ cả trên nền tảng Portal và App quản lý. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Mô tả tổng quan

Tài liệu này mô tả các yêu cầu cho màn hình "Quy trình duyệt", nơi người dùng quản trị (Admin) có thể xem, tìm kiếm, lọc và quản lý tất cả các quy trình duyệt đã được cấu hình trong hệ thống. Màn hình này là điểm truy cập trung tâm để thực hiện các thao tác như tạo mới, chỉnh sửa, và thay đổi trạng thái hoạt động của một quy trình.

* **US-01:** Xem danh sách quy trình duyệt
* **US-02:** Tìm kiếm quy trình
* **US-03:** Lọc danh sách quy trình
* **US-04:** Tạo mới quy trình duyệt. Thêm/xóa các cấp duyệt
* **US-05:** Chỉnh sửa quy trình hiện có - Thêm cấp duyệt
* **US-06:** Kích hoạt/Vô hiệu hóa nhanh quy trìnhcó thể thay đổi trạng thái "Hoạt động/Ngưng hoạt động" của một quy trình ngay trên màn hình danh sách bằng công tắc (toggle)
* **US-07:** Sao chép (Nhân bản) quy trình
* **US-08:** Xem lịch sử
* **US-09:** Các màn hình liên quan cụ thể khác

**Phân quyền chức năng trên màn hình gồm:** Xem danh sách; Xem chi tiết, Tạo mới, Cập nhật dữ liệu; Cập nhật trạng thái; Export. (Link phân quyền - [HO][HT] Chức năng phân quyền - Nhóm quyền)

**Phân quyền dữ liệu: Portal HO, phân quyền xem tất cả dữ liệu trên màn hình Quy trình duyệt - [HO & NPP] Phân quyền dữ liệu**

**Làm rõ các khái niệm**

* **Quy trình duyệt (Workflow):** Là một tập hợp các bước (cấp) duyệt được định nghĩa trước để xử lý một đối tượng (ví dụ: một Đơn hàng) từ trạng thái "Chờ duyệt" đến "Đã duyệt" hoặc "Đã từ chối".
* **Cấp duyệt (Level/Step):** Một bước trong quy trình. Mỗi cấp có nhóm người duyệt, loại hình duyệt, và quy tắc duyệt riêng.
* **Trạng thái chính = Trạng thái sau áp dụng (Trạng thái áp dụng; Trạng thái sau áp dụng):** Trạng thái gốc khi chưa xử lý, khi duyệt hay Hủy thành công của màn hình,
* **Trạng thái trung gian:** Là một cột thông tin mới, thể hiện trạng thái trung gian trong quá trình duyệt (ví dụ: Đang ở cấp 4, đợi "SS, ASM, TRADE MKT\_1, TRADE MKT\_2, ADMIN NPP, ADMIN HO" xử lý). Cột này giúp người dùng biết bản ghi đang "kẹt" ở đâu mà không làm ảnh hưởng đến Trạng thái chính = Trạng thái sau áp dụng cho đến khi quy trình kết thúc.
* [...] hoặc @... : Tức là hiển thị các giá trị động ví dụ trong tài liệu như ****[Tên quy trình gốc ]; @Trạng thái áp dụng; @tên field,** [Tên nhóm quyền cấp @n], [Mã quy trình], ...**

Quy trình

trueFLow Basic \_Duyệt n cấpfalse1000autotoptrue14614

# Màn hình danh sách

Màn hình:

Mô tả:

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm | | | | |
| Tìm kiếm theo | Text Filed | Có | Không | Cho phép nhật text tìm kiếm quy trình duyệt theo mã quy trình duyệt, tên quy trình duyệt   * Tooltip: Tìm kiếm theo mã, tên quy trình. * Placeholder: Tìm kiếm theo mã, tên quy trình * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các quy trình duyệt có thông tin được nhập trong ô này. |
| Chức năng | Selectbox onechoice | Có | Không | * Trường này cho phép người dùng chọn một chức năng để lọc danh sách quy trình duyệt dựa trên chức năng đã chọn. * Người dùng có thể tìm kiếm và chọn một chức năng từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách quy trình duyệt. * **Mở danh sách:** Khi người dùng nhấp vào trường "chức năng", một danh sách các chức năng sẽ được mở ra. Danh sách chức năng bao gồm:    + Phê duyệt   + Hủy   + Yêu Cầu Duyệt KM   + Tạm Ngưng   + Kết Thúc KM   + Cập nhật trạng thái  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm chức năng mong muốn. Sau đó, chọn một chức năng bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tag). * **Kết quả lọc:** Danh sách quy trình duyệt sẽ tự động được lọc để hiển thị những quy trình duyệt thuộc chức năng đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn chức năng không mong muốn. * Trường hợp bỏ chọn chức năng trong hộp chọn thì mặc định hiểu là chọn tất cả chức năng để tìm kiếm. * Khi mở màn hình mặc định không chọn chức năng nào * Placeholder: Chọn chức năng |
| Trạng thái quy trình | Selectbox onechoice | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc danh sách quy trình duyệt dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và chọn một trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách quy trình duyệt. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:    + Hoạt động   + Không hoạt động  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tag). * **Kết quả lọc:** Danh sách quy trình duyệt sẽ tự động được lọc để hiển thị những quy trình duyệt thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định không chọn trạng thái nào. * Placeholder: Chọn trạng thái quy trình |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách quy trình duyệt, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các quy trình duyệt mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách quy trình duyệt. 2. **Danh sách quy trình duyệt làm mới:** Sau khi nhấp, danh sách quy trình duyệt sẽ hiển thị toàn bộ các quy trình duyệt hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ Cập nhật giao diện hiển thị của danh sách quy trình duyệt. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách quy trình duyệt. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách quy trình duyệt theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách quy trình duyệt. 3. **Hiển thị kết quả:** Danh sách quy trình duyệt sẽ Cập nhật và hiển thị các quy trình duyệt phù hợp với các tiêu chí đã chọn.  * Mặc định: Hiển thị tất cả quy trình duyệt đang có trạng thái "Hoạt động" * Sort hiển thị theo thời gian Cập nhật gần nhất lên trên đầu   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách quy trình duyệt sẽ không thay đổi khi nhấn nút "Tìm kiếm".  Chọn chức năng → Chọn trạng thái => Hiển thị danh sách các quy trình có chức năng đã chọn và có trạng thái đã chọn theo điều kiện "Và"    * User chọn nhiều thuộc tính để filter → hệ thống giao nhau kết quả. * Chỉ khi record thỏa mãn tất cả filter thì mới xuất hiện. |
| Lưới "Danh sách quy trình duyệt"  Phân trang hiển thị danh sách | | | |
| Danh sách | | | | Tiêu đề lưới danh sách |
| # | | | | Thứ tự hiển thị trên lưới danh sách |
| Mã quy trình | Datacolumn - have copy | Không | Không | Hiển thị mã duy nhất của quy trình.  Mã quy trình hệ thống tự sinh khi tạo mới quy trình, không cho chỉnh sửa: AWFYYYYMMDDXXX |
| Tên quy trình | Datacolumn | Không | Không | - Hiển thị tên đầy đủ của quy trình.  Hyperlink xem thông tin chi tiết chương trình |
| Dữ liệu áp dụng | Datacolumn | Không | Không | - Hiển thị dữ liệu áp dụng đã chọn khi tạo mới |
| Trạng thái áp dụng | Datacolumn - Tag | Không | Không | - Hiển thị trạng thái áp dụng đã chọn, hiển thị dạng thẻ tag |
| Trạng thái sau áp dụng | Datacolumn - Tag | Không | Không | - Hiển thị trạng thái sau áp dụng đã chọn, hiển thị dạng thẻ tag (khác màu với Trạng thái áp dụng) |
| Chức năng | Datacolumn | Không | Không | Hiển thị chức năng của quy trình duyệt |
| Số cấp duyệt | Datacolumn | Không | Không | - Hiển thị tổng số cấp duyệt đã cấu hình cho quy trình này.   * Dạng số, số cấp duyệt hệ thống tính bằng tổng số cấp đã thêm mới nhất theo mã quy trình để hiển thị. |
| Người tạo | Datacolumn - have copy | Không | Không | - Username của người đã tạo quy trình. |
| Ngày tạo | Datacolumn | Không | Không | - Ngày và giờ tạo quy trình.  - Định dạng: dd/mm/yyyy hh:mm:ss |
| Người cập nhật | Datacolumn - Have copy | Không | Không | - Username của người Cập nhật quy trình lần cuối. |
| Ngày cập nhật | Datacolumn | Không | Không | - Ngày và giờ Cập nhật lần cuối.  - Định dạng: dd/mm/yyyy hh:mm:ss |
| Trạng thái | toggle switch | Không | Không | - Trạng thái hoạt động của chính quy trình duyệt. Hiển thị dưới dạng một công tắc (toggle switch):  Bật (màu xanh): Đang hoạt động (Active).  Tắt (màu xám): Ngưng hoạt động (Inactive).  Người dùng có thể nhấn trực tiếp vào toggle để thay đổi trạng thái. Hệ thống cần có xác nhận trước khi thay đổi:   * "Bạn có chắc chắn muốn ngưng hoạt động quy trình **[mã quy trình]** không?" * "Bạn có chắc chắn muốn kích hoạt quy trình **[mã quy trình]** không?"   Mô tả Luồng: Kích hoạt / Vô hiệu hóa Quy trình duyệt:  **Luồng 1: Vô hiệu hóa (inactive) một quy trình đang hoạt động**  Điều kiện ban đầu: Admin đang ở màn hình "Danh sách Quy trình duyệt". Có một quy trình (ví dụ: QT\_01) đang ở trạng thái "Đang hoạt động" (công tắc toggle đang Bật).   * Bước 1 (Hành động người dùng): Admin nhấn vào công tắc (toggle) trên dòng của quy trình QT\_01 để chuyển từ Bật sang Tắt. * Bước 2 (Phản hồi hệ thống): Hệ thống kiểm tra trên các màn hình áp dụng quy trình có tồn tại một dòng dữ liệu đang ở trạng thái trung gian chưa xử lý xong ?    + Tức là cùng trạng thái áp dụng nhưng có các trạng thái trung gian đang Đang chờ xử lý ở bất kỳ một cấp trong quy trình. * Bước 3:  * + Bước 3.1: Nếu Không tồn tại:  hiển thị một hộp thoại xác nhận với nội dung rõ ràng: "Bạn có chắc chắn muốn ngưng hoạt động quy trình **QT\_01** không?". Nút: [Đồng ý] và [Hủy]      - Admin nhấn [Đồng ý]: Hệ thống gửi yêu cầu Cập nhật trạng thái của QT\_01 thành "Ngưng hoạt động" (Inactive) trong cơ sở dữ liệu. Sau khi Cập nhật thành công, công tắc trên giao diện của QT\_01 chuyển sang trạng thái Tắt (màu xám).        * Hiển thị một thông báo ngắn (toast message) xác nhận: "Đã ngưng hoạt động quy trình '[mã của  quy trình (ví dụ: QT\_01)]' thành công."     - Admin nhấn [Hủy]: Hộp thoại xác nhận đóng lại. Không có bất kỳ thay đổi nào về dữ liệu hay giao diện.   + Bước 3.2: Nếu có tồn tại: Hệ thống KHÔNG hiển thị hộp thoại xác nhận. Thay vào đó, hệ thống hiển thị một thông báo lỗi (error message) chi tiết cho người dùng: ****"Không thể ngưng hoạt động quy trình do có dữ liệu có trạng thái trung gian đang chờ xử lý trên màn hình [Tên màn hình]. Vui lòng kiểm tra lại!**"**. Công tắc toggle của QT\_01 trên giao diện vẫn giữ nguyên ở trạng thái bật. Không có thay đổi nào về dữ liệu.   *(*  *Trường hợp này người dùng muốn inactive quy trình ngay thì chỉ có thể vào màn hình rồi filter lại data theo quy trình để tìm những bản ghi đang chờ xử lý => điều chỉnh quy trình*   * *Ko duyệt vượt cấp → thêm 1 nhóm quyền cao hơn vào tất cả các cấp rồi xử lý.*  * *Có duyệt vượt cấp thì thêm 1 cấp mới cao hơn rồi xử lý*   *)*    **Luồng 2: Kích hoạt (Active) một quy trình đang ngưng hoạt động (Có kiểm tra xung đột)**  Điều kiện ban đầu: Admin đang ở màn hình "Danh sách Quy trình duyệt". Có một quy trình (ví dụ: QT\_02) đang ở trạng thái "Ngưng hoạt động" (công tắc toggle đang Tắt).   * Bước 1 (Hành động người dùng): Admin nhấn vào công tắc (toggle) trên dòng của quy trình QT\_02 để chuyển từ Tắt sang Bật. * Bước 2 (Phản hồi hệ thống - Kiểm tra ngầm): Đây là bước quan trọng nhất. Ngay khi nhận được hành động, hệ thống sẽ thực hiện một yêu cầu kiểm tra ngầm:    + Hệ thống lấy thông tin của QT\_02: Màn hình áp dụng theo **Dữ liệu áp dụng** (ví dụ: "Đơn hàng bán") **và Trạng thái áp dụng** (ví dụ: "Chờ duyệt") **và Chức năng** (ví dụ: Phê duyệt)   + Hệ thống truy vấn cơ sở dữ liệu để tìm kiếm: Có quy trình nào khác (Khác quy trình QT\_02) có trạng thái = "Hoạt động", màn\_hình\_áp\_dụng = "Đơn hàng bán" & Chức\_năng = "Phê duyệt" &  trạng\_thái\_áp\_dụng = "Chờ duyệt" không? * Bước 3:    + Bước 3.1: Không tìm thấy xung đột (Luồng thành công) Hệ thống tiếp tục hiển thị hộp thoại xác nhận: "Bạn có chắc chắn muốn kích hoạt quy trình **QT\_02** không?". (Nút: [Đồng ý] và [Hủy])      - Admin nhấn [Đồng ý]: Hệ thống Cập nhật trạng thái của QT\_02 thành "Đang hoạt động", bật công tắc trên giao diện     - Hiển thị thông báo trên giao diện: **"Đã kích hoạt quy trình thành công. Hệ thống đang tự động áp dụng quy trình cho các dữ liệu hiện có. Quá trình này có thể mất vài phút."**     - Kích hoạt quy trình xử lý dữ liệu:  Quy trình xử lý dữ liệu cũ trước và sau khi active quy trình duyệt **Tóm tắt:**   | Loại Bản ghi | Trạng thái Bản ghi | Hành động Hệ thống | Kết quả | | --- | --- | --- | --- | | **A. Bản ghi Cũ (Pre-activation)** | **= Trạng thái Áp dụng** | **Di chuyển Dữ liệu (Migrate)** | Được "kéo" vào quy trình mới, bắt đầu từ Cấp 1. | |  | **≠ Trạng thái Áp dụng** | **Bỏ qua (Ignore)** | Hoàn toàn không bị ảnh hưởng. Giữ nguyên trạng thái và logic cũ. | | **B. Bản ghi Mới (Post-activation)** | (Luôn là Trạng thái Áp dụng) | **Tự động Áp dụng (Apply)** | Tự động áp dụng quy trình, bắt đầu từ Cấp 1 |   Chi tiết:  **A. Bản ghi Cũ (Pre-activation):** Dữ liệu đang chạy khi CHƯA có quy trình duyệt   * Trước khi active quy trình duyệt: Trước khi chức năng này được triển khai, hệ thống hoạt động theo mô hình thay đổi trạng thái trực tiếp.    + Ví dụ khi một điểm bán được tạo, nó có trạng thái Khởi tạo.   + Một người dùng có quyền (ví dụ: Admin) sẽ vào màn hình, nhấn nút "Duyệt"   + Hành động này sẽ gọi trực tiếp đến hàm xử lý gốc, cập nhật trạng thái của điểm bán trong CSDL từ Khởi tạo -> Hoạt động. * Dữ liệu cũ sẽ:    + Không có trạng thái trung gian: Dữ liệu này sẽ trống với các điểm bán ko áp dụng quy trình duyệt   + Lịch sử đơn giản: Lịch sử được ghi nhận theo thao tác xử lý gốc của màn hình, Không có lưu lịch sử cập nhật trạng thái trung gian   + Phân quyền cứng: Quyền duyệt được gán cứng cho một nhóm quyền cụ thể, nhóm quyền đó có quyền thao tác trên danh sách hiển thị theo dữ liệu phân quyền.     **Case A.1 Trạng thái bản ghi cũ = Trạng thái áp dụng của quy trình**   1. **Trigger (Kích hoạt):** Ngay sau khi Admin kích hoạt quy trình. 2. **Hành động Backend (Migration Script):**     * **Tạo script di chuyển dữ liệu (migration script)**.      1. Lấy ID của quy trình duyệt (quy trình ĐANG ACTIVE)      2. Tìm tất cả các bản ghi cũ (dữ liệu được tạo TRƯỚC thời điểm quy trình được kích hoạt): Hệ thống tìm **tất cả** các điểm bán có Trạng thái chính = **"Trạng thái áp dụng của quy trình"** VÀ được tạo **trước** thời điểm kích hoạt.      3. Sao lưu dữ liệu      4. Vòng lặp xử lý:         1. Cập nhật Trạng thái trung gian:  ApprovalStatus = 'Đang ở cấp 1, đợi "[Nhóm quyền Cấp 1]" xử lý.'         2. **Tạo Lịch sử Duyệt:** Tạo một bản ghi lịch sử đầu tiên cho từng bản ghi            + ID của bản ghi đang xử lý.            + ID của quy trình vừa được kích hoạt.            + Cấp duyệt: Cấp 1            + Người cập nhật: System admin            + Ngày tạo: **Thời gian tạo (CreatedAt)** của chính bản ghi đó, để đảm bảo tính năng "Tự động duyệt" có thể tính toán chính xác.            + Ngày cập nhật: Thời gian cập nhật dd/mm/yyyy hh:mm:ss         3. Thời điểm bắt đầu: Các bản ghi cũ sẽ bắt đầu từ thời gian tạo của chính bản ghi đó làm thời điểm bắt đầu quy trình. Điều này giúp tính năng "Tự động duyệt" (nếu có) hoạt động chính xác.    * **Kế hoạch Quay lui (Rollback):** Nếu có sự cố nghiêm trọng không thể khắc phục ngay, kế hoạch quay lui sẽ được kích hoạt:      + Khôi phục cơ sở dữ liệu từ bản sao lưu đã tạo.    * **Thời gian chạy:** Chạy ngay lập tức sau khi kích hoạt quy trình      + Script phải được thiết kế để có thể chạy lại nhiều lần mà không gây ra lỗi trùng lặp. Sẽ luôn kiểm tra xem một bản ghi đã có trong Lịch sử duyệt hay chưa trước khi xử lý.      + Xung đột với hành động người dùng (nếu có): Người dùng đang cố gắng xử lý một bản ghi cũ theo luồng cũ ngay trong lúc tác vụ đang chạy.        1. Hiển thị một thông báo khi người dùng thao tác bất kỳ trên bản ghi: "Quy trình mới đang được áp dụng cho bản ghi này. Vui lòng thử lại sau ít phút."    * **Xử lý hàng loạt & an toàn:** Script sẽ chạy dưới nền (background job), xử lý theo từng lô (Thay vì xử lý từng bản ghi, tác vụ sẽ xử lý theo từng lô (ví dụ: 1000 bản ghi mỗi lần) để giảm số lượng giao dịch), có cơ chế thử lại (retry) và ghi log kết quả chi tiết. 3. **Hành động Frontend (UI):**     * **Đối với Người dùng khác Admin HO:** Khi họ tải lại màn hình ví dụ: danh sách điểm bán, họ sẽ thấy các điểm bán "Khởi tạo" cũ giờ đây đã có Trạng thái trung gian và icon xem lịch sử.    * **Đối với Admin HO:** Admin sẽ có một màn hình để theo dõi tiến trình và xem báo cáo kết quả của migration script.       + Sau khi lặp qua tất cả các bản ghi, tác vụ sẽ ghi lại một log tổng kết:  * + - * Thời gian bắt đầu và kết thúc.       * Tổng số bản ghi "dữ liệu được tạo TRƯỚC thời điểm quy trình được kích hoạt" đã tìm thấy.       * Tổng số bản ghi đã được di chuyển thành công.       * Danh sách các bản ghi bị lỗi (nếu có của hệ thống)   **Case A.2: Bản Ghi Cũ có Trạng thái "khác" Trạng thái Áp dụng**   1. **Trigger:** Tại thời điểm kích hoạt quy trình. 2. **Hành động Backend:**     * **BỎ QUA (IGNORE):** Migration script được thiết kế để **hoàn toàn bỏ qua** những bản ghi này. 3. **Hành động Frontend:**     * **Không thay đổi:** Giao diện cho các điểm bán "Hoạt động", "Đã hủy"... vẫn hiển thị như cũ. Chúng sẽ không có Trạng thái trung gian và không có icon lịch sử duyệt, vì chúng chưa bao giờ tham gia vào một quy trình duyệt nào. 4. **Tình huống đặc biệt:**     * **Trường hợp: Tại thời điểm này bản ghi có trạng thái khác Trạng thái áp dụng. nhưng một số trường hợp có thể cập nhật trạng thái.** Người dùng thực hiện **cập nhật trạng thái** làm thay đổi trạng thái về bằng "Trạng thái áp dụng".    * **Giải pháp:** Hệ thống cần có một cơ chế kiểm tra tại thời điểm thay đổi trạng thái.       + Khi đó hệ thống sẽ kiểm tra: "Có quy trình duyệt nào đang hoạt động cho trạng thái "Trạng thái áp dụng" không?".      + Nếu có, hệ thống sẽ tự động áp dụng quy trình mới cho bản ghi đó ngay tại thời điểm nó được chuyển về "Trạng thái áp dụng". Bản ghi này sẽ được coi như một bản ghi "mới" đối với quy trình *(xem B).*     **B. Xử Lý Bản Ghi Mới** (Sau Khi Quy Trình Duyệt Được Active)  Đây là luồng xử lý chuẩn và đơn giản hơn, áp dụng cho tất cả các bản ghi được tạo ra sau thời điểm quy trình được kích hoạt. Mô tả cách xử lý:  1. **Trigger:** Người dùng tạo mới hoặc chuyển trạng thái bản ghi = Trạng thái áp dụng (Sau Khi Quy Trình Duyệt Được Active) 2. **Hành động Backend:**     * **Tự động Áp dụng Quy trình:** Hệ thống sẽ kiểm tra: "Có quy trình nào đang hoạt động cho Trạng thái chính = "**Trạng thái áp dụng"** không?".       + Thiết lập Trạng thái trung gian thành "Đang ở cấp 1, đợi "[Nhóm quyền Cấp 1]" xử lý".      + Tạo bản ghi lịch sử của Bản ghi này. 3. **Hành động Frontend:**     * Sau khi tạo thành công, người dùng sẽ thấy điểm bán mới của mình trong danh sách với Trạng thái trung gian đã được cập nhật, sẵn sàng cho cấp duyệt đầu tiên xử lý. 4. **Trường hợp: Tại thời điểm này bản ghi đã có trạng thái khác Trạng thái áp dụng.** Người dùng thực hiện **cập nhật trạng thái** làm thay đổi trạng thái về bằng "Trạng thái áp dụng".    1. Hệ thống cần có một cơ chế kiểm tra tại thời điểm thay đổi trạng thái.        * Khi đó hệ thống sẽ tự động áp dụng quy trình mới cho bản ghi đó ngay tại thời điểm nó được chuyển về "Trạng thái áp dụng". Bản ghi này sẽ được coi như một bản ghi "mới" đối với quy trình.      * + Chạy cronjob tự động duyệt:    Quy trình chạy cronjob **Tác vụ Tự động Hàng ngày (Daily Scheduled Cron Job)**   * **Mục đích:** Quét và xử lý tất cả các yêu cầu duyệt đang chờ và đã quá hạn. * **Thời gian & Tần suất:**     + Sau khi chạy **Quy trình xử lý dữ liệu, Cronjob sẽ chạy cho chính quy trình này để đảm bảo các bản ghi được cập nhật nếu có cấu hình "Tự động duyệt" trong quy trình**   + Tác vụ được lên lịch để chạy **mỗi ngày một lần**, trong khoảng thời gian thấp điểm (ví dụ: từ **1:00 AM đến 4:00 AM**).      - *Nếu một cronjob chạy kéo dài đến sau 8:00 AM thì sẽ ảnh hưởng đến performance. → Cần dev phân tích dời lịch chạy cronjob lên từ 20:00 PM của ngày đến 04:00 AM để chạy cronjob.* * **Luồng xử lý của tác vụ:**    1. **Quét Quy trình:** Hệ thống tìm tất cả các quy trình duyệt đang Hoạt động có ít nhất một cấp duyệt được cấu hình Tự động duyệt > 0.   2. **Lọc Yêu cầu:** Đối với mỗi cấp duyệt đó, hệ thống tìm tất cả các bản ghi đang ở trạng thái chờ xử lý tại cấp này.   3. **So sánh Thời gian:** Đối với mỗi bản ghi, hệ thống tính toán       1. **Thời gian chờ (cấp đầu tiên) =** Thời gian hiện tại - [Thời gian tạo mới bản ghi ]      2. **Thời gian chờ (cấp tiếp theo) =** Thời gian hiện tại - [Thời gian cập nhật gần nhất của bản ghi ]   4. **Thực thi Hành động:** Nếu Thời gian chờ >= Số ngày Tự động duyệt đã cấu hình, hệ thống sẽ thực hiện các hành động sau       + **Hành động:** Phê duyệt.      + **Ghi Lịch sử:** Tạo một bản ghi lịch sử mới với:         - Người duyệt: **"System Admin"**.        - Hành động: **"Hệ thống duyệt"**        - Lý do: "Hệ thống xử lý".        - Trường hợp cấp cuối: kết thúc quy trình, chuyển trạng thái gốc. Ngoài lưu lịch sử cập nhật trạng thái trung gian và lưu lịch sử cập nhật theo logic duyệt gốc của màn hình      + **Chuyển cấp:**          - Chuyển yêu cầu đến cấp duyệt tiếp theo        - Trường hợp cấp cuối: kết thúc quy trình, chuyển trạng thái gốc của bản ghi.     **Xử lý Trường hợp Đặc biệt: Khi Admin Chỉnh sửa Quy trình**   * **Điều kiện kích hoạt:** Khi Admin lưu một quy trình duyệt và có sự thay đổi làm **giảm** giá trị Tự động duyệt của một cấp nào đó (ví dụ: từ 5 ngày xuống 2 ngày). * **Hành động:**    1. Ngoài việc lưu cấu hình mới, hệ thống phải kích hoạt một **tác vụ quét và xử lý tức thì**.   2. Tác vụ này sẽ thực hiện logic tương tự như tác vụ hàng ngày, nhưng **chỉ quét các bản ghi thuộc quy trình vừa được cập nhật**.   3. **Mục đích:** Để đảm bảo các bản ghi vừa trở nên "quá hạn" do sự thay đổi cấu hình sẽ được xử lý ngay lập tức, không cần chờ đến phiên quét vào đêm hôm sau.     **Ghi log khi:**   * **Log khi Bắt đầu/Kết thúc:** Mỗi lần tác vụ hàng ngày chạy, hệ thống phải ghi log thời điểm bắt đầu và kết thúc, cùng với tổng số bản ghi đã được quét và xử lý thành công. * **Log Lỗi (Error Logging):** Nếu tác vụ gặp lỗi khi đang xử lý một bản ghi cụ thể (ví dụ: lỗi kết nối cơ sở dữ liệu, bản ghi bị khóa...), hệ thống phải ghi lại một log vào một màn hình, bao gồm:    + Mã quy trình   + Tên quy trình   + Cấp duyệt.   + Mã ID của bản ghi bị lỗi.   + Thông báo lỗi chi tiết. * **Quan trọng:** Tác vụ phải tiếp tục xử lý các bản ghi tiếp theo chứ không dừng lại hoàn toàn.       * + - * Admin nhấn [Hủy]: Công tắc toggle của QT\_02 trên giao diện vẫn giữ nguyên ở trạng thái Tắt. Không có thay đổi nào về dữ liệu.   + Bước 3.2: Tìm thấy xung đột (Luồng thất bại) → Hệ thống KHÔNG hiển thị hộp thoại xác nhận. Thay vào đó, hệ thống hiển thị một thông báo lỗi (error message) chi tiết cho người dùng. "Không thể kích hoạt. Đã tồn tại quy trình **[Mã quy trình]** đang hoạt động. Vui lòng kiểm tra lại!". Công tắc toggle của QT\_02 trên giao diện vẫn giữ nguyên ở trạng thái Tắt. Không có thay đổi nào về dữ liệu. |
| **Tùy chỉnh** | | | | |
| Điều chỉnh | button | Có | Không | Chức năng điều chỉnh quy trình |
| **Sao chép** | button | Có | Không | Chức năng sao chép (nhân bản) quy trình |
| Xem lịch sử | button | Có | Không | Chức năng xem lịch sử Cập nhật quy trình |
| **Tạo mới** | button | Có | Không | Nhấn nút + Thêm mới.  Hệ thống điều hướng sang màn hình "Thêm mới quy trình áp dụng" trạng thái tạo mới |

Tạo mới

# Màn hình tạo mới

Mục đích: chức năng "Thêm mới quy trình duyệt" cho phép người quản trị hệ thống (Admin) định nghĩa và cấu hình các luồng duyệt nhiều cấp cho các đối tượng (màn hình) khác nhau trong hệ thống DMS như Đơn hàng, Chương trình khuyến mãi, Điểm bán, v.v.  
Mục tiêu là tạo ra một cơ chế linh hoạt, cho phép áp dụng các quy tắc phê duyệt khác nhau tùy theo từng quy trình nghiệp vụ, tùy theo trên màn hình có bao nhiêu action xử lý, đảm bảo dữ liệu được kiểm soát chặt chẽ trước khi được áp dụng chính thức.

Màn hình:

Mô tả:

* Placeholder theo rule chung của hệ thống.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| Tên quy trình | Text 200 | Có | Có | * Nhập tên cho quy trình, tối đa 200 ký tự, không bắt buộc, Free text nhập tự d |
| Dữ liệu áp dụng | Dropdown (Select onechoice) | Có | Có | Dữ liệu áp dụng mặc định hiển thị Placeholder: Chọn dữ liệu áp dụng  Cho phép chọn một từ Danh sách lựa chọn dữ liệu áp dụng (cố định):    |  | **Dữ liệu áp dụng** | **Màn hìn áp dụng** | | --- | --- | --- | | 1 | Duyệt điểm bán | Portal: Danh sách điểm bán  APP\_QL: Duyệt điểm bán mới | | 2 | Duyệt đăng ký trưng bày | Portal: Danh sách đăng ký trưng bày  APP\_QL: Xét duyệt đăng ký CTTB | | 3 | Duyệt đăng ký tích lũy | Portal: Danh sách đăng ký tích lũy  APP\_QL: Xét duyệt đăng ký CTTL | | 4 | Duyệt chương trình khuyến mãi | Portal: Chương trình khuyến mãi | | 5 | Duyệt Đơn hàng bán | Portal NPP: Đơn hàng bán | | 6 | Duyệt kiểm kho NPP | Portal: Duyệt kiểm kho NPP  Portal NPP: Kiểm kho | | 7 | Duyệt Bảng giá bán | Portal: Bảng giá bán | | 8 | Duyệt Giá bán Nhà phân phối | Portal NPP: Giá bán |   Được thay đổi lựa chọn bằng cách xóa hoặc search hoặc bỏ lựa chọn đã chọn, chọn lựa chọn khác.  Sau khi chọn → trường Mô tả hiển thị text tương ứng như sau:   |  | **Dữ liệu áp dụng** | **Text hiển thị** | | --- | --- | --- | | 1 | Duyệt điểm bán | Portal: Danh sách điểm bán  APP\_QL: Duyệt điểm bán mới | | 2 | Duyệt đăng ký trưng bày | Portal: Danh sách đăng ký trưng bày  APP\_QL: Xét duyệt đăng ký CTTB | | 3 | Duyệt đăng ký tích lũy | Portal: Danh sách đăng ký tích lũy  APP\_QL: Xét duyệt đăng ký CTTL | | 4 | Duyệt chương trình khuyến mãi | Portal: Chương trình khuyến mãi | | 5 | Duyệt Đơn hàng bán | Portal NPP: Đơn hàng bán | | 6 | Duyệt kiểm kho nhà phân phối | Portal: Duyệt kiểm kho NPP  Portal NPP: Kiểm kho | | 7 | Duyệt Bảng giá bán | Portal: Bảng giá bán | | 8 | Duyệt Giá bán Nhà phân phối | Portal NPP: Giá bán | |
| Mô tả | Text (300) | Có | Không | * Nhập mô tả cho quy trình, tối đa 300 ký tự, không bắt buộc, Free text nhập tự do * Hiển thị mặc định các text theo trường "Dữ liệu áp dụng" đã chọn:   Hiển thị tương ứng trên mô tả như sau:   |  |  | | --- | --- | | **Dữ liệu áp dụng** | **Text hiển thị** | | Duyệt điểm bán | Portal: Danh sách điểm bán  APP\_QL: Duyệt điểm bán mới | | Duyệt đăng ký trưng bày | Portal: Danh sách đăng ký trưng bày  APP\_QL: Xét duyệt đăng ký CTTB | | Duyệt đăng ký tích lũy | Portal: Danh sách đăng ký tích lũy  APP\_QL: Xét duyệt đăng ký CTTL | | Duyệt chương trình khuyến mãi | Portal: Chương trình khuyến mãi | | Duyệt Đơn hàng bán | Portal NPP: Đơn hàng bán | | Duyệt kiểm kho nhà phân phối | Portal: Duyệt kiểm kho NPP  Portal NPP: Kiểm kho | | Duyệt Bảng giá bán | Portal: Bảng giá bán | | Duyệt Giá bán Nhà phân phối | Portal NPP: Giá bán |   Cho phép xóa, nhập thêm mô tả. Khi xóa nội dung mô tả hiển thị Placeholder |
| Trạng thái áp dụng | Dropdown (Select onechoice) | Có | Có | Chọn trạng thái của đối tượng từ cơ sở dữ liệu, dựa trên màn hình tương ứng với Dữ liệu áp dụng như sau:   |  | **Dữ liệu áp dụng** | Lấy danh sách trạng thái từ các màn hình: | Trạng thái áp dụng | | --- | --- | --- | --- | | 1 | Duyệt điểm bán | Portal: Danh sách điểm bán | Mặc định: Không chọn   1. Khởi tạo 2. Hoạt động 3. Không hoạt động 4. Đã hủy | | 2 | Duyệt đăng ký trưng bày | Portal: Danh sách đăng ký trưng bày | Mặc định: Chờ duyệt | | 3 | Duyệt đăng ký tích lũy | Portal: Danh sách đăng ký tích lũy | Mặc định: Chờ duyệt | | 4 | Duyệt chương trình khuyến mãi | Portal: Chương trình khuyến mãi | Mặc định: không chọn  Danh sách:   1. Khởi tạo 2. Đang chờ duyệt 3. Sắp diễn ra 4. Đang diễn ra 5. Tạm ngưng 6. Từ chối | | 5 | Duyệt Đơn hàng bán | Portal NPP: Đơn hàng bán | Mặc định: Khởi tạo | | 6 | Duyệt kiểm kho nhà phân phối | Portal HO: Kiểm kho NPP (Khởi tạo)  Portal NPP: Kiểm kho (Chờ duyệt) | Mặc định: Không chọn  Danh sách:   1. Khởi tạo 2. Chờ duyệt | | 7 | Duyệt Bảng giá bán | Portal: Bảng giá bán | Mặc định: Khởi tạo | | 8 | Duyệt Giá bán Nhà phân phối | Portal NPP: Giá bán | Mặc định: Khởi tạo |   Cho phép chọn/bỏ chọn các trạng thái. không được để trống.  *(note thêm: Danh sách trạng thái trong dropdown này được load dựa trên giá trị đã chọn ở trường "**Dữ liệu áp dụng**".* *Lấy theo các trạng thái của màn hình theo mô tả ở trên. sẽ mở rộng phát triển cho các trạng thái khác (nếu có) ở các phase sau)* |
| Chức năng | Dropdown (Select onechoice) | Có | Có | Sau khi chọn trạng thái áp dụng, trên màn hình tương ứng trên portal có các quyền thao tác nào trong danh sách các quyền thao tác của màn hình sẽ hiển thị để chọn   * Phê duyệt * Hủy * Yêu Cầu Duyệt KM * Tạm Ngưng * Kết Thúc KM * Cập nhật trạng thái   Cho phép xóa để chọn lại, Không được để trống  **Bảng mapping khi chọn Dữ liệu áp dụng - Chọn Trạng thái áp dụng - Danh sách Chức năng gồm:**   | Dữ liệu áp dụng | Trạng thái áp dụng | Chức năng | | --- | --- | --- | | Duyệt điểm bán | Khởi tạo | Phê duyệt | | Hủy | | Hoạt động | Cập nhật trạng thái | | Không hoạt động | Cập nhật trạng thái | | Đã hủy | Phê duyệt | | Duyệt đăng ký trưng bày | Chờ duyệt | Phê duyệt | | Hủy | | Duyệt đăng ký tích lũy | Chờ duyệt | Phê duyệt | | Hủy | | Duyệt chương trình khuyến mãi | Khởi tạo | Yêu Cầu Duyệt KM | | Đang chờ duyệt | Phê duyệt | | Hủy | | Sắp diễn ra | Tạm ngưng | | Đang diễn ra | Tạm ngưng | | Tạm ngưng | Yêu Cầu Duyệt KM | | Kết Thúc KM | | Từ chối | Yêu Cầu Duyệt KM | | Kết thúc KM | | Duyệt Đơn hàng bán | Khởi tạo | Phê duyệt | | Hủy | | Duyệt kiểm kho nhà phân phối    *(Note: 2 quyền của màn hình Kiểm kho, Duyệt kiểm kho NPP)* | Khởi tạo | Phê duyệt | | Hủy | | Chờ duyệt | Phê duyệt | | Hủy | | Duyệt Bảng giá bán | Khởi tạo | Phê duyệt | | Hủy | | Duyệt Giá bán Nhà phân phối | Khởi tạo | Phê duyệt | | Hủy |   **Ví dụ 1:**  Chọn Dữ liệu áp dụng = Duyệt điểm bán  Trạng thái áp dụng = Khởi tạo  Chức năng:   * Xét trên màn hình trên portal liên quan đến Duyệt điểm bán là Danh sách điểm bán, có các action xử lý điểm bán liên quan đến quyền Phê duyệt và Hủy => Hiển thị Chức năng: "Phê duyệt" và "Hủy" để người dùng chọn.   + Chọn Phê quyệt: Tức là áp dụng quy trình duyệt n cấp này cho action Duyệt (icon duyệt) trên màn hình danh sách điểm bán   + Chọn Hủy: tức là áp dụng quy trình duyệt n cấp này cho action Hủy  (icon Hủy) trên màn hình danh sách điểm bán   **Ví dụ 2:**  Chọn Dữ liệu áp dụng = Duyệt chương trình khuyến mãi  Chọn Trạng thái là 1 trong danh sách sau:   1. Khởi tạo 2. Đang chờ duyệt 3. Sắp diễn ra 4. Đang diễn ra 5. Tạm ngưng 6. Từ chối   Tùy mỗi trạng thái sẽ có các chức năng xử lý khác nhau, tại 1 trạng thái áp dụng có bao nhiêu chức năng sẽ hiển thị để người dùng chọn   | Trạng thái áp dụng | Chức năng | | --- | --- | | Khởi tạo | * Yêu Cầu Duyệt KM | | Đang chờ duyệt | * Phê duyệt * Hủy | | Sắp diễn ra | * Tạm Ngưng | | Đang diễn ra | * Tạm Ngưng | | Tạm ngưng | * Yêu Cầu Duyệt KM * Kết Thúc KM | | Từ chối | * Yêu Cầu Duyệt KM * Kết Thúc KM |   *Tham khảo quy trình đổi trạng thái của Promotion* |
| Trạng thái sau áp dụng  Trạng thái sau áp dụng | Dropdown (Select onechoice) | Không | Không | Disable không cho chọn, trường này hiển thị mặc định như sau:   |  | Dữ liệu áp dụng | Trạng thái áp dụng | Chức năng | Trạng thái sau áp dụng | | --- | --- | --- | --- | --- | | 1 | Duyệt điểm bán | Khởi tạo | Phê duyệt | Hoạt động | | Hủy | Đã hủy | | Hoạt động | Cập nhật trạng thái | Không hoạt động | | Không hoạt động | Cập nhật trạng thái | Hoạt động | | Đã hủy | Phê duyệt | Khởi tạo | | 2 | Duyệt đăng ký trưng bày | Chờ duyệt | Phê duyệt | Đã duyệt | | Hủy | Từ chối duyệt | | 3 | Duyệt đăng ký tích lũy | Chờ duyệt | Phê duyệt | Đã duyệt | | Hủy | Từ chối duyệt | | 4 | Duyệt chương trình khuyến mãi | Khởi tạo | Yêu Cầu Duyệt KM | Đang chờ duyệt | | Đang chờ duyệt | Phê duyệt | Sắp diễn ra/ Đang diễn ra | | Hủy | Từ chối | | Sắp diễn ra | Tạm ngưng | Tạm ngưng | | Đang diễn ra | Tạm ngưng | Tạm ngưng | | Tạm ngưng | Yêu Cầu Duyệt KM | Đang chờ duyệt | | Kết Thúc KM | Kết thúc | | Từ chối | Yêu Cầu Duyệt KM | Đang chờ duyệt | | Kết Thúc KM | Kết thúc | | 5 | Duyệt Đơn hàng bán | Khởi tạo | Phê duyệt | Đã duyệt | | Hủy | Đã hủy | | 6 | Duyệt kiểm kho nhà phân phối | Khởi tạo | Phê duyệt | Chờ duyệt | | Hủy | Đã hủy | | Chờ duyệt | Phê duyệt | Đã hoàn thành | | Hủy | Đã từ chối | | 7 | Duyệt Bảng giá bán | Khởi tạo | Phê duyệt | Đã duyệt | | Hủy | Đã hủy | | 8 | Duyệt Giá bán Nhà phân phối | Khởi tạo | Phê duyệt | Đã duyệt | | Hủy | Đã hủy | |
| **Cấu hình duyệt** | | | | |
| **+ Thêm cấp** | Button | Có | Có | Button Thêm cấp, chọn để thêm cấp duyệt.  Cấp mới thêm hiển thị dưới cùng, Tên cấp = Cấp trước đó + 1 (ví dụ: Cấp 1; Cấp 2; Cấp 3.. Cấp n +1)  Cấp n+1 = 10 thì disable button Thêm cấp không cho chọn. Tối đa 10 cấp. Tối thiểu 1 cấp. |
| **Xóa** | Icon | Có | Không | Icon xóa cho phép xóa 1 cấp đã thêm trên lưới danh sách, khi xóa không cần confirm dữ liệu (Chỉ cho xóa khi chưa lưu) |
| **Duyệt vượt cấp** | Checkbox | Có | Không | Mặc định không chọn.  Cho phép chọn hoặc bỏ chọn   * Khi chọn:  Tất cả nhóm quyền được cài đặt ở mọi cấp đều có thể nhìn thấy và thực hiện quyền Duyệt/Từ chối cho toàn bộ các cấp trong quy trình duyệt. Ví dụ: Quy trình có 3 cấp duyệt:  Cấp 1: Trưởng nhóm  Cấp 2: Trưởng phòng  Cấp 3: Giám đốc  Nếu chọn “Duyệt vượt cấp”, thì cả Trưởng nhóm, Trưởng phòng và Giám đốc (tức tất cả các nhóm quyền được chọn ở các cấp) đều sẽ nhìn thấy nút Duyệt/Từ chối cho cả 3 cấp.  -> Nghĩa là Giám đốc hay Trưởng nhóm đều có thể duyệt luôn từ cấp 1 đến cấp 3 mà không cần chờ các cấp dưới hoàn tất.  Nếu nhóm quyền khi duyệt ở cấp cao hơn thì tự động coi như đã duyệt luôn các cấp dưới cấp của nhóm đó. Ví dụ: Trưởng phòng KD thuộc cấp 3. Khi duyệt , hệ thống đã duyệt cấp 3, mặc định cấp 2 đã duyệt. * Khi không chọn: Quy trình duyệt diễn ra tuần tự: cấp 1 xong mới đến cấp 2, rồi đến cấp n. Mỗi cấp chỉ thấy nút Duyệt / Từ chối khi cấp trước đã hoàn tất.   Xem ví dụ mô tả cho quy trình có duyệt vượt cấp |
| **Cấp duyệt** | Data | Không | Có | Mặc định như hình:      Lưới này sẽ được sinh ra động các cấp duyệt khi chọn button "Thêm cấp"  Hiển thị cấp duyệt tương ứng: "Cấp 1", "Cấp 2" ..., "Cấp n+1". n+1 là số cấp duyệt đã thêm. Tối đa 10 cấp  Không cho phép chỉnh sửa tên cấp. |
| **Nhóm quyền** | Dropdown (Multi-select) | Có | Có | Chọn (các) nhóm quyền sẽ thực hiện duyệt ở cấp này.  Danh sách nhóm quyền được load từ màn hình "Nhóm quyền". Dựa vào chức năng đã chọn để load các nhóm quyền theo danh sách Nhóm quyền như bên dưới:     | Dữ liệu áp dụng | Trạng thái áp dụng | Chức năng | Danh sách nhóm quyền (Multiselect) | | --- | --- | --- | --- | | Duyệt Danh sách điểm bán | Khởi tạo | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Phê duyệt** * **Hủy**   **Và: SS, ASM, RSM, SD (Luôn luôn load list này)**  Ví dụ: Admin HO, Admin NPP, Trade MKT, SS, ASM, RSM, SD | | Hủy | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Hủy**   **Và: SS, ASM, RSM, SD (Luôn luôn load list này)**  Ví dụ: Admin HO, Admin NPP, Trade MKT, SS, ASM, RSM, SD | | Hoạt động | Cập nhật trạng thái | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Cập nhật trạng thái**   **Và : SS, ASM, RSM, SD (Luôn luôn load list này)**  Ví dụ: Admin HO, Admin NPP, Trade MKT, SS, ASM, RSM, SD | | Không hoạt động | Cập nhật trạng thái | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Cập nhật trạng thái**   **Và : SS, ASM, RSM, SD (Luôn luôn load list này)**  Ví dụ: Admin HO, Admin NPP, Trade MKT, SS, ASM, RSM, SD | | Đã hủy | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Phê duyệt**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Duyệt Danh sách đăng ký trưng bày | Chờ duyệt | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Phê duyệt** * **Hủy**   **Và : SS, ASM, RSM, SD (Luôn luôn load list này)**  Ví dụ: Admin HO, Admin NPP, Trade MKT, SS, ASM, RSM, SD | | Hủy | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Hủy**   **Và: SS, ASM, RSM, SD (Luôn luôn load list này)**  Ví dụ: Admin HO, Admin NPP, Trade MKT, SS, ASM, RSM, SD | | Duyệt Danh sách đăng ký tích lũy | Chờ duyệt | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Phê duyệt** * **Hủy**   **Và : SS, ASM, RSM, SD (Luôn luôn load list này)**  Ví dụ: Admin HO, Admin NPP, Trade MKT, SS, ASM, RSM, SD | | Hủy | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Hủy**   **Và: SS, ASM, RSM, SD (Luôn luôn load list này)**  Ví dụ: Admin HO, Admin NPP, Trade MKT, SS, ASM, RSM, SD | | Duyệt chương trình khuyến mãi | Khởi tạo | Yêu Cầu Duyệt KM | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Yêu Cầu Duyệt KM**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Đang chờ duyệt | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Phê duyệt** * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Hủy | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Sắp diễn ra | Tạm ngưng | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Tạm ngưng**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Đang diễn ra | Tạm ngưng | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Tạm ngưng**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Tạm ngưng | Yêu Cầu Duyệt KM | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Yêu Cầu Duyệt KM** * **Kết thúc KM**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Kết Thúc KM | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Kết thúc KM**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Từ chối | Yêu Cầu Duyệt KM | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Yêu Cầu Duyệt KM** * **Kết thúc KM**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Kết Thúc KM | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Kết thúc KM**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Duyệt Đơn hàng bán | Khởi tạo | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Phê duyệt** * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Hủy | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Hủy**   **Và: SS/SM**  Ví dụ: **SS/SM,** Admin HO | | Duyệt kiểm kho Nhà phân phối | Khởi tạo | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình NPP: Kiểm kho):   * **Phê duyệt** * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Hủy | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình NPP: Kiểm kho):   * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Chờ duyệt | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình HO: Duyệt kiểm kho NPP):   * **Phê duyệt** * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Hủy | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình HO: Duyệt kiểm kho NPP):   * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Duyệt Bảng giá bán | Khởi tạo | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Phê duyệt** * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Hủy | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Duyệt Giá bán nhà phân phối | Khởi tạo | Phê duyệt | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Phê duyệt** * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT | | Hủy | - Nhóm quyền được phân quyền (Thỏa tất cả các quyền sau trên màn hình):   * **Hủy**   Ví dụ: Admin HO, Admin NPP, Trade MKT |   Placeholder: Chọn nhóm quyền  Hiển thị dạng thẻ tags các nhóm quyền, cho phép xóa, chọn lại  Validation:   * Phải chọn ít nhất 1 nhóm quyền. được chọn nhiều nhóm quyền. * Thêm option "Tất cả" ở đầu danh sách để người dùng chọn nhanh tất cả nhóm quyền trên danh sách * Chỉ cần một người dùng bất kỳ thuộc một trong các nhóm quyền được chọn, thực hiện duyệt là đủ để chuyển sang cấp tiếp theo |
| **Hành động khi Duyệt** | Dropdown (Select onechoice) | Không | Không | Hiển thị Hành động khi Duyệt của màn hình đang chọn  Hiển thị mặc định, không cho chọn:   * Cấp 1: Trường hợp chỉ có một cấp duyệt (tức là cấp đầu = cấp cuối) khi đó hiển thị sẵn trong khung chọn là "Thay đổi sang trạng thái **@Trạng thái sau áp dụng**" * Từ cấp > 1 đến cấp n-1: hiển thị sẵn trong khung chọn là "Đi tới cấp tiếp theo". * Cấp n sẽ là: hiển thị sẵn trong khung chọn là "Thay đổi sang trạng thái **@Trạng thái sau áp dụng**"     Tooltip: “Sau khi người dùng chọn chức năng xử lý và chọn hành động duyệt sẽ chuyển đến cấp tiếp theo để xử lý, ghi nhận lịch sử cập nhật trạng thái trung gian cho bản ghi. Chỉ cấp cuối cùng mới kết thúc quy trình và chuyển trạng thái gốc, khi đó ghi nhận lịch sử cập nhật trạng thái trung gian và lịch sử cập nhật gốc của bản ghi"    Luôn lưu lịch sử cập nhật trạng thái trung gian: Quy trình, hành động, cấp, trạng thái trung gian, lý do, Người cập nhật, Thời gian cập nhật   * Trường hợp thay đổi trạng thái gốc => Lưu lịch sử cập nhật trạng thái theo xử lý gốc của màn hình * Trường hợp hệ thống duyệt có lý do khi duyệt → hiển thị lý do mặc định khi duyệt: "Hệ thống xử lý"  * + Quy trình, hành động, cấp, trạng thái trung gian, lý do (hệ thống xử lý) , Người cập nhật (System admin), Thời gian cập nhật |
| **Hành động khi Từ chối** | Dropdown (Select onechoice) | Có | Có | Hiển thị Hành động khi Từ chối của màn hình đang chọn   * Placeholder: Chọn Hành động khi Từ chối  * Tooltip: “Sau khi người dùng chọn chức năng xử lý và chọn hành động "Từ chối", dựa vào hành động khi Từ chối để xử lý trở về cấp trước (Hệ thống sẽ ghi nhận lịch sử cập nhật trạng thái trung gian) hay thay đổi sang trạng thái từ chối tương ứng để kết thúc quy trình. Khi kết thúc quy trình ghi nhận lịch sử cập nhật trạng thái trung gian và lịch sử cập nhật gốc của bản ghi"   Hiển thị danh sách để chọn Hành động khi Từ chối. **B****ắt buộc phải chọn không được để trống.**    **Quy trình đang cấu hình có Trạng thái khi từ chối thì hiển thị 2 option trong khung chọn là**  1/ Cấp 1: (sẽ có 2 lựa chọn sau)   * Không thay đổi * Thay đổi sang trạng thái @**Trạng thái khi từ chối**   2/ Cấp >1: (sẽ có 2 lựa chọn sau)   * Thay đổi sang trạng thái @**Trạng thái khi từ chối** * Trở về cấp duyệt trước   **Nếu Quy trình đang cấu hình KHÔNG CÓ Trạng thái khi từ chối thì hiển thị**  1/ Cấp 1 luôn hiển thị mặc định 1 lựa chọn duy nhất là:    * Không thay đổi   2/ Cấp >1 luôn hiển thị mặc định 1 lựa chọn duy nhất là:    * Trở về cấp duyệt trước     **Mô tả:**  **Logic cho Hành động khi Từ chối:**   * Khi "*Không thay đổi"* tức là thao tác tại cấp xử lý này sẽ chỉ ghi nhận lịch sử cập nhật trạng thái trung gian chứ không thay đổi chuyển cấp hay đầy lùi như các logic khác. Vẫn giữ nguyên trạng thái trung gian và chờ xử lý ở cấp này. * Khi chọn *"Trở về cấp duyệt trước"*:     + **Hành động Từ chối sẽ Quay lại cấp trước đó:** Khi hành động "Từ chối" sẽ trả về cho cấp duyệt ngay trước đó xử lý   + Khi từ chối sẽ nhập lý do từ chối duyệt trên mỗi popup của màn hình tương ứng, lý do này sẽ ghi nhận ở màn hình Cập nhật trạng thái trung gian * Khi chọn "*Thay đổi sang trạng thái @**Trạng thái khi từ chối*****"**:    + **Hành động Từ chối sẽ Dừng quy trình:** Khi hành động "Từ chối" sẽ thay đổi trạng thái gốc của màn hình và kết thúc quy trình duyệt của bản ghi.   + Khi từ chối sẽ nhập lý do từ chối duyệt trên mỗi popup của màn hình tương ứng, lý do này sẽ ghi nhận ở màn hình Cập nhật trạng thái trung gian và theo logic xử lý gốc của màn hình.   **Xem danh sách trạng thái khi từ chối với từng trường hợp cài đặt quy trình:**  Trạng thái từ chối   |  | Dữ liệu áp dụng | Trạng thái áp dụng | Chức năng | Trạng thái sau áp dụng | **Trạng thái khi từ chối** | | --- | --- | --- | --- | --- | --- | | 1 | Duyệt điểm bán | **Khởi tạo** | **Phê duyệt** | **Hoạt động** | **Đã hủy** | | Hủy | Đã hủy |  | | Hoạt động | Cập nhật trạng thái | Không hoạt động |  | | Không hoạt động | Cập nhật trạng thái | Hoạt động |  | | Đã hủy | Phê duyệt | Khởi tạo |  | | 2 | Duyệt đăng ký trưng bày | **Chờ duyệt** | **Phê duyệt** | **Đã duyệt** | **Từ chối duyệt** | | Hủy | Từ chối duyệt |  | | 3 | Duyệt đăng ký tích lũy | **Chờ duyệt** | **Phê duyệt** | **Đã duyệt** | **Từ chối duyệt** | | Hủy | Từ chối duyệt |  | | 4 | Duyệt chương trình khuyến mãi | Khởi tạo | Yêu Cầu Duyệt KM | Đang chờ duyệt |  | | **Đang chờ duyệt** | **Phê duyệt** | **Sắp diễn ra/ Đang diễn ra** | **Từ chối** | | Hủy | Từ chối |  | | Sắp diễn ra | Tạm ngưng | Tạm ngưng |  | | Đang diễn ra | Tạm ngưng | Tạm ngưng |  | | **Tạm ngưng** | **Yêu Cầu Duyệt KM** | **Đang chờ duyệt** | **Kết thúc** | | Kết Thúc KM | Kết thúc |  | | **Từ chối** | **Yêu Cầu Duyệt KM** | **Đang chờ duyệt** | **Kết thúc** | | Kết Thúc KM | Kết thúc |  | | 5 | Duyệt Đơn hàng bán | **Khởi tạo** | **Phê duyệt** | **Đã duyệt** | **Đã hủy** | | Hủy | Đã hủy |  | | 6 | Duyệt kiểm kho nhà phân phối    *(Note: 2 quyền của màn hình Kiểm kho, Duyệt kiểm kho NPP)* | **Khởi tạo** | **Phê duyệt** | **Chờ duyệt** | **Đã hủy** | | Hủy | Đã hủy |  | | **Chờ duyệt** | **Phê duyệt** | **Đã hoàn thành** | **Đã từ chối** | | Hủy | Đã từ chối |  | | 7 | Duyệt Bảng giá bán | **Khởi tạo** | **Phê duyệt** | **Đã duyệt** | **Đã hủy** | | Hủy | Đã hủy |  | | 8 | Duyệt Giá bán Nhà phân phối | **Khởi tạo** | **Phê duyệt** | **Đã duyệt** | **Đã hủy** | | Hủy | Đã hủy |  |     *Luôn lưu lịch sử cập nhật trạng thái trung gian: Quy trình, cấp duyệt, hành động, trạng thái trung gian, lý do, Người cập nhật, Thời gian cập nhật*   * *Trường hợp thay đổi trạng thái gốc => Lưu lịch sử cập nhật trạng thái theo xử lý gốc của màn hình* * *Trường hợp hệ thống duyệt có lý do khi xử lý → hiển thị lý do mặc định: "Hệ thống xử lý"* * + *Quy trình, hành động, cấp, trạng thái trung gian, lý do (hệ thống xử lý) , Người cập nhật (System admin), Thời gian cập nhật* |
| **Tự động duyệt** | Number input | Có | Không | Mặc định hiển thị số 0. Giá trị 0 có nghĩa là tính năng Tự động duyệt không được áp dụng cho cấp duyệt này.  Tooltip: 'Nhập số ngày tự động duyệt tối thiểu 1, tối đa 99 ngày. Hệ thống tự động chuyển trạng thái duyệt tương ứng.'  Không nhập hiển thị mặc định số 0, hiểu là không áp dụng tự động chuyển trạng thái duyệt. chỉ cho nhập số dương, không cho nhập số thập phân. tính theo đơn vị ngày.  Nhập < số 0 → reset = 0; nhập >99 → reset = 99.  Nếu nhập hệ thống kiểm tra đủ số ngày nếu chưa thực hiện phê duyệt sẽ tự động chuyển trạng thái duyệt thành công tương ứng với từng cấp    **Tác vụ Tự động Hàng ngày (Daily Scheduled Cron Job)** Quy trình chạy cronjob **Tác vụ Tự động Hàng ngày (Daily Scheduled Cron Job)**   * **Mục đích:** Quét và xử lý tất cả các yêu cầu duyệt đang chờ và đã quá hạn. * **Thời gian & Tần suất:**     + Sau khi chạy **Quy trình xử lý dữ liệu, Cronjob sẽ chạy cho chính quy trình này để đảm bảo các bản ghi được cập nhật nếu có cấu hình "Tự động duyệt" trong quy trình**   + Tác vụ được lên lịch để chạy **mỗi ngày một lần**, trong khoảng thời gian thấp điểm (ví dụ: từ **1:00 AM đến 4:00 AM**).      - *Nếu một cronjob chạy kéo dài đến sau 8:00 AM thì sẽ ảnh hưởng đến performance. → Cần dev phân tích dời lịch chạy cronjob lên từ 20:00 PM của ngày đến 04:00 AM để chạy cronjob.* * **Luồng xử lý của tác vụ:**    1. **Quét Quy trình:** Hệ thống tìm tất cả các quy trình duyệt đang Hoạt động có ít nhất một cấp duyệt được cấu hình Tự động duyệt > 0.   2. **Lọc Yêu cầu:** Đối với mỗi cấp duyệt đó, hệ thống tìm tất cả các bản ghi đang ở trạng thái chờ xử lý tại cấp này.   3. **So sánh Thời gian:** Đối với mỗi bản ghi, hệ thống tính toán       1. **Thời gian chờ (cấp đầu tiên) =** Thời gian hiện tại - [Thời gian tạo mới bản ghi ]      2. **Thời gian chờ (cấp tiếp theo) =** Thời gian hiện tại - [Thời gian cập nhật gần nhất của bản ghi ]   4. **Thực thi Hành động:** Nếu Thời gian chờ >= Số ngày Tự động duyệt đã cấu hình, hệ thống sẽ thực hiện các hành động sau       + **Hành động:** Phê duyệt.      + **Ghi Lịch sử:** Tạo một bản ghi lịch sử mới với:         - Người duyệt: **"System Admin"**.        - Hành động: **"Hệ thống duyệt"**        - Lý do: "Hệ thống xử lý".        - Trường hợp cấp cuối: kết thúc quy trình, chuyển trạng thái gốc. Ngoài lưu lịch sử cập nhật trạng thái trung gian còn lưu lịch sử cập nhật theo logic duyệt gốc của màn hình      + **Chuyển cấp:**          - Chuyển yêu cầu đến cấp duyệt tiếp theo        - Trường hợp cấp cuối: kết thúc quy trình, chuyển trạng thái gốc của bản ghi.     **Xử lý Trường hợp Đặc biệt: Khi Admin Chỉnh sửa Quy trình**   * **Điều kiện kích hoạt:** Khi Admin lưu một quy trình duyệt và có sự thay đổi làm **giảm** giá trị Tự động duyệt của một cấp nào đó (ví dụ: từ 5 ngày xuống 2 ngày). * **Hành động:**    1. Ngoài việc lưu cấu hình mới, hệ thống phải kích hoạt một **tác vụ quét và xử lý tức thì**.   2. Tác vụ này sẽ thực hiện logic tương tự như tác vụ hàng ngày, nhưng **chỉ quét các bản ghi thuộc quy trình vừa được cập nhật**.   3. **Mục đích:** Để đảm bảo các bản ghi vừa trở nên "quá hạn" do sự thay đổi cấu hình sẽ được xử lý ngay lập tức, không cần chờ đến phiên quét vào đêm hôm sau.     **Ghi log khi:**   * **Log khi Bắt đầu/Kết thúc:** Mỗi lần tác vụ hàng ngày chạy, hệ thống phải ghi log thời điểm bắt đầu và kết thúc, cùng với tổng số bản ghi đã được quét và xử lý thành công. * **Log Lỗi (Error Logging):** Nếu tác vụ gặp lỗi khi đang xử lý một bản ghi cụ thể (ví dụ: lỗi kết nối cơ sở dữ liệu, bản ghi bị khóa...), hệ thống phải ghi lại một log vào một màn hình, bao gồm:    + Mã quy trình   + Tên quy trình   + Cấp duyệt.   + Mã ID của bản ghi bị lỗi.   + Thông báo lỗi chi tiết. * **Quan trọng:** Tác vụ phải tiếp tục xử lý các bản ghi tiếp theo chứ không dừng lại hoàn toàn.    *Lưu ý khi vận hành:*   * *Khi cả 2 quy trình Đồng ý và Từ chối cùng có setup tự động duyệt, cả 2 quy trình cấu hình y chang nhau và cùng chạy song song thì sẽ xảy ra trường hợp ở cấp duyệt cuối sẽ chuyển trạng thái gốc theo quy trình nào? Lấy **Trạng thái sau áp dụng**  nào?* * ***Trường hợp này xảy ra, hệ thống sẽ xét trên quy trình nào tạo trước (dd/mm/yyyy hh:mm:ss)để chuyển trạng thái sau áp dụng tương ứng.*** |
| **Lưu** | Button | Có | Không | Khi nhấn Lưu hiển thị thông báo: Bạn có chắc chắn thao tác thêm mới hay không?   * **Hủy:** Đóng popup xác nhận, không làm gì cả. * **Đồng ý**:   Trước khi lưu cần kiểm tra:   1. 1. **Kiểm tra tính đầy đủ:** Tất cả các trường bắt buộc phải được điền. nếu không hiển thị inline dưới các trường "Trường @Tên trường là bắt buộc!"    2. **Kiểm tra tổng thể:**        1. Phải có ít nhất một Cấp duyệt được cấu hình, nếu không hiển thị thông báo chung: "Quy trình phải có ít nhất một cấp duyệt, vui lòng kiểm tra lại!"       2. Khi chuyển đổi chọn hoặc bỏ chọn Duyệt vượt cấp, check trùng nhóm quyền ở các cấp, các case báo lỗi như sau:           1. ON sang OFF: Cho phép trùng nhóm quyền nên bỏ qua check trùng nhóm quyền khi lưu          2. OFF sang ON: Khi Lưu highlight các ô bị lỗi bằng viền đỏ.  và Hiển thị 1 câu thông báo lỗi như sau: "Nhóm quyền @tên nhóm quyền 1, tên nhóm quyền 2,.. bị trùng ở các cấp. Vui lòng kiểm tra lại!"    3. **Kiểm tra có tồn tại quy trình "đang hoạt động" của cùng "trạng thái áp dụng" và cùng "Chức năng" hay không?**  * **Trường hợp A: KHÔNG TÌM THẤY xung đột**  * + Lưu thông tin quy trình duyệt  * + Gán trạng thái mặc định là **"Hoạt động"** (toggle ON).   + Tự sinh mã quy trình AWFYYYYMMDDXXX.   + Hiển thị thông báo trên giao diện: **"Đã kích hoạt quy trình thành công. Hệ thống đang tự động áp dụng quy trình cho các dữ liệu hiện có. Quá trình này có thể mất vài phút.".**   + Đóng popup và tải lại lưới danh sách.   + Xem quy trình xử lý dữ liệu sau khi lưu:    Quy trình xử lý dữ liệu cũ trước và sau khi active quy trình duyệt **Tóm tắt:**   | Loại Bản ghi | Trạng thái Bản ghi | Hành động Hệ thống | Kết quả | | --- | --- | --- | --- | | **A. Bản ghi Cũ (Pre-activation)** | **= Trạng thái Áp dụng** | **Di chuyển Dữ liệu (Migrate)** | Được "kéo" vào quy trình mới, bắt đầu từ Cấp 1. | |  | **≠ Trạng thái Áp dụng** | **Bỏ qua (Ignore)** | Hoàn toàn không bị ảnh hưởng. Giữ nguyên trạng thái và logic cũ. | | **B. Bản ghi Mới (Post-activation)** | (Luôn là Trạng thái Áp dụng) | **Tự động Áp dụng (Apply)** | Tự động áp dụng quy trình, bắt đầu từ Cấp 1 |   **Chi tiết:**  **A. Bản ghi Cũ (Pre-activation):** Dữ liệu đang chạy khi CHƯA có quy trình duyệt   * Trước khi active quy trình duyệt: Trước khi chức năng này được triển khai, hệ thống hoạt động theo mô hình thay đổi trạng thái trực tiếp.    + Ví dụ khi một điểm bán được tạo, nó có trạng thái Khởi tạo.   + Một người dùng có quyền (ví dụ: Admin) sẽ vào màn hình, nhấn nút "Duyệt"   + Hành động này sẽ gọi trực tiếp đến hàm xử lý gốc, cập nhật trạng thái của điểm bán trong CSDL từ Khởi tạo -> Hoạt động. * Dữ liệu cũ sẽ:    + Không có trạng thái trung gian: Dữ liệu này sẽ trống với các điểm bán ko áp dụng quy trình duyệt   + Lịch sử đơn giản: Lịch sử được ghi nhận theo thao tác xử lý gốc của màn hình, Không có lưu lịch sử cập nhật trạng thái trung gian   + Phân quyền cứng: Quyền duyệt được gán cứng cho một nhóm quyền cụ thể, nhóm quyền đó có quyền thao tác trên danh sách hiển thị theo dữ liệu phân quyền.     **Case A.1 Trạng thái bản ghi cũ = Trạng thái áp dụng của quy trình**   1. **Trigger (Kích hoạt):** Ngay sau khi Admin kích hoạt quy trình. 2. **Hành động Backend (Migration Script):**     * **Tạo script di chuyển dữ liệu (migration script)**.      1. Lấy ID của quy trình duyệt (quy trình ĐANG ACTIVE)      2. Tìm tất cả các bản ghi cũ (dữ liệu được tạo TRƯỚC thời điểm quy trình được kích hoạt): Hệ thống tìm **tất cả** các điểm bán có Trạng thái chính = **"Trạng thái áp dụng của quy trình"** VÀ được tạo **trước** thời điểm kích hoạt.      3. Sao lưu dữ liệu      4. Vòng lặp xử lý:         1. Cập nhật Trạng thái trung gian:  ApprovalStatus = 'Đang ở cấp 1, chờ [Nhóm quyền Cấp 1] xử lý.'         2. **Tạo Lịch sử Duyệt:** Tạo một bản ghi lịch sử đầu tiên cho từng bản ghi            + ID của bản ghi đang xử lý.            + ID của quy trình vừa được kích hoạt.            + Cấp duyệt: Cấp 1            + Người cập nhật: System admin            + Ngày tạo: **Thời gian tạo (CreatedAt)** của chính bản ghi đó, để đảm bảo tính năng "Tự động duyệt" có thể tính toán chính xác.            + Ngày cập nhật: Thời gian cập nhật dd/mm/yyyy hh:mm:ss         3. Thời điểm bắt đầu: Các bản ghi cũ sẽ bắt đầu từ thời gian tạo của chính bản ghi đó làm thời điểm bắt đầu quy trình. Điều này giúp tính năng "Tự động duyệt" (nếu có) hoạt động chính xác.    * **Kế hoạch Quay lui (Rollback):** Nếu có sự cố nghiêm trọng không thể khắc phục ngay, kế hoạch quay lui sẽ được kích hoạt:      + Khôi phục cơ sở dữ liệu từ bản sao lưu đã tạo.    * **Thời gian chạy:** Chạy ngay lập tức sau khi kích hoạt quy trình      + Script phải được thiết kế để có thể chạy lại nhiều lần mà không gây ra lỗi trùng lặp. Sẽ luôn kiểm tra xem một bản ghi đã có trong Lịch sử duyệt hay chưa trước khi xử lý.      + Xung đột với hành động người dùng (nếu có): Người dùng đang cố gắng xử lý một bản ghi cũ theo luồng cũ ngay trong lúc tác vụ đang chạy.        1. Hiển thị một thông báo khi người dùng thao tác bất kỳ trên bản ghi: "Quy trình mới đang được áp dụng cho bản ghi này. Vui lòng thử lại sau ít phút."    * **Xử lý hàng loạt & an toàn:** Script sẽ chạy dưới nền (background job), xử lý theo từng lô (Thay vì xử lý từng bản ghi, tác vụ sẽ xử lý theo từng lô (ví dụ: 1000 bản ghi mỗi lần) để giảm số lượng giao dịch), có cơ chế thử lại (retry) và ghi log kết quả chi tiết. 3. **Hành động Frontend (UI):**     * **Đối với Người dùng khác Admin HO:** Khi họ tải lại màn hình ví dụ: danh sách điểm bán, họ sẽ thấy các điểm bán "Khởi tạo" cũ giờ đây đã có Trạng thái trung gian và icon xem lịch sử.    * **Đối với Admin HO:** Admin sẽ có một màn hình để theo dõi tiến trình và xem báo cáo kết quả của migration script.       + Sau khi lặp qua tất cả các bản ghi, tác vụ sẽ ghi lại một log tổng kết:  * + - * Thời gian bắt đầu và kết thúc.       * Tổng số bản ghi "dữ liệu được tạo TRƯỚC thời điểm quy trình được kích hoạt" đã tìm thấy.       * Tổng số bản ghi đã được di chuyển thành công.       * Danh sách các bản ghi bị lỗi (nếu có của hệ thống)   **Case A.2: Bản Ghi Cũ có Trạng thái "khác" Trạng thái Áp dụng**   1. **Trigger:** Tại thời điểm kích hoạt quy trình. 2. **Hành động Backend:**     * **BỎ QUA (IGNORE):** Migration script được thiết kế để **hoàn toàn bỏ qua** những bản ghi này. 3. **Hành động Frontend:**     * **Không thay đổi:** Giao diện cho các điểm bán "Hoạt động", "Đã hủy"... vẫn hiển thị như cũ. Chúng sẽ không có Trạng thái trung gian và không có icon lịch sử duyệt, vì chúng chưa bao giờ tham gia vào một quy trình duyệt nào. 4. **Tình huống đặc biệt:**     * **Trường hợp: Tại thời điểm này bản ghi có trạng thái khác Trạng thái áp dụng. nhưng một số trường hợp có thể cập nhật trạng thái.** Người dùng thực hiện **cập nhật trạng thái** làm thay đổi trạng thái về bằng "Trạng thái áp dụng".    * **Giải pháp:** Hệ thống cần có một cơ chế kiểm tra tại thời điểm thay đổi trạng thái.       + Khi đó hệ thống sẽ kiểm tra: "Có quy trình duyệt nào đang hoạt động cho trạng thái "Trạng thái áp dụng" không?".      + Nếu có, hệ thống sẽ tự động áp dụng quy trình mới cho bản ghi đó ngay tại thời điểm nó được chuyển về "Trạng thái áp dụng". Bản ghi này sẽ được coi như một bản ghi "mới" đối với quy trình *(xem B).*     **B. Xử Lý Bản Ghi Mới** (Sau Khi Quy Trình Duyệt Được Active)  Đây là luồng xử lý chuẩn và đơn giản hơn, áp dụng cho tất cả các bản ghi được tạo ra sau thời điểm quy trình được kích hoạt. Mô tả cách xử lý:  1. **Trigger:** Người dùng tạo mới hoặc chuyển trạng thái bản ghi = Trạng thái áp dụng (Sau Khi Quy Trình Duyệt Được Active) 2. **Hành động Backend:**     * **Tự động Áp dụng Quy trình:** Hệ thống sẽ kiểm tra: "Có quy trình nào đang hoạt động cho Trạng thái chính = "**Trạng thái áp dụng"** không?".       + Thiết lập Trạng thái trung gian thành "Đang ở cấp 1, chờ [Nhóm quyền Cấp 1] xử lý".      + Tạo bản ghi lịch sử của Bản ghi này. 3. **Hành động Frontend:**     * Sau khi tạo thành công, người dùng sẽ thấy điểm bán mới của mình trong danh sách với Trạng thái trung gian đã được cập nhật, sẵn sàng cho cấp duyệt đầu tiên xử lý. 4. **Trường hợp: Tại thời điểm này bản ghi đã có trạng thái khác Trạng thái áp dụng.** Người dùng thực hiện **cập nhật trạng thái** làm thay đổi trạng thái về bằng "Trạng thái áp dụng".    1. Hệ thống cần có một cơ chế kiểm tra tại thời điểm thay đổi trạng thái.        * Khi đó hệ thống sẽ tự động áp dụng quy trình mới cho bản ghi đó ngay tại thời điểm nó được chuyển về "Trạng thái áp dụng". Bản ghi này sẽ được coi như một bản ghi "mới" đối với quy trình.      * Quy trình chạy cronjob sau khi chạy xử lý dữ liệu ở trên:  Quy trình chạy cronjob **Tác vụ Tự động Hàng ngày (Daily Scheduled Cron Job)**   * **Mục đích:** Quét và xử lý tất cả các yêu cầu duyệt đang chờ và đã quá hạn. * **Thời gian & Tần suất:**     + Sau khi chạy **Quy trình xử lý dữ liệu, Cronjob sẽ chạy cho chính quy trình này để đảm bảo các bản ghi được cập nhật nếu có cấu hình "Tự động duyệt" trong quy trình**   + Tác vụ được lên lịch để chạy **mỗi ngày một lần**, trong khoảng thời gian thấp điểm (ví dụ: từ **1:00 AM đến 4:00 AM**).      - *Nếu một cronjob chạy kéo dài đến sau 8:00 AM thì sẽ ảnh hưởng đến performance. → Cần dev phân tích dời lịch chạy cronjob lên từ 20:00 PM của ngày đến 04:00 AM để chạy cronjob.* * **Luồng xử lý của tác vụ:**    1. **Quét Quy trình:** Hệ thống tìm tất cả các quy trình duyệt đang Hoạt động có ít nhất một cấp duyệt được cấu hình Tự động duyệt > 0.   2. **Lọc Yêu cầu:** Đối với mỗi cấp duyệt đó, hệ thống tìm tất cả các bản ghi đang ở trạng thái chờ xử lý tại cấp này.   3. **So sánh Thời gian:** Đối với mỗi bản ghi, hệ thống tính toán       1. **Thời gian chờ (cấp đầu tiên) =** Thời gian hiện tại - [Thời gian tạo mới bản ghi ]      2. **Thời gian chờ (cấp tiếp theo) =** Thời gian hiện tại - [Thời gian cập nhật gần nhất của bản ghi ]   4. **Thực thi Hành động:** Nếu Thời gian chờ >= Số ngày Tự động duyệt đã cấu hình, hệ thống sẽ thực hiện các hành động sau       + **Hành động:** Phê duyệt.      + **Ghi Lịch sử:** Tạo một bản ghi lịch sử mới với:         - Người duyệt: **"System Admin"**.        - Hành động: **"Hệ thống duyệt"**        - Lý do: "Hệ thống xử lý".        - Trường hợp cấp cuối: kết thúc quy trình, chuyển trạng thái gốc. Ngoài lưu lịch sử cập nhật trạng thái trung gian và lưu lịch sử cập nhật theo logic duyệt gốc của màn hình      + **Chuyển cấp:**          - Chuyển yêu cầu đến cấp duyệt tiếp theo        - Trường hợp cấp cuối: kết thúc quy trình, chuyển trạng thái gốc của bản ghi.     **Xử lý Trường hợp Đặc biệt: Khi Admin Chỉnh sửa Quy trình**   * **Điều kiện kích hoạt:** Khi Admin lưu một quy trình duyệt và có sự thay đổi làm **giảm** giá trị Tự động duyệt của một cấp nào đó (ví dụ: từ 5 ngày xuống 2 ngày). * **Hành động:**    1. Ngoài việc lưu cấu hình mới, hệ thống phải kích hoạt một **tác vụ quét và xử lý tức thì**.   2. Tác vụ này sẽ thực hiện logic tương tự như tác vụ hàng ngày, nhưng **chỉ quét các bản ghi thuộc quy trình vừa được cập nhật**.   3. **Mục đích:** Để đảm bảo các bản ghi vừa trở nên "quá hạn" do sự thay đổi cấu hình sẽ được xử lý ngay lập tức, không cần chờ đến phiên quét vào đêm hôm sau.     **Ghi log khi:**   * **Log khi Bắt đầu/Kết thúc:** Mỗi lần tác vụ hàng ngày chạy, hệ thống phải ghi log thời điểm bắt đầu và kết thúc, cùng với tổng số bản ghi đã được quét và xử lý thành công. * **Log Lỗi (Error Logging):** Nếu tác vụ gặp lỗi khi đang xử lý một bản ghi cụ thể (ví dụ: lỗi kết nối cơ sở dữ liệu, bản ghi bị khóa...), hệ thống phải ghi lại một log vào một màn hình, bao gồm:    + Mã quy trình   + Tên quy trình   + Cấp duyệt.   + Mã ID của bản ghi bị lỗi.   + Thông báo lỗi chi tiết. * **Quan trọng:** Tác vụ phải tiếp tục xử lý các bản ghi tiếp theo chứ không dừng lại hoàn toàn.  * **Trường hợp B: TÌM THẤY xung đột**    1. Hiển thị popup cảnh báo: **"Đã tồn tại quy trình @tên quy trình đang hoạt động có cùng chức năng @tên chức năng****. Bạn có muốn lưu quy trình mới này ở trạng thái 'Không hoạt động' không?" Đồng ý/ Hủy**   2. **Chọn nút Đồng ý:**       + Lưu quy trình vào CSDL.      + Gán trạng thái là **"Không hoạt động"** (toggle OFF).      + Tự sinh mã quy trình AWFYYYYMMDDXXX.      + Hiển thị thông báo thành công, đóng popup và tải lại lưới danh sách.   3. **Chọn nút Hủy:** Đóng popup cảnh báo, người dùng quay lại màn hình chỉnh sửa.   --  *Mã quy trình hiển thị trên lưới danh sách quy trình . Mã quy trình hệ thống tự sinh khi lưu thành công, không cho chỉnh sửa: AWFYYYYMMDDXXX*  *Trong đó:*   * + *Refix: AWF là approval workflow*   + *YYYYMMDD: lấy theo năm - tháng - ngày hiện tại*   + *XXX: 3 số tự tăng* |
| **Đóng** | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin * Nếu màn hình đang có dữ liệu chưa lưu, hiển thị cảnh báo: "Bạn có chắc chắn muốn Thoát ?"    + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |

Quy trình xử lý dữ liệu khi chưa có quy trình duyệt và Migration data

**Quy trình Migration data**

Quy trình xử lý dữ liệu cũ trước và sau khi active quy trình duyệt

**Tóm tắt:**

| Loại Bản ghi | Trạng thái Bản ghi | Hành động Hệ thống | Kết quả |
| --- | --- | --- | --- |
| **A. Bản ghi Cũ (Pre-activation)** | **= Trạng thái Áp dụng** | **Di chuyển Dữ liệu (Migrate)** | Được "kéo" vào quy trình mới, bắt đầu từ Cấp 1. |
|  | **≠ Trạng thái Áp dụng** | **Bỏ qua (Ignore)** | Hoàn toàn không bị ảnh hưởng. Giữ nguyên trạng thái và logic cũ. |
| **B. Bản ghi Mới (Post-activation)** | (Luôn là Trạng thái Áp dụng) | **Tự động Áp dụng (Apply)** | Tự động áp dụng quy trình, bắt đầu từ Cấp 1 |

Chi tiết:

**A. Bản ghi Cũ (Pre-activation):** Dữ liệu đang chạy khi CHƯA có quy trình duyệt

* Trước khi active quy trình duyệt: Trước khi chức năng này được triển khai, hệ thống hoạt động theo mô hình thay đổi trạng thái trực tiếp.

  + Ví dụ khi một điểm bán được tạo, nó có trạng thái Khởi tạo.
  + Một người dùng có quyền (ví dụ: Admin) sẽ vào màn hình, nhấn nút "Duyệt"
  + Hành động này sẽ gọi trực tiếp đến hàm xử lý gốc, cập nhật trạng thái của điểm bán trong CSDL từ Khởi tạo -> Hoạt động.
* Dữ liệu cũ sẽ:

  + Không có trạng thái trung gian: Dữ liệu này sẽ trống với các điểm bán ko áp dụng quy trình duyệt
  + Lịch sử đơn giản: Lịch sử được ghi nhận theo thao tác xử lý gốc của màn hình, Không có lưu lịch sử cập nhật trạng thái trung gian
  + Phân quyền cứng: Quyền duyệt được gán cứng cho một nhóm quyền cụ thể, nhóm quyền đó có quyền thao tác trên danh sách hiển thị theo dữ liệu phân quyền.

**Case A.1 Trạng thái bản ghi cũ = Trạng thái áp dụng của quy trình**

1. **Trigger (Kích hoạt):** Ngay sau khi Admin kích hoạt quy trình.
2. **Hành động Backend (Migration Script):**

   * **Tạo script di chuyển dữ liệu (migration script)**.
     1. Lấy ID của quy trình duyệt (quy trình ĐANG ACTIVE)
     2. Tìm tất cả các bản ghi cũ (dữ liệu được tạo TRƯỚC thời điểm quy trình được kích hoạt): Hệ thống tìm **tất cả** các điểm bán có Trạng thái chính = **"Trạng thái áp dụng của quy trình"** VÀ được tạo **trước** thời điểm kích hoạt.
     3. Sao lưu dữ liệu
     4. Vòng lặp xử lý:
        1. Cập nhật Trạng thái trung gian:  ApprovalStatus = 'Đang ở cấp 1, chờ [Nhóm quyền Cấp 1] xử lý.'
        2. **Tạo Lịch sử Duyệt:** Tạo một bản ghi lịch sử đầu tiên cho từng bản ghi
           + ID của bản ghi đang xử lý.
           + ID của quy trình vừa được kích hoạt.
           + Cấp duyệt: Cấp 1
           + Người cập nhật: System admin
           + Ngày tạo: **Thời gian tạo (CreatedAt)** của chính bản ghi đó, để đảm bảo tính năng "Tự động duyệt" có thể tính toán chính xác.
           + Ngày cập nhật: Thời gian cập nhật dd/mm/yyyy hh:mm:ss
        3. Thời điểm bắt đầu: Các bản ghi cũ sẽ bắt đầu từ thời gian tạo của chính bản ghi đó làm thời điểm bắt đầu quy trình. Điều này giúp tính năng "Tự động duyệt" (nếu có) hoạt động chính xác.
   * **Kế hoạch Quay lui (Rollback):** Nếu có sự cố nghiêm trọng không thể khắc phục ngay, kế hoạch quay lui sẽ được kích hoạt:
     + Khôi phục cơ sở dữ liệu từ bản sao lưu đã tạo.
   * **Thời gian chạy:** Chạy ngay lập tức sau khi kích hoạt quy trình
     + Script phải được thiết kế để có thể chạy lại nhiều lần mà không gây ra lỗi trùng lặp. Sẽ luôn kiểm tra xem một bản ghi đã có trong Lịch sử duyệt hay chưa trước khi xử lý.
     + Xung đột với hành động người dùng (nếu có): Người dùng đang cố gắng xử lý một bản ghi cũ theo luồng cũ ngay trong lúc tác vụ đang chạy.
       1. Hiển thị một thông báo khi người dùng thao tác bất kỳ trên bản ghi: "Quy trình mới đang được áp dụng cho bản ghi này. Vui lòng thử lại sau ít phút."
   * **Xử lý hàng loạt & an toàn:** Script sẽ chạy dưới nền (background job), xử lý theo từng lô (Thay vì xử lý từng bản ghi, tác vụ sẽ xử lý theo từng lô (ví dụ: 1000 bản ghi mỗi lần) để giảm số lượng giao dịch), có cơ chế thử lại (retry) và ghi log kết quả chi tiết.
3. **Hành động Frontend (UI):**

   * **Đối với Người dùng khác Admin HO:** Khi họ tải lại màn hình ví dụ: danh sách điểm bán, họ sẽ thấy các điểm bán "Khởi tạo" cũ giờ đây đã có Trạng thái trung gian và icon xem lịch sử.
   * **Đối với Admin HO:** Admin sẽ có một màn hình để theo dõi tiến trình và xem báo cáo kết quả của migration script.

     + Sau khi lặp qua tất cả các bản ghi, tác vụ sẽ ghi lại một log tổng kết:

* + - * Thời gian bắt đầu và kết thúc.
      * Tổng số bản ghi "dữ liệu được tạo TRƯỚC thời điểm quy trình được kích hoạt" đã tìm thấy.
      * Tổng số bản ghi đã được di chuyển thành công.
      * Danh sách các bản ghi bị lỗi (nếu có của hệ thống)

**Case A.2: Bản Ghi Cũ có Trạng thái "khác" Trạng thái Áp dụng**

1. **Trigger:** Tại thời điểm kích hoạt quy trình.
2. **Hành động Backend:**

   * **BỎ QUA (IGNORE):** Migration script được thiết kế để **hoàn toàn bỏ qua** những bản ghi này.
3. **Hành động Frontend:**

   * **Không thay đổi:** Giao diện cho các điểm bán "Hoạt động", "Đã hủy"... vẫn hiển thị như cũ. Chúng sẽ không có Trạng thái trung gian và không có icon lịch sử duyệt, vì chúng chưa bao giờ tham gia vào một quy trình duyệt nào.
4. **Tình huống đặc biệt:**

   * **Trường hợp: Tại thời điểm này bản ghi có trạng thái khác Trạng thái áp dụng. nhưng một số trường hợp có thể cập nhật trạng thái.** Người dùng thực hiện **cập nhật trạng thái** làm thay đổi trạng thái về bằng "Trạng thái áp dụng".
   * **Giải pháp:** Hệ thống cần có một cơ chế kiểm tra tại thời điểm thay đổi trạng thái.

     + Khi đó hệ thống sẽ kiểm tra: "Có quy trình duyệt nào đang hoạt động cho trạng thái "Trạng thái áp dụng" không?".
     + Nếu có, hệ thống sẽ tự động áp dụng quy trình mới cho bản ghi đó ngay tại thời điểm nó được chuyển về "Trạng thái áp dụng". Bản ghi này sẽ được coi như một bản ghi "mới" đối với quy trình *(xem B).*

**B. Xử Lý Bản Ghi Mới** (Sau Khi Quy Trình Duyệt Được Active)

Đây là luồng xử lý chuẩn và đơn giản hơn, áp dụng cho tất cả các bản ghi được tạo ra sau thời điểm quy trình được kích hoạt.

#### Mô tả cách xử lý:

1. **Trigger:** Người dùng tạo mới hoặc chuyển trạng thái bản ghi = Trạng thái áp dụng (Sau Khi Quy Trình Duyệt Được Active)
2. **Hành động Backend:**

   * **Tự động Áp dụng Quy trình:** Hệ thống sẽ kiểm tra: "Có quy trình nào đang hoạt động cho Trạng thái chính = "**Trạng thái áp dụng"** không?".

     + Thiết lập Trạng thái trung gian thành "Đang ở cấp 1, đợi [Nhóm quyền Cấp 1] xử lý".
     + Tạo bản ghi lịch sử của Bản ghi này.
3. **Hành động Frontend:**

   * Sau khi tạo thành công, người dùng sẽ thấy điểm bán mới của mình trong danh sách với Trạng thái trung gian đã được cập nhật, sẵn sàng cho cấp duyệt đầu tiên xử lý.
4. **Trường hợp: Tại thời điểm này bản ghi đã có trạng thái khác Trạng thái áp dụng.** Người dùng thực hiện **cập nhật trạng thái** làm thay đổi trạng thái về bằng "Trạng thái áp dụng".
   1. Hệ thống cần có một cơ chế kiểm tra tại thời điểm thay đổi trạng thái.

      * Khi đó hệ thống sẽ tự động áp dụng quy trình mới cho bản ghi đó ngay tại thời điểm nó được chuyển về "Trạng thái áp dụng". Bản ghi này sẽ được coi như một bản ghi "mới" đối với quy trình.

Xem chi tiết

## Xem chi tiết

Click vào hyperlink tên quy trình → Hiển thị màn hình "Chi tiết quy trình duyệt"

* Disable tất cả các button, icon có thể thao tác trên màn hình. Chỉ cho xem không cho sửa bất kỳ dữ liệu nào trên màn hình
* Hiển thị button Đóng và icon đóng màn hình (dấu x) để thực hiện đóng màn hình xem chi tiết đang mở

Sao chép

## Sao chép

Click vào icon sao chép hiển thị màn hình tạo mới

Mục đích: Chức năng này cho phép người dùng tạo nhanh một quy trình duyệt mới bằng cách sao chép toàn bộ thông tin và cấu hình duyệt từ một quy trình đã có sẵn. Mục tiêu chính là tiết kiệm thời gian và giảm thiểu sai sót cho người dùng.

Thao tác:

* Từ màn hình "Danh sách quy trình": Người dùng tìm đến mã quy trình muốn sao chép và nhấp vào biểu tượng "Sao chép" (hình icon sao chép) ở cột "Tùy chỉnh".
* Hệ thống phản hồi: Hệ thống hiển thị cửa sổ (popup) "Thêm mới quy trình duyệt" và tự động điền các thông tin từ quy trình gốc vào các trường tương ứng theo quy tắc tạo mới. Trong đó Tên quy trình: **[Tên quy trình gốc ] - "Sao chép"**

Điều chỉnh

## Điều chỉnh

1/ Tại màn hình xem danh sách quy trình. Chọn icon cây bút . Chọn hiển thị màn hình "Chỉnh sửa quy trình duyệt".

2/ Cho phép chỉnh sửa:

* Thông tin chung của quy trình gồm: Tên quy trình, Mô tả quy trình.
* Disable "Dữ liệu áp dụng và Trạng thái áp dụng, Chức năng", Disable "Duyệt nhiều cấp":  không cho điều chỉnh.

3/ Thay đổi nhóm quyền ở một cấp. **Sau khi thay đổi nhóm quyền, chọn Lưu** →  Chuyển tất cả các yêu cầu đang Đang ở cấp 4, đợi "@tên nhóm quyền 1, tên nhón quyền 2,..." xử lý của nhóm quyền đã lưu sang cho nhóm quyền thay thế mới.

4/ Thay đổi Hành động khi Từ chối: Áp dụng quy tắc mới cho tất cả các hành động "Từ chối" xảy ra **sau khi lưu thay đổi.**

5/ Thay đổi Thời gian Tự động duyệt: Tính toán lại deadline cho tất cả yêu cầu đang chờ ở cấp đó dựa trên thời gian mới. (tính từ thời điểm cấp trước đó xử lý đến hiện tại theo thời gian mới update)

6/ Cho phép thêm cấp: Cấp mới thêm, hiển thị dưới cấp đã lưu. **Sau khi thêm cấp, chọn Lưu** → Quy trình có thêm cấp sẽ áp dụng từ lúc lưu thành công. Cùng thời điểm bản ghi vừa duyệt ở cấp cuối- quy trình cũng đang lưu thêm cấp => sesion ghi nhận trước khi update thành công quy trình mới thì lưu và xử lý theo flow trước khi lưu, và ngược lại.

7/ Không cho phép xóa cấp đã lưu, Chỉ hiển thị và chọn icon xóa  trên các cấp mới thêm chưa lưu.

8/ Ghi nhận lịch sử điều chỉnh  trên màn hình

9/ **Button "Lưu".**

**Đóng, Dấu x:** Tắt màn hình confirm trước khi tắt và không lưu dữ liệu điều chỉnh. Hiển thị thông báo confirm: Bạn có chắc chắn muốn Thoát ? Hủy/ Đồng ý.

Khi nhấn **Button "Lưu"** hiển thị thông báo: "**Bạn có chắc chắn thao tác cập nhật hay không?"**

* Đồng ý: Lưu thông tin thay đổi theo quy trình duyệt

  1. Trước khi lưu cần kiểm tra:
  2. **Kiểm tra tính đầy đủ:** Tất cả các trường bắt buộc phải được điền. nếu không hiển thị inline dưới các trường "Trường @Tên trường là bắt buộc!"
  3. **Kiểm tra tổng thể:**

     1. Khi chuyển đổi chọn hoặc bỏ chọn Duyệt vượt cấp, check trùng nhóm quyền ở các cấp, các case báo lỗi như sau:

1. 1. 1. 1. ON sang OFF: Cho phép trùng nhóm quyền nên bỏ qua check trùng nhóm quyền khi lưu
         2. OFF sang ON: Khi Lưu. Highlight các ô bị lỗi bằng viền đỏ. Hiển thị 1 câu thông báo lỗi như sau: "Nhóm quyền @tên nhóm quyền 1, tên nhóm quyền 2,.. bị trùng ở các cấp. Vui lòng kiểm tra lại!"

* Chọn Hủy: tắt thông báo, vẫn ở lại màn hình và không thay đổi bất kỳ dữ liệu nào.

Xem lịch sử

## **Màn hình Lịch sử duyệt**

Chọn icon xem lịch sử để xem chi tiết Cập nhật quy trình duyệt trên dòng đang chọn

1. Mục đích

Cung cấp một cửa sổ xem chi tiết, minh bạch về toàn bộ quá trình điều chỉnh một quy trình

2. Mô tả Giao diện

|  |  |  |
| --- | --- | --- |
| **Tên cột** | **Kiểu dữ liệu** | **Mô tả** |
| **Bộ lọc theo Thời gian** | Date Range Picker | * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn. Mặc định ngày hiện tại  * Đến Ngày >= Từ Ngày * Đến Ngày - Từ Ngày <= 30 ngày * Có thể chọn bất kỳ khoảng thời gian nào, miễn là  Đến Ngày - Từ Ngày <= 30 ngày (Lượng data history sẽ được lưu trữ từ 1-3 năm tùy theo hợp đồng từng công ty) |
| **Nút "Tìm kiếm"** | Button | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng nhập ngày để lọc 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách 3. **Hiển thị kết quả:** Danh sách sẽ Cập nhật và hiển thị  * Mặc định: Mặc định là ngày hiện tại.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Nút "Export"** | Button | Nhấn Export → Hệ thống Export ra file excel  Phải chọn đủ từ ngày - đến ngày mới được nhấn Export, trường hợp chưa chọn đủ Từ ngày - Đến ngày mà bấm Export, sẽ hiển thị thông báo: Vui lòng chọn thời gian để xem lịch sử!  Tên File Excel như sau: Lịch sử quy trình\_DDMMYYYYHHMMSS |
| **Lưới "Lịch sử cập nhật"** | Table / Grid | Hiển thị danh sách các bản ghi thay đổi theo thứ tự thời gian mới nhất ở trên cùng.  Hiển thị dòng chữ khi không tìm thấy bản ghi nào: "Không có lịch sử Cập nhật trong khoảng thời gian đã chọn." |
| **Mã lịch sử** | Data Column | Hệ thống sinh mã lịch sử,  Nối chuỗi (Mã quy trình - xxx) trong đó xxx là 3 số tự tăng |
| **Mã quy trình** | Data Column | Mã quy trình thực hiện điều chỉnh |
| **Thời gian cập nhật** | Data Column | Thời gian Cập nhật dd/mm/yyyy hh:mm:ss |
| **Người cập nhật** | Data Column | Mã người cập nhật |
| **Tên người cập nhật** | Data Column | Hiển thị tên người Cập nhật theo mã người cập nhật |
|  | icon | Xem chi tiết thay đổi quy trình |
| Đóng và dấu x | button đóng | Đóng popup và quay về màn hình trước đó |

**Lưới danh sách chi tiết thay đổi quy trình**

Click vào icom view hiển thị popup như hình:

|  |  |  |
| --- | --- | --- |
| **Tên Cột** | **Kiểu Dữ liệu** | **Mô tả** |
| STT | Number | Số thứ tự. |
| Cấp duyệt | Text | Cấp duyệt mà hành động được thực hiện (Cấp 1, Cấp 2...).  Cấp duyệt trống khi Cập nhật các trường thông tin chung. |
| Trường thông tin | Text | Trường thông tin Cập nhật chung: Tên quy trình, Mô tả, Nhóm quyền, Hành động khi Từ chối, Tự động duyệt, Duyệt vượt cấp.  Chỉnh sửa trên lưới danh sách chi tiết Cấu hình duyệt sẽ hiển thị |
| Thao tác | Text | Hành động đã thực hiện thay đổi dữ liệu trên quy trình duyệt đang mở tương ứng   | **Thao tác người dùng** | STT | Cấp duyệt | Trường thông tin | **Trường "Thao tác" ghi nhận** | Nội dung cũ | Nội dung mới | | --- | --- | --- | --- | --- | --- | --- | | Cập nhật dữ liệu chung | 1 | *để trống* | Tên quy trình | **Cập nhật** | Nội dung cũ | Nội dung mới | | Cập nhật dữ liệu chung | 2 | *để trống* | Mô tả | **Cập nhật** | Nội dung cũ | Nội dung mới | | Cập nhật dữ liệu cấu hình duyệt trên lưới danh sách | 3 | Cấp n | Nhóm quyền | **Cập nhật** | Nội dung cũ | Nội dung mới | | 4 | Cấp n | Hành động khi Từ chối | **Cập nhật** | Nội dung cũ | Nội dung mới | | 5 | Cấp n | Tự động duyệt | **Cập nhật** | Nội dung cũ (ví dụ: 0) | Nội dung mới (ví dụ: 5) | | 6 | *để trống* | Duyệt vượt cấp | **Cập nhật** | Có | Không | | 7 | Cấp m | Nhóm quyền | **Thêm mới** | *để trống* | Nội dung mới | | 8 | Cấp m | Hành động khi Từ chối | **Thêm mới** | *để trống* | Nội dung mới | | 9 | Cấp m | Tự động duyệt | **Thêm mới** | 0 | Nội dung mới | |
| Nội dung cũ | Text | Hiển thị giá trị của trường thông tin **trước khi** thay đổi.  Để trống nếu không có giá trị |
| Nội dung mới | Text | Hiển thị giá trị của trường thông tin **sau khi** thay đổi. |
| Đóng và dấu x | button đóng | Đóng popup và quay về màn hình trước đó |

**Export danh sách lịch sử hiển thị**

**Tên File Excel như sau: Lịch sử quy trình\_DDMMYYYYHHMMSS**

|  | Tên cột | Nội dung |
| --- | --- | --- |
| 1 | Màn hình: | Lịch sử Cập nhật quy trình duyệt nhiều cấp |
| 2 | Dữ liệu theo thời gian: | * Thời gian từ ngày - đến ngày mà người dùng lọc trước khi xuất file báo cáo lịch sử * Từ ngày [dd/mm/yyyy] đến ngày [dd/mm/yyyy] |
| 3 | Thời gian xuất báo cáo: | * Thời gian xuất báo cáo lịch sử thành công * [dd/mm/yyyy hh:mm:ss] |
| 4 | Người xuất báo cáo: | * User thực hiện xuất báo cáo lịch sử  * Mã người dùng - Tên người dùng |
| 5 | *Danh sách hiển thị gồm* | |
| 6 | Mã lịch sử | Mã lịch sử thực hiện cập nhật  Nếu điều chỉnh nhiều cột thì mã lịch sử lặp trên các dòng |
| 7 | Mã quy trình | Mã quy trình thực hiện điều chỉnh ứng với mã lịch sử |
| 8 | Cấp duyệt | Hiển thị tên cấp có thay đổi theo mã lịch sử  Cập nhật thông tin chung thì để trống cấp duyệt |
| 9 | Trường thông tin | Trường thông tin thực hiện điều chỉnh theo mã lịch sử |
| 10 | Thao tác | Hiển thị thao tác (Cập nhật, Thêm mới) |
| 11 | Nội dung cũ | Hiển thị nội dung cũ theo thao tác cập nhật, thêm mới cấp |
| 12 | Nội dung mới | Hiển thị nội dung mới theo thao tác cập nhật, thêm mới cấp |
| 13 | Thời gian cập nhật | Thời gian Cập nhật dd/mm/yyyy hh:mm:ss |
| 14 | Người cập nhật | Hiển thị mã người cập nhật |
| 15 | Tên người cập nhật | Tên người cập nhật |

liên quan

# **Quy trình xử lý và các màn hình liên quan**

## **Quy trình duyệt nhiều cấp**

trueKHÔNG Duyệt vượt cấp falseautotoptrue115214

## Mô tả quy trình

| # | Các bước xử lý | Mô tả |
| --- | --- | --- |
| 1 | Màn hình có bản ghi cần xử lý | Hệ thống kiểm tra màn hình có áp dụng quy trình duyệt. kiểm tra trạng thái áp dụng của quy trình |
| 2 | Trạng thái = Trạng thái áp dụng | Trạng thái bản ghi = Trạng thái áp dụng  Kích hoạt quy trình duyệt nhiều cấp |
| 3 | **Cấp duyệt đầu tiên** | Nếu quy trình chỉ có 1 cấp thì cấp đầu tiên = cấp cuối cùng => Trạng thái trung gian: Đang ở cấp 1, đợi "Tên nhóm quyền của cấp 1" xử lý |
| 4 | Duyệt | 4.1 Chọn Duyệt:  4.2 Chọn từ chối duyệt:  4.3 Dữ liệu cấu hình Tự động duyệt: Hệ thống chạy cronjob kiểm tra cấu hình tự động duyệt |
| 4.1 | Chọn duyệt | Ghi nhận:   * Quy trình: Mã - tên quy trình đang áp dụng * Cấp xử lý * Hành động: Phê duyệt * Ghi nhận người cập nhật: @mã nhân viên * Thời gian cập nhật: dd/mm/yyyy hh:mm:ss * Trạng thái trung gian: Theo mô tả   + Bản ghi được chuyển đến cấp duyệt tiếp theo: Trạng thái trung gian của bản gi sẽ là: Đang ở cấp 2, đợi "Tên nhóm quyền của cấp 2" xử lý   + Khi quy trình chỉ có 1 cấp thì cấp đầu tiên = cấp cuối cùng: "Trạng thái chính" của bản ghi sẽ được Cập nhật thành trạng thái thành công theo luồng Cập nhật trạng thái duyệt của màn hình (ví dụ: "Đã duyệt"). Trạng thái trung gian: "Đã duyệt" và kết thúc quy trình. (Khi thay đổi trạng thái gốc hệ thống cập nhật vừa trạng thái trung gian vừa Cập nhật lịch sử theo logic xử lý gốc của màn hình - trường hợp nếu có nhập/ chọn lý do → Lý do: Ghi nhận lý do được nhập hoặc chọn tương ứng) * Lý do: Ghi nhận lý do được nhập tương ứng từng màn hình |
| 4.2 | Chọn Từ chối duyệt | Ghi nhận:   * Quy trình: Mã - tên quy trình đang áp dụng * Cấp xử lý * Hành động: Từ chối * Ghi nhận người cập nhật: @mã nhân viên * Thời gian cập nhật: dd/mm/yyyy hh:mm:ss * Trạng thái trung gian: Theo mô tả   + Hành động khi từ chối = Không thay đổi: Trạng thái trung gian của bản gi sẽ là: Đang ở cấp 1, đợi "Tên nhóm quyền của cấp1" xử lý. Hành động này chỉ ghi nhận lịch sử trạng thái trung gian và vẫn ở cấp 1   + Hành động khi từ chối = Thay đổi sang trạng thái @trạng thái khi từ chối: "Trạng thái chính của bản ghi sẽ được Cập nhật thành trạng thái hủy theo luồng Cập nhật trạng thái hủy của màn hình (ví dụ: "Đã hủy"). Trạng thái trung gian: "Đã hủy" và kết thúc quy trình. (Khi thay đổi trạng thái gốc hệ thống cập nhật vừa trạng thái trung gian vừa Cập nhật lịch sử theo logic xử lý gốc của màn hình - trường hợp nếu có nhập/ chọn lý do → Lý do: Ghi nhận lý do được nhập hoặc chọn tương ứng) * Lý do: Ghi nhận lý do được nhập tương ứng từng màn hình |
| 4.3 | Dữ liệu cấu hình Tự động duyệt | Hệ thống chạy cronjob kiểm tra cấu hình tự động duyệt  Nếu tự động duyệt >0 → Hệ thống đếm kể từ cấp hiện tại được asigned bản ghi cho đến hết số ngày cài đặt mà chưa có action xử lý. Hệ thống tự động duyệt và chuyển đến cấp tiếp theo,  Ghi nhận:   * Quy trình: Mã - tên quy trình đang áp dụng * Cấp xử lý * Hành động: Hệ thống duyệt * Ghi nhận người cập nhật: System admin * Thời gian cập nhật: dd/mm/yyyy hh:mm:ss * Trạng thái trung gian: Theo mô tả   + Bản ghi được chuyển đến cấp duyệt tiếp theo: Trạng thái trung gian của bản gi sẽ là: Đang ở cấp 2, đợi "Tên nhóm quyền của cấp 2" xử lý   + Khi quy trình chỉ có 1 cấp thì cấp đầu tiên = cấp cuối cùng: "Trạng thái chính" của bản ghi sẽ được Cập nhật thành trạng thái thành công theo luồng Cập nhật trạng thái duyệt của màn hình (ví dụ: "Đã duyệt"). Trạng thái trung gian: "Đã duyệt" và kết thúc quy trình * Lý do: Hệ thống xử lý |
| 5 | **Cấp duyệt n** | là cấp thiếp theo sau khi cấp trước thực hiện duyệt   * Trạng thái trung gian: Đang ở cấp n, đợi "Tên nhóm quyền của cấp n" xử lý |
| 6 | Duyệt | 6.1 Chọn Duyệt:  6.2 Chọn từ chối duyệt:  6.3 Dữ liệu cấu hình Tự động duyệt: Hệ thống chạy cronjob kiểm tra cấu hình tự động duyệt |
| 6.1 | Chọn duyệt | Ghi nhận:   * Quy trình: Mã - tên quy trình đang áp dụng * Cấp xử lý * Hành động: Phê duyệt * Ghi nhận người cập nhật: @mã nhân viên * Thời gian cập nhật: dd/mm/yyyy hh:mm:ss * Trạng thái trung gian: Theo mô tả   + Bản ghi được chuyển đến cấp duyệt tiếp theo: Trạng thái trung gian của bản gi sẽ là: Đang ở cấp n+1, đợi "Tên nhóm quyền của cấp n+1" xử lý * Lý do: Ghi nhận lý do được nhập tương ứng từng màn hình |
| 6.2 | Chọn Từ chối duyệt | Ghi nhận:   * Quy trình: Mã - tên quy trình đang áp dụng * Cấp xử lý * Hành động: Từ chối * Ghi nhận người cập nhật: @mã nhân viên * Thời gian cập nhật: dd/mm/yyyy hh:mm:ss * Trạng thái trung gian: Theo mô tả   + Hành động khi từ chối = Trở về cấp duyệt trước: Trạng thái trung gian của bản gi sẽ là: Đang ở cấp n-1, đợi "Tên nhóm quyền của cấp n-1" xử lý   + Hành động khi từ chối = Thay đổi sang trạng thái @trạng thái khi từ chối: "Trạng thái chính của bản ghi sẽ được Cập nhật thành trạng thái hủy theo luồng Cập nhật trạng thái hủy của màn hình (ví dụ: "Đã hủy"). Trạng thái trung gian: "Đã hủy" và kết thúc quy trình. (Khi thay đổi trạng thái gốc hệ thống cập nhật vừa trạng thái trung gian vừa Cập nhật lịch sử theo logic xử lý gốc của màn hình - trường hợp nếu có nhập/ chọn lý do → Lý do: Ghi nhận lý do được nhập hoặc chọn tương ứng)  * Lý do: Ghi nhận lý do được nhập tương ứng từng màn hình |
| 6.3 | Dữ liệu cấu hình Tự động duyệt | Hệ thống chạy cronjob kiểm tra cấu hình tự động duyệt  Nếu tự động duyệt >0 → Hệ thống đếm kể từ cấp hiện tại được asigned bản ghi cho đến hết số ngày cài đặt mà chưa có action xử lý. Hệ thống tự động duyệt và chuyển đến cấp tiếp theo,  Ghi nhận:   * Quy trình: Mã - tên quy trình đang áp dụng * Cấp xử lý * Hành động: Hệ thống duyệt * Ghi nhận người cập nhật: System admin * Thời gian cập nhật: dd/mm/yyyy hh:mm:ss * Trạng thái trung gian: Theo mô tả   + Bản ghi được chuyển đến cấp duyệt tiếp theo: Trạng thái trung gian của bản gi sẽ là: Đang ở cấp n+1, đợi "Tên nhóm quyền của cấp n+1" xử lý  * Lý do: Hệ thống xử lý |
| 7 | **Cấp duyệt n +1** | Tương tự cấp mô tả cấp n cho các cấp giữa của quy trình |
| 8 | 8.1 Chọn Duyệt:  8.2 Chọn từ chối duyệt:  8.3 Dữ liệu cấu hình Tự động duyệt: Hệ thống chạy cronjob kiểm tra cấu hình tự động duyệt |
| 8.1 | Chọn duyệt |
| 8.2 | Chọn Từ chối duyệt |
| 8.3 | Dữ liệu cấu hình Tự động duyệt |
| 9 | **Cấp duyệt cuối** | Là cấp cuối thực hiện duyệt. Trạng thái trung gian: Đang ở cấp x, đợi "Tên nhóm quyền của cấp x" xử lý |
| 10 | Duyệt | 10.1 Chọn Duyệt:  10.2 Chọn từ chối duyệt:  10.3 Dữ liệu cấu hình Tự động duyệt: Hệ thống chạy cronjob kiểm tra cấu hình tự động duyệt |
| 10.1 | Chọn duyệt | Ghi nhận:   * Quy trình: Mã - tên quy trình đang áp dụng * Cấp xử lý * Hành động: Phê duyệt * Ghi nhận người cập nhật: @mã nhân viên * Thời gian cập nhật: dd/mm/yyyy hh:mm:ss * Trạng thái trung gian: Theo mô tả   + Trạng thái trung gian của bản ghi = trạng thái gốc của màn hình sau khi duyệt thành công và kết thúc quy trình  * Lý do: Ghi nhận lý do được nhập tương ứng từng màn hình   Cập nhật lịch sử khi chuyển trạng thái gốc của dữ liệu theo logic xử lý gốc của màn hình |
| 10.2 | Chọn Từ chối duyệt | Ghi nhận:   * Quy trình: Mã - tên quy trình đang áp dụng * Cấp xử lý * Hành động: Từ chối * Ghi nhận người cập nhật: @mã nhân viên * Thời gian cập nhật: dd/mm/yyyy hh:mm:ss * Trạng thái trung gian: Theo mô tả   + Hành động khi từ chối = Trở về cấp duyệt trước: Trạng thái trung gian của bản gi sẽ là: Đang ở cấp n +1, đợi "Tên nhóm quyền của cấp n+1" xử lý   + Hành động khi từ chối = Thay đổi sang trạng thái @trạng thái khi từ chối: Trạng thái chính của bản ghi sẽ được Cập nhật thành trạng thái hủy theo luồng Cập nhật trạng thái hủy của màn hình (ví dụ: "Đã hủy"). Trạng thái trung gian: "Đã hủy" và kết thúc quy trình  * Lý do: Ghi nhận lý do được nhập tương ứng từng màn hình   Cập nhật lịch sử khi chuyển trạng thái gốc của dữ liệu theo logic xử lý gốc của màn hình |
| 10.3 | Dữ liệu cấu hình Tự động duyệt | Hệ thống chạy cronjob kiểm tra cấu hình tự động duyệt  Nếu tự động duyệt >0 → Hệ thống đếm kể từ cấp hiện tại được asigned bản ghi cho đến hết số ngày cài đặt mà chưa có action xử lý. Hệ thống tự động duyệt và chuyển đến cấp tiếp theo,  Ghi nhận:   * Quy trình: Mã - tên quy trình đang áp dụng * Cấp xử lý * Hành động: Hệ thống duyệt * Ghi nhận người cập nhật: System admin * Thời gian cập nhật: dd/mm/yyyy hh:mm:ss * Trạng thái trung gian: Theo mô tả   + Trạng thái trung gian của bản ghi = trạng thái gốc của màn hình sau khi duyệt thành công và kết thúc quy trình  * Lý do: Hệ thống xử lý   Cập nhật lịch sử khi chuyển trạng thái gốc của dữ liệu theo logic xử lý gốc của màn hình. Lý do ghi nhận "Hệ thống xử lý" |

## Tóm tắt trạng thái trung gian

* Kích hoạt quy trình:

  + Khi một bản ghi trên màn hình có **trạng thái gốc =  "Trạng thái áp dụng"** đã được cấu hình trong một quy trình duyệt đang "Hoạt động", quy trình đó sẽ được kích hoạt cho bản ghi.

    - Lịch sử bản ghi đầu tiên ghi nhận trạng thái trung gian: "Đang ở cấp 1, đợi "[Nhóm quyền của cấp 1]" xử lý"
  + Khi chọn xử lý trên màn hình và chọn thao tác Duyệt hoặc Từ chối tương ứng, sẽ kiểm tra theo quy trình duyệt để chuyển cấp; lùi cấp hay kết thúc quy trình. Khi kết thúc quy trình là lúc kích hoạt **gọi hàm xử lý gốc của màn hình** để chuyển trạng thái gốc của bản ghi. Khi đó **Trạng thái trung gian ghi nhận = Trạng thái gốc sau khi chuyển** của bản ghi.
* Trước khi gọi hàm xử lý gốc của màn hình và kết thúc quy trình, hệ thống ghi nhận các cấp xử lý trung gian, Cập nhật trạng thái theo format chung như sau:
  + "**Đang ở cấp X, đợi "@tên nhóm quyền 1, tên nhón quyền 2,..." xử lý**"
    - Ví dụ: Cấp 3 chọn Duyệt và logic đẩy lên cấp 4 xử lý, lúc này bản ghi đang ở cấp 4 và đợi cấp 4 xử lý. Trạng thái trung gian sau khi cấp 3 duyệt thành công sẽ là: Đang ở cấp 4, đợi "SS, ASM, TRADE MKT\_1, TRADE MKT\_2, ADMIN NPP, ADMIN HO" xử lý.
      * Trong đó X- là cấp hiện tại bản ghi đang chờ xử lý. Như ví dụ: Đang ở cấp 4
      * **@tên nhóm quyền 1, tên nhón quyền 2,...:** là danh sách các nhóm quyền đang áp dụng của cấp chờ xử lý. Như ví dụ: Đang ở cấp 4
* **Trường hợp có cài đặt số ngày chuyển cấp duyệt, hệ thống kiểm tra đủ số ngày nhưng vẫn chưa xử lý bản ghi → chuyển trạng thái đến cấp tiếp theo.**
  + Nếu là cấp giữa của quy trình: "**Đang ở cấp X, đợi "@tên nhóm quyền 1, tên nhón quyền 2,..." xử lý**"
  + Nếu là cấp cuối cùng: **Trạng thái trung gian = trạng thái gốc sau khi chuyển**

*Khi một bản ghi áp dụng nhiều quy trình duyệt. Tại thời điểm kết thúc 1 quy trình => trạng thái gốc của bản ghi đã bị thay đổi (Trạng thái chính KHÁC trạng thái áp dụng) => Tất cả các quy trình còn lại cũng kết thúc cho bản ghi này.*

Ví dụ và lưu ý

## **Ví dụ và Lưu ý**

### **Duyệt vượt cấp = OFF**

**Ví dụ: Quy trình duyệt đơn bán hàng**

| Tên trường | Giá trị |  |  |  |
| --- | --- | --- | --- | --- |
| Dữ liệu áp dụng | Duyệt đơn bán hàng |  |  |  |
| Trạng thái áp dụng | Khởi tạo |  |  |  |
| Chức năng | Phê duyệt |  |  |  |
| Trạng thái sau áp dụng | Đã duyệt |  |  |  |
| Duyệt vượt cấp | OFF |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | **Hành động khi Duyệt** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | Admin NPP | Đi tới cấp tiếp theo | *Không thay đổi* | 0 |
| Cấp 2 | Admin HO 1 | Đi tới cấp tiếp theo | *Trở về cấp duyệt trước* | 0 |
| Cấp 3 | Admin HO 2 | Thay đổi sang trạng thái Đã duyệt | *Trở về cấp duyệt trước* | 0 |

#### ****1/ Luồng sự kiện duyệt tuần tự từ cấp thấp nhất đến cao nhất****

1. **Bản ghi được tạo có trạng thái gốc "Khởi tạo"**, Trạng thái trung gian là **"****Đang ở cấp 1, đợi "Admin NPP" xử lý**"
2. **Admin NPP (Cấp 1) nhấn "Duyệt".**

   * **Behavior hệ thống:** Hệ thống ghi nhận Cấp 1 đã duyệt và chuyển yêu cầu sang cho Cấp 2.
   * **Button & Quyền hạn:**

     + Button Duyệt (trong popup hiển thị 2 hành động "Phê duyệt/Từ chối") của Admin NPP **(Cấp 1)** sẽ **biến mất**.
     + Button "Duyệt" sẽ **xuất hiện** cho Admin HO 1 **(Cấp 2)**.
     + **Admin HO 2 (Cấp 3)** **không thấy** button.
   * **Trạng thái trung gian**: Cập nhật thành **"Đang ở cấp 2, đợi "Admin HO 1" xử lý."**
3. **Admin HO 1 (Cấp 2) nhấn "Duyệt".**

   * **Behavior hệ thống:** Hệ thống ghi nhận Cấp 2 đã duyệt và chuyển yêu cầu sang cho Cấp 3.
   * **Button & Quyền hạn:**

     + Button của Admin HO 1**(Cấp 2)** sẽ **biến mất**.
     + Button "Duyệt" sẽ **xuất hiện** cho Admin HO 2 **(Cấp 3)**.
   * **Trạng thái trung gian**: Cập nhật thành **"**Đang ở cấp 3, đợi "Admin HO 2" xử lý**"**
4. **RSM (Cấp 3) nhấn "Duyệt".**

   * **Behavior hệ thống:** Đây là cấp cuối cùng, quy trình hoàn thành thành công.
   * **Button & Quyền hạn:** Button của Admin HO 2 **(Cấp 3)** sẽ **biến mất**. Không còn ai TRONG NHÓM QUYỀN Admin HO 2 thấy button Duyệt trên bản ghi này nữa.
   * **Trạng thái chính = Trạng thái sau áp dụng của màn hình:** Được Cập nhật thành **"Đã duyệt"**
   * **Trạng thái trung gian**: Cập nhật lần cuối: **"trạng thái trung gian = trạng thái chính"**

#### ****2/Hành động khi Từ chối = Trở về cấp duyệt trước (Đẩy lùi về cấp trước)****

Đây là kịch bản "cần xem xét lại".

1. Bản ghi được tạo, Trạng thái trung gian là **"Đang ở cấp 1, đợi "Admin NPP" xử lý"**.
2. **Admin NPP (Cấp 1) nhấn "Duyệt".**

   * **Behavior hệ thống:** Hệ thống ghi nhận Cấp 1 đã duyệt và chuyển yêu cầu sang cho Cấp 2.
   * **Button & Quyền hạn:**

     + Button "Duyệt" của Admin NPP **(Cấp 1)** sẽ **biến mất**.
     + Button "Duyệt" sẽ **xuất hiện** cho Admin HO 1 **(Cấp 2)**.
     + **Admin HO 2(Cấp 3)** vẫn **không thấy** button.
   * **Trạng thái trung gian**: Cập nhật thành **"Đang ở cấp 2, đợi "Admin HO 1" xử lý."**
3. **Admin HO 1(Cấp 2) nhấn "Từ chối":**

* + **Luồng sự kiện:** Quy trình đang đợi Cấp 2 (Admin HO 1). Admin HO 1 **nhấn "Từ chối"**. Cấu hình của Cấp 2 Có Hành động khi Từ chối = Trở về cấp duyệt trước.
  + **Behavior hệ thống:** Logic "Đẩy lùi" được kích hoạt. Yêu cầu được trả về cho cấp ngay trước đó là Cấp 1.
  + **Button & Quyền hạn:**

    - Button của Admin HO 1 **(Cấp 2)** sẽ **biến mất**.
    - Button "Duyệt" sẽ **xuất hiện lại** cho Admin NPP **(Cấp 1)**. Trách nhiệm xử lý giờ thuộc về Cấp 1.
    - **Admin HO 2 (Cấp 3)** vẫn không thấy gì.
  + **Trạng thái trung gian:** Hiển thị rõ ràng: **"Đang ở cấp 1, đợi "Admin NPP " xử lý."**
  + **Lý do: Lý do Admin HO 1 nhập khi  từ chối**

#### **3/ Trường hợp đặc biệt: Từ chối ở Cấp 1 Và cấp 1 **Hành động khi Từ chối = Không thay đổi****

1. Bản ghi được tạo, Trạng thái trung gian là **"Đang ở cấp 1, đợi "Admin NPP" xử lý"**.
2. **Admin NPP (Cấp 1) nhấn "Từ chối".**

* + **Luồng sự kiện:** Quy trình đang Cấp 1 (Admin NPP)**nhấn "Từ chối"**.
  + **Behavior hệ thống:** Vì đây là cấp đầu tiên, và Hành động khi từ chối = Không thay đổi. Do đó, hành động này sẽ VẪN Ở LẠI CẤP 1, Trạng thái trung gian vẫn **"Đang ở cấp 1, đợi "Admin NPP" xử lý"**
  + **Button & Quyền hạn:** Button "Duyệt" của **Admin NPP (Cấp 1)** sẽ **VẪN Ở ĐÓ CHO CẤP 1**
  + **Trạng thái chính: Không thay đổi**
  + **Trạng thái trung gian:** Hiển thị: **"Đang ở cấp 1, đợi "Admin NPP" xử lý"**
  + **Lý do: Lý do Admin NPP nhập khi từ chối**

#### ****4/**** ****Hành động khi từ chối = Thay đổi sang trạng thái @trạng thái khi từ chối (Kết thúc quy trình)****

| Tên trường | Giá trị |  |  |  |
| --- | --- | --- | --- | --- |
| Dữ liệu áp dụng | Duyệt đơn bán hàng |  |  |  |
| Trạng thái áp dụng | Khởi tạo |  |  |  |
| Chức năng | Phê duyệt |  |  |  |
| Trạng thái sau áp dụng | Đã duyệt |  |  |  |
| Duyệt vượt cấp | OFF |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | **Hành động khi Duyệt** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | Admin NPP | Đi tới cấp tiếp theo | *Không thay đổi* | 0 |
| Cấp 2 | Admin HO 1 | Đi tới cấp tiếp theo | Thay đổi sang trạng thái Đã hủy | 0 |
| Cấp 3 | Admin HO 2 | Thay đổi sang trạng thái Đã duyệt | *Trở về cấp duyệt trước* | 0 |

Hành động này sẽ kết thúc quy trình ngay lập tức, bất kể nó xảy ra ở cấp nào.

1. Bản ghi được tạo, Trạng thái trung gian là **"Đang ở cấp 1, đợi "Admin NPP" xử lý"**.
2. **Admin NPP(Cấp 1) nhấn "Duyệt".**

   * **Behavior hệ thống:** Hệ thống ghi nhận Cấp 1 đã duyệt và chuyển yêu cầu sang cho Cấp 2.
   * **Button & Quyền hạn:**

     + Button "Duyệt" của Admin NPP **(Cấp 1)** sẽ **biến mất**.
     + Button "Duyệt" sẽ **xuất hiện** cho Admin HO 1**(Cấp 2)**.
     + **Admin HO 2(Cấp 3)** vẫn **không thấy** button.
   * **Trạng thái trung gian**: Cập nhật thành **"Đang ở cấp 2, đợi "Admin HO 1" xử lý."**
3. **Admin HO 1(Cấp 2) nhấn "Từ chối":**

* + **Luồng sự kiện:** Quy trình đang Đang ở cấp 2, đợi Admin HO 1. Admin HO 1 **nhấn "Từ chối"**. Cấu hình của Cấp 2 có Hành động khi Từ chối là "Thay đổi sang trạng thái Đã hủy".
  + **Behavior hệ thống:** Logic "Hủy và chuyển trạng thái gốc" được kích hoạt. Quy trình kết thúc ngay lập tức cho bản ghi
  + **Button & Quyền hạn:** Button "Duyệt" của Admin HO 1**(Cấp 2)** sẽ **biến mất**. Các cấp khác (Admin NPP và Admin HO 2) cũng không thấy button này. Quy trình đã chấm dứt.
  + **Trạng thái chính = Trạng thái sau áp dụng:** Được Cập nhật ngay lập tức thành **"Đã Hủy"** (chuyển trạng thái gốc của bản ghi khi từ chối).
  + **Trạng thái trung gian:** Hiển thị = **trạng thái gốc** của bản ghi khi từ chối, trong ví dụ là **"Đã hủy"**
  + **Lý do: Lý do Admin HO 1 nhập khi  từ chối**
  + **Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình**

#### **5/ Tự động duyệt theo cronjob**

| Tên trường | Giá trị |  |  |  |
| --- | --- | --- | --- | --- |
| Dữ liệu áp dụng | Duyệt điểm bán |  |  |  |
| Trạng thái áp dụng | Khởi tạo |  |  |  |
| Duyệt vượt cấp | OFF |  |  |  |
| Chức năng | Phê duyệt |  |  |  |
| Trạng thái sau áp dụng | Hoạt động |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | **Hành động khi Duyệt** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | SS; RSM; ASM; SD | Đi tới cấp tiếp theo | Thay đổi sang trạng thái Đã hủy | 2 |
| Cấp 2 | Admin NPP | Đi tới cấp tiếp theo | Thay đổi sang trạng thái Đã hủy | 0 |
| Cấp 3 | Admin HO | Thay đổi sang trạng thái Đã duyệt | *Trở về cấp duyệt trước* | 3 |

* **Đối tượng:** Điểm bán mới.
* **Kích hoạt khi:** Trạng thái điểm bán là "Khởi tạo".
* Trạng thái trung gian: **"Đang ở cấp 1, đợi "SS; RSM; ASM; SD" xử lý."**
* **Trường hợp Cấp 1 nhìn thấy và có thể xử lý bản ghi: Sales Team (SS; RSM; ASM; SD)**

  + **Nhóm quyền:** Một nhóm các quyền **SS; RSM; ASM; SD,** chỉ cần một trong các người dùng thuộc các nhóm quyền sau hành động
  + **Hành động khi Từ chối:** Thay đổi sang trạng thái Đã hủy. Nếu từ chối, sẽ đến luồng từ chối và kết thúc quy trình

    - Trạng thái trung gian: **"Đã hủy"**
    - **Lý do: Lý do đã nhập khi  từ chối**
    - **Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình, Lý do = Lý do đã nhập khi từ chối**
  + **Tự động duyệt:** Sau 2 ngày không xử lý, sẽ tự động duyệt và chuyển lên cấp 2. 

    - Trạng thái trung gian: **"Đang ở cấp 2, đợi "Admin NPP" xử lý."**
    - **Lý do: "Hệ thống xử lý"**
* **Trường hợp Cấp 2 nhìn thấy và có thể xử lý bản ghi: Admin NPP**

  + **Hành động khi Từ chối:** Thay đổi sang trạng thái Đã hủy . Nếu Admin NPP từ chối, điểm bán sẽ bị hủy ngay lập tức.

    - Trạng thái trung gian: **"Đã hủy"**
    - **Lý do: Lý do đã nhập khi  từ chối**
    - **Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình, Lý do = Lý do đã nhập khi từ chối**
  + **Tự động duyệt:** = 0 tức là không áp dụng Tự động duyệt

    - Trạng thái trung gian: **"Đang ở cấp 3, đợi "Admin HO" xử lý."**
* **Trường hợp Cấp 3 nhìn thấy và có thể xử lý bản ghi: Admin HO**

  + **Hành động khi Từ chối:** *Trở về cấp duyệt trước*. Nếu từ chối, sẽ đẩy lùi về cho Cấp 2. 

    - Trạng thái trung gian: **"Đang ở cấp 2, đợi "Admin NPP" xử lý."**
  + **Tự động duyệt:** Sau 3 ngày không xử lý, sẽ tự động duyệt và hoàn thành quy trình.

    - Trạng thái trung gian: **"Hoạt động"**
    - **Lý do: Hệ thống xử lý**
    - **Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình, Lý do = "Hệ thống xử lý"**

(

Một số quy trình hủy nhiều cấp, mỗi cấp khi duyệt hủy hoặc từ chối hủy đều phải nhập lý do theo từng màn hình. Khi đó, ở các cấp trung gian chỉ ghi nhận lý do theo các trạng thái trung gian. Ở cấp kết thúc quy trình có thay đổi trạng thái gốc: 

* Người dùng xử lý: → Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình, Lý do = Lý do đã nhập
* Hệ thống duyệt: → Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình, Lý do = "Hệ thống xử lý"

Một số quy trình có nhiều cấp và các cấp xử lý có cả APP và trên WEB, thì logic vẫn xử lý như chỉ trên app hoặc chỉ trên Web.

)

Duyệt vượt cấpp

### **Duyệt vượt cấp = ON**

Tất cả các cấp duyệt thuộc quy trình có quyền hạn xử lý từ cấp thấp hơn đến cấp đang xử lý sẽ nhìn thấy các button hiển thị và có thể  xử lý cùng 1 bản ghi.

Tại cùng một thời điểm, khi cấp cao hơn trong quy trình xử lý duyệt / hủy → Kết quả sẽ được ghi nhận giống nhau cho các cấp thấp hơn và bằng cấp đã xử lý. Chỉ cấp chờ xử lý mới được xử lý tiếp theo.

#### **1/  Từ chối ở cấp 1**

| Tên trường | Giá trị |  |  |  |
| --- | --- | --- | --- | --- |
| Dữ liệu áp dụng | Duyệt điểm bán |  |  |  |
| Trạng thái áp dụng | Khởi tạo |  |  |  |
| Duyệt vượt cấp | ON |  |  |  |
| Chức năng | Phê duyệt |  |  |  |
| Trạng thái sau áp dụng | Hoạt động |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | **Hành động khi Duyệt** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | SS | Đi tới cấp tiếp theo | Thay đổi sang trạng thái Đã hủy | 0 |
| Cấp 2 | RSM | Đi tới cấp tiếp theo | *Trở về cấp duyệt trước* | 0 |
| Cấp 3 | ASM | Đi tới cấp tiếp theo | *Trở về cấp duyệt trước* | 0 |
| Cấp 4 | Admin HO | Thay đổi sang trạng thái Hoạt động | *Trở về cấp duyệt trước* | 0 |

**Từ chối ở cấp 1:** Trạng thái chính của bản ghi sẽ được Cập nhật ngay lập tức theo trạng thái hủy của màn hình và quy trình kết thúc.

* **Luồng sự kiện:**

  1. Điểm bán được tạo bởi Sale, cả 3 cấp ASM, RSM, SS, Admin HO đều thấy nút "Duyệt".

     1. Trạng thái trung gian: "**Đang ở cấp 1, đợi "SS" xử lý"**
  2. **SS (Cấp 1) nhấn button Duyệt và xác nhận "Từ chối".**
  3. **Behavior hệ thống:**

     + Hệ thống kiểm tra cấu hình Cấp 1 có **Hành động khi Từ chối =** Thay đổi sang trạng thái Đã hủy
     + **Button & Quyền hạn:** Button "Duyệt" của **TẤT CẢ** các cấp sẽ **biến mất**
     + **Trạng thái gốc** thay đổi theo luồng hủy của màn hình và kết thúc quy trình
     + **Trạng thái trung gian:** = trạng thái gốc = Đã hủy

**Trường hợp đặc biệt: Từ chối ở Cấp 1 Và cấp 1 **Hành động khi Từ chối = Không thay đổi****

1. Bản ghi được tạo, Trạng thái trung gian là **"Đang ở cấp 1, đợi "SS" xử lý"**.
2. **SS (Cấp 1) nhấn "Từ chối".**

* + **Luồng sự kiện:** Quy trình đang Cấp 1 (SS). **SS nhấn "Từ chối"**.
  + **Behavior hệ thống:** Vì đây là cấp đầu tiên, và Hành động khi từ chối = Không thay đổi. Do đó, hành động này sẽ VẪN Ở LẠI CẤP 1, Trạng thái trung gian vẫn **"Đang ở cấp 1, đợi "SS" xử lý"**
  + **Button & Quyền hạn:** Button "Duyệt" của **SS (Cấp 1)** sẽ **VẪN Ở ĐÓ CHO CẤP 1**
  + **Trạng thái chính: Không thay đổi**
  + **Trạng thái trung gian:** Hiển thị: **"Đang ở cấp 1, đợi "SS" xử lý"**
  + **Lý do: Lý do SS nhập khi từ chối**

#### **2/ Cấp giữa chọn từ chối và "Đẩy lùi về cấp kế trước"**

* **Cấu hình:**  Hành động khi Từ chối = *Trở về cấp duyệt trước*.
* **Luồng sự kiện:**

  1. Điểm bán được tạo bởi Sale, cả 4 cấp Admin HO, ASM, RSM, SS đều thấy nút "Duyệt".

     1. Trạng thái trung gian: "**Đang ở cấp 1, đợi "SS" xử lý"**
  2. **SS thực hiện duyệt** → đẩy lên cấp xử lý, trạng thái trung gian của cấp 1: "**Đang ở cấp 2, đợi "ASM" xử lý". Khi đó ẩn button xử lý của cấp 1.**
  3. Lúc này cả 3 cấp Admin HO, ASM, RSM đều thấy nút "Duyệt".
  4. **ASM (Cấp 2) nhấn "Từ chối".**

     + **Behavior hệ thống:** Hệ thống kiểm tra cấu hình Cấp 2, thấy Hành động khi Từ chối = *Trở về cấp duyệt trước*. Logic "Đẩy lùi" được kích hoạt.
     + **Button & Quyền hạn:** Button "Duyệt" sẽ **hiển thị lại cho SS (Cấp 1)**. Bây giờ, Button "Duyệt" sẽ hiển thị cho Cấp 1, Cấp 2, Cấp 3, Cấp 4 (SS, ASM, RSM, Admin HO).
     + **Trạng thái trung gian**: Cấp 2: "**Đang ở cấp 1, đợi "SS" xử lý"**
  5. Cả 4 cấp Admin HO, ASM, RSM, SS đều thấy nút "Duyệt".
  6. Lúc này vẫn "**Đang ở cấp 1, đợi "SS" xử lý"** nhưng cấp 3 vào chọn Từ chối. **ASM (cấp 3) nhấn "Từ chối":**

     + **Behavior hệ thống:**

       - Hệ thống kiểm tra cấu hình Cấp 3, thấy Hành động khi Từ chối = *Trở về cấp duyệt trước*. Logic "Đẩy lùi" được kích hoạt. Đẩy về cấp 2

* + - **Trạng thái trung gian**: Cập nhật trạng thái trung gian tất cả các Cấp 1, Cấp 2, Cấp 3: **"Đang ở cấp 2, đợi "ASM" xử lý."**

* 1. + **Button & Quyền hạn:** Button "Duyệt" sẽ hiển thị cho Cấp 2, Cấp 3, cấp 4 (ASM, RSM, Admin HO). **Cấp 1 không nhìn thấy và đã bị loại ra khỏi quy trình.**
  2. Lúc này Button "Duyệt" sẽ hiển thị cho Cấp 2, Cấp 3, cấp 4 (ASM, RSM, Admin HO)
  3. **Admin HO (cấp cuối cùng, cấp 4) nhấn "Từ chối".**

     + **Behavior hệ thống:**

       - Hệ thống kiểm tra cấu hình Cấp 4, thấy Hành động khi Từ chối = *Trở về cấp duyệt trước*. Logic "Đẩy lùi" được kích hoạt. Lùi về cấp 3 xử lý
       - Các cấp có quyền xử lý gồm: Cả cấp 3 và 4 (RSM, Admin HO)
     + **Button & Quyền hạn:** Bây giờ button "Duyệt" sẽ ẩn cho Cấp 2, hiển thị cho cấp 3 và 4 xử lý
     + **Trạng thái trung gian**:

       - Cập nhật trạng thái trung gian tất cả các Cấp 2, Cấp 3, Cấp 4: **"Đang ở cấp 3, đợi "RSM" xử lý."**

#### **3/** **Chọn từ chối và "Kết thúc quy trình" ở bất kỳ cấp nào.**

| Tên trường | Giá trị |  |  |  |
| --- | --- | --- | --- | --- |
| Dữ liệu áp dụng | Duyệt điểm bán |  |  |  |
| Trạng thái áp dụng | Khởi tạo |  |  |  |
| Duyệt vượt cấp | ON |  |  |  |
| Chức năng | Phê duyệt |  |  |  |
| Trạng thái sau áp dụng | Hoạt động |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | **Hành động khi Duyệt** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | SS | Đi tới cấp tiếp theo | Thay đổi sang trạng thái Đã hủy | 0 |
| Cấp 2 | RSM | Đi tới cấp tiếp theo | Thay đổi sang trạng thái Đã hủy | 0 |
| Cấp 3 | ASM | Đi tới cấp tiếp theo | Thay đổi sang trạng thái Đã hủy | 0 |
| Cấp 4 | Admin HO | Thay đổi sang trạng thái Hoạt động | Thay đổi sang trạng thái Đã hủy | 0 |

* **Cấu hình**: Hành động khi Từ chối = Thay đổi sang trạng thái Đã hủy
* **Luồng sự kiện:**

  1. Điểm bán được tạo bởi Sale, cả 4 cấp Admin HO, ASM, RSM, SS đều thấy nút "Duyệt".

     1. Trạng thái trung gian: "**Đang ở cấp 1, đợi "SS" xử lý"**
  2. **SS thực hiện duyệt** → đẩy lên cấp xử lý, trạng thái trung gian của cấp 1: "**Đang ở cấp 2, đợi "ASM" xử lý". Khi đó ẩn button xử lý của cấp 1.**
  3. Lúc này cả 3 cấp Admin HO, ASM, RSM đều thấy nút "Duyệt".
  4. **ASM (Cấp 2) nhấn button Duyệt và xác nhận "Từ chối".**

     1. **Behavior hệ thống:**

        + Hệ thống kiểm tra cấu hình Cấp 2 có **Hành động khi Từ chối =** Thay đổi sang trạng thái Đã hủy
     2. **Button & Quyền hạn:** Button "Duyệt" của **TẤT CẢ** các cấp sẽ **biến mất**
     3. **Trạng thái gốc** thay đổi theo luồng hủy của màn hình và kết thúc quy trình
     4. **Trạng thái trung gian:** = trạng thái gốc = Đã hủy
     5. **Lý do:** Lý do đã nhập
     6. **Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình, Lý do =** Lý do đã nhập
  5. Hoặc **R******S**M (Cấp 3) nhấn button Duyệt và xác nhận "Từ chối".**

     1. **Behavior hệ thống:**

        + Hệ thống kiểm tra cấu hình Cấp 3 có **Hành động khi Từ chối =** Thay đổi sang trạng thái Đã hủy
     2. **Button & Quyền hạn:** Button "Duyệt" của **TẤT CẢ** các cấp sẽ **biến mất**
     3. **Trạng thái gốc** thay đổi theo luồng hủy của màn hình và kết thúc quy trình
     4. **Trạng thái trung gian:** = trạng thái gốc = Đã hủy
     5. **Lý do:** Lý do đã nhập
     6. **Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình, Lý do =** Lý do đã nhập
  6. Hoặc **Admin HO (Cấp 4) nhấn button Duyệt và xác nhận "Từ chối".**

     1. **Behavior hệ thống:**

        + Hệ thống kiểm tra cấu hình Cấp 4 có **Hành động khi Từ chối =** Thay đổi sang trạng thái Đã hủy
     2. **Button & Quyền hạn:** Button "Duyệt" của **TẤT CẢ** các cấp sẽ **biến mất**
     3. **Trạng thái gốc** thay đổi theo luồng hủy của màn hình và kết thúc quy trình
     4. **Trạng thái trung gian:** = trạng thái gốc = Đã hủy
     5. **Lý do:** Lý do đã nhập
     6. **Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình, Lý do =** Lý do đã nhập

#### **4/ Cấp cao nhất duyệt và "Kết thúc quy trình"**

* **Luồng sự kiện:**

  1. Cả 4 cấp đều thấy nút "Duyệt".
  2. Trong khi SS và RSM, ASM chưa hành động, **Admin HO (Cấp 4) nhấn "Duyệt"**.
  3. **Admin HO (Cấp 4) nhấn button Duyệt và xác nhận "Phê duyệt".**

     1. **Behavior hệ thống:**

        + Hệ thống kiểm tra cấu hình Cấp 4 có là cấp cuối cùng
     2. **Button & Quyền hạn:** Button "Duyệt" của **TẤT CẢ** các cấp sẽ **biến mất**
     3. **Trạng thái gốc: gọi đến hàm xử lý gốc của màn hình, theo** luồng duyệt của màn hình khi duyệt thành công và kết thúc quy trình
     4. **Trạng thái trung gian:** = trạng thái gốc = Hoạt động
     5. **Các trường hợp có nhập lý do:** 
        1. **Lý do: Lý do đã nhập**
     6. **Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình. Lý do = Lý do đã nhập khi kết thúc quy trình**

#### 5/ Cấu hình cronjob Tự động duyệt (ngày):

| Tên trường | Giá trị |  |  |  |
| --- | --- | --- | --- | --- |
| Dữ liệu áp dụng | Duyệt điểm bán |  |  |  |
| Trạng thái áp dụng | Khởi tạo |  |  |  |
| Duyệt vượt cấp | ON |  |  |  |
| Chức năng | Phê duyệt |  |  |  |
| Trạng thái sau áp dụng | Hoạt động |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | **Hành động khi Duyệt** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | SS; RSM; ASM; SD | Đi tới cấp tiếp theo | Thay đổi sang trạng thái Đã hủy | 2 |
| Cấp 2 | Admin NPP | Đi tới cấp tiếp theo | Thay đổi sang trạng thái Đã hủy | 0 |
| Cấp 3 | Admin HO | Thay đổi sang trạng thái Hoạt động | *Trở về cấp duyệt trước* | 3 |

* **Đối tượng:** Điểm bán mới.
* **Kích hoạt khi:** Trạng thái điểm bán là "Khởi tạo".
* Trạng thái trung gian: **"Đang ở cấp 1, đợi "SS; RSM; ASM; SD" xử lý."**
* **Tại cùng thời điểm:** Tất cả các nhóm quyền đều có thể nhìn thấy và xử lý duyệt điểm bán.

| Cấp 1 không xử lý | Bản ghi đang ở cấp 2, và Cấp 2 không xử lý | Bản ghi đang ở cấp 2, Cấp 2 không xử lý → Cấp 3 chọn button Duyệt và xác nhận "Từ chối" |
| --- | --- | --- |
| **Tự động duyệt = 2**  Sau 2 ngày không xử lý, sẽ tự động duyệt và chuyển lên cấp 2.    * Trạng thái trung gian: **"Đang ở cấp 2, đợi "Admin NPP" xử lý."** * **Lý do: Hệ thống xử lý** | **Tự động duyệt** **= 0**;  tức là không áp dụng Tự động duyệt  Trạng thái trung gian không thay đổi, vẫn giữ ở cấp 2: **"Đang ở cấp 2, đợi "Admin NPP" xử lý."** | * **Trường hợp Cấp 3 nhìn thấy và có thể xử lý bản ghi: Admin HO**    + **Hành động khi Từ chối:** *Trở về cấp duyệt trước*. → đẩy lùi về cho Cấp 2.       - Trạng thái trung gian: **"Đang ở cấp 2, đợi "Admin NPP" xử lý."** |
|  |  | Nếu Cấp 2 chọn duyệt => đẩy lên cấp 3 xử lý (**"Đang ở cấp 3, đợi "Admin HO" xử lý.")**.  Và Cấp 3 không xử lý bản ghi    * **Tự động duyệt = 3:** Sau 3 ngày không xử lý, sẽ tự động duyệt và hoàn thành quy trình.     + Trạng thái trung gian: **"Hoạt động"**   + **Lý do: Hệ thống xử lý**   + **Lịch sử cập nhật trạng thái gốc theo logic xử lý gốc của màn hình, Lý do = "Hệ thống xử lý"** |

## **Các màn hình liên quan quy trình duyệt**

### 1/ Duyệt điểm bán

link portal:  [HO][HT] Danh sách điểm bán

link app QL:  [APP QL][HT] Duyệt điểm bán

Link App SM:  [SM APP][HT] Xem danh sách điểm bán

### 2/ Duyệt đăng ký trưng bày

Link: [HO][HT] Đăng ký trưng bày

Link App SM: [HO][HT] Đăng ký trưng bày

Link App QL:  [APP QL][HT] Duyệt đăng ký trưng bày

### 3/ Duyệt đăng ký tích lũy

Link: [HO][HT] Đăng ký tích lũy

Link App SM: [SM APP][HT] Xem đăng ký Chương trình tích lũy

Link App QL: [APP QL][HT] Duyệt đăng ký tích lũy

### 4/ Duyệt chương trình khuyến mãi

Link portal: [HO][HT] Chương trình khuyến mãi (Team Promotion phụ trách và xử lý màn hình này)

Thêm cột "**Trạng thái trung gian**" trên Màn hình "[Quản lý khuyến mãi](https://kb.finviet.com.vn/display/DMSNEW/DMS+x+Promotion)" - [Trạng thái khuyến mãi](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61151615)

* Vị trí: Sau cột trạng thái, trước cột Ngày bắt đầu
* Kiểu dữ liệu: text, readonly
* Nội dung hiển thị: Hiển thị trạng thái trung gian gần nhất của bản ghi (tối đa 12 ký tự, vượt 12 ký tự hiển thị dấu 3 chấm. lick vào icon bên phải nội dung để xem chi tiết cập nhật trạng thái trung gian của bản ghi theo quy trình)
* Người cập nhật: hiển thị @tên người duyệt hoặc @System Admin
* Ngày cập nhật: Hiển thị thời gian Cập nhật gần nhất theo trạng thái trung gian

### 5/ Duyệt đơn hàng bán

Link portal:  [HO][HT] Đơn hàng bán

Link App SM:  [SM APP][HT] Xem danh sách đơn hàng

Link App QL:  [APP QL][HT] Xem danh sách đơn hàng

### 6/ Duyệt Bảng giá bán

Link: [HO] Quy trình duyệt - Bảng giá bán

### 7/ Duyệt giá bán nhà phân phối

Link Portal: [HO] Quy trình duyệt - Giá bán (NPP)

### 8/ Duyệt kiểm kho NPP

Link portal: [HO] Quy trình duyệt - Duyệt kiểm kho nhà phân phối

* Màn hình "[Duyệt kiểm kho NPP](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023843)"
* Màn hình "[Kiểm kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023843)"

### **Các lưu ý**

**1/ Trường hợp xử lý thao tác đồng thời gửi yêu cầu về server**

Người dùng cùng thao tác trên cùng một bản ghi

**Tình huống 1:**

* **Tình huống:** Trong 1 cấp có các nhóm quyền  "ASM, Admin HO". Cả hai cùng mở đơn hàng #DH123 và thấy nút "Duyệt". **Gần như cùng một lúc nhấn nút "Duyệt" và chọn Xác nhân Phê duyệt.**
* **Luồng xử lý của hệ thống:**

  1. Hành động nhấn nút "Duyệt" và chọn Xác nhân Phê duyệt của Anh An, ghi nhận Cấp 1 đã duyệt, đã Cập nhật Trạng thái trung gian
  2. Yêu cầu của Anh Bảo đến server sau (ví dụ: tại thời điểm T+0.3s).
  3. Server kiểm tra version của đơn hàng #DH123 mà Anh Bảo gửi lên. Server phát hiện version này không khớp với version hiện tại trong database
  4. Server **từ chối** yêu cầu của Anh Bảo.
* **Phản hồi cho người dùng (User Experience):**

  + **Anh An (Người thành công):** Thấy giao diện Cập nhật bình thường. Nút "Duyệt" của anh biến mất, trạng thái trung gian được cập nhật.
  + **Anh Bảo (Người chậm hơn):** Sẽ nhận được một thông báo lỗi: *"Bản ghi này vừa được cập nhật bởi một người dùng khác. Vui lòng tải lại trang."*
* **Kết quả:** Hệ thống chỉ ghi nhận một hành động duy nhất từ Anh An, đảm bảo dữ liệu không bị xử lý hai lần.

**Tình huống 2:**

* **Tình huống:** 

  1. Trong cấp 1 có các nhóm quyền  "ASM là Anh An' và "Admin HO Là Anh Bảo và chị Bình".
  2. Admin HO (Anh Bảo, chị Bình) thuộc cả 2 cấp là Cấp 1 và 2. Và thuộc cả 2 quy trình Duyệt và quy trình Hủy đơn hàng.
  3. Cả ba "ASM là Anh An' và "Admin HO Là Anh Bảo và chị Bình" cùng mở đơn hàng #DH123:

     + Anh An thấy nút "Duyệt";
     + Anh Bảo và chị Bình thấy cả 2 nút "Duyệt và Hủy";

       - **Anh Bảo và anh An gần như cùng một lúc nhấn nút "Duyệt"; chị Bình nhấn nút "Hủy",** **Luồng xử lý của hệ thống:**

1. 1. 1. 1. 1. Hành động nhấn nút "Duyệt" và chọn Xác nhân Phê duyệt của Anh An, ghi nhận Cấp 1 đã duyệt, đã Cập nhật Trạng thái trung gian
            2. Yêu cầu của Anh Bảo, Nhấn nút Duyệt→ dù chọn xác nhận "Phê duyệt/ Từ chối" đều đến server sau (ví dụ: tại thời điểm T+0.3s).
            3. Yêu cầu của Chị Bình, Nhấn nút Hủy→ dù chọn xác nhận "Phê duyệt/ Từ chối" đều đến server sau (ví dụ: tại thời điểm T+0.4s).
            4. Server kiểm tra version của đơn hàng #DH123 mà Anh Bảo và c Bình gửi lên. Server phát hiện version này không khớp với version hiện tại trong database
            5. Server **từ chối** yêu cầu của Anh Bảo và cả chị Bình.

* + - * **Phản hồi cho người dùng (User Experience):**

1. 1. 1. 1. 1. **Anh An (Người thành công):** Thấy giao diện Cập nhật bình thường. Nút "Duyệt" của anh biến mất, trạng thái trung gian được cập nhật.
            2. **Anh Bảo và chị Bình (Người chậm hơn):** Sẽ nhận được một thông báo lỗi: *"Bản ghi này vừa được cập nhật bởi một người dùng khác. Vui lòng tải lại trang."*
   2. **Kết quả:** Hệ thống chỉ ghi nhận một hành động duy nhất từ Anh An, đảm bảo dữ liệu không bị xử lý nhiều lần.

→ Hiển thị Msg thông báo đến người dùng: **"Bản ghi này vừa được cập nhật bởi một người dùng khác. Vui lòng tải lại trang."**

**2/ Người dùng KHÔNG được phân quyền thao tác gốc**

Trường hợp người gửi yêu cầu là cấp duyệt cuối cùng hoặc cấp duyệt có**gọi hàm xử lý gốc của màn hình** để chuyển trạng thái gốc của bản ghi. Hệ thống kiểm tra phân quyền (theo nhóm quyền người dùng) trên màn hình,

* Nếu người dùng có quyền thao tác gốc → Khi đó **Trạng thái trung gian ghi nhận = Trạng thái gốc** của bản ghi.
* Nếu người dùng KHÔNG được phân quyền thao tác gốc

→ Hiển thị thông báo: "Bạn có quyền xử lý trong quy trình này, nhưng không có quyền gốc để [Tên hành động gốc].  Vui lòng liên hệ quản trị viên."

* [Tên hành động gốc] ví dụ như: Hủy đơn hàng

**3/ Trường hợp người dùng thao tác trên bản ghi, nhưng bản ghi đang đang chạy trong Quy trình xử lý dữ liệu (Migration data)** => Xung đột khi người dùng đang cố gắng xử lý một bản ghi cũ theo luồng cũ ngay trong lúc tác vụ đang chạy.

→ Hiển thị một thông báo khi người dùng thao tác bất kỳ trên bản ghi: "Quy trình mới đang được áp dụng cho bản ghi này. Vui lòng thử lại sau ít phút."

* Xem chi tiết **Quy trình xử lý dữ liệu (Migration data)**

  Quy trình xử lý dữ liệu cũ trước và sau khi active quy trình duyệt

  **Tóm tắt:**

  | Loại Bản ghi | Trạng thái Bản ghi | Hành động Hệ thống | Kết quả |
  | --- | --- | --- | --- |
  | **A. Bản ghi Cũ (Pre-activation)** | **= Trạng thái Áp dụng** | **Di chuyển Dữ liệu (Migrate)** | Được "kéo" vào quy trình mới, bắt đầu từ Cấp 1. |
  |  | **≠ Trạng thái Áp dụng** | **Bỏ qua (Ignore)** | Hoàn toàn không bị ảnh hưởng. Giữ nguyên trạng thái và logic cũ. |
  | **B. Bản ghi Mới (Post-activation)** | (Luôn là Trạng thái Áp dụng) | **Tự động Áp dụng (Apply)** | Tự động áp dụng quy trình, bắt đầu từ Cấp 1 |

  Chi tiết:

  **A. Bản ghi Cũ (Pre-activation):** Dữ liệu đang chạy khi CHƯA có quy trình duyệt

  + Trước khi active quy trình duyệt: Trước khi chức năng này được triển khai, hệ thống hoạt động theo mô hình thay đổi trạng thái trực tiếp.

    - Ví dụ khi một điểm bán được tạo, nó có trạng thái Khởi tạo.
    - Một người dùng có quyền (ví dụ: Admin) sẽ vào màn hình, nhấn nút "Duyệt"
    - Hành động này sẽ gọi trực tiếp đến hàm xử lý gốc, cập nhật trạng thái của điểm bán trong CSDL từ Khởi tạo -> Hoạt động.
  + Dữ liệu cũ sẽ:

    - Không có trạng thái trung gian: Dữ liệu này sẽ trống với các điểm bán ko áp dụng quy trình duyệt
    - Lịch sử đơn giản: Lịch sử được ghi nhận theo thao tác xử lý gốc của màn hình, Không có lưu lịch sử cập nhật trạng thái trung gian
    - Phân quyền cứng: Quyền duyệt được gán cứng cho một nhóm quyền cụ thể, nhóm quyền đó có quyền thao tác trên danh sách hiển thị theo dữ liệu phân quyền.

  **Case A.1 Trạng thái bản ghi cũ = Trạng thái áp dụng của quy trình**

  1. **Trigger (Kích hoạt):** Ngay sau khi Admin kích hoạt quy trình.
  2. **Hành động Backend (Migration Script):**

     + **Tạo script di chuyển dữ liệu (migration script)**.
       1. Lấy ID của quy trình duyệt (quy trình ĐANG ACTIVE)
       2. Tìm tất cả các bản ghi cũ (dữ liệu được tạo TRƯỚC thời điểm quy trình được kích hoạt): Hệ thống tìm **tất cả** các điểm bán có Trạng thái chính = **"Trạng thái áp dụng của quy trình"** VÀ được tạo **trước** thời điểm kích hoạt.
       3. Sao lưu dữ liệu
       4. Vòng lặp xử lý:
          1. Cập nhật Trạng thái trung gian:  ApprovalStatus = 'Đang ở cấp 1, đợi "[Nhóm quyền Cấp 1]" xử lý.'
          2. **Tạo Lịch sử Duyệt:** Tạo một bản ghi lịch sử đầu tiên cho từng bản ghi
             - ID của bản ghi đang xử lý.
             - ID của quy trình vừa được kích hoạt.
             - Cấp duyệt: Cấp 1
             - Người cập nhật: System admin
             - Ngày tạo: **Thời gian tạo (CreatedAt)** của chính bản ghi đó, để đảm bảo tính năng "Tự động duyệt" có thể tính toán chính xác.
             - Ngày cập nhật: Thời gian cập nhật dd/mm/yyyy hh:mm:ss
          3. Thời điểm bắt đầu: Các bản ghi cũ sẽ bắt đầu từ thời gian tạo của chính bản ghi đó làm thời điểm bắt đầu quy trình. Điều này giúp tính năng "Tự động duyệt" (nếu có) hoạt động chính xác.
     + **Kế hoạch Quay lui (Rollback):** Nếu có sự cố nghiêm trọng không thể khắc phục ngay, kế hoạch quay lui sẽ được kích hoạt:
       - Khôi phục cơ sở dữ liệu từ bản sao lưu đã tạo.
     + **Thời gian chạy:** Chạy ngay lập tức sau khi kích hoạt quy trình
       - Script phải được thiết kế để có thể chạy lại nhiều lần mà không gây ra lỗi trùng lặp. Sẽ luôn kiểm tra xem một bản ghi đã có trong Lịch sử duyệt hay chưa trước khi xử lý.
       - Xung đột với hành động người dùng (nếu có): Người dùng đang cố gắng xử lý một bản ghi cũ theo luồng cũ ngay trong lúc tác vụ đang chạy.
         1. Hiển thị một thông báo khi người dùng thao tác bất kỳ trên bản ghi: "Quy trình mới đang được áp dụng cho bản ghi này. Vui lòng thử lại sau ít phút."
     + **Xử lý hàng loạt & an toàn:** Script sẽ chạy dưới nền (background job), xử lý theo từng lô (Thay vì xử lý từng bản ghi, tác vụ sẽ xử lý theo từng lô (ví dụ: 1000 bản ghi mỗi lần) để giảm số lượng giao dịch), có cơ chế thử lại (retry) và ghi log kết quả chi tiết.
  3. **Hành động Frontend (UI):**

     + **Đối với Người dùng khác Admin HO:** Khi họ tải lại màn hình ví dụ: danh sách điểm bán, họ sẽ thấy các điểm bán "Khởi tạo" cũ giờ đây đã có Trạng thái trung gian và icon xem lịch sử.
     + **Đối với Admin HO:** Admin sẽ có một màn hình để theo dõi tiến trình và xem báo cáo kết quả của migration script.

       - Sau khi lặp qua tất cả các bản ghi, tác vụ sẽ ghi lại một log tổng kết:
  + - * + Thời gian bắt đầu và kết thúc.
        + Tổng số bản ghi "dữ liệu được tạo TRƯỚC thời điểm quy trình được kích hoạt" đã tìm thấy.
        + Tổng số bản ghi đã được di chuyển thành công.
        + Danh sách các bản ghi bị lỗi (nếu có của hệ thống)

  **Case A.2: Bản Ghi Cũ có Trạng thái "khác" Trạng thái Áp dụng**

  1. **Trigger:** Tại thời điểm kích hoạt quy trình.
  2. **Hành động Backend:**

     + **BỎ QUA (IGNORE):** Migration script được thiết kế để **hoàn toàn bỏ qua** những bản ghi này.
  3. **Hành động Frontend:**

     + **Không thay đổi:** Giao diện cho các điểm bán "Hoạt động", "Đã hủy"... vẫn hiển thị như cũ. Chúng sẽ không có Trạng thái trung gian và không có icon lịch sử duyệt, vì chúng chưa bao giờ tham gia vào một quy trình duyệt nào.
  4. **Tình huống đặc biệt:**

     + **Trường hợp: Tại thời điểm này bản ghi có trạng thái khác Trạng thái áp dụng. nhưng một số trường hợp có thể cập nhật trạng thái.** Người dùng thực hiện **cập nhật trạng thái** làm thay đổi trạng thái về bằng "Trạng thái áp dụng".
     + **Giải pháp:** Hệ thống cần có một cơ chế kiểm tra tại thời điểm thay đổi trạng thái.

       - Khi đó hệ thống sẽ kiểm tra: "Có quy trình duyệt nào đang hoạt động cho trạng thái "Trạng thái áp dụng" không?".
       - Nếu có, hệ thống sẽ tự động áp dụng quy trình mới cho bản ghi đó ngay tại thời điểm nó được chuyển về "Trạng thái áp dụng". Bản ghi này sẽ được coi như một bản ghi "mới" đối với quy trình *(xem B).*

  **B. Xử Lý Bản Ghi Mới** (Sau Khi Quy Trình Duyệt Được Active)

  Đây là luồng xử lý chuẩn và đơn giản hơn, áp dụng cho tất cả các bản ghi được tạo ra sau thời điểm quy trình được kích hoạt.

  #### Mô tả cách xử lý:

  1. **Trigger:** Người dùng tạo mới hoặc chuyển trạng thái bản ghi = Trạng thái áp dụng (Sau Khi Quy Trình Duyệt Được Active)
  2. **Hành động Backend:**

     + **Tự động Áp dụng Quy trình:** Hệ thống sẽ kiểm tra: "Có quy trình nào đang hoạt động cho Trạng thái chính = "**Trạng thái áp dụng"** không?".

       - Thiết lập Trạng thái trung gian thành "Đang ở cấp 1, đợi "[Nhóm quyền Cấp 1]" xử lý".
       - Tạo bản ghi lịch sử của Bản ghi này.
  3. **Hành động Frontend:**

     + Sau khi tạo thành công, người dùng sẽ thấy điểm bán mới của mình trong danh sách với Trạng thái trung gian đã được cập nhật, sẵn sàng cho cấp duyệt đầu tiên xử lý.
  4. **Trường hợp: Tại thời điểm này bản ghi đã có trạng thái khác Trạng thái áp dụng.** Người dùng thực hiện **cập nhật trạng thái** làm thay đổi trạng thái về bằng "Trạng thái áp dụng".
     1. Hệ thống cần có một cơ chế kiểm tra tại thời điểm thay đổi trạng thái.

        + Khi đó hệ thống sẽ tự động áp dụng quy trình mới cho bản ghi đó ngay tại thời điểm nó được chuyển về "Trạng thái áp dụng". Bản ghi này sẽ được coi như một bản ghi "mới" đối với quy trình.

4/ Lưu ý khác cho các màn hình liên quan

* **Quy trình duyệt áp dụng cho button/ icon xử lý. Chỉ những icon/ button này mới xử lý theo quy trình duyệt.**
* **Các button/icon còn lại không áp dụng bất kỳ quy trình duyệt nào thì thao tác xử lý không thay đổi (KHÔNG theo quy trình duyệt)**
* **Người dùng không thuộc quy trình duyệt, khi thao tác trên các button/icon dù button/icon đang áp dụng quy trình duyệt thì vẫn gọi hàm xử lý gốc để xử lý (KHÔNG theo quy trình duyệt)**
  + Khi thao tác sẽ gọi hàm xử lý gốc và chuyển trạng thái gốc → logic cập nhật trạng thái gốc của màn hình tương ứng
  + Trạng thái trung gian KHÔNG thay đổi với với trường hợp người thao tác không thuộc quy trình duyệt
* Luồng xử lý Import; chỉnh sửa không bị ảnh hưởng bởi quy trình duyệt. Xử lý theo logic gốc của màn hình

5/ Một số trường hợp xử lý trên app SM khi có quy trình duyệt - Thao tác HỦY đơn hàng:

SS:

* Chỉ xử lý các dữ liệu do chính mình tạo trên tuyến bán hàng của SS để tạo đơn - hủy đơn hàng
* SS chọn tuyến của saleman thì mọi thao tác Hủy đơn hàng chỉ ghi nhận cho SM

SM: Thao tác HỦY đơn hàng - có theo quy trình duyệt thì theo logic xử lý của quy trình duyệt.

---

**Phân quyền cho những màn hình khác sẽ thực hiện ở phase sau.**