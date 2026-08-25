true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-4246 |
| Version | trueYellow1.0.0  trueRed1.1.0: Bổ sung phân quyền theo salesforce |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

3

**BACKLOG**

| **#** | **Phiên** **bản** | **Ngày** **cập** **nhật** | **Người** **cập** **nhật** | **Nội dung cập** **nhật** |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |
| 2 | 1.0.1 | 16/04/2025 |  | Bỏ rules: HO user xem được NPP trực thuộc → Chỉ cần HO user quản lý Vùng/Khu vực nào thì sẽ xem được dữ liệu của tất cả NPP dưới cấp của HO |
| 3 | 1.0.1 | 15/5/2025 |  | Mô tả phân quyền dữ liệu theo tài khoản người dùng của CTTB; CTTL |
| 4 | 1.0.1 |  |  | Bổ sung các màn hình team2 thực hiện chức năng phân quyền dữ liệu |
| 5 | 1.1.0 |  |  | Bổ sung phân quyền theo salesforce cho các màn hình team 1 thực hiện |
| 6 | 1.1.0 |  |  | Update phân quyền theo cây salesforce ở các màn hình team 2 thực hiện  trueRed1.1.0   1. **Phân quyền load dữ liệu theo cây saleforce**    1. **Quy tắc lấy dữ liệu** **N****hân viên bán hàng**    2. **Quy tắc lấy dữ liệu** **Nhà phân phối** |
| 7 | 1.1.2 |  |  | Bỏ phân quyền NPP chăm sóc cho màn hình NVBH  Bỏ phân quyền theo cây SFA cho màn hình Chuyển tuyến NPP  Bỏ phân quyền NPP chăm sóc cho màn hình Chuyển tuyến Nhà phân phối |

# Phạm vi truy cập dữ liệu

Rules phân quyền truy cập dữ liệu áp dụng cho tất cả luồng chức năng "Xem/Thêm mới/Sửa/Xóa/Duyệt/Hủy" các chức năng

## **1. Phân quyền dữ liệu Vùng; Khu vực**

**Vùng**

Phân quyền vùng/Khu vực

Vùng lọc:

- Field Vùng: Vùng/Khu vực thuộc Vùng/Khu vực của User đang login  
- Field NPP: NPP có địa chỉ thuộc Vùng/Khu vực của User đang login  
- Field Nhân viên: Nhân viên thuộc Vùng/Khu vực của User login (lấy theo Vùng/Khu vực của cấp quản lý)  
- Tuyến bán hàng: Tuyến thuộc Vùng/Khu vực của User login (Theo địa chỉ của NPP)  
- Điểm bán: Điểm bán thuộc NPP thuộc Vùng/Khu vực của User login.  (một số báo cáo tuyến sẽ lấy điểm bán đã được gán vào tuyến)  
----------------  
Chọn Vùng > Chọn NPP: Load NPP theo Vùng được chọn  
Chọn Vùng > Chọn Nhân viên: Load NV thuộc Vùng/Khu vực   
Chọn Vùng > Chọn Tuyến: Load Tuyến thuộc Vùng/Khu vực của User login (Theo địa chỉ của NPP)  
Chọn Vùng > Chọn ĐB:  Load Điểm bán thuộc NPP & thuộc Vùng/Khu đã chọn  
----------------  
Chọn NPP > Chọn Nhân viên: Load Nhân viên có Tuyến gán NPP được chọn  
Chọn NPP > Chọn Tuyến: Load Tuyến có gán NPP được chọn  
Chọn NPP > Chọn ĐB: Load Điểm bán thuộc Tuyến có gán NPP được chọn/ Hoặc NPP trên master ĐB

----------------  
Chọn Nhân viên > Chọn Tuyến: Load Tuyến có gán NV được chọn

----------------  
Chọn Tuyến > Chọn Điểm bán: Load Điểm bán thuộc Tuyến được chọn

*Notes:*

* *Tuyến/Vùng/NPP/Nhân viên/Điểm bán đang hoạt động*

* *Tùy màn hình sẽ lấy cả trạng thái = Ngưng hoạt động*

## **2. Phân quyền NPP chăm sóc**

**Chăm sóc**

Phân quyền NPP chăm sóc

Vùng lọc:

- Field Vùng: Vùng/Khu vực thuộc NPP được gán  
- Field NPP: Đúng NPP được gán  
- Field Nhân viên: Nhân viên thuộc Tuyến có gán NPP chăm sóc  
- Tuyến bán hàng: Tuyến thuộc NPP chăm sóc  
- Điểm bán: Điểm bán thuộc NPP chăm sóc (đã hoặc chưa gán tuyến tùy từng màn hình)  
----------------  
Chọn Vùng > Chọn NPP: Load NPP được gán  & thuộc Vùng/KV đã chọn  
Chọn Vùng > Chọn Nhân viên: Load  Nhân viên thuộc Tuyến có gán NPP chăm sóc  & thuộc Vùng/KV đã chọn  
Chọn Vùng > Chọn Tuyến: Load Tuyến thuộc NPP chăm sóc & thuộc Vùng/KV đã chọn  
Chọn Vùng > Chọn ĐB: Load Điểm bán thuộc NPP chăm sóc & thuộc Vùng/Khu đã chọn  
----------------  
Chọn NPP > Chọn Nhân viên: Load Nhân viên có Tuyến gán NPP được chọn  
Chọn NPP > Chọn Tuyến: Load Tuyến có gán NPP được chọn  
Chọn NPP > Chọn ĐB: Load Điểm bán thuộc Tuyến có gán NPP được chọn/ Hoặc NPP trên master ĐB   
----------------  
Chọn Nhân viên > Chọn Tuyến: Load Tuyến có gán NV được chọn

----------------  
Chọn Tuyến > Chọn Điểm bán: Load Điểm bán thuộc Tuyến được chọn

*Notes:*

* *Tuyến/Vùng/NPP/Nhân viên/Điểm bán đang hoạt động*
* *Tùy màn hình sẽ lấy cả trạng thái = Ngưng hoạt động*

Rule phân quyền theo salesforce

## **3. Phân quyền theo cây Saleforce (Gán TKTT)**

Gán TKTT

Vùng lọc:

- Field Vùng: Vùng/Khu vực thuộc Vùng/Khu vực của tài khoản thị trường  
- Field NPP: NPP thuộc Tuyến bán hàng của NV cấp dưới của tài khoản thị trường ( Xem **Quy tắc lấy dữ liệu** **Nhà phân phối** )   
- Field Nhân viên: Nhân viên cấp dưới của tài khoản thị trường (Xem **Quy tắc lấy dữ liệu** **N****hân viên bán hàng** ) - (Tùy màn hình lấy cấp dưới hay cả chính nó)

- Field Tuyến bán hàng: Load Tuyến của NV cấp dưới của tài khoản thị trường (Xem **Quy tắc lấy dữ liệu** **N****hân viên bán hàng** ) - (Tùy màn hình lấy cấp dưới hay cả chính nó)  
- Field Điểm bán: Load Điểm bán thuộc Tuyến của NV cấp dưới  
----------------  
Chọn Vùng > Chọn NPP: Load NPP của NV cấp dưới **& Thuộc Vùng được chọn** ( Xem **Quy tắc lấy dữ liệu** **Nhà phân phối** )

Chọn Vùng > Chọn Nhân viên: Load NV cấp dưới **& Thuộc Vùng được chọn** (Xem **Quy tắc lấy dữ liệu** **N****hân viên bán hàng** ) - (Tùy màn hình lấy cấp dưới hay cả chính nó)  
Chọn Vùng > Chọn Tuyến: Load Tuyến của NV cấp dưới **và Tuyến thuộc Vùng được chọn**(Xem **Quy tắc lấy dữ liệu** **N****hân viên bán hàng** ) - (Tùy màn hình lấy cấp dưới hay cả chính nó)

Chọn Vùng > Chọn ĐB: load điểm bán trên tuyến bán hàng của NV cấp dưới  & Thuộc Vùng được chọn. ĐB phải được gán vào Tuyến (Xem **Quy tắc lấy dữ liệu** **N****hân viên bán hàng** ) 

---------------- 

Chọn NPP > Chọn Nhân viên: Load Nhân viên cấp dưới hoặc chính nó có Tuyến thuộc NPP được chọn (Xem **Quy tắc lấy dữ liệu** **N****hân viên bán hàng** ) - (Tùy màn hình lấy cấp dưới hay cả chính nó)  
Chọn NPP > Chọn Tuyến: Load Tuyến của  Nhân viên cấp dưới hoặc chính nó thuộc NPP được chọn (Xem **Quy tắc lấy dữ liệu** **N****hân viên bán hàng** ) - (Tùy màn hình lấy cấp dưới hay cả chính nó)  
Chọn NPP > Chọn ĐB: Load Điểm bán của Nhân viên cấp dưới hoặc chính nó có Tuyến thuộc NPP được chọn (Xem **Quy tắc lấy dữ liệu** **N****hân viên bán hàng**)   
----------------  
Chọn Nhân viên > Chọn Tuyến: Load Tuyến có gán NV được chọn   
----------------  
Chọn Tuyến > Chọn Điểm bán: Load Điểm bán thuộc Tuyến được chọn  
-----------------  
Note:   
- Đối với case TK gán TKTT và gán NPP: Bỏ qua không quan tâm đến NPP

- Đối với Field Vùng của TKND:  Bỏ qua không quan tâm, chỉ quan tâm vùng/ khu vực của TKTT được gán

 - Tuyến/Vùng/NPP/Nhân viên/Điểm bán đang hoạt động. 

* *Tùy màn hình sẽ lấy cả trạng thái = Ngưng hoạt động*

**trueRed1.1.0: Bổ sung rule phân quyền theo salesforce như sau:**

* + **Quy tắc lấy dữ liệu** **N****hân viên bán hàng**
  + **Quy tắc lấy dữ liệu** **Nhà phân phối**

Rule Phân Quyền Theo Salesforce

1. **Quy tắc lấy dữ liệu** **N****hân viên bán hàng**
   * Trường hợp tài khoản người dùng đang đăng nhập **không** gắn tài khoản thị trường: Load danh sách theo rules **P****hân quyền truy cập dữ liệu,** nhân viên phải có trạng thái Hoạt động
   * Trường hợp tài khoản người dùng đang đăng nhập **có** gắn tài khoản thị trường: Load danh sách theo **Rule phân quyền theo salesforce**:
     + SS: sẽ lấy danh sách tất cả Salesman cấp dưới của SS đang đăng nhập
     + ASM:
       - B1: Lấy ra danh sách tất cả SS cấp dưới của ASM đang đăng nhập
       - B2: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B1
     + RSM:
       - B1: Lấy ra danh sách tất cả ASM cấp dưới của RSM đang đăng nhập
       - B2: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B1
       - B3: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B2
     + SD:
       - B1: Lấy ra danh sách tất cả RSM cấp dưới của SD đang đăng nhập
       - B2: Lấy ra danh sách tất cả ASM cấp dưới của RSM ở B1
       - B3: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B2
       - B4: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B3
     + Tất cả nhân viên theo salesforce trên đều phải có trạng thái đang hoạt động
2. **Quy tắc lấy dữ liệu** **Nhà phân phối**
   * Trường hợp tài khoản người dùng đang đăng nhập **không** gắn tài khoản thị trường: Load danh sách nhà phân phối theo rules **P****hân quyền truy cập dữ liệu.**
   * Trường hợp tài khoản người dùng đang đăng nhập **có** gắn tài khoản thị trường: Load danh sách theo **Rule phân quyền theo salesforce**:
     + SS: Lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman cấp dưới của SS đang đăng nhập + NPP trên tuyến bán hàng của chính nhân viên sales sup đang đăng nhập
     + ASM:
       - B1: Lấy ra danh sách tất cả SS cấp dưới của ASM đang đăng nhập
       - B2: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B1
       - B3: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B2 + NPP trên tuyến bán hàng của SS ở B1
     + RSM:
       - B1: Lấy ra danh sách tất cả ASM cấp dưới của RSM đang đăng nhập
       - B2: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B1
       - B3: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B2
       - B4: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B3 + NPP trên tuyến bán hàng của SS ở B2
     + SD:
       - B1: Lấy ra danh sách tất cả RSM cấp dưới của SD đang đăng nhập
       - B2: Lấy ra danh sách tất cả ASM cấp dưới của RSM ở B1
       - B3: Lấy ra danh sách tất cả SS cấp dưới của ASM ở B2
       - B4: Lấy ra danh sách tất cả SM thuộc cấp dưới của SS ở B3
       - B5: Lấy lấy danh sách NPP trên tất cả tuyến bán hàng của tất cả Salesman ở B4 + NPP trên tuyến bán hàng của SS ở B3
     + Trường hợp tạo mới dữ liệu: Tất cả nhân viên theo salesforce trên đều phải có trạng thái đang hoạt động, tuyến bán hàng đang hoạt động, NPP đang hoạt động
     + Trường hợp xem dữ liệu/chỉnh sửa dữ liệu:
       - Load dữ liệu nhân viên, tuyến bán hàng, NPP đang hoạt động và ngưng hoạt động để người dùng xem lại và điều chỉnh dữ liệu
       - Nhưng khi lưu chỉ cho phép lưu thông tin nhân viên, tuyến bán hàng, NPP đang hoạt động

## **4. Mô tả từng màn hình**

| **Portal** | **Level 1** | **Level 2** | **Level 3** | **Rules phân quyền truy cập dữ liệu** | Rule phân quyền theo salesforce | **Team**  Team 1: Team OMS  Team 2: Team SFA  Team 3: Team Promotion |
| --- | --- | --- | --- | --- | --- | --- |
| HO (khi user chọn HO) | Dữ liệu nền | Địa lý | Phân vùng | Truy cập được tất cả Vùng / Khu vực/Tỉnh Thành/Quận huyện |  | trueBlueTEAM 2 |
| Kinh doanh | Công ty | Truy cập được dữ liệu công ty |  | trueYellowTEAM 1 |
| Kênh bán hàng | Xem được tất cả dữ liệu Kênh bán hàng |  | trueYellowTEAM 1 |
| Đơn vị kinh doanh | Xem được tất cả dữ liệu Đơn vị kinh doanh |  | trueYellowTEAM 1 |
| Loại điểm bán | Xem được tất cả dữ liệu Loại điểm bán |  | trueYellowTEAM 1 |
| Hạng điểm bán | Xem được tất cả dữ liệu Hạng điểm bán |  | trueYellowTEAM 1 |
| Vị trí điểm bán | Xem được tất cả dữ liệu Vị trí điểm bán |  | trueYellowTEAM 1 |
| Danh sách điểm bán | Màn hình danh sách điểm ban   * Xem danh sách Điểm bán được gán NPP thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định).   Yêu cầu duyệt điều chỉnh điểm bán:   * Xem danh sách yêu cầu điều chỉnh điểm bán, trong đó điểm bán có NPP thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định). |  | trueYellowTEAM 1 |
| Nhân viên bán hàng | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả nhân viên bán hàng theo Vùng/Khu vực quản lý | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng   **Danh sách:**   * Dữ liệu hiển thị nhân viên cấp dưới và chính nó  theo cây salesforce theo **Quy tắc lấy dữ liệu** **N****hân viên bán hàng**   **Bao gồm Import/ Export theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Nhà phân phối | Xem danh sách NPP thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) |  | trueYellowTEAM 1 |
| Sản phẩm | Cây phân cấp | Xem tất cả cây phân cấp sản phẩm |  | trueYellowTEAM 1 |
| Đơn vị đo lường | Xem tất cả đơn vị đo lường |  | trueYellowTEAM 1 |
| Danh sách sản phẩm | Xem tất cả danh sách sản phẩm |  | trueYellowTEAM 1 |
| Nhóm sản phẩm | Xem tất cả danh sách nhóm sản phẩm |  | trueYellowTEAM 1 |
| Bảng giá bán | Xem danh sách bảng giá bán áp dụng cho NPP thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định |  | trueYellowTEAM 1 |
| Bảng giá mua | Xem danh sách bảng giá mua áp dụng cho các NPP thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định |  | trueYellowTEAM 1 |
| Quản lý chỉ tiêu | - | Danh sách KPI | Xem tất cả các KPI |  | trueYellowTEAM 1 |
| Giao bộ KPI | Xem bộ KPI áp dụng cho Vùng/Khu vực mà user đang login | trueRed1.1.0   * Tạo mới giao KPI: Danh sách nhân viên hiển thị theo salesforce đã mô tả bên trên. | trueYellowTEAM 1 |
| Báo cáo KPI | Xem báo cáo bộ KPI áp dụng cho Vùng/Khu vực mà user đang login | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP/nhân viên và theo rule salesforce. | trueYellowTEAM 1 |
| Quản lý kho | Kiểm kho | Duyệt kiểm kho NPP | Xem danh sách phiếu kiểm kho của NPP thuộc Vùng/Khu vực user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Duyệt NPP trả hàng | Xem danh sách phiếu trả hàng của NPP thuộc Vùng/Khu vực user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Duyệt điểm bán trả hàng | Xem danh sách phiếu trả hàng của Điểm bán của NPP thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) |  | trueYellowTEAM 1 |
| Import tồn kho đầu kỳ NPP | Xem danh sách import tồn kho đầu kỳ của NPP thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Chuyển kho NPP | Xem danh sách chuyển kho của NPP thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối chuyển/NPP nhận: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Báo cáo | Tồn kho hiện tại NPP | Xem báo cáo tồn kho của NPP  thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Nhập xuất tồn NPP | Xem báo cáo Nhập xuất tồn của NPP trực thuộc Vùng/Khu vực mà User đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Quản lý bán hàng | - | Đặt hàng NPP | Xem phiếu sell in của NPP thuộc Vùng/Khu Vực mà User đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Tổng hợp đơn hàng điểm bán | Xem danh sách đơn sellout của NPP thuộc Vùng/Khu Vực mà User đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Filter nhân viên: Danh sách nhân viên hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP,theo nhân viên và theo rule salesforce. | trueYellowTEAM 1 |
| Quản lý tuyến bán hàng | - | Nhiệm vụ | Xem tất cả nhiệm vụ | Không | trueBlueTEAM 2 |
| Nhóm nhiệm vụ | Xem danh sách nhóm nhiệm vụ thuộc Vùng/Khu vực mà user đang login | Không | trueBlueTEAM 2 |
| Tuyến bán hàng | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field NPP   **Danh sách:**   * Dữ liệu hiển thị tuyến bán hàng của nhân viên cấp dưới và chính nó  theo cây salesforce   **Bao gồm Import/ Export theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Tuyến thực tế | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó * Field Nhân viên: nhân viên cấp dưới và chính nó * Field Điểm bán * Field Nhà phân phối   **Danh sách:**   * Dữ liệu hiển thị nhân viên cấp dưới và chính nó  theo cây salesforce   **Bao gồm Import/ Export theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Chuyển tuyến Nhà phân phối | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý |  | trueBlueTEAM 2 |
| Chương trinh khuyến mãi | - | Quản lý khuyến mãi | Xem tất cả chương trình khuyến mãi |  | trueGreenTEAM 3 |
| Báo cáo | Theo dõi ngân sách khuyến mãi | Xem tất cả ngân sách khuyến mãi |  | trueGreenTEAM 3 |
| Sử dụng khuyến mãi | Xem tất cả báo cáo sử dụng khuyến mãi |  | trueGreenTEAM 3 |
| Quản lý trưng bày | - | Chương trình trưng bày | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc   Ví dụ: CTTB có đối tượng áp dụng các trường hợp như sau:   * CTTB không chọn đối tượng nào => hiểu là all vùng-Khu vực * CTTB chọn vùng -Khu vực => tức là vùng-Khu vực user login thuộc Vùng-Khu vực CTTB mới hiển thị * CTTB chọn NPP -> Vùng khu vực NPP phải thuộc Vùng-Khu vực user login * CTTB chọn Điểm bán => Cũng xét Vùng Khu vực điểm bán thuộc vùng-Khu vực user login mới hiển thị CTTB để xem   Nếu CTTB thuộc vùng Bắc - Trung - Nam  User login chỉ có phân quyền miền Nam thì:  1/ Chỉ xem danh sách CTTB áp dụng cho Miền Nam  2/ Khi khởi tạo cũng chỉ load tất cả các dữ liệu cài đặt theo Vùng-Khu vực được phân quyền  3/ Khi chọn edit CTTB → Chỉ load các dữ liệu để cài đặt CTTB của Miền Nam  Trường hợp xóa tất cả dữ liệu và chọn Lưu → báo lỗi bắt buộc phải có ít nhất một dữ liệu mới cho lưu.  4/ User Miền Trung; Bắc không nhìn thấy dữ liệu của Miền Nam và ngược lại\  5/ Các dữ liệu lấy từ master như: Loại/Vị Trí/Hạng/ Kênh bán hàng; Bộ lọc các Tỉnh/ Thành phố; Quận/huyện; Phường/Xã ... lất tất cả theo master data để chọn. Nhưng chỉ các dữ liệu thuộc Vùng/Khu vực hoặc NPP chăm sóc mới hiển thị sau khi lọc | Không | trueBlueTEAM 2 |
| Danh sách đăng ký trưng bày | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc   User thuộc các NPP chăm sóc khác nhau không nhìn thấy dữ liệu của nhau  ví dụ   * User 1 chọn NPP chăm sóc A * user 2 chọn NPP chăm sóc B * 2 User này ko nhìn thấy dữ liệu của nhau   Trường hợp 1 điểm bán thuộc nhiều NPP => Điểm bán nào của NPP nào thuộc tuyến bán hàng nào đăng ký trước thì hiển thị. Các NPP còn lại không nhìn thấy dữ liệu này | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Nhà phân phối * Field Tuyến   **Danh sách:**   * Dữ liệu hiển thị phiếu đăng ký theo Tuyến bán hàng của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Import/ Export theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Tiến trình trưng bày | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó * Field  Nhân viên chăm sóc: nhân viên cấp dưới và chính nó   **Danh sách:**   * Dữ liệu hiển thị tiến trình trưng bày theo Tuyến bán hàng của nhân viên cấp dưới theo cây salesforce   **Bao gồm Import/ Export theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Danh sách trả thưởng trưng bày | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó * Field  Nhân viên chăm sóc: nhân viên cấp dưới và chính nó   **Danh sách:**   * Dữ liệu hiển thị trả thưởng trưng bày theo Tuyến bán hàng của nhân viên cấp dưới theo cây salesforce   **Bao gồm Import/ Export theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Tông quan chương trình trưng bày | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc   Lưu ý: Dữ liệu hiển thị "danh sách đăng ký, tiến trình, trả thưởng" là của NPP trên tuyến bán hàng | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  Dữ liệu hiển thị "danh sách đăng ký, tiến trình, trả thưởng" là của NPP trên tuyến bán hàng và theo cây saleforce của TKTT được gán | trueBlueTEAM 2 |
| Quản lý tích lũy | - | Chương trình tích lũy | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc   Ví dụ: CTTL có đối tượng áp dụng các trường hợp như sau:   * CTTL không chọn đối tượng nào => hiểu là all vùng-Khu vực * CTTL chọn vùng -Khu vực => tức là vùng-Khu vực user login thuộc Vùng-Khu vực CTTL mới hiển thị * CTTL chọn NPP -> Vùng khu vực NPP phải thuộc Vùng-Khu vực user login * CTTL chọn Điểm bán => Cũng xét Vùng Khu vực điểm bán thuộc vùng-Khu vực user login mới hiển thị CTTL để xem   Nếu CTTL thuộc vùng Bắc - Trung - Nam  User login chỉ có phân quyền miền Nam thì:  1/ Chỉ xem danh sách CTTL áp dụng cho Miền Nam hoặc theo NPP chăm sóc (nếu có NPP chăm sóc)  2/ Khi khởi tạo cũng chỉ load tất cả các dữ liệu cài đặt theo Vùng-Khu vực được phân quyền hoặc theo NPP chăm sóc (nếu có NPP chăm sóc)  3/ Khi chọn edit CTTL → Chỉ load các dữ liệu để cài đặt CTTL của Miền Nam hoặc theo NPP chăm sóc (nếu có NPP chăm sóc)  Trường hợp xóa tất cả dữ liệu và chọn Lưu → báo lỗi bắt buộc phải có ít nhất một dữ liệu mới cho lưu.  4/ User Miền Trung; Bắc không nhìn thấy dữ liệu của Miền Nam và ngược lại  5/ Các dữ liệu lấy từ master như: Loại/Vị Trí/Hạng/ Kênh bán hàng; Bộ lọc các Tỉnh/ Thành phố; Quận/huyện; Phường/Xã ... lất tất cả theo master data để chọn. Nhưng chỉ các dữ liệu thuộc Vùng/Khu vực hoặc NPP chăm sóc mới hiển thị sau khi lọc | Không | trueBlueTEAM 2 |
| Danh sách đăng ký tích lũy | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc   User thuộc các NPP chăm sóc khác nhau không nhìn thấy dữ liệu của nhau  ví dụ   * User 1 chọn NPP chăm sóc A * user 2 chọn NPP chăm sóc B * 2 User này ko nhìn thấy dữ liệu của nhau   Trường hợp 1 điểm bán thuộc nhiều NPP => Điểm bán nào của NPP nào thuộc tuyến bán hàng nào đăng ký trước thì hiển thị. Các NPP còn lại không nhìn thấy dữ liệu này | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Nhà phân phối * Field Tuyến   **Danh sách:**   * Dữ liệu hiển thị phiếu đăng ký theo Tuyến bán hàng của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Import/ Export theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Tiến trình tích lũy | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó * Field  Nhân viên chăm sóc: nhân viên cấp dưới và chính nó   **Danh sách:**   * Dữ liệu hiển thị tiến trình theo Tuyến bán hàng của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Import/ Export theo phân quyền trên màn hình** |  |
| Danh sách trả thưởng tích lũy | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó * Field  Nhân viên chăm sóc: nhân viên cấp dưới và chính nó   **Danh sách:**   * Dữ liệu hiển thị trả thưởng theo Tuyến bán hàng của nhân viên cấp dưới theo cây salesforce   **Bao gồm Import/ Export theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Tổng quan Chương trình tích lũy | Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc   Lưu ý: Dữ liệu hiển thị "danh sách đăng ký, tiến trình, trả thưởng" là của NPP trên tuyến bán hàng | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  Dữ liệu hiển thị "danh sách đăng ký, tiến trình, trả thưởng" là của NPP trên tuyến bán hàng và theo cây saleforce của TKTT được gán | trueBlueTEAM 2 |
| Quản lý khảo sát | - | Bộ khảo sát | Nếu user login không có mapping tài khoản thị trường:  1/ Phân quyền theo Vùng/ Khu vực   * Xem danh sách: Chỉ hiển thị CTKS thuộc Vùng - Khu vực của tài khoản người dùng được set. * Thực hiện Tạo mới / Chỉnh sửa khảo sát với   + Chỉ hiển thị dữ liệu thuộc Vùng - Khu vực của tài khoản người dùng được set. * Bấm vào nút "Thêm" -> Thực hiện tìm kiếm:   + Chỉ hiển thị dữ liệu thuộc Vùng - Khu vực của tài khoản người dùng được set.   + Vùng: Hiển thị tất cả nhưng disable Vùng/khu vực không thuộc phân quyền   2/ Không có NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  Truy cập vào màn hình "Bộ khảo sát"  **Xem danh sách:** Thấy các CTKS thỏa điều kiện có Đối tượng khảo sát là điểm bán / nhân viên có điều kiện áp dụng thỏa:   * Theo Nhân viên: nhân viên nằm trong cây cấp dưới **và chính nó của** TKTT. * Theo Tuyến: tuyến thuộc nhân viên cấp dưới **và chính nó** của TKTT. * Theo Điểm bán: điểm bán thuộc tuyến của cấp dưới và chính nó của  TKTT. * Theo Vùng/Khu vực: vùng/khu vực của tài khoản được gán thị trường.   **Thực hiện tạo mới/ Chỉnh sửa:**   * Chỉ được chỉnh các điều kiện áp dụng thuộc phạm vi phân quyền (cấp dưới / khu vực gán). Không thể mở rộng phạm vi áp dụng ra ngoài vùng hoặc nhân sự không thuộc cây saleforce. * Các vùng/khu vực khác hiển thị nhưng disable không cho điều chỉnh. * Nếu người dùng chọn “Nhân viên” làm đối tượng khảo sát:   + Vùng -> Chỉ hiển thị vùng / khu vực **của TKTT được gán**  * + Chọn nhân viên: **danh sách nhân viên gồm cấp dưới** và chính nó (SS; SM) của TKTT. Quản lý trực tiếp lấy theo cây saleforce cấp trên của TKTT.  * Nếu người dùng chọn Điểm bán   + Theo Nhân viên: nhân viên (SS; SM) nằm trong cây **cấp dưới và chính nó của** TKTT.  * + Theo Tuyến: tuyến (SS; SM) **thuộc nhân viên cấp dưới** và chính nó của TKTT.  * + Theo Điểm bán: điểm bán thuộc tuyến của **cấp dưới và chính nó của** TKTT.  * + Theo Vùng/Khu vực: vùng/khu vực **của TKTT được gán**   **Bao gồm Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Thống kê khảo sát | Nếu user login không có mapping tài khoản thị trường:   * Phân quyền Vùng/ Khu vực: Chỉ hiển thị CTKS thuộc Vùng - Khu vực của tài khoản người dùng được set. * Không có NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Bộ khảo sát: Thấy các CTKS thỏa điều kiện có Đối tượng khảo sát là điểm bán / nhân viên có điều kiện áp dụng thỏa:   + Theo Nhân viên: nhân viên nằm trong cây cấp dưới **và chính nó của** TKTT.   + Theo Tuyến: tuyến thuộc nhân viên cấp dưới **và chính nó** của TKTT.   + Theo Điểm bán: điểm bán thuộc tuyến của cấp dưới và chính nó của  TKTT.   + Theo Vùng/Khu vực: vùng/khu vực của tài khoản được gán thị trường.   **Danh sách:**   * Dữ liệu hiển thị thuộc nhân viên / điểm bán theo tuyến của nhân viên **cấp dưới và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Quản lý lịch làm việc | - | Tổng quan kế hoạch làm việc | Nếu user login không có mapping tài khoản thị trường: Hiển thị thông báo: Vui lòng cài đặt tài khoản thị trường để thực hiện chức năng này! | Nếu user login có mapping tài khoản thị trường: Dữ liệu hiển thị nhân viên cấp dưới theo salesforce **(Gồm chính nó và cấp dưới)** | trueBlueTEAM 2 |
| Danh sách chờ duyệt | Nếu user login không có mapping tài khoản thị trường: Hiển thị thông báo: Vui lòng cài đặt tài khoản thị trường để thực hiện chức năng này! | Nếu user login có mapping tài khoản thị trường: Dữ liệu hiển thị nhân viên **cấp dưới theo salesforce** | trueBlueTEAM 2 |
| Yêu cầu nghỉ phép | Xem tất cả thông báo có vùng/khu vực áp dụng theo vùng/ khu vực mà user đang login | Nếu user login có mapping tài khoản thị trường: Dữ liệu hiển thị nhân viên **cấp dưới theo salesforce** | trueBlueTEAM 2 |
| Hỗ trợ | - | Hỗ trợ - Xử lý yêu cầu | Xem tất cả hỗ trợ | Không | trueBlueTEAM 2 |
| Quản lý thông báo | - | Quản lý thông báo | Xem tất cả thông báo có vùng/khu vực áp dụng theo vùng/ khu vực mà user đang login | Không | trueBlueTEAM 2 |
| Lịch sử thông báo | Xem tất cả thông báo có vùng/khu vực áp dụng theo vùng/ khu vực mà user đang login | Không | trueBlueTEAM 2 |
| Báo cáo | Bán hàng | Tổng hợp đơn hàng bán NPP | Xem báo cáo tổng hợp đơn hàng của NPP đó thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Doanh thu theo sản phẩm | Xem báo cáo doanh thu sản phẩm của NPP đó thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định.   * Chỉ tính doanh thu các phiếu sellout thỏa điều kiện trên | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Doanh thu theo điểm bán | Xem báo cáo doanh thu điểm bán của NPP đó thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định   * Chỉ tính doanh thu các phiếu sellout thỏa điều kiện trên | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Doanh thu theo nhân viên bán hàng | Xem báo cáo doanh thu nhân viên của NPP đó thuộc Vùng/Khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định   * Chỉ tính doanh thu các phiếu sellout thỏa điều kiện trên | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP, theo nhân viên bán hàng và theo rule salesforce. | trueYellowTEAM 1 |
| Đơn trả hàng | Xem báo cáo NPP trả hàng lên HO thỏa điều kiện:   * Phiếu trả hàng của NPP trực thuộc vùng/khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| NPP đặt hàng | Xem báo cáo Sell-in thỏa điều kiện:   * Phiếu sell-in của NPP trực thuộc vùng/khu vực mà user đang login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Phân tích | Phân tích hiệu quả tuyến | Theo document: [[HO] Báo cáo Phân Tích Hiệu Quả Tuyến - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53037649)  Nếu user login không có mapping tài khoản thị trường:   * Hiển thị tất cả theo Vùng/Khu vực quản lý * NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field nhà phân phối * Field Nhân viên: nhân viên cấp dưới và chính nó * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó   **Danh sách:**   * Dữ liệu hiển thị theo Tuyến bán hàng của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Truy vấn toạ độ nhân viên | Theo document: [[HO] Truy vấn tọa độ nhân viên - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53047676)   * Nếu user login không có mapping tài khoản thị trường:    + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | **Phân quyền theo cây Saleforce**   * Khi user đăng nhập có mapping tài khoản thị trường với role = SD, trên bản đồ sẽ hiển thị các nhân viên có chức vụ: RSM, ASM, SS, SM, hiển thị [nhân viên cấp dưới theo cây salesforce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) và chính nhân viên đang đăng nhập * Khi user đăng nhập có mapping tài khoản thị trường với role = RSM, trên bản đồ sẽ hiển thị các nhân viên có chức vụ: ASM, SS, SM, hiển thị [nhân viên cấp dưới theo cây salesforce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) và chính nhân viên đang đăng nhập * Khi user đăng nhập có mapping tài khoản thị trường với role = ASM, trên bản đồ sẽ hiển thị các nhân viên có chức vụ: SS, SM, hiển thị [nhân viên cấp dưới theo cây salesforce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) và chính nhân viên đang đăng nhập * Khi user đăng nhập có mapping tài khoản thị trường với role = SS, trên bản đồ sẽ hiển thị các nhân viên có chức vụ: SM,  hiển thị [nhân viên cấp dưới theo cây salesforce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) và chính nhân viên đang đăng nhập | trueBlueTEAM 2 |
| Độ phủ sản phẩm | Theo document: [[HO] Báo cáo Độ Phủ Theo Sản Phẩm - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53037847)   * Nếu user login không có mapping tài khoản thị trường:    + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | Không | trueBlueTEAM 2 |
| Chấm công | Nếu user login không có mapping tài khoản thị trường: Hiển thị tất cả | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Danh sách:**   * Dữ liệu hiển thị theo Nhân viên của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Chi tiết đăng nhập hệ thống | Theo document: [HO] [HT] Báo Cáo Chi Tiết Đăng Nhập Hệ Thống   * Nếu user login không có mapping tài khoản thị trường:   + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Nhà phân phối   **Danh sách:**   * Dữ liệu hiển thị nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Lịch sử đăng nhập hệ thống | Theo document: [HO] [HT] Báo Cáo Lịch Sử Đăng Nhập Hệ Thống   * Nếu user login không có mapping tài khoản thị trường:   + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Nhà phân phối   **Danh sách:**   * Dữ liệu hiển thị nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Hình ảnh bày hàng | * Nếu user login không có mapping tài khoản thị trường:    + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Nhân viên: nhân viên cấp dưới và chính nó   **Danh sách:**   * Dữ liệu hiển thị theo Điểm bán trên các Tuyến bán hàng của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Tồn kho điểm bán | * Nếu user login không có mapping tài khoản thị trường:    + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Điểm bán * Field  Nhân viên: nhân viên cấp dưới và chính nó   **Danh sách:**   * Dữ liệu hiển thị theo Điểm bán trên các Tuyến bán hàng của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Tuyến bán hàng | Tổng hợp Viếng thăm điểm bán | Theo document: [[HO] Báo cáo Tổng Hợp Viếng Thăm Điểm Bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036726)   * Nếu user login không có mapping tài khoản thị trường:    + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Nhà phân phối * Field  Nhân viên: nhân viên cấp dưới và chính nó * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó   **Danh sách:**   * Dữ liệu hiển thị theo nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Chi tiết viếng thăm điểm bán | Theo document: [[HO] Báo cáo Chi Tiết Viếng Thăm Điểm Bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036896)   * Nếu user login không có mapping tài khoản thị trường:    + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Nhà phân phối * Field  Nhân viên: nhân viên cấp dưới và chính nó * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó * Field Điểm bán   **Danh sách:**   * Dữ liệu hiển thị điểm bán trên tuyến bán hàng của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Tổng Hợp Tuyến Bán Hàng | Theo document: [HO] [HT] Báo Cáo Tổng Hợp Tuyến Bán Hàng   * Nếu user login không có mapping tài khoản thị trường:    + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Nhà phân phối * Field  Nhân viên: nhân viên cấp dưới và chính nó * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó   **Danh sách:**   * Dữ liệu hiển thị trên tuyến bán hàng của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Doanh số điểm bán trên tuyến | Theo document: [HO] [HT] Báo Cáo Doanh Số Điểm Bán Trên Tuyến   * Nếu user login không có mapping tài khoản thị trường:   + Hiển thị tất cả theo Vùng/Khu vực quản lý   + NPP chăm sóc | **Nếu user login có mapping tài khoản thị trường:****Phân quyền theo cây Saleforce**  **Vùng lọc:**   * Field Vùng * Field Nhà phân phối * Field  Nhân viên: nhân viên cấp dưới và chính nó * Field Tuyến bán hàng: nhân viên cấp dưới và chính nó * Field Điểm bán   **Danh sách:**   * Dữ liệu hiển thị điểm bán trên tuyến bán hàng của nhân viên cấp dưới **và chính nó** theo cây salesforce   **Bao gồm Export/Import theo phân quyền trên màn hình** | trueBlueTEAM 2 |
| Quản trị hệ thống | - | Tài khoản người dùng | * Nếu user login không có mapping tài khoản thị trường:   + Hiển thị tất cả theo Vùng/Khu vực quản lý của user login   + NPP chăm sóc: Không   (Chỉnh sửa, thêm mới, xem đều chỉ thấy dữ liệu theo Vùng/Khu vực mà user đang login) | Không | trueBlueTEAM 2 |
| Nhóm quyền | Xem tất cả dữ liệu |  | trueBlueTEAM 2 |
| Quy trình duyệt | Xem tất cả dữ liệu |  | trueBlueTEAM 2 |
| Chốt số kỳ | Xem danh sách chốt sổ của NPP trực thuộc Vùng/Khu vực mà user login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Mở chốt sổ | Xem danh sách mở sổ của NPP trực thuộc Vùng/Khu vực mà user login hoặc chỉ thuộc NPP chăm sóc mà user được chỉ định) | trueRed1.1.0   * Filter Nhà Phân Phối: Danh sách NPP hiển thị theo rule phân quyền theo salesforce * Lưới danh sách: Hiển thị danh sách theo NPP và theo rule salesforce. | trueYellowTEAM 1 |
| Dữ liệu chung | Xem danh sách tất cả dữ liệu chung |  | trueBlueTEAM 2 |
| Cấu hình chấm công | Xem tất cả danh sách cấu hình chấm công |  | trueBlueTEAM 2 |
| Thiết lập vị trí chấm công | Xem tất cả dữ liệu |  | trueBlueTEAM 2 |
| Cấu hình chung | Xem tất cả danh sách cấu hình chung |  | trueBlueTEAM 2 |
| NPP (khi user chọn 1 NPP để xem)  Sau khi login thành công, tất cả dữ liệu load theo NPP đã chọn | Dữ liệu nền | - | Danh sách điểm bán | Load danh sách điểm bán thuộc NPP mà user đang login |  | trueYellowTEAM 1 |
| Danh sách sản phẩm | Xem tất cả danh sách sản phẩm |  | trueYellowTEAM 1 |
| Giá bán | Xem bảng giá bán áp dụng cho NPP mà user đang login |  | trueYellowTEAM 1 |
| Tuyến bán hàng | Xem danh sách tuyến bán hàng của NPP mà user đang login  1/ Nếu user login có mapping tài khoản thị trường: Dữ liệu hiển thị Tuyến bán hàng của nhân viên cấp dưới và chính nó theo cây salesforce (**Phân quyền theo cây Saleforce)**  2/ Nếu user login không có mapping tài khoản thị trường: Hiển thị tất cả theo NPP đã chọn |  | trueBlueTEAM 2 |
| Quản lý mua hàng | - | Purchase orders | Xem danh sách Purchase Order của NPP mà user đang login |  | trueYellowTEAM 1 |
| Nhập hàng | Xem danh sách phiếu nhập kho NPP mà user đang login |  | trueYellowTEAM 1 |
| Trả hàng NCC | Xem danh sách phiếu trả hàng của NPP mà user đang login |  | trueYellowTEAM 1 |
| Quản lý bán hàng | - | Đơn bán hàng | Xem danh sách phiếu sellout của NPP mà user đang login | trueRed1.1.0   * Filter nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) * Lưới danh sách: Hiển thị danh sách theo nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) | trueYellowTEAM 1 |
| Xuất kho | Xem danh sách phiếu xuất kho của NPP mà user đang login |  | trueYellowTEAM 1 |
| Điểm bán trả hàng lẻ | Xem danh sách phiếu trả hàng của NPP mà user đang login |  | trueYellowTEAM 1 |
| Điểm bán trả hàng nguyên đơn | Xem danh sách phiếu trả hàng của NPP mà user đang login |  | trueYellowTEAM 1 |
| Quản lý kho | - | Kiểm kho | Xem danh sách phiếu kiểm kho của NPP mà user đang login |  | trueYellowTEAM 1 |
| Chuyển kho nội bộ | Xem danh sách phiếu chuyển kho của NPP mà user đang login |  | trueYellowTEAM 1 |
| Chuyển kho NPP | Xem danh sách phiếu chuyển kho của NPP chuyển hoặc NPP nhận mà user đang login |  | trueYellowTEAM 1 |
| Chuyển kho vansales | Xem danh sách phiếu chuyển kho của NPP mà user đang login | trueRed1.1.0   * Lưới danh sách: Hiển thị danh sách theo nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) * Tạo mới chuyển kho: Chọn nhân viên theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) | trueYellowTEAM 1 |
| Báo cáo | Phân tích | Phân tích hiệu quả tuyến | Theo document: [[HO] Báo cáo Phân Tích Hiệu Quả Tuyến - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53037649)  Xem danh sách tuyến bán hàng thuộc NPP mà user đang login   * Nếu user login không có mapping tài khoản thị trường: Hiển thị tất cả theo NPP đã chọn | * Filter và Lưới danh sách: Hiển thị danh sách theo nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) | trueBlueTEAM 2 |
| Đơn đặt hàng | Xem báo cáo đơn đặt hàng thuộc NPP mà user đang login |  | trueYellowTEAM 1 |
| Doanh thu theo NVBH | Xem báo cáo doanh thu theo NVBH của NPP mà user đang login   * Chỉ tính các phiếu sellout thỏa điều kiện trên |  | trueYellowTEAM 1 |
| Doanh thu theo điểm bán | Xem báo cáo doanh thu theo điểm bán các đơn sellout của NPP mà user đang login   * Chỉ tính các phiếu sellout thỏa điều kiện trên |  | trueYellowTEAM 1 |
| Doanh thu theo sản phẩm | Xem báo cáo doanh thu theo sản phẩm các đơn sellout của NPP mà user đang login   * Chỉ tính các phiếu sellout thỏa điều kiện trên |  | trueYellowTEAM 1 |
| Tổng hợp đơn hàng bán | Xem báo cáo tổng hợp đơn hàng thuộc NPP mà user đang login (tính cả đơn vansales) |  | trueYellowTEAM 1 |
| Điểm bán trả hàng | Xem báo cáo tổng hợp phiếu trả nguyên đơn/phiếu trả lẻ thuộc NPP mà user đang login |  | trueYellowTEAM 1 |
| Kho | Báo cáo Tồn kho hiện tại NPP | Xem danh sách dữ liệu tồn kho của kho trực thuộc NPP mà user đang login |  | trueYellowTEAM 1 |
| Nhập kho | Xem danh sách phiếu nhập kho trực thuộc NPP mà user đang login |  | trueYellowTEAM 1 |
| Xuất kho | Xem danh sách phiếu xuất kho trực thuộc NPP mà user đang login |  | trueYellowTEAM 1 |
| Báo cáo nhập xuất tồn | Xem danh sách Xuất nhập tồn trực thuộc NPP mà user đang login |  | trueYellowTEAM 1 |
| Trưng bày | Chương trình trưng bày | Xem danh sách chương trình trưng bày thuộc NPP mà user đang login |  | trueBlueTEAM 2 |
| Danh sách đăng ký trưng bày | Xem danh sách đăng ký trưng bày thuộc tuyến bán hàng của NPP mà user đang login | * Filter và Lưới danh sách: Hiển thị danh sách theo nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) | trueBlueTEAM 2 |
| Tiến trình trưng bày | Xem danh sách tiến trình trưng bày thuộc các tuyến bán hàng của NPP mà user đang login | * Filter và Lưới danh sách: Hiển thị danh sách theo nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) | trueBlueTEAM 2 |
| Danh sách trả thưởng trưng bày | Xem danh sách trả thưởng trưng bày thuộc các tuyến bán hàng của NPP mà user đang login | * Filter và Lưới danh sách: Hiển thị danh sách theo nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) | trueBlueTEAM 2 |
| Tích lũy | Chương trình tích lũy | Xem danh sách chương trình tích lũy  thuộc NPP mà user đang login |  | trueBlueTEAM 2 |
| Danh sách đăng ký tích lũy | Xem danh sách đăng ký tích lũy thuộc tuyến bán hàng của NPP mà user đang login | * Filter và Lưới danh sách: Hiển thị danh sách theo nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) | trueBlueTEAM 2 |
| Tiến trình tích lũy | Xem danh sách tiến trình tích lũy thuộc tuyến bán hàng của NPP mà user đang login | * Filter và Lưới danh sách: Hiển thị danh sách theo nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) | trueBlueTEAM 2 |
| Danh sách trả thưởng tích lũy | Xem danh sách trả thưởng tích lũy thuộc tuyến bán hàng của NPP mà user đang login | * Filter và Lưới danh sách: Hiển thị danh sách theo nhân viên bán hàng theo NPP chăm sóc (nhân viên có tuyến thuộc NPP chăm sóc đã chọn) | trueBlueTEAM 2 |
| Quản trị hệ thống | - | Chốt số kỳ | Xem danh sách chốt sổ kỳ thuộc NPP mà user đang login |  | trueYellowTEAM 1 |