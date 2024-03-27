//Así comienzo a anotar lo pedido en el ejercicio

function clasificarNota(nota) {

    if (nota < 4) {
        return "LIBRE";
    } else if (nota < 7) {
        return "REGULAR"
    } else if (nota > 6) {
        return "PROMOCIONADO";
    }
    

   }
let nota = 4
let notaclasificada = clasificarNota (nota)
console.log (clasificarNota(3))
 

