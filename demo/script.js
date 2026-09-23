// IT Center — Erion Nezha
(function () {
    'use strict';

    // current year in the footer
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
