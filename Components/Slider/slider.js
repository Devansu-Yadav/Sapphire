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