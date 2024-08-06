class School {
  constructor(ID, fullName, birthYear, address, score) {
    this.ID = ID;
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.address = address;
    this._score = score;
  }
  calcAge(currentYear) {
    return currentYear - this.birthYear;
  }
  get score() {
    return this._score;
  }
  set score(value) {
    if (value >= 0 && value <= 100) {
      this._score = value;
    } else {
      console.log("Diem dua vao ko hop le!");
    }
  }
  display() {
    return `${this.ID} ${this.fullName} ${this.birthYear} ${this.address} ${this._score}`;
  }
}

// khởi tạo đối tượng
const student = new School("3612", "Nguyen Van A", 2000, "Ha Noi", 10);
console.log(student.score);
student.score = 120;
console.log(student.display());

