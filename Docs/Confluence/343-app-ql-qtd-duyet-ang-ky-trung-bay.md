|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Màn hình này cho phép người dùng ở cấp Quản lý (VD: SS, RSM, ASM, SD) xem xét và thực hiện phê duyệt hoặc từ chối các phiếu đăng ký của điểm bán tạo ra. Màn hình dựa trên "Quy trình duyệt" để xử lý các yêu cầu theo nhiều cấp, đảm bảo tính tuân thủ và chính xác trước khi điểm bán được chính thức đưa vào hoạt động. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | Thao NTT |
| Chage History | 2 |

truenone

**Mục đích:** Màn hình này cho phép người dùng ở cấp Quản lý (VD: SS, RSM, ASM, SD) xem xét và thực hiện phê duyệt hoặc từ chối các Phiếu đăng ký chương trình của điểm bán có trạng thái Chờ duyệt. Màn hình dựa trên "Quy trình duyệt" để xử lý các yêu cầu theo nhiều cấp, đảm bảo tính tuân thủ và chính xác trước khi Phiếu đăng ký chương trình của điểm bán được chính thức đưa vào hoạt động.

Trạng thái chính (Trạng thái gốc): Trạng thái gốc của một Phiếu đăng ký chương trình của điểm bán trong hệ thống.  
Trạng thái trung gian (Approval Status): Trạng thái chi tiết của quy trình duyệt, cho biết yêu cầu đang ở bước nào.

**Quyền xử lý gốc**

**Quyền xử lý gốc:**

**Phân quyền mới: tách quyền Hủy, Phê duyệt Phiếu đăng ký chương trình của điểm bán trên app QL**

* **Tách quyền PHÊ DUYỆT để xử lý hiển thị button Duyệt; Duyệt tất cả**
* **Tách quyền HỦY để xử lý hiển thị button Từ chối, Từ chối tất cả khi chọn nhiều**

## Màn hình: Xét duyệt đăng ký CTTB > Danh sách đăng ký

Người dùng login vào app QL và mở chức năng Xét duyệt đăng ký CTTB:

* Khác → Xét duyệt đăng ký CTTB > **Danh sách đăng ký → Tab Chờ duyệt**
* Hoặc Khác → Xét duyệt đăng ký CTTB > Danh sách đăng ký → Tab Chờ duyệt → Chọn xem **Chi tiết đăng ký** có trạng thái "Chờ duyệt"

Hiển thị giao diện:

   

### Giao diện hiển thị trạng thái trung gian:

Chỉ những Phiếu đăng ký chương trình của điểm bán tại thời điểm có áp dụng quy trình duyệt và quy trình duyệt cho màn hình có trạng thái "Hoạt động" mới hiển thị trạng thái trung gian như hình:

* + **Những Phiếu đăng ký chương trình của điểm bán tạo có trạng thái "Chờ duyệt"** Hiển thị trạng thái trung gian gần nhất tại thời điểm xem danh sách
    - Nếu có nhiều quy trình lấy trạng thái trung gian theo thời gian cập nhật gần nhất. Trường hợp trùng thì random hiển thị chỉ một.
  + **Trạng thái trung gian:**

    - Hiển thị ngay dưới Trạng thái gốc.
    - **Yêu cầu:** Nội dung hiển thị bị giới hạn tối đa **25 ký tự**. Nếu dài hơn, hệ thống sẽ tự động cắt ngắn và thêm dấu ba chấm "..." ở cuối. (Ví dụ: "Đang ở cấp 2, đợi “SS, ASM ...").
    - Trạng thái được BE trả về theo lịch sử cập nhậtt trạng thái trung gian của màn hình: [HO] Quy trình duyệt - Đăng ký trưng bày
  + **Link "**@trạng thái trung gian**":** Một liên kết dạng text cho phép người dùng nhấn vào để xem popup chi tiết.
  + Button:
    - Button "Duyệt"; "Từ chối" của từng Phiếu đăng ký chương trình của điểm bán hiển thị hoặc ẩn phụ thuộc vào quy trình duyệt đang áp dụng 
      * Các trường hợp ẩn/ hiển thị button
        + Giả định mỗi case dưới đây có thể xảy ra:

        **Case A: List Điểm bán đang trong "Quy trình Phê duyệt"**

        + - **Hiển thị:** Button Duyệt (của quy trình) và Button Từ chối gốc. **Ẩn Button "Duyệt" gốc.**
          - Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Duyệt"hay không? Luôn hiển thị button "Từ chối" gốc vì không áp dụng quy trình từ chối nào
          - Logic Từ chối của quy trình sẽ quyết định kết quả (kết thúc hoặc đẩy lùi).

        **Case B: List Điểm bán đang trong "Quy trình Hủy"**

        + - **Hiển thị:** Button **"Duyệt" hiển thị nút duyệt gốc.**Button Từ chối (của quy trình). **Ẩn Button "Từ chối" gốc.**
          - Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Từ chối" hay không? Luôn hiển thị button "Duyệt" gốc vì không áp dụng quy trình Duyệt nào.

        **Case C: List Điểm bán đang trong cả hai quy trình "Phê duyệt" và "Hủy"**

        + - **Hiển thị:** Button Duyệt (của quy trình Phê duyệt) và Button Từ chối (của quy trình Hủy). **Ẩn tất cả các nút gốc.**
          - Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Duyệt"/"Từ chối" hay không?

        **Case D: List Điểm bán KHÔNG trong quy trình nào**

        + - **Hiển thị:** luôn hiển thị các button xử lý gốc của màn hình.
          - link: [Manager\_App] Xét duyệt đăng ký CTTB
    - Luôn hiển thị button "Duyệt tất cả" hoặc "Từ chối" khi chọn nhiều Phiếu đăng ký chương trình của điểm bán.

Khi quy trình duyệt cho màn hình có trạng thái "Hoạt động": hiển thị Trạng thái trung gian của các Phiếu đăng ký chương trình của điểm bán và xử lý theo quy trình duyệt.

Trạng thái chính của Phiếu đăng ký chương trình của điểm bán được chuyển từ Chờ duyệt sang Đã duyệt hoặc Chờ duyệt sang Từ chối duyệt, khi reload màn hình sẽ chuyển qua các Tab tương ứng, khi đó các bản ghi thuộc các Tab "Đã duyệt", "Từ chối" không thay đổi (theo link:[Manager\_App] Xét duyệt đăng ký CTTB)

### Bổ sung thêm bộc lọc thời gian:

* Thời gian từ đầu tháng đến cuối tháng của ngày hiện tại (Ví dụ ngày hiện tại là 10/12/2024, thì lấy thời gian từ 1/12 - 31/12)
* Thời gian lọc danh sách các phiếu đăng ký của điểm bán lấy theo ngày tạo phiếu
* Kết quả lọc danh sách tất cả các phiếu đăng ký của điểm bán có ngày tạo thuộc thời gian đã chọn của chương trình đã chọn
* User có thể nhấn để chọn lại thời gian

* Đến ngày >= Từ ngày
* Từ ngày → Đến ngày <= 90 ngày

Trạng thái trung gian

#### Popup "Chi tiết xét duyệt"

  

* **Kích hoạt:** Được mở ra khi người dùng nhấn vào link trạng thái trung gian
* **Mục đích:** Xem chi tiết các trạng thái trung gian của Phiếu đăng ký chương trình của điểm bán trường hợp một Phiếu đăng ký chương trình của điểm bán có thể đang tham gia vào **nhiều quy trình duyệt cùng một lúc** (ví dụ: Quy trình Phê duyệt và Quy trình Hủy Phiếu đăng ký chương trình của điểm bán).
* **Giao diện:**

  + Luôn hiển thị ở đầu popup Chi tiết xét duyệt dòng chữ như UI: 'Hiển thị các trạng thái trung gian xử lý của Phiếu đăng ký chương trình của điểm bán theo các quy trình xét duyệt'
  + Hiển thị tất cả quy trình đang áp dụng cho Phiếu đăng ký chương trình của điểm bán. Mỗi mục đại diện cho một quy trình duyệt đang hoạt động, với tiêu đề là **"Tên quy trình".**
    - Tên quy trình hiển thị xuống dòng nếu dài. Sort hiển thị quy trình được cập nhật gần nhất trên cùng danh sách hiển thị.
    - icon:  trước tên quy trình.
  + Bên trong mỗi mục hiển thị thông tin chi tiết về trạng thái trung gian của quy trình đó, bao gồm:

    - (Còn n cấp cần xử lý để hoàn tất): Hiển thị động giá trị "n". (n) = (Tổng số cấp duyệt của quy trình) - (Cấp cao nhất đã xử lý theo trạng thái trung gian gần nhất)
      * Ví dụ Quy trình có 10 cấp; cấp đã xử lý là cấp 2 (giả định: tại thời điểm cấp 1 chưa xử lý, quy trình duyệt vượt cấp thì khi cấp 2 chọn duyệt → trạng thái trung gian cấp 1 và cấp 2 = Đang ở cấp 3, đợi nhóm quyền cấp 3 xử lý)
      * Giá trị 'n' = 10-2 = 8.
      * Trạng thái trung gian hiển thị: Đang ở cấp 3, đợi ["nhóm quyền cấp 3"] xử lý
    - @Trạng thái trung gian (hiển thị đầy đủ, không giới hạn ký tự). Trạng thái trung gian được BE trả về từ [HO] Quy trình duyệt - Đăng ký trưng bày
    - Thông tin về tên người tạo (cấp duyệt) và thời gian của trạng thái đó: Lúc hh:mm, dd/mm/yyyy, bởi Tên người cập nhật (Cấp đã xử lý). Lấy sự kiện mới nhất theo cấp cao nhất xử lý của quy trình để hiển thị.

      * Theo ví dụ trên sẽ là: Lúc 09:35, 22/11/2024 bởi Nguyễn Văn C (Cấp 2)
      * Nếu hệ thống duyệt sẽ hiển thị: Lúc 09:35, 22/11/2024 bởi System admin (Cấp x)
    - Lý do từ chối/ trả lại yêu cầu: Hiển thị lý do theo trạng thái trung gian được BE trả về từ [HO] Quy trình duyệt - Đăng ký trưng bày
      * Trường hợp không có lý do thì ẩn luôn như UI
  + Chọn dấu x để tắt popup và trở về màn hình trước đó.

### Bộ lọc Phiếu đăng ký chương trình của điểm bán

Chọn icon → Hiển thị màn hình bộ lọc như sau: màn hình bộ lọc sẽ tuân theo [Bộ lọc dữ liệu](https://kb.finviet.com.vn/display/DMSNEW/Manager+App) ở quy tắc chung 

| Nội dung | Mô tả |
| --- | --- |
| Bộ lọc | * Vị trí điểm bán   + Hiển thị danh sách tất cả các vị trí điểm bán trên hệ thống, chỉ hiển thị các dữ liệu Đang hoạt động   + Có thể chọn nhiều   + Sau khi áp dụng danh sách sẽ hiển thị các Phiếu đăng ký chương trình của điểm bán có vị trí điểm bán đã chọn * Loại điểm bán   + Hiển thị danh sách tất cả các Loại điểm bán trên hệ thống, chỉ hiển thị các dữ liệu Đang hoạt động   + Có thể chọn nhiều   + Sau khi áp dụng danh sách sẽ hiển thị các Phiếu đăng ký chương trình của điểm bán có Loại điểm bán đã chọn * Hạng điểm bán   + Hiển thị danh sách tất cả các Hạng điểm bán trên hệ thống, chỉ hiển thị các dữ liệu Đang hoạt động   + Có thể chọn nhiều   + Sau khi áp dụng danh sách sẽ hiển thị các Phiếu đăng ký chương trình của điểm bán có Hạng điểm bán đã chọn * Kênh bán hàng   + Hiển thị danh sách tất cả các Kênh bán hàng trên hệ thống, chỉ hiển thị các dữ liệu Đang hoạt động   + Có thể chọn nhiều   + Sau khi áp dụng danh sách sẽ hiển thị các Phiếu đăng ký chương trình của điểm bán có Kênh bán hàng đã chọn * Sau khi áp dụng bộ lọc, trong từng tab sẽ có hiển thị bộ lọc như sau:      * + Có thể scroll ngang những bộ lọc đã chọn   + khi bấm vào bộ lọc sẽ hiển thị UI danh sách bộ lọc tương ứng như sau, người dùng có thể thêm các dữ liệu lọc từ đây      * + Số trên từng bộ lọc hiển thị dữ liệu trong bộ lọc đã chọn (VD chọn 2 vị trí điểm bán, bên ngoài sẽ hiển thị (2))   + Trường hợp bộ lọc có lọc dữ liệu sẽ hiển thị icon , không lọc bất cứ dữ liệu nào sẽ hiển thị icon |
| Bộ lọc "Tên quy trình" và "Trạng thái trung gian" | **Tên quy trình:**     * Tên quy trình: placeholder "Vui lòng chọn". **Trường này chỉ xuất hiện khi tồn tại từ một quy trình duyệt đang hoạt động áp dụng cho Phiếu đăng ký chương trình của điểm bán có trạng thái Chờ duyệt** * **Mở danh sách:**     + Khi người dùng nhấp vào trường "Tên quy trình", Hiển thị popup Tên quy trình chứa **Danh sách tất cả các quy trình duyệt đang hoạt động áp dụng cho màn hình.**   + Dòng chữ hiển thị: "Vui lòng chọn 1 quy trình"  * + **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách và chọn một (Chỉ chọn một) quy trình duyệt bằng trong danh sách.   + **Hiển thị lựa chọn:**  Sau khi chọn Radio checkbox hiển thị đã chọn như UI * **Kết quả lọc:** Sau khi chọn "Xác nhận" Danh sách quy trình duyệt sẽ tự động được lọc để hiển thị tất cả các Phiếu đăng ký chương trình của điểm bán có trạng thái trung gian mới nhất thỏa quy trình duyệt đã chọn.    + Khi một quy trình được chọn, dropdown "Trạng thái trung gian" sẽ hiển thị và tìm kiếm theo tất cả các trạng thái trung gian của quy trình   Chọn dấu x để tắt popup và không lưu dữ liệu |
|  | **Trạng thái trung gian:**Khi một quy trình được chọn, dropdown "Trạng thái trung gian" sẽ hiển thị     * Tên trạng thái: placeholder "Vui lòng chọn". **Trường này chỉ xuất hiện khi đã chọn một quy trình duyệt đang hoạt động trước đó.** * Tìm kiếm: Placeholder "Tìm kiếm theo tên vai trò" cho phép người dùng nhập tên nhóm quyền, search like và hiển thị * **Mở danh sách:**    + Khi người dùng nhấp vào trường "Trạng thái trung gian", Hiển thị popup chứa **Danh sách tất cả các trạng thái trung gian của quy trình đã chọn.**   + Hiển thị dòng chữ: Chọn trạng thái trung gian mong muốn   + Danh sách các Trạng thái trung gian của "quy trình đã được chọn" ở bộ lọc "Tên quy trình" sẽ hiển thị   + **Hiển thị động, phụ thuộc vào số cấp duyệt đã cấu hình của quy trình đã chọn.**     - |  |       | --- |       | Đang ở cấp 1, đợi "@Nhóm quyền cấp 1" xử lý |       | Đang ở cấp n, đợi "@Nhóm quyền cấp n" xử lý |       | ... |       | Đang ở cấp 10, đợi "@Nhóm quyền cấp 10" xử lý |  * + **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách và chọn một hoặc nhiều trạng thái trong danh sách.   + **Hiển thị lựa chọn:**  Sau khi chọn Radio checkbox hiển thị đã chọn như UI * **Kết quả lọc:** Sau khi chọn "Xác nhận" Danh sách quy trình duyệt sẽ tự động được lọc để hiển thị tất cả các Phiếu đăng ký chương trình của điểm bán có trạng thái trung gian mới nhất thỏa "quy trình duyệt đã chọn và các trạng thái trung gian đã chọn".    + Nếu không chọn bất kì trạng thái trung gian nào hệ thống hiểu là search tất cả các Phiếu đăng ký chương trình của điểm bán có trạng thái trung gian mới nhất thỏa "quy trình duyệt đã chọn"   Chọn dấu x để tắt popup và không lưu dữ liệu |

## Quy trình xử lý duyệt trên app QL

**1/ Các khái niệm:**

1. **Trạng thái gốc:** Trạng thái chính của Phiếu đăng ký chương trình của điểm bán (ví dụ: Chờ duyệt, Đã duyệt, Từ chối duyệt).
2. **Trạng thái trung gian:** Trạng thái của Phiếu đăng ký chương trình của điểm bán bên trong một [quy trình duyệt](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533072), thể hiện cấp đang chờ xử lý.
3. **[Quyền Lớp 1 (Quyền Quy trình)](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596):** Quyền của người dùng được tham gia vào một cấp duyệt trong quy trình duyệt [HO] Quy trình duyệt / [HO] Quy trình duyệt - Đăng ký trưng bày
4. **Quyền Lớp 2 (**Quyền xử lý gốc**):** Quyền cơ bản của người dùng để thực thi thành công hành động cuối cùng làm thay đổi trạng thái gốc trên app QL [Manager\_App] Xét duyệt đăng ký CTTB

**2/ Trên APP QL chỉ Áp dụng các quy trình duyệt với trạng thái Chờ duyệt của Phiếu đăng ký chương trình của điểm bán.**

***Khi App gọi API để lấy danh sách/chi tiết Phiếu đăng ký chương trình của điểm bán, mỗi Phiếu đăng ký chương trình của điểm bán cần trả về thêm các thông tin:***

* *Có đang trong quy trình không?*
* *Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 Phiếu đăng ký chương trình của điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Duyệt"/"Từ chối" hay không?*

  + Các trường hợp ẩn/ hiển thị button
    - Giả định mỗi case dưới đây có thể xảy ra:

    **Case A: List Điểm bán đang trong "Quy trình Phê duyệt"**

    - * **Hiển thị:** Button Duyệt (của quy trình) và Button Từ chối gốc. **Ẩn Button "Duyệt" gốc.**
      * Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Duyệt"hay không? Luôn hiển thị button "Từ chối" gốc vì không áp dụng quy trình từ chối nào
      * Logic Từ chối của quy trình sẽ quyết định kết quả (kết thúc hoặc đẩy lùi).

    **Case B: List Điểm bán đang trong "Quy trình Hủy"**

    - * **Hiển thị:** Button **"Duyệt" hiển thị nút duyệt gốc.**Button Từ chối (của quy trình). **Ẩn Button "Từ chối" gốc.**
      * Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Từ chối" hay không? Luôn hiển thị button "Duyệt" gốc vì không áp dụng quy trình Duyệt nào.

    **Case C: List Điểm bán đang trong cả hai quy trình "Phê duyệt" và "Hủy"**

    - * **Hiển thị:** Button Duyệt (của quy trình Phê duyệt) và Button Từ chối (của quy trình Hủy). **Ẩn tất cả các nút gốc.**
      * Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Duyệt"/"Từ chối" hay không?

    **Case D: List Điểm bán KHÔNG trong quy trình nào**

    - * **Hiển thị:** luôn hiển thị các button xử lý gốc của màn hình.
      * link: [Manager\_App] Xét duyệt đăng ký CTTB
* *Trạng thái trung gian là gì?*

Cơ Chế Kiểm Tra & Hiển Thị

**Cơ Chế Kiểm Tra & Hiển Thị**

Khi người dùng thực hiện click vào button xử lý trên UI

* Backend truy vấn vào bản ghi và Kiểm tra Trạng thái Quy trình của Bản ghi:
* **Câu hỏi:** "Bản ghi này có đang trong một quy trình duyệt nào đang hoạt động không?" [HO] Quy trình duyệt - Đăng ký trưng bày
* **Nếu CÓ:**

  + **→ Kích hoạt Logic Quy trình:** Toàn bộ các bước xử lý tiếp theo sẽ đi theo luồng quy trình duyệt.
  + **Kiểm tra Quyền Lớp 1:** "Người dùng userId có thuộc Nhóm quyền đang chờ xử lý ở cấp hiện tại không?"

    - **Nếu có:** Thực hiện các bước tiếp theo của quy trình (Không thay đổi, chuyển cấp, hoặc kết thúc).
    - **Nếu người dùng không thuộc nhóm quyền:**server sẽ từ chối yêu cầu và trả về lỗi "Bạn không có quyền thực hiện hành động này vì Phiếu đăng ký chương trình của điểm bán @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n đang trong quy trình duyệt và bạn không thuộc cấp duyệt hiện tại."
    - Hiển thị ưu tiên trước rồi mới đến các lỗi khác của quy trình duyệt ( [Manager\_App] Xét duyệt đăng ký CTTB) .Tắt popup và reload lại màn hình khi đó button xử lý của người dùng sẽ ẩn trên các bản ghi. Quy trình dừng lại.
  + Trạng thái chính của Phiếu đăng ký chương trình của điểm bán trong CSDL có còn là Trạng thái áp dụng hay không ( "Chờ duyệt").
    - **Nếu trạng thái đã thay đổi:**Dừng hành động và 
      * Hiển thị popup thông báo lỗi với ưu tiên cao nhất: "Phiếu đăng ký chương trình của điểm bán @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n đã được cập nhật bởi một người dùng khác. Vui lòng tải lại trang."
      * Hiển thị ưu tiên trước rồi mới đến các lỗi khác của quy trình duyệt
      * Sau khi người dùng đóng popup báo lỗi, màn hình sẽ tự động được làm mới (reload).
* **Nếu KHÔNG:**

  + **→ Kích hoạt Logic Gốc:** Bản ghi không bị ràng buộc bởi quy trình nào. Hệ thống sẽ xử lý theo luồng mặc định của màn hình.
  + **Kiểm tra Quyền Gốc (**Quyền xử lý gốc**):** "Người dùng userId có quyền thực hiện hành động gốc (ví dụ: Phê duyệt Phiếu đăng ký chương trình của điểm bán) không?"

    - **Nếu có:** Thực thi hành động gốc
    - **Nếu không:** **Từ chối yêu cầu.** Trả về lỗi: "Bạn không có quyền thực hiện hành động này." Sau khi người dùng đóng popup báo lỗi, màn hình sẽ tự động được làm mới (reload).

**3/ Các quy trình duyệt áp dụng cho button xử lý "Duyệt" và "Từ chối"**

| # | Trạng thái | Nội dung |
| --- | --- | --- |
| **Trạng thái áp dụng (kích hoạt quy trình)** | **Chờ duyệt** | Phiếu đăng ký chương trình của điểm bán có trạng thái chính = trạng thái áp dụng trong một quy trình duyệt đang hoạt dộng |
| **Trạng thái duyệt thành công của Phiếu đăng ký chương trình của điểm bán** | **Đã duyệt** | **Phiếu đăng ký chương trình của điểm bán đã hoàn tất quy trình duyệt**và được kích hoạt. |
| **Trạng thái hủy/ Từ chối của Phiếu đăng ký chương trình của điểm bán** | **Từ chối duyệt** | **Phiếu đăng ký chương trình của điểm bán đã bị từ chối bởi một cấp có quyền quyết định ở Quy trình duyệt Phiếu đăng ký chương trình của điểm bán**  Hoặc **Phiếu đăng ký chương trình của điểm bán đã hoàn tất quy trình hủy Phiếu đăng ký chương trình của điểm bán qua nhiều cấp.** |

Quy trình duyệt

### **Quy trình Duyệt Phiếu đăng ký chương trình của điểm bán (Nhiều cấp)**

* **Mục đích:** Quy trình này được kích hoạt khi người dùng muốn phê duyệt một Phiếu đăng ký chương trình của điểm bán mới, đảm bảo Phiếu đăng ký chương trình của điểm bán được xác thực qua nhiều cấp quản lý trước khi được kích hoạt.
* **Kích hoạt bởi:** Người dùng nhấn button **"Duyệt"**.
* **Trạng thái kết thúc có thể có:** Đã duyệt (thành công),
* **Hành động khi Từ chối:** 
  + Từ chối duyệt (nếu bị từ chối ở một cấp được cấu hình để kết thúc quy trình).
  + Trở về cấp duyệt trước
* **Ví dụ giả định:** Quy trình có 3 cấp: Cấp 1 (SS), Cấp 2 (ASM), Cấp 3 (RSM - Cấp cuối).

#### **Ví dụ cài đặt Quy trình:**

**Xem thêm: [Ví dụ và Lưu ý](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO]Quytr%C3%ACnhduy%E1%BB%87t-V%C3%ADd%E1%BB%A5v%C3%A0L%C6%B0u%C3%BD) của quy trình duyệt.**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tên quy trình | Phê duyệt Phiếu đăng ký chương trình của điểm bán mới | | | |
| Dữ liệu áp dụng | Duyệt đăng ký trưng bày |  |  |  |
| Trạng thái áp dụng | Chờ duyệt |  |  |  |
| Duyệt vượt cấp | ON/ OFF |  |  |  |
| Chức năng | Phê duyệt |  |  |  |
| Trạng thái sau áp dụng | Đã duyệt |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | ***Hành động khi duyệt*** | **Hành động khi Từ chối** | **Tự động chuyển (ngày)** |
| Cấp 1 | SS | *Đi tới cấp tiếp theo* | Thay đổi sang trạng thái Từ chối duyệt | 2 |
| Cấp 2 | ASM | *Đi tới cấp tiếp theo* | Thay đổi sang trạng thái Từ chối duyệt | 0 |
| Cấp 3 | RSM | *Thay đổi trạng thái **Đã duyệt*** | *Trở về cấp duyệt trước* | 3 |

#### Mô tả

| Bước | Người thực hiện | Hành động | Kết quả & Phản hồi Hệ thống |
| --- | --- | --- | --- |
| **1** | Nhân viên Sales (SM) | Tạo mới Phiếu đăng ký chương trình của điểm bán trên hệ thống. | - **Trạng thái gốc:** Chờ duyệt.  - **Hệ thống:** Kích hoạt "Quy trình Duyệt".  - **Trạng thái trung gian:** Đang ở cấp 1, chờ "SS" xử lý.  - **UI App Quản lý:**   **Duyệt vượt cấp = OFF:**User thuộc nhóm quyền "SS" nhìn thấy button "Duyệt" và "Từ chối". Trong đó button Duyệt của quy trình duyệt. Button Từ chối là button gốc của màn hình  **Duyệt vượt cấp = ON; tất cả các user của toàn quy trình n**hìn thấy button "Duyệt" và "Từ chối". Trong đó button Duyệt của quy trình duyệt. Button Từ chối là button gốc của màn hình |
| **2** | **SS (Cấp 1)** | Nhấn button **"Duyệt"**. | - **Kiểm tra:** Hệ thống xác thực theo **[Cơ Chế Kiểm Tra & Hiển Thị](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533897#id-[APPQL][QTD]Duy%E1%BB%87t%C4%91i%E1%BB%83mb%C3%A1n-C%C6%A1ch%E1%BA%BFki%E1%BB%83mtrav%C3%A0hi%E1%BB%83nth%E1%BB%8B)**của SS.   Xác nhận duyệt  hợp lệ → Hiển thị popup:    * Trong đó: Label: Duyệt phiếu đăng ký   + "Chọn "Xác nhận duyệt" để @Hành động khi Duyệt": Trong đó @Hành động khi Duyệt hiển thị động Các hành động khi duyệt của quy trình theo cấp đang xử lý   + "Chọn "Trả lại yêu cầu" để @Hành động khi Từ chối: Trong đó @Hành động khi Từ chối hiển thị động Các hàng động khi từ chối của quy trình theo cấp đang xử lý  **Trường hợp A: Chọn "Xác nhận duyệt"**  **Người duyệt thuộc cấp CHƯA PHẢI cấp cuối cùng (ví dụ: SS Xác nhận duyệt)**   * **Hệ thống:**    1. **KHÔNG** gọi đến hàm xử lý gốc.   2. Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán **không thay đổi**. * **Kết quả:**    + Trạng thái trung gian được cập nhật để chuyển yêu cầu đến cấp duyệt tiếp theo.      - trạng thái mới là **"**Đang ở cấp 2, chờ "ASM" xử lý. * **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động (Phê duyệt), Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.    + Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý * **Giao diện:**    + **Nếu Duyệt vượt cấp = OFF:** button xử lý của người vừa **"Xác nhận duyệt"**sẽ ẩn đi. button xử lý sẽ xuất hiện cho người dùng ở cấp tiếp theo   + **Nếu Duyệt vượt cấp = ON:** button xử lý của người vừa **"Xác nhận duyệt"**và các cấp thấp hơn sẽ ẩn đi. button của các cấp cao hơn vẫn hiển thị. (Ví dụ: Nếu **SS;** - Cấp 1 duyệt, button của cả **SS** sẽ ẩn đi, Còn cấp 2 và Cấp 3 là **RSM; ASM** vẫn thấy).   --  **Trường hợp B: Chọn "Trả lại yêu cầu"**  Trả lại yêu cầu   * + Chọn**"Trả lại yêu cầu"** , hiển thị popup: Lý do trả lại yêu cầu. Bắt buộc phải chọn lý do       * + - Danh sách lý do lấy từ [Danh sách dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) loại = Lý do từ chối duyệt CTTB và thêm Lý do Khác, trường hợp user chọn Lý do khác phải nhập thông tin Lý do (free text, 100). Không nhập lý do hoặc không chọn option nào => disable button "Xác nhận"     - Nhấn xác nhận     **Cấp duyệt được cấu hình "Hành động khi Từ chối = Thay đổi sang trạng thái Từ chối duyệt"**   * **Mapping:** Hành động này tương đương với việc thực thi **Hành động Gốc "Hủy Phiếu đăng ký chương trình của điểm bán"**. * **Hệ thống:**    1. **Vì SS**có Quyền Lớp 2 (Quyền Gốc) của người dùng được phép "Hủy Phiếu đăng ký chương trình của điểm bán" trên app QL   2. Hệ thống gọi đến hàm xử lý gốc của màn hình để hủy Phiếu đăng ký chương trình của điểm bán. * **Kết quả:**    + Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán chuyển thành **"Từ chối duyệt"**.   + Trạng thái trung gian được cập nhật lần cuối để phản ánh hành động ( = trạng thái gốc).   + Quy trình duyệt chính thức kết thúc. * **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động (từ chối), Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.    + Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý * **Giao diện:**     + button xử lý của tất cả các quy trình có liên quan đến bản ghi (Ví dụ Quy trình Duyệt có nút Phê duyệt/Quy trình hủy có nút Từ chối) trên bản ghi này sẽ **ẩn đi đối với TẤT CẢ** người dùng thuộc các nhóm quyền cấu hình ở cả 2 quy trình áp dụng bản ghi Vì 1 quy trình đã kết thúc, trạng thái gốc đã thay đổi. |
| **3** | **ASM (Cấp 2)** | Nhấn button **"Duyệt"**. | - **Kiểm tra:** Hệ thống xác thực theo **[Cơ Chế Kiểm Tra & Hiển Thị](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533897#id-[APPQL][QTD]Duy%E1%BB%87t%C4%91i%E1%BB%83mb%C3%A1n-C%C6%A1ch%E1%BA%BFki%E1%BB%83mtrav%C3%A0hi%E1%BB%83nth%E1%BB%8B)**của ASM.  hợp lệ → Hiển thị popup Duyệt Phiếu đăng ký chương trình của điểm bán  **Trường hợp A:** **Chọn "Xác nhận duyệt"**  Người **duyệt thuộc cấp CHƯA PHẢI cấp cuối cùng (ví dụ: ASM Xác nhận duyệt)**   * **Hệ thống:**    1. **KHÔNG** gọi đến hàm xử lý gốc.   2. Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán **không thay đổi**. * **Kết quả:**    + Trạng thái trung gian được cập nhật để chuyển yêu cầu đến cấp duyệt tiếp theo.      - trạng thái mới là **"**Đang ở cấp 3, chờ "RSM" xử lý. * **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động, Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.    + Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý * **Giao diện:**    + **Nếu Duyệt vượt cấp = OFF:** button xử lý của người vừa **"Xác nhận duyệt"**sẽ ẩn đi. button xử lý sẽ xuất hiện cho người dùng ở cấp tiếp theo   + **Nếu Duyệt vượt cấp = ON:** button xử lý của người vừa **"Xác nhận duyệt"**và các cấp thấp hơn sẽ ẩn đi. button của các cấp cao hơn vẫn hiển thị. (Ví dụ: Nếu ASM- Cấp 2 duyệt, button của cả **SS, ASM** sẽ ẩn đi, Còn cấp đang chờ xử lý là Cấp 3 là **RSM;**vẫn thấy).   -----  **Trường hợp B: Chọn "Trả lại yêu cầu"**   * Chọn**"Trả lại yêu cầu"** , hiển thị popup: Lý do trả lại yêu cầu   **Cấp duyệt được cấu hình "Hành động khi Từ chối = Thay đổi sang trạng thái Từ chối duyệt"**   * **Mapping:** Hành động này tương đương với việc thực thi **Hành động Gốc "Hủy Phiếu đăng ký chương trình của điểm bán"**. * **Hệ thống:**    1. **Vì ASM**có Quyền Lớp 2 (Quyền Gốc) của người dùng được phép "Hủy Phiếu đăng ký chương trình của điểm bán" trên app QL   2. Hệ thống gọi đến hàm xử lý gốc của màn hình để hủy Phiếu đăng ký chương trình của điểm bán. * **Kết quả:**    + Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán chuyển thành **"Từ chối duyệt"**.   + Trạng thái trung gian được cập nhật lần cuối để phản ánh hành động = trạng thái gốc   + Quy trình duyệt chính thức kết thúc. * **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động, Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.    + Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý * **Giao diện:**     + Button xử lý của tất cả các quy trình có liên quan đến bản ghi (Ví dụ Quy trình Duyệt có nút Phê duyệt/Quy trình hủy có nút Từ chối) trên bản ghi này sẽ **ẩn đi đối với TẤT CẢ** người dùng thuộc các nhóm quyền cấu hình ở cả 2 quy trình áp dụng bản ghi Vì 1 quy trình đã kết thúc, trạng thái gốc đã thay đổi. |
| **4** | **RSM (Cấp 3 - Cuối)** | Nhấn button **"Duyệt"**. | - **Kiểm tra:** Hệ thống xác thực theo **[Cơ Chế Kiểm Tra & Hiển Thị](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533897#id-[APPQL][QTD]Duy%E1%BB%87t%C4%91i%E1%BB%83mb%C3%A1n-C%C6%A1ch%E1%BA%BFki%E1%BB%83mtrav%C3%A0hi%E1%BB%83nth%E1%BB%8B)**của RSM  hợp lệ → Hiển thị popup: Duyệt Phiếu đăng ký chương trình của điểm bán  **Trường hợp B: Chọn "Xác nhận duyệt"**  **Người duyệt thuộc cấp LÀ cấp cuối cùng (ví dụ: RSM Xác nhận duyệt)**   * **Mapping:** Hành động này tương đương với việc thực thi **Hành động Gốc "Phê duyệt Phiếu đăng ký chương trình của điểm bán"**. * **Hệ thống:**    1. **Vì RSM**có Quyền Lớp 2 (Quyền Gốc) của người dùng được phép "Phê duyệt Phiếu đăng ký chương trình của điểm bán" trên app QL   2. Hệ thống gọi đến hàm xử lý gốc của màn hình để kích hoạt Phiếu đăng ký chương trình của điểm bán. * **Kết quả:**    + Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán chuyển thành **"Đã duyệt"**.   + Quy trình duyệt kết thúc thành công.   + Nếu kết quả duyệt bị lỗi do Phiếu đăng ký chương trình của điểm bán không còn thuộc tuyến bán hàng hoặc các lỗi khác thì hiển thị popup và inline lỗi theo link: [Manager\_App] Xét duyệt đăng ký CTTB (Không thay đổi luồng báo lỗi cũ của chức năng duyệt Phiếu đăng ký chương trình của điểm bán) * **Ghi Lịch sử:**    + **Nếu Duyệt vượt cấp = OFF:** Ghi nhận hành động "Phê duyệt" của cấp cuối cùng   + **Nếu Duyệt vượt cấp = ON:** ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý * **Giao diện:** button xử lý (Phê duyệt/Từ chối) trên bản ghi này sẽ **ẩn đi đối với TẤT CẢ** người dùng vì quy trình đã kết thúc.  **---**  **Trường hợp B: Chọn "Trả lại yêu cầu"**   * Hiển thị popup: Lý do trả lại yêu cầu   **Cấp duyệt cấu hình "Hành động khi Từ chối = *Trở về cấp duyệt trước*" (Logic: Trả về cấp trước)**   * **Mapping:** Đây là một hành động nội bộ của quy trình duyệt, mang tính chất "yêu cầu xem xét lại". * **Hệ thống:**    1. **KHÔNG** gọi đến hàm xử lý gốc.   2. **KHÔNG** kiểm tra Quyền Lớp 2.   3. Cập nhật trạng thái của quy trình để đẩy yêu cầu về cấp ngay trước đó. * **Kết quả:**    + Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán **không thay đổi** (vẫn là "Chờ duyệt").   + Trạng thái trung gian được cập nhật để phản ánh việc bị trả về.      - Nếu RSM (Cấp 3) từ chối, trạng thái mới là: **"Đang ở cấp 2, chờ "ASM" xử lý"**. * **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động, Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.    + Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý  * **Giao diện:**    + **Nếu Duyệt vượt cấp = OFF:** button xử lý của người vừa "Trả lại yêu cầu" (ví dụ: RSM) sẽ ẩn đi. button xử lý sẽ xuất hiện lại cho người dùng ở cấp trước đó, nếu theo ví dụ: cấp 3 "Trả lại yêu cầu" →  button Duyệt hiển thị lại cho cấp 2   + **Nếu Duyệt vượt cấp = ON:**      - Thay vì chỉ người dùng ở cấp hiện tại mới thấy button, giờ đây **TẤT CẢ người dùng thuộc TẤT CẢ các****Nhóm quyền****trong quy trình****thuộc cấp đang chờ xử lý** đều nhìn thấy (CẤP N-1 đến cấp cuối cùng).  Nếu theo ví dụ: cấp 3 "Trả lại yêu cầu" →  button Duyệt hiển thị lại cho cấp 2 và Cấp 3 |
| Bất kỳ một người dùng nào KHÔNG THUỘC QUY TRÌNH chọn button "Duyệt" hoặc "Từ chối" tức là gọi hàm xử lý gốc của màn hình → Xử lý Phiếu đăng ký chương trình của điểm bán như luồng cũ không thay đổi:  (link:[Manager\_App] Xét duyệt đăng ký CTTB)  Trường hợp một người dùng thuộc cấp xử lý của quy trình duyệt chọn nhiều bản ghi và chọn "Duyệt tất cả" (Xem mô tả) => Khi trường hợp chọn Trả lại yêu cầu và chọn lý do trên popup "Lý do trả lại yêu cầu", tất cả các Phiếu đăng ký chương trình của điểm bán đã chọn sẽ được ghi cùng 1 lý do. | | | |

Quy trình hủy

### **Quy trình Hủy Phiếu đăng ký chương trình của điểm bán (Nhiều cấp)**

* **Mục đích:** Quy trình này được kích hoạt khi người dùng muốn từ chối/hủy một Phiếu đăng ký chương trình của điểm bán đang ở trạng thái Chờ duyệt. Quy trình này đảm bảo việc hủy bỏ/ từ chối duyệt đăng ký của điểm bán cũng cần có sự xác nhận của các cấp có thẩm quyền.
* **Kích hoạt bởi:** Người dùng nhấn button **"Từ chối"**.
* **Trạng thái kết thúc:** Từ chối duyệt
* **Hành động khi Từ chối:** Chỉ có Trở về cấp duyệt trước và Không thay đổi ở Cấp 1
* **Ví dụ giả định:** Quy trình có 3 cấp: Cấp 1 (SS), Cấp 2 (ASM) - Cấp 3 (RSM - Cấp cuối).

#### **Ví dụ cài đặt Quy trình:**

**Xem thêm: [Ví dụ và Lưu ý](https://kb.finviet.com.vn/pages/viewpage.action?pageId=73143596#id-[HO]Quytr%C3%ACnhduy%E1%BB%87t-V%C3%ADd%E1%BB%A5v%C3%A0L%C6%B0u%C3%BD) của quy trình duyệt.**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tên quy trình | Quy trình Hủy Phiếu đăng ký chương trình của điểm bán | | | |
| Dữ liệu áp dụng | Duyệt đăng ký trưng bày |  |  |  |
| Trạng thái áp dụng | Chờ duyệt |  |  |  |
| Duyệt vượt cấp | ON/ OFF |  |  |  |
| Chức năng | Hủy |  |  |  |
| Trạng thái sau áp dụng | Từ chối duyệt |  |  |  |
| **Cấp duyệt** | **Nhóm quyền** | ***Hành động khi duyệt*** | **Hành động khi Từ chối** | **Tự động chuyển (ngày)** |
| Cấp 1 | SS | *Đi tới cấp tiếp theo* | Không thay đổi | 2 |
| Cấp 2 | ASM | *Đi tới cấp tiếp theo* | *Trở về cấp duyệt trước* | 0 |
| Cấp 3 | RSM | *Thay đổi trạng thái **Từ chối duyệt*** | *Trở về cấp duyệt trước* | 3 |

#### Mô tả

| Bước | Người thực hiện | Hành động | Kết quả & Phản hồi Hệ thống |
| --- | --- | --- | --- |
| **1** | Nhân viên Sales (SM) | Tạo mới Phiếu đăng ký chương trình của điểm bán trên hệ thống. | - **Trạng thái gốc:** Chờ duyệt.  - **Hệ thống:** Kích hoạt "Quy trình hủy Phiếu đăng ký chương trình của điểm bán".  - **Trạng thái trung gian:** Đang ở cấp 1, chờ "SS" xử lý.  - **UI App Quản lý:**   **Duyệt vượt cấp = OFF:**User thuộc nhóm quyền "SS" nhìn thấy button "Duyệt" và "Từ chối". Trong đó button Duyệt của quy trình duyệt. Button Từ chối là của quy trình Hủy Phiếu đăng ký chương trình của điểm bán  **Duyệt vượt cấp = ON; tất cả các user của toàn quy trình n**hìn thấy button "Duyệt" và "Từ chối". Trong đó button Duyệt của quy trình duyệt. Button Từ chối là của quy trình Hủy Phiếu đăng ký chương trình của điểm bán |
| **2** | **SS (Cấp 1)** | Nhấn button **"Từ chối"**. | - **Kiểm tra:** Hệ thống xác thực  theo **[Cơ Chế Kiểm Tra & Hiển Thị](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533897#id-[APPQL][QTD]Duy%E1%BB%87t%C4%91i%E1%BB%83mb%C3%A1n-C%C6%A1ch%E1%BA%BFki%E1%BB%83mtrav%C3%A0hi%E1%BB%83nth%E1%BB%8B)**của SS.  Từ chối duyệt  hợp lệ → Hiển thị popup: Từ chối duyệt Phiếu đăng ký chương trình của điểm bán     * Trong đó: Label: Từ chối duyệt Phiếu đăng ký chương trình của điểm bán   + "Chọn "Từ chối duyệt" để @Hành động khi Duyệt": Trong đó @Hành động khi Duyệt hiển thị hành động khi duyệt của quy trình theo cấp đang xử lý   + "Chọn "Trả lại yêu cầu" để @Hành động khi Từ chối: Trong đó @Hành động khi Từ chối hiển thị hành động khi từ chối của quy trình theo cấp đang xử lý     **Chọn "Từ chối duyệt"**  hiển thị popup "Lý do từ chối duyệt"  **Chọn "Trả lại yêu cầu"** hiển thị popup"Lý do trả lại yêu cầu"  -  bắt buộc phải chọn lý do và Nhấn "Xác nhận"     * Danh sách lý do lấy từ [Danh sách dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) loại = Lý do từ chối duyệt CTTB và thêm Lý do Khác, trường hợp user chọn Lý do khác phải nhập thông tin Lý do (free text, 100). Không nhập lý do hoặc không chọn option nào => disable button "Xác nhận" * Nhấn xác nhận  **Trường hợp A: Chọn "Từ chối duyệt"**  **Người duyệt thuộc cấp CHƯA PHẢI cấp cuối cùng (ví dụ: SS Từ chối duyệt)**   * + **Hệ thống:**      1. **KHÔNG** gọi đến hàm xử lý gốc.     2. Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán **không thay đổi**.   + **Kết quả:**      - Trạng thái trung gian được cập nhật để chuyển yêu cầu đến cấp duyệt tiếp theo.        * trạng thái mới là **"**Đang ở cấp 2, chờ "ASM" xử lý.   + **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động (Phê duyệt), Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.      - Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý   + **Giao diện:**      - **Nếu Duyệt vượt cấp = OFF:** button xử lý của người dùng vừa **"Từ chối duyệt"**sẽ ẩn đi. **button Từ chối** sẽ xuất hiện cho người dùng ở cấp tiếp theo     - **Nếu Duyệt vượt cấp = ON:** button xử lý của người dùng vừa **"Từ chối duyệt"**và các cấp thấp hơn sẽ ẩn đi. **button Từ chối**của các cấp cao hơn vẫn hiển thị. (Ví dụ: Nếu **SS;** - Cấp 1 duyệt, button của cả **SS** sẽ ẩn đi, Còn cấp 2 và Cấp 3 là **RSM; ASM** vẫn thấy).   ---  **Trường hợp B:**Chọn**"Trả lại yêu cầu"**  **Cấp duyệt cấu hình "Hành động khi Từ chối = *Không thay đổi***   * **Mapping:** Đây là một hành động nội bộ của quy trình duyệt và không thay đổi trạng thái gốc; cũng không chuyển cấp xử lý. * **Hệ thống:**    1. **KHÔNG** gọi đến hàm xử lý gốc.   2. **KHÔNG** kiểm tra Quyền Lớp 2.   3. **KHÔNG** đẩy yêu cầu đến cấp nào trong quy trình * **Kết quả:**    + Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán **không thay đổi** (vẫn là "Chờ duyệt").   + Trạng thái trung gian được cập nhật để phản ánh việc bị trả về của cấp 1: **"Đang ở cấp 1, chờ "SS" xử lý"**. * **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động (Từ chối), Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.  * **Giao diện:**    + **Nếu Duyệt vượt cấp = OFF:** Theo logic thì button xử lý của người vừa **"Trả lại yêu cầu"** sẽ ẩn đi. button xử lý sẽ xuất hiện lại cho người dùng ở cấp trước đó. Tại cấp 1 này vẫn hiển thị button ở Cấp 1, và không thay đổi khi chọn "Trả lại yêu cầu" ở cấp 1. Theo ví dụ: cấp 1 Trả lại yêu cầu thì **button Từ chối** hiển thị lại cho cấp 1   + **Nếu Duyệt vượt cấp = ON:**      - Thay vì chỉ người dùng ở cấp hiện tại mới thấy button, giờ đây **TẤT CẢ người dùng thuộc TẤT CẢ các****Nhóm quyền****trong quy trình****thuộc cấp đang chờ xử lý** đều nhìn thấy (CẤP N-1 đến cấp cuối cùng).  Nếu theo ví dụ: cấp 1 "Trả lại yêu cầu" →  **button Từ chối**hiển thị lại cho Cấp 1, Cấp 2 và Cấp 3 |
| **3** | **ASM (Cấp 2)** | Nhấn button **"Từ chối"**. | - **Kiểm tra:** Hệ thống xác thực  theo **[Cơ Chế Kiểm Tra & Hiển Thị](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533897#id-[APPQL][QTD]Duy%E1%BB%87t%C4%91i%E1%BB%83mb%C3%A1n-C%C6%A1ch%E1%BA%BFki%E1%BB%83mtrav%C3%A0hi%E1%BB%83nth%E1%BB%8B)**của ASM.  Hiển thị popup: Từ chối duyệt phiếu đăng ký  **Trường hợp A: Chọn "Từ chối duyệt"**  **Người duyệt thuộc cấp CHƯA PHẢI cấp cuối cùng (ví dụ: ASM Từ chối duyệt)**   * + **Hệ thống:**      1. **KHÔNG** gọi đến hàm xử lý gốc.     2. Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán **không thay đổi**.   + **Kết quả:**      - Trạng thái trung gian được cập nhật để chuyển yêu cầu đến cấp duyệt tiếp theo.        * Trạng thái mới là **"**Đang ở cấp 3, chờ "RSM" xử lý.   + **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động, Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.      - Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý   + **Giao diện:**      - **Nếu Duyệt vượt cấp = OFF:** button xử lý của người vừa **"Từ chối duyệt"**sẽ ẩn đi. **button Từ chối**sẽ xuất hiện cho người dùng ở cấp tiếp theo     - **Nếu Duyệt vượt cấp = ON:** button xử lý của người vừa **"Từ chối duyệt"** và các cấp thấp hơn sẽ ẩn đi. **button Từ chối**của các cấp cao hơn vẫn hiển thị. (Ví dụ: Nếu ASM Từ chối duyệt (Cấp 2), button của cả SS, ASM sẽ ẩn đi, chỉ hiển thị cho Cấp 3 là **RSM**thấy).   ---  **Trường hợp B:**Chọn**"Trả lại yêu cầu"** .  **Cấp duyệt cấu hình "Hành động khi Từ chối = *Trở về cấp duyệt trước*" (Logic: Trả về cấp trước)**   * + **Mapping:** Đây là một hành động nội bộ của quy trình duyệt, mang tính chất "yêu cầu xem xét lại".   + **Hệ thống:**      1. **KHÔNG** gọi đến hàm xử lý gốc.     2. **KHÔNG** kiểm tra Quyền Lớp 2.     3. Cập nhật trạng thái của quy trình để đẩy yêu cầu về cấp ngay trước đó.   + **Kết quả:**      - Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán **không thay đổi** (vẫn là "Chờ duyệt").     - Trạng thái trung gian được cập nhật để phản ánh việc bị trả về.        * **"Đang ở cấp 1, chờ "SS" xử lý"**.   + **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động, Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.      - Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý  * + - * **Giao diện:**          + **Nếu Duyệt vượt cấp = OFF:** button xử lý của người vừa **"Trả lại yêu cầu"** sẽ ẩn đi. button xử lý sẽ xuất hiện lại cho người dùng ở cấp trước đó, nếu theo ví dụ: cấp 2 "Trả lại yêu cầu" →  **button Từ chối** hiển thị lại cho cấp 1         + **Nếu Duyệt vượt cấp = ON:**            - **Tất cả người dùng thuộc các nhóm quyền có thể xử lý ở các cấp duyệt thuộc hàng đợi xử lý (ở các cấp nhỏ hơn cấp đã xử lý) đều hết quyền xử lý**           - Thay vì chỉ người dùng ở cấp hiện tại mới thấy button, giờ đây **TẤT CẢ người dùng thuộc TẤT CẢ các****Nhóm quyền****trong quy trình****thuộc cấp đang chờ xử lý** đều nhìn thấy (CẤP N-1 đến cấp cuối cùng).  Nếu theo ví dụ: cấp 2 "Trả lại yêu cầu" →  **button Từ chối** hiển thị lại cho Cấp 1, Cấp 2 và Cấp 3 |
| **4** | **RSM (Cấp 3 - Cuối)** | Nhấn button **"Từ chối"**. | - **Kiểm tra:** Hệ thống xác thực theo **[Cơ Chế Kiểm Tra & Hiển Thị](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75533897#id-[APPQL][QTD]Duy%E1%BB%87t%C4%91i%E1%BB%83mb%C3%A1n-C%C6%A1ch%E1%BA%BFki%E1%BB%83mtrav%C3%A0hi%E1%BB%83nth%E1%BB%8B)**của RSM  Hiển thị popup: Từ chối duyệt phiếu đăng ký  **Trường hợp A: Chọn "Từ chối duyệt"**  **Người duyệt thuộc cấp LÀ cấp cuối cùng (ví dụ: RSM Từ chối duyệt)**   * **Mapping:** Hành động này tương đương với việc thực thi **Hành động Gốc "Từ chối/ hủy Phiếu đăng ký chương trình của điểm bán"**. * **Hệ thống:**    1. **Vì RSM**có Quyền Lớp 2 (Quyền Gốc) của người dùng được phép "Phê duyệt Phiếu đăng ký chương trình của điểm bán" trên app QL   2. Hệ thống gọi đến hàm xử lý gốc của màn hình để hủy Phiếu đăng ký chương trình của điểm bán. * **Kết quả:**    + Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán chuyển thành **"Từ chối duyệt"**.   + Quy trình hủy kết thúc thành công. * **Ghi Lịch sử:**    + **Nếu Duyệt vượt cấp = OFF:** Ghi nhận hành động "Từ chối" của cấp cuối cùng   + **Nếu Duyệt vượt cấp = ON:** ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý * **Giao diện:** button xử lý (Phê duyệt/Từ chối) trên bản ghi này sẽ **ẩn đi đối với TẤT CẢ** người dùng vì quy trình đã kết thúc.  ---  **Trường hợp B: Chọn**"Trả lại yêu cầu"****  **Cấp duyệt cấu hình "Hành động khi Từ chối = *Trở về cấp duyệt trước*" (Logic: Trả về cấp trước)**   * **Mapping:** Đây là một hành động nội bộ của quy trình duyệt, mang tính chất "yêu cầu xem xét lại". * **Hệ thống:**    1. **KHÔNG** gọi đến hàm xử lý gốc.   2. **KHÔNG** kiểm tra Quyền Lớp 2.   3. Cập nhật trạng thái của quy trình để đẩy yêu cầu về cấp ngay trước đó. * **Kết quả:**    + Trạng thái gốc của Phiếu đăng ký chương trình của điểm bán **không thay đổi** (vẫn là "Chờ duyệt").   + Trạng thái trung gian được cập nhật để phản ánh việc bị trả về.      - Nếu RSM (Cấp 3) từ chối, trạng thái mới là: **"Đang ở cấp 2, chờ "ASM" xử lý"**. * **Ghi Lịch sử:** Toàn bộ thông tin (Quy trình, Cấp duyệt, Hành động, Lý do, Người cập nhật, Ngày cập nhật) được ghi vào bảng lịch sử.    + Duyệt vượt cấp = ON: ghi nhận nhiều bản ghi lịch sử cho các cấp <= cấp đã xử lý thuộc hàng đợi xử lý  * + **Giao diện:**      - **Nếu Duyệt vượt cấp = OFF:** button xử lý của người vừa **"Trả lại yêu cầu"** (ví dụ: RSM) sẽ ẩn đi. button xử lý sẽ xuất hiện lại cho người dùng ở cấp trước đó, nếu theo ví dụ: cấp 3 "Trả lại yêu cầu" →  **button Từ chối** hiển thị lại cho cấp 2     - **Nếu Duyệt vượt cấp = ON:**        * Thay vì chỉ người dùng ở cấp hiện tại mới thấy button, giờ đây **TẤT CẢ người dùng thuộc TẤT CẢ các****Nhóm quyền****trong quy trình****thuộc cấp đang chờ xử lý** đều nhìn thấy (CẤP N-1 đến cấp cuối cùng).  Nếu theo ví dụ: cấp 3 "Trả lại yêu cầu" → **button Từ chối** hiển thị lại cho cấp 2 và Cấp 3 |
| Bất kỳ một người dùng nào KHÔNG THUỘC QUY TRÌNH chọn button "Duyệt" hoặc "Từ chối" tức là gọi hàm xử lý gốc của màn hình → Xử lý Phiếu đăng ký chương trình của điểm bán như luồng cũ không thay đổi:  (link: [Manager\_App] Xét duyệt đăng ký CTTB)  Trường hợp một người dùng thuộc cấp xử lý của quy trình duyệt chọn nhiều bản ghi và chọn "Từ chối" (Xem mô tả) => Sau  khi chọn lý do trên popup "Lý do từ chối duyệt" tất cả các Phiếu đăng ký chương trình của điểm bán đã chọn sẽ được ghi cùng 1 lý do. | | | |

## **Các vấn đề lưu ý:**

### Lưu ý chung

* Chức năng "duyệt Phiếu đăng ký chương trình của điểm bán trên app quản lý" đang ở trong một **quy trình duyệt "đang hoạt động"** sẽ hiển thị **button "Duyệt" theo logic xử lý**của quy trình; Ngược lại hiển thị button gốc của màn hình. logic xử lý gốc không thay đổi [Manager\_App] Xét duyệt đăng ký CTTB
* Nếu ở trong một **quy trình Hủy Phiếu đăng ký chương trình của điểm bán đang hoạt động** thì sẽ hiển thị **button "Từ chối" theo logic xử lý**của quy trình. Ngược lại hiển thị button gốc của màn hình. logic xử lý gốc không thay đổi (link: [Manager\_App] Xét duyệt đăng ký CTTB)
* Người dùng hiện tại thuộc cấp duyệt chờ xử lý của các quy trình đang áp dụng cho bản ghi (Phiếu đăng ký chương trình của điểm bán có trạng thái Chờ duyệt) có thể nhìn thấy bộ button "Duyệt/ Từ chối" của quy trình tương ứng trên giao diện.
* Khi một Phiếu đăng ký chương trình của điểm bán chỉ có quy trình duyệt cho button "Duyệt" mới và button "Từ chối" là button gốc của màn hình. 
  + Người dùng có quyền xử lý bản ghi sẽ thấy cả 2 button.
    - Chọn Duyệt - logic của quy trình duyệt.
    - Chọn "Từ chối" logic gốc → thay đổi trạng thái gốc của bản ghi, tất cả các quy trình đang áp dụng cho bản ghi dừng lại.
    - **Trạng thái trung gian không thay đổi nếu không phải do người dùng trong quy trình xử lý.**
  + **Người dùng thuộc quy trình DUYỆT và không có quyền xử lý bản ghi → UI chỉ hiển thị button "Từ chối", ẩn button "Duyệt"  theo logic xử lý của quy trình duyệt.**
* Người dùng **KHÔNG thuộc quy trình duyệt Và**có quyền đăng nhập vào app QL, có thể phê duyệt Phiếu đăng ký chương trình của điểm bán hoặc từ chối Phiếu đăng ký chương trình của điểm bán theo logic xử lý gốc
  + Khi đó tại thời điểm thay đổi trạng thái gốc của bản ghi → Tất cả các quy trình đang áp dụng cho bản ghi dừng lại. Trạng thái trung gian không thay đổi nếu không phải do người dùng trong quy trình xử lý.
* **Khi hay đổi trạng thái gốc của bản ghi, tất cả các quy trình đang áp dụng cho bản ghi dừng lại.**
* Khi người dùng chọn Duyệt tất cả hoặc từ chối tất cả: Nếu kết quả xử lý thay đổi trạng thái gốc bị lỗi do Phiếu đăng ký chương trình của điểm bán không còn thuộc tuyến bán hàng hoặc các lỗi khác thì hiển thị popup và inline lỗi theo logic gốc (Không thay đổi luồng báo lỗi cũ của chức năng duyệt Phiếu đăng ký chương trình của điểm bán)
* Trường hợp tại bước thay đổi trạng thái gốc có lý do → Lưu lý do Từ chối duyệt = Lý do Từ chối duyệt/ Trả lại yêu cầu đã chọn.

Duyệt nhiều

### **NGƯỜI DÙNG CHỌN DUYỆT/ TỪ CHỐI NHIỀU BẢN GHI**

* Luôn hiển thị button "Từ chối" / "Duyệt tất cả" nhưng logic xử lý thì tùy từng trường hợp mô tả bên dưới;
* Những điểm bán không hiển thị button "Duyệt"/ "Từ chối" bỏ qua khi xử lý Duyệt tất cả hoặc Từ chối tương ứng.
* Giả định mỗi case dưới đây có thể xảy ra:

**Case A: List Phiếu đăng ký chương trình của điểm bán đang trong "Quy trình Phê duyệt"**

* + **Hiển thị:** Button Duyệt (của quy trình) và Button Từ chối gốc. **Ẩn Button "Duyệt" gốc.**
  + Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 Phiếu đăng ký chương trình của điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Duyệt"hay không? Luôn hiển thị button "Từ chối" gốc vì không áp dụng quy trình từ chối nào
  + Logic Từ chối của quy trình sẽ quyết định kết quả (kết thúc hoặc đẩy lùi).

**Case B: List Phiếu đăng ký chương trình của điểm bán đang trong "Quy trình Hủy"**

* + **Hiển thị:** Button **"Duyệt" hiển thị nút duyệt gốc.**Button Từ chối (của quy trình). **Ẩn Button "Từ chối" gốc.**
  + Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 Phiếu đăng ký chương trình của điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Từ chối" hay không? Luôn hiển thị button "Duyệt" gốc vì không áp dụng quy trình Duyệt nào.

**Case C: List Phiếu đăng ký chương trình của điểm bán đang trong cả hai quy trình "Phê duyệt" và "Hủy"**

* + **Hiển thị:** Button Duyệt (của quy trình Phê duyệt) và Button Từ chối (của quy trình Hủy). **Ẩn tất cả các nút gốc.**
  + Người dùng hiện tại có quyền xử lý bước hiện tại của quy trình theo 1 Phiếu đăng ký chương trình của điểm bán hay không? → Quyết định việc người dùng có nhìn thấy button "Duyệt"/"Từ chối" hay không?

**Case D: List Phiếu đăng ký chương trình của điểm bán KHÔNG trong quy trình nào**

* + **Hiển thị:** luôn hiển thị các button xử lý gốc của màn hình.
  + link: [Manager\_App] Xét duyệt đăng ký CTTB

---

Bối cảnh 1

**Bối cảnh 1: Xử lý 10 Phiếu đăng ký chương trình của điểm bán thuộc Case A**

Chi tiết

**Đặc điểm của Case A:**

* Tất cả 10 Phiếu đăng ký chương trình của điểm bán đều đang trong **"Quy trình Phê duyệt"**.
* Trên UI, nút Duyệt; Duyệt tất cả là của quy trình, nút Từ chối là nút gốc.
* Các Phiếu đăng ký chương trình của điểm bán có thể đang ở các cấp duyệt khác nhau (một số chờ ASM, một số chờ RSM).

**Khi Người dùng (ví dụ: RSM) nhấn "Duyệt tất cả"**

Hiển thị popup: 

* Chọn "Xác nhận duyệt" để duyệt tất cả Phiếu đăng ký chương trình của điểm bán đã chọn

* Chọn "Trả lại/Kết thúc" để Trả lại yêu cầu duyệt→ khi đó hiển thị popup: 
  + Bắt buộc phải chọn lý do
  + Danh sách lý do lấy từ [Danh sách dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) loại = Lý do từ chối duyệt CTTB + thêm Lý do **Khác**, trường hợp user chọn Lý do khác phải nhập thông tin Lý do (free text, 100). Nếu không nhập lý do hoặc không chọn bất kỳ option nào thì Disable button
  + Nhấn xác nhận

1. **FE (Mobile App):** 

   1. Gửi yêu cầu action: "**Duyệt tất cả**" với 10 ID.
   2. **Phân nhóm ngầm:** App sẽ tự động phân loại các Phiếu đăng ký chương trình của điểm bán đã chọn thành các nhóm dựa trên **hành động tiếp theo** của chúng trong quy trình.

      1. Khi chọn "Xác nhận duyệt":
         * Nhóm 1: Các Phiếu đăng ký chương trình của điểm bán sẽ được **phê duyệt hoàn tất**.
         * Nhóm 2: Các Phiếu đăng ký chương trình của điểm bán sẽ được **chuyển lên cấp tiếp theo**.
      2. Khi chọn  "Trả lại/Kết thúc" và lý do
         * Nhóm 3: Các Phiếu đăng ký chương trình của điểm bán bị từ chối sẽ **kết thúc quy trình**.
         * Nhóm 4: Các Phiếu đăng ký chương trình của điểm bán bị từ chối sẽ **đẩy lùi về cấp trước**
         * Nhóm 5: Các Phiếu đăng ký chương trình của điểm bán bị từ chối sẽ**KHÔNG THAY ĐỔI do ở cấp 1**
2. **BE (Backend) xử lý từng Phiếu đăng ký chương trình của điểm bán:**

   * **Action Mapping:** Với tất cả 10 Phiếu đăng ký chương trình của điểm bán, hành động chọn "Xác nhận duyệt" hoặc "Trả lại/Kết thúc" được ánh xạ thành **"Duyệt theo Quy trình Phê duyệt"**.
   * **Vòng lặp xử lý: theo****Quy trình phê duyệt**

     + **Nếu thành công,** ghi nhận **thành công**.
     + **Nếu thất bại: Ghi nhận lỗi và bỏ qua**để xử lý Phiếu đăng ký chương trình của điểm bán tiếp theo cho đến hết danh sách.
3. **FE (Mobile App) hiển thị kết quả:**

   * Popup báo cáo tổng hợp (ưu tiên cao nhất trong list các popup báo lỗi hoặc gọp tất cả trên một popup lỗi): 

     + *Phiếu đăng ký chương trình của điểm bán đã được xử lý bởi người dùng khác dẫn đến:*

       - *Thay đổi trạng thái gốc: "Phiếu đăng ký chương trình của điểm bán @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n đã được cập nhật bởi một người dùng khác"*
       - *Không thuộc quyền của quy trình: "Bạn không có quyền xử lý các Phiếu đăng ký chương trình của điểm bán: @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n"*
     + **Popup hiển thị gồm:**
       - "Phiếu đăng ký chương trình của điểm bán @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n đã được cập nhật bởi một người dùng khác"
       - "Bạn không có quyền xử lý các Phiếu đăng ký chương trình của điểm bán: @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n"
       - Nếu kết quả duyệt tại các Phiếu đăng ký chương trình của điểm bán thay đổi trạng thái gốc bị lỗi do Phiếu đăng ký chương trình của điểm bán không còn thuộc tuyến bán hàng hoặc các lỗi khác thì hiển thị popup và inline lỗi theo link:[Manager\_App] Xét duyệt đăng ký CTTB (Không thay đổi luồng báo lỗi cũ của chức năng duyệt Phiếu đăng ký chương trình của điểm bán)

**Khi Người dùng (ví dụ: RSM) nhấn "Từ chối":**

1. **FE (Mobile App):** Gửi yêu cầu action: "Từ chối tất cả" với 10 ID và lý do.
2. **BE (Backend) xử lý từng Phiếu đăng ký chương trình của điểm bán:**

   * **Action Mapping:** Với tất cả 10 Phiếu đăng ký chương trình của điểm bán, hành động "Từ chối tất cả" được ánh xạ thành **"Từ chối theo Logic Gốc"**.
   * **Vòng lặp xử lý: theo link: [Manager\_App] Xét duyệt đăng ký CTTB**
3. **FE (Mobile App) hiển thị kết quả theo logic gốc**

---

Bối cảnh 2

**Bối cảnh 2: Xử lý 10 Phiếu đăng ký chương trình của điểm bán thuộc Case B**

Chi tiết

**Đặc điểm của Case B:**

* Tất cả 10 Phiếu đăng ký chương trình của điểm bán đều đang trong **"Quy trình Hủy"**.
* Trên UI, nút Duyệt; Duyệt tất cả là nút gốc, nút Từ chối là của quy trình.

**Khi Người dùng (ví dụ: RSM) nhấn "Duyệt tất cả":**

1. **FE (Mobile App):** Gửi yêu cầu action: "Duyệt tất cả" với 10 ID.
2. **BE (Backend) xử lý từng Phiếu đăng ký chương trình của điểm bán:**

   * Với tất cả 10 Phiếu đăng ký chương trình của điểm bán, hành động được ánh xạ thành **"Duyệt theo Logic Gốc"**.

**Khi Người dùng (ví dụ: RSM) nhấn "Từ chối":**

Hiển thị popup: 

* Chọn "Từ chối duyệt" để duyệt tất cả Phiếu đăng ký chương trình của điểm bán đã chọn → khi đó hiển thị popup "Lý do từ chối duyệt"

* Chọn "Trả lại yêu cầu" để Trả lại yêu cầu duyệt; Hiển thị popup"Lý do trả lại yêu cầu"

 

* + Bắt buộc phải chọn lý do
  + Danh sách lý do lấy từ [Danh sách dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) loại = Lý do từ chối duyệt CTTB + thêm Lý do **Khác**, trường hợp user chọn Lý do khác phải nhập thông tin Lý do (free text, 100). Nếu không nhập lý do hoặc không chọn bất kỳ option nào thì Disable button
  + Nhấn xác nhận

**1/ FE (Mobile App):** 

1. 1. Gửi yêu cầu action: "**Từ chối tất cả**" với 10 ID và lý do.
   2. **Phân nhóm ngầm:** App sẽ tự động phân loại các Phiếu đăng ký chương trình của điểm bán đã chọn thành các nhóm dựa trên **hành động tiếp theo** của chúng trong quy trình.

      1. Khi chọn "Từ chối duyệt":
         * Nhóm 1: Các Phiếu đăng ký chương trình của điểm bán sẽ được **phê duyệt hoàn tất**.
         * Nhóm 2: Các Phiếu đăng ký chương trình của điểm bán sẽ được **chuyển lên cấp tiếp theo**.
      2. Khi chọn "Trả lại yêu cầu" và lý do
         * Nhóm 3: Các Phiếu đăng ký chương trình của điểm bán bị từ chối sẽ **đẩy lùi về cấp trước**.
         * Nhóm 4: Các Phiếu đăng ký chương trình của điểm bán bị từ chối sẽ**KHÔNG THAY ĐỔI do ở cấp 1**

**2/BE (Backend) xử lý từng Phiếu đăng ký chương trình của điểm bán:**

* + **Action Mapping:** Với tất cả 10 Phiếu đăng ký chương trình của điểm bán, hành động Từ chối được ánh xạ thành **"Từ chối theo Quy trình Hủy"**.
  + **Vòng lặp xử lý:** Logic theo**Quy trình Hủy"**.

* + - **Nếu thành công,** ghi nhận **thành công**.
    - **Nếu thất bại: Ghi nhận lỗi và bỏ qua**
    - Xử lý Phiếu đăng ký chương trình của điểm bán tiếp theo cho đến hết danh sách.

**3/ FE (Mobile App) hiển thị kết quả:**

* + Popup báo cáo tổng hợp (ưu tiên cao nhất trong list các popup báo lỗi hoặc gọp tất cả trên một popup lỗi): 

    - *Phiếu đăng ký chương trình của điểm bán đã được xử lý bởi người dùng khác dẫn đến:*

      * *Thay đổi trạng thái gốc: "Phiếu đăng ký của điểm bán @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n đã được cập nhật bởi một người dùng khác"*
      * *Không thuộc quyền của quy trình: "Bạn không có quyền xử lý các Phiếu đăng ký của điểm bán: @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n"*
    - **Popup hiển thị gồm:**
      * "Phiếu đăng ký chương trình của điểm bán @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n đã được cập nhật bởi một người dùng khác"
      * "Bạn không có quyền xử lý các Phiếu đăng ký chương trình của điểm bán: @Mã ĐB - Tên ĐB 1, @Mã ĐB - Tên ĐB n"
      * Lỗi khác theo logic xử lý tại link: [Manager\_App] Xét duyệt đăng ký CTTB
  + Nếu kết quả xử lý tại các Phiếu đăng ký chương trình của điểm bán thay đổi trạng thái gốc bị lỗi do Phiếu đăng ký chương trình của điểm bán không còn thuộc tuyến bán hàng hoặc các lỗi khác thì hiển thị popup và inline lỗi theo link: [Manager\_App] Xét duyệt đăng ký CTTB (Không thay đổi luồng báo lỗi cũ của chức năng duyệt Phiếu đăng ký chương trình của điểm bán)

---

**Bối cảnh 3: Xử lý 10 Phiếu đăng ký chương trình của điểm bán thuộc Case C**

**Đặc điểm của Case C:**

* Tất cả 10 Phiếu đăng ký chương trình của điểm bán đều đang trong **cả hai "Quy trình Phê duyệt" và "Quy trình Hủy"**.
* Trên UI, cả nút Duyệt; Duyệt tất cả và Từ chối đều là của quy trình tương ứng. **Không có nút gốc nào được hiển thị.**

**Khi Người dùng (ví dụ: RSM) nhấn "Duyệt tất cả":**Theo Bối cảnh 1

**Khi Người dùng (ví dụ: RSM) nhấn "Từ chối tất cả":** Theo Bối cảnh 2

Khi hay đổi trạng thái gốc của bản ghi ở một cấp xử lý của bất kỳ quy trình nào thì tất cả các quy trình đang áp dụng cho bản ghi dừng lại.