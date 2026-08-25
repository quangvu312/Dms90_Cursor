|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Cấu hình phân quyền tài khoản người dùng trên hệ thống DMS, khai báo các nhóm quyền và phân quyền theo nhóm |
| Document version | RedV1.0.0  7/8/25:  Thêm tooltip và thêm các quyền thao tác trả về từ SSO ứng với all menu và menu CTKM  13/8/25: wording bỏ chữ Cập nhật → thành "Lưu", thêm mô tả import Tài khoản người dùng, trong dropdownlist hiển thị mã code - Tên (Cũ - chỉ hiển thị tên nhóm quyền)  26/08/2025: Đổi câu msg thông báo khi inactive nhóm quyền: " |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Mô tả tổng quan

**Mục đích chung của màn hình**

Màn hình "Nhóm quyền" đóng vai trò trung tâm trong việc quản lý truy cập và phân quyền chức năng cho người dùng trong hệ thống Quản lý Phân phối (DMS). Mục tiêu chính là cho phép người quản trị tạo, xem, sửa,

và quản lý các nhóm quyền khác nhau, từ đó gán cho từng người dùng hoặc nhóm người dùng cụ thể. Điều này đảm bảo rằng mỗi người dùng chỉ có thể truy cập và thực hiện các chức năng phù hợp với vai trò và trách nhiệm của họ trong hệ thống.

**Phân tích User Stories (US)**

Dưới đây là các User Story (US) có thể được xác định từ màn hình này, cùng với mục đích của từng US:

**1. US1: Tạo mới nhóm quyền**

* **Mô tả:** Là người quản trị, tôi muốn tạo một nhóm quyền mới bằng cách nhấn vào nút "Tạo mới", sau đó nhập các thông tin cần thiết như tên vai trò, chọn loại quyền (HO/Nhà phân phối), mô tả và lựa chọn các tính năng được phép sử dụng.
* **Mục đích:** Giúp hệ thống có thể mở rộng và tùy chỉnh các vai trò mới một cách linh hoạt khi có sự thay đổi về nhân sự hoặc quy trình làm việc.

**2. US2: Tìm kiếm nhóm quyền**

* **Mô tả:** Là người quản trị, tôi muốn có thể tìm kiếm một hoặc nhiều nhóm quyền một cách nhanh chóng dựa trên các tiêu chí như tên vai trò, hoặc mô tả.
* **Mục đích:** Giúp tiết kiệm thời gian và dễ dàng quản lý khi số lượng nhóm quyền trong hệ thống tăng lên.

**3. US3: Lọc nhóm quyền theo trạng thái**

* **Mô tả:** Là người quản trị, tôi muốn có thể lọc danh sách các nhóm quyền theo trạng thái "Hoạt động" hoặc "Không hoạt động".
* **Mục đích:** Giúp dễ dàng quản lý và theo dõi các nhóm quyền đang được áp dụng hoặc đã bị vô hiệu hóa trong hệ thống.

**4. US4: Xem danh sách nhóm quyền**

* **Mô tả:** Là người quản trị, tôi muốn xem danh sách tất cả các nhóm quyền hiện có trong hệ thống dưới dạng bảng, với các thông tin cơ bản như Tên vai trò, Người tạo, Quyền, Ngày tạo, Người cập nhật, Ngày cập nhật và Trạng thái.
* **Mục đích:** Cung cấp một cái nhìn tổng quan về tất cả các nhóm quyền, giúp người quản trị dễ dàng nắm bắt thông tin và thực hiện các thao tác quản lý.

**5. US5: Xem chi tiết nhóm quyền**

* **Mô tả:** Là người quản trị, tôi muốn có thể nhấp vào tên của một vai trò trong danh sách để xem thông tin chi tiết về nhóm quyền đó.
* **Mục đích:** Cung cấp thông tin đầy đủ và chi tiết về một nhóm quyền cụ thể, bao gồm tất cả các quyền và tính năng đã được gán.

**6. US6: Sao chép nhóm quyền**

* **Mô tả:** Là người quản trị, tôi muốn có thể sao chép một nhóm quyền đã có để tạo một nhóm quyền mới với các thiết lập tương tự.
* **Mục đích:** Tiết kiệm thời gian và công sức khi cần tạo một nhóm quyền mới có nhiều điểm tương đồng với một nhóm quyền đã tồn tại.

**7. US7: Chỉnh sửa nhóm quyền**

* **Mô tả:** Là người quản trị, tôi muốn có thể chỉnh sửa thông tin của một nhóm quyền đã tạo
* **Mục đích:** Cho phép cập nhật và điều chỉnh các quyền hạn của một nhóm quyền khi có sự thay đổi về yêu cầu công việc mà không cần phải tạo mới.

**8. US8: Thay đổi trạng thái nhóm quyền**

* **Mô tả:** Là người quản trị, tôi muốn có thể thay đổi trạng thái của một nhóm quyền từ "Hoạt động" sang "Không hoạt động" và ngược lại.
* **Mục đích:** Cho phép bật hoặc tắt một nhóm quyền một cách nhanh chóng mà không cần phải xóa vĩnh viễn, hữu ích cho việc quản lý các vai trò tạm thời hoặc không còn sử dụng.

## Quy trình thực hiện

trueQuy trình tổng quan phân quyềnfalse1000autotoptrue10112

* Chi tiết quy xem quy trình tạo vai trò và gán tài khoản trên DMS đồng bộ với SSO

DMS đang phân chia theo phân quyền chức năng, phân quyền dữ liệu và phân quyền xét duyệt/ thao tác cụ thể

|  |  |  |
| --- | --- | --- |
| Phân quyền chức năng | Phân quyền chức năng là quản lý các quyền thao tác (thêm, xóa, sửa, import, export,...) trên các màn hình cụ thể | **Phân quyền này admin hệ thống có thể thêm mới/điều chỉnh theo từng nhóm quyền trên màn hình Nhóm Quyền** |
| Phân quyền dữ liệu | * Phân quyền dữ liệu là việc quản lý các vai trò được truy cập vào các dữ liệu tại các vùng địa lý nào trên hệ thống, nghĩa là:   + User được gán vùng A, có thể thấy được tất cả dữ liệu của vùng A và tất cả các vùng con của vùng A.   + User được gán vùng A và B, có thể thấy được tất cả dữ liệu của vùng A, B và tất cả các vùng con của vùng A, B.   + User được gán vào nhóm quyền A, chỉ có thể thấy được dữ liệu của nhóm quyền A. | **Phân quyền này hiện tại đang được cài đặt cố định trong lập trình, admin không có màn hình chức năng để tự điều chỉnh** |
| Phân quyền xét duyệt/thao tác cụ thể | Phân quyền xét duyệt/thao tác cụ thể là phân quyền cố định vai trò được thực hiện các thao tác nào trên màn hình chức năng cụ thể. Ví dụ   * Vai trò Admin, Quản lý vùng được phép chuyển trạng thái Chương trình trưng bày. Các role khác thì không thực hiện được chức năng này. * Vai trò Admin, Quản lý vùng, Giám sát được chuyển trạng thái đăng ký chương trình trưng bày của khách hàng. Các role khác thì không thực hiện được chức năng này. * Admin, Quản lý vùng được phép gửi thông báo. Các role khác thì không thực hiện được chức năng này | **Phân quyền này admin hệ thống có thể thêm mới/điều chỉnh theo từng nhóm quyền trên màn hình Nhóm Quyền**  *Các lưu ý phân quyền là chức năng cụ thể liên quan đến cấu hình duyệt nhiều cấp  ( [HO][HT] Quy trình duyệt)* |

# Màn hình Nhóm quyền

Danh sách nhóm quyền

* Nhóm quyền là tập hợp các quyền chức năng hoặc quyền thao tác tại các màn hình trên hệ thống.
* Nhóm quyền giúp đơn giản hóa việc quản lý quyền truy cập bằng cách cho phép gán quyền cho nhóm thay vì từng cá nhân.
* Khi một người dùng được thêm vào một nhóm, họ sẽ tự động nhận được tất cả các quyền của nhóm đó.

## Danh sách nhóm quyền

Màn hình:

Mô tả:

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm | | | | |
| Tìm kiếm theo | Text Filed | Có | Không | Cho phép nhật text tìm kiếm vai trò theo tên vai trò, mô tả vai trò   * Tooltip: Tìm kiếm theo tên vai trò, mô tả vai trò. * Placeholder: Tìm kiếm theo tên vai trò, mô tả vai trò. * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các vai trò có thông tin được nhập trong ô này. |
| Trạng thái | Selectbox onechoice | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc danh sách vai trò dựa trên trạng thái đã chọn. * Người dùng có thể tìm kiếm và chọn một trạng thái từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách vai trò. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:   + Hoạt động   + Không hoạt động  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tag). * **Kết quả lọc:** Danh sách vai trò sẽ tự động được lọc để hiển thị những vai trò thuộc trạng thái đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn trạng thái không mong muốn. * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định chọn dữ liệu **"Hoạt động"** trong hộp chọn. |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách vai trò, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các vai trò mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách vai trò. 2. **Danh sách vai trò làm mới:** Sau khi nhấp, danh sách vai trò sẽ hiển thị toàn bộ các vai trò hiện có mà không áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách vai trò. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên danh sách vai trò. * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách vai trò theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách vai trò. 3. **Hiển thị kết quả:** Danh sách vai trò sẽ cập nhật và hiển thị các vai trò phù hợp với các tiêu chí đã chọn.  * Mặc định: Hiển thị tất cả vai trò đang có trạng thái "Hoạt động" * Sort hiển thị theo thời gian cập nhật gần nhất lên trên đầu   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách vai trò sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| Lưới "Danh sách vai trò" | | | | |
| icon | icon | Không | Không | Hiển thị icon + hoặc -  +: default collapse  -: Khi click vào dấu '+" hiển thị lưới danh sách con bên dưới và tự động expand, dấu "+" chuyển thành dấy "-" và ngược lại |
| Tên vai trò | Datacolumn | Không | Không | Hiển thị tên vai trò đã tạo và lưu  Hyperlink |
| Quyền | Datacolumn - tag | Không | Không | Hiển thị Quyền khi tạo vai trò  1/ HO - màu xanh dương  2/ Nhà phân phối - màu xanh lá |
| Người tạo | Datacolumn have copy | Không | Không | Hiển thị mã tài khoản người tạo Vai trò |
| Ngày tạo | Datacolumn | Không | Không | * Hiển thị ngày tạo * Format dd-mm-yyyy hh:mm:ss |
| Người cập nhật | Datacolumn have copy | Không | Không | * Hiển thị người cập nhật Vai trò  * Người cập nhật là người gần nhất cập nhật hệ thống |
| Ngày cập nhật |  |  |  | * Hiển thị ngày cập nhật * Format dd-mm-yyyy hh:mm:ss |
| Trạng thái | Toggle | Có | Không | * Onclick để thay đổi trạng thái Vai trò (ON = Hoạt động/OFF = Không hoạt động)    + ON: Trạng thái vai trò đang hoạt động   + OFF: Trạng thái vai trò Không hoạt động  Xem chi tiết Cập nhật trạng thái vai trò |
| Tùy chỉnh |  |  |  |  |
|  | Icon | Có | Không | Chỉnh sửa vai trò và quyền   * Hiển thị  thao tác cho phép người dùng chỉnh sửa giá trị của Vai trò đã chọn |
|  | Icon | Có | Không | Sao chép vai trò và quyền   * Hiển thị  thao tác cho phép người dùng Tạo mới Vai trò khác với toàn bộ dữ liệu được copy (sao chép) theo Vai trò đã chọn |
| Tạo mới | Button | Có | Không | Tạo mới vai trò   * Hiển thị thao tác cho phép người dùng tạo mới vai trò |
| Phân trang hiển thị |  |  |  | * Hiển thi số lượng dòng tối đa của 1 trang trên tổng số dòng * Hiển thị số trang * Onclick ">" để qua trạng kế tiếp * Onclick "<" để lùi lại trang trước * Hiển thị số lượng dòng tối đa của 1 trang * Onclick hiển thị các tùy chọn cho phép người dùng chọn lại số lượng dòng |

## Xem danh sách vai trò chi tiết

**Tổng quan**

Chức năng này cho phép người quản trị xem cấu hình cây phân quyền chi tiết cho từng vai trò ngay trên màn hình danh sách mà không cần phải điều hướng sang trang "Chỉnh sửa". hoặc click hyperlink tên vai trò để xem chi tiết.

Khi người dùng mở rộng (expand) một dòng vai trò, hệ thống sẽ hiển thị một giao diện phân cấp đa cấp, cho phép đi sâu vào từng module chức năng đã gán quyền cụ thể.

| Tên trường/Thành phần | Loại đối tượng/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả chi tiết & Hành vi |
| --- | --- | --- | --- | --- |
|  |  |  |  | **Luồng tương tác của người dùng (User Flow)**  **Bước 1: Mở rộng dòng vai trò (Level 1 Expand)**   * Người dùng nhấp vào biểu tượng dấu cộng (+) ở đầu dòng vai trò muốn xem. * Hệ thống hiển thị giao diện cấp 2, bao gồm danh sách các menu chức năng cấp cao nhất (menu cha) của hệ thống. Biểu tượng + chuyển thành dấu trừ (-). * Cây phân cấp menu hiển thị trong giao diện expand phải đồng nhất với cây menu chính của toàn bộ hệ thống (theo vai trò mặc định trả về từ SSO tương ứng với quyền của vai trò khởi tạo)   **Bước 2: Mở rộng Menu Cha (Level 2 Expand)**   * Người dùng nhấp vào biểu tượng mũi tên (>) bên cạnh một menu cha (ví dụ: "Báo cáo"). * Hệ thống hiển thị danh sách các menu con thuộc menu cha đó (ví dụ: "Bán hàng", "Tuyến bán hàng", "Phân tích"). * Cây phân cấp menu hiển thị trong giao diện expand phải đồng nhất với cây menu chính của toàn bộ hệ thống (theo vai trò mặc định trả về từ SSO tương ứng với quyền của vai trò khởi tạo) (theo lefmenu trả về từ SSO tương ứng với quyền của vai trò)   **Bước 3: Mở rộng Menu Con để xem Lưới Phân quyền (Level 3 Expand)**   * Người dùng nhấp vào biểu tượng mũi tên (>) bên cạnh một menu con (ví dụ: "Phân tích"). * Hệ thống hiển thị Lưới Phân quyền chi tiết cho menu con đó. Lưới này bao gồm các tính năng cụ thể và các quyền chức năng hoặc quyền thao tác tương ứng (Xem, Sửa, Xóa, v.v.) từ màn hình tạo mới (xem mô tả). Cho phép cuộn sang ngang để xem nhiều quyền thao tác. cho phép cuộn dọc để xem nhiều menu. * Cây phân cấp menu hiển thị trong giao diện expand phải đồng nhất với cây menu chính của toàn bộ hệ thống (theo vai trò mặc định trả về từ SSO tương ứng với quyền của vai trò khởi tạo)   **Bước 4: Thao tác đóng (Collapse)**   * Người dùng có thể nhấp vào biểu tượng (- hoặc v) ở bất kỳ cấp nào để thu gọn lại cây phân quyền ở cấp đó. |
| **Icon Expand/Collapse dòng vai trò** | Icon | **Có** | Không | **Chức năng:** Mở/đóng giao diện xem nhanh phân quyền của một vai trò.  **Hành vi:** Click icon '+' để mở rộng và xem chi tiết. Icon chuyển thành '-'.  Click icon '-' để thu gọn lại. |
| **Giao diện phân quyền cấp 2 & 3** | Accordion / Expandable List | **Có** | Không | **Chức năng:** Hiển thị cây menu phân cấp của hệ thống.    * Cây phân cấp menu hiển thị trong giao diện expand phải đồng nhất với cây menu chính của toàn bộ hệ thống (theo vai trò mặc định trả về từ SSO tương ứng với quyền của vai trò khởi tạo)   **Hành vi:** Người dùng có thể click vào các icon '>' để mở rộng và xem các cấp menu sâu hơn. Sau khi click thì icon '>'  chuyển thành 'v' |
| **Lưới Phân quyền chi tiết** | Table / Grid | **Không** | Không | **Chức năng:** Hiển thị các quyền hạn đã được gán cho vai trò đối với từng tính năng cụ thể khi tạo mới/ điều chỉnh.  **Trạng thái:** Toàn bộ lưới ở dạng chỉ đọc, không cho thao tác  Nếu BE có **chỉnh sửa thêm mới menu màn hình/ thêm mới các quyền chức năng hoặc quyền thao tác** → Danh sách quyền hàng động và menu màn hình cũng được cập nhật và hiển thị để xem khi mở màn hình |
| **Trạng thái hiển thị** | Icon / Trạng thái hiển thị | **Không** | Không | **Chức năng:** Biểu thị trực quan liệu vai trò có được gán tất cả các quyền trong hàng đó hay không.  **Hành vi:** **Người dùng không thể click vào đây, chỉ xem.**  **Mô tả:**   * Hiển thị icon dấu check (): hành động tương ứng với màn hình được chọn   + Riêng cột tất cả: nếu tất cả các quyền chức năng hoặc quyền thao tác trong cùng hàng ngang có ô vuông đều được chọn * Để trống  khi không có một quyền nào được cấp * Hiển thị dấu  () ở cột tất cả: khi có ít nhất một quyền không được cấp theo chiều ngang |
| Các quyền chức năng hoặc quyền thao tác | Datacolums | **Không** | Không | Hiển thị mặc định danh sách các quyền chức năng hoặc quyền thao tác theo thứ tự hiển thị khi tạo mới.  Nếu BE có **chỉnh sửa thêm mới menu màn hình/ thêm mới các quyền chức năng hoặc quyền thao tác** → Danh sách quyền hàng động và menu màn hình cũng được cập nhật và hiển thị để xem khi mở màn hình |

Cập nhật trạng thái vai trò

## Cập nhật trạng thái vai trò

* **Luồng 1: Vô hiệu hóa vai trò (Chuyển từ Hoạt động -> Không hoạt động).**

  + Hiển thị thông báo khi nhấn vào toggle: "Việc vô hiệu hóa vai trò sẽ khiến các tài khoản mất quyền truy cập hệ thống. Bạn có chắc chắn muốn ngưng hoạt động vai trò?"  
    [**Hủy**] [**Đồng ý**]
    - Nếu admin chọn **Đồng ý** thì Vai trò trên tất cả các tài khoản đã được gán cũng tự động bị vô hiệu hóa- khi đó trạng thái vai trò Chuyển từ Hoạt động -> Không hoạt động. Sau khi hoàn tất, hệ thống hiển thị thông báo cập nhật thành công. Tắt popup và chuyển trạng thái của Vai trò → Không hoạt động
    - Nếu admin chọn **Hủy** thì hệ thống không thực hiện việc cập nhật trạng thái nữa. Tắt popup và vẫn giữ màn hình hiện tại
* **Luồng 2: Kích hoạt lại vai trò (Chuyển từ Không hoạt động -> Hoạt động).**

  + - Bạn có muốn Bật trạng thái hoạt động của Vai trò này?

      * Đồng ý: ngay lập tức tắt popup và chuyển trạng thái của Vai trò → Hoạt động. Tất cả những người dùng đã được gán trước đó sẽ tự động có lại quyền.
      * Hủy:  Tắt popup và vẫn giữ màn hình hiện tại

**Lưu ý: Sau khi hoàn tất, hệ thống hiển thị thông báo cập nhật thành công.**

* **Kiểm tra dữ liệu sau cập nhật**
  + Danh sách vai trò hiển thị trạng thái mới ngay sau khi cập nhật, không cần tải lại trang.
  + Việc cập nhật này của vai trò và các tài khoản liên quan đến vai trò đều được log lại và hiển thị ở**lịch sử cập nhật tài khoản người dùng**
* **Ràng buộc bảo mật**

* + Chỉ người dùng có quyền cập nhật trạng thái Vai trò trên màn hình Nhóm quyền mới được truy cập và thực hiện thay đổi trạng thái vai trò.

Tạo mới vai trò

## Tạo mới vai trò

Mục đích:

1/Tạo vai trò cơ bản: Là một người quản trị, tôi muốn nhập được mã, tên, chọn loại quyền (HO/Nhà phân phối) cho một vai trò mới để có thể khởi tạo một vai trò trong hệ thống.  
2/ Phân quyền chi tiết: Là một người quản trị, tôi muốn có thể gán các quyền chức năng hoặc quyền thao tác cụ thể (như Xem, Sửa, Xóa,...) cho vai trò mới trên từng màn hình, tính năng của hệ thống một cách trực quan để đảm bảo người dùng thuộc vai trò đó chỉ có thể truy cập đúng chức năng được cho phép.  
3/ Hệ thống linh hoạt: Là một người quản trị, tôi muốn màn hình phân quyền phải tự động cập nhật khi hệ thống có thêm màn hình hoặc quyền chức năng hoặc quyền thao tác mới, để tôi có thể phân quyền cho các tính năng mới mà không cần yêu cầu đội ngũ kỹ thuật can thiệp.

Màn hình:

Mô tả:

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tên vai trò | Text (100) | Có | Có | * Cho phép người dùng nhập tên cho vai trò * Placeholder: [theo rule chung của hệ thống](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO) * Rule validate   + Số lượng ký tự <= 100 |
| Quyền | Selectbox onechoice | Có | Có | Cho phép chọn loại quyền cho vai trò  Validation: Bắt buộc chọn.   * Placeholder: * [theo rule chung của hệ thống](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO)   Giá trị: "HO", "Nhà phân phối"  **Các bước xử lý khi chọn giá trị:**   1. **Kích hoạt (Trigger):** Người dùng chọn một giá trị trong dropdown Quyền (ví dụ: chọn "Nhà phân phối"). 2. **Gửi yêu cầu lên Backend DMS:**     * Frontend gọi API của Backend DMS, truyền tham số mặc định gồm:       + 1. Hệ thống: ECO-DMS 2. Công ty / doanh nghiệp: API key của SSO (ví dụ: f4c91b3e-16cc-48ee-8bf8-c81ec4ead467) 3. Loại kết nối: portal 3. **Xử lý tại Backend DMS:**     * Backend nhận yêu cầu.    * **Bước 3.1: Ánh xạ Vai trò:** Tra cứu trong cấu hình để ánh xạ Quyền sang Vai trò mặc định SSO.       + Quyền: "Nhà phân phối" -> Vai trò mặc định SSO: "Distributor Admin"      + Quyền: "HO" → Vai trò mặc định SSO: "Admin"    * **Bước 3.2: Chuẩn bị tham số cho SSO:** Lấy các giá trị đã được cấu hình sẵn:       + 1. Hệ thống: ECO-DMS      + 2. Công ty / doanh nghiệp: API key của SSO (ví dụ: f4c91b3e-16cc-48ee-8bf8-c81ec4ead467)      + 3. Loại kết nối: portal      + 4. Quyền: "Admin" / "Distributor Admin" 4. **Gọi API của hệ thống SSO** 5. **Hệ thống SSO trả về dữ liệu:**     * SSO nhận yêu cầu và trả về danh sách các menu màn hình phù hợp **chính xác cho vai trò mặc định "Distributor Admin"  hay "Admin" của SSO**    * Định dạng JSON trả về, mặc định uncheck tất cả các checkbox theo các quyền chức năng hoặc quyền thao tác trên các màn hình tương ứng 6. **Backend DMS trả về cho Frontend:**       * Backend DMS nhận dữ liệu JSON từ SSO và chuyển tiếp về cho Frontend. 7. **Hiển thị trên Giao diện (Frontend):**     * Frontend nhận dữ liệu và hiển thị danh sách các menu màn hình theo các nhóm quyền chức năng và quyền thao tác mặc định bên dưới. Tất cả các checkbox mặc định không chọn. |
| Mô tả | Text(300) | Có | Không | * Cho phép người dùng nhập mô tả cho vai trò * Placeholder: [theo rule chung của hệ thống](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO) * Rule validate   + Số lượng ký tự <= 300 |
| Lưu | Button | Có | Không | Sau khi người dùng đã nhập đầy đủ thông tin, button này sẽ lưu lại vai trò mới vào hệ thống.  Khi nhấn Lưu hiển thị thông báo: Bạn có muốn lưu thông tin không?   * Đồng ý: Lưu thông tin vai trò người dùng   + Hệ thống cần kiểm tra các trường bắt buộc phải được nhập đầy đủ trước khi cho phép lưu thông tin. Chưa nhập đủ: "Trường @tên trường là bắt buộc!"   + Quét toàn bộ cây phân quyền. Nếu không có bất kỳ ô checkbox nào được tick, hệ thống từ chối hành động lưu. Hiển thị thông báo lỗi: "Lỗi: Vai trò phải được gán ít nhất một quyền chức năng. Vui lòng chọn ít nhất một quyền trước khi lưu."   + Lưu thành công      - Hiển thị một thông báo thành công (ví dụ: "Lưu vai trò thành công")     - Hệ thống tạo một bản ghi vai trò mới trong cơ sở dữ liệu.     - Đóng cửa sổ popup.     - Tự động làm mới (refresh) lại màn hình danh sách để hiển thị vai trò vừa được tạo. * Hủy: Đóng popup và quay về màn hình hiện tại. |
| Đóng hoặc Button X | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. Hiển thị cảnh báo: "Bạn chắc chắn muốn thoát?"   + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |

Chi tiết phân quyền

| Tên trường/Thành phần | Loại đối tượng/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả chi tiết & Hành vi |
| --- | --- | --- | --- | --- |
| **Phân quyền** |  |  |  | Tiêu đề danh sách: Phân quyền  **Luồng tương tác của người dùng (User Flow)**  **Bước 1:****Mở rộng Menu Cha (Expand)**   * Người dùng nhấp vào biểu tượng mũi tên (>) bên cạnh một menu cha (ví dụ: "Báo cáo"). * Hệ thống hiển thị danh sách các menu con thuộc menu cha đó (ví dụ: "Bán hàng", "Tuyến bán hàng", "Phân tích"). * Cây phân cấp menu hiển thị trong giao diện phải đồng nhất với cây menu chính của toàn bộ hệ thống   **Bước 2: Mở rộng Menu Con để xem Lưới Phân quyền (Expand)**   * Người dùng nhấp vào biểu tượng mũi tên (>) bên cạnh một menu con (ví dụ: "Phân tích"). * Hệ thống hiển thị Lưới Phân quyền chi tiết cho menu con đó. Lưới này bao gồm các tính năng cụ thể và các quyền chức năng hoặc quyền thao tác tương ứng (Xem, Sửa, Xóa, v.v.) từ màn hình tạo mới (xem mô tả). Cho phép cuộn sang ngang để xem nhiều quyền chức năng hoặc quyền thao tác, cho phép cuộn dọc để xem nhiều menu. * Cây phân cấp menu hiển thị trong giao diện expand phải đồng nhất với cây menu chính của toàn bộ hệ thống (theo vai trò mặc định trả về từ SSO tương ứng với quyền của vai trò khởi tạo)   **Bước 3: Thao tác đóng (Collapse)**   * Người dùng có thể nhấp vào biểu tượng (- hoặc v) ở bất kỳ cấp nào để thu gọn lại cây phân quyền ở cấp đó. |
| **Giao diện phân quyền theo cấp menu** | Accordion / Expandable List | **Có** | Không | **Chức năng:** Hiển thị cây menu phân cấp của hệ thống.    * Cây phân cấp menu hiển thị trong giao diện phải đồng nhất với cây menu chính của toàn bộ hệ thống   **Hành vi:** Người dùng có thể click vào các icon '>' để mở rộng và xem các cấp menu sâu hơn. Sau khi click thì icon '>'  chuyển thành 'v' |
| **Lưới Phân quyền chi tiết** | Table / Grid | **Không** | Không | **Chức năng:** Hiển thị các quyền hạn đã được gán cho vai trò đối với từng tính năng cụ thể khi tạo mới/ điều chỉnh.  **Trạng thái:** Hiển thị ô vuông để chọn    * Checkbox = Có: Quyền thao tác hoặc quyền chức năng này được gán cho màn hình tương ứng * Checkbox = Không: Quyền thao tác hoặc quyền chức năng này KHÔNG được gán cho màn hình tương ứng   Nếu BE có **chỉnh sửa thêm mới menu màn hình/ thêm mới các quyền chức năng hoặc quyền thao tác** → Danh sách **quyền chức năng hoặc quyền thao tác** và menu màn hình cũng được cập nhật và hiển thị khi mở màn hình tạo mới. Hiển thị theo thứ tự màn hình thêm mới từ trên xuống, thứ tự thao tác thêm mới từ trái qua phải. |
| **Chọn tất cả** | Checkbox | Có | Không | Mặc định checkbox = không chọn  Khi chọn hệ thống tự động chọn cho tất cả các ô vuông có trên tất cả các lưới chi tiết phân quyền  khi gỡ chọn => Gỡ tất cả các ô vuông có trên tất cả các lưới chi tiết phân quyền bên dưới |
| **Trạng thái hiển thị** | Icon / Trạng thái hiển thị | **Có** | Không | **Chức năng:** hiển thị các ô chọn (checkbox) trên lưới phân quyền chi tiết.  **Mô tả:** Một ô vuông chọn (checkbox) được hiển thị ở giao điểm của một **Màn hình** (hàng) và một **Quyền thao tác** (cột) , người dùng có thể chọn/ bỏ chọn vao ô vuông.  **Hành vi:** **Người dùng click vào ô vuông để chọn áp dụng quyền hoặc click lần 2 để bỏ chọn quyền. Mặc định rỗng, không chọn khi tạo mới.**  **Mô tả:**   * Hiển thị icon dấu check (): hành động tương ứng với màn hình được chọn   + Chọn một ô vuông bất kỳ đang rỗng ()→ ô vuông hiển thị ()   + Ô vuông dưới chữ "Tất cả" (cột "Tất cả"): khi chọn → tất cả các ô vuông thuộc quyền chức năng hoặc quyền thao tác trong hàng ngang và cả hàng dọc có trên lưới danh sách đang thao tác đều được chọn   + Ô vuông đầu mỗi hàng (cột "Tất cả"): Khi chọn → tất cả các quyền chức năng hoặc quyền thao tác trong cùng hàng ngang có ô vuông đều được chọn   + Ô vuông dưới các quyền chức năng hoặc quyền thao tác: Khi chọn → tất cả các quyền chức năng hoặc quyền thao tác trong cùng hàng dọc có ô vuông đều được chọn * Để trống  khi không có một quyền nào được cấp * Tự động hiển thị dấu  () ở cột tất cả/ ở Ô vuông dưới các quyền chức năng hoặc quyền thao tác: khi có ít nhất một quyền KHÔNG được chọn |
| Các quyền chức năng hoặc quyền thao tác trên lưới phân quyền | Datacolums | **Không** | Không | Nếu BE có **chỉnh sửa thêm mới menu màn hình/ thêm mới các quyền chức năng hoặc quyền thao tác** → Danh sách **quyền chức năng hoặc quyền thao tác** và menu màn hình cũng được cập nhật và hiển thị khi mở màn hình tạo mới. Hiển thị theo thứ tự màn hình thêm mới từ trên xuống, thứ tự thao tác thêm mới từ trái qua phải.  **Hiển thị mặc định danh sách các quyền chức năng hoặc quyền thao tác theo thứ tự hiển thị trên bảng dưới, áp dụng cho tất cả các menu hệ thống:**   | STT | Tên Quyền | Mã SSO | **Tooltip khi hover vào tên quyền chức năng tương ứng** | Mô tả chi tiết & Ý nghĩa nghiệp vụ | Ví dụ liên kết với màn hình | | --- | --- | --- | --- | --- | --- | | 1 | **Tất cả** |  | Chọn để bật/tắt nhanh tất cả các quyền liên quan trên cùng một hàng hoặc cùng một cột. | * Ô vuông dưới chữ "Tất cả" (cột "Tất cả"): khi chọn → tất cả các ô vuông thuộc quyền chức năng hoặc quyền thao tác trong hàng ngang và cả hàng dọc có trên lưới danh sách đang thao tác đều được chọn * Ô vuông đầu mỗi hàng (cột "Tất cả"): Khi chọn → tất cả các quyền chức năng hoặc quyền thao tác trong cùng hàng ngang có ô vuông đều được chọn | - Khi người dùng tick vào checkbox "Tất cả" cho màn hình "Quản lý Khách hàng", tất cả các checkbox quyền khác trên hàng đó (Xem, Sửa, Xóa,...) sẽ tự động được tick theo. | | 2 | **Xem danh sách** | BROWSE | Cấp quyền truy cập vào màn hình và xem danh sách. Đây là quyền cơ bản để thấy được menu chức năng. | **Quyền cơ bản và quan trọng nhất.** Cho phép người dùng nhìn thấy mục menu tương ứng trong hệ thống và truy cập vào màn hình để xem danh sách các đối tượng. **Nếu không có quyền này, người dùng sẽ không thấy menu đó.** | Màn hình "Tồn kho điểm bán": Người dùng có thể vào màn hình và xem danh sách tồn kho của các điểm bán. | | 3 | **Xem chi tiết** | READ | Cho phép xem thông tin chi tiết của một bản ghi cụ thể. | Cho phép người dùng xem thông tin đầy đủ của **một** đối tượng cụ thể từ danh sách. Thường được kích hoạt bằng cách nhấp vào một ico xem cụ thể hoặc vào tên/mã của đối tượng. | - Trên mỗi dòng trong danh sách khách hàng, tên khách hàng là một hyperlink hoặc có một icon "Xem chi tiết".  - Người dùng có thể nhấp vào đó để mở popup hoặc trang "Chi tiết Khách hàng" ở chế độ chỉ đọc. | | 4 | **Import dữ liệu** | IMPORT | Cho phép người dùng tải lên file (Excel) để tạo mới hoặc cập nhật dữ liệu hàng loạt. | Cho phép người dùng tải lên một file dữ liệu (Excel) để tạo mới hoặc cập nhật hàng loạt bản ghi. | Màn hình "Tuyến bán hàng":Cho phép người dùng import một file chứa dữ liệu điểm bán để gán vàotuyến bán hàng đã tạo | | 5 | **Export dữ liệu** | EXPORT | Cho phép người dùng xuất dữ liệu từ danh sách ra file (Excel) để làm báo cáo hoặc phân tích. | Cho phép người dùng xuất dữ liệu từ danh sách ra file Excel hoặc định dạng khác để báo cáo hoặc phân tích ngoại tuyến. | Màn hình "Độ phủ sản phẩm": Người dùng có thể nhấn nút "Export" để tải về báo cáo độ phủ sản phẩm tại các điểm bán. | | 6 | **Tạo mới** | CREATE | Cấp quyền tạo mới một bản ghi. | Cho phép người dùng tạo ra một đối tượng mới hoàn toàn. | - Người dùng nhìn thấy và có thể nhấp vào nút **"+ Tạo mới"** để thêm mới một sản phẩm hoặc một khách hàng. | | 7 | **Phê duyệt** | APPROVE | Cấp quyền thực hiện hành động 'Duyệt' hoặc 'Từ chối' đối với các bản ghi đang trong một quy trình làm việc. | Chức năng phên duyệt Cho phép người dùng thực hiện hành động duyệt hoặc từ chối trong một quy trình làm việc. | Chức năng duyệt đăng ký chương trình trưng bày, tích lũy  Theo quy trình suyệt.  Quyền này cho phép người quản lý nhìn thấy các nút **"Duyệt"** và **"Từ chối"** đối với các khách hàng đang ở trạng thái "Chờ duyệt" để thực hiện **"Duyệt"** hoặc **"Từ chối"** | | 8 | **Xóa dữ liệu** | DELETE | Cho phép xóa vĩnh viễn một bản ghi khỏi hệ thống. | Cho phép người dùng xóa vĩnh viễn một đối tượng khỏi hệ thống. Đây là một hành động nguy hiểm và cần có xác nhận. | Trên mỗi dòng khách hàng, có một icon "Xóa" (hình thùng rác).  Khi nhấp vào, hệ thống phải hiển thị một popup xác nhận (ví dụ: "Bạn có chắc chắn muốn xóa khách hàng này không?") | | 9 | **Hủy** | CANCEL | Cho phép hủy một bản ghi trên hệ thống | Cho phép người dùng hủy một đơn hàng, hủy phiểu xuất kho | Màn hình Đặt hàng NPP cho phép hủy đơn đặt hàng nhà phân phối bằng cách chọn button Hủy | | 10 | **Cập nhật dữ liệu** | UPDATE | Cho phép chỉnh sửa thông tin chi tiết của một bản ghi đã có. | Cho phép người dùng chỉnh sửa thông tin của một đối tượng đã tồn tại. | Trên mỗi dòng khách hàng, có một icon "Sửa" (hình bút chì).  Nhấp vào sẽ mở form cập nhật tương ứng với các thông tin đã được điền sẵn và cho phép chỉnh sửa, sau đó lưu lại. | | 11 | **Cập nhật trạng thái** | UPDATE\_  STATUS | Cho phép thay đổi nhanh trạng thái của bản ghi ngay trên danh sách, chuyển đổi giữa các trạng thái "hoạt động" sang "Không hoạt động" và ngược lại. | Cho phép người dùng thay đổi trạng thái của một đối tượng một cách nhanh chóng mà không cần vào màn hình Sửa chi tiết. | - Trong danh sách khách hàng, có một cột "Trạng thái". Quyền này cho phép người dùng thay đổi trực tiếp trạng thái trên lưới hoặc trong màn hình chi tiết  Ví dụ Active/ Inactive Tuyến bán hàng | | 12 | Khởi tạo lại |  | Cho phép người dùng được quyền chuyển bản ghi về trạng thái khởi tạo để điều chỉnh hoặc duyệt lại. | Cho phép người dùng được quyền revert bản ghi về trạng thái khởi tạo để điều chỉnh hoặc duyệt lại. |  | | 13 | **[ Tên quyền chức năng hoặc quyền thao tác được thêm mới ]** |  | Tooltip bổ sung khi có thêm quyền mới | ... | .... |       **Riêng menu: Chương trình khuyến mãi, hiển thị thêm các quyền thao tác sau:**   | STT | Tên Quyền | Mã SSO | **Tooltip khi hover vào tên quyền chức năng tương ứng** | Mô tả chi tiết & Ý nghĩa nghiệp vụ | | --- | --- | --- | --- | --- | | 1 | **Tất cả** |  | Chọn để bật/tắt nhanh tất cả các quyền liên quan trên cùng một hàng hoặc cùng một cột. | * Ô vuông dưới chữ "Tất cả" (cột "Tất cả"): khi chọn → tất cả các ô vuông thuộc quyền chức năng hoặc quyền thao tác trong hàng ngang và cả hàng dọc có trên lưới danh sách đang thao tác đều được chọn * Ô vuông đầu mỗi hàng (cột "Tất cả"): Khi chọn → tất cả các quyền chức năng hoặc quyền thao tác trong cùng hàng ngang có ô vuông đều được chọn | | 2 | **Xem danh sách** | BROWSE | Cấp quyền truy cập vào màn hình và xem danh sách. Đây là quyền cơ bản để thấy được menu chức năng. | **Quyền cơ bản và quan trọng nhất.** Cho phép người dùng nhìn thấy mục menu tương ứng trong hệ thống và truy cập vào màn hình để xem danh sách các đối tượng. **Nếu không có quyền này, người dùng sẽ không thấy menu đó.** | | 3 | **Xem chi tiết** | READ | Cho phép xem thông tin chi tiết của một bản ghi cụ thể. | Cho phép người dùng xem thông tin đầy đủ của **một** đối tượng cụ thể từ danh sách. Thường được kích hoạt bằng cách nhấp vào một ico xem cụ thể hoặc vào tên/mã của đối tượng. | | 4 | **Import dữ liệu** | IMPORT | Cho phép người dùng tải lên file (Excel) để tạo mới hoặc cập nhật dữ liệu hàng loạt. | Cho phép người dùng tải lên một file dữ liệu (Excel) để tạo mới hoặc cập nhật hàng loạt bản ghi. | | 5 | **Export dữ liệu** | EXPORT | Cho phép người dùng xuất dữ liệu từ danh sách ra file (Excel) để làm báo cáo hoặc phân tích. | Cho phép người dùng xuất dữ liệu từ danh sách ra file Excel hoặc định dạng khác để báo cáo hoặc phân tích ngoại tuyến. | | 6 | **Tạo mới** | CREATE | Cấp quyền tạo mới một bản ghi. | Cho phép người dùng tạo ra một đối tượng mới hoàn toàn. | | 7 | **Phê duyệt** | APPROVE | Cấp quyền thực hiện hành động 'Duyệt' hoặc 'Từ chối' đối với các bản ghi đang trong một quy trình làm việc. | Chức năng phên duyệt Cho phép người dùng thực hiện hành động duyệt hoặc từ chối trong một quy trình làm việc. | | 8 | **Xóa dữ liệu** | DELETE | Cho phép xóa vĩnh viễn một bản ghi khỏi hệ thống. | Cho phép người dùng xóa vĩnh viễn một đối tượng khỏi hệ thống. Đây là một hành động nguy hiểm và cần có xác nhận. | | 9 | **Hủy** | CANCEL | Cho phép hủy một bản ghi trên hệ thống | Cho phép người dùng hủy một đơn hàng, hủy phiểu xuất kho | | 10 | **Cập nhật dữ liệu** | UPDATE | Cho phép chỉnh sửa thông tin chi tiết của một bản ghi đã có. | Cho phép người dùng chỉnh sửa thông tin của một đối tượng đã tồn tại. | | 11 | Yêu Cầu Duyệt KM | REQUEST\_APPROVAL | Cấp quyền cho phép gửi yêu cầu duyệt chương trình khuyến mãi | Người dùng chỉ được "Gửi xét duyệt" với 2 trạng thái "Khởi tạo" và "Tạm ngưng" | | 12 | Từ Chối KM | REJECT | Cấp quyền được từ chối duyệt chương trình khuyến mãi | * **Từ chối**    + CTKM bị từ chối | | 13 | Tạm Ngưng | POSTPONE | Cấp quyền được tạm ngưng chương trình khuyến mãi | * **Tạm Ngưng:**   + CTKM sẽ không áp dụng cho các đơn hàng trong thời gian tạm ngưng   + User bấm vào nút Tạm ngưng thủ công để Tạm ngưng CTKM | | 14 | Tiếp Tục KM Đã Tạm Ngưng | RESUME | Cấp quyền được duyệt để tiếp tục chương trình khuyến mãi đã tạm ngưng | Người dùng chỉ được "Gửi xét duyệt" CTKM đã "Tạm ngưng"→ User  thực hiện duyệt để tiếp tục CTKM đã tạm ngưng | | 15 | Kết Thúc KM | END | Cấp quyền cho phép kết thúc các chương trình khuyến mãi trên màn hình CTKM | Người dùng chọn button "Kết thúc" để kết thúc CTKM trên màn hình CTKM | |

Xem chi tiết

## Xem chi tiết nhóm quyền

* Từ màn hình "Danh sách nhóm quyền": Người dùng nhấp chuột vào giá trị trong cột "Tên vai trò" (định dạng hyperlink) của một vai trò bất kỳ.
* Hệ thống phản hồi: Hệ thống điều hướng người dùng đến trang "Chi tiết nhóm quyền" và tải dữ liệu tương ứng với vai trò đã chọn.
  + Chế độ Chỉ đọc (Read-Only): Đây là quy tắc quan trọng nhất. Hiển thị màn hình chứa toàn bộ thông tin trên màn hình tương tự màn hình Thêm mới.
    - Disable tất cả các button (trừ button Đóng và dấu x) và các thao tác (chọn/ bỏ chọn) trên màn hình này Trừ expand; Collapse;  chỉ cho phép xem và đóng màn hình.
  + Tính toàn vẹn dữ liệu: Dữ liệu được hiển thị trên màn hình "Chi tiết nhóm quyền" phải là dữ liệu mới nhất, chính xác và đồng nhất với dữ liệu đang được lưu trữ trong cơ sở dữ liệu.

Cập nhật vai trò và quyền

## Cập nhật vai trò

Mục đích: Hiển thị màn hình cập nhật vai trò, chức năng này cho phép người dùng quản trị (Admin/ người dùng được phân quyền) chỉnh sửa thông tin và cấu hình phân quyền của một nhóm quyền (vai trò) đã tồn tại.

Tên màn hình: "Chỉnh sửa + tên màn hình"

Mô tả:

Từ màn hình "Danh sách nhóm quyền": Người dùng tìm đến vai trò cần chỉnh sửa và nhấp vào biểu tượng "Chỉnh sửa" (hình bút chì) ở cột "Tùy chỉnh".  
Hệ thống phản hồi: Hệ thống hiển thị cửa sổ (popup) "Cập nhật vai trò", đồng thời tải và điền sẵn tất cả thông tin hiện tại của vai trò đó vào các trường tương ứng.

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tên vai trò | Text (100) | Có | Có | * Hiển thị tên vai trò đã lưu * Cho phép người dùng xóa và nhập tên cho vai trò * Xóa hiển thị: Placeholder: theo rule chung của hệ thống * Rule validate: Số lượng ký tự <= 100 |
| Quyền | Selectbox onechoice | Có | Có | Hiển thị tên quyền  Disable, Không cho phép chọn lại quyền |
| Mô tả | Text(300) | Có | Không | * Cho phép người dùng chỉnh sửa nội dung mô tả chi tiết về vai trò * Xóa mô tả, hiển thị Placeholder: theo rule chung của hệ thống * Rule validate: Số lượng ký tự <= 300 |
| Khu vực phân quyền | Accordion / Expandable List | Có | Không | Chức năng giống hệt màn hình Thêm mới.  Hiển thị cây menu và lưới phân quyền với các checkbox đã được tick sẵn theo cấu hình hiện tại của vai trò.  Người dùng có thể thêm/bớt quyền bằng cách tick/bỏ tick các ô checkbox.  Cho phép thao tác ở checkbox Chọn tất cả: Chọn "Chọn tất cả" hoặc bỏ chọn "Chọn tất cả" |
| Lưu | Button | Có | Không | Sau khi người dùng đã nhập đầy đủ thông tin, button này sẽ lưu lại dữ liệu cập nhật trên hệ thống.  Khi nhấn "Lưu" hiển thị thông báo: Bạn có muốn cập nhật thông tin không?   * + Đồng ý: Lưu thông tin theo vai trò người dùng     - Hệ thống cần kiểm tra các trường bắt buộc phải được nhập đầy đủ trước khi cho phép lưu thông tin. Chưa nhập đủ: "Trường @tên trường là bắt buộc!"     - Quét toàn bộ cây phân quyền. Nếu không có bất kỳ ô checkbox nào được tick, hệ thống từ chối hành động lưu. Hiển thị thông báo lỗi: "Lỗi: Vai trò phải được gán ít nhất một quyền chức năng. Vui lòng chọn ít nhất một quyền trước khi lưu."     - Cập nhật thành công        * Hệ thống lưu tất cả các thay đổi (tên, mô tả, quyền, cấu hình phân quyền) vào cơ sở dữ liệu.       * Ghi lại log thay đổi vào lịch sử cập nhật của vai trò.       * Hiển thị một thông báo thành công (ví dụ: "Cập nhật vai trò thành công").       * Đóng cửa sổ "Cập nhật vai trò". Tự động làm mới (refresh) lại dòng dữ liệu của vai trò vừa được cập nhật trên màn hình danh sách.   + Hủy: Đóng popup và quay về màn hình hiện tại. |
| Đóng hoặc Button X | Button | Có | Không | * Đóng màn hình, mọi thay đổi chưa được lưu sẽ bị hủy bỏ.  * Hiển thị cảnh báo: "Bạn chắc chắn muốn thoát?"   + Đồng ý: Đóng màn hình, không lưu dữ liệu   + Hủy: tắt popup và trở lại màn hình |

Sao chép vai trò và quyền

## Sao chép vai trò

Mục đích: Chức năng này cho phép người dùng quản trị (Người dùng được phân quyền) tạo nhanh một nhóm quyền mới bằng cách sao chép toàn bộ thông tin và cấu hình phân quyền từ một vai trò đã có sẵn. Mục tiêu chính là tiết kiệm thời gian, giảm thiểu sai sót do nhập liệu thủ công và đảm bảo tính nhất quán khi tạo các vai trò có quyền hạn tương tự nhau.

Thao tác:

* Từ màn hình "Danh sách nhóm quyền": Người dùng tìm đến vai trò muốn sao chép và nhấp vào biểu tượng "Sao chép" (hình icon sao chép) ở cột "Tùy chỉnh".
* Hệ thống phản hồi: Hệ thống hiển thị cửa sổ (popup) "Thêm mới vai trò" và tự động điền các thông tin từ vai trò gốc vào các trường tương ứng theo quy tắc được mô tả bên dưới. tên vai trò hiển thị: **[Tên vai trò gốc ] - "Sao chép"**

Chi tiết: Xem Tạo mới vai trò

# Màn hình Tài khoản người dùng

## Giao diện Thêm mới:

Màn hình Tài khoản người dùng: [Tạo mới tài khoản người dùng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48437108#id-[HO]T%C3%A0iKho%E1%BA%A3nNg%C6%B0%E1%BB%9DiD%C3%B9ng-T%E1%BA%A1om%E1%BB%9Bit%C3%A0ikho%E1%BA%A3nng%C6%B0%E1%BB%9Did%C3%B9ngCreate_User)

Nội dung thay đổi như mô tả (chữ màu xanh)

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Nhóm quyền HO/Nhà Phân Phối | Selectbox One Choice | Có | Có | Chọn nhóm quyền HO hoặc Nhà phân phối của người dùng, dữ liệu lấy ở danh sách nhóm quyền từ ~~SSO~~ **màn hình Nhóm quyền**, với role là quyền HO hoặc NPP tùy theo radio button Quyền HO/Quyền Nhà Phân Phối mà người dùng đã chọn    * Trường này cho phép người dùng nhóm quyền để cài đặt quyền cho tài khoản người dùng. * Người dùng có thể tìm kiếm và chọn một nhóm quyền từ danh sách có sẵn để cài đặt. * **Mở danh sách:** Khi người dùng nhấp vào trường **Nhóm quyền**, một danh sách các nhóm quyền sẽ được mở ra, dữ liệu lấy lấy ở danh sách nhóm quyền từ ~~SSO~~ **màn hình Nhóm quyền**, với role là quyền HO hoặc NPP tùy theo radio button Quyền HO/Quyền Nhà Phân Phối mà người dùng đã chọn   + Nếu chọn quyền HO: Load danh sách các vai trò có Quyền = HO từ màn hình nhóm quyền   + Nếu chọn quyền Nhà phân phối: Load danh sách các vai trò có Quyền = Nhà phân phối từ màn hình nhóm quyền * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhóm quyền mong muốn. Sau đó, chọn một nhóm quyền bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Nhóm quyền đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tag) * Trường hợp bỏ chọn nhóm quyền trong hộp chọn thì mặc định hiểu là **chưa chọn nhóm quyền nào.** * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |

## Giao diện Danh sách:

Màn hình Tài khoản người dùng: [Danh Sách Tài Khoản Người Dùng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48437108#id-[HO]T%C3%A0iKho%E1%BA%A3nNg%C6%B0%E1%BB%9DiD%C3%B9ng-DanhS%C3%A1chT%C3%A0iKho%E1%BA%A3nNg%C6%B0%E1%BB%9DiD%C3%B9ng)

Nội dung thay đổi như mô tả (chữ màu xanh):

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm | | | | |
| Nhóm quyền HO | Selectbox multichoice | Có | Không | Chọn nhóm quyền HO để tìm kiếm tài khoản người dùng, dữ liệu lấy từ danh sách nhóm quyền từ ~~SSO~~ **màn hình Nhóm quyền**, với loại role là Người dùng HO (Quyền HO)   * Trường này cho phép người dùng chọn nhiều nhóm quyền cùng lúc để lọc danh sách tài khoản dựa trên các nhóm quyền đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều nhóm quyền từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách tài khoản. * **Mở danh sách:** Khi người dùng nhấp vào trường **Nhóm quyền**, một danh sách các nhóm quyền sẽ được mở ra, dữ liệu lấy từ danh sách nhóm quyền từ ~~SSO~~ **màn hình Nhóm quyền**,  với loại role là Người dùng HO (Quyền HO) * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhóm quyền mong muốn. Sau đó, họ có thể chọn một hoặc nhiều nhóm quyền bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Các nhóm quyền đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags) hoặc danh sách ngăn cách bởi dấu phẩy. * **Kết quả lọc:** Danh sách tài khoản sẽ tự động được lọc để hiển thị những tài khoản thuộc các nhóm quyền đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn nhóm quyền không mong muốn. * Trường hợp bỏ chọn toàn bộ các nhóm quyền trong hộp chọn thì mặc định hiểu là chọn tất cả nhóm quyền để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Nhóm quyền NPP | Selectbox multichoice | Có | Không | Chọn nhóm quyền NPP để tìm kiếm tài khoản người dùng, dữ liệu lấy từ danh sách nhóm quyền từ ~~SSO~~ **màn hình Nhóm quyền**, với loại role là Người dùng NPP (Quyền Nhà phân phối) (Quyền Nhà phân phối)   * Trường này cho phép người dùng chọn nhiều nhóm quyền cùng lúc để lọc danh sách tài khoản dựa trên các nhóm quyền đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều nhóm quyền từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách tài khoản. * **Mở danh sách:** Khi người dùng nhấp vào trường **Nhóm quyền**, một danh sách các nhóm quyền sẽ được mở ra, dữ liệu lấy từ danh sách nhóm quyền từ ~~SSO~~ **màn hình Nhóm quyền**,  với loại role là Người dùng NPP (Quyền Nhà phân phối) * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhóm quyền mong muốn. Sau đó, họ có thể chọn một hoặc nhiều nhóm quyền bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Các nhóm quyền đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags) hoặc danh sách ngăn cách bởi dấu phẩy. * **Kết quả lọc:** Danh sách tài khoản sẽ tự động được lọc để hiển thị những tài khoản thuộc các nhóm quyền đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn nhóm quyền không mong muốn. * Trường hợp bỏ chọn toàn bộ các nhóm quyền trong hộp chọn thì mặc định hiểu là chọn tất cả nhóm quyền để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |

## Import tài khoản người dùng

Nhóm quyền HO/NPP: 

Nhóm quyền HO/NPP của người dùng

Hiển thị danh sách nhóm quyền trong dropdown để người dùng chọn, dữ liệu lấy ở danh sách nhóm quyền từ ~~SSO~~ **màn hình Nhóm quyền**, với role tương ứng đã chọn từ trường Loại nhóm quyền

* Loại nhóm quyền = HO: dropdown lấy danh sách các vai trò đang gắn quyền = HO trên màn hình Nhóm quyền, hiển thị trong dropdownlist là "mã code - tên nhóm quyền"
* Loại nhóm quyền = NPP: dropdown lấy danh sách các vai trò đang gắn quyền = Nhà phân phối trên màn hình Nhóm quyền, hiển thị trong dropdownlist là "mã code - tên nhóm quyền"

---

**//Chức năng bên dưới không thực hiện trong scope này.**

Xem danh sách tài khoản

**Xem danh sách tài khoản**

Mục đích: Popup cho phép xem nhanh danh sách tất cả các tài khoản người dùng đang được gán một vai trò cụ thể. Mục tiêu là giúp Admin kiểm tra, kiểm soát và nắm bắt được phạm vi ảnh hưởng của một vai trò trong hệ thống

* Từ màn hình "Danh sách nhóm quyền": Người dùng tìm đến vai trò muốn kiểm tra và nhấp vào biểu tượng "Xem danh sách tài khoản" (con ba gạch ngang) ở cột "Tùy chỉnh".
* Hệ thống phản hồi: Hệ thống hiển thị cửa sổ (popup) "Danh sách Tài khoản", tải và hiển thị danh sách các người dùng được gán vai trò tương ứng.

Màn hình:

Mô tả:

| Tên trường/Thành phần | Loại đối tượng | Mô tả chi tiết & Hành vi |
| --- | --- | --- |
| **Tiêu đề popup** | Label | Hiển thị tiêu đề "Danh sách tài khoản" |
| **Nút Đóng (X)** | Button / Icon | Đặt ở góc trên bên phải, cho phép người dùng đóng cửa sổ. |
| **Lưới dữ liệu tài khoản** | Table / Grid | Hiển thị danh sách người dùng dưới dạng bảng. |
| **Avatar** | Image / Icon | Hiển thị ảnh đại diện của người dùng hoặc một avatar mặc định của tài khoản đang được gán quyền |
| **Mã tài khoản** | Data Column - have copy | Hiển thị mã định danh duy nhất của tài khoản |
| **Tên tài khoản** | Data Column | Hiển thị tên đầy đủ của người dùng. |
| **Số Điện Thoại** | Data Column | Hiển thị số điện thoại của người dùng |
| **Email** | Data Column | Hiển thị địa chỉ email của người dùng |
| **Mã tham chiếu** | Data Column- have copy | Hiển thị mã tham chiếu nếu có |
| **Người Tạo** | Data Column - Tag | Hiển thị mã tài khoản của người đã tạo ra người dùng này. |
| **Thời Gian Tạo** | Data Column | Hiển thị ngày và giờ tạo tài khoản. |
| **Người Cập Nhật** | Data Column - tag | Hiển thị mã tài khoản của người cuối cùng cập nhật thông tin người dùng này. |
| **Thời Gian Cập Nhật** | Data Column | Hiển thị ngày và giờ của lần cập nhật cuối cùng. |
| **Thanh cuộn** | Scrollbar | Tự động xuất hiện nếu tổng chiều rộng các cột vượt quá chiều rộng hoặc chiều dài của popup. |
| **Phân trang** | Pagination Control | Phân trang hiển thị danh sách tài khoản |

Xem lịch sử cập nhật

**Xem lịch sử cập nhật**

Mục đích: Chức năng này cung cấp cho người quản trị (Admin) một công cụ mạnh mẽ để theo dõi, kiểm tra và truy vết lại tất cả các thay đổi đã được thực hiện trên một vai trò cụ thể, bao gồm cả thay đổi thông tin cơ bản và thay đổi chi tiết về phân quyền.

* Xem lịch sử vai trò
  + Chọn icon Xem chi tiết Lịch sử
  + Giao diện hiển thị thông tin xem lịch sử
* Lọc và tìm kiếm
  + Chọn thời gian để lọc và hiển thị các thông tin chỉnh sửa
  + Giao diện hiển thị thông tin theo kết quả tìm kiếm trên
* Xem chi tiết lịch sử phân quyền: Điều chỉnh các quyền thao tác hoặc quyền chức năng
* Xuất dữ liệu
  + Chọn icon xuất dữ liệu
  + Hệ thống khởi chạy chức năng xuất
  + Export file tạo thành công, giao diện hiển thị thông tin xuất kèm trạng thái xuất

Màn hình:

1. **Truy cập:** Người dùng nhấp vào biểu tượng "Lịch sử" (hình đồng hồ) của một vai trò trên màn hình "Danh sách nhóm quyền".
2. **Hiển thị Popup Cấp 1:** Hệ thống hiển thị popup "Chi tiết lịch sử"
3. **Hành động trên Popup Cấp 1:**

   * Người dùng có thể lọc danh sách log theo khoảng thời gian.
   * Người dùng có thể nhấn **"Export"** để xuất danh sách log hiện tại ra file Excel.
   * Nếu một dòng log có giá trị ở cột "Trường thông tin" là **"Phân quyền"** (định dạng hyperlink), người dùng có thể nhấp vào đó.
   * Người dùng nhấn nút **"X"** để đóng popup.
4. **Hiển thị Popup Cấp 2:** Khi nhấp vào hyperlink "Phân quyền", hệ thống sẽ đóng popup Cấp 1 và mở popup "Chi tiết lịch sử phân quyền"
5. **Hành động trên Popup Cấp 2:**

   * Người dùng xem ma trận so sánh các thay đổi quyền.
   * Người dùng có thể nhấn **"Export Excel"** để xuất "ảnh chụp nhanh" của sự thay đổi này.
   * Người dùng nhấn nút **"X"** để đóng popup.

**Popup "Chi tiết lịch sử"**

| Tên trường/Thành phần | Loại đối tượng | Mô tả chi tiết & Hành vi |
| --- | --- | --- |
| **Bộ lọc theo Thời gian** | Date Range Picker | * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn. Mặc định ngày hiện tại  * Đến Ngày >= Từ Ngày * Đến Ngày - Từ Ngày <= 31 ngày * Có thể chọn bất kỳ khoảng thời gian nào, miễn là  Đến Ngày - Từ Ngày <= 31 ngày (Lượng data history sẽ được lưu trữ từ 1-3 năm tùy theo hợp đồng từng công ty) |
| **Nút "Tìm kiếm"** | Button | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng nhập ngày để lọc 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách 3. **Hiển thị kết quả:** Danh sách sẽ cập nhật và hiển thị  * Mặc định: Mặc định là ngày hiện tại.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
| **Nút "Export"** | Button | Nhấn Export → Hệ thống Export ra file excel  Phải chọn đủ từ ngày - đến ngày mới được nhấn Export, trường hợp chưa chọn đủ Từ ngày - Đến ngày mà bấm Export, sẽ hiển thị thông báo: Vui lòng chọn thời gian để xem lịch sử!  Tên File Excel như sau: Lịch sử vai trò\_Tên vai trò\_DDMMYYYYHHMMSS |
| **Lưới "Lịch sử cập nhật"** | Table / Grid | Hiển thị danh sách các bản ghi thay đổi theo thứ tự thời gian mới nhất ở trên cùng..  Hiển thị dòng chữ khi không tìm thấy bản ghi nào: "Không có lịch sử cập nhật trong khoảng thời gian đã chọn." |
| **Tên vai trò** | Data Column | tên vai trò có thể thay đổi sau các lần cập nhật. |
| **Thời gian cập nhật** | Data Column | Thời gian cập nhật dd/mm/yyyy hh:mm:ss |
| **Người cập nhật** | Data Column | Mã người cập nhật |
| **Tên người cập nhật** | Data Column | Hiển thị tên người cập nhật theo mã người cập nhật |
| **Trường thông tin** | Data Column | Ghi nhận trường dữ liệu nào đã bị thay đổi.  Giá trị có thể là: "Tên vai trò", "Quyền", "Mô tả", Luôn hiển thị hyperlink **"Phân quyền" nếu có thay đổi bất kỳ dữ liệu nào trên lưới chi tiết phân quyền**   * Khi giá trị là "Phân quyền", toàn bộ dòng này sẽ có thể nhấp vào để xem chi tiết Cấp 2- Chi tiết lịch sử phân quyền. |
| **Thao tác** | Data Column | các thao tác ghi nhận lịch sử gồm:   | Thao tác người dùng | Thao tác (Hiển thị trên UI) | Trường thông tin (Hiển thị trên UI) | Mô tả chi tiết và Quy tắc Ghi nhận | | --- | --- | --- | --- | | **Tạo mới** | **Tạo mới Vai trò** | Ghi nhận **tên vai trò** tạo mới | - **Kích hoạt:** Khi một vai trò mới được tạo thành công trong hệ thống (nhấn "Lưu" trên màn hình Thêm mới hoặc Sao chép).   **Hành vi:** Hệ thống ghi một dòng log duy nhất cho sự kiện tạo mới này.  Nội dung cũ, mới để trống | | **Cập nhật dữ liệu vai trò** | **Cập nhật Vai trò** | Tên vai trò  Mô tả  Quyền  Trạng thái hoạt động | - **Kích hoạt:** Khi người dùng nhấn "Cập nhật" trên màn hình chỉnh sửa vai trò và có sự thay đổi ở một hoặc nhiều trường thông tin cơ bản.  **Hành vi:** Hệ thống sẽ ghi một dòng log cho **mỗi trường** bị thay đổi. (Ví dụ: nếu vừa đổi Tên và Mô tả, sẽ có 2 dòng log).  Nội dung cũ; Nội dung mới: hiển thị theo mô tả bên dưới. | | **Cập nhật dữ liệu phân quyền** | **Cập nhật Phân quyền** | **Phân quyền** | - **Kích hoạt:** Khi người dùng nhấn "Cập nhật" và có bất kỳ sự thay đổi nào trong lưới phân quyền (thêm/bớt quyền).  **Hành vi:** Hệ thống chỉ ghi **một dòng log duy nhất** với "Trường thông tin" là "Phân quyền". Dòng này sẽ là hyperlink để xem chi tiết ở Cấp 2. | | **Gán tài khoản người dùng liên kết với vai trò** | **Gán Tài khoản** | **Tài khoản người dùng** | - **Kích hoạt:** Khi một tài khoản người dùng được gán khỏi vai trò này (thao tác này thường được thực hiện từ màn hình "Quản lý Tài khoản người dùng").  **Hành vi:** Ghi một dòng log cho mỗi hành động gán, có thể kèm theo mã/tên tài khoản bị tác động trong cột mô tả.  Nội dung cũ: để trống nếu chưa gán tài khoản.  Nội dung mới: hiển thị mã - tên tài khoản. NV002 - Nguyễn Văn B | | **Gỡ tài khoản người dùng liên kết với vai trò** | **Gỡ Tài khoản** | **Tài khoản người dùng** | - **Kích hoạt:** Khi một tài khoản người dùng được gỡ khỏi vai trò này (thao tác này thường được thực hiện từ màn hình "Quản lý Tài khoản người dùng").  **Hành vi:** Ghi một dòng log cho mỗi hành động gỡ, có thể kèm theo mã/tên tài khoản bị tác động trong cột mô tả.  Nội dung cũ: hiển thị mã - tên tài khoản. NV002 - Nguyễn Văn B   Nội dung mới: để trống | |
| **Nội dung cũ** | Data Column | Hiển thị giá trị của trường thông tin **trước khi** thay đổi. |
| **Nội dung mới** | Data Column | Hiển thị giá trị của trường thông tin **sau khi** thay đổi. |
| **Nút Đóng (X)** | Icon | Đóng popup Cấp 1 và quay về màn hình Nhóm quyền |

Export Cấp 1

**Export Chi tiết lịch sử**

Kích hoạt chức năng xuất Excel theo Template 1.

* File: Excel
* Tên File Excel như sau: Lịch sử vai trò\_Tên vai trò\_DDMMYYYYHHMMSS

Nội dung file:

| Tên trường | Mô tả |
| --- | --- |
| Màn hình | * Tên màn hình mà người dùng xuất dữ liệu lịch sử * Màn hình: Chi tiết lịch sử |
| Dữ liệu theo thời gian | * Thời gian từ ngày - đến ngày mà người dùng lọc trước khi xuất file báo cáo lịch sử * Từ ngày [dd/mm/yyyy] đến ngày [dd/mm/yyyy] |
| Thời gian xuất báo cáo | * Thời gian xuất báo cáo lịch sử thành công * [dd/mm/yyyy hh:mm:ss] |
| Người xuất báo cáo | * User thực hiện xuất báo cáo lịch sử  * Mã người dùng - Tên người dùng |
|  | |
| **Mã vai trò** | Hiển thị mã vai trò đang chọn |
| **Tên vai trò** | Tên vai trò |
| **Thời gian cập nhật** | Định dạng DD/MM/YYYY HH:MM:SS |
| **Người cập nhật** | Mã người cập nhật |
| **Tên người cập nhật** | Tên người cập nhật |
| **Trường thông tin** | **Hiển thị các trường thông tin được g**hi nhận trường dữ liệu đã bị thay đổi.  Giá trị có thể là: "Tên vai trò", "Quyền", "Mô tả", Luôn hiển thị dòng chữ "Phân quyền" nếu có thay đổi bất kỳ dữ liệu nào trên lưới chi tiết phân quyền. **Khi Trường thông tin là "Phân quyền",** **các cột Nội dung cũ** **và Nội dung mới sẽ được để trống.** |
| **Thao tác** | Hiển thị khi thao tác cập nhật tương ứng |
| **Nội dung cũ** | Hiển thị giá trị của trường thông tin **trước khi** thay đổi. |
| **Nội dung mới** | Hiển thị giá trị của trường thông tin **sau khi** thay đổi. |

**Popup "Chi tiết lịch sử phân quyền"**

| Tên trường/Thành phần | Loại đối tượng | Mô tả chi tiết & Hành vi |
| --- | --- | --- |
| **Tiêu đề popup** | Label | "Chi tiết lịch sử phân quyền". |
| **Khu vực "Thông tin cơ bản"** | Display Area | Hiển thị thông tin của vai trò **tại thời điểm của bản ghi log đó**. Toàn bộ ở trạng thái chỉ đọc.   * Mã vai trò: Có thể copy mã * Tên vai trò * Quyền * Mô tả (Không có mô tả thì hiển thị rỗng nội dung mô tả) |
| STT | Data columns | STT |
| Tên màn hình | Data columns | Tên màn hình điều chỉnh |
| Thao tác | Data columns | Quyền thao tác hoặc quyền chức năng có điều chỉnh |
| Nội dung cũ | Data columns | Hiển thị giá trị của trường thông tin **trước khi** thay đổi. (Có hoặc Không) |
| Nội dung mới | Data columns | Hiển thị giá trị của trường thông tin **sau khi** thay đổi. (Có hoặc Không) |
| **Nút Đóng (X)** | Icon | Đóng popup Cấp 2 và quay trở lại popup Cấp 1. |

Export Chi tiết lịch sử phân quyền

Tên file: Chi tiết lịch sử phân quyền\_[Tên vai trò]\_[YYYYMMDD\_HHMMSS].xlsx

Nội dung file:

| Tên trường | Mô tả |
| --- | --- |
| Màn hình | * Tên màn hình mà người dùng xuất dữ liệu lịch sử * Màn hình: Chi tiết lịch sử phân quyền |
| Vai trò | Hiển thị Mã vai trò - Tên vai trò |
| Thời gian cập nhật | * [dd/mm/yyyy hh:mm:ss] |
| Dữ liệu theo thời gian | * Thời gian từ ngày - đến ngày mà người dùng lọc trước khi xuất file báo cáo lịch sử * Từ ngày [dd/mm/yyyy] đến ngày [dd/mm/yyyy] |
| Thời gian xuất báo cáo | * Thời gian xuất báo cáo lịch sử thành công * [dd/mm/yyyy hh:mm:ss] |
| Người xuất báo cáo | * User thực hiện xuất báo cáo lịch sử  * Mã người dùng - Tên người dùng |

| Tên trường | Mô tả |
| --- | --- |
| STT | STT |
| Tên màn hình | Tên màn hình điều chỉnh |
| Thao tác | Quyền thao tác hoặc quyền chức năng có điều chỉnh |
| Nội dung cũ | Hiển thị giá trị của trường thông tin **trước khi** thay đổi. (Có hoặc Không) |
| Nội dung mới | Hiển thị giá trị của trường thông tin **sau khi** thay đổi. (Có hoặc Không) |