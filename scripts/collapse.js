const bar = document.querySelectorAll("div.collapsible-bar");

function collapse(event) {
    if (event.target.closest(".carousel")) return; 
    if (event.target.closest(".btn-colapsar")) {
        event.stopPropagation();
        event.currentTarget.classList.toggle("collapse");
    }
}

bar.forEach(e => {
	e.addEventListener("click", collapse);
})


