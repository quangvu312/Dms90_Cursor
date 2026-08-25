none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1209 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

## **Requirements**

### **Form in đơn hàng bán**

|  |  |  |
| --- | --- | --- |
|  |  | **Đường dẫn**   * Cách 1: Xem danh sách đơn hàng bán (NPP) → Chọn **In** tại dòng đơn hàng bất kì * Cách 2: Chọn xem chi tiết 1 đơn hàng bán bất kì → Chọn **In**   Khi click vào nút → hệ thống hiển thị popup xác nhận in   * Text: *"Bạn có chắc chắn muốn in đơn hàng hay không?"* * Đồng ý: Hệ thống thực hiện in đơn hàng bán theo template: * Hủy: Hệ thống thực hiện đóng popup   **Mô tả**   * + **Thông tin công ty:** hiển thị trên header của phiếu in  |  |  |  | | --- | --- | --- | | 1 | Logo công ty | Logo trên thông tin công ty | | 2 | Đơn vị/Business Unit | Tên công ty | | 3 | Địa chỉ hóa đơn | Địa chỉ công ty | | 4 | Mã số thuế | Mặc định trống |  * + **Thông tin phiếu**  |  |  |  | | --- | --- | --- | | 1 | Số | Mã đơn hàng sell-out | | 2 | Loại đơn | = "Đơn bán hàng" | | 3 | Tên khách hàng | Mã - Tên - SDT của điểm bán trên đơn | | 4 | Địa chỉ | Địa chỉ của điểm bán trên đơn | | 5 | Ngày đặt hàng | Ngày đặt hàng trên đơn | | 6 | Ngày giao hàng | Ngày xuất kho trên phiếu xuất kho có bao gồm đơn hàng | | 7 | GSBH | Tên giám sát bán hàng | | 8 | NVBH | Tên - SDT nhân viên bán hàng Nếu không có → hiển thị trống | | 9 | Ghi chú | Ghi chú trên đơn hàng | | 10 | Mã SP | Mã SKU của sản phẩm trên đơn hàng | | 11 | Tên sản phẩm | Tên sản phẩm trên đơn hàng | | 12 | ĐVT | Đơn vị tính của sản phẩm trên đơn hàng | | 13 | Số lượng | Số lượng của sản phẩm trên đơn hàng | | 14 | Đơn giá bán lẻ | Giá bán của sản phẩm trên đơn hàng | | 15 | Tiền CK | Tiền CK của sản phẩm trên đơn hàng  Nếu không có → hiển thị "0" | | 16 | Thanh toán | Thành tiền sau VAT của sản phẩm trên đơn hàng | | 17 | Tổng tiền CK | Tổng tiền CK của tất cả sản phẩm trên đơn | | 18 | Tổng Thanh toán | Tổng Thành tiền sau VAT của sản phẩm trên đơn hàng | | 19 | Thông tin khuyến mại | Mã - Tên CTKM trên đơn hàng | | 20 | Mã SP | Mã SP của sản phẩm trả trong CTKM | | 21 | Tên sản phẩm | Tên sản phẩm của sản phẩm trả trong CTKM | | 22 | ĐVT | Đơn vị tính của sản phẩm trong CTKM | | 23 | Số lượng | Số lượng của sản phẩm trong CTKM | | 24 | Tổng tiền hàng | = Tổng Thanh toán | | 25 | Chiết khấu sản phẩm | = Tổng giá trị tiền giảm từ các CTKM được áp dụng, nếu không có mặc định là 0 | | 26 | Chiết khấu | = Tổng tiền CK | | 27 | Giảm trừ | *Giảm trừ*trên đơn hàng | | 28 | Tổng tiền | = Tổng tiền hàng - Chiết khấu sản phẩm - Chiết khấu + Giảm trừ | | 29 | Số tiền bằng chữ | Số tiền bằng chữ của Tổng tiền hàng |   **Lưu ý:**   * Cho phép in đơn hàng ở tất cả trạng thái * Khi xuất form in → hệ thống thực hiện mở tab mới trên trình duyệt * Không đóng popup Xem chi tiết đơn hàng khi bấm "In" tại popup |