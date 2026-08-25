|  |  |
| --- | --- |
| Issue Link |  |
| Story | Finviet - Management System70327f0f-d77b-320c-9607-8ab3659b722fECDM-1894 |
| Epic |  |
| Feature |  |
| Description | 1/ Tích hợp hiển thị CTTB của DMS trên app merchant  2/ MC App thực hiện đăng ký; chụp hình và tích lũy doanh số, nhận thưởng trưng bày |
| Document version | RedV1.0.0 |
| Document status | GreenDONE |
| Document owner | thao.nguyen@finviet.com.vn |
| Chage History | 2 |

truenone

# Thông tin chung

**1/ Hiện trạng và tài liệu liên quan:**

* Hiện tại chỉ đang triển khai Chương trình trưng bày trên app Salesman (sale đăng ký và chụp hình) và portal DMS (admin đăng ký cho Salesman).
* Tài liệu liên quan:
  + Tích hợp Master data MC <=> ECOM <=> DMS90:  Quy trình nghiệp vụ
  + DMS portal:
    - Chương trình trưng bày (full): [link](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028712&src=contextnavpagetreemode)
  + Saleman app: [Link](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53036542&src=contextnavpagetreemode)
  + APP QL: [Link](https://kb.finviet.com.vn/pages/viewpage.action?pageId=66521000&src=contextnavpagetreemode)
  + Merchant:
    - CTTB - Ký kết & quản lý hợp đồng điện tử/ hợp đồng giấy: [link](https://kb.finviet.com.vn/pages/viewpage.action?pageId=48434659)

**2/ Thuật ngữ**

| # | Viết tắt | Diễn giải | Nội dung |
| --- | --- | --- | --- |
| 1 | MC | Merchant | Một  cửa hàng mở trên Eco tiệm số hóa gọi chung là Merchant |
| 2 | MC App | Merchant APP | Ứng dụng Eco tiệm số hóa |
| 3 | SM APP/ APP SM | Salesman App | Ứng dụng bán hàng theo cây salesforce |
| 4 | App QL | Manager App | Ứng dụng quản lý nhân viên bán hàng |
| 5 | DMS Portal | DMS90- Portal | Là môi trường WEB của DMS90 |
| 6 | HT | Hương thủy | Một brand của merchant, là một companty trên hệ thống DMS90. |
| 7 | NPP | Nhà phân phối | Viết tắt cho Nhà phân phối |
| 8 | DMS | DMS90 | Distributor Managemant Systems Core (DMS90) |
| 9 | CTTB | Chương trình trưng bày | Là chương trình trưng bày merchant đăng ký và thực hiện |

**3/ Mục tiêu:** Tích hợp hiển thị và cho phép Merchant đăng ký, thực hiện CTTB của hệ thống DMS trên ứng dụng Merchant (MC App).

**4/ Hệ thống tham gia:** MC App (Eco tiệm số hóa), DMS 90 (Core), eContract (Ký số).

**5/ Tổng quan luồng nghiệp vụ:** CTTB merchant và Quy trình đánh giá trưng bày

Xem chi tiết luồng nghiệp tổng quan

trueFlow CTTB Merchantfalseautotoptrue10491

# **Tài liệu liên quan & Quy tắc nghiệp vụ**

| **#** | Tiêu đề | Nội dung | Lưu ý |
| --- | --- | --- | --- |
| 1 | **Luồng tích hợp và hiển thị thông tin hợp đồng điện tử (eContract) tham khảo Tạo Chương trình trưng bày trên DMS 90** | * [Link](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028714&src=contextnavpagetreemode)  & tham khảo Link Trên MC App: CTTB - Ký kết & quản lý hợp đồng điện tử/ hợp đồng giấy * Tham khảo luồng tổng quan:  Quy trình tổng quan trueQuy trình tích hợp các hệ thốngfalse900autotoptrue14781 |  |
| 2 | **Lấy thông tin danh sách CTTB theo company (Brand = HT)** | CTTB gồm các trạng thái: Đang diễn ra; Hết hạn; Ngưng hoạt động |  |
| 3 | **Điều kiện để CTTB hiển thị trên App Merchant đăng ký mới/ đăng ký lại** | * CTTB có Loại chương trình = “Merchant” (CTTB dành cho merchant và chương trình này không hiển thị trên app Salesman). * Lấy thông tin danh sách CTTB theo company (Brand = HT) * Ngày bắt đầu đăng ký ≤ today() ≤Ngày kết thúc đăng ký → chỉ hiển thị những CTTB đang mở đăng ký & trạng thái chương trình = Đang diễn ra * CTTB mà merchant chưa đăng ký tham gia Hoặc Đã đăng ký & có trạng thái = Từ chối duyệt * Đối tượng MC nhìn thấy CTTB:   + Tại Tab Đối tượng áp dụng không chọn bất kỳ đối tượng merchant nào => Hiểu là áp dụng cho tất cả các Merchant trên hệ thống   + Tại Tab Đối tượng áp dụng không chọn bất kỳ đối tượng Vùng/ NPP => Chỉ các MC thuộc NPP đã chọn hoặc thuộc NPP trong vùng-khu vực đã chọn mới hiển thị để đăng ký   + Nếu Tab Đối tượng áp dụng chọn danh sách các merchant (danh sách các merchant đang active được tích hợp theo company) => Chỉ những merchant có trong danh sách sẽ được nhìn thấy và đăng ký CTTB     - *Note:*       * *Merchant sẽ có thông tin chi nhánh cha. Chi nhánh cha của Merchant có thể là nhà phân phối (NPP) hoặc công ty trên DMS*       * *Trường hợp Merchant thuộc NPP (Merchant có chi nhánh cha là NPP) → Dựa vào thông tin NPP → Merchant lấy ra thông tin chi nhánh cha của NPP là company→ Merchant trả thông tin company cho DMS để load danh sách CTTB theo từng company.*       * *Trường hợp Merchant thuộc company (Merchant có chi nhánh cha là Company) →  Dựa vào thông tin Company→ Merchant trả thông tin Company cho DMS để load danh sách CTTB theo từng Company.*       * *Trường hợp Merchant thuộc nhiều Company→ Merchant trả thông tin danh sách Company cho DMS để lấy về Danh sách CTTB của các Company và hiển thị lên Merchant.* |  |
| 4 | **Điều kiện đổi hạn mức** | * Hệ thống chỉ cho phép "Đổi hạn mức" nếu trạng thái đăng ký hiện tại là "Chờ duyệt"; Trạng thái chương trình = Đang diễn ra và còn trong thời gian đăng ký.   + **Ghi nhận User:** Không ghi nhận người cập nhật từ MC App, hệ thống mặc định chỉ ghi nhận User cập nhật trên Portal để quản lý log. |  |
| 5 | **Xử lý tuyến do merchant không có tuyến bán hàng** | Đăng ký CTTB từ App MC không cần lưu thông tin tuyến & nhân viên bán hàng.   * Đăng ký CTTB từ app MC thì không cần lưu tuyến - thông tin nhân viên theo tuyến rỗng. * Import đăng ký không check mã tuyến trên template import |  |
| 6 | **Quy định hình ảnh** | App Merchant không có tính năng "Chụp hình đăng ký" (chỉ có chụp hình thực hiện trưng bày). Hình ảnh đăng ký nếu có sẽ do Admin upload trên Portal. |  |
| 7 | **Hiển thị CTTB trên APP MC tại Tab Chưa đăng ký - Tab Đã đăng ký** | Xem quy trình nhận và truyền dữ liệu giữa người dùng (Người login trên app Merchant); Merchant (MC APP) và hệ thống DMS 90 (portal)  trueMC\_Dfalse900autotoptrue10032 |  |
| 8 | **Xem thêm "Quy trình**  **đăng ký CTTB trên APP MC"** | Quy trình đăng ký CTTB trên APP MC **trueFlow hiển thị thông báo CTTBfalse900autotoptrue19552**  **Ký hiệu:**  : Trả/ Nhận API kết quả & có bắn notify đến người dùng  : Chỉ Trả/ Nhận API kết quả  : Xử lý của hệ thống  : Người dùng thao tác |  |

# Quy trình tích hợp hệ thống DMS và Merchant

## Luồng Sequence Diagram

  

**Diễn giải:**

|  |  |  |  |
| --- | --- | --- | --- |
| Các bước thực hiện | Tác nhân | Mô tả |  |
| **Giai đoạn 1: Đăng nhập & Lấy danh sách CTTB** | | | |
| Bước 1 | Người dùng ➔ Merchant App | Người dùng thực hiện đăng nhập vào ứng dụng Merchant App. |  |
| Bước 2 | Merchant App | App thực hiện các nghiệp vụ xử lý nội bộ (Nghiệp vụ xử lý của App MC). |  |
| Bước 3 | Người dùng ➔ Merchant App | Người dùng vào chức năng CTTB (chọn Brand = HT). |  |
| Bước 4 | Merchant App ➔ Hệ thống DMS 90 | Gọi API để kiểm tra Số điện thoại (SĐT) & Đối tượng áp dụng. |  |
| Bước 5 | Hệ thống DMS 90 ➔ Merchant App | Trả về danh sách các CTTB thỏa mãn điều kiện. |  |
| **Giai đoạn 2: Đăng ký chương trình** | | | |
| Bước 6 | Người dùng ➔ Merchant App | Người dùng xem danh sách CTTB chưa đăng ký. |  |
| Bước 7 | Người dùng ➔ Merchant App | Người dùng xem chi tiết và chọn "Đăng ký" hoặc "Cập nhật". |  |
| Bước 8 | Merchant App ➔ Hệ thống DMS 90 | Hệ thống gửi thông tin đăng ký CTTB. |  |
| **[Điều kiện rẽ nhánh - alt]** Hệ thống chia làm 3 trường hợp tùy theo yêu cầu của CTTB: | | | |
| Trường hợp 1: |  | **[CTTB yêu cầu Hợp đồng điện tử]** |  |
| Bước 9 | Người dùng ➔ Merchant App | Người dùng nhập thông tin vào form hợp đồng. |  |
| Bước 10 | Merchant App ➔ Hệ thống eContract | Gửi thông tin hợp đồng Đăng ký CTTB sang hệ thống eContract để ký. |  |
| Bước 11 | Hệ thống eContract ➔ Merchant App | Trả về kết quả ký thành công và Mã hợp đồng (Mã HĐ) đã ký cho App. |  |
| Bước 12 | Merchant App ➔ Hệ thống DMS 90 | Đồng bộ kết quả ký thành công và Mã HĐ đã ký về hệ thống DMS. |  |
| Bước 13 | Hệ thống DMS 90 | Hệ thống tự động lưu trữ hợp đồng dưới dạng file PDF. |  |
| Trường hợp 2: |  | **[CTTB yêu cầu Hợp đồng giấy]** |  |
| Bước 14 | Người dùng ➔ Merchant App | Người dùng chụp hình hợp đồng giấy và Upload lên App. |  |
| Bước 15 | Merchant App ➔ Hệ thống DMS 90 | Gửi hợp đồng Đăng ký CTTB (file ảnh) về hệ thống. |  |
| Bước 16 | Hệ thống DMS 90 | Hệ thống lưu trữ hợp đồng giấy đã được upload. |  |
| Trường hợp 3: |  | **[CTTB KHÔNG yêu cầu Hợp đồng]** |  |
| Bước 17 | Merchant App ➔ Hệ thống DMS 90 | Gửi trực tiếp thông tin đăng ký/cập nhật CTTB (bỏ qua bước hợp đồng). |  |
| **Kết thúc rẽ nhánh** | | |  |
| Bước 18 | Hệ thống DMS 90 | Người dùng thực hiện duyệt phiếu đăng ký trên web/ hệ thống tự động duyệt nếu cấu hình CTTB = Tự động duyệt đăng ký |  |
| Bước 19 | Hệ thống DMS 90 ➔ Merchant App | Phản hồi kết quả đăng ký thành công về cho Merchant App. |  |
| **Giai đoạn 3: Thực hiện trưng bày** | | | |
| Bước 20 | Người dùng ➔ Merchant App | Người dùng truy cập vào tab "Đã đăng ký". |  |
| Bước 21 | Merchant App ➔ Hệ thống DMS 90 | Gọi API get list CTTB đã/đang đăng ký (kiểm tra theo SĐT). |  |
| Bước 22 | Hệ thống DMS 90 ➔ Merchant App | Trả về danh sách CTTB và trạng thái hiện tại của chương trình. |  |
| Bước 23 | Người dùng ➔ Merchant App | Người dùng tiến hành chụp hình trưng bày theo yêu cầu của chương trình. |  |
| Bước 24 | Merchant App ➔ Hệ thống DMS 90 | Gửi danh sách hình ảnh đã chụp về hệ thống DMS 90. |  |
| Bước 25 | Hệ thống DMS 90 | Người dùng đăng nhập trên hệ thống thực hiện duyệt hình (Đạt / Không đạt). |  |
| Bước 26 | Hệ thống DMS 90 ➔ Merchant App | Phản hồi kết quả chấm hình realtime (theo thời gian thực) về App. |  |
| Bước 27 | Người dùng ➔ Merchant App | Người dùng tích lũy doanh số theo điều kiện đơn hàng (nếu có). |  |
| Bước 28 | Merchant App ➔ Hệ thống DMS 90 | Gửi danh sách đơn hàng về DMS 90 (nếu chương trình có yêu cầu điều kiện đơn hàng). - Theo luồng tích hợp đơn hàng giữa MC-ECOM- DMS 90 |  |
| Bước 29 | Hệ thống DMS 90 | Hệ thống tự động tính toán kết quả thực hiện trưng bày theo Cronjob. |  |
| Bước 30 | Hệ thống DMS 90 ➔ Merchant App | Phản hồi kết quả trưng bày cuối cùng về cho App. |  |
| **Giai đoạn 4: Trả thưởng trưng bày** | | | |
| Bước 31 | Hệ thống DMS 90 | Hệ thống chạy cronjob gen phiếu trả thưởng tương ứngl.  Người dùng thực hiện nghiệp vụ trả thưởng trưng bày trên hệ thống. |  |
| Bước 32 | Hệ thống DMS 90 ➔ Merchant App | Phản hồi kết quả quá trình trả thưởng về App. |  |
| Bước 33 | Merchant App ➔ Người dùng | App hiển thị thông báo/kết quả trả thưởng trực quan cho người dùng. |  |

## **Bảng mô tả các field mapping 2 hệ thống**

**Bảng trạng thái DMS 90**

| Trạng thái Chương trình | Trạng thái Đăng ký | Trạng thái Kỳ | Kết quả kỳ | Trạng thái Giai đoạn | Kết quả các lần chụp | Trạng thái trả thưởng |
| --- | --- | --- | --- | --- | --- | --- |
| Khởi tạo | Chờ duyệt | Chưa diễn ra | Chờ duyệt | Chờ duyệt | Chờ duyệt | Chờ nhận thưởng |
| Sắp diễn ra | Đã duyệt | Đang diễn ra | Đạt | Đạt | Đạt | Đã nhận thưởng |
| Đang diễn ra | Từ chối duyệt | Đã kết thúc | Không đạt | Không đạt | Không đạt | Từ chối trả thưởng |
| Ngưng hoạt động | Hết hạn duyệt | Ngưng hoạt động |  |  |  | Hết hạn |
| Kết thúc | Ngưng hoạt động |  |  |  |  |  |
| Từ chối duyệt |  |  |  |  |  |  |
| Hết hạn duyệt |  |  |  |  |  |  |

*Note:*

* *Kết quả kỳ sẽ được tự động chốt khi ngày hiện tại = 23:59:59 của ngày kết thúc chấm trưng bày theo kỳ tương ứng*
* *Trạng thái giai đoạn s*ẽ auto chuyển Chờ duyệt sang Không đạt:

* + *Khi trạng thái kỳ = Ngưng hoạt động/ Đã kết thúc*
  + *Khi ngày hiện tại > Ngày kết thúc chấm trưng bày của kỳ thì các lần chụp chưa chấm sẽ tự động chuyển từ Chờ duyệt sang trạng thái KHÔNG ĐẠT và lý do = Hết hạn chấm trưng bày*

### **Mapping trạng thái của DMS90 và MC**

| # | MC | DMS | Ghi chú |
| --- | --- | --- | --- |
| **Trạng thái chương trình** | | | |
|  | Sắp diễn ra | Sắp diễn ra | Trạng thái này sẽ không cho đăng ký, chỉ cho view thông tin chương trình |
|  | Đang diễn ra | Đang diễn ra |  |
|  | Ngưng hoạt động | Ngưng hoạt động |  |
|  | Kết thúc | Kết thúc |  |
| **Trạng thái đăng ký** | | | |
|  | Chờ duyệt đăng ký | Chờ duyệt |  |
|  | Đã duyệt đăng ký | Đã duyệt |  |
|  | Từ chối duyệt đăng ký | Từ chối duyệt |  |
|  | Hết hạn duyệt đăng ký | Hết hạn duyệt |  |
|  | Ngưng hoạt động | Ngưng hoạt động |  |
| **Trạng thái tiến trình** | | | |
|  | Chờ trưng bày | Trạng thái kỳ = Chưa diễn ra &  Kết quả kỳ = Chờ duyệt |  |
|  | Đang trưng bày | Trạng thái kỳ = Đang diễn ra &  Kết quả kỳ = Chờ duyệt |  |
|  | Đạt yêu cầu | Trạng thái kỳ = Đã kết thúc &  Kết quả kỳ = Đạt |  |
|  | Không đạt yêu cầu | Trạng thái kỳ = Đã kết thúc &  Kết quả kỳ = Không đạt |  |
|  | Ngưng hoạt động | Trạng thái kỳ = Ngưng hoạt động |  |
| **Trạng thái kết quả trả thưởng** | | | |
|  | Chờ trả thưởng | Chờ nhận thưởng | Chờ nhận thưởng |
|  | Đã trả thưởng | Đã nhận thưởng | Đã nhận thưởng |
|  | Từ chối | Từ chối trả thưởng | Từ chối trả thưởng |
|  | Hết hạn | Hết hạn | Hết hạn trả thưởng |
| **Trạng thái giai đoạn & kết quả chụp hình** | | | |
|  | * Nếu chưa chụp ảnh thì hiển thị icon mặc định | **Trạng thái giai đoạn = Chờ duyệt** |  |
|  | * Nếu bộ ảnh được duyệt, hiển thị icon . | **Trạng thái giai đoạn =  Đạt/ Không đạt**  **& kết quả chụp hình = Đạt** |  |
|  | * Nếu bộ ảnh bị từ chối hoặc bộ ảnh đang chờ duyệt nhưng hết thời gian duyệt, hiển thị icon . | **Trạng thái giai đoạn = Đạt/ Không đạt**  **& kết quả chụp hình = Không đạt** |  |
|  | * Nếu bộ ảnh chưa được duyệt, hiển thị icon . | **Trạng thái giai đoạn = Chờ duyệt/ Đạt/ Không đạt**  **& kết quả chụp hình = Chờ duyệt** |  |
|  | * Nếu chưa có bộ ảnh nào được chụp hoặc đã chụp nhưng chưa đạt nhiệm vụ chụp hình của giai đoạn, hiển thị icon mặc định | **Trạng thái giai đoạn = Chờ duyệt** |  |
|  | * Sau khi giai đoạn chụp hình kết thúc, nếu giai đoạn đạt điều kiện chụp hình thì hiển thị icon | **Trạng thái giai đoạn = Đạt** |  |
|  | * Không đạt thì hiển thị icon | **Trạng thái giai đoạn = Không đạt** |  |

### **Mapping các trường dữ liệu trên màn hình app MC**

**Trong đó "sysdate" = "Ngày giờ chạy cron job"**

| **Merchant app** | | | | DMS | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Màn hình** | **Tên field** | **Kiểu dữ liệu** | **Mô tả** | **Màn hình** | **Trường Hệ thống** | **Kiểu dữ liệu** | **Mô tả/Quy tắc chuyển đổi** | **Bắt buộc** |
|  | Tên chương trình trưng bày |  |  | Chương trình trưng bày | Tiêu đề | Text 100 | Giữ nguyên | Có |
| Avatar |  |  | Avatar brand | image | avata brand |  |
| Thời gian |  |  | Thời gian chương trình | Date | giữ nguyên | Có |
| Trạng thái chương trình |  |  | Trạng thái chương trình | Datacolumns - Tag | giữ nguyên  Các trạng thái:   * Đang diễn ra; * Ngưng hoạt động; * Kết thúc | Có |
| Phần thưởng |  |  | Phần thưởng |  | Nối chuỗi hiển thị :   * "Giải thưởng mỗi kỳ lên đến:" "@Loại phần thưởng" ":" "@Tiền thưởng" "đ"  * "Giải thưởng mỗi kỳ lên đến:: ":" "@số lượng" "@Tên sản phẩm" "@Điều kiện tặng và/hoặc" "@số lượng" "@Tên sản phẩm"   + Ví dụ: 2 Sữa chua vinamilk và 1 dầu ăn đậu nành | Có |
|  | Tên chương trình; avatar; Thời gian; Trạng thái chương trình |  |  | **Đăng ký trưng bày** | Tên chương trình;  avatar;  Thời gian;  Trạng thái chương trình |  | Giữ nguyên như mô tả trên | Có |
| Hạn mức trưng bày |  |  | Đăng ký trưng bày | Hạn mức đăng ký | Datacolumns | Nối chuỗi hiển thị "@Hạn mức đăng ký " "x"  "@Số suất đăng ký" | Có |
| Trạng thái |  |  | Đăng ký trưng bày | Trạng thái đăng ký | Datacolumns | Hiển thị trạng thái đăng ký của merchant tương ứng   * Chờ duyệt * Đang diễn ra * Từ chối duyệt - lý do * Hết hạn duyệt * Ngưng hoạt động | Có |
| **Thông tin nhắc merchant về nhiệm vụ chụp hình** |  |  |  |  |  | Hiển thị thông tin nhắc merchant về nhiệm vụ chụp hình. Chỉ hiển thị khi trạng thái đăng ký = “Đã duyệt đăng ký”.   * *Lưu ý: 1 CTTB có thể có nhiều kỳ và 1 kỳ có thể có nhiều giai đoạn chụp hình. Mỗi khoảng thời gian chụp hình sẽ thực hiện nhắc riêng biệt và yêu cầu ít nhất 1 bộ hình chụp đạt yêu cầu.*   1/ Msg:  “Hoàn thành chụp hình trước 23:59 DD/MM/YYYY”:  hiển thị nội dung này khi thoả đồng thời 2 điều kiện sau:   * + **Ngày bắt đầu giai đoạn chụp hình <= sysdate <= Ngày kết thúc giai đoạn chụp hình,**   + **Merchant chưa chụp bộ hình nào trong khoảng thời gian giai đoạn chụp hình**     - hiển thị câu msg như trên, trong đó: dd/mm/yyyy là ngày kết thúc giai đoạn chụp hình   2/ Msg: “Hình ảnh bị từ chối. Chụp lại ngay!”:  hiển thị nội dung này khi thoả đồng thời 2 điều kiện sau:   * + **Ngày bắt đầu giai đoạn chụp hình <= sysdate <= Ngày kết thúc giai đoạn chụp hình,**   + **Bộ hình được chụp trong khoảng thời gian chụp hình đang diễn ra bị từ chối.**     *Lưu ý: trong 1 khoảng thời gian chụp hình, merchant có thể chụp nhiều bộ ảnh và có thể bị từ chối nhiều lần, mỗi lần bị từ chối sẽ hiển thị thông báo này cho đến khi khoảng thời gian chụp hình kết thúc hoặc merchant đã thực hiện chụp bộ ảnh mới.* |  |
|  | Tên chương trình |  |  | Chương trình trưng bày | Tiêu đề | Text 100 | Giữ nguyên | Có |
|  |  |  |  |  |  |  |
| Avatar |  |  | Avatar | image | avata brand |  |
| Tên hạn mức |  |  | Hạn mức | Datacolumns | hiển thị danh sách hạn mức theo CTTB | Có |
| Hình mẫu |  |  | Hình mẫu | Datacolumns |  |  |
| Số suất |  |  | Số suất tối đa | int | số suất tối đa | Có |
| Kỳ n |  |  | Tên Kỳ | Text (50) | Giữ nguyên | Có |
| Phần thưởng |  |  | Loại phần thưởng | Datacolumns | Giữ nguyên | Có |
|  |  | Tiền thưởng | số nguyên >0 | Giữ nguyên | Có |
|  |  | Quà tặng |  | Nối chuỗi hiển thị "@số lượng" "@Tên sản phẩm" "@Điều kiện tặng và/hoặc"     Tối đa 20 ký tự, nhiều hơn hiển thị "..." | Có |
| Điều kiện trưng bày   * Số lượng hình ảnh yêu cầu/1 lần chụp * Số lần chụp cần được duyệt * Số lượng sản phẩm trưng bày |  |  | **Điều kiện trưng bày** | Datacolumns | Giữ nguyên   * **Điều kiện trưng bày: header**   + Số lượng hình ảnh yêu cầu: Số lượng tương ứng   + Số lần yêu cầu duyệt hình ảnh: số lượng tương ứng   + Số mặt trưng bày: số lượng tương ứng | Có |
| Điều kiện đơn hàng   * Doanh số nhóm sản phẩm * Doanh số đơn hàng * Số luợng nhóm sản phẩm |  |  | Điều kiện đơn hàng | Datacolumns | Giữ nguyên:   * Doanh số nhóm sản phẩm: Số lượng tương ứng * Doanh số đơn hàng:  Số tiền tương ứng * Số lượng nhóm sản phẩm: Số lượng tương ứng |  |
|  |  |  |  |  |  |  |  |  |
|  | Tên chương trình;  avatar;  Thời gian;  Trạng thái chương trình |  |  | Đăng ký trưng bày | Tên chương trình;  avatar;  Thời gian;  Trạng thái chương trình |  | Giữ nguyên | Có |
|  |  |  | Đăng ký trưng bày | Hạn mức |  | Giữ nguyên hạn mức - số suất đã chọn | Có |
|  | Danh sách quà tặng từ hạn mức  trưng bày |  |  | Chương trình trưng bày | Danh sách quà tặng | Datacolumns | Trả về Điều kiện VÀ / HOẶC + tên sản phẩm tương ứng cho quà tặng |  |
|  | Tên chương trình |  |  | Chương trình trưng bày | Tiêu đề |  | Giữ nguyên |  |
| Thời gian |  |  | Thời gian chương trình | Date | Giữ nguyên | Có |
| Nội dung |  |  | Nội dung | HTML editor | Giữ nguyên | Có |
|  | click hyperlink "Hình mẫu"  Điều kiện  Hình mẫu trưng bày |  |  | Chương trình trưng bày → Hình mẫu trưng bày | Điều kiện  Hình mẫu trưng bày | Datacolums | Chỉ trả về   * Số mặt trưng bày: số lượng tương ứng * Số lượng hình ảnh yêu cầu: Số lượng tương ứng | Có |
|  | Click button "Xem chi tiết"  hiển thị màn hình  Chi tiết chương trình |  |  | Tiến trình trưng bày |  |  |  |  |
| Tên chương trình;  avatar; |  |  | Tên chương trình;  avatar; | Datacomlums | Giữ nguyên | Có |
| Loại trả thưởng |  |  | Hình thức trả thưởng | Datacomlums | Giữ nguyên | Có |
| Hợp đồng |  |  |  |  |  |  |
| Kỳ n |  |  | Tên kỳ | Datacomlums | Giữ nguyên | Có |
| Thời gian kỳ |  |  | Thời gian mua hàng và trưng bày | Date | Giữ nguyên  (Bao gồm cả kỳ quá khứ; hiện tại và tương lai) | Có |
| Trạng thái kỳ |  |  | Trạng thái kỳ |  | Các trạng thái kỳ   * **Chưa diễn ra** **Đang diễn ra** **Đã kết thúc** **Ngưng hoạt động** | Có |
| Số lượng đã mua (sản phẩm) |  |  | Số lượng nhóm sản phẩm | Datacomlums | Nỗi chuỗi @Số lượng đã mua + (sản phẩm)   @Số lượng thực đạt/ @sl chỉ tiêu | Có |
| Doanh số nhóm sản phẩm (triệu đồng) |  |  | Doanh số nhóm sản phẩm | Datacomlums | Nối chuỗi @Doanh số nhóm sản phẩm + (triệu đồng)  @daonh số thực đạt/ @Doanh số chỉ tiêu | Có |
| Doanh số đơn hàng (triệu đồng) |  |  | Doanh số đơn hàng | Datacomlums | Nối chuối @Doanh số đơn hàng + (triệu đồng)  @daonh số thực đạt/ @Doanh số chỉ tiêu | Có |
| Giai đoạn |  |  | Tên giai đoạn | Datacomlums | Giữ nguyên | Có |
| Text: Bạn cần ,,, x lần để hoàn thành nhiệm vụ |  |  | Số lần yêu cầu duyệt hình ảnh | Datacomlums | Giữ nguyên | Có |
|  |  |  |  |  |  |  |
|  | Lịch sử mua hàng |  |  | Tiến trình trưng bày | Lịch sử mua hàng | Datacomlums | Giữ nguyên | Có |
|  | Chọm Mua thêm hiển thị màn hình sản phẩm theo brand |  |  |  | Danh sách nhóm sản phẩm |  | Trả về danh sách sản phẩm thuộc tất cả các nhóm sản phẩm có cài đặt + điều kiện Và/ Hoặc    ------- note thêm  Merchant hiện tại đang hiển thị danh sách sản phẩm  DMS saleman thì hiển thị danh sách nhón sản phẩm như UI    Nếu trên portal cài đặt điều kiện= Và/ Hoặc, Text hiển thị Highlight đỏ sẽ thay đổi:   * ĐK và => Cần thỏa tất cả các yêu cầu dưới đây * ĐK Hoặc => Thỏa một trong các yêu cầu dưới đây * Tên nhóm sản phẩm tương ứng cài đặt trên portal |  |
|  | Trường hợp trả thưởng |  |  | Trả thưởng trưng bày | Kết quả trả thưởng | Datacomlums | Đạt/ Không đạt |  |
|  |  | Trạng thái trả thưởng | Datacomlums | Giữ nguyên  Các kết quả:   * **Chờ nhận thưởng** * **Đã nhận thưởng** * **Từ chối trả thưởng** * **Hết hạn trả thưởng** | Có |
|  |  | Mã đơn hàng | Datacomlums | Giữ nguyên  (Phase 1: chưa có trả thưởng trên đơn hàng) |  |
|  | Click xem chi tiết hàng tặng |  |  | Trả thưởng trưng bày | Phần thưởng | Datacomlums | Giữ nguyên | Có |
|  |  |  |  | Tiến trình trưng bày | Tên Giai đoạn | Datacolums | Giữ nguyên  (tất cả giai đoạn) |  |
|  |  |  | Trạng thái giai đoạn | Datacolums | Giữ nguyên   * Trong 1 giai đoạn chụp hình, xét trên tất cả các lần chụp:   + Trạng thái: "Chờ duyệt": Nếu chưa có bộ ảnh nào được chụp hoặc đã chụp nhưng chưa đạt nhiệm vụ chụp hình của giai đoạn, hiển thị icon mặc định .   + Sau khi giai đoạn chụp hình kết thúc, nếu giai đoạn đạt điều kiện chụp hình thì hiển thị icon , không đạt thì hiển thị icon . |  |
|  |  |  | Thời gian giai đoạn | Datacolums | Giữ nguyên |  |
|  |  |  | Kết quả lần chụp | Datacolums | Giữ nguyên     * Kq"Chờ duyệt": Nếu chưa chụp ảnh thì hiển thị icon mặc định : * Kq "Đạt": Nếu bộ ảnh được duyệt, hiển thị icon : * Kq  "Không đạt": Nếu bộ ảnh bị từ chối hoặc bộ ảnh đang chờ duyệt nhưng hết thời gian duyệt, hiển thị icon ,   *Lưu ý: Số mặt trưng bày Merchant app không có nhập nên DMS lưu mặc định SMTB = 1* |  |

# Các trường hợp hiển thị thông báo CTTB trên app MC

**Hệ thống tự động bắn Noti trên app MC khi event thỏa điều kiện trigger tương ứng.**

| Màn hình | Tên thông báo | Nội dung | Trigger | Minh họa |
| --- | --- | --- | --- | --- |
| **Danh sách đăng ký** | **Phiếu đăng ký tham gia được duyệt** | * Icon: logo mặc định của app merrchant * Title: Đăng ký chương trình trưng bày thành công * Nội dung thông báo: Đăng ký chương trình trưng bày <tên CTTB> thành công. * Điều hướng khi bấm noti: Đến trang chi tiết của chương trình tương ứng. | Khi user đăng ký tham gia CTTB và phiếu đăng ký tham gia có Trạng thái tham gia của cửa hàng = "Đã duyệt" | Đăng ký chương trình trưng bày **Chương trình trưng bày sữa tươi tiệt trùng vị chocolate** thành công. |
| **Danh sách đăng ký** | **Phiếu đăng ký tham gia bị từ chối** | * Icon: logo mặc định của app merrchant * Title: Đăng ký chương trình trưng bày bị từ chối * Nội dung thông báo: Đăng ký chương trình trưng bày <tên CTTB> bị từ chối. Bấm vào để xem lý do. * Điều hướng khi bấm noti: Đến danh sách CTTB, tab “Đã đăng ký”. | Trạng thái tham gia của cửa hàng = "Từ chối đăng ký" | Đăng ký chương trình trưng bày **Chương trình trưng bày sữa tươi tiệt trùng vị chocolate** bị từ chối. Bấm vào để xem lý do. |
| **Danh sách đăng ký** | **Phiếu đăng ký tham gia hết hạn** | * Icon: logo mặc định của app merrchant * Title: Hết hạn đăng ký chương trình trưng bày * Nội dung thông báo: Phiếu đăng ký tham gia chương trình trưng bày <tên CTTB> của bạn đã hết thời gian xử lý. * Điều hướng khi bấm noti: Đến danh sách CTTB, tab “Đã đăng ký”. | Khi user đăng ký tham gia CTTB, phiếu chưa được duyệt đồng thời đã hết thời gian xét duyệt đăng ký.  Today() > Ngày kết thúc đăng ký | Phiếu đăng ký tham gia chương trình trưng bày **Chương trình trưng bày sữa tươi tiệt trùng vị chocolate** của bạn đã hết thời gian xử lý. |
| **Tiến trình trưng bày** | **Nhắc cửa hàng chụp ảnh theo giai đoạn chụp hình** |  |  |  |
| **Tiến trình trưng bày** | **Thông báo hình ảnh được duyệt** | * Icon: logo mặc định của app merrchant * Title: Hình ảnh trưng bày đã đạt yêu cầu * Nội dung thông báo: Hình ảnh trưng bày của <tên giai đoạn chụp hình> - <tên kỳ> - <tên CTTB> được thực hiện lúc <thời gian chụp hình> đã đạt yêu cầu. * Điều hướng khi bấm noti: Đến trang chi tiết của chương trình tương ứng. | Khi duyệt hình ảnh các lần chụp.  Bộ hình (lần chụp) được duyệt = ĐẠT &  trạng thái giai đoạn = Đạt | Hình ảnh trưng bày của **Giai đoạn 2 – Kỳ 1 - Chương trình trưng bày sữa tươi tiệt trùng vị chocolate** được thực hiện lúc 15:20 22/11/2024 đã đạt yêu cầu. |
| **Tiến trình trưng bày** | **Thông báo hình ảnh bị từ chối** | * Icon: logo mặc định của app merrchant * Title: Hình ảnh trưng bày chưa đạt yêu cầu * Nội dung thông báo: Hình ảnh trưng bày của <tên giai đoạn chụp hình> - <tên kỳ> - <tên CTTB> được thực hiện lúc <thời gian chụp hình> chưa đạt yêu cầu. Bạn lưu ý cần chụp hình lại trước <thời gian kết thúc giai đoạn> để hoàn thành nhiệm vụ nhé. * Điều hướng khi bấm noti: Đến trang chi tiết của chương trình tương ứng. | Khi bộ hình bị từ chối; Bộ hình (lần chụp) được duyệt = KHÔNG ĐẠT &  trạng thái giai đoạn = Không Đạt | Hình ảnh trưng bày của **Giai đoạn 2 – Kỳ 1 - Chương trình trưng bày sữa tươi tiệt trùng vị chocolate** được thực hiện lúc 09:21 21/09/2024 chưa đạt yêu cầu. Bạn lưu ý cần hoàn thành chụp hình trước 23:59 30/11/2024 để hoàn thành nhiệm vụ nhé. |
| **Tiến trình trưng bày** | **Trạng thái tham gia CTTB của user bị tạm ngưng** | * Icon: logo mặc định của app merrchant * Title: Tiến trình tham gia chương trình trưng bày của bạn đã tạm ngưng * Nội dung thông báo: Tiến trình tham gia chương trình trưng bày <tên CTTB> của bạn đã bị tạm ngưng. Bạn không thể tiếp tục chụp hình trưng bày hoặc thực hiện nhiệm vụ mua hàng. * Điều hướng khi bấm noti: Đến trang chi tiết của chương trình tương ứng. | Trạng thái kỳ = "Ngưng hoạt động"    *(Khi user đã đăng ký tham gia CTTB được duyệt, trong thời gian diễn ra của kỳ và tiến trình tham gia của user bị tạm ngưng do manual ngưng hoạt động tiến trình/ Ngưng hoạt động chương trình)* | Tiến trình tham gia chương trình trưng bày **Chương trình trưng bày sữa tươi tiệt trùng vị chocolate** của bạn đã bị tạm ngưng. Bạn không thể tiếp tục chụp hình trưng bày hoặc thực hiện nhiệm vụ mua hàng. |
| **Tiến trình trưng bày** | **Kỳ trưng bày đạt yêu cầu** | * Icon: logo mặc định của app merrchant * Title: Kỳ trưng bày đã đạt yêu cầu * Nội dung thông báo: Chúc mừng bạn đã đạt yêu cầu của <tên kỳ> - <tên CTTB>! * Điều hướng khi bấm noti: Đến trang chi tiết CTTB. | Khi kết quả kỳ = "Đạt" | Chúc mừng bạn đã đạt yêu cầu của **Kỳ 2 - Chương trình trưng bày sữa tươi tiệt trùng vị chocolate**! |
| **Tiến trình trưng bày** | **Kỳ trưng bày không đạt yêu cầu** | * Icon: logo mặc định của app merrchant * Title: Kỳ trưng bày không đạt yêu cầu * Nội dung thông báo: Bạn chưa đạt yêu cầu của <tên kỳ> - <tên CTTB>. * Điều hướng khi bấm noti: Đến trang chi tiết CTTB. | Khi kết quả kỳ = "Không đạt" | Bạn chưa đạt yêu cầu của **Kỳ 2 - Chương trình trưng bày sữa tươi tiệt trùng vị chocolate**. |
| **Danh sách trả thưởng** | **Thông báo khi trả thưởng** | * Icon: logo mặc định của app merrchant * Title: Nhận thưởng từ chương trình trưng bày * Nội dung thông báo:    + **1/ Trả thưởng theo kỳ:**Chúc mừng bạn đã nhận được phần thưởng trưng bày của <tên kỳ> - <tên CTTB>. Bấm vào để xem chi tiết.  **2/ Trả thưởng theo chương trình:**Chúc mừng bạn đã nhận được phần thưởng trưng bày của <tên CTTB>. Bấm vào để xem chi tiết. * Điều hướng khi bấm noti: Đến trang chi tiết của chương trình tương ứng. | Khi user được trả thưởng. Nếu CTTB trả thưởng theo chương trình thì ẩn thông tin <tên kỳ>.    Trạng thái kết quả trả thưởng = "Đã trả thưởng" | Chúc mừng bạn đã nhận được phần thưởng trưng bày của **Kỳ 1 - Chương trình trưng bày sữa tươi tiệt trùng vị chocolate**. Bấm vào để xem chi tiết. |
| **Danh sách trả thưởng** | **Thông báo khi cửa hàng bị từ chối trả thưởng** | * Icon: logo mặc định của app merrchant * Title: Từ chối trả thưởng chương trình trưng bày * Nội dung thông báo:    + 1/ Trả thưởng theo kỳ: **Bạn chưa đạt điều kiện trả thưởng của <tên kỳ> - <tên CTTB>**. Bấm vào để xem chi tiết.  2/ Trả thưởng theo chương trình: **Bạn chưa đạt điều kiện trả thưởng của <tên CTTB>**. Bấm vào để xem chi tiết. * Điều hướng khi bấm noti: Đến trang chi tiết của chương trình tương ứng. | Trạng thái kết quả trả thưởng = "Từ chối" | Bạn chưa đạt điều kiện trả thưởng của chương trình trưng bày **Kỳ 1 - Chương trình trưng bày sữa tươi tiệt trùng vị chocolate**. Bấm vào để xem chi tiết. |
| **Chương trình trưng bày** | **Chương trình trưng bày ngưng hoạt động** | * Icon: logo mặc định của app merrchant * Title: Chương trình trưng bày ngưng hoạt động * Nội dung thông báo: Chương trình trưng bày <tên CTTB> bạn đang tham gia đã ngưng hoạt động. Bạn không thể tiếp tục chụp hình trưng bày hoặc thực hiện nhiệm vụ mua hàng. * Điều hướng khi bấm noti: Đến danh sách CTTB, tab “Đã đăng ký”. | Khi CTTB được chuyển sang trạng thái ngưng hoạt động.  Trạng thái CTTB = "Ngưng hoạt động" | Chương trình trưng bày **Chương trình trưng bày sữa tươi tiệt trùng vị chocolate** bạn đang tham gia đã ngưng hoạt động. Bạn không thể tiếp tục chụp hình trưng bày hoặc thực hiện nhiệm vụ mua hàng. |

# Các màn hình liên quan khi có cập nhật dữ liệu từ merchant app

### **Chương trình trưng bày**

Loại chương trình = Merchant & Yêu cầu hợp đồng = Hợp đồng điện tử => hiển thị hyperlink file pdf, click xem chi tiết template hợp đồng → [Link](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028714&src=contextnavpagetreemode)

### Danh sách đăng ký

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép chỉnh sửa?** | **Dữ liệu bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Hợp đồng đăng ký | Datacomlumns | Không | Không | Sau khi input và submit hợp đồng từ app Merchant. Theo flow tích hợp, Sau khi ký hợp đồng thành công tích hợp gửi thông tin hợp đồng đã ký từ eContract về DMS    1/ Hợp đồng điện tử: Hiển thị Hyperlink hợp đồng pdf; onclick hyperlink để view hợp đồng dạng pdf    2/ Hợp đồng giấy: Hiển thị hình ảnh chụp hợp đồng từ merchant , view theo rule view hình hiện tại của DMS |
| Hình ảnh đăng ký | Datacomlumns | Không | Không | Hiển thị hình ảnh đăng ký chụp từ app merchant/ sale man/ upload từ portal tương ứng  Nếu không có hình ảnh thì hiển thị rỗng  Hiển thị hình ảnh theo rule view hình chung của hệ thống  (App merchant không có tính năng chụp hình đăng ký => Case Đăng ký CTTB app merchant không có hình ảnh đăng ký) |
| Người cập nhật | Datacomlumns |  |  | Không ghi nhận người cập nhật từ app merchant, chỉ ghi nhận user cập nhật trên portat |

[Export danh sách đăng ký](https://kb.finviet.com.vn/pages/viewpage.action?pageId=53028748)

* Bổ sung thêm field Hợp đồng đăng ký; export dạng hyperlink, click để xem file pdf hợp đồng đã ký
* Rename Field đã mô tả trước "Hợp đồng đăng ký" = "Hình ảnh đăng ký"

### Chỉnh sửa đăng ký tham gia/  Chi tiết đăng ký

Rule hiển thị / ẩn button "Đồng ý" ;upload hình ảnh tham gia hoặc file pdf hoặc file word như đã mô tả (Không thay đổi)

| **Tên Trường** | **Loại dữ liệu/Loại field** | **Cho phép chỉnh sửa?** | **Dữ liệu bắt buộc?** | **Mô tả** |
| --- | --- | --- | --- | --- |
| Hợp đồng | Datacomlumns | Không | Không | Chỉ hiển thị với Loại chương trình = Merchant  1/ Hợp đồng điện tử: Hiển thị Hyperlink hợp đồng pdf; onclick hyperlink để view hợp đồng dạng pdf    2/ Hợp đồng giấy: Hiển thị hình ảnh chụp hợp đồng từ merchant. view theo rule view hình hiện tại của DMS  Hình ảnh hợp đồng giấy > 2 hình  thì Thêm dấu + để xem chi tiết  *Lưu ý:*  Yêu cầu hợp động = Không yêu cầu hợp đồng => Ẩn luôn field này Yêu cầu hợp động = # Không yêu cầu hợp đồng: Chỉ cần chưa có 1 tấm hình nào hoặc 1 file hợp đồng nào thì mình ẩn luôn field này |