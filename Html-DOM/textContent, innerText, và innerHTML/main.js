// Phân biệt textContent, innerText, và innerHTML
let element = document.getElementById("demo");
// textContent: lấy ra phần content
console.log("textContent");
console.log(element.textContent);
// innerText: lấy ra phần hiện thị trên web
console.log("innerText");
console.log(element.innerText);
// innerHtml: lấy cả content và các thẻ html
console.log("innerHtml");
console.log(element.innerHTML);
