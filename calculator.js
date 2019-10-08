var memory = 0;
var fresh = 0;
var temp = 0;
var operator;

window.onclick = function() {
    var id = document.activeElement.id; //Detects the button id.
    var btn = document.getElementById(id).value; //Gets value of element.
    var foc = document.getElementById("calculator");



    switch (btn) {
        case "1":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "2":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "3":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "4":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "5":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "6":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "7":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "8":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "9":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "0":
            if (fresh == 0) {
                foc.value = btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            if (foc.value == 0) {
                fresh = 0;
            }
            break;
        case ".":
            if (fresh == 0) {
                if (foc.value.includes(".") && operator == "") {
                    if (foc.value.length > 1) {
                        foc.value = "0" + btn;
                        fresh = 1;
                        break;
                    }
                } else if (foc.value.includes(".") && operator != "") {
                    foc.value = "0" + btn;
                    fresh = 1;
                    break;
                }
                foc.value += btn;
                fresh = 1;
            } else {
                foc.value += btn;
            }
            break;
        case "M+":
            memory = Number(memory) + Number(foc.value);
            fresh = 0;
            break;
        case "MR":
            foc.value = memory;
            fresh = 0;
            break;
        case "M-":
            memory = Number(memory) - Number(foc.value);
            fresh = 0;
            break;
        case "+/-":
            foc.value *= -1;
            fresh = 0;
            break;
        case "/":
            temp = foc.value;
            operator = "/";
            fresh = 0;
            break;
        case "*":
            temp = foc.value;
            operator = "*";
            fresh = 0;
            break;
        case "+":
            temp = foc.value;
            operator = "+";
            fresh = 0;
            break;
        case "-":
            temp = foc.value;
            operator = "-";
            fresh = 0;
            break;
        case "=":
            switch (operator) {
                case "/":
                    temp = Number(temp) / Number(foc.value);
                    foc.value = temp;
                    temp = 0;
                    operator = "";
                    fresh = 0;
                    break;
                case "*":
                    temp = Number(temp) * Number(foc.value);
                    foc.value = temp;
                    temp = 0;
                    operator = "";
                    fresh = 0;
                    break;
                case "+":
                    temp = Number(temp) + Number(foc.value);
                    foc.value = temp;
                    temp = 0;
                    operator = "";
                    fresh = 0;
                    break;
                case "-":
                    temp = Number(temp) - Number(foc.value);
                    foc.value = temp;
                    temp = 0;
                    operator = "";
                    fresh = 0;
                    break;

                default:
                    break;
            }

            break;


        default:
            break;
    }

}