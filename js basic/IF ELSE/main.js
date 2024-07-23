let diem = parseFloat(prompt("Moi cu nhap diem:"));
if (!isNaN == false && diem >= 5) {
  console.log("Cu da do");
} else if (!isNaN == false && diem < 5) {
  console.log(" Ban da truot");
} else {
  console.log("Cu nhap sai mat roi");
}

// toán tử 3 ngôi
let XepLoai =
  diem >= 8 ? "Giỏi" : diem >= 6.5 ? "Khá" : diem >= 5 ? "Trung Bình" : "Yếu";
console.log(XepLoai);
