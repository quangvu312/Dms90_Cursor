|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chức năng hỗ trợ người dùng HO import tồn kho đầu kỳ của NPP |
| Document version | RedV1.0.0  RedV1.1.0:   * Update cho trường hợp NPP đã có khóa sổ và chưa phát sinh giao dịch trong nhiều thán * Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5101     RedV1.2.0:   * Update kiểm tra các giao dịch, có giao dịch mà giao dịch bị hủy thì cũng tính là chưa có giao dịch * Cho import sản phẩm có số lượng = 0 * Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5102    RedV1.3.0:   * Cho phép import sản phẩm mới, sản phẩm chưa phát sinh giao dịch nào trên NPP (Mặc dù NPP đã có phát sinh giao dịch của sản phẩm khác) * Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5403   RedV1.4.0:   * Import sản phẩm mới, sản phẩm chưa phát sinh giao dịch nào trên NPP phải check kèm theo kênh và kho * Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5542 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Import tồn kho đầu kỳ NPP

Đường dẫn: Quản lý kho → Import tồn kho đầu kỳ NPP

Phân quyền theo tài liệu: [[HO & NPP] Phân quyền dữ liệu](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53046920)

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Chọn NPP | Selectbox One Choice | Có | Có | Load all danh sách NPP để user chọn để nhập tồn kho đầu kỳ  Chỉ chọn 1 NPP  Bắt buộc chọn |
| Chọn tháng | Month/Year | Có | Có | * RedV1.1.0Trường hợp NPP chưa thực hiện khóa sổ tháng  * + Hiển thị ô chọn tháng để user chọn tháng import đầu kỳ   + Làm mờ các tháng hiện tại + 1 để user không chọn được   + Chỉ cho chọn các tháng từ hiện tại đổ về trước, không cho phép chọn tháng tương lai   + VD hiện tại tháng 9, chỉ được chọn 9, 8 ,7,...Không được chọn tháng 10 * Trường hợp NPP đã có thực hiện khóa sổ tháng   + Tìm tháng khóa sổ xa nhất của NPP   + Tháng import tồn kho đầu kỳ = Tháng khóa sổ xa nhất + 1   + Chỉ hiển thị đúng tháng này trên ô để user import tồn kho đầu kỳ, các tháng còn lại sẽ disable không chọn được.   + Ví dụ:     - Ví dụ hiện tại đang có khóa sổ tháng 9, 10, 11, 12/2025     - Mà user họ muốn import tồn đầu kỳ cho sản phẩm nào đó vào tháng 10, thì họ phải thực hiện mở khóa sổ tháng 12, 11, 10     - Nghĩa là lúc này mình trả ra tháng khóa sổ xa nhất là tháng 9/2025     - Họ sẽ chọn được tháng 10/2025 để thực hiện import đầu kỳ     - Tại vì muốn import đầu kỳ cho hệ thống là phải thực hiện đầu tiên không phát sinh giao dịch * Lưu ý trường hợp tạo mới NPP sẽ tự động khóa sổ, chi tiết như sau:   + [Tài liệu khi tích hợp Hương Thủy](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66523750#id-%5BHT%5DTàiliệutíchhợpERP-1.2.8ThôngtinNhàphânphối(DistributorMaster))   + [Chức năng tạo mới NPP trên CORE DMS90](https://kb.finviet.com.vn/pages/viewpage.action?pageId=79889727#id-%5BHO%5DNhàphânphối-Mànhìnhtạomớinhàphânphối) |
| Import excel | Button | Có | Không | Chọn template để tiến hành import |

# Import Tồn kho đầu kỳ

* **Chức năng**: Cho phép người dùng (Admin) tải lên file dữ liệu để nhập kho hàng loạt cho NPP.
* **Định dạng tệp hỗ trợ**: Chấp nhận các tệp định dạng **Excel (XLS/XLSX)** để tiện lợi cho việc nhập liệu hàng loạt.
* Template Import:
* File import tối đa 5000 dòng, trường hợp > 5000 dòng sẽ hiển thị thông báo: Vui lòng import file tối đa 5000 dòng
* **Nhấn vào button Import**

  + Người dùng chọn button Import và tải lên file dữ liệu từ máy tính.
  + Hệ thống sẽ xác thực định dạng file và kiểm tra từng dòng trong file dữ liệu với các ràng buộc và yêu cầu của từng trường dữ liệu
* **Rule chung cho trường hợp cập nhật import**: Nếu cập nhật không nhập dữ liệu vào các ô không bắt buộc thì sẽ hiểu là không cập nhật thông tin và giữ nguyên dữ liệu cũ.

|  | Tên trường | Bắt buộc nhập | Mô tả |
| --- | --- | --- | --- |
| 3 | Kho | Có | File excel định dạng selectbox onechoice, đổ sẵn dữ liệu Kho (active) mới nhất để user chọn  User chọn kho để nhập kho.Hiển thị Mã kho - Tên kho  Không được để trống hoặc nhập dữ liệu từ ngoài vào. Nếu sai sẽ báo lỗi: "Kho dòng n không hợp lệ hoặc bị bỏ trống, vui lòng kiểm tra lại!"  **Tạm thời phase 1 user nhập mã kho để import, phase 2 sẽ bổ sung dạng select box. Sử dụng mã kho ở trường warehouse\_code. Ví dụ S003** |
| 4 | Kênh bán hàng | Có | File excel định dạng selectbox onechoice, đổ sẵn dữ liệu Kênh (active) mới nhất để user chọn  User chọn Kênh để nhập kho. Hiển thị Mã kênh bán hàng - Tên kênh bán hàng  Không được để trống hoặc nhập dữ liệu từ ngoài vào. Nếu không đúng hệ thống cấu hình sẽ báo lỗi: "Kênh bán hàng dòng n không hợp lệ hoặc bị bỏ trống, vui lòng kiểm tra lại!"  **Tạm thời phase 1 user nhập mã kênh để import, phase 2 sẽ bổ sung dạng select box. Mã kênh sử dụng trường code. Ví dụ FV147** |
| 5 | Mã sản phẩm | Có | Phải là mã sản phẩm tồn tại trong danh mục sản phẩm của hệ thống.  Mã sản phẩm phải đang hoạt động.  Không được để trống hoặc nhập không đúng mã sản phẩm.  Nếu sai sẽ báo lỗi: "Mã sản phẩm dòng n nhập không đúng định dạng, không tồn tại hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 6 | Tên sản phẩm | Không | Trường mô tả để người dùng kiểm tra dữ liệu trước khi import  Hệ thống không kiểm tra dữ liệu.  Có thể để trống. |
| 7 | Mã Lô | Có | Không được để trống.  Không chứa ký tự đặc biệt.  Nếu sai sẽ báo lỗi: "Mã lô dòng n nhập không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại!"  Nhập tối đa 20 ký tự, nếu nhiều hơn hiển thị lỗi: "Mã lô dòng n vui lòng nhập tối đa 20 ký tự, vui lòng kiểm tra lại!" |
| 8 | Hạn sử dụng | Có | Định dạng dd-mm-yyyy.  Không được để trống.  Nếu sai định dạng hoặc để trống sẽ báo lỗi: "Hạn sử dụng dòng n không đúng định dạng hoặc bị bỏ trống, vui lòng kiểm tra lại!" |
| 9 | Ngày sản xuất | Không | Định dạng dd-mm-yyyy.  Ngày sản xuất < Hạn sử dụng  Nếu sai định dạng sẽ báo lỗi: "Ngày sản xuất dòng n không đúng định dạng, vui lòng kiểm tra lại!"  Nếu ngay sản xuất nhập >= Hạn sử dụng sẽ báo lỗi: "Ngày sản xuất dòng n phải nhỏ hơn hạn sử dụng, vui lòng kiểm tra lại!"  Nếu user không nhập thì ko validate và lưu trống |
| 10 | Số lượng | Có | RedV1.2.0 Phải là số >= 0  Không được để trống.  Nếu sai sẽ báo lỗi: "Số lượng dòng n không hợp lệ hoặc bị bỏ trống, vui lòng kiểm tra lại!"  Nhập tối đa 6 ký tự (max = 999999), nếu nhiều hơn hiển thị lỗi: "Số lượng dòng n vui lòng nhập tối đa 6 ký tự, vui lòng kiểm tra lại!" |
| 11 | Lưu |  | Thực hiện kiểm tra:   * Trên file import như sau:   + Nếu NPP chưa phát sinh bất kỳ giao dịch nào (NPP mới hoàn toàn) → Cho phép import bình thường (RedV1.2.0: Các giao dịch trên nếu có tồn tại nhưng ở trạng thái <đã hủy, đã xóa, đã từ chối> thì cũng sẽ được tính là chưa phát sinh giao dịch)   + RedV1.3.0  RedV1.4.0   + **Khi NPP đã phát sinh giao dịch:** Khi Nhà Phân Phối (NPP) đã có phát sinh giao dịch trên hệ thống, hệ thống sẽ thực hiện kiểm tra theo từng dòng sản phẩm trong file import tồn kho đầu kỳ.      - Hệ thống sử dụng **tổ hợp khóa kiểm tra** gồm: **Mã sản phẩm + Kho bán hàng + Kênh bán hàng**     - **Chỉ cho phép import tồn kho đầu kỳ** đối với các sản phẩm **chưa từng phát sinh giao dịch** theo đúng tổ hợp: **Mã sản phẩm – Kho bán hàng – Kênh bán hàng**     - **Không cho phép import** trong trường hợp: Sản phẩm đã có phát sinh giao dịch tại **cùng Mã sản phẩm + cùng Kho bán hàng + cùng Kênh bán hàng**.     - **Cho phép import** trong trường hợp:        * Cùng Mã sản phẩm, nhưng:          + Thuộc Kho bán hàng khác, hoặc         + Thuộc Kênh bán hàng khác → vẫn được xem là chưa phát sinh giao dịch, nên được phép import tồn kho đầu kỳ.     - Thông báo lỗi hiển thị Nếu phát hiện dòng dữ liệu không hợp lệ, hệ thống hiển thị thông báo: Dòng {n}: Sản phẩm đã phát sinh giao dịch trên hệ thống, không thể thực hiện import tồn kho đầu kỳ.     - * Người dùng bắt buộc phải loại bỏ dòng sản phẩm không hợp lệ khỏi file import       * Sau đó mới có thể thực hiện import lại.     - Các dòng sản phẩm chưa phát sinh giao dịch theo NPP + Kho + Kênh bán hàng → Được phép import tồn kho đầu kỳ bình thường.     - Tất cả sản phẩm đều đã phát sinh giao dịch, hiển thị báo lỗi: Đã tồn tại giao dịch trên hệ thống, không thể thực hiện import tồn kho đầu kỳ.   + Các giao dịch được kiểm tra: Được mô tả bên dưới * Có thể import tồn kho đầu kỳ nhiều lần (chỉ áp dụng trong trường hợp chưa phát sinh giao dịch khác Hủy)   + Nếu sản phẩm chưa có tồn kho trong hệ thống: thêm mới tồn kho   + Nếu sản phẩm đã có tồn kho trong hệ thống     - Nếu trong file import lần 2 trở đi có sản phẩm:       * Ghi đè thông tin của SKU, Kho, kênh có trong file import         + Ví dụ:           - Nhập Hàng - SP Khuyến mãi rồi →  sau đó import tồn có SKU, Kho, Kênh của hàng KM => Báo lỗi đã phát sinh giao dịch           - SP Khuyến mãi - đã có Đơn sell-out rồi, Đơn sell-out có :             * SP Mua thuộc kho bán, kênh GT             * SP KM thuộc kho KM, kênh GT             * →  Import tồn SP KM, Kho KM, Kênh GT, báo lỗi đã phát sinh giao dịch       * User phải nhập full thông tin lô của sản phẩm nếu muốn thay đổi, vì hệ thống sẽ xóa hết lô cũ và thêm vào lô mới     - Nếu trong file import lần 2 trở đi không có sản phẩm: Giữ nguyên thông tin tồn kho trên hệ thống * Thực hiện kiểm tra các thông tin trong file import * Sau khi kiểm tra hoàn tất   + Lưu thông tin ngày nhập kho = ngày cuối  cùng của (tháng được chọn - 1)     - Ví dụ đang chọn tháng 9, thì ngày nhập kho = 31/08   + Lưu thông tin tồn kho theo từng lô và theo đơn vị cơ bản của sản phẩm   + RedV1.1.0     - Trường hợp NPP chưa có khóa sổ bất kỳ tháng nào       * Thực hiện khóa sổ kho của (tháng được chọn - 1)       * Ví dụ đang chọn tháng 9, thì khóa sổ kho tháng 8       * Trường hợp NPP đã có khóa sổ tháng liền trước thì không thực hiện khóa sổ nữa     - Trường hợp NPP đã có khóa sổ các tháng sau tháng import tồn đầu kỳ, hiển thị thông báo: Vui lòng mở khóa sổ tất cả các tháng từ tháng "@tháng được chọn" để thực hiện import đầu kỳ!       * Ví dụ:         + Ví dụ hiện tại đang có khóa số tháng 9, 10, 11, 12/2025         + Mà user họ muốn import tồn đầu kỳ cho sản phẩm nào đó vào tháng 10, thì họ phải thực hiện mở khóa sổ tháng 12, 11, 10         + Lúc này sẽ trả ra thông báo: Vui lòng mở khóa sổ tất cả các tháng từ tháng 10 để thực hiện import đầu kỳ! |
|  | Bảng thông báo |  | * File import: Tên file import * Thời gian import: Thời gian user thực hiện nhấn import (Tiến hành xử lý import) * Trạng thái: **Phase 1 sẽ tạm thời báo lỗi chung cho toàn file, là import thất bại, dev sẽ hỗ trợ xem log và báo user điều chỉnh lỗi sai, phase 2 sẽ theo process import chung của toàn hệ thống.** |

# Các giao dịch trên hệ thống để thực hiện kiểm tra khi import tồn kho đầu kỳ

|  | Giao dịch | Ghi chú |
| --- | --- | --- |
| 1 | ~~Purchase Orders~~ | KHÔNG CHECK GIAO DỊCH ĐƠN PO DO KHÔNG ẢNH HƯỞNG NGHIỆP VỤ KHO |
| 2 | ~~Sell in~~ | KHÔNG CHECK GIAO DỊCH ĐƠN Sellin  DO KHÔNG ẢNH HƯỞNG NGHIỆP VỤ KHO |
| 3 | Nhập Hàng | KHÔNG CHECK GIAO DỊCH NHẬP HÀNG Ở TRẠNG THÁI KHỞI TẠO (do chưa có kho, kênh)  Chỉ cần check status = Đã duyệt cho phiếu nhập hàng |
| 4 | Trả Hàng NCC |  |
| 5 | Trả Hàng Nguyên Đơn |  |
| 6 | Đơn Bán Hàng |  |
| 7 | Điểm bán trả hàng lẻ |  |
| 8 | Điểm bán trả hàng nguyên đơn |  |
| 9 | Xuất Kho |  |
| 10 | Kiểm kho |  |
| 11 | Chuyển Kho Nội Bộ |  |
| 12 | Chuyển Kho vansales |  |
| 13 | Chuyển Kho NPP |  |