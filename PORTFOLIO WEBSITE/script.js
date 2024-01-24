let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close-btn")

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
})

close.addEventListener("click", () => {
    nav.classList.remove("active");
});

nav.addEventListener("click", () => {
    nav.classList.remove("active");
})
