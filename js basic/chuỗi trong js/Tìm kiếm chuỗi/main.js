// indexOf : tìm kiếm chuỗi xuất hiện lần đầu tiên nếu tìm thấy giá trị thì trả về giá trị index nếu ko tìm thấy trả về giá trị -1
let s1 = "abcdef abcdef";
let s2 = s1.indexOf("c");
console.log(s2);
// tìm kiếm c tại vị trí index = 4
let s3 = "abcdef abcdef";
let s4 = s3.indexOf("c", 4);
console.log(s4);

// lastIndexOf: tìm kiếm chuỗi xuất hiện lần cuối cùng nếu tìm thấy thì trả về giá trị index nếu ko tìm thấy trả về giá trị -1
let s5 = "abcdef abcdef";
let s6 = s5.lastIndexOf("a");
console.log(s6);

// tìm kiếm với gị trí value:giá trị ở điểm kết thúc tìm kiếm
let s7 = "abcdef abcdef";
let s8 = s7.lastIndexOf("a", 9);
console.log(s8);

// includes: kiểm tra xem giá trị có xuất hiện trong chuỗi ko nếu có trả về true nếu ko có trả về false
let s9 = "abcdef abcdef";
console.log(s9.includes("a"));

// tìm giá trị ở vị trí index
let s10 = "abcdef abcdef";
console.log(s10.includes("a", 8));

// kiểu tra chuỗi có bắt đầu bằng:
let s30 = "abcdef abcdef";
console.log("chuỗi có bắt đầu từ a hay không: " + s30.startsWith("a"));
// tìm kiếm với giá tri indexStartWith
let s31 = "abcdef abcdef";
console.log("chuỗi có bắt đầu từ bc hay không: " + s31.startsWith("bc", 1));
// kiểm tra giá trị có kết thúc bằng:
let s32 = "0123456789";
console.log("chuỗi có kết thúc bằng 9 hay không: " + s32.endsWith("9"));
// tìm kiếm với giá tri indexEndWith
let s33 = "0123456789";
console.log("chuỗi có kết thúc bằng 9 hay không: " + s33.endsWith("9", 1));
