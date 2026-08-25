|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Cung cấp một cửa sổ xem chi tiết, minh bạch về toàn bộ quá trình duyệt của một bản ghi cụ thể. Có thể xem Chi tiết lịch sử cập nhật trạng thái trung gian |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | Thao NTT |
| Chage History | 2 |

truenone

Mô tả hiện tại:

Về Phân quyền duyệt/ Hủy của màn hình không thay đổi với những trường hợp **Người dùng không thuộc các Nhóm quyền trong quy trình duyệt đang hoạt động của màn hình**

* **Trạng thái gốc:** Trạng thái chính của Bảng giá trong hệ thống (ví dụ: Khởi tạo; Đã duyệt; Đã hủy).
* **Quy trình duyệt:** Một tập hợp các cấp duyệt được định nghĩa trước để xử lý một đối tượng từ trạng thái này sang trạng thái khác. [[HO][HT] Quy trình duyệt](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596)
* **Trạng thái trung gian:** Một thông tin bổ sung, thể hiện trạng thái của một đối tượng (Bảng giá) bên trong một quy trình duyệt đang hoạt động. Ví dụ: Đang ở cấp 2, đợi "Admin HO" xử lý.

## Nội dung cập nhật

Trên lưới danh sách các Bảng giá thêm cột "**Trạng thái trung gian**" trên Màn hình **[Giá Bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66520584)**

Màn hình:

#### **Trạng thái trung gian**

* Vị trí: Sau cột Trạng thái, trước cột Ngày tạo
* Kiểu dữ liệu:  kiểu text
* Nội dung hiển thị:

  + Nếu một Bảng giá đang nằm trong một quy trình duyệt đang hoạt động, ô trong cột "Trạng thái trung gian" phải hiển thị một siêu liên kết (hyperlink) với dòng chữ "Xem chi tiết"
  + Nếu một Bảng giá không nằm trong bất kỳ quy trình duyệt nào đang hoạt động, ô trong cột "Trạng thái trung gian" sẽ được để trống
* Xem lịch sử cập nhật các trạng thái trung gian: click vào hyperlink hiển thị popup "Chi tiết lịch sử trạng thái trung gian"
* Người cập nhật: hiển thị thông tin người cập nhật gần nhất theo Chi tiết lịch sử cập nhật trạng thái trung gian (Sự kiện mới nhất theo cấp cao nhất trong quy trình xử lý)
* Ngày cập nhật: hiển thị thông tin thời gian cập nhật gần nhất theo Chi tiết lịch sử cập nhật trạng thái trung gian (Sự kiện mới nhất theo cấp cao nhất trong quy trình xử lý)

#### **Bộ lọc nâng cao**

Trên vùng lọc dữ liệu thêm "Bộ lọc nâng cao" dạng hyperlink khi có từ một Quy trình duyệt đang hoạt động trên màn hình. Ngược lại Ẩn hyperlink  "Bộ lọc nâng cao"

Bộ lọc này hiển thị theo bộ lọc trạng thái bên ngoài bộ lọc chính.

Giao điện:

### Chi tiết bộ lọc nâng cao

Chi tiết bộ lọc nâng cao

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Khi click vào Hyperlink "Bộ lọc nâng cao" hiển thị popup: | | | | |
| Quy trình duyệt | Selectbox onechoice | Có | Có | * Trường này cho phép người dùng chọn một quy trình duyệt để lọc danh sách Bảng giá của Nhà phân phối dựa trên quy trình duyệt đã chọn. * Người dùng có thể tìm kiếm và chọn một quy trình duyệt từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách quy trình duyệt. * **Mở danh sách:** Khi người dùng nhấp vào trường "Quy trình duyệt", **load Danh sách tất cả các quy trình duyệt đang hoạt động áp dụng cho màn hình, danh sách này phụ thuộc vào bộ bộ lọc Trạng thái ở màn hình chính**  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm quy trình duyệt mong muốn. Sau đó, chọn một quy trình duyệt bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tag). * **Kết quả lọc:** Danh sách quy trình duyệt sẽ tự động được lọc để hiển thị những quy trình duyệt thuộc quy trình duyệt đã chọn.    + Khi một quy trình được chọn, dropdown "Trạng thái xử lý" sẽ được tự động điền với danh sách các trạng thái trung gian tương ứng. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn quy trình duyệt không mong muốn. * Trường hợp không chọn quy trình duyệt trong hộp chọn thì hiển thị thông báo lỗi. "@tên field là bắt buộc!" * Khi mở màn hình mặc định không chọn quy trình duyệt nào * Placeholder: Chọn quy trình duyệt   Lưu ý:   * Đây là bộ lọc cha. Khi người dùng chọn một quy trình cụ thể, hệ thống sẽ tự động tải danh sách các Trạng thái trung gian xử lý tương ứng của quy trình đó vào bộ lọc "Trạng thái xử lý". * Nếu người dùng không chọn Quy trình duyệt, bộ lọc "Trạng thái xử lý" sẽ bị vô hiệu hóa (disabled). => Lúc này hệ thống chỉ load các Bảng giá của Nhà phân phối có trạng thái trung gian mới nhất thỏa quy trình đang hoạt động đã chọn |
| Trạng thái xử lý | Selectbox multichoice | Có | Không | * Trường này cho phép người dùng chọn một Trạng thái xử lý để lọc Bảng giá của Nhà phân phối dựa trên Trạng thái xử lý đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều Trạng thái xử lý từ danh sách có sẵn để tinh chỉnh kết quả hiển thị theo quy trình duyệt. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái xử lý"    + Danh sách các Trạng thái trung gian của quy trình đã được chọn ở bộ lọc "Quy trình duyệt" sẽ hiển thị   + Hiển thụi **Cấp duyệt - Trạng thái trung gian** theo số cấp của quy trình đã chọn       |  |  |     | --- | --- |     | **Cấp duyệt** | **Trạng thái trung gian** |     | Cấp 1 | Đang ở cấp 1, đợi "@Nhóm quyền cấp 1" xử lý |     | Cấp n | Đang ở cấp n, đợi "@Nhóm quyền cấp n" xử lý |     | ... |  |     | Cấp 10 | Đang ở cấp 10, đợi "@Nhóm quyền cấp 10" xử lý |  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm Trạng thái xử lý mong muốn. Sau đó, chọn một hoặc nhiều Trạng thái xử lý bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags). * **Kết quả lọc:** Danh sách các Trạng thái xử lý theo quy trình duyệt đã chọn sẽ hiển thị * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn cấp không mong muốn. * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả các Trạng thái xử lý để tìm kiếm. * Khi mở màn hình mặc định bộ lọc này bị vô hiệu hóa. Không cho lọc tìm kiếm khi chưa chọn Quy trình duyệt. * Khi Chọn Quy trình duyệt → "Trạng thái xử lý" không chọn lựa chọn nào, tức là chọn tất cả * Placeholder: Chọn trạng thái xử lý   Lưu ý:    * Mặc định, bộ lọc này bị vô hiệu hóa. Không cho lọc tìm kiếm khi chưa chọn Quy trình duyệt. * Khi một quy trình được chọn, bộ lọc này được kích hoạt và cho phép người dùng chọn một hoặc nhiều Trạng thái xử lý của quy trình |
| Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng xóa tất cả đã chọn trên màn hình.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên popup 2. **Danh sách làm mới:** Sau khi nhấp, popup sẽ hiển thị mặc định.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của popup * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Tìm kiếm | Button | Có | Không | Khi người dùng nhấn nút **"Tìm kiếm"**Tắt popup và hiển thị danh sách kết quả trên lưới:    **Hệ thống sẽ thực hiện xử lý theo logic sau:**   1. **Kiểm tra Đầu vào:** Hệ thống xác thực rằng người dùng đã chọn một Quy trình duyệt. Nếu chưa, hiển thị thông báo lỗi. "Tên @field là bắt buộc!" 2. **Truy vấn:** Hệ thống sẽ truy vấn với các điều kiện sau:     * **Điều kiện 1 (Bắt buộc):** Lọc các bản ghi có ID của quy trình người dùng đã chọn. VÀ    * **Điều kiện 2 (Tùy chọn):** Nếu người dùng có chọn giá trị trong bộ lọc "Trạng thái xử lý":       + Điều kiện sẽ là Trạng thái trung gian đã chọn thuộc quy trình duyệt (của điều kiện 1) theo điều kiện **HOẶC (Tức là bản ghi mới nhất thỏa một trong các trạng thái trung gian đã chọn)**. 3. **Thực thi và Hiển thị:** Hệ thống thực thi câu truy vấn và trả về danh sách các Bảng giá của Nhà phân phối thỏa mãn. Mỗi Bảng giá của Nhà phân phối sẽ được hiển thị trên một dòng duy nhất. |
| Dấu x |  |  |  | Chọn dấu x để tắt popup và không áp dụng bộ lọc nâng cao. |

Chi tiết lịch sử

### Popup: Chi tiết lịch sử trạng thái trung gian

Mục đích: Cung cấp một cửa sổ xem chi tiết, minh bạch về toàn bộ quá trình duyệt của một bản ghi cụ thể. Click hyperlink "Xem chi tiết" →  hiển thị popup "Chi tiết lịch sử trạng thái trung gian". 

1. **Kích hoạt Popup:**

   * Nhấp chuột vào hyperlink "Xem chi tiết" mở ra một cửa sổ popup (modal).
   * Popup có tiêu đề là **"Chi tiết lịch sử trạng thái trung gian"**.
   * Popup phải có nút "Đóng" hoặc biểu tượng (X) để người dùng có thể đóng lại.
2. **Cấu trúc Hiển thị Dữ liệu trong Popup:**

   * Dữ liệu trong popup được trình bày dưới dạng một lưới danh sách gồm 2 level.
   * **Logic gom nhóm:** Dữ liệu phải được gom nhóm theo **"Mã - Tên quy trình"**. Mỗi nhóm quy trình sẽ hiển thị toàn bộ lịch sử các bước thuộc quy trình đó. Điều này giải quyết trường hợp một Bảng giá có thể áp dụng đồng thời nhiều quy trình (ví dụ: Quy trình Phê duyệt và Quy trình Hủy).
3. **Các cột trong Lưới Lịch sử:** Lưới hiển thị bao gồm các cột mô tả bên dưới
4. **Sắp xếp Dữ liệu:**

   * Các nhóm quy trình được sắp xếp theo thời gian cập nhật của quy trình đó.
   * Bên trong mỗi nhóm quy trình, các bản ghi lịch sử phải được sắp xếp theo Ngày duyệt giảm dần (hành động gần nhất hiển thị ở trên cùng, trường hợp có nhiều sự kiện cập nhật cùng thời điểm thì sắp xếp theo cấp cao nhất lên trên cùng).

Mô tả:

| **Tên cột** | **Kiểu dữ liệu** | **Mô tả** |
| --- | --- | --- |
| **Bộ lọc theo Thời gian** | Date Range Picker | * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn. Mặc định ngày 7 ngày kể từ ngày hiện tại (ví dụ hiện tại ngày n; từ ngày n-6; đến ngày n)  * Đến Ngày >= Từ Ngày * Đến Ngày - Từ Ngày <= 30 ngày * Có thể chọn bất kỳ khoảng thời gian nào, miễn là  Đến Ngày - Từ Ngày <= 30 ngày (Lượng data history sẽ được lưu trữ từ 1-3 năm tùy theo hợp đồng từng công ty) |
| **Nút "Tìm kiếm"** | Button | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng nhập ngày để lọc 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách 3. **Hiển thị kết quả:** Danh sách sẽ Cập nhật và hiển thị  * Mặc định: Mặc định là ngày hiện tại.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Lưới "Lịch sử cập nhật"** | Table / Grid |  |
| **Level 1: mặc định Collapse tất cả**  **Mã - Tên quy trình:**  Hiển thị mã và tên của quy trình duyệt được áp dụng. Ví dụ: AWF20250901001 - Quy trình Phê duyệt   * Gom nhóm theo "Mã - Tên quy trình". Mỗi nhóm quy trình sẽ hiển thị toàn bộ lịch sử các bước thuộc quy trình đó * Hiển thị danh sách các bản ghi:     + Bên trong mỗi nhóm quy trình, các bản ghi lịch sử phải được sắp xếp theo Ngày duyệt giảm dần (hành động gần nhất hiển thị ở trên cùng, trường hợp có nhiều sự kiện cập nhật cùng thời điểm thì sắp xếp theo cấp cao nhất lên trên cùng).   + Không có dữ liệu: Hiển thị dòng chữ khi không tìm thấy bản ghi nào: "Không có lịch sử Cập nhật trong khoảng thời gian đã chọn." | | |
| **Level 2: Khi chọn expand sẽ hiển thị lưới danh sách theo quy trình đã chọn gồm** | | |
| **#** |  | Số thứ tự |
| **Cấp duyệt** | Data Column | Hiển thị cấp mà tại đó hành động được thực hiện (ví dụ: Cấp 1, Cấp 2). |
| **Hành động** | Data Column | 1. Phê duyệt 2. Từ chối 3. Tự động duyệt   Hiển thị 1 trong 3 hành động tương ứng khi click vào button/icon xử lý trên màn hình hoặc hệ thống tự động duyệt theo cấu hình. |
| **Trạng thái trung gian** | Data Column | Hiển thị trạng thái của Bảng giá **sau khi** hành động được thực hiện.   * + Ví dụ 1: Đang ở cấp 2, đợi "Admin 2" xử lý.   + Ví dụ 2: Trạng thái trung gian = trạng thái gốc (khi quy trình kết thúc và hàm xử lý gốc được gọi để cập nhật trạng thái chính của Bảng giá). |
| **Lý do** | Data Column | Hiển thị nội dung lý do mà người dùng đã nhập hoặc chọn từ dữ liệu chung khi thực hiện hành động "Từ chối" hoặc "Hủy". Ô này có thể để trống nếu không có lý do. |
| **Người cập nhật** | Data Column | * Hiển thị thông tin người thực hiện theo định dạng: Mã người cập nhật - Tên người cập nhật. * Nếu hành động là do hệ thống tự động duyệt, hiển thị là System Admin. |
| **Thời gian cập nhật** | Data Column | Thời gian cập nhật dd/mm/yyyy hh:mm:ss |
| Đóng và dấu x | button đóng | Đóng popup và quay về màn hình trước đó |

## **Quy trình và xử lý chung**

### Xử lý chung

Để đảm bảo an toàn và đúng vai trò, hệ thống phải luôn kiểm tra **hai lớp phân quyền** một cách độc lập:

1. **Lớp 1: Quyền theo các nhóm quyền thuộc Quy Trình duyệt:**

   * Người dùng này thuộc phân quyền được phép tham gia vào bước duyệt hiện tại của quy trình hay không?
   * **Xác định bởi:** Cấu hình Nhóm quyền trong màn hình "Thêm mới/Chỉnh sửa Quy trình duyệt".
   * **Tác dụng:** Dựa vào Quy trình xử lý ([Quy trình duyệt nhiều cấp](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Quytr%C3%ACnhduy%E1%BB%87tnhi%E1%BB%81uc%E1%BA%A5p)) Quyết định việc người dùng có **nhìn thấy** bộ icon xử lý của quy trình duyệt (Phê duyệt, Từ chối, cập nhật trạng thái) hay không.
2. **Lớp 2: Quyền Gốc:**

   * "Người dùng này có quyền thực hiện hành động gốc trên màn hình này không?
   * **Xác định bởi:** Hệ thống phân quyền vai trò (Role) cơ bản của toàn bộ DMS.  [[HO][HT] Chức năng phân quyền - Nhóm quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)
   * **Tác dụng:** Quyết định việc người dùng có **thực sự thực thi thành công** hành động cuối cùng (khi Phê duyệt ở cấp cuối, Từ chối cấp đầu tiên hoặc Từ chối có Trạng thái khi Từ chối của quy trình) hay không.

**Xung đột dữ liệu khi:**

1. **Kiểm tra ban đầu**:
   1. **Khi nào:**Trước khi xác nhận thực hiện bất kỳ hành động nào.
   2. **Logic:**Hệ thống phải kiểm tra xem 
      * Kiểm tra xem người dùng đang đăng nhập có thuộc Nhóm quyền được cấu hình để xử lý ở cấp duyệt hiện tại của bản ghi đó hay không.
        + **Nếu người dùng không thuộc nhóm quyền:**server sẽ từ chối yêu cầu và trả về lỗi "Bạn không có quyền thực hiện hành động này." Tắt popup và reload lại màn hình khi đó icon xử lý của người dùng sẽ ẩn trên các bản ghi. Quy trình dừng lại.
      * Trạng thái chính của Bảng giá trong CSDL có còn là Trạng thái áp dụng hay không (ví dụ "Khởi tạo").
        + **Nếu trạng thái đã thay đổi:**Dừng hành động và hiển thị thông báo lỗi: "Bản ghi này đã được xử lý bởi một người dùng khác. Vui lòng tải lại trang." **Tắt popup và tải lại màn hình**
2. **Người dùng có Quyền Lớp 1 nhưng không có Quyền Lớp 2:**

Đây là các lỗi xảy ra khi người dùng có quyền trong quy trình nhưng thiếu quyền gốc của màn hình.

* + **Tình huống A: Thiếu quyền ở bước cuối cùng (Quyền Phê duyệt)**
    - **Hiển thị thông báo:**"Bạn có quyền xử lý trong quy trình này, nhưng không có quyền gốc để Phê duyệt Bảng giá. Vui lòng liên hệ quản trị viên."
  + **Tình huống B: Thiếu quyền khi Từ chối (Quyền Hủy)**
    - **Hiển thị thông báo:**"Bạn có quyền xử lý trong quy trình này, nhưng không có quyền gốc để Hủy Bảng giá. Vui lòng liên hệ quản trị viên."

### Quy trình chung

Tham khảo: [Quy trình chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533070#id-[HO][HT]Danhs%C3%A1ch%C4%91i%E1%BB%83mb%C3%A1n-Quytr%C3%ACnhchung)

Mô tả quy trình:

Một bản ghi (ví dụ: một Bảng giá của Nhà phân phối) đang ở trong một quy trình duyệt đang hoạt động. Người dùng hiện tại nhìn thấy bộ icon/ button xử lý của quy trình.

|  |  |  |
| --- | --- | --- |
| 1 | Người dùng | Người dùng nhấn vào icon Phê duyệt hoặc Hủy trên giao diện. Thực hiện Đồng ý hoặc Từ chối trên giao diện hiển thị → Trình duyệt gửi một yêu cầu đến server kèm theo mã bản ghi và hành động tương ứng. |
| 2 | Hệ thống | **Kiểm tra Xung đột Dữ liệu**   * + **Khi nào:**Trước khi xác nhận thực hiện bất kỳ hành động nào.   + **Logic:**Hệ thống phải kiểm tra xem      - Kiểm tra xem người dùng đang đăng nhập có thuộc Nhóm quyền được cấu hình để xử lý ở cấp duyệt hiện tại của bản ghi đó hay không.       * **Nếu người dùng không thuộc nhóm quyền:**server sẽ từ chối yêu cầu và trả về lỗi "Bạn không có quyền thực hiện hành động này." Tắt popup và reload lại màn hình khi đó icon xử lý của người dùng sẽ ẩn trên các bản ghi. Quy trình dừng lại. |
| 3 | Hệ thống | Kiểm tra Trạng thái chính của Bảng giá trong CSDL có còn là Trạng thái áp dụng hay không (ví dụ "Khởi tạo").   * + **Nếu trạng thái đã thay đổi:**Dừng hành động và hiển thị thông báo lỗi: "Bản ghi này đã được xử lý bởi một người dùng khác. Vui lòng tải lại trang." **Tắt popup và tải lại màn hình**   + **Nếu hợp lệ:**Phân loại kết quả xử lý - Theo [Quy trình xử lý và các màn hình liên quan](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Quytr%C3%ACnhx%E1%BB%ADl%C3%BDv%C3%A0c%C3%A1cm%C3%A0nh%C3%ACnhli%C3%AAnquan)     - 3.1 Không thay đổi trạng thái gốc     - 3.2 Có thay đổi trạng thái gốc |
| 3.1 | Hệ thống | **Chuyển tiếp Quy trình:** Hành động này **KHÔNG** làm thay đổi Trạng thái chính của bản ghi. Các ví dụ bao gồm:   * Nhấn Phê duyệt ở một cấp không phải là cấp cuối cùng. * Nhấn Từ chối ở một cấp (N) và cấp đó **không** có Trạng thái khi Từ chối của quy trình (logic đẩy lùi về cấp N-1). * Cập nhật trạng thái trung gian (ví dụ: "Đang ở cấp x, đợi “Tên các nhóm quyền của cấp x” xử lý."). * **Ghi Lịch sử:** Toàn bộ thông tin về hành động thay đổi trạng thái trung gian được ghi vào bảng lịch sử cập nhật trạng thái trung gian |
| 3.2 | Hệ thống | Các hành động thay đổi trạng thái gốc:   1. Nhấn hủy ở cấp có chọn Trạng thái khi Từ chối của quy trình 2. Nhấn duyệt ở cấp cuối cùng |
| 4 | Hệ thống | Hệ thống truy vấn vào module phân quyền [[HO][HT] Chức năng phân quyền - Nhóm quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544) để kiểm tra xem vai trò của người dùng đang đăng nhập có được phép thực thi Hành động Gốc đã xác định ở trên hay không. |
| 4.1 | Hệ thống | Không có quyền gốc => hiển thị thông báo.  Tắt popup và reload lại màn hình.  Đây là các lỗi xảy ra khi người dùng có quyền trong quy trình nhưng thiếu quyền gốc của màn hình.   * + **Tình huống A: Thiếu quyền ở bước cuối cùng (Quyền Phê duyệt)**     - **Hiển thị thông báo:**"Bạn có quyền xử lý trong quy trình này, nhưng không có quyền gốc để Phê duyệt Bảng giá. Vui lòng liên hệ quản trị viên."   + **Tình huống B: Thiếu quyền khi Từ chối (Quyền Hủy)**     - **Hiển thị thông báo:**"Bạn có quyền xử lý trong quy trình này, nhưng không có quyền gốc để Hủy Bảng giá. Vui lòng liên hệ quản trị viên." |
| 5 | Hệ thống | **Có quyền gốc:**  **Thực thi Hành động Gốc:** Hệ thống gọi hàm xử lý gốc của màn hình  **Cập nhật Trạng thái chính:** Hàm xử lý gốc sẽ thay đổi Trạng thái chính của bản ghi trong cơ sở dữ liệu (ví dụ: từ "Khởi tạo" sang "Đã duyệt" hoặc Từ “Khởi tạo" “sang "Đã hủy").  **Cập nhật Trạng thái trung gian:** Hệ thống cập nhật Trạng thái trung gian lần cuối để phản ánh hành động cuối cùng (Khi đó trạng thái trung gian bằng trạng thái chính của màn hình xử lý)  **Ghi Lịch sử:** Toàn bộ thông tin về hành động thay đổi trạng thái trung gian được ghi vào bảng lịch sử cập nhật trạng thái trung gian  **Kết quả:** Quy trình kết thúc thành công, bản ghi được cập nhật |

## **Các quy trình cài đặt**

Những người dùng **thuộc các Nhóm quyền trong quy trình duyệt (đang hoạt động) và thuộc cấp chờ xử lý của quy trình**sẽ nhìn thấy icon xử lý Duyệt/ Hủy trạng thái mới theo quy trình duyệt khi "trạng thái chính" = "Trạng thái áp dụng" của quy trình.

### **1/ Quy trình xử lý Phê duyệt**

* **Mục đích:** Kiểm soát việc tạo mới và Phê duyệt một Bảng giá của Nhà phân phối, đảm bảo dữ liệu được xác thực qua nhiều cấp trước khi phê duyệt thành công các Bảng giá ở trạng thái Khởi tạo.
* **Điều kiện kích hoạt:** Trạng thái gốc của Bảng giá của Nhà phân phối = Khởi tạo.
* **Hành động Gốc:** "Phê duyệt" sẽ gọi hàm xử lý gốc của màn hình để xử lý chuyển Trạng thái gốc theo mô tả [HO] Thiết lập NPP chỉnh sửa giá bán
* **Trạng thái sau áp dụng: Đã duyệt** (nếu duyệt thành công)
* **Trạng thái khi Từ chối thành công:** Đã hủy (nếu Hủy/ từ chối thành công).

#### **Ví dụ cài đặt Quy trình:**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tên quy trình | Quy trình Phê duyệt Bảng giá của Nhà phân phối | | | |
| Dữ liệu áp dụng | Duyệt Bảng giá của Nhà phân phối |  |  |  |
| Trạng thái áp dụng | Khởi tạo |  |  |  |
| Duyệt vượt cấp | ON/ OFF |  |  |  |
| Chức năng | Phê duyệt |  |  |  |
| Trạng thái sau áp dụng | Đã duyệt |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | ***Hành động khi Duyệt*** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | Admin 1 | *Đi tới cấp tiếp theo* | Thay đổi sang trạng thái Đã hủy | 2 |
| Cấp 2 | Admin 2 | *Đi tới cấp tiếp theo* | Thay đổi sang trạng thái Đã hủy | 0 |
| Cấp ... | ... | *Đi tới cấp tiếp theo* | *Trở về cấp duyệt trước*hoặc *Thay đổi sang trạng thái Đã hủy* | 0 |
| Cấp 10 | Admin HO | *Thay đổi sang trạng thái **Đã duyệt*** | *Trở về cấp duyệt trước* | 3 |

#### **Mô tả UI hiển thị:**

* **Kích hoạt:**Khi tạo mới một Bảng giá của Nhà phân phối, Bảng giá của Nhà phân phối đó có trạng thái Khởi tạo. Quy trình được kích hoạt khi Trạng thái chính = Trạng thái áp dụng

* **Thay đổi Giao diện:**
  + Trên dòng của Bảng giá đó, những người dùng KHÔNG **thuộc các Nhóm quyền trong quy trình duyệt (đang hoạt động)**sẽ nhìn thấy icon xử lý "Duyệt" gốc của màn hình (logic xử lý: gọi hàm xử lý gốc của màn hình để xử lý chuyển Trạng thái gốc của màn hình)
  + Đối với những người dùng **thuộc các Nhóm quyền trong quy trình duyệt (đang hoạt động) và thuộc cấp chờ xử lý của quy trình** sẽ nhìn thấy icon xử lý "Duyệt"

* + - Trạng thái trung gian mới nhất tại thời điểm hiện tại sẽ hiển thị khi hover chuột vào icon "Duyệt" mới của quy trình duyệt:
    - Button này chỉ hiển thị cho những người dùng thuộc Nhóm quyền được cấu hình để xử lý yêu cầu ở cấp hiện tại, sẽ thấy icon xử lý. Chọn button hiển thị popup:
      * + Trong đó: Xác nhận duyệt bảng giá
        + @trạng thái trung gian: Là dòng trạng thái trung gian hiển thị mới nhất theo thời điểm hover chuột
        + @Hành động khi Duyệt: Hiển thị hành động khi duyệt của quy trình theo cấp đang xử lý
        + @Hành động khi Từ chối: Hiển thị hành động khi tư chối của quy trình theo cấp đang xử lý
      * Chọn button Từ chối hiển thị popup bắt buộc nhập lý do:  
        + Nhập lý do dạng text. Chọn "Đồng ý" để xác nhận lý do và đóng popup "Xác nhận duyệt đơn bảng giá"

* **Kiểm tra Xung đột Dữ liệu**
  + **Xem mô tả trên [Quy trình xử lý chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533070#id-[HO][HT]Danhs%C3%A1ch%C4%91i%E1%BB%83mb%C3%A1n-Ki%E1%BB%83mtrachung)**
* **Cấu hình có Duyệt vượt cấp hoặc Không:**

Xem thêm: [Ví dụ và Lưu ý](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-V%C3%ADd%E1%BB%A5v%C3%A0L%C6%B0u%C3%BD) của quy trình duyệt.

[Duyệt vượt cấp = OFF](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Duy%E1%BB%87tv%C6%B0%E1%BB%A3tc%E1%BA%A5p=OFF)

[Duyệt vượt cấp = ON](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Duy%E1%BB%87tv%C6%B0%E1%BB%A3tc%E1%BA%A5p=ON)

### **2/ Quy trình xử lý Hủy**

* **Mục đích:** Cho phép người dùng có thẩm quyền Đã hủy một Bảng giá của Nhà phân phối đang ở trạng thái Khởi tạo.
* **Điều kiện kích hoạt:** Trạng thái gốc của Bảng giá của Nhà phân phối = Khởi tạo.
* **Hành động Gốc:**  Đã hủy sẽ gọi hàm xử lý gốc của màn hình để xử lý chuyển Trạng thái gốc theo mô tả [HO] Thiết lập NPP chỉnh sửa giá bán
* **Trạng thái sau áp dụng:** Đã hủy (nếu đồng ý Đã hủy qua n cấp thành công)
* Lưu ý: "Từ chối/ hủy " trong trường hợp này thực chất là một hành động Phê duyệt cho việc từ chối/Hủy.

#### **Ví dụ cài đặt Quy trình:**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tên quy trình | Quy trình hủy Bảng giá của Nhà phân phối | | | |
| Dữ liệu áp dụng | Duyệt Bảng giá của Nhà phân phối |  |  |  |
| Trạng thái áp dụng | Khởi tạo |  |  |  |
| Duyệt vượt cấp | ON/ OFF |  |  |  |
| Chức năng | Hủy |  |  |  |
| Trạng thái sau áp dụng | Đã hủy |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | ***Hành động khi duyệt*** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | Admin 1; | *Đi tới cấp tiếp theo* | Không thay đổi | 2 |
| Cấp 2 | Admin 2 | *Đi tới cấp tiếp theo* | *Trở về cấp duyệt trước* | 0 |
| Cấp ... | ... | *Đi tới cấp tiếp theo* | *Trở về cấp duyệt trước* | 0 |
| Cấp 10 | Admin HO | *Thay đổi sang trạng thái Đã hủy* | *Trở về cấp duyệt trước* | 3 |

#### **Mô tả UI hiển thị:**

**Kích hoạt:**Khi tạo mới một Bảng giá của Nhà phân phối, Bảng giá của Nhà phân phối đó có trạng thái Khởi tạo. Quy trình được kích hoạt khi Trạng thái chính = Trạng thái áp dụng

**Thay đổi Giao diện:**

* Trên dòng của Bảng giá của Nhà phân phối đó, những người dùng KHÔNG **thuộc các Nhóm quyền trong quy trình hủy Bảng giá của Nhà phân phối (đang hoạt động)**sẽ nhìn thấy icon xử lý "Hủy" gốc của màn hình (logic xử lý không thay đổi so với hiện tại)
* Đối với những người dùng **thuộc các Nhóm quyền trong quy trình duyệt (đang hoạt động) và thuộc cấp chờ xử lý của quy trình** sẽ nhìn thấy icon xử lý "Hủy"
  + Trạng thái trung gian mới nhất tại thời điểm hiện tại sẽ hiển thị khi hover chuột vào icon "Hủy" mới của quy trình duyệt:
  + Button này chỉ hiển thị cho những người dùng thuộc Nhóm quyền được cấu hình để xử lý yêu cầu ở cấp hiện tại, sẽ thấy icon xử lý. Chọn button hiển thị popup:
    - * Trong đó: Label: Xác nhận hủy bảng giá
      * @trạng thái trung gian: Là dòng trạng thái trung gian hiển thị mới nhất theo thời điểm hover chuột
      * @Hành động khi Duyệt: Hiển thị hành động khi duyệt của quy trình theo cấp đang xử lý
      * @Hành động khi Từ chối: Hiển thị hành động khi từ chối của quy trình theo cấp đang xử lý
      * Nhập lý do:  free text
    - Chọn button "Đồng ý"/  "Từ chối" bắt buộc phải nhập lý do.

* + **Kiểm tra Xung đột Dữ liệu**
    - **Xem mô tả trên [Quy trình xử lý chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533070#id-[HO][HT]Danhs%C3%A1ch%C4%91i%E1%BB%83mb%C3%A1n-Ki%E1%BB%83mtrachung)**
  + **Cấu hình có Duyệt vượt cấp hoặc Không:**

Xem thêm: [Ví dụ và Lưu ý](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-V%C3%ADd%E1%BB%A5v%C3%A0L%C6%B0u%C3%BD) của quy trình duyệt.

[Duyệt vượt cấp = OFF](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Duy%E1%BB%87tv%C6%B0%E1%BB%A3tc%E1%BA%A5p=OFF)

[Duyệt vượt cấp = ON](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Duy%E1%BB%87tv%C6%B0%E1%BB%A3tc%E1%BA%A5p=ON)

## **Lưu ý**

* **Quy trình duyệt áp dụng cho button/ icon xử lý. Chỉ những icon/ button này mới xử lý theo quy trình duyệt.**
* **Các button/icon còn lại không áp dụng bất kỳ quy trình duyệt nào thì thao tác xử lý không thay đổi (KHÔNG theo quy trình duyệt)**
* **Người dùng không thuộc quy trình duyệt, khi thao tác trên các button/icon dù button/icon đang áp dụng quy trình duyệt thì vẫn gọi hàm xử lý gốc để xử lý (KHÔNG theo quy trình duyệt)**
  + Khi thao tác sẽ gọi hàm xử lý gốc và chuyển trạng thái gốc → logic cập nhật trạng thái gốc của màn hình [HO] Thiết lập NPP chỉnh sửa giá bán
  + Trạng thái trung gian KHÔNG thay đổi với với trường hợp người thao tác không thuộc quy trình duyệt