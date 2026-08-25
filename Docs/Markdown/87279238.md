|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5704  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5705 |
| Epic |  |
| Feature |  |
| Description | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fOR-4096 |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# 1 Bổ sung lý do kiểm kho

Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5704

## 1.1 Dữ liệu chung - Bổ sung loại dữ liệu lý do kiểm kho

Dữ liệu chung - Bổ sung Loại dữ liệu chung = Lý do kiểm kho: [Danh sách dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360)

## 1.2 Màn hình Danh sách kiểm kho

* Bổ sung trên filter: Lý do kiểm kho
* Bổ sung trên lưới danh sách: Lý do kiểm kho

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Filter - Lý do kiểm kho | Selectbox Multichoice | Có | Không | * Trường này cho phép người dùng chọn nhiều Lý do kiểm kho cùng lúc để tìm kiếm Phiếu kiểm kho dựa trên các Lý do kiểm kho đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều Lý do kiểm kho từ danh sách có sẵn để tinh chỉnh kết quả hiển thị Phiếu kiểm kho. * **Mở danh sách:** Khi người dùng nhấp vào trường **Lý do kiểm kho**, một danh sách các Lý do kiểm kho sẽ được mở ra, dữ liệu lấy từ danh sách [dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023360) với Loại dữ liệu chung = Lý do kiểm kho. * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm Lý do kiểm kho mong muốn. Sau đó, họ có thể chọn một hoặc nhiều Lý do kiểm kho bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:** Các Lý do kiểm kho đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Phiếu kiểm kho sẽ tự động được lọc để hiển thị những Phiếu kiểm kho thuộc các Lý do kiểm kho đã chọn. * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Lý do kiểm kho không mong muốn. * Trường hợp bỏ chọn toàn bộ các Lý do kiểm kho trong hộp chọn thì mặc định hiểu là chọn tất cả Lý do kiểm kho để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Lưới danh sách - Lý do kiểm kho | Datacolumn | Không | không | * Hiển thị Lý do kiểm kho được chọn trên phiếu kiểm kho  * Trường hợp người dùng chọn lý do Khác và nhập thông tin lý do thì sẽ hiển thị lý do dạng nối chuỗi như sau:   + Khác - Lý do người dùng nhập   + Ví dụ: Khác - Kiểm kho điều chỉnh tồn kho đầu kỳ |

## 1.3 Màn hình Chi tiết phiếu kiểm kho

* Bổ sung trường Lý do kiểm kho
* Hiển thị Lý do kiểm kho được chọn trên phiếu kiểm kho
  + Trường hợp người dùng chọn lý do Khác và nhập thông tin lý do thì sẽ hiển thị lý do dạng nối chuỗi như sau:
    - Khác - Lý do người dùng nhập
    - Ví dụ: Khác - Kiểm kho điều chỉnh tồn kho đầu kỳ

## 1.4 Màn hình Tạo mới/Chỉnh sửa phiếu kiểm kho

* Bổ sung trường Lý do kiểm kho

* Trường hợp người dùng chọn lý do = Khác, sẽ hiển thị thêm vùng nhập thông tin ghi chú thêm cho Lý do khác như sau:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Lý do kiểm kho | Selectbox onechoice | Có | Có | * Trường này cho phép người dùng chọn một Lý do kiểm kho để thêm cho Phiếu kiểm kho. * **Mở danh sách:**   + Khi người dùng nhấp vào trường Lý do kiểm kho, một danh sách các Lý do kiểm khosẽ được mở ra , dữ liệu lấy từ các Lý do kiểm kho từ màn hình Danh sách dữ liệu chung với Loại dữ liệu chung = Lý do kiểm kho.   + Danh sách hiển thị Tên Lý do kiểm kho trong hộp chọn. * **Hiển thị lựa chọn:** Lý do kiểm kho đã chọn sẽ hiển thị trong hộp chọn. * **Xóa lựa chọn:** Người dùng có thể chọn lại trong danh sách để bỏ chọn Lý do kiểm kho không mong muốn. * Trường hợp bỏ chọn Lý do kiểm kho trong hộp chọn thì mặc định hiểu là **chưa chọn Lý do kiểm kho nào**. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Nhập vào lý do kiểm kho | Textarea (500) | Có | Bắt buộc nhập khi Lý do kiểm kho = Khác | * Người dùng nhập lý do khác cho lý do kiểm kho  * Có thể scroll dọc textarea để xem đầy đủ thông tin lý do đã nhập * Tối đa 500 ký tự, nếu nhập quá 500 ký tự sẽ hiển thị thông báo: Chỉ được nhập tối đa 500 ký tự! |
| Lưu | Button | Có | không | * Lưu thêm thông tin Lý do kiểm kho cho phiếu kiểm kho * Trường hợp người dùng chọn lý do Khác và nhập thông tin lý do thì sẽ lưu lý do để có thể hiển thị dạng nối chuỗi như sau:   + Khác - Lý do người dùng nhập   + Ví dụ: Khác - Kiểm kho điều chỉnh tồn kho đầu kỳ |

## 1.5 Import excel kiểm kho

* Popup Lấy file mẫu:
  + Bổ sung selectbox chọn Lý do kiểm kho
  + Trường hợp người dùng chọn Lý do khác - Hiển thị thêm Textarea nhập lý do kiểm kho

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Lý do kiểm kho | Selectbox onechoice | Có | Có | * Trường này cho phép người dùng chọn một Lý do kiểm kho để thêm cho Phiếu kiểm kho. * **Mở danh sách:**   + Khi người dùng nhấp vào trường Lý do kiểm kho, một danh sách các Lý do kiểm khosẽ được mở ra , dữ liệu lấy từ các Lý do kiểm kho từ màn hình Danh sách dữ liệu chung với Loại dữ liệu chung = Lý do kiểm kho.   + Danh sách hiển thị Tên Lý do kiểm kho trong hộp chọn. * **Hiển thị lựa chọn:** Lý do kiểm kho đã chọn sẽ hiển thị trong hộp chọn. * **Xóa lựa chọn:** Người dùng có thể chọn lại trong danh sách để bỏ chọn Lý do kiểm kho không mong muốn. * Trường hợp bỏ chọn Lý do kiểm kho trong hộp chọn thì mặc định hiểu là **chưa chọn Lý do kiểm kho nào**. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| Nhập vào lý do kiểm kho | Textarea (500) | Có | Bắt buộc nhập khi Lý do kiểm kho = Khác | * Người dùng nhập lý do khác cho lý do kiểm kho  * Có thể scroll dọc textarea để xem đầy đủ thông tin lý do đã nhập * Tối đa 500 ký tự, nếu nhập quá 500 ký tự sẽ hiển thị thông báo: Chỉ được nhập tối đa 500 ký tự! |
| Import | Button | Có | không | * Khi import thành công lưu thêm thông tin Lý do kiểm kho cho phiếu kiểm kho * Trường hợp người dùng chọn lý do Khác và nhập thông tin lý do thì sẽ lưu lý do để có thể hiển thị dạng nối chuỗi như sau:   + Khác - Lý do người dùng nhập   + Ví dụ: Khác - Kiểm kho điều chỉnh tồn kho đầu kỳ |

# 2 Export Phiếu Kiểm Kho

Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5705

* Nút "Export Excel" sẽ xuất dữ liệu dựa trên các bộ lọc và tiêu chí tìm kiếm đã áp dụng.
* Template excel như sau:
* Format tên file xuất ra: DanhSachPhieuKiemKho\_DDMMYYYYHHMMSS
* File export này sẽ giới hạn 500,000 dòng, trường hợp export quá 500.000 dòng hệ thống sẽ báo lỗi ko export được, user phải tự filter phiếu kiểm kho ít lại để export
  + Thông báo lỗi như sau: Chỉ export được tối đa 500,000 dòng, vui lòng lọc danh sách Phiếu kiểm kho ít hơn để export!

|  | Tên Trường | Mô tả |
| --- | --- | --- |
| 1 | Mã kiểm kho | Thông tin mã phiếu kiểm kho |
| 2 | Ngày kiểm kho | Thông tin Ngày kiểm kho Format DD-MM-YYYY |
| 3 | Mã kho | Thông tin mã kho trên phiếu kiểm kho |
| 4 | Tên kho | Thông tin tên kho trên phiếu kiểm kho |
| 5 | Mã kênh bán hàng | Thông tin mã kênh bán hàng trên phiếu kiểm kho |
| 6 | Tên kênh bán hàng | Thông tin tên kênh bán hàng trên phiếu kiểm kho |
| 7 | Lý do kiểm kho | Thông tin lý do kiểm kho trên phiếu kiểm kho |
| 8 | Lý do khác | Thông tin lý do khác nếu người dùng có nhập liệu trên phiếu kiểm kho |
| 9 | Lý do từ chối | Thông tin lý do từ chối phiếu kiểm kho |
| 10 | Trạng thái | Trạng thái phiếu kiểm kho |
| 11 | Mã sản phẩm | Thông tin Mã sản phẩm trên phiếu kiểm kho |
| 12 | Tên sản phẩm | Thông tin Tên sản phẩm trên phiếu kiểm kho |
| 13 | Đơn vị tính | Thông tin Đơn vị tính của sản phẩm trên phiếu kiểm kho |
| 14 | Tồn kho hệ thống sản phẩm | Thông tin Tồn kho hệ thống của sản phẩm trên phiếu kiểm kho |
| 15 | Số lô | Thông tin Số lô của sản phẩm trên phiếu kiểm kho |
| 16 | Hạn sử dụng | Thông tin Hạn sử dụng của sản phẩm trên phiếu kiểm kho |
| 17 | Tồn kho hệ thống theo lô | Thông tin Tồn kho hệ thống theo lô của sản phẩm trên phiếu kiểm kho |
| 18 | Tồn kho thực tế theo lô | Thông tin Tồn kho thực tế theo lô của sản phẩm trên phiếu kiểm kho |
| 19 | Chênh lệch tồn kho | Thông tin chênh lệch tồn kho của sản phẩm trên phiếu kiểm kho |
| 20 | Ngày tạo | Thời gian khi phiếu kiểm kho được thêm vào hệ thống. Format: DD-MM-YYYY HH:MM:SS |
| 21 | Người tạo | Hiển thị mã tài khoản - tên tài khoản của người dùng đã tạo ra phiếu kiểm kho này. |
| 22 | Ngày cập nhật | Thời gian khi phiếu kiểm kho được cập nhật trên hệ thống. Format: DD-MM-YYYY HH:MM:SS |
| 23 | Người cập nhật | Hiển thị mã tài khoản - tên tài khoản của người dùng đã cập nhật phiếu kiểm kho này. |