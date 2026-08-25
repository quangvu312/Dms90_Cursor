true

|

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

## **1. Flowchart**

**trueTrả hàng nguyên đơn false800autotoptrue14011**

## **2. Sơ đồ trạng thái**

trueTrả hàng nguyên đơn 9cD5lszwljl9iMBG41tE1false800e43e01d7ebb016c9eeb30ee1a79f8666c3055fa3autotop66541954true

# **Requirement**

## **Tìm kiếm phiếu trả hàng**

| Title | Wireframe | Description |
| --- | --- | --- |
| Màn hình *Xem danh sách trả hàng nguyên đơn* |  | **1. Đường dẫn:** Quản lý kho → Duyệt NPP trả hàng nguyên đơn → Tìm kiếm trả hàng   **2. Mô tả:**Cho phép tìm kiếm bằng các thông tin sau:   * Tìm kiếm theo Mã trả hàng: tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Mã phiếu nhập kho: Khi nhấn vào sẽ load hết phiếu nhập kho thoả các điều kiện sau:   + Có nguồn nhập = Đơn hàng   + Trạng thái phiếu = "Đã duyệt" * Nhà phân phối: Khi nhấn vào sẽ load hết danh sách NPP trực thuộc HO đang login    + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên NPP.   + Cho phép chọn nhiều NPP.   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Mặc định trống. * Trạng thái:    + Gồm các trạng thái {Chờ duyệt/Đã duyệt/Đã từ chối}.   + Cho phép chọn nhiều trạng thái.   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Ngày trả hàng: Cho phép chọn Từ ngày - Đến ngày: mặc định trống   + "Đến ngày" chỉ được chọn từ "Từ ngày" trở đi, ví dụ: "Từ ngày" = 12/12/2024 → "Đến ngày" chỉ được chọn từ ngày 12/12 trở đi (13/12, 14/12, ... ) * Tìm kiếm: khi nhấn vào sẽ tìm kiếm dữ liệu theo các thông tin được nhập/chọn. |

## **Xem danh sách phiếu trả hàng**

| Title | Wireframe | Description |
| --- | --- | --- |
| Màn hình *Xem danh sách trả hàng nguyên đơn* |  | **1. Đường dẫn****:** Quản lý kho → Duyệt NPP trả hàng nguyên đơn  **2. Mô tả:**Màn hình Xem sanh sách trả hàng nguyên đơn bao gồm các thông tin:   * Tìm kiếm: * Danh sách phiếu trả hàng sắp xếp theo thứ tự ngày tạo mới nhất đến cũ nhất, bao gồm:   + Mã trả hàng   + Ngày trả hàng   + Mã phiếu nhập kho   + Nhà phân phối: Hiển thị theo format: Mã - Tên NPP.   + Trạng thái   + Ngày tạo   + Ngày cập nhật   + Người tạo   + Người cập nhât   + Tùy chỉnh      - Duyệt     - Từ chối   + Phân trang theo {10; 50; 100} |

## **Xem chi tiết**

| Title | Wireframe | Description |
| --- | --- | --- |
| Màn hình *Xem chi tiết phiếu trả hàng* |  | **1. Đường dẫn****:** Quản lý kho → Duyệt NPP trả hàng nguyên đơn → Chọn xem chi tiết phiếu bất kì trên danh sách  **2. Mô tả:**Màn hình Xem chi tiết bao gồm các thông tin:   * **Ngày trả hàng** * **Mã phiếu nhập kho** * **Kho** * **Kênh** * **Nhà phân phối**: Nhà phân phối gửi phiếu trả hàng. * **Trạng thái**: Trạng thái của phiếu * **Danh sách sản phẩm**   + **Mã SKU:**Mã SKU của sản phẩm trên đơn.   + **Tên sản phẩđom:** Tên của sản phẩm trên đơn.   + **Đơn vị tính:**Đơn vị của sản phẩm trên đơn.   + **Số lượng:**Số lượng của sản phẩm trên đơn.   + **Thông tin lô:**Hiển thị thông tin lô của sản phẩm tương ứng trên đơn.     - **Số lượng:** Số lượng của lô sản phẩm trên đơn.     - **Số lô:**Tên lô sản phẩm trên đơn.     - **Hạn sử dụng:**Hạn sử dụng của lô sản phẩm trên đơn.     - Nút **"Đóng"** → Đóng Popup Thông tin Lô và quay về **Table Sản phẩm trả thưởng** * **Danh sách CTKM**: Hiển thị thông tin danh sách CTKM có hình thức tặng sản phẩm.   + **Tên chương trình khuyến mãi**   + **Thể lệ chương trình:**Click vào icon infor → hiển thị Thể lệ thống tin CTKM.   + **Kho xuất hàng khuyến mãi**   + **Danh sách sản phẩm trả thưởng**     - **Mã sản phẩm:** Mã SKU của sản phẩm trả thưởng trên đơn.     - **Tên sản phẩm:**  Tên sản phẩm trả thưởng trên đơn.     - **Số lượng:** Hiển thị số lượng sản phẩm trả thưởng     - **Đơn vị:** Hiển thị đơn vị sản phẩm được chọn khi áp dụng khuyến mãi.     - **Thông tin lô:** Khi click vào → hiển thị Popup Thông tin lô với:       * **Số lượng:**Số lượng của lô sản phẩm trả thưởng tương ứng trên đơn.       * **Số lô:** Tên lô sản phẩm trả thưởng tương ứng.       * **Hạn sử dụng:** Hạn sử dụng của lô sản phẩm trả thưởng tương ứng.       * Nút **"Đóng"** → Đóng Popup Thông tin Lô và quay về **Table Sản phẩm trả thưởng** * Nút **Đóng**: Click vào nút → Hệ thống thực hiện đóng popup xem chi tiết. |

## **Duyệt phiếu trả hàng nguyên đơn**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Quản lý kho → Duyệt NPP trả hàng nguyên đơn → Chọn duyệt một phiếu bất kì trên danh sách |
| Duyệt phiếu trả hàng nguyên đơn | N/A | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu trả hàng nguyên đơn " ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * Thực hiện kiểm tra danh sách sản phẩm theo**[Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)       * Chuyển trạng thái trả hàng sang **Đã duyệt**.       * Cập nhật tồn kho của NPP theo **Quy tắc cập nhật tồn kho sau khi duyệt phiếu trả hàng**       * Thực hiện Revert Promotion tương ứng với đơn sellin đã trả hàng     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt phiếu trả hàng có trạng thái **Chờ duyệt** |

## **Từ chối phiếu trả hàng nguyên đơn**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Quản lý kho → Duyệt NPP trả hàng nguyên đơn → Chọn từ chối phiếu bất kì trên danh sách |
|  | N/A | Khi nhấn vào hệ thống thực hiện xử lý:   * Xử lý: Hiển thị popup Xác nhận từ chối phiếu trả hàng ngay trên nút:   + Nếu đồng ý: Hiển thị popup nhập Lý do từ chối và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất:       * Hệ thống thực hiện cập nhật trạng thái phiếu trả hàng nguyên đơn sang **Đã từ chối**       * Cập nhật tồn kho theo **Quy tắc cập nhật tồn kho khi từ chối**     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được hủy phiếu trả hàng nguyên đơn có trạng thái **Chờ duyệt**. |

# **Rules**

## **Quy tắc cập nhật tồn kho khi Duyệt [HO] Duyệt trả hàng nguyên đơn#approve**

Thực hiện cập nhật số lượng trong kho của NPP như sau:

* Trừ số lượng "Tồn kho" của từng lô trong kho tương ứng với số lượng trong phiếu trả hàng.
* Trừ số lượng "Tạm giữ" của từng lô trong kho tương ứng với số lượng trong phiếu trả hàng.

## **Quy tắc cập nhật tồn kho khi Từ chối [HO] Duyệt trả hàng nguyên đơn#deny**

Sau khi từ chối phiếu, hệ thống thực hiện trả lại số lượng sản phẩm Tạm giữ trong tồn kho theo quy tắc sau:

* Cộng số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng trong phiếu.
* Trừ số lượng "Tạm giữ" của từng lô trong kho tương ứng với số lượng trong phiếu.