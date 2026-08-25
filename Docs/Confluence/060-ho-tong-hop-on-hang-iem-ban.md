|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-756  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-757Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1853Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1854 |
| Version | trueYellow1.0.2 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

Tính năng này cho phép HO xem tất cả đơn hàng bán (NPP) (sell-out) mà NPP trực thuộc HO đã bán cho các điểm bán

## **Requirements**

### Xem danh sách đơn hàng bán

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Danh sách đơn hàng bán |  | Đường dẫn: Bán hàng → Tổng hợp đơn hàng điểm bán  Hiển thị màn hình với các thông tin bao gồm:   * Thông tin tìm kiếm:   + - Tìm kiếm theo Mã đơn hàng: tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.     - Trạng thái:        * Gồm các trạng thái {Khởi tạo/Đã duyệt/Đã hủy/Đã xuất kho}.       * Mặc định chọn Khởi tạo và Đã duyệt.       * Cho phép chọn nhiều trạng thái.       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm     - Nhà phân phối       * Khi nhấn vào sẽ load hết danh sách NPP đang trực thuộc NPP HO, danh sách hiển thị với các thông tin gồm Mã NPP - Tên NPP.       * Cho phépd nhập dữ liệu để tìm kiếm like thông tin theo Mã/ Tên NPP.       * Cho phép chọn nhiều       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.       * Mặc định trống.     - Nhân viên bán hàng:        * Khi nhấn vào sẽ load hết danh sách nhân viên bán hàng đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Nhân viên bán hàng theo quy tắc **[phân quyền dữ liệu nhân viên bán hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53046920#:~:text=TEAM%201-,Nh%C3%A2n%20vi%C3%AAn%20b%C3%A1n%20h%C3%A0ng,-N%E1%BA%BFu%20user%20login)**       * Danh sách hiển thị với các thông tin gồm Mã nhân viên - Tên nhân viên       * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Họ và tên nhân viên       * Cho phép chọn nhiều nhân viên       * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.       * Mặc định trống <=> chọn tất cả nhân viên     - Ngành hàng:        * Hiển thị ngành hàng cấp 1 và cấp 2       * Hiển thị dạng phân cấp (cây)       * Cho phép chọn nhiều ngành hàng       * Sau khi chọn hiển thị dữ liệu báo cáo theo ngành hàng đã chọn. Chỉ hiển thị các đơn hàng có chứa sản phẩm có ngành hàng được chọn ở trường này.       * Khi mở màn hình mặc định không chọn dữ liệu <=> Chọn tất cả ngành hàng     - Ngày đặt hàng: Từ ngày - Đến ngày:        * Mặc định là tháng hiện tại       * Nếu để trống khi bấm "Tìm kiếm" → Hiển thị error message Input "Vui lòng chọn thời gian xem báo cáo"     - Tìm kiếm: khi nhấn vào sẽ tìm kiếm dữ liệu theo các thông tin được nhập/chọn. * Tổng tiền thanh toán: SUM (Tổng tiền thanh toán) của tất cả đơn đặt hàng theo điều kiện tìm kiếm. * Danh sách đơn đặt hàng hiển thị danh sách theo điều kiện tìm kiếm, gồm các đơn hàng bán mà NPP trực thuộc HO bán cho các điểm bán, sắp xếp theo theo ngày tạo mới nhất trước, có phân trang theo {10, 50, 100}, có các thông tin gồm:    + - Mã đơn hàng: khi nhấn vào hiển thị màn hình xem chi tiết đơn hàng bán (Mô tả ở mục Xem chi tiết đơn hàng bán).     - Ngày đặt hàng     - Nhà phân phối: Hiển thị Mã - Tên nhà phân phối     - Tổng tiền thanh toán (VND)     - Trạng thái     - Nhân viên     - Ngày tạo: theo định dạng dd-mm-yyyy h24:mi:ss     - Ngày cập nhật: theo định dạng dd-mm-yyyy h24:mi:ss     - Người tạo     - Người cập nhật |

### Xem chi tiết đơn hàng bán

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Xem chi tiết đơn hàng bán |  | Đường dẫn: Bán hàng → Tổng hợp đơn hàng điểm bán → Nhấn vào mã đơn hàng bất kỳ.  Xem chi tiết đơn hàng bán hiển thị thông tin gồm:   * + Ngày đặt hàng   + Nhà phân phối   + Kho   + Kênh bán hàng   + Điểm bán   + Nhân viên   + Trạng thái: {Khởi tạo/Đã duyệt/Đã hủy/Đã xuất kho}   + Lý do hủy: Hiển thị nếu trạng thái của đơn hàng là "Đã hủy"   + Ghi chú   + Danh sách sản phẩm     - Mã SKU     - Tên sản phẩm     - Đơn vị tính     - Số lượng     - Đơn giá (VND)     - Thuế VAT (%)     - Thành tiền (VND)     - Tiền VAT (VND)     - Thành tiền sau VAT (VND)   + Tổng tiền trước VAT (VND)   + VAT (VND)   + Khuyến mãi (VND)   + Giảm trừ (VND)   + Tổng tiền thanh toán   + Nút Đóng: Click vào nút → hệ thống thực hiện đóng popup xem chi tiết và trở về màn hình danh sách |
|  | Xem chi tiết đơn hàng khuyến mãi |  | Hiển thị danh sách **khuyến mãi ưu tiên** và **khuyến mãi bình thường** bao gồm các thông tin sau:  Mỗi CTKM - hình thức khuyến mãi là 1 dòng. Nếu CTKM là tặng X trong nhóm sản phẩm → Mỗi SKU tách xuống 1 dòng (chỉ hiển thị các SKU được lựa chọn tặng).  Mô tả UI:   | Tên CTKM | Hiển thị tên CTKM | | --- | --- | | Thể lệ chương trình | Click vào icon "i" → Hệ thống popup Dialog Mô tả thể lệ chương trình | | Mã SKU | Hiển thị Mã SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Tên SKU | Hiển thị tên SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Số lượng | Hiển thị số lượng SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Đơn vị | Hiển thị tên đơn vị của SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Khuyến mãi | Hiển thị giá trị tiền khuyến mãi  Nếu CTKM là Tặng % → Hiển thị thành tiền dựa trên chiết khấu | | Tồn kho | Hiển thị tồn kho dựa trên đơn vị của SKU  Nếu CTKM tặng % hoặc tiền, hiển thị "-" |   *Lưu ý: Người dùng không được chỉnh sửa thông tin gì của Khuyến mãi* |

### Xem đơn hàng vansales

| # | Title | User interaction and wireframe | Description |
| --- | --- | --- | --- |
| 1 | Xem danh sách |  | Màn hình danh sach đơn hàng bán bổ sung các thông tin sau:   * Tìm kiếm theo Loại đơn: {Đơn bán hàng, Đơn vansales} * Cột Loại đơn trên danh sách đơn hàng: {Đơn bán hàng, Đơn vansales} |
|  | Xem chi tiết đơn hàng |  | Tại màn hình xem chi tiết đơn hàng bán, bổ sung trường Loại đơn:   * Loại đơn bao gồm: Đơn bán hàng, Đơn vansales   Trường hợp Xem chi tiết đơn vansales:   * Loại đơn = "Đơn vansales" * Kho = Kho vansales |