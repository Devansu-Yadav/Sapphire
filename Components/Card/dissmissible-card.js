const closeBtn = document.querySelectorAll(".btn-close");

closeBtn.forEach(btn => {
    btn.addEventListener("click", (ev) => {
        const cardToBeDismissed = ev.target.parentNode;
        cardToBeDismissed.style.display = "none";
    });
});