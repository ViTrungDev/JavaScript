// sử dụng đối tượng new date để khởi tạo
let currentDate = new Date();
console.log(typeof currentDate);
console.log(currentDate);
// lấy ra ngày tháng năm giờ phút giây hiện tại
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // tháng +1 (tháng bắt đầu từ 0)
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log("Lấy ra năm hiện tại:", year);
console.log("Lấy ra tháng hiện tại:", month);
console.log("Lấy ra ngày hiện tại:", day);
console.log("Lấy ra giờ hiện tại:", hours);
console.log("Lấy ra phút hiện tại:", minutes);
console.log("Lấy ra giây hiện tại:", seconds);

// xuất thử thời gian tại thời điểm 0
const timestamp = new Date(0);
console.log(timestamp); // kết quả :Thu Jan 01 1970 08:00:00 GMT+0800 (Giờ Đông Dương)
