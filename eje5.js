// 05 - propiedad
// Completa el código dentro de la función hasProperty
// Si el objeto de la variable object tiene la propiedad que recibe en la variable property, retorna true
// Sino retorna false

const hasProperty = (objecto, propiedad) => {
    if(objecto[propiedad]){
        return true;
    } else {
        return false
    }
//   return !!object[property];
};

const user = {
  username: "ada_lovelace",
  password: "1234567890!",
};

const user2 = {
  username: "grace_hopper",
  password: "1234567890!",
  email: "grace@hopper.com",
};

console.log(hasProperty(user, "email")); // false
console.log(hasProperty(user, "password")); // true
console.log(hasProperty(user, "id")); // false

console.log(hasProperty(user2, "email")); // true
console.log(hasProperty(user2, "password")); // true
console.log(hasProperty(user2, "id")); // false