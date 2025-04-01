document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    calcularAñosDeExperiencia();
    casoEmergencia();
});
let conteoDelPuntaje = 0;
function calcularAñosDeExperiencia() {
    const experiencia = parseInt(document.getElementById("experiencia").value);
    console.log(`experiencia: ${experiencia}`)
    const totalExperiencia = Math.floor(experiencia / 12);
    conteoDelPuntaje += totalExperiencia;
    console.log(`total experiencia ${conteoDelPuntaje}`)
};
function casoEmergencia() {
    if (document.getElementById("protocolo").checked) conteoDelPuntaje += 15;
    if (document.getElementById("correr").checked) conteoDelPuntaje += 10;
    if (document.getElementById("saltar").checked) conteoDelPuntaje += 5;
    if (document.getElementById("dormir").checked) conteoDelPuntaje += 0;
    console.log(conteoDelPuntaje)
};