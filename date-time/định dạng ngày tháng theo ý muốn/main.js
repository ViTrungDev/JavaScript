// định dạng ngày tháng theo ý muốn
// cách 1: new date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

let myDate = new Date(2024, 2, 16);
console.log(myDate);
// dùng toLocaleDateString để lấy thông tin cần thiết
console.log(myDate.toLocaleDateString());

// cách 2: dùng new date(stringDate)
let myDate2 = new Date("2024-2-6T12:30:15");
console.log(myDate2);
console.log(myDate2.toLocaleDateString());

// cách 3: dùng set
let myDate3 = new Date();
myDate3.setFullYear(2023);
myDate3.setMonth(3); // tháng +1
myDate3.setDate(9);
console.log(myDate3);
console.log(myDate3.toLocaleDateString());

// xuất ngày tháng tự code
let prefixDate = myDate3.getDate() < 10 ? "0" : "";
let prefixMonth = myDate3.getMonth() < 9 ? "0" : "";
console.log(
  "Ngày:",
  prefixDate + myDate3.getDate(),
  "Tháng:",
  prefixMonth + myDate3.getMonth(),
  "Năm:",
  myDate3.getFullYear()
);
