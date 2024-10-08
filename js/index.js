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
		document.styleSheets[2].cssRules[2].style.setProperty(
			"--primaryColor",
			window.localStorage.primaryColor
		);
		document.styleSheets[2].cssRules[2].style.setProperty(
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
		document.styleSheets[2].cssRules[2].style.setProperty(
			"--primaryColor",
			window.localStorage.primaryColor
		);
		document.styleSheets[2].cssRules[2].style.setProperty(
			"--secondaryColor",
			window.localStorage.secondaryColor
		);
	}
};

let scrollToTop = document.querySelector(".scroll-to-top");
scrollToTop.style.cssText = "visibility: hidden; opacity: 0%";

window.onscroll = () => {
	if (window.scrollY >= 2000)
		scrollToTop.style.cssText = "visibility: visible; opacity: 100%";
	else scrollToTop.style.cssText = "visibility: hidden; opacity: 0%";
};
scrollToTop.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

let appearanceIcon = document.querySelector("div.appearance > i.fa-fill-drip");
let appearanceMenu = document.querySelector("div.appearance-menu");
appearanceMenu.style.cssText = "visibility: hidden; opacity: 0%";

appearanceIcon.addEventListener("click", () => {
	if (appearanceMenu.style.visibility === "hidden") {
		appearanceIcon.style.color = "var(--primaryColor)";
		appearanceIcon.style.backgroundColor = "#f7f7f7";
		appearanceMenu.style.cssText = "visibility: visible; opacity: 100%;";
	} else {
		appearanceIcon.style.removeProperty("color");
		appearanceIcon.style.removeProperty("background-color");
		appearanceMenu.style.cssText = "visibility: hidden; opacity: 0%;";
	}
});

let themeMode = document.querySelector("button.theme-mode");
let themeButton = document.querySelector("span.theme-button");
let themeButtonIcon = document.querySelector("span.theme-button > i");
let lightIcon = document.querySelector(".theme-mode .bi-sun");
let darkIcon = document.querySelector(".theme-mode .bi-moon-stars");

themeMode.addEventListener("click", () => {
	if (themeMode.classList.contains("light")) {
		themeMode.classList.remove("light");
		themeMode.classList.add("dark");
		themeMode.style.backgroundColor = "#333855";
		themeButton.style.cssText = "color: #333855; left: 39px";
		themeButtonIcon.style.transform = "scale(0)";
		setTimeout(() => {
			themeButtonIcon.classList.remove("bi-sun-fill");
			themeButtonIcon.classList.add("bi-moon-stars-fill");
			themeButtonIcon.style.fontSize = "14px";
			themeButtonIcon.style.transform = "scale(1)";
		}, 150);
		lightIcon.style.removeProperty("transform");
		darkIcon.style.transform = "scale(0)";
	} else {
		themeMode.classList.remove("dark");
		themeMode.classList.add("light");
		themeMode.style.backgroundColor = "#86B6F6";
		themeButton.style.left = "3px";
		themeButton.style.color = "#86B6F6";
		themeButtonIcon.style.transform = "scale(0)";
		setTimeout(() => {
			themeButtonIcon.classList.remove("bi-moon-stars-fill");
			themeButtonIcon.classList.add("bi-sun-fill");
			themeButtonIcon.style.removeProperty("font-size");
			themeButtonIcon.style.transform = "scale(1)";
		}, 150);
		darkIcon.style.removeProperty("transform");
		lightIcon.style.transform = "scale(0)";
	}
});

let days = document.querySelector(".days > span.count");
let hours = document.querySelector(".hours > span.count");
let minutes = document.querySelector(".minutes > span.count");
let seconds = document.querySelector(".seconds > span.count");

let eventDate = new Date("2024-12-31T00:00:00").getTime();

let counter = setInterval(() => {
	let date = new Date().getTime();
	let diff = Math.floor((eventDate - date) / 1000);

	let daysCount = Math.floor(diff / 60 / 60 / 24);
	let hoursCount = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
	let minutesCount = Math.floor((diff % (60 * 60)) / 60);
	let secondsCount = Math.floor(diff % 60);

	days.textContent = daysCount < 10 ? `0${daysCount}` : daysCount;
	hours.textContent = hoursCount < 10 ? `0${hoursCount}` : hoursCount;
	minutes.textContent = minutesCount < 10 ? `0${minutesCount}` : minutesCount;
	seconds.textContent = secondsCount < 10 ? `0${secondsCount}` : secondsCount;

	diff === 0 ? clearInterval(counter) : "";
}, 1000);
