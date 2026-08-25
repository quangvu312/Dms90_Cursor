|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management Systemissuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolutionkey,summary,type,created,updated,due,assignee,reporter,priority,status,resolution70327f0f-d77b-320c-9607-8ab3659b722fECD-1046  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1133 |
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

## **Description**

## **Requirements**

### **Xem Báo cáo tồn kho hiện tại NPP**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Báo cáo → Tồn Kho → Báo cáo Tồn kho hiện tại NPP |
| Màn hình |  | Màn hình Báo cáo Tồn kho hiện tại NPP bao gồm:   * Nút Export Excel * Tìm kiếm theo   + Kênh:      - Gồm các kênh bán hàng     - Mặc định trống     - Cho phép chọn nhiều kênh     - Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kênh bán hàng     - Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Kho      - Mặc định trống     - Chỉ được phép chọn nhiều     - Hệ thống thực hiện lấy dữ liệu của trường Kho hệ thống trong Core Kho DMS     - Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên kho hệ thống     - Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu.   + Ngành hàng:      - Hiển thị ngành hàng cấp 1 và cấp 2     - Hiển thị dạng phân cấp (cây)     - Cho phép chọn nhiều ngành hàng     - Sau khi chọn hiển thị dữ liệu báo cáo theo ngành hàng đã chọn. Chỉ hiển thị sản phẩm có ngành hàng được chọn ở trường này.     - Khi mở màn hình mặc định không chọn dữ liệu <=> Chọn tất cả ngành hàng * Nút Tìm kiếm: Click vào nút -> thực hiện tìm kiếm theo điều kiện lọc * Báo cáo tồn kho hiện tại NPP   + Được cập nhật tại thời điểm xem báo cáo   + Báo cáo tồn kho hiển thị tất cả sản phẩm có trong kho (không quan tâm trạng thái, giá sản phẩm)   + Gồm các thông tin sau:     - Kênh     - Vùng bán hàng: Dữ liệu lấy từ vùng của NPP     - Khu vực bán hàng: Dữ liệu lấy từ khu vực của NPP     - Kho: Các loại kho có trong hệ thống     - Nhóm sản phẩm: Dữ liệu lấy từ trường Tên nhóm sản phẩm, gồm các nhóm sản phẩm có chứa sản phẩm tương ứng       * Nếu SP thuộc nhiều nhóm sản phẩm, các nhóm sản phẩm phân biệt bằng dấu chấm phẩy ";", ví dụ: *Tieudung; Giadung; Vatdungnhabep*     - Ngành hàng: Dữ liệu lấy từ Phân cấp cấp 1 trong cây phân cấp của sản phẩm tương ứng     - Nhãn hiệu: Dữ liệu lấy từ Phân cấp cấp 2 trong cây phân cấp của sản phẩm tương ứng     - Mã SKU: Dữ liệu lấy từ thông tin của sản phẩm     - Tên sản phẩm: Dữ liệu lấy từ thông tin của sản phẩm     - ĐVT: Dữ liệu lấy từ thông tin Đơn vị cơ bản của sản phẩm tương ứng     - Lô: Dữ liệu lấy từ thông tin Lô của sản phẩm trong Kênh và Kho tương ứng     - Hạn sử dụng: Dữ liệu lấy từ thông tin Lô của sản phẩm trong Kênh và Kho tương ứng     - Đơn giá: Dữ liệu lấy từ giá mua của sản phẩm tương ứng trong bảng giá đang được áp dụng cho NPP tại thời điểm xem báo cáo     - Tồn kho: Tổng số lượng Tồn kho của sản phẩm trong Kho và Kênh tương ứng tại thời điểm xuất báo cáo     - Tạm giữ: Tổng số lượng Tạm giữ của sản phẩm trong Kho và Kênh tương ứng tại thời điểm xuất báo cáo     - Có sẵn: Tổng số lượng Có sẵn của sản phẩm trong Kho và Kênh tương ứng tại thời điểm xuất báo cáo     - Giá trị: Được tính theo công thức: *Giá trị = Đơn giá x số lượng Có sẵn*   Lưu ý:   * Trường hợp config không sử dụng Lô thì báo cáo không bao gồm các cột: **Lô, Hạn sử dụng** |

### Export Excel báo cáo

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Báo cáo → Kho → Báo cáo Tồn kho hiện tại NPP → Chọn Export Excel |
|  |  | Khi click vào button, hệ thống hiển thị popup xác nhận:   * Text: Bạn có muốn xuất Báo cáo Tổng hợp Xuất nhập tồn hiện tại? * Nút Huỷ: Click vào nuts → hệ thống thực hiện đóng popup * Nút Lưu: Click vào nút → hệ thống thực hiện xuất dữ liệu theo  điều kiện lọc với mẫu file:  Lưu ý:   * Đối với công ty config không sử dụng lô, hệ thống export theo file: * Dữ liệu các cột trong file được lấy như mô tả Màn hình * Nếu danh sách không có dữ liệu → hiển thị toast error *"Không xuất được file vì không có dữ liệu"* |