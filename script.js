// Set the countdown date and time (in UTC)
const countdownDate = new Date("2023-12-31T23:59:59").getTime();

// Update the countdown every 1 second
const timer = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("daysValue").innerHTML = "00";
        document.getElementById("hoursValue").innerHTML = "00";
        document.getElementById("minutesValue").innerHTML = "00";
        document.getElementById("secondsValue").innerHTML = "00";
    } else {
        const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');
        
        document.getElementById("daysValue").innerHTML = days;
        document.getElementById("hoursValue").innerHTML = hours;
        document.getElementById("minutesValue").innerHTML = minutes;
        document.getElementById("secondsValue").innerHTML = seconds;
    }
}, 1000);


window.onscroll = function() {
    const topnav = document.getElementById("myTopnav");
    if (window.pageYOffset > 0) {
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
};
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}