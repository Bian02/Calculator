let display = document.querySelector("#display")

function appendToDisplay(input) {
    display.value += input;
};

function deleteDisplay() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
};

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(Error) {
        display.value = "Error"
    }
};

document.addEventListener("keydown", function (event) {
    if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/','.'].includes(event.key)) {
        appendToDisplay(event.key);
    }
    else if (event.key === 'Enter') {
        calculate();
    }
    else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
    else if (event.key === 'Escape') {
        clearDisplay();
    }
});
