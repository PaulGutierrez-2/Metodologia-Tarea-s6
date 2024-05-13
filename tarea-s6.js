'use strict'

let cont = 0
const claveCorrecta = 3214
let claveIngresada

do {
    if (cont > 3) break
    claveIngresada = Number(prompt("Ingrese la clave"))
    cont++
    if (claveCorrecta != claveIngresada) alert("Clave Incorrecta")
} while (claveCorrecta != claveIngresada);

alert(cont>3?"Bloqueo de tarjeta":"Operaciones exitosas")
