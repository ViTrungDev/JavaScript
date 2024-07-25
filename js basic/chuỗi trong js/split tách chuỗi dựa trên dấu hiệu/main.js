// split: tách chuỗi dự trên dấu hiệu
let student = "Hoa,Lan,Đàm,Minh";
let arr = student.split(",");
console.log(arr);
// Giới hạn phần tử mảng
let arr2 = student.split(",", 3);
console.log(arr2);

//// split: tách chuỗi dự trên dấu hiệu ""
let string = "abcdef 123";
let array = string.split("");
console.log(array);
