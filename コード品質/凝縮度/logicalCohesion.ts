console.log("論理的凝縮:");

// 論理的に似たようなことをするものを集めたモジュール
function sample(isA: boolean) {
  if (isA) {
    sampleA();
  } else {
    sampleB;
  }
}

// リファクタ例
function purchaseOrRestore(isRestore: boolean) {
  const receipt = getRecipt(); // レシートの取得
  sendRecipt(receipt);

  if (isRestore) {
    onSuccessRestore();
  } else {
    onSunccessPurchase();
  }
}

// → 共通化せず分ける
function purchase() {
  // 手続き的
  processReceipt();
  onSunccessPurchase();
}

function restore() {
  // 手続き的
  processReceipt();
  onSuccessRestore();
}

function processReceipt() {
  // 逐次的
  const receipt = getRecipt();
  sendRecipt(receipt);
}

// # 必要な定義
function sampleA() {}
function sampleB() {}
function getRecipt() {}
function sendRecipt(receipt: any) {}
function onSuccessRestore() {}
function onSunccessPurchase() {}
