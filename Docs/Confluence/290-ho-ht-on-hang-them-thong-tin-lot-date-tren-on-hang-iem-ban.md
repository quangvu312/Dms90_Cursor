|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-3156 |
| Epic |  |
| Feature |  |
| Description | Điều chỉnh các thông tin:  Thêm thông tin lot/date trên đơn hàng |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Lưu ý

Các điều chỉnh trong tài liệu này áp dụng cho đơn hàng bình thường (không áp dụng cho đơn Vansales)

Thông tin Lot/date trên đơn hàng sẽ tuân theo config: DISPLAY\_LOT\_DATE\_IN\_SALES\_ORDER

* Config Bật → Hiển thị thông tin lot/date trên đơn hàng và cho phép người dùng điều chỉnh
* Config Tắt → Không hiển thị thông tin lot/date trên đơn hàng và lot/date lấy theo mặc định của hệ thống

## Xem chi tiết đơn hàng

**Đường dẫn:** Tổng hợp đơn hàng điểm bán → Xem chi tiết

**Mô tả:** Tại màn hình Xem chi tiết đơn hàng, bổ sung cột Thông tin lô với thông tin chi tiết gồm:

| Tên trường thông tin | Định dạng | Mô tả chi tiết |
| --- | --- | --- |
| Số lượng | Text | Hiển thị số lượng |
| Có sẵn | Text | Hiển thị số có sẵn  Với phiếu ở trạng thái "Đã hủy", "Đã duyệt" → Hiển thị số lượng có sẵn  Với phiếu ở trạng thái "Khởi tạo" → hiển thị số lượng có sẵn = có sẵn + số lượng trên đơn. |
| Số lô | Text | Hiển thị số lô |
| Hạn sử dụng | Text | Hiển thị định dạng DD-MM-YYYY |
| Nút Đóng | Button | Nhấn nút đóng → hệ thống đóng popup "Xem thông tin lô" |