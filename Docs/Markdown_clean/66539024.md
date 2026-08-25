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

Lưu ý

Tài liệu promotion Lot date: 2.6 - Khuyến mãi Lô - Date

Đối tượng áp dụng:

* KM Ontop, KM Bình thường
* Chỉ áp dụng cho đơn Sell-out
* Áp dụng cho KM bâc thang và KM không bậc thang
* Áp dụng cho tất cả điều kiện trừ điều kiện Tổng giá trị đơn hàng.
* Hình thức KM: Tặng sản phẩm cùng loại, Tặng sản phẩm trong nhóm

Các điều chỉnh trong tài liệu này áp dụng cho đơn hàng bình thường (không áp dụng cho đơn Vansales)

Thông tin Lot/date trên CTKM đơn hàng bán sẽ tuân theo config:

DISPLAY\_LOT\_DATE\_IN\_SALES\_ORDER

* Config Bật → Hiển thị thông tin lot/date trên đơn hàng
* Config Tắt → Không hiển thị thông tin lot/date trên đơn hàng

[ALLOW\_EXPIRED\_PRODUCT\_ORDER](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66525466 "Follow link")

* Nếu config nhập số >=0 → Chỉ load các lô có (HSD - Ngày trên đơn) >= số đã nhập.
* Nếu nhập số <0 → Load tất cả các lô không quan tâm hạn sử dụng.

→ Nếu promotion gửi Ngày hết hạn (Cấu hình) < Ngày hết hạn có thể lên đơn → hệ thống sẽ trả tồn kho = 0

Chỉnh sửa số suất của CTKM có lot date được tuân theo config:

* Cho phép chỉnh sửa số suất: Enable trường "Số suất" của CTKM, cho phép chỉnh sửa sao cho < hoặc = số suất tối đa
* Không cho phép chỉnh sửa số suất: Disable trường "Số suất" của CTKM, không cho phép chỉnh sửa.

## 1. Chỉnh sửa số suất CTKM lot date

Đối với CTKM lot date, phải tuân theo config "Cho phép chỉnh sửa số suất"

* **Có:** Cho phép chỉnh sửa số suất của CTKM
* **Không**: Không cho phép chỉnh sửa số suất, chỉ được chọn hoặc bỏ chọn CTKM. Vẫn xét tiếp rule giảm trừ cho các KM tiếp theo. Vẫn cho phép chọn số suất của các sản phẩm trong CTKM.

## 2. Thông tin lô trên sản phẩm tặng

### Mô tả: Khi áp dụng khuyến mãi trên đơn hàng sell out, khi promotion gửi thông tin sản phẩm tặng, hệ thống hiển thị thông tin lô từng sản phẩm theo quy tắc lấy số lượng theo lô sản phẩm bên dưới.

#### Quy tắc lấy số lượng theo lô sản phẩm

Số lượng của sản phẩm theo từng lô hiển thị theo quy tắc sau:

* Nếu CTKM là khuyến mãi lot - date,
  + Khi get list promotion trên đơn, promotion sẽ gửi thêm tiêu chí kèm mức độ ưu tiên (tối đa 3 mức) đối với CTKM lot/date, hệ thống dựa vào tiêu chí và độ ưu tiên để hiển thị danh sách lô hợp lệ của sản phẩm trả và phân bổ số lượng theo từng lô dựa vào số lượng user nhập và quy tắc FEFO (hết hạn trước xuất trước) → FIFO (nhập kho trước xuất trước) tại ngày đặt hàng.
  + Sau khi giảm trừ, promotion sẽ trả thông tin SL sản phẩm theo từng lô, hệ thống hiển thị theo kết quả trả về.
* Nếu CTKM không là khuyến mãi lot - date, hệ thống đề xuất theo quy tắc FEFO (hết hạn trước xuất trước) → FIFO (nhập kho trước xuất trước) tại ngày đặt hàng như sản phẩm chính trên đơn hàng.

#### Các tiêu chí và mức độ ưu tiên (áp dụng cho CTKM lot-date)

**Tiêu chí 1:** Sản phẩm có Hạn sử dụng cố định (Ưu tiên 1)

* Promotion trả về Hạn sử dụng cố định → hệ thống lọc và hiển thị các lô có hạn sử dụng trùng khớp theo điều kiện. Nếu có nhiều lô thỏa mãn, hệ thống phân bổ theo quy tắc FEFO → FIFO tại thời điểm đặt hàng.
* Ví dụ: Promotion trả về Hạn sử dụng = 01/09/2025. Tại thời điểm đặt hàng (24/07/2025), kho còn 3 lô sản phẩm A:

  + Lô A1: HSD 01/09/2025 – còn 100 sp
  + Lô A2: HSD 05/09/2025 – còn 200 sp
  + Lô A3: HSD 10/08/2025 – còn 50 sp

**→ Kết quả:** Hệ thống chỉ chọn lô A1 vì đúng hạn sử dụng yêu cầu.

**Tiêu chí 2:** Sản phẩm có Hạn sử dụng thuộc khoảng thời gian (Ưu tiên 2)

* Điều kiện khuyến mãi yêu cầu sản phẩm tặng có hạn sử dụng nằm trong một khoảng thời gian (ví dụ: từ 01/08/2025 đến 15/08/2025), promotion trả về khoảng thời gian → hệ thống lọc danh sách các lô thỏa điều kiện khoảng ngày (Ngày hết hạn từ ≤ Ngày hết hạn ≤ Ngày hết hạn đến) và phân bổ số lượng theo thứ tự FEFO → FIFO cho đến khi đủ số lượng tặng tại thời điểm đặt hàng.
* Ví dụ:

  + Điều kiện CTKM: Tặng sản phẩm A nếu mua đủ sản phẩm B, với yêu cầu HSD của sản phẩm A phải nằm trong 01/08/2025 – 15/08/2025.

* + Các lô trong kho:

    - Lô A1: HSD 01/08/2025 – còn 50 sp
    - Lô A2: HSD 10/08/2025 – còn 100 sp
    - Lô A3: HSD 20/08/2025 – còn 200 sp

**→ Kết quả:** Hệ thống chọn lô A1 và A2 theo FEFO → FIFO (ưu tiên lô A1 trước).

**Tiêu chí 3:** Sản phẩm có lot-date chỉ định (Ưu tiên 3)

* Promotion trả về danh sách các lô chỉ định → hệ thống chỉ hiển thị các lô đúng với danh sách mã lot được chỉ định. Nếu có nhiều lô chỉ định, hệ thống phân bổ theo quy tắc FEFO → FIFO tại thời điểm đặt hàng.
* Ví dụ: Tặng sản phẩm A lot A123 và A124 nếu mua đủ sản phẩm B. Các lô trong kho:
  + Lot A123: HSD 15/08/2025 – còn 100 sp
  + Lot A124: HSD 20/08/2025 – còn 50 sp
  + Lot A125: HSD 25/08/2025 – còn 200 sp

**→ Kết quả:** hệ thống chỉ chọn A123 và A124 theo FEFO → FIFO nếu cần phân bổ số lượng.

**Trường hợp promotion trả về nhiều tiêu chí**, hệ thống sẽ xử lý như sau:

* Hệ thống ưu tiên sử dụng các lô thỏa mãn tiêu chí ở mức ưu tiên cao nhất trước.
* Nếu tổng số lượng các lô ở mức ưu tiên hiện tại chưa đủ để đáp ứng số lượng tặng, hệ thống mới xét đến tiêu chí ở mức ưu tiên tiếp theo.
* Việc phân bổ trong từng mức ưu tiên được thực hiện theo quy tắc FEFO → FIFO, dựa trên hạn sử dụng và ngày nhập kho tại thời điểm đặt hàng.

*Ví dụ minh họa:*

* Ngày đặt hàng: 24/07/2025
* Số lượng cần tặng: 80 sản phẩm
* Điều kiện CTKM:
  + Ưu tiên 1: HSD = 01/09/2025
  + Ưu tiên 2: HSD từ 25/08 đến 05/09/2025
  + Ưu tiên 3: Lot A4
* Dữ liệu tồn kho:

| Số lô | HSD | Ngày nhập kho | Số lượng tồn |
| --- | --- | --- | --- |
| A1 | 01/09/2025 | 22/07/2025 | 30 |
| A1 | 01/09/2025 | 25/07/2025 | 20 |
| A2 | 27/08/2025 | 15/07/2025 | 30 |
| A3 | 03/09/2025 | 26/07/2025 | 20 |
| A4 | 06/09/2025 | 01/07/2025 | 30 |
| A5 | 07/09/2025 | 29/07/2025 | 10 |

* Phân bổ theo quy tắc:
  + Bước 1 – Xét theo ưu tiên 1 (HSD = 01/09/2025):
    - Hệ thống kiểm tra các lô có hạn sử dụng đúng 01/09/2025.
    - Trong số đó:

      * Lô A1 nhập ngày 22/07/2025 → hợp lệ vì đã nhập kho trước ngày đặt hàng → phân bổ 30 sản phẩm.
      * Lô A1 nhập ngày 25/07/2025 →bị loại vì ngày nhập kho sau ngày đặt hàng (24/07/2025).
  + Bước 2 – Chuyển sang ưu tiên 2 (HSD từ 25/08 đến 05/09/2025):

    - Hệ thống tiếp tục tìm các lô có hạn sử dụng nằm trong khoảng yêu cầu.
    - Kết quả:

      * Lô A2 nhập ngày 15/07/2025 → hợp lệ →được sử dụng, phân bổ 30 sản phẩm.
      * Lô A3 nhập ngày 26/07/2025 → bị loại vì nhập sau ngày đặt hàng.
  + Bước 3 - Chuyển sang ưu tiên 3 (Lot A4, A5)
    - Hệ thống phân bổ sản phẩm vào Lot A4, Lot A5
    - Trong số đó:
      * Lô A4 nhập ngày 01/07/2025 → hợp lệ →được sử dụng, phân bổ 20 sản phẩm.
      * Lô A5 nhập ngày 29/07/2025 → bị loại vì nhập sau ngày đặt hàng.
* Hiển thị trên thông tin lô

| Số lô | HSD | Số lượng |
| --- | --- | --- |
| A1 | 01/09/2025 | 30 |
| A2 | 27/08/2025 | 50 |
| A4 | 06/09/2025 | 20 |

Giao diện

#### 1. Màn hình Khuyến mãi khả dụng, Màn hình Khuyến mãi đã giảm trừ

| Màn hình | Mô tả |
| --- | --- |
|  | Bổ sung cột thông tin lô tại các dòng sản phẩm tặng. Khi click vào nút Xem thông tin lô → hệ thống hiển thị Popup **Thông tin lô**.     | Trường thông tin | Định dạng | Mô tả chi tiết | | --- | --- | --- | | * Danh sách thông tin lô chỉ hiển thị các lô được phân bổ số lượng theo quy tắc mô tả ở trên. * Nếu số lượng sản phẩm = 0 → danh sách thông tin lô trống thì hiển thị thông báo trên popup như sau: *"Thông tin lô trống vì số lượng sản phẩm = 0. Vui lòng nhập số lượng để kiểm tra các lô được nhận."* | | | | Số lô | Text | Hiển thị số lô của sản phẩm | | Số lượng | Text | Hiển thị số lượng của lô sản phẩm tương ứng | | Hạn sử dụng | Text | Hiển thị hạn sử dụng của lô sản phẩm tương ứng.  Định dạng là DD-MM-YYYY | | Nút "Đóng" | Button | Bấm Đóng → Hệ thống đóng popup. | |

#### 2. Màn hình Xem chi tiết đơn hàng/Tạo mới/Chỉnh sửa đơn hàng - CTKM đã áp dụng

| Màn hình | Mô tả |
| --- | --- |
|  | Bổ sung cột thông tin lô tại các dòng sản phẩm tặng.   * Nếu CTKM tặng tiền/chiết khấu, hiển thị "-". * Nếu CTKM tặng sản phẩm, hiển thị icon Xem thông tin lô. Khi click vào nút Xem thông tin lô → hệ thống hiển thị Popup **Thông tin lô**.      | Trường thông tin | Định dạng | Mô tả chi tiết | | --- | --- | --- | | Số lô | Text | Hiển thị số lô của sản phẩm | | Số lượng | Text | Hiển thị số lượng của lô sản phẩm tương ứng. | | Hạn sử dụng | Text | Hiển thị hạn sử dụng của lô sản phẩm tương ứng.  Định dạng là DD-MM-YYYY | | Nút "Đóng" | Button | Bấm Đóng → Hệ thống đóng popup. | |

### Cập nhật logic xử lý

Khi lưu đơn hàng, hệ thống thực hiện kiểm tra như hiện tại ([Lưu đơn hàng khuyến mãi](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53026757#:~:text=L%C6%B0u%20%C4%91%C6%A1n%20h%C3%A0ng%20khuy%E1%BA%BFn%20m%C3%A3i)):

* Nếu thành công, thêm mới/chỉnh sửa đơn hàng & lưu KM & cập nhật logic [Cập nhật tồn kho khuyến mãi](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53026757#:~:text=v%E1%BB%9Bi%20%C4%91%C6%A1n%20h%C3%A0ng-,C%E1%BA%ADp%20nh%E1%BA%ADt%20t%E1%BB%93n%20kho%20khuy%E1%BA%BFn%20m%C3%A3i,-L%E1%BA%A5y%20danh%20s%C3%A1ch) mới như sau:
  + Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng trên CTKM. Công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong đơn hàng.
  + Thực hiện cộng số lượng tạm giữ tương ứng với số lượng đã được nhập từ đơn hàng. Công thức: Tạm giữ = Tạm giữ hiện tại + Số lượng tặng sản phẩm.
* Nếu tồn kho sản phẩm không đáp ứng => cập nhật lại số lượng từng lô của sản phẩm theo Quy tắc lấy số lượng theo lô sản phẩm.