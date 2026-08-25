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

# Lịch sử chấm công

* Chức năng này giúp nhân viên theo dõi lịch sử chấm công theo thời gian
* Cung cấp dữ liệu chính xác về chấm công để nhân viên theo dõi tính toán lương và các thông tin như vào trễ, ra sớm, chấm công sai vị trí).
* Từ menu báo cáo → Chọn Báo cáo chấm công

Khi chọn vào lịch sử chấm công, hiển thị màn hình như sau:

| Trường dữ liệu | Mô tả |
| --- | --- |
| Mặc định | * Mặc định khi mở màn hình sẽ hiển thị thông tin lịch sử chấm công của ngày hiện tại, người dùng có thể chọn lại bộ lọc để xem thông tin lịch sử chấm công. * Trường hợp ngày hiện tại **thông tin chấm công đầu ngày chưa có** thì sẽ hiển thị "Không có dữ liệu" và hiển thị Thực hiện chấm công. User click vào button Thực hiện chấm công → Hệ thống sẽ mở màn hình [SM-APP] Chấm công trên Salesman App - Chức năng cũ |
| Bộ lọc | * Các trường thông tin cơ bản đã mô tả ở Bộ lọc dữ liệu * Ngày chấm công:   + Có thể chọn từ ngày - đến ngày để xem lịch sử (Đến ngày >= Từ ngày)   + Có thể chọn bất kỳ khoảng thời gian nào nhưng chỉ cho phép chọn tối đa 90 ngày để xem dữ liệu   + Hiển thị mặc định Từ ngày = Đến ngày = Ngày hiện tại * Loại chấm công:   + Chỉ chọn 1 loại   + Không chấm công: Hiển thị thông tin các ngày không thực hiện chấm công đầu ngày.   + Nghỉ phép: Hiển thị thông tin các ngày có nghỉ phép được duyệt thành công.   + Trường hợp không chọn loại nào trong mục này, được hiểu là chọn tất cả <=> Load tất cả lịch sử chấm công, không filter theo loại chấm công * Trường hợp không lọc thông tin nào: icon hiển thị: . * Trường hợp có lọc ít nhất 1 thông tin: icon hiển thị: |
| Ngày | * Hiển thị đầy đủ số ngày trong thời gian được chọn từ bộ lọc.   + Trường hợp Ngày trong khoảng được chọn là **ngày làm việc** được cấu hình trong [HO] Cấu hình chấm công → Sẽ hiển thị ngày này lên lịch sử. Cho dù có thông tin chấm công hay không có thông tin chấm công cũng đều hiển thị ngày này.   + Trường hợp Ngày trong khoảng được chọn **không phải** **ngày làm việc** được cấu hình trong [HO] Cấu hình chấm công và nhân viên **không có thông tin chấm công đầu ngày** trong ngày này → Không hiển thị ngày này lên lịch sử chấm công.   + Trường hợp Ngày trong khoảng được chọn **không phải** **ngày làm việc** được cấu hình trong [HO] Cấu hình chấm công và nhân viên **CÓ thông tin chấm công đầu ngày** trong ngày này → Hiển thị ngày này lên lịch sử chấm công.  * Rule màu của các thẻ:  * + Đỏ: Các case ko ghi nhận chấm công hoặc auto check out hoặc chỉ mới check in chưa check out   + Xanh: Ghi nhận nghỉ phép được duyệt thành công   + Xám: chấm công đủ * Trường hợp ngày hôm đó có thông tin nghỉ phép được duyệt thành công, khi nhấn chi tiết sẽ hiển thị chi tiết phiếu nghỉ phép, sẽ được mô tả ở chức năng Nghỉ phép * Nghỉ phép chỉ tính phiếu nghỉ phép được duyệt thành công, các phiếu nghỉ phép chưa được duyệt hoặc từ chối thì xem như chưa ghi nhận nghỉ phép. |
| Bắt đầu | * Thời gian nhân viên chấm công đầu ngày, ghi nhận tại chức năng [SM-APP] Chấm công trên Salesman App - Chức năng cũ trên App Salesman * Trường hợp ngày trên danh sách = ngày hiện tại và chưa có dữ liệu chấm công đầu ngày thì sẽ hiển thị link "Thực hiện chấm công" → Khi click vào sẽ điều hướng đến màn hình [SM-APP] Chấm công đầu ngày      * Khoảng cách: Khoảng cách tính bằng mét (m) giữa địa điểm của thiết bị và địa điểm chấm công được cài đặt, được ghi nhận khi thực hiện chấm công đầu ngày   + Trường hợp bị vượt khoảng cách, sẽ hiển thị icon !   + Click vào icon sẽ có thông tin lý do vượt khoảng cách: |
| Kết thúc | * Thời gian nhân viên chấm công cuối ngày, ghi nhận tại chức năng [SM-APP] Chấm công trên Salesman App - Chức năng cũ trên App Salesman * Trường hợp ngày trên danh sách = ngày hiện tại thì sẽ hiển thị link "Thực hiện chấm công" → Khi click vào sẽ điều hướng đến màn hình [SM-APP] Chấm công cuối ngày: * Trường hợp chưa thực hiện chấm công cuối ngày và ngày trên danh sách khác ngày hiện tại thì sẽ hiển thị như sau: * Trường hợp hệ thống tự động chấm công cuối ngày sẽ hiển thị như sau * Khoảng cách: Khoảng cách tính bằng mét (m) giữa địa điểm của thiết bị và địa điểm chấm công được cài đặt, được ghi nhận khi thực hiện chấm công đầu ngày   + Trường hợp bị vượt khoảng cách, sẽ hiển thị icon !   + Click vào icon sẽ có thông tin lý do vượt khoảng cách: |
| Tổng giờ công | = Chấm công cuối ngày - Chấm công đầu ngày  Quy đổi ra HH:MM:SS  Dữ liệu trường này sẽ không ảnh hưởng từ thông tin Xin nghỉ phép. |
| Hình chấm công đầu ngày | Hiển thị hình ảnh chấm công đầu ngày của nhân viên  Click vào để xem chi tiết hình ảnh chấm công, trường hợp có nhiều ảnh, có thể trượt ngang để xem |
| Hình chấm công cuối ngày | Hiển thị hình ảnh chấm công cuối ngày của nhân viên  Click vào để xem chi tiết hình ảnh chấm công, trường hợp có nhiều ảnh, có thể trượt ngang để xem |
| Chi tiết chấm công | |
| Tổng thời gian làm việc ngày 22/11/2024 | = Chấm công cuối ngày - Chấm công đầu ngày  Quy đổi ra HH:MM:SS  Dữ liệu trường này sẽ không ảnh hưởng từ thông tin Xin nghỉ phép. |
| Bắt đầu | * Địa chỉ chấm công * Kinh độ, vĩ độ chấm công * Khoảng cách chấm công * Địa chỉ chấm công được cài đặt * Trạng thái:   + Hoàn thành: Chấm công đầu ngày đúng vị trí   + Sai vị trí: Chấm công đầu ngày sai vị trí + hiển thị lý do vượt khoảng cách |
| Kết thúc | * Địa chỉ chấm công * Kinh độ, vĩ độ chấm công * Khoảng cách chấm công * Địa chỉ chấm công được cài đặt * Trường hợp chưa thực hiện chấm công cuối ngày và ngày trong chi tiết = ngày hiện tại thì sẽ hiển thị link "Thực hiện chấm công" → Khi click vào sẽ điều hướng đến màn hình : [SM-APP] Chấm công cuối ngày * Trường hợp chưa thực hiện chấm công cuối ngày và ngày trong chi tiết =khác ngày hiện tại thì sẽ hiển thị như sau:  * Trường hợp chưa thực hiện chấm công cuối ngày, hệ thống tự động chấm công cuối ngày vào 23:59:59, thì sẽ hiển thị như sau:  * Trạng thái:   + Chưa thực hiện: Chưa thực hiện chấm công cuối ngày   + Hoàn thành: Chấm công cuối ngày đúng vị trí   + Sai vị trí: Chấm công cuối ngày sai vị trí + hiển thị lý do vượt khoảng cách |
| Hình ảnh chấm công | Hình ảnh chấm công đầu ngày, cuối ngày  Click vào để xem chi tiết hình ảnh chấm công, trường hợp có nhiều ảnh, có thể trượt ngang để xem |