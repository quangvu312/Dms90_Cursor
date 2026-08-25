|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0 : Bổ sung filter theo kênh bán hàng  RedV1.2.0: Bổ sung tồn kho theo lot/date |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

---

# Xem báo cáo tồn kho khả dụng các sản phẩm hiện tại ở NPP

Hiển thị view báo cáo theo bảng config dưới đây. Danh sách cấu hình chung

| SHOW\_INVENTORY\_APP | LOT\_DATE\_CHECKING\_INVENTORY | DISPLAY\_LOT\_DATE\_IN\_SALES\_ORDER | Báo cáo tồn kho |
| --- | --- | --- | --- |
| SHOW\_INVENTORY\_APP = 0 | - | - | Ẩn báo cáo này, không phụ thuộc cấu hình khác |
| SHOW\_INVENTORY\_APP = 1 | LOT\_DATE\_CHECKING\_INVENTORY = 0 | - | Hệ thống không quản lý lô, nên chỉ hiển thị báo cáo dạng không lot/date  Show mục báo cáo ở mục  1 → Báo cáo tồn kho hiện tại NPP - Không có lot/date |
| SHOW\_INVENTORY\_APP = 1 | LOT\_DATE\_CHECKING\_INVENTORY = 1 | DISPLAY\_LOT\_DATE\_IN\_SALES\_ORDER = 0 | Hệ thống quản lý lô, mà đơn hàng ko hiển thị lô, nên báo cáo cũng không show lô  Show mục báo cáo ở mục  1 → Báo cáo tồn kho hiện tại NPP - Không có lot/date |
| SHOW\_INVENTORY\_APP = 1 | LOT\_DATE\_CHECKING\_INVENTORY = 1 | DISPLAY\_LOT\_DATE\_IN\_SALES\_ORDER = 1 | Hệ thống quản lý lô, đơn hàng hiển thị lô, nên báo cáo ở dạng có lot/date  Show mục báo cáo ở mục  2 → Báo cáo tồn kho hiện tại NPP - Có lot/date |

# 1/ Báo cáo tồn kho hiện tại NPP - Không có lot/date

| Chức năng | Mô tả |
| --- | --- |
| TÌm kiếm | Cho phép nhập text tìm kiếm sản phẩm theo mã mã sản phẩm, tên sản phẩm   * Tooltip: Tìm kiếm theo Mã sản phẩm, Tên sản phẩm * Placeholder: Tìm kiếm theo Mã sản phẩm, Tên sản phẩm * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm → Trên danh sách sẽ hiển thị thông tin sản phẩm phù hợp với thông tin đã nhập (Search like) * Nếu kết quả trả về sản phẩm hiển thị trên 1 tab thì focus vào tab đó * Nếu kết quả trả về sản phẩm hiển thị trên nhiều tab thì focus vào tab đầu tiên |
| Thông tin đang xem | * Hiển thị thông tin nhà phân phối thuộc tuyến của nhân viên đang được chọn.   + Trường hợp Đổi NPP thì Bộ lọc sẽ reset lại như mặc định ban đầu |
| Bộ lọc | **Tab Lọc:** Có thể lọc theo các thông tin: Kho, Phân cấp sản phẩm   * Button back: Trở lại lưới danh sách, không áp dụng điều kiện lọc, không cần hiển thị cảnh báo.  ---   **Kho:**   * Hiển thị thông tin tất cả các Tên loại kho đang hoạt động của NPP * Chỉ được chọn 1 Kho * Bắt buộc phải chọn kho để xem báo cáo  ---   **RedV1.1.0 Kênh:**   * Hiển thị tất cả các Kênh bán hàng đang hoạt động trên hệ thống * Chỉ được chọn 1 kênh * Bắt buộc phải chọn kênh để xem báo cáo * Khi mở màn hình mặc định là kênh từ config SALE\_CHANNEL\_APP     **Phân cấp sản phẩm**: Lọc theo phân cấp sản phẩm   * Hiển thị danh sách ngành hàng từ cây phân cấp sản phẩm, ngành hàng sẽ hiển thị theo nhãn hàng được gán vào tuyến của nhân viên   + Nếu tuyến nhân viên có gán nhãn hàng: Chỉ hiển thị các ngành hàng của nhãn hàng trên tuyến   + Nếu tuyến nhân viên không gán nhãn hàng: Hiển thị tất cả ngành hàng. * n Ngành hàng: Bên dưới chọn bao nhiêu ngành hàng để lọc thì bên trên sẽ hiển thị số lượng ngành hàng (level 1) được chọn tương ứng. * Tìm kiếm: Nhập tên của ngành hàng để tìm kiếm.   + Nếu tuyến nhân viên có gán nhãn hàng: Chỉ tìm kiếm các ngành hàng của nhãn hàng trên tuyến   + Nếu tuyến nhân viên không gán nhãn hàng: Tìm kiếm trên tất cả ngành hàng. * Chỉ hiển thị các phân cấp sản phẩm đang Hoạt Động * Chỉ hiển thị các phân cấp của các sản phẩm thuộc NPP đã chọn. * Hiển thị 3 cấp cao nhất của phân cấp cây sản phẩm * Phân cấp sản phẩm được load từ phân cấp của các sản phẩm đang hiển thị trên lưới danh sách. ([Pending đợi dev hỗ trợ](https://hotro.finviet.com.vn/browse/ECD-4590)) * **Các trạng thái của checkbox**   + **Unchecked**: Không có mục nào được chọn.   + **Checked**: Tất cả mục con đều được chọn.   + **Indeterminate**: Một vài mục con được chọn, nhưng không phải tất cả.   + **All**: Tất cả các mục con được chọn * **Nguyên tắc hoạt động**   + **Checkbox cho mỗi cấp**:      - Cấp 1: Checkbox kiểm soát tất cả các mục con (Cấp 2 và Cấp 3) bên trong.     - Cấp 2: Checkbox kiểm soát các mục thuộc Cấp 3 bên trong nó.     - Cấp 3: Checkbox chỉ kiểm soát chính nó.   + **Quan hệ cha-con**:      - Khi chọn/bỏ chọn checkbox ở cấp cha (Cấp 1 hoặc Cấp 2), tất cả các checkbox cấp con (Cấp 2 hoặc Cấp 3) sẽ tự động chọn/bỏ chọn.     - Khi tất cả các checkbox con của một cấp được chọn, checkbox cấp cha tự động được chọn. Nếu một số nhưng không phải tất cả checkbox con được chọn, checkbox cha ở trạng thái "indeterminate" (trạng thái trung gian). * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào danh sách sản phẩm và reload danh sách sản phẩm hiển thị kết quả tìm kiếm |
| Còn tồn kho | * Hiển thị tất cả sản phẩm đang hoạt động và có bất cứ đơn vị có tồn kho khả dụng > 0 tại NPP theo kênh bán hàng mặc định tại config SALE\_CHANNEL\_APP   + Nếu tuyến nhân viên có gán nhãn hàng: Chỉ hiển thị các sản phẩm thuộc nhãn hàng trên tuyến của nhân viên   + Nếu tuyến nhân viên không gán nhãn hàng: Hiển thị tất cả sản phẩm.   + ~~Sản phẩm phải có giá bán > 0~~   + Sản phẩm phải có trạng thái Đang hoạt động * **Loại kho mặc định = Kho bán** * **Kho vật lý mặc định** được lấy từ:   + Nếu nhân viên đang login (đang được chọn) có kho mặc định thì lấy từ kho mặc định của nhân viên (Direct Sales của Hương Thủy). Sắp xếp kho mặc định của nhân viên lên đầu tiên.   + Nếu nhân viên đang login (đang được chọn) Không có kho mặc định thì lấy kho đầu tiên trong danh sách kho. * Thông tin bao gồm: * Hình ảnh sản phẩm:   + Hiển thị hình ảnh của sản phẩm   + Trường hợp sản phẩm không có hình ảnh, hiển thị hình ảnh mặc định * Tên sản phẩm * Thông tin sản phẩm:   + Mã sản phẩm   + VAT: Mức thuế của sản phẩm   + Đơn vị: Tất cả cac đơn vị của sản phẩm   + Giá bán: Thông tin giá bán của sản phẩm ở thời điểm xem báo cáo   + Tồn kho: Thông tin tồn kho khả dụng hiện tại của sản phẩm tại kho được chọn của NPP theo từng đơn vị, tồn kho khả dụng hiển thị số nguyên   + Nhóm sản phẩm: Thông tin tên nhóm sản phẩm của sản phẩm   + Nhãn hàng: Thông tin tên nhãn hàng của sản phẩm   + Ngành hàng: Thông tin tên ngành hàng của sản phẩm |
| Hết tồn kho | Thông tin sản phẩm giống tab Còn tồn kho nhưng sẽ hiển thị các sản phẩm có tồn kho khả dụng <= 0 ở tất cả đơn vị theo kho được chọn |

2/ Báo cáo tồn kho hiện tại NPP - Có lot/date

RedV1.2.0: Bổ sung tồn kho theo lot/date

| Màn hình | Mô tả |
| --- | --- |
|  | Các thông tin NPP, Kho, Bộ lọc giống ở trường hợp mục 1   * Bổ sung icon để xem theo lô trên từng đơn vị của từng sản phẩm, khi nhấn vào hiển thị giao diện như sau:  | Giao diện lô/date | Mô tả | | --- | --- | |  | * Trên mỗi đơn vị của sản phẩm sẽ có thêm danh sách lô. hạn sử dụng và số lượng tồn kho hiện tại tương ứng của từng lô theo kho và kênh đã chọn  * Trường hợp đơn vị không có lot/date thì sẽ ẩn button expand/collapse * Khi sản phẩm có >=2 đơn vị được expand xem lô thì sẽ hiển thị button Thu gọn Lô/date trên từng sản phẩm   + Khi nhấn Thu gọn Lô/date, giao diện sẽ trở về như ban đầu lúc chưa Expand cho tất cả đơn vị và button này ẩn đi          * Khi có 1 đơn vị bất kỳ được expand để xem theo lô, trên header Danh sách sản phẩm sẽ có button Thu gọn Lô/date   + Khi nhấn Thu gọn Lô/date, giao diện sẽ trở về như ban đầu lúc chưa Expand cho tất cả đơn vị và tất cả SKU và button này ẩn đi   + Khi người dùng thực hiện scroll báo cáo, phần này  sẽ được neo đầu báo cáo | |