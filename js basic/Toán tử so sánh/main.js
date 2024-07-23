//  khai bao bien
let a = 1;
let b = 3;
let c = "3";
console.log(typeof a);
console.log(typeof b);

//  toan tu so sanh toan hoc
console.log(a > b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);
console.log(c != b);
// so sanh ( == ) ( chỉ quan tâm giá trị ko quan tâm kiểu dữ liệu)
console.log(a == c);
console.log(b == c); // true
// so sanh ( === ) ( quan tâm cả giá trị và quan tâm kiểu dữ liệu)
console.log(a === c);
console.log(b === c); // false

// so sanh (!=) chỉ quan tâm đến giá trị ko quan tâm đến kiểu dữ liệu
console.log(a != c); // true
console.log(b != c); // false
// so sanh (!==) quan tâm đến giá trị và quan tâm đến kiểu dữ liệu
console.log(a !== c); // true
console.log(b !== c); // true
