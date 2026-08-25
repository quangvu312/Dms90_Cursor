|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Điểm bán đăng ký Chương trình tích lũy có trạng thái Chờ duyệt có áp dụng quy trình duyệt, khi xem chi tiết đăng ký chương trình sẽ thấy trạng thái trung gian của phiếu đăng ký đang xử lý ở cấp nào. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | Thao NTT |
| Chage History | 2 |

truenone

## **Đường dẫn**

Màn hình Chương trình tích lũy; Thông tin đăng ký; Danh sách đã tham gia

1. Khác →Điểm bán → Chăm sóc → **Chương trình tích lũy** → **Thông tin đăng ký**
2. Khác →Điểm bán → Chăm sóc → Thông tin điểm bán → CT tích lũy → **Danh sách đã tham gia** → **Thông tin đăng ký**
3. Khác →Điểm bán → Mở mới → Thông tin điểm bán (Trạng thái Hoạt động) → CT tích lũy → **Danh sách đã tham gia → Thông tin đăng ký**
4. Viếng thăm → Danh sách điểm bán → Thông tin điểm bán → CT tích lũy → **Danh sách đã tham gia → Thông tin đăng ký**
5. Viếng thăm → Danh sách điểm bán → Viếng thăm điểm bán → **Chương trình tích lũy → Thông tin đăng ký**
6. Viếng thăm → Danh sách điểm bán → Viếng thăm điểm bán → Thông tin điểm bán → CT tích lũy → **Danh sách đã tham gia → Thông tin đăng ký**

## **Các màn hình có thay đổi gồm:**

### **Chương trình tích lũy**

### **Thông tin đăng ký**

### **Danh sách điểm bán**

#### Giao diện hiển thị:

Chỉ những Phiếu đăng ký của điểm bán tại thời điểm có áp dụng quy trình duyệt và quy trình duyệt cho màn hình có trạng thái "Hoạt động" mới hiển thị trạng thái trung gian như hình:

* **Những Phiếu đăng ký của điểm bán có trạng thái "Chờ duyệt"** 

  + Hiển thị trạng thái trung gian gần nhất tại thời điểm xem danh sách, màu như UI.
  + Nếu có nhiều quy trình lấy trạng thái trung gian theo thời gian cập nhật gần nhất.
  + Trường hợp trùng thì random hiển thị chỉ một.
* **Trạng thái trung gian:**

  + Hiển thị ngay dưới Hoặc bên cạnh trạng thái gốc → Xem theo từng UI ở trên.
  + **Yêu cầu:** Nội dung hiển thị bị giới hạn tối đa **25 ký tự**. Nếu dài hơn, hệ thống sẽ tự động cắt ngắn và thêm dấu ba chấm "..." ở cuối. (Ví dụ: "Đang ở cấp 2, đợi “SS, ASM ...").
  + Trạng thái được BE trả về theo lịch sử cập nhậtt trạng thái trung gian của màn hình: [HO] Quy trình duyệt - Đăng ký tích lũy
* **Link "**@trạng thái trung gian**":** Một liên kết dạng text cho phép người dùng nhấn vào để xem popup chi tiết.

Trạng thái chính của Phiếu đăng ký của điểm bán được chuyển từ Chờ duyệt sang Đã duyệt hoặc Chờ duyệt sang Từ chối duyệt, khi reload màn hình sẽ ẩn các Trạng thái trung gian.

Trạng thái trung gian

#### **Popup "Chi tiết xét duyệt"**

  

* **Kích hoạt:** Được mở ra khi người dùng nhấn vào link trạng thái trung gian
* **Mục đích:** Xem chi tiết các trạng thái trung gian của Phiếu đăng ký của điểm bán trường hợp một Phiếu đăng ký của điểm bán có thể đang tham gia vào **nhiều quy trình duyệt cùng một lúc** (ví dụ: Quy trình Phê duyệt và Quy trình Hủy Phiếu đăng ký của điểm bán).
* **Giao diện:**

  + Luôn hiển thị ở đầu popup Chi tiết xét duyệt dòng chữ như UI: 'Hiển thị các trạng thái trung gian xử lý của Phiếu đăng ký của điểm bán theo các quy trình xét duyệt'
  + Hiển thị tất cả quy trình đang áp dụng cho Phiếu đăng ký của điểm bán. Mỗi mục đại diện cho một quy trình duyệt đang hoạt động, với tiêu đề là **"Tên quy trình".**

    - Tên quy trình hiển thị xuống dòng nếu dài. Sort hiển thị quy trình được cập nhật gần nhất trên cùng danh sách hiển thị.
    - icon:  trước tên quy trình.
  + Bên trong mỗi mục hiển thị thông tin chi tiết về trạng thái trung gian của quy trình đó, bao gồm:

    - (Còn n cấp cần xử lý để hoàn tất): Hiển thị động giá trị "n". (n) = (Tổng số cấp duyệt của quy trình) - (Cấp cao nhất đã xử lý theo trạng thái trung gian gần nhất)

      * Ví dụ Quy trình có 10 cấp; cấp đã xử lý là cấp 2 (giả định: tại thời điểm cấp 1 chưa xử lý, quy trình duyệt vượt cấp thì khi cấp 2 chọn duyệt → trạng thái trung gian cấp 1 và cấp 2 = Đang ở cấp 3, đợi nhóm quyền cấp 3 xử lý)
      * Giá trị 'n' = 10-2 = 8.
      * Trạng thái trung gian hiển thị: Đang ở cấp 3, đợi ["nhóm quyền cấp 3"] xử lý
    - @Trạng thái trung gian (hiển thị đầy đủ, không giới hạn ký tự). Trạng thái trung gian được BE trả về từ [HO] Quy trình duyệt - Đăng ký tích lũy
    - Thông tin về tên người tạo (cấp duyệt) và thời gian của trạng thái đó: Lúc hh:mm, dd/mm/yyyy, bởi Tên người cập nhật (Cấp đã xử lý). Lấy sự kiện mới nhất theo cấp cao nhất xử lý của quy trình để hiển thị.

      * Theo ví dụ trên sẽ là: Lúc 09:35, 22/11/2024 bởi Nguyễn Văn C (Cấp 2)
      * Nếu hệ thống duyệt sẽ hiển thị: Lúc 09:35, 22/11/2024 bởi System admin (Cấp x)
    - Lý do từ chối/ trả lại yêu cầu: Hiển thị lý do theo trạng thái trung gian được BE trả về từ [HO] Quy trình duyệt - Đăng ký tích lũy

      * Trường hợp không có lý do thì ẩn luôn như UI
  + Chọn dấu x để tắt popup

### **Bộ lọc tìm kiếm**

**Bổ sung bộ lọc "Tên quy trình" và "Trạng thái trung gian" trên bộ lọc sẵn có của màn hình**

* **Chương trình tích lũy: tại [SM-APP] Chương trình tích lũy**
* **Danh sách đã tham gia: SM-APP  → [Xem thông tin tham gia CTTB/CTTL](https://kb.finviet.com.vn/display/DMSNEW/%5BSM-APP%5D+Enhance+CTTB#id-[SMAPP]EnhanceCTTB-2.5Xemth%C3%B4ngtinthamgiaCTTB/CTTL)**

**Tên quy trình:**

* Tên quy trình: placeholder "Vui lòng chọn". **Trường này chỉ xuất hiện khi tồn tại từ một quy trình duyệt đang hoạt động áp dụng cho Phiếu đăng ký của điểm bán có trạng thái Chờ duyệt.**
* **Mở danh sách:** 

  + Khi người dùng nhấp vào trường "Tên quy trình", Hiển thị popup Tên quy trình chứa **Danh sách tất cả các quy trình duyệt đang hoạt động áp dụng cho màn hình. Danh sách này chỉ hiển thị khi chọn Trạng thái = Chờ duyệt**
  + Dòng chữ hiển thị: "Vui lòng chọn 1 quy trình"

* + **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách và chọn một (Chỉ chọn một) quy trình duyệt bằng trong danh sách.
  + **Hiển thị lựa chọn:**  Sau khi chọn Radio checkbox hiển thị đã chọn như UI
* **Kết quả lọc:** Sau khi chọn "Xác nhận" Danh sách quy trình duyệt sẽ tự động được lọc để hiển thị tất cả các Phiếu đăng ký của điểm bán có trạng thái trung gian mới nhất thỏa quy trình duyệt đã chọn.

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
* **Kết quả lọc:** Sau khi chọn "Xác nhận" Danh sách quy trình duyệt sẽ tự động được lọc để hiển thị tất cả các Phiếu đăng ký của điểm bán có trạng thái trung gian mới nhất thỏa "quy trình duyệt đã chọn và các trạng thái trung gian đã chọn".

  + Nếu không chọn bất kì trạng thái trung gian nào hệ thống hiểu là search tất cả các Phiếu đăng ký của điểm bán có trạng thái trung gian mới nhất thỏa "quy trình duyệt đã chọn"

Chọn dấu x để tắt popup và không lưu dữ liệu