function updateClock() {
    const now = moment();
    const timeString = now.format('HH:mm:ss');

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();