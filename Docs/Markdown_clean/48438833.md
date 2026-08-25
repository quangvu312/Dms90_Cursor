|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic | [[ECDM-223] AREA - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-223) |
| Feature |  |
| Description | 1 Công ty có thể có nhiều Vùng  1 Vùng có thể có nhiều khu vực  1 khu vực có thể có nhiều Tỉnh/Thành Phố  Có thể chọn 1 số quận huyện thuộc tỉnh.thành phố  Nếu không chọn sẽ mặc định chọn tất cả quận/huyện |
| Document version | RedV1.0.1: Ràng buộc:   * Tỉnh thành phố có thể thuộc nhiều khu vực * Quận/huyện chỉ thuộc 1 khu vực   RedV1.0.2: Bỏ thông tin công ty trong các phần lịch sử |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Cấu hình phân cấp vùng

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Cáu hình Phân Cấp Vùng  Hiển thị 4 phân cấp Vùng, Khu Vực, Tỉnh/Thành Phố, Quận/Huyện theo từng phân cấp | | | | |
| Vùng |  |  |  |  |
| Tên vùng | Label | Không | N/A | * Hiển thị danh sách các Vùng của công ty. |
|  | Button | Có | Không | **Tab Thông Tin**   * Click button này để xem chi tiết Vùng như sau:      * Mã vùng: Mã của vùng * Tên vùng: Tên của Vùng   **Tab Lịch Sử:**  Chức năng sẽ được mô tả ở phần Lịch Sử Vùng |
|  | Button | Có | Không | **Mô tả tổng quan:** Toggle trạng thái cho phép người dùng dễ dàng chuyển đổi giữa hai trạng thái "Hoạt động" và "Ngưng hoạt động" của Vùng. Khi người dùng nhấp vào toggle, trạng thái hiện tại của Vùng sẽ thay đổi ngay lập tức, và hệ thống sẽ phản ánh sự thay đổi này trong cơ sở dữ liệu cũng như giao diện người dùng.  **Chi tiết hoạt động:**   1. **Kích hoạt:** Người dùng nhấp vào toggle trạng thái trên giao diện. 2. **Chuyển đổi trạng thái:** Khi toggle được nhấp, hệ thống hiển thị cảnh báo:      * + - Đồng ý: trạng thái của Vùng sẽ thay đổi từ "Hoạt động" sang "Không hoạt động" hoặc ngược lại.     - Hủy: Đóng cảnh báo và giữ nguyên trạng thái Vùng.  1. * **Trạng thái Hoạt động:**Vùng đang được sử dụng trong hệ thống.    * **Trạng thái Không hoạt động:**      + Vùng không còn được sử dụng trong hệ thống nhưng vẫn được lưu trữ trong cơ sở dữ liệu để theo dõi lịch sử hoặc kích hoạt lại sau này.      + Các dữ liệu giao dịch liên quan đến Vùng như vẫn hiển thị dữ liệu Vùng. 2. **Cập nhật giao diện:**Giao diện người dùng sẽ hiển thị ngay trạng thái mới của Vùng bằng cách thay đổi màu sắc hoặc nhãn trên toggle. 3. **Ghi nhận thay đổi:** Hệ thống sẽ cập nhật cơ sở dữ liệu với trạng thái mới của Vùng, đảm bảo rằng các thao tác liên quan đến Vùng này sẽ tuân theo trạng thái mới.   **Yêu cầu hệ thống:**   * Hệ thống phải thực hiện kiểm tra quyền truy cập để đảm bảo rằng chỉ những người dùng có quyền hợp lệ mới có thể thay đổi trạng thái. * Trạng thái phải được đồng bộ hóa ngay lập tức trong cơ sở dữ liệu để đảm bảo tính nhất quán của dữ liệu.   **Quy trình nghiệp vụ:**   1. Người dùng xác định Vùng muốn thay đổi trạng thái. 2. Nhấp vào toggle trạng thái tương ứng. 3. Hệ thống chuyển đổi trạng thái Vùng và cập nhật trạng thái mới trên giao diện. 4. Các thao tác tiếp theo với Vùng này sẽ tuân theo trạng thái mới. |
|  | Button | Có | Không | **Mô tả tổng quan:** Button "Chỉnh sửa Vùng" cho phép người dùng truy cập vào chế độ chỉnh sửa của một Vùng đã có trong hệ thống. Khi người dùng nhấp vào button này, một màn hình chi tiết sẽ hiển thị, cho phép người dùng chỉnh sửa các thuộc tính và thông tin liên quan đến Vùng đó. Chức năng này thường được sử dụng để cập nhật một số thông tin của Vùng.  **Chi tiết hoạt động:**   1. **Kích hoạt:** Người dùng nhấp vào button "Chỉnh sửa Vùng" trên giao diện danh sách Vùng. 2. **Hiển thị màn hình:** Hệ thống sẽ mở ra màn hình Chỉnh sửa Vùng chứa toàn bộ thông tin hiện tại của Vùng. Màn hình giống như màn hình tạo mới 3. **Chỉnh sửa thông tin:** **Người dùng có thể chỉnh sửa tất cả các trường thông tin của Vùng ngoại trừ "Mã Vùng"** 4. **Lưu thay đổi:** Sau khi hoàn tất chỉnh sửa, người dùng nhấp vào button "Đồng Ý" để cập nhật các thay đổi vào cơ sở dữ liệu. 5. **Xác nhận và phản hồi:** Hệ thống sẽ xác nhận và lưu trữ các thay đổi, sau đó phản hồi lại người dùng bằng cách hiển thị thông báo thành công.   **Yêu cầu hệ thống:**   * Hệ thống phải đảm bảo rằng chỉ những người dùng có quyền mới có thể truy cập và chỉnh sửa thông tin Vùng. * Các trường thông tin bắt buộc cần được kiểm tra trước khi lưu để tránh việc lưu dữ liệu không đầy đủ hoặc sai sót.   **Quy trình nghiệp vụ:**   1. Người dùng tìm kiếm và xác định Vùng cần chỉnh sửa từ danh sách. 2. Nhấp vào button "Chỉnh sửa Vùng" để mở màn hình chỉnh sửa. 3. Thực hiện các thay đổi cần thiết trên màn hình. 4. Nhấp vào button "Đồng ý" để ghi lại các thay đổi vào hệ thống hoặc nhấn icon "X" để xóa bỏ thao tác chỉnh sửa và đóng màn hình chỉnh sửa. 5. Hệ thống sẽ xác nhận và cập nhật các thay đổi, đồng thời thông báo cho người dùng về kết quả. |
|  | Button | Có | Không | Button này chỉ hiển thị khi có ít nhất 1 khu vực thuộc vùng.  Khi nhấn vào button này, danh sách khu vực thuộc Vùng sẽ hiển thị bên phân cấp Khu Vực |
| Khu Vực |  |  |  |  |
| Tên khu vực | Label | Không | N/A | * Hiển thị danh sách các khu vực thuộc vùng đã chọn của công ty. |
|  | Button | Có | Không | **Tab Thông Tin**   * Click button này để xem chi tiết khu vực như sau:      * Vùng: Thông tin Vùng của khu vực * Mã khu vực: Mã của khu vực * Tên khu vực: Tên của khu vực   **Tab Lịch Sử:**  Chức năng sẽ được mô tả ở phần Lịch Sử Khu Vực |
|  | Button | Có | Không | **Mô tả tổng quan:** Toggle trạng thái cho phép người dùng dễ dàng chuyển đổi giữa hai trạng thái "Hoạt động" và "Ngưng hoạt động" của khu vực. Khi người dùng nhấp vào toggle, trạng thái hiện tại của khu vực sẽ thay đổi ngay lập tức, và hệ thống sẽ phản ánh sự thay đổi này trong cơ sở dữ liệu cũng như giao diện người dùng.  **Chi tiết hoạt động:**   1. **Kích hoạt:** Người dùng nhấp vào toggle trạng thái trên giao diện. 2. **Chuyển đổi trạng thái:** Khi toggle được nhấp, hệ thống hiển thị cảnh báo:      * + - Đồng ý: Trạng thái của khu vực sẽ thay đổi từ "Hoạt động" sang "Không hoạt động" hoặc ngược lại.     - Hủy: Đóng cảnh báo và giữ nguyên trạng thái khu vực.  1. * **Trạng thái Hoạt động:** Khu vực đang được sử dụng trong hệ thống.    * **Trạng thái Không hoạt động:**      + Khu vực không còn được sử dụng trong hệ thống nhưng vẫn được lưu trữ trong cơ sở dữ liệu để theo dõi lịch sử hoặc kích hoạt lại sau này.      + Các dữ liệu giao dịch liên quan đến khu vực như vẫn hiển thị dữ liệu khu vực. 2. **Cập nhật giao diện:**Giao diện người dùng sẽ hiển thị ngay trạng thái mới của khu vực bằng cách thay đổi màu sắc hoặc nhãn trên toggle. 3. **Ghi nhận thay đổi:** Hệ thống sẽ cập nhật cơ sở dữ liệu với trạng thái mới của khu vực, đảm bảo rằng các thao tác liên quan đến khu vực này sẽ tuân theo trạng thái mới.   **Yêu cầu hệ thống:**   * Hệ thống phải thực hiện kiểm tra quyền truy cập để đảm bảo rằng chỉ những người dùng có quyền hợp lệ mới có thể thay đổi trạng thái. * Trạng thái phải được đồng bộ hóa ngay lập tức trong cơ sở dữ liệu để đảm bảo tính nhất quán của dữ liệu.   **Quy trình nghiệp vụ:**   1. Người dùng xác định khu vực muốn thay đổi trạng thái. 2. Nhấp vào toggle trạng thái tương ứng. 3. Hệ thống chuyển đổi trạng thái khu vực và cập nhật trạng thái mới trên giao diện. 4. Các thao tác tiếp theo với khu vực này sẽ tuân theo trạng thái mới. |
|  | Button | Có | Không | **Mô tả tổng quan:** Button "Chỉnh sửa khu vực" cho phép người dùng truy cập vào chế độ chỉnh sửa của một khu vực đã có trong hệ thống. Khi người dùng nhấp vào button này, một màn hình chi tiết sẽ hiển thị, cho phép người dùng chỉnh sửa các thuộc tính và thông tin liên quan đến khu vực đó. Chức năng này thường được sử dụng để cập nhật một số thông tin của khu vực.  **Chi tiết hoạt động:**   1. **Kích hoạt:** Người dùng nhấp vào button "Chỉnh sửa khu vực" trên giao diện danh sách khu vực. 2. **Hiển thị màn hình:** Hệ thống sẽ mở ra màn hình Chỉnh sửa khu vực chứa toàn bộ thông tin hiện tại của khu vực. Màn hình giống như màn hình tạo mới 3. **Chỉnh sửa thông tin:**     1. **Người dùng có thể chỉnh sửa tất cả các trường thông tin của khu vực ngoại trừ "Mã khu vực"**    2. RedV1.0.1: Khi chỉnh sửa phải kiểm tra, Quận/Huyện chỉ thuộc 1 khu vực trên toàn hệ thống, không được trùng (Chỉ kiểm tra trên các khu vực đang active, các khu vực inactive không cần kiểm tra). 4. **Lưu thay đổi:** Sau khi hoàn tất chỉnh sửa, người dùng nhấp vào button "Đồng Ý" để cập nhật các thay đổi vào cơ sở dữ liệu. 5. **Xác nhận và phản hồi:** Hệ thống sẽ xác nhận và lưu trữ các thay đổi, sau đó phản hồi lại người dùng bằng cách hiển thị thông báo thành công.   **Yêu cầu hệ thống:**   * Hệ thống phải đảm bảo rằng chỉ những người dùng có quyền mới có thể truy cập và chỉnh sửa thông tin khu vực. * Các trường thông tin bắt buộc cần được kiểm tra trước khi lưu để tránh việc lưu dữ liệu không đầy đủ hoặc sai sót.   **Quy trình nghiệp vụ:**   1. Người dùng tìm kiếm và xác định khu vực cần chỉnh sửa từ danh sách. 2. Nhấp vào button "Chỉnh sửa khu vực" để mở màn hình chỉnh sửa. 3. Thực hiện các thay đổi cần thiết trên màn hình. 4. Nhấp vào button "Đồng ý" để ghi lại các thay đổi vào hệ thống hoặc nhấn icon "X" để xóa bỏ thao tác chỉnh sửa và đóng màn hình chỉnh sửa. 5. Hệ thống sẽ xác nhận và cập nhật các thay đổi, đồng thời thông báo cho người dùng về kết quả. |
|  | Button | Có | Không | Button này chỉ hiển thị khi có ít nhất 1 Tỉnh/Thành Phố thuộc khu vực.  Khi nhấn vào button này, danh sách Tỉnh/Thành Phố thuộc khu vực sẽ hiển thị bên phân cấp Tỉnh/Thành Phố |
| Tỉnh/Thành Phố |  |  |  |  |
| Tên Tỉnh/Thành Phố | Label | Không | N/A | * Hiển thị danh sách các Tỉnh/Thành Phố thuộc khu vực đã chọn của công ty. |
|  | Button | Có | Không | Button này chỉ hiển thị khi có ít nhất 1 Quận/Huyện thuộc Tỉnh/Thành Phố.  Khi nhấn vào button này, danh sách Quận/Huyện thuộc Tỉnh/Thành Phố sẽ hiển thị bên phân cấp Quận/Huyện |
| Quận/Huyện |  |  |  |  |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Tên Quận/Huyện | Label | Không | N/A | * Hiển thị danh sách các Quận/Huyện thuộc Tỉnh/Thành Phố đã chọn của công ty. |
| Cây Phân Cấp Vùng Hiển thị 4 phân cấp Vùng, Khu Vực, Tỉnh/Thành Phố, Quận/Huyện theo cấu trúc cây phân cấp. Chỉ hiện thị dữ liệu đang hoạt động     * Tìm kiếm:   + Nhấn vào ô tìm kiếm và tìm kiếm theo Mã vùng, tên vùng. mã khu vực, tên khu vực   + Sau khi tìm kiếm sẽ hiển thị các vùng, khu vực dựa trên kết quả tìm kiếm   + Trường hợp tìm kiếm khu vực sẽ hiển thị thêm vùng của khu vực đó để cấu thành phân cấp * : Nhấn icon này để mở rộng 1 phân cấp từ phân cấp đang chọn, sau khi nhấn sẽ thay đổi thành icon * : Nhấn icon này để thu gọn 1 phân cấp từ phân cấp đang chọn, sau khi nhấn sẽ thay đổi thành icon * :   + Nhấn icon này để mở rộng toàn bộ phân cấp từ phân cấp đang chọn, sau khi nhấn sẽ thay đổi thành icon   + Icon này chỉ hiển thị ở phân cấp Vùng và Khu Vực * :   + Nhấn icon này để thu gọn toàn bộ phân cấp từ phân cấp đang chọn, sau khi nhấn sẽ thay đổi thành icon   + Icon này chỉ hiển thị ở phân cấp Vùng và Khu Vực | | | | |

## Tạo Vùng

| Tên Trường | Loại dữ liệu/Loại field | Chỉnh sửa? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Mã Vùng | Text (input) | Có | Có | Mã nhận diện duy nhất của vùng, nằm trong một công ty nhất định.  Mã vùng không được trùng trong cùng 1 công ty  Độ dài tối đa: 20 ký tự.  Chỉ chứa chữ cái và số (A-Z, 0-9), không chứa khoảng trắng, không chứa ký tự đặc biệt ngoại trừ gạch dưới (\_). |
| Tên Vùng | Text (input) | Có | Có | Tên định danh của vùng, giúp nhận diện vùng dễ dàng hơn trong hệ thống.  Tên vùng có thể trùng  Độ dài tối đa: 100 ký tự.  Cho phép chứa chữ cái, số, khoảng trắng và các ký tự đặc biệt |
| Lưu | Button | Có | Không | Sau khi người dùng đã nhập đầy đủ thông tin, button này sẽ lưu lại vùng mới vào hệ thống.   * Hệ thống cần kiểm tra tính duy nhất của Mã vùng trước khi lưu. * Các trường bắt buộc phải được nhập đầy đủ trước khi cho phép lưu thông tin. |
| Đóng | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. |

## Lịch sử Vùng History\_Vung

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Chọn thời gian xem lịch sử (Tối đa 31 ngày) | Date | Có | Có | * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn * Hiển thị mặc định Từ ngày = Đến ngày = Ngày hiện tại  * Đến Ngày >= Từ Ngày * Đến Ngày - Từ Ngày <= 31 ngày * Có thể chọn bất kỳ khoảng thời gian nào, miễn là  Đến Ngày - Từ Ngày <= 31 ngày (Lượng data history sẽ được lưu trữ từ 1-3 năm tùy theo hợp đồng từng công ty) * Format: YYYY-MM-DD |
| Export | Button | Có | Có | Nhấn Export → Hệ thống Export ra file excel như sau:  Tên File Excel như sau: HIS\_REGION\_DDMMYYYYHHMMSS |

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Màn hình | * Tên màn hình mà người dùng xuất dữ liệu lịch sử |
| Dữ liệu theo thời gian | * Thời gian từ ngày - đến ngày mà người dùng lọc trước khi xuất file báo cáo lịch sử * Format: DD/MM/YYYY - DD/MM/YYYY |
| Thời gian xuất báo cáo | * Thời gian xuất báo cáo lịch sử  thành công * Format: DD/MM/YYYY HH:MM:SS |
| Người xuất báo cáo | * User thực hiện xuất báo cáo lịch sử  * Mã user - Tên user |
|  |  |
| Mã ghi nhận lịch sử | Mã ghi nhận lịch sử trong 1 lần cập nhật  Format mã: REGION\_13 ký tự timestamp |
| Thời gian ghi nhận | * Thời gian thực hiện cập nhật dữ liệu được hệ thống ghi nhận lịch sử.  * Format DD-MM-YYYY hh:mm |
| ~~RedV1.0.2 Công ty~~ | * ~~Mã công ty - Tên công ty của đối tượng ghi nhận lịch sử~~ |
| Đối tượng chính | Thông tin đối tượng trên màn hình chức năng được ghi nhận lịch sử  Ở đây sẽ là **Vùng** |
| Mã đối tượng chính | * **Mã vùng** |
| Trường dữ liệu | Thông tin trường dữ liệu có ghi nhận lịch sử |
| Thao tác | Thao tác ghi nhận lịch sử:   * Cập nhật:   + Đổi tên vùng   + Cập nhật trạng thái: Tên trạng thái |
| Dữ liệu cũ | Thông tin dữ liệu cũ trước khi được cập nhật   * **Trường hợp cập nhật Thêm mới: Trường này sẽ ko có thông tin**  * Nếu dữ liệu dạng ảnh, ở đây sẽ là link có thể mở hình để xem |
| Dữ liệu mới | Thông tin dữ liệu mới sau khi được cập nhật   * **Trường hợp cập nhật Xóa: Trường này sẽ ko có thông tin (Chỉ xóa trên màn hình, không xóa trên database)**  * Nếu dữ liệu dạng ảnh, ở đây sẽ là link có thể mở hình để xem |
| Mã người thực hiện | * User thực hiện cập nhật dữ liệu  * Mã user |
| Tên Người thực hiện | * User thực hiện cập nhật dữ liệu  * Tên user |
| Nguồn cập nhật | Nguồn cập nhật sẽ gồm các nguồn sau:   * Web Portal DMS |

## Tạo Khu Vực

| Tên Trường | Loại dữ liệu/Loại field | Chỉnh sửa? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Vùng | Selectbox One choice | Có | Có | Chọn Vùng để tạo khu vực, danh sách Vùng được lấy từ màn hình Vùng với các Vùng có trạng thái Hoạt Động   * Người dùng có thể tìm kiếm và chọn một vùng từ danh sách có sẵn để tạo mới khu vực * **Mở danh sách:** Khi người dùng nhấp vào trường "Vùng, một danh sách các vùng sẽ được mở ra. Danh sách Vùng được lấy từ màn hình Vùng với các Vùng có trạng thái Hoạt Động * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm vùng mong muốn. Sau đó, chọn**một**vùng bằng cách nhấp vào các mục trong danh sách. * **Hiển thị lựa chọn:**Vùng đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) * Trường hợp bỏ chọn vùng trong hộp chọn thì mặc định hiểu là **chưa chọn vùng nào.** |
| Mã khu vực | Text (input) | Có | Có | Mã nhận diện duy nhất của khu vực, nằm trong một công ty nhất định.  Mã khu vực không được trùng trong cùng 1 công ty  Độ dài tối đa: 20 ký tự.  Chỉ chứa chữ cái và số (A-Z, 0-9), không chứa khoảng trắng, không chứa ký tự đặc biệt ngoại trừ gạch dưới (\_). |
| Tên khu vực | Text (input) | Có | Có | Tên định danh của khu vực, giúp nhận diện khu vực dễ dàng hơn trong hệ thống.  Tên khu vực có thể trùng  Độ dài tối đa: 100 ký tự.  Cho phép chứa chữ cái, số, khoảng trắng và các ký tự đặc biệt |
| Danh sách Tỉnh/Thành Phố thuộc Khu Vực | | | | |
| Thêm | Button | Có | Có | Bấm nút này để mở màn hình phụ chọn Tỉnh/Thành Phố. |
| Mã Tỉnh/Thành Phố | Text | Không | Có | Mã Tỉnh/Thành Phố đã chọn thuộc khu vực  Một khu vực phải có ít nhất 1 tỉnh/thành phố  Nếu khu vực không có thông tin tỉnh/thành phố, khi lưu hiển thị thông báo như sau: Khu vực phải có ít nhất 1 Tỉnh/thành phố, vui lòng kiểm tra lại!  Các khu vực khác nhau có thể trùng Tỉnh/Thành Phố. (Ví dụ: Hồ Chí Minh có thể thuộc 2 khu vực HCM1, HCM2) |
| Tên Tỉnh/Thành Phố | Text | Không | Có | Tên của Tỉnh/Thành Phố đã chọn thuộc khu vực |
| Tùy chỉnh | Button (icon) | Có | Không | Trường hợp không muốn cài đặt Tỉnh/Thành Phố thuộc khu vực, user sử dụng button này để loại bỏ tỉnh/thành phố đó khỏi danh sách đã chọn. |
| Danh sách Quận/Huyện thuộc Tỉnh/Thành Phố  Khi mở màn hình chưa chọn Tỉnh/Thành Phố nào thì lưới danh sách này sẽ trống  Sau khi chọn Tỉnh/Thành Phố mới hiển thị danh sách Quận/Huyện thuộc Tỉnh/Thành Phố đã cài đặt.  RedV1.0.1: Chỉ hiển thị các Quận/Huyện chưa nằm trong khu vực nào (Chỉ kiểm tra trên các khu vực đang active, các khu vực inactive không cần kiểm tra) | | | | |
| --- | --- | --- | --- | --- |
| Thêm | Button | Có | Có | Bấm nút này để mở màn hình phụ chọn Quận/Huyện  Button này chỉ chọn được khi có 1 Tỉnh/Thành Phố được chọn ở lưới Danh sách Tỉnh/Thành Phố thuộc Khu Vực  Trường hợp chưa chọn Tỉnh/Thành Phố ở lưới Danh sách Tỉnh/Thành Phố thuộc Khu Vực, nhấn button này sẽ hiển thị thông báo: Vui lòng chọn 1 Tỉnh/Thành Phố để thực hiện chức năng này! |
| Mã Quận/Huyện | Text | Không | Có | Mã Quận/Huyện đã chọn thuộc Tỉnh/Thành Phố  1 tỉnh thành phố phải có ít nhất 1 quận/huyện  Nếu Quận/Huyện không có thông tin, khi lưu hiển thị thông báo như sau: Tỉnh/Thành Phố @Tên tỉnh thành phố chưa có thông tin Quận/Huyện, vui lòng kiểm tra lại!  VD: Tỉnh/Thành Phố Thừa Thiên Huế chưa có thông tin Quận/Huyện, vui lòng kiểm tra lại!  Trường hợp có nhiều Tỉnh/Thành Phố chưa có thông tin Quận/Huyện thì hiển thị thông báo trên nhiều dòng.  RedV1.0.1: Lưu ý 1 Quận/Huyện chỉ nằm trong 1 khu vực, trường hợp Quận/Huyện đang chọn đã nằm trong khu vực khác sẽ hiển thị thông báo: @Mã Quận/ Huyện - @Tên Quận/Huyện đã nằm trong khu vực @mã khu vực - @tên khu vực, vui lòng kiểm tra lại!  (Chỉ kiểm tra trên các khu vực đang active, các khu vực inactive không cần kiểm tra) |
| Tên Quận/Huyện | Text | Không | Có | Tên của Quận/Huyện đã chọn thuộc Tỉnh/Thành Phố |
| Tùy chỉnh | Button (icon) | Có | Không | Trường hợp không muốn cài đặt Quận/Huyện thuộc  Tỉnh/Thành Phố, user sử dụng button này để loại bỏ Quận/Huyện đó khỏi danh sách đã chọn.  Ví dụ Khu vực HCM1 → Hồ Chí Minh → Quận 1, 3, 5, 7, 9 chứ không chứa tất cả các quận thuộc Hồ Chí Minh |
|  |  |  |  |  |
| Lưu | Button | Có | Không | Sau khi người dùng đã nhập đầy đủ thông tin, button này sẽ lưu lại khu vực mới vào hệ thống.   * Hệ thống cần kiểm tra tính duy nhất của Mã khu vực trước khi lưu. * Các trường bắt buộc phải được nhập đầy đủ trước khi cho phép lưu thông tin.   RedV1.0.1: Lưu ý 1 Quận/Huyện chỉ nằm trong 1 khu vực, trường hợp Quận/Huyện đang chọn đã nằm trong khu vực khác sẽ hiển thị thông báo: @Mã Quận/ Huyện - @Tên Quận/Huyện đã nằm trong khu vực @mã khu vực - @tên khu vực, vui lòng kiểm tra lại!  (Chỉ kiểm tra trên các khu vực đang active, các khu vực inactive không cần kiểm tra) |
| Đóng | Button | Có | Không | * Đóng màn hình tạo mới và quay lại màn hình trước đó mà không lưu lại thông tin.  * Hệ thống cần cung cấp thông báo xác nhận khi hủy bỏ thao tác để tránh mất mát dữ liệu không mong muốn. |

### Màn hình Phụ chọn Tỉnh/Thành PhốChoose\_Province

| Tên Trường | Loại dữ liệu/Loại field | Chỉnh sửa? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm | Text (input) | Có | Không | Cho phép người dùng nhập từ khóa để tìm kiếm tỉnh/thành phố theo mã hoặc tên, giúp lọc kết quả trong danh sách. |
| Lưới chọn Tỉnh/Thành Phố | Grid | Có | Có | Hiển thị danh sách các tỉnh/thành phố có sẵn để lựa chọn. Mỗi tỉnh/thành phố hiển thị mã và tên.  Danh sách tỉnh/thành phố được lấy từ dữ liệu địa lý quốc gia. |
| Đã chọn n mục | label | Không | N/A | Khi trên lưới danh sách đã check bao nhiêu dòng thì ở trường này sẽ hiển thị bấy nhiêu mục  Button Xóa: Sử dụng button này để uncheck hết các mục đã chọn |
| Chọn | Checkbox | Có | Có | Checkbox cho phép người dùng chọn nhiều tỉnh/thành phố cùng lúc.  Trường hợp ở Danh sách Tỉnh/Thành Phố thuộc Khu Vực đã chọn một số Tỉnh/Thành Phố rồi, thì khi mở màn hình phụ này sẽ check vào các Tỉnh/Thành Phố đã chọn. |
| Mã Tỉnh/Thành Phố | Text | Không | Có | Mã nhận diện duy nhất của Tỉnh/Thành Phố được lấy từ dữ liệu địa lý quốc gia. |
| Tên Tỉnh/Thành Phố | Text | Không | Có | Tên của Tỉnh/Thành Phố, được lấy từ dữ liệu địa lý quốc gia. |
| Button Đồng Ý | Button | Không | Có | Nút xác nhận để đưa các tỉnh/thành phố đã chọn sang màn hình chính Danh sách Tỉnh/Thành Phố thuộc Khu Vực   * Trường hợp các Tỉnh/Thành Phố đã có trong danh sách trước đó thì bỏ qua không thêm mới vào Danh sách Tỉnh/Thành Phố thuộc Khu Vực (tránh trường hợp ghi đè làm mất dữ liệu Quận/Huyện đã cài đặt trước đó cho Tỉnh/Thành Phố)  * Trường hợp Tỉnh/Thành Phố chưa có trong danh sách trước đó thì mặc định thêm tất cả Quận/Huyện thuộc Tỉnh/Thành Phố theo địa lý quốc gia vào Danh sách Quận/Huyện thuộc Tỉnh/Thành Phố |

### Màn hình Phụ chọn Quận/Huyện Choose\_District

| Tên Trường | Loại dữ liệu/Loại field | Chỉnh sửa? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Tìm kiếm | Text (input) | Có | Không | Cho phép người dùng nhập từ khóa để tìm kiếm Quận/Huyện theo mã hoặc tên, giúp lọc kết quả trong danh sách. |
| Lưới chọn Quận/Huyện | Grid | Có | Có | Hiển thị danh sách các Quận/Huyện có sẵn để lựa chọn. Mỗi Quận/Huyện hiển thị mã và tên.  Danh sách Quận/Huyện được lấy từ dữ liệu địa lý quốc gia và theo Tỉnh/Thành Phố đã chọn ở lưới Danh sách Tỉnh/Thành Phố thuộc Khu Vực  RedV1.0.1: Chỉ hiển thị các Quận/Huyện thuộc tỉnh thành đã chọn mà chưa nằm trong khu vực nào (Chỉ kiểm tra trên các khu vực đang active, các khu vực inactive không cần kiểm tra).  Trường hợp muốn thêm quận/huyện đã có ở khu vực khác, thì phải gỡ quận/huyện ở khu vực kia ra trước, sau đó mới thêm ở đây. |
| Đã chọn n mục | label | Không | N/A | Khi trên lưới danh sách đã check bao nhiêu dòng thì ở trường này sẽ hiển thị bấy nhiêu mục  Button Xóa: Sử dụng button này để uncheck hết các mục đã chọn |
| Chọn | Checkbox | Có | Có | Checkbox cho phép người dùng chọn nhiều Quận/Huyện cùng lúc.  Trường hợp ở Danh sách Quận/Huyện thuộc Tỉnh/Thành Phố đã chọn một số Quận/Huyện rồi, thì khi mở màn hình phụ này sẽ check vào các Quận/Huyện đã chọn. |
| Mã Quận/Huyện | Text | Không | Có | Mã nhận diện duy nhất của Quận/Huyện được lấy từ dữ liệu địa lý quốc gia. |
| Tên Quận/Huyện | Text | Không | Có | Tên của Quận/Huyện, được lấy từ dữ liệu địa lý quốc gia. |
| Button Đồng Ý | Button | Không | Có | Nút xác nhận để đưa các Quận/Huyện đã chọn sang màn hình chính Danh sách Quận/Huyện thuộc Tỉnh/Thành Phố  Trường hợp các Quận/Huyện đã có trong danh sách trước đó thì bỏ qua không thêm mới vào Danh sách Quận/Huyện thuộc Tỉnh/Thành Phố |

## Lịch Sử Khu Vực History\_KhuVuc

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Chọn thời gian xem lịch sử (Tối đa 31 ngày) | Date | Có | Có | * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn  * Đến Ngày >= Từ Ngày * Đến Ngày - Từ Ngày <= 31 ngày * Có thể chọn bất kỳ khoảng thời gian nào, miễn là  Đến Ngày - Từ Ngày <= 31 ngày (Lượng data history sẽ được lưu trữ từ 1-3 năm tùy theo hợp đồng từng công ty) * Hiển thị mặc định Từ ngày = Đến ngày = Ngày hiện tại |
| Export | Button | Có | Có | Nhấn Export → Hệ thống Export ra file excel như sau:  Tên File Excel như sau: HIS\_AREA\_DDMMYYYYHHMMSS |

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Màn hình | * Tên màn hình mà người dùng xuất dữ liệu lịch sử |
| Dữ liệu theo thời gian | * Thời gian từ ngày - đến ngày mà người dùng lọc trước khi xuất file báo cáo lịch sử |
| Thời gian xuất báo cáo | * Thời gian xuất báo cáo lịch sử  thành công |
| Người xuất báo cáo | * User thực hiện xuất báo cáo lịch sử  * Mã user - Tên user |
|  |  |
| Mã ghi nhận lịch sử | Mã ghi nhận lịch sử trong 1 lần cập nhật  AREA\_13 ký tự timestamp |
| Thời gian ghi nhận | * Thời gian thực hiện cập nhật dữ liệu được hệ thống ghi nhận lịch sử.  * Format DD-MM-YYYY hh:mm |
| ~~RedV1.0.2Công ty~~ | * ~~Mã công ty - Tên công ty của đối tượng ghi nhận lịch sử~~ |
| Đối tượng chính | Thông tin đối tượng trên màn hình chức năng được ghi nhận lịch sử  Ở đây sẽ là **Khu Vực** |
| Mã đối tượng chính | * **Mã Khu Vực** |
| Trường dữ liệu | Thông tin trường dữ liệu có ghi nhận lịch sử |
| Thao tác | Thao tác ghi nhận lịch sử:   * Cập nhật:   + Đổi tên khu vực   + Cập nhật trạng thái: Tên trạng thái   + Thêm Tỉnh/Thành Phố: Tên Tỉnh/Thành Phố   + Xóa Tỉnh/Thành Phố   + Thêm Quận/Huyện: Tên Quận/Huyện   + Xóa Quận/Huyện |
| Dữ liệu cũ | Thông tin dữ liệu cũ trước khi được cập nhật   * **Trường hợp cập nhật Thêm mới: Trường này sẽ ko có thông tin**  * Nếu dữ liệu dạng ảnh, ở đây sẽ là link có thể mở hình để xem |
| Dữ liệu mới | Thông tin dữ liệu mới sau khi được cập nhật   * **Trường hợp cập nhật Xóa: Trường này sẽ ko có thông tin (Chỉ xóa trên màn hình, không xóa trên database)**  * Nếu dữ liệu dạng ảnh, ở đây sẽ là link có thể mở hình để xem |
| Mã người thực hiện | * User thực hiện cập nhật dữ liệu  * Mã user |
| Tên người thực hiện | * User thực hiện cập nhật dữ liệu  * Tên user |
| Nguồn cập nhật | Nguồn cập nhật sẽ gồm các nguồn sau:   * Web Portal DMS |

## Export Phân Vùng

**Chức năng:**

* Nút "Export" cho phép người dùng xuất dữ liệu của danh sách phân vùng ra một tập tin Excel.
* Nút này giúp người dùng lưu trữ và phân tích dữ liệu phân vùng ngoài ứng dụng, hoặc chia sẻ với các bên liên quan.
* Phân quyền: có yêu cầu phân quyền mới thấy được button này.

**Cách sử dụng:**

1. **Thiết lập dữ liệu:** Người dùng có thể chọn các bộ lọc và tìm kiếm để hiển thị các tài khoản mà họ muốn xuất ra Excel.
2. **Nhấp vào nút:** Khi người dùng nhấp vào nút "Export", hệ thống sẽ tạo và tải về một tập tin Excel chứa dữ liệu của danh sách phân vùng trên danh sách hiện tại.

**Lưu ý:**

* Dữ liệu xuất ra sẽ bao gồm các thông tin từ danh sách phân vùng hiện tại, theo định dạng và cấu trúc mà ứng dụng đã thiết lập.
* Template excel như sau:
* Format tên file xuất ra: DanhSachPhanVung\_DDMMYYYYHHMMSS

**Mô tả trường dữ liệu:**

| Trường dữ liệu | Mô tả |
| --- | --- |
| Người xuất báo cáo: | Mã tài khoản - Tên tài khoản xuất báo cáo |
| Thời gian xuất báo cáo: | Thời gian xuất báo cáo thành công DD-MM-YYYY HH:MM:SS |
| Mã Vùng | Mã của Vùng |
| Tên Vùng | Tên của Vùng  Trường hợp data vùng thì sẽ trống các trường: Mã Khu Vực, Tên Khu Vực, Mã Tỉnh/Thành Phố, Tên Tỉnh/Thành Phố, Mã Quận/Huyện, Tên Quận/Huyện  Và chỉ có data ở 2 cột "Mã Vùng", "Tên Vùng" |
| Mã Khu Vực | Mã của Khu vực  Trường hợp khu vực thì sẽ có export thêm thông tin "Mã Vùng", "Tên Vùng" của khu vực |
| Tên Khu Vực | Tên của khu vực |
| Mã Tỉnh/Thành Phố | Tỉnh/Thành Phố thuộc khu vực |
| Tên Tỉnh/Thành Phố |
| Mã Quận/Huyện | Quận/Huyện thuộc Tỉnh/Thành Phố thuộc khu vực |
| Tên Quận/Huyện |
| Trạng thái | Trạng thái của Vùng/Khu Vực: Hoạt động/Không hoạt động |
| Người tạo | Hiển thị mã tài khoản của người dùng đã tạo ra dữ liệu Vùng/Khu Vực này. |
| Ngày tạo | Ngày tháng khi Vùng/Khu Vực được thêm vào hệ thống. Format: DD:MM:YYYY HH:MM:SS |
| Người cập nhật | Hiển thị mã tài khoản của người dùng đã cập nhật dữ liệu Vùng/Khu Vực này. |
| Ngày cập nhật | Ngày tháng khi Vùng/Khu Vực được cập nhật trên hệ thống. Format: DD:MM:YYYY HH:MM:SS |