let loginLink = document.querySelector(".login-list__login-link");

let modalLogin = document.querySelector(".modal__login");
let navMain2 = document.querySelector(".main-nav");

let form = modalLogin.querySelector("form");
let inputLogin = document.querySelector("[name=login]");
let inputPass = document.querySelector("[name=password]");

let closeModalLogin = document.querySelector(".form-login__button--close");

let mainWrapper = document.querySelector(".main-wrapper");


// На локальном сервере локальное хранилище не поддерживается
// Делаем код, которые убирает ошибку при обращении к хранилищу
let isStorageSupport = true;
let storage = "";
try {
	storage = localStorege.getItem("inputLogin");
} catch (err) {
	isStorageSupport = false;
	console.log("Нет хранилища");
}


function animLoginDel() {
	modalLogin.classList.remove("anim__modal-login-show");
}

function blurOn() {
	mainWrapper.classList.add("blur");
}

function blurOff() {
	mainWrapper.classList.remove("blur");
	mainWrapper.classList.add("anim-blur");
	setTimeout(animBlurOff, 1000);
}

function animBlurOff() {
	mainWrapper.classList.remove("anim-blur");
}


// Открываем модальную форму входа
loginLink.addEventListener("click", function (evt) {
	// Сбрасываем стандартное поведение (переход по ссылке)
	evt.preventDefault();

	console.log("Кнопка открыть логин");

	// Закрываем меню, если оно открытое (для мобильной версии)
	if (navMain2.classList.contains("main-nav--opened")) {
		navMain2.classList.add("main-nav--closed");
		navMain2.classList.remove("main-nav--opened");
	}

	// Убираем обводку полей красным, в случае если окно открывается повторно
	if (inputLogin.classList.contains("input-invalid")) {
		inputLogin.classList.remove("input-invalid");
	}
	if (inputPass.classList.contains("input-invalid")) {
		inputPass.classList.remove("input-invalid");
	}
		
	// добавляем класс, прописанный в css, для переопределения display:none
	modalLogin.classList.add("modal__login--show");
	// добавляем замыливание заднего фона
	blurOn();
	// добавляем анимацию появления меню и удаляем через таймер из-за конфликта с анимацией тряски
	modalLogin.classList.add("anim__modal-login-show");
	setTimeout(animLoginDel, 700);
	
	// если хранилище работает, записываем данные в поле логин
	if (storage) {
		login.value = storage;
		// и ставил фокус на поле пароль
		inputPass.focus();
	}	else {
		// Если пусто - ставим фокус в поле логина
		inputLogin.focus();
	}
});


// Закрываем модальную форму входа
// Задаем функцию, которая скрывает модалку логина для того, чтоб повесить на нее таймер
function closeLogin() {
	modalLogin.classList.remove("modal__login--show");
	modalLogin.classList.remove("anim__modal-login-hide");
}


closeModalLogin.addEventListener("click", function (evt) {
 	evt.preventDefault();
 	console.log("Кнопка закрыть логин");
 	// Подключаем анимацию ухода влево
 	modalLogin.classList.add("anim__modal-login-hide");
 	// Включаем анимацию, которая убирает замыливание
 	blurOff();
 	// через время убираем классы
 	setTimeout(closeLogin, 400);
});


// Сделаем форму валидную, чтоб не отправлять пустые поля
// Функция убирает анимацию тряски. В дальнейшем зададим таймер.
function animEmptyRemove() {
	modalLogin.classList.remove("anim__login-input-error");
	console.log("Убираем анимацию тряски");
}


// Убираю красную заливку ошибочного инпута
function changeAnimError() {
	if (inputLogin.classList.contains("input-invalid-active")) {
		inputLogin.classList.remove("input-invalid-active");
		inputLogin.classList.add("input-invalid");
	}

	if (inputPass.classList.contains("input-invalid-active")) {
		inputPass.classList.remove("input-invalid-active");
		inputPass.classList.add("input-invalid");
	}
}


form.addEventListener("submit", function (evt) {
	inputLogin.classList.remove("input-invalid");
	inputPass.classList.remove("input-invalid");
	// Если значение введенного логин или пароля пустое, тогда запрещаем отправку формы и производим действие
	if (!inputLogin.value || !inputPass.value) {
		evt.preventDefault();
		console.log("Введите логин и пароль");
		modalLogin.classList.add("anim__login-input-error");
		setTimeout(animEmptyRemove, 1000);

		if (!inputLogin.value) {
			inputLogin.classList.add("input-invalid-active");
			setTimeout(changeAnimError, 100);
		}

		if (!inputPass.value){
			inputPass.classList.add("input-invalid-active");
			setTimeout(changeAnimError, 100);
		}
	// Иначе (если все ок) - запишем данные логина в локальное хранилище
	} else 
	{
		// Если локальное хранилище поддерживается
		if (isStorageSupport) {
			localStorage.setItem("login", inputLogin.value);
			console.log("Запись в хранилище");
		}
		console.log("Локальное хранилище неподдерживается");
	}
});


//Обработчик событий, который закрывает форму входа при нажатии кнопки ESC
window.addEventListener("keydown", function(evt) {
	// Если нажата кнопка ESC (код 27) убираем стандартное поведение (например в полноэкранном режиме выход из него)
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (modalLogin.classList.contains("modal__login--show")) {
			modalLogin.classList.add("anim__modal-login-hide");
			blurOff();
		 	// через время убираем классы
		 	setTimeout(closeLogin, 400);
			console.log("Закрыто клавишей ESC");
		}
	}
});

// Отслеживаю клики на инпутах и убираю красный бордер 
inputLogin.addEventListener("click", function (evt) {
	if (inputLogin.classList.contains("input-invalid")) {
		inputLogin.classList.remove("input-invalid");
	}
});

inputPass.addEventListener("click", function (evt) {
	if (inputPass.classList.contains("input-invalid")) {
		inputPass.classList.remove("input-invalid");
	}
});