// 04 - email
// Partiendo de un objeto guardado en la variable user
// Verificar si tiene la propiedad email
// Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
// Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'

const user = {
  username: "ada_lovelace",
  password: "1234567890!",
  email:'fati@gmail.com'
};

if(user.email){
    console.log('El usuario tiene la propiedad email')
} else {
    console.log('El usuario no tiene la propiedad email')
}