const carousel = document.querySelectorAll("div.carousel");
const rolagem = 250;

// document.querySelectorAll("div.carousel .carousel-btn#next")[0].parentNode.querySelector("ul.images")
function scrollNext(btn) {
	btn.target.parentNode.querySelector("ul.images").scrollLeft += rolagem;
}

function scrollPrev(btn) {
	btn.target.parentNode.querySelector("ul.images").scrollLeft -= rolagem;
}

function mudar_tabela(n) {
    n.target.parentElement.classList.toggle('off');
}

carousel.forEach(e => {
	let btnNext = e.querySelector(".carousel-btn#next");
	let btnPrev = e.querySelector(".carousel-btn#prev");
	if (btnNext !== null) {
		btnNext.addEventListener("click", scrollNext);
	}
	if (btnPrev !== null) {
		btnPrev.addEventListener("click", scrollPrev);
	}
})
