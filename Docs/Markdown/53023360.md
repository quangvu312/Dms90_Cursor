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

# Danh sách dữ liệu chung

| STT | Loại dữ liệu chung | Mã dữ liệu (Enum) | Ví dụ cho dữ liệu | Mô tả |
| --- | --- | --- | --- | --- |
| 1 | Lý do không thực hiện nhiệm vụ bắt buộc | **MANDATORY\_TASK\_NOT\_COMPLETED\_REASON** | Chủ cửa hàng đi vắng, Mất điện không thể kiểm kho, Không có hàng để chụp ảnh | MANDATORY\_TASK\_NOT\_COMPLETED\_REASON = 'MANDATORY\_TASK\_NOT\_COMPLETED\_REASON', // Lý do không thực hiện nhiệm vụ bắt buộc |
| 2 | Điểm bán đóng cửa | **STORE\_CLOSED** | Trả lại mặt bằng, Nghỉ Lễ/Tết, Tạm đóng cửa do sửa chữa | STORE\_CLOSED = 'STORE\_CLOSED', // Điểm bán đóng cửa |
| 3 | Vấn đề hỗ trợ | **SUPPORT\_ISSUE** | Lỗi app không đồng bộ được, Không lấy được tọa độ, App văng khi chụp ảnh | SUPPORT\_ISSUE = 'SUPPORT\_ISSUE', // Vấn đề hỗ trợ |
| 4 | Lý do hỗ trợ | **SUPPORT\_REASON** | Cấp lại mật khẩu, Hỗ trợ mở khóa tài khoản, Điều chỉnh tuyến gấp | SUPPORT\_REASON = 'SUPPORT\_REASON', // Lý do hỗ trợ |
| 5 | Lý do từ chối hỗ trợ | **SUPPORT\_DECLINED\_REASON** | Yêu cầu sai quy trình, Thiếu hình ảnh chứng minh, Nằm ngoài thẩm quyền xử lý | SUPPORT\_DECLINED\_REASON = 'SUPPORT\_DECLINED\_REASON', // Lý do từ chối hỗ trợ |
| 6 | **Lý do vượt khoảng cách** | **DISTANCE\_EXCEEDED\_REASON** | Kẹt xe nghiêm trọng, Đang đi công tác tỉnh, Họp đột xuất với đối tác | DISTANCE\_EXCEEDED\_REASON = 'DISTANCE\_EXCEEDED\_REASON', //Lý do vượt khoảng cách   * Check-in và Check-out điểm bán |
| 7 | Lý do vượt khoảng cách chấm công đầu ngày | **CHECKIN\_DISTANCE\_EXCEEDED\_REASON** | Kẹt xe nghiêm trọng, Đang đi công tác tỉnh, Họp đột xuất với đối tác | CHECKIN\_DISTANCE\_EXCEEDED\_REASON = 'CHECKIN\_DISTANCE\_EXCEEDED\_REASON', //Lý do vượt khoảng cách chấm công đầu ngày |
| 8 | Lý do từ chối duyệt điểm bán | **REJECT\_STORE\_REASON** | Trùng lặp thông tin với điểm bán khác, Hình ảnh mờ không rõ biển hiệu | REJECT\_STORE\_REASON = 'REJECT\_STORE\_REASON', // Lý do từ chối cửa hàng |
| 9 | Loại công việc | **WORKING\_TYPE** | Làm việc tại văn phòng, Đi thị trường, Làm việc tại nhà (WFH), Họp NPP | WORKING\_TYPE = 'WORKING\_TYPE', // Loại công việc |
| 10 | Địa điểm làm việc | **WORKING\_LOCATION** | Trụ sở chính, Chi nhánh Hà Nội, Nhà phân phối A, Khu vực Quận 1 | WORKING\_LOCATION = 'WORKING\_LOCATION', // Địa điểm làm việc |
| 11 | Thời gian làm việc | **WORKING\_SHIFT** | Ca Sáng (08:00 - 12:00), Ca Chiều (13:00 - 17:00), Hành chính | WORKING\_SHIFT = 'WORKING\_SHIFT', // Thời gian làm việc |
| 12 | Lý do từ chối kế hoạch làm việc | **WORKING\_PLAN\_REJECT\_REASON** | Kế hoạch đi sai tuyến bán hàng quy định, Trùng lịch họp công ty | WORKING\_PLAN\_REJECT\_REASON = 'WORKING\_PLAN\_REJECT\_REASON', //Lý do từ chối duyệt kế hoạch |
| 13 | Lý do từ chối chi tiết làm việc | **WORKING\_PLAN\_DETAIL\_REJECT\_REASON** | Điểm bán không thuộc mục tiêu KPI tháng này, Đã viếng thăm ngày hôm qua | WORKING\_PLAN\_DETAIL\_REJECT\_REASON = 'WORKING\_PLAN\_DETAIL\_REJECT\_REASON', //Lý do từ chối chi tiết làm việc |
| 14 | Lý do từ chối duyệt CTTB (Chương trình trưng bày) | **EXHIBITION\_REJECT\_REASON** | Thiếu hàng hóa trưng bày, Không có POSM/Bảng hiệu theo quy định | EXHIBITION\_REJECT\_REASON = 'EXHIBITION\_REJECT\_REASON', //Lý do từ chối duyệt CTTB |
| 15 | Lý do từ chối duyệt CTTL (Chương trình tích lũy) | **ACCUMULATION\_REJECT\_REASON** | Không đạt mức doanh số yêu cầu, Tích lũy sai mã sản phẩm quy định | ACCUMULATION\_REJECT\_REASON = 'ACCUMULATION\_REJECT\_REASON', //Lý do từ chối duyệt CTTL |
| 16 | Lý do từ chối duyệt điều chỉnh điểm bán | **REJECT\_ADJUSTMENT\_REASON** | Thông tin điều chỉnh không hợp lệ, Thiếu xác nhận từ cấp quản lý | REJECT\_ADJUSTMENT\_REASON = 'REJECT\_ADJUSTMENT\_REASON', // Lý do từ chối duyệt điều chỉnh điểm bán |
| 17 | Lý do hủy phiếu xuất kho | **GOODS\_DELIVERY\_NOTE\_CANCEL\_REASON** | Khách hàng đổi ý hủy đơn, Kho báo hết hàng thực tế, Xe giao hàng hỏng | GOODS\_DELIVERY\_NOTE\_CANCEL\_REASON = 'GOODS\_DELIVERY\_NOTE\_CANCEL\_REASON', // Lý do hủy phiếu xuất kho |
| 18 | Lý do trả đơn bán hàng | **RETURN\_ORDER\_REASON** | Giao nhầm mã hàng, Sản phẩm móp méo/vỡ do vận chuyển, Hàng cận date | RETURN\_ORDER\_REASON = 'RETURN\_ORDER\_REASON', // Lý do trả đơn bán hàng |
| 19 | Loại hình thức giao hàng | **DELIVERY\_TYPE** | Giao hàng tận nơi, Khách tự đến lấy (Pick up), Chuyển phát nhanh | DELIVERY\_TYPE = 'DELIVERY\_TYPE', // Loại hình thức giao hàng |
| 20 | Loại nghỉ phép | **LEAVE\_TYPE** | Nghỉ phép năm, Nghỉ ốm, Nghỉ thai sản, Nghỉ không lương | * LEAVE\_TYPE = 'LEAVE\_TYPE', // Loại nghỉ phép  * Hiển thị trên màn hình tạo mới Phiếu nghỉ phép → Chọn Loại nghỉ phép được set từ Dữ liệu chung. Nếu chưa cấu hình một loại nghỉ phép nào thì sẽ chọn option mặc định là "Khác" và nhập lý do Khác |
| 21 | Người dùng check in cửa hàng | **USER\_CHECK\_IN\_STORE** | Dữ liệu ghi nhận hành vi check-in của User | USER\_CHECK\_IN\_STORE = 'USER\_CHECK\_IN\_STORE', // Người dùng check in cửa hàng |

 \_CHECK\_IN\_STORE