|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Bổ sung flow bật chấm trưng bày AI tự động theo setting CTTB |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | thao.ntt |
| Chage History | 2 |

truenone

* Docs này chỉ mô tả các phần update liên quan đến AI chấm hình ảnh, các giao diện và luồng khác vẫn giữ như cũ không thay đổi
* Kết quả AI được hiển thị trên từng hình ảnh

   

Sau khi chọn Gửi hình trưng bày,

Bên thứ 3 chấm hình trả về kết quả cho BE, BE đánh giá Đạt/ Không đạt từng tấm hình. App hiển thị như sau:

* Hiển thị icon dấu hiệu nhận biết khi nhận được kết quả AI  
  + : Kết quả hình ảnh KHÔNG ĐẠT YÊU CẦU  
    
    
  + : Kết quả hình ảnh ĐẠT YÊU CẦU  
    
  + Không hiển thị dấu hiệu: Hình ảnh chưa được chấm trưng bày

* Onclick hình ảnh hiển thị màn hình

| Component | Description |
| --- | --- |
| * Docs này chỉ mô tả các phần update liên quan đến AI chấm hình ảnh, các giao diện và luồng khác vẫn giữ như cũ không thay đổi * Kết quả chi tiết từ AI hiển thị theo từng hình ảnh | |
| **Kết quả từ AI** | * Hiển thị kết quả tổng quát theo AI (Field @Kết quả AI) * Trạng thái chờ duyệt hiển thị khi bật chấm trưng bày bằng AI nhưng @chấm tự động = OFF |
| **Sản phẩm kinh doanh** | * Hiển thị các sản phẩm được cấu hình theo điều kiện ở tab "Sản phẩm kinh doanh"    + avatar sản phẩm   + Tên sản phẩm   + Số lượng thực tế AI đếm được / @số lượng sản phẩm (theo điều kiện ở tab "Sản phẩm kinh doanh")     - Nếu kết quả chấm điểm có số lượng >= số lượng cấu hình thì hiển thị màu xanh lá, ý nghĩa là Đạt điều kiện.     - Nếu kết quả chấm điểm có số lượng < số lượng cấu hình thì hiển thị màu đỏ, ý nghĩa là Không đạt điều kiện |
| **Sản phẩm đối thủ** | * Text hiển thị: " Sản phẩm đối thủ trong hình không được vượt mức cho phép" * Hiển thị các sản phẩm được cấu hình theo điều kiện ở tab "Sản phẩmđối thủ"    + avatar sản phẩm   + Tên sản phẩm   + Số lượng thực tế AI đếm được / @số lượng sản phẩm (theo điều kiện ở tab "Sản phẩm đối thủ")      - Nếu kết quả chấm điểm có số lượng >= số lượng cấu hình thì hiển thị màu đỏ, ý nghĩa là Không đạt điều kiện     - Nếu kết quả chấm điểm có số lượng < số lượng cấu hình thì hiển thị màu xanh lá, ý nghĩa là Đạt điều kiện |
| **Khác** | * Cho phép kéo lên xuống popup Kết quả AI xuống dưới đáy màn hình để nhìn rõ hình ảnh và chi tiết kết quả * Cho phép zoom hoặc kéo qua lại để xem đủ các hình ảnh trong lần chụp Chi tiết kết quả AI sẽ đi theo từng hình ảnh |
| Đóng: để tắt popup xem chi tiết hình ảnh | |