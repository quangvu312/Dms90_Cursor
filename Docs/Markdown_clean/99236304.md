|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | DMS quản lý người liên hệ (Contact) như một thực thể dữ liệu độc lập, có menu và màn hình riêng để xem, tìm kiếm, tạo, sửa — tương tự bất kỳ danh mục nào khác trên DMS. Song song đó, Contact liên kết nhiều-nhiều với Khách hàng: một Khách hàng có nhiều Contact, một Contact gắn được vào nhiều Khách hàng. Khi tạo Khách hàng mới, Contact có thể được tạo kèm ngay trong luồng tạo/điều chỉnh khách hàng. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

# Phạm vi triển khai

### **Mục đích:**

* DMS quản lý người liên hệ (Contact) như một thực thể dữ liệu độc lập, có menu và màn hình riêng để xem, tìm kiếm, tạo, sửa trên DMS. Song song đó, Contact liên kết nhiều-nhiều với Khách hàng: một Khách hàng có nhiều Contact, một Contact gắn được vào nhiều Khách hàng.
* Khi tạo Khách hàng mới, Contact có thể được tạo kèm ngay trong luồng tạo/gắn riêng từ menu Quản lý khách hàng.
* Việc đồng bộ Contact không tách rời khỏi Khách hàng ở **cả hai chiều**:

  + Contact không có lượt push độc lập của riêng; luôn đi kèm dữ liệu Khách hàng, đúng thời điểm Khách hàng đó đồng bộ (DMS → ERP khi vào "Danh sách điểm bán", hoặc ERP → DMS khi ERP đồng bộ ngược lại).
  + Trong request đồng bộ, Contact được khớp theo **số điện thoại**: khớp Contact đang hoạt động → ghi đè toàn bộ theo **last-update-wins**; không khớp → tạo Contact mới.
  + Cho phép tạo/sửa Contact theo phân quyền.

* Giá trị cốt lõi: **Contact là danh mục quản lý được từ cả DMS lẫn ERP, nhưng đồng bộ luôn đi theo Khách hàng, khớp theo số điện thoại, không có lượt push riêng cho Contact.**

### **Tính năng:**

| **Mã FR** | **Tên tính năng** |
| --- | --- |
| CT\_US\_01 | Màn hình Danh sách người liên hệ: Tìm kiếm, lọc, hiển thị, điều hướng nhanh. |
| CT\_US\_02 | Tạo Contact độc lập từ menu Quản lý Contact. |
| CT\_US\_03 | Tạo Khách hàng kèm Contact trên app bán hàng |
| CT\_US\_04 | Tạo Contact trong cùng luồng đồng bộ từ ERP (Upsert). |
| CT\_US\_05 | Chỉnh sửa Contact. |
| CT\_US\_06 | Ngưng hoạt động (Inactive) Contact. |
| CT\_US\_07 | Gắn một Contact có sẵn vào Khách hàng (M–N). |
| CT\_US\_08 | Đồng bộ Contact hai chiều DMS ↔ ERP, khớp theo số điện thoại. |
| CT\_US\_09 | Phân quyền thao tác Xem/Thêm/Sửa/Ngưng/Import/Export. |
| CT\_US\_10 | Lịch sử tác động (Audit Trail) — theo dõi vết thay đổi, xuất lịch sử. |
| CT\_US\_11 | Export danh sách Contact + Data Dictionary. |

### **Người dùng liên quan:**

| **Actor** | **Nhu cầu** |
| --- | --- |
| Nhân viên vận hành / kinh doanh DMS | "Tôi cần một nơi để xem/tìm tất cả; tạo mới/cập nhật/ngưng hoạt động Contact trên DMS." |
| Sale (App) / Backoffice (Web) | "Khi tạo khách hàng mới, tôi cần khai báo luôn người liên hệ mà không phải chuyển màn hình khác." |
| Sale / Backoffice | "Một người liên hệ tôi biết cũng phụ trách khách hàng khác — tôi cần gắn contact đó vào nhiều khách hàng thay vì nhập lại." |
| Hệ thống ERP (System Actor) | "Khi tôi đồng bộ Khách hàng sang DMS, thông tin liên hệ đi kèm phải được cập nhật đúng — dù đã tồn tại (update) hay hoàn toàn mới (create)." |
| Quản trị viên (Admin) | "Tôi cần Import hàng loạt, Export dữ liệu và tra cứu lịch sử thay đổi để kiểm soát chất lượng master data." |

### **Nguyên tắc hệ thống:**

| **Mã BR** | **Nội dung quy tắc** |
| --- | --- |
| BR-01 | Khóa định danh nghiệp vụ (Business Key) của Contact là Số điện thoại chính. Sau khi lưu thành công, KHÔNG cho phép chỉnh sửa số điện thoại chính. |
| BR-02 | Mọi đồng bộ Contact đi kèm theo Khách hàng — không có request push độc lập cho Contact. |
| BR-03 | Cơ chế Upsert theo số điện thoại: nếu số điện thoại đã thuộc một Contact đang hoạt động → ghi đè toàn bộ record theo dữ liệu mới nhận (last-write-wins, so theo thời điểm hệ thống nhận request); nếu chưa tồn tại → tạo Contact mới. |
| BR-04 | Với Contact đang Inactive: khi nhận đồng bộ khớp số điện thoại → ghi đè theo last-write-wins VÀ tự động hồi sinh (reactivate) về Active; không tạo bản ghi song song. |
| BR-05 | Ngưng hoạt động (Inactive) là soft-delete: giữ nguyên bản ghi và toàn bộ liên kết với Khách hàng để tra cứu lịch sử. Contact Inactive không xuất hiện trong danh sách chọn khi gắn mới, nhưng vẫn tra cứu được qua bộ lọc. |
| BR-06 | Quan hệ Contact ↔ Khách hàng là nhiều–nhiều (M–N). Một Contact xóa liên kết khỏi Khách hàng không làm mất bản ghi Contact. |
| BR-07 | Contact do ERP tạo/đẩy về được đánh dấu nguồn = ERP và hiển thị badge [ERP] để nhận diện. |
| BR-08 | Mọi thao tác Xem/Thêm/Sửa/Ngưng/Import/Export tuân theo ma trận phân quyền (CT\_US\_09). |

# **Danh sách màn hình và mô tả**

## **Màn hình Danh sách Liên hệ (CT\_US\_01)**

Màn hình cho phép tìm kiếm, lọc, hiển thị danh sách tất cả các Contact hiện có độc lập với màn hình Khách hàng.

Mô tả

* **Màn hình Danh sách người liên hệ:** Tìm kiếm, lọc, hiển thị danh sách tất cả các Contact. Export về thiết bị

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm | | | | |
| **Tìm kiếm theo** | Text Field | Có | Không | **Placeholder / Tooltip:** "Tìm theo Tên | Số điện thoại | Email".  **Action:** Người dùng nhập text Nhấn *Tìm kiếm* Lưới danh sách lọc theo cơ chế `LIKE %keyword%` khớp với các trường: Họ và tên, Số điện thoại, email người liên hệ. |
| **Vai trò** | Selectbox Multi-choice | Có | Không | * **Placeholder:** "Chọn vai trò"   Trường này cho phép người dùng chọn nhiều vai trò cùng lúc để lọc danh sách liên hệ dựa trên các vai trò đã chọn. Người dùng có thể tìm kiếm và chọn một hoặc nhiều vai trò từ danh sách có sẵn để tinh chỉnh kết quả hiển thị.   * **Mở danh sách:** Khi người dùng nhấp vào trường Vai trò, một danh sách các vai trò sẽ được mở ra (Mua hàng, Chủ doanh nghiệp, Người nhận hàng, Quản lý...) → Danh sách vai trò lấy từ **[Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=99236908) > **CONTACT\_ROLE**.** * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhanh vai trò mong muốn. Sau đó, chọn một hoặc nhiều vai trò bằng cách nhấp chọn. * **Hiển thị lựa chọn:** Các vai trò đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa `x` trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn. * **Trường hợp bỏ chọn toàn bộ** các vai trò trong hộp chọn thì mặc định hiểu là chọn tất cả vai trò để tìm kiếm. * **Khi mở màn hình** mặc định không chọn dữ liệu nào trong hộp chọn (để trống). |
| **Trạng thái** | Selectbox One-choice | Có | Không | **Placeholder:** "Chọn trạng thái"  **Mở danh sách:** Hệ thống hiển thị 2 giá trị cố định: *Hoạt động (Active)* và *Ngưng hoạt động (Inactive)*.  **Khi mở màn hình** mặc định để trống, hệ thống tự động tìm kiếm tất cả các trạng thái. |
| **Nguồn** | Selectbox Multi-choice | Có | Không | **Placeholder:** "Chọn nguồn"  Cho phép người dùng lọc danh sách liên hệ theo nguồn gốc tạo bản ghi.   * **Mở danh sách:** Hệ thống hiển thị danh sách nguồn bao gồm: *Website, Facebook, Partner Referral, Event, ERP*... định danh nguồn tạo lấy từ **Dữ liệu chung > **CONTACT\_SOURCE**** * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhanh nguồn mong muốn. Sau đó, chọn một hoặc nhiều nguồn bằng cách nhấp chọn. * **Hiển thị lựa chọn:** Các  nguồn đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa `x` trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn. * **Trường hợp bỏ chọn toàn bộ** các nguồn trong hộp chọn thì mặc định hiểu là chọn tất cả để tìm kiếm.  * **Khi mở màn hình** mặc định để trống (tìm kiếm tất cả các nguồn dữ liệu). |
| **Làm mới** | Button | Có | Không | Khi người dùng click vào nút **Làm mới**, hệ thống sẽ xóa sạch toàn bộ các giá trị đang được nhập/chọn tại tất cả các trường trên Khối Tìm kiếm & Bộ lọc và tự động tải lại lưới danh sách về trạng thái mặc định ban đầu. |
| **Tìm kiếm** | Button | Có | Không | Khi người dùng click vào nút **Tìm kiếm**, hệ thống sẽ kích hoạt quét dữ liệu và thực hiện lọc theo tất cả các tiêu chí đang được chọn trên Bộ lọc để cập nhật kết quả hiển thị mới nhất dưới Lưới danh sách.   * Sort danh sách cập nhật gần nhất lên đầu danh sách. |
| Danh sách | | | | |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **STT** | Số thứ tự | Không | N/A | Tăng tự động theo phân trang. |
| **Mã liên hệ** | Data Column (Link) | Có | Có | **Action:** Click vào mã liên hệ (VD: `CON_00000001`) sẽ mở Modal Chi tiết liên hệ ở chế độ *Chỉ xem (View-only)*, disabled toàn bộ field nhập liệu .  Có hiển thị badge nhãn **[ERP]** kế bên mã nếu bản ghi này do ERP tạo mới và đẩy về. |
| **Họ và tên** | Data Column | Không | N/A | Hiển thị chuỗi nối: Họ + Tên đệm + Tên. |
| **Vai trò** | Data Column (tag) | Không | N/A | Hiển thị dạng Tag màu sắc tương ứng theo vai trò. |
| **Số điện thoại** | Data Column - have copy | Không | Có | Hiển thị số điện thoại người liên hệ  Cho phép copy. |
| **Thư điện tử** | Data Column - have copy | Không | N/A | Hiển thị email.  cho phép copy |
| **Nguồn tiềm năng** | Data Column | Không | N/A | Ghi nhận kênh thông tin đầu vào. |
| **Khách hàng liên kết** | Data Column (Badge icon) | Có | N/A | Hiển thị số lượng Khách hàng DMS đang gắn với Contact này (Ví dụ: 👤 3). Khi click vào sẽ hiển thị danh sách popup nhanh tên các Khách hàng đang liên kết.   | STT | Mã khách hàng | Tên khách hàng | | --- | --- | --- | | 1 | DMSCU0000001 | Spa Bình Dương 1 | | 2 | DMSCU0000002 | Thẩm mỹ viện Bình Dương | |
| **Trạng thái** | Toggle Button | Có | Không | **Action:** Cho phép bật/tắt để thay đổi trực tiếp trạng thái nếu người dùng thỏa phân quyền điều chỉnh/ cập nhật dữ liệu **CT\_US\_09**  - Khi gạt tắt (chuyển sang Inactive): Gọi luồng Ngưng hoạt động |
| **Tùy chỉnh** | Button Icon (Cây bút) | Có | N/A | Hiển thị icon cho phép điều chỉnh nếu thỏa điều kiện phân quyền **CT\_US\_09**  **Action:** Click vào biểu tượng cây bút Mở Modal Chỉnh sửa liên hệ (**CT\_US\_05**). |
| **Tạo mới** | Button | Có | Không | **Action:** Click vào nút, Mở Modal Thêm mới liên hệ (**CT\_US\_02)**  Hiển thị nút tạo mới nếu thỏa điều kiện phân quyền **CT\_US\_09** |
| **Export Excel** | Button | Có | Không | Hiển thị nút export nếu thỏa điều kiện phân quyền **CT\_US\_11)**  **Action:** Xuất toàn bộ danh sách Contact đang hiển thị theo filter ra file excel. Format tên file: `DanhSachLienHe_DDMMYYYYHHMMSS.xlsx`. |

## **Màn hình Thêm mới (CT\_US\_02-03-04)/ Điều chỉnh người liên hệ (CT\_US\_05)**

Mục đích:

* Nhân viên tạo Contact mới từ menu Quản lý Contact, chưa cần gắn Khách hàng nào ngay lúc tạo.

* Trên lưới danh sách liên hệ và chọn điều chỉnh người liên hệ

Mô tả:

* Chọn nút Tạo mới → hiển thị popup màn hình tạo mới; Label "Thêm mới liên hệ". **CT\_US\_02**
* Chọn icon điều chỉnh → Hiển thị popup điều chỉnh; Label "Chỉnh sửa liên hệ". **CT\_US\_05.**
  + Mọi thao tác điều chỉnh đều ghi Audit Trail **(CT\_US\_10)**.
* Giao diện gồm cấu trúc 2 Tab: **Thông tin cơ bản** và **Địa chỉ**.

**TAB 1: THÔNG TIN CƠ BẢN**

**Phân vùng 1: Thông tin chính**

| **Tên Trường** | **Loại dữ liệu / Field** | **Thao tác?** | **Bắt buộc?** | **Mô tả nghiệp vụ chi tiết (Tooltip / Placeholder / Action)** |
| --- | --- | --- | --- | --- |
| **Mã liên hệ** | Text Field (Upper) - readonly | Có | **Có** | Hệ thống tự sinh mã người liên hệ. Refix CTxxxxxxx (x là 7 số tự tăng)   1. Tạo mới trên web portal nhập thông tin bên dưới 2. Tạo mới từ app bán hàng **(CT\_US\_03)** nhập thông tin trên app 3. Trường hợp tạo mới từ luồng đồng bộ từ ERP **(CT\_US\_04)**. Hệ thống đánh dấu tạo từ ERP và hiển thị thẻ tag "ERP" để nhận diện. |
| **Vai trò** | Selectbox One-choice | Có | Không | **Placeholder:** "Chọn vai trò"  Danh sách vai trò lấy từ "Dữ liệu chung > **CONTACT\_ROLE**" |
| **Danh xưng** | Selectbox One-choice | Có | Không | **Placeholder:** "Chọn danh xưng"  Danh sách: hiển thị mặc định   * **Mr.** Ông * **Mrs.** Quý bà * **Miss** Cô * **Ms.**  Bà |
| **Họ** | Text Field | Có | Không | **Placeholder:** "Nhập họ" |
| **Tên đệm** | Text Field | Có | Không | **Placeholder:** "Nhập tên đệm" |
| **Tên** | Text Field | Có | **Có** | **Placeholder:** "Nhập tên..." |
| **Chức danh** | Text Field | Có | Không | **Placeholder:** "Nhập chức danh như: Giám đốc; Quản lý; ..."  Nhập chức danh nếu có của người liên hệ |
| **Phân loại** | Selectbox One-choice | Có | Không | **Placeholder:** "Chọn phân loại"  Danh sách Phân loại lấy từ "Dữ liệu chung > **CONTACT\_TYPE"** |

**Phân vùng 2: Thông tin liên hệ**

| **Tên Trường** | **Loại dữ liệu / Field** | **Thao tác?** | **Bắt buộc?** | **Mô tả nghiệp vụ chi tiết (Tooltip / Placeholder / Action)** |
| --- | --- | --- | --- | --- |
| **Thư điện tử** | Email Field | Có | Không | **Placeholder:** `example@domain.com` / `example`@gmail.com  **Validation:** Kiểm tra định dạng Regex Email chuẩn. |
| **Số điện thoại chính** | Phone Field (10 số) | Có | **Có** | **Placeholder:** "Ví dụ: 09xxxxxxxx" .  **Ràng buộc cốt lõi:** Ràng buộc cốt lõi (BR-01): Business Key trên toàn hệ thống. Không cho nhập chữ/ký tự đặc biệt. Sau khi lưu thành công KHÔNG cho điều chỉnh.  Sau khi lưu thành công thì không cho điều chỉnh |
| **Số Fax** | Text Field | Có | Không | **Placeholder:** "Ví dụ: +84-24-xxxxxxx". |

**Phân vùng 3: Tiếp thị**

| **Tên Trường** | **Loại dữ liệu / Field** | **Thao tác?** | **Bắt buộc?** | **Mô tả nghiệp vụ chi tiết (Tooltip / Placeholder / Action)** |
| --- | --- | --- | --- | --- |
| **Nguồn tiềm năng** | Selectbox One-choice | Có | Không | **Placeholder:** "Chọn nguồn"  Danh sách Phân loại lấy từ "Dữ liệu chung > **CONTACT\_SOURCE**" |
| **Ghi chú** | Text | Có | Không | Nội dung ghi chú do người dùng nhập giới hạn 300 ký tự. |

**TAB 2: ĐỊA CHỈ**

**Mô tả:**

| **Tên Trường** | **Loại dữ liệu / Field** | **Thao tác?** | **Bắt buộc?** | **Mô tả nghiệp vụ chi tiết (Tooltip / Placeholder / Action)** |
| --- | --- | --- | --- | --- |
|  |  |  |  | Mặc định hiển thị "Chưa có địa chỉ nào. Bấm "Thêm địa chỉ" để tạo mới."  Chọn "Thêm địa chỉ" hiển thị "Chi tiết địa chỉ và Bản đồ"   * Validate "Loại địa chỉ": không được lặp lại ở các địa chỉ khác nhau. |
| **Khung "Chi tiết địa chỉ"** | | | | |
| **Nhãn địa chỉ** | Text Field | Có | Không | **Placeholder:** "Ví dụ: Tổng công ty, Nhà riêng...". |
| **Loại địa chỉ** | Checkbox | Có | Không | 1. Địa chỉ giao hàng mặc định (Mặc định checkbox = True khi thêm địa chỉ đầu tiên) 2. Địa chỉ khác: nếu không chọn địa chỉ giao hàng mặc định   Được bỏ check "Địa chỉ giao hàng mặc định". Một liên hệ có nhiều địa chỉ nhưng chỉ có một Địa chỉ giao hàng mặc định. đã chọn rồi thì địa chỉ khác sẽ bị disable. |
| **Ghi chú** | Text Field | Có | Không | **Placeholder:** "Ví dụ: Giao giờ hành chính...". |
| **Quốc gia** | Selectbox One-choice | Có | **Có** | Mặc định hiển thị và chọn: "Việt Nam". |
| **Tên người nhận** | Text Field | Có | Không | **Placeholder:** "Tên người nhận...".  Mặc định hiển thị Họ +Tên đệm + Tên người liên hệ |
| **Số điện thoại nhận hàng** | Phone Field | Có | Không | **Placeholder:** "Nhập số điện thoại nhận hàng".  Mặc định hiển thị sđt nếu đã nhập |
| **Số nhà/tên đường** | Text Field | Có | **Có** | **Placeholder:** "Số nhà, tên đường...". |
| **Thành phố** | Selectbox One-choice | Có | Không | Danh sách Thành phố, chọn một thành phố  **Placeholder:**"Chọn thành phố" |
| **Phường - Xã** | Selectbox One-choice | Có | Không | Load danh sách Phường- xã thuộc Thành phố đã chọn. Chưa chọn Thành phố thì không hiển thị Phường -xã.  **Placeholder:**"Chọn phường xã" |
| **Mã bưu chính** | Text Field | Có | Không | Nhập mã bưu chính  **Placeholder:** "Ví dụ: 700000". |
| **Địa chỉ** | Text Field | Không | Không | Hiển thị nối chuỗi "**Tên người nhận" +**"**Địa chỉ" + "Phường-Xã" + "Thành phố" + "Mã bưu chính" + "Quốc gia"**  Chỉ cho xem không cho điều chỉnh |
| **Đóng/ Dấu x** | Button | Có | Không | **Action:** Quay lại màn hình trước, kích hoạt kiểm tra dữ liệu thay đổi để cảnh báo nếu cần. |
| **Lưu** | Button | Có | Không | **Action:** Thực hiện validate toàn form và lưu dữ liệu.  Thông báo lưu thành công.  Hệ thống tạo mới / cập nhật người liên hệ. Sau đó tắt popup và hiển thị lưới danh sách |

## **Ngưng hoạt động Contact (CT\_US\_06).**

Nhân viên Inactive Contact; hiển thị thông báo "Ngưng hoạt động liên hệ này. Liên hệ sẽ chuyển sang Ngưng hoạt động, vẫn giữ lịch sử liên kết với các Khách hàng hiện có."

Chọn "Hủy" tắt thông báo và không có xử lý gì.

Chọn "Đồng ý" → hệ thống thực hiện ngưng hoạt động.

* Contact chuyển trạng thái ngưng hoạt động, không bị xóa bản ghi; liên kết với các Khách hàng vẫn được giữ nguyên và hiển thị status = Ngưng hoạt động.
* Contact ngưng hoạt động không xuất hiện trong danh sách chọn khi gắn Contact mới vào Khách hàng, nhưng vẫn tra cứu được trong danh sách chính qua bộ lọc.
* *V*ới một Contact đang **ngưng hoạt động**, hệ thống ghi đè dữ liệu theo last-update-wins **và tự động hồi sinh** Contact đó về trạng thái Active — không tạo bản ghi song song.
* Mọi thao tác đổi trạng thái đều ghi Audit Trail (CT\_US\_10).

## Gắn một Contact có sẵn vào Khách hàng (CT\_US\_07)

* [TAB 2 — Gắn người liên hệ (KH\_US\_04](https://kb.finviet.com.vn/pages/viewpage.action?pageId=99236306#id-[VG]Danhs%C3%A1chkh%C3%A1chh%C3%A0ng-TAB2%E2%80%94G%E1%BA%AFnng%C6%B0%E1%BB%9Dili%C3%AAnh%E1%BB%87(KH_US_04))

## Đồng bộ Contact (CT\_US\_08 )

* [Trạng thái đồng bộ ERP (Sync Status) KH\_US\_07](https://kb.finviet.com.vn/pages/viewpage.action?pageId=99236306#id-[VG]Danhs%C3%A1chkh%C3%A1chh%C3%A0ng-Tr%E1%BA%A1ngth%C3%A1i%C4%91%E1%BB%93ngb%E1%BB%99ERP(SyncStatus)KH_US_07)

## **Phân quyền thao tác (CT\_US\_09)**

Ma trận phân quyền quyết định hiển thị nút và cho phép thao tác trên toàn phân hệ Contact. Người dùng chỉ thấy/thao tác được chức năng khi thỏa quyền tương ứng.

| **Quyền / Chức năng** | **Backoffice** | **TKTT # Sale** | **Sale (web)** | **Ghi chú** |
| --- | --- | --- | --- | --- |
| Xem danh sách / chi tiết Contact | ✔ | ✔ | ✔ | Sale xem theo phạm vi dữ liệu được cấp.   * chính mình tạo * gán với khách hàng của mình quản lý |
| Thêm mới Contact | ✔ | ✔ | ✔ | Sale tạo trong luồng Khách hàng (CT\_US\_03). |
| Chỉnh sửa Contact | ✔ | ✔ | ✔ (giới hạn) | Khóa SĐT chính sau lưu (BR-01).   * chính mình tạo * gán với khách hàng của mình quản lý |
| Ngưng hoạt động (Inactive) | ✔ | ✔ | ✔ |  |
| Gắn/Gỡ liên kết Khách hàng | ✔ | ✔ | ✔ | Theo phạm vi KH được cấp hoặc tạo mới |
| Export Excel | ✔ | ✔ | ✔ | Theo dữ liệu phân quyền |
| Xem Lịch sử (Audit Trail) | ✔ (Admin) | ✔ | ✖ |  |

*Ghi chú: ✔ = được phép; ✖ = không; "(giới hạn)" = phụ thuộc cấu hình vai trò cụ thể.*

***TKTT # Sale  Phân quyền theo phân quyền dữ liệu ([HO & NPP] Phân quyền dữ liệu) và Thao tác ( [HO][HT] Chức năng phân quyền - Nhóm quyền)***

## **Lịch sử liên hệ (CT\_US\_10)**

Theo dõi vết thay đổi dữ liệu Contact của người dùng và hệ thống; cho phép lọc theo thời gian và Export báo cáo lịch sử. Ghi nhận mọi thao tác Thêm mới / Cập nhật / Ngưng hoạt động / Đồng bộ ERP.

### Bộ lọc & Export (Field Spec)

| **Tên Trường** | **Loại field** | **Thao tác?** | **Bắt buộc?** | **Mô tả nghiệp vụ / Business Rule** |
| --- | --- | --- | --- | --- |
| Chọn thời gian (tối đa 31 ngày) | Date Range | Có | Có | Chọn Từ ngày – Đến ngày. Ràng buộc: Đến ngày ≥ Từ ngày và (Đến ngày − Từ ngày) ≤ 31 ngày. Data history lưu 1–3 năm tùy hợp đồng. |
| Export | Button | Có | Có | Phải chọn đủ Từ ngày – Đến ngày mới cho Export. Chưa chọn đủ → thông báo: "Vui lòng chọn thời gian để xem lịch sử!".  Tên file: HIS\_CONTACT\_DDMMYYYYHHMMSS.xlsx. |

### Cấu trúc Excel lịch sử

**Thông tin Header:**

|  |  |
| --- | --- |
| **Màn hình** | Người liên hệ (Contact) |
| **Dữ liệu theo thời gian** | Khoảng Từ ngày – Đến ngày người dùng đã lọc |
| **Thời gian xuất báo cáo** | Thời điểm xuất thành công (DD-MM-YYYY HH:MM:SS) |
| **Người xuất báo cáo** | Mã user – Tên user |

**Thông tin chi tiết (mỗi dòng = một trường thay đổi):**

| **Trường dữ liệu** | **Mô tả** |
| --- | --- |
| Mã ghi nhận lịch sử | Mã trong 1 lần cập nhật. Format: CONTACT\_ + 13 ký tự timestamp. |
| Thời gian ghi nhận | Thời điểm hệ thống ghi nhận thay đổi. Format: DD-MM-YYYY HH:MM:SS. |
| Đối tượng chính | tên Người liên hệ (Contact). |
| Mã đối tượng chính | Mã Contact (CONxxxxxxx). |
| Trường dữ liệu | Tên trường có ghi nhận thay đổi (Vai trò, Họ tên, Email, SĐT, Nguồn, Trạng thái, Địa chỉ, Liên kết KH...). |
| Thao tác | Thêm mới / Cập nhật / Ngưng hoạt động / Hoạt động / Đồng bộ ERP. |
| Dữ liệu cũ | Giá trị trước khi cập nhật. Thao tác Thêm mới → để trống. |
| Dữ liệu mới | Giá trị sau khi cập nhật. |
| Mã người thực hiện | Mã user thực hiện (Hiển thị tên hệ thống đã thống nhất nếu do đồng bộ). |
| Tên người thực hiện | Tên user thực hiện. |
| Nguồn cập nhật | Web Portal DMS / Mobile App / ERP Sync. |

## **Export danh sách Contact (CT\_US\_11)**

* Chức năng: xuất dữ liệu danh sách Contact hiện tại ra file Excel để lưu trữ/phân tích/chia sẻ.
* Phân quyền: chỉ hiển thị nút Export khi thỏa CT\_US\_09.
* Dữ liệu xuất theo đúng bộ lọc & tiêu chí tìm kiếm đang áp dụng trên lưới.
* Format tên file: DanhSachLienHe\_DDMMYYYYHHMMSS.xlsx.

### Từ điển trường dữ liệu

| **#** | **Trường dữ liệu** | **Mô tả** |
| --- | --- | --- |
| 1 | Người xuất báo cáo | Mã tài khoản – Tên tài khoản xuất báo cáo. |
| 2 | Thời gian xuất báo cáo | DD-MM-YYYY HH:MM:SS (thời điểm xuất thành công). |
| 3 | Mã liên hệ | Mã định danh Contact (CONxxxxxxx). |
| 4 | Nguồn tạo | Nguồn tạo bản ghi (Website/Facebook/Event/ERP...). Ghi rõ [ERP] |
| 5 | Danh xưng | Mr./Mrs./Miss/Ms. |
| 6 | Họ và tên | Chuỗi nối Họ + Tên đệm + Tên. |
| 7 | Vai trò | Vai trò người liên hệ. |
| 8 | Chức danh | Chức danh (nếu có). |
| 9 | Phân loại | Phân loại Contact. |
| 10 | Số điện thoại chính | Business Key. |
| 11 | Email | Thư điện tử. |
| 12 | Số Fax | Số fax (nếu có). |
| 13 | Khách hàng liên kết | Danh sách Mã KH – Tên KH đang gắn (nhiều KH cách nhau dấu phẩy). |
| 14 | Số lượng KH liên kết | Đếm số Khách hàng đang liên kết. |
| 15 | Địa chỉ giao hàng mặc định | Mỗi địa chỉ hiển thị 1 dòng  Chuỗi nối địa chỉ mặc định (Tên người nhận + Địa chỉ + Phường-Xã + Thành phố + Mã BC + Quốc gia). |
| 16 | Địa chỉ liên hệ | Chuỗi nối địa chỉ (Tên người nhận + Địa chỉ + Phường-Xã + Thành phố + Mã BC + Quốc gia)  Nếu có nhiều địa chỉ nối cách nhau dấu chấm phẩy./ tách thành nhiều cột hiển thị |
| 17 | Trạng thái | Hoạt động / Ngưng hoạt động. |
| 18 | Người tạo | Mã tài khoản người tạo bản ghi. |
| 19 | Ngày tạo | DD-MM-YYYY HH:MM:SS. |
| 20 | Người cập nhật | Mã tài khoản cập nhật cuối. |
| 21 | Ngày cập nhật | DD-MM-YYYY HH:MM:SS. |