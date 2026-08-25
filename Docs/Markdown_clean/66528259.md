|  |  |
| --- | --- |
| Issue Link |  |
| Story | [Manager\_App] Chi tiết điểm bán - Thêm thông tin xuất hóa đơn |
| Epic |  |
| Feature |  |
| Description | Trên app QL cho phép xem thông tin chi tiết điểm bán, xem thông tin xuất hóa đơn từ master data của điểm bán  Trường hợp điểm bán tạo mới chưa được duyệt, role được điều chỉnh |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

### Xem thông tin xuất hóa đơn của Điểm bán

Thông tin thêm mới

* Hiển thị thông tin xuất hóa đơn từ master điểm bán đã khai báo
* Thông tin xuất hóa đơn theo đối tượng yêu cầu hóa đơn.
* Chỉ xem thông tin, không được phép chỉnh sửa thông tin hóa đơn với những điểm bán đã duyệt
* Điểm bán chưa duyệt được phép chọn icon để điều chỉnh. xem [tại đây](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66528293)

Màn hình:

Mô tả: 

Tất cả các màn hình xem Thông tin điểm bán trên app QL đều hiển thị thêm Vùng thông tin xuất hóa đơn, Không cho chỉnh sửa.

| STT | **Tên Trường** | **Mô tả** |
| --- | --- | --- |
| **Thông tin xuất hóa đơn (label)** | | |
| 1 | Đối tượng yêu cầu hóa đơn | Hiển thị đối tượng yêu cầu xuất hóa đơn của điểm bán theo master điểm bán   * Đối tượng bao gồm Doanh nghiệp; Hộ kinh doanh; Cá nhân. * UI thay đổi theo các đối tượng   + Với từng giá trị được chọn, UI sẽ thay đổi như sau:     - Cá nhân: hiển thị field **Họ tên**, **Địa chỉ**, **Email nhận hóa đơn**.     - Doanh nghiệp: hiển thị field **Mã số thuế**, **Tên Doanh nghiệp**, **Địa chỉ Doanh nghiệp**, **Email nhận hóa đơn**.     - Hộ kinh doanh: hiển thị field **Mã số thuế**, **Tên Hộ kinh doanh**, **Căn cước công dân chủ Hộ kinh doanh**, **Địa chỉ Hộ kinh doanh**, **Email nhận hóa đơn**.   Trường hợp master điểm bán chưa khai báo thì ẩn luôn thông tin xuất hóa đơn |
| 2 | Mã số thuế | Hiển thị mã số thuế của điểm bán.  Hiện tại thông tin Mã số thuế theo master điểm bán  Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 4 | Tên Doanh nghiệp/Tên Hộ kinh doanh/Họ tên | Hiển thị giá trị theo master điểm bán   * Nếu đối tượng yêu cầu xuất hoá đơn là "Doanh nghiệp": hiển thị tên field là "Tên Doanh nghiệp". * Nếu đối tượng yêu cầu xuất hoá đơn là "Hộ kinh doanh": hiển thị tên field là "Tên Hộ kinh doanh". * Nếu đối tượng yêu cầu xuất hoá đơn là "Cá nhân": hiển thị tên field là "Họ tên".   Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 5 | Căn cước công dân chủ Hộ kinh doanh | Hiển thị tên Căn cước công dân với đối tượng là Hộ kinh doanh theo master điểm bán  Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 6 | Email nhận hóa đơn | Hiển thị tên Email nhận hóa đơn của điểm bán theo master điểm bán  Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 7 | Địa chỉ Doanh nghiệp/Địa chỉ Hộ kinh doanh/Địa chỉ | Hiển thị Địa chỉ Doanh nghiệp/Địa chỉ Hộ kinh doanh/Địa chỉ của điểm bán theo master điểm bán   * Nếu đối tượng yêu cầu xuất hoá đơn là "Doanh nghiệp": hiển thị tên field là "Địa chỉ Doanh nghiệp". * Nếu đối tượng yêu cầu xuất hoá đơn là "Hộ kinh doanh": hiển thị tên field là "Địa chỉ Hộ kinh doanh" * Nếu đối tượng yêu cầu xuất hoá đơn là "Cá nhân": hiển thị tên field là "Địa chỉ".   Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 8 | Số điện thoại | Hiển thị số điện thoại của điểm bán theo master điểm bán  Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 9 | Quay lại (back) | Người dùng nhấn nút để quay lại màn hình trước đó |
| 10 | Expand/Collapse | Chọn mũi tên  để  Expand/ Collapse vùng thông tin xuất hóa đơn |