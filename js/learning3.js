//форма с переключателями
const form = document.getElementById("generateCard");
//коллекция переключателей
const radioButtons = document.querySelectorAll("[type='radio']");

let card; //объект - создаваемая карточка
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur temporibus maxime doloremque minima? Odio quaerat, et at necessitatibus error animi, impedit libero sit, expedita nulla debitis. Quasi qui ipsa commodi.";
let imgUrl = ""; //адрес изображения

class Card {
//конструктор с параметрами, создающий объект карточку (не DOM-объект)

	_id = "";
	_className = "";
	_text = "";
	_imageSource = "";

constructor(id, className, text, imgUrl) {
	this.Id = id;
	this.ClassName = className;
	this.Text = text;
	this.ImageSource = imgUrl;
}

get Id() {
	return this._id;
}

set Id(value) {
	this._id = value;
}

get ClassName() {
	return this._className;
}

set ClassName(value) {
	this._className = value;
}

get Text() {
	return this._text;
}

set Text(value) {
	this._text = value;
}

get ImageSource() {
	return this._imageSource;
}

set ImageSource(value) {
	this._imageSource = value;
}

//метод - создание карточки
createCard() {
	let card; //объект - блок (div)
	let p; //объект - абзац (p)

	card = document.createElement("div");
	card.id = this.Id;
	card.className = "card";
	card.classList.add(this.ClassName);

	form.insertAdjacentElement("afterend", card); //добавляем карточку после формы

	p = document.createElement("p");
	p.textContent = this.Text; //добавляем текст абзацу

	card.append(p); //добавляем абзац в конец карточки

	//если путь к картинке задан, то создаём её
	if(typeof this.ImageSource != "undefined") {
	this.createImage(card);
	}
}

//метод - создание изображения в карточке
createImage(card) {
	let img; //объект - изображение в карточке
	
	img = document.createElement("img");
	img.src = this.ImageSource;
	img.alt = "Фото";

	card.prepend(img); //добавляем изображение в начало карточки
}

//метод - модификация объекта (карточки)
modifiedCard(typeCard, imgUrl) {  
	this.ClassName = typeCard;
	this.ImageSource = imgUrl;

	//удаление изображения в случае выбора "Без фото"
	if(typeCard == "card-no-photo") {      
	document.querySelector(".card img").remove();
	}
	else {
	if(!document.querySelector(".card img")) {
		this.createImage(document.getElementById("card"));
	}
	}
	document.getElementById("card").className = `card ${this.ClassName}`;
}
}

for(let radio of radioButtons) {
radio.addEventListener("change", () => {
	if(radio.value == "card-no-photo") {
		imgUrl = undefined;
	}
	else {
	imgUrl = "https://picsum.photos/500/300";
	}

	if(document.getElementById("card")) {
	card.modifiedCard(radio.value, imgUrl);
	}
	else {
	card = new Card("card", radio.value, text, imgUrl);
	card.createCard();
	}
});
}