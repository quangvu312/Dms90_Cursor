|  |  |
| --- | --- |
| Issue Link |  |
| Story | <https://hotro.finviet.com.vn/browse/ECDM-682> <https://hotro.finviet.com.vn/browse/ECDM-403> <https://hotro.finviet.com.vn/browse/ECDM-395> <https://hotro.finviet.com.vn/browse/ECDM-402> |
| Epic |  |
| Feature |  |
| Description | Mô tả các nhiệm vụ bán hàng tại điểm bán của nhân viên bán hàng |
| Document version | RedV1.0.0  RedV1.0.1  25/12/2024   * Trường hợp này redirect về màn hình đã filter ngoại tuyến-> Lúc này show danh sách ĐB ngoại tuyến * Ghi chú (xem chi tiết; bộ lọc)   26/12/2024   * Ghi chú: Filter từ ngày- đến ngày; Action sau khi pin/ unpin   27/12/2024   * Thay đổi hình ảnh có icon pin/ unpin * bổ sung phân trang 10 item ghi chú/ page   RedV1.0.3  3/1/2025   * Permission camera và thư viện ảnh * Sau khi lọc danh sách điểm bán ngoại tuyến => Trường hợp điều chỉnh tuyến trên portal => hiển thị thông báo khi thực hiện viếng thăm điểm bán * Precondition đổi ngày active điểm bán |
| Document status | GreenDONE |
| Document owner | Đinh Quang Vũ |
| Chage History | 2 |

truenone

# **I. QUY TRÌNH/ CÁC BƯỚC THỰC HIỆN**

**trueDiagram\_DMS90false1700autotoptrue291215**

1. **Logn: Xem tại đây**
2. **Chấm công: Xem tại đây [SM-APP] Chấm công trên Salesman App**
3. **Viếng thăm: [SM-APP] Màn hình Viếng Thăm Salesman App**
4. **Các nghiệp vụ khi viếng thăm 1 Điểm bán trong tuyến của nhân viên xem mô tả bên dưới**

# **II. VIẾNG THĂM ĐIỂM BÁN**

## **Màn hình danh sách các nhiệm vụ viếng thăm tại Điểm bán**

* Khi nhấn nút viếng thăm hoặc click vào Item 1 Điểm bán trong màn hình viếng thăm trên danh sách tuyến sẽ chuyển đến màn hình nhiệm vụ trong tuyến - Xem **[SM-APP] Màn hình Viếng Thăm Salesman App**

| Trường dữ liệu | Mô tả |
| --- | --- |
| Cụm thông tin điểm bán | * Cụm thông tin điểm bán "Tên điểm bán hiển thị max 2 dòng; vượt 2 dòng hiển thị dấu ba chấm vd: cô ba lagi ... * Trường hợp điểm bán thiếu thông tin số điện thoại thì trường "Số điện thoại" hiển thị '-" * NEO "Cụm thông tin điểm bán + Button bắt đầu viếng thăm  tại màn hình này. |
|  | * Để làm được các tác vụ trong nhiệm vụ bắt buộc salesman phải viếng thăm Điểm bán, người dùng phải Click button này.   + Bất cứ lúc nào, khi người dùng nhấn vào button này →  Hệ thống kiểm tra điều kiện chấm công [SM-APP] Các chức năng yêu cầu chấm công đầu ngày, nếu chưa thực hiện chấm công sẽ hiển thị Thông báo: "Vui lòng chấm công đầu ngày trước khi thực hiện viếng thăm điểm bán."      - Chọn "Đồng ý" --> Redirect đến chức năng chấm công đầu ngày [SM-APP] Chấm công trên Salesman App   + Trả thông báo khi user tắt "Location Services" của ĐT / tắt "Location Permission" của Salesman App rồi nhấn "Bắt đầu viếng thăm" điểm bán   RedV1.0.3 Khi nhấn bắt đầu viếng thăm sẽ thực hiện kiểm tra Quyền vị trí và Quyền máy ảnh theo rule chung của app:   * Trường hợp KHÔNG chọn "Bắt đầu viếng thăm" mà click vào các task vụ khác hiển thị thông báo: * NEO "Cụm thông tin điểm bán + Button bắt đầu viếng thăm  tại màn hình này.   RedV1.0.3  Sau khi lọc danh sách điểm bán ngoại tuyến => Trường hợp điều chỉnh tuyến trên portal (Lên màn hình tuyến sửa lại ngày bắt đầu =>gen lại tuyến)=> App SM hiển thị thông báo khi thực hiện viếng thăm điểm bán như sau  Step 1: Chọn điểm bán ngoại tuyến viếng thăm, click item điểm bán Step 2: Chưa bấm viếng thăm điểm bán  Step 3: Lên màn hình tuyến sửa lại ngày bắt đầu —> Cho điểm bán đó start ngày tương lai <=> chưa có tuyến  Step 4: Lúc này trên App, khi nhấn viếng thăm sẽ check và thông báo: "Điểm bán @Điểm bán không còn nằm trong tuyến hôm nay, vui lòng kiểm tra lại!" Chọn "Đồng ý" tắt thông báo và quay lại màn hình Viếng thăm; reload màn hình và điểm bán vừa chọn mất đi    *// Xem thêm*   * *Precondition đổi ngày active điểm bán dưới cùng nhé* |
| Hiển thị dòng chữ: "Bạn cần thực hiện hết các bước bắt buộc trước khi rời khỏi điểm bán." | * Trên màn hình viếng thăm Chỉ cần có nhóm nhiệm vụ viếng thăm là sẽ hiển thị text này |
| Hiển thị Ảnh - Tên nhiệm vụ | * Hiển thị Ảnh - Tên nhiệm vụ theo nội dung mô tả * Danh sách nhiệm vụ trong tuyến được thêm vào tuyến của nhân viên trong bước Gán tuyến: [Portal HO][DMS] Tuyến bán hàng |

### Check in đúng khoảng cách

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Buton X | Button | Có | Không | Chọn "Đóng"  => Mess: "Màn hình đã có dữ liệu, bạn có chắc chắn muốn thoát?"   * Đồng ý: Thoát ra ngoài. * Trở lại: Đóng popup và trở lại màn hình trước đó |
| Khoảng cách | Datacolumn | Không |  | Hiển thị khoảng cách thiết bị so với tọa độ Điểm bán là bao nhiêu mét  Sau khi đồng ý viếng thăm, nếu config **MAP\_LOCATION\_DISTANCE <= 0,** hệ thống sẽ không kiểm tra vị trí của nhân viên so với vị trí của Điểm bán  Sau khi đồng ý viếng thăm, nếu config **MAP\_LOCATION\_DISTANCE > 0,** hệ thống sẽ kiểm tra vị trí của nhân viên so với vị trí của Điểm bán theo khoảng cách được cấu hình trong config  Danh sách cấu hình chung   * Check in vượt khoảng cách: Nếu không thỏa điều kiện khoảng cách sẽ hiển thị thông báo vượt khoảng cách và highlight khoảng cách (mét) và không cho thực hiện checkin Điểm bán đó (Khi Người dùng thực hiện chọn lý do vượt khoảng cách thì mới tiếp tục checkin được)  * Check in ĐÚNG khoảng cách: Nếu thỏa điều kiện về khoảng cách → hiển thị màn hình checkin   Nếu điểm bán không có tọa độ, hiển thị Màn hình như sau    **Hiển thị:**   * Hệ thống kiểm tra điểm bán không có tọa độ => hiển thị màn hình checkin * Khoảng cách: highlight đỏ text thông báo "Điểm bán không có tọa độ" * Disable button "Xác nhận" - Không cho phép checkin điểm bán này; chỉ có thể chọn "Đóng"  để tắt popup   **Các cách nhân viên có thể thực hiện lấy lại tọa độ:**  - Qua màn hình thông tin điểm bán -> update tọa độ (update này phải có yêu cầu chỉnh sửa).  - Nếu không có yêu cầu chỉnh sửa, không update được thì phải liên hệ admin hỗ trợ     + Admin update tọa độ trên web     + Admin yêu cầu chỉnh sửa tọa độ —> trên app mới mở button edit để sales cập nhật tọa độ. |
| Địa chỉ | Datacolumn | Không |  | Hiển thị địa chỉ khách hàng từ master data khách hàng |
| Image | Button Image | Có | Required/ not require dựa vào *config cấu hình (chụp **< MIN** / **> MAX**)* | Chọn button Image để chụp hình checkin    Sau khi chọn button để chụp ảnh sẽ có timestamp đính kèm trên ảnh bao gồm:   * **Thời gian chụp ảnh**:    + Lấy thời gian hiện tại tại thời điểm ảnh được chụp.   + Định dạng thời gian: HH:MM:SS DD/MM/YYYY   + Lấy thời gian của server hệ thống, không lấy thời gian trên thiết bị người dùng. * **Địa chỉ chụp ảnh**: Chuyển đổi tọa độ địa chỉ chụp ảnh thành địa chỉ chi tiết: số nhà, đường, phường, quận/huyện, tỉnh/thành phố, quốc gia. * **Tọa độ chụp ảnh:**Lấy thông tin tọa độ địa lý (kinh độ và vĩ độ) tại vị trí ảnh được chụp. * **Mã nhân viên và tên nhân viên thực hiện chụp ảnh**: Lấy mã nhân viên và tên nhân viên từ thông tin người dùng đã đăng nhập trong ứng dụng để chụp ảnh.  Chọn  để xác nhận hình đã chụp  Chọn để remove hình vừa chụp, chụp lại hình khác   *Trường hợp người dùng chụp số lượng hình không thỏa config cấu hình (chụp **< MIN** / **> MAX**): Danh sách cấu hình chung MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES, MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES*  *thì hiển thị mess thông báo: "Bạn chưa chụp đủ số lượng hình quy định"/ "Bạn đã chụp quá số hình quy định"*    *Cho phép scroll để xem nhiều hình bằng cách click và kéo qua phải/trái để xem*     * Số 4/10 (x/y) trong icon chụp hình: *Số hình đã chụp trên/MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES*  * Thanh scroll hình ảnh viếng thăm đã chụp trong popup "Bắt đầu viếng thăm" show khi số hình chụp viếng thăm >= 3 hình  * Setting chụp hình: - MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES: 0 - MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES: 0 ⇒ Cấu hình này KHÔNG chụp hình thì vẫn cho phép bắt đầu viếng thăm ĐB thành công * **Nếu max = 0 thì hide luôn icon chụp hình trên popup "Bắt đầu viếng thăm"** * min= MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES; max = MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES. Trên portal khi tạo mới/update:   + Config "min" lúc nhấn Lưu → check config "max" nếu min > max thì hiển thị warning: "Số min đang lớn hơn Max, vui lòng nhập lại!"; Đồng ý -> tắt thông báo và nhập lại min; (Lúc tạo min mà max chưa tạo thì cho lưu bình thường)   + Config "Max" cũng vậy, khi chọn lưu -> check config min, nếu max < min thì hiển thị warning: "Số max đang bé hơn số Min, vui lòng nhập lại!"; Đồng ý -> tắt thông báo và nhập lại max. (Lúc tạo max mà min chưa tạo thì cho lưu bình thường) |
| Điểm bán đóng cửa | Button Toggle | Có | Không | Default = False  Click **button toggle = True** để xác nhận Điểm bán đóng cửa  Hiển thị lý do Điểm bán đóng cửa như hình:     * Chọn lý do: Placeholder "Chọn lý do"; required khi **button toggle = True.** Combo Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415), Loại = Điểm bán đóng cửa. * Ghi chú: Placeholder "Ghi chú"; Field text (256) để nhập nội dung mô tả, **Field này chỉ hiển thị để nhập khi**"Chọn Lý do = Lý do khác"=> Required Field : "Ghi chú"   \*Lưu ý:  Nếu Option  Lý do Điểm bán đóng cửa # Lý do khác→  không hiển thị field "Ghi chú" để nhập  Nếu chọn Option Lý do Điểm bán đóng cửa = Lý do khác; nhưng không nhập nội dung "Ghi chú" => Disable button "Xác nhận" |
| Xác nhận | Button | Có | Có | - Người dùng nhấn để gửi thông tin check-in  **Kiểm tra dữ liệu đầu vào:**   * Vị trí và Hình ảnh: kiểm tra vị trí thực hiện viếng thăm Điểm bán thỏa config Danh sách cấu hình chung   + MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES, MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES   + MAP\_LOCATION\_DISTANCE * Điểm bán đóng cửa (toggle "Điểm bán đóng cửa" được bật): Chọn Lý do là bắt buộc; nếu "Lý do = Lý do khác" thì bắt buộc phải nhập "Ghi chú"   => Nếu thiếu thông tin cần thiết thì DISABLE button "Xác nhận"  Sau khi chọn  ;    **Điểm bán đóng cửa**  **TRƯỜNG HỢP ĐIỂM BÁN ĐÓNG CỬA:**  **Update 11/12/2024**  **11. Redirect sau khi nhấn "Xác nhận" báo cáo ĐB đóng cửa trong popup "Bắt đầu viếng thăm" => Quay về màn hình viếng thăm và refresh màn hình viếng thăm**  **Update 24/12/2024**  **(Điểm bán đóng cửa vẫn được phép viếng thăm lại trong ngày)**   Điểm bán đóng cửa thì chụp hình checkin; chọn lý do đóng cửa. Hệ thống ghi nhận đã viếng thăm và time (hh:mm:ss) 00:00:00 Lúc này Checkin = checkout, và **Vẫn được phép chọn Viếng thăm lại**  **--**  Màn hình danh sách điểm bán sau khi refresh lại vẫn hiển thị đã viếng thăm nhưng không ghi nhận time **(Đã viếng thăm 00:00:00)**      **TRƯỜNG HỢP ĐIỂM BÁN KHÔNG ĐÓNG CỬA:**  hiển thị màn hình danh sách nhiệm vụ viếng thăm như hình:    \*Lưu ý:   * NEO "Cụm thông tin điểm bán + Button Bắt đầu viếng thăm + Button rời điểm  bán" tại màn hình này * Cụm thông tin điểm bán "Tên điểm bán hiển thị max 2 dòng; vượt 2 dòng hiển thị dấu ba chấm vd: cô ba lagi ... * Trường hợp điểm bán thiếu thông tin số điện thoại thì trường "Số điện thoại" hiển thị '-". |
| Checkin VƯỢT khoảng cách:     * Nếu không thỏa điều kiện khoảng cách sẽ hiển thị highlight thông báo vượt khoảng cách và khoảng cách (mét) và không cho thực hiện checkin Điểm bán đó.  * **Vượt khoảng cách → Default Disable button "Xác nhận"** * **Sau khi Đã nhập [Lý do vượt khoảng cách](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#AppSalemanNhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-L%C3%BDdov%C6%B0%E1%BB%A3tkho%E1%BA%A3ngc%C3%A1ch)→ enable button "Xác nhận"** * KHÔNG chọn [Lý do vượt khoảng cách](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#AppSalemanNhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-L%C3%BDdov%C6%B0%E1%BB%A3tkho%E1%BA%A3ngc%C3%A1ch) → Chọn "Đóng"  để tắt popup và quay trở về màn hình trước đó, không cho checkin | | | | |

#### **Nhập lý do:**

Mô tả

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Khoảng cách | Datacolumn | Không |  | Hiển thị khoảng cách thiết bị so với tọa độ Điểm bán là bao nhiêu mét; highlight mét ví dụ: 250m  đồng thời hiển thị highlight thông báo: Vượt khoảng cách checkin cho phép (100m)   * Số mét hiển thị lấy từ config **MAP\_LOCATION\_DISTANCE  Danh sách cấu hình chung** |
| Địa chỉ | Datacolumn | Không |  | Hiển thị địa chỉ khách hàng từ master data khách hàng |
| Chọn lý do vượt khoảng cách | Select onechoice | Có | Có | Placeholder: Chọn lý do vượt khoảng cách   * Click combođể chọn lý do. * Hiển thị danh sách lý do vượt khoảng cách   Mô tả:   * Chọn lý do vượt khoảng cách: required, Combo Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415) , Loại = Lý do vượt khoảng cách viếng thăm điểm bán * Nhập lý do vượt khoảng cách: Field text (256) để nhập nội dung mô tả, **Field này chỉ hiển thị để nhập** khi **Chọn lý do vượt khoảng cách = Lý do khác => Required Field : "Nhập lý do vượt khoảng cách"**   **Hiển thị:**   * Hiển thị nội dung text ghi chú đã nhập * Sau chọn lý do / Nhập lý do vượt khoảng cách với Option "Lý do vượt khoảng cách = Lý do khác" → Enable button "Xác nhân" * KHÔNG chọn Lý do vượt khoảng cách → Chọn "Đóng"  để tắt popup và quay trở về màn hình trước đó      Nếu Option  Chọn lý do vượt khoảng cách # Lý do khác → không hiển thị field "Nhập lý do vượt khoảng cách" để nhập.  Nếu chọn Option Chọn lý do vượt khoảng cách = Lý do khác; nhưng người dùng không nhập nội dung "Nhập lý do vượt khoảng cách" => Disable button "Xác nhận" |
| Image | Button Image | Có | Required/ not require dựa vào *config cấu hình (chụp **< MIN** / **> MAX**):* | Chọn button Image để chụp hình checkin    Sau khi chọn button để chụp ảnh sẽ có timestamp đính kèm trên ảnh bao gồm:   * **Thời gian chụp ảnh**:    + Lấy thời gian hiện tại tại thời điểm ảnh được chụp.   + Định dạng thời gian: HH:MM:SS DD/MM/YYYY   + Lấy thời gian của server hệ thống, không lấy thời gian trên thiết bị người dùng. * **Địa chỉ chụp ảnh**: Chuyển đổi tọa độ địa chỉ chụp ảnh thành địa chỉ chi tiết: số nhà, đường, phường, quận/huyện, tỉnh/thành phố, quốc gia. * **Tọa độ chụp ảnh:**Lấy thông tin tọa độ địa lý (kinh độ và vĩ độ) tại vị trí ảnh được chụp. * **Mã nhân viên và tên nhân viên thực hiện chụp ảnh**: Lấy mã nhân viên và tên nhân viên từ thông tin người dùng đã đăng nhập trong ứng dụng để chụp ảnh.   Chọn  để xác nhận hình đã chụp  Chọn để remove hình vừa chụp, chụp lại hình khác  *Trường hợp người dùng chụp số lượng hình không thỏa config cấu hình (chụp **< MIN** / **> MAX**): Danh sách cấu hình chung MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES, MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES*  *thì hiển thị mess thông báo: "Bạn chưa chụp đủ số lượng hình quy định"/ "Bạn đã chụp quá số hình quy định"*  **Update 18/11/2024: Thanh scroll hình ảnh đã chụp ; show scroll khi số hình chụp >= 3 hình** |
| Điểm bán đóng cửa | Button Toggle | Có | Không | Default = False  Click **button toggle = True** để xác nhận Điểm bán đóng cửa  Hiển thị lý do Điểm bán đóng cửa như hình:     * Chọn lý do: required khi **button toggle = True.** Combo Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415), Loại = Điểm bán đóng cửa * Ghi chú: Field text (256) để nhập nội dung mô tả. **Field này chỉ hiển thị để nhập k****hi chọn Option Lý do = Lý do khác => Required Field : "Ghi chú"**   *Nếu Option Chọn lý do Điểm bán đóng cửa # Lý do khác → không hiển thị field "Ghi chú" để nhập*  *Nếu chọn Option Chọn Lý do Điểm bán đóng cửa = Lý do khác; nhưng không nhập nội dung "Ghi chú" => Disable button "Xác nhận"* |
| Xác nhận | Button | Có | Có | **Vượt khoảng cách → Default Disable button "Xác nhận"**  **Sau khi Đã nhập lý do vượt khoảng cách → enable button "Xác nhận"**    ---  - Người dùng nhấn button để gửi thông tin check-in   * Vị trí và Hình ảnh: kiểm tra vị trí thực hiện viếng thăm Điểm bán   + *MIN\_CHECK\_IN\_VISIT\_STORE\_IMAGES, MAX\_CHECK\_IN\_VISIT\_STORE\_IMAGES*   + *MAP\_LOCATION\_DISTANCE* * Lý do vượt khoảng cách: Chọn Lý do là bắt buộc; nếu "Option Lý do vượt khoảng cách = Lý do khác" thì bắt buộc phải nhập "Ghi chú" * Điểm bán đóng cửa (toggle "Điểm bán đóng cửa" được bật): Chọn Lý do là bắt buộc; nếu "Lý do = Lý do khác" thì bắt buộc phải nhập "Ghi chú"   => Nếu thiếu thông tin cần thiết thì DISABLE button "Xác nhận"  Sau khi chọn  **TRƯỜNG HỢP ĐIỂM BÁN ĐÓNG CỬA:**  Lúc này Checkin = checkout, Vẫn hiển thị đã viếng thăm nhưng không ghi nhận time (Đã viếng thăm 00:00:00). Cho phép thực hiện viếng thăm lại  [Chức năng Viếng thăm lại](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Ch%E1%BB%A9cn%C4%83ngVi%E1%BA%BFngth%C4%83ml%E1%BA%A1i)      **TRƯỜNG HỢP ĐIỂM BÁN KHÔNG ĐÓNG CỬA:**  hiển thị màn hình danh sách nhiệm vụ viếng thăm và bắt đầu tính thời gian viếng thăm Điểm bán như hình:    \*Lưu ý:   * NEO "Cụm thông tin điểm bán + Button Bắt đầu viếng thăm + Button rời điểm  bán" tại màn hình này * Cụm thông tin điểm bán "Tên điểm bán hiển thị max 2 dòng; vượt 2 dòng hiển thị dấu ba chấm vd: cô ba lagi ... * Trường hợp điểm bán thiếu thông tin số điện thoại thì trường "Số điện thoại" hiển thị '-" |

## **Check in KHÔNG ràng buộc vị trí**

Quy trình:

Mô tả màn hình: Giống Chức năng [Check in đúng khoảng cách](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#AppSalemanNhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Checkin%C4%91%C3%BAngkho%E1%BA%A3ngc%C3%A1ch:)

## **Checkin ngoại tuyến**

**Update 18/12/2024**

1. Filter danh sách điểm bán ngoại tuyến theo chức năng filter  [Màn hình Filter](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445372#id-[SMAPP]M%C3%A0nh%C3%ACnhVi%E1%BA%BFngTh%C4%83mSalesmanApp-M%C3%A0nh%C3%ACnhFilterFilter)

2. Chọn một điểm bán ngoại tuyến để viếng thăm

3. Chọn button\*  để checkin điểm bán ngoại tuyến

4. Hiển thị màn hình checkin điểm bán giống với Checkin trong tuyến theo các nội dung sau:

* 2.2[Điểm bán không có tọa độ:](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-%C4%90i%E1%BB%83mb%C3%A1nkh%C3%B4ngc%C3%B3t%E1%BB%8Da%C4%91%E1%BB%99:)
* 2.3[Checkin có ràng buộc vị trí](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Checkinc%C3%B3r%C3%A0ngbu%E1%BB%99cv%E1%BB%8Btr%C3%AD)
  + 2.3.1[Check in đúng khoảng cách:](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Checkin%C4%91%C3%BAngkho%E1%BA%A3ngc%C3%A1ch:)
    - 2.3.1.1[Điểm bán đóng cửa](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-%C4%90i%E1%BB%83mb%C3%A1n%C4%91%C3%B3ngc%E1%BB%ADa)
  + 2.3.2[Checkin VƯỢT khoảng cách:](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-CheckinV%C6%AF%E1%BB%A2Tkho%E1%BA%A3ngc%C3%A1ch:)
    - 2.3.2.1[Nhập lý do:](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Nh%E1%BA%ADpl%C3%BDdo:)
      * 2.3.2.1.1[Chọn lý do vượt khoảng cách](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Ch%E1%BB%8Dnl%C3%BDdov%C6%B0%E1%BB%A3tkho%E1%BA%A3ngc%C3%A1ch)
      * 2.3.2.1.2[Chọn lý do vượt khoảng cách: required, Combo Danh sách lý do lấy từ chức năng Dữ liệu chung , Loại = Lý do vượt khoảng cách viếng thăm điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Ch%E1%BB%8Dnl%C3%BDdov%C6%B0%E1%BB%A3tkho%E1%BA%A3ngc%C3%A1ch:required,ComboDanhs%C3%A1chl%C3%BDdol%E1%BA%A5yt%E1%BB%ABch%E1%BB%A9cn%C4%83ngD%E1%BB%AFli%E1%BB%87uchung,Lo%E1%BA%A1i=L%C3%BDdov%C6%B0%E1%BB%A3tkho%E1%BA%A3ngc%C3%A1chvi%E1%BA%BFngth%C4%83mc%E1%BB%ADah%C3%A0ng)
      * 2.3.2.1.3[Điểm bán đóng cửa](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-%C4%90i%E1%BB%83mb%C3%A1n%C4%91%C3%B3ngc%E1%BB%ADa.1)
* 2.4[Check in KHÔNG ràng buộc vị trí](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-CheckinKH%C3%94NGr%C3%A0ngbu%E1%BB%99cv%E1%BB%8Btr%C3%AD)

**Update 24/12/2024**

**1/ Ngoại tuyến phải trừ điểm bán trong tuyến thực tế hôm nay**

1, Chọn filter ngoại tuyến -  [Màn hình Filter](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445372#id-[SMAPP]M%C3%A0nh%C3%ACnhVi%E1%BA%BFngTh%C4%83mSalesmanApp-M%C3%A0nh%C3%ACnhFilterFilter)

2. Danh sách khách hàng ngoại tuyến phải trừ điểm bán trong tuyến thực tế hôm nay

RedV1.0.1 Trường hợp ĐB NGOẠI TUYẾN đóng cửa thì điều hướng về màn hình "Viếng thăm" & refresh màn hình "Viếng thăm" → Lúc này show danh sách ĐB ngoại tuyến

## **Checkout:**

Quy trình:

trueCheckoutfalse1500autotoptrue20865

**Kiểm tra checkout rời khỏi Điểm bán**

| **Config KHÔNG ràng buộc vị trí** | **Config CÓ ràng buộc vị trí** |
| --- | --- |
| Sau khi làm các tác vụ, salesman nhấn "Rời Điểm Bán", kiểm tra config nhiệm vụ bắt buộc:   * + Trường hợp đã làm xong các nhiệm vụ bắt buộc: Checkout thành công -> Ghi nhận thời gian check out và hiển thị button"Đã hoàn thành" viếng thăm Điểm bán   + Trường hợp chưa làm xong các nhiệm vụ bắt buộc sẽ hiện thị popup lý do rời Điểm bán → Bắt buộc phải chọn lý do mới được phép rời Điểm bán. Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415), Loại = Lý do không thực hiện nhiệm vụ bắt buộc | Lúc này hệ thống sẽ kiểm tra config kiểm tra khoảng cách checkout (Danh sách cấu hình chung - **MAP\_LOCATION\_DISTANCE**). Sau khi làm các tác vụ, salesman nhấn rời Điểm bán   * + Có bắt buộc kiểm tra khoảng cách khi checkout, thì hệ thống sẽ kiểm tra vị trí của nhân viên so với vị trí của Điểm bán theo config     - Nếu không thỏa điều kiện khoảng cách sẽ hiển thị popup chọn lý do → Bắt buộc phải chọn lý do mới được phép rời Điểm bán. Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415), Loại = Lý do vượt khoảng cách viếng thăm điểm bán     - Trường hợp chưa làm xong các nhiệm vụ bắt buộc sẽ hiện thị popup lý do nhiệm vụ bắt buộc  → Bắt buộc phải chọn lý do mới được phép rời Điểm bán. Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415), Loại = Lý do không thực hiện nhiệm vụ bắt buộc       * Nhiệm vụ bắt buộc cấu hình trên portal từ  [Portal HO][DMS] Tuyến bán hàng  Như thế nào là hoàn thành nhiệm vụ bắt buộc: tất cả các nhiệm vụ đã cấu hình trên portal, Saleman bắt buộc phải input data vào các task required đó. Ví dụ:          + Với nhiệm vụ **Kiểm tồn hàng hóa**: Phải nhập số lượng kiểm tồn cho từng sản phẩm.         + Với nhiệm vụ **Bán hàng**: Phải tạo ít nhất một đơn hàng có đầy đủ thông tin (khách hàng, sản phẩm, số lượng, giá,...).         + ....     - Nếu thỏa cả 2 điều kiện "thỏa khoảng cách" + "hoàn thành nhiệm vụ bắt buộc" => Checkout thành công -> Ghi nhận thời gian check out và hiển thị "Đã hoàn thành" viếng thăm Điểm bán |

### Lưu ý về việc viếng thăm điểm bán đồng thời

* **Trong 1 thời điểm, 1 user chỉ checkin 1 điểm bán**
* Nếu muốn checkin điểm bán khác, user phải checkout điểm bán hiện tại mới có thể checkin điểm bán tiếp theo.
* Khi chọn "Bắt đầu viếng thăm" điểm bán 2 khi chưa checkout điểm bán 1 → hệ thống báo mess: "Bạn đang viếng thăm một điểm bán khác." 
  + Chọn "Đồng ý" để tắt popup mess thông báo.

* Ví dụ:

* + Salesman A có tuyến bán hàng X có: Điểm bán 1, Điểm bán 2
  + SUP B có tuyến bán hàng Y có: Điểm bán 1, Điểm bán 2
  + SUP B là quản lý trực tiếp của Salesman A

| Các bước thực hiện | Trường hợp  *(Đọc các case từ trên xuống dưới, từ trái qua phải)* | Điểm bán 1 | Điểm bán 2 |
| --- | --- | --- | --- |
| 1 | User login = **Salesman A** | * Check in: Đã checkin * Checkout: Chưa checkout | Tiếp tục nếu Salesman A chọn điểm bán 2 để checkin, hệ thống báo mess: "Bạn đang viếng thăm một điểm bán khác." |
| 2 | User login = **SUP B, SUP chọn nhân viên = SUP khi login** | * SUP chọn điểm bán 1 checkin → Thực hiện checkin bình thường   Vì lúc này đang chọn SUP B, nên hệ thống đang ghi nhận SUP B đang thao tác → Thực hiện checkin thành công, trạng thái checkin điểm bán 1 sẽ là:   * Check in: Đã checkin * Checkout: Chưa checkout | Tiếp tục nếu SUP B chọn điểm bán 2 để checkin, hệ thống báo mess: "Bạn đang viếng thăm một điểm bán khác." |
| 3 | User login = **SUP B, SUP chọn nhân viên = Salesman A khi login** | Lúc này SUP sẽ thấy list điểm bán của Salesman A và thấy đang viếng thăm điểm bán 1   * Check in: Đã checkin * Checkout: Chưa checkout | Tiếp tục nếu SUP B chọn điểm bán 2 để checkin, hệ thống báo mess: "Bạn đang viếng thăm một điểm bán khác."  Vì lúc này đang chọn Salesman A, nên hệ thống đang ghi nhận salesman A đang thao tác → Chưa checkout điểm bán 1, không thể checkin điểm bán 2 |
| 4 | User login = **Salesman A** | Thực hiện checkout điểm bán 1, trạng thái checkin/checkout điểm bán 1 sẽ là:  * Check in: Đã checkin * Checkout: Đã checkout | * Salesman A chọn điểm bán 2 checkin → Hệ thống cho phép checkin bình thường. Nhưng Salesman A chưa thực hiện checkin |
| 5 | User login = **SUP B, SUP chọn nhân viên = Salesman A khi login** | Lúc này SUP sẽ thấy list điểm bán của Salesman A và thấy đã hoàn thành viếng thăm điểm bán 1   * Check in: Đã checkin * Checkout: Đã checkout | Tiếp tục nếu SUP B chọn điểm bán 2 để checkin. → Hệ thống cho phép checkin bình thường.  Vì lúc này đang chọn Salesman A, nên hệ thống đang ghi nhận đang chọn Salesman A đang thao tác và Salesman A đang ko viếng thăm bất kỳ điểm bán nào  SUP B thực hiện checkin → Thực hiện checkin thành công, trạng thái checkin điểm bán 2 sẽ là:   * Check in: Đã checkin * Checkout: Chưa checkout |
| 6 | User login = **Salesman A** | Trạng thái checkin/checkout điểm bán 1:  * Check in: Đã checkin * Checkout: Đã checkout | Trạng thái checkin/checkout điểm bán 2 đang là:  * Check in: Đã checkin * Checkout: Chưa checkout   Salesman A thực hiện checkout điểm bán 2 → Hệ thống cho phép checkin bình thường → Thực hiện checkout thành công, trạng thái checkin/checkout điểm bán 2 sẽ là:   * Check in: Đã checkin * Checkout: Đã checkout |
| 7 | User login = **SUP B, SUP chọn nhân viên = Salesman A khi login** | Trạng thái checkin/checkout điểm bán 1:  * Check in: Đã checkin * Checkout: Đã checkout | Trạng thái checkin/checkout điểm bán 2:  * Check in: Đã checkin * Checkout: Đã checkout |
| 8 | User login = **SUP B, SUP chọn nhân viên = SUP khi login** | Lúc này SUP sẽ thấy list điểm bán của SUP và thấy đang viếng thăm điểm bán 1   * Check in: Đã checkin * Checkout: Chưa checkout   Giống tình trạng case số 2, vì nãy giờ chưa thay đổi bất cứ trạng thái nào, điểm bán 1 này đang nằm trên tuyến của SUP B  SUP B thực hiện checkout điểm bán 1, trạng thái checkin/checkout điểm bán 1 sẽ là:   * Check in: Đã checkin * Checkout: Đã checkout | Tiếp tục nếu SUP B chọn điểm bán 2 để checkin. → Hệ thống cho phép checkin bình thường.  Vì lúc này đang chọn SUP B, nên hệ thống đang ghi nhận SUP B đang thao tác và SUP B đang ko viếng thăm bất kỳ điểm bán nào  SUP B thực hiện checkin → Thực hiện checkin thành công, trạng thái checkin điểm bán 2 sẽ là:   * Check in: Đã checkin * Checkout: Chưa checkout |
| 9 | User login = **SUP B, SUP chọn nhân viên = SUP khi login** | Trạng thái checkin/checkout điểm bán 1:  * Check in: Đã checkin * Checkout: Đã checkout | Trạng thái checkin/checkout điểm bán 2 đang là:  * Check in: Đã checkin * Checkout: Chưa checkout   SUP B thực hiện checkout điểm bán 2 → Hệ thống cho phép checkin bình thường → Thực hiện checkout thành công, trạng thái checkin/checkout điểm bán 2 sẽ là:   * Check in: Đã checkin * Checkout: Đã checkout |

Lưu ý về việc hệ thống tự động check out điểm bán khi hết ngày làm việc (23:59:59)

* Khi qua ngày mới, nếu không thực hiện checkout điểm bán thì hệ thống sẽ tự checkout điểm bán và ghi nhận checkout vào lúc 23:59:59.
* Lúc này không quan tâm đến đã thực hiện nhiệm vụ bắt buộc hay chưa, đều checkout ra khỏi điểm bán và ghi nhận checkout vào lúc 23:59:59
* Và ghi nhận user checkout = user đã checkin điểm bán
  + Sales checkin sẽ ghi nhận cho sales
  + SUP checkin sẽ ghi nhận cho SUP
  + SUP chọn sales (lúc login) để checkin sẽ ghi nhận cho sales

### Lưu ý về việc chưa check out điểm bán mà thực hiện chấm công cuối ngày.

* Trường hợp chưa checkout điểm bán mà thực hiện chấm công cuối ngày --> Hiển thị thông báo: Vui lòng checkout điểm bán @mã điểm bán - @tên điểm bán đang viếng thăm trước khi chấm công cuối ngày.
* Ví dụ:
* + Salesman A có tuyến bán hàng X có: Điểm bán 1, Điểm bán 2
  + SUP B có tuyến bán hàng Y có: Điểm bán 1, Điểm bán 2
  + SUP B là quản lý trực tiếp của Salesman A

| Trường hợp  *(Đọc các case từ trên xuống dưới, từ trái qua phải)* | Điểm bán 1 | Chấm công cuối ngày |
| --- | --- | --- |
| User login = **Salesman A** | * Check in: Đã checkin * Checkout: Chưa checkout | **Salesman A thực hiện chấm công cuối ngày --> Hiển thị thông báo: Vui lòng checkout DB1 - điểm bán 1 đang viếng thăm trước khi chấm công cuối ngày.** |
| User login = **SUP B, SUP chọn nhân viên = Salesman A khi login** | * Check in: Đã checkin * Checkout: Chưa checkout | SUP đang chọn nhân viên = Salesman A **thực hiện chấm công cuối ngày --> Hiển thị thông báo: Vui lòng checkout DB1 - điểm bán 1 đang viếng thăm trước khi chấm công cuối ngày.** |
| User login = **SUP B, SUP chọn nhân viên = SUP khi login** | * Check in: Chưa checkin * Checkout: Chưa checkout | SUP đang chọn nhân viên = SUP **thực hiện chấm công cuối ngày → Thực hiện bình thường** |

Màn hình Viếng thăm đã checkin - chưa checkout:

*Chọn button "Rời điểm bán để thực hiện check out:*

### Không ràng buộc vị trí & Đã hoàn tất nhiệm vụ bắt buộc

Mô tả

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Kết thúc viếng thăm | Header | Không |  | Tiêu đề popup |
| Khoảng cách | Datacolumns | Không |  | Hiển thị khoảng cách check out so với tọa độ Điểm bán |
| Địa chỉ | Datacolumn | Không |  | Hiển thị địa chỉ của Điểm bán từ master Điểm bán |
|  | Button | Có | Có | - Người dùng nhấn button "Xác nhận" để gửi thông tin checkout, hệ thống Kiểm tra Không ràng buộc vị trí & Đã hoàn tất nhiệm vụ bắt buộc  Sau khi chọn  hiển thị màn hình viếng thăm thành công   * Hiển thị check box hoàn thành và time (hh:mm) trên task vụ đã thực hiên trên màn hình này |

Đã hoàn thành viếng thăm

\*Lưu ý:

* NEO "Cụm thông tin điểm bán + Button "Đã hoàn thành" tại màn hình này
* Cụm thông tin điểm bán "Tên điểm bán" hiển thị max 2 dòng; vượt 2 dòng hiển thị dấu ba chấm vd: cô ba lagi ...
* Trường hợp điểm bán thiếu thông tin số điện thoại thì trường "Số điện thoại" hiển thị '-"

Mô tả

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
|  | Datacolumn | Có | Không | Hiển thị các ghi chú có loại ghi chú = điểm bán đã được GHIM; => Xem mô tả tại mục ghi chú [Thêm ghi chú cho Điếm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#AppSalemanNhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Th%C3%AAmghich%C3%BAcho%C4%90i%E1%BA%BFmb%C3%A1n)   * Ghi chú chạy động trong khung ghim * Icon Un Ghim cho phép người dùng bỏ ghim ghi chú tại đây. |
|  | Datacolumn | Không |  | Cụm thông tin khách hàng trên màn hình Viếng thăm => Xem chi tiết mô tả [SM-APP] Màn hình Viếng Thăm Salesman App  Trong đó: thông tin điểm bán lấy từ màn hình quản lý điểm bán [Dữ liệu nền] [HO] Danh sách điểm bán   * avatar điểm bán: Hiển thị hình ảnh avatar chụp gần nhất của điểm bán * Tên điểm bán: hiển thị max 2 dòng; vượt 2 dòng hiển thị dấu ba chấm vd: cô ba lagi ... * Số điện thoại: Hiển thị số điện thoại điểm bán * Địa chỉ: Hiển thị địa chỉ của điểm bán |
|  | Datacolumn | Không |  | Đếm và Hiển thị thời gian từ lúc checkin đến lúc checkout theo HH:MM:SS |
|  | Button | Có | Không | Hiển thị thông tin đã hoàn thành viếng thăm tại Điểm bán; chọn để trở về màn hình danh sách Điểm bán (Reload màn hình danh sách khách hàng) |
|  | Icon/button | Có | Không | Chọn để back trở về màn hình trước đó; trường hợp này back về màn hình danh sách Điểm bán (Reload màn hình danh sách khách hàng) |

### Không ràng buộc vị trí & Chưa hoàn tất nhiệm vụ bắt buộc

Màn hình

Mô tả

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Kết thúc viếng thăm | Header | Không |  | Tiêu đề popup |
| Khoảng cách | Datacolumns | Không |  | Hiển thị khoảng cách check out so với tọa độ Điểm bán |
| Địa chỉ | Datacolumn | Không |  | Hiển thị địa chỉ của Điểm bán từ master Điểm bán |
| **Lý do không thực hiện nhiệm vụ bắt buộc** | Select onechoice | Có | Có | Placeholder**:** Lý do không thực hiện nhiệm vụ bắt buộc  Khi Saleman nhấn nút "Rời điểm bán" → App sẽ kiểm tra lại toàn bộ danh sách nhiệm vụ: Nếu Saleman không thực hiện nhiệm vụ bắt buộc hoặc còn tồn tại nhiệm vụ bắt buộc → Hiển thị Combo **Lý do không thực hiện nhiệm vụ bắt buộc**   * Click combođể chọn lý do.  * Hiển thị danh sách lý do không thực hiện nhiệm vụ bắt buộc   Mô tả:   * Lý do không thực hiện nhiệm vụ bắt buộc: required, Combo Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415) , Loại = Lý do không thực hiện nhiệm vụ bắt buộc * Nhập lý do không thực hiện nhiệm vụ bắt buộc: Field text (256) để nhập nội dung mô tả, **Field này chỉ hiển thị để nhập** khi Chọn lý do không thực hiện nhiệm vụ bắt buộc= Lý do khác => Required Field : "Nhập lý do không thực hiện nhiệm vụ bắt buộc"  **Hiển thị:**   * Hiển thị nội dung text ghi chú đã nhập * Sau chọn lý do / Nhập lý do với Option "Lý do không thực hiện nhiệm vụ bắt buộc= Lý do khác" → Enable button "Xác nhân" * KHÔNG chọn Lý do không thực hiện nhiệm vụ bắt buộc → Chọn "Đóng"  để tắt popup và quay trở về màn hình trước đó   \*Lưu ý:   * Nếu chọn Option Lý do không thực hiện nhiệm vụ bắt buộc # Lý do khác → không hiển thị field "Nhập lý do không thực hiện nhiệm vụ bắt buộc" để nhập. * Nếu chọn Option Lý do không thực hiện nhiệm vụ bắt buộc = Lý do khác; nhưng người dùng không nhập nội dung "Nhập lý do không thực hiện nhiệm vụ bắt buộc" => Disable button "Xác nhận" |
|  | Button | Có | Có | - Người dùng nhấn button "Xác nhận" để gửi thông tin checkout,  bao gồm lý do không thực hiện nhiệm vụ bắt buộc  - Kiểm tra và Xác thực thông tin trước khi lưu:   * Bắt buộc chọn "Lý do không thực hiện nhiệm vụ bắt buộc"; Nếu thiếu thông tin "**Lý do không thực hiện nhiệm vụ bắt buộc"** thì DISABLE button "Xác nhận"   Sau khi chọn  hiển thị màn hình viếng thăm thành công như hình:   * Hiển thị check box hoàn thành và time (hh:mm) trên task vụ đã thực hiên trên màn hình này |

### CÓ ràng buộc vị trí & Đã hoàn tất nhiệm vụ bắt buộc

Mô tả

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Kết thúc viếng thăm | Header | Không |  | Tiêu đề popup |
| Khoảng cách | Datacolumns | Không |  | Hiển thị khoảng cách thiết bị so với tọa độ Điểm bán là bao nhiêu mét; trường hợp vượt config cấu hình khoảng cách thì hiển thị highlight mét ví dụ: 250m  đồng thời hiển thị highlight thông báo: Vượt khoảng cách Checkout cho phép (100m)   * Số mét hiển thị lấy từ config (Cấu hình checkout): **MAP\_LOCATION\_DISTANCE Danh sách cấu hình chung** |
| Địa chỉ | Datacolumn | Không |  | Hiển thị địa chỉ của Điểm bán từ master Điểm bán |
| **Lý do vượt khoảng cách** | Select onechoice | Có | Có | Placeholder**:** Chọn lý do vượt khoảng cách  Khi Saleman nhấn nút "Rời điểm bán" → App sẽ kiểm tra lại Danh sách cấu hình chung config khoảng cách → Hiển thị Combo Chọn lý do vượt khoảng cách   * Click combođể chọn lý do.  * Hiển thị danh sách Lý do vượt khoảng cách   Mô tả:   * Lý do vượt khoảng cách: required, Combo Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415) , Loại = Lý do vượt khoảng cách viếng thăm điểm bán * Nhập Lý do vượt khoảng cách: Field text (256) để nhập nội dung mô tả, **Field này chỉ hiển thị để nhập** khi Chọn lý do vượt khoảng cách= Lý do khác => Required Field : "Nhập Lý do vượt khoảng cách"  **Hiển thị:**   * Hiển thị nội dung text ghi chú đã nhập * Sau chọn lý do / Nhập lý do với Option "Chọn lý do vượt khoảng cách = Lý do khác" → Enable button "Xác nhân" * KHÔNG chọn Lý do vượt khoảng cách → Chọn "Đóng"  để tắt popup và quay trở về màn hình trước đó   \*Lưu ý:   * Nếu chọn Option Lý do vượt khoảng cách # Lý do khác → không hiển thị field "Nhập lý do vượt khoảng cách" để nhập. * Nếu Chọn lý do vượt khoảng cách = Lý do khác; nhưng người dùng không nhập nội dung "Nhập lý do vượt khoảng cách" => Disable button "Xác nhận" |
|  | Button | Không |  | * Nếu Chọn lý do vượt khoảng cách = Lý do khác; nhưng người dùng không nhập nội dung "Nhập lý do vượt khoảng cách" => Disable button "Xác nhận"  * Hoặc không chọn bất kỳ "lý do vượt khoảng cách" nào từ danh sách lý do => thì DISABLE button "Xác nhận" |
|  | Button | Có | Có | - Người dùng nhấn button "Xác nhận" để gửi thông tin checkout  - Kiểm tra và Xác thực thông tin trước khi lưu: Nếu thiếu thông tin "**Lý do vượt khoảng cách"** thì DISABLE button "Xác nhận"  Sau khi chọn  Hiển thị màn hình Đã hoàn thành:    * Hiển thị check box hoàn thành và time (hh:mm) trên task vụ đã thực hiên trên màn hình này |

*(nếu không vượt khoảng cách và đã hoàn tất nhiệm vụ bắt buộc thì khi check out màn hình popup giống mô tả [Không ràng buộc vị trí & Đã hoàn tất nhiệm vụ bắt buộc](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#AppSalemanNhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Kh%C3%B4ngr%C3%A0ngbu%E1%BB%99cv%E1%BB%8Btr%C3%AD&%C4%90%C3%A3ho%C3%A0nt%E1%BA%A5tnhi%E1%BB%87mv%E1%BB%A5b%E1%BA%AFtbu%E1%BB%99c))*

### CÓ ràng buộc vị trí & Chưa hoàn tất nhiệm vụ bắt buộc

Mô tả

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Kết thúc viếng thăm | Header | Không |  | Tiêu đề popup |
| Khoảng cách | Datacolumns | Không |  | Hiển thị khoảng cách thiết bị so với tọa độ Điểm bán là bao nhiêu mét; highlight mét ví dụ: 250m  đồng thời hiển thị highlight thông báo: Vượt khoảng cách Checkout cho phép (100m)   * Số mét hiển thị lấy từ config (Cấu hình checkout): **MAP\_LOCATION\_DISTANCE Danh sách cấu hình chung** |
| Địa chỉ | Datacolumn | Không |  | Hiển thị địa chỉ của Điểm bán từ master Điểm bán |
| **Lý do vượt khoảng cách** | Select onechoice | Có | Có | **Gửi dữ liệu lên backend để xác nhận**:  Khi Saleman nhấn nút "Rời điểm bán" → Dữ liệu checkout được gửi về backend để kiểm tra.  Trường hợp vượt khoảng cách so với config checkout (Cấu hình checkout): **Danh sách cấu hình chung - MAP\_LOCATION\_DISTANCE)** sẽ hiện thị combobox lý do vượt khoảng cách → Bắt buộc phải chọn lý do mới được phép rời Điểm bán.   * + Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415), Loại = Lý do vượt khoảng cách viếng thăm điểm bán   + Nếu "Lý do = Lý do khác" thì bắt buộc phải nhập "Nhập lý do vượt khoảng cách" |
| **Lý do không thực hiện nhiệm vụ bắt buộc** | Select onechoice | Có | Có | Placeholder: Lý do không thực hiện nhiệm vụ bắt buộc  Thực hiện:   * Khi Saleman nhấn nút "Rời điểm bán"  * App sẽ kiểm tra lại toàn bộ danh sách nhiệm vụ: Nếu Saleman không thực hiện nhiệm vụ bắt buộc hoặc còn tồn tại nhiệm vụ bắt buộc:   + Hiển thị **Lý do không thực hiện nhiệm vụ bắt buộc**   + Bắt buộc phải chọn lý do mới được phép rời Điểm bán.  * + - Danh sách lý do lấy từ chức năng [Dữ liệu chung](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48443415) , Loại = Lý do không thực hiện nhiệm vụ bắt buộc     - Nếu "Lý do không thực hiện nhiệm vụ bắt buộc = Lý do khác" thì bắt buộc phải nhập "Lý do không thực hiện nhiệm vụ bắt buộc" |
|  | Button | Có | Có | - Người dùng nhấn button "Xác nhận" để gửi thông tin checkout,  bao gồm lý do **không thực hiện nhiệm vụ bắt buộc và** **Lý do vượt khoảng cách**  - Kiểm tra và Xác thực thông tin trước khi lưu: Nếu thiếu thông tin "**Lý do không thực hiện nhiệm vụ bắt buộc"/ "Lý do vượt khoảng cách"** thì DISABLE button "Xác nhận"  Sau khi chọn hiển thị  màn hình viếng thăm thành công như hình:   * Hiển thị check box hoàn thành và time (hh:mm) trên task vụ đã thực hiên trên màn hình này |

*(Hệ thống kiếm tra chưa thỏa yêu cầu khoảng cách thì hiển thị combo lý do vượt khoảng cách; chưa thỏa nhiệm vụ bắt buộc thì hiển thị combo lý do chưa thực hiện nhiệm vụ bắt buộc; chưa thỏa cả 2 thì hiển thị cả 2 combo như mô tả trên)*

## Checkout ngoại tuyến

**Update 18/12/2024**

1. Thực hiện checkout giống checkout trong tuyến đã mô tả trên  **[Checkout](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Checkout:)**

**2. Với những điểm bán Ngoại tuyến ghi nhận thông tin viếng thăm ngoại tuyến và lưu trên tuyến thực tế [3.8. Tuyến thực tế](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48431425#id-[PortalHO][DMS]Tuy%E1%BA%BFnb%C3%A1nh%C3%A0ng-3.8.Tuy%E1%BA%BFnth%E1%BB%B1ct%E1%BA%BF) . Field "Số ĐB ngoại tuyến đã VT" = n+1; n** Là tổng số lượng điểm bán ngoại tuyến đã được viếng thăm trong ngày

## Thêm ghi chú cho Điểm bán

Màn hình: 

  

Thêm ghi chú cho Điểm bán bằng cách click vào button Ghi chú  => hiển thị màn hình danh sách ghi chú như hình dưới

(Note: ghi chú theo điểm bán, ai login mà thấy và bán được cho điểm bán đó thì thấy danh sách ghi chú, thấy ghim, pin/ unpin; tạo ghi chú đều được)

Mô tả

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
|  | | | | |
|  |  |  |  |  |
| Tìm kiếm | Textbox | Có | Không | **Chức năng:**"Tìm kiếm" cho phép người dùng thực hiện nhật text tìm kiếm các ghi chú của nhân viên.  **Cách sử dụng:**   * Placeholder: Nhập từ khóa tìm kiếm * Search: Khi user nhập thông tin vào ô text (Nhập text tiêu đề ghi chú) → Sau đó nhấn enter trên keyboard ->Lưới danh sách sẽ lọc các ghi chú có thông tin được nhập trong ô này. |
| Filter |  | Có | Không | * Nhấn vào Lọc  để lọc loại ghi chú như sau:     **Chức năng:**Cho phép tìm kiếm và hiển thị danh sách các ghi chú theo thời gian và loại ghi chú  **Cách sử dụng:**   1. **Nhấp vào nút:** Người dùng nhấp vào nút "Từ ngày"/ "Đến ngày"/ "Điểm bán"/ "Tồn kho"  * Chọn ngày tạo ghi chú:    + Default: Today(), từ ngày = đến ngày = ngày hiện tại   + Chọn Từ ngày - Đến Ngày để tìm kiếm, Lọc theo thời gian tạo ghi chú, Ngày hiển thị theo dd/mm/YY   + Đến ngày >= Từ ngày   + RedV1.0.1      - nếu chọn từ ngày, bắt buộc phải chọn đến ngày, không chọn hiển thị higlight đỏ "Bắt buộc phải nhập đến ngày!"     - và ngược lại chọn đến ngày thì phải chọn từ ngày, không chọn hiển thị higlight đỏ "Bắt buộc phải nhập đến ngày!" .     - Nếu không chọn thì lọc tất cả. KHÔNg hiển thị higlight đỏ      * Single choice Loại ghi chú: Gồm 2 loại như sau:   + Loại ghi chú **Tồn kho**: Sau khi chọn "Áp dụng" Sẽ hiển thị list ghi chú từ thông tin ghi chú tồn kho. Ghi chú được tạo trong màn hình nhiệm vụ Kiểm tra tồn kho có Loại ghi chú = Tồn kho   + Loại ghi chú **Điểm bán: Sau khi chọn "Áp dụng" Sẽ hiển thị list ghi chú từ** ghi chú của Loại ghi chú= Điểm bán (Ghi chú này được tạo trên màn hình viếng thăm điểm bán)  1. **Kết hợp bộ lọc:** Chức năng lọc theo nhiều tiêu chí kết hợp 2. **Chọn button "Áp dụng":** hệ thống kiểm tra và tìm kiếm theo điều kiện "Và" tức là tìm kiếm và hiển thị ghi chú thỏa các tiêu chí lọc gồm Trong khoảng thời gian và Loại ghi chú  * Đặt lại: Clear hết dữ liệu tìm kiếm đã chọn/nhập, đưa về trạng thái ban đầu * Áp dụng: Áp dụng các dữ liệu tìm kiếm đã chọn/nhập vào danh sách ghi chú và reload danh sách ghi chú hiển thị kết quả tìm kiếm |
|  |  |  |  | * Hiển thị ghi chú được ghim * Mỗi loại ghi chú chỉ được ghim 1 ghi chú nên tại đây hiển thị max là 2 GHIM * Click vào icon unpin  để bỏ ghim trên màn hình   Mô tả hiển thị: RedV1.0.1   * Ghi chú mới: header Ghi chú đã nhập * Nội dung ghi chú: Cắt chuỗi 60 ký tự nội dung ghi chú đã nhập * Tạo bởi [ Họ và tên ] ; ngày dd/mm/YY: Hiển thị thông tin người tạo; ngày tạo * Loại ghi chú:   + Loại ghi chú **Tồn kho**: Khi tạo ghi chú từ bước Kiểm tra tồn kho có Loại ghi chú= Tồn kho   + Loại ghi chú **Điểm bán: Tạo ghi chú từ** màn hình viếng thăm Điểm bán có Loại ghi chú= Điểm bán |
|  |  |  |  | RedV1.0.1 Hiển thị danh sách ghi chú:  + show theo bộ lọc, bộ lọc đang defaul today ( ) của cả 2 loại ghi chú "Điểm bán" + "Kiểm tồn"; nên màn hình danh sách theo filter luôn  + orderby theo thời gian tạo gần nhất;  Các view hiển thị danh sách ghi chú gồm:   * Tất cả các ghi chú * Theo text search tìm kiếm * Theo filter bộ lọc     Mô tả hiển thị:   * Ghi chú mới: header Ghi chú đã nhập * Nội dung ghi chú: Cắt chuỗi 60 ký tự nội dung ghi chú đã nhập * Tạo bởi [ Họ và tên ] ; ngày dd/mm/YY: Hiển thị thông tin người tạo; ngày tạo * Loại ghi chú:   + Loại ghi chú **Tồn kho**: Khi tạo ghi chú từ bước Kiểm tra tồn kho có Loại ghi chú= Tồn kho   + Loại ghi chú **Điểm bán: Tạo ghi chú từ** màn hình viếng thăm Điểm bán có Loại ghi chú= Điểm bán * Hình ảnh: show hình cuối cùng   RedV1.0.1Click vào item ghi chú hoặc click vào tiêu đề ghi chú => Hiển thị màn hình chi tiết ghi chú như tạo mới. Chỉ được Pin / Unpin. Không cho điều chỉnh.   * Danh sách ghi chú: Phân trang 10 item/page |
|  | Button | Có | Không | **Tạo mới ghi chú**   * Nhấn vào  để thêm một ghi chú mới  * **Ghi chú này sẽ mặc định là loại ghi chú = "Điểm bán"; Trường hợp tại bước kiểm tồn → chọn button new ghi chú thì Loại ghi chú = "kiểm tồn"**      Thêm ghi chú:   * Ghi chú mới: required, text (300) Text header; Nếu không nhập header hiển thị mặc định tiêu đề "Ghi chú mới" * Tạo bởi [ Họ và tên ]: readonly; hiển thị thông tin user login tạo ghi chú * Nội dung ghi chú: not required, Text cho phép người dùng nhập nội dung text; * : Chọn để Chụp ảnh / tải ảnh đã chụp từ thiết bị lên (Tối đa 10 tấm; định dạng: png/ jpeg/ jpg) để đính kèm với nội dung ghi chú;   + Hiển thị poup chọn Chụp hình/ Tải hình     - Lưu ý: hình ảnh được upload từ thiết bị lên giới hạn 10Mb/ tấm, trường hợp vượt quá dung lượng quy định hiển thị mess: "File đã chọn quá lớn, kích thước tối đa 10MB"; (Chọn OK để quay về màn hình chọn ảnh để user chọn lại tấm khác)     - **Update 18/11/2024: Thanh scroll hình ảnh đã chụp/ upload show khi số hình >= 3 hình**  * : Chức năng ghim ghi chú nhắc nhở, sau khi chọn icon Pin * + Nhấn vào biểu tượng pinghi chú và Chọn Lưu  để ghim ghi chú. Button Pin chuyển thành Unpin  hoặc nhấn vào và chọn Lưu  để bỏ ghim. Button Unpin  chuyển thành Pin * (1) Sau khi pin ghi chú thì ở màn hình danh sách nhiệm vụ viếng thăm sẽ được ghim ghi chú như sau (Nội dung Ghi chú được Pin chạy chạy trong khung ghim)      * + (2) Đồng thời trong màn hình danh sách ghi chú, ghi chú cũng được ghim lên đầu tiên; Cho phép với mỗi loại ghi chú được ghim duy nhất 01 ghi chú nhắc nhở => Màn hình có thể hiển thị 2 cụm ghim: cụm ghim 1: ghi chú với loại ghi chú = Tồn kho; Cụm ghim 2:  Loại ghi chú = Điểm bán     - RedV1.0.1KHÔNG cho phép ghim 2 ghi chú cho cùng 1 Loại ghi chú, vd như ''Điểm bán'' . Case:       * Tạo ghi chú thứ 1 có loại ghi chú là "Điểm bán" và ghim ghi chú > lưu thành công       * Tạo ghi chú thứ 2 có loại ghi chú là "Điểm bán" → Chọn Ghim ghi chú → Ghi chú thứ 2 đè lên ghi chú thứ 1 đã ghim sau khi nhấn lưu   | * RedV1.0.1   Lưu ý:  Chỉ được tạo; xem/ Pin hoặc unpin ghi chú như đã mô tả ở trên  KHÔNG được edit ghi chú  - Pin từ màn hình tạo mới ghi chú - Pin từ màn hình xem ghi chú - Un pin từ màn hình Xem ghi chú - Un pin từ màn hình danh sách ghi chú - Un pin từ màn hình Viếng thăm/ Kiểm tra tồn kho (Khung ghi chú chạy chạy) | | --- |     Khi chọn back màn hình tạo ghi chú; hệ thống kiểm tra nếu đã có dữ liệu input → hiển thị popup warning  "Dữ liệu đã thay đổi và chưa được lưu, nếu thoát sẽ mất dữ liệu."   * "Đồng ý": KHÔNG Lưu dữ liệu và ra màn hình danh sách ghi chú; * "Hủy": tắt thông báo và vẫn ở màn hình ghi chú |

## Chức năng Viếng thăm lại

  

Màn hình Điểm bán đang viếng thăm:

Chọn để trở về màn hình danh sách Điểm bán

Màn hình Điểm bán sau khi đã viếng thăm thành công:

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | Datacolumns | Không |  | Hiển thị khi Điểm bán đã checkin và chưa checkout |
|  | Datacolumns | Không |  | Chọn button Đã hoàn thành / chọn "Back màn hình" để đến màn hình danh sách điểm bán.   * Hiển thị "Đã viếng thăm - và tổng thời gian check in → checkout (hh:mm:ss) của điểm bán" như hình  * Trường hợp viếng thăm nhiều lần thì hiển thị thời gian viếng thăm gần nhất |
|  | Button | Có | Không | Sau khi thực hiện checkout, nếu điểm bán viếng thăm lần đầu tiên trong ngày, sẽ tính là Viếng thăm  Kể từ các lần viếng thăm sau, sẽ tính là viếng thăm lại, hệ thống hiển thị button Viếng thăm lại như hình:  User click vào viếng thăm lại và thực hiện như quy trình viếng thăm điểm bán lần đầu. Xem [CÁC MÀN HÌNH VÀ MÔ TẢ](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-II.C%C3%81CM%C3%80NH%C3%8CNHV%C3%80M%C3%94T%E1%BA%A2)  Lúc này trên xem báo cáo lịch sử viếng thăm điểm bán có thể xem all các lần viếng thăm, báo cáo ghi nhận mỗi lần viếng thăm (checkin-checkout) là một record và ghi vào 1 line; viếng thăm nhiều lần thì hiển thị nhiều dòng trên báo cáo. |
|  |  |  |  | (1) Chọn "Rời điểm bán"  Xem [Checkout:](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Checkout:)  Màn hình danh sách điểm bán hiển thị ; nhiệm vụ đã thực hiện hiển thị check + time thực hiện (hh:mm)  (2) Chọn Viếng thăm lại [Chức năng Viếng thăm lại](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Ch%E1%BB%A9cn%C4%83ngVi%E1%BA%BFngth%C4%83ml%E1%BA%A1i)  (3) Sau đó thực hiện lại các nhiệm vụ đã thực hiện tại lần viếng thăm trước.  (4) Hoàn thành nhiệm vụ back đến màn hình "Nhiệm vụ viếng thăm" hiển thị double check hoàn thành và thời gian thực hiện khảo sát gần nhất (hh:mm) |
|  | | | | |
| Nội dung uodate | | | | |
| 1. Điều hướng vào màn hình tác vụ viếng thăm ĐB khi thay đổi tuyến thực tế; | Trường hợp điều chỉnh điểm bán trên tuyến thực tế/Định tuyến trên portal  Step 1. App: Màn hình "Viếng thăm" - show ĐB A có trong TTT  Step 2. Portal:    * Điểm bán trong tuyến: Xóa điểm bán khỏi TTT * Điểm bán ngoại tuyến:   + Thay đổi tần suất   + Thay đổi ngày active tuyến của điểm bán   Step 3. App: Không refresh màn hình "Viếng thăm" & khi nhấn "Viếng thăm" ĐB A  Step 4. App hiển thị thông báo: "Điểm bán @Điểm bán không còn nằm trong tuyến hôm nay, vui lòng kiểm tra lại!" → Không cho viếng thăm điểm bán A.→ Hiển thị button Trở lại → Nhấn Button back về màn hình Danh sách điểm bán + refresh màn hình danh sách điểm bán | | | |
|  | | | | |
| Update 24/12 Bổ sung Pre-condition: Viếng thăm lại  6. Pre-condition: Điểm bán có trong TTT & chưa viếng thăm/đã VT/ Đang VT  -Portal: Đổi nhóm nhiệm vụ theo tuyến A → nhóm nhiệm vụ theo tuyến B -Portal: Thêm/Bớt task trong nhóm nhiệm vụ theo tuyến ở màn hình "Nhóm nhiệm vụ"  -Portal: Thay đổi toggle "Bắt buộc" của task ở màn hình "Nhóm nhiệm vụ" | | Trường hợp | Điểm bán chưa viếng thăm | Điểm bán đang viếng thăm | Điểm bán đã viếng thăm | Viếng thăm lại | | --- | --- | --- | --- | --- | | 1. Không nhấn gen lại TTT trên Portal | Ko apply nhiệm vụ mới | Ko apply nhiệm vụ mới | Ko apply nhiệm vụ mới | Ko apply nhiệm vụ mới | | 2. Nhấn gen lại TTT trên Portal | Apply nhiệm vụ mới | giữ nhóm nhiệm vụ cũ | giữ nhóm nhiệm vụ cũ | giữ nhóm nhiệm vụ cũ | | 3. Xoá ĐB trong TTT đang có & nhấn gen lại TTT trên Portal | Apply nhiệm vụ mới | giữ nhóm nhiệm vụ cũ | giữ nhóm nhiệm vụ cũ | giữ nhóm nhiệm vụ cũ | | 4. Ngày mai (T+1) | thấy được nhóm nhiệm vụ theo tuyến mới | thấy được nhóm nhiệm vụ theo tuyến mới | thấy được nhóm nhiệm vụ theo tuyến mới | thấy được nhóm nhiệm vụ theo tuyến mới | | | | |
| RedV1.0.37.  Pre-condition: Đổi ngày active điểm bán | |  |  |  |  | | --- | --- | --- | --- | | Trường hợp Đổi ngày active điểm bán trên Portal của ngày hiện tại  => Khi thực hiện viếng thăm điểm bán hiển thị thông báo | Danh sách Điểm bán chưa viếng thăm | Chọn button Viếng thăm điểm bán | Viếng thăm lại => Chọn button Viếng thăm điểm bán | | 1. Điều chỉnh Chọn Ngày bắt đầu ở tương lai và không gen lại TT trên portal | hiển thị điểm bán khi filter bộ lọc ngoại tuyến | Thông báo: Điểm bán chưa có trong tuyến của bạn, vui lòng kiểm tra lại!  Chọn "Đồng ý" tắt thông báo và quay lại màn hình Viếng thăm; reload màn hình và điểm bán vừa chọn mất đi | lần 1 đã viếng thăm thành công → Lần 2 viếng thăm lại: Điểm bán chưa có trong tuyến của bạn, vui lòng kiểm tra lại!  Chọn "Đồng ý" tắt thông báo và quay lại màn hình Viếng thăm; reload màn hình và điểm bán vừa chọn mất đi | | 2. Chọn Ngày bắt đầu Lùi về quá khứ & nhấn gen lại TTT trên Portal | không thay đổi luồng cũ | không thay đổi luồng cũ | không thay đổi luồng cũ | | 3. Chọn Ngày bắt đầu ở tương lai & nhấn gen lại TTT trên Portal | KHÔNG hiển thị điểm bán khi filter bộ lọc ngoại tuyến | Thông báo: Điểm bán chưa có trong tuyến của bạn, vui lòng kiểm tra lại!  Chọn "Đồng ý" tắt thông báo và quay lại màn hình Viếng thăm; reload màn hình và điểm bán vừa chọn mất đi | lần 1 đã viếng thăm thành công → Lần 2 viếng thăm lại: Điểm bán chưa có trong tuyến của bạn, vui lòng kiểm tra lại!  Chọn "Đồng ý" tắt thông báo và quay lại màn hình Viếng thăm; reload màn hình và điểm bán vừa chọn mất đi | | 4. Xoá ĐB trong tuyến đang có & nhấn gen lại TTT trên Portal | không thay đổi luồng cũ | không thay đổi luồng cũ | không thay đổi luồng cũ | | 5. Ngày mai (T+1) | không thay đổi luồng cũ | không thay đổi luồng cũ | không thay đổi luồng cũ | | | | |

| Lưu ý:   * SUP login và chọn nhân viên sale; chọn tuyến sale => thì Tất cả dữ liệu sẽ được ghi nhận cho nhân viên Sale đã chọn. Hệ thống ghi lại thông tin người tạo dữ liệu * SUP chọn tuyến bán hàng của chính mình tại màn hình chọn nhân viên & chọn tuyến thì tất cả các dữ liệu sẽ ghi nhận cho Sup |
| --- |