|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | APP QL xem thông tin chi tiết đơn hàng, view dữ liệu xuất hóa đơn, những đơn hàng đã phát hành hóa đơn điện tử (Trạng thái hóa đơn = Đã phát hành) thì trên đơn hàng hiển thị thông tin hóa đơn để xem, tải về thiết bị. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Danh sách đơn hàng

Màn hình:

Mô tả:

Hiển thị thêm thông tin xuất hóa đơn  tại màn hình Danh sách đơn hàng

Ràng buộc: Chỉ hiển thị với những đơn hàng đã xuất hóa đơn, trạng thái hóa đơn = Đã phát hành

# Chi tiết đơn hàng

Màn hình:

Mô tả:

1/ Mở màn hình chi tiết đơn hàng,

* Default collapse thông tin xuất hóa đơn, Click vào vùng thông tin hoặc icon để expand show thông tin chi tiết hóa đơn
* Hiển thị thông tin xuất hóa đơn

Mô tả: 

| STT | **Tên Trường** | **Mô tả** |
| --- | --- | --- |
| **Thông tin xuất hóa đơn (label)** | | |
| 1 | Đối tượng yêu cầu hóa đơn | Hiển thị đối tượng yêu cầu xuất hóa đơn của điểm bán theo master điểm bán   * Đối tượng bao gồm Doanh nghiệp; Hộ kinh doanh; Cá nhân. * UI thay đổi theo các đối tượng   + Với từng giá trị được chọn, UI sẽ thay đổi như sau:     - Cá nhân: hiển thị field **Họ tên**, **Địa chỉ**, **Email nhận hóa đơn**.     - Doanh nghiệp: hiển thị field **Mã số thuế**, **Tên Doanh nghiệp**, **Địa chỉ Doanh nghiệp**, **Email nhận hóa đơn**.     - Hộ kinh doanh: hiển thị field **Mã số thuế**, **Tên Hộ kinh doanh**, **Căn cước công dân chủ Hộ kinh doanh**, **Địa chỉ Hộ kinh doanh**, **Email nhận hóa đơn**. |
| 2 | Mã số thuế | Hiển thị mã số thuế của điểm bán.  Hiện thị thông tin Mã số thuế theo master điểm bán  Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 4 | Tên Doanh nghiệp/Tên Hộ kinh doanh/Họ tên | Hiển thị giá trị theo master điểm bán   * Nếu đối tượng yêu cầu xuất hoá đơn là "Doanh nghiệp": hiển thị tên field là "Tên Doanh nghiệp". * Nếu đối tượng yêu cầu xuất hoá đơn là "Hộ kinh doanh": hiển thị tên field là "Tên Hộ kinh doanh". * Nếu đối tượng yêu cầu xuất hoá đơn là "Cá nhân": hiển thị tên field là "Họ tên".   Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 5 | Căn cước công dân chủ Hộ kinh doanh | Hiển thị tên Căn cước công dân với đối tượng là Hộ kinh doanh theo master điểm bán  Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 6 | Email nhận hóa đơn | Hiển thị tên Email nhận hóa đơn của điểm bán theo master điểm bán  Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 7 | Địa chỉ Doanh nghiệp/Địa chỉ Hộ kinh doanh/Địa chỉ | Hiển thị Địa chỉ Doanh nghiệp/Địa chỉ Hộ kinh doanh/Địa chỉ của điểm bán theo master điểm bán   * Nếu đối tượng yêu cầu xuất hoá đơn là "Doanh nghiệp": hiển thị tên field là "Địa chỉ Doanh nghiệp". * Nếu đối tượng yêu cầu xuất hoá đơn là "Hộ kinh doanh": hiển thị tên field là "Địa chỉ Hộ kinh doanh" * Nếu đối tượng yêu cầu xuất hoá đơn là "Cá nhân": hiển thị tên field là "Địa chỉ".   Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 8 | Số điện thoại | Hiển thị số điện thoại của điểm bán theo master điểm bán  Trường hợp master điểm bán chưa có giá trị hiển thị dấu gạch ngang. |
| 9 | / | Chọn mũi tên lên / xuống tương ứng để   Collapse/ Expand  vùng thông tin xuất hóa đơn |

* Những đơn hàng có xuất hóa đơn cho điểm bán vãng lai (tại bước duyệt đơn hàng check chọn điểm bán vãng lai) => UI xem chi tiết đơn hàng chỉ hiển thị

2/ Trường hợp hóa đơn tương ứng với đơn hàng có trạng thái = Đã phát hành

Hiển thị UI:

Trong đó:

: Tag+ icon hiển thị Đã xuất hóa đơn

button: Xem hóa đơn

* Click show popup xem chi tiết hóa đơn đã phát hành.
* Cho phép tải về thiết bị
* Chọn back/ tắt popup để quay về màn hình Chi tiết đơn hàng

Xem hóa đơn: