// Phương thức removeChild
// Chọn phần tử cần xóa
const childElemt = document.getElementById("Item1");
// Chọn phần tử cha của phần tử cần xóa
const ul = document.getElementById("list");

// xóa phần tử
ul.removeChild(childElemt);

// Cách 2
const childElemt2 = document.getElementById("Item2");
childElemt2.parentElement.removeChild(childElemt2);

// phương thức remove
// chọn phần tử cần xóa
const childElemt3 = document.getElementById("Item5");
childElemt3.remove();
