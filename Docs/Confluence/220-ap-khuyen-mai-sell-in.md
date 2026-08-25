true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US |  |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

**BACKLOG**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  | duchoang.tran@finviet.com.vn | Tạo mới tài liệu |

# Overview Requirement

* Thêm khuyến mãi cho đơn Sell in
* Cập nhật khuyến mãi cho đơn Sell in
* Hủy áp dụng khuyến mãi khi Hủy hoặc Xóa đơn Sell-in

# Requirement

## Thêm mới khuyến mãi đơn Sell-in

| Trường thông tin | Loại trường thông tin | Mô tả |
| --- | --- | --- |
| **Wireframe Màn hình Thêm mới Đơn hàng** | | |
| Danh sách sản phẩm | Table | Khi thêm/xóa sản phẩm, thay đổi số lượng hoặc đơn vị tính → Nếu người dùng đang áp dụng khuyến mãi → thực hiện reset danh sách khuyến mãi dưới |
| Nút "Áp khuyến mãi" | Button | Nếu người dùng chưa chọn sản phẩm, Ngày đặt hàng, Nhà phân phối, Kho → Disabled nút "Áp khuyến mãi". Ngược lại, enabled nút "Áp khuyến mãi"  Khi bấm nút "Áp khuyến mãi" , hệ thống tiếp tục thực hiện (bước 2) |
| Nút "Đóng" | Button | Thực hiện Đóng màn hình Thêm mới đơn hàng và kết thúc luồng Áp khuyến mãi |
| Nút "Lưu" | Button | Nếu người dùng chưa thực hiện "Áp khuyến mãi", hệ thống hiển thị popup "Lưu đơn và không áp khuyến mãi"   1. 1. Chọn "Xác nhận" → THực hiện Thêm mới/Chỉnh sửa đơn hàng & đóng popup Thêm khuyến mãi    2. Chọn "Đóng" → Đóng màn hình xác nhận và tiếp tục nghiệp vụ Thêm mới/Chỉnh sửa đơn hàng |
| **Màn hình Khuyến mãi khả dụng** | | |
| Danh sách khuyến mãi ưu tiên | Table | * Gồm các khuyến mãi có loại chương trình "Ontop" * Mô tả UI các loại Khuyến mãi trả thưởng * Người dùng có thể:    + Nhập số lượng nhận thưởng với các loại khuyến mãi trả thưởng là danh sách sản phẩm   + Click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình Thể lệ chương trình khuyến mãi * Nếu không có khuyến mãi ưu tiên nào, ẩn luôn section này |
| Danh sách khuyến mãi bình thường | Table | * Gồm các khuyến mãi có loại chương trình "Normal" * Mô tả UI Khuyến mãi trả thưởng * Người dùng có thể:    + Điều chỉnh số suất   + Nhập số lượng nhận thưởng với các loại khuyến mãi trả thưởng là danh sách sản phẩm   + Có thể kéo thả độ ưu tiên khuyến mãi   + Click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình Thể lệ chương trình khuyến mãi   + Nếu không có khuyến mãi bình thường nào, ẩn luôn section này |
| Checkbox "Áp dụng khuyến mãi trên đơn hàng" | Checkbox | * Giá trị mặc định là Un-checked * Khi checkbox chuyển qua checked → Hệ thống thực hiện Bước 4 (Lấy danh sách khuyến mãi sau giảm trừ" từ Promotion) |
| Nút "Lưu" | Button | * Nút "Đóng" sẽ bị Disabled khi checkbox "Áp dụng khuyến mãi trên đơn hàng" đang là un-checked |
| Nút "Đóng" | Button | * Khi người dùng click chọn nút "Đóng" → hệ thống thực hiện Đóng Dialog Áp khuyến mãi và đưa người dùng trở về màn hình Thêm mới/Chỉnh sửa Đơn hàng |
| **Màn hình Khuyến mãi đã giảm trừ** | | |
| **Danh sách khuyến mãi Ưu tiên** | Table | * Gồm các khuyến mãi có loại chương trình "Ontop" * **Mô tả UI như phần [Hình thức trả khuyến mãi](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53030026#id-%5BSellin%5D%C3%81pkhuy%E1%BA%BFnm%C3%A3icho%C4%91%C6%A1nh%C3%A0ngb%C3%A1nNPP-M%C3%B4t%E1%BA%A3h%C3%ACnhth%E1%BB%A9ctr%E1%BA%A3khuy%E1%BA%BFnm%C3%A3i)** * Người dùng không được cập nhật bất kỳ thông tin nào * Có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình Thể lệ chương trình khuyến mãi * Nếu không có khuyến mãi ưu tiên nào, ẩn luôn section này |
| **Danh sách khuyến mãi bình thường** | Table | * Gồm các khuyến mãi có loại chương trình "Ontop" * **Mô tả UI như phần [Hình thức trả khuyến mãi](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53030026#id-%5BSellin%5D%C3%81pkhuy%E1%BA%BFnm%C3%A3icho%C4%91%C6%A1nh%C3%A0ngb%C3%A1nNPP-M%C3%B4t%E1%BA%A3h%C3%ACnhth%E1%BB%A9ctr%E1%BA%A3khuy%E1%BA%BFnm%C3%A3i)** * Người dùng không được cập nhật bất kỳ thông tin nào * Có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình Thể lệ chương trình khuyến mãi * Nếu không có khuyến mãi ưu tiên nào, ẩn luôn section này |
| **Nút "Lưu"** | Button | * Nút "Lưu" được enable sau khi người dùng tick checkbox "Áp dụng khuyến mãi trên đơn hàng" * Nhấn "Lưu" → tiếp tục bước (6) |
| **Nút "Đóng"** | Button | * Khi người dùng click chọn nút "Đóng" → hệ thống thực hiện Đóng Dialog Áp khuyến mãivà đưa người dùng trở về bước (1) |
| **Nút checkbox "Áp dụng khuyến mãi cho đơn hàng"** | Checkbox | * Khi người dùng tắt checkbox "Áp khuyến mãi" → Quay về bước (3) (giữ nguyên màn hình người dùng đã điều chỉnh số suất, số lượng, độ ưu tiên) |
| **Màn hình Đơn hàng - Section Khuyến mãi** | | |
| Danh sách sản phẩm | Table | Khi thêm/xóa sản phẩm, thay đổi số lượng hoặc đơn vị tính → Nếu người dùng đang áp dụng khuyến mãi → thực hiện reset danh sách khuyến mãi dưới |
| Danh sách khuyến mãi | Table | Bao gồm danh sách khuyến mãi Ưu tiên & Bình thường  Mỗi CTKM - hình thức khuyến mãi là 1 dòng. Nếu CTKM là tặng X trong nhóm sản phẩm → Mỗi SKU tách xuống 1 dòng (chỉ hiển thị các SKU được lựa chọn tặng)   | Chương trình khuyến mãi | Hiển thị tên CTKM | | --- | --- | | Thể lệ chương trình | Mô tả thể lệ chương trình | | Mã SKU | Hiển thị Mã SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Tên SKU | Hiển thị tên SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Số lượng | Hiển thị số lượng SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Đơn vị | Hiển thị tên đơn vị của SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Khuyến mãi | Hiển thị giá trị tiền khuyến mãi  Nếu CTKM là Tặng % → Hiển thị thành tiền dựa trên chiết khấu | | Thông tin lô | Chỉ hiển thị "+" với những line nào là SKU  → Click vào thực hiện (Bước 7) Màn hình Thông tin lô | |
| Nút "Áp khuyến mãi" | Button | Khi bấm nút "Áp khuyến mãi" → **Quay lại bước 5 - Màn hình Khuyến mãi đã giảm trừ (giữ lại các giá trị đã cập nhật trước đó)** |
| Nút "Bỏ khuyến mãi" | Button | Khi bấm nút "Bỏ khuyến mãi" → Hiển thị màn hình xác nhận "Bỏ khuyến mãi"   * Nếu chọn "Xác nhận" → hệ thống thực hiện Clear danh sách khuyến mãi" * Nếu chọn "Hủy" → Tiếp tục luồng Thêm mới khuyến mãi đơn hàng |
| Nút "Đóng" | Button | Thực hiện Đóng màn hình Thêm mới đơn hàng và kết thúc luồng Áp khuyến mãi |
| Nút "Lưu" | Button | Hệ thống thực hiện   1. Hệ thống kiểm tra tổng số lượng lô bằng số lượng sản phẩm khuyến mãi    1. Nếu không → báo lỗi error toast "Tổng số lượng trong lô phải bằng số lượng sản phẩm"    2. Nếu có, tiếp tục bước tiếp theo. 2. **Thực hiện luồng nghiệp vụ Áp dụng khuyến mãi**    * Gọi phương thức "Apply Promotion"      + Thất bại → hệ thống hiển thị lỗi tương ứng được Promotion trả về      + Thành công         - **Thêm mới/Chỉnh sửa đơn hàng**        - **Lưu khuyến mãi ứng với đơn hàng** |
| **Màn hình Thông tin lô** | | |
| "Thêm dòng" | Button | Click chọn để thêm mới 1 line record |
| Số lượng | Input number | Giá trị mặc định là Trống  Bắt buộc nhập số nguyên  Không được nhập số lượng < 0 |
| Số lô | Input | Giá trị mặc định là Trống  Nhập số lô |
| Hạn sử dụng | Date picker | Giá trị mặc định là Trống  Click chọn → hệ thống popup Date Picker để lựa chọn ngày  Format hiển thị DD-MM-YYYY |
| "Remove" | Button | Click chọn Remove để xóa record |
| "Hoàn tất" | Button | Click chọn → hệ thống kiểm tra tổng số lượng lô bằng số lượng sản phẩm khuyến mãi  Nếu không → báo lỗi error toast "Tổng số lượng trong lô phải bằng số lượng sản phẩm"  Nếu có, Đóng màn hình thông tin Lô và quay về bước (7) để tiếp tục. |
| "Đóng" | Button | Click chọn "Đóng" → hệ thống đóng màn hình thông tin lô và không ghi nhận thông tin lô → quay về bước (7) |

## Xem chi tiết khuyến mãi

Đường dẫn: Bán hàng | Đơn hàng bán | Thêm mới đơn hàng bán & Chỉnh sửa Đơn hàng bán 

| Trường thông tin | Loại Trường | Mô tả |
| --- | --- | --- |
| **Màn hình Chi tiết Đơn hàng có khuyến mãi** | | |
| Mã CTKM |  | 1. 1. Mã CTKM 2. 1. Khuyến mãi gộp (Chỉ hiển thị với các trả thưởng có điều kiện AND)    2. Lựa chọn (Chỉ hiển thị với các trả thưởng có điều kiện OR    3. Mã sản phẩm : Mã SKU    4. Tên sản phẩm    5. Số lượng/Giảm giá       1. Loại trả thưởng là sản phẩm : Hiển thị số lượng sản phẩm trả thưởng       2. Loại trả thưởng là tiền mặt : Hiển thị giá trị tiền mặt       3. Loại trả thưởng là % : Hiển thị giá trị chiết khấu    6. Đơn vị: Đơn vị cơ bản của sản phẩm (nếu không phải sản phẩm trả thưởng, hiển thị "-"  * Người dùng click vào tên CTKM hoặc icon "info" → hiển thị Dialog "Thể lệ chương trình". Để đóng dialog, người dùng nhấn chọn nút "Đóng" * Người dùng không được chỉnh sửa thông tin gì của Khuyến mãi   Để xem thông tin lô, người dùng click vào nút "Xem" ở Thông tin lô → hệ thống hiển thị màn hình thông tin lô (bước 2)  Nếu không có khuyến mãi nào, ẩn luôn section này |
| Tên CTKM | Text | Hiển thị Tên CTKM |
| Số suất | Text | Hiển thị số suất |
| Số lượng | Text | Hiển thị số lượng |
| Thành tiền | Text | Hiển thị thành tiền |
| Sản phẩm trả thưởng | Table | 1. Khuyến mãi gộp (Chỉ hiển thị với các trả thưởng có điều kiện AND) 2. Lựa chọn (Chỉ hiển thị với các trả thưởng có điều kiện OR 3. 1. Mã sản phẩm : Mã SKU    2. Tên sản phẩm    3. Số lượng/Giảm giá       1. Loại trả thưởng là sản phẩm : Hiển thị số lượng sản phẩm trả thưởng       2. Loại trả thưởng là tiền mặt : Hiển thị giá trị tiền mặt       3. Loại trả thưởng là % : Hiển thị giá trị chiết khấu    4. Đơn vị: Đơn vị cơ bản của sản phẩm (nếu không phải sản phẩm trả thưởng, hiển thị "-"  * Người dùng click vào tên CTKM hoặc icon "info" → hiển thị Dialog "Thể lệ chương trình". Để đóng dialog, người dùng nhấn chọn nút "Đóng" * Người dùng không được chỉnh sửa thông tin gì của Khuyến mãi   Để xem thông tin lô, người dùng click vào nút "Xem" ở Thông tin lô → hệ thống hiển thị màn hình thông tin lô (bước 2) |

## Cập nhật khuyến mãi đơn Sell-in

# Phân tích CTKM

## Mô tả hình thức trả khuyến mãi

| 1 | **Tặng nhóm SP**  **(Scope trong Sprint 7)** | Khi khách hàng đạt đủ điều kiện mua, được tặng nhóm sản phẩm sau:  **Ví dụ:** Với đơn hàng 3 SP B, NPP nhận 2 SP trong nhóm sản phẩm sau:   * Sản phẩm B * Sản phẩm C * Sản phẩm D   **Mô tả thông tin trả thưởng:**   1. **Thông tin CTKM:**    * Số suất tối đa: Được promotion trả về    * Số suất (Input Number) :      + Mặc định tối đa số suất (Được Promotion trả về)      + Cho phép người dùng chỉnh sửa số suất      + Chỉ được nhập số nguyên      + Min là 0      + Max là số suất tối đa      + Khi thay đổi số suất → Hệ thống tự động cập nhật        - **số lượng CTKM bằng cách lấy số lượng trên 1 suất \* số suất**        - ~~Số lượng trả thưởng danh sách sản phẩm được reset về 0~~    * Số lượng:      + Giá trị mặc định là giá trị được promotion trả về      + Số lượng = số suất \* số lượng tối đa trên 1 suất (số lượng tối đa trên 1 suất được Promotion trả về)      + Disabled Input      + Khi bấm "Áp dụng KM" → Ràng buộc **tổng số lượng sản phẩm = Số lượng CTKM**. Hiển thị lỗi "Số lượng sản phẩm tặng phải bằng số lượng khuyến mãi"    * Thành tiền: 0 2. **Trả thưởng**  * + ~~Lựa chọn (Checkbox)~~     - ~~Lựa chọn Trả thưởng → tick chọn~~     - ~~Giá trị mặc định là checked~~     - ~~Khi un-checked, disabled Input Số lượng/Giảm giá & và reset số lượng về 0~~   + Mã sản phẩm: Lấy mã SKU   + Tên sản phẩm   + Số lượng/Giảm giá (Input Number):      - Giá trị mặc định là 0     - Người dùng có thể điều chỉnh số lượng (nhập số nguyên)     - Min là 0     - Max là số lượng tối đa     - Khi bấm "Áp dụng KM" → Ràng buộc tổng số lượng sản phẩm được checked = Số lượng sản phẩm. Hiển thị lỗi "Số lượng sản phẩm tặng phải bằng số lượng khuyến mãi"   + Đơn vị: Đơn vị cơ bản của sản phẩm đó   + Tồn kho: Hiển thị tồn kho sản phẩm khuyến mãi   Lưu ý: Trường hợp số lượng nhận trên từng SKU không đủ tồn kho → Hiển thị message lỗi chung "Số lượng tồn kho không đủ để đáp ứng khuyến mãi trên" |  |
| 2 | **Tặng tiền mặt**  **(Scope trong Sprint 7)** | Khi khách hàng đạt đủ điều kiện mua, được nhận tiền mặt:  **Ví dụ:** Đơn hàng mua 3 SP A được giảm giá 50,000 VND trên tổng giá trị đơn hàng   1. **Thông tin CTKM:**    * Số suất tối đa: Được promotion trả về    * Số suất (Input Number) :      + Mặc định là số suất tối đa      + Cho phép người dùng chỉnh sửa số suất      + Chỉ được nhập số nguyên      + Min là 0      + Max là số suất tối đa      + Khi thay đổi số suất → hệ thống tự động cập nhật        - Giá trị Thành tiền CTKM mới = Số suất \* thành tiền được giảm trên 1 suất        - Giá trị Thành tiền Trả thưởng mới = Thành tiền CTKM mới    * Số lượng (Input): 0    * Thành tiền: Mặc định là Thành tiền khuyến mãi được Promotion trả về 2. **Trả thưởng**  * + Mã sản phẩm: N/A   + Tên sản phẩm: N/A   + Số lượng: Giá trị mặc định thành tiền giảm được Promotion trả về   + Đơn vị: VND |  |
| 3 | **Tặng %**  **(Scope trong Sprint 7)** | Khi khách hàng đạt đủ điều kiện mua, được chiết khấu trực tiếp trên giá trị đơn hàng:  **Ví dụ:**Đơn hàng 5 triệu VNĐ, được chiết khấu 10% giá trị đơn hàng, tối đa là 1,000,000 VND.   1. **Thông tin CTKM:**    * Số suất tối đa:    * Số suất (Input Number) :      + Mặc định là 1 suất      + Cho phép người dùng chỉnh sửa số suất      + Chỉ được nhập số nguyên      + Min là 0      + Khi thay đổi số suất → hệ thống tự động cập nhật thành tiền mới = thành tiền giảm trên 1 suất \* số suất    * Số lượng (Input): 0    * Thành tiền: Giá trị mặc định được Promotion trả về 2. **Trả thưởng**  * + Mã sản phẩm: N/A   + Tên sản phẩm: N/A   + Số lượng/Giảm giá (Input Number Disabled) : Giá trị mặc định được Promotion trả về   + Đơn vị: % |  |
| **4** | **Tặng SP cùng loại** | Khách hàng mua X SP trong nhóm được tặng được SP cùng loại  Ví dụ:  CTKM: Khi mua 2 SP trong nhóm (A,B,C) được tặng 1 SP cùng loại  Đơn hàng mua: 8A, 5B, 3C  **Tương ứng CTKM**   | Tên CTKM | Số suất | Số lượng | Đơn vị | Tồn kho | | --- | --- | --- | --- | --- | | Khi mua 2 SP trong nhóm (A,B,C) được tặng 1 SP cùng loại | 7 | 7 | - | - |   **Tương ứng sản phẩm trả thưởng**   | Chọn | Mã SP | Tên SP | Số suất | Số lượng | Đơn vị | Tồn kho | Điều kiện trả | | --- | --- | --- | --- | --- | --- | --- | --- | | x | SKU293721 | Sản phẩm A | 4 | 4 | Thùng | 20 | Mua 8A để được 4 suất | | x | SKU293721 | Sản phẩm B | 2 | 2 | Thùng | 20 | Mua 4B để được 2 suất | | x | SKU293721 | Sản phẩm C | 1 | 1 | Thùng | 20 | Mua 2C để được 1 suất |  1. **Thông tin CTKM:**    * Số suất tối đa: Được promotion trả về    * Số suất (Input Number) :      + Mặc định số suất tối đa tính tổng từ số suất tối đa SKU      + Cho phép người dùng chỉnh sửa số suất      + Chỉ được nhập số nguyên      + Min là 0      + Max là tối đa số suất      + Khi thay đổi số suất → hệ thống tự động cập nhật         - Số lượng CTKM = số lượng trên 1 suất \* số suất        - ~~Số suất Trả thưởng : Reset về 0~~        - ~~Số lượng trả thưởng : Reset về 0~~    * Số lượng:      + Giá trị mặc định được Promotion trả về      + Disabled input    * Thành tiền: N/A 2. **Trả thưởng**    1. Mã sản phẩm: Lấy mã SKU    2. Tên sản phẩm    3. Số suất       * Mặc định là số suất là 0       * Cho phép người dùng thay đổi số suất       * Chỉ được nhập số nguyên       * Min là 0       * Max là số suất tối đa trên từng SKU được Promotion trả về       * Khi thay đổi số suất tối đa → hệ thống tự động cập nhật          + Số lượng = Số lượng trên 1 suất \* số suất    4. Số lượng/Giảm giá :       * Số suất được hưởng \* số lượng trên 1 suất       * Giá trị mặc định là max số lượng (max số suất \* số lượng trên 1 suất)       * Đơn vị: Đơn vị cơ bản    5. Đơn vị: hiển thị đơn vị cơ bản & nhỏ nhất    6. Tồn kho : Tồn kho có sẵn của sản phẩm   Lưu ý: Trường hợp số lượng nhận trên từng SKU không đủ tồn kho → Hiển thị message lỗi chung "Số lượng tồn kho không đủ để đáp ứng khuyến mãi trên" |  |
| **5** | Scheme kết hợp 2 cấp - Điều kiện AND | 1. **Thông tin CTKM:**Như mô tả    1. Số suất tối đa: Được promotion trả về theo[**Quy tắc hiển thị số suất điều kiện AND hoặc OR**](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53030026#id-%5BSellin%5D%C3%81pkhuy%E1%BA%BFnm%C3%A3icho%C4%91%C6%A1nh%C3%A0ngb%C3%A1nNPP-Ruleshi%E1%BB%83nth%E1%BB%8Bs%E1%BB%91su%E1%BA%A5t%C4%91i%E1%BB%81uki%E1%BB%87nAND&OR)    2. Số suất (Input Number) :       * Mặc định số suất tối đa       * Cho phép người dùng chỉnh sửa số suất       * Chỉ được nhập số nguyên       * Min là 0       * Max là tối đa số suất       * Khi thay đổi số suất → hệ thống tự động cập nhật          + Tính lại Số lượng = số suất thay đổi \* số lượng trên 1 suất    3. Số lượng       * Mặc định là tổng số lượng tối đa trên từng gói khuyến mãi 2. **Trả thưởng**    1. **Gói khuyến mãi**       1. Tên gói khuyến mãi : Gói khuyến mãi + [STT]       2. Số lượng          * Chỉ hiển thị với các Gói khuyến mãi "Tặng nhóm SP" , "Tặng SP cùng loại"          * Giá trị mặc định là Số suất tối đa \* số lượng tối đa trên 1 suất 3. **Thông tin gói khuyến mãi thưởng tương tự như 4 loại Scheme ở trên**    1. Tặng nhóm SP    2. Tặng tiền    3. Tặng %    4. Tặng  SP cùng loại   Lưu ý: Khi bấm "Áp khuyến mãi" → Hệ thống validate theo quy tắc:   * Kiểm tra tổng số lượng SKU = tổng số lượng trên gói khuyến mãi = Tổng số lượng trên CTKM   + Nếu không → Báo lỗi ở line "Tổng số lượng trên Gói khuyến mãi   + Nếu thỏa, cho phép Kiểm tra giảm trừ |  |
| **6** | Scheme kết hợp 2 cấp - Điều kiện OR | 1. **Thông tin CTKM:**Như mô tả    1. Số suất tối đa: Được promotion trả về theo[**Quy tắc hiển thị số suất điều kiện AND hoặc OR**](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53030026#id-%5BSellin%5D%C3%81pkhuy%E1%BA%BFnm%C3%A3icho%C4%91%C6%A1nh%C3%A0ngb%C3%A1nNPP-Ruleshi%E1%BB%83nth%E1%BB%8Bs%E1%BB%91su%E1%BA%A5t%C4%91i%E1%BB%81uki%E1%BB%87nAND&OR)(Mặc định là số suất của Gói khuyến mãi 1)    2. Số suất (Input Number) :       * Mặc định số suất tối đa       * Cho phép người dùng chỉnh sửa số suất       * Chỉ được nhập số nguyên       * Min là 0       * Max là tối đa số suất       * Khi thay đổi số suất → hệ thống tự động cập nhật          + Tính lại Số lượng = số suất thay đổi \* số lượng trên 1 suất    3. Số lượng       * Mặc định là tổng số lượng tối đa trên từng gói khuyến mãi 2. **Trả thưởng**    1. **Gói khuyến mãi**       1. Tên gói khuyến mãi : Gói khuyến mãi + [STT]       2. Số lượng          * Chỉ hiển thị với các Gói khuyến mãi "Tặng nhóm SP" , "Tặng SP cùng loại"          * Giá trị mặc định là Số suất tối đa \* số lượng tối đa trên 1 suất 3. **Thông tin gói khuyến mãi thưởng tương tự như 4 loại Scheme ở trên**    1. Tặng nhóm SP    2. Tặng tiền    3. Tặng %    4. Tặng  SP cùng loại   Lưu ý: Khi bấm "Áp khuyến mãi" → Hệ thống validate theo quy tắc:   * Kiểm tra tổng số lượng SKU = tổng số lượng trên gói khuyến mãi = Tổng số lượng trên CTKM   + Nếu không → Báo lỗi ở line "Tổng số lượng trên Gói khuyến mãi   + Nếu thỏa, cho phép Kiểm tra giảm trừ |  |

# Rules

## Quy tắc hiển thị số suất điều kiện AND & OR

Các scheme kết hợp điều kiện AND hoặc OR :

1. Nếu điều kiện AND: Các gói khuyến mãi chung 1 số suất tối đa

2. Nếu điều kiện OR: Mỗi gói khuyến mãi là 1 số suất tối đa riêng

Xem Ví dụ dưới đây:

Thông tin đơn hàng: 10 triệu

| Scheme 1 (AND) | Scheme 2 (OR) |
| --- | --- |
| Đơn hàng 2 triệu được tặng 2B AND giảm tiền 100,000 VND   * Gói KM 1 - Tặng 2B - tối đa 2 suất (vì tồn kho hoặc ngân sách chỉ còn đủ cho 2 suất) * Gói KM 2 - Giảm tiền 100,000 VND - tối đa 2 suất (vì Gói KM1 chỉ còn 2 suất) | Đơn hàng 2 triệu được tặng 2B OR giảm tiền 100,000 VND   * Gói KM 1 - Tặng 2B - tối đa 2 suất (vì tồn kho hoặc ngân sách chỉ còn đủ cho 2 suất) * Gói KM 2 - Giảm tiền 100,000 VND - tối đa 5 suất |

## Quy tắc áp khuyến mãi tạm ngưng

|  |
| --- |
| **Business case:**  HO tạm ngưng chương trình khuyến mãi đang diễn ra. Lúc này luồng đơn hàng Sell in/Sellout / Purchase Order sẽ được xử lý như sau |
| **Business rules chung :**   * Bộ rules áp dụng cho khuyến mãi Sell in & Sell out Luồng phiếu nhập kho & xuất kho tương tự cho Trường hợp Đơn đã áp dụng khuyến mãi bị Tạm ngưng Đối với các đơn hàng có áp khuyến mãi trước đó -> Vẫn cho luồng Duyệt đơn -> Tạo phiếu xuất kho -> Duyệt phiếu xuất kho bình thường Đối với các đơn hàng chưa áp dụng khuyến mãi trước đó thì chia ra 2 trường hợp: TH1: HO tạo đơn có ngày đặt đơn < ngày tạm ngưng -> Cho phép áp khuyến mãi đó TH2: HO tạo đơn có ngày đặt đơn >= ngày tạm ngưng -> Không cho phép áp khuyến mãi đó |
| **Bộ case xử lý luồng đơn hàng với Áp khuyến mãi tạm ngưng** |

## Quy tắc áp khuyến mãi kết thúc

|  |
| --- |
| **Business case:**  HO kết thúc chương trình khuyến mãi đang diễn ra. Lúc này luồng đơn hàng Sell in/Sellout / Purchase Order sẽ được xử lý như sau |
| **Business rules chung :**   * Bộ rules áp dụng cho khuyến mãi Sell in & Sell out * Luồng phiếu nhập kho & xuất kho tương tự cho Trường hợp Đơn đã áp dụng khuyến mãi bị Kết thúc * Đối với các đơn hàng có áp khuyến mãi trước đó -> Vẫn cho luồng Duyệt đơn -> Tạo phiếu xuất kho -> Duyệt phiếu xuất kho bình thường * Đối với các đơn hàng chưa áp dụng khuyến mãi trước đó thì chia ra 2 trường hợp:   + TH1: Khuyến mãi tự động kết thúc do đến hạn -> Vẫn cho HO được tạo đơn & áp khuyến mãi đó -> xuất kho nếu ngày đặt đơn < ngày kết thúc   + TH2: Khuyến mãi bị HO bắt buộc kết thúc -> không cho HO tạo đơn áp khuyến mãi đó (dù ngày đặt đơn < ngày kết thúc) |
| **Bộ case xử lý luồng đơn hàng với Áp khuyến mãi kết thúc** |