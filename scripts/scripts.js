
/* -------------- J. DAVID ---------------- */

let openm = document.getElementById('openm')
let closem = document.getElementById('closem')
let nav = document.getElementById('navi')

openm.addEventListener("click", () => {
    nav.classList.add('visible')
})

closem.addEventListener("click", () => {
    nav.classList.remove("visible");
})