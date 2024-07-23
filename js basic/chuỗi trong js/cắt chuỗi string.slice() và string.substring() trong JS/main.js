// cắt chuỗi với slice: bắt đầu từ vị trí muốn cắt bắt đầu từ vị trí 0 đến vị trí end-1

let s1 = "0361976352";
console.log("chuỗi sau khi cắt là:", s1.slice(1, 9));

// cắt chuỗi với substring:bắt đầu từ vị trí muốn cắt bắt đầu từ vị trí 0 đến vị trí end-1
let s2 = "Hôm nay là một ngày đẹp";
console.log("chuỗi sau khi cắt là:", s2.substring(1, 6));
// khác nhau giữa slice và substring:
/* slice: sẽ bắt đầu từ vị trí start đến vị trí end-1 nếu start > end thì in ra chuỗi rỗng
substring:sẽ bắt đầu từ start đến vị trị end-1 nếu start nhỏ hơn end thì sẽ tự động đảo ngược chuỗi
*/
let s3 = "039473169";
console.log("chuỗi sau khi cắt là:", s3.slice(4, 1));
console.log("chuỗi sau khi cắt là:", s3.substring(4, 1));

// sử lý chuỗi với giá trị âm
/* slice: sẽ lấy ngược lại chuỗi
substring sẽ tự động chuyển giá trị âm về giá trị 0
*/
let s4 = "03691273269";

console.log("chuỗi sau khi cắt là:", s4.slice(-4, -1));
console.log("chuỗi sau khi cắt là:", s4.substring(4, -1));
