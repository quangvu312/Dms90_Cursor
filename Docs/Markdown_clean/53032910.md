|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-1075 |
| Feature |  |
| Description | Tại màn hình KHÁC→ Chăm sóc điểm bán → thực hiện nhiệm vụ Khảo sát; với những CTKS có cài đặt bắt buộc checkin => Phải thực hiện Checkin khảo sát mới được thực hiện CTKS |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Màn hình Chăm sóc điểm bán

KHÁC → ĐIỂM BÁN → KHẢO sát

# Màn hình danh sách khảo sát

Xem mô tả tại [Trường hợp đối tượng khảo sát = Điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023536#id-[SMAPP]Kh%E1%BA%A3os%C3%A1ttr%C3%AAnappsaleman-Tr%C6%B0%E1%BB%9Dngh%E1%BB%A3p%C4%91%E1%BB%91it%C6%B0%E1%BB%A3ngkh%E1%BA%A3os%C3%A1t=%C4%90i%E1%BB%83mb%C3%A1n)

Nếu  trên portal cài đặt "Bắt buộc check in điểm bán"  thì khi chọn chức năng "Khảo sát" tại đây (Khác → Điểm bán → Chọn điểm bán → Chăm sóc điểm bán → Chọn nhiệm vụ = "Khảo sát")

* (1) Trên màn hình danh sách khảo sát hiển thị dấu hiệu nhận diện bắt buộc checkin
* (2) Click txem thông tin khảo sát để thực hiện khảo sát
* (3) Thực hiện checkin khảo sát tại điểm bán

Với khảo sát hiển thị dấu hiệu nhận diện bắt buộc checkin thì Bắt buộc phải hoàn thành xong bước 'checkin khảo sát tại điểm bán" mới có thể thực hiện khảo sát

# Checkin khảo sát

## Check in đúng khoảng cách

Checkin khảo sát

Trả thông báo khi user tắt "Location Services" của ĐT / tắt "Location Permission" của Salesman App rồi nhấn "Chương trình khảo sát" điểm bán

* Hiển thị thông báo:  Ứng dụng muốn sử dụng vị trí hiện tại của bạn để hiển thị trên ứng dụng, cũng để chỉ đường và ước tính thời gian di chuyển của bạn. Nó an toàn và riêng tư.
  + Chọn "Cho phép truy cập": Đi đến phần cài đặt Định vị trên thiết bị của user
  + Đóng popup (Nhấn dấu x trên popup) => quay về màn hình danh sách khảo sát

Trả thông báo khi user tắt Permission camera & thư viện ảnh của App Salesman / Permission camera & thư viện ảnh của ĐT rồi nhấn icon chụp hình 

Hiển thị popup "Cho phép @tên app Saleman chụp ảnh, quay video và truy cập thư viện ảnh"

* 1. Chỉ cho phép khi dùng ứng dụng
* 2. Chỉ lần này
* 3. Không cho phép

Người dùng chọn các option tương ứng:

* 1. Hiển thị màn hình chụp hình và không request những lần click icon chụp hình sau
* 2. Hiển thị màn hình chụp hình và request những lần click icon chụp hình sau
* 3. Hiển thị thông báo quyền máy ảnh "Ứng dụng muốn truy cập máy ảnh để tải ảnh hồ sơ của bạn lên và sẽ không chia sẻ ảnh nếu không có sự đồng ý của bạn".  Hoặc thông báo quyền thư viện để upload hình: "Ứng dụng muốn truy cập thư viện ảnh để tải ảnh hồ sơ của bạn lên và sẽ không chia sẻ ảnh nếu không có sự đồng ý từ bạn." Chọn Để sau/ Cấp quyền
  + Để sau: tắt popup và không cho chụp hình; về màn hình trước đó.
  + Cấp quyền: Sẽ redirect đến màn hình Cấp quyền của thiết bị

| Tên trường | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Button X | Button | Có | Không | Chọn "Đóng"  => Mess: "Màn hình đã có dữ liệu, bạn có chắc chắn muốn thoát?"   * Đồng ý: Thoát ra ngoài. * Trở lại: Đóng popup và trở lại màn hình trước đó |
| Khoảng cách | Datacolumn | Không |  | Hiển thị khoảng cách thiết bị so với tọa độ Điểm bán là bao nhiêu mét  Sau khi chọn Chương trình khảo sát, nếu config **MAP\_LOCATION\_DISTANCE <= 0,** hệ thống sẽ Không kiểm tra vị trí của nhân viên so với vị trí của Điểm bán  Sau khi Chương trình khảo sát, nếu config**MAP\_LOCATION\_DISTANCE > 0,** hệ thống sẽ kiểm tra vị trí của nhân viên so với vị trí của Điểm bán theo khoảng cách được cấu hình trong config  [Danh sách cấu hình chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021846)   * Check in vượt khoảng cách: Nếu Không thỏa điều kiện khoảng cách sẽ hiển thị thông báo vượt khoảng cách và highlight khoảng cách (mét) và Không cho thực hiện checkin Điểm bán đó (Khi Người dùng thực hiện chọn lý do vượt khoảng cách thì mới tiếp tục checkin được)  * Check in ĐÚNG khoảng cách: Nếu thỏa điều kiện về khoảng cách → hiển thị màn hình checkin   Nếu điểm bán Không có tọa độ, hiển thị Màn hình như sau    **Hiển thị:**   * Hệ thống kiểm tra điểm bán Không có tọa độ => hiển thị màn hình checkin * Khoảng cách: highlight đỏ text thông báo "Điểm bán Không có tọa độ" * Disable button "Xác nhận" - Không cho phép checkin điểm bán này; chỉ có thể chọn "Đóng"  để tắt popup quay về màn hình danh sách khảo sát   **Các cách nhân viên có thể thực hiện lấy lại tọa độ:**  - Qua màn hình thông tin điểm bán -> update tọa độ (update này phải có yêu cầu chỉnh sửa).  - Nếu không có yêu cầu chỉnh sửa, không update được thì phải liên hệ admin hỗ trợ     + Admin update tọa độ trên web     + Admin yêu cầu chỉnh sửa tọa độ —> trên app mới mở button edit để sales cập nhật tọa độ. |
| Địa chỉ | Datacolumn | Khong |  | Hiển thị địa chỉ khách hàng từ master data khách hàng |
| Picture | Button Image | Có | Required/ not require dựa vào *config cấu hình (chụp **< MIN** / **> MAX**)* | Chọn button Image để chụp hình checkin    Sau khi chọn button để chụp ảnh sẽ có timestamp đính kèm trên ảnh bao gồm:   * **Máy ảnh lấ từ app saleman** * **Thời gian chụp ảnh**:    + Lấy thời gian hiện tại tại thời điểm ảnh được chụp.   + Định dạng thời gian: HH:MM:SS DD/MM/YYYY   + Lấy thời gian của server hệ thống, không lấy thời gian trên thiết bị người dùng. * **Địa chỉ chụp ảnh**: Chuyển đổi tọa độ địa chỉ chụp ảnh thành địa chỉ chi tiết: số nhà, đường, phường, quận/huyện, tỉnh/thành phố, quốc gia. * **Tọa độ chụp ảnh:**Lấy thông tin tọa độ địa lý (kinh độ và vĩ độ) tại vị trí ảnh được chụp. * **Mã nhân viên và tên nhân viên thực hiện chụp ảnh**: Lấy mã nhân viên và tên nhân viên từ thông tin người dùng đã đăng nhập trong ứng dụng để chụp ảnh.  Chọn  để xác nhận hình đã chụp  Chọn để remove hình vừa chụp, chụp lại hình khác   *Trường hợp người dùng chụp số lượng hình không thỏa config cấu hình (chụp **< MIN** / **> MAX**): [Danh sách cấu hình chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021846) MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES, MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES*  *thì hiển thị mess thông báo: "Bạn chưa chụp đủ số lượng hình quy định"/ "Bạn đã chụp quá số hình quy định"*    *Cho phép scroll để xem nhiều hình bằng cách click và kéo qua phải/trái để xem*     * Số 4/10 (x/y) strong icon chụp hình:  *Số hình đã chụp trên/MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES*  * Thanh scroll hình ảnh đã chụp trong popup "Checkin khảo sát" show khi số hình chụp checkin khảo sát tại điểm bán >= 3 hình  * Setting chụp hình: - MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES: 0 - MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES: 0 ⇒ Cấu hình này KHÔNG chụp hình thì vẫn cho phép Checkin khảo sát ĐB thành công * **Nếu max = 0 thì hide luôn icon chụp hình trên popup "Checkin khảo sát"** |
| Điểm bán đóng cửa | Button Toggle | Có | Khong | Default = False  Click **button toggle = True** để xác nhận Điểm bán đóng cửa   Hiển thị lý do Điểm bán đóng cửa như hình:     * + Chọn lý do: Placeholder "Chọn lý do"; required khi **button toggle = True.**Combo Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415), Loại = Điểm bán đóng cửa.   + Ghi chú: Placeholder "Ghi chú"; Field text (256) để nhập nội dung mô tả, **Field này chỉ hiển thị để nhập khi**"Chọn Lý do = Lý do khác"=> Required Field : "Ghi chú"   \*Lưu ý:  Nếu Option  Lý do Điểm bán đóng cửa # Lý do khác→  không hiển thị field "Ghi chú" để nhập  Nếu chọn Option Lý do Điểm bán đóng cửa = Lý do khác; nhưng không nhập nội dung "Ghi chú" => Disable button "Xác nhận" |
| Xác nhận | Button | Có | Có | - Người dùng nhấn để gửi thông tin check-in  **Kiểm tra dữ liệu đầu vào:**   * Vị trí và Hình ảnh: kiểm tra vị trí thực hiện "Checkin khảo sát" thỏa config  [Danh sách cấu hình chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021846)   + MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES, MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES   + MAP\_LOCATION\_DISTANCE * Điểm bán đóng cửa (toggle "Điểm bán đóng cửa" được bật): Chọn Lý do là bắt buộc; nếu "Lý do = Lý do khác" thì bắt buộc phải nhập "Ghi chú"   => Nếu thiếu thông tin cần thiết thì DISABLE button “Xác nhận”   Sau khi chọn ;      **TRƯỜNG HỢP ĐIỂM BÁN ĐÓNG CỬA:**   * **Redirect sau khi nhấn "Xác nhận" ĐB đóng cửa trong popup "Checkin khảo sát" => Quay về màn hình "Danh sách khảo sát" và không cho thực hiện khảo check in**   **TRƯỜNG HỢP ĐIỂM BÁN KHÔNG ĐÓNG CỬA:**  hiển thị màn hình thực hiện khảo sát như mô tả    [Hiển thị câu hỏi khảo sát trên App](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023536#id-[SMAPP]Kh%E1%BA%A3os%C3%A1ttr%C3%AAnappsaleman-Hi%E1%BB%83nth%E1%BB%8Bc%C3%A2uh%E1%BB%8Fikh%E1%BA%A3os%C3%A1ttr%C3%AAnApp) |
| Checkin VƯỢT khoảng cách:     * Nếu không thỏa điều kiện khoảng cách sẽ hiển thị highlight thông báo vượt khoảng cách và khoảng cách (met) và không cho thực hiện checkin Điểm bán đó.  * **Vượt khoảng cách → Default Disable button “Xác nhận”** * **Sau khi Đã nhập [Lý do vượt khoảng cách](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#AppSalemanNhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-L%C3%BDdov%C6%B0%E1%BB%A3tkho%E1%BA%A3ngc%C3%A1ch) → enable button “Xác nhận”** * KHÔNG chọn [Lý do vượt khoảng cách](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#AppSalemanNhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-L%C3%BDdov%C6%B0%E1%BB%A3tkho%E1%BA%A3ngc%C3%A1ch) → Chọn “Đóng”    để tắt popup→ Trở về màn hình trước đó, không cho checkin | | | | |

Mô tả

| **Tên trường** | **Loại dữ liệu/Loại field** | **Cho phép cho tác** | **Bắt  buộc** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Khoảng cách | Datacolumn | Khong |  | Hiển thị khoảng cách thiết bị so với tọa độ Điểm bán là bao nhiêu mét; highlight met ví dụ: 250m   đồng thời hiển thị highlight thông báo: Vượt khoảng cách checkin cho phép (100m)    * Số mét hiển thị lấy từ config **MAP\_LOCATION\_DISTANCE****[Danh sách cấu hình chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021846)** |
| Địa chỉ | Datacolumn | Khong |  | Hiển thị địa chỉ khách hàng từ master data khách hàng |
| Chọn lý do vượt khoảng cách | Select one choice | Có | Có | Placeholder: Chọn lý do vượt khoảng cách   * Click combođể chọn lý do. * Hiển thị danh sách lý do vượt khoảng cách   Mô tả:   * Chọn lý do vượt khoảng cách: required, Combo Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415) , Loại = Lý do vượt khoảng cách viếng thăm điểm bán * Nhập lý do vượt khoảng cách: Field text (256) để nhập nội dung mô tả, **Field này chỉ hiển thị để nhập** khi **Chọn lý do vượt khoảng cách = Lý do khác => Required Field : "Nhập lý do vượt khoảng cách"**   **Hiển thị:**   * Hiển thị nội dung text ghi chú đã nhập * Sau chọn lý do / Nhập lý do vượt khoảng cách với Option "Lý do vượt khoảng cách = Lý do khác" → Enable button "Xác nhân" * KHÔNG chọn Lý do vượt khoảng cách → Chọn "Đóng"  để tắt popup và quay trở về màn hình trước đó (Màn hình Danh sách khảo sát)    Nếu Option  Chọn lý do vượt khoảng cách # Lý do khác → không hiển thị field "Nhập lý do vượt khoảng cách" để nhập.  Nếu chọn Option Chọn lý do vượt khoảng cách = Lý do khác; nhưng người dùng không nhập nội dung "Nhập lý do vượt khoảng cách" => Disable button "Xác nhận" |
| Picture | Button Image | Có | Required/not required for *this config (chụp****< MIN****/****> MAX****):* | Chọn button Image để chụp hình checkin    Sau khi chọn button để chụp ảnh sẽ có timestamp đính kèm trên ảnh bao gồm:   * Máy ảnh: Lấy từ app saleman * **Thời gian chụp ảnh**:    + Lấy thời gian hiện tại tại thời điểm ảnh được chụp.   + Định dạng thời gian: HH:MM:SS DD/MM/YYYY   + Lấy thời gian của server hệ thống, không lấy thời gian trên thiết bị người dùng. * **Địa chỉ chụp ảnh**: Chuyển đổi tọa độ địa chỉ chụp ảnh thành địa chỉ chi tiết: số nhà, đường, phường, quận/huyện, tỉnh/thành phố, quốc gia. * **Tọa độ chụp ảnh:**Lấy thông tin tọa độ địa lý (kinh độ và vĩ độ) tại vị trí ảnh được chụp. * **Mã nhân viên và tên nhân viên thực hiện chụp ảnh**: Lấy mã nhân viên và tên nhân viên từ thông tin người dùng đã đăng nhập trong ứng dụng để chụp ảnh.   Chọn  để xác nhận hình đã chụp  Chọn để remove hình vừa chụp, chụp lại hình khác  *Trường hợp người dùng chụp số lượng hình không thỏa config cấu hình (chụp **< MIN** / **> MAX**): [Danh sách cấu hình chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53021846) MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES, MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES*  *thì hiển thị mess thông báo: "Bạn chưa chụp đủ số lượng hình quy định"/ "Bạn đã chụp quá số hình quy định"*  **Thanh scroll hình ảnh đã chụp; show scroll khi số hình chụp >= 3 hình** |
| Điểm bán đóng cửa | Button Toggle | Có | Không | Default = False  Click **button toggle = True** để xác nhận Điểm bán đóng cửa   Hiển thị lý do Điểm bán đóng cửa như hình:     * Chọn lý do: required khi **button toggle = True.** Combo Danh sách lý do lấy từ chức năng  [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415) , Loại = Điểm bán đóng cửa * Ghi chú: Field text (256) để nhập nội dung mô tả. **Field này chỉ hiển thị để nhập k****hi chọn Option Lý do = Lý do khác => Required Field: "Ghi chú"**   *Nếu Option Chọn lý do Điểm bán đóng cửa # Lý do khác → không hiển thị field “Ghi chú” để nhập*  *Nếu chọn Option Chọn Lý do Điểm bán đóng cửa = Lý do khác; nhưng không nhập nội dung "Ghi chú" => Disable button "Xác nhận"* |
| Xác nhận | Button | Có | Có | **Vượt khoảng cách → Default Disable button “Xác nhận”**  **Sau khi Đã nhập lý do vượt khoảng cách → enable button “Xác nhận”**   ---  - Người dùng nhấn button để gửi thông tin check-in   * Vị trí và Hình ảnh: kiểm tra vị trí thực hiện Chương trình khảo sát, Điểm bán   + *MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES, MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES*   + *MAP\_LOCATION\_DISTANCE* * Lý do vượt khoảng cách: Chọn Lý do là bắt buộc; nếu "Option Lý do vượt khoảng cách = Lý do khác" thì bắt buộc phải nhập "Ghi chú" * Điểm bán đóng cửa (toggle "Điểm bán đóng cửa" được bật): Chọn Lý do là bắt buộc; nếu "Lý do = Lý do khác" thì bắt buộc phải nhập "Ghi chú"   => Nếu thiếu thông tin cần thiết thì DISABLE button “Xác nhận”   Sau khi chọn  **TRƯỜNG HỢP ĐIỂM BÁN ĐÓNG CỬA:**   * **Redirect sau khi nhấn "Xác nhận" ĐB đóng cửa trong popup "Checkin khảo sát" => Quay về màn hình "Danh sách khảo sát" và không cho thực hiện khảo check in**   **TRƯỜNG HỢP ĐIỂM BÁN KHÔNG ĐÓNG CỬA:**  hiển thị màn hình thực hiện khảo sát như mô tả    [Hiển thị câu hỏi khảo sát trên App](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023536#id-[SMAPP]Kh%E1%BA%A3os%C3%A1ttr%C3%AAnappsaleman-Hi%E1%BB%83nth%E1%BB%8Bc%C3%A2uh%E1%BB%8Fikh%E1%BA%A3os%C3%A1ttr%C3%AAnApp) |

## **Check in KHÔNG ràng buộc vị trí**

Tương tự chức năng  Checkin khảo sát đúng điểm bán nhưng trường hợp này không có ràng buộc vị trí