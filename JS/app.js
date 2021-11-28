const nombre = document.querySelector('.nombre');
const email = document.querySelector('.email');
const tel = document.querySelector('.telefono');
const mensaje = document.querySelector('.mensaje');
const enviar = document.querySelector('.Enviar');


function evento_enviar() {
    console.log(nombre.value);
    console.log(email.value);
    console.log(tel.value);
    console.log(mensaje.value);
    console.log('Formulario enviado'); 
    /* console.log('NUMERO DE CLICKS'); */
}

function evento_nombre() {
    console.log('Numero de veces que se ha entrado en nombre');
} 

nombre.addEventListener('input', evento_nombre);

function evento_email() {
    console.log('Numero de veces que se ha entrado en email');
} 

email.addEventListener('input', evento_email);

function evento_tel() {
    console.log('Numero de veces que se ha entrado en telefono');
} 

tel.addEventListener('input', evento_tel);

function evento_mensaje() {
    console.log('Numero de veces que se ha entrado en mensaje');
} 

mensaje.addEventListener('input', evento_mensaje);

// enviar.addEventListener('click', evento_enviar);

function mostrarDatos(){
    // alert("Desde la funcion mostrarDatos")

    const nombre = document.querySelector(".nombre")//declarando una constante para guardar el color favorito
    console.log(nombre.value)

    const email = document.querySelector(".email")//declarando una constante para guardar el color favorito
    console.log(email.value)

    const telefono = document.querySelector(".telefono")//declarando una constante para guardar el color favorito
    console.log(telefono.value)

    const msj = document.querySelector(".mensaje")//declarando una constante para guardar el color favorito
    console.log(msj.value)
}


