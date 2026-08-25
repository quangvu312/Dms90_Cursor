none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1723 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

## **Requirements**

### **Xem danh sách chỉ tiêu KPI**

| Title | UI | Descriptionlxl |
| --- | --- | --- |
|  |  | 1. Đường dẫn: Quản lý chỉ tiêu → Chỉ tiêu KPI 2. Mô tả   Màn hình Chỉ tiêu KPI bao gồm:   * Mã chỉ tiêu * Tên chỉ tiêu * Mô tả * Đối tượng áp dụng * Độ đo * Phân trang theo 10; 50; 100 |

| STT | **Tên KPI** | Mã KPI | Mô tả | **Công thức** | Độ đo | **Đối tượng** |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Sell Out tháng | MONTHLY\_SELL\_OUT | Là tổng doanh số bán hàng trong kỳ NVBH cần đạt. | Tổng doanh số hàng bán =(Số lượng hàng bán \* Giá bán - Tiền chiết khấu - (Số lượng hàng trả \* Giá bán) | Giá trị | Nhân viên bán hàng |
| 2 | Sell Out ngày | DAILY\_SELL\_OUT | Chỉ tiêu doanh số bình quần hằng ngày của nhân viên bán hàng | Lấy chỉ tiêu doanh số tháng/ số ngày làm việc của tháng | Giá trị | Nhân viên bán hàng |
| 3 | SKUs/Đơn hàng | SKU\_ORDER | Đo lường trung bình số lượng SKUs/ đơn hàng của từng nhân viên | Tổng đơn hàng có chứa SKUs chỉ định/Tổng đơn hàng bán ra | Phần trăm | Nhân viên bán hàng |
| 4 | % Penetration | PENETRATION | Đo lường độ thâm nhập, bao phủ | % Penetration= Tổng số Điểm bán có mua hàng trong tháng / Tổng số điểm bán có tuyến | Phần trăm | Nhân viên bán hàng |
| 5 | Điểm bán mở mới | NEW\_STORE | Tính tổng số lượng Điểm bán mới trong thời gian tính KPIs, XX giá trị đơn hàng | Số điểm bán hàng mới phát sinh đơn hàng = Tổng số điểm bán hàng mới phát sinh ít nhất 1 đơn hàng | Đếm | Nhân viên bán hàng |
| 6 | Tỉ lệ viếng thăm thành công | SUCCESSFUL\_CALL | % viếng thăm thành công trên MCP (master cover plan) + điều kiện giá trị đơn hàng tối thiếu XX tiền / YY số lượng AA Sản phẩm | %PC = Số lượt viếng thăm thành công / Số lượt ghé thăm kế hoạch trong ngày mà NVBH phải thực hiện | Đếm | Nhân viên bán hàng |
| 7 | Số đơn hàng | NEW\_ORDER | Tổng số lượng đơn hàng trong tháng không tính đơn trả | = Tổng số lượng đơn hàng trong tháng ( Trạng thái đã duyệt - Không bao gồm đơn trả) | Đếm | Nhân viên bán hàng |