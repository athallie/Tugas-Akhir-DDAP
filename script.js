var countDownDate = new Date("2024-01-01").getTime();
var interval = setInterval(function() {

    var currentDate = new Date().getTime();
    var remainingTime = countDownDate - currentDate;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

/*     if (remainingTime < 0) {
        clearInterval(x);
    } */

    document.querySelector("#event-countdown").innerHTML = days + "d:" + hours + "h:" + minutes + "m:" + seconds + "s";


}, 1000);