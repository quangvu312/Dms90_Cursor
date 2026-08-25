|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# MÔ TẢ THAY ĐỔI

Hiện tại: Đối với các selectbox chọn NPP trường hợp chọn nhiều (Hơn 200 NPP) thì user không thể tick thủ công 200 NPP để xem dữ liệu

Cần điều chỉnh: Thay đổi selectbox chọn NPP thành dạng như sau:

* Selectbox chọn NPP sẽ thay đổi thành dạng có button Chọn

* Khi nhấn vào button Chọn sẽ mở ra màn hình Chọn NPP như sau: anchor

* **Danh sách NPP:** Load danh sách NPP tuân theo phân quyền dữ liệu và trực thuộc HO

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Vùng tìm kiếm  Khi mở popup thì clear các filter trên popup, hiện đầy đủ danh sách NPP và danh sách NPP đã chọn. | | | | |
| Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu Nhà phân phối dựa trên danh sách Nhà phân phối. Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP  **Chi tiết hoạt động:**  Cho phép nhập text Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP   * Tooltip: **Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP** * Placeholder: **Mã NPP/ Tên NPP/ SĐT NPP** * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các Nhà phân phối có thông tin được nhập trong ô này (Lọc trên lưới danh sách NPP, trên lưới này có thể có các NPP active/inactive). |
| Vùng | selectbox multichoice (tree) | Có | Không | * Mặc định trống <=> Chọn tất cả các vùng/khu vực * Load tất cả các vùng/khu vực **đang hoạt động và theo phân quyền của user đang login** theo dạng cây phân cấp như sau: * Có thể chọn nhiều vùng/khu vực * Chọn vùng thì mặc định chọn luôn khu vực * Chọn khu vực thì chỉ hiển thị khu vực được chọn * Có thể search theo mã/tên vùng/khu vực để tìm kiếm * Khi chọn vùng/khu vực thì hiển thị dữ liệu dựa trên địa chỉ của NPP mà lọc ra theo vùng/khu vực được chọn |
| Trạng thái | select box onechoice | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc danh sách Nhà phân phối dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và chọn một trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Nhà phân phối. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:   + Hoạt động   + Không hoạt động  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Kết quả lọc:** Danh sách Nhà phân phối sẽ tự động được lọc để hiển thị những Nhà phân phối thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Tỉnh/ thành phố | select box onechoice | Có | Không | **Chức năng:**   * Trường "Tỉnh/Thành Phố" cho phép người dùng lọc Nhà phân phối theo tỉnh hoặc thành phố dựa trên địa chỉ của NPP. * Danh sách tỉnh/Thành phố hiển thị dựa trên danh sách Vùng/khu vực chọn ở trường Vùng   + Trường hợp trường Vùng không chọn dữ liệu thì hiểu là đang chọn tất cả các vùng đang hoạt động * Khi người dùng chọn một tỉnh/thành phố, các trường "Quận/Huyện" và "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc tỉnh/thành phố đó.   **Cách sử dụng:**   1. **Chọn tỉnh/thành phố:** Người dùng có thể chọn tỉnh/thành phố từ danh sách để lọc các Nhà phân phối theo địa chỉ. Danh sách Tỉnh/thành phố lấy theo danh sách của địa lý Việt Nam 2. Hiển thị: Hiển thị trong hộp chọn dưới dạng text, cho phép xóa/ chọn lại 3. **Tự động lọc:** Sau khi chọn, danh sách quận/huyện và phường/xã sẽ cập nhật, và lưới danh sách sẽ hiển thị các Nhà phân phối liên quan   **Lưu ý:**   * Nếu người dùng không chọn Tỉnh/thành phố, lưới danh sách sẽ hiển thị tất cả các Nhà phân phối mà không áp dụng bộ lọc theo địa chỉ đã chọn * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Quận/ huyện | selectonechoice | Có | Không | **Chức năng:**   * Trường "Quận/Huyện" cho phép người dùng lọc Nhà phân phối theo quận hoặc huyện dựa trên địa chỉ của đã chọn * Sau khi chọn Tỉnh/thành phố, trường "Quận/Huyện" sẽ chỉ hiển thị các quận/huyện thuộc Tỉnh/thành phố đó.   **Cách sử dụng:**   1. **Chọn quận/huyện:** Người dùng có thể chọn quận/huyện từ danh sách để lọc các Nhà phân phối theo địa chỉ. Danh sách quận/huyện lấy theo danh sách của địa lý Việt Nam 2. Hiển thị: Hiển thị trong hộp chọn dưới dạng text, cho phép xóa/ chọn lại 3. **Tự động lọc:** Danh sách phường/xã sẽ cập nhật, và lưới danh sách sẽ hiển thị các Nhà phân phối có địa chỉ trong quận/huyện đó.   **Lưu ý:**   * Trường "Quận/Huyện" chỉ có dữ liệu sau khi người dùng đã chọn một Tỉnh/thành phố. |
| Phường/Xã | selectonechoice | Có | Không | **Chức năng:**   * Trường "Phường/Xã" cho phép người dùng lọc Nhà phân phối theo phường hoặc xã dựa trên địa chỉ NPP * Sau khi chọn quận/huyện, trường "Phường/Xã" sẽ chỉ hiển thị các phường/xã thuộc quận/huyện đó.   **Cách sử dụng:**   1. **Chọn phường/xã:** Người dùng có thể chọn phường/xã từ danh sách để lọc các Nhà phân phối theo địa chỉ NPP. Danh sách phường/xã lấy theo danh sách của địa lý Việt Nam 2. Hiển thị: Hiển thị trong hộp chọn dưới dạng text, cho phép xóa/ chọn lại 3. **Kết quả lọc:** lưới danh sách sẽ hiển thị các Nhà phân phối liên quan đến phường/xã đã chọn   **Lưu ý:**   * Trường "Phường/Xã" chỉ có dữ liệu sau khi người dùng đã chọn một quận/huyện. |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Nhà phân phối, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách Nhà phân phối mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Nhà phân phối 2. **Danh sách Nhà phân phối làm mới:** Sau khi nhấp, danh sách Nhà phân phối sẽ hiển thị toàn bộ các Nhà phân phối của công ty hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Nhà phân phối. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Nhà phân phối theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Nhà phân phối của công ty 3. **Hiển thị kết quả:** Danh sách Nhà phân phối sẽ cập nhật và hiển thị phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Nhà phân phối sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Grid Danh sách Nhà phân phối**  Trường hợp chọn lần đầu: Danh sách các NPP chưa chọn chỉ load các danh sách **active**  Trường hợp chọn lần 2 trở đi: Danh sách các NPP đã chọn hiển thị cả **active và inactive.** | | | | |
| Checkbox | checkbox | Có | Không | * Check box cho phép chọn các Nhà phân phối để thêm vào Danh sách Nhà phân phối. * Cho phép chọn nhiều NPP * Cho phép check All, checkbox CheckAll chỉ check trên 1 page   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt    Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Yes: Xóa tất cả các mục đã chọn; chọn No: Tắt popup và vẫn giữ nguyên trạng thái  Icon checkAll trên header hiển thị check khi tồn tại từ 1 check dưới lưới danh sách  -------  ***lưu ý:**Khi thao tác trên pop-up Thêm NPP, thì ngoài danh sách NPP ở màn hình chính cũng update theo, và ngược lại*   * *Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại*  * *Nếu xóa ngoài lưới danh sách thì khi mở popup này, filter dữ liệu, NPP đã xóa sẽ thấy uncheck*  * Mở Popup lần sau, khi chọn bộ lọc có Nhà phân phối đã chọn trước, màn hình vẫn hiển thị checked đối với các NPP đã chọn |
| Mã Nhà phân phối | Datacolumn have copy | Không |  | Mã của Nhà phân phối trong hệ thống cũng là thông tin đăng nhập của Nhà phân phối, cho phép copy |
| Tên Nhà phân phối | Datacolumn | Không |  | Tên Nhà phân phối hiển thị theo mã Nhà phân phối theo mã Nhà phân phối |
| Số điện thoại | Datacolumn | Không |  | Số điện thoại liên hệ của Nhà phân phối, hiển thị theo mã Nhà phân phối |
| Địa chỉ | Datacolumn | Không |  | Hiển thị địa chỉ của nhà phân phối theo mã NPP |
| Trạng thái | Datacolumn | Không |  | * Trạng thái hiện tại của NPP |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Đồng ý** | Button | Có | Không | * Nút "**Đồng ý**" cho phép người dùng thêm danh sách Nhà phân phối đã chọn vào selectbox Nhà Phân Phối * Chỉ cho phép chọn những NPP có trạng thái Hoạt động. |

* Sau khi chọn NPP thì ngoài màn hình chính sẽ hiển thị như sau:
  + Trường hợp ô chọn chỉ chọn 1 NPP: Hiển thị tên NPP

 

* + Trường hợp ô chọn chọn >1 NPP:
    - Đã chọn n NPP: Hiển thị số lượng NPP mà người dùng đã chọn
    - Khi nhấn Chọn → Mở ra lại popup chọn NPP và sort lại các NPP đã chọn lên trên và hiển thị check ở các dòng đó để người dùng xem lại các NPP đã chọn

Lưu ý

Chức năng này chỉ thay đổi cách chọn NPP, các rule chọn 1/chọn nhiều ở tất cả các màn hình vẫn giữ như cũ

# CÁC MÀN HÌNH ÁP DỤNG

Lưu ý

* Popup select NPP sẽ không phụ thuộc vào filter Vùng, Khu vực, Tỉnh/thành, Quận/Huyện bên ngoài màn hình chính
* Filter Vùng, Khu vực, Tỉnh/thành, Quận/Huyện bên ngoài màn hình chính vẫn giữ như hiện tại sử dụng để filter data bên dưới danh sách
* Sau khi user chọn NPP thì data dưới lưới danh sách sẽ filter dựa trên: NPP đã chọn VÀ Filter Vùng, Khu vực, Tỉnh/thành, Quận/Huyện đã chọn (Nếu họ chọn vùng, khu vực và NPP ko thuộc vùng khu vực đó thì khi mình kết hợp report sẽ ko ra data)

| Level 1 | Level 2 | Level 3 | Mô tả điều chỉnh | US phát triển |
| --- | --- | --- | --- | --- |
| Dữ liệu nền | Kinh doanh | Danh sách điểm bán | * Vùng tìm kiếm - Filter NPP * Tạo mới - Chọn NPP * Chỉnh sửa - Chọn NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5041 |
| Quản lý chỉ tiêu | Báo cáo KPI |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Quản lý kho | Duyệt chuyển kho nội bộ NPP |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5452 |
| Quản lý kho | Duyệt kiểm kho NPP |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Quản lý kho | Duyệt NPP trả hàng |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Quản lý kho | Import tồn kho đầu kỳ NPP |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5041 |
| Quản lý kho | Duyệt trả hàng nguyên đơn |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Quản lý kho | Chuyển kho NPP |  | * Vùng tìm kiếm - Filter NPP chuyển * Vùng tìm kiếm - Filter NPP nhận * Tạo mới - Chọn NPP chuyển * Tạo mới - Chọn NPP nhận | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5883 |
| Quản lý kho | Báo cáo | Tồn kho hiện tại NPP | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5041 |
| Quản lý kho | Báo cáo | Nhập xuất tồn NPP | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5041 |
| Quản lý bán hàng | Đặt hàng NPP |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Quản lý bán hàng | Tổng hợp đơn hàng điểm bán |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5041 |
| Báo cáo | Bán hàng | Tổng hợp đơn hàng bán NPP | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5041 |
| Báo cáo | Bán hàng | Doanh thu theo sản phẩm | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Báo cáo | Bán hàng | Doanh thu theo điểm bán | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Báo cáo | Bán hàng | Doanh thu theo NVBH | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Báo cáo | Bán hàng | Đơn trả hàng | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Báo cáo | Bán hàng | NPP đặt hàng | * Vùng tìm kiếm - Filter NPP | Cần thêm filter NPP cho màn hình này trước khi apply cách chọn NPP mới: Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5746  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Báo cáo | Phân tích | Độ phủ sản phẩm | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Quản trị hệ thống | Tài khoản người dùng |  | * Tạo mới/Chỉnh sửa tài khoản người dùng → Chọn NPP chăm sóc | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5877 |
| Quản trị hệ thống | Chốt số kỳ |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Quản trị hệ thống | Mở chốt sổ |  | * Vùng tìm kiếm - Filter NPP | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5546 |
| Quản Lý Tuyến Bán Hàng | Tuyến Bán Hàng | Tuyến thực tế | * Vùng tìm kiếm - Filter NPP |  |