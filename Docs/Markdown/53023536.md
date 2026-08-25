|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Mô tả chức năng thực hiện khảo sát trên app sale man |
| Document version | RedV1.0.0  RedV1.0.2 25/12/2024   * Bổ sung trường hợp Task khảo sát = bắt buộc; Ko có CTKS nào * **Điều kiện hiển thị: Hiển thị tất cả các CTKS còn hiệu lực**   **RedV1.0.3** 26/12/2024   * Confirm trước khi nhấn "Hoàn tất" bài khảo sát * Tách doc Viếng thăm chăm sóc   31/12/2024   * Bổ sung higlight đỏ option Khác ko nhập lý do * Nhập ít hơn giá trị tối thiểu   6/1/2024   * Ra màn hình danh sách hiển thị pop-up Thông báo "Thành công" |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

**I. THỰC HIỆN KHẢO SÁT**

**1.1 Mục đích:**

Mục đích thực hiện khảo sát  dựa theo từng đối tượng đã được cài đặt trên portal, trả lời các câu hỏi bắt buộc và không bắt buộc; hoàn thành các bài khảo sát và xem báo cáo thống kê thực hiện khảo sát trên portal

Nhiệm vụ khảo sát chỉ thực hiện ở 2 role Saleman và Sup

**1.2 Mô tả**

B1. Login app saleman và chấm công đầu ngày

B2. Thực hiện viếng thăm điểm bán Hoặc vào mục Khác → chăm sóc điểm bán để thực hiện khảo sát

B3. Chọn bài khảo sát và trả lời câu hỏi

B4. Chọn "Hoàn tất" để hoàn thành bài khảo sát

# Quy tắc bắt buộc khi thực hiện khảo sát trên APP

Lưu ý

1/ Khảo sát dành cho nhân viên bắt buộc phải chấm công đầu ngày mới thực hiện khảo sát [SM-APP] Chấm công trên Salesman App

2/ Khảo sát sau khi hoàn thành không được phép chỉnh sửa.

3/ [Quy tắc bắt buộc khi thực hiện khảo sát trên APP](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Quyt%E1%BA%AFcb%E1%BA%AFtbu%E1%BB%99ckhith%E1%BB%B1chi%E1%BB%87nkh%E1%BA%A3os%C3%A1ttr%C3%AAnAPP)

| Level | Task khảo sát | Câu hỏi khảo sát | Nội dung bắt buộc khi thực hiện khảo sát trên APP |
| --- | --- | --- | --- |
| 1 | Bắt buộc | Không bắt buộc | Nhiệm vụ khảo sát trên app hiển thị (\*) bắt buộc  Chỉ cần làm 1 bài khảo sát → Done task |
|  | Bắt buộc | Có m chương trình khảo sát bắt buộc, n chương trình khảo sát không bắt buộc | Nhiệm vụ khảo sát trên app hiển thị (\*) bắt buộc  Bắt buộc phải hoàn thành m chương trình khảo sát bắt buộc trước khi checkout |
|  | KHÔNG bắt buộc | KHÔNG bắt buộc checkin  KHÔNG có chương trình khảo sát nào bắt buộc  KHÔNG có câu hỏi khảo sát bắt buộc | FLow như cũ  (KHÔNG bắt buộc thực hiện khảo sát; không ràng bất kì điều kiện khảo sát nào) |
| 2 | KHÔNG bắt buộc | Chương trình khảo sát có bắt buộc checkin  (Cài đặt Bắt buộc checkin trên header của bài khảo sát, chỉ hiển thị khi Đối tượng khảo sát = Điểm bán, đối tượng khảo sát là Nhân viên thì sẽ không hiển thị checkbox này) | Bắt buộc phải hoàn thành xong bước checkin mới có thể thực hiện khảo sát   * + Trường hợp nhân viên chọn Khảo sát ở mục Viếng thăm → Điểm bán → Nhiệm vụ khảo sát thì ở bước này đã yêu cầu checkin rồi nên sẽ không kiểm tra checkin nữa.   + Trường hợp nhân viên chọn khảo sát ở các mục "Khác → Điểm bán → Chăm Sóc" thì bắt buộc phải checkin mới thực hiện khảo sát.     - CTKS có bắt buộc sẽ hiển thị dấu hiệu nhận diện "Bắt buộc checkin"   **RedV1.0.3 Tách doc "Viếng thăm chăm sóc" -**   * Trường hợp nhân viên chọn khảo sát ở các mục "Khác → Điểm bán → Chăm Sóc" thì vẫn được thực hiện khảo sát; (Bắt buộc viếng thăm chăm sóc - thực hiện ở US sau) |
| 3 | KHÔNG bắt buộc | Chương trình khảo sát có bắt buộc thực hiện   * Cài đặt Bắt buộc trong list Điểm bán khảo sát (chỉ áp dụng cho trường hợp đối tượng khảo sát = Điểm bán và điều kiện áp dụng = Điểm bán) | * **Hệ thống auto bật task khảo sát thành bắt buộc → Nhiệm vụ khảo sát trên app hiển thị (\*) bắt buộc** * Màn hình danh sách khảo sát hiển thị dấu hiệu nhận diện CTKS bắt buộc "Bắt buộc thực hiện" → Người dùng bắt buộc phải hoàn thành ít nhất 01 bài khảo sát mới cho phép checkout   **→ Cài đặt khảo sát tối đa 3 lần thực hiện; thực hiện thực tế >= 3 lần**   * **Portal- Auto bật task khảo sát bắt buộc thành Không bắt buộc** * **App - Trên màn hình danh sách khảo sát, CTKS hiển thị icon "Hoàn thành"** * **App - Màn hình viếng thăm điểm bán Tắt hiển thị (\*) bắt buộc khảo sát** |
| 4 | KHÔNG bắt buộc | Chương trình khảo sát có cài đặt "bắt buộc" trả lời câu hỏi khảo sát   * Danh sách các câu hỏi của chương trình khảo sát có câu hỏi "bắt buộc" | → Khi chọn nhiệm vụ khảo sát → màn hình hiển thị danh sách các chương trình khảo sát, Khi chọn thực hiện khảo sát cho CTKS có câu hỏi bắt buộc→ Người dùng bắt buộc phải trả lời các câu hỏi khảo sát bắt buộc thì mới cho submit;     * Cài đặt khảo sát tối đa 3 lần thực hiện; thực hiện thực tế >= 3 lần →  Trên màn hình danh sách khảo sát, CTKS hiển thị icon "Hoàn thành" |
| 5 | RedV1.0.2Bắt buộc | KHÔNG CÓ CTKS | Trên màn hình Nhiệm vụ viếng thăm sẽ ẩn cái sao đỏ bắt buộc (\*). |

# **Các màn hình tổng quan:**

## Trường hợp đối tượng khảo sát = Điểm bán

(theo [Đối tượng khảo sát = Điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-%C4%90%E1%BB%91it%C6%B0%E1%BB%A3ngkh%E1%BA%A3os%C3%A1t%C4%91i%E1%BB%83mb%C3%A1n%C4%90%E1%BB%91it%C6%B0%E1%BB%A3ngkh%E1%BA%A3os%C3%A1t=%C4%90i%E1%BB%83mb%C3%A1n))

**Cách 1:** Tại màn hình viếng thăm điểm bán → Chọn thực hiện chức năng "Khảo sát"

* Bắt buộc phải thực hiện Viếng thăm điểm bán trước khi thực hiện khảo sát

Cách 2: Tại màn hình Khác → Chọn Điểm bán → Chăm sóc điểm bán → Chọn nhiệm vụ "Khảo sát"

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| **Chỉ màn hình Nhiệm vụ viếng thăm mới hiển thị (\*) bắt buộc Khi Task Khảo sát = bắt buộc**  **Màn hình KHÁC sẽ không có hiển thị dấu sao đỏ** | | | | |
| Khảo sát | Label | Có | Có  khi Chương trình khảo sát có bắt buộc thực hiện tại điểm bán  hoặc khi cài đặt Task Khảo sát = bắt buộc | **Icon: Hiển thị icon chương trình khảo sát, lấy từ Field "Ảnh" trên  = Khảo sát**  **Khảo sát: Tên nhiệm vụ**  => Click chọn nhiệm vụ "Khảo sát" hiển thị màn hình danh sách khảo sát |
|  | | | | |
| Tìm kiếm | Textsearch | Có | Không | Placeholder: Nhập tên, mã khảo sát  Cho phép người dùng nhập từ khóa "Tên khảo sát", "Mã khảo sát" để tìm kiếm các chương trình khảo sát đang active; sau khi nhập từ khóa → chọn Nhập trên keyboard để thực hiện tìm kiếm;  Hiển thị: Hệ thống tìm kiếm và hiển thị danh sách các chương trình khảo sát đang active thỏa điều kiện mà người dùng đã nhập |
| Chọn bộ khảo sát bạn muốn thực hiện | Text header | Không |  |  |
| * **RedV1.0.2 Điều kiện hiển thị: Hiển thị tất cả các CTKS còn hiệu lực** | | | | |
| : Icon mặc định |  |  |  |  |
| Tiêu đề khảo sát | Datacolumns | Không |  | Hiển thị tiêu đề chương trình khảo sát đã cài đặt có đối tượng áp dụng = điểm bán & điểm bán thỏa điều kiện áp dụng của chương trình khảo sát (Thuộc Vùng/ Nhân viên/ Tuyến/ Điểm bán" |
| Số lần bắt buộc khảo sát | Datacolumns | Không |  | Hiển thị field "Số lần khảo sát" đã cài đặt trên portal theo mã khảo sát [Tab Thông tin cơ bản: Thêm mới khảo sát](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-TabTh%C3%B4ngtinc%C6%A1b%E1%BA%A3n:Th%C3%AAmm%E1%BB%9Bikh%E1%BA%A3os%C3%A1tT%E1%BA%A1om%E1%BB%9Bikh%E1%BA%A3os%C3%A1t) |
| Số lần đã khảo sát | Number | Không |  | Hệ thống đếm và hiển thị số lần thực hiện khảo sát thực tế của nhân viên tại điểm bán cho chương trình khảo sát |
|  | Tag | Không |  | Dấu hiệu nhận diện chương trình khảo sát bắt buộc thực hiện khi cài đặt trên portal (đối tượng khảo sát = Điểm bán và điều kiện áp dụng = Điểm bán) => điểm bán bắt buộc thực hiện [Điều kiện áp dụng = Điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-%C4%90i%E1%BB%81uki%E1%BB%87n%C3%A1pd%E1%BB%A5ng=%C4%90i%E1%BB%83mb%C3%A1n)   * Hệ thống auto bật task khảo sát thành bắt buộc → Nhiệm vụ khảo sát trên app hiển thị (\*) bắt buộc; (Màn hình Chăm sóc điểm bán không hiển thị bắt buộc (\*))  * *Trường hợp chưa thực hiện khảo sát bắt buộc → Khi checkout điểm bán hiển thị mess thông báo: "Bạn chưa thực hiện khảo sát bắt buộc!"; chọn Đồng ý để tắt popup và quay về màn hình viếng thăm điểm bán để thực hiện khảo sát.* |
|  | Tag | Không |  | Dấu hiệu nhận diện khi chương trình khảo sát bắt buộc phải checkin trước khi thực hiện khảo sát, cài đặt [Đối tượng khảo sát = Điểm bán](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-%C4%90%E1%BB%91it%C6%B0%E1%BB%A3ngkh%E1%BA%A3os%C3%A1t%C4%91i%E1%BB%83mb%C3%A1n%C4%90%E1%BB%91it%C6%B0%E1%BB%A3ngkh%E1%BA%A3os%C3%A1t=%C4%90i%E1%BB%83mb%C3%A1n) |
| Chăm sóc điểm bán → Chọn nhiệm vụ "Khảo sát"       Nếu trên portal cài đặt "Bắt buộc check in điểm bán" thì khi chọn chức năng "Khảo sát" tại đây (Khác → Điểm bán → Chọn điểm bán → Chăm sóc điểm bán → Chọn nhiệm vụ = "Khảo sát")   * (1) Trên màn hình danh sách khảo sát hiển thị dấu hiệu nhận diện bắt buộc checkin * (2) Click vào cụm thông tin khảo sát để thực hiện khảo sát * (3) Hiển thị màn hình Thực hiện checkin điểm bán theo chức năng check in điểm bán đã mô tả     (lưu ý: Header checkin là "Bắt đầu khảo sát")   * Bắt buộc phải hoàn thành xong bước checkin mới có thể thực hiện khảo sát   + ***Trường hợp nhân viên chọn Khảo sát ở mục Viếng thăm → Điểm bán → Nhiệm vụ khảo sát thì ở bước này đã yêu cầu checkin rồi nên sẽ không kiểm tra checkin nữa.***   + ***Trường hợp nhân viên chọn khảo sát ở các mục "Khác → Điểm bán → Chăm Sóc" thì bắt buộc phải checkin mới thực hiện khảo sát.*** | | | | |

## Trường hợp đối tượng khảo sát = nhân viên

(Theo nội dung [Đối tượng khảo sát = Nhân viên](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-%C4%90%E1%BB%91it%C6%B0%E1%BB%A3ngkh%E1%BA%A3os%C3%A1t=Nh%C3%A2nvi%C3%AAn%C4%90%E1%BB%91it%C6%B0%E1%BB%A3ngkh%E1%BA%A3os%C3%A1tnh%C3%A2nvi%C3%AAn))

* Thêm 1 chức năng Khảo sát ở menu Khác (Khảo sát dành cho nhân viên sẽ hiển thị ở mục Khác → Khảo Sát (*Trong đó icon  - tên nhiệm vụ Lấy từ portal-))*

* **Bắt buộc phải chấm công đầu ngày mới thực hiện khảo sát này theo cấu hình tại [SM-APP] Các chức năng yêu cầu chấm công đầu ngày, trường hợp chưa chấm công đầu ngày sẽ hiển thị thông báo: "Vui lòng chấm công đầu ngày trước khi thực hiện khảo sát"**

* Chọn vào chức năng "Khảo sát" hiển thị màn hình danh sách các chương trình khảo sát **có đối tượng khảo sát là "Nhân viên"**
* **Phân trang 10 item/page**

# Hiển thị câu hỏi khảo sát trên App

## Màn hình

Mô tả:

| **Màn hình** | **Mô tả** |
| --- | --- |
|  | 1. Tại màn hình danh sách khảo sát 2. Chọn Chương trình khảo sát để thực hiện bằng cách click vào vùng thông tin khảo sát   3. Hiển thị màn hình Khảo sát như hình bên  Trong đó danh sách câu hỏi sẽ hiển thị theo cài đặt trên portal [Tab Câu hỏi khảo sát: Tạo mới câu hỏi khảo sát](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-TabC%C3%A2uh%E1%BB%8Fikh%E1%BA%A3os%C3%A1t:T%E1%BA%A1om%E1%BB%9Bic%C3%A2uh%E1%BB%8Fikh%E1%BA%A3os%C3%A1t)  Cụm câu hỏi hiển thị:   * **Header**: Tên chương trình khảo sát; hiển thị co giãn theo độ rộng của thiết bị rồi xuống dòng nếu câu hỏi dài * **Câu hỏi khảo sát:** Hiển thị số câu hỏi + tiêu đề câu hỏi   + **Mô tả:** Hiển thị nội dung ghi chú đã nhập trong Field "Mô tả"; nếu trên portal không nhập nội dung mô tả thì trên app không hiển thị   + Đính kèm ảnh: Hiển thị hình ảnh đính kèm từ portal; cho phép vuốt sang phải/ trái để xem nhiều hình      * Tùy thuộc vào kiểu câu hỏi đã cài đặt sẽ hiển thị các cách chọn/ nhập đáp án → Xem mô tả bên dưới |
| Câu hỏi bắt buộc | |
|  |  |
| --- | --- |
|  | * Bắt buộc trả lời dựa vào checkbox bắt buộc khi cài đặt câu hỏi trên portal => Câu hỏi hiển thị dấu **\***   Nếu không trả lời câu hỏi bắt buộc → chọn submit "Hoàn tất" => Hiển thị mess: "Câu hỏi @p1;@p2 bắt buộc trả lời!" |
| Câu hỏi có "Kiểu câu hỏi" = ĐÚNG/SAI | |
|  | Câu hỏi có "Kiểu câu hỏi" = ĐÚNG/SAI [Kiểu câu hỏi = "Đúng/Sai"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Ki%E1%BB%83uc%C3%A2uh%E1%BB%8Fi=%22%C4%90%C3%BAng/Sai%22)  Option 1 lấy từ "Nhãn đúng"  Option 2 lấy từ "Nhãn sai"  Option Khác lấy từ check box "Thêm lựa chọn khác" => Nhãn khác |
| Câu hỏi con | * Câu hỏi con hiển thị theo cài đặt câu hỏi con trên portal [Kiểu câu hỏi = "Đúng/Sai"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Ki%E1%BB%83uc%C3%A2uh%E1%BB%8Fi=%22%C4%90%C3%BAng/Sai%22) hoặc [Kiểu câu hỏi = "Chọn một"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Ki%E1%BB%83uc%C3%A2uh%E1%BB%8Fi=%22Ch%E1%BB%8Dnm%E1%BB%99t%22)  * "Mã câu hỏi" + "." + "Tên câu hỏi"   + Câu hỏi con sẽ hiển thị bên dưới câu hỏi cha và có thanh dấu hiệu bên trái để nhận diệm cụm câu hỏi cha - con như hình. * Mô tả: Hiển thị nội dung mô tả, nếu trên portal không nhập nội dung mô tả thì trên app không hiển thị * Placeholder: Câu trả lời * 0/256: Giới hạn số lượng word dựa vào cấu hình Giá trị tối thiểu/ tối đa trên portal. Trường hợp nhập quá số từ tối đa, hệ thống không cho nhập tiếp bằng cách người dùng gõ nhưng không ghi nhận vào khung "Câu trả lời"    + Trường hợp không cài đặt giá trị tối thiểu/ tối đa (0/0) thì hệ thống lấy mặc định ghi chú câu trả lời 0/500   + Default Khi cài đặt Đáp án khác: hệ thống lấy mặc định ghi chú câu trả lời 0/500 |
| Câu hỏi khác | Câu hỏi có "Kiểu câu hỏi" = ĐÚNG/SAI [Kiểu câu hỏi = "Đúng/Sai"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Ki%E1%BB%83uc%C3%A2uh%E1%BB%8Fi=%22%C4%90%C3%BAng/Sai%22)  và cài đặt đáp áp khác    Nếu chọn Khác: Hiển thị khung ghi chú text để nhập nội dung khác   * Khung ghi chú: Text, **required** khi chọn option Khác * Placeholder: Câu trả lời * Mặc định 0/500     Trường hợp câu hỏi Khác có cài đặt câu hỏi con, màn hình hiển thị     * 0/256: Giới hạn số lượng word dựa vào cấu hình Giá trị tối thiểu/ tối đa trên portal. Trường hợp nhập quá số từ tối đa, hệ thống không cho nhập tiếp bằng cách người dùng gõ nhưng không ghi nhận vào khung "Câu trả lời"    + Trường hợp không cài đặt giá trị tối thiểu/ tối đa (0/0) thì hệ thống lấy mặc định ghi chú câu trả lời 0/500   + Default Khi cài đặt Đáp án khác: hệ thống lấy mặc định ghi chú câu trả lời 0/500  * **RedV1.0.3** higlight đỏ nếu không nhập text cho option Khác: "Bắt buộc nhập lý do khác" |
| Câu hỏi có "Kiểu câu hỏi = Kiểu chữ" | Hiển thị nội dung câu hỏi và khung text để nhập nội dung câu trả lời (free text)   * Placeholder: Câu trả lời * 0/256: Giới hạn số lượng word dựa vào cấu hình Giá trị tối thiểu/ tối đa trên portal. Trường hợp nhập quá số từ tối đa, hệ thống không cho nhập tiếp bằng cách người dùng gõ nhưng không ghi nhận vào khung "Câu trả lời"    + **RedV1.0.3** higlight đỏ nếu nhập ít hơn giá trị tối thiểu: "Chưa đủ số ký tự quy định"      * Trường hợp không cài đặt giá trị tối thiểu/ tối đa (0/0) thì hệ thống lấy mặc định ghi chú câu trả lời 0/500 * Default Khi cài đặt Đáp án khác: hệ thống lấy mặc định ghi chú câu trả lời 0/500 |
| Câu hỏi có "Kiểu câu hỏi = Chọn nhiều" | Cho phép chọn nhiều câu trả lời như hình  Tham khảo cài đặt câu hỏi trên portal [Kiểu câu hỏi = "Chọn nhiều"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Ki%E1%BB%83uc%C3%A2uh%E1%BB%8Fi=%22Ch%E1%BB%8Dnnhi%E1%BB%81u%22)    Lưu ý: Với trường hợp chọn nhiều đáp án => Báo cáo thống kê khảo sát sẽ hiển thị các câu trả lời cách nhau bằng dấu chấm phẩy ";"  Nếu chọn Khác: Hiển thị khung ghi chú text để nhập nội dung khác   * Khung ghi chú: Text, **required** khi chọn option Khác * Placeholder: Câu trả lời * Mặc định 0/500 |
| Câu hỏi có "Kiểu câu hỏi = Kiểu số" | Tham khảo cài đặt portal [Kiểu câu hỏi = "Kiểu số"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Ki%E1%BB%83uc%C3%A2uh%E1%BB%8Fi=%22Ki%E1%BB%83us%E1%BB%91%22)   * Placeholder: Câu trả lời   Khi chọn nhập câu trả lời → Màn hình hiển thị bàn phím số    Sau khi nhập các số; Hệ thống kiểm tra giá trị nhập thỏa điều kiện: MIN <= giá trị nhập <= MAX; trong đó MIN và MAX lấy từ Giá trị tối thiểu/tối đa - [Kiểu câu hỏi = "Kiểu số"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Ki%E1%BB%83uc%C3%A2uh%E1%BB%8Fi=%22Ki%E1%BB%83us%E1%BB%91%22)  →  chọn "H.tất" / "Nhập" => để hoàn thành câu trả lời kiểu số này.  Trường hợp nhập giá trị không nằm trong khoảng From Min to Max hiển thị mess: "Bạn đã nhập ngoài khoảng giá trị cho phép"; chọn "Đồng ý" để tắt mess và nhập lại giá trị |
| Câu hỏi có "Kiểu câu hỏi = Chọn một | Tham khảo cài đặt portal [Kiểu câu hỏi = "Chọn một"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Ki%E1%BB%83uc%C3%A2uh%E1%BB%8Fi=%22Ch%E1%BB%8Dnm%E1%BB%99t%22)  Chỉ cho phép chọn một đáp án đúng,  Nếu đã chọn mục 1; sau đó chọn mục 2 thì hệ thống sẽ auto bỏ chọn mục 1;  Nếu chọn Khác: Hiển thị khung ghi chú text để nhập nội dung khác   * Khung ghi chú: Text, required khi chọn option Khác * Placeholder: Câu trả lời * Mặc định 0/500 |
| Câu hỏi có "Kiểu câu hỏi = Ảnh | Tham khảo cài đặt portal [Kiểu câu hỏi = "Ảnh"](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48444522#id-[Portal]B%E1%BB%99Kh%E1%BA%A3oS%C3%A1t-Ki%E1%BB%83uc%C3%A2uh%E1%BB%8Fi=%22%E1%BA%A2nh%22)  Chọn vào  để chụp hình đính kèm/ hoặc chọn hình ảnh từ thiết bị → Hiển thị poup chọn Chụp hình/ Tải hình  (1) Chọn Chụp hình (Cho phép chọn Tối đa 10 hình) kích thước tối đa 10MB *(kích thước chung cho toàn hệ thống; Định dạng: png/ jpeg/ jpg )*→ Chọn OK    (2) Chọn Tải hình → Chọn hình từ danh sách hình ảnh của thiết bị (Cho phép chọn Tối đa 10 hình; Định dạng: png/ jpeg/ jpg ) → chọn OK   * Tổng hình ảnh upload + chụp <= 10 tấm * Trường hợp hình vượt 10MB/Tấm hiển thị mess thông báo: "File bạn đã chọn quá lớn, kích thước tối đa 10MB"; chọn OK để tắt popup và quay về chọn lại hình khác  * Màn hình hiển thị cho phép xóa hình chọn 'x' không cần confirm  Trường hợp trên portal cấu hình upload Một tấm hay Nhiều tấm  1/ Chọn một: Người dùng chỉ được chọn upload 1 tấm hình; không cho chọn tấm thứ 2 (theo rule add hình)  2/ Chọn nhiều: Người dùng được chọn upload <= 10 tấm hình; không cho chọn tấm thứ 11 (theo rule add hình)  Nếu đã tồn tại đủ tấm hình thì disable icon chụp hình của câu hỏi này hoặc click vào hiển thị "Đã đủ số hình"     | Lưu ý:  Version khi Chọn nhiều hình:  Supports providing any integer value. Use 0 to allow any number of files on iOS version >= 14 & Android version >= 13. Default is 1. | | --- | |
| Button Hoàn tất | Button Hoàn tất  Sau khi nhập/ chọn câu trả lời cho các câu hỏi khảo sát → Chọn button "Hoàn tất" để submit câu trả lời;  Hệ thống kiếm tra các câu hỏi bắt buộc, nếu trường hợp chưa thực hiện câu hỏi bắt buộc → hiển thị mess: "Câu hỏi @p1;@p2 bắt buộc trả lời!"   * Chọn "Đồng ý" để quay trở lại màn hình danh sách câu hỏi khảo sát để trả lời câu hỏi bắt buộc. Không cho lưu nếu chưa hoàn tất các câu hỏi bắt buộc có đánh dâu **\***     **RedV1.0.3**   * Nếu đã đầy đủ các điều kiện, hiển thị [Cảnh báo trước khi lưu dữ liệu](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App)   **"Đồng ý:**   * Ra màn hình danh sách hiển thị pop-up Thông báo "Thành công" * Tại item chương trình Khảo sát -> số lần đã khảo sát = n+1   **"Trở lại": tắt thông báo và vẫn ở màn hình  chương trình khảo sát để trả lời tiếp**      Trên màn hình khi chọn trả lời câu hỏi khảo sát→  Khi chọn back màn hình trả lời câu hỏi khảo sát; hệ thống kiểm tra nếu đã có dữ liệu input → hiển thị popup warning [Cảnh báo trước khi thoát](https://kb.finviet.com.vn/display/DMSNEW/Salesman+App)   * "Đồng ý": KHÔNG Lưu dữ liệu và ra màn hình danh sách chương trình khảo sát * "Trở lại": tắt thông báo và vẫn ở màn hình trả lời câu hỏi khảo sát |
|  | Sau khi hoàn tất chương trình khảo sát;   * **"Số lần đã khảo sát"** :  hệ thống Đếm và hiển thị Số lần đã thực hiện khảo sát (n) sau khi submit là n = n +1 * Trường hợp Cài đặt khảo sát tối đa 8 lần thực hiện; thực hiện thực tế >= 8 lần →  Trên màn hình danh sách khảo sát, CTKS hiển thị icon "Hoàn thành" |
|  | Chọn back khỏi màn hình danh sách khảo sát để về màn hình "Nhiệm vụ viếng thăm" hiển thị check hoàn thành và thời gian thực hiện khảo sát (hh:mm)      **Trường hợp đối tượng khảo sát = Nhân viên; khi Chọn back khỏi màn hình danh sách khảo sát về màn hình:** |
|  | (1) Chọn "Rời điểm bán"  Xem [Checkout:](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Checkout:)  Màn hình danh sách điểm bán hiển thị , nhiệm vụ đã thực hiện tại điểm bán hiển thị thời gian (hh:mm) và check hoàn thành  (2) Chọn Viếng thăm lại [Chức năng Viếng thăm lại](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Ch%E1%BB%A9cn%C4%83ngVi%E1%BA%BFngth%C4%83ml%E1%BA%A1i)  (3) Sau đó thực hiện lại chương trình khảo sát đã thực hiện ở lần viếng thăm trước →  Chọn submit CTKS  (4) Chọn back khỏi màn hình danh sách khảo sát để về màn hình "Nhiệm vụ viếng thăm" hiển thị double check hoàn thành và thời gian thực hiện khảo sát gần nhất (hh:mm) |

=====