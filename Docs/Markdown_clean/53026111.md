|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chức năng xem báo cáo kiểm tồn điểm bán, cho phép export báo cáo |
| Document version | RedV1.0.0  RedV1.0.2 CURRENT (v. 15)    Jan 28, 2025 18:17  25/12/2024:   * Truy vấn   + Nhân viên: Chỉ load 2 role Sale man vs sale sup   + Vùng: Selectbox Multichoice cả Vùng và Khu vực   9/1/2025   * Move cụm thông tin viếng thăm vào detail của report   28/01/2025   Orderby theo thời gian kiểm tồn gần nhất  RedV1.0.3  Áp dụng cho version > (v. 15)   * Bổ sung thêm ngày kiểm tồn ở lưới danh sách tổng * Bổ sung Export báo cáo kiểm tồn điểm bán tại cột khoảng cách check-in-out có dấu phân cách phần nghìn; |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

**Mục đích:** Cho phép tìm kiếm để xem báo cáo kiểm tồn tại điểm bán của nhân viên, Truy vấn theo Thời gian; Theo Vùng, theo danh sách nhân viên hoặc theo điểm bán

# Màn hình Báo cáo kiểm tồn điểm bán

RedV1.0.3  Áp dụng cho version > (v. 15)

* Bổ sung thêm ngày kiểm tồn ở lưới danh sách tổng

Mô tả

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm | | | | |
| Thời gian | Datepicker (Ngày) | Có | Có | * Khi mở màn hình Default ngày hiện tại * Người dùng chọn ngày để tìm kiếm tại icon calendar → Hiển thị popup calendar để chọn ngày; Định dạng thời gian: Từ ngày **dd-mm-yyyy****→**Đến ngày**dd-mm-yyyy**  * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn  * Đến Ngày >= Từ Ngày, tối đa 30 ngày * Đến Ngày - Từ Ngày: Có thể chọn bất kỳ khoảng thời gian nào, tối đa 30 ngày * Nhấn button Tìm Kiếm --> Lưới danh sách sẽ lọc thông tin tồn kho có ghi nhận (dựa vào ngày kiểm tồn) trong khoảng thời gian lọc     RedV1.0.3 Kết quả lọc:  Hiển thị tất cả các điểm bán của nhân viên có ngày kiểm tồn thuộc thời gian Từ ngày - Đến ngày của bộ lọc |
| Vùng | Selectbox  Multichoice | Có | Không | Tìm kiếm các Vùng bán hàng của nhân viên, danh sách Vùng bán hàng hiển thị dựa vào phân quyền của người dùng đang login   * RedV1.0.2Người dùng có thể tìm kiếm theo **Mã vùng** ; **Tên vùng; mã khu vực; Tên khu vực.** Người dùng có thể nhập mã hoặc tên để lọc nhanh. * **Mở danh sách:** Khi người dùng nhấp vào trường "Vùng", Chọn Vùng/ khu vực: hiển thị danh sách vùng/ khu vực thuộc phân quyền của người dùng đang login * **Tìm kiếm và chọn:** Người dùng có thể chọn Vùng/ khu vực để tìm kiếm      * **Hiển thị lựa chọn: Vùng** đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách kiểm tồn điểm bán do nhân viên ghi nhận thuộc Vùng khu vực đã chọn sẽ tự động được lọc để hiển thị * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn vùng không mong muốn. * **Trường hợp bỏ chọn vùng trong hộp chọn thì hiểu là chọn tất cả các vùng thuộc phân quyền của người dùng** * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn |
| Nhân viên | Selectbox  Onechoice | Có | Không | Placeholder: Chọn nhân viên   * Trường này cho phép người dùng chọn một nhân viên để xem báo cáo kiểm tồn điểm bán của nhân viên * Người dùng có thể tìm kiếm theo **Mã nhân** hoặc **Tên nhân viên**. Người dùng có thể nhập mã hoặc tên để lọc nhanh. * **Mở danh sách:** Khi người dùng nhấp vào trường "nhân viên", một danh sách các nhân viên đang active ; RedV1.0.2có role là Saleman và Salesup sẽ được mở ra. Danh sách lấy từ màn hình quản lý nhân viên [Portal HO][DMS] Quản lý nhân viên DMS và Định nghĩa cây SalesForce      * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm nhân viên mong muốn. Sau đó, chọn một mục bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn: Nhân viên** đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags).    + Nếu chọn Vùng → Nhân viên: Hiển thị danh sách nhân viên thuộc Vùng đã chọn * **Kết quả lọc:** Danh sách kiểm tồn điểm bán do nhân viên ghi nhận sẽ tự động được lọc để hiển thị * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn nhân viên không mong muốn. * **Trường hợp bỏ chọn nhân viên trong hộp chọn thì hiểu là chọn tất cả nhân viên thuộc phân quyền của người dùng** * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn |
| Điểm bán | Selectbox Onechoice | Có | Không | Tìm kiếm theo điểm bán  Selectbox chứa danh sách các điểm bán thuộc Vùng/ thuộc nhân viên.  Danh sách điểm bán lấy từ thông tin tuyến bán hàng của nhân viên [Portal HO][DMS] Tuyến bán hàng   * Người dùng có thể tìm kiếm theo **Mã điểm bán** hoặc **Tên điểm bán**. Người dùng có thể nhập mã hoặc tên để lọc nhanh. * **Mở danh sách:** Khi người dùng nhấp vào trường "**điểm bán**", chọn điểm bán:   Step1: Chọn Vùng → Chọn Nhân viên -> chọn Điểm bán: hiển thị danh sách **điểm bán trong tuyến bán hàng của nhân viên đã chọn**  Step2: Chọn Vùng → **KHÔNG** Chọn Nhân viên -> chọn Điểm bán: hiển thị danh sách **điểm bán theo Vùng/Khu vực của NPP** ~~địa ch~~~~ỉ~~ **thuộc vùng bán hàng đã chọn**  Step3: **KHÔNG** Chọn Vùng → Chọn Nhân viên -> chọn Điểm bán: hiển thị danh sách **điểm bán trong tuyến bán hàng của nhân viên đã chọn**  Step4: **KHÔNG** Chọn Vùng → KHÔNG Chọn Nhân viên -> chọn Điểm bán: Không có dữ liệu điểm bán (do điểm bán đi theo tuyến bán hàng của nhân viên)   * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm điểm bán mong muốn. Sau đó, chọn một mục bằng cách nhấp vào mục trong danh sách. * **Hiển thị lựa chọn:  điểm bán** đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags). * **Kết quả lọc:** Danh sách kiểm tồn điểm bán của điểm bán sẽ tự động được lọc để hiển thị * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn  điểm bán không mong muốn. * **Trường hợp bỏ chọn  điểm bán trong hộp chọn thì hiểu là chọn tất cả các  điểm bán thuộc phân quyền của người dùng** * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn |
| Tìm kiếm | Button | Có | Không | Khi người dùng nhấn vào **Tìm kiếm**, hệ thống sẽ thực hiện lọc dữ liệu trong danh sách nhân viên đã thực hiện theo các điều kiện tìm kiếm hiện có và hiển thị kết quả trong danh sách bên dưới. |
| Làm mới | Button | Có | Không | Khi nhấn vào **Làm mới**, toàn bộ các trường tìm kiếm sẽ được reset về trạng thái mặc định (không có dữ liệu hoặc giá trị ban đầu) và danh sách bên dưới sẽ hiển thị toàn bộ danh sách nhân viên mà không lọc. |
| Lưới danh sách | | | | |
| **Danh sách điểm bán** | | | | |
| RedV1.0.3  Ngày kiểm tồn | Datacolumn | Có | Không | Hiển thị ddmmyyyyy hhmmss  Orderby theo ngày giờ kiểm tồn gần nhất (Dựa vào điểm bán của nhân viên theo tuyến bán hàng) |
| Mã điểm bán | Datacolumn have copy  Hyperlink | Có | Không | Hiển thị mã điểm bán  Có thể copy mã điểm bán  cho phép hyperlink xem chi tiết Danh sách sản phẩm kiểm tồn |
| Tên điểm bán | Datacolumn | Không | Không | Hiển thị tên điểm bán theo mã điểm bán |
| Địa chỉ | Datacolumn | Không | Không | Hiển thị địa chỉ điểm bán theo mã điểm bán |
| Số điện thoại điểm bán | Datacolumn have copy | Không | Không | Hiển thị số điện thoại điểm bán theo mã điểm bán, có thể copy |
| Trạng thái | Datacolumn | Không | Không | Hiển thị trạng thái điểm bán theo mã điểm bán tại thời điểm xem báo cáo |
| Mã tuyến | Datacolumn have cop | Không | Không | Mã định danh tuyến mà nhân viên thực hiện kiểm tồn điểm bán. Lấy tại thời điểm nhân viên thực hiện kiểm tồn điểm bán, cho phép sao chép mã tuyến  Trường hợp trong tương lai nhân viên đổi sang tuyến khác cũng sẽ lấy mã tuyến lúc thực hiện kiểm tồn điểm bán, dữ liệu tuyến lấy theo [[Portal HO][DMS] Tuyến bán hàng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48431425) |
| Tên tuyến | Datacolumn | Không | Không | Tên của Tuyến bán hàng thực hiện kiểm tồn điểm bán. Lấy theo mã tuyến |
| Mã nhân viên | Datacolumn have copy | Không | Không | Hiển thị Mã nhân viên thực hiện kiểm tồn điểm bán, Có thể copy mã nhân viên |
| Tên nhân viên | Datacolumn | Không | Không | Hiển thị tên của nhân viên thực hiện kiểm tồn điểm bán |
| Số điện thoại nhân viên | Datacolumn have copy | Không | Không | Hiển thị số điện thoại của nhân viên thực hiện kiểm tồn điểm bán, có thể copy số điện thoại nhân viên |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Quản lý trực tiếp | Datacolumn | Không | Không | Hiển thị mã - tên người quản lý trực tiếp của nhân viên thực hiện kiểm tra tồn kho; dữ liệu lấy theo  [Portal HO][DMS] Quản lý nhân viên DMS và Định nghĩa cây SalesForce |
| Vùng | Datacolumn have copy | Không | Không | Hiển thị Tên vùng theo cây saleforce của nhân viên, có thể copy tên vùng |
| Khu vực | Datacolumn have copy | Không | Không | Hiển thị Tên Khu vực theo cây saleforce của nhân viên thực hiện kiểm tồn tại điểm bán, có thể copy tên khu vực |

  

Danh sách sản phẩm kiểm tồn

# Màn hình Danh sách sản phẩm kiểm tồn

Nhấn click một Mã điểm bán sẽ hiển thị popup thông tin Danh sách sản phẩm kiểm tồn

Mô tả

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Danh sách sản phẩm kiểm tồn** | | | | |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Lưu ý:**  **Danh sách sản phẩm kiểm tồn** hiển thị tại 1 điểm bán  Danh sách hiển thị orderby theo ngày giờ thực hiện (Ngày kiểm tồn)  Ngày kiểm tồn trên lưới hiển thị theo thời gian của bộ lọc đã chọn  **Trong cùng 1 ngày của 1 điểm bán → Check cùng 1 mã sản phẩm - cùng 1 đơn vị - cùng 1 Số lô/HSD (Trường hợp không có Số lô/HSD thì check cùng 1 mã sản phẩm - cùng 1 đơn vị) để hiển thị:**   * **Ngày kiểm tồn:** Hiển thị thời gian (dd-mm-yyyy hh:mm:ss) nhập cuối cùng  * **Số lượng:** Hiển thị số lượng nhập cuối cùng của sản phẩm theo "Ngày kiểm tồn" | | | | |
| Ngày kiểm tồn | Datacolumn | Không | Không | Hiển thị thời gian kiểm tồn điểm bán, bao gồm cả ngày và giờ (định dạng: **DD-MM-YYYY HH:MM:SS)** |
| Mã Ngành | Datacolumn | Không | Không | Hiển thị mã Ngành của sản phẩm kiểm tồn, lấy theo phân cấp level 1 |
| Tên Ngành | Datacolumn | Không | Không | Hiển thị tên Ngành của sản phẩm kiểm tồn, theo mã Ngành |
| Mã sản phẩm | Datacolumn | Không | Không | Hiển thị mã sản phẩm kiểm tồn |
| Tên sản phẩm | Datacolumn | Không | Không | Hiển thị tên sản phẩm kiểm tồn |
| Đơn vị | Datacolumn | Không | Không | Hiển thị đơn vị kiểm tồn của sản phẩm |
| Số lô/HSD | Datacolumn | Không | Không | Hiển thị Hạn sử dụng của sản phẩm kiểm tồn.  Với các sản phẩm không bắt buộc nhập số lô/HSD, trường này có thể không có dữ liệu |
| Số lượng | Datacolumn | Không | Không | Hiển thị số lượng kiểm tồn của sản phẩm theo thời gian gần nhất |
| View Detail | Button | Có | Không | Xem chi tiết kiểm tồn của cùng 1 sản phẩm - cùng đơn vị - Cùng Số lô/HSD (Số lô/HSD có thể trống)  Click vào button   hiển thị màn hình xem chi tiết như sau: và icon  chuyển thành  RedV1.0.2     | **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** | | --- | --- | --- | --- | --- | | Ngày kiểm tồn | Data column | Không | Không | Hiển thị thời gian nhập kiểm tồn của sản phẩm đã chọn (thỏa thời gian của bộ lọc truy vấn Từ ngày - đến ngày của cùng 1 sản phẩm- đơn vị - cùng số lô/HSD (nếu có)) hiển thị ngày giờ (dd-mm-yyyy hh:mm:ss); RedV1.0.2 order by theo thời gian kiểm tồn gần nhất | | Số lượng | Data column | Không | Không | Hiển thị số lượng kiểm tồn theo theo gian "Ngày kiểm tồn" | | Tần suất viếng thăm | Data column | Không | Không | Tần suất viếng thăm dựa trên tuyến của nhân viên  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. | | Loại tuyến | Data column | Không | Không | Loại tuyến:   * Trường hợp viếng thăm và thực hiện nhiệm vụ trong tuyến ngày viếng thăm → Loại tuyến = Trong tuyến * Trường hợp viếng thăm và thực hiện nhiệm vụ ngoại tuyến ngày viếng thăm → Loại tuyến = Ngoại tuyến * Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. | | Khoảng cách check-in (m) | Data column phân cách phần nghìn | Không | Không | Khoảng cách từ vị trí check-in của nhân viên đến điểm bán (đơn vị: mét).  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. | | Khoảng cách check-out (m) | Data column phân cách phần nghìn | Không | Không | Khoảng cách từ vị trí check-out của nhân viên đến điểm bán (đơn vị: mét).  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. | | Thời gian bắt đầu viếng thăm | Datetime  dd-mm-yyyy hh:mm:ss | Không | Có | Thời gian nhân viên bắt đầu viếng thăm điểm bán.  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. | | Thời gian kết thúc viếng thăm | Datetime  dd-mm-yyyy hh:mm:ss | Không | Có | Thời gian nhân viên kết thúc viếng thăm điểm bán.  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. |   **Ví dụ: Ví dụ cụ thể**  **Nhập kiểm tồn trên App cùng 1 mã SP - cùng 1 DV - SL nhập như sau**  **LẦN 1:**   * Hsd 1 - sl 10  * Hsd 2- sl 10  * Hsd 3-sl 10  * Hsd null - sl 10  * Hsd null - sl 20   => Màn hình "Kiểm tra tồn kho" trên app hiển thị Total số lượng là 60 chọn "Xác nhận" lưu dữ liệu như sau  Date time 1 (dd-mm-yyyy hh:mm:ss)   * Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd 1 - sl 10** * Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd 2- sl 10** * Date time 1 - cùng 1 mã SP - cùng 1 DV - **Hsd 3-sl 10** * Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd null - sl 30**     **LẦN 2:**   * Hsd 1 - sl 20  * Hsd 2- sl 20  * Hsd 3-sl 20  * Hsd null - sl 20  * Hsd null - sl 20   => Màn hình "Kiểm tra tồn kho" trên app hiển thị Total số lượng là 100 chọn "Xác nhận" lưu dữ liệu như sau  Date time 2 (dd-mm-yyyy hh:mm:ss)   * Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd 1 - sl 20** * Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd 2- sl 20** * Date time 2 - cùng 1 mã SP - cùng 1 DV - **Hsd 3-sl 20** * Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd null - sl 40**     **Báo cáo kiểm tồn điểm bán trên portal**  Grid: Danh sách sản phẩm kiểm tồn   * Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd 1 - sl 20** * Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd 2- sl 20** * Date time 2 - cùng 1 mã SP - cùng 1 DV - **Hsd 3-sl 20** * Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd null - sl 40**     Grid: Chi tiết  Chọn 1 line; Click vào button   hiển thị màn hình xem chi tiết như sau   * Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd 1 - sl 10** * Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd 1 - sl 20** |
| Export danh sách sản phẩm kiểm tồn | | | | |
| Export | Button | Có | Không | Export danh sách sản phẩm kiểm tồn: Báo cáo hiển thị danh sách các sản phẩm kiểm tồn chi tiết tại 1 điểm bán đã chọn, Template và mô tả export giống như đã mô tả tại Export kiểm tồn |

# Export

Template export

Mục đích:

Click button để xuất dữ liệu

Hệ thống sẽ thực hiện export dữ liệu kiểm tồn ra file excel, template được mô tả bên dưới, template chỉ xuất sản phẩm kiểm tồn tại điểm bán của tất cả nhân viên trong khoảng thời gian được chọn

báo cáo  sẽ hiển thị theo dạng:

* hiển thị dạng rawdata kéo dài theo chiều ngang của file excel
* Mỗi sản phẩm - cùng đơn vị - cùng số lô/ HSD sẽ hiển thị 1 dòng với số lượng tương ứng
* Mỗi sản phẩm - cùng đơn vị - số lô/ HSD rỗng →  sẽ hiển thị 1 dòng với số lượng kiểm tồn = sum (số lượng các Số lô/ HSD rỗng)
* 1 Điểm bán thực hiện kiểm tồn nhiều lần sẽ hiển thị nhiều dòng
* Xem  ví dụ cụ thể để hình dung

Hiển thị: Orderby theo thời gian nhập kiểm tồn

Templates export:  

Mô tả:

* Người Xuất báo cáo: Hiển thị mã - tên người login xuất báo cáo
* Thời gian xuất báo cáo: Hiển thị thười gian export dd/mm/yyyy hh:mm:ss
* Dữ liệu theo thời gian: Hiển thị dữ liệu theo thời gian của bộ lọc màn hình Từ ngày - Đến ngày

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Mã Điểm bán | Mã Điểm bán mà nhân viên thực hiện kiểm tra tồn kho |
| Tên Điểm bán | Tên Điểm bán mà nhân viên thực hiện kiểm tồn, hiển thị theo mã điểm bán |
| SĐT Điểm bán | SDT Điểm bán mà nhân viên thực hiện kiểm tra tồn kho |
| Tỉnh/ Thành phố | Tỉnh / Thành của Điểm bán mà nhân viên thực hiện kiểm tra tồn kho |
| Quận / Huyện | Quận / Huyện của Điểm bán mà nhân viên thực hiện kiểm tra tồn kho |
| Phường/Xã | Phường/Xã của Điểm bán mà nhân viên thực hiện kiểm tra tồn kho |
| Địa chỉ | Địa chỉ của Điểm bán mà nhân viên thực hiện kiểm tra tồn kho |
| Mã tuyến | Mã định danh tuyến mà nhân viên thực hiện kiểm tra tồn kho. |
| Tên tuyến | Tên Tuyến theo mã tuyến |
| Mã nhân viên thực hiện | Mã nhân viên thực hiện kiểm tra tồn kho |
| Tên nhân viên thực hiện | Tên nhân viên thực hiện kiểm tra tồn kho |
| SĐT nhân viên | Số điện thoại nhân viên thực hiện |
| Quản lý trực tiếp | Hiển thị mã - tên người quản lý trực tiếp của nhân viên thực hiện kiểm tra tồn kho |
| Vùng | Tên vùng theo theo cây saleforce của nhân viên thực hiện kiểm tồn tại điểm bán |
| Khu vực | Tên khu vực theo cây saleforce của nhân viên thực hiện kiểm tồn tại điểm bán |
| Tần suất viếng thăm | Tần suất viếng thăm dựa trên tuyến của nhân viên  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. |
| Loại tuyến | Loại tuyến:   * Trường hợp viếng thăm và thực hiện nhiệm vụ trong tuyến ngày viếng thăm → Loại tuyến = Trong tuyến * Trường hợp viếng thăm và thực hiện nhiệm vụ ngoại tuyến ngày viếng thăm → Loại tuyến = Ngoại tuyến * Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. |
| Khoảng cách check-in (m) | Khoảng cách từ vị trí check-in của nhân viên đến điểm bán (đơn vị: mét).  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin.  RedV1.0.3  Áp dụng cho version > (v. 15) Bổ sung Export báo cáo kiểm tồn điểm bán tại cột khoảng cách check-in-out có dấu phân cách phần nghìn;  Data column phân cách phần nghìn |
| Khoảng cách check-out (m) | Khoảng cách từ vị trí check-out của nhân viên đến điểm bán (đơn vị: mét).  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin.  RedV1.0.3  Áp dụng cho version > (v. 15) Bổ sung Export báo cáo kiểm tồn điểm bán tại cột khoảng cách check-in-out có dấu phân cách phần nghìn;  Data column phân cách phần nghìn |
| Thời gian bắt đầu viếng thăm | Thời gian nhân viên bắt đầu viếng thăm điểm bán.  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. |
| Thời gian kết thúc viếng thăm | Thời gian nhân viên kết thúc viếng thăm điểm bán.  Trường hợp thực hiện nhiệm vụ ở chức năng điểm bán chăm sóc thì trường này sẽ không có thông tin. |
| Ngày kiểm tồn | Hiển thị thời gian kiểm tồn điểm bán, bao gồm cả ngày và giờ (định dạng: **DD-MM-YYYY HH:MM:SS)** |
| Mã Ngành | Hiển thị mã Ngành của sản phẩm kiểm tồn - level cao nhất |
| Tên Ngành | Hiển thị tên Ngành của sản phẩm kiểm tồn, theo mã Ngành |
| Mã sản phẩm | Hiển thị mã sản phẩm kiểm tồn |
| Tên sản phẩm | Hiển thị tên sản phẩm kiểm tồn |
| Đơn vị | Hiển thị đơn vị kiểm tồn của sản phẩm |
| Số lô/HSD | Hiển thị Hạn sử dụng của sản phẩm kiểm tồn.  *Sản phẩm có config bắt buộc nhập số lô/HSD thì field này bắt buộc có dữ liệu* |
| Số lượng | Hiển thị số lượng kiểm tồn của sản phẩm |

  

#### Ví dụ cụ thể

Xem ví dụ cụ thể

**LẦN 1:**

* Hsd 1 - sl 10

* Hsd 2- sl 10

* Hsd 3-sl 10

* Hsd null - sl 10

* Hsd null - sl 20

=> Màn hình "Kiểm tra tồn kho" trên app hiển thị Total số lượng là 60 chọn "Xác nhận" lưu dữ liệu như sau

Date time 1 (dd-mm-yyyy hh:mm:ss)

* Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd 1 - sl 10**
* Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd 2- sl 10**
* Date time 1 - cùng 1 mã SP - cùng 1 DV - **Hsd 3-sl 10**
* Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd null - sl 30**

**LẦN 2:**

* Hsd 1 - sl 20

* Hsd 2- sl 20

* Hsd 3-sl 20

* Hsd null - sl 20

* Hsd null - sl 20

=> Màn hình "Kiểm tra tồn kho" trên app hiển thị Total số lượng là 100 chọn "Xác nhận" lưu dữ liệu như sau

Date time 2 (dd-mm-yyyy hh:mm:ss)

* Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd 1 - sl 20**
* Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd 2- sl 20**
* Date time 2 - cùng 1 mã SP - cùng 1 DV - **Hsd 3-sl 20**
* Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd null - sl 40**

**Export báo cáo kiểm tồn điểm bán hiển thị all line như sau**

* Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd 1 - sl 10**
* Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd 2- sl 10**
* Date time 1 - cùng 1 mã SP - cùng 1 DV - **Hsd 3-sl 10**
* Date time 1 - cùng 1 mã SP - cùng 1 DV **- Hsd null - sl 30**
* Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd 1 - sl 20**
* Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd 2- sl 20**
* Date time 2 - cùng 1 mã SP - cùng 1 DV - **Hsd 3-sl 20**
* Date time 2 - cùng 1 mã SP - cùng 1 DV **- Hsd null - sl 40**