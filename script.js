// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Set the initial opacity of the body to 0
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s ease-in-out";

    // Fade in the body once the page is loaded
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});
