|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-4047 |
| Epic |  |
| Feature |  |
| Description | Chức năng hỗ trợ nhân viên xem chương trình khuyến mãi đầu ngày bán hàng  Tài liệu áp dụng cho Hương Thủy Direct Sales |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Thêm chức năng Chương trình Khuyến mãi ở menu Khác

Khi click vào mục CTKM, hệ thống hiển thị màn hình danh sách CTKM được áp dụng cho NPP trên tuyến bán hàng của nhân viên (Tại đây có thể thực hiện pull refresh để load danh sách CTKM thỏa điều kiện mới nhất, reload cả 2 tab Giảm giá và tặng quà)

CTKM ở đây sẽ hiển thị theo quy tắc (các quy tắc dưới đây theo điều kiện "và"):

**Trường hợp Direct Sales HT:**

* Hiển thị CTKM từ ERP HT
* CTKM có loại = Sell out
* CTKM còn thời hạn áp dụng: Từ ngày <= Ngày hiện tại <= Đến ngày
* CTKM có trạng thái Sắp diễn ra, Đang diễn ra
  + CTKM1: Diễn ra từ 1/11 - 30/11, tạm ngưng lúc 12:00 ngày 15/11 cho đến hết ngày
  + CTKM2: Diễn ra từ 1/11 - 30/11 Đang diễn ra cả ngày 15/11
  + TH1: Xem KM vào lúc 11:00 ngày 15/11 : Thấy CTKM1, CTKM2
  + TH2: Xem KM vào lúc 13:00 ngày 15/11 : Thấy CTKM2

**Trường hợp Indirect Sales:**

* Hiển thị CTKM từ DMS
* CTKM có loại = Sell out
* CTKM còn thời hạn áp dụng: Từ ngày <= Ngày hiện tại <= Đến ngày
* CTKM có trạng thái Sắp diễn ra, Đang diễn ra
  + CTKM1: Diễn ra từ 1/11 - 30/11, tạm ngưng lúc 12:00 ngày 15/11 cho đến hết ngày
  + CTKM2: Diễn ra từ 1/11 - 30/11 Đang diễn ra cả ngày 15/11
  + TH1: Xem KM vào lúc 11:00 ngày 15/11 : Thấy CTKM1, CTKM2
  + TH2: Xem KM vào lúc 13:00 ngày 15/11 : Thấy CTKM2
* Chỉ hiển thị các CTKM còn ngân sách, trường hợp 1 trong các loại ngân sách: Chương trình khuyến mãi, khu vực, nhà phân phối hết ngân sách thì không hiển thị CTKM.
* Đối tượng áp dụng:
  + Các CTKM không cấu hình đối tượng áp dụng → Hiển thị tất cả CTKM
  + Các CTKM có đối tượng áp dụng là NPP → Chỉ hiển thị CTKM chứa NPP trên tuyến đã chọn của nhân viên khi login.
  + Các CTKM có đối tượng áp dụng còn lại → Không kiểm tra và không hiển thị.
* Lưu ý trường hợp: Không chọn tuyến bán hàng/Tuyến bán hàng bị ngưng hoạt động/Nhân viên bị gỡ khỏi tuyến bán hàng:
  + Chỉ hiển thị các CTKM không cấu hình đối tượng áp dụng
  + Trường hợp đang đứng ở màn hình danh sách khuyến mãi thì danh sách chương trình khuyến mãi không thay đổi, nếu ra khỏi màn hình này vào lại hoặc pull refresh thì mới reload lại danh sách CTKM mới nhất

Giao diện danh sách CTKM như sau hình bên trái

* **Tab Giảm Giá**: Hiển thị danh sách các CTKM thuộc loại Giảm %, Giảm Tiền
* + Giảm tiền sử dụng icon:
  + Giảm % sử dụng icon:
* **Tab Tặng Quà**: Hiển thị danh sách các CTKM thuộc loại Tặng quà
* Sắp xếp danh sách khuyến mãi theo điều kiện ngày áp dụng mới nhất để lên trên (Từ ngày mới nhất)
* Danh sách khuyến mãi hiển thị thông tin:
  + Tên CTKM: Lấy từ trường "Tên hiển thị trên app" trên Portal Promotion khi cài đặt CTKM
  + Ngày hết hạn CTKM: hh:mm dd/mm/yyyy.
  + Lấy từ trường "Khoảng thời gian áp dụng" trên Portal Promotion khi cài đặt CTKM
* Chọn vào chương trình khuyến mãi hiển thị chi tiết CTKM như sau:

* Loại khuyến mãi:
  + Giảm giá/Giảm %/Tặng quà
  + Trường hợp CTKM mix nhiều hình thức KM sẽ để chung thành: Khuyến mãi
* Tên CTKM: Lấy từ trường "Tên hiển thị trên app" trên Portal Promotion khi cài đặt CTKM
* Thời gian áp dụng:
  + Lấy từ trường "Khoảng thời gian áp dụng" trên Portal Promotion khi cài đặt CTKM
  + Format hh:mm dd/mm/yyyy
* Thể lệ chương trình: Lấy từ trường "Thể lệ chương trình" trên Portal Promotion khi cài đặt CTKM