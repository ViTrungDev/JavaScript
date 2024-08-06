class student {
  construct(radius) {
    this.radius = radius;
  }
  static calcArea(radius){
    return Math.PI * radius *radius;
  }
}
 const SinhVien = new student(10);

//  sử dụng static để gọi hàm mà ko cần khởi tạo đối tượng
console.log(student.calcArea(10));
