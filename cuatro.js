var veces = prompt("Ingresa la cantidad de numeros a sumar: ");

var numeros;
var suma = 0;

for (var i = 0; i < veces; i++) {

        numeros = prompt("Ingresa tu valor " +(i+1));
        numeros = parseInt(numeros);
        suma = (suma + numeros);    
    
}
console.log("La suma de todos los numeros es: " + suma);
