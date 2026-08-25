1. Thông tin tích hợp API
   * API List Promotion: <https://eco-dms-promotion-api-dev.finviet.com.vn/#/operations/IntegrationController_ListPromotions_v1>
2. Thông tin request
   * **platform** => Bổ sung:
     + Thông tin platform thực hiện request
     + Các giá trị cho phép: PORTAL, APP\_SALESMAN, APP\_MERCHANT
     + Được sử dụng để lấy thông tin cấu hình từ cấu hình chung tương ứng
       - PORTAL => AUTO\_SELECT\_PROMOTION\_PORTAL\_SALESMAN
       - APP\_SALESMAN => AUTO\_SELECT\_PROMOTION\_PORTAL\_SALESMAN
       - APP\_MERCHANT => AUTO\_SELECT\_PROMOTION\_MERCHANT
   * **order** => Giữ nguyên
   * **buyer** =>  Giữ nguyên
   * **applied\_transaction** =>  Giữ nguyên
   * Ví dụ:

     js{
     "order": {
     "products": [
     {
     "id": 851,
     "sku": "188243",
     "quantity": 360,
     "price": 10000,
     "package\_unit\_id": "16",
     "batches": [
     {
     "batch\_no": "188243\_LO03",
     "expired\_at": "2025-12-31",
     "quantity": 228
     },
     {
     "batch\_no": "188243\_LO04",
     "expired\_at": "2026-04-01",
     "quantity": 132
     }
     ],
     "group\_ids": [
     33,
     30,
     16,
     112
     ]
     }
     ],
     "total\_amount": 3600000,
     "seller": {
     "id": "260",
     "area\_id": 48
     },
     "sale\_type": "SELL\_OUT",
     "sale\_channel\_id": 55,
     "order\_date": "2025-11-21",
     "warehouse\_id": 1026
     },
     "buyer": {
     "id": 4520,
     "type": "MERCHANT",
     "store\_location\_ids": [],
     "store\_type\_ids": [],
     "store\_rank\_ids": [
     63
     ],
     "sale\_channel\_ids": []
     },
     "sale\_channel\_id": "4",
     "created\_by": "chienphamnpp",
     "platform": "PORTAL"
     }
3. Thông tin response
   * **order.promotions.auto\_selected:** => Bổ sung  
     + Cờ đánh dấu promotion có được auto select không
     + Giá trị: true/false
   * **order.auto\_selected\_promotions**: => Bổ sung  
     + Thông tin auto select của promotion
     + **promotion\_id:**
     + **kind:**
     + **slots:**
     + **actions:**