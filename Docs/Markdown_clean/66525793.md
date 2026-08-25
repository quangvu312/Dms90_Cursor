|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature | Nhóm điểm bán |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1.MỤC ĐÍCH**

* **Màn hình cấu hình danh mục nhóm điểm bán trên hệ thống**

## **2.CHỨC NĂNG**

* **Danh sách Nhóm điểm bán**
* **Tạo mới**
* **Chỉnh sửa**

## **3.MÔ TẢ**

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm | Textbox | Có | Không | Có thể tìm kiếm theo Mã, tên Nhóm điểm bán  Tìm kiếm gần giống (search like) theo dữ liệu đã nhập. |
| Trạng thái | Selectbox one choice | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc danh sách Nhóm điểm bán dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và chọn một trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách Nhóm điểm bán. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:   + Hoạt động   + Không hoạt động  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách Nhóm điểm bán sẽ tự động được lọc để hiển thị những Nhóm điểm bán thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách dữ liệu, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các dữ liệu mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách dữ liệu. 2. **Danh sách dữ liệu làm mới:** Sau khi nhấp, danh sách dữ liệu sẽ hiển thị toàn bộ các dữ liệu hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách dữ liệu. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách dữ liệu. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách dữ liệu theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách dữ liệu. 3. **Hiển thị kết quả:** Danh sách dữ liệu sẽ cập nhật và hiển thị các dữ liệu phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách dữ liệu sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| Lưới danh sách |  |  |  |  |
| Mã nhóm điểm bán | Datacolumn | Không | Không | Hiển thị mã của Nhóm điểm bán |
| Tên nhóm điểm bán | Datacolumn link | Có | Không | Hiển thị tên của Nhóm điểm bán  Click vào tên dữ liệu hiển thị màn hình chi tiết Nhóm điểm bán. Giao diện như màn hình tạo mới và không được chỉnh sửa bất cứ trường thông tin nào. |
| Trạng thái | Toggle Button | Có | Không | **Mô tả tổng quan:** Toggle trạng thái cho phép người dùng dễ dàng chuyển đổi giữa hai trạng thái "Hoạt động" và "Ngưng hoạt động" của Nhóm điểm bán. Khi người dùng nhấp vào toggle, trạng thái hiện tại của Nhóm điểm bán sẽ thay đổi ngay lập tức, và hệ thống sẽ phản ánh sự thay đổi này trong cơ sở dữ liệu cũng như giao diện người dùng.  **Chi tiết hoạt động:**   1. **Kích hoạt:** Người dùng nhấp vào toggle trạng thái trên giao diện. 2. **Chuyển đổi trạng thái:** Khi toggle được nhấp, hệ thống hiển thị cảnh báo:      * + - Đồng ý: trạng thái của Nhóm điểm bán sẽ thay đổi từ "Hoạt động" sang "Không hoạt động" hoặc ngược lại.     - Hủy: Đóng cảnh báo và giữ nguyên trạng thái Nhóm điểm bán.  1. * **Trạng thái Hoạt động:**Nhóm điểm bán đang được sử dụng trong hệ thống.    * **Trạng thái Không hoạt động:**      + Nhóm điểm bán không còn được sử dụng trong hệ thống nhưng vẫn được lưu trữ trong cơ sở dữ liệu để theo dõi lịch sử hoặc kích hoạt lại sau này.      + Các dữ liệu giao dịch liên quan đến Nhóm điểm bán như vẫn hiển thị dữ liệu Nhóm điểm bán. 2. **Cập nhật giao diện:**Giao diện người dùng sẽ hiển thị ngay trạng thái mới của Nhóm điểm bán bằng cách thay đổi màu sắc hoặc nhãn trên toggle. 3. **Ghi nhận thay đổi:** Hệ thống sẽ cập nhật cơ sở dữ liệu với trạng thái mới của Nhóm điểm bán, đảm bảo rằng các thao tác liên quan đến Nhóm điểm bán này sẽ tuân theo trạng thái mới.   **Yêu cầu hệ thống:**   * Hệ thống phải thực hiện kiểm tra quyền truy cập để đảm bảo rằng chỉ những người dùng có quyền hợp lệ mới có thể thay đổi trạng thái. * Trạng thái phải được đồng bộ hóa ngay lập tức trong cơ sở dữ liệu để đảm bảo tính nhất quán của dữ liệu.   **Quy trình nghiệp vụ:**   1. Người dùng xác định Nhóm điểm bán muốn thay đổi trạng thái. 2. Nhấp vào toggle trạng thái tương ứng. 3. Hệ thống chuyển đổi trạng thái Nhóm điểm bán và cập nhật trạng thái mới trên giao diện. 4. Các thao tác tiếp theo với Nhóm điểm bán này sẽ tuân theo trạng thái mới. |
| Người tạo | Datacolumn | Không | Không | * Hiển thị mã dữ liệu của người dùng đã tạo ra bản ghi dữ liệu này. |
| Người cập nhật | Datacolumn | Không | Không | * Hiển thị mã dữ liệu người dùng đã thực hiện cập nhật cuối cùng cho dữ liệu. |
| Ngày tạo | Datacolumn | Không | Không | * Ngày tháng khi dữ liệu được thêm vào hệ thống. * Format: DD-MM-YYYY HH:MM:SS |
| Ngày cập nhật | Datacolumn | Không | Không | * Ngày tháng của lần cập nhật gần nhất cho thông tin dữ liệu.  * Format: DD-MM-YYYY HH:MM:SS |
| **Chỉnh sửa** | Button | Có | Không | Sẽ được mô tả ở mục Chỉnh sửa dữ liệu |

## Tạo Nhóm điểm bán mới

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Mã nhóm điểm bán | Text (100) | Có | Có | User nhập mã Nhóm điểm bán, không nhập khoảng trắng,  không nhập tiếng việt có dấu, không nhập ký tự đặc biệt ngoại trừ "\_"  Mã phải là duy nhất trong hệ thống, không được phép trùng (Không phân biệt hoa thường. Ví dụ "MASTER\_001" và "master\_001" là trùng nhau).  Trường hợp trùng hiển thị thông báo: Mã Nhóm điểm bán đã tồn tại, vui lòng thử lại!  Tooltip: Nhập Mã nhóm điểm bán |
| Tên nhóm điểm bán | Text (500) | Có | Có | User nhập thông tin tên Nhóm điểm bán  Tooltip: Nhập tên Nhóm điểm bán  Free text nhập tự do |
| Lưu | Button | Có | Không | Sau khi người dùng đã nhập đầy đủ thông tin, button này sẽ lưu lại dữ liệu mới vào hệ thống.   * Hệ thống cần kiểm tra tính duy nhất của Mã dữ liệu trước khi lưu. * Các trường bắt buộc phải được nhập đầy đủ trước khi cho phép lưu thông tin. * Khi nhấn Lưu hiển thị thông báo: Bạn có muốn lưu thông tin không?   + Đồng ý: Lưu thông tin Nhóm điểm bán   + Hủy: Đóng popup và quay về màn hình hiện tại. |
| Đóng | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. * Nếu màn hình đang có dữ liệu chưa lưu, hiển thị cảnh báo: "Màn hình đang có dữ liệu, bạn có muốn đóng?"   + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |

# Chỉnh sửa dữ liệu EDIT\_Data

**Mô tả tổng quan:** Button "Chỉnh sửa dữ liệu" cho phép người dùng truy cập vào chế độ chỉnh sửa của một dữ liệu đã có trong hệ thống. Khi người dùng nhấp vào button này, một màn hình chi tiết sẽ hiển thị, cho phép người dùng chỉnh sửa các thuộc tính và thông tin liên quan đến dữ liệu đó. Chức năng này thường được sử dụng để cập nhật một số thông tin của dữ liệu.

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