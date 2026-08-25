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

# Lịch sử thông báo

Màn hình này chỉ hiển thị các thông báo đã được gửi đi, để user tra cứu tình trạng gửi/nhận thông báo

| Một số trường hợp | App Salesman | App Quản lý |
| --- | --- | --- |
| Gửi cho SUP | Khi SUP đang login trên App này:   * Có thể nhận thông báo out app/in app * Có thể xem → Đánh dấu đã xem * Nếu đã xem trên App QL thì cũng đánh dấu đã xem trên App SM | Khi SUP đang login trên App này:   * Có thể nhận thông báo out app/in app * Có thể xem → Đánh dấu đã xem * Nếu đã xem trên App SM thì cũng đánh dấu đã xem trên App QL |
| Gửi cho Sales | Khi Sales đang login   * Có thể nhận thông báo out app/in app * Có thể xem → Đánh dấu đã xem |  |
| Gửi cho Sales | Khi SUP login chọn tài khoản của sales   * Không nhận được thông báo out app * Khi vào thông báo → Chọn thông báo để xem dc → Đánh dấu đã xem (Ghi nhận là Sales đã xem) |  |

|  | Tên trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| 1 | **Thông báo** | Textbox | Có | Không | Nhập Tiêu đề, Nội dung thông báo để tìm kiếm.   * Tooltip: Tìm kiếm theo Tiêu đề, Nội dung thông báo . * Placeholder: * Tìm kiếm theo Tiêu đề, Nội dung thông báo * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các thông báo có Tiêu đề, Nội dung thông báo được nhập trong ô này (search like). |
| 2 | Trạng thái thông báo | Select box multichoice | Có | Không | * Trường này cho phép người dùng chọn trạng thái để lọc thông báo dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và chọn trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong thông báo. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái thông báo", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:   + Đang xử lý   + Đã gửi   + Thất bại  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách thông báo sẽ tự động được lọc để hiển thị những thông báo thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn tất cả trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder và Tootip: Chọn trạng thái để tìm kiếm |
| 3 | Trạng thái nhận thông báo | Select box multichoice | Có | Không | * Trường này cho phép người dùng chọn trạng thái để lọc thông báo dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và  một trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong thông báo. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái nhận thông báo", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:   + Chưa nhận   + Chưa xem   + Đã xem  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách thông báo sẽ tự động được lọc để hiển thị những thông báo thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn tất cả trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder và Tootip: Chọn trạng thái để tìm kiếm |
| 4 | Ngày gửi thông báo | From Date - To Date | Có | Có | * Khi mở màn hình Default từ ngày đầu tháng đến cuối tháng của tháng hiện tại * Người dùng chọn ngày để tìm kiếm tại icon calendar → Hiển thị popup calendar để chọn ngày; Định dạng thời gian: Từ ngày **dd-mm-yyyy****→**Đến ngày**dd-mm-yyyy**  * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn  * Đến Ngày >= Từ Ngày, * Đến Ngày - Từ Ngày: Có thể chọn bất kỳ khoảng thời gian nào miễn là trong vòng 90 ngày * Nhấn button Tìm Kiếm --> Lưới danh sách sẽ lọc các thông báo có ngày gửi theo thời gian đã chọn |
| 5 | Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Thông báo, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các Thông báo mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Thông báo. 2. **Danh sách Thông báo làm mới:** Sau khi nhấp, danh sách sẽ hiển thị toàn bộ các Thông báo hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Thông báo. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| 6 | Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách Thông báo. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Thông báo theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Thông báo. 3. **Hiển thị kết quả:** Danh sách Thông báo sẽ cập nhật và hiển thị các Thông báo phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Thông báo sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
|  | Lưới danh sách | | | | |
| 7 | Mã thông báo | Datacolumn have copy | Có (copy mã) | Không | Mã của thông báo được gửi đi  Chỉ những thông báo đã được gửi đi mới hiển thị ở màn hình này |
| 8 | Tiêu đề | Datacolumn | Không | Không | Tiêu đề của thông báo |
| 9 | Loại thông báo | Datacolumn | Không | Không | Loại thông báo: Thông báo chung, Khuyến mãi |
| 10 | Nội dung thông báo | Datacolumn link | Có | Không | Nội dung thông báo  Hiển thị link Xem chi tiết → khi click vào sẽ hiển thị chi tiết thông báo. |
| 11 | Kiểu hiển thị | Datacolumn | Không | Không | Kiểu hiển thị thông báo: Bình thường / Nổi bật |
| 12 | Trạng thái thông báo | Datacolumn | Không | Không | Trạng thái thông báo:   * Đang xử lý: Thông báo đang được gửi đi, tất cả đối tượng vẫn chưa nhận được thông báo * Đã gửi: Tất cả đối tượng đã nhận được thông báo * Thất bại: Có ít nhất 1 đối tượng nhận thông báo thất bại. |
| 13 | Ngày gửi thông báo | Datacolumn | Không | Không | Ngày user thực hiện bấm gửi thông báo, ghi nhận tại thời điểm nhấn button Gửi hoặc Ngày hệ thống thực hiện gửi thông báo tự động  Format: DD-MM-YYYY HH:MM:SS |
| 14 | Mã nhân viên nhận thông báo | Datacolumn have copy | Có (copy mã) | Không | Thông tin nhân viên nhận thông báo |
| 15 | Tên nhân viên, Chức vụ | Datacolumn | Không | Không | Thông tin tên nhân viên, chức vụ của nhân viên nhận thông báo |
| 16 | Trạng thái nhận thông báo | Datacolumn | Không | Không | Trạng thái nhân viên nhận thông báo:   * Chưa nhận: Thông báo chưa hiển thị trên thiết bị của nhân viên * Chưa xem: Thông báo đã hiển thị trên thiết bị của nhân viên, nhưng nhân viên chưa nhấn xem * Đã xem: Nhân viên đã xem thông báo trên thiết bị. |
| 17 | Ngày nhận thông báo | Datacolumn | Không | Không | Ngày nhân viên nhận được thông báo trên thiết bị.  Format: DD-MM-YYYY HH:MM:SS |