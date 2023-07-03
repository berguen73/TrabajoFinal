const esEmailValido = (email) => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email)
}

const enviarFormulario = () => {
    let formularioCorrecto = true;
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // Error de required
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        formularioCorrecto = false;
    } else if (nombreInput.value.trim().length < 4) {
        // Error de minLength
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 4 caracteres";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-nombre').innerHTML = "";
    }

    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() == "") {
        //error de required
        document.getElementById('error-email').innerHTML = "El e-mail es requerido";
        formularioCorrecto = false;
    } else if (!esEmailValido(emailInput.value)) {
        //error de formato
        document.getElementById('error-email').innerHTML = "Dirección de E-mail incorrecta";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-email').innerHTML = "";
    }

    const mensajeInput = document.getElementById('mensaje');
    if (mensajeInput.value.trim() == "") {
        //error de required
        document.getElementById('error-mensaje').innerHTML = "El mensaje es requerido";
        formularioCorrecto = false;
    } else if (mensajeInput.value.trim().length< 20) {
        //error de formato
        document.getElementById('error-mensaje').innerHTML = "El mensaje debe tener al menos 20 caracteres";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-mensaje').innerHTML = "";
    }

    const selecInstrumento = document.getElementById ('instrumento');
    


    const instrumento = document.getElementById('instrumento');
    const servicio = document.getElementById('servicio');
    const mensaje = document.getElementById('mensaje');


    const notificaciones = document.getElementById("notificaciones");
    if (formularioCorrecto) {
      console.log("Nombre:", nombreInput.value);
      console.log("Email:", emailInput.value);
      console.log("Instrumento:", instrumento.value);
      console.log("Servicio:", servicio.value);
      console.log("Mensaje:", mensaje.value);
    } else {
      console.log("Formulario incorrecto")
    }

}






const incializarJs = () => {
    const boton = document.getElementById("btn-enviar");
    boton.addEventListener('click', function (e) {
        enviarFormulario();
    });
}

window.addEventListener('load', incializarJs);