|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chức năng màn hình Dashboad khi mới đăng nhập vào |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Dashboard

Link UI:

1. ## **Bộ lọc**

| Tên trường | Bắt buộc | Mô tả |
| --- | --- | --- |
| Thời gian | Có  Phải chọn từ ngày và đến ngày | * Là khoảng thời gian chốt số liệu cho toàn bộ dashboard. * Mặc định: đầu tháng đến hôm nay. * Đến ngày >= Từ ngày * Đến ngày - Từ ngày <= 100 ngày |
| Vùng/Khu vực | Không  Không chọn = Chọn tất cả vùng/khu vực được phân quyền | Tìm kiếm các Vùng/khu vực hiển thị dựa vào phân quyền của người dùng đang login. Dữ liệu vùng được lấy từ màn hình Phân Vùng   * Trường này cho phép người dùng chọn nhiều  vùng/khu vực cùng lúc để xem báo cáo theo các vùng/khu vực đã chọn * Người dùng có thể tìm kiếm và chọn một hoặc nhiều  vùng/khu vực từ danh sách có sẵn để tìm kiếm * Mở danh sách: Khi người dùng nhấp vào trường  vùng/khu vực, một danh sách các  vùng/khu vực sẽ được mở ra dưới dạng phân cấp (tree), dữ liệu lấy từ màn hình Phân vùng * Tìm kiếm và chọn: Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm vùng mong muốn. Sau đó, họ có thể chọn một hoặc nhiều  vùng/khu vực bằng cách nhấp vào các mục trong danh sách. * Hiển thị lựa chọn:   + Các vùng đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags).   + Có thể chọn nhiều vùng/khu vực * Xóa lựa chọn: Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn vùng không mong muốn. * Trường hợp bỏ chọn toàn bộ các  vùng/khu vực trong hộp chọn thì mặc định hiểu là chọn tất cả các vùng/khu vực. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Vùng/khu vực được chọn sẽ sử dụng để tính toán dữ liệu cho toàn bộ Dashboard |
| Trạng thái đơn hàng | Không  Không chọn = Chọn tất cả trạng thái | Dữ liệu tính toán toàn bộ Dashboard sẽ dựa trên thông tin trạng thái đơn hàng được chọn ở trường này.   * Khi người dùng nhấp vào trường "Trạng thái đơn hàng", hệ thống hiển thị danh sách các trạng thái đơn hàng bao gồm:    + Khởi tạo   + Đã duyệt   + Đã xuất kho * Có thể chọn nhiều trạng thái. * Dữ liệu dashboard sẽ chỉ tính các đơn có trạng thái được chọn. |

**2. Số đơn hàng**

* Định nghĩa: Tổng số đơn phát sinh trong thời gian được chọn, thuộc vùng/khu vực của tài khoản người dùng đang login và có trạng thái nằm trong bộ lọc.
* Cách lấy:

  1. Lọc các đơn có ngày tạo đơn hàng nằm trong khoảng thời gian đã chọn. Từ ngày <= Ngày tạo đơn hàng <= Đến ngày.
  2. Lọc theo vùng của nhân viên tạo đơn hàng (nếu không có dùng vùng của nhà phân phối).
  3. Chỉ đếm các đơn hàng thuộc vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
  4. Lọc theo trạng thái (chỉ đếm các trạng thái được chọn).
  5. Đếm số đơn sau khi lọc.
* Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện dưới đây
  + Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
  + Nguồn đơn hàng: Chỉ cần có đơn hàng là sẽ đếm, không quan tâm đặt hàng ở trên App tại chức năng viếng thăm trong tuyến hay ngoại tuyến hay ở chức năng chăm sóc hay tạo trên Portal
  + Trạng thái đơn hàng: Trạng thái được chọn ở bộ lọc. Trạng thái được xác định tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
* UI sẽ co dãn tùy theo độ dài của số đơn hàng.

Chọn vào mục Số Đơn hàng hoặc click vào link ở góc phải, hệ thống mở màn hình biểu đồ như sau

* Giúp người dùng phân tích số lượng đơn hàng theo từng khu vực
* **Cột:** Tổng số đơn hàng trên toàn khu vực. Đơn hàng thỏa điều kiện được tính toàn từ bên ngoài mục Số Đơn Hàng
* **Trục ngang (trục X)**: Danh sách các **khu vực** đang hoạt động trên hệ thống và theo phân quyền vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
* **Trục dọc (trục Y)**: số lượng đơn hàng (tính theo số đơn thực tế)
* Hover chuột vào các cột trên biểu đồ để thấy được số lượng đơn hàng ở mỗi khu vực, hiển thị đầy đủ số lượng, format phần nghìn.
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Tổng hợp đơn hàng điểm bán (Trường hợp tài khoản không được phân quyền màn hình khi click vào sẽ hiển thị thông báo: Bạn không được phân quyền vào màn hình này!)

**3. Doanh số**

* Định nghĩa: Tổng thành tiền đơn hàng từ các đơn được tính ở mục “Số đơn hàng”.
* Doanh số được tính theo công thức được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) sau VAT và trước VAT
* Trạng thái được xác định tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
* UI sẽ co dãn tùy theo độ dài của doanh số, lấy theo doanh số có độ dài ký tự dài nhất.

Chọn vào mục Doanh số hoặc click vào link ở góc phải, hệ thống mở màn hình biểu đồ như sau

* **Biểu đồ cột dọc** , mỗi cụm cột đại diện cho 1 khu vực thuộc danh sách các **khu vực** đang hoạt động trên hệ thống và theo phân quyền vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
* **Chiều cao thanh thể hiện giá trị doanh số (trước VAT và sau VAT)**, đơn vị tiền tệ (trong hình là VNĐ, format phần nghìn). Khi hover vào sẽ có tooltip thông tin doanh số trước và sau VAT. Đơn hàng thỏa điều kiện tính doanh số được tính toán từ bên ngoài mục Doanh số
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Tổng hợp đơn hàng điểm bán (Trường hợp tài khoản không được phân quyền màn hình khi click vào sẽ hiển thị thông báo: Bạn không được phân quyền vào màn hình này!)

**4. Điểm bán**

* Cách lấy:

  1. Lọc theo vùng của điểm bán (dựa trên vùng của NPP của điểm bán)
  2. Chỉ đếm các điểm bán thuộc vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
  3. Đếm số điểm bán sau lọc (không đếm trùng điểm bán).
* Mới: Đếm điểm bán có ngày tạo nằm trong khoảng thời gian đã chọn Từ ngày <= Ngày tạo điểm bán <= Đến ngày, có trạng thái Hoạt động.
* Đang hoạt động: Đếm điểm bán có trạng thái đang hoạt động trong ngày được chọn ở trường Đến ngày (Tính đến 23:59:59 của Đến ngày).
* UI sẽ co dãn tùy theo độ dài của số điểm bán, lấy theo số điểm bán có độ dài ký tự dài nhất.

Chọn vào mục Điểm bán hoặc click vào link ở góc phải, hệ thống mở màn hình biểu đồ như sau

* Hiển thị tỷ lệ phân bổ **các điểm bán được tạo mới** trong thời gian, theo từng khu vực.
* **Từng lát trên biểu đồ** đại diện cho một khu vực (theo màu), kích thước lát biểu thị **tỷ lệ % số lượng điểm bán mới** của khu vực đó so với toàn bộ.
* **Chú thích màu sắc**: thể hiện tên vùng tương ứng.
* Đếm điểm bán có ngày tạo nằm trong khoảng thời gian đã chọn Từ ngày <= Ngày tạo điểm bán <= Đến ngày.
* Danh sách các **khu vực** đang hoạt động trên hệ thống và theo phân quyền vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
* Hover vào từng lát trên biểu đồ, hiển thị tooltip: Tên vùng - Số lượng điểm bán mới
* Số tổng ở giữa: Tổng số điểm bán mới theo bộ lọc từ ngoài màn hình chính. Format phần nghìn
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Danh sách điểm bán (Trường hợp tài khoản không được phân quyền màn hình khi click vào sẽ hiển thị thông báo: Bạn không được phân quyền vào màn hình này!)

**5. Nhân viên bán hàng**

* Cách lấy:

  1. Lọc theo vùng phụ trách của nhân viên. Lấy theo thông tin cấp quản lý ASM/RSM
  2. Chỉ đếm các nhân viên thuộc vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
  3. Đếm số nhân viên sau lọc (duy nhất theo mã NV).
* Mới: Đếm nhân viên bán hàng (Salesman) có ngày tạo nằm trong khoảng thời gian đã chọn Từ ngày <= Ngày tạo điểm bán <= Đến ngày, có trạng thái Hoạt động.
* Đang hoạt động: Đếm nhân viên bán hàng (Salesman) có trạng thái đang hoạt động trong ngày được chọn ở trường Đến ngày (Tính đến 23:59:59 của Đến ngày).
* UI sẽ co dãn tùy theo độ dài của số lượng nhân viên, lấy theo số lượng nhân viên có độ dài ký tự dài nhất.

Chọn vào mục Nhân viên bán hàng hoặc click vào link ở góc phải, hệ thống mở màn hình biểu đồ như sau

* Hiển thị tỷ lệ phân bổ **các nhân viên bán hàng được tạo mới** trong thời gian, theo từng khu vực.
* **Từng lát** đại diện cho một khu vực (theo màu), kích thước lát biểu thị **tỷ lệ % số lượng nhân viên bán hàng mới** của khu vực đó so với toàn bộ.
* **Chú thích màu sắc**: thể hiện tên vùng tương ứng.
* Đếm nhân viên bán hàng (Salesman) có ngày tạo nằm trong khoảng thời gian đã chọn Từ ngày <= Ngày tạo điểm bán <= Đến ngày.
* Danh sách các **khu vực** đang hoạt động trên hệ thống và theo phân quyền vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
* Hover vào từng lát trên biểu đồ, hiển thị tooltip: Tên vùng - Số lượng nhân viên mới
* Số tổng ở giữa: Tổng số NVBH mới theo bộ lọc từ ngoài màn hình chính. Format phần nghìn
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Nhân viên bán hàng (Trường hợp tài khoản không được phân quyền màn hình khi click vào sẽ hiển thị thông báo: Bạn không được phân quyền vào màn hình này!)

**6. Nhà phân phối**

* Cách lấy:

  1. Lọc theo vùng của NPP dựa trên địa chỉ của NPP
  2. Chỉ đếm các NPP thuộc vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
  3. Đếm số NPP sau lọc (duy nhất theo mã NPP).
* Mới: Đếm NPP có ngày tạo nằm trong khoảng thời gian đã chọn Từ ngày <= Ngày tạo NPP<= Đến ngày, có trạng thái Hoạt động.
* Đang hoạt động: Đếm NPP có trạng thái đang hoạt động trong ngày được chọn ở trường Đến ngày (Tính đến 23:59:59 của Đến ngày).
* UI sẽ co dãn tùy theo độ dài của số lượng NPP, lấy theo số lượng NPP có độ dài ký tự dài nhất.

Chọn vào mục Nhà phân phối hoặc click vào link ở góc phải, hệ thống mở màn hình biểu đồ như sau

* Hiển thị tỷ lệ phân bổ **các nhà phân phối được tạo mới** trong thời gian, theo từng khu vực.
* **Từng lát (slice)** đại diện cho một khu vực (theo màu), kích thước lát biểu thị **tỷ lệ % số lượng nhà phân phối mới** của khu vực đó so với toàn bộ.
* **Chú thích màu sắc**: thể hiện tên vùng tương ứng.
* Đếm NPP có ngày tạo nằm trong khoảng thời gian đã chọn Từ ngày <= Ngày tạo điểm bán <= Đến ngày.
* Danh sách các **khu vực** đang hoạt động trên hệ thống và theo phân quyền vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
* Hover vào từng lát trên biểu đồ, hiển thị tooltip: Tên vùng - Số lượng NPP mới
* Số tổng ở giữa: Tổng số NPP mới theo bộ lọc từ ngoài màn hình chính. Format phần nghìn
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Nhà phân phối (Trường hợp tài khoản không được phân quyền màn hình khi click vào sẽ hiển thị thông báo: Bạn không được phân quyền vào màn hình này!)

**7. Viếng thăm**

* Định nghĩa: số điểm bán đã được viếng thăm ít nhất một lần trong khoảng thời gian đã chọn. Chỉ cần có Check-in là tính (không cần checout).
* Cách lấy:

  1. Lọc Check-in trong khoảng thời gian.
  2. Từ các Check-in đó, rút ra danh sách điểm bán duy nhất.
  3. Lọc theo vùng của điểm bán (dựa trên vùng của NPP của điểm bán, vùng của NPP dựa trên địa chỉ của NPP)
  4. Chỉ đếm các điểm bán thuộc vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
  5. Đếm số điểm bán duy nhất.
* **Lượt viếng thăm:** Tổng lượt viếng thăm (tổng số Check-in) các điểm bán trong danh sách trên trong khoảng thời gian đã chọn (1 điểm bán viếng thăm nhiều lần thì tính nhiều lần).
* UI sẽ co dãn tùy theo độ dài của số điểm bán hoặc lượt viếng thăm, lấy theo chỉ số có độ dài ký tự dài nhất.

Chọn vào mục Viếng thăm hoặc click vào link ở góc phải, hệ thống mở màn hình biểu đồ như sau

* Giúp người dùng nắm được: Những vùng có tần suất viếng thăm điểm bán cao/thấp. Phân bố hoạt động viếng thăm của đội ngũ nhân viên. Phát hiện vùng chưa có hoặc rất ít lượt viếng thăm.
* **Lượt viếng thăm:** Tổng lượt viếng thăm (tổng số Check-in) các điểm bán trong danh sách trên trong khoảng thời gian đã chọn (1 điểm bán viếng thăm nhiều lần thì tính nhiều lần).
* Trên bản đồ, **khu vực có lượt viếng thăm nhiều** sẽ được tô thang màu đậm nhạt trên bản đồ.
* **Loại biểu đồ**: Bản đồ nhiệt dạng tô màu (Heatmap / Choropleth map) lên Bản đồ Việt Nam, chia theo khu vực.
* Danh sách khu vực là các khu vực đang hoạt động trên hệ thống
  + Khu vực phải thuộc phân quyền của người dùng đang đăng nhập.
  + Các khu vực không thuộc phân quyền sẽ bị tô màu xám
  + Khi hover vào sẽ hiển tooltip: Bạn không được thấy dữ liệu ở khu vực này.
* **Tô màu**:
  + Mỗi khu vực được tô màu theo **mức đậm nhạt khác nhau** (từ xanh nhạt đến xanh đậm)
  + **Màu đậm hơn → lượt viếng thăm nhiều hơn**
  + Thang màu được hiển thị rõ ràng bên phải bản đồ
  + Tổng quan cách tính số liệu để tô bản đồ

    1. **Tính tổng lượt viếng thăm trên toàn quốc** → Ví dụ: 1.000 lượt viếng trên toàn quốc trong kỳ báo cáo
    2. **Tính số lượt viếng thăm tại mỗi khu vực** → Ví dụ: Hà Nội = 80 lượt, TP.HCM = 120 lượt, v.v. (Từ điểm bán → Lượt viếng thăm, điểm bán → NPP → Khu vực)
    3. **Xác định min và max trong toàn bộ danh sách**

       - Min (ít nhất): 10 lượt
       - Max (nhiều nhất): 120 lượt
    4. **Chia thang màu theo 5 bậc**

       - (120 - 10)/5 = 22, mỗi bậc cách nhau 22 lượt viếng thăm
       - Mỗi bậc đại diện cho một vùng giá trị số lượt viếng thăm
       - Các màu càng đậm thể hiện tần suất càng cao
       - Cách chia thang màu

    | Bậc | Khoảng lượt viếng thăm | Mã màu HEX |
    | --- | --- | --- |
    | 1 | 0 – 22 | `#D4F7F7` *(xanh rất nhạt)* |
    | 2 | 23 – 45 | `#6EE0F7` *(xanh nhạt)* |
    | 3 | 46 – 68 | `#0F91BD` *(xanh trung bình)* |
    | 4 | 69 – 91 | `#0A66C2` *(xanh đậm)* |
    | 5 | > 91 | `#053361` *(xanh rất đậm)* |
* Có thể hover chuột vào mỗi khu vực để hiển thị tooltip: **Tên khu vực  – Số lượt viếng thăm**
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Báo cáo Tổng hợp viếng thăm điểm bán (Trường hợp tài khoản không được phân quyền màn hình khi click vào sẽ hiển thị thông báo: Bạn không được phân quyền vào màn hình này!)

**8. Top 10 sản phẩm bán chạy (Sau VAT)**

* Giúp xác định các sản phẩm mang lại doanh thu cao nhất trong thời gian được chọn
* Danh sách sản phẩm được xếp hạng theo thứ tự từ trên xuống. Mã sản phẩm - Tên sản phẩm
* Hover: Hiển thị tooltip Giá trị doanh số, đơn vị tiền tệ VNĐ, format tiền tệ
* Mỗi thanh đại diện cho 1 sản phẩm, chiều dài biểu thị **doanh số tương ứng**. Sản phẩm xếp hạng cao nhất là 100%, các sản phẩm còn lại sẽ giảm dần % theo tỷ lệ doanh số.
* Cách lấy doanh số:
* + Doanh số sản phẩm = Số lượng \* giá bán
  + Giá bán là giá trên đơn hàng
  + Đơn hàng thỏa điều kiện:
    - Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
    - Nguồn đơn hàng: Chỉ cần có đơn hàng là sẽ đếm, không quan tâm đặt hàng ở trên App tại chức năng viếng thăm trong tuyến hay ngoại tuyến hay ở chức năng chăm sóc hay tạo trên Portal
    - Trạng thái đơn hàng: Trạng thái được chọn ở bộ lọc. Trạng thái được xác định tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
    - Lọc theo vùng của nhân viên tạo đơn hàng (nếu không có dùng vùng của nhà phân phối).
    - Chỉ tính các đơn hàng thuộc vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Báo cáo doanh thu theo sản phẩm (Trường hợp tài khoản không được phân quyền màn hình khi click vào sẽ hiển thị thông báo: Bạn không được phân quyền vào màn hình này!)

**9. Top 10 nhân viên bán hàng doanh số cao nhất (Sau VAT)**

* Giúp xác định các nhân viên mang lại doanh số cao nhất trong thời gian được chọn
* Danh sách nhân viên được xếp hạng theo thứ tự từ trên xuống: Mã nhân viên - Tên nhân viên
* Hover: Hiển thị tooltip Giá trị doanh số của từng nhân viên, đơn vị tiền tệ VNĐ, format tiền tệ
* Mỗi thanh đại diện cho 1 NVBH, chiều dài biểu thị **doanh số tương ứng**. Nhân viên xếp hạng cao nhất là 100%, các nhân viên còn lại sẽ giảm dần % theo tỷ lệ doanh số.
* Cách lấy doanh số:
  + Doanh số của nhân viên = Tổng doanh số tất cả đơn hàng mà nhân viên tạo
  + Có ngày tạo đơn hàng nằm trong khoảng thời gian đã chọn
  + Lọc theo vùng của nhân viên gắn trên đơn (nếu không có dùng vùng của nhà phân phối).
  + Chỉ tính các đơn hàng thuộc vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
  + Doanh số là doanh số sau (VAT)
  + Đơn hàng thỏa điều kiện:
    - Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
    - Nguồn đơn hàng: Chỉ cần có đơn hàng là sẽ đếm, không quan tâm đặt hàng ở trên App tại chức năng viếng thăm trong tuyến hay ngoại tuyến hay ở chức năng chăm sóc hay tạo trên Portal (Lưu ý: tạo trên Portal phải chọn thông tin nhân viên, không chọn thì sẽ không đếm)
    - Trạng thái đơn hàng: Trạng thái được chọn ở bộ lọc. Trạng thái được xác định tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Báo cáo doanh thu theo nhân viên bán hàng (Trường hợp tài khoản không được phân quyền màn hình khi click vào sẽ hiển thị thông báo: Bạn không được phân quyền vào màn hình này!)

**10. Top 10 NPP doanh số cao nhất (Sau VAT)**

* Giúp xác định các NPP mang lại doanh số cao nhất trong thời gian được chọn
* Danh sách NPP được xếp hạng theo thứ tự từ trên xuống: Mã NPP - Tên NPP
* Hover: Hiển thị tooltip Giá trị doanh số của từng NPP, đơn vị tiền tệ VNĐ, format tiền tệ
* Mỗi thanh đại diện cho 1 NPP, chiều dài biểu thị **doanh số tương ứng**. NPP xếp hạng cao nhất là 100%, các NPP còn lại sẽ giảm dần % theo tỷ lệ doanh số.
* Cách lấy doanh số:
  + Doanh số của NPP = Tổng doanh số tất cả đơn hàng đặt lên NPP
  + Có ngày tạo đơn hàng nằm trong khoảng thời gian đã chọn
  + Lọc theo vùng của NPP. Chỉ tính các đơn hàng thuộc vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
  + Doanh số là doanh số sau (VAT)
  + Đơn hàng thỏa điều kiện:
    - Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91)
    - Nguồn đơn hàng: Chỉ cần có đơn hàng là sẽ đếm, không quan tâm đặt hàng ở trên App tại chức năng viếng thăm trong tuyến hay ngoại tuyến hay ở chức năng chăm sóc hay tạo trên Portal
    - Trạng thái đơn hàng: Trạng thái được chọn ở bộ lọc. Trạng thái được xác định tại thời điểm 23:59:59 của Đến ngày trong bộ lọc.
* Xem chi tiết: Nhấn vào mở 1 tab mới và mở màn hình Báo cáo tổng hợp đơn hàng NPP (Trường hợp tài khoản không được phân quyền màn hình khi click vào sẽ hiển thị thông báo: Bạn không được phân quyền vào màn hình này!)

**11. Bản đồ hoạt động**

* Tootltip: Dữ liệu lấy theo ngày hiện tại xem dữ liệu, không phụ thuộc Từ ngày - Đến ngày ở bộ lọc
* Nhân viên đang online:

  + Định nghĩa “đang online”: Nhân viên có tín hiệu vị trí/hoạt động gần nhất trong khoảng thời gian xem Dashboard. 5 phút lấy thông tin 1 lần.
  + Lọc theo vùng phụ trách của nhân viên. Lấy theo thông tin cấp quản lý ASM/RSM
  + Chỉ đếm các nhân viên thuộc vùng/khu vực của tài khoản người dùng đang login hoặc Vùng/khu vực được chọn ở bộ lọc
  + Chỉ lấy nhân viên có role = SM
* Cách lấy:

  1. Lấy bản ghi vị trí gần nhất của mỗi nhân viên (theo thời gian cập nhật vị trí hoặc thời điểm Check-in/hoạt động gần nhất).
  2. Giữ lại những nhân viên có thời điểm cập nhật ≤ 10 phút so với hiện tại.
  3. Lấy tọa độ mới nhất (kinh độ/vĩ độ) để hiển thị marker trên bản đồ.
* Bản đồ:

  + Bản đồ có thể zoom in, zoom out
  + Khi mở màn hình mặc định zoom out đến khi nào cho thể view hết toàn bộ số lượng nhân viên trên bản đồ
  + Khi click vào 1 nhân viên hiển thị thông tin nhân viên bao gồm:

 

* + - * Hình ảnh nhân viên: Trường hợp nhân viên không có hình ảnh sẽ lấy hình mặc định:
      * Tên nhân viên (chức vụ)
      * Mã nhân viên - Số điện thoại
      * Tình trạng online:
        + Đang online: Nhân viên đang có tương tác dữ liệu với hệ thống.
        + Offline: Nhân viên đang không có tương tác dữ liệu với hệ thống.
      * Ghi nhận gần nhất lúc: Thông tin thời gian ghi nhận lần gần nhất nhân viên tương tác với hệ thống: HH:MM:SS DD/MM/YYY tại Kinh độ, Vĩ độ
    - Tuyến trong ngày: Thông tin tuyến bán hàng mà nhân viên đã chọn để tương tác dữ liệu với hệ thống tại thời gian ghi nhận lần gần nhất. Thông tin gồm: Mã tuyến - Tên tuyến
    - Doanh số trước VAT: Hiển thị thông tin Doanh số trước VAT của nhân viên đang chọn trong ngày được chọn. Format tiền tệ hàng nghìn kèm icon tiền tệ. Quy tắc tính doanh số theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo trạng thái đơn hàng chọn ở bộ lọc.
    - Doanh số sau VAT: Hiển thị thông tin Doanh số trước VAT của nhân viên đang chọn trong ngày được chọn. Format tiền tệ hàng nghìn kèm icon tiền tệ. Quy tắc tính doanh số theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo trạng thái đơn hàng chọn ở bộ lọc.
    - Đơn hàng: Hiển thị thông tin Số đơn hàng của nhân viên đang chọn trong ngày được chọn. Quy tắc tính doanh số theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DB%C3%A1oC%C3%A1o-C%C3%B4ngth%E1%BB%A9ct%C3%ADnhdoanhs%E1%BB%91) và theo trạng thái đơn hàng chọn ở bộ lọc.
    - Điểm bán mới: Hiển thị thông tin điểm bán được mở mới ở trạng thái Chờ Duyệt, Đã Duyệt nhân viên đang chọn tạo trong ngày hiện tại xem dashboard
    - Đã viếng thăm:
      * Tổng số điểm bán đã được viếng thăm trong tuyến, ngoại tuyến (Phải checkin và checkout)/Tổng số điểm bán trong tuyến thực tế trong ngày được chọn của nhân viên đang chọn.
      * (n) ngoại tuyến: Tổng số điểm bán đã được viếng thăm ngoại tuyến (Phải checkin và checkout) trong ngày được chọn của nhân viên đang chọn.

**12. Nhân viên online**

* Info → Nhấn hiển thị Tootltip: Nhân viên online lấy theo ngày hiện tại xem dữ liệu, không phụ thuộc Từ ngày - Đến ngày ở bộ lọc

* Làm mới: Khi nhấn nút này sẽ thực hiện lấy dữ liệu nhân viên mới nhất và hiển thị trên bản đồ và trên danh sách Nhân viên Online
* Tìm kiếm:
  + Tìm kiếm thông tin nhân viên theo Mã, tên, số điện thoại nhân viên
  + Search like (không dấu và có dấu tiếng việt)
  + Sau khi search hiển thị lại danh sách nhân viên thỏa điều kiện lọc
  + Sau khi nhập thông tin search, cuối textbox search sẽ có icon x, nhấn icon x sẽ xóa nội dung trong ô search + reload lại danh sách nhân viên đang online (Lấy nhân viên mới nhất)
* Hiển thị: Ảnh đại diện – Mã nhân viên – Tên – Thời gian đăng nhập gần nhất. Chỉ lấy nhân viên có role = SM
* Sắp xếp theo tên nhân viên theo bảng chữ cái. Hiển thị mặc định số lượng nhân viên = chiều cao của map + button Xem tất cả. Khi nhấn Xem tất cả hiện tất cả nhân viên + thanh scroll load theo phân trang.
* Cách xác định “đang hoạt động”: Có đăng nhập trong ngày và có hoạt động gần đây (ví dụ trong 30–60 phút gần nhất), hoặc đang online theo định nghĩa ở trên.
* Tác vụ khi click: Tự động zoom bản đồ đến vị trí hiện tại của nhân viên (dùng tọa độ mới nhất) đồng thời expand mở ra chi tiết nhật ký hoạt động của nhân viên như ở chức năng [HO] Truy vấn tọa độ nhân viên

* Các hoạt động ghi nhận bao gồm:
  + Chấm công đầu ngày, Chấm công cuối ngày
  + Checkin & Checkout điểm bán
  + Tất cả nhiệm vụ viếng thăm điểm bán
  + Trường hợp nhân viên có 2 tuyến bán hàng cùng ngày thì vẫn hiển thị hết không cần phân biệt tuyến.

* Sắp xếp: Mặc định theo thời gian hoạt động gần nhất (mới → cũ).