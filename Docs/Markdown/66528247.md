|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic | [HO] Danh mục điểm bán - Thêm thông tin xuất hóa đơn |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

### Thêm thông tin xuất hóa đơn của Điểm bán

Thông tin hiện tại:

Link doc hiện tại: 

* [HO] Danh sách điểm bán

Thông tin thêm mới

* Khai báo thêm thông tin xuất hóa đơn khi tạo điểm bán
* Phân quyền giống với tạo điểm bán
* Hiển thị thông tin xuất hóa đơn theo Đối tượng yêu cầu hóa đơn.
* Rule ràng buộc theo mô tả chi tiết.
* Không update thông tin từ App nếu có ghi nhận.
* Thêm thông tin xuất hóa đơn; không làm thay đổi luồng hiện tại.

Màn hình mặc định

Màn hình sau khi chọn đối tượng:

Mô tả:

| STT | **Tên Trường** | **Loại dữ liệu/Loại field** | Ràng buộc? | **Mô tả** |
| --- | --- | --- | --- | --- |
| **Thêm thông tin xuất hóa đơn** | | | | |
| 1 | Đối tượng yêu cầu xuất hóa đơn | Dropdownlist-onechoice | Có | Mô tả: Chọn đúng đối tượng để cập nhật thông tin xuất hóa đơn cho cửa hàng  Đối tượng: Doanh nghiệp; Hộ kinh doanh; Cá nhân Ràng buộc:   * Mặc định chưa khai báo sẽ hiển thị placeholder "Chọn <Tên field>" * Chọn 1 trong 3 đối tượng theo list. * Khi chọn đối tượng các trường thông tin sẽ thay đổi theo: Mã số thuế; Tên doanh nghiệp/Hộ kinh doanh/Cá nhân; Địa chỉ doanh nghiệp/Hộ kinh doanh/Cá nhân; Email nhận hóa đơn. * Bắt buộc chọn đối tượng; nếu không chọn hoặc bỏ chọn có warning "Chưa chọn đối tượng yêu cầu hóa đơn" * Trường hợp chọn lại đối tượng tất cả các trường còn lại quay về giá trị mặc định. |
| 2 | Mã số thuế | Text(14) | Không | Mô tả: Nhập mã số thuế của cửa hàng để xuất hóa đơn Ràng buộc:   * Mặc định chưa khai báo sẽ hiển thị placeholder "Nhập Mã số thuế hoặc CCCD" * Có thể nhập ký tự đặc biệt. * Không cho nhập khoảng trắng. * Trường hợp MST không hợp lệ; sẽ có thông báo "TaxCode: MST không phải là Mã số thuế hợp lệ" |
| 3 | Tra cứu | Button | Không | Mô tả: Nhấn để tra cứu mã số thuế có hợp lệ hay không. Ràng buộc:   * Mặc định disable. * Chỉ enable khi người dùng có nhập dữ liệu vào trường Mã số thuế. * Nếu xóa tất cả dữ liệu trường Mã số thuế nút quay về mặc định là disable.   Thông tin API check MST: <https://be-docs-test-api.finviet.com.vn:6868/eco-invoice/api/invoices/get-taxcode-info>  **Case thực hiện:** Nhập MST/CCCD không nhấn Tra cứu:  Case1: Thực hiện cập nhật dữ liệu thủ công.  Nhập MST/CCCD và nhấn Tra cứu: Case2: Nếu MST hợp lệ; auto-fill thông tin Tên, SĐT và địa chỉ đồng thời disable 3 trường này.  Case3: Nếu MST không hợp lệ :  Gọi API trả lỗi truy vấn có thông báo "Truy vấn lỗi. Vui lòng thử lại";  MST không tồn tại có thông báo "Mã số thuế không tồn tại. Vui lòng kiểm tra lại"  Case4: tại Case 2 nếu nhập lại MST khác và không nhấn Tra cứu thì clear dữ liệu auto-fill và thực hiện như Case1  Case5: tại Case 2 nếu nhập MST khác và nhấn Tra cứu:    * Trường hợp MST mới hợp lệ; thì thực hiện như Case2. * Trường hợp MST mới không hợp lệ; thì thực hiện như Case3. Tất cả trường hợp nhập lại MST khác đều xóa dữ liệu đã auto-fill; đồng thời enable lại trường thông tin Tên, SĐT và địa chỉ cho phép nhập lại thông tin theo thủ công. |
| 4 | Tên Doanh nghiệp/Tên Hộ kinh doanh/Họ tên | Text(300) | Không | Mô tả: Nhập Tên Doanh nghiệp/Tên Hộ kinh doanh/Họ tên  Dữ liệu: Hiển thị title theo đúng đối tượng đã chọn ở trên.   * đối tượng Doanh nghiệp = Tên Doanh nghiệp * đối tượng Hộ kinh doanh = Tên Hộ kinh doanh * đối tượng Cá nhân = Họ tên   Ràng buộc:  Trường hợp nhập dữ liệu thủ công (không nhấn nút tra cứu):   * Mặc định chưa khai báo sẽ hiển thị placeholder "Nhập <Tên field>" * Có thể nhập ký tự đặc biệt. * Cho phép xóa và nhập lại.   Trường hợp auto-fill dữ liệu khi nhấn Tra cứu thành công từ API:   * Tên Doanh nghiệp/Tên Hộ kinh doanh = giá trị của field **name** * Disable trường thông tin sau khi auto-fill dữ liệu. * Auto-fill dữ liệu mới nếu có tra cứu lại MST khác. |
| 5 | Căn cước công dân chủ Hộ kinh doanh | Number(12) | Không | Mô tả: Nhập CCCD của người đại diện Ràng buộc:   * Trường này chỉ hiển thị với đối tượng = Hộ kinh doanh. * Mặc định chưa khai báo sẽ hiển thị placeholder "Nhập <Tên field>" * Không cho nhập khoảng trắng. * Format: 010123456789; ngược lại thông báo "CCCD không đúng định dạng." * Cho phép xóa và nhập lại. |
| 6 | Email nhận hóa đơn | Text(300) | Không | Mô tả: nhập email nhận hóa đơn của cửa hàng Ràng buộc:   * Mặc định chưa khai báo sẽ hiển thị placeholder "Nhập <Tên field>" * Có thể nhập ký tự đặc biệt. * Không cho nhập khoảng trắng. * Đúng format email; ngược lại thông báo "Email không đúng định dạng." * Cho phép xóa và nhập lại. |
| 7 | Địa chỉ Doanh nghiệp/Địa chỉ Hộ kinh doanh/Địa chỉ | Text(300) | Không | Mô tả: nhập địa chỉ nhận hóa đơn của cửa hàng  Dữ liệu: Hiển thị title theo đúng đối tượng đã chọn ở trên.   * đối tượng Doanh nghiệp = Địa chỉ Doanh nghiệp * đối tượng Hộ kinh doanh = Địa chỉ Hộ kinh doanh * đối tượng Cá nhân = Địa chỉ   Ràng buộc:  Trường hợp nhập dữ liệu thủ công (không nhấn nút tra cứu):   * Mặc định chưa khai báo sẽ hiển thị placeholder "Nhập <Tên field>" * Có thể nhập ký tự đặc biệt. * Cho phép xóa và nhập lại.   Trường hợp autofill dữ liệu khi nhấn Tra cứu thành công từ API:   * Địa chỉ Doanh nghiệp/Địa chỉ Hộ kinh doanh/Địa chỉ = giá trị của field **address** * Disable trường thông tin sau khi auto-fill dữ liệu. * Auto-fill dữ liệu mới nếu có tra cứu lại MST khác. |
| 8 | Số điện thoại | Number(14) | Không | Mô tả: nhập SĐT  của cửa hàng  Ràng buộc:  Trường hợp nhập dữ liệu thủ công (không nhấn nút tra cứu):   * Mặc định chưa khai báo sẽ hiển thị "Nhập <Tên field>" * Cho phép xóa và nhập lại. * Nhập không đúng định dạng có thông báo : "Số điện thoại không đúng định dạng"   Trường hợp autofill dữ liệu khi nhấn Tra cứu thành công từ API:   * Số điện thoại = giá trị của field **phone** * Disable trường thông tin sau khi auto-fill dữ liệu. * Auto-fill dữ liệu mới nếu có tra cứu lại MST khác. |
| 9 | Lưu | Button |  | Mô tả: nhấn để lưu trữ thông tin khai báo Ràng buộc:   * Thỏa tất cả điều kiện ràng buộc khai báo sẽ lưu trữ dữ liệu khai báo. * Kiểm tra MST đã tồn tại trên hệ thống chưa? Nếu đã có thì thông báo "Mã số thuế đã tồn tại trong hệ thống. Vui lòng kiểm tra lại" và không cho phép Lưu khai báo. |
| 10 | Đóng | Button |  | Mô tả: nhấn quay lại sẽ quay về màn hình Xác nhận đơn hàng hoặc Cửa hàng chăm sóc Ràng buộc:   * Không lưu trữ dữ liệu cập nhật. |

### Chỉnh sửa thông tin xuất hóa đơn của Điểm bán

Thông tin hiện tại:

Link doc hiện tại: 

* [HO] Danh sách điểm bán

Thông tin thêm mới

* Phân quyền chỉnh sửa giống với chỉnh sửa điểm bán
* Hiển thị thông tin xuất hóa đơn theo Đối tượng yêu cầu hóa đơn.
* Cho phép sửa tất cả thông tin xuất hóa đơn của điểm bán.
* Rule ràng buộc giống với rule khai báo.
* Không update thông tin từ App nếu có ghi nhận.
* Có ghi nhận thông tin người sửa; ngày sửa.
* Có ghi nhận thông tin điều chỉnh khi xem lịch sử cập nhật.

### Xem thông tin xuất hóa đơn của Điểm bán

Thông tin hiện tại:

Link doc hiện tại: 

* [HO] Danh sách điểm bán

Thông tin:

* Phân quyền giống với xem điểm bán.
* Hiển thị thông tin xuất hóa đơn theo Đối tượng yêu cầu hóa đơn.
* Chỉ hiển thị và xem thông tin không được chỉnh sửa.

### Xuất excel thông tin xuất hóa đơn của Điểm bán

Thông tin hiện tại:

Link doc hiện tại: 

* [HO] Danh sách điểm bán

Thông tin:

* Phân quyền giống với export điểm bán.
* Hiển thị thông tin xuất hóa đơn theo Đối tượng yêu cầu hóa đơn.
* Form export xuất thêm cột thông tin xuất hóa đơn của điểm bán

Thêm cột: 

1. Đối tượng yêu cầu xuất hóa đơn
2. Mã số thuế/Căn cước công dân
3. Tên Doanh nghiệp/Tên Hộ kinh doanh/Họ tên
4. Căn cước công dân chủ Hộ kinh doanh
5. Địa chỉ Doanh nghiệp/Địa chỉ Hộ kinh doanh/Địa chỉ
6. Số điện thoại
7. Email nhận hóa đơn

Form export: