-

* Trường này cho phép người dùng chọn nhiều điểm bán cùng lúc để cài đặt cho bảng giá.
* Dựa vào thông tin điểm bán ở danh sách này để lấy bảng giá áp dụng cho từng điểm bán đã cài đặt
* Trường hợp tạo mới bảng giá: Không giới hạn điểm bán được thêm vào, trường hợp chỉnh sửa bảng giá: Cho phép chọn tối đa 200 điểm bán/1 lần thêm (Áp dụng cho thêm trên portal và thêm từ file import)

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm | Textbox | Có | Không | * Tìm kiếm: Tìm kiếm theo Mã điểm bán, Tên điểm bán, Số điện thoại điểm bán, Sau khi nhập text search và click icon search thì Lưới danh sách sẽ lọc các Điểm bán có thông tin được nhập trong ô này. * Tootip: Tìm kiếm theo Mã điểm bán, Tên điểm bán, Số điện thoại điểm bán * Placeholder: Tìm kiếm theo Mã điểm bán, Tên điểm bán, Số điện thoại điểm bán |
| Danh sách điểm bán |  |  |  | * Hiển thị thông tin danh sách Điểm bán được chọn để áp dụng bảng giá * Thông tin bao gồm:   + Mã điểm bán, tên điểm bán, số điện thoại điểm bán, địa chỉ   + Trạng thái: Hiển thị trạng thái hiện tại của điểm bán * Xóa: Nhấn button này để xóa Điểm bán trên lưới danh sách, xóa từng điểm bán. Khi xóa thì xoá hẳn dòng điểm bán và không cảnh báo. * **"Xóa tất cả n điểm bán"**:   + Text cho phép xóa   + Trong đó n là tất cả các điểm bán trên tất cả các trang trên màn hình   + Chưa thêm điểm bán nào thì KHÔNG hiển thị dòng text "Xóa tất cả n điểm bán" * Có phân trang hiển thị |

* **Chức năng Thêm điểm bán:** Click button "Thêm": Hiển thị popup Thêm điểm bán

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Thêm Điểm bán | | | | |
| Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu Điểm bán dựa trên danh sách Điểm bán còn hoạt động từ màn hình Danh sách điểm bán  Tìm kiếm theo mã điểm bán, tên điểm bán, số điện thoại điểm bán  **Chi tiết hoạt động:**  Cho phép nhập text Tìm kiếm theo mã Điểm bán, tên Điểm bán, sđt Điểm bán   * Tooltip: Tìm kiếm theo mã điểm bán, tên điểm bán, số điện thoại điểm bán * Placeholder: Nhập mã điểm bán, tên điểm bán, số điện thoại điểm bán * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các Điểm bán có thông tin được nhập trong ô này. |
| Tỉnh/ Thành phố | select box onechoice | Có | Không | Chọn Tỉnh/ Thành phố để tìm kiếm Điểm bán có địa chỉ thuộc Tỉnh/Thành phố đã chọn   * Placeholder: Chọn Tỉnh/ Thành phố * Người dùng có thể tìm kiếm và chọn một Tỉnh/ Thành phố từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Điểm bán * **Mở danh sách:** Khi người dùng nhấp vào trường "Tỉnh/ Thành phố", một danh sách các Tỉnh/ Thành phố sẽ được mở ra. Danh sách Tỉnh/ Thành phố load từ master Tỉnh/ Thành phố * **Tìm kiếm và chọn:**    + Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm Tỉnh/ Thành phố mong muốn. Sau đó, họ có thể chọn một Tỉnh/ Thành phố bằng cách nhấp vào một mục trong danh sách.   + Khi người dùng chọn "Tỉnh/ Thành phố": Hệ thống sẽ tìm kiếm và hiển thị các Điểm bán thuộc tỉnh/ thành phố đã chọn * **Hiển thị lựa chọn:** Tỉnh/ Thành phố đã chọn sẽ hiển thị trong hộp chọn dưới dạng text * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa hoặc chọn lại trong danh sách để bỏ chọn Tỉnh/ Thành phố không mong muốn. * Trường hợp bỏ chọn Tỉnh/ Thành phố trong hộp chọn thì mặc định hiểu là chọn tất cả Tỉnh/ Thành phố để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Quận/ huyện | select box onechoice | Có | Không | Khi Chọn Tỉnh/ Thành phố → Chọn Quận/ huyện để tìm kiếm Điểm bán có địa chỉ thuộc quận/huyện đã chọn   * Placeholder: Chọn Quận/ huyện * Người dùng có thể tìm kiếm và chọn một Quận/ huyện từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Điểm bán * **Mở danh sách:** Khi người dùng nhấp vào trường "Quận/ huyện", một danh sách các Quận/ huyện thuộc Tỉnh/ Thành phố đã chọn sẽ được mở ra. Danh sách Quận/ huyện load từ master Quận/ huyện * **Tìm kiếm và chọn:**    + Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm Quận/ huyện mong muốn. Sau đó, họ có thể chọn một Quận/ huyện bằng cách nhấp vào một mục trong danh sách.   + Khi người dùng chọn "Quận/ huyện": Hệ thống sẽ tìm kiếm Điểm bán có địa chỉ thuộc Quận/ huyện đã chọn * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa hoặc chọn lại trong danh sách để bỏ chọn Quận/ huyện không mong muốn. * Trường hợp bỏ chọn Quận/ huyện trong hộp chọn thì mặc định hiểu là chọn tất cả Quận/ huyện để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Phường/ Xã | select box onechoice | Có | Không | Khi Chọn Quận/ Huyện → Chọn Phường/ Xã để tìm kiếm Điểm bán có địa chỉ thuộc Phường/Xã đã chọn   * Placeholder: Chọn Phường/ Xã * Người dùng có thể tìm kiếm và chọn một Phường/ Xã từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Điểm bán * **Mở danh sách:** Khi người dùng nhấp vào trường "Phường/ Xã", một danh sách các Phường/ Xã thuộc Quận/ huyện đã chọn sẽ được mở ra. Danh sách Phường/ Xã load từ master Phường/ Xã * **Tìm kiếm và chọn:**    + Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm Phường/ Xã mong muốn. Sau đó, họ có thể chọn một Phường/ Xã bằng cách nhấp vào một mục trong danh sách.   + Khi người dùng chọn "Phường/ Xã": Hệ thống sẽ tìm kiếm Điểm bán có địa chỉ thuộc Phường/Xã đã chọn * **Hiển thị lựa chọn:** Phường/ Xã đã chọn sẽ hiển thị trong hộp chọn dưới dạng text * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa hoặc chọn lại trong danh sách để bỏ chọn Phường/ Xã không mong muốn. * Trường hợp bỏ chọn Phường/ Xã trong hộp chọn thì mặc định hiểu là chọn tất cả Phường/ Xã để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Điểm bán, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách Điểm bán mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Điểm bán 2. **Danh sách Điểm bán làm mới:** Sau khi nhấp, danh sách Điểm bán sẽ hiển thị toàn bộ các Điểm bán hiện có đang active mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Điểm bán. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào hiểu là search tất cả * Default khi mở màn hình không có dữ liệu nào hiển thị, khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Điểm bán theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Điểm bán của công ty 3. **Hiển thị kết quả:** Danh sách Điểm bán sẽ cập nhật và hiển thị phù hợp với các tiêu chí đã chọn. Chỉ load những Điểm bán có trạng thái Active   **Lưu ý:**   * Nếu không có tiêu chí nào được chọn, danh sách Điểm bán sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Danh sách Điểm bán** | | | | |
| Checkbox | checkbox | Có | Không | * Check box cho phép chọn các Điểm bán để thêm vào danh sách Điểm bán. * Cho phép chọn nhiều điểm bán * Cho phép check All   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt như hình    Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Yes: Xóa tất cả các mục đã chọn; chọn No: Tắt popup và vẫn giữ nguyên trạng thái  Icon check trên header hiển thị check khi tồn tại từ 1 check dưới lưới danh sách  ---  ***lưu ý:**Khi thao tác trên pop-up Thêm điểm bán, thì ngoài danh sách điểm bán của chương trình trưng bày cũng update theo, và ngược lại*   * *Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại*  * *Nếu xóa trên lưới danh sách thì khi mở popup, filter điểm bán vừa xóa hiển thị  uncheck* |
| Mã Điểm bán | Datacolumn have copy | Không |  | Hiển thị Mã định danh của Điểm bán thỏa bộ lọc, cho phép copy |
| Tên Điểm bán | Datacolumn | Không |  | Tên Điểm bán hiển thị theo mã Điểm bán |
| Số điện thoại | Datacolumn have copy | Không |  | Số điện thoại liên hệ của Điểm bán, hiển thị theo mã Điểm bán, cho phép copy |
| Địa chỉ | Datacolumn | Không |  | Địa chỉ của Điểm bán, hiển thị theo mã Điểm bán |
| Trạng thái | Datacolumn | Không |  | * Trạng thái của điểm bán * Trường hợp thêm mới, chỉ thêm các điểm bán có trạng thái hoạt động * Trường hợp mở popup lần sau, nếu điểm bán đang checked có trạng thái Ngưng hoạt động. Khi nhấn đồng ý sẽ hiển thị cảnh báo:   + @Mã điểm bán có trạng thái không hoạt động không thể thêm vào danh sách!   + Các Mã điểm bán cách nhau dấu , |
| **Đồng ý** | Button | Không | Có | **Chức năng:**   * Nút "**Đồng ý**" cho phép người dùng thêm danh sách điểm bán đã chọn vào lưới danh sách điểm bán bên ngoài Step Đối tượng áp dụng và đóng Popup   **Lưu ý:**   * Khi đã thêm điểm bán; Chọn  back về màn hình trước rồi quay lại vẫn hiển thị danh sách đã chọn * Hoặc chọn Tiếp tục => Chọn back về lại vẫn thấy danh sách điểm bán đã chọn * Sau khi thêm thành công; sau đó chọn thêm nữa => Danh sách đã chọn vẫn hiển thị "đã chọn", muốn bỏ chọn thì uncheck và nhấn Đồng ý |

* **Chức năng import điểm bán**:

* + Nhấn vào button này → Lấy template import → Thực hiện import dữ liệu điểm bán vào lưới danh sách
  + File mẫu import: Format tên file mẫu: IMPORT\_PRICE\_STORE\_DD-MM-YYYY\_hhmmss.xlsx
  + Rule import theo quy tắc chung đã mô tả ở mục [Import](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO)
  + Templates:

| Mã điểm bán (\*) | Tên điểm bán |
| --- | --- |
| STR000001 | Điểm bán 001 |
| STR000002 | Điểm bán 002 |
| STR000003 | Điểm bán 003 |
| STR000004 | Điểm bán 004 |
| STR000005 | Điểm bán 005 |

* **Mô tả dữ liệu**

| Trường dữ liệu | Kiểu dữ liệu | Mô tả | Kiểm tra |
| --- | --- | --- | --- |
| Mã Điểm bán (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt  *( \* ) là dữ liệu bắt buộc* | * Nhập mã điểm bán muốn thêm vào bảng giá | Mã Điểm bán bỏ trống (trống 1 line => bỏ qua), nhập không đúng định dạng (Chữ có dấu tiếng việt, ký tự đặc biệt, khoảng trống - trước - trong- sau mã), không tồn tại, không hoạt động trên hệ thống DMS   * Hiển thị thông báo lỗi   + Dòng thứ @n: Mã Điểm bán nhập không đúng định dạng/ không tồn tại/ không hoạt động/ bị bỏ trống. Vui lòng kiểm tra lại! |
| Tên Điểm bán | Nhập ký tự tự do | * Nhập tên điểm bán muốn thêm vào bảng giá | * Thông tin tên điểm bán chỉ để user thực hiện tham chiếu trước khi import, khi import chỉ lấy thông tin mã điểm bán. |

**Trường hợp import thành công:**

* Nhấn X → Tắt popup và hiển thị danh sách điểm bán đã import vào màn hình
* Import lần đầu-> Import thành công trên màn hình danh sách
* Lần 2 => Skip đối tượng đã tồn tại ở lần 1.

**Trường hợp import lỗi:**

Hiển thị các dòng lỗi để user điều chỉnh

* Hiển thị tất cả các dòng lỗi và có phân trang, sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi.
* Nếu nhấn "Đóng"  sẽ không thêm bất cứ dữ liệu import nào vào màn hình