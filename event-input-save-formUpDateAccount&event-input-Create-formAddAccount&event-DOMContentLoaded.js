// app_29


// event for input Create formAddAccount
const btnCreate = document.querySelector(' body #container .popUpAddAccount .form .btnCreate');
btnCreate.onclick = function(){
    // valid data in form
    let bool = false;
    const inps = document.querySelectorAll('body #container .popUpAddAccount .form > input');
    const img = document.querySelector('body #container .popUpAddAccount .form .uploadProfile .imgUpload .img');
    const selects = document.querySelectorAll('body #container .popUpAddAccount .form select');
    const textArea = document.querySelector('body #container .popUpAddAccount .form .textArea');
    for(let i = 0;i<inps.length-1;i++){
        if(inps[i].value.length <= 0){
            bool = true;
            inps[i].focus();
            break;
        }
    }
    // const imgLength = img.getAttribute('src');
    // if(imgLength.slice(0,4) == 'data'){
    //     bool = true;
    // }
    for(let i = 0;i<selects.length;i++){
        if(selects[i].selectedIndex == 0){
            bool = true;
            break;
        }
    }
    if(textArea.value.length == 0){
        bool = true;
        textArea.focus();
    }
    const validInpUsserName = validInpUserName();
    if(validInpUsserName){
        bool = true;
    }
    else if(validInpUsserName == false){
        bool = false;
    }

    //  if data valid in form => Create userBox
    if(bool == false){
        const firstname = document.querySelector('body #container .popUpAddAccount .form .firstName').value;
        const lastname = document.querySelector('body #container .popUpAddAccount .form .lastName').value;
        const userName = document.querySelector('body #container .popUpAddAccount .form .userName').value;
        const imgSrc = document.querySelector('body #container .popUpAddAccount .form .uploadProfile .imgUpload .img').src;
        const selectMembership = document.querySelector('body #container .popUpAddAccount .form select.s0').value;
        const selectJob = document.querySelector('body #container .popUpAddAccount .form select.s1').value;
        const titleProduct = document.querySelector('body #container .popUpAddAccount .form input.titleProduct').value;
        const price = document.querySelector('body #container .popUpAddAccount .form input.price').value+'$';
        const selectDepartmentype = document.querySelector('body #container .popUpAddAccount .form select.s2').value;
        const discription = document.querySelector('body #container .popUpAddAccount .form textarea').value;
        
        // set date and time
        const date = new Date();
        const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : `${(date.getMonth() + 1)}`;
        const day = (date.getDate() < 10) ? `0${date.getDate()}` : `${(date.getDate())}`;
        const hours = (date.getHours() < 10) ? `0${date.getHours()}` : `${date.getHours()}`;
        const minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        const seconds = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
        const dateAndTimeCreate = `${date.getFullYear()}/${month}/${day} - ${hours}:${minutes}:${seconds}`;

        const user = new userObj(firstname,lastname,userName,imgSrc,selectMembership,selectJob,titleProduct,price,selectDepartmentype,discription,randomNumber(),dateAndTimeCreate);
        closePopUpAddAccount.click();
    }
}


// EVENT FOR INPUT username 'Primary key'
const inpUserName = document.querySelector('body #container .popUpAddAccount .form .userName');
inpUserName.addEventListener('keyup',validInpUserName);
function validInpUserName(){

    inpUserName.value = inpUserName.value.trim();

    let conteur = 0;
    if(inpUserName.value.length > 6){
        conteur++;
    }
    
    let con = 0;
    for(let i = 0;i<userObj.userNameArr.length;i++){
        if(inpUserName.value.trim() == userObj.userNameArr[i]){
            conteur = 0;
            break;            
        }
        else {
            con++; 
        }
    }
    if(con == userObj.userNameArr.length){conteur++;}

    if(inpUserName.value.toUpperCase() == inpUserName.previousElementSibling.value.toUpperCase() || inpUserName.value.toUpperCase() == inpUserName.previousElementSibling.previousElementSibling.value.toUpperCase()){conteur=0;}
    
    for(let i = 0;i<inpUserName.value.length;i++){
        const charUpperCase = inpUserName.value[i];
        if(charUpperCase.toUpperCase() === inpUserName.value[i]){
            conteur++;
            break;
        }
    }

    const arrIndex = []; 
    let bool = false;
    let stockInpUserName = inpUserName.value;
    for(let i = 0;i<inpUserName.value.length;i++){
        if(inpUserName.value[i]== ' '){
            arrIndex.push(i);  
        }
    }
    inpUserName.value = '';
    for(let i = 0;i<stockInpUserName.length;i++){
        for(let x = 0;x<arrIndex.length;x++){
            if(i == arrIndex[x]){
                bool = true;
                break;
            }
        }
        if(bool){bool=false;continue;}
        inpUserName.value += stockInpUserName[i];
    };

    
    switch(conteur){
        case 0:
        case 1:
            inpUserName.style.cssText = `background-color:#ff7373;`;
            return true;
        case 2:    
            inpUserName.style.cssText = `background-color:yellow;`;
            return true;
        case 3:    
            inpUserName.style.cssText = `background-color:#48b748;`;
            return false;
    };
}


// EVENT FOR INPUT PRICE
const inpsPrice = document.querySelectorAll('body #container .popUp .form .price');
inpsPrice.forEach(function(inpPrice){
    inpPrice.onkeyup = function(){
        if(isNaN(Number(this.value.trim()))){
            this.value = '';
        }
    }
})

// event for input save formUpDateAccount
const btnSave = document.querySelector('body #container .popUpUpdateAccount .form .btnSave');
btnSave.addEventListener('click',function(){
    const firstname = document.querySelector('body #container .popUpUpdateAccount .form .firstName').value; 
    const lastname = document.querySelector('body #container .popUpUpdateAccount .form .lastName').value; 
    const imgSrc = document.querySelector('body #container .popUpUpdateAccount .form .uploadProfile .imgUpload .img').src;
    const selectMembership = document.querySelector('body #container .popUpUpdateAccount .form select.s0').value; 
    const selectJob = document.querySelector('body #container .popUpUpdateAccount .form select.s1').value; 
    const titleProduct = document.querySelector('body #container .popUpUpdateAccount .form input.titleProduct').value; 
    const price = document.querySelector('body #container .popUpUpdateAccount .form input.price').value+'$';
    const selectDepartmentype = document.querySelector('body #container .popUpUpdateAccount .form select.s2').value; 
    const discription = document.querySelector('body #container .popUpUpdateAccount .form textarea').value;
    const matricule = this.matricule;
    let accountBox = '';

    if(btnSave.parentelement == 'accountBox Home'){
        accountBox = document.querySelector('body #container .wrapper .accountBox.Home');
    }
    else if(btnSave.parentelement == 'accountBox Archives'){
        accountBox = document.querySelector('body #container .areaArchives > .wrapper > .accountBox.Archives');
    }
    
    for(let i = 0;i<accountBox.childElementCount;i++){
        if(this.matricule == accountBox.children[i].matricule){
            accountBox.children[i].querySelector('.headerPerson .infoPerson h5').textContent = `${firstname} ${lastname}`;
            accountBox.children[i].querySelector('.headerPerson > img').src = imgSrc;
            accountBox.children[i].querySelector('.headerPerson .infoPerson span').textContent = selectMembership;
            accountBox.children[i].querySelector('.discriptionPerson .titleProduct').textContent = titleProduct;
            accountBox.children[i].querySelector('.discriptionPerson .departmentType').textContent = selectDepartmentype;
            accountBox.children[i].querySelector('.discriptionPerson .info').textContent = discription;
            closePopUpUpdateAccount.click();
            break;
        }
    }

    const dateAndTimeCreate = btnSave.dateAndTimeCreate;
    const userName = btnSave.userName;
    if(btnSave.parentelement == 'accountBox Home'){
        userObjUI.upDateArrUserObj(matricule,{firstname:firstname,lastname:lastname,userName:userName,imgSrc:imgSrc,selectMembership:selectMembership,selectJob:selectJob,titleProduct:titleProduct,price:price,selectDepartmentype:selectDepartmentype,discription:discription,matricule:matricule,dateAndTimeCreate:dateAndTimeCreate});
    }
    else if(btnSave.parentelement == 'accountBox Archives'){
        userObjUIArchive.upDateArrUserObj(matricule,{firstname:firstname,lastname:lastname,userName:userName,imgSrc:imgSrc,selectMembership:selectMembership,selectJob:selectJob,titleProduct:titleProduct,price:price,selectDepartmentype:selectDepartmentype,discription:discription,matricule:matricule,dateAndTimeCreate:dateAndTimeCreate});
    }

    userObjUIFilter.userObjFilter();
    userObjUIFilter.makeSure();
});


// event for boxs filter
const boxsFilter = document.querySelectorAll('body #container .wrapper .accountFilter .filterBoxs .box');
boxsFilter.forEach(function(value,index,arr){
    const areaFilter = document.querySelector('body #container .areaFilter');
    const typeFilter = areaFilter.querySelector('body #container .areaFilter > .wrapper .typeFilter');
    switch(index){
        case 0:
            boxsFilter[index].onclick = function(){
                areaFilter.classList.remove('active');
                typeFilter.innerHTML =  
                // <li><label for="accountTypeRadio0">all</label><input id="accountTypeRadio0" type="radio" checked disabled name="accountTypeRadio"></li>    
                `<div class="accountType">
                    <ul>
                        <li><label for="accountTypeRadio1">platinum</label><input id="accountTypeRadio1" type="radio" name="accountTypeRadio"></li>
                        <li><label for="accountTypeRadio2">bronze</label><input id="accountTypeRadio2" type="radio" name="accountTypeRadio"></li>
                    </ul> 
                </div>`;
                
                userObjUIFilter.userObjFilter();
                // userObjUIFilter.userObjFilterAccountType0(typeFilter.querySelector('.accountType li #accountTypeRadio0'));
                userObjUIFilter.userObjFilterAccountType1(typeFilter.querySelector('.accountType li #accountTypeRadio1'));
                userObjUIFilter.userObjFilterAccountType2(typeFilter.querySelector('.accountType li #accountTypeRadio2'));
                typeFilter.querySelector('.accountType li #accountTypeRadio1').click();
            };
            break;
        case 1:
            boxsFilter[index].onclick = function(){
                areaFilter.classList.remove('active');
                typeFilter.innerHTML = 
                // <li><label for="accountTypeRadio0">all</label><input id="accountTypeRadio0" type="radio" checked disabled name="accountTypeRadio"></li>
                `<div class="createDate">
                    <ul>
                        <li><label for="accountTypeRadio1">NewToOld<i class="fa-solid fa-arrow-trend-up"></i></label><input id="accountTypeRadio1" type="radio" name="accountTypeRadio"></li>
                        <li><label for="accountTypeRadio2">OldToNew<i class="fa-solid fa-arrow-trend-down"></i></label><input id="accountTypeRadio2" type="radio" name="accountTypeRadio"></li>
                    </ul>
                </div>`;
                userObjUIFilter.userObjFilter();
                // userObjUIFilter.userObjFilterCreateDate0(typeFilter.querySelector('.createDate li #accountTypeRadio0'));
                userObjUIFilter.userObjFilterCreateDate1(typeFilter.querySelector('.createDate li #accountTypeRadio1'));
                userObjUIFilter.userObjFilterCreateDate2(typeFilter.querySelector('.createDate li #accountTypeRadio2'));
                typeFilter.querySelector('.createDate li #accountTypeRadio1').click();
            };
            break;
        case 2:
            boxsFilter[index].onclick = function(){
                areaFilter.classList.remove('active');
                typeFilter.innerHTML = 
                // <li><label for="accountTypeRadio0">all</label><input id="accountTypeRadio0" type="radio" checked disabled name="accountTypeRadio"></li>
                `<div class="nameFilter">
                    <ul>
                        <li><label for="accountTypeRadio1">aTOz<i class="fa-solid fa-arrow-trend-up"></i></label><input id="accountTypeRadio1" type="radio" name="accountTypeRadio"></li>
                        <li><label for="accountTypeRadio2">zTOa<i class="fa-solid fa-arrow-trend-down"></i></label><input id="accountTypeRadio2" type="radio" name="accountTypeRadio"></li>
                    </ul>
                </div>`;
                userObjUIFilter.userObjFilter();
                // userObjUIFilter.userObjFilterNameFilter0(typeFilter.querySelector('.nameFilter li #accountTypeRadio0'));
                userObjUIFilter.userObjFilterNameFilter1(typeFilter.querySelector('.nameFilter li #accountTypeRadio1'));
                userObjUIFilter.userObjFilterNameFilter2(typeFilter.querySelector('.nameFilter li #accountTypeRadio2'));
                typeFilter.querySelector('.nameFilter li #accountTypeRadio1').click();
            };
            break;
        case 3:
            boxsFilter[index].onclick = function(){
                areaFilter.classList.remove('active');
                typeFilter.innerHTML = 
                // <li><label for="accountTypeRadio0">all</label><input id="accountTypeRadio0"  type="radio" checked disabled name="accountTypeRadio"></li>
                `<div class="price">
                    <ul>
                        <li><label for="accountTypeRadio1">cTOe<i class="fa-solid fa-arrow-trend-up"></i></label><input id="accountTypeRadio1" type="radio" name="accountTypeRadio"></li>
                        <li><label for="accountTypeRadio2">eTOc<i class="fa-solid fa-arrow-trend-down"></i></label><input id="accountTypeRadio2" type="radio" name="accountTypeRadio"></li>
                    </ul>
                </div>`;
                userObjUIFilter.userObjFilter();
                // userObjUIFilter.userObjFilterPrice0(typeFilter.querySelector('.price li #accountTypeRadio0'));
                userObjUIFilter.userObjFilterPrice1(typeFilter.querySelector('.price li #accountTypeRadio1'));
                userObjUIFilter.userObjFilterPrice2(typeFilter.querySelector('.price li #accountTypeRadio2'));
                typeFilter.querySelector('.price li #accountTypeRadio1').click();
            };
            break;
    }
});


// event dom content load
document.addEventListener('DOMContentLoaded',function(){
    userObj.matriculeOBJ();
    userObj.userNameOBJ()
    userObjUI.userObj();
    userObjUIArchive.userObjArchive();
    userObjUITrash.userObjTrash();
    // localStorage.clear();
});
