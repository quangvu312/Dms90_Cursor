|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-7609 |
| Epic |  |
| Feature |  |
| Description | Tại màn hình Kế hoạch làm việc export danh sách và nội dung đáp ứng theo nhu cầu vận hành của HT  bổ sung NPP; Nhân viên và template theo chiều dọc |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Export kế hoạch làm việc của nhân viên theo tháng

**Chức năng hiện tại:**

* Nút "Export Excel" cho phép người dùng xuất dữ liệu của Kế hoạch làm việc của nhân viên ra một tập tin Excel.
* Nút này giúp người dùng lưu trữ và phân tích dữ liệu Kế hoạch làm việc ngoài ứng dụng, hoặc chia sẻ với các bên liên quan.
* Phân quyền: có yêu cầu phân quyền mới thấy được button này.

**Cách sử dụng:**

* Khi nhấn nút export excel, hệ thống hiển thị các trường lựa chọn như [Export kế hoạch làm việc của nhân viên theo tháng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53044302#id-[HO]T%E1%BB%95ngquank%E1%BA%BFho%E1%BA%A1chl%C3%A0mvi%E1%BB%87c-Exportk%E1%BA%BFho%E1%BA%A1chl%C3%A0mvi%E1%BB%87cc%E1%BB%A7anh%C3%A2nvi%C3%AAntheoth%C3%A1ng) → **Cách sử dụng.**

* Template excel như sau:
* Format tên file excel: EXPORT\_WORKINGPLAN\_MANV\_TENNV\_MMYYYY\_DDMMYYYYhhmmss
  + Trong đó: 
    - Refix: EXPORT\_WORKINGPLAN
    - MANV: mã nhân viên chọn *tại popup "Export kế hoạch làm việc của nhân viên theo tháng"*
    - TENNV: Tên nhân viên theo mã nhân viên
    - MMYYYY: Thời gian là tháng năm chọn *tại popup "Export kế hoạch làm việc của nhân viên theo tháng"*
    - DDMMYYYYhhmmss: Thời gian export của hệ thống.

| # | Chức năng | Mô tả |
| --- | --- | --- |
| 1 | Fortmart template | Formart theo rule chung của hệ thống: |
| 2 | Mã NV: | Mã nhân viên chọn để export  Thông tin nhân viên trên từng file excel |
| 3 | Tên NV: | Thông tin nhân viên trên từng file excel |
| 4 | Chức vụ: | Thông tin nhân viên trên từng file excel |
| 5 | Khu vực: | * Thông tin Tên vùng, khu vực của nhân viên * Trường hợp nhân viên không có cài đặt vùng thì lấy vùng của quản lý trực tiếp của nhân viên * Trường hợp có nhiều vùng thì mỗi vùng cách nhau bằng dấu phẩy * Sẽ hiển thị theo kiểu:   + Vùng 1, khu vực 1,..., Vùng 2, khu vực 2,.... |
| 6 | Tháng | Thông tin tháng/ năm của kế hoạch làm việc đã chọn.  Định dạng: MM/YYYY |
| 7 | Lưới danh sách: | |
| 7 | Tuần | Hiển thị số lượng tuần sao cho đủ tháng   * Tuần đầu tiên sẽ chứa ngày đầu tiên trong tháng theo thứ, trường hợp các thứ trống sẽ lấy các ngày của tháng trước * Tuần cuối cùng sẽ chứa ngày cuối cùng trong tháng theo thứ, trường hợp các thứ trống sẽ lấy các ngày của tháng sau |
| 8 | Thứ | Hiển thị thứ trong các tuần của tháng   * Hiển thị các thứ trong tuần từ Thứ 2...Chủ nhật * Các ngày trong tháng sẽ hiển thị theo Thứ * Mỗi thứ làm việc sẽ bao gồm thông tin hiển thị theo hàng: Công việc; Kế hoạch viếng thăm; Nhân viên; Địa điểm đên; Ghi chú kế hoạch |
| 9 | Ngày | Hiển thị ngày tương ứng với thứ của tháng |
| 10 | Công việc | Hiển thị dữ liệu từ trường "Loại công việc"  Nếu có nhiều "Loại công việc" hiển thị cách nhau bởi dấu Chấm phẩy ";" |
| 11 | Kế hoạch viếng thăm | Để trống nếu lịch làm việc không có nhà phân phối.  Hiển thị tên NPP được chọn, nhiều NPP hiển thị cách nhau bởi dấu Chấm phẩy ";". Hiển thị trên 1 dòng  Nếu có nhiều lịch thì hiển thị mỗi dòng tương ứng mỗi lịch   * Ví dụ có 2 lịch: |
| 12 | Nhân viên | Để trống nếu lịch làm việc không có nhân viên.  Nếu trên lịch làm việc có chọn nhân viên thì hiển thị:   * Hiển thị tên nhân viên được chọn, nhiều nhân viên hiển thị cách nhau bởi dấu Chấm phẩy ";". * Hiển thị trên 1 dòng * Nếu có nhiều lịch có nhân viên thì hiển thị mỗi dòng tương ứng mỗi lịch * Ví dụ: |
| 13 | Địa điểm đến | * Hiển thị theo trường "Địa điểm làm việc" và nối chuỗi nếu có chọn Vị trí làm việc trên lịch   + Định dạng hiển thị với mỗi lịch: [Địa điểm làm việc] - [Thông tin vị trí làm việc], [Tỉnh/Thành Phố], [Quận/huyện]   + Nếu có nhiều lịch thì xuống dòng trong Execl như sau: |
| 14 | Ghi chú kế hoạch | Hiển thị nội dung của trường "Mô tả công việc" khi tạo lịch. |
| 15 | Được Duyệt Bởi | Hiển thị text "Được Duyệt Bởi" ở cuối |
| 16 | Ngày        Tháng      Năm | Hiển thị text "Ngày        Tháng      Năm      " ở cuối |
| 17 | Người Lập Biểu | Hiển thị text "Người Lập Biểu"  và Tên nhân viên đã chọn để export báo cáo |