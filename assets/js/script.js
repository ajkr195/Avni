var thePageWrapper = document.getElementById("page");
var theSideBar = document.getElementById("sidebar");
var bodywrapper = document.getElementById("bodywrapper");
var thesidebarCollapsebtn = document.getElementById("sidebarCollapse");
var navSearchForm = document.getElementById("navSearchForm");
var navBarElement = document.getElementById("navbar");
var navbarnavlinks = document.getElementsByClassName("theme-item");


document.getElementById("radioCompactView").addEventListener("click", function() {
	//alert('yoyo1');
	theSideBar.style.display = "none";
	thePageWrapper.classList.add("container");
	bodywrapper.classList.remove("container-fluid");
	bodywrapper.classList.add("container");
	navBarElement.classList.add("container");
	thesidebarCollapsebtn.style.display = "none";
	setVisible('.navbrandarea1', true);
	setVisible('.navbrandarea2', true);
	setCookie("compactView", "true", 1);
});

document.getElementById("radioFullView").addEventListener("click", function() {
	//alert('yoyo2');
	thePageWrapper.classList.remove("container");
	bodywrapper.classList.remove("container");
	bodywrapper.classList.add("container-fluid");
	navBarElement.classList.remove("container");
	thesidebarCollapsebtn.style.display = "block";
    theSideBar.style.display = "block";
	removeViewSizeCookie();
});

checkCookie();

thesidebarCollapsebtn.addEventListener("click", pinSideBar);

function pinSideBar() {
	if (theSideBar.classList.contains("active")) {
		theSideBar.classList.toggle('active');
		setVisible('.navbrandarea1', false);
		setVisible('.navbrandarea2', false);
		setCookie("sidebarUnpinned", "true", 1);
	} else {
		theSideBar.classList.toggle('active');
		setVisible('.navbrandarea1', true);
		setVisible('.navbrandarea2', true);
		//theSideBar.classList.remove('active');
		//theSideBar.style.display = "none";
		removeCookieSidebar();
	}
}

function checkCookie() {
	var sidebarUnpinned = getCookie("sidebarUnpinned");
	var colornumber = getCookie("colornumber");
	var theSideBar = document.getElementById("sidebar");
	if (sidebarUnpinned != null) {
		theSideBar.classList.toggle('active');
		setVisible('.navbrandarea1', false);
		setVisible('.navbrandarea2', false);
	}

	if (colornumber === '0') {
		//alert('0');
		theSideBar.style.background = getSpecificColor('0');
		navBarElement.style.background = getSpecificColor('0');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
	}
	if (colornumber === '1') {
		//alert('1');
		theSideBar.style.background = getSpecificColor('1');
		navBarElement.style.background = getSpecificColor('1');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
	}
	if (colornumber === '2') {
		//alert('2');
		theSideBar.style.background = getSpecificColor('2');
		navBarElement.style.background = getSpecificColor('2');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
	}
	if (colornumber === '3') {
		//alert('3');
		theSideBar.style.background = getSpecificColor('3');
		navBarElement.style.background = getSpecificColor('3');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
	}
	if (colornumber === '4') {
		//alert('4');
		theSideBar.style.background = getSpecificColor('4');
		navBarElement.style.background = getSpecificColor('4');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#767676';
		}
	}



	var compactView = getCookie("compactView");

	if (compactView != null) {
		bodywrapper.classList.remove("container-fluid");
		bodywrapper.classList.add("container");
		navBarElement.classList.remove("container-fluid");
		navBarElement.classList.add("container");
		thesidebarCollapsebtn.style.display = "none";
		theSideBar.style.display = "none";
		setVisible('.navbrandarea1', true);
		setVisible('.navbrandarea2', true);
	} else {
		bodywrapper.classList.remove("container");
		bodywrapper.classList.add("container-fluid");
		navBarElement.classList.remove("container");
		navBarElement.classList.add("container-fluid");
		thesidebarCollapsebtn.style.display = "block";
		theSideBar.style.display = "block";
	}



}

function setCookie(name, value, daysToLive) {
	var cookie = name + "=" + encodeURIComponent(value);
	cookie += "; max-age=" + (1 * 24 * 60 * 60);
	document.cookie = cookie;
}

function removeCookieSidebar() {
	document.cookie = "sidebarUnpinned=; expires=Thu, 01 Jan 1900 00:00:00 UTC;";
	//location.reload();
}

function removeColorCookie() {
	document.cookie = "colornumber=; expires=Thu, 01 Jan 1900 00:00:00 UTC;";
	//location.reload();
}
function removeViewSizeCookie() {
	document.cookie = "compactView=; expires=Thu, 01 Jan 1900 00:00:00 UTC;";
	//location.reload();
}


function getCookie(cookieName) {
	var cookieArr = document.cookie.split(";");
	for (var i = 0; i < cookieArr.length; i++) {
		var cookiePair = cookieArr[i].split("=");
		if (cookieName == cookiePair[0].trim()) {
			return decodeURIComponent(cookiePair[1]);
		}
	}
	return null;
}


scrollToTop = document.getElementById("scrollToTop");
window.onscroll = function() { scrollFunction() };
function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		scrollToTop.style.display = "block";
	} else {
		scrollToTop.style.display = "none";
	}
}


function scrollToTopFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0;
}

function onReady(callback) {
	var intervalId = window.setInterval(function() {
		if (document.getElementsByTagName('body')[0] !== undefined) {
			window.clearInterval(intervalId);
			callback.call(this);
		}
	}, 500);
}

function setVisible(selector, visible) {
	document.querySelector(selector).style.display = visible ? 'block'
		: 'none';
}

onReady(function() {
	setVisible('#page', true);
	setVisible('#loading', false);
});


function getSpecificColor(colornumber) {
	var linearbackgrounds = [
		'linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%)',

		'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(4, 80, 130, 1) 0%, rgba(6, 26, 005, 1) 0%, rgba(0, 212, 255, 1)100%, rgba(2, 0, 36, 1) 100%, rgba(2, 0, 36, 1) 100%)',

		'linear-gradient(147deg, #f71735 0%, #db3445 74%)',

		'linear-gradient(316deg, #f94327 0%, #ff7d14 74%)',
		'#ffff'];

	if (colornumber === '0') {
		return linearbackgrounds[0];
	}
	if (colornumber === '1') {
		return linearbackgrounds[1];
	}

	if (colornumber === '2') {
		return linearbackgrounds[2];
	}

	if (colornumber === '3') {
		return linearbackgrounds[3];
	}
	if (colornumber === '4') {
		return linearbackgrounds[4];
	}

}

function changeColor(colornumber) {
	if (colornumber === '0') {
		theSideBar.style.background = getSpecificColor('0');
		navBarElement.style.background = getSpecificColor('0');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
		setCookie("colornumber", "0", 1);
	}
	if (colornumber === '1') {
		theSideBar.style.background = getSpecificColor('1');
		navBarElement.style.background = getSpecificColor('1');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
		setCookie("colornumber", "1", 1);
	}
	if (colornumber === '2') {
		theSideBar.style.background = getSpecificColor('2');
		navBarElement.style.background = getSpecificColor('2');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
		setCookie("colornumber", "2", 1);
	}
	if (colornumber === '3') {
		theSideBar.style.background = getSpecificColor('3');
		navBarElement.style.background = getSpecificColor('3');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
		setCookie("colornumber", "3", 1);
	}
	if (colornumber === '4') {
		theSideBar.style.background = getSpecificColor('4');
		navBarElement.style.background = getSpecificColor('4');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#767676';
		}
		document.querySelector(".navbrandarea2").style.color='#008000';
		document.querySelector(".sidebar-title").style.color='#008000';
		setCookie("colornumber", "4", 1);
	}
}

changeColor('colornumber');


var dropdown = document.getElementsByClassName("sidebar-dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}

function myFunction() {
	var element = document.getElementById("sidenavicon");
	element.classList.toggle("sidenaviconopen");
}

function openOverlayNav() {
	document.getElementById("sidebarOverlayNav").style.width = "100%";
}

function closeOverlayNav() {
	document.getElementById("sidebarOverlayNav").style.width = "0%";
}

