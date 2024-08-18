//*Rangeslider
const Rangeslider = document.querySelector(".Rangeslider input");
const RangeH2 = document.querySelector(".Rangeslider h2");

const updateSliderValue = () => {
    RangeH2.innerHTML = Rangeslider.value
}

Rangeslider.addEventListener('input', updateSliderValue);