console.log("Responsive design loaded.");

// Add fade-out effect on navigation
const viewPricingButton = document.querySelector('.order-btn');

if (viewPricingButton) {
  viewPricingButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent immediate navigation
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = viewPricingButton.parentElement.href;
    }, 500); // Match the CSS transition duration
  });
}
