const products= ["Lata pintura", "escalera", "cepillo", "rodillo", "pincel", "guantes","pigmento"]

let usuarioBase = "pepe"
let pass = "asd"

function login(intentos, maximosIntentos)
{
  let usuarioIngresado = prompt("Ingrese su usuario: ")
  let usuarioIngresadoLower = usuarioIngresado.toLocaleLowerCase()
  let datoIngresado = prompt("Ingrese su contraseña.")
  let datoIngresadoLower = datoIngresado.toLocaleLowerCase()

  if((usuarioIngresadoLower === usuarioBase) && (pass === datoIngresadoLower)){
    alert("¡Bienvenido!")
    return true
  } else {
    alert (`Le quedan ${maximosIntentos-(intentos+1)} intentos`)
    return false
  }
}

function bucleLogin(intentos, maximosIntentos){
// ciclo que maneja la cantidad de veces que se puede realizar el login
  do{
    if(login(intentos, maximosIntentos))
    {
      return true
    }
    else{
      intentos++
    }
  }while(intentos < maximosIntentos)
  return false
}

const viewProductos=()=>{
  let verTodos = false
  verTodos = confirm("Quiere ver todos los productos")
  if(verTodos === true){
    alert("Los productos son: " + products.join(" - "))
  }
  else{
    let verProduct = prompt("¿Que producto desea ver?: ")
    verProduct.toLocaleLowerCase()
    viewProducto(verProduct)
  }
}

const viewProducto=(verProduct)=>{
    let encontrado = false
    for(let i = 0; i < products.length; i++){
      if(verProduct === products[i]){
        alert(verProduct)
        encontrado = true
      }
    }
    if(!encontrado){
      alert("No existe el producto.")
    } 
}

const addProducto=()=>{
  let newProduct = prompt("¿Que producto desea agregar?: ")
  newProduct.toLocaleLowerCase()
  let encontrado = false
    for(let i = 0; i < products.length; i++){
      if(newProduct === products[i]){
        alert("Producto ya registrado")
        encontrado = true
      }
    }
    if(!encontrado){
      products.push(newProduct)
      alert("Producto dado de alta correctamente")
    }
}

const changePass=()=>{
  let newPass = prompt("Ingrese contraseña nueva: ")
  newPass.toLocaleLowerCase.toString()
  pass = newPass
  alert("Contraseña cambiada exitosamente")
}


const eleccionMenuInteractivo=()=>{
  // Devuelve la opcion que quiere el usuario
  let opcion = prompt("Que desea hacer: \n 1 - Ver producto/s \n 2 - Agregar producto \n 3 - Cambiar contraseña  \n 4 - Salir")
  return parseInt(opcion)
}

const menuInteractivo=(opcion)=>{
  // Menu
  switch(opcion)
  {
    case 1:
      {
        viewProductos();
        break
      }
    case 2:
      {
        addProducto();
        break
      }
    case 3:
      {
        changePass();
        break
      }
    case 4:
      {
        exit
      }
  }
}

const inicializar = ()=>{
  let intentos = 0
  const maximosIntentos = 3
  ingreso = false
  do{
    if(bucleLogin(intentos, maximosIntentos))
    {
      intentos = 5
      ingreso = true
      // seleccion una vez ya loggeado el usuario
      let opcion = eleccionMenuInteractivo()
      menuInteractivo(opcion)
    }
    else{
      intentos = 5
    }
} while(intentos<3)

  if(ingreso === true){
  let bucle = true
  while(bucle)
  {
    bucle = confirm("¿Desea continuar?")
    if(!bucle)
    {
      exit
    }
    else{
      opcion = eleccionMenuInteractivo()
      menuInteractivo(opcion)
    }
    
  }
}
}

inicializar()
