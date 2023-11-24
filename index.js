var bandera= false;

function validar() {
    alert($('#user').val());

    var user = document.getElementById("user");
    alert("Tu usuario es:"+user.value+"Contraseña:" +password.value);
}

function validar() {
    if(bandera){
        console.log("Validacion completa");
    }
}

function correctCaptcha(){
    console.log("Captcha resuelto correctamente");
    bandera = true;
}
