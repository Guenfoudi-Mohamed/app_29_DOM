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
    static arr = [];
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
    // set data
    dataUpdate(firstname,lastname,imgSrc,selctMembership,selctJob,titleProduct,selctDepartmentType,discription){
        this.firstName = firstname;
        this.lastName = lastname;
        this.imgSrc = imgSrc;
        this.selctMembership = selctMembership;
        this.selctJob = selctJob;
        this.titleProduct = titleProduct;
        this.selctDepartmentType = selctDepartmentType;
        this.discription = discription;
    }
    // create 
    createPersonBox = function(){
        const self = this;
        // create elements and set attrs 
        const boxPerson = document.createElement('div');
        boxPerson.className = 'boxPerson';
        const headerPerson = document.createElement('div');
        headerPerson.className = 'headerPerson';
        const img = document.createElement('img');
        img.setAttribute('src',`${this.imgSrc}`);
        headerPerson.setAttribute('src',`${this.imgSrc}`);
        headerPerson.setAttribute('alt',`person profile`);
        const infoPerson = document.createElement('div');
        infoPerson.className = 'infoPerson';
        const h5 = document.createElement('h5');
        h5.textContent = `${this.firstName} ${this.lastName}`;
        const span0 = document.createElement('span');
        span0.textContent = `${this.selctMembership}`;
        const i = document.createElement('i');
        i.className = `fa-solid fa-circle-check`;
        const discriptionPerson = document.createElement('div');
        discriptionPerson.className = `discriptionPerson`;
        const span1 = document.createElement('span');
        span1.className = `titleProduct`;
        span1.textContent = `${this.titleProduct}`;
        const span2 = document.createElement('span');
        span2.className = `departmentType`;
        span2.textContent = `${this.selctDepartmentType}`;
        const p = document.createElement('p');
        p.className = `info`;
        p.textContent = `${this.discription}.`;
        const buttonEditePerson = document.createElement('div');
        buttonEditePerson.className = `buttonEditePerson`;
        const archivesTrachButton = document.createElement('div');
        archivesTrachButton.className = `archives-trach-button`;
        const input0 = document.createElement('input');
        input0.setAttribute('type',"button");
        input0.setAttribute('title',"Archive");
        input0.className = `btnArchive`;
        input0.setAttribute('value','Archive');
        const input1 = document.createElement('input');
        input1.setAttribute('type',"button");
        input1.setAttribute('title',"Delete");
        input1.className = `btnDelete`;
        input1.setAttribute('value','Delete');
        archivesTrachButton.append(input0,input1);
        const input2 = document.createElement('input');
        input2.setAttribute('type',"button");
        input2.setAttribute('title',"Edite");
        input2.className = `btnEdite`;
        input2.setAttribute('value','Edite');
        // append elements 
        infoPerson.append(h5,span0,i);
        headerPerson.append(img,infoPerson);
        discriptionPerson.append(span1,span2,p);
        buttonEditePerson.append(archivesTrachButton,input2);
        boxPerson.append(headerPerson,discriptionPerson,buttonEditePerson);
        const accountBox = document.querySelector('body #container .wrapper .accountBox');
        accountBox.insertBefore(boxPerson,accountBox.children[0]);
        // setMatriculeBoxPerson
        function randomNumber(){
            let stock = self.firstName[0].toUpperCase();
            for(let i = 0;i<6;i++){
                stock += Math.floor(Math.random() * 10);
            }
            for(let i = 0;i<person.arr.length;i++){
                if(stock == person.arr[i]){
                    stock = '';
                    randomNumber();
                }
            }
            return stock;
        }
        person.arr.push(randomNumber());
        console.log(person.arr);
        console.log(boxPerson);
        boxPerson.matricule = person.arr[person.arr.length-1];
        // add event for btn Edite boxPerson
        const btnsEdite = document.querySelectorAll('body #container .wrapper .accountBox .boxPerson .buttonEditePerson .btnEdite');
        btnsEdite[0].onclick = function(){
        if(document.querySelector('body .popUpAddAccount .form .btnEnvoyer').value == 'Envoyer'){
            const popUpAddAccount = document.querySelector('body .popUpAddAccount');
            popUpAddAccount.classList.add('active');
            document.querySelector('body .popUpAddAccount .form .btnEnvoyer').value = 'Save';
            document.querySelector('body .popUpAddAccount .form .btnEnvoyer').classList.add('btnSave');
            document.querySelector('body .popUpAddAccount .form .btnSave').classList.remove('btnEnvoyer');
            // move data from box to popUp
            document.querySelector('body .popUpAddAccount .form .firstName').value = self.firstName;
            document.querySelector('body .popUpAddAccount .form .lastName').value = self.lastName;
            document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .img').src = self.imgSrc;
            document.querySelector('body .popUpAddAccount .form .selct.s0').value = self.selctMembership;
            document.querySelector('body .popUpAddAccount .form .selct.s1').value = self.selctJob;
            document.querySelector('body .popUpAddAccount .form .titleProduct').value = self.titleProduct;
            document.querySelector('body .popUpAddAccount .form .selct.s2').value = self.selctDepartmentType;
            document.querySelector('body .popUpAddAccount .form textarea').value = self.discription;
            // move data from popUp to box
            
            const btnSaveForm = document.querySelector('body .popUpAddAccount .form .btnSave');
            btnSaveForm.onclick = function(){
                // dataUpdate
                self.dataUpdate(document.querySelector('body .popUpAddAccount .form .firstName').value,document.querySelector('body .popUpAddAccount .form .lastName').value,document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .img').src,document.querySelector('body .popUpAddAccount .form .selct.s0').value,document.querySelector('body .popUpAddAccount .form .selct.s1').value,document.querySelector('body .popUpAddAccount .form .titleProduct').value,document.querySelector('body .popUpAddAccount .form .selct.s2').value,document.querySelector('body .popUpAddAccount .form textarea').value);
                
                const boxsPerson = document.querySelectorAll('body #container .wrapper .accountBox .boxPerson');
                function upDate(i){
                    boxsPerson[i].querySelector('.headerPerson > img').src = self.imgSrc;
                    boxsPerson[i].querySelector('.headerPerson .infoPerson h5').textContent = `${self.firstName} ${self.lastName}`;
                    boxsPerson[i].querySelector('.headerPerson .infoPerson span').textContent = `${self.selctMembership}`;
                    boxsPerson[i].querySelector('.discriptionPerson .titleProduct').textContent = `${self.titleProduct}`;
                    boxsPerson[i].querySelector('.discriptionPerson .departmentType').textContent = `${self.selctDepartmentType}`;
                    boxsPerson[i].querySelector('.discriptionPerson .info').textContent = `${self.discription}`;
                }
                for(let i = 0;i<boxsPerson.length;i++){
                    if(boxsPerson[i].matricule == boxPerson.matricule){
                        upDate(i);
                        break;    
                    } 
                }
                document.querySelector('body .popUpAddAccount .form .btnSave').value = 'Envoyer';
                document.querySelector('body .popUpAddAccount .form .btnSave').classList.add('btnEnvoyer');
                document.querySelector('body .popUpAddAccount .form .btnEnvoyer').classList.remove('btnSave');
                console.log(self.firstName);
                clearDataForm();
                closePopUpAddAccount.click();
                console.log(self);
            }
        }
            
        };
    }
    
}
// event for button Envoyer
const btnEnvoyerForm = document.querySelector('body .popUpAddAccount .form .btnEnvoyer');
btnEnvoyerForm.onclick = function(){
    if(btnEnvoyerForm.value == 'Envoyer'){
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
        user.createPersonBox();    
        closePopUpAddAccount.click();
    }
}












// boxPerson.innerHTML = `
        //     <div class="headerPerson">                                                           *
        //         <img src="${this.imgSrc}" alt="person profile">                                  *
        //         <div class="infoPerson">                                                         *
        //             <h5>${this.firstName} ${this.lastName}</h5>
        //             <span>${this.selctMembership}</span><i class="fa-solid fa-circle-check"></i>
        //         </div>
        //     </div>
        //     <div class="discriptionPerson">
        //         <span class="titleProduct">${this.titleProduct}</span>
        //         <span class="departmentType">${this.selctDepartmentType}</span>
        //         <p class="info">${this.discription}.</p>
        //     </div>
        //     <div class="buttonEditePerson">                                              *
        //         <div class="archives-trach-button">                                      *
        //             <input type="button" title="Archive" class="btnArchive"  value="Archive"><input type="button" title="Delete" class="btnDelete" value="Delete">
        //         </div>
        //         <input type="button" title="Edite" class="btnEdite" value="Edite">
        //     </div>`;
