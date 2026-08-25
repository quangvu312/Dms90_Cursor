|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description | Chon phép thực hiện gán tuyến cho nhiều nhãn hàng (level 2 theo cấu trúc cây phân cấp) |
| Document version | RedV1.0.0  RedV1.0.1 Vẫn check điểm bán **Cùng 1 điểm bán không được trùng nhãn hàng- trùng sale - Trong cùng 1 NPP khi lưu gán điểm bán vào tuyến bán hàng. Khi import điểm bán trên màn hình Tuyến bán hàng**  **RedV1.1.1:  Gỡ chặn load nhân viên theo vùng địa chỉ của NPP khi gán tuyến**  **RedV1.1.2: Thêm check ngày bắt đầu; ngày kết thúc của điểm bán**  **YellowV1.2.0: Hiển thị thông báo dạng popup, có show Mã tuyến - tên tuyến. Check toggle chuyển trạng thái trên màn hình Tuyến bán hàng**  **YellowV1.2.1: Export Tuyến bán hàng**  **1/ Thêm các cột thông tin khi export file : Mã +Tên Loại điểm bán, tên tuyến 2/ Điều chỉnh CÓ thành X, KHÔNG thành để trống**  **GreenV1.3.0 : Bổ sung chức năng export Tuyến thực tế** |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

Liên quan đến chức năng: [HO] Tuyến bán hàng

BRD: BRD [HƯƠNG THỦY] ENHANCE TUYẾN BÁN HÀNG

Nội dung bổ sung: Một tuyến bán hàng có thể chọn nhiều nhãn hàng,

# Màn hình Thêm mới tuyến bán hàng

## Chỉnh sửa

Disable:  Field Vùng/ Khu vực + Field Nhà phân phối khi chỉnh sửa tuyến bán hàng

| Khi thêm mới tuyến bán hàng; chỉnh sửa tuyến, gán điểm bán vào tuyến bán hàng=> Check trùng nhãn và cảnh báo theo các rule sau trên màn hình:  Tổng quan về rule check trùng nhãn  **YellowV1.2.0: Hiển thị thông báo dạng popup, có show @Mã tuyến - Tên tuyến. Chọn dấu x để tắt popup.**  Cho phép 1 sale - nhiều tuyến - **1 tuyến chọn nhiều nhãn** (nhãn level 2)  Lưu ý: tại **Tab Thêm tuyến**   * Khi điều chỉnh 1 tuyến đã lưu thì check trùng các nhãn của các tuyến của cùng 1 sale trong cùng NPP không được trùng nhau    + Đã có 1 tuyến chưa chọn nhãn/ chọn tất cả các nhãn: "Tất cả các nhãn hàng đã được gắn trong tuyến @Mã tuyến - Tên tuyến. Vui lòng không gán trùng!"   + Đã có  từ 1 tuyến chọn từ 1 nhãn, nếu trùng Báo popup, chọn dấu x để tắt popup: "Nhãn hàng @tên nhãn, @tên nhãn, @tên nhãn đã được gán trong các tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của nhân viên @Tên nhân viên. Vui lòng chọn nhãn hàng không trùng!."   1/ 1 sale có nhiều tuyến thì **các nhãn không được trùng nhau giữa các tuyến của sale cùng NPP**  **Sale A** có:   * **Tuyến 1** – Nhãn hàng: A, B * **Tuyến 2** – Nhãn hàng: C, D * Tạo mới (Tab thêm tuyến): Tuyến 3 - Gán nhãn trùng với các nhãn đã có trên các tuyến khác của sale A (ví dụ: A;B;C;D) => Báo popup, chọn dấu x để tắt popup:  "Nhãn hàng @TÊN NHÃN, @TÊN NHÃN đã được gán trong các tuyến  @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của nhân viên @Tên nhân viên. Vui lòng chọn nhãn hàng không trùng!.   2/ Trường hợp: Thêm điểm bán **→ Check tab Gán tuyến khi LƯU**  => Bước 1- Tạo tuyến 2; 3 cùng NPP; Bước 2: Gán nhân viên; Bước 3 **gán điểm bán => LƯU**   * Sale A - Tuyến 1 - Nhãn hàng: A, B → gán Điểm bán 1, 2, 3  Status Đã lưu, đang active * Sale A - Tuyến 2 - Nhãn C, B → gán điểm bán 1, 4, 5 . Chọn Lưu , hệ thống kiểm tra   + cùng nhân viên sale A nhưng trùng nhãn hàng trên tuyến đã lưu và đang active => Báo popup, chọn dấu x để tắt popup:  "Nhãn hàng @ tên nhãn 1, @tên nhãn 2 đã được gán trong các tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của nhân viên @tên nhân viên.  Vui lòng chọn nhãn hàng không trùng!." * Sale A - Tuyến 3 - Không gán Nhãn → gán điểm bán 1, 4, 5 . Chọn Lưu , hệ thống kiểm tra không gán nhãn tức là áp dụng cho tất cả các nhãn=> xung đột với tuyến 1 =>   + Báo popup, chọn dấu x để tắt popup:  "Nhãn hàng @ tên nhãn 1, @tên nhãn 2 đã được gán trong các tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của nhân viên @tên nhân viên.  Vui lòng chọn nhãn hàng không trùng!."   => Bước 1- Tạo tuyến 2 cùng NPP; Bước 2: Không gán nhân viên nào (vì không bắt buộc); Bước 3 gán điểm bán => LƯU    * Sale A - Tuyến 1 - Nhãn hàng: A, B → gán Điểm bán 1, 2, 3  Status Đã lưu, đang active * Không gán sale nào - Tuyến 2 - Nhãn C, B → gán điểm bán 1, 4, 5 . Chọn Lưu  => Lưu thành công, trạng thái đang active * Gán tuyến 2 cho sale A => khi lưu báo Báo popup, chọn dấu x để tắt popup:  "Nhãn hàng @ tên nhãn 1, @tên nhãn 2 đã được gán trong các tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của nhân viên @tên nhân viên.  Vui lòng chọn nhãn hàng không trùng!." * Gán tuyến 2 cho sale # sale A => Lưu thành công, trạng thái đang active   *Lưu ý: Case cùng NPP- cùng sale- khác tuyến- cùng nhãn - cùng điểm bán: case này nếu cùng Nhãn → báo lỗi. Nếu cùng điểm bán mà giao nhau ngày bắt đầu → ngày kết thúc → Báo lỗi*  3/RedV1.0.1 Vẫn check điểm bán **Cùng 1 điểm bán không được trùng nhãn hàng- trùng sale - Trong cùng 1 NPP khi lưu gán điểm bán vào tuyến bán hàng. Khi import điểm bán trên màn hình Tuyến bán hàng**   * Nếu Sale 1 đã chọn các nhãn hàng A, B, C → thì Sale 2 vẫn có thể chọn lại A, B, C cho tuyến bán hàng của mình. * Nếu DB 1 đã thuộc tuyến 1 của sale 1 → thì DB 1 **vẫn có thể** thuộc tuyến khác của sale 2 hoặc cùng sale khi ngày bắt đầu tuyến 2 sau ngày kết thúc của tuyến 1.   + **RedV1.1.2: Thêm check ngày bắt đầu; ngày kết thúc của điểm bán**  **Check trùng khi Ngày bắt đầu của tuyến 1 sau ngày kết thúc của tuyến 2.**  Hợp lệ như sau: Cùng NPP - cùng/ khác sale - có trùng nhãn      - Tuyến 1: đã gán thành công ĐB 1, ngày bắt đầu -> Ngày kết thúc : 01/01/2025 -> **Hôm nay (25/09/2025)**     - Tuyến 2: Khi gán ĐB 1 có ngày bắt đầu: **26/09/2025**\*\* Nếu Ngày kết thúc của tuyến 1 giao với ngày bắt đầu của tuyến 2 thì báo lỗi      - Popup báo lỗi, chọn dấu x để tắt popup như sau: "Điểm bán @mã điểm bán - @tên điểm bán đã tồn tại trong tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của cùng nhãn hàng   Trường hợp có nhiều điểm bán sẽ hiển thị mỗi điểm bán cách nhau dấu , ví dụ:   * Điểm bán DB0001 - Cửa hàng 1, DB0002 - Cửa hàng 2, DB0003 - Cửa hàng 3 đã tồn tại trong tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của cùng nhãn hàng   4/ Không check trùng nhãn hàng, điểm bán của các sale khác NPP  Khác NPP thì bỏ qua rule check trùng |
| --- |
| **YellowV1.2.0 Check toggle chuyển trạng thái trên màn hình Tuyến bán hàng:**  **Kiểm tra mã tuyến đang có trạng thái INACTIVE**   * Chuyển sang **ACTIVE (khi đã có chọn nhân viên trên tuyến)**: check trùng các nhãn của các tuyến của cùng 1 nhân viên trong cùng NPP không được trùng nhau và Báo: "Nhãn hàng @tên nhãn1, @tên nhãn2 đã được gán trong các tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của nhân viên @Tên nhân viên. Vui lòng chọn nhãn hàng không trùng!." * Nếu điểm bán trùng  **Cùng 1 điểm bán không được trùng nhãn hàng- trùng sale - Trong cùng 1 NPP :**   + Popup báo lỗi, chọn dấu x để tắt popup như sau: "Điểm bán @mã điểm bán - @tên điểm bán đã tồn tại trong tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của cùng nhãn hàng |

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Nhãn hàng | Select multichoice | Có | Không | * Cho phép chọn nhiều giá trị từ danh sách nhãn hàng, lấy theo level 2 * Có hỗ trợ tính năng tìm kiếm (search) trong dropdown để giúp người dùng lọc nhanh các nhãn hàng cần chọn. * Hiển thị các nhãn đã chọn dạng thẻ (tag), có thể xóa (remove) từng nhãn bằng thao tác click vào dấu "x". * Có dấu tick hiển thị các nhãn đã được chọn trong danh sách dropdown. * Không giới hạn số lượng nhãn hàng có thể chọn cho một tuyến bán hàng. * Một nhãn hàng có thể được chọn lặp lại ở các tuyến bán hàng khác nhau:  * Trong cùng một tuyến bán hàng, mỗi nhãn hàng chỉ được chọn duy nhất một lần (không lặp). * Rule check trùng nhãn |

## Import Điểm bán vào nhiều tuyến đã tạo

Màn hình Tuyến bán hàng → Import

### Action Thêm

validate các field trên template như đã thực hiện trong [HO] Tuyến bán hàng,

Bổ sung check trùng nhãn trên cùng NPP cùng sale nhiều tuyến:

**Bước 1: Kiểm tra mã tuyến đang có trạng thái INACTIVE**

* Chuyển sang **ACTIVE (khi có nhập nhân viên)**: check trùng các nhãn của các tuyến của cùng 1 nhân viên trong cùng NPP không được trùng nhau và Báo: "Nhãn hàng @tên nhãn1, @tên nhãn2 đã được gán trong các tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của nhân viên @Tên nhân viên. Vui lòng chọn nhãn hàng không trùng!."

**Bước 2: Kiểm tra mã nhân viên đã có tồn tại trong tuyến bán hàng hay chưa**

* Nếu **mã nhân viên trong tuyến bán hàng**
  + TRÙNG MÃ NHÂN VIÊN: kiểm tra Mã điểm bán có tồn tại trong tuyến của nhân viên

* + - Nếu Mã điểm bán có tồn tại => update các thông tin đã validate của điểm bán, ghi đè dữ liệu đã lưu trước đó
    - Nếu Mã điểm bán không tồn tại trong tuyến bán hàng của sale thì đến **Bước 4.**
  + KHÔNG TRÙNG MÃ NHÂN VIÊN/ Tuyến bán hàng đang kiểm tra chưa gắn nhân viên (tức là field nhân viên đang rỗng): Kiểm tra mã nhân viên có tồn tại trong tuyến bán hàng khác (chỉ xét các Tuyến đang active) của cùng nhà phân phối

* + - Nếu CÓ tồn tại từ 1 tuyến bán hàng khác của cùng NPP thì Kiểm tra nhãn hàng trên tuyến bán hàng đang kiểm tra ( ⇒ kiểm tra **nhãn trùng)**, Cần Kiểm tra xung đột nhãn hàng, xử lý theo bảng sau:

| Tuyến khác (của nhân viên) | Tuyến đang kiểm tra | Kết quả | Msg |
| --- | --- | --- | --- |
| Nhân viên chưa có gắn vào tuyến nào | gán nhân viên vào tuyến đang kiểm tra | ✅ | → Đến Bước 3  gán nhân viên vào tuyến đang kiểm tra |
| Không gán nhãn | Không gán nhãn | ❌ | Dòng n: 'Tất cả các nhãn hàng đã được gắn trong tuyến @Tên tuyến. Vui lòng không gán trùng!' |
| Có nhãn | Không gán nhãn | ❌ | Dòng n: 'Nhãn hàng @Tên nhãn1, @Tên nhãn2 đã được gán trong tuyến bán hàng khác của nhân viên @Tên nhân viên. Vui lòng không gán trùng!' |
| Không gán nhãn | Có nhãn | ❌ | Dòng n: 'Tất cả các nhãn hàng đã được gắn trong tuyến @Tên tuyến. Vui lòng không gán trùng!' |
| Có nhãn | Có nhãn | ❌ Nếu có trùng nhãn bất kỳ | Dòng n: 'Nhãn hàng @Tên nhãn1, @Tên nhãn2 đã được gán trong tuyến bán hàng khác của nhân viên @Tên nhân viên. Vui lòng không gán trùng!' |
| Có nhãn | Có nhãn | ✅ Nếu **không trùng bất kỳ nhãn nào** | → Đến Bước 3 |

**Bước 3: Gán thêm mới nhân viên và các dữ liệu đã validate khác vào tuyến bán hàng** **đang kiểm tra**

**Bước 4: Gán thêm điểm bán và các dữ liệu đã validate vào tuyến bán hàng đang kiểm tra**

**RedV1.0.1 Vẫn check điểm bán **Cùng 1 điểm bán không được trùng nhãn hàng- trùng sale - Trong cùng 1 NPP khi lưu gán điểm bán vào tuyến bán hàng. Khi import điểm bán trên màn hình Tuyến bán hàng****

MSG lỗi trùng điểm bán

* Điểm bán @mã điểm bán - @tên điểm bán đã tồn tại trong tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của cùng nhãn hàng

Trường hợp có nhiều điểm bán sẽ hiển thị mỗi điểm bán cách nhau dấu , ví dụ:

* Điểm bán DB0001 - Cửa hàng 1, DB0002 - Cửa hàng 2, DB0003 - Cửa hàng 3 đã tồn tại trong tuyến @Mã tuyến - Tên tuyến, @Mã tuyến - Tên tuyến của cùng nhãn hàng

# Màn hình Danh sách tuyến bán hàng

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Nhãn hàng | Datacolums | Không | Không | Hiển thị danh sách các nhãn được chọn cách nhau bởi dấu phẩy như UI đã khoanh đỏ ở trên |

# Export

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Nhãn hàng | Datacolums | Không | Không | Hiển thị danh sách các nhãn được chọn cách nhau bởi dấu phẩy  Ví dụ: Thực phẩm, Nhãn A, Nhãn B, Nhãn C |

**YellowV1.2.1: Export Tuyến bán hàng**

**1/ Thêm các cột thông tin khi export file : Mã +Tên Loại điểm bán, tên tuyến  
2/ Điều chỉnh CÓ thành X, KHÔNG thành để trống**

**Template thỏa điều kiện:**

**File:**

Mô tả:

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Nhãn hàng | Datacolums | Không | Không | Giới hạn lại độ rộng của cột |
| Tên tuyến | Datacolums | Không | Không | Hiển thị tên tuyến bán hàng theo mã tuyến |
| Mã loại điểm bán | Datacolums | Không | Không | Dựa vào mã điểm bán trên tuyến hiển thị mã loại điểm bán |
| Tên loại điểm bán | Datacolums | Không | Không | Dựa vào mã điểm bán trên tuyến hiển thị Tên loại điểm bán theo mã loại điểm bán |
| Mã cửa hàng | Datacolums | Không | Không | Mã cửa hàng → Đổi tên thành "Mã điểm bán" |
| Tên cửa hàng | Datacolums | Không | Không | Tên cửa hàng → Đổi tên thành "Tên điểm bán" |
| Thứ n | Datacolums | Không | Không | **Điều chỉnh CÓ thành X, KHÔNG thành để trống** |

# Các tính năng có liên quan

1/ Gen tuyến thực tế: theo rule [3.8. Tuyến thực tế](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48431425#id-[HO]Tuy%E1%BA%BFnb%C3%A1nh%C3%A0ng-3.8.Tuy%E1%BA%BFnth%E1%BB%B1ct%E1%BA%BF)

**Trên màn hình tuyến thực tế → Danh sách tuyến thực tế → Nhãn hàng: hiển thị các nhãn hàng trên tuyến cách nhau bởi dấu phẩy**

2/ Kiểm tồn điểm bán trên app saleman: Hiện tại trên điểm bán có chọn nhãn thì hiển thị danh sách sản phẩm theo nhãn, không chọn nhãn thì hiển thị tất cả => select multichoice nhãn hàng

3/ Danh sách sản phẩm  khi đặt hàng trên app saleman: Hiện tại trên điểm bán có chọn nhãn thì hiển thị danh sách sản phẩm theo nhãn, không chọn nhãn thì hiển thị tất cả => select multichoice nhãn hàng

## **Tuyến thực tế**

**GreenV1.3.0 : Bổ sung chức năng export Tuyến thực tế**

* Trên bộ lọc enhance chức năng chọn NPP; chọn Nhãn

  - [IMPROVEMENT] Enhance chức năng select all cho selectbox chọn Nhãn hàng trên các màn hình
  - [IMPROVEMENT] Enhance chức năng select all cho selectbox chọn NPP trên các màn hình
* Trên lưới danh sách bổ sung button export cho phép tải file về thiết bị:
  + Theo format chung như sau: <https://kb.finviet.com.vn/pages/viewpage.action?pageId=66523748>
  + Template:

**RedV1.1.0:  Gỡ chặn load nhân viên theo vùng địa chỉ của NPP khi gán tuyến**

**Hiện tại:**

* Gán tuyến đang check vùng của NPP để load danh sách nhân viên, Vùng NPP lấy từ địa chỉ NPP.
* Mà NPP ERP ảo của direct sales của Hương Thủy, đang để địa chỉ là Nhà bè, Nhà Bè thuộc vùng HCM

* Nên là chỉ có sales nào thuộc vùng HCM mới gán được vào tuyến của NPP ERP direct

* Mà NPP ERP direct thì có thể bán được nhiều vùng chứ ko phải mỗi HCM

**Cần điều chỉnh:**

* \*\*Khi thực hiện gán tuyến:
  + Nếu NPP trên tuyến = NPP "ERP" thì ở trường **Mã nhân viên** sẽ load tất cả Nhân viên bán hàng/Giám sát bán hàng có trạng thái Active trên toàn quốc
  + Nếu NPP còn lại thì vẫn giữ rule load danh sách nhân viên theo vùng của NPP như hiện tại.