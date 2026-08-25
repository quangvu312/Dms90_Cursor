|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-2863 |
| Feature |  |
| Description | Mô tả quy trình cahasm teruwng bày bằng AI |
| Document version | RedV1.0.0 Khởi tạo |
| Document status | GreenDONE |
| Document owner | thao.ntt |
| Chage History | 2 |

truenone

# Quy trình - flow chấm trưng bày AI

Flow chấm trưng bày bằng AI

trueChấm trưng bày AI DMSfalse1500autotoptrue18121

# Cấu hình AI

Cách thức hoạt động:

Mô tả:

| Step | Desc | Note |
| --- | --- | --- |
| **Huấn luyện mô hình**  **(chuẩn bị)** | * Huấn luyện mô hình AI để nhận diện sản phẩm trong hình ảnh. * Thực hiện bằng cách sử dụng một tập dữ liệu huấn luyện lớn, chứa hàng nghìn (hoặc hàng trăm nghìn) hình ảnh của sản phẩm được trưng bày trong các điều kiện khác nhau. * Mỗi hình ảnh trong tập dữ liệu huấn luyện được gắn nhãn với thông tin về loại sản phẩm | * Đối tác sẽ thực hiện việc train nhận biết sản phẩm đó là sản phẩm gì trên hệ thống của họ   **FV cần:**   * Gửi các sản phẩm của công ty, của CTTB đang hoạt động * Gửi list sản phẩm đối thủ * Gửi 1000 hình ảnh cho tất cả các loại trưng bày (bao gồm nhiều sản phẩm), min = 1000  + Mỗi tủ/ kệ cần chụp ít nhất 10 tấm (với việc thay đổi SKU, mặt SKU  + Mỗi SKU cần chấm xuất hiện ít nhất 100 lần * Thời gian: 2 tuần tức lúc nhận data mới → sẽ có demo * 10 ngày nếu có thay đổi chương trình trưng bày |
| **Sử dụng mô hình AI để nhận diện sản phẩm**  **(Phân tích và nhận diện)** | * Khi mô hình đã được huấn luyện xong, áp dụng để tự động nhận diện sản phẩm trong hình ảnh mới.  * Mô hình sẽ phân tích hình ảnh và xác định vị trí, loại sản phẩm, và cách trưng bày | Đối tác làm:   * Competitor (có sản phẩm đối thủ, tô **màu đỏ**) * Right shelf: Đặt đúng kệ hay không (màu **vàng nâu**) * Right quantity: Đúng số lượng yêu cầu không **màu cam**) * Adjacencies: Có bị cách nhau hay không (màu **xanh dương**)   → Nếu thỏa mãn cả 4 thì pass, còn bị 1 trong các lỗi đó là fail, và có màu lỗi tương ứng  Ngoài ra check thêm các lỗi khác   * Không có vật thể lạ như trái dừa, ly...(không phải sku) * full row. Mỗi dòng phải trưng bày full, nếu có 1 ô trống là lỗi |
| **Đánh giá chất lượng trưng bày**: | * Dựa vào thông tin đã được nhận diện để đánh giá chất lượng trưng bày sản phẩm | **DMS dựa vào kết quả đối tác trả về để đánh giá tấm hình = ĐẠT/ KHÔNG ĐẠT**  **(công thức chi tiết xem bên dưới)**  **Kết quả đạt được**   * Nhận diện và đánh giá hình ảnh sản phẩm trưng bày để giúp tăng cường độ chính xác và hiệu quả * Giúp user sử dụng đưa ra quyết định nhanh chóng và kịp thời để tối ưu hoá chương trình trưng bày sản phẩm |

# Sản phẩm chấm trưng bày AI

## Khai báo sản phẩm chấm trưng bày AI

Thực hiện bên ngoài:

B1: gửi danh sách sản phẩm kinh doanh; Danh sách sản phẩm đối thủ về Hệ thống A.I

B2: Hệ thống AI gửi lại "AI\_Label" tương ứng

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- |
| Là sản phẩm đối thủ | Checkbox | Không | Mô tả: Người dùng khai báo sản phẩm trưng bày hay đối thủ.\  Default: OFF  Ràng buộc:   * Nếu check ON: hiểu là sản phẩm đối thủ; chỉ cần khai báo tên sản phẩm và AI\_Label (disable field "Mã sản phẩm") * Nếu check OFF: hiểu là sản phẩm trưng bày hay còn gọi là sản phẩm kinh doanh; sẽ chọn danh sách sku của sản phẩm còn hoạt động |
| Mã sản phẩm | Select Onechoice | Có | Là sản phẩm đối thủ = OFF  Chọn một sản phẩm từ danh sách sản phẩm đang hoạt động, không cho phép chọn trùng  Nếu chọn trùng khi lưu báo: "Mã sản phẩm không được trùng. Vui lòng kiểm tra lại!"  Place holder: Chọn mã sản phẩm  Ko chọn @Field là bắt buộc! |
| Text(16) | Không | Là sản phẩm đối thủ = ON  Disable field "Mã sản phẩm" |
| Tên sản phẩm | Datacolumns | Có | Là sản phẩm đối thủ = OFF   * Hiển thị theo mã sản phẩm đã chọn * Placeholder: Tên sản phẩm * Không được điều chỉnh |
| Text(100) | Có | Mô tả: người dùng khai báo sản phẩm đối thủ cho CTTB chấm điểm A.I  Là sản phẩm đối thủ = ON   * Mặc định dữ liệu trống. placholder: Nhập vào tên sản phẩm * Có thể nhập ký tự đặc biệt * Validate nhập <= 100 ký tự * Có ràng buộc khi bỏ trống "Tên sản phẩm là bắt buộc" |
| AI\_Label | Text(200) | Có | Mô tả: Người dùng nhập mã AI\_Label trả về từ hệ thống AI như mô tả ở trên  Ràng buộc   * placeholder: Nhập vào AI\_Label * Có thể nhập ký tự đặc biệt * Không nhập: @Field là bắt buộc! |
| Mô tả | Text (300) | Không | Plaholder: "Nhập vào mô tả"   * Validate nhập <= 300 ký tự |
| Hình sản phẩm | JPG/PNG/JPEG/SVG | Có | Mô tả: Người dùng upload hình ảnh sản phẩm khi chọn khai báo sản phẩm đối thủ. theo rule up hình hiện tại của hệ thống  **Ràng buộc:**  Là sản phẩm đối thủ = OFF: Mặc định lấy hình ảnh sản phẩm (1 tấm hình đầu tiên); không cho upload, disable button Upload  Là sản phẩm đối thủ = ON:   * Mặc định dữ liệu trống * Chỉ upload 1 ảnh; có thể nhấn vào hình hiện tại để upload ảnh mới * Có ràng buộc khi không upload đúng hình ảnh "Chỉ upload hình ảnh loại JPG/PNG/JPEG/SVG" * Có ràng buộc khi bỏ trống "Hình sản phẩm là bắt buộc" |
| Lưu | Button |  | Confirm trước khi lưu "Bạn chắc chắn muốn lưu?"  Đồng ý:   * Kiểm tra ràng buộc dữ liệu * Lưu dữ liệu khai báo và thoát màn hình   + Là sản phẩm đối thủ: Hệ thống tự gen mã sản phẩm theo format **AICOMPE0000000001**(Prefix AICOMPE; 0000000001 là số thứ tự random mã sản phẩm đối thủ   Hủy: Tắt popup và vẫn ở lại màn hình |
| Đóng hoặc chọn dấu x | Button |  | Mô tả: Nhấn đóng để thoát màn hình khai báo. msg "Bạn chắc chắn muốn thoát?"    Đồng ý: Thoát màn hình và không lưu dữ liệu.  Hủy: Tắt popup và vẫn ở lại màn hình |

## Chỉnh sửa sản phẩm AI

Điều chỉnh

Là sản phẩm đối thủ = ON

* Disable mã sản phẩm, checkbox
* Chỉ cho điều chỉnh tên sản phẩm; AI\_Label
* Cho phép upload hình khác, hình mới đè lên hình cũ
* Cho điều chỉnh mô tả

Là sản phẩm đối thủ = OFF

* Disable mã sản phẩm, tên sản phẩm, checkbox
* Cho điều chỉnh AI\_Label
* Cho điều chỉnh mô tả

**Chọn LƯU:** Confirm trước khi lưu "Bạn chắc chắn muốn lưu?"

* Đồng ý:
  + Kiểm tra ràng buộc dữ liệu
  + Lưu dữ liệu khai báo và thoát màn hình

* Hủy: Tắt popup và vẫn ở lại màn hình

**Chọn ĐÓNG  hoặc nhấn x** để thoát màn hình khai báo. msg "Bạn chắc chắn muốn thoát?"

* Đồng ý: Thoát màn hình và không lưu dữ liệu.
* Hủy: Tắt popup và vẫn ở lại màn hình

## Xem chi tiết sản phẩm AI

 Chỉ cho view và không được điều chỉnh; disable tất cả các button trên màn hình

## Danh sách sản phẩm chấm trưng bày AI

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Truy vấn | | | | |
| Tìm kiếm | Textsearch | Có | Không | **Nhập thông tin tìm kiếm theo mã  hoặc tên sản phẩm**  **Placeholder và tooltip: Tìm theo mã, tên sản phẩm**   * **Kết quả tìm kiếm**: Nhấn "Tìm kiếm"    + Danh sáchsản phẩm bên dưới sẽ tự động hiển thị bên dưới lưới danh sách   + Nếu không tìm thấy kết quả khớp, hệ thống sẽ hiển thị l*ưới danh sách rỗng* * **Xóa tìm kiếm**:    + Người dùng có thể xóa nội dung trong trường tìm kiếm để hiển thị lại toàn bộ danh sách sản phẩm mà không áp dụng bộ lọc. |
| Trạng thái | Select Onechoice | Có | Không | * Trường này cho phép người dùng chọn một trạng thái để lọc Danh sách sản phẩm dựa trên trạng thái đã chọn. * Placeholder:  Chọn trạng thái * Default bộ lọc Tất cả các trạng thái * Người dùng có thể tìm kiếm và chọn một trạng thái từ Danh sách sản phẩm có sẵn để tinh chỉnh kết quả hiển thị trong danh sách. * **Mở danh sách:** Khi người dùng nhấp vào trường "Trạng thái", một danh sách các trạng thái sẽ được mở ra. Danh sách trạng thái bao gồm:  * + Đang hoạt động   + Ngưng hoạt động * **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm trạng thái mong muốn. Sau đó, chọn một trạng thái bằng cách nhấp vào mục trong danh sách. (chỉ chọn một trạng thái)  * + Field này không yêu cầu người dùng phải chọn, có thể bỏ trống, bỏ trống hiểu là chọn tất cả các trạng thái * **Hiển thị lựa chọn:** Trạng thái đã chọn sẽ hiển thị trong hộp chọn dưới dạng text * **Kết quả lọc:** Nhấn "Tìm kiếm". Lưới danh sách hiển thị trạng thái tương ứng * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định hiển thị tất cả |
| Loại sản phấm | Select Onechoice | Có | Không | Chức năng: chọn loại sản phẩm  Placeholder: Chọn loại sản phẩm   * **Mở danh sách:** Khi người dùng nhấp vào trường "Loại sản phẩm", một danh sách các loại sản phẩm sẽ được mở ra. Danh sách trạng thái bao gồm:  * + Đối thủ  (Khi Field "Là sản phẩm đối thủ" = ON)   + Kinh doanh  (Khi Field "Là sản phẩm đối thủ" = OFF)   **Hiển thị kết quả:** danh sách sản phẩm sẽ tự động được lọc theo loại sản phẩm đã chọn,   * Trường hợp bỏ chọn trạng thái trong hộp chọn thì mặc định hiểu là chọn tất cả trạng thái để tìm kiếm. * Khi mở màn hình mặc định hiển thị tất cả * Chọn x để xóa loại sản phẩm đã chọn |
| Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại Danh sách sản phẩm, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các sản phẩm mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên Danh sách sản phẩm 2. **Danh sách sản phẩm làm mới:** Sau khi nhấp, danh sách Danh sách sản phẩm sẽ hiển thị toàn bộ theo bộ lọc mặc định.   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của Danh sách sản phẩm * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn trên Danh sách sản phẩm. không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc Danh sách sản phẩm theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong Danh sách sản phẩm. 3. **Hiển thị kết quả:** Danh sách sản phẩm sẽ cập nhật và hiển thị các Đăng ký CTTB phù hợp với các tiêu chí đã chọn.   **Lưu ý:**Nếu không có tiêu chí nào được chọn, Danh sách sản phẩm sẽ không thay đổi khi nhấn nút "Tìm kiếm". |

**Lưới danh sách sản phẩm**

| Tên trường | Kiểu dữ liệu | **Mô tả** |
| --- | --- | --- |
| Hình ảnh | Datacolumns | Hiển thị hình ảnh sản phẩm, xem hình theo rule hiện tại |
| Mã sản phẩm | Datacomlumn have copy | Hiển thị mã sản phẩm |
| Tên sản phẩm | Datacolumns | Hiển thị tên sản phẩm |
| Loại sản phẩm | Datacolumns | Hiển thị loại sản phẩm |
| Mô tả | Datacolumns | Hiển thị mô tả sản phẩm |
| AI\_Label | Datacomlumn have copy | Hiển thị Mã AI\_Label |
| Người tạo | Datacolumns | Mã người tạo |
| Ngày tạo | Datacolumns | ddmmyyy hhmmss |
| Người cập nhật | Datacolumns | Hiển thị mã người cập nhật |
| Ngày cập nhật | Datacolumns | ddmmyyy hhmmss |
| Trạng thái | Bolean | Mặc định tạo mới sản phẩm trạng thái = ON - Đang hoạt động  Cho phép chọn trạng thái = OFF - Ngưng hoạt động  (Không cần confirm) |
| Tùy chỉnh | button | Chọn để điều chỉnh sản phẩm |

## Import danh sách sản phẩm CTTB AI

### Import danh sách sán phẩm

Template: 

Quy trình

trueImport sản phẩm trưng bày AIfalseautotoptrue12072

trueKiểm tra Import Ai cơ bảnfalseautotoptrue7421

**Kiểm tra dữ liệu**

* Để trống: Trống 1 line => bỏ qua

* Không đúng định dạng: nhập tiếng việt, khoảng trắng (Trong- trước- sau mã), ký tự đặc biệt

|  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Rule validate |
| --- | --- | --- | --- | --- |
| 1 | Mã sản phẩm (bắt buộc khi loại sản phẩm = 2) (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * **valid khi Loại sản phẩm = 2** * Trường hợp Loại sản phẩm = 1 thì khi import bỏ qua không lưu field này | * **Mã sản phẩm** để trống, nhập không đúng định dạng, hiển thị thông báo:   + Dòng n: Sản phẩm @Mã sản phẩm nhập không đúng định dạng. Vui lòng kiểm tra lại!   + Dòng n: Mã sản phẩm bị bỏ trống. Vui lòng kiểm tra lại!  * **Mã sản phẩm** không tồn tại, không hoạt động trên hệ thống DMS: Hiển thị thông báo lỗi   + Dòng n: Sản phẩm @Mã sản phẩm không tồn tại. Vui lòng kiểm tra lại!   + Dòng n: Sản phẩm @Mã sản phẩm không hoạt động. Vui lòng kiểm tra lại! * Mã sản phẩm tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi   + Dòng n: Dòng n1,n2,n3 có @Mã sản phẩm trùng. Vui lòng kiểm tra lại! |
| 2 | Tên sản phẩm (bắt buộc khi loại sản phẩm = 1) (\*) | text (100) | * **valid khi Loại sản phẩm = 1** * Trường hợp Loại sản phẩm = 2 thì khi import bỏ qua không lưu field này * Có thể nhập ký tự đặc biệt * Validate nhập <= 100 ký tự | * Tên sản phẩm để trống: Hiển thị thông báo lỗi: "Dòng n: Tên sản phẩm bị bỏ trống, vui lòng kiểm tra lại!" * **Nếu có nhập:** Kiểm tra lần lượt các điều kiện:   + Nhập lớn hơn 100 ký tự:"Dòng n: Tên sản phẩm nhập tối đa 100 ký tự. Vui lòng kiểm tra lại!" |
|  | Loại sản phẩm  (1: đối thủ  2: Kinh doanh) (\*) | chỉ nhập số | valid số 1 và 2 | Nhập khác số 1 hoặc 2:  "Dòng n: Loại sản phẩm nhập không đúng định dạng. Vui lòng kiểm tra lại!"  để trống:   * Dòng n: Loại sản phẩm bị bỏ trống. Vui lòng kiểm tra lại! |
|  | Mô tả | text (300) |  | Trường không bắt buộc  Nhập >300 ký tự:   * Dòng n: Mô tả nhập tối đa 100 ký tự. Vui lòng kiểm tra lại!" |
| 2 | AI\_Label (\*) | text (200) | * Có thể nhập ký tự đặc biệt * Validate nhập <= 200 ký tự | * AI\_Label để trống: Hiển thị thông báo lỗi: "Dòng n: AI\_Label bị bỏ trống, vui lòng kiểm tra lại!" * **Nếu có nhập:** Kiểm tra lần lượt các điều kiện:   + **Định dạng dữ liệu.** → Nhập lớn hơn 200 ký tự:"Dòng n: AI\_Label @AI\_Label nhập tối đa 200 ký tự. Vui lòng kiểm tra lại!"   + **AI\_Label đã tồn tại**     - Dòng n: AI\_Label @AI\_Label không hoạt động. Vui lòng kiểm tra lại!"  * + AI\_Label tồn tại ở 2 dòng trên file import: Hiển thị thông báo lỗi     - Dòng n: Dòng n1,n2,n3 có @ AI\_Label trùng. Vui lòng kiểm tra lại! |

### Import hình ảnh:

B1: User tạo folder chứa danh sách hình ảnh có lưu tên hình = mã sản phẩm

B2: Chọn Import hình ảnh và chọn folder tương ứng

B3: Hệ thống mapping mã sản phẩm có loại sản phẩm = Đối thủ và hình ảnh tương ứng

* valid tên hình: Khác loại sản phẩm = đối thủ hoặc nhập không đúng định dạng hoặc không tồn tại trên hệ thống báo lỗi: dòng n: Hình @Tên hình không hợp lệ. Vui lòng kiểm tra lại!
* Nếu đã có hình => ghi đè hình mới

B4: Thông báo thành công và lỗi thất bại tương ứng

[Rule import chung của hệ thống](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode)

## Export danh sách

[Rule Emport chung của hệ thống](https://kb.finviet.com.vn/display/DMSNEW/Portal+HO?src=contextnavpagetreemode)

Template:

Mô tả:

| Trường dữ liệu | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Hình ảnh | Datacolumns | Hiển thị dạng hyperlink |
| Mã sản phẩm | Datacolumns | Hiển thị mã sản phẩm |
| Tên sản phẩm | Datacolumns | Hiển thị tên sản phẩm |
| Loại sản phẩm | Datacolumns | Hiển thị loại sản phẩm |
| Mô tả | Datacolumns | Hiển thị nội dung mô tả |
| AI\_Label | Datacolumns | Hiển thị AI\_Label đã nhập |
| Người tạo | Datacolumns | Mã nhân viên tạo |
| Ngày tạo | Datacolumns | ddmmyyyy hhmmss |
| Người cập nhật | Datacolumns | Mã nhân viên cập nhật |
| Ngày cập nhật | Datacolumns | ddmmyyyy hhmmss |

# CTTB - Chấm trưng bày AI

Field "Chấm trưng bày AI"

**Boolean. D****efault Chấm trưng bày AI = OFF**

**Màn hình khi Chấm trưng bày AI = ON như sau:**

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tỷ lệ đạt | int | Có | Có | Placeholder: Nhập vào tỷ lệ đạt  Tooltip: Nhập vào tỷ lệ đạt từ 0 đến 100%   * Numberic * **Kiểm tra giá trị (Validation)**:    + **Định dạng**: Giá trị phải là số nguyên   + **Giới hạn giá trị**:     - Giá trị tối thiểu: 1 (không chấp nhận số âm). Nếu nhập số âm/ số 0 reset = 1.     - Giá trị tối đa: 100     - Không nhập giá trị: @field là bắt buộc!     - Nhập chữ: Tự động xóa     - cho nhập số thập phân, lấy 2 số sau dấu phẩy * **Chức năng bổ sung**    1. **Tự động định dạng**:       + Hệ thống có thể tự động thêm "%" sau số đã nhập   2. **Điều chỉnh giá trị bằng nút tăng/giảm**:       + Bên cạnh góc phải của field có thể thêm nút (+) và (-)để tăng/giảm số lượng, giúp người dùng dễ dàng thao tác. |
| **Chấm tự động** | Boolean | Có | không |  |
| Sản phẩm kinh doanh và sản phẩm đối thủ |  | Có | Có | **1 line trên lưới danh sách sản phẩm kinh doanh có thể gắn max 5 sản phẩm đối thủ tương ứng**  ví dụ:     | # | Kinh doanh | Đối thủ | | --- | --- | --- | | 1 | Sữa chua nuticare | Sữa chua vinamik | |  |  | Sữa chua TH truemilk | |  |  | Sữa chua ABC |      | # | Kinh doanh | Đối thủ | | --- | --- | --- | | 2 | Nước yến A | Yến B | |  |  | Yến C | |
| Sản phẩm kinh doanh |  |  |  | Default hiển thị danh sách rỗng  Khi view hiển thị thông tin bao gồm:   * **Danh sách sản phẩm gồm:**    + **STT: Số thứ tự sản phẩm**   + **Mã sản phẩm,**   + **Tên sản phẩm,**   + **Số lượng**   + Tùy chỉnh: cho phép xóa sản phẩm vừa thêm. Click button Xóa. cho phép xóa mà không cần confirm dữ liệu, xóa từng sản phẩm     - Khi xóa hết danh sách →kiểm tra trên lưới tồn tại ít nhất 1 sản phẩm tặng; nếu không hiển thị higlight đỏ: "Bắt buộc phải chọn ít nhất 1 Mã sản phẩm" * phân trang hiển thị   Chọn button "Thêm sản phẩm" cho phép người dùng thêm sản phẩm vào danh sách tương ứng     * Filter: Trạng thái   + Placeholder: Tìm kiếm   + Tooltip: Tìm kiếm theo Mã, tên sản phẩm   + Chọn Tìm kiếm: Hiển thị danh sách sản phẩm có loại sản phẩm = Kinh doanh đang hoạt động dựa vào textsearch, Không nhập gì → hiển thị tất cả danh sách sản phẩm có loại sản phẩm = Kinh doanh đang hoạt động   + Chọn Làm mới: Refresh màn hình và hiển thị placeholder:   + Tìm kiếm; lưới danh sách hiển thị theo bộ lọc   Danh sách sản phẩm:     * + Mã sản phẩm: danh sách sản phẩm có loại sản phẩm = Kinh doanh đang hoạt động   + Tên sản phẩm: hiển thị theo mã sản phẩm đã chọn   + Trạng thái: hiển thị theo trạng thái đang active của sản phẩm   + Phân trang hiển thị    Check để chọn sản phẩm;  * Check box cho phép chọn các Sản phẩm để insert vào Grid Sản phẩm. Mở Popup lần sau, khi chọn bộ lọc có Sản phẩm đã chọn trước, màn hình vẫn hiển thị checkbox đã chọn của Sản phẩm đó, người dùng có thể bỏ check * Cho phép check một hoặc nhiều * Cho phép check All   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt  Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Đồng ý: Xóa tất cả các mục đã chọn; chọn Hủy: Tắt popup và vẫn giữ nguyên trạng thái    Icon check trên header hiển thị check khi tồn tại từ 1 check dưới lưới danh sách  -------  ***lưu ý:**Khi thao tác trên pop-up Thêm Sản phẩm, thì ngoài danh sách Sản phẩm của chương trình trưng bày cũng update theo, và ngược lại*   * *Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại*  * *Nếu xóa trên lưới danh sách thì khi mở popup, filter dữ liệu Sản phẩm đã xóa sẽ thấy uncheck Sản phẩm*   *--*  Button "**Đồng ý**" cho phép người dùng insert danh sách Sản phẩm đã chọn vào Grid Danh sách Sản phẩm và đóng Popup  **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Đồng ý" để  insert danh sách Sản phẩm đã chọn vào Grid Danh sách Sản phẩm  và đóng Popup 2. **Hành động diễn ra**: insert danh sách đã chọn vào Grid và đóng Popup   **Lưu ý:**   * Khi đã add Sản phẩm ; Chọn  back về màn hình trước rồi quay lại vẫn hiển thị danh sách đã chọn * Hoặc chọn Tiếp tục => Chọn back về lại vẫn thấy danh sách Sản phẩm đã chọn * Đã add Thêm thành công; sau đó chọn add thêm nữa => Danh sách đã chọn vẫn hiển thị "đã chọn", muốn bỏ chọn thì uncheck và nhấn Đồng ý     **Field: Số lượng**  Placeholder: Nhập vào số lượng  **Kiểm tra giá trị (Validation)**:   * **Định dạng**: Giá trị phải là số nguyên * **Giới hạn giá trị**:   + Giá trị tối thiểu: 1 (không chấp nhận số âm). Nếu nhập số âm/ số 0 reset = 1.   + Giá trị tối đa: 100   + Không nhập giá trị: Nếu không nhập số lượng → hiển thị Highlight đỏ khi lưu "Số lượng yêu cầu của sản phẩm @Mã sản phẩm phải lớn hơn 0" * Nhập chữ: Tự động xóa * Nhập số thập phân: Auto remove dấu phẩy & không báo lỗi . nhập dấu chấm hiển thị: "Không nhập số thập phân"   **Điều chỉnh giá trị bằng nút tăng/giảm**:   * Bên cạnh góc phải của field có thể thêm nút (+) và (-)để tăng/giảm số lượng, giúp người dùng dễ dàng thao tác. |
| Sản phẩm đối thủ |  |  |  | Default hiển thị danh sách rỗng  Khi view hiển thị thông tin bao gồm:   * **Danh sách sản phẩm gồm:**    + **STT: Số thứ tự sản phẩm**   + **Mã sản phẩm,**   + **Tên sản phẩm,**   + **Số lượng**   + Tùy chỉnh: cho phép xóa sản phẩm vừa thêm. Click button Xóa. cho phép xóa mà không cần confirm dữ liệu, xóa từng sản phẩm     - Khi xóa hết danh sách →kiểm tra trên lưới tồn tại ít nhất 1 sản phẩm tặng; nếu không hiển thị higlight đỏ: "Bắt buộc phải chọn ít nhất 1 Mã sản phẩm" * phân trang hiển thị   Chọn button "Thêm sản phẩm" cho phép người dùng thêm sản phẩm vào danh sách tương ứng     * Filter: Trạng thái    + Placeholder: Tìm kiếm   + Tooltip: Tìm kiếm theo Mã, tên sản phẩm   + Chọn Tìm kiếm: Hiển thị danh sách sản phẩm có loại sản phẩm = Đối thủ đang hoạt động dựa vào textsearch, Không nhập gì → hiển thị tất cả danh sách sản phẩm có loại sản phẩm = Đối thủ đang hoạt động   + Chọn Làm mới: Refresh màn hình và hiển thị placeholder:   + Tìm kiếm; lưới danh sách hiển thị theo bộ lọc   Danh sách sản phẩm:     * + Mã sản phẩm: danh sách sản phẩm có loại sản phẩm = Đối thủ đang hoạt động   + Tên sản phẩm: hiển thị theo mã sản phẩm đã chọn   + Trạng thái: hiển thị theo trạng thái đang active của sản phẩm   + Phân trang hiển thị    Check để chọn sản phẩm;   * Check box cho phép chọn các Sản phẩm để insert vào Grid Sản phẩm. Mở Popup lần sau, khi chọn bộ lọc có Sản phẩm đã chọn trước, màn hình vẫn hiển thị checkbox đã chọn của Sản phẩm đó, người dùng có thể bỏ check * Cho phép check một hoặc nhiều * Cho phép check All   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt  Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Đồng ý: Xóa tất cả các mục đã chọn; chọn Hủy: Tắt popup và vẫn giữ nguyên trạng thái    Icon check trên header hiển thị check khi tồn tại từ 1 check dưới lưới danh sách  -------  ***lưu ý:**Khi thao tác trên pop-up Thêm Sản phẩm, thì ngoài danh sách Sản phẩm của chương trình trưng bày cũng update theo, và ngược lại*   * *Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại*  * *Nếu xóa trên lưới danh sách thì khi mở popup, filter dữ liệu Sản phẩm đã xóa sẽ thấy uncheck Sản phẩm*   *--*  Button "**Đồng ý**" cho phép người dùng insert danh sách Sản phẩm đã chọn vào Grid Danh sách Sản phẩm và đóng Popup  **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Đồng ý" để  insert danh sách Sản phẩm đã chọn vào Grid Danh sách Sản phẩm  và đóng Popup 2. **Hành động diễn ra**: insert danh sách đã chọn vào Grid và đóng Popup   **Lưu ý:**   * Khi đã add Sản phẩm ; Chọn  back về màn hình trước rồi quay lại vẫn hiển thị danh sách đã chọn * Hoặc chọn Tiếp tục => Chọn back về lại vẫn thấy danh sách Sản phẩm đã chọn * Đã add Thêm thành công; sau đó chọn add thêm nữa => Danh sách đã chọn vẫn hiển thị "đã chọn", muốn bỏ chọn thì uncheck và nhấn Đồng ý     Field: Số lượng  Placeholder: Nhập vào số lượng  **Kiểm tra giá trị (Validation)**:   * **Định dạng**: Giá trị phải là số nguyên * **Giới hạn giá trị**:    + Giá trị tối thiểu: 1 (không chấp nhận số âm). Nếu nhập số âm/ số 0 reset = 1.   + Giá trị tối đa: 100   + Không nhập giá trị: Nếu không nhập số lượng → hiển thị Highlight đỏ khi lưu "Số lượng yêu cầu của sản phẩm @Mã sản phẩm phải lớn hơn 0" * Nhập chữ: Tự động xóa * Nhập số thập phân: Auto remove dấu phẩy & không báo lỗi . nhập dấu chấm hiển thị: "Không nhập số thập phân" * Validate số loại sản phẩm <= 5 (Tức 1 sản phẩm kinh doanh thì tương ứng trên lưới danh sách chỉ max 5 sản phẩm đối thủ)   **Điều chỉnh giá trị bằng nút tăng/giảm**:   * Bên cạnh góc phải của field có thể thêm nút (+) và (-)để tăng/giảm số lượng, giúp người dùng dễ dàng thao tác. |

# Tiến trình trưng bày -Chấm trưng bày

## Chấm trưng bày tự động = OFF

## Chấm trưng bày tự động = ON

|  |  |  |  |
| --- | --- | --- | --- |
| **Tên trường** | **Mô tả** | | |
| **Kiểm tra kết quả bằng AI** | * Onclick để lấy kết quả chấm hình ảnh * Sau khi Onclick, nếu lấy thành công thì hiển thị , disable không cho thao tác tiếp tục * Sau khi Onclick, nếu lấy thất bại thì hiển thị , cho phép thực hiện lại để lấy kết quả mới. | | |
| **Kết quả AI** | * Mặc định kết quả AI = trống * Sau khi người dùng thao tác chọn nút "Kiểm tra kết quả bằng AI" thì sẽ hiển thị được kết quả theo điều kiện cấu hình của chương trình   Kết quả theo chi tiết chấm trưng bày AI bên dưới | | |

## Chi tiết chấm trưng bày AI

|  |  |  |  |
| --- | --- | --- | --- |
| **Tên trường** | **Mô tả** | | |
| **Hình ảnh** | Hình ảnh xem chi tiết tương ứng | | |
| **Sản phẩm kinh doanh** | * Hiển thị tiêu đề * Hiển thị các sản phẩm được cấu hình theo điều kiện ở tab "Sản phẩm kinh doanh"    + Tên sản phẩm   + Số lượng thực tế AI đếm được / @số lượng sản phẩm (theo điều kiện ở tab "Sản phẩm kinh doanh")      - Nếu kết quả chấm điểm có số lượng >= số lượng cấu hình thì hiển thị màu xanh lá, ý nghĩa là Đạt điều kiện.     - Nếu kết quả chấm điểm có số lượng < số lượng cấu hình thì hiển thị màu đỏ, ý nghĩa là Không đạt điều kiện | | |
| **Sản phẩm đối thủ** | * Hiển thị tiêu đề * Hiển thị các sản phẩm được cấu hình theo điều kiện ở tab "Sản phẩmđối thủ"    + Tên sản phẩm   + Số lượng thực tế AI đếm được / @số lượng sản phẩm (theo điều kiện ở tab "Sản phẩm đối thủ")     - Nếu kết quả chấm điểm có số lượng >= số lượng cấu hình thì hiển thị màu đỏ, ý nghĩa là Không đạt điều kiện     - Nếu kết quả chấm điểm có số lượng < số lượng cấu hình thì hiển thị màu xanh lá, ý nghĩa là Đạt điều kiện | | |
|  | Kết quả chấm hình:  : kết quả: Không đạt yêu cầu   * Nếu có bất kỳ tiêu chí nào bên trong Không đạt   : kết quả: Đạt yêu cầu:   * **Nếu tất cả các tiêu chí bên trong đều Đạt** | | |
| **Kết quả AI** | **Kết quả AI = ĐẠT** khi Kết quả chấm hình Đạt yêu cầu  **Kết quả AI = KHÔNG ĐẠT** khi Kết quả chấm hình Không đạt yêu cầu | | |
|  | Dựa vào Field @Tỷ lệ đạt  **Giả sử lần 1 chụp 5 tấm hình**   * Kết quả AI tương ứng:   Pic 1: Đạt  Pic 2: Không Đạt  Pic 3: Đạt  Pic 4: Đạt  Pic 5: Không Đạt   * Tỷ lệ đạt 55.55 %   **Công thức tính kết quả:**  Kết quả chấm điểm AI = Count số hình Đạt/ Tổng số hình chụp lần 1 \*100  Nếu @Kết quả chấm điểm AI  >= @Tỷ lệ đạt   * Kết quả chấm điểm AI = ĐẠT   Ngược lại @Kết quả chấm điểm AI  < @Tỷ lệ đạt   * Kết quả chấm điểm AI = KHÔNG ĐẠT     **Kết quả chấm điểm AI = 3/5 \*100 = 60%**  **@Kết quả chấm điểm AI  >= @Tỷ lệ đạt => Kết quả chấm điểm AI = ĐẠT** | | |

# App Chụp hình trưng bày

([SM APP] Chấm trưng bày AI)

* Docs này chỉ mô tả các phần update liên quan đến AI chấm hình ảnh, các giao diện và luồng khác vẫn giữ như cũ không thay đổi
* Kết quả AI được hiển thị trên từng hình ảnh