function calculate() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;

    let result;

    if(op === "add") result = add(a,b);
    if(op === "sub") result = subtract(a,b);
    if(op === "mul") result = multiply(a,b);
    if(op === "div") result = divide(a,b);

    document.getElementById("result").innerText = "Result: " + result;
}