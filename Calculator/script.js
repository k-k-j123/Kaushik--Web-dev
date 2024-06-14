var display = document.getElementById("display")

function appendtodisplay(input) {
    display.innerText += input;
}

function ClearDisplay() {
    display.innerText = "";
}

function Calculate() {
    display.innerText = eval(display.innerText);
}