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

Lưu ý

Tài liệu promotion Lot date: 6 - Cấu hình không đồng thời

Đối tượng áp dụng: Tất cả các CTKM

Đơn hàng: Đơn sell out

Các điều chỉnh trong tài liệu này áp dụng cho đơn hàng bình thường (không áp dụng cho đơn Vansales)

## Giao diện

| Title | Wireframe | Description |
| --- | --- | --- |
| Màn hình áp dụng KM |  | Tại danh sách các CTKM khả dụng, bổ sung checkbox cho từng CTKM và áp dụng quy tắc hiển thị như sau:   * Đối với CTKM không nằm trong cấu hình “khuyến mãi không đồng thời” → Checkboxmặc định được chọn (ticked) và bị vô hiệu hóa (disabled). * Đối với CTKMnằm trong cấu hình “khuyến mãi không đồng thời” → Checkboxmặc định không được chọn (unticked) và khả dụng (enable) để người dùng có thể chọn.   Xử lý khi người dùng thao tác chọn/bỏ chọn:   * Khi người dùng chọn 1 CTKM bất kỳ → Hệ thống sẽ tự động vô hiệu hóa (disable) tất cả các CTKM nằm trong nhóm không đồng thời với CTKM vừa được chọn (danh sách nhóm không đồng thời được trả về từ promotion). * Khi người dùng bỏ chọn CTKM đã chọn trước đó → Hệ thống sẽ enable các CTKM nằm trong nhóm không đồng thời với CTKM vừa được bỏ chọn. |

## Logic xử lý

Tại màn hình danh sách KM khả dụng (promotion list), khi chọn "Áp dụng chương trình khuyến mãi", hệ thống chỉ thực hiện combine các CTKM được chọn (bỏ qua các CTKM không được chọn).

1. Khuyến mãi ưu tiên

* Thứ tự sắp xếp khuyến mãi như sau: KM1: Mua 3A tặng 1C, KM2: Mua 1A tặng 2B, KM3: Mua 4A tặng 2D
* Cấu hình không đồng thời: KM1 không đồng thời với KM2
* Thao tác người dùng: Người dùng chọn KM 1
* Hệ thống xử lý: áp dụng khuyến mãi KM3, KM1; không áp dụng KM2

2. Khuyến mãi bình thường

* Thứ tự sắp xếp khuyến mãi như sau: KM1: Mua 3A tặng 1C → KM2: Mua 1A tặng 2B → KM3: Mua 4A tặng 2D
* Cấu hình không đồng thời: KM2 không đồng thời với
* Đơn hàng: Mua 4A
* Thao tác người dùng: Người dùngchọn KM1 và KM2. KM3 bị disable vì không đồng thời với KM2.

→ Hệ thống xử lý:

* Áp dụng KM1: trừ 3A → tặng 1C. Còn lại 1A.
* Áp dụng KM2: trừ 1A → tặng 2B. Còn lại 0A.
* **Bỏ qua KM3** vì không được chọn.

Kết quả:

* CTKM áp dụng: KM1, KM2
* Quà tặng: 1C, 2B
* KM3 không được áp dụng.

## Lưu ý khi nhấn "Áp dụng"

Khi nhấn Áp dụng CTKM tại màn hình get list promotion, hệ thống thực hiện xử lý một số trường hợp sau:

1. Khuyến mãi ưu tiên

* Trường hợp 1:
  + Có cấu hình không đồng thời gồm: 2 CTKM A và B
  + Người dùng chọn 1 trong 2 KM A/B → hệ thống disable KM còn lại
  + Người dùng tắt cấu hình A không thời B hoặc cấu hình hết hiệu lực
  + Lúc này trên đơn hàng họ bắt buộc phải chọn A và B cho CTKM ontop
  + Khi nhấn áp dụng để thực hiện combine →  Hệ thống sẽ báo lỗi: "Cấu hình khuyến mãi đã thay đổi. Vui lòng bấm "Đồng ý" để tải lại danh sách CTKM." →  nhấn Đồng ý →  Reload lại màn hình CTKM ontop → Auto checked A và B
* Trường hợp 2:
  + Có 2 CTKM A và B không thuộc cấu hình không đồng thời
  + Khi vào màn hình get list CTKM → hệ thống mặc định tự động chọn cả 2 CTKM A và B
  + Người dùng thiết lập cấu hình A và B không đồng thời với nhau → lúc này trên đơn hàng chỉ được chọn A hoặc B
  + Khi bấm Áp dụng để thực hiện combine → hệ thống sẽ báo lỗi: <Tên CTKM A> và <Tên CTKM B> không đồng thời, vui lòng chỉ chọn 1 trong 2.
  + - Ví dụ: CTKM Mua 1 tặng 1 và CTKM Mua 1 giảm 5000 không đồng thời, vui lòng chỉ chọn 1 trong 2.
  + Nhấn Đồng ý →  Reload lại màn hình CTKM ontop → Uncheck A và B để user tự chọn lại CTKM ko đồng thời
* Trường hợp 3: User không chọn CTKM không đồng thời nào:

* + Thông báo: Vui lòng chọn đầy đủ các CTKM trước khi áp dụng.
  + Không cho nhấn Áp dụng cho đến khi chọn đủ CTKM đồng thời
* Trường hợp 4: Có 5 loại CTKM KĐT, user chọn ko đủ (chọn 4/5)
  + Thông báo: Vui lòng chọn đầy đủ các CTKM trước khi áp dụng.
  + Không cho nhấn Áp dụng cho đến khi chọn đủ CTKM đồng thời

2. Khuyến mãi bình thường

* Trường hợp 3: User không chọn CTKM không đồng thời nào:
  + Cho nhấn Áp dụng không bắt buộc chọn.
* Trường hợp 4: Có 5 loại CTKM KĐT, user chọn ko đủ (chọn 4/5)
  + Cho nhấn Áp dụng không bắt buộc chọn.