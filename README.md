# 解決瀏覽器錯誤 No 'Access-Control-Allow-Origin' header is present on the requested resource.

## 解決方案

### CORS

**程式碼在/cors**

較簡單的解決方案為使用 Cross Origin Rosource Sharing。解決方式為 Server 在回應表頭中加入[Access-Control-Allow-Origin: 請求的域名]。

### Proxy

**程式碼在/proxy**

我使用了 nginx 作為代理伺服器。瀏覽器端和代理伺服器是同源的，所以不會被擋下來。而代理伺服器和後端伺服器不會被同源策略限制住，所以即使有不同的域名也可以正常傳送請求/回應。

由於前後端的 Server 不會 expose 出來，所以使用者無法直接向其連線。
