// "Элементы панели инструментов"

// кнопка Быстрый поиск
function remoteSearch() {
	alert(`(i) Пока что в разработке`);
}
// кнопка Обзор
function topicsPane() {
	alert(`(i) Пока что в разработке`);
}
// кнопка Слова
function indexPane() {
	alert(`(i) Пока что в разработке`);
}
// кнопка Поиск
function searchPane() {
	alert(`(i) Пока что в разработке`);
}
// кнопка Открепить
function undockTab() {
	alert(`(i) Пока что в разработке`);
}
// кнопка Новая вкладка
function newTab() {
	alert(`(i) Пока что в разработке`);
}
// кнопка Показать/Скрыть
function bannerShowHide() {
	// alert(`(i) Пока что в разработке`);

	// let elemBanner = document.getElementById("idBanner");
	// let elemToolbar = document.getElementById('idToolbar');

	/* if ((elemBanner.style.display == 'none') && $(elemToolbar).hasClass('compact-toolbar')) { */
	if ($("div#idBanner").css('display') == 'none') {
		// console.log(`стиль`);
		// elemBanner.style.display = 'block';
		$("div#idBanner").css('display', 'block');
	}
	else if ($("div#idBanner").css('display') == 'block') {
		$("div#idBanner").css('display', 'none');
	}

	if ($("div#idToolbar").hasClass('compact-toolbar')) {
		// console.log(`класс`);
		$("div#idToolbar").removeClass('compact-toolbar').addClass('banner-toolbar');
	}
	else if ($("div#idToolbar").hasClass('banner-toolbar')) {
		$("div#idToolbar").removeClass('banner-toolbar').addClass('compact-toolbar');
	}
	$("div#idToolbar").toggleClass("toolbar-up toolbar-down");
	$("div#idNavBox").toggleClass("nav-box-up nav-box-down");
	$("div#idTopicPane").toggleClass("topic-pane-up topic-pane-down");
}
// кнопка Развернуть/Свернуть
function textHiddenExpand() {
	alert(`(i) Пока что в разработке`);
}
// кнопка Постоянная ссылка
function setPermalink() {
	alert(`(i) Пока что в разработке`);
}
// кнопка Печать
function printTopic() {
	alert(`(i) Пока что в разработке`);
}
// кнопка Домой
function pageHome(hrefString) {
	alert(`(i) Пока что в разработке`);
}
// кнопка Назад
function pagePrevious(hrefString) {
	alert(`(i) Пока что в разработке`);
}
// кнопка Вперед
function pageNext(hrefString) {
	alert(`(i) Пока что в разработке`);
}

// *** Элементы боковой панели навигации ***

function NavShowHide() {
	// alert(`(i) Пока что в разработке`);
	$("div#idNavBox").toggleClass("nav-box-show nav-box-hide");
	if ($("div#idDragDivider").css('cursor') == 'col-resize') {
		$("div#idDragDivider").css('cursor', 'default');
	}
	else if ($("div#idDragDivider").css('cursor') == 'default') {
		$("div#idDragDivider").css('cursor', 'col-resize');
	}
	$("div#idTopicPane").toggleClass("topic-pane-right topic-pane-left");
}
// данная функция указана как скрипт в теле блока div боковой панели навигации
function writeTOC() {
	alert(`(i) Пока что в разработке`);
}

function manualVersion() {
	{
		// let features = 'toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=yes,width=900,height=700';
		// let features = 'left=100,top=100,width=350,height=250,menubar=false,toolbar=false,location=false,resizabie=no,scrollbars=yes,status=false';
		let features = 'width=350,height=300,left='+((screen.width-500)/2)+',top='+((screen.height-500)/2)+',menubar=false,toolbar=false,location=false,resizabie=no,scrollbars=yes,status=false';
		// window.open("","","width=250,height=250"); /* пример открытия пустого окна */
		window.open('manualVersion.htm', "", features);
	}
}

/* ****************************************** */
/* модальное окно */
/* создание модального окна с настройками по умолчанию */
function modalWindow() {
	{
		modalWin();
	}
}
/* код, выполняющего создание модального окна без кнопок в нижней части, с заголовком «Новое сообщение» и пустым содержимым */
/* setModalWindow(
	{// alert(`(i) Пока что в разработке`);
		title: "Test"
	}
);

modalWin(
	{
		title: "Текст заголовка",
		content: "Содержимое модального окна",
		buttonClose: [
			{
				class: "btn btn-close",
				text: "Закрыть окно",
				handler: "modalHandlerClose"
			}
		]
	}
); */
/* модальное окно */
/* ****************************************** */