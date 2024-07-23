let s1 = "Hồi đó tôi chê mồm em rộng \ngiời lại chụm mồm vào nhau";
console.log(s1);
// index chuỗi: index bắt đầu từ vị trí số 0
let name = "Linh";
console.log(name[1]);
// length : lấy ra độ dài chuỗi
let s2 = "Chưa có bao giờ đẹp như hôm nay";
console.log(s2.length);

// bài tập vận dụng
let stringName = prompt("Mời bạn nhập vào 1 chuỗi:");
if (stringName.length <= 140) {
  alert("Bạn đã nhập chuỗi:", stringName.length, "ký tự");
} else {
  alert("Bạn đã nhập quá", stringName.length - 140, "ký tự");
}
