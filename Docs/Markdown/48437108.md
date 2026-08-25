|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-1269] [USER][PORTAL] Bỏ nhóm quyền Promotion ra khỏi chức năng Tài khoản người dùng - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-1269) |
| Epic | [[ECDM-138] USER\_ACCOUNT - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-138) |
| Feature |  |
| Description | Màn hình quản lý tài khoản người dùng sử dụng trên web |
| Document version | RedV1.0.1: Thay đổi UI cấu hình quyền và nhóm quyền  RedV1.0.2:   * Màn hình Create/Edit/Detail: Chỉ hiển thị 1 field Vùng: Chọn vùng hiển thị vùng, chọn khu vực hiển thị khu vực lên selelecbox.  * Các màn hình danh sách, export, import sẽ hiển thị 2 cột Vùng, Khu vực.   RedV1.0.3: Khi import user chỉ nhập vùng, không nhập khu vực thì sẽ lưu luôn khu vực.  RedV1.0.4: Bỏ nhóm quyền promotion ra khỏi chức năng tài khoản người dùng do promotion làm chung trên portal DMS.  RedV1.0.5: Thêm lưu lịch sử cho Quyền HO/Quyền NPP, Vai trò tài khoản thị trường |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Danh Sách Tài Khoản Người Dùng

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm | | | | |
| Tài khoản người dùng | Text Filed | Có | Không | Cho phép nhật text tìm kiếm tài khoản người dùng theo mã tài khoản, tên tài khoản, sđt tài khoản, email tài khoản, mã tham chiếu tài khoản.   * Tooltip: Tìm kiếm theo mã tài khoản, tên tài khoản, sđt tài khoản, email tài khoản, mã tham chiếu tài khoản. * Placeholder: Tìm kiếm theo mã tài khoản, tên tài khoản, sđt tài khoản, email tài khoản, mã tham chiếu tài khoản. * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các Tài khoản người dùng có thông tin được nhập trong ô này. |
| Nhóm quyền HO | Selectbox multichoice | Có | Không | Chọn nhóm quyền HO để tìm kiếm tài khoản người dùng, dữ liệu lấy từ danh sách nhóm quyền từ SSO, với loại role là Người dùng HO   * Trường này cho phép người dùng chọn nhiều nhóm quyền cùng lúc để lọc danh sách tài khoản dựa trên các nhóm quyền đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều nhóm quyền từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách tài khoản. * **Mở danh sách:** Khi người dùng nhấp vào trường **Nhóm quyền**, một danh sách các nhóm quyền sẽ được mở ra, dữ liệu lấy từ danh sách nhóm quyền từ SSO,  với loại role là Người dùng HO * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhóm quyền mong muốn. Sau đó, họ có thể chọn một hoặc nhiều nhóm quyền bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Các nhóm quyền đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags) hoặc danh sách ngăn cách bởi dấu phẩy. * **Kết quả lọc:** Danh sách tài khoản sẽ tự động được lọc để hiển thị những tài khoản thuộc các nhóm quyền đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn nhóm quyền không mong muốn. * Trường hợp bỏ chọn toàn bộ các nhóm quyền trong hộp chọn thì mặc định hiểu là chọn tất cả nhóm quyền để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Nhóm quyền NPP | Selectbox multichoice | Có | Không | Chọn nhóm quyền NPP để tìm kiếm tài khoản người dùng, dữ liệu lấy từ danh sách nhóm quyền từ SSO, với loại role là Người dùng NPP   * Trường này cho phép người dùng chọn nhiều nhóm quyền cùng lúc để lọc danh sách tài khoản dựa trên các nhóm quyền đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều nhóm quyền từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách tài khoản. * **Mở danh sách:** Khi người dùng nhấp vào trường **Nhóm quyền**, một danh sách các nhóm quyền sẽ được mở ra, dữ liệu lấy từ danh sách nhóm quyền từ SSO,  với loại role là Người dùng NPP * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhóm quyền mong muốn. Sau đó, họ có thể chọn một hoặc nhiều nhóm quyền bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Các nhóm quyền đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags) hoặc danh sách ngăn cách bởi dấu phẩy. * **Kết quả lọc:** Danh sách tài khoản sẽ tự động được lọc để hiển thị những tài khoản thuộc các nhóm quyền đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn nhóm quyền không mong muốn. * Trường hợp bỏ chọn toàn bộ các nhóm quyền trong hộp chọn thì mặc định hiểu là chọn tất cả nhóm quyền để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| ~~Nhóm quyền Promotion~~ | ~~Selectbox multichoice~~ | ~~Có~~ | ~~Không~~ | RedV1.0.4: Bỏ nhóm quyền promotion ra khỏi chức năng tài khoản người dùng do promotion làm chung trên portal DMS. |
| Tài khoản thị trường | Text Field | Có | Không | Cho phép nhật text tìm kiếm tài khoản người dùng theo tài khoản thị trường   * Tooltip: Tìm kiếm theo mã tài khoản thị trường, tên tài khoản thị trường, sđt tài khoản thị trường, email tài khoản thị trường, mã tham chiếu tài khoản thị trường. * Placeholder: Tìm kiếm theo mã tài khoản thị trường, tên tài khoản thị trường, sđt tài khoản thị trường, email tài khoản thị trường, mã tham chiếu tài khoản thị trường. * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các Tài khoản người dùng có thông tin tài khoản thị trường được nhập trong ô này. |
| Trạng thái | Selectbox onechoice | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc danh sách tài khoản dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và chọn một trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách tài khoản. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:   + Hoạt động   + Không hoạt động  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách tài khoản sẽ tự động được lọc để hiển thị những tài khoản thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách tài khoản, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các tài khoản mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách tài khoản. 2. **Danh sách tài khoản làm mới:** Sau khi nhấp, danh sách tài khoản sẽ hiển thị toàn bộ các tài khoản hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách tài khoản. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách tài khoản. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách tài khoản theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách tài khoản. 3. **Hiển thị kết quả:** Danh sách tài khoản sẽ cập nhật và hiển thị các tài khoản phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách tài khoản sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| Lưới danh sách | | | | |
| Button Import | Button | Có | Không | Sẽ được mô tả ở chức năng Import Tài Khoản Người Dùng |
| Button Export Excel | Button | Có | Không | Sẽ được mô tả ở chức năng Export Tài Khoản Người Dùng |
| Ảnh | Image | Không | Không | Hiển thị ảnh đại diện của tài khoản |
| Mã tài khoản | Datacolumn have copy | Không | Không | Mã định danh của tài khoản trong hệ thống cũng là thông tin đăng nhập của tài khoản |
| Mã tham chiếu | Datacolumn have copy | Không | Không | Mã tham chiếu liên quan tới tài khoản |
| Tên tài khoản | Datacolumn link | Không | Không | Tên đầy đủ của tài khoản  Click vào hiển thị màn hình chi tiết tài khoản như sau:    Chỉ được view thông tin, không chỉnh sửa bất cứ thông tin nào. |
| Vùng | Datacolumn have copy | Không | Không | Vùng quản lý dữ liệu của tài khoản |
| RedV1.0.2Khu vực | Datacolumn have copy | Không | Không | Khu vực quản lý dữ liệu của tài khoản |
| Nhà phân phối chăm sóc | Datacolumn have copy | Không | Không | Nhà phân phối chăm sóc của tài khoản  Trường hợp NPP bị inactive, ở đây vẫn hiển thị thông tin NPP. |
| Số điện thoại | Datacolumn have copy | Không | Không | Số điện thoại liên hệ của tài khoản |
| Email | Datacolumn | Không | Không | Email liên hệ của tài khoản |
| Nhóm quyền HO | Datacolumn | Không | Không | Nhóm quyền HO của tài khoản |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Nhóm quyền NPP | Datacolumn | Không | Không | Nhóm quyền NPP của tài khoản |
| ~~Nhóm quyền Promotion~~ | ~~Datacolumn~~ | ~~Không~~ | ~~Không~~ | RedV1.0.4: Bỏ nhóm quyền promotion ra khỏi chức năng tài khoản người dùng do promotion làm chung trên portal DMS. |
| Tài khoản thị trường | Datacolumn | Không | Không | Tài khoản người dùng có liên kết với tài khoản trên thị trường |
| Đăng nhập gần nhất | Datacolumn | Không | Không | Ngày giờ lần cuối tài khoản đăng nhập vào hệ thống trên web.  Format: DD-MM-YYYY HH:MM:SS |
| Người tạo | Datacolumn | Không | Không | * Hiển thị mã tài khoản của người dùng đã tạo ra bản ghi tài khoản này. |
| Người cập nhật | Datacolumn | Không | Không | * Hiển thị mã tài khoản người dùng đã thực hiện cập nhật cuối cùng cho tài khoản. |
| Ngày tạo | Datacolumn | Không | Không | * Ngày tháng khi tài khoản được thêm vào hệ thống. * Format: DD:MM:YYYY HH:MM:SS |
| Ngày cập nhật | Datacolumn | Không | Không | * Ngày tháng của lần cập nhật gần nhất cho thông tin tài khoản.  * Format: DD:MM:YYYY HH:MM:SS |
| Trạng thái | Toggle | Có | Không | **Mô tả tổng quan:** Toggle trạng thái cho phép người dùng dễ dàng chuyển đổi giữa hai trạng thái "Hoạt động" và "Ngưng hoạt động" của tài khoản. Khi người dùng nhấp vào toggle, trạng thái hiện tại của tài khoản sẽ thay đổi ngay lập tức, và hệ thống sẽ phản ánh sự thay đổi này trong cơ sở dữ liệu cũng như giao diện người dùng.  **Chi tiết hoạt động:**   1. **Kích hoạt:** Người dùng nhấp vào toggle trạng thái trên giao diện. 2. **Chuyển đổi trạng thái:** Khi toggle được nhấp, hệ thống hiển thị cảnh báo:      * + - Đồng ý: trạng thái của tài khoản sẽ thay đổi từ "Hoạt động" sang "Không hoạt động" hoặc ngược lại.     - Hủy: Đóng cảnh báo và giữ nguyên trạng thái tài khoản.  1. * **Trạng thái Hoạt động:** Tài khoản đang được sử dụng trong hệ thống.    * **Trạng thái Không hoạt động:**      + Tài khoản không còn được sử dụng trong hệ thống nhưng vẫn được lưu trữ trong cơ sở dữ liệu để theo dõi lịch sử hoặc kích hoạt lại sau này.      + Các dữ liệu giao dịch liên quan đến tài khoản như vẫn hiển thị dữ liệu tài khoản. 2. **Cập nhật giao diện:**Giao diện người dùng sẽ hiển thị ngay trạng thái mới của tài khoản bằng cách thay đổi màu sắc hoặc nhãn trên toggle. 3. **Ghi nhận thay đổi:** Hệ thống sẽ cập nhật cơ sở dữ liệu với trạng thái mới của tài khoản, đảm bảo rằng các thao tác liên quan đến tài khoản này sẽ tuân theo trạng thái mới.   **Yêu cầu hệ thống:**   * Hệ thống phải thực hiện kiểm tra quyền truy cập để đảm bảo rằng chỉ những người dùng có quyền hợp lệ mới có thể thay đổi trạng thái. * Trạng thái phải được đồng bộ hóa ngay lập tức trong cơ sở dữ liệu để đảm bảo tính nhất quán của dữ liệu.   **Quy trình nghiệp vụ:**   1. Người dùng xác định tài khoản muốn thay đổi trạng thái. 2. Nhấp vào toggle trạng thái tương ứng. 3. Hệ thống chuyển đổi trạng thái tài khoản và cập nhật trạng thái mới trên giao diện. 4. Các thao tác tiếp theo với tài khoản này sẽ tuân theo trạng thái mới. |
| Button Tùy Chỉnh: Có các button sau:  * Sao chép * Chỉnh sửa * Cấp lại mật khẩu | | | | |
| **Sao chép** | Button | Có | Không | **Mô tả tổng quan:** Button "Sao chép" cho phép người dùng nhanh chóng tạo một bản sao của một tài khoản hiện có trong danh sách tài khoản. Khi người dùng nhấp vào button này, màn hình Thêm mới tài khoản sẽ mở ra, trong đó tất cả các thông tin của tài khoản gốc sẽ được sao chép sang tài khoản mới, ngoại trừ các trường thông tin **Mã tài khoản**, giúp tiết kiệm thời gian nhập liệu và đảm bảo tính nhất quán của dữ liệu.  **Mục đích và lợi ích:**   * **Mục đích:** Hỗ trợ người dùng trong việc quản lý danh sách tài khoản bằng cách cung cấp công cụ nhanh chóng để sao chép và điều chỉnh tài khoản, đặc biệt hữu ích khi cần tạo nhiều tài khoản với thông tin tương tự nhau. * **Lợi ích:** Giảm thiểu sai sót khi nhập liệu thủ công, tăng hiệu suất công việc, và đảm bảo tính nhất quán của dữ liệu.   **Chi tiết hoạt động:**   1. **Kích hoạt:** Khi người dùng nhấp vào button "Sao chép tài khoản", hệ thống sẽ mở một form mới chứa thông tin đã sao chép từ tài khoản gốc. 2. **Tự động điền:** Các trường thông tin từ tài khoản gốc ngoại trừ **Mã tài khoản** sẽ tự động điền vào form mới. 3. **Chỉnh sửa:** Người dùng có thể chỉnh sửa các thông tin cần thiết trên form mới trước khi lưu lại. 4. **Lưu tài khoản mới:** Khi hoàn tất, người dùng có thể lưu lại tài khoản mới.   **Quy trình nghiệp vụ:**   1. Người dùng tìm tài khoản muốn sao chép từ danh sách tài khoản. 2. Nhấp vào button "Sao chép". 3. Chỉnh sửa thông tin tài khoản mới nếu cần thiết. 4. Lưu tài khoản mới vào danh sách. |
| **Chỉnh sửa** | Button | Có | Không | Sẽ được mô tả ở mục Chỉnh sửa tài khoản |
| Cấp lại mật khẩu | Button | Có | Không | Sẽ được mô tả ở mục Cấp lại mật khẩu |

Chi tiết tài khoản người dùng Detail\_User

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Ảnh | Image | Không | N/A | Hiển thị ảnh đại diện của tài khoản |
| Mã tài khoản | Textbox disabled | Không | N/A | Mã định danh của tài khoản trong hệ thống cũng là thông tin đăng nhập của tài khoản  Có thể copy |
| Tên tài khoản | Textbox disabled | Không | N/A | Tên đầy đủ của tài khoản |
| Mã tham chiếu | Textbox disabled | Không | N/A | Mã tham chiếu liên quan tới tài khoản |
| Email | Textbox disabled | Không | N/A | Email liên hệ của tài khoản |
| Số điện thoại | Textbox disabled | Không | N/A | Số điện thoại liên hệ của tài khoản  Có thể copy |
| Giới tính | Textbox disabled | Không | N/A | Giới tính của tài khoản |
| Tỉnh/Thành Phố | Textbox disabled | Không | N/A | Thông tin Tỉnh/Thành Phố của tài khoản |
| Quận/Huyện | Textbox disabled | Không | N/A | Thông tin Quận/Huyện của tài khoản |
| Phường/Xã | Textbox disabled | Không | N/A | Thông tin Phường/Xã của tài khoản |
| Địa chỉ | Textbox disabled | Không | N/A | Thông tin địa chỉ của tài khoản |
| Nhóm quyền HO | Textbox disabled | Không | N/A | Nhóm quyền HO của tài khoản |
| Nhóm quyền NPP | Textbox disabled | Không | N/A | Nhóm quyền NPP của tài khoản |
| ~~Nhóm quyền Promotion~~ | ~~Textbox disabled~~ | ~~Không~~ | ~~N/A~~ | RedV1.0.4: Bỏ nhóm quyền promotion ra khỏi chức năng tài khoản người dùng do promotion làm chung trên portal DMS. |
| Vùng | Label | Không | N/A | Vùng, khu vực quản lý dữ liệu của tài khoản |
| Nhà phân phối chăm sóc | Label | Không | N/A | Nhà phân phối chăm sóc tài khoản của tài khoản  Trường hợp NPP bị inactive, ở đây vẫn hiển thị thông tin NPP. |
| Tài khoản thị trường | Textbox disabled | Không | N/A | Tài khoản người dùng có liên kết với tài khoản trên thị trường |

# Lịch sử tài khoản người dùng History\_User

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Chọn thời gian xem lịch sử (Tối đa 31 ngày) | Date | Có | Có | * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn  * Đến Ngày >= Từ Ngày * Đến Ngày - Từ Ngày <= 31 ngày * Có thể chọn bất kỳ khoảng thời gian nào, miễn là  Đến Ngày - Từ Ngày <= 31 ngày (Lượng data history sẽ được lưu trữ từ 1-3 năm tùy theo hợp đồng từng công ty) |
| Export | Button | Có | Có | Nhấn Export → Hệ thống Export ra file excel   Phải chọn đủ từ ngày - đến ngày mới được nhấn Export, trường hợp chưa chọn đủ Từ ngày - Đến ngày mà bấm Export, sẽ hiển thị thông báo: Vui lòng chọn thời gian để xem lịch sử!  Tên File Excel như sau: HIS\_USER\_DDMMYYYYHHMMSS |

Template Excel như sau:

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Màn hình | * Tên màn hình mà người dùng xuất dữ liệu lịch sử * Màn hình: Tài khoản người dùng |
| Dữ liệu theo thời gian | * Thời gian từ ngày - đến ngày mà người dùng lọc trước khi xuất file báo cáo lịch sử |
| Thời gian xuất báo cáo | * Thời gian xuất báo cáo lịch sử  thành công |
| Người xuất báo cáo | * User thực hiện xuất báo cáo lịch sử  * Mã user - Tên user |
|  |  |
| Mã ghi nhận lịch sử | Mã ghi nhận lịch sử trong 1 lần cập nhật  Format mã: ACCOUNT\_13 ký tự timestamp |
| Thời gian ghi nhận | * Thời gian thực hiện cập nhật dữ liệu được hệ thống ghi nhận lịch sử.  * Format DD-MM-YYYY hh:mm:ss |
| Đối tượng chính | Thông tin đối tượng trên màn hình chức năng được ghi nhận lịch sử  Ở đây sẽ là **Tài khoản người dùng** |
| Mã đối tượng chính | **Mã Tài khoản** |
| Trường dữ liệu | Thông tin trường dữ liệu có ghi nhận lịch sử |
| Thao tác | * Thao tác ghi nhận lịch sử: * **Cập nhật**:  * + Mật khẩu     - Hiển thị dưới dạng "\*" và không cho xem     - Lưu ý cũng log history cho trường hợp nhân viên tự đổi mật khẩu trên App Salesman   + Mã tham chiếu   + Tài khoản thị trường   + Tên tài khoản   + Email   + Giới tính   + Sđt liên hệ   + Tỉnh/Thành Phố   + Quận/Huyện   + Phường/Xã   + Ảnh đại diện   + RedV1.0.5 Quyền HO   + RedV1.0.5 Quyền NPP   + RedV1.0.5 Vai trò tài khoản thị trường   + Nhóm quyền HO   + Nhóm quyền NPP   + ~~Nhóm quyền Promotion:~~ RedV1.0.4: Bỏ nhóm quyền promotion ra khỏi chức năng tài khoản người dùng do promotion làm chung trên portal DMS.   + Nhà phân phối chăm sóc   + Vùng   + Khu vực   + Trạng thái |
| Dữ liệu cũ | Thông tin dữ liệu cũ trước khi được cập nhật   * **Trường hợp cập nhật Thêm mới: Trường này sẽ ko có thông tin**  * Nếu dữ liệu dạng ảnh, ở đây sẽ là link có thể mở hình để xem |
| Dữ liệu mới | Thông tin dữ liệu mới sau khi được cập nhật   * **Trường hợp cập nhật Xóa: Trường này sẽ ko có thông tin (Chỉ xóa trên màn hình, không xóa trên database)**  * Nếu dữ liệu dạng ảnh, ở đây sẽ là link có thể mở hình để xem |
| Mã Người thực hiện | * User thực hiện cập nhật dữ liệu  * Mã user |
| Tên người thực hiện | * User thực hiện cập nhật dữ liệu  * Tên user |
| Nguồn cập nhật | Nguồn cập nhật sẽ gồm các nguồn sau:   * Web Portal DMS |

# Tạo mới tài khoản người dùng Create\_User

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Ảnh tài khoản | Image Upload | Có | Không | Định dạng ảnh cho phép: JPG, PNG, JPEG, SVG. Kích thước ảnh tối đa: 5MB.  Sau khi upload có thể xem lại hình ảnh hoặc xóa hình ảnh |
| Mã tài khoản | Text (100) | Có | Có | User nhập mã tài khoản, cũng là tên đăng nhập vào hệ thống, không nhập khoảng trắng,  không nhập tiếng việt có dấu, không nhập ký tự đặc biệt ngoại trừ "\_"  Mã phải là duy nhất trong hệ thống, không được phép trùng cho dù khác công ty.  Mã cũng không được trùng với mã nhân viên tại chức năng [[Portal HO][DMS] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357)  Trường hợp trùng mã tài khoản hiển thị thông báo: Mã tài khoản đã tồn tại, vui lòng thử lại!  Trường hợp Mã  tài khoản trùng với mã nhân viên: "Mã tài khoản đang tạo trùng với Mã nhân viên, vui lòng kiểm tra lại!"  Tooltip: Mã tài khoản, cũng là tên đăng nhập vào hệ thống.  Khi nhập liệu hệ thống tự động viết hoa các ký tự trong ô nhập liệu. |
| Tên tài khoản | Text (100) | Có | Có | User nhập thông tin tên tài khoản |
| Mật khẩu | Password (30) | Có | Có | * Mô tả: Cho phép user nhập mật khẩu cho tài khoản người dùng * Yêu cầu bảo mật:    + Độ dài tối thiểu: 8 ký tự.   + Mật khẩu phải bao gồm ít nhất một chữ cái in hoa, một chữ cái in thường, một chữ số và một ký tự đặc biệt (ví dụ: @, #, $). |
| Mã tham chiếu | Text (100) | Có | Không | User nhập mã tham chiếu nhân viên (nếu có) |
| Email | Email (100) | Có | Không | User nhập thông tin email  Format đúng dạng email  Có thể trùng email giữa các tài khoản |
| Số điện thoại liên hệ | Phone Number (10) | Có | Không | User nhập thông tin số điện thoại  Có thể trùng số điện thoại giữa các tài khoản |
| Giới tính | Selectbox One Choice | Có | Không | Chọn từ các giá trị cố định: Nam, Nữ, Khác. |
| Tỉnh/Thành Phố | Selectbox One Choice | Có | Không | Người dùng chọn tỉnh/thành phố từ danh sách để nhập thông tin địa chỉ của tài khoản. Danh sách Tỉnh/thành phố lấy theo danh sách của địa lý Việt Nam  Khi người dùng chọn một tỉnh/thành phố, các trường "Quận/Huyện" và "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc tỉnh/thành phố đó. |
| Quận/Huyện | Selectbox One Choice | Có | Không | Người dùng có thể chọn quận/huyện từ danh sách để nhập thông tin địa chỉ của tài khoản. Danh sách quận/huyện lấy theo danh sách của địa lý Việt Nam Khi người dùng chọn một quận/huyện, trường "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc quận/huyện đó.  Trường "Quận/Huyện" chỉ có dữ liệu sau khi người dùng đã chọn một Tỉnh/thành phố. |
| Phường/Xã | Selectbox One Choice | Có | Không | Người dùng có thể chọn phường/xã từ danh sách để nhập thông tin địa chỉ của tài khoản. Danh sách phường/xã lấy theo danh sách của địa lý Việt Nam Trường "Phường/Xã" chỉ có dữ liệu sau khi người dùng đã chọn một quận/huyện. |
| Địa chỉ | Text Area (500) | Có | Không | User điền đầy đủ địa chỉ chi tiết (số nhà, tên đường) |
| Cấu hình   * Nhóm quyền HO/Nhà phân phối sẽ load danh sách nhóm quyền từ Role HO hoặc role nhà phân phối * Nhóm quyền Promotion sẽ load danh sách nhóm quyền từ Role Promotion | | | | |
| Quyền HO  Quyền Nhà Phân Phối | Radio Button | Có | Có | Người dùng chọn Quyền HO hoặc Quyền Nhà phân phối để lựa chọn nhóm quyền cài đặt cho tài khoản người dùng  Chỉ được chọn 1 trong 2 quyền HO hoặc quyền NPP   Mặc định chọn Quyền HO |
| Nhóm quyền HO/Nhà Phân Phối | Selectbox One Choice | Có | Có | Chọn nhóm quyền HO hoặc Nhà phân phối của người dùng, dữ liệu lấy ở danh sách nhóm quyền từ SSO, với role là quyền HO hoặc NPP tùy theo radio button Quyền HO/Quyền Nhà Phân Phối mà người dùng đã chọn    * Trường này cho phép người dùng nhóm quyền để cài đặt quyền cho tài khoản người dùng. * Người dùng có thể tìm kiếm và chọn một nhóm quyền từ danh sách có sẵn để cài đặt. * **Mở danh sách:** Khi người dùng nhấp vào trường **Nhóm quyền**, một danh sách các nhóm quyền sẽ được mở ra, dữ liệu lấy lấy ở danh sách nhóm quyền từ SSO, với role là quyền HO hoặc NPP tùy theo radio button Quyền HO/Quyền Nhà Phân Phối mà người dùng đã chọn * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhóm quyền mong muốn. Sau đó, chọn một nhóm quyền bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Nhóm quyền đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * Trường hợp bỏ chọn nhóm quyền trong hộp chọn thì mặc định hiểu là **chưa chọn nhóm quyền nào.** * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| ~~Nhóm quyền Promotion~~ | ~~Selectbox One Choice~~ | ~~Có~~ | ~~Không~~ | RedV1.0.4: Bỏ nhóm quyền promotion ra khỏi chức năng tài khoản người dùng do promotion làm chung trên portal DMS. |
| Vùng | Selectbox Multi Choice | Có | Có | Bắt buộc chọn Vùng cho tất cả các Role  Dữ liệu vùng được lấy từ màn hình Phân Vùng   * Trường này cho phép người dùng chọn nhiều vùng cùng lúc để cài đặt cho tài khoản. * Dựa vào thông tin vùng ở trường này để hiển thị dữ liệu theo vùng mà tài khoản đã cài đặt * Người dùng có thể tìm kiếm và chọn một hoặc nhiều vùng từ danh sách có sẵn để để cài đặt cho tài khoản. * **Mở danh sách:** Khi người dùng nhấp vào trường **Vùng**, một danh sách các vùng sẽ được mở ra dưới dạng phân cấp (tree), dữ liệu lấy từ màn hình Phân vùng * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm vùng mong muốn. Sau đó, họ có thể chọn một hoặc nhiều vùng bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Các vùng đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags).    + RedV1.0.2Nếu chọn Vùng sẽ hiển thị Vùng, nếu chọn Khu vực sẽ hiển thị khu vực * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn vùng không mong muốn. * Trường hợp bỏ chọn toàn bộ các vùng trong hộp chọn thì mặc định hiểu là **chưa chọn vùng nào.** * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Nhà phân phối chăm sóc | Selectbox MultiChoice | Có | Không | * Trường này cho phép người dùng chọn nhiều nhà phân phối chăm sóc cùng lúc để cài đặt cho tài khoản. * Dựa vào thông tin nhà phân phối chăm sóc ở trường này để hiển thị dữ liệu theo NPP mà tài khoản đã cài đặt * Người dùng có thể tìm kiếm và chọn một hoặc nhiều NPP từ danh sách có sẵn để để cài đặt cho tài khoản. * **Mở danh sách:**    + Khi người dùng nhấp vào trường **Nhà phân phối chăm sóc**, một danh sách các NPP sẽ được mở ra, dữ liệu lấy từ màn hình Nhà Phân Phối, load các **NPP đang hoạt động** và theo Vùng đã chọn ở trường Vùng.   + Nếu không chọn Vùng thì danh sách NPP sẽ trống.   + Trường hợp chỉnh sửa tài khoản người dùng mà NPP đã bị ngưng hoạt động     - Sẽ hiển thị những NPP bị ngưng hoạt động dưới dạng mã NPP     - Người dùng phải thực hiện chọn NPP khác, nếu không thực hiện chọn NPP khác mà vẫn nhấn Lưu, hệ thống sẽ hiển thị lỗi: NPP @Mã NPP bị ngưng hoạt động, vui lòng kiểm tra lại! * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm NPP mong muốn. Sau đó, họ có thể chọn một hoặc nhiều NPP bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Các NPP đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn NPP không mong muốn. * Trường hợp bỏ chọn toàn bộ các NPP trong hộp chọn thì mặc định hiểu là **chọn tất cả NPP**. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Vai trò tài khoản thị trường | Selectbox One Choice | Có | Không | * Hiển thị mặc định 4 loại sau:   + SD - Giám đốc toàn quốc   + RSM - Quản lý vùng   + ASM - Quản lý khu vực   + SS - Giám sát bán hàng * Người dùng chọn 1 vai trò để lọc danh sách tài khoản thị trường. |
| Tài khoản thị trường | Selectbox One Choice | Có | Không | Chọn tài khoản thị trường, dữ liệu lấy từ màn hình Nhân viên, với role tương ứng đã chọn ở trường Vai trò tài khoản thị trường   * Người dùng có thể tìm kiếm và chọn một tài khoản thị trường từ danh sách có sẵn để cài đặt. * **Mở danh sách:** Khi người dùng nhấp vào trường **Tài khoản thị trường**, một danh sách các tài khoản sẽ được mở ra, dữ liệu lấy từ màn hình [[Portal HO][DMS] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357), với role tương ứng đã chọn ở trường Vai trò tài khoản thị trường  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm tài khoản mong muốn. Sau đó, chọn **một** tài khoản bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Tài khoản đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * Trường hợp bỏ chọn tài khoản trong hộp chọn thì mặc định hiểu là **chưa chọn tài khoản nào.** * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Tooltip: Tài khoản thị trường (nhân viên) liên kết với tài khoản đang tạo |
| Lưu | Button | Có | Không | Sau khi người dùng đã nhập đầy đủ thông tin, button này sẽ lưu lại tài khoản mới vào hệ thống.   * Hệ thống cần kiểm tra tính duy nhất của Mã tài khoản trước khi lưu. * Các trường bắt buộc phải được nhập đầy đủ trước khi cho phép lưu thông tin. * Khi nhấn Lưu hiển thị thông báo: Bạn có muốn lưu thông tin không?   + Đồng ý: Lưu thông tin tài khoản người dùng   + Hủy: Đóng popup và quay về màn hình hiện tại. |
| Đóng | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. * Nếu màn hình đang có dữ liệu chưa lưu, hiển thị cảnh báo: "Màn hình đang có dữ liệu, bạn có muốn đóng?"   + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |
| Button X Đóng màn hình | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. |

# Chỉnh sửa tài khoản người dùng Edit\_User

**Mô tả tổng quan:** Button "Chỉnh sửa tài khoản" cho phép người dùng truy cập vào chế độ chỉnh sửa của một tài khoản đã có trong hệ thống. Khi người dùng nhấp vào button này, một màn hình chi tiết sẽ hiển thị, cho phép người dùng chỉnh sửa các thuộc tính và thông tin liên quan đến tài khoản đó. Chức năng này thường được sử dụng để cập nhật một số thông tin của tài khoản.

**Chi tiết hoạt động:**

1. **Kích hoạt:** Người dùng nhấp vào button "Chỉnh sửa tài khoản" trên giao diện danh sách tài khoản.
2. **Hiển thị màn hình:** Hệ thống sẽ mở ra màn hình Chỉnh sửa tài khoản chứa toàn bộ thông tin hiện tại của tài khoản. Màn hình giống như màn hình tạo mới
3. **Chỉnh sửa thông tin:**

* + Người dùng có thể chỉnh sửa tất cả các trường thông tin của tài khoản ngoại trừ **"Mã tài khoản"**
  + ****Lưu ý:****
    - ****Ẩn trường** Mật khẩu trên màn hình Chỉnh sửa.**
    - Trường "NPP chăm sóc": Trường hợp NPP bị inactive khi click chỉnh sửa →  Hiển thị thông tin NPP dưới dạng id →  Khi chọn lại trong list sẽ không thấy NPP đó -> Submit sẽ báo lỗi, NPP @mã NPP - @tên NPP không hoạt động, vui lòng kiểm tra lại.

1. **Lưu thay đổi:** Sau khi hoàn tất chỉnh sửa, người dùng nhấp vào button "Đồng ý" để cập nhật các thay đổi vào cơ sở dữ liệu.
2. **Xác nhận và phản hồi:** Hệ thống sẽ xác nhận và lưu trữ các thay đổi, sau đó phản hồi lại người dùng bằng cách hiển thị thông báo thành công.

**Yêu cầu hệ thống:**

* Hệ thống phải đảm bảo rằng chỉ những người dùng có quyền mới có thể truy cập và chỉnh sửa thông tin tài khoản.
* Các trường thông tin bắt buộc cần được kiểm tra trước khi lưu để tránh việc lưu dữ liệu không đầy đủ hoặc sai sót.

**Quy trình nghiệp vụ:**

1. Người dùng tìm kiếm và xác định tài khoản cần chỉnh sửa từ danh sách.
2. Nhấp vào button "Chỉnh sửa tài khoản" để mở màn hình chỉnh sửa.
3. Thực hiện các thay đổi cần thiết trên màn hình.
4. Nhấp vào button "Đồng ý" để ghi lại các thay đổi vào hệ thống hoặc nhấn icon "X" để xóa bỏ thao tác chỉnh sửa và đóng màn hình chỉnh sửa.
5. Hệ thống sẽ xác nhận và cập nhật các thay đổi, đồng thời thông báo cho người dùng về kết quả.

# Cấp lại mật khẩu Reset\_Password

#### 

**Trường: Mật khẩu mới**

* Mô tả: Cho phép user nhập mật khẩu mới cho tài khoản người dùng cần cấp lại mật khẩu.
* Yêu cầu bảo mật:

  + Độ dài tối thiểu: 8 ký tự.
  + Mật khẩu phải bao gồm ít nhất một chữ cái in hoa, một chữ cái in thường, một chữ số và một ký tự đặc biệt (ví dụ: @, #, $).
* Hành động:

  1. User nhập mật khẩu mới theo đúng yêu cầu bảo mật.
  2. Nếu mật khẩu không đáp ứng các tiêu chuẩn bảo mật, hệ thống sẽ hiển thị thông báo yêu cầu nhập lại.

**Trường: Xác nhận mật khẩu**

* Mô tả: Yêu cầu User nhập lại mật khẩu mới để đảm bảo tính chính xác.
* Hành động:

  1. User nhập lại mật khẩu mới vào trường "Xác nhận mật khẩu".
  2. Hệ thống so sánh giá trị của trường "Mật khẩu mới" và "Xác nhận mật khẩu":

     + Nếu hai trường khớp nhau, cho phép lưu mật khẩu mới.
     + Nếu không khớp, hệ thống hiển thị thông báo lỗi yêu cầu User nhập lại.

**Chức năng: Lưu mật khẩu mới**

* Mô tả: Sau khi xác nhận đúng mật khẩu mới, hệ thống sẽ lưu lại mật khẩu đã cấp lại cho tài khoản người dùng.
* Hành động:

  1. Admin nhấn nút "Đồng ý" để hoàn tất quá trình cấp lại mật khẩu.
  2. Hệ thống mã hóa mật khẩu mới và lưu vào cơ sở dữ liệu để đảm bảo an toàn bảo mật.
  3. Hiển thị thông báo "Cấp lại mật khẩu thành công" cho Admin.

**Chức năng lưu lại lịch sử cấp lại mật khẩu.**

* Mô tả: Lưu lại thời gian, user thực hiện cấp lại mật khẩu, phục vụ cho việc kiểm tra và quản lý tài khoản.
* Quy trình:

  1. Hệ thống ghi nhận thông tin lần cấp lại mật khẩu gần nhất, bao gồm thời gian và người thực hiện.
  2. Thông tin này có thể được hiển thị trong phần lịch sử của tài khoản người dùng.

# Import tài khoản người dùng Import\_User

* **Chức năng**: Cho phép người dùng (Admin) tải lên file dữ liệu để tạo mới hoặc cập nhật thông tin tài khoản người dùng hàng loạt.
* **Định dạng tệp hỗ trợ**: Chấp nhận các tệp định dạng **Excel (XLS/XLSX)** để tiện lợi cho việc nhập liệu hàng loạt.
* Template Import:
* **Nhấn vào button Import**

  + Người dùng chọn button Import và tải lên file dữ liệu từ máy tính.
  + Hệ thống sẽ xác thực định dạng file và kiểm tra từng dòng trong file dữ liệu với các ràng buộc và yêu cầu của từng trường dữ liệu
* **Rule chung cho trường hợp cập nhật import**: Nếu cập nhật không nhập dữ liệu vào các ô không bắt buộc thì sẽ hiểu là không cập nhật thông tin và giữ nguyên dữ liệu cũ.

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Mã tài khoản | Text | Có | Có | * Mã định danh duy nhất của tài khoản người dùng trong hệ thống. * Kiểm tra trường hợp 1:  **Mã tài khoản** để trống, nhập không đúng định dạng: Hiển thị thông báo lỗi: Mã tài khoản dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại!  * Kiểm tra trường hợp 2: **Mã tài khoản** trùng với mã nhân viên: "Mã tài khoản đang tạo trùng với Mã nhân viên, vui lòng kiểm tra lại!" * Kiểm tra trường hợp 3: Mã tài khoản xuất hiện nhiều dòng trên file excel, hiện thị thông báo tại dòng đầu tiên xuất hiện mã tài khoản: "Mã tài khoản tại dòng n có xuất hiện tại dòng n1, n2, n3,.... , mã tài khoản không được trùng trong file import, vui lòng kiểm tra lại!"   + Ví dụ: Mã tài khoản tại dòng 2 có xuất hiện tại dòng 7, 15, 16, mã tài khoản phải không được trùng trong file import, vui lòng kiểm tra lại!   + Mã tài khoản bị trùng ở 2, 7, 15, 16 thì chỉ cần hiện thông báo ở dòng số 2. * **Lưu ý**:   + Nếu "Mã tài khoản" đã tồn tại trong hệ thống, các dữ liệu nhập vào sẽ hiểu là cập nhật thông tin của tài khoản hiện có.   + Nếu "Mã tài khoản" chưa tồn tại, hệ thống sẽ tạo mới tài khoản với thông tin đã nhập. |
| Mã tham chiếu | Text | Có | Không | Mã tham chiếu nội bộ (nếu có) để liên kết tài khoản người dùng với các hệ thống hoặc quy trình khác. |
| Tên tài khoản | Text | Có | Có | Tên hiển thị của tài khoản người dùng.   * Kiểm tra trường hợp:  **Tên tài khoản** để trống: Hiển thị thông báo lỗi: Tên tài khoản nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại! |
| Mật khẩu | Text | Có | Có | Mật khẩu đăng nhập của tài khoản. Mật khẩu phải đảm bảo các quy tắc bảo mật (độ dài tối thiểu 8 ký tự, bao gồm ký tự in hoa, số và ký tự đặc biệt).   * Kiểm tra trường hợp:  **Mật khẩu** để trống, nhập không đúng định dạng: Hiển thị thông báo lỗi: Mật khẩu dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại! * **Lưu ý**:   + Chỉ bắt buộc trường mật khẩu trong trường hợp tạo mới, trường hợp cập nhật tài khoản sẽ không bắt buộc trường mật khẩu.   + Trên file excel vẫn hiện required nhưng khi kiểm tra sẽ không bắt buộc nhập mật khẩu.   + Template sẽ add thêm 1 note trong cột Mật khẩu: Không bắt buộc cho trường hợp cập nhật. |
| Email | Email | Có | Không | Địa chỉ email liên hệ của người dùng. Phải tuân theo định dạng email   * Kiểm tra trường hợp nếu có nhập Email:  **Email** nhập không đúng định dạng: Hiển thị thông báo lỗi: Email dòng n nhập không đúng định dạng, vui lòng kiểm tra lại! * Trường hợp không nhập Email thì không cần kiểm tra. |
| Giới tính | Dropdown one choice (Nam/Nữ/Khác) | Có | Không | Giới tính của người dùng, chọn từ danh sách giá trị định sẵn: Nam, Nữ, Khác.   * Kiểm tra trường hợp nếu có nhập giới tính: Giới tínhnhập không đúng định dạng: Hiển thị thông báo lỗi: Giới tính dòng n nhập không đúng định dạng, vui lòng kiểm tra lại! * Trường hợp không nhập giới tính thì không cần kiểm tra. |
| Số điện thoại liên hệ | Phone | Có | Không | Số điện thoại của người dùng.   * Kiểm tra trường hợp nếu có nhập Số điện thoại:  Số điện thoại nhập không đúng định dạng: Hiển thị thông báo lỗi: Số điện thoại dòng n nhập không đúng định dạng, vui lòng kiểm tra lại! * Trường hợp không nhập Số điện thoại thì không cần kiểm tra. |
| Tỉnh/Thành Phố | Dropdown one choice | Có | Không | Người dùng chọn tỉnh/thành phố từ danh sách để nhập thông tin địa chỉ của tài khoản. Danh sách Tỉnh/thành phố lấy theo danh sách của địa lý Việt Nam  Khi người dùng chọn một tỉnh/thành phố, các trường "Quận/Huyện" và "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc tỉnh/thành phố đó.   * Kiểm tra trường hợp nếu có nhập tỉnh/thành phố:  tỉnh/thành phố nhập không đúng dữ liệu trong dropdown: Hiển thị thông báo lỗi: tỉnh/thành phố dòng n nhập không đúng dữ liệu, vui lòng kiểm tra lại! * Trường hợp không nhập tỉnh/thành phố thì không cần kiểm tra. |
| Quận/Huyện | Dropdown one choice | Có | Không | Người dùng có thể chọn quận/huyện từ danh sách để nhập thông tin địa chỉ của tài khoản. Danh sách quận/huyện lấy theo danh sách của địa lý Việt Nam Khi người dùng chọn một quận/huyện, trường "Phường/Xã" sẽ tự động cập nhật để chỉ hiển thị các khu vực thuộc quận/huyện đó.  Trường "Quận/Huyện" chỉ có dữ liệu sau khi người dùng đã chọn một Tỉnh/thành phố.   * Kiểm tra trường hợp nếu có nhập Quận/Huyện: Quận/Huyện nhập không đúng dữ liệu trong dropdown: Hiển thị thông báo lỗi: Quận/Huyện dòng n nhập không đúng dữ liệu, vui lòng kiểm tra lại! * Trường hợp không nhập Tỉnh/Thành Phố mà nhập Quận/Huyện: Hiển thị thông báo lỗi: Quận/Huyện phố dòng n chưa có Tỉnh/Thành phố, vui lòng kiểm tra lại! * Trường hợp không nhập Quận/Huyện thì không cần kiểm tra. |
| Phường/Xã | Dropdown one choice | Có | Không | Người dùng có thể chọn phường/xã từ danh sách để nhập thông tin địa chỉ của tài khoản. Danh sách phường/xã lấy theo danh sách của địa lý Việt Nam Trường "Phường/Xã" chỉ có dữ liệu sau khi người dùng đã chọn một quận/huyện.   * Kiểm tra trường hợp nếu có nhập Phường/Xã: Phường/Xã nhập không đúng dữ liệu trong dropdown: Hiển thị thông báo lỗi: Phường/Xã dòng n nhập không đúng dữ liệu, vui lòng kiểm tra lại! * Trường hợp không nhập Tỉnh/Thành Phố, Quận/Huyện mà nhập Phường/Xã: Hiển thị thông báo lỗi: Phường/Xã phố dòng n chưa có Tỉnh/Thành phố, Quận/Huyện, vui lòng kiểm tra lại! * Trường hợp không nhập Phường/Xã thì không cần kiểm tra. |
| Địa chỉ | Text | Có | Không | Địa chỉ chi tiết của người dùng (số nhà, đường, tổ,...) nếu có. |
| Loại nhóm quyền | Dropdown one choice | Có | Có | Hiển thị danh sách loại nhóm quyền trong dropdown để người dùng chọn, cho phép người dùng chọn 2 loại:   * HO * NPP  * Kiểm tra trường hợp:  **Loại** **Nhóm quyền** để trống, nhập không đúng định dạng: Hiển thị thông báo lỗi: **Loại** **Nhóm quyền**dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại! |
| Nhóm quyền HO/NPP | Dropdown one choice | Có | Có | Nhóm quyền HO/NPP của người dùng  Hiển thị danh sách nhóm quyền trong dropdown để người dùng chọn, dữ liệu lấy ở danh sách nhóm quyền từ SSO, với role tương ứng đã chọn từ trường Loại nhóm quyền  Chỉ chọn 1 nhóm quyền   * Kiểm tra trường hợp 1:  **Nhóm quyền** để trống, nhập không đúng định dạng: Hiển thị thông báo lỗi: **Nhóm quyền HO/NPP** dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2: **Nhóm quyền** không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi **Nhóm quyền HO/NPP** dòng n không tồn tại hoặc không hoạt động, vui lòng kiểm tra lại! |
| ~~Nhóm quyền Promotion~~ | ~~Dropdown one choice~~ | ~~Có~~ | ~~Không~~ | RedV1.0.4: Bỏ nhóm quyền promotion ra khỏi chức năng tài khoản người dùng do promotion làm chung trên portal DMS. |
| Vùng | Text | Có | Có | Mã vùng của người dùng. Nhập nhiều mã vùng cách nhau bằng dấu phẩy (ví dụ: "VN1,VN2").   * Kiểm tra trường hợp 1:  **Vùng** để trống, nhập không đúng định dạng: Hiển thị thông báo lỗi: **Vùng**dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2: **Vùng**không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi **Vùng**dòng n không tồn tại hoặc không hoạt động, vui lòng kiểm tra lại! |
| Khu vực | Text | Có | Không | Mã khu vực của người dùng. Nhập nhiều mã khu vực cách nhau bằng dấu phẩy (ví dụ: "KV1,KV2").   * Kiểm tra trường hợp: **Khu vực** không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi **Khu vực** dòng n không tồn tại hoặc không hoạt động, vui lòng kiểm tra lại! * Trường hợp nhập có nhập khu vực mà chưa nhập vùng tương ứng thì sẽ lưu luôn thông tin Vùng của khu vực còn thiếu.   + Ví dụ: Vùng A gồm Khu Vực 1, 2, 3   + User nhập Khu vực 2, 3 mà không nhập Vùng A ở trường Vùng thì sẽ lưu luôn thông tin Vùng A. * RedV1.0.3: Trường hợp user nhập vùng mà không nhập khu vực sẽ lưu tất cả khu vực của vùng. |
| Nhà phân phối chăm sóc | Text | Có | Không | Mã của các nhà phân phối mà người dùng chăm sóc. Nhập nhiều mã cách nhau bằng dấu phẩy (ví dụ: "NPP1,NPP2").   * Kiểm tra trường hợp 1: **Nhà phân phối** không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi **Nhà phân phối** dòng n không tồn tại hoặc không hoạt động, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2: **Nhà phân phối** không thuộc Vùng, Khu vực đã khai báo: Hiển thị thông báo lỗi: **Nhà phân phối** dòng n không thuộc vùng, khu vực đã khai báo, vui lòng kiểm tra lại! |
| Tài khoản thị trường | Text | Có | Không | Tài khoản người dùng trên thị trường, nếu có liên kết.   * Kiểm tra trường hợp 1: **Tài khoản thị trường** không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi **Tài khoản thị trường**dòng n không tồn tại hoặc không hoạt động, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2: Tài khoản thị trường là tài khoản có chức vụ không nằm trong các chức vụ: SD, RSM, ASM, SS, hiển thị thông báo: Vui lòng chọn các tài khoản thị trường có chức vụ không phải nhân viên bán hàng. |

# Export tài khoản người dùng Export\_User

**Chức năng:**

* Nút "Export Excel" cho phép người dùng xuất dữ liệu của danh sách tài khoản ra một tập tin Excel.
* Nút này giúp người dùng lưu trữ và phân tích dữ liệu tài khoản ngoài ứng dụng, hoặc chia sẻ với các bên liên quan.
* Phân quyền: có yêu cầu phân quyền mới thấy được button này.

**Cách sử dụng:**

1. **Thiết lập dữ liệu:** Người dùng có thể chọn các bộ lọc và tìm kiếm để hiển thị các tài khoản mà họ muốn xuất ra Excel.
2. **Nhấp vào nút:** Khi người dùng nhấp vào nút "Export Excel", hệ thống sẽ tạo và tải về một tập tin Excel chứa dữ liệu của danh sách tài khoản trên danh sách hiện tại.

**Lưu ý:**

* Dữ liệu xuất ra sẽ bao gồm các thông tin từ danh sách tài khoản hiện tại, theo định dạng và cấu trúc mà ứng dụng đã thiết lập.
* Nút "Export Excel" sẽ xuất dữ liệu dựa trên các bộ lọc và tiêu chí tìm kiếm đã áp dụng, nếu có.
* Template excel như sau:
* Format tên file xuất ra: DanhSachTaiKhoan\_DDMMYYYYHHMMSS

**Mô tả trường dữ liệu:**

|  | Trường dữ liệu | Mô tả |
| --- | --- | --- |
| 1 | Người xuất báo cáo: | Mã tài khoản - Tên tài khoản xuất báo cáo |
| 2 | Thời gian xuất báo cáo: | Thời gian xuất báo cáo thành công DD-MM-YYYY HH:MM:SS |
| 3 | Vùng | Vùng quản lý dữ liệu của tài khoản Mã vùng, Tên Vùng Trường hợp nhiều vùng sẽ cách nhau bởi dấu phẩy |
| 4 | Khu vực | Khu vực quản lý dữ liệu của tài khoản Mã khu vực, Tên khu vực Trường hợp nhiều khu vực sẽ cách nhau bởi dấu phẩy |
| 5 | Mã tài khoản | Mã định danh của tài khoản trong hệ thống cũng là thông tin đăng nhập của tài khoản |
| 6 | Mã tham chiếu | Mã tham chiếu liên quan tới tài khoản |
| 7 | Tên tài khoản | Tên đầy đủ của tài khoản |
| 8 | NPP chăm sóc | Mã nhà phân phối - Tên NPP chăm sóc tài khoản của tài khoản Trường hợp nhiều NPP, các NPP cách nhau bởi dấu phẩy  Trường hợp NPP bị inactive, xuất dữ liệu vẫn hiển thị thông tin NPP. |
| 9 | Số điện thoại | Số điện thoại liên hệ của tài khoản |
| 10 | Email | Email liên hệ của tài khoản |
| 11 | Nhóm quyền HO | Nhóm quyền HO của tài khoản |
| 12 | Nhóm quyền NPP | Nhóm quyền NPP của tài khoản |
| 13 | ~~Nhóm quyền Promotion~~ | RedV1.0.4: Bỏ nhóm quyền promotion ra khỏi chức năng tài khoản người dùng do promotion làm chung trên portal DMS. |
| 14 | Tài khoản thị trường | Tài khoản người dùng có liên kết với tài khoản trên thị trường |
| 15 | Đăng nhập gần nhất | Ngày giờ lần cuối tài khoản đăng nhập vào hệ thống trên web |
| 16 | Trạng thái | Trạng thái của tài khoản: Hoạt động/Không hoạt động |
| 17 | Người tạo | Hiển thị mã tài khoản của người dùng đã tạo ra bản ghi tài khoản này. |
| 18 | Ngày tạo | Ngày tháng khi tài khoản được thêm vào hệ thống. Format: DD:MM:YYYY HH:MM:SS |
| 19 | Người cập nhật | Hiển thị mã tài khoản của người dùng đã cập nhật bản ghi tài khoản này. |
| 20 | Ngày cập nhật | Ngày tháng khi tài khoản được cập nhật trên hệ thống. Format: DD:MM:YYYY HH:MM:SS |