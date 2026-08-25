none

| Target release |  |
| --- | --- |
| US | Finviet - Management Systemissuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolutionkey,summary,type,created,updated,due,assignee,reporter,priority,status,resolution70327f0f-d77b-320c-9607-8ab3659b722fECD-1210 |
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
|  |  | **Đường dẫn**   * Cách 1: Xem danh sách đơn hàng bán (NPP) → Chọn **In** tại dòng đơn hàng bất kì * Cách 2: Chọn xem chi tiết 1 đơn hàng bán bất kì → Chọn **In**   Khi click vào nút → hệ thống hiển thị popup xác nhận in   * + Text: *"Bạn có chắc chắn muốn in phiếu xuất kho hay không?"*   + Đồng ý: Hệ thống thực hiện in phiếu xuất kho theo template:   + Hủy: Hệ thống thực hiện đóng popup   **Mô tả**   * + - **Thông tin công ty:** hiển thị trên header của phiếu in  |  |  |  | | --- | --- | --- | | 1 | Logo công ty | Logo trên thông tin công ty | | 2 | Đơn vị/Business Unit | Tên công ty | | 3 | Địa chỉ hóa đơn | Địa chỉ công ty | | 4 | Mã số thuế | Mặc định trống |  * + **Thông tin phiếu**  |  |  |  | | --- | --- | --- | | 1 | Kho xuất | Kho xuất được nhập trên đơn hàng | | 2 | Ngày xuất | Ngày xuất kho được nhập trên phiếu | | 3 | Số | Mã đơn hàng sell-out | | 4 | Tên khách hàng | Mã - Tên - SDT của điểm bán trên đơn | | 5 | Ghi chú | Ghi chú trên đơn hàng | | 6 | Mã SP | Mã SKU của sản phẩm trên đơn hàng | | 7 | Tên sản phẩm | Tên sản phẩm trên đơn hàng | | 8 | ĐVT | Đơn vị tính của sản phẩm trên đơn hàng | | 9 | Số lượng | Số lượng của sản phẩm trên đơn hàng | | 10 | Đơn giá bán lẻ | Giá bán của sản phẩm trên đơn hàng | | 11 | Tiền CK | Tiền CK của sản phẩm trên đơn hàng  Nếu không có → hiển thị "0" | | 12 | Thanh toán | Thành tiền sau VAT của sản phẩm trên đơn hàng | | 13 | Tổng tiền CK | Tổng tiền CK của tất cả sản phẩm trên đơn | | 14 | Tổng Thanh toán | Tổng Thành tiền sau VAT của sản phẩm trên đơn hàng | | 15 | Thông tin khuyến mại | Mã - Tên CTKM trên đơn hàng | | 16 | Mã SP | Mã SP của sản phẩm trả trong CTKM | | 17 | Tên sản phẩm | Tên sản phẩm của sản phẩm trả trong CTKM | | 18 | ĐVT | Đơn vị tính của sản phẩm trong CTKM | | 19 | Số lượng | Số lượng của sản phẩm trong CTKM | | 20 | Tổng tiền hàng | = Tổng Thanh toán | | 21 | Tổng chiết khấu | = Tổng tiền CK từ CTKM | | 22 | Tổng tiền | = Tổng tiền hàng - Tổng tiền chiết khấu + Giảm trừ | | 23 | Số tiền bằng chữ | Số tiền bằng chữ của Tổng tiền hàng |   **Lưu ý:**   * Cho phép in ở tất cả trạng thái * In theo từng đơn hàng, nếu phiếu xuất kho có nhiều đơn hàng → in phiếu xuất kho theo từng đơn hàng đó * Khi xuất form in → hệ thống thực hiện mở tab mới trên trình duyệt |