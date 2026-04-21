// Countdown Logic (robust, DOM-ready)
document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // 3 days from now
    const targetTime = targetDate.getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('mins');
    const countdownEl = document.getElementById('countdown');

    let intervalId = null;

    function updateCountdown() {
        const now = Date.now();
        const distance = targetTime - now;

        if (distance <= 0) {
            if (daysEl) { daysEl.textContent = '00'; }
            if (hoursEl) { hoursEl.textContent = '00'; }
            if (minsEl) { minsEl.textContent = '00'; }
            if (countdownEl) { countdownEl.innerHTML = 'GIVEAWAY EXPIRED'; }
            if (intervalId) { clearInterval(intervalId); }
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        if (daysEl) { daysEl.textContent = String(days).padStart(2, '0'); }
        if (hoursEl) { hoursEl.textContent = String(hours).padStart(2, '0'); }
        if (minsEl) { minsEl.textContent = String(minutes).padStart(2, '0'); }
    }

    // initialize and start interval
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
});