console.log("逐次的凝縮:");

// ある部分の出力が別の部分の入力になるようなものを集めたモジュール
// 例えば：ファイルを取得して変換して保存する
function convertFile() {
  const file = fetchFile();
  const converted = convert(file);
  save(converted);
}

function fetchFile() {
  return "file";
}
function convert(file: string) {
  return file + " converted";
}
function save(converted: string) {}
