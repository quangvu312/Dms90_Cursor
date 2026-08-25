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

| Màn hình | Chi tiết | Mô tả |
| --- | --- | --- |
| Màn hình danh sách | Các field tìm kiếm dạng text | * Sẽ có placeholder hướng dẫn kèm tooltip      * Tìm kiếm like thông tin được nhập (tối đa là 500 ký tự dạng string)      * Mặc định trống * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. |
| Màn hình danh sách | Các field tìm kiếm dạng option one choice | Có thể type và search like trong select, kết quả sẽ hiển thị trong phần select  Sau khi chọn sẽ hiển thị thẳng kết quả lên ô select |
| Màn hình danh sách | Các field tìm kiếm dạng option multi choice | Có thể type và search like trong select, kết quả sẽ hiển thị trong phần select  Sau khi chọn sẽ hiển thị kết quả lên ô select dưới dạng từng tag và có button x xóa từng tag nếu muốn bỏ chọn |
| Màn hình danh sách | Button Làm Mới | Luôn luôn có button này ở vùng tìm kiếm |
| Màn hình danh sách | Button Tìm kiếm | Luôn luôn có button này ở vùng tìm kiếm |
| Màn hình danh sách | Column dạng ảnh | Có thể phóng to ảnh để xem |
| Màn hình danh sách | Column dạng mã | Có button copyt để copy mã |
| Màn hình danh sách | Column dạng Tên của đối tượng chính | Có dạng hyperlink click vào xem được chi tiết của đối tượng chính của màn hình |
| Màn hình danh sách | Các column ghi nhận dữ liệu:  Ngày tạo     Người tạo     Ngày cập nhật     Người cập nhật | Dạng text format datetime thông thường  DD-MM-YYYY HH:MM:SS   ví dụ: 19-07-2024 14:42:57 |
| Màn hình danh sách | Column Trạng thái | Column trạng thái sẽ có dạng Toggle Bật/Tắt để chuyển đổi trạng thái  Khi chuyển đổi trạng thái sẽ có warning. |
| Màn hình danh sách | Phân trang | Phân trang tại các danh sách cần có các thông tin sau:   * Số lượng hiển thị trong tổng số lượng data: Ví dụ: 1-50 trên 123 sản phẩm. * Các page : Hiển thị các số page, user có thể click để chuyển đến page danh sách tương ứng. Số page được chia như sau: Tổng số lượng Item / Số lượng data hiển thị trong 1 page và làm tròn lên. ví dụ 160 data / 50 data trên 1 page = 3.2 => làm tròn 4 pages. * Chuyển page kế tiếp hoặc trước đó : User có thể click => Chuyển đến page kế tiếp hoặc page trước đó. * Số lượng data hiển thị trên 1 trang: Click hiển thị danh sách số lượng data hiển thị trên 1 page. Sau khi lựa chọn hệ thống sẽ reload page. Bao gồm các lựa chọn: 10; 50; 100 |
| Màn hình tạo mới | Các field bắt buộc | Khi nhấn button Lưu mà để trống các field bắt buộc sẽ hiển thị highlight đỏ bên dưới field tương ứng |
| Màn hình tạo mới | Các field dạng option one choice | Có thể type và search like trong select, kết quả sẽ hiển thị trong phần select  Sau khi chọn sẽ hiển thị thẳng kết quả lên ô select |
| Màn hình tạo mới | Các field dạng option multi choice | Có thể type và search like trong select, kết quả sẽ hiển thị trong phần select  Sau khi chọn sẽ hiển thị kết quả lên ô select dưới dạng từng tag và có button x xóa từng tag nếu muốn bỏ chọn |
| Màn hình tạo mới | Các field dạng chọn Từ Ngày - Đến Ngày |  |
| Màn hình tạo mới | Các field dạng số tiền | Phải có format phần nghìn và tiền tệ |
| Màn hình tạo mới | Các filed dạng hình ảnh | Định dạng hình ảnh   * JPEG / JPG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)" * PNG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)" * SVG: kích thước <= 1MB. → Nếu dung lượng ảnh > 1MB, báo lỗi "Dung lượng ảnh SVG vượt quá giới hạn cho phép (1MB)" |
| Màn hình thêm mới/chỉnh sửa Portal | Quy tắc làm tròn số thập phân | Giá trị được làm tròn theo quy tắc    * Làm tròn đến 6 chữ số thập phân sau dấu ","  * Nếu giá trị có nhiều hơn 6 chữ số thập phân, làm tròn theo 4 xuống, 5 lên:  * + Nếu chữ số thập phân thứ 7 là 4 trở xuống (0, 1, 2, 3, 4), làm tròn xuống, nghĩa là giữ nguyên số phía trước và bỏ các số phía sau. VD: 999.4523532 → 999.452353   + Nếu chữ số sau dấu thập phân là 5 trở lên (5, 6, 7, 8, 9), làm tròn lên, nghĩa là tăng số phía trước lên một đơn vị và bỏ các số phía sau. VD: 999.4523536 → 999.452354 |
| Màn hình Thêm mới/Chỉnh sửa/Duyệt nghiệp vụ Đơn hàng, Kho, Trả hàng | Quy tắc load danh sách sản phẩm khi thêm mới/chỉnh sửa/duyệt phiếu Đơn hàng, Kho, Trả hàng | 1. Thêm mới:    * Không load danh sách sản phẩm in-active    * Khi bấm "Lưu" :      + Kiểm tra danh sách sản phẩm trong phiếu có bị in-active      + Hiển thị toast error "Tồn tại sản phẩm không còn hoạt động, hãy xóa sản phẩm khỏi danh sách" nếu kết quả sản phẩm bị in-active      + Error inline sản phẩm bị in-active (như hình dưới đây) 2. Khi chỉnh sửa    * Trường hợp sản phẩm bị in-active đã tồn tại trong phiếu trước đó, vẫn hiển thị sản phẩm đó    * **Áp dụng tương tự với rules của Thêm mới** 3. Duyệt phiếu    * Kiểm tra danh sách sản phẩm trong phiếu có bị in-active    * Hiển thị toast error "Tồn tại sản phẩm không còn hoạt động, hãy xóa sản phẩm khỏi danh sách" nếu có sản phẩm bị in-active 4. Danh sách nghiệp vụ được áp dụng  | Nghiệp vụ | Chức năng | | --- | --- | | Purchase Order | Thêm phiếu PO Sửa phiếu PO Duyệt phiếu PO | | Sell in | Thêm Sell in  Cập nhật Sell in  Duyệt Sell in | | Sell out | Thêm mới Sell out Cập nhật Sell out Duyệt Sell out | | Chuyển kho nội bộ | Thêm mới phiếu chuyển kho NB Chỉnh sửa phiếu chuyển kho NB Duyệt phiếu chuyển kho NB | | Chuyển kho NPP | Thêm mới phiếu chuyển kho NPP Chỉnh sửa phiếu chuyển kho NPP Duyệt phiếu chuyển kho NPP   NPP nhận duyệt phiếu chuyển kho NPP | | Kiểm kho | Thêm mới phiếu kiểm kho Chỉnh sửa phiếu kiểm kho Duyệt phiếu kiểm kho   HO Duyệt phiếu kiểm kho NPP | | Nhập kho | Duyệt phiếu nhập kho | | Xuất kho | Thêm mới phiếu xuất kho Chỉnh sửa phiếu xuất kho Duyệt phiếu xuất kho | | NPP Trả hàng | Thêm phiếu trả hàng lẻ Chỉnh sửa phiếu trả hàng lẻ Duyệt phiếu trả hàng lẻ    HO Duyệt phiếu trả hàng lẻ | | Điểm bán trả hàng lẻ | Thêm mới phiếu trả hàng lẻ Chỉnh sửa phiếu trả hàng lẻ Duyệt phiếu trả hàng lẻ | | Điểm bán trả hàng nguyên đơn | Thêm mới phiếu trả hàng nguyên đơn Chỉnh sửa phiếu trả hàng nguyên đơn Duyệt phiếu trả hàng nguyên đơn | |
| Màn hình Danh sách Điểm bán / Bảng giá | Quy tắc Export dữ liệu | Để xuất dữ liệu export ở Màn hình Danh sách, người dùng nhấn chọn nút "Export excel"  Nếu danh sách không có dữ liệu → hiển thị toast error "Không xuất được file vì không có dữ liệu"  Nếu danh sách có dữ liệu → Xuất dữ liệu dưới dạng file excel |
| Quản lý bảng giá | Quy tắc hiển thị sản phẩm trên bảng giá | * Khi thực hiện Lưu thêm mới/ Lưu chỉnh sửa/ Sao chép, hệ thống thực hiện xác thực danh sách sản phẩm theo quy tắc:   + Nếu trạng thái của sản phẩm = Hoạt động     - Nếu giá gốc = 0 => hiển thị trong bảng giá     - Nếu giá gốc ≠ 0 => hiển thị trong bảng giá   + Nếu trạng thái của sản phẩm = Không hoạt động     - Nếu giá gốc = 0 => không hiển thị trong bảng giá     - Nếu giá gốc ≠ 0 => hiển thị trong bảng giá |