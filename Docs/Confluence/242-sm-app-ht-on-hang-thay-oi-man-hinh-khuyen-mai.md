|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Điều chỉnh các thông tin:  1/ Thay đổi thông tin Khuyến mãi |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Lưu ý

Các điều chỉnh trong tài liệu này áp dụng cho đơn hàng direct sales

# 1 Viếng thăm/Chăm sóc → Đặt hàng

## 1.1 Đơn hàng hôm nay → Chi tiết đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Thay đổi thông tin khuyến mãi |  | * Trường hợp khách hàng được đánh dấu là "Indirect Sales", giao diện như cũ không thay đổi * Trường hợp khách hàng được đánh dấu là "Direct Sales"   + Đổi 2 button Khuyến mãi bình thường/Khuyến mãi ontop thành 1 button **Khuyến mãi áp dụng**   + Trên button Khuyến mãi áp dụng hiển thị số lượng là số lượng các khuyến mãi được áp dụng trên đơn hàng   + Khi người dùng click vào button Khuyến mãi áp dụng, hệ thống hiển thị màn hình Danh sách khuyến mãi như sau: |

## 1.2 Màn hình Chọn sản phẩm

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Màn hình Chọn sản phẩm không thay đổi |  | Icon quà tặng:  Click vào icon hiển thị màn hình danh sách CTKM được áp dụng cho điểm bán    CTKM ở đây sẽ hiển thị theo quy tắc (các quy tắc dưới đây theo điều kiện "và"):   * CTKM còn thời hạn áp dụng: Từ ngày <= Ngày hiện tại <= Đến ngày * CTKM có đối tượng áp dụng là điểm bán được chọn lúc tạo đơn hàng * CTKM có đối tượng áp dụng là NPP được chọn lúc tạo đơn hàng * CTKM có sản phẩm áp dụng là sản phẩm thuộc danh sách sản phẩm bán thuộc tuyến bán hàng của nhân viên.   Giao diện danh sách CTKM như sau hình bên trái   * **Tab Giảm Giá**: Hiển thị danh sách các CTKM thuộc loại Giảm %, Giảm Tiền   + Giảm tiền sử dụng icon:   + Giảm % sử dụng icon: * **Tab Tặng Quà**: Hiển thị danh sách các CTKM thuộc loại Tặng quà * Danh sách khuyến mãi hiển thị thông tin:   + Tên CTKM: Lấy từ trường "Tên hiển thị trên app" trên Portal Promotion khi cài đặt CTKM   + Ngày hết hạn CTKM: hh:mm dd/mm/yyyy.   + Lấy từ trường "Khoảng thời gian áp dụng" trên Portal Promotion khi cài đặt CTKM * Chọn vào chương trình khuyến mãi hiển thị chi tiết CTKM như sau:      * Loại khuyến mãi:   + Giảm giá/Giảm %/Tặng quà   + Trường hợp CTKM mix nhiều hình thức KM sẽ để chung thành: Khuyến mãi * Tên CTKM: Thông tin tên CTKM * Thời gian áp dụng:   + Thời gian áp dụng CTKM   + Format hh:mm dd/mm/yyyy * Thể lệ chương trình: Thông tin chi tiết CTKM |

## 1.3 Màn hình Xác nhận đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Update\_Promotion\_ConfirmOrderThay đổi thông tin khuyến mãi | '' | * Trường hợp khách hàng được đánh dấu là "Indirect Sales", giao diện như cũ không thay đổi * Trường hợp khách hàng được đánh dấu là "Direct Sales"   + Đổi 2 button Khuyến mãi bình thường/Khuyến mãi ontop thành 1 button **Khuyến mãi áp dụng**   + Trên button Khuyến mãi áp dụng hiển thị số lượng là số lượng các khuyến mãi khả dụng được ERP Hương Thủy trả về   + Khi người dùng click vào button Khuyến mãi áp dụng, hệ thống hiển thị màn hình Danh sách khuyến mãi như sau:      * + Màn hình Danh sách khuyến mãi hiển thị tất cả các CTKM khả dụng được ERP Hương Thủy trả về   + Người dùng nhấn vào checkbox trước mỗi CTKM để chọn/bỏ chọn CTKM để áp dụng trên đơn hàng   + Các CTKM trả về dưới dạng CTKM ontop     - Đối với các CTKM ko có kết hợp nhiều scheme (Alter Policy)        * Hiển thị checkbox checked disable chọn CTKM (Trên portal sẽ không hiện checkbox)       * Auto check hết các quà tặng bên trong các CTKM theo max item trả về       * User có thể check/uncheck quà tặng miễn là <= max item     - Đối với các CTKM có kết hợp nhiều scheme (Alter Policy)        * Hiển thị checkbox để chọn CTKM, không auto check       * Khi check chọn CTKM cha -> Check chọn quà tặng trong CTKM cha + Hiển thị CTKM con       * Khi chọn vào các CTKM con -> Thì cũng auto check quà tặng trong CTKM con đó.   + Khi chọn quà tặng trong trường hợp khuyến mãi nhóm sản phẩm chỉ được chọn sản phẩm, không chỉnh sửa số lượng.   + Khi chọn quà tặng trong trường hợp khuyến mãi tặng hoặc chỉ được chọn sản phẩm, không chỉnh sửa số lượng.   + Các trường hợp lỗi trong CTKM sẽ giữ nguyên như cũ không thay đổi * Sau khi chọn CTKM → Nhấn Áp dụng để áp dụng các CTKM trên đơn hàng * Khi chọn vào lại CTKM để xem, vẫn hiển thị "checked" với các CTKM đã chọn và "uncheck" với các CTKM chưa chọn * Khi chọn vào màn hình này sẽ hiển thị các CTKM mới hoặc ẩn đi các CTKM đã hết thời hạn hoặc không còn khả dụng |

# 2 Menu đơn hàng

## 2.1 Chi tiết đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Update\_Promotion\_DetailOrder Thay đổi thông tin khuyến mãi |  | * Đổi 2 button Khuyến mãi bình thường/Khuyến mãi ontop thành 1 button **Khuyến mãi áp dụng** * Trên button Khuyến mãi áp dụng hiển thị số lượng là số lượng các khuyến mãi khả dụng được người dùng chọn khi tạo đơn hàng * Khi người dùng click vào button Khuyến mãi áp dụng, hệ thống hiển thị màn hình Khuyến mãi đã áp dụng như sau: |

# 3 Chi tiết điểm bán → Lịch sử đơn hàng

## 3.1 Chi tiết đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Thay đổi thông tin khuyến mãi |  | Thay đổi thông tin khuyến mãi |

# 4 Chỉnh sửa đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Thay đổi thông tin khuyến mãi |  | Thay đổi thông tin khuyến mãi  Reload CTKM mới nhất tại thời điểm chỉnh sửa đơn hàng |

# 5 Đặt lại đơn hàng

| Chức năng điều chỉnh | Màn hình | Mô tả |
| --- | --- | --- |
| Thay đổi thông tin khuyến mãi |  | Thay đổi thông tin khuyến mãi  Reload CTKM mới nhất tại thời điểm đặt lại đơn hàng  Chỉ hiển thị các CTKM khả dụng tại thời điểm đặt lại đơn hàng |