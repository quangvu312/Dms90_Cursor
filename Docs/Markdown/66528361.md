|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Đăng ký hóa đơn điện tử và chữ ký số

* Mục đích:
  + Chức năng giúp nhà phân phối đăng ký sử dụng hóa đơn điện tử và chữ ký số theo đúng quy định pháp luật.
  + Hỗ trợ tải mẫu, nộp hồ sơ và kiểm tra tính hợp lệ tự động.
  + Tạo tiền đề để phát hành hóa đơn điện tử hợp pháp trong hệ thống.

* **Thể hiện tiến trình 4 bước:**

* + 1. HĐĐT & CKS''
  + 2. Thanh toán
  + 3. Bổ sung hồ sơ
  + 4. Xử lý hồ sơ.

## Bước 1: Lựa chọn gói HĐĐT & CKS phù hợp

|  | **Tên Trường** | **Loại dữ liệu / Field** | **Cho phép thao tác?** | **Bắt buộc nhập liệu?** | **Mô tả** |
| --- | --- | --- | --- | --- | --- |
| 1 | **Phí khởi tạo HĐĐT & CKS** | Radio button | Có | Có | Người dùng **chọn 1 mục phí khởi tạo**, ví dụ: phí khởi tạo HĐĐT, phí khởi tạo CKS, mỗi loại hiển thị giá riêng biệt.  Tối thiểu phải chọn 1 loại để tiếp tục. |
| 2 | **Loại chữ ký số** | Radio button | Có | Có | Người dùng chọn 1 trong 2 loại: **HSM** hoặc **Token**. Việc chọn loại này ảnh hưởng tới danh sách gói CKS hiển thị bên dưới. |
| 3 | **Gói chữ ký số (HSM hoặc Token)** | Radio button | Có | Có | Hiển thị các tùy chọn theo loại CKS đã chọn.  Mỗi gói hiển thị giá cụ thể. Chỉ được chọn 1 gói tại một thời điểm. |
| 4 | **Loại hình kinh doanh** | Dropdown | Có | Có | Các lựa chọn gồm: “Doanh nghiệp”, “Hộ kinh doanh”, “Cá nhân”... Có thể dùng để điều chỉnh nội dung gói hóa đơn điện tử gợi ý. |
| 5 | **Gói hóa đơn điện tử** | Radio button | Có | Có | Danh sách các gói hóa đơn điện tử kèm giá bán  Chỉ được chọn 1 gói. |
| 6 | **Nút “Tiếp tục”** | Button | Có | Có | Nút được kích hoạt khi người dùng **đã chọn ít nhất 1 phí khởi tạo**, **1 gói chữ ký số**, và **1 gói hóa đơn điện tử**. Bấm để sang bước xác nhận và thanh toán. |

## Bước 2: Thanh Toán

|  | **Tên Trường** | **Loại dữ liệu / Field** | **Cho phép thao tác?** | **Bắt buộc nhập liệu?** | **Mô tả & Quy tắc xử lý dữ liệu (Validation)** |
| --- | --- | --- | --- | --- | --- |
| 1 | **Tóm tắt lựa chọn** | Label | Không | Không | Hiển thị danh sách các lựa chọn từ bước trước. Bao gồm: loại chữ ký số, số lượng hóa đơn, phí khởi tạo, VAT, và tổng tiền. Không chỉnh sửa được. |
| 2 | **Chủ tài khoản** | Label | Không | Không | Thông tin cố định: “CÔNG TY CỔ PHẦN ĐẦU TƯ FINVIET”. Không chỉnh sửa. |
| 3 | **Số tài khoản** | Label | Không | Không | Hiển thị số tài khoản nhận tiền. Thông tin cố định để người dùng chuyển khoản. |
| 4 | **Số tiền** | Label | Không | Không | Tổng số tiền cần thanh toán, đã bao gồm VAT. Dữ liệu tính toán từ bước 1. |
| 5 | **Nội dung chuyển khoản** | Label | Không | Không | Tự động sinh nội dung (VD: 0123456789\_CKS\_HDDT). Người dùng cần ghi chính xác nội dung này khi chuyển khoản. |
| 6 | **Upload ảnh xác nhận thanh toán** | File upload | Có | **Có** | Người dùng phải upload biên lai chuyển khoản (JPG, PNG, PDF, tối đa 10MB). Nếu chưa upload thì không cho nhấn nút “Tiếp tục”. |
| 7 | **Mã số thuế** | Text input | Có | Có (nếu nhập bất kỳ trường nào trong khối thông tin xuất hóa đơn) | Nếu người dùng có nhu cầu xuất HĐ VAT và nhập bất kỳ trường nào trong khối này, thì tất cả các trường còn lại đều bắt buộc. |
| 8 | **Tên Hộ kinh doanh / Doanh nghiệp** | Text input | Có | Có (theo điều kiện trên) | Không được để trống nếu có nhu cầu xuất hóa đơn. |
| 9 | **Số điện thoại** | Text input | Có | Có (theo điều kiện trên) | Phải là số hợp lệ (tối thiểu 10 chữ số). Có thể thêm kiểm tra định dạng số Việt Nam. |
| 10 | **Email** | Text input | Có | Có (theo điều kiện trên) | Kiểm tra định dạng email hợp lệ. |
| 11 | **Địa chỉ** | Text input | Có | Có (theo điều kiện trên) | Không được bỏ trống nếu người dùng muốn xuất HĐ. |
| 12 | **Nút “Quay lại”** | Button | Có | Không | Quay lại bước 1 để thay đổi lựa chọn. Không mất dữ liệu nhập ở bước 2. |
| 13 | **Nút “Tiếp tục”** | Button | Có | Có | Chỉ cho phép thao tác khi: đã upload biên lai thanh toán **và** nếu khai báo thông tin xuất hóa đơn thì **phải điền đầy đủ tất cả các trường**. Nếu vi phạm thì nút này bị disable. |

## Bước 3: Bổ sung hồ sơ

|  | Tên Trường | Loại dữ liệu / Loại field | Cho phép thao tác? | Bắt buộc nhập liệu? | Mô tả |
| --- | --- | --- | --- | --- | --- |
| 1 | **Mẫu đăng ký** | Link / Văn bản có thể tải | Không | Không | File mẫu đăng ký hóa đơn điện tử cho doanh nghiệp.  Hiển thị dưới dạng link; khi click sẽ tải file từ server (dạng PDF hoặc DOC). |
| 2 | **Thông tin hướng dẫn chụp ảnh giấy tờ** | Văn bản tĩnh | Không | Không | Hướng dẫn người dùng chụp ảnh rõ nét, không mờ/cắt ghép.  Hiển thị văn bản mô tả; không cần thao tác tương tác. Đảm bảo hiển thị nổi bật và dễ đọc. |
| 3 | **Thông tin các giấy tờ cần tải lên** | Văn bản tĩnh | Không | Không | Danh sách các loại giấy tờ cần upload.  Hiển thị checklist mô tả rõ: CMND/CCCD, ĐKKD, mẫu chữ ký số, mẫu eHoaDon. |
| 4 | **Upload file hồ sơ** | Upload file (multi-files) JPG, PNG, PDF | Có | Có | Cho phép chọn và upload nhiều file hồ sơ.  Chấp nhận file: .jpg, .png, .pdfTối đa mỗi file: 10MBHiển thị tên file đã chọnYêu cầu tối thiểu 1 file để enable nút “Tiếp tục” |
| 5 | **Nút “Chọn file”** | Button | Có | Có | Mở trình chọn file trên máy người dùng.  Nút gọi input type="file"; có thể chọn nhiều file cùng lúc. Nên validate trước khi upload. |
| 6 | **Nút “Tiếp tục”** | Button | Có | Có (chỉ bật khi có file) | Chuyển sang bước tiếp theo trong quy trình.  Mặc định disabled. Chỉ enable khi có ít nhất 1 file hợp lệ được upload. |
| 7 | **Nút “Quay lại”** | Button | Có | Không | Quay về bước 2 của quy trình.  Điều hướng về màn hình trước đó (Bước 2). Không cần kiểm tra dữ liệu trước khi quay lại. |

## Bước 4: Xử lý hồ sơ

Hiển thị trạng thái tiếp nhận hồ sơ

Khu user vào lại màn hình này sẽ hiển thị trạng thái tiếp nhận hồ sơ như sau:

Hồ sơ xử lý thành công

Hồ sơ xử lý thất bại

Bấm vào bổ sung ngay quay về bước tương ứng để bổ sung thông tin và nộp lại hồ sơ.