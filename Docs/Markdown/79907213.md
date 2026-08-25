|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | [[OR-3590] [DMS90-HT] Khai báo Chỉ tiêu KPI - Finviet - Management System](https://hotro.finviet.com.vn/browse/OR-3590) |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Thông tin cần điều chỉnh:

[[OR-3590] [DMS90-HT] Khai báo Chỉ tiêu KPI - Finviet - Management System](https://hotro.finviet.com.vn/browse/OR-3590)

1. Web bc KPI: không khai được Ao có ràng doanh số tối thiểu, miễn phát sinh DS từ 1 đồng là d tính 1 AO  
--> Thêm thông tin cài đặt doanh số cho KPI Active Outlet

2. Web bc KPI: không khai được NAO có ds , mặc định tạo mới là được tính NAO  
--> Thêm thông tin cài đặt doanh số cho KPI Điểm bán mở mới

3. Web bc KPI: không điều chỉnh được KPI đã khai trước đó chỉ có thêm mới NVBH vào, không ngừng , không xóa d KPI cũ

-->

* Có thể điều chỉnh target cho từng nv, sau khi chốt KPI ko dc điều chỉnh
* Có thể xóa nhân viên đã khai báo -> Khi xóa ra thì mất đi thì phần chỉ tiêu và thực đạt cũng mất đi

# 1 Bổ sung điều kiện phụ KPI

## 1.1 Bổ sung điều kiện phụ

* 2 KPI Active Outlet và Điểm bán mở mới sẽ bổ sung thêm điều kiện phụ như sau:

Nếu 2 KPI Active Outlet và Điểm bán mở mới được thêm vào phiếu giao KPI thì trên tiêu đề của 2 KPI này sẽ xuất hiện button , có tooltip khi hover vào sẽ hiển thị: Nhấn vào để thêm điều kiện phụ doanh số

Khi nhấn button , sẽ thêm 1 cột vào phía sau 2 KPI như sau:

* Điều kiện doanh số (Điểm bán mở mới)
* Điều kiện doanh số (Cửa hàng hoạt động)

* Sau khi thêm cột vào thì button  ở 2 cột KPI ẩn đi
* Trên 2 cột mới thêm vào sẽ hiển thị button . Khi nhấn button  ở đây sẽ hiển thị cảnh báo: Bạn có muốn xóa dữ liệu điều kiện doanh số không?

* + Đồng ý: Xóa cột Điều kiện doanh số (...) và hiển thị lại button  ở cột KPI
  + Trở lại: Tắt popup và trở về màn hình hiển tại.

## 1.2 Rule nhập điều kiện phụ

### 1.2.1 Nhập trên web portal - tab Giao KPI

* Phương thức:
  + Hiển thị mặc định 2 phương thức: >= và >
  + Chỉ được chọn 1 phương thức
  + Nếu Giá trị là số >0 thì bắt buộc phải chọn phương thức, nếu không chọn hiển thị cảnh báo: Vui lòng chọn phương thức ở dòng nhân viên @Mã nhân viên - @Tên nhân viên
  + Nếu Giá trị là số <= 0 thì không bắt buộc chọn phương thức
* Giá trị:
  + Nhập số > 0
  + Nếu phương thức có chọn dữ liệu thì giá trị bắt buộc phải nhập số > 0, nếu không nhập hiển thị cảnh báo: Vui lòng nhập giá trị ở dòng nhân viên @Mã nhân viên - @Tên nhân viên
  + Nếu phương thức không chọn dữ liệu thì giá trị không bắt buộc phải nhập
* Tab Chỉ Tiêu Quản lý giữ như cũ không thay đổi.

### 1.2.2 Nhập trên file import

* File import bổ sung 4 cột trước cột Mã đối tượng: Vùng, Khu vực, Mã Nhà phân phối, Tên Nhà Phân Phối: 4 cột này không kiểm tra khi import, không xử lý import vào hệ thống, chỉ để người dùng tự nhập liệu và lưu trữ.
* File import bổ sung 4 cột liên quan đến điều kiện phụ: Điều kiện doanh số (NEW\_STORE),  Giá trị điều kiện doanh số (NEW\_STORE), Điều kiện doanh số (ACTIVE\_OUTLET),  Giá trị điều kiện doanh số (ACTIVE\_OUTLET)
  + Điều kiện doanh số (NEW\_STORE) / Điều kiện doanh số (ACTIVE\_OUTLET):
    - Hiển thị mặc định 2 phương thức: >= và > dạng selectbox để người dùng chọn
    - Chỉ được chọn 1 phương thức
    - Nếu Giá trị điều kiện doanh số (NEW\_STORE), Giá trị điều kiện doanh số (ACTIVE\_OUTLET) là số >0 thì bắt buộc phải chọn phương thức, nếu không chọn hiển thị cảnh báo: Dòng n chưa chọn phương thức Điều kiện doanh số (NEW\_STORE) / Điều kiện doanh số (ACTIVE\_OUTLET)!
  + Giá trị điều kiện doanh số (NEW\_STORE) / Giá trị điều kiện doanh số (ACTIVE\_OUTLET):
    - Nhập số > 0
    - Nếu Điều kiện doanh số (NEW\_STORE) / Điều kiện doanh số (ACTIVE\_OUTLET) có chọn dữ liệu thì giá trị bắt buộc phải nhập số > 0, nếu không nhập hiển thị cảnh báo: Dòng n chưa nhập Giá trị điều kiện doanh số (NEW\_STORE) / Giá trị điều kiện doanh số (ACTIVE\_OUTLET)
* Template như sau:

## 1.3 Thay đổi rule tính KPI khi có điều kiện phụ

### 1.3.1 KPI Điểm bán mở mới

Số điểm bán hàng mới = Số lượng điểm bán mà NVBH mở mới trên App theo**key là NVBH**, trong đó Điểm bán thỏa điều kiện:

* Điểm bán phải được duyệt trong thời gian diễn ra KPI.
* Điểm bán phải active trong suốt thời gian KPI (không bị in-active).
* Người tạo điểm bán là Salesman
* **Điểm bán có doanh số đạt điều kiện theo phương thức và giá trị được nhập ở điều kiện phụ: >= giá trị doanh số hoặc > giá trị doanh số**
* Đơn hàng được truy xuất để xét doanh số: 
  + Trạng thái đơn hàng = "Đã xuất kho"
  + Đơn không có trả hàng trong thời gian diễn ra KPI
  + Đơn hàng có ngày đặt hàng diễn ra trong thời gian tính KPI
  + Tính cả đơn trong tuyến & ngoại tuyến.
  + Tính cả đơn tạo trên app và web (có thông tin hay không có thông tin nhân viên đều tính, chỉ cần có thông tin điểm bán trên đơn hàng là tính)

### 1.3.2 KPI Điểm bán hoạt động

Công thức: Count distinct (Điểm bán) có phát sinh doanh số. Trong đó:

* Có doanh số sau VAT > 0 trong thời gian tính KPI
* **Điểm bán có doanh số đạt điều kiện theo phương thức và giá trị được nhập ở điều kiện phụ: >= giá trị doanh số hoặc > giá trị doanh số**
* Đơn hàng được truy xuất để xét doanh số: 
  + Trạng thái đơn hàng = "Đã xuất kho"
  + Đơn không có trả hàng trong thời gian diễn ra KPI
  + Đơn hàng có ngày đặt hàng diễn ra trong thời gian tính KPI
  + Tính cả đơn trong tuyến & ngoại tuyến.
  + Tính cả đơn tạo trên app và web (có thông tin hay không có thông tin nhân viên đều tính, chỉ cần có thông tin điểm bán trên đơn hàng là tính)

# 2 Cho phép chỉnh sửa một số thông tin khi KPI đã duyệt

* Trường hợp **KPI có trạng thái Đã duyệt và Chưa Khóa Số Chỉ tiêu KPI**, người dùng có thể điều chỉnh các thông tin:
* Bổ sung button edit cho các phiếu giao KPI **có trạng thái Đã duyệt và Chưa Khóa Số Chỉ tiêu KPI**

* Khi nhấn vào edit mở ra màn hình điều chỉnh KPI:

* Cho phép điều chỉnh chỉ tiêu KPI của từng nhân viên như ở trường hợp tạo mới
* Cho phép xóa điều kiện phụ doanh số
* Cho phép xóa nhân viên:
  + Khi nhấn tiếp tục, tính lại chỉ tiêu của cấp quản lý theo [công thức KPI](https://kb.finviet.com.vn/pages/viewpage.action?pageId=61166226#id-%5BHO%5DBổsungchỉtiêumớivàKPIchocấpquảnlýtạiGiaoKPI-3.KPIchocấpquảnlý) và trừ đi phần chỉ tiêu của nhân viên đã bị xóa.
  + Nhân viên khi bị xóa ra khỏi KPI thì cấp quản lý sẽ không được tính cả chỉ tiêu và thực đạt.
* Khi nhấn lưu thì thực hiện tính lại thực đạt của tất cả KPI trên phiếu giao → Thay đổi số liệu trên báo cáo (nếu có) và đồng bộ về báo cáo KPI trên potal, trên App SM và App QL.