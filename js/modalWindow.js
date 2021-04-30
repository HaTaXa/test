// Подробно изучено тут:
// https://smartlanding.biz/kak-sdelat-modalnoe-okno-na-sajte.html
// (i) Потому что я не понимаю нагромождение кода дополнительным синтаксисом.

$(function () {
// Закрытие модального окна при клике вне его контентной области
	// $('.modal').mouseup(function(e) {
	// 	let modalContent = $(".modal__content");
	// 	if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
	// 	$(this).removeClass('modal_active');
	// 	}
	// });

// Нажатие клавиши Esc.
// Если класс существует, значит модальное окно выведено на дисплей, => надо удалить класс, чтобы скрыть модальное окно по нажатию на esc
	$(document).keyup(function(e) {
		if (e.key === "Escape" || e.keyCode === 27) {
			if ($('.modal').hasClass("modal_active")) {
				$('.modal').removeClass('modal_active');
				console.log(`removeClass('modal_active')`);
			}
		}
	});
// Добавляем класс модальному окну, чтобы оно появилось
	$('#callback-button').click(function() {
		$('.modal').addClass('modal_active');
		console.log(`addClass('modal_active')`);
	});
// Удаляем класс модальному окну, чтобы оно исчезло
	$('.modal__close-button').click(function() {
		$('.modal').removeClass('modal_active');
		console.log(`removeClass('modal_active')`);
	});
});