// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

function separar (perrosYGatos) {
    let array = perrosYGatos.split('');
    let ordenado = array.sort();
    return ordenado.join('');
}



console.log(separar('PGPGGPP')) // '🐶🐶🐶🐶🐱🐱🐱'