|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6362Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6363 |
| Epic |  |
| Feature |  |
| Description | Khi thực hiện chuyển tuyến của điểm bán từ A sang B thành công => hệ thống kiểm tra và thực hiện update tất cả các dữ liệu CTTB/CTTL liên quan đến điểm bán được chuyển khỏi tuyến  Tác động đến người dùng trên Ứng dụng SM:   * NV mới thấy dữ liệu cũ và mới * NV cũ - trên tuyến cũ không thấy dữ liệu chương trình của điểm bán đã chuyển tuyến |
| Document version | RedV1.0.0  RedV1.1.0  Bổ sung US xử lý và wording chi tiết bên dưới    Bổ sung thêm migrate các tuyến đang hoạt động; chỉ xử lý cho điểm bán đang hoạt động. |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

# **Thông tin chung**

**Mục đích:** Tính năng này hỗ trợ người dùng Admin thực hiện chuyển một hoặc nhiều Điểm bán (ĐB) từ Tuyến bán hàng cũ (Tuyến A) sang Tuyến bán hàng mới (Tuyến B). Đồng thời, hệ thống đảm bảo toàn bộ dữ liệu lịch sử và hiện tại liên quan đến Chương trình Trưng bày (CTTB) và Chương trình Tích lũy (CTTL) của Điểm bán được chuyển đổi đồng bộ theo Tuyến mới, giúp dữ liệu báo cáo liền mạch và không ảnh hưởng đến quá trình viếng thăm, chấm điểm của Nhân viên bán hàng (SM).

**Thuật ngữ viết tắt:**

* **ĐB**: Điểm bán
* **CTTB / CTTL**: Chương trình Trưng bày / Chương trình Tích lũy.
* **TTT**: Tuyến thực tế
* **SM (Salesman)**: Nhân viên bán hàng / Giám sát bán hàng sử dụng Mobile App.
* **SM\_A**: Nhân viên thuộc Tuyến cũ (Tuyến A).
* **SM\_B**: Nhân viên thuộc Tuyến mới (Tuyến B).
* **APP QL:** Manager app cho cấp quản lý SS/ASM/RSM/SD đăng nhập

# **Tài liệu liên quan**

1/ Màn hình Tuyến bán hàng: [Link 1](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48431425) và [Link 2](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66526110)

Logic và quy tắc của điểm bán trên tuyến

**1.1 Tóm tắt logic tuyến:**

* **1 Nhân viên (Sale)** có thể quản lý **nhiều Tuyến**, thuộc **nhiều NPP** khác nhau.
* **1 Tuyến** chỉ thuộc **1 NPP**.
* **1 NPP** có thể có nhiều tuyến
* **1 Tuyến** có thể bao gồm **nhiều Điểm bán (ĐB)** và **nhiều Nhãn hàng** cùng lúc.

**1.2 Áp dụng trong phạm vi Cùng 1 NPP:**

* **Cùng 1 Nhân viên:** Không được phép có 2 tuyến bị trùng nhãn hàng.
  + *Ví dụ:* Sale A đã quản lý Tuyến 1 (Nhãn A, B) à Không được phép gán Nhãn A hoặc B vào Tuyến 2 của Sale A.
* **Khác Nhân viên:** Trong cùng 1 NPP; 2 nhân viên không được bán trùng nhãn hàng
  + Nếu Sale B đã quản lý Nhãn A, B và Sale A (thuộc tuyến khác trong cùng NPP) không được chọn lại Nhãn A, B.
  + **Message lỗi- Xem [HO][HT] Tuyến bán hàng (Ví dụ:** *"Nhãn hàng @Tên\_nhãn\_1, @Tên\_nhãn\_2 đã được gán trong các tuyến @Mã\_tuyến - Tên\_tuyến của nhân viên @Tên\_nhân\_viên. Vui lòng chọn nhãn hàng không trùng!")*
* ***Chặn chồng lấn thời gian:*** 
  + *Điều kiện chặn: Cùng 1 Điểm bán + Cùng 1 Nhãn hàng  + Cùng NPP à Không được trùng lặp thời gian hiệu lực giữa 2 Tuyến.*
  + *Ví dụ: Tuyến A gán ĐB X (EndDate = 31/12/2024) à Tuyến B gán ĐB X phải có StartDate >= 01/01/2025.*
* **Lưu ý:**
  + Nếu 1 Tuyến chọn cấu hình *"Tất cả nhãn hàng"*, Nhân viên phụ trách tuyến đó sẽ **bị chặn gán thêm** bất kỳ tuyến nào khác trong cùng NPP.
  + Nếu 1 Tuyến chọn cấu hình *"Tất cả nhãn hàng",* Sẽ không có tuyến nào trong NPP được gán nhãn hàng nữa ó NPP chỉ có 1 tuyến

**1.3 Quy tắc gán Điểm bán**

* **Thời gian:**

+ Bắt buộc nhập StartDate (Ngày bắt đầu)
+ Không bắt buộc nhập EndDate (Ngày kết thúc).
+ Có thể nhập linh hoạt các ngày ở Quá khứ, Hiện tại hoặc Tương lai cho cả StartDate và EndDate

* **Cho phép gán trùng Điểm bán** (1 ĐB thuộc nhiều Tuyến/Nhiều NPP) trong các trường hợp:

+ Khác nhãn hàng (Dù cùng hay khác NPP, cùng hay khác Nhân viên).
+ Tuyến chưa có Nhân viên phụ trách.

* **Chặn chồng lấn thời gian:** Cùng 1 Điểm bán + Cùng 1 Nhãn hàng  + Cùng NPP (như ví dụ trên).

**1.4 Quy tắc Xóa Điểm bán khỏi Tuyến**

Việc xóa cứng ĐB khỏi lưới Tuyến bán hàng bị ràng buộc bởi 2 điều kiện (kiểm tra theo thứ tự):

* **Ràng buộc 1 (Dữ liệu CTTB/CTTL):** Chặn xóa nếu ĐB đang có Phiếu đăng ký tham gia CTTB/CTTL ở trạng thái "Đã duyệt" hoặc "Chờ duyệt".

+ *Lý do:* Tránh mồ côi dữ liệu (Migrate data) không có Tuyến map với CTTB/CTTL.
+ *Popup Message lỗi:*
  - ***"Điểm bán [Mã ĐB] đang có chương trình trưng bày [Mã CTTB 1, Mã CTTB 2] hiệu lực. Bạn không được xóa trực tiếp. Vui lòng sử dụng tính năng Ngày kết thúc để ngưng hoạt động điểm bán trên tuyến."***
  - ***"Điểm bán [Mã ĐB] đang có chương trình tích lũy [Mã CTTL 1, Mã CTTL 2] hiệu lực. Bạn không được xóa trực tiếp. Vui lòng sử dụng tính năng Ngày kết thúc để ngưng hoạt động điểm bán trên tuyến."***
  - *Chọn dấu "x" để đóng popup.*

* **Ràng buộc 2 (Dữ liệu Viếng thăm):** Chặn xóa nếu ĐB **có dữ liệu viếng thăm trong ngày hôm nay**.

+ *Message lỗi:* *"Điểm bán @Mã - @Tên trong tuyến đã có viếng thăm. Không thể xóa điểm bán ra khỏi tuyến."*

* **Luồng cho phép Xóa:** Nếu thỏa cả 2 điều kiện trên (kể cả có viếng thăm trong quá khứ). Hệ thống cho phép xóa khỏi danh sách mà không cần update EndDate.
* **Lưu vết (Log)** lịch sử xóa điểm bán trên tuyến.

2/ Màn hình trưng bày/tích lũy:

| Môi trường | CTTB | CTTL | Nội dung thay đổi |
| --- | --- | --- | --- |
| Portal | [Link CTTB](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028712) | [Link CTTL](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53046259) | * **Phiếu đăng ký tham gia chương trình**: Chỉ cập nhật mã Tuyến mới trên phiếu * **Tiến trình trưng bày / Tích lũy**:    + CTTB: Chỉ cập nhật mã Tuyến mới trên Tiến trình theo Kỳ và Theo giai đoạn trưng bày. Những dữ liệu khác không thay đổi nhằm truy vết dữ liệu. Ví dụ Người chụp, thời gian chụp; hình ảnh;...   + CTTL: Chỉ cập nhật mã Tuyến mới trên phiếu tiến trình theo giai đoạn tích lũy * **Phiếu trả thưởng**: Chỉ cập nhật mã Tuyến mới trên phiếu trả thưởng đã có. |
| APP SM | [SM-APP] Chương trình trưng bày  [SM-APP] Báo cáo chương trình trưng bày | [SM-APP] Chương trình tích lũy  [SM-APP] Báo cáo chương trình tích lũy | Hiển thị trên app |
| APP QL | [Manager\_App] Xét duyệt đăng ký CTTB  [Manager\_App] ENHANCE Chức năng Xét duyệt đăng ký CTTB -> Chương trình trưng bày | [Manager\_App] Xét duyệt đăng ký CTTL  [Manager\_App] ENHANCE Chức năng Xét duyệt đăng ký CTTL - Chương trình tích lũy | Hiển thị trên app |

Điều kiện

# **Điều kiện kích hoạt Migrate**

RedV1.1.0 Quá trình Migrate chỉ diễn ra khi thỏa mãn **ĐỒNG THỜI** các điều kiện của đối tượng (ĐB X; Tuyến A; EndDate tuyến A; Tuyến B; Nhân viên tuyến B):

1. EndDate (Tuyến cũ) <= Ngày hiện tại.
   1. **AND Tuyến cũ Đang hoạt động**
2. StartDate (Tuyến mới) >= [EndDate (Tuyến cũ) + 1].*(Tức là StartDate (Tuyến mới) > EndDate (Tuyến cũ) )*
   1. **STORE Đang hoạt động**
   2. **AND EndDate (Tuyến mới) >= Ngày hiện tại.** (Không có ngày EndDate hiểu là hoạt động đến vô cùng)
3. Tuyến mới **đã được gán Nhân viên**.

# **Trigger xử lý**

1. **Trigger 1 (On Save):** Kích hoạt ngay khi Lưu thành công (Tab Gán tuyến) nếu các mốc thời gian thỏa mãn trong Quá khứ/Hiện tại
2. **Trigger 2 (Cronjob):** Manual click button gen TTT / Cronjob quét và xử lý vào rạng sáng của StartDate mới, sau khi gen tuyến thực tế thành công.

* + Khi người dùng thao tác chuyển điểm bán qua tuyến mới và nhấn gen lại TTT => Sử dụng Trigger-based Event (Xử lý ngay lập tức thông qua Service) hoặc đưa vào hàng đợi xử lý sau ít phút.
    - Màn hình tuyến:
  + Ngày T+1: Cronjob sau khi gen TTT
    - Màn hình TTT:

## **Luồng Sequencediagram xử lý dữ liệu**

### **Bảng Đặc Tả Luồng Xử Lý Chức Năng Chuyển Tuyến Điểm Bán**

RedV1.1.0  BA update Bước 4: Lock khi chạy trigger ra list chương trình thỏa điều kiện. Unlock tại bước 10 khi chạy job thành công.

| STT | Bước xử lý | Tác nhân | Mô tả chi tiết | Quy tắc & Cảnh báo (Validation/Note) |
| --- | --- | --- | --- | --- |
| **1** | **Thiết lập chuyển tuyến** | Admin | Chọn ĐB X, cập nhật **EndDate tại Tuyến A**. Thêm ĐB X vào **Tuyến B** với **StartDate** mới.   1. Nhấn Lưu trên Tab "Gán tuyến" 2. Nhấn "Gen lại TTT". 3. Cronjob ngày T+1 | **Validate:**    * EndDate (Tuyến cũ) <= Ngày hiện tại. * StartDate (Tuyến B) ≥ EndDate (Tuyến A) + 1. * Tuyến B phải gán nhân viên vào tuyến |
| **2** | **Gửi yêu cầu (API)** | Web System | Gửi Request API kèm thông tin: Mã ĐB X, Tuyến A (EndDate), Tuyến B (StartDate, NV phụ trách). | API đảm bảo nhận đủ bộ Key chuyển tuyến. |
| **3** | **Cập nhật Master Data** | RouteService | Cập nhật ngày kết thúc hiệu lực của ĐB X trên Tuyến A trong bảng Master Data |  |
| ~~**4**~~ | ~~**Khóa dữ liệu tạm thời**~~ | ~~RouteService~~ | ~~**LOCK** toàn bộ dữ liệu CTTB/CTTL của ĐB X tại Tuyến A để chuẩn bị Migrate data~~ | ~~Chặn NV Tuyến A chấm ảnh hoặc thao tác lên ĐB X trong lúc đang chuyển đổi.~~  ~~*Msg khi cần "Dữ liệu đang được xử lý"*~~ |
| **5** | **Xác nhận tiếp nhận** | Hệ thống | Phản hồi thông báo: "Đã tiếp nhận yêu cầu chuyển tuyến thành công" cho người dùng. | Trên giao diện theo logi xử lý của tuyến hiện tại đang có. |
| **6** | **Xử lý sự kiện (Trigger)** | DB / Job | Hệ thống bắt sự kiện theo 2 cơ chế:  - **Trigger 1 (On Save):**    1. Nhấn Lưu trên Tab "Gán tuyến"   - **Trigger 2 (Job):**    1. Nhấn "Gen lại TTT". 2. Cronjob ngày T+1 | Đảm bảo tính liên tục của dữ liệu theo thời gian thực hoặc theo lịch hẹn. |
| **7** | **Kiểm tra điều kiện Migrate** | Hệ thống | Quét tất cả CTTB/CTTL của ĐB X thỏa mãn điều kiện kích hoạt  RedV1.1.0  Khóa dữ liệu tạm thời: LOCK toàn bộ dữ liệu CTTB/CTTL của ĐB X tại Tuyến A để chuẩn bị Migrate data   * Chặn đăng ký chương trình trưng bày; CTTL * Chặn chụp hình CTTB; * Chặn duyệt đăng ký CTTB/ CTTL: APP QL & PORTAL * Chặn chấm hình trưng bày trên Tiến trình trưng bày   Msg thông báo trên app: "Hệ thống đang bận, vui lòng thử lại sau"  Portal: "Hệ thống đang xử lý dữ liệu. Vui lòng thử lại sau ít phút." |  |
| **8** | Danh sách thỏa điều kiện | Hệ thống | Danh sách CTTB/CTTL thỏa điều kiện |  |
| **9** | **Thực hiện Migrate Data** | DB | Cập nhật trực tiếp (Update) mã Tuyến A thành Tuyến B:   * Với từng chương trình tìm được, hệ thống tiến hành cập nhật trực tiếp mã Tuyến từ **A sang B** cho các thực thể sau:  * + **Phiếu đăng ký tham gia chương trình**: Đảm bảo thông tin đăng ký gắn liền với Tuyến mới.   + **Tiến trình trưng bày / Tích lũy**: Áp dụng cho toàn bộ các kỳ/giai đoạn (bao gồm cả các kỳ đã qua trong quá khứ và các kỳ hiện tại/tương lai).   + **Phiếu trả thưởng**: Tất cả các phiếu trả thưởng đã được tạo lập từ trước đến nay cho Điểm bán X. | Toàn bộ "di sản" của ĐB X được dời nhà từ Tuyến A sang Tuyến B. |
| **10** | **Cập nhật trạng thái Event** | DB | * Cập nhật trạng thái xử lý = "Success". Lưu log log lịch sử di cư để đối soát.   RedV1.1.0   * Trường hợp có lỗi xảy ra (Chỉ cần phát hiện có bất kỳ lỗi nào từ bất kỳ tuyến nào dẫn đến không migrate data được → thì rollback): Hệ thống phải **Rollback** mã Tuyến về lại Tuyến A và mở khóa dữ liệu để đảm bảo ĐB không bị "mất tích" khỏi cả 2 tuyến. * UNLOCK sau khi thành công/ sau khi rollback.   + *Dev tham khảo bổ sung cơ chế retry job từ 1→ 3 lần nếu có lỗi xảy ra* | Dùng để truy vết nếu có khiếu nại về tiền thưởng/chấm ảnh. |
| **11** | **Đồng bộ App (Tuyến B)** | SM\_B (Mobile) | Dữ liệu Tuyến B được đồng bộ xuống App của nhân viên mới (NV Tuyến B). | **Kết quả:** NV mới thấy ĐB X, thấy đầy đủ lịch sử tham gia CTTB từ đầu, tiếp tục chấm ảnh giai đoạn dở dang.  Case Đồng bộ dữ liệu muộn sau khi đã chuyển tuyến thành công.   * Dev tham khảo bổ sung cơ chế retry job từ 1→ 3 lần nếu có lỗi xảy ra   RedV1.1.0  Bổ sung US (Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6437) xử lý cho chăm sóc khác hàng trên APP SM   * Check điểm bán còn trên tuyến bán hàng (dựa vào ngày Endate của điểm bán <= Ngày hiện tại)/ Hoặc trường hợp remove điểm bán ra khỏi tuyến thì check ID điểm bán có còn tồn tại trên tuyến/ Check Trạng thái điểm bán = Hoạt động * Nếu không còn trên tuyến hoặc trạng thái điểm bán KHÁC "Hoạt động" => lúc Submit thông tin / pull to refresh/ action bất kỳ => Hiển thị thông báo: "Điểm bán không còn tồn tại trên tuyến, vui lòng kiểm tra lại!" |
| **12** | Dữ liệu trên tuyến B | SM\_B (Mobile) | Trả về dữ liệu Tuyến B đầy đủ: - Thấy Điểm bán X xuất hiện trên Tuyến viếng thăm - Xem Chi tiết trưng bày/ tích lũy của điểm bán trên web: Thấy toàn bộ lịch sử tham gia CTTB từ đầu - Tác vụ Viếng thăm: Tiếp tục chụp hình/chấm điểm cho kỳ dang dở - Báo cáo: Thấy dữ liệu liền mạch từ quá khứ đến hiện tại |  |
| **13** | **Đồng bộ App (Tuyến A)** | SM\_A (Mobile) | Dữ liệu Tuyến A được đồng bộ lại. | **Kết quả:** NV Tuyến A không còn thấy ĐB X, Báo cáo tại Tuyến A ẩn hoàn toàn dữ liệu ĐB X (do đã chuyển sang Tuyến B). |
| **14** | Dữ liệu trên tuyến A | SM\_A (Mobile) | Trả về dữ liệu Tuyến A mới: - KHÔNG thấy Điểm bán X trên tuyến viếng thăm nữa - Báo cáo: ẨN HOÀN TOÀN dữ liệu của Điểm bán X  (Do toàn bộ bản ghi đã UPDATE sang mã Tuyến B) |  |

#### **Đối với luồng IMPORT trên tuyến bán hàng**

* RedV1.1.0 Khi import file excel để chuyển điểm bán trên tuyến bán hàng hàng loạt (thì file Import validate tối đa 10.000 dòng), hệ thống sẽ xử lý migrate tuần tự hoặc chia lô xử lý (Tùy theo performance Đảm bảo không xảy ra lỗi API Timeout)

### **APP QL: Theo cây saleforce sẽ thấy**

1. Đối với Quản lý của Tuyến Cũ (Ví dụ: Sup A/ASM vùng A - Quản lý của SM\_A)

* **Ảnh hưởng trực tiếp:** Quản lý cấp trên của SM\_A sẽ **không còn nhìn thấy** Điểm bán X và toàn bộ lịch sử CTTB/CTTL của điểm bán này trong các báo cáo của SM\_A nữa.
* **Nguyên nhân:** Do hệ thống đã thực hiện cập nhật (UPDATE) trực tiếp mã Tuyến từ A sang B cho toàn bộ dữ liệu lịch sử (Phiếu đăng ký, tiến trình, phiếu trả thưởng). Khi App QL truy vấn dữ liệu của SM\_A (thuộc Tuyến A), hệ thống sẽ không tìm thấy các bản ghi của Điểm bán X nữa.

2. Đối với Quản lý của Tuyến Mới (Ví dụ: Sup B/ ASM khu vực B - Quản lý của SM\_B)

* **Ảnh hưởng trực tiếp:** Quản lý cấp trên của SM\_B sẽ **nhìn thấy thêm** Điểm bán X xuất hiện trong danh sách quản lý của cấp dưới mình (SM\_B).
* **Hiển thị:** Có thể xem được toàn bộ tiến trình hiện tại, chụp hình chấm điểm kỳ này, cũng như xem ngược lại toàn bộ lịch sử tham gia CTTB/CTTL từ trước đến nay của Điểm bán X dưới danh nghĩa dữ liệu của SM\_B.
* Quản lý Tuyến Mới dễ dàng theo dõi mạch lịch sử để đưa ra các quyết định phê duyệt hoặc đánh giá năng lực của Điểm bán X mà không bị đứt gãy thông tin.

3. Đối với Quản lý Cấp Cao Chung (Ví dụ: RSM/ SD - Quản lý cả khu vực A và khu vực B/ Giám đốc toàn quốc)

* Dữ liệu chỉ có sự dịch chuyển từ nhánh của SM\_A sang nhánh của SM\_B trên cây sơ đồ tổ chức (Salesforce).
* **Ảnh hưởng trực tiếp:** Tổng dữ liệu toàn quốc hoặc theo vùng của RSM **không bị thay đổi** (không bị mất đi hay nhân đôi).

## BẢNG MA TRẬN KỊCH BẢN: QUẢN LÝ TUYẾN & DI CƯ DỮ LIỆU CTTB (DMS90)

  

| Case | Loại tình huống | NPP (Tuyến mới) | Nhãn hàng | Hành động trên Tuyến cũ | Điều kiện tại Tuyến mới | Kết quả Mirage Data (Update mã Tuyến) | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **UC-01** | **Chuyển ĐB - Trùng Nhãn** | Cùng NPP | Trùng nhãn | Nhập **EndDate** ≤ Today | Có NV + StartDate ≥ EndDate + 1 | **YES.** Chuyển toàn bộ dữ liệu CTTB/CTTL từ Tuyến cũ →  Tuyến mới. |  |
| **UC-02** | **Chuyển ĐB - Khác Nhãn** | Cùng/Khác NPP | Khác nhãn | Nhập **EndDate** ≤ Today | Có NV + StartDate ≥ EndDate + 1 | **YES.** Hợp nhất toàn bộ dữ liệu CTTB/CTTL cũ của ĐB về Tuyến mới. | Vận hành chấp nhận NV Tuyến mới thấy CTTB khác nhãn để bảo toàn quyền lợi khách hàng.  Nếu có nhiều Tuyến cũ cùng tồn tại: ĐB 1 từng có lịch sử ở Tuyến 1, Tuyến 2, Tuyến 3 (đã enddate). Nếu Tuyến 4 mới tạo, hệ thống update hàng loạt phiếu CTTB của các tuyến cũ cho Tuyến 4." |
| **UC-03** | **Chuyển ĐB - Khác NPP** | Khác NPP | Trùng nhãn | Nhập **EndDate** ≤ Today | Có NV + StartDate ≥ EndDate + 1 | **YES.** (Tương tự UC-02) | Hệ thống tự bổ sung NPP mới vào đối tượng áp dụng CTTB nếu cần. |
| **UC-04** | **Thêm điểm bán vào tuyến khác (Multi-route)** | Cùng/Khác NPP | Khác nhãn | **KHÔNG** nhập EndDate ở tuyến cũ | Tự do  (Ngày startdate ở quá khứ/ hiện tại/ tương lai) | **NO.** Không có di cư dữ liệu. | ĐB tồn tại song song trên 2 tuyến. Mỗi tuyến chạy CTTB độc lập. |
| **UC-05** | **Thiếu Nhân viên** | Bất kỳ | Bất kỳ | Bất kỳ | **CHƯA** gán Nhân viên | **NO (Tạm dừng).** Đợi cho đến khi có nhân viên mới xử lý. | Không có NV thì không có người chụp ảnh, hệ thống không cho migrate mã Tuyến. |
| **UC-06** | **Xóa điểm bán** | Bất kỳ | Bất kỳ | Click **Xóa (Remove)** | ĐB có CTTB đang Active | **REJECT (Chặn).** Báo lỗi yêu cầu nhập EndDate. | Tránh "mồ côi" dữ liệu CTTB khi add ĐB vào tuyến khác sau này.  (US xử lý Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6379 ) |
| **UC-07** | **Xóa điểm bán** | Bất kỳ | Bất kỳ | Click **Xóa (Remove)** | Hôm nay không Visit + không CTTB | **YES.** Cho phép xóa sạch khỏi danh sách. | Chỉ dành cho ĐB rác hoặc gán nhầm. |
| **UC-08** | **Ngày tương lai đến tương lai** | Bất kỳ | Bất kỳ | EndDate (Tương lai) | StartDate > Today | **WAIT.** Ghi nhận yêu cầu, đợi Cronjob xử lý vào đúng rạng sáng ngày StartDate. | Đảm bảo tuyến cũ vẫn làm việc bình thường đến ngày kết thúc. |
| **UC-09** | **Ngày quá khứ đến quá khứ (Backdate)** | Bất kỳ | Bất kỳ | EndDate < Today | StartDate (Tuyến mới) > EndDate (tuyến cũ)  **AND**  StartDate (Tuyến mới)< Ngày hiện tại  **AND**  EndDate (Tuyến mới) ≥ Ngày hiện tại | **YES.** Ngay lập tức chạy Trigger 1 → Hệ thống quét dữ liệu từ ngày StartDate quá khứ đến nay để update mã Tuyến mới. | Ví dụ:  *Data:* Hôm nay là 27/05. User cấu hình Tuyến cũ EndDate = 15/05, Tuyến mới StartDate = 16/05  *Hành vi:* Ngay khi bấm "Lưu" - Tab "Gán tuyến", hệ thống kiểm tra và kích hoạt Trigger 1. Cập nhật lại toàn bộ kết quả CTTB/CTTL từ ngày 16/05 đến 27/05 sang Tuyến mới. |
| **UC-10** | **RedV1.1.0**  **Ngày quá khứ đến tương lai** | Bất kỳ | Bất kỳ | EndDate < Today | StartDate > Today | **WAIT.** Ghi nhận yêu cầu, đợi Cronjob xử lý vào đúng rạng sáng ngày StartDate. | Ví dụ:  *Data:* Hôm nay là 27/05. User cấu hình Tuyến cũ EndDate = 15/05, Tuyến mới StartDate = 28/05.  *Hành vi:* Ghi nhận yêu cầu, đợi Cronjob xử lý vào đúng rạng sáng ngày StartDate 28/05 sang Tuyến mới. |

*Các case rủi ro có thể xảy ra sau khi migrate data - các case đã check và vận hành bypass như sau:*

1. *ĐK của CTTB1 chỉ áp dụng cho các đối tượng thuộc NPP1 nhưng khi chuyển ĐB 1 qua NPP2 thì bản chất nhân viên trên tuyến 4 không thể thấy và đăng ký/ chụp hình CTTB 1 được vì Logic hiện tại "Chỉ những điểm bán thỏa điều kiện của CTTB mới có thể đăng ký và thực hiện"*
   1. *Bypass và vẫn cho thực hiện tiếp chương trình với những phiếu đăng ký đã duyệt. Còn chưa duyệt thì check validate tại action duyệt để chặn và bắt buộc đăng ký lại.*
2. *Nếu Điểm bán tồn tại và đã được endDate trên nhiều tuyến. Khi add điểm bán vào tuyến mới thỏa thành công (Thỏa điều kiện migrate data)* 
   1. *ĐB 1 từng có lịch sử ở Tuyến 1, Tuyến 2, Tuyến 3 (đã enddate). Nếu Tuyến 4 mới tạo, hệ thống update hàng loạt phiếu CTTB/CTTL của các tuyến cũ cho Tuyến 4.*
3. *Một số case khác sẽ cập nhật ở dưới cmt để theo dõi thêm.*