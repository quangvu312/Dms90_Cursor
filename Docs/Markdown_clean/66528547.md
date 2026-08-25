|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.1 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Báo cáo KPI

Quy tắc tính doanh số cho các KPI:

* Cách tính doanh số sẽ thay đổi theo config VAT\_DISPLAY\_CONFIGURATION

| Hiện tại | | Thay đổi cho Hương Thủy |
| --- | --- | --- |
| KPI | Mô tả |  |
| Doanh số trung bình theo ngày | Doanh số trung bình theo ngày  **Doanh số tháng** = Sum(Thành tiền sau VAT - Khuyến mãi + Giảm trừ) các đơn sellout | **Công thức trước VAT:**  **Doanh số tháng** = Số lượng x giá bán (Giá bán chưa tính VAT, không tính toán CTKM)  Tính tổng tất cả các đơn hàng đủ điều kiện   ---------------------------------------------------  **Công thức sau VAT**  **Doanh số tháng** = Số lượng × Đơn giá sau V – Khuyến mãi + Giảm trừ  Tính tổng tất cả các đơn hàng đủ điều kiện |
| Doanh số tháng | Doanh số tháng  **Doanh số tháng** = Sum(Thành tiền sau VAT - Khuyến mãi + Giảm trừ) các đơn sellout theo **cặp key NVBH - SS - NPP** | **Công thức trước VAT:**  **Doanh số tháng** = Số lượng x giá bán (Giá bán chưa tính VAT, không tính toán CTKM)  Tính tổng tất cả các đơn hàng đủ điều kiện   ---------------------------------------------------  **Công thức sau VAT**  **Doanh số tháng** = Số lượng × Đơn giá sau V – Khuyến mãi + Giảm trừ  Tính tổng tất cả các đơn hàng đủ điều kiện |
| Điểm bán hoạt động | Số lượng Điểm bán có phát sinh doanh số  Doanh số tính theo Ngày xuất kho | Số lượng Điểm bán có phát sinh doanh số  Doanh số tính theo Ngày đặt hàng |
| Tỷ lệ Điểm bán hoạt động | Số lượng Điểm bán có phát sinh doanh số  Doanh số tính theo Ngày xuất kho | Số lượng Điểm bán có phát sinh doanh số  Doanh số tính theo Ngày đặt hàng |

RedV1.0.1 Bổ sung bộ lọc theo tuyến bán hàng

Khi vào màn hình Báo cáo theo dõi đơn hàng, 

* Nếu SM đã chọn tuyến trước đó, hệ thống mặc định filter theo tuyến đã được chọn
* Nếu SM chưa chọn tuyến trước đó, hệ thống mặc định không filter theo tuyến và ghi nhận thực đạt của chỉ tiêu theo tất cả các tuyến của SM thỏa điều kiện ghi nhận chỉ tiêu.

| Chức năng | Mô tả |
| --- | --- |
| Bộ lọc | Click vào bộ lọc hiển thị màn hình lọc như sau:  **Bổ sung tiêu chí lọc sau:**   * **Tuyến bán hàng (multichoice)**   + Các option là các tuyến đang hoạt động được gán cho SM đang login.     - Nếu SM đã chọn tuyến trước đó, mặc định chọn tuyến đã chọn     - Nếu SM chưa chọn tuyến, mặc định không chọn option nào <=> chọn tất cả dữ liệu để lọc → hệ thống thực đạt của chỉ tiêu theo tất cả các tuyến của SM thỏa điều kiện ghi nhận chỉ tiêu.   + Danh sách các tuyến được sắp xếp theo alphabet, mặc định hiển thị 4 tuyến bán hàng đầu tiên   + Khi apply bộ lọc theo tuyến bán hàng, hệ thống hiển thị dữ liệu thực đạt của chỉ tiêu theo các tuyến được chọn. Ví dụ: SM phát sinh và được ghi nhận KPI cho 2 đơn hàng (1 đơn hàng trong tuyến 01, 1 đơn hàng trong tuyến 02). SM filter theo tuyến 01 → KPI Số đơn hàng chỉ ghi nhận 1 đơn thuộc tuyến 01, Doanh số cũng chỉ ghi nhận của đơn hàng thuộc tuyến 01, ... (tương tự cho các KPI liên quan đến đơn hàng trong tuyến 01 đó). * Xem thêm [button]: Khi click vào nút → hiển thị danh sách tất cả các tuyến bán hàng * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn vào thực nhận của các KPI có liên quan đến tuyến.   Lưu ý:   * Áp dụng cho Danh sách KPI theo tháng, theo thời gian, theo ngày * Tại màn hình chi tiết từng KPI, dữ liệu chi tiết cũng được hiển thị dựa trên filter này. |