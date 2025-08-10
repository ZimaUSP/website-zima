const selectParceiro = document.querySelectorAll("section.select-parceiro img");


function select(event) {
    let id = event.target.id.substring(4);
	let info = document.querySelector("section#"+id);
	let parceirosHide = document.querySelectorAll("section.selected");
	parceirosHide.forEach(e => {
		e.classList.remove("selected");
	});
	info.classList.add("selected")
}

selectParceiro.forEach(e => {
	e.addEventListener("click", select);
})
