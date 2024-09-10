// sự kiện input and change chỉ sảy ra khi dữ liệu đc thay đổi và khi đc foces
// change: khi ko còn focus mới thực hiện
const loginForm = document.getElementById("name");
loginForm.addEventListener("change", function (event) {
  console.log(event.target.value);

  const h2 = document.getElementById("title");
  h2.innerText = event.target.value;
});

// input sảy ra ngay trực tiếp
loginForm.addEventListener("input", function (event) {
  console.log(event.target.value);

  const h2 = document.getElementById("title");
  h2.innerText = event.target.value;
});
