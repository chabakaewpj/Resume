// Side Navigation JS Code
let menuBtn = document.querySelector(".menu-btn");
let cancleBtn = document.querySelector(".cancle-btn");
let navBar = document.querySelector(".menu");

function closeMenu() {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
}

menuBtn.onclick = function () {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
};
cancleBtn.onclick = closeMenu;

// Close the side menu after choosing a link (tablet / mobile)
document.querySelectorAll(".menu li a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// Sticky navigation Menu JS Code
let nav = document.querySelector("nav");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};
