function validar_Formulario(){
    let parrafo = document.getElementById("error");
    let nombre =  document.formulario.firstname.value;
    // let genero=   document.formulario.genero.value; me da error y no lo pude arreglar
    let email =   document.formulario.email.value;
    let emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let motivo= document.formulario.motivo.selectedIndex;
    let consulta= document.formulario.consulta.value;

    // tu nombre
    if( nombre.length <=2){
        document.formulario.firstname.focus();
        parrafo.innerHTML= "Nombre incorrecto";
        return false; //Para evitar el envio
    }

    // formato del email
    if (!emailRegex.test(email)){
        document.formulario.email.focus();
        parrafo.innerHTML = " direccion de e-mail es inválida";
        return false;  //Para evitar el envio
    }
    // ANALIZO SI SELECCIONÓ DE FORMA CORRECTA
    if(motivo == 0){
        // alert("Debe seleccionar un motivo de su contacto.")
        document.formulario.motivo.focus();
        parrafo.innerHTML = "Seleccione motivo.";
        return false;
    }
    if(consulta.length <= 1){
        // alert("Debe escribir una consulta.")
        document.formulario.consulta.focus();
        parrafo.innerHTML = "Escriba una consulta.";
        return false;
    }
    // if( genero == 0){
    //     // alert("Debe seleccionar un genero.")
    //     document.formulario.genero.focus();
    //     parrafo.innerHTML = "Seleccione el genero.";
    //     return false;
    // }

    parrafo.innerHTML= "";  // limpiar mensaje de error previo
    return true;
}