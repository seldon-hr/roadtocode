var miNombre = "Diego"; 

function nombre() {
    miNombre = "Alonso";
    return miNombre;
}

nombre();

console.log(miNombre);




var miNombre = "Diego"

function nombre() {
    var miApellido = "De Granda"; 
    return miNombre + " " + miApellido 
}

nombre();

console.log(miNombre);
console.log(miApellido);