|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-401] [APP SM] Nhiệm vụ cửa hàng chăm sóc - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-401) |
| Epic |  |
| Feature | Màn hình Nhiệm vụ chăm sóc Salesman App |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | Đinh Quang Vũ |
| Chage History | 2 |

truenone

## **1. Màn hình Nhiệm vụ chăm sóc**

**1.1 Mục đích:**

Màn hình load các nhiệm vụ chăm sóc một cửa hàng

### 1.2 Mô tả

| Hành động | Kết quả |
| --- | --- |
| * Chọn vào cửa hàng hiển thị nhiệm vụ chăm sóc như sau: | Trường hợp chưa có nhiệm vụ chăm sóc sẽ hiển thị UI như sau: |
| Thông tin chi tiết cửa hàng | Click vào icon thông tin cửa hàng hiển thị thông tin chi tiết cửa hàng như sau: |
| Thêm ghi chú cho cửa hàng | **Danh sách ghi chú**  Chọn chức năng ghi chú trong màn hình viếng thăm cửa hàng.  Hệ thống mở màn hình tạo ghi chú như sau:     * Loại ghi chú **Tồn kho**: Sẽ được hiển thị từ thông tin ghi chú tồn kho trong nhiệm vụ Kiểm tra tồn kho * Loại ghi chú **Cửa hàng:**Sẽ được tạo mới ở trang Danh sách ghi chú của cửa hàng, sẽ được mô tả ở nút**Thêm Ghi Chú** bên dưới * Nhập từ khóa tìm kiếm vào ô tìm kiếm để tìm kiếm theo: Nội dung ghi chú, tiêu đề ghi chú * Nhấn vào Lọc  để lọc loại ghi chú như sau:      * Thời gian:    + Chọn Từ ngày - Đến Ngày để tìm kiếm, Lọc theo thời gian tạo ghi chú   + Đến ngày >= Từ ngày * Loại ghi chú: Gồm 2 loại như sau:   + Tồn kho Tạo từ nhiệm vụ kiểm tra tồn kho   + Cửa hàng: Tạo mới ở màn hình này  * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào danh sách ghi chú và reload danh sách ghi chú hiển thị kết quả tìm kiếm    **Tạo mới ghi chú**   * Nhấn vào  để thêm một ghi chú mới  * **Ghi chú này sẽ mặc định là loại "cửa hàng"**   **--**  **Update 13/12/2024 (nội dung ghi chú này đã có mô tả cụ thể ở màn hình Viếng thăm điểm bán mục 2.6 - link: [Thêm ghi chú cho Điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Th%C3%AAmghich%C3%BAcho%C4%90i%E1%BB%83mb%C3%A1n))**    **Thêm ghi chú:**   * Ghi chú mới: required, text (300) Text header * Tạo bởi [ Họ và tên ]: readonly; hiển thị thông tin user login tạo ghi chú * Nội dung ghi chú: not required, Text cho phép người dùng nhập nội dung text; * : Chọn để Chụp ảnh / tải ảnh đã chụp từ thiết bị lên (Tối đa 10 tấm) để đính kèm với nội dung ghi chú;   + Hiển thị poup chọn Chụp hình/ Tải hình     - Lưu ý: hình ảnh được upload từ thiết bị lên giới hạn 10Mb/ tấm, trường hợp vượt quá dung lượng quy định hiển thị mess: "File đã chọn quá lớn, kích thước tối đa 10MB"; (Chọn OK để quay về màn hình chọn ảnh để user chọn lại tấm khác)     - 4/10: 4 tấm được upload hoặc  trên 10 tấm max      * Ghi lên thông báo nhắc nhở → Khi chọn trường này thì ở màn hình danh sách nhiệm vụ viếng thăm sẽ được ghim ghi chú như sau      * Đồng thời trong màn hình danh sách ghi chú, ghi chú cũng được ghim lên đầu tiên. * Nhấn vào biểu tượng ghim ghi chú để ghim hoặc bỏ ghim. * Chọn vào ghi chú trong danh sách để xem chi tiết ghi chú     **Lưu ý: Chỉ được ghim 1 ghi chú cho mỗi loại Cửa hàng và tồn kho (Tổng cộng dc ghi 2 ghi chú)** |
| * + Không cần thực hiện checkin checkout nhân viên vẫn có thể làm các tác vụ trong nhiệm vụ tuyến | * Nhiệm vụ chăm sóc sẽ không kiểm tra các điều kiện bắt buộc làm nhiệm vụ (required task) |

  