const input = document.querySelector("#txt");

input.addEventListener("keydown", function () {
  console.log("KeyDown");
  //   alert("bạn đã nhấn phím");
});

input.addEventListener("keyup", function () {
  console.log("Key up");
});
input.addEventListener("keyup", function (event) {
  console.log(event);
});
function AddEventKeyDown() {
  input.addEventListener("keydown", function (event) {
    if (event.key === "r") {
      document.body.style.backgroundColor = "red";
    }
    else if (event.key === "Enter") {
      document.body.style.backgroundColor = "#fff";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  AddEventKeyDown();
});
