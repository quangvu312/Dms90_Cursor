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

# 1 Mô tả yêu cầu

Từ yêu cầu OR Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fOR-4630

Hiện tại: Doanh số trước VAT được tính theo công thức từ tài liệu [Lưu ý chung cho các template báo cáo](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443956#id-%5BHO%5DBáoCáo-Côngthứctínhdoanhsố)

Cần thay đổi công thức tính Doanh số trước VAT như sau:

* Doanh số trước VAT → **Doanh Thu (-VAT ) (Net Amount) =  Tổng Doanh Thu (-VAT ) (Net Amount) từng sản phẩm =** Doanh Thu (-VAT ) (Net Amount) SP A + Doanh Thu (-VAT ) (Net Amount) SP B +...
  + Doanh Thu (-VAT ) (Net Amount) từng sản phẩm = Thành tiền trước VAT từng sản phẩm - Chiết khấu (trước VAT) từng sản phẩm

* + **Thành tiền trước VAT** = Đơn giá từng sản phẩm \* Số lượng từng sản phẩm - Tiền VAT từng sản phẩm
    - Tiền VAT từng sản phẩm = Đơn giá từng sản phẩm \* VAT% / (100 + VAT%)
  + **Chiết khấu (Trước VAT)**
    - Là chiết khấu trước VAT của từng dòng lô sản phẩm: Bao gồm chiết khấu của CTKM ontop và bình thường
    - Công thức: SUM (Tiền CK ontop trên từng SP + Tiền CK bình thường trên từng SP)/(1+VAT/100)
    - Đối với đơn hàng direct sales thì lấy lô đầu tiên

# 2 Các màn hình điều chỉnh

| Platform | Màn hình | Thay đổi | US điều chỉnh |
| --- | --- | --- | --- |
| Portal HO | * Báo cáo Doanh thu theo nhân viên bán hàng | * Đổi tên cột Doanh số trước VAT = **Doanh Thu (-VAT ) (Net Amount)** * Đổi công thức tính Doanh thu (-VAT) như mô tả ở mục 1 | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6245 |
| Portal NPP | * Báo cáo Doanh thu theo nhân viên bán hàng | * Đổi tên cột Doanh số trước VAT = **Doanh Thu (-VAT ) (Net Amount)** * Đổi công thức tính Doanh thu (-VAT) như mô tả ở mục 1 | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6246 |
| Portal HO | * Báo cáo KPI | * Đổi công thức tính các cột dưới đây theo như mô tả ở mục 1  * + Doanh số trung bình theo ngày   + Doanh số tháng * Xem lại thay đổi cho:   + Thực đạt ngoài list KPI   + Thực đạt trong màn hình chi tiết KPI | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6247 |
| App SM | * Báo cáo KPI | * Đổi công thức tính thực đạt các KPI dưới đây theo như mô tả ở mục 1   + Doanh số trung bình theo ngày   + Doanh số tháng | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6248 |
| App SM | * Báo cáo doanh số ngày | * Trường hợp VAT\_DISPLAY\_CONFIGURATION = False thì trên App sẽ hiển thị doanh số trước VAT. Thay đổi công thức tính và hiển thị tổng doanh số như mô tả ở mục 1  * Thay đổi cho các nội dung sau:   + Tổng doanh số   + Doanh số hiển thị trên biểu đồ   + Thông tin báo cáo trong ngày   + Chi tiết doanh số ngày | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6249 |
| App SM | * Báo cáo doanh số tháng | Nội dung giống Báo cáo doanh số ngày | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6250 |
| App manager | * Báo cáo KPI | Nội dung giống Báo cáo KPI trên App SM | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6275 |
| App manager | * Báo cáo doanh số ngày | Nội dung giống Báo cáo doanh số ngày trên APP SM | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6276 |
| App manager | * Báo cáo doanh số tháng | Nội dung giống Báo cáo doanh số tháng trên APP SM | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6277 |