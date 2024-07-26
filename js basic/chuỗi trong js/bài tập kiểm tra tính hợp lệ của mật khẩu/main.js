/* đề bài:viết chương trình kiểm tra tính hợp lệ của mật khẩu
1. mật khẩu hợp lệ khi có ít nhất là 6 ký tự
2. có ít nhất 1 kí tự viết hoa
3. có ít nhất 1 kí tự viết thường
4. có ít nhất 1 kí tự số

cho người dùng nhập mật khẩu login để so sánh
nếu đúng mở cửa, sai quá 5 lần khóa đăng nhập , thoát khỏi chương trình
Vd:Abc123 là mật khẩu hợp lệ
*/
function KtMatKhau(input) {
  if (input.length < 6) {
    return false;
  }
  var HasUpperCase = false;
  var HasLowerCase = false;
  var HasDigit = false;
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char >= "a" && char <= "z") {
      HasLowerCase = true;
    } else if (char >= "A" && char <= "Z") {
      HasUpperCase = true;
    } else if (char >= "0" && char <= "9") {
      HasDigit = true;
    }
  }
  return HasUpperCase && HasLowerCase && HasDigit;
}
// sét mật khẩu
function SetPassWord() {
  let input = prompt("Mời bạn nhập mật khẩu:");
  if (KtMatKhau(input)) {
    alert("Đăng nhập thành công!");
    return input;
  } else {
    alert(
      "Mật khẩu không hợp lệ! \n 1. có ít nhất 1 kí tự hoa \n 2.có ít nhất 1 ký tự thường \n 3. có ít nhất 1 giá trị số"
    );
    return SetPassWord();
  }
}
SetPassWord();

let passWordOk = SetPassWord();
let countLogin = 0;
while (true) {
  let passWordLogin = prompt("Mời bạn nhập mật khẩu");
  if (passWordOk === passWordLogin) {
    alert("Đăng nhập thành công!");
  } else if (passWordOk !== passWordLogin) {
    countLogin++;
    if (countLogin < 5) {
      alert("Đăng nhập không thành công!");
    } else {
      alert("Bạn đã đăng nhập quá 5 lần vui lòng liên hệ admin ");
      break;
    }
  }
}
