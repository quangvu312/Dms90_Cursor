* Trường này cho phép người dùng chọn nhiều Nhà phân phối cùng lúc để cài đặt cho bảng giá.
* Dựa vào thông tin Nhà phân phối ở danh sách này để lấy bảng giá áp dụng cho NPP đã cài đặt-
* Trường hợp tạo mới bảng giá: Không giới hạn NPP được thêm vào, trường hợp chỉnh sửa bảng giá: Cho phép chọn tối đa 200 NPP/1 lần thêm (Áp dụng cho thêm trên portal và thêm từ file import)

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm | Textbox | Có | Không | * Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP. Sau khi nhập text search và click icon search thì Lưới danh sách sẽ lọc các Nhà phân phối có thông tin được nhập trong ô này. * Tootip: Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP * placeholder: Mã NPP/ Tên NPP/ SĐT NPP |
| Danh sách Nhà phân phối |  |  |  | * Hiển thị thông tin danh sách Nhà phân phối được chọn để áp dụng bảng giá * Thông tin bao gồm:   + Mã Nhà phân phối, tên Nhà phân phối, số điện thoại, địa chỉ   + Trạng thái: Hiển thị trạng thái hiện tại của NPP * Xóa: Nhấn button này để xóa Nhà phân phối trên lưới danh sách, xóa từng Nhà phân phối. Khi xóa thì xoá hẳn dòng NPP và không cảnh báo. * **"Xóa tất cả n NPP"**:   + Text cho phép xóa   + Trong đó n là tất cả các Nhà phân phối trên tất cả các trang trên màn hình   + Chưa thêm NPP nào thì KHÔNG hiển thị dòng text "Xóa tất cả n NPP" * Có phân trang hiển thị |

* **Chức năng Thêm NPP:** Click button "Thêm": Hiển thị popup Thêm nhà phân phối

* Mặc định mở màn hình rỗng
* Khi chọn Button "Tìm kiếm" - chưa chọn bất kì dữ liệu lọc nào => Hiểu là search tất cả => hiển thị all danh sách NPP đang active trên lưới
* Khi chọn Button "Tìm kiếm" - Đã chọn các tiêu chí lọc => Hiểu là search theo tiêu chí bộ lọc => hiển thị danh sách NPP thỏa tiêu chí bộ lọc trên lưới
* Chỉ load các NPP đang active để chọn

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| **Thêm Nhà phân phối** | | | | |
| Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu Nhà phân phối dựa trên danh sách Nhà phân phối. Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP  **Chi tiết hoạt động:**  Cho phép nhập text Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP   * Tooltip: **Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP** * Placeholder: **Mã NPP/ Tên NPP/ SĐT NPP** * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các Nhà phân phối đang active có thông tin được nhập trong ô này. |
| Tỉnh/ thành phố | select box onechoice | Có | Không | **Chức năng:**   * Trường "Tỉnh/Thành Phố" cho phép người dùng lọc Nhà phân phối theo tỉnh hoặc thành phố dựa trên địa chỉ của NPP. * Khi người dùng chọn một tỉnh/thành phố, các trường "Quận/Huyện" và "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc tỉnh/thành phố đó.   **Cách sử dụng:**   1. **Chọn tỉnh/thành phố:** Người dùng có thể chọn tỉnh/thành phố từ danh sách để lọc các Nhà phân phối theo địa chỉ. Danh sách Tỉnh/thành phố lấy theo danh sách của địa lý Việt Nam 2. Hiển thị: Hiển thị trong hộp chọn dưới dạng text, cho phép xóa/ chọn lại 3. **Tự động lọc:** Sau khi chọn, danh sách quận/huyện và phường/xã sẽ cập nhật, và lưới danh sách sẽ hiển thị các Nhà phân phối liên quan   **Lưu ý:**   * Nếu người dùng không chọn Tỉnh/thành phố, lưới danh sách sẽ hiển thị tất cả các Nhà phân phối mà không áp dụng bộ lọc theo địa chỉ đã chọn * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Quận/ huyện | selectonechoice | Có | Không | **Chức năng:**   * Trường "Quận/Huyện" cho phép người dùng lọc Nhà phân phối theo quận hoặc huyện dựa trên địa chỉ của đã chọn * Sau khi chọn Tỉnh/thành phố, trường "Quận/Huyện" sẽ chỉ hiển thị các quận/huyện thuộc Tỉnh/thành phố đó.   **Cách sử dụng:**   1. **Chọn quận/huyện:** Người dùng có thể chọn quận/huyện từ danh sách để lọc các Nhà phân phối theo địa chỉ. Danh sách quận/huyện lấy theo danh sách của địa lý Việt Nam 2. Hiển thị: Hiển thị trong hộp chọn dưới dạng text, cho phép xóa/ chọn lại 3. **Tự động lọc:** Danh sách phường/xã sẽ cập nhật, và lưới danh sách sẽ hiển thị các Nhà phân phối có địa chỉ trong quận/huyện đó.   **Lưu ý:**   * Trường "Quận/Huyện" chỉ có dữ liệu sau khi người dùng đã chọn một Tỉnh/thành phố. |
| Phường/Xã | selectonechoice | Có | Không | **Chức năng:**   * Trường "Phường/Xã" cho phép người dùng lọc Nhà phân phối theo phường hoặc xã dựa trên địa chỉ NPP * Sau khi chọn quận/huyện, trường "Phường/Xã" sẽ chỉ hiển thị các phường/xã thuộc quận/huyện đó.   **Cách sử dụng:**   1. **Chọn phường/xã:** Người dùng có thể chọn phường/xã từ danh sách để lọc các Nhà phân phối theo địa chỉ NPP. Danh sách phường/xã lấy theo danh sách của địa lý Việt Nam 2. Hiển thị: Hiển thị trong hộp chọn dưới dạng text, cho phép xóa/ chọn lại 3. **Kết quả lọc:** lưới danh sách sẽ hiển thị các Nhà phân phối liên quan đến phường/xã đã chọn   **Lưu ý:**   * Trường "Phường/Xã" chỉ có dữ liệu sau khi người dùng đã chọn một quận/huyện. |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Nhà phân phối, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách Nhà phân phối mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Nhà phân phối 2. **Danh sách Nhà phân phối làm mới:** Sau khi nhấp, danh sách Nhà phân phối sẽ hiển thị toàn bộ các Nhà phân phối của công ty hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Nhà phân phối. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Nhà phân phối theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Nhà phân phối của công ty 3. **Hiển thị kết quả:** Danh sách Nhà phân phối sẽ cập nhật và hiển thị phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Nhà phân phối sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Grid Danh sách Nhà phân phối** | | | | |
| Checkbox | checkbox | Có | Không | * Check box cho phép chọn các Nhà phân phối để thêm vào Danh sách Nhà phân phối. * Cho phép chọn nhiều NPP * Cho phép check All   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt    Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Yes: Xóa tất cả các mục đã chọn; chọn No: Tắt popup và vẫn giữ nguyên trạng thái  Icon checkAll trên header hiển thị check khi tồn tại từ 1 check dưới lưới danh sách  -------  ***lưu ý:**Khi thao tác trên pop-up Thêm NPP, thì ngoài danh sách NPP của chương trình trưng bày cũng update theo, và ngược lại*   * *Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại*  * *Nếu xóa ngoài lưới danh sách thì khi mở popup này, filter dữ liệu, NPP đã xóa sẽ thấy uncheck*  * Mở Popup lần sau, khi chọn bộ lọc có Nhà phân phối đã chọn trước, màn hình vẫn hiển thị checked đối với các NPP đã chọn, người dùng có thể giữ nguyên hoặc uncheck |
| Mã Nhà phân phối | Datacolumn have copy | Không |  | Mã định danh của Nhà phân phối trong hệ thống cũng là thông tin đăng nhập của Nhà phân phối, cho phép copy |
| Tên Nhà phân phối | Datacolumn | Không |  | Tên Nhà phân phối hiển thị theo mã Nhà phân phối theo mã Nhà phân phối |
| Số điện thoại | Datacolumn | Không |  | Số điện thoại liên hệ của Nhà phân phối, hiển thị theo mã Nhà phân phối |
| Địa chỉ | Datacolumn | Không |  | Hiển thị địa chỉ của nhà phân phối theo mã NPP |
| Trạng thái | Datacolumn | Không |  | * Trạng thái của NPP * Trường hợp thêm mới, chỉ thêm các NPP có trạng thái hoạt động * Trường hợp mở popup lần sau, nếu NPP đang checked có trạng thái Ngưng hoạt động. Khi nhấn đồng ý sẽ hiển thị cảnh báo:   + @Mã NPP có trạng thái không hoạt động không thể thêm vào danh sách!   + Các Mã NPP cách nhau dấu , |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Đồng ý** | Button | Có | Không | **Chức năng:**   * Nút "**Đồng ý**" cho phép người dùng thêm danh sách Nhà phân phối đã chọn vào lưới Nhà phân phối bên ngoài Step Đối tượng áp dụng và đóng Popup   **Lưu ý:**   * Khi đã thêm NPP; Chọn  back về màn hình trước rồi quay lại vẫn hiển thị danh sách đã chọn * Hoặc chọn Tiếp tục => Chọn back về lại vẫn thấy danh sách NPP đã chọn * Sau khi thêm thành công; sau đó chọn thêm nữa => Danh sách đã chọn vẫn hiển thị "đã chọn", muốn bỏ chọn thì uncheck và nhấn Đồng ý |

* **Chức năng import NPP**:

* + Nhấn vào button này → Lấy template import → Thực hiện import dữ liệu NPP vào lưới danh sách
  + File mẫu import: Format tên file mẫu: IMPORT\_PRICE\_DISTRIBUTOR\_DD-MM-YYYY\_hhmmss.xlsx
  + Rule import theo quy tắc chung đã mô tả ở mục Import
  + Templates:

| Mã nhà phân phối (\*) | Tên nhà phân phối |
| --- | --- |
| NPP0103827398 | Nhà phân phối A1 |
| NPP0103827399 | Nhà phân phối A2 |
| NPP0103827400 | Nhà phân phối A3 |

* **Mô tả dữ liệu**

| Trường dữ liệu | Kiểu dữ liệu | Mô tả | Kiểm tra |
| --- | --- | --- | --- |
| Mã Nhà phân phối (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập mã Nhà phân phối muốn thêm vào bảng giá | Mã Nhà phân phối để trống (trống 1 line => bỏ qua), nhập không đúng định dạng (Chữ có dấu tiếng việt, ký tự đặc biệt, khoảng trống - trước - trong- sau mã), không tồn tại, không hoạt động trên hệ thống DMS   * Hiển thị thông báo lỗi    + Dòng thứ @n: Mã Nhà phân phối nhập không đúng định dạng/ không tồn tại/ không hoạt động / bị bỏ trống. Vui lòng kiểm tra lại! |
| Tên Nhà phân phối | Nhập ký tự tự do |  |  |

**Trường hợp import thành công:**

* Nhấn X → Tắt popup và hiển thị danh sách NPP đã import vào màn hình
* Import lần đầu-> Import thành công trên màn hình danh sách
* Lần 2 => Skip đối tượng đã tồn tại ở lần 1.

**Trường hợp import lỗi:**

Hiển thị các dòng lỗi để user điều chỉnh

* Hiển thị tất cả các dòng lỗi và có phân trang, sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi.
* Nếu nhấn "Đóng"  sẽ không thêm bất cứ dữ liệu import nào vào màn hình