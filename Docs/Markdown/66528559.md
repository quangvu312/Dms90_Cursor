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

# Báo cáo theo dõi đơn hàng

Quy tắc tính doanh số cho mục doanh số và biểu đồ:

* Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên đặt hàng trong khoảng thời gian được chọn.
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện dưới đây
* + Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
  + Doanh số được tính theo công thức được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo config VAT\_DISPLAY\_CONFIGURATION
  + Nguồn đơn hàng: Chỉ cần có đơn hàng là sẽ đếm, không quan tâm trong tuyến hay ngoại tuyến hay tạo ở chức năng chăm sóc hay tạo trên Portal
  + Trạng thái đơn hàng: Trạng thái được chọn ở config ORDER\_STATUS\_FOR\_APP\_REPORT
* Chỉ thay đổi cách tính doanh số + danh sách đơn hàng phải theo theo status được chọn ở config [ORDER\_STATUS\_FOR\_APP\_REPORT](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466), các thông tin còn lại không thay đổi
* Lưu ý thông tin ngày tính doanh số = Ngày đặt hàng

RedV1.0.1 Bổ sung bộ lọc theo tuyến bán hàng

Khi vào màn hình Báo cáo theo dõi đơn hàng, 

* Nếu SM đã chọn tuyến trước đó, hệ thống mặc định filter theo tuyến đã được chọn
* Nếu SM chưa chọn tuyến trước đó, hệ thống mặc định không filter theo tuyến và hiển thị doanh số của tất cả các tuyến của SM đang phụ trách.

| Chức năng | Mô tả |
| --- | --- |
| Bộ lọc | Click vào bộ lọc hiển thị màn hình lọc như sau:  **Bổ sung tiêu chí lọc sau:**   * **Tuyến bán hàng (multichoice)**   + Các option là các tuyến đang hoạt động được gán cho SM đang login.     - Nếu SM đã chọn tuyến trước đó, mặc định chọn tuyến đã chọn     - Nếu SM chưa chọn tuyến, mặc định không chọn option nào <=> chọn tất cả dữ liệu để lọc → hệ thống tính doanh số theo tất cả các tuyến của SM   + Khi apply bộ lọc theo tuyến bán hàng, hệ thống hiển thị dữ liệu của các đơn hàng phát sinh trong các tuyến được lọc.   + Danh sách các tuyến được sắp xếp theo alphabet, mặc định hiển thị 4 tuyến bán hàng đầu tiên * Xem thêm [button]: Khi click vào nút → hiển thị danh sách tất cả các tuyến bán hàng * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào biểu đồ và danh sách đơn hàng và reload danh sách đơn hàng hiển thị kết quả tìm kiếm |