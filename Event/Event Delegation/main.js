// Ngăn chặn hành vi của form
const form = document.getElementById("form");
const lis = document.getElementById("list_item");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn hành vi chuyển hướng của form
  // Lấy giá trị của uername and message
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;
  //   Tạo thẻ li
  const newLi = document.createElement("li");
  newLi.textContent = username + " : " + message;

  //   Thêm li vào ul
  lis.appendChild(newLi);
  //   Reset form nhập về trắng
  form.reset();
});
const list = document.querySelectorAll("li");
lis.addEventListener("click", function (event) {
  const li = event.target; // kiểm tra xem phần tử đó có đc click ko
  if (li.tagName === "LI") {
    li.remove();
  }
});
