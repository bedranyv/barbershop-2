let toggleRewiew1 = document.querySelector(".slider__toggle--rewiews-1");
let toggleRewiew2 = document.querySelector(".slider__toggle--rewiews-2");
let toggleRewiew3 = document.querySelector(".slider__toggle--rewiews-3");
let rewiew1 = document.querySelector(".rewiews__item--1");
let rewiew2 = document.querySelector(".rewiews__item--2");
let rewiew3 = document.querySelector(".rewiews__item--3");
let toggleBack = document.querySelector(".rewiews__button--back");
let toggleNext = document.querySelector(".rewiews__button--next");



toggleRewiew1.addEventListener("click", function() {
	if (rewiew2.classList.contains("rewiews__item--current")) {
		rewiew2.classList.remove("rewiews__item--current");
		rewiew1.classList.add("rewiews__item--current");
		toggleRewiew2.classList.remove("slider__toggle--current");
		toggleRewiew1.classList.add("slider__toggle--current");

	} else {
		rewiew3.classList.remove("rewiews__item--current");
		rewiew1.classList.add("rewiews__item--current");
		toggleRewiew3.classList.remove("slider__toggle--current");
		toggleRewiew1.classList.add("slider__toggle--current");
	}
});

toggleRewiew2.addEventListener("click", function() {
	if (rewiew1.classList.contains("rewiews__item--current")) {
		rewiew1.classList.remove("rewiews__item--current");
		rewiew2.classList.add("rewiews__item--current");
		toggleRewiew1.classList.remove("slider__toggle--current");
		toggleRewiew2.classList.add("slider__toggle--current");

	} else {
		rewiew3.classList.remove("rewiews__item--current");
		rewiew2.classList.add("rewiews__item--current");
		toggleRewiew3.classList.remove("slider__toggle--current");
		toggleRewiew2.classList.add("slider__toggle--current");
	}
});

toggleRewiew3.addEventListener("click", function() {
	if (rewiew1.classList.contains("rewiews__item--current")) {
		rewiew1.classList.remove("rewiews__item--current");
		rewiew3.classList.add("rewiews__item--current");
		toggleRewiew1.classList.remove("slider__toggle--current");
		toggleRewiew3.classList.add("slider__toggle--current");

	} else {
		rewiew2.classList.remove("rewiews__item--current");
		rewiew3.classList.add("rewiews__item--current");
		toggleRewiew2.classList.remove("slider__toggle--current");
		toggleRewiew3.classList.add("slider__toggle--current");
	}
});

toggleNext.addEventListener("click", function() {
	if (rewiew1.classList.contains("rewiews__item--current")) {
		rewiew1.classList.remove("rewiews__item--current");
		rewiew2.classList.add("rewiews__item--current");
		toggleRewiew1.classList.remove("slider__toggle--current");
		toggleRewiew2.classList.add("slider__toggle--current");

	} else {
		if (rewiew2.classList.contains("rewiews__item--current")) {
		rewiew2.classList.remove("rewiews__item--current");
		rewiew3.classList.add("rewiews__item--current");
		toggleRewiew2.classList.remove("slider__toggle--current");
		toggleRewiew3.classList.add("slider__toggle--current");

		}
		else {
		rewiew3.classList.remove("rewiews__item--current");
		rewiew1.classList.add("rewiews__item--current");
		toggleRewiew3.classList.remove("slider__toggle--current");
		toggleRewiew1.classList.add("slider__toggle--current");
		}
	}
});

toggleBack.addEventListener("click", function() {
	if (rewiew1.classList.contains("rewiews__item--current")) {
		rewiew1.classList.remove("rewiews__item--current");
		rewiew3.classList.add("rewiews__item--current");
		toggleRewiew1.classList.remove("slider__toggle--current");
		toggleRewiew3.classList.add("slider__toggle--current");

	} else {
		if (rewiew2.classList.contains("rewiews__item--current")) {
		rewiew2.classList.remove("rewiews__item--current");
		rewiew1.classList.add("rewiews__item--current");
		toggleRewiew2.classList.remove("slider__toggle--current");
		toggleRewiew1.classList.add("slider__toggle--current");

		}
		else {
		rewiew3.classList.remove("rewiews__item--current");
		rewiew2.classList.add("rewiews__item--current");
		toggleRewiew3.classList.remove("slider__toggle--current");
		toggleRewiew2.classList.add("slider__toggle--current");
		}
	}
});
