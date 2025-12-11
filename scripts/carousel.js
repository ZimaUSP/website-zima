const carousel = document.querySelectorAll("div.carousel");
// const rolagem = 250;

// document.querySelectorAll("div.carousel .carousel-btn#next")[0].parentNode.querySelector("ul.images")
var testbtn
function scrollNext(btn) {
	console.log("scroll next");
	console.log(btn.target);
	testbtn = btn;
	let rolagem = btn.target.parentNode.parentNode.querySelector("ul.itens li").offsetWidth
	btn.target.parentNode.parentNode.querySelector("ul.itens").scrollLeft += rolagem;
}

function scrollPrev(btn) {
	let rolagem = btn.target.parentNode.parentNode.querySelector("ul.itens li").offsetWidth
	btn.target.parentNode.parentNode.querySelector("ul.itens").scrollLeft -= rolagem;
	console.log("scroll prev");
	console.log(btn);
	testbtn = btn;
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
