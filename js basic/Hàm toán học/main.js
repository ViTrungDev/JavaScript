// 1. ham tinh can bac 2 Math.sqrt()
let a = 25;
let b = Math.sqrt(a);
console.log("Can bac 2 cua 25 la:", b);
// 2. ham mu Math.pow(a,b);
let soA = 2;
let soB = 3;
let result = Math.pow(soA, soB);
console.log("ham mu cua so la:", result);
// 3. ham lay gia tri tuyet doi Math.abs();
let soC = -10;
let soD = Math.abs(soC);
console.log("gia tri tuyet doi la", soD);
// 4. ham lam tron le Math.ceil va ham lam tron xuong Math.flood
let decimalNumber = 4.1111111111111;
let ceilValue = Math.ceil(decimalNumber);
let floodValue = Math.floor(decimalNumber);
console.log(
  "gia tri lam tron le",
  ceilValue,
  "gia tri lam tron xuong",
  floodValue
);
// 5. ham lam tron Math.round() lam tron 0,5 =1
let roundValue = 9.5;
let resultRound = Math.round(roundValue);
console.log(resultRound);
// 6. ham lam tron x den don vi
let f = 3.1462496;
let fRound = Number(f.toFixed(2));
console.log(fRound);
console.log(typeof fRound);
// 7.ham max min
let soMax = Math.max(20, 17, 38, 46);
console.log(soMax);
let soMin = Math.min(20, 17, 38, 46);
console.log(soMin);
