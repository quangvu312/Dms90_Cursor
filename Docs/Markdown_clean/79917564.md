## Luồng CI/CD Promotion Service

## Deploy Môi trường DEV / UAT / UAT-HT

* Chuẩn bị code branch cần deploy
* Cập nhật file cấu hình (nếu có)

**Git repo cấu hình:**  
<https://gitlab.finviet.com.vn/share/Finviet.Backend.Share.Config>

**Bảng file cấu hình theo môi trường:**

| Môi trường | Git Branch | Đường dẫn file cấu hình | Note |
| --- | --- | --- | --- |
| DEV | dev | /promotion-core.yml |  |
| UAT Core | main | /promotion-core.yml |  |
| UAT-Hương Thủy | ht-dms | /promotion-core.yml |  |

* Chạy database migration (nếu cần)  
  *Note: hiện tại chạy manual, chưa có automation tool*

### Gắn tag để deploy

Quy ước tag:  
`{version}-{môi trường deploy}`

| Môi trường | Ký hiệu môi trường trong tag | Note |
| --- | --- | --- |
| DEV | dev |  |
| UAT Core | main |  |
| UAT-Hương Thủy | main-ht |  |

Ví dụ hợp lệ:  
`v7.3.7-dev`, `v1.13.6-main-ht`, `v1.1.7-main`

Sau khi gắn tag → CI/CD chạy auto build + deploy.

### Kiểm tra trạng thái deploy

| Môi trường | ArgoCD | Service URL | Note |
| --- | --- | --- | --- |
| DEV | <https://dev-aws-argocd.finviet.com.vn> | <https://eco-dms-promotion-api-dev.finviet.com.vn> |  |
| UAT Core | <https://uat-aws-argocd.finviet.com.vn> | <https://api-uat.finviet.com.vn/dms/promotion> |  |
| UAT-Hương Thủy | <https://uat-aws-argocd.finviet.com.vn> | <https://ht-api-uat.finviet.com.vn/dms/promotion> |  |

---

## Deploy Môi trường PROD

* Sau khi verify xong trên UAT, tiến hành deploy PROD
* Điền tag vào sheet **List image PROD**:  
  <https://docs.google.com/spreadsheets/d/1PJv7Y_S6g_HT8LPEoDcZYu6TVuKOsUDznRTLsO-u17s/edit?gid=1078463592#gid=1078463592>
* Điền checklist deploy vào sheet **Checklist deploy PROD**:  
  <https://docs.google.com/spreadsheets/d/1PJv7Y_S6g_HT8LPEoDcZYu6TVuKOsUDznRTLsO-u17s/edit?gid=1712218191#gid=1712218191>
* Gửi tag + link file Google Sheet cho team Ops để deploy PROD