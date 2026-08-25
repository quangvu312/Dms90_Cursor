|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature | Login/Logout Salesman App |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0  : Lưu mật khẩu khi login trên app saleman |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

## **1. LOGIN**

**1.1 Mục đích:**

Salesman và Salesup login SM App bằng Mã nhân viên thành công

Một Mã nhân viên login 1 thiết bị trong cùng 1 thời điểm

### 1.2 Mô tả

Các bước login thành công

| Trường hợp | Dữ liệu mẫu | Kết quả mong muốn | Hiện tại |
| --- | --- | --- | --- |
| **Nhập đúng mã nhân viên** | | | |
| Phải là user được tạo trên DMS v2 portal | MNV000001 | * Thỏa điều kiện mã nhân viên * Chấp nhận nhập uppercase; lowercase | Đã có |
| Có trạng thái còn hoạt động không bị khóa |  | * Thỏa điều kiện mã nhân viên | Đã có |
| Đã tạo thông tin thành công trên SSO |  | * Thỏa điều kiện mã nhân viên | Chưa có |
| Sử dụng bàn phím chữ và số |  | * Thỏa điều kiện mã nhân viên | Chưa có |
| **Nhập sai mã nhân viên** | | | |
| Bỏ trống không nhập nhấn Đăng nhập |  | * Thông báo: Mã nhân viên không được bỏ trống | Đã có |
| Nhập mã nhân viên không phải Salesman và Salesup | MNVMNVMNV | * Thông báo: Mã nhân viên chưa đăng ký | Đã có |
| Nhập mã nhân viên đã tắt hoạt động | MNV000001 | * Thông báo: Mã nhân viên chưa đăng ký | Đã có |
| Nhập mã nhân viên nhưng không nhấn Đăng nhập |  | * Màn hình không xử lý tiếp tục |  |
| **Nhập đúng mật khẩu** | | | |
| Nhập đúng mật khẩu đã tạo từ DMS portal | 1234@Dms | * Thỏa điều kiện mật khẩu * User login thành công; mở ra màn hình viếng thăm | Đã có |
| Nhấn vào ẩn/hiện mật khẩu |  | * Thực hiện ẩn/hiện mật khẩu | Đã có |
| **Nhập sai mật khẩu** | | | |
| Bỏ trống không nhập nhấn Xác nhận |  | * Thông báo: Mật khẩu không được bỏ trống | Đã có |
| Nhập mật khẩu sai | 1234@DMS | * Thông báo: Mã nhân viên hoặc mật khẩu không chính xác | Đã có |
| Nhập mật khẩu khi tài khoản tắt hoạt động hoặc bị khóa | 1234@Dms | * Thông báo: Mã nhân viên chưa đăng ký | Đã có |

### 1.3 Kết quả

Salesman và Salesup login SM App bằng Mã nhân viên thành công.

Với trường hợp không thỏa điều kiện có thông báo lỗi.

## **2. LOGOUT**

### 2.1 Mục đích

Salesman và Salesup logout SM App thành công

2.2 Mô tả

Điều kiện cần đã login SM App và phải hoàn tất viếng thăm.  
Các bước thực hiện logout thành công

| Trường hợp | Dữ liệu mẫu | Kết quả mong muốn | Hiện tại |
| --- | --- | --- | --- |
| Chọn Khác/Cài đặt ứng dụng/Đăng xuất |  | * Hiển thị thông báo: Có muốn đăng xuất ? | Đã có |
| Chọn tiếp Đồng ý |  | * Thực hiện đăng xuất tài khoản * Có thông báo: Đăng xuất thành công | Đã có |
| Chọn tiếp Không |  | * Tắt thông báo; không thực hiện đăng xuất tài khoản * Vẫn ở màn hình Cài đặt ứng dụng | Đã có |

### 2.3 Kết quả

Salesman và Salesup logout SM App thành công.

---

**RedV1.1.0** **: Lưu mật khẩu khi login trên app saleman**

**US: Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-6369**

Tính năng "Ghi nhớ mật khẩu" cho phép người dùng (Salesman/Salesup) lưu lại thông tin đăng nhập (mã nhân viên và mật khẩu) trên thiết bị của họ. Điều này giúp họ không cần nhập lại thông tin này mỗi lần mở ứng dụng, tăng tính tiện lợi và tốc độ truy cập.

Màn hình khi login:

**1. Lưu thông tin đăng nhập:**

* **Khi nào lưu:**

  + Người dùng **phải tích chọn** vào checkbox "Ghi nhớ mật khẩu" trên màn hình đăng nhập.
  + Người dùng **phải nhấn nút "Đăng nhập"**.
  + Quá trình đăng nhập **phải thành công**.
  + Nếu tất cả các điều kiện trên được đáp ứng, ứng dụng sẽ lưu mã nhân viên và mật khẩu đã nhập vào bộ nhớ cục bộ của thiết bị (ví dụ: SharedPreferences trên Android, UserDefaults trên iOS hoặc KeyChain để bảo mật tốt hơn cho mật khẩu).
* **Ví dụ:**

  + Người dùng nhập "Thocute" và "•••••••", tích chọn "Ghi nhớ mật khẩu", sau đó nhấn "Đăng nhập" và đăng nhập thành công.
  + Thông tin "Thocute" và "•••••••" sẽ được lưu lại.

**2. Điền sẵn thông tin đăng nhập khi mở lại ứng dụng:**

* **Khi nào điền sẵn:**

  + Khi người dùng mở lại ứng dụng sau khi đã đăng nhập thành công và có chọn "Ghi nhớ mật khẩu" ở lần đăng nhập trước.
  + Ứng dụng sẽ kiểm tra xem có thông tin đăng nhập đã lưu trong bộ nhớ cục bộ hay không.
  + Nếu có, mã nhân viên và mật khẩu đã lưu sẽ được tự động điền vào các trường tương ứng trên màn hình đăng nhập.
  + Checkbox "Ghi nhớ mật khẩu" cũng sẽ được tích sẵn.
* **Ví dụ:**

  + Ở lần đăng nhập trước, người dùng đã chọn "Ghi nhớ mật khẩu" và đăng nhập thành công.
  + Lần này, người dùng đóng ứng dụng và mở lại.
  + Màn hình đăng nhập sẽ tự động hiển thị "Thocute" ở trường mã nhân viên và "•••••••" (hoặc dấu chấm cho mật khẩu) ở trường mật khẩu, và checkbox "Ghi nhớ mật khẩu" sẽ được tích sẵn.

**3. Không lưu hoặc xóa thông tin đăng nhập:**

* **Trường hợp không lưu ngay từ đầu:**

  + Người dùng **không tích chọn** vào checkbox "Ghi nhớ mật khẩu" khi đăng nhập.
  + Bất kể đăng nhập thành công hay thất bại, ứng dụng sẽ **không lưu** bất kỳ thông tin đăng nhập nào.
* **Trường hợp xóa thông tin đã lưu (nếu có):**

  + Nếu người dùng đã từng chọn "Ghi nhớ mật khẩu" và sau đó mở lại ứng dụng (thông tin được điền sẵn), nhưng họ **bỏ tích chọn** khỏi checkbox "Ghi nhớ mật khẩu", sau đó điền mật khẩu khác và **nhấn nút "Đăng nhập"**.
  + Nếu quá trình đăng nhập thành công, thông tin đăng nhập đã lưu trước đó sẽ bị **xóa khỏi bộ nhớ cục bộ**.
  + Lần tiếp theo mở ứng dụng, màn hình đăng nhập sẽ trống rỗng.
* **Trường hợp đặc biệt**

  + **QC untick xong kill app:**

    - Giả sử người dùng đã chọn "Ghi nhớ mật khẩu" và đăng nhập thành công trước đó (thông tin đã lưu).
    - Khi mở lại ứng dụng, thông tin đăng nhập được điền sẵn và checkbox "Ghi nhớ mật khẩu" được tích.
    - Người dùng **bỏ tích chọn** khỏi checkbox "Ghi nhớ mật khẩu".
    - Thay vì nhấn "Đăng nhập", người dùng **kill ứng dụng (buộc đóng)**.
    - **Khi mở lại ứng dụng:** Thông tin đăng nhập **vẫn sẽ được điền sẵn** và checkbox "Ghi nhớ mật khẩu" **vẫn sẽ được tích sẵn**. Lý do là việc bỏ tích chỉ là thay đổi trên giao diện, thông tin lưu trữ chỉ bị xóa khi có thao tác "Đăng nhập" (có thể hiểu là một hành động xác nhận ý định của người dùng) sau khi bỏ tích.