|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Bổ sung thông tin kho vật lý và chọn kho vật lý |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Thay đổi trên báo cáo tồn kho hiện tại NPP

| Màn hình | Nơi thay đổi | Mô tả |
| --- | --- | --- |
|  |  | Tên kho = Tên kho vật lý - Tên loại kho  Button Đổi, nhấn vào button Đổi hiển thị popup chọn kho bên dưới. Button Đổi luôn luôn hiển thị  update text size từ 16 -> 12px.   * Trường hợp Đổi kho thì Bộ lọc sẽ reset lại như mặc định ban đầu |
| Icon Filter trên màn hình | Khi mở màn hình không cần tick đã filter, chỉ tick đã filter khi thực hiện filter trên màn hình lọc.  Ở màn hình lọc khi mở màn hình cũng sẽ không hiển thị tick vào kho đang xem tồn kho.  Chỉ tick vào kho khi thực hiện filter và nhấp áp dụng bộ lọc.  Trường hợp đổi NPP/đổi kho vật lý ở màn hình chính thì Bộ lọc sẽ reset lại như mặc định ban đầu |
|  | Popup chọn kho Vật lý   * Button X: Đóng popup không cần cảnh báo * Tìm kiếm: search like tên kho vật lý để tìm kiếm * Danh sách kho vật lý   + Hiển thị danh sách kho vật lý có trạng thái "Đang hoạt động" để người dùng chọn   + Chỉ được chọn 1 kho   + Sắp xếp kho theo tên kho alphabet   + Chỉ hiển thị danh sách kho có trạng thái hoạt động (Kho không hoạt động sẽ bị ẩn đi) * Áp dụng:   + Nhấn button này, để chọn kho vật lý   + sau khi nhấn button sẽ:     - Đóng popup và hiển thị tên kho vật lý bên ngoài - mặc định loại kho = Kho bán   + Đồng thời hiển thị danh sách sản phẩm và tồn kho theo kho vật lý và kho bán đã chọn * Khi mở màn hình   + **Kênh mặc định = Kênh nhân viên**     - Trường hợp nhân viên không có kênh thì kênh mặc định = kênh đang cấu hình trong config config SALE\_CHANNEL\_APP (setup SALE\_CHANNEL\_APP = GT)   + **Loại kho mặc định = Kho bán**   + **Kho vật lý mặc định** được lấy từ:     - Trường hợp Salesman:       * Lấy danh sách kho và kho mặc định được cài đặt trong màn hình Nhân viên bán hàng (App SM). Sắp xếp kho mặc định của nhân viên lên đầu tiên.       * Trường hợp không cài đặt danh sách kho bán hàng và kho mặc định hoặc tất cả các kho đều ngưng hoạt động thì không hiển thị danh sách kho.       * NV Có cài Danh sách kho nhưng không có cài kho mặc định hoặc kho mặc định đang cài bị in-active thì kho mặc định random     - Trường hợp Sales SUP:       * Lấy danh sách kho của tất cả nhân viên cấp dưới của tài khoản đang login (App SM và App QL), kho mặc định random       * Trường hợp quản lý không có nhân viên cấp dưới hoặc tất cả nhân viên cấp dưới không cài đặt danh sách kho bán hàng và kho mặc định hoặc tất cả các kho đều ngưng hoạt động thì không hiển thị danh sách kho.       * NV Có cài Danh sách kho nhưng không có cài kho mặc định hoặc kho mặc định đang cài bị in-active thì kho mặc định random     - Trường hợp ASM, RSM, SD:       * Lấy danh sách kho của tất cả nhân viên cấp dưới của tài khoản đang login (App QL), kho mặc định random.       * Trường hợp quản lý không có nhân viên cấp dưới hoặc tất cả nhân viên cấp dưới không cài đặt danh sách kho bán hàng và kho mặc định hoặc tất cả các kho đều ngưng hoạt động thì không hiển thị danh sách kho.       * NV Có cài Danh sách kho nhưng không có cài kho mặc định hoặc kho mặc định đang cài bị in-active thì kho mặc định random |