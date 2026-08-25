|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | 1. **Thời gian viếng thăm điểm bán** được tính bắt đầu từ thời điểm nhân viên **check in thành công** tại điểm bán. 2. **Quy tắc kiểm tra khi check out:**     * Nếu **tổng thời gian ở lại** tại điểm bán (tính từ lúc check in đến thời điểm hiện tại) **chưa đạt thời gian tối thiểu** được cấu hình → **Không cho phép check out**.    * Trong trường hợp này, khi nhân viên chọn check out sẽ hiển thị cảnh báo người tiêu dùng 3. **Điều kiện để được phép check out:**     * **Tổng thời gian viếng thăm hiện tại** (hiện tại - thời điểm check in) **phải lớn hơn hoặc bằng thời gian tối thiểu** được cấu hình cho điểm bán.    * Cài theo thời gian phút |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Liên quan đến chức năng  → [Checkout](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Checkout:)

BRD:

Nội dung bổ sung: **Điều kiện để được phép check out:**

* **Tổng thời gian viếng thăm hiện tại** (hiện tại - thời điểm check in) **phải lớn hơn hoặc bằng thời gian tối thiểu** được cấu hình cho điểm bán.
* Cài theo thời gian phút

Màn hình:

| **Tên Trường** | **Loại dữ liệu/Loại field** | Cho phép thao tác? | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Rời điểm bán | Button | Có | Có | 1. **Thời gian viếng thăm điểm bán** được tính bắt đầu từ thời điểm nhân viên **check in thành công** tại điểm bán. 2. **Quy tắc kiểm tra khi check out:**     * Nếu **tổng thời gian ở lại** tại điểm bán (tính từ lúc check in thành công đến thời điểm hiện tại) **nhỏ hơn **thời gian tối thiểu** được cấu hình tại [HT] Danh sách cấu hình chung -> " STORE\_VISIT\_DURATION\_CONFIGURATION"**       + Trong trường hợp này, khi nhân viên chọn check out sẽ hiển thị        - 1/ Cảnh báo chưa hoàn thành nhiệm vụ khảo sát trước        - 2/ Cảnh báo Không thể check out hiển thị tiếp theo: **Thông báo** Thời gian viếng thăm tối thiểu là **'@STORE\_VISIT\_DURATION\_CONFIGURATION'** phút. Vui lòng tiếp tục công việc tại điểm bán.**'**        - **3/ Cảnh báo chưa hoàn thành nhiệm vụ bắt buộc và chọn lý do sau cùng.**        * + - * + **Chọn "Đồng ý" để tắt popup và vẫn ở màn hình viếng thăm điểm bán**     - Nếu tổng thời gian ở lại tại điểm bán (tính từ lúc check in thành công đến thời điểm hiện tại) lớn hơn hoặc bằng thời gian tối thiểu được cấu hình (theo phút)        * Chọn button "Rời điểm bán" → check out thành công theo mô tả tại link:  → [Checkout](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53019202#id-[SMAPP]Nhi%E1%BB%87mv%E1%BB%A5trongtuy%E1%BA%BFn-Checkout:) |