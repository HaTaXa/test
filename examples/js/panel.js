let btnPanelOpen = document.getElementById("btnPanelOpen");
let panel = document.getElementById("panel");
let isPlayed;
let btnAnimationName = "btnMoveRight";
let panelAnimationName = "panelMoveRight";

btnPanelOpen.addEventListener("click", () => {
	animate(btnPanelOpen, btnAnimationName);
	animate(panel, panelAnimationName);

	if (!isPlayed) {
		btnAnimationName = "btnMoveLeft";
		panelAnimationName = "panelMoveLeft";
		isPlayed = true;
	} else {
		btnAnimationName = "btnMoveRight";
		panelAnimationName = "panelMoveRight";
		isPlayed = null;
	}
})

function animate(animatedElem, animationName) {
	switch (animatedElem.getAttribute("id")) {
		case "panel":
			panel.style.animation = animationName;
			panel.style.animationDuration = "1s";

			if (animationName == "panelMoveLeft") {
				panel.style.animationFillMode = "forwards";
			}
			break;
		case "btnPanelOpen":
			panel.classList.remove("panel__hidden");

			btnPanelOpen.style.animationName = animationName;
			btnPanelOpen.style.animationDuration = "1s";

			if (animationName == "btnMoveRight") {
				btnPanelOpen.style.animationFillMode = "forwards";
			}
			break;
	}
}