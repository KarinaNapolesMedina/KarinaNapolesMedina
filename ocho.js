var veces = 6;
var numeros=0;
var suma1 = 0;
var suma2 =0
var con=0;

for (var i = 0; i < veces; i++) {

        numeros = prompt("Ingresa tu valor " +(i+1));

        if (numeros > 0) {
            numeros = parseInt(numeros);
            con++;
            suma1 = (suma1 + numeros);
            
           
            
        }if(numeros < 0){
            numeros = parseInt(numeros);
            suma2 = (suma2 + numeros);
            
        }   
    
}
console.log("La suma de todos los positivos es: " + suma1);
console.log("La suma de todos los negativos es: " + suma2);
