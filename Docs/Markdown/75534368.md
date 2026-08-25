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

# Thay đổi cho Hương Thủy ngày 15/8/2025

Sau khi UAT trên production (Meeting 15/8/2025), Hương Thủy có nhu cầu thay đổi chức năng màn hình Nhân viên bán hàng như sau:

1/ Mở lại chức năng Import excel và Tạo mới để tạo mới nhân viên thuộc Indirect

* Nhân viên này chỉ quản lý trên DMS, không đồng bộ về ERP Hương Thủy
* Nhân viên khi tạo mới/import được Phân loại nhân viên = Indirect

2/ Mở lại chức năng cho phép Active/Inactive trạng thái, chỉnh sửa thông tin nhân viên (direct và indirect)

* Khi tạo mới nhân viên --> Trạng thái sẽ mặc định = Active
* Khi sync thông tin từ ERP --> Không đồng bộ thông tin trạng thái

3/ Trên bộ lọc danh sách:

* Thêm trường lọc "Phân loại nhân viên": Gồm Direct/Indirect, Select multichoice. Khi chọn sẽ lọc lại nhân viên dưới lưới danh sách
* Thêm trường lọc "Ngày tạo nhân viên":
  + Từ ngày  - Đến ngày
  + Đến ngày >= Từ ngày
  + Đến ngày - Từ ngày trong vòng 90 ngày
  + Mở màn hình mặc định rỗng (lọc tất cả)

4/ Trên lưới danh sách:

* Thêm trường Phân loại nhân viên: Gồm Direct/Indirect để phân loại nhân viên thuộc Direct hay Indirect (Thông tin lấy từ DMS, do DMS phân loại)
* Thêm trường Khu vực ERP: Thông tin lấy từ ERP Hương Thủy (Dạng text, không có thì để trống)
* 2 trường này sẽ ko thêm vào màn hình tạo mới/chi tiết/lịch sử.

 Thêm cột vùng/khu vực ngoài màn hình nhân viên bán hàng theo US Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-6565

* Trên danh sách nhân viên: Hiển thị thêm cột vùng/khu vực ngoài màn hình nhân viên bán hàng
  + Vùng/ Khu vực lấy theo vùng khu vực của cấp quản lý của nhân viên đó
  + SD: để trống
  + RSM: Chỉ hiển thị vùng, khu vực bị trống
  + ASM: Hiển thị tất cả khu vực mà người dùng đã chọn, vùng thì hiển thị vùng của RSM nhưng sẽ filter trong những khu vực hiện tại của nó. Tức là nếu RSM (cấp quản lý của nó) có chọn 2 vùng A và B, nhưng ASM của nó pick những khu vực không thuộc vùng A và B thì lúc đó vùng sẽ bị trống
  + SS; SM: Lấy theo Vùng/ Khu vực cấp quản lý là ASM
* Trên vùng lọc dữ liệu thêm trường Vùng: Cho phép tìm kiếm danh sách nhân viên theo Vùng hoặc Khu vực đã chọn
* Khi xuất excel danh sách nvbh hiển thị cột vùng; cột khu vực. Dữ liệu trên excel xuất theo dữ liệu có trên màn hình

--

Bổ sung Kho bán hàng và kho bán hàng mặc định: Theo US Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-6494

Hiện trạng:

* Nhân viên direct được chọn kho bán hàng

Mong muốn:

* Nhân viên direct được chọn nhiều kho bán hàng (Multichoice Kho bán hàng)
  + Sau khi chọn hiển thị tên kho dạng thẻ tags. cho phép xóa một tags
* Thêm field "Kho bán bán hàng mặc định": Danh sách kho lấy từ các lựa chọn đã chọn ở field "Kho bán hàng". chỉ cho chọn một. Hiển thị tên kho
* Chỉ áp dụng nhân viên Direct sale

Kết quả: Sau khi chọn kho bán hàng mặc định, khi đặt hàng hiển thị mặc định kho bán hàng mặc định đã chọn ở đầu danh sách các kho bán hàng trên app SM