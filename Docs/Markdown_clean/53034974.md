none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1213 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

## **Requirements**

### **Form in Purchase Order**

|  |  |  |
| --- | --- | --- |
|  |  | **Đường dẫn**   * Cách 1: Xem danh sách đơn hàng bán (NPP) → Chọn **In** tại dòng đơn hàng bất kì * Cách 2: Chọn xem chi tiết 1 đơn hàng bán bất kì → Chọn **In**   Khi click vào nút → hệ thống hiển thị popup xác nhận in    * + Text: *"Bạn có chắc chắn muốn in đơn đặt hàng hay không?"*   + Đồng ý: Hệ thống thực hiện in đơn đặt hàng theo template:   + Hủy: Hệ thống thực hiện đóng popup   **Mô tả**   * + **Thông tin công ty:** hiển thị trên header của phiếu in  |  |  |  | | --- | --- | --- | | 1 | Logo công ty | Logo trên thông tin công ty | | 2 | Đơn vị/Business Unit | Tên công ty | | 3 | Địa chỉ hóa đơn | Địa chỉ công ty | | 4 | Mã số thuế | Mặc định trống |  * + **Thông tin phiếu**  |  |  |  | | --- | --- | --- | | 1 | Số đặt hàng | Mã đơn Purchase Order | | 2 | Ngày đặt hàng | Ngày đặt hàng trên đơn | | 3 | Tên đơn vị nhận hàng | Mã - Tên - SDT của NPP trên đơn | | 4 | Địa chỉ nhận hàng | Địa chỉ của NPP trên đơn | | 6 | Ngày về kho khách hàng | Ngày nhập kho trên phiếu nhập kho tương ứng | | 9 | Ghi chú | Ghi chú trên đơn hàng | | 10 | Mã SP, HH | Mã SKU của sản phẩm trên đơn hàng | | 11 | Tên sản phẩm, hàng hoá | Tên sản phẩm trên đơn hàng | | 12 | ĐVT | Đơn vị tính của sản phẩm trên đơn hàng | | 13 | Số lượng | Số lượng của sản phẩm trên đơn hàng | | 14 | Đơn giá | Giá bán của sản phẩm trên đơn hàng | | 15 | Thành tiền | "Thành tiền" của sản phẩm trên đơn hàng | | 16 | Thuế suất (%) | "Thuế suất (%)" của sản phẩm trên đơn hàng | | 17 | Tiền thuế | "Tiền VAT (VND)" của sản phẩm trên đơn hàng | | 18 | Thành tiền sau thuế | "Thành tiền sau VAT (VND)" của sản phẩm trên đơn hàng | | 19 | Cộng | Tổng Thành tiền sau VAT (VND) của các sản phẩm trên đơn hàng | | 20 | Thông tin khuyến mại | Mã - Tên CTKM trên đơn hàng | | 21 | Mã SP | Mã SP của sản phẩm trả trong CTKM | | 22 | Tên sản phẩm | Tên sản phẩm của sản phẩm trả trong CTKM | | 23 | ĐVT | Đơn vị tính của sản phẩm trong CTKM | | 24 | Số lượng | Số lượng của sản phẩm trong CTKM | | 25 | Tổng tiền trước CK | = "Thành tiền" ~~+ "Tổng tiền chiết khấu"~~ | | 26 | Tổng tiền chiết khấu | = Tổng tiền chiết khấu KM | | 27 | Tổng phí vận chuyển | Mặc định "0" | | 28 | Tổng thuế | = Tổng Tiền thuế của tất cả sản phẩm | | 29 | Giảm trừ | *Giảm trừ*trên đơn hàng | | 30 | Tổng đơn hàng | = "Tổng tiền trước CK" - "Tổng tiền chiết khấu" + "Tiền thuế" + "Giảm trừ" | | 31 | Số tiền bằng chữ | Bằng chữ của Tổng đơn hàng | | 32 | Ghi chú: | Mặc định trống |   **Lưu ý:**   * Cho phép in đơn ở tất cả trạng thái * Khi xuất form in → hệ thống thực hiện mở tab mới trên trình duyệt * Không đóng popup Xem chi tiết đơn hàng khi bấm "In" tại popup |