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

const showEval = document.querySelector(".show-eval");

const calculation = [];
let numberClick;
const parenthesisCheckArray = [];
const numberLeftParenthesisCheck = [];
const numberRightParenthesisCheck = [];
const numbers = [];
const nonNumbers = [];
const splicedItems = [];
const joinedItems = [];
const joinArrays = [];
const sortedArrayForCalc = [];
const prepareForCalc = [];
let calcString;

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
          try {
            parenthesisCheck();
            squareRootCheck();
            exponentCheck();
            percentageCheck();
            divisionCheck();
            multiplicationCheck();
            subtractionCheck();
            additionCheck();
            decimalCheck();
            convertNumbers();
            joinDecimals();
            prepareItemsForCalc();
            fixPreceedingNegatives();
            finalPreparationForCalc();
            orderOfOperations();
            console.log(joinArrays);
          } catch (error) {
            console.error(error);
            console.error(error.message);
          } finally {
            calculation.length = 0;
            parenthesisCheckArray.length = 0;
            numberLeftParenthesisCheck.length = 0;
            numberRightParenthesisCheck.length = 0;
            joinedItems.length = 0;
            joinArrays.length = 0;
            prepareForCalc.length = 0;
            console.log("done");
          }
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
  emptyParenthesisCheck();
}

function checkStartsWithRightParenthesis() {
  if (calculation[0] === ")") throw "Error";
}

function checkEndsWithLeftParenthesis() {
  if (calculation.slice(-1)[0] === "(") throw "Error";
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
  if (numberLeftParenthesisCheck.length !== numberRightParenthesisCheck.length)
    throw "Error";
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
      if (parenthesisCheckArray.indexOf(")") === -1) throw "Error";
    }
  }
}

function emptyParenthesisCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "(" && calculation[i + 1] === ")") throw "Error";
  }
}

function squareRootCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "SqRt") {
      if (calculation[i + 1] === undefined) throw "Error";
      else if (calculation[i + 1] === ")") throw "Error";
      else if (calculation[i + 1] === "^") throw "Error";
      else if (calculation[i + 1] === "%") throw "Error";
      else if (calculation[i + 1] === "/") throw "Error";
      else if (calculation[i + 1] === "x") throw "Error";
      else if (calculation[i + 1] === "+") throw "Error";
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
      if (calculation[i - 1] === undefined) throw "Error";
      else if (calculation[i - 1] === "(") throw "Error";
      else if (calculation[i - 1] === "SqRt") throw "Error";
      else if (calculation[i - 1] === "^") throw "Error";
      else if (calculation[i - 1] === "%") throw "Error";
      else if (calculation[i - 1] === "/") throw "Error";
      else if (calculation[i - 1] === "x") throw "Error";
      else if (calculation[i - 1] === "-") throw "Error";
      else if (calculation[i - 1] === "+") throw "Error";
      else if (calculation[i - 1] === ".") throw "Error";
    }
  }
}

function afterExponentCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "^") {
      if (calculation[i + 1] === undefined) throw "Error";
      else if (calculation[i + 1] === ")") throw "Error";
      else if (calculation[i + 1] === "SqRt") throw "Error";
      else if (calculation[i + 1] === "^") throw "Error";
      else if (calculation[i + 1] === "%") throw "Error";
      else if (calculation[i + 1] === "/") throw "Error";
      else if (calculation[i + 1] === "x") throw "Error";
      else if (calculation[i + 1] === "-") throw "Error";
      else if (calculation[i + 1] === "+") throw "Error";
    }
  }
}

function percentageCheck() {
  beforePercentageCheck();
  // afterPercentageCheck();
}

function beforePercentageCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "%") {
      if (calculation[i - 1] === undefined) throw "Error";
      else if (calculation[i - 1] === "(") throw "Error";
      else if (calculation[i - 1] === "SqRt") throw "Error";
      else if (calculation[i - 1] === "^") throw "Error";
      // else if (calculation[i - 1] === "%") throw "Error";
      else if (calculation[i - 1] === "/") throw "Error";
      else if (calculation[i - 1] === "x") throw "Error";
      else if (calculation[i - 1] === "-") throw "Error";
      else if (calculation[i - 1] === "+") throw "Error";
      else if (calculation[i - 1] === ".") throw "Error";
    }
  }
}

// function afterPercentageCheck() {
//   for (let i = 0; i < calculation.length; i++) {
//     if (calculation[i] === "%") {
//       // if (calculation[i + 1] === "%") throw "Error";
//     }
//   }
// }

function divisionCheck() {
  beforeDivisionCheck();
  afterDivisionCheck();
}

function beforeDivisionCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "/") {
      if (calculation[i - 1] === undefined) throw "Error";
      else if (calculation[i - 1] === "(") throw "Error";
      else if (calculation[i - 1] === "SqRt") throw "Error";
      else if (calculation[i - 1] === "^") throw "Error";
      else if (calculation[i - 1] === "/") throw "Error";
      else if (calculation[i - 1] === "x") throw "Error";
      else if (calculation[i - 1] === "-") throw "Error";
      else if (calculation[i - 1] === "+") throw "Error";
      else if (calculation[i - 1] === ".") throw "Error";
    }
  }
}

function afterDivisionCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "/") {
      if (calculation[i + 1] === undefined) throw "Error";
      else if (calculation[i + 1] === ")") throw "Error";
      else if (calculation[i + 1] === "^") throw "Error";
      else if (calculation[i + 1] === "/") throw "Error";
      else if (calculation[i + 1] === "x") throw "Error";
      else if (calculation[i + 1] === "+") throw "Error";
    }
  }
}

function multiplicationCheck() {
  beforeMultiplicationCheck();
  afterMultiplicationCheck();
}

function beforeMultiplicationCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "x") {
      if (calculation[i - 1] === undefined) throw "Error";
      else if (calculation[i - 1] === "(") throw "Error";
      else if (calculation[i - 1] === "SqRt") throw "Error";
      else if (calculation[i - 1] === "^") throw "Error";
      else if (calculation[i - 1] === "/") throw "Error";
      else if (calculation[i - 1] === "x") throw "Error";
      else if (calculation[i - 1] === "-") throw "Error";
      else if (calculation[i - 1] === "+") throw "Error";
      else if (calculation[i - 1] === ".") throw "Error";
    }
  }
}

function afterMultiplicationCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "x") {
      if (calculation[i + 1] === undefined) throw "Error";
      else if (calculation[i + 1] === ")") throw "Error";
      else if (calculation[i + 1] === "^") throw "Error";
      else if (calculation[i + 1] === "/") throw "Error";
      else if (calculation[i + 1] === "x") throw "Error";
      else if (calculation[i + 1] === "+") throw "Error";
    }
  }
}

function subtractionCheck() {
  beforeSubtractionCheck();
  afterSubtractionCheck();
}

function beforeSubtractionCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "-") {
      if (calculation[i - 1] === ".") throw "Error";
    }
  }
}

function afterSubtractionCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "-") {
      if (calculation[i + 1] === undefined) throw "Error";
      else if (calculation[i + 1] === ")") throw "Error";
      else if (calculation[i + 1] === "^") throw "Error";
      else if (calculation[i + 1] === "%") throw "Error";
      else if (calculation[i + 1] === "/") throw "Error";
      else if (calculation[i + 1] === "x") throw "Error";
      else if (calculation[i + 1] === "+") throw "Error";
    }
  }
}

function additionCheck() {
  beforeAdditionCheck();
  afterAdditionCheck();
}

function beforeAdditionCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "+") {
      if (calculation[i - 1] === undefined) throw "Error";
      else if (calculation[i - 1] === "(") throw "Error";
      else if (calculation[i - 1] === "SqRt") throw "Error";
      else if (calculation[i - 1] === "^") throw "Error";
      else if (calculation[i - 1] === "/") throw "Error";
      else if (calculation[i - 1] === "x") throw "Error";
      else if (calculation[i - 1] === "-") throw "Error";
      else if (calculation[i - 1] === "+") throw "Error";
      else if (calculation[i - 1] === ".") throw "Error";
    }
  }
}

function afterAdditionCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === "+") {
      if (calculation[i + 1] === undefined) throw "Error";
      else if (calculation[i + 1] === ")") throw "Error";
      else if (calculation[i + 1] === "^") throw "Error";
      else if (calculation[i + 1] === "/") throw "Error";
      else if (calculation[i + 1] === "x") throw "Error";
      else if (calculation[i + 1] === "+") throw "Error";
    }
  }
}

function decimalCheck() {
  beforeDecimalCheck();
  afterDecimalCheck();
}

function beforeDecimalCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === ".") {
      if (calculation[i - 1] === ".") throw "Error";
    }
  }
}

function afterDecimalCheck() {
  for (let i = 0; i < calculation.length; i++) {
    if (calculation[i] === ".") {
      if (calculation[i + 1] === undefined) throw "Error";
      else if (calculation[i + 1] === "SqRt") throw "Error";
      else if (calculation[i + 1] === ")") throw "Error";
      else if (calculation[i + 1] === "^") throw "Error";
      else if (calculation[i + 1] === "%") throw "Error";
      else if (calculation[i + 1] === "/") throw "Error";
      else if (calculation[i + 1] === "x") throw "Error";
      else if (calculation[i + 1] === "-") throw "Error";
      else if (calculation[i + 1] === "+") throw "Error";
      else if (calculation[i + 1] === ".") throw "Error";
    }
  }
}

function getSplicedItems() {
  if (calculation.length === 1) {
    singleSplicedItem();
  }
  let strValue = calculation.findIndex((value) => {
    return typeof value === "string";
  });
  if (strValue !== -1) {
    getSplicedItemsWithString();
  } else {
    getSplicedItemsWithoutString();
  }
}

function getSplicedItemsWithString() {
  for (let i = 0; i < calculation.length; i++) {
    if (typeof calculation[i] !== "number") {
      if (calculation.indexOf(calculation[i]) !== 0) {
        splicedItems.push(
          calculation.splice(0, calculation.indexOf(calculation[i]))
        );
        break;
      } else if (calculation.indexOf(calculation[i]) === 0) {
        splicedItems.push(calculation.splice(0, 1));
        break;
      }
    }
  }
}

function getSplicedItemsWithoutString() {
  for (let i = 0; i < calculation.length; i++) {
    splicedItems.push(calculation.splice(0, calculation.slice(-1)[0]));
  }
}

function singleSplicedItem() {
  splicedItems.push(calculation.splice(0, 1));
}

function joinSplicedItems() {
  getSplicedItems();
  let joined = splicedItems[0].join("");
  splicedItems.length = 0;
  joinedItems.push(joined);
}

function joinAll() {
  for (let i = 0; calculation.length > 0; i++) {
    if (calculation.length > 0) {
      joinSplicedItems();
    }
  }
}

function combineArrays() {
  joinAll();
  for (let i = joinedItems.length; joinedItems.length > 0; i--) {
    joinArrays.push(joinedItems[0]);
    joinedItems.splice(0, 1);
  }
}

function convertNumbers() {
  combineArrays();
  for (let i = 0; i < joinArrays.length; i++) {
    if (joinArrays[i].length > 1) {
      if (joinArrays[i] !== "SqRt") {
        joinArrays[i] = Number(joinArrays[i]);
      }
    } else if (joinArrays[i].length === 1) {
      if (
        joinArrays[i] === "0" ||
        joinArrays[i] === "1" ||
        joinArrays[i] === "2" ||
        joinArrays[i] === "3" ||
        joinArrays[i] === "4" ||
        joinArrays[i] === "5" ||
        joinArrays[i] === "6" ||
        joinArrays[i] === "7" ||
        joinArrays[i] === "8" ||
        joinArrays[i] === "9"
      ) {
        joinArrays[i] = Number(joinArrays[i]);
      }
    }
  }
}

function joinDecimals() {
  if (joinArrays.includes(".")) {
    for (let i = 0; i < joinArrays.length; i++) {
      if (joinArrays[i] === ".") {
        if (typeof joinArrays[i - 1] !== "number") {
          if (
            joinArrays[i - 1] === "(" ||
            joinArrays[i - 1] === ")" ||
            joinArrays[i - 1] === "SqRt" ||
            joinArrays[i - 1] === "^" ||
            joinArrays[i - 1] === "%" ||
            joinArrays[i - 1] === "/" ||
            joinArrays[i - 1] === "x" ||
            joinArrays[i - 1] === "-" ||
            joinArrays[i - 1] === "+"
          ) {
            joinArrays.splice(i, 2, Number("0." + joinArrays[i + 1]));
            break;
          }
        } else if (typeof joinArrays[i - 1] === "number") {
          joinArrays.splice(
            i - 1,
            3,
            Number(joinArrays[i - 1] + "." + joinArrays[i + 1])
          );
        }
      }
    }
  }
}

function prepareParenthesisforCalc() {
  if (joinArrays.includes(")")) {
    for (let i = 0; i < joinArrays.length; i++) {
      if (joinArrays[i] === ")") {
        if (joinArrays[i + 1] === "(" || joinArrays[i + 1] === "SqRt") {
          joinArrays.splice(i + 1, 0, "x");
          break;
        }
      }
    }
  }
}

function prepareNumbersforCalc() {
  for (let i = 0; i < joinArrays.length; i++) {
    if (typeof joinArrays[i] === "number") {
      if (joinArrays[i + 1] === "SqRt" || joinArrays[i + 1] === "(") {
        joinArrays.splice(i + 1, 0, "x");
        break;
      }
    }
  }
}

function prepareItemsForCalc() {
  const newArray = [];
  for (let i = 0; i < joinArrays.length; i++) {
    newArray.push(joinArrays[i]);
  }
  for (let i = 0; i < newArray.length; i++) {
    console.log(`Loop Number: ${i + 1}`);
    console.log(`Item Up: ${joinArrays[0]}`);

    if (joinArrays[0] === ")") {
      let getIndexOpeningParenthesis = joinArrays.indexOf("(");
      let getIndexClosingParenthesis = joinArrays.indexOf(joinArrays[0]);
      let getSquareRootIndex = joinArrays.indexOf("SqRt");
      console.log(joinArrays);
      if (getIndexOpeningParenthesis > getIndexClosingParenthesis) {
        prepareParenthesisforCalc();
        console.log(joinArrays);
        newArray.length += 1;
      } else if (
        getSquareRootIndex > getIndexClosingParenthesis &&
        joinArrays[1] === "SqRt"
      ) {
        prepareParenthesisforCalc();
        console.log(joinArrays);
        newArray.length += 1;
      }
    }

    if (typeof joinArrays[0] === "number") {
      if (joinArrays[1] === "SqRt" || joinArrays[1] === "(") {
        prepareNumbersforCalc();
        newArray.length += 1;
      }
    }

    prepareForCalc.push(joinArrays[0]);
    joinArrays.splice(0, 1);
    console.log(`Next Item: ${joinArrays[0]}`);
  }
  console.log(`prepare for calc: ${prepareForCalc}`);
  newArray.length = 0;
}

function fixPreceedingNegatives() {
  if (prepareForCalc[0] === "-") {
    prepareForCalc.splice(0, 1, -1, "x");
  }
}

function finalPreparationForCalc() {
  for (let i = 0; i < prepareForCalc.length; i++) {
    if (prepareForCalc[i] === "SqRt") {
      prepareForCalc[i] = "Math.sqrt";
    } else if (prepareForCalc[i] === "^") {
      prepareForCalc[i] = "**";
    } else if (prepareForCalc[i] === "x") {
      prepareForCalc[i] = "*";
    } else if (prepareForCalc[i] === undefined) {
      prepareForCalc.splice(i, 1);
    }
  }
  console.log(prepareForCalc);
}

function additionCalc() {
  for (let i = 0; i < prepareForCalc.length; i++) {
    if (prepareForCalc[i] === "+") {
      if (
        typeof prepareForCalc[i - 1] === "number" &&
        typeof prepareForCalc[i + 1] === "number"
      ) {
        console.log("Running for addition");
        calcString = prepareForCalc[i - 1] + prepareForCalc[i + 1];
        prepareForCalc.splice(i - 1, 3, calcString);
      }
    }
  }
  console.log(prepareForCalc);
}

function subtractionCalc() {
  for (let i = 0; i < prepareForCalc.length; i++) {
    if (prepareForCalc[i] === "-") {
      if (
        typeof prepareForCalc[i - 1] === "number" &&
        typeof prepareForCalc[i + 1] === "number"
      ) {
        console.log("Running for subtraction");
        calcString = prepareForCalc[i - 1] - prepareForCalc[i + 1];
        prepareForCalc.splice(i - 1, 3, calcString);
      }
    }
  }
  console.log(prepareForCalc);
}

function multiplicationCalc() {
  for (let i = 0; i < prepareForCalc.length; i++) {
    if (prepareForCalc[i] === "*") {
      if (
        typeof prepareForCalc[i - 1] === "number" &&
        typeof prepareForCalc[i + 1] === "number"
      ) {
        console.log("Running for multiplication");
        calcString = prepareForCalc[i - 1] * prepareForCalc[i + 1];
        console.log(calcString);
        prepareForCalc.splice(i - 1, 3, calcString);
      }
    }
  }
  console.log(prepareForCalc);
}

function divisionCalc() {
  for (let i = 0; i < prepareForCalc.length; i++) {
    if (prepareForCalc[i] === "/") {
      if (
        typeof prepareForCalc[i - 1] === "number" &&
        typeof prepareForCalc[i + 1] === "number"
      ) {
        console.log("Running for division");
        calcString = prepareForCalc[i - 1] / prepareForCalc[i + 1];
        prepareForCalc.splice(i - 1, 3, calcString);
      }
    }
  }
  console.log(prepareForCalc);
}

function percentageCalc() {
  for (let i = 0; i < prepareForCalc.length; i++) {
    if (prepareForCalc[i] === "%") {
      if (
        prepareForCalc[i + 1] !== undefined &&
        prepareForCalc[i + 1] !== "**" &&
        prepareForCalc[i + 1] !== "*" &&
        prepareForCalc[i + 1] !== "/" &&
        prepareForCalc[i + 1] !== "%" &&
        prepareForCalc[i + 1] !== "+" &&
        prepareForCalc[i + 1] !== "-"
      ) {
        prepareForCalc.splice(
          prepareForCalc.indexOf(prepareForCalc[i + 1]),
          0,
          "*"
        );
      }
      if (typeof prepareForCalc[i - 1] === "number") {
        console.log("Running for percentage");
        calcString = prepareForCalc[i - 1] / 100;
        prepareForCalc.splice(i - 1, 2, calcString);
      } else if (typeof prepareForCalc[i - 1] !== "number") {
        continue;
      }
    }
  }
  console.log(prepareForCalc);
}

function exponentiationCalc() {
  for (let i = 0; i < prepareForCalc.length; i++) {
    if (prepareForCalc[i] === "**") {
      if (
        typeof prepareForCalc[i - 1] === "number" &&
        typeof prepareForCalc[i + 1] === "number"
      ) {
        console.log("Running for exponentiation");
        calcString = prepareForCalc[i - 1] ** prepareForCalc[i + 1];
        prepareForCalc.splice(i - 1, 3, calcString);
      }
    }
  }
  console.log(prepareForCalc);
}

function squareRootCalc() {
  for (let i = 0; i < prepareForCalc.length; i++) {
    if (prepareForCalc[i] === "Math.sqrt") {
      if (typeof prepareForCalc[i + 1] === "number") {
        console.log("Running for square root");
        calcString = Math.sqrt(prepareForCalc[i + 1]);
        prepareForCalc.splice(i, 2, calcString);
      }
    }
  }
  console.log(prepareForCalc);
}

function parenthesisCalc() {
  for (let i = 0; i < prepareForCalc.length; i++) {
    if (prepareForCalc[i] === "(" && prepareForCalc[i + 2] === ")") {
      prepareForCalc.splice(i + 2, 1);
      prepareForCalc.splice(i, 1);
    } else {
      continue;
    }
  }
}

function orderOfOperations() {
  while (prepareForCalc.length > 1) {
    let openingParenthesisIndex = prepareForCalc.indexOf("(");
    let closingParenthesisIndex = prepareForCalc.indexOf(")");
    let squareRootIndex = prepareForCalc.indexOf("Math.sqrt");
    let exponentiationIndex = prepareForCalc.indexOf("**");
    let multiplicationIndex = prepareForCalc.indexOf("*");
    let divisionIndex = prepareForCalc.indexOf("/");
    let percentageIndex = prepareForCalc.indexOf("%");
    let additionIndex = prepareForCalc.indexOf("+");
    let subtractionIndex = prepareForCalc.indexOf("-");

    if (openingParenthesisIndex === -1 && closingParenthesisIndex === -1) {
      console.log("No Parenthesis");
      if (squareRootIndex < exponentiationIndex) {
        squareRootCalc();
        exponentiationCalc();
      } else if (exponentiationIndex < squareRootIndex) {
        exponentiationCalc();
        squareRootCalc();
      }
      if (multiplicationIndex < divisionIndex) {
        multiplicationCalc();
        divisionCalc();
      } else if (multiplicationIndex < percentageIndex) {
        multiplicationCalc();
        percentageCalc();
      } else if (divisionIndex < multiplicationIndex) {
        divisionCalc();
        multiplicationCalc();
      } else if (divisionIndex < percentageIndex) {
        divisionCalc();
        percentageCalc();
      } else if (percentageIndex < multiplicationIndex) {
        percentageCalc();
        multiplicationCalc();
      } else if (percentageIndex < divisionIndex) {
        percentageCalc();
        divisionCalc();
      }
      if (additionIndex < subtractionIndex) {
        additionCalc();
        subtractionCalc();
      } else if (subtractionIndex < additionIndex) {
        subtractionCalc();
        additionCalc();
      }
    } else {
      console.log("Parenthesis");
      parenthesisCalc();
      if (squareRootIndex < exponentiationIndex) {
        squareRootCalc();
        exponentiationCalc();
      } else if (exponentiationIndex < squareRootIndex) {
        exponentiationCalc();
        squareRootCalc();
      }
      if (multiplicationIndex < divisionIndex) {
        multiplicationCalc();
        divisionCalc();
      } else if (multiplicationIndex < percentageIndex) {
        multiplicationCalc();
        percentageCalc();
      } else if (divisionIndex < multiplicationIndex) {
        divisionCalc();
        multiplicationCalc();
      } else if (divisionIndex < percentageIndex) {
        divisionCalc();
        percentageCalc();
      } else if (percentageIndex < multiplicationIndex) {
        percentageCalc();
        multiplicationCalc();
      } else if (percentageIndex < divisionIndex) {
        percentageCalc();
        divisionCalc();
      }
      if (additionIndex < subtractionIndex) {
        additionCalc();
        subtractionCalc();
      } else if (subtractionIndex < additionIndex) {
        subtractionCalc();
        additionCalc();
      }
    }
  }
  console.log(prepareForCalc);
  showEval.textContent = prepareForCalc;
}

const useCalculator = function () {
  chooseDarkLightMode();
  calculateEval();
};

useCalculator();
