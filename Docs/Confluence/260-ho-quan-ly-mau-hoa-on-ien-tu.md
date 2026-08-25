|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chức năng này cho phép người dùng quản trị (Admin HO/Kế toán) thiết lập, quản lý, và đồng bộ các kết nối đến nhà cung cấp dịch vụ HĐĐT cho từng Nhà phân phối (NPP). Mục tiêu là tự động hóa và quản lý tập trung các mẫu hóa đơn sẽ được sử dụng trong hệ thống.   1. Kết nối HĐĐT 2. Thiết lập các mẫu hợp đồng |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | thao.nguyen@finviet.com.vn |
| Chage History | 2 |

truenone

**Mục đích**

Cho phép người dùng định nghĩa **mối quan hệ giữa Mẫu Hóa Đơn – Ký hiệu – Kênh Bán Hàng**, từ đó hệ thống sẽ sử dụng đúng mẫu hóa đơn khi phát hành hóa đơn điện tử theo kênh tương ứng.

---

**Quy trình kết nối hóa đơn điện tử và quản lý mẫu hóa đơn**

**trueKết nối HDDTfalse500autotoptrue6411**

# **[HO] Màn hình Quản lý mẫu hóa đơn**

**Chức năng tìm kiếm**

|  | Tên Trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| 1 | Textsearch | Textbox | Có | Không | Input text. Placeholder: "Tìm theo Mã NPP, Tên NPP, Mã số thuế". |
| 2 | Tìm kiếm | button | Có | Không | Sau khi nhập textsearch → chọn Tìm kiếm → hiển thị danh sách tất cả các NPP đã kết nối thành công trên màn hình theo thông tin đã nhập  Trường hợp không nhập bất kỳ dữ liệu text nào → Bấm tìm kiếm => hiển thị theo màn hình mặc định như lúc mở màn hình: Load tất cả các NPP đã kết nối thành công.   * Hiển thị dạng bảng, có phân trang * Sắp xếp: Mặc định theo Ngày tạo giảm dần (mới nhất lên đầu). |

**Lưới danh sách NPP tạo hóa đơn**

* Hiển thị dạng bảng, có phân trang
* Sắp xếp: Mặc định theo Ngày tạo giảm dần (mới nhất lên đầu).'
* Phân quyền dữ liệu người dùng xem dữ liệu

|  | Tên Trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| 1 | STT | Datacolumns | Không | Không | Số thứ tự |
| 2 | Mã nhà phân phối | Datacolumns | Không | Không | Mã định danh của NPP. |
| 3 | Tên nhà phân phối | Datacolumns | Không | Không | Tên nhà phân phối  Hyperlink xem chi tiết Thông tin nhà phân phối, Lịch sử cập nhật |
| 4 | Mã số thuế | Datacolumns | Không | Không | Mã số thuế của NPP |
| 5 | Trạng thái | Datacolumns | Có | Không | Toggle Switch (ON/OFF).   * Trạng thái ON bật tính năng sử dụng hóa đơn điện tử của NPP trên đơn hàng bán. * Trạng thái OFF không bật tính năng sử dụng hóa đơn điện tử của NPP trên đơn hàng bán   --   Tắt NPP  **1/ Người dùng nhấn vào Toggle Switch để chuyển sang ON.** **Hệ thống hiển thị popup xác nhận:**  **"Bạn có chắc chắn muốn BẬT tính năng Hóa đơn điện tử cho NPP [Tên NPP]?" Nút: [Hủy] [Đồng ý]**  **Nếu người dùng chọn [Đồng ý]:**   * Kiểm tra trùng lặp MST đang hoạt động.   + Hệ thống lấy MST của NPP đang được bật.     - Truy vấn trong cơ sở dữ liệu để tìm xem có bản ghi kết nối của một NPP khác nào đang sử dụng cùng MST này và có trạng thái là ON hay không.     - Nếu TÌM THẤY:        * Chặn hành động. Hiển thị thông báo lỗi rõ ràng: **"Mã số thuế [MST] này đang được sử dụng bởi Nhà phân phối [Tên NPP đang active]. Vui lòng tắt kết nối của NPP đó trước."**       * Toggle Switch tự động bật trở lại về trạng thái OFF. * Kiểm tra trùng lặp NPP đang hoạt động.   + Hệ thống lấy Mã NPP của NPP đang được bật.     - Truy vấn trong cơ sở dữ liệu để tìm xem có bản ghi kết nối của một MST khác nào đang sử dụng cùng NPP này và có trạng thái là ON hay không.     - Nếu TÌM THẤY:        * Chặn hành động. Hiển thị thông báo lỗi rõ ràng: **"Nhà phân phối [Tên NPP] này đang được sử dụng bởi Mã số thuế khác [MST đang active]. Vui lòng tắt kết nối của NPP đó trước."**       * Toggle Switch tự động bật trở lại về trạng thái OFF. * Thỏa một trong 2 điều kiện kiểm tra => Quy trình kết thúc.   Nếu KHÔNG TÌM THẤY:   * Hành động hợp lệ. Hệ thống cập nhật trạng thái của bản ghi kết nối NPP thành ON. * Hiển thị thông báo thành công: **"Đã bật thành công tính năng Hóa đơn điện tử cho NPP [Tên NPP]."** * Quy trình kết thúc.   Nếu người dùng chọn [Hủy]: tắt popup confirm.  **2/ Khi người dùng nhấn vào Toggle Switch để chuyển sang OFF:**   * Hệ thống hiển thị popup xác nhận đơn giản: **"Bạn có chắc chắn muốn TẮT tính năng Hóa đơn điện tử cho NPP [Tên NPP]?" Nút: [Hủy] [Đồng ý**]   + Nếu người dùng chọn [Đồng ý]     - Hệ thống thực hiện kiểm tra điều kiện tiên quyết (Pre-condition Check): Ngay lập tức, hệ thống thực hiện một truy vấn để **kiểm tra xem NPP này có bất kỳ hóa đơn nào đang ở trạng thái Khởi tạo hay không.**       * **Trường hợp A: KHÔNG có hóa đơn Khởi tạo tồn đọng**         + Hệ thống cập nhật trạng thái NPP thành OFF.         + Hiển thị thông báo thành công: **"Đã tắt thành công tính năng Hóa đơn điện tử cho NPP [Tên NPP]."**         + Quy trình kết thúc. Sau khi tắt, các đơn hàng mới sẽ không thể tạo hóa đơn điện tử.       * **Trường hợp B: CÓ hóa đơn Khởi tạo tồn đọng**         + Hệ thống sẽ chặn hoàn toàn việc tắt NPP.            - Hệ thống hiển thị popup thông báo Lỗi:             * **"Không thể tắt tính năng HĐĐT cho NPP [Tên NPP] vì đang tồn tại [X] hóa đơn trạng thái Khởi tạo chưa được xử lý. Vui lòng truy cập màn hình "Quản lý Hóa đơn điện tử" để Phát hành hoặc Hủy tất cả các hóa đơn nháp này trước khi thực hiện lại thao tác tắt."** chọn [Đã hiểu]             * Hành động:                + Toggle Switch tự động bật trở lại về trạng thái ON.               + Sau khi người dùng nhấn [Đã hiểu], popup đóng lại.               + Quy trình kết thúc mà không có sự thay đổi nào về trạng thái. |
| 6 | Người tạo | Data columns | Không | Không | Tên tài khoản người thực hiện tạo kết nối. |
| 7 | Ngày tạo | Datacolumns | Không | Không | Định dạng dd-mm-yyyy HH:MM:ss. |
| 8 | Tùy chỉnh | Button | Không | Không | * **Hành vi Nhấn icon "Cập nhật":** Chuyển hướng đến popup "**Cập nhật mẫu hóa đơn**" với ID của dòng đó.   Mô tả   1. Thao tác click nút Edit 2. Hệ thống kiểm tra trạng thái kết nối NPP    1. Nếu trạng thái = ON => Chuyển hướng đến popup "**Cập nhật mẫu hóa đơn**" với ID của dòng đó.    2. Nếu trạng thái = OFF. => Chuyển hướng đến popup "**Chi tiết mẫu hóa đơn**" với ID của dòng đó |
| 9 | Thêm | Button | Không | Không | * **Hành vi Nhấn nút "Thêm mới":** Chuyển hướng đến màn hình **"Cập nhật mẫu hóa đơn"** |

## **Cập nhật mẫu hóa đơn**

**Mô tả:**

|  | Tên Trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| 1 | Nhà phân phối | Select onechoice | Có | Có | **Mở danh sách**: Khi người dùng nhấp vào trường "Mã nhà phân phối", một danh sách các nhà phân phối sẽ được hiển thị. Danh sách bao gồm các thông tin: Mã NPP, Tên NPP thuộc phân quyền người dùng và chưa được kết nối trên màn hình hoặc Đã kết nối nhưng có Trạng thái = OFF   * **Trường hợp 1 (Account thuộc 1 NPP):**    + Hiển thị mặc định tên NPP đó disabled (không cho thay đổi). * **Trường hợp 2 (Account thuộc nhiều NPP):**    + Field là một dropdown có thể tìm kiếm.   + Khi người dùng gõ vào ô tìm kiếm, hệ thống gọi API GET để tìm kiếm LIKE theo Mã NPP, Tên NPP, SĐT.   + Danh sách kết quả hiển thị dạng: [Mã NPP] - [Tên NPP]   + Khi người dùng chọn một NPP, ô input sẽ hiển thị [Tên NPP]. Hệ thống lưu lại NPP đã chọn.   **Tìm kiếm và chọn**: Người dùng có thể cuộn danh sách hoặc nhập từ khóa (Mã NPP, Tên NPP hoặc SĐT) để tìm kiếm nhà phân phối mong muốn. Sau đó, chọn một nhà phân phối bằng cách nhấp vào mục trong danh sách. Chỉ cho phép chọn một giá trị.  **Placeholder**: "Chọn nhà phân phối"  **Yêu cầu bắt buộc**: Trường này bắt buộc phải chọn. Nếu người dùng không chọn, khi nhấn nút **"Thêm"**, hệ thống sẽ hiển thị cảnh báo: "Trường nhà phân phối là bắt buộc!"  **Hiển thị lựa chọn**: Sau khi chọn, tên nhà phân phối được hiển thị trong ô chọn.  **Xóa lựa chọn**: Người dùng có thể nhấp vào biểu tượng xóa để bỏ chọn nhà phân phối. Nếu đã chọn nhưng sau đó xóa, trường được xem là chưa hợp lệ cho đến khi chọn lại. |
| 2 | Mã số thuế | Text(14) | Có | Có | **Nhập dữ liệu**: Người dùng nhập chuỗi ký tự (là số, không khoảng cách và cho nhập ký tự, không cho nhập text) mã số thuế vào ô text.   Nhập sai định dạng: "Mã số thuế không đúng định dạng"  **Placeholder**: "Nhập vào mã số thuế"  **Yêu cầu bắt buộc**: Trường này bắt buộc. Nếu bỏ trống khi nhấn **"Thêm"**, hệ thống hiển thị thông báo: *"Trường mã số thuế là bắt buộc!*.  **Xóa dữ liệu**: Người dùng có thể thủ công xóa toàn bộ nội dung để nhập lại. |
| 3 | Thêm | Button | Có | Không | **Chức năng**: Khi nhấn, hệ thống thực hiện Kích hoạt luồng kiểm tra và tạo kết nối.   1. **Validation**     * Kiểm tra NPP đã được chọn chưa. Nếu chưa, hiển thị lỗi: "Trường Mã nhà phân phối là bắt buộc!" dưới ô input.    * Kiểm tra Mã số thuế đã được nhập chưa. Nếu chưa, hiển thị lỗi: "Trường Mã số thuế là bắt buộc!" dưới ô input.    * Nếu đủ thông tin → xử lý tiếp bước 2. 2. Backend nhận request và gọi API của hệ thống Thuế điện tử (HĐĐT) để xác thực MST (<https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/get-merchant-info>.)    1. Thất bại **(Fail Response)**:         1. Một trong 3 option đều hợp lệ:          1. Popup (Alert): "Kết nối thất bại: Không tìm thấy thông tin cho mã số thuế này."          2. Toast message: Thông báo ngắn gọn ở góc màn hình: Hiển thị kết quả "Không tìm thấy thông tin cho mã số thuế này."          3. Dưới ô MST: Hiển thị text lỗi ngay dưới ô nhập liệu: Hiển thị kết quả "Không tìm thấy thông tin cho mã số thuế này."    2. Thành công **(Success Response)**:  * + Nhận API HĐĐT trả về thông tin doanh nghiệp và hiển thị thông tin trên màn hình "**Cập nhật mẫu hóa đơn**" với ID NPP thành công   **Trạng thái mặc định**:   * **Enable**: Khi cả hai trường đều đã điền hợp lệ. * **Disable**: Khi một trong hai trường còn thiếu hoặc không hợp lệ. |

Mẫu hóa đơn đã đồng bộ

## **Cập nhật mẫu hóa đơn - Danh sách mẫu hóa đơn đã kết nối NPP**

**Hiển thị chi tiết thông tin kết nối và cho phép quản lý các mẫu hóa đơn.**

Mô tả

| Tên Trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- |
| Sau khi kết nối thành công   * Disable: Không cho phép chỉnh sửa thông tin * Lưu NPP, Mã số thuế, Trạng thái = ON * Ẩn button "Thêm"   Label: Thông tin kết nối HĐĐT | | | | |
| --- | --- | --- | --- | --- |
| Nhà phân phối | Datacolumns | Không | Không | Text, không cho sửa. |
| Mã số thuế | Datacolumns | Không | Không | Text, không cho sửa. |
| Label: Thông tin doanh nghiệp   * Không cho phép chỉnh sửa thông tin | | | | |
| Tên doanh nghiệp/ Hộ kinh doanh | Datacolumns | Không | Không | Text, không cho sửa.  Tên công ty lưu theo thông tin MST hợp lệ trả về của hệ thống HDDT = 'storeName' |
| Số điện thoại | Datacolumns | Không | Không | Text, không cho sửa.  Tên công ty lưu theo thông tin MST hợp lệ trả về của hệ thống HDD = "phone" |
| Địa chỉ doanh nghiệp/ Hộ kinh doanh | Datacolumns | Không | Không | Text, không cho sửa.  Tên công ty  lưu theo thông tin MST hợp lệ trả về của hệ thống HDD = "address" |
|  | | | | |
| Cổng kết nối | Dropdown list -  Selectbox (onechoice) | Không | Không | * Cổng kết nối: default BKAV |
| Cấu hình  Cấu hình thời điểm ký tự động | Toggle (ON/OFF) | Có | Không | Default = OFF;  ON:  Hiển thị field để input thời gian ký tự động (Chỉ hiển thị khi ON)   * Định dạng HH:mm (24h format). Time Picker * Placeholder:      --:--  |  | | --- | | `--:--` |  * Mặc định: 21:00 * Validation: Giá trị hợp lệ từ 00:00 → 23:xx;   + Trong đó xx: cho chọn 3 khung phút: **00; 15; 30**   + Không được null nếu toggle đang bật * Tooltip: “Hệ thống sẽ tự động ký số vào thời điểm này trong ngày làm việc” * Không nhập khi lưu hiển thị inline: "Trường @tên field là bắt buộc!"   OFF: Ẩn khung thông tin input thời gian, ẩn Địa chỉ email  Cron Job Tự động Phát hành Hóa đơn cuối ngày |
| Địa chỉ email |  |  |  | Hiển thị Địa chỉ email (Chỉ hiển thị khi Cấu hình thời điểm ký tự động= ON):   * Default trống * Placeholder: Nhập vào địa chỉ email * Format: email hợp lệ có đuôi @gmail./ @domain công ty. nhập sai thông báo inline: "Địa chỉ email không hợp lệ!" * Không được null nếu toggle đang bật, không nhập khi lưu hiển thị inline: "Trường @tên field là bắt buộc!" |
| Thời gian lấy mẫu hóa đơn gần nhất | Datacolumns | Không | Không | hiển thị thời gian lần đồng bộ lấy mẫu hóa đơn gần nhất, hiển thị thông tin theo dd-mm-yyyy h24:mi:ss  Định dạng dd-mm-yyyy HH:MM:ss. |
| Lẫy mẫu hóa đơn  Lẫy mẫu hóa đơn | Button | Có | Không | Button "Lẫy mẫu hóa đơn": Kích hoạt việc lấy lại thông tin mẫu hóa đơn mới nhất của HDDT,  API: <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/get-merchant-info>  khi nhấn vào thực hiện gọi API Lấy thông tin (Mô tả: <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/get-merchant-info>) **để cập nhật lại thông tin doanh nghiệp nếu có và cập nhật lại Lần đồng bộ gần nhất.**  Mô tả về danh sách mẫu hóa đơn các lần đồng bộ thay đổi:   * **Lần 1:** Đồng bộ, hệ thống HĐĐT trả về 4 mẫu: **A, B, C**. **D**    + (mô tả thêm Default hiển thị dòng đầu tiên trên list danh sách mẫu hóa đơn có selectmulti 4 mẫu và trạng thái = ON)  * + Hành vi trên UI: Dropdown "Mẫu hóa đơn" ở TẤT CẢ các dòng trong lưới sẽ được cập nhật với đầy đủ 4 lựa chọn: A, B, C, D.  Người dùng tiến hành cấu hình: Dòng 1: Kênh bán hàng "Key Account" -> Chọn Mẫu hóa đơn A. Dòng 2: Kênh bán hàng "Modern Trade" -> Chọn Mẫu hóa đơn B. Dòng 3: Kênh bán hàng "GT" -> Chọn Mẫu hóa đơn C.   + Người dùng nhấn "Lưu". Cấu hình được ghi nhận. * **Lần 2:**  * + **Cấu hình hiện tại:** Đã lưu như Lần 1.   + **Người dùng nhấn "Lấy mẫu hóa đơn"**.   + **HĐĐT trả về danh sách mới:** [A, B]   + **Hành vi trên UI:**      1. **Cập nhật nguồn dữ liệu chung:** Nguồn dữ liệu cho tất cả các dropdown "Mẫu hóa đơn" giờ chỉ còn [A, B].     2. **Xử lý từng dòng trong lưới:** Hệ thống sẽ duyệt qua từng dòng đã cấu hình:         - **Dòng 1 (Đang chọn mẫu A):**           * Mẫu A vẫn tồn tại trong danh sách mới.          * Dropdown "Mẫu hóa đơn" của dòng này vẫn giữ nguyên giá trị đã chọn là A.          * Khi người dùng nhấn vào dropdown, nó sẽ hiển thị 2 lựa chọn A, B.        - **Dòng 2 (Đang chọn mẫu B):**           * Tương tự dòng 1, mọi thứ giữ nguyên.        - **Dòng 3 (Đang chọn mẫu C - Mẫu đã bị xóa):**           * Mẫu C **không còn tồn tại** trong danh sách mới.          * **Hệ thống sẽ VÔ HIỆU HÓA (disable)** dropdown "Mẫu hóa đơn" của dòng này.          * Để người dùng nhận biết,             + highlight màu đỏ cho cả dòng và disable giá trị mẫu C trong dropdown.            + **Hoặc** chỉ hiển thị mã (ID) mẫu hóa đơn C và disable giá trị mẫu C trong dropdown không cho chọn          * **Lưu ý:**              + Cấu hình mapping kênh bán hàng giữ nguyên như đã lưu,            + Các toggle "Tự động ký" bị disable            + Toggle "Trạng thái" auto chuyển thành OFF và cũng bị disable.            + Khi chọn lại mẫu hóa đơn khác hợp lệ thì enable các toggle "Tự động ký", "Trạng thái" của dòng, |
| Thêm | Button | Có | Không | Chọn thêm 1 dòng trên lưới danh sách mẫu hóa đơn, |
| Danh sách mẫu hóa đơn  Danh sách mẫu hóa đơn | | | | |
| STT |  |  |  | Số thứ tự dòng trên lưới danh sách |
| Kênh bán hàng | Dropdown list -  Selectbox multi choice | Có | Có | * Không chọn hiển thị Placeholder: Chọn kênh bán hàng  * Khi kết nối lần đầu tiên API trả về danh sách các mẫu hóa đơn thì Lưới danh sách hiển thị 1 dòng, **có select multichoice all kênh bán hàng của hệ thống.** Lấy danh sách các kênh bán hàng đang hoạt động trên DMS  * + Hiển thị các option đã chọn dưới dạng thẻ tags, cho phép chọn lại một hoặc nhiều lựa chọn khác   + Không cho phép chọn trùng với các kênh bán hàng đã chọn trong danh sách  * + - Dòng 1: Chọn tất cả các kênh bán hàng cho Mẫu hóa đơn 1 → mẫu 2: disable tất cả các kênh bán hàng đã chọn ở mẫu 1, không cho chọn kênh nào cả     - Dòng 1: Chọn kênh bán hàng A cho Mẫu hóa đơn 2 - Dòng 2: Khi chọn Kênh bán hàng disable kênh A - Chỉ chọn các kênh còn lại trừ kênh đã được chọn trước     - Tương tự, Dòng n, khi chọn Kênh bán hàng Disable tất cả các kênh đã chọn trước đó. |
| Mẫu hóa đơn | Dropdown list -  Selectbox (onechoice) | Có | Có | Mẫu hóa đơn: thông tin lưu lại từ trường **templateCode**từ response sucess của hệ thống HDDT.  Ký hiệu HĐ: thông tin lưu lại từ trường **invoiceSeries**từ response sucess của hệ thống HDDT.  Khi kết nối lần đầu tiên API trả về danh sách các mẫu hóa đơn thì Lưới danh sách hiển thị 1 dòng, mã mẫu hóa đơn mặc định chọn mẫu đầu tiên trong danh sách trả về.     * Thứ tự hiển thị mẫu hóa đơn theo list từ API trả về của HDDT. Cho phép chọn một Mẫu hóa đơn * Hiển thị danh sách các mẫu hóa đơn để chọn   + **Hiển thị trong combo chọn**: Mẫu hóa đơn - Ký hiệu hóa đơn  * + **Trên lưới danh sách hiển thị: Mẫu hóa đơn - Ký hiệu hóa đơn và icon view mẫu hóa đơn**     - **Click vào icon trên lưới danh sách hiển thị popup xem mẫu hóa đơn dạng file pdf như hình**   + Cho phép chọn lại mẫu hóa đơn khác * Cho phép chọn một mẫu hóa đơn để áp dụng cho nhiều kênh bán hàng   + Dòng 1, chọn kênh A - Mẫu hóa đơn 1- Ký hiệu hóa đơn 1. hợp lệ   + Dòng 2, chọn kênh B - Mẫu hóa đơn 1- Ký hiệu hóa đơn 1.  hợp lệ   + Dòng 3, Chọn kênh (loại trừ A, B) - Mẫu hóa đơn 2 - Ký hiệu hóa đơn 2.  hợp lệ |
| Tự động ký | Toggle Switch (ON/OFF) | Có | Không | Khi kết nối lần đầu tiên API trả về danh sách các mẫu hóa đơn thì Lưới danh sách hiển thị 1 dòng và Tự động ký = ON  Khi thêm mới 1 dòng: Tự động ký = ON   * Trạng thái ON bật tính năng tự ký khi phát hành hóa đơn điện tử * Trạng thái OFF không bật tính năng tự ký khi phát hành hóa đơn điện tử, người dùng phải ký thủ công từng hóa đơn.   Confirm trước khi bật/tắt: "Bạn có chắc chắn muốn thay đổi trạng thái tự ký khi phát hành hóa đơn điện tử ? Đồng ý/ Hủy |
| Trạng thái | Toggle Switch (ON/OFF) | Có | Không | Khi kết nối lần đầu tiên API trả về danh sách các mẫu hóa đơn thì Lưới danh sách hiển thị 1 dòng và Trạng thái = ON  Khi thêm mới 1 dòng: Trạng thái = ON  Confirm trước khi bật/tắt: Bạn chắc chắn muốn thay đổi trạng thái áp dụng mẫu hóa đơn cho kênh bán hàng đã chọn. Đồng ý/ Hủy   * Default = ON mẫu hóa đơn đầu tiên, còn lại OFF. Khi thêm mới một kênh → default dòng mới thêm = OFF * Trạng thái ON: Sử dụng mẫu hóa đơn cho kênh bán hàng đã chọn  * Khi bật kiểm tra Kênh bán hàng, Mẫu hóa đơn, đã có dữ liệu hay chưa   + Có =>  Toggle = ON   + Thiếu dữ liệu bắt buộc → bolder, inline "Trường @tên field là bắt buộc!"  * Trạng thái OFF: KHÔNG sử dụng mẫu hóa đơn cho kênh bán hàng đã chọn |
| Lưu | Button | Có | Không | Icon Lưu:  Lưu thông tin điều chỉnh "Kênh bán hàng" trên từng line.   * Check các trường bắt buộc, nếu thiếu thì không cho lưu, báo lỗi inline: Trường @tên field là bắt buộc! * Thông báo "Lưu thành công!"  * Không chọn lưu đồng nghĩa với việc dữ liệu "Kênh bán hàng" thay đổi trên từng line không được lưu xuống DB |
| Đóng (Dấu x) | Icon | Có | Không | 1. **Hệ thống kiểm tra**     * Hệ thống kiểm tra trạng thái form đã bị thay đổi so với ban đầu hay chưa. các thay đổi:       + Thêm một dòng cấu hình mới.      + Thay đổi lựa chọn trong bất kỳ dropdown nào (Kênh bán hàng, Mẫu hóa đơn, .....).      + Bật/tắt bất kỳ Toggle nào (Tự động ký, Trạng thái).      + **Và** Nhấn nút **"Lấy mẫu hóa đơn"** và hành động đó đã gây ra sự thay đổi trên giao diện (ví dụ: vô hiệu hóa một dòng).    * **Nếu form CHƯA bị thay đổi:** Hệ thống sẽ đóng ngay màn hình mà không cần hỏi gì thêm.    * **Nếu form ĐÃ bị thay đổi (như trong kịch bản của bạn):** Chuyển đến Bước 2. 2. **Hiển thị Popup Cảnh báo Hủy thay đổi**     * Hệ thống sẽ hiển thị một popup/modal để cảnh báo người dùng và yêu cầu xác nhận.    * **Nội dung Popup:**       + Bạn chắc chắn muốn thoát. Các dữ liệu thay đổi sẽ không lưu? Đồng ý/ Hủy         - Đồng ý: tắt không lưu dữ liệu thay đổi        - Hủy: tắt popup và vẫn ở lại màn hình. |

Chi tiết Nhà phân phối

## Chi tiết mẫu hóa đơn

Tab chi tiết hiển thị màn hình như màn hình cập nhật mẫu hóa đơn nhưng:

* Ẩn button "Thêm, thêm kênh, Lấy mẫu hóa đơn"
* Disable: tất cả các thông tin và  toggle trên màn hình

# **[NPP]** **Màn hình Quản lý mẫu hóa đơn**

Màn hình:

NPP log in vào hệ thống sẽ thấy UI như hình,

Thao tác:

1. Được phép bật/ tắt toggle trạng thái NPP
2. Thực hiện "Lấy mẫu hóa đơn"
3. Được cấu hình lại thời điểm ký tự động theo phân quyền edit: Cấu hình
4. Cập nhật thông tin trên Danh sách mẫu hóa đơn
5. Ghi log điều chỉnh theo user login

Cronjob

# **Cron Job Tự động Phát hành Hóa đơn cuối ngày**

**Mục  đích:** Chức năng này bao gồm một tác vụ chạy nền tự động (Cron Job) được kích hoạt vào một thời điểm đã được cấu hình trước trong ngày (ví dụ: 21:00).

Cron Job sẽ quét tất cả các hóa đơn đang ở trạng thái "Khởi tạo", thực hiện gọi API phát hành hàng loạt, xử lý kết quả, và cuối cùng gửi một email báo cáo chi tiết về cho địa chỉ email đã được cấu hình.

Cron Job này chỉ được thực thi khi thỏa mãn các điều kiện sau trên màn hình **"Cập nhật mẫu hóa đơn"** của một NPP:

* Toggle **"Cấu hình thời điểm ký tự động"** đang ở trạng thái **ON**.
* **Thời gian:** Đã thiết lập một giờ cụ thể (ví dụ: 21:00).
* **Địa chỉ Email:** Đã nhập một hoặc nhiều địa chỉ email hợp lệ để nhận báo cáo.

Mô tả:

| Bước | Hành động |
| --- | --- |
| 1 | Kích hoạt cronjob: Vào đúng 21:00,   Chạy vòng lặp kiểm tra các NPP cho đến khi không còn NPP nào.   * NPP không có cấu hình liên kết HDDT; trạng thái = OFF - Cron Job sẽ kết thúc mà không cần thực hiện thêm hành động nào. * NPP có trạng thái = ON: tác vụ tự động được khởi chạy với các NPP thỏa trạng thái = ON |
| 2 | **Quét và Thu thập Hóa đơn**  **Hệ thống truy vấn vào cơ sở dữ liệu để tìm tất cả các hóa đơn thỏa mãn TẤT CẢ các điều kiện sau:**   * Thuộc các NPP có cấu hình "Tự động ký cuối ngày" đang **ON & T**rạng thái NPP = ON & Trạng thái hóa đơn = **Khởi tạo**. |
| 3.1 | **Trường hợp không có hóa đơn nào** Nếu kết quả truy vấn trả về rỗng (không có hóa đơn nào cần phát hành), Cron Job sẽ kết thúc mà không cần thực hiện thêm hành động nào. Sẽ không có email nào được gửi đi. |
| 3.2 | **Trường hợp có hóa đơn cần xử lý** Nếu có một hoặc nhiều hóa đơn được tìm thấy, hệ thống sẽ:  1. Khởi tạo các danh sách để lưu kết quả: successList, errorList. 2. Bắt đầu một **vòng lặp** qua từng hóa đơn đã thu thập được. |
| 4 | **Xử lý từng Hóa đơn trong vòng lặp** Với mỗi hóa đơn, hệ thống thực hiện:   * **Bước 4.1: Kiểm tra điều kiện tiên quyết lần cuối:** Xác thực lại trạng thái đơn hàng gốc phải là Đã xuất kho/ Đã giao hàng. Nếu không, chuyển hóa đơn này vào errorList với lý do "Trạng thái đơn hàng không hợp lệ" và chuyển sang hóa đơn tiếp theo  * **Bước 4.2: Gọi API Phát hành/Ký số:** Nếu điều kiện hợp lệ, hệ thống gọi đến API phát hành của HĐĐT.    + Thực hiện gọi API phát hành hóa đơn (<https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/release-invoice>) với các thông tin gồm:      - * + reqid = DMS tự gen random mã này để tracking.         + invoiceUid = invoiceUid được lưu tại hóa đơn. * **Bước 4.3: Xử lý kết quả API:**    + **Thành công:**      1. Hệ thống nhận về Số hóa đơn, Ngày xuất hóa đơn. Trạng thái hóa đơn Đã phát hành, Trạng thái ký số Thành công và lưu lại tất cả các thông tin mới cho hóa đơn     2. Thêm chi tiết hóa đơn: mã đơn hàng, số hóa đơn, ký hiệu hóa đơn vào successList.   + **Thất bại:**      1. Hệ thống nhận về thông điệp lỗi từ API.     2. Hóa đơn vẫn giữ nguyên trạng thái Khởi tạo. trạng thái ký số Thất bại     3. Thêm chi tiết hóa đơn mã đơn hàng, số hóa đơn, ký hiệu hóa đơn và thông điệp lỗi vào errorList.          1. lý do ký số thất bại từ hệ thống HDDT.  Ví dụ lỗi: INVOICE\_NOT\_FOUND. msg: "Không tìm thấy thông tin hóa đơn." |
| 5 | **Kết thúc vòng lặp** Sau khi xử lý hết tất cả các hóa đơn, hệ thống chuyển sang bước chuẩn bị và gửi báo cáo. |
| 6 | **Ghi nhận Log hệ thống** Hệ thống ghi lại một bản ghi log về việc Cron Job đã chạy, bao gồm thời gian bắt đầu, kết thúc, số lượng hóa đơn đã xử lý, số lượng thành công, số lượng thất bại. |
| 7 | **Kết thúc: Cron Job hoàn thành** Tác vụ kết thúc và chờ lần kích hoạt tiếp theo vào ngày hôm sau. |
| Hệ thống thực hiện sau khi chạy cronjob hoàn thành | |
|  | **Soạn và Gửi Email Báo cáo** Hệ thống sẽ:   1. Nhóm các kết quả theo từng NPP và từng email đã cấu hình. 2. Dựa trên kết quả trong successList và errorList, hệ thống sẽ tạo nội dung email theo các  mẫu (template) đã được thiết kế. 3. Gửi email đến các địa chỉ đã được cấu hình tương ứng. |

email mẫu

## Email theo các mẫu (template):

**A. Mẫu Email khi TẤT CẢ đều thành công**

**Chủ đề:** ✅ [DMS] Báo cáo Phát hành Hóa đơn Tự động - [dd/mm/yyyy] - Thành công

**Nội dung:**

Xin chào,

Hệ thống DMS tự động thông báo:

Tác vụ phát hành hóa đơn tự động lúc **[****21:00] ngày [dd/mm/yyyy]** đã hoàn tất.

**Kết quả: Đã phát hành thành công tất cả [X] hóa đơn.**

Danh sách chi tiết:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| STT | Mã Đơn hàng | Số hóa đơn mới | Ký hiệu HĐ | Tổng tiền (VND) |
| 1 | DH-001 | 0012345 | AA/25E | 1,500,000 |
| 2 | DH-002 | 0012346 | AA/25E | 2,350,000 |
| ... | ... | ... | ... | ... |

Bạn không cần thực hiện thêm hành động nào.

Trân trọng,  
Hệ thống DMS Finviet.  
(Đây là email tự động, vui lòng không trả lời.)

**B. Mẫu Email khi có cả THÀNH CÔNG và THẤT BẠI**

**Chủ đề:** ⚠️ [DMS] Báo cáo Phát hành Hóa đơn Tự động - [dd/mm/yyyy] - Cần chú ý

**Nội dung:**

Xin chào,

Hệ thống DMS tự động thông báo:

Tác vụ phát hành hóa đơn tự động lúc **[****21:00]****ngày [dd/mm/yyyy]** đã hoàn tất.

**Tổng kết:**

* **Thành công:** [Y] hóa đơn
* **Thất bại:** [Z] hóa đơn

**I. DANH SÁCH HÓA ĐƠN PHÁT HÀNH THẤT BẠI (CẦN XỬ LÝ)**

Danh sách chi tiết:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| STT | Mã Đơn hàng | Số hóa đơn mới | Ký hiệu HĐ | Tổng tiền (VND) | Lý do lỗi |
| 1 | DH-001 | 0012345 | AA/25E | 1,500,000 | Thông tin người mua không hợp lệ. |
| 2 | DH-002 | 0012346 | AA/25E | 2,350,000 | Lỗi kết nối đến hệ thống HĐĐT. |
| ... | ... | ... | ... | ... | ... |

Vui lòng truy cập màn hình "Quản lý Hóa đơn điện tử" để kiểm tra và xử lý lại các hóa đơn trên.

**II. DANH SÁCH HÓA ĐƠN ĐÃ PHÁT HÀNH THÀNH CÔNG**

Danh sách chi tiết:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| STT | Mã Đơn hàng | Số hóa đơn mới | Ký hiệu HĐ | Tổng tiền (VND) |
| 1 | DH-001 | 0012345 | AA/25E | 1,500,000 |
| 2 | DH-002 | 0012346 | AA/25E | 2,350,000 |
| ... | ... | ... | ... | ... |

Trân trọng,  
Hệ thống DMS Finviet.  
(Đây là email tự động, vui lòng không trả lời.)

**C. Mẫu Email khi THẤT BẠI**

**Chủ đề:** ⚠️ [DMS] Báo cáo Phát hành Hóa đơn Tự động - [dd/mm/yyyy] - Cần chú ý

**Nội dung:**

Xin chào,

Hệ thống DMS tự động thông báo:

Tác vụ phát hành hóa đơn tự động lúc **[****21:00]****ngày [dd/mm/yyyy]** đã hoàn tất.

**Kết quả: Đã phát hành thành Thất bại [X] hóa đơn.**

Danh sách chi tiết:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| STT | Mã Đơn hàng | Số hóa đơn mới | Ký hiệu HĐ | Tổng tiền (VND) | Lý do lỗi |
| 1 | DH-001 | 0012345 | AA/25E | 1,500,000 | Thông tin người mua không hợp lệ. |
| 2 | DH-002 | 0012346 | AA/25E | 2,350,000 | Lỗi kết nối đến hệ thống HĐĐT. |
| ... | ... | ... | ... | ... | ... |

Vui lòng truy cập màn hình "Quản lý Hóa đơn điện tử" để kiểm tra và xử lý lại các hóa đơn trên.

Trân trọng,

Hệ thống DMS Finviet.  
(Đây là email tự động, vui lòng không trả lời.)