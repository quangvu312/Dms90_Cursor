|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-405] [HO] Xử lý yêu cầu - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-405) |
| Epic | [[ECDM-416] SUPPORT - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-416) |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

**I.Mục đích**

* Xây dựng công cụ giúp tư vấn viên hoặc người quản trị tiếp nhận vấn đề hỗ trợ và phản hồi nhanh chóng cho nhân viên sale
* Lưu trữ thông tin và nội dung hỗ trợ theo từng ticket
* Gán và chuyển tiếp nhận cho từng nhân viên cụ thể
* Cập nhật trạng thái xử lý ticket

# **II.Luồng nghiệp vụ**

**trueXLYCfalseautotoptrue13102**

# **III.Giao diện tính năng**

#### **1. Màn hình Xử lý yêu cầu**

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Tìm theo | Textbox | Có | Không | Tìm kiếm theo mã yêu cầu hỗ trợ |
| Loại vấn đề | Select box multichoice | Có | Không | Danh sách loại vấn đề sẽ thay đổi và được lấy từ danh sách: [Dữ liệu chung - Vấn đề hỗ trợ](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415), chỉ load các vấn đề có trạng thái "Đang hoạt động" |
| Trạng thái | Select box multichoice | Có | Không | Trạng thái bao gồm:   * Khởi tạo * Đang xử lý * Từ chối * Đã giải quyết |
| Thời gian | From Date To Date | Có | Không | Chọn từ ngày đến ngày tạo phiếu yêu cầu để tìm kiếm  Đến ngày >= Từ ngày |
| Nhân viên tiếp nhận | Select box multichoice | Có | Không | Load danh sách nhân viên từ chức năng [[Portal] Tài Khoản Người Dùng](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48437108) để user tìm kiếm  Chỉ hiển thị các nhân viên Đang hoạt động  Có thể search nhanh bằng cách gõ mã nhân viên/Tên nhân viên/Số điện thoại nhân viên  Sau khi chọn hiển thị danh sách phiếu hỗ trợ theo nhân viên tiếp nhận đã chọn |
| Điểm bán | Select box multichoice | Có | Không | Load danh sách điểm bán để user tìm kiếm  Có thể search nhanh bằng cách gõ mã điểm bán/Tên điểm bán/Số điện thoại điểm bán  Sau khi chọn hiển thị danh sách phiếu hỗ trợ theo điểm bán đã chọn |
| Nhân viên chăm sóc | Select box multichoice | Có | Không | Load danh sách nhân viên từ chức năng [[Portal HO][DMS] Quản lý nhân viên DMS](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357) để user tìm kiếm  Chỉ hiển thị các nhân viên Đang hoạt động  Có thể search nhanh bằng cách gõ Mã nhân viên/Tên nhân viên/Số điện thoại nhân viên/Mã tham chiếu nhấn viên  Sau khi chọn hiển thị danh sách phiếu hỗ trợ theo nhân viên chăm sóc đã chọn |
| Lưới danh sách |  |  |  |  |
| Mã yêu cầu hỗ trợ | Datacolum link | Không | Không | Thông tin mã yêu cầu hỗ trợ, click vào hiển thị chi tiết phiếu yêu cầu.  Màn hình giống màn hình xử lý, Chỉ view thông tin, không chỉnh sửa |
| Mã điểm bán | Datacolumn | Không | Không | Thông tin mã điểm bán trong phiếu yêu cầu |
| Tên điểm bán | Datacolumn | Có | Không | Thông tin Tên điểm bán trong phiếu yêu cầu |
| Nhân viên chăm sóc | Datacolumn | Không | Không | điểm bán đang nằm trong tuyến quản lý của nhân viên này  Hiển thị nhân viên đang chăm sóc ở thời điểm tạo phiếu.  Hiển thị Mã nhân viên - Tên nhân viên |
| Nhân viên tiếp nhận | Datacolumn | Không | Không | Nhân viên tiếp nhận yêu cầu tạo phiếu do user xử lý chọn  Hiển thị Mã tài khoản người dùng - Tên tài khoản người dùng |
| Nội dung | Datacolumn | Không | Không | Thông tin ghi chú trong phiếu yêu cầu  Hiển thị tối đa 50 ký tự và 1 button Xem thêm  Bấm xem thêm hiển thị popup view đầy đủ nội dung như sau: |
| Trạng thái | Datacolum | Không | Không | Trạng thái bao gồm:   * + Khởi tạo   + Đang xử lý   + Từ chối   + Đã giải quyết  * Từ trạng thái Khởi tạo có thể chuyển sang Đang xử lý/Từ chối/Đã giải quyết  * Từ trạng thái Đang xử lý có thể chuyển sang Từ chối/Đã giải quyết  * Từ trạng thái Từ chối/Đã giải quyết không chuyển sang bất cứ trạng thái nào nữa, kết thúc quy trình, ko chỉnh sửa thông tin trên phiếu xử lý |
| Người tạo | Datacolumn | Có | Không | Hiển thị người tạo phiếu yêu cầu  Hiển thị Mã user |
| Ngày tạo | Datetime | Không | Không | Hiển thị ngày tạo phiếu yêu cầu  DD-MM-YYYY HH:MM:SS |
| Người duyệt | Datacolumn | Có | Không | Hiển thị người duyệt phiếu yêu cầu khi phiếu chuyển trạng thái Đã giải quyết/Từ chối  Hiển thị Mã user |
| Ngày duyệt | Datetime | Không | Không | Hiển thị ngày duyệt phiếu khi phiếu chuyển trạng thái Đã giải quyết/Từ chối  DD-MM-YYYY HH:MM:SS |
| Người cập nhật | Datacolumn | Có | Không | Hiển thị người cập nhật yêu cầu Hiển thị Mã user |
| Ngày cập nhật | Datetime | Không | Không | Hiển thị ngày cập nhật phiếu  DD-MM-YYYY HH:MM:SS |
| Trao đổi | Button | Có | Không | Nhấn để trao đổi và xử lý phiếu  Button này sẽ disable khi phiếu có trạng thái "Đã giải quyết", "Từ chối" |
| Chọn nhân viên tiếp nhật | Button | Có | Không | Nhấn vào để chọn nhân viên tiếp nhận     * Hiển thị danh sách tài khoản người dùng có quyền view/create/update/delete tại màn hình này, chỉ hiển thị tài khoản người dùng đang hoạt động. * Có thể nhập mã nhân viên, tên nhân viên, số điện thoại nhân viên để tìm kiếm. * Chỉ chọn 1 nhân viên   Lưu ý:   * Nhân viên tiếp nhận chỉ sử dụng để phân chia việc xử lý hỗ trợ. * Trường hợp assign cho nhân viên A thì nhân viên B vẫn có thể xem và xử lý yêu cầu. |

# Xử lý phiếu yêu cầu

Nhấn button  trao đổi ở cuối mỗi dòng phiếu yêu cầu sẽ có giao diện như sau:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Mã điểm bán - Tên điểm bán - Số điện thoại - Địa chỉ | Label | Không | Không | Thông tin điểm bán trên phiếu yêu cầu  Địa chỉ: Hiển thị địa chỉ đầy đủ: Địa chỉ, Phường Xã, Quận Huyện, Tỉnh Thành Phố |
| Loại vấn đề | Textbox disable | Không | Không | Thông tin loại vấn đề trên phiếu yêu cầu |
| Công ty | Textbox disable | Không | Không | Thông tin công ty của nhân viên tạo phiếu yêu cầu |
| Nhân viên | Textbox disable | Không | Không | Thông tin nhân viên tạo phiếu yêu cầu: Mã nhân viên  - Tên nhân viên |
| Lý do | Selectbox onechoice | Có | Có | Thông tin lý do trong phiếu yêu cầu  User có thể chọn lại lý do ở trường này  Hiển thị danh sách lý do với loại lý do là "Lý do hỗ trợ" được cài đặt ở màn hình **Dữ liệu chung - Lý do hỗ trợ** để user chọn (chỉ load các lý do đang hoạt động) |
| Lý do nhân viên nhập | Textbox | Không | Không | Trường hợp nhân viên chọn lý do "Khác", sẽ có bắt buộc nhập lý do dưới app, thì trường này sẽ hiển thị thông tin lý do nhân viên nhập dưới app |
| Nội dung | Textarea | Không | Không | Thông tin nội dung ghi chú trong phiếu yêu cầu |
| Tập tin đính kèm | Image | Không | Không | Hiển thị thông tin đính kèm hình ảnh mà nhân viên đính kèm trên phiếu |
| Ghi Chú Xét duyệt | Textarea (1000) | Có | Không | Ghi chú của cấp xét duyệt |
| Lý do từ chối duyệt | Selectbox onechoice | Có | Có | Nếu phiếu duyệt bị từ chối user duyệt bắt buộc phải chọn thông tin lý do từ chối ở trường này  Chỉ bắt buộc khi trạng thái = "Từ chối"  User có thể chọn lý do ở trường này  Hiển thị danh sách lý do với loại lý do là "Lý do từ chối hỗ trợ" được cài đặt ở màn hình **Dữ liệu chung - Lý do từ chối hỗ trợ** để user chọn (chỉ load các lý do đang hoạt động) |
| Trạng thái | Selectbox onechoice | Có | Có | Trạng thái bao gồm:   * Khởi tạo * Đang xử lý * Từ chối * Đã giải quyết      * Từ trạng thái Khởi tạo có thể chuyển sang Đang xử lý/Từ chối/Đã giải quyết  * Từ trạng thái Đang xử lý có thể chuyển sang Từ chối/Đã giải quyết  * Từ trạng thái Từ chối/Đã giải quyết không chuyển sang bất cứ trạng thái nào nữa, kết thúc quy trình, ko chỉnh sửa thông tin trên phiếu xử lý |
| Phần chat trao đổi | Chat | Có | Không | Nhập nội dung vào đoạn chat và nhấn gửi |
| Lưu | Button | Có | Không | Chọn trạng thái tương ứng và nhấn button này để xử lý phiếu yêu cầu.   * Khởi tạo → Lưu thông tin và ko đổi trạng thái * Đang xử lý: Lưu thông tin và đổi trạng thái sang "Đang xử lý" * Từ chối: Lưu thông tin và đổi trạng thái sang "Từ chối" (Bắt buộc chọn lý do từ chối) * Đã giải quyết: Lưu thông tin và đổi trạng thái phiếu yêu cầu sang "Đã giải quyết" |
| Button X đóng màn hình | Button | Có | Không | Kiểm tra nếu trên màn hình đang có thông tin nhập vào, hiển thị cảnh báo cho user: Đang có dữ liệu trên màn hình, bạn có muốn Hủy?   * Đồng ý: Hủy thao tác và đóng màn hình * Quay lại: Quay trở lại màn hình hiện tại |

# Export Excel

Chọn vào export ra file excel cho phiếu yêu cầu

Template như sau:  (SUPPORT\_LIST\_DDMMYYYYHHMMSS)