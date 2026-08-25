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

## **Requirements**

### **Chốt sổ**

| Title | UI | Description |
| --- | --- | --- |
| Màn hình Chốt sổ |  | **Đường dẫn:** Quản trị hệ thống → Khóa chốt sổ  **Mô tả:**Màn hình Chốt sổ bao gồm các thông tin sau   * **Nhà phân phối** *[dropdown, bắt buộc]*:     + Khi nhấn vào sẽ load hết danh sách NPP trực thuộc HO đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Nhà phân phối, danh sách hiển thị với các thông tin gồm Mã NPP - Tên NPP.   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên NPP.   + Chỉ được chọn 1   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Mặc định trống. * ~~**Tháng khoá sổ***[datepicker, bắt buộc]*:~~   + ~~Chỉ được chọn tháng từ sau tháng đang khoá sổ gần nhất của NPP được chọn, ví dụ: tháng khoá sổ hiện tại của NPP A là 1/2025 → chỉ được chọn từ tháng 2/2025 trở đi~~   + ~~Hiển thị theo format: mm/yyyy~~ * **Khoá sổ** *[button]*:   + Chỉ khoá sổ thành công khi tất cả các đơn hàng/phiếu sau ở trạng thái cuối cùng, cụ thể:     - Đơn sell-out: Trạng thái "Đã xuất kho"/ "Đã huỷ"     - Phiếu nhập hàng: Trạng thái "Đã duyệt"/"Đã huỷ"     - Phiếu xuất kho: Trạng thái "Đã duyệt"/"Đã huỷ"     - Phiếu trả hàng công ty: Trạng thái "Đã duyệt"/"Đã huỷ"/"Đã từ chối"     - Phiếu điểm bán trả hàng nguyên đơn: Trạng thái "Đã duyệt"/"Đã huỷ"     - Phiếu điểm bán trả lẻ: Trạng thái "Đã duyệt"/"Đã huỷ"     - Phiếu kiểm kho: Trạng thái "Hoàn thành"/"Đã huỷ"/"Đã từ chối"     - Phiếu chuyển kho nội bộ: Trạng thái "Đã duyệt"/"Đã huỷ"     - Phiếu chuyển kho vansale: Trạng thái "Đã duyệt"/"Đã huỷ"     - Phiếu chuyển kho NPP: Trạng thái "Hoàn thành"/"Đã huỷ"/"Đã từ chối"        * Bao gồm cả phiếu chuyển kho NPP có NPP nhận là NPP được chọn khoá sổ   + Khi click vào button → hệ thống thực hiện kiểm tra điều kiện trên:     - Nếu thoả điều kiện → hệ thống hiển thị popup yêu cầu xác nhận       * **Text**: *"Bạn chắc chắn muốn khoá sổ tháng {tháng khoá sổ hiện tại}* của *{Tên NPP được chọn}?"*       * **Đồng ý** *[button]*: Click vào nút này → hệ thống thực hiện         + Khoá sổ cho NPP ở tháng được chọn         + Tại danh sách khoá sổ → thay đổi các thông tin:           - Tháng khoá sổ: → tháng được chọn tại trường **Tháng khoá sổ**           - Thời gian khoá sổ: Thời gian thực hiện khoá sổ, theo format: dd/mm/yyyy hh:mm:ss           - Người khoá sổ: Username của người thực hiện khoá sổ     - Nếu không thoả điều kiện → hệ thống báo lỗi: *"Tồn tại [Tên phiếu 1], [Tên phiếu 2] chưa hoàn tất. Vui lòng xử lý trước khi chốt sổ."* (liệt kê các loại phiếu/loại đơn hàng chưa hoàn tất, ngăn cách bằng dấu ",") * **Danh sách khoá sổ:**   + **Mã nhà phân phối:**Mã nhà phân phối khoá sổ   + **Tên nhà phân phối:** Tên nhà phân phối khoá sổ   + **Thời gian khoá sổ:**Thời gian thực hiện khoá sổ, theo format: hh:mm:ss dd/mm/yyyy   + **Người khoá sổ:**Người thực hiện khoá sổ, lấy username của người dùng   + **Tháng khoá sổ:**Tháng khoá sổ hiện tại của NPP, hiển thị theo format: mm/yy   **Lưu ý:** Khi chọn NPP → hệ thống hiển thị message: "Nhà phân phối {Tên NPP} đã khóa sổ đến tháng {Tháng khóa sổ của NPP}. Tháng tiếp theo sẽ được khóa: {Tháng khóa sổ +1}." |

### Mở chốt sổ

| Title | UI | Description |
| --- | --- | --- |
|  |  | **Đường dẫn:** Quản trị hệ thống → Mở chốt sổ  **Mô tả:**   * **Nhà phân phối** *[dropdown, bắt buộc]*:    + Khi nhấn vào sẽ load hết danh sách NPP trực thuộc HO đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Nhà phân phối, danh sách hiển thị với các thông tin gồm Mã NPP - Tên NPP.   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Mã, Tên NPP.   + Chỉ được chọn 1   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Mặc định trống. * **Mở khoá sổ** *[button]*:   + Chỉ được mở khoá tuần tự từ tháng khoá sổ gần nhất trở về trước, ví dụ NPP A đang khoá sổ tháng 2/2025 → khi thực hiện mở khoá sổ thì hệ thống chỉ mở khoá sổ tháng 2/2025 → tháng khoá sổ lúc này là tháng 1/2025   + Khi click vào button → hệ thống hiển thị popup yêu cầu xác nhận     - **Text**: *"Bạn chắc chắn muốn mở khoá sổ tháng {tháng khoá sổ hiện tại}* của *{Tên NPP được chọn}?"*     - **Đồng ý** *[button]*: Click vào nút này → hệ thống thực hiện mở khoá sổ tháng cho NPP được chọn        * Tại danh sách khoá sổ         + Tháng khoá sổ chuyển thành tháng gần nhất đang được khoá sổ         + Thời gian khoá sổ chuyển thành thời gian khóa sổ tháng gần nhất đang được khóa         + Người khoá sổ chuyển thành người khóa sổ tháng gần nhất đang được khóa     - **Huỷ***[button]*: Click vào nút này → hệ thống đóng popup xác nhận   **Lưu ý:** Khi chọn NPP → hệ thống hiển thị message: "Tháng sẽ được mở khóa tiếp theo cho Nhà phân phối {Tên NPP}: {Tháng khóa sổ}" |

### Kiểm tra thời gian trong đơn hàng/phiếu với tháng khoá sổ

|  |  |  |
| --- | --- | --- |
|  | N/A | Khi người dùng click "Lưu" để tạo một đơn hàng hoặc phiếu, hệ thống thực hiện kiểm tra trường thông tin ngày trong đơn/phiếu có thuộc tháng đã bị khóa sổ không   * Nếu không, hệ thống thực hiện kiểm tra các rule khác vào tạo đơn/phiếu * Nếu có, hệ thống hiển thị thông báo lỗi và không cho phép tạo đơn/phiếu.   + **Thông báo lỗi:** "Tháng *{tháng}/{năm}* đã bị khóa sổ. Vui lòng chọn *{Tên trường chọn ngày}* khác." * Các đơn hàng/phiếu cần thực hiện kiểm tra khóa sổ bao gồm:    + Đơn sell-out   + Phiếu nhập hàng   + Phiếu xuất kho   + Phiếu trả hàng công ty   + Phiếu điểm bán trả hàng nguyên đơn   + Phiếu điểm bán trả lẻ   + Phiếu kiểm kho   + Phiếu chuyển kho nội bộ   + Phiếu chuyển kho vansale   + Phiếu chuyển kho NPP |