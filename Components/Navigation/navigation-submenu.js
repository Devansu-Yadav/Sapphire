const subMenuToggle = document.querySelector(".navigation-panel .nav-submenu-item-dropdown-toggle");
const navDropDownMenu = document.querySelector(".navigation-panel .nav-dropdown-menu");

subMenuToggle.addEventListener("click", () => {
    navDropDownMenu.classList.toggle("show-menu");
});
