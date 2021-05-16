"use strict";

const color1 = document.querySelector(".color-option1");
const color2 = document.querySelector(".color-option2");

const changeColorActive = function () {
    if (!this.classList.contains("color-active")) {
        color1.classList.toggle("color-active");
        color2.classList.toggle("color-active");
    }
};

color1.addEventListener("click", changeColorActive);
color2.addEventListener("click", changeColorActive);
