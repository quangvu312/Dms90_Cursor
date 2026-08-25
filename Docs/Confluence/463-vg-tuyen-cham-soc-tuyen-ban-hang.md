|  |  |
| --- | --- |
| Title | **Tính năng "Tuyến chăm sóc" cho Vigo  (phase 1 + PHASE 2)** |
| Document version | RedV1.1.0 |
| Document status | Greenin review |
| Document owner |  |
| Chage History | 2 |

# **1/ Lịch sử tài liệu**

| **Version** | **Publish** | **Changed by** | **Mô tả** |
| --- | --- | --- | --- |
| 1.0 | 25/07/2026 | Vu | Đổi tên "Tuyến bán hàng" → "Tuyến chăm sóc" , NPP → Đại lý , Điểm bán → khách hàng  Thêm thuộc tính sản phẩm, thêm action "Duplicate"  Bỏ rule ràng buộc check trùng |

# **2/ Thông tin chung**

**Tiêu đề** : Tài liệu mô tả thay đổi tính năng tuyến chăm sóc ( tuyến bán hàng cũ )

**Đường dẫn :** Quản lý tuyến chăm sóc → Tuyến chăm sóc

**Doc chi tiết tính năng** : [HO] Tuyến bán hàng

**Nội dung thay đổi**:

* **Rename** : (All page, filter, header, Title, Column...)

* + "Quản lý tuyến bán hàng" → "Quản lý tuyến chăm sóc" , "Tuyến bán hàng" → "Tuyến chăm sóc"
  + "NPP" → "Đại lý"
  + "Điểm bán" → "Khách hàng"
* **Thêm mới tuyến**
  + Thêm trường thông tin "Thuộc tính sản phẩm"
* **Danh sách tuyển**
  + Thêm Action "Duplicate" ở Tùy chỉnh để copy Tuyến

# **3/ Mô tả tính năng**

|  | **Tính năng** | **Mã FR** | **Mô tả** |
| --- | --- | --- | --- |
| **1** | **Bỏ rule check trùng** | **AC\_US\_01    (phase 1)** | Bỏ rule check trùng nhãn, điểm bán |
| **2** | **Danh sách tuyến chăm sóc** | **AC\_US\_02    (phase 1)** | Đổi tên và thêm tính năng copy tuyến |
| **3** | **Tạo tuyến chăm sóc** | **AC\_US\_03    (phase 2)** | * Đại lý (Nhà phân phối) mặc định chỉ có 1 là ERP * Thêm trường thông tin "Thuộc tính sản phẩm" |
| **4** | **Config check trùng** | **AC\_US\_04    (phase 2)** | Tạo config check trùng ở dữ liệu chung để quản lý |

## 3.1 Bỏ Rule check trùng

**Hiện tại** : Trong cùng thời điểm áp dụng Không thể tạo 2 tuyến chăm sóc có cùng điểm bán và cùng nhãn hàng ( rule check trùng : [HO][HT] Tuyến bán hàng ) 

**Mục tiêu :** Vigo mong muốn 1 điểm bán có thể được chăm sóc bởi nhiều nhân viên (có thể trùng nhãn hàng)

**Nội dung thay đổi** : Bỏ rule check trùng nhãn, điểm bán. Cho phép user tạo tuyến chăm sóc tự do, ko ràng buộc

**Tính năng liên quan** : Tạo mới Tuyến, Edit Tuyến, Import, gán điểm bán.

**Ví dụ minh họa :**

|  | **Case** | **Hiện tại** | **Expect** |
| --- | --- | --- | --- |
| 1 | ***Trong hệ thống đã có:***   | Tuyến | Đại lý | Sale | Brand | Khách hàng | | --- | --- | --- | --- | --- | | Tuyến A | ERP | Nguyễn Văn A | Coca | Shop ABC |   ***Người dùng tạo thêm hoặc edit, import:***   | Tuyến | Đại lý | Sale | Brand | Khách hàng | | --- | --- | --- | --- | --- | | Tuyến B | ERP | Nguyễn Văn A | Coca | Shop ABC | | ❌ **Không được phép lưu.**  **Hiện error báo lỗi** | ✅ **Được phép lưu.** |
| 2 | ***Trong hệ thống đã có:***   | Tuyến | Đại lý | Sale | Brand | Khách hàng | | --- | --- | --- | --- | --- | | Tuyến A | ERP | Nguyễn Văn A | Coca | Shop ABC |   ***Người dùng tạo thêm hoặc edit, import:***   | Tuyến | Đại lý | Sale | Brand | Khách hàng | | --- | --- | --- | --- | --- | | Tuyến B | ERP | Trần Quang Đại | Coca | Shop ABC | | ❌ **Không được phép lưu.**  **Hiện error báo lỗi** | ✅ **Được phép lưu.** |

## 3.2 Màn hình Danh sách Tuyến chăm sóc (List)

**\*\* Thay đổi cho Vigo :**

* **Đổi tên**
  + "Quản lý tuyến bán hàng" → "Quản lý tuyến chăm sóc" , "Tuyến bán hàng" → "Tuyến chăm sóc"
  + "NPP" → "Đại lý"
  + "Điểm bán" → "Khách hàng"

* **Thêm**
  + Tùy chỉnh : Button "Duplicate"

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Sao chép (Button)  (NEW) | Icon button | Có | Không | Mô tả tính năng sao chép Duplicate bản ghi mớiDuplicate bản ghi mới Tất cả các trạng thái đều cho phép sao chép bản ghi mới. Chọn button  trên danh sách  để sao chép bản ghi mới  **Mô tả Tổng Quan :** Icon "Duplicate": Người dùng sẽ nhấp vào icon để tạo bản sao của Tuyến chăm sóc. Hệ thống sẽ tạo ra một nhân bản mới của Tuyến chăm sóc đó, nhưng không ảnh hưởng đến bản gốc.  **Mục đích sử dụng:** Chức năng này rất hữu ích khi người dùng muốn tạo ra một Tuyến chăm sóc tương tự mà không cần bắt đầu lại từ đầu.  **Chi Tiết Hoạt Động**   * Kích hoạt: Người dùng nhấp vào icon "Duplicate" trên giao diện danh sách Tuyến chăm sóc  * Hiển thị bản sao:    + Hiển thị popup "Sao chép Tuyến chăm sóc" , Thêm mới Tuyến chăm sóc, title màn hình: "Thêm mới"   + Hệ thống sẽ sao chép **toàn bộ thông tin từ Tuyến chăm sóc gốc ngoại trừ thông tin nhân viên và tạo thành một bản sao, trong đó Mã Tuyến chăm sóc và Tiêu đề sẽ nối chuối thêm chữ "Copy". Ví dụ: Mã Tuyến chăm sóc-Copy; Tiêu đề-Copy**      - **Trường hợp: autofill-cop nhưng vượt ký tự cho phép của field => lỗi:** **{name} tối đa {length} ký tự!** * Người dùng sẽ thấy một bản sao mới chứa toàn bộ thông tin từ Tuyến chăm sóc gốc. * Cho phép điều chỉnh tất cả các trường dữ liệu trên màn hình như chức năng tạo mới * Hiển thị lỗi inline khi chọn "Tiếp tục" / "Tạo" như mô tả ở chức năng [HO] Tuyến bán hàng * Chỉnh sửa bản sao (nếu cần): Sau khi sao chép, người dùng có thể [chỉnh sửa các thông tin trong bản sao](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028714#id-[HO]Kh%E1%BB%9Fit%E1%BA%A1oCTTB-Edit) mà không ảnh hưởng đến Tuyến chăm sóc gốc. * Lưu bản sao: Sau khi đã chỉnh sửa (nếu cần), người dùng nhấn nút "Tạo" để tạo bản sao và lưu vào cơ sở dữ liệu.  - Onclick hiển thị popup confirm    Chọn "Đồng ý" hoàn thành tạo mới  Tuyến chăm sóc    + Nếu chưa nhập dữ liệu cho các field bắt buộc thì show lỗi inline và không pass hoàn thành   + Sau khi kiểm tra thỏa tất cả cả điều kiện => hiển thị thông báo "Lưu thành công" => Hiển thị danh sách  Tuyến chăm sóc. |

## 3.3 Màn hình tạo tuyến chăm sóc (Create new) - PHASE 2

**\*\* Thay đổi cho Vigo :**

* Đại lý (Nhà phân phối) mặc định chỉ có 1 là ERP
* Thêm trường thông tin "Thuộc tính sản phẩm"

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Thuộc tính sản phẩm  (NEW) | Select multichoice | Có | Không | * Cho phép chọn nhiều giá trị từ danh sách "Thuộc tính sản phẩm" (Tính năng này sẽ cập nhật sau) * Có hỗ trợ tính năng tìm kiếm (search) trong dropdown để giúp người dùng lọc nhanh các nhãn hàng cần chọn. * Hiển thị các nhãn đã chọn dạng thẻ (tag), có thể xóa (remove) từng nhãn bằng thao tác click vào dấu "x". * Có dấu tick hiển thị các nhãn đã được chọn trong danh sách dropdown. * Không giới hạn số lượng Thuộc tính sản phẩm có thể chọn cho một tuyến chăm sóc. * Một Thuộc tính sản phẩm có thể được chọn lặp lại ở các tuyến chăm sóc khác nhau: * Trong cùng một tuyến chăm sóc, mỗi "Thuộc tính sản phẩm"  chỉ được chọn duy nhất một lần (không lặp).   **Logic** : Hệ thống lấy tất cả sp thuộc Nhãn hàng "AND" sp thuộc 'Thuộc tính sản phẩm' cho tuyến bán hàng |

## 3.4 Config check trùng - PHASE 2

**Mục tiêu sử dụng** : Tạo config check trùng để sau này dễ handle với những khách hàng có những yêu cầu khác nhau như HT và Vigo

|  | Tên cấu hình | Đối tượng áp dụng | **Từ khóa** | **Loại** | **Giá trị** | Tên nhóm | Mô tả | Nơi sử dụng |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Kiểm tra trùng Nhãn hàng và Điểm bán trên Tuyến bán hàng | trueGreenMOBILEtrueRedAPItrueBluePortal | ROUTE\_DUPLICATE\_  BRAND\_STORE\_CHECK | Boolean | 0 : Tắt check  1: Bật check | Tuyến | Cho phép cấu hình hệ thống có thực hiện kiểm tra **trùng Nhãn hàng + Điểm bán** khi thao tác trên Tuyến bán hàng hay không. | Cấu hình này áp dụng cho các chức năng:   * Tạo mới Tuyến bán hàng * Chỉnh sửa Tuyến bán hàng * Thêm Điểm bán vào Tuyến * Import Tuyến bán hàng |

## TH1. Giá trị = 1 (Mặc định)

Hệ thống thực hiện kiểm tra theo rule check trùng : [HO][HT] Tuyến bán hàng

Nếu tồn tại bản ghi có cùng:

* NPP
* Sales
* Nhãn hàng
* Điểm bán

thì:

* Không cho phép lưu.
* Hiển thị thông báo lỗi.
* Hiển thị danh sách Tuyến đang chứa dữ liệu bị trùng.

---

## TH2. Giá trị = 0

Hệ thống **không thực hiện kiểm tra trùng**.

Cho phép lưu dữ liệu mặc dù:

* cùng NPP
* cùng Sales
* cùng Brand
* cùng Điểm bán

---

# Phạm vi ảnh hưởng

Khi cấu hình được bật (`1`), hệ thống kiểm tra trùng tại:

| Chức năng | Check |
| --- | --- |
| Tạo tuyến | ✅ |
| Chỉnh sửa tuyến | ✅ |
| Thêm điểm bán | ✅ |
| Import Excel | ✅ |
| Chuyển trạng thái Active của tuyến (nếu đang áp dụng rule check) | ✅ |

Việc áp dụng đồng nhất ở tất cả các màn hình sẽ giúp dữ liệu luôn nhất quán với rule hiện có.

## **4/ Tính năng liên quan**

|  | **Tính năng** | **Màn hình** | **Mô tả** |
| --- | --- | --- | --- |
| **1** | **Tuyến chăm sóc** | Tạo mới Tuyến | Bỏ rule check trùng nhãn, điểm bán. Không hiện error báo lỗi khi trùng |
| Edit tuyến, |
| Import tuyến, |
| Import điểm bán |
| Copy điểm bán (new) |