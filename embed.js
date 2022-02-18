// JavaScript Code Snippet
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