// typing effect for hero (optional enhancement)
const typingText = "Hi, I'm Ziad Masoud Khalaf";
let typeIndex = 0;
const heroTitle = document.querySelector(".hero-text h1");
if (heroTitle && !heroTitle.innerText.includes("Ziad Masoud Khalaf")) {
    // Only run if we want separate typing, but original text is already there.
    // Instead add a subtle dynamic subtitle
}

// Progress Bar Scroll
window.onscroll = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    const progressBar = document.querySelector(".progress-bar");
    if (progressBar) progressBar.style.width = scrolled + "%";
};

// Button Scroll to About
function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
const aboutBtn = document.getElementById("aboutBtn");
if (aboutBtn) aboutBtn.addEventListener("click", scrollToAbout);

// Intersection Observer for scroll animations
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

hiddenElements.forEach(el => observer.observe(el));

// ---------- POSTER MODAL SYSTEM ----------
// Create modal overlay dynamically
const modal = document.createElement("div");
modal.className = "poster-modal";
modal.id = "posterModal";

const modalImg = document.createElement("img");
modalImg.alt = "Project Poster";

const modalCaption = document.createElement("p");
modalCaption.innerText = "Click anywhere to close";

const closeIcon = document.createElement("i");
closeIcon.className = "fas fa-times-circle close-modal-btn";

modal.appendChild(closeIcon);
modal.appendChild(modalImg);
modal.appendChild(modalCaption);
document.body.appendChild(modal);

// Function to show poster
function showPoster(imageSrc, titleText = "Project Poster") {
    modalImg.src = imageSrc;
    modalCaption.innerHTML = `${titleText} <span style="font-size:0.85rem;">✨ Click to close</span>`;
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    
    // Fallback for missing image
    modalImg.onerror = () => {
        modalImg.src = "https://placehold.co/800x1000/0f172a/ef4444?text=Poster+Preview+Unavailable";
        modalCaption.innerHTML = "⚠️ Poster image not found, but project exists! Click to close.";
    };
}

// Function to close modal
function closeModal() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    setTimeout(() => {
        modalImg.src = "";
    }, 300);
}

// Event listeners for closing modal
modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === closeIcon || e.target === modalCaption) {
        closeModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.visibility === "visible") {
        closeModal();
    }
});

// Attach click handlers to all "View Details" buttons
const detailButtons = document.querySelectorAll(".details-btn");
detailButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const posterSrc = btn.getAttribute("data-poster");
        const posterTitle = btn.getAttribute("data-title") || "Project Details";
        if (posterSrc) {
            showPoster(posterSrc, posterTitle);
        } else {
            console.warn("No poster image specified for this button");
            showPoster("https://placehold.co/800x1000/1e293b/3b82f6?text=Poster+Image+Coming+Soon", posterTitle);
        }
    });
});

// Active navigation highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        const secTop = sec.offsetTop - 120;
        const secBottom = secTop + sec.offsetHeight;
        if (window.scrollY >= secTop && window.scrollY < secBottom) {
            current = sec.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.style.color = "white";
        if (link.getAttribute("href") === `#${current}` && current) {
            link.style.color = "#3b82f6";
        }
    });
});

// Optional: Smooth reveal for elements on load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio ready — Add your images: profile-photo.jpg, project1-4 images, poster1-4.jpg");
    
    // add typing effect for dynamic hello (optional but keeps spirit)
    const heroHeading = document.querySelector(".hero-text h1");
    if (heroHeading && !heroHeading.hasAttribute("data-typed")) {
        heroHeading.setAttribute("data-typed", "true");
        // minor additional greeting
        const originalHTML = heroHeading.innerHTML;
        // Keep existing content, just a nice touch
    }
});