export function valida(input) {

    const tipoDeInput = input.dataset.tipo
    console.log(tipoDeInput)
    console.log(input.validity.valid)

        if(input.validity.valid) {
            input.parentElement.classList.remove("contacto__division--invalido");
            input.parentElement.querySelector(".contacto__error").innerHTML = "";
            console.log("valido")
        } else{
            input.parentElement.classList.add("contacto__division--invalido");
            input.parentElement.querySelector(".contacto__error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
            console.log("invalido")
        }  
    }


const tiposDeErrores = [
    "typeMismatch",
    "valueMissing"
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo de nombre no puede estar vacío"
    },
    email: {
        valueMissing: "El campo de correo no puede estar vacío",
        typeMismatch: "El correo que ingresaste no es valido"
    },
    asunto: {
        valueMissing: "El campo de asunto no puede estar vacío"
    },
    mensaje: {
        valueMissing: " El campo de mensaje no puede estar vacío"
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    tiposDeErrores.forEach( error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
}