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
}