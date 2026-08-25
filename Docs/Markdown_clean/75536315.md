|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Màn hình này cho phép người dùng có thẩm quyền xem xét, phê duyệt hoặc từ chối các đơn đăng ký tham gia chương trình trưng bày. Màn hình  dựa trên "Quy trình duyệt" đang hoạt động áp để xử lý các yêu cầu theo luồng nhiều cấp cho người dùng thuộc nhóm quyền của quy trình duyệt.  Người dùng không thuộc quy trình duyệt được phân quyền duyệt/ cập nhật/ hủy trên màn hình khi thao tác xử lý theo logic cũ không thay đổi |
| Document version |  |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Mục đích:

* Màn hình này cho phép người dùng có thẩm quyền xem xét, phê duyệt hoặc từ chối các đơn đăng ký tham gia chương trình tích lũy. Màn hình  dựa trên "Quy trình duyệt" đang hoạt động áp để xử lý các yêu cầu theo luồng nhiều cấp cho người dùng thuộc nhóm quyền của quy trình duyệt.
* Người dùng không thuộc quy trình duyệt được phân quyền duyệt/ cập nhật/ hủy trên màn hình khi thao tác xử lý theo logic cũ không thay đổi

Quyền mới

# Nội dung cập nhật

**Phân quyền mới: tách quyền Hủy, Phê duyệt**

* **Tách quyền PHÊ DUYỆT để xử lý hiển thị button Phê duyệt**
* **Tách quyền HỦY để xử lý hiển thị button Hủy**

**Thêm trạng thái trung gian, xem chi tiết lịch sử cập nhật trạng thái trung gian**

**Tìm kiếm theo bộ lọc nâng cao**

**Export danh sách có áp dụng quy trình duyệt cho màn hình**

**Xử lý thao tác người dùng khi có quyền trong quy trình duyệt**

## Màn hình Danh sách đăng ký tích lũy

1/ Hiện tại

2/ UI mới thay đổi theo phân quyền thao tác Hủy; Phê duyệt như sau:

Tách quyền thao tác - là quyền được phân quyền từ màn hình Nhóm quyền ( [[HO][HT] Chức năng phân quyền - Nhóm quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)) trên màn hình (Quyền này gọi là quyền lớp 1):

* Quyền "Phê duyệt" sẽ được nhìn thấy button  để thao tác. Hover chuột hiển thị "Phê duyệt"
  + Click icon hiển thị popup:
  + Chọn "Đồng ý" - [Theo logic **Duyệt**](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028748): Duyệt và chuyển trạng thái đăng ký của điểm bán sang Đã duyệt đăng ký
  + Chọn Hủy tắt popup và không thay đổi.
* Quyền "Hủy" sẽ được nhìn thấy button  để thao tác.  Hover chuột hiển thị "Từ chối duyệt"
  + Click icon hiển thị popup:
  + **Chọn "Đồng ý" - [Theo logic Từ chối](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028748):**Onclick nhập lý do từ chối (bắt buộc nhập): validate sl ký tự <=100.
  + Chọn Hủy tắt popup và không thay đổi

Lưu ý: Về Phân quyền Phê duyệt/ Hủy/ Cập nhật của màn hình không thay đổi với những trường hợp **Người dùng không thuộc các Nhóm quyền trong quy trình duyệt đang hoạt động** của màn hình

Khái niệm khác:

* **Trạng thái gốc:** Trạng thái chính của điểm bán trong hệ thống (ví dụ: Chờ duyệt, Đã duyệt, Từ chối duyệt).
* **Quy trình duyệt:** Một tập hợp các cấp duyệt được định nghĩa trước để xử lý một đối tượng từ trạng thái này sang trạng thái khác. [[HO][HT] Quy trình duyệt](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596)
* **Trạng thái trung gian:** Một thông tin bổ sung, thể hiện trạng thái của một đối tượng (điểm bán đăng ký tích lũy) bên trong một quy trình duyệt đang hoạt động. Ví dụ: Đang ở cấp 2, đợi "ASM" xử lý.

### Quy trình duyệt liên quan

#### **Trạng thái trung gian**

Trên lưới danh sách thêm cột "**Trạng thái trung gian**" trên Màn hình "[Danh sách đăng ký tích lũy](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53047466)"

* Vị trí: Sau cột Trạng thái đăng ký, trước cột Tuyến
* Kiểu dữ liệu:  kiểu text
* Nội dung hiển thị:

  + Nếu một điểm bán đang nằm trong một quy trình duyệt đang hoạt động, ô trong cột "Trạng thái trung gian" phải hiển thị một siêu liên kết (hyperlink) với dòng chữ "Xem chi tiết"
  + Nếu một điểm bán không nằm trong bất kỳ quy trình duyệt nào đang hoạt động, ô trong cột "Trạng thái trung gian" sẽ được để trống
* Xem lịch sử cập nhật các trạng thái trung gian: click vào hyperlink hiển thị popup "Chi tiết lịch sử trạng thái trung gian"
* Người cập nhật: hiển thị thông tin người cập nhật gần nhất theo Chi tiết lịch sử cập nhật trạng thái trung gian (Sự kiện mới nhất theo cấp cao nhất trong quy trình xử lý)
* Ngày cập nhật: hiển thị thông tin thời gian cập nhật gần nhất theo Chi tiết lịch sử cập nhật trạng thái trung gian (Sự kiện mới nhất theo cấp cao nhất trong quy trình xử lý)

#### **Bộ lọc nâng cao**

  

Trên vùng lọc dữ liệu thêm "Bộ lọc nâng cao" dạng hyperlink khi có từ một Quy trình duyệt đang hoạt động trên màn hình. Ngược lại Ẩn hyperlink  "Bộ lọc nâng cao"

**Giao diện:**

**Mô tả: [Bộ lọc nâng cao](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533072#id-[HO][HT]%C4%90%C4%83ngk%C3%BDtr%C6%B0ngb%C3%A0y-B%E1%BB%99l%E1%BB%8Dcn%C3%A2ngcao)**

Chi tiết

### Popup: Chi tiết lịch sử trạng thái trung gian

Mục đích: Cung cấp một cửa sổ xem chi tiết, minh bạch về toàn bộ quá trình duyệt của một bản ghi cụ thể. Click hyperlink "Xem chi tiết" →  hiển thị popup "Chi tiết lịch sử trạng thái trung gian". 

1. **Kích hoạt Popup:**

   * Nhấp chuột vào hyperlink "Xem chi tiết" phải mở ra một cửa sổ popup (modal).
   * Popup phải có tiêu đề là **"Chi tiết lịch sử trạng thái trung gian"**.
   * Popup phải có nút "Đóng" hoặc biểu tượng (X) để người dùng có thể đóng lại.
2. **Cấu trúc Hiển thị Dữ liệu trong Popup:**

   * Dữ liệu trong popup được trình bày dưới dạng một lưới danh sách gồm 2 level.
   * **Logic gom nhóm:** Dữ liệu phải được gom nhóm theo **"Mã - Tên quy trình"**. Mỗi nhóm quy trình sẽ hiển thị toàn bộ lịch sử các bước thuộc quy trình đó. Điều này giải quyết trường hợp một điểm bán đăng ký chương trình có thể áp dụng đồng thời nhiều quy trình (ví dụ: Quy trình Phê duyệt điểm bán đăng ký mới và Quy trình từ chối duyệt đăng ký).
3. **Các cột trong Lưới Lịch sử:** Lưới hiển thị bao gồm các cột mô tả bên dưới
4. **Sắp xếp Dữ liệu:**

   * Các nhóm quy trình được sắp xếp theo thời gian cập nhật của quy trình đó.
   * Bên trong mỗi nhóm quy trình, các bản ghi lịch sử phải được sắp xếp theo Ngày duyệt giảm dần (hành động gần nhất hiển thị ở trên cùng, trường hợp có nhiều sự kiện cập nhật cùng thời điểm thì sắp xếp theo cấp cao nhất lên trên cùng).

Mô tả:

| **Tên cột** | **Kiểu dữ liệu** | **Mô tả** |
| --- | --- | --- |
| **Bộ lọc theo Thời gian** | Date Range Picker | * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn. Mặc định ngày 7 ngày kể từ ngày hiện tại (ví dụ hiện tại ngày n; từ ngày n-6; đến ngày n)  * Đến Ngày >= Từ Ngày * Đến Ngày - Từ Ngày <= 30 ngày * Có thể chọn bất kỳ khoảng thời gian nào, miễn là  Đến Ngày - Từ Ngày <= 30 ngày (Lượng data history sẽ được lưu trữ từ 1-3 năm tùy theo hợp đồng từng công ty) |
| **Nút "Tìm kiếm"** | Button | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng nhập ngày để lọc 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách 3. **Hiển thị kết quả:** Danh sách sẽ Cập nhật và hiển thị  * Mặc định: Mặc định là ngày hiện tại.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Lưới "Lịch sử cập nhật"** | Table / Grid |  |
| **Level 1: mặc định Collapse tất cả**  **Mã - Tên quy trình:**  Hiển thị mã và tên của quy trình duyệt được áp dụng. Ví dụ: AWF20250901001 - Quy trình Phê duyệt đăng ký chương trình   * Gom nhóm theo "Mã - Tên quy trình". Mỗi nhóm quy trình sẽ hiển thị toàn bộ lịch sử các bước thuộc quy trình đó * Hiển thị danh sách các bản ghi:     + Bên trong mỗi nhóm quy trình, các bản ghi lịch sử phải được sắp xếp theo Ngày duyệt giảm dần (hành động gần nhất hiển thị ở trên cùng, trường hợp có nhiều sự kiện cập nhật cùng thời điểm thì sắp xếp theo cấp cao nhất lên trên cùng).   + Không có dữ liệu: Hiển thị dòng chữ khi không tìm thấy bản ghi nào: "Không có lịch sử Cập nhật trong khoảng thời gian đã chọn." | | |
| **Level 2: Khi chọn expand sẽ hiển thị lưới danh sách theo quy trình đã chọn gồm** | | |
| **#** |  | Số thứ tự |
| **Cấp duyệt** | Data Column | Hiển thị cấp mà tại đó hành động được thực hiện (ví dụ: Cấp 1, Cấp 2). |
| **Hành động** | Data Column | 1. Phê duyệt 2. Từ chối 3. Tự động duyệt   Hiển thị 1 trong 3 hành động tương ứng khi click vào button/icon xử lý trên màn hình hoặc hệ thống tự động duyệt theo cấu hình. |
| **Trạng thái trung gian** | Data Column | Hiển thị trạng thái của điểm bán đăng ký chương trình **sau khi** hành động được thực hiện.   * + Ví dụ 1: Đang ở cấp 2, đợi "ASM" xử lý.   + Ví dụ 2: Trạng thái trung gian = trạng thái gốc (khi quy trình kết thúc và hàm xử lý gốc được gọi để cập nhật trạng thái chính của điểm bán đăng ký chương trình). |
| **Lý do** | Data Column | Hiển thị nội dung lý do mà người dùng đã nhập hoặc chọn từ dữ liệu chung khi thực hiện hành động "Từ chối" hoặc "Hủy". Ô này có thể để trống nếu không có lý do. |
| **Người cập nhật** | Data Column | * Hiển thị thông tin người thực hiện theo định dạng: Mã người cập nhật - Tên người cập nhật. * Nếu hành động là do hệ thống tự động duyệt, hiển thị là System Admin. |
| **Thời gian cập nhật** | Data Column | Thời gian cập nhật dd/mm/yyyy hh:mm:ss |
| Đóng và dấu x | Button đóng | Đóng popup và quay về màn hình trước đó |

### Export danh sách điểm bán đăng ký chương trình

Khi click button Export trên màn hình, template export bổ sung các trường dữ liệu như mô tả bên dưới.

* Dữ liệu trong file Excel phải tuân theo chính xác các điều kiện đang được áp dụng trên bộ lọc của màn hình tại thời điểm nhấn nút.

  + File export sẽ có cấu trúc cột động. Ngoài các cột thông tin cơ bản của điểm bán đăng ký chương trình (không thay đổi các dữ liệu đã có, chỉ bổ sung các cột động như bên dưới), hệ thống sẽ tự động tạo ra các nhóm cột tương ứng với mỗi quy trình duyệt mà điểm bán đăng ký chương trình đó đang áp dụng
  + ví trí: sau cột "Trạng thái" và trước cột "Tuyến nhân viên"
  + Template:
  + Nếu có N điểm bán đăng ký chương trình, và trong N điểm bán đăng ký chương trình có áp dụng tổng cộng **X  quy trình duyệt (quy trình đang hoạt động)**thì Template export sẽ hiển thị động **X cụm thông tin như mô tả**, thứ tự ngẫu nhiên.
* Những điểm bán đăng ký chương trình không có dữ liệu của quy trình thì hiển thị trống.
* Không có bất kỳ một quy trình duyệt nào đang hoạt động áp dụng cho màn hình → Khi export theo template và logic gốc - [HO] Đăng ký tích lũy

Hiển thị như sau:

| **Tên cột** | **Kiểu dữ liệu** | **Mô tả** |
| --- | --- | --- |
| **[Tên quy trình]** | Data Column | Label: [Tên quy trình] hiển thị động các quy trình đang áp dụng cho bản ghi, thứ tự hiển thị ngẫu nhiên nếu có nhiều quy trình trong file export  Lấy thông tin Cấp duyệt từ bản ghi lịch sử có Ngày cập nhật mới nhất của các điểm bán đăng ký chương trình có **sự kiện gần nhất**trong quy trình này. |
| **[Tên quy trình] - Hành động** | Data Column | Lấy thông tin Hành động từ bản ghi lịch sử có Ngày cập nhật mới nhất của điểm bán đăng ký chương trình có **sự kiện gần nhất** trong quy trình này. |
| **[Tên quy trình] -Trạng thái trung gian** | Data Column | Lấy thông tin Trạng thái trung gian từ bản ghi lịch sử có Ngày cập nhật mới nhất của điểm bán đăng ký chương trình có **sự kiện gần nhất** trong quy trình này. |
| **[Tên quy trình] -Lý do** | Data Column | Lấy thông tin Lý do từ bản ghi lịch sử có Ngày cập nhật mới nhất của điểm bán đăng ký chương trình có **sự kiện gần nhất** trong quy trình này.  Nếu không có lý do hiển thị rỗng. |
| **[Tên quy trình]-Người cập nhật** | Data Column | Lấy thông tin Người cập nhật (Mã - Tên) từ bản ghi lịch sử có Ngày duyệt mới nhất của điểm bán đăng ký chương trình có **sự kiện gần nhất** trong quy trình này. |
| **[Tên quy trình]-Ngày cập nhật** | Data Column | Lấy thông tin Ngày cập nhật (dd/mm/yyyy hh:mm:ss) từ bản ghi lịch sử có Ngày duyệt mới nhất của điểm bán đăng ký chương trình có **sự kiện gần nhất** trong quy trình này. |
| Tương tự hiển thị tất cả các quy trình đang áp dụng theo dữ liệu export của template   * Nếu template export có N điểm bán đăng ký chương trình, và trong N điểm bán đăng ký chương trình có áp dụng tổng cộng X  quy trình duyệt (quy trình đang hoạt động) thì Template export sẽ hiển thị động X cụm thông tin như mô tả ở trên, thứ tự ngẫu nhiên. * Những điểm bán đăng ký chương trình không có dữ liệu của quy trình thì hiển thị trống. * Không có bất kỳ một quy trình duyệt nào đang hoạt động áp dụng cho màn hình → Khi export theo template và logic gốc -  [HO] Đăng ký tích lũy | | |
| Giả sử trong danh sách export có 2 điểm bán đăng ký chương trình:   * **Điểm bán A:** Chỉ tham gia "Quy trình Phê duyệt đăng ký chương trình", lần xử lý gần nhất là ở Cấp 2. * **Điểm bán B:** Tham gia cả "Quy trình Phê duyệt đăng ký chương trình" (gần nhất ở Cấp 1) và "Quy trình từ chối duyệt đăng ký chương trình" (gần nhất ở Cấp 1).  |  |  | **[Tên quy trình 1]** | **[Tên quy trình 1] - Hành động** | **[Tên quy trình 1] -Trạng thái trung gian** | **[Tên quy trình 1]- Lý do** | **[Tên quy trình 1]- Người cập nhật** | **[Tên quy trình 1]- Ngày cập nhật** | **[Tên quy trình 2]** | **[Tên quy trình 2] - Hành động** | **[Tên quy trình 2] -Trạng thái trung gian** | **[Tên quy trình 2]- Lý do** | **[Tên quy trình 2]- Người cập nhật** | **[Tên quy trình 2]- Ngày cập nhật** | | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | | **Điểm bán A** | ... | Cấp 2 | Phê duyệt | Đang ở cấp 3, đợi "Admin HO" xử lý | (trống) | Mã nhân viên - Tên nhân viên | dd/mm/yyyy hh:mm:s | (trống) | (trống) | (trống) |  | (trống) | (trống) | | **Điểm bán B** | ... | Cấp 3 | Từ chối | Đang ở cấp 2, đợi "ASM, SD" xử lý | Lý do 1 | Mã nhân viên - Tên nhân viên | dd/mm/yyyy hh:mm:s | Cấp 1 | Phê duyệt | Đang ở cấp 2, đợi "ASM, SD" xử lý | (trống) | Mã nhân viên - Tên nhân viên | dd/mm/yyyy hh:mm:s | | | |

## **Quy trình và xử lý chung**

### Xử lý chung

Lỗi

Để đảm bảo an toàn và đúng vai trò, hệ thống phải luôn kiểm tra **hai lớp phân quyền** một cách độc lập:

1. **Lớp 1: Quyền theo các nhóm quyền thuộc Quy Trình duyệt:**

   * Người dùng này thuộc phân quyền được phép tham gia vào bước duyệt hiện tại của quy trình hay không?
   * **Xác định bởi:** Cấu hình Nhóm quyền trong màn hình "Thêm mới/Chỉnh sửa Quy trình duyệt".
   * **Tác dụng:** Dựa vào Quy trình xử lý ([Quy trình duyệt nhiều cấp](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Quytr%C3%ACnhduy%E1%BB%87tnhi%E1%BB%81uc%E1%BA%A5p)) Quyết định việc người dùng có **nhìn thấy** bộ icon xử lý của quy trình duyệt (Phê duyệt, Từ chối, cập nhật trạng thái) hay không.
2. **Lớp 2: Quyền Gốc (Base Permission):**

   * "Người dùng này có quyền thực hiện hành động gốc trên màn hình này không?
   * **Xác định bởi:** Hệ thống phân quyền vai trò (Role) cơ bản của toàn bộ DMS.  [[HO][HT] Chức năng phân quyền - Nhóm quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544)
   * **Tác dụng:** Quyết định việc người dùng có **thực sự thực thi thành công** hành động cuối cùng (khi Phê duyệt ở cấp cuối, Từ chối cấp đầu tiên hoặc Từ chối có Trạng thái khi Từ chối của quy trình) hay không.

**Xung đột dữ liệu khi:**

1. **Kiểm tra ban đầu**:
   1. **Khi nào:**Trước khi xác nhận thực hiện bất kỳ hành động nào.
   2. **Logic:**Hệ thống phải kiểm tra xem 
      * Kiểm tra xem người dùng đang đăng nhập có thuộc Nhóm quyền được cấu hình để xử lý ở cấp duyệt hiện tại của bản ghi đó hay không.
        + **Nếu người dùng không thuộc nhóm quyền:**server sẽ từ chối yêu cầu và trả về lỗi "Bạn không có quyền thực hiện hành động này." Tắt popup và reload lại màn hình khi đó icon xử lý của người dùng sẽ ẩn trên các bản ghi. Quy trình dừng lại.
      * Trạng thái chính của điểm bán trong CSDL có còn là Trạng thái áp dụng hay không (ví dụ "Chờ duyệt").
        + **Nếu trạng thái đã thay đổi:**Dừng hành động và hiển thị thông báo lỗi: "Bản ghi này đã được xử lý bởi một người dùng khác. Vui lòng tải lại trang." **Tắt popup và tải lại màn hình**
2. **Người dùng có Quyền Lớp 1 nhưng không có Quyền Lớp 2:**

Đây là các lỗi xảy ra khi người dùng có quyền trong quy trình nhưng thiếu quyền gốc của màn hình.

* + **Tình huống A: Thiếu quyền ở bước cuối cùng (Quyền Phê duyệt)**
    - **Hiển thị thông báo:**"Bạn có quyền xử lý trong quy trình này, nhưng không có quyền gốc để Phê duyệt đăng ký Điểm bán.  Vui lòng liên hệ quản trị viên."
  + **Tình huống B: Thiếu quyền khi Từ chối (Quyền Hủy)**
    - **Hiển thị thông báo:**"Bạn có quyền xử lý trong quy trình này, nhưng không có quyền gốc để Từ chối duyệt đăng ký Điểm bán.  Vui lòng liên hệ quản trị viên."

### Quy trình chung

Tham khảo: [Quy trình chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533070#id-[HO][HT]Danhs%C3%A1ch%C4%91i%E1%BB%83mb%C3%A1n-Quytr%C3%ACnhchung)

Mô tả quy trình:

Một bản ghi (ví dụ: một Điểm bán đăng ký chương trình) đang ở trong một quy trình duyệt đang hoạt động. Người dùng hiện tại nhìn thấy bộ icon/ button xử lý của quy trình.

|  |  |  |
| --- | --- | --- |
| 1 | Người dùng | Người dùng nhấn vào icon Phê duyệt hoặc Hủy trên giao diện. Thực hiện Đồng ý hoặc Từ chối trên giao diện hiển thị → Trình duyệt gửi một yêu cầu đến server kèm theo mã bản ghi và hành động tương ứng. |
| 2 | Hệ thống | **Kiểm tra Xung đột Dữ liệu**   * + **Khi nào:**Trước khi xác nhận thực hiện bất kỳ hành động nào.   + **Logic:**Hệ thống phải kiểm tra xem      - Kiểm tra xem người dùng đang đăng nhập có thuộc Nhóm quyền được cấu hình để xử lý ở cấp duyệt hiện tại của bản ghi đó hay không.       * **Nếu người dùng không thuộc nhóm quyền:**server sẽ từ chối yêu cầu và trả về lỗi "Bạn không có quyền thực hiện hành động này." Tắt popup và reload lại màn hình khi đó icon xử lý của người dùng sẽ ẩn trên các bản ghi. Quy trình dừng lại. |
| 3 | Hệ thống | Kiểm tra Trạng thái chính của điểm bán trong CSDL có còn là Trạng thái áp dụng hay không (ví dụ "Chờ duyệt").   * + **Nếu trạng thái đã thay đổi:**Dừng hành động và hiển thị thông báo lỗi: "Bản ghi này đã được xử lý bởi một người dùng khác. Vui lòng tải lại trang." **Tắt popup và tải lại màn hình**   + **Nếu hợp lệ:**Phân loại kết quả xử lý - Theo [Quy trình xử lý và các màn hình liên quan](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Quytr%C3%ACnhx%E1%BB%ADl%C3%BDv%C3%A0c%C3%A1cm%C3%A0nh%C3%ACnhli%C3%AAnquan)     - 3.1 Không thay đổi trạng thái gốc     - 3.2 Có thay đổi trạng thái gốc |
| 3.1 | Hệ thống | **Chuyển tiếp Quy trình:** Hành động này **KHÔNG** làm thay đổi Trạng thái chính của bản ghi. Các ví dụ bao gồm:   * Nhấn Phê duyệt ở một cấp không phải là cấp cuối cùng. * Nhấn Từ chối ở một cấp (N) và cấp đó **không** có Trạng thái khi Từ chối của quy trình (logic đẩy lùi về cấp N-1). * Cập nhật trạng thái trung gian (ví dụ: "Đang ở cấp x, đợi “Tên các nhóm quyền của cấp x” xử lý."). * **Ghi Lịch sử:** Toàn bộ thông tin về hành động thay đổi trạng thái trung gian được ghi vào bảng lịch sử cập nhật trạng thái trung gian |
| 3.2 | Hệ thống | Các hành động thay đổi trạng thái gốc:   1. Nhấn hủy ở cấp có chọn Trạng thái khi Từ chối của quy trình 2. Nhấn duyệt ở cấp cuối cùng |
| 4 | Hệ thống | Hệ thống truy vấn vào module phân quyền [[HO][HT] Chức năng phân quyền - Nhóm quyền](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73140544) để kiểm tra xem vai trò của người dùng đang đăng nhập có được phép thực thi Hành động Gốc đã xác định ở trên hay không. |
| 4.1 | Hệ thống | Không có quyền gốc => hiển thị thông báo.  Tắt popup và reload lại màn hình.  Đây là các lỗi xảy ra khi người dùng có quyền trong quy trình nhưng thiếu quyền gốc của màn hình.   * + **Tình huống A: Thiếu quyền ở bước cuối cùng (Quyền Phê duyệt)**     - **Hiển thị thông báo:**"Bạn có quyền xử lý trong quy trình này, nhưng không có quyền gốc để Phê duyệt đăng ký Điểm bán.  Vui lòng liên hệ quản trị viên."   + **Tình huống B: Thiếu quyền khi Từ chối (Quyền Hủy)**     - **Hiển thị thông báo:**"Bạn có quyền xử lý trong quy trình này, nhưng không có quyền gốc để Từ chối duyệt đăng ký Điểm bán.  Vui lòng liên hệ quản trị viên." |
| 5 | Hệ thống | **Có quyền gốc:**  **Thực thi Hành động Gốc:** Hệ thống gọi hàm xử lý gốc của màn hình  **Cập nhật Trạng thái chính:** Hàm xử lý gốc sẽ thay đổi Trạng thái chính của bản ghi trong cơ sở dữ liệu (ví dụ: từ "Chờ duyệt" sang "Đã duyệt" hoặc từ “Chờ duyệt “sang "Từ chối duyệt").  **Cập nhật Trạng thái trung gian:** Hệ thống cập nhật Trạng thái trung gian lần cuối để phản ánh hành động cuối cùng (Khi đó trạng thái trung gian bằng trạng thái chính của màn hình xử lý)  **Ghi Lịch sử:** Toàn bộ thông tin về hành động thay đổi trạng thái trung gian được ghi vào bảng lịch sử cập nhật trạng thái trung gian  **Kết quả:** Quy trình kết thúc thành công, bản ghi được cập nhật |

## **Các quy trình cài đặt trên màn hình: Danh sách đăng ký tích lũy**

Những người dùng **thuộc các Nhóm quyền trong quy trình duyệt (đang hoạt động) và thuộc cấp chờ xử lý của quy trình**sẽ nhìn thấy icon xử lý Duyệt/ Hủy trạng thái mới theo quy trình duyệt khi "trạng thái chính" = "Trạng thái áp dụng" của quy trình 

### **1/ Quy trình xử lý Phê duyệt**

* **Mục đích:** Kiểm soát việc tạo mới và Phê duyệt một điểm bán đăng ký chương trình, đảm bảo dữ liệu được xác thực qua nhiều cấp trước khi đi vào hoạt động chính thức.
* **Điều kiện kích hoạt:** Trạng thái gốc của điểm bán đăng ký chương trình = Chờ duyệt.
* **Hành động Gốc:** "Phê duyệt" sẽ gọi hàm xử lý gốc của màn hình để xử lý chuyển Trạng thái gốc theo mô tả Phân quyền mới
* **Trạng thái sau áp dụng: Đã duyệt** (nếu duyệt thành công)
* **Trạng thái khi Từ chối thành công:** Từ chối duyệt (nếu từ chối thành công).

#### **Ví dụ cài đặt Quy trình:**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tên quy trình | Quy trình Phê duyệt Điểm bán đăng ký mới | | | |
| Dữ liệu áp dụng | Duyệt đăng ký tích lũy |  |  |  |
| Trạng thái áp dụng | Chờ duyệt |  |  |  |
| Duyệt vượt cấp | ON/ OFF |  |  |  |
| Chức năng | Phê duyệt |  |  |  |
| Trạng thái sau áp dụng | Đã duyệt |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | ***Hành động khi Duyệt*** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | SS; ASM; RSM; SD | *Đi tới cấp tiếp theo* | Thay đổi sang trạng thái Từ chối duyệt | 2 |
| Cấp 2 | Admin NPP | *Đi tới cấp tiếp theo* | Thay đổi sang trạng thái Từ chối duyệt | 0 |
| Cấp ... | ... | *Đi tới cấp tiếp theo* | *Trở về cấp duyệt trước*hoặc *Thay đổi sang trạng thái Từ chối duyệt* | 0 |
| Cấp 10 | Admin HO | *Thay đổi sang trạng thái **Đã duyệt*** | *Trở về cấp duyệt trước* | 3 |

#### **Mô tả UI hiển thị:**

* **Kích hoạt:**Khi tạo mới một điểm bán đăng ký chương trình, điểm bán đăng ký chương trình đó có trạng thái Chờ duyệt. Quy trình được kích hoạt khi Trạng thái chính = Trạng thái áp dụng

* **Thay đổi Giao diện:**
  + Trên dòng của điểm bán đó, những người dùng KHÔNG **thuộc các Nhóm quyền trong quy trình duyệt (đang hoạt động)**sẽ nhìn thấy icon xử lý "Duyệt" gốc của màn hình (logic xử lý: gọi hàm xử lý gốc của màn hình để xử lý chuyển Trạng thái gốc theo mô tả  phân quyền mới ở đầu trang.)
  + Đối với những người dùng **thuộc các Nhóm quyền trong quy trình duyệt (đang hoạt động) và thuộc cấp chờ xử lý của quy trình** sẽ nhìn thấy icon xử lý "Duyệt"

* + - Trạng thái trung gian mới nhất tại thời điểm hiện tại sẽ hiển thị khi hover chuột vào icon "Duyệt" mới của quy trình duyệt:
    - Button này chỉ hiển thị cho những người dùng thuộc Nhóm quyền được cấu hình để xử lý yêu cầu ở cấp hiện tại, sẽ thấy icon xử lý. Chọn button hiển thị popup:
      * + Trong đó: Xác nhận duyệt đăng ký của điểm bán
        + @trạng thái trung gian: Là dòng trạng thái trung gian hiển thị mới nhất theo thời điểm hover chuột
        + @Hành động khi Duyệt: Hiển thị hành động khi duyệt của quy trình theo cấp đang xử lý
        + @Hành động khi Từ chối: Hiển thị hành động khi tư chối của quy trình theo cấp đang xử lý
      * Chọn button Từ chối hiển thị popup bắt buộc nhập lý do:  
        + Nhập lý do dạng text (100). Chọn "Đồng ý" để xác nhận lý do và đóng popup "Xác nhận duyệt đăng ký của điểm bán"

* **Kiểm tra Xung đột Dữ liệu**
  + **Xem mô tả trên [Quy trình xử lý chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533070#id-[HO][HT]Danhs%C3%A1ch%C4%91i%E1%BB%83mb%C3%A1n-Ki%E1%BB%83mtrachung)**
* **Cấu hình có Duyệt vượt cấp hoặc Không:**

Xem thêm: [Ví dụ và Lưu ý](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-V%C3%ADd%E1%BB%A5v%C3%A0L%C6%B0u%C3%BD) của quy trình duyệt.

[Duyệt vượt cấp = OFF](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Duy%E1%BB%87tv%C6%B0%E1%BB%A3tc%E1%BA%A5p=OFF)

[Duyệt vượt cấp = ON](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO][HT]Quytr%C3%ACnhduy%E1%BB%87t-Duy%E1%BB%87tv%C6%B0%E1%BB%A3tc%E1%BA%A5p=ON)

#### **Ánh xạ Logic xử lý theo quy trình**

Xem chi tiết

**Bối cảnh:**

* Một điểm bán đăng ký chương trình mới được tạo với Trạng thái gốc = Chờ duyệt.
* Quy trình được kích hoạt với 3 cấp duyệt: Cấp 1 ("SS; ASM; RSM; SD"), Cấp 2 (Admin NPP), Cấp 3 (Admin HO - Cấp cuối Gọi đến hàm xử lý gốc của màn hình để duyệt ). Chỉ cần một người dùng của một trong tất cả các nhóm quyền của cấp duyệt xử lý là hoàn thành cấp duyệt đó.
* Cấu hình hành động "Từ chối" có hai trường hợp:

  + **Đẩy lùi (Mặc định):** Trả yêu cầu về cấp trước đó để xử lý lại.
  + **Kết thúc & Hủy:** Thay đổi Trạng thái gốc của điểm bán đăng ký chương trình thành Từ chối duyệt. Gọi đến hàm xử lý gốc của màn hình để hủy
* Trên popup "Xác nhận duyệt đăng ký của điểm bán" có 2 button Xử lý là "Đồng ý" và "Từ chối"

##### **Luồng 1: Người dùng nhấn "Từ chối"**

**1. Hệ thống:** Hiển thị popup "Bạn có chắc chắn muốn Từ chối duyệt điểm bán đăng ký chương trình này?", yêu cầu người dùng nhập lý do (bắt buộc).

**2. Người dùng:** Nhập lý do và nhấn "Đồng ý". Hệ thống tiến hành kiểm tra xung đột dữ liệu (**[Quy trình xử lý chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533070#id-[HO][HT]Danhs%C3%A1ch%C4%91i%E1%BB%83mb%C3%A1n-Ki%E1%BB%83mtrachung))**và phân loại hành động.

**o Trường hợp A: Cấp duyệt được cấu hình "Hành động khi Từ chối = Thay đổi sang trạng thái Từ chối duyệt"**

* **Mapping:** Hành động này tương đương với việc thực thi **Hành động Gốc "Từ chối điểm bán đăng ký chương trình"**.
* **Hệ thống:**

  1. Kiểm tra Quyền Lớp 2 (Quyền Gốc) của người dùng để xác định họ có được phép "Từ chối điểm bán đăng ký chương trình" hay không.
  2. Nếu có quyền, hệ thống gọi đến hàm xử lý gốc của màn hình để hủy điểm bán đăng ký chương trình.
  3. Nếu không có quyền, hiển thị thông báo lỗi
* **Kết quả:**

  + Trạng thái gốc của điểm bán đăng ký chương trình chuyển thành **"Từ chối duyệt"**.
  + Trạng thái trung gian được cập nhật lần cuối để phản ánh hành động ( = trạng thái gốc).
  + Quy trình duyệt chính thức kết thúc.
* **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động, Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.

  + Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý
* **Giao diện:** 

  + Icon xử lý của tất cả các quy trình có liên quan đến bản ghi (Ví dụ Quy trình Duyệt có nút Phê duyệt/Quy trình hủy có nút Hủy) trên bản ghi này sẽ **ẩn đi đối với TẤT CẢ** người dùng thuộc các nhóm quyền cấu hình ở cả 2 quy trình áp dụng bản ghi Vì 1 quy trình đã kết thúc, trạng thái gốc đã thay đổi.

**o Trường hợp B: Cấp duyệt cấu hình "Hành động khi Từ chối = *Trở về cấp duyệt trước*" (Logic: Trả về cấp trước)**

* **Mapping:** Đây là một hành động nội bộ của quy trình duyệt, mang tính chất "yêu cầu xem xét lại".
* **Hệ thống:**

  1. **KHÔNG** gọi đến hàm xử lý gốc.
  2. **KHÔNG** kiểm tra Quyền Lớp 2.
  3. Cập nhật trạng thái của quy trình để đẩy yêu cầu về cấp ngay trước đó.
* **Kết quả:**

  + Trạng thái gốc của điểm bán đăng ký chương trình **không thay đổi** (vẫn là "Chờ duyệt").
  + Trạng thái trung gian được cập nhật để phản ánh việc bị trả về.

    - Ví dụ 1: Nếu Admin HO (Cấp 3) từ chối, trạng thái mới là: **"Đang ở cấp 2, đợi "Admin NPP" xử lý"**.
    - Ví dụ 2 (khác): Nếu SS; ASM; RSM; SD (Cấp 1) từ chối, vì không có cấp nào trước đó, trạng thái mới là: **"Đang ở cấp 1, đợi "SS; ASM; RSM; SD" xử lý"**.
* **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động, Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.

  + Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý

* **Giao diện:**

  + **Nếu Duyệt vượt cấp = OFF:** Icon xử lý của người vừa từ chối (ví dụ: **SS; ASM; RSM; SD**) sẽ ẩn đi. Icon xử lý sẽ xuất hiện lại cho người dùng ở cấp trước đó, nếu theo ví dụ 2: cấp 1 từ chối và không có cấp nào trước đó thì icon xử lý vẫn hiển thị lại cho cấp 1 xử lý (ví dụ: **SS; ASM; RSM; SD**).
  + **Nếu Duyệt vượt cấp = ON:**

    - **Tất cả người dùng thuộc các nhóm quyền có thể xử lý ở các cấp duyệt thuộc hàng đợi xử lý (ở các cấp nhỏ hơn cấp đã xử lý) đều hết quyền xử lý**
    - Thay vì chỉ người dùng ở cấp hiện tại mới thấy button, giờ đây **TẤT CẢ người dùng thuộc TẤT CẢ các****Nhóm quyền****trong quy trình****thuộc cấp đang chờ xử lý** đều nhìn thấy (CẤP N-1 đến cấp cuối cùng)

##### **Luồng 2: Người dùng nhấn "Đồng ý"**

**1. Hệ thống:** Hiển thị popup

**2. Người dùng:** Nhấn "Đồng ý". Hệ thống tiến hành kiểm tra xung đột dữ liệu và phân loại hành động.

**o Trường hợp A: Người duyệt thuộc cấp CHƯA PHẢI cấp cuối cùng (ví dụ: Admin NPP duyệt)**

* **Hệ thống:**

  1. **KHÔNG** gọi đến hàm xử lý gốc.
  2. Trạng thái gốc của điểm bán đăng ký chương trình **không thay đổi**.
* **Kết quả:**

  + Trạng thái trung gian được cập nhật để chuyển yêu cầu đến cấp duyệt tiếp theo.

    - Ví dụ: Nếu Admin NPP (Cấp 2) duyệt, trạng thái mới là **"Đang ở cấp 3, đợi "Admin HO" xử lý"**.
* **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động, Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.

  + Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý
* **Giao diện:**

  + **Nếu Duyệt vượt cấp = OFF:** Icon xử lý của người vừa duyệt (Admin NPP) sẽ ẩn đi. Icon xử lý sẽ xuất hiện cho người dùng ở cấp tiếp theo (Admin HO).
  + **Nếu Duyệt vượt cấp = ON:** Icon xử lý của người vừa duyệt và các cấp thấp hơn sẽ ẩn đi. Icon của các cấp cao hơn vẫn hiển thị. (Ví dụ: Nếu **SS; ASM; RSM; SD** - Cấp 1 duyệt, icon của cả **SS; ASM; RSM; SD** sẽ ẩn đi, Còn cấp 2 và Cấp 3 là Admin NPP và Admin HO vẫn thấy).

**o Trường hợp B: Người duyệt thuộc cấp LÀ cấp cuối cùng (ví dụ: Admin HO duyệt)**

* **Mapping:** Hành động này tương đương với việc thực thi **Hành động Gốc "Phê duyệt điểm bán đăng ký chương trình"**.
* **Hệ thống:**

  1. **BẮT BUỘC** kiểm tra Quyền Lớp 2 (Quyền Gốc) của người dùng để xác định họ có được phép "Phê duyệt điểm bán đăng ký chương trình" hay không.
  2. Nếu có quyền, hệ thống gọi đến hàm xử lý gốc của màn hình để kích hoạt điểm bán đăng ký chương trình.
  3. Nếu không có quyền, hiển thị thông báo lỗi
* **Kết quả:**

  + Trạng thái gốc của điểm bán đăng ký chương trình chuyển thành **"Đã duyệt"**.
  + Quy trình duyệt kết thúc thành công.
* **Ghi Lịch sử:**

  + **Nếu Duyệt vượt cấp = OFF:** Ghi nhận hành động "Phê duyệt" của cấp cuối cùng (Admin HO).
  + **Nếu Duyệt vượt cấp = ON:** ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý
* **Giao diện:** Icon xử lý (Phê duyệt/Từ chối) trên bản ghi này sẽ **ẩn đi đối với TẤT CẢ** người dùng vì quy trình đã kết thúc.

### **2/ Quy trình xử lý Hủy**

* **Mục đích:** Cho phép người dùng có thẩm quyền Từ chối duyệt một điểm bán đăng ký chương trình đang ở trạng thái Chờ duyệt.
* **Điều kiện kích hoạt:** Trạng thái gốc của điểm bán đăng ký chương trình = Chờ duyệt.
* **Hành động Gốc:**  Từ chối duyệt sẽ gọi hàm xử lý gốc của màn hình để xử lý chuyển Trạng thái gốc theo mô tả Phân quyền mới
* **Trạng thái sau áp dụng:** Từ chối duyệt (nếu đồng ý từ chối duyệt qua n cấp thành công)
* Lưu ý: "Từ chối/ hủy " trong trường hợp này thực chất là một hành động Phê duyệt cho việc từ chối/Hủy.

#### **Ví dụ cài đặt Quy trình:**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tên quy trình | Quy trình từ chối duyệt đăng ký | | | |
| Dữ liệu áp dụng | Duyệt đăng ký tích lũy |  |  |  |
| Trạng thái áp dụng | Chờ duyệt |  |  |  |
| Duyệt vượt cấp | ON/ OFF |  |  |  |
| Chức năng | Hủy |  |  |  |
| Trạng thái sau áp dụng | Từ chối duyệt |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | ***Hành động khi duyệt*** | **Hành động khi Từ chối** | **Tự động duyệt (ngày)** |
| Cấp 1 | SS; ASM; RSM; SD | *Đi tới cấp tiếp theo* | Không thay đổi | 2 |
| Cấp 2 | Admin NPP | *Đi tới cấp tiếp theo* | *Trở về cấp duyệt trước* | 0 |
| Cấp ... | ... | *Đi tới cấp tiếp theo* | *Trở về cấp duyệt trước* | 0 |
| Cấp 10 | Admin HO | *Thay đổi sang trạng thái Từ chối duyệt* | *Trở về cấp duyệt trước* | 3 |

#### **Mô tả UI hiển thị:**

**Kích hoạt:**Khi tạo mới một điểm bán đăng ký chương trình, điểm bán đăng ký chương trình đó có trạng thái Chờ duyệt. Quy trình được kích hoạt khi Trạng thái chính = Trạng thái áp dụng

**Thay đổi Giao diện:**

* Trên dòng của điểm bán đăng ký chương trình đó, những người dùng KHÔNG **thuộc các Nhóm quyền trong quy trình hủy điểm bán đăng ký chương trình (đang hoạt động)**sẽ nhìn thấy icon xử lý "Hủy" gốc của màn hình (logic xử lý không thay đổi so với hiện tại)
* Đối với những người dùng **thuộc các Nhóm quyền trong quy trình duyệt (đang hoạt động) và thuộc cấp chờ xử lý của quy trình** sẽ nhìn thấy icon xử lý "Hủy"
  + Trạng thái trung gian mới nhất tại thời điểm hiện tại sẽ hiển thị khi hover chuột vào icon "Hủy" mới của quy trình duyệt:
  + Button này chỉ hiển thị cho những người dùng thuộc Nhóm quyền được cấu hình để xử lý yêu cầu ở cấp hiện tại, sẽ thấy icon xử lý. Chọn button hiển thị popup:
    - * Trong đó: Label: Xác nhận từ chối duyệt đăng ký
      * @trạng thái trung gian: Là dòng trạng thái trung gian hiển thị mới nhất theo thời điểm hover chuột
      * @Hành động khi Duyệt: Hiển thị hành động khi duyệt của quy trình theo cấp đang xử lý
      * @Hành động khi Từ chối: Hiển thị hành động khi từ chối của quy trình theo cấp đang xử lý
      * Nhập lý do:  free text, 100
    - Chọn button "Đồng ý"/  "Từ chối" bắt buộc phải nhập lý do.
  + **Kiểm tra Xung đột Dữ liệu**
    - **Xem mô tả trên [Quy trình xử lý chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533070#id-[HO][HT]Danhs%C3%A1ch%C4%91i%E1%BB%83mb%C3%A1n-Ki%E1%BB%83mtrachung)**
  + Ví dụ và logic xử lý tương tự Quy trình duyệt đã mô tả ở trên

## **Lưu ý**

* **Quy trình duyệt áp dụng cho button/ icon xử lý. Chỉ những icon/ button này mới xử lý theo quy trình duyệt.**
* **Các button/icon còn lại không áp dụng bất kỳ quy trình duyệt nào thì thao tác xử lý không thay đổi (KHÔNG theo quy trình duyệt)**
* **Người dùng không thuộc quy trình duyệt, khi thao tác trên các button/icon dù button/icon đang áp dụng quy trình duyệt thì vẫn gọi hàm xử lý gốc để xử lý (KHÔNG theo quy trình duyệt)**
  + Khi thao tác sẽ gọi hàm xử lý gốc và chuyển trạng thái gốc → logic cập nhật trạng thái gốc của màn hình  [HO] Đăng ký tích lũy
  + Trạng thái trung gian KHÔNG thay đổi với với trường hợp người thao tác không thuộc quy trình duyệt
* **Luồng Import không thay đổi, xử lý theo logic gốc  [HO] Đăng ký tích lũy**