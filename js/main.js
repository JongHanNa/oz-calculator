import calculate, {
    handleAppendNumber,
    handleSetOperator,
    handleAppendDot,
    handleSubDisplay,
    displayHistory as showHistory,
    VALID_NUMBERS,
    VALID_OPERATORS,
    history,
} from "./index.js";

window.appendNumber = handleAppendNumber;
window.setOperator = handleSetOperator;
window.appendDot = handleAppendDot;
window.subDisplay = handleSubDisplay;
window.clearDisplay = () => {
    location.reload();
};
window.calculate = calculate;

// 기록 표시 버튼용
window.displayHistory = () => {
    const historyElement = document.getElementById("history");
    historyElement.classList.remove("d-none");
    historyElement.textContent = showHistory(history);
};

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (VALID_NUMBERS.includes(key)) handleAppendNumber(key);
    if (VALID_OPERATORS.includes(key)) handleSetOperator(key);
    if (key === "Enter") calculate();
    if (key === "Backspace") handleSubDisplay();
    if (key === ".") handleAppendDot();
});
