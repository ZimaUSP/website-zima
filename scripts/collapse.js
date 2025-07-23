const bar = document.querySelectorAll("div.collapsible-bar");

function collapse(event) {
    event.target.parentElement.classList.toggle("collapse");
}

bar.forEach(e => {
	e.addEventListener("click", collapse);
})
