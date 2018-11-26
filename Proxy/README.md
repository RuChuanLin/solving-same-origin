# 全端架構-請求代理

## 安裝

```
docker-compose up --build
http://localhost/
```

## 架構

**這個架構總共要啟動 3 個伺服器，分別是 nginx/前端 server/後端 server**

nginx 作為代理伺服器的角色，首要的任務是當作整個網站的窗口：所有向網站的請求都透過 nginx「代理」給其他的 server。

