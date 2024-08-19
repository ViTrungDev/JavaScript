// truy cập vàp phần tử parent, childs, Siblings

let element = document.querySelector(".hero__content");
console.log(element);

// 1 truy cập vào phần tử cha ( Phần tử cha là duy nhất)
console.log(element.parentElement);

// đổi màu nền của phần tử cha
element.parentElement.style.backgroundColor = "red";
console.log(element.parentElement.parentElement);

// Truy cập vào phần tử con (phần tử con thì có nhiều)
console.log(element.children);
console.log(element.children[0]);// truy cập phần tử đầu tiên
console.log(element.children[1]);// truy cập phần tử thứ hai
console.log(element.children[2]);// truy cập phần tử thứ ba

// Chọn phần tử kế tiếp
console.log(element.children[0].nextElementSibling);
// chọn phần tử trước đó
console.log(element.children[1].previousElementSibling);

