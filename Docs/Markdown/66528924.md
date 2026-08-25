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

Khi vào màn hình Báo cáo KPI, 

* Hệ thống mặc định không filter theo tuyến và ghi nhận thực đạt của chỉ tiêu theo tất cả các tuyến của thông tin đang xem thỏa điều kiện ghi nhận chỉ tiêu.

| Chức năng | Mô tả |
| --- | --- |
| Bộ lọc | Click vào bộ lọc hiển thị màn hình lọc như sau:  **Bổ sung tiêu chí lọc sau:**   * **Tuyến bán hàng (multiple choice)****:**    + Mặc định không chọn option nào <=> chọn tất cả dữ liệu để lọc → hệ thống tính doanh số theo tất cả các tuyến của thông tin đang xem.   + Ô lựa chọn, điều hướng đến popup Danh sách tuyến bán hàng. Popup bao gồm các thông tin:     - Searchbox: placeholder: "Tìm kiếm theo tên tuyến bán hàng"     - Danh sách tuyến bán hàng: Hiển thị danh sách các tuyến bán hàng đang hoạt động được gán cho thông tin đang xem.     - Button "Xác nhận":        * Enable button "Xác nhận" khi có 1 lựa chọn.       * Chọn xác nhận để hoàn tất chọn chương trình     - Icon Button "Đóng": Click vàp button → hệ thống đóng popup, trở về màn hình Bộ lọc     - Sau khi  xác nhận thành công, hiển thị "Đã chọn: X", với X là số tuyến bán hàng đã chọn. Click vào hiển thị popup sort danh sách đã chọn lên đầu page.     - Danh sách có phân trang.   Lưu ý:   * Áp dụng cho Danh sách KPI theo tháng, theo thời gian, theo ngày * Tại màn hình chi tiết từng KPI, dữ liệu chi tiết cũng được hiển thị dựa trên filter này. |