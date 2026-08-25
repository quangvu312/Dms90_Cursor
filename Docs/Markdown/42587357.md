|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-38 |
| Feature | Quản lý nhân viên |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0: Thêm thông tin QRCode cho nhân viên  RedV1.2.0: Thay đổi rule chọn vùng của quản lý vùng  RedV1.3.0: Thêm thông tin đánh dấu gán tuyến và Tuyến bán hàng, NPP  RedV1.4.0 : Thêm thông tin NPP trên file export, Vùng, khu vực theo vùng. khu vực của quản lý  RedV1.5.0: Thêm chức năng Reset Checkout |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1. Mục đích:**

### **1.1 Định nghĩa cây Salesforce**

**trueSalesForce Treefalseautotoptrue16612**

### **1.2 Mục đích**

Tạo màn hình quản lý thông tin nhân viên sử dụng trên App Salesman và App Quản lý

Bao gồm các chức vụ:

* SD (Sales Director): giám đốc bán hàng toàn quốc (dùng App Quản lý)
* RSM (Region Sales Manager): quản lý vùng bán hàng (dùng App Quản lý)
* ASM (Area Sales Manager):  quản lý khu vực bán hàng (dùng App Quản lý)
* SS (Sales Supervior): quản lý trực tiếp salesman (dùng App Salesman)
* SM(Salesman): nhân viên bán hàng (dùng App Salesman)

Có thể xem, thêm mới, chỉnh sửa, import, export thông tin nhân viên.

Có ràng buộc những trường thông tin duy nhất không được khai báo trùng.

## **2.Chức năng:**

**2.1 Xem danh sách nhân viên:**

Xem danh sách Nhân viên thuộc cây Salesforce bao gồm trạng thái hoạt động và không hoạt động.

### **2.2 Thêm mới nhân viên:**

Tạo mới/chỉnh sửa Nhân viên trên DMS có gọi sang SSO để lưu trữ thông tin.

trueCreate Accountfalseautotoptrue62119  

### **2.3 Chỉnh sửa Nhân viên:**

Chỉnh sửa Nhân viên trên DMS, có gọi sang SSO để lưu trữ thông tin.

trueUpdate userfalseautotoptrue62110

## **3.Mô tả chi tiết:**

### **3.1 Màn hình Nhân viên bán hàng**

Link Menu: Dữ liệu nền/Kinh doanh/Nhân viên bán hàng

Có chọn Công ty theo bộ lọc có sẵn.

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| **Chức năng Tìm kiếm** | | | |
| 1 | Tìm kiếm theo | Textbox | * Mặc định không có dữ liệu. * Cho phép tìm kiếm like theo Mã nhân viên; Tên nhân viên; Mã tham chiếu; Số điện thoại |
| 2 | Ngày vào làm | Date | * Mặc định hiển thị ngày 1 đầu tháng hiện tại và ngày hiện tại. * Người dùng chọn ngày vào làm của nhân viên để tìm kiếm. |
| 3 | Chức vụ | Muilti select -Dropdownlist | * Mặc định không có dữ liệu. * Dữ liệu lấy theo bảng khai báo Chức vụ nhân viên * Chỉ cho chọn 1 hoặc nhiều điều kiện.   SD (Sales Director): giám đốc bán hàng toàn quốc  RSM (Region Sales Manager): quản lý vùng bán hàng  ASM (Area Sales Manager):  quản lý khu vực bán hàng  SS (Sales Supervior): quản lý trực tiếp salesman  SM (Salesman): nhân viên bán hàng |
| 4 | Trạng thái | Dropdownlist | * Mặc định không có dữ liệu. * Chỉ cho chọn 1 điều kiện.   Hoạt động: với nhân viên có trạng thái hoạt động  Không hoạt động: với nhân viên có trạng thái không hoạt động. |
|  | RedV1.3.0 Tình trạng gán tuyến | Selectbox Onechoice | * 2 option chọn: Tất cả/Đã gán tuyến/Chưa gán tuyến * Có thể chọn nhiều * Mặc định = Tất cả * Nếu bỏ chọn <=> Chọn tất cả |
|  |  |  |  |
| 5 | Làm mới | Button | * Nhấn làm mới: tất cả các thông tin các trường tìm kiếm quay về dữ liệu mặc định. |
| 6 | Tìm kiếm | Button | * Nhấn tìm kiếm: thực hiện tìm kiếm theo điều kiện đã filter. * Hiển thị tất cả dữ liệu thỏa điều kiện tìm kiếm ở giao diện danh sách nhân viên. |
| **Chức năng hiển thị Danh sách nhân viên** | | | |
| 1 | Import | Button | * Nhấn Import mở ra màn hình import danh sách nhân viên (hình 6) * Xem mô tả chức năng import danh sách nhân viên. |
| 2 | Export | Button | * Nhấn Export xuất danh sách nhân viên theo file excel (hình 7) * Xem mô tả chức năng export danh sách nhân viên |
| 3 | Thêm | Button | * Nhấn Thêm mở ra màn hình Thêm mới nhân viên. * Xem mô tả chức năng Thêm mới nhân viên. |
| 4 | Mã nhân viên | Text | * Hiển thị dữ liệu Mã nhân viên |
| 6 | Họ và tên | Hyperlink | Khi nhấn vào trường này mở xem:   * Với tab thông tin nhân viên: hiển thị tất cả thông tin nhân viên (hình 2) * Với tab Lịch sử thay đổi: Cho phép chọn xem/xuất lịch sử thay đổi (tìm kiếm trong 30 ngày) .hình 3 |
| RedV1.1.0 | QR Code | Image + Text | Thông tin QRCode của nhân viên  Click vào QR sẽ hiển thị popup đầy đủ thông tin như sau:     * Thông tin bao gồm:   + Hình ảnh QR Code được generate từ QR Code text được khai báo ở trường QR Code   + Mã text QR Code * Bấm x để đóng popup xem QRCode |
| 7 | Giới tính | Text | * Hiển thị dữ liệu Giới tính |
| 8 | Ngày sinh | Text | * Hiển thị dữ liệu Ngày sinh * Format dd/mm/yyyy |
| 9 | Số điện thoại | Text | * Hiển thị dữ liệu Số điện thoại |
| 10 | Chức vụ | Text | * Hiển thị dữ liệu Chức vụ |
|  | RedV1.3.0 Tình trạng gán tuyến | Tag | Hiển thị tình trạng gán tuyến của nhân viên:   * Đã gán tuyến: Tồn tại ít nhất 1 gán tuyến đang hoạt động ở màn hình Định tuyến   + Gán tuyến đang hoạt động   + Gán tuyến có ngày kết thúc >= Ngày hiện tại * Chưa gán tuyến: Không có gán tuyến nào đang hoạt động ở màn hình Định tuyến   + Không tồn tại gán tuyến   + Gán tuyến có ngày kết thúc < Ngày hiện tại |
|  | RedV1.3.0 Tuyến bán hàng | Tag | * Nếu tình trạng gán tuyến = Đã gán tuyến, hiển thị danh sách các Tuyến bán hàng gồm Mã tuyến - Tên Tuyến * Có thể copy Mã tuyến * Mỗi Mã tuyến nằm trên 1 thẻ tag * Hiển thị mỗi thẻ tag tối đa 100 ký tự, còn lại hiển thị ... |
|  | RedV1.3.0 Nhà phân phối | Tag | * Nếu tình trạng gán tuyến = Đã gán tuyến, hiển thị danh sách các NPP trên tuyến bán hàng của nhân viên gồm: Mã NPP - Tên NPP * Có thể copy Mã NPP * Mỗi Mã NPP nằm trên 1 thẻ tag * Hiển thị mỗi thẻ tag tối đa 100 ký tự, còn lại hiển thị ... |
| 11 | Kênh bán hàng | Text | * Hiển thị dữ liệu Kênh bán hàng |
| 12 | Quản lý trực tiếp | Text | * Hiển thị dữ liệu Quản lý trực tiếp |
| 13 | Ngày vào làm | Text | * Hiển thị dữ liệu Ngày vào làm * Format dd/mm/yyyy |
| 14 | Trạng thái | Switch button | * Trạng thái:   bên phải ON = Hoạt động  bên trái OFF = Không hoạt động   * Mặc định là trạng thái ON   Sửa OFF sẽ có hiện thông báo.:     * Nhấn Đồng ý thì xét:   Nhân viên chưa gán tuyến thì thực hiện OFF nhân viên.  Nhân viên đang gán tuyến hiện thông báo lỗi "Nhân viên đã được gán tuyến. Vui lòng gỡ gán tuyến trước khi tắt hoạt động của nhân viên".   * Nhấn Hủy tắt thông báo.   Sửa ON sẽ có hiện thông báo.:     * Nhấn Đồng ý thì xét thực hiện ON nhân viên  * Nhấn Hủy tắt thông báo. |
| 15 | Ngày tạo | Text | * Hiển thị dữ liệu Ngày tạo * Format dd/mm/yyyy hh:mm:ss; 30/10/2024 15:00:01 * Là ngày tạo nhân viên đầu tiên |
| 16 | Người tạo | Text | * Hiển thị dữ liệu Người tạo * Là người tạo nhân viên đầu tiên |
| 17 | Ngày cập nhật | Text | * Mặc định lấy dữ liệu ngày tạo * Format dd/mm/yyyy hh:mm:ss; 30/10/2024 15:00:01 * Hiển thị dữ liệu Ngày cập nhật nhân viên gần nhất. |
| 18 | Người cập nhật | Text | * Mặc định lấy dữ liệu người tạo * Hiển thị dữ liệu Người cập nhật nhân viên gần nhất. |
| 19 |  | Button | * Nhấn Sửa mở ra màn hình chỉnh sửa danh sách nhân viên (hình 4) * Xem mô tả chức năng chỉnh sửa nhân viên. |
| 20 |  | Button | * Nhấn Đổi mật khẩu mở ra màn hình thay đổi mật khẩu (hình 8) * Xem mô tả chức năng Đổi mật khẩu. |
| 21 | Xóa chấm công cuối ngày  RedV1.5.0 | Button | **Mục đích** Cho phép người dùng có quyền **Xóa dữ liệu** tại màn hình này **cập nhật lại dữ liệu chấm công cuối ngày** trong trường hợp nhân viên thực hiện thao tác checkout nhầm. **Mô tả chi tiết**  * Chức năng này chỉ hiển thị khi nhân viên đã thực hiện thao tác chấm công cuối ngày (tất cả nhân viên). Hiển thị kèm tooltip: Reset Checkout * Chức năng này cho phép **xóa tất cả dữ liệu checkout** của nhân viên trong ngày làm việc hiện tại, bao gồm: Thời gian check out, vị trí check out và hình ảnh checkout. * Khi nhấn vào hiển thị popup confirm: Bạn có muốn xóa dữ liệu checkout của nhân viên trong ngày hiện tại không?   + Đồng ý: Xóa dữ liệu checkout   + Trở lại: Đóng popup, quay về màn hình hiện tại, không xóa dữ liệu gì. * Sau khi xóa, hệ thống: Cập nhật lại trạng thái chưa checkout xuống app nhân viên (App SM và App Manager) để nhân viên có thể tiếp tục làm việc |
| 22 | Phân trang |  | * Phân trang 10 dòng dữ liệu/trang. * Cho phép xem trang trước và trang sau; hoặc chọn xem đúng số trang. |

### **3.2 Xem thông tin chi tiết và lịch sử chỉnh sửa**

Màn hình xem nhanh thông tin nhân viên bằng cách nhấn vào hyperlink Tên nhân viên

hình 2

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| **Thông tin chung** | | | |
| 1 | Hình đại diện | Image | * Hiển thị Hình đại diện nhân viên * Chỉ xem |
| 2 | Mã nhân viên | Text | * Hiển thị Mã nhân viên nhân viên * Chỉ xem |
| 3 | Họ và tên | Text | * Hiển thị Họ và tên nhân viên * Chỉ xem |
| 4 | Mã tham chiếu | Text | * Hiển thị Mã tham chiếu nhân viên * Chỉ xem |
| RedV1.1.0 | QR Code | Text | * Thông tin QR Code của nhân viên  * Chỉ xem |
| 5 | Số điện thoại | Text | * Hiển thị SĐT nhân viên * Chỉ xem |
| 6 | Ngày sinh | Text | * Hiển thị Ngày sinh nhân viên * Chỉ xem |
| 7 | Giới tính | Text | * Hiển thị Giới tính nhân viên * Chỉ xem |
| 8 | CMND/CCCD | Text | * Hiển thị CMND/CCCD nhân viên * Chỉ xem |
| 9 | Địa chỉ email | Text | * Hiển thị Địa chỉ email nhân viên * Chỉ xem |
| 10 | Tỉnh/Thành phố | Text | * Hiển thị Tỉnh/Thành phố nhân viên * Chỉ xem |
| 11 | Quận/Huyện | Text | * Hiển thị Quận/Huyện nhân viên * Chỉ xem |
| 12 | Phường/Xã | Text | * Hiển thị Phường/Xã nhân viên * Chỉ xem |
| 13 | Địa chỉ thường trú | Text | * Hiển thị Địa chỉ thường trú nhân viên * Chỉ xem |
| 14 | Ngày vào làm | Text | * Hiển thị Ngày vào làm nhân viên * Chỉ xem |
| **Chức vụ** | | | |
| 15 | Kênh bán hàng | Text | * Hiển thị Kênh bán hàng nhân viên * Chỉ xem |
| 16 | Chức vụ | Text | * Hiển thị Chức vụ nhân viên * Chỉ xem |
| 17 | Nhóm quyền | Text | * Hiển thị Nhóm quyền nhân viên * Chỉ xem |
| RedV1.2.0  Đổi vị trí trường thông tin này, đưa lên trước trường "Vùng" | Quản lý trực tiếp | Text | * Hiển thị Quản lý trực tiếp nhân viên * Chỉ xem |
| 18 | Vùng | Text | * Hiển thị Vùng/Khu vực nhân viên * Chỉ xem |
| 21 | Trạng thái | Text | * Hiển thị Trạng thái hoạt động của nhân viên * Chỉ xem |
| 22 | Đóng | Button | * Nhấn Đóng tắt màn hình. |

Màn hình xem lịch sử thay đổi thông tin bằng cách nhấn vào hyperlink Tên nhân viên

hình 3

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| 1 | Chọn ngày | Date | * Người dùng nhập hoặc chọn ngày cập nhật của nhân viên để tìm kiếm * Ràng buộc chọn xem trong vòng 30 ngày * Mặc định hiển thị ngày 1 đầu tháng và ngày hiện tại |
| 2 | Tìm kiếm | Button | * Nhấn Tìm kiếm trả ra những thông tin chỉnh sửa của 1 nhân viên. |
| 3 | Export | Button | * Nhấn Export xuất tất cả những thông tin chỉnh sửa của 1 nhân viên. * File export:   <https://docs.google.com/spreadsheets/d/13BNP1CzCYhhjulC7_MsJffqeMvejYYpETRn5cQ4ZDFs/edit?gid=0#gid=0>   * Trường hợp không có dữ liệu trong tìm kiếm sẽ báo lỗi: "Không có dữ liệu" * Mã ghi nhận lịch sử trong 1 lần cập nhật * Format tên file export: HIS\_EMPLOYEE\_DDMMYYYYhhmmss |
| 4 | Ngày cập nhật | Text | * Hiển thị dữ liệu Ngày cập nhật |
| 5 | Người cập nhật | Text | * Hiển thị dữ liệu Người cập nhật |
| 6 | Màn hình | Text | * Hiển thị dữ liệu Màn hình chỉnh sửa |
| 7 | Trường thông tin | Text | * Hiển thị dữ liệu Trường thông tin |
| 8 | Thao tác | Text | * Hiển thị dữ liệu thao tác Cập nhật dữ liệu |
| 9 | Nội dung cũ | Text | * Hiển thị dữ liệu Nội dung cũ * Trường hợp thêm mới, cột này sẽ không có thông tin |
| 10 | Nội dung mới | Text | * Hiển thị dữ liệu Nội dung mới * Nếu hình ảnh sẽ gắn hyperlink; nhấn vào sẽ dẫn đến đường dẫn chứa hình ảnh update. * Trường hợp xóa, cột này sẽ không có thông tin |
| 11 | Đóng | Button | * Nhấn Đóng tắt màn hình. |

### **3.3 Màn hình Thêm mới Nhân viên**

Có phân quyền khi thêm mới nhân viên.

Khi có quyền thêm mới sẽ được phép tạo nhân viên.

hình 4

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Bắt buộc** | Chỉnh sửa | **Mô tả** | Dữ liệu |
| --- | --- | --- | --- | --- | --- | --- |
| Thông tin chung | | | | | | |
| **1** | Hình đại diện | Image |  | Được phép | * Mặc định không có dữ liệu. * Chỉ upload hình ảnh JPG/PNG/JPEG/SVG * báo lỗi khi upload sai format "Chỉ được phép upload file JPG/PNG/JPEG/SVG" * Có thể upload lại hình ảnh bằng cách nhấn vào nút upload. |  |
| 2 | Mã tham chiếu | Textbox |  | Được phép | * Người dùng nhập, là mã hệ thống ERP/SAP nếu có. * Mặc định không có dữ liệu. |  |
| 3 | \*Mã nhân viên | Textbox | Có |  | * Mặc định không có dữ liệu. * Người nhập mã NV; tối đa 10 ký tự. * Bỏ trống báo lỗi "Tên trường là bắt buộc" * báo lỗi khi sai format "Mã nhân viên không được nhập ký tự đặc biệt" * Là duy nhất trong cùng 1 cty | Ví dụ MNV000001 |
| 4 | \*Mật khẩu | Textbox | Có |  | * Mặc định không có dữ liệu * Người dùng nhập mật khẩu tối thiểu 8 và tối đa 30 ký tự. * Theo format với: 'ít nhất 1 chữ hoa'; 'ít nhất 1 chữ thường'; 'ít nhất 1 kí tự đặc biệt';'ít nhất 1 kí tự số'. * Bỏ trống báo lỗi "Tên trường là bắt buộc" * báo lỗi khi sai format "Mật khẩu phải chứa ít nhất 1 chữ hoa; 1 chữ thường; 1 kí tự đặc biệt; 1 kí tự số." |  |
| 5 | \*Họ và tên | Textbox | Có | Được phép | * Mặc định không có dữ liệu. * Bỏ trống báo lỗi "Tên trường là bắt buộc" * Ràng buộc nhập tối đa 100 ký tự. |  |
| RedV1.1.0 | QRCode | Textbox |  | Được phép | * Mặc định không có dữ liệu. * Tối đa 300 ký tự * Cho nhập text tự do kể cả ký tự đặc biệt * Không cho phép nhập dấu tiếng việt và khoảng trắng * Báo lỗi khi sai format "QRCode không được nhập tiếng việt và khoảng trắng." |  |
| 6 | Giới tính | Dropdownlist |  | Được phép | * Mặc định Nam. * Người dùng chọn 1 theo dropdownlist với giá trị: Nam, Nữ, Khác |  |
| 7 | Ngày sinh | Date |  | Được phép | * Mặc định không có dữ liệu. * Người dùng nhập hoặc chọn lịch ngày. * Format dd/mm/yyyy |  |
| 8 | SĐT | Number |  | Được phép | * Mặc định không có dữ liệu. * Ràng buộc chỉ được nhập số * Ràng buộc nhập10 ký tự * Format 0909090909 (nhập 0 đầu tiên). |  |
| 9 | CMND/CCCD | Number |  | Được phép | * Mặc định không có dữ liệu. * Ràng buộc chỉ được nhập số * Ràng buộc nhập tối thiểu 9 ký tự và tối đa 15 ký tự |  |
| 10 | Địa chỉ email | Textbox |  | Được phép | * Mặc định không có dữ liệu. * Ràng buộc nhập theo format [abc@mail.com](mailto:abc@gmail.com) |  |
| 11 | \*Ngày vào làm | Date | Có | Được phép | * Mặc định không có dữ liệu. * Bỏ trống báo lỗi "Tên trường là bắt buộc" * Format dd/mm/yyyy |  |
| 12 | Tỉnh/Thành phố | Dropdownlist |  | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu nền * Người dùng tìm kiếm và chọn 1 theo dropdownlist. |  |
| 13 | Quận/Huyện | Dropdownlist |  | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu nền * Người dùng tìm kiếm và chọn 1 theo dropdownlist. * Dữ liệu Quận/Huyện lọc theo Tỉnh/Thành phố |  |
| 14 | Phường/Xã | Dropdownlist |  | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu nền * Người dùng tìm kiếm và chọn 1 theo dropdownlist. * Dữ liệu Phường/Xã lọc theo Quận/Huyện |  |
| 15 | Địa chỉ thường trú | Textbox |  | Được phép | * Mặc định không có dữ liệu. * Ràng buộc nhập tối đa 500 ký tự |  |
| **Thông tin chức vụ** | | | | | | |
| 16 | Kênh bán hàng | Dropdownlist |  | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy theo dữ liệu Kênh bán hàng còn hoạt động * Người dùng tìm kiếm và chọn 1 theo dropdownlist. * Khi kênh bán hàng inactive thì: Xem dữ liệu vẫn hiển thị kênh bán hàng đã inactive. Sửa dữ liệu thì không hiển thị kênh bán hàng đã inactive. |  |
| 17 | \*Chức vụ | Dropdownlist | Có | Được phép | * Mặc định không có dữ liệu. * Lấy dữ liệu config: SD; RSM; ASM; SS; SM. * Người dùng tìm kiếm và chọn 1 theo dropdownlist. * Bỏ trống báo lỗi "Tên trường là bắt buộc" |  |
| 18 | \*Nhóm quyền | Multi-Select Dropdownlist | Có | Được phép | * Mặc định không có dữ liệu. * Lấy dữ liệu từ SSO với role còn hoạt động (mong muốn SD; RSM; ASM; SS; SM) * Người dùng tìm kiếm và chọn 1 theo dropdownlist. * Bỏ trống báo lỗi "Tên trường là bắt buộc" |  |
| RedV1.2.0  Đổi vị trí trường thông tin này, đưa lên trước trường "Vùng" | \*Quản lý trực tiếp | Dropdownlist | Có | Được phép | * Mặc định không có dữ liệu. * Người dùng tìm kiếm; chọn 1 theo dropdownlist * Bỏ trống báo lỗi "Tên trường là bắt buộc" * Lọc Quản lý theo chức vụ:   + Nếu Chức vụ chọn SD - không hiện trường này.   + Nếu Chức vụ chọn RSM - hiện tất cả nhân viên có Chức vụ SD   + Nếu Chức vụ chọn ASM - hiện tất cả nhân viên có Chức vụ RSM   + Nếu Chức vụ chọn SS - hiện tất cả nhân viên có Chức vụ ASM   + Nếu Chức vụ chọn SM - hiện tất cả nhân viên có Chức vụ SS |  |
| 19 | \*Vùng | Selectbox | Có | Được phép | * RedV1.2.0: Trường này chỉ có dữ liệu khi chọn thông Quản lý trực tiếp   + Trường hợp chưa chọn quản lý trực tiếp khi chọn vào trường này sẽ hiển thị thông báo: Vui lòng chọn Quản lý trực tiếp. * Cho phép nhập tìm kiếm Vùng và Khu vực * Hoặc chọn theo cây Vùng/Khu vực có sẵn; Chọn Vùng sổ ra Khu vực * Cho phép chọn 1 hoặc nhiều dữ liệu * Chỉ RSM/ASM mới được chọn trường này; còn tất cả chức vụ còn lại hidden trường này. * Nếu người dùng chọn chức vụ là RSM thì cho chọn dữ liệu Vùng; không cho chọn dữ liệu Khu vực * Ngược lại chọn chức vụ là ASM    + Thì không cho chọn dữ liệu Vùng; cho chọn dữ liệu Khu vực   + RedV1.2.0: Chỉ hiển thị các khu vực thuộc vùng quản lý của Quản lý trực tiếp được chọn ở trường "Quản lý trực tiếp" * Bỏ trống báo lỗi "Tên trường là bắt buộc" |  |
| 22 | Trạng thái | Switch button |  | Được phép | * Trạng thái:   bên phải ON = Hoạt động  bên trái OFF = Không hoạt động   * Mặc định là trạng thái ON |  |
| 23 | Lưu | Button |  |  | Người dùng nhấn Lưu. Có hiện thông báo.:     * Chọn Đồng ý. Nếu sửa OFF trạng thái nhân viên xét:   Với Nhân viên đã gán tuyến sẽ có thông báo lỗi: "Nhân viên đã được gán tuyến. Vui lòng gỡ gán tuyến trước khi tắt hoạt động của nhân viên" Và không lưu thông tin nhân viên.  Với Nhân viên chưa gán tuyến thì không xét ràng buộc tuyến.  Hệ thống xét tất cả ràng buộc; thỏa điều kiện thì lưu thông tin nhân viên. Ngược lại báo lỗi theo từng trường lỗi và không lưu thông tin.   * Chọn Đồng ý. Nếu sửa ON trạng thái nhân viên xét:   Không cần xét tuyến của nhân viên.  Hệ thống xét tất cả ràng buộc; thỏa điều kiện thì lưu thông tin nhân viên. Ngược lại báo lỗi theo từng trường lỗi.   * Chọn Hủy: tắt thông báo và không lưu thông tin. |  |
| 25 | Đóng | Button |  |  | * Người dùng nhấn Đóng tắt màn hình khai báo và không lưu dữ liệu. |  |

### **3.4 Màn hình Chỉnh sửa Nhân viên**

Chức năng có phân quyền theo người dùng.

Cho chỉnh sửa thông tin với những trường "Được phép" như mô tả phần Thêm mới nhân viên.

Luồng chỉnh sửa cũng ràng buộc dữ liệu như luồng Thêm mới nhân viên.

RedV1.2.0: Trường hợp có sự thay đổi Vùng của nhân viên có chức vụ Quản lý Vùng

Khi Lưu hệ thống sẽ hiển thị màn hình yêu cầu chọn nhân viên quản lý mới cho các nhân viên cấp dưới tại vùng cũ

* Selectbox chỉ được chọn 1.
* Danh sách:
  + Chỉ hiển thị các nhân viên có trạng thái Hoạt động
  + Nhân viên mới phải có chức vụ = Quản lý Vùng
  + Nhân viên mới phải có vùng quản lý bao gồm tất cả các vùng của tất cả các khu vực của nhân viên cấp dưới của nhân viên quản lý hiện tại
    - Ví dụ:
      * Nhân viên quản lý hiện tại có các nhân viên cấp dưới như sau:
        + ASM1: HCM1
        + ASM2: HCM2
        + ASM3: Bình Dương 1
        + ASM4: Đồng Nai 1
      * Thì nhân viên mới hiển thị trong danh sách phải quản lý tất cả các vùng HCM, Bình Dương, Đồng Nai
* Đóng: Hiển thị cảnh báo: "Chưa chọn nhân viên quản lý vùng nên thao tác đổi vùng sẽ bị hủy bỏ?"
  + Đồng ý: Tắt popup cảnh báo và hủy bỏ thao tác đổi vùng.
  + Đóng: Tắt popup cảnh báo và ở lại màn hình Chọn quản lý Vùng.

### **3.5 Chức năng Import khai báo nhân viên.**

Chức năng có phân quyền theo người dùng.

Khi nhấn nút Import trên màn hình Danh sách nhân viên, hiển thị màn hình import và có xuất file mẫu.

hình 6

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Bắt buộc** | Chỉnh sửa | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1 | Lấy file mẫu | Button |  |  | * Người dùng nhấn nút này tự động xuất file mẫu excel theo format. * File import mẫu:     RedV1.1.0: Bổ sung import QR Code   * Kiểm tra trường hợp 1:  QR Code nhập không đúng định dạng: Hiển thị thông báo lỗi: QR Code dòng n nhập không đúng định dạng, vui lòng kiểm tra lại! * Kiểm tra trường hợp 2:  QR Code nhập > 300: Hiển thị thông báo lỗi: QR Code dòng n nhập quá 300 ký tự, vui lòng kiểm tra lại! |
| 2 | Tiến hành xử lý | Button |  |  | * Mặc định disable. Nút chỉ enable khi đã import file. * Tại màn hình import người dùng chọn vào kéo thả file import vào ô "Chọn hoặc kéo file đến vị trí này" * Người dùng nhấn nút "Tiến hành xử lý" để import file dữ liệu vào hệ thống. * Ràng buộc tối đa 10.000 dòng. * Có notify "Dữ liệu import thành công vào hệ thống". * Có thông báo khi import không đúng format "File import không đúng định dạng. Vui lòng kiểm tra lại"   Check Action:   * Nếu chọn Action = Thêm: hệ thống sẽ kiểm tra Mã nhân viên nếu chưa tồn tại sẽ được thêm mới. Ngược lại có thông báo: "Mã nhân viên đã tồn tại. Vui lòng kiểm tra lại". Hệ thống xét tất cả ràng buộc; thỏa điều kiện thì lưu thông tin nhân viên. Ngược lại có thông báo thông tin lỗi từng dòng và không lưu thông tin như hình.  * Nếu chọn Action = Cập nhật: hệ thống sẽ kiểm tra Mã nhân viên nếu đã tồn tại sẽ được cập nhật. Ngược lại có thông báo: "Mã nhân viên không tồn tại. Vui lòng kiểm tra lại".Hệ thống xét tất cả ràng buộc; thỏa điều kiện thì lưu thông tin nhân viên. Ngược lại có thông báo thông tin lỗi từng dòng và không lưu thông tin như hình.   + RedV1.2.0:     - Không cho phép đổi vùng của nhân viên quản lý vùng trên import     - Trường hợp Action = Cập nhật, Chức vụ = ASM, khi có sự thay đổi vùng thì hiển thị cảnh báo: Vui lòng thực hiện thao tác đổi vùng cho Quản lý vùng trên Web.   Thông báo lỗi:   * Có thông báo khi import dữ liệu lỗi. "Tại dòng n khai báo chưa đúng, vui lòng kiểm tra lại!" Với n là dòng dữ liệu bị lỗi; nếu có nhiều dòng lỗi hiển thị nhiều dòng lỗi. Ví dụ: |

### **3.6 Chức năng Export danh sách nhân viên.**

Khi nhấn nút Export trên màn hình Tuyến bán hàng, hiển thị thông báo như hình 7.

hình 7

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Mô tả** |
| --- | --- | --- | --- |
| 1 | Đồng ý | Button | * Nhấn Export xuất tất cả những thông tin nhân viên * File Export:  * Trường hợp không có dữ liệu trong khoảng thời gian tìm kiếm sẽ báo lỗi: "Không có dữ liệu" * RedV1.1.0: Bổ sung Export QR Code * RedV1.4.0 :   + Bổ sung cột Nhà Phân Phối: Hiển thị thông tin NPP theo tuyến bán hàng của nhân viên. Trường hợp có nhiều NPP thì cách nhau bởi dấu phẩy. Có 1 NPP thì không hiển thị dấu phẩy   + Vùng, Khu vực của nhân viên có role SM và SS, lấy theo vùng, khu vực của cấp quản lý. Trường hợp có nhiều Vùng/khu vực thì cách nhau bởi dấu phẩy. Có 1 Vùng/khu vực thì không hiển thị dấu phẩy |
| 2 | Thoát | Button | * Người dùng nhấn nút này; tắt màn hình và không thực hiện xuất file dữ liệu. |

### **3.7. Đổi mật khẩu**

Người dùng sử dụng chức năng này để thay đổi mật khẩu nhân viên đã cấp trước đó.

Chức năng có phân quyền theo người dùng.

hình 8

hình 9

|  | Trường thông tin | **Loại dữ liệu/Loại field** | **Bắt buộc** | Chỉnh sửa | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1 | Cấp lại mật khẩu |  |  |  | * Người dùng nhấn nút này ở màn hình Danh sách nhân viên. mở ra như hình 8 |
| 2 | Mã nhân viên | Textbox |  |  | * Hiển thị thông tin Mã nhân viên chọn thay đổi mật khẩu * Chỉ xem không cho phép sửa. |
| 3 | Tên nhân viên | Textbox |  |  | * Hiển thị thông tin Tên nhân viên chọn thay đổi mật khẩu * Chỉ xem không cho phép sửa. |
| 4 | \*Mật khẩu mới | Textbox | Có | Được phép | * Mặc định không có dữ liệu. * Là trường bắt buộc * Bắt buộc nhập mật khẩu 2 trường này giống nhau. * Người dùng nhập mật khẩu tối thiểu 8 ký tự. * Theo format với:   'ít nhất 1 chữ hoa', 'ít nhất 1 chữ thường', 'ít nhất 1 kí tự đặc biệt', 'ít nhất 1 kí tự số',   * Mặc định icon . Khi người dùng nhập mật khẩu sẽ mã hóa thành dấu **.  .  .  .  .  .** * Nhấn vào  sẽ chuyển thành icon  và hiển thị chuỗi mật khẩu đã nhập như hình 9. |
| 5 | \*Xác nhận mật khẩu mới | Textbox | Có | Được phép |
| 6 | Lưu | Button |  |  | * Mặc định disable * Nhập đầy đủ 2 thông tin Mật khẩu mới và Xác nhận mới enable. * Người dùng nhấn nút này; hiện thông báo:     Nhấn Đồng ý thực hiện kiểm tra ràng buộc nếu đúng:  -Thực hiện update mật khẩu và sync dữ liệu qua SSO.   -Ngược lại lấy thông báo từ SSO trả ra.  Nhấn Hủy tắt thông báo.   * Và thực hiện login bằng mật khẩu mới thành công. |
| 7 | Đóng | Button |  |  | * Người dùng nhấn nút này; tắt màn hình và không thực hiện đổi mật khẩu |