
// PRIMERA PRE-ENTREGA DEL PROYECTO FINAL

class Ingreso{
    constructor(nombre = " ", apellido = " ", mail = " ", edad = 1 ,usuario = " ", contraseña = 1 ){

        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.edad = edad;
        this.usuario = usuario;
        this.contraseña = contraseña;

    }
}

function elegirUsuario(ingresarDatos){
    let nombreUsuario = prompt("Ingrese su nombre de usuario").toLowerCase()
    let usuarioBuscado = ingresarDatos.find(datos => datos.usuario == nombreUsuario)


    if(usuarioBuscado == undefined){
        alert("Nombre de usuario incorrecto")
    }else{
        console.log(usuarioBuscado)
    }
}


function contenidoAdultos (ingresarDatos){
    let edad = parseFloat(prompt("Ingrese su edad definida anteriormente"))
    let edadBuscada = ingresarDatos.filter(datos => datos.edad >= 18)

    if(edad < 18){
        alert("Tienes que ser mayor de 18 años para acceder a este contenido")
    }else{
        alert("Acceso permitido")
        console.log(edadBuscada)
    }
}
 

function eliminarUsuario(ingresarDatos){
    let usuarioEliminar = prompt("nombre de usuario a eliminar").toLowerCase()
    let indice = ingresarDatos.indexOf(usuarioEliminar)

    if(usuarioEliminar != -1 ){
        ingresarDatos.splice(indice, 1)
        alert("Usuario eliminado")
    }else{
        alert("El nombre de usuario ingresado no corresponde con nuestros datos")
    }
    console.log(ingresarDatos)
}

const ingresarDatos = []
let nombre, apellido, mail, edad, usuario, contraseña,  usuario2, contraseña2, agregarUsuarios


alert("Bienvenido! No tienes una cuenta iniciada? Creemos una ahora mismo!")

// Registrar al usuario

do{

    do{
        nombre = prompt("Ingrese su nombre").toLowerCase()
        apellido = prompt("Ingrese su apellido").toLowerCase()
        mail = prompt("Ingrese un correo electrónico").toLowerCase()
        edad = parseFloat(prompt("Ingrese su edad"))
        usuario = prompt("Cree un nombre de usuario para ingresar").toLowerCase()
        contraseña = parseFloat(prompt("cree una contraseña numérica para ingresar"))
    

        if(isNaN(edad) || isNaN(contraseña)){
            alert("Error de registro. Revisa nuevamente los datos ingresados")
        }else if(nombre.length != 0 && apellido.length != 0 && mail.length != 0 && usuario.length != 0){
            alert("Ingreso exitoso! Ahora inicia sesión para comenzar.")
        }else{
            alert("Error de registro. Revisa nuevamente los datos ingresados")
        }

    }while((nombre.length == 0 || apellido.length == 0 || mail.length == 0 || usuario.length == 0) || ( isNaN(edad) || isNaN(contraseña)))

    do{

        usuario2 = prompt("Ingrese nombre de usuario").toLowerCase()
        contraseña2 = parseFloat(prompt("Ingrese contraseña"))

        if(usuario2 == usuario && contraseña2 == contraseña){
            alert("Haz iniciado sesión correctamente! Disfruta del contenido que tenemos para vos!!")
        }else{
            alert("Usuario o contraseña incorrectos")
        }

    }while(usuario2 != usuario || contraseña2 != contraseña)

    const datos = new Ingreso(nombre, apellido, mail, edad, usuario, contraseña)
    ingresarDatos.push(datos)

    agregarUsuarios = prompt("Deseas ingresar más usuarios? Responda con si o no").toLowerCase()

}while(agregarUsuarios != "no")



do{
    acceder = parseInt(prompt(`Ingrese :
    1) Para elegir un usuario
    2) Para acceder al contenido de adultos
    3) Para eliminar una cuenta de usuario `))

}while(acceder < 1 || acceder > 3)


switch(acceder){
    case 1:
        elegirUsuario(ingresarDatos)
        break
    case 2:
        contenidoAdultos(ingresarDatos)
        break
    case 3:
        eliminarUsuario(ingresarDatos)
        break
    default:
        alert("Ingresa un número del 1 al 3")
        break

}

