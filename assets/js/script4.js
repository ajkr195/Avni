window.addEventListener('DOMContentLoaded', (event) => {
	//alert('DOM fully loaded and parsed');
	var el = document.querySelectorAll('.ddmenu');
	for (let i = 0; i < el.length; i++) {
		
				el[i].classList.remove("selected");
			
		
	}
});


var el = document.querySelectorAll('.ddmenu');
for (let i = 0; i < el.length; i++) {
	el[i].onclick = function() {
		var c = 0;
		while (c < el.length) {
			el[c++].classList.remove("selected");
		}
		el[i].className = 'selected';
	};
}


var dropdown = document.getElementsByClassName("toggledropdownbtn");
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function() {


		//this.classList.toggle("active");
		const parent = this.parentNode;
		parent.classList.toggle("active");


		var dropdownContent = this.nextElementSibling;

		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
			this.classList.toggle("active");
		} else {
			dropdownContent.style.display = "block";
			this.classList.toggle("active");
		}



	});
}

var closeSBarbtn = document.getElementById("close-sidebar");
closeSBarbtn.addEventListener("click", closeSideBar);

function closeSideBar() {
	document.querySelector(".page-wrapper").classList
		.toggle("sidebartoggled");
}

var showSBarbtn = document.getElementById("show-sidebar");
showSBarbtn.addEventListener("click", showSideBar);

function showSideBar() {
	document.querySelector(".page-wrapper").classList
		.toggle("sidebartoggled");
}



const themeCookieName = 'theme';
const themeDark = 'dark';
const themeLight = 'light';
const contentheader = document.querySelector('.contentheader');

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

loadTheme()

function loadTheme() {
	var theme = getCookie(themeCookieName);
	body.classList.add(theme === "" ? themeLight : theme);

	if (body.classList.contains('dark')) {
		contentheader.style.background = "#33ffad";
	} else {
		contentheader.style.background = "#ffff";
	}
}

function switchTheme() {

	if (body.classList.contains(themeLight)) {
		body.classList.remove(themeLight);
		body.classList.add(themeDark);
		setCookie(themeCookieName, themeDark);
		contentheader.style.background = "#33ffad";
	} else {
		contentheader.style.background = "#33ffad";
		body.classList.remove(themeDark);
		body.classList.add(themeLight);
		setCookie(themeCookieName, themeLight);
		contentheader.style.background = "#ffff";
	}
}