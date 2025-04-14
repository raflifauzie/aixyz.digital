console.log("Responsive design loaded.");

// Add page transition on load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-transition");
});

// Handle navigation transitions
const viewPricingButton = document.querySelector(".order-btn");

if (viewPricingButton) {
  viewPricingButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = viewPricingButton.parentElement.href;
    }, 500);
  });
}

// Handle back/forward cache
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    document.body.classList.remove("fade-out");
    document.body.classList.add("page-transition");
  }
});

// Handle page unload
window.addEventListener("beforeunload", () => {
  document.body.classList.add("fade-out");
});
