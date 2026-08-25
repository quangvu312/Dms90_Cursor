|  |  |
| --- | --- |
| Target release | Release name or number |
| US | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECD-5696 |
| Version | trueYellow1.0.0 |
| Document owner |  |
| Designer |  |
| Developers |  |
| QA | Lead tester |

## **Mô tả chi tiết**

Lưu ý

**Đối tượng áp dụng:**

* Áp dụng cho tất cả các màn hình có chọn địa chỉ (Tỉnh/Thành - Quận/Huyện - Phường/Xã)
* Áp dụng cho cả Direct Sale và Indirect Sale
* Áp dụng cho các đối tượng: Phân cấp địa lý, Công ty, Điểm bán, Nhân viên bán hàng, Nhà phân phối

**Thời điểm áp dụng:**

* Vận hành sẽ chọn 1 thời gian cutoff để áp dụng cấu trúc hành chính mới
* Các transaction đã phát sinh trước đó giữ nguyên, không thay đổi
* IT sẽ lưu trường dữ liệu địa chỉ cũ để truy vết

### 1. Thực trạng và cải tiến đơn vị hành chính

**1.1. Thực trạng**

Đơn vị hành chính của Việt Nam trước đây có cấu trúc 3 cấp:

* **Cấp 1:** Tỉnh/Thành phố
* **Cấp 2:** Quận/Huyện
* **Cấp 3:** Phường/Xã

**1.2. Cải tiến**

Sau khi sửa đổi, đơn vị hành chính của Việt Nam chuyển sang cấu trúc 2 cấp:

* **Cấp 1:** Tỉnh/Thành phố
* **Cấp 2:** Phường/Xã

### 2. Giải pháp lưu trữ dữ liệu

***Cấu trúc cũ (3 cấp):***

| **Tỉnh/Thành cũ** | **Quận/Huyện cũ** | **Phường/Xã cũ** | **Địa chỉ** |
| --- | --- | --- | --- |
| Hà Nội | Hoàn Kiếm | Hàng Bạc | Số 10 phố Hàng Bạc |

***Cấu trúc mới (2 cấp):***

| **Tỉnh/Thành mới** | **Quận/Huyện (lưu Phường/Xã mới)** | **Phường/Xã (default)** | **Địa chỉ** |
| --- | --- | --- | --- |
| Hà Nội | Hàng Bạc | default | Số 10 phố Hàng Bạc |

**Quy tắc mapping:**

* **Phường/Xã mới** được lưu vào cột **Quận/Huyện**
* Cột **Phường/Xã** được set giá trị **"default"**
* Cột **Tỉnh/Thành** giữ nguyên

***Ví dụ minh họa:***

| **Loại dữ liệu** | **Tỉnh/Thành** | **Quận/Huyện** | **Phường/Xã** | **Ghi chú** |
| --- | --- | --- | --- | --- |
| Dữ liệu cũ | TP Hồ Chí Minh | Quận 1 | Phường Bến Nghé | Cấu trúc 3 cấp |
| Dữ liệu mới | TP Hồ Chí Minh | Phường Bến Nghé | default | Cấu trúc 2 cấp - Phường mới lưu vào cột Quận/Huyện |

### 3. Xử lý dữ liệu hiện có

Các thông tin Phân cấp địa lý, Công ty, Điểm bán, Nhân viên bán hàng, Nhà phân phối đã phát sinh trên hệ thống được xử lý theo nguyên tắc sau:

***3.1. Đối với Direct Sale***

* Hệ thống sẽ **gọi API update thông tin khách hàng** để chuyển đổi dữ liệu từ cấu trúc cũ sang cấu trúc mới

***3.2. Đối với Indirect Sale***

**Vận hành HT** thực hiện các bước sau:

1. Xuất data
2. Thực hiện thay đổi thông tin Phường/Xã theo cấu trúc mới
3. Upload file đã sửa lên hệ thống để cập nhật hàng loạt

### 4. Quy tắc hiển thị và xử lý dữ liệu

**4.1 Hiển thị dữ liệu combox địa chỉ**

* Nguyên tắc hiển thị:
  + Hệ thống hiển thị **cả dữ liệu cũ và dữ liệu mới**.
* Trường hợp 1: Dữ liệu đã phát sinh

* + Hiển thị thông tin địa chỉ theo cấu trúc cũ (3 cấp)
  + User có thể vào chỉnh sửa để cập nhật sang cấu trúc mới
  + Hệ thống không tự động chuyển đổi
  + Ví dụ:  
    Địa chỉ điểm bán ABC (tạo ngày 01/01/2025):  
    - Tỉnh/Thành: TP.HCM  
    - Quận/Huyện: Tân Bình  
    - Phường/Xã: phường 4
* Trường hợp 2: Dữ liệu mới
  + Cho phép chọn cả dữ liệu mới và dữ liệu cũ. Ví dụ: Click vào field Quận/huyện, có thể chọn Quận Tân Bình hoặc Phường Tân sơn Hòa

**4.2. Combobox chọn địa chỉ**

* Nguyên tắc chung
  + Giữ nguyên UI của combobox chọn địa chỉ, riêng với trường Quận/Huyện → đổi tên thành "Quận/Huyện cũ (Phường/xã mới)"
  + Hiển thị cả data mới và data cũ trong cùng một combobox
  + User có thể chọn cả địa chỉ cũ (nếu chưa inactive) và địa chỉ mới
* Cụ thể
  + Combobox Tỉnh/Thành phố:
    - Hiển thị tất cả Tỉnh/Thành đang active
    - Không thay đổi so với hiện tại
  + Combobox Quận/Huyện:
    - Hiển thị Quận/Huyện cũ
    - Hiển thị Phường/Xã mới (những Phường/Xã thuộc cấu trúc mới)
  + Combobox Phường/Xã:
    - Nếu chọn Quận/Huyện cũ: Hiển thị danh sách Phường/Xã thuộc Quận/Huyện đó
    - Nếu chọn Phường/Xã mới (ở cấp Quận/Huyện): Tự động set giá trị "default", không cho chọn (disable combobox)
* Ví dụ minh họa:
  + Tình huống 1: User chọn địa chỉ cũ (3 cấp)  
    Bước 1: Chọn Tỉnh/Thành → "TP Hồ Chí Minh"  
    Bước 2: Chọn Quận/Huyện → "Quận 1 "  
    Bước 3: Chọn Phường/Xã → "Phường Bến Nghé"
  + Tình huống 2: User chọn địa chỉ mới (2 cấp)  
    Bước 1: Chọn Tỉnh/Thành → "TP Hồ Chí Minh"  
    Bước 2: Chọn Quận/Huyện → "Phường Bến Nghé"  
    Bước 3: Phường/Xã → Tự động = "default" (disable, không cho chọn)

### 5. Lưu ý sau khi cutoff data cũ

* Đối với các data đã phát sinh (không quan tâm trạng thái) có data địa chỉ cũ (ví dụ: Điểm bán, Nhà phân phối,...).
  + View detail/View list: Vẫn hiển thị data địa chỉ cũ
  + Edit: Chỉ hiển thị id và hiểu là không có dữ liệu, nếu địa chỉ là bắt buộc → không cho phép lưu chỉnh sửa, báo lỗi trường bắt buộc.
* Khi tạo mới: Combobox chọn địa chỉ chỉ hiển thị dữ liệu địa chỉ mới.
* Đối với các báo cáo:
  + Đối với dữ liệu hiển thị: Vẫn hiển thị các địa chỉ cũ
  + Đối với filter theo địa chỉ: Chỉ hiển thị data địa chỉ mới (Tỉnh thành mới, Phường xã mới)