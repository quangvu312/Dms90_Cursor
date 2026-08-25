|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Tại bước xác nhận đơn hàng, các đơn hàng của NPP có trạng thái kết nối HDDT = ON thì hiển thị thông tin xuất hóa đơn trên đơn hàng. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Xác nhận đơn hàng → Thêm thông tin xuất hóa đơn

Màn hình:

Trường hợp NPP kết nối hóa đơn điện tử có trạng thái  = OFF thì khi đặt hàng - Xác nhận đơn hàng như flow hiện tại. Không thay đổi

Trường hợp NPP kết nối hóa đơn điện tử có trạng thái  = ON - Tại link: [HO] Quản lý mẫu hóa đơn điện tử

* Tại bước xác nhận đơn hàng hiển thị checkbox "Yêu cầu xuất hóa đơn"
  + Default = Uncheck
  + Chọn check => Hiển thị vùng thông tin xuất hóa đơn như UI:
    - Trường hợp **CÓ** thông tin từ master data (Bất kỳ một thông tin nào có data từ master điểm bán): 
      * Default collapse, chọn hyperlink "Xem thông tin" để expand show thông tin chi tiết hóa đơn
    - Trường hợp **KHÔNG CÓ** thông tin (Bất kỳ một thông tin nào có data từ master điểm bán):

## Hiển thị vùng thông tin xuất hóa đơn theo Đối tượng yêu cầu hóa đơn

Mô tả

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
| 9 | Quay lại (back) | Người dùng nhấn nút để quay lại màn hình trước đó |
| 10 | Xem thông tin/ Thu gọn | Chọn Xem thông tin/ Thu gọn để  Expand/ Collapse vùng thông tin xuất hóa đơn |

# Chi tiết đơn hàng

Màn hình

1/ Mở màn hình chi tiết đơn hàng,

* Default collapse thông tin xuất hóa đơn, chọn hyperlink "Xem thông tin" để expand show thông tin chi tiết hóa đơn
* Hiển thị thông tin xuất hóa đơn theo mô tả

* Những đơn hàng có xuất hóa đơn cho điểm bán vãng lai (tại bước duyệt đơn hàng check chọn điểm bán vãng lai) => UI xem chi tiết đơn hàng chỉ hiển thị

2/ Trường hợp hóa đơn tương ứng với đơn hàng có trạng thái = Đã phát hành

Hiển thị UI:

Trong đó:

: Tag+ icon hiển thị Đã xuất hóa đơn

button: Xem hóa đơn

* Click show popup xem chi tiết hóa đơn đã phát hành.
* Cho phép tải về thiết bị
* Chọn back/ tắt popup để quay về màn hình Chi tiết đơn hàng