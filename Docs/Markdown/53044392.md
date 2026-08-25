|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0 : Thay đổi hiển thị danh sách NPP |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Tạo kế hoạch làm việc

* Chức năng này giúp người dùng **tạo kế hoạch làm việc của bản thân**, bao gồm **thời gian, nhân sự, địa điểm, thông tin lưu trú, hình ảnh check-in**,... nhằm đảm bảo công việc được hiệu quả.
* Nhấn button Tạo mới ở màn hình chính, hệ thống mở màn hình Tạo mới kế hoạch làm việc như sau

|  | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả & Cách load dữ liệu |
| --- | --- | --- | --- | --- | --- |
| 1 | Button X | Button | Có | Không | Khi nhấn button X, nếu màn hình đã có nhập liệu, [hiển thị cảnh báo trước khi thoát](https://kb.finviet.com.vn/display/DMSNEW/Manager+App) |
| 2 | Loại công việc | Selectbox (onechoice) | Có | Có | * Trường này cho phép người dùng chọn một Loại công việc để thêm cho kế hoạch. * **Mở danh sách:**   + Khi người dùng nhấp vào trường Loại công việc, một danh sách các Loại công việcsẽ được mở ra , dữ liệu lấy từ các loại công việc từ màn hình [[HO] Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415)   + Danh sách hiển thị Tên Loại công việc trong hộp chọn. * **Hiển thị lựa chọn:** Loại công việc đã chọn sẽ hiển thị trong hộp chọn. * **Xóa lựa chọn:** Người dùng có thể chọn lại trong danh sách để bỏ chọn Loại công việc không mong muốn. * Trường hợp bỏ chọn Loại công việc trong hộp chọn thì mặc định hiểu là **chưa chọn Loại công việc nào**. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| 3 | Địa điểm làm việc | Selectbox (onechoice) | Có | Có | * Trường này cho phép người dùng chọn một Địa điểm làm việc để thêm cho kế hoạch. * **Mở danh sách:**   + Khi người dùng nhấp vào trường Địa điểm làm việc, một danh sách các Địa điểm làm việcsẽ được mở ra , dữ liệu lấy từ các địa điểm làm việc từ màn hình [[HO] Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415)   + Danh sách hiển thị Tên Địa điểm làm việc trong hộp chọn. * **Hiển thị lựa chọn:** Địa điểm làm việc đã chọn sẽ hiển thị trong hộp chọn. * **Xóa lựa chọn:** Người dùng có thể chọn lại trong danh sách để bỏ chọn Địa điểm làm việc không mong muốn. * Trường hợp bỏ chọn Địa điểm làm việc trong hộp chọn thì mặc định hiểu là **chưa chọn Địa điểm làm việc nào**. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| 4 | Thêm thông tin vị trí làm việc | Link | Có | Không | Trường hợp người dùng muốn khai báo chi tiết cụ thể địa điểm làm việc, thì chọn vào trường này, hệ thống sẽ thêm các trường như sau:       |  |  | | --- | --- | | Địa chỉ Textarea (500) | User điền đầy đủ địa chỉ chi tiết (số nhà, tên đường)  Nhập text tự do  Tối đa 500 ký tự.  Có thể scroll ngang để xem đầy đủ thông tin địa chỉ | | Tỉnh/Thành Phố Selectbox (onechoice) | Người dùng chọn tỉnh/thành phố từ danh sách để nhập thông tin địa chỉ của địa điểm làm việc. Danh sách Tỉnh/thành phố lấy theo danh sách của địa lý Việt Nam  Khi người dùng chọn một tỉnh/thành phố, các trường "Quận/Huyện" và "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc tỉnh/thành phố đó.  Có thể search Tỉnh/Thành Phố | | Quận/Huyện Selectbox (onechoice) | Người dùng có thể chọn quận/huyện từ danh sách để nhập thông tin địa chỉ của địa điểm làm việc. Danh sách quận/huyện lấy theo danh sách của địa lý Việt Nam Khi người dùng chọn một quận/huyện, trường "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc quận/huyện đó.  Trường "Quận/Huyện" chỉ có dữ liệu sau khi người dùng đã chọn một Tỉnh/thành phố.  Có thể search Quận/Huyện | | Phường/Xã Selectbox (onechoice) | Người dùng có thể chọn phường/xã từ danh sách để nhập thông tin địa chỉ của địa điểm làm việc. Danh sách phường/xã lấy theo danh sách của địa lý Việt Nam Trường "Phường/Xã" chỉ có dữ liệu sau khi người dùng đã chọn một quận/huyện.  Có thể search Phường/Xã | | Địa chỉ Textarea (500) | User điền đầy đủ địa chỉ chi tiết (số nhà, tên đường)  Nhập text tự do  Tối đa 500 ký tự.  Có thể scroll ngang để xem đầy đủ thông tin địa chỉ | | Button X | Nhấn vào button Hiển thị popup xác nhận: "Bạn có chắc chắn muốn xóa thông tin Vị trí làm việc?"   * Nếu chọn Đồng ý:   + Clear toàn bộ dữ liệu   + Đưa UI về trạng thái mặc định  * Nếu chọn Trở lại, đóng popup và không làm gì. |  * Người dùng Thêm thông tin vị trí làm việc, thì tất cả các trường dữ liệu trên đều phải bắt buộc nhập. * Nếu không muốn nhập thì xóa tất cả các trường bên trên <=> Không thêm vị trí làm việc |
| 5 | Mô tả công việc | Textarea (500) | Có | Có | * Người dùng nhập mô tả chi tiết công việc.  * Có thể scroll dọc textarea để xem đầy đủ thông tin mô tả công việc |
| 6 | Ngày làm việc | Datepicker From Date - To Date | Có | Có | * Người dùng chọn ngày bắt đầu của kế hoạch làm việc.  * + Mặc định sẽ là ngày hiện tại khi mở form.   + Khi chọn ngày, hệ thống kiểm tra:     - Ngày bắt đầu >= Ngày hiện tại     - Nếu "Ngày kết thúc" đã được chọn trước đó, kiểm tra ràng buộc (không được nhỏ hơn "Ngày bắt đầu"). * Người dùng chọn ngày kết thúc của kế hoạch làm việc.   + Khi chọn, hệ thống kiểm tra:     - Ngày kết thúc >= Ngày hiện tại     - Ngày kết thúc >= Ngày bắt đầu  * Người dùng chọn "Ngày kết thúc" <"Ngày bắt đầu": Hiển thị cảnh báo: "Ngày kết thúc không được nhỏ hơn Ngày bắt đầu." * Người dùng chọn Ngày bắt đầu hoặc Ngày kết thúc < Ngày hiện tại: Hiển thị cảnh báo:  "Vui lòng chọn thời gian lớn hơn hoặc bằng ngày hiện tại." |
| 7 | Thời gian làm việc | Selectbox (multichoice) | Có | Có | * Trường này cho phép người dùng chọn Thời gian làm việc để thêm cho kế hoạch. * **Mở danh sách:**   + Khi người dùng nhấp vào trường Thời gian làm việc, một danh sách các Thời gian làm việcsẽ được mở ra ,dữ liệu lấy từ các Thời gian làm việc từ màn hình [[HO] Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415)   + Danh sách hiển thị Tên Thời gian làm việc trong hộp chọn. * **Hiển thị lựa chọn:**    + Thời gian làm việc đã chọn sẽ hiển thị trong hộp chọn.   + Các thời gian làm việc cách nhau dấu phẩy * **Xóa lựa chọn:** Người dùng chọn lại trong danh sách để bỏ chọn Thời gian làm việc không mong muốn. * Trường hợp bỏ chọn Thời gian làm việc trong hộp chọn thì mặc định hiểu là **chưa chọn Thời gian làm việc nào**. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| 8 | Danh sách NPP | List | Có | Không | Mô tả ở chức năng Thêm NPP vào kế hoạch làm việc |
| 9 | Nhân viên tham gia | List | Có | Không | Mô tả ở chức năng Thêm nhân viên vào kế hoạch làm việc |
| 10 | Đặt lại thông tin | Button | Có | Không | Nhấn vào button Hiển thị popup xác nhận: "Bạn có chắc chắn muốn đặt lại toàn bộ thông tin không?"   * Nếu chọn Đồng ý:   + Reset tất cả các trường về mặc định.   + Lấy dữ liệu mới nhất cho các trường select chọn thông tin   + Các selectbox sẽ trở về trạng thái chưa chọn hoặc giá trị mặc định.   + Các trường text sẽ bị xóa nội dung.  * Nếu chọn Hủy, đóng popup và không làm gì. |
| 11 | Lưu nháp | Button | Có | Không | Khi nhấn vào, hệ thống sẽ kiểm tra tính hợp lệ của tất cả các trường.   * Nếu thiếu thông tin bắt buộc, hiển thị thông báo lỗi và focus vào trường bị thiếu. * Nếu hợp lệ, hệ thống sẽ lưu kế hoạch làm việc với:   + Ở trạng thái **"Khởi tạo"**.   + Thông tin ngày, giờ tạo kế hoạch= Ngày giờ lưu thành công   + Thông tin người tạo   + Mã kế hoạch làm việc = "WP"+ 10 ký tự số random không trùng. * Ở trạng thái này có thể chỉnh sửa tất cả thông tin của kế hoạch như tạo mới. * Sau khi lưu thành công: * + Hiển thị thông báo “Đã thêm thành công kế hoạch làm việc” * + Người dùng có thể xem chi tiết kế hoạch khi chọn vào từng thẻ kế hoạch làm việc, đã mô tả ở chức năng [thông tin chi tiết kế hoạch](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53043024#id-%5BManager_App%5DDuyệtkếhoạchlàmviệc-ThôngtinchitiếtkếhoạchDetail_Plan).  * Trường hợp lưu không thành công sẽ hiển thị thông báo lỗi: Thêm kế hoạch làm việc đã xảy ra lỗi do @thông tin lỗi, vui lòng thử lại! |
| 12 | Gửi duyệt | Button | Có | Không | Khi nhấn vào, hệ thống sẽ kiểm tra tính hợp lệ của tất cả các trường.   * Nếu thiếu thông tin bắt buộc, hiển thị thông báo lỗi và focus vào trường bị thiếu. * Nếu hợp lệ, hệ thống sẽ lưu kế hoạch làm việc:   + Ở trạng thái **"Chờ duyệt"**.   + Nếu đã có mã kế hoạch (Trường hợp lưu nháp xong vào chỉnh sửa và gửi duyệt)     - Lưu thông tin Ngày cập nhật = Ngày giờ gửi duyệt thành công     - Thông tin người cập nhật = tài khoản đang thực hiện gửi duyệt   + Nếu chưa có mã kế hoạch:     - Thông tin ngày, giờ tạo kế hoạch= Ngày giờ gửi duyệt thành công     - Thông tin người tạo  = tài khoản đang thực hiện gửi duyệt     - Mã kế hoạch làm việc = "WP"+ 10 ký tự số random (Trường hợp không lưu nháp và nhấn Gửi duyệt luôn) * Ở trạng thái này không thể chỉnh sửa bất kỳ thông tin nào của kế hoạch * Sau khi lưu thành công:   + Hiển thị thông báo “Đã thêm thành công kế hoạch làm việc”  * + Người dùng có thể xem chi tiết kế hoạch khi chọn vào từng thẻ kế hoạch làm việc, đã mô tả ở chức năng [thông tin chi tiết kế hoạch](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53043024#id-%5BManager_App%5DDuyệtkếhoạchlàmviệc-ThôngtinchitiếtkếhoạchDetail_Plan). * Trường hợp lưu không thành công sẽ hiển thị thông báo lỗi: Thêm kế hoạch làm việc đã xảy ra lỗi do @thông tin lỗi, vui lòng thử lại! * **Lưu ý:** Trường hợp người tạo có chức vụ = SD - Giám đốc toàn quốc, khi gửi duyệt thì trạng thái của kế hoạch = Đã duyệt. |

## Thêm nhà phân phối tham gia kế hoạch làm việc Add\_Distributor

* Nhấn **Thêm** **NPP** để thêm Nhà phân phối vào kế hoạch hoặc Nhấn button "Import"  để thêm Nhà phân phối
* RedV1.1.0 Hiển thị danh sách NPP theo quy tắc sau, nếu nhân viên đăng nhập có vai trò là:
  + SS: sẽ lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman cấp dưới của SS đang đăng nhập + NPP trên tuyến bán hàng của chính nhân viên đang đăng nhập
  + ASM:
    - B1: Lấy ra danh sách tất cả SS cấp dưới của ASM đang đăng nhập
    - B2: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B1
    - B3: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B2 + NPP trên tuyến bán hàng của SS ở B1
  + RSM: sẽ lấy NPP của tất cả ASM  
    - B1: Lấy ra danh sách tất cả ASM cấp dưới của RSM đang đăng nhập
    - B2: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B1
    - B3: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B2
    - B4: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B3 + NPP trên tuyến bán hàng của SS ở B2
  + SD: sẽ lấy NPP của tất cả RSM
    - B1: Lấy ra danh sách tất cả RSM cấp dưới của SD đang đăng nhập
    - B2: Lấy ra danh sách tất cả ASM cấp dưới của RSM ở B1
    - B3: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B2
    - B4: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B3
    - B5: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B4 + NPP trên tuyến bán hàng của SS ở B3
  + Tất cả nhân viên theo salesforce trên đều phải có trạng thái đang hoạt động, tuyến bán hàng đang hoạt động, NPP đang hoạt động

#### **Nhấn button Thêm NPP:**

* Mặc định mở màn hình rỗng
* Khi chọn Button "Tìm kiếm" - chưa chọn bất kì dữ liệu lọc nào => Hiểu là search tất cả => hiển thị all danh sách trên lưới
* Khi chọn Button "Tìm kiếm" - Đã chọn các tiêu chí lọc => Hiểu là search theo tiêu chí bộ lọc => hiển thị danh sách Nhà phân phối thỏa tiêu chí bộ lọc trên lưới
* Chọn Nhà phân phối
  + B1: Chọn "Thêm"
  + B2: Nhập/ chọn dữ liệu tìm kiếm
  + B3: Xem danh sách Nhà phân phối
  + B4 Chọn Nhà phân phối bằng cách check vào checkbox mỗi line và chọn button "Đồng ý"

**Mô tả:**

|  | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- | --- |
|  | **Thêm Nhà phân phối** | | | | |
| 1 | Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu Nhà phân phối dựa trên danh sách Nhà phân phối. Tìm kiếm theo mã, tên, số điện thoại NPP  **Chi tiết hoạt động:**  Cho phép nhập text Tìm kiếm theo mã, tên, số điện thoại NPP   * Tooltip: Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP * Placeholder: Tìm kiếm theo Mã NPP/ Tên NPP/ SĐT NPP * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các Nhà phân phối có thông tin được nhập trong ô này. |
|  | Tỉnh/Thành Phố | Selectbox (onechoice) |  |  | Trường này cho phép người dùng chọn một Tỉnh/Thành phố để lọc danh sách Nhà phân phối   * Placeholder: Chọn Tỉnh/Thành phố * Người dùng có thể tìm kiếm và chọn một Tỉnh/Thành phố từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Nhà phân phối * **Mở danh sách:** Khi người dùng nhấp vào trường "Tỉnh/Thành phố", hiển thị Danh sách Tỉnh/thành phố lấy theo danh sách của địa lý Việt Nam * **Tìm kiếm và chọn:**    + Người dùng có thể chọn một "Tỉnh/Thành phố" bằng cách nhấp vào một mục trong danh sách.   + Các trường "Quận/Huyện" và "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc tỉnh/thành phố đó. * **Hiển thị lựa chọn:** Tỉnh/Thành phố đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * **Kết quả lọc:**    + Danh sách Nhà phân phối có địa chỉ theo Tỉnh/Thành phố đã chọn sẽ tự động được lọc để hiển thị trên lưới danh sách   + Chỉ hiển thị các NPP có địa chỉ thuộc vùng quản lý của tài khoản nhân viên đang đăng nhập. Trường hợp nhân viên không có vùng quản lý thì lấy vùng của quản lý trực tiếp của nhân viên. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Tỉnh/Thành phố không mong muốn. * Trường hợp bỏ chọn Tỉnh/Thành phố trong hộp chọn thì mặc định hiểu là chọn tất cả các Tỉnh/Thành phố để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. Có thể search nhanh tên Tỉnh/Thành Phố trong selecybox |
|  | Quận/Huyện | Selectbox (onechoice) |  |  | Trường này cho phép người dùng chọn một Quận/Huyện để lọc danh sách Nhà phân phối   * Placeholder: Chọn Quận/Huyện * Người dùng có thể tìm kiếm và chọn một Quận/Huyện từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Nhà phân phối * **Mở danh sách:**    + Khi người dùng nhấp vào trường "Quận/Huyện", hiển thị Danh sách Quận/Huyện lấy theo danh sách của địa lý Việt Nam   + Trường "Quận/Huyện" chỉ có dữ liệu sau khi người dùng đã chọn một Tỉnh/thành phố. * **Tìm kiếm và chọn:**    + Người dùng có thể chọn một "Quận/Huyện" bằng cách nhấp vào một mục trong danh sách.   + Các trường "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc Quận/Huyện đó. * **Hiển thị lựa chọn:** Quận/Huyện đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * **Kết quả lọc:**    + Danh sách Nhà phân phối có địa chỉ theo Quận/Huyện đã chọn sẽ tự động được lọc để hiển thị trên lưới danh sách   + Chỉ hiển thị các NPP có địa chỉ thuộc vùng quản lý của tài khoản nhân viên đang đăng nhập. Trường hợp nhân viên không có vùng quản lý thì lấy vùng của quản lý trực tiếp của nhân viên. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Quận/Huyện không mong muốn. * Trường hợp bỏ chọn Quận/Huyện trong hộp chọn thì mặc định hiểu là chọn tất cả các Quận/Huyện để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. Có thể search nhanh tên Quận/Huyện trong selecybox |
|  | Phường/Xã | Selectbox (onechoice) |  |  | Trường này cho phép người dùng chọn một Phường/Xã để lọc danh sách Nhà phân phối   * Placeholder: Chọn Phường/Xã * Người dùng có thể tìm kiếm và chọn một Phường/Xã từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Nhà phân phối * **Mở danh sách:**    + Khi người dùng nhấp vào trường "Phường/Xã", hiển thị Danh sách Phường/Xã lấy theo danh sách của địa lý Việt Nam   + Trường "Phường/Xã" chỉ có dữ liệu sau khi người dùng đã chọn một Quận/Huyện. * **Tìm kiếm và chọn:** Người dùng có thể chọn một "Phường/Xã" bằng cách nhấp vào một mục trong danh sách. * **Hiển thị lựa chọn:** Phường/Xã đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * **Kết quả lọc:**    + Danh sách Nhà phân phối có địa chỉ theo Phường/Xã đã chọn sẽ tự động được lọc để hiển thị trên lưới danh sách   + Chỉ hiển thị các NPP có địa chỉ thuộc vùng quản lý của tài khoản nhân viên đang đăng nhập. Trường hợp nhân viên không có vùng quản lý thì lấy vùng của quản lý trực tiếp của nhân viên. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Phường/Xã không mong muốn. * Trường hợp bỏ chọn Phường/Xã trong hộp chọn thì mặc định hiểu là chọn tất cả các Phường/Xã để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. Có thể search nhanh tên Phường/Xã trong selecybox |
| 2 | Trực thuộc | select box onechoice | Có | Không | Trường này cho phép người dùng chọn một NPP Trực Thuộc để lọc danh sách Nhà phân phối   * Placeholder: Chọn NPP Trực Thuộc * Người dùng có thể tìm kiếm và chọn một NPP Trực Thuộc từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Nhà phân phối * **Mở danh sách:** Khi người dùng nhấp vào trường "NPP Trực Thuộc", hiển thị Danh sách tất cả NPP đang hoạt động trên hệ thống. * **Tìm kiếm và chọn:** Người dùng có thể chọn một "NPP Trực Thuộc" bằng cách nhấp vào một mục trong danh sách.   + Khi người dùng chọn "NPP Trực Thuộc": Hệ thống sẽ tìm kiếm và hiển thị các Nhà phân phối trực thuộc NPP vừa chọn * **Hiển thị lựa chọn:** NPP Trực Thuộc đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * **Kết quả lọc:**    + Danh sách Nhà phân phối trực thuộc NPP vừa chọn sẽ hiển thị trên lưới danh sách   + Chỉ hiển thị các NPP có địa chỉ thuộc vùng quản lý của tài khoản nhân viên đang đăng nhập. Trường hợp nhân viên không có vùng quản lý thì lấy vùng của quản lý trực tiếp của nhân viên. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn NPP Trực Thuộc không mong muốn. * Trường hợp bỏ chọn NPP Trực Thuộc trong hộp chọn thì mặc định hiểu là chọn tất cả các NPP Trực Thuộc để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. Có thể search nhanh tên NPP Trực Thuộc trong selectbox |
| 4 | Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Nhà phân phối, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách Nhà phân phối mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Nhà phân phối 2. **Danh sách Nhà phân phối làm mới:** Sau khi nhấp, danh sách Nhà phân phối sẽ hiển thị toàn bộ các Nhà phân phối hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Nhà phân phối. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| 5 | Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Nhà phân phối theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Nhà phân phối 3. **Hiển thị kết quả:** Danh sách Nhà phân phối sẽ cập nhật và hiển thị phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Nhà phân phối sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
|  | **Grid Danh sách Nhà phân phối** | | | | |
| 6 | Checkbox | checkbox | Có | Không | * Check box cho phép chọn các Nhà phân phối để insert vào Grid Nhà phân phối. Mở Popup lần sau, khi chọn bộ lọc có Nhà phân phối đã chọn trước, màn hình vẫn hiển thị checkbox đã chọn của Nhà phân phối đó, người dùng có thể bỏ check * Cho phép check một hoặc nhiều * Cho phép check All   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt bằng button xóa  Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa?   * Chọn Đồng ý: Xóa tất cả các mục đã chọn; * chọn Trở lại: Tắt popup và vẫn giữ nguyên trạng thái |
| 7 | Mã Nhà phân phối | Datacolumn have copy | Không | Không | Mã định danh của Nhà phân phối trong hệ thống cũng là thông tin đăng nhập của Nhà phân phối, cho phép copy |
| 8 | Tên Nhà phân phối | Datacolumn | Không | Không | Tên Nhà phân phối hiển thị theo mã Nhà phân phối theo mã Nhà phân phối |
| 10 | SĐT | Datacolumn have copy | Không | Không | Số điện thoại liên hệ của Nhà phân phối, hiển thị theo mã Nhà phân phối có thể copy số điện thoại |
|  | Địa chỉ | Datacolumn | Không | Không | Địa chỉ liên hệ của Nhà phân phối, hiển thị theo mã Nhà phân phối |
| 11 | Tên NPP Trực thuộc | Datacolumn | Không | Không | Tên NPP trực thuộc của NPP, hiển thị theo mã Nhà phân phối |
| 12 | Trạng thái | Datacolumn | Không | Không | Trạng thái của Nhà phân phối |
| 13 | Đồng ý | Button | Có | Không | * Nút "**Đồng ý**" cho phép người dùng insert danh sách Nhà phân phối đã chọn vào màn hình chính và đóng Popup |

#### **Nhấn button "Import Excel"**

* Click button Import excel → Hiển thị popup
* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống

* Hiển thị thông báo:

**Button: "Lấy file mẫu" → File mẫu như sau:**

* Format tên file mẫu: IMPORT\_WORKING\_PLAN\_DISTRIBUTOR\_DD-MM-YYYY

**Templates:**

| Mã Nhà phân phối ( \* ) | Tên Nhà phân phối |
| --- | --- |
| NPP0103827398 | NPP 001 |
| NPP0103827399 | NPP 002 |
| NPP0103827400 | NPP 003 |

**Mô tả dữ liệu**

| Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- |
| Mã Nhà phân phối (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập mã Nhà phân phối muốn thêm vào Kế hoạch làm việc | Mã Nhà phân phối nhập không đúng định dạng (Ký tự đặc biệt; khoảng trắng ở trước-trong-sau mã; chữ tiếng việt có dấu), để trống (nếu để trống nguyên 1 line → bỏ qua; để trống @field → báo mess), không tồn tại trên hệ thống DMS   * Hiển thị thông báo lỗi: Dòng thứ @n: Mã Nhà phân phối nhập không đúng định dạng/ không tồn tại/ không hoạt động/ bị bỏ trống. Vui lòng kiểm tra lại!   Mã Nhà phân phối không thuộc vùng quản lý của tài khoản đang tạo   * Hiển thị thông báo lỗi: Dòng thứ @n: Mã Nhà phân phối không thuộc vùng quản lý. Vui lòng kiểm tra lại!   Mã Nhà phân phối không được trùng trong file import, nếu trùng hiển thị thông báo lỗi: Dòng thứ @n: Mã Nhà phân phối bị trùng lắp. Vui lòng kiểm tra lại! (Chỉ cần hiển thị dòng đầu tiên trùng) |
| Tên Nhà phân phối | Nhập ký tự tự do | * Nhập tên Nhà phân phối muốn thêm vào Kế hoạch làm việc | * Thông tin tên Nhà phân phối chỉ để user thực hiện tham chiếu trước khi import, khi import chỉ lấy thông tin mã Nhà phân phối. |

**Trường hợp import thành công:**

→ Nhấn X → Tắt popup và hiển thị danh sách Nhà phân phối đã import vào màn hình tạo Kế hoạch làm việc

Trường hợp import lỗi:

Hiển thị các dòng lỗi để user điều chỉnh

* Hiển thị tất cả dòng lỗi và có phân trang.  sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi.
* Nếu nhấn X sẽ không thêm bất cứ dữ liệu import nào vào màn hình tạo Kế hoạch làm việc.

## Thêm nhân viên tham gia kế hoạch làm việc Add\_Employee

* Nhấn **Thêm** **nhân viên** để thêm nhân viên vào kế hoạch hoặc Nhấn button "Import" để thêm nhân viên

#### **Nhấn button Thêm nhân viên:**

* Mặc định mở màn hình rỗng
* Khi chọn Button "Tìm kiếm" - chưa chọn bất kì dữ liệu lọc nào => Hiểu là search tất cả => hiển thị all danh sách trên lưới. Chỉ hiển thị các nhân viên thuộc cấp dưới của tài khoản nhân viên đang đăng nhập.
* Khi chọn Button "Tìm kiếm" - Đã chọn các tiêu chí lọc => Hiểu là search theo tiêu chí bộ lọc => hiển thị danh sách nhân viên thỏa tiêu chí bộ lọc trên lưới
* Chọn nhân viên
  + B1: Chọn "Thêm"
  + B2: Nhập/ chọn dữ liệu tìm kiếm
  + B3: Xem danh sách nhân viên
  + B4 Chọn nhân viên bằng cách check vào checkbox mỗi line và chọn button "Đồng ý"

**Mô tả:**

|  | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- | --- |
|  | **Thêm nhân viên** | | | | |
| 1 | Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu nhân viên dựa trên danh sách nhân viên. Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên  **Chi tiết hoạt động:**  Cho phép nhập text Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên   * Tooltip: Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên * Placeholder: Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các nhân viên có thông tin được nhập trong ô này. |
| 2 | Quản lý trực tiếp | select box onechoice | Có | Không | Chọn Quản lý trực tiếp để tìm kiếm nhân viên cấp dưới của quản lý trực tiếp V1.0.1  "Quản lý trực tiếp": dùng để lọc nhân viên dựa trên người quản lý trực tiếp của họ. Khi chọn một quản lý trong danh sách (Danh sách Quản lý trực tiếp load từ màn hình quản lý nhân viên **role SD; RSM; ASM và SS (đang active)**), hệ thống sẽ hiển thị những nhân viên được quản lý bởi người đó.   * Placeholder: Chọn quản lý trực tiếp * Người dùng có thể tìm kiếm và chọn một "Quản lý trực tiếp" từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách nhân viên * **Mở danh sách:**    + Khi người dùng nhấp vào trường "Quản lý trực tiếp", một danh sách các Quản lý trực tiếp sẽ được mở ra.   + Danh sách Quản lý trực tiếp load từ màn hình quản lý nhân viên **role SD; RSM; ASM và SS (đang active)**   + Nếu tài khoản đang login có role = SD → Load Quản lý trực tiếp có role = RSM, ASM, SS   + Nếu tài khoản đang login có role = RSM → Load Quản lý trực tiếp có role = ASM, SS   + Nếu tài khoản đang login có role = ASM→ Load Quản lý trực tiếp có role = SS   + Nếu tài khoản đang login có role = SS → Trường này sẽ trống và hiển thị "Không có dữ liệu" * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm quản lý trực tiếp mong muốn. Sau đó, họ có thể chọn một "Quản lý trực tiếp" bằng cách nhấp vào một mục trong danh sách. * Khi người dùng chọn "Quản lý trực tiếp": Hệ thống sẽ tìm kiếm và hiển thị các nhân viên thuộc Quản lý trực tiếp đã chọn * **Hiển thị lựa chọn:** Quản lý trực tiếp đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * **Kết quả lọc:** Danh sách nhân viên sẽ tự động được lọc để hiển thị những nhân viên thuộc Quản lý trực tiếp đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Quản lý trực tiếp không mong muốn. * Trường hợp bỏ chọn Quản lý trực tiếp trong hộp chọn thì mặc định hiểu là chọn tất cả các Quản lý trực tiếp để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Chỉ load những nhân viên **role SD; RSM; ASM và SS** có trạng thái Active |
| 3 | Chức vụ | selectonechoice | Có | Không | Chọn Chức vụ để tìm kiếm nhân viên của công ty  Trường này cho phép người dùng chọn một Chức vụ để lọc danh sách nhân viên, Danh sách nhân viên theo Chức vụ load từ màn hình quản lý nhân viên được khai báo [[Portal HO][DMS] Quản lý nhân viên DMS và Định nghĩa cây SalesForce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357)   * Placeholder: Chọn Chức vụ * Người dùng có thể tìm kiếm và chọn một Chức vụ từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách nhân viên * **Mở danh sách:** Khi người dùng nhấp vào trường "Chức vụ", hiển thị   + Nhân viên bán hàng   + Giám sát bán hàng   + Quản lý khu vực   + Quản lý vùng   + Giám đốc toàn quốc * **Tìm kiếm và chọn:** Người dùng có thể chọn một "Chức vụ" bằng cách nhấp vào một mục trong danh sách. * Khi người dùng chọn "Chức vụ": Hệ thống sẽ tìm kiếm và hiển thị các nhân viên có chức vụ vừa chọn * **Hiển thị lựa chọn:** Chức vụ đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * **Kết quả lọc:** Danh sách nhân viên có chức vụ đã chọn sẽ tự động được lọc để hiển thị trên lưới danh sách * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Chức vụ không mong muốn. * Trường hợp bỏ chọn Chức vụ trong hộp chọn thì mặc định hiểu là chọn tất cả các Chức vụ để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| 4 | Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Nhân viên, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách Nhân viên mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Nhân viên 2. **Danh sách Nhân viên làm mới:** Sau khi nhấp, danh sách Nhân viên sẽ hiển thị toàn bộ các Nhân viên hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Nhân viên. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| 5 | Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Nhân viên theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Nhân viên 3. **Hiển thị kết quả:** Danh sách Nhân viên sẽ cập nhật và hiển thị phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Nhân viên sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
|  | **Grid Danh sách Nhân viên** | | | | |
| 6 | Checkbox | checkbox | Có | Không | * Check box cho phép chọn các nhân viên để insert vào Grid nhân viên. Mở Popup lần sau, khi chọn bộ lọc có nhân viên đã chọn trước, màn hình vẫn hiển thị checkbox đã chọn của nhân viên đó, người dùng có thể bỏ check * Cho phép check một hoặc nhiều * Cho phép check All   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt bằng button xóa  Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa?   * Chọn Đồng ý: Xóa tất cả các mục đã chọn; * chọn Trở lại: Tắt popup và vẫn giữ nguyên trạng thái |
| 7 | Mã Nhân viên | Datacolumn have copy | Không |  | Mã định danh của nhân viên trong hệ thống cũng là thông tin đăng nhập của nhân viên, cho phép copy |
| 8 | Tên Nhân viên | Datacolumn | Không |  | Tên Nhân viên hiển thị theo mã Nhân viên theo mã nhân viên |
| 9 | **Quản lý trực tiếp** | Datacolumn have copy | Không |  | Load từ màn hình quản lý nhân viên, Field "quản lý trực tiếp" [[Portal HO][DMS] Quản lý nhân viên DMS và Định nghĩa cây SalesForce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357)  Có thể copy tên quản lý trực tiếp |
| 10 | Số điện thoại | Datacolumn have copy | Không |  | Số điện thoại liên hệ của Nhân viên, hiển thị theo mã Nhân viên có thể copy số điện thoại |
| 11 | Chức vụ | Datacolumn | Không |  | Load từ màn hình quản lý nhân viên, Field "Chức vụ" [[Portal HO][DMS] Quản lý nhân viên DMS và Định nghĩa cây SalesForce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357); hiển thị chức vụ dạng thẻ tag |
| 12 | Trạng thái | Datacolumn | Không |  | Trạng thái của nhân viên |
|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 13 | Đồng ý | Button | Có | Không | * Nút "**Đồng ý**" cho phép người dùng insert danh sách nhân viên đã chọn vào màn hình chính và đóng Popup |

#### **Nhấn button "Import Excel"**

* Click button Import excel → Hiển thị popup
* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống

* Hiển thị thông báo:

**Button: "Lấy file mẫu" → File mẫu như sau:**

* Format tên file mẫu: IMPORT\_WORKING\_PLAN\_USER\_DD-MM-YYYY

**Templates:**

| Mã nhân viên ( \* ) | Tên nhân viên |
| --- | --- |
| NV0103827398 | Nguyễn Văn A1 |
| NV0103827399 | Nguyễn Văn A2 |
| NV0103827400 | Nguyễn Văn  A3 |

**Mô tả dữ liệu**

| Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- |
| Mã nhân viên (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập mã nhân viên muốn thêm vào Kế hoạch làm việc | Mã nhân viên nhập không đúng định dạng (Ký tự đặc biệt; khoảng trắng ở trước-trong-sau mã; chữ tiếng việt có dấu), để trống (nếu để trống nguyên 1 line → bỏ qua; để trống @field → báo mess), không tồn tại trên hệ thống DMS   * Hiển thị thông báo lỗi: Dòng thứ @n: Mã nhân viên nhập không đúng định dạng/ không tồn tại/ không hoạt động/ bị bỏ trống. Vui lòng kiểm tra lại!   Mã nhân viên không thuộc cấp dưới của tài khoản đang khởi tạo   * Hiển thị thông báo lỗi: Dòng thứ @n: Mã nhân viên không thuộc salesforce quản lý. Vui lòng kiểm tra lại!   Mã nhân viên không được trùng trong file import, nếu trùng hiển thị thông báo lỗi: Dòng thứ @n: Mã nhân viên bị trùng lắp. Vui lòng kiểm tra lại! (Chỉ cần hiển thị dòng đầu tiên trùng) |
| Tên nhân viên | Nhập ký tự tự do | * Nhập tên nhân viên muốn thêm vào Kế hoạch làm việc | * Thông tin tên nhân viên chỉ để user thực hiện tham chiếu trước khi import, khi import chỉ lấy thông tin mã nhân viên. |

**Trường hợp import thành công:**

→ Nhấn X → Tắt popup và hiển thị danh sách nhân viên đã import vào màn hình tạo Kế hoạch làm việc

Trường hợp import lỗi:

Hiển thị các dòng lỗi để user điều chỉnh

* Hiển thị tất cả dòng lỗi và có phân trang.  sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi.
* Nếu nhấn X sẽ không thêm bất cứ dữ liệu import nào vào màn hình tạo Kế hoạch làm việc.