const ham = document.querySelector(".hamburger-menu");
const dark = document.querySelector(".dark-menu");
const hamoutline = document.querySelector(".ham-outline");
const whitemenu = document.querySelector(".white-menu");
const closemenu = document.querySelector(".close");
let menuOpen = false;
ham.addEventListener("click", () => {
    if (!menuOpen) {
        ham.classList.add('open');
        menuOpen = true;
        dark.style.top = "0";
        hamoutline.style.border = "1px solid white";
        whitemenu.style.top = "0"
    }
    else {
        ham.classList.remove('open');
        menuOpen = false;
        dark.style.top = "-100vh";
        whitemenu.style.top = "-100vh";
        hamoutline.style.border = "1px solid black"
    }
});
closemenu.addEventListener("click", () => {
    ham.classList.remove('open');
    menuOpen = false;
    dark.style.top = "-100vh";
    whitemenu.style.top = "-100vh";
    hamoutline.style.border = "1px solid black"
});
document.querySelector(".mskills").addEventListener("click", () => {
    ham.classList.remove('open');
    menuOpen = false;
    dark.style.top = "-100vh";
    whitemenu.style.top = "-100vh";
    hamoutline.style.border = "1px solid black"
});
document.querySelector(".mwork").addEventListener("click", () => {
    ham.classList.remove('open');
    menuOpen = false;
    dark.style.top = "-100vh";
    whitemenu.style.top = "-100vh";
    hamoutline.style.border = "1px solid black"
});
document.querySelector(".mwork").addEventListener("click", () => {
    ham.classList.remove('open');
    menuOpen = false;
    dark.style.top = "-100vh";
    whitemenu.style.top = "-100vh";
    hamoutline.style.border = "1px solid black"
});
document.querySelector(".medu").addEventListener("click", () => {
    ham.classList.remove('open');
    menuOpen = false;
    dark.style.top = "-100vh";
    whitemenu.style.top = "-100vh";
    hamoutline.style.border = "1px solid black"
});
document.querySelector(".mabout").addEventListener("click", () => {
    ham.classList.remove('open');
    menuOpen = false;
    dark.style.top = "-100vh";
    whitemenu.style.top = "-100vh";
    hamoutline.style.border = "1px solid black";
});
