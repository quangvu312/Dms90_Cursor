true

|  |  |
| --- | --- |
| Target release | Release name or number |
| US |  |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

3

**BACKLOG**

| # | Phiên bản | Ngày cập nhật | Người cập nhật | Nội dung cập nhật |
| --- | --- | --- | --- | --- |
| 1 | 1.0.0 |  |  | Tạo mới tài liệu |

# **Requirement**

### 1. Cập nhật thông tin phiếu kiểm kho

Khi kiểm kho, thay vì nhập số lượng chênh lệch tồn kho giữa hệ thống và thực tế chỉ nhập số lượng tồn kho thực tế.

#### a. Tạo mới/chỉnh sửa phiếu kiểm kho

* **Đường dẫn:**Kiểm kho → Tạo mới/Chỉnh sửa phiếu kiểm kho
* Thông tin phiếu kiếm kho thay đổi các thông tin sau:
  + Bổ sung trường "Tồn kho thực tế"
  + Cập nhật định dạng trường "Chênh lệch tồn kho"

| STT | Trường thông tin | Định dạng | Mô tả |
| --- | --- | --- | --- |
| 1 | Tồn kho thực tế | Input text | * Bắt buộc nhập * Giá trị mặc định là 0 * Cho phép người dùng nhập số thập phân, tối đa 2 chữ số thập phân * Chỉ cho phép nhập giá trị lớn hơn hoặc bằng 0. |
| 2 | Chênh lệch tồn kho | Text | * Chênh lệch tồn kho được tính dựa trên công thức: Tồn kho thực tế - Tồn kho hê thống. Nếu Chênh lệch tồn kho < 0 => hiển thị theo dạng -x, ví dụ -80. |

**Thông tin lô**

| STT | Trường thông tin | Định dạng | Mô tả |
| --- | --- | --- | --- |
| 1 | Tồn kho thực tế | Input text | * Bắt buộc nhập * Giá trị mặc định là 0 * Cho phép người dùng nhập số thập phân, tối đa 2 chữ số thập phân * Chỉ cho phép nhập giá trị lớn hơn hoặc bằng 0. |
| 2 | Chênh lệch tồn kho | Text | * Chênh lệch tồn kho được tính dựa trên công thức: Tồn kho thực tế - Tồn kho hệ thống. |
| Khi bấm Lưu thông tin lô → hệ thống kiểm tra :   1. **Tổng chênh lệch tồn kho trong lô** phải bằng **chênh lệch tồn kho sản phẩm** ngoài danh sách    * Nếu đúng -> Tiếp tục check rules (2)    * Nếu sai -> Hiển thị toast lỗi "Tổng chênh lệch lô phải bằng chênh lệch sản phẩm" 2. Kiểm tra chênh lệch tồn kho hợp lệ theo các bước sau:     * Nếu Chênh lệch tồn kho sản phẩm <= 0 → Tất cả chênh lệch lô <= 0 & ABS (Tất cả chênh lệch tồn kho lô) <= Tồn kho. Nếu không thỏa, hiển thị toast lỗi "Chênh lệch tồn kho không được dương vì đang trong điều chỉnh giảm"    * Nếu Chênh lệch tồn kho sản phẩm >= 0 → Tất cả chênh lệch lô >= 0. Nếu không thỏa, hiển thị toast lỗi "Chênh lệch tồn kho không được âm vì đang trong điều chỉnh tăng"    * Nếu người dùng để trống trường này hoặc nhập giá trị không hợp lệ với quy tắc trên → Hiển thị error message "Trường <a> là bắt buộc" (với <a> là tên trường)   Nếu thỏa cả 3 điều kiện trên → đóng Dialog Thông tin Lô và quay lại màn hình danh sách sản phẩm | | | |

#### b. Xem chi tiết phiếu kiểm kho

* **Đường dẫn:**Kiểm kho → Xem chi tiết phiếu kiểm kho bất kì
* Thông tin phiếu kiếm kho thay đổi các thông tin sau:
  + Bổ sung trường "Tồn kho thực tế"
  + Cập nhật định dạng trường "Chênh lệch tồn kho"

| STT | Trường thông tin | Định dạng | Mô tả |
| --- | --- | --- | --- |
| 1 | Tồn kho thực tế | Text | * Hiển thị tồn kho thực tế được NPP nhập. |
| 2 | Chênh lệch tồn kho | Text | * Chênh lệch tồn kho được tính dựa trên công thức: Tồn kho thực tế - Tồn kho hê thống. Nếu Chênh lệch tồn kho < 0 => hiển thị theo dạng (x), ví dụ: (80). |

**Thông tin lô**

| STT | Trường thông tin | Định dạng | Mô tả |
| --- | --- | --- | --- |
| 1 | Tồn kho thực tế | Text | * Hiển thị tồn kho thực tế được NPP nhập. |
| 2 | Chênh lệch tồn kho | Text | * Chênh lệch tồn kho được tính dựa trên công thức: Tồn kho thực tế - Tồn kho hệ thống. |