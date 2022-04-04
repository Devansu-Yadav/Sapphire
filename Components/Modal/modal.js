const modalToggleBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector(".btn-close");
const closeBtn = document.querySelector(".close-btn");
const modalOverlayBg = document.querySelector(".modal-overlay");

const showModal = () => {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    modalOverlayBg.style.display = "block";
    modalOverlayBg.style.backgroundColor = "var(--modal-overlay-color)";
}

const hideModal = () => {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
    modalOverlayBg.style.display = "none";
    modalOverlayBg.style.backgroundColor = "var(--white-color)";
}

modalToggleBtn.addEventListener("click", () => {
    if(!modal.classList.contains("show")) {
        showModal();
    } else {
       hideModal();
    }
})

cancelBtn.addEventListener("click", () => hideModal());

closeBtn.addEventListener("click", () => hideModal());