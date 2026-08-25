# Mục đích tài liệu

Xác định phạm vi tích hợp giữa DMS x Promotion

Mô tả thông tin khuyến mãi từ Promotion → từ đó đưa ra giải pháp và thiết kế cho quy trình áp dụng CTKM trên hệ thống DMS

# Roadmap CTKM

| Giai đoạn | Chức năng | Thông tin chi tiết |
| --- | --- | --- |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

# Phạm vi áp dụng khuyến mãi

|  |  |  |
| --- | --- | --- |
| **Thông tin tổng quan CTKM** | | |
| **Loại khuyến mãi áp dụng** | Promotion có 4 hình thức áp dụng khuyến mãi   * **Trên đơn hàng** * Trên giỏ hàng * **Trên sản phẩm** * Trên dịch vụ   Dựa vào loại KMAP, khuyến mãi trên sẽ có điều kiện mua và sản phẩm trả thưởng dựa trên 1 trong 4 loại trên  Lưu ý: Trong phạm vi DMS x Prom, chỉ áp dụng 2/4 hình thức |  |
| **Loại chương trình** | 1. Giảm trừ    1. KM giảm trừ sẽ trừ dần điều kiện mua vào đơn hàng để ra được khuyến mãi áp dụng trên đơn hàng    2. KM ontop là KM không trừ dần điều kiện vào đơn hàng → KM giúp cho CTKM có thể tối đa số suất   Dựa vào loại chương trình, DMS xác định 2 table :   * KM ontop : Tối đa số suất (chỉ cho người dùng chọn số lượng) * KM bình thường: Giá trị mặc định là tối đa số suất (cho người dùng sắp xếp thứ tự ưu tiên xét KM, lựa chọn SP nhận thưởng trong nhóm, và nhập số lượng mong muốn nhận |  |
| **Gói khuyến mãi** | | |
| **TH1: Áp dụng trên đơn hàng** | | |
| Điều kiện mua | Lựa chọn cấu trúc điều kiện áp dụng   * 1 Điều kiện * Điều kiện kết hợp : AND & OR. Điều kiện lồng (tối đa 2 cấp)   Chi tiết điều kiện áp dụng:   * Phương thức thanh toán * Danh sách SP NPP * Thời giand dặt hàng * SP thuộc ngành hàng * SP thuộc thương hiệu * Tổng giá trị đơn hàng * Tổng giá trị SP nhóm * Tổng số lượng SP nhóm   Phương thức: |  |
| Trả thưởng |  |  |

# Luồng tích hợp DMS x Promotion

## Get available Promotion

## Get available inventory

## Get applicable promotion

## Apply Promotion

# Mô tả luồng dữ liệu