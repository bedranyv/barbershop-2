let toggleFast = document.querySelector(".slider__toggle--fast");
let toggleCool = document.querySelector(".slider__toggle--cool");
let toggleExpensive = document.querySelector(".slider__toggle--expensive");
let advantagesFast = document.querySelector(".advantages__item--fast");
let advantagesCool = document.querySelector(".advantages__item--cool");
let advantagesExpensive = document.querySelector(".advantages__item--expensive");


toggleFast.addEventListener("click", function() {
	if (advantagesCool.classList.contains("advantages__item--current")) {
		advantagesCool.classList.remove("advantages__item--current");
		advantagesFast.classList.add("advantages__item--current");
		toggleCool.classList.remove("slider__toggle--current");
		toggleFast.classList.add("slider__toggle--current");

	} else {
		advantagesExpensive.classList.remove("advantages__item--current");
		advantagesFast.classList.add("advantages__item--current");
		toggleExpensive.classList.remove("slider__toggle--current");
		toggleFast.classList.add("slider__toggle--current");
	}
});

toggleCool.addEventListener("click", function() {
	if (advantagesFast.classList.contains("advantages__item--current")) {
		advantagesFast.classList.remove("advantages__item--current");
		advantagesCool.classList.add("advantages__item--current");
		toggleFast.classList.remove("slider__toggle--current");
		toggleCool.classList.add("slider__toggle--current");

	} else {
		advantagesExpensive.classList.remove("advantages__item--current");
		advantagesCool.classList.add("advantages__item--current");
		toggleExpensive.classList.remove("slider__toggle--current");
		toggleCool.classList.add("slider__toggle--current");
	}
});

toggleExpensive.addEventListener("click", function() {
	if (advantagesFast.classList.contains("advantages__item--current")) {
		advantagesFast.classList.remove("advantages__item--current");
		advantagesExpensive.classList.add("advantages__item--current");
		toggleFast.classList.remove("slider__toggle--current");
		toggleExpensive.classList.add("slider__toggle--current");

	} else {
		advantagesCool.classList.remove("advantages__item--current");
		advantagesExpensive.classList.add("advantages__item--current");
		toggleCool.classList.remove("slider__toggle--current");
		toggleExpensive.classList.add("slider__toggle--current");
	}
});
