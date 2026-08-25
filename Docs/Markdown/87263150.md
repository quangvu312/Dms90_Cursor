|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Bổ sung các trường thông tin nhân viên chăm sóc; kênh nhân viên; vùng; khu vực; NPP trên tuyến của các Phiếu trả thưởng  File export bổ sung các cột **Vùng; Khu vực; Mã NPP; Tên NPP; Mã nhân viên; Tên nhân viên; Kênh nhân viên** như trên màn hình và đổi thứ tự **hiển thị các cột theo template ĐÍNH KÈM** |
| Document version | RedV1.0.0   * **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu** |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Hiện tại: [HO] Trả thưởng tích lũy

Thay đổi:

# Màn hình Danh sách trả thưởng tích lũy

Đổi vị trí hiển thị theo UI

* **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu**

## Bổ sung vùng lọc dữ liệu

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| **Bộ lọc đang thu gọn: Mặc định là trạng thái đang được thu gọn; Text sẽ hiển thị "Mở rộng"**  **Khi chọn Mở rộng:** | | | | |
| Vùng | Checkbox | Có | Không | * Vùng bán hàng   + Khi nhấn vào sẽ load hết dữ liệu danh sách Vùng bán hàng đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Vùng, danh sách hiển thị Lv1:Tên vùng- Lv2: Tên khu vực     - **Phân quyền dữ liệu hiển thị theo Vùng/Khu vực của User login**     - **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu**   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên vùng.Tên khu vực   + Cho phép chọn nhiều.   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Mặc định trống.   + Placeholder: Chọn Vùng/khu vực   Kết quả tìm kiếm: Trên danh sách hiển thị các Phiếu trả thưởng có vùng/ khu vực đã chọn |
| Tuyến bán hàng | Select box one choice | Có | Không | Thay đổi thứ tự hiển thị trên UI.  Phân quyền dữ liệu tuyến bán hàng:   * **Người dùng phân quyền Vùng/ Khu vực → Danh sách tuyến thuộc Vùng; Khu vực người dùng login** * **Người dùng phân quyền NPP chăm sóc → Danh sách tuyến thuộc NPP chăm sóc người dùng login (Theo tuyến)** * **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu** * Chọn Vùng → **Danh sách tuyến thuộc Vùng; Khu vực người dùng đã chọn** |
| Nhân viên chăm sóc | Select box one choice | Có | Không | * Trường này cho phép người dùng chọn một nhân viên duy nhất từ danh sách có sẵn để lọc các Phiếu trả thưởng trên tuyến bán hàng của nhân viên đó. * Trường tìm kiếm kèm theo chức năng lọc, hỗ trợ người dùng nhanh chóng tìm ra nhân viên mong muốn bằng cách nhập một phần tên, mã nhân viên, số điện thoại nhân viên (Search không phân biệt chữ hoa, thường, có dấu hay không dấu)   + Khi người dùng bắt đầu nhập, một danh sách nhân viên phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách nhân viên lấy từ màn hình [[Portal HO][DMS] Quản lý nhân viên DMS và Định nghĩa cây SalesForce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357), chỉ hiển thị các nhân viên có trạng thái Hoạt động và chức vụ của nhân viên là: **Giám sát bán hàng, Nhân viên bán hàng.**     - **Người dùng phân quyền Vùng/ Khu vực → Danh sách nhân viên thuộc Vùng; Khu vực người dùng login**     - **Người dùng phân quyền NPP chăm sóc → Danh sách nhân viên thuộc NPP chăm sóc người dùng login (Theo tuyến)**     - **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu**   + Chọn Vùng → **Danh sách nhân viên thuộc Vùng; Khu vực người dùng đã chọn theo phân quyền dữ liệu đã mô tả**   + Người dùng chọn **một nhân viên** từ danh sách bằng cách nhấp vào tên nhân viên mong muốn.   + Sau khi chọn, Phiếu trả thưởng sẽ tự động được lọc để chỉ hiển thị các Phiếu trả thưởng được chăm sóc bởi nhân viên đó.   + Nếu muốn quay lại danh sách đầy đủ, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select). * Danh sách nhân viên trong select box được sắp xếp theo ngày tạo nhân viên gần nhất. * Trường hợp không có nhân viên nào phù hợp với từ khóa, hệ thống nên hiển thị trống * Trường hợp bỏ chọn các nhân viên trong hộp chọn thì mặc định hiểu là chọn tất cả nhân viên để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder: Chọn nhân viên chăm sóc |
| Kênh nhân viên | Select box multichoice | Có | Không | * Khi nhấn vào sẽ load hết dữ liệu danh sách Kênh bán hàng ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Kênh bán hàng, danh sách hiển thị Tên Kênh bán hàng. * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên Kênh bán hàng của nhân viên. Nếu nhân viên không có kênh hiển thị rỗng → tức là Nhân viên thuộc tất cả các kênh bán hàng. * Cho phép chọn nhiều. * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Mặc định trống. * Placeholder: Chọn kênh nhân viên |
| Phân loại khách hàng | Select box multichoice | Có | Không | * Phân loại khách hàng:   + Direct/Indirect   + Không bắt buộc chọn   + Có thể chọn nhiều   + Mặc định không chọn <=> chọn tất cả   + Placeholder: Chọn phân loại khách hàng |
| Bổ sung lưới danh sách | | | | |
| Kênh nhân viên | Datacolumns | Không | Không | Hiển thị kênh nhân viên theo mã nhân viên  Nếu nhân viên không có kênh hiển thị rỗng → tức là Nhân viên thuộc tất cả các kênh bán hàng. |
| Nhà phân phối | Datacolumns tag | Không | Không | Dựa vào Mã tuyến của Phiếu trả thưởng để Hiển thị Mã - Tên NPP |
| Vùng | Datacolumns tag | Không | Không | Dựa vào mã tuyến của Phiếu trả thưởng để Hiển thị Vùng theo NPP của tuyến bán hàng |
| Khu vực | Datacolumns tag | Không | Không | Dựa vào mã tuyến của Phiếu trả thưởng để Hiển thị Khu vực theo NPP của tuyến bán hàng |

## Template export

File export bổ sung các cột **Vùng; Khu vực; Mã NPP; Tên NPP; Kênh nhân viên** như trên màn hình và đổi thứ tự **hiển thị các cột theo template sau**

**link UI: <https://app.visily.ai/projects/76638fa2-2683-4991-91e5-02144bb6d929/boards/1639230/elements/1093026735>**

**Template:**