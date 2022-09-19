// app_29


// function clear data from formAddAccount
function clearDataForm(){
    const popUp = document.querySelectorAll('body #container .popUp');

    const img = document.querySelector('body #container .popUp .form .uploadProfile .imgUpload .img');
    const selects = document.querySelectorAll('body #container .popUp .form select');
    const textArea = document.querySelector('body #container .popUp .form .textArea');
    for(let i = 0;i<popUp.length;i++){
        const popUpInps = popUp[i].querySelectorAll('.form > input');
        for(let x =0;x<popUpInps.length-1;x++){
            popUpInps[x].value = '';
        }
    }
    img.src = '';
    for(let i = 0;i<selects.length;i++){
        selects[i].selectedIndex = 0;
    }
    textArea.value = '';
    const inpUserName = document.querySelector('body #container .popUpAddAccount .form .userName');
    inpUserName.removeAttribute('style');
}

// function setMatriculeUserObj
function randomNumber(){
    let stock = document.querySelector('body #container .popUpAddAccount .form .firstName').value[0].toUpperCase();
    for(let i = 0;i<6;i++){
        stock += Math.floor(Math.random() * 10);
    }
    for(let i = 0;i<userObj.matriculeArr.length;i++){
        if(stock == userObj.matriculeArr[i]){
            stock = '';
            randomNumber();
        }
    }
    return stock;
}
