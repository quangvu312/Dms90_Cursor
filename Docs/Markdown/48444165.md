|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-407] [HO] Cấu hình chung - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-407) |
| Epic | [[ECDM-252] CONFIG - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-252) |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

  

# Danh sách cấu hình chung

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm | | | | |
| Tìm theo | Textbox | Có | Không | Cho phép nhập từ khóa để tìm kiếm theo các trường Tên cấu hình, Từ khóa.  Search like |
| Đối tượng áp dụng | Dropdown one choice | Có | Không | Lọc danh sách theo các đối tượng áp dụng   * APP * WEB * API |
| Tên nhóm | Dropdown one choice | Có | Không | Lọc theo nhóm module sử dụng (nhóm module này sẽ được update khi phát sinh chức năng cần config):   * Khuyến mãi * Đơn hàng * Kho hàng * Cửa hàng * Tuyến * KPI * Nhân viên * Báo cáo * Chương trình trưng bày * Chương trình tích lũy * Khảo sát * Tài sản * Khác |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách cấu hình, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các cấu hình mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách cấu hình. 2. **danh sách cấu hình làm mới:** Sau khi nhấp, danh sách cấu hình sẽ hiển thị toàn bộ các cấu hình hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách cấu hình. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách cấu hình. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách cấu hình theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách cấu hình. 3. **Hiển thị kết quả:** danh sách cấu hình sẽ cập nhật và hiển thị các cấu hình phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách cấu hình sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| Lưới danh sách | | | | |
| Tên cấu hình | Datacolumn link | Không | Không | Tên cấu hình để quản lý cấu hình trên hệ thống.  Click vào hiển thị chi tiết cấu hình, màn hình giống màn hình tạo mới nhưng sẽ không được điều chỉnh bất cứ thông tin nào |
| Từ khóa | Datacolumn | Không | Không | Từ khóa dùng để config trong code (định danh unique). |
| Loại | Datacolumn | Không | Không | Loại cấu hình, gồm các giá trị:   * Text * Number * Boolean * Select * Multi\_Select * Object * Array\_Object * Table |
| Mô tả | Datacolumn | Không | Không | Giải thích ngắn gọn ý nghĩa của cấu hình. |
| Giá trị | Datacolumn | Không | Không | Giá trị của cấu hình |
| Đối tượng áp dụng | Datacolumn | Không | Không | Đối tượng áp dụng của cấu hình (APP, WEB, API). |
| Tên nhóm | Datacolumn | Không | Không | Nhóm module sử dụng cấu hình, ví dụ: Khuyến mãi, KPI, báo cáo, cửa hàng, ... |
| Người tạo | Datacolumn | Không | Không | * Hiển thị mã cấu hình của người dùng đã tạo ra bản ghi cấu hình này. |
| Người cập nhật | Datacolumn | Không | Không | * Hiển thị mã cấu hình người dùng đã thực hiện cập nhật cuối cùng cho cấu hình. |
| Ngày tạo | Datacolumn | Không | Không | * Ngày tháng khi cấu hình được thêm vào hệ thống. * Format: DD:MM:YYYY HH:MM:SS |
| Ngày cập nhật | Datacolumn | Không | Không | * Ngày tháng của lần cập nhật gần nhất cho thông tin cấu hình.  * Format: DD:MM:YYYY HH:MM:SS |
| Chỉnh sửa | Button | Có | Không | **Mô tả tổng quan:** Button "Chỉnh sửa" cho phép người dùng truy cập vào chế độ chỉnh sửa của một cấu hình đã có trong hệ thống. Khi người dùng nhấp vào button này, một màn hình chi tiết sẽ hiển thị, cho phép người dùng chỉnh sửa các thuộc tính và thông tin liên quan đến cấu hình đó. Chức năng này thường được sử dụng để cập nhật một số thông tin của cấu hình.  **Chi tiết hoạt động:**   1. **Kích hoạt:** Người dùng nhấp vào button "Chỉnh sửa" trên giao diện danh sách cấu hình. 2. **Hiển thị màn hình:** Hệ thống sẽ mở ra màn hình Chỉnh sửa cấu hình chứa toàn bộ thông tin hiện tại của cấu hình. Màn hình giống như màn hình tạo mới 3. **Chỉnh sửa thông tin:** Người dùng có thể chỉnh sửa tất cả các trường thông tin của cấu hình ngoại trừ**"Đối tượng áp dụng", "Từ khóa", "Loại"**  1. **Lưu thay đổi:** Sau khi hoàn tất chỉnh sửa, người dùng nhấp vào button "Lưu" để cập nhật các thay đổi vào cơ sở dữ liệu. 2. **Xác nhận và phản hồi:** Hệ thống sẽ xác nhận và lưu trữ các thay đổi, sau đó phản hồi lại người dùng bằng cách hiển thị thông báo thành công.  **Yêu cầu hệ thống:**   * Hệ thống phải đảm bảo rằng chỉ những người dùng có quyền mới có thể truy cập và chỉnh sửa thông tin cấu hình. * Các trường thông tin bắt buộc cần được kiểm tra trước khi lưu để tránh việc lưu dữ liệu không đầy đủ hoặc sai sót.   **Quy trình nghiệp vụ:**   1. Người dùng tìm kiếm và xác định cấu hình cần chỉnh sửa từ danh sách. 2. Nhấp vào button "Chỉnh sửa cấu hình" để mở màn hình chỉnh sửa. 3. Thực hiện các thay đổi cần thiết trên màn hình. 4. Nhấp vào button "Lưu" để ghi lại các thay đổi vào hệ thống hoặc nhấn button "Đóng" để xóa bỏ thao tác chỉnh sửa và đóng màn hình chỉnh sửa. 5. Hệ thống sẽ xác nhận và cập nhật các thay đổi, đồng thời thông báo cho người dùng về kết quả. |
| Sao chép | Button | Có | Không | **Mô tả tổng quan:** Button "Sao chép" cho phép người dùng nhanh chóng tạo một bản sao của một cấu hình hiện có trong danh sách cấu hình. Khi người dùng nhấp vào button này, màn hình Thêm mới cấu hình sẽ mở ra, trong đó tất cả các thông tin của cấu hình gốc sẽ được sao chép sang cấu hình mới, giúp tiết kiệm thời gian nhập liệu và đảm bảo tính nhất quán của dữ liệu.  **Mục đích và lợi ích:**   * **Mục đích:** Hỗ trợ người dùng trong việc quản lý danh sách cấu hình bằng cách cung cấp công cụ nhanh chóng để sao chép và điều chỉnh cấu hình, đặc biệt hữu ích khi cần tạo nhiều cấu hình với thông tin tương tự nhau. * **Lợi ích:** Giảm thiểu sai sót khi nhập liệu thủ công, tăng hiệu suất công việc, và đảm bảo tính nhất quán của dữ liệu.   **Chi tiết hoạt động:**   1. **Kích hoạt:** Khi người dùng nhấp vào button "Sao chép", hệ thống sẽ mở một form mới chứa thông tin đã sao chép từ cấu hình gốc. 2. **Tự động điền:** Các trường thông tin từ cấu hình gốc sẽ tự động điền vào form mới. 3. **Chỉnh sửa:** Người dùng có thể chỉnh sửa các thông tin cần thiết trên form mới trước khi lưu lại. 4. **Lưu cấu hình mới:** Khi hoàn tất, người dùng có thể lưu lại cấu hình mới.   **Quy trình nghiệp vụ:**   1. Người dùng tìm cấu hình muốn sao chép từ danh sách cấu hình. 2. Nhấp vào button "Sao chép". 3. Chỉnh sửa thông tin cấu hình mới nếu cần thiết. 4. Lưu cấu hình mới vào danh sách. |

# Tạo mới cấu hình chung

Có các loại cấu hình sau (Loại cấu hình sẽ được update khi có chức năng cụ thể cần 1 loại config mới):

* Text
* Number
* Boolean
* Select
* Multi\_Select
* Object
* Array\_Object
* Table

| Loại cấu hình | Hình ảnh | Mô tả |
| --- | --- | --- |
| Tạo mới cấu hình với loại = Text hoặc Number |  | | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả | | --- | --- | --- | --- | --- | | Loại | Chọn loại là Text hoặc Number | Có | Có | Text hoặc Number | | Giá trị | Textbox (500) | Có | Có | Giá trị cấu hình được sử dụng trong hệ thống.   * Loại = text: Nhập text tự do * Loại = number: Chỉ nhập số | |
| Tạo mới cấu hình với loại = Boolean |  | | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả | | --- | --- | --- | --- | --- | | Loại | Boolean | Có | Có | Boolean | | Giá trị | Toggle mặc định tắt | Có | Có | Giá trị cấu hình được sử dụng trong hệ thống. Bật hoặc tắt | |
| Tạo mới cấu hình với loại = Select |  | | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả | | --- | --- | --- | --- | --- | | Loại | Select | Có | Có | Chọn loại cấu hình = Select | | Lựa chọn | Textbox tên biến (200)  Textbox giá trị (200) | Có | Có | Nhập giá trị của select | | Giá trị | Textbox (200) | Có | Có | Giá trị cấu hình được sử dụng trong hệ thống.  Dữ liệu nhập vào phải thuộc các giá trị đã thêm ở trường "Lựa chọn" bên trên | |
| Tạo mới cấu hình với loại = Multi Select |  | | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả | | --- | --- | --- | --- | --- | | Loại | Multiselect | Có | Có | Chọn loại cấu hình = Multi Select | | Giá trị | Textbox tên biến (200)  Textbox giá trị (200) | Có | Có | Giá trị cấu hình được sử dụng trong hệ thống. | |
| Tạo mới cấu hình với loại = Object |  | | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả | | --- | --- | --- | --- | --- | | Loại | Object | Có | Có | Object | | Giá trị | Object | Có | Có | Giá trị cấu hình được sử dụng trong hệ thống. | |
| Tạo mới cấu hình với loại = Array Object |  | | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả | | --- | --- | --- | --- | --- | | Loại | Array Object | Có | Có | Array Object | | Giá trị | Array Object | Có | Có | Giá trị cấu hình được sử dụng trong hệ thống. | |
| Tạo mới cấu hình với loại = Table |  | | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả | | --- | --- | --- | --- | --- | | Loại | Table | Có | Có | Array Object | | Thêm đối tượng | Button | Có | Không | Nhấn button này để thêm 1 dòng dưới bảng | | Mã đối tượng | Text (100) | Có | Có | Nhập mã đối tượng, tối đa 100 ký tự, không được trùng. không nhập tiếng việt có dấu  không ký tự đặc biệt (ngoại trừ "\_") | | Tên đối tượng | Text có dấu tiếng việt (500) | Có | Có | Nhập tên đối tượng, tối đa 500 ký tự, có thể nhập tiếng việt có dấu  Tên này hiển thị nội bộ chỉ setup ở đây mới thấy | | Tên hiển thị | Text có dấu tiếng việt (500) | Có | Có | Freetext. Tên này sẽ được hiển thị trên web/app cho enduser thấy được kèm với icon  Giới hạn ký tự vì sẽ ảnh hưởng UI App | | Mô tả | Textarea (500) | Có | Không | Freetext mô tả cấu trúc hoặc cách lấy dữ liệu hoặc mô tả config cho đối tượng  Freetext này hiển thị nội bộ chỉ setup ở đây mới thấy hoặc có thể hiển thị info cho enduser thấy | | Tham số | Object | Có | Không | Tham số cho đối tượng  Sẽ sử dụng trong 1 số trường hợp để xử lý thông tin | | Hình ảnh | Image | Có | Không | Hình ảnh có thể view, delete và upload ảnh từ thư viện  File hình ảnh chỉ upload đuôi .svg  Tối đa 10Mb | | Thứ tự sắp xếp | Number | Có | Không | Thứ tự sắp xếp đối tượng trên giao diện  Nếu trùng số thứ tự thì sắp xếp the Alphabet của mã đối tượng | | Trạng thái | Toggle button | Có | Có | Trạng thái của đối tượng   * Đang hoạt động: Được sử dụng trên hệ thống = Hiển thị trên app * Ngưng hoạt động: Không được sử dụng trên hệ thống = Không hiển thị trên app | | Tùy chỉnh | Button | Có | Không | * Chỉnh sửa: Nhấn edit để chỉnh sửa đối tượng, được chỉnh sửa tất cả các thông tin trừ Mã đối tượng (chỉ phân quyền cho Admin IT chỉnh sửa) * Xóa: Chỉ được phép xóa khi chưa lưu cấu hình, nghĩa là ví dụ mới thêm 1 dòng nhưng không muốn thêm thông tin nữa thì có thể xóa dòng * Sao chép: Nhấn sao chép hệ thống sẽ duplicate dòng đang chọn xuống 1 dòng mới với thông tin giống dòng cũ. | |

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tên | Text (500) | Có | Có | Tên của cấu hình, hiển thị trên màn hình danh sách. |
| Đối tượng áp dụng | Selectbox multichoice | Có | Có | Chọn đối tượng áp dụng cấu hình:   * APP * WEB * API |
| Từ khóa | Text (200) | Có | Có | Từ khóa định danh để sử dụng trong code, không được trùng, không nhập tiếng việt có dấu, không nhập khoảng trắng, không nhập ký tự đặc biệt ngoại trừ "\_" |
| Tên nhóm | Selectbox onechoice | Có | Có | Chọn hoặc nhập tên nhóm module sử dụng cấu hình (nhóm module này sẽ được update khi phát sinh chức năng cần config):   * Khuyến mãi * Đơn hàng * Kho hàng * Cửa hàng * Tuyến * KPI * Nhân viên * Báo cáo * Chương trình trưng bày * Chương trình tích lũy * Khảo sát * Tài sản * Khác |
| Mô tả | Textarea (500) | Có | Không | Mô tả ý nghĩa và chức năng của cấu hình. |
| Cho phép chỉnh sửa | Toggle | Có | Không | Cho phép chỉnh sửa cấu hình sau khi tạo mới.  Khi toggle này được bật thì cấu hình mới được phép chỉnh sửa  Mặc dù user có quyền chỉnh sửa nhưng nếu toggle này không bật thì cũng không được chỉnh sửa. |
| Lưu | Button | Có | Không | Sau khi người dùng đã nhập đầy đủ thông tin, button này sẽ lưu lại cấu hình mới vào hệ thống.   * Hệ thống cần kiểm tra tính duy nhất của Từ khóa trước khi lưu. * Các trường bắt buộc phải được nhập đầy đủ trước khi cho phép lưu thông tin. * Khi nhấn Lưu hiển thị thông báo: Bạn có muốn lưu thông tin không?   + Đồng ý: Lưu thông tin cấu hình người dùng   + Hủy: Đóng popup và quay về màn hình hiện tại. |
| Đóng | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. * Nếu màn hình đang có dữ liệu chưa lưu, hiển thị cảnh báo: "Màn hình đang có dữ liệu, bạn có muốn đóng?"   + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |
| Button X Đóng màn hình | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. |