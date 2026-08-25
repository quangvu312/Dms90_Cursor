none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1208 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

## **Requirements**

### **Form in HO bán NPP**

|  |  |  |
| --- | --- | --- |
|  |  | **Đường dẫn**   * Cách 1: Xem danh sách đơn hàng bán (NPP) → Chọn **In** tại dòng đơn hàng bất kì * Cách 2: Chọn xem chi tiết 1 đơn hàng bán bất kì → Chọn **In**   Khi click vào nút → hệ thống hiển thị popup xác nhận in   * Text: *"Bạn có chắc chắn muốn in đơn hàng hay không?"* * Đồng ý: Hệ thống thực hiện in phiếu HO bán NPP theo template: [HO] Form in HO bán NPP.xlsx * Hủy: Hệ thống thực hiện đóng popup   **Mô tả**   * + **Thông tin công ty:** hiển thị trên header của phiếu in  |  |  |  | | --- | --- | --- | | 1 | Logo công ty | Logo trên thông tin công ty | | 2 | Đơn vị/Business Unit | Tên công ty | | 3 | Địa chỉ hóa đơn | Địa chỉ công ty | | 4 | Mã số thuế | Mặc định trống |  * + **Thông tin phiếu**  |  |  |  | | --- | --- | --- | | 1 | Số mua hàng | Mã đơn sell - in | | 2 | Số đặt hàng | Mã đơn Purchase Order, nếu không có → hiển thị trống | | 3 | Ngày đặt hàng | Ngày đặt hàng trên đơn sell -in | | 4 | Tên đơn vị mua | Tên của nhà phân phối trên đơn | | 5 | Địa chỉ nhận hàng | Địa chỉ của nhà phân phối trên đơn | | 6 | Ngày về kho khách hàng | Ngày nhập kho trên phiếu nhập kho tương ứng, nếu không có → hiển thị trống | | 7 | Ghi chú | Ghi chú trên đơn hàng | | 8 | Số dư nợ | TBU | | 9 | Nợ quá hạn | TBU | | 10 | Thời hạn thanh toán | TBU | | 11 | Mã SP, HH | Mã SKU của sản phẩm trên đơn hàng | | 12 | Tên sản phẩm, hàng hoá | Tên sản phẩm trên đơn hàng | | 13 | ĐVT | Đơn vị tính của sản phẩm trên đơn hàng | | 14 | Số lượng | Số lượng của sản phẩm trên đơn hàng | | 15 | Đơn giá | Giá bán của sản phẩm trên đơn hàng | | 16 | Thành tiền | "Thành tiền" của sản phẩm trên đơn hàng   = Thành tiền sau VAT/(100+ Thuế VAT)) \* 100 | | 17 | Thuế suất (%) | "Thuế suất (%)" của sản phẩm trên đơn hàng | | 18 | Tiền thuế | "Tiền VAT (VND)" của sản phẩm trên đơn hàng  = Thành tiền sau VAT - Thành tiền | | 19 | Thành tiền sau thuế | "Thành tiền sau VAT (VND)" của sản phẩm trên đơn hàng  = Đơn giá x Số lượng | | 20 | Cộng | Tổng Thành tiền sau VAT (VND) của các sản phẩm trên đơn hàng | | 21 | Thông tin khuyến mại | Mã - Tên CTKM trên đơn hàng | | 22 | Mã SP | Mã SP của sản phẩm trả trong CTKM | | 23 | Tên sản phẩm | Tên sản phẩm của sản phẩm trả trong CTKM | | 24 | ĐVT | Đơn vị tính của sản phẩm trong CTKM | | 25 | Số lượng | Số lượng của sản phẩm trong CTKM | | 26 | Tổng tiền trước CK | = "Thành tiền" ~~+ "Tổng tiền chiết khấu"~~ | | 27 | Tổng tiền chiết khấu | = Tổng tiền chiết khấu KM | | 28 | Tổng phí vận chuyển | Mặc định "0" | | 29 | Tổng thuế | = Tổng tiền thuế của tất cả sản phẩm | | 30 | Giảm trừ | *Giảm trừ* trên đơn hàng | | 31 | Tổng đơn hàng | = "Tổng tiền trước CK" - "Tổng tiền chiết khấu" + "Tổng thuế + "Giảm trừ" | | 32 | Số tiền bằng chữ | Bằng chữ của Tổng đơn hàng | | 33 | Ghi chú: | Mặc định trống |   **Lưu ý:**   * Cho phép in đơn hàng ở tất cả trạng thái * Khi xuất form in → hệ thống thực hiện mở tab mới trên trình duyệt * Không đóng popup Xem chi tiết đơn hàng khi bấm "In" tại popup |