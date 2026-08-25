|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | * Enhance tính năng "Chọn Ngành hàng". Chức năng này cho phép người dùng chọn ngành hàng để thêm mới/chỉnh sửa/filter dữ liệu. |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# MÔ TẢ THAY ĐỔI

Hiện tại: Đối với các selectbox chọn ngành hàng trường hợp chọn nhiều thì user không thể tick thủ công ngành hàng để xem dữ liệu

Cần điều chỉnh: Thay đổi selectbox chọn ngành hàng thành màn hình chọn

* Hiển thị tất cả các phân cấp của cây phân cấp sản phẩm
* Tên của phân cấp dựa vào cấu hình phân cấp để hiển thị

* Có thể chọn tất cả phân cấp, hoặc chọn từng phân cấp, nhưng bên ngoài sẽ hiển thị quy hết về Ngành hàng: Đã chọn X ngành hàng.

## **Tại các màn hình có selectbox chọn Ngành hàng**

* Selectbox chọn Ngành hàng sẽ thay đổi thành dạng có button Chọn
  + Trường "Ngành hàng" sẽ có chữ gợi ý (placeholder) là "Chọn ngành hàng".

    - Vãn giữ rule chọn 1/chọn nhiều trên các màn hình như hiện tại
  + Nút **"Chọn"** được hiển thị bên cạnh.

* Khi nhấn vào button Chọn sẽ mở ra màn hình Chọn ngành hàng như sau:

### Màn hình "Chọn ngành hàng" khi tạo mới

* Mặc định mở màn hình rỗng
* Tiêu đề: **"Chọn ngành hàng"**.
* Có nút đóng (dấu X) ở góc trên bên phải để hủy thao tác.
* Khi chọn Button "Tìm kiếm" **- chưa chọn bất kì dữ liệu lọc nào =**> Hiểu là search tất cả => hiển thị all danh sách Ngành hàng đang active và các ngành hàng (đang active) của ngành hàng trên lưới
* Khi chọn Button "Tìm kiếm" **- Đã nhập các tiêu chí lọc** => Hiểu là search theo tiêu chí bộ lọc => hiển thị danh sách Ngành hàng đang active và các ngành hàng (đang active) của ngành hàng, thỏa tiêu chí bộ lọc trên lưới

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| **Chọn ngành hàng** | | | | |
| Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu phân cấp dựa trên mã và tên.  **Chi tiết hoạt động:**  Cho phép nhập text Tìm kiếm theo mã, tên ngành hàng hoặc mã, tên ngành hàng   * Tooltip: **Tìm kiếm theo mã, tên phân cấp (tất cả phân cấp)** * Placeholder: **Tìm kiếm theo mã, tên phân cấp (tất cả phân cấp)** * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các danh sách phân cấp đang active, có thông tin được nhập trong ô này. |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách phân cấp, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng dữ liệu mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách 2. **Danh sách ngành hàng làm mới:** Sau khi nhấp, danh sách sẽ hiển thị toàn bộ các phân cấp hiện có mà kông áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ hiển thị dữ liệu mới nhất của danh sách. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách phân cấp theo các tiêu chí đã chọn. |
| **Grid Danh sách ngành hàng**  *(Phân trang hiển thị theo level Cha và con)*  **Lưu ý: Vẫn hiển thị các phân cấp đang hoạt động** | | | | |
| Bộ đếm |  |  |  | Sau khi chọn hiển thị số nhãn được chọn và cho phép xóa hàng loạt  Bộ đếm: **"Đã chọn X ngành"**.  Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Đồng ý: Xóa tất cả các mục đã chọn; chọn Hủy: Tắt popup và vẫn giữ nguyên hiện trạng. |
| Checkbox | checkbox | Có | Không | * **Header Checkbox:** Checkbox trên header của bảng Ngành hàng cho phép chọn tất cả các ngành hàng đang xem, chỉ có tác dụng chọn/bỏ chọn **các mục đang hiển thị trên trang hiện tại**.    + Mục đích: Check box cho phép chọn tất cả các ngành hàng đang active đang xem   + Hiển thị icon dạng **trạng thái trung gian (indeterminate)** khi có chọn từ 1 cấp con và không phải là chọn tất cả.   Lưới danh sách hiển thị dạng nhiều level   * level 1: phân cấp 1 của cây sản phẩm. * level 2: phân cấp 2 của cây sản phẩm. * ... * level n: phân cấp n của cây sản phẩm.  * **Chọn level 1→ auto chọn tất cả level con**: Khi check vào level 1, hệ thống hiểu là **chọn tất cả cấp con thuộc level 1 đó, trên trang đang xem**. Checkbox của các cấp con đang hiển thị sẽ được check theo. * **Bỏ chọn Cha -> Bỏ chọn Con:** Tương tự, khi bỏ check level cha, tất cả level con (trên trang) sẽ bị bỏ chọn. * **Chọn Con -> Ảnh hưởng Cha:**    + Khi check một ngành hàng con, checkbox Ngành hàng cha sẽ chuyển sang **trạng thái trung gian (indeterminate)**.   + Khi tất cả ngành hàng con (trên tất cả các trang) được check, checkbox Ngành hàng cha sẽ tự động chuyển sang **trạng thái đã check**.  -------  ***lưu ý:*** Mở Popup lần sau, khi chọn bộ lọc có ngành hàng đã chọn trước, màn hình vẫn hiển thị checked đối với các ngành hàng đã chọn |
| Level Cha:   Hiển thị:   * Mặc định mở màn hình rỗng   + chọn button "tìm kiếm"=> Tất cả các ngành hàng đều ở trạng thái thu gọn (Collapse all) * Sau khi nhập text và chọn button "tìm kiếm" Danh sách các ngành hàng thỏa điều kiện đang active hiển thị trên lưới danh sách và   + Tất cả các dòng Ngành hàng thỏa điều kiện đều ở trạng thái mở rộng (Expand). Các ngành hàng còn lại collapse   + Hiển thị dấu +/- ở đầu hàng của tất cả các ngành hàng tương ứng | | | | |
| Icon Mở rộng/Thu gọn (+/-) | Icon | Có | Không | Để hiển thị/ẩn danh sách ngành hàng con  Chọn dấu + để expand  Chọn dấu - để collapse |
| Checkbox | Checkbox | Có | Không | Cho phép chọn ngành hàng này  Check/ uncheck |
| Mã ngành hàng | Datacolumn have copy | Không | Không | Hiển thị mã ngành hàng đang active |
| Tên ngành hàng | Datacolumn | Không | Không | Hiển thị tên ngành hàng theo mã ngành hàng |
| Trạng thái | Datacolumn | Không | Không | * Trạng thái hiện tại của Ngành hàng   + Hoạt động   + Không hoạt động |
| Level con  Khi một Ngành hàng được mở rộng, một bảng con sẽ xuất hiện bên dưới với các cột | | | | |
| Checkbox | Checkbox | Có | Không | Chọn ngành hàng này  Check/ uncheck  Sau khi check chọn hiển thị higlight dòng đã chọn |
| Mã ngành hàng | Datacolumn have copy | Không | Không | Mã định danh của ngành hàng theo ngành hàng trong hệ thống |
| Tên ngành hàng | Datacolumn | Không | Không | Tên ngành hàng hiển thị theo mã ngành hàng |
| Trạng thái | Datacolumn | Không | Không | * Trạng thái hiện tại của ngành hàng   + Hoạt động   + Không hoạt động |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Đồng ý** | Button | Có | Không | * Nút "**Đồng ý**" cho phép người dùng thêm danh sách ngành hàng đã chọn vào selectbox ngành hàng và đóng moldal.   Tại thời điểm Đồng ý, nếu một ngành hàng đã chọn bị ngưng hoạt động => hiển thị thông báo: "ngành hàng @tên nhãn 1, tên nhãn 2, tên nhãn n đang không hoạt động. Vui lòng kiểm tra lại!" |

* **Trạng thái sau khi đã chọn ngành hàng: Sau khi người dùng đã chọn một hoặc nhiều ngành hàng từ màn hình phụ và nhấn "Đồng ý", màn hình chính sẽ được cập nhật.**

* Trường hợp ô chọn chỉ chọn 1 ngành hàng: Hiển thị tên ngành hàng đã chọn
* Trường hợp chọn >1 ngành hàng. Trường "ngành hàng" sẽ hiển thị số lượng ngành hàng đã được chọn. Ví dụ: **"Đã chọn XX ngành hàng"**. (xx là tổng số nhãn đã chọn)
  + Bên cạnh thông báo số lượng, có một biểu tượng dấu **"X"** để người dùng có thể xóa nhanh tất cả các ngành hàng đã chọn và quay về trạng thái ban đầu.
  + **Xóa từ màn hình chính (bên ngoài modal):**

    - **Hành động:** Khi người dùng nhấn vào biểu tượng xóa này, hệ thống nên hiển thị một hộp thoại xác nhận: "Bạn có chắc muốn xóa tất cả các ngành hàng đã chọn không?"
    - **Xác nhận:** Nếu người dùng "Đồng ý", trường ngành hàng sẽ quay về trạng thái ban đầu và dữ liệu liên kết sẽ bị xóa. Chọn "Hủy" để hủy bỏ thao tác xóa
  + Nút **"Chọn"** vẫn hiển thị để người dùng có thể chỉnh sửa lại lựa chọn của mình.

    - **Sort lại theo** alphabet a-z các lựa chọn đã chọn lên trên, các ngành hàng khác chưa chọn ở dưới và hiển thị dấu check ở các dòng đã chọn để người dùng xem lại các ngành hàng đã chọn

### **"Chọn ngành hàng" tại màn hình các màn hình chỉnh sửa**

1. **Tải dữ liệu đã chọn:**

   * Khi màn hình "Chọn ngành hàng" được mở ra, hệ thống sẽ mở màn hình Chọn ngành hàng như lúc tạo mới, cho phép điều chỉnh trên các lựa chọn đã xác nhận.

     + **T****ự động tải và hiển thị danh sách các Ngành hàng :**
       - Nếu chưa pick ngành hàng nào => hiển thị màn hình rỗng như tạo mới
       - Nếu đã chọn từ 1 ngành hàng → mặc định hiển thị danh sách và ở trạng thái thu gọn (Collapse all)
     + **List các ngành hàng đã được chọn trước đó sẽ được sort lại theo** alphabet a-z các lựa chọn đã chọn lên trên, các ngành hàng khác ở dưới và hiển thị check ở các dòng đó để người dùng xem lại các ngành hàng đã chọn

* + - * Danh sách các ngành hàng đã chọn hiển thị cả **active và inactive.**

1. * + - Danh sách các ngàn hàng chưa chọn chỉ load các danh sách **active**
   * Các ô chọn (checkbox) tương ứng với các ngành hàng này sẽ được **đánh dấu sẵn**.
   * Bộ đếm sẽ cập nhật chính xác số lượng khi chọn >1 nhãn, ví dụ: **"Đã chọn xx ngành hàng"**. Nếu chỉ chọn 1 ngành hàng thì hiển thị Tên ngành hàng
2. **Cho phép chỉnh sửa:**

   * Người dùng có thể bỏ chọn các ngành hàng hiện có. Nhưng khi nhấn Đồng ý, chỉ được chọn các ngành hàng đang hoạt động, các ngành hàng ngưng hoạt động người dùng phải bỏ chọn.
   * Người dùng có thể sử dụng bộ lọc để tìm kiếm và thêm các ngành hàng mới vào lựa chọn hiện tại.
   * Các lựa chọn mới/cũ sẽ được duy trì khi người dùng tìm kiếm hoặc chuyển trang.

## **"Chọn ngành hàng" tại các màn hình chi tiết**

* + Trường hợp ô chọn chỉ chọn 1 ngành hàng: Hiển thị tên ngành hàng
  + Bộ đếm sẽ cập nhật chính xác số lượng khi chọn >1 nhãn, ví dụ: **"Đã chọn 15 ngàn hành"**. ẩn hyperlink "Xóa". Bên ngoài ẩn dấu  "X".

1. **Trường hợp chỉ xem (View-only):**

* + Nếu người dùng đang ở chế độ xem chi tiết (không phải chỉnh sửa), khi mở màn hình này lên:

    - Tất cả các chức năng chỉnh sửa sẽ bị vô hiệu hóa (các ô chọn (checkbox),  ẩn button"Đồng ý".)

      * Enable cho phép: Nhập ô tìm kiếm, nút "Làm mới", "Tìm kiếm"
      * Khi nhập text và chọn tìm kiếm. Dữ liệu tìm kiếm trên lưới danh sách đang có.
    - Người dùng chỉ có thể xem danh sách các ngành hàng; ngành hàng đã được gán và sử dụng thanh cuộn/phân trang để xem hết danh sách; được expand/ collapse các ngành hàng. Khi mở màn hình "Chọn ngành hàng" → **T****ự động tải và hiển thị danh sách các Ngành hàng:**

      * Nếu chưa pick ngành hàng nào => hiển thị màn hình rỗng như tạo mới
      * Nếu đã chọn từ 1 ngành hàng → Trên lưới danh sách **tự động tải và hiển thị danh sách các Ngành hàng và list các ngành hàng đã được chọn trước đó và hiển thị ở trạng thái mở rộng (expand all)**
    - Các ô chọn (checkbox) tương ứng với các ngành hàng này sẽ được **đánh dấu sẵn và bị disable.** Trường hợp ô chọn chỉ chọn 1 ngành hàng: Hiển thị tên ngành hàng
    - Button Đóng thay thế cho button "Đồng ý"
    - Trạng thái Ngành hàng và ngành hàng hiển thị theo thời điểm mở màn hình

## **Filter Chọn ngành hàng để tìm kiếm trên các màn hình**

* Trạng thái mặc định: Hiển thị placeholder "Chọn ngành hàng"
* Trạng thái đã chọn: Hiển thị "Đã chọn X ngàn hành" và Đi kèm nút "Chọn". Chọn button "**Chọn**"để hiển thị Modal: **Tên ngành hàng. X**em danh sách các ngành hàng của ngành hàng đang active; inactive trên hệ thống, được tìm kiếm và chọn để filter
* **Hành vi Mặc định và Logic Tìm kiếm trên**

  1. **Trạng thái ban đầu:** Khi người dùng mở modal, **màn hình rỗng**
  2. **Tìm kiếm không có tiêu chí:**

     + - Người dùng không nhập gì vào ô tìm kiếm và nhấn nút **"Tìm kiếm"** => hiển thị danh sách Ngành hàng tất cả các phân cấp (từ 1,2,3...n).
       - Chỉ hiển thị các phân cấp đang hoạt động
       - Các dòng Ngành hàng mặc định ở trạng thái thu gọn và không check sẵn
  3. **Tìm kiếm có tiêu chí:** Người dùng nhập từ khóa vào ô tìm kiếm và nhấn nút **"Tìm kiếm"**.

     + Hệ thống sẽ **tải lên lưới danh sách các Ngành hàng** có tên hoặc mã **khớp với từ khóa tìm kiếm**.
     + Các Ngành hàng sẽ tự động được mở rộng.
     + Chỉ tìm kiếm trên các phân cấp đang hoạt động
     + Tìm kiếm trên tất cả phân cấp từ 1->n
  4. Khi chọn ngành hàng/ chọn all → sau đó chọn Đồng ý: 
     1. Nút "**Đồng ý**" cho phép người dùng thêm danh sách ngành hàng đã chọn vào selectbox ngành hàng và đóng moldal.
  5. Sau khi chọn nút "Đồng ý" người dùng vẫn muốn xem lại data vừa chọn
     1. Khi đã pick dữ liệu nhãn, chọn Nút "Chọn" Sort lại theo alphabet a-z các lựa chọn đã chọn lên trên, các ngành hàng khác chưa chọn ở dưới và hiển thị dấu check ở các dòng đã chọn để người dùng xem lại các ngành hàng đã chọn trên màn hình