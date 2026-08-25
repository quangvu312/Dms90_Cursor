|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chức năng xem các cửa hàng trong tuyến bán hàng của nhân viên trên bản đồ |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Bản đồ tuyến bán hàng

## Bản đồ tuyến trên tab Gán Tuyến

* Từ tab Gán tuyến của màn hình , bổ sung button Bản đồ tuyến

* Click vào button hiển thị thông tin các cửa hàng được thêm vào tuyến lên bản đồ theo thứ tự viếng thăm

* + Trường hợp không nhập thứ tự viếng thăm, hiển thị theo thứ tự bảng chữ cái tên điểm bán
  + Trường hợp thứ tự viếng thăm trùng nhau, hiển thị theo thứ tự bảng chữ cái tên điểm bán

| Chức năng | Mô tả |
| --- | --- |
| Bản đồ | * Hiển thị mặc định:   + Danh sách tất cả điểm bán trên tuyến bán hàng theo thứ tự viếng thăm   + Hiển thị bản đồ sao cho có thể thấy được tất cả điểm bán của tuyến được chọn để xem dữ liệu * Trên bản đồ sẽ hiển thị thông tin điểm bán dưới dạng các mốc địa chỉ trên bản đồ * + Thông tin địa chỉ là địa chỉ từ kinh độ, vĩ độ của điểm bán   + Mỗi mốc địa chỉ sẽ hiển thị con số bên trên. Số này đại diện cho thứ tự viếng thăm điểm bán trong tuyến đã cài đặt ở màn hình [Portal HO][DMS] Tuyến bán hàng   + Hệ thống sẽ thực hiện vẽ đường nối giữa các mốc địa chỉ theo thứ tự viếng thăm từ 1 → n * Bản đồ có thể zoom in, zoom out * Mốc điểm bán: Chọn vào mốc điểm bán trên bản đồ sẽ hiển thị thông tin điểm bán:  * + Hiển thị thông tin điểm bán kèm focus chọn vào thứ tự viếng thăm bên phải * + Thông tin bao gồm:     - Hình ảnh điểm bán: Trường hợp có nhiều ảnh sẽ lấy ảnh được chụp gần nhất     - Tên điểm bán     - Địa chỉ điểm bán     - Mã điểm bán     - Số điện thoại điểm bán |
| Chọn thứ viếng thăm | * Khi nhấn chọn thứ, các thứ có thông tin tần suất viếng thăm điểm bán trên Tab Gán tuyến sẽ được hiển thị ở đây. * Ví dụ trong danh sách tần suất viếng thăm chỉ có 4 ngày thứ 2, 3, 4, 5 là có tần suất viếng thăm điểm bán, thì ở đây chỉ hiển thị Thứ 2, Thứ 3, Thứ 4, Thứ 5 * Khi chọn thứ 2, Danh sách thứ tự đi tuyến sẽ hiển thị các điểm bán có viếng thăm vào thứ 2. * .... * Khi chọn thứ n, Danh sách thứ tự đi tuyến sẽ hiển thị các điểm bán có viếng thăm vào thứ n. |
| Thứ tự đi tuyến | * Thứ tự viếng thăm:   + Hiển thị thứ tự viếng thăm của các điểm bán trong tuyến từ 1 → n   + Có thể scroll xuống để xem tất cả các thứ tự viếng thăm của tất cả điểm bán trong tuyến   + Khi click vào thứ tự viếng thăm cũng hiển thị thông tin điểm bán có thứ tự viếng thăm được chọn trên bản đồ. Thông tin điểm bán được mô tả bên trên   + Khi chọn vào thứ tự viếng thăm sẽ zoom in vào điểm bán đang có thứ tự viếng thăm được chọn trên bản đồ. |
| Sắp xếp thứ tự viếng thăm | Khi click vào chức năng này: Hệ thống mở màn hình Sắp xếp thứ tự viếng thăm như sau     * Sắp xếp luôn luôn sắp xếp tất cả cửa hàng còn thời hạn trong tuyến và còn đang hoạt động (Sắp xếp không liên quan đến chọn thứ viếng thăm). * Các ô text để nhập thứ tự viếng thăm   + Mặc định trống   + Nhập số nguyên > 0   + Không bắt buộc nhập   + Trường hợp không nhập thì khi lưu mặc định = 1 * Button Hủy: Hiển thị cảnh báo: Màn hình đang có dữ liệu, bạn có muốn thoát?   + Đồng ý: Quay về màn hình trước đó, tắt chế độ sắp xếp, giữ nguyên thứ tự viếng thăm trước khi sắp xếp.   + Trở lại: Đóng popup trở về màn hình sắp xếp hiện tại. * Buton Lưu: Lưu thông tin viếng thăm điểm bán với thứ tự viếng thăm mới. * Đề xuất: Chức năng sẽ được mô tả bên dưới |
| Đề xuất | * Chọn vào chức năng này để đề xuất thứ tự viếng thăm. * Khi chọn vào button này, hệ thống mở màn hình như sau:      * Điểm bán bắt đầu viếng thăm:   + Hiển thị danh sách điểm bán trên tuyến để user chọn điểm bán bắt đầu viếng thăm. * Áp dụng: Nhấn vào button này   + Bắt buộc phải chọn Điểm bán bắt đầu viếng thăm mới chọn được button này.   + Dựa vào điểm bán đầu tiên này, hệ thống sẽ đề xuất thứ tự viếng thăm theo quy tắc:     - Bắt đầu từ điểm bán đầu tiên, gọi điểm bán đó có thứ tự viếng thăm = n → Tính độ dài quãng đường di chuyển (Quãng đường di chuyển theo ggmaps) đến các điểm bán còn lại trong danh sách.     - Lấy điểm bán có độ dài quãng đường di chuyển ngắn nhất trong danh sách → Đánh dấu  điểm bán đó có thứ tự viếng thăm = n+1       * Từ điểm bán có thứ tự viếng thăm n+1→ Tính độ dài quãng đường di chuyển (Quãng đường di chuyển theo ggmaps) đến các điểm bán còn lại trong danh sách.       * Lấy điểm bán có độ dài quãng đường di chuyển ngắn nhất trong danh sách → Đánh dấu điểm bán đó có thứ tự viếng thăm = n+2       * ....... Cho đến khi sắp xếp hết thứ tự viếng thăm cho tất cả điểm bán trong danh sách. * Sau khi đã có đủ thứ tự sắp xếp, hiển thị điểm bán và thứ tự sắp xếp đã đề xuất lên màn hình. * Button Hủy: Hiển thị cảnh báo: Màn hình đang có dữ liệu, bạn có muốn thoát?   + Đồng ý: Quay về màn hình trước đó, không thực hiện thao tác gì   + Trở lại: Đóng popup trở về màn hình sắp xếp hiện tại. * Buton Lưu: Lưu thông tin viếng thăm điểm bán với thứ tự viếng thăm tại chức năng Sắp xếp thứ tự viếng thăm. * Tại màn hình này người dùng vẫn có thể chọn vào điểm trên bản đồ hoặc chọn vào thứ tự để điều hướng đến vị trí của điểm bán trên bản đồ, hoặc chọn vào để xem thông tin điểm bán |

## Bản đồ tuyến trên danh sách Tuyến bán hàng

* Trên từng dòng Tuyến bán hàng trên lưới danh sách Tuyến, cột TÙy chỉnh, bổ sung button Bản đồ

* Click vào button hiển thị thông tin các cửa hàng được thêm vào tuyến lên bản đồ theo thứ tự viếng thăm

* Chức năng màn hình giống với chức năng nằm trong tab gán tuyến
* Trường hợp user chỉ có quyền view ở màn hình Tuyến bán hàng, thì chỉ có thể chọn thứ viếng thăm và view thông tin, không thể thực hiện sắp xếp tuyến.
* Trường hợp user có quyền create/edit ở màn hình Tuyến bán hàng thì mới có thể thực hiện đầy đủ các chức năng