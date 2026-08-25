|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-39 |
| Feature | Tuyến bán hàng |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0 : Thay đổi tuyến bán hàng theo bộ tần suất 52 tuần.  RedV1.2.0 : Thông tin Tỉnh/Thành Phố, Quận/Huyện, Phường Xã, Địa Chỉ của điểm bán (Thông tin do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ)  RedV1.3.0 : Bổ sung các cột trong template export tuyến bán hàng  RedV1.4.0 : Bổ sung thông tin điểm bán trên màn hình danh sách tuyến bán hàng  RedV1.5.0 : Bổ sung tần suất F12 (Viếng thăm 3 ngày / 1 tuần)  RedV1.6.0 : Thay đổi msg khi inactive tuyến mà đang có nhân viên trong tuyến thì báo mess: Vui lòng gỡ nhân viên khỏi tuyến trước khi thay đổi trạng thái.  Màn hình Gán tuyến (xem chi tiết; gán tuyến mới) -Thêm bộ lọc mã-tên-sđt điểm bán; lọc Tần suất; lọc thứ đi tuyến  RedV1.7.0 : Tuyến bán hàng - Điều chỉnh tuyến/ Import - Xóa điểm bán đã viếng thăm khỏi tuyến hiển thị popup lỗi có Mã điểm bán - Tên điểm bán đã viếng thăm trên tuyến.    * Lưu Vùng, lưu KV khi tạo tuyến theo địa chỉ NPP trên màn hình Tuyến bán hàng khi tạo mới/ chỉnh sửa   RedV1.8.031/5/2026: Bổ sung check rule khi xóa điểm bán trên tuyến bán hàng.   * Việc xóa cứng ĐB khỏi lưới Tuyến bán hàng bị ràng buộc bởi 2 điều kiện (kiểm tra theo thứ tự): |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1. Mục đích:**

* Khai báo tuyến bán hàng mới cho nhân viên
* Gán tuyến bán hàng cho nhân viên phụ trách.
* Gen tuyến viếng thăm hàng ngày trên Moblie.

## **2. Chức năng:**

* Xem danh sách tuyến
* Thêm tuyến mới
* Gán tuyến
* Chỉnh sửa tuyến
* Import tuyến
* Export tuyến
* Gen tuyến hàng ngày.

trueRoute 1falseautotoptrue7617

1 Nhân viên có thể gán nhiều tuyến; mỗi tuyến có thể cùng 1 Điểm bán nhưng phải khác Brand.

trueROUTEfalseautotoptrue6432

## **3.Mô tả:**

### 3.1 Màn hình danh sách tuyến

Khai báo menu MCP/MCL/Tuyến bán hàng

|  |  |  |  |
| --- | --- | --- | --- |
| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| **Chức năng Tìm kiếm** | | | |
| 1 | Tìm kiếm theo | Textbox | * Mặc định không có dữ liệu. * Cho phép tìm kiếm like (gần giống) Mã tuyến, Mã nhân viên, Tên nhân viên. |
| 2 | Tìm kiếm theo điểm bán  RedV1.4.0 | Textbox | * Mặc định không có dữ liệu * Tìm kiếm theo Mã, tên, số điện thoại điểm bán: Search like không dấu/có dấu tiếng việt * Placeholder/Tooltip: Tìm kiếm theo Mã | Tên | SĐT điểm bán * Sau khi search hiển thị các tuyến bán hàng có thông tin điểm bán được nhập ở trường này. |
| 3 | Vùng | Selectbox | * Mặc định không có dữ liệu * Chọn Vùng sổ ra Khu vực đã khai báo còn hoạt động * Cho phép chọn 1 hoặc nhiều dữ liệu |
| 4 | Nhà phân phối | Muiltiselect -Dropdownlist | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu khai báo NPP còn hoạt động * Người dùng tìm kiếm và chọn 1 hoặc nhiều theo dropdownlist. * Dữ liệu NPP lọc theo Khu vực |
| 5 | Nhiệm vụ viếng thăm | Muiltiselect -Dropdownlist | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu khai báo nhóm nhiệm vụ còn hoạt động * Người dùng tìm kiếm và chọn 1 hoặc nhiều theo dropdownlist. |
| 6 | Nhiệm vụ chăm sóc | Muiltiselect -Dropdownlist | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu khai báo nhóm nhiệm vụ còn hoạt động * Người dùng tìm kiếm và chọn 1 hoặc nhiều theo dropdownlist. |
| 7 | Trạng thái | Dropdownlist | * Mặc định không có dữ liệu. * Chỉ cho chọn 1 điều kiện:   Hoạt động: với tuyến có trạng thái hoạt động  Không hoạt động: với tuyến có trạng thái không hoạt động. |
| 8 | Làm mới | Button | * Nhấn làm mới: tất cả các thông tin các trường tìm kiếm quay về dữ liệu mặc định. |
| 9 | Tìm kiếm | Button | * Nhấn tìm kiếm: thực hiện tìm kiếm theo điều kiện đã filter. * Hiển thị tất cả dữ liệu thỏa điều kiện tìm kiếm ở giao diện danh sách tuyến |
| **Chức năng Danh sách tuyến** | | | |
| 1 | Import | Button | * Nhấn Import mở ra màn hình import danh sách tuyến (hình 8) * Xem mô tả chức năng import danh sách tuyến |
| 2 | Export | Button | * Nhấn Export xuất danh sách tuyến theo file excel (hình 9) * Xem mô tả chức năng export danh sách tuyến |
| 3 | Thêm | Button | * Nhấn Thêm mở ra màn hình Thêm mới tuyến * Xem mô tả chức năng Thêm mới tuyến |
|  | Expand/Collapse  RedV1.4.0 | Button | Bấm để mở rộng/thu gọn danh sách điểm bán trên tuyến bán hàng, thông tin bao gồm:   * Mã điểm bán: Thông tin mã điểm bán trên tuyến bán hàng * Tên điểm bán: Thông tin tên điểm bán trên tuyến bán hàng * Số điện thoại: Thông tin số điện thoại điểm bán trên tuyến bán hàng * Địa chỉ: Thông tin địa chỉ điểm bán trên tuyến bán hàng, địa chỉ theo user nhập vào, không phải địa chỉ tọa độ * Thứ 2... Chủ nhật: Hiển thị tần suất viếng thăm từng ngày của điểm bán, hiển thị tên tần suất * Trạng thái: Thông tin trạng thái hiện tại của điểm bán trên tuyến bán hàng * Phân trang danh sách điểm bán |
| 4 | STT | Text | * Hiển thị STT theo dòng dữ liệu |
| 5 | Vùng | Text | * Hiển thị dữ liệu Vùng của tuyến đã chọn |
| 6 | Khu vực | Text | * Hiển thị dữ liệu Khu vực của tuyến đã chọn |
| 7 | NPP | Text | * Hiển thị dữ liệu NPP |
| 8 | Mã tuyến | Text | * Hiển thị dữ liệu Mã tuyến |
| 9 | Tên Tuyến | Hyperlink | Khi nhấn vào trường này mở xem:   * Với tab thông tin tuyến: hiển thị tất cả thông tin tuyến (hình 2) * Với tab Lịch sử thay đổi: Cho phép chọn xem/xuất lịch sử thay đổi (tìm kiếm trong 30 ngày) (hình 3) |
| 10 | Nhân viên | Text | * Hiển thị dữ liệu Mã Nhân viên - Tên Nhân viên |
| 11 | Nhãn hàng | Text | * Hiển thị dữ liệu Nhãn hàng |
| 12 | NV viếng thăm | Text | * Hiển thị dữ liệu nhóm NV viếng thăm |
| 13 | NV chăm sóc | Text | * Hiển thị dữ liệu nhóm NV chăm sóc |
| 14 | Trạng thái | Button | * Trạng thái:   bên phải ON = Hoạt động  bên trái OFF = Không hoạt động   * Mặc định là trạng thái ON   Sửa OFF/ON sẽ có hiện thông báo:    Với trường hợp Tuyến chưa gán Nhân viên:   * Nhấn Đồng ý thì xét thực hiện OFF/ON tuyến  * Nhấn Hủy tắt thông báo.   Trường hợp Tuyến đã gán Nhân viên:   * Nhấn Đồng ý; có thông báo và không thể OFF tuyến   Bỏ msg này:   RedV1.6.0 : Thay đổi msg khi inactive tuyến mà đang có nhân viên trong tuyến thì báo mess: **"Vui lòng gỡ nhân viên khỏi tuyến trước khi thay đổi trạng thái."**   * Nhấn Hủy tắt thông báo. |
| 15 | Ngày tạo | Text | * Hiển thị ngày tạo nhiệm vụ * Format DD-MM-YYYY hh:mm:ss; 30-10-2024 15:00:01 |
| 16 | Người tạo | Text | * Hiển thị user người tạo |
| 17 | Ngày cập nhật | Text | * Mặc định lấy dữ liệu ngày tạo * Format DD-MM-YYYY hh:mm:ss; 30-10-2024 15:00:01 * Hiển thị dữ liệu ngày cập nhật dữ liệu gần nhất. |
| 18 | Người cập nhật | Text | * Mặc định lấy dữ liệu người tạo * Hiển thị dữ liệu người cập nhật dữ liệu gần nhất. |
| 19 | Chỉnh sửa | Button | * Nhấn Sửa mở ra màn hình chỉnh sửa danh sách tuyến (hình 6) * Xem mô tả chức năng chỉnh sửa tuyến. |
| 20 | Refesh tuyến | Button | Nhấn Refesh tuyến thì hệ thống gen lại tuyến hôm nay:   * Trường hợp thêm/xóa Điểm bán vào tuyến khi nhấn refesh lại sẽ gen lại tuyến giống với cập nhật. * Có phân quyền chức năng này   Chú ý :  Xét thêm điều kiện điểm bán đã hoàn tất viếng thăm hôm nay và có điều chỉnh tần suất viếng thăm cũng là hôm nay thì tuyến không gen lại điểm bán này Ví dụ : điểm bán A với tần suất F4 viếng thăm ngày thứ 3 Nhưng lại hoàn tất viếng thăm trái tuyến ngày thứ 2; và có điều chỉnh lại tần suất F8 viếng thăm vào thứ 2 và thứ 3 Thì khi refesh tuyến này vào thứ 2 sẽ không có điểm bán A Và áp dụng gen tuyến mới vào thứ 2 và thứ 3 tuần kế tiếp. |
| 21 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |

**Luồng điều chỉnh tuyến:  
  
trueFlow ngoại tuyếnfalseautotoptrue16025****3.2 Xem chi tiết tuyến và lịch sử chỉnh sửa**

Xem thông tin chi tiết tuyến cách nhấn vào hyperlink Tên tuyến trên màn hình Danh sách tuyến.

Gồm các tab Thêm tuyến/Gán tuyến/Lịch sử thay đổi.

Màn hình chỉ được xem không cho phép chỉnh sửa.

hình 2

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| **Tab Thêm tuyến** | | | |
| 1 | Vùng | Text | * Hiển thị Vùng/Khu vực của tuyến * Chỉ xem |
| 3 | NPP | Text | * Hiển thị NPP của tuyến * Chỉ xem |
| 4 | Nhãn hàng | Text | * Hiển thị Nhãn hàng của tuyến * Chỉ xem |
| 5 | Tên tuyến | Text | * Hiển thị Tên tuyến * Chỉ xem |
| 6 | Trạng thái | Text | * Hiển thị Trạng thái hoạt động của tuyến * Chỉ xem |
| 7 | Đóng | Button | * Nhấn Đóng tắt màn hình. |
| **Tab Gán tuyến** | | | |
| 1 | Mã tuyến | Text | * Hiển thị Mã tuyến * Chỉ xem |
| 2 | Nhân viên | Text | * Hiển thị Mã NV - Tên nhân viên * Chỉ xem |
| 3 | Nhiệm vụ theo tuyến | Text | * Hiển thị nhóm nhiệm vụ theo tuyến * Chỉ xem |
| 4 | Nhiệm vụ chăm sóc | Text | * Hiển thị nhóm nhiệm vụ chăm sóc * Chỉ xem |
| 5 | Export điểm bán | Button | * Khi nhấn nút Export trên màn hình Thông tin viếng thăm, hiển thị màn hình xác nhận xuất file.      * Theo file xuất mẫu:   <https://docs.google.com/spreadsheets/d/1LZ0OSixy4ByivrqDmQZX6ufx17_8em4Y2rkD16z31i4/edit?gid=0#gid=0>  Nhấn Đồng ý:   * Trường hợp không có dữ liệu trong khoảng thời gian tìm kiếm vẫn sẽ xuất file excel nhưng file excel sẽ không có data (vẫn có header)   Nhấn Thoát:   * Người dùng nhấn nút này; tắt màn hình và không thực hiện xuất file dữ liệu. |
| 6 | Mã điểm bán | Text | * Hiển thị Mã điểm bán * Chỉ xem |
| 7 | Tên điểm bán | Hyperlink | * Hiển thị Tên điểm bán * Nhấn hyperlink xem thông tin điểm bán <https://eco-dms-dev.finviet.com.vn/base-data/business/store> |
| 8 | Số điện thoại |  | * Hiển thị Số điện thoại * Chỉ xem |
| 9 | Địa chỉ |  | * Hiển thị Địa chỉ * Chỉ xem * RedV1.2.0 : Thông tin Tỉnh/Thành Phố, Quận/Huyện, Phường Xã, Địa Chỉ của điểm bán (Thông tin do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ) |
| 10 | Từ ngày |  | * Hiển thị Từ ngày * Chỉ xem |
| 11 | Đến ngày |  | * Hiển thị Đến ngày * Chỉ xem |
| 12 | Tần suất |  | * Hiển thị Tần suất * Chỉ xem |
| 13 | Thứ tự |  | * Hiển thị Thứ tự * Chỉ xem |
| 14 | Thứ |  | * Hiển thị Thứ viếng thăm * Chỉ xem |
| 15 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |
| 16 | Đóng | Button | * Nhấn Đóng tắt màn hình. |

hình 3

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| **Tab Lịch sử thay đổi** | | | |
| 1 | Chọn ngày | Date | * Người dùng nhập hoặc chọn ngày cập nhật của tuyến để tìm kiếm * Ràng buộc chọn xem trong vòng 30 ngày * Mặc định hiển thị ngày 1 đầu tháng và ngày hiện tại * Bắt buộc phải chọn Từ ngày - Đến ngày |
| 2 | Tìm kiếm | Button | * Nhấn Tìm kiếm trả ra những thông tin chỉnh sửa của tuyến |
| 3 | Export | Button | + Nhấn Export xuất tất cả những thông tin chỉnh sửa của tuyến      * Trường hợp không có dữ liệu trong khoảng thời gian tìm kiếm vẫn sẽ xuất file excel nhưng file excel sẽ không có data (vẫn có header) * Format tên file export: HIS\_ROUTE\_DDMMYYYYHHMMSS |
| 4 | Mã lịch sử | Text | * Hiển thị Mã lịch sử * Mã ghi nhận lịch sử trong 1 lần cập nhật * Format mã: ROUTE\_13 ký tự timestamp |
| 5 | Ngày cập nhật | Text | * Hiển thị dữ liệu Ngày cập nhật * Format dd-mm-yyyy hh:mm:ss |
| 6 | Người cập nhật | Text | * Hiển thị dữ liệu Người cập nhật |
| 7 | Màn hình | Text | * Hiển thị dữ liệu Màn hình |
| 8 | Trường thông tin | Text | * Hiển thị dữ liệu Trường thông tin chỉnh sửa tất cả ngoại trừ Thông tin viếng thăm. |
| 9 | Thông tin điểm bán | Hyperlink | * Nhấn vào hyperlink này mở ra màn hình Chi tiết thay đổi viếng thăm |
| 10 | Thao tác | Text | * Hiển thị dữ liệu Thao tác = Cập nhật dữ liệu |
| 11 | Nội dung cũ | Text | * Hiển thị dữ liệu Nội dung cũ |
| 12 | Nội dung mới | Text | * Hiển thị dữ liệu Nội dung mới |
| 13 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |
| 14 | Đóng | Button | * Nhấn Đóng tắt màn hình. |
| **Màn hình Chi tiết thay đổi viếng thăm** | | | |
|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Export | Button | + Nhấn Export xuất tất cả những thông tin chỉnh sửa của tuyến  <https://docs.google.com/spreadsheets/d/1-lyzYcMICqIYj2eRI4FK4aAor-USaHxmbM1woX03lD8/edit?gid=0#gid=0>   * Có notify "Dữ liệu export thành công ". * Trường hợp không có dữ liệu trong khoảng thời gian tìm kiếm vẫn sẽ xuất file excel nhưng file excel sẽ không có data (vẫn có header) * Format tên file export: HIS\_ROUTE\_DETAIL\_DDMMYYYYHHMMSS |
| 4 | Mã lịch sử | Text | * Hiển thị Mã lịch sử * Format mã: ROUTE\_STORE\_13 ký tự timestamp |
| 5 | Ngày cập nhật | Text | * Hiển thị dữ liệu Ngày cập nhật * Sắp xếp theo ngày cập nhật mới nhất.Thông tin viếng thăm |
| 6 | Người cập nhật | Text | * Hiển thị dữ liệu Người cập nhật |
| 7 | Trường thông tin | Text | * Hiển thị dữ liệu Trường thông tin chỉnh sửa tất cả ngoại trừ Thông tin viếng thăm. |
| 8 | Thông tin điểm bán | Text | * Nhấn vào hyperlink này mở ra màn hình Chi tiết thay đổi viếng thăm |
| 9 | Thao tác | Text | * Hiển thị dữ liệu Thao tác. Gồm các thao tác sau   + Thay đổi vùng/khu vực   + Thay đổi NPP   + Thay đổi nhãn hàng   + Thay đổi tên tuyến   + Thay đổi trạng thái   + Thay đổi nhân viên   + Thay đổi nhiệm vị theo tuyến/chăm sóc   + Thêm cửa hàng vào tuyến   + Xóa cửa hàng ra khỏi tuyến   + Thay đổi Từ Ngày - Đến ngày   + Thay đổi tần suất   + Thay đổi thứ tự viếng thăm   + Thay đổi thứ viếng thăm (Thứ 2,...Chủ nhật) * Hiển thị dữ liệu Thao tác = Cập nhật dữ liệu/Thêm/Xóa |
| 10 | Nội dung cũ | Text | * Hiển thị dữ liệu Nội dung cũ |
| 11 | Nội dung mới | Text | * Hiển thị dữ liệu Nội dung mới |
| 12 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |
| 13 | Đóng | Button | * Nhấn Đóng tắt màn hình. |

### 3.3 Màn hình Thêm tuyến

Người dùng nhấn nút Import trên màn hình Tuyến bán hàng sẽ mở ra màn hình Thêm tuyến.

Người dùng có thể Thêm tuyến trước sau đó gán tuyến sau; 2 tab này hoạt động độc lập.

Trường hợp chỉ Tuyến đã tạo nhưng chưa gán tuyến sẽ không được gen tuyến trên app.

hình 4

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Bắt buộc** | Chỉnh sửa | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Thêm tuyến** | | | | | |
| 1 | Vùng  RedV1.7.0    * Bỏ trường Vùng/Khu vực.  chỉ  Chọn NPP * Khi tạo tuyến bán hàng , Vùng và Khu sẽ auto sync sau khi chọn NPP. | Dropdownlist |  | Được phép | * Mặc định không có dữ liệu * Chọn Vùng sổ ra Khu vực đã khai báo còn hoạt động * Cho phép chọn 1 dữ liệu |
| 3 | \*NPP | Dropdownlist | Có | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu khai báo NPP còn hoạt động theo phân quyền dữ liệu người dùng * Người dùng tìm kiếm và chọn 1 theo dropdownlist. * Lọc theo Khu vực nếu có chọn Khu vực |
| 4 | Nhãn hàng | Dropdownlist |  | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy theo level 2 còn hoạt động của khai báo Cây phân cấp (<https://eco-dms-dev.finviet.com.vn/base-data/products/hiererchical-tree> * Người dùng tìm kiếm và chọn 1 theo dropdownlist. |
| 5 | \*Tên tuyến | Textbox | Có | Được phép | * Mặc định không có dữ liệu. * Người dùng nhập tên tuyến. * Ràng buộc tối đa 500 ký tự. * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 6 | Trạng thái |  |  | Được phép | * Trạng thái:   bên phải ON = Hoạt động  bên trái OFF = Không hoạt động; sẽ disable tab Gán tuyến   * Mặc định là trạng thái ON |
| 7 | Lưu | Button |  |  | * Người dùng nhấn Lưu. Có hiện thông báo.:      * Nhấn Đồng ý hệ thống xét tất cả ràng buộc; thỏa điều kiện sẽ lưu thông tin tuyến * Nhấn Hủy tắt thông báo. |
| 8 | Đóng | Button |  |  | * Người dùng nhấn Đóng tắt màn hình khai báo và không lưu dữ liệu. |

### 3.4 Màn hình gán tuyến

Sau khi người dùng đã nhập đầy đủ thông tin ở Tab Thêm tuyến, nhấn Lưu hệ thống auto chuyển Tab Gán tuyến để gán cho nhân viên; áp dụng cho case tạo mới và chỉnh sửa tuyến.

Trường hợp chưa khai báo hoặc tắt hoạt động Tab Thêm tuyến; Tab Gán tuyến sẽ disable không thể khai báo.

hình 5

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Bắt buộc** | Chỉnh sửa | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Thông tin** **Gán tuyến** | | | | | |
| 1 | Mã tuyến | Dropdownlist |  |  | * Hệ thống tự gen mã tuyến theo format ROUTE ký tự mã cty và 10 ký tự STT tự tăng * Không cho phép sửa. VD: ROUTE1234567890 |
| 2 | Mã nhân viên | Dropdownlist |  | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu khai báo nhân viên SM và SS còn hoat động * Lọc theo khu vực cùng với khu vực NPP (từ SM-->SS→ ASM (thuộc khu vực); từ NPP ở màn hình thêm tuyến lấy ra được khu vực) * Người dùng tìm kiếm và chọn 1 theo dropdownlist |
| 3 | \*Nhiệm vụ theo tuyến | Dropdownlist | Có | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu khai báo nhóm nhóm nhiệm vụ còn hoat động * Người dùng tìm kiếm và chọn 1 theo dropdownlist * Bỏ trống báo lỗi "Tên trường là bắt buộc" |
| 4 | Nhiệm vụ chăm sóc | Dropdownlist |  | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu khai báo nhóm nhóm nhiệm vụ còn hoat động * Người dùng tìm kiếm và chọn 1 theo dropdownlist |
| **Thông tin viếng thăm** | |  |  |  |  |
| 1 | Import Điểm bán | Button |  |  | * Khi nhấn nút Import trên màn hình Thông tin viếng thăm, hiển thị màn hình import và có xuất file mẫu.      * Người dùng nhấn Lấy file mẫu xuất file mẫu excel theo format. * File import mẫu:   <https://docs.google.com/spreadsheets/d/17mcVZDcJmQfaD1FlDFg0NM-dS4HXPbj9a851UzICRuM/edit?gid=0#gid=0>   * Nút Tiến hành xử lý chỉ enable khi đã import file. * Tại màn hình import người dùng chọn vào kéo thả file import vào ô "Chọn hoặc kéo file đến vị trí này" * Người dùng nhấn nút "Tiến hành xử lý" để import file dữ liệu vào hệ thống. * Ràng buộc tối đa 10.000 dòng. * Thực hiện override dữ liệu bằng cách lấy dữ liệu import cuối cùng. * Có notify "Dữ liệu import thành công vào hệ thống". * Có thông báo khi import không đúng format "File import không đúng định dạng. Vui lòng kiểm tra lại"   Thông báo lỗi:   * Có thông báo khi import dữ liệu lỗi. "Tại dòng n khai báo chưa đúng, vui lòng kiểm tra lại!" Với n là dòng dữ liệu bị lỗi; nếu có nhiều dòng lỗi hiển thị nhiều dòng lỗi Ví dụ:     **Lưu ý:**   * Trong cùng 1 file excel 1 mã tuyến chỉ xuất hiện 1 dòng cửa hàng (không cần quan tâm action)  * Trường hợp có nhiều mã tuyến thì có thể trùng cửa hàng, nhưng 1 mã tuyến chỉ có 1 cửa hàng nha * Trường hợp trùng cửa hàng trong cùng 1 mã tuyến hiển thị thông báo lỗi: Dòng n1, n2,... có điểm bán @mã điểm bán - @tên điểm bán trùng nhau, vui lòng kiểm tra lại! |
| 2 | Export Điểm bán | Button |  |  | * Khi nhấn nút Export trên màn hình Thông tin viếng thăm, hiển thị màn hình xác nhận xuất file.      * Theo file xuất mẫu:   <https://docs.google.com/spreadsheets/d/1LZ0OSixy4ByivrqDmQZX6ufx17_8em4Y2rkD16z31i4/edit?gid=0#gid=0>  Nhấn Đồng ý:   * Có notify "Dữ liệu export thành công ". * Trường hợp không có dữ liệu trong khoảng thời gian tìm kiếm vẫn sẽ xuất file excel nhưng file excel sẽ không có data (vẫn có header)   Nhấn Thoát:   * Người dùng nhấn nút này; tắt màn hình và không thực hiện xuất file dữ liệu. |
| 3 | Thêm Điểm bán | Button |  |  | * Thêm dòng khai báo Điểm bán mới dưới danh sách Điểm bán viếng thăm (như hình 5) |
| 4 | \*Mã Điểm bán | Dropdownlist | Có | Được phép | * Hiển thị tất cả Mã Điểm bán còn hoạt động * Lấy theo bảng khai báo Điểm bán và thuộc NPP * Cho chọn 1 điều kiện * Có thông báo là trường dữ liệu bắt buộc khi bỏ trống. * Chỉ bắt trùng điểm bán trong cùng 1 tuyến đang tạo/update. * Chỉ được thêm những điểm bán * Sau khi tạo nhấn vào hyperlink Điểm bán mở ra màn hình thông tin chi tiết Điểm bán |
| 5 | Tên Điểm bán | Text |  |  | * Lấy theo mã Điểm bán |
| 6 | Số điện thoại | Text |  |  | * Lấy theo mã Điểm bán |
| 7 | Địa chỉ Điểm bán | Text |  |  | * Lấy theo mã Điểm bán * RedV1.2.0 : Thông tin Tỉnh/Thành Phố, Quận/Huyện, Phường Xã, Địa Chỉ của điểm bán (Thông tin do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ) |
| 8 | \*Từ ngày | Date | Có | Được phép | * Người dùng nhập hoặc chọn lịch ngày. * Format dd-mm-yyyy (lưu trữ dữ liệu dd-mm-yyyy 00:00:00) * Có thông báo là trường dữ liệu bắt buộc khi bỏ trống. |
| 9 | Đến ngày | Date |  | Được phép | * Mặc định null (hiểu là áp dụng ngày vô cực ) * Format dd-mm-yyyy (lưu trữ dữ liệu dd-mm-yyyy 23:59:59) * Nếu có setup ngày bắt buộc Đến ngày >= Từ ngày |
| 10 | \*Tần suất | Dropdownlist | Có | Được phép | * RedV1.5.0 Lấy theo dropdownlist: F1-1; F1-2; F1-3; F1-4; F2-1; F2-2; F4; F8; F12; F16; F24 * Mặc định bằng F4 * Khi chọn lại Tần suất tự động reset Thứ viếng thăm. * Có thông báo là trường dữ liệu bắt buộc khi bỏ trống. * Cho chọn 1 điều kiện |
| 11 | Thứ vự viếng thăm | Number (Nguyên dương) | Có | Được phép | * Người dùng nhập thứ tự viếng thăm Điểm bán trong 1 ngày * Nhập số nguyên dương > 0 * Mặc định bằng 1 * Sort Điểm bán hiển thị trên app theo thứ tự này (trường hợp trùng thứ tự, sort theo Mã Điểm bán) |
| 12 | Thứ 2 | Checkbox |  | Được phép | * Người dùng chọn Check-on vào thứ bắt đầu viếng thăm Điểm bán của plan * Hệ thống sẽ tính toán để gen Tuyến hàng ngày dựa vào:   + RedV1.1.0     - Sắp xếp theo tần suất 52 tuần 1 năm. Hệ thống sẽ tự gen sẵn các tuần trong năm.     - Bắt đầu từ năm 2025       * Ngày bắt đầu tuần 1 là 30/12/2024       * Ngày kết thúc tuần 52 là 28/12/2025     - Tiếp tục gen tuần cho các năm tiếp theo   + Các tần suất sẽ bao gồm:     - F1-1: thứ viếng thăm 1 lần/1 tuần vào các tuần 1, 5, 9, 13, 17, 21, 25, 29,... (ràng buộc chọn 1 ngày trong tuần)     - F1-2: thứ viếng thăm 1 lần/1 tuần vào các tuần 2, 6, 10, 14, 18, 22, 26, 30,... (ràng buộc chọn 1 ngày trong tuần)     - F1-3: thứ viếng thăm 1 lần/1 tuần vào các tuần 3, 7, 11, 15, 19, 23, 27, 31,... (ràng buộc chọn 1 ngày trong tuần)     - F1-4: thứ viếng thăm 1 lần/1 tuần vào các tuần 4, 8, 12, 16, 20, 24, 28, 32,... (ràng buộc chọn 1 ngày trong tuần)     - F2-1: thứ viếng thăm 1 lần/1 tuần vào các tuần 1, 3, 5, 7, 9 ,11, 13,...  (ràng buộc chọn 1 ngày trong tuần)     - F2-2: thứ viếng thăm 1 lần/1 tuần vào các tuần chẵn 2, 4, 6, 8, 10, 12, 14,.... (ràng buộc chọn 1 ngày trong tuần)     - F4: thứ viếng thăm 1 lần/1 tuần   (ràng buộc chọn 1 ngày trong tuần)     - F8: thứ viếng thăm 2 lần/1 tuần  (ràng buộc chọn 2 ngày trong tuần)     - RedV1.5.0 : F12 :  thứ viếng thăm 3 lần/1 tuần  (ràng buộc chọn 3 ngày trong tuần)     - F16: thứ viếng thăm 4 lần/1 tuần (ràng buộc chọn 4 ngày trong tuần)     - F24: thứ viếng thăm 6 lần/1 tuần  (ràng buộc chọn 6 ngày trong tuần) * Có thông báo nếu sai rule: "Với **tần số** thì buộc khai báo đủ **số** ngày lần/tuần". Với tần số là (F1.1; F4,.....) số là (1;2;4;6) tùy theo khai báo tần số. |
| 13 | Thứ 3 | Checkbox |  | Được phép |
| 14 | Thứ 4 | Checkbox |  | Được phép |
| 15 | Thứ 5 | Checkbox |  | Được phép |
| 16 | Thứ 6 | Checkbox |  | Được phép |
| 17 | Thứ 7 | Checkbox |  | Được phép |
| 18 | Chủ nhật | Checkbox |  | Được phép |
| 19 | Save | Button |  |  | * Nút hiển thị khi người dùng nhấn thêm mới hoặc chỉnh sửa dòng dữ liệu * Nhấn nút này để lưu dữ liệu chỉnh sửa * Có ghi nhận thông tin lịch sử chỉnh sửa |
| 20 | Hủy | Button |  |  | * Nút hiển thị khi người dùng nhấn thêm mới hoặc chỉnh sửa dòng dữ liệu * Nhấn nút này để thoát thêm mới hoặc chỉnh sửa và không lưu dữ liệu |
| 21 | Sửa | Button |  |  | * Nhấn nút sửa cho phép chỉnh sửa dữ diệu dòng đã chọn * Có ghi nhận thông tin lịch sử chỉnh sửa |
| 22 | Xóa | Button |  |  | * Nhấn nút xóa cho phép xóa dòng đã chọn * Có ghi nhận thông tin lịch sử xóa |
| 23 | Lưu | Button |  |  | * Người dùng nhấn Lưu. Có hiện thông báo.:      * Nhấn Đồng ý hệ thống xét tất cả ràng buộc; thỏa điều kiện Tạo mới và lưu thông tin.   + RedV1.7.0 RedV1.8.0: Việc xóa cứng ĐB khỏi lưới Tuyến bán hàng bị ràng buộc bởi 2 điều kiện (kiểm tra theo thứ tự):  * **Ràng buộc 1 (Dữ liệu CTTB/CTTL):** Chặn xóa nếu ĐB đang có Phiếu đăng ký tham gia CTTB/TL ở trạng thái "Đã duyệt" hoặc "Chờ duyệt".  + *Lý do:* Tránh mồ côi dữ liệu (Migrate data) không có Tuyến map với CTTB/CTTL. + *Popup Message lỗi:*   - ***"Điểm bán [Mã ĐB] đang có chương trình trưng bày [Mã CTTB 1, Mã CTTB 2] hiệu lực. Bạn không được xóa trực tiếp. Vui lòng sử dụng tính năng Ngày kết thúc để ngưng hoạt động điểm bán trên tuyến."***   - ***"Điểm bán [Mã ĐB] đang có chương trình tích lũy [Mã CTTL 1, Mã CTTL 2] hiệu lực. Bạn không được xóa trực tiếp. Vui lòng sử dụng tính năng Ngày kết thúc để ngưng hoạt động điểm bán trên tuyến."***   - *Chọn dấu "x" để đóng popup.*  * **Ràng buộc 2 (Dữ liệu Viếng thăm):** Chặn xóa nếu ĐB **có dữ liệu viếng thăm trong ngày hôm nay**.  + *Message lỗi:* *"Điểm bán @Mã - @Tên trong tuyến đã có viếng thăm. Không thể xóa điểm bán ra khỏi tuyến."*  * + Chọn dấu "x" để đóng popup. * Nhấn Hủy tắt thông báo. |
| 24 | Đóng | Button |  |  | * Người dùng nhấn Đóng tắt màn hình khai báo và không lưu dữ liệu. |

RedV1.6.0 Bổ sung bộ lọc điểm bán; tần suất, thứ đi tuyến ở Tab Gán tuyến → Thông tin viếng thăm/ Xem chi tiết tuyến

Mặc định: Thu gọn

Chọn "Bộ lọc" để mở rộng → hiển thị nội dung bộ lọc.

Chọn "Thu gọn" để thu gọn nội dung bộ lọc.

**Tìm kiếm điểm bán:**

* Kiểu textsearch.
* Tooltip: Tìm kiếm theo Mã điểm bán, Tên điểm bán, Số điện thoại điểm bán
* Placeholder: Tìm kiếm theo Mã điểm bán, Tên điểm bán, Số điện thoại điểm bán
* Kết quả: Sau khi nhập và chọn tìm kiếm hoặc Enter. Hệ thống Seach like và hiển thị danh sách các điểm bán đã thêm trên lưới danh sách

**Tần suất:**

* Placeholder: Chọn tần suất
* Chỉ chọn một, hiển thị kết quả sau khi chọn
* Kết quả: Hiển thị danh sách các điểm bán đã thêm trên lưới danh sách có tần suất đã chọn

**Thứ đi tuyến:**

* Placeholder: Chọn thứ
* Chỉ chọn một, hiển thị kết quả sau khi chọn
* Kết quả: Hiển thị danh sách các điểm bán đã thêm trên lưới danh sách có thứ đi tuyến đã chọn

### 3.5 Chỉnh sửa tuyến

Cho chỉnh sửa thông tin với những trường "Được phép" như mô tả phần Thêm mới tuyến

Luồng chỉnh sửa cũng ràng buộc thông tin như luồng Thêm mới tuyến

hình 6

hình 7

### 3.6 Import tuyến

Khi nhấn nút Import trên màn hình Tuyến bán hàng, hiển thị màn hình import và có xuất file mẫu. như hình 8

hình 8

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| 1 | Lấy file mẫu | Button | * Người dùng nhấn nút này tự động xuất file mẫu excel theo format. * File import mẫu:   <https://docs.google.com/spreadsheets/d/1k-Fcoxnm53isKKlytkhPhbyPhCbf6xQ7sl6FZhBfnbw/edit?gid=0#gid=0> |
| 2 | Tiến hành xử lý | Button | * Nút chỉ enable khi đã import file. * Tại màn hình import người dùng chọn vào kéo thả file import vào ô "Chọn hoặc kéo file đến vị trí này" * Người dùng nhấn nút "Tiến hành xử lý" để import file dữ liệu vào hệ thống. * Ràng buộc tối đa 10.000 dòng. * Có notify "Dữ liệu import thành công vào hệ thống". * Có thông báo khi import không đúng format "File import không đúng định dạng. Vui lòng kiểm tra lại"   Check Action:   * Nếu chọn Action = Thêm: hệ thống sẽ kiểm tra cặp Mã điểm bán thuộc Mã tuyến nếu chưa tồn tại sẽ được thêm mới.   Ngược lại sẽ cập nhật dữ liệu Mã điểm bán thuộc Mã tuyến.   * Nếu chọn Action = Xóa: hệ thống sẽ kiểm tra cặp Mã điểm bán thuộc Mã tuyến nếu đã tồn tại sẽ được xóa điểm bán ra khỏi tuyến.  * + RedV1.7.0  RedV1.8.0: Việc xóa cứng ĐB khỏi lưới Tuyến bán hàng bị ràng buộc bởi 2 điều kiện (kiểm tra theo thứ tự):     - **Ràng buộc 1 (Dữ liệu CTTB/CTTL):** Chặn xóa nếu ĐB đang có Phiếu đăng ký tham gia CTTB/CTTL ở trạng thái "Đã duyệt" hoặc "Chờ duyệt".       * *Lý do:* Tránh mồ côi dữ liệu (Migrate data) không có Tuyến map với CTTB/CTTL.       * *Message lỗi:*         + ***"Điểm bán [Mã ĐB] đang có chương trình trưng bày [Mã CTTB 1, Mã CTTB 2] hiệu lực. Bạn không được xóa trực tiếp. Vui lòng sử dụng tính năng Ngày kết thúc để ngưng hoạt động điểm bán trên tuyến."***         + ***"Điểm bán [Mã ĐB] đang có chương trình tích lũy [Mã CTTL 1, Mã CTTL 2] hiệu lực. Bạn không được xóa trực tiếp. Vui lòng sử dụng tính năng Ngày kết thúc để ngưng hoạt động điểm bán trên tuyến."***     - **Ràng buộc 2 (Dữ liệu Viếng thăm):** Chặn xóa nếu ĐB **có dữ liệu viếng thăm trong ngày hôm nay**.       * *Message lỗi:* *"Điểm bán @Mã - @Tên trong tuyến đã có viếng thăm. Không thể xóa điểm bán ra khỏi tuyến."*   Ngược lại có thông báo "Điểm bán @mã điểm bán - tên điểm bán chưa tồn tại trên tuyến. Vui lòng kiểm tra lại"   * Hệ thống xét tất cả ràng buộc; thỏa điều kiện thì lưu thông tin. Ngược lại có thông báo thông tin lỗi từng dòng và không lưu thông tin import. * Có thông báo khi import dữ liệu lỗi. "Tại dòng n khai báo chưa đúng, vui lòng kiểm tra lại!" Với n là dòng dữ liệu bị lỗi; nếu có nhiều dòng lỗi hiển thị nhiều dòng lỗi như hình Ví dụ: |

### 3.7 Export danh sách tuyến

Khi nhấn nút Export trên màn hình Tuyến bán hàng, hiển thị thông báo như hình 9.

hình 9

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| 1 | Đồng ý | Button | * Nhấn Export xuất tất cả những thông tin chỉnh sửa của tuyến * File export:    + RedV1.3.0: Bổ sung các cột thông tin sau, template như trong file đính kèm:     - Mã NPP, Tên NPP: Hiện tại đã có 1 cột NPP, đổi tên cột này thành Tên NPP, và thêm 1 cột Mã NPP     - Phường/Xã : Thông tin phường/xã từ địa chỉ do người dùng nhập vào của điểm bán (Không phải là địa chỉ từ tọa độ)     - Quận/Huyện    :Thông tin quận/huyện từ địa chỉ do người dùng nhập vào của điểm bán (Không phải là địa chỉ từ tọa độ)     - Tỉnh/Thành Phố    : Thông tin tỉnh/thành phố từ địa chỉ do người dùng nhập vào của điểm bán (Không phải là địa chỉ từ tọa độ)     - Kinh độ    : Thông tin kinh độ của điểm bán     - Vĩ độ: Thông tin vĩ độ của điểm bán  * Có notify "Dữ liệu export thành công ". * Trường hợp không có dữ liệu trong khoảng thời gian tìm kiếm vẫn sẽ xuất file excel nhưng file excel sẽ không có data (vẫn có header) |
| 2 | Thoát | Button | Người dùng nhấn nút này; tắt màn hình và không thực hiện xuất file dữ liệu. |

### **3.8. Tuyến thực tế**

#### **3.8.1 Gen tuyến hàng ngày**

Hàng ngày sẽ có job quét gen tuyến theo điều kiện khai báo của Tuyến.

Công thức dựa vào:   
Mã tuyến còn hoạt động (với trạng thái tuyến = ON)

Ngày bắt đầu/Ngày kết thúc của Điểm bán (chỉ lấy những Điểm bán còn acitve ở masterdata).

Thứ viếng thăm Điểm bán trong tuần

Sắp xếp theo định nghĩa tần suất:

F1-1: thứ viếng thăm 1 lần vào tuần 1 của tháng

F1-2: thứ viếng thăm 1 lần vào tuần 2 của tháng

F1-3: thứ viếng thăm 1 lần vào tuần 3 của tháng

F1-4: thứ viếng thăm 1 lần vào tuần 4 của tháng

F2-1: thứ viếng thăm 2 lần vào tuần lẻ của tháng

F2-2: thứ viếng thăm 2 lần vào tuần chẵn của tháng

F4: thứ viếng thăm 1 lần 1 tuần

F8: thứ viếng thăm 2 lần 1 tuần

RedV1.5.0 F12 : thứ viếng thăm 3 lần/1 tuần  (ràng buộc chọn 3 ngày trong tuần)

F16: thứ viếng thăm 4 lần 1 tuần

F24: thứ viếng thăm 6 lần 1 tuần

trueGen Routesfalseautotoptrue6411

Ví dụ: Tuyến ROUTE1234567890 có Điểm bán CH000001 với tần suất F1-4; ngày kết thúc 31/10/2024 và thứ bắt đầu là thứ 2 thì:

Định nghĩa tuyến:

Định nghĩa tần suất viếng thăm theo tuần:

Tuyến ngày 28/10/2024 gen ra được Điểm bán CH000001 vì có khai báo nằm trong tuần 44.

Tuyến ngày 25/11/2024 không gen ra được Điểm bán CH000001 vì có ngày kết thúc 31/10/2024.

#### **3.8.2 Tuyến thực tế**

Màn hình chứa tuyến thực tế đã gen bao gồm thông tin ngày đi tuyến và danh sách điểm bán trong tuyến (giống với dms V1)

<https://dms-portal-uat.finviet.com.vn:6868/supervision/realroute>

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| **Chức năng tìm kiếm** | | | |
| 1 | Mã tuyến | Dropdownlist | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu Tuyến còn hoạt động * Format Mã tuyến - Tên tuyến: ROUTE1234567890 - Tuyến bán hàng A * Người dùng tìm kiếm và chọn 1 theo dropdownlist. |
| 3 | Chọn ngày | Date | * Mặc định hiển thị ngày hiện tại * Người dùng nhập hoặc chọn ngày cập nhật của tuyến để tìm kiếm * Ràng buộc xem dữ liệu Đến ngày - Từ ngày <=500 ngày |
| 4 | Nhân viên | Dropdownlist | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu nhân viên còn hoạt động * Format Mã nhân viên - Tên nhân viên: MNV00001- Nguyễn Văn A * Người dùng tìm kiếm và chọn 1 theo dropdownlist. |
| 5 | Nhãn hàng | Dropdownlist | * Mặc định không có dữ liệu. * Dữ liệu lấy theo level 2 còn hoạt động của khai báo Cây phân cấp (<https://eco-dms-dev.finviet.com.vn/base-data/products/hiererchical-tree> * Người dùng tìm kiếm và chọn 1 theo dropdownlist. |
| 6 | Điểm bán | Dropdownlist | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu Điểm bán còn hoạt động * Format Mã nhân viên - Tên nhân viên: CH00001- Tạp hóa chị MInh * Người dùng tìm kiếm và chọn 1 theo dropdownlist. |
| 7 | Làm mới | Button | * Nhấn làm mới: tất cả các thông tin các trường tìm kiếm quay về dữ liệu mặc định. |
| 8 | Tìm kiếm | Button | * Nhấn tìm kiếm: thực hiện tìm kiếm theo điều kiện đã filter. * Hiển thị tất cả dữ liệu thỏa điều kiện tìm kiếm ở giao diện danh sách tuyến thực tế. |
| **Danh sách tuyến thực tế** | | | |
| 8 | Nút đóng/mở | Button | * Nhấn vào + thì mở ra dữ liệu Danh sách ngày đi * Nhấn vào - thì đóng lại dữ liệu Danh sách ngày đi |
| 9 | Mã nhân viên | Text | * Hiển thị dữ liệu Mã nhân viên |
| 10 | Tên nhân viên | Hyperlink | * Nhấn vào hyperlink mở ra màn hình xem chi tiết nhân viên và lịch sử. |
| 11 | Mã tuyến | Text | * Hiển thị dữ liệu Mã tuyến |
| 12 | Tên tuyến | Text | * Hiển thị dữ liệu Tên tuyến |
| 13 | Nhãn hàng | Text | * Hiển thị dữ liệu Nhãn hàng |
| 14 | Số ĐB trong tuyến | Text | * Là tổng số lượng điểm bán trong tuyến được gen trong ngày. * Trường có update nếu có gen lại tuyến. |
| 15 | Số ĐB ngoại tuyến đã VT | Text | * Là tổng số lượng điểm bán ngoại tuyến đã được viếng thăm trong ngày |
| 16 | Số ĐB trong tuyến đã VT/Tuyến | Text | * Là tổng số lượng điểm bán trong tuyến đã được viếng thăm trong ngày/Tổng số lượng điểm bán trong tuyến được gen trong ngày. * Trường có update nếu có gen lại tuyến. |
| 17 | Ngày tạo | Text | * Hiển thị dữ liệu Ngày tạo * Format dd-mm-yyyy hh:mm:ss; 30-10-2024 15:00:01 * Là ngày gen tuyến đầu tiên |
| 18 | Ngày cập nhật | Text | * Mặc định lấy dữ liệu ngày tạo * Format dd-mm-yyyy hh:mm:ss; 30-10-2024 15:00:01 * Hiển thị dữ liệu ngày gen lại tuyến gần nhất |
| 19 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |
| **Danh sách ngày đi** | | | |
| 22 | Nút đóng/mở | Button | * Nhấn vào + thì mở ra dữ liệu Danh sách điểm bán * Nhấn vào - thì đóng lại dữ liệu Danh sách điểm bán |
| 23 | Ngày đi tuyến | Text | * Mặc định là ngày hiện tại * Hiển thị dữ liệu Ngày gen tuyến |
| 24 | Số ĐB trong tuyến đã VT/Tuyến | Text | * Là tổng số lượng điểm bán trong tuyến đã được viếng thăm trong ngày/Tổng số lượng điểm bán trong tuyến được gen trong ngày. * Trường có update nếu có gen lại tuyến. |
| 25 | Tùy chỉnh | Button | * Nhấn vào cho phép xóa từng dòng dữ liệu ngày đi. * Chỉ được phép xóa dữ liệu ngày hiện tại và chưa có điểm bán được viếng thăm * Thông báo: "Tuyến đã viếng thăm không được xóa" |
| 26 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |
| **Danh sách điểm bán** | | | |
| 27 | STT | Text | * Hiển thị STT |
| 28 | Mã điểm bán | Text | * Hiển thị Mã điểm bán |
| 29 | Tên điểm bán | Hyperlink | * Hiển thị Tên điểm bán * Nhấn vào hyperlink mở ra xem chi tiết thông tin điểm bán  <https://eco-dms-dev-tmp.finviet.com.vn/base-data/business/store> |
| 30 | Địa chỉ | Text | * Hiển thị Địa chỉ * RedV1.2.0 : Thông tin Tỉnh/Thành Phố, Quận/Huyện, Phường Xã, Địa Chỉ của điểm bán (Thông tin do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ) |
| 31 | Nhãn hàng | Text | * Hiển thị Nhãn hàng |
| 32 | Ngày đi tuyến | Text | * Hiển thị Ngày đi tuyến * Format dd-mm-yyyy |
| 33 | Loại tuyến | Text | * Trong tuyến là danh sách điểm bán được gen trong ngày * Ngoại tuyến là danh sách điểm bán còn lại loại trừ điểm bán trong tuyến đã gen |
| 34 | Giờ checkin | Text | * Hiển thị Giờ checkin * Lấy dữ liệu từ salesman app về * Format hh:mm:ss * Với điểm bán ngoại tuyến không có giờ checkin |
| 35 | Giờ checkout | Text | * Hiển thị Giờ checkout * Lấy dữ liệu từ salesman app về * Format hh:mm:ss * Với điểm bán ngoại tuyến không có giờ checkout |
| 36 | Tùy chỉnh | Button | * Nhấn vào cho phép xóa từng dòng dữ liệu ngày đi. * Chỉ được phép xóa dữ liệu ngày hiện tại và chưa viếng thăm * Thông báo: "Điểm bán đã viếng thăm không được xóa" |
| 37 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |

#### **3.8.3 Check tuyến thực tế trên SM App**

Danh sách tuyến hàng ngày trên app hiển thị đúng với tuyến thực tế đã gen.

Salesman thực hiện viếng thăm điểm bán theo tuyến này.