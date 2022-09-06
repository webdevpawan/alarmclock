const selectMenu = document.querySelectorAll("select");
const currentTime = document.querySelector("h1");
const alarmBtn = document.getElementById("btn");
let alarmTime;
ringtone = new Audio("./assets/ringtone.mp3")

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", `<option value="${i}">${i}</option>`);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", `<option value="${i}">${i}</option>`);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", `<option value="${ampm}">${ampm}</option>`);
}

setInterval(function () {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";

    if (h >= 12) {
        h = h - 12
        ampm = "PM"
    }

    h = h == 0 ? h = 12 : h;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s}  ${ampm}`;

    if (alarmTime == `${h}:${m} ${ampm}`) {
        console.log("alarm ringing....")
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);

alarmBtn.addEventListener("click", function () {
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    alarmTime = time;
    alarmBtn.innerText = "Clear alarm";
})