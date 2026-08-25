|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-7717 |
| Epic |  |
| Feature |  |
| Description | Chức năng quản lý thông báo và nhận thông báo  1/ Cài đặt thông báo  2/ Lịch sử thông báo  3/ Nhận thông báo app QL và SM  4/ Hiển thị thông báo trên Portal HO và và Portal NPP |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

# Thông tin chung

**1/ Thực trạng:** Đã có tình năng tạo mới thông báo và xem danh sách thông báo đã tạo theo trạng thái xử lý [HO] Quản lý thông báo

**2/ Mục tiêu:**

* Thêm đối tượng áp dụng thông báo khi tạo mới
* Cho phép tải file PDF để import ở khung HTML (Nội dung thông báo) tại form tạo thông báo
* Thêm thời gian hết hạn thông báo

# Cài đặt thông báo

## Danh sách thông báo

|  | Tên trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| Vùng lọc | | | | | |
|  | **Đối tượng** | Select Onechoice | Có | Không | * **Bổ sung danh sách Đối tượng trong dropdownlist: "Nhà phân phối;  Nhân viên bán hàng; Nhân viên HO; Kênh bán hàng; Ngành hàng; Chức vụ & NPP; Chức vụ & Kênh bán hàng; Chức vụ & Ngành hàng;"** * Danh sách Đối tượng đầy đủ bao gồm:   + Tất cả   + **Nhà phân phối**   + **Kênh bán hàng**   + **Ngành hàng**   + Nhân viên bán hàng   + **Nhân viên HO**   + Chức vụ   + **Chức vụ & NPP**   + **Chức vụ & Kênh bán hàng**   + **Chức vụ & Ngành hàng** * Người dùng chọn **một Đối tượng** từ danh sách bằng cách nhấp vào tên Đối tượng mong muốn. |
|  | Trạng thái | Select box multichoice | Có | Không | **Danh sách trạng thái bổ sung "Hết hạn"**  Danh sách trạng thái bao gồm:   * Khởi tạo * Đang xử lý * Đã gửi * Thất bại * **Hết hạn** |
| Lưới danh sách | | | | | |
|  | Đối tượng | Datacolumn | Không | Không | * **Bổ sung danh sách Đối tượng trong dropdownlist: "Nhà phân phối;  Nhân viên bán hàng; Nhân viên HO; Kênh bán hàng; Ngành hàng; Chức vụ & NPP; Chức vụ & Kênh bán hàng; Chức vụ & Ngành hàng;"** * Danh sách Đối tượng đầy đủ bao gồm:   + Tất cả   + **Nhà phân phối**   + **Kênh bán hàng**   + **Ngành hàng**   + Nhân viên bán hàng   + **Nhân viên HO**   + Chức vụ   + **Chức vụ & NPP**   + **Chức vụ & Kênh bán hàng**   + **Chức vụ & Ngành hàng** |
|  | Trạng thái | Datacolumn | Không | Không | * Trạng thái đang có: Khởi tạo, Đang xử lý, Đã gửi, Thất bại  * **Bổ sung trạng thái "Hết hạn"**  * + Những thông báo có "Ngày kết thúc thông báo" (Không quan tâm trạng thái thông báo) → Thông báo sẽ tự động đổi trạng thái sang **"Hết hạn"** khi thời gian hiện tại > "Ngày kết thúc thông báo"   + Khi hết hạn: Thông báo biến mất khỏi danh sách "Thông báo" trên App Mobile (SM APP và Manager APP) và trên Portal HO-NPP của nhân viên nhưng vẫn lưu trong lịch sử trên Portal HO.   + Những thông báo không cài đặt ngày hết hạn sẽ không tắt hiển thị. |
|  | Ngày kết thúc thông báo | Datacolumn | Không | Khồng | Vị trí: Sau cột "Trạng thái"  Hiển thị:   * Format: dd/mm/yyyy hh:mm * Không có thì để trống |
|  | Tùy chỉnh | Button | Có | Không | **Gửi thông báo:**  Trường này cho phép người dùng gửi thông báo đã được tạo đến ứng dụng di động (App QL, App SM) và trên Portal HO-NPP của nhân viên. Khi nhấn vào nút "Gửi", hệ thống sẽ thực hiện các bước xử lý như sau:   * **Xác nhận gửi**: Hiển thị hộp thoại xác nhận trước khi gửi. Bạn có muốn gửi thông báo này không?    + **Đồng ý**:     - Thực hiện gửi thông báo đến các đối tượng đã được cài đặt trong thông báo.     - Trạng thái của thông báo sẽ chuyển từ "Khởi tạo" sang "Đang xử lý" để gửi tiến hành gửi thông báo đi.     - Sau khi đã gửi đủ cho các đối tượng trong thông báo, thông báo sẽ chuyển từ trạng thái "Đang xử lý" sang "Đã gửi".     - Trường hợp có lỗi xảy ra,  thông báo sẽ chuyển từ trạng thái "Đang xử lý" sang "Thất bại".   + **Trở lại**: Đóng popup và quay về màn hình hiện tại, không thực hiện bất cứ thao tác nào. |

## Tạo mới thông báo

| Tên trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- |
| Đối tượng | Selectbox One Choice | Có | Có | * Trường này cho phép người dùng chọn một Đối tượng duy nhất từ danh sách có sẵn để cài đặt cho thông báo. * Khi người dùng chọn vào trường này, một danh sách **Đối tượng phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách Đối tượng bao gồm:**   + **Tất cả**   + **Nhà phân phối**   + **Kênh bán hàng**   + **Ngành hàng**   + **Nhân viên bán hàng**   + **Nhân viên HO**   + **Chức vụ**   + **Chức vụ & NPP**   + **Chức vụ & Kênh bán hàng**   + **Chức vụ & Ngành hàng** * Người dùng chọn **một Đối tượng** từ danh sách bằng cách nhấp vào tên Đối tượng mong muốn. * Sau khi chọn, tùy từng đối tượng được chọn sẽ hiển thị thêm các trường dữ liệu khác để người dùng nhập liệu cho đối tượng được chọn. Nội dung sẽ được mô tả ở Cài đặt đối tượng cho thông báo * Nếu muốn bỏ chọn đối tượng, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select). * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder và Tootip: Chọn Đối tượng để cài đặt thông báo |
| Gửi tự động | Checkbox  Mặc định uncheck | Có | Không | Đổi vị trí hiển thị trên UI |
| Ngày kết thúc thông báo | Date | Cói | Không | * Format: dd/mm/yyyy hh:mm * Không bắt buộc * Mặc định hiển thị placeholder: Chọn ngày kết thúc thông báo. Tức là không có ngày kết thúc cho thông báo này. * Tooltip: "Thiết lập ngày hết hạn cho thông báo phải sau ngày hiện tại hoặc sau thời gian gửi tự động. Sau thời gian này, nhân viên sẽ không thể xem thông báo này nữa." * Được chọn ngày/ tháng/ năm Giờ: Phút   + Validate ngày:     - Gửi tự động = Uncheck: Ngày thông báo hết hiệu lực phải > ngày giờ hiện tại. Disable ngày giờ nhỏ hơn hoặc bằng thời gian hiện tại.       * *Ví dụ hiện tại là 15/06/2029 11:19 → Disable từ 15/06/2029 11:59; chỉ được chọn từ 15/06/2029 12:00 trở đi*     - Gửi tự động = Checked: Ngày; giờ; phút thông báo hết hiệu lực. Phải > ngày/tháng/năm giờ/phút do người dùng đã chọn tại "Gửi tự động"       * *Ví dụ "Gửi tự động" là 15/06/2029 11:19 → Disable từ 15/06/2029 11:19; chỉ được chọn từ 15/06/2029 11:20 trở đi*   + Không hợp lệ báo inline: "Ngày giờ kết thúc thông báo chưa hợp lệ!"   **Kết quả:**   * Thông báo sẽ tự động đổi trạng thái từ "Đã gửi" sang "Hết hạn" khi thời gian hiện tại > "Ngày kết thúc thông báo" * Khi hết hạn: Thông báo biến mất khỏi danh sách "Tin nhắn/Thông báo" trên App Mobile (SM APP và Manager APP) của nhân viên nhưng vẫn lưu trong lịch sử trên Portal HO. |
| Nội dung thông báo | HTML Editor | Có | Có | Soạn thảo nội dung thông báo hỗ trợ HTML, có thể bao gồm văn bản định dạng, hình ảnh, liên kết, file đính kèm và các yếu tố tùy chỉnh khác. Người dùng có thể nhập trực tiếp hoặc dán nội dung từ nguồn khác.  => Bổ sung đính kèm File tải lên từ thiết bị/ drive. Khi nhấn vào , một cửa sổ chọn tệp sẽ hiện ra cho phép tải lên từ thiết bị hoặc từ drive, lọc sẵn các định dạng .pdf và hiển thị dòng text highlight " Tải tài liệu PDF tối đa 10 MB ". Chỉ cho tải 1 file/ lần    **Quy tắc đính kèm tệp PDF**   * **Định dạng:** Chỉ chấp nhận đuôi .pdf * **Dung lượng:** Tối đa 10MB/tệp * **Hiển thị:** Load tất cả nội dung thỏa điều kiện trên file pdf vào khung HTML * **Thông báo lỗi:**    + Sai định dạng: "Tệp không đúng định dạng PDF. Vui lòng kiểm tra lại." *(Do đã lọc file .pdf nên có thể bỏ qua message này)*   + Quá dung lượng: "Dung lượng tài liệu PDF tối đa 10 MB. Vui lòng kiểm tra lại!" |

### Cài đặt đối tượng cho Thông Báo Apply\_For\_Update

Bảng thông tin theo danh sách đối tượng:

|  | Đối tượng | Thấy thông báo trên app (SM /QL)  ([HO] Lịch sử thông báo) | Hiển thị trên portal HO/ NPP | Logic xử lý chi tiết hiển thị thông báo |
| --- | --- | --- | --- | --- |
| 1 | **Tất cả** | Tất cả nhân viên login trên app thỏa điều kiện sẽ thấy | Tất cả nhân viên login trên portal HO/ NPP đều thấy | Không thay đổi theo nội dung đã mô tả [HO] Quản lý thông báo  Bổ sung thêm logic mô tả trong doc này. |
| 2 | **Chức vụ** | Không thay đổi theo nội dung đã mô tả [HO] Quản lý thông báo | | |
| 3 | **Nhân viên bán hàng** | Logic Không thay đổi theo nội dung đã mô tả [HO] Quản lý thông báo  Đổi tên "Nhân viên" thành "Nhân viên bán hàng" trên dropdown list hiển thị. | | |
| 4 | **Nhân viên HO** | Không | Chỉ thấy khi login vào portal HO | Chỉ nhân viên HO thuộc danh sách mới thấy thông báo |
| 5 | **Nhà phân phối** | Không | Chỉ thấy khi login vào portal NPP | Chỉ NPP thuộc danh sách mới thấy thông báo. |
| 6 | **Kênh bán hàng** | Tất cả | Không | Nhận nếu trường **Kênh bán hàng** trong Master Data của nhân viên trùng với kênh chọn. |
| 7 | **Ngành hàng** | Salesman / SUP | Không | Nhận nếu **tuyến bán hàng** có danh mục sản phẩm thuộc ngành hàng đã chọn.  1/ Một tuyến bán hàng của một nhân viên (Nhân viên là sale hoặc SUP) sẽ quản lý một hoặc nhiều nhãn hàng  2/ Mapping danh sách nhãn hàng trên thông báo với nhãn hàng trên tuyến, nếu có trùng từ 1 nhãn thì hiển thị thông báo cho nhân viên quản lý tuyến đó thấy |
| 8 | Các chức vụ khác | Không | **Không nhận** (Do hệ thống chưa định nghĩa ngành hàng trực tiếp cho cấp quản lý). |
| 9 | **Chức vụ & NPP** | Salesman / SUP | Không | (Chức vụ trùng) **AND** (Có tuyến tại NPP được chọn). |
| 10 | Các chức vụ khác | Không | (Chức vụ trùng) **AND** (Có quyền xem NPP theo cây Salesforce). |
| 11 | **Chức vụ & Kênh bán hàng** | Tất cả | Không | (Chức vụ trùng) **AND** (Kênh bán hàng trong Master Data nhân viên bán hàng trùng). |
| 12 | **Chức vụ & Ngành hàng** | Salesman / SUP | Không | (Chức vụ trùng) **AND** (Có bán sản phẩm thuộc nhãn hàng của ngành hàng trên tuyến). 1/ Một tuyến bán hàng của một nhân viên  (Nhân viên là sale hoặc SUP) sẽ quản lý một hoặc nhiều nhãn hàng  2/ Mapping danh sách nhãn hàng trên thông báo với nhãn hàng trên tuyến, nếu có trùng từ 1 nhãn thì hiển thị thông báo cho nhân viên quản lý tuyến đó thấy |

#### **Đối tượng = Tất cả**

Tất cá các nhân viên trong Vùng được chọn sẽ hiển thị thông báo:

* Dựa vào thông tin vùng ở trường này để gửi thông báo đến các nhân viên có Vùng mà Thông báo đã cài đặt
  + Phân vùng của nhân viên được cài đặt ở [[HO] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357)
  + Phân vùng của Tài khoản người dùng là HO
    - Phân quyền Vùng/khu vực: được lấy từ [HO] Tài Khoản Người Dùng > Quyền HO > Vùng/Khu vực
    - Nếu người dùng có gán TKTT: được lấy theo Vùng/ khu vực của TKTT được gán [HO & NPP] Phân quyền dữ liệu
  + Thông báo được gửi đến App QL và App SM; Nhân viên là admin HO login trên web cho từng nhân viên trong phân vùng được chọn.

**NPP**

#### **Đối tượng = Nhà phân phối**

Chọn đối tượng là Nhà phân phối bằng cách click vào button Chọn như hình 

Sau khi click button "Chọn" hiển thị màn hình để chọn NPP theo nội dung đã mô tả [IMPROVEMENT] Enhance chức năng select all cho selectbox chọn NPP trên các màn hình

* Validate và báo lỗi inline "Nhà phân phối là bắt buộc!" khi chọn đối tượng này.

**Kết quả:**

* Các Tài khoản người dùng đang hoạt động thuộc Quyền Nhà Phân Phối và có NPP chăm sóc là một trong các NPP đã chọn.
* Thông báo được gửi đến portal NPP, Khi Tài khoản người dùng có NPP chăm sóc thuộc danh sách được chọn login trên Portal NPP tương ứng sẽ thấy thông báo trên Chuông thông báo và số lượng thông báo chưa đọc

**Kênh**

#### **Đối tượng = Kênh bán hàng**

Khi người dùng chọn Đối tượng này, một trường selectbox "Kênh bán hàng" sẽ hiển thị trên màn hình bên cạnh trường "Đối tượng"

* Trường này cho phép người dùng chọn Kênh bán hàng đang hoạt động từ danh sách có sẵn để cài đặt cho thông báo.
* Người dùng có thể chọn nhiều **Kênh bán hàng** từ danh sách bằng cách nhấp vào tên kênh mong muốn.
* Sau khi chọn, nhân viên trùng với kênh được cài đặt mới nhận được thông báo
* Bắt buộc phải chọn Kênh bán hàng khi chọn đối tượng = **Kênh bán hàng.** Validate và báo lỗi inline "Kênh bán hàng là bắt buộc!" khi chọn đối tượng này.

* Nếu muốn bỏ chọn **Kênh bán hàng**, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select).
* Nếu không chọn **Kênh bán hàng** nào trong hộp chọn, thì được hiểu là chưa chọn **Kênh bán hàng.**
* Khi selectbox xuất hiện mặc định không chọn dữ liệu nào trong hộp chọn.
* Placeholder: Chọn kênh bán hàng

**Kết quả:**

* Thông báo được gửi đến App QL và App SM nếu nhân viên có kênh bán hàng tại màn hình "Nhân viên bán hàng" trùng với một trong các kênh của thông báo sẽ được nhìn thấy.

**Ngành hàng**

#### **Đối tượng = Ngành hàng**

1/ Click button "Chọn" để hiển thị màn hình Chọn ngành hàng theo nội dung:

* [IMPROVEMENT] Enhance chức năng select all ngành hàng (tất cả phân cấp) trên các màn hình

2/ Sau khi chọn Nhãn hàng → Chọn "Đồng ý → Bổ sung logic:

**Chỉ hiển thị các Ngành hàng có từ một Nhãn hàng active (Ngành hàng và nhãn hàng đều hoạt động)**

* Ngành hàng không có Nhãn hàng/Ngành hàng Inactive: KHÔNG Lưu
* Ngành hàng (Active) có tất cả Nhãn hàng Inactive: KHÔNG Lưu
* Ngành hàng (Active) có từ một Nhãn hàng Active: báo lỗi các Nhãn bị inactive như thông báo:

1. Tạo mới →  chỉ hiển thị các nhãn hàng active; ngành hàng active và có từ 1 nhãn hàng active.
2. Chỉnh sửa và nhấn Đồng ý
   * Danh sách các nhãn đã chọn hiển thị cả **active và inactive theo dữ liệu đã lưu.**
   * Danh sách các nhãn chưa chọn chỉ load các danh sách **active**
   * **Nhưng khi chọn "Đồng ý" Validate và chỉ cho lưu khi Ngành và Nhãn đều active.**
3. *(Xem chi tiết/ Filter: Danh sách các nhãn đã chọn hiển thị cả active và inactive tại thời điểm xem theo dữu liệu đã lưu.)*

**Tại thời điểm Đồng ý**, nếu một "**Ngành hàng hoặc nhãn hàng"** đã chọn bị ngưng hoạt động => **hiển thị thông báo: "Ngành hàng [Tên ngành 1], [Tên ngành 2], [Tên ngành n] không hoạt động; Nhãn @tên nhãn 1, tên nhãn 2, tên nhãn n đang không hoạt động. Vui lòng kiểm tra lại!"**

*Ví dụ:*

*TH1: Field "Nhãn hàng" trống, chưa chọn trước đó => Nhấn "Chọn":*  
*Chọn Nhãn active*  
*=> Mở Tab khác Inactive nhãn hoặc ngành rồi **Đồng ý** báo lỗi. Tắt cửa sổ  → Field "Nhãn hàng" vẫn show trống*

*TH2: Field "Nhãn hàng" đã chọn (Đã chọn cả 2 nhãn đều active; ngành active): Tại thời điểm này, mở màn hình và click "Chọn" Nhãn 1 (Active), (Nhãn 2 Inactive)*  
*+ Khi view detail tuyến vẫn show "Đã chọn 2 nhãn"*  
*+ Update tuyến: Nhấn "Chọn" => **Đồng ý** báo lỗi. Tắt cửa sổ Field "Nhãn hàng" vẫn show "Đã chọn 2 nhãn" Không cập nhật dữ liệu thay đổi này.*

  

3/ Sau đó chọn "Lưu" thông báo thành công Trường hợp không chọn bất kỳ nhãn nào => Validate và báo lỗi inline "Ngành hàng là bắt buộc!" khi chọn đối tượng này.

**Kết quả:**

* Thông báo được gửi đến App QL và App SM, Những nhân viên bán hàng nào có Nhãn hàng trên tuyến bán hàng thuộc một trong các Nhãn trong danh sách của thông báo sẽ thấy thông báo này
* **KHÔNG gửi** cho những chức vụ là SD/RSM/ASM/ SS- mà không có tuyến nào thỏa điều kiện (Do hệ thống chưa định nghĩa ngành hàng/nhãn hàng trực tiếp cho cấp quản lý).

**Nhân viên bán hàng**

#### **Đối tượng = Nhân viên bán hàng**

Chỉ đổi tên "Nhân viên" Thành "Nhân viên bán hàng" Logic không thay đổi theo tài liệu gốc [HO] Quản lý thông báo

**HO**

#### **Đối tượng = Nhân viên HO**

**Kết quả:** Chỉ nhân viên HO thuộc danh sách mới thấy thông báo

Expand để xem chi tiết:

Thêm mới/Import/ Xem danh sách nhân viên HO đã chọn

Khi người dùng chọn Đối tượng này, một lưới danh sách sẽ hiển thị trên màn hình để người dùng chọn nhân viên cụ thể được nhận thông báo

Chỉ có những nhân viên được thêm trong danh sách dưới đây mới nhận được thông báo

* Tìm kiếm: Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên
* Tootip: Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên

Tạo thông báo → chọn đối tượng là Nhân viên HO → hiển thị:

| Trường | Kiểu dữ liệu | Mô tả |
| --- | --- | --- |
| Mã nhân viên | Datacolumn have copy | Hiển thị mã nhân viên của Tài khoản người dùng được chọn để gửi thông báo |
| Tên nhân viên | Datacolumn | Hiển thị tên nhân viên được chọn để gửi thông báo |
| Nhóm quyền HO | Datacolumn | Hiển thị Tên Nhóm quyền HO của người dùng theo Tài khoản người dùng |
| Số điện thoại | Datacolumn | Số điện thoại của nhân viên |
| Trạng thái | Datacolumn | Trạng thái của tài khoản người dùng |
| Tùy chỉnh | Button | button xóa cho phép click để xóa nhân viên ra khỏi lưới danh sách; khi chọn click, line dữ liệu trên lưới mất đi.  Và khi chọn "Thêm" => màn hình filter dữ liệu nhân viên vừa xóa sẽ không hiển thị dấu check chọn  Trường hợp import thêm nhân viên sẽ check các role theo chức năng import |
| Xóa tất cả n nhân viên | link | Hiển thị link text "Xóa tất cả n nhân viên" trong đó n là tất cả các nhân viên trên tất cả các page được phép xóa (Những line được xóa sẽ hiển thị icon "Xóa", n là tổng các line có icon xóa) |

THÊM NHÂN VIÊN

* Nhấn Thêm để chọn Add nhân viên → hiển thị màn hình popup để thêm nhân viên hoặc Nhấn button "Import Excel"  để thêm nhân viên

#### **Nhấn button Thêm :**

* Mặc định mở màn hình rỗng
* Khi chọn Button "Tìm kiếm" - chưa chọn bất kì dữ liệu lọc nào => Hiểu là search tất cả => hiển thị all danh sách trên lưới
* Khi chọn Button "Tìm kiếm" - Đã chọn các tiêu chí lọc => Hiểu là search theo tiêu chí bộ lọc => hiển thị danh sách nhân viên là tài khoản người dùng HO thỏa tiêu chí bộ lọc trên lưới
* Chọn nhân viên
  + B1: Chọn "Thêm"
  + B2: Nhập/ chọn dữ liệu tìm kiếm
  + B3: Xem danh sách nhân viên là tài khoản người dùng HO
  + B4 Chọn nhân viên bằng cách check vào checkbox mỗi line và chọn button "Đồng ý"

**Mô tả:**

|  | Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- | --- |
|  | **Thêm nhân viên** | | | | |
| 1 | Tìm theo | Textbox | Có | Không | **Mô tả tổng quan:** Chức năng cho phép người dùng lọc và tìm kiếm dữ liệu nhân viên dựa trên danh sách Tài khoản người dùng thỏa điều kiệnh phân quyền và đang hoạt động của người dùng. Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên  **Chi tiết hoạt động:**  Cho phép nhập text Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên   * Tooltip: Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên * Placeholder: Tìm kiếm theo Mã nhân viên, Tên nhân viên, Số điện thoại nhân viên * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các nhân viên có thông tin được nhập trong ô này. |
| 2 | Nhóm quyền HO | selectonechoice | Có | Không | Chọn Nhóm quyền HO để tìm kiếm nhân viên của công ty  Trường này cho phép người dùng chọn một Nhóm quyền HO để lọc danh sách nhân viên, Danh sách nhân viên theo nhóm quyền HO load từ màn hình quản lý nhân viên được khai báo [HO] Tài Khoản Người Dùng   * Placeholder: Chọn nhóm quyền HO * Người dùng có thể tìm kiếm và chọn một Nhóm quyền HO đang hoạt động từ danh sách có sẵn để tinh chỉnh kết quả hiển thị trong danh sách nhân viên * **Mở danh sách:** Khi người dùng nhấp vào hiển thị danh sách các "Tên vai trò" có Quyền HO **đang hoạt động**: [HO][HT] Chức năng phân quyền - Nhóm quyền >  Danh sách Tên vai trò theo Quyền là HO: *Ví dụ*   + *Admin HO*   + *Trade MKT*   + *Admin Vùng*   + *...* * **Tìm kiếm và chọn:** Người dùng có thể chọn một "Chức vụ" bằng cách nhấp vào một mục trong danh sách. * Khi người dùng chọn "Nhóm quyền": Hệ thống sẽ tìm kiếm và hiển thị các nhân viên có Nhóm quyền vừa chọn * **Hiển thị lựa chọn:** Nhóm quyền HO đã chọn sẽ hiển thị trong hộp chọn dưới dạng nhãn (tags) - Tên nhóm quyền * **Kết quả lọc:** Danh sách nhân viên là tài khoản người đang hoạt động dùng có Quyền HO và thuộc Nhóm quyền đã chọn sẽ tự động được lọc để hiển thị trên lưới danh sách * **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn lựa chọn không mong muốn. * Trường hợp bỏ chọn trong hộp chọn thì mặc định hiểu là chọn tất cả các Nhóm quyền HO đang hoạt động để tìm kiếm. * Khi mở popup màn hình mặc định không chọn dữ liệu nào trong hộp chọn. |
| 4 | Button Làm mới | Button | Có | Không | **Chức năng:**   * Nút "Làm mới" cho phép người dùng tải lại danh sách Nhân viên là Tài khoản người dùng đang hoạt động, xóa mọi bộ lọc và kết quả tìm kiếm hiện tại, đồng thời trả về trạng thái ban đầu của danh sách. * Nút này hữu ích khi người dùng muốn bắt đầu một phiên tìm kiếm mới hoặc khi cần làm mới dữ liệu để đảm bảo rằng các danh sách Nhân viên mới nhất được hiển thị.   **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Làm mới" để xóa tất cả các bộ lọc, tìm kiếm, và làm mới dữ liệu trên danh sách Nhân viên 2. **Danh sách Nhân viên làm mới:** Sau khi nhấp, danh sách các Nhân viên đang hoạt động thuộc **Quyền HO &**có "Nhóm quyền HO"  đang hoạt động tại màn hình  [HO] Tài Khoản Người Dùng sẽ hiển thị toàn bộ mà không áp dụng bất kỳ bộ lọc nào.    1. Và danh sách nhân viên hiển thị phải thỏa điều kiện Phân quyền dữ liệu của người dùng [HO & NPP] Phân quyền dữ liệu    2. Sort theo alphabet tên nhân viên   **Lưu ý:**   * Việc làm mới không thay đổi dữ liệu gốc mà chỉ cập nhật giao diện hiển thị của danh sách Nhân viên. * Người dùng cần lưu ý rằng tất cả các bộ lọc hoặc tìm kiếm đã thiết lập sẽ bị xóa khi nút này được nhấn. |
| 5 | Button Tìm kiếm | Button | Có | Không | **Chức năng:**   * Nút "Tìm kiếm" cho phép người dùng thực hiện tìm kiếm và áp dụng các bộ lọc đã chọn, không chọn bất kỳ tiêu chí nào và click button "Tìm kiếm" hiểu là search tất cả * Khi người dùng đã thiết lập các bộ lọc hoặc nhập từ khóa tìm kiếm, nút "Tìm kiếm" sẽ kích hoạt chức năng lọc danh sách Nhân viên theo các tiêu chí đã chọn.   **Cách sử dụng:**   1. **Thiết lập bộ lọc:** Người dùng chọn các tiêu chí tìm kiếm hoặc bộ lọc. 2. **Nhấp vào nút:** Sau khi thiết lập, người dùng nhấp vào nút "Tìm kiếm" để áp dụng các bộ lọc và hiển thị kết quả tìm kiếm trong danh sách Nhân viên 3. **Hiển thị kết quả:** Danh sách các Nhân viên đang hoạt động thuộc **Quyền HO &**có "Nhóm quyền HO"  đang hoạt động tại màn hình  [HO] Tài Khoản Người Dùng sẽ hiển thị phù hợp với các tiêu chí đã chọn.    1. Và danh sách nhân viên hiển thị phải thỏa điều kiện Phân quyền dữ liệu của người dùng [HO & NPP] Phân quyền dữ liệu    2. Sort theo alphabet tên nhân viên   **Lưu ý:**Nếu không có tiêu chí nào được chọn, danh sách Nhân viên sẽ không thay đổi khi nhấn nút "Tìm kiếm". |
|  | **Grid Danh sách Nhân viên** | | | | |
| 6 | Checkbox | checkbox | Có | Không | * Check box cho phép chọn các nhân viên để insert vào Grid nhân viên. Mở Popup lần sau, khi chọn bộ lọc có nhân viên đã chọn trước, màn hình vẫn hiển thị checkbox đã chọn của nhân viên đó, người dùng có thể bỏ check * Cho phép check một hoặc nhiều * Cho phép check All   => Sau khi chọn hiển thị số mục được chọn và cho phép xóa hàng loạt bằng button xóa  Chọn  hiển thị thông báo: Bạn chắc chắn muốn xóa?   * Chọn Đồng ý: Xóa tất cả các mục đã chọn; * chọn Trở lại: Tắt popup và vẫn giữ nguyên trạng thái |
| 7 | Mã Nhân viên | Datacolumn have copy | Không |  | Mã định danh của nhân viên trong hệ thống Tài khoản người dùng cũng là thông tin đăng nhập của nhân viên, cho phép copy  Load từ màn hình Tài khoản người dùng đang hoạt động, thuộc **Quyền HO &**có "Nhóm quyền HO" đang hoạt động:  [HO] Tài Khoản Người Dùng |
| 8 | Tên Nhân viên | Datacolumn | Không |  | Tên Nhân viên hiển thị theo mã Nhân viên theo mã nhân viên |
| 9 | **Nhóm quyền HO** | Datacolumn | Không |  | Load từ màn hình Tài khoản người dùng, **Với Role = Quyền HO**   * Dựa vào mã nhân viên, hiển thị Tên vai trò thuộc Quyền HO của nhân viên:  [HO] Tài Khoản Người Dùng >  Field "Nhóm quyền HO/Nhóm quyền NPP" |
| 10 | Số điện thoại | Datacolumn have copy | Không |  | Số điện thoại liên hệ của Nhân viên, hiển thị theo mã Nhân viên có thể copy số điện thoại |
| 12 | Trạng thái | Datacolumn | Không |  | Trạng thái của nhân viên |
|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| 13 | Đồng ý | Button | Có | Không | * Nút "**Đồng ý**" cho phép người dùng insert danh sách nhân viên đã chọn vào màn hình chính và đóng Popup |

#### **Nhấn button "Import Excel"**

* Click button Import excel → Hiển thị popup
* Double click vào chọn file từ thiết bị / kéo file từ thiết bị vào vùng ghi chú "Chọn hoặc kéo file đến vị trí này"
* Chọn tiến hành xử lý để import file đã chọn vào hệ thống

* Hiển thị thông báo:

**Button: "Lấy file mẫu" → File mẫu như sau:**

* Format tên file mẫu: IMPORT\_NOTIFICATION\_USERS\_DD-MM-YYYY

**Templates:**

|  |  |
| --- | --- |
| NV0103827398 | Nguyễn Văn A1 |
| NV0103827399 | Nguyễn Văn A2 |
| NV0103827400 | Nguyễn Văn  A3 |

**Mô tả dữ liệu**

|  |  |  |  |
| --- | --- | --- | --- |
| Mã nhân viên (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập mã nhân viên muốn thêm vào Thông báo | Mã nhân viên nhập không đúng định dạng (Ký tự đặc biệt; khoảng trắng ở trước-trong-sau mã; chữ tiếng việt có dấu), để trống (nếu để trống nguyên 1 line → bỏ qua; để trống @field → báo mess), không tồn tại trên hệ thống DMS   * Hiển thị thông báo lỗi: Dòng thứ @n: Mã nhân viên nhập không đúng định dạng/ không tồn tại/ không hoạt động/ bị bỏ trống. Vui lòng kiểm tra lại! * Mã nhân viên không được trùng trong file import, nếu trùng hiển thị thông báo lỗi: Dòng thứ @n: Mã nhân viên bị trùng lắp. Vui lòng kiểm tra lại! (Chỉ cần hiển thị dòng đầu tiên trùng)  * Mã nhân viên không thuộc phân quyền Vùng/Khu vực của người đăng nhập: Dòng thứ @n: Mã nhân viên không thuộc phân quyền người dùng. Vui lòng kiểm tra lại! |
| Tên nhân viên | Nhập ký tự tự do | * Nhập tên nhân viên muốn thêm vào Thông báo | * Thông tin tên nhân viên chỉ để user thực hiện tham chiếu trước khi import, khi import chỉ lấy thông tin mã nhân viên. |

**Trường hợp import thành công:**

→ Nhấn X → Tắt popup và hiển thị danh sách nhân viên đã import vào màn hình tạo Thông báo

Trường hợp import lỗi:

Hiển thị các dòng lỗi để user điều chỉnh

* Hiển thị tất cả dòng lỗi và có phân trang.  sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi.
* Nếu nhấn X sẽ không thêm bất cứ dữ liệu import nào vào màn hình tạo Thông báo.

Chức vụ

#### **Đối tượng = Chức vụ**

Logic không thay đổi theo tài liệu gốc [HO] Quản lý thông báo

#### **Đối tượng = Chức vụ & NPP**

Hiển thị UI như hình. Bắt buộc chọn  và chọn Nhà phân phối 

**Kết quả:**

* APP SM: (Chức vụ trùng) AND (Có tuyến tại NPP được chọn) tức là Nhân viên quản lý trực tiếp tuyến của NPP đó là SS (có tuyến)/SM và thỏa chức vụ được chọn sẽ thấy thông báo

* APP QL → SD/RSM/ASM/SS (Có hoặc không có tuyến): (Chức vụ trùng) AND (Có quyền xem NPP theo cây Salesforce) → Hiển thị thông báo nếu nhân viên đó có **cấp dưới theo cây Saleforce có** **tuyến****thuộc NPP được chọn** & Thỏa chức vụ được chọn sẽ thấy thông báo này.

Từ danh sách NPP được chọn và Chức vụ: 

* + APP QL Dựa vào cây **Salesforce của nhân viên → Cấp quản lý của Nhân viên thuộc NPP được chọn sẽ thấy thông báo**:
    - Cấp quản lý của SS đó là ASM sẽ thấy ở app QL; Cấp quản lý của SM là SS sẽ thấy
    - Cấp quản lý của ASM là RSM
    - Cấp quản lý của RSM là SD

#### **Đối tượng = Chức vụ & Kênh bán hàng**

Hiển thị UI như hình. Bắt buộc chọn Chức vụ và chọn Kênh bán hàng

**Kết quả:** (Chức vụ trùng) **AND** (Kênh bán hàng trong của nhân viên bán hàng [HO] Quản lý nhân viên DMS và Định nghĩa cây Salesforce trùng) → sẽ hiển thị trên app QL và app SM

#### **Đối tượng = Chức vụ & Ngành hàng**

Hiển thị UI như hình. Bắt buộc chọn  và chọn Ngành hàng

**Kết quả:**

* Thông báo được gửi đến App QL và App SM, Những nhân viên bán hàng là có chức vụ là SM và SS (có tuyến bán hàng) & Nhãn hàng trên tuyến bán hàng thuộc một trong các Nhãn trong danh sách của thông báo sẽ thấy thông báo này
* **KHÔNG gửi** cho những chức vụ là SD/RSM/ASM/ SS- mà không có tuyến nào thỏa điều kiện (Do hệ thống chưa định nghĩa ngành hàng/nhãn hàng trực tiếp cho cấp quản lý). 
  + *Lưu ý: Hệ thống không ràng dữ  liệu nhưng nếu người dùng chọn Chức vụ = SD/RSM/ASM / SS không có tuyến nào → Thì không có đối tượng nào được nhận thông báo cả.*

## Lịch sử thông báo

**Hiện trạng:** Màn hình lịch sử thông báo theo link: [HO] Lịch sử thông báo

**Bổ sung:** Thêm filter và các cột trên lưới danh sách như bên dưới.

**Màn hình:**

**Mô tả:**

|  | Tên trường | Loại dữ liệu | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| Vùng lọc | | | | | |
|  | Trạng thái thông báo | Select box multichoice | Có | Không | **Danh sách trạng thái bổ sung "Hết hạn"**  Danh sách trạng thái bao gồm:   * Khởi tạo * Đang xử lý * Đã gửi * Thất bại * **Hết hạn** |
|  | Nhân viên | Textbox | Có | Không | Nhập Mã | Tên Nhân viên; Mã | Tên NPP để tìm kiếm.   * Tooltip: Tìm kiếm theo Mã, Tên Nhân viên bán hàng hoặc Nhân viên HO; Mã, Tên NPP * Placeholder: Tìm kiếm theo Mã | Tên Nhân viên; Mã | Tên NPP * Tìm kiếm theo danh sách nhân viên bán hàng và Tài khoản người dùng và Danh sách NPP thuộc các đối tượng gửi thông báo * Search: Khi user nhập thông tin vào ô text --> Nhấn Tìm Kiếm --> Lưới danh sách sẽ lọc các nhân viên bán hàng /Tài khoản người dùng /Danh sách NPP thuộc các đối tượng gửi thông báo được nhập trong ô này (search like). |
| Lưới danh sách | | | | | |
|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Trạng thái thông báo | Datacolumn | Không | Không | Khởi tạo, Đang xử lý, Đã gửi, Thất bại, Hết hạn   * **Bổ sung trạng thái "Hết hạn"**  * + Những thông báo có "Ngày kết thúc thông báo" (Không quan tâm trạng thái nào của thông báo) → Thông báo sẽ tự động đổi trạng thái sang **"Hết hạn"** khi thời gian hiện tại > "Ngày kết thúc thông báo"   + Khi hết hạn: Thông báo biến mất khỏi danh sách "Thông báo" trên App Mobile (SM APP và Manager APP) của nhân viên nhưng vẫn lưu trong lịch sử trên Portal HO. |
|  | Đối tượng | Datacolumn-Tag | Không | Không | Thêm cột đối tượng nhận thông báo sau cột "Trạng thái thông báo"  Đối tượng nhận thông báo:   1. Tất cả 2. Nhà phân phối 3. Kênh bán hàng 4. Ngành hàng 5. Nhân viên bán hàng 6. Nhân viên HO 7. Chức vụ 8. Chức vụ & NPP 9. Chức vụ & Kênh bán hàng 10. Chức vụ & Ngành hàng |
|  | Ngày kết thúc thông báo | Datacolumn | Không | Khồng | Vị trí: Sau cột "Ngày gửi thông báo"  Hiển thị:   * Format: dd/mm/yyyy hh:mm * Không có thì để trống |
|  | Mã nhân viên nhận thông báo | Datacolumn - tag | Không | Không | Hiển thị Mã nhân viên bán hàng nhận thông báo nếu thông báo gửi đến **app SM/ APP QL**  Hiển thị Mã Tài khoản người dùng nhận thông báo nếu thông báo gửi đến **Portal HO/NPP** (đối **tượng áp dụng là Nhà phân phối/ Nhân viên HO)**  Có thể copy  *(Mỗi đối tượng nhận thông báo là 1 dòng)* |
|  | Tên nhân viên | Datacolumn | Không | Không | Hiển thị tên nhân viên bán hàng nhận thông báo nếu thông báo gửi đến **app SM/ APP QL**  Hiển thị tên Tài khoản người dùng nhận thông báo nếu thông báo gửi đến Portal HO/NPP (đối **tượng áp dụng là Nhà phân phối/ Nhân viên HO)** |
|  | Chức vụ | Datacolumn | Không | Không | Theo mã nhân viên bán hàng → hiển thị chức vụ của nhân viên  Theo Mã Tài khoản người dùng HO nhận thông báo → hiển thị Tên vai trò (cả 2 Role HO/NPP tùy theo mã tài khoản của người dùng) |
|  | Kênh nhân viên | Datacolumn | Không | Không | Hiển thị kênh bán hàng của nhân viên là Nhân viên bán hàng  Trường hợp khác để trống kênh nhân viên này. |

## Hiển thị trên APP SM; APP QL

Logic hiển thị trên app không thay đổi: 

* APP AM: [SM-APP] Thông báo
* APP QL: [Manager\_App] Thông báo

Bổ sung:

* **Rule****Ẩn tự động:** Nếu thời gian ngày hiện tại> Ngày hết hạn của thông báo, dòng thông báo tương ứng sẽ lập tức biến mất khỏi giao diện Chuông, trang Lịch sử khi thực hiện tải lại trang hoặc chuyển menu.

## Hiển thị trên PORTAL HO/NPP

**Mục đích:** Hệ thống cần bổ sung đối tượng nhận thông báo trên Portal HO và NPP vào luồng gửi thông báo hiện tại. Khi một thông báo được tạo:

1. Hệ thống kiểm tra cấu hình đối tượng nhận (Nhân viên HO/ Nhà phân phối).
2. Hệ thống đẩy thông báo qua kênh Web (Theo cấu hình của thông báo).
3. Người dùng HO/NPP đăng nhập Web -> Nhận thông báo tại Icon Chuông 🔔.

**Mô tả tính năng của Chuông Chuông**

### Với Đối tượng = Nhà phân phối

* Các Tài khoản người dùng đang hoạt động thuộc Quyền Nhà Phân Phối và có NPP chăm sóc là một trong các NPP đã chọn.
* Thông báo được gửi đến portal NPP khi Tài khoản người dùng có NPP chăm sóc thuộc danh sách được chọn. Sau khi login trên Portal NPP tương ứng sẽ thấy thông báo trên Chuông thông báo và số lượng thông báo chưa đọc

**Trạng thái Icon Chuông**

* **Chưa có thông báo mới:** Icon chuông dạng tĩnh, không có badge số.
* **Có thông báo mới (Chưa đọc):** Hiển thị Badge số màu đỏ. Số đèn lên icon; trường hợp thông báo lớn hơn 99 → hiển thị 99+ đè lên icon  .

**Khi Click vào Icon Chuông (Dropdown Menu)**

Danh sách xổ xuống hiển thị phân trang thông báo mới nhất. Cuộn để xem nhiều thông báo

Tiêu đề: THÔNG BÁO

Tab: Thông báo chung (Mặc định) và Tab Khuyến mãi

* Với thông báo có Kiểu hiện thị = Nổi bật, sẽ có text "Nổi bật" phía trước
* Các thông báo còn lại sẽ được hiển thị sort theo thời gian gần hiện tại lên đầu.
* Thông báo thuộc loại Thông báo chung sẽ hiển thị ở tab Thông báo chung
* Thông báo thuộc loại Khuyến mãi sẽ hiển thị ở tab Khuyến mãi

**Mỗi item thông báo bao gồm:**

* *Text "Nổi bật" (nếu có do cấu hình thông báo), icon động, Tiêu đề, Tóm tắt nội dung, Thời gian nhận thông báo HH:MM DD/MM/YYYY*
* *Trạng thái:* Phân biệt rõ thông báo **Chưa xem** (Nền của item màu xanh nhạt, có chấm xanh) và **Đã xem** (Nền trắng, Không có chấm xanh).
* *Hành động Click vào item:* Mở trang popup xem chi tiết thông báo

  + Nội dung bao gồm:

    - Tag theo tab- tag nổi bật nếu có
    - Tiêu đề thông báo
    - Thời gian. Loại thông báo (nếu có)
    - Nội dung thông báo
    - Các hình ảnh/file đính kèm
    - Khi nhân viên vào màn hình này thì tự động chuyển trạng thái sang **Đã xem**.
    - Chọn "Đóng cửa sổ" hoặc dấu 'x' để tắt popup, vẫn ở màn hình xem list thông báo.
  + *Loại thông báo:*
    - *****Dựa vào "Loại thông báo":*****

      * *const NOTIFICATION\_ICONS = {*

        *'PROMOTION': <PromotionGiftIcon />, // Icon hộp quà cho khuyến mãi*

        *'SYSTEM\_ALERT': <BellAlertIcon />,  // Icon chuông/loa cho thông báo chung*

        *'ORDER\_SUCCESS': <TruckIcon />,      // Icon xe tải cho đơn hàng thành công*

        *'DEFAULT': <DefaultInfoIcon />       // Icon mặc định nếu không phân loại được*

        *};*
    - *Hệ thống sẽ check giá trị của trường ****"Loại thông báo":*****

      * *****Nếu Loại thông báo = "Khuyến mãi":**** Hệ thống tự động lấy icon hình ****Hộp quà****, ****Tag giảm giá (%)****, hoặc ****Ngôi sao**** từ bộ thư viện icon của ứng dụng.*
        + *****Sự kiện liên quan đến Đơn hàng / Doanh số:**** Hệ thống tự gán icon ****Xe tải****, ****Giỏ hàng****,*
      * *****Nếu Loại thông báo = "Thông báo chung":**** Hệ thống sẽ mặc định lấy icon hình **Bánh răng** ****(Chung) hoặc**** **Q**uyển sổ (Chính sách)*****
* **Trên đầu Menu có dòng chữ "✓ Đánh dấu đọc tất cả" cho phép Đọc hết thông báo (Mark all as read):**

  + Đọc tất cả:
    - Khi nhấn vào dòng chữ này sẽ hiển thị cảnh báo: Bạn có muốn đọc hết tất cả thông báo?
      * Đồng ý: Đánh dấu tất cả thông báo Chưa xem → Đã xem.
        + Sau khi bấm hiển thị toast  "Đã đọc hết" ở góc trên cùng của danh sách chuông. Và chuyển toàn bộ badge về 0 hoặc không có số và đổi trạng thái toàn bộ thông báo hiện tại thành "Đã xem".
      * Trở lại: Đóng cảnh báo, vẫn ở màn hình hiện tại.
* **Dưới cùng menu có dòng chữ "Xem tất cả thông báo":** Click vào Link dẫn về trang "Lịch sử thông báo" (giao diện full trang) của user đó. Trên portal NPP thêm lefmenu Quản lý thông báo > Lịch sử thông báo: Chỉ hiển thị dữ liệu phân quyền của đúng NPP login

### Với Đối tượng = Nhân viên HO

* Thông báo được gửi đến portal HO khi Tài khoản người dùng (đang hoạt động thuộc **Quyền HO &**có "Nhóm quyền HO" đang hoạt động tại màn hình  [HO] Tài Khoản Người Dùng ) này thuộc danh sách được chọn trong thông báo
* Sau khi login trên Portal HO tương ứng sẽ thấy thông báo trên Chuông thông báo và số lượng thông báo chưa đọc
* Xem mô tả tính năng của chuông
  + **Dưới cùng menu có dòng chữ "Xem tất cả thông báo":** Click vào Link dẫn về trang "Lịch sử thông báo" (giao diện full trang) của user đó. Trên portal HO: Chỉ hiển thị dữ liệu phân quyền Vùng/khu vực của user login