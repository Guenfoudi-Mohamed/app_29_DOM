// app_29


// class userObj
class userObj{
    static matriculeArr = [];
    constructor(firstname,lastname,imgSrc,selectMembership,selectJob,titleProduct,selectDepartmentype,discription,matricule){
        this.firstname = firstname;
        this.lastname = lastname;
        this.imgSrc = imgSrc;
        this.selectMembership = selectMembership;
        this.selectJob = selectJob;
        this.titleProduct = titleProduct;
        this.selectDepartmentype = selectDepartmentype;
        this.discription = discription;
        this.matricule = matricule;
        userObjUI.arrUserObj.push(this);
        const jsonArrobj = JSON.stringify(userObjUI.arrUserObj);
        localStorage.setItem('arrUserObj',jsonArrobj);
        userObj.matriculeArr.push(this.matricule);
        localStorage.setItem('matriculeArr',JSON.stringify(userObj.matriculeArr));
        userObjUI.displayUserObj(this);
    }
    static matriculeOBJ = function(){
        if(localStorage.getItem('matriculeArr') != null){
            userObj.matriculeArr = JSON.parse(localStorage.getItem('matriculeArr'));
        }
    }
}

// class userObjUI
class userObjUI{
    static arrUserObj = [];
    // static arrUserObj = [{ firstname: "mohamed", lastname: "guenfoudi", imgSrc: "blob:http://127.0.0.1:5500/40b61b48-7019-47d0-a324-f3d1c7d71501", selectMembership: "bronze", selectJob: "web dev", titleProduct: "app eco", selectDepartmentype: "frontend developer", discription: "Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen" },
    //     { firstname: "khaidl", lastname: "imran", imgSrc: "blob:http://127.0.0.1:5500/c245ba59-9368-4bfd-ae60-12bc8e3aa6c3", selectMembership: "platinum", selectJob: "mobile dev", titleProduct: "app game", selectDepartmentype: "frontend developer", discription: "Lorem Ipsum is simply dummy text of the printing and typesetting standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen" }];
    static userObj(){
            if(localStorage.getItem('arrUserObj') != null){
                userObjUI.arrUserObj = [...JSON.parse(localStorage.getItem('arrUserObj'))];
                userObjUI.arrUserObj.forEach(function(value,index,arr){
                    userObjUI.displayUserObj(value);
                });
            }
    }
    static displayUserObj = function(self){
        const accountBox = document.querySelector('body #container .wrapper .accountBox');
        const boxPerson = document.createElement('div');
        boxPerson.matricule = self.matricule;
        boxPerson.className = 'boxPerson';
        boxPerson.innerHTML = `
            <div class="headerPerson">                                                           
                <img src="${self.imgSrc}" alt="person profile">                                  
                <div class="infoPerson">                                                         
                    <h5>${self.firstname} ${self.lastname}</h5>
                    <span>${self.selectMembership}</span><i class="fa-solid fa-circle-check"></i>
                </div>
            </div>
            <div class="discriptionPerson">
            <span class="titleProduct">${self.titleProduct}</span>
                <span class="departmentType">${self.selectDepartmentype}</span>
                <p class="info">${self.discription}</p>
                </div>
                <div class="buttonEditePerson">                                              
                <div class="archives-Trash-button">                                      
                    <input type="button" title="Archive" class="btnArchive"  value="Archive"><input type="button" title="Delete" class="btnDelete" value="Delete">
                    </div>
                    <input type="button" title="Edite" class="btnEdite" value="Edite">
                    </div>`;        
        accountBox.insertBefore(boxPerson,accountBox.children[0]);
        userObjUI.editeUserObj(boxPerson.querySelector('.buttonEditePerson .btnEdite'),boxPerson.matricule,boxPerson);
        userObjUI.archiveUserObj(boxPerson.querySelector('.buttonEditePerson .archives-Trash-button .btnArchive'),boxPerson.matricule);
        userObjUI.deleteUserObj(boxPerson.querySelector('.buttonEditePerson .archives-Trash-button .btnDelete'),boxPerson.matricule);
    }
    static editeUserObj = function(btnEdite,selfMatricule,element){
        btnEdite.addEventListener('click',function(){
            const popUpUpdateAccount = document.querySelector('body #container .popUpUpdateAccount');
            popUpUpdateAccount.classList.add('active');
            popUpUpdateAccount.querySelector('.form input[placeholder="First Name"]').focus();
            let obj = '';
            for(let i = 0;i<userObjUI.arrUserObj.length;i++){
                if(userObjUI.arrUserObj[i].matricule == selfMatricule){
                    obj = userObjUI.arrUserObj[i];
                    break;
                }
            }
            document.querySelector('body #container .popUpUpdateAccount .form .firstName').value = obj.firstname;
            document.querySelector('body #container .popUpUpdateAccount .form .lastName').value = obj.lastname;
            document.querySelector('body #container .popUpUpdateAccount .form .uploadProfile .imgUpload .img').src = obj.imgSrc;
            document.querySelector('body #container .popUpUpdateAccount .form select.s0').value = obj.selectMembership;
            document.querySelector('body #container .popUpUpdateAccount .form select.s1').value = obj.selectJob;
            document.querySelector('body #container .popUpUpdateAccount .form input.titleProduct').value = obj.titleProduct;
            document.querySelector('body #container .popUpUpdateAccount .form select.s2').value = obj.selectDepartmentype;
            document.querySelector('body #container .popUpUpdateAccount .form textarea').value = obj.discription;
            const btnSave = document.querySelector('body #container .popUpUpdateAccount .form .btnSave');
            btnSave.matricule = obj.matricule;
            btnSave.parentelement = element.parentElement.className;
        });
    }
    static upDateArrUserObj = function(selfMatricule,self){
        let index = 0;
        for(let i = 0;i<userObjUI.arrUserObj.length;i++){
            if(userObjUI.arrUserObj[i].matricule == selfMatricule){
                index = i;
                break;
            }
        }
        for(let i = index;i<=userObjUI.arrUserObj.length-1;i++){
            if(i!=userObjUI.arrUserObj.length-1){
                [userObjUI.arrUserObj[i+1] , userObjUI.arrUserObj[i]] = [userObjUI.arrUserObj[i] , userObjUI.arrUserObj[i+1]];
            }
        };
        userObjUI.arrUserObj.pop();
        userObjUI.arrUserObj.push(self);
        for(let i = userObjUI.arrUserObj.length-1 ;i > index;i--){
            [userObjUI.arrUserObj[i-1] , userObjUI.arrUserObj[i]] = [userObjUI.arrUserObj[i] , userObjUI.arrUserObj[i-1]];
        }
        localStorage.setItem('arrUserObj',JSON.stringify(userObjUI.arrUserObj)); 
    }
    static archiveUserObj = function(btnArchive,selfMatricule){
        btnArchive.addEventListener('click',function(){
            let stockObj = '';
            let index = 0;
            for(let i = 0;i<userObjUI.arrUserObj.length;i++){
                if(userObjUI.arrUserObj[i].matricule == selfMatricule){
                    stockObj = userObjUI.arrUserObj[i];
                    index = i;
                    break;
                }
            }
            for(let i = index;i<=userObjUI.arrUserObj.length-1;i++){
                if(i!=userObjUI.arrUserObj.length-1){
                    [userObjUI.arrUserObj[i+1] , userObjUI.arrUserObj[i]] = [userObjUI.arrUserObj[i] , userObjUI.arrUserObj[i+1]];
                }
            };
            userObjUI.arrUserObj.pop();
            localStorage.setItem('arrUserObj',JSON.stringify(userObjUI.arrUserObj));
            const accountBox = document.querySelector('body #container .wrapper .accountBox');
            let boxPerson = '';
            for(let i = 0;i<accountBox.childElementCount;i++){
                if(selfMatricule == accountBox.children[i].matricule){
                    boxPerson = accountBox.children[i].cloneNode(true);
                    accountBox.children[i].remove();
                }
            }
            userObjUIArchive.arrUserObjArchive.push(stockObj);
            const arrUserObjArchive = JSON.stringify(userObjUIArchive.arrUserObjArchive);
            localStorage.setItem('arrUserObjArchive',arrUserObjArchive);
            userObjUIArchive.displayUserObjArchive(stockObj);      
        });
    }
    static deleteUserObj = function(btnDelete,selfMatricule){
        btnDelete.addEventListener('click',function(){
            let stockObj = '';
            let index = 0;
            for(let i = 0;i<userObjUI.arrUserObj.length;i++){
                if(userObjUI.arrUserObj[i].matricule == selfMatricule){
                    stockObj = userObjUI.arrUserObj[i];
                    index = i;
                    break;
                }
            }
            for(let i = index;i<=userObjUI.arrUserObj.length-1;i++){
                if(i!=userObjUI.arrUserObj.length-1){
                    [userObjUI.arrUserObj[i+1] , userObjUI.arrUserObj[i]] = [userObjUI.arrUserObj[i] , userObjUI.arrUserObj[i+1]];
                }
            };
            userObjUI.arrUserObj.pop();
            localStorage.setItem('arrUserObj',JSON.stringify(userObjUI.arrUserObj));
            const accountBox = document.querySelector('body #container .wrapper .accountBox');
            let boxPerson = '';
            for(let i = 0;i<accountBox.childElementCount;i++){
                if(selfMatricule == accountBox.children[i].matricule){
                    boxPerson = accountBox.children[i].cloneNode(true);
                    accountBox.children[i].remove();
                }
            }
            userObjUITrash.arrUserObjTrash.push(stockObj);
            const arrUserObjTrash = JSON.stringify(userObjUITrash.arrUserObjTrash);
            localStorage.setItem('arrUserObjTrash',arrUserObjTrash);
            userObjUITrash.displayUserObjTrash(stockObj);   
        });
    }
}

// class userObjUIArchive
class userObjUIArchive{
    static arrUserObjArchive = [];
    static userObjArchive = function(){
        if(localStorage.getItem('arrUserObjArchive') != null){
            userObjUIArchive.arrUserObjArchive = JSON.parse(localStorage.getItem('arrUserObjArchive'));
            userObjUIArchive.arrUserObjArchive.forEach(function(value){
                userObjUIArchive.displayUserObjArchive(value);
            })
        }
    }
    static displayUserObjArchive = function(self){
        const boxPerson = document.createElement('div');
        boxPerson.className = 'boxPerson';
        boxPerson.innerHTML = `
        <div class="headerPerson">                                                           
            <img src="${self.imgSrc}" alt="person profile">                                  
            <div class="infoPerson">                                                         
                <h5>${self.firstname} ${self.lastname}</h5>
                <span>${self.selectMembership}</span><i class="fa-solid fa-circle-check"></i>
            </div>
        </div>
        <div class="discriptionPerson">
        <span class="titleProduct">${self.titleProduct}</span>
            <span class="departmentType">${self.selectDepartmentype}</span>
            <p class="info">${self.discription}</p>
            </div>
            <div class="buttonEditePerson">                                              
            <div class="archives-Trash-button">                                      
                <input type="button" title="home" class="btnArchive"  value="Home"><input type="button" title="Delete" class="btnDelete" value="Delete">
                </div>
                <input type="button" title="Edite" class="btnEdite" value="Edite">
                </div>`;
        boxPerson.matricule = self.matricule;
        const accountBox = document.querySelector('body #container .areaArchives > .wrapper .accountBox'); 
        accountBox.insertBefore(boxPerson,accountBox.children[0]);
        userObjUIArchive.editeUserObj(boxPerson.querySelector('.buttonEditePerson .btnEdite'),boxPerson.matricule,boxPerson);
        userObjUIArchive.moveUserObjHome(boxPerson.querySelector('.buttonEditePerson .btnArchive'),boxPerson.matricule);
        userObjUIArchive.moveUserObjTrash(boxPerson.querySelector('.buttonEditePerson .btnDelete'),boxPerson.matricule);
    }
    static editeUserObj = function(btnEdite,selfMatricule,element){
        btnEdite.addEventListener('click',function(){
            closeAreaArchives.click();
            const popUpUpdateAccount = document.querySelector('body #container .popUpUpdateAccount');
            popUpUpdateAccount.classList.add('active');
            popUpUpdateAccount.querySelector('.form input[placeholder="First Name"]').focus();
            let obj = '';
            for(let i = 0;i<userObjUIArchive.arrUserObjArchive.length;i++){
                if(userObjUIArchive.arrUserObjArchive[i].matricule == selfMatricule){
                    obj = userObjUIArchive.arrUserObjArchive[i];
                    break;
                }
            }
            document.querySelector('body #container .popUpUpdateAccount .form .firstName').value = obj.firstname;
            document.querySelector('body #container .popUpUpdateAccount .form .lastName').value = obj.lastname;
            document.querySelector('body #container .popUpUpdateAccount .form .uploadProfile .imgUpload .img').src = obj.imgSrc;
            document.querySelector('body #container .popUpUpdateAccount .form select.s0').value = obj.selectMembership;
            document.querySelector('body #container .popUpUpdateAccount .form select.s1').value = obj.selectJob;
            document.querySelector('body #container .popUpUpdateAccount .form input.titleProduct').value = obj.titleProduct;
            document.querySelector('body #container .popUpUpdateAccount .form select.s2').value = obj.selectDepartmentype;
            document.querySelector('body #container .popUpUpdateAccount .form textarea').value = obj.discription;
            const btnSave = document.querySelector('body #container .popUpUpdateAccount .form .btnSave');
            btnSave.matricule = obj.matricule;
            btnSave.parentelement = element.parentElement.parentElement.parentElement.className;

        });
    }
    static upDateArrUserObj = function(selfMatricule,self){
        let index = 0;
        for(let i = 0;i<userObjUIArchive.arrUserObjArchive.length;i++){
            if(userObjUIArchive.arrUserObjArchive[i].matricule == selfMatricule){
                index = i;
                break;
            }
        }
        for(let i = index;i<=userObjUIArchive.arrUserObjArchive.length-1;i++){
            if(i!=userObjUIArchive.arrUserObjArchive.length-1){
                [userObjUIArchive.arrUserObjArchive[i+1] , userObjUIArchive.arrUserObjArchive[i]] = [userObjUIArchive.arrUserObjArchive[i] , userObjUIArchive.arrUserObjArchive[i+1]];
            }
        };
        userObjUIArchive.arrUserObjArchive.pop();
        userObjUIArchive.arrUserObjArchive.push(self);
        for(let i = userObjUIArchive.arrUserObjArchive.length-1 ;i > index;i--){
            [userObjUIArchive.arrUserObjArchive[i-1] , userObjUIArchive.arrUserObjArchive[i]] = [userObjUIArchive.arrUserObjArchive[i] , userObjUIArchive.arrUserObjArchive[i-1]];
        }
        localStorage.setItem('arrUserObjArchive',JSON.stringify(userObjUIArchive.arrUserObjArchive)); 
        btnArchives.click();
    }
    static moveUserObjHome = function(btnHome,selfMatricule){
        btnHome.addEventListener('click',function(){
            let stockObj = '';
            let index = 0;
            for(let i = 0;i<userObjUIArchive.arrUserObjArchive.length;i++){
                if(userObjUIArchive.arrUserObjArchive[i].matricule == selfMatricule){
                    stockObj = userObjUIArchive.arrUserObjArchive[i];
                    index = i;
                    break;
                }
            }
            for(let i = index;i<=userObjUIArchive.arrUserObjArchive.length-1;i++){
                if(i!=userObjUIArchive.arrUserObjArchive.length-1){
                    [userObjUIArchive.arrUserObjArchive[i+1] , userObjUIArchive.arrUserObjArchive[i]] = [userObjUIArchive.arrUserObjArchive[i] , userObjUIArchive.arrUserObjArchive[i+1]];
                }
            };
            userObjUIArchive.arrUserObjArchive.pop();
            localStorage.setItem('arrUserObjArchive',JSON.stringify(userObjUIArchive.arrUserObjArchive));
            const accountBox = document.querySelector('body #container .areaArchives > .wrapper > .accountBox');
            let boxPerson = '';
            for(let i = 0;i<accountBox.childElementCount;i++){
                if(selfMatricule == accountBox.children[i].matricule){
                    boxPerson = accountBox.children[i].cloneNode(true);
                    accountBox.children[i].remove();
                }
            }
            userObjUI.arrUserObj.push(stockObj);
            const arrUserObj = JSON.stringify(userObjUI.arrUserObj);
            localStorage.setItem('arrUserObj',arrUserObj);
            userObjUI.displayUserObj(stockObj);  
        });
    }
    static moveUserObjTrash = function(btnDelete,selfMatricule){
        btnDelete.addEventListener('click',function(){
            let stockObj = '';
            let index = 0;
            for(let i = 0;i<userObjUIArchive.arrUserObjArchive.length;i++){
                if(userObjUIArchive.arrUserObjArchive[i].matricule == selfMatricule){
                    stockObj = userObjUIArchive.arrUserObjArchive[i];
                    index = i;
                    break;
                }
            }
            for(let i = index;i<=userObjUIArchive.arrUserObjArchive.length-1;i++){
                if(i!=userObjUIArchive.arrUserObjArchive.length-1){
                    [userObjUIArchive.arrUserObjArchive[i+1] , userObjUIArchive.arrUserObjArchive[i]] = [userObjUIArchive.arrUserObjArchive[i] , userObjUIArchive.arrUserObjArchive[i+1]];
                }
            };
            userObjUIArchive.arrUserObjArchive.pop();
            localStorage.setItem('arrUserObjArchive',JSON.stringify(userObjUIArchive.arrUserObjArchive));
            const accountBox = document.querySelector('body #container .areaArchives > .wrapper > .accountBox');
            let boxPerson = '';
            for(let i = 0;i<accountBox.childElementCount;i++){
                if(selfMatricule == accountBox.children[i].matricule){
                    boxPerson = accountBox.children[i].cloneNode(true);
                    accountBox.children[i].remove();
                }
            }
            userObjUITrash.arrUserObjTrash.push(stockObj);
            const arrUserObj = JSON.stringify(userObjUITrash.arrUserObjTrash);
            localStorage.setItem('arrUserObjTrash',arrUserObj);
            userObjUITrash.displayUserObjTrash(stockObj);  
        });
    }
}

// class userObjUITrash
class userObjUITrash{
    static arrUserObjTrash = [];
    static userObjTrash = function(){
        if(localStorage.getItem('arrUserObjTrash') != null){
            userObjUITrash.arrUserObjTrash = JSON.parse(localStorage.getItem('arrUserObjTrash'));
            userObjUITrash.arrUserObjTrash.forEach(function(value){
                userObjUITrash.displayUserObjTrash(value);
            })
        }
    }
    static displayUserObjTrash = function(self){
        const boxPerson = document.createElement('div');
        boxPerson.className = 'boxPerson';
        boxPerson.innerHTML = `
        <div class="headerPerson">                                                           
            <img src="${self.imgSrc}" alt="person profile">                                  
            <div class="infoPerson">                                                         
                <h5>${self.firstname} ${self.lastname}</h5>
                <span>${self.selectMembership}</span><i class="fa-solid fa-circle-check"></i>
            </div>
        </div>
        <div class="discriptionPerson">
        <span class="titleProduct">${self.titleProduct}</span>
            <span class="departmentType">${self.selectDepartmentype}</span>
            <p class="info">${self.discription}</p>
            </div>
            <div class="buttonEditePerson">                                              
            <div class="archives-Trash-button">                                      
                <input type="button" title="Restore" class="btnRestore"  value="Restore"><input type="button" title="Delete" class="btnDelete" value="Delete">
                </div>
                <input type="button" title="Edite" class="btnEdite" value="Edite">
                </div>`;
        boxPerson.matricule = self.matricule;
        const accountBox = document.querySelector('body #container .areaTrash > .wrapper .accountBox'); 
        accountBox.insertBefore(boxPerson,accountBox.children[0]);
        userObjUITrash.restoreUserObjTrash(boxPerson.querySelector('.buttonEditePerson .archives-Trash-button .btnRestore'),boxPerson.matricule);
        userObjUITrash.deleteUserObjTrash(boxPerson.querySelector('.buttonEditePerson .archives-Trash-button .btnDelete'),boxPerson.matricule);
    }
    static restoreUserObjTrash = function(btnRestore,selfMatricule){
        btnRestore.addEventListener('click',function(){
            let stockObj = '';
            let index = 0;
            for(let i = 0;i<userObjUITrash.arrUserObjTrash.length;i++){
                if(userObjUITrash.arrUserObjTrash[i].matricule == selfMatricule){
                    stockObj = userObjUITrash.arrUserObjTrash[i];
                    index = i;
                    break;
                }
            }
            for(let i = index;i<=userObjUITrash.arrUserObjTrash.length-1;i++){
                if(i!=userObjUITrash.arrUserObjTrash.length-1){
                    [userObjUITrash.arrUserObjTrash[i+1] , userObjUITrash.arrUserObjTrash[i]] = [userObjUITrash.arrUserObjTrash[i] , userObjUITrash.arrUserObjTrash[i+1]];
                }
            };
            userObjUITrash.arrUserObjTrash.pop();
            localStorage.setItem('arrUserObjTrash',JSON.stringify(userObjUITrash.arrUserObjTrash));
            const accountBox = document.querySelector('body #container .areaTrash > .wrapper > .accountBox');
            let boxPerson = '';
            for(let i = 0;i<accountBox.childElementCount;i++){
                if(selfMatricule == accountBox.children[i].matricule){
                    boxPerson = accountBox.children[i].cloneNode(true);
                    accountBox.children[i].remove();
                }
            }
            userObjUI.arrUserObj.push(stockObj);
            const arrUserObj = JSON.stringify(userObjUI.arrUserObj);
            localStorage.setItem('arrUserObj',arrUserObj);
            userObjUI.displayUserObj(stockObj);  
        });
    }
    static deleteUserObjTrash = function(btnDelete,selfMatricule){
        btnDelete.addEventListener('click',function(){
            closeAreaTrash.click();
            const container = document.createElement('div');
            container.setAttribute('id','containerDeleteAccount')
            const wrapper = document.createElement('div');
            wrapper.className = 'wrapper';
            const h3 = document.createElement('h3');
            h3.textContent = 'Are you sure you want to delete this account ?';
            const buttons = document.createElement('div');
            buttons.className = 'buttons';
            const btnYes = document.createElement('input');
            btnYes.setAttribute('type','button');
            btnYes.setAttribute('value','Yes');
            btnYes.className = 'btnYes';
            const btnNo = document.createElement('input');
            btnNo.setAttribute('type','button');
            btnNo.setAttribute('value','No');
            btnNo.className = 'btnNo';
            buttons.append(btnYes,btnNo);
            wrapper.append(h3,buttons);
            container.append(wrapper);
            document.body.appendChild(container);
            // event for btnNo
            btnNo.onclick = function(){
                container.remove();
                btnTrash.click();
            }
            btnYes.onclick = function(){
                // container.classList.add('active');
                let index0 = 0;
                for(let i = 0;i<userObjUITrash.arrUserObjTrash.length;i++){
                    if(userObjUITrash.arrUserObjTrash[i].matricule == selfMatricule){
                        index0 = i;
                        break;
                    }
                }
                for(let i = index0;i<=userObjUITrash.arrUserObjTrash.length-1;i++){
                    if(i!=userObjUITrash.arrUserObjTrash.length-1){
                        [userObjUITrash.arrUserObjTrash[i+1] , userObjUITrash.arrUserObjTrash[i]] = [userObjUITrash.arrUserObjTrash[i] , userObjUITrash.arrUserObjTrash[i+1]];
                    }
                };
                userObjUITrash.arrUserObjTrash.pop();
                localStorage.setItem('arrUserObjTrash',JSON.stringify(userObjUITrash.arrUserObjTrash));
                const accountBox = document.querySelector('body #container .areaTrash > .wrapper > .accountBox');
                for(let i = 0;i<accountBox.childElementCount;i++){
                    if(selfMatricule == accountBox.children[i].matricule){
                        accountBox.children[i].remove();
                    }
                }
                let index1 = 0;
                for(let i = 0;i<userObj.matriculeArr.length;i++){
                    if(userObj.matriculeArr[i] == selfMatricule){
                        index1 = i;
                        break;
                    };
                }
                for(let i = index1;i<userObj.matriculeArr.length;i++){
                    if(i!=userObj.matriculeArr.length-1){
                        [userObj.matriculeArr[i+1] , userObj.matriculeArr[i]] = [userObj.matriculeArr[i] , userObj.matriculeArr[i+1]];
                    }
                }
                userObj.matriculeArr.pop();
                localStorage.setItem('matriculeArr',JSON.stringify(userObj.matriculeArr));
                console.log(selfMatricule);
                container.remove();
                btnTrash.click();
            }
        });
    }
}