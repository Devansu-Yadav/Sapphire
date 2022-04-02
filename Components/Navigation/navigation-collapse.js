const hamburgerBtn = document.querySelector(".hamburger-btn");
const navigationPanel = document.querySelector(".navigation-panel-collapse");
const navigationSubMenuToggle = document.querySelector(".navigation-panel-collapse .nav-submenu-item-dropdown-toggle");
const navigationSubMenuDropdown = document.querySelector(".navigation-panel-collapse .nav-dropdown-menu");

hamburgerBtn.addEventListener("click", () => {
    if (navigationPanel.style.maxHeight) {
        navigationPanel.style.maxHeight = null;
    } else {
        navigationPanel.style.maxHeight = navigationPanel.scrollHeight + "px";
    }
});

navigationSubMenuToggle.addEventListener("click", () => {
    if(navigationSubMenuDropdown.style.maxHeight) {
        navigationSubMenuDropdown.style.maxHeight = null;
        navigationPanel.style.overflow = "hidden";
    } else {
        navigationSubMenuDropdown.style.maxHeight = navigationSubMenuDropdown.scrollHeight + "px";
        navigationPanel.style.overflow = "auto";
    }
});
