function showTime() {
    let date = new Date();
    let hour = date.getHours();
    hour = (hour < 10) ? "0" + hour : hour;
    let minute = date.getMinutes();
    minute = (minute < 10) ? "0" + minute : minute;
    let second = date.getSeconds();
    second = (second < 10) ? "0" + second : second;
    let message = "Точное время: ";
    let time = message + " " + hour + ":" + minute + ":" + second;
    document.getElementById("digital").innerText = time;
    document.getElementById("digital").textContent = time;
    setTimeout(showTime, 1000);
}

showTime();