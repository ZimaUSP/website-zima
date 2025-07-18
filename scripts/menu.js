let show = true;
const menu = document.querySelector("header");
const btnMenu = document.querySelector(".btn_menu");

function ativar_menu() {
	if (window.matchMedia("(max-width: 800px)").matches) {
		document.body.style.overflow = show ? "hidden" : "visible";
		menu.classList.toggle("on", show);
		show = !show;
	}
}

btnMenu.addEventListener("click", ativar_menu);
