|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Enhance thêm thông tin tại chức năng:  Truy vấn tọa độ nhân viên:  Tại popup "Xem thông tin lịch sử di chuyển nhân viên → Chọn điểm bán → Bổ sung thêm Doanh số trước VAT và Doanh thu sau VAT trong popup thông tin điểm bán |
| Document version | RedV1.0.0  RedV1.0.1 Ẩn chức năng lọc đơn hàng theo trạng thái như hình |
| Document status | GreenDONE |
| Document owner | Thao.nguyen@finviet.com.vn |
| Chage History | 2 |

truenone

Liên quan đến chức năng [HO] Truy vấn tọa độ nhân viên

BRD: BRD [HƯƠNG THỦY] ENHANCE THÔNG TIN ĐIỂM BÁN

Nội dung bổ sung: Bổ sung thêm Doanh số trước VAT; Doanh số sau VAT trong popup thông tin trên màn hình, bổ sung bộ lọc "Trạng thái đơn hàng":

# Truy vấn tọa độ nhân viên

Quy tắc tính doanh số

* Quy tắc tính doanh số:
  + Tính tổng doanh số của sản phẩm trên đơn hàng được nhân viên đặt hàng trong khoảng thời gian được chọn.
  + Đơn hàng hợp lệ để tính toán phải thỏa tất cả các điều kiện như
    - Theo điều kiện được mô tả ở [Công thức tính doanh số](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DBáoCáo-Côngthứctínhdoanhsố)
    - Nguồn đơn hàng: Đơn hàng được tạo nhân viên tạo trên app (Trong tuyến, ngoại tuyến, chăm sóc) và trên web có chọn thông tin nhân viên
    - Trạng thái đơn hàng: Trạng thái được chọn ở trường "Trạng thái đơn hàng" ở bộ lọc

| Tên Trường | Loại Dữ Liệu | Chỉnh Sửa? | Bắt Buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Bộ lọc | | | | |
| Trạng thái đơn hàng | Selectbox multichoice | Có | Không | * **Mở danh sách**:    + Khi người dùng nhấp vào trường "Trạng thái đơn hàng" hiển thị danh sách tất cả trạng thái đơn hàng, trừ trạng thái Hủy.   + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn * **Tìm kiếm và chọn:**    + Người dùng có thể tìm kiếm bằng cách lọc nhanh theo Tên Trạng thái đơn hàng   + Người dùng có thể chọn nhiều Trạng thái đơn hàng để lọc dữ liệu   + Trường hợp không có Trạng thái đơn hàng nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * **Hiển thị lựa chọn:**     + Trạng thái đơn hàng đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags).   + Trường hợp bỏ chọn Trạng thái đơn hàng trong hộp chọn thì hiểu là chọn tất cả các Trạng thái đơn hàng trong hộp chọn   + Các trạng thái đơn hàng được chọn sẽ được tính theo điều kiện "**Hoặc**"     - Nghĩa là sẽ lấy tất cả các dữ liệu có trạng thái được chọn.     - Ví dụ lấy đơn hàng có trạng thái Đã duyệt hoặc Đã xuất kho * **Kết quả lọc:**    + Thông tin các cột "**Điểm bán viếng thăm trong tuyến có đơn hàng**", "**Điểm bán viếng thăm ngoại tuyến có đơn hàng**", "**Doanh số trước VAT**", "**Doanh số sau VAT**" sẽ được tính toán dựa trên trạng thái được chọn ở trường này. * **Xóa lựa chọn:**    + Người dùng có thể nhấp vào biểu tượng xóa trên các nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Trạng thái đơn hàng không mong muốn. |

## Danh sách nhân viên

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Doanh số trước VAT | Datacolums | Không | Không | * Doanh số: Xem quy tắc tính doanh số   + Hiển thị thông tin Doanh số của nhân viên đang chọn trong ngày được chọn.   + Format tiền tệ hàng nghìn.   + Quy tắc tính doanh số **Doanh số trước VAT** |
| Doanh số sau VAT | Datacolums | Không | Không | * Doanh số:    + Hiển thị thông tin Doanh số của nhân viên đang chọn trong ngày được chọn.   + Format tiền tệ hàng nghìn.   + Quy tắc tính: **Doanh số sau VAT** |

## Danh sách điểm bán

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Doanh số trước VAT | Datacolums | Không | Không | * Doanh số: Xem quy tắc tính doanh số   + Hiển thị thông tin Doanh số đặt hàng của điểm bán mà nhân viên đã đặt trong ngày được chọn.   + Format tiền tệ hàng nghìn.   + Quy tắc tính doanh số **Doanh số trước VAT** |
| Doanh số sau VAT | Datacolums | Không | Không | * Doanh số:    + Hiển thị thông tin Doanh số đặt hàng của điểm bán mà nhân viên đã đặt trong ngày được chọn.   + Format tiền tệ hàng nghìn.   + Quy tắc tính: **Doanh số sau VAT** |

## Danh sách đơn hàng

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Doanh số trước VAT | Datacolums | Không | Không | * Doanh số: Xem quy tắc tính doanh số   + Hiển thị thông tin doanh số của đơn hàng.   + Format tiền tệ hàng nghìn.   + Quy tắc tính doanh số **Doanh số trước VAT** |
| Doanh số sau VAT | Datacolums | Không | Không | * Doanh số:    + Hiển thị thông tin doanh số của đơn hàng.   + Format tiền tệ hàng nghìn.   + Quy tắc tính: **Doanh số sau VAT** |

RedV1.0.1 Ẩn chức năng lọc đơn hàng theo trạng thái như hình

# Thông tin nhân viên

Chọn icon  trên bản đồ → hiển thị popup theo nhân viên

Mô tả

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Doanh số trước VAT | Datacolums | Không | Không | * Doanh số: Xem quy tắc tính doanh số   + Hiển thị thông tin Doanh số của nhân viên đang chọn trong ngày được chọn.   + Format tiền tệ hàng nghìn.   + Quy tắc tính doanh số **Doanh số trước VAT** |
| Doanh số sau VAT | Datacolums | Không | Không | * Doanh số:    + Hiển thị thông tin Doanh số của nhân viên đang chọn trong ngày được chọn.   + Format tiền tệ hàng nghìn.   + Quy tắc tính: **Doanh số sau VAT** |

# Thông tin lịch sử di chuyển nhân viên

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Doanh số trước VAT | Datacolums | Không | Không | * Doanh số: Xem quy tắc tính doanh số   + Hiển thị thông tin Doanh số đặt hàng của điểm bán mà nhân viên đã đặt trong ngày được chọn.   + Format tiền tệ hàng nghìn.   + Hiển thị tiền tệ VND: 'đ' sau giá trị   + Quy tắc tính doanh số **Doanh số trước VAT** |
| Doanh số sau VAT | Datacolums | Không | Không | * Doanh số:    + Hiển thị thông tin Doanh thu của điểm bán mà nhân viên đã đặt trong ngày được chọn.   + Format tiền tệ hàng nghìn.   + Hiển thị tiền tệ VND: 'đ' sau giá trị   + Quy tắc tính: **Doanh số sau VAT** |