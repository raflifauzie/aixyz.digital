// Add page transition on load
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-transition');
});

// Handle internal navigation links
const internalLinks = document.querySelectorAll('a[href^="/"]');
internalLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = link.href;
    }, 500);
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