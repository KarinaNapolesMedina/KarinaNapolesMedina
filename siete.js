var numero = prompt("Introduce un número positivo!");
var factorial = 1;

for(var i=1; i<=numero; i++) {
  factorial *= i;
}
console.log("La factorial de: " + numero + " es: " + factorial);
