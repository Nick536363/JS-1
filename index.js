let form = document.getElementById("maForm");
let result = document.getElementById("result"); 
function addition(){
   result.textContent=Number(form.number1.value)+Number(form.number2.value)
}
function substraction(){
    result.textContent=form.number1.value-form.number2.value
}
function division(){
    result.textContent=form.number1.value/form.number2.value
}
function multiplication(){
    result.textContent=form.number1.value*form.number2.value
}

