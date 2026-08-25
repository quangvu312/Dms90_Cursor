|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-6908Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-6909 Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-6910Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-6911 |
| Epic |  |
| Feature |  |
| Description | * Enhance tính năng "Chọn Nhãn hàng". Chức năng này cho phép người dùng **gán (assign)** một hoặc nhiều Nhãn hàng vào một Tuyến Bán hàng thông qua một giao diện dạng bảng phân cấp (hierarchical table). * Được sử dụng trong luồng nghiệp vụ "Thêm mới Tuyến bán hàng" và "Chỉnh sửa/Xem chi tiết Tuyến bán hàng". * Chức năng này cho phép người dùng **tìm kiếm** một hoặc nhiều Nhãn hàng; Ngành hàng vào bộ lọc Ngành hàng trên báo cáo bán hàng liên quan |
| Document version | RedV1.0.0  RedV1.0.1   * Trường hợp ô chọn chỉ chọn 1 nhãn hàng: Hiển thị tên nhãn hàng * Trường hợp chỉnh sửa nhãn => hiển thị danh sách các nhãn đã chọn cả active và inactive. các nhãn chưa chọn chỉ load các danh sách active   RedV1.2.0  Cập nhật rule load Ngành hàng; Nhãn hàng   * Tạo mới chỉ hiển thị các nhãn hàng active; ngành hàng active và có từ 1 nhãn hàng active * Chỉnh sửa   + Danh sách các nhãn đã chọn hiển thị cả **active và inactive.**   + Danh sách các nhãn chưa chọn chỉ load các danh sách **active**   + **Nhưng khi chọn "Đồng ý" Validate và chỉ cho lưu khi Ngành và Nhãn đều active** * **Xem chi tiết/ Filter: Danh sách các nhãn đã chọn hiển thị cả active và inactive tại thời điểm xem.**   (Chưa có US enhance) |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# MÔ TẢ THAY ĐỔI

Hiện tại: Đối với các selectbox chọn Nhãn hàng trường hợp chọn nhiều thì user không thể tick thủ công Nhãn hàng để xem dữ liệu

Cần điều chỉnh: Thay đổi selectbox chọn Nhãn hàng/ Ngành hàng thành dạng như sau:

## **Tại Màn hình "Thêm mới/Chỉnh sửa (Tuyến bán hàng)" Thêm mới/Cập nhật**

* Selectbox chọn Nhãn hàng sẽ thay đổi thành dạng có button Chọn
  + Trường "Nhãn hàng" sẽ có chữ gợi ý (placeholder) là "Chọn nhãn hàng".

    - Vãn giữ rule như hiện tại - Không chọn tức là chọn tất cả các nhãn đang active trên hệ thống tại thời điểm Tạo tuyến
    - Thêm mới nhãn từ Masterdata → tuyến bán hàng sẽ tự động apply nhãn mới với status đang hoạt động này.
  + Nút **"Chọn"** được hiển thị bên cạnh.

* Khi nhấn vào button Chọn sẽ mở ra màn hình Chọn Nhãn hàng như sau:

### Màn hình "Chọn nhãn hàng" khi tạo mới

* Mặc định mở màn hình rỗng
* Tiêu đề: **"Chọn nhãn hàng"**.
* Có nút đóng (dấu X) ở góc trên bên phải để hủy thao tác.
* Khi chọn Button "Tìm kiếm" **- chưa chọn bất kì dữ liệu lọc nào =**> Hiểu là search tất cả => hiển thị all danh sách Ngành hàng đang active và các Nhãn hàng (đang active) của ngành hàng trên lưới
* Khi chọn Button "Tìm kiếm" **- Đã nhập các tiêu chí lọc** => Hiểu là search theo tiêu chí bộ lọc => hiển thị danh sách Ngành hàng đang active và các Nhãn hàng (đang active) của ngành hàng, thỏa tiêu chí bộ lọc trên lưới

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| **Chọn nhãn hàng** | | | | |
| Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu Nhãn hàng dựa trên danh sách Nhãn hàng. Tìm kiếm theo mã, tên nhãn hàng hoặc mã, tên ngành hàng  **Chi tiết hoạt động:**  Cho phép nhập text Tìm kiếm theo mã, tên nhãn hàng hoặc mã, tên ngành hàng   * Tooltip: **Tìm kiếm theo mã, tên nhãn hàng hoặc mã, tên ngành hàng (nhập từ 3 ký tự để tìm)** * Placeholder: **Tìm kiếm theo mã, tên nhãn hàng hoặc mã, tên ngành hàng** * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các danh sách Ngành hàng đang active và các Nhãn hàng (đang active) của ngành hàng, có thông tin được nhập trong ô này. |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Nhãn hàng, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách Nhãn hàng mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Nhãn hàng 2. **Danh sách Nhãn hàng làm mới:** Sau khi nhấp, danh sách Nhãn hàng sẽ hiển thị toàn bộ các Nhãn hàng hiện có mà kông áp dụng bất kỳ bộ lọc nào.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Nhãn hàng. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Nhãn hàng; ngành hàng theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Nhãn hàng 3. **Hiển thị kết quả:** Danh sách Nhãn hàng sẽ cập nhật và hiển thị phù hợp với các tiêu chí đã chọn. |
| **Grid Danh sách Nhãn hàng**  *(Phân trang hiển thị theo level Cha và con)*    **RedV1.2.0  tạo mới và chỉnh sửa trước khi Lưu màn hình → chỉ hiển thị các nhãn hàng active; ngành hàng active và có từ 1 nhãn hàng active**  **Chỉ hiển thị các Ngành hàng có từ một Nhãn hàng active**   * Ngành hàng không có Nhãn hàng/Ngành hàng Inactive: KHÔNG hiển thị trên lưới danh sách * Ngành hàng (Active) có tất cả Nhãn hàng Inactive: KHÔNG hiển thị trên lưới danh sách * Ngành hàng (Active) có từ một Nhãn hàng Active: Hiển thị trên lưới danh sách | | | | |
| Bộ đếm |  |  |  | Sau khi chọn hiển thị số nhãn được chọn và cho phép xóa hàng loạt  Bộ đếm: **"Đã chọn X nhãn"**.  Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Đồng ý: Xóa tất cả các mục đã chọn; chọn Hủy: Tắt popup và vẫn giữ nguyên trạng thái |
| Checkbox | checkbox | Có | Không | * **Header Checkbox:** Checkbox trên header của bảng Ngành hàng cho phép chọn tất cả các ngành hàng đang xem, chỉ có tác dụng chọn/bỏ chọn **các mục đang hiển thị trên trang hiện tại**.    + Mục đích: Check box cho phép chọn tất cả các Nhãn hàng đang active đang xem để thêm vào tuyến bán hàng đang tạo hoặc chỉnh sửa   + Hiển thị icon dạng **trạng thái trung gian (indeterminate)** khi có chọn từ 1 nhãn và không phải là chọn tất cả. Này   Lưới danh sách hiển thị dạng 2 level   * level cha: Ngành hàng. Check chọn từng ngành hàng * level con: Nhãn hàng. Check chọn từng nhãn hàng thuộc ngành hàng  * **Chọn cha→ auto chọn con**: Khi check vào Ngành hàng, hệ thống hiểu là **chọn tất cả Nhãn hàng con thuộc Ngành hàng đó, trên trang đang xem**. Checkbox của các Nhãn hàng con đang hiển thị sẽ được check theo. * **Bỏ chọn Cha -> Bỏ chọn Con:** Tương tự, khi bỏ check Ngành hàng, tất cả Nhãn hàng con (trên trang) sẽ bị bỏ chọn. * **Chọn Con -> Ảnh hưởng Cha:**    + Khi check một Nhãn hàng con, checkbox Ngành hàng cha sẽ chuyển sang **trạng thái trung gian (indeterminate)**.   + Khi tất cả Nhãn hàng con (trên tất cả các trang) được check, checkbox Ngành hàng cha sẽ tự động chuyển sang **trạng thái đã check**.  -------  ***lưu ý:**Khi thao tác trên pop-up Thêm Nhãn hàng, thì ngoài danh sách Nhãn hàng của màn hình ngoài cũng update theo, và ngược lại*   * *Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại*  * *Nếu xóa ngoài lưới danh sách thì khi mở popup này, filter dữ liệu, Nhãn hàng đã xóa sẽ thấy uncheck*  * Mở Popup lần sau, khi chọn bộ lọc có Nhãn hàng đã chọn trước, màn hình vẫn hiển thị checked đối với các Nhãn hàng đã chọn |
| Level Cha: Ngành hàng  Hiển thị:   * Mặc định mở màn hình rỗng   + chọn button "tìm kiếm"=> Tất cả các ngành hàng đều ở trạng thái thu gọn (Collapse all) * Sau khi nhập text và chọn button "tìm kiếm" Danh sách các ngành hàng thỏa điều kiện đang active hiển thị trên lưới danh sách và   + Tất cả các dòng Ngành hàng thỏa điều kiện đều ở trạng thái mở rộng (Expand). Các ngành hàng còn lại collapse   + Hiển thị dấu +/- ở đầu hàng của tất cả các ngành hàng tương ứng | | | | |
| Icon Mở rộng/Thu gọn (+/-) | Icon | Có | Không | Để hiển thị/ẩn danh sách Nhãn hàng con  Chọn dấu + để expand  Chọn dấu - để collapse |
| Checkbox | Checkbox | Có | Không | Cho phép chọn ngành hàng này  Check/ uncheck |
| Mã ngành hàng | Datacolumn have copy | Không | Không | Hiển thị mã ngành hàng đang active |
| Tên ngành hàng | Datacolumn | Không | Không | Hiển thị tên ngành hàng theo mã ngành hàng |
| Trạng thái | Datacolumn | Không | Không | * Trạng thái hiện tại của Ngành hàng   + Hoạt động   + Không hoạt động |
| Level con: Nhãn hàng  Khi một Ngành hàng được mở rộng, một bảng con sẽ xuất hiện bên dưới với các cột | | | | |
| Checkbox | Checkbox | Có | Không | Chọn nhãn hàng này  Check/ uncheck  Sau khi check chọn hiển thị higlight dòng đã chọn |
| Mã Nhãn hàng | Datacolumn have copy | Không | Không | Mã định danh của Nhãn hàng theo ngành hàng trong hệ thống |
| Tên Nhãn hàng | Datacolumn | Không | Không | Tên Nhãn hàng hiển thị theo mã Nhãn hàng |
| Trạng thái | Datacolumn | Không | Không | * Trạng thái hiện tại của Nhãn hàng   + Hoạt động   + Không hoạt động |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Đồng ý** | Button | Có | Không | * Nút "**Đồng ý**" → hệ thống **Validate và chỉ cho lưu khi Ngành và Nhãn đều active →** cho phép người dùng thêm danh sách Nhãn hàng đã chọn vào selectbox Nhãn hàng / Ngành hàng (Tùy màn hình) và đóng moldal.   RedV1.2.0  Cập nhật rule load Ngành hàng; Nhãn hàng  **Chỉ hiển thị các Ngành hàng có từ một Nhãn hàng active (Ngành hàng và nhãn hàng đều hoạt động)**   * Ngành hàng không có Nhãn hàng/Ngành hàng Inactive: KHÔNG Lưu * Ngành hàng (Active) có tất cả Nhãn hàng Inactive: KHÔNG Lưu * Ngành hàng (Active) có từ một Nhãn hàng Active: báo lỗi các Nhãn bị inactive như thông báo  1. Tạo mới →  chỉ hiển thị các nhãn hàng active; ngành hàng active và có từ 1 nhãn hàng active. 2. Chỉnh sửa và nhấn Đồng ý    * Danh sách các nhãn đã chọn hiển thị cả **active và inactive theo dữ liệu đã lưu..**    * Danh sách các nhãn chưa chọn chỉ load các danh sách **active**    * **Nhưng khi chọn "Đồng ý" Validate và chỉ cho lưu khi Ngành và Nhãn đều active.** 3. *(Xem chi tiết/ Filter: Danh sách các nhãn đã chọn hiển thị cả active và inactive tại thời điểm xem theo dữu liệu đã lưu.)*   Tại thời điểm Đồng ý, nếu một "**Ngành hàng hoặc nhãn hàng"** đã chọn bị ngưng hoạt động => **hiển thị thông báo: "Ngành hàng [Tên ngành 1], [Tên ngành 2], [Tên ngành n] không hoạt động; Nhãn @tên nhãn 1, tên nhãn 2, tên nhãn n đang không hoạt động. Vui lòng kiểm tra lại!"**  ***Ví dụ:***  *TH1: Field "Nhãn hàng" trống, chưa chọn trước đó => Nhấn "Chọn":* *Chọn Nhãn active* *=> Mở Tab khác Inactive nhãn hoặc ngành rồi **Đồng ý** báo lỗi. Tắt cửa sổ  → Field "Nhãn hàng" vẫn show trống*  *TH2: Field "Nhãn hàng" đã chọn (Đã chọn cả 2 nhãn đều active; ngành active): Tại thời điểm này, mở màn hình và click "Chọn" Nhãn 1 (Active), (Nhãn 2 Inactive)* *+ Khi view detail tuyến vẫn show "Đã chọn 2 nhãn"* *+ Update tuyến: Nhấn "Chọn" => **Đồng ý** báo lỗi. Tắt cửa sổ Field "Nhãn hàng" vẫn show "Đã chọn 2 nhãn" Không cập nhật dữ liệu thay đổi này.* |

* **Trạng thái sau khi đã chọn nhãn hàng:**
  + Sau khi người dùng đã chọn một hoặc nhiều nhãn hàng từ màn hình phụ và nhấn "Đồng ý", màn hình chính sẽ được cập nhật.
  + RedV1.0.1

    - Trường hợp ô chọn chỉ chọn 1 nhãn hàng: Hiển thị tên nhãn hàng
    - Trường hợp chọn >1 nhãn. Trường "Nhãn hàng" sẽ hiển thị số lượng nhãn hàng đã được chọn. Ví dụ: **"Đã chọn XX nhãn"**. (xx là tổng số nhãn đã chọn)
      * Bên cạnh thông báo số lượng, có một biểu tượng dấu **"X"** để người dùng có thể xóa nhanh tất cả các nhãn hàng đã chọn và quay về trạng thái ban đầu.
      * **Xóa từ màn hình chính (bên ngoài modal):**

        + **Hành động:** Khi người dùng nhấn vào biểu tượng xóa này, hệ thống nên hiển thị một hộp thoại xác nhận: "Bạn có chắc muốn xóa tất cả các nhãn hàng đã chọn không?"
        + **Xác nhận:** Nếu người dùng "Đồng ý", trường nhãn hàng sẽ quay về trạng thái ban đầu và dữ liệu liên kết sẽ bị xóa. Chọn "Hủy" để hủy bỏ thao tác xóa
  + Nút **"Chọn"** vẫn hiển thị để người dùng có thể chỉnh sửa lại lựa chọn của mình.

    - **Sort lại theo** alphabet a-z các lựa chọn đã chọn lên trên, các ngành hàng khác chưa chọn ở dưới và hiển thị dấu check ở các dòng đã chọn để người dùng xem lại các Nhãn hàng đã chọn

### **"Chọn nhãn hàng" tại màn hình chỉnh sửa**

1. **Tải dữ liệu đã chọn:**

   * Khi màn hình "Chọn nhãn hàng" được mở ra, hệ thống sẽ mở màn hình Chọn Nhãn hàng như lúc tạo mới (RedV1.2.0), cho phép điều chỉnh trên các lựa chọn đã xác nhận.

     + **T****ự động tải và hiển thị danh sách các Ngành hàng :**
       - Nếu chưa pick nhãn hàng nào => hiển thị màn hình rỗng như tạo mới
       - Nếu đã chọn từ 1 nhãn hàng → mặc định hiển thị danh sách và ở trạng thái thu gọn (Collapse all)
     + **List các nhãn hàng đã được chọn trước đó sẽ được sort lại theo** alphabet a-z các lựa chọn đã chọn lên trên, các ngành hàng khác ở dưới và hiển thị check ở các dòng đó để người dùng xem lại các Nhãn hàng đã chọn
     + RedV1.0.1

       - Danh sách các nhãn và ngành đã chọn hiển thị cả **active và inactive.**
       - Danh sách các nhãn chưa chọn chỉ load các danh sách **active (**thỏa điều kiện **RedV1.2.0)**
   * Các ô chọn (checkbox) tương ứng với các nhãn hàng này sẽ được **đánh dấu sẵn**.
   * Bộ đếm sẽ cập nhật chính xác số lượng khi chọn >1 nhãn, ví dụ: **"Đã chọn xx nhãn"**. Nếu chỉ chọn 1 nhãn hiển thị Tên nhãn
2. **Cho phép chỉnh sửa:**

   * Người dùng có thể bỏ chọn các nhãn hàng hiện có.
   * Người dùng có thể sử dụng bộ lọc để tìm kiếm và thêm các nhãn hàng mới vào lựa chọn hiện tại.
   * Các lựa chọn mới/cũ sẽ được duy trì khi người dùng tìm kiếm hoặc chuyển trang.

## **"Chọn nhãn hàng" tại màn hình** **Xem chi tiết Tuyến bán hàng**

* RedV1.0.1

  + Trường hợp ô chọn chỉ chọn 1 nhãn hàng: Hiển thị tên nhãn hàng
  + Bộ đếm sẽ cập nhật chính xác số lượng khi chọn >1 nhãn, ví dụ: **"Đã chọn 15 mục"**. ẩn hyperlink "Xóa". Bên ngoài ẩn dấu  "X".

1. **Trường hợp chỉ xem (View-only):**

* + Nếu người dùng đang ở chế độ xem chi tiết tuyến bán hàng (không phải chỉnh sửa), khi mở màn hình này lên:

    - Tất cả các chức năng chỉnh sửa sẽ bị vô hiệu hóa (các ô chọn (checkbox),  ẩn button"Đồng ý".)

      * Enable cho phép: Nhập ô tìm kiếm, nút "Làm mới", "Tìm kiếm"
      * Khi nhập text và chọn tìm kiếm. Dữ liệu tìm kiếm trên lưới danh sách đang có.
    - Người dùng chỉ có thể xem danh sách các ngành hàng; nhãn hàng đã được gán và sử dụng thanh cuộn/phân trang để xem hết danh sách; được expand/ collapse các ngành hàng. Khi mở màn hình "Chọn nhãn hàng" → **T****ự động tải và hiển thị danh sách các Ngành hàng:**

      * Nếu chưa pick nhãn hàng nào => hiển thị màn hình rỗng như tạo mới
      * Nếu đã chọn từ 1 nhãn hàng → Trên lưới danh sách **tự động tải và hiển thị danh sách các Ngành hàng và list các nhãn hàng đã được chọn trước đó và hiển thị ở trạng thái mở rộng (expand all)**
    - Các ô chọn (checkbox) tương ứng với các nhãn hàng này sẽ được **đánh dấu sẵn và bị disable**
    - RedV1.0.1

      * Trường hợp ô chọn chỉ chọn 1 nhãn hàng: Hiển thị tên nhãn hàng
      * Bộ đếm sẽ cập nhật chính xác số lượng khi chọn >1 nhãn, ví dụ: **"Đã chọn 15 mục"**. ẩn hyperlink "Xóa". Bên ngoài ẩn dấu  "X".
    - Button Đóng thay thế cho button "Đồng ý"
    - Trạng thái Ngành hàng và Nhãn hàng hiển thị theo thời điểm mở màn hình

## **Filter Chọn nhãn hàng trên màn hình Tuyến thực tế**

Mục đích: Chức năng này cho phép người dùng tìm kiếm chính xác các tuyến bán hàng được gán cho các nhãn hàng cụ thể, bao gồm cả những nhãn hàng đã ngừng hoạt động.

Màn hình: Tuyến thực tế → Bộ lọc "Nhãn hàng"

Mô tả:

* Trạng thái mặc định: Hiển thị placeholder "Chọn nhãn hàng"
* Trạng thái đã chọn: Hiển thị "Đã chọn X nhãn" và Đi kèm nút "Chọn". Chọn button "**Chọn**"để xem danh sách các nhãn hàng của ngành hàng **đang active; inactive trên hệ thống**, được tìm kiếm và chọn.
* **Hành vi Mặc định và Logic Tìm kiếm trên**
  1. **Trạng thái ban đầu:** Khi người dùng mở modal, màn hình rỗng
  2. **Tìm kiếm không có tiêu chí:**

     + Người dùng không nhập gì vào ô tìm kiếm và nhấn nút **"Tìm kiếm"**. => hiển thị danh sách Ngành hàng (cả active và inactive). Các dòng Ngành hàng mặc định ở trạng thái thu gọn và không check sẵn
  3. **Tìm kiếm có tiêu chí:**

     + Người dùng nhập từ khóa vào ô tìm kiếm và nhấn nút **"Tìm kiếm"**.
     + Hệ thống sẽ tải lên lưới danh sách các Ngành hàng và Nhãn hàng (cả active và inactive) có tên hoặc mã **khớp với từ khóa tìm kiếm**. Các Ngành hàng sẽ tự động được mở rộng.
  4. Khi chọn các nhãn/ ngành/ chọn all → sau đó chọn Đồng ý: 
     1. Nút "**Đồng ý**" cho phép người dùng thêm danh sách Nhãn hàng đã chọn vào selectbox Nhãn hàng và đóng moldal. Không kiểm tra các nhãn / ngành đã ngưng hoạt động.
  5. Sau khi chọn nút "Đồng ý" người dùng vẫn muốn xem lại data vừa chọn
     1. Khi đã pick dữ liệu nhãn, chọn Nút "Chọn" Sort lại theo alphabet a-z các lựa chọn đã chọn lên trên, các ngành hàng khác chưa chọn ở dưới và hiển thị dấu check ở các dòng đã chọn để người dùng xem lại các Nhãn hàng đã chọn trên màn hình

*Lưu ý: Chức năng lọc này tái sử dụng gần như toàn bộ giao diện và logic của chức năng chọn nhãn hàng khi tạo mới, nhưng có sự khác biệt rõ rệt về quy trình: Mở ra trống -> Người dùng chủ động tìm kiếm để tải dữ liệu -> Dữ liệu bao gồm cả active/inactive -> Kết quả dùng để lọc, không phải để lưu*

## **Chọn Nghành hàng**

Mục đích:  Chức năng lọc "Chọn Ngành hàng". Chức năng này được thiết kế để cung cấp một công cụ lọc mạnh mẽ, cho phép người dùng tìm kiếm và chọn lựa từ cây phân cấp Ngành hàng và Nhãn hàng (bao gồm cả các mục đã ngừng hoạt động) nhằm phân tích dữ liệu trên các báo cáo bán hàng.

**Chức năng lọc này sẽ được áp dụng cho trường "Ngành hàng" trên các màn hình báo cáo bán hàng sau:**

* ### **Tổng hợp đơn hàng bán NPP**
* ### **Doanh thu theo sản phẩm**
* ### **NPP đặt hàng**

Mô tả:

* Trạng thái mặc định: Hiển thị placeholder "Chọn ngành hàng"
* Trạng thái đã chọn: Hiển thị "Đã chọn X nhãn" và Đi kèm nút "Chọn". Chọn button "**Chọn**"để hiển thị Modal: **Tên ngành hàng. X**em danh sách các nhãn hàng của ngành hàng đang active; inactive trên hệ thống, được tìm kiếm và chọn để filter
* **Hành vi Mặc định và Logic Tìm kiếm trên**

  1. **Trạng thái ban đầu:** Khi người dùng mở modal, **màn hình rỗng**
  2. **Tìm kiếm không có tiêu chí:**

     + - Người dùng không nhập gì vào ô tìm kiếm và nhấn nút **"Tìm kiếm"** => hiển thị danh sách Ngành hàng (cả active và inactive). Các dòng Ngành hàng mặc định ở trạng thái thu gọn và không check sẵn
  3. **Tìm kiếm có tiêu chí:**

     + Người dùng nhập từ khóa vào ô tìm kiếm và nhấn nút **"Tìm kiếm"**.
     + Hệ thống sẽ **tải lên lưới danh sách các Ngành hàng và Nhãn hàng (cả active và inactive)** có tên hoặc mã **khớp với từ khóa tìm kiếm**. Các Ngành hàng sẽ tự động được mở rộng.
  4. Khi chọn ngành hàng/ nhãn hàng/ chọn all → sau đó chọn Đồng ý: 
     1. Nút "**Đồng ý**" cho phép người dùng thêm danh sách Nhãn hàng đã chọn vào selectbox Nhãn hàng và đóng moldal. Không kiểm tra các nhãn / ngành đã ngưng hoạt động.
  5. Sau khi chọn nút "Đồng ý" người dùng vẫn muốn xem lại data vừa chọn
     1. Khi đã pick dữ liệu nhãn, chọn Nút "Chọn" Sort lại theo alphabet a-z các lựa chọn đã chọn lên trên, các ngành hàng khác chưa chọn ở dưới và hiển thị dấu check ở các dòng đã chọn để người dùng xem lại các Nhãn hàng đã chọn trên màn hình

*Lưu ý:*

*Chức năng lọc này tái sử dụng gần như toàn bộ giao diện và logic của chức năng chọn nhãn hàng khi tạo mới, nhưng có sự khác biệt rõ rệt về quy trình: Mở ra trống -> Người dùng chủ động tìm kiếm để tải dữ liệu -> Dữ liệu bao gồm cả active/inactive -> Kết quả dùng để lọc, không phải để lưu*

*Note các case bổ sung khi trao đổi:*

* *Trên màn hình popup đã expand và xem data trên lưới => thao tác bỏ trống hoặc chọn dấu cách trên search bar & "Tìm kiếm" lại thì:*
  + *Nếu xem chi tiết mà auto expand thì -> Thao tác bỏ trống search bar & nhấn "Tìm kiếm" thì có expand all theo rule của màn hình*
  + *Tạo mới và chỉnh sửa thì rule collpase all*
  + *Áp dụng cho cả các page phân trang.*
    - *Create/Update: Nếu có Ngành hàng đang expand thì vẫn giữ expand*
    - *View detail: Nếu có Ngành hàng đang collapse thì giữ collapse*

# Danh sách các màn hình

| Level 1 | Level 2 | Level 3 | Mô tả | US phảt triển |
| --- | --- | --- | --- | --- |
| Quản lý tuyến bán hàng | Tuyến bán hàng |  | * Vùng tìm kiếm - Filter Nhãn hàng * Tạo mới - Chọn nhãn * Chỉnh sửa - Chọn nhãn * Xem chi tiết nhãn | [ECDM-6908](https://hotro.finviet.com.vn/browse/ECDM-6908) - [YÊU CẦU GO LIVE][HT][PORTAL] [Tuyến bán hàng] Enhance chức năng select all khi chọn Ngành hàng Tạo mới/ Chỉnh sửa Test-DONE [ECDM-6909](https://hotro.finviet.com.vn/browse/ECDM-6909) - [YÊU CẦU GO LIVE][HT][PORTAL] [Tuyến bán hàng] Enhance chức năng select all khi chọn Ngành hàng Xem chi tiết Test-DONE |
| Quản lý tuyến bán hàng | Tuyến thực tế |  | * Vùng tìm kiếm - Filter Ngành hàng | [ECDM-6911](https://hotro.finviet.com.vn/browse/ECDM-6911) - [YÊU CẦU GO LIVE][HT][PORTAL] [Tuyến thực tế] Enhance chức năng select all khi chọn Ngành hàng - Tuyến thực tế Test-DONE |
| Báo cáo | Bán hàng | * [HO] Báo cáo Tồn kho hiện tại NPP * [NPP] Báo cáo Tồn kho hiện tại NPP * [HO] Báo cáo Nhập xuất tồn * [NPP] Báo cáo Nhập xuất tồn * [HO] Báo cáo doanh thu theo Sản phẩm * [NPP] Báo cáo doanh thu theo Sản phẩm * [HO] Báo cáo Tổng hợp đơn hàng NPP * [NPP] Báo cáo tổng hợp đơn hàng NPP * [HO] Báo cáo NPP đặt hàng * [HO] Tổng Hợp Đơn hàng Điểm Bán | * Vùng tìm kiếm -  Filter Ngành hàng | [ECD-5230](https://hotro.finviet.com.vn/browse/ECDM-6910?src=confmacro) - [YÊU CẦU GO LIVE][HT][PORTAL] [REPORT] Enhance chức năng select all khi chọn Ngành hàng - Tổng hợp đơn hàng bán NPP Test-DONE  (Link doc gắn vs US: [IMPROVEMENT] Enhance chức năng select all ngành hàng (tất cả phân cấp) trên các màn hình) |
| Quản lý thông báo | Cài đặt thông báo | HO | * Tạo mới - Chọn Ngành hàng * Chỉnh sửa - Chọn Ngành hàng * Xem chi tiết Ngành hàng | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-7717 (Link doc gắn vs US: [IMPROVEMENT] Enhance chức năng select all ngành hàng (tất cả phân cấp) trên các màn hình) |
|  |  |  |  |  |