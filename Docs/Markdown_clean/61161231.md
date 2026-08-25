|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | BRD: [BRD [HƯƠNG THỦY] Đơn hàng gợi ý](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61163384) |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# I. Chức năng cài đặt sản phẩm gợi ý cho đơn hàng

Tự động đề xuất danh sách sản phẩm cần mua cho từng cửa hàng, nhằm tối ưu hóa lượng tồn kho, đảm bảo đáp ứng đủ nhu cầu tiêu dùng và tận dụng các chương trình khuyến mãi hiện hành.

#### Chức năng này sử dụng các thuật toán phân tích dữ liệu để đề xuất số lượng hàng hóa cần đặt mua theo từng cửa hàng, dựa trên các yếu tố đầu vào như:

* **Sản phẩm thường mua** (theo lịch sử mua hàng)
* **Sản phẩm đang khuyến mãi** (CTKM áp dụng)
* **Sản phẩm bán chạy theo khu vực**

# II. Config sản phẩm gợi ý cho đơn hàng

Bổ sung Config  RECOMMENDATION\_PROUDCT\_LIST dạng table như sau

| **Mã đối tượng** | **Tên đối tượng** | **Tên hiển thị** | **Mô tả** | **Tham số** | **Thứ tự sắp xếp** |
| --- | --- | --- | --- | --- | --- |
| `enable_suggested_order` | Bật/tắt danh sách sản phẩm gợi ý trên App | Bật/tắt danh sách sản phẩm gợi ý trên App | Bật/tắt hoàn toàn chức năng danh sách sản phẩm gợi ý trên app | 0: Tắt  1: Bật |  |
| `days_history_frequently_bought` | Số ngày lịch sử - sản phẩm thường mua | Số ngày lịch sử - sản phẩm thường mua | Số ngày lấy lịch sử đơn hàng cho card “Sản phẩm thường mua” | Number (days)  90 |  |
| `days_history_best_seller_area` | Số ngày lịch sử - bán chạy khu vực | Số ngày lịch sử - bán chạy khu vực | Số ngày lấy lịch sử bán theo khu vực cho card “Sản phẩm bán chạy trong khu vực” | Number (days)  90 |  |
| `max_products_frequently_bought` | Số SP hiển thị - sản phẩm thường mua | Số SP hiển thị - sản phẩm thường mua | Giới hạn số sản phẩm trong card “Sản phẩm thường mua” | Number (items)  10 |  |
| `max_products_promo` | Số SP hiển thị - sản phẩm khuyến mãi | Số SP hiển thị - sản phẩm khuyến mãi | Giới hạn số sản phẩm trong card “Sản phẩm khuyến mãi” | Number (items)  10 |  |
| `max_products_best_seller_area` | Số SP hiển thị - sản phẩm bán chạy khu vực | Số SP hiển thị - sản phẩm bán chạy khu vực | Giới hạn số sản phẩm trong card “Sản phẩm bán chạy khu vực” | Number (items)  10 |  |
| `show_card_frequently_bought` | Hiển thị card - sản phẩm thường mua | Hiển thị card - sản phẩm thường mua | Bật/tắt hiển thị card “Sản phẩm thường mua”  Nếu cấu hình bật thì thông tin thứ tự hiển thị trên App được cấu hình ở cột Thứ tự sắp xếp | 0: Tắt  1: Bật | 1 |
| `show_card_promo` | Hiển thị card - sản phẩm khuyến mãi | Hiển thị card - sản phẩm khuyến mãi | Bật/tắt hiển thị card “Sản phẩm khuyến mãi”  Nếu cấu hình bật thì thông tin thứ tự hiển thị trên App được cấu hình ở cột Thứ tự sắp xếp | 0: Tắt  1: Bật | 2 |
| `show_card_best_seller_area` | Hiển thị card - sản phẩm bán chạy khu vực | Hiển thị card - sản phẩm bán chạy khu vực | Bật/tắt hiển thị card “Sản phẩm bán chạy khu vực”  Nếu cấu hình bật thì thông tin thứ tự hiển thị trên App được cấu hình ở cột Thứ tự sắp xếp | 0: Tắt  1: Bật | 3 |

# III. Mô tả quy tắc lấy danh sách sản phẩm

Lưu ý: Nếu 1 sản phẩm trùng giữa nhiều card thì xuất hiện ở tất cả các card thỏa điều kiện

## 1 Sản phẩm thường mua

### 1.1 Quy tắc lấy sản phẩm

| Bước | Mô tả |
| --- | --- |
| 1 | Bắt đầu bằng việc **truy xuất lịch sử mua hàng** trong khoảng thời gian ngày hiện tại + N ngày trước đó của điểm bán đang được nhân viên đặt hàng (N lấy từ cấu hình `days_history_frequently_bought`). |
| 2 | Nếu cửa hàng **không phát sinh** đơn hàng nào trong khoảng này → **Ẩn card Sản phẩm thường mua** |
| 3 | Nếu có đơn hàng: |
| - **Hiển thị card**: Sản phẩm thường mua. |
| * Tính tổng số lần sản phẩm xuất hiện trong các đơn hàng đã đặt theo từng sản phẩm  * Tính tổng số lượng sản phẩm xuất hiện trong các đơn hàng đã đặt theo từng sản phẩm (Quy đổi về đơn vị cơ bản)   *Đơn hàng có trạng thái Đã duyệt/Đã xuất kho, không quan tâm kho đặt hàng, nguồn đặt, loại đơn hàng trên đơn hàng* |
| - Lọc sản phẩm: Sản phẩm nào có **số lần đặt ≥ 1 và số lượng đặt >=1** (Quy đổi về đơn vị cơ bản) sẽ được xét tiếp. |
| - Lấy danh sách sản phẩm có số lần mua và số lượng mua nhiều nhất. |
| 4 | Kiểm tra điều kiện lọc sản phẩm: |
| - Sản phẩm còn **hoạt động** → Nếu không hoạt động → Không đề xuất, không hiển thị sản phẩm này |
| - Giá bán sản phẩm **> 0 →** Nếu giá <0 hoặc không có giá → không đề xuất, Không hiển thị sản phẩm này |
| - Tồn kho sản phẩm tại nhà phân phối (NPP) **> 0 hoặc Tồn kho sản phẩm tại kho vansales > 0→** Nếu tồn kho <= 0 (kiểm tra trên kho dùng để đặt hàng) → Không đề xuất, không hiển thị sản phẩm này |
| - Sản phẩm thuộc nhãn hàng trên tuyến nhân viên đang đặt đơn hàng → Nếu không thuộc nhãn hàng trên tuyến của nhân viên → Không đề xuất, không hiển thị sản phẩm này |
| 5 | Nếu thỏa mãn tất cả điều kiện: |
| - **Hiển thị sản phẩm lên danh sách đề xuất đơn hàng thường mua**.   * Số lượng sản phẩm của card lấy từ config `max_products_frequently_bought` |

### 1.2 Ưu tiên sắp xếp theo thứ tự:

| Thứ tự | Tiêu chí | Ghi chú |
| --- | --- | --- |
| 1 | **Số lần và số lượng mua trong lịch sử giảm dần** | Số lần và số lượng sản phẩm này được mua trong X ngày, cao nhất lên trước |
| 2 | **Giá trị tồn kho giảm dần** | Ưu tiên bán sản phẩm tồn kho từ nhiều nhất → ít nhất |
| 3 | **Giá giảm dần** | Ưu tiên bán sản phẩm giá cao nhất → thấp nhất |
| 4 | **Tên sản phẩm tăng dần (Alphabetical)** | Sắp xếp theo chữ cái đầu trong tên sản phẩm từ A → Z |

### **1.3 Ví dụ:**

* Điểm bán: **Cửa hàng A**
* Lịch sử mua hàng 30 ngày gần nhất:

| Sản phẩm | Số lần mua | Tổng SL mua | Trạng thái SP | Tồn kho tại NPP | Giá bán | Điểm sắp xếp theo số lần, số lượng | Thứ tự sắp xếp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sữa ABC 180ml | 5 lần | 50 thùng | Hoạt động | 200 thùng | 240,000 | =5\*1000+50= 5050 | 1 |
| Bánh quy XYZ | 3 lần | 80 thùng | Hoạt động | 100 thùng | 120,000 | =3\*1000+80= 3080 | 3 |
| Kẹo ACV | 3 lần | 90 thùng | Hoạt động | 100 thùng | 50,000 | =3\*1000+90=3090 | 2 |
| Nước ngọt ACV | 2 lần | 150 thùng | Hoạt động | 100 thùng | 100,000 | = 2\*1000+150=2150 | 4 |
| Nước ngọt MNO | 1 lần | 10 thùng | Không Hoạt động | 0 thùng | 150,000 |  | Không hoạt động nên bỏ qua |

Xử lý:

* Sữa ABC 180ml: đủ điều kiện (hoạt động, tồn kho > 0, giá > 0).
* Bánh quy XYZ: đủ điều kiện.
* Nước ngọt MNO: **loại bỏ** (Tạm ngưng hoạt động + tồn kho = 0).

Hiển thị trên card:

* Sữa ABC 180ml
* Kẹo ACV
* Bánh quy XYZ
* Nước ngọt ACV

## 2 Sản phẩm khuyến mãi

### 2.1 Quy tắc lấy sản phẩm

| Bước | Mô tả |
| --- | --- |
| 1 | Dựa trên **danh sách các chương trình khuyến mãi (CTKM)** đang áp dụng cho điểm bán ở thời điểm hiện tại (thời điểm tạo đơn hàng).  Danh sách tất cả CTKM còn thời hạn (trạng thái đang diễn ra) và điều kiện có cài đặt thông tin sản phẩm. |
| 2 | Nếu **không có CTKM** đang áp dụng → **Ẩn card Sản phẩm khuyến mãi** |
| 3 | Nếu có CTKM: |
| - **Hiển thị card**: Sản phẩm khuyến mãi. |
| - Lọc sản phẩm: Các sản phẩm thuộc ít nhất 1 CTKM.   * Khuyến mãi có giảm % → Lấy 40% số lượng sản phẩm trong card → Ví dụ tổng số lượng sản phẩm trong card là 10, lấy ra 4 SP có CTKM giảm % cao nhất * Khuyến mãi có giảm tiền → Lấy 30% số lượng sản phẩm trong card → Ví dụ tổng số lượng sản phẩm trong card là 10, lấy ra 3 SP có CTKM giảm tiền cao nhất * Khuyến mãi có tặng quà → Lấy 30% số lượng sản phẩm trong card → Ví dụ tổng số lượng sản phẩm trong card là 10, lấy ra 3 SP có CTKM giảm tiền cao nhất |
| 4 | Kiểm tra điều kiện lọc sản phẩm: |
| - Sản phẩm còn **hoạt động** → Nếu không hoạt động → Không đề xuất, không hiển thị sản phẩm này |
| - Giá bán sản phẩm **> 0 →** Nếu giá <0 hoặc không có giá → không đề xuất, Không hiển thị sản phẩm này |
| - Tồn kho sản phẩm tại nhà phân phối (NPP) **> 0 hoặc** Tồn kho sản phẩm tại kho vansales **> 0→** Nếu tồn kho <= 0 (kiểm tra trên kho dùng để đặt hàng) → Không đề xuất, không hiển thị sản phẩm này |
| - Sản phẩm thuộc nhãn hàng trên tuyến nhân viên đang đặt đơn hàng → Nếu không thuộc nhãn hàng trên tuyến của nhân viên → Không đề xuất, không hiển thị sản phẩm này |
| 5 | Nếu thỏa mãn tất cả điều kiện: |
| - **Hiển thị sản phẩm lên Card Sản phẩm khuyến mãi**   * Số lượng sản phẩm của card lấy từ config `max_products_promo` |

**2.2 Ưu tiên sắp xếp theo thứ tự:**

| Thứ tự | Tiêu chí | Ghi chú |
| --- | --- | --- |
| 1 | **Mức giảm giá % cao hơn trước** | Sản phẩm có  CTKM có mức % giảm nhiều hơn thì lên trước  Chiếm 40% số lượng sản phẩm trong card |
| 2 | **Số tiền giảm cao hơn trước** | Sản phẩm có  CTKM có số tiền giảm nhiều hơn thì ưu tiên lên trước  Chiếm 30% số lượng sản phẩm trong card |
| 3 | **Số lượng sản phẩm tặng nhiều hơn trước** | Sản phẩm có  CTKM có số lượng tặng quà nhiều hơn thì ưu tiên lên trước  (tặng 2A và/hoặc 1B thì tính là 3)  Chiếm 30% số lượng sản phẩm trong card |
| 4 | **Thời gian còn lại của CTKM ngắn hơn** | Sản phẩm có  CTKM sắp hết hạn thì đẩy lên trước |
| 5 | **Tên sản phẩm tăng dần (Alphabetical)** | Sắp xếp theo chữ cái đầu trong tên sản phẩm từ A → Z |

### **2.3 Ví dụ:**

* CTKM đang áp dụng tại thời điểm đề xuất:

| Sản phẩm | Tên CTKM | Sản phẩm áp dụng | Quà tặng | Hạn CTKM | Thứ tự sắp xếp |
| --- | --- | --- | --- | --- | --- |
| Nước giải khát DEF | Mua 5 tặng 1 | Nước giải khát DEF | 1 chai tặng thêm | 30/04/2025 | 3 |
| Bánh quy XYZ | Giảm giá 10% cho đơn hàng đầu tiên | Bánh quy XYZ | Không | 31/05/2025 | 2 |
| Nước ngọt ABC | Giảm giá 20% cho đơn hàng 500.000 | Nước ngọt ABC | Không | 31/05/2025 | 1 |

Hiển thị trên card:

* Nước ngọt ABC (Giảm 20%)
* Bánh quy XYZ (Giảm 10%)
* Nước giải khát DEF (Mua 5 tặng 1)

## 3 Sản phẩm bán chạy theo khu vực

### 3.1 Quy tắc lấy sản phẩm

| Bước | Mô tả |
| --- | --- |
| 1 | Dựa trên lịch sử mua hàng trong x ngày của tất cả các điểm bán trong tuyến của nhân viên (không cần quan tâm tần suất hay ngày đi tuyến, chỉ cần lấy ra các điểm bán không trùng trên tuyến bán hàng ngay tại thời điểm đặt hàng, điểm bán có trạng thái đang hoạt động trong tuyến thực tế)  x lấy từ config `days_history_best_seller_area` |
| 2 | Nếu không tìm thấy bất kỳ đơn hàng nào → **Ẩn card Sản phẩm bán chạy theo khu vực** |
| 3 | Nếu có: |
| - **Hiển thị card**: **Sản phẩm bán chạy theo khu vực** |
| * Tính tổng số lần sản phẩm xuất hiện trong các đơn hàng đã đặt theo từng sản phẩm  * Tính tổng số lượng sản phẩm xuất hiện trong các đơn hàng đã đặt theo từng sản phẩm (Quy đổi về đơn vị cơ bản)   *Đơn hàng có trạng thái Đã duyệt/Đã xuất kho, không quan tâm kho đặt hàng, nguồn đặt, loại đơn hàng trên đơn hàng* |
| - Lọc sản phẩm: Sản phẩm nào có **số lần đặt ≥ 1 và số lượng đặt >=1** (Quy đổi về đơn vị cơ bản) sẽ được xét tiếp. |
| - Lấy danh sách sản phẩm có số lần mua và số lượng mua nhiều nhất. |
| 4 | Kiểm tra điều kiện lọc sản phẩm: |
| - Sản phẩm còn **hoạt động** → Nếu không hoạt động → Không đề xuất, không hiển thị sản phẩm này |
| - Giá bán sản phẩm **> 0 →** Nếu giá <0 hoặc không có giá → không đề xuất, Không hiển thị sản phẩm này |
| - Tồn kho sản phẩm tại nhà phân phối (NPP) **> 0 hoặc** Tồn kho sản phẩm tại kho vansales **> 0→** Nếu tồn kho <= 0 (kiểm tra trên kho dùng để đặt hàng) → Không đề xuất, không hiển thị sản phẩm này |
| - Sản phẩm thuộc nhãn hàng trên tuyến nhân viên đang đặt đơn hàng → Nếu không thuộc nhãn hàng trên tuyến của nhân viên → Không đề xuất, không hiển thị sản phẩm này |
| 5 | Nếu thỏa mãn tất cả điều kiện: |
| * **Hiển thị sản phẩm lên card Sản phẩm bán chạy theo khu vực**  * Số lượng sản phẩm của card lấy từ config `max_products_best_seller_area` |

### 3.2 Ưu tiên sắp xếp theo thứ tự:

| Thứ tự | Tiêu chí | Ghi chú |
| --- | --- | --- |
| 1 | **Số lần và số lượng mua trong lịch sử giảm dần** | Số lần và số lượng sản phẩm này được mua trong X ngày, cao nhất lên trước |
| 2 | **Giá trị tồn kho giảm dần** | Ưu tiên bán sản phẩm tồn kho từ nhiều nhất → ít nhất |
| 3 | **Giá giảm dần** | Ưu tiên bán sản phẩm giá cao nhất → thấp nhất |
| 4 | **Tên sản phẩm tăng dần (Alphabetical)** | Sắp xếp theo chữ cái đầu trong tên sản phẩm từ A → Z |

### **3.3 Ví dụ**

* Tuyến bán hàng nhân viên Nguyễn Văn A: **Có 30 điểm bán** (không cần quan tâm tần suất hay ngày đi tuyến, chỉ cần lấy ra các điểm bán không trùng trên tuyến bán hàng ngay tại thời điểm đặt hàng)
* Top sản phẩm bán chạy 30 ngày qua:

| Sản phẩm | Số lần mua | Tổng SL bán | Trạng thái SP | Tồn kho tại NPP | Giá bán | Điểm sắp xếp theo số lần, số lượng | Thứ tự sắp xếp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mì gói 123 | 150 lượt | 500 thùng | Hoạt động | 400 thùng | 90,000 | =150\*1000+500= 150500 | 1 |
| Bia ZZZ lon 330ml | 120 lượt | 450 thùng | Hoạt động | 350 thùng | 320,000 | =120\*1000+450= 120450 | 2 |
| Snack Chip MNP | 100 lượt | 300 thùng | Tạm ngưng | 0 thùng | 60,000 |  | Không hoạt động |

Xử lý:

* Mì gói 123: đủ điều kiện.
* Bia ZZZ lon 330ml: đủ điều kiện.
* Snack Chip MNP: loại bỏ (tạm ngưng + tồn kho = 0).

Hiển thị trên card:

* Mì gói 123
* Bia ZZZ lon 330ml