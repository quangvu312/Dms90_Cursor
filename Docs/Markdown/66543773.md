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

Tài liệu promotion đồng giá: 2.7 - Khuyến mãi đồng giá

Đối tượng áp dụng:

* KM Ontop, KM Bình thường
* Chỉ áp dụng cho đơn Sell-out
* Áp dụng cho KM không bậc thang, KM lot-date
* Điều kiện sản phẩm: Tặng sản phẩm cùng loại, Sản phẩm trong nhóm
* Điều kiện mua: Số lượng mỗi loại SP
* Hình thức KM: Giảm giá (promotion bổ sung hình thức: Khuyến mãi đồng giá.

Mô tả:

Khi áp dụng chương trình khuyến mãi đồng giá trên đơn hàng **Sell-out**, promotion trả về số tiền giảm giá tương ứng với từng chương trình khuyến mãi. Hệ thống sẽ nhận và hiển thị giá trị trả về tương tự với CTKM có hình thức giảm tiền như sau:

|  |  |  |
| --- | --- | --- |
|  | **Thông tin chung của scheme** | **Thông tin trả thưởng** |
| Đồng giá | * Tên CTKM * Chi tiết CTKM: Click vào icon infor → hiển thị chi tiết thể lệ CTKM. * Số suất tối đa: Do promotion trả về, mặc định = 1 * Số suất = Số suất tối đa * Số lượng = 0 * Thành tiền: Mặc định là Thành tiền khuyến mãi được Promotion trả về. | * Mã sản phẩm: N/A * Tên sản phẩm: N/A * Giảm giá: Tổng số tiền được giảm do Promotion trả về. Tổng số tiền được giảm được promotion tính trên công thức:   = SUM(giá gốc - giá đồng giá) \* SL) của tất cả sản phẩm đồng giá.   * Đơn vị: VND * Tồn kho: N/A |