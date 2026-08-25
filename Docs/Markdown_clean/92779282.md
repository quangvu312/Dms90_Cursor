|  |  |
| --- | --- |
| Issue Link |  |
| Story | [ECDM-7713](https://hotro.finviet.com.vn/browse/ECDM-7713) |
| Epic |  |
| Feature |  |
| Description | Update bộ lọc báo cáo, bổ sung Vùng/khu vực; Kênh nhân viên; Nhân viên; Trạng thái chấm công. Tìm kiếm theo ngày chấm công |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

**Báo cáo chấm công hiện tại: [HO] Báo cáo chấm công**

**Màn hình hiện tại:**

# **Báo cáo chấm công**

**Mục đích:** Update bộ lọc báo cáo, bổ sung Vùng; Kênh nhân viên; Nhân viên; Trạng thái chấm công. Tìm kiếm theo ngày chấm công

Màn hình sau khi cập nhật

**Mô tả:**

| **Tên Trường** | **Loại dữ liệu** | **Thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm theo | | | | |
| Tìm theo | Không đổi | | | |
| Chức vụ | Không đổi | | | |
| Thời gian | Datepicker | Có | Có | **Chức năng:**   * Trường này cho phép người dùng lọc danh sách dữ liệu nhân viên chấm công thoảng thời gian nhất định, dựa trên danh sách nhân viên thuộc phân quyền người dùng * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các dữ liệu trong khoảng thời gian đó.   **Cách sử dụng:**   1. **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu. 2. **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc. 3. **Hiển thị kết quả:** Danh sách dữ liệu sẽ tự động được lọc và chỉ hiển thị trong khoảng thời gian đã chọn. 4. **Điều chỉnh:** Người dùng có thể thay đổi ngày bắt đầu hoặc kết thúc   **Lưu ý:**   * Trường "Thời gian" phải kiểm tra hợp lệ, đảm bảo ngày kết thúc >= ngày bắt đầu. * Khi mở màn hình mặc định hiển thị tháng hiện tại * Khoảng thời gian từ Ngày bắt đầu đến Ngày kết thúc <= 31 ngày (Có thể xem tất cả các khoảng thời gian trong quá khứ miễn là trong vòng 31 ngày) |
| Vùng | Selectbox multichoice | Có | Không | * **Mở danh sách:**Khi người dùng nhấp vào trường "Vùng" hiển thị danh sách cây phân cấp Vùng và Khu vực   + **Phân quyền dữ liệu hiển thị theo Vùng/Khu vực của User: [[HO & NPP] Phân quyền dữ liệu](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53046920)**   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn   + Trường hợp không chọn Khu vực → Chọn Button "Tìm kiếm" hiểu là tất cả các Vùng thuộc phân quyền. * **Tìm kiếm và chọn:**     + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Mã Vùng, Tên Vùng, Mã khu vực, Tên khu vực   + Người dùng chỉ có thể chọn một Khu vực để lọc dữ liệu   + Trường hợp không có khu vực nào phù hợp với từ khóa, hệ thống hiển thị trong ô select "Trống" * **Hiển thị lựa chọn:** Khu vực đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tag). * **Kết quả lọc:**    + Chỉ hiển thị dữ liệu nhân viên thuộc Khu vực đã chọn.   + Vùng, Khu vực của nhân viên sẽ được định nghĩa dựa trên vùng/khu vực của quản lý trực tiếp của nhân viên [HO] Quản lý nhân viên DMS và Định nghĩa cây Salesforce * **Xóa lựa chọn:**   + Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Vùng không mong muốn.   + Trường hợp bỏ chọn Vùng trong hộp chọn thì hiểu là tất cả các Vùng thuộc phân quyền. |
| Kênh nhân viên | Selectbox multichoice | Có | Không | * **Mở danh sách:**Khi người dùng nhấp vào trường "Kênh nhân viên"   + Khi nhấn vào sẽ load hết dữ liệu danh sách Kênh bán hàng đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Kênh bán hàng, danh sách hiển thị Tên kênh bán hàng.   + Cho phép chọn nhiều.   + Mặc định trống. * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Mã Kênh bán hàng, Tên Kênh bán hàng   + Người dùng có thể chọn nhiều Kênh bán hàng để lọc dữ liệu   + Trường hợp không có Kênh bán hàng nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * **Hiển thị lựa chọn:** Kênh bán hàng đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Hiển thị dữ liệu   + Nhân viên bán hàng thuộc Kênh bán hàng đã chọn.   + Nhân viên không thuộc kênh nào tức là lúc nào cũng hiển thị trên lưới danh sách * **Xóa lựa chọn:**   + Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Kênh bán hàng không mong muốn.   + Trường hợp bỏ chọn Kênh bán hàng trong hộp chọn thì hiểu là chọn tất cả các Kênh bán hàng trên hệ thống |
| Nhân viên | Selectbox multichoice | Có | Không | * **Mở danh sách**: Khi người dùng nhấp vào trường "Nhân viên" hiển thị danh sách Nhân viên Active và inactive"   + Thuộc phân quyền của người dùng đang đăng nhập **[[HO & NPP] Phân quyền dữ liệu](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53046920)**:       - Chức vụ của nhân viên = Nhân viên bán hàng/Giám sát bán hàng/ Quản lý khu vực/ Quản lý vùng/ Giám đốc toàn quốc     - **Người dùng phân quyền Vùng/ Khu vực → Danh sách nhân viên thuộc Vùng; Khu vực người dùng login**     - **Người dùng phân quyền NPP chăm sóc → Danh sách nhân viên trên tuyến bán hàng của NPP chăm sóc**     - **Người dùng gán TKTT → Danh sách nhân viên thuộc cây saleforce TKTT đã gán và chính nó**   + Chọn **Kênh nhân viên** => hiển thị danh sách NVBH thuộc kênh bán hàng đã chọn   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. Hiểu là chọn tất cả các NVBH thỏa phân quyền của Vùng/Khu vực đã chọn. * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Mã Nhân viên, Tên Nhân viên, Số điện thoại nhân viên. tìm kiếm không phân biệt chữ hoa thường; có hay không dấu   + Người dùng có thể chọn nhiều Nhân viên để lọc dữ liệu   + Trường hợp không có Nhân viên nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * **Hiển thị lựa chọn:** Nhân viên đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Chỉ hiển thị dữ liệu của nhân viên đã chọn. * **Xóa lựa chọn:**    + Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Nhân viên không mong muốn.   + Trường hợp bỏ chọn Nhân viên trong hộp chọn thì hiểu là chọn tất cả các Nhân viên trên hệ thống (không phụ thuộc điều kiện của hộp chọn này) |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại dữ liệu; xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của màn hình. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các dữ liệu mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên dữ liệu. 2. **Dữ liệu làm mới:** Sau khi nhấp, lưới danh sách sẽ hiển thị toàn bộ các dữ liệu hiện có theo bộ lọc mặc định.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của dữ liệu của màn hình * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên dữ liệu Nhân viên * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc dữ liệu Nhân viên theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong thống kê; Lưới danh sách; trên bản đồ 3. **Hiển thị kết quả:** dữ liệu điểm bán sẽ cập nhật và hiển thị các hình ảnh phù hợp với các tiêu chí đã chọn.   **Lưu ý:**   * Ban đầu khi mở màn hình cũng sẽ không có load sẵn dữ liệu trên bản đồ. * Chọn Vùng/ khu vực bắt buộc và các tiêu chí khác (nêú có) → Chọn  "Tìm kiếm" →  Lọc dữ liệu NPP; Nhân viên theo các tiêu chí đã chọn/ mặc định thỏa phân quyền người dùng. * Tại màn hình đã có data: Nếu không chọn tiêu chí nào khác, lưới danh sách sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| Lưới danh sách | | | | |
| Kênh bán hàng | Datacolum | Không | Không | Hiển thị kênh bán hàng của nhân viên theo Mã nhân viên  Vị trí đứng trước cột Vùng trên lưới danh sách |

## Export

* Template export thêm một cột "Kênh bán hàng"
* Ví trí đứng trước cột Vùng

## Liên quan đến báo cáo

1/ Báo cáo Tuy vấn tọa độ NPP: [HO] [HT] Báo Cáo Truy vấn tọa độ NPP → Tab "Chấm công"

2/ Báo cáo nghỉ phép: [HO] Duyệt yêu cầu nghỉ phép

Trường hợp Phiếu nghỉ phép được duyệt chấp nhận "**Status =** **đã duyệt"** → Sau đó được gửi duyệt lại - "**Status = Chờ duyệt"**; hoặc hủy bỏ phiếu đã duyệt "**Status = Đã hủy"** thì các trường dữ liệu trên báo cáo chấm công cũng sẽ cập nhật lại như sau

* Grid: Chi tiết ngày công → Cột "Xin nghỉ phép được duyệt": Hiển thị checked nếu trong ngày có xin nghỉ phép của nhân viên được duyệt chấp nhận; nếu trạng thái khác "Status = đã duyệt" thì không hiển thị thông tin. Dữ liệu này cũng bị ảnh hưởng bởi thời điểm xem báo cáo và thời gian lọc báo cáo.

* Grd: Báo cáo chấm công → Cột "Tổng số ngày phép được duyệt" : Tổng số ngày phép trong tháng của nhân viên được duyệt Chấp nhận. Trường hợp = 0 thì hiển thị "0". Dữ liệu này cũng bị ảnh hưởng bởi thời điểm xem báo cáo và thời gian lọc báo cáo.