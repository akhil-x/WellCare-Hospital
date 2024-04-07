document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;
        this.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('open');
    });

    // Close menu when clicking outside on smaller screens
    window.addEventListener('click', function(event) {
        if (window.innerWidth < 768 && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Simulated pulse reading animation
    const pulseElement = document.querySelector('.pulse');
    setInterval(function() {
        const randomPulse = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Random pulse between 60 and 100 bpm
        pulseElement.textContent = randomPulse + " bpm";
    }, 2000); // Update pulse reading every 2 seconds
});
