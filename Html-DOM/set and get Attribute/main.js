var head = document.getElementsByClassName("heading").innerHTML;
// heading.innerHTML = "Xem dom hah";
console.log(head);

let list = document.getElementsByClassName("list");
list[0].innerHTML = "Học javaScript";

let checkbox = document.querySelector("#agree");
checkbox.checked = true;
console.log(checkbox);

// sử dụng querySelector để chọn phần tử a đầu tiên
const firsLink = document.querySelector("a");

if (firsLink) {
  // getAttribute : lấy giá trị ra
  const linkHref = firsLink.getAttribute("href");
  console.log(linkHref);
} else {
  console.log("Không tìm thấy thẻ a");
}
// setAttribute("element","Giá trị của element") : thêm giá trị vào
firsLink.setAttribute("target", "_blank");

const header = document.getElementsByClassName("heading");
if (header) {
    header[0].setAttribute("style", "color:blue");
} else {
  console.log("Không tìm thấy class heading ");
}
