none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6260: Enhance không cho phép mở khóa sổ các ngày thuộc tháng khóa sổ duy nhất của NPP  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5720bỏ  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5721  Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-6285: Enhance ràng giới hạn max 1000 NPP, max 90 ngày/NPP |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Mô tả**

### 1. Mục tiêu

Nâng cấp tính năng chốt sổ kho nhằm:

* Cho phép người dùng thao tác chốt sổ cho **nhiều NPP cùng lúc**
* Cho phép người dùng **chốt sổ nhiều ngày liên tiếp** trong 1 lần thao tác
* Chuyển đổi từ **chốt sổ theo tháng** sang **chốt sổ theo ngày** để kiểm soát chính xác hơn.

### 2. Phạm vi áp dụng

Áp dụng cho màn hình "Chốt sổ kho" trong menu Quản lý kho.

## **Chốt sổ**

### 1. Cho phép chọn nhiều NPP khi chốt sổ

* Trường chọn NPP: dropdown cho phép chọn nhiều NPP. Mặc định trống.
* Nếu không chọn NPP, không cho phép thực hiện chốt sổ, hiển thị thông báo lỗi: "Vui lòng chọn ít nhất 1 Nhà phân phối để thực hiện chốt sổ."
* Hệ thống chỉ cho phép xử lý **tối đa 1000 NPP** trong một lần chốt sổ. Nếu người dùng chọn > 1000 NPP, báo lỗi: *“Bạn đã chọn quá 1000 NPP. Vui lòng chọn tối đa 1000 NPP mỗi lần để tiếp tục.”*

### 2. Cho phép chọn ngày chốt sổ

* Cho phép chọn ngày khóa sổ là ngày lớn hơn ngày đã chốt gần nhất.
* Khi chọn ngày chốt sổ là ngày X, hệ thống sẽ tự động chốt các ngày từ (ngày đã chốt gần nhất + 1) đến ngày X theo thứ tự thời gian.
* Hệ thống chỉ cho phép chốt sổ tối đa 90 ngày liên tiếp / mỗi NPP, với từng NPP:
  + Nếu Số ngày ≤ 90: Thực hiện chốt sổ NPP như logic hiện tại
  + Nếu Số ngày > 90: Hệ thống bỏ qua NPP này

**Ví dụ:**

* Ngày đã chốt gần nhất: 10/05/2025
* Người dùng chọn ngày chốt sổ: 15/05/2025
* Hệ thống sẽ chốt liên tiếp các ngày 11/05, 12/05, 13/05, 14/05 và 15/05/2025.

### 3. Xử lý khi chốt sổ nhiều ngày và nhiều NPP

Hệ thống xử lý lần lượt theo thứ tự:

* **Thứ tự NPP**: theo danh sách người dùng đã chọn.
* **Thứ tự ngày**: từ ngày nhỏ đến ngày lớn.

Nếu gặp lỗi khi chốt 1 ngày của 1 NPP → **bỏ qua NPP đó**, tiếp tục xử lý NPP kế tiếp.

**Ví dụ:** Chọn NPP A, B; chọn ngày chốt là 15/05/2025

Giả sử:

* Ngày gần nhất đã chốt của NPP A là 10/05/2025
* Ngày gần nhất đã chốt của NPP B là 13/05/2025

Khi chốt:

* **NPP A**: hệ thống xử lý ngày 11/05 OK; ngày 12/05 OK; ngày 13/05 lỗi → bỏ qua NPP A, không thực hiện kiểm tra ngày 14/05 và 15/05.
* **NPP B**: xử lý ngày 14/05 OK; ngày 15/05 OK

Nếu NPP có ngày chốt sổ gần nhất > ngày chốt sổ được chọn => bỏ qua chốt sổ NPP này và thực hiện chốt sổ các NPP tiếp theo.

**Ví dụ:** Chọn NPP A, B, C, chọn ngày chốt là 10/05/2025. Ngày chốt sổ gần nhất của các NPP A, B, C lần lượt là: 08/05/2025, 12/05/2025, 09/05/2025.

Khi chốt:

* **NPP A**: Thực hiện xử lý chốt sổ ngày 09/05, 10/05/2025
* **NPP B**: Bỏ qua do 12/05/2025 > 10/05/2025, ngày 10/05 của NPP B đã được chốt sổ trước đó
* **NPP C**: Thực hiện xử lý chốt sổ ngày 10/05/2025

**Đối với portal NPP:** Nếu chọn ngày chốt sổ ≤ ngày chốt sổ gần nhất, khi bấm chốt sổ, hệ thống thực hiện báo lỗi: *"Không thể khóa sổ do ngày được chọn phải lớn hơn ngày khóa sổ gần nhất của NPP."*

**Đối với portal HO:** Khi chốt sổ, hệ thống thực hiện xử lý theo các điều kiện trên và hiển thị Kết quả chốt sổ được mô tả bên dưới.

### 5. Hiển thị kết quả chốt sổ

| Điều kiện | Hành động hệ thống | Kết quả hiển thị |
| --- | --- | --- |
| Ngày chốt > Ngày chốt sổ gần nhất | Thực hiện chốt sổ từ (ngày đã chốt gần nhất + 1) đến ngày được chọn | Hiển thị kết quả "Thành công" hoặc "Thất bại" tùy kết quả xử lý, được mô tả bên dưới. |
| Ngày chốt < hoặc = Ngày chốt sổ gần nhất | Bỏ qua NPP, không thực hiện chốt sổ | Trong màn hình "Kết quả chốt sổ", hiển thị trạng thái "Bỏ qua".  Lý do: *"Bỏ qua do ngày được chọn phải lớn hơn hoặc bằng ngày khóa sổ gần nhất của NPP."* |
| Số ngày cần chốt sổ = (Ngày kết thúc – Ngày bắt đầu + 1) > 90 ngày | Bỏ qua NPP, không thực hiện chốt sổ | Trong màn hình "Kết quả chốt sổ", hiển thị trạng thái "Bỏ qua".  Lý do: *"Bỏ qua do vượt quá 90 ngày khóa sổ cho phép."* |

### 6. Mô tả giao diện

**Giao diện màn hình chốt sổ có các thay đổi sau:**

* Màn hình danh sách khóa sổ
  + Bỏ trường Tháng khóa sổ
  + Thêm trường Ngày khóa sổ  *[datepicker, bắt buộc]*: Chặn chọn ngày tương lai
  + Table Danh sách chốt sổ
    - Bỏ cột Tháng khóa sổ gần nhất
    - Thêm cột Ngày khóa sổ gần nhất
* Màn hình kết quả chốt sổ:
  + Bỏ các cột: Tháng khóa sổ gần nhất, Tháng phát sinh
  + Thêm các cột: Ngày khóa sổ gần nhất, Ngày phát sinh

## **Mở chốt sổ**

**1/ Logic xử lý**

* Mở khóa sổ tuần tự từ ngày khóa sổ gần nhất đến xa nhất.
* Không cho phép mở khóa sổ bất kỳ ngày nào thuộc tháng khóa sổ duy nhất của NPP. Ví dụ: NPP có tháng khóa sổ xa nhất là 03/2026 và không có khóa số tháng nào khác, người dùng sẽ không được mở khóa sổ ngày 31/3/2026; 30/3/2026,....

|  |  |  |
| --- | --- | --- |
|  |  | **Đường dẫn:** Quản trị hệ thống → Mở chốt sổ  **Mô tả:**   * **Nhà phân phối** *[dropdown, bắt buộc]*:    + Khi nhấn vào sẽ load hết danh sách NPP trực thuộc HO đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Nhà phân phối, danh sách hiển thị với các thông tin gồm Mã NPP - Tên NPP.   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên NPP.   + Chỉ được chọn 1   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Mặc định trống. * **Mở khoá sổ** *[button]*:   + Chỉ được mở khoá tuần tự từ ngày khoá sổ gần nhất trở về trước, ví dụ NPP A đang khoá sổ ngày 2/1/2025 → khi thực hiện mở khoá sổ thì hệ thống chỉ mở khoá sổ ngày 2/1/2025 → ngày khoá sổ lúc này là ngày 1/1/2025.   + Ẩn button này nếu như NPP chỉ có duy nhất 1 tháng khóa sổ.   + Khi click vào button → hệ thống hiển thị popup yêu cầu xác nhận     - **Text**: *"Bạn chắc chắn muốn mở khoá sổ ngày {ngày khoá sổ hiện tại}*của *{Tên NPP được chọn}?"*     - **Đồng ý** *[button]*: Click vào nút này → hệ thống thực hiện mở khoá sổ ngày cho NPP được chọn        * Tại danh sách khoá sổ         + Ngày khoá sổ chuyển thành ngày gần nhất đang được khoá sổ         + Thời gian khoá sổ chuyển thành thời gian khóa sổ ngày gần nhất đang được khóa         + Người khoá sổ chuyển thành người khóa sổ ngày gần nhất đang được khóa     - **Huỷ***[button]*: Click vào nút này → hệ thống đóng popup xác nhận   **Lưu ý:**  Khi chọn NPP:   * Nếu NPP có >1 tháng được khóa sổ: hệ thống hiển thị message: "Ngày sẽ được mở khóa tiếp theo cho Nhà phân phối {Tên NPP}: {Ngày khóa sổ}" * Nếu NPP có duy nhất 1 tháng được khóa sổ, hệ thống không cho phép mở khóa sổ bất kỳ ngày nào của tháng đó, và hiển thị text: "*[tháng khóa sổ gần nhất] là kỳ đã khóa gần nhất, bạn không thể mở khóa sổ bất kỳ ngày nào trong tháng này."* |

### Kiểm tra thời gian trong đơn hàng/phiếu với ngày chốt sổ

|  |  |  |
| --- | --- | --- |
|  | N/A | Khi người dùng click "Lưu" để tạo một đơn hàng hoặc phiếu, hệ thống thực hiện kiểm tra trường thông tin ngày trong đơn/phiếu có thuộc ngày đã bị khóa sổ không   * Nếu không, hệ thống thực hiện kiểm tra các rule khác vào tạo đơn/phiếu * Nếu có, hệ thống hiển thị thông báo lỗi và không cho phép tạo đơn/phiếu.   + **Thông báo lỗi:** "Ngày*{ngày}/{tháng}/{năm}* đã bị khóa sổ. Vui lòng chọn*{Tên trường chọn ngày}* khác." * Các đơn hàng/phiếu cần thực hiện kiểm tra khóa sổ bao gồm:    + Đơn sell-out   + Phiếu nhập hàng   + Phiếu xuất kho   + Phiếu trả hàng công ty   + Phiếu trả hàng nguyên đơn (HO)   + Phiếu điểm bán trả hàng nguyên đơn   + Phiếu điểm bán trả lẻ   + Phiếu kiểm kho   + Phiếu chuyển kho nội bộ   + Phiếu chuyển kho vansale   + Phiếu chuyển kho NPP |