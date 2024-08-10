/**
 * Thao tác với classList
 *classList.add để thêm 1 class mới vào element
 classList.contains: kiểm tra xem phần tử có chứa lớp(class) cụ thể ko
classList.remove:Xóa 1 lớp ra khỏi phần tử
 */

// Lấy phần tử cần tương tác
let element = document.getElementById("myElement");

console.log(element);

// 1. thêm 1 lớp mới vào phần tử
element.classList.add("title");
// 2. kiểm tra xem phần tử có chứa lớp(class) cụ thể ko
console.log(element.classList.contains("myElement"));
// 3.Xóa 1 lớp ra khỏi phần tử
element.classList.remove("title");
// 4. thay thế lớp cũ bằng 1 lớp mới
element.classList.replace("old-class", "new-class");
// 5. Nếu lớp đã tồn tại thì xóa nó chưa tồn tại thì thêm vào
element.classList.toggle("new-class");
