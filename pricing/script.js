// Simplified logic to ensure both gradient animation and pricing cards work seamlessly

document.addEventListener('DOMContentLoaded', () => {
  // Ensure pricing cards are visible and clickable
  const planCards = document.querySelectorAll('.plan');
  planCards.forEach((card) => {
    card.style.display = 'block'; // Ensure cards are visible
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-link');
      if (url) {
        setTimeout(() => {
          window.location.href = url;
        }, 500);
      }
    });
  });

  // Ensure gradient animation is applied
  document.body.style.animation = 'gradientMove 30s ease infinite';
});

window.addEventListener('pageshow', () => {
  // Reapply gradient animation and ensure pricing cards are visible
  document.body.style.animation = 'gradientMove 30s ease infinite';
  const planCards = document.querySelectorAll('.plan');
  planCards.forEach((card) => {
    card.style.display = 'block';
  });
});
