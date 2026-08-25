|  |  |
| --- | --- |
| Issue Link |  |
| Story | <https://hotro.finviet.com.vn/browse/ECD-17> <https://hotro.finviet.com.vn/browse/ECD-18> <https://hotro.finviet.com.vn/browse/ECD-19> <https://hotro.finviet.com.vn/browse/ECD-20> |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0 : Thêm filter theo Vùng và thêm Vùng/Khu vực trên lưới danh sách + file export |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# NHÀ PHÂN PHỐI

Lưu ý

Tất cả dữ liệu ở màn hình này: Filter và danh sách đều phải theo phân quyền dữ liệu và phân quyền theo salesforce

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Nút “Tạo mới” | ·       Nhấn vào nút à hệ thống hiển thị màn hình Tạo mới nhà phân phối được mô tả bên dưới. |
| **Tìm kiếm & Lọc nhà phân phối** | |
| Tìm kiếm | ·       Tìm kiếm like Theo mã nhà phân phối/ tên nhà phân phối. |
| Vùng  RedV1.1.0 | * Mặc định trống <=> Chọn tất cả các vùng * Load tất cả các vùng/khu vực đang hoạt động theo dạng cây phân cấp như sau: * Có thể chọn nhiều vùng/khu vực * Chọn vùng thì mặc định chọn luôn khu vực * Chọn khu vực thì chỉ hiển thị khu vực được chọn * Có thể search theo mã/tên vùng/khu vực để tìm kiếm * Khi chọn vùng/khu vực thì hiển thị dữ liệu dựa trên địa chỉ của NPP mà lọc ra theo vùng/khu vực được chọn |
| Trực thuộc | ·       Mặc định trống.  ·       Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.  ·       Khi nhấn vào sẽ load dữ liệu được lấy từ danh sách nhà phân phối đang hoạt động.  ·       Chỉ cho phép chọn 1.   ·       Cho phép nhập dữ liệu để tìm kiếm like thông tin tên NPP. |
| Tỉnh thành | ·       Khi nhấn vào sẽ load dữ liệu được lấy từ danh sách tỉnh thành theo danh sách cấp Tỉnh/Thành phố của Việt Nam.  ·       Cho phép nhập dữ liệu để tìm kiếm like thông tin theo tên Tỉnh thành.  ·       Chỉ cho phép chọn 1.   ·       Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.  ·       Mặc định trống. |
| Quận huyện | ·       Khi nhấn vào sẽ load dữ liệu danh sách giá trị theo danh sách quận huyện theo tỉnh thành được chọn.  ·       Nếu chưa có Tỉnh thành được chọn thì sẽ hiển thị trống.  ·       Cho phép nhập dữ liệu để tìm kiếm like thông tin theo tên Quận huyện.  ·       Chỉ cho phép chọn 1.   ·       Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.  ·       Mặc định trống. |
| Phường xã | ·       Khi nhấn vào sẽ load dữ liệu danh sách giá trị theo danh sách phường xã theo quận huyện được chọn.  ·       Nếu chưa có Quận huyện được chọn thì sẽ hiển thị trống.  ·       Cho phép nhập dữ liệu để tìm kiếm like thông tin theo tên Phường xã.  ·       Chỉ cho phép chọn 1.  ·       Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.  ·       Mặc định trống. |
| Nút "Tìm kiếm" | ·       Nhấn vào nút à thực hiện tìm kiếm theo điều kiện lọc. |
| Nút "Làm mới" | ·       Reset bộ lọc về giá trị mặc định. |
| **Bảng Danh sách nhà phân phối** | |
| Vùng  RedV1.1.0 | Hiển thị thông tin Vùng của NPP theo địa chỉ NPP |
| Khu vực  RedV1.1.0 | Hiển thị thông tin khu vực của NPP theo địa chỉ NPP |
| Mã nhà phân phối | ·       Hiển thị mã nhà phân phối. |
| Tên nhà phân phối | ·       Hiển thị tên nhà phân phối.  ·       Nhấn vào Tên nhà phân phối à hệ thống hiển thị màn hình xem chi tiết. |
| SĐT | ·       Hiển thị SDT của NPP. |
| Địa chỉ | ·       Hiển thị địa chỉ NPP (đia chỉ, phường xã, quận huyện, tỉnh thành) |
| Tên NPP trực thuộc | ·       Hiển thị tên NPP trực thuộc. |
| Trạng thái | ·       Cho phép cập nhật thông tin, toggle  ¨     ON = Hoạt động  ¨     OFF = Không hoạt động |
| Ngày tạo | ·       Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Ngày cập nhật | ·       Hiển thị định dạng DD-MM-YYYY hh:mm:ss |
| Người tạo | ·       Hiển thị username của tài khoản |
| Người cập nhật | ·       Hiển thị username của tài khoản |
|  | ·       Nhấn vào nút “Chỉnh sửa”→ hiển thị Màn hình chỉnh sửa nhà phân phối. |
| Export  RedV1.1.0 | Template Export bổ sung 2 cột Vùng/Khu vực |

* ## Màn hình tạo mới nhà phân phối

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Ảnh đại diện | ·       Không bắt buộc.  ·       Chỉ cho phép chọn file định dạng hình ảnh:   ¨     JPEG / JPG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)".  ¨     PNG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)".  ¨     SVG: kích thước <= 1MB. → Nếu dung lượng ảnh > 1MB, báo lỗi "Dung lượng ảnh SVG vượt quá giới hạn cho phép (1MB)". |
| Mã nhà phân phối | ·       Bắt buộc nhập (tối đa là 200 ký tự dạng string).  ·       Mặc định trống.  ·       Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu.  ·       Không cho phép nhập khoảng trắng.  ·       Ký tự chữ khi nhập vào sẽ tự động viết in hoa. |
| Tên nhà phân phối | ·       Bắt buộc nhập (tối đa là 500 ký tự dạng string).   ·       Mặc định trống.  ·       Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. |
| Trạng thái | ·       toggle  ¨     ON = Hoạt động (mặc định)  ¨     OFF = Không hoạt động |
| SĐT | ·       Không bắt buộc nhập (độ dài 10-12 ký tự, chỉ nhập số). |
| Email | ·       Không bắt buộc nhập, định dạng email vd abc@domain |
| Địa chỉ | ·       Bắt buộc  ¨     Tỉnh thành  ¨     Quận huyện  ¨     Phường xã  ¨     Địa chỉ (tối đa là 2000 ký tự dạng string) |
| Trực thuộc | ·        Dùng autocomplete ( chọn 1 cấp ví dụ: A có trực thuộc B thì B không được chọn A làm trực thuộc, không bắt buộc chỉ chọn 1). |
| Nút “Lưu” | ·       Khi nhấn vào nút à hệ thống thực hiện:  ¨     Kiểm tra:  o   Check Mã NPP là duy nhất (không phân biệt hoa thường), nếu không báo lỗi "Mã NPP đã tồn tại".  o   Nếu không nhập dữ liệu tại trường thông tin bắt buộc thì báo lỗi "[Tên trường] là bắt buộc." ở dưới mỗi trường dữ liệu.  o   Số điện thoại chưa đúng định dạng, báo lỗi "Số điện thoại không đúng định dạng. Số điện thoại phải từ 10 đến 12 số."  o   Email chưa đúng định dạng, báo lỗi "Email không đúng định dạng."  ¨     Kết quả: tạo mới NPP thành công với các thông tin được nhập và chuyển về màn hình danh sách NPP.   * Khi tạo mới NPP   + Hệ thống tự động khóa sổ tháng liền kề trước tháng tạo NPP.      - Ví dụ: Ngày tạo NPP là 20/4/2026 → Tháng chốt sổ cho NPP = tháng 3   + Hệ thống tự động khóa số ngày cuối cùng của tháng liền kề trước tháng tạo NPP.     - Ví dụ: Ngày tạo NPP là 20/4/2026 → Ngày chốt sổ cho NPP = 31/3/2026   + Chức năng Khóa sổ thực hiện theo document:[[HO] Chốt sổ/ Mở chốt sổ](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53039371) |
| Nút “Đóng” | ·       Khi nhấn vào nút à hệ thốngđóng màn hình tạo mới và không thực hiện lưu thông tin. |

* ## Màn hình chỉnh sửa nhà phân phối

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Ảnh đại diện | ·       Không bắt buộc.  ·       Chỉ cho phép chọn file định dạng hình ảnh:   ¨     JPEG / JPG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)".  ¨     PNG: kích thước <= 10MB → Nếu dung lượng ảnh > 10MB, báo lỗi "Dung lượng ảnh vượt quá giới hạn cho phép (10MB)".  ¨     SVG: kích thước <= 1MB. → Nếu dung lượng ảnh > 1MB, báo lỗi "Dung lượng ảnh SVG vượt quá giới hạn cho phép (1MB)". |
| Mã nhà phân phối | ·       Bắt buộc nhập (tối đa là 200 ký tự dạng string).  ·       Mặc định trống.  ·       Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu.  ·       Không cho phép nhập khoảng trắng.  ·       Ký tự chữ khi nhập vào sẽ tự động viết in hoa. |
| Tên nhà phân phối | ·       Bắt buộc nhập (tối đa là 500 ký tự dạng string).   ·       Mặc định trống.  ·       Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối trường dữ liệu, nhấn vào dấu **X** sẽ xóa thông tin đã nhập/chọn khỏi trường dữ liệu. |
| Trạng thái | ·       toggle  ¨     ON = Hoạt động (mặc định)  ¨     OFF = Không hoạt động |
| SĐT | ·       Không bắt buộc nhập (độ dài 10-12 ký tự, chỉ nhập số). |
| Email | ·       Không bắt buộc nhập, định dạng email vd abc@domain |
| Địa chỉ | ·       Bắt buộc  ¨     Tỉnh thành  ¨     Quận huyện  ¨     Phường xã  ·       Địa chỉ (tối đa là 2000 ký tự dạng string) |
| Trực thuộc | ·        Dùng autocomplete ( chọn 1 cấp ví dụ: A có trực thuộc B thì B không được chọn A làm trực thuộc, không bắt buộc chỉ chọn 1). |
| Nút “Lưu” | ·       Khi nhấn vào nút à hệ thống thực hiện:  ¨     Kiểm tra:  o   Check Mã NPP là duy nhất (không phân biệt hoa thường), nếu không báo lỗi *"Mã NPP đã tồn tại".*  o   Nếu không nhập dữ liệu tại trường thông tin bắt buộc thì báo lỗi *"[Tên trường] là bắt buộc."* ở dưới mỗi trường dữ liệu.  o   Số điện thoại chưa đúng định dạng, báo lỗi *"Số điện thoại không đúng định dạng. Số điện thoại phải từ 10 đến 12 số."*  o   Email chưa đúng định dạng, báo lỗi *"Email không đúng định dạng."*  o   Nếu NPP được chọn đang là NPP trực thuộc của NPP đang được cập nhật thông tin thì báo lỗi, *"Chi nhánh trực thuộc đã chọn đang trực thuộc chi nhánh này. Vui lòng kiểm tra lại".* VD: Hiện tại NPP A đang được gán trực thuộc NPP B à khi thực hiện cập nhật NPP B mà chọn trực thuộc là NPP A thì báo lỗi *"Chi nhánh trực thuộc đã chọn đang trực thuộc chi nhánh này. Vui lòng kiểm tra lại."*  ¨     Kết quả: cập nhật NPP thành công với các thông tin được nhập và chuyển về màn hình danh sách NPP. |
| Nút “Đóng” | ·       Khi nhấn vào nút à hệ thốngđóng màn hình chỉnh sửa và không thực hiện lưu thông tin. |

* Màn hình xem chi tiết nhà phân phối

| **Tên Trường** | **Mô tả** |
| --- | --- |
| Ảnh đại diện | ·       Hiển thị ảnh đại diện của nhà phân phối. |
| Mã nhà phân phối | ·       Hiển thị mã của nhà phân phối. |
| Tên nhà phân phối | ·       Hiển thị tên của nhà phân phối. |
| Trạng thái | ·       Hiển thị trạng thái của nhà phân phối. |
| SĐT | ·       Hiển thị SĐT của nhà phân phối. |
| Email | ·       Hiển thị email của nhà phân phối. |
| Địa chỉ | ·       Hiển thị địa chỉ của nhà phân phối. |
| Trực thuộc | ·       Hiển thị nhà phân phối trực thuộc của nhà phân phối. |
| Nút “Đóng” | ·       Khi nhấn vào nút à hệ thốngđóng màn hình xem chi tiết. |