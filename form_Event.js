// app_29

// EVENT FOR linkUpload 'click'
const linkUpload = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .linkUpload');
linkUpload.onclick = function(){
    const inpFile = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .inpFile');
    inpFile.click();
}

// event for hcange inpFile
const inpFile = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .inpFile');
inpFile.onchange = function(){
    /*Note :  this.files => property 'array' f object file li ktstocka fiha imgs li drna 3liha wahd check */
    //Methode-1
        // const redear = new FileReader();
        // redear.readAsDataURL(this.files[0]);
        // redear.onload = function(){
        //     const img = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .img');
        //     img.src = this.result;
        // }
    //Methode-2
        const img = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .img');
        img.src = URL.createObjectURL(this.files[0]);
}

// class personBox 
class person{
    constructor(firstName,lastName,imgSrc,selctMembership,selctJob,titleProduct,selctDepartmentType,discription){
        this.firstName = firstName;
        this.lastName = lastName;
        this.imgSrc = imgSrc;
        this.selctMembership = selctMembership;
        this.selctJob = selctJob;
        this.titleProduct = titleProduct;
        this.selctDepartmentType = selctDepartmentType;
        this.discription = discription; 
    }
    creatPersonBox = function(){
        const boxPerson = document.createElement('div');
        boxPerson.className = 'boxPerson';
        boxPerson.innerHTML = `
            <div class="headerPerson">
                <img src="${this.imgSrc}" alt="person profile">
                <div class="infoPerson">
                    <h5>${this.firstName} ${this.lastName}</h5>
                    <span>${this.selctMembership}</span><i class="fa-solid fa-circle-check"></i>
                </div>
            </div>
            <div class="discriptionPerson">
                <span class="titleProduct">${this.titleProduct}</span>
                <span class="departmentType">${this.selctDepartmentType}</span>
                <p class="info">${this.discription}.</p>
            </div>
            <div class="buttonEditePerson">
                <div class="archives-trach-button">
                    <input type="button" title="Archive" class="btnArchive"  value="Archive"><input type="button" title="Delete" class="btnDelete" value="Delete">
                </div>
                <input type="button" title="Edite" class="btnEdite" value="Edite">
            </div>`;
        const accountBox = document.querySelector('body #container .wrapper .accountBox');
        accountBox.appendChild(boxPerson);
    }
}
// event for button Envoyer
const btnEnvoyerForm = document.querySelector('body .popUpAddAccount .form .btnEnvoyer');
btnEnvoyerForm.onclick = function(){
    const firstName = document.querySelector('body .popUpAddAccount .form .firstName').value;
    const lastName = document.querySelector('body .popUpAddAccount .form .lastName').value;
    const imgSrc = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .img').src;
    const selctMembership = document.querySelector('body .popUpAddAccount .form .selct.s0').value;
    const selctJob = document.querySelector('body .popUpAddAccount .form .selct.s1').value;
    const titleProduct = document.querySelector('body .popUpAddAccount .form .titleProduct').value;
    const selctDepartmentType = document.querySelector('body .popUpAddAccount .form .selct.s2').value;
    const discription = document.querySelector('body .popUpAddAccount .form textarea').value;
    // creat object 'user'
    const user = new person(firstName,lastName,imgSrc,selctMembership,selctJob,titleProduct,selctDepartmentType,discription);
    user.creatPersonBox();    
    closePopUpAddAccount.click();
}
