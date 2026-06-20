$(document).ready(function () {
    // Guards
    if (typeof moment === "undefined" || typeof moment.tz === "undefined") {
        console.warn("moment-timezone is not loaded; countdown may be wrong.");
    }
    if (typeof $.fn.FlipClock === "undefined") {
        console.warn("FlipClock is not loaded; countdown will not display.");
    }

    // Target future date/time (noon Central Time)
    const targetDate = moment.tz("2026-09-12 12:00", "America/Chicago");

    // Days-only display branch
    if ($(".flipTimebox").hasClass("days-only")) {
        function updateDaysDisplay() {
            const remainingMs = targetDate.valueOf() - Date.now();
            const days = remainingMs > 0 ? Math.floor(remainingMs / (1000 * 60 * 60 * 24)) : 0;
            $(".days-only-display .days-value").text(days);
        }
        updateDaysDisplay();
        setInterval(updateDaysDisplay, 1000 * 60 * 60); // hourly
        return;
    }

    // Seconds remaining (integer, non-negative)
    const diffSeconds = Math.max(0, Math.floor((targetDate.valueOf() - Date.now()) / 1000));

    let clock;
    if (diffSeconds <= 0) {
        clock = $(".clock").FlipClock(0, {
            clockFace: "DailyCounter",
            countdown: true,
            autostart: false,
        });
        console.log("Date has already passed!");
    } else {
        clock = $(".clock").FlipClock(diffSeconds, {
            clockFace: "DailyCounter",
            countdown: true,
            callbacks: {
                stop: function () {
                    console.log("Timer has ended!");
                },
            },
        });

        // ensure it never goes negative
        (function checktime() {
            const t = clock.getTime();
            if (t <= 0) clock.setTime(0);
            setTimeout(checktime, 1000);
        })();
    }
});