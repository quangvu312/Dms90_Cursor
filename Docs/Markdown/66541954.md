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

**trueTrả hàng nguyên đơn false800autotoptrue14016**

## **2. Sơ đồ trạng thái**

trueTrả hàng nguyên đơn 9cD5lszwljl9iMBG41tE1false800e43e01d7ebb016c9eeb30ee1a79f8666c3055fa3autotop66541954true

# **Requirement**

## **Tìm kiếm phiếu trả hàng**

| Title | Wireframe | Description |
| --- | --- | --- |
| Màn hình *Xem danh sách trả hàng nguyên đơn* |  | **1. Đường dẫn:** Quản lý mua hàng → Trả hàng nguyên đơn → Tìm kiếm trả hàng   **2. Mô tả:**Cho phép tìm kiếm bằng các thông tin sau:   * Tìm kiếm theo Mã trả hàng: tìm kiếm like thông tin được nhập (tối đa là 20 ký tự dạng string). Mặc định trống. Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Trạng thái:    + Gồm các trạng thái {Khởi tạo/Chờ duyệt/Đã duyệt/Đã hủy/Đã từ chối}.   + Mặc định chọn Khởi tạo, Chờ duyệt, và Đã duyệt.   + Cho phép chọn nhiều trạng thái.   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Mã phiếu nhập kho: Khi nhấn vào sẽ load hết phiếu nhập kho thoả các điều kiện sau:   + Có nguồn nhập = Đơn hàng   + Trạng thái phiếu = "Đã duyệt" * Ngày trả hàng: Cho phép chọn Từ ngày - Đến ngày: mặc định trống   + "Đến ngày" chỉ được chọn từ "Từ ngày" trở đi, ví dụ: "Từ ngày" = 12/12/2024 → "Đến ngày" chỉ được chọn từ ngày 12/12 trở đi (13/12, 14/12, ... ) * Tìm kiếm: khi nhấn vào sẽ tìm kiếm dữ liệu theo các thông tin được nhập/chọn. |

## **Xem danh sách phiếu trả hàng**

| Title | Wireframe | Description |
| --- | --- | --- |
| Màn hình *Xem danh sách trả hàng nguyên đơn* |  | **1. Đường dẫn****:**Quản lý mua hàng → Trả hàng nguyên đơn   **2. Mô tả:**Màn hình Xem sanh sách trả hàng nguyên đơn bao gồm các thông tin:   * Tìm kiếm: * Danh sách phiếu trả hàng sắp xếp theo thứ tự ngày tạo mới nhất đến cũ nhất, bao gồm:   + Mã trả hàng   + Ngày trả hàng   + Mã phiếu nhập kho   + Trạng thái   + Ngày tạo   + Ngày cập nhật   + Người tạo   + Người cập nhât   + Tùy chỉnh     - Chỉnh sửa     - Duyệt     - Hủy   + Phân trang theo {10; 50; 100} |

## **Tạo mới**

| Title | Wireframe | Description |
| --- | --- | --- |
| Màn hình *Tạo mới phiếu trả hàng* |  | **1. Đường dẫn****:**Quản lý mua hàng → Trả hàng nguyên đơn → Tạo mới   **2. Mô tả:**Màn hình Tạo mới phiếu trả hàng nguyên đơn bao gồm các thông tin:   * **Ngày trả hàng** *[datepicker]*:   + Mặc định ngày hiện tại, cho phép chọn ngày quá khứ, không cho phép chọn ngày tương lai.   + Bắt buộc nhập * **Mã phiếu nhập kho** *[dropdown, single choice]*:   + Bắt buộc chọn   + Chỉ cho phép chọn các phiếu nhập kho của NPP login thỏa tất cả điều kiện:     - Có trạng thái "Đã duyệt"     - Nguồn nhập = Đơn hàng     - Ngày nhập hàng trước/bằng ngày trả hàng được chọn.     - Không tồn tại trong phiếu trả hàng khác (ngoại trừ phiếu "Đã từ chối"/"Đã hủy"). * **Kho**: Lấy thông tin kho nhập hàng tương ứng trên phiếu nhập hàng của đơn. * **Kênh**: Lấy thông tin kênh nhập hàng tương ứng trên phiếu nhập hàng của đơn. * **Nhà phân phối trực thuộc**: Lấy NPP cấp trên của NPP trả hàng. * **Danh sách sản phẩm**: Lấy thông tin danh sách sản phẩm gồm các thông tin:   + **Mã SKU:**Mã SKU của sản phẩm trên đơn.   + **Tên sản phẩm:**Tên của sản phẩm trên đơn.   + **Đơn vị tính:**Đơn vị của sản phẩm trên đơn.   + **Số lượng:**Số lượng của sản phẩm trên đơn.   + **Thông tin lô:**Hiển thị thông tin lô của sản phẩm tương ứng trên đơn.     - **Số lượng:** Số lượng của lô sản phẩm trên đơn.     - **Số lô:**Tên lô sản phẩm trên đơn.     - **Hạn sử dụng:**Hạn sử dụng của lô sản phẩm trên đơn.     - Nút **"Đóng"** → Đóng Popup Thông tin Lô và quay về **Table Sản phẩm trả thưởng** * **Danh sách CTKM**: Hiển thị thông tin danh sách CTKM có hình thức tặng sản phẩm.    + **Tên chương trình khuyến mãi:**Tên CTKM được áp dụng trên đơn.   + **Thể lệ chương trình:**Click vào icon infor → hiển thị Thể lệ thống tin CTKM.   + **Kho xuất hàng khuyến mãi:** Mặc định hiển thị tên kho xuất hàng khuyến mãi. Người dùng chỉ xem, không được thay đổi.   + **Danh sách sản phẩm trả thưởng**: Chỉ hiển thị các sản phẩm có số lượng > 0      - **Mã sản phẩm:** Mã SKU của sản phẩm trả thưởng trên đơn.     - **Tên sản phẩm:**  Tên sản phẩm trả thưởng trên đơn.     - **Số lượng:** Hiển thị số lượng sản phẩm trả thưởng     - **Đơn vị:** Hiển thị đơn vị sản phẩm được chọn khi áp dụng khuyến mãi.     - **Thông tin lô:** Khi click vào → hiển thị Popup Thông tin lô với:       * **Số lượng:**Số lượng của lô sản phẩm trả thưởng tương ứng trên đơn.       * **Số lô:** Tên lô sản phẩm trả thưởng tương ứng.       * **Hạn sử dụng:** Hạn sử dụng của lô sản phẩm trả thưởng tương ứng.       * Nút **"Đóng"** → Đóng Popup Thông tin Lô và quay về **Table Sản phẩm trả thưởng** * Nút **Lưu**: Khi nhấn lưu hệ thống thực hiện kiểm tra và xử lý:   + Kiểm tra:     - Thực hiện kiểm tra danh sách sản phẩm theo**[Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)     - Nếu chưa nhập các thông tin bắt buộc thì báo lỗi dưới line của trường đó với thông báo *"Trường <a> là bắt buộc"*. Với <a> là tên trường.     - Nếu có sẵn trong tồn kho của sản phẩm mua/sản phẩm khuyến mãi không đủ (bé hơn số lượng trên đơn hàng) → báo lỗi: "*Tồn kho không đủ để trả hàng."*   + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý:       * + Lưu thông tin tạo mới.         + Hệ thống thực hiện tạo dòng dữ liệu phiếu trả hàng nguyên đơn với trạng thái **Khởi tạo**.         + Cập nhật tồn kho theo **Quy tắc cập nhật tồn kho khi tạo mới**     - Nếu đóng: thực hiện đóng popup xác nhận. * Nút **Đóng**: Click vào nút → hệ thống hiển thị popup yêu cầu xác nhận    + Nếu chọn Đồng ý: Hệ thống thực hiện đóng popup tạo mới và trở về màn hình danh sách trả hàng nguyên đơn   + Nếu chọn Hủy: Hệ thống thực hiện đóng popup xác nhận |

## **Chỉnh sửa**

| Title | Wireframe | Descriptiđơnđơn |
| --- | --- | --- |
| Chỉnh sửa phiếu trả hàng |  | Cập nhật phiếu trả hàng nguyên đơn  hiển thị giống màn hình tạo mới mới nhưng có các thay đổi gồm:   * + "**Tạo mới phiếu trả hàng nguyên đơn**" đổi thành "**Cập nhật phiếu trả hàng nguyên đơn**".   + Khi đổi lựa chọn Mã phiếu nhập kho → hệ thống tự động cập nhật thông tin trong phiếu trả nguyên đơn (bao gồm cả danh sách sản phẩm khuyến mãi).   + Thêm nút "**Lưu & Duyệt**": khi click vào nút → hệ thống thực hiện     - Thực hiện kiểm tra danh sách sản phẩm theo**[Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)     - Cập nhật thông tin phiếu trả hàng     - Chuyển trạng thái trả hàng sang **Chờ duyệt**.     - Cập nhật tồn kho theo **Quy tắc cập nhật tồn kho sau khi chỉnh sửa**   + Sau khi nhấn Lưu, hệ thống thực hiện     - Cập nhật thông tin phiếu trả hàng     - Cập nhật danh sách sản phẩm khuyến mãi trả hàng     - Cập nhật tồn kho theo **Quy tắc cập nhật tồn kho sau khi chỉnh sửa** |

## **Xem chi tiết**

| Title | Wireframe | Description |
| --- | --- | --- |
| Màn hình *Xem chi tiết phiếu trả hàng* |  | **1. Đường dẫn****:**Quản lý mua hàng → Trả hàng nguyên đơn → Chọn xem chi tiết phiếu bất kì trên danh sách  **2. Mô tả:**Màn hình Xem chi tiết bao gồm các thông tin:   * **Ngày trả hàng** * **Mã phiếu nhập kho** * **Kho** * **Kênh** * **Nhà phân phối trực thuộc** * **Trạng thái:** Trạng thái của phiếu, bao gồm các trạng thái {Khởi tạo/Chờ duyệt/Đã duyệt/Đã hủy/Đã từ chối}. * **Danh sách sản phẩm**   + **Mã SKU:**Mã SKU của sản phẩm trên đơn.   + **Tên sản phẩm:**Tên của sản phẩm trên đơn.   + **Đơn vị tính:**Đơn vị của sản phẩm trên đơn.   + **Số lượng:**Số lượng của sản phẩm trên đơn.   + **Thông tin lô:**Hiển thị thông tin lô của sản phẩm tương ứng trên đơn.     - **Số lượng:** Số lượng của lô sản phẩm trên đơn.     - **Số lô:**Tên lô sản phẩm trên đơn.     - **Hạn sử dụng:**Hạn sử dụng của lô sản phẩm trên đơn.     - Nút **"Đóng"** → Đóng Popup Thông tin Lô và quay về **Table Sản phẩm trả thưởng** * **Danh sách CTKM**: Hiển thị thông tin danh sách CTKM có hình thức tặng sản phẩm.   + **Tên chương trình khuyến mãi**   + **Thể lệ chương trình:**Click vào icon infor → hiển thị Thể lệ thống tin CTKM.   + **Kho xuất hàng khuyến mãi**   + **Danh sách sản phẩm trả thưởng**     - **Mã sản phẩm:** Mã SKUtoon của sản phẩm trả thưởng trên đơn.     - **Tên sản phẩm:**  Tên sản phẩm trả thưởng trên đơn.     - **Số lượng:** Hiển thị số lượng sản phẩm trả thưởng     - **Đơn vị:** Hiển thị đơn vị sản phẩm được chọn khi áp dụng khuyến mãi.     - **Thông tin lô:** Khi click vào → hiển thị Popup Thông tin lô với:       * **Số lượng:**Số lượng của lô sản phẩm trả thưởng tương ứng trên đơn.       * **Số lô:** Tên lô sản phẩm trả thưởng tương ứng.       * **Hạn sử dụng:** Hạn sử dụng của lô sản phẩm trả thưởng tương ứng.       * Nút **"Đóng"** → Đóng Popup Thông tin Lô và quay về **Table Sản phẩm trả thưởng** * Nút **Đóng**: Click vào nút → Hệ thống thực hiện đóng popup xem chi tiết. |

## **Duyệt phiếu trả hàng nguyên đơn**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Mua hàng -> Điểm bán trả lẻ  -> Chọn nút Duyệt một phiếu trả hàng nguyên đơn  trên danh sách |
| Duyệt phiếu trả hàng nguyên đơn | N/A | Xử lý: Hiển thị popup "Xác nhận duyệt phiếu trả hàng nguyên đơn" ngay trên nút:   * + Xử lý: Hiển thị popup xác nhận ngay trên nút:     - Nếu đồng ý: Hệ thống thực hiện       * Thực hiện kiểm tra danh sách sản phẩm theo **[Quy tắc Thêm/Sửa/Duyệt sản phẩm in-active](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48445181)**(nếu vượt qua thì mới thực hiện các bước tiếp theo)       * Chuyển trạng thái trả hàng sang **Chờ duyệt**.     - Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được duyệt phiếu trả hàng có trạng thái Khởi tạo |

## **Hủy phiếu trả hàng nguyên đơn**

| Title | User interaction and wireframe | Description |
| --- | --- | --- |
| Đường dẫn |  | Quản lý mua hàng → Trả hàng nguyên đơn → Chọn huỷ phiếu trả hàng nguyên đơn trên danh sách |
|  | N/A | Khi nhấn vào hệ thống thực hiện xử lý:   * Xử lý: Hiển thị popup Xác nhận hủy phiếu trả hàng ngay trên nút:   + Nếu đồng ý: Hiển thị popup nhập Lý do hủy và bắt buộc phải nhập lý do với thông báo "Vui lòng nhập lý do":     - Nhấn Hoàn tất:       * Hệ thống thực hiện cập nhật trạng thái phiếu trả hàng nguyên đơn sang **Đã hủy**       * Cập nhật tồn kho theo **Quy tắc cập nhật tồn kho khi hủy**     - Nhấn Hủy: Hệ thống thực hiện đóng popup, không thực hiện cập nhật.   + Nếu đóng: thực hiện đóng popup xác nhận.   **Lưu ý:** Chỉ được hủy phiếu trả hàng nguyên đơn có trạng thái Khởi tạo |

# **Rules**

## **Quy tắc cập nhật tồn kho khi Tạo mới** **[NPP] Trả hàng nguyên đơn HO#create**

1. Quy đổi số lượng sản phẩm của các lô sang đơn vị cơ bản nếu đơn vị tính trên phiếu là đơn vị quy đổi.
2. Thực hiện cập nhật số lượng trong kho như sau:
   * Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng trên phiếu với quy tắc: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trên phiếu
   * Cập nhật số lượng "Tạm giữ" của từng lô trong kho với công thức: Tạm giữ  = Tồn kho - Tạm giữ hiện tại

## **Quy tắc cập nhật tồn kho khi Chỉnh sửa****[NPP] Trả hàng nguyên đơn HO#edit**

1. Thực hiện trả lại số lượng sản phẩm đã tạm giữ trước đó.
2. Quy đổi số lượng sản phẩm của các lô sang đơn vị cơ bản nếu đơn vị tính trên phiếu là đơn vị quy đổi.
3. Thực hiện cập nhật số lượng trong kho như sau:
   * Trừ số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng được nhập trong phiếu xuất kho với công thức: "Có sẵn" = "Có sẵn" hiện tại - Số lượng trong phiếu.
   * Cập nhật số lượng "Tạm giữ" của từng lô trong kho với công thức: Tạm giữ  = Tồn kho - Tạm giữ hiện tại

## **Quy tắc cập nhật tồn kho khi Hủy [NPP] Trả hàng nguyên đơn HO#reject**

Sau khi huỷ phiếu, hệ thống thực hiện trả lại số lượng sản phẩm Tạm giữ trong tồn kho theo quy tắc sau:

* Cộng số lượng "Có sẵn" của từng lô trong kho tương ứng với số lượng trong phiếu.
* Trừ số lượng "Tạm giữ" của từng lô trong kho tương ứng với số lượng trong ph