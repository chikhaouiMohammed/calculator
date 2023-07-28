let numb = ""
function buttonValue(value) {
    if (value !== "C" && value !== "=") {
        var inputElement = document.getElementById('result');
        inputElement.value += value;
        numb = numb + value;
    } else if (value == "C") {
        document.getElementById('result').value = "";
        numb = ""; 
    } else {
        mathCalc(numb)
    }
}
function mathCalc(value){
    let calculate = eval(value)
    let input = document.getElementById("result")
    input.value = calculate
}


