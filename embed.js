// JavaScript Code Snippet for SnackBar
const snackbarBaseline = document.querySelector(".snackbar-baseline");
const snackbarLeading = document.querySelector(".snackbar-leading");
const snackbarStacked = document.querySelector(".snackbar-stacked");
const baselineBtn = document.querySelector(".baseline-btn");
const leadingBtn = document.querySelector(".leading-btn");
const stackedBtn = document.querySelector(".stacked-btn");
const cancelBtn = document.querySelectorAll(".btn-close");

cancelBtn.forEach(btn => {
    btn.addEventListener("click", (event) => {
        if(event.target.parentNode.parentNode.classList.contains("snackbar")) {
            event.target.parentNode.parentNode.style.display = 'none';
        } else {
            event.target.parentNode.style.display = 'none';
        }
    });
});

baselineBtn.addEventListener("click", () => onClickHandler(snackbarBaseline));
leadingBtn.addEventListener("click", () => onClickHandler(snackbarLeading));
stackedBtn.addEventListener("click", () => onClickHandler(snackbarStacked));

const onClickHandler = elem => {
    if(elem.style.display === 'none' || !elem.style.display) {
        elem.style.display = 'flex';
        setTimeout(() => {
            elem.style.display = 'none';
      }, 3000);
    }
}

// JavaScript Code Snippet for Modal
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
        modalOverlayBg.style.display = "block";
        modalOverlayBg.style.backgroundColor = "var(--white-color)";
    }
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
    modalOverlayBg.style.display = "none";
    modalOverlayBg.style.backgroundColor = "var(--white-color)";
})

// JavaScript code snippet for Slider component
const slideValue = document.querySelector(".range-slider-value span");
const inputSlider = document.querySelector("#range-slider-input");

inputSlider.addEventListener('input', () => {
    const inputSliderVal = inputSlider.value;

    slideValue.textContent = inputSliderVal;
    slideValue.style.left = (inputSliderVal/2) + '%';
    slideValue.classList.add("showSliderVal");
});

inputSlider.addEventListener('blur', () => {
    slideValue.classList.remove("showSliderVal");
});