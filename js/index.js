import calculateOperation from "./operations.js";
import {
    resetDisplay,
    setDisplay,
    subDisplay,
    appendNumber,
    setOperator,
    appendDot,
    VALID_NUMBERS,
    VALID_OPERATORS,
} from "./input.js";
import { showError, removeError } from "./error.js";
import saveHistory, { displayHistory } from "./history.js";

let history = []; // 제곱 연산 및 기록 표시용 history
let currentInput = "";
let firstNumber = null;
let operator = null;
let isError = false;

function handleAppendNumber(number) {
    try {
        if (isError) {
            currentInput = resetDisplay();
            isError = false;
        }
        currentInput = appendNumber(number, currentInput);
        removeError();
    } catch (error) {
        showError(error.message);
        isError = true;
    }
}

function handleSetOperator(op) {
    try {
        if (isError) return;
        if (firstNumber === null) {
            firstNumber = Number(currentInput);
            operator = setOperator(op, currentInput);
            currentInput = resetDisplay();
        } else {
            operator = setOperator(op, currentInput);
        }
        removeError();
    } catch (error) {
        showError(error.message);
        isError = true;
    }
}

function handleAppendDot() {
    try {
        if (isError) {
            currentInput = resetDisplay();
            isError = false;
        }
        currentInput = appendDot(currentInput);
        removeError();
    } catch (error) {
        showError(error.message);
        isError = true;
    }
}

function handleSubDisplay() {
    currentInput = subDisplay();
}

export {
    calculateOperation,
    resetDisplay,
    setDisplay,
    subDisplay,
    appendNumber,
    setOperator,
    appendDot,
    showError,
    removeError,
    saveHistory,
    displayHistory,
    VALID_NUMBERS,
    VALID_OPERATORS,
    history,
    currentInput,
    firstNumber,
    operator,
    isError,
    handleAppendNumber,
    handleSetOperator,
    handleAppendDot,
    handleSubDisplay,
};

export default function calculate() {
    try {
        if (firstNumber === null || operator === null || !currentInput) {
            isError = true;
            throw new Error("계산에 필요한 값이 부족합니다.");
        }
        const secondNumber = Number(currentInput);
        if (isNaN(secondNumber)) {
            isError = true;
            throw new Error("유효한 숫자를 입력하세요.");
        }
        const result = calculateOperation(firstNumber, secondNumber, operator);
        saveHistory(firstNumber, operator, secondNumber, result, history);
        const resultElement = document.getElementById("result");
        resultElement.classList.remove("d-none", "alert-danger");
        resultElement.classList.add("alert-info");
        resultElement.textContent = `결과: ${result}`;
        currentInput = resetDisplay();
        firstNumber = null;
        operator = null;
        isError = false;
    } catch (error) {
        showError(error.message);
    }
}

// for...in 도전과제
const functions = {
    calculateOperation,
    appendNumber,
    setOperator,
    showError,
    saveHistory,
    displayHistory,
};
for (const func in functions) {
    console.log(`사용 가능한 함수: ${func}`);
}
