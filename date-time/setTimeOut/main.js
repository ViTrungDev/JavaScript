// setTimeout trạng thái delay của thời gian
// setTimeOut với 3 trạng thái khai báo hàm đã học

// 1. với Arrow function
let helloArrow = () => {
  console.log("hello world");
};
// delay hàm helloArrow trong khoảng 3s
setTimeout(helloArrow, 3000);

// 2.với function declaration
function xinChao() {
  console.log("Hello hahahahahah");
}
setTimeout(xinChao, 5000);

// 3. với function expression
let Expression = function () {
  console.log("hello expression");
};
setTimeout(Expression, 4000);

// ======================================== chuyền trực tiếp hàm vào setTimeout ===========================================
setTimeout(function xinChao() {
  console.log("Hello kkkkkkkkkkkkkkkk");
}, 1000);

setTimeout(function () {
  console.log("hello expression");
}, 1500);

setTimeout(() => {
  console.log("hello world");
}, 2000);
// ========================================== sử dụng với tham số =========================================
let arrowTime = (yourName) => {
  console.log(`Hello ${yourName}`);
};
// arrowTime("nam");

// setTimeout(arrowTime, 500, "Hà");

// ============================ hủy setTimeout =====================================
let cancelTime = setTimeout(arrowTime, 500, "Hà");
// hủy setTimeout
clearTimeout(cancelTime);
