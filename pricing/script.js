// Add page transition on load
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-transition');
  });
  
  // Handle fade-out on any clickable plan cards
  const planCards = document.querySelectorAll('.plan');
  planCards.forEach((card) => {
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-link');
      if (url) {
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = url;
        }, 500);
      }
    });
  });
  
  // Handle back/forward cache
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      document.body.classList.remove('fade-out');
      document.body.classList.add('page-transition');
    }
  });
  
  // Handle page unload
  window.addEventListener('beforeunload', () => {
    document.body.classList.add('fade-out');
  });
  