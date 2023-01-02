var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result")
//var addButton = document.getElementById("add");

//addButton.addEventListener("click", () => calculate(addButton.value));

document.getElementById("add").addEventListener("click",
function() {
res.value = parseInt(n1.value) + parseInt(n2.value);
});


document.getElementById("sub").addEventListener("click",
function() {
res.value = parseInt(n1.value) - parseInt(n2.value);
});

document.getElementById("mul").addEventListener("click",
function() {
res.value = parseInt(n1.value) * parseInt(n2.value);
});

document.getElementById("div").addEventListener("click",
function() {
res.value = parseInt(n1.value) / parseInt(n2.value);
});

//function calculate(operation) {
   // console.log(eval(String(n1.value + "+" + n2.value)))
    //res.value = eval(n1.value + operation + n2.value)
//}