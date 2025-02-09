// Get all buttons with class "scroll-btn"
const buttons = document.querySelectorAll('.scroll-btn');

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', function () {
    const targetSection = document.getElementById(button.getAttribute('data-target'));
    
    // Smooth scroll to the corresponding section
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});