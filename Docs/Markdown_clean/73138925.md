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

# Link UI Bảng giá

<https://app.visily.ai/projects/596df0d2-3f48-4378-85f5-feff1877965c/boards/1330515/elements/993301708>

# 1 Config độ ưu tiên đối tượng áp dụng trong bảng giá

Cấu hình độ ưu tiên đối tượng áp dụng trong bảng giá : SALES\_PRICE\_PRIORITY\_RULE

**Priority càng nhỏ → Độ ưu tiên càng cao**

| Mã đối tượng | Tên đối tượng | Tên hiển thị | Tham số |
| --- | --- | --- | --- |
| REGION | Vùng/Khu vực | Vùng/Khu vực | Priority = 8 |
| DISTRIBUTOR | Nhà phân phối | Nhà phân phối | Priority = 7 |
| SALE\_CHANNEL | Kênh bán hàng | Kênh bán hàng | Priority = 6 |
| STORE\_GROUP | Nhóm điểm bán | Nhóm điểm bán | Priority = 5 |
| STORE\_LOCATION | Vị trí điểm bán | Vị trí điểm bán | Priority = 4 |
| STORE\_TYPE | Loại điểm bán | Loại điểm bán | Priority = 3 |
| STORE\_RANK | Hạng điểm bán | Hạng điểm bán | Priority = 2 |
| STORE | Điểm bán | Điểm bán | Priority = 1 |

# 2 Enhance bảng giá

* Giao diện bảng giá bổ sung:
  + Chia thành 2 tab:
    - Danh sách bảng giá: Màn hình danh sách hiện tại
    - Bảng giá áp dụng hiện tại: Thêm tab này.

## 2.1 Danh sách bảng giá

* Thời gian áp dụng:
  + Hiển thị Từ ngày → Đến ngày
  + Nếu Đến ngày trống thì chỉ hiển thị Từ Ngày

* Trường hợp bảng giá không được cài đặt đối tượng áp dụng Vùng/Khu vực, thì ở 2 cột Vùng/Khu vực sẽ hiển thị tag "Toàn quốc"
* Bổ sung thêm cột Đối tượng áp dụng:
  + Hiển thị đối tượng áp dụng của bảng giá, hiển thị dạng thẻ tag.
  + Không có đối tượng áp dụng, hiển thị: Tất cả
* Bổ sung thêm filter theo Đối tượng áp dụng:
  + Cho phép chọn nhiều đối tượng áp dụng để filter
  + Chỉ cần bảng giá có ít nhất 1 đối tượng áp dụng được chọn trong filter thì sẽ hiển thị.

* Màn hình này sẽ bổ sung button Hủy cho các bảng giá có trạng thái Đã duyệt
* Chỉ những user có quyền Xóa/Hủy ở màn hình này mới thấy được button này
* Khi nhấn vào button hiển thị thông báo: Bạn có muốn hủy bảng giá này không?
  + Trở lại: Đóng popup và quay về màn hình trước đó.
  + Đồng ý:
    - Đưa bảng giá về trạng thái Đã hủy
    - Cập nhật thông tin người cập nhật và thời gian cập nhật
    - Gọi lại chức năng gen bảng giá để cập nhật lại danh sách các bảng giá mới nhất sau khi bảng giá vừa chọn đã bị hủy.

Lưu ý phân quyền hiển thị bảng giá role HO

* Nếu bảng giá thuộc đối tượng áp dụng **Vùng/Khu vực**  
  + Nếu vùng/khu trong bảng giá mà có tồn tại trong vùng/khu vực của account thì có thể thấy được bảng giá này (Chỉ cần tồn tại ít nhất 1 vùng khu vực là sẽ thấy được)
  + Nếu tất cả vùng/khu trong bảng giá mà đều ko tồn tại trong vùng/khu vực của account thì ẩn bảng giá này đi
  + Ví dụ: User đang quản lý HCM và Mekong

    - BG1: HCM, HN
    - BG2: HN, MB
    - BG3: MEKONG

      --> Thì lúc này user có thể thấy dc 2 bảng giá 1 và 3
* Nếu bảng giá thuộc **đối tượng áp dụng NPP**
  + Tài khoản người dùng được phân quyền có NPP chăm sóc thì theo danh sách NPP chăm sóc thì sẽ được thấy bảng giá có chứa NPP đó
    - Chỉ cần tồn tại ít nhất 1 NPP à sẽ thấy được toàn bộ bảng giá
    - Ưu tiên cao nhất
  + Tài khoản người dùng được phân quyền vùng/khu vực có chứa NPP nào thì sẽ được thấy bảng giá có chứa NPP đó. Chỉ cần tồn tại ít nhất 1 NPP à sẽ thấy được toàn bộ bảng giá
* Nếu bảng giá thuộc **đối tượng áp dụng còn lại** → Thì tất cả tài khoản đều thấy được bảng giá

## 2.2 Tab Bảng giá áp dụng hiện tại

* Ở tab này: Đầu ngày hệ thống sẽ thực hiện lấy ra danh sách bảng giá áp dụng cho ngày hiện tại theo đầy đủ các đối tượng áp dụng và hiển thị ở đây.
* Tìm kiếm theo:
  + Mã/Tên bảng giá, Vùng, Khu vực giống bên tab Danh sách bảng giá
  + Khi nhấn button này, hệ thống sẽ thực hiện lấy lại lần nữa và cập nhật danh sách bảng giá mới nhất theo đầy đủ các đối tượng áp dụng.

## 2.3 Chi tiết bảng giá - Role HO

* Thay đổi giao diện xem chi tiết giống như tạo mới bảng giá, không được chỉnh sửa thông tin nào
* Tab Thông tin chung

* Tab Đối tượng áp dụng

* Tab Danh sách sản phẩm
  + Bổ sung phân trang danh sách sản phẩm
  + Bổ sung tìm kiếm danh sách sản phẩm theo Mã sản phẩm, Tên sản phẩm (Search like có dấu và không dấu)

## 2.4 Bảng giá bán - Role NPP

### 2.4.1 Danh sách bảng giá

* Giao diện bảng giá bổ sung:
  + Chia thành 2 tab:
    - Danh sách bảng giá: Màn hình danh sách hiện tại
    - Bảng giá áp dụng hiện tại: Thêm tab này.
  + Bổ sung đối tượng áp dụng cho bảng giá:
    - Hiển thị đối tượng áp dụng của bảng giá, hiển thị dạng thẻ tag
    - Không có đối tượng áp dụng, hiển thị: Tất cả
  + Bổ sung thêm filter theo Đối tượng áp dụng:
    - Cho phép chọn nhiều đối tượng áp dụng để filter
    - Chỉ cần bảng giá có ít nhất 1 đối tượng áp dụng được chọn trong filter thì sẽ hiển thị.

**Tab Bảng Giá Áp dụng hiện tại**

Giống role HO, **chỉ không có button Cập nhật bảng giá mới nhất**, NPP chỉ view ở màn hình này.

Lưu ý phân quyền hiển thị bảng giá role NPP

* Nếu bảng giá thuộc đối tượng áp dụng = Nhà phân phối → Chỉ những NPP trong danh sách đối tượng áp dụng mới được thấy bảng giá này, các NPP ngoài danh sách không được thấy bảng giá
  + Ví dụ bảng giá áp dụng cho NPP 1, NPP 2: Thì khi login account NPP1, NPP2 thì mới thấy bảng giá này, login NPP 3 thì sẽ không thấy bảng giá này.
* Nếu bảng giá thuộc đối tượng áp dụng Vùng/Khu vực → Thì chỉ NPP thuộc vùng khu vực trong điều kiện bảng giá mới thấy được bảng giá này
* Nếu bảng giá thuộc đối tượng áp dụng còn lại → Thì tất cả NPP đều thấy được bảng giá

### 2.4.2 Chi tiết bảng giá role NPP

* Giữ nguyên giao diện, không thay đổi
* Bổ sung đối tượng áp dụng cho bảng giá: Hiển thị đối tượng áp dụng của bảng giá, hiển thị dạng thẻ tag
* Danh sách sản phẩm
  + Bổ sung tìm kiếm danh sách sản phẩm theo Mã sản phẩm, Tên sản phẩm (Search like có dấu và không dấu)

## 2.5 Tạo mới bảng giá

* Thay đổi giao diện thành 3 step để tạo mới bảng giá

### 2.5.1 Step Thông tin chung

* Các thông tin chung bao gồm:
  + Mã bảng giá: Giữ như cũ không thay đổi
  + Tên bảng giá: Giữ như cũ không thay đổi
  + Thời gian áp dụng: Từ ngày - Đến ngày
    - **Bổ sung trường Đến ngày**
    - Đến ngày >= Từ ngày >= Ngày hiện tại
    - **Lưu ý:**
      * Từ ngày , Đến ngày, Đối tượng áp dụng là bảng giá duy nhất, không được trùng nhau
        + Ví dụ:
          - Bảng giá ABC áp dụng cho Hạng điểm bán Vàng, từ ngày 1/1/2025 - 1/1/2026
          - Tạo thêm bảng giá mới XYZ áp dụng cho Hạng điểm bán Vàng, từ ngày 1/1/2025 - 1/1/2026 → Báo lỗi: Trùng với bảng giá @Mã bảng giá, @Tên bảng giá, không thể tạo mới.
      * Nhưng có thể tạo chéo thời gian thời dụng như sau:
        + Ví dụ:
          - Bảng giá ABC áp dụng cho Hạng điểm bán Vàng, từ ngày 1/1/2025 - 1/1/2026
          - Tạo thêm bảng giá mới XYZ áp dụng cho Hạng điểm bán Vàng, từ ngày 30/5/2025 - 1/1/2026 → Có thể tạo bảng giá, khi lấy giá sẽ lấy bảng giá có Từ ngày mới nhất.
  + **NPP điều chỉnh giá: Bỏ chức năng này**
* Thông tin và quy tắc khai báo các trường dữ liệu giữ nguyên không thay đổi
* Button Tiếp tục:
  + Click vào để chuyển qua Step Đối tượng Áp dụng
  + Nếu chưa nhập dữ liệu cho các field bắt buộc thì show lỗi inline chưa nhập liệu và không cho qua Step Đối tượng Áp dụng

### 2.5.2 Step Đối tượng áp dụng

* Không bắt buộc Thêm đối tượng, có thể bỏ qua và chọn "Tiếp tục"
* Trường hợp không chọn bất cứ đối tượng nào thì hiểu là bảng giá áp dụng cho tất cả đối tượng và áp dụng trên phạm vi toàn quốc

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép thao tác?** | **Bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Thêm đối tượng | Button | Có | Không | * Click để thêm đối tượng áp dụng cho bảng giá;  * Chỉ được thêm 1 đối tượng áp dụng * Sau khi nhấn nút thêm đối tượng, button này sẽ ẩn đi, chỉ khi người dùng xóa đối tượng đang thêm thì button mới hiển thị lại |
| Điều kiện | Selectbox Onechoice | Có | Có | * Nếu có chọn điều kiện, thì mỗi điều kiện phải có ít nhất 1 dữ liệu được chọn * Khi chọn Thêm đối tượng; màn hình hiển thị Field "Đối tượng" * Placeholder: Chọn điều kiện * Danh sách điều kiện: Khi nhấp vào trường "Điều kiện", danh sách các tùy chọn sẽ xuất hiện, bao gồm:    + Vùng/Khu vực   + Nhà phân phối   + Kênh bán hàng   + Nhóm điểm bán   + Vị trí điểm bán   + Loại điểm bán   + Hạng điểm bán   + Điểm bán * Mặc định khi mở màn hình không chọn đối tượng nào. |
| Xóa | Button | Có | Không | * Cho phép xóa cụm điều kiện * Trường hợp điều kiện đã có data input => khi chọn xóa hiển thị thông báo: Điều kiện đã có dữ liệu, bạn có chắc chắn muốn xóa?   + Đồng ý: xóa nguyên cụm điều kiện; UI điều kiện bên dưới (nếu có) đẩy lên trên   + Hủy: Tắt thông báo. Không thay đổi dữ liệu màn hình |
| Button Quay lại | Button | Có | Không | * Click vào quay lại Step Thông tin chung * Không cần kiểm tra nhập liệu, nhưng sẽ lưu lại các thông tin đã chọn trên Step Đối tượng áp dụng này |
| Button Tiếp tục | Button | Có | Không | * Click vào để chuyển qua Step Danh sách sản phẩm * Nếu có chọn điều kiện, thì mỗi điều kiện phải có ít nhất 1 dữ liệu được chọn. Nếu không có thì show lỗi inline chưa nhập liệu và không cho qua Step Danh sách sản phẩm |

#### 2.5.2.1 Đối tượng áp dụng = Vùng/Khu vực

* Dữ liệu Vùng/Khu vực được lấy từ màn hình Phân Vùng

  + Trường này cho phép người dùng chọn nhiều Vùng/Khu vực cùng lúc để cài đặt cho bảng giá.
  + **Dựa vào thông tin Vùng/Khu vực ở trường này để lấy thông tin bảng giá áp dụng cho Vùng/Khu vực đã cài đặt**
  + Người dùng có thể tìm kiếm và chọn một hoặc nhiều Vùng/Khu vực từ danh sách có sẵn để để cài đặt cho bảng giá
  + **Mở danh sách:** 
    - Khi người dùng nhấp vào trường **Vùng/Khu vực**, một danh sách các Vùng/Khu vực sẽ được mở ra dưới dạng phân cấp (tree), dữ liệu lấy từ màn hình Phân vùng
    - Vùng/Khu vực load theo phân quyền dữ liệu của người dùng đang đăng nhập.
  + **Tìm kiếm và chọn:** Người dùng có thể cuộn danh sách hoặc nhập từ khóa để tìm kiếm Vùng/Khu vực mong muốn. Sau đó, họ có thể chọn một hoặc nhiều Vùng/Khu vực bằng cách nhấp vào các mục trong danh sách.
  + **Hiển thị lựa chọn:** Các vùng đã chọn sẽ hiển thị trong hộp chọn dưới dạng các nhãn (tags).
    - Nếu chọn Vùng, mặc định sẽ chọn tất cả các khu vực trong Vùng
    - Nếu chọn khu vực:
      * Chọn tất cả khu vực, thì tự động chọn luôn Vùng đó, check cả checkbox trên tree và hiển thị tất cả Vùng và khu vực lên thẻ tag
      * Nếu chỉ chọn 1 trong các khu vực của Vùng, thì chỉ hiển thị khu vực được chọn lên tag. Checkbox vẫn check vào Vùng của Khu vực đó
  + **Xóa lựa chọn:** Người dùng có thể nhấp vào biểu tượng xóa trên từng nhãn (tag) hoặc chọn lại trong danh sách để bỏ chọn Vùng/Khu vực không mong muốn.
  + Trường hợp bỏ chọn toàn bộ các Vùng/Khu vực trong hộp chọn thì mặc định hiểu là **chưa chọn vùng nào.**
  + Khi mở màn hình mặc định không chọn dữ liệu nào trong hộp chọn.
* **Lưu ý:**
  + **Trong 1 đối tượng áp dụng Vùng/Khu vực: Bảng giá áp dụng cho Khu Vực luôn luôn có độ ưu tiên cao hơn bảng giá áp dụng cho Vùng**

#### 2.5.2.2 Đối tượng áp dụng = Nhà phân phối

[Đối tượng áp dụng = Nhà phân phối - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=79903777)

#### 2.5.2.3 Đối tượng áp dụng = Kênh bán hàng

* Trường này cho phép người dùng chọn nhiều kênh bán hàng cùng lúc để cài đặt cho bảng giá.
* Dựa vào thông tin Kênh bán hàng ở danh sách này để lấy bảng giá áp dụng cho kênh bán hàng đã cài đặt
* Cách thức hoạt động chi tiết:

  + Hiển thị danh sách: Khi người dùng truy cập vào phần này, một danh sách thả xuống (dropdown) sẽ xuất hiện, chứa tất cả các Kênh bán hàng đang hoạt động trong hệ thống. Danh sách này được cập nhật động từ cơ sở dữ liệu chính, đảm bảo luôn hiển thị đầy đủ và chính xác các Kênh bán hàng mới nhất.
  + Chọn nhiều giá trị: Người dùng có thể chọn nhiều Kênh bán hàng bằng cách click vào các tùy chọn mong muốn.
  + Hiển thị thẻ: Ngay sau khi người dùng chọn, các Kênh bán hàng đã chọn sẽ được hiển thị dưới dạng các thẻ ngay bên cạnh hộp chọn. Mỗi thẻ sẽ chứa tên của Kênh bán hàng và một dấu "x" nhỏ để xóa.
  + Xóa lựa chọn: Nếu người dùng muốn hủy bỏ một lựa chọn nào đó, họ chỉ cần click vào dấu "x" trên thẻ tương ứng. Thẻ đó sẽ biến mất khỏi danh sách các lựa chọn đã chọn. hoặc click vào tùy chọn đã chọn muốn bỏ trên danh sách hiển thị
  + Trường này là bắt buộc nhưng người dùng không chọn hoặc xóa hết các thẻ đã chọn, hệ thống sẽ hiển thị higlight đỏ như sau: "Kênh bán hàng là bắt buộc!" .
  + Kiểm tra bắt buộc: Khi người dùng nhấn nút "Tiếp tục" hoặc gửi biểu mẫu, hệ thống sẽ kiểm tra xem người dùng đã chọn ít nhất một Kênh bán hàng hay chưa. Nếu chưa, một thông báo lỗi sẽ xuất hiện, yêu cầu người dùng chọn ít nhất một Kênh bán hàng.

#### 2.5.2.4 Đối tượng áp dụng = Nhóm điểm bán

* Trường này cho phép người dùng chọn nhiều Nhóm điểm bán cùng lúc để cài đặt cho bảng giá.
* Dựa vào thông tin Nhóm điểm bán ở danh sách này để lấy bảng giá áp dụng cho Nhóm điểm bán đã cài đặt
* Cách thức hoạt động chi tiết:

  + Hiển thị danh sách: Khi người dùng truy cập vào phần này, một danh sách thả xuống (dropdown) sẽ xuất hiện, chứa tất cả các Nhóm điểm bán đang hoạt động trong hệ thống. Danh sách này được cập nhật động từ cơ sở dữ liệu chính, đảm bảo luôn hiển thị đầy đủ và chính xác các Nhóm điểm bán mới nhất.
  + Chọn nhiều giá trị: Người dùng có thể chọn nhiều Nhóm điểm bán bằng cách click vào các tùy chọn mong muốn.
  + Hiển thị thẻ: Ngay sau khi người dùng chọn, các Nhóm điểm bán đã chọn sẽ được hiển thị dưới dạng các thẻ ngay bên cạnh hộp chọn. Mỗi thẻ sẽ chứa tên của Nhóm điểm bán và một dấu "x" nhỏ để xóa.
  + Xóa lựa chọn: Nếu người dùng muốn hủy bỏ một lựa chọn nào đó, họ chỉ cần click vào dấu "x" trên thẻ tương ứng. Thẻ đó sẽ biến mất khỏi danh sách các lựa chọn đã chọn. hoặc click vào tùy chọn đã chọn muốn bỏ trên danh sách hiển thị
  + Trường này là bắt buộc nhưng người dùng không chọn hoặc xóa hết các thẻ đã chọn, hệ thống sẽ hiển thị higlight đỏ như sau: "Nhóm điểm bán là bắt buộc!" .
  + Kiểm tra bắt buộc: Khi người dùng nhấn nút "Tiếp tục" hoặc gửi biểu mẫu, hệ thống sẽ kiểm tra xem người dùng đã chọn ít nhất một Nhóm điểm bán hay chưa. Nếu chưa, một thông báo lỗi sẽ xuất hiện, yêu cầu người dùng chọn ít nhất một Nhóm điểm bán.

#### 2.5.2.5 Đối tượng áp dụng = Vị trí điểm bán

* Trường này cho phép người dùng chọn nhiều Vị trí điểm bán cùng lúc để cài đặt cho bảng giá.
* Dựa vào thông tin Vị trí điểm bán ở danh sách này để lấy bảng giá áp dụng cho Vị trí điểm bán đã cài đặt
* Cách thức hoạt động chi tiết:

  + Hiển thị danh sách: Khi người dùng truy cập vào phần này, một danh sách thả xuống (dropdown) sẽ xuất hiện, chứa tất cả các Vị trí điểm bán đang hoạt động trong hệ thống. Danh sách này được cập nhật động từ cơ sở dữ liệu chính, đảm bảo luôn hiển thị đầy đủ và chính xác các Vị trí điểm bán mới nhất.
  + Chọn nhiều giá trị: Người dùng có thể chọn nhiều Vị trí điểm bán bằng cách click vào các tùy chọn mong muốn.
  + Hiển thị thẻ: Ngay sau khi người dùng chọn, các Vị trí điểm bán đã chọn sẽ được hiển thị dưới dạng các thẻ ngay bên cạnh hộp chọn. Mỗi thẻ sẽ chứa tên của Vị trí điểm bán và một dấu "x" nhỏ để xóa.
  + Xóa lựa chọn: Nếu người dùng muốn hủy bỏ một lựa chọn nào đó, họ chỉ cần click vào dấu "x" trên thẻ tương ứng. Thẻ đó sẽ biến mất khỏi danh sách các lựa chọn đã chọn. hoặc click vào tùy chọn đã chọn muốn bỏ trên danh sách hiển thị
  + Trường này là bắt buộc nhưng người dùng không chọn hoặc xóa hết các thẻ đã chọn, hệ thống sẽ hiển thị higlight đỏ như sau: "Vị trí điểm bán là bắt buộc!" .
  + Kiểm tra bắt buộc: Khi người dùng nhấn nút "Tiếp tục" hoặc gửi biểu mẫu, hệ thống sẽ kiểm tra xem người dùng đã chọn ít nhất một Vị trí điểm bán hay chưa. Nếu chưa, một thông báo lỗi sẽ xuất hiện, yêu cầu người dùng chọn ít nhất một Vị trí điểm bán.

#### 2.5.2.6 Đối tượng áp dụng = Loại điểm bán

* Trường này cho phép người dùng chọn nhiều Loại điểm bán cùng lúc để cài đặt cho bảng giá.
* Dựa vào thông tin Loại điểm bán ở danh sách này để lấy bảng giá áp dụng cho Loại điểm bán đã cài đặt
* Cách thức hoạt động chi tiết:

  + Hiển thị danh sách: Khi người dùng truy cập vào phần này, một danh sách thả xuống (dropdown) sẽ xuất hiện, chứa tất cả các Loại điểm bán đang hoạt động trong hệ thống. Danh sách này được cập nhật động từ cơ sở dữ liệu chính, đảm bảo luôn hiển thị đầy đủ và chính xác các Loại điểm bán mới nhất.
  + Chọn nhiều giá trị: Người dùng có thể chọn nhiều Loại điểm bán bằng cách click vào các tùy chọn mong muốn.
  + Hiển thị thẻ: Ngay sau khi người dùng chọn, các loại điểm bán đã chọn sẽ được hiển thị dưới dạng các thẻ ngay bên cạnh hộp chọn. Mỗi thẻ sẽ chứa tên của loại điểm bán và một dấu "x" nhỏ để xóa.
  + Xóa lựa chọn: Nếu người dùng muốn hủy bỏ một lựa chọn nào đó, họ chỉ cần click vào dấu "x" trên thẻ tương ứng. Thẻ đó sẽ biến mất khỏi danh sách các lựa chọn đã chọn. hoặc click vào tùy chọn đã chọn muốn bỏ trên danh sách hiển thị
  + Trường này là bắt buộc nhưng người dùng không chọn hoặc xóa hết các thẻ đã chọn, hệ thống sẽ hiển thị higlight đỏ như sau: "Loại điểm bán là bắt buộc!" .
  + Kiểm tra bắt buộc: Khi người dùng nhấn nút "Tiếp tục" hoặc gửi biểu mẫu, hệ thống sẽ kiểm tra xem người dùng đã chọn ít nhất một loại điểm bán hay chưa. Nếu chưa, một thông báo lỗi sẽ xuất hiện, yêu cầu người dùng chọn ít nhất một loại điểm bán.

#### 2.5.2.7 Đối tượng áp dụng = Hạng điểm bán

* Trường này cho phép người dùng chọn nhiều Hạng điểm bán cùng lúc để cài đặt cho bảng giá.
* Dựa vào thông tin Hạng điểm bán ở danh sách này để lấy bảng giá áp dụng cho Hạng điểm bán đã cài đặt
* Cách thức hoạt động chi tiết:

  + Hiển thị danh sách: Khi người dùng truy cập vào phần này, một danh sách thả xuống (dropdown) sẽ xuất hiện, chứa tất cả các Hạng điểm bán đang hoạt động trong hệ thống. Danh sách này được cập nhật động từ cơ sở dữ liệu chính, đảm bảo luôn hiển thị đầy đủ và chính xác các Hạng điểm bán mới nhất.
  + Chọn nhiều giá trị: Người dùng có thể chọn nhiều Hạng điểm bán bằng cách click vào các tùy chọn mong muốn.
  + Hiển thị thẻ: Ngay sau khi người dùng chọn, các Hạng điểm bán đã chọn sẽ được hiển thị dưới dạng các thẻ ngay bên cạnh hộp chọn. Mỗi thẻ sẽ chứa tên của Hạng điểm bán và một dấu "x" nhỏ để xóa.
  + Xóa lựa chọn: Nếu người dùng muốn hủy bỏ một lựa chọn nào đó, họ chỉ cần click vào dấu "x" trên thẻ tương ứng. Thẻ đó sẽ biến mất khỏi danh sách các lựa chọn đã chọn. hoặc click vào tùy chọn đã chọn muốn bỏ trên danh sách hiển thị
  + Trường này là bắt buộc nhưng người dùng không chọn hoặc xóa hết các thẻ đã chọn, hệ thống sẽ hiển thị higlight đỏ như sau: "Hạng điểm bán là bắt buộc!" .
  + Kiểm tra bắt buộc: Khi người dùng nhấn nút "Tiếp tục" hoặc gửi biểu mẫu, hệ thống sẽ kiểm tra xem người dùng đã chọn ít nhất một Hạng điểm bán hay chưa. Nếu chưa, một thông báo lỗi sẽ xuất hiện, yêu cầu người dùng chọn ít nhất một Hạng điểm bán.

#### 2.5.2.8 Đối tượng áp dụng = Điểm bán

[Đối tượng áp dụng = Điểm bán - DMS NEW - Finviet - Document Management](https://kb.finviet.com.vn/pages/viewpage.action?pageId=79908547)

### 2.5.3 Step Danh sách sản phẩm

* Thay đổi cách thêm sản phẩm vào bảng giá
  + Hiện tại: Load all sản phẩm
  + Cần thay đổi: User chọn từng sản phẩm để thêm vào bảng giá

| Tên trường | Mô tả |
| --- | --- |
| Tìm kiếm sản phẩm | * Placeholder: Tìm kiếm theo Mã sản phẩm, Tên sản phẩm * Tooltip: Tìm kiếm theo Mã sản phẩm, Tên sản phẩm * Chọn Tìm kiếm:    + Hiển thị danh sách sản phẩm trên lưới danh sách dựa vào textsearch, Không nhập gì → hiển thị tất cả danh sách sản phẩm đang hoạt động   + Search tiếng việt có dấu,không dấu, không phân biệt chữ hoa, chữ thường * Chọn Làm mới: Refresh màn hình và hiển thị placeholder: "Tìm kiếm; lưới danh sách vẫn giữ nguyên không thay đổi |
| Import | Import sản phẩm  * + Nhấn vào button này → Lấy template import → Thực hiện import dữ liệu Sản phẩm vào lưới danh sách   + File mẫu import: Format tên file mẫu: IMPORT\_PRICE\_PRODUCT\_DD-MM-YYYY\_hhmmss.xlsx   + Rule import theo quy tắc chung đã mô tả ở mục Import   + Templates:  | Mã sản phẩm (\*) | Tên sản phẩm | Giá sau VAT (VND) (\*) | | --- | --- | --- | | SP0103827398 | sản phẩm A1 | 35,000 | | SP0103827399 | sản phẩm A2 | 40,000 | | SP0103827400 | sản phẩm A3 | 50,000 |  * **Mô tả dữ liệu**  | Trường dữ liệu | Kiểu dữ liệu | Mô tả | Kiểm tra | | --- | --- | --- | --- | | Mã sản phẩm (\*) | Text không nhập tiếng việt, không khoảng trắng, không ký tự đặc biệt | * Nhập mã sản phẩm muốn thêm vào bảng giá | Mã sản phẩm để trống (trống 1 line => bỏ qua), nhập không đúng định dạng (Chữ có dấu tiếng việt, ký tự đặc biệt, khoảng trống - trước - trong- sau mã), không tồn tại, không hoạt động trên hệ thống DMS   * Hiển thị thông báo lỗi    + Dòng thứ @n: Mã sản phẩm nhập không đúng định dạng/ không tồn tại/ không hoạt động / bị bỏ trống. Vui lòng kiểm tra lại! | | Tên sản phẩm | Nhập ký tự tự do | * Nhập tên sản phẩm muốn thêm vào bảng giá | * Thông tin tên sản phẩm chỉ để user thực hiện tham chiếu trước khi import, khi import chỉ lấy thông tin mã sản phẩm. | | Giá sau VAT (VND) (\*) | * Nhập số > 0 * Cho phép nhập số thập phân, cho phép 6 số thập phân * Nhập tối đa 10 ký tự | * Nhập giá cho sản phẩm | Giá bán nhập sai định dạng, để trống   * Hiển thị thông báo lỗi    + Dòng thứ @n: Giá bán nhập không đúng định dạng/ bị bỏ trống. Vui lòng kiểm tra lại! |   **Trường hợp import thành công:**     * Nhấn X → Tắt popup và hiển thị danh sách Sản phẩm đã import vào màn hình * Import lần đầu-> Import thành công trên màn hình danh sách * Lần 2 => Skip đối tượng đã tồn tại ở lần 1. * Cộng dồn vào lưới danh sánh, ko replace   **Trường hợp import lỗi:**  Hiển thị các dòng lỗi để user điều chỉnh   * Hiển thị tất cả các dòng lỗi và có phân trang, sau đó user điều chỉnh và import lại sẽ tiếp tục hiển thị lỗi. * Nếu nhấn "Đóng"  sẽ không thêm bất cứ dữ liệu import nào vào màn hình |
| Export | Export ra template để hỗ trợ user kiểm tra lại thông tin như sau:   | Mã sản phẩm (\*) | Tên sản phẩm | Giá sau VAT (VND) (\*) | | --- | --- | --- | | SP0103827398 | sản phẩm A1 | 35,000 | | SP0103827399 | sản phẩm A2 | 40,000 | | SP0103827400 | sản phẩm A3 | 50,000 | |
| Thêm sản phẩm | Nhấn vào button Thêm sản phẩm Hiển thị UI     * Filter: Trạng thái   + Placeholder: Tìm kiếm theo Mã, tên sản phẩm   + Tooltip: Tìm kiếm theo Mã, tên sản phẩm   + Chọn Tìm kiếm: Hiển thị danh sách sản phẩm **đang hoạt động** dựa vào textsearch, Không nhập gì → hiển thị tất cả danh sách sản phẩm đang hoạt động   + Chọn Làm mới: Refresh màn hình và hiển thị placeholder: "Tìm kiếm; lưới danh sách vẫn giữ nguyên không thay đổi   Danh sách sản phẩm:  Hiển thị tất cả sản phẩm **đang hoạt động** trên hệ thống   * + Mã sản phẩm   + Tên sản phẩm, phân cấp, đơn vị kinh doanh: hiển thị theo mã sản phẩm   + Trạng thái: hiển thị theo trạng thái  của sản phẩm   + Phân trang hiển thị    Check để chọn sản phẩm;  * Check box cho phép chọn các Sản phẩm để insert vào Grid Sản phẩm. * Cho phép check một hoặc nhiều * Cho phép check All, chọ all các trang trên màn hình * Trường hợp tạo mới bảng giá: Không giới hạn sản phẩm được thêm vào, trường hợp chỉnh sửa bảng giá: Cho phép chọn tối đa 200 sản phẩm/1 lần thêm  (Áp dụng cho thêm trên portal và thêm từ file import)   => Sau khi chọn →  hiển thị số mục được chọn và cho phép xóa hàng loạt    Chọn Xóa hiển thị thông báo: Bạn chắc chắn muốn xóa? Chọn Đồng ý: Xóa tất cả các mục đã chọn; chọn Hủy: Tắt popup và vẫn giữ nguyên trạng thái  -------  ***lưu ý:***   * Khi thao tác trên pop-up Thêm Sản phẩm, thì ngoài danh sách Sản phẩm của bảng giá cũng update theo, và ngược lại   + Nếu bỏ check ở trên popup thì ngoài lưới danh sách không hiển thị và ngược lại  * + Nếu xóa trên lưới danh sách thì khi mở popup, filter dữ liệu Sản phẩm đã xóa sẽ thấy uncheck Sản phẩm * Mở Popup lần sau, hiển thị checked đối với các sản phẩm đã chọn trước đó.   *--*  Button "**Đồng ý**":   * Cho phép người dùng insert danh sách Sản phẩm đã chọn vào Grid Danh sách Sản phẩm ngoài màn hình chính và đóng Popup * Khi nhấn đồng ý, kiểm tra trạng thái của của sản phẩm, chỉ được thêm vào sản phẩm đang hoạt động * Trường hợp có sản phẩm ngưng hoạt động, khi nhấn đồng ý sẽ hiển thị thông báo: @Mã sản phẩm - @Tên sản phẩm có trạng thái ngưng hoạt động, không thể thêm vào bảng giá! (Trường hợp có nhiều mã sản phẩm ngưng hoạt động, chỉ thông báo 1 sản phẩm đầu tiên, sau đó user điều chỉnh mới thực hiện hiển thị các thông báo cho các mã SP tiếp theo)   **Lưu ý:**   * Khi đã add Sản phẩm ; Chọn  back về màn hình trước rồi quay lại vẫn hiển thị danh sách đã chọn * Hoặc chọn Tiếp tục => Chọn back về lại vẫn thấy danh sách Sản phẩm đã chọn * Chọn add Thêm thành công; sau đó chọn add thêm nữa => Danh sách đã chọn vẫn hiển thị "đã chọn", muốn bỏ chọn thì uncheck và nhấn Đồng ý |
| * Xóa tất cả n sản phẩm | Trường hợp trên lưới danh sách chọn >= 1 sản phẩm, sẽ hiển thị dòng text này  Text cho phép xóa, trong đó n là tất cả các sản phẩm trên tất cả các page (Những line được xóa sẽ hiển thị icon "Xóa", n là tổng các line có icon xóa). |
| Lưới danh sách | |
| Mã sản phẩm. Tên sản phẩm, Đơn vị | Thông tin sản phẩm được chọn và đơn vị cơ bản của sản phẩm  Bảng giá phải có ít nhất 1 sản phẩm mới được lưu hoặc (lưu và duyệt) |
| Giá sau VAT (VND) | * Bắt buộc nhập * Nhập số >0 * Cho phép nhập số thập phân, cho phép 6 số thập phân * Format tiền tệ (hàng nghìn) * Nhập tối đa 10 ký tự |
| Xóa | Nhấn button này để xóa sản phẩm trên lưới danh sách, xóa từng sản phẩm. |
| Button Quay lại | * Click vào quay lại Step Đối tượng Áp dụng * Không cần kiểm tra nhập liệu, nhưng sẽ lưu lại các thông tin đã chọn trên Step này |

## 2.6 Chỉnh sửa bảng giá - Role HO

* Rule chỉnh sửa giữ nguyên không thay đổi
* Cho phép chỉnh sửa tất cả thông tin
* Giao diện sẽ thay đổi 3 step giống giao diện tạo mới

## 2.7 Lưu bảng giá

* Kiểm tra tất cả điều kiện và thực hiện lưu bảng giá
* Lưu ý trạng thái của sản phẩm:
  + Chỉ được thêm sản phẩm đang hoạt động vào bảng giá
  + Trường hợp có sản phẩm ngưng hoạt động, khi nhấn Lưu sẽ hiển thị thông báo: @Mã sản phẩm - @Tên sản phẩm có trạng thái ngưng hoạt động, không thể thêm vào bảng giá! (Trường hợp có nhiều mã sản phẩm ngưng hoạt động, chỉ thông báo 1 sản phẩm đầu tiên, sau đó user điều chỉnh mới thực hiện hiển thị các thông báo cho các mã SP tiếp theo)

# 3 Quy tắc lấy giá bán

## 3.1 Quy tắc

Khi hệ thống cần xác định bảng giá áp dụng cho một điểm bán vào một ngày cụ thể, sẽ thực hiện theo các bước:

Lưu ý

Ẩn chức năng sao chép/điều chỉnh trên NPP, NPP chỉ được view bảng giá

| Bước | Mô tã |
| --- | --- |
| Bước 1 | Xác định ngày tạo đơn hàng |
| Bước 2 | Xác định điểm bán thuộc đối tượng nào trong các đối tượng sau:   * Thuộc danh sách điểm bán cụ thể * Hạng điểm bán * Loại điểm bán * Vị trí điểm bán * Nhóm điểm bán * Kênh bán hàng * Nhà phân phối * Vùng / Khu vực   → Lấy ra được tập dữ liệu của điểm bán, ví dụ:   * Thuộc danh sách điểm bán cụ thể * Hạng đồng * Loại cửa hàng sĩ * Trong hẻm * Nhóm A * Kênh GT * Nhà phân phối NPP1 * Khu vực HCM |
| Bước 3 | Xác định độ ưu tiên của các đối tượng ở bước 2 ở cấu hình : SALES\_PRICE\_PRIORITY\_RULE |
| Bước 4 | * Lọc các bảng giá có Từ ngày trong Thời gian áp dụng <= Ngày tạo đơn hàng và Đến ngày >= Ngày tạo đơn hàng |
| Bước 5 | * Từ tập bảng giá ở bước 4 * Lấy ra các bảng giá có đối tượng áp dụng khớp với tập dữ liệu của điểm bán ở Bước 2. |
| Bước 6 | * Hệ thống bắt đầu từ đối tượng có độ ưu tiên **cao nhất (priority thấp nhất)** → đến thấp hơn theo config độ ưu tiên ở cấu hình : SALES\_PRICE\_PRIORITY\_RULE * Kiểm tra các bảng giá theo từng cấp đối tượng như sau:    + Lọc bảng giá áp dụng cho đối tượng tương ứng      - Ưu tiên 1: bảng giá áp dụng theo *Mã điểm bán*     - Ưu tiên 2: bảng giá theo *Hạng điểm bán*     - ...     - Ưu tiên 8: bảng giá theo *Vùng / Khu vực*   + Tại mỗi cấp ưu tiên      - Kiểm tra xem điểm bán hiện tại có khớp với đối tượng của bảng giá hay không. (Ví dụ: điểm bán có đúng hạng, đúng nhóm, đúng kênh...)     - Nếu có nhiều bảng giá cùng cấp → chọn bảng giá có `"Từ ngày"` lớn nhất nhưng **không vượt quá ngày đơn hàng**.   + Ngay khi tìm được bảng giá ở 1 cấp ưu tiên → DỪNG     - Không tiếp tục kiểm tra cấp ưu tiên thấp hơn nữa     - Tránh tình trạng chọn nhầm bảng giá rộng hơn   + Nếu xét hết các cấp ưu tiên mà không tìm thấy sẽ xét tới bảng giá base không có đối tượng áp dụng   + Nếu **không có bảng giá** → chuyển xuống cấp ưu tiên tiếp theo |
| Bước 7 | * Truy xuất tất cả sản phẩm thuộc bảng giá vừa xác định * Mỗi dòng sản phẩm gồm:    + Mã sản phẩm   + Tên sản phẩm   + Giá bán   + Đơn vị tính (nếu có) |

## 3.2 Ví dụ

| Ví dụ | **Thông tin (bao gồm dữ liệu bảng giá & logic chọn)** |
| --- | --- |
| 1. Có bảng giá áp dụng theo điểm bán | 🔹 **Điểm bán:** `OUT001`  🔹 **Ngày đơn hàng:** 22/07/2025  🔹 **Bảng giá:**  – `BG001` – Áp dụng cho Điểm bán `OUT001`, Thời gian áp dụng: 01/07/2025  – `BG002` – Áp dụng cho Hạng `GOLD`, Thời gian áp dụng: 01/06/2025    ✅ **Chọn BG001** vì đối tượng "Điểm bán" có ưu tiên cao nhất |
| 2. Không có bảng giá theo điểm bán, có theo hạng điểm bán | 🔹 **Điểm bán:** `OUT002`, Hạng: `GOLD`  🔹 **Ngày đơn hàng:** 22/07/2025  🔹 **Bảng giá:**  – `BG003` – Áp dụng Hạng `GOLD`, Thời gian: 01/06/2025  – `BG004` – Áp dụng Loại `Tạp hóa`, Thời gian: 01/05/2025    ✅ **Chọn BG003** vì hạng điểm bán có ưu tiên cao hơn loại điểm bán |
| 3. Không có điểm bán/hạng, chọn theo loại điểm bán | 🔹 **Điểm bán:** `OUT003`, Loại: `Tạp hóa`  🔹 **Bảng giá:**  – `BG005` – Áp dụng Loại `Tạp hóa`, Thời gian: 01/06/2025  – `BG006` – Áp dụng theo Vị trí `Thành thị`, Thời gian: 01/04/2025    ✅ **Chọn BG005** vì loại điểm bán có ưu tiên cao hơn vị trí điểm bán |
| 4. Chỉ có bảng giá theo vùng | 🔹 **Điểm bán:** `OUT004`, Vùng: `Miền Nam`  🔹 **Bảng giá:**  – `BG007` – Áp dụng cho vùng `Miền Nam`, Thời gian: 01/03/2025    ✅ **Chọn BG007** vì không có bảng giá nào khác |
| 5. Nhiều bảng giá cùng cấp, chọn theo thời gian gần nhất | 🔹 **Điểm bán:** `OUT005`, Kênh: `GT`  🔹 **Bảng giá:**  – `BG008` – Áp dụng Kênh `GT`, Thời gian: 01/05/2025  – `BG009` – Áp dụng Kênh `GT`, Thời gian: 10/07/2025    ✅ **Chọn BG009** vì thời gian gần ngày đơn hàng hơn |
| 6. Có đủ cấp, chọn đúng theo ưu tiên cao nhất | 🔹 **Điểm bán:** `OUT006`  🔹 **Thuộc:** Hạng `PLATINUM`, Kênh `MT`, Vùng `Miền Bắc`  🔹 **Bảng giá:**  – `BG010` – Kênh `MT`, Thời gian: 01/05/2025  – `BG011` – Hạng `PLATINUM`, Thời gian: 01/06/2025  – `BG012` – Vùng `Miền Bắc`, Thời gian: 01/03/2025    ✅ **Chọn BG011** vì hạng điểm bán có ưu tiên cao nhất trong số các bảng giá khớp |
| 7. Không có bảng giá còn hiệu lực | 🔹 **Điểm bán:** `OUT007`, Hạng: `SILVER`  🔹 **Ngày đơn hàng:** 22/07/2025  🔹 **Bảng giá:**  – `BG013` – Hạng `SILVER`, Thời gian: 01/06/2024 (**quá 365 ngày**)    ❌ **Không chọn được bảng giá** vì không có bảng giá còn hiệu lực trong khoảng thời gian cho phép |
| 8. Ngày đơn hàng lùi về quá khứ | 🔹 **Ngày đơn hàng:** 01/01/2025  🔹 **Điểm bán:** `OUT008`  🔹 **Bảng giá:**  – `BG014` – Áp dụng cho điểm bán `OUT008`, Thời gian áp dụng: 15/12/2024  ✅ **Chọn BG014** vì vẫn nằm trong khoảng cho phép (từ 01/01/2024 đến 01/01/2025) |
| 9. Nhiều bảng giá cùng ngày – Ưu tiên theo đối tượng áp dụng | 🔹 **Điểm bán:** `OUT009`  🔹 **Ngày đơn hàng:** 20/07/2025  🔹 **Thuộc:**– Hạng: `GOLD`– Loại: `Tạp hóa`– Vị trí: `Thành thị`  🔹 **Bảng giá:**  – `BG015`: Hạng `GOLD`, Thời gian: 01/07/2025  – `BG016`: Loại `Tạp hóa`, Thời gian: 01/07/2025  – `BG017`: Vị trí `Thành thị`, Thời gian: 01/07/2025    ✅ **Chọn BG015** – Vì hạng có mức ưu tiên cao hơn loại & vị trí |
| 10. Có bảng giá riêng cho điểm bán và cho nhà phân phối – Cùng ngày | 🔹 **Điểm bán:** `OUT010`  🔹 **Nhà phân phối:** `NPP_A`  🔹 **Bảng giá:**  – `BG018`: Điểm bán `OUT010`, Thời gian: 01/07/2025  – `BG019`: Nhà phân phối `NPP_A`, Thời gian: 01/07/2025    ✅ **Chọn BG018** – Vì bảng giá áp dụng trực tiếp cho điểm bán có ưu tiên cao hơn nhà phân phối |
| 11. Có bảng giá hạng điểm bán mới hơn nhưng cấp ưu tiên thấp hơn | 🔹 **Điểm bán:** `OUT011`  🔹 **Bảng giá:**  – `BG020`: Điểm bán `OUT011`, Thời gian: 01/06/2025  – `BG021`: Hạng `PLATINUM`, Thời gian: 15/07/2025    ✅ **Chọn BG020** – Vì bảng giá cấp ưu tiên cao hơn, dù thời gian cũ hơn |
| 12. Có bảng giá theo kênh – nhưng điểm bán không thuộc kênh nào trong bảng giá | 🔹 **Điểm bán:** `OUT012`, Kênh: `MT`  🔹 **Bảng giá:**  – `BG022`: Kênh `GT`, Thời gian: 01/07/2025  – `BG023`: Vị trí `Thành thị`, Thời gian: 01/07/2025    ✅ **Chọn BG023** – Vì BG022 không khớp kênh điểm bán |
| 13. Có bảng giá theo nhóm điểm bán và loại điểm bán – ưu tiên theo thứ tự cấu hình | 🔹 **Điểm bán:** `OUT013`  🔹 **Thuộc:**– Nhóm: `VIP`– Loại: `Siêu thị`  🔹 **Bảng giá:**  – `BG024`: Loại `Siêu thị`, Thời gian: 01/06/2025  – `BG025`: Nhóm `VIP`, Thời gian: 01/06/2025    ✅ **Chọn BG025** – Vì “Nhóm điểm bán” có độ ưu tiên cao hơn loại điểm bán trong cấu hình hệ thống |
| 14. Có bảng giá theo nhiều đối tượng cùng cấp – chọn theo thứ tự ưu tiên cấu hình | 🔹 **Điểm bán:** `OUT014`  🔹 **Bảng giá:**  – `BG026`: Áp dụng cho Kênh `GT`, Thời gian: 01/07/2025  – `BG027`: Áp dụng cho Nhóm điểm bán `A`, Thời gian: 01/07/2025    ✅ **Chọn theo cấu hình ưu tiên giữa “Kênh” và “Nhóm”** – Ví dụ nếu “Nhóm điểm bán” có ưu tiên cao hơn thì chọn `BG027`, ngược lại chọn `BG026` |
| 15. Có nhiều bảng giá cùng ngày, sản phẩm A giá khác nhau | 🔹 **Điểm bán**: OUT015  🔹 **Hạng:** SILVER, Kênh: GT  🔹 **Bảng giá:**  – BG030: Hạng SILVER, Thời gian áp dụng: 01/07/2025, A = 50,000  – BG031: Kênh GT, Thời gian áp dụng: 01/07/2025, A = 0    ✅ **Chọn BG030** vì hạng có độ ưu tiên cao hơn kênh bán hàng → A = 50,000 |
| 16. Điểm bán có bảng riêng, nhưng sản phẩm A trong bảng đó có giá = 0 | 🔹 **Điểm bán:** OUT016  🔹 **Bảng giá**:  – BG032: Áp dụng cho OUT016, Thời gian: 15/07/2025, A = 0  – BG033: Áp dụng Hạng PLATINUM, Thời gian: 01/07/2025, A = 55,000    ✅ **Chọn BG032** vì áp dụng cho đúng điểm bán → Dù A = 0, vẫn phải dùng giá này |
| 17. Không có bảng giá ở cấp cao, chọn bảng thấp hơn có giá A > 0 | 🔹 **Điểm bán**: OUT017 (không có bảng riêng)  🔹 **Bảng giá**:  – BG034: Hạng PLATINUM, Thời gian: 01/06/2025, A = 0  – BG035: Kênh GT, Thời gian: 01/06/2025, A = 52,000    ✅ **Chọn BG034** vì cấp Hạng cao hơn, mặc dù giá A = 0 |
| 18. Nhiều bảng giá trùng cấp đối tượng, chọn thời gian gần nhất | 🔹 **Điểm bán**: OUT018 (Loại điểm bán: Tạp hóa)  🔹 **Bảng giá**:  – BG036: Loại “Tạp hóa”, Thời gian: 01/04/2025, A = 60,000  – BG037: Loại “Tạp hóa”, Thời gian: 15/07/2025, A = 0    ✅ **Chọn BG037** vì thời gian gần ngày đơn hàng nhất → A = 0 |
| 19. Tất cả bảng giá có A = 0, vẫn phải chọn đúng bảng | 🔹 **Điểm bán**: OUT019  🔹 **Bảng giá:**  – BG038: Hạng GOLD, Thời gian: 01/05/2025, A = 0  – BG039: Loại điểm bán, Thời gian: 01/06/2025, A = 0    ✅ **Chọn BG038** vì ưu tiên cao hơn, dù giá A = 0 |
| 20. Có bảng giá theo nhóm điểm bán và kênh – cả 2 cùng ngày | 🔹 **Điểm bán**: OUT020 (Nhóm: VIP, Kênh: MT)  🔹 **Bảng giá:**  – BG040: Nhóm VIP, Thời gian: 01/07/2025, A = 45,000  – BG041: Kênh MT, Thời gian: 01/07/2025, A = 40,000    ✅ **Nếu hệ thống cấu hình Nhóm ưu tiên cao hơn Kênh** → chọn BG040 → A = 45,000 |

# 4 Export bảng giá bán

* Nút "Export Excel" sẽ xuất dữ liệu dựa trên các bộ lọc và tiêu chí tìm kiếm đã áp dụng.
* Template excel như sau:
* Format tên file xuất ra: Danhsachbanggia\_DDMMYYYYHHMMSS
* File excel sẽ bao gồm 2 sheet:
  + Sheet Danh sách bảng giá: Chứa thông tin bảng giá, sản phẩm và giá bán
  + Sheet Đối tượng áp dụng: Chứa thông tin bảng giá và đối tượng áp dụng của bảng giá
* File export này sẽ giới hạn 500,000 dòng/1 sheet, trường hợp export quá 500.000 dòng/1 sheet hệ thống sẽ báo lỗi ko export được, user phải tự filter bảng giá ít lại để export
  + Thông báo lỗi như sau: Chỉ export được tối đa 500,000 dòng (Sheet @Tên Sheet bị quá số lượng dòng), vui lòng lọc danh sách bảng giá ít hơn để export!
  + Chỉ cần 1 trong 2 sheet bị quá 500,000 dòng thì sẽ báo lỗi.
  + Ví dụ: 
    - Chỉ export được tối đa 500,000 dòng (Sheet Đối tượng áp dụng bị quá số lượng dòng), vui lòng lọc danh sách bảng giá ít hơn để export!
    - Chỉ export được tối đa 500,000 dòng (Sheet Danh sách bảng giá bị quá số lượng dòng), vui lòng lọc danh sách bảng giá ít hơn để export!
    - Chỉ export được tối đa 500,000 dòng (Sheet Danh sách bảng giá, Đối tượng áp dụng bị quá số lượng dòng), vui lòng lọc danh sách bảng giá ít hơn để export!
* Button Export sẽ xuất hiện ở 2 tab Danh sách bảng giá và Bảng giá áp dụng hiện tại.

**Mô tả trường dữ liệu:**

## **Sheet Danh sách bảng giá**

* Export sẽ nhóm theo Mã bảng giá
* Sắp xếp theo Mã bảng giá có ngày cập nhật mới nhất
* Trong 1 bảng giá, sắp xếp theo Alphabet của Tên sản phẩm

|  | Trường dữ liệu | Mô tả |
| --- | --- | --- |
| 1 | Mã bảng giá | Thông tin bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| 2 | Tên bảng giá | Thông tin bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| 3 | Áp dụng từ ngày | Thông tin thời gian áp dụng bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| 4 | Áp dụng đến ngày | Thông tin thời gian áp dụng bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| 5 | Trạng thái bảng giá | Trạng thái của bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| 6 | Ngành Hàng | Thông tin cấu trúc cây sản phẩm cấp 1 của Mã sản phẩm Hiển thị tên cấp 1 |
| 7 | Nhãn Hàng | Thông tin cấu trúc cây sản phẩm cấp 2 của Mã sản phẩm Hiển thị tên cấp 2 |
| 8 | Chủng loại | Thông tin cấu trúc cây sản phẩm cấp 3 của Mã sản phẩm Hiển thị tên cấp 3 |
| 9 | Mã sản phẩm | Mã sản phẩm trên bảng giá |
| 10 | Tên sản phẩm | Tên sản phẩm trên bảng giá |
| 11 | Đơn vị | Đơn vị của sản phẩm trên bảng giá |
| 12 | VAT | Thông tin VAT hiện tại của sản phẩm tại thời điểm export bảng giá (Lấy từ master data sản phẩm) |
| 13 | Giá trước  VAT (VND) | Thông tin giá sản phẩm trước VAT Format tiền tệ (phần nghìn) |
| 14 | Giá sau VAT (VND) | Thông tin giá sản phẩm sau VAT Format tiền tệ (phần nghìn) |
| 15 | Trạng thái sản phẩm | Trạng thái hiện tại của sản phẩm tại thời điểm export bảng giá (Lấy từ master data sản phẩm) |
| 16 | Ngày tạo | Thông tin ngày tạo bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá Format DD-MM-YYYY HH:MM:SS |
| 17 | Người tạo | Thông tin tài khoản người dùng tạo bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá Format Mã tài khoản - Tên tài khoản |
| 18 | Ngày cập nhật | Thông tin ngày cập nhật bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá Format DD-MM-YYYY HH:MM:SS |
| 19 | Người cập nhật | Thông tin tài khoản người dùng cập nhật bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá Format Mã tài khoản - Tên tài khoản |

## **Sheet Đối tượng áp dụng**

* Sắp xếp mã bảng giá của sheet đối tượng áp dụng phải giống với sheet Danh sách bảng giá
* Trong cùng 1 bảng giá sẽ nhóm theo từng đối tượng áp dụng: Ví dụ nhóm Vùng/Khu vực rồi mới đến nhóm Nhà phân phối
* Trong cùng 1 đối tượng áp dụng sẽ sắp xếp theo alphabet của tên đối tượng

|  | Trường dữ liệu | Mô tả |
| --- | --- | --- |
| 1 | Mã bảng giá | Thông tin bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| 2 | Tên bảng giá | Thông tin bảng giá Các thông tin này sẽ lặp lại trên từng dòng theo từng mã sản phẩm trên bảng giá |
| 3 | Đối tượng | Thông tin đối tượng áp dụng của bảng giá Hiển thị 1 đối tượng áp dụng trên 1 dòng, kèm theo thông tin chi tiết đối tượng áp dụng, sau khi đã liệt kê đủ chi tiết đối tượng áp dụng , mới chuyển sang đối tượng tiếp theo. Ví dụ: Bảng giá có 2 đối tượng áp dụng Vùng/Khu vực và Nhà phân phối, dữ liệu hiển thị như sau - Dòng 1: Vùng/Khu vực, Mã vùng 1, Tên vùng 1 - Dòng 2: Vùng/Khu vực, Mã vùng 2, Tên vùng 2 - Dòng 3: Nhà phân phối, NPP001, Nhà phân phối 001 - Dòng 4: Nhà phân phối, NPP002, Nhà phân phối 002 |
| 4 | Mã đối tượng | Thông tin mã chi tiết của đối tượng. Ví dụ: NPP001, NPP002 |
| 5 | Tên đối tượng | Thông tin tên chi tiết của đối tượng. Ví dụ: Nhà phân phối 001, Nhà phân phối 002 |