|  |  |
| --- | --- |
| Issue Link |  |
| Story |  |
| Epic |  |
| Feature |  |
| Description |  |
| Document version | RedV1.0.2 |
| Document status | GreenDONE |
| Document owner |  |
| Chage History | 2 |

truenone

 

Thay đổi báo cáo đơn hàng điểm bán cho Hương Thủy

* Thay đổi  trên portal và khi xuất file excel
* Trường hợp đối với NPP thì chỉ show 1 NPP của NPP đang xem.
* Sau khi thay đổi, template như sau:

|  | Tên trường | Đánh giá thay đổi | Mô tả |
| --- | --- | --- | --- |
| 1 | STT |  |  |
| 2 | Ngày đặt hàng | Đổi vị trí, đưa cột này lên đầu tiên  Từ cột V → đổi lên cột B | Nội dung/công thức giữ nguyên không thay đổi |
| 3 | Kênh | Không thay đổi |  |
| 4 | Vùng bán hàng | Không thay đổi |  |
| 5 | Khu vực bán hàng | Không thay đổi |  |
| 6 | Mã NPP | Thêm cột này cho view NPP luôn để đồng bộ | * Trường hợp đối với NPP thì chỉ show 1 NPP của NPP đang xem. |
| 7 | Tên NPP | Thêm cột này cho view NPP luôn để đồng bộ | * Trường hợp đối với NPP thì chỉ show 1 NPP của NPP đang xem. |
| 8 | Mã GSBH | Thêm cột này | Thông tin quản lý trực tiếp của nhân viên tạo đơn hàng (Mã nhân viên)  Nếu Salesman tạo đơn thì chỗ này sẽ là thông tin của SS  Nếu SS tạo đơn thì chỗ này sẽ là thông tin của SS  Nếu đơn hàng không có thông tin nhân viên thì trường này để trống |
| 9 | Tên GSBH | Thêm cột này | Thông tin quản lý trực tiếp của nhân viên tạo đơn hàng (Tên nhân viên)  Nếu Salesman tạo đơn thì chỗ này sẽ là thông tin của SS  Nếu SS tạo đơn thì chỗ này sẽ là thông tin của SS  Nếu đơn hàng không có thông tin nhân viên thì trường này để trống |
| 10 | Mã tuyến bán hàng | Không thay đổi |  |
| 11 | Tên tuyến bán hàng | Không thay đổi |  |
| 12 | Mã NVBH | Không thay đổi |  |
| 13 | Tên NVBH | Không thay đổi |  |
| 14 | SĐT của sale | Không thay đổi |  |
| 15 | Mã khách hàng | Không thay đổi |  |
| 16 | Tên khách hàng | Không thay đổi |  |
| 17 | Ngày bán hàng | Không thay đổi |  |
| 18 | Ngày giao hàng | Không thay đổi |  |
| 19 | Mã đơn | Không thay đổi |  |
| 20 | Mã đơn hàng ERP |  |  |
| 21 | Mã tham chiếu | Không thay đổi |  |
| 22 | Loại đơn hàng | Không thay đổi |  |
| 23 | Trạng thái đơn hàng | Không thay đổi |  |
| 24 | Nhóm sản phẩm | Không thay đổi |  |
| 25 | Ngành hàng | Không thay đổi |  |
| 26 | Nhãn hiệu | Không thay đổi |  |
| 27 | Chủng loại |  |  |
| 28 | Mã SKU | Không thay đổi |  |
| 29 | Tên sản phẩm | Không thay đổi |  |
| 30 | Đơn vị tính | Không thay đổi |  |
| 31 | Đơn giá | Thay đổi format | Khi xuất excel, cột này phải có dạng số |
| 32 | Lô | Không thay đổi |  |
| 33 | Hạn sử dụng | Không thay đổi |  |
| 34 | Số lượng bán (theo lô) | Thay đổi format | Khi xuất excel, cột này phải có dạng số |
| 35 | Số lượng khuyến mãi | Thay đổi format | Khi xuất excel, cột này phải có dạng số |
| 36 | Loại chương trình khuyến mãi | Thêm mới | Bổ sung loại của CTKM gồm: Chương trình ontop/Chương trình bình thường  Hiển thị tại dòng CTKM tương ứng |
| 37 | Tên chương trình khuyến mãi | Không thay đổi |  |
| 38 | VAT | Thay đổi format | Khi xuất excel, cột này phải có dạng số |
| 39 | Tiền VAT (từng sản phẩm) | Thay đổi format  Đổi vị trí cột này | Khi xuất excel, cột này phải có dạng số |
| 40 | Thành tiền trước VAT | Đổi tên cột này  Thay đổi format | Đổi tên cột này từ "Thành tiền" → "Thành tiền trước VAT"  Khi xuất excel, cột này phải có dạng số |
| 41 | Thành tiền sau VAT | Thêm cột này  Thay đổi format | Tổng tiền có VAT = Số lượng \* đơn giá (sau VAT)   Không tính toán chương trình khuyến mãi  Khi xuất excel, cột này phải có dạng số |
| 42 | Chiết khấu đơn hàng sau VAT | Đổi tên cột này  Thay đổi format | Đổi tên cột này từ "Chiết khấu" → "Chiết khấu đơn hàng sau VAT"  Khi xuất excel, cột này phải có dạng số |
| 43 | Chiết khẩu (% từng sản phẩm) sau VAT | Đổi tên cột này  Thay đổi format | Đổi tên cột này từ "Chiết khẩu (% từng sản phẩm)" → "Chiết khẩu (% từng sản phẩm) sau VAT"  Khi xuất excel, cột này phải có dạng số |
| 44 | Tiền chiết khấu ontop trên từng sản phẩm | Thêm mới | Tổng số tiền chiết khấu của CTKM  có loại là **Chương trình ontop** áp dụng trên đơn hàng  Áp dụng cho đơn sell-out luồng indirect. Đối với đơn hàng direct, hiển thị rỗng  Khi xuất excel, cột này phải có dạng số    Cách tính xem tại: [**Quy tắc phân bổ tiền chiết khấu**](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75538816#id-%5BHT%5DB%C3%A1oc%C3%A1ot%E1%BB%95ngh%E1%BB%A3p%C4%91%C6%A1nh%C3%A0ngNPP-2.Quyt%E1%BA%AFcph%C3%A2nb%E1%BB%95chi%E1%BA%BFtkh%E1%BA%A5u)  Không sum trên dòng tổng |
| 45 | Tiền chiết khấu bình thường trên từng sản phẩm | Thêm mới | Tổng số tiền chiết khấu của CTKM  có loại là **Chương trình bình thường** áp dụng trên đơn hàng  Áp dụng cho đơn sell-out luồng indirect. Đối với đơn hàng direct, hiển thị rỗng  Khi xuất excel, cột này phải có dạng số   Cách tính xem tại: [**Quy tắc phân bổ tiền chiết khấu**](https://kb.finviet.com.vn/pages/viewpage.action?pageId=75538816#id-%5BHT%5DB%C3%A1oc%C3%A1ot%E1%BB%95ngh%E1%BB%A3p%C4%91%C6%A1nh%C3%A0ngNPP-2.Quyt%E1%BA%AFcph%C3%A2nb%E1%BB%95chi%E1%BA%BFtkh%E1%BA%A5u)  Không sum trên dòng tổng |
| 46 | Chiết khấu mặc định | Thêm mới | Hiển thị chiết khấu mặc định trên từng line sản phẩm do HT trả về.  Áp dụng đối với đơn ERP   Khi xuất excel, cột này phải có dạng số   Không sum trên dòng tổng |
| 47 | Chiết khấu (-VAT) | Thêm mới | Hiển thị chiết khấu trước VAT của từng dòng lô sản phẩm  Bao gồm chiết khấu của CTKM ontop và bình thường   Công thức:  *SUM (Tiền CK ontop trên từng SP + Tiền CK bình thường trên từng SP)/(1+VAT/100)*  *Đối với đơn hàng direct sales thì lấy lô đầu tiên*  *Không sum trên dòng tổng* |
| 48 | Doanh Thu (-VAT ) (Net Amount) | Thêm mới | Hiển thị Thành tiền trước VAT sau chiết khấu của từng dòng lô sản phẩm  Công thức: Net (-VAT) = Thành tiền trước VAT - CK (trước VAT)  Không sum trên dòng tổng |
| 49 | Tổng chiết khấu đơn hàng sau VAT | Đổi tên cột này  Thay đổi format | Đổi tên cột này từ "Tiền chiết khấu (tổng bill)" → "Tổng chiết khấu đơn hàng sau VAT"  Tổng chiết khấu đơn hàng sau VAT = Chiết khấu đơn hàng sau VAT + Chiết khẩu (% từng sản phẩm) sau VAT  Khi xuất excel:   * Cột này phải có dạng số * Cột này tách thành 1 dòng cuối cùng của đơn hàng, và điền thông tin vào, không lặp lại số tiền trên các dòng đơn hàng * Ví dụ đơn hàng có 5 SKU, trải trên 5 dòng thì cột này sẽ nằm ở dòng số 6 * Lưu ý chỉ xuất excel mới tách dòng còn trên portal vẫn giữ format như cũ |
| 50 | Tổng tiền trước VAT | Đổi tên cột này và đổi vị trí  Thay đổi format | Đổi tên cột này từ "Doanh thu (-VAT)" → ~~"Tổng tiền trước VAT sau khi trừ chiết khấu"~~ "Tổng tiền trước VAT"  = Tổng tiền trước VAT (VND) trên đơn hàng   Khi xuất excel:   * Cột này phải có dạng số * Cột này tách thành 1 dòng cuối cùng của đơn hàng, và điền thông tin vào, không lặp lại số tiền trên các dòng đơn hàng * Ví dụ đơn hàng có 5 SKU, trải trên 5 dòng thì cột này sẽ nằm ở dòng số 6 * Lưu ý chỉ xuất excel mới tách dòng còn trên portal vẫn giữ format như cũ |
| 51 | Tổng tiền sau VAT sau khi trừ chiết khấu | Đổi tên cột này và đổi vị trí  Thay đổi format | Đổi tên cột này từ "Thanh Toán" → "Tổng tiền sau VAT sau khi trừ chiết khấu"  Khi xuất excel"   * Cột này phải có dạng số * Cột này tách thành 1 dòng cuối cùng của đơn hàng, và điền thông tin vào, không lặp lại số tiền trên các dòng đơn hàng * Ví dụ đơn hàng có 5 SKU, trải trên 5 dòng thì cột này sẽ nằm ở dòng số 6 * Lưu ý chỉ xuất excel mới tách dòng còn trên portal vẫn giữ format như cũ |
| 52 | Phương thức thanh toán | Không thay đổi |  |
| 53 | Nguồn tiền | Không thay đổi |  |
| 54 | Loại điểm bán | Đổi vị trí cột này |  |
| 55 | SDT điểm bán | Đổi vị trí cột này |  |
| 56 | Địa chỉ điểm bán | Đổi vị trí cột này |  |
| 57 | Quận/Huyện | Đổi vị trí cột này |  |
| 58 | Tỉnh/Thành Phố | Đổi vị trí cột này |  |
| 59 | Người tạo | Đổi vị trí cột này |  |
| 60 | Nguồn đơn hàng | Đổi vị trí cột này |  |
| 61 | Nghiệp vụ tạo đơn |  |  |

Mô tả quy tắc phân bổ tiền chiết khấu

Trong báo cáo tổng hợp đơn hàng, tiền chiết khấu được phân bổ xuống từng dòng sản phẩm.

Hệ thống xử lý phân bổ tiền chiết khấu theo các nguyên tắc sau:

### 1. Phân loại chiết khấu theo loại CTKM

Tiền chiết khấu trên đơn hàng được chia thành hai nhóm độc lập:

* **Chiết khấu Ontop**
* **Chiết khấu Giảm trừ**

### 2. Quy tắc phân bổ chiết khấu

* Ở level SKU: 
  + Đối với **CTKM áp dụng cho một sản phẩm (SKU)** (ví dụ: Mua 100 A giảm 5%): Tiền chiết khấu được phân bổ cho SKU thỏa điều kiện CTKM.
  + Đối với **CTKM áp dụng cho một nhóm sản phẩm** (ví dụ: Mua 100 A và 100 B giảm 5%):

    - Tiền chiết khấu được phân bổ cho các SKU thỏa điều kiện CTKM,
    - Việc phân bổ được thực hiện theo tỷ trọng Thành tiền sau VAT của từng sản phẩm.
  + Đối với **CTKM áp dụng cho toàn bộ đơn hàng**:

    - Tiền chiết khấu được phân bổ cho tất cả các dòng sản phẩm trong đơn hàng.
    - Việc phân bổ được thực hiện theo tỷ trọng Thành tiền sau VAT của từng dòng so với tổng giá trị đơn hàng.
* Ở level lot-date: 
  + Đối với **CTKM áp dụng cho** **một sản phẩm (SKU), một nhóm sản phẩm, toàn bộ đơn hàng**  
    - Nếu 1 SKU có nhiều lô, tiền chiết khấu được phân bổ theo tỷ trọng Thành tiền sau VAT của từng lô tham gia vào CTKM.
    - Thông tin lô tham gia vào CTKM do promotion trả về.
  + Đối với **CTKM có lot date:**
    - Tiền chiết khấu được phân bổ cho dòng lô sản phẩm thỏa điều kiện CTKM.
    - Việc phân bổ được thực hiện theo tỷ trọng Thành tiền sau VAT của từng lô sản phẩm thỏa điều kiện.
* Lưu ý: Đối với **CTKM giảm trừ**:
  + Chỉ thực hiện phân bổ theo tỷ trọng Thành tiền sau VAT ứng với số lượng sản phẩm đóng góp vào CTKM đó, tương tự ở mức lô sản phẩm.

**3. Nguyên tắc chung khi phân bổ**

* Mỗi dòng sản phẩm trong báo cáo có thể nhận:

  + Chiết khấu Ontop
  + Chiết khấu Giảm trừ
  + Hoặc đồng thời cả hai loại chiết khấu
* Tổng tiền chiết khấu phân bổ xuống các dòng lô sản phẩm **luôn bằng** tổng tiền chiết khấu được áp dụng trên đơn hàng.

**4. Minh họa**

4.1. Thông tin đơn hàng

| Tên sản phẩm | Lô | Số lượng | Đơn giá | Thành tiền sau VAT |
| --- | --- | --- | --- | --- |
| Sản phẩm A | 001 | 6 | 20.000 | 120.000 |
| Sản phẩm A | 002 | 4 | 20.000 | 80.000 |
| Sản phẩm B | 010 | 2 | 30.000 | 60.000 |
| Sản phẩm B | 011 | 3 | 30.000 | 90.000 |
| **Tổng** |  | **15** |  | **350.000** |

4.2. Danh sách CTKM được áp dụng cho đơn hàng 

**CTKM Ontop**

* **Scheme 1:** Mua 10 A → giảm 10% trên sản phẩm A
* **Scheme 2:** Giảm 50.000 toàn đơn
* **Scheme 3:** Mua B lô B-010 - giảm 20% trên tổng tiền lô B010

**CTKM Giảm trừ**

* **Scheme 4:** Mua 2A và 3B → giảm 10.000
* **Scheme 5:** Mua 2 sản phẩm B → giảm 20.000

4.3. Các tính phân bổ tiền chiết khấu

     a. Scheme 1: Mua 10 A → giảm 10%

→ Chiết khấu = 10% × 200.000 = **20.000**

| Sản phẩm | Lô | Thành tiền sau VAT | Tỷ trọng | Tiền chiết khấu ontop được phân bổ |
| --- | --- | --- | --- | --- |
| A | 001 | 120.000 | 120.000/(120.000 + 80.000) x 100% = 60% | 60% x 20.000 = 12.000 |
| A | 002 | 80.000 | 80.000/(120.000 + 80.000) x 100% = 40% | 40% x 20.000 = 8.000 |

     b. Scheme 2: Mua sản phẩm bất kì → giảm 50.000 toàn đơn

=> Dựa trên số lượng đóng góp vào CTKM của từng SKU thì tỷ trọng theo từng sản phẩm sẽ tính là:

| Sản phẩm | SL | Thành tiền sau VAT | Tỷ trọng | Tiền chiết khấu ontop được phân bổ |
| --- | --- | --- | --- | --- |
| A | 10 | 200.000 | 200.000/(200.000 + 150.000) x 100% =57.14% | 57.14% x 50.000 = 28.570 |
| B | 5 | 150.000 | 150.000/(200.000 + 150.000) x 100% = 42.86% | 42.86% x 50.000 = 21.430 |

Promotion trả về danh sách tất cả các lô của sản phẩm mua đều tham gia vào scheme 2: 

| Sản phẩm | Lô | Số lượng |
| --- | --- | --- |
| A | 001 | 6 |
| A | 002 | 4 |
| B | 010 | 2 |
| B | 011 | 3 |

=> Dựa vào số lượng từng lô đóng góp vào CTKM thì tỷ trọng theo từng lô sẽ tính là:

| Sản phẩm | Lô | SL | Thành tiền sau VAT | Tỷ trọng | Tiền chiết khấu giảm trừ được phân bổ |
| --- | --- | --- | --- | --- | --- |
| A | 001 | 6 | 120.000 | 120.000/(120.000+80.000) x 100% = 60% | 28.570 x 60% = 17.142 |
| A | 002 | 4 | 80.000 | 80.000/(120.000+80.000) x 100% = 40% | 28.570 x 40% = 11.428 |
| B | 010 | 2 | 60.000 | 60.000/(60.000+90.000) x 100% = 40% | 21.430 x 40% = 8.572 |
| B | 011 | 3 | 90.000 | 90.000/(60.000+90.000) x 100% = 60% | 21.430 x 60% = 12.858 |

     c. Scheme 3: Mua B lô B-010 - giảm 20% trên tổng tiền lô B010

* B-010 = 90.000  
  → CK = 18.000

=> Phân bổ số tiền chiết khấu vào Lô 010 của sản phẩm B

| Sản phẩm | Lô | Tiền chiết khấu ontop được phân bổ |
| --- | --- | --- |
| B | 010 | 18.000 |

     d. Scheme 4: Mua 7A và 3B → giảm 10.000

=> Dựa trên số lượng đóng góp vào CTKM thì tỷ trọng theo từng sản phẩm sẽ tính là:

| Sản phẩm | SL | Thành tiền sau VAT | Tỷ trọng | Tiền chiết khấu ontop được phân bổ |
| --- | --- | --- | --- | --- |
| A | 7 | 140.000 | 140.000/(140.000+90.000) x 100% = 60.87% | 10.000 x 60.87% = 6.087 |
| B | 3 | 90.000 | 90.000/(140.000+90.000) x 100% = 39.13% | 10.000 x 39.13% = 3.913 |

Promotion trả về danh sách các lô tham gia vào scheme 4 bao gồm: 

| Sản phẩm | Lô | Số lượng |
| --- | --- | --- |
| A | 001 | 6 |
| A | 002 | 1 |
| B | 010 | 2 |
| B | 011 | 1 |

=> Dựa vào số lượng từng lô đóng góp vào CTKM thì tỷ trọng theo từng lô sẽ tính là:

| Sản phẩm | Lô | SL | Thành tiền sau VAT | Tỷ trọng | Tiền chiết khấu giảm trừ được phân bổ |
| --- | --- | --- | --- | --- | --- |
| A | 001 | 6 | 120.000 | 120.000/(120.000+20.000) x 100% = 85.71% | 6.087 x 85.71% = 5.217 |
| A | 002 | 1 | 20.000 | 20.000/(120.000+20.000) x 100% = 14.29% | 6.087 x 14.29% = 870 |
| B | 010 | 2 | 60.000 | 60.000/(60.000+30.000) x 100% = 66.67% | 3.913 x 66.67% = 2.609 |
| B | 011 | 1 | 30.000 | 30.000/(60.000+30.000) x 100% = 33.33% | 3.913 x 33.33% = 1.304 |

     e. Scheme 5: Mua 2 sản phẩm B → giảm 20.000

Promotion trả về danh sách các lô tham gia vào scheme 5 bao gồm:

| Sản phẩm | Lô | Số lượng |
| --- | --- | --- |
| B | 011 | 2 |

=> Dựa vào số lượng từng lô đóng góp vào CTKM thì tỷ trọng theo từng lô sẽ tính là:

| Sản phẩm | Lô | SL | Thành tiền sau VAT | Tỷ trọng | Tiền chiết khấu giảm trừ được phân bổ |
| --- | --- | --- | --- | --- | --- |
| B | 011 | 2 | 60.000 | 60.000/60.000 x100% = 100% | 20.000 x 100% = 20.000 |

**Kết quả hiển thị cuối cùng trên báo cáo tổng hợp đơn hàng**

| Tên sản phẩm | Lô | Số lượng | Đơn giá | Thành tiền sau VAT | Tiền chiết khấu ontop | Tiền chiết khấu giảm trừ |
| --- | --- | --- | --- | --- | --- | --- |
| Sản phẩm A | 001 | 6 | 20.000 | 120.000 | 12.000 + 17.143 = 29.143 | 5.217 |
| Sản phẩm A | 002 | 4 | 20.000 | 80.000 | 8.000 + 11.429 = 19.429 | 870 |
| Sản phẩm B | 010 | 2 | 30.000 | 90.000 | 12.857 + 18.000 = 30.857 | 2.609 |
| Sản phẩm B | 011 | 3 | 30.000 | 60.000 | 8.571 | 1.304 + 20.000 = 21.304 |
| **Tổng** |  | **15** |  | **350.000** |  |  |