|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-3156 |
| Epic |  |
| Feature |  |
| Description | Điều chỉnh các thông tin:  Thêm thông tin lot/date trên đơn hàng |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Lưu ý

Các điều chỉnh trong tài liệu này áp dụng cho đơn hàng bình thường (không áp dụng cho đơn Vansales)

Thông tin Lot/date trên đơn hàng sẽ tuân theo config: DISPLAY\_LOT\_DATE\_IN\_SALES\_ORDER & ALLOW\_EXPIRED\_PRODUCT\_ORDER

* Mô tả config xem tại: [HO] [HT] Danh sách cấu hình chung
* Luồng xử lý khi config ALLOW\_EXPIRED\_PRODUCT\_ORDER bị thay đổi khi đang xử lý đơn (chỉnh sửa/tạo mới đơn hàng) xem tại [**đây**](https://hotro.finviet.com.vn/browse/ECD-3335).

Tạo mới đơn hàng

**Mô tả:** Tại danh sách sản phẩm, thực hiện cập nhật các thông tin sau:

1. Khi thay đổi giá trị tại trường "Số lượng" của sản phẩm → Thực hiện luồng Đề xuất thông tin Lô tương tự Chuyển kho nội bộ (**[Quy tắc đề xuất thông tin lô sản phẩm](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021188#id-%5BNPP%5DChuy%E1%BB%83nkhon%E1%BB%99ib%E1%BB%99-Quyt%E1%BA%AFc%C4%91%E1%BB%81xu%E1%BA%A5tth%C3%B4ngtinl%C3%B4s%E1%BA%A3nph%E1%BA%A9m)**).

* Dựa vào thông tin "Sản phẩm", "Kho bán", "Kênh bán hàng", hệ thống lấy danh sách tồn kho tương ứng.
* Dựa vào "ngày đặt hàng" & danh sách tồn kho được lọc ra từ bước (1)
  + Hệ thống lọc danh sách tồn kho đáo ứng tại thời điểm ngày đặt hàng
  + Thực hiện đề xuất số lượng **Tạm giữ** theo lô theo cơ chế:

* + - Tăng số tạm giữ ở dòng dữ liệu tồn kho có hạn sử dụng gần nhất.
    - Nếu hạn sử dụng trùng nhau, thì xét đến ngày nhập hàng → tăng tạm giữ dữ liệu tồn kho có ngày nhập hàng xa nhất.

2. Bổ sung cột **Thông tin lô**

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Thông tin lô | Icon Button | - | Click chọn button "Thêm mới", kiểm tra:   1. Nếu vừa nhập lại số lượng sản phẩm hoặc chưa nhập thông tin lô trước đó →  Popup Dialog Thông tin lô được đề xuất theo quy tắc Đề xuất thông tin Lô. 2. Nếu không có thay đổi số lượng sản phẩm & đã nhập thông tin lô trước đó →  Popup Dialog Thông tin lô được người dùng nhập trước đó.   Hiển thị danh sách lô theo **Mô tả Danh sách lô** được define dưới đây. |

Mô tả **Danh sách lô**

| Trường thông tin | Định dạng | Quy tắc | Mô tả chi tiết |
| --- | --- | --- | --- |
| Số lô | Text | - | Hệ thống hiển thị số lô |
| Có sẵn | Number | Quy tắc tính Có sẵn của lô sản phẩm tương ứng:   * Bước 1: Hệ thống thực kiểm tra Kho và Kênh bán hàng trong kho và thực hiện lấy tồn theo Kho và Kênh tương ứng. * Bước 2: Hệ thống sẽ dựa vào ngày đặt hàng và ngày nhập để thực hiện lấy tổng số lượng tồn kho đáp ứng theo lô tại thời điểm ngày đặt hàng. * Bước 3: Hệ thống thực hiện kiểm tra đơn vị tính của sản phẩm trong đơn hàng:   + Nếu đơn vị tính là đơn vị quy đổi:     - Thực hiện quy đổi số lượng “Có sẵn” của lô sang đơn vị quy đổi theo công thức = số lượng theo đơn vị cơ bản : giá trị quy đổi   + Nếu đơn vị tính là đơn vị cơ bản: bỏ qua bước này. | Hệ thống hiển thị số lượng có sẵn của lô sản phẩm. |
| Số lượng | Input Number | Bắt buộc | Giá trị mặc định là số lượng được đề xuất theo quy tắc.  Min là 0  Số lượng kho trong lô là số nguyên |
| Hạn sử dụng | Date | - | Hệ thống hiển thị hạn sử dụng của lô sản phẩm tương ứng.  Định dạng là DD-MM-YYYY |
| Nút "Hoàn tất" | Button | - | Bấm Hoàn tất -> hệ thống kiểm tra số lượng <= có sẵn    1. 1. Nếu đúng → lưu lại và back về màn hình Danh sách sản phẩm    2. Nếu sai→ Hiển toast lỗi *"Số lượng không được lớn hơn số lượng có sẵn trong kho."* |
| Nút "Đóng" | But10000 |  | Bấm Đóng → Hệ thống đóng popup và bỏ qua các thay đổi về số lô của người dùng |

3. Cập nhật logic xử lý khi Lưu đơn hàng bán mới

* Hệ thống thực kiểm tra thêm rule: Tổng số lượng trong lô phải bằng số lượng sản phẩm ngoài danh sách
  + Nếu sai -> Hiển thị thông báo lỗi inline tại ô Số lượng của sản phẩm: "*Tổng số lượng sản phẩm phải bằng số lượng sản phẩm ngoài danh sách*."
* Nếu đơn hàng hợp lệ:
  + Thực hiên tính lại cột *Có sẵn* trong Thông tin lô,nếu số lượng lớn hơn tồn kho mới, báo lỗi: *"Số lượng không được lớn hơn Có sẵn.".*
  + Thay đổi quy tắc Cập nhật tồn kho trong kho khi tạo mới đơn hàng theo quy tắc:
    - Quy đổi số lượng sản phẩm của các lô sang đơn vị cơ bản nếu đơn vị tính trên đơn hàng là đơn vị quy đổi.
    - Thực hiện cập nhật số lượng trong kho như sau:
      * Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong đơn hàng. Nếu lô có nhiều ngày nhập khác nhau, thì ưu tiên lấy ngày nhập xa nhất trước để trừ trước. Công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong đơn hàng.
      * Thực hiện cộng số lượng tạm giữ tương ứng với số lượng đã được nhập từ đơn hàng. Công thức: Tạm giữ = Tạm giữ hiện tại + Số lượng bán.

## Chỉnh sửa đơn hàng

**Mô tả:** Khi chỉnh sửa đơn hàng, hệ thống thực hiện tính lại Có sẵn theo tưng lô của sản phẩm tại popup Thông tin lô như sau:

1. Hệ thống thực hiện tính *Có sẵn*như tại màn hình Tạo mới
2. Hệ thống thực hiện cộng số lượng có sẵn từng lô của sản phẩm tính được ở bước 1 với số lượng "Tạm giữ" hiện tại của từng lô: Số lượng Có sẵn từng lô tính được ở bước 1 + số lượng "Tạm giữ" từng lô tương ứng trong đơn hàng.

## Xem chi tiết đơn hàng

**Mô tả:** Tại màn hình Xem chi tiết đơn hàng, bổ sung cột Thông tin lô với thông tin chi tiết gồm:

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Số lượng | Text | Hiển thị số lượng |
| Có sẵn | Text | Hiển thị số có sẵn  Với phiếu ở trạng thái "Đã hủy", "Đã duyệt" → Hiển thị số lượng có sẵn  Với phiếu ở trạng thái "Khởi tạo" → hiển thị số lượng có sẵn = có sẵn + số lượng trên đơn. |
| Số lô | Text | Hiển thị số lô |
| Hạn sử dụng | Text | Hiển thị định dạng DD-MM-YYYY |
| Nút Đóng | Button | Nhấn nút đóng → hệ thống đóng popup "Xem thông tin lô" |