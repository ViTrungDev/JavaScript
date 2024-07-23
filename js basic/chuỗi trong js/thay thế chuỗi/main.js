// thay thế chuỗi: replace(oldValue,newValue)
let s1 = "học học nữa học mãi";
console.log(s1.replace("học", "ngủ")); /* thay thế chữ ngủ đầu tiên */

// thay thế nhiều phần tử ta sử dụng biểu thức chính quy(regular expression)
let s2 = "học học nữa học mãi";
console.log(s1.replace(/học/g, "ngủ"));

// sử dụng repeat(count): để lặp lại chuỗi

let s3 = "Hello ";
console.log(s3.repeat(4));
