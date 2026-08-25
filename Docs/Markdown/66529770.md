|  |  |
| --- | --- |
| Issue Link |  |
| Story | BRD: <https://kb.finviet.com.vn/pages/viewpage.action?pageId=61163316> |
| Epic |  |
| Feature | [HO] Enhance CTTB |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

hiển thị

## 1. TẠO MỚI CTTB

### 1.1 Khai báo mới CTTB:

Thông tin hiện tại:

Link doc hiện tại: [[HO] Khởi tạo CTTB](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028714) 

* 3.1[Thông tin chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028714#id-[HO]Kh%E1%BB%9Fit%E1%BA%A1oCTTB-Th%C3%B4ngtinchung)

Thông tin thay đổi:

* Dòng tô màu xanh dương là thay đổi so với mô tả của doc hiện tại.
* Cập nhật ràng buộc ký tự mã ID CTTB hợp lệ là : các ký tự chữ cái (A-Z, a-z), chữ số (0-9), và ký tự đặc biệt dấu gạch dưới (\_)
* Chỉ thay đổi ràng buộc ký tự mã ID; các ràng buộc khai báo của khởi tạo giữ nguyên không thay đổi.

Mô tả thay đổi:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Mã chương trình | Text (50) | Có | Có | **Điều kiện nhập mã ID chương trình trưng bày:**   * Placeholder: Nhập vào mã chương trình * Mã ID chương trình có độ dài từ 1 đến 50 ký tự; chặn không được nhập > 50 ký tự. * Có thể nhập chữ hoa, chữ thường; tự động uppercase tất cả các ký tự đã nhập. * Ký tự hợp lệ: không chứa khoảng trắng và bao gồm các ký tự chữ cái (A-Z, a-z), chữ số (0-9) và ký tự đặc biệt dấu gạch dưới (\_)   Trường hợp nhập ký tự không hợp lệ, có warning dưới: "Mã CTTB không hợp lệ! Vui lòng nhập đúng định dạng, chỉ bao gồm chữ cái (A-Z/ a-z), chữ số (0-9), dấu gạch dưới (\_)"   * Thao tác nhấn button "Tiếp tục" kiểm tra ràng buộc:   Nếu trùng mã ID, có thông báo warning dưới field: "Trùng mã ID CTTB". |

### 1.2 Import đăng ký CTTB:

Thông tin hiện tại:

Link doc hiện tại: [[HO] Import đăng ký trưng bày](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028748#id-%5BHO%5D%C4%90%C4%83ngk%C3%BDtr%C6%B0ngb%C3%A0y-Ki%E1%BB%83mtraCasetr%E1%BA%A1ngth%C3%A1iimport-)

* 3.2.2.2[CTTB có Field "Tự dộng duyệt tham gia" = OFF](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028748#id-[HO]%C4%90%C4%83ngk%C3%BDtr%C6%B0ngb%C3%A0y-CTTBc%C3%B3Field%22T%E1%BB%B1d%E1%BB%99ngduy%E1%BB%87tthamgia%22=OFF)

Thông tin thay đổi:

* Dòng tô màu xanh dương là thay đổi so với mô tả của doc hiện tại.
* Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt (Trừ dấu "\_")
* Chỉ thay đổi ràng buộc ký tự mã CTTB các ràng buộc import không thay đổi.
* Sử dụng template import như hiện tại; không thay đổi.

Mô tả thay đổi:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Mô tả** |
| --- | --- | --- | --- |
| Mã CTTB (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt (Trừ dấu "\_") | * Nhập mã CTTB mà điểm bán đăng ký | * Mã CTTB:   + Hiển thị thông báo lỗi "Dòng n: Mã CTTB @Mã không tồn tại. Vui lòng kiểm tra lại!"   + Hiển thị thông báo lỗi "Dòng n: Mã CTTB bị để trống. Vui lòng kiểm tra lại!"   + Hiển thị thông báo lỗi "Dòng n: Mã CTTB @Mã nhập không đúng định dạng. Vui lòng kiểm tra lại!" * CTTB phải đang ở trạng thái:   + Sắp diễn ra hoặc Đang diễn ra hoặc hết hạn duyệt (có ngày hiện tại LỚN HƠN thời gian đăng ký)     - Hiển thị thông báo lỗi "Dòng n: Mã CTTB @Mã không nằm trong thời gian có thể đăng ký. Vui lòng kiểm tra lại!"   + CTTB có trạng thái = ngưng hoạt động;  = Kết thúc     - Hiển thị thông báo lỗi "Dòng n: Mã CTTB @Mã không hoạt động. Vui lòng kiểm tra lại!"   + CTTB có trạng thái = Khởi tạo     - Dòng n: CTTB @Mã CTTB đang có trạng thái khởi tạo. Vui lòng kiểm tra lại! |

## 2. ĐIỀU CHỈNH THỜI GIAN ĐĂNG KÝ CTTB

Thông tin hiện tại:

Link doc hiện tại: [[HO] Khởi tạo CTTB](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028714) 

* 4. [Điều chỉnh Chương trình trưng bày](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028714#id-[HO]Kh%E1%BB%9Fit%E1%BA%A1oCTTB-%C4%90i%E1%BB%81uch%E1%BB%89nhCh%C6%B0%C6%A1ngtr%C3%ACnhtr%C6%B0ngb%C3%A0y)

  

Thao tác hiện tại:  
Chọn CTTB có trạng thái Đang diễn ra và điều chỉnh Thời gian đăng ký:

Thao tác sửa ngày kết thúc của Thời gian đăng ký nhỏ hơn thời gian trước đó:

Thông tin thay đổi:

* Dòng tô màu xanh dương là thay đổi so với mô tả của doc hiện tại.
* Áp dụng điều chỉnh thời gian đăng ký của CTTB có trạng thái Sắp diễn ra và Đang diễn ra.
* Cập nhật cho phép điều chỉnh ngày kết thúc của Thời gian đăng ký nhỏ hơn/lớn hơn thời gian trước đó và nằm trong khoảng Thời gian chương trình diễn ra.
* Thay đổi ngày kết thúc đăng ký chương trình ở portal có update lại thông tin áp dụng trên App.

Mô tả thay đổi:

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Thời gian đăng ký | * Giữ nguyên ràng buộc của mô tả trước đó. * Điều chỉnh: Hiện tại chỉ cho phép điều chỉnh ngày kết thúc đăng ký mới > ngày kết thúc đăng ký trước đó.   => thay đổi :  được phép điều chỉnh Ngày hiện tại <= Ngày kết thúc đăng ký mới <= Ngày kết thúc chương trình. |

## 3. TIẾN TRÌNH TRƯNG BÀY

### 3.1 Thêm cột số lần chụp hình ở màn hình

Thông tin hiện tại:

Link doc hiện tại: 

* 2.1[Màn hình Danh sách Tiến trình trưng bày:](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028751#id-[HO]Ti%E1%BA%BFntr%C3%ACnhtr%C6%B0ngb%C3%A0y-M%C3%A0nh%C3%ACnhDanhs%C3%A1chTi%E1%BA%BFntr%C3%ACnhtr%C6%B0ngb%C3%A0y:)

Thông tin thay đổi:

* Dòng tô màu xanh dương là thêm mới so với mô tả của doc hiện tại.
* Áp dụng màn hình danh sách tiến trình của CTTB (Tab Theo Kỳ và Theo giai đoạn)
* Thêm cột Số lần chụp hình của kỳ/Số lần chụp hình của giai đoạn
* Chỉ hiển thị thêm thông tin số lần chụp ảnh của kỳ; không thay đổi luồng hiện tại.

Mô tả thay đổi:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Mô tả** |
| --- | --- | --- | --- |
| Lưới danh sách tiến trình theo giai đoạn | | | |
| Số lần chụp hình của giai đoạn | Datacolumns | Không | Hiển thị:   * Thêm cột Số lần chụp hình của giai đoạn. * Chỉ xem không cho phép chỉnh sửa.   Dữ liệu:   * Đếm tất cả số lần đã chụp ảnh của 1 giai đoạn. * Không xét trạng thái của hình đã chụp. * Với giai đoạn chưa có lần chụp ảnh nào cả sẽ hiển thị bằng 0. |
| Lưới danh sách tiến trình theo Kỳ | | | |
| Số lần chụp hình của Kỳ | Datacolumns | Không | Hiển thị:   * Thêm cột Số lần chụp hình của kỳ. * Chỉ xem không cho phép chỉnh sửa.   Dữ liệu:   * Đếm tất cả số lần chụp ảnh của nhiều giai đoạn thuộc 1 kỳ. * Không xét trạng thái của hình đã chụp. * Với kỳ chưa có lần chụp ảnh nào cả sẽ hiển thị bằng 0. |

### 3.2 Thêm cột số lần chụp hình ở form export

Thông tin hiện tại:

Link doc hiện tại: 

* 3.2[Export danh sách giai đoạn trưng bày](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028751#id-[HO]Ti%E1%BA%BFntr%C3%ACnhtr%C6%B0ngb%C3%A0y-Exportdanhs%C3%A1chgiai%C4%91o%E1%BA%A1ntr%C6%B0ngb%C3%A0y)

Thông tin thay đổi:

* Dòng tô màu xanh dương là thêm mới so với mô tả của doc hiện tại.
* Áp dụng màn hình danh sách tiến trình của CTTB (Tab Theo Kỳ và Theo giai đoạn)
* Thêm cột Số lần chụp hình của kỳ/Số lần chụp hình của giai đoạn khi export file.
* Chỉ export thêm cột số lần chụp ảnh của kỳ; không thay đổi luồng hiện tại.

Mô tả thay đổi:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Mô tả** |
| --- | --- | --- | --- |
| Export danh sách tiến trình theo giai đoạn | | | |
| Số lần chụp hình của giai đoạn | Datacolumns | Không | * Xuất thêm cột dữ liệu số lần chụp theo giai đoạn. * Loại dữ liệu xuất là number. * Xuất đúng với dữ liệu hiển thị. * Template xuất excel: |
| Export danh sách tiến trình theo Kỳ | | | |
| Số lần chụp hình của Kỳ | Datacolumns | Không | * Xuất thêm cột dữ liệu số lần chụp theo kỳ. * Loại dữ liệu xuất là number. * Xuất đúng với dữ liệu hiển thị. * Template xuất excel: |

## 4. DANH SÁCH TRẢ THƯỞNG

### 4.1 Chức năng import

**1/ Chức năng import:**

* Verify lại chức năng như rule mô tả.
* Menu Quản lý trưng bày/Danh sách trả thưởng trưng bày:

**2/ Thao tác import:**

* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc Kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống: Hiển thị thông báo: "Bạn chắc chắn thao tác này không?"

* + Đồng ý: Chạy tiến trình xử lý, kiểm tra dữ liệu inport từ file
  + Hủy: Đóng cảnh báo và giữ nguyên trạng thái import

**3/ Ràng buộc chung:**

* Áp dụng cho những phiếu trả thưởng có Trạng thái trả thưởng = "Chờ trả thưởng"; "Hết hạn trả thưởng"; "Đã trả thưởng"
* Áp dụng [Import theo rule chung](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode)của hệ thống.
* Nhấn nút "Lấy file mẫu" để xuất template mẫu **:**

trueImport trả thưởngfalseautotoptrue15284

trueCheck basic Flowfalseautotoptrue6911

Kiểm tra dữ liệu:

* Để trống: Trống 1 line => bỏ qua
* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt .

Thông báo lỗi theo rule chung đã define cho các màn hình trước đây:

* hiển thị lỗi theo từng dòng
* có phân trang hiển thị
* hiển thị tất cả các lỗi

Mô tả chi tiết:

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã trả thưởng (\*) | Text(12) | * Nhập Mã trả thưởng trưng bày | * Một mã trả thưởng chỉ tồn tại trên hệ thống 1 dòng dữ liệu và 1 trạng thái Đã trả thưởng hoặc Từ chối trả thưởng.  * **Check dữ liệu:**  1. Dòng dữ liệu import trống toàn bộ: bỏ qua không check; không import. 2. Mã trả thưởng không để trống, ngược lại có thông báo: Dòng n: Mã trả thưởng bị bỏ trống. Vui lòng kiểm tra lại! 3. Mã trả thưởng không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt; ngược lại có thông báo:  Dòng n: Mã trả thưởng @Mã trả thưởng nhập không đúng định dạng. Vui lòng kiểm tra lại! 4. Mã trả thưởng phải tồn tại trên hệ thống, ngược lại có thông báo: Dòng n: Mã trả thưởng @Mã trả thưởng không tồn tại trong hệ thống. Vui lòng kiểm tra lại!  * Bỏ qua trường hợp này không cần kiểm tra:      * **Check trạng thái Mã trả thưởng import:**   Nếu chọn action "Đã trả thưởng" thì mã trả thưởng phải có trạng thái **Chờ trả thưởng; Đã trả thưởng; Hết hạn**; ngược lại có thông báo: Dòng n: Mã trả thưởng @Mã trả thưởng đã có kết quả Từ chối trả thưởng. Vui lòng kiểm tra lại!  Nếu chọn action "Từ chối thưởng" thì mã trả thưởng phải có trạng thái "**Chờ trả thưởng; Hết hạn**"; ngược lại có thông báo: Dòng n: Mã trả thưởng @Mã trả thưởng có trạng thái Đã trả thưởng hoặc Từ chối. Vui lòng kiểm tra lại!   * **Check trùng mã trả thưởng trong hệ thống:**   Với mã trả thưởng đã tồn tại trạng thái "Đã trả thưởng" thì khi import trùng mã trả thưởng với action"Từ chối trả thưởng"; có thông báo: Dòng n: Mã trả thưởng @Mã trả thưởng có action khác "Đã trả thưởng". Vui lòng kiểm tra lại! . Ngược lại update trạng thái mới nhất của Mã trả thưởng.  Với mã trả thưởng đã tồn tại trạng thái "Từ chối" thì khi import trùng mã trả thưởng với bất kỳ action nào; đều thông báo: Dòng n: Mã trả thưởng @Mã trả thưởng đã có kết quả Từ chối trả thưởng. Vui lòng kiểm tra lại!   * **Check trùng mã trả thưởng trong cùng 1 file import:**   Nếu một mã trả thưởng có nhiều dòng cùng action "Đã trả thưởng" : cho phép import và merge dữ liệu Mã đơn hàng cách nhau dấu ","  Nếu một mã trả thưởng có nhiều dòng cùng action "Từ chối" : thì thông báo: Dòng n: Mã trả thưởng @Mã trả thưởng có nhiều dòng cùng action Từ chối trả thưởng. Vui lòng kiểm tra lại!  Nếu một mã trả thưởng có nhiều dòng vừa có action "Đã trả thưởng"  và  action "Từ chối" : thì thông báo: Dòng n: Mã trả thưởng @Mã trả thưởng khác action . Vui lòng kiểm tra lại! |
| 2 | Action (\*) | Dropdownlist\_onechoice | Chọn 1 trong 2 action:   * Đã trả thưởng * Từ chối trả thưởng | * Dòng dữ liệu import trống toàn bộ: bỏ qua không check; không import. * Action trống; có thông báo: Dòng n: Mã trả thưởng @Mã trả thưởng Action bị bỏ trống. Vui lòng kiểm tra lại! * Action khác định dạng; có thông báo:Dòng n: Mã trả thưởng @Mã trả thưởng Action không đúng định dạng. Vui lòng kiểm tra lại! |
| 3 | Mã đơn hàng | Text (50) | * Validate khi Action = Đã trả thưởng | * Dòng dữ liệu import trống toàn bộ: bỏ qua không check; không import. * Mỗi dòng dữ liệu import tương ứng với 1 mã đơn hàng. * Với action "Từ chối trả thưởng": bỏ qua không ghi nhận mã đơn hàng. * Với action "Đã trả thưởng" bắt buộc phải có mã đơn hàng; ngược lại có thông báo: Dòng n: Mã đơn hàng là bắt buộc. Vui lòng kiểm tra lại!   **Kiểm tra mã đơn hàng tồn tại:**   * Mã đơn hàng không tồn tại trong hệ thống có thông báo: Dòng n: Mã đơn hàng @Mã đơn hàng không tồn tại trên hệ thống. Vui lòng kiểm tra lại! * Trường hợp mã đơn hàng có tồn tại nhưng không thuộc phân quyền của user import(Dựa vào vùng- Khu vực được phân quyền và Vùng-Khu vực của NPP trên đơn hàng); có thông báo: Dòng n: Mã đơn hàng @Mã đơn hàng không thuộc phân quyền của tài khoản đang đăng nhập. Vui lòng kiểm tra lại! * Mã đơn hàng khác trạng thái Thành công (Đã duyệt; Đã xuất kho; Đã giao hàng); có thông báo: Dòng n: Mã đơn hàng **trả thưởng** @Mã đơn hàng khác trạng thái Thành công. Vui lòng kiểm tra lại! * Trùng Mã đơn hàng và trùng Mã trả thưởng ; có thông báo: Dòng n:  Mã đơn hàng @Mã đơn hàng bị trùng trong phiếu trả thưởng @Mã trả thưởng. Vui lòng kiểm tra lại! * Mã đơn hàng phải thuộc điểm bán, dựa vào mã trả thưởng, kiểm tra mã đơn hàng có phải được tạo cho điểm bán tương ứng trên mã trả thưởng hay không? Nếu không báo lỗi: Dòng n: Mã đơn hàng @Mã đơn hàng không thuộc điểm bán. Vui lòng kiểm tra lại! |
| 4 | Lý do từ chối | Text (100) | * Validate khi Action =Từ chối trả thưởng | * Với action "Đã trả thưởng": bỏ qua không ghi nhận Lý do. * Với action "Từ chối trả thưởng" tối đa 100 ký tự; ngược lại có thông báo: Dòng n: Lý do từ chối tối đa 100 ký tự. Vui lòng kiểm tra lại! * Trường hợp không nhập lý do từ chối có thông báo: Dòng n:"Lý do từ chối là bắt buộc. Vui lòng kiểm tra lại!" |
| 5 | Lưu thông tin |  |  | Sau khi tiến hành validate thành công, Lưu thông tin với:  **Dữ liệu import với Action "Đã trả thưởng"**   * Cập nhật kết quả trả thưởng = Đã trả thưởng * Cập nhật mã đơn hàng, nếu cùng mã trả thưởng thì nối chuỗi các mã đơn hàng cách nhau dấu phẩy "," * Trường hợp đã có thông tin Mã đơn hàng cho Mã trả thưởng, thì lần cập nhật tiếp theo vẫn có thông tin thì sẽ ghi đè thông tin của lần cập nhật mới nhất. * Ngày trả thưởng = ngày cập nhật * Ghi nhận ngày cập nhật, người cập nhật, Nhóm quyền cập theo người cập nhật.   **Dữ liệu import với Action "Từ chối trả thưởng"**   * Cập nhật kết quả trả thưởng = "Từ chối" * Ghi nhận lý do từ chối * Ghi nhận ngày cập nhật, người cập nhật, Nhóm quyền cập theo người cập nhật |

### 4.2 Ẩn cột Ngày đơn hàng

**4.2.1 Ẩn cột ở màn hình danh sách**

Thông tin hiện tại:

Hiển thị cột ngày đơn hàng (như hình).  
Menu Quản lý trưng bày/Danh sách trả thưởng trưng bày.

Thông tin thay đổi:

* Ẩn cột ngày đơn hàng ở danh sách trả thưởng trưng bày.
* Chỉ ẩn cột ngày đơn hàng; không thay đổi luồng hiện tại.

**4.2.2 Ẩn cột** ở form export

Thông tin hiện tại:

Link doc hiện tại: 

* 3[Export](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028753#id-[HO]Tr%E1%BA%A3th%C6%B0%E1%BB%9Fngtr%C6%B0ngb%C3%A0y-Export)

Thông tin thay đổi:

* Ẩn cột ngày đơn hàng ở danh sách trả thưởng trưng bày.
* Chỉ ẩn cột ngày đơn hàng; không thay đổi luồng hiện tại.
* Template export :

### 4.3 Điều chỉnh phiếu trả thưởng

Thông tin hiện tại:

* Verify lại chức năng như rule mô tả.
* Menu Quản lý trưng bày/Danh sách trả thưởng trưng bày/chọ phiếu trả thưởng và điều chỉnh

Link doc hiện tại: 

* 2.2[Chi tiết trả thưởng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028753#id-[HO]Tr%E1%BA%A3th%C6%B0%E1%BB%9Fngtr%C6%B0ngb%C3%A0y-Chiti%E1%BA%BFttr%E1%BA%A3th%C6%B0%E1%BB%9Fng)

Thông tin thay đổi:

* Điều chỉnh lại rule nút Tùy chỉnh phiếu trả thưởng; không thay đổi luồng hiện tại.

Mô tả thay đổi:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Mô tả** |
| --- | --- | --- | --- |
| Mã đơn hàng | Datacolumns | Không | Hiển thị mã đơn hàng khi khi thực hiện import danh sách trả thưởng hoặc khi thực hiện duyệt trả thưởng manual từng lần.  Hiển thị nhiều mã đơn hàng cách nhau dấu "Phẩy" |
| Người cập nhật | Datacolumns | Không | Mã nhân viên người thực hiện cập nhật gần nhất. |
| Nhóm quyền | Datacolumns - tag | Không | Hiển thị nhóm quyền người cập nhật, hiển thị theo người cập nhật gần nhất. |
| Thời gian cập nhật | Datacolumns | Không | Khi gen mã trả thưởng lần đầu.   Khi cập nhật hiển thị thời điểm cuối cùng cập nhật dữ liệu (dd-mm-yyyy hh:mm:ss) |
| Tùy chỉnh | icon button | Có | Hiển thị button duyệt khi trả thưởng có trạng thái =  Chờ trả thưởng; Đã trả thưởng; Hết hạn  Tooltip: Trả thưởng cho phép cập nhật Trạng thái trả thưởng là Đã trả thưởng hoặc Từ chối.    **a/ Khi Trạng thái trả thưởng = Chờ trả thưởng ; Hết hạn**→ Onclick cho phép cập nhật trạng thái thanh toán thành Đã trả thưởng, hiển thị popup default check radio Trả thưởng  Bao gồm 2 thao tác:    **b/  Khi Trạng thái trả thưởng = Đã trả thưởng** → Disable option Từ chối như hình:     ---   **Mô tả popup:**   * Onclick icon duyệt hiển thị popup default check radio Trả thưởng.   + Mã đơn hàng:     - **Mỗi mã đơn hàng**phân cách mỗi mã bằng dấu phẩy (`,`) và ràng max 1000 ký tự text.     - Placeholder: Nhập vào mã đơn hàng     - Không nhập: @Field là bắt buộc!     - Nhập vượt: ko lấy ký tự nhập vượt   + Chọn Cập nhật:     - 1/ Kiểm tra tất cả các mã đơn hàng đã nhập và báo lỗi 1 lần tất cả các lỗi (nếu có) - báo lỗi inline  * + - * **Kiểm tra tồn tại:**Mã đơn hàng @Mã đơn hàng không tồn tại trên hệ thống. Vui lòng kiểm tra lại!       * Trường hợp Mã đơn hàng có tồn tại nhưng không thuộc phân quyền import của user (Dựa vào vùng- Khu vực được phân quyền và Vùng-Khu vực của NPP trên đơn hàng). Hiển thị thông báo lỗi: Mã đơn hàng @Mã đơn hàng không thuộc phân quyền của tài khoản đang đăng nhập. Vui lòng kiểm tra lại!       * Kiểm tra trường hợp : Mã đơn hàng trả thưởng khác trạng thái Thành công (Đã duyệt; Đã xuất kho; Đã giao hàng): Hiển thị thông báo lỗi:  Mã đơn hàng **trả thưởng** @Mã đơn hàng khác trạng thái Thành công. Vui lòng kiểm tra lại!       * Kiểm tra cùng 1 phiếu trả thưởng trùng mã đơn hàng: Mã đơn hàng **trả thưởng** @Mã đơn hàng bị trùng. Vui lòng kiểm tra lại!       * Mã điểm bán trên đơn hàng khác mã điểm bán trên Mã trả thưởng: Kiểm tra dựa vào điểm bán trên đơn hàng có trùng khớp với mã điểm bán trên phiếu trả thưởng hay không. Nếu không khớp có thông báo: Mã đơn hàng @Mã đơn hàng không thuộc điểm bán. Vui lòng kiểm tra lại!      * + - 2/ Nếu tất cả đều thuộc điểm bán của phiếu trả thưởng        * Update Trạng thái trả thưởng = **Đã trả thưởng** (đối với trạng thái Chờ trả thưởng; Đã trả thưởng; Hết hạn)       * Lưu thông tin Mã đơn hàng trả thưởng cho Mã trả thưởng vào cột "Mã đơn hàng". Nối chuỗi cách nhau bằng dấu 'Phẩy'       * Trường hợp đã có thông tin Mã đơn hàng cho Mã trả thưởng, trong lần cập nhật tiếp theo vẫn có thông tin thì sẽ ghi đè thông tin của lần cập nhật mới nhất.       * Lưu Nhóm quyền theo người cập nhật   + Chọn Đóng: đóng popup và không thay đổi dữ liệu; về màn hình danh sách trả thưởng trưng bày.        * Từ chối: chọn radio Từ chối    + Placeholder: Nhập vào lý do từ chối   + Lý do từ chối:     - Lý do từ chối ràng max 100 ký tự text     - Bắt buộc nhập lý do.     - Nhập vượt: không lấy ký tự nhập vượt     - Không nhập: @field là bắt buộc!   + Chọn Cập nhật: Update Trạng thái trả thưởng = "Từ chối "; Lý do từ chối = giá trị đã nhập   + Lưu nhóm quyền theo người cập nhật   + Chọn Đóng: đóng popup và không thay đổi dữ liệu; về màn hình danh sách trả thưởng   Thực hiện đồng thời 2 action:   * Action Từ chối được ghi nhận trước thì hiển thị msg: "Mã trả thưởng đã có trạng thái Từ chối . Vui lòng kiểm tra lại!" * Action Đã trả thưởng ghi nhận trước thì hiển thị msg:  "Mã trả thưởng đã có trạng thái Đã trả thưởng . Vui lòng kiểm tra lại!" |

### 4.4 Thêm chức năng xem lịch sử

Thông tin:

* Thêm chức năng xem lịch sử để theo dõi, kiểm tra sự thay đổi thông tin.
* Thực hiện giống với chức năng xem lịch sử của màn hình trả thưởng của CTTL.
* Rule thực hiện xem mô tả chi tiết.

Thao tác:

Nhấn vào nút **Xem lịch sử** trên màn hình Danh sách trả thưởng mở ra màn hình chi tiết lịch sử; nhấn dấu X để tắt màn hình Chi tiết lịch sử.

Mô tả chi tiết:

**1/ Bộ lọc thời gian**

Nhãn: "Chọn thời gian xem lịch sử (tối đa 31 ngày)"

* Hiển thị mặc định ngày hiện tại;
* Cho phép xóa ngày, chọn lại ngày (giới hạn 31 ngày);
* Hiển thị placeholder: Từ ngày → Đến ngày

**2/ Button Tìm kiếm**

Validate ngày đã nhập:

* Kiểm tra người dùng đã nhập đủ từ ngày – đến ngày.
* Kiểm tra khoảng thời gian không vượt quá 31 ngày.
* Nếu lỗi chọn vượt 31 ngày (case chưa giới hạn 31 ngày theo "Từ ngày")→ hiển thị thông báo lỗi “Vui lòng chọn khoảng thời gian tối đa 31 ngày”

Hiển thị dữ liệu trên lưới danh sách "Lịch sử cập nhật"

* Hiển thị mỗi dòng ứng với **một trường thông tin bị thay đổi**.
* Tự động phân trang nếu có quá nhiều dòng (ví dụ: 10 dòng/trang).

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- | --- |
| 1 | STT | Number | số thứ tự các dòng |
| 2 | Thời gian cập nhật | Datacolumns | dd/mm/yyyy hh:mm:ss |
| 3 | Người cập nhật | Datacolumns | Mã người cập nhật |
| 4 | Tên người cập nhật | Datacolumns | Tên người cập nhật |
| 5 | Nhóm quyền | Datacolumns- tag | Nhóm quyền của người cập nhật |
| 6 | Mã trả thưởng | Datacolumns | Mã trả thưởng định danh bản ghi thay đổi |
| 7 | Trường thông tin | Datacolumns | Field đã thay đổi |
| 8 | Nội dung cũ | Datacolumns | Giá trị trước khi thay đổi |
| 9 | Nội dung mới | Datacolumns | Giá trị sau khi thay đổi |

**3/ Button "Export"**

Chọn button export hiển thị thông báo "Bạn có muốn xuất lịch sử cập nhật không?"

* Chọn "Đồng ý" để export danh sách
* Chọn Hủy, tắt popup và không tải file export về thiết bị

Khi người dùng nhấn nút Export, hệ thống sẽ:

* Gửi yêu cầu tới backend kèm theo bộ lọc thời gian.
* Backend truy vấn toàn bộ bản ghi lịch sử cập nhật theo tiêu chí đó (không phân trang).
* Tạo file Excel động và trả lại để người dùng tải xuống.

Mô tả template export: 

Tên file: Export\_RewardUpdateHistory.

Thông tin xuất: nằm trên cùng-bên trái form.

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Người xuất báo cáo: | FVCUS0914588981 - Thảo BA | | | | | | | | | | | | | | | | | |
| Thời gian xuất báo cáo: | 08/12/2024 - 07:16:08 | | | | | | | | | | | | | | | | | |
| Dữ liệu theo thời gian: | Từ ngày 01/12/2024 đến ngày 21/12/2024 | | | | | | | | | | | | | | | | | |

Thông tin dữ liệu xuất:

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Thời gian cập nhật | Datacolumns | dd/mm/yyyy hh:mm:ss |
| Người cập nhật | Datacolumns | Mã người cập nhật |
| Tên người cập nhật | Datacolumns | Tên người cập nhật |
| Nhóm quyền | Datacolumns | Nhóm quyền của người cập nhật |
| Mã trả thưởng | Datacolumns | Mã trả thưởng định danh bản ghi thay đổi |
| Trường thông tin | Datacolumns | Field đã thay đổi |
| Nội dung cũ | Datacolumns | Giá trị trước khi thay đổi |
| Nội dung mới | Datacolumns | Giá trị sau khi thay đổi |