|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-3218Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-3219Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-3310 |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

 

Tài liệu bên promotion: Document Promotion: [2.5 - Khuyến mãi bậc thang - PROMOTION - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66521601)

### Đối tượng áp dụng

* Loại đơn hàng: Sell-in, Sell-out, Purchase Order
* Loại KM: Khuyến mãi bình thường & Khuyến mãi ưu tiên

### Lưu ý

* Ngân sách
  + Ngân sách Suất/Tiền: Không thay đổi rule cấu hình ngân sách và trừ ngân sách.
  + Ngân sách SP tặng: Không thay đổi rule trừ ngân sách. Khi đồng bộ dữ liệu từ cấu hình, Không đồng bộ các gói KM có hình thức Giảm giá hoặc chiết khấu sang ngân sách
* Rule giảm trừ xét theo từng bậc thỏa

### Giao diện CTKM bậc thang

#### 1. Màn hình Khuyến mãi khả dụng, Màn hình Khuyến mãi đã giảm trừ

| Màn hình | Mô tả |
| --- | --- |
|  | Thông tin CTKM bậc thang bao gồm:    * Tên CTKM & icon "info": Click vào đây → hệ thống popup **Thể lệ chương trình khuyến mãi** * Toggle để đóng/mở CTKM * Đối với CTKM bình thường, có thể kéo thả sắp xếp thứ tự các khuyến mãi bình thường   Chi tiết các bậc bao gồm:    * Bậc:    + Gồm các bậc trong CTKM bậc thang mà đơn hàng được hưởng do promotion trả về.   + Promotion trả về các giá trị "GOI 1" "GOI 2",...,"GOI n", thực hiện mapping với số bậc tương ứng "Bậc 1", "Bậc 2",..., "Bậc n".   + Có toggle để đóng/mở bậc. * Danh sách trả thưởng từng bậc xem tại mô tả: **Hình thức trả khuyến mãi**.     Lưu ý trường hợp áp dụng Autoselect cho khuyến mãi bậc thang     * Trường hợp do autoselect + vừa autoselect vừa giảm trừ nên là sẽ có trường hợp gói khuyến mãi trong bậc thang không thỏa nên bị ẩn đi   → Trường hợp này không ẩn đi mà vẫn hiển thị dưới dạng disable cho user có thể thấy được trọn vẹn bậc thang để điều chỉnh autoselect chọn lại CTKM, gói KM không phù hợp sẽ disable và user không chọn được, muốn chọn chỉ có thể chọn tick/untick các CTKM đã autoselect để chọn lại |

##### Hình thức trả khuyến mãi

|  |  |  |
| --- | --- | --- |
| **Hình thức** | **Mô tả** | |
| **Thông tin chung của bậc** | **Thông tin trả thưởng** |
| Tặng sản phẩm trong nhóm | * Số suất tối đa: Do promotion trả về * Số suất = Số suất tối đa * Số lượng: Giá trị mặc định được Promotion trả về * Thành tiền: = 0 | * Mã sản phẩm: Mã SKU của sản phẩm được tặng * Tên sản phẩm: Tên của sản phẩm được tặng * Số lượng:    + Giá trị mặc định là 0   + Người dùng có thể điều chỉnh số lượng (nhập số nguyên)   + Min là 0   + Max là số lượng tối đa   + Khi bấm "Áp dụng KM" → Ràng buộc tổng số lượng sản phẩm được checked = Số lượng sản phẩm. Hiển thị lỗi "Số lượng sản phẩm tặng phải bằng số lượng khuyến mãi" * Đơn vị: Đơn vị cơ bản của sản phẩm đó. * Tồn kho: Hiển thị tồn kho sản phẩm khuyến mãi |
| Tặng sản phẩm cùng loại | * Mã sản phẩm: Mã SKU của sản phẩm được tặng * Tên sản phẩm: Tên của sản phẩm được tặng * Số suất:    + Mặc định max suất do promotion trả về   + Không cho phép chỉnh sửa * Số lượng:   + Số suất được hưởng \* số lượng trên 1 suất   + Giá trị mặc định là max số lượng (max số suất \* số lượng trên 1 suất)   + Đơn vị: Đơn vị cơ bản * Đơn vị: hiển thị đơn vị cơ bản & nhỏ nhất * Tồn kho : Tồn kho có sẵn của sản phẩm |
| Giảm tiền | * Số suất tối đa: Do promotion trả về * Số suất = Số suất tối đa * Số lượng = 0 * Thành tiền: Mặc định là Thành tiền khuyến mãi được Promotion trả về. | * Mã sản phẩm: N/A * Tên sản phẩm: N/A * Giảm giá: Số % được giảm do Promotion trả về * Đơn vị: % * Tồn kho: N/A |
| Chiết khấu | * Mã sản phẩm: N/A * Tên sản phẩm: N/A * Giảm giá: Số tiền được giảm do Promotion trả về * Đơn vị: VND * Tồn kho: N/A |
| * Ngoại trừ số lượng trong hình thức Tặng SP trong nhóm, tất cả các trường đều không được thay đổi. * Mỗi bậc chỉ bao gồm 1 hình thức (Tặng nhóm sản phẩm/Tặng sản phẩm cùng loại/ Giảm tiền/Chiết khấu). | | |

#### 2. Màn hình Xem chi tiết đơn hàng - CTKM đã áp dụng

* Hiển thị như các CTKM bình thường: Mỗi CTKM - hình thức khuyến mãi là 1 dòng, không chia theo bậc. Nếu hình thực khuyến mãi là tặng X trong nhóm sản phẩm → Mỗi SKU tách xuống 1 dòng.
* Nếu trong các bậc của cùng 1 CTKM có sản phẩm tặng giống nhau thì cộng tổng số lượng của sản phẩm đó ở tất cả các bậc và chỉ hiển thị 1 dòng.
* Nếu hình thức trả khuyến mãi trong các bậc cùng 1 CTKM là giảm tiền thì cộng tổng số tiền được giảm và chỉ hiển thị 1 dòng.

Ví dụ: Đơn hàng được áp dụng 2 CTKM bậc thang như sau:

| CTKM: CTKM tháng 5.1 | | | |
| --- | --- | --- | --- |
|  | Sản phẩm tặng | SL | Đơn vị |
| Bậc 1 | Sản phẩm A | 10 | Hộp |
| Sản phẩm C | 3 | Chai |
| Bậc 2 | Sản phẩm B | 10 | Cái |
| Sản phẩm A | 5 | Hộp |

| CTKM: CTKM tháng 5.2 | |
| --- | --- |
|  | Giảm giá |
| Bậc 1 | 100,000 |
| Bậc 2 | 150,000 |

=> CTKM đã áp dụng trên đơn hàng hiển thị như sau:

| Chương trình khuyến mãi | ... | Tên sản phẩm | Số lượng | Đơn vị | Khuyến mãi | ... |
| --- | --- | --- | --- | --- | --- | --- |
| CTKM: CTKM tháng 5.1 |  | Sản phẩm A | 15 | Hộp | - |  |
| CTKM: CTKM tháng 5.1 |  | Sản phẩm C | 3 | Chai | - |  |
| CTKM: CTKM tháng 5.1 |  | Sản phẩm B | 10 | Cái | - |  |
| CTKM: CTKM tháng 5.2 |  | - | - | - | 250,000 |  |