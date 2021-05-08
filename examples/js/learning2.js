// литеральная запись способа создать объект
const input = {
	type: "number",
	placeholder: "Введите возраст",
	minValue: 1,
	styles: {
		display: "flex",
		margin: "20px auto 0",
		padding: "5px 10px",
		border: "2px solid gold",
		outlineColor: "lightgreen",
		fontFamily: "Verdana, sans-serif",
		fontSize: "18px",
		color: "blue"
	},
	getType() {
		return this.type;
	},
	getPlaceholder() {
		return this.placeholder;
	},
	getStyles() {
		return this.styles;
	}
}

const inputAge = createElem("input");
document.body.insertAdjacentElement("afterbegin", inputAge);
inputAge.focus();

let p; //абзац с результатом
let error; //окно с ошибкой

const result = () => {
if(document.getElementById("result")) {
		p.innerHTML = `Вам: ${inputAge.value} ${getGrammaticYear(+inputAge.value)}`;
	}
	else {
		p = createElem("p");
		inputAge.insertAdjacentElement("afterend", p);
	}
}

inputAge.addEventListener("input", () => {
	if(+inputAge.value > 0) {
		if(document.querySelector(".error")) {
			setTimeout(() => {
			error.classList.remove("animate__backInDown");
			error.classList.add("animate__backOutUp");
			}, 500);
			setTimeout(() => {error.remove();}, 3000);
		}
		result();
	}
	else {
		if(inputAge.value != "") {
			error = createElem("div");
			document.body.insertAdjacentElement("afterbegin", error);
		}
		else {
			if(document.querySelector(".error")) {
				setTimeout(() => {
				error.classList.remove("animate__backInDown");
				error.classList.add("animate__backOutUp");
				}, 500);
				setTimeout(() => {error.remove();}, 3000);
			}
		}
	}
});

function createElem(tagName) {
	elem = document.createElement(tagName);

	switch(tagName) {
		case "p": elem.setAttribute("id", "result");
				
				elem.style.textAlign = "center";
				elem.style.fontFamily = "Georgia, serif";
				elem.style.fontSize = "22px";
				elem.style.color = "green";

				elem.innerHTML = `Вам: ${inputAge.value} ${getGrammaticYear(+inputAge.value)}`;
				break;
		case "input": elem.setAttribute("type", input.getType());
					elem.setAttribute("placeholder", input.getPlaceholder());

					for(let key in input.getStyles()) {
						elem.style[key] = input.getStyles()[key];
					}
					break;
		case "div": elem.classList.add("error", "animate__animated", "animate__backInDown");
					elem.textContent = "Ошибка! Возраст не может быть < 0.";
					break;
	}
	return elem;
}

function getGrammaticYear(years) {
		let result = "";

//1, 21, 31,... (кроме 11) - "год"
//2 - 4, 22, 23, 24,... (кроме 12, 13, 14) - "года"
//5 - 20, 25-30, 35-40,... - "лет"
// 111-119, 211-219
//операция % возвращает остаток от деления

	if(years % 10 == 1 && years % 100 != 11) {
		result = "год";
	}
	else if(years % 10 >= 2
			&& years % 10 <= 4
			&& (years % 100 > 14 || years % 100 < 12)) {
		result = "года";
	}
	else {
		result = "лет";
	}
	return result;
}