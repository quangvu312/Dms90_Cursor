|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Bổ sung các trường thông tin nhân viên chăm sóc; kênh nhân viên; vùng; khu vực; NPP trên tuyến của các tiến trình  Export các giai đoạn của chương trình có link hình ảnh dạng hyperlink để xem hình khi click vào link trên template |
| Document version | RedV1.0.0  28/01/2026: Bộ lọc kênh nhân viên -> Chỉ lấy kênh active của nhân viên;  Bổ sung NPP chăm sóc lấy theo tuyến bán hàng  Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu  RedV1.1.0 Enhance filter → Danh sách CTTB hiển thị phụ thuộc theo bộ lọc ngày tháng đã chọn |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Hiện tại: [HO] Tiến trình trưng bày

Thay đổi:

# Màn hình Tiến trình trưng bày - Tab Theo kỳ

Đổi vị trí hiển thị theo UI

## Bổ sung vùng lọc dữ liệu

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| **Bộ lọc đang thu gọn:** Mặc định là trạng thái đang được thu gọn; Text sẽ hiển thị "Mở rộng"  **Khi chọn Mở rộng:** | | | | |
| Vùng | Checkbox | Có | Không | * Vùng bán hàng   + Khi nhấn vào sẽ load hết dữ liệu danh sách Vùng bán hàng đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Vùng, danh sách hiển thị Lv1:Tên vùng- Lv2: Tên khu vực     - **Phân quyền dữ liệu hiển thị theo Vùng/Khu vực của User login**     - **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu**   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên vùng, tên khu vực   + Cho phép chọn nhiều.   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Mặc định trống.   + Placeholder: Chọn Vùng/khu vực   Kết quả tìm kiếm: Trên danh sách hiển thị các tiến trình có vùng/ khu vực đã chọn |
| Tuyến bán hàng | Select box one choice | Có | Không | Thay đổi thứ tự hiển thị trên UI.  Phân quyền dữ liệu tuyến bán hàng:   * **Người dùng phân quyền Vùng/ Khu vực → Danh sách tuyến thuộc Vùng; Khu vực người dùng login** * **Người dùng phân quyền NPP chăm sóc → Danh sách tuyến thuộc NPP chăm sóc người dùng login (dựa vào tuyến bán hàng)** * **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu** |
| Nhân viên chăm sóc | Select box one choice | Có | Không | * Trường này cho phép người dùng chọn một nhân viên duy nhất từ danh sách có sẵn để lọc các tiến trình trên tuyến bán hàng của nhân viên đó. * Trường tìm kiếm kèm theo chức năng lọc, hỗ trợ người dùng nhanh chóng tìm ra nhân viên mong muốn bằng cách nhập một phần tên, mã nhân viên, số điện thoại nhân viên (Search không phân biệt chữ hoa, thường, có dấu hay không dấu)   + Khi người dùng bắt đầu nhập, một danh sách nhân viên phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách nhân viên lấy từ màn hình [[Portal HO][DMS] Quản lý nhân viên DMS và Định nghĩa cây SalesForce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357), chỉ hiển thị các nhân viên có trạng thái Hoạt động và chức vụ của nhân viên là: **Giám sát bán hàng, Nhân viên bán hàng.**     - **Người dùng phân quyền Vùng/ Khu vực → Danh s ách nhân viên thuộc Vùng; Khu vực người dùng login**     - **Người dùng phân quyền NPP chăm sóc → Danh sách nhân viên thuộc NPP chăm sóc người dùng login (Dựa vào tuyến bán hàng)**     - **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu**   + Chọn Vùng → **Danh sách nhân viên thuộc Vùng - khu vực đã chọn**   + Người dùng chọn **một nhân viên** từ danh sách bằng cách nhấp vào tên nhân viên mong muốn.   + Sau khi chọn, tiến trình sẽ tự động được lọc để chỉ hiển thị các tiến trình được chăm sóc bởi nhân viên đó.   + Nếu muốn quay lại danh sách đầy đủ, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select). * Danh sách nhân viên trong select box được sắp xếp theo ngày tạo nhân viên gần nhất. * Trường hợp không có nhân viên nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * Trường hợp bỏ chọn các nhân viên trong hộp chọn thì mặc định hiểu là chọn tất cả nhân viên để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder: Chọn nhân viên chăm sóc |
| Kênh nhân viên | Select box multichoice | Có | Không | * Khi nhấn vào sẽ load hết dữ liệu danh sách Kênh bán hàng ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Kênh bán hàng, danh sách hiển thị Tên Kênh bán hàng. * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên Kênh bán hàng. * Cho phép chọn nhiều. * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Mặc định trống. * Placeholder: Chọn kênh nhân viên |
| Phân loại khách hàng | Select box multichoice | Có | Không | * Phân loại khách hàng:   + Direct/Indirect   + Không bắt buộc chọn   + Có thể chọn nhiều   + Mặc định không chọn <=> chọn tất cả   + Placeholder: Chọn phân loại khách hàng |
| RedV1.1.0 Enhance filter → Danh sách CTTB hiển thị phụ thuộc theo bộ lọc ngày tháng đã chọn | | | | |
| Chương trình trưng bày | Select onechoice | Có | Không | **Hiện tại:** Mở danh sách Chương trình trưng bày sẽ hiển thị danh sách các chương trình trưng bày, lấy tất cả các CTTB có trạng thái Đang diễn ra, Ngưng hoạt động, Kết thúc.  Bổ sung:   * **Case 1:** Khi người dùng chọn tiêu chí **“Thời gian trưng bày”,** hệ thống sẽ hiển thị danh sách Chương trình trưng bày (CTTB) thỏa điều kiện sau:  * + Chỉ lấy các CTTB có trạng thái: Đang diễn ra, Ngưng hoạt động, hoặc Kết thúc.   + Thời gian trưng bày của CTTB phải giao nhau (overlap) với khoảng thời gian người dùng đã chọn.   + Hiển thị dưới dạng: **Mã chương trình - Tên chương trình**   Ví dụ: Người dùng chọn:  Từ ngày (From Date): 01/01/2025 Đến ngày (To Date): 15/01/2025   | CTTB | Thời gian chương trình | Kết quả | | --- | --- | --- | | CTTB 1 | 05/01/2025 – 10/01/2025 | Hiển thị | | CTTB 2 | 10/01/2025 – 15/01/2025 | Hiển thị | | CTTB 3 | 28/12/2024 – 05/01/2025 | Hiển thị | | CTTB 4 | 10/01/2025 – 20/01/2025 | Hiển thị | | CTTB 5 | 20/12/2024 – 30/12/2024 | Không hiển thị | | CTTB 6 | 16/01/2025 – 20/01/2025 | Không hiển thị |  * **Case 2:** Khi mở màn hình, mặc định hệ thống tự động thiết lập:  * + **From Date** = Ngày hiện tại lùi về **30 ngày**   + **To Date** = **Ngày hiện tại**   + Danh sách **CTTB** hiển thị theo nguyên tắc **giao nhau (overlap)** với khoảng thời gian mặc định.   + Hiển thị dưới dạng: **Mã chương trình - Tên chương trình**  * **Case 3:** Không chọn tiêu chí **“Thời gian trưng bày”**(Bỏ trống cả From Date & To Date)  * + **Không áp dụng lọc theo thời gian**   + Hiển thị **tất cả CTTB** theo trạng thái:     - **Đang diễn ra / Ngưng hoạt động / Kết thúc** |
| Bổ sung lưới danh sách | | | | |
| Vùng | Datacolumns tag | Không | Không | Dựa vào mã tuyến của tiến trình để Hiển thị Vùng theo NPP của tuyến bán hàng |
| Khu vực | Datacolumns tag | Không | Không | Dựa vào mã tuyến của tiến trình để Hiển thị Khu vực theo NPP của tuyến bán hàng |
| Nhà phân phối | Datacolumns tag | Không | Không | Dựa vào Mã tuyến của tiến trình để Hiển thị Mã - Tên NPP |
| Mã nhân viên | Datacolumns have copy | Không | Không | Dựa vào Mã tuyến của tiến trình để hiển thị mã nhân viên chăm sóc |
| Tên nhân viên | Datacolumns | Không | Không | Hiển thị tên theo mã nhân viên |
| Kênh nhân viên | Datacolumns | Không | Không | Hiển thị kênh nhân viên theo mã nhân viên  Nếu nhân viên không có kênh hiển thị rỗng → tức là Nhân viên thuộc tất cả các kênh bán hàng.  Nhân viên có kênh nhưng kênh bị inactive vẫn hiển thị tên kênh. |

## Template export

File export bổ sung các cột **Vùng; Khu vực; Mã NPP; Tên NPP; Mã nhân viên; Tên nhân viên; Kênh nhân viên và** đổi thứ tự **hiển thị các cột theo template sau:**

**link UI: <https://app.visily.ai/projects/76638fa2-2683-4991-91e5-02144bb6d929/boards/1512070/elements/1087266449>**

**Template:**

# Màn hình Tiến trình trưng bày - Tab giai đoạn

## Bổ sung bộ lọc:

| Tên Trường | Loại dữ liệu/Loại field | Cho phép thao tác? | Bắt buộc? | Mô tả |
| --- | --- | --- | --- | --- |
| **Bộ lọc đang thu gọn: Mặc định là trạng thái đang được thu gọn; Text sẽ hiển thị "Mở rộng"**  **Khi chọn Mở rộng:** | | | | |
| Trạng thái chấm hình | Select box one choice | Có | Không | Danh sách hiển thị 3 lựa chọn như sau:   | Option | Ý nghĩa | Logic xử lý | | --- | --- | --- | | **Chưa có hình** | Các giai đoạn chưa có dữ liệu hình ảnh nào gửi về. | field **@Số lần chụp điểm bán =0** | | **Chờ chấm** | Các giai đoạn có hình mới gửi về nhưng admin chưa chấm xong. | field **@ Số lần chấm/ Số lần chưa chấm;** trong đó có → **Số lần chưa chấm >0**  **AND**  Field **@Số lần chụp điểm bán >0** | | **Đã chấm hết** | Các giai đoạn đã chụp và admin đã chấm xong tất cả hình. | field **@ Số lần chấm/ Số lần chưa chấm**; trong đó có → **Số lần chưa chấm =0**  **AND**  Field **@Số lần chụp điểm bán >0** |   Không chọn tức là chọn tất cả  Placeholder: Chọn trạng thái chấm hình |
| Vùng | Checkbox | Có | Không | * Vùng bán hàng   + Khi nhấn vào sẽ load hết dữ liệu danh sách Vùng bán hàng đang còn ở trạng thái hoạt động, dữ liệu được lấy từ màn hình Vùng, danh sách hiển thị Lv1:Tên vùng- Lv2: Tên khu vực     - **Phân quyền dữ liệu hiển thị theo Vùng/Khu vực của User login**   + Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên vùng. Tên khu vực   + Cho phép chọn nhiều.   + Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm.   + Mặc định trống.   + Placeholder: Chọn Vùng/khu vực   Kết quả tìm kiếm: Trên danh sách hiển thị các giai đoạn của tiến trình có vùng/ khu vực đã chọn |
| Tuyến bán hàng | Select box one choice | Có | Không | Thay đổi thứ tự hiển thị trên UI.  Phân quyền dữ liệu tuyến bán hàng:   * **Người dùng phân quyền Vùng/ Khu vực → Danh sách tuyến thuộc Vùng; Khu vực người dùng login** * **Người dùng phân quyền NPP chăm sóc → Danh sách tuyến thuộc NPP chăm sóc người dùng login (dự vào tuyến bán hàng)** * **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu** * Chọn Vùng → **Danh sách tuyến thuộc Vùng; Khu vực người dùng đã chọn** |
| Nhân viên chăm sóc | Select box one choice | Có | Không | * Trường này cho phép người dùng chọn một nhân viên duy nhất từ danh sách có sẵn để lọc các tiến trình trên tuyến bán hàng của nhân viên đó. * Trường tìm kiếm kèm theo chức năng lọc, hỗ trợ người dùng nhanh chóng tìm ra nhân viên mong muốn bằng cách nhập một phần tên, mã nhân viên, số điện thoại nhân viên (Search không phân biệt chữ hoa, thường, có dấu hay không dấu)   + Khi người dùng bắt đầu nhập, một danh sách nhân viên phù hợp sẽ xuất hiện dưới dạng các tùy chọn. Danh sách nhân viên lấy từ màn hình [[Portal HO][DMS] Quản lý nhân viên DMS và Định nghĩa cây SalesForce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357), chỉ hiển thị các nhân viên có trạng thái Hoạt động và chức vụ của nhân viên là: **Giám sát bán hàng, Nhân viên bán hàng.**     - **Người dùng phân quyền Vùng/ Khu vực → Danh sách nhân viên thuộc Vùng; Khu vực người dùng login**     - **Người dùng phân quyền NPP chăm sóc → Danh sách nhân viên thuộc NPP chăm sóc người dùng login (Dựa vào tuyến bán hàng)**     - **Gán tài khoản thị trường→ Phân quyền dữ liệu cây saleforce theo link doc: [HO & NPP] Phân quyền dữ liệu**   + Chọn Vùng → **Danh sách nhân viên thuộc Vùng; Khu vực người dùng đã chọn**   + Người dùng chọn **một nhân viên** từ danh sách bằng cách nhấp vào tên nhân viên mong muốn.   + Sau khi chọn, các giai đoạn của tiến trình sẽ tự động được lọc để chỉ hiển thị các tiến trình được chăm sóc bởi nhân viên đó.   + Nếu muốn quay lại danh sách đầy đủ, người dùng có thể nhấp vào biểu tượng xóa (icon x trong ô select). * Danh sách nhân viên trong select box được sắp xếp theo ngày tạo nhân viên gần nhất. * Trường hợp không có nhân viên nào phù hợp với từ khóa, hệ thống nên hiển thị trong ô select "Trống" * Trường hợp bỏ chọn các nhân viên trong hộp chọn thì mặc định hiểu là chọn tất cả nhân viên để tìm kiếm. * Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn. * Placeholder: Chọn nhân viên chăm sóc |
| Kênh nhân viên | Select box multichoice | Có | Không | * Khi nhấn vào sẽ load hết dữ liệu danh sách Kênh bán hàng ở trạng thái hoạt động ~~& Không hoạt động~~, dữ liệu được lấy từ màn hình Kênh bán hàng, danh sách hiển thị Tên Kênh bán hàng. * Cho phép nhập dữ liệu để tìm kiếm like thông tin theo Tên Kênh bán hàng. * Cho phép chọn nhiều. * Khi nhập/chọn dữ liệu xong sẽ có dấu **X** ở cuối thanh tìm kiếm, nhấn vào dấu **X** trên thanh tìm kiếm sẽ xóa điều kiện tìm kiếm khỏi ô tìm kiếm. * Mặc định trống. * Placeholder: Chọn kênh nhân viên |
| Phân loại khách hàng | Select box multichoice | Có | Không | * Phân loại khách hàng:   + Direct/Indirect   + Không bắt buộc chọn   + Có thể chọn nhiều   + Mặc định không chọn <=> chọn tất cả   + Placeholder: Chọn phân loại khách hàng |
| RedV1.1.0 Enhance filter → Danh sách CTTB hiển thị phụ thuộc theo bộ lọc ngày tháng đã chọn | | | | |
| Chương trình trưng bày | Select onechoice | Có | Không | **Hiện tại:**Mở danh sách Chương trình trưng bày sẽ hiển thị danh sách các chương trình trưng bày, lấy tất cả các CTTB có trạng thái Đang diễn ra, Ngưng hoạt động, Kết thúc.  Bổ sung:   * **Case 1:** Khi người dùng chọn tiêu chí **“Thời gian trưng bày”,** hệ thống sẽ hiển thị danh sách Chương trình trưng bày (CTTB) thỏa điều kiện sau:  * + Chỉ lấy các CTTB có trạng thái: Đang diễn ra, Ngưng hoạt động, hoặc Kết thúc.   + Thời gian trưng bày của CTTB phải giao nhau (overlap) với khoảng thời gian người dùng đã chọn.   + Hiển thị dưới dạng: **Mã chương trình - Tên chương trình**   Ví dụ: Người dùng chọn:  Từ ngày (From Date): 01/01/2025 Đến ngày (To Date): 15/01/2025   |  |  |  | | --- | --- | --- | | CTTB 1 | 05/01/2025 – 10/01/2025 | Hiển thị | | CTTB 2 | 10/01/2025 – 15/01/2025 | Hiển thị | | CTTB 3 | 28/12/2024 – 05/01/2025 | Hiển thị | | CTTB 4 | 10/01/2025 – 20/01/2025 | Hiển thị | | CTTB 5 | 20/12/2024 – 30/12/2024 | Không hiển thị | | CTTB 6 | 16/01/2025 – 20/01/2025 | Không hiển thị |      * **Case 2:**Khi mở màn hình, mặc định hệ thống tự động thiết lập:  * + **From Date** = Ngày hiện tại lùi về **30 ngày**   + **To Date** = **Ngày hiện tại**   + Danh sách **CTTB** hiển thị theo nguyên tắc **giao nhau (overlap)** với khoảng thời gian mặc định.   + Hiển thị dưới dạng: **Mã chương trình - Tên chương trình**  * **Case 3:** Không chọn tiêu chí **“Thời gian trưng bày”**(Bỏ trống cả From Date & To Date)  * + **Không áp dụng lọc theo thời gian**   + Hiển thị **tất cả CTTB** theo trạng thái:     - **Đang diễn ra / Ngưng hoạt động / Kết thúc** |
|  |  |  |  |  |
| Bổ sung-điều chỉnh trên lưới danh sách | | | | |
| Vùng | Datacolumns tag | Không | Không | Dựa vào mã tuyến của tiến trình để Hiển thị Vùng theo NPP của tuyến bán hàng |
| Khu vực | Datacolumns tag | Không | Không | Dựa vào mã tuyến của tiến trình để Hiển thị Khu vực theo NPP của tuyến bán hàng |
| Nhà phân phối | Datacolumns tag | Không | Không | Dựa vào Mã tuyến của tiến trình để Hiển thị Mã - Tên NPP |
| Mã nhân viên | Datacolumns have copy | Không | Không | Dựa vào Mã tuyến của tiến trình để hiển thị mã nhân viên chăm sóc |
| Tên nhân viên | Datacolumns | Không | Không | Hiển thị tên theo mã nhân viên |
| Kênh nhân viên | Datacolumns | Không | Không | Hiển thị kênh nhân viên theo mã nhân viên  Nếu nhân viên không có kênh hiển thị rỗng → tức là Nhân viên thuộc tất cả các kênh bán hàng. |
| Số lần yêu cầu Đạt | Datacolumns | Không | Không | Điều chỉnh wording: Số lần yêu cầu duyệt = Số lần yêu cầu Đạt   * ***H**iển thị theo cài đặt CTTB field "**Số lần yêu cầu duyệt hình ảnh**"* |
| Số lần GĐ Đạt | Datacolumns | Không | Không | Điều chỉnh wording: Số lần duyệt = Số lần GĐ Đạt   * *Hiển thị theo cài đặt CTTB field "**Số lần duyệt" của từng gaii đoạn tương ứng*** |
| Số lần chụp điểm bán | Datacolumns | Không | Không | Điều chỉnh wording: Số lần chụp hình của giai đoạn = Số lần chụp điểm bán  *- [Số lần chụp hình của giai đoạn](https://kb.finviet.com.vn/display/DMSNEW/%5BHO%5D+Enhance+CTTB?src=contextnavpagetreemode)* |
| Số lần chấm/ Số lần chưa chấm | Datacolumns | Không | Không | Bổ sung thêm cột "Số lần chấm/ Số lần chưa chấm"   Ví dụ: 2/5   * Số lần chấm = Tổng số lần đã thao tác chấm hình, đã có kết quả lần chấm = Đạt hoặc Không đạt (Khác chờ duyệt) * Số lần chưa chấm = @Số lần chụp điểm bán -Số lần chấm |
| Số lần chấm Đạt | Datacolumns | Không | Không | Điều chỉnh wording: Số lần duyệt đạt = Số lần chấm Đạt   * *Số lần duyệt đạt của giai đoạn* |

## Template export

File export bổ sung các cột **Vùng; Khu vực; Mã NPP; Tên NPP; Mã nhân viên; Tên nhân viên; Kênh nhân viên** như trên màn hình và

* Điều chỉnh wording: Số lần yêu cầu Đạt; Số lần GĐ Đạt; Số lần chụp điểm bán; Số lần chấm Đạt
* Thêm **"Lần chụp hình": hiển thị ứng với mỗi dòng trên file export là một lần chụp hình; hiển thị số thứ tự lần chụp. Ví dụ: 1; 2; 3; ...; n**
* Tách 2 cột từ field **@Số lần chấm/ Số lần chưa chấm** trên lưới danh sách
  + **Số lần chấm**
  + **Số lần chưa chấm**
* Đổi thứ tự **hiển thị các cột**

**Link UI: <https://app.visily.ai/projects/76638fa2-2683-4991-91e5-02144bb6d929/boards/1512070/elements/1087260649>**

**Template:**  khi export danh sách ở Tab "theo giai đoạn" trên File Excel bao gồm 2 phần: **Thông tin định danh** (Cố định đang có trên màn hình portal) và **Link hình ảnh động** (Mỗi lần chụp là 1 line; mỗi hình là một cột hiển thị link liên kết, độ rộng cột **42.14 (300 pixels)** )

**Ví dụ:** Nếu điểm bán có 3 kỳ, mỗi kỳ 2 giai đoạn, mỗi giai đoạn chụp 2 lần, Lần 1 chụp 10 tấm hình; Lần 2 chụp 20 tấm hình

* Sẽ có tổng cộng 3 \* 2 \* 2 = 12 dòng dữ liệu cho điểm bán đó
  + Kỳ 1: 4 dòng; mỗi giai đoạn 2 dòng, 20 cột link
  + Kỳ 2: 4 dòng; mỗi giai đoạn 2 dòng, 20 cột link
  + Kỳ 3: 4 dòng; mỗi giai đoạn 2 dòng, 20 cột link
* Phần "Link hình ảnh động" sẽ là 20 cột.

**Template mẫu:**

*Lưu ý:*

* *Giới hạn số dòng export tối đa (ví dụ: 10,000 dòng) để tránh timeout. Nếu vượt quá, yêu cầu User lọc nhỏ lại.*
* *Link hình ảnh phải có cơ chế bảo mật (Phải login vào hệ thống mới có thể xem hình) để tránh lộ hình ảnh cửa hàng ra ngoài internet công cộng.*