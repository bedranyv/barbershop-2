let buttonSubmit = document.querySelector(".form-write__button-submit");
let closeSuccess = document.querySelector(".modal__success--button-close");
let closeFailure = document.querySelector(".modal__failure--button-close");

let modalSuccess = document.querySelector(".modal__success");
let modalFailure = document.querySelector(".modal__failure");

let inputName = document.querySelector("[name=client-name]");
let inputSurname = document.querySelector("[name=client-surname]");
let inputPatronymic = document.querySelector("[name=client-patronymic]");
let inputTel = document.querySelector("[name=client-tel]");
let inputEmail = document.querySelector("[name=client-email]");


// Открываем модальную форму входа
buttonSubmit.addEventListener("click", function (evt) {
	// Сбрасываем стандартное поведение (переход по ссылке)
	evt.preventDefault();

	if (!inputName.value || !inputSurname.value || !inputPatronymic.value || !inputTel.value || !inputEmail.value) {
		modalFailure.classList.add("modal__success-failure--show");
			
		if (!inputName.value) {
			inputName.classList.add("input-invalid-active");
		}

		if (!inputSurname.value) {
			inputSurname.classList.add("input-invalid-active");
		}

		if (!inputPatronymic.value) {
			inputPatronymic.classList.add("input-invalid-active");
		}

		if (!inputTel.value) {
			inputTel.classList.add("input-invalid-active");
		}

		if (!inputEmail.value) {
			inputEmail.classList.add("input-invalid-active");
		}
	}
	
	else {
		modalSuccess.classList.add("modal__success-failure--show");
	}
});


closeSuccess.addEventListener("click", function (evt) {
 	evt.preventDefault();
 	modalSuccess.classList.remove("modal__success-failure--show");
});


closeFailure.addEventListener("click", function (evt) {
 	evt.preventDefault();
 	modalFailure.classList.remove("modal__success-failure--show");

 	if (inputName.classList.contains("input-invalid-active")) {
 		inputName.classList.remove("input-invalid-active");
 		inputName.classList.add("input-invalid");
	}

	if (inputSurname.classList.contains("input-invalid-active")) {
 		inputSurname.classList.remove("input-invalid-active");
 		inputSurname.classList.add("input-invalid");
	}

	if (inputPatronymic.classList.contains("input-invalid-active")) {
 		inputPatronymic.classList.remove("input-invalid-active");
 		inputPatronymic.classList.add("input-invalid");
	}

	if (inputTel.classList.contains("input-invalid-active")) {
 		inputTel.classList.remove("input-invalid-active");
 		inputTel.classList.add("input-invalid");
	}

	if (inputEmail.classList.contains("input-invalid-active")) {
 		inputEmail.classList.remove("input-invalid-active");
 		inputEmail.classList.add("input-invalid");
	}
});


//Обработчик событий, который закрывает форму входа при нажатии кнопки ESC
window.addEventListener("keydown", function(evt) {
	// Если нажата кнопка ESC (код 27) убираем стандартное поведение (например в полноэкранном режиме выход из него)
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (modalSuccess.classList.contains("modal__success-failure--show")) {
			modalSuccess.classList.remove("modal__success-failure--show");
		}
		if (modalFailure.classList.contains("modal__success-failure--show")) {
			modalFailure.classList.remove("modal__success-failure--show");
		}
	}
});


// Отслеживаю клики на инпутах и убираю красный бордер 
inputName.addEventListener("click", function (evt) {
	if (inputName.classList.contains("input-invalid")) {
		inputName.classList.remove("input-invalid");
	}
});

inputSurname.addEventListener("click", function (evt) {
	if (inputSurname.classList.contains("input-invalid")) {
		inputSurname.classList.remove("input-invalid");
	}
});

inputPatronymic.addEventListener("click", function (evt) {
	if (inputPatronymic.classList.contains("input-invalid")) {
		inputPatronymic.classList.remove("input-invalid");
	}
});

inputTel.addEventListener("click", function (evt) {
	if (inputTel.classList.contains("input-invalid")) {
		inputTel.classList.remove("input-invalid");
	}
});

inputEmail.addEventListener("click", function (evt) {
	if (inputEmail.classList.contains("input-invalid")) {
		inputEmail.classList.remove("input-invalid");
	}
});