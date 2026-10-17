document.addEventListener('DOMContentLoaded', () => {
	'use strict';

    const params = new URLSearchParams(window.location.search);
    const value = params.get('page');
    console.log(value);
    console.log(`/${value}.html`);

	fetch(`/${value}.html`)
 	.then(response => response.text())
 	.then(html => {
		document.getElementById('body-placeholder').innerHTML = html;
		})
	.catch(error => console.error('Error loading body:', error));
});