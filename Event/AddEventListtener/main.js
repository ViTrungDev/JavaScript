// phương thức addEventListener js
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// thêm sự kiện addEventListener
// button1.addEventListener("click", function () {
//   alert("bạn đã click vào button 1");
// });
button2.addEventListener("click", () => {
  alert("Bạn đã click vào button 2");
});

button1.addEventListener("click", handerClick);

function handerClick() {
  alert("bạn đã click vào button 1");
}
