// Ngăn chặn hành vi người dùng
const login = document.getElementById("login");
login.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form đã đc lưu");
  alert("form đã đc lưu");
});
