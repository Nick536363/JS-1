let form = document.getElementById("myForm");
let result = document.getElementById("result"); 
function addition(){
   result.textContent=Number(form.number_one.value)+Number(form.number_two.value)
}
function substraction(){
    result.textContent=form.number_one.value-form.number_two.value
}
function division(){
    result.textContent=form.number_one.value/form.number_two.value
}
function multiplication(){
    result.textContent=form.number_one.value*form.number_two.value
}

