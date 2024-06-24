// Get the theme switch element
const themeSwitch = document.querySelector('.theme-switch');

// Get the checkbox input element
const checkbox = themeSwitch.querySelector('input[type="checkbox"]');

// Add event listener to the checkbox
checkbox.addEventListener('change', function() {
  // Toggle the dark-mode class on the body element
  document.body.classList.toggle('dark-mode');
});