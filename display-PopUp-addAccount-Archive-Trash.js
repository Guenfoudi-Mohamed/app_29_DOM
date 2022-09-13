// app_29


// event for display popUpAddAccount
const btnAddAccount = document.querySelector('body #container .wrapper .headerButtons input.btnAddAccount');
btnAddAccount.onclick = function(){
    const popUpAddAccount = document.querySelector('body #container .popUpAddAccount');
    popUpAddAccount.classList.add('active');
    popUpAddAccount.querySelector('.form input[placeholder="First Name"]').focus();
    clearDataForm();
}
// event for close popUpAddAccount
const closePopUpAddAccount = document.querySelector('body #container .popUpAddAccount .form .closePopUpAddAccount');
closePopUpAddAccount.onclick = function(){
    const popUpAddAccount = document.querySelector('body #container .popUpAddAccount');
    popUpAddAccount.classList.remove('active');
    clearDataForm();
}


// event for close popUpUpdateAccount
const closePopUpUpdateAccount = document.querySelector('body #container .popUpUpdateAccount .form .closePopUpUpdateAccount');
closePopUpUpdateAccount.onclick = function(){
    const popUpUpdateAccount = document.querySelector('body #container .popUpUpdateAccount');
    popUpUpdateAccount.classList.remove('active');
    clearDataForm();
}

// event for input File formAddAccount 
const popUpInpFile = document.querySelectorAll('body #container .popUp');
for(let i = 0; i<popUpInpFile.length;i++){
    const inpFile = popUpInpFile[i].querySelector('.form .uploadProfile .imgUpload .inpFile');
    inpFile.onchange = function(){
            // method 1
        const stockImg = this.files[0];
        const reader = new FileReader(stockImg);
        reader.readAsDataURL(stockImg);
        reader.onload = function(){
            const img = popUpInpFile[i].querySelector('.form .uploadProfile .imgUpload .img');
            img.src = this.result;
        }
            // method 2 kul mera kykun reflesh f page kytbdl img.src , 
        // const img = popUpInpFile[i].querySelector('.form .uploadProfile .imgUpload .img');
        // img.src = URL.createObjectURL(this.files[0]);
    }
}

// event for display areaArchives
const btnArchives = document.querySelector('body #container .wrapper .headerButtons .archives-Trash-button .btnArchives');
btnArchives.onclick = function(){
    const areaArchives = document.querySelector('body #container .areaArchives');
    areaArchives.classList.remove('active');
}
// event for close areaArchives
const closeAreaArchives = document.querySelector('body #container .areaArchives > .wrapper .close-area-archives');
closeAreaArchives.onclick = function(){
    const areaArchives = document.querySelector('body #container .areaArchives');
    areaArchives.classList.add('active');
} 

// event for display areaTrash
const btnTrash = document.querySelector('body #container .wrapper .headerButtons .archives-Trash-button .btnTrash');
btnTrash.onclick = function(){
    const areaTrash = document.querySelector('body #container .areaTrash');
    areaTrash.classList.remove('active');
}
// event for close areaTrash
const closeAreaTrash = document.querySelector('body #container .areaTrash > .wrapper .close-area-trash');
closeAreaTrash.onclick = function(){
    const areaTrash = document.querySelector('body #container .areaTrash');
    areaTrash.classList.add('active');
} 