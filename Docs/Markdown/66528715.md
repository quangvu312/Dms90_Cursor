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

# Báo cáo theo dõi đơn hàng

Quy tắc tính doanh số cho mục doanh số và biểu đồ:

* Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên thuộc tất cả nhân viên cấp dưới của nhân viên đang chọn và nhân viên đang chọn (nếu là SUP, Sales) đặt hàng trong khoảng thời gian được chọn
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện dưới đây
* + Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
  + Doanh số được tính theo công thức được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo config VAT\_DISPLAY\_CONFIGURATION
  + Nguồn đơn hàng: Tính đơn hàng trong tuyến, ngoại tuyến, chăm sóc. Đơn hàng được tạo trên App và Web có chọn thông tin nhân viên
  + Trạng thái đơn hàng: Trạng thái được chọn ở config ORDER\_STATUS\_FOR\_APP\_REPORT
* Chỉ thay đổi cách tính doanh số + danh sách đơn hàng phải theo theo status được chọn ở config [ORDER\_STATUS\_FOR\_APP\_REPORT](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466), các thông tin còn lại không thay đổi
* Lưu ý thông tin ngày tính doanh số = Ngày đặt hàng

RedV1.0.1 Bổ sung bộ lọc theo tuyến bán hàng

Khi vào màn hình Báo cáo theo dõi đơn hàng, 

* Hệ thống mặc định không filter theo tuyến và hiển thị dữ liệu của tất cả các tuyến của thông tin đang xem.

| Chức năng | Mô tả |
| --- | --- |
| Bộ lọc | Click vào bộ lọc hiển thị màn hình lọc như sau:  **Bổ sung tiêu chí lọc sau:**   * **Tuyến bán hàng (multiple choice)****:**    + Mặc định không chọn option nào <=> chọn tất cả dữ liệu để lọc → hệ thống tính doanh số theo tất cả các tuyến của thông tin đang xem.   + Ô lựa chọn, điều hướng đến popup Danh sách tuyến bán hàng. Popup bao gồm các thông tin:     - Searchbox: placeholder: "Tìm kiếm theo tên tuyến bán hàng"     - Danh sách tuyến bán hàng: Hiển thị danh sách các tuyến bán hàng đang hoạt động được gán cho thông tin đang xem và các nhân viên trực thuộc.     - Button "Xác nhận":        * Enable button "Xác nhận" khi có 1 lựa chọn.       * Chọn xác nhận để hoàn tất chọn chương trình     - Icon Button "Đóng": Click vàp button → hệ thống đóng popup, trở về màn hình Bộ lọc     - Sau khi  xác nhận thành công, hiển thị "Đã chọn: X", với X là số tuyến bán hàng đã chọn. Click vào hiển thị popup sort danh sách đã chọn lên đầu page.     - Danh sách có phân trang. |