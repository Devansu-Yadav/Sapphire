const hamburgerMenuBtn = document.querySelector("#nav-menu");
const navMenu = document.querySelector(".sidebar");

hamburgerMenuBtn.addEventListener("click", function() {
    if(hamburgerMenuBtn.classList.contains("fa-bars")) {
        hamburgerMenuBtn.classList.remove("fa-bars");
        hamburgerMenuBtn.classList.add("fa-times");
        document.body.style.overflow = "hidden";
        navMenu.style.display = "block";
    } else {
        hamburgerMenuBtn.classList.remove("fa-times");
        hamburgerMenuBtn.classList.add("fa-bars");
        navMenu.style.display = "none";
        document.body.style.overflow = "scroll";
    }
})