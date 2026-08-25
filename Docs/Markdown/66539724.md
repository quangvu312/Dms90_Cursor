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

# Khuyến mãi kết hợp nhiều scheme theo phân cấp

Lưu ý

Chức năng khuyến mãi này chỉ áp dụng cho Hương Thủy, không áp dụng cho Core DMS90

Link UIUX:

| Màn hình | **Mô tả** |
| --- | --- |
|  | Các scheme chương trình khuyến mãi bình thường từ Hương Thủy sẽ hiển thị:   * Disable checkbox check chọn * Không hiển thị số suất và số suất tối đa * Chỉ được chọn sản phẩm khi có hình thức tặng nhóm, chỉ chọn sản phẩm, không điều chỉnh số lượng * Chỉ chọn sản phẩm sao cho đủ số lượng sản phẩm từ ERP trả về (Max Item), nếu chọn quá số lượng hiển thị thông báo: Chỉ được chọn n sản phẩm! * Các hình thức tặng khác sẽ nhận toàn bộ từ Hương Thủy trả về, chỉ xem thông tin, không chỉnh sửa.     **Các scheme chương trình khuyến mãi kết hợp đồng thời các sheme khác theo phân cấp, sẽ hiển thị:**   * Enable checkbox chọn (User có thể không chọn) * Không hiển thị số suất và số suất tối đa * Chỉ được chọn sản phẩm khi có hình thức tặng nhóm, chỉ chọn sản phẩm, không điều chỉnh số lượng * Chỉ chọn sản phẩm sao cho đủ số lượng sản phẩm từ ERP trả về (Max Item), nếu chọn quá số lượng hiển thị thông báo: Chỉ được chọn n sản phẩm! * Hiển thị số lượng CTKM kết hợp đồng thời đi kèm dưới dạng các số [1] [2] [3]... * Khi chọn CTKM cha có thể check chọn CTKM đi kèm (có thể không chọn KM đi kèm)   + Khi chọn CTKM đi kèm, nếu CTKM đi kèm có đi kèm CTKM khác nữa thì sẽ hiển thị rã xuống 1 cấp   + Tương tự nếu có n cấp khác bên dưới     Thay đổi UI Chi tiết khuyến mãi   * Hiện tại: Khi chọn Chi tiết khuyến mãi, chi tiết khuyến mãi sẽ rã xuống dưới * Cần điều chỉnh:   + Khi chọn Chi tiết khuyến mãi → Sẽ mở màn hình phụ Chi tiết khuyến mãi, màn hình phụ bao gồm:     - Thông tin CTKM     - Hình thức tặng CTKM     - Rule chọn quà và mở rộng/thu gọn giao diện giữ như cũ. |