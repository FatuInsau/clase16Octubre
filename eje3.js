// 01 - persona
// Declarar una variable con el nombre propiedadNombre y asignar el valor nombre
let propiedadNombre = 'nombre';

// Declarar una variable con el nombre propiedadEdad y asignar el valor edad
let propiedadEdad = 'edad';

// Crear un objeto persona con las propiedades nombre y edad
// Asignar a las propiedades del objeto persona tu nombre y edad

let persona = {
    nombre: 'fati',
    edad:25
};

// Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
console.log( persona['nombre'] )
console.log( persona['edad'] )

// Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedadNombre y propiedadEdad

console.log( persona[propiedadNombre] )
console.log( persona[propiedadEdad] )
