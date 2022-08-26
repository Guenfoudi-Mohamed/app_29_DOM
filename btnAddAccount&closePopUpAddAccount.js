// app_29

const btnAddAccount = document.querySelector('body #container .wrapper .headerButtons .btnAddAccount');
btnAddAccount.addEventListener(`click`,function(){
    const popUpAddAccount = document.querySelector('body .popUpAddAccount');
    popUpAddAccount.classList.add('active');
});

const closePopUpAddAccount = document.querySelector('body .popUpAddAccount .form .closePopUpAddAccount');
closePopUpAddAccount.onclick = function(){
    const popUpAddAccount = document.querySelector('body .popUpAddAccount');
    popUpAddAccount.classList.remove('active');
    clearDataForm();
}
// function for clear data from form
function clearDataForm(){
    const inputs = document.querySelectorAll('body .popUpAddAccount .form > input');
    inputs.forEach(function(value,index,arr){
        if(index != arr.length-1){
            inputs[index].value = '';
        }
    });
    const img = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .img');
    img.src = '';
    const selections = document.querySelectorAll('body .popUpAddAccount .form .selct');
    selections.forEach(function(value,index,arr){
        selections[index].selectedIndex = 0;
    });
    const textArea = document.querySelector('body .popUpAddAccount .form textarea');
    textArea.value = '';
}
