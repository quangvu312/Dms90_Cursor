none

| Target release |  |
| --- | --- |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1266Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1267Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-1268 |
| Version | 1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA |  |

## **Lịch sử tài liệu**

3

## **Description**

### 1. Mục tiêu

Nâng cấp tính năng chốt sổ kho nhằm:

* Cho phép người dùng thao tác chốt sổ cho **nhiều NPP cùng lúc (**thay vì chỉ 1 NPP như hiện tại).
* Cho phép người dùng chốt sổ nhiều tháng liên tiếp trong 1 lần thao tác (không cần thao tác từng tháng riêng lẻ).

### 2. Phạm vi áp dụng

Áp dụng cho màn hình “Chốt sổ kho” trong phân hệ Quản lý kho.

## **Requirements**

#### 1. Cho phép chọn nhiều NPP khi chốt sổ

* Trường chọn NPP: chọn phép chọn nhiều NPP. Mặc định trống.
* Nếu không chọn NPP → không cho phép thực hiện chốt sổ, hiển thị thông báo lỗi:  
  *"Vui lòng chọn ít nhất 1 Nhà phân phối để thực hiện chốt sổ."*

#### 2. Cho phép chọn tháng chốt sổ

* Cho phép chọn tháng khóa sổ là tháng lớn hơn tháng đã chốt gần nhất.
* Không cho phép chọn tháng tương lai (tháng lớn hơn tháng hiện tại). Nếu chọn → hiển thị cảnh báo: *"Không thể chốt sổ cho tháng tương lai."*
* Khi chọn tháng chốt sổ là tháng X, hệ thống sẽ tự động chốt các tháng (tháng gần nhất +1) đến tháng X theo thứ tự thời gian.

→ Ví dụ:

* + Tháng đã chốt gần nhất: 05/2025
  + Người dùng chọn tháng chốt sổ: 07/2025  
    → Hệ thống sẽ chốt liên tiếp tháng 06/2025 và 07/2025.

#### 3. Xử lý khi chốt sổ nhiều tháng và nhiều NPP

* Hệ thống xử lý lần lượt theo thứ tự:

  + Thứ tự NPP: theo danh sách người dùng đã chọn.
  + Thứ tự tháng: từ tháng nhỏ đến tháng lớn.
* Nếu gặp lỗi khi chốt 1 tháng của 1 NPP → bỏ qua NPP đó, tiếp tục xử lý NPP kế tiếp.

→ Ví dụ: Chọn NPP A, B; chọn tháng chốt là 07/2025

* + Giả sử:

    - Tháng gần nhất đã chốt của NPP A là 04/2025
    - Tháng gần nhất đã chốt của NPP B là 06/2025
  + Khi chốt:

    - NPP A: hệ thống xử lý tháng 05 → OK; tháng 06 → lỗi → bỏ qua NPP A, không thực hiện kiểm tra tháng 07.
    - NPP B: xử lý tháng 07 → OK
* Nếu NPP có tháng chốt sổ gần nhất > tháng chốt sổ được chọn => bỏ qua chốt sổ NPP này và thực hiện chốt sổ các NPP tiếp theo.

→ Ví dụ: Chọn NPP A; B; C, chọn tháng chốt là 04/2025. Tháng chốt sổ gần nhất của các NPP A, B, C lần lượt là: 02/2025, 06/2025, 03/2025.

* + Khi chốt:
    - NPP A: Thực hiện xử lý chốt sổ tháng 03, 04/2025
    - NPP B: Bỏ qua do 06/2025 > 04/2025, tháng 04 của NPP B đã được chốt sổ trước đó
    - NPP C: Thực hiện xử lý chốt sổ tháng 04/2025

* + Đối với **portal NPP**: Nếu chọn tháng chốt sổ gần nhất > tháng chốt sổ, khi bấm chốt sổ, hệ thống thực hiện báo lỗi: *"Không thể khóa sổ do tháng được chọn phải lớn hơn khóa sổ gần nhất của NPP.”*
  + Đối với **portal HO**: Khi chốt sổ, hệ thống thực hiện xử lý theo các điều kiện trên và hiển thị Kết quả chốt sổ được mô tả bên dưới.

#### 5. Hiển thị kết quả chốt sổ

| Điều kiện | Hành động hệ thống | Kết quả hiển thị |
| --- | --- | --- |
| Tháng chốt > Tháng chốt sổ gần nhất | Thực hiện chốt sổ từ (tháng đã chốt gần nhất + 1) → tháng được chọn | Hiển thị kết quả “Thành công” hoặc “Thất bại” tùy kết quả xử lý, được mô tả bên dưới. |
| Tháng chốt < hoặc = Tháng chốt sổ gần nhất | Bỏ qua NPP, không thực hiện chốt sổ | Trong màn hình “Kết quả chốt sổ”, hiển thị trạng thái “Bỏ qua”. |

#### Mô tả giao diện

| Title | Wireframe | Description |
| --- | --- | --- |
| Màn hình *Kết quả chốt sổ* |  | 1. Người dùng bấm Khóa sổ, hệ thống xử lý chốt sổ theo tháng và NPP được chọn và hiển thị Kết quả chốt sổ gồm:   | Trường thông tin | Mô tả | | --- | --- | | Mã nhà phân phối | Mã nhà phân phối được thực hiện chốt sổ. | | Tên nhà phân phối | Tên nhà phối được thực hiện chốt sổ. | | Tháng khóa sổ gần nhất | Tháng gần nhất được chốt sổ thành công sau khi hệ thống xử lý. Nếu không có tháng nào được xử lý chốt sổ, hiển thị tháng chốt sổ gần nhất hiện tại của NPP đó. | | Trạng thái | NPP được chốt sổ thành công tất cả các tháng → hiển thị trạng thái "Thành công"  NPP không được chốt sổ tất cả các tháng → hiển thị trạng thái "Thất bại".  NPP bị bỏ qua do Tháng chốt sổ < Tháng khóa sổ gần nhất → hiện thị trạng thái "Bỏ qua" + icon infor với nội dung khi hover: *"Bỏ qua do tháng được chọn phải lớn hơn tháng khóa sổ gần nhất của NPP."* |   2. Cho phép expand/collapse đối với các dòng dữ liệu có trạng thái "Thất bại", mặc định collapse. Khi expand 1 dòng bất kì, hệ thống hiển thị chi tiết các đơn/phiếu chưa được hoàn thành của tháng không được chốt sổ thành công gồm các thông tin:   | Trường thông tin | Mô tảim | | --- | --- | | Mã đơn/phiếu | Mã trên đơn/phiếu | | Loại | Loại đơn/phiếu | | Trạng thái | Trạng thái của đơn/phiếu đó. | | Tháng phát sinh | Tháng không được chốt sổ thành công, hiển thị theo định dạng mm/yyyy. | |