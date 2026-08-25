|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | BRD: [BRD [HƯƠNG THỦY] Đơn hàng gợi ý](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61163384) |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Chức năng danh sách sản phẩm gợi ý

Tự động đề xuất danh sách sản phẩm cần mua cho từng cửa hàng, nhằm tối ưu hóa lượng tồn kho, đảm bảo đáp ứng đủ nhu cầu tiêu dùng và tận dụng các chương trình khuyến mãi hiện hành.

#### Chức năng này sử dụng các thuật toán phân tích dữ liệu để đề xuất số lượng hàng hóa cần đặt mua theo từng cửa hàng, dựa trên các yếu tố đầu vào như:

* **Sản phẩm thường mua** (theo lịch sử mua hàng)
* **Sản phẩm đang khuyến mãi** (CTKM áp dụng)
* **Sản phẩm bán chạy theo khu vực**

**Cài đặt cho danh sách sản phẩm gợi ý được mô tả ở tài liệu: [[Portal] Cài đặt sản phẩm gợi ý](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61161231)**

Đường dẫn chức năng danh sách sản phẩm gợi ý trên App

| Màn hình | Mô tả |
| --- | --- |
|  | * Từ màn hình Chọn sản phẩm, chọn icon để mở màn hình danh sách sản phẩm gợi ý  * Icon này sẽ bật/tắt dựa trên config: `enable_suggested_order`   + Config Bật: Hiển thị icon  * + Config tắt: Ẩn icon   * Icon danh sách sản phẩm gợi ý sẽ hiển thị ở màn hình Chọn sản phẩm của tất cả các chức năng Đặt hàng trên App  * Trường hợp tất cả các card bên trong của danh sách sản phẩm gợi ý đều không có dữ liệu hoặc khi config `enable_suggested_order` bật mà các config ẩn/hiện của các card bên trong đã tắt hết, thì khi nhấn vào icon này sẽ hiển thị thông báo: Chưa có sản phẩm sản phẩm phù hợp để gợi ý! * + Đóng: Nhấn button Đóng để tắt popup. |

# Màn hình danh sách sản phẩm gợi ý

| Màn hình | Mô tả |
| --- | --- |
|  | Màn hình sẽ hiển thị 3 card sản phẩm gợi ý như sau   * **Sản phẩm thường mua** * **Sản phẩm đang khuyến mãi** * **Sản phẩm bán chạy theo khu vực**     **3 card này sẽ ẩn/hiện dựa vào điều kiện:**  1/ Ẩn/hiện theo các config tương ứng:   * `show_card_frequently_bought` * `show_card_promo` * `show_card_best_seller_area`   2/ Nếu card được config bật thì sẽ tiếp tục kiểm tra các điều kiện hiển thị và danh sách sản phẩm ở tài liệu [[Portal] Cài đặt sản phẩm gợi](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61161231)  3/ Thứ tự sắp xếp của 3 card này sẽ dựa trên thứ tự sắp xếp được cài đặt ở Config RECOMMENDATION\_PROUDCT\_LIST cho 3 tham số: show\_card\_frequently\_bought, show\_card\_promo, show\_card\_best\_seller\_area  4/ Sắp xếp sản phẩm trong card như sau   |  |  |  |  |  | | --- | --- | --- | --- | --- | | 1 | 3 | 5 | 7 | 9 | | 2 | 4 | 6 | 8 | 10 |   5/ Danh sách sản phẩm, floating buttton sản phẩm đã chọn, Tạm tính và thao tác thêm vào giỏ hàng như đã phát triển ở tính năng [[SM-APP] Đặt hàng ở nhiệm vụ viếng thăm (không khuyến mãi)](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752) và [[SM-APP] Khuyến mãi đặt hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53029740)   * Khi chọn sản phẩm/chọn đơn vị/nhập số lượng từ màn hình Chọn sản phẩm, vào màn hình Gợi ý này sẽ giữ nguyên thông tin đã chọn từ màn hình Chọn sản phẩm * Ngược lại từ màn hình Sản phẩm gợi ý nếu có chọn sản phẩm/chọn đơn vị/nhập số lượng thì khi quay lại màn hình Chọn sản phẩm sẽ giữ nguyên thông tin đã chọn từ màn hình Sản phẩm gợi ý. * Button Xác nhận sẽ đi đến màn hình Xác nhận đơn hàng. * Nếu back trở về màn hình trước, các sản phẩm đã thêm vào giỏ hàng sẽ ko mất đi.   6/ Trường hợp bất kỳ card nào có số lượng sản phẩm trong card < 1 thì sẽ ẩn card đó đi.  7/ Trường hợp số lượng sản phẩm trong card >10 sẽ hiển thị button Xem tất cả. Khi nhấn xem tất cả, mở màn hình chi tiết card như sau     * + - Tìm kiếm: Nhập mã sản phẩm, tên sản phẩm, đơn vị sản phẩm để tìm kiếm. Search like theo thông tin người dùng đã nhập     - Có (n) sản phẩm gợi ý: n là số lượng sản phẩm trong card     - Danh sách sản phẩm, floating buttton sản phẩm đã chọn, Tạm tính và thao tác thêm vào giỏ hàng như đã phát triển ở tính năng [[SM-APP] Đặt hàng ở nhiệm vụ viếng thăm (không khuyến mãi)](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752) và [[SM-APP] Khuyến mãi đặt hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53029740)     - Button Xác nhận sẽ đi đến màn hình Xác nhận đơn hàng.     - Nếu back trở về màn hình trước, các sản phẩm đã thêm vào giỏ hàng sẽ ko mất đi. |
| Lưu thông tin SP theo card để báo cáo hiệu quả gợi ý (Scope tháng 5 chỉ cần lưu được thông tin, chưa có báo cáo) | * Khi nhân viên thực hiện thêm sản phẩm trên card tương ứng vào giỏ hàng và đặt hàng. Khi đặt hàng thành công sẽ lưu lại thông tin sản phẩm trên đơn hàng được chọn từ card nào kèm số lượng theo đơn vị cơ bản để phục vụ báo cáo theo thời gian sau này. * Lấy thông tin số lượng cuối cùng trên đơn hàng đã đặt thành công (Chỉ cần đặt thành công đơn hàng, không quan tâm trạng thái đơn hàng hay sau đó đơn hàng có bị hủy hay trả lại hay không) * Trường hợp sản phẩm xuất hiện ở nhiều card thì ghi nhận thông tin cho tất cả các card.   + Ví dụ: Đơn hàng đặt có sản phẩm A số lượng = 20 xuất hiện ở 3 card. Ghi nhận:  * + - Card thường mua: SP A - 20 gói     - Card KM: SP A - 20 gói     - Card bán chạy: SP A - 20 gói |