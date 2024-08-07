function upDateClock(){
    const now = new Date();
// nếu giá trị ko có đủ 2 số thì thêm 1 số 0 vào trước số đó
const Hours = String(now.getHours()).padStart(2,"0");
const Minutes = String(now.getMinutes()).padStart(2,"0");
const Seconds = String(now.getSeconds()).padStart(2,"0");

const StringNow = `${Hours}:${Minutes}:${Seconds}`;
document.getElementById("clock").innerHTML = StringNow;
}
setInterval(upDateClock, 1000);