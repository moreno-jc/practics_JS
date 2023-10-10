let sueldofinal;
let sueldonormal = 10;
let sueldodoble = 20;
let horastrabajadas = 65;
let horasextra;



function calculodesueldo() {

    if (horastrabajadas < 40 ) {
        
    sueldofinal = horastrabajadas * sueldonormal;
   
    } 
    else{
        horasextra = (horastrabajadas - 40) * sueldodoble ;
        sueldofinal = horasextra  + 400;
        
    }
}

calculodesueldo ();
console.log(sueldofinal);


// Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().

let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre", "octubre","noviembre","diciembre"];

meses.forEach(element => {
    console.log(element);
});



/*Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. 
La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. 
Usa el bucle que quieras para solucionarlo.*/

function sumarPares(numeros) {
    let suma = 0
    for (let i = 0; i< numeros.length; i++){
        if (numeros[i] % 2 === 0) {
            suma += numeros[i];
        }
      }
    return suma
  }



//validar y extraer solo las edades de las personas son mayores de edad

let personas = [18,27,57,16,25,33,12];

function validarEdad(personas) {
    const personasMayores = personas.filter(persona => persona >= 18);
    console.log(personasMayores);
}

// Validar si Todos los strings son mayores a 3 caracteres?
const names = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) 

//Crear una función que reciba un array de palabras y devuelva true 
//si todas las palabras terminan con la letra "a" y false si al menos
// una palabra no termina con la letra "a".

function acabanEnA(words) {
    return words.every(words => words.endsWith("a"));
  }


//ordenar los números de menor a mayor

let numeros = [5, 10, 2, 25, 7]

numeros.sort(function(a, b) {
  return a - b
})

console.log(numeros) // [2, 5, 7, 10, 25]

// ordenarlos de manera descendente, de mayor a menor,

let num = [5, 10, 2, 25, 7]

num.sort(function(a, b) {
  return b - a
})

console.log(num)

