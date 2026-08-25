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

**Đường dẫn:** Quản lý bán hàng → Tổng hợp đơn hàng điểm bán

| Màn hình | Mô tả |
| --- | --- |
|  | **Mô tả****:**Tại màn hình xem chi tiết đơn hàng, Bổ sung cột thông tin lô tại các dòng khuyến mãi.   * Nếu CTKM tặng tiền/chiết khấu, hiển thị "-". * Nếu CTKM tặng sản phẩm, hiển thị icon Xem thông tin lô. Khi click vào nút Xem thông tin lô → hệ thống hiển thị Popup **Thông tin lô**.      | Trường thông tin | Định dạng | Mô tả chi tiết | | --- | --- | --- | | Số lô | Text | Hiển thị số lô của sản phẩm | | Số lượng | Text | Hiển thị số lượng của lô sản phẩm tương ứng. | | Hạn sử dụng | Text | Hiển thị hạn sử dụng của lô sản phẩm tương ứng.  Định dạng là DD-MM-YYYY | | Nút "Đóng" | Button | Bấm Đóng → Hệ thống đóng popup. | |