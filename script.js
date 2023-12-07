// split
// Nos permmite dividir en partes una string o un array

// En caso de una string
// si no le pasamos nada, pone toda la string junta en un array
'Hola buenas tardes, soy fati'.split()
// ['Hola buenas tardes, soy fati']

// si le pasamos '', separa cada caracter en un lugar del array
'Hola buenas tardes, soy fati'.split('')
// [
//     'H', 'o', 'l', 'a', ' ', 'b',
//     'u', 'e', 'n', 'a', 's', ' ',
//     't', 'a', 'r', 'd', 'e', 's',
//     ',', ' ', 's', 'o', 'y', ' ',
//     'f', 'a', 't', 'i'
//   ]

// si le pasamos un caracter, divide segun ese caracter
'Hola buenas tardes, soy fati'.split('a')
// [ 'Hol', ' buen', 's t', 'rdes, soy f', 'ti' ]

