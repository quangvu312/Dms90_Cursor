|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | * Cấp quản lý/User được phân quyền có thể:   + Xem tổng quan danh sách công việc trong ngày của mình   + Xem tổng quan danh sách công việc của nhân viên   + Tạo lịch làm việc cho chính mình   + Duyệt lịch làm việc của cấp dưới đang quản lý   + Ghi nhận thực hiện công việc   + Xem tiến độ làm việc |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Chức năng kế hoạch làm việc

### **1. Mục Đích**

Chức năng **Kế hoạch làm việc** giúp người dùng **tạo, quản lý và theo dõi lịch trình công việc** theo **thời gian cụ thể**. Nó đảm bảo rằng các công việc được tổ chức chặt chẽ, có nhân sự tham gia phù hợp và được thực hiện đúng địa điểm, thời gian quy định.

---

### **2. Giá Trị Cốt Lõi**

✅ **Tối ưu hóa quy trình làm việc**: Giúp lập kế hoạch rõ ràng, tránh chồng chéo công việc.  
✅ **Quản lý nhân sự hiệu quả**: Xác định rõ nhân viên tham gia và đối tác liên quan.  
✅ **Kiểm soát thời gian chặt chẽ**: Đảm bảo công việc diễn ra đúng tiến độ.  
✅ **Ghi nhận địa điểm làm việc**: Xác định chính xác nơi diễn ra công việc, tránh sai sót.

---

### **3. Đối Tượng Sử Dụng**

* **Nhân viên**: Lập kế hoạch cá nhân hoặc theo nhóm (có danh sách nhân viên tham gia cùng).
* **Quản lý**: Theo dõi, kiểm duyệt kế hoạch của nhân viên.
* **Lưu ý tài khoản ở chức năng này (Áp dụng cho tất cả các màn hình thuộc chức năng Kế hoạch làm việc)**

  + Nếu tài khoản người dùng đang đăng nhập **không có**thông tin tài khoản thị trường → Màn hình này không hiển thị bất cứ dữ liệu nào, khi vào màn hình chỉ có 1 dòng chữ: "Vui lòng cài đặt tài khoản thị trường để thực hiện chức năng này!"
  + Nếu tài khoản người dùng đang đăng nhập có thông tin tài khoản thị trường → Màn hình này mới hiển thị dữ liệu và dữ liệu chỉ hiển thị theo nhân viên và nhân viên cấp dưới của tài khoản thị trường (tài khoản thị trường phải đang hoạt động).
  + Trường hợp admin muốn xem dữ liệu của tất cả nhân viên, sẽ mapping với tài khoản thị trường của giám đốc toàn quốc.
  + Tài khoản thị trường được mapping phải có chức vụ từ Giám sát bán hàng trở lên (chức vụ Nhân viên bán hàng sẽ không vào được chức năng này)
  + Trường hợp người dùng đổi thông tin tài khoản thị trường sang một tài khoản khác thì sẽ ghi nhận thông tin cho tài khoản mới và tài khoản cũ sẽ không thấy thông tin ở tài khoản cũ nữa.
    - Ví dụ:
      * Đầu tiên user 001 - mapping tài khoản thị trường Nguyễn Văn A → Tạo kế hoạch làm việc → Thông tin kế hoạch làm việc sẽ ghi nhận cho nhân viên Nguyễn Văn A
      * Sau đó user 001 - chuyển sang mapping tài khoản thị trường Trần Văn B → vào màn hình kế hoạch làm việc sẽ thấy thông tin kế hoạch làm việc của nhân viên Trần Văn B → Tạo kế hoạch làm việc → Thông tin kế hoạch làm việc sẽ ghi nhận cho nhân viên Trần Văn B

---

# Nôi dung chức năng

trueWorking\_Planfalse1000autotoptrue15761

true