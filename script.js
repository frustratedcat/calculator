"use strict";

const darkLightModeBtn = document.querySelector(".dark-light-mode-btn");
const darkLightBody = document.querySelector(".body-container");
const darkLightMain = document.querySelector(".main-section");
const darkLightEval = document.querySelector(".show-evaluation-section");
const darkLightBtnSection = document.querySelector(".btn-section");
let darkLightBtn = document.querySelectorAll(".btn-mode");

const chooseDarkLightMode = function () {
  darkLightModeBtn.addEventListener("click", (e) => {
    if (e.target.matches(".light-mode")) {
      e.target.classList.toggle("dark-mode");
      darkLightBody.classList.toggle("dark-mode-body");
      darkLightMain.classList.toggle("background-dark");
      darkLightEval.classList.toggle("dark-mode");
      darkLightBtnSection.classList.toggle("background-dark");
      for (let i = 0; i < darkLightBtn.length; i++) {
        darkLightBtn[i].classList.toggle("dark-mode");
      }
    }
  });
};

chooseDarkLightMode();
