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

# NHẬP KHO

|  | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc nhập? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| 1 | Theo Mã Phiếu Nhập Kho | Textbox (250) | Có | Không | Cho phép nhật text tìm kiếm Phiếu nhập kho theo Mã Phiếu Nhập Kho.   * Tooltip: Tìm kiếm theo Mã Phiếu Nhập Kho. * Placeholder: Tìm kiếm theo Mã Phiếu Nhập Kho * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các Phiếu nhập kho có thông tin được nhập trong ô này. |
| 2 | Nhà Phân Phối | Multiselect | Có | Không | * **Mở danh sách:** Khi người dùng nhấp vào trường "Nhà phân phối" hiển thị danh sách NPP    + Thuộc phân quyền của người dùng đang đăng nhập   + Theo phân vùng được chọn ở trường Vùng   + Có trạng thái đang hoạt động   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn   + Dữ liệu trong hộp chọn được sắp xếp theo ngày tạo gần nhất. * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo **Mã NPP**; **Tên NPP**   + Người dùng có thể chọn nhiều NPP để lọc dữ liệu   + Trường hợp không có NPP nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống"  * **Hiển thị lựa chọn: NPP**đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Chỉ hiển thị các Phiếu nhập kho có NPP đã chọn. * **Xóa lựa chọn:**     + Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn NPP không mong muốn.   + Trường hợp bỏ chọn NPP trong hộp chọn thì hiểu là chọn tất cả các NPP trong hộp chọn |
| 3 | Từ ngày - Đến Ngày | Date picker | Có | Không | **Chức năng:**   * Trường này cho phép người dùng lọc danh sách Phiếu nhập kho theo khoảng thời gian nhất định, dựa trên ngày nhập kho. * Người dùng có thể chọn một ngày bắt đầu (From Date) và một ngày kết thúc (To Date) để xem các Phiếu nhập kho có ngày nhập kho trong khoảng thời gian được chọn.   **Cách sử dụng:**   1. **Chọn ngày bắt đầu:** Người dùng chọn một ngày bắt đầu (From Date) bằng cách nhấp vào biểu tượng lịch hoặc nhập trực tiếp ngày vào trường dữ liệu. 2. **Chọn ngày kết thúc:** Người dùng chọn một ngày kết thúc (To Date) tương tự, để hoàn tất khoảng thời gian cần lọc. 3. **Hiển thị kết quả:** Danh sách Phiếu nhập kho sẽ tự động được lọc và chỉ hiển thị những Phiếu nhập kho có ngày nhập kho trong khoảng thời gian đã chọn. 4. **Điều chỉnh hoặc xóa:** Người dùng có thể thay đổi ngày bắt đầu hoặc kết thúc   **Lưu ý:**   * Trường "Thời gian" phải kiểm tra hợp lệ, đảm bảo ngày kết thúc >= ngày bắt đầu. * Khi mở màn hình mặc định Ngày bắt đầu = ngày đầu tháng hiện tại, Ngày kết thúc = Ngày hiện tại * Khoảng thời gian từ Ngày bắt đầu đến Ngày kết thúc <= 90 ngày (Có thể xem tất cả các khoảng thời gian trong quá khứ miễn là trong vòng 90 ngày) |
| 4 | Trạng thái | Selectbox | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc Phiếu nhập kho dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và chọn một trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Phiếu nhập kho. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:   + Khởi tạo   + Đã duyệt   + Đã hủy  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách Phiếu Nhập Kho sẽ tự động được lọc để hiển thị những Phiếu Nhập Kho thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| 5 | Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại Phiếu nhập kho, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các Phiếu Nhập Kho mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên Phiếu nhập kho. 2. **Phiếu nhập kho làm mới:** Sau khi nhấp, Phiếu nhập kho sẽ hiển thị toàn bộ các Phiếu Nhập Kho hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của Phiếu nhập kho. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| 6 | Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên Phiếu nhập kho. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc Phiếu nhập kho theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong Phiếu nhập kho. 3. **Hiển thị kết quả:** Phiếu nhập kho sẽ cập nhật và hiển thị các Phiếu Nhập Kho phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, Phiếu nhập kho sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| 7 | Import | Button | Có | Không | Xem mô tả ở chức năng Import phiếu nhập kho bên dưới |
| 8 | Export | Button | Có | Không | Xem mô tả ở chức năng Export phiếu nhập kho bên dưới |
| 9 | Lưới danh sách | | | | |
| 10 | Mã Phiếu Nhập Kho | Datacolumn link | Không | Có | Mã định danh duy nhất cho 1 phiếu nhập.  CLick vào xem được chi tiết phiếu nhập kho như sau: |
| 11 | Ngày nhập kho | Datacolumn | Không | Không | Ngày nhập kho trên phiếu nhập kho |
| 12 | Trạng thái | Datacolumn | Không | Không | Trạng thái của phiếu nhập kho |
| 13 | Lý do từ chối | Datacolumn | Không | Không | Lý do từ chối phiếu nhập kho khi Phiếu có trạng thái = Từ chối |
| 14 | Ngày tạo | Datacolumn | Không | Không | * Ngày tháng khi Phiếu Nhập Kho được thêm vào hệ thống. * Format: DD:MM:YYYY HH:MM:SS |
| 15 | Người tạo | Datacolumn | Không | Không | * Hiển thị mã tài khoản của người dùng đã tạo ra bản ghi Phiếu Nhập Kho này. |
| 16 | Ngày cập nhật | Datacolumn | Không | Không | * Ngày tháng của lần cập nhật gần nhất cho thông tin Phiếu Nhập Kho.  * Format: DD:MM:YYYY HH:MM:SS |
| 17 | Người cập nhật | Datacolumn | Không | Không | * Hiển thị mã tài khoản người dùng đã thực hiện cập nhật cuối cùng cho Phiếu Nhập Kho. |
| 18 | Tùy chỉnh | | | | |
| 19 | Duyệt | Button | Có | Không | **Chức năng chính:**Khi người dùng nhấn vào button này, hệ thống hiển thị xác nhận: Bạn có muốn duyệt chấp nhận Phiếu Nhập Kho đã chọn?   * Đồng ý: Hệ thống sẽ tự động thay đổi trạng thái của Phiếu Nhập Kho đang được chọn từ "Khởi tạo" sang "Đã duyệt" → Thông báo: Duyệt Phiếu Nhập Kho thành công! → Lưu thông tin Ngày cập nhật, Người cập nhật * Trở lại: Tắt popup và quay về màn hình hiện tại   **Lưu ý:****Phân quyền:** Chỉ những người dùng có quyền Phê duyệt tại màn hình này mới hiển thị button này. |
| 20 | Hủy | Button | Có | Không | **Chức năng chính:**Khi người dùng nhấn vào button này, hệ thống hiển thị popup có danh sách lý do từ chối: Danh sách lý do lấy từ [Danh sách dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) loại = Lý do từ chối nhập kho + thêm Lý do **Khác**, trường hợp user chọn Lý do khác phải nhập thông tin Lý do (free text, 200), sau khi nhập/chọn lý do:    * Đồng ý: Hệ thống sẽ tự động thay đổi trạng thái của Phiếu Nhập Kho đang được chọn (đã đánh dấu check) từ "Khởi tạo" sang "Đã hủy" → Thông báo: Duyệt hủy Phiếu Nhập Kho thành công! → Lưu thông tin Ngày cập nhật, Người cập nhật, Lý do từ chối (Apply lý do cho tất cả các dòng được chọn) * Trở lại: Tắt popup và quay về màn hình hiện tại   **Lưu ý:****Phân quyền:** Chỉ những người dùng có quyền tạo mới hoặc chỉnh sửa tại màn hình này mới hiển thị button này. |

# Import phiếu nhập kho (PNK)

* **Chức năng**: Cho phép người dùng (Admin) tải lên file dữ liệu để nhập kho hàng loạt cho các NPP.
* **Định dạng tệp hỗ trợ**: Chấp nhận các tệp định dạng **Excel (XLS/XLSX)** để tiện lợi cho việc nhập liệu hàng loạt.
* Template Import:
* **Nhấn vào button Import**

  + Người dùng chọn button Import và tải lên file dữ liệu từ máy tính.
  + Hệ thống sẽ xác thực định dạng file và kiểm tra từng dòng trong file dữ liệu với các ràng buộc và yêu cầu của từng trường dữ liệu
* **Rule chung cho trường hợp cập nhật import**: Nếu cập nhật không nhập dữ liệu vào các ô không bắt buộc thì sẽ hiểu là không cập nhật thông tin và giữ nguyên dữ liệu cũ.

|  | Tên trường | Bắt buộc nhập | Mô tả |
| --- | --- | --- | --- |
| 1 | Mã phiếu nhập kho | Không | Nếu để trống, hệ thống sẽ tạo phiếu nhập kho mới.  Nếu nhập mã: Hệ thống sẽ kiểm tra mã phiếu nhập kho:   * Nếu mã không đúng định dạng hoặc không tồn tại trong hệ thống thì báo lỗi: "Mã phiếu nhập kho dòng n không đúng định dạng hoặc không tồn tại, vui lòng kiểm tra lại!"  * Nếu mã tồn tại thì tiếp tục kiểm tra trạng thái của phiếu nhập kho:   + Trạng thái = Khởi tạo, hệ thống cập nhật thông tin của PNK   + Trạng thái khác Khởi tạo, hiển thị thông báo lỗi: "Mã phiếu nhập kho dòng n có trạng thái khác Khởi tạo, không thể cập nhật, vui lòng kiểm tra lại!" |
| 2 | Ngày nhập kho | Có | Phải đúng định dạng yyyy-mm-dd. Không được để trống.  Nếu sai định dạng hoặc để trống sẽ báo lỗi: "Ngày nhập kho dòng n không hợp lệ hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 3 | Mã Nhà phân phối | Có | Mã NPP phải tồn tại trong hệ thống. Không được để trống. Nếu nhập mã không tồn tại hoặc sai sẽ báo lỗi: "Mã NPP dòng n không tồn tại hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 4 | Kho | Có | File excel định dạng selectbox onechoice, đổ sẵn dữ liệu Kho (active) mới nhất để user chọn  User chọn kho để nhập kho  Không được để trống hoặc nhập dữ liệu từ ngoài vào. Nếu sai sẽ báo lỗi: "Kho dòng n không hợp lệ hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 5 | Kênh bán hàng | Có | File excel định dạng selectbox onechoice, đổ sẵn dữ liệu Kênh (active) mới nhất để user chọn  User chọn Kênh để nhập kho  Không được để trống hoặc nhập dữ liệu từ ngoài vào. Nếu không đúng hệ thống cấu hình sẽ báo lỗi: "Kênh bán hàng dòng n không hợp lệ hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 6 | Mã sản phẩm | Có | Phải là mã sản phẩm tồn tại trong danh mục sản phẩm của hệ thống.  Không được để trống hoặc nhập không đúng mã sản phẩm.  Nếu sai sẽ báo lỗi: "Mã sản phẩm dòng n nhập không đúng định dạng, không tồn tại hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 7 | Tên sản phẩm | Không | Trường mô tả để người dùng kiểm tra dữ liệu trước khi import  Hệ thống không kiểm tra dữ liệu.  Có thể để trống. |
| 8 | Mã Lô | Có | Không được để trống.  Không chứa ký tự đặc biệt.  Nếu sai sẽ báo lỗi: "Mã lô dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 9 | Hạn sử dụng | Có | Định dạng yyyy-mm-dd.  Không được để trống.  Nếu sai định dạng hoặc để trống sẽ báo lỗi: "Hạn sử dụng dòng n không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 10 | Ngày sản xuất | Có | Định dạng yyyy-mm-dd.  Phải nhỏ hơn hoặc bằng Hạn sử dụng.  Nếu sai định dạng hoặc để trống sẽ báo lỗi: "Ngày sản xuất dòng n không hợp lệ hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 11 | Số lượng | Có | Phải là số nguyên dương (> 0).  Không được để trống.  Nếu sai sẽ báo lỗi: "Số lượng dòng n không hợp lệ hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 12 | Lưu |  | Sau khi kiểm tra hoàn tất   * Gom tất cả các dòng để trống Mã Phiếu Nhập Kho thành 1 phiếu nhập kho → Tạo phiếu nhập kho mới với Mã Phiếu Nhập Kho tự sinh theo cấu trúc: PNKHHMMYYYYHHMMSS |

# Export phiếu nhập kho (PNK)

**Chức năng:**

* Nút "Export Excel" cho phép người dùng xuất dữ liệu của danh sách Phiếu Nhập Kho ra một tập tin Excel.
* Nút này giúp người dùng lưu trữ và phân tích dữ liệu tài khoản ngoài ứng dụng, hoặc chia sẻ với các bên liên quan.
* Phân quyền: có yêu cầu phân quyền mới thấy được button này.

**Cách sử dụng:**

1. **Thiết lập dữ liệu:** Người dùng có thể chọn các bộ lọc và tìm kiếm để hiển thị các tài khoản mà họ muốn xuất ra Excel.
2. **Nhấp vào nút:** Khi người dùng nhấp vào nút "Export Excel", hệ thống sẽ tạo và tải về một tập tin Excel chứa dữ liệu của danh sách Phiếu Nhập Kho trên danh sách hiện tại.

**Lưu ý:**

* Dữ liệu xuất ra sẽ bao gồm các thông tin từ danh sách Phiếu Nhập Kho hiện tại, theo định dạng và cấu trúc mà ứng dụng đã thiết lập.
* Nút "Export Excel" sẽ xuất dữ liệu dựa trên các bộ lọc và tiêu chí tìm kiếm đã áp dụng, nếu có.
* Template excel như sau:
* Format tên file xuất ra: DanhSachPhieuNhapKho\_DDMMYYYYHHMMSS