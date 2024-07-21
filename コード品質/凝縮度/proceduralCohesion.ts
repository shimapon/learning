console.log("手続き的凝縮:");

// 順番に実行する必要があるものを集めたモジュール
// 共通したデータは扱わない
function getApiData() {
  checkPermission();
  fetchApi();
}

function checkPermission() {}
function fetchApi() {}
