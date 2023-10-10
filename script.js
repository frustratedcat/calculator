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

const btnSquareRoot = document.querySelector(".btn-square-root");
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
let btnNumber = document.querySelectorAll(".btn-number");

const calculation = [];
let numberClick;
const parenthesisCheckArray = [];
const numberLeftParenthesisCheck = [];
const numberRightParenthesisCheck = [];
const numbers = [];
const nonNumbers = [];
const splicedItems = [];
const joinedItems = [];

const showEval = document.querySelector(".show-eval");

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
        numberClick = e.target.classList[2];
      }
    });
  }
};

const showOnScreen = function () {
  numericalClick();
  for (let i = 0; i < btnCalc.length; i++) {
    btnCalc[i].addEventListener("click", () => {
      if (numberClick === "btn-0") {
        calculation.push(0);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-1") {
        calculation.push(1);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-2") {
        calculation.push(2);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-3") {
        calculation.push(3);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-4") {
        calculation.push(4);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-5") {
        calculation.push(5);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-6") {
        calculation.push(6);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-7") {
        calculation.push(7);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-8") {
        calculation.push(8);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-9") {
        calculation.push(9);
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-decimal") {
        calculation.push(".");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-add") {
        calculation.push("+");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-subtract") {
        calculation.push("-");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-multiply") {
        calculation.push("x");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-divide") {
        calculation.push("/");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-square-root") {
        calculation.push("SqRt");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-power") {
        calculation.push("^");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-percent") {
        calculation.push("%");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-left-paren") {
        calculation.push("(");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-right-paren") {
        calculation.push(")");
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-back") {
        calculation.pop();
        showEval.textContent = calculation.join("");
      } else if (numberClick === "btn-clear") {
        calculation.length = 0;
        showEval.textContent = calculation;
      }
    });
  }
};

const calculateEval = function () {
  showOnScreen();
  for (let i = 0; i < btnCalc.length; i++) {
    btnCalc[i].addEventListener("click", (e) => {
      if (e.target.matches(".btn-calc")) {
        if (e.target.matches(".btn-equals")) {
          parenthesisCheck();
          squareRootCheck();
          exponentCheck();
          percentageCheck();
          joinSplicedItems();
          calcSquareRoot();

          calculation.length = 0;
          parenthesisCheckArray.length = 0;
          numberLeftParenthesisCheck.length = 0;
          numberRightParenthesisCheck.length = 0;
        }
      }
    });
  }
};

function parenthesisCheck() {
  checkNumberOfParenthesis();
  checkNumberLeftParenthesis();
  checkNumberRightParenthesis();
  checkTotalLeftRightParenthesis();
  checkStartsWithRightParenthesis();
  checkEndsWithLeftParenthesis();
  checkParenthesisClose();
}

function checkStartsWithRightParenthesis() {
  if (calculation[0] === ")") {
    console.log("Error: Starts with )");
    return "error";
  }
}

function checkEndsWithLeftParenthesis() {
  if (calculation.slice(-1)[0] === "(") {
    console.log("Error: Ends with (");
    return "error";
  }
}

function checkNumberLeftParenthesis() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "(") {
      numberLeftParenthesisCheck.push(calculation[i]);
    }
  }
}

function checkNumberRightParenthesis() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === ")") {
      numberRightParenthesisCheck.push(calculation[i]);
    }
  }
}

function checkTotalLeftRightParenthesis() {
  if (
    numberLeftParenthesisCheck.length !== numberRightParenthesisCheck.length
  ) {
    console.log(`Error: Missing Parenthesis`);
    return "error";
  }
}

function checkNumberOfParenthesis() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "(" || calculation[i] === ")") {
      parenthesisCheckArray.push(calculation[i]);
    }
  }
}

function checkParenthesisClose() {
  for (let i = 0; i < parenthesisCheckArray.length; i++) {
    if (parenthesisCheckArray[i] === "(") {
      if (parenthesisCheckArray.indexOf(")") === -1) {
        console.log("Error: No closing parenthesis");
        return "error";
      }
    }
  }
}

function squareRootCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "SqRt") {
      if (calculation[i + 1] === undefined) {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === ")") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "^") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "%") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "/") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "x") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "+") {
        console.log("Error");
        return "error";
      }
    }
  }
}

function exponentCheck() {
  beforeExponentCheck();
  afterExponentCheck();
}

function beforeExponentCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "^") {
      if (calculation[i - 1] === "(") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "SqRt") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "^") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "%") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "/") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "x") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "-") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "+") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === ".") {
        console.log("Error");
        return "error";
      }
    }
  }
}

function afterExponentCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "^") {
      if (calculation[i + 1] === ")") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "SqRt") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "^") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "%") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "/") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "x") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "-") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "+") {
        console.log("Error");
        return "error";
      }
    }
  }
}

function percentageCheck() {
  beforePercentageCheck();
  afterPercentageCheck();
}

function beforePercentageCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "%") {
      if (calculation[i - 1] === "(") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "SqRt") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "^") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "%") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "/") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "x") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "-") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === "+") {
        console.log("Error");
        return "error";
      } else if (calculation[i - 1] === ".") {
        console.log("Error");
        return "error";
      }
    }
  }
}

function afterPercentageCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "%") {
      if (calculation[i + 1] === "SqRt") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "^") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "%") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "/") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "x") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "-") {
        console.log("Error");
        return "error";
      } else if (calculation[i + 1] === "+") {
        console.log("Error");
        return "error";
      }
    }
  }
}

function getSplicedItems() {
  for (let i = 0; i < calculation.length; i++) {
    console.log(typeof calculation[i]);
    if (typeof calculation[i] !== "number") {
      splicedItems.push(
        calculation.splice(0, calculation.indexOf(calculation[i]))
      );
    }
  }
}

function joinSplicedItems() {
  getSplicedItems();
  let joined = splicedItems[0].join("");
  splicedItems.length = 0;
  joinedItems.push(joined);
  console.log(joinedItems);
  console.log(`joined items ${joinedItems}`);
}

function calcSquareRoot() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "SqRt") {
      console.log(Math.sqrt(calculation[i + 1]));
    }
  }
}

const useCalculator = function () {
  chooseDarkLightMode();
  calculateEval();
};

useCalculator();
