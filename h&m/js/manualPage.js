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

	// !!! надо переделать, можно не объявлять переменные, а обращаться напряму

	let elemBanner = document.getElementById("idBanner");
	let elemToolbar = document.getElementById('idToolbar');

	/* if ((elemBanner.style.display == 'none') && $(elemToolbar).hasClass('compact-toolbar')) { */
	if ($(elemBanner).css('display') == 'none') {
		// console.log(`стиль`);
		// elemBanner.style.display = 'block';
		$(elemBanner).css('display', 'block');
	}
	else if ($(elemBanner).css('display') == 'block') {
		$(elemBanner).css('display', 'none');
	}

	if ($(elemToolbar).hasClass('compact-toolbar')) {
		// console.log(`класс`);
		$(elemToolbar).removeClass('compact-toolbar').addClass('banner-toolbar');
	}
	else if ($(elemToolbar).hasClass('banner-toolbar')) {
		$(elemToolbar).removeClass('banner-toolbar').addClass('compact-toolbar');
	}
	$("div#idNavBox").toggleClass("nav-box-up nav-box-down");
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
}
// данная функция указана как скрипт в теле блока div боковой панели навигации
function writeTOC() {
	alert(`(i) Пока что в разработке`);
}