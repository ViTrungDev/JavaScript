// Cách 1: sử dụng  class Expression (ít dùng)
const SinhVien = class {
  constructor(fullName, ID, birthDay, homeTown) {
    this.fullName = fullName;
    this.ID = ID;
    this.birthDay = birthDay;
    this.homeTown = homeTown;
  }
  // phuong thuc
  showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.birthDay} ${this.homeTown}`;
  };
};
// Cách 2: sử dụng class  Declaration
class SinhVien1 {
  // construct
  constructor(fullName, ID, birthDay, homeTown) {
    this.fullName = fullName;
    this.ID = ID;
    this.birthDay = birthDay;
    this.homeTown = homeTown;
  }
  // phuong thuc
  showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.birthDay} ${this.homeTown}`;
  };
}

// Tạo đối tượng
const sv1 = new SinhVien("Tran VAN A", 69135, 2004, "Ha Nam");
const sv2 = new SinhVien1("Tran VAN B", 69135, 2000, "Ha Tinh");

console.log(sv1.showInfo());
