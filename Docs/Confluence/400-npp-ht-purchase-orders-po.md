|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5532 |
| Epic |  |
| Feature |  |
| Description | Yêu cầu import sản phẩm cho đơn PO: Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fOR-4027 |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# ĐƠN HÀNG PO - ENHANCE CHỌN SẢN PHẨM KHI TẠO MỚI ĐƠN HÀNG

* Bỏ button Thêm sản phẩm ở cuối danh sách sản phẩm
* + Bổ sung button Thêm sản phẩm: Sẽ được mô tả bên dưới
  + Bổ sung button Import Excel để import sản phẩm từ file excel: Sẽ được mô tả bên dưới
  + Bổ sung button tìm kiếm trên lưới danh sách sản phẩm (màn hình chính)
    - Placeholder: Tìm kiếm
    - Tooltip: Tìm kiếm theo Mã SKU, Tên sản phẩm
    - Chọn icon search: 
      * Hiển thị danh sách sản phẩm trên lưới danh sách dựa vào textsearch, Không nhập gì → hiển thị tất cả danh sách sản phẩm được thêm vào đơn hàng
      * Search tiếng việt có dấu, không dấu, không phân biệt chữ hoa, chữ thường
      * Search trên tất cả các page
  + Lưới danh sách sản phẩm bổ sung checkbox trước mỗi dòng để có thể chọn xóa nhiều sản phẩm
    - Xóa tất cả n sản phẩm:
    - Trường hợp trên lưới danh sách chọn >= 1 sản phẩm, sẽ hiển thị dòng text này
    - Trong đó n là tất cả các sản phẩm trên tất cả các page
    - Nhấn button xóa để xóa sản phẩm khỏi danh sách, không cần thông báo.
  + Bổ sung phân trang cho danh sách sản phẩm

* Các thông tin Ngày đặt hàng, Kho, Lưu đơn hàng giữ nguyên logic như cũ.

* Kho: Hiện tại không phân quyền trường này, trường hợp có nhiều ERP HO (ERP HCM, ERP HN,...) thì cũng sẽ hiển thị đầy đủ các kho để người dùng chọn.

## Button Thêm sản phẩm

* Khi nhấn vào button Thêm sản phẩm Hiển thị màn hình chọn sản phẩm như sau:

* Filter: Trạng thái
  + Placeholder: Tìm kiếm theo Mã, tên sản phẩm
  + Tooltip: Tìm kiếm theo Mã, tên sản phẩm
  + Chọn Tìm kiếm: 
    - Hiển thị danh sách sản phẩm đang hoạt động dựa vào textsearch, Không nhập gì → hiển thị tất cả danh sách sản phẩm đang hoạt động
    - Search like có dấu và không dấu, không phân biệt hoa thường
    - Search trên tất cả các page
  + Chọn Làm mới: Refresh màn hình và hiển thị placeholder: "Tìm kiếm; lưới danh sách vẫn giữ nguyên không thay đổi

**Danh sách sản phẩm:**  Hiển thị tất cả sản phẩm đang hoạt động trên hệ thống

* + Hình ảnh sản phẩm
  + Mã sản phẩm
  + Tên sản phẩm, phân cấp, đơn vị kinh doanh: Hiển thị theo mã sản phẩm
  + Trạng thái: hiển thị theo trạng thái hiện tại của sản phẩm
  + Phân trang hiển thị

**Check để chọn sản phẩm:**

* Check box cho phép chọn các Sản phẩm để insert vào Grid Sản phẩm.
* Cho phép check một hoặc nhiều
* Cho phép check All, chọn all các trang trên màn hình
* Trường hợp tạo mới đơn hàng: Không giới hạn sản phẩm được thêm vào, trường hợp chỉnh sửa đơn hàng: Cho phép chọn tối đa 200 sản phẩm/1 lần thêm  (Áp dụng cho thêm trên portal và thêm từ file import)

=> Sau khi chọn →  hiển thị số mục được chọn và cho phép xóa hàng loạt

Chọn Xóa hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Đồng ý: Xóa tất cả các mục đã chọn; chọn Hủy: Tắt popup và vẫn giữ nguyên trạng thái

-------

***lưu ý:***

* Khi thao tác trên pop-up Thêm Sản phẩm, thì ngoài danh sách Sản phẩm của đơn hàng cũng update theo, và ngược lại
  + Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại

* + Nếu xóa trên lưới danh sách thì khi mở popup, filter dữ liệu Sản phẩm đã xóa sẽ thấy uncheck Sản phẩm
* Mở Popup lần sau, hiển thị checked đối với các sản phẩm đã chọn trước đó.

*--*

Button "**Đồng ý**":

* Cho phép người dùng insert danh sách Sản phẩm đã chọn vào Grid Danh sách Sản phẩm ngoài màn hình chính và đóng Popup
* **Ra ngoài màn hình chính mới hiển thị giá, các flow hiện tại giữ như cũ.**

**Lưu ý:**

* + Khi đã add Sản phẩm ; Chọn  back về màn hình trước rồi quay lại vẫn hiển thị danh sách đã chọn
  + Hoặc chọn Tiếp tục => Chọn back về lại vẫn thấy danh sách Sản phẩm đã chọn
  + Chọn add Thêm thành công; sau đó chọn add thêm nữa => Danh sách đã chọn vẫn hiển thị "đã chọn", muốn bỏ chọn thì uncheck và nhấn Đồng ý

## Button Import sản phẩm

* + Nhấn vào button này → Lấy template import → Thực hiện import dữ liệu Sản phẩm vào lưới danh sách
  + File mẫu import: Format tên file mẫu: IMPORT\_PO\_PRODUCT\_DD-MM-YYYY\_hhmmss.xlsx
  + Rule import theo quy tắc chung đã mô tả ở mục Import
  + Templates:

| Mã sản phẩm (\*) | Tên sản phẩm | Đơn vị (\*) | Số lượng (\*) |
| --- | --- | --- | --- |
| SP0103827398 | sản phẩm A1 | CAI | 100 |
| SP0103827399 | sản phẩm A2 | LOC | 200 |
| SP0103827400 | sản phẩm A3 | THUNG | 300 |

* **Mô tả dữ liệu**

| Trường dữ liệu | Kiểu dữ liệu | Mô tả | Kiểm tra |
| --- | --- | --- | --- |
| Mã sản phẩm (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | Nhập mã sản phẩm muốn thêm vào đơn hàng | Mã sản phẩm để trống (trống hết dòng=> bỏ qua), nhập không đúng định dạng (Chữ có dấu tiếng việt, ký tự đặc biệt, khoảng trống - trước - trong- sau mã), không tồn tại, không hoạt động trên hệ thống DMS   * Hiển thị thông báo lỗi    + Dòng thứ @n: Mã sản phẩm nhập không đúng định dạng/ không tồn tại/ không hoạt động / bị bỏ trống. Vui lòng kiểm tra lại! |
| Tên sản phẩm | Nhập ký tự tự do | Nhập tên sản phẩm muốn thêm vào đơn hàng | * Thông tin tên sản phẩm chỉ để user thực hiện tham chiếu trước khi import, khi import chỉ lấy thông tin mã sản phẩm. * Bỏ qua cột này không kiểm tra |
| Đơn vị  (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | Nhập mã đơn vị của sản phẩm | * Đơn vị sản phẩm để trống, nhập không đúng định dạng (Chữ có dấu tiếng việt, ký tự đặc biệt, khoảng trống - trước - trong- sau mã), không tồn tại, không hoạt động trên hệ thống DMS   + Hiển thị thông báo lỗi: Dòng thứ @n: Đơn vị sản phẩm nhập không đúng định dạng/ không tồn tại/ không hoạt động / bị bỏ trống. Vui lòng kiểm tra lại! * Đơn vị nhập vào không thuộc mã sản phẩm:   + Hiển thị thông báo lỗi: Dòng thứ @n: Đơn vị sản phẩm không thuộc mã sản phẩm. Vui lòng kiểm tra lại!   + Ví dụ sản phẩm chỉ có 2 đơn vị là Cái, thùng, user nhập Lốc thì sẽ thông báo lỗi. |
| Số lượng  (\*) | * Nhập số > 0 * Nhập số nguyên * Nhập tối đa 6 ký tự | Nhập số lượng sản phẩm muốn thêm vào đơn hàng | Số lượng nhập sai định dạng, để trống   * Hiển thị thông báo lỗi    + Dòng thứ @n: Số lượng nhập không đúng định dạng/ bị bỏ trống. Vui lòng kiểm tra lại! |

**Trường hợp import thành công:**

* Import lần đầu-> Import thành công trên màn hình danh sách
* Lần 2:
  + Thông tin sản phẩm đã có → Ghi đè thông tin.
  + Thông tin sản phẩm chưa có → Thêm dòng mới.

**Trường hợp import lỗi:**

Hiển thị các dòng lỗi để user điều chỉnh

* Hiển thị tất cả các dòng lỗi và có phân trang, sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi.
* Nếu nhấn "Đóng"  sẽ không thêm bất cứ dữ liệu import nào vào màn hình