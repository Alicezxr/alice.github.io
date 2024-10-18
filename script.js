document.getElementById('hamburger').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    alert('Thank you for your message!');
    // Here you can add code to handle form submission, e.g., send it to a server
});
