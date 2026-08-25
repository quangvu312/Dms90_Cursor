|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Danh sách cấu hình

Danh sách cấu hình sẽ update theo từng chức năng tương ứng

|  | Tên cấu hình | Đối tượng áp dụng | **Từ khóa** | **Loại** | **Giá trị** | Tên nhóm | Mô tả | Nơi sử dụng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Cấu hình xem dữ liệu doanh số KPI trước VAT hay sau VAT | GreenMOBILE  RedAPI | VAT\_DISPLAY\_CONFIGURATION | Boolean | * False: Xem dữ liệu trước VAT * True: Xem dữ liệu sau VAT | Khác | Cấu hình xem dữ liệu doanh số KPI trước VAT hay sau VAT |  |
| 2 | Cấu hình cho phép bán hàng hết hạn sử dụng trên hệ thống | GreenMOBILE  RedAPI  BluePORTAL | ALLOW\_EXPIRED\_PRODUCT\_ORDER | Number | * Số ngày hết hạn cho phép bán. * Nếu nhập số >=0 → Chỉ load các lô có (HSD - Ngày trên đơn) >= số đã nhập   + VD nhập 3 → Chỉ load các lô có (HSD - Ngày trên đơn) >=3   + VD nhập 0 → Load các lô có (HSD - Ngày trên đơn) >=0 * Nếu nhập số = -1  → Load tất cả các lô không quan tâm hạn sử dụng   + Trường hợp nhập số <0 mà khác -1 hiển thị thông báo: Số <0 chỉ được nhập -1. | Đơn hàng | * Số ngày hết hạn cho phép bán. * Nếu nhập số >=0 → Chỉ load các lô có (HSD - Ngày trên đơn) >= số đã nhập * Nếu nhập số = -1 → Load tất cả các lô không quan tâm hạn sử dụng |  |
| 3 | Cấu hình thời gian tối thiểu viếng thăm điểm bán | GreenMOBILE  RedAPI  BluePORTAL | STORE\_VISIT\_DURATION\_CONFIGURATION | Number | Số phút (đơn vị: phút)  Nhập min = 0; max = 720  nếu nhập >720 hiển thị msg: Số phút tối thiểu là 0, tối đa 720 phút.   * Ví dụ: 5 = 5 phút, 15 = 15 phút; 700 = 700 phút | Viếng thăm điểm bán | Thiết lập thời gian tối thiểu (tính bằng **phút**) theo cấu hình để hiển thị cảnh báo "Rời điểm bán" trên app SM khi chưa đủ thời gian cấu hình | APP SM Cấu hình viếng thăm điểm bán |
| 4 | Cấu hình trạng thái đơn hàng cho các báo cáo doanh số trên App | RedAPI  GreenMOBILE | ORDER\_STATUS\_FOR\_APP\_REPORT | Multiselect | Nhập giá trị các trạng thái đơn hàng muốn xem doanh số  Các trạng thái kết hợp với nhau theo điều kiện "Hoặc" |  | Nhập giá trị các trạng thái đơn hàng muốn xem doanh số  Các trạng thái kết hợp với nhau theo điều kiện "Hoặc" |  |
| 5 | Hiển thị Lot/Date trên đơn bán hàng | GreenMOBILE  RedAPI  BluePORTAL | DISPLAY\_LOT\_DATE\_IN\_SALES\_ORDER | Boolean | * True: Hiển thị lot/date trên đơn bán hàng * False: Ẩn lot/date trên đơn bán hàng | Đơn hàng | * True: Hiển thị lot/date trên đơn bán hàng * False: Ẩn lot/date trên đơn bán hàng |  |
| 6 | Cấu hình đồng bộ giá bán từ ERP Hương Thủy | RedAPIBluePORTAL | ENABLE\_ERP\_PRICE\_SYNC | Boolean | * True: Sync giá bán từ ERP Hương Thủy * False: Không sync giá bán từ ERP Hương Thủy, tạo giá thủ công trên DMS | Giá bán | * True: Sync giá bán từ ERP Hương Thủy * False: Không sync giá bán từ ERP Hương Thủy, tạo giá thủ công trên DMS |  |
| 7 | Cấu hình trạng thái đơn hàng cho KPI | GreenMOBILE  RedAPI  BluePORTAL | ORDER\_STATUS\_FOR\_KPI | Multiselect | Nhập giá trị các trạng thái đơn hàng để tính KPI  Các trạng thái kết hợp với nhau theo điều kiện "Hoặc" | Khác | Nhập giá trị các trạng thái đơn hàng để tính KPI  Các trạng thái kết hợp với nhau theo điều kiện "Hoặc" | [[HO] [HT] KPI - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+%5BHT%5D+KPI) |
| 8 |  |  |  |  |  |  |  |  |