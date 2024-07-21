# HTTP メソッド

---

HTTP verb ・HTTP メソッド・HTTP 動詞：verb とは動詞の意味．HTTP/1.1 では 8 つのメソッド(手続き・やり取り)がある。簡単な Web アプリでは、GET と POST しか使わないこともある。

- Create： POST/PUT
- Read： GET
- Update： PUT
- Delete： DELETE

### HTTP verb の 8 つのメソッド

1. GET：[URI](http://d.hatena.ne.jp/keyword/URI)のデータを取得する。
2. POST：[URI](http://d.hatena.ne.jp/keyword/URI)にリソースを追加する
3. HEAD：[URI](http://d.hatena.ne.jp/keyword/URI)のヘッダデータのみを所得する。(データの Body は必要ないときに使う)
4. PUT：[URI](http://d.hatena.ne.jp/keyword/URI)の内容を作成・置換する。
5. DELETE：[URI](http://d.hatena.ne.jp/keyword/URI)の内容を削除する。
6. OPTIONS：[URI](http://d.hatena.ne.jp/keyword/URI)に対して利用できるメソッドの一覧を取得する。(他の 7 つのメソッドに対応しないとき使う)
7. CONNECT：プロキシにトンネリング通信を要求する。トンネリング通信：[SSL](http://d.hatena.ne.jp/keyword/SSL)などで暗号化したデータを送信する場合、プロキシサーバは中身のデータを判断できない。そこで、CONNECT メソッドで中身のデータのパケットをサーバまで右から左に転送する。
8. TRACE：クライアントからのリク[エス](http://d.hatena.ne.jp/keyword/%A5%A8%A5%B9)トをそのまま返す。
