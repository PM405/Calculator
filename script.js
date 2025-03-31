let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function calculateFunction(func) {
    try {
        let value = parseFloat(display.value);
        switch (func) {
            case 'sqrt': display.value = Math.sqrt(value); break;
            case 'sin': display.value = Math.sin(value * Math.PI / 180); break;
            case 'cos': display.value = Math.cos(value * Math.PI / 180); break;
            case 'tan': display.value = Math.tan(value * Math.PI / 180); break;
            case 'log': display.value = Math.log10(value); break;
        }
    } catch {
        display.value = 'Error';
    }
}
