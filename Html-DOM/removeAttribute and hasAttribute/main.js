// Lấy ra class đầu tiên có class là list
const item1 = document.querySelector(".list");
// kiểm tra xem có tồn tại class nào có phần tử là list ko
const HasAttribute = item1.hasAttribute("class");
console.log(HasAttribute);

// loại bỏ 1 phần tử ra khỏi attribute

const removeAttribute = item1.removeAttribute("style");
console.log(item1);
const removeAttribute2 = item1.removeAttribute("class");
console.log(item1);
// xóa tất cả thuộc tính href trong thẻ a
const removeAll = document.querySelectorAll("a");
console.log(removeAll);

let removeA;
for (let i = 0; i < removeAll.length; i++) {
   removeA[i] = removeAll.removeAttribute("href");
}
console.log(removeAll);
