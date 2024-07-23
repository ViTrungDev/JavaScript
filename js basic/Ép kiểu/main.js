let number = prompt("Mời cụ nhập number:");
// kiểm tra kiểu dữ liệu
console.log(typeof number);
//  thực hiện phép tính chưa ép kiểu
let numberB = 5;
console.log(typeof numberB);
let ketQua = number + numberB;
console.log(" Kết quả phép cộng:", ketQua);
let ketQuaTru = number - numberB;
console.log(" Kết quả phép trừ:", ketQuaTru);
console.log(" Kết quả phép nhân:", number * numberB);
console.log(" Kết quả phép chia:", number / numberB);
//  ép kiểu sang kiểu int ta dùng:parseInt
let numberC = parseInt(prompt("Mời cụ nhập numberC:"));
console.log(typeof numberC);
console.log(numberC);
//  ép kiểu sang float
let numberD = parseFloat(prompt("Mời cụ nhập numberD:"));
console.log(typeof numberD);
console.log(numberD);
// ép kiểu sang kiểu number: bao gồm cả số nguyên và số thực
let numberE = Number(prompt("Mời cụ nhập numberE:"));
console.log(typeof numberE);
console.log(numberE);
