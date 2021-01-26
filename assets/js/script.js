
// PRE-LOADER - SPINNER

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

// TOGGLE SIDEBAR

function topFunction() {
	var item1 = document.querySelector('#sidebar');
	item1.classList.toggle('active');
	setCookie("showHideSideBar", "active", 1);
}

checkCookie();

function setCookie(name, value, daysToLive) {
	//alert('Sidebar will stay for 1 day. !');
	var cookie = name + "=" + encodeURIComponent(value);
	cookie += "; max-age=" + (1 * 24 * 60 * 60);
	document.cookie = cookie;
}

function removeCookie() {
	//alert('Sidebar wont appear again till you reveal it again. !');
	document.cookie = "showHideSideBar=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
	location.reload();
}

function getCookie(name) {
	var cookieArr = document.cookie.split(";");
	for (var i = 0; i < cookieArr.length; i++) {
		var cookiePair = cookieArr[i].split("=");
		if (name == cookiePair[0].trim()) {
			return decodeURIComponent(cookiePair[1]);
		}
	}
	return null;
}

function checkCookie() {
	// Get cookie using our custom function
	var showHideSideBar = getCookie("showHideSideBar");

	var item1 = document.querySelector('#sidebar');

	if (showHideSideBar != null) {
		//alert(' ! Sidebar activated  !');
		item1.classList.remove("active");
	} else {
		//alert(' !! Sidebar DEACTIVED !!');
		item1.classList.add("active");
	}
}



// Scroll to top function

scrollToTop = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		scrollToTop.style.display = "block";
	} else {
		scrollToTop.style.display = "none";
	}
}

// On Click Scroll to the top of the document
function scrollToTopFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// CHANGE THEME COLOR

var sidebarelement = document.getElementById("sidebar");
var navbarelement = document.getElementById("navbar");

var navbarnavlinks = document.getElementsByClassName("theme-item");

function getRandomColor(colornumber) {
	var linearbackgrounds = [
		'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(4, 80, 130, 1) 0%, rgba(6, 26, 245, 1) 0%, rgba(0, 212, 255, 1)100%, rgba(2, 0, 36, 1) 100%, rgba(2, 0, 36, 1) 100%)',

		'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(4, 80, 130, 1) 0%, rgba(6, 26, 005, 1) 0%, rgba(0, 212, 255, 1)100%, rgba(2, 0, 36, 1) 100%, rgba(2, 0, 36, 1) 100%)',

		'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%,rgba(4, 80, 130, 1) 0%, rgba(50, 0, 0, 1) 0%, rgba(246, 26, 005, 1)100%, rgba(2, 0, 36, 1) 100%, rgba(2, 0, 36, 1) 100%)',

		'linear-gradient(315deg, #f5d020 0%, #f53803 74%)',
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
		sidebarelement.style.background = getRandomColor('0');
		navbarelement.style.background = getRandomColor('0');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
	}
	if (colornumber === '1') {
		sidebarelement.style.background = getRandomColor('1');
		navbarelement.style.background = getRandomColor('1');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
	}
	if (colornumber === '2') {
		sidebarelement.style.background = getRandomColor('2');
		navbarelement.style.background = getRandomColor('2');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
	}
	if (colornumber === '3') {
		sidebarelement.style.background = getRandomColor('3');
		navbarelement.style.background = getRandomColor('3');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#ffff';
		}
	}
	if (colornumber === '4') {
		sidebarelement.style.background = getRandomColor('4');
		navbarelement.style.background = getRandomColor('4');
		for (var i = 0, length = navbarnavlinks.length; i < length; i++) {
			navbarnavlinks[i].style.color = '#767676';
		}
	}
}

changeColor('colornumber');
