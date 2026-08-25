|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0: |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Màn hình chính

Quy tắc tính doanh số cho mục doanh số và biểu đồ:

* Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên đặt hàng trong khoảng thời gian được chọn. Doanh số = Số lượng x giá bán (Giá bán chưa  tính VAT, không tính toán CTKM)
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện dưới đây
* + Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
  + Doanh số được tính theo công thức được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo config [VAT\_DISPLAY\_CONFIGURATION](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)
  + Nguồn đơn hàng: Tính đơn hàng trong tuyến, ngoại tuyến, chăm sóc. Đơn hàng được tạo trên App và Web có chọn thông tin nhân viên
  + Trạng thái đơn hàng: Trạng thái được chọn ở config [ORDER\_STATUS\_FOR\_APP\_REPORT](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466)
* Lưu ý thông tin ngày tính doanh số = Ngày đặt hàng

| Trường dữ liệu | Mô tả |
| --- | --- |
| Chỉ số hoạt động ngày | * Trạng thái đơn hàng: Trạng thái được chọn ở config [ORDER\_STATUS\_FOR\_APP\_REPORT](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466) |
| Chỉ tiêu KPI | Thực đạt KPI sẽ lấy theo config [VAT\_DISPLAY\_CONFIGURATION](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466) |
| Doanh số 7 ngày gần nhất | * + Số đơn hàng: Tổng số đơn hàng trong 7 ngày gần nhất của nhân viên. Quy tắc tính đơn hàng hợp lệ được mô tả ở đầu tài liệu này.   + Tổng tiền: Tổng tiền đơn hàng trong 7 ngày gần nhất của nhân viên.     - Quy tắc tính doanh số được mô tả ở đầu tài liệu này     - Đơn vị là triệu đồng, lấy 2 số thập phân sau dấu phẩy |

* Chỉ thay đổi cách tính doanh số và các nội dung trên, các thông tin còn lại không thay đổi