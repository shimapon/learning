## **オリジン間リソース共有(CORS)**

最新ブラウザに装備されているセキュリティプロトコル

ブラウザは、すべてのリクエストに**Origin**
ヘッダーを追加します。リクエストがサーバーに届くと、リクエストのオリジンがリソース取得許可リストに含まれている場合に、サーバーが`Access-Control-Allow-Origin`
ヘッダーをレスポンスに追加します。

```bash
curl -H "Origin: http://localhost:3000" --head http://localhost:5000/rooms
```

```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: http://localhost:3000
Vary: Origin
Content-Type: application/json; charset=utf-8
Content-Length: 52
ETag: <ETag>
Date: Tue, 30 Mar 2021 16:46:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

[Express と TypeScript API に CORS サポートを追加する方法](https://www.twilio.com/blog/add-cors-support-express-typescript-api-jp)
