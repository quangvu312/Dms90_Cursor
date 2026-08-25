|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-406] [HO] Dữ liệu chung - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-406) |
| Epic |  |
| Feature | Dữ liệu chung |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1.MỤC ĐÍCH**

* **Màn hình cấu hình một số dữ liệu master data để phục vụ các nghiệp vụ trên hệ thống**
* **Ví dụ: Danh sách lý do rời cửa hàng, danh sách vấn đề hỗ trợ,....**

## **2.CHỨC NĂNG**

* **Danh sách dữ liệu chung**
* **Tạo mới**
* **Chỉnh sửa**

## **3.MÔ TẢ**

1. **Tạo mới**
2. **Chỉnh sửa**
3. **Xem danh sách dữ liệu chung**

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm | Textbox | Có | Không | Có thể tìm kiếm theo Mã, mã tham chiếu, tên dữ liệu.  Tìm kiếm gần giống (search like) theo dữ liệu đã nhập. |
| Loại | Dropdown one choice | có | Không | Hiển thị danh sách các loại dữ liệu để lọc dữ liệu trên lưới danh sách  Loại dữ liệu là mặc định của hệ thống (Do dev khởi tạo mỗi lần có phát sinh loại mới) |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách dữ liệu, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các dữ liệu mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách dữ liệu. 2. **Danh sách dữ liệu làm mới:** Sau khi nhấp, danh sách dữ liệu sẽ hiển thị toàn bộ các dữ liệu hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách dữ liệu. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách dữ liệu. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách dữ liệu theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách dữ liệu. 3. **Hiển thị kết quả:** Danh sách dữ liệu sẽ cập nhật và hiển thị các dữ liệu phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách dữ liệu sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| Lưới danh sách |  |  |  |  |
| Mã | Datacolumn | Không | Không | Hiển thị mã của dữ liệu |
| Mã tham chiếu | Datacolumn | Không | Không | Hiển thị mã tham chiếu của dữ liệu khi có tham chiếu qua các hệ thống khác |
| Hệ thống tham chiếu | Datacolumn | Không | Không | Hiển thị hệ thống để tham chiếu dữ liệu khi có tham chiếu qua các hệ thống khác |
| Tên | Datacolumn link | Có | Không | Hiển thị tên của dữ liệu  Click vào tên dữ liệu hiển thị màn hình chi tiết dữ liệu. Giao diện như màn hình tạo mới và không được chỉnh sửa bất cứ trường thông tin nào. |
| Loại | Datacolumn | Không | Không | Hiển thị loại của dữ liệu, được lấy từ [Danh sách dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) |
| Người tạo | Datacolumn | Không | Không | * Hiển thị mã dữ liệu của người dùng đã tạo ra bản ghi dữ liệu này. |
| Người cập nhật | Datacolumn | Không | Không | * Hiển thị mã dữ liệu người dùng đã thực hiện cập nhật cuối cùng cho dữ liệu. |
| Ngày tạo | Datacolumn | Không | Không | * Ngày tháng khi dữ liệu được thêm vào hệ thống. * Format: DD:MM:YYYY HH:MM:SS |
| Ngày cập nhật | Datacolumn | Không | Không | * Ngày tháng của lần cập nhật gần nhất cho thông tin dữ liệu.  * Format: DD:MM:YYYY HH:MM:SS |
| **Chỉnh sửa** | Button | Có | Không | Sẽ được mô tả ở mục Chỉnh sửa dữ liệu |

## Tạo dữ liệu mới

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Mã | Text (100) | Có | Có | User nhập mã dữ liệu, không nhập khoảng trắng,  không nhập tiếng việt có dấu, không nhập ký tự đặc biệt ngoại trừ "\_"  Mã phải là duy nhất trong hệ thống, không được phép trùng (Không phân biệt hoa thường. Ví dụ "MASTER\_001" và "master\_001" là trùng nhau).  Trường hợp trùng hiển thị thông báo: Mã dữ liệu đã tồn tại, vui lòng thử lại!  Tooltip: Nhập mã dữ liệu chung |
| Tên | Text (500) | Có | Có | User nhập thông tin tên dữ liệu chung  Tooltip: Nhập vào tên  Free text nhập tự do |
| Loại | Selectbox onechoice | Có | Có | Hiển thị danh sách các loại dữ liệu để tạo mới dữ liệu  Loại dữ liệu là mặc định của hệ thống (Do dev khởi tạo mỗi lần có phát sinh loại mới)  Hiện tại sẽ có các loại dữ liệu sau (Sẽ update khi có chức năng cụ thể): [Danh sách dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) |
| Lưu | Button | Có | Không | Sau khi người dùng đã nhập đầy đủ thông tin, button này sẽ lưu lại dữ liệu mới vào hệ thống.   * Hệ thống cần kiểm tra tính duy nhất của Mã dữ liệu trước khi lưu. * Các trường bắt buộc phải được nhập đầy đủ trước khi cho phép lưu thông tin. * Khi nhấn Lưu hiển thị thông báo: Bạn có muốn lưu thông tin không?   + Đồng ý: Lưu thông tin dữ liệu người dùng   + Hủy: Đóng popup và quay về màn hình hiện tại. |
| Đóng | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. * Nếu màn hình đang có dữ liệu chưa lưu, hiển thị cảnh báo: "Màn hình đang có dữ liệu, bạn có muốn đóng?"   + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |

# Chỉnh sửa dữ liệu EDIT\_Data

**Mô tả tổng quan:** Button "Chỉnh sửa dữ liệu" cho phép người dùng truy cập vào chế độ chỉnh sửa của một dữ liệu đã có trong hệ thống. Khi người dùng nhấp vào button này, một màn hình chi tiết sẽ hiển thị, cho phép người dùng chỉnh sửa các thuộc tính và thông tin liên quan đến dữ liệu đó. Chức năng này thường được sử dụng để cập nhật một số thông tin của dữ liệu.

**Chi tiết hoạt động:**

1. **Kích hoạt:** Người dùng nhấp vào button "Chỉnh sửa" trên giao diện danh sách dữ liệu.
2. **Hiển thị màn hình:** Hệ thống sẽ mở ra màn hình Chỉnh sửa dữ liệu chứa toàn bộ thông tin hiện tại của dữ liệu. Màn hình giống như màn hình tạo mới
3. **Chỉnh sửa thông tin:**

* + Người dùng có thể chỉnh sửa tất cả các trường thông tin của dữ liệu ngoại trừ**"Mã"**

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