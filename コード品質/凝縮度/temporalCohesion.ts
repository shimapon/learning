console.log("時間的凝縮:");

// 時間的に近く動作するものを集めたモジュール
// 実行順番を入れ替えても動作する
function initPage() {
  initConfig();
  initLogger();
  initDB();
}

// リファクタ例：アプリ起動時に行う処理
function initApp() {
  initLogger();

  const config = getConfig();
  setUpConfig(config);

  initDB();
  initLocalStorage();

  const data = getData();

  renderHeader();
  renderMenu();
  renderMainContent(data);
  renderFooter();
}

// → ## 手続的 + 時間的
function initAppRefactored() {
  // 手続的
  prepare();
  setUpUI();
}

function prepare() {
  // 時間的
  initConfig();
  initLogger();
  initDB();
  initLocalStorage();
}

function initConfig() {
  // 逐次的
  const config = getConfig();
  setUpConfig(config);
}

function setUpUI() {
  // 時間的
  const data = getData();
  renderMainContent(data);
  renderHeader();
  renderMenu();
  renderFooter();
}

// → ## 逐次的 + 手続き的
function initAppRefactored2() {
  initConfig();
  setUpUI2();
}

// 逐次的
function setUpUI2() {
  const data = getData();
  renderUI(data);
}

// 手続的
function renderUI(data: any) {
  renderHeader();
  renderMenu();
  renderMainContent(data);
  renderFooter();
}

// # 必要な記述
function initLogger() {}
function initDB() {}
function getConfig() {}
function setUpConfig(config: any) {}
function initLocalStorage() {}
function renderHeader() {}
function renderMenu() {}
function renderMainContent(data: any) {}
function renderFooter() {}
