|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Màn hình xem danh sách thực hiện khảo sát của nhân viên bán hàng theo chương trình khảo sát; cho phép export danh sách thực hiện theo bộ lọc |
| Document version | RedV1.0.0  RedV1.0.1 25/12/2024   * Hiển thị câu trả lời dài  * Mô tả rõ hơn truy vấn vùng   RedV1.0.2 27/12/2024   * Vùng / Khu vực trên lưới hiển thị dưới dạng nhãn tag   02/1/2025  Filter Bộ khảo sát  RedV1.1.0 Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ. |
| Document status | GreenDONE |
| Document owner | thao.nguyen |
| Chage History | 2 |

truenone

# Thống kê khảo sát

## Màn hình thống kê

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm kiếm | | | | |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Bộ khảo sát | Selectbox | Có | Có | * Default hiển thị bộ khảo sát gần nhất  * Bắt buộc phải chọn một bộ khảo sát để xem thống kê thực hiện khảo sát     + Không cho xóa bộ khảo sát mà chỉ cho chọn lại từ combo danh sách; hoặc cho xóa để nhập Tên-Mã bộ khảo sát khác; khi nội dung = null thì ô Bộ khảo sát hiển thị bolder đỏ và thông báo:"Bắt buộc phải chọn 1 bộ khảo sát" * Người dùng có thể tìm kiếm theo **Mã khảo sát** hoặc **Tên khảo sát**. Người dùng có thể nhập mã hoặc tên để lọc nhanh. * **Mở danh sách:** Khi người dùng nhấp vào trường "Bộ khảo sát", một danh sách các chương trình khảo sát (all trạng thái) sẽ được mở ra. Danh sách lấy từ màn hình Khảo sát (Hiển thị tất cả các bộ khảo sát đã khai báo trên màn hình)  * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm khảo sát mong muốn. Sau đó, chọn một mục bằng cách nhấp vào mục trong danh sách. * **RedV1.0.2Hiển thị lựa chọn: Chương trình khảo sát** đã chọn sẽ hiển thị trong hộp chọn ~~dưới dạng nhãn (tags)~~ là giá trị đã chọn dạng text. * **Kết quả lọc:** Danh sách thống kê nhân viên/ điểm bán thực hiện khảo sát sẽ tự động được lọc để hiển thị * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên giá trị hiển thị hoặc chọn lại trong danh sách để bỏ chọn khảo sát không mong muốn. * **Trường hợp bỏ chọn khảo sát trong hộp chọn thì hiển thị thông báo "Bắt buộc phải chọn bộ khảo sát".** |
| Thời gian thực hiện khảo sát | Datepicker (Ngày) | Có | Có | * Khi mở màn hình Default từ ngày đầu tháng đến cuối tháng của tháng hiện tại - là khoảng thời gian thực hiện khảo sát của user (Ngày user submit khảo sát) * Người dùng chọn ngày để tìm kiếm tại icon calendar → Hiển thị popup calendar để chọn ngày; Định dạng thời gian: Từ ngày **dd-mm-yyyy****→**Đến ngày**dd-mm-yyyy**  * Hiển thị date chọn Từ Ngày - Đến Ngày để user chọn  * Đến Ngày >= Từ Ngày, * Đến Ngày - Từ Ngày: Có thể chọn bất kỳ khoảng thời gian nào, * Nhấn button Tìm Kiếm --> Lưới danh sách hiển thị danh sách nhân viên thực hiện khảo sát theo "Bộ khảo sát đã chọn" trong khoảng thời gian Từ ngày - Đến ngày |
| Vùng | Selectbox multichoice | Có | Không | RedV1.0.1  Tìm kiếm các Vùng bán hàng của nhân viên, Vùng này được lấy từ cây salefore theo Vùng của cấp quản lý trực tiếp   * Người dùng có thể tìm kiếm theo **Mã vùng**; **Tên vùng; mã khu vực; Tên khu vực.** Người dùng có thể nhập mã hoặc tên để lọc nhanh. * **Mở danh sách:** Khi người dùng nhấp vào trường "Vùng", Chọn Vùng/ khu vực: hiển thị danh sách vùng/ khu vực đang active thuộc phân quyền của người dùng đang login * **Tìm kiếm và chọn:** Người dùng có thể chọn Vùng/ khu vực để tìm kiếm      * **Hiển thị lựa chọn: Vùng**đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags). * **Kết quả lọc:** Danh sách kiểm tồn điểm bán do nhân viên ghi nhận thuộc Vùng khu vực đã chọn sẽ tự động được lọc để hiển thị * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn vùng không mong muốn. * **Trường hợp bỏ chọn vùng trong hộp chọn thì hiểu là chọn tất cả các vùng thuộc phân quyền của người dùng** * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn |
| Tìm kiếm | Button | Có |  | Khi người dùng nhấn vào **Tìm kiếm**, hệ thống sẽ thực hiện lọc dữ liệu trong danh sách khảo sát đã thực hiện theo các điều kiện tìm kiếm hiện có và hiển thị kết quả trong danh sách bên dưới. |
| Làm mới | Button | Có | Không | Khi nhấn vào **Làm mới**, toàn bộ các trường tìm kiếm sẽ được reset về trạng thái mặc định (không có dữ liệu hoặc giá trị ban đầu) và danh sách bên dưới sẽ hiển thị toàn bộ danh sách khảo sát mà không lọc. |
| Lưới danh sách | | | | |
| **Danh sách khảo sát** | | | | |
| Mã nhân viên | Datacolumn have copy  Hyperlink | Có | Không | Hiển thị Mã nhân viên thực hiện khảo sát, hyperlink mã nhân viên  Có thể copy mã nhân viên |
| Tên nhân viên | Datacolumn | Không | Không | Hiển thị tên của nhân viên thực hiện khảo sát |
| Vùng | Datacolumn | Không | Không | RedV1.0.2 Hiển thị Tên vùng dưới dạng tag,  Dựa vào ASM -> Lưu luôn thông tin của RSM (Lấy từ quản lý trực tiếp ASM theo cây saleforce)  Trường hợp khi xem báo cáo lịch sử, vẫn hiển thị Vùng của nhân viên thực hiện khảo sát tại thời điểm lưu record |
| Khu vực | Datacolumn | Không | Không | RedV1.0.2 Hiển thị Tên khu vực dưới dạng tag, lấy theo ASM của nhân viên theo cây saleforce  Trường hợp khi xem báo cáo lịch sử, vẫn hiển thị Vùng của nhân viên thực hiện khảo sát tại thời điểm lưu record |
| Mã khảo sát | Datacolumn | Không | Không | Mã chương trình khảo sát đã chọn |
| Tên khảo sst | Datacolumn | Không | Không | Tên chương trình khảo sát theo bộ khảo sát |
| Từ ngày | Date (readonly) | Không | Không | Hiển thị ngày bắt đầu khảo sát, lấy theo mã khảo sát đã chọn |
| Đến ngày | Date (readonly) | Không | Không | Hiển thị ngày kết thúc khảo sát, lấy theo mã khảo sát đã chọn |
| Số kết quả khảo sát/Số lần khảo sát | Datacolumn | Không | Không | Hiển thị số lượng kết quả khảo sát / số lần phải thực hiện khảo sát trong cài đặt.  Ví dụ: 10/20 có nghĩa là đã có 10 kết quả trên 20 lần phải khảo sát trong cài đặt.   * Chỉ hiển thị nhân viên có thực hiện từ 1 kết quả khảo sát trên lưới (Không hiển thị nhân viên chưa thực hiện khảo sát) * Trường hợp đối tượng = nhân viên; CTKS có cài đặt Số lần khảo sát = 3; Nhân viên thực hiện 1 chương trình khảo sát trên 3 tuyến bán hàng thì tính là 3/3. |

## Trường hợp khảo sát theo Điểm bán

(Đối tượng khảo sát = Điểm bán)

Nhấn click một Mã nhân viên sẽ hiển thị popup thông tin Danh sách khảo điểm bán

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Danh sách khảo sát điểm bán**  Danh sách hiển thị orderby theo ngày giờ thực hiện của nhân viên | | | | |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Mã Điểm bán | Datacolumn have copy | Không | Không | Mã định danh duy nhất của Điểm bán đã tham gia khảo sát  Có thể copy mã Điểm bán |
| Tên Điểm bán | Datacolumn | Không | Không | Hiển thị tên Điểm bán mà nhân viên đã khảo sát |
| Lần thực hiện khảo sát | Datacolumn | Không | Không | Lần thực hiện khảo sát của đối tượng (nhân viên/ điểm bán)  VD khảo sát trên cùng đối tượng lần 1: ghi nhận "1"  Khảo sát trên cùng đối tượng lần thứ 2: ghi nhận "2" |
| Ngày thực hiện | Datacolumn | Không | Không | Hiển thị thời gian tạo khảo sát, bao gồm cả ngày và giờ (định dạng: DD-MM-YYYY HH:MM:SS) |
| Hình ảnh checkin | Datacolumn | Không | Không | * Trường hợp khảo sát ở nhiệm vụ viếng thăm: Hiển thị hình ảnh checkin khi viếng thăm cửa hàng, nếu chụp nhiều hình, chỉ lấy hình chụp đầu tiên  * Trường hợp nhân viên chọn khảo sát ở các mục:    + Khác → Điểm bán → Chăm Sóc điểm bán   → Lấy hình checkin chụp trước khi thực hiện khảo sát, nếu chụp nhiều hình, chỉ lấy hình chụp đầu tiên  Hiển thị 01 hình ảnh checkin đầu tiên.  Click vào hình hiển thị popup show hình; cho phép phóng to/ thu nhỏ hình |
| **Câu hỏi khảo sát** | Datacolumn | Không | Không | Danh sách các câu hỏi được đưa ra trong cuộc khảo sát tại Điểm bán   * Câu hỏi nối chuỗi gồm: "Số thứ tự câu hỏi" + "." + "Loại câu hỏi khảo sát" + " -" + "Câu hỏi khảo sát * Câu hỏi có check "bắt buộc" hiển thị sao đỏ như hình      * RedV1.0.1 Độ rộng mỗi câu hỏi là 400 nếu dài hơn thì xuống dòng. Câu trả lời kiểu số hay kiểu chữ gì cũng xuống dòng giống câu hỏi; nhập gì hiển thị cái đó |
| **Câu trả lời khảo sát** | Datacolumn | Không | Không | Câu trả lời được nhân viên khảo sát ghi nhận   * Nếu câu hỏi là loại là hình ảnh:   + Ở đây sẽ hiển thị dạng link để có thể click vào xem được trên trình duyệt   + Trường hợp có nhiều hình ảnh,     - Với trường hợp kiểu câu hỏi hình ảnh; người dùng chụp từ 2 hình trở lên hiển thị như sau:     - Click để hiển thị popup chứa tất cả hình ảnh **hoặc** click vào 1 hình để xem chi tiết→ hiển thị popup show hình:   +Zoom hình ảnh theo thư viện hiện tại đang xài *(hình ảnh zoom tham khảo)*  * Nếu câu hỏi là loại Chọn nhiều: Mỗi dữ liệu trả lời sẽ cách nhau dấu ";" và khoảng trắng. VD: Bánh; Kẹo; Nước Ngọt * Nếu câu trả lời "KHÁC" thì sẽ hiển thị kết quả "Khác" + "," + "Nội dung ghi chú khác". ví dụ như câu 3→ câu trả lời **"Khác, cũng tạm thôi"**   RedV1.0.1 Độ rộng mỗi câu hỏi là 400 nếu dài hơn thì xuống dòng. Câu trả lời kiểu số hay kiểu chữ gì cũng xuống dòng giống câu hỏi; nhập gì hiển thị cái đó |
| Export | Button | Có | Không | Chức năng export chi tiết khảo sát các điểm bán của nhân viên  File excel theo Formart  như mô tả [Export Excel](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023912#id-[Portal]B%C3%A1oc%C3%A1oth%E1%BB%91ngk%C3%AAth%E1%BB%B1chi%E1%BB%87nkh%E1%BA%A3os%C3%A1t-ExportExcel)  Nhưng dữ liệu trong file chỉ có dữ liệu thực hiện khảo sát của chính điểm bán đang xem chi tiết |

## Trường hợp khảo sát theo nhân viên

(Đối tượng khảo sát = Nhân viên)

Nhấn click một mã nhân viên sẽ hiển thị popup thông tin Danh sách khảo sát nhân viên

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Danh sách khảo sát nhân viên**  Danh sách hiển thị orderby theo ngày giờ thực hiện của nhân viên | | | | |
| Ngày thực hiện | Datacolumn | Không | Không | Hiển thị thời gian tạo khảo sát, bao gồm cả ngày và giờ (định dạng: DD-MM-YYYY HH:MM:SS) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Lần thực hiện khảo sát | Datacolumn | Không | Không | Lần thực hiện khảo sát của nhân viên  VD khảo sát trên cùng đối tượng lần 1: ghi nhận "1"  Khảo sát trên cùng đối tượng lần thứ 2: ghi nhận "2" |
| Câu hỏi khảo sát | Datacolumn | Không | Không | Danh sách các câu hỏi được đưa ra trong cuộc khảo sát của nhân viên này.   * Câu hỏi nối chuỗi gồm: "Số thứ tự câu hỏi" + "." + "Loại câu hỏi khảo sát" + " -" + "Câu hỏi khảo sát * Câu hỏi có check "bắt buộc" hiển thị sao đỏ như hình      * RedV1.0.1 Độ rộng mỗi câu hỏi là 400 nếu dài hơn thì xuống dòng. Câu trả lời kiểu số hay kiểu chữ gì cũng xuống dòng giống câu hỏi; nhập gì hiển thị cái đó |
| Câu trả lời khảo sát | Datacolumn | Không | Không | Câu trả lời được nhân viên khảo sát ghi nhận   * Nếu câu hỏi là loại là hình ảnh:   + Ở đây sẽ hiển thị dạng link để có thể click vào xem được trên trình duyệt   + Trường hợp có nhiều hình ảnh,     - Với trường hợp kiểu câu hỏi hình ảnh; người dùng chụp từ 2 hình trở lên hiển thị như sau:     - Click để hiển thị popup chứa tất cả hình ảnh **hoặc** click vào 1 hình để xem chi tiết→ hiển thị popup show hình: Zoom hình giống thư viện hiện tại  * Nếu câu hỏi là loại Chọn nhiều: Mỗi dữ liệu trả lời sẽ cách nhau dấu ";" và khoảng trắng. VD: Bánh; Kẹo; Nước Ngọt * Nếu câu trả lời "KHÁC" thì sẽ hiển thị kết quả "Khác" + "," + "Nội dung ghi chú khác". ví dụ như câu 3→ câu trả lời **"Khác, cũng tạm thôi"**  * RedV1.0.1 Độ rộng mỗi câu hỏi là 400 nếu dài hơn thì xuống dòng. Câu trả lời kiểu số hay kiểu chữ gì cũng xuống dòng giống câu hỏi; nhập gì hiển thị cái đó |
| Export | Button | Có | Không | Chức năng export chi tiết khảo sát các điểm bán của nhân viên  File excel theo Formart  như mô tả [Export Excel](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023912#id-[Portal]B%C3%A1oc%C3%A1oth%E1%BB%91ngk%C3%AAth%E1%BB%B1chi%E1%BB%87nkh%E1%BA%A3os%C3%A1t-ExportExcel)  Nhưng dữ liệu trong file chỉ có dữ liệu thực hiện khảo sát của nhân viên đang xem chi tiết |

## Export Excel

Khi nhấn vào Button Export tại màn hình Thống kê, hệ thống sẽ hiển thị popup chọn thông tin như sau:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Button X | Button | Có | Không | Click vào để đóng màn hình |
| Chọn khảo sát | Selectbox one choice | Có | Có | * Giá trị mặc định được hiển thị lấy theo dữ liệu "Bộ khảo sát" trên Vùng truy vấn * Nếu người dùng bỏ chọn Hoặc không chọn bất kỳ giá trị nào hệ thống sẽ hiển thị thông báo lỗi "Vui lòng chọn một khảo sát trước khi Xuất dữ liệu." * Quy tắc hiển thị khảo sát:   + Hiển thị all trạng thái của khảo sát đã tạo   + Danh sách các bài khảo sát sẽ hiển thị theo phân quyền dữ liệu theo bộ lọc ở màn hình Thống Kế Khảo Sát |
| Thời gian thực hiện khảo sát | From date - To Date | Có | Có | * From date và To date là hai trường ngày cần được người dùng nhập để xác định khoảng thời gian thực hiện khảo sát của user (Ngày user submit khảo sát) * Hiển thị mặc định from date - to date theo thời gian của bộ truy vấn * Có thể search bất cứ khoảng thời gian nào. (From Date - To Date) <= 3 tháng * From date phải nhỏ hơn hoặc bằng To date. * Nếu From date lớn hơn To date, thông báo lỗi "Ngày bắt đầu không thể sau ngày kết thúc" sẽ được hiển thị, và form sẽ không được submit. * Cả From date và To date phải có định dạng hợp lệ theo chuẩn dd-mm-yyyy * Trường hợp ngày trùng nhau (From date = To date) là hợp lệ. |
| Xuất dữ liệu | Button | Có | Không | Click button để xuất dữ liệu  Hệ thống sẽ thực hiện export dữ liệu khảo sát ra file excel, template được mô tả bên dưới, template chỉ xuất ra câu trả lời của 1 bài khảo sát của tất cả nhân viên trong khoảng thời gian được chọn.  Khảo sát sẽ hiển thị theo dạng:   * Các câu hỏi khảo sát hiển thị trải dài ra theo cột, có bao nhiêu câu hỏi sẽ hiển thị hết, nếu ko có dữ liệu khi thực hiện trả lời khảo sát sẽ để trống * Mỗi lần thực hiện khảo sát sẽ hiển thị 1 dòng * 1 Điểm bán thực hiện khảo sát nhiều lần sẽ hiển thị nhiều dòng |

Template export

Filename:

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Người xuất báo cáo | * User thực hiện xuất báo cáo lịch sử  * Mã user - Tên user |
| Thời gian xuất báo cáo | * Thời gian xuất báo cáo lịch sử  thành công |
| Dữ liệu theo thời gian | * Thời gian từ ngày - đến ngày mà người dùng lọc trước khi xuất file báo cáo |
|  | |
| Mã nhân viên thực hiện | Mã nhân viên thực hiện khảo sát |
| Tên nhân viên thực hiện | Tên nhân viên thực hiện khảo sát |
| Mã tuyến | Mã định danh tuyến mà nhân viên thực hiện khảo sát.  Lấy tại thời điểm nhân viên thực hiện khảo sát.  Trường hợp trong tương lai nhân viên đổi sang tuyến khác cũng sẽ lấy mã tuyến lúc thực hiện khảo sát,  Nếu đối tượng ks = nhân viên; và nhân viên chưa có tuyến => trường này sẽ không có dữ liệu |
| Tên tuyến | Hiển thị tên Tuyến theo mã tuyến |
| Vùng | Hiển thị tên vùng theo Vùng của người quản lý trực tiếp nhân viên thực hiện khảo sát |
| Khu vực | Hiển thị tên khu vực theo Khu vực của người quản lý trực tiếp nhân viên thực hiện khảo sát |
| Mã khảo sát | Hiển thị mã chương trình khảo sát đã chọn |
| Tên khảo sát | Hiển thị tên CTKS |
| Lần thực hiện khảo sát | Lần thực hiện khảo sát của Điểm bán/nhân viên  VD khảo sát trên cùng đối tượng lần 1: ghi nhận "1"  Khảo sát trên cùng đối tượng lần thứ 2: ghi nhận "2"  (đối tượng áp dụng = Nhân viên  và nhân viên có nhiều tuyến thì không phân biệt tuyến nào, thực hiện lần nào thì ghi nhận lần đó) |
| Ngày thực hiện KS | Ngày thực hiện KS |
| Hình ảnh checkin | * Trường hợp khảo sát ở nhiệm vụ viếng thăm: Hiển thị hình ảnh checkin khi viếng thăm Điểm bán, nếu chụp nhiều hình, chỉ lấy hình chụp đầu tiên  * Trường hợp nhân viên chọn khảo sát ở các mục:    + Khác → Điểm bán → Chăm Sóc → Lấy hình checkin chụp trước khi thực hiện khảo sát, nếu chụp nhiều hình, chỉ lấy hình chụp đầu tiên  **Ở đây sẽ hiển thị dạng link để có thể click vào xem được trên trình duyệt (chỉ có 01 link cho 1 hình ảnh check in đầu tiên tại điểm bán** Trường hợp khảo sát có Đối tượng khảo sát là "Nhân viên", trường này sẽ không có dữ liệu |
| Mã Điểm bán | Mã Điểm bán mà nhân viên thực hiện khảo sát  Trường hợp khảo sát có Đối tượng khảo sát là "Nhân viên", trường này sẽ không có dữ liệu |
| Tên Điểm bán | Tên Điểm bán mà nhân viên thực hiện khảo sát  Trường hợp khảo sát có Đối tượng khảo sát là "Nhân viên", trường này sẽ không có dữ liệu |
| SDT Điểm bán | SDT Điểm bán mà nhân viên thực hiện khảo sát  Trường hợp khảo sát có Đối tượng khảo sát là "Nhân viên", trường này sẽ không có dữ liệu |
| Tỉnh / Thành | Tỉnh / Thành của Điểm bán mà nhân viên thực hiện khảo sát  Trường hợp khảo sát có Đối tượng khảo sát là "Nhân viên", trường này sẽ không có dữ liệu |
| Quận / Huyện | Quận / Huyện của Điểm bán mà nhân viên thực hiện khảo sát  Trường hợp khảo sát có Đối tượng khảo sát là "Nhân viên", trường này sẽ không có dữ liệu |
| Phường/Xã | Phường/Xã của Điểm bán mà nhân viên thực hiện khảo sát  Trường hợp khảo sát có Đối tượng khảo sát là "Nhân viên", trường này sẽ không có dữ liệu |
| Địa chỉ | Địa chỉ của Điểm bán mà nhân viên thực hiện khảo sát (Địa chỉ điểm bán lấy theo địa chỉ do user nhập vào, không phải địa chỉ từ Kinh độ, vĩ độ.)  Trường hợp khảo sát có Đối tượng khảo sát là "Nhân viên", trường này sẽ không có dữ liệu |
| Câu hỏi | Hiển thị tất cả câu hỏi trong bài khảo sát theo hàng ngang  STT câu hỏi khảo sát được thực hiện - Tên câu hỏi khảo sát được thực hiện |
| Câu trả lời | Câu trả lời được nhân viên khảo sát ghi nhận   * Nếu câu hỏi là loại là hình ảnh:   + Ở đây sẽ hiển thị dạng link để có thể click vào xem được trên trình duyệt   + Trường hợp có nhiều hình ảnh, các link hình sẽ hiển thị chung 1 ô dưới dạng  hoặc chỉ để 1 link duy nhất và click vào link có thể xem được nhiều hình.  * Nếu câu hỏi là loại Chọn nhiều: Mỗi dữ liệu trả lời sẽ cách nhau dấu ";" và khoảng trắng. VD: Bánh; Kẹo; Nước Ngọt; Kem dâu tây |