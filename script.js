// Toggle extra info
const toggleBtn = document.getElementById("toggleBtn");
const extraInfo = document.getElementById("extraInfo");
toggleBtn.addEventListener("click", () => {
    extraInfo.classList.toggle("hidden");
    toggleBtn.textContent = extraInfo.classList.contains("hidden") 
        ? "Show More Info" : "Hide Info";
});

// Contact form simulation
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    formMsg.textContent = "Thank you for contacting us, " + document.getElementById("name").value + "!";
    contactForm.reset();
});
