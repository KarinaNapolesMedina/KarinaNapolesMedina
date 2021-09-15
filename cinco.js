var a = e = i = o = u = 0;
letras = pedirT();
function pedirT(){
    var texto = prompt("escribe una palabra o frase");
    var textod = texto.toLowerCase(); //el texto ingresado el toLowerCase devuelve la cadena en minusculas
    return textod;
}        
for(k=0;k < letras.length;k++){
    
    switch(letras[k]){
        case "a":
            a++;
            break;
        case "e":
            e++;
            break;
        case "i":
            i++;
            break;
        case "o":
            o++;
            break;
        case "u":
            u++;
            break;
    }
}
total = a+e+i+o+u;
total = parseInt(total);
console.log("El numero de vocales que aparecen en el texto son: " + total);
