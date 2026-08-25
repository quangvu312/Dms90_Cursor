# Requirement

## Tạo phiếu trả hàng nguyên đơn khuyến mãi

* Khi Điểm bán trả hàng nguyên đơn sellout về cho nhà phân phối, đồng thời trả hàng khuyến mãi tương ứng

* Đường dẫn: Quản lý bán hàng | Điểm bán trả hàng nguyên đơn | Thêm mới

**Wireframe**

**Mô tả chi tiết**

Để thực hiện trả hàng khuyến mãi, người dùng chọn 1 đơn hàng sellout

Nếu đơn hàng trên không áp dụng khuyến mãi tặng sản phẩm → Ẩn section Khuyến mãi

Ngược lại hiển thị section Khuyến mãi gồm danh sách các chương trình khuyến mãi có gói khuyến mãi là Tặng sản phẩm (các chương trình khuyến mãi không có tặng sản phẩm không hiển thị)

| UI | Type | Description |
| --- | --- | --- |
| Tên chương trình khuyến mãi | Text | Hiển thị tên chương trình khuyến mãi  Tối đa 100 ký tự, nếu dài hơn → hiển thị truncated. Khi hover → hiển thị tooltips đầy đủ nội dung |
| Thể lệ chương trình | Icon | Hiển thị icon "i" → khi hover → Hiển thị nội dung thể lệ chương trình khuyến mãi |
| Kho xuất hàng khuyến mãi | Input Disabled | Mặc định hiển thị tên kho xuất hàng khuyến mãi  Người dùng chỉ xem, không được thay đổi |
| **Table sản phẩm trả thưởng**  Chỉ hiển thị các sản phẩm trả thưởng có số lượng > 0 | | |
| Mã sản phẩm | Text | Hiển thị mã SKU |
| Tên sản phẩm | Text | Hiển thị tên sản phẩm |
| Số lượng | Input Disabled | Hiển thị số lượng sản phẩm trả thưởng |
| Đơn vị | Text | Hiển thị đơn vị sản phẩm được chọn khi áp dụng khuyến mãi |
| Thông tin lô | Icon | Khi click vào → hiển thị Popup Thông tin lô với :   * Số lượng * Số lô * Hạn sử dụng   Nút "Đóng" → Đóng Popup Thông tin Lô và quay về **Table Sản phẩm trả thưởng** |
| Nút "Đóng" | Button | Popup Màn hình xác nhận   * Nhấn "Đóng" → Đóng màn hình xác nhận * Nhấn "Lưu" → Đóng màn hình xác nhận & màn hình Thêm mới → Kết thúc luồng |
| Nút "Lưu" | Button | * Thực hiện luồng Tạo phiếu Trả hàng nguyên đơn * Lưu các sản phẩm khuyến mãi trong trả hàng nguyên đơn |

## Chỉnh sửa phiếu trả hàng nguyên đơn khuyến mãi

* Đường dẫn: Quản lý bán hàng | Điểm bán trả hàng nguyên đơn | Chọn Chỉnh sửa 1 phiếu trả hàng

**Wireframe**

**Tương tự như Luồng Thêm mới phiếu trả hàng khuyến mãi**

| UI | Type | Description |
| --- | --- | --- |
| Nút Lưu | Button | Hệ thống thực hiện :   * Xóa các sản phẩm khuyến mãi trong phiếu trả hàng đã tạo trước đó * Thêm mới các sản phẩm khuyến mãi trong phiếu trả hàng |

## Xem chi tiết phiếu trả hàng khuyến mãi

**Wireframe**

Tương tự như Luồng Thêm mới phiếu trả hàng, người dùng không được thực hiện chỉnh sửa

## Duyệt phiếu trả hàng khuyến mãi

| Action | Description |
| --- | --- |
| Đường dẫn | Quản lý bán hàng | Điểm bán trả hàng nguyên đơn | Duyệt 1 phiếu trả hàng |
| Duyệt phiếu trả hàng | Khi HO thực hiện duyệt phiếu trả hàng khuyến mãi, hệ thống thực hiện:   * Revert tất cả khuyến mãi ứng với đơn hàng Sellout qua Promotion |
|  |  |