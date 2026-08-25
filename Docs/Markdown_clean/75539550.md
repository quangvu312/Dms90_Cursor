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

 

# Thay đổi tên cột và bỏ merge cho báo cáo Xuất nhập tồn của Hương Thủy

* Thay đổi  trên portal và khi xuất file excel
* Thay đổi cho view HO và view NPP.
* Trường hợp đối với NPP thì chỉ show 1 NPP của NPP đang xem.
* Sau khi thay đổi, template như sau:

|  | Tên trường | Đánh giá thay đổi | Mô tả |
| --- | --- | --- | --- |
| 1 | Kênh | Không thay đổi |  |
| 2 | Vùng bán hàng | Không thay đổi |  |
| 3 | Khu vực bán hàng | Không thay đổi |  |
| 4 | Mã nhà phân phối | Không thay đổi |  |
| 5 | Tên nhà phân phối | Không thay đổi |  |
| 6 | Kho | Không thay đổi |  |
| 7 | Nhóm sản phẩm | Không thay đổi |  |
| 8 | Ngành hàng | Không thay đổi |  |
| 9 | Nhãn hiệu | Không thay đổi |  |
| 10 | Chủng loại | Thêm mới |  |
| 11 | Mã sản phẩm | Không thay đổi |  |
| 12 | Tên sản phẩm | Không thay đổi |  |
| 13 | ĐVT | Không thay đổi |  |
| 14 | Lô | Không thay đổi |  |
| 15 | Hạn sử dụng | Không thay đổi |  |
| 16 | Đơn giá bán | Trong file excel xuất ra cột này phải là dạng số |  |
| 17 | Số lượng tồn đầu kỳ | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng tồn đầu kỳ" |
| 18 | Giá trị tồn đầu kỳ | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị tồn đầu kỳ" |
| 19 | Số lượng import tồn đầu kỳ | Thêm mới | Hiển thị số lượng sản phẩm tương ứng được |
| 20 | Giá trị import tồn đầu kỳ | Thêm mới | = Đơn giá mua x Số lượng import  Đơn giá mua lấy theo quy tắc mới tại Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-3695 |
| 21 | Số lượng Nhập Mua NCC | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng Nhập Mua NCC" |
| 22 | Số lượng nhập khuyến mãi NCC | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng nhập khuyến mãi NCC" |
| 23 | Giá trị nhập mua NCC | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị nhập mua NCC" |
| 24 | Giá trị KM nhập mua NCC | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị KM nhập mua NCC" |
| 25 | Số lượng nhập điều chỉnh | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng nhập điều chỉnh" |
| 26 | Giá trị nhập điều chỉnh | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị nhập điều chỉnh" |
| 27 | Số lượng nhập bán KH trả về | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng nhập bán khách hàng trả về" |
| 28 | Số lượng nhập KM KH trả về | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng nhập KM khách hàng trả về" |
| 29 | Giá trị nhập bán KH trả về | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị nhập bán khách hàng trả về" |
| 30 | Giá trị nhập KM KH trả về | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị nhập KM khách hàng trả về" |
| 31 | Số lượng nhập chuyển kho | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng nhập chuyển kho" |
| 32 | Giá trị nhập chuyển kho | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị nhập chuyển kho" |
| 33 | Số lượng Xuất trả NCC | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng Xuất trả NCC" |
| 34 | Giá trị xuất trả NCC | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị xuất trả NCC" |
| 35 | Số lượng Xuất điều chỉnh | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng Xuất điều chỉnh" |
| 36 | Giá trị Xuất điều chỉnh | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị Xuất điều chỉnh" |
| 37 | Số lượng xuất bán khách hàng | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng xuất bán khách hàng" |
| 38 | Số lượng xuất KM bán KH | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng xuất KM bán khách hàng" |
| 39 | Giá trị bán khách hàng | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị bán khách hàng" |
| 40 | Giá trị KM bán khách hàng | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị KM bán khách hàng" |
| 41 | Số lượng xuất chuyển kho | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng xuất chuyển kho " |
| 42 | Giá trị xuất chuyển kho | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị xuất chuyển kho" |
| 43 | Số lượng tồn cuối kỳ | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Số lượng tồn cuối kỳ" |
| 44 | Giá trị tồn cuối kỳ | Bỏ merge cột và đổi tên cột Trong file excel xuất ra cột này phải là dạng số | Đổi tên cột này thành "Giá trị tồn cuối kỳ" |