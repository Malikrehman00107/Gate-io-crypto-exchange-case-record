/**
 * ============================================================
 * DAY COUNTER
 * Computes days since 27 Feb 2025 and updates both rail and hero
 * ============================================================
 */
(function() {
    var start = new Date("2025-02-27T00:00:00");
    var now = new Date();
    var days = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    document.getElementById('dayCounterRail').textContent = days.toLocaleString();
    document.getElementById('dayCounterBig').textContent = days.toLocaleString();
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
