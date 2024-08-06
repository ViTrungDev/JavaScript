// Kế thừa trong js
class School {
  constructor(ID, fullName, birthYear) {
    this.ID = ID;
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  display() {
    return `${this.ID} ${this.fullName} ${this.birthYear}`;
  }
}
// Dùng key extends để kế thừa từ một class khác
class student extends School {
  constructor(ID, fullName, birthYear, major) {
    super(ID, fullName, birthYear);
    this.major = major;
  }
  calcYear(currentYear) {
    return currentYear - this.birthYear;
  }
  display() {
    return `${this.ID} ${this.fullName} ${this.birthYear} ${this.major}` ;
  }
}
// Khởi tạo đối tượng
const sv1 = new student("202401", "Nguyen Van A", 2004, "Computer Science");
console.log(sv1.display());

var yearOld = sv1.calcYear(2024);
console.log(yearOld);
