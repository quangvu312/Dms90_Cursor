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

# Danh sách sản phẩm

**Mục đích:** Xem danh sách sản phẩm

**Mô tả**

Đường dẫn: Dữ liệu nền > Sản phẩm > Danh sách sản phẩm

Màn hình bao gồm các thông tin sau:

* Nút Tạo mới: Click vào button -> hiển thị popup tạo mới nhóm sản phẩm
* Tìm kiếm:
  + Tìm kiếm like Theo mã/ tên sản phẩm (tối đa là 500 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.
  + Trạng thái:
    - Gồm các trạng thái {Hoạt động, Không hoạt động}.
    - Mặc định trống.
    - Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.
  + Nút Tìm kiếm: Click vào button -> Thực hiện tìm kiếm theo các điều kiện trên

* Danh sách sản phẩm bao gồm các cột:
  + Ảnh
  + Mã sản phẩm
  + Tên sản phẩm
  + Đơn vị: hiển thị dữ liệu tại trường *Đơn vị cơ bản* của sản phẩm
  + Phân cấp: Hiển thị theo format: *<Cấp 1>* > *<cấp 2> >* ... > *<cấp n>*
  + Đơn vị kinh doanh
  + Trạng thái: toggle
    - ON = Hoạt động
    - OFF = Không hoạt động
    - Khi chuyển trạng thái -> hiện thị popup yêu cầu xác nhận bao gồm:
      * Title: *"Thay đổi trạng thái?"*
      * Text: *"Bạn có chắc chắn muốn thay đổi trạng thái hay không?"*
      * Nút Hủy: Click vào button -> Hủy chuyển trạng thái và trở về màn hình danh sách
      * Nút Đồng ý: Click vào button -> Xác nhận chuyển trạng thái  và trở về màn hình danh sách
  + Ngày tạo: Hiển thị theo format: dd-mm-yyyy hh:mm:ss
  + Ngày cập nhật: Lấy thời gian cập nhật gần nhất, hiển thị theo format: dd-mm-yyyy hh:mm:ss
  + Người tạo
  + Người cập nhật: Lấy tên người cập nhật gần nhất
  + Nút Chỉnh sửa
* Phân trang theo {10, 50, 100}

# Chi tiết sản phẩm

**Mục đích:** Xem chi tiết sản phẩm

**Mô tả**

Đường dẫn: Dữ liệu nền > Sản phẩm > Danh sách sản phẩm > Click vào Tên sản phẩm bất kì

Thông tin màn hình xem chi tiết sản phẩm bao gồm:

* Ảnh: Click vào ảnh -> phóng to hình ảnh, click nút Xóa/ vùng xung quanh để trở về màn hình chi tiết ban đầu
* Mã SKU
* Tên sản phẩm
* Trạng thái: Hoạt động/ Không hoạt động
* VAT
* Phân cấp sản phẩm: Hiển thị theo format: Mì > Hảo Hảo > Mì gói
* Đơn vị kinh doanh
* Đơn vị tính
  + Đơn vị cơ bản
  + Đơn vị quy đổi - Giá trị quy đổi
* Nút Đóng: Click vào button -> Đóng màn hình xem chi tiết sản phẩm và trở về màn hình danh sách

**Kết quả**

# Tạo mới sản phẩm

**Mục đích:** Tạo mới một sản phẩm

**Mô tả**

Đường dẫn: Dữ liệu nền > Sản phẩm > Danh sách sản phẩm > Chọn Nút Tạo mới

Popup tạo mới sản phẩm bao gồm các thông tin sau:

* Ảnh:
  + Không bắt buộc
  + Chỉ upload 1
  + Chỉ cho phép chọn file định dạng **hình ảnh:**
    - JPEG / JPG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"
    - PNG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"
    - SVG: kích thước <= 1MB. → Nếu dung lượng ảnh > 1MB, báo lỗi "Dung lượng ảnh SVG vượt quá giới hạn cho phép (1MB)"
* Mã SKU
  + Bắt buộc nhập
  + Mã SKU là unique
  + Không cho phép nhập khoảng trắng.
  + Tối đa 200 ký tự dạng string
  + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
  + Mặc định trống
  + Ký tự chữ khi nhập vào sẽ tự động viết in hoa.
* Tên sản phẩm
  + Bắt buộc nhập
  + Tối đa 500 ký tự dạng string
  + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
  + Mặc định trống
* Trạng thái: toggle
  + ON = Hoạt động (mặc định)
  + OFF = Không hoạt động
* Thuế:
  + Load danh sách các mức thuế đang hoạt động ở màn hình
  + Bắt buộc chọn
  + Chỉ chọn 1
* VAT
  + Hiển thị giá trị của mức thuế đã chọn ở trường "Thuế"
* Phân cấp *[dropdown]*
  + Bắt buộc chọn
  + Chỉ cho phép chọn 1
  + Hiển thị theo dạng cây (như attachment *Chọn cây phân cấp)*, dữ liệu lấy từ trường *"Tên phân cấp"* - trạng thái = *Hoạt động* tại *Cây phân cấp*
  + Danh sách sắp xếp theo thứ tự alphabet riêng theo từng cấp. Ví dụ:
    - Đồ ăn nhẹ
      * Bánh quy
      * Kẹo
    - Gia vị và phụ gia thực phẩm
      * Đường
      * Muối

* + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
  + Mặc định trống
  + Sau khi chọn, giá trị hiển thị bao gôm các phân cấp cha của phân cấp đã chọn. Ví dụ: chọn phân cấp là Kẹo -> hiển thị: *Thức ăn > Đồ ăn nhẹ > Kẹo*
* Đơn vị kinh doanh *[dropdown]*
  + Bắt buộc chọn
  + Hiển thị dữ liệu lấy từ trường *"Tên đơn vị kinh doanh"* - trạng thái = *Hoạt động* tại *Đơn vị kinh doanh*
  + Cho phép nhập dữ liệu để tìm kiếm like theo Tên đơn vị kinh doanh
  + Chỉ cho phép chọn 1
  + Mặc định trống
  + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
* Đơn vị tính
  + Đơn vị cơ bản: dropdown
    - Bắt buộc nhập
    - Lấy dữ liệu từ danh sách Đơn vị tính (chỉ hiển thị *Tên đơn vị tính* - trạng thái *=* *Hoạt động*)
    - Chỉ cho phép chọn 1
    - Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên đơn vị tính
    - Mặc định trống
    - Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
  + Nút Thêm đơn vị quy đổi: Click vào button -> thêm mới 1 dòng đơn vị quy đổi:
    - Đơn vị quy đổi: dropdown
      * Bắt buộc nhập
      * Lấy dữ liệu từ danh sách Đơn vị tính (chỉ hiển thị *Tên đơn vị tính*), ngoại trừ giá trị có trạng thái = Không hoạt động và giá trị đã chọn tại trường *Đơn vị cơ bản*
      * Chỉ cho phép chọn 1
      * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên đơn vị tính
      * Mặc định trống
      * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
    - Giá trị quy đổi
      * Bắt buộc nhập
      * Chỉ cho phép nhập số và dấu chấm. Giá trị có thể chứa phần thập phân với tối đa 2 chữ số sau dấu chấm, và dấu thập phân quy ước là dấu chấm
      * Không cho phép nhập khoảng trắng
      * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
      * Mặc định trống
    - Nút Xóa: Click vào button -> Xóa dòng đơn vị quy đổi
* Nút Đóng: Click vào button -> Hủy tạo mới sản phẩm và trở về màn hình danh sách
* Nút Lưu: Click vào button -> Tạo mới sản phẩm với các thông tin được nhập và trở về màn hình danh sách

**Kết quả:** Tạo mới thành công một sản phẩm

**Lưu ý:**

* Nếu mã sku đã tồn tại trước đó, báo lỗi: *"Mã SKU đã tồn tại"*
* Nếu không nhập dữ liệu tại trường thông tin bắt buộc thì báo lỗi "[Tên trường] là bắt buộc." ở dưới mỗi trường dữ liệu.
* Nếu đạt số ký tự tối đa được phép nhập thì không được phép nhập tiếp
* Nếu giá trị quy đổi chưa đúng định dạng, báo lỗi "Giá trị không đúng định dạng."

# Chỉnh sửa sản phẩm

**Mục đích:** Chỉnh sửa một sản phẩm

**Mô tả**

Đường dẫn: Dữ liệu nền > Sản phẩm > Danh sách sản phẩm > Chỉnh sửa sản phẩm

Popup chỉnh sửa sản phẩm bao gồm các thông tin sau:

* Ảnh:
  + Không bắt buộc
  + Chỉ upload 1
  + Chỉ cho phép chọn file định dạng **hình ảnh:**
    - JPEG / JPG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"
    - PNG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"
    - SVG: kích thước <= 1MB. → Nếu dung lượng ảnh > 1MB, báo lỗi "Dung lượng ảnh SVG vượt quá giới hạn cho phép (1MB)"
  + Click vào ảnh -> phóng to hình ảnh, click nút Xóa/ vùng xung quanh để trở về màn hình chi tiết ban đầu
* Mã SKU
  + Chỉ được chỉnh sửa khi chưa phát sinh giao dịch nào
  + Bắt buộc nhập
  + Mã SKU là unique
  + Không cho phép nhập khoảng trắng.
  + Tối đa 200 ký tự dạng string
  + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu.
  + Ký tự chữ khi nhập vào sẽ tự động viết in hoa.

* Tên sản phẩm
  + Chỉ được chỉnh sửa khi chưa phát sinh giao dịch nào
  + Bắt buộc nhập
  + Tối đa 500 ký tự dạng string
  + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
* Trạng thái: toggle
  + ON = Hoạt động (mặc định)
  + OFF = Không hoạt động
* Thuế VAT: 
  + Chỉ được chỉnh sửa khi chưa phát sinh giao dịch nào
  + Khi chọn lại thuế VAT thì VAT thay đổi theo.
* Phân cấp *[dropdown]*
  + Chỉ được chỉnh sửa khi chưa phát sinh giao dịch nào
  + Bắt buộc chọn
  + Hiển thị theo dạng cây (như attachment *Chọn cây phân cấp)*, dữ liệu lấy từ trường *"Tên phân cấp"* - trạng thái = *Hoạt động* tại *Cây phân cấp*
  + Danh sách sắp xếp theo thứ tự alphabet riêng theo từng cấp. Ví dụ:
    - Đồ ăn nhẹ
      * Bánh quy
      * Kẹo
    - Gia vị và phụ gia thực phẩm
      * Đường
      * Muối
  + Chỉ cho phép chọn 1
  + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu.
  + Sau khi chọn, giá trị hiển thị bao gôm các phân cấp cha của phân cấp đã chọn. Ví dụ: chọn phân cấp là Kẹo -> hiển thị: *Thức ăn > Đồ ăn nhẹ > Kẹo*
* Đơn vị kinh doanh *[dropdown]*
  + Chỉ được chỉnh sửa khi chưa phát sinh giao dịch nào
  + Bắt buộc chọn
  + Hiển thị dữ liệu lấy từ trường *"Tên đơn vị kinh doanh"* - trạng thái = *Hoạt động* tại *Đơn vị kinh doanh*
  + Cho phép nhập dữ liệu để tìm kiếm like theo Tên đơn vị kinh doanh
  + Chỉ cho phép chọn 1
  + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
* Đơn vị tính
  + Chỉ được chỉnh sửa khi chưa phát sinh giao dịch nào, trường hợp đã phát sinh giao dịch, được thêm mới đơn vị.
  + Đơn vị cơ bản: dropdown
    - Bắt buộc nhập
    - Lấy dữ liệu từ danh sách Đơn vị tính (chỉ hiển thị *Tên đơn vị tính* - trạng thái *=* *Hoạt động*)
    - Chỉ cho phép chọn 1
    - Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên đơn vị tính
    - Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
  + Nút Thêm đơn vị quy đổi: Click vào button -> thêm mới 1 dòng đơn vị quy đổi:
    - Đơn vị quy đổi: dropdown
      * Bắt buộc nhập
      * Lấy dữ liệu từ danh sách Đơn vị tính (chỉ hiển thị *Tên đơn vị tính*), ngoại trừ giá trị có trạng thái = Không hoạt động và giá trị đã chọn tại trường *Đơn vị cơ bản*
      * Chỉ cho phép chọn 1
      * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên đơn vị tính
      * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
    - Giá trị quy đổi
      * Bắt buộc nhập
      * Chỉ cho phép nhập số và dấu chấm. Giá trị có thể chứa phần thập phân với tối đa 2 chữ số sau dấu chấm, và dấu thập phân quy ước là dấu chấm
      * Không cho phép nhập khoảng trắng
      * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu
    - Nút Xóa: Click vào button -> Xóa dòng đơn vị quy đổi
* Nút Đóng: Click vào button -> Hủy chỉnh sửa sản phẩm và trở về màn hình danh sách
* Nút Lưu: Click vào button -> Chỉnh sửa sản phẩm với các thông tin được nhập và trở về màn hình danh sách

**Kết quả:** Chỉnh sửa thành công một sản phẩm

**Lưu ý:**

* Nếu mã sku đã tồn tại trước đó, báo lỗi: *"Mã SKU đã tồn tại"*
* Nếu không nhập dữ liệu tại trường thông tin bắt buộc thì báo lỗi "[Tên trường] là bắt buộc." ở dưới mỗi trường dữ liệu.
* Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"
* Nếu đạt số ký tự tối đa được phép nhập thì không được phép nhập tiếp
* Nếu giá trị quy đổi chưa đúng định dạng, báo lỗi "Giá trị không đúng định dạng."
* Nếu sản phẩm đã tồn tại trong bảng giá bất kì và giá gốc của sản phẩm khác 0 -> disable trường đơn vị cơ bản của sản phẩm đó tại màn hình chỉnh sửa sản phẩm (thực hiện test sau khi đã có tính năng bảng giá)