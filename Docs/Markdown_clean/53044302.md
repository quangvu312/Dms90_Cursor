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

# Tổng quan kế hoạch làm việc

## Mô tả màn hình Tổng quan kế hoạch làm việc

* Khi mở màn hình hiển thị mặc định kế hoạch làm việc có trạng thái "Đã duyệt" của tài khoản người dùng đang đăng nhập (Lấy thông tin Tài khoản thị trường).

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm | | | | |
| Nhân viên | Selectbox onechoice | Có | Có | Chọn nhân viên để tìm kiếm kế hoạch làm việc.   * Trường này cho phép người dùng chọn một nhân viên để hiển thị kế hoạch làm việc theo nhân viên đã chọn. * Người dùng có thể tìm kiếm và chọn một nhân viên từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong kế hoạch làm việc. * **Mở danh sách:** Khi người dùng nhấp vào trường **nhân viên**, một danh sách các nhân viên sẽ được mở ra:   + Dữ liệu lấy từ danh sách nhân viên từ [[HO] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) với tất cả các chức vụ   + Chỉ hiển thị danh sách nhân viên có trạng thái = Hoạt động   + Danh sách nhân viên là nhân viên cấp dưới của tài khoản người dùng đang đăng nhập. * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhân viên mong muốn. Sau đó, họ có thể chọn một nhân viên bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Nhân viên đã chọn sẽ hiển thị trong hộp chọn. * **Kết quả lọc** Kế hoạch làm việc sẽ tự động được lọc để hiển thị thông tin kế hoạch của nhân viên đã chọn. * **Xóa lựa chọn:** Người dùng có thể chọn lại nhân viên trong hộp chọn để bỏ chọn nhân viên không mong muốn và chọn lại nhân viên khác. * Khi mở màn hình hiển thị mặc định trong hộp chọn là thông tin Tài khoản thị trường của tài khoản người dùng đang đăng nhập. |
| Loại công việc | Selectbox multichoice | Có | Không | * Trường này cho phép người dùng chọn nhiều Loại công việc cùng lúc để xem Kế hoạch làm việc dựa trên các Loại công việc đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều Loại công việc từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong Kế hoạch làm việc. * **Mở danh sách:** Khi người dùng nhấp vào trường **Loại công việc**, một danh sách các Loại công việc sẽ được mở ra, dữ liệu lấy từ danh sách dữ liệu chung. * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm Loại công việc mong muốn. Sau đó, họ có thể chọn một hoặc nhiều Loại công việc bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Các Loại công việc đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Kế hoạch làm việc sẽ tự động được lọc để hiển thị những Kế hoạch làm việc thuộc các Loại công việc đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Loại công việc không mong muốn. * Trường hợp bỏ chọn toàn bộ các Loại công việc trong hộp chọn thì mặc định hiểu là chọn tất cả Loại công việc để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách tài khoản, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các dữ liệu mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách. 2. **Danh sách dữ liệu làm mới:** Sau khi nhấp, danh sách sẽ hiển thị toàn bộ các dữ liệu hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách. * Khi người dùng đã thiết lập các bộ lọc, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách. 3. **Hiển thị kết quả:** Danh sách sẽ cập nhật và hiển thị các dữ liệu phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| Button Tạo mới | Button | Có | Không | * Nhấn vào button sẽ chuyển đến chức năng Tạo kế hoạch làm việc |
| Màn hình lịch | | | | |
| Tháng | Button | Có | Không | **Tháng:**   * Hiển thị tháng và năm hiện tại * Có thể nhấn button : Để chuyển tới tháng tiếp theo (Tháng hiện tại + 1) * Có thể nhấn  button : Để quay về tháng trước đó (Tháng hiện tại - 1) |
| Lịch | Calendar | Có | Không | * **Hiển thị dạng tháng:**    + Lịch được trình bày theo từng tháng với các tuần xếp theo hàng dọc, các thức xếp theo hàng ngang.   + Các ngày trong tuần được đánh dấu ở hàng đầu: **CN, Thứ 2, Thứ 3,..., Thứ 7** * **Ngày hiện tại:** Ngày hiện tại được làm nổi bật bằng nền màu xanh  * **Tháng liền trước và tháng kế tiếp:** Các ngày thuộc tháng trước (VD: 28-31/07/2024) và tháng sau (01-06/09/2024) được hiển thị bằng màu chữ mờ để phân biệt với các ngày trong tháng chính, nhưng vẫn có thể click vào để xem chi tiết kế hoạch trong ngày hôm đó. * Mặc định: Khi mở màn hình sẽ mặc định tháng hiện tại + auto highlight ngày hiện tại * **Quy tắc hiển thị Lịch**   + **Ngày có kế hoạch làm việc:**      - Mỗi ngày có một số lượng kế hoạch làm việc được highlight trong mỗi ô ngày. Lần lượt theo các màu:     - Hiển thị mặc định 3 kế hoạch làm việc trong ngày, trường hợp số lượng kế hoạch >3 thì sẽ hiển thị dưới dạng +n. Với n là số lượng kế hoạch còn lại chưa được hiển thị trên giao diện.     - Các kế hoạch làm việc sẽ xem kẽ nhau bởi 2 màu vàng và xanh. Bắt đầu từ vàng → xanh ->.....   + **Ngày không có kế hoạch làm việc:**      - Các ngày không có các tag kế hoạch đồng nghĩa không có kế hoạch làm việc nào ở trạng thái Đã duyệt. |

## Chi tiết kế hoạch làm việc từng ngày

* Chọn vào từng ô ngày sẽ hiển thị thông tin chi tiết kế hoạch làm việc của ngày đó
* Trường hợp mới mở màn hình chưa chọn ngày nào mà chọn vào chi tiết sẽ hiển thị kế hoạch của ngày hiện tại
* Trường hợp chọn về tháng trước đó/tháng tiếp theo, user chưa chọn ngày nào mà chọn vào chi tiết sẽ hiển thị kế hoạch của ngày đầu tháng
* + Hiển thị danh sách kế hoạch làm việc trong ngày của nhân viên đang xem với tất cả trạng thái
  + Trường hợp trong ngày chưa có kế hoạch nào sẽ hiển thị: Chưa tạo kế hoạch làm việc
  + Trường hợp trong ngày đã có kế hoạch thì hiển thị thông tin kế hoạch làm việc bao gồm (sắp xếp theo kế hoạch có ngày cập nhật mới nhất để lên trên):
    - Mã công việc
    - Loại công việc
    - Thời gian: Ngày thực hiện (Từ ngày - Đến ngày) và Thời gian thực hiện
    - Trạng thái kế hoạch

  |  |  |  |  |  |  |  |
  | --- | --- | --- | --- | --- | --- | --- |
  | Trạng thái kế hoạch | **Khởi tạo** | **Chờ duyệt** | **Đã duyệt** | | | **Từ chối** |
  | Trạng thái thực hiện kế hoạch | x | x | **Chưa thực hiện** | **Đang thực hiện** | **Kết thúc** | x |

   

  + Nhấn vào thẻ kế hoạch làm việc sẽ xem được [thông tin chi tiết kế hoạch](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53044403#id-%5BHO%5DDuyệtkếhoạchlàmviệc-ThôngtinchitiếtkếhoạchDetail_Plan).

  | Trạng thái | Mô tả |
  | --- | --- |
  | Khởi tạo | + Trạng thái mới tạo, chưa gửi duyệt. + Ở trạng thái Khởi tạo, nếu người tạo kế hoạch làm việc = tài khoản người dùng đang đăng nhập   - Sẽ có button **Xóa**: Sử dụng để xóa kế hoạch làm việc. Khi nhấn button này sẽ hiển thị cảnh báo: Bạn có muốn xóa kế hoạch làm việc này?     * Đồng ý: Xóa kế hoạch làm việc     * Trở lại: Đóng popup up cảnh báo và trở lại.   - Sẽ có button **Tiếp tục tạo**: Nhấn button này sẽ điều hướng đến màn hình [HO] Tạo kế hoạch làm việc để người dùng tiếp tục tạo kế hoạch làm việc + Ở trạng thái này, nếu nếu người tạo kế hoạch làm việc  khác tài khoản người dùng đang đăng nhập, thì sẽ không hiển thị 2 button trên. |
  | Chờ duyệt | + Trạng thái chờ duyệt kế hoạch làm việc |
  | Đã duyệt | + Chưa thực hiện kế hoạch:   - Trạng thái kế hoạch làm việc đã được duyệt và chưa có bất cứ chi tiết thực hiện nào. + Đang thực hiện kế hoạch:   - Trạng thái kế hoạch làm việc đã được duyệt và có ít nhất 1 chi tiết thực hiện.   - Chờ duyệt x/y: Hiển thị số chi tiết thực hiện chưa duyệt/Tổng số chi tiết thực hiện + Kết thúc kế hoạch:   - Kế hoạch có Ngày hiện tại > Ngày kết thúc làm việc trong kế hoạch   - Chờ duyệt x/y: Hiển thị số chi tiết thực hiện chưa duyệt/Tổng số chi tiết thực hiện Nhấn vào chức năng "Xem tiến độ" ở thẻ có trạng thái Đã duyệt sẽ hiển thị Thông tin tiến độ thực hiện  Button "Xem tiến độ" sẽ luôn luôn hiển thị dù cho kế hoạch làm việc của tài khoản đang đăng nhập hay đang xem của nhân viên cấp dưới.   Button này sẽ luôn luôn hiển thị dù cho kế hoạch làm việc chưa đến ngày/đã đến ngày/đã kết thúc ngày thực hiện công việc |
  | Từ chối | + Trạng thái kế hoạch làm việc đã bị từ chối duyệt. + Ở trạng thái Từ chối sẽ có: Nội dung Lý do từ chối duyệt và thời gian từ chối duyệt (HH:MM DD/MM/YYYY) |

# Export kế hoạch làm việc của nhân viên theo tháng

**Chức năng:**

* Nút "Export Excel" cho phép người dùng xuất dữ liệu của Kế hoạch làm việc của nhân viên ra một tập tin Excel.
* Nút này giúp người dùng lưu trữ và phân tích dữ liệu Kế hoạch làm việc ngoài ứng dụng, hoặc chia sẻ với các bên liên quan.
* Phân quyền: có yêu cầu phân quyền mới thấy được button này.

**Cách sử dụng:**

1. **Thiết lập dữ liệu:** 
   1. Khi nhấn nút export excel, hệ thống hiển thị các trường lựa chọn như sau:

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Nhân viên | Selectbox multichoice | Có | Có | Chọn nhân viên để export kế hoạch làm việc.   * Trường này cho phép người dùng chọn nhiều nhân viên để export kế hoạch làm việc theo nhân viên đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều nhân viên từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong kế hoạch làm việc. * **Mở danh sách:** Khi người dùng nhấp vào trường **nhân viên**, một danh sách các nhân viên sẽ được mở ra:   + Dữ liệu lấy từ danh sách nhân viên từ [[HO] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) với tất cả các chức vụ   + Chỉ hiển thị danh sách nhân viên có trạng thái = Hoạt động   + Danh sách nhân viên là nhân viên cấp dưới của tài khoản người dùng đang đăng nhập. * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhân viên mong muốn. Sau đó, họ có thể chọn một nhân viên bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Nhân viên đã chọn sẽ hiển thị trong hộp chọn. * **Xóa lựa chọn:** Người dùng có thể chọn lại nhân viên trong hộp chọn để bỏ chọn nhân viên không mong muốn. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Chỉ được chọn tối đa 10 nhân viên. |
| Năm - Tháng | Selectbox onechoice | Có | Có | Chọn năm - tháng để export kế hoạch làm việc     * Mặc định hiện thị năm hiện tại * Mặc định chọn tháng hiện tại |
| Đồng ý | Button | Có | Không | Khi người dùng nhấp vào nút "Đồng ý", hệ thống sẽ tạo và tải về một file zip chức nhiều tập tin Excel chứa dữ liệu của Kế hoạch làm việc theo tháng của tất cả nhân viên được chọn  Format file exel: EXPORT\_WORKINGPLAN\_MANV\_TENNV\_MMYYYY |

* Template excel như sau:
* Format tên file excel: EXPORT\_WORKINGPLAN\_MANV\_TENNV\_MMYYYY\_DDMMYYYYhhmmss

|  | Chức năng | Mô tả |
| --- | --- | --- |
| 1 | Tháng | Thông tin tháng của kế hoạch làm việc đã chọn. |
| 2 | Năm | Thông tin năm của kế hoạch làm việc đã chọn. |
| 3 | Mã nhân viên | Thông tin nhân viên trên từng file excel |
| 4 | Họ và tên | Thông tin nhân viên trên từng file excel |
| 5 | Chức vụ | Thông tin nhân viên trên từng file excel |
| 6 | Khu vực quản lý | * Thông tin Tên vùng, khu vực của nhân viên * Trường hợp nhân viên không có cài đặt vùng thì lấy vùng của quản lý trực tiếp của nhân viên * Trường hợp có nhiều vùng thì mỗi vùng cách nhau bằng dấu phẩy * Sẽ hiển thị theo kiểu:   + Vùng 1, khu vực 1,..., Vùng 2, khu vực 2,.... |
| 7 | Tuần | Hiển thị số lượng tuần sao cho đủ tháng   * Tuần đầu tiên sẽ chứa ngày đầu tiên trong tháng theo thứ, trường hợp các thứ trống sẽ lấy các ngày của tháng trước * Tuần cuối cùng sẽ chứa ngày cuối cùng trong tháng theo thứ, trường hợp các thứ trống sẽ lấy các ngày của tháng sau |
| 8 | Thời gian làm việc | * Hiển thị tất cả thời gian làm việc từ Danh sách dữ liệu chung * Mỗi thời gian làm việc sẽ có thông tin   + Loại công việc   + Địa điểm làm việc   + Tỉnh/Thành Phố |
| 9 | Thứ | * Hiển thị các thứ trong tuần từ Thứ 2...Chủ nhật * Các ngày trong tháng sẽ hiển thị theo Thứ * Mỗi thứ làm việc sẽ bao gồm thông tin:   + Loại công việc:     - Trong kế hoạch làm việc     - Trường hợp có nhiều loại công việc, sẽ cách nhau bằng dấu ","   + Địa điểm làm việc:     - Trong kế hoạch làm việc     - Trường hợp có nhiều địa điểm làm việc, sẽ cách nhau bằng dấu ","   + Tỉnh/Thành Phố:     - Trong chi tiết địa điểm trong kế hoạch làm việc     - Trường hợp có nhiều Tỉnh/Thành Phố làm việc, sẽ cách nhau bằng dấu ,   + Hiển thị sort theo thứ tự Loại công việc → Địa điểm làm việc → Tỉnh/Thành Phố |

# Import kế hoạch làm việc

* **Chức năng**: Cho phép người dùng tải lên file dữ liệu để tạo mới hoặc cập nhật thông tin Kế hoạch làm việc hàng loạt.
* **Định dạng tệp hỗ trợ**: Chấp nhận các tệp định dạng **Excel (XLS/XLSX)** để tiện lợi cho việc nhập liệu hàng loạt.
* Template Import: 
  + Template import bổ sung thông tin Mã thời
* **Nhấn vào button Import**

  + Người dùng chọn button Import và tải lên file dữ liệu từ máy tính.
  + Hệ thống sẽ xác thực định dạng file và kiểm tra từng dòng trong file dữ liệu với các ràng buộc và yêu cầu của từng trường dữ liệu
* **Rule chung cho trường hợp cập nhật import**: Nếu cập nhật không nhập dữ liệu vào các ô không bắt buộc thì sẽ hiểu là không cập nhật thông tin và giữ nguyên dữ liệu cũ.

|  | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| 1 | Mã kế hoạch làm việc | Text (12) | Có | Không | * Mã định danh duy nhất của Kế hoạch làm việc trong hệ thống. * Nếu "Mã Kế hoạch làm việc" có nhập liệu, các dữ liệu nhập vào sẽ hiểu là cập nhật thông tin của Kế hoạch làm việc hiện có.   + Kiểm tra trường hợp 1:  **Mã kế hoạch làm việc** nhập không đúng định dạng (WP+10 số tự nhiên) hoặc không tồn tại: Hiển thị thông báo lỗi: Mã kế hoạch làm việc dòng n nhập không đúng định dạng hoặc không tồn tại, vui lòng kiểm tra lại!   + Kiểm tra trường hợp 2: Mã Kế hoạch làm việc xuất hiện nhiều dòng trên file excel, hiện thị thông báo tại dòng đầu tiên xuất hiện mã Kế hoạch làm việc: "Mã Kế hoạch làm việc tại dòng n có xuất hiện tại dòng n1, n2, n3,.... , mã Kế hoạch làm việc không được trùng trong file import, vui lòng kiểm tra lại!"     - Ví dụ: Mã Kế hoạch làm việc tại dòng 2 có xuất hiện tại dòng 7, 15, 16, mã Kế hoạch làm việc phải không được trùng trong file import, vui lòng kiểm tra lại!     - Mã Kế hoạch làm việc bị trùng ở 2, 7, 15, 16 thì chỉ cần hiện thông báo ở dòng số 2.   + Kiểm tra trường hợp 3: Mã kế hoạch làm việc hiện tại có trạng thái khác "Chờ duyệt", "Khởi tạo". Hiển thị thông báo lỗi: Mã kế hoạch làm việc dòng n đã được xét duyệt, vui lòng kiểm tra lại!   + Kiểm tra trường hợp 4: Mã kế hoạch làm việc có trạng thái Khởi tạo, nhưng hiện tại kế hoạch có trạng thái "Chờ duyệt". Hiển thị thông báo lỗi: Mã kế hoạch làm việc dòng n đang được xét duyệt, vui lòng kiểm tra lại! * Nếu "Mã Kế hoạch làm việc" không nhập liệu, hệ thống không kiểm tra và sẽ tạo mới Kế hoạch làm việc với thông tin đã nhập, 1 dòng là 1 kế hoạch làm việc |
| 2 | Loại công việc (\*) | Dropdown one choice | Có | Có | Loại công việc của người dùng  Hiển thị danh sách Loại công việc  trong dropdown để người dùng chọn, dữ liệu lấy ở Dữ liệu chung  Chỉ chọn 1 loại công việc   * Kiểm tra trường hợp 1:  **Loại công việc** để trống, nhập không đúng định dạng: Hiển thị thông báo lỗi: **Loại công việc** dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2: **Loại công việc** không tồn tại trên hệ thống DMS: Hiển thị thông báo lỗi **Loại công việc** dòng n không tồn tại, vui lòng kiểm tra lại! |
| 3 | Địa điểm làm việc (\*) | Dropdown one choice | Có | Có | Địa điểm làm việc của người dùng  Hiển thị danh sách Địa điểm làm việc  trong dropdown để người dùng chọn, dữ liệu lấy ở Dữ liệu chung  Chỉ chọn 1 Địa điểm làm việc   * Kiểm tra trường hợp 1:  **Địa điểm làm việc** để trống, nhập không đúng định dạng: Hiển thị thông báo lỗi: **Địa điểm làm việc** dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2: **Địa điểm làm việc** không tồn tại trên hệ thống DMS: Hiển thị thông báo lỗi **Địa điểm làm việc** dòng n không tồn tại, vui lòng kiểm tra lại! |
| 4 | Tỉnh/Thành phố | Dropdown one choice | Có | Không | Người dùng chọn tỉnh/thành phố từ danh sách để nhập thông tin địa chỉ của Kế hoạch làm việc. Danh sách Tỉnh/thành phố lấy theo danh sách của địa lý Việt Nam  Khi người dùng chọn một tỉnh/thành phố, các trường "Quận/Huyện" và "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc tỉnh/thành phố đó.   * Kiểm tra trường hợp nếu có nhập tỉnh/thành phố:  tỉnh/thành phố nhập không đúng dữ liệu trong dropdown: Hiển thị thông báo lỗi: tỉnh/thành phố dòng n nhập không đúng dữ liệu, vui lòng kiểm tra lại! * Trường hợp không nhập tỉnh/thành phố thì không cần kiểm tra. \ * Nhưng nếu có thông tin bất kỳ 1 cột nào trong 4 cột Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Địa chỉ cụ thể thì phải nhập đầy đủ 4 trường: Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Địa chỉ cụ thể |
| 5 | Quận/Huyện | Dropdown one choice | Có | Không | Người dùng có thể chọn quận/huyện từ danh sách để nhập thông tin địa chỉ của Kế hoạch làm việc. Danh sách quận/huyện lấy theo danh sách của địa lý Việt Nam Khi người dùng chọn một quận/huyện, trường "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc quận/huyện đó.  Trường "Quận/Huyện" chỉ có dữ liệu sau khi người dùng đã chọn một Tỉnh/thành phố.   * Kiểm tra trường hợp nếu có nhập Quận/Huyện: Quận/Huyện nhập không đúng dữ liệu trong dropdown: Hiển thị thông báo lỗi: Quận/Huyện dòng n nhập không đúng dữ liệu, vui lòng kiểm tra lại! * Trường hợp không nhập Tỉnh/Thành Phố mà nhập Quận/Huyện: Hiển thị thông báo lỗi: Quận/Huyện dòng n chưa có Tỉnh/Thành phố, vui lòng kiểm tra lại! * Trường hợp không nhập Quận/Huyện thì không cần kiểm tra. * Nhưng nếu có thông tin bất kỳ 1 cột nào trong 4 cột Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Địa chỉ cụ thể thì phải nhập đầy đủ 4 trường: Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Địa chỉ cụ thể |
| 6 | Phường/Xã | Dropdown one choice | Có | Không | Người dùng có thể chọn phường/xã từ danh sách để nhập thông tin địa chỉ của Kế hoạch làm việc. Danh sách phường/xã lấy theo danh sách của địa lý Việt Nam Trường "Phường/Xã" chỉ có dữ liệu sau khi người dùng đã chọn một quận/huyện.   * Kiểm tra trường hợp nếu có nhập Phường/Xã: Phường/Xã nhập không đúng dữ liệu trong dropdown: Hiển thị thông báo lỗi: Phường/Xã dòng n nhập không đúng dữ liệu, vui lòng kiểm tra lại! * Trường hợp không nhập Tỉnh/Thành Phố, Quận/Huyện mà nhập Phường/Xã: Hiển thị thông báo lỗi: Phường/Xã dòng n chưa có Tỉnh/Thành phố, Quận/Huyện, vui lòng kiểm tra lại! * Trường hợp không nhập Phường/Xã thì không cần kiểm tra. * Nhưng nếu có thông tin bất kỳ 1 cột nào trong 4 cột Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Địa chỉ cụ thể thì phải nhập đầy đủ 4 trường: Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Địa chỉ cụ thể |
| 7 | Địa chỉ cụ thể | Text (500) | Có | Không | Địa chỉ chi tiết kế hoạch làm việc (số nhà, đường, tổ,...) nếu có.   * Kiểm tra trường hợp:  **Địa chỉ cụ thể** nhập quá số lượng ký tự: Hiển thị thông báo lỗi: **Địa chỉ cụ thể**dòng n nhập quá số lượng ký tự (1000/500), vui lòng kiểm tra lại! * Nhưng nếu có thông tin bất kỳ 1 cột nào trong 4 cột Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Địa chỉ cụ thể thì phải nhập đầy đủ 4 trường: Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Địa chỉ cụ thể |
| 8 | Mô tả công việc (\*) | Text (500) | Có | Có | * Người dùng nhập mô tả chi tiết công việc.  * Kiểm tra trường hợp:  **Mô tả công việc** nhập quá số lượng ký tự: Hiển thị thông báo lỗi: **Mô tả công việc**dòng n nhập quá số lượng ký tự (1000/500), vui lòng kiểm tra lại! |
| 9 | Ngày làm việc (Ngày bắt đầu) (\*) | Date | Có | Có | * Người dùng nhập ngày bắt đầu của kế hoạch làm việc.  * + Kiểm tra trường hợp: Ngày bắt đầu >= Ngày hiện tại. Không đúng, hiển thị thông báo lỗi: Ngày làm việc (Ngày bắt đầu)dòng n phải >= Ngày hiện tại, vui lòng kiểm tra lại! |
| 10 | Ngày làm việc (Ngày kết thúc) (\*) | Date | Có | Có | * Người dùng chọn ngày kết thúc của kế hoạch làm việc.   + Kiểm tra trường hợp 1: Ngày kết thúc>= Ngày hiện tại. Không đúng, hiển thị thông báo lỗi: Ngày làm việc (Ngày kết thúc)dòng n phải >= Ngày hiện tại, vui lòng kiểm tra lại!   + Kiểm tra trường hợp 2: Ngày kết thúc >= Ngày bắt đầu. Không đúng, hiển thị thông báo lỗi: Ngày làm việc (Ngày kết thúc)dòng n phải >= Ngày làm việc (Ngày bắt đầu), vui lòng kiểm tra lại! |
| 11 | Thời gian làm việc (\*) | Text | Có | Có | Thời gian làm việc của người dùng, nhập mã thời gian làm việc, mỗi mã cách nhau bằng dấu ","   * Kiểm tra trường hợp 1:  **Thời gian làm việc** để trống, nhập không đúng định dạng: Hiển thị thông báo lỗi: **Thời gian làm việc** dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2: **Thời gian làm việc** không tồn tại trên hệ thống DMS: Hiển thị thông báo lỗi **Thời gian làm việc** dòng n không tồn tại, vui lòng kiểm tra lại! |
| 12 | Danh sách nhân viên tham gia | Text | Có | Không | Mã Nhân viên tham gia của người dùng. Nhập nhiều mã Nhân viên tham gia cách nhau bằng dấu phẩy (ví dụ: "NV001,NV0022").   * Kiểm tra trường hợp 1: **Nhân viên tham gia**không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi: **Nhân viên tham gia**dòng n không tồn tại hoặc không hoạt động, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2: Mã nhân viên không thuộc cấp dưới của tài khoản đang khởi tạo. Hiển thị thông báo lỗi: **Nhân viên tham gia**dòng n không thuộc salesforce quản lý, vui lòng kiểm tra lại! |
| 13 | Danh sách NPP làm việc | Text | Có | Không | Mã của các nhà phân phối làm việc. Nhập nhiều mã cách nhau bằng dấu phẩy (ví dụ: "NPP1,NPP2").   * Kiểm tra trường hợp 1: **Nhà phân phối**không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi **Nhà phân phối**dòng n không tồn tại hoặc không hoạt động, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2: **Nhà phân phối** không thuộc vùng quản lý của tài khoản đang tạo: Hiển thị thông báo lỗi: **Nhà phân phối**dòng n không thuộc vùng, khu vực đã khai báo, vui lòng kiểm tra lại! |
| 14 | Trạng thái (\*) | Dropdown one choice | Có | Có | Trạng thái của kế hoạch làm việc, chọn từ danh sách giá trị có sẵn   * Khởi tạo * Chờ duyệt   Kiểm tra trường hợp 1: Trạng tháinhập không đúng định dạng hoặc bị bỏ trống: Hiển thị thông báo lỗi: Trạng thái dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại! |
| 15 | Lưu thông tin |  |  |  | * Nếu "Mã Kế hoạch làm việc" có nhập liệu → Update thông tin kế hoạch làm việc, các trường hợp có thể xảy ra:   + Giữ nguyên trạng thái, chỉ cập nhật thông tin   + Chuyển trạng thái Khởi tạo → Chờ duyệt * Nếu "Mã Kế hoạch làm việc" không nhập liệu → Tạo mới Kế hoạch làm việc với thông tin đã nhập, 1 dòng là 1 kế hoạch làm việc |

**Trường hợp import thành công:**

Trường hợp import lỗi:

Hiển thị các dòng lỗi để user điều chỉnh

* Hiển thị tất cả dòng lỗi và có phân trang.  sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi.
* Nếu nhấn X sẽ không thêm bất cứ dữ liệu import nào vào màn hình tạo Kế hoạch làm việc.

# Tiến độ thực hiện công việc Working\_Progress

Chọn chức năng **Xem tiến độ** ở các thẻ kế hoạch làm việc sẽ mở màn hình Tiến độ thực hiện công việc như sau:

| Chức năng | Mô tả |
| --- | --- |
| Thông tin kế hoạch làm việc | Click vào sẽ hiển thị [thông tin chi tiết kế hoạch](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53044403#id-%5BHO%5DDuyệtkếhoạchlàmviệc-ThôngtinchitiếtkếhoạchDetail_Plan). |
| Trạng thái | Trạng thái của thực hiện công việc   | Trạng thái |  | | --- | --- | | Chưa thực hiện | * Trạng thái kế hoạch làm việc đã được duyệt và chưa có bất cứ chi tiết thực hiện nào. | | Đang thực hiện | * Trạng thái kế hoạch làm việc đã được duyệt và có ít nhất 1 chi tiết thực hiện | | Kết thúc | * Kế hoạch có Ngày hiện tại > Ngày kết thúc của kế hoạch làm việc * Ở trạng thái này, Button Ghi nhận chi tiết thực hiện sẽ không hiển thị | |
| Loại công việc | Loại công việc trên kế hoạch làm việc |
| Thời gian làm việc | Ngày làm việc, thời gian làm việc trên kế hoạch làm việc |
| Thực hiện bởi | Thông tin nhân viên thực hiện kế hoạch:   * Tên nhân viên * Mã chức vụ |
| Tiến độ thực hiện | * Tất cả:   + Hiển thị tất cả các ngày làm việc trong khoảng thời gian của kế hoạch làm việc từ ngày bắt đầu kế hoạch → ngày kết thúc kế hoạch.     - VD kế hoạch từ ngày 1/1 → 3/1, thì hiển thị đủ 3 ngày, 1/1, 2/1, 3/1     - Trường hợp Ngày bắt đầu kế hoạch > Ngày hiện tại → Hiển thị "Chưa đến thời gian thực hiện" và không hiển thị ngày nào     - Trường hợp Ngày bắt đầu kế hoạch <= Ngày hiện tại thì mới hiển thị danh sách các ngày trong kế hoạch:       * Ngày nào có chi tiết thực hiện thì hiển thị chi tiết thực hiện       * Ngày nào chưa có chi tiết thực hiện sẽ hiển thị "Không có chi tiết thực hiện"   + Hiển thị tất cả chi tiết thực hiện công việc mà nhân viên đã ghi nhận cho kế hoạch, được ghi nhận ở chức năng [Manager\_App] Thực hiện công việc   + Tiến độ thực hiện sẽ được gom nhóm theo từng ngày. Sắp xếp theo ngày gần nhất để lên trên (Format ngày: DD/MM/YYYY)   + Trường hợp 1 ngày có nhiều chi tiết thực hiện thì line màu cam sẽ kéo dài để đánh dấu các chi tiết thực hiện của cùng 1 ngày.   + Trong 1 ngày các chi tiết thực hiện sắp xếp theo ngày tạo mới nhất để lên trên   + Chi tiết thực hiện theo trạng thái:      | Trạng thái | Hình ảnh | Mô tả | | --- | --- | --- | | Chờ duyệt |  | * Trường hợp nhân viên tạo Tiến độ thực hiện khác tài khoản nhân viên đang đăng nhập **thì sẽ hiển thị** 2 chức năng Duyệt và Từ chối. * Trường hợp nhân viên tạo Tiến độ thực hiện = tài khoản nhân viên đang đăng nhập **thì sẽ ẩn** 2 chức năng Duyệt và Từ chối.   **Thông tin chi tiết thực hiện:**   * Mã chi tiết thực hiện * Thời gian tạo chi tiết thực hiện: HH:MM DD/MM/YYYY * Checkbox: Check vào để duyệt nhiều chi tiết thực hiện * Địa điểm thực hiện * Hình ảnh: Tổng số hình ảnh đã chụp khi ghi nhận chi tiết thực hiện * Nhà phân phối: Tổng số NPP làm việc khi ghi nhận chi tiết thực hiện (Nếu có) * Nhân viên: Tổng số nhân viên tham gia khi ghi nhận chi tiết thực hiện (nếu có) * Lưu trú: Tổng thời gian lưu trú  (nếu có) * Trạng thái: Trạng thái của chi tiết thực hiện * Chọn vào thẻ chi tiết thực hiện hiển thị [thông tin chi tiết thực hiện](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53044575#id-%5BHO%5DDuyệtchitiếtthựchiệncôngviệc-ThôngtinchitiếtthựchiệnDetail_Action) * Chức năng Duyệt từng chi tiết thực hiện: Xem mô tả ở Duyệt chi tiết thực hiện công việc * Chức năng Duyệt tất cả chi tiết thực hiện, 2khi người dùng check vào >=2 chi tiết thực hiện, button Từ chối đã chọn, Duyệt đã chọn sẽ hiện lên để user duyệt cùng lúc nhiều chi tiết thực hiện: Xem mô tả ở Duyệt chi tiết thực hiện công việc | | Đã duyệt |  | * Thông tin Chi tiết thực hiện đã mô tả ở trạng thái Chờ duyệt * Thời gian: Ghi nhận thời gian chuyển trạng thái Đã duyệt * Ở trạng thái này sẽ không hiển thị 2 action Từ chối/Duyệt | | Từ chối |  | * Thông tin Chi tiết thực hiện đã mô tả ở trạng thái Chờ duyệt * Thời gian: Ghi nhận thời gian chuyển trạng thái Từ chối * Nội dung lý do:   + Hiển thị thông tin lý do từ chối   + Trường hợp lý do khác sẽ hiển thị: Khác - Nội dung lý do khác đã nhập * Ở trạng thái này sẽ không hiển thị 2 action Từ chối/Duyệt | |