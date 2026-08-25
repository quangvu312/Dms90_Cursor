true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1262  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1263  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1264  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1265 |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

**BACKLOG**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |

# Requirement

Chức năng áp khuyến mãi cho đơn PO bao gồm:

* Thêm mới khuyến mãi Purchase Order
* Chỉnh sửa khuyến mãi Purchase Order
* Hủy khuyến mãi khi NPP Hủy hoặc Xóa Purchase Order
* Xem chi tiết khuyến mãi Purchase Order
* Tự động thêm mới khuyến mãi cho đơn Sell in khi duyệt đơn Purchase Order

## Workflow

trueWorkflow Áp dụng khuyến mãi cho Purchase OrderFYWOCLz3qL-IsgpuvF3N 1false1200b83a19a8e69bfc50412828c6032524ff11bb029dautotoptrue22533

## Thêm mới khuyến mãi Purchase Order

**Wireframe**

**Mô tả chi tiết**

Đường dẫn: Đơn hàng bán NPP | Click chọn 1 đơn hàng có khuyến mãi

| No | Màn hình | Mô tả | UI & Workflow |
| --- | --- | --- | --- |
| 1 | Màn hình đơn hàng (Chưa áp khuyến mãi) | Mô tả trường thông tin Màn hình đơn hàng (chưa áp dụng khuyến mãi)   | UI | Mô tả | | --- | --- | | Nút "Áp khuyến mãi" | Nếu người dùng chưa chọn sản phẩm, Ngày đặt hàng, Nhà phân phối, Kho → Disabled nút "Áp khuyến mãi". Ngược lại, enabled nút "Áp khuyến mãi"  **Khi bấm nút "Áp khuyến mãi" , hệ thống tiếp tục thực hiện (bước 2)** | | Nút "Đóng" | Thực hiện Đóng màn hình Thêm mới đơn hàng và kết thúc luồng Áp khuyến mãi | | Nút "Lưu" | Nếu người dùng chưa thực hiện "Áp khuyến mãi", hệ thống thực hiện:   1. Lấy danh sách khuyến mãi khả dụng với tối đa số suất từ Promotion dựa vào thông tin Đơn hàng    1. Nếu đơn hàng không có khuyến mãi nào → Thực hiện luồng Thêm mới/Chỉnh sửa đơn hàng    2. Ngược lại, hiển thị màn hình Xác nhận       1. Chọn "Xác nhận" → thực hiện luồng Thêm mới/Chỉnh sửa đơn hàng mà không áp dụng khuyến mãi       2. Chọn "Đóng" → Đóng màn hình xác nhận và tiếp tục nghiệp vụ Thêm mới/Chỉnh sửa đơn hàng | |  |
| 2 | Lấy danh sách khuyến mãi khả dụng | Dựa vào thông tin đơn hàng, hệ thống lấy danh sách **khuyến mãi khả dụng tối đa số suất**   * Ngày đặt hàng * Kho * Kênh bán hàng * Danh sách sản phẩm   + SKU, Tên sản phẩm   + Đơn vị tính   + Số lượng   + Đơn giá   + Thuế   + Thành tiền sau thuế   + Thành tiền trước thuế * Người bán: HO * Người mua: NPP * Loại khuyến mãi : Sell in   [Xem chi tiết tài liệu API](https://eco-dms-promotion-api-dev.finviet.com.vn/#/operations/IntegrationController_ListPromotions_v1)  Nếu không có khuyến mãi khả dụng → hiển thị Toast info "Không có khuyến mãi phù hợp" → Tiếp tục luồng Thêm mới đơn hàng | **N/A** |
| 3 | Kiểm tra khuyến mãi tự động áp dụng | 1. Dựa vào danh sách khuyến mãi → Hệ thống kiểm tra trường thông tin "Auto Apply"    1. **Nếu false, Tiếp tục qua (bước 4)**    2. **Nếu true, tiếp tục bước (7)** | N/A |
| 4 | Màn hình khuyến mãi khả dụng | Mô tả màn hình khuyến mãi khả dụng   | UI | Mô tả | | --- | --- | | Table khuyến mãi ưu tiên | Gồm các khuyến mãi có loại chương trình "Ontop"  **Mô tả UI các loại Khuyến mãi trả thưởng**  Người dùng có thể:   * Nhập số lượng nhận thưởng với các loại khuyến mãi trả thưởng là danh sách sản phẩm * Click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình **Thể lệ chương trình khuyến mãi** | | Table khuyến mãi bình thường | Gồm các khuyến mãi có loại chương trình "Normal"  **Mô tả UI Khuyến mãi trả thưởng**  Người dùng có thể:   * Điều chỉnh số suất * Nhập số lượng nhận thưởng với các loại khuyến mãi trả thưởng là danh sách sản phẩm * Có thể kéo thả độ ưu tiên khuyến mãi * Click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình **Thể lệ chương trình khuyến mãi** | | Nút "Lưu" | Nút "Lưu" sẽ bị Disabled khi checkbox "Áp dụng khuyến mãi trên đơn hàng" đang là un-checked | | Nút "Đóng" | * Khi người dùng click chọn nút "Đóng" → hệ thống thực hiện Đóng **Dialog Áp khuyến mãi**và đưa người dùng trở về màn hình **Thêm mới/Chỉnh sửa Đơn hàng** | | Checkbox "Áp dụng khuyến mãi trên đơn hàng" | Giá trị mặc định là Un-checked  Khi checkbox chuyển qua trạng thái "Checked" → hệ thống thực hiện bước (5) | |  |
| 5 | Lấy khuyến mãi  áp dụng sau giảm trừ | Sau khi người dùng điều chỉnh khuyến mãi → Check vào checkbox "Áp dụng khuyến mãi đơn hàng" → hệ thống thực hiện **"Lấy khuyến mãi áp dụng quy tắc giảm trừ"**  [Thông tin chi tiết tài liệu API](https://eco-dms-promotion-api-dev.finviet.com.vn/#/operations/IntegrationController_ListPromotions_v1) | **Workflow lấy khuyến mãi sau giảm trừ**  trueÁp dụng khuyến mãi sau giảm trừ - Sell inp2evGmIt5fQp-UJ0-9dN 11false500autotop53033595true |
| 6 | Màn hình Khuyến mãi đã giảm trừ | Mô tả màn hình Khuyến mãi đã giảm trừ ở bước (5)   | UI | Mô tả | | --- | --- | | Table khuyến mãi ưu tiên | Gồm các khuyến mãi có loại chương trình "Ontop"  **Mô tả UI các loại Khuyến mãi trả thưởng**  Người dùng không được cập nhật bất kỳ thông tin nào   Có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình **Thể lệ chương trình khuyến mãi**  Nếu không có khuyến mãi nào, ẩn luôn section này | | Table khuyến mãi bình thường | Gồm các khuyến mãi có loại chương trình "Ontop"  **Mô tả UI các loại Khuyến mãi trả thưởng**  Người dùng không được cập nhật bất kỳ thông tin nào   Có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình **Thể lệ chương trình khuyến mãi**  Nếu không có khuyến mãi nào, ẩn luôn section này | | Checkbox "Áp dụng khuyến mãi trên đơn hàng" | Giá trị mặc định là Un-checked  Khi checkbox chuyển qua trạng thái "Checked" → hệ thống quay lại bước (4) - Màn hình khuyến mãi khả dụng | | Nút "Đóng" | Khi người dùng click chọn nút "Đóng" → hệ thống thực hiện Đóng **Dialog Áp khuyến mãi**và đưa người dùng trở về màn hình **Thêm mới/Chỉnh sửa Đơn hàng** | | Nút "Lưu" | Nút "Lưu" được enable sau khi checkbox "Áp dụng khuyến mãi trên đơn hàng" đang là checked  Khi nhấn "Lưu" → hệ thống đóng màn hình Áp khuyến mãi và hiển thị danh sách khuyến mãi ưu tiên & khuyến mãi bình thường trong màn hình đơn hàng (tiếp tục bước 7) | |  |
| 7 | Màn hình đơn hàng đang áp dụng khuyến mãi | Mô tả trường thông tin Màn hình đơn hàng (chưa áp dụng khuyến mãi)   | UI | Mô tả | | --- | --- | | Nút "Áp khuyến mãi" | Khi bấm nút "Áp khuyến mãi" → **Quay lại bước 6 - Màn hình Khuyến mãi đã giảm trừ** | | Nút "Bỏ khuyến mãi" | Khi bấm nút "Bỏ khuyến mãi" → Hiển thị màn hình xác nhận "Bỏ khuyến mãi"   * Nếu chọn "Xác nhận" → hệ thống thực hiện Clear danh sách khuyến mãi" * Nếu chọn "Hủy" → Tiếp tục luồng Thêm mới khuyến mãi đơn hàng | | Nút "Đóng" | Thực hiện Đóng màn hình Thêm mới đơn hàng và kết thúc luồng Áp khuyến mãi | | Nút "Lưu" | **Nếu người dùng chưa thực hiện "Áp khuyến mãi"**, hệ thống hiển thị popup "Lưu đơn và không áp khuyến mãi"   1. 1. Chọn "Xác nhận" → THực hiện Thêm mới/Chỉnh sửa đơn hàng & đóng popup Thêm khuyến mãi    2. Chọn "Đóng" → Đóng màn hình xác nhận và tiếp tục nghiệp vụ Thêm mới/Chỉnh sửa đơn hàng   Nếu người dùng đã áp khuyến mãi, Hệ thống thực hiện **luồng nghiệp vụ Áp dụng khuyến mãi**   1. Gọi phương thức "Apply Promotion"    * Thất bại → hệ thống hiển thị lỗi tương ứng được Promotion trả về    * Thành công       + **Thêm mới/Chỉnh sửa đơn hàng**      + **Lưu khuyến mãi ứng với đơn hàng** 2. Nút "Đóng" → Đóng Dialog "Thêm mới/Chỉnh sửa đơn hàng" và hủy luồng Thêm mới khuyến mãi đơn hàng. | | **Luồng nghiệp vụ Áp dụng khuyến mãi** trueÁp dụng khuyến mãi đơn hàng - Sell inrzV2VvE3TKfmOJ6q-myL 11false500autotop53033595true |

## Xem chi tiết khuyến mãi đơn hàng PO

Đường dẫn: Đơn hàng bán NPP | Click chọn 1 đơn hàng có khuyến mãi

**Mô tả chi tiết**

| Màn hình | Mô tả | UI |
| --- | --- | --- |
| Xem chi tiết đơn hàng | Hiển thị danh sách **khuyến mãi ưu tiên** và **khuyến mãi bình thường** bao gồm các thông tin sau:  Mỗi CTKM - hình thức khuyến mãi là 1 dòng. Nếu CTKM là tặng X trong nhóm sản phẩm → Mỗi SKU tách xuống 1 dòng (chỉ hiển thị các SKU được lựa chọn tặng). Mô tả UI:   | Tên CTKM | Hiển thị tên CTKM | | --- | --- | | Thể lệ chương trình | Click vào icon "i" → Hệ thống popup Dialog Mô tả thể lệ chương trình | | Mã SKU | Hiển thị Mã SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Tên SKU | Hiển thị tên SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Số lượng | Hiển thị số lượng SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Đơn vị | Hiển thị tên đơn vị của SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Khuyến mãi | Hiển thị giá trị tiền khuyến mãi  Nếu CTKM là Tặng % → Hiển thị thành tiền dựa trên chiết khấu |   Nếu không có khuyến mãi nào, ẩn luôn section này |  |

## Chỉnh sửa khuyến mãi đơn hàng PO

**Mô tả chi tiết**

Đường dẫn: Đơn hàng bán NPP | Click chọn 1 đơn hàng có khuyến mãi

| No | Màn hình | Mô tả | UI & Workflow |
| --- | --- | --- | --- |
| 1 | Cập nhật đơn hàng đã áp khuyến mãi | Mô tả màn hình Cập nhật đơn hàng đã áp dụng khuyến mãi   | UI | Mô tả | | --- | --- | | Table khuyến mãi ưu tiên & Khuyến mãi bình thường | | UI | Mô tả | | --- | --- | | Tên CTKM | Hiển thị tên CTKM | | Thể lệ chương trình | Click vào icon "i" → Hệ thống popup Dialog Mô tả thể lệ chương trình | | Mã SKU | Hiển thị Mã SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Tên SKU | Hiển thị tên SKU  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Số lượng | Hiển thị số lượng SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Đơn vị | Hiển thị tên đơn vị của SP tặng  Nếu CTKM tặng tiền & % , Hiển thị "-" | | Khuyến mãi | Hiển thị giá trị tiền khuyến mãi  Nếu CTKM là Tặng % → Hiển thị thành tiền dựa trên chiết khấu | | Tồn kho | Hiển thị tồn kho dựa trên đơn vị của SKU  Nếu CTKM tặng % hoặc tiền, hiển thị "-" |   Nếu không có khuyến mãi nào, ẩn luôn section này | | Table khuyến mãi bình thường | Tương tự với Table khuyến mãi Ưu tiên | | Nút "Bỏ khuyến mãi" | Khi chọn "Bỏ khuyến mãi" → hệ thống hiển thị màn hình xác nhận:   1. Chọn "Xác nhận" → hệ thống clear danh sách khuyến mãi | | Nút "Lưu" | Khi nhấn Lưu, hệ thống thực hiện bước (7) | | Nút "Đóng" | Khi nhấn Đóng, hệ thống đóng màn hình Cập nhật đơn hàng | | Nút "Áp khuyến mãi" | Khi nhấn "Áp khuyến mãi → thực hiện bước (2) | |  |
| 2 | Lấy khuyến mãi khả dụng tối đa số suất khi chỉnh sửa khuyến mãi | Hiển thị danh sách khuyến mãi ưu tiên & khuyến mãi bình thường theo quy tắc: **Gộp khuyến mãi khả dụng tại thời điểm chỉnh sửa và khuyến mãi đơn hàng giảm trừ lần gần nhất**  Quy tắc gồm 3 bước:   * Bước 1: Lấy danh sách khuyến mãi khả dụng mới từ Promotion (1) * Bước 2: Lấy danh sách khuyến mãi ở đơn hàng trước đó từ DMS (2) * Bước 3: Từ 2 danh sách khuyến mãi (1) & (2), thực hiện gộp khuyến mãi và hiển thị theo quy tắc    + TH 1: Các KM đã tồn tại ở cả 2 danh sách (1), (2)       - Số suất tối đa       * Nếu số suất tối đa trong (2) < số suất tối đa thực tế (TH khuyến mãi trên đã không còn đủ số suất do ngân sách) → Số suất tối đa = số suất còn lại + số suất tạm giữ của đơn hàng       * Ngược lại lấy số suất tối đa (2)   + TH 2: Các KM tồn tại ở (1) & không tồn tại ở (2) → Không lấy KM đó   + TH 3 :Các KM không tồn tại ở (1) & tồn tại ở (2) → Lấy KM đó với tối đa số suất   Xem ví dụ dưới đây để hiểu rõ hơn quy tắc  Đơn hàng trên   | Sản phẩm | Đơn giá | Số lượng | Tổng giá trị đơn hàng | | --- | --- | --- | --- | | Sản phẩm A | 100,000 | 10 | 3,500,000 VND | | Sản phẩm B | 200,000 | 5 | | Sản phẩm C | 150,000 | 10 |   Ngày 1/10, đơn hàng trên được thêm mới khuyến mãi    | No | Khuyến mãi | Số suất tham gia | Sản phẩm tham gia | Sản phẩm trả thưởng | Sản phẩm tham gia còn lại | | --- | --- | --- | --- | --- | --- | | 1 | Mua 3A & 2B tặng 3C  (KM không bội số) | 1 | 3A  2B | 3C | 7A  3B  10C | | 2 | Mua 2A tặng 1A cùng loại | 1 | 2A | 1A | 5A  5B  10C | | 3 | Mua 3C giảm 50K trên đơn hàng | 1 | 3C | 50K | 5A  5B  7C | | 4 | Mua 5A & 5C tặng 1B & 1A | 1 | 5A  5C | 1A  1B | 0A  0B  2C |   Ngày 2/10, thực hiện chỉnh sửa khuyến mãi. Lúc này hệ thống lấy danh sách khuyến mãi mới ứng với thông tin đơn hàng trên   | No | Khuyến mãi | Số suất tối đa | Sản phẩm tham gia | Sản phẩm trả thưởng | | --- | --- | --- | --- | --- | | 1 | Mua 3A & 2B tặng 3C | 1 | 3A  2B | 3C | | 2 | Mua 2A tặng 1A cùng loại | 2 | 4A | 2A | | 3 | Mua 3C giảm 50K trên đơn hàng | 3 | 9C | 150K | | 5 | Mua 4C tặng 2A & 1B | 2 | 8C | 4A  2B | | 6 | Mua 3A tặng 2B & 1C | 3 | 9A | 4B  1C |   Từ 2 danh sách khuyến mãi (1) & (2), thực hiện gộp khuyến mãi và hiển thị theo quy tắc    | No | Khuyến mãi | Số suất tối đa | Giải thích | | --- | --- | --- | --- | | 1 | Mua 3A & 2B tặng 3C | 2 | Thuộc TH 1  Số suất tối đa = tối đa + tạm giữ = 1 + 1 = 2 | | 2 | Mua 2A tặng 1A cùng loại | 3 | Thuộc TH 1  Số suất tối đa = tối đa + tạm giữ = 2 + 1 = 3 | | 3 | Mua 3C giảm 50K trên đơn hàng | 3 | Thuộc TH 1  nhưng số suất tối đa 3 suất đã là số suất tối đa cho đơn hàng mua  Số suất tối đa = 3 | | 5 | Mua 4C tặng 2A & 1B | 2 | Thuộc TH 2 → lấy KM với tối đa số suất là 2 | | 6 | Mua 3A tặng 2B & 1C | 2 | Thuộc TH 2 → lấy KM với tối đa số suất là 2 | | **Workflow lấy khuyến mãi khả dụng với tối đa số suất khi chỉnh sửa khuyến mãi**  trueChỉnh sửa khuyến mãi - Sell in1tEkCirJumStyMzrsLHT 11false500autotop53033595true |
| 3 | Màn hình Khuyến mãi khả dụng | Sau khi đã có danh sách khuyến mãi khả dụng mới → dựa vào loại khuyến mãi, hiển thị 2 danh sách **Khuyến mãi Ưu tiên & Khuyến mãi bình thường**  **[Nguyên tắc hiển thị khuyến mãi được mô tả ở đây](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53030026#Sellin%5BHO%5D%C3%81pkhuy%E1%BA%BFnm%C3%A3icho%C4%91%C6%A1nh%C3%A0ngb%C3%A1nNPP-M%C3%B4t%E1%BA%A3h%C3%ACnhth%E1%BB%A9ctr%E1%BA%A3khuy%E1%BA%BFnm%C3%A3i)**  Người dùng thực hiện cập nhật số suất, lựa chọn điều kiện nhận khuyến mãi  Nút "Đóng" → hệ thống đóng màn hình Áp khuyến mãi" và dừng luồng Chỉnh sửa khuyến mãi"  Nút "Áp dụng khuyến mãi trên đơn hàng" bị disabled. Người dùng tick vào, hệ thống thực hiện hiển thị **Màn hình Áp khuyến mãi sau khi giảm trừ**  Nút "Lưu" bị disabled khi checkbox "Áp khuyến mãi trên đơn hàng" là un-checked   | UI | Mô tả | | --- | --- | | Table khuyến mãi ưu tiên | Gồm các khuyến mãi có loại chương trình "Ontop"  **Mô tả UI các loại Khuyến mãi trả thưởng**  Người dùng có thể:   * Nhập số lượng nhận thưởng với các loại khuyến mãi trả thưởng là danh sách sản phẩm * Click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình **Thể lệ chương trình khuyến mãi**   Nếu không có khuyến mãi nào, ẩn luôn section này | | Table khuyến mãi bình thường | Gồm các khuyến mãi có loại chương trình "Normal"  **Mô tả UI Khuyến mãi trả thưởng**  Người dùng có thể:   * Điều chỉnh số suất * Nhập số lượng nhận thưởng với các loại khuyến mãi trả thưởng là danh sách sản phẩm * Có thể kéo thả độ ưu tiên khuyến mãi * Click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình **Thể lệ chương trình khuyến mãi**   Nếu không có khuyến mãi nào, ẩn luôn section này | | Nút "Lưu" | Nút "Lưu" sẽ bị Disabled khi checkbox "Áp dụng khuyến mãi trên đơn hàng" đang là un-checked | | Nút "Đóng" | * Khi người dùng click chọn nút "Đóng" → hệ thống thực hiện Đóng **Dialog Áp khuyến mãi**và đưa người dùng trở về màn hình **Thêm mới/Chỉnh sửa Đơn hàng** | | Checkbox "Áp dụng khuyến mãi trên đơn hàng" | Giá trị mặc định là Un-checked  Khi checkbox chuyển qua trạng thái "Checked" → hệ thống thực hiện bước (4) | |  |
| 4 | Lấy khuyến mãi áp dụng sau giảm trừ | Sau khi người dùng điều chỉnh khuyến mãi → Check vào checkbox "Áp dụng khuyến mãi đơn hàng" → hệ thống thực hiện **"Lấy khuyến mãi áp dụng quy tắc giảm trừ"**  [Thông tin chi tiết tài liệu API](https://eco-dms-promotion-api-dev.finviet.com.vn/#/operations/IntegrationController_ListPromotions_v1) | **Workflow Lấy khuyến mãi sau giảm trừ**  trueÁp dụng khuyến mãi sau giảm trừ - Sell inp2evGmIt5fQp-UJ0-9dN 11false500autotop53033595true |
| 5 | Màn hình khuyến mãi sau giảm trừ | Mô tả màn hình khuyến mãi sau giảm trừ   | UI | Mô tả | | --- | --- | | Table khuyến mãi ưu tiên | Gồm các khuyến mãi có loại chương trình "Ontop"  **Mô tả UI các loại Khuyến mãi trả thưởng**  Người dùng không được cập nhật bất kỳ thông tin nào   Có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình **Thể lệ chương trình khuyến mãi**  Nếu không có khuyến mãi nào, ẩn luôn section này | | Table khuyến mãi bình thường | Gồm các khuyến mãi có loại chương trình "Ontop"  **Mô tả UI các loại Khuyến mãi trả thưởng**  Người dùng không được cập nhật bất kỳ thông tin nào   Có thể click vào "Tên CTKM" hoặc icon "info" → Hệ thống hiển thị màn hình **Thể lệ chương trình khuyến mãi**  Nếu không có khuyến mãi nào, ẩn luôn section này | | Checkbox "Áp dụng khuyến mãi trên đơn hàng" | Giá trị mặc định là Un-checked  Khi checkbox chuyển qua trạng thái "Checked" → hệ thống quay lại bước (4) - Màn hình khuyến mãi khả dụng | | Nút "Đóng" | Khi người dùng click chọn nút "Đóng" → hệ thống thực hiện Đóng **Dialog Áp khuyến mãi**và đưa người dùng trở về màn hình **Thêm mới/Chỉnh sửa Đơn hàng** | | Nút "Lưu" | Nút "Lưu" được enable sau khi checkbox "Áp dụng khuyến mãi trên đơn hàng" đang là checked  Khi nhấn "Lưu" → hệ thống đóng màn hình Áp khuyến mãi và hiển thị danh sách khuyến mãi ưu tiên & khuyến mãi bình thường trong màn hình đơn hàng (tiếp tục bước 7) | |  |
| 6 | Màn hình đơn hàng đang áp dụng khuyến mãi | Mô tả màn hình Đơn hàng đang áp dụng khuyến mãi   | UI | Mô tả | | --- | --- | | Nút "Áp khuyến mãi" | Khi bấm nút "Áp khuyến mãi" → **Quay lại bước 5 - Màn hình Khuyến mãi đã giảm trừ** | | Nút "Bỏ khuyến mãi" | Khi bấm nút "Bỏ khuyến mãi" → Hiển thị màn hình xác nhận "Bỏ khuyến mãi"   * Nếu chọn "Xác nhận" → hệ thống thực hiện Clear danh sách khuyến mãi" * Nếu chọn "Hủy" → Tiếp tục luồng Thêm mới khuyến mãi đơn hàng | | Nút "Đóng" | Thực hiện Đóng màn hình Thêm mới đơn hàng và kết thúc luồng Áp khuyến mãi | | Nút "Lưu" | Thực hiện:   1. **Luồng nghiệp vụ Revert khuyến mãi**với các khuyến mãi đã thêm mới trước đó. 2. **Luồng nghiệp vụ Áp dụng khuyến mãi**với các khuyến mãi mới vừa được thêm vào. | |  |

## Revert khuyến mãi đơn hàng PO

Chức năng Revert khuyến mãi cho đơn hàng PO khi NPP hủy đơn PO

**Mô tả chi tiết**

| Trigger | Mô tả | Workflow |
| --- | --- | --- |
| Khi NPP xác nhận hủy đơn hàng PO | 1. Revert các khuyến mãi ứng với đơn hàng qua **Promotion** 2. Hủy đơn hàng PO | trueRevert khuyến mãi - Sell inYIWltK1x-tsmVGwISPk- 11false800autotop53033595true |
| Khi NPP xóa đơn hàng PO | 1. Revert các khuyến mãi ứng với đơn hàng qua **Promotion** 2. Xóa đơn hàng PO 3. Xóa danh sách khuyến mãi ứng với đơn hàng PO |

## Tự động áp dụng khuyến mãi đơn Sell in được convert từ Purchase Order

**Mô tả chi tiết**

Khi Purchase Order được NPP duyệt, hệ thống thực hiện

* **Tự động thêm mới đơn hàng Sell in ở trạng thái khởi tạo**
* **Thêm mới các khuyến mãi cho Sell in** với danh sách khuyến mãi tương tự như Purchase Order   
  + Thêm mới khuyến mãi Ưu tiên & khuyến mãi bình thường
  + Thông tin khuyến mãi tương tự:
    - Tên CTKM, Số suất tối đa, Số suất lựa chọn, Tổng số lượng, Tổng thành tiền
    - Danh sách trả thưởng: Gói khuyến mãi, Mã sản phẩm, Tên sản phẩm, Số lượng, Đơn vị