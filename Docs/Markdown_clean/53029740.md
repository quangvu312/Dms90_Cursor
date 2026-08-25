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

# Bộ lọc khuyến mãi cho đơn hàng

| Bộ lọc ở các chức năng | Màn hình | Mô tả |
| --- | --- | --- |
| Menu đơn hàng → Bộ lọc đơn hàng |  | * Bổ sung thêm lọc theo khuyến mãi   + Giảm giá: Lọc các đơn hàng có áp dụng chương trình khuyến mãi giảm giá tiền   + Tặng quà: Lọc các đơn hàng có áp dụng chương trình khuyến mãi tặng sản phẩm   + Giảm phần trăm: Lọc các đơn hàng có áp dụng chương trình khuyến mãi giảm %tiền * Chỉ cần đơn hàng thỏa ít nhất 1 khuyến mãi theo từng loại thì sẽ hiển thị * Có thể chọn nhiều |
| Viếng thăm điểm bán → Nhiệm vụ đặt hàng → Bộ lọc đơn hàng |  |
| Chăm sóc điểm bán → Nhiệm vụ đặt hàng → Bộ lọc đơn hàng |  |
| Chi tiết điểm bán → Lịch sử đơn hàng |  |

# Thông tin khuyến mãi cho điểm bán

| Màn hình Chọn sản phẩm → Icon quà tặng đầu màn hình | Chọn vào icon hệ thống hiển thị màn hình như sau | Mô tả |
| --- | --- | --- |
|  |  | Click vào icon hiển thị màn hình danh sách CTKM được áp dụng cho điểm bán  CTKM ở đây sẽ hiển thị theo quy tắc (các quy tắc dưới đây theo điều kiện "và"):   * CTKM còn thời hạn áp dụng: Từ ngày <= Ngày hiện tại <= Đến ngày * CTKM có đối tượng áp dụng là điểm bán được chọn lúc tạo đơn hàng * CTKM có đối tượng áp dụng là NPP được chọn lúc tạo đơn hàng * CTKM có sản phẩm áp dụng là sản phẩm thuộc danh sách sản phẩm bán thuộc tuyến bán hàng của nhân viên.   Giao diện danh sách CTKM như sau hình bên trái   * **Tab Giảm Giá**: Hiển thị danh sách các CTKM thuộc loại Giảm %, Giảm Tiền   + Giảm tiền sử dụng icon:   + Giảm % sử dụng icon: * **Tab Tặng Quà**: Hiển thị danh sách các CTKM thuộc loại Tặng quà * Danh sách khuyến mãi hiển thị thông tin:   + Tên CTKM: Lấy từ trường "Tên hiển thị trên app" trên Portal Promotion khi cài đặt CTKM   + Ngày hết hạn CTKM: hh:mm dd/mm/yyyy.   + Lấy từ trường "Khoảng thời gian áp dụng" trên Portal Promotion khi cài đặt CTKM * Chọn vào chương trình khuyến mãi hiển thị chi tiết CTKM như sau:      * Loại khuyến mãi:   + Giảm giá/Giảm %/Tặng quà   + Trường hợp CTKM mix nhiều hình thức KM sẽ để chung thành: Khuyến mãi * Tên CTKM: Lấy từ trường "Tên hiển thị trên app" trên Portal Promotion khi cài đặt CTKM * Thời gian áp dụng:   + Lấy từ trường "Khoảng thời gian áp dụng" trên Portal Promotion khi cài đặt CTKM   + Format hh:mm dd/mm/yyyy * Thể lệ chương trình: Lấy từ trường "Thể lệ chương trình" trên Portal Promotion khi cài đặt CTKM |

# Thông tin khuyến mãi của sản phẩm trên danh sách sản phẩm

| Màn hình Chọn sản phẩm → Icon quà tặng ở góc hình ảnh của sản phẩm | Màn hình Chọn sản phẩm → tag giảm giá trong thông tin của sản phẩm | Màn hình Chọn sản phẩm → tag giảm % trong thông tin của sản phẩm | Trường hợp có cả 3 loại khuyến mãi trên một sản phẩm |
| --- | --- | --- | --- |
| Hiển thị icon khuyến mãi ở góc trên bên trái trong hình ảnh sản phẩm nếu sản phẩm có >= 1 CTKM áp dụng cho sản phẩm tại điểm bán tại NPP đang chọn và khuyến mãi là khuyến mãi tặng quà | Hiển thị tag giảm giá ở thông tin sản phẩm nếu sản phẩm có >= 1 CTKM áp dụng cho sản phẩm tại điểm bán và tại NPP đang chọn và khuyến mã là khuyến mãi giảm tiền | Hiển thị tag chiết khấu ở thông tin sản phẩm nếu sản phẩm có >= 1 CTKM áp dụng cho sản phẩm tại điểm bán và tại NPP đang chọn và khuyến mã là khuyến mãi giảm % |  |

# Thông tin khuyến mãi của sản phẩm trên chi tiết sản phẩm

| Thông tin khuyến mãi của sản phẩm trên chi tiết sản phẩm | Mô tả |
| --- | --- |
| Chi tiết sản phẩm sẽ được chọn từ các màn hình sau:   * Màn hình Chọn sản phẩm → Chọn chi tiết sản phẩm * Màn hìnhSản phẩm đã chọn → Chọn chi tiết sản phẩm   Sau khi chọn hệ thống mở màn hình chi tiết sản phẩm như sau | * Thông tin khuyến mãi giảm giá hoặc khuyến mãi tặng quà của sản phẩm * Khuyến mãi hiển thị theo rule như sau (các điều kiện dưới đây kết hợp theo quy tắc "và")   + CTKM còn thời hạn áp dụng: Từ ngày <= Ngày hiện tại <= Đến ngày   + CTKM có đối tượng áp dụng là điểm bán được chọn lúc tạo đơn hàng   + CTKM có đối tượng áp dụng là NPP được chọn lúc tạo đơn hàng   + CTKM có sản phẩm áp dụng là sản phẩm đang xem chi tiết ở đây * Thông tin khuyến mãi gồm:   + Tên CTKM: Lấy từ trường "Tên hiển thị trên app" trên Portal Promotion khi cài đặt CTKM   + Ngày hết hạn CTKM: hh:mm dd/mm/yyyy.   + Lấy từ trường "Khoảng thời gian áp dụng" trên Portal Promotion khi cài đặt CTKM * Chọn vào CTKM hiển thị chi tiết của CTKM |

# Khuyến mãi trên đơn hàng

Xem chi tiết từng loại khuyến mãi trên các document sau:

true