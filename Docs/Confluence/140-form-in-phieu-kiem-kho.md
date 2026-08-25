none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1211 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

## **Requirements**

### **Form in kiểm kho**

|  |  |  |
| --- | --- | --- |
|  |  | **Đường dẫn**   * Cách 1: Xem danh sách đơn hàng bán (NPP) → Chọn **In** tại dòng đơn hàng bất kì * Cách 2: Chọn xem chi tiết 1 đơn hàng bán bất kì → Chọn **In**   Khi click vào nút → hệ thống hiển thị popup xác nhận in   * + - Text: *"Bạn có chắc chắn muốn in phiếu kiểm kho hay không?"*     - Đồng ý: Hệ thống thực hiện in phiếu kiểm kho kho theo template:     - Hủy: Hệ thống thực hiện đóng popup   **Mô tả**   * + **Thông tin công ty:** hiển thị trên header của phiếu in  |  |  |  | | --- | --- | --- | | 1 | Logo công ty | Logo trên thông tin công ty | | 2 | Đơn vị/Business Unit | Tên công ty | | 3 | Địa chỉ hóa đơn | Địa chỉ công ty | | 4 | Mã số thuế | Mặc định trống |  * + **Thông tin phiếu**  |  |  |  | | --- | --- | --- | | 1 | Ngày | Ngày kiểm kho được nhập trên phiếu kiểm kho | | 2 | Kho | Kho kiểm trên phiếu kiểm kho | | 3 | Mã SP | Mã SKU của sản phẩm trên phiếu kiểm kho | | 4 | Tên sản phẩm | Tên sản phẩm trên phiếu kiểm kho | | 5 | Lô | Lô của sản phẩm trên phiếu kiểm kho | | 6 | Hạn sử dụng | Hạn sử dụng của Lô | | 7 | Tồn hệ thống | Số lượng tồn kho của hệ thống trên phiếu kiểm kho | | 8 | Tồn thực tế | Số lượng tồn kho được tính theo công thức: Tồn kho hệ thống + Chênh lệch tồn kho |   **Lưu ý:**   * Cho phép in phiếu kiểm kho ở tất cả trạng thái * Khi xuất form in → hệ thống thực hiện mở tab mới trên trình duyệt |