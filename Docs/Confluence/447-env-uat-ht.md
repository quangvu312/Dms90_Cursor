 

Deploy Tag: vx.x.x.x-main-ht 

branch: main / main-\* 

Config Env branch: ht-dms 

 

Docker Image: đang dùng chung UAT core 

 

domain:  <https://ht-portal-uat.finviet.com.vn/> 

 

**Services domain public:** 

 

ht-dms-account-portal <https://ht-account-uat.finviet.com.vn/> 

ht-dms-gateway-service-ac <https://ht-api-uat.finviet.com.vn/dms/account> 

ht-dms-portal-service-sfa <https://ht-portal-uat.finviet.com.vn/> 

ht-dms-api-order-management-nginx                <https://ht-api-uat.finviet.com.vn/dms/order> 

ht-dms-api-report-service <https://ht-api-uat.finviet.com.vn/dms/api-report> 

ht-dms-api-warehouse-nginx <https://ht-api-uat.finviet.com.vn/dms/warehouse>  

ht-dms-client-gateway-nginx <https://ht-api-uat.finviet.com.vn/dms/client-gateway>  

ht-dms-mobile-service-sfa <https://ht-api-uat.finviet.com.vn/dms/mobile> 

ht-dms-portal-service-sfa <https://ht-api-uat.finviet.com.vn/dms/saleman> 

ht-dms-promotion-core <https://ht-api-uat.finviet.com.vn/dms/promotion> 

ht-dms-report-render <https://ht-report-render-uat.finviet.com.vn/> 

ht-dms-socket-service-sfa <https://ht-socket-uat.finviet.com.vn/> 

 

 

**Daemon** 

admin/admin 

<http://uat-aws-infras.finviet.com.vn:32018> order 

<http://uat-aws-infras.finviet.com.vn:32020> warehouse 

 

 

**Argo:**  

<https://uat-aws-argocd.finviet.com.vn/applications/ht-dms-api-order-management-php?resource=&view=network> 

 

 

**Services domain local k8s:** 

 

[ht-dms-account-portal.ht](http://ht-dms-account-portal.ht)-dms-applications.svc.cluster.local:8080 

[ht-dms-gateway-service-ac.ht](http://ht-dms-gateway-service-ac.ht)-dms-applications.svc.cluster.local:8080  

[ht-dms-portal-service-sfa.ht](http://ht-dms-portal-service-sfa.ht)-dms-applications.svc.cluster.local:8080  

[ht-dms-api-order-management-nginx.ht](http://ht-dms-api-order-management-nginx.ht)-dms-applications.svc.cluster.local  

[ht-dms-api-report-service.ht](http://ht-dms-api-report-service.ht)-dms-applications.svc.cluster.local:8080  

[ht-dms-api-warehouse-nginx.ht](http://ht-dms-api-warehouse-nginx.ht)-dms-applications.svc.cluster.local  

[ht-dms-client-gateway-nginx.ht](http://ht-dms-client-gateway-nginx.ht)-dms-applications.svc.cluster.local:8080  

[ht-dms-mobile-service-sfa.ht](http://ht-dms-mobile-service-sfa.ht)-dms-applications.svc.cluster.local:8080  

[ht-dms-promotion-core.ht](http://ht-dms-promotion-core.ht)-dms-applications.svc.cluster.local:8080  

[ht-dms-report-render.ht](http://ht-dms-report-render.ht)-dms-applications.svc.cluster.local:8080  

[ht-dms-socket-service-sfa.ht](http://ht-dms-socket-service-sfa.ht)-dms-applications.svc.cluster.local:8080  

 

**Infra:** 

Mongodb: 

Localhost: [ht-dms-mongodb.ht](http://ht-dms-mongodb.ht)-dms-infras.svc.cluster.local 

LocaPort: 27017 

Host: [ht-infras-uat.finviet.com.vn](http://ht-infras-uat.finviet.com.vn) 

Port: 32015 

 

**Postgresql**:  

Localhost: [ht-dms-postgresql.ht](http://ht-dms-postgresql.ht)-dms-infras.svc.cluster.local 

LocaPort: 5432 

Host: [ht-infras-uat.finviet.com.vn](http://ht-infras-uat.finviet.com.vn) 

Port: 32013 

 

**RabbitMQ:**

Localhost: [ht-dms-rabbitmq.ht](http://ht-dms-rabbitmq.ht)-dms-infras.svc.cluster.local 

LocaPort: 6572 

Host: [ht-infras-uat.finviet.com.vn](http://ht-infras-uat.finviet.com.vn) 

Port: 32014 

 

**ActiveMQ**: 

Localhost: [ht-dms-activemq-activemq.ht](http://ht-dms-activemq-activemq.ht)-dms-infras.svc.cluster.local 

LocaPort: 5672  

Host: [ht-infras-uat.finviet.com.vn](http://ht-infras-uat.finviet.com.vn) 

Port: 32016 

    User: admin 

    Pass: admin 

 

**Redis**: 

Localhost: [ht-dms-redis-master.ht](http://ht-dms-redis-master.ht)-dms-infras.svc.cluster.local 

LocaPort: 6379   

 

[uat-aws-infras.finviet.com.vn](http://uat-aws-infras.finviet.com.vn) 32029 

 

 

**Jaeger**:  

Localhost: [ht-dms-jaeger-collector.ht](http://ht-dms-jaeger-collector.ht)-dms-infras.svc.cluster.local 

LocaPort: 14268  

Host: [ht-infras-uat.finviet.com.vn](http://ht-infras-uat.finviet.com.vn) 

Port: 32017 

 

**Kafka:** 

k8s:   [ht-dms-kafka.ht](http://ht-dms-kafka.ht)-dms-infras.svc.cluster.local:9092  

publish:  [ht-dms-kafka-uat.finviet.com.vn](http://ht-dms-kafka-uat.finviet.com.vn):32093 

 

 

**Monitor**: 

<https://akhq-aws-uat.finviet.com.vn/ui/ht-dms-uat> 

login: acc FV 

 

 

**akhq\_dev**: <https://akhq-aws-dev.finviet.com.vn> 

**akhq\_uat**: <https://akhq-aws-uat.finviet.com.vn> 

user: fvadmin 

pass: 83be397f5935 

 

 

 

 

 

**Config service:** 

Localhost: [ht-dms-config-service.ht](http://ht-dms-config-service.ht)-dms-infras.svc.cluster.local 

LocaPort: 8080  

Host: [ht-infras-uat.finviet.com.vn](http://ht-infras-uat.finviet.com.vn) 

Port: 31808 

 

 

**## Connect DB**

 

DB\_HOST=[uat-aws-infras.finviet.com.vn](http://uat-aws-infras.finviet.com.vn) 

DB\_PORT=32023 

DB\_DATABASE=dms\_order\_management 

DB\_USERNAME=dms\_order\_management 

DB\_PASSWORD=WPEgr4LmBAyXm734 

 

 

DB\_HOST=[uat-aws-infras.finviet.com.vn](http://uat-aws-infras.finviet.com.vn) 

DB\_PORT=32023 

DB\_DATABASE=dms\_warehouse 

DB\_USERNAME=dms\_warehouse 

DB\_PASSWORD=buGyr3v3wDTve2du 

 

 

DB\_HOST=[uat-aws-infras.finviet.com.vn](http://uat-aws-infras.finviet.com.vn) 

DB\_PORT=32023 

DB\_DATABASE=dms\_gateway 

DB\_USERNAME=dms\_gateway 

DB\_PASSWORD=rT4D3wDTvr4LBRsH 

 

 

DATAMART\_HOST=[postgresdwh-uat.finviet.com.vn](http://postgresdwh-uat.finviet.com.vn) 

DATAMART\_PORT=5432 

DATAMART\_DATABASE=dwh\_ht 

DATAMART\_USERNAME=dwh 

DATAMART\_PASSWORD=dwh\_uat\_FV 

DATAMART\_SCHEMA=mart 

 

 

REDIS\_HOST=[uat-aws-infras.finviet.com.vn](http://uat-aws-infras.finviet.com.vn)  

REDIS\_PORT=32029 

REDIS\_PASSWORD= 

REDIS\_DATABASE=0 

 

 

**## API Report:** 

POSTGRES\_HOST\_SLAVE\_1=[uat-aws-infras.finviet.com.vn](http://uat-aws-infras.finviet.com.vn) 

POSTGRES\_PORT\_SLAVE\_1=32023 

POSTGRES\_USERNAME\_SLAVE\_1=dms\_report 

POSTGRES\_DATABASE\_SLAVE\_1=dms\_report 

POSTGRES\_PASSWORD\_SLAVE\_1=UV4eAewaJcaUcjbK 

 

**## SFA** 

POSTGRES\_SFA\_HOST=[uat-aws-infras.finviet.com.vn](http://uat-aws-infras.finviet.com.vn) 

POSTGRES\_SFA\_PORT=32023 

POSTGRES\_SFA\_USERNAME=dms\_salesman 

POSTGRES\_SFA\_PASSWORD=VqB67rVrWDYDB2eo 

POSTGRES\_SFA\_DATABASE=dms\_salesman 

 

 

**# RabbitMQ 3.13.3** 

RMQ\_URI=<amqp://dev_user:Huongthuy_2024@ht-dms-rabbitmq.ht-dms-infras.svc.cluster.local:5672/dms_uat_finviet> 

 

<http://ht-infras-uat.finviet.com.vn:32024/#/> 

dev\_user 

Huongthuy\_2024 

 

 

 

 

================================================== 

 

**SSO HT:** 

 

ht: 

  mobile: 

    management: 

      api: <http://10.100.0.21:32014/realms/HT/protocol/openid-connect/token> 

      client\_id: management 

      client\_secret: xxcAVPoJNMb8r29B8WoB5Zab2Yqrp6yS 

      example: 

        username: test65464852 

        password: 123456 

 

    salesman: 

      api: <http://10.100.0.21:32014/realms/HT/protocol/openid-connect/token> 

      client\_id: salesman 

      client\_secret: p3ARZ7QJg2Ezipehwgue90balCis6qpV 

      example: 

        username: test65464852 

        password: 123456 

 

  **portal**: 

    api: [https://ht-api-uat.finviet.com.vnhttps://ht-api-uat.finviet.com.vnhttps://ht-api-uat.finviet.com.vnhttps://ht--uat.finviet.com.vn/dms/account](https://ht-api-uat.finviet.com.vnhttps//ht-api-uat.finviet.com.vnhttps://ht-api-uat.finviet.com.vnhttps://ht--uat.finviet.com.vn/dms/account) 

    ho: 

      example: 

        username: adminho 

        password: Sso1000! 

 

    npp: 

      example: 

        username: adminnpp 

        password: Sso1000! 

 

  cert: 

    secret: riRHc4LoXbE47shobI6E9s65R9ueDCVp 

    access: 3zC2t0HMdQqe3J03+0SAnIY6AdizEXeW7oe7az6ALhkiPmfKieqIuFbnT7/PAn2UBrRaHiaxs9wBpekzEkUTRKot 

    public\_key: MIICkzCCAXsCBgGW+s1gxzANBgkqhkiG9w0BAQsFADANMQswCQYDVQQDDAJIVDAeFw0yNTA1MjMwMTM5NDVaFw0zNTA1MjMwMTQxMjVaMA0xCzAJBgNVBAMMAkhUMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA25D+IiKUyh2kwXTdXPTgY6veTv34W702nQ9/zDNbr8RQAIlqdVUHDnVHXs5m5LokAD+d07MQ7pupCQTCiy+OGXPUNCkkUV0m5S20okRDGjMgQ77k+I1CXkwahgi+tLmuzsGLyUiqQSDIMPd638QTTzary2t3+Z5QWa4ikBVA44oninrcWS8MPFMazXg48Bk5WuCZqEPzFroKj/SdHAcH95qFqqck9g2woZCUL8U7MsC+3SlxJAba2CLwu6nQFhzJUiZjuUGmZX1TeU7bqWGrMlwwfrbNrILxnSZILJ63SsYucVogvIGY22/BZ1+EAqMbNwqJB0yhyvhKgzNR2ykO+wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQA4+nu47tLDPqWjPuqnYMIwepP2uy8vHpH8xm5wfZRTs52oTDXQaye8zYg/FnqfhCdv+vf9BNPt87hSCd7dg55/Sm1OvVGuyGn8M2ZME7Isxf/UIxy3+HKSDhp7skELxd0uQ+GoI509pnoIxe8lXOGGR1KPrDyCUm1Gp8JdYmE7lvj7XAbdKND46lGhdIeN42txLACs60MYWXZiM7tmdrcCwJbcFsvyTnJ0g+K2Rfr2D4Z8UxyG7gGRU9OYuwcIlm3r60xzIDN+TmpmyBNpgyQQBpxop+ypk+0+8kC2gJDD6sW8/+D9LgkwHyKCFobuC9qplckxrL5eYS98qKYehtxj 

  

 

 intergate: 

**ht-to-finviet  /   DMS HT > MC (FV):** 

      host: <https://ht-api-uat.finviet.com.vn/dms/account/v1/auth/openid-connect/client/credential> 

      payload: 

        client\_id: branch-ht-merchant 

        client\_secret: JlDpffW3OyB3iyixFXrl0fWXj3xxNGct 

 

 

**finviet-to-ht  / MC (FV) > DMS HT:** 

      host: <https://api-uat.finviet.com.vn/account/v1/auth/openid-connect/client/credential> 

=> host FV nên trong DMS BE thì phải dùng domain public 

 

      payload: 

        client\_id: branch-merchant-ht 

        client\_secret: fi5HXqEfKbSUEXDnJGLGODJPwpVgtcyg 

 

 

**ERP > DMS HT:** 

  client\_id: erp-ht 

  client\_secret: TEvGGmfoapeS05SK1B3dnZd60lzvz51w 

 

            public: <https://ht-api-uat.finviet.com.vn/dms/account> 

            local-k8s: [http://ht-dms-gateway-service-ac.ht-dms-applications.svc.cluster.local:8080](http://ht-dms-gateway-service-ac.ht-dms-applications.svc.cluster.local:8080/) 

 

 

 

INTERNAL\_ACCESS\_KEY=3zC2t0HMdQqe3J03+0SAnIY6AdizEXeW7oe7az6ALhkiPmfKieqIuFbnT7/PAn2UBrRaHiaxs9wBpekzEkUTRKot  

INTERNAL\_SECRET\_KEY=riRHc4LoXbE47shobI6E9s65R9ueDCVp 

 

Internal Key: M3pDMnQwSE1kUXFlM0owMyswU0FuSVk2QWRpekVYZVc3b2U3YXo2QUxoa2lQbWZLaWVxSXVGYm5UNy9QQW4yVUJyUmFIaWF4czl3QnBla3pFa1VUUktvdDplNDI4YTgyYmY3MDgwMzEzMmM3NmNkMTY1YzMwNDA0MDc1MTMxYzMxOWE4NTZiOGZiNzllMGZmZTI4ZTA5NTM4 

 

 

 

**## SFTP test:** 

SFTP\_HOST=118.69.77.144 

SFTP\_USERNAME=sftpuser 

SFTP\_PASSWORD=finviet@123789 

SFTP\_PORT=22 

SFTP\_ROOT='/upload/DMS90' 