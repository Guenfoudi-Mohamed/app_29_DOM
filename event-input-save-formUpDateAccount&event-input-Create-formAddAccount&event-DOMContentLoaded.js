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
    const imgLength = img.getAttribute('src').length;
    if(imgLength == 0){
        bool = true;
    }
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
    
    //  if data valid in form => Create userBox
    if(bool == false){
        const firstname = document.querySelector('body #container .popUpAddAccount .form .firstName').value;
        const lastname = document.querySelector('body #container .popUpAddAccount .form .lastName').value;
        const imgSrc = document.querySelector('body #container .popUpAddAccount .form .uploadProfile .imgUpload .img').src;
        const selectMembership = document.querySelector('body #container .popUpAddAccount .form select.s0').value;
        const selectJob = document.querySelector('body #container .popUpAddAccount .form select.s1').value;
        const titleProduct = document.querySelector('body #container .popUpAddAccount .form input.titleProduct').value;
        const selectDepartmentype = document.querySelector('body #container .popUpAddAccount .form select.s2').value;
        const discription = document.querySelector('body #container .popUpAddAccount .form textarea').value;
        const user = new userObj(firstname,lastname,imgSrc,selectMembership,selectJob,titleProduct,selectDepartmentype,discription,randomNumber());
        closePopUpAddAccount.click();
    }
}

// event for input save formUpDateAccount
const btnSave = document.querySelector('body #container .popUpUpdateAccount .form .btnSave');
btnSave.addEventListener('click',function(){
    const firstname = document.querySelector('body #container .popUpUpdateAccount .form .firstName').value; 
    const lastname = document.querySelector('body #container .popUpUpdateAccount .form .lastName').value; 
    const imgSrc = document.querySelector('body #container .popUpUpdateAccount .form .uploadProfile .imgUpload .img').src;
    const selectMembership = document.querySelector('body #container .popUpUpdateAccount .form select.s0').value; 
    const selectJob = document.querySelector('body #container .popUpUpdateAccount .form select.s1').value; 
    const titleProduct = document.querySelector('body #container .popUpUpdateAccount .form input.titleProduct').value; 
    const selectDepartmentype = document.querySelector('body #container .popUpUpdateAccount .form select.s2').value; 
    const discription = document.querySelector('body #container .popUpUpdateAccount .form textarea').value;
    const matricule = this.matricule;
    let accountBox = '';

    if(btnSave.parentelement != 'areaArchives active'){
        accountBox = document.querySelector('body #container .wrapper .accountBox');
    }
    else if(btnSave.parentelement == 'areaArchives active'){
        accountBox = document.querySelector('body #container .areaArchives > .wrapper > .accountBox');
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
    if(btnSave.parentelement != 'areaArchives active'){
        userObjUI.upDateArrUserObj(matricule,{firstname:firstname,lastname:lastname,imgSrc:imgSrc,selectMembership:selectMembership,selectJob:selectJob,titleProduct:titleProduct,selectDepartmentype:selectDepartmentype,discription:discription,matricule:matricule});
    }
    else if(btnSave.parentelement == 'areaArchives active'){
        userObjUIArchive.upDateArrUserObj(matricule,{firstname:firstname,lastname:lastname,imgSrc:imgSrc,selectMembership:selectMembership,selectJob:selectJob,titleProduct:titleProduct,selectDepartmentype:selectDepartmentype,discription:discription,matricule:matricule});
    }
});

// event dom content load
document.addEventListener('DOMContentLoaded',function(){
    userObj.matriculeOBJ();
    userObjUI.userObj();
    userObjUIArchive.userObjArchive();
    userObjUITrash.userObjTrash();
    // localStorage.clear();
});