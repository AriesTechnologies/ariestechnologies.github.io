function openMobileNavbar() {
	if (window.innerWidth >= 800)
		return;
	
	const x = document.getElementById("links");
	if (x.style.display != "none" && x.style.display != "") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	fetch('nav.html')
 	.then(response => response.text())
 	.then(html => {
		document.getElementById('nav-placeholder').innerHTML = html;
		})
	.catch(error => console.error('Error loading navbar:', error));
});

document.getElementById('nav-placeholder').addEventListener('click', (e) => {
	openMobileNavbar();
});

document.getElementById('nav-placeholder').addEventListener('resize', (e) => {
	document.getElementById("links").style.removeProperty("display");
});