let student = {
  name: "Nguyen Van A",
  age: 20,
};

/* Object.keys : trả về các thuộc tính của đối tượng */
let Keys = Object.keys(student);
console.log(Keys); //[ Name,age ]

// Object.values : trả về các giá trị của thuộc tính của đối tượng

let values = Object.values(student);
console.log(values); // [Nguyen van a , 20]

// Object.entries : trả về giá trị và thuộc tính của đối tượng
let entries = Object.entries(student);
console.log(entries); //[ nam, Nguyen van A],[age,20]

// Object.assign : sao chép đối tượng từ nhiều đối tượng khác
let target = {};
let source1 = { a: 3, b: 8 };
let source2 = { c: 3, d: 8 };

/* assign: đối tượng lưu chữ : đối tượng bị copy : ... */
let assign = Object.assign(target, source1, source2);
console.log(assign);

// dùng spread: để copy đối tượng
// let result = [...source2, ...source1];
// console.log(result);

// object.hasOwnProperty : để kiểm tra xem thuộc tính có tồn tại trong đối tượng ko

let object = {
  name: "Nguyen Van B",
  age: 30,
  address: "Ha Nam",
};
let hasOwnProperty = Object.hasOwnProperty("name");
let hasOwnProperty2 = Object.hasOwnProperty("job");
console.log(hasOwnProperty);
console.log(hasOwnProperty2);

//  Object.freeze(obj)  : Đóng băng đối tượng ko thể thêm sửa xóa
let object2 = {
  name: "Nguyen Van B",
  age: 30,
  address: "Ha Nam",
};

Object.freeze(object2);
object2.mail = "abc.com";
delete object2.name;
object2.age = 100;
console.log(object2);

// object.seal: không cho phép thêm và xóa chỉ cho phép sửa
let object3 = {
    name: "Nguyen Van B",
    age: 30,
    address: "Ha Nam",
  };
  Object.seal(object3)
  object3.phone="0948264834"
  delete object3.address
  object3.age=20;
  console.log(object3);
  