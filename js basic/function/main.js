// Function Declaration
function xinChao() {
  console.log("Hello world");
}

xinChao();

// hàm tính tổng của 3 số
let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
let c = Number(prompt("Nhập số c:"));

function tinhTong(a, b, c) {
  return a + b + c;
}
console.log(tinhTong(a, b, c));
// Function Expression
let tinhHieu = function (giaTri1, giaTri2, giaTri3) {
  return giaTri1 - giaTri2 - giaTri3;
};
console.log(tinhHieu(a, b, c));
