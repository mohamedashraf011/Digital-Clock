const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function updateClock() {
    const currentTime = new Date();

    hrs.textContent = String(currentTime.getHours()).padStart(2, "0");
    min.textContent = String(currentTime.getMinutes()).padStart(2, "0");
    sec.textContent = String(currentTime.getSeconds()).padStart(2, "0");
}

updateClock();
setInterval(updateClock, 1000);
