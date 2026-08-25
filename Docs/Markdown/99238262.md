|  |  |
| --- | --- |
| Issue Link | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fDMS90-30 |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Danh sách sản phẩm có tích hợp Vigo |
| Document version | RedV1.1.0 |
| Document status | BlueDOING |
| Document owner |  |
| Chage History | 2 |

## **1/ Lịch sử tài liệu**

| **Version** | **Publish** | **Changed by** | **Mô tả** |
| --- | --- | --- | --- |
| 1.0 | 23/07/2026 | Vu | n/a |
| 1.1 | 24/07/2026 | Vu | ẩn thêm/chỉnh sửa sản phẩm , chỉ cho view danh sách và view chi tiết |

## **2/ Thông tin chung**

**Tiêu đề** : Tài liệu mô tả màn hình quản lý sản phấm. 

**Đường dẫn :** Dữ liệu nền → Sản phẩm 

**Nội dung thay đổi**: Thêm thông tin thuộc tính cho sản phẩm

|  | Hiện tại | Thay đổi (Vigo) |
| --- | --- | --- |
| **Chi tiết SP** | mặc định như DMS90 | Thêm các thuộc tính sp :  DIVISION, SEGMENTATION, PRODUCT TYPE, INDICATION, FUNCTION, BRAND, COST ELEMENTS, METHOD, PATHOLO, GYSKIN LAYE |

## **3/ Tính năng**

|  | **Tính năng** | **Mã FR** | **Mô tả** |
| --- | --- | --- | --- |
| **1** | **Chi tiết sản phẩm** | **AC\_US\_01** | Thêm các thuộc tính sp : DIVISION, SEGMENTATION, PRODUCT TYPE, INDICATION, FUNCTION, BRAND, COST ELEMENTS, METHOD, PATHOLO, GYSKIN LAYE |

## **4/ Mô tả tính năng**

### **AC\_US\_01 —  Chi tiết sản phẩm**

**User story** : Là Head Officer tôi muốn xem chi tiết sản phẩm

**Điều kiện**: [User có phân quyền xem chi tiết sản phẩm theo nhóm phân quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)

**Đường dẫn**: Dữ liệu nền → Sản phẩm → Danh sách sản phẩm → Tên sản phẩm (hyperlink)

| **Tên Trường** | **Loại dữ liệu** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** | Mã ERP |
| --- | --- | --- | --- | --- | --- |
| Thông tin cơ bản | | | | | |
| Hình ảnh | image | Không | Không | Hiển thị hình ảnh sản phẩm |  |
| Mã SKU | Text | Không | Có | Hiển thị mã sản phẩm | External ID |
| Tên sản phẩm | Text | Không | Có | Hiển thị tên sản phẩm | DISPLAY NAME/CODE |
| Phân cấp sản phẩm | Text | Không | Có | Hiển thị phân cấp sản phẩm | MDSE CATGRY DESC |
| Đơn vị kinh doanh | Text | Không | Có | Hiển thị đơn vị kinh doanh của sản phẩm |  |
| Thuế | Text | Không | Có | Hiển thị thuế của sản phẩm | SALES TAX CODE |
| VAT | Text | Không | Có | Hiển thị VAT của sản phẩm |  |
| Trạng thái | Toggle | Không | Có | Hiển thị trạng thái sản phẩm | Inactive |
| Thông tin sản phẩm (NEW) | | | | | |
| Division | Text | Không | Có | Thuộc tính của sản phẩm dưới dạng List\_/record  DMS hứng những thuộc tính này trường hợp Vigo sync thiếu thông tin, DMS tự thêm mới | DIVISION |
| Segmentation | Text | Không | Có | SEGMENTATION |
| Product type | Text | Không | Có | PRODUCT TYPE |
| Indication | Text | Không | Có | INDICATION |
| Function | Text | Không | Có | FUNCTION |
| Brand | Text | Không | Có | BRAND |
| Cost elements | Text | Không | Có | COST ELEMENTS |
| Method | Text | Không | Có | METHOD |
| Pathology | Text | Không | Có | PATHOLOGY |
| Skin laye | Text | Không | Có | SKIN LAYE |
| Đơn vị tính | | | | | |
| Đơn vị cơ bản | Text | Không | Không | Hiển thị đơn vị cơ bản của sản phẩm | PRIMARY STOCK UNIT |
| Đóng | Button | Có | không | Tắt màn hình chi tiết |  |
| Thêm đơn vị quy đổi | Button | Không | không |  |  |

### **AC\_US\_03 —  Thêm mới sản phẩm**

**Note : không làm**

Thêm mới sản phẩm

**User story** : Là Head Officer tôi muốn thêm mới sản phẩm

**Điều kiện**: [User có phân quyền thêm mới sản phẩm theo nhóm phân quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)

**Đường dẫn**: Dữ liệu nền → Sản phẩm → Danh sách sản phẩm → Thêm mới

| **Tên Trường** | **Loại dữ liệu** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** | Mã ERP |
| --- | --- | --- | --- | --- | --- |
| Thông tin cơ bản | | | | | |
| Hình ảnh | Upload image | Có | Không | Chỉ upload 1 file, Chỉ cho phép chọn file định dạng **hình ảnh:**   * + JPEG / JPG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"   + PNG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"   + SVG: kích thước <= 1MB. → Nếu dung lượng ảnh > 1MB, báo lỗi "Dung lượng ảnh SVG vượt quá giới hạn cho phép (1MB)" |  |
| Mã SKU | Textbox | Có | Có | Placeholder : Nhập mã sản phẩm   * Bắt buộc nhập * Mã SKU là unique * Không cho phép nhập khoảng trắng. * Tối đa 200 ký tự dạng string * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu * Mặc định trống * Ký tự chữ khi nhập vào sẽ tự động viết in hoa. | External ID |
| Tên sản phẩm | Textbox | Có | Có | Placeholder : Nhập tên sản phẩm   * Bắt buộc nhập * Tối đa 500 ký tự dạng string * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu * Mặc định trống | DISPLAY NAME/CODE |
| Phân cấp sản phẩm | DropdownList one choice | Có | Có | Placeholder : Chọn phân cấp sản phẩm   * Bắt buộc chọn * Chỉ cho phép chọn 1 * Hiển thị theo dạng cây (như attachment *Chọn cây phân cấp)*, dữ liệu lấy từ trường *"Tên phân cấp"* - trạng thái = *Hoạt động* tại *Cây phân cấp* * Danh sách sắp xếp theo thứ tự alphabet riêng theo từng cấp. Ví dụ:   + Đồ ăn nhẹ     - Bánh quy     - Kẹo * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu * Mặc định trống * Sau khi chọn, giá trị hiển thị bao gôm các phân cấp cha của phân cấp đã chọn. Ví dụ: chọn phân cấp là Kẹo -> hiển thị: *Thức ăn > Đồ ăn nhẹ > Kẹo* | MDSE CATGRY DESC |
| Đơn vị kinh doanh | DropdownList one choice | Có | Có | * Bắt buộc chọn * Hiển thị dữ liệu lấy từ trường *"Tên đơn vị kinh doanh"* - trạng thái = *Hoạt động* tại *Đơn vị kinh doanh* * Cho phép nhập dữ liệu để tìm kiếm like theo Tên đơn vị kinh doanh * Chỉ cho phép chọn 1 * Mặc định trống * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu |  |
| Thuế | DropdownList one choice | Có | Có | * Hiển thị dữ liệu lấy từ trường *"Thuế"* - trạng thái = *Hoạt động* * Bắt buộc chọn * Chỉ chọn 1 | SALES TAX CODE |
| VAT | Textbox | Không | Có | * Hiển thị giá trị của mức thuế đã chọn ở trường "Thuế" |  |
| Trạng thái | Datacolumn link | Có | Không | * ON = Hoạt động (mặc định) * OFF = Không hoạt động | Inactive |
| Thông tin sản phẩm (NEW) | | | | | |
| Division | DropdownList one choice | Có | Có | Thuộc tính của sản phẩm dưới dạng List\_/record  DMS hứng những thuộc tính này trường hợp Vigo sync thiếu thông tin, DMS tự thêm mới | DIVISION |
| Segmentation | DropdownList one choice | Có | Có | SEGMENTATION |
| Product type | DropdownList one choice | Có | Có | PRODUCT TYPE |
| Indication | DropdownList one choice | Có | Có | INDICATION |
| Function | DropdownList one choice | Có | Có | FUNCTION |
| Brand | DropdownList one choice | Có | Có | BRAND |
| Cost elements | DropdownList one choice | Có | Có | COST ELEMENTS |
| Method | DropdownList one choice | Có | Có | METHOD |
| Pathology | DropdownList one choice | Có | Có | PATHOLOGY |
| Skin laye | DropdownList one choice | Có | Có | SKIN LAYE |
| Đơn vị tính | | | | | |
| Đơn vị cơ bản | DropdownList one choice | Có | Có | * Bắt buộc nhập * Lấy dữ liệu từ danh sách Đơn vị tính (chỉ hiển thị *Tên đơn vị tính*), ngoại trừ giá trị có trạng thái = Không hoạt động và giá trị đã chọn tại trường *Đơn vị cơ bản* * Chỉ cho phép chọn 1 * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên đơn vị tính * Mặc định trống * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu | PRIMARY STOCK UNIT |
| Thêm Đơn vị quy đổi | Button | Có | Không | ng tin bao gồm : Đơn vị quy đổi và Gía trị quy đổi |  |
| Đơn vị quy đổi | DropdownList one choice | Có | Có | * Bắt buộc nhập * Lấy dữ liệu từ danh sách Đơn vị tính (chỉ hiển thị *Tên đơn vị tính*), ngoại trừ giá trị có trạng thái = Không hoạt động và giá trị đã chọn tại trường *Đơn vị cơ bản* * Chỉ cho phép chọn 1 * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên đơn vị tính * Mặc định trống * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu |  |
| Gía trị quy đổi | textbox | Có | Có | * Bắt buộc nhập * Chỉ cho phép nhập số và dấu chấm. Giá trị có thể chứa phần thập phân với tối đa 2 chữ số sau dấu chấm, và dấu thập phân quy ước là dấu chấm * Không cho phép nhập khoảng trắng * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu * Mặc định trống |  |
| Đóng | Button | Có | không | Tắt màn hình khai báo và không lưu dữ liệu. |  |
| Lưu | Button | Có | không | Thao tác: Người dùng lưu cấu hình đã tạo/chỉnh sửa  Mô tả:   * + Phải thỏa tất cả trường ràng buộc.   + Có thông báo xác nhận   + Nhấn lưu để hoàn tất khai báo và lưu dữ liệu.   + Và tắt màn hình khai báo. |  |

**Lưu ý :**

* Nếu mã sku đã tồn tại trước đó, báo lỗi: *"Mã SKU đã tồn tại"*
* Nếu không nhập dữ liệu tại trường thông tin bắt buộc thì báo lỗi "[Tên trường] là bắt buộc." ở dưới mỗi trường dữ liệu.
* Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)"
* Nếu đạt số ký tự tối đa được phép nhập thì không được phép nhập tiếp
* Nếu giá trị quy đổi chưa đúng định dạng, báo lỗi "Giá trị không đúng định dạng."

### **AC\_US\_04 —  Chỉnh sửa sản phẩm**

**Note : Không làm**

Chỉnh sửa sp

**User story** : Là Head Officer tôi muốn chỉnh sửa sản phẩm

**Điều kiện**: [User có phân quyền thêm mới sản phẩm theo nhóm phân quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)

**Đường dẫn**: Dữ liệu nền → Sản phẩm → Danh sách sản phẩm → Edit

Các thông tin hiển thị tương tự màn hình tạo mới

Rule chỉnh sửa dựa trên [HO] Danh sách sản phẩm