|  |  |
| --- | --- |
| Issue Link | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fDMS90-31 |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Điều chỉnh 1 số thông tin ở tính năng "Nhân viên bán hàng (cũ)" theo request của Vigo |
| Document version | RedV1.0.0 |
| Document status | trueBlueDOING |
| Document owner |  |
| Chage History | 2 |

Page Content

## **1/ Lịch sử tài liệu**

| **Version** | **Publish** | **Changed by** | **Mô tả** |
| --- | --- | --- | --- |
| 1.0 | 21/07/2026 | Vu | n/a |

## **2/ Thông tin chung**

**Tiêu đề** : Tài liệu mô tả màn hình  quản lý nhân viên  . (Vigo)

**Nội dung thay đổi** : Điều chỉnh 1 số từ ngữ ở mục "Chức vụ" , và thứ tự các field khi input thông tin nhân viên

|  | Hiện tại | Thay đổi (Vigo) |
| --- | --- | --- |
| **Nhân viên bán hàng** | Tên hiện tại là "Nhân viên bán hàng" | Đổi thành "Nhân viên kinh doanh" |
| **Phân cấp chức vụ** | Giám đốc toàn quốc → Quản lý vùng → Quản lý khu vực → Giám sát bán hàng → Nhân viên bán hàng | Giám đốc điều hành (CEO) → Giám đốc kinh doanh (Sale director) →  Trưởng phòng kinh doanh (Sale head) → Quản lý kinh doanh (Sale manager) → Nhân viên kinh doanh (Sale rep) |
| **Nhóm quyền** | RSM → Sale director → ASM → Supervisor → Saleman | CEO > Sale Director>  Sale Head > Sale manager> Sale rep |
| **Vùng/Khu vực** | User nhập  Vùng/Khu vực → Quản lý trực tiếp | User nhập Quản lý trực tiếp → Vùng/Khu vực |

**Dựa trên Doc Core DMS** : [HO] Quản lý nhân viên DMS và Định nghĩa cây Salesforce 

**Đường dẫn :** Dữ liệu nền → Kinh doanh → Nhân viên kinh doanh

**3/ Tính năng**

|  | **Tính năng** | **Mã FR** | **Mô tả** |
| --- | --- | --- | --- |
| **1** | **Danh sách nhân viên** | **AC\_US\_01** | Thay đổi thông tin ở Filter theo "Chức vụ" |
| **2** | **Xem chi tiết nhân viên** | **AC\_US\_02** | Thông tin "Quản lý trực tiếp" đưa lên trước trường "Vùng" |
| **3** | **Thêm mới nhân viên** | **AC\_US\_03** | Thay đổi thông tin  "Chức vụ" , "Nhóm quyền" .... |

## **4/ Mô tả tính năng**

**AC\_US\_01 —  Danh sách nhân viên kinh doanh ( Nhân viên bán hàng cũ )**

**User story** : Là Head Officer tôi muốn xem danh sách nhân viên kinh doanh

**Điều kiện**: [User có phân quyền xem](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)danh sách nhân viên

**Đường dẫn**: Dữ liệu nền → Knh doanh → Nhân viên kinh doanh

| STT | Trường thông tin | **Loại dữ liệu/Loại field** | Cho phép thao tác | Bắt buộc | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| **Tìm kiếm** | | | | | |
| **1** | **Tìm kiếm theo** | Textbox | Có | Không | Không có gì thay đổi |
| **2** | **Ngày vào làm** | Date picker | Có | Không | Không có gì thay đổi |
| **3** | **Chức vụ**  **(New)** | Multi select -Dropdownlist | Có | Không | * Mặc định không có dữ liệu. * Dữ liệu lấy theo mặc định Chức vụ nhân viên của Vigo * Chọn 1 hoặc nhiều bao gồm :    + Giám đốc điều hành   + Giám đốc kinh doanh   + Trưởng phòng kinh doanh   + Quản lý kinh doanh   + Nhân viên kinh doanh   Placeholder : Chức vụ |
| **4** | **Trạng thái** | Dropdownlist | Có | Không | Không có gì thay đổi |
| **5** | **Tình trạng gán tuyến** | Dropdownlist | Có | Không | Không có gì thay đổi |
| **6** | **Làm mới** | Button | Có | Không | Không có gì thay đổi |
| **7** | **Tìm kiếm** | Button | Có | Không | Không có gì thay đổi |
| **Danh sách nhân viên → Không có gì thay đổi** | | | | | |

### **AC\_US\_02 —  Xem thông tin chi tiết Nhân viên**

**User story** : Là Head Officer tôi muốn xem thông tin nhân viên kinh doanh

**Điều kiện**: [User có phân quyền xem](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)danh sách nhân viên

**Đường dẫn** : Dữ liệu nền → Kinh doanh → Nhân viên kinh doanh → Hyperlink Tên nhân viên

**Thông tin nhân viên**

**Nội dung thay đổi :**

* Thông tin "Quản lý trực tiếp" đưa lên trước trường "Vùng"

### **AC\_US\_03 —  Thêm mới nhân viên**

**User story** : Là Head Officer tôi muốn thêm mới nhân viên

**Điều kiện**: [User có phân quyền xem](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)thêm mới nhân viên

**Đường dẫn** : Dữ liệu nền → Kinh doanh → Nhân viên kinh doanh → Tạo mới

|  | Trường thông tin | Loại dữ liệu | Cho phép thao tác | Bắt buộc | Chỉnh sửa | Mô tả |
| --- | --- | --- | --- | --- | --- | --- |
| Thông tin chung (không thay đổi ) | | | | | | |
| **Thông tin chức vụ** | | | | | | |
| 16 | Kênh bán hàng | Dropdownlist | Có | Không | Được phép | * Mặc định không có dữ liệu. * Dữ liệu lấy lấy danh sách kênh bán hàng đang active trên hệ thống * Người dùng tìm kiếm và chọn 1 theo dropdownlist. * Khi kênh bán hàng inactive thì: Xem dữ liệu vẫn hiển thị kênh bán hàng đã inactive. Sửa dữ liệu thì không hiển thị kênh bán hàng đã inactive.   Placeholder : Chọn kênh bán hàng |
| 17 | \*Chức vụ  **(New)** | Dropdownlist | Có | Có | Được phép | * Mặc định không có dữ liệu. * Lấy dữ liệu mặc định cho Vigo gồm 5 option :   + Giám đốc điều hành   + Giám đốc kinh doanh   + Trưởng phòng kinh doanh   + Quản lý kinh doanh   + Nhân viên kinh doanh * Người dùng tìm kiếm và chọn 1 theo dropdownlist. * Bỏ trống báo lỗi "Tên trường là bắt buộc"   Placeholder : Chọn chức vụ |
| 18 | \*Nhóm quyền  **(New)** | Dropdownlist | Có | Có | Được phép | * Mặc định không có dữ liệu. * Lấy dữ liệu từ SSO với role còn hoạt động và đổi tên tương ứng:   + CEO   + Sale director   + Sale head   + Sale manager   + Sale rep * Người dùng tìm kiếm và chọn 1 theo dropdownlist. * Bỏ trống báo lỗi "Tên trường là bắt buộc"   Placeholder : Chọn nhóm quyền |
| 19 | \*Quản lý trực tiếp  **(New)** | Dropdownlist | Có | Có | Được phép | * Mặc định không có dữ liệu. * Người dùng tìm kiếm; chọn 1 theo dropdownlist * Bỏ trống báo lỗi "Tên trường là bắt buộc" * Lọc Quản lý theo chức vụ:   + Nếu Chức vụ chọn CEO - không hiện trường này.   + Nếu Chức vụ chọn SALE DIRECTOR - hiện tất cả nhân viên có Chức vụ CEO   + Nếu Chức vụ chọn SALE HEAD - hiện tất cả nhân viên có Chức vụ SALE DIRECTOR   + Nếu Chức vụ chọn SALE MANAGER - hiện tất cả nhân viên có Chức vụ SALE HEAD   + Nếu Chức vụ chọn SALE REP - hiện tất cả nhân viên có Chức vụ SALE MANAGER   Placeholder : Chọn quản lý trực tiếp  Đổi vị trí trường thông tin này, đưa lên trước trường "Vùng" |
| 19.1 | \*Vùng | Selectbox | Có | Có | Được phép | * Trường này chỉ có dữ liệu khi chọn thông TIN Quản lý trực tiếp   + Trường hợp chưa chọn quản lý trực tiếp khi chọn vào trường này sẽ hiển thị thông báo: Vui lòng chọn Quản lý trực tiếp. * Cho phép nhập tìm kiếm Vùng và Khu vực * Hoặc chọn theo cây Vùng/Khu vực có sẵn; Chọn Vùng sổ ra Khu vực * Cho phép chọn 1 hoặc nhiều dữ liệu * Chỉ SALE DIRECTOR/SALE HEAD mới được chọn trường này; còn tất cả chức vụ còn lại hidden trường này. * Nếu người dùng chọn chức vụ là SALE DIRECTOR thì cho chọn dữ liệu Vùng; không cho chọn dữ liệu Khu vực * Ngược lại chọn chức vụ là SALE HEAD   + Thì không cho chọn dữ liệu Vùng; cho chọn dữ liệu Khu vực   + Chỉ hiển thị các khu vực thuộc vùng quản lý của Quản lý trực tiếp được chọn ở trường "Quản lý trực tiếp" * Bỏ trống báo lỗi "Tên trường là bắt buộc"   Placeholder : Chọn Vùng/Khu vực |
| 22 | Trạng thái | Switch button | Có | Không | Được phép | Không có gì thay đổi |
| 23 | Lưu | Button | Có | Không |  | Không có gì thay đổi |
| 25 | Đóng | Button | Có | Không |  | Không có gì thay đổi |