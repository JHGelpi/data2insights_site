document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you shortly.');
});

document.addEventListener('DOMContentLoaded', function() {
    // Example authentication check for the projects section
    const isLoggedIn = false;  // This will later be set dynamically based on user authentication
    const projectsSection = document.querySelector('#projects');

    if (!isLoggedIn) {
        projectsSection.style.display = 'none';
    }
});

// Add form submission feedback
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you shortly.');
});
