document.getElementById("sidebarCollapse").addEventListener('click',
	function() {
		document.getElementById("sidebar").classList.toggle("active");
		this.classList.toggle("active");
	});



const container = document.querySelector('.mainsidebar');
let lastSelectedIcon;
container.addEventListener('click', (event) => {
	if (lastSelectedIcon) {
		lastSelectedIcon.classList.remove("down");
	}
	const icon = event.target.closest('.ddmenu')
		.querySelector('.fa-chevron-right');
	icon.classList.add('down');
	lastSelectedIcon = icon;
});




var mainparentelements = document.querySelectorAll('.ddmenu');
for (let i = 0; i < mainparentelements.length; i++) {
	mainparentelements[i].onclick = function() {
		var c = 0;
		while (c < mainparentelements.length) {
			mainparentelements[c++].classList.remove("selected");
		}
		mainparentelements[i].classList.add("selected");
	};
}



const alllistitems = document.querySelectorAll(".buttons-container li");
const alllistlinks = document.querySelectorAll(".buttons-container li a");
for (let i = 0; i < alllistitems.length; i++) {
	alllistitems[i].addEventListener("click", function() {
		for (let i = 0; i < alllistitems.length; i++) {
			alllistitems[i].classList.remove("active");
			alllistlinks[i].classList.remove("active-text");
		}
		this.classList.add("active");
		alllistlinks[i].classList.add("active-text");
	});
}


function toggleBtnCntnr() {
	var toggleBtnCntnr = document.getElementById("buttons-container");
	if (toggleBtnCntnr.style.display === "block") {
		toggleBtnCntnr.style.display = "none";
	} else {
		toggleBtnCntnr.style.display = "block";
	}
}



const themeCookieName = 'theme';
const themeDark = 'dark';
const themeLight = 'light';
const body = document.getElementsByTagName('body')[0];
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}
function getCookie(cname) {
	var name = cname + "="
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return ""
}
loadTheme();
function loadTheme() {
	var theme = getCookie(themeCookieName);
	body.classList.add(theme === "" ? themeLight : theme);
}
function switchTheme() {

	if (body.classList.contains(themeLight)) {
		body.classList.remove(themeLight);
		body.classList.add(themeDark);
		setCookie(themeCookieName, themeDark);
	} else {
		body.classList.remove(themeDark);
		body.classList.add(themeLight);
		setCookie(themeCookieName, themeLight);
	}
}

function openOverlayNav() {
	document.getElementById("sidebarOverlayNav").style.width = "100%";
}

function closeOverlayNav() {
	document.getElementById("sidebarOverlayNav").style.width = "0%";
}