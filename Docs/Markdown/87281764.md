|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5745  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5744  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5743 |
| Epic |  |
| Feature |  |
| Description | * Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fOR-4141 * Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fOR-4158 |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Điều chỉnh thêm các tính năng cho Hương Thủy

* Chọn đơn hàng → Thay đổi sang popup chọn để filter đơn hàng
  + Filter theo điểm bán, nhân viên bán hàng: Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fOR-4141
* Thêm chế độ in phiếu xuất kho tổng: Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fOR-4158
* Thay đổi thông tin NPP trên phiếu xuất kho: Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fOR-4158

# 1 Thay đổi popup chọn đơn hàng để xuất kho

Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5743

# 

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm | Textbox | Có | Không | Ô tìm kiếm này hiện tại sử dụng để search và chọn đơn hàng  **→ Thay đổi**  Chuyển ô search này thành:   * Trường chỉ dành để search đơn hàng đã chọn trên lưới danh sách đơn hàng và không dùng để chọn đơn hàng * Bổ sung thêm search theo Mã điểm bán, tên điểm bán trên lưới danh sách đơn hàng * Placeholder: Tìm kiếm theo Mã đơn hàng, Mã điểm bán, Tên điểm bán * Khi search thì trên lưới danh sách hiển thị ít lại theo thông tin người dùng đã nhập để search * Search like có dấu, không dấu, không phân biệt hoa thường theo Mã đơn hàng, Mã điểm bán, Tên điểm bán |
| Danh sách đơn hàng | Table | - | - | Thêm phân trang cho lưới danh sách đơn hàng |
| Danh sách sản phẩm | Table | - | - | Thêm phân trang cho lưới danh sách sản phẩm |

## 1.1 Chọn đơn hàng

* Bổ sung button Chọn đơn hàng để chọn đơn hàng cần xuất kho

* Khi chọn vào button này mà người dùng chưa chọn Ngày xuất kho, Kho, Kênh bán hàng, báo lỗi như sau:
  + Vui lòng chọn Ngày xuất kho, Kho, Kênh bán hàng trước khi chọn đơn hàng!
  + Message lỗi này sẽ xuất hiện chung cho trường hợp thiếu cả 3 hoặc thiếu 1 trong 3 trường trên.

* Khi chọn vào button này hệ thống mở màn hình chọn như sau:

* **Danh sách đơn hàng:** 
  + Load danh sách đơn hàng theo quy tắc load đơn hàng từ document [[NPP] Xuất kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445066)(giữ như hiện tại, không thay đổi)
  + Khi mở popup thì clear các filter trên popup, hiện đầy đủ danh sách đơn hàng và danh sách đơn hàng đã chọn.

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Vùng tìm kiếm | | | | |
| Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu đơn hàng dựa trên danh sách đơn hàng Tìm kiếm theo Mã đơn hàng  **Chi tiết hoạt động:**  Cho phép nhập text Tìm kiếm theo Mã đơn hàg   * Placeholder: **Mã đơn hàng** * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các đơn hàng có thông tin được nhập trong ô này (Lọc trên lưới danh sách đơn hàng). |
| Điểm bán | select multichoice | Có | Không | Chọn Điểm bán để tìm kiếm đơn hàng.   * Trường này cho phép người dùng chọn Điểm bán để tìm kiếm đơn hàng theo Điểm bán đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều Điểm bán từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách đơn hàng. * **Mở danh sách:**Khi người dùng nhấp vào trường **Điểm bán**, một danh sách các Điểm bán sẽ được mở ra:   + Dữ liệu lấy từ danh sách Điểm bán từ danh sách điểm bán có NPP là NPP đang đăng nhập   + Chỉ hiển thị danh sách Điểm bán có trạng thái = Hoạt động * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm Điểm bán mong muốn. Sau đó, họ có thể chọn một Điểm bán bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:**    + Điểm bán đã chọn sẽ hiển thị trong hộp chọn dưới dạng tag.   + **Xóa lựa chọn:** Người dùng có thể xóa dấu x trên từng tag để bỏ chọn Điểm bán không mong muốn. * **Kết quả lọc:**Đơn hàng sẽ tự động được lọc để hiển thị những đơn hàng có thông tin của Điểm bán đã chọn. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn   + Đồng nghĩa với đang chọn tất cả Điểm bán   + Đồng nghĩa với trên lưới danh sách hiển thị tất cả đơn hàng thỏa điều kiện * Selectbox điểm bán và nhân viên bán hàng độc lập với nhau |
| Nhân viên bán hàng | select multichoice | Có | Không | Chọn nhân viên để tìm kiếm đơn hàng.   * Trường này cho phép người dùng chọn nhân viên để tìm kiếm đơn hàng theo nhân viên đã chọn. * Người dùng có thể tìm kiếm và chọn một hoặc nhiều nhân viên từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách đơn hàng. * **Mở danh sách:**Khi người dùng nhấp vào trường **nhân viên**, một danh sách các nhân viên sẽ được mở ra:   + Dữ liệu lấy từ danh sách nhân viên từ [[HO] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) với chức vụ = Salesman và Sales SUP (SM và SS)   + Chỉ hiển thị danh sách nhân viên có trạng thái = Hoạt động   + Danh sách nhân viên có tuyến bán hàng thuộc NPP đang đăng nhập * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhân viên mong muốn. Sau đó, họ có thể chọn một nhân viên bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:**    + Nhân viên đã chọn sẽ hiển thị trong hộp chọn dưới dạng tag.   + **Xóa lựa chọn:** Người dùng có thể xóa dấu x trên từng tag để bỏ chọn nhân viên không mong muốn. * **Kết quả lọc:**    + Đơn hàng sẽ tự động được lọc để hiển thị những đơn hàng có thông tin của nhân viên đã chọn.   + Trường hợp đơn hàng không có thông tin nhân viên thì không hiển thị. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn   + Đồng nghĩa với đang chọn tất cả nhân viên   + Đồng nghĩa với trên lưới danh sách hiển thị tất cả đơn hàng thỏa điều kiện cho dù trên đơn có hay không có thông tin nhân viên. * Selectbox điểm bán và nhân viên bán hàng độc lập với nhau |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách đơn hàng, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách đơn hàng mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách đơn hàng 2. **danh sách đơn hàng làm mới:** Sau khi nhấp, danh sách đơn hàng sẽ hiển thị toàn bộ các Nhà phân phối của công ty hiện có mà không áp dụng bất kỳ bộ lọc nào. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn * Không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách đơn hàng theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:**     * Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách đơn hàng của công ty    * Các điều kiện trong vùng tìm kiếm kết hợp với nhau bằng điều kiện "VÀ" 3. **Hiển thị kết quả:** danh sách đơn hàng sẽ cập nhật và hiển thị phù hợp với các tiêu chí đã chọn. |
| **Grid danh sách đơn hàng** | | | | |
| Checkbox | checkbox | Có | Không | * Check box cho phép chọn các đơn hàng để thêm vào danh sách đơn hàng. * Cho phép chọn nhiều đơn hàng * Cho phép check All, checkbox CheckAll chỉ check trên 1 page   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt    Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Yes: Xóa tất cả các mục đã chọn; chọn No: Tắt popup và vẫn giữ nguyên trạng thái  Icon checkAll trên header hiển thị check khi tồn tại từ 1 check dưới lưới danh sách  -------  ***lưu ý:***   * Khi thao tác trên pop-up Chọn đơn hàng, thì ngoài danh sách đơn hàng của màn hình chính cũng update theo, và ngược lại * Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại  * Nếu xóa ngoài lưới danh sách thì khi mở popup này, filter dữ liệu, đơn hàng đã xóa sẽ thấy uncheck  * Mở Popup lần sau, khi chọn bộ lọc có đơn hàng đã chọn trước, màn hình vẫn hiển thị checked đối với các đơn hàng đã chọn |
| Mã đơn hàng | Datacolumn have copy | Không | Không | Mã của đơn hàng |
| Mã điểm bán | Datacolumn have copy | Không | Không | Mã của điểm bán trên đơn hàng |
| Tên điểm bán | Datacolumn | Không | Không | Tên của điểm bán trên đơn hàng |
| Ngày đặt hàng | Datacolumn | Không | Không | Thông tin Ngày đặt hàng của đơn hàng |
| Tổng tiền thanh toán (VNĐ) | Datacolumn | Không | Không | Thông tin tổng tiền thanh toán của đơn hàng |
| Nhân viên bán hàng | Datacolumn | Không | Không | Thông tin mã nhân viên - tên nhân viên trên đơn hàng  Nếu đơn hàng không có thông tin nhân viên thì cột này để trống |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Đồng ý** | Button | Có | Không | * Nút "**Đồng ý**" cho phép người dùng thêm danh sách đơn hàng đã chọn vào danh sách đơn hàng ở màn hình chính Xuất kho * Chỉ cho phép chọn những đơn hàng thỏa điều kiện theo quy tắc load đơn hàng từ document [[NPP] Xuất kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445066) * Trường hợp nhấn Đồng ý mà có những đơn hàng không thỏa điều kiện sẽ hiển thị thông báo:   + @Mã đơn hàng không đủ điều kiện xuất kho, vui lòng bỏ chọn!   + Mỗi mã đơn hàng lỗi cách nhau dấu phẩy.   + Hiển thị 10 mã đơn hàng lỗi đầu tiên, sau khi user điều chỉnh nhấn đồng ý tiếp theo thì nếu vẫn còn đơn hàng lỗi sẽ hiển thị tiếp 10 đơn lỗi tiếp theo. |

* Sau khi chọn đơn hàng thì ngoài màn hình chính sẽ hiển thị như hiện tại trên danh sách đơn hàng

# 2 Thêm chế độ in phiếu xuất kho tổng

* Khi chọn vào icon in trên phiếu xuất kho trên lưới danh sách → Hệ thống hiển thị popup để người dùng lựa chọn hình thức in phiếu xuất kho
  + Thông báo: Vui lòng chọn hình thức in phiếu xuất kho
  + In PXK lẻ: Chức năng in PXK như hiện tại không thay đổi
  + In PXK tổng: Làm mới chức năng này
* Khi chọn vào icon in trên phiếu xuất kho trên Chi tiết phiếu xuất kho, hệ thống cũng hiển thị thông báo lựa chọn tương tự

## 2.1 In Phiếu Xuất Kho Tổng

Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5744

* Form in phiếu xuất kho tổng sẽ chứa tất cả đơn hàng và tất cả sản phẩm đã chọn trên phiếu xuất kho
* Form in như sau:
* Sử dụng lại form in cũ và thay đổi các thông tin dưới đây:

| Tên Trường | Mô tả |
| --- | --- |
| Tên form in | Thay đổi thành: PHIẾU XUẤT KHO TỔNG |
| Tên khách hàng | Bỏ trường này |
| Ghi chú/Diễn giải | Bỏ trường này |
| Thêm thông tin đơn hàng | |
| Mã đơn hàng | Thông tin mã đơn hàng trên PXK |
| Mã điểm bán | Thông tin mã điểm bán trên PXK |
| Tên điểm bán | Thông tin tên điểm bán trên PXK |
| Nhân viên bán hàng | Thông tin Mã nhân viên - Tên nhân viên trên đơn hàng |
| Ngày đặt hàng | Thông tin ngày đặt hàng của đơn hàng trên PXK |
| Ghi chú | Thông tin ngày ghi chú của đơn hàng trên PXK |
| Thông tin sản phẩm | |
| Mã đơn hàng | Thêm thông tin mã đơn hàng trên PXK  Tương ứng mã đơn hàng cho từng dòng sản phẩm trên đơn hàng |
| Thông tin khuyến mại | |
|  |  |
| --- | --- |
| Mã đơn hàng | Thêm thông tin mã đơn hàng trên PXK  Tương ứng mã đơn hàng cho từng dòng khuyến mãi sản phẩm trên đơn hàng |
| Thông tin tổng | |
| Tổng tiền hàng | Tổng tiền hàng = Tổng Thanh toán trên tất cả đơn hàng trên PXK |
| Tổng chiết khấu | Tổng chiết khấu = Tổng tiền CK từ CTKM trên tất cả đơn hàng trên PXK |
| Tổng tiền | Tổng tiền hàng - Tổng tiền chiết khấu + Giảm trừ trên tất cả đơn hàng trên PXK |
|  |  |

# 3 Thay đổi thông tin NPP trên phiếu xuất kho

Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5745

**Hiện tại:** Thông tin công ty trên phiếu xuất kho đang lấy từ thông tin công ty Hương Thủy

**Cần điều chỉnh:** Thông tin công ty trên phiếu xuất kho sẽ lấy từ thông tin NPP thực hiện xuất kho, bao gồm:

* Logo công ty: Giữ như cũ của Hương Thủy.
* Đơn vị/ Business Unit: Lấy thông tin **Tên nhà phân phối**
* **Địa chỉ hóa đơn: Lấy thông tin **Địa chỉ, Quận huyện, Tỉnh Thành** của nhà phân phối**

**Áp dụng cho PXK Lẻ và PXK Tổng**