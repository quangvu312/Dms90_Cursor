|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.0  RedV1.1.0 :  Bỏ màn hình Tìm kiếm nhân viên  Chọn "Đổi" hiển thị màn hình Danh sách nhân viên. Sau khi chọn vùng thông tin nhân viên sẽ load dữ liệu tương ứng trên màn hình để xem. |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

# Chọn nhân viên để xem dữ liệu

RedV1.1.0 Điều chỉnh flow chọn nhân viên để xem dữ liệu

**Quy trình:**

trueFlow Choose Userfalseautotoptrue16412

**Ở bất kỳ màn hình nào có chức năng hiển thị thông tin nhân viên đang được chọn để xem dữ liệu**

UI mặc định:

* Chọn vào button Đổi để thực hiện tìm và chọn một nhân viên khác để xem dữ liệu, hệ thống hiển thị màn hình Danh sách nhân viên, sẽ được mô tả bên dưới.
* Sau khi đã đổi nhân viên → UI hiển thị: 
  + Chọn button Đổi → như trên
  + Chọn "Xem thông tin của tôi": Quay về UI tất cả nhân viên của chính mình như ban đầu.

**Hoặc màn hình chức năng có thanh text search Tìm theo Tên, Mã nhân viên, SĐT, khi chọn sẽ hiển thị màn hình Danh sách nhân viên**

**Bỏ màn hình Tìm kiếm nhân viên; bỏ icon**

(Nội dung này bỏ)

Bỏ màn hình Tìm kiếm nhân viên

* hệ thống hiển thị màn hình tìm kiếm nhân viên như sau~~:~~

* Tìm kiếm:
  + Search like theo Mã, Tên và số điện thoại của nhân viên
  + Chỉ tìm kiếm được nhân viên cấp dưới của nhân viên đang đăng nhập
* Tìm kiếm gần đây:
  + Hiển thị danh sách nhân viên mà tài khoản đang đăng nhập đã tìm kiếm gần đây, sắp xếp theo tìm kiếm gần nhất để lên trên.
  + Hiển thị 20 dữ liệu tìm kiếm gần nhất
  + Phải tìm kiếm ra được nhân viên thì mới lưu lại thông tin đã tìm kiếm. Trường hợp tìm kiếm trùng thông tin thì ghi đè lên thông tin trước đó (Ví dụ gần đây có tìm kiếm nhân viên Nguyễn Văn A, sau đó lại tìm kiếm nhân viên Nguyễn Văn A thì sẽ lấy lần tìm kiếm sau ghi đè lên lần tìm kiếm trước)
* Kết quả tìm kiếm hiển thị thông tin bao gồm:
  + Hình ảnh nhân viên
  + Tên nhân viên
  + Chức vụ
  + Mã nhân viên
  + Số điện thoại nhân viên
* Chọn vào nhân viên để tiến hành đổi nhân viên xem dữ liệu
* - Xem danh sách nhân viên: Khi bấm vào chức năng này,

# Xem danh sách nhân viên List\_User

* Hiển thị danh sách nhân viên cấp dưới của nhân viên đang đăng nhập theo phân cấp cây salesforce được tạo ở màn hình [Định nghĩa cây SalesForce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357)
  + Role SD > RSM > ASM > SS > SM
  + Danh sách theo alphabet

* Tìm kiếm:
  + Search like theo **Mã, Tên và số điện thoại của nhân viên**
  + Chỉ tìm kiếm được nhân viên cấp dưới của nhân viên đang đăng nhập và hiển thị các dữ liệu tương ứng theo từng tab. Có đếm số lượng nhân viên trên từng tab như UI

* Danh sách cấp dưới List\_Under
  + Mặc định hiển thị Tab "Tất cả"
  + Hiển thị danh sách nhân viên cấp dưới của nhân viên đang đăng nhập theo phân cấp cây salesforce được tạo ở màn hình [Định nghĩa cây SalesForce](https://kb.finviet.com.vn/pages/viewpage.action?pageId=42587357)
    - Trường hợp nhân viên thuộc cây salesforce mà không có thông tin sẽ hiển thị dạng "-"
  + Phân chia danh sách nhân viên cấp dưới theo chức vụ của nhân viên theo từng tab.
    - Sắp xếp theo Alphabet Tên nhân viên
    - Chức vụ chỉ hiển thị các chức vụ cấp dưới của nhân viên đang đăng nhập

* + - * Role đang login là Giám đốc toàn quốc, chỉ hiển thị: Tất cả, Quản lý vùng, Quản lý khu vực, Giám sát bán hàng, Nhân viên kinh doanh
      * Role đang login là Quản lý vùng, chỉ hiển thị: Tất cả, Quản lý khu vực, Giám sát bán hàng, Nhân viên kinh doanh
      * Role đang login là Quản lý khu vực, chỉ hiển thị: Tất cả, Giám sát bán hàng, Nhân viên kinh doanh
      * Role đang login là Giám sát bán hàng, chỉ hiển thị: Nhân viên kinh doanh
    - Click vào từng tab chức vụ sẽ reload danh sách nhân viên bên dưới theo chức vụ tương ứng
  + Thông tin nhân viên bao gồm:
    - Hình ảnh nhân viên
    - Tên nhân viên
    - Chức vụ của nhân viên đó
    - Mã nhân viên
    - Số điện thoại nhân viên
    - : Số lượng nhân viên theo chức vụ mà nhân viên đó đang quản lý, Chọn button sẽ đi đến màn hình  Chi tiết nhân viên và focus vào chức vụ đã chọn của nhân viên
    - : Chọn vào button này sẽ hiển thị cấp trên của nhân viên theo cây salesforce 
      * Hiển thị Hyperlink các nhân viên cấp dưới của nhân viên đăng nhập và chính mình (ví dụ **role login là RSM**; khi chọn xem nhân viên có role SS→ Cây saleforce hiển thị các cấp trên trực thuộc là ví dụ: SS → ASM → RSM → SĐ)
      * Khi chọn nhân viên có hyperlink → hiển thị màn hình Chi tiết nhân viên của nhân viên đã chọn
        + Nhân viên login có role thấp hơn, khi chọn xem dữ liệu của nhân viên role cao hơn sẽ hiển thị popup:
    - Chọn vào chi tiết một nhân viên . Click vùng dữ liệu nhân viên (Không phải hyperlink Tên nhân viên) => sẽ hiển thị dữ liệu danh sách trên từng màn hình chức năng tương ứng (ví dụ: Danh sách điểm bán, Danh sách đăng ký trưng bày; Danh sách đăng ký tichs lũy. Doanh số đơn hàng, ...). **Lưu ý: Tùy từng màn hình chức năng dữ liệu sẽ hiển thị tương ứng**

Khi Scroll:

Detail

# Màn hình Chi tiết nhân viên

* Tìm kiếm:
  + Search like theo **Mã, Tên và số điện thoại của nhân viên**
  + Chỉ tìm kiếm được nhân viên cấp dưới của nhân viên đang xem và hiển thị các dữ liệu tương ứng theo từng tab. Có đếm số lượng nhân viên trên từng tab như UI

* Danh sách cấp dưới: Hiển thị tương tự màn hình Danh sách nhân viên nhưng dữ liệu hiển thị là của nhân viên theo "Thông tin đang xem"

* Chọn vào chi tiết một nhân viên . Click vùng dữ liệu nhân viên (Không phải hyperlink Tên nhân viên) => sẽ hiển thị dữ liệu danh sách trên từng màn hình chức năng tương ứng (ví dụ: Danh sách điểm bán, Danh sách đăng ký trưng bày; Danh sách đăng ký tichs lũy. Doanh số đơn hàng, ...). **Lưu ý: Tùy từng màn hình chức năng dữ liệu sẽ hiển thị tương ứng**
* **Chọn "Back" về màn hình Danh sách nhân viên, Reload lại màn hình**

---

Các màn hình liên quan trên app quản lý như sau:

* Homepage [https://kb.finviet.com.vn/display/DMSNEW/%5BManager\_App%5D+Homepage](https://kb.finviet.com.vn/display/DMSNEW/%5BManager_App%5D+Homepage "Follow link")
* Báo cáo: [https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023437&src=contextnavpagetreemode](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023437&src=contextnavpagetreemode "Follow link")
* Kế hoạch làm việc [https://kb.finviet.com.vn/pages/viewpage.action?pageId=53038593](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53038593 "Follow link")

Khác:

* Bản đồ tuyến [https://kb.finviet.com.vn/pages/viewpage.action?pageId=53025541](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53025541 "Follow link")
* Giám sát lộ trình nhân viên [https://kb.finviet.com.vn/pages/viewpage.action?pageId=53047162](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53047162 "Follow link")
* Duyệt điểm bán mới -> Yêu cầu duyệt điểm bán [https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023442](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53023442 "Follow link")
* Xét duyệt đăng ký CTTB -> Danh sách đăng ký [https://kb.finviet.com.vn/pages/viewpage.action?pageId=66521000](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66521000 "Follow link")
* Xét duyệt đăng ký CTTL -> Danh sách đăng ký [https://kb.finviet.com.vn/pages/viewpage.action?pageId=66521191](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66521191 "Follow link")