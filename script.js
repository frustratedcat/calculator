"use strict";

const darkLightModeBtn = document.querySelector(".dark-light-mode-btn");
const darkLightBody = document.querySelector(".body-container");
const darkLightMain = document.querySelector(".main-section");
const darkLightEval = document.querySelector(".show-evaluation-section");
const darkLightBtnSection = document.querySelector(".btn-section");
let darkLightBtn = document.querySelectorAll(".btn-mode");

const btnClear = document.querySelector(".btn-clear");
const btnBack = document.querySelector(".btn-back");
const btnLeftParen = document.querySelector(".btn-left-paren");
const btnRightParen = document.querySelector(".btn-right-paren");

const btnNegative = document.querySelector(".btn-negative");
const btnPower = document.querySelector(".btn-power");
const btnPercent = document.querySelector(".btn-percent");
const btnDivide = document.querySelector(".btn-divide");

const btn7 = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");
const btn9 = document.querySelector(".btn-9");
const btnMultiply = document.querySelector(".btn-multiply");

const btn4 = document.querySelector(".btn-4");
const btn5 = document.querySelector(".btn-5");
const btn6 = document.querySelector(".btn-6");
const btnSubtract = document.querySelector(".btn-subtract");

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btnAdd = document.querySelector(".btn-add");

const btn0 = document.querySelector(".btn-0");
const btnDecimal = document.querySelector(".btn-decimal");
const btnEquals = document.querySelector(".btn-equals");

let btnCalc = document.querySelectorAll(".btn-calc");

const calculation = [];
let numberClick;

const chooseDarkLightMode = function () {
  darkLightModeBtn.addEventListener("click", (e) => {
    if (e.target.matches(".light-mode")) {
      e.target.classList.toggle("dark-mode");
      darkLightBody.classList.toggle("dark-mode-body");
      darkLightMain.classList.toggle("background-dark");
      darkLightMain.classList.toggle("outer-dark");
      darkLightEval.classList.toggle("dark-mode");
      darkLightBtnSection.classList.toggle("background-dark");
      for (let i = 0; i < darkLightBtn.length; i++) {
        darkLightBtn[i].classList.toggle("dark-mode");
      }
    }
  });
};

const numericalClick = function () {
  for (let i = 0; i < btnCalc.length; i++) {
    btnCalc[i].addEventListener("click", (e) => {
      if (e.target.matches(".btn-calc")) {
        console.log(`numericalClick(): ${e.target.classList[2]}`);
        numberClick = e.target.classList[2];
      }
    });
  }
};

const showOnScreen = function () {
  numericalClick();
  for (let i = 0; i < btnCalc.length; i++) {
    btnCalc[i].addEventListener("click", () => {
      console.log(`showOnScreen(): ${numberClick}`);
      if (numberClick === "btn-0") {
        calculation.push(0);
        console.log(calculation);
      } else if (numberClick === "btn-1") {
        calculation.push(1);
        console.log(calculation);
      } else if (numberClick === "btn-2") {
        calculation.push(2);
        console.log(calculation);
      } else if (numberClick === "btn-3") {
        calculation.push(3);
        console.log(calculation);
      } else if (numberClick === "btn-4") {
        calculation.push(4);
        console.log(calculation);
      } else if (numberClick === "btn-5") {
        calculation.push(5);
        console.log(calculation);
      } else if (numberClick === "btn-6") {
        calculation.push(6);
        console.log(calculation);
      } else if (numberClick === "btn-7") {
        calculation.push(7);
        console.log(calculation);
      } else if (numberClick === "btn-8") {
        calculation.push(8);
        console.log(calculation);
      } else if (numberClick === "btn-9") {
        calculation.push(9);
        console.log(calculation);
      } else if (numberClick === "btn-decimal") {
        calculation.push(".");
        console.log(calculation);
      } else if (numberClick === "btn-add") {
        calculation.push("+");
        console.log(calculation);
      } else if (numberClick === "btn-subtract") {
        calculation.push("-");
        console.log(calculation);
      } else if (numberClick === "btn-multiply") {
        calculation.push("x");
        console.log(calculation);
      } else if (numberClick === "btn-divide") {
        calculation.push("/");
        console.log(calculation);
      } else if (numberClick === "btn-negative") {
        calculation.push("-");
        console.log(calculation);
      } else if (numberClick === "btn-power") {
        calculation.push("^");
        console.log(calculation);
      } else if (numberClick === "btn-percent") {
        calculation.push("%");
        console.log(calculation);
      } else if (numberClick === "btn-left-paren") {
        calculation.push("(");
        console.log(calculation);
      } else if (numberClick === "btn-right-paren") {
        calculation.push(")");
        console.log(calculation);
      } else if (numberClick === "btn-back") {
        calculation.pop();
        console.log(calculation);
      } else if (numberClick === "btn-clear") {
        calculation.length = 0;
        console.log(calculation);
      }
    });
  }
};

chooseDarkLightMode();
showOnScreen();
