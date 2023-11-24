var bandera= false;

function validar() {
    if(bandera){
        console.log("Validacion completa");
    }
}

function correctCaptcha(){
    console.log("Captcha resuelto correctamente")
    bandera = true
}
