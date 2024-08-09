// chọn phần tử h1
let heading = document.querySelector("h1");
console.log(heading);
// Tùy chỉnh CSS thông qua JavaScript DOM
heading.style.backgroundColor = "cyan";
heading.style.color = "#fff";
heading.style.fontSize = "46px";
// thêm nhiều thuộc tính
Object.assign(heading.style, {
  backgroundColor: "yellow",
  color: "black",
  fontSize: "46px",
});
