|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Tạo mới bảng giá bán áp dụng chiết khấu cho các nhóm khách hàng |
| Document version | RedV1.1.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

## **1/ Lịch sử tài liệu**

| **Version** | **Publish** | **Changed by** | **Mô tả** |
| --- | --- | --- | --- |
| 1.0 | 18/07/2026 | Vu | n/a |
| 1.1 | 22/07/2026 | Vu | Thông tin chiết khấu theo Nhóm khách hàng → Thông tin chiết khấu theo SKU  Ko cho phép CRUD nhóm khách hàng → Cho phép |
| 1.2 | 23/07 | Vu | ẩn info Vùng bán, Khu vực bán, đối tượng áp dụng chỉ apply cho Nhóm Khách hàng  Thêm filter thời gian áp dụng |
| 1.3 | 27/07 | Vu | giữ lại đối tượng áp dụng ( vì còn bảng giá default) cho filter và List |

## **2/ Thông tin chung**

**Tiêu đề** : Tài liệu mô tả màn hình  quản lý giá bán. (Vigo)

**Nội dung thay đổi**: Thêm thông tin chiết khấu và update tên mới Nhóm khách hàng ( nhóm điểm bán cũ) 

|  | Hiện tại | Thay đổi (Vigo) |
| --- | --- | --- |
| **Nhóm điểm bán** | Tên hiện tại là " Nhóm điểm bán" | Đổi tên thành **"Nhóm khách hàng"**  Dữ liệu có 4 loại mặc định bao gồm : Priority, Diamond, Prime, Platinum  (user có thể tạo thêm) |
| **Chiết khấu** | Chưa có thông tin chiết khấu | Thêm thông tin chiết khấu ứng với "SKU" khi tạo bảng giá |

**Đường dẫn :** Dữ liệu nền → Sản phẩm → Bảng giá bán

**3/ Tính năng**

|  | **Tính năng** | **Mã FR** | **Mô tả** |
| --- | --- | --- | --- |
| **1** | **Danh sách bảng giá bán** | **AC\_US\_01** | Nhóm điểm bán → Nhóm khách hàng |
| **2** | **Thêm mới  bảng giá bán** | **AC\_US\_02** | Update nhập thông tin Nhóm khách hàng và thêm % chiết khấu cho SKU |
| **3** | **Chỉnh sửa bảng giá** | **AC\_US\_03** | Rule chỉnh sửa giữ nguyên không thay đổi |
| **4** | **Export bảng giá bán** | **AC\_US\_04** | Thêm hiển thị thông tin chiết khấu và giá sau chiết khấu |

**4/ Mô tả tính năng**

**AC\_US\_01 —  Danh sách bảng giá bán (Vigo)**

**User story** : Là Head Officer tôi muốn xem danh sách bảng giá bán cho NPP (đại lý)

**Điều kiện**: [User có phân quyền xem bảng giá](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)

**Đường dẫn**: Dữ liệu nền → Sản phẩm → Bảng giá bán 

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Search bar | | | | |
| Tìm kiếm | Textbox | Có | Không | Có thể tìm kiếm theo Mã, tên bảng giá  Tìm kiếm gần giống (search like) theo dữ liệu đã nhập.  Placeholder : Theo mã | Tên bảng giá |
| Thời gian áp dụng  (New) | Date picker | Có | Không | Mặc định không có dữ liệu.   * Định dạng hiển thị (Format): Quy định chuẩn định dạng `DD/MM/YYYY->` `DD/MM/YYYY` * Ràng buộc khoảng thời gian :    + Từ ngày phải `<=` Đến ngày   + Cho chọn ngày quá khứ   + Lọc theo Ngày áp dụng của bảng giá .   Placeholder : Chọn thời gian áp dụng |
| Đối tượng áp dụng | Selectbox multiple choice | Có | Không | Mặc định không có dữ liệu.  Cho lọc theo các Điều kiện : Nhóm khách hàng (các điều kiện khác ẩn đi vì vigo ko xài)  Dữ liệu lấy theo lọc đối tượng áp dụng  Placeholder : Chọn đối tượng áp dụng |
| Trạng thái | Selectbox one choice | Có | Không | Trạng thái:   * Gồm các trạng thái {Khởi tạo, Đã hủy, Đã duyệt}. * Mặc định trống <=> chọn tất cả trạng thái   Placeholder : Trạng thái |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách dữ liệu, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các dữ liệu mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách dữ liệu. 2. **Danh sách dữ liệu làm mới:** Sau khi nhấp, danh sách dữ liệu sẽ hiển thị toàn bộ các dữ liệu hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách dữ liệu. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách dữ liệu. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách dữ liệu theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách dữ liệu. 3. **Hiển thị kết quả:** Danh sách dữ liệu sẽ cập nhật và hiển thị các dữ liệu phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách dữ liệu sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| Lưới danh sách |  |  |  |  |
| Mã bảng giá | Datacolumn | Không | Không | Hiển thị mã của bảng giá bán |
| Tên bảng giá | Datacolumn link | Có | Không | Hiển thị tên của bảng giá bán  Click vào tên dữ liệu hiển thị màn hình chi tiết bảng giá bán. Giao diện như màn hình tạo mới và không được chỉnh sửa bất cứ trường thông tin nào. |
| Thời gian áp dụng | Datacolumn | Không | Không | Ngày tháng khi dữ liệu được thêm vào hệ thống. Format: DD-MM-YYYY →  DD-MM-YYYY |
| Trạng thái | Datacolumn | Không | Không | Hiển thị trạng thái của bảng giá bán |
| Ngày tạo | Datacolumn | Không | Không | Ngày tháng khi dữ liệu được thêm vào hệ thống., Format: DD-MM-YYYY HH:MM:SS |
| Người tạo | Datacolumn | Không | Không | Hiển thị mã dữ liệu của người dùng đã tạo ra bản ghi dữ liệu này. |
| Ngày cập nhật | Datacolumn | Không | Không | Ngày tháng của lần cập nhật gần nhất cho thông tin dữ liệu, Format: DD-MM-YYYY HH:MM:SS |
| Người cập nhật | Datacolumn | Không | Không | Hiển thị mã dữ liệu của người dùng đã cập nhật bản ghi dữ liệu này. |
| Đối tượng áp dụng | Datacolumn | Không | Không | Hiển thị đối tượng áp dụng của bảng giá bán |
| Nhóm khách hàng | Datacolumn | Không | Không | Hiển thị Nhóm khách hàng (nhóm điểm bán cũ)  của bảng giá bán |
| Tùy chỉnh | Button | Có | Không | Sẽ được mô tả ở mục 7/ Chỉnh sửa dữ liệu |
| Tạo mới | Button | Có | Không | * Nhấn Thêm mở ra màn hình Thêm mới nhân viên. * Xem mô tả chức năng Thêm mới nhân viên. |
| Export | Button | Có | Không | * Nhấn Export xuất danh sách nhân viên theo file excel * Xem mô tả chức năng export danh sách nhân viên |

### **AC\_US\_02 —  Thêm bảng giá bán (Vigo)**

**User story** : Là Head Officer tôi muốn tạo bảng giá bán cho NPP (đại lý)

**Điều kiện**: [User có phân quyền tạo mới bảng giá](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)

**Đường dẫn**: Dữ liệu nền → Sản phẩm → Bảng giá bán → Tạo mới

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| 1. Thông tin chung | | | | |
|  | | | | |
| Mã bảng giá | Text (100) | Có | Có | Mã phải là duy nhất trong hệ thống, không được phép trùng (Không phân biệt hoa thường. Ví dụ "MASTER\_001" và "master\_001" là trùng nhau). Trường hợp trùng hiển thị thông báo: Mã bảng giá bán đã tồn tại, vui lòng thử lại! Placeholder : Nhập vào Mã bảng giá |
| Tên bảng giá | Text (100) | Có | Có | Placeholder : Nhập vào tên bảng giá Free text nhập tự do |
| Từ ngày | Date picker | Có | Có | Placeholder : Nhập vào từ ngày Chỉ đươc chọn từ hiện tại trở đi |
| Đến ngày | Date picker | Có | Có | Placeholder : Nhập vào từ ngày Chỉ đươc chọn "Từ ngày" trở đi |
| Đóng | Button | Có | không | Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin. Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. Nếu màn hình đang có dữ liệu chưa lưu, hiển thị cảnh báo: "Màn hình đang có dữ liệu, bạn có muốn đóng?"   * + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |
| Tiếp tục | Button | Có | không | * Hệ thống cần kiểm tra tính duy nhất của Mã bảng giá trước khi tiếp tục. * Các trường bắt buộc phải được nhập đầy đủ trước khi chuyển sang bước tiếp theo. |
| 2. Đối tượng áp dụng | | | | |
|  | | | | |
| Điều kiện | Dropdown List | Có | Có | * Mặc định không có dữ liệu. * Người dùng tìm kiếm; chọn 1 theo dropdownlist * Bỏ trống báo lỗi "Tên trường là bắt buộc" * Chọn 1 trong các điều kiện:   + Vùng/khu vực → Hiển thị trường nhập thông tin trường/khu vực **(ẨN)**   + Nhà phân phối → Hiển thị trường nhập thông tin NPP **(ẨN)**   + Kênh bán hàng → Hiển thị trường nhập thông tin kênh bán hàng **(ẨN)**   + Vị tri điểm bán → Hiển thị trường nhập thông tin vị trí điểm bán **(ẨN)**   + Loại điểm bán → Hiển thị trường nhập thông tin loại điểm bán **(ẨN)**   + Hạng điểm bán → Hiển thị trường nhập thông tin hạng điểm bán **(ẨN)**   + Điểm bán → Hiển thị trường nhập thông tin điểm bán **(ẨN)**   + Nhóm khách hàng (Nhóm điểm bán) → → Hiển thị trường nhập thông tin Nhóm khách hàng |
| Nhóm khách hàng | Dropdown List | Có | Có | Trường này chỉ hiển thị khi chọn điều kiện là nhóm khách hàng Cho phép chọn 1 hoặc nhiều dữ liệu bao gồm : ( lấy dữ liệu từ ["Nhóm điểm bán"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525793) cũ )   * Priority * Diamond, * Prime, * Platinum   Bỏ trống báo lỗi "Tên trường là bắt buộc"  Placeholder : Chọn nhóm khách hàng |
| Quay lại | Button | Có | không | Quay lại màn hình "Thông tin chung" |
| Tiếp tục | Button | Có | không | Các trường bắt buộc phải được nhập đầy đủ trước khi chuyển sang bước tiếp theo. |
| 3. Danh sách sản phẩm | | | | |
|  | | | | |
| Tìm kiếm | Textbox | Có | Không | Có thể tìm kiếm theo Mã, tên sản phẩm  Placeholder : Tìm kiếm theo Mã SP/ Tên SP |
| Button Import  (NEW) | Button | Có | Không | Import sản phẩm  * + Nhấn vào button này → Lấy template import → Thực hiện import dữ liệu Sản phẩm vào lưới danh sách   + File mẫu import: Format tên file mẫu: IMPORT\_PRICE\_PRODUCT\_DD-MM-YYYY\_hhmmss.xlsx   + Rule import theo quy tắc chung đã mô tả ở mục Import   + Templates:  | Mã sản phẩm (\*) | Tên sản phẩm | Chiết khấu (%) | | --- | --- | --- | | SP0103827398 | sản phẩm A1 | 35% | | SP0103827399 | sản phẩm A2 | 40% | | SP0103827400 | sản phẩm A3 | 50% |  * **Mô tả dữ liệu**  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Kiểm tra | | --- | --- | --- | --- | | Mã sản phẩm (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập mã sản phẩm muốn thêm vào bảng giá | Mã sản phẩm để trống (trống 1 line => bỏ qua), nhập không đúng định dạng (Chữ có dấu tiếng việt, ký tự đặc biệt, khoảng trống - trước - trong- sau mã), không tồn tại, không hoạt động trên hệ thống DMS   * Hiển thị thông báo lỗi    + Dòng thứ @n: Mã sản phẩm nhập không đúng định dạng/ không tồn tại/ không hoạt động / bị bỏ trống. Vui lòng kiểm tra lại! | | Tên sản phẩm | Nhập ký tự tự do | * Nhập tên sản phẩm muốn thêm vào bảng giá | * Thông tin tên sản phẩm chỉ để user thực hiện tham chiếu trước khi import, khi import chỉ lấy thông tin mã sản phẩm. | | Chiết khấu  (%) | Nhập số 0 → 100  Cho phép số thập phân 2 số | * Nhập chiết khấu cho sản phẩm | Chiết khấu nhập sai định dạng, để trống   * Hiển thị thông báo lỗi    + Dòng thứ @n: Chiết khấu nhập không đúng định dạng/ bị bỏ trống. Vui lòng kiểm tra lại! |   **Trường hợp import thành công:**     * Nhấn X → Tắt popup và hiển thị danh sách Sản phẩm đã import vào màn hình * Import lần đầu-> Import thành công trên màn hình danh sách * Lần 2 => Skip đối tượng đã tồn tại ở lần 1. * Cộng dồn vào lưới danh sánh, ko replace   **Trường hợp import lỗi:**  Hiển thị các dòng lỗi để user điều chỉnh   * Hiển thị tất cả các dòng lỗi và có phân trang, sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi. * Nếu nhấn "Đóng"  sẽ không thêm bất cứ dữ liệu import nào vào màn hình |
| Thêm | Button | Có | Không | Nhấn vào button Thêm sản phẩm Hiển thị UI     * Filter: Trạng thái   + Placeholder: Tìm kiếm theo Mã, tên sản phẩm   + Tooltip: Tìm kiếm theo Mã, tên sản phẩm   + Chọn Tìm kiếm: Hiển thị danh sách sản phẩm **đang hoạt động** dựa vào textsearch, Không nhập gì → hiển thị tất cả danh sách sản phẩm đang hoạt động   + Chọn Làm mới: Refresh màn hình và hiển thị placeholder: "Tìm kiếm; lưới danh sách vẫn giữ nguyên không thay đổi   Danh sách sản phẩm:  Hiển thị tất cả sản phẩm **đang hoạt động** trên hệ thống   * + Mã sản phẩm   + Tên sản phẩm, phân cấp, đơn vị kinh doanh: hiển thị theo mã sản phẩm   + Trạng thái: hiển thị theo trạng thái  của sản phẩm   + Phân trang hiển thị    Check để chọn sản phẩm;  * Check box cho phép chọn các Sản phẩm để insert vào Grid Sản phẩm. * Cho phép check một hoặc nhiều * Cho phép check All, chọ all các trang trên màn hình * Trường hợp tạo mới bảng giá: Không giới hạn sản phẩm được thêm vào, trường hợp chỉnh sửa bảng giá: Cho phép chọn tối đa 200 sản phẩm/1 lần thêm  (Áp dụng cho thêm trên portal và thêm từ file import)   => Sau khi chọn →  hiển thị số mục được chọn và cho phép xóa hàng loạt    Chọn Xóa hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Đồng ý: Xóa tất cả các mục đã chọn; chọn Hủy: Tắt popup và vẫn giữ nguyên trạng thái  -------  ***lưu ý:***   * Khi thao tác trên pop-up Thêm Sản phẩm, thì ngoài danh sách Sản phẩm của bảng giá cũng update theo, và ngược lại   + Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại  * + Nếu xóa trên lưới danh sách thì khi mở popup, filter dữ liệu Sản phẩm đã xóa sẽ thấy uncheck Sản phẩm * Mở Popup lần sau, hiển thị checked đối với các sản phẩm đã chọn trước đó.   *--*  Button "**Đồng ý**":   * Cho phép người dùng insert danh sách Sản phẩm đã chọn vào Grid Danh sách Sản phẩm ngoài màn hình chính và đóng Popup * Khi nhấn đồng ý, kiểm tra trạng thái của của sản phẩm, chỉ được thêm vào sản phẩm đang hoạt động * Trường hợp có sản phẩm ngưng hoạt động, khi nhấn đồng ý sẽ hiển thị thông báo: @Mã sản phẩm - @Tên sản phẩm có trạng thái ngưng hoạt động, không thể thêm vào bảng giá! (Trường hợp có nhiều mã sản phẩm ngưng hoạt động, chỉ thông báo 1 sản phẩm đầu tiên, sau đó user điều chỉnh mới thực hiện hiển thị các thông báo cho các mã SP tiếp theo)   **Lưu ý:**   * Khi đã add Sản phẩm ; Chọn  back về màn hình trước rồi quay lại vẫn hiển thị danh sách đã chọn * Hoặc chọn Tiếp tục => Chọn back về lại vẫn thấy danh sách Sản phẩm đã chọn * Chọn add Thêm thành công; sau đó chọn add thêm nữa => Danh sách đã chọn vẫn hiển thị "đã chọn", muốn bỏ chọn thì uncheck và nhấn Đồng ý |
| Nhập chiết khấu All  (NEW) | Textbox | Có | Không | * Mặc định không có dữ liệu. * Ràng buộc chỉ được nhập số , cho phép số thập phân 2 chữ số ( vd: 12.75% ) * Ràng buộc từ 0 → 100   Thao tác : Người dùng nhập số và nhấn enter → Bulk action lên trường Chiết khấu của tất cả SKU đã thêm bên dưới.  Placeholder : Nhập chiết khấu cho tất cả. |
| Lưới danh sách | | | | |
| Mã sản phẩm | Datacolumn | Không | Không | Hiển thị mã của sản phẩm |
| Tên sản phẩm | Datacolumn | Không | Không | Hiển thị tên của sản phẩm |
| Đơn vị | Datacolumn | Không | Không | Hiển thị đơn vị của sản phẩm |
| Chiết khấu  (NEW) | Textbox | Có | Không | * Mặc định không có dữ liệu. * Ràng buộc chỉ được nhập số , cho phép số thập phân 2 chữ số ( vd: 12.75% ) * Ràng buộc từ 0 → 100   Thao tác : Người dùng nhập số → Hệ thống tính ra Gía sau chiết khấu ở cột bên phải  Placeholder : Nhập chiết khấu |
| Gía sau VAT | Datacolumn | Không | không | Hiển thị giá sau VAT của sp |
| Giá sau chiết khấu  (NEW) | Datacolumn | Không | Không | * Mặc định không có dữ liệu. * Gía sau chiết khấu sẽ được tự tính sau khi phần trăm chiết khấu được nhập |
| Tùy chỉnh | Button (delete) | Có | không | Thao tác: Người dùng chọn xóa 1 dữ liệu đã khai báo → thực hiện xóa sp đã thêm |
| Xóa tất cả sản phẩm | Button | Có | không | Thao tác: Người dùng chọn xóa tất cả dữ liệu đã khai báo → thực hiện xóa tất cả sp đã thêm |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Quay lại | Button | Có | không | Quay lại màn hình "Đối tượng áp dụng" |
| Đóng | Button | Có | không | Tắt màn hình khai báo và không lưu dữ liệu. |
| Lưu | Button | Có | không | Thao tác: Người dùng lưu cấu hình đã tạo/chỉnh sửa  Mô tả:   * + Phải thỏa tất cả trường ràng buộc.   + Có thông báo xác nhận   + Nhấn lưu để hoàn tất khai báo và lưu dữ liệu.   + Và tắt màn hình khai báo.   Trường hợp có sản phẩm ngưng hoạt động, khi nhấn Lưu sẽ hiển thị thông báo: @Mã sản phẩm - @Tên sản phẩm có trạng thái ngưng hoạt động, không thể thêm vào bảng giá! (Trường hợp có nhiều mã sản phẩm ngưng hoạt động, chỉ thông báo 1 sản phẩm đầu tiên, sau đó user điều chỉnh mới thực hiện hiển thị các thông báo cho các mã SP tiếp theo) |

### **AC\_US\_03 —  Chỉnh sửa bảng giá bán**

**User story** : Là Head Officer tôi muốn tùy chỉnh bảng giá bán cho NPP (đại lý)

**Điều kiện**:

* [User có phân quyền Chỉnh sửa bảng giá theo chức năng phân quyền/nhóm quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)
* Chỉ những bảng giá bán đang ở trạng thái "Khởi tạo" mới  hiển thị Edit button và có thể chỉnh sửa

**Đường dẫn**: Dữ liệu nền → Sản phẩm → Bảng giá bán → Chỉnh sửa

* Rule chỉnh sửa giữ nguyên không thay đổi
* Giao diện sẽ thay đổi 3 step giống giao diện tạo mới
* Chi tiết chỉnh sửa xem ở mục 7/ Chỉnh sửa dữ liệu

### **AC\_US\_04 —  Export bảng giá bán**

**User story** : Là Head Officer tôi muốn Export bảng giá bán

**Điều kiện**: User có phân quyền export bảng giá

**Đường dẫn**: Dữ liệu nền → Sản phẩm → Bảng giá bán → Export excel

* Nút "Export Excel" sẽ xuất dữ liệu dựa trên các bộ lọc và tiêu chí tìm kiếm đã áp dụng.
* Template excel như sau: [Danhsachbanggia\_DDMMYYYYHHMMSS.xlsx](https://kb.finviet.com.vn/download/attachments/73138925/Danhsachbanggia_DDMMYYYYHHMMSS.xlsx?version=4&modificationDate=1766048423976&api=v2)
* Format tên file xuất ra: Danhsachbanggia\_DDMMYYYYHHMMSS
* File excel sẽ bao gồm 2 sheet:
  + Sheet Danh sách bảng giá: Chứa thông tin bảng giá, sản phẩm và giá bán
  + Sheet Đối tượng áp dụng: Chứa thông tin bảng giá và đối tượng áp dụng của bảng giá
* File export này sẽ giới hạn 500,000 dòng/1 sheet, trường hợp export quá 500.000 dòng/1 sheet hệ thống sẽ báo lỗi ko export được, user phải tự filter bảng giá ít lại để export
  + Thông báo lỗi như sau: Chỉ export được tối đa 500,000 dòng (Sheet @Tên Sheet bị quá số lượng dòng), vui lòng lọc danh sách bảng giá ít hơn để export!
  + Chỉ cần 1 trong 2 sheet bị quá 500,000 dòng thì sẽ báo lỗi.
  + Ví dụ:
    - Chỉ export được tối đa 500,000 dòng (Sheet Đối tượng áp dụng bị quá số lượng dòng), vui lòng lọc danh sách bảng giá ít hơn để export!
    - Chỉ export được tối đa 500,000 dòng (Sheet Danh sách bảng giá bị quá số lượng dòng), vui lòng lọc danh sách bảng giá ít hơn để export!
    - Chỉ export được tối đa 500,000 dòng (Sheet Danh sách bảng giá, Đối tượng áp dụng bị quá số lượng dòng), vui lòng lọc danh sách bảng giá ít hơn để export!
* Button Export sẽ xuất hiện ở 2 tab Danh sách bảng giá và Bảng giá áp dụng hiện tại.

## **Sheet Danh sách bảng giá**

* Export sẽ nhóm theo Mã bảng giá
* Sắp xếp theo Mã bảng giá có ngày cập nhật mới nhất
* Trong 1 bảng giá, sắp xếp theo Alphabet của Tên sản phẩm

|  |  |
| --- | --- |
| Mã bảng giá | Thông tin bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| Tên bảng giá | Thông tin bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| Áp dụng từ ngày | Thông tin thời gian áp dụng bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| Áp dụng đến ngày | Thông tin thời gian áp dụng bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| Trạng thái bảng giá | Trạng thái của bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| Ngành Hàng | Thông tin cấu trúc cây sản phẩm cấp 1 của Mã sản phẩm Hiển thị tên cấp 1 |
| Nhãn Hàng | Thông tin cấu trúc cây sản phẩm cấp 2 của Mã sản phẩm Hiển thị tên cấp 2 |
| Chủng loại | Thông tin cấu trúc cây sản phẩm cấp 3 của Mã sản phẩm Hiển thị tên cấp 3 |
| Mã sản phẩm | Mã sản phẩm trên bảng giá |
| Tên sản phẩm | Tên sản phẩm trên bảng giá |
| Đơn vị | Đơn vị của sản phẩm trên bảng giá |
| VAT | Thông tin VAT hiện tại của sản phẩm tại thời điểm export bảng giá (Lấy từ master data sản phẩm) |
| Giá trước  VAT (VND) | Thông tin giá sản phẩm trước VAT Format tiền tệ (phần nghìn) |
| Giá sau VAT (VND) | Thông tin giá sản phẩm sau VAT Format tiền tệ (phần nghìn) |
| Chiết khấu (NEW) | Thông tin Chiết khấu sản phẩm (%) |
| Gía sau chiết khấu  (NEW) | Thông tin giá sản phẩm sau chiết khấu Format tiền tệ (phần nghìn) |
| Trạng thái sản phẩm | Trạng thái hiện tại của sản phẩm tại thời điểm export bảng giá (Lấy từ master data sản phẩm) |
| Ngày tạo | Thông tin ngày tạo bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá Format DD-MM-YYYY HH:MM:SS |
| Người tạo | Thông tin tài khoản người dùng tạo bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá Format Mã tài khoản - Tên tài khoản |
| Ngày cập nhật | Thông tin ngày cập nhật bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá Format DD-MM-YYYY HH:MM:SS |
| Người cập nhật | Thông tin tài khoản người dùng cập nhật bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá Format Mã tài khoản - Tên tài khoản |

## **Sheet Đối tượng áp dụng**

* Sắp xếp mã bảng giá của sheet đối tượng áp dụng phải giống với sheet Danh sách bảng giá

|  |  |
| --- | --- |
| Mã bảng giá | Thông tin bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| Tên bảng giá | Thông tin bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| Nhóm khách hàng | Thông tin nhóm khách hàng của bảng giá Ví dụ: Priority, Diamond |
| Mã nhóm khách hàng | Thông tin mã chi tiết của nhóm khách hàng Ví dụ: Prior\_01, HA\_Prior.... |
| Đối tượng | Thông tin đối tượng áp dụng của bảng giá Hiển thị 1 đối tượng áp dụng trên 1 dòng, kèm theo thông tin chi tiết đối tượng áp dụng, sau khi đã liệt kê đủ chi tiết đối tượng áp dụng , mới chuyển sang đối tượng tiếp theo. |
| Mã đối tượng | Thông tin mã chi tiết của đối tượng. Ví dụ: NPP001, NPP002 |
| Tên đối tượng | Thông tin tên chi tiết của đối tượng. Ví dụ: Nhà phân phối 001, Nhà phân phối 002 |

## **5/ Quy tắc lấy giá bán**

Khi hệ thống cần xác định bảng giá áp dụng cho một điểm bán vào một ngày cụ thể, sẽ thực hiện theo các bước:

|  |  |
| --- | --- |
| Bước 1 | Xác định ngày tạo đơn hàng |
| Bước 2 | Lọc các bảng giá có Từ ngày trong Thời gian áp dụng <= Ngày tạo đơn hàng và Đến ngày >= Ngày tạo đơn hàng |
| Bước 3 | * Từ tập bảng giá ở bước 2 * Lấy ra các bảng giá có đối tượng áp dụng khớp với tập dữ liệu của điểm bán (khách hàng).   Trong trường hợp có nhiều hơn 1 bảng giá áp dụng cho Nhóm khách hàng → chọn bảng giá có `"Từ ngày"` lớn nhất nhưng **không vượt quá ngày đơn hàng**. |
| Bước 4 | * Truy xuất tất cả sản phẩm thuộc bảng giá vừa xác định * Mỗi dòng sản phẩm gồm:    + Mã sản phẩm   + Tên sản phẩm   + Giá bán   + Chiết khấu (nếu có) |

## **6/ Tính năng liên quan**

**Nhóm Điểm bán**

* Tại màn hình tính năng nhóm điểm bán → Đổi thành nhóm khách hàng
* Dữ liệu lấy từ màn hình Nhóm khách hàng do người dùng tạo.
* User có quyền thao tác có thể CRUD Nhóm khách hàng

## **7/ Chỉnh sửa dữ liệu**

**Mô tả tổng quan:** Button "Chỉnh sửa dữ liệu" cho phép người dùng truy cập vào chế độ chỉnh sửa của một dữ liệu đã có trong hệ thống. Khi người dùng nhấp vào button này, một màn hình chi tiết sẽ hiển thị, cho phép người dùng chỉnh sửa các thuộc tính và thông tin liên quan đến dữ liệu đó. Chức năng này thường được sử dụng để cập nhật một số thông tin của dữ liệu.

**Điều kiện**:

* [User có phân quyền Chỉnh sửa bảng giá theo chức năng phân quyền/nhóm quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)
* Chỉ những bảng giá bán đang ở trạng thái "Khởi tạo" mới  hiển thị Edit button và có thể chỉnh sửa

  

**Đường dẫn**: Dữ liệu nền → Sản phẩm → Bảng giá bán → Tùy chỉnh

**Chi tiết hoạt động:**

1. **Kích hoạt:** Người dùng nhấp vào button "Chỉnh sửa" trên giao diện danh sách dữ liệu.
2. **Hiển thị màn hình:** Hệ thống sẽ mở ra màn hình Chỉnh sửa dữ liệu chứa toàn bộ thông tin hiện tại của dữ liệu. Màn hình giống như màn hình tạo mới
3. **Chỉnh sửa thông tin:**

* + Người dùng có thể chỉnh sửa tất cả các trường thông tin của dữ liệu ngoại trừ**"Mã nhóm điểm bán"**

1. **Lưu thay đổi:** Sau khi hoàn tất chỉnh sửa, người dùng nhấp vào button "Đồng ý" để cập nhật các thay đổi vào cơ sở dữ liệu.
2. **Xác nhận và phản hồi:** Hệ thống sẽ xác nhận và lưu trữ các thay đổi, sau đó phản hồi lại người dùng bằng cách hiển thị thông báo thành công.

**Yêu cầu hệ thống:**

* Hệ thống phải đảm bảo rằng chỉ những người dùng có quyền mới có thể truy cập và chỉnh sửa thông tin dữ liệu.
* Các trường thông tin bắt buộc cần được kiểm tra trước khi lưu để tránh việc lưu dữ liệu không đầy đủ hoặc sai sót.

**Quy trình nghiệp vụ:**

1. Người dùng tìm kiếm và xác định dữ liệu cần chỉnh sửa từ danh sách.
2. Nhấp vào button "Chỉnh sửa" để mở màn hình chỉnh sửa.
3. Thực hiện các thay đổi cần thiết trên màn hình.
4. Nhấp vào button "Đồng ý" để ghi lại các thay đổi vào hệ thống hoặc nhấn icon "X" để xóa bỏ thao tác chỉnh sửa và đóng màn hình chỉnh sửa.
5. Hệ thống sẽ xác nhận và cập nhật các thay đổi, đồng thời thông báo cho người dùng về kết quả.

### **\*\* Lịch sử cập nhật:**

**Mô tả : Sau khi user thao tác chỉnh sửa dữ liệu thành công, thông tin sẽ được cập nhật ở Lịch sử cập nhật**

**Đường dẫn:** Danh sách bảng giá bán >> Xem chi tiết >> Tab lịch sử

|  |  |  |
| --- | --- | --- |
| **1** | **Lịch sử cập nhật dữ liệu** | Hiển thị tiêu đề màn hình |
| **2** | **Stt** | Hiển thị số thứ tự dòng. |
| **3** | **Ngày cập nhật** | Ngày giờ thao tác, định dạng `dd-MM-yyyy HH:mm:ss`. |
| **4** | **Người cập nhật** | Thông tin tên nhân viên đã thao tác thay đổi dữ liệu |
| **5** | **Trường thông tin** | Danh sách tên field đã thay đổi. |
| **6** | **Nội dung cũ** | Giá trị trước thay đổi, nếu không có thì để rỗng. |
| **7** | **Nội dung mới** | Giá trị sau thay đổi |
| **8** | **Close button** | Đóng modal |