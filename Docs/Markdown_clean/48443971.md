|  |  |
| --- | --- |
| Issue Link |  |
| Story | [[ECDM-399] [APP SM] Danh sách cửa hàng chăm sóc - Finviet - Management System](https://hotro.finviet.com.vn/browse/ECDM-399)  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6437 |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0  Check điểm bán còn tồn tại trên tuyến bán hàng trên menu Khác -> Chăm sóc điểm bán |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Danh sách điểm bán chăm sóc View Salesman

RedV1.1.0  Check điểm bán còn tồn tại trên tuyến bán hàng trên menu Khác -> Chăm sóc điểm bán như sau:

Rule1

Rule check điểm bán còn trên tuyến bán hàng tại chăm sóc điểm bán

Tại menu Khác -> Chăm sóc điểm bán -> điểm bán đã không còn trên tuyến nhưng đang thao tác bất kỳ task vụ từ Nhiệm vụ (LINK DOC:  <https://kb.finviet.com.vn/pages/viewpage.action?pageId=48438731>)

- INVENTORY/CHECK\_ASSET: Kiểm tồn kho tại điểm bán

- SURVEY: Khảo sát

- MERCHANDISING: bày hàng

- CAMPAIGN\_SHOW\_GOODS: CTTB

- CAMPAIGN\_ACCUMULATION: CTTL

- ORDER: Đặt hàng

Check điểm bán còn trên tuyến bán hàng (dựa vào ngày Enddate của điểm bán <= Ngày hiện tại/ Hoặc trường hợp remove điểm bán ra khỏi tuyến thì check ID điểm bán có còn tồn tại trên tuyến/ Check Trạng thái điểm bán = "Hoạt động"

Nếu không còn trên tuyến hoặc trạng thái điểm bán KHÁC  "Hoạt động" => lúc Submit thông tin / pull to refresh/ action bất kỳ => Hiển thị thông báo: "Điểm bán không còn tồn tại trên tuyến, vui lòng kiểm tra lại!". Tắt popup thông báo back ra màn hình "Điểm bán -> Tab Chăm sóc" và remove điểm bán đó ra khỏi màn hình.

Chọn menu Khác → chọn điểm bán → Hiển thị danh sách điểm bán ở tab Chăm sóc như sau:

| Màn hình | Mô tả |
| --- | --- |
|  | * Hiển thị danh sách:   + Các điểm bán thuộc tất cả các định tuyến của nhân viên đang đăng nhập (Khách hàng mới tạo chưa được thêm vào tuyến sẽ không hiển thị ở đây)   + Hiển thị theo phân trang   + Sắp xếp theo ngày tạo giảm dần. Ngày tạo mới nhất đưa lên trên * Tìm kiếm: Search like theo Mã, tên hoặc số điện thoại điểm bán * Bộ lọc: Click vào hiển thị màn hình bộ lọc như sau:      * + Vị trí điểm bán   + - Hiển thị danh sách tất cả các vị trí điểm bán trên hệ thống, chỉ hiển thị các dữ liệu Đang hoạt động     - Chỉ được chọn 1     - Sau khi áp dụng danh sách sẽ hiển thị các khách hàng có vị trí điểm bán đã chọn   + Loại điểm bán     - Hiển thị danh sách tất cả các Loại điểm bán trên hệ thống, chỉ hiển thị các dữ liệu Đang hoạt động     - Chỉ được chọn 1     - Sau khi áp dụng danh sách sẽ hiển thị các khách hàng có Loại điểm bán đã chọn   + Hạng điểm bán     - Hiển thị danh sách tất cả các Hạng điểm bán trên hệ thống, chỉ hiển thị các dữ liệu Đang hoạt động     - Chỉ được chọn 1     - Sau khi áp dụng danh sách sẽ hiển thị các khách hàng có Hạng điểm bán đã chọn   + Kênh bán hàng     - Hiển thị danh sách tất cả các Kênh bán hàng trên hệ thống, chỉ hiển thị các dữ liệu Đang hoạt động     - Chỉ được chọn 1     - Sau khi áp dụng danh sách sẽ hiển thị các khách hàng có Kênh bán hàng đã chọn   + Trạng thái     - Hiển thị trạng thái của điểm bán: Hoạt động, Không hoạt động     - Chỉ được chọn 1 trạng thái   + Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu   + Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào danh sách điểm bán và reload danh sách điểm bán hiển thị kết quả tìm kiếm * Thông tin danh sách điểm bán bao gồm:   + Tên điểm bán - Mã điểm bán   + Số điện thoại điểm bán   + Địa chỉ điểm bán   + Dấu hiệu nhận biết điểm bán (Sẽ mô tả khi phát triển chức năng dấu hiệu nhận biết điểm bán) * Bấm vào điểm bán hiển thị sang màn hình thông tin chi tiết điểm bán |

# Danh sách điểm bán chăm sóc View SalesSup

RedV1.1.0  Check điểm bán còn tồn tại trên tuyến bán hàng trên menu Khác -> Chăm sóc điểm bán theo nội dung đã mô tả ở trên: link

| Màn hình | Mô tả |
| --- | --- |
|  | Hiển thị giống view của sales và hiển thị danh sách điểm bán theo nhân viên được chọn sau khi login |

# Chọn vào điểm bán

Khi chọn vào điểm bán sẽ hiển thị danh sách nhiệm vụ chăm sóc như sau, chức năng sẽ được mô tả ở tài liệu [SM-APP] Nhiệm vụ chăm sóc:

# Chi tiết điểm bán Detail\_Customer

Thực hiện pin menu các tác vụ như Hình ảnh điểm bán, Phân tích điểm bán... ở đầu trang khi user thực hiện scroll thông tin điểm bán

| View mặc định | View mở rộng |
| --- | --- |
| Mặc định mỗi section 4 dòng kèm theo Button "Xem thêm" | Khi nhấn "Xem thêm" sẽ mở ra View mở rộng chứa đầy đủ các dòng và kèm theo button "Thu gọn" |

## Thông tin chi tiết điểm bán bao gồm

| Tên Trường | Loại dữ liệu / Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| Thông tin điểm bán | Label | Không | Không | Thông tin điểm bán bao gồm:   * Hình ảnh: Hình ảnh của điểm bán, trường hợp có nhiều hình ảnh sẽ hiển thị hình ảnh có ngày tạo gần nhất * Mã điểm bán - Tên điểm bán: Thông tin mã, tên điểm bán  * + Cụm thông tin điểm bán "Mã, Tên điểm bán hiển thị max 2 dòng; vượt 2 dòng hiển thị dấu ba chấm vd: cô ba lagi ...   + Trường hợp điểm bán thiếu thông tin số điện thoại thì trường "Số điện thoại" hiển thị '-"  * Số điện thoại: Thông tin số điện thoại điểm bán * Địa chỉ: Thông tin địa chỉ điểm bán |
|  |  |  |  | Khi điểm bán cần cập nhật thông tin, người dùng sẽ thực hiện yêu cầu cập nhật ở chức năng Cập nhật thông tin trong màn hình điểm bán (Ecom sẽ update chức năng này)  Trường hợp trong 1 section có yêu cầu cập nhật thông tin 1 trường bất kỳ, sẽ có hiển thị dòng text  trong mỗi section  Lúc này button edit sẽ enable để user thực hiện cập nhật chỉnh sửa thông tin điểm bán |
| Button edit |  |  |  | Trường hợp không có thông tin nào cần cập nhật, biểu tượng này sẽ disable   Trường hợp trong 1 section có yêu cầu cập nhật thông tin 1 trường bất kỳ, button này sẽ enable  Những dữ liệu cần cập nhật thông tin sẽ có biểu tượng  phía sau dữ liệu. |
| Tên điểm bán | Label | Không | Không | Hiển thị tên của điểm bán. |
| Sđt điểm bán | Label | Không | Không | Hiển thị số điện thoại của điểm bán. |
| Email | Label | Không | Không | Hiển thị email của điểm bán. |
| Nhà Phân Phối | Label | Không | Không | Hiển thị Mã NPP - Tên nhà phân phối của điểm bán |
| Tuyến bán hàng | Label | Không | Không | Hiển thị tên Mã tuyến bán hàng - Tên tuyến bán hàng của điểm bán. Trường hợp khách hàng ở trạng thái Khởi tạo sẽ không có thông tin này (Mặc dù lúc tạo có nhập thông tin nhưng nếu điểm bán chưa chuyển trạng thái sẽ không có thông tin này) |
| Tần suất | Label | Không | Không | Hiển thị Tên bộ tần suất - Loại tần suất viếng thăm điểm bán Trường hợp khách hàng ở trạng thái Khởi tạo sẽ không có thông tin này (Mặc dù lúc tạo có nhập thông tin nhưng nếu điểm bán chưa chuyển trạng thái sẽ không có thông tin này) |
| Ngày đi tuyến | Date | Không | Không | Hiển thị ngày đi tuyến trong tuyến bán hàng Trường hợp khách hàng ở trạng thái Khởi tạo sẽ không có thông tin này (Mặc dù lúc tạo có nhập thông tin nhưng nếu điểm bán chưa chuyển trạng thái sẽ không có thông tin này) |
| Tên chủ điểm bán | Label | Không | Không | Hiển thị họ và tên của chủ điểm bán |
| Số CMND/CCCD | Label | Không | Không | Hiển thị số CMND/CCCD của chủ điểm bán. |
| Ngày cấp | Date | Không | Không | Hiển thị ngày cấp CMND/CCCD.  Định dạng ngày: dd - MM - yyyy. |
| Nơi cấp | Label | Không | Không | Hiển thị nơi cấp CMND/CCCD |
| Hộ khẩu thường trú | Label | Không | Không | Hiển thị địa chỉ hộ khẩu thường trú của chủ điểm bán. |
| Vị trí điểm bán | Label | Không | Không | Hiển thị thông tin vị trí điểm bán |
| Loại điểm bán | Label | Không | Không | Hiển thị thông tin loại điểm bán |
| Hạng điểm bán | Label | Không | Không | Hiển thị thông tin hạng điểm bán |
| Kênh bán hàng | Label | Không | Không | Hiển thị thông tin kênh bán hàng của điểm bán |
| Tỉnh / Thành Phố | Label | Không | Không | Hiển thị tên tỉnh hoặc thành phố của điểm bán. |
| Quận / Huyện | Label | Không | Không | Hiển thị tên quận hoặc huyện của điểm bán. |
| Phường / Xã | Label | Không | Không | Hiển thị tên phường hoặc xã của điểm bán. |
| Địa chỉ | Label | Không | Không | Hiển thị địa chỉ chi tiết của điểm bán |
| Kinh độ | Label | Không | Không | Hiển thị tọa độ kinh độ của điểm bán |
| Vĩ độ | Label | Không | Không | Hiển thị tọa độ vĩ độ của điểm bán |
| Bản đồ | Label | Không | Không | Hiển thị vị trí điểm bán, không điều chỉnh bản đồ |
| Hình ảnh điểm bán | Image | Không | Không | Hiển thị hình ảnh của điểm bán Có thể nhấn vào để mở rộng hình ảnh xem chi tiết |

## Danh sách menu trong chi tiết điểm bán

| Menu | Màn hình | Mô tả |
| --- | --- | --- |
| Hình ảnh điểm bán |  | * Noti đỏ sẽ hiển thị khi có yêu cầu điều chỉnh thông tin hình ảnh điểm bán (Khi ecom update tính năng này thì sẽ test lại trên app, hiện tại ecom chưa làm) * Hiển thị hình ảnh điểm bán * + Khi điểm bán cần cập nhật thông tin, người dùng sẽ thực hiện yêu cầu cập nhật ở chức năng Cập nhật thông tin trong màn hình điểm bán (Ecom sẽ update chức năng này)   + Lúc này button edit sẽ enable để user thực hiện cập nhật chỉnh sửa thông tin điểm bán |
| Phân tích điểm bán |  | **Tần suất mua**   * Σ số đơn thành công / Σ số tháng     + (\* Số liệu của tử & mẫu đều tính từ 1/1/năm hiện tại -> thời điểm hiện tại)   **Tần suất trả**   * Σ số đơn trả có trạng thái thành công / Σ số tháng   + (\* Số liệu của tử & mẫu đều tính từ 1/1/năm hiện tại -> thời điểm hiện tại)   **Bình quân mua:**   * Tính tỷ trọng = Σ số tiền / Σ số tháng   + số tiền = doanh số của đơn thành công   + số tháng tính từ 1/1 → thời điểm hiện tại   **---Section Biểu đồ đơn hàng - Dạng cột---**   * Hiển thị số lượng đơn hàng của điểm bán trong từng tháng * Hiển thị 12 tháng của năm.   **---Section Doanh số đơn hàng - Dạng cột---**   * Hiển thị doanh số của điểm bán trong từng tháng. Tính trên tất cả các đơn hàng bán có trạng thái thành công (Không tính đơn trả) * Hiển thị 12 tháng của năm   **---Section Lần viếng thăm trong tháng---**   * Hiển thị tổng số lần viếng thăm điểm bán trong tháng hiện tại của nhân viên đang đăng nhập. * Tính cả trong tuyến và ngoại tuyến   **---Section Thời gian viếng thăm trung bình---**   * Tổng thời gian viếng thăm = Lấy tổng thời gian của tất cả các lần viếng thăm điểm bán trong tháng hiện tại của nhân viên đang đăng nhập: HH:MM:SS * **Thời gian viếng thăm trung bình = Tổng thời gian viếng thăm/Lần viếng thăm trong tháng**   **---Section Tổng doanh số trong tháng---**   * Hiển thị tổng doanh số của điểm bán trong tháng hiện tại. Tính trên tất cả các đơn hàng bán có trạng thái thành công (Không tính đơn trả) * Đơn vị là (tr.đồng)   **---Section Tổng đơn hàng thành công trong tháng---**   * Hiển thị tổng số lượng các đơn hàng bán có trạng thái thành công (Không tính đơn trả)   **---Section Sản phẩm bán chạy---**   * Hiển thị sản phẩm theo Đơn hàng bán   + Sắp xếp số lượng SKU được mua nhiều nhất   + Tính từ 1/1/năm hiện tại → thời điểm hiện tại   + Hiển thị 10 sản phẩm   **---Section Sản phẩm mới đã mua---**   * Hiển thị sản phẩm theo Đơn hàng bán   + Sắp xếp số lượng SKU được mua gần nhất   + Tính từ 1/1/năm hiện tại → thời điểm hiện tại   + Hiển thị 10 sản phẩm |
| Lịch sử đơn hàng |  | Thông tin chi tiết xem tại nội dung:  [[SM-APP] Chi tiết điểm bán - Lịch sử đơn hàng - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028210) |
| Chương trình trưng bày |  | * Hiển thị tất cả những Chương trình trưng bày mà CH đã thực hiện Đăng ký tham gia (Lấy các trạng thái đăng ký = Chờ duyệt, Đã duyệt,  Từ chối, Hết hạn duyệt) * Cho phép scroll xuống để xem đầy đủ toàn bộ danh sách chương trình * Chỉ được phép xem tiến độ, không được phép thực hiện các thao tác Đăng ký/ Đăng ký lại * Thanh tìm kiếm: Tìm kiếm theo mã , tên chương trình * Lọc theo:    + Thời gian diễn ra:     - Thời gian diễn ra chương trình từ ngày đến ngày     - Đến ngày >= Từ ngày     - Phải chọn cả từ ngày và đến ngày   + Trạng thái chương trình (Sắp diễn ra, Đang diễn ra, Kết thúc)   + Trạng thái đăng ký (Chờ duyệt đăng ký, Đã duyệt đăng ký , Từ chối duyệt đăng ký, Hết hạn duyệt đăng ký )      * Tên chương trình:    + Hiển thị tên chương trình trưng bày, nếu độ dài chữ nhiều hơn 2 dòng thì hiển thị ...   + Onclick hiển thị màn hình "Chi tiết chương trình"      * Trạng thái chương trình:  Hiển thị trạng thái của CTTB    + Sắp diễn ra: Thời gian hiện tại < Thời gian bắt đầu trưng bày của Kỳ đầu tiên (theo mốc thời gian đăng ký)   + Đang diễn ra: Thời gian hiện tại >= Thời gian bắt đầu trưng bày của kỳ đầu tiên  & <= Thời gian kết thúc trưng bày của kỳ cuối cùng  (theo mốc thời gian đăng ký)   + Kết thúc : Thời gian hiện tại > Thời gian kết thúc trưng bày của kỳ cuối cùng (theo mốc thời gian đăng ký) * Hạn mức đăng ký: Hiển thị thông tin hạn mức mà CH đã đăng ký tham gia vào * Ngày diễn ra: Hiển thị Ngày bắt đầu Kỳ đầu tiên và Ngày kết thúc kỳ cuối cùng của Thời gian trưng bày, dựa vào thời gian đăng ký tương ứng * Trạng thái đăng ký:    + Hiển thị trạng thái đăng ký của điểm bán vào chương trình   + Bao gồm các trạng thái      - Chờ duyệt     - Đã duyệt     - Hết hạn duyệt     - Từ chối: Hiển thị thêm lý do từ chố (nếu có)     - Ngưng hoạt động * Button "Xem chi tiết"    + Luôn hiển thị ở bất kỳ trạng thái đăng ký nào   + Luôn enable, onclick vào trang chi tiết chương trình trưng bày |
| Chương trình tích lũy |  | * Hiển thị tất cả những Chương trình tích lũy mà CH đã thực hiện Đăng ký tham gia (Lấy các trạng thái đăng ký = Chờ duyệt, Đã duyệt,  Từ chối, Hết hạn duyệt) * Cho phép scroll xuống để xem đầy đủ toàn bộ danh sách chương trình * Chỉ được phép xem tiến độ, không được phép thực hiện các thao tác Đăng ký/ Đăng ký lại * Thanh tìm kiếm: Tìm kiếm theo mã , tên chương trình * Lọc theo:    + Thời gian diễn ra:     - Thời gian diễn ra chương trình từ ngày đến ngày     - Đến ngày >= Từ ngày     - Phải chọn cả từ ngày và đến ngày   + Trạng thái chương trình (Sắp diễn ra, Đang diễn ra, Kết thúc)   + Trạng thái đăng ký (Chờ duyệt đăng ký, Đã duyệt đăng ký , Từ chối duyệt đăng ký, Hết hạn duyệt đăng ký, Ngưng hoạt động)      * Tên chương trình:    + Hiển thị tên chương trình tích lũy, nếu độ dài chữ nhiều hơn 2 dòng thì hiển thị ...   + Onclick vào trang chi tiết chương trình tích lũy: Hiện tại chỉ được vào xem chi tiết đối với Chương trình có trạng thái đăng ký = Đã duyệt, sẽ bổ sung trang chi tiết đối với trạng thái đăng ký = Chờ duyệt/ hết hạn/ từ chối sau.  * Trạng thái chương trình:  Hiển thị trạng thái của CTTL    + Sắp diễn ra: Thời gian hiện tại < Thời gian bắt đầu tích lũy của Kỳ đầu tiên (theo mốc thời gian đăng ký)   + Đang diễn ra: Thời gian hiện tại >= Thời gian bắt đầu tích lũy của kỳ đầu tiên  & <= Thời gian kết thúc tích lũy của kỳ cuối cùng  (theo mốc thời gian đăng ký)   + Kết thúc : Thời gian hiện tại > Thời gian kết thúc tích lũy của kỳ cuối cùng (theo mốc thời gian đăng ký) * Hạn mức đăng ký: Hiển thị thông tin hạn mức mà CH đã đăng ký tham gia vào * Ngày diễn ra: Hiển thị Ngày bắt đầu Kỳ đầu tiên và Ngày kết thúc kỳ cuối cùng của Thời gian tích lũy, dựa vào thời gian đăng ký tương ứng * Trạng thái đăng ký:   + Hiển thị trạng thái đăng ký của điểm bán vào chương trình   + Bao gồm các trạng thái      - Chờ duyệt     - Đã duyệt     - Hết hạn duyệt     - Từ chối: Hiển thị thêm lý do từ chố (nếu có)     - Ngưng hoạt động * Button "Xem chi tiết"    + Luôn hiển thị ở bất kỳ trạng thái đăng ký nào   + Luôn enable, onclick vào trang chi tiết chương trình tích lũy: Hiện tại chỉ được vào xem chi tiết đối với Chương trình có trạng thái đăng ký = Đã duyệt, sẽ bổ sung trang chi tiết đối với trạng thái đăng ký = Chờ duyệt/ hết hạn/ từ chối sau. |

# Chỉnh sửa thông tin điểm bán Edit\_Customer

* Nhấn edit ở từng section sẽ hiển thị màn hình edit từng section tương ứng như bên dưới

| Chỉnh sửa thông tin chung | Chỉnh sửa thông tin người đại diện | Chỉnh sửa phân loại điểm bán | Chỉnh sửa vị trí điểm bán | Chỉnh sửa hình ảnh điểm bán |
| --- | --- | --- | --- | --- |
| * Không được chỉnh sửa:  * + Nhà phân phối   + Tuyến bán hàng   + Tần suất   + Ngày đi tuyến | * Được chỉnh sửa tất cả các trường thông tin | * Được chỉnh sửa tất cả các trường thông tin | * Được chỉnh sửa tất cả các trường thông tin | Lưu ý:   * **Không được xóa hình ảnh cũ đã lưu trước đó** * **Chỉ cho phép xóa hình mới chụp trong lúc chỉnh sưa** |

* Sau khi thực hiện chỉnh sửa nhấn Cập nhật →  sẽ kiểm tra các điều kiện như lúc tạo mới. Hiển thị cảnh báo
  + Sau khi lưu không thể chỉnh sửa thông tin, bạn có chắc chắn muốn cập nhật thông tin điểm bán?
    - Trở lại: Tắt popup và ở lại màn hình hiện tai
    - Đồng ý: 
      * Kiểm tra các điều kiện và ràng buộc như lúc tạo mới.
      * Lưu thông tin điểm bán ở trạng thái.
      * Sau khi lưu hiển thị thông tin Chi tiết điểm bán