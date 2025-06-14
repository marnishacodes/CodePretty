// Fade in body content on load
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 1;
});

// Handle form submission
const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m5nzhlj', 'template_aeixs5l', form)
        .then(() => {
            confirmation.style.display = "block";

            // Restart slideFadeIn animation
            confirmation.style.animation = 'none';
            confirmation.offsetHeight; // trigger reflow
            confirmation.style.animation = null;

            form.reset();

            setTimeout(() => {
                confirmation.style.display = "none";
            }, 5000);
        }, (error) => {
            alert('Oops! Something went wrong. Please try again.', error);
        });
});
