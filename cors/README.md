# CORS

CORS是解決同源策略堵塞請求回應結果的其中一個方式。
在server端的response header中加入[Access-Control-Allow-Origin: 請求的域名]
我使用nodejs的express，可以加入中間件cors，直接幫我處理回應表頭的問題。

```
docker-compose up --build
http://localhost:3000
```
