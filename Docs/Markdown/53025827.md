|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chức năng đặt hàng ở nhiệm vụ chăm sóc trên App Salesman, đơn hàng này sẽ không bao gồm các khuyến mãi |
| Document version | RedV1.0.0  RedV1.0.1 : Thêm trạng thái Đã xuất kho |
| Document status | GreenDONE |
| Document owner | Hoàng Quyên (BA - Product Team) |
| Chage History | 2 |

truenonenone

# 1. Config hiển thị tồn kho

[Danh sách cấu hình chung - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021846)  

Khai báo config hiển thị tồn kho SHOW\_INVENTORY\_APP

| STT | Tên cấu hình | Đối tượng áp dụng | **Từ khóa** | **Loại** | **Giá trị** | Tên nhóm | Mô tả |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | Cấu hình hiển thị tồn kho trên App Salesman | GreenMOBILE  RedAPI | SHOW\_INVENTORY\_APP | Boolean | * 0: Không hiển thị thông tin tồn kho của sản phẩm khi đặt đơn hàng * 1: Hiển thị thông tin tồn kho của sản phẩm khi đặt đơn hàng | Đơn hàng | * 0: Không hiển thị thông tin tồn kho của sản phẩm khi đặt đơn hàng * 1: Hiển thị thông tin tồn kho của sản phẩm khi đặt đơn hàng |

# 2. Nhiệm vụ đặt hàng

Từ nhiệm vụ chăm sóc điểm bán, chọn nhiệm vụ đặt hàng

* Hệ thống mở giao diện danh sách đơn hàng ngày hiện tại. **Thông tin đơn hàng sẽ hiển thị theo cập nhật mới nhất trên portal**

* Không cần checkin điểm bán cũng thực hiện được nhiệm vụ này
* Chức năng danh sách đơn hàng, chi tiết đơn hàng, tạo đơn hàng, xác nhận đơn hàng giống như ở nhiệm vụ viếng thăm, đã được mô tả ở [SM-APP] Đặt hàng ở nhiệm vụ viếng thăm (không khuyến mãi)