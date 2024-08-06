// Html DOM

/**
 * 1. Element: ID, Class, tag name, CSS selector, Html collection
 * 2. Attribute:
 * 3. Text:
 */

// Lấy element thông qua ID
let headingNode = document.getElementById("heading");
console.log(headingNode);

// lấy element thông qua class
let titleNode = document.getElementsByClassName("title");
console.log(titleNode);

// Lấy element thông qua tag name
let tagName = document.getElementsByTagName("p");
console.log(tagName);

// Lấy element thông qua CSS selector
let Selector = document.querySelector(".box .box__heading-lv2");
console.log(Selector);

