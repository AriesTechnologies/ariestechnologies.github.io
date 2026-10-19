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

document.querySelector('#menu').addEventListener('click', (e) => {
	openMobileNavbar();
});

document.getElementById('nav').addEventListener('resize', (e) => {
	document.getElementById("links").style.removeProperty("display");
});