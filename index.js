let informacionPersona = document.getElementById("nombrePersona");
let valueInformation = informacionPersona.value;

function mostrarNombrePersona() {
    let informacionPersona = document.getElementById("nombrePersona");
    let valueInformation = informacionPersona.value;

    let nombreMostrar = document.getElementById("nombreMostrar");
    let informationPerson = nombreMostrar.innerText = `Hola mi nombre es ${valueInformation}`;
    return informationPerson;
}