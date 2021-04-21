// Задача № 40.
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.

let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
console.log(img1);

img1.addEventListener("click", () => {
	// alert(img1.getAttribute("src"));
	getImageSrc(img1);
})

img2.addEventListener("click", () => {
	// alert(img2.getAttribute("src"));
	getImageSrc(img2);
})

function getImageSrc(objImage) {
	return alert(`src = ${objImage.getAttribute("src")}`);
}