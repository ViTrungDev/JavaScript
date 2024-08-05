// constructor: hàm tạo
// cách 1: Function Expression (ít dùng)
const SinhVien = function (fullName, ID, birthDay, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthDay = birthDay;
  this.homeTown = homeTown;
  // phương thức
  this.ShowInfo = ()=>  {
    return `${fullName} ${ID} ${birthDay} ${homeTown}`;
  };
};
// cách 2:Function Declaration
function SinhVien2(fullName, ID, birthDay, homeTown) {
  // thuộc tính
  this.fullName = fullName;
  this.ID = ID;
  this.birthDay = birthDay;
  this.homeTown = homeTown;
  // phương thức
  this.ShowInfo = function() {
    return `${fullName} ${ID} ${birthDay} ${homeTown}`;
  };
}

// Tạo đối tượng

const sv1 = new SinhVien("Nguyen van a",62046,2003,"Ha noi");
const sv2 = new SinhVien2("Nguyen van b",39648,2001,"Tuyen quang")

console.log(sv1.ShowInfo());
console.log(sv2.ShowInfo());

