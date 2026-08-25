|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Tài khoản người dùng cho phép tạo tài khoản để login portal HO và NPP;  Được phép gán TKTT cho các role từ Giám sát bán hàng trở lên; cho nhân viên kinh doanh được tạo đơn hàng và thao tác các màn hình khác theo phân quyền |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

# Thông tin chung

Link doc: [HO] Tài Khoản Người Dùng

**Hiện tại:** Chức năng [HO] Tài khoản người dùng hiện cho phép tạo tài khoản login Portal HO và NPP. Việc gán Tài khoản thị trường (TKTT) chỉ áp dụng cho các role từ Giám sát bán hàng (SS) trở lên: SD → RSM → ASM → SS. Nhân viên kinh doanh (Salesman) chưa được gán TKTT, dẫn tới không thể đăng nhập Portal HO.

# Nội dung thay đổi

**Mục đích:** Mở rộng vai trò TKTT xuống cấp Nhân viên kinh doanh, để Salesman có thể đăng nhập Portal HO, tạo đơn hàng và thao tác nghiệp vụ theo phân quyền — với phạm vi dữ liệu (data scope) được xác định qua salesman\_id liên kết thay vì qua Vùng/Khu vực.

* **Bước 1:** User chọn Loại tài khoản là Nhân viên kinh doanh-> Hệ thống render Selectbox chọn danh sách Nhân viên kinh doanh (Salesman) hợp lệ.
* **Bước 2:** User chọn một Salesman cụ thể -> Hệ thống kiểm tra rule tạo tài khoản khi lưu. Nếu hợp lệ, cho phép bấm **Lưu**.
* **Bước 3:** User bấm **Lưu** -> Hệ thống cập nhật bảng dữ liệu tài khoản `tbl_user` (lưu vết `salesman_id` liên kết) và ghi nhận vào log lịch sử: *“Tài khoản thị trường: [Dữ liệu cũ] -> [Dữ liệu mới]”*.
* **Bước 4:** Ở các phiên đăng nhập tiếp theo của tài khoản này, hệ thống dựa vào `salesman_id` để áp phân quyền dữ liệu tương ứng

**Tính năng:**

|  | **Phân hệ / Tính năng** | **Mã FR** | **Mô tả** |
| --- | --- | --- | --- |
| **1** | **Thêm mới / Chỉnh sửa TK** | * **AC\_US\_01.  Hiển thị 5 cấp TKTT & Loại trừ Vùng khi chọn TKTT** | Khi đã chọn TKTT → phạm vi dữ liệu lấy theo Vùng/khu vực của nhân viên đó → **ẩn** field Vùng. Khi xóa TKTT → **hiện lại** field Vùng và bắt buộc nhập.   * Trường "Vai trò TKTT" hiển thị 5 cấp theo Role của "Nhân viên kinh doanh". bổ sung cấp "Nhân viên kinh doanh" * Trường "Tài khoản thị trường" hiển thị Mã - tên nhân viên theo "Vai trò TKTT" được chọn |
| **2** | **Thêm mới / Chỉnh sửa TK** | * **AC\_US\_02.  Loại trừ Quyền NPP** | Quyền Nhà phân phối = quản lý theo NPP, không theo cây thị trường → **disable** Vai trò TKTT & TKTT. |
| **3** | **Phân quyền dữ liệu SFA** | * **AC\_US\_03.  Phân quyền salesman** | Nếu `salesman_id` trỏ tới role Nhân viên kinh doanh → data scope = dữ liệu do chính salesman đó phụ trách (route/khách hàng/đơn hàng của mình). |
| **4** | **Lịch sử tài khoản** | * **AC\_US\_04. Lịch sử** | Mọi thay đổi trường "Tài khoản thị trường" phải ghi log history dạng `[Dữ liệu cũ] -> [Dữ liệu mới]`. |
| **5** | **Import** | * **AC\_US\_05. Import** | Validate các điều kiện khi import tài khoản người dùng |

## **Mô tả tính năng**

### **AC\_US\_01 —  Ẩn/Hiện field "Vùng" theo trạng thái TKTT**

User Story: Là Admin HO, khi tôi gán tài khoản portal cho một nhân viên kinh doanh

**Logic điều khiển hiển thị:**

| Điều kiện | Field Vùng | Field NPP chăm sóc |
| --- | --- | --- |
| **Tài khoản thị trường** = rỗng | **Hiện** — Bắt buộc = **Có** | Hiện, load NPP theo Vùng |
| **Tài khoản thị trường** ≠ rỗng | **Ẩn** — Bắt buộc = **N/A** | Hiện, load NPP theo Vùng của nhân viên TKTT |

**Đặc tả chi tiết:**

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| **Vai trò tài khoản thị trường** | Selectbox oneChoice | Có | Không | * Trường "Vai trò TKTT" hiển thị 5 cấp theo Role của màn hình "Nhân viên kinh doanh". bổ sung cấp "Nhân viên kinh doanh"   + Giám đốc điều hành   + Giám đốc kinh doanh   + Trưởng phòng kinh doanh   + Quản lý kinh doanh   + Nhân viên kinh doanh * **Action:** Chọn 1 vai trò → Hệ thống **clear** giá trị trường "Tài khoản thị trường" (nếu có) và **reload** lại danh sách nhân viên theo Role tương ứng. * **Mặc định:** Không chọn dữ liệu nào. * **Xóa lựa chọn:** Bấm x → clear luôn trường "Tài khoản thị trường" phụ thuộc. |
| **Tài khoản thị trường** | Selectbox oneChoice | Có | Không | * Định dạng hiển thị: Mã nhân viên - Tên nhân viên (VD: NV001 - Nguyễn Văn A). Áp dụng cho cả item trong dropdown và tag đã chọn. * Tìm kiếm & Chọn: Cuộn hoặc nhập từ khóa để lọc theo Mã hoặc Tên nhân viên. Chọn 1 tài khoản. * Điều kiện enable: Trường bị disable khi chưa chọn "Vai trò TKTT". |
| **Vùng** | Selectbox Multi Choice (Tree) | Có | Có (điều kiện) | Giữ nguyên toàn bộ đặc tả cũ. **Bổ sung:** • **Trigger ẩn:** Khi User chọn giá trị tại trường "Vai trò Tài khoản thị trường" → Hệ thống **ẩn** khối field Vùng/Khu vực, đồng thời **clear** giá trị đang chọn (nếu có) và **bỏ ràng buộc bắt buộc**. • **Trigger hiện:** Khi User xóa giá trị tại trường "vai trò Tài khoản thị trường" (bấm x trên tag) → Hệ thống **hiện lại** field Vùng ở trạng thái **rỗng** và **bật lại** ràng buộc bắt buộc. • **Validation:** Trường hợp field Vùng đang hiển thị mà User bấm Lưu khi chưa chọn → thông báo: `Vui lòng chọn Vùng!` |

**Xử lý chiều ngược:**

* Trường hợp User đã chọn Vùng trước, sau đó chọn TKTT → Hệ thống Clear Vùng/Khu vực, ẩn field, giữ TKTT đã chọn.
* Trường hợp User chọn Vai trò TKTT xong remove Vai trò TKTT vừa chọn; Trường "Vai trò TKTT" rỗng => hiển thị field "Vùng" và data rỗng.

**Xử lý màn hình Chỉnh sửa:**

* B1: Khi mở màn hình, hệ thống hiển thị nhân viên đã chọn dù nhân viên active hoặc inactive.
  + Trường hợp nhân viên liên kết đã bị ngưng hoạt động → hiển thị giá trị mã -  tên nhân viên. Không có trong dropdown khi mở lại.
  + User bấm Lưu mà không chọn lại → chặn và báo lỗi: Tài khoản thị trường @Mã NV - @Tên NV không hoạt động, vui lòng kiểm tra lại!
* B2: Tài khoản đang có TKTT → mở lên Vùng đã ở trạng thái ẩn
* Sau B2 →B3: xóa Vai trò TKTT → Nhân viên được chọn ở TKTT cũng bị remove và  dữ liệu Vùng hiển thị bắt buộc chọn. Sau khi chọn và submit. Hệ thống lưu Vùng khu vực cho tài khoản này. Lưu dữ liệu lịch sử.

### **AC\_US\_02 — Disable TKTT khi chọn Quyền Nhà phân phối**

User Story: *Là Admin HO, khi tôi tạo tài khoản cho NPP, hệ thống không cho phép gán Tài khoản thị trường, vì hai mô hình phân quyền dữ liệu này loại trừ lẫn nhau.*

**Ma trận điều khiển (Control Matrix):**

| Radio Button chọn | Vai trò TKTT | Tài khoản thị trường | Vùng | NPP chăm sóc |
| --- | --- | --- | --- | --- |
| **Quyền HO** (mặc định) | Enable | Enable (phụ thuộc Vai trò) | **Theo AC\_US\_01** | Enable |
| **Quyền Nhà phân phối** | **Disable** | **Disable** | **Hiện — Bắt buộc** | Enable |

**Đặc tả chi tiết:**

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| **Quyền HO / Quyền Nhà Phân Phối** | Radio Button | Có | Có | Giữ nguyên đặc tả cũ. **Bổ sung Action:** • Chọn **Quyền Nhà phân phối** → Hệ thống **disable** đồng thời 2 trường "Vai trò TKTT" và "Tài khoản thị trường"; **clear** giá trị đang chọn của cả 2 trường; field Vùng (bắt buộc). • Chọn lại **Quyền HO** → **enable** lại "Vai trò TKTT"; trường "Tài khoản thị trường" giữ trạng thái disable cho tới khi chọn Vai trò. |

**Xử lý màn hình Chỉnh sửa:** Nếu tài khoản đang có salesman\_id mà User đổi sang Quyền NPP → hiển thị cảnh báo: Chuyển sang Quyền Nhà phân phối sẽ hủy liên kết Tài khoản thị trường @Mã NV. Bạn có muốn tiếp tục? → Đồng ý: set salesman\_id = NULL, ghi log history. Hủy: rollback radio button.

### **AC\_US\_04. Lịch sử tài khoản**

Bổ sung 2 trường vào danh sách **Thao tác** ghi nhận lịch sử:

| Trường dữ liệu | Dữ liệu cũ | Dữ liệu mới |
| --- | --- | --- |
| **Vai trò tài khoản thị trường** | `SM - Quản lý kinh doanh` | `SR - Nhân viên kinh doanh` |
| **Tài khoản thị trường** | `NV001 - Nguyễn Văn A` | `NV009 - Trần Thị B` |

### **AC\_US\_03 — Phân quyền dữ liệu SFA cho TKTT = Nhân viên kinh doanh**

**User Story:** *Là Nhân viên kinh doanh, tôi muốn đăng nhập Portal HO và chỉ thấy dữ liệu phân quyền trên các màn hình khách hàng/đơn hàng/... thuộc phạm vi mình phụ trách, để tạo đơn hàng và xử lý nghiệp vụ.*

**Logic áp dụng Data Scope tại thời điểm đăng nhập:**

| Điều kiện tài khoản | Nguồn xác định phạm vi dữ liệu |
| --- | --- |
| salesman\_id = NULL | Theo danh sách **Vùng / Khu vực** khai báo trên màn hình Tài khoản người dùng |
| salesman\_id ≠ NULL, Role NV = CEO (Giám đốc điều hành) | Toàn quốc, Theo phân quyền TKTT đã xử lý cho role SD ([HO & NPP] Phân quyền dữ liệu) |
| salesman\_id ≠ NULL, Role NV = SD (Giám đốc kinh doanh) | Các Vùng/khu vực của nhân viên được khai báo trên màn hình "Nhân viên kinh daonh"  Theo phân quyền TKTT đã xử lý cho role RSM ([HO & NPP] Phân quyền dữ liệu) |
| salesman\_id ≠ NULL, Role NV = SH (Sale head - Trưởng phòng kinh doanh) | Các Vùng/ Khu vực của nhân viên được khai báo trên màn hình "Nhân viên kinh daonh"  Theo phân quyền TKTT đã xử lý cho role ASM ([HO & NPP] Phân quyền dữ liệu) |
| salesman\_id ≠ NULL, Role NV = SM (Sale Manager - Quản lý kinh doanh) | Các Vùng/ khu vực của nhân viên được khai báo trên màn hình "Nhân viên kinh daonh"  Theo phân quyền TKTT đã xử lý cho role SS ([HO & NPP] Phân quyền dữ liệu) |
| salesman\_id ≠ NULL, **Role NV = SR (Nhân viên kinh doanh)** | **Dữ liệu do chính nhân viên kinh doanh tạo hoặc được assigned**  Ví dụ: hách hàng/Điểm bán trong tuyến (route) được gán, Đơn hàng do salesman tạo, Chỉ tiêu (KPI) của salesman  (Link tài liệu [Phân quyền SFA cho Nhân viên kinh doanh](https://kb.finviet.com.vn/pages/viewpage.action?pageId=99236849#Danhs%C3%A1chm%C3%A0nh%C3%ACnhDMSVigo-Ph%C3%A2nquy%E1%BB%81nSFA=Nh%C3%A2nvi%C3%AAnkinhdoanh)) |

* Trường hợp nhân viên liên kết bị Inactive → Vẫn đăng nhập và sử dụng bình thường

### **AC\_US\_05. Import**

| Tên Trường | Loại dữ liệu | Bắt buộc? | Mô tả bổ sung |
| --- | --- | --- | --- |
| **Vai trò tài khoản thị trường** | Text | Không | Thêm giá trị SR (Nhân viên kinh doanh)  Validation: Vai trò tài khoản thị trường dòng n nhập không đúng dữ liệu, vui lòng kiểm tra lại! |
| **Tài khoản thị trường** | Text | Không | **Bỏ** rule cũ *"Vui lòng chọn các tài khoản thị trường có chức vụ không phải nhân viên bán hàng"*. **Rule mới:** • TH1: Không tồn tại/không hoạt động → `Tài khoản thị trường dòng n không tồn tại hoặc không hoạt động, vui lòng kiểm tra lại!` • TH2: Chức vụ không thuộc `CEO; SD; SH; SM; SR` → `Tài khoản thị trường dòng n có chức vụ không hợp lệ, vui lòng kiểm tra lại!` • TH3: Trùng trong file import → `Tài khoản thị trường dòng n có xuất hiện tại dòng n1, n2..., vui lòng kiểm tra lại!` • TH5: Loại nhóm quyền = `NPP` mà có nhập TKTT → `Dòng n: Tài khoản thị trường chỉ áp dụng cho Loại nhóm quyền HO, vui lòng kiểm tra lại!` |
| **Vùng**  **Khu vực** | Text | Có (điều kiện) | **Rule mới:** Hệ thống bắt buộc **khi** cột "Tài khoản thị trường" để trống. Nếu có TKTT mà vẫn nhập Vùng; khu vực → bỏ qua giá trị Vùng; khu vực, không báo lỗi. |