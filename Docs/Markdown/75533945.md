|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Đơn hàng có trạng thái Khởi tạo và có áp dụng quy trình duyệt, khi xem **chi tiết đơn hàng** sẽ thấy trạng thái trung gian của đơn hàng đang xử lý ở cấp nào. Khi thực hiện hủy đơn hàng, màn hình có áp dụng quy trình hủy đơn hàng thì nhìn thấy button "Hủy đơn hàng" và thao tác |
| Document version |  |
| Document status | GreenDONE |
| Document owner | Thao NTT |
| Chage History | 2 |

truenone

## Màn hình

1. Khác → Điểm bán → Chăm sóc → Chăm sóc điểm bán → Thông tin điểm bán → Lịch sử đơn hàng  → **Chi tiết đơn hàng (Khởi tạo)**
2. Khác → Điểm bán → Chăm sóc → Chăm sóc điểm bán → Đặt hàng → Đơn hàng hôm nay  → **Chi tiết đơn hàng (Khởi tạo)**
3. Viếng thăm → Danh sách điểm bán → Thông tin điểm bán → Lịch sử đơn hàng → **Chi tiết đơn hàng (Khởi tạo)**
4. Viếng thăm → Danh sách điểm bán → Viếng thăm → Đặt hàng → Đơn hàng hôm nay → **Chi tiết đơn hàng**
5. Đơn hàng → Danh sách đơn hàng (tab Khởi tạo) → **Chi tiết đơn hàng (Khởi tạo)**
6. Báo cáo → Báo cáo theo dõi đơn hàng → **Danh sách đơn hàng → Chi tiết đơn hàng (Khởi tạo)**

### Chi tiết đơn hàng (Trạng thái Khởi tạo)

### Giao diện hiển thị trạng thái trung gian:

Chỉ những Đơn hàng tại thời điểm có áp dụng quy trình duyệt và quy trình duyệt cho màn hình có trạng thái "Hoạt động" mới hiển thị trạng thái trung gian như hình:

* + **Những Đơn hàng tạo có trạng thái "Khởi tạo"** Hiển thị trạng thái trung gian gần nhất tại thời điểm xem danh sách
    - Nếu có nhiều quy trình lấy trạng thái trung gian theo thời gian cập nhật gần nhất. Trường hợp trùng thì random hiển thị chỉ một.
  + **Trạng thái trung gian:**

    - Hiển thị ngay dưới Trạng thái gốc.
    - **Yêu cầu:** Nội dung hiển thị bị giới hạn tối đa **25 ký tự**. Nếu dài hơn, hệ thống sẽ tự động cắt ngắn và thêm dấu ba chấm "..." ở cuối. (Ví dụ: "Đang ở cấp 2, đợi “SM, SS ...").
    - Trạng thái được BE trả về theo lịch sử cập nhậtt trạng thái trung gian của màn hình: [[HO] Quy trình duyệt - Đơn hàng bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533861)
  + **Link "**@trạng thái trung gian**":** Một liên kết dạng text cho phép người dùng nhấn vào để xem popup chi tiết.

Khi quy trình duyệt cho màn hình có trạng thái "Hoạt động": hiển thị Trạng thái trung gian của các Đơn hàng và xử lý theo quy trình duyệt.

Trạng thái chính của Đơn hàng được chuyển từ Khởi tạo sang Đã duyệt hoặc Khởi tạo sang Đã hủy thì khi reload màn hình sẽ ẩn trạng thái trung gian và hiển thị không thay đổi (theo link: [SM-APP] Chi tiết điểm bán - Lịch sử đơn hàng; [Chi tiết đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444752#id-[SMAPP]%C4%90%E1%BA%B7th%C3%A0ng%E1%BB%9Fnhi%E1%BB%87mv%E1%BB%A5vi%E1%BA%BFngth%C4%83m(kh%C3%B4ngkhuy%E1%BA%BFnm%C3%A3i)-2.2.Chiti%E1%BA%BFt%C4%91%C6%A1nh%C3%A0ngDETAIL_ORDER))

Trạng thái trung gian

### Popup "Chi tiết xét duyệt"

  

* **Kích hoạt:** Được mở ra khi người dùng nhấn vào link trạng thái trung gian
* **Mục đích:** Xem chi tiết các trạng thái trung gian của Đơn hàng trường hợp một Đơn hàng có thể đang tham gia vào **nhiều quy trình duyệt cùng một lúc** (ví dụ: Quy trình Phê duyệt và Quy trình Hủy Đơn hàng).
* **Giao diện:**

  + Luôn hiển thị ở đầu popup Chi tiết xét duyệt dòng chữ như UI: 'Hiển thị các trạng thái trung gian xử lý của Đơn hàng theo các quy trình xét duyệt'
  + Hiển thị tất cả quy trình đang áp dụng cho Đơn hàng. Mỗi mục đại diện cho một quy trình duyệt đang hoạt động, với tiêu đề là **"Tên quy trình".**
    - Tên quy trình hiển thị xuống dòng nếu dài. Sort hiển thị quy trình được cập nhật gần nhất trên cùng danh sách hiển thị.
    - icon:  trước tên quy trình.
  + Bên trong mỗi mục hiển thị thông tin chi tiết về trạng thái trung gian của quy trình đó, bao gồm:

    - (Còn n cấp cần xử lý để hoàn tất): Hiển thị động giá trị "n". (n) = (Tổng số cấp duyệt của quy trình) - (Cấp cao nhất đã xử lý theo trạng thái trung gian gần nhất)
      * Ví dụ Quy trình có 10 cấp; cấp đã xử lý là cấp 2 (giả định: tại thời điểm cấp 1 chưa xử lý, quy trình duyệt vượt cấp thì khi cấp 2 chọn duyệt → trạng thái trung gian cấp 1 và cấp 2 = Đang ở cấp 3, đợi nhóm quyền cấp 3 xử lý)
      * Giá trị 'n' = 10-2 = 8.
      * Trạng thái trung gian hiển thị: Đang ở cấp 3, đợi ["nhóm quyền cấp 3"] xử lý
    - @Trạng thái trung gian (hiển thị đầy đủ, không giới hạn ký tự). Trạng thái trung gian được BE trả về từ [[HO] Quy trình duyệt - Đơn hàng bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533861)
    - Thông tin về tên người tạo (cấp duyệt) và thời gian của trạng thái đó: Lúc hh:mm, dd/mm/yyyy, bởi Tên người cập nhật (Cấp đã xử lý). Lấy sự kiện mới nhất theo cấp cao nhất xử lý của quy trình để hiển thị.

      * Theo ví dụ trên sẽ là: Lúc 09:35, 22/11/2024 bởi Nguyễn Văn C (Cấp 2)
      * Nếu hệ thống duyệt sẽ hiển thị: Lúc 09:35, 22/11/2024 bởi System admin (Cấp x)
    - Lý do từ chối/ trả lại yêu cầu: Hiển thị lý do theo trạng thái trung gian được BE trả về từ [[HO] Quy trình duyệt - Đơn hàng bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533861)
      * Trường hợp không có lý do thì ẩn luôn như UI
  + Chọn dấu x để tắt popup và trở về màn hình trước đó.

### Bộ lọc: "Lịch sử đơn hàng" ; "Đơn hàng (tab Khởi tạo)"; "Đơn hàng hôm nay"; "Báo cáo theo dõi đơn hàng"

Lịch sử đơn hàng

Đơn hàng (tab Khởi tạo)

Đơn hàng hôm nay

Báo cáo theo dõi đơn hàng

**Bổ sung bộ lọc "Tên quy trình" và "Trạng thái trung gian" trên bộ lọc sẵn có của màn hình.**

* **"Đơn hàng (tab Khởi tạo)" [SM-APP] Menu đơn hàng**
* **Lịch sử đơn hàng [SM-APP] Chi tiết điểm bán - Lịch sử đơn hàng**
* **"Báo cáo theo dõi đơn hàng" [SM-App] Báo cáo theo dõi đơn hàng**

**Tên quy trình:**

* Tên quy trình: placeholder "Vui lòng chọn". **Trường này chỉ xuất hiện khi tồn tại từ một quy trình duyệt đang hoạt động áp dụng cho Đơn hàng có trạng thái Khởi tạo. Với những màn hình mà bộ lọc có trạng thái đơn hàng → khi chọn trạng thái Khởi tạo → hiển thị Tên quy trình để chọn**
* **Mở danh sách:** 

  + Khi người dùng nhấp vào trường "Tên quy trình", Hiển thị popup Tên quy trình chứa **Danh sách tất cả các quy trình duyệt đang hoạt động áp dụng cho màn hình. Danh sách này chỉ hiển thị khi chọn Trạng thái = Khởi tạo**
  + Dòng chữ hiển thị: "Vui lòng chọn 1 quy trình"

* + **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách và chọn một (Chỉ chọn một) quy trình duyệt bằng trong danh sách.
  + **Hiển thị lựa chọn:**  Sau khi chọn Radio checkbox hiển thị đã chọn như UI
* **Kết quả lọc:** Sau khi chọn "Xác nhận" Danh sách quy trình duyệt sẽ tự động được lọc để hiển thị tất cả các Đơn hàng có trạng thái trung gian mới nhất thỏa quy trình duyệt đã chọn.

  + Khi một quy trình được chọn, dropdown "Trạng thái trung gian" sẽ hiển thị và tìm kiếm theo tất cả các trạng thái trung gian của quy trình

**Trạng thái trung gian:**Khi một quy trình được chọn, dropdown "Trạng thái trung gian" sẽ hiển thị. Ngược lại disable

* Tên trạng thái: placeholder "Vui lòng chọn". **Trường này chỉ xuất hiện khi đã chọn một quy trình duyệt đang hoạt động trước đó.**
* Tìm kiếm: Placeholder "Tìm kiếm theo tên vai trò" cho phép người dùng nhập tên nhóm quyền, search like và hiển thị
* **Mở danh sách:**

  + Khi người dùng nhấp vào trường "Trạng thái trung gian", Hiển thị popup chứa **Danh sách tất cả các trạng thái trung gian của quy trình đã chọn.**
  + Hiển thị dòng chữ: Chọn trạng thái trung gian mong muốn
  + Danh sách các Trạng thái trung gian của "quy trình đã được chọn" ở bộ lọc "Tên quy trình" sẽ hiển thị
  + **Hiển thị động, phụ thuộc vào số cấp duyệt đã cấu hình của quy trình đã chọn.**

    - |  |
      | --- |
      | Đang ở cấp 1, đợi "@Nhóm quyền cấp 1" xử lý |
      | Đang ở cấp n, đợi "@Nhóm quyền cấp n" xử lý |
      | ... |
      | Đang ở cấp 10, đợi "@Nhóm quyền cấp 10" xử lý |

* + **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách và chọn **một****hoặc nhiều** trạng thái trong danh sách.
  + **Hiển thị lựa chọn:**  Sau khi chọn Radio checkbox hiển thị đã chọn như UI
* **Kết quả lọc:** Sau khi chọn "Xác nhận" Danh sách quy trình duyệt sẽ tự động được lọc để hiển thị tất cả các Đơn hàng có trạng thái trung gian mới nhất thỏa "quy trình duyệt đã chọn và các trạng thái trung gian đã chọn".

  + Nếu không chọn bất kì trạng thái trung gian nào hệ thống hiểu là search tất cả các Đơn hàng có trạng thái trung gian mới nhất thỏa "quy trình duyệt đã chọn"

Chọn dấu x để tắt popup và không lưu dữ liệu

## Quy trình xử lý Hủy đơn hàng trên app SM

**1/ Các khái niệm:**

1. **Trạng thái gốc:** Trạng thái chính của Đơn hàng (ví dụ: Khởi tạo, Đã duyệt, Đã hủy).
2. **Trạng thái trung gian:** Trạng thái của Đơn hàng bên trong một quy trình duyệt, thể hiện cấp đang chờ xử lý.
3. **[Quyền Lớp 1 (Quyền Quy trình)](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596):** Quyền của người dùng được tham gia vào một cấp duyệt trong quy trình duyệt [HO] Quy trình duyệt - Đơn hàng bán
4. **Quyền Lớp 2 (**Quyền xử lý gốc**):** Quyền cơ bản của người dùng để thực thi thành công hành động làm thay đổi trạng thái gốc trên app SM, khi đó hệ thống sẽ gọi hàm xử lý gốc để cập nhật trạng thái gốc:

   1. Core: [SM-APP] Chỉnh sửa/Hủy đơn hàng
   2. HT: [Luồng Direct Sales](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66523750#id-[HT]T%C3%A0ili%E1%BB%87ut%C3%ADchh%E1%BB%A3pERP-2.3.Lu%E1%BB%93ngDirectSales)

**2/ Trên APP chỉ Áp dụng các quy trình duyệt với trạng thái Chờ duyệt của Đơn hàng.**

***Khi App gọi API để lấy danh sách/chi tiết Đơn hàng, mỗi Đơn hàng cần trả về thêm các thông tin:***

* *Có đang trong quy trình hủy không?*
* *Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 Đơn hàng hay không? → Quyết định việc người dùng có nhìn thấy button "Duyệt"/"Hủy đơn hàng" hay không?*
* *Trạng thái trung gian là gì?*

Cơ Chế Kiểm Tra & Hiển Thị

**Cơ Chế Kiểm Tra & Hiển Thị**

Khi người dùng thực hiện click vào button xử lý trên UI

* Backend truy vấn vào bản ghi và Kiểm tra Trạng thái Quy trình của Bản ghi:
* **Câu hỏi:** "Bản ghi này có đang trong một quy trình duyệt nào đang hoạt động không?" [HO] Quy trình duyệt
* **Nếu CÓ:**

  + **→ Kích hoạt Logic Quy trình:** Toàn bộ các bước xử lý tiếp theo sẽ đi theo luồng quy trình duyệt.
  + **Kiểm tra Quyền Lớp 1:** "Người dùng userId có thuộc Nhóm quyền đang chờ xử lý ở cấp hiện tại không?"

    - **Nếu có:** Thực hiện các bước tiếp theo của quy trình (Không thay đổi, chuyển cấp, hoặc kết thúc).
    - **Nếu người dùng không thuộc nhóm quyền:**server sẽ từ chối yêu cầu và trả về lỗi "Bạn không có quyền thực hiện hành động này vì Đơn hàng @Mã đơn hàng n1, n2 đang trong quy trình duyệt và bạn không thuộc cấp duyệt hiện tại."
    - Hiển thị ưu tiên trước rồi mới đến các lỗi khác của quy trình duyệt ( [SM-APP] Đặt hàng) .Tắt popup và reload lại màn hình khi đó button xử lý của người dùng sẽ ẩn trên các bản ghi. Quy trình dừng lại.
  + Trạng thái chính của Đơn hàng trong CSDL có còn là Trạng thái áp dụng hay không ( "Chờ duyệt").
    - **Nếu trạng thái đã thay đổi:**Dừng hành động và 
      * Hiển thị popup thông báo lỗi với ưu tiên cao nhất: "Đơn hàng @Mã đơn hàng n1, n2 đã được cập nhật bởi một người dùng khác. Vui lòng tải lại trang."
      * Hiển thị ưu tiên trước rồi mới đến các lỗi khác của quy trình duyệt
      * Sau khi người dùng đóng popup báo lỗi, màn hình sẽ tự động được làm mới (reload).
* **Nếu KHÔNG:**

  + **→ Kích hoạt Logic Gốc:** Bản ghi không bị ràng buộc bởi quy trình nào. Hệ thống sẽ xử lý theo luồng mặc định của màn hình.
  + **Kiểm tra Quyền Gốc (**Quyền xử lý gốc**):** "Người dùng userId có quyền thực hiện hành động gốc (ví dụ: Phê duyệt Đơn hàng) không?"

    - **Nếu có:** Gọi hàm xử lý gốc để cập nhật trạng thái gốc của đơn hàng

      * Core: [SM-APP] Chỉnh sửa/Hủy đơn hàng
      * HT: [Luồng Direct Sales](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66523750#id-[HT]T%C3%A0ili%E1%BB%87ut%C3%ADchh%E1%BB%A3pERP-2.3.Lu%E1%BB%93ngDirectSales)
    - **Nếu không:** **Từ chối yêu cầu.** Trả về lỗi: "Bạn không có quyền thực hiện hành động này." Sau khi người dùng đóng popup báo lỗi, màn hình sẽ tự động được làm mới (reload).

### **Quy trình Hủy Đơn hàng (Nhiều cấp)**

* **Mục đích:** Quy trình này được kích hoạt khi người dùng muốn từ chối/hủy một Đơn hàng đang ở trạng thái Chờ duyệt. Quy trình này đảm bảo việc hủy bỏ/ từ chối duyệt đăng ký của điểm bán cũng cần có sự xác nhận của các cấp có thẩm quyền.
* **Kích hoạt bởi:** Người dùng nhấn button **"Hủy đơn hàng"**.
* **Trạng thái kết thúc:** Đã hủy
* **Hành động khi Từ chối:** Chỉ có Trở về cấp duyệt trước và Không thay đổi ở Cấp 1
* **Ví dụ giả định:** Quy trình có 2 cấp: Cấp 1 (SS/SM), Cấp 2 (Admin HO - Cấp cuối).
* **button xử lý "Hủy đơn hàng"**

#### **Ví dụ cài đặt Quy trình:**

**Xem thêm: [Ví dụ và Lưu ý](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO]Quytr%C3%ACnhduy%E1%BB%87t-V%C3%ADd%E1%BB%A5v%C3%A0L%C6%B0u%C3%BD) của quy trình duyệt.**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tên quy trình | Quy trình Hủy Đơn hàng | | | |
| Dữ liệu áp dụng | Duyệt đơn bán hàng |  |  |  |
| Trạng thái áp dụng | Khởi tạo |  |  |  |
| Duyệt vượt cấp | ON/ OFF |  |  |  |
| Chức năng | Hủy |  |  |  |
| Trạng thái sau áp dụng | Đã hủy |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | ***Hành động khi duyệt*** | **Hành động khi Từ chối** | **Tự động chuyển (ngày)** |
| Cấp 1 | SS/SM | *Đi tới cấp tiếp theo* | Không thay đổi | 2 |
| Cấp 2 | Admin HO | *Thay đổi trạng thái **Đã hủy*** | *Trở về cấp duyệt trước* | 3 |

#### Mô tả

| Bước | Người thực hiện | Hành động | Kết quả & Phản hồi Hệ thống |
| --- | --- | --- | --- |
| **1** | Nhân viên Sales (SS/SM) | Tạo mới Đơn hàng trên hệ thống. | - **Trạng thái gốc:** Khởi tạo.  - **Hệ thống:** Kích hoạt "Quy trình hủy Đơn hàng".  - **Trạng thái trung gian:** Đang ở cấp 1, chờ "SM" xử lý.  - **UI App Quản lý:**   **Duyệt vượt cấp = OFF:**User thuộc nhóm quyền "SM" (Tạo đơn hàng) nhìn thấy button "Hủy đơn hàng". Trong đó button "Hủy đơn hàng" của quy trình hủy đơn hàng.  **Duyệt vượt cấp = ON; Tất cả các nhóm quyền thuộc quy trình cả portal (đã mô tả ở link: [Quy trình xử lý Hủy](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533861#id-[HO]Quytr%C3%ACnhduy%E1%BB%87t%C4%90%C6%A1nh%C3%A0ngb%C3%A1n-2/Quytr%C3%ACnhx%E1%BB%ADl%C3%BDH%E1%BB%A7y)) lẫn app SM đều nhìn thấy button hủy đơn hàng để thao tác.** |
| **2** | **SS/SM (Cấp 1)** | Nhấn button **"Hủy đơn hàng"**. | - **Kiểm tra:** Hệ thống xác thực  theo **Cơ Chế Kiểm Tra & Hiển Thị** của SM.  Hủy đơn hàng  hợp lệ → Hiển thị popup: "Huỷ đơn hàng"     * Trong đó: Label: Hủy đơn hàng   + "Chọn "Huỷ đơn hàng" để @Hành động khi Duyệt": Trong đó @Hành động khi Duyệt hiển thị hành động khi duyệt của quy trình theo cấp đang xử lý   + "Chọn "Trả lại yêu cầu" để @Hành động khi Từ chối: Trong đó @Hành động khi Từ chối hiển thị hành động khi từ chối của quy trình theo cấp đang xử lý     **Chọn "Huỷ đơn hàng"** hiển thị popup "Lý do hủy đơn"  **Chọn "Trả lại yêu cầu"**hiển thị popup"Lí do trả lại đơn hàng"  -  bắt buộc phải nhập lý do, tối đa 300 kí tự  **Trường hợp A: Chọn "Hủy đơn hàng"**  **Người duyệt thuộc cấp CHƯA PHẢI cấp cuối cùng (ví dụ: SS/SM Từ chối duyệt)**   * + **Hệ thống:**      1. **KHÔNG** gọi đến hàm xử lý gốc.     2. Trạng thái gốc của Đơn hàng **không thay đổi**.   + **Kết quả:**      - Trạng thái trung gian được cập nhật để chuyển yêu cầu đến cấp duyệt tiếp theo.        * trạng thái mới là **"**Đang ở cấp 2, chờ "Admin HO" xử lý.   + **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động (Phê duyệt), Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.      - Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý   + **Giao diện:**      - **Nếu Duyệt vượt cấp = OFF:** button xử lý của người dùng vừa **"Hủy đơn hàng"**sẽ ẩn đi. **Button "Hủy đơn hàng"** sẽ xuất hiện cho người dùng ở cấp tiếp theo     - **Nếu Duyệt vượt cấp = ON:** button xử lý của người dùng vừa **"Hủy đơn hàng"**và các cấp thấp hơn sẽ ẩn đi. **Button "Hủy đơn hàng"**của các cấp cao hơn vẫn hiển thị. (Ví dụ: Nếu **SS/****SM;** - Cấp 1 duyệt, button của cả **SS/****SM** sẽ ẩn đi. Cấp 2 là **Admin HO** vẫn thấy trên portal).   ---  **Trường hợp B:**Chọn**"Trả lại yêu cầu"**  **Cấp duyệt cấu hình "Hành động khi Từ chối = *Không thay đổi***   * **Mapping:** Đây là một hành động nội bộ của quy trình duyệt và không thay đổi trạng thái gốc; cũng không chuyển cấp xử lý. * **Hệ thống:**    1. **KHÔNG** gọi đến hàm xử lý gốc.   2. **KHÔNG** kiểm tra Quyền Lớp 2.   3. **KHÔNG** đẩy yêu cầu đến cấp nào trong quy trình * **Kết quả:**    + Trạng thái gốc của Đơn hàng **không thay đổi** (vẫn là "Chờ duyệt").   + Trạng thái trung gian được cập nhật để phản ánh việc bị trả về của cấp 1: **"Đang ở cấp 1, chờ "SS/SM" xử lý"**. * **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động (Từ chối), Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.  * **Giao diện:**    + **Nếu Duyệt vượt cấp = OFF:** Theo logic thì button xử lý của người vừa **"Trả lại yêu cầu"** sẽ ẩn đi. button xử lý sẽ xuất hiện lại cho người dùng ở cấp trước đó. Tại cấp 1 này vẫn hiển thị button ở Cấp 1, và không thay đổi khi chọn "Trả lại yêu cầu" ở cấp 1. Theo ví dụ: cấp 1 Trả lại yêu cầu thì **Button "Hủy đơn hàng"** hiển thị lại cho cấp 1   + **Nếu Duyệt vượt cấp = ON:**      - Thay vì chỉ người dùng ở cấp hiện tại mới thấy button, giờ đây **TẤT CẢ người dùng thuộc TẤT CẢ các****Nhóm quyền****trong quy trình****thuộc cấp đang chờ xử lý** đều nhìn thấy (CẤP N-1 đến cấp cuối cùng).  Nếu theo ví dụ: cấp 1 "Trả lại yêu cầu" →  **Button "Hủy đơn hàng"** hiển thị lại cho Cấp 1- trên app SS?SM, Cấp 2- trên WEB |
| **3** | **Admin HO (Cấp 2 - Cuối)** | Nhấn button **"Hủy đơn hàng"**. | Logic xử lý xem tại [HO] Quy trình duyệt - Đơn hàng bán > [Quy trình xử lý Hủy](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533861#id-[HO]Quytr%C3%ACnhduy%E1%BB%87t%C4%90%C6%A1nh%C3%A0ngb%C3%A1n-2/Quytr%C3%ACnhx%E1%BB%ADl%C3%BDH%E1%BB%A7y) |
| Bất kỳ một người dùng nào KHÔNG THUỘC QUY TRÌNH chọn button "Hủy đơn hàng" tức là gọi hàm xử lý gốc của màn hình → Xử lý Đơn hàng như luồng cũ không thay đổi:  (link: [SM-APP] Chỉnh sửa/Hủy đơn hàng) | | | |

Khi thao tác HỦY đơn hàng có áp dụng Quy trình hủy tương ứng:

SS đăng nhập:

* Chỉ xử lý các dữ liệu do chính mình tạo trên tuyến bán hàng của SS để tạo đơn - hủy đơn hàng
* SS chọn tuyến của saleman thì mọi thao tác Hủy đơn hàng chỉ ghi nhận cho SM

SM đăng nhập: Thao tác HỦY đơn hàng của tuyến bán hàng của SM - có theo quy trình duyệt thì theo logic xử lý của quy trình duyệt.

## **Các vấn đề lưu ý:**

* Bất kỳ một người dùng nào KHÔNG THUỘC QUY TRÌNH chọn button "Hủy đơn hàng" tức là gọi hàm xử lý gốc của màn hình → Xử lý Đơn hàng như luồng cũ không thay đổi  (link: [SM-APP] Chỉnh sửa/Hủy đơn hàng)
* Nếu ở trong một **quy trình Hủy Đơn hàng đang hoạt động** thì sẽ hiển thị **button "Hủy đơn hàng" theo logic xử lý**của quy trình. Ngược lại hiển thị button gốc của màn hình.  [logic xử lý gốc](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53044246) không thay đổi
* Người dùng hiện tại thuộc cấp duyệt chờ xử lý của các quy trình đang áp dụng cho bản ghi (Đơn hàng có trạng thái Khởi tạo) có thể nhìn thấy button "Hủy đơn hàng" của quy trình tương ứng trên giao diện.
* Người dùng **KHÔNG thuộc quy trình duyệt Và**có quyền đăng nhập vào APP SM => Trường hợp SS chọn tuyến bán hàng của saleman đã tạo đơn hàng để thực hiện "Hủy đơn hàng" => Lúc này ghi nhận việc Hủy đơn hàng cho Saleman như logic cũ, không thay đổi.
* **Khi hay đổi trạng thái gốc của bản ghi, tất cả các quy trình đang áp dụng cho bản ghi dừng lại.**