|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | [[OR-3466] [DMS90-HT]\_ Thêm chức năng chuyển kho NPP - Finviet - Management System](https://hotro.finviet.com.vn/browse/OR-3466)  Yêu cầu từ vận hành thêm chức năng chuyển kho NPP trên role HO |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# HO - CHUYỂN KHO NPP

Lưu ý

Chức năng chuyển kho và Logic chuyển kho không thay đổi, vẫn giữ rule từ document chuyển kho NPP ở PORTAL NPP: [Chuyển kho NPP - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53022511)

Chỉ bổ sung:

| Màn hình | PORTAL HO |
| --- | --- |
| Danh sách Chuyển kho NPP | Filter: NPP chuyển  Lưới danh sách:   * Hiển thị danh sách phiếu chuyển kho theo phân quyền dữ liệu của user đang đăng nhập * Phân quyền theo NPP nhận/NPP chuyển trên phiếu chuyển kho. Chỉ cần trên phiếu có 1 NPP thỏa điều kiện thì hiển thị    Chi tiết phân quyền dữ liệu  * Trường hợp tài khoản người dùng đang đăng nhập **có** thông tin NPP chăm sóc: Chỉ hiển thị danh sách NPP chăm sóc (Ưu tiên cao nhất) * Trường hợp tài khoản người dùng đang đăng nhập **không có** thông tin NPP chăm sóc   + Trường hợp tài khoản người dùng đang đăng nhập **không**gắn tài khoản thị trường: Load danh sách NPP theo phân quyền vùng, khu vực của tài khoản người dùng, địa chỉ NPP phải thuộc vùng/khu vực quản lý của tài khoản đăng nhập.   + Trường hợp tài khoản người dùng đang đăng nhập **có**gắn tài khoản thị trường: Load danh sách NPP theo phân quyền salesforce của tài khoản thị trường:     - SS: sẽ lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman cấp dưới của SS đang đăng nhập + NPP trên tuyến bán hàng của chính nhân viên đang đăng nhập     - ASM:       * B1: Lấy ra danh sách tất cả SS cấp dưới của ASM đang đăng nhập       * B2: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B1       * B3: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B2 + NPP trên tuyến bán hàng của SS ở B1     - RSM: sẽ lấy NPP của tất cả ASM     - * B1: Lấy ra danh sách tất cả ASM cấp dưới của RSM đang đăng nhập       * B2: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B1       * B3: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B2       * B4: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B3 + NPP trên tuyến bán hàng của SS ở B2     - SD: sẽ lấy NPP của tất cả RSM       * B1: Lấy ra danh sách tất cả RSM cấp dưới của SD đang đăng nhập       * B2: Lấy ra danh sách tất cả ASM cấp dưới của RSM ở B1       * B3: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B2       * B4: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B3       * B5: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B4 + NPP trên tuyến bán hàng của SS ở B3     - Tất cả nhân viên theo salesforce trên đều phải có trạng thái đang hoạt động, tuyến bán hàng đang hoạt động, NPP đang hoạt động |
| Tạo mới phiếu chuyển kho | Portal NPP đang mặc định NPP đang login  → Cần bổ sung thêm selectbox chọn NPP chuyển |
| Chi tiết phiếu chuyển kho | Bổ sung thêm trường NPP chuyển |

## DANH SÁCH CHUYỂN KHO NPP

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Vùng tìm kiếm |  |  |  |  |
| Nhà phân phối chuyển | Selectbox multichoice | Có | Không | * Mặc định trống <=> Chọn tất cả NPP theo phân quyền để tìm kiếm * Có thể chọn nhiều NPP để tìm kiếm * Nhấn chọn hoặc nhập keyword tìm kiếm vào đây: Cho phép tìm kiếm NPP chuyển theo mã hoặc tên NPP * Hệ thống hiển thị danh sách NPP theo phân quyền dữ liệu của tài khoản người dùng đang đăng nhập.    Chi tiết phân quyền dữ liệu  * Trường hợp tài khoản người dùng đang đăng nhập **có** thông tin NPP chăm sóc: Chỉ hiển thị danh sách NPP chăm sóc (Ưu tiên cao nhất) * Trường hợp tài khoản người dùng đang đăng nhập **không có** thông tin NPP chăm sóc   + Trường hợp tài khoản người dùng đang đăng nhập **không**gắn tài khoản thị trường: Load danh sách NPP theo phân quyền vùng, khu vực của tài khoản người dùng, địa chỉ NPP phải thuộc vùng/khu vực quản lý của tài khoản đăng nhập.   + Trường hợp tài khoản người dùng đang đăng nhập **có**gắn tài khoản thị trường: Load danh sách NPP theo phân quyền salesforce của tài khoản thị trường:     - SS: sẽ lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman cấp dưới của SS đang đăng nhập + NPP trên tuyến bán hàng của chính nhân viên đang đăng nhập     - ASM:       * B1: Lấy ra danh sách tất cả SS cấp dưới của ASM đang đăng nhập       * B2: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B1       * B3: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B2 + NPP trên tuyến bán hàng của SS ở B1     - RSM: sẽ lấy NPP của tất cả ASM     - * B1: Lấy ra danh sách tất cả ASM cấp dưới của RSM đang đăng nhập       * B2: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B1       * B3: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B2       * B4: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B3 + NPP trên tuyến bán hàng của SS ở B2     - SD: sẽ lấy NPP của tất cả RSM       * B1: Lấy ra danh sách tất cả RSM cấp dưới của SD đang đăng nhập       * B2: Lấy ra danh sách tất cả ASM cấp dưới của RSM ở B1       * B3: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B2       * B4: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B3       * B5: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B4 + NPP trên tuyến bán hàng của SS ở B3     - Tất cả nhân viên theo salesforce trên đều phải có trạng thái đang hoạt động, tuyến bán hàng đang hoạt động, NPP đang hoạt động |
| Nhà phân phối nhận | Selectbox multichoice | Có | Không | * Rule load danh sách và chọn giống NPP chuyển |
| Lưới danh sách |  |  |  |  |
| Nhà phân phối chuyển | Datacolumn | Không | Không | * Hệ thống hiển thị NPP trên phiếu chuyển kho * Thông tin bao gồm: Mã NPP - Tên NPP |

## CHI TIẾT PHIẾU CHUYỂN KHO NPP

* Bổ sung thêm thông tin Nhà phân phối chuyển: Mã NPP - Tên NPP

## TẠO MỚI PHIẾU CHUYỂN KHO NPP

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Chỉnh sửa?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Nhà phân phối chuyển | Selectbox Onechoice | Không | Không | * Mặc định trống * Chỉ được chọn 1 NPP chuyển * Nhấn chọn hoặc nhập keyword tìm kiếm vào đây: Cho phép tìm kiếm NPP chuyển theo mã hoặc tên NPP * Hệ thống hiển thị danh sách NPP theo phân quyền dữ liệu của tài khoản người dùng đang đăng nhập    Chi tiết phân quyền dữ liệu  * Trường hợp tài khoản người dùng đang đăng nhập **có** thông tin NPP chăm sóc: Chỉ hiển thị danh sách NPP chăm sóc (Ưu tiên cao nhất) * Trường hợp tài khoản người dùng đang đăng nhập **không có** thông tin NPP chăm sóc   + Trường hợp tài khoản người dùng đang đăng nhập **không**gắn tài khoản thị trường: Load danh sách NPP theo phân quyền vùng, khu vực của tài khoản người dùng, địa chỉ NPP phải thuộc vùng/khu vực quản lý của tài khoản đăng nhập.   + Trường hợp tài khoản người dùng đang đăng nhập **có**gắn tài khoản thị trường: Load danh sách NPP theo phân quyền salesforce của tài khoản thị trường:     - SS: sẽ lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman cấp dưới của SS đang đăng nhập + NPP trên tuyến bán hàng của chính nhân viên đang đăng nhập     - ASM:       * B1: Lấy ra danh sách tất cả SS cấp dưới của ASM đang đăng nhập       * B2: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B1       * B3: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B2 + NPP trên tuyến bán hàng của SS ở B1     - RSM: sẽ lấy NPP của tất cả ASM     - * B1: Lấy ra danh sách tất cả ASM cấp dưới của RSM đang đăng nhập       * B2: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B1       * B3: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B2       * B4: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B3 + NPP trên tuyến bán hàng của SS ở B2     - SD: sẽ lấy NPP của tất cả RSM       * B1: Lấy ra danh sách tất cả RSM cấp dưới của SD đang đăng nhập       * B2: Lấy ra danh sách tất cả ASM cấp dưới của RSM ở B1       * B3: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B2       * B4: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B3       * B5: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B4 + NPP trên tuyến bán hàng của SS ở B3     - Tất cả nhân viên theo salesforce trên đều phải có trạng thái đang hoạt động, tuyến bán hàng đang hoạt động, NPP đang hoạt động     * Trạng thái NPP đang hoạt động   → Sau khi chọn NPP chuyển thì các trường Kho chuyển, Kênh bán hàng, Nhà phân phối nhận sẽ phụ thuộc vào thông tin NPP chuyển được chọn và tiếp tục quy trình chuyển kho như cũ |
| Nhà phân phối nhận |  |  |  | * Rule load danh sách và chọn giống NPP chuyển |