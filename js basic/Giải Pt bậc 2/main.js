var a = Number(prompt("Mời cụ nhập a:"));
var b = Number(prompt("Mời cụ nhập b:"));
var c = Number(prompt("Mời cụ nhập c:"));
function PTbac2(a, b, c) {
  let x1, x2;
  var delta = b ** 2 - 4 * a * c;
  if (delta < 0) {
    console.log("vô nghiệm");
  } else if ((delta = 0)) {
    console.log("x1 = x2 =", (-b / 2) * a);
  } else {
    x1 = -b + (Math.sqrt(delta) / 2) * a;
    x2 = -b - (Math.sqrt(delta) / 2) * a;
    console.log("Giá trị x1=", x1, " giá trị x2=", x2);
  }
}

PTbac2(a, b, c);
