// JavaScript for any additional interactivity or functionality (optional)

// For example, you could add a feature to scroll smoothly between sections.
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
