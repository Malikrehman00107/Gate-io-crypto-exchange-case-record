/**
 * ============================================================
 * DAY COUNTER (rail)
 * Computes total days since 27 Feb 2025
 * ============================================================
 */
(function() {
    var start = new Date("2025-02-27T00:00:00");
    var now = new Date();
    var days = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    document.getElementById('dayCounterRail').textContent = days.toLocaleString();
})();

/**
 * ============================================================
 * LAST UPDATED
 * Shows current date in the top bar
 * ============================================================
 */
(function() {
    var d = new Date();
    var opts = { year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('lastUpdated').textContent = 'Page generated — ' + d.toLocaleDateString('en-US', opts);
})();

/**
 * ============================================================
 * LIVE TIME COUNTER (hero banner)
 * Updates every second with years, months, days, hours, minutes, seconds
 * ============================================================
 */
(function() {
    var start = new Date("2025-02-27T00:00:00");
    var el = document.getElementById('timeCounter');

    function formatDuration(ms) {
        var totalSec = Math.floor(ms / 1000);
        if (totalSec < 0) return '—';

        var years = Math.floor(totalSec / (365.25 * 86400));
        var remainder = totalSec % (365.25 * 86400);
        var months = Math.floor(remainder / (30.44 * 86400));
        remainder = remainder % (30.44 * 86400);
        var days = Math.floor(remainder / 86400);
        remainder = remainder % 86400;
        var hours = Math.floor(remainder / 3600);
        remainder = remainder % 3600;
        var minutes = Math.floor(remainder / 60);
        var seconds = remainder % 60;

        var parts = [];
        if (years > 0) parts.push(years + ' year' + (years > 1 ? 's' : ''));
        if (months > 0) parts.push(months + ' month' + (months > 1 ? 's' : ''));
        if (days > 0) parts.push(days + ' day' + (days > 1 ? 's' : ''));
        if (hours > 0) parts.push(hours + ' hour' + (hours > 1 ? 's' : ''));
        if (minutes > 0) parts.push(minutes + ' minute' + (minutes > 1 ? 's' : ''));
        if (seconds > 0) parts.push(seconds + ' second' + (seconds > 1 ? 's' : ''));

        // If less than a second has passed (shouldn't happen), show "0 seconds"
        if (parts.length === 0) return '0 seconds';

        // Join with commas and "and" for the last element
        if (parts.length === 1) return parts[0];
        var last = parts.pop();
        return parts.join(', ') + ' and ' + last;
    }

    function updateCounter() {
        var now = new Date();
        var diff = now - start;
        el.textContent = formatDuration(diff);
    }

    updateCounter();
    setInterval(updateCounter, 1000);
})();

/**
 * ============================================================
 * FADE-IN OBSERVER
 * Uses IntersectionObserver to reveal .fade-in elements
 * ============================================================
 */
(function() {
    var els = document.querySelectorAll('.fade-in');
    if (!('IntersectionObserver' in window)) {
        els.forEach(function(e) { e.classList.add('visible'); });
        return;
    }
    var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(function(e) { io.observe(e); });
})();
