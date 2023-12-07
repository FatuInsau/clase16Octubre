// Objetos
// vamos a tener propiedades con su nombre y su valor
let perrito = {
    nombre: 'Negrito',
    edad: 4,
    vacunado: true,
    apodos: ['Carbon','muchacho'],
    saludar: () => 'Guau',
    cumpleaños: () => {this.edad++}
}

// como acceder a las propiedades
perrito.edad++
perrito.vacunado = false

// si la propiedad no existe le agrega la propiedad
perrito.raza = 'Salchicha'


// Otra forma de acceder a las propiedades
let resultado = 'edad';

perrito[resultado]
perrito['edad']

// Object.keys
// me genera un array con las propiedades del objeto
let propiedades = Object.keys(perrito)


// propiedades.forEach( (propIndividual) => {
//     console.log(perrito[propIndividual])
// } )

perrito.cumpleaños()
console.log(perrito)