// chọn phần tử ul cha
const ul = document.getElementById("list");
const nameUser = document.getElementById("name");
// Ngăn chặn hành vi người dùng
const login = document.getElementById("login");
login.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form đã đc lưu");
  alert("form đã đc lưu");

  console.log(nameUser.value);
 
  const listUser = document.createElement("ul");
  listUser.innerText = nameUser.value;
  ul.appendChild(listUser);
});
