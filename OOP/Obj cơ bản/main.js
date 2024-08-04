// Khai báo 1 đối tượng

let student = {
  fullName: "Trần Như Nhộng",
  birthYear: 2005,
  address: {
    country: "Việt Nam",
    address: "Thanh Hoa",
  },
  scores: [9, 4, 7, 8],

  getTuoi: function () {
    return 2024 - this.birthYear;
  },
  diemTB: function () {
    let SumScores = this.scores.reduce((a, b) => a + b, 0);
    return SumScores / 3;
  },
};
console.log(student.address);
console.log(student.fullName);
console.log(student["birthYear"]);
console.log(student.getTuoi());
console.log(student.diemTB());

// thêm sửa xóa trong js
// 1. thêm thuộc tính
student.email = "abc@gmail.com";
student["phone"] = "0697631589";
console.log(student);

// 2. Xóa bỏ 1 thuộc tính
delete student.email;
delete student["phone"];
console.log(student);

// 3. sửa thuộc tính
student.birthYear = 2004;
console.log(student);