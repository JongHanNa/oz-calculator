const VALID_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const VALID_OPERATORS = ["+", "-", "*", "/", "^"];

const resetDisplay = () => {
    document.getElementById("display").textContent = "0";
    return "";
};

const setDisplay = (text) => {
    document.getElementById("display").textContent = text;
    return text;
};

const subDisplay = () => {
    const display = document.getElementById("display");
    let value = display.textContent;
    value = value.slice(0, -1) || "0";
    display.textContent = value;
    return value;
};

const appendNumber = (number, currentInput) => {
    if (!VALID_NUMBERS.includes(number))
        throw new Error("유효한 숫자를 입력하세요.");
    let newInput = currentInput === "0" ? number : currentInput + number;
    return setDisplay(newInput);
};

const setOperator = (op, currentInput) => {
    if (!VALID_OPERATORS.includes(op))
        throw new Error("유효한 연산자를 선택하세요.");
    if (!currentInput) throw new Error("숫자를 먼저 입력하세요.");
    return op;
};

const appendDot = (currentInput) => {
    if (currentInput.includes(".")) return currentInput;
    return setDisplay(currentInput + ".");
};

export {
    resetDisplay,
    setDisplay,
    subDisplay,
    appendNumber,
    setOperator,
    appendDot,
    VALID_NUMBERS,
    VALID_OPERATORS,
};
