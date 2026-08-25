|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Điều chỉnh các thông tin:  Thêm thông tin lot/date trên đơn hàng |
| Document version | RedV1.0.0  RedV1.1.0: Config cho phép sửa số suất trên CTKM |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Lưu ý

Các điều chỉnh trong tài liệu này áp dụng cho đơn hàng bình thường (không áp dụng cho đơn Vansales)

Thông tin Lot/date trên đơn hàng sẽ tuân theo config: DISPLAY\_LOT\_DATE\_IN\_SALES\_ORDER

* Config Bật → Hiển thị thông tin lot/date trên đơn hàng và cho phép người dùng điều chỉnh
* Config Tắt
  + Không hiển thị thông tin lot/date trên đơn hàng và lot/date lấy theo mặc định của hệ thống
  + Không hưởng được CTKM lot/date trên đơn hàng

Trường hợp LOT\_DATE\_CHECKING\_INVENTORY = 0 → Không hưởng được CTKM lot/date trên đơn hàng

RedV1.1.0: Bổ sung thông tin config cho phép sửa số suất trên CTKM. Link document promotion: [2.6 - Khuyến mãi Lô - Date - PROMOTION - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66524718)

**Config "Cho phép sửa số suất"**

* **Có**: Cho phép user chỉnh sửa số suất (Rule Default của hệ thống)
* **Không**: Không cho phép chỉnh sửa số suất, chỉ được chọn hoặc bỏ chọn CTKM. Vẫn xét tiếp rule giảm trừ cho các KM tiếp theo

1. Cấu hình điều chỉnh số suất **chỉ áp dụng** đối với CTKM có cấu hình lotdate (bao gồm: bậc thang và không bậc thang). Số suất mặc định sẽ là số suất tối đa được nhận
2. Nếu CTKM lotdate **loại bậc thang** thì cấu hình điều chỉnh số suất này sẽ áp dụng **cho tất cả các gói**
3. **C**onfig điều chỉnh số suất mặc định FALSE (ko được chỉnh sửa) nếu điều kiện tính KM là bậc thang -> sẽ không bị conflict với rule ko cho chỉnh sửa số suất. Tuy nhiên sau này vẫn có khả năng cho chỉnh sửa config điều chỉnh số suất nên BA prefer lấy theo config
4. Trường hợp nếu sau khi giảm trừ CTKM không trả về hoặc số suất, số lượng có thể giảm, thì kết quả này sẽ nhận từ promotion. OMS sẽ giữ nguyên kết quả này không xử lý gì thêm

# 1 Viếng thăm/Chăm sóc → Đặt hàng

## 1.1 Đơn hàng hôm nay → Chi tiết đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Show\_Lotdate  Hiển thị lot/date trên thông tin đơn hàng |  | Chọn vào "Xem lô" trên từng dòng sản phẩm để xem thông tin Lot/date trên đơn hàng.  Thông tin bao gồm:   * Số Lô: Thông tin số lô của sản phẩm trên đơn hàng * Hạn sử dụng: Thông tin hạn sử dụng theo số lô * Số lượng: Thông tin số lượng theo từng lô |
| Hiển thị lot/date trên thông tin khuyến mãi đã áp dụng của đơn hàng |  | Chọn vào "Xem lô" trên từng dòng sản phẩm khuyến mãi để xem thông tin Lot/date trên đơn hàng.  Thông tin bao gồm:   * Số Lô: Thông tin số lô của sản phẩm trên đơn hàng * Hạn sử dụng: Thông tin hạn sử dụng theo số lô * Số lượng: Thông tin số lượng theo từng lô |

## 1.2 Màn hình Chọn sản phẩm

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Add\_Lotdate  Thêm thông tin Lotdate trên sản phẩm đã chọn |  | * Khi 1 sản phẩm có số lượng >0, hệ thống tự động gợi ý các lô tồn kho của sản phẩm đó. * Các lô được sắp xếp theo hạn sử dụng tăng dần (FEFO). * Gợi ý tự động chọn từ các lô theo FEFO cho đủ số lượng người dùng đã chọn * Ví dụ:    + Người dùng chọn mua **100 sản phẩm A**.   + Tồn kho:  |  |  |  | | --- | --- | --- | | L001 | 10/07/2025 | 50 | | L003 | 15/09/2025 | 50 |  * Gợi ý tự động chọn từ các lô theo config ALLOW\_EXPIRED\_PRODUCT\_ORDER   + Nếu config nhập số >=0 → Lấy các lô theo FEFO (Hết hạn trước lấy ra trước), FIFO  và có (HSD - Ngày đặt hàng) >= số đã nhập   + Nếu config nhập số < 0 → Load tất cả theo FEFO, FIFO và không quan tâm hạn sử dụng * Trên các sản phẩm có số lượng >0 sẽ hiển thị dấu hiệu "Xem lô", click vào sẽ hiển thị màn hình như sau:      * Tổng số lượng: Tổng số lượng chọn ở màn hình Chọn sản phẩm, không được điều chỉnh, chỉ hiển thị thông tin. * Đã chọn: Người dùng thay đổi số lượng button Đã chọn sẽ tính toán lại để tính tổng số lượng trên các lô. * Người dùng có thể thay đổi số lượng trong từng lô, miễn tổng số lượng trên lô bằng tổng số lượng chọn và số lượng đã chọn <= tồn kho hiện tại của lô đó    + Chỉ được tăng đến bằng số tồn kho hiện tại của lô   + Khi nhấn Xác nhận, kiểm tra và → hiển thị thông báo:      - Lô @số lô chỉ còn x sản phẩm, vui lòng kiểm tra lại!     - Hiển thị inline messege cho lô bị lỗi như sau:      * + - Tổng số lượng đã chọn trên lô không bằng tổng số lượng sản phẩm (10), vui lòng kiểm tra lại!     - Sau khi tắt thông báo quay lại màn hình Lô áp dụng, hiển thị tồn kho mới nhất của từng lô, số lượng sản phẩm user đã nhập sẽ giữ nguyên để user tự điều chỉnh. * Hoặc người dùng có thể thêm lô mới thủ công bằng cách Bấm nút **“Thêm lô khác”** .    + Hệ thống hiển thị thêm các lô khả dụng của sản phẩm nhập thông tin lô như sau:        * + - Thông tin bao gồm: Số lô, Hạn sử dụng, Tồn kho theo từng lô:        * Hệ thống hiển thị các lô hợp lệ theo quy tắc FEFO và theo config ALLOW\_EXPIRED\_PRODUCT\_ORDER       * Chỉ hiển thị các lô chưa được chọn.       * Hiển thị mặc định 10 lô tiếp theo + button Thêm lô khác       * Khi đã hết các lô khả dụng của sản phẩm → hiện thị text "Đã hết danh sách"     - Số lượng:        * : Chọn vào icon để bắt đầu nhập số lượng cho lô mới chọn.       * Khi bấm vào mặc định số lượng = 1, bấm giảm tiếp thì sẽ quay về icon giỏ hàng.       * Người dùng nhập số lượng cho lô đã chọn       * Nhập số nguyên dương       * Số lượng phải <= tồn kho hiện có của lô đó       * Trường hợp user đã thay đổi số lượng trên các lô khác lô mà hệ thống gợi ý: Khi chọn xem lại lô, các lô có số lượng >0 sẽ sắp xếp theo số lượng lớn nhất để lên trên     - Xác nhận: Hệ thống kiểm tra trên các lô có số lượng >0:       * Tổng số lượng đã chọn trên lô phải bằng tổng số lượng sản phẩm đã chọn         + Nếu không hiển thị thông báo: Tổng số lượng đã chọn trên lô không bằng tổng số lượng sản phẩm (10), vui lòng kiểm tra lại!         + 10: Là tổng số lượng sản phẩm đã chọn.       * Lô hợp lệ theo theo config ALLOW\_EXPIRED\_PRODUCT\_ORDER         + Nếu không hiển thị thông báo: Lô @số lô đã hết hạn, vui lòng kiểm tra lại!         + Hiển thị inline messege cho lô bị lỗi như sau:      * + - * Số lượng phải <= tồn kho hiện có của lô đó         + Nếu không hiển thị thông báo: Lô @số lô chỉ còn x sản phẩm, vui lòng kiểm tra lại!         + Hiển thị inline messege cho lô bị lỗi như sau:      * + - * Bắt buộc phải có ít nhất 1 lô có số lượng > 0         + Nếu không hiển thị thông báo: Bạn chưa chọn thông tin lô,  vui lòng kiểm tra lại! * Nếu thỏa điều kiện thì lưu thông tin số lô đã chọn và quay về màn hình trước đó. * Người dùng có thể giảm số lượng trên từng lô về 0, hoặc nhập 0 để chọn lại lô khác. Khi giảm số lượng về 0/nhập 0 thì chỗ số lượng trên lô quay về icon . * Khi nhấn Cập nhật tồn kho:   + Ẩn các lô có số lượng user đã nhập <=0 mà:     - Không hợp lệ theo theo config ALLOW\_EXPIRED\_PRODUCT\_ORDER     - Có tồn kho <= 0   + Hiển thị các lô mới được thêm vào tồn kho   + Cập nhật số lượng tồn kho mới nhất của các lô   + Kiểm tra số lượng đã nhập với tồn kho sau khi cập nhật: Số lượng phải <= tồn kho hiện có của lô đó     - Nếu không hiển thị thông báo: Lô @số lô chỉ còn x sản phẩm, vui lòng kiểm tra lại!     - Hiển thị inline messege cho lô bị lỗi như sau: * Khi nhấn Xác nhận, hệ thống cũng sẽ thực hiện kiểm tra lại các thông tin:   + Tổng số lượng đã chọn trên lô không bằng tổng số lượng sản phẩm đã chọn     - Nếu không hiển thị thông báo: Tổng số lượng đã chọn trên lô không bằng tổng số lượng sản phẩm (10), vui lòng kiểm tra lại!     - 10: Là tổng số lượng sản phẩm đã chọn.   + Lô hợp lệ theo theo config ALLOW\_EXPIRED\_PRODUCT\_ORDER     - Nếu không hiển thị thông báo: Lô @số lô đã hết hạn, vui lòng kiểm tra lại!     - Hiển thị inline messege như trên     - Lúc này messege bên ngoài sẽ hiển thị thông báo: Tổng số lượng đã chọn trên lô không bằng tổng số lượng sản phẩm (10), vui lòng kiểm tra lại!   + Số lượng phải <= tồn kho hiện có của lô đó     - Nếu không hiển thị thông báo: Lô @số lô chỉ còn x sản phẩm, vui lòng kiểm tra lại!     - Hiển thị inline messege như trên   + Bắt buộc phải có ít nhất 1 lô có số lượng > 0     - Nếu không hiển thị thông báo: Bạn chưa chọn thông tin lô,  vui lòng kiểm tra lại!  * Lưu ý:   + Khi thực hiện thay đổi số lượng sản phẩm bên ngoài màn hình Chọn sản phẩm, thông tin lô sẽ được gợi ý lại từ đầu và xóa các thông tin lô người dùng đã chọn trước đó.   + Thay đổi lô trên màn hình này sẽ thay đổi lô trên màn hình Sản phẩm đã chọn.  Lưu ý  * ~~Đối với đơn hàng thuộc Direct sales của Hương Thủy → Chỉ cho phép chọn 1 lô/1 sản phẩm → Nếu chọn >1 lô sẽ hiển thị thông báo lỗi: Vui lòng chỉ chọn 1 lô cho 1 sản phẩm.~~ * Đơn hàng Direct hay Indirect cũng sẽ được chọn nhiều lô trên 1 sản phẩm |

## 1.3 Màn hình Gợi ý sản phẩm

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Thêm thông tin Lotdate trên sản phẩm đã chọn |  | Thêm thông tin Lotdate trên sản phẩm đã chọn  Chỉ cần sản phẩm có số lượng là sẽ có thông tin lô, pick số lượng từ ngoài màn hình chọn sản phẩm hay trong màn hình này thì đều sẽ có thông tin lô |

## 1.4 Màn hình Sản phẩm đã chọn (Giỏ hàng)

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Thêm thông tin Lotdate trên sản phẩm đã chọn |  | Thêm thông tin Lotdate trên sản phẩm đã chọn |

## 1.5 Màn hình Xác nhận đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Hiển thị lot/date trên thông tin đơn hàng |  | Chọn vào "Xem lô" trên từng dòng sản phẩm để xem thông tin Lot/date trên đơn hàng.  Hiển thị lot/date trên thông tin đơn hàng  Nếu muốn chỉnh sửa phải quay về màn hình Chọn sản phẩm/Sản phẩm đã chọn để chỉnh sửa  Nguyên tắc đề xuất lô cho promotion. Khi thực hiện lấy promotion   * Promotion trả về tiêu chí lấy lô cho OMS * OMS suggest lô trả về App SM tất cả các lô thỏa tiêu chí về số lượng suất tối đa cho từng sản phẩm.   + Ví dụ được tặng 10 trong 3 sản phẩm A, B, C thì trả về các lô sao cho có thể chọn được     - A: 10, B: 10, C:10     - Trường hợp không đủ 10 thì có thể trả về < 10     - Trường hợp hết tồn sản phẩm bất kỳ thì ẩn luôn sản phẩm đó * Trên App SM user có thể chọn lại sản phẩm/chọn lại số lượng sản phẩm. Khi user chọn lại, app SM tự động phân bổ lại lô trên từng sản phẩm * User nhấn Áp dụng   + Nếu KM ontop, OMS check lại CTKM:     - Nếu lô đủ điều kiện thì sẽ lưu lại thông tin lô của từng sản phẩm     - Nếu lô không đủ điều kiện thì BE tự sugest lại lô sao cho đủ tồn kho, nếu hết tồn kho sẽ bỏ CTKM     - Đi tới màn hình Khuyến mãi khả dụng, hiển thị các CTKM + sản phẩm tặng khả dụng     - Nhấn Xác nhận → Quay ra màn hình Xác nhận đơn hàng, hiển thị các CTKM + sản phẩm tặng khả dụng  * + Nếu KM bình thường, OMS check lại CTKM     - Nếu lô đủ điều kiện thì sẽ lưu lại thông tin lô của từng sản phẩm     - Nếu lô không đủ điều kiện thì BE tự sugest lại lô sao cho đủ tồn kho, nếu hết tồn kho sẽ bỏ CTKM     - Đi tới màn hình Khuyến mãi khả dụng, hiển thị các CTKM + sản phẩm tặng khả dụng     - Nhấn Xác nhận → Quay ra màn hình Xác nhận đơn hàng, hiển thị các CTKM + sản phẩm tặng khả dụng |
| Hiển thị lot/date trên màn hình Khuyến mãi ontop/khuyến mãi bình thường |  | Chọn vào "Xem lô" trên từng dòng sản phẩm để xem thông tin Lot/date trên đơn hàng.  Chỉ được xem thông tin lot/date từ promotion trả về và không được chỉnh sửa bất kỳ thông tin lot/date nào |

# 2 Menu đơn hàng

## 2.1 Chi tiết đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Hiển thị lot/date trên thông tin đơn hàng |  | Chọn vào "Xem lô" trên từng dòng sản phẩm để xem thông tin Lot/date trên đơn hàng.  Hiển thị lot/date trên thông tin đơn hàng |
| Hiển thị lot/date trên thông tin khuyến mãi của đơn hàng |  | Hiển thị lot/date trên thông tin đơn hàng |

# 3 Chi tiết điểm bán → Lịch sử đơn hàng

## 3.1 Chi tiết đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Hiển thị lot/date trên thông tin đơn hàng |  | Hiển thị lot/date trên thông tin đơn hàng |
| Hiển thị lot/date trên thông tin khuyến mãi của đơn hàng |  | Hiển thị lot/date trên thông tin đơn hàng |

# 4 Chỉnh sửa đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Thêm thông tin Lotdate trên sản phẩm đã chọn |  | Giữ nguyên các lot/date trên đơn hàng đã chọn  Thêm thông tin Lotdate trên sản phẩm đã chọn  Khi lưu đơn hàng thực hiện kiểm tra như đã mô tả |
| Hiển thị lot/date trên màn hình Khuyến mãi ontop/khuyến mãi bình thường |  | Chỉ được xem thông tin lot/date từ promotion trả về và không được chỉnh sửa bất kỳ thông tin lot/date nào |

# 5 Đặt lại đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Thông tin Lotdate |  | Sẽ lấy thông tin Lot/date gợi ý mới nhất và không sử dụng lot/date trên đơn hàng cũ |
|  |  |  |