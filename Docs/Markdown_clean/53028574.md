|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management Systemissuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolutionkey,summary,type,created,updated,due,assignee,reporter,priority,status,resolution70327f0f-d77b-320c-9607-8ab3659b722fECD-1050  Finviet - Management Systemissuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolutionkey,summary,type,created,updated,due,assignee,reporter,priority,status,resolution70327f0f-d77b-320c-9607-8ab3659b722fECD-1135 |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Lịch sử tài liệu**

3

**Backlog**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  | nhi.pham | Tạo mới tài liệu |
| 2 | 1.0.1 | 8/4/2025 | nhi.pham | Bổ sung đơn vansales vào báo cáo |

## **Description**

## **Requirements**

### Xem Báo cáo Tổng hợp đơn hàng

Danh sách báo cáo tổng hợp đơn hàng sắp xếp theo *thời gian trên đơn hàng/phiếu trả hàng* từ gần nhất →  xa nhất

* Nếu 1 ngày có nhiều đơn/phiếu, danh sách đơn hàng sắp xếp theo Mã đơn hàng từ lớn đến nhỏ
  + Nếu 1 đơn hàng có DS sản phẩm và có CTKM thì: Sắp xếp theo Danh sách sản phẩm mua/trả hàng → Danh sách CTKM
    - Nếu 1 đơn hàng có nhiều CTKM: sắp xếp thứ tự các CTKM như trên đơn hàng/phiếu
    - Nếu CTKM vừa tặng sản phẩm vừa có chiết khấu: Sắp xếp từ danh sách sản phẩm tặng -> chiết khấu
    - Nếu DS sản phẩm mua/ sản phẩm tặng trên CTKM có nhiều sản phẩm và nhiều lô (nếu có): sắp xếp thứ tự các sản phẩm và lô như trên đơn hàng/phiếu.

**Ví dụ:**

| Ngày đặt hàng | Mã đơn hàng | Tên sản phẩm | Lô | HSD | Tên CTKM | Chiết khấu | ... |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8/4/2025 | SO005 | Bánh mì | LO01 | 1/1/2030 | - | - |  |
| 8/4/2025 | SO005 | Bánh mì | LO02 | 1/1/2034 | - | - |  |
| 8/4/2025 | SO005 | Bánh kem | LO11 | 1/1/2029 | CTKM 01 tháng 4/2025 | - |  |
| 8/4/2025 | SO005 | - | - | - | CTKM 01 tháng 4/2025 | 100.000 |  |
| 8/4/2025 | SO005 | - | - | - | CTKM 02 tháng 4/2035 | 250.000 |  |
| 8/4/2025 | SO003 | Kem đánh răng | LO123 | 1/1/2025 | - | - |  |
| 7/4/2025 | SO001 | Sữa milo | LO0 | 11/1/2030 | - | - |  |
| 7/4/2025 | SO001 | Bánh kem | LO11 | 1/1/2029 | CTKM 01 tháng 4/2025 | - |  |

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Báo cáo → Báo cáo phân tích → Tổng hợp đơn hàng bán |
| Màn hình Báo cáo tổng hợp đơn hàng |  | 1. Tìm kiếm  * Tìm kiếm theo Mã đơn hàng/Mã phiếu trả hàng: tìm kiếm like thông tin được nhập (tối đa là 500 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Kênh:    + Gồm các kênh bán hàng   + Mặc định trống   + Cho phép chọn nhiều kênh   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kênh bán hàng   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Ngày tạo: Từ ngày - Đến ngày, hiện thị theo format: dd/mm/yyyy   + Mặc định filter từ đầu tháng → ngày hiện tại   + Chỉ cho phép chọn *"Đến ngày"*từ ngày *"Từ ngày"* trở đi * Trạng thái   + Lọc báo cáo thỏa: Phiếu sellout / Phiếu trả nguyên đơn/Phiếu trả lẻ có trạng thái được chọn   + Danh sách trạng thái lọc: Khởi tạo, Đã duyệt, Đã hủy   + Click vào Input & nhập keyword-> Hệ thống popup danh sách trạng thái like keyword được nhập   + Được chọn nhiều trạng thái   + Giá trị mặc định là trống * Loại đơn hàng   + Lọc báo cáo thỏa: Record thuộc loại đơn hàng được chọn   + Danh sách loại đơn hàng: Đơn hàng bán, Trả hàng nguyên đơn, Trả hàng lẻ, Đơn vansales   + Click vào Input & nhập keyword-> Hệ thống popup danh sách trạng thái like keyword được nhập   + Được chọn nhiều loại đơn hàng   + Giá trị mặc định là trống * Nút **Tìm kiếm**: Click vào nút -> thực hiện tìm kiếm theo điều kiện lọc   2. Báo cáo Tổng hợp đơn hàng  Bao gồm các đơn hàng sell-out, điểm bán trả hàng nguyên đơn, điểm bán trả lẻ   * Đơn vị kinh doanh: Dữ liệu lấy từ thông tin sản phẩm tương ứng trong đơn hàng * Kênh: Kênh bán hàng của NPP * Vùng bán hàng: Dữ liệu lấy từ vùng bán hàng của NPP * Khu vực bán hàng: Dữ liệu lấy từ khu vực bán hàng của NPP * Tên địa bàn BH: Là Quận/Huyện và Tỉnh/thành trong địa chỉ của điểm bán. Hiển thị theo format *<Tỉnh/Thành - Quận/Huyện>* * Mã tuyến bán hàng: Dữ liệu lấy từ thông tin tuyến bán hàng mà NPP được gán * Tên tuyến bán hàng: Dữ liệu lấy từ thông tin tuyến bán hàng mà NPP được gán * Mã NVBH: Dữ liệu lấy từ thông tin của đơn hàng Sell-out, đối với các đơn hàng khác → hiển thị rỗng * Tên NVBH: Dữ liệu lấy từ thông tin của đơn hàng Sell-out, đối với các đơn hàng khác → hiển thị rỗng * SDT của sale: Dữ liệu lấy từ thông tin của NVBH trong đơn hàng, đối với các đơn hàng khác  → hiển thị rỗng * Mã khách hàng: Dữ liệu lấy từ thông tin của điểm bán trong đơn hàng/phiếu trả hàng * Tên khách hàng: Dữ liệu lấy từ thông tin của điểm bán trong đơn hàng/phiếu trả hàng * Loại điểm bán: Dữ liệu lấy từ thông tin của điểm bán trong đơn hàng/phiếu trả hàng * SDT điểm bán: Dữ liệu lấy từ thông tin của điểm bán trong đơn hàng/phiếu trả hàng * Địa chỉ điểm bán:Dữ liệu lấy từ thông tin của điểm bán trong đơn hàng/phiếu trả hàng * Phường/Xã: Dữ liệu lấy từ thông tin của điểm bán trong đơn hàng/phiếu trả hàng * Quận/Huyện: Dữ liệu lấy từ thông tin của điểm bán trong đơn hàng/phiếu trả hàng * Tỉnh/Thành phố: Dữ liệu lấy từ thông tin của điểm bán trong đơn hàng/phiếu trả hàng * Người tạo: Ngươì tạo đơn hàng/ phiếu trả hàng * Nguồn đơn hàng:   + Nếu đơn hàng được tạo từ app → hiển thị là APP   + Nếu đơn hàng được tạo từ portal → hiển thị là WEB * Ngày đặt hàng: = Ngày tạo đơn * Ngày bán hàng: = Thời gian book tồn kho, nếu không có → mặc định trống * Ngày giao hàng: = Thời gian trừ tồn kho, nếu không có → mặc định trống * Mã đơn: Mã đơn hàng tương ứng * Mã tham chiếu: Mặc định trống * Loại đơn hàng:    + Đơn hàng bán   + Điểm bán trả lẻ   + Điểm bán trả nguyên đơn   + Đơn vansales * Trạng thái đơn hàng: Trạng thái của đơn hàng * Nhóm sản phẩm: Dữ liệu lấy từ trường Tên nhóm sản phẩm, gồm các nhóm sản phẩm có chứa sản phẩm tương ứng   + Nếu SP thuộc nhiều nhóm sản phẩm, các nhóm sản phẩm phân biệt bằng dấu chấm phẩy ";", ví dụ: *Tieudung; Giadung; Vatdungnhabep*   + Nếu SP không thuộc nhóm sản phẩm nào, hiển thị trống * Ngành hàng: Dữ liệu lấy từ Phân cấp cấp 1 trong cây phân cấp của sản phẩm tương ứng * Nhãn hiệu: Dữ liệu lấy từ Phân cấp cấp 2 trong cây phân cấp của sản phẩm tương ứng * Mã SKU: Dữ liệu lấy từ thông tin của sản phẩm * Tên sản phẩm: Dữ liệu lấy từ thông tin của sản phẩm * ĐVT: lấy từ Đơn vị tính của sản phẩm trong đơn hàng/ phiếu trả hàng * Số lượng bán: lấy từ Số lượng của sản phẩm trong đơn hàng/phiếu trả hàng * Đơn giá: lấy từ Đơn giá của sản phẩm trong đơn hàng/phiếu trả hàng * Lô: Dữ liệu lấy từ Thông tin lô trong đơn hàng/phiếu trả hàng * Hạn sử dụng: Dữ liệu lấy từ Thông tin lô trong đơn hàng/phiếu trả hàng * Số lượng bán (theo lô): Dữ liệu lấy từ Thông tin lô trong đơn hàng/phiếu trả hàng * Số lượng KM: Dữ liệu lấy từ thông tin danh sách Khuyến mãi trong đơn hàng   + Nếu sản phẩm không phải là trả thưởng khuyến mãi → mặc định hiển thị là 0 * Tên CTKM: Tên CTKM có bao gồm sản phẩm được trả thưởng   + Nếu sản phẩm không phải là trả thưởng khuyến mãi → mặc định trống * VAT: Dữ liệu lấy từ thông tin của sản phẩm   + Nếu là sản phẩm khuyến mãi → mặc định trống * Thành tiền: Dữ liệu lấy tại thành tiền của theo sản phẩm tương ứng * Chiết khấu: Giá trị tiền chiết khấu theo từng CTKM, nếu khuyến mãi theo giảm % thì hiển thị số tiền được giảm (sau khi tính từ % sang giá trị tiền được giảm) * Tiền VAT (từng sản phẩm): Dữ liệu lấy tại cột *Tiền VAT* theo sản phẩm tương ứng trong đơn hàng * Chiết khẩu (% tưng sản phẩm): Mặc định = 0 * Thành tiền (tổng bill): Dữ liệu lấy từ thông tin *Tổng tiền trước VAT (VND) + VAT* trong đơn hàng * Tiền VAT (tổng bill): Dữ liệu lấy tại trường *VAT (VND)*trong đơn hàng * Chiết khấu (% tổng bill): Mặc định = 0 * Tiền chiết khấu (tổng bill): = Tổng tiền chiết khấu từ các CTKM được áp dụng trên đơn/phiếu, bao gồm CTKM giảm tiền cố định và chiết khấu theo % (sau khi tính từ % sang giá trị tiền được giảm). * Thanh Toán: = Thành tiền (tổng bill) - Chiết khấu (% tổng bill) - Tiền chiết khấu (tổng bill) + Giảm trừ   + "Giảm trừ" lấy từ trường "Giảm trừ" trên đơn hàng * Doanh thu (-VAT): = *Tổng tiền trước VAT (VND)* * Phương thức thanh toán: Mặc định là COD * Nguồn tiền: Mặc định là COD   Đối với công ty config không sử dụng lô, ẩn các cột: **Lô, Hạn sử dụng, Số lượng bán (theo lô)**  Đối với đơn hàng/phiếu trả hàng có chiết khấu theo CTKM => hệ thống hiển thị thông tin giá trị chiết khấu thành 1 record riêng. |

### Export Excel báo cáo

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Báo cáo → Báo cáo phân tích → Tổng hợp đơn hàng bán → Click vào nút **Export Excel** |
|  |  | Khi click vào button Export Excel, hệ thống hiển thị popup xác nhận:   * Text: Bạn có muốn xuất Báo cáo Tổng hợp đơn hàng? * Nút Huỷ: Click vào nút → hệ thống thực hiện đóng popup * Nút Lưu: Click vào nút → hệ thống thực hiện xuất dữ liệu theo điều kiện lọc với mẫu file:  Lưu ý:   * Đối với công ty config không sử dụng lô, hệ thống không export các cột **Lô, Hạn sử dụng, Số lượng bán (theo lô)** * Dữ liệu các cột trong file được lấy như mô tả Màn hình Báo cáo Tổng hợp đơn hàng |