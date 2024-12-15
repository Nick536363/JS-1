let form = document.getElementById("maForm");
let div = document.getElementById("result");
function plus(){
    div.textContent=Number(form.number1.value)+Number(form.number2.value)
}
function minus(){
    div.textContent=form.number1.value-form.number2.value
}
function divide(){
    div.textContent=form.number1.value/form.number2.value
}
function multiply(){
    div.textContent=form.number1.value*form.number2.value
}

