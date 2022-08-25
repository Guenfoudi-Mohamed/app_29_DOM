// app_29

const linkUpload = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .linkUpload');
linkUpload.onclick = function(){
    const inpFile = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .inpFile');
    inpFile.click();
}

const inpFile = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .inpFile');
inpFile.onchange = function(){
    /*Note :  this.files => property 'array' f object file li ktstocka fiha imgs li drna 3liha wahd check */
    const redear = new FileReader();
    redear.readAsDataURL(this.files[0]);
    redear.onload = function(){
        const img = document.querySelector('body .popUpAddAccount .form .uploadProfile .imgUpload .img');
        img.src = this.result;
    }
}