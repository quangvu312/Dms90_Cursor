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

# 1 Duyệt điều chỉnh điểm bán

Link Visily UI: <https://app.visily.ai/projects/596df0d2-3f48-4378-85f5-feff1877965c/boards/1330515/elements/882176000>

Màn hình Danh sách điểm bán, bổ sung button Duyệt điều chỉnh điểm bán (button chỉ hiển thị khi user được phân quyền tạo mới/chỉnh sửa.)

* Đối với các điểm bán có ít nhất một yêu cầu điều chỉnh, button edit sẽ ẩn đi và thay bằng icon , click vào icon hiển thị tooltip: Có yêu cầu điều chỉnh điểm bán, vui lòng duyệt!
* Iconchỉ hiển thị khi user được phân quyền tạo mới/chỉnh sửa.

Chọn vào button Duyệt điều chỉnh điểm bán, hệ thống mở màn hình phụ quản lý các yêu cầu điều chỉnh điểm bán như sau:

| Tên Trường | Loại dữ liệu / Field | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- |
| **Tìm kiếm** | Textbox | Có | Không | Cho phép tìm kiếm theo mã, tên, số điện thoại điểm bán. Áp dụng tìm kiếm chứa (LIKE), không phân biệt hoa thường.   * Placeholder: Tìm kiếm theo Mã, tên, số ĐT điểm bán * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các điểm bán có thông tin được nhập trong ô này (search like) |
| **Nhà phân phối** | Selectbox Multichoice | Có | Không | Chọn Nhà phân phối để tìm kiếm Yêu cầu điều chỉnh điểm bán.   * Trường này cho phép người dùng chọn một Nhà phân phối để tìm kiếm Yêu cầu điều chỉnh điểm bán theo Nhà phân phối (Nhà phân phối của điểm bán trên yêu cầu điều chỉnh) đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều Nhà phân phối từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Yêu cầu điều chỉnh điểm bán. * **Mở danh sách:**Khi người dùng nhấp vào trường **Nhà phân phối**, một danh sách các Nhà phân phối sẽ được mở ra:   + Dữ liệu lấy từ danh sách Nhà phân phối   + Chỉ hiển thị danh sách Nhà phân phối có trạng thái = Hoạt động   + Nhà phân phối phải thuộc phân quyền dữ liệu của người dùng đang đăng nhập, như sau:     - Trường hợp tài khoản người dùng đang đăng nhập **có** thông tin NPP chăm sóc: Chỉ hiển thị danh sách NPP chăm sóc (Ưu tiên cao nhất)     - Trường hợp tài khoản người dùng đang đăng nhập **không có** thông tin NPP chăm sóc       * Trường hợp tài khoản người dùng đang đăng nhập **không** gắn tài khoản thị trường: Load danh sách NPP theo phân quyền vùng, khu vực của tài khoản người dùng, địa chỉ NPP phải thuộc vùng/khu vực quản lý của tài khoản đăng nhập.       * Trường hợp tài khoản người dùng đang đăng nhập **có** gắn tài khoản thị trường: Load danh sách NPP theo phân quyền salesforce của tài khoản thị trường:         + SS: sẽ lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman cấp dưới của SS đang đăng nhập + NPP trên tuyến bán hàng của chính nhân viên đang đăng nhập         + ASM:           - B1: Lấy ra danh sách tất cả SS cấp dưới của ASM đang đăng nhập           - B2: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B1           - B3: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B2 + NPP trên tuyến bán hàng của SS ở B1         + RSM: sẽ lấy NPP của tất cả ASM         + - B1: Lấy ra danh sách tất cả ASM cấp dưới của RSM đang đăng nhập           - B2: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B1           - B3: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B2           - B4: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B3 + NPP trên tuyến bán hàng của SS ở B2         + SD: sẽ lấy NPP của tất cả RSM           - B1: Lấy ra danh sách tất cả RSM cấp dưới của SD đang đăng nhập           - B2: Lấy ra danh sách tất cả ASM cấp dưới của RSM ở B1           - B3: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B2           - B4: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B3           - B5: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B4 + NPP trên tuyến bán hàng của SS ở B3         + Tất cả nhân viên theo salesforce trên đều phải có trạng thái đang hoạt động, tuyến bán hàng đang hoạt động, NPP đang hoạt động * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa theo Mã, Tên để tìm kiếm Nhà phân phối mong muốn. Sau đó, họ có thể chọn một Nhà phân phối bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Nhà phân phối đã chọn sẽ hiển thị trong hộp chọn. * **Kết quả lọc:**Yêu cầu điều chỉnh điểm bán sẽ tự động được lọc để hiển thị thông tin yêu cầu của điểm bán có Nhà phân phối đã chọn. * **Xóa lựa chọn:** Người dùng có thể chọn lại Nhà phân phối trong hộp chọn để bỏ chọn Nhà phân phối không mong muốn. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn (Hiểu là chọn tất cả Nhà phân phối để hiển thị yêu cầu trên danh sách) |
| **Nhân viên** | Selectbox Multichoice | Có | Không | Chọn nhân viên để tìm kiếm Yêu cầu điều chỉnh điểm bán.   * Trường này cho phép người dùng chọn một nhân viên để tìm kiếm Yêu cầu điều chỉnh điểm bán theo nhân viên (Nhân viên tạo yêu cầu điều chỉnh) đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều nhân viên từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Yêu cầu điều chỉnh điểm bán. * **Mở danh sách:**Khi người dùng nhấp vào trường **nhân viên**, một danh sách các nhân viên sẽ được mở ra:   + Dữ liệu lấy từ danh sách nhân viên từ [[HO] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) với chức vụ Nhân viên bán hàng (SM) và Giám sát bán hàng (SS)   + Chỉ hiển thị danh sách nhân viên có trạng thái = Hoạt động   + Nhân viên phải thuộc phân quyền dữ liệu của người dùng đang đăng nhập:     - Trường hợp tài khoản người dùng có liên kết tài khoản thị trường: Lấy theo phân quyền theo salesforce, chỉ hiển thị nhân viên cấp dưới của tài khoản thị trường đang được liên kết     - Trường hợp tài khoản người dùng không có liên kết tài khoản thị trường:        * Lấy danh sách nhân viên theo vùng/khu vực mà tài khoản đang đăng nhập quản lý       * Vùng/khu vực của nhân viên lấy theo vùng/khu vực của cấp quản lý * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa theo Mã, Tên, Số điện thoại để tìm kiếm nhân viên mong muốn. Sau đó, họ có thể chọn một nhân viên bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Nhân viên đã chọn sẽ hiển thị trong hộp chọn. * **Kết quả lọc:**   + Yêu cầu điều chỉnh điểm bán sẽ tự động được lọc để hiển thị thông tin yêu cầu của nhân viên đã chọn.   + Chỉ lọc các yêu cầu điều chỉnh được tạo bởi nhân viên đã chọn. * **Xóa lựa chọn:** Người dùng có thể chọn lại nhân viên trong hộp chọn để bỏ chọn nhân viên không mong muốn. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn (Hiểu là chọn tất cả nhân viên để hiển thị yêu cầu trên danh sách) |
| **Ngày gửi yêu cầu – Từ ngày - Đến ngày** | Datepicker | Có | Không | * Khi mở màn hình Default từ ngày đầu tháng đến cuối tháng của tháng hiện tại * Người dùng chọn ngày để tìm kiếm tại icon calendar → Hiển thị popup calendar để chọn ngày; * Định dạng thời gian: Từ ngày **dd-mm-yyyy****→**Đến ngày**dd-mm-yyyy**  * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn  * Đến Ngày >= Từ Ngày, * Đến Ngày - Từ Ngày: Có thể chọn bất kỳ khoảng thời gian nào * Nhấn button Tìm Kiếm --> Lưới danh sách sẽ lọc các yêu cầu nghỉ phép có ngày tạo theo thời gian đã chọn |
| **Trạng thái** | Selectbox Multichoice | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc Yêu cầu điều chỉnh điểm bán dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và chọn một trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong Yêu cầu điều chỉnh điểm bán. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:   + Chờ duyệt   + Đã duyệt   + Từ chối  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách Yêu cầu điều chỉnh điểm bán sẽ tự động được lọc để hiển thị những Yêu cầu điều chỉnh điểm bán thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn tất cả trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn (Hiểu là chọn tất cả trạng thái để hiển thị lên danh sách). * Placeholder: Chọn trạng thái để tìm kiếm |
| **Loại điều chỉnh** | Selectbox Multichoice | Có | Không | * Trường này cho phép người dùng chọn một Loại điều chỉnh để lọc Yêu cầu điều chỉnh điểm bán dựa trên Loại điều chỉnh đã chọn. * Người dùng có thể tìm kiếm và chọn một Loại điều chỉnh từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong Yêu cầu điều chỉnh điểm bán. * **Mở danh sách:** Khi người dùng nhấp vào trường "Loại điều chỉnh", một danh sách các Loại điều chỉnh sẽ được mở ra. Danh sách Loại điều chỉnh bao gồm:   + Thông tin chung   + Thông tin người đại diện   + Phân loại điểm bán   + Thông tin vị trí   + Định vị trên bản đồ   + Hình ảnh điểm bán  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm Loại điều chỉnh mong muốn. Sau đó, chọn một Loại điều chỉnh bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Loại điều chỉnh đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách Yêu cầu điều chỉnh điểm bán sẽ tự động được lọc để hiển thị những Yêu cầu điều chỉnh điểm bán thuộc Loại điều chỉnh đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Loại điều chỉnh không mong muốn. * Trường hợp bỏ chọn tất cả Loại điều chỉnh trong hộp chọn thì mặc định hiểu là chọn tất cả Loại điều chỉnh để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn (Hiểu là chọn tất cả Loại điều chỉnh để hiển thị lên danh sách). * Placeholder: Chọn Loại điều chỉnh để tìm kiếm |
| **Làm mới** | Button | Có | Không | * **Chức năng:**    + Nút "Làm mới" cho phép người dùng tải lại danh sách Yêu cầu điều chỉnh điểm bán, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách.   + Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các Yêu cầu điều chỉnh điểm bán mới nhất được hiển thị. **Cách sử dụng:**    1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Yêu cầu điều chỉnh điểm bán.   2. **Danh sách Yêu cầu điều chỉnh điểm bán làm mới:** Sau khi nhấp, danh sách sẽ hiển thị toàn bộ các Yêu cầu điều chỉnh điểm bán hiện có mà không áp dụng bất kỳ bộ lọc nào. **Lưu ý:**    + Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Yêu cầu điều chỉnh điểm bán.   + Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| **Tìm kiếm** | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách Yêu cầu điều chỉnh điểm bán. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Yêu cầu điều chỉnh điểm bán theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Yêu cầu điều chỉnh điểm bán. 3. **Hiển thị kết quả:** Danh sách Yêu cầu điều chỉnh điểm bán sẽ cập nhật và hiển thị các Yêu cầu điều chỉnh điểm bán phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Yêu cầu điều chỉnh điểm bán sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Chức năng Duyệt**: Trường hợp người dùng check chọn yêu cầu điều chỉnh ở đầu mỗi dòng, trên màn hình sẽ hiển thị thêm 2 button Từ chối, Chấp nhận  Approve\_Request | | | | |
| Chấp nhận | Button | Có | Không | * **Điều kiện hiển thị button:**    + Check vào các dòng Yêu cầu điều chỉnh điểm bán trên lưới có trạng thái "Chờ duyệt" thì button này mới **enable**, có thể chọn nhiều nhưng chỉ được chọn nhiều các dòng cùng trạng thái "Chờ duyệt"   + Check vào các dòng Yêu cầu điều chỉnh điểm bán trên lưới có trạng thái "Đã duyệt" hoặc "Từ chối" thì button này sẽ **disable**, có thể chọn nhiều dòng nhưng chỉ được chọn các dòng cùng trạng thái. **Chức năng chính:**Khi người dùng nhấn vào button này, hệ thống hiển thị xác nhận: Bạn có muốn duyệt chấp nhận các Yêu cầu điều chỉnh điểm bán đã chọn:    + Đồng ý: Hệ thống sẽ tự động thay đổi trạng thái của **TẤT CẢ** các Yêu cầu điều chỉnh điểm bán đang được chọn (đã đánh dấu check) từ "Chờ duyệt" sang "Đã duyệt":     - Thông báo: Duyệt Yêu cầu điều chỉnh điểm bán thành công! → Lưu thông tin Ngày cập nhật, Người cập nhật     - Thay đổi thông tin điểm bán theo thông tin mới     - Thay đổi tuyến bán hàng (nếu có thay đổi tuyến khi điều chỉnh)       * Tuyến sẽ được update vào ngày T+1 (Ngày có viếng thăm gần nhất)     - Lưu lịch sử thay đổi điểm bán, lịch sử thay đổi tuyến   + Trở lại: Tắt popup và quay về màn hình hiện tại, vẫn giữ các checkbox đã check. |
| Từ chối | Button | Có | Không | * **Điều kiện hiển thị button:**    + Check vào các dòng yêu cầu nghỉ phép trên lưới có trạng thái "Chờ duyệt" thì button này mới **enable**, có thể chọn nhiều nhưng chỉ được chọn nhiều các dòng cùng trạng thái "Chờ duyệt"   + Check vào các dòng yêu cầu nghỉ phép trên lưới có trạng thái "Đã duyệt"/"Từ chối" thì button này sẽ **disable**, có thể chọn nhiều dòng nhưng chỉ được chọn các dòng cùng trạng thái. * Từ chối: * + - Hiển thị popup để chọn Lý do từ chối duyệt yêu cầu điều chỉnh điểm bán:        * + - Danh sách lý do lấy từ [Danh sách dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) loại = Lý do từ chối duyệt điều chỉnh điểm bán và thêm Lý do Khác, trường hợp user chọn Lý do khác phải nhập thông tin Lý do (free text, 200)     - Nhấn Hủy: Tắt popup quay về màn hình hiện tại.     - Nhấn Đồng ý →       * Tất cả yêu cầu điều chỉnh điểm bán chuyển trạng thái Từ chối.       * Lưu thông tin lý do từ chối duyệt yêu cầu điều chỉnh điểm bán       * Lưu thông tin tài khoản người dùng thực hiện từ chối duyệt yêu cầu điều chỉnh điểm bán.       * Thông tin điểm bán giữ như cũ không thay đổi     - User chọn nhiều yêu cầu điều chỉnh điểm bán và nhấn từ chối thì Lý do được chọn sẽ áp dụng cho tất cả yêu cầu điều chỉnh điểm bán được chọn từ chối duyệt. * Ghi nhận Từ chối/Duyệt thành công, hiển thị popup thông báo thành công, auto đóng sau 2s  * Ghi nhận Từ chối/Duyệt thất bại và không có thông tin yêu cầu điều chỉnh điểm bán cụ thể bị thất bại, hiển thị popup kèm lỗi như sau:      * Ghi nhận Từ chối/Duyệt thất bại và có thông tin yêu cầu điều chỉnh điểm bán cụ thể bị thất bại, hiển thị popup kèm lỗi như sau:      * + Chỉ yêu cầu điều chỉnh điểm bán lỗi sẽ hiển thị thông báo, các yêu cầu điều chỉnh điểm bán không lỗi sẽ được chuyển trạng thái thành công.   + Trường hợp có nhiều yêu cầu điều chỉnh điểm bán lỗi, thì các Mã điểm bán - Tên điểm bán, cách nhau dấu ","     - Ví dụ: Thao tác đã xảy ra lỗi do DB0001 - Tạp hóa chị Hoa, DB002 - Tạp hóa chị Anh không tồn tại trên hệ thống!   **Lưu ý:****Phân quyền:** Chỉ những người dùng có quyền tạo mới hoặc chỉnh sửa tại màn hình này mới hiển thị button này. |
| **Danh sách yêu cầu điều chỉnh**   * Hiển thị danh sách Yêu cầu điều chỉnh điểm bán của nhân viên    + Tài khoản người dùng có vai trò = Giám đốc bán hàng toàn quốc (SD)/ sẽ thấy tất cả các yêu cầu duyệt điểm bán của nhân viên cấp dưới của mình   + Tài khoản người dùng có vai trò = Quản lý vùng (RSM) sẽ thấy tất cả các yêu cầu duyệt điểm bán của nhân viên cấp dưới của mình   + Tài khoản người dùng có vai trò = Quản lý khu vực (ASM) sẽ thấy tất cả các yêu cầu duyệt điểm bán của nhân viên cấp dưới của mình   + Tài khoản người dùng có vai trò =Giám sát bán hàng (SS) sẽ thấy tất cả các yêu cầu duyệt điểm bán của nhân viên cấp dưới của mình   + Tài khoản người dùng có thông tin tài khoản thị trường mới phân quyền dữ liệu được như mô tả bên trên, nhân viên cấp dưới được định nghĩa ở [[Portal HO][DMS] Quản lý nhân viên DMS và Định nghĩa cây SalesForce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) * Tài khoản người dùng có vai trò =Giám đốc bán hàng toàn quốc (SD), Quản lý vùng (RSM), Quản lý khu vực (ASM), Giám sát bán hàng (SS) không có thông tin tài khoản thị trường thì khi vào màn hình này sẽ hiển thị cảnh báo: Tài khoản của bạn chưa được cài đặt tài khoản thị trường   + Đồng Ý: Tắt popup và hiển thị trang danh sách và không hiển thị bất cứ dữ liệu nào. * Tài khoản người dùng không thuộc các vai trò =Giám đốc bán hàng toàn quốc (SD), Quản lý vùng (RSM), Quản lý khu vực (ASM), Giám sát bán hàng (SS) thì khi vào màn hình này sẽ hiển thị tất cả dữ liệu điều chỉnh điểm bán của tất cả nhân viên theo phân quyền quản lý dữ liệu | | | | |
| Chọn | Checkbox | Có | Không | * Check vào các dòng Yêu cầu điều chỉnh điểm bán này để duyệt Yêu cầu điều chỉnh điểm bán * Có thể chọn nhiều nhưng chỉ được chọn nhiều các dòng cùng trạng thái * Checkbox checkall có thể chọn được khi các dòng ở trên lưới danh sách đều cùng trạng thái * Nếu khác trạng thái thì checkbox check all sẽ disable * Khi check all thì sẽ check all trên page hiện tại. |
| **Nhà phân phối** | Label | Không | Không | Thông tin NPP của điểm bán |
| **Mã điểm bán** | Labe | Không | Không | Thông tin mã điểm bán có yêu cầu điều chỉnh |
| **Tên điểm bán** | Labell + Hyperlink | Không | Không | Hiển thị tên điểm bán có yêu cầu điều chỉnh  Khi nhấn vào tên điểm bán sẽ điều hướng sang màn hình chi tiết điều chỉnh điểm bán |
| **Số điện thoại điểm bán** | Label | Không | Không | Hiển thị số điện thoại điểm bán có yêu cầu điều chỉnh |
| **Địa chỉ điểm bán** | Label | Không | Không | Hiển thị địa chỉ điểm bán có yêu cầu điều chỉnh |
| **Loại điều chỉnh** | Label | Không | Không | Hiển thị loại yêu cầu điều chỉnh:   * Thông tin chung * Thông tin người đại diện * Phân loại điểm bán * Thông tin vị trí * Định vị trên bản đồ * Hình ảnh điểm bán |
| **Trạng thái** | Label trạng thái (màu sắc) | Không | Không | Trạng thái yêu cầu điều chỉnh:   * Chờ duyệt * Đã duyệt * Từ chối |
| **Lý do từ chối** | Label | Không | Không | Hiển thị nội dung nếu trạng thái là “Từ chối” |
| **Ngày tạo** | Label (datetime) | Không | Không | * Ngày tháng khi Yêu cầu điều chỉnh điểm bán này được thêm vào hệ thống. * Format: DD-MM-YYYY HH:MM:SS |
| **Người tạo** | Label | Không | Không | * Hiển thị mã tài khoản - tên tài khoản của người dùng đã tạo ra Yêu cầu điều chỉnh điểm bán này. * Có thể copy mã tài khoản. |
| **Ngày cập nhật** | Label (datetime) | Không | Không | * Ngày tháng của lần cập nhật gần nhất cho Yêu cầu điều chỉnh điểm bán này.  * Format: DD-MM-YYYY HH:MM:SS |
| **Người cập nhật** | Label | Không | Không | * Hiển thị tên tài khoản người dùng đã thực hiện cập nhật cuối cùng cho Yêu cầu điều chỉnh điểm bán này.   + Nếu thực hiện duyệt trên App Quản lý: Hiển thị thông tin Mã nhân viên - Tên nhân viên   + Nếu thực hiện duyệt trên Portal: Hiển thị thông tin Mã tài khoản người dùng - Tên tài khoản người dùng * Có thể copy mã tài khoản. |
| **Nút Chấp nhận/Từ chối** | Button | Có | Không | Button chỉ hiển thị khi trạng thái yêu cầu = "Chờ duyệt"  Chức năng được mô tả ở Chức năng duyệt |

# 2 Chi tiết điều chỉnh điểm bán Detail\_Request

## 2.1 Trạng thái Chờ Duyệt

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Thông tin chung |  | Click vào Tên điểm bán có hyperlink để xem chi tiết điểm bán như sau:    Chỉ view thông tin điều chỉnh  Button Chấp nhận/Từ chối chỉ hiển thị khi trạng thái yêu cầu = "Chờ duyệt"  Chức năng được mô tả ở Chức năng duyệt |
| Thông tin người đại diện |  | Như mô tả bên trên |
| Phân loại điểm bán |  | Như mô tả bên trên |
| Thông tin vị trí |  | Như mô tả bên trên |
| Định vị trên bản đồ |  | Như mô tả bên trên  Có thể phóng to, thu nhỏ, di chuyển bản đồ để xem vị trí cửa hàng nhưng không được thay đổi định vị điểm bán trên bản đồ |
| Hình ảnh điểm bán |  | Như mô tả bên trên  Có thể click vào hình ảnh để phóng to xem hình ảnh |

Lưu ý kiểm tra Duyệt:

* Nhà phân phối có còn đang hoạt động không
  + Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Nhà phân phối của điểm bán không hoạt động, không thể duyệt yêu cầu, vui lòng từ chối!
* Tuyến bán hàng có còn đang hoạt động không
  + Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Tuyến bán hàng của điểm bán không hoạt động, không thể duyệt yêu cầu, vui lòng từ chối!
* Điểm bán có còn nằm trong tuyến bán hàng không
  + Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Điểm bán không còn nằm trên tuyến bán hàng, không thể duyệt yêu cầu, vui lòng từ chối!
* Nhân viên có còn đang hoạt động không
  + Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Nhân viên không hoạt động, không thể duyệt yêu cầu, vui lòng từ chối!
* Điểm bán có còn nằm trong tuyến bán hàng không
  + Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Điểm bán không còn nằm trên tuyến bán hàng, không thể duyệt yêu cầu, vui lòng từ chối!
* Trường hợp có dữ liệu trên các màn hình chỉnh sửa bị ngưng hoạt động
  + Khi nhấn Cập nhật sẽ hiển thị thông báo: <Tên trường> bị ngưng hoạt động, , không thể duyệt yêu cầu, vui lòng từ chối!
  + Trường hợp có nhiều trường dữ liệu bị ngưng hoạt động, sẽ hiển thị: <Tên trường 1>, <Tên trường 2>,...  bị ngưng hoạt động, không thể duyệt yêu cầu, vui lòng từ chối!
* Tuyến bán hàng có dữ liệu không (Do tuyến không tồn tại hoặc tuyến đã gán cho nhân viên khác hoặc nhân viên đã bị gỡ khỏi tuyến)?
  + Nếu không: Khi nhấn Cập nhật, hiển thị cảnh báo: Tuyến bán hàng không có dữ liệu, không thể duyệt yêu cầu, vui lòng từ chối!
* Trường hợp có dữ liệu trên màn hình bị trống, mà trường dữ liệu đó là trường bắt buộc, khi nhấn Cập nhật sẽ hiển thị thông báo:
  + <Tên trường> không có dữ liệu, không thể duyệt yêu cầu, vui lòng từ chối!
  + Trường hợp có nhiều trường dữ liệu bị trống, sẽ hiển thị: <Tên trường 1>, <Tên trường 2>,...  không có dữ liệu, không thể duyệt yêu cầu, vui lòng từ chối!
* Trường hợp có nhiều điểm bán xảy ra lỗi thì chỉ hiển thị thông báo lỗi của điểm bán bị lỗi đầu tiên (Có thể random điểm bán lỗi bất kỳ). Sau đó user điều chỉnh, nếu tiếp tục nhấn duyệt thì sẽ tiếp tục kiểm tra và hiển thị thông báo lỗi tiếp theo.

## 2.2 Trạng thái Đã duyệt

Chỉ view thông tin

## 2.3 Trạng thái Từ chối

View thông tin kèm hiển thị Lý do từ chối

# 3 Thông báo điều chỉnh điểm bán

* Khi có yêu cầu điều chỉnh điểm bán được gửi từ App SM, hệ thống sẽ gửi thông báo đến portal, hiển thị cho những:
  + User đang trên portal và có phân quyền tạo mới/chỉnh sửa điểm bán
  + Điểm bán phải nằm trong vùng quản lý của user theo phân quyền quản lý dữ liệu
* Thông báo hiển thị dưới dạng như sau:
* + Thông báo chưa xem sẽ được highlight trong danh sách
  + Thông báo đã xem sẽ không còn màu highlight
  + Thời gian: Thời gian tính từ Hiện tại - thời gian thông báo được gửi đến cho user (Gọi tắt là T).
    - Nêú T < 1 phút thì hiển thị "Bây giờ"
    - Nếu 1 phút <= T < 60 phút thì hiển thị số phút + "trước"
    - Nếu T >= 60 thì hiển thị số giờ + "trước", làm tròn theo giờ, chỉ lấy giờ nguyên.
    - Ví dụ Hiện tại = 16:45:00

      * Nêú T < 1 phút thì hiển thị "Bây giờ"
      * -> Thời gian thông báo gửi = 16:44:01 → 16:45:00  
        Gửi lúc 16:44:55 → hiển thị “Bây giờ”
      * Nếu 1 phút <= T < 60 phút thì hiển thị số phút + "trước"  
        -> Thời gian thông báo gửi = 15:45:01 → 16:44:00  
        Gửi lúc 16:20:00 → “25 phút trước”
      * Nếu T >= 60 thì hiển thị số giờ + "trước", làm tròn theo giờ, chỉ lấy giờ nguyên.  
        -> Thời gian thông báo gửi = 00:45:01 → 15:45:00  
        Gửi lúc 13:10:00 → “3 giờ trước”
  + Khi nhấn vào bất cứ thông báo chưa xem/đã xem đều sẽ điều hướng đến màn hình Duyệt điều chỉnh điểm bán
  + Thông tin đánh dấu Đã xem/Chưa xem thông báo sẽ được lưu trên từng tài khoản người dùng đang login (Trên bất cứ trình duyệt)
  + Chỉ hiển thị thông báo điều chỉnh trong ngày, qua 00:00 của ngày mới sẽ làm mới và xóa các thông báo yêu cầu điều chỉnh của ngày cũ.

# 3 Export duyệt điều chỉnh điểm bán

* Thêm button Export Excel trên màn hình Duyệt điều chỉnh điểm bán
* Phân quyền: có phân quyền export mới thấy được button này.
* Template excel như sau:
* Format tên file xuất ra: DanhSachYeuCauDuyetDieuChinhDiemBan\_DDMMYYYYHHMMSS
* Data export sẽ giống với data hiển thị trên lưới danh sách

## Mô tả trường dữ liệu

|  | Trường dữ liệu | Mô tả |
| --- | --- | --- |
| 1 | Mã NPP | - Thông tin NPP của điểm bán - Nhiều NPP thì hiển thị cách nhau bởi dấu phẩy theo đúng thứ tự NPP1, NPP2 |
| 2 | Tên NPP | - Thông tin NPP của điểm bán - Nhiều NPP thì hiển thị cách nhau bởi dấu phẩy theo đúng thứ tự NPP1, NPP2 |
| 3 | Mã điểm bán | Thông tin mã điểm bán có yêu cầu điều chỉnh |
| 4 | Tên điểm bán | Thông tin tên điểm bán có yêu cầu điều chỉnh |
| 5 | Số điện thoại điểm bán | Thông tin số điện thoại điểm bán có yêu cầu điều chỉnh |
| 6 | Địa chỉ điểm bán | Thông tin địa chỉ điểm bán có yêu cầu điều chỉnh |
| 7 | Loại điều chỉnh | Thông tin loại điều chỉnh:   * Thông tin chung * Thông tin người đại diện * Phân loại điểm bán * Thông tin vị trí * Định vị trên bản đồ * Hình ảnh điểm bán |
| 8 | Trạng thái | Trạng thái yêu cầu điều chỉnh:   * Chờ duyệt * Đã duyệt * Từ chối |
| 9 | Lý do từ chối | Hiển thị nội dung nếu trạng thái là “Từ chối” |
| 10 | Trường thông tin | Trường thông tin được yêu cầu điều chỉnh |
| 11 | Dữ liệu hiện tại | Dữ liệu hiện tại trước khi điều chỉnh |
| 12 | Dữ liệu muốn điều chỉnh | Dữ liệu yêu cầu điều chỉnh |
| 13 | Ngày tạo | Ngày tháng khi Yêu cầu điều chỉnh điểm bán này được thêm vào hệ thống. Format: DD-MM-YYYY HH:MM:SS |
| 14 | Mã người tạo | Hiển thị Mã tài khoản của người dùng đã tạo ra Yêu cầu điều chỉnh điểm bán này. |
| 15 | Tên người tạo | Hiển thị Tên tài khoản của người dùng đã tạo ra Yêu cầu điều chỉnh điểm bán này. |
| 16 | Ngày cập nhật | Ngày tháng của lần cập nhật gần nhất cho Yêu cầu điều chỉnh điểm bán này. Format: DD-MM-YYYY HH:MM:SS |
| 17 | Mã người cập nhật | Hiển thị mã tài khoản người dùng đã thực hiện cập nhật cuối cùng cho Yêu cầu điều chỉnh điểm bán này.   * Nếu thực hiện duyệt trên App Quản lý: Hiển thị thông tin Mã nhân viên * Nếu thực hiện duyệt trên Portal: Hiển thị thông tin Mã tài khoản người dùng |
| 18 | Tên người cập nhật | Hiển thị tên tài khoản người dùng đã thực hiện cập nhật cuối cùng cho Yêu cầu điều chỉnh điểm bán này.   * Nếu thực hiện duyệt trên App Quản lý: Hiển thị thông tin Tên nhân viên * Nếu thực hiện duyệt trên Portal: Hiển thị thông tin Tên tài khoản người dùng |