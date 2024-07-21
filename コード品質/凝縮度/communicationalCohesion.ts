console.log("通信的凝縮:");

interface Data {}

// 同じデータを扱うものを集めたモジュール
function changeAll(data: Data) {
  changeA(data);
  changeB(data);
  changeC(data);
}

function changeA(data: Data) {}
function changeB(data: Data) {}
function changeC(data: Data) {}
