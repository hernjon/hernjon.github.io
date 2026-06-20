(function () {
    /** Button selections*/
    var links = document.querySelectorAll('a[href="#fh5co-schedule"]');
    var target = document.getElementById('fh5co-schedule');
    if (!links.length || !target) return;
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            try { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
            catch (err) { target.scrollIntoView(); }
            target.setAttribute('tabindex', '-1');
            try { target.focus({ preventScroll: true }); } catch (_) { target.focus(); }
        });
    });
})();
/** Button selections*/
(function () {
    var links = document.querySelectorAll('a[href="#fh5co-maps"]');
    var target = document.getElementById('fh5co-maps');
    if (!links.length || !target) return;
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            try {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
            }
            catch (err) { target.scrollIntoView(); }
            target.setAttribute('tabindex', '-1');
            

            try { target.focus({ preventScroll: true }); } catch (_) {
                target.focus();
            }
        });
    });


  
})();
/** Days shown*/
(function () { 
    const weddingDate = new Date("2026-09-12T00:00:00");
    //weddingDate = new Date(Date.now()); Test code for TODAY.
    function updateDaysLeft() {
        const now = new Date();
        const diffTime = weddingDate - now;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const findTextCSS = document.querySelector(".days-value");
        if (findTextCSS) {
            if (diffDays === 0) {
                findTextCSS.textContent = "TODAY";
            } else if (diffDays < 0) {
                findTextCSS.textContent = "0";
            } else {
                findTextCSS.textContent = diffDays;
            }
        } 
    }
    updateDaysLeft();
    setInterval(updateDaysLeft, 1000 * 60 * 60);
})();