"use strict";

runCount();
setInterval("runCount()", 1000);

function runCount() {
    var current = new Date();
    var currentDay = current.toLocaleDateString();
    var currentTime = current.toLocaleTimeString();

    var update = new Date("January 3, 2021 12:00:00");
    var updateDay = update.toLocaleDateString();
    var updateTime = update.toLocaleTimeString();

    var elapsed = current.getTime() - update.getTime();
    var elapsedDays = Math.floor(elapsed / (1000 * 3600 * 24));

    document.getElementById("dateUpdated").innerHTML = updateDay + "<br />" + updateTime;
    document.getElementById("dateNow").innerHTML = currentDay + "<br />" + currentTime;
    document.getElementById("count").innerHTML = elapsedDays.toString() + "<br /> Days Ago";
}

