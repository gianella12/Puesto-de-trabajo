document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    calcularAñosDeExperiencia();
    casoEmergencia();
    experienciaConMaterialRadiactivo();
    comerDonas();
    mostrarPuestoDeTrabajo();
});
let conteoDelPuntaje = 0;
function calcularAñosDeExperiencia() {
    const experiencia = parseInt(document.getElementById("experiencia").value);
    console.log(`experiencia en meses: ${experiencia}`)
    const totalExperiencia = Math.floor(experiencia / 12);
    conteoDelPuntaje += totalExperiencia;
    console.log(`total de experiencia en años ${conteoDelPuntaje}`)
};
function casoEmergencia() {
    if (document.getElementById("protocolo").checked) conteoDelPuntaje += 15;
    if (document.getElementById("correr").checked) conteoDelPuntaje += 10;
    if (document.getElementById("saltar").checked) conteoDelPuntaje += 5;
    if (document.getElementById("dormir").checked) conteoDelPuntaje += 0;
};
function experienciaConMaterialRadiactivo(){
    if(document.getElementById("material-radiactivo").checked) conteoDelPuntaje += 10;
    console.log(`total con experiencia en material radiactivo: ${conteoDelPuntaje}`)
}
function comerDonas(){
    const donasComidas = document.getElementById("donas").value;
    conteoDelPuntaje -= donasComidas
    console.log(`total excluyendo las donas comidas ${conteoDelPuntaje}`)
}
function mostrarPuestoDeTrabajo(){
    const seccionFormulario = document.querySelector("#form");
    seccionFormulario.style.display = 'none';

   const puntajeFinal = Math.floor(conteoDelPuntaje)
   const puesto = document.getElementById("respuesta-del-puesto")
//    puesto.style.display = 'block';
   if(puntajeFinal <= 15) puesto.innerText = "El puesto que te corresponde es el de MANTENIMIENTO.";
   if(puntajeFinal >= 16 && puntajeFinal <= 25) puesto.innerText = "El puesto que te corresponde es el de OPERATIVO.";
   if(puntajeFinal >= 26 && puntajeFinal <= 35) puesto.innerText = "El puesto que te corresponde es el de TECNICO.";
   if(puntajeFinal >= 36) puesto.innerText = "El puesto que te corresponde es el de INGENIERO."
}