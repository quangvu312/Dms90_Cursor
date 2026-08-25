|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chức năng quản lý thông báo và nhận thông báo |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | Hoàng Quyên (BA - Product Team) |
| Chage History | 2 |

# Danh sách thông báo

|  | Tên trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| 1 | **Thông báo** | Textbox | Có | Không | Nhập Tiêu đề, Nội dung thông báo để tìm kiếm.   * Tooltip: Tìm kiếm theo Tiêu đề, Tóm tắt thông báo, nội dung thông báo . * Placeholder: Tìm kiếm theo Tiêu đề, Tóm tắt thông báo, Nội dung thông báo . * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các thông báo có Tiêu đề, Tóm tắt thông báo, Nội dung thông báo được nhập trong ô này (search like). |
| 2 | **Loại thông báo** | Select box one choice | Có | Không | * Trường này cho phép người dùng chọn một Loại thông báo duy nhất từ danh sách có sẵn để lọc các thông báo có Loại thông báo được chọn. * Trường tìm kiếm kèm theo chức năng lọc, hỗ trợ người dùng nhanh chóng tìm ra Loại thông báo mong muốn bằng cách nhập một phần tên Loại thông báo. * Khi người dùng bắt đầu nhập, một danh sách Loại thông báo phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách Loại thông báo bao gồm:   + - Thông báo chung     - Khuyến mãi * Người dùng chọn **một Loại thông báo** từ danh sách bằng cách nhấp vào tên Loại thông báo mong muốn. * Sau khi chọn, thông báo sẽ tự động được lọc để chỉ hiển thị các thông báo có Loại thông báo được chọn. * Nếu muốn quay lại danh sách đầy đủ, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select). * Trường hợp không có Loại thông báo nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * Trường hợp bỏ chọn các Loại thông báo trong hộp chọn thì mặc định hiểu là chọn tất cả Loại thông báo để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder và Tootip: Chọn Loại thông báo để tìm kiếm |
| 3 | **Đối tượng** |  |  |  | * Trường này cho phép người dùng chọn một Đối tượng duy nhất từ danh sách có sẵn để lọc các thông báo có Đối tượng được chọn. * Trường tìm kiếm kèm theo chức năng lọc, hỗ trợ người dùng nhanh chóng tìm ra Đối tượng mong muốn bằng cách nhập một phần tên Đối tượng. * Khi người dùng bắt đầu nhập, một danh sách Đối tượng phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách Đối tượng bao gồm:   + - Tất cả     - Chức vụ     - Nhân viên * Người dùng chọn **một Đối tượng** từ danh sách bằng cách nhấp vào tên Đối tượng mong muốn. * Sau khi chọn, thông báo sẽ tự động được lọc để chỉ hiển thị các thông báo có Đối tượng được chọn. * Nếu muốn quay lại danh sách đầy đủ, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select). * Trường hợp không có Đối tượng nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * Trường hợp bỏ chọn các Đối tượng trong hộp chọn thì mặc định hiểu là chọn tất cả Đối tượng để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder và Tootip: Chọn Đối tượng để tìm kiếm |
| 4 | Trạng thái | Select box multichoice | Có | Không | * Trường này cho phép người dùng chọn trạng thái để lọc thông báo dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và chọn trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong thông báo. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:   + Khởi tạo   + Đang xử lý   + Đã gửi   + Thất bại  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách thông báo sẽ tự động được lọc để hiển thị những thông báo thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn tất cả trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder và Tootip: Chọn trạng thái để tìm kiếm |
| 5 | Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Thông báo, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các Thông báo mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Thông báo. 2. **Danh sách Thông báo làm mới:** Sau khi nhấp, danh sách sẽ hiển thị toàn bộ các Thông báo hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Thông báo. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| 6 | Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách Thông báo. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Thông báo theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Thông báo. 3. **Hiển thị kết quả:** Danh sách Thông báo sẽ cập nhật và hiển thị các Thông báo phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Thông báo sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
|  | Lưới danh sách | | | | |
| 7 | Mã thông báo | Datacolumn have copy | Có (copy mã) | Không | Mã của thông báo do hệ thống tạo tự động |
| 8 | Tiêu đề | Datacolumn | Không | Không | Tiêu đề của thông báo |
| 9 | Vùng áp dụng | Datacolumn | Không | Không | Danh sách vùng áp dụng thông báo |
| 10 | Đối tượng | Datacolumn | Không | Không | Đối tượng nhận thông báo: Tất cả, Chức vụ, Nhân viên |
| 11 | Loại thông báo | Datacolumn | Không | Không | Loại thông báo: Thông báo chung, Khuyến mãi |
| 12 | Tóm tắt thông báo | Datacolumn | Không | Không | Thông tin tóm tắt thông báo |
| 13 | Nội dung thông báo | Datacolumn link | Có | Không | Nội dung thông báo  Hiển thị link Xem chi tiết → khi click vào sẽ hiển thị chi tiết thông báo. |
| 14 | Kiểu hiển thị | Datacolumn | Không | Không | Kiểu hiển thị thông báo: Bình thường / Nổi bật |
| 15 | Trạng thái | Datacolumn | Không | Không | Khởi tạo, Đang xử lý, Đã gửi, Thất bại |
| 16 | Ngày tạo | Datacolumn | Không | Không | * Ngày tháng khi Thông báo này được thêm vào hệ thống. * Format: DD-MM-YYYY HH:MM:SS |
| 17 | Người tạo | Datacolumn have copy | Có (copy mã) | Không | * Hiển thị mã tài khoản của người dùng đã tạo ra Thông báo này. * Có thể copy mã tài khoản. |
| 18 | Ngày cập nhật | Datacolumn | Không | Không | * Ngày tháng của lần cập nhật gần nhất cho Thông báo này.  * Format: DD-MM-YYYY HH:MM:SS |
| 19 | Người cập nhật | Datacolumn have copy | Có (copy mã) | Không | * Hiển thị mã tài khoản người dùng đã thực hiện cập nhật cuối cùng cho Thông báo này. * Có thể copy mã tài khoản. |
| 20 | Tuỳ chỉnh | Button | Có | Không | **Chỉnh sửa**:   * Ở trạng thái khởi tạo có thể chỉnh sửa tất cả các trường của thông báo * Ở các trạng thái khác, button chỉnh sửa sẽ ẩn đi.  ---   **Gửi thông báo:**  Trường này cho phép người dùng gửi thông báo đã được tạo đến ứng dụng di động (App QL, App SM). Khi nhấn vào nút "Gửi", hệ thống sẽ thực hiện các bước xử lý như sau:   * **Xác nhận gửi**: Hiển thị hộp thoại xác nhận trước khi gửi. Bạn có muốn gửi thông báo này không?    + **Đồng ý**:     - Thực hiện gửi thông báo đến các đối tượng đã được cài đặt trong thông báo.     - Trạng thái của thông báo sẽ chuyển từ "Khởi tạo" sang "Đang xử lý" để gửi tiến hành gửi thông báo đi.     - Sau khi đã gửi đủ cho các đối tượng trong thông báo, thông báo sẽ chuyển từ trạng thái "Đang xử lý" sang "Đã gửi".     - Trường hợp có lỗi xảy ra,  thông báo sẽ chuyển từ trạng thái "Đang xử lý" sang "Thất bại".   + **Trở lại**: Đóng popup và quay về màn hình hiện tại, không thực hiện bất cứ thao tác nào. |

# Tạo mới thông báo

| Tên trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- |
| Tiêu đề | Textbox (200) | Có | Có | Tiêu đề của thông báo |
| Vùng áp dụng | Selectbox Multi Choice | Có | Có | Dữ liệu vùng được lấy từ màn hình Phân Vùng   * Trường này cho phép người dùng chọn nhiều vùng cùng lúc để cài đặt cho Thông báo. * Dựa vào thông tin vùng ở trường này để gửi thông báo đến các nhân viên có Vùng mà Thông báo đã cài đặt   + Nhân viên không cài đặt vùng thì sẽ lấy phân vùng của cấp quản lý.   + Phân vùng của nhân viên được cài đặt ở [[HO] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357)   + Thông báo được gửi đến App QL và App SM cho từng nhân viên trong phân vùng được chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều vùng từ danh sách có sẵn để để cài đặt cho Thông báo. * **Mở danh sách:** Khi người dùng nhấp vào trường **Vùng**, một danh sách các vùng sẽ được mở ra dưới dạng phân cấp (tree), dữ liệu lấy từ màn hình Phân vùng * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm vùng mong muốn. Sau đó, họ có thể chọn một hoặc nhiều vùng bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Các vùng đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags).    + Nếu chọn Vùng sẽ hiển thị Vùng, nếu chọn Khu vực sẽ hiển thị khu vực * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn vùng không mong muốn. * Trường hợp bỏ chọn toàn bộ các vùng trong hộp chọn thì mặc định hiểu là **chưa chọn vùng nào.** * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Đối tượng | Selectbox One Choice | Có | Có | * Trường này cho phép người dùng chọn một Đối tượng duy nhất từ danh sách có sẵn để cài đặt cho thông báo. * Khi người dùng chọn vào trường này, một danh sách Đối tượng phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách Đối tượng bao gồm:   + Tất cả   + Chức vụ   + Nhân viên * Người dùng chọn **một Đối tượng** từ danh sách bằng cách nhấp vào tên Đối tượng mong muốn. * Sau khi chọn, tùy từng đối tượng được chọn sẽ hiển thị thêm các trường dữ liệu khác để người dùng nhập liệu cho đối tượng được chọn. Nội dung sẽ được mô tả ở Cài đặt đối tượng cho thông báo * Nếu muốn bỏ chọn đối tượng, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select). * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder và Tootip: Chọn Đối tượng để cài đặt thông báo |
| Loại thông báo | Selectbox One Choice | Có | Có | * Trường này cho phép người dùng chọn một Loại thông báo duy nhất từ danh sách có sẵn để cài đặt cho thông báo. * Khi người dùng chọn vào trường này, một danh sách Loại thông báo phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách Loại thông báo bao gồm:   + Thông báo chung   + Khuyến mãi * Người dùng chọn **một Loại thông báo** từ danh sách bằng cách nhấp vào tên Loại thông báo mong muốn. * Sau khi chọn, tùy từng Loại thông báo được chọn sẽ nhận biết hiển thị khác nhau trên App. * Nếu muốn bỏ chọn Loại thông báo, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select). * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder và Tootip: Chọn Loại thông báo để cài đặt thông báo |
| Tóm tắt thông báo | Text area (200) | Có | Có | Nhập nội dung tóm tắt cho thông báo để hiển thị nhanh thông báo trên App  Tối đa 200 ký tự |
| Nội dung thông báo | HTML Editor | Có | Có | Soạn thảo nội dung thông báo hỗ trợ HTML, có thể bao gồm văn bản định dạng, hình ảnh, liên kết, file đính kèm và các yếu tố tùy chỉnh khác. Người dùng có thể nhập trực tiếp hoặc dán nội dung từ nguồn khác. |
| Kiểu hiển thị | Selectbox One Choice | Có | Có | * Trường này cho phép người dùng chọn một Kiểu hiển thị duy nhất từ danh sách có sẵn để cài đặt cho thông báo. * Khi người dùng chọn vào trường này, một danh sách Kiểu hiển thị phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách Kiểu hiển thị bao gồm:   + Bình thường   + Nổi bật * Người dùng chọn **một Kiểu hiển thị** từ danh sách bằng cách nhấp vào tên Kiểu hiển thị mong muốn. * Sau khi chọn, tùy từng Kiểu hiển thị được chọn sẽ được hiển thị khác nhau trên App.   + Bình thường: Hiển thị trong mục Thông báo   + Nổi bật: Nổi lên trên màn hình * Nếu muốn bỏ chọn Kiểu hiển thị, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select). * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder và Tootip: Chọn Kiểu hiển thị để cài đặt thông báo |
| Gửi tự động | Checkbox  Mặc định uncheck | Có | Không | * Khi không check vào trường này: Thì sau khi tạo thông báo, người dùng phải thực hiện gửi thông báo thủ công * Khi check vào trường này    + Trường dữ liệu chọn ngày/tháng/năm giờ/phút sẽ hiện ra, người dùng chọn thời gian gửi thông báo   + Đến đúng thời gian gửi thông báo, hệ thống sẽ tự động gửi thông báo đến các đối tượng được cài đặt, sau khi gửi xong sẽ tự động chuyển trạng thái   + Ngày giờ được chọn phải > ngày, giờ hiện tại. Người dùng chọn nhỏ hơn sẽ hiển thị thông báo: Vui lòng chọn thời gian lớn hơn thời gian hiện tại. |
| Lưu | Button | Có | Không | Sau khi người dùng đã nhập đầy đủ thông tin, button này sẽ lưu lại thông báo mới vào hệ thống.   * Các trường bắt buộc phải được nhập đầy đủ trước khi lưu thông tin. * Khi nhấn Lưu hiển thị thông báo: Bạn có muốn lưu thông tin không?   + Đồng ý:     - Lưu thông tin thông báo     - Tạo ra mã Thông báo với quy tắc: NOTI+10 ký tự số random.   + Hủy: Đóng popup và quay về màn hình hiện tại. |
| Button X | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. * Nếu màn hình đang có dữ liệu chưa lưu, hiển thị cảnh báo: "Màn hình đang có dữ liệu, bạn có muốn đóng?"   + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |

## Cài đặt đối tượng cho Thông Báo Apply\_For

### Đối tượng = Tất cả

Khi người dùng chọn Đối tượng này, thì tất cả nhân viên trong Vùng được chọn sẽ nhận được thông báo.

### Đối tượng = Chức vụ

Khi người dùng chọn Đối tượng này, một trường selectbox sẽ hiển thị trên màn hình

* Trường này cho phép người dùng chọn Chức vụ  từ danh sách có sẵn để cài đặt cho thông báo.
* Khi người dùng chọn vào trường này, một danh sách Chức vụ phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách Chức vụ bao gồm:
  + SD - Giám đốc toàn quốc
  + RSM - Quản lý vùng
  + ASM - Quản lý khu vực
  + SS - Giám sát bán hàng
  + SM - Nhân viên bán hàng
* Người dùng có thể chọn nhiều **Chức vụ** từ danh sách bằng cách nhấp vào tên Chức vụ mong muốn.
* Sau khi chọn, tùy từng Chức vụ được chọn sẽ nhận được thông báo.
  + SD - Giám đốc toàn quốc: Chỉ SD mới nhận được thông báo
  + RSM - Quản lý vùng: Chỉ SD của vùng được cài đặt mới nhận được thông báo
  + ASM - Quản lý khu vực: Chỉ ASM của vùng được cài đặt mới nhận được thông báo
  + SS - Giám sát bán hàng: Chỉ SS của vùng được cài đặt mới nhận được thông báo
  + SM - Nhân viên bán hàng: Chỉ SM của vùng được cài đặt mới nhận được thông báo
* Trường hợp chọn nhiều chức vụ thì các chức vụ của vùng được cài đặt mới nhận được thông báo
* Bắt buộc phải chọn chức vụ khi chọn đối tượng = Chức vụ

* Nếu muốn bỏ chọn Chức vụ, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select).
* Nếu không chọn Chức vụ nào trong hộp chọn, thì được hiểu là chưa chọn Chức vụ.
* Khi selectbox xuất hiện mặc định không chọn dữ liệu nào trong hộp chọn.
* Placeholder và Tootip: Chọn Chức vụ để cài đặt thông báo

### Đối tượng = Nhân viên

Khi người dùng chọn Đối tượng này, một lưới danh sách sẽ hiển thị trên màn hình để người dùng chọn nhân viên cụ thể được nhận thông báo

Chỉ có những nhân viên được thêm trong danh sách dưới đây mới nhận được thông báo

* Tìm kiếm: Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên
* Tootip: Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên

| Trường | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Mã nhân viên | Datacolumn have copy | Hiển thị mã nhân viên được chọn để gửi thông báo |
| Tên nhân viên | Datacolumn | Hiển thị tên nhân viên được chọn để gửi thông báo |
| Quản lý trực tiếp | Datacolumn have copy | Thông tin người quản lý trực tiếp của nhân viên |
| Số điện thoại | Datacolumn | Số điện thoại của nhân viên |
| Chức vụ | Datacolumn | Chức vụ của nhân viên |
| Trạng thái | Datacolumn | Trạng thái của nhân viên |
| Tùy chỉnh | Button | button xóa cho phép click để xóa nhân viên ra khỏi lưới danh sách; khi chọn click, line dữ liệu trên lưới mất đi.  Và khi chọn "Thêm" => màn hình filter dữ liệu nhân viên vừa xóa sẽ không hiển thị dấu check chọn  Trường hợp import thêm nhân viên sẽ check các role theo chức năng import |
| Xóa tất cả n nhân viên | link | Hiển thị link text "Xóa tất cả n nhân viên" trong đó n là tất cả các nhân viên trên tất cả các page được phép xóa (Những line được xóa sẽ hiển thị icon "Xóa", n là tổng các line có icon xóa) |

THÊM NHÂN VIÊN

* Nhấn Thêm để chọn Add nhân viên → hiển thị màn hình popup để thêm nhân viên hoặc Nhấn button "Import Excel"  để thêm nhân viên

#### **Nhấn button Thêm :**

* Mặc định mở màn hình rỗng
* Khi chọn Button "Tìm kiếm" - chưa chọn bất kì dữ liệu lọc nào => Hiểu là search tất cả => hiển thị all danh sách trên lưới
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
| 2 | Quản lý trực tiếp | select box onechoice | Có | Không | Chọn Quản lý trực tiếp để tìm kiếm nhân viên cấp dưới của quản lý trực tiếp V1.0.1  "Quản lý trực tiếp": dùng để lọc nhân viên dựa trên người quản lý trực tiếp của họ. Khi chọn một quản lý trong danh sách (Danh sách Quản lý trực tiếp load từ màn hình quản lý nhân viên **role SD; RSM; ASM và SS (đang active)**), hệ thống sẽ hiển thị những nhân viên được quản lý bởi người đó.   * Placeholder: Chọn quản lý trực tiếp * Người dùng có thể tìm kiếm và chọn một "Quản lý trực tiếp" từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách nhân viên * **Mở danh sách:** Khi người dùng nhấp vào trường "Quản lý trực tiếp", một danh sách các Quản lý trực tiếp sẽ được mở ra. Danh sách Quản lý trực tiếp load từ màn hình quản lý nhân viên **role SD; RSM; ASM và SS (đang active)**), * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm quản lý trực tiếp mong muốn. Sau đó, họ có thể chọn một "Quản lý trực tiếp" bằng cách nhấp vào một mục trong danh sách. * Khi người dùng chọn "Quản lý trực tiếp": Hệ thống sẽ tìm kiếm và hiển thị các nhân viên thuộc Quản lý trực tiếp đã chọn * **Hiển thị lựa chọn:** Quản lý trực tiếp đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * **Kết quả lọc:** Danh sách nhân viên sẽ tự động được lọc để hiển thị những nhân viên thuộc Quản lý trực tiếp đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Quản lý trực tiếp không mong muốn. * Trường hợp bỏ chọn Quản lý trực tiếp trong hộp chọn thì mặc định hiểu là chọn tất cả các Quản lý trực tiếp để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Chỉ load những nhân viên **role SD; RSM; ASM và SS** có trạng thái Active |
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

* Format tên file mẫu: IMPORT\_NOTIFICATION\_USERS\_DD-MM-YYYY

**Templates:**

| Mã nhân viên ( \* ) | Tên nhân viên |
| --- | --- |
| NV0103827398 | Nguyễn Văn A1 |
| NV0103827399 | Nguyễn Văn A2 |
| NV0103827400 | Nguyễn Văn  A3 |

**Mô tả dữ liệu**

| Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- |
| Mã nhân viên (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập mã nhân viên muốn thêm vào Thông báo | Mã nhân viên nhập không đúng định dạng (Ký tự đặc biệt; khoảng trắng ở trước-trong-sau mã; chữ tiếng việt có dấu), để trống (nếu để trống nguyên 1 line → bỏ qua; để trống @field → báo mess), không tồn tại trên hệ thống DMS   * Hiển thị thông báo lỗi: Dòng thứ @n: Mã nhân viên nhập không đúng định dạng/ không tồn tại/ không hoạt động/ bị bỏ trống. Vui lòng kiểm tra lại!   Mã nhân viên không được trùng trong file import, nếu trùng hiển thị thông báo lỗi: Dòng thứ @n: Mã nhân viên bị trùng lắp. Vui lòng kiểm tra lại! (Chỉ cần hiển thị dòng đầu tiên trùng) |
| Tên nhân viên | Nhập ký tự tự do | * Nhập tên nhân viên muốn thêm vào Thông báo | * Thông tin tên nhân viên chỉ để user thực hiện tham chiếu trước khi import, khi import chỉ lấy thông tin mã nhân viên. |

**Trường hợp import thành công:**

→ Nhấn X → Tắt popup và hiển thị danh sách nhân viên đã import vào màn hình tạo Thông báo

Trường hợp import lỗi:

Hiển thị các dòng lỗi để user điều chỉnh

* Hiển thị tất cả dòng lỗi và có phân trang.  sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi.
* Nếu nhấn X sẽ không thêm bất cứ dữ liệu import nào vào màn hình tạo Thông báo.