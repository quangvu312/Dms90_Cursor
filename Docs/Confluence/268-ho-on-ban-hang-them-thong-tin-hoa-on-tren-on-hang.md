|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | thao.nguyen@finviet.com.vn |
| Chage History | 2 |

truenone

Mục tiêu:

* **Tích hợp trên màn hình Đơn hàng bán:** Bổ sung các trường thông tin, checkbox và luồng tra cứu Mã số thuế để thu thập dữ liệu xuất hóa đơn.
* **Luồng tự động tạo và ký số:** Kích hoạt khi duyệt phiếu xuất kho, hệ thống sẽ tự động gọi API để tạo và phát hành hóa đơn.
* **Luồng xử lý khi Hủy Phiếu xuất kho:** Kiểm tra trạng thái hóa đơn đã tạo, nếu ở trạng thái "Khởi tạo" thì cho phép hủy, nếu "Đã phát hành" thì chặn lại và báo lỗi.

# Thêm thông tin hóa đơn điện tử trên đơn bán hàng

Màn hình Đơn bán hàng:

Mô tả:

| **Tên Trường** | **Loại dữ liệu / Field** | **Cho phép thao tác?** | **Bắt buộc nhập liệu?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm | text input | Có | Không | Tooltip: Tìm kiếm theo Mã đơn hàng, Số hóa đơn, Ký hiệu HĐ  Placeholder: Tìm kiếm theo Mã đơn hàng, Số hóa đơn, Ký hiệu HĐ |
| **Số hoá đơn** | Datacolumn | Không | Không | Là số hoá đơn được sinh tự động từ hệ thống hóa đơn điện tử sau khi phát hành thành công.  Hiển thị số của hóa đơn điện tử tương ứng với đơn hàng sau khi tạo hóa đơn điện tử  Để trống nếu đơn hàng chưa được tạo hóa đơn hoặc không yêu cầu xuất HĐĐT.    *Trường hợp hủy phiếu xuất kho, đơn hàng có hóa đơn nhưng chưa phát hành sẽ tự động chuyển về trạng thái trước đó (Khởi tạo/Đã duyệt) và đồng thời tự động remove Số hóa đơn, Ký hiệu HĐ* |
| **Ký hiệu HĐ** | Datacolumn | Không | Không | Mã ký hiệu hóa đơn theo quy định cơ quan thuế. Lấy từ hệ thống hóa đơn điện tử  Hiển thị ký hiệu của hóa đơn điện tử tương ứng với đơn hàng sau khi tạo hóa đơn điện tử  Để trống nếu đơn hàng chưa được tạo hóa đơn.    *Trường hợp hủy phiếu xuất kho, đơn hàng có hóa đơn nhưng chưa phát hành sẽ tự động chuyển về trạng thái trước đó (Khởi tạo/Đã duyệt) và đồng thời tự động remove Số hóa đơn, Ký hiệu HĐ* |
| Tùy chỉnh | | | | |
| Điều chỉnh | Icon | Có | Có | Cho phép [điều chỉnh đơn hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444590) như flow cũ, luồng này không thay đổi  Cho phép điều chỉnh thông tin xuất hóa đơn trên đơn hàng (Này bổ sung mới) |
| Tạo mới | Button | Có | Có | Chi tiết   Tạo mới đơn hàng → Bổ sung thông tin xuất hóa đơn với các NPP có trạng thái kết nối hóa đơn điện tử = ON |

Tạo mới đơn hàng

## Tạo mới đơn hàng bán

Màn hình đơn hàng bán thêm khung Thông tin xuất hóa đơn, UI thay đổi theo Đối tượng yêu cầu hóa đơn

// Trường hợp Master data chưa có thông tin xuất hóa đơn

Khi tạo mới đơn hàng hiển thị UI như hình

//Trường hợp Master data có Đối tượng yêu cầu hóa đơn = cá nhân

//Trường hợp Master data có Đối tượng yêu cầu hóa đơn = Doanh nghiệp

//Trường hợp Master data có Đối tượng yêu cầu hóa đơn = Hộ kinh doanh

Màn hình tạo đơn hàng:

Mô tả:

| **Tên Trường** | **Loại dữ liệu / Field** | **Cho phép thao tác?** | **Bắt buộc nhập liệu?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Xuất hoá đơn VAT | Checkbox | Có | Không | Hiển thị: **Chỉ hiển thị khi NPP của đơn hàng đã được kết nối HĐĐT thành công và có trạng thái ON** trong màn hình "Quản lý mẫu hoá đơn".   * Giá trị mặc định: ON. Cho check chọn để đổi giá trị:   + Khi ON: Hệ thống sẽ yêu cầu các thông tin cần thiết để xuất hóa đơn. Kích hoạt logic kiểm tra liên quan đến "Điểm bán vãng lai".   + Khi OFF: Không xuất hóa đơn điện tử cho đơn hàng này. Ẩn toàn bộ khung "Thông tin xuất hóa đơn". ẩn checkbox Điểm bán vãng lai |
| Điểm bán vãng lai | Checkbox | Có | Không | Giá trị mặc định = OFF; Cho check chọn để đổi giá trị:   * Khi checkbox "Xuất hóa đơn VAT" = ON VÀ checkbox "Điểm bán vãng lai" = OFF: Hệ thống sẽ HIỂN THỊ khung "Thông tin xuất hóa đơn" và áp dụng các quy tắc kiểm tra dữ liệu bắt buộc. * Khi checkbox "Xuất hóa đơn VAT" = ON VÀ checkbox "Điểm bán vãng lai" = ON: Hệ thống sẽ ẨN khung "Thông tin xuất hóa đơn". Hóa đơn sẽ được xuất cho khách hàng lẻ không lấy hóa đơn |
| Đối tượng yêu cầu hóa đơn | Select Onechoice | Có | Có | * Hiển thị "Đối tượng yêu cầu hóa đơn" trên Master Điểm bán, Disable không cho thay đổi   **Khi master điểm bán không có giá trị (rỗng)**   * Dropdown được **enable**  * **UI hiển thị:**    + Dropdown hiển thị placeholder: **"Chọn đối tượng yêu cầu hóa đơn".** Cho phép chọn lại giá trị trong 3 lựa chọn:      - Cá nhân     - Hộ kinh doanh     - Doanh nghiệp * **Hành vi:**    + Cho phép người dùng chọn 1 trong 3 giá trị   + Khi chọn xong → hiển thị vùng nhập thông tin tương ứng   + Cho phép xóa lựa chọn → trở lại trạng thái placeholder: Chọn đối tượng yêu cầu hóa đơn   + Nếu chưa chọn và nhấn lưu: "Trường @tên trường là bắt buộc!" |
| UI thay đổi theo field "Đối tượng yêu cầu hóa đơn"   * Cá nhân: hiển thị field Họ tên, Địa chỉ, Số điện thoại, Email nhận hóa đơn | | | | |
| Họ tên | Text(300) | Có | Có | * **Placeholder: Nhập + [Tên trường]** * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. Disable Không được điều chỉnh * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Cá nhân →  hiển thị field rỗng để người dùng nhập mới * Cho phép xóa (Xóa từng ký tự hoặc chọn 'x' hoặc chọn nút Đặt lại), nhập lại * Không cho để trống |
| Địa chỉ | Text(300) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. Disable Không được điều chỉnh * Nếu trường này trống, người dùng có thể nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x' hoặc chọn nút Đặt lại), nhập lại   + Không bắt buộc nhập * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Cá nhân   →  hiển thị field rỗng để người dùng nhập mới   * + Cho phép xóa, nhập lại   + Không bắt buộc nhập |
| Số điện thoại | Text(11) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. Disable Không được điều chỉnh * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Cá nhân   →  hiển thị field rỗng để người dùng nhập mới   * + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x' hoặc chọn nút Đặt lại), nhập lại   + Không bắt buộc nhập   + Validate Chỉ chứa chữ số (0–9), không có dấu +, không khoảng trắng, không ký tự đặc biệt. nhập sai:  "Số điện thoại không đúng định dạng." |
| Email nhận hoá đơn | Text(300) | Có | Không | * **Placeholder: Nhập + [Tên trường]** * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. Disable Không được điều chỉnh * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Cá nhân   →  hiển thị field rỗng để người dùng nhập mới   * + Cho phép xóa, nhập lại   + Không bắt buộc nhập   + Format email ; Nhập sai định dạng thông báo "Email không đúng định dạng." |
| * Doanh nghiệp: hiển thị field Mã số thuế, Tên Doanh nghiệp, Địa chỉ doanh nghiệp, Số điện thoại, Email nhận hóa đơn. | | | | |
| Mã số thuế | Text(14) | Có | Có | * **Placeholder: Nhập + [Tên trường]** * **Tooltip: Nhập mã số thuế hoặc CCCD 12 số để tra cứu** * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master.   + Disable button Tra cứu   + Cho phép xóa mã số thuế → Enable button Tra cứu * Nếu trường này trống, người dùng có thể nhập MST mới.   + Nhập số, cho phép nhập ký tự, không chứa khoảng trắng. Nhập sai: "Mã số thuế không đúng định dạng"   + Chọn button tra cứu → Tra cứu mã số thuế thành công → Disable button Tra cứu. Cho phép xóa mã số thuế để nhập lại → Enable button Tra cứu   Tra cứu thất bại → msg theo flow tra cứu  Thành công: Nếu MST hợp lệ; auto-fill thông tin Tên, SĐT và địa chỉ và các thông tin khác (NẾU CÓ) theo API **(Success Response)** [Hệ thống HĐĐT tìm thấy MST hợp lệ và trả về dữ liệu](https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/get-taxcode-info)   Và disable các field đã auto-fill |
| Tên Doanh nghiệp | Text(300) | Có | Có | * **Placeholder: Nhập + [Tên trường]**   Disable Không được điều chỉnh:   * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. * Khi tra cứu MST thành công có giá trị →  giá trị mới sẽ ghi đè giá trị cũ   Enable cho điều chỉnh:   * Chỉ khi chọn button "Đặt lại" => Remove giá trị * Nếu trường này trống, người dùng có thể nhập mới * Khi tra cứu MST thành công KHÔNG có giá trị trả về từ API→  enable cho điều chỉnh   Nhập giá trị bằng tay khi:   * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Doanh nghiệp →  hiển thị field rỗng để người dùng nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x', Đặt lại), nhập lại * Không cho để trống, nhấn lưu: "Trường @tên trường là bắt buộc!" |
| Địa chỉ doanh nghiệp | Text(300) | Có | Có | * **Placeholder: Nhập + [Tên trường]**   Disable Không được điều chỉnh:   * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. * Khi tra cứu MST thành công có giá trị →  giá trị mới sẽ ghi đè giá trị cũ   Enable cho điều chỉnh:   * Chỉ khi chọn button "Đặt lại"→  Remove giá trị * Nếu trường này trống, người dùng có thể nhập mới * Khi tra cứu MST thành công KHÔNG có giá trị trả về từ API→  enable cho điều chỉnh   Nhập giá trị bằng tay khi:   * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Doanh nghiệp →  hiển thị field rỗng để người dùng nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x', Đặt lại), nhập lại * Không cho để trống, nhấn lưu: "Trường @tên trường là bắt buộc!" |
| Số điện thoại | Text(11) | Có | Không | * **Placeholder: Nhập + [Tên trường]**   Disable Không được điều chỉnh:   * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. * Khi tra cứu MST thành công có giá trị →  giá trị mới sẽ ghi đè giá trị cũ   Enable cho điều chỉnh:   * Chỉ khi chọn button "Đặt lại" → Remove giá trị * Nếu trường này trống, người dùng có thể nhập mới * Khi tra cứu MST thành công KHÔNG có giá trị trả về từ API→  enable cho điều chỉnh   Nhập giá trị bằng tay khi:   * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Doanh nghiệp →  hiển thị field rỗng để người dùng nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x', Đặt lại), nhập lại   + Không bắt buộc nhập   + Validate Chỉ chứa chữ số (0–9), không có dấu +, không khoảng trắng, không ký tự đặc biệt. nhập sai:  "Số điện thoại không đúng định dạng." |
| Email nhận hoá đơn | Text(300) | Có | Không | * **Placeholder: Nhập + [Tên trường]**   Disable Không được điều chỉnh:   * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. * Khi tra cứu MST thành công có giá trị →  giá trị mới sẽ ghi đè giá trị cũ   Enable cho điều chỉnh:   * Chỉ khi chọn button "Đặt lại" → Remove giá trị * Nếu trường này trống, người dùng có thể nhập mới * Khi tra cứu MST thành công KHÔNG có giá trị trả về từ API→  enable cho điều chỉnh   Nhập giá trị bằng tay khi:   * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Doanh nghiệp →  hiển thị field rỗng để người dùng nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x', Đặt lại), nhập lại   + Không bắt buộc nhập   + Format email ; Nhập sai định dạng thông báo "Email không đúng định dạng." |
| * Hộ kinh doanh: hiển thị field Mã số thuế, Tên Hộ kinh doanh, Địa chỉ Hộ kinh doanh, Căn cước công dân chủ Hộ kinh doanh, Số điện thoại, Email nhận hóa đơn. | | | | |
| Mã số thuế | Text(14) | Có | Có | * **Placeholder: Nhập + [Tên trường]** * **Tooltip: Nhập mã số thuế hoặc CCCD 12 số để tra cứu** * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master.   + Disable button Tra cứu   + Cho phép xóa mã số thuế → Enable button Tra cứu * Nếu trường này trống, người dùng có thể nhập MST mới.   + Nhập số, cho phép nhập ký tự, không chứa khoảng trắng. Nhập sai: "Mã số thuế không đúng định dạng"   + Chọn button tra cứu → Tra cứu mã số thuế thành công → Disable button Tra cứu. Cho phép xóa mã số thuế để nhập lại → Enable button Tra cứu   Tra cứu thất bại → msg theo flow tra cứu  Thành công: Nếu MST hợp lệ; auto-fill thông tin Tên, SĐT và địa chỉ và các thông tin khác (NẾU CÓ) theo API **(Success Response)** [Hệ thống HĐĐT tìm thấy MST hợp lệ và trả về dữ liệu](https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/get-taxcode-info)   Và disable các field đã auto-fill  (chỉ cho nhập thêm mới vào các field đang rỗng chưa có giá trị autofill) |
| Tên Hộ kinh doanh | Text(300) | Có | Có | * **Placeholder: Nhập + [Tên trường]**   Disable Không được điều chỉnh:   * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. * Khi tra cứu MST thành công có giá trị →  giá trị mới sẽ ghi đè giá trị cũ   Enable cho điều chỉnh:   * Chỉ khi chọn button "Đặt lại" → Remove giá trị * Nếu trường này trống, người dùng có thể nhập mới * Khi tra cứu MST thành công KHÔNG có giá trị trả về từ API→  enable cho điều chỉnh   Nhập giá trị bằng tay khi:   * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Hộ kinh doanh →  hiển thị field rỗng để người dùng nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x', Đặt lại), nhập lại * Không cho để trống, nhấn lưu: "Trường @tên trường là bắt buộc!" |
| Địa chỉ Hộ kinh doanh | Text(300) | Có | Có | * **Placeholder: Nhập + [Tên trường]**   Disable Không được điều chỉnh:   * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. * Khi tra cứu MST thành công có giá trị →  giá trị mới sẽ ghi đè giá trị cũ   Enable cho điều chỉnh:   * Chỉ khi chọn button "Đặt lại" → Remove giá trị * Nếu trường này trống, người dùng có thể nhập mới * Khi tra cứu MST thành công KHÔNG có giá trị trả về từ API→  enable cho điều chỉnh   Nhập giá trị bằng tay khi:   * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Hộ kinh doanh →  hiển thị field rỗng để người dùng nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x', Đặt lại), nhập lại * Không cho để trống, nhấn lưu: "Trường @tên trường là bắt buộc!" |
| Căn cước công dân chủ Hộ kinh doanh | Text(12) | Có | Không | * **Placeholder: Nhập + [Tên trường]**   Disable Không được điều chỉnh:   * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. * Khi tra cứu MST thành công có giá trị →  giá trị mới sẽ ghi đè giá trị cũ   Enable cho điều chỉnh:   * Chỉ khi chọn button "Đặt lại" → Remove giá trị * Nếu trường này trống, người dùng có thể nhập mới * Khi tra cứu MST thành công KHÔNG có giá trị trả về từ API→  enable cho điều chỉnh   Nhập giá trị bằng tay khi:   * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Doanh nghiệp →  hiển thị field rỗng để người dùng nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x', Đặt lại), nhập lại   + Không bắt buộc nhập   + Format:  Chỉ chứa ký tự số, Độ dài = 12 chữ số, Không chứa ký tự đặc biệt, chữ cái hoặc dấu cách |
| Số điện thoại | Text(11) | Có | Không | * **Placeholder: Nhập + [Tên trường]**   Disable Không được điều chỉnh:   * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. * Khi tra cứu MST thành công có giá trị →  giá trị mới sẽ ghi đè giá trị cũ   Enable cho điều chỉnh:   * Chỉ khi chọn button "Đặt lại" → Remove giá trị * Nếu trường này trống, người dùng có thể nhập mới * Khi tra cứu MST thành công KHÔNG có giá trị trả về từ API→  enable cho điều chỉnh   Nhập giá trị bằng tay khi:   * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Doanh nghiệp →  hiển thị field rỗng để người dùng nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x', Đặt lại), nhập lại   + Không bắt buộc nhập   + Validate Chỉ chứa chữ số (0–9), không có dấu +, không khoảng trắng, không ký tự đặc biệt. nhập sai:  "Số điện thoại không đúng định dạng." |
| Email nhận hoá đơn | Text(300) | Có | Không | * **Placeholder: Nhập + [Tên trường]**   Disable Không được điều chỉnh:   * Tự động điền từ thông tin master data của Điểm bán theo theo field "Đối tượng yêu cầu hóa đơn" trên Master. * Khi tra cứu MST thành công có giá trị →  giá trị mới sẽ ghi đè giá trị cũ   Enable cho điều chỉnh:   * Chỉ khi chọn button "Đặt lại" → Remove giá trị * Nếu trường này trống, người dùng có thể nhập mới * Khi tra cứu MST thành công KHÔNG có giá trị trả về từ API→  enable cho điều chỉnh   Nhập giá trị bằng tay khi:   * Nếu trường này trống, người dùng có thể nhập mới * Nếu chưa chọn đối tượng từ Master data thì sau khi chọn đối tượng yêu cầu hóa đơn = Doanh nghiệp →  hiển thị field rỗng để người dùng nhập mới   + Cho phép xóa (Xóa từng ký tự hoặc chọn 'x', Đặt lại), nhập lại   + Không bắt buộc nhập   + Format email ; Nhập sai định dạng thông báo "Email không đúng định dạng." |
| Lưu | Button | Có | Có | Khi người dùng nhấn nút "Lưu" trên đơn hàng (tạo mới hoặc điều chỉnh), hệ thống sẽ thực hiện thêm các bước kiểm tra sau (Luồng check lưu đơn hàng như đã define, không thay đổi luồng cũ, chỉ check thêm thông tin xuất hóa đơn điện tử):   1. **Kiểm tra Checkbox "Xuất hóa đơn VAT":**     * Nếu OFF: Lưu đơn hàng như bình thường, không xử lý gì thêm liên quan đến HĐĐT.    * Nếu ON: Chuyển sang bước 2. 2. **Kiểm tra Checkbox "Điểm bán vãng lai":**     * Nếu ON: Lưu đơn hàng và đánh dấu đây là đơn hàng cần xuất HĐĐT cho khách lẻ, Vẫn xuất hóa đơn điện tử cho đơn hàng này là khách hàng vãng lai    * Nếu OFF: Chuyển sang bước 3. 3. **Kiểm tra (Validate) Khung "Thông tin xuất hóa đơn":**     * Hệ thống kiểm tra tương ứng với từng "Đối tượng yêu cầu hóa đơn"    * **Nếu bất kỳ trường bắt buộc nào bị để trống:**       + Ngăn không cho lưu đơn hàng.      + Hiển thị thông báo lỗi ngay dưới trường bị trống, ví dụ: "Trường @tên trường là bắt buộc!"      + Highlight (tô đỏ) viền của các trường bị lỗi.    * **Nếu tất cả các trường đều hợp lệ:**       + Lưu đơn hàng thành công.      + Lưu Thông tin xuất hóa đơn vào đơn hàng chứ không lưu vào master data của điểm bán . Đơn hàng có trạng thái Khởi tạo |
| Đặt lại | Button | Có | Không | Hiển thị button khi có dữ liệu 1 field bất kỳ trong form  Cho phép reset all dữ liệu có trong form Loại trừ Field "Đối tượng yêu cầu hóa đơn" đã có dữ liệu ở master data. |

Tra cứu

### Tra cứu thông tin theo mã số thuế:

trueCheck MSTfalse700autotoptrue10311

1. **Người dùng nhập MST:** Người dùng nhập một Mã số thuế vào ô "Mã số thuế".
2. **Nhấn "Tra cứu":** Người dùng nhấn vào nút "Tra cứu".
3. **Hệ thống gọi API:** Hệ thống (Backend) gửi yêu cầu đến API của hệ thống HĐĐT với taxCode vừa nhập.
4. **HĐĐT xử lý và phản hồi:**

   * **Trường hợp 1: Tra cứu thành công (Success Response)**

     + Hệ thống HĐĐT tìm thấy MST hợp lệ (<https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/get-taxcode-info>) và trả về dữ liệu theo response

* + - **Hành vi trên Frontend:**

* + - * Hệ thống tự động điền (auto-fill) thông tin vào các trường tương ứng theo master data
      * Hệ thống **vô hiệu hóa (disable)** các trường: đã fill giá trị, không cho điều chỉnh
      * Nút **"Tra cứu"** Disable
      * Nút **"Đặt lại"** xuất hiện cho phép reset tất cả dữ liệu trong form (Loại trừ Field "Đối tượng yêu cầu hóa đơn" đã có dữ liệu ở master data) và **Enable nút 'Tra cứu"**

* + **Trường hợp 2: Tra cứu thất bại (Fail Response)**
    - Hệ thống HĐĐT không tìm thấy MST, MST không hợp lệ, hoặc có lỗi kết nối.
    - **Khi đó:**

* + - * Hiển thị thông báo lỗi ngay dưới ô "Mã số thuế":**"Mã số thuế không hợp lệ hoặc không tìm thấy. Vui lòng kiểm tra lại."**

Chỉnh sửa đơn hàng

## **Chỉnh sửa đơn hàng**

Màn hình chỉnh sửa đơn hàng

Mô tả

* Mở màn hình chỉnh sửa đơn hàng → hiển thị đơn hàng tương ứng để điều chỉnh, chức năng điều chỉnh đơn hàng không có gì thay đổi
* Bổ sung thêm: Checkbox Xuất hóa đơn VAT, Checkbox Điểm bán vãng lai,  Thông tin xuất hóa đơn
  + Trường hợp đơn hàng tạo từ app SM và master data chưa có thông tin hóa đơn, nhưng checkbox Xuất hóa đơn VAT = ON, khi chọn edit đơn hàng hiển thị UI như hình:

* + Thao tác cập nhật thông tin xuất hóa đơn Tương tự chức năng tạo mới đơn hàng, xem Chi tiết
  + Khi người dùng nhấn nút "**Lưu**" trên đơn hàng điều chỉnh, hệ thống sẽ thực hiện thêm các bước kiểm tra sau (Luồng check lưu đơn hàng như đã define, không thay đổi luồng cũ, chỉ check thêm thông tin xuất hóa đơn điện tử):

    1. ****Kiểm tra NPP đã được kết nối HĐĐT thành công và có trạng thái ON****
       - Nếu OFF: Lưu đơn hàng như bình thường, không xử lý gì thêm liên quan đến HĐĐT.
       - Nếu ON: Chuyển sang bước 2.
    2. **Kiểm tra Checkbox "Xuất hóa đơn VAT":**

       - Nếu OFF: Lưu đơn hàng như bình thường, không xử lý gì thêm liên quan đến HĐĐT.
       - Nếu ON: Chuyển sang bước 3.
    3. **Kiểm tra Checkbox "Điểm bán vãng lai":**

       - Nếu ON: Lưu đơn hàng và đánh dấu đây là đơn hàng cần xuất HĐĐT cho khách lẻ, Vẫn xuất hóa đơn điện tử cho đơn hàng này là khách hàng vãng lai
       - Nếu OFF: Chuyển sang bước 4.
    4. **Kiểm tra (Validate) Khung "Thông tin xuất hóa đơn":**

       - Hệ thống kiểm tra tương ứng với từng "Đối tượng yêu cầu hóa đơn"
       - **Nếu bất kỳ trường bắt buộc nào bị để trống:**

         * Ngăn không cho lưu đơn hàng.
         * Hiển thị thông báo lỗi ngay dưới trường bị trống, ví dụ: "Trường @tên trường là bắt buộc!"
         * Highlight (tô đỏ) viền của các trường bị lỗi.
       - **Nếu tất cả các trường đều hợp lệ:**

         * Lưu đơn hàng thành công.
         * Lưu Thông tin xuất hóa đơn vào đơn hàng chứ không lưu vào master data của điểm bán . Đơn hàng có trạng thái Khởi tạo
* Lưu log điều chỉnh đơn hàng:

## **Duyệt đơn hàng**

Tại màn hình Đơn hàng bán → Chọn icon duyệt đơn hàng có trạng thái "Khởi tạo"

**Mục đích:** khi người dùng thực hiện hành động "Duyệt" một đơn hàng đang ở trạng thái "Khởi tạo". Trước khi chính thức chuyển trạng thái đơn hàng thành "Đã duyệt", hệ thống sẽ thực hiện một loạt các bước kiểm tra logic liên quan đến Hóa đơn điện tử (HĐĐT). Quy trình này đảm bảo tính toàn vẹn và đầy đủ của dữ liệu, ngăn chặn việc duyệt các đơn hàng có yêu cầu xuất hóa đơn nhưng lại thiếu thông tin quan trọng.

1. Đơn hàng đó không yêu cầu xuất hóa đơn điện tử.
2. Đơn hàng yêu cầu xuất hóa đơn cho khách hàng vãng lai.
3. Đơn hàng yêu cầu xuất hóa đơn cho một khách hàng cụ thể và tất cả thông tin bắt buộc (MST, Tên, Địa chỉ...) đã được điền đầy đủ.

Quy trình

trueUntitled Diagramfalse1000autotoptrue13722

Mô tả:

| Bước | Hành động Người dùng / Hệ thống DMS |
| --- | --- |
| **1** | **Bắt đầu: Chọn Đơn hàng**   * Người dùng chọn một đơn hàng có trạng thái Khởi tạo trên hệ thống. |
| **2** | **Thực hiện hành động Duyệt**   * Người dùng nhấn nút "Duyệt". Hệ thống bắt đầu quy trình kiểm tra. |
| **3** | **Bước kiểm tra #1: Kết nối HĐĐT của NPP**  Hệ thống kiểm tra xem Nhà phân phối (NPP) của đơn hàng có đang được kết nối HĐĐT với trạng thái ON hay không.   * **Nếu OFF:** Điều kiện không áp dụng. Chuyển thẳng đến **Bước 7** để duyệt đơn hàng thành công. * **Nếu ON:** Chuyển đến **Bước 4** |
| 4 | **Bước kiểm tra #2: Cờ "Xuất hóa đơn VAT"**  Hệ thống kiểm tra xem đơn hàng có được đánh dấu (check) vào ô "Xuất hóa đơn VAT" hay không.   * Nếu OFF: Đơn hàng không có yêu cầu xuất hóa đơn. Chuyển thẳng đến Bước 7 để duyệt đơn hàng thành công. * Nếu ON: Chuyển đến Bước 5. |
| 5 | **Bước kiểm tra #3: Cờ "Điểm bán vãng lai"** Hệ thống kiểm tra xem đơn hàng có được đánh dấu vào ô "Điểm bán vãng lai" hay không.   * **Nếu ON:** Hóa đơn sẽ được xuất cho khách lẻ không cần thông tin chi tiết. Điều kiện được xem là hợp lệ. Chuyển thẳng đến **Bước 7** để duyệt đơn hàng thành công. * **Nếu OFF:** Cần kiểm tra thông tin chi tiết của người mua. Chuyển đến **Bước 6** |
| 6 | **Validate Khung "Thông tin xuất hóa đơn"** Đây là bước kiểm tra cuối cùng. Hệ thống sẽ kiểm tra tính đầy đủ của các trường dữ liệu bắt buộc trong khung "Thông tin xuất hóa đơn".   * **Nếu Không đủ thông tin:**    1. Hành động "Duyệt" bị chặn lại.   2. Hệ thống hiển thị thông báo lỗi cho người dùng, "Không thể duyệt đơn hàng [Mã đơn hàng]. Vui lòng cập nhật đầy đủ thông tin bắt buộc xuất hóa đơn."   3. Quy trình **Kết thúc** trong thất bại. Đơn hàng vẫn giữ trạng thái Khởi tạo. * **Nếu Đủ thông tin bắt buộc:** Tất cả các điều kiện đã được thỏa mãn. Chuyển đến Bước 7 |
| 7 | **Thực hiện Duyệt đơn hàng thành công**  Hệ thống thực hiện các hành động cuối cùng:   * Cập nhật trạng thái của Đơn hàng từ Khởi tạo thành Đã duyệt. * Ghi nhận log hệ thống về việc duyệt đơn hàng. * Hiển thị thông báo thành công cho người dùng. * Quy trình Kết thúc |

## **Duyệt Phiếu xuất kho**

Khi thực hiện tạo phiếu xuất kho: Quản lý bán hàng → Xuất kho → Khi thực hiện cập nhật trạng thái Phiếu xuất kho = Đã duyệt 

* Chọn duyệt Phiếu xuất kho
* Chọn Lưu và Duyệt phiếu xuất kho

Khi đó Màn hình Đơn hàng bán → Trạng thái đơn hàng = Đã xuất kho, hệ thống thực hiện xử lý theo quy trình tạo hóa đơn và ký số tự động.

Quy trình:

trueFlow ký số và phát hành HDDTfalse1200autotoptrue11513

Mô tả quy trình:

|  |  |  |  |
| --- | --- | --- | --- |
| 1 | Thực hiện cập nhật đơn hàng sang **Đã xuất kho** | Admin HO/ Admin NPP | Thực hiện chuyển trạng thái đơn hàng sang Đã xuất kho  Người dùng thực hiện **thao tác 'Duyệt' hoặc 'Lưu và Duyệt' trên màn hình "Phiếu xuất kho".** |
| 2 | Đơn hàng có check cờ Xuất hóa đơn VAT? | Hệ thống DMS | Thực hiện kiểm tra đơn hàng có check cờ Xuất hóa đơn VAT hay không?   * Xuất hóa đơn VAT = OFF:  Lưu đơn hàng, duyệt đơn hàng như luồng đang vận hành và kết thúc * Xuất hóa đơn VAT = ON: Thực hiện chuyển sang bước 3 |
| 3 | Kiểm tra NPP có cấu hình kết nối HDDT | Hệ thống DMS | Hệ thống kiểm tra xem NPP của đơn hàng đã được cấu hình kết nối HĐĐT và có trạng thái ON trong màn hình "Quản lý mẫu hoá đơn" hay chưa?   * Trạng thái = OFF: kết thúc, không gọi API   + msg: 'Không thể tạo hóa đơn cho đơn hàng [Mã ĐH]. Nhà phân phối chưa kích hoạt dịch vụ Hóa đơn điện tử. * [Trạng thái = ON](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66528242): Chuyển đến bước 4. |
| 4 | Cấu hình Mẫu hóa đơn tương ứng với Kênh bán hàng | Hệ thống DMS | Hệ thống DMS kiểm tra xem kênh bán hàng đã có cấu hình mẫu hóa đơn hay chưa?   * **Chưa:** Quy trình cho đơn hàng này thất bại. Hệ thống ghi nhận lỗi "Kênh bán hàng chưa được cấu hình Mẫu hóa đơn điện tử. Vui lòng kiểm tra cài đặt." Lưu đơn hàng và kết thúc * **Có:**  xử lý và gọi API bên dưới. sau đó Chuyển đến Bước 5   **Lưu ý: Dữ liệu tính toán Tổng tiền đơn hàng và tiền thuế phải khớp (sumPaymentAmount). Trường hợp sau khi tính toán không khớp sẽ báo msg trước khi gọi API tạo hóa đơn**  "Không thể tạo hóa đơn cho đơn hàng [Mã ĐH]. Có lỗi trong quá trình tính toán giá trị đơn hàng. Vui lòng kiểm tra lại!"  --   * + Trường hợp Mẫu hóa đơn = 1 (**Có VAT**):     - Gọi API tạo hóa đơn (<https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/create-invoice>) và thực hiện chuyển sang bước 4, hệ thống DMS sẽ thu thập thông tin từ form để tạo payload gửi đến API của HĐĐT       * reqid = DMS tự gen random mã này để tracking. VD: DMS\_${new Date().getTime()}       * taxCode = Mã số thuế của NPP       * connector = cổng kết nối từ thông tin mẫu hóa đơn áp dụng trong cấu hình kết nối HDDT của bên bán "bkav",       * general:         + - invoiceTemplate = Mã mẫu hóa đơn (Mã lấy từ màn hình Hóa đơn điện tử - Mã hóa đơn tương ứng với Kênh bán hàng của điểm bán)           - invoiceType = "1"           - invoiceSerial = Ký hiêu hóa đơn           - invoiceissuedDate = Ngày giờ hiện tại       * seller:         + - legalName = Tên doanh nghiệp/ Hộ kinh doanh của người bán được lưu trong cấu hình HDDT           - address = Địa chỉ doanh nghiệp/ Hộ kinh doanh của người bán được lưu trong cấu hình HDDT           - phone = Số điện thoại của người bán được lưu trong cấu hình HDDT       * buyer:         + - name = Họ tên người mua nếu có           - taxCode = Mã số thuế người mua nếu có           - address = Địa chỉ người mua nếu có **Lưu ý**: Trường hợp đơn hàng không truyền thông tin xuất nào đơn nào của người mua thì truyền name = "Khách hàng vãng lai"       * receiver:         + - type =  "1"           - name = Họ tên người mua nếu có           - email = Email nhận hóa đơn của người mua nếu có           - phone = SĐT của người mua nếu có           - address = Địa chỉ của người mua nếu có       * payment: hiện tại sẽ mặc định truyền là tiền mặt trước         + - method = "1"           - paymentMethodName = "TM"       * items:           + - type = "0"           - code = Mã SKU           - name = Tên đầy đủ của sản phẩm           - unit = Đơn vị tính của sản phẩm           - price: Giá chưa VAT             * + Sản phẩm bán: tính với công thức = giá sau giảm sản phẩm / (1 + %VAT)  (*Làm tròn 2 số thập phân*)               + Sản phẩm khuyên mãi: "0"           - quantity = số lượng sản phẩm           - totalPrice:             * + Sản phẩm bán: price \* quantity.               + Sản phẩm khuyên mãi: "0"           - taxId:             * + Sản phẩm bán: dựa vào Field Thuế VAT trên đơn hàng của sản phẩm trên DMS để suy ngược lại TaxRateID (Phục lục 5 trong bảng phụ lục: <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/appendix>) để truyền vào. Trường hợp nếu VAT không có trong bảng này thì mặc định truyền TaxRateID = 3.               + Sản phẩm khuyến mãi: "- 1"           - taxRate:             * + Sản phẩm bán: lấy dữ liệu thuế từ màn hình quản lý VAT, lấy VAT áp dụng gần nhất đối với sản phẩm theo taxId:           - taxAmount = tổng tiền thuế của sản phẩm, thực hiện tính theo công thức: (totalPrice - discountAmount) \* %VAT (*Làm tròn 2 số thập phân*)             * discountType = "2", nếu đơn hàng có khuyến mãi đơn hàng sẽ truyền giá trị này.             * discountAmount: nếu đơn hàng có khuyến mãi đơn hàng sẽ truyền giá trị này, khuyến mãi đơn hàng sẽ thực hiện chia bình quân sản phẩm ra để thực hiện tính vào với:               + - Bước 1: tính Tiền **khuyến mãi bình quân của dòng sản phẩm** sau thuế:                   * Item thứ n-1 = (Tổng tiền khuyến mãi đơn hàng [@Khuyến mãi (VND)] / tổng tiền hàng [@Tổng tiền trước VAT (VND)] \* Tổng thành tiền của dòng sản phẩm sau thuế [@Thành tiền sau VAT (VND) ].                   * Item thứ n (Sản phẩm cuối cùng trên đơn hàng = Tổng tiền thanh toán )VND trên đơn hàng - SUM(Tất cả các item thứ n-1 trên đơn hàng)                 - Bước 2: tính discountAmount = **Tiền khuyến mãi bình quân của dòng sản phẩm sau thuế** / (1 + %VAT). (*Làm tròn 2 số thập phân*)       * sumItem:         + - sumPaymentAmount = sumItemAmount + sumTaxAmount             * sumItemAmount = Tổng tiền hàng sau chiết khấu của các sản phẩm với công thức: SUM(totalPrice của các sản phẩm) - SUM(discountAmount của các sản phẩm)               + sumDiscountAmount = SUM(discountAmount của các sản phẩm)             * sumTaxAmount = SUM(taxAmount của các sản phẩm) |
| 5 | Tạo hóa đơn | Hệ thống DMS | Thực hiện tạo hóa đơn theo request từ hệ thống DMS.  Dựa vào Kênh bán hàng của đơn hàng, hệ thống HĐĐT xác định Mẫu hóa đơn và Ký hiệu hóa đơn tương ứng để tạo một bản nháp hóa đơn. |
| 6 | Kết quả | Hệ thống HDDT | Trả ra kết quả tạo hóa đơn với:   * Thất bại: chuyển sang bước 7. * Thành công: chuyển sang bước 8. |
| 7 | Nhận thông tin tạo hóa đơn thất bại | Hệ thống DMS | Lưu thông tin tạo hóa đơn thất bại và kết thúc.  Hệ thống DMS90 nhận lỗi và hiển thị msg thông báo trên màn hình  **Lỗi do kết nối hoặc từ hệ thống HĐĐT (API/Integration Errors):**   | Tình huống lỗi | Thông báo cho Người dùng (UI/Notification) | | --- | --- | | TAXCODE\_NOT\_FOUND | Không thể tạo hóa đơn cho đơn hàng [Mã ĐH] do không tìm thấy thông tin mã số thuế. Vui lòng thử lại. | | *Các lỗi tham khảo thêm khác nếu có (tùy vào API failed response từ HDDT)* | | | ***Lỗi kết nối API** (Mất mạng, timeout).* | *Không thể tạo hóa đơn cho đơn hàng [Mã ĐH] do không kết nối được với hệ thống Hóa đơn điện tử. Vui lòng thử lại.* | | *Lỗi xác thực (API key sai).* | *Không thể tạo hóa đơn cho đơn hàng [Mã ĐH] do lỗi xác thực với hệ thống Hóa đơn điện tử. Vui lòng liên hệ hỗ trợ.* | | *Hệ thống HĐĐT từ chối tạo hóa đơn (lỗi nghiệp vụ từ HĐĐT).* | *Hệ thống Hóa đơn điện tử đã từ chối tạo hóa đơn cho đơn hàng [Mã ĐH]. Lý do: [Lý do từ HĐĐT].* |   Quy trình kết thúc. Đơn hàng vẫn ở trạng thái Đã xuất kho nhưng không có thông tin HĐĐT.  Khi này người dùng chỉ có thể manual tạo HDDT ở màn hình [Quản lý hóa đơn điện tử](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66528244&src=contextnavpagetreemode) |
| 8 | Phát hành hóa đơn chưa ký số | Hệ thống HDDT | Phát hành hóa đơn (chưa ký số)   Hóa đơn được tạo thành công trên hệ thống HĐĐT với trạng thái Khởi tạo. Hệ thống HĐĐT trả về số hóa đơn của hóa đơn vừa tạo. |
| 9 | Lưu thông tin hóa đơn với trạng thái **Khởi tạo** | Hệ thống DMS | Thực hiện tạo dòng hóa đơn trên màn hình Quản lý hóa đơn điện tử với các thông tin gồm:   * Số hóa đơn = invoiceNo từ response thành công * Ký hiệu hóa đơn = invoiceTemplate từ response thành công * Mã đơn hàng = Mã đơn hàng được chọn để tạo hóa đơn * Ngày xuất hóa đơn = invoiceIssuedDate * Trạng thái = Khởi tạo * Trạng thái ký số = Rỗng * Tổng tiền thanh toán * Ngày tạo * Người tạo * Ngày cập nhật * Người cập nhật * Lưu thêm thông tin invoiceUid   (DMS lưu hóa đơn điện tử có trạng thái khởi tạo phục vụ cho nhu cầu xem hóa đơn và tải hóa đơn trên hệ thống) |
| 10 | Mẫu hóa đơn có ký số hay không? | Hệ thống DMS | Kiểm tra điều kiện ký số tự động: Theo cấu hình trên màn hình Quản lý mẫu hóa đơn → [Chi tiết mẫu hóa đơn](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66528242)  Dựa vào cấu hình của Mẫu hóa đơn tương ứng, hệ thống kiểm tra xem tùy chọn "Tự động ký" có đang được bật (ON) hay không (OFF).   * Không:    + Hệ thống DMS90 nhận và lưu lại Số hóa đơn và Ký hiệu hóa đơn, trạng thái hóa đơn là Khởi tạo, trạng thái ký số = Rỗng và các thông tin khác trên màn hình Quản lý hóa đơn điện tử   + Cập nhật các thông tin Số hóa đơn, Ký hiệu HĐ vào các cột tương ứng trên lưới danh sách đơn hàng   + Quy trình tự động kết thúc.      - Hóa đơn sẽ cần được ký thủ công trên portal DMS tại màn hình [Quản lý hóa đơn điện tử](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66528244&src=contextnavpagetreemode) * Có:    + Ngay trên hệ thống DMS, kiểm tra lại lần cuối xem trạng thái đơn hàng có chính xác là Đã xuất kho/ Đã giao hàng hay không (**Trạng thái đơn hàng đã thay đổi** (không còn là "Đã xuất kho"/ "Đã giao hàng" - ví dụ: Khởi tạo/ Đã duyệt/ Đã hủy)      - Nếu KHÔNG: msg "Phát hành hóa đơn thất bại cho đơn hàng [Mã ĐH] do trạng thái đơn hàng đã thay đổi. Hóa đơn sẽ không được phát hành" . Không gọi API.     - Nếu ĐÚNG: Hệ thống gửi yêu cầu ký số cho hóa đơn vừa tạo qua API.       * Thực hiện gọi API phát hành hóa đơn (<https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/release-invoice>) và chuyển sang bước 10 với các thông tin gồm:         + - reqid = DMS tự gen random mã này để tracking.           - invoiceUid = invoiceUid được DMS lưu lại tại bước số 9. |
| 11 | Ký số lên hóa đơn | Hệ thống HDDT | Thực hiện ký số điện tử lên hóa đơn theo request từ hệ thống DMS. |
| 12 | Kết quả | Hệ thống HDDT | Trả ra kết quả ký số với:   * Thất bại: chuyển sang bước 13 * Thành công: chuyển sang bước 14 |
| 13 | Nhận thông tin ký số thất bại | Hệ thống DMS | Hệ thống DMS90 nhận lỗi trả về và show msg tương ứng  Lỗi: INVOICE\_NOT\_FOUND. msg: "Phát hành hóa đơn thất bại cho đơn hàng [Mã ĐH] do không tìm thấy thông tin hóa đơn."  *Các lỗi tham khảo thêm khác nếu có (tùy vào API failed response từ HDDT)*   | STT | Tình huống lỗi | Thông báo cho Người dùng (UI/Notification) | | --- | --- | --- | | **I. Lỗi do Chứng thư số hoặc dịch vụ ký (Digital Signature Errors)** | | | | 1 | Chứng thư số (USB Token/HSM) hết hạn, bị thu hồi hoặc lỗi. | Phát hành hóa đơn thất bại cho đơn hàng [Mã ĐH]. Chứng thư số của công ty đã hết hạn hoặc đang gặp sự cố. Vui lòng kiểm tra lại. | | 2 | Lỗi dịch vụ ký số (HSM không phản hồi, sai cấu hình). | Phát hành hóa đơn thất bại cho đơn hàng [Mã ĐH] do dịch vụ ký số không phản hồi. Vui lòng kiểm tra lại. | | **III. Lỗi do kết nối hoặc từ hệ thống HĐĐT (API/Integration Errors)** | | | | 3 | **Lỗi kết nối API** khi gửi yêu cầu ký số. | Phát hành hóa đơn thất bại cho đơn hàng [Mã ĐH] do không kết nối được với hệ thống Hóa đơn điện tử. Vui lòng kiểm tra lại. | | 4 | Hệ thống HĐĐT báo lỗi trong quá trình ký. | Phát hành hóa đơn thất bại cho đơn hàng [Mã ĐH] do có lỗi phát sinh từ hệ thống Hóa đơn điện tử. Vui lòng kiểm tra lại. |   Quy trình kết thúc.   * Trạng thái hóa đơn trên đơn hàng vẫn là Khởi tạo. * Cập nhật thêm trạng thái ký số = Thất bại |
| 14 | Phát hành hóa đơn đã ký số | Hệ thống HDDT | Phát hành hóa đơn đã ký số.  Trạng thái = Đã phát hành |
| 15 | Lưu thông tin hóa đơn với trạng thái **Đã phát hành** | Hệ thống DMS | * Hệ thống DMS90 nhận và lưu lại Số hóa đơn và Ký hiệu hóa đơn chính thức * Cập nhật các thông tin này vào các cột tương ứng trên lưới danh sách đơn hàng (Số hóa đơn, Ký hiệu HĐ, Trạng thái ký số = Thành công) và các thông tin liên quan khác vào màn hình Quản lý hóa đơn điện tử * DMS lưu hóa đơn điện tử có trạng thái Đã phát hành phục vụ cho nhu cầu xem hóa đơn và tải hóa đơn trên MH Quản lý hóa đơn điện tử * Quy trình kết thúc thành công. |

## **Hủy phiếu xuất kho**

Sơ đồ dưới đây mô tả chi tiết các bước xử lý của hệ thống khi người dùng bắt đầu hành động hủy một phiếu xuất kho đã có liên kết với hóa đơn điện tử.

trueHủy phiếu xuất kho HDDTfalse700autotoptrue10814

| Bước | Hành động Người dùng / Hệ thống DMS | Hệ thống HĐĐT |
| --- | --- | --- |
| **1** | **Người dùng bắt đầu hành động**  Người dùng tìm đến Phiếu xuất kho cần hủy và thực hiện hủy phiếu xuất kho |  |
| **2** | **Hệ thống kiểm tra liên kết HĐĐT**   Hệ thống DMS kiểm tra xem Phiếu xuất kho này có liên kết với một Đơn hàng đã yêu cầu xuất HĐĐT hay không.   * **Không:** Chuyển đến **Bước 7** (Hủy phiếu xuất kho bình thường). * **Có:** Chuyển đến **Bước 3**. |  |
| **3** | **Hệ thống kiểm tra trạng thái HĐĐT**   * Hệ thống DMS truy vấn trạng thái của Hóa đơn điện tử đã liên kết.   + **CASE A: Hóa đơn ĐÃ PHÁT HÀNH**      - Nếu trạng thái là **Đã phát hành:**  Chuyển đến **Bước 4**.   + **CASE B: Hóa đơn CHƯA PHÁT HÀNH**     - Nếu trạng thái là **Khởi tạo** Chuyển đến **Bước 5**. |  |
| **4** | **Hệ thống chặn hành động và báo lỗi**   * Quy trình bị chặn lại. * Hệ thống hiển thị popup thông báo lỗi cho người dùng: "Không thể hủy Phiếu xuất kho. Hóa đơn điện tử [Số hóa đơn] tương ứng đã được phát hành chính thức. Vui lòng thực hiện quy trình Hủy/Điều chỉnh hóa đơn trước." |  |
| **5** | **Hệ thống gửi yêu cầu hủy HĐĐT**  Hệ thống DMS gọi đến API hủy hóa đơn của hệ thống HĐĐT, truyền vào mã định danh của hóa đơn cần hủy.  API request: <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/cancel-waiting-sign>  "reqid":   "taxCode":   "connector":   "invoiceUids": | **Bước 6: Xử lý yêu cầu hủy**  Hệ thống HĐĐT nhận yêu cầu, tìm đến hóa đơn nháp và cập nhật trạng thái của nó thành **Đã hủy**.  → Trả về kết quả (thành công/thất bại) cho hệ thống DMS. |
| **7** | **Hệ thống xử lý kết quả hủy HĐĐT**   * **Thất bại:** Hệ thống DMS nhận phản hồi lỗi từ HĐĐT. Quy trình bị chặn và hiển thị thông báo lỗi cho người dùng. Ví dụ các msg sau:   + msg "Hủy hóa đơn trên hệ thống HĐĐT thất bại. Vui lòng thử lại hoặc liên hệ hỗ trợ."   + msg: "Trạng thái hóa đơn không phải Khởi tạo. Vui lòng thử lại hoặc liên hệ hỗ trợ."   + msg: "Thông tin hóa đơn không hợp lệ. Vui lòng thử lại hoặc liên hệ hỗ trợ."   + Quy trình kết thúc. * **Thành công:** Hệ thống DMS nhận phản hồi thành công. Chuyển đến **Bước 8**. |  |
| **8** | **Hệ thống cập nhật trạng thái trên DMS**   * Remove Số hóa đơn, Ký hiệu HĐ tương ứng trên đơn hàng * Cập nhật trạng thái **Hóa đơn điện tử** trên DMS thành **Đã hủy**. * Cập nhật trạng thái **Phiếu xuất kho** thành **Đã hủy - Theo luồng hủy phiếu xuất kho**. * Cập nhật trạng thái **Đơn hàng bán** về lại trạng thái trước khi xuất kho - ví dụ: Đã duyệt/ Khởi tạo Theo luồng quản lý trạng thái đơn hàng |  |
| **9** | **Hệ thống thông báo thành công**   * Hiển thị thông báo cho người dùng: "Đã hủy thành công Phiếu xuất kho và Hóa đơn điện tử [@Mã hóa đơn]." * Quy trình kết thúc. * Lưu log đơn hàng update khi hủy phiếu xuất kho liên quan đến Hủy hóa đơn điện tử |  |