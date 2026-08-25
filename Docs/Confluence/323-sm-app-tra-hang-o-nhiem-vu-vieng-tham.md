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

# 1 Các cài đặt chung cho đơn trả hàng

## 1.1 Màn hình Nhiệm vụ trên Portal HO

* Màn hình nhiệm vụ bổ sung nhiệm vụ Trả hàng.
  + Mã nhiệm vụ: RETURN\_ORDER
  + Tên nhiệm vụ: Trả hàng
  + Icon:

## 1.2 Lý do trả đơn bán hàng

Màn hình Danh sách Dữ liệu chung: Tạo loại lý do trả đơn bán hàng trên màn hình Dữ liệu chung Portal để nhân viên có thể chọn khi thực hiện trả hàng.

# 2 Màn hình nhiệm vụ viếng thăm trên App SM

Khi chọn vào chức năng trả hàng, hệ thống thực hiện kiểm tra:

* Nếu đang là CORE hệ thống: Cho phép trả hàng
* Nếu đang là Hương Thủy:
  + Nếu khách hàng thuộc Indirect Sales: Cho phép trả hàng
  + Nếu khách hàng thuộc Direct Sales: Hiển thị cảnh báo: Điểm bán thuộc Direct Sales không thể trả hàng, vui lòng liên hệ admin để được hỗ trợ!
    - Button Đóng: Quay về màn hình hiện tại, không cho phép trả hàng

## 2.1 Danh sách đơn trả hàng

Chọn chức năng Trả hàng, hệ thống mở màn hình chứa danh sách đơn trả hàng của điểm bán như sau:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Mô tả** |
| --- | --- | --- | --- |
| Button back | Button | Có | Trở lại màn hình trước đó, không cần hiển thị cảnh báo. |
| Tìm kiếm | Textbox | Có | Nhập mã đơn hàng để tìm kiếm  Search like theo mã đơn hàng |
| Bộ lọc  Button back: Trở lại lưới danh sách, không áp dụng điều kiện lọc, không cần hiển thị cảnh báo. | Button | Có | Click vào bộ lọc hiển thị màn hình lọc như sau:    **Có thể lọc theo các tiêu chí sau**   * **Ngày tạo**   + Chọn từ ngày - đến ngày để lọc thông tin đơn hàng   + Đến ngày >= Từ ngày   + Phải chọn cả từ ngày và đến ngày. Trường hợp không chọn, hiển thị lỗi inline bên dưới dòng: Không được để trống.   + Lọc theo ngày tạo đơn hàng * **Nguồn tạo (multichoice)**   + APP: Đơn trả hàng được tạo trên app Salesman   + WEB: Đơn trả hàng được tạo trên web * **Loại trả hàng **(multichoice)****   + **Trả hàng nguyên đơn**   + **Trả hàng lẻ** * **Trạng thái (multichoice)**   + Khởi tạo: Nhân viên mới tạo đơn trả hàng   + Đã duyệt: Đơn trả hàng được chuyển sang trạng thái Đã duyệt.   + Đã hủy: Đơn trả hàng được chuyển sang trạng thái Đã hủy. * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào danh sách đơn hàng và reload danh sách đơn hàng hiển thị kết quả tìm kiếm |
| Danh sách đơn trả hàng   * Nếu đơn trả hàng    + App:     - Salesman đang đăng nhập: Đơn trả hàng phải được tạo từ Salesman đang đăng nhập     - SUP đang đăng nhập: Đơn trả hàng phải được tạo từ nhân viên đang được chọn.   + Web: Đơn trả hàng phải có thông tin điểm bán trên đơn hàng  * Trường hợp tuyến nhân viên có chọn nhãn hàng, chỉ hiển thị các đơn hàng của điểm bán có chứa sản phẩm thuộc nhãn hàng đã chọn   + Chỉ cần trên đơn hàng có 1 sản phẩm thuộc nhãn hàng của tuyến thì hiển thị   + Đơn hàng không có sản phẩm nào thuộc nhãn hàng của tuyến thì không hiển thị * Trường hợp tuyến nhân viên không chọn nhãn hàng, hiển thị tất cả các đơn trả hàng của điểm bán * Sắp xếp đơn hàng theo thời gian cập nhật từ mới nhất → Cũ nhất * Thông tin đơn hàng sẽ hiển thị theo cập nhật mới nhất từ portal | | | |
| Mã đơn hàng | Label | Không | Thông tin mã của đơn hàng  Icon trả hàng |
| Thời gian tạo đơn | Label | Không | Thời gian tạo đơn trả hàng  Format: dd/mm/yyyy |
| Trạng thái | Label | Không | Trạng thái của đơn trả hàng   * + Khởi tạo: Nhân viên mới tạo đơn trả hàng   + Đã duyệt: Đơn trả hàng được chuyển sang trạng thái Đã duyệt.   + Đã hủy: Đơn trả hàng được chuyển sang trạng thái Đã hủy. |
| Điểm bán | Label | Không | Thông tin điểm bán trên đơn trả hàng   * Hình ảnh điểm bán: Lấy hình ảnh được chụp gần nhất của điểm bán * Mã điểm bán * Tên điểm bán * Địa chỉ điểm bán * Số điện thoại điểm bán |
| Nhà phân phối | Label | Không | Thông tin nhà phân phối trên đơn trả hàng |
| Loại đơn | Label | Không | Loại đơn hàng: Đơn trả |
| Nguồn tạo | Label | Không | Nguồn tạo:   * APP: Đơn trả hàng được tạo trên app Salesman * WEB: Đơn trả hàng được tạo trên web portal |
| Loại trả hàng | Label | Không | Loại trả hàng trên đơn hàng:   * Trả hàng nguyên đơn * Trả hàng lẻ |
| Giá trị đơn hàng | Label | Không | Thành tiền trên đơn trả hàng  Format tiền tệ hàng nghìn kèm icon tiền tệ |
| Chi tiết đơn hàng | Thẻ đơn hàng | Có | Chọn vào từng thẻ đơn hàng, hiển thị thông tin chi tiết đơn hàng |
| Tạo đơn mới | Button | Có | Nhấn button này để tạo thêm đơn hàng mới (Loại = Đơn trả)  Đơn trả hàng mới sẽ được mô tả bên dưới |

## 2.2 Chi tiết đơn trả hàng

### 2.2.1 Chi tiết đơn trả hàng trên App Salesman

Chọn vào đơn hàng trên màn hình danh sách đơn hàng sẽ hiển thị chi tiết đơn hàng như sau:

| Chi tiết đơn trả lẻ | Chi tiết đơn trả nguyên đơn |
| --- | --- |
|  |  |

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Mô tả** |
| --- | --- | --- | --- |
| Button back | Button | Có | * Trở lại màn hình trước đó, không cần hiển thị cảnh báo. |
| Nhà phân phối | Label | Không | * Thông tin NPP trên đơn trả hàng   + Nhà phân phối: Tên nhà phân phối trên đơn trả hàng   + Số điện thoại NPP: Thông tin số điện thoại của nhà phân phối |
| Kho trả hàng | Label | Không | Thông tin kho trả hàng trên đơn trả hàng |
| Thông tin điểm bán | Label | Không | * Thông tin điểm bán trên đơn trả hàng   + Tên điểm bán   + Số điện thoại điểm bán   + Địa chỉ điểm bán |
| Lý do trả hàng | Label | Không | Thông tin lý do trả hàng |
| **Thông tin đơn trả hàng**  Có thể xem thêm/thu gọn thông tin đơn trả hàng  Mặc định hiển thị view có "Xem thêm" như sau:     * **Thông tin đơn trả hàng sẽ hiển thị theo cập nhật mới nhất trên portal** | | | |
| Mã đơn hàng | Label | Không | * Thông tin mã của đơn trả hàng |
| Trạng thái đơn hàng | Label | Không | * Trạng thái đơn trả hàng:   + Khởi tạo: Nhân viên mới tạo đơn trả hàng   + Đã duyệt: đơn trả hàng được chuyển sang trạng thái Đã duyệt.   + Đã hủy: đơn trả hàng được chuyển sang trạng thái Đã hủy. |
| Thời gian tạo đơn | Label | Không | * Thời gian tạo đơn hàng * Format: dd/mm/yyyy |
| Mã điểm bán | Label | Không | * Thông tin Mã điểm bán trên Đơn trả hàng |
| Mã NV bán hàng - Tên NV bán hàng | Label | Không | * Thông tin nhân viên bán hàng tạo Đơn trả hàng   + Mã nhân viên   + Tên nhân viên |
| Nguồn tạo | Label | Không | * APP: Đơn trả hàng được tạo trên app Salesman * WEB: Đơn trả hàng được tạo trên web portal |
| Loại đơn | Label | Không | * Loại đơn hàng: Đơn trả |
| Loại trả hàng | Label | Không | Loại trả hàng trên đơn hàng:   * Trả hàng lẻ * Trả hàng nguyên đơn   + Trường hợp trả nguyên đơn sẽ có thông tin đơn hàng gốc đi kèm   + Click vào hiển thị chi tiết đơn hàng gốc |
| Thông tin Đơn trả hàng | | | |
| Thông tin sản phẩm | Label | Không | Thông tin sản phẩm trên Đơn trả hàng   * Sản phẩm thường   + Hình ảnh sản phẩm - Tên sản phẩm   + Đơn vị   + Thuế của sản phẩm trên Đơn trả hàng   + Số lượng trả trên Đơn trả hàng   + Đơn giá sản phẩm lúc tạo đơn trả hàng (Format tiền tệ)   + Thành tiền sản phẩm = Số lượng x Đơn giá (Format tiền tệ) |
| Thông tin thanh toán | Label | Không | * Thông tin thanh toán trên đơn trả |
| Ghi chú đơn hàng | Textarea | Không | Thông tin ghi chú trên đơn trả hàng:   * Trả hàng lẻ: Ghi chú trả hàng lẻ * Trả nguyên đơn: Ghi chú trên đơn hàng gốc |
| Lý do trả hàng | Textarea | Textarea | Thông tin lý do trả hàng |
| Lý do hủy đơn hàng | Textarea | Không | Lý do hủy đơn trả hàng từ portal khi user hủy đơn. |

### 2.3 Tạo đơn trả hàng Create\_Return\_Order

Chọn Tạo đơn mớ, hệ thống mở popup chọn 2 chức năng Trả hàng lẻ và Trả hàng nguyên đơn như sau:

true