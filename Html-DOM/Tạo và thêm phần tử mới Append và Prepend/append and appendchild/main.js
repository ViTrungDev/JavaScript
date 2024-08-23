// xác định phần tử cha
let parenElm = document.querySelector("#header");
console.log(parenElm);

// Tạo phần tử con mới, ví dụ thẻ p
let p_elm = document.createElement("p");
p_elm.textContent = "Một con vịt xòe ra hai cái cánh";

// thêm style
p_elm.style.color = "red";
// Thêm class
p_elm.setAttribute("class", "doan_van");

/**
 * 1. Đối tượng cần thêm:
 * appendChild : chỉ thêm được đối tượng "Node"
 * append : thêm đc cả node và chuỗi văn bản
 */
// console.log(parenElm.append(p_elm));
console.log(parenElm.appendChild(p_elm));

/**
 * Thêm nhiều phần tử:
 * appendChild chỉ thêm đc 1 phần tử mỗi lần gọi
 * append có thể thêm nhiều phần tử hoặc chuỗi văn bản
 */

// Lắng nghe sự kiện click
let btn = document.createElement("button");
btn.textContent = "Click me";

let addBtn = parenElm.appendChild(btn);

// Gán sự kiện click cho phần tử vừa đc thêm
addBtn.addEventListener("click", function () {
  alert("Bạn vừa click vào nút !");
});
