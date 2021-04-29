// const form = {
// 	type: "form",
// 	title: "Modal Window",
// 	text: "Modal Window Text",
// 	buttonOK: "«Enter»",
// 	buttonCancel: "Esc",
// 	style: {
// 		position: "absolute",
// 		width: "300px",
// 		height: "200px",
// 		display: "flex",
// 		margin: "auto",
// 		padding: "10px",
// 		border: "2px solid gold",
// 		borderRadius: "10px",
// 		outlineColor: "black",
// 		alignItems: "center",
// 		fontFamily: "Verdana, sans-serif",
// 		backgroundColor: "darkred"
// 	},
// 	getType() {
// 		return this.type;
// 	},
// 	getTitle() {
// 		return this.title;
// 	},
// 	getText() {
// 		return this.text;
// 	},
// 	getStyle() {
// 		return this.style
// 	}
// }

let inputButton = document.getElementById('btn-demoButton');

let formModalWindow = document.getElementById('form-modalWindow');
/* let btnOK = document.getElementById('btn-ok'); */
let btnCancel = document.getElementById('btn-cancel');



// ---
inputButton.onmouseover = function(event) {
	inputButton.style.cursor = 'pointer';
}

inputButton.onmouseout = function(event) {
	inputButton.style.cursor = 'auto';
}
// ---

// btnOK.onmouseover = function(event) {
// 	btnOK.style.cursor = 'pointer';
// }

// btnOK.onmouseout = function(event) {
// 	btnOK.style.cursor = 'auto';
// }

// ---
document.addEventListener("keydown", function(event) {
	if (event.key == "Escape") {
		// не работает как надо - не понимаю
		if($(".form").hasClass("form-modal-hidden")) {
			inputButton.setAttribute("disabled", "disabled"); // кнопка недоступна
		}
		else if(!$(".form").hasClass("form-modal-hidden")) {
			formShowHide("form-modal-hidden");
			console.log(`Escape`);
		}

		// formShowHide("form-modal-hidden");
		// inputButton.removeAttribute("disabled");
		// inputButton.setAttribute("disabled", "enabled"); // не срабатывает
		// inputButton.setAttribute("disabled", "true"); // не срабатывает

		// !?! в чем смысл, не видно разницы между записями выше и ниже?

		// не срабатывает - не понимаю как правильно прописывать
		// $(inputButton).removeAttribute("disabled"); // делаем активной
	}
});

inputButton.addEventListener ("click", () => {
	formShowHide("form-modal-hidden");
	// inputButton.setAttribute("disabled", "disabled");
	// formModalWindow.classList.remove("form-modal-hidden"); // можно не делать remove
	
	// !?! в чем смысл, не видно разницы между записями выше и ниже?

	// не срабатывает - не понимаю как правильно прописывать
	// $(formModalWindow).removeClass('form-modal-hidden'); // можно не делать remove
	// $(inputButton).setAttribute("disabled", "disabled"); // кнопка недоступна
});

btnCancel.onmouseover = function(event) {
	btnCancel.style.cursor = 'pointer';
}

btnCancel.onmouseout = function(event) {
	btnCancel.style.cursor = 'auto';
}

btnCancel.addEventListener("click", () => {
	formShowHide("form-modal-hidden");
	// inputButton.removeAttribute("disabled");
	// formModalWindow.classList.add("form-modal-hidden");
	// inputButton.setAttribute("disabled", "enabled"); // не срабатывает
	// inputButton.setAttribute("disabled", "false"); // не срабатывает

	// !?! в чем смысл, не видно разницы между записями выше и ниже?

	// не срабатывает - не понимаю как правильно прописывать
	// $(inputButton).removeAttribute("disabled"); // делаем активной
});

function formShowHide(attribute) {
	if (console.log(formModalWindow.classList.toggle(attribute))) {
		inputButton.setAttribute("disabled", "disabled"); // кнопка недоступна
	}
	else {
		inputButton.removeAttribute("disabled"); // делаем активной
	}
	
	// if(!$(".form").hasClass("form-modal-hidden")) {
	// 	inputButton.removeAttribute("disabled"); // делаем активной
	// }
	// else if($(".form").hasClass("form-modal-hidden")) {
	// 	inputButton.setAttribute("disabled", "disabled"); // кнопка недоступна
	// }

	// console.log($(inputButton).getAttribute("disabled", "disabled"));

	// $(formModalWindow).classList.toggle(attribute); // не срабатывает

	// не срабатывает - не понимаю как правильно прописывать
	// if ($("inputButton").attr('disabled','disabled')) {
	// 	inputButton.removeAttribute("disabled");
	// }
	// else {
	// 	$(inputButton).setAttribute("disabled", "disabled");
	// }
}