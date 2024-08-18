let appearanceIcon = document.querySelector("div.appearance > i.fa-fill-drip");
let appearanceMenu = document.querySelector("div.appearance-menu");

appearanceIcon.addEventListener("click", (e) => {
	console.log("first");
	appearanceIcon.style.color = "var(--primaryColor)";
	appearanceMenu.style.cssText = "visibility: visible; opacity: 100%;";
	appearanceIcon.onclick = () => {
		console.log("second");
		appearanceIcon.style.color = "black";
		appearanceMenu.style.cssText = "visibility: hidden; opacity: 0%;";
	};
});
let color = document.querySelectorAll(".themeColor");
color.forEach((el, i) => {
	el.onclick = () => {
		color.forEach((ele) => {
			ele.classList.remove("active");
		});
		el.classList.add("active");
		switch (i) {
			case 0:
				window.localStorage.setItem("primaryColor", "#d83320");
				window.localStorage.setItem("secondaryColor", "#ad2819");
				window.localStorage.setItem("currentColor", "red");
				break;
			case 1:
				window.localStorage.setItem("primaryColor", "#02846f");
				window.localStorage.setItem("secondaryColor", "#005347");
				window.localStorage.setItem("currentColor", "green");
				break;
			default:
				window.localStorage.setItem("primaryColor", "#2196f3");
				window.localStorage.setItem("secondaryColor", "#0069be");
				window.localStorage.setItem("currentColor", "blue");
				break;
		}
		document.styleSheets[2].cssRules[1].style.setProperty(
			"--primaryColor",
			window.localStorage.primaryColor
		);
		document.styleSheets[2].cssRules[1].style.setProperty(
			"--secondaryColor",
			window.localStorage.secondaryColor
		);
	};
});
window.onload = () => {
	if (
		window.localStorage.primaryColor !== undefined &&
		window.localStorage.secondaryColor !== undefined &&
		window.localStorage.currentColor !== undefined
	) {
		color.forEach((el) => {
			el.classList.remove("active");
			if (el.classList.contains(window.localStorage.currentColor)) {
				el.classList.add("active");
			}
		});
		document.styleSheets[2].cssRules[1].style.setProperty(
			"--primaryColor",
			window.localStorage.primaryColor
		);
		document.styleSheets[2].cssRules[1].style.setProperty(
			"--secondaryColor",
			window.localStorage.secondaryColor
		);
	}
};

/*
let days = document.querySelector(".days > span.count");
let hours = document.querySelector(".hours > span.count");
let minutes = document.querySelector(".minutes > span.count");
let seconds = document.querySelector(".seconds > span.count");

let eventCounter = setInterval(() => {
	seconds.innerHTML -= 1;
	if (seconds.innerHTML == -1) {
		minutes.innerHTML -= 1;
		seconds.innerHTML = 59;
		if (minutes.innerHTML == -1) {
			hours.innerHTML -= 1;
			minutes.innerHTML = 59;
			if (hours.innerHTML == -1) {
				days.innerHTML -= 1;
				hours.innerHTML = 23;
				if (days.innerHTML == -1) {
					seconds.innerHTML = 0;
					minutes.innerHTML = 0;
					hours.innerHTML = 0;
					days.innerHTML = 0;
					clearInterval(eventCounter);
				}
			}
		}
	}
}, 1000);
*/
