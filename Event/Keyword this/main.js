function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const btn_click = document.querySelectorAll(".btn");

// for (let btn of btn_click) {
//   btn.addEventListener("click", function () {
//     this.style.backgroundColor = randomColor();
//     this.style.color = randomColor();
//   });
// }
function add() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}

function addButton() {
  for (let btn of btn_click) {
    btn.addEventListener("click", add);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  addButton();
});

const add_title = document.querySelectorAll(".title");

function addTitle() {
  for (let title of add_title) {
    title.addEventListener("click", add);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  addTitle();
});
