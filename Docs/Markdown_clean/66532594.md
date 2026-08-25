|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0 : Không điều chỉnh số suất của từng sản phẩm tặng  RedV1.2.0 : Bậc thang có các hình thức tặng khác nhau giữa các bậc |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Thêm hình thức khuyến mãi bậc thang ( Các bậc thang có cùng hình thức tặng)

Document Promotion: [2.5 - Khuyến mãi bậc thang - PROMOTION - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66521601)

Link UIUX:

## 1 Chương trình khuyến mãi Ontop

| Chức năng | **Màn hình** | **Mô tả** |
| --- | --- | --- |
| Khuyến mãi Ontop |  | * Thỏa n bậc khuyến mãi: Hiển thị số lượng bậc khuyến mãi đạt được do promotion trả về * Bậc : Thông tin bậc được hưởng do promotion trả về * Số suất: Thông tin này sẽ disable không được chỉnh sửa * Chi tiết quà tặng:    + Promotion sẽ gửi về thông tin quà tặng khả dụng   + Mỗi bậc chỉ bao gồm 1 hình thức (Tặng nhóm sản phẩm/Tặng sản phẩm cùng loại/ Giảm tiền/Chiết khấu).   + Hình thức trả khuyến mãi trong tất cả các bậc thuộc cùng 1 CTKM đều giống nhau.   + Chỉ được chỉnh sửa trong trường hợp:      - Điều chỉnh lại số lượng sản phẩm tặng trong nhóm sản phẩm sao cho tổng số lượng của các SP trong nhóm = Số lượng tổng được nhận.     - Điều chỉnh lại số suất của sản phẩm tặng trong trường hợp KM tặng sản phẩm cùng nhóm theo số suất     Lưu ý trường hợp áp dụng Autoselect cho khuyến mãi bậc thang     * Trường hợp do autoselect + vừa autoselect vừa giảm trừ nên là sẽ có trường hợp gói khuyến mãi trong bậc thang không thỏa nên bị ẩn đi   → Trường hợp này không ẩn đi mà vẫn hiển thị dưới dạng disable cho user có thể thấy được trọn vẹn bậc thang để điều chỉnh autoselect chọn lại CTKM, gói KM không phù hợp sẽ disable và user không chọn được, muốn chọn chỉ có thể chọn tick/untick các CTKM đã autoselect để chọn lại   * Hiển thị bậc thang ở disable * Nhưng khi có tác động tick/untick/thay đổi thứ tự chọn của chương trình khuyến mãi → bậc bị disable sẽ enable hiển thị lên để user chọn. * Bậc bị disable nếu không điều chỉnh sẽ không tính vào combine CTKM * Khi disable/enable bậc thang ở trường hợp này sẽ tính lại thông tin Tổng quà và Tổng tiền KM. |
| Khuyến mãi đã áp dụng |  | Hiển thị danh sách khuyến mãi trên đơn hàng theo bậc thang |

### 1.1 Các scheme khuyến mãi bậc thang

## 2 Chương trình khuyến mãi Bình thường

| Chức năng | **Màn hình** | **Mô tả** |
| --- | --- | --- |
| Khuyến mãi Bình thường |  | * Bậc : Thông tin bậc được hưởng do promotion trả về * Số suất: Thông tin này sẽ disable không được chỉnh sửa * Chi tiết quà tặng:    + Promotion sẽ gửi về thông tin quà tặng khả dụng   + Mỗi bậc chỉ bao gồm 1 hình thức (Tặng nhóm sản phẩm/Tặng sản phẩm cùng loại/ Giảm tiền/Chiết khấu).   + Hình thức trả khuyến mãi trong tất cả các bậc thuộc cùng 1 CTKM đều giống nhau.   + Số suất của từng sản phẩm tặng không được chỉnh sửa   + Chỉ được chỉnh sửa trong trường hợp:      - Điều chỉnh lại số lượng sản phẩm tặng trong nhóm sản phẩm sao cho tổng số lượng của các SP trong nhóm = Số lượng tổng được nhận.     - ~~Điều chỉnh lại số suất của sản phẩm tặng trong trường hợp KM tặng sản phẩm cùng nhóm theo số suất~~ * Vẫn có thể chọn để đánh độ ưu tiên cho CTKM     Lưu ý trường hợp áp dụng Autoselect cho khuyến mãi bậc thang     * Trường hợp do autoselect + vừa autoselect vừa giảm trừ nên là sẽ có trường hợp gói khuyến mãi trong bậc thang không thỏa nên bị ẩn đi   → Trường hợp này không ẩn đi mà vẫn hiển thị dưới dạng disable cho user có thể thấy được trọn vẹn bậc thang để điều chỉnh autoselect chọn lại CTKM, gói KM không phù hợp sẽ disable và user không chọn được, muốn chọn chỉ có thể chọn tick/untick các CTKM đã autoselect để chọn lại     * Hiển thị bậc thang ở disable * Nhưng khi có tác động tick/untick/thay đổi thứ tự chọn của chương trình khuyến mãi → bậc bị disable sẽ enable hiển thị lên để user chọn. * Bậc bị disable nếu không điều chỉnh sẽ không tính vào combine CTKM * Khi disable/enable bậc thang ở trường hợp này sẽ tính lại thông tin Tổng quà và Tổng tiền KM. |
| Khuyến mãi đã áp dụng |  | Hiển thị danh sách khuyến mãi trên đơn hàng theo bậc thang |

## 3 Chương trình khuyến mãi cho Hương Thủy

| Chức năng | **Màn hình** | **Mô tả** |
| --- | --- | --- |
| Danh sách khuyến mãi |  | * Bậc : Thông tin bậc được hưởng do promotion trả về * Số suất: Thông tin này sẽ disable không được chỉnh sửa * Chi tiết quà tặng:    + Promotion sẽ gửi về thông tin quà tặng khả dụng   + Mỗi bậc chỉ bao gồm 1 hình thức (Tặng nhóm sản phẩm/Tặng sản phẩm cùng loại/ Giảm tiền/Chiết khấu).   + Hình thức trả khuyến mãi trong tất cả các bậc thuộc cùng 1 CTKM đều giống nhau.   + Số suất của từng sản phẩm tặng không được chỉnh sửa   + Chỉ được chỉnh sửa trong trường hợp:      - Điều chỉnh lại số lượng sản phẩm tặng trong nhóm sản phẩm sao cho tổng số lượng của các SP trong nhóm = Số lượng tổng được nhận.     - ~~Điều chỉnh lại số suất của sản phẩm tặng trong trường hợp KM tặng sản phẩm cùng nhóm theo số suất~~ * Vẫn có thể chọn để đánh độ ưu tiên cho CTKM     Lưu ý trường hợp áp dụng Autoselect cho khuyến mãi bậc thang     * Trường hợp do autoselect + vừa autoselect vừa giảm trừ nên là sẽ có trường hợp gói khuyến mãi trong bậc thang không thỏa nên bị ẩn đi   → Trường hợp này không ẩn đi mà vẫn hiển thị dưới dạng disable cho user có thể thấy được trọn vẹn bậc thang để điều chỉnh autoselect chọn lại CTKM, gói KM không phù hợp sẽ disable và user không chọn được, muốn chọn chỉ có thể chọn tick/untick các CTKM đã autoselect để chọn lại   * Hiển thị bậc thang ở disable * Nhưng khi có tác động tick/untick/thay đổi thứ tự chọn của chương trình khuyến mãi → bậc bị disable sẽ enable hiển thị lên để user chọn. * Bậc bị disable nếu không điều chỉnh sẽ không tính vào combine CTKM * Khi disable/enable bậc thang ở trường hợp này sẽ tính lại thông tin Tổng quà và Tổng tiền KM. |
| Khuyến mãi đã áp dụng |  | Hiển thị danh sách khuyến mãi trên đơn hàng theo bậc thang |

## 4 Các Scheme Khuyến Mãi

| STT | Điều kiện mua | Điều kiện tặng | Ví dụ | Mô tả khuyến mãi bậc thang | UI khuyến mãi Ontop kèm bậc thang | UI bình thường kèm bậc thang | UI khuyến mãi Hương Thủy kèm bậc thang |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | * Mua số lượng sản phẩm * Mua số tiền sản phẩm * Mua số lượng sản phẩm trong nhóm * Mua số tiền sản phẩm trong nhóm * Mua số tiền đơn hàng | Tặng số lượng sản phẩm cùng loại/khác loại | Bậc 1: Mua 2 A tặng 1 A  Bậc 2: Mua 5 A tặng 2 B | Tặng max suất trên đơn hàng, không điều chỉnh số suất |  |  |  |
| 2 | * Mua số lượng sản phẩm * Mua số tiền sản phẩm * Mua số lượng sản phẩm trong nhóm * Mua số tiền sản phẩm trong nhóm * Mua số tiền đơn hàng | Tặng số lượng sản phẩm bất kỳ trong nhóm | Bậc 1: Mua 2 A tặng 3 sản phẩm trong nhóm (A, B, C)  Bậc 2: Mua 5 A tặng 5 sản phẩm trong nhóm (D, E, F) | - Tặng max suất trên đơn hàng, không điều chỉnh số suất - Được chọn sản phẩm tặng - Được điều chỉnh số lượng sản phẩm tặng sao cho = tổng số lượng sp tặng theo số suất |  |  |  |
| 3 | * Mua số lượng sản phẩm * Mua số tiền sản phẩm * Mua số lượng sản phẩm trong nhóm * Mua số tiền sản phẩm trong nhóm | Giảm tiền trên giá trị sản phẩm | Bậc 1: Mua 2 A giảm 5000  Bậc 2: Mua 5 A giảm 15000 | - Tặng max suất trên đơn hàng, không điều chỉnh số suất |  |  |  |
| 4 | * Mua số lượng sản phẩm * Mua số tiền sản phẩm * Mua số lượng sản phẩm trong nhóm * Mua số tiền sản phẩm trong nhóm | Giảm % trên giá trị sản phẩm | Mua A giảm 5% trên giá trị sản phẩm A  Bậc 1: Mua 2 A giảm 5% trên giá trị sản phẩm A  Bậc 2: Mua 5 A giảm 15% trên giá trị sản phẩm A | - Tặng max suất trên đơn hàng, không điều chỉnh số suất |  |  |  |
| 5 | * Mua số lượng sản phẩm * Mua số tiền sản phẩm * Mua số lượng sản phẩm trong nhóm * Mua số tiền sản phẩm trong nhóm * Mua số tiền đơn hàng | Giảm tiền trên giá trị đơn hàng (Lưu ý cần chia ngược về giảm tiền cho tất cả sản phẩm trên đơn hàng theo số lượng sản phẩm trên đơn hàng) | Bậc 1: Mua 2 A giảm 5000 trên giá trị đơn hàng  Bậc 2: Mua 5 A giảm 15000 trên giá trị đơn hàng | - Tặng max suất trên đơn hàng, không điều chỉnh số suất |  |  |  |
| 6 | * Mua số lượng sản phẩm * Mua số tiền sản phẩm * Mua số lượng sản phẩm trong nhóm * Mua số tiền sản phẩm trong nhóm * Mua số tiền đơn hàng | Giảm % trên giá trị đơn hàng (Lưu ý cần chia ngược về giảm tiền cho tất cả sản phẩm trên đơn hàng theo số lượng sản phẩm trên đơn hàng) | Bậc 1: Mua 2 A giảm 5% trên giá trị đơn hàng  Bậc 2: Mua 5 A giảm 15% trên giá trị đơn hàng | - Tặng max suất trên đơn hàng, không điều chỉnh số suất |  |  |  |
| 7 | * Mua số lượng sản phẩm trong nhóm * Mua số tiền sản phẩm trong nhóm | Tặng số lượng sản phẩm cùng loại trong nhóm theo số suất | Bậc 1    Mua 5 sản phẩm trong nhóm  (A,B,C)  Tặng 3 SP cùng loại   Bậc 2    Mua 10 sản phẩm trong nhóm (A,B,C)   Tặng 5 SP cùng loại  Đơn hàng mua: 12 sản phẩm A, 11 B sản phẩm B  → Tổng mua nhóm = 20 → Đạt bậc 2  12 A -> 1 suất A -> Tặng 5 A 11 B -> 1 suất B -> Tặng 5 B | Tặng max suất trên đơn hàng, không điều chỉnh số suất tổng, không điều chỉnh số suất của từng sản phẩm |  |  |  |

# Thêm hình thức khuyến mãi bậc thang ( Các bậc thang khác hình thức tặng)

Document Promotion: [2.5 - Khuyến mãi bậc thang - PROMOTION - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66521601)

Link UIUX:

* Bậc : Thông tin các bậc thỏa CTKM sẽ do promotion trả về
* **Số suất của scheme**: Thông tin này sẽ disable không được chỉnh sửa
* **Số suất của sản phẩm tặng:** Thông tin này sẽ disable không được chỉnh sửa
* **Số lượng sản phẩm tặng trong nhóm**: Được chỉnh sửa sao cho tổng số lượng của các SP trong nhóm = Số lượng tổng được nhận
* Trên 1 bậc chỉ có 1 hình thức: Tặng nhóm sản phẩm/Tặng sản phẩm/ Giảm tiền/Chiết khấu/...
* Các bậc khác nhau sẽ có hình thức tặng khác nhau. Ví dụ:
  + Bậc 1: Tặng sản phẩm
  + Bậc 2: Chiết khấu
  + Bậc 3: Tặng nhóm sản phẩm
* Ngân sách
  + Ngân sách Suất/Tiền: Không thay đổi rule cấu hình ngân sách và trừ ngân sách.
  + Ngân sách SP tặng: Không thay đổi rule trừ ngân sách. Khi đồng bộ dữ liệu từ cấu hình, Không đồng bộ các gói KM có hình thức Giảm giá hoặc chiết khấu sang ngân sách

| Khuyến mãi ontop | Khuyến mãi bình thường | Khuyến mãi Hương Thủy |
| --- | --- | --- |
|  |  |  |