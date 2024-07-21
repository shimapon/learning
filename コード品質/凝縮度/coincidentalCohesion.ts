console.log("偶発的凝縮:");

// てきとうに集められたものがモジュールをなしている
function main() {
  var data = getData();
  console.log("Hello World");
  calc(2);
}

function getData() {
  return "data";
}

function calc(num: number) {
  return num * 2;
}
