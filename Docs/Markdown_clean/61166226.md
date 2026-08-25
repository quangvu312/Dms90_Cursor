rnone

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2554Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2555Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2556Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-2557 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

Tài liệu này mô tả các cập nhật mới của tính năng Giao KPI trên portal HO, các nội dụng cập nhật bao gồm:

1. Bổ sung chỉ tiêu mới vào phiếu Giao KPI

* Các chỉ tiêu mới bao gồm: *Điểm bán đang hoạt động, Tỷ lệ điểm bán đang hoạt động*
* Bổ sung tại trường Chỉ tiêu áp dụng

2. Cập nhật quy tắc giao KPI cho nhân viên

3. KPI cho cấp quản lý: Giao KPI cho các cấp quản lý dựa vào kế hoạch được giao cho nhân viên bán hàng

## **Requirements**

### 1. Bổ sung chỉ tiêu mới

* Thêm mới phiếu giao KPI: Tại màn hình Thêm mới phiếu giao KPI - Thông tin chung
  + Trường *Chỉ tiêu áp dụng*: Bổ sung 2 chỉ tiêu
    - Điểm bán hoạt động
    - Tỷ lệ điểm bán hoạt động
* Import chỉ tiêu
  + Template\_PhieuGiaoKPI bổ sung thêm 2 cột: Điểm bán đang hoạt động và Tỷ lệ điểm bán đang hoạt động
  + Template mới:
  + Quy trình xử lý file import và báo lỗi (nếu có) không thay đổi: <https://kb.finviet.com.vn/x/K2EpAw>
* Export chỉ tiêu

  + Template export bổ sung thêm 2 cột: Điểm bán đang hoạt động và Tỷ lệ điểm bán đang hoạt động
  + Template mới: TenPhieuGiaoKPI\_DDMMYYYYHHMMSS.xlsx

2. Cập nhật quy tắc áp dụng KPI cho nhân viên

**a. Quy tắc giao KPI**

* Mỗi phiếu giao KPI chophép giao chỉ tiêu cho nhiều nhân viên bán hàng, kể cả khi các nhân viên này thuộc các vùng hoặc khu vực khác nhau.
* Đối với hai phiếu giao KPI có cùng khoảng thời gian áp dụng, không được phép giao trùng chỉ tiêu cho cùng một nhân viên bán hàng.

**b. Cập nhật giao diện**

* **Danh sách phiếu giao KPI**: Bỏ điều kiện lọc theo*Đối tượng áp dụng*
* **Phiếu giao KPI:**
  + Tại màn hình Tạo mới/Chỉnh sửa/Xem chi tiết, bỏ các trường *Đối tượng áp dụng, Vùng/Khu vực áp dụng*
  + Khi [**Thêm mới đối tượng**](https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+Giao+KPI#:~:text=t%C6%B0%E1%BB%A3ng%20%C4%91%C6%B0%E1%BB%A3c%20ch%E1%BB%8Dn.%22-,Popup%C2%A0Th%C3%AAm%20%C4%91%E1%BB%91i%20t%C6%B0%E1%BB%A3ng,-%C4%90%C6%B0%E1%BB%9Dng%20d%E1%BA%ABn%3A%20T%E1%BA%A1i), cập nhật các thông tin sau:
    - Danh sách đối tượng load tất cả nhân viên bán hàng thỏa mãn điều kiện sau:
      * Có trạng thái "Đang hoạt động"
      * Thuộc *Vùng/Khu vực*của tài khoản HO tạo phiếu giao, *Vùng/Khu vực* của nhân viên xác định theo cây salesforce của nhân viên đó.
    - Thông tin tìm kiếm: Bổ sung thêm điều kiện tìm kiếm theo *Vùng/Khu vực*
      * Khi nhấn vào sẽ load hết danh sách các vùng/khu vực mà user login đang chăm sóc theo dạng cây
      * Cho phép chọn nhiều
      * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.
      * Mặc định trống.
  + Khi Lưu tạo mới/chỉnh sửa, hệ thống xác minh nếu trong danh sách phiếu giao KPI tồn tại 1 phiếu giao KPI có đủ các điều kiện sau:
    - Trạng thái: "Khởi tạo", "Đã duyệt"
    - Có chứa ít nhất 1 loại chỉ tiêu trùng với phiếu giao KPI được tạo.
    - Thời gian áp dụng overlap với thời gian áp dụng của phiếu giao KPI được tạo.

                          → Ví dụ: Hệ thống đang tồn tại phiếu giao KPI 01 (thời gian áp dụng 1/1/2025 → 31/1/2025, trạng thái Đã duyệt), KPI Doanh số tháng. Người dùng tạo phiếu giao KPI mới (thời gian áp dụng 15/1/2025 - 31/1/2025), KPI doanh số tháng và tỷ lệ viếng thăm thành công → Hệ thống báo lỗi: *"Không thể tạo phiếu giao KPI do đã tồn tại một phiếu khác có cùng chỉ tiêu trong khoảng thời gian này."*

**c. Phân quyền dữ liệu trên KPI**

|  |  |  |
| --- | --- | --- |
| Quản lý chỉ tiêu | Danh sách KPI | Xem tất cả các KPI |
| Giao bộ KPI | * Danh sách phiếu giao KPI: Xem được tất cả phiếu giao KPI. * Chi tiết phiếu giao KPI:  Chỉ hiển thị nhân viên và quản lý theo vùng/khu vực của user login. |
| Báo cáo KPI | Xem báo cáo theo các phiếu giao KPI có chứa nhân viên bán hàng thuộc Vùng/Khu vực mà user đang login chăm sóc. Vùng/Khu vực của nhân viên được xác định dựa trên cây salesforce.   * Chỉ hiển thị các nhân viên bán hàng thuộc Vùng/Khu vực đó. |

**d. Thêm nhân viên mới vào phiếu đã tồn tại**

* Khi muốn giao KPI cho một nhân viên mới, người dùng cần thực hiện thao tác thêm nhân viên đó vào phiếu giao KPI đã duyệt (nếu phiếu đó vẫn còn hiệu lực hoặc đang áp dụng cho cùng khoảng thời gian).
* Hệ thống chỉ cho phép thực hiện thêm mới nhân viên vào phiếu đã tồn tại khi:
  + Nhân viên mới chưa được giao chi tiêu trong phiếu trong khoảng thời gian áp dụng của phiếu.
  + Phiếu được chọn ở trạng thái "Đã duyệt" và đang được áp dụng.
* Sau khi thêm KPI cho nhân viên mới thành công
  + Cập nhật mới phiếu giao KPI
  + Áp dụng KPI cho nhân viên mới
  + Kế hoạch của các cấp quản lý sẽ được tính lại theo danh sách nhân viên mới.
  + Thực đạt của nhân viên mới sẽ được ghi nhận cho quản lý kể từ thời điểm thêm mới thành công.

| Title | UI | Description |
| --- | --- | --- |
| Popup *"Thêm đối tượng mới"* | ha | * Nút Thêm đối tượng: Click vào nút → hệ thống thực hiện hiển thị popup **[Thêm đối tượng](https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+Giao+KPI#:~:text=t%C6%B0%E1%BB%A3ng%20%C4%91%C6%B0%E1%BB%A3c%20ch%E1%BB%8Dn.%22-,Popup%C2%A0Th%C3%AAm%20%C4%91%E1%BB%91i%20t%C6%B0%E1%BB%A3ng,-%C4%90%C6%B0%E1%BB%9Dng%20d%E1%BA%ABn%3A%20T%E1%BA%A1i)** * Nút **[Export Excel](https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+Giao+KPI#:~:text=tr%C3%AAn%20danh%20s%C3%A1ch.-,Export,-Title)** * Nút **[Import Excel](https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+Giao+KPI#:~:text=popup%20x%C3%A1c%20nh%E1%BA%ADn.-,Import,-Title)** * Danh sách giao KPI bao gồm:   + **Đối tượng**: Các đối tượng áp dụng cụ thể được chọn tại popup Thêm đối tượng, hiển thị theo format: Mã nhân viên - Họ và tên nhân viên   + Các chỉ tiêu đang có tại phiếu giao được chọn.   + **Mục tiêu***[textbox]*:     - Không bắt buộc nhập     - Hiển thị tại từng cặp đối tượng & chỉ tiêu KPI     - Chỉ cho phép nhập ký tự số, được nhập số thập phân   + Nút **Xoá:** Click vào nút → hệ thống thực hiện xoá dòng dữ liệu tương ứng * Nút **Đóng**: Hiển thị popup xác nhận ngày trên nút:   + Nếu đồng ý: hệ thống thực hiện đóng popup, không thực hiện lưu dữ liệu.   + Nếu đóng: thực hiện đóng popup xác nhận.  * Nút **Lưu**:  Khi nhấn lưu hệ thống thực hiện kiểm tra và xử lý:   + Kiểm tra:     - * Nếu không có đối tượng nào được chọn thì báo lỗi: *"Vui lòng chọn ít nhất 1 đối tượng để giao KPI."*   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - * Nếu đồng ý: Hệ thống thực hiện         + Thêm mới nhân viên được giao KPI vào phiếu giao hiện tại.         + Thực hiện áp dụng KPI cho nhân viên mới       * Nếu đóng: thực hiện đóng popup xác nhận.   Lưu ý:   * Nếu không có đối tượng được chọn, hệ thống hiển thị: *"Vui lòng thêm đối tượng trước khi thực hiện giao KPI cho đối tượng được chọn."* * Khi lưu, hệ thống kiểm tra nếu phiếu đã hết thời gian áp dụng, thông báo: *"Phiếu giao KPI đã hết thời gian áp dụng, không thể giao thêm cho nhân viên mới."* |

### 3. KPI cho cấp quản lý

**Mô tả**

Sau khi giao KPI cho nhân viên bán hàng, hệ thống thực hiện tính KPI cho các cấp quản lý như sau:

1. Xác định cây saleforce tại thời điểm giao KPI dựa theo danh sách nhân viên bán hàng trong phiếu. Cây salesforce này được snapshot tại thời điểm tạo phiếu, tức là các thay đổi nhân sự sau đó không ảnh hưởng đến cách tính KPI của phiếu này.
2. Tính KPI cho các cấp quản lý theo công thức:

* + Giám sát bán hàng (SS):
    - KPI của mỗi SS được tính bằng **tổng tất cả các KPI của các SM trực thuộc SS đó** tại thời điểm tạo phiếu.
    - Công thức: KPI\_SS = Σ (KPI của NVBH thuộc SS)
  + Giám đốc khu vực (ASM):
    - KPI của mỗi ASM được tính bằng **tổng tất cả các KPI của các SS trực thuộc ASM đó**, bao gồm toàn bộ KPI của NVBH cấp dưới.
    - Công thức: KPI\_ASM = Σ (KPI của SS thuộc ASM)
  + Giám đốc vùng (RSM):
    - KPI của mỗi RSM được tính bằng **tổng tất cả các KPI của các ASM trực thuộc RSM đó**, bao gồm bộ KPI từ các cấp bên dưới.
    - Công thức: KPI\_RSM = Σ (KPI của ASM thuộc RSM)

       3. Hệ thống ghi nhận và lưu trữ **các giá trị KPI tổng hợp của từng cấp quản lý**, kèm theo thông tin mối liên kết với phiếu KPI gốc và cấu trúc cây Salesforce tại thời điểm đó.

Các thay đổi về cây salesforce không làm thay đổi kết quả tính KPI trong phiếu, như:

* Nhân viên bán hàng được chuyển sang giám sát khác:không ảnh hưởng đến tổng KPI đã tính cho giám sát cũ và giám sát mới ban đầu.
* Nhân viên bán hàng mới được thêm vào vào cây salesforce sau thời điểm tạo phiếu: không được thêm vào phiếu KPI hiện có.

Ví dụ:

Giả sử hệ thống có cây salesforce như sau tại thời điểm tạo phiếu KPI:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| RSM001 | | | | |
| ASM001 | | | ASM002 | |
| SS001 | | SS002 | SS003 | |
| SM001 | SM002 | SM005 | SM003 | SM004 |

Người dùng tạo phiếu giao KPI với nội dung:

| Nhân viên bán hàng | Doanh số | Điểm bán đang hoạt động |
| --- | --- | --- |
| SM001 | 30.000.000 | 12 |
| SM002 | 15.000.000 | -- |
| SM003 | -- | 20 |
| SM004 | 15.000.000 | 25 |
| SM005 | 20.000.000 | 10 |

-- là không giao chỉ tiêu

KPI của các cấp quản lý được tính như sau:

| Quản lý | Doanh số | Điểm bán đang hoạt động |
| --- | --- | --- |
| SS001 | 45.000.000 | 12 |
| SS002 | 20.000.000 | 10 |
| SS003 | 15.000.000 | 45 |
| ASM001 | 65.000.000 | 22 |
| ASM002 | 15.000.000 | 45 |
| RSM001 | 80.000.000 | 67 |

**Quy trình kiểm tra và tính lại chỉ tiêu cấp quản lý khi cây salesforce bị thay đổi**

Hệ thống thực hiện kiểm tra lại cây salesforce của nhân viên trong phiếu giao KPI khi:

* Chỉnh sửa phiếu giao KPI
  + Tại màn hình *Chỉnh sửa phiếu giao KPI*, khi bấm Lưu/ Lưu và duyệt thì hệ thống thực hiện recheck cây salesforce:
    - Nếu cây salesforce **không bị thay đổi**, thực hiện Lưu/ Lưu và duyệt phiếu giao
    - Nếu cây salesforce **bị thay đổi**, hệ thống thực hiện: 
      * Cập nhật lại chỉ tiêu cho cấp quản lý theo cây salesforce mới nhất.
      * Hiển thị popup: *"Chỉ tiêu của cấp quản lý đã được tính lại do có sự thay đổi trong cấu trúc nhân viên. Vui lòng kiểm tra lại."*
* Duyệt phiếu giao KPI
  + Tại màn hình *danh sách phiếu giao KPI*, khi bấm Duyệt một phiếu giao KPI trạng thái "Khởi tạo" thì hệ thống thực hiện recheck cây salesforce:
    - Nếu cây salesforce **không bị thay đổi**, thực hiện duyệt phiếu giao KPI đó
    - Nếu cây salesforce **bị thay đổi**, hệ thống hiển thị popup:
      * **Text**: *"Chỉ tiêu cấp quản lý sẽ được cập nhật lại do cấu trúc nhân viên đã thay đổi so với thời điểm khởi tạo. Vui lòng kiểm tra lại.**"*
      * **Đóng**: Click vào nút → hệ thống thực hiện đóng popup và không thực hiện cập nhật phiếu giao KPI.
      * **Kiểm tra lại**: Click vào nút → hệ thống thực hiện:
        + Mở màn hình *Chỉnh sửa phiếu giao KPI - Chỉ tiêu quản lý*. Thực hiện các luồng xử lý như Chỉnh sửa phiếu giao KPI.
        + Cập nhật lại chỉ tiêu cho cấp quản lý theo cây salesforce mới nhất.

| Title | UI | Description |
| --- | --- | --- |
| * Đường dẫn: Quản lý chỉ tiêu → Giao KPI → Chọn nút "Tạo mới" * Màn hình Thêm mới phiếu giao KPI bao gồm 3 bước:   + Thông tin chung: Cho phép người dùng nhập thông tin chung của phiếu giao KPI.   + Giao KPI: Cho phép người dùng nhập kế hoạch theo các chỉ tiêu áp dụng được chọn tại bước Thông tin chung   + Chỉ tiêu quản lý: Hệ thống thực hiện tính kế hoạch cho các cấp quản lý (SS, ASM, RSM) dựa trên kế hoạch được giao cho SM trực thuộc tại bước Giao KPI. Các cấp quản lý của SM được lấy theo cây saleforce tại thời điểm tạo phiếu giao. | | |
| Màn hình *"Thêm mới phiếu giao KPI - Chỉ tiêu quản lý"* |  | **Danh sách chỉ tiêu quản lý**   * Bao gồm các thông tin sau:   + Nhân viên: Danh sách các nhân viên hiển thị theo cây salesforce   + Chức vụ: Quản lý Vùng, Quản lý khu vực, Quản lý bán hàng   + Các chỉ tiêu được chọn tại màn hình Thông tin chung được hiển thị theo từng cột. Giá trị tại các chỉ tiêu được tính theo **Quy tắc tính KPI cho cấp quản lý**. * Quy tắc sắp xếp   + Hệ thống thực hiện sắp xếp danh sách theo từng phân cấp của cây salesforce được truy xuất tại thời điểm tạo phiếu giao KPI.   + Cho phép mở rộng/thu gọn danh sách theo từng cấp chức vụ. Mặc định thu gọn danh sách, chỉ hiển thị các nhân viên có chức vụ là Quản lý vùng. Ví dụ: mở rộng tại Quản lý vùng → hiển thị danh sách Quản lý khu vực là cấp dươí của Quản lý vùng.   Nút **Quay lại**: Click vào nút → hệ thống thực hiện trở về màn hình Thêm mới phiếu giao KPI - Giao KPI  Nút **Đóng**: Hiển thị popup xác nhận ngày trên nút:   * Nếu đồng ý: hệ thống thực hiện đóng popup, không thực hiện lưu dữ liệu. * Nếu đóng: thực hiện đóng popup xác nhận.   Nút **Lưu**:  Khi nhấn lưu hệ thống thực hiện kiểm tra và xử lý:   * Kiểm tra:   + Nếu không có đối tượng nào được chọn thì báo lỗi: "Vui lòng chọn ít nhất 1 đối tượng để giao KPI.".   + Nếu trong danh sách phiếu giao KPI tồn tại 1 phiếu giao KPI có đủ các điều kiện sau:     - Trạng thái: "Khởi tạo", "Đã duyệt"     - Có chứa ít nhất 1 loại chỉ tiêu trùng với phiếu giao KPI được tạo.     - Thời gian áp dụng overlap với thời gian áp dụng của phiếu giao KPI được tạo.       * Ví dụ: Hệ thống đang tồn tại phiếu giao KPI 01 (thời gian áp dụng 1/1/2025 → 31/1/2025, trạng thái Đã duyệt), KPI Doanh số tháng. Người dùng tạo phiếu giao KPI mới (thời gian áp dụng 15/1/2025 - 31/1/2025), KPI doanh số tháng và tỷ lệ viếng thăm thành công → Hệ thống báo lỗi: *"Không thể tạo phiếu giao KPI do đã tồn tại một phiếu khác có cùng chỉ tiêu trong khoảng thời gian này."* * Xử lý: Hiển thị popup xác nhận ngay trên nút:   + Nếu đồng ý: Hệ thống thực hiện     - Tạo dòng dữ liệu phiếu giao KPI với trạng thái **Khởi tạo** tại màn hình danh sách     - Tạo mã phiếu giao KPI với chuỗi KPI + 6 ký tự số tăng dần. VD: KPI000001   + Nếu đóng: thực hiện đóng popup xác nhận |
|  |  |  |
| --- | --- | --- |
| Màn hình *"Xem chi tiết phiếu giao KPI - Chỉ tiêu quản lý"* |  | 1. Đường dẫn: Quản lý chỉ tiêu → Giao KPI → Chọn Mã phiếu giao KPI bất kì → Chỉ tiêu quản lý 2. Mô tả: Màn hình Chỉ tiêu quản lý bao gồm:  * Text: *"Kế hoạch chỉ tiêu của cấp quản lý sẽ bằng tổng chỉ tiêu của Nhân viên bán hàng cấp dưới."* * Danh sách chỉ tiêu    + Nhân viên   + Chức vụ   + Các chỉ tiêu được chọn tại màn hình Thông tin chung được hiển thị theo từng cột. |