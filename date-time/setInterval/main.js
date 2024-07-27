// setInterval: lặp lại trong khoảng thời gian nhất định (cú pháp giống với setTimeout)

// set với arrow function

let arrow = () => {
  // alert("Bạn có tin nhắn chưa đọc");
  console.log("Bạn có tin nhắn chưa đọc");
};
setInterval(arrow, 3000);

// ví dụ 2
function updateTime() {
  let currentTime = new Date();
  console.log(currentTime);
}
setInterval(updateTime, 1000);
// dừng lặp

let counter = 0;

let stopInterval = () => {
  console.log(counter++);
  if (counter === 5) {
    clearInterval(Stop);
  }
};
let Stop = setInterval(stopInterval, 1000);
