// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector('header .navbar a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        };
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when scrolling
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img, .skills-column', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content, .title', { origin: 'right'});

// typed js
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Web Designer', 'UI/UX Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

(function () {
    emailjs.init("qhRdSopQ7zBAf6afCys08"); // Replace with your EmailJS user ID
})();

// Function to handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const fullName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Validate form inputs
    if (!fullName || !email || !mobileNumber || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Log form data for debugging
    console.log("Form Data:", {
        fullName,
        email,
        mobileNumber,
        subject,
        message
    });

    // Send email with EmailJS
    email.send("service_qeeevo8", "template_hucqgee", {
        name: fullName,
        email: email,
        mobileNumber: mobileNumber,
        subject: subject,
        message: message,
    })
    .then(function (response) {
        // Success
        console.log("Email sent successfully:", response);
        alert("Your message has been sent successfully!");
    }, function (error) {
        // Error
        console.error("Error sending email:", error);
        alert("Oops, something went wrong. Please try again later.");
    });
});
