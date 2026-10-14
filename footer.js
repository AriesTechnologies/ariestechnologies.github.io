document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    })
    .catch(error => console.error('Error loading footer:', error));
});