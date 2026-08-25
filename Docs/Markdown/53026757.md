true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1062  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1138  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1140  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1142 |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

**BACKLOG**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |
| 2 | 1.1.0 |  |  |  |

# **Requirement**

**Chức năng Áp dụng khuyến mãi cho đơn Sell out:**

* Thêm khuyến mãi đơn hàng bán
* Chỉnh sửa khuyến mãi đơn hàng bán
* Revert khuyến mãi khi hủy/xóa đơn hàng bán
* Xem chi tiết khuyến mãi đơn hàng bán

## **Thêm mới khuyến mãi đơn hàng bán**

**Tiền điều kiện**

* Đơn hàng bán đang ở trạng thái khởi tạo
* Đơn hàng chưa được áp dụng khuyến mãi trước đó
* Đường dẫn: Bán hàng | Đơn hàng bán | Thêm mới đơn hàng bán & Chỉnh sửa Đơn hàng bán

**Workflow**

**trueThêm khuyến mãi đơn hàngi2zGzfacxQG7VVb1j80N 11false1200autotop53033595true**

**Mô tả chi tiết**

| No | Step | Description | UI & flow |
| --- | --- | --- | --- |
| 1 | Màn hình đơn hàng | Nút áp khuyến mãi | Nếu người dùng chưa chọn sản phẩm, Ngày đặt hàng, Nhà phân phối, Kho → Disabled nút "Áp khuyến mãi". Ngược lại, enabled nút "Áp khuyến mãi"  Khi bấm nút "Áp khuyến mãi" , hệ thống tiếp tục thực hiện **(bước 2)** |  |
| 2 | Lấy danh sách khuyến mãi khả dụng | [Xem chi tiết tài liệu API](https://eco-dms-promotion-api-dev.finviet.com.vn/#/operations/IntegrationController_ListPromotions_v1) | N/A |
| 3 | Kiểm tra khuyến mãi tự động áp dụng | 1. Hệ thống kiểm tra trường thông tin "Auto Apply" (được Promotion trả về)    1. **Nếu true, Tiếp tục qua (bước 4)**    2. **Nếu false, tiếp tục bước (7)** | N/A |
| 4 | Màn hình khuyến mãi khả dụng | Hiển thị danh sách khuyến mãi gồm 2 section   1. **Danh sách khuyến mãi ưu tiên:**    * Gồm các khuyến mãi có loại chương trình "Ontop"    * **Mô tả UI các loại Khuyến mãi trả thưởng**    * Người dùng có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống popup dialog **Thể lệ chương trình khuyến mãi** 2. **Danh sách khuyến mãi bình thường**    * Gồm các khuyến mãi có loại chương trình "Normal"    * Có thể điều chỉnh số suất và số lượng tương ứng    * Người dùng có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống popup dialog **Thể lệ chương trình khuyến mãi** 3. Checkbox "Áp dụng khuyến mãi trên đơn hàng"     * Giá trị mặc định là Un-checked 4. Nút "Lưu"     * Nút "Đóng" sẽ bị Disabled khi checkbox "Áp dụng khuyến mãi trên đơn hàng" đang là un-checked 5. Nút "Đóng"    * Khi người dùng click chọn nút "Đóng" → hệ thống thực hiện Đóng **Dialog Áp khuyến mãi**và đưa người dùng trở về màn hình **Thêm mới/Chỉnh sửa Đơn hàng**   **Danh sách khuyến mãi trả thưởng ở 2 section (1) & (2) được mô tả dưới phần [Hình thức trả khuyến mãi](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53030026#id-%5BSellin%5D%C3%81pkhuy%E1%BA%BFnm%C3%A3icho%C4%91%C6%A1nh%C3%A0ngb%C3%A1nNPP-M%C3%B4t%E1%BA%A3h%C3%ACnhth%E1%BB%A9ctr%E1%BA%A3khuy%E1%BA%BFnm%C3%A3i)**  Nếu không có khuyến mãi khả dụng → hiển thị Toast info "Không có khuyến mãi phù hợp" → Tiếp tục luồng Thêm mới đơn hàng |  |
| 5 | Màn hình khuyến mãi khả dụng được điều chỉnh | 1. **Danh sách khuyến mãi ưu tiên:**    * Người dùng có thể lựa chọn nhóm sản phẩm/sản phẩm trả thưởng    * Có thể nhập số lượng đối với nhóm sản phẩm. Ràng buộc số lượng trên CTKM = tổng số lượng trong nhóm sản phẩm trả thưởng    * Có thể lựa chọn điều kiện đối với khuyến mãi điều kiện    * Người dùng có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống popup dialog **Thể lệ chương trình khuyến mãi** 2. **Danh sách khuyến mãi bình thường**    * Có thể kéo thả sắp xếp thứ tự các khuyến mãi bình thường    * Có thể điều chỉnh số suất. Số suất điều chỉnh <= số suất tối đa được promotion trả về    * Người dùng có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống popup dialog **Thể lệ chương trình khuyến mãi** 3. **(1), (2) đều có:**    * Toggle để đóng sản phẩm trả thưởng 4. Màn hình khuyến mãi khả dụng được điều chỉnh là lưu lại   Sau khi hoàn tất điều chỉnh khuyến mãi, người dùng check vào ô checkbox "Áp dụng khuyến mãi đơn hàng" → hệ thống thực hiện **(bước 6)** | **Luồng nghiệp vụ lấy khuyến mãi khả dụng**  trueLấy khuyến mãi sau giảm trừoIujoYQywPuZ-wg3am5r 11false500autotop53033595true |
| 6 | Lấy khuyến mãi  áp dụng sau giảm trừ | **<BA Promotion sẽ define Request & Response cần cho API này và discuss với BA DMS>**    | **Trường thông tin** | **Loại trường** | **Mô tả** | | --- | --- | --- | | Sản phẩm | Array | Danh sách sản phẩm gồm các thông tin sau :   * SKU * Quantity * Price | | Giá trị đơn hàng | Number | Giá trị sản phẩm | | Loại chương trình | string | Loại chương trình khuyến mãi | | Promotions | Array | Danh sách khuyến mãi gồm:   1. Loại chương trình 2. Thể lệ chương trình 3. Điều kiện mua 4. Trả thưởng (gồm 4 loại )     1. Trả tiền    2. Trả %    3. Trả sản phẩm (bao gồm cùng loại & khác loại)    4. Trả nhóm sản phẩm 5. Số suất tối đa 6. Thời gian bắt đầu 7. Thời gian kết thúc |   Response được Promotion trả về DMS cần  **<BA Promotion sẽ define Request & Response cần cho API này và discuss với BA DMS>**    | **Trường thông tin** | **Loại trường** | **Mô tả** | | --- | --- | --- | | Giá trị đơn hàng | Number | Giá trị sản phẩm | | Loại chương trình | string | Loại chương trình khuyến mãi | | Promotions | Array | Danh sách khuyến mãi gồm:   1. Loại chương trình 2. Thể lệ chương trình 3. Điều kiện mua    1. Sản phẩm giảm trừ [SKU, Tên sản phẩm, Số lượng] 4. Trả thưởng (gồm 4 loại )     1. Trả tiền : Số tiền giảm    2. Trả % : % giảm & giá trị tối đa    3. Trả sản phẩm : Sản phẩm được nhận [SKU, Tên sản phẩm, Số lượng] 5. Số suất áp dụng |   [Thông tin chi tiết tài liệu API](https://eco-dms-promotion-api-dev.finviet.com.vn/#/operations/IntegrationController_ListPromotions_v1) | **Luồng nghiệp vụ lấy khuyến mãi sau giảm trừ**  trueLấy khuyến mãi khả dụng đơn hàngnaMzpS90E1M6yNkkcEcO 11false500autotop53033595true |
| 7 | Màn hình Khuyến mãi đã giảm trừ | 1. **Danh sách khuyến mãi Ưu tiên**    * Hiển thị khuyến mãi ưu tiên nhận được từ Promotion    * Disabled đi các điều kiện chọn, số lượng 2. **Danh sách khuyến mãi bình thường**    * Hiển thị danh sách Khuyến mãi bình thường nhận được từ Promotion    * Disabled đi các lựa chọn, nhập số suất, số lượng & sắp xếp các ưu tiên 3. Nút "Lưu"    * Nút "Lưu" được enable sau khi người dùng tick checkbox "Áp dụng khuyến mãi trên đơn hàng"    * Khi bấm lưu Hệ thống kiểm tra tồn kho khả dụng với các SKU nhận thưởng. Nếu số lượng tặng SKU không đủ tồn kho → báo lỗi "Số lượng tồn kho không đủ để đáp ứng khuyến mãi trên"    * Nếu các SKU nhận thưởng đều đủ tồn kho → Thực hiện bước (4) 4. Nút "Đóng"    * Khi người dùng click chọn nút "Đóng" → hệ thống thực hiện Đóng **Dialog Áp khuyến mãi**và đưa người dùng trở về bước (1) 5. Nút checkbox "Áp dụng khuyến mãi cho đơn hàng"  * + Khi người dùng tắt checkbox "Áp khuyến mãi" → Quay về bước (5) (giữ nguyên màn hình người dùng đã điều chỉnh số suất, số lượng, độ ưu tiên) |  |
| 8 | Màn hình Khuyến mãi đơn hàng | Mô tả trường thông tin Màn hình đơn hàng   | UI | Mô tả | | --- | --- | | Danh sách sản phẩm | Khi thêm/xóa sản phẩm, thay đổi số lượng hoặc đơn vị tính → Nếu người dùng đang áp dụng khuyến mãi → thực hiện reset danh sách khuyến mãi dưới | | Danh sách khuyến mãi | Bao gồm danh sách khuyến mãi Ưu tiên & Bình thường  Mỗi CTKM - hình thức khuyến mãi là 1 dòng. Nếu CTKM là tặng X trong nhóm sản phẩm → Mỗi SKU tách xuống 1 dòng (chỉ hiển thị các SKU được lựa chọn tặng)   | UI | Mô tả | | --- | --- | | Chương trình khuyến mãi | Hiển thị tên CTKM | | Thể lệ chương trình | Click vào icon "i" → Hệ thống popup Dialog Mô tả thể lệ chương trình | | Mã SKU | Hiển thị Mã SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Tên SKU | Hiển thị tên SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Số lượng | Hiển thị số lượng SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Đơn vị | Hiển thị tên đơn vị của SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Khuyến mãi | Hiển thị giá trị tiền khuyến mãi  Nếu CTKM là Tặng % → Hiển thị thành tiền dựa trên chiết khấu | | Tồn kho | Hiển thị tồn kho dựa trên đơn vị của SKU  Nếu CTKM tặng % hoặc tiền, hiển thị "-" | | | Nút "Áp khuyến mãi" | Khi bấm nút "Áp khuyến mãi" → **Quay lại bước 5 - Màn hình Khuyến mãi đã giảm trừ (giữ lại các giá trị đã cập nhật trước đó)** | | Nút "Bỏ khuyến mãi" | Khi bấm nút "Bỏ khuyến mãi" → Hiển thị màn hình xác nhận "Bỏ khuyến mãi"   * Nếu chọn "Xác nhận" → hệ thống thực hiện Clear danh sách khuyến mãi" * Nếu chọn "Hủy" → Tiếp tục luồng Thêm mới khuyến mãi đơn hàng | | Nút "Đóng" | Thực hiện Đóng màn hình Thêm mới đơn hàng và kết thúc luồng Áp khuyến mãi | | Nút "Lưu" | Hệ thống thực hiện bước (9) | |  |
| 9 | Lưu đơn hàng khuyến mãi | **Nếu người dùng chưa thực hiện "Áp khuyến mãi"**, hệ thống hiển thị popup "Lưu đơn và không áp khuyến mãi"   1. 1. Chọn "Xác nhận" → THực hiện Thêm mới/Chỉnh sửa đơn hàng & đóng popup Thêm khuyến mãi    2. Chọn "Đóng" → Đóng màn hình xác nhận và tiếp tục nghiệp vụ Thêm mới/Chỉnh sửa đơn hàng   Nút "Lưu" → hệ thống thực hiện **luồng nghiệp vụ Áp dụng khuyến mãi**   1. Duyệt qua các CTKM, với các CTKM có sản phẩm là hàng tặng → thực hiện kiểm tra tồn kho theo **Quy tắc Tồn kho đáp ứng**dựa vào ngày đặt hàng    * Nếu tối thiểu 1 sản phẩm không đủ tồn kho → hiển thị toast error "Số lượng tồn kho không đủ để đáp ứng khuyến mãi trên"    * Nếu các sản phẩm đều đáp ứng được tồn kho, tiếp tục bước tiếp theo 2. Gọi phương thức "Apply Promotion"    * Thất bại → hệ thống hiển thị lỗi tương ứng được Promotion trả về    * Thành công       + **Thêm mới/Chỉnh sửa đơn hàng**      + **Lưu khuyến mãi ứng với đơn hàng**      + **Cập nhật tồn kho khuyến mãi**        - Lấy danh sách nhập kho trước ngày đặt hàng        - Thực hiện tăng tồn kho sản phẩm khuyến mãi tương ứng 3. Nút "Đóng" → Đóng Dialog "Thêm mới/Chỉnh sửa đơn hàng" và hủy luồng Thêm mới khuyến mãi đơn hàng   Lưu ý: Khi người dùng chọn "Áp khuyến mãi" → Quay về bước (4) (giữ nguyên view người dùng đã điều chỉnh số suất, số lượng, độ ưu tiên)  Trường hợp người dùng bấm "Lưu" mà chưa thực hiện áp khuyến mãi, hệ thống kiểm tra & xử lý   1. Hệ thống lấy tất cả khuyến mãi khả dụng với thông tin Đơn hàng (danh sách sản phẩm, ngày đặt hàng, kênh bán hàng) từ **Promotion** 2. Nếu tổng số khuyến mãi = 0 → Đóng màn hình Đơn hàng & thực hiện quy trình Tạo mới/Chỉnh sửa đơn hàng 3. Nếu tổng khuyến mãi > 0 → Hiển thị Confirmation Dialog    1. Bấm "Xác nhận" → thực hiện bước (2)    2. Bấm "Hủy" → Đóng Confirmation Dialog và tiếp tục quy trình Thêm khuyến mãi | **Luồng nghiệp vụ Áp dụng khuyến mãi**  trueÁp dụng khuyến mãi860Z8gU41kWnRXbEiaF9 11false500autotop53033595true |

## **Xem chi tiết khuyến mãi**

Đường dẫn: Bán hàng | Đơn hàng bán | Thêm mới đơn hàng bán & Chỉnh sửa Đơn hàng bán

|  |  |  |  |
| --- | --- | --- | --- |
| **No** | **Flow** | **Mô tả chi tiết** | **UI** |
| 1 | Xem chi tiết đơn khuyến mãi | Hiển thị danh sách **khuyến mãi ưu tiên** và **khuyến mãi bình thường** bao gồm các thông tin sau:  Mỗi CTKM - hình thức khuyến mãi là 1 dòng. Nếu CTKM là tặng X trong nhóm sản phẩm → Mỗi SKU tách xuống 1 dòng (chỉ hiển thị các SKU được lựa chọn tặng). Mô tả UI:   | UI | Hiển thị tên CTKM | | --- | --- | | Tên CTKM | Hiển thị tên CTKM | | Thể lệ chương trình | Click vào icon "i" → Hệ thống popup Dialog Mô tả thể lệ chương trình | | Mã SKU | Hiển thị Mã SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Tên SKU | Hiển thị tên SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Số lượng | Hiển thị số lượng SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Đơn vị | Hiển thị tên đơn vị của SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Khuyến mãi | Hiển thị giá trị tiền khuyến mãi  Nếu CTKM là Tặng % → Hiển thị thành tiền dựa trên chiết khấu | | Tồn kho | Hiển thị tồn kho dựa trên đơn vị của SKU  Nếu CTKM tặng % hoặc tiền, hiển thị "-" |   *Lưu ý: Người dùng không được chỉnh sửa thông tin gì của Khuyến mãi* |  |

## **Chỉnh sửa khuyến mãi**

**Workflow**

truechỉnh sửa khuyến mãi5EyzinqZ5oFRVv7EtBJW 11false1200autotop53033595true

**Mô tả luồng**

Đường dẫn: Bán hàng | Đơn hàng bán | Chỉnh sửa Đơn hàng bán

| No | Màn hình | Mô tả chi tiết | UI |
| --- | --- | --- | --- |
| 1 | Màn hình Chỉnh sửa đơn hàng | Section Khuyến mãi | Hiển thị danh sách khuyến mãi đã được áp dụng ở bước trước đó |  |
| 2 | Màn hình Áp khuyến mãi khả dụng | Bước 1: Hệ thống lấy lại danh sách khuyến mãi đã áp dụng cho đơn hàng trước đó (1)  Bước 2: Hệ thống lấy danh sách khuyến mãi khả dụng hiện tại cho đơn (2)  Bước 3: Gộp khuyến mãi khả dụng theo quy tắc :   * TH 1: Các KM đã tồn tại ở cả 2 danh sách (1), (2) → Lấy KM đó, trong đó:   + - Số suất tối đa = số suất tối đa hiện tại + số suất tạm giữ của đơn hàng     - Số suất đã chọn được giữ lại mà người đùng đã chọn * TH 2: Các KM tồn tại ở (1) & không tồn tại ở (2) → Không lấy KM đó * TH 3 :Các KM không tồn tại ở (1) & tồn tại ở (2) → Lấy KM đó, trong đó:   + Số suất tối đa = số suất tối đa hiện tại   + Số suất người dùng chọn = số suất tối đa hiện tại   Xem ví dụ dưới đây để hiểu rõ hơn cách lấy 2 danh sách khuyến mãi trên.  Đơn hàng dưới đây   |  |  |  |  | | --- | --- | --- | --- | | **Sản phẩm** | **Đơn giá** | **Số lượng** | **Tổng giá trị đơn hàng** | | Sản phẩm A | 100,000 | 10 | 3,500,000 VND | | Sản phẩm B | 200,000 | 5 | | Sản phẩm C | 150,000 | 10 |   Ngày 1/10, đơn hàng trên được thêm mới khuyến mãi    | Thứ tự ưu tiên | Khuyến mãi | Số suất tối đa | Số suất tham gia | Sản phẩm tham gia | Sản phẩm trả thưởng | Sản phẩm tham gia còn lại |  | | --- | --- | --- | --- | --- | --- | --- | --- | | 1 | Mua 3A & 2B tặng 3C  (KM không bội số) | 2 | 1 | 1 | 3A  2B | 3C | 7A  3B  10C | | 2 | Mua 2A tặng 1A cùng loại | 3 | 1 | 1 | 2A | 1A | 5A  5B  10C | | 3 | Mua 3C giảm 50K trên đơn hàng | 3 | 1 | 1 | 3C | 50K | 5A  5B  7C | | 4 | Mua 5A & 5C tặng 1B & 1A | 2 | 1 | 1 | 5A  5C | 1A  1B | 0A  0B  2C |   Ngày 2/10, thực hiện chỉnh sửa khuyến mãi. Lúc này hệ thống lấy danh sách khuyến mãi mới ứng với thông tin đơn hàng trên   | No | Khuyến mãi | Số suất tối đa | | --- | --- | --- | | 1 | Mua 3A & 2B tặng 3C | 1 | | 2 | Mua 2A tặng 1A cùng loại | 2 | | 3 | Mua 3C giảm 50K trên đơn hàng | 2 | | 5 | Mua 4C tặng 2A & 1B | 2 | | 6 | Mua 3A tặng 2B & 1C | 3 |   **Hiển thị khuyến mãi :**   | No | Khuyến mãi | Số suất tối đa | Số suất chọn | Giải thích | | --- | --- | --- | --- | --- | | 1 | Mua 3A & 2B tặng 3C | 1 | 2 | Thuộc TH 1  Số suất tối đa = tối đa + tạm giữ = 1 + 1 = 2 | | 2 | Mua 2A tặng 1A cùng loại | 1 | 3 | Thuộc TH 1  Số suất tối đa = tối đa + tạm giữ = 2 + 1 = 3 | | 3 | Mua 3C giảm 50K trên đơn hàng | 1 | 3 | Thuộc TH 1  nhưng số suất tối đa 3 suất đã là số suất tối đa cho đơn hàng mua  Số suất tối đa = 3 | | 4 | Mua 5A & 5C tặng 1B & 1A | - | - | Thuộc TH2 → loại KM này khỏi danh sách đề xuất | | 5 | Mua 4C tặng 2A & 1B | 2 | 2 | Thuộc TH 3 → lấy KM với tối đa số suất là 2 | | 6 | Mua 3A tặng 2B & 1C | 3 | 3 | Thuộc TH 3 → lấy KM với tối đa số suất là 3 | |  |
| 3 | Màn hình Áp khuyến mãi sau khi đã giảm trừ | Hiển thị màn hình khuyến mãi sau khi giảm trừ (được Promotion trả về) được hiển thị theo quy tắc "Hiển thị số suất giảm trừ theo ưu tiên khuyến mãi "   1. **Danh sách khuyến mãi Ưu tiên**    * Hiển thị khuyến mãi ưu tiên nhận được từ Promotion    * Disabled đi các điều kiện chọn, số lượng 2. **Danh sách khuyến mãi bình thường**    * Hiển thị danh sách Khuyến mãi bình thường nhận được từ Promotion    * Disabled đi các lựa chọn, nhập số suất, số lượng & sắp xếp các ưu tiên 3. Nút "Lưu"    * Nút "Lưu" được enable sau khi người dùng tick checkbox "Áp dụng khuyến mãi trên đơn hàng"    * Khi bấm lưu Hệ thống kiểm tra tồn kho khả dụng với các SKU nhận thưởng. Nếu số lượng tặng SKU không đủ tồn kho → báo lỗi "Số lượng tồn kho không đủ để đáp ứng khuyến mãi trên"    * Nếu các SKU nhận thưởng đều đủ tồn kho → Thực hiện bước (4) 4. Nút "Đóng"    * Khi người dùng click chọn nút "Đóng" → hệ thống thực hiện Đóng **Dialog Áp khuyến mãi**và đưa người dùng trở về bước (1) 5. Nút checkbox "Áp dụng khuyến mãi cho đơn hàng"  * + Khi người dùng tắt checkbox "Áp khuyến mãi" → Quay về Màn hình Áp khuyến mãi khả dụng (giữ nguyên màn hình người dùng đã điều chỉnh số suất, số lượng, độ ưu tiên)   **[Nguyên tắc hiển thị khuyến mãi được mô tả ở đây](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53030026#Sellin%5BHO%5D%C3%81pkhuy%E1%BA%BFnm%C3%A3icho%C4%91%C6%A1nh%C3%A0ngb%C3%A1nNPP-M%C3%B4t%E1%BA%A3h%C3%ACnhth%E1%BB%A9ctr%E1%BA%A3khuy%E1%BA%BFnm%C3%A3i)** |  |
| 4 | Màn hình đơn hàng | | UI | Mô tả | | --- | --- | | Nút "Bỏ khuyến mãi" | Hiển thị Màn hình xác nhận     * Nút "Xác nhận" → Hệ thống clear danh sách khuyến mãi * Nút "Hủy" → Đóng màn hình xác nhận và tiếp tục luồng | | Nút "Áp khuyến mãi" | Hiển thị màn hình **Áp khuyến mãi khả dụng (được mô tả ở trên)** với dữ liệu khuyến mãi được giữ nguyên cập nhật trước đó | | Section khuyến mãi | Người dùng không được chỉnh sửa bất kỳ thông tin gì ở chương trình khuyến mãi | | Nút "Đóng" | Đóng màn hình Chỉnh sửa đơn hàng và không thực hiện cập nhật gì | | Nút Lưu | Nếu đơn hàng chưa thêm mới khuyến mãi trước đó, khi bấm "Lưu"   1. Hệ thống lấy danh sách khuyến mãi khả dụng với thông tin đơn hàng từ Promotion 2. Nếu tổng số khuyến mãi >0 → hiển thị màn hình thông báo       1. Chọn "Xác nhận" → hệ thống đóng màn hình thông báo và không thêm mới khuyến mãi    2. Chọn "Hủy" → hệ thống đóng màn hình thông báo | |  |
| 5 | Nghiệp vụ Chỉnh sửa khuyến mãi | Nút "Lưu" → hệ thống thực hiện:   1. **Luồng nghiệp vụ Revert khuyến mãi**với các khuyến mãi đã thêm mới trước đó 2. **Luồng nghiệp vụ Áp dụng khuyến mãi** với các khuyến mãi   Nút "Đóng" : Đóng Dialog "Thêm mới/Chỉnh sửa đơn hàng" và hủy luồng Thêm mới khuyến mãi đơn hàng  Lưu ý: Khi người dùng chọn "Áp khuyến mãi" → Quay về màn hình **Áp khuyến mãi khả dụng** (giữ nguyên view người dùng đã điều chỉnh số suất, số lượng, độ ưu tiên)  Trường hợp người dùng bấm "Lưu" mà chưa thực hiện áp khuyến mãi, hệ thống kiểm tra & xử lý   1. Hệ thống lấy tất cả khuyến mãi khả dụng với thông tin Đơn hàng (danh sách sản phẩm, ngày đặt hàng, kênh bán hàng) từ **Promotion** 2. Nếu tổng số khuyến mãi = 0 → Đóng màn hình Đơn hàng & thực hiện quy trình Tạo mới/Chỉnh sửa đơn hàng 3. Nếu tổng khuyến mãi > 0 → Hiển thị Confirmation Dialog    1. Bấm "Xác nhận" → thực hiện bước (2)    2. Bấm "Hủy" → Đóng Confirmation Dialog và tiếp tục quy trình Chỉnh sửa khuyến mãi | **Luồng nghiệp vụ Apply khuyến mãi**  trueÁp dụng khuyến mãi860Z8gU41kWnRXbEiaF9 11false500autotop53033595true  **Luồng nghiệp vụ Revert khuyến mãi**  trueRevert khuyến mãiTpk-GR07ukutRcq4HEhl 11false500autotop53033595true |

## **Revert khuyến mãi khi hủy & xóa đơn hàng**

trueRevert khuyến mãiTpk-GR07ukutRcq4HEhl 11false1200autotop53033595true

|  |  |  |
| --- | --- | --- |
| **No** | **Luồng** | **Mô tả** |
| 1 | Hủy Đơn hàng CTKM  Xóa Đơn hàng CTKM | Khi người dùng hủy đơn hàng thành công → hệ thống thực hiện :   1. Revert các khuyến mãi ứng với đơn hàng qua **Promotion**    1. Nếu kết quả thành công       1. Thực hiện Xóa khuyến mãi đã áp dụng với đơn hàng       2. Cập nhật tồn kho khuyến mãi (Revert lại số lượng booked & available)       3. Thực hiện luồng Duyệt / Hủy đơn hàng đã có    2. Nếu kết quả thất bại       1. Hiển thị toast error nội dung lỗi       2. Kết thúc luồng Revert khuyến mãi |

## **Xuất kho đơn hàng có sản phẩm khuyến mãi**

|  |  |  |  |
| --- | --- | --- | --- |
| **No** | **Step** | **Mô tả chi tiết** | **UI** |
| # | Xem chi tiết đơn khuyến mãi | 1. Nếu tại 1 đơn hàng sell-out, các CTKM có hình thức trả KM bao gồm sản phẩm hoặc nhóm sản phẩm, thì màn hình Tạo mới/ Chỉnh sửa phiếu xuất kho có đơn hàng tương ứng sẽ bổ sung các thông tin **Danh sách khuyến mãi** gồm các thông tin sau:  * Mã SKU * Tên sản phẩm * Số lượng * Đơn vị tính * Kho * Thông tin lô: bắt buộc nhập, Click vào nút → hiển thị popup bao gồm các lô có trong kho & kênh bán hàng được chọn   + Số lượng:     - Autofill số lượng sản phẩm của lô     - ~~Nếu phiếu xuất kho **có nhiều đơn hàng**, không cho phép chỉnh sửa~~     - ~~Nếu phiếu xuất kho **có 1 đơn hàng**, thì cho phép chỉnh sửa trường*"Số lượng"*, chỉ được nhập bé hơn hoặc bằng Tồn kho~~     - Không cho phép chỉnh sửa thông tin lô hàng khuyến mãi   + Tồn kho : Được tính tương tự **[Quy tắc tính tồn kho tại Thông tin lô](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445066#id-%5BNPP%5DXu%E1%BA%A5tkho-2.Quyt%E1%BA%AFct%C3%ADnhT%E1%BB%93nkhot%E1%BA%A1ith%C3%B4ngtinl%C3%B4tinhtonkho)**   + Số lô   + Hạn sử dụng   + Nút Đóng   + Nút Hoàn tất: Click vào nút → hệ thống thực hiện kiểm tra     - Tổng số lượng được nhập từ các dòng lô phải bằng số lượng sản phẩm được nhập ở màn hình danh sách sản phẩm, nếu không báo lỗi *"Tổng* *số lượng sản phẩm phải bằng số lượng sản phẩm ngoài danh sách."*     - Nếu số lượng lớn hơn tồn kho, báo lỗi: *"Số lượng không được lớn hơn Tồn kho"*   2. Để hiển thị thông tin sản phẩm khuyến mãi, hệ thống thực hiện kiểm tra thông tin các sản phẩm trả trên các CTKM và cộng dồn số lượng sản phẩm nếu có cùng kho, cùng sản phẩm và cùng thông tin lô. Ví dụ:   * Đơn hàng 1 có danh sách sản phẩm trả theo chương trình khuyến mãi  |  |  |  |  |  |  |  |  |  | | --- | --- | --- | --- | --- | --- | --- | --- | --- | | **Tên CTKM** | **Tên sản phẩm trả** | **Đơn vị tính** | **Số lượng** | **Thông tin lô** | | | | **Kho** | | **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** | | Scheme 1 | Sản phẩm B | gói | 10 | 10 | 15 | LO11 | 1/1/2028 | Kho KM | | Sản phẩm A | lon | 10 | 7 | 20 | LO01 | 1/1/2028 | | 3 | 10 | LO02 | 1/1/2029 | | Scheme 2 | Sản phẩm A | lon | 7 | 7 | 15 | LO01 | 1/1/2028 | Kho trưng bày | | Sản phẩm B | gói | 4 | 4 | 10 | LO11 | 1/1/2028 | | Scheme 3 | Sản phẩm A | lon | 5 | 5 | 20 | LO01 | 1/1/2028 | Kho KM |  * Đơn hàng 2 có danh sách sản phẩm trả theo chương trình khuyến mãi  |  |  |  |  |  |  |  |  |  | | --- | --- | --- | --- | --- | --- | --- | --- | --- | | **Tên CTKM** | **Tên sản phẩm trả** | **Đơn vị tính** | **Số lượng** | **Thông tin lô** | | | | **Kho** | | **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** | | Scheme 3 | Sản phẩm A | lon | 3 | 3 | 10 | LO02 | 1/1/2029 | Kho KM |   → Phiếu xuất kho cho đơn hàng 1 và đơn hàng 2 có danh sách khuyến mãi như sau:   |  |  |  |  |  |  |  |  |  | | --- | --- | --- | --- | --- | --- | --- | --- | --- | | **Mã SKU** | **Tên sản phẩm trả** | **Số lượng** | **Đơn vị tính** | **Kho** | **Thông tin lô** | | | | | **Số lượng** | **Tồn kho** | **Số lô** | **Hạn sử dụng** | | SP001 | Sản phẩm A | 18 | lon | Kho KM | 12 | ... | LO01 | 1/1/2028 | | 6 | ... | LO02 | 1/1/2029 | | SP002 | Sản phẩm B | 10 | gói | Kho KM | 10 | ... | LO11 | 1/1/2028 | | SP001 | Sản phẩm A | 7 | lon | Kho trưng bày | 7 | ... | LO01 | 1/1/2028 | | SP002 | Sản phẩm B | 4 | gói | Kho trưng bày | 4 | ... | LO11 | 1/1/2028 |   3. Tại màn hình Xem chi tiết phiếu xuất kho, bổ sung các thông tin **Danh sách khuyến mãi** như mục 1. nhưng không được chỉnh sửa.  4. Sau khi nhấn "Lưu" phiếu xuất kho, hệ thống thực hiện cập nhật tồn kho của các sản phẩm có trong Danh sách khuyến mãi theo **[Quy tắc cập nhật tồn kho sau khi tạo phiếu xuất kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445066#id-%5BNPP%5DXu%E1%BA%A5tkho-4.Quyt%E1%BA%AFcc%E1%BA%ADpnh%E1%BA%ADtt%E1%BB%93nkhosaukhit%E1%BA%A1ophi%E1%BA%BFuxu%E1%BA%A5tkho)**  5. Sau khi duyệt phiếu xuất kho, hệ thống thực hiện cập nhật tồn kho của các sản phẩm có trong Danh sách khuyến mãi theo **[Quy tắc cập nhật tồn kho sau khi duyệt phiếu xuất kho](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445066#id-%5BNPP%5DXu%E1%BA%A5tkho-5.Quyt%E1%BA%AFcc%E1%BA%ADpnh%E1%BA%ADtt%E1%BB%93nkhosaukhiduy%E1%BB%87tphi%E1%BA%BFuxu%E1%BA%A5tkho)** | Tạo mới phiếu xuất kho      Xem chi tiết phiếu xuất kho |

# Business Rules

## Quy tắc tính số suất tối đa tồn kho

Dựa vào khuyến mãi được Promotion trả về. Xét khuyến mãi có hàng tặng là Sản phẩm hoặc nhóm sản phẩm

Xét từng sản phẩm:

1. Tính tồn kho đáp ứng dựa vào (Ngày đặt hàng, Kho, Kênh bán), lấy tồn kho có sẵn của danh sách lô có ngày nhập hàng trước ngày đặt hàng
2. Dựa vào điều kiện mua trong CTKM, tính số suất tối đa tồn kho theo quy tắc bội số. So sánh số suất tối đa tồn kho với số suất tối đa từ Promotion trả về
   1. Nếu số suất tối đa tồn kho >= số suất tối đa từ Promotion → Lấy số suất tối đa từ Promotion
   2. Ngược lại, lấy số suất tối đa tồn kho

Xem ví dụ dưới đây :

Giả sử thông tin nhập hàng kho khuyến mãi đến ngày 22/12/2024:

|  |  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh** | **Sản phẩm** | **Đơn vị cơ bản** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông tin lô** | | | | | |
| **Ngày nhập hàng** | **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Kho khuyến mãi | GT | A | Ly | 10 | 40 | 50 | 10/12/2024 | L001 | 02/12/2025 | 4 | 40 | 44 |
| 12/12/2024 | L002 | 02/12/2026 | 6 | 0 | 6 |
| B | Lon | 30 | 20 | 50 | 16/12/2024 | L003 | 02/12/2025 | 10 | 10 | 20 |
| 20/12/2024 | L004 | 02/12/2026 | 10 | 10 | 20 |
| 23/12/2024 | L005 | 02/12/2026 | 10 | 0 | 10 |

Thông tin khuyến mãi được phản hồi:

* Ngày đặt hàng: 22/12/2024
* Kho : Kho khuyến mãi
* Kênh: GT
* Danh sách khuyến mãi
* Đơn hàng mua: 50A & 50C

|  |  |  |  |
| --- | --- | --- | --- |
| **Khuyến mãi** | **Điều kiện mua** | **Trả thưởng** | **Số suất tối đa** |
| Mua 5A được tặng 1 sản phẩm cùng loại | SP mua >= 5A | 1A | 10 |
| Mua 10C tặng 2A **và** 2B | SP mua >= 10C | 2A AND 2B | 5 |
| Mua ĐH trên 1 triệu giảm 100K | ĐH > 1,000,000 VND | Giảm 100K | 1 |
| Mua 10A & 5C tặng 5A **hoặc** 3B | SP mua >= 10A AND  SP mua >= 10C | 5A OR 3B | 5 |
| Mua 40A & 40C tặng 40 trong nhóm SP [A,B] | SP mua >= 40A AND  SP mua >= 40C | 40 trong nhóm [A,B] | 1 |

Bước 1: Tính tồn kho đáp ứng dựa vào (Ngày đặt hàng, Kho, Kênh bán), lấy tồn kho có sẵn của danh sách lô có ngày nhập hàng trước ngày đặt hàng

**Chỉ lấy danh sách lô nhập hàng 10/12 - 20/12**

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Kho** | **Kênh** | **Sản phẩm** | **Đơn vị cơ bản** | **Có sẵn** | **Tạm giữ** | **Tồn kho** | **Thông tin lô** | | | | |
| **Số lô** | **Ngày hết hạn** | **Có sẵn** | **Tạm giữ** | **Tồn kho** |
| Kho khuyến mãi | GT | A | Ly | 10 | 40 | 50 | L001 | 02/12/2025 | 4 | 40 | 44 |
| L002 | 02/12/2026 | 6 | 0 | 6 |
| B | Lon | 20 | 20 | 40 | L003 | 02/12/2025 | 10 | 10 | 20 |
| L004 | 02/12/2026 | 10 | 10 | 20 |

Bước 2: Dựa vào điều kiện mua trong CTKM, tính số suất tối đa tồn kho theo quy tắc bội số. So sánh số suất tối đa tồn kho với số suất tối đa từ Promotion trả về

* Nếu số suất tối đa tồn kho >= số suất tối đa từ Promotion → Lấy số suất tối đa từ Promotion
* Ngược lại, lấy số suất tối đa tồn kho

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| **Khuyến mãi** | **Điều kiện mua** | **Trả thưởng** | **Số suất tối đa từ Promotion** | **Số suất tối đa tồn kho** | **Mô tả** |
| Mua 5A được tặng 1 sản phẩm cùng loại | SP mua >= 5A | 1A | 10 | 10 | Số suất tối đa = 10 |
| Mua 10C tặng 2A **và** 2B | SP mua >= 10C | 2A AND 2B | 3 | 5 | Số suất tối đa = 3 |
| Mua ĐH trên 1 triệu giảm 100K | ĐH > 1,000,000 VND | Giảm 100K | 1 | 1 | Số suất tối đa = 1 |
| Mua 10A & 5C tặng 5A **hoặc** 3B | SP mua >= 10A AND  SP mua >= 10C | 5A OR 3B | 5 | 10 | Số suất tối đa = 5 |
| Mua 40A & 40C tặng 40 trong nhóm SP [A,B] | SP mua >= 40A AND  SP mua >= 40C | 40 trong nhóm [A,B] | 1 | 0 | Số suất tối đa = 0  Tổng tồn kho của SP A + B = 30 < 40 → Số suất tối đa tồn kho = 0 |