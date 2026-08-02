(function(){
    var start = new Date("2025-02-27T00:00:00");
    var now = new Date();
    var days = Math.floor((now - start) / (1000*60*60*24));
    document.getElementById('dayCounterRail').textContent = days.toLocaleString();
    document.getElementById('dayCounterBig').textContent = days.toLocaleString();
  })();
  (function(){
    var d = new Date();
    var opts = { year:'numeric', month:'short', day:'numeric' };
    document.getElementById('lastUpdated').textContent = 'Page generated — ' + d.toLocaleDateString('en-US', opts);
  })();
  (function(){
    var els = document.querySelectorAll('.fade-in');
    if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('visible');}); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){ if(entry.isIntersecting){ entry.target.classList.add('visible'); io.unobserve(entry.target); } });
    }, {threshold:0.1});
    els.forEach(function(e){ io.observe(e); });
  })();
