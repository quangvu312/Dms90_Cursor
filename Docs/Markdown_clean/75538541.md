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

# Dashboard NPP

Link UI:

1. ## **Bộ lọc**

| Tên trường | Mô tả |
| --- | --- |
| Thời gian | * Là khoảng thời gian chốt số liệu cho toàn bộ dashboard. * Mặc định: đầu tháng đến hôm nay. * Đến ngày >= Từ ngày * Đến ngày - Từ ngày <= 100 ngày |
| Trạng thái đơn hàng | Dữ liệu tính toán toàn bộ Dashboard sẽ dựa trên thông tin trạng thái đơn hàng được chọn ở trường này.   * Khi người dùng nhấp vào trường "Trạng thái đơn hàng", hệ thống hiển thị danh sách các trạng thái đơn hàng bao gồm:    + Khởi tạo   + Đã duyệt   + Đã xuất kho * Có thể chọn nhiều trạng thái. * Dữ liệu dashboard sẽ chỉ tính các đơn có trạng thái được chọn. |

## **2. Số đơn hàng**

* Định nghĩa: Tổng số đơn phát sinh trong thời gian được đặt hàng lên NPP user đang login và có trạng thái nằm trong bộ lọc.
* Cách lấy:

  1. Lọc các đơn có ngày tạo đơn hàng nằm trong khoảng thời gian đã chọn. Từ ngày <= Ngày tạo đơn hàng <= Đến ngày.
  2. Số đơn phát sinh trong thời gian được đặt hàng lên NPP user đang login
  3. Lọc theo trạng thái (chỉ giữ các trạng thái được chọn).
  4. Đếm số đơn sau khi lọc.
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện dưới đây
  + Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
  + Nguồn đơn hàng: Chỉ cần có đơn hàng là sẽ đếm, không quan tâm trong tuyến hay ngoại tuyến hay tạo ở chức năng chăm sóc hay tạo trên Portal
  + Trạng thái đơn hàng: Trạng thái được chọn ở bộ lọc. Trạng thái được xác định tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
* Chọn vào mục Số Đơn hàng hoặc click vào link ở góc phải, hệ thống mở màn hình Tổng hợp đơn hàng điểm bán.
* UI sẽ co dãn tùy theo độ dài  chỉ số có độ dài ký tự dài nhất

## **3. Doanh số**

* Định nghĩa: Tổng thành tiền đơn hàng từ các đơn được tính ở mục “Số đơn hàng”.
* Doanh số được tính theo công thức được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) sau VAT và trước VAT
* Chọn vào mục Doanh số hoặc click vào link ở góc phải hệ thống mở màn hình Tổng hợp đơn hàng điểm bán.
* Trạng thái được xác định tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
* UI sẽ co dãn tùy theo độ dài  chỉ số có độ dài ký tự dài nhất

## **4. Biểu đồ trạng thái đơn hàng**

* Giúp giám sát số lượng đơn hàng theo từng ngày tạo đơn hàng cụ thể
* Lấy danh sách tất cả đơn hàng phát sinh trong thời gian được đặt hàng lên NPP user đang login
* Phân loại trạng thái đơn hàng theo tất cả trạng thái của đơn hàng (Không phụ thuộc vào bộ lọc).
* **Biểu đồ cột chồng**, trục ngang là **ngày tạo đơn hàng (DD/MM/YYYY)**, trục dọc là **số lượng đơn**
* **Trường hợp nhiều ngày sẽ có thanh scroll ngang để xem**
* Mỗi cột được chia thành nhiều phần tương ứng với số lượng của từng trạng thái đơn hàng:
* **Hover từng phần cột**:

  + Tổng giá trị: Tổng số đơn hàng được tạo trong ngày
  + Số đơn hàng theo từng trạng thái.
  + Trạng thái được xác định là trạng thái cuối cùng tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
* Xem chi tiết: Click vào hệ thống mở màn hình Tổng hợp đơn hàng điểm bán.

## **5. Top 10 sản phẩm có doanh số cao nhất (sau VAT)**

* Giúp xác định các sản phẩm mang lại doanh số cao nhất trong thời gian được chọn
* Danh sách sản phẩm được xếp hạng theo thứ tự từ thấp đến cao: Mã sản phẩm - Tên sản phẩm
* Giá trị doanh số (sau VAT) của từng sản phẩm, đơn vị tiền tệ VNĐ
* Mỗi thanh đại diện cho 1 sản phẩm, chiều dài biểu thị **doanh số tương ứng**. Sản phẩm xếp hạng cao nhất là 100%, các sản phẩm còn lại sẽ giảm dần % theo tỷ lệ doanh số.
* Hover: Hiển thị tooltip Giá trị doanh số của từng sản phẩm, đơn vị tiền tệ VNĐ, format tiền tệ
* Cách lấy doanh số:
  + Doanh số của sản phẩm = Tổng doanh số tất cả đơn hàng có sản phẩm đã đặt lên NPP
  + Có ngày tạo đơn hàng nằm trong khoảng thời gian đã chọn
  + Doanh số là doanh số sau (VAT)
  + Đơn hàng thỏa điều kiện:
    - Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
    - Nguồn đơn hàng: Chỉ cần có đơn hàng là sẽ đếm, không quan tâm trong tuyến hay ngoại tuyến hay tạo ở chức năng chăm sóc hay tạo trên Portal
    - Trạng thái đơn hàng: Trạng thái được chọn ở bộ lọc. Trạng thái được xác định tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Báo cáo tổng hợp đơn hàng NPP

## **6. Top 10 điểm bán có doanh số cao nhất (sau VAT)**

* Giúp xác định các điểm bán mang lại doanh thu cao nhất trong thời gian được chọn
* Danh sách điểm bán được xếp hạng theo thứ tự từ trên xuống. Mã điểm bán - Tên điểm bán
* Giá trị doanh số, đơn vị tiền tệ VNĐ.
* Doanh số là doanh số sau (VAT)
* Mỗi thanh đại diện cho 1 điểm bán, chiều dài biểu thị **doanh số tương ứng**. Điểm bán xếp hạng cao nhất là 100%, các điểm bán còn lại sẽ giảm dần % theo tỷ lệ doanh số.
* Hover: Hiển thị tooltip Giá trị doanh số của từng điểm bán, đơn vị tiền tệ VNĐ, format tiền tệ
* Cách lấy doanh số:
  + Đơn hàng thỏa điều kiện:
    - Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
    - Nguồn đơn hàng: Chỉ cần có đơn hàng lên NPP là sẽ đếm, không quan tâm trong tuyến hay ngoại tuyến hay tạo ở chức năng chăm sóc hay tạo trên Portal
    - Trạng thái đơn hàng: Trạng thái được chọn ở bộ lọc. Trạng thái được xác định tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Báo cáo doanh thu theo khách hàng