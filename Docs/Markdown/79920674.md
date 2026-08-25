|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0: Thêm cột thông tin **Nghiệp vụ tạo đơn Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5457**  **RedV1.0.1:**Thêm cột mã CTKM bên cạnh cột Tên CTKM |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Báo cáo Tổng Hợp Đơn Hàng Bán NPP

## 1. Thêm thông tin Nghiệp vụ tạo đơn

* Bổ sung thêm cột "Nghiệp vụ tạo đơn"
* Đối với đơn hàng có nguồn đơn hàng = WEB, mặc định  "Nghiệp vụ tạo đơn" = **Tạo đơn trên web**
* Đối với đơn hàng có nguồn đơn hàng = APP
  + Trường hợp user đặt hàng ở **màn hình nhiệm vụ viếng thăm** khi thực hiện viếng thăm cửa hàng **trong tuyến** (trong thời gian checkin điểm bán) → Nghiệp vụ tạo đơn = **Đơn hàng trong tuyến**
    - Trường hợp tạo nhiều đơn cũng sẽ tính là đơn hàng trong tuyến.
    - Ví dụ: Viếng thăm  > đặt hàng > tạo đơn > tạo thành công back lại màn hình đơn hàng hôm nay > tạo tiếp đơn → Đơn này cũng sẽ tính là đơn hàng trong tuyến
  + Trường hợp user đặt hàng ở **màn hình nhiệm vụ viếng thăm** khi thực hiện viếng thăm cửa hàng **ngoại tuyến** (trong thời gian checkin điểm bán) → Nghiệp vụ tạo đơn = **Đơn hàng ngoại tuyến**
  + Trường hợp user đặt hàng ở màn hình nhiệm vụ chăm sóc, điểm bán **không có** trong tuyến thực tế ngày hiện tại → Nghiệp vụ tạo đơn = **Đơn hàng chăm sóc**
  + Trường hợp user đặt hàng ở màn hình nhiệm vụ chăm sóc, điểm bán **có** trong tuyến thực tế ngày hiện tại (có checkin điểm bán/không checkin điểm bán) → Nghiệp vụ tạo đơn = **Đơn hàng chăm sóc**
  + Trường hợp user đặt lại đơn hàng→ Nghiệp vụ tạo đơn = **Đơn hàng chăm sóc**
  + Trường hợp user chỉnh sửa đơn hàng → Nghiệp vụ tạo đơn giữ nguyên như lúc lưu đơn hàng lần đầu tiên
  + Các trường hợp đặt hàng còn lại → Nghiệp vụ tạo đơn = **Đơn hàng chăm sóc**

*(Trên đơn sẽ thêm field mới, route\_type (EXTERNAL, INTERNAL, null)* *với các trường hợp đơn có visit\_type = ROUTE,* *các đơn hiện tại chưa set sẽ có value là null, các đơn có route\_type = null → được tính là Đơn hàng chăm sóc)*

* FIle excel export cũng thếm 1 cột cuối cùng hiển thị thông tin "Nghiệp vụ tạo đơn"
* Bổ sung trên portal và file export excel/csv
* Apply cho màn hình:
  + HO - Báo cáo/Bán Hàng/Tổng Hợp Đơn Hàng Bán NPP
  + NPP - Báo cáo/Báo Cáo Phân Tích/Tổng Hợp Đơn Hàng Bán

## 2. Thêm thông tin Mã CTKM

**RedV1.0.1**

* Thêm cột thông tin Mã chương trình khuyến mãi bên cạnh cột Tên chương trình khuyến mãi
* Bổ sung trên portal và file export excel/csv
* Apply cho màn hình:
  + HO - Báo cáo/Bán Hàng/Tổng Hợp Đơn Hàng Bán NPP
  + NPP - Báo cáo/Báo Cáo Phân Tích/Tổng Hợp Đơn Hàng Bán