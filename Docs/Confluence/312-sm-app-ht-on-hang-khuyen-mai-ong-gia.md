|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Thêm hình thức khuyến mãi đồng giá

Document Promotion: [2.7 - Khuyến mãi đồng giá - PROMOTION - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66531906)

Link UIUX:

# 1 Phạm vi áp dụng

| Phạm vi áp dụng khuyến mãi đồng giá | Core DMS90 | Hương Thủy | Ghi chú |
| --- | --- | --- | --- |
| Đơn bán hàng |  | Đơn hàng direct Sales  Đơn hàng Indirect Sales |  |
| Chương trình khuyến mãi bậc thang |  | Đơn hàng direct Sales  Đơn hàng Indirect Sales | Hình thức đồng giá sẽ không nằm trong loại CTKM bậc thang |
| Chương trình khuyến mãi lotdate |  | Đơn hàng direct Sales  Đơn hàng Indirect Sales | Hương Thủy đang có sheme mua sản phẩm có lot/date tháng 8 tháng 9 thì sản phẩm trong lot đó sẽ được đồng giá 34.000    Nên trong 1 sản phẩm mua có nhiều lot/date thì sẽ có:   * lot/date được khuyến mãi đồng giá * lot/date vẫn hiển thị giá bình thường |
| Loại khuyến mãi Ontop/Bình thường |  |  | Loại khuyến mãi Ontop/Bình thường đều có thể xuất hiện CTKM đồng giá |
| Hình thức khuyến mãi AND/OR |  |  | Chỉ trả về 1 loại hình thức đồng giá, không AND/OR với hình thức khác trong cùng 1 scheme khuyến mãi loại đồng giá |
| Ngân sách |  |  | KM đồng giá không sử dụng Ngân sách |

# 2. Logic tính toán khuyến mãi Đồng giá

|  | Trường hợp xét khuyến mãi | Mô tả |
| --- | --- | --- |
| 1 | Trong 1 khuyến mãi đồng giá | 1. **Tính giá trị KM**  * Sản phẩm có giá = giá trị đồng giá → Không hiển thị khuyến mãi, không được áp dụng khuyến mãi * Sản phẩm có giá > giá trị đồng giá → Giá trị khuyến mãi = Giá bán sản phẩm - Giá trị đồng giá * Sản phẩm có giá < giá trị đồng giá → Không hiển thị khuyến mãi, không được áp dụng khuyến mãi   **Ví dụ:**  Mua 1 sp A,B mỗi loại đồng giá 10k  Đơn mua 3 A (12k), 3 B (8k)  → 3 sp A đồng giá 10k, 2 sp B đồng giá 10k, 1 sp B giá gốc 8k  **3. Tính số suất**   * **Số suất = 1**   **4. Rule giảm trừ**   * Giảm trừ toàn bộ sản phẩm điều kiện trong đơn hàng * Nếu có điều kiện lô, chỉ giảm trừ sản phẩm trong Date cấu hình CTKM |
| 2 | Giữa 2 KM đồng giá Ontop  Giữa 1 KM đồng giá ontop, 1 KM đồng giá bình thường | Bổ sung field Thứ tự ưu tiên:  1.   * Dựa vào mức ưu tiên nếu 1 sp thuộc 2 ctkm đồng giá thì lấy ct ưu tiên cao hơn và loại trừ km có ưu tiên thấp hơn, ko quan tâm giá trị đồng giá.  * Rule này chỉ áp dụng cho KM đồng giá   2. Nếu trùng ưu tiên thì lấy ct đồng giá tạo trước  3. Chỉ kiểm tra mã sản phẩm, không kiểm tra đến lô-date  **Ví dụ:**  KM1: Mua A date (!/5 - 30/5) đồng giá 10k, ưu tiên 1  KM2: Mua A,B,C đồng giá 12k, ưu tiên 2    Đơn hàng có 1A date 15/5, 2A 30/9, 2B, 2C  → Áp dụng KM1, sp A date 15/5 đồng giá 10k, 2A date 30/9, 2B, 2C giá gốc  → KM2 không apply vì trùng sp A và có ưu tiên thấp hơn |
| 4 | Giữa KM đồng giá và KM giảm giá, chiết khấu | Giảm giá và chiết khấu sẽ **tính trên giá trị gốc của sản phẩm, đơn hàng.**   * KM1: mua 6 sp A đồng giá 5k * KM2: Mua sp A > 100k chiết khấu 10%   Đơn mua 12 sp A và tổng giá trị = 120k  → KM1 mỗi sp A đồng giá 5k → Tổng đơn hàng = 12\*5 = 60k  → KM2: Giá trị giảm = 120\*10% = 12k  Tổng đơn hàng: 60 - 12 = 48k |

# 3 Bổ sung trên màn hình

## 3.1 Viếng thăm/Chăm sóc → Đặt hàng

### 3.1.1 Đơn hàng hôm nay → Chi tiết đơn hàng

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị thông tin tag Đồng giá nếu có |  |

### 3.1.2 Màn hình Chọn sản phẩm

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị thông tin tag Đồng giá nếu có  Trường hợp thay đổi số lượng và thay đổi số lô trên sản phẩm phải gọi lại promotion để apply CTKM đồng giá mới |  |

### 3.1.3 Màn hình Gợi ý sản phẩm

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị thông tin tag Đồng giá nếu có  Trường hợp thay đổi số lượng và thay đổi số lô trên sản phẩm phải gọi lại promotion để apply CTKM đồng giá mới |  |

### 3.1.4 Màn hình Danh sách khuyến mãi

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị CTKM đồng giá ở tab CTKM giảm giá  Sử dụng chung icon Giảm giá cho các CTKM đồng giá |  |

### 3.2.4 Màn hình Sản phẩm đã chọn (Giỏ hàng)

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị thông tin tag Đồng giá nếu có  Trường hợp thay đổi số lượng và thay đổi số lô trên sản phẩm phải gọi lại promotion để apply CTKM đồng giá mới |  |

### 3.2.5 Màn hình Chi tiết sản phẩm

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị CTKM đồng giá ở tab CTKM giảm giá  Sử dụng chung icon Giảm giá cho các CTKM đồng giá |  |

### 3.2.6 Màn hình Xác nhận đơn hàng

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị thông tin tag Đồng giá nếu có  Trường hợp thay đổi số lượng và thay đổi số lô trên sản phẩm phải gọi lại promotion để apply CTKM đồng giá mới Lưu ý Sau khi lưu đơn hàng, OMS sẽ lưu lại thông tin giảm giá của các scheme đồng giá này trên từng sản phẩm để phục vụ báo cáo sau này |  |

### 3.2.7 Màn hình CTKM Ontop/CTKM Bình thường

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị CTKM đồng giá dưới dạng CTKM giảm giá bình thường với số tiền giảm giá = (Giá gốc sản phẩm - Giá trị đồng giá)\*số lượng sản phẩm |  |
| Màn hình Khuyến mãi đã áp dụng |  |

## 3.2 Menu đơn hàng

### 3.2.1 Chi tiết đơn hàng

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị thông tin tag Đồng giá nếu có |  |

## 3.3 Chi tiết điểm bán → Lịch sử đơn hàng

### 3.3.1 Chi tiết đơn hàng

| Chức năng điều chỉnh | Màn hình |
| --- | --- |
| Hiển thị thông tin tag Đồng giá nếu có |  |