const modalToggleBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-close");
const modalOverlayBg = document.querySelector(".modal-overlay");

modalToggleBtn.addEventListener("click", () => {
    if(!modal.classList.contains("show")) {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
        modalOverlayBg.style.display = "block";
        modalOverlayBg.style.backgroundColor = "var(--modal-overlay-color)";
    } else {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
        modalOverlayBg.style.display = "none";
        modalOverlayBg.style.backgroundColor = "var(--white-color)";
    }
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
    modalOverlayBg.style.display = "none";
    modalOverlayBg.style.backgroundColor = "var(--white-color)";
})