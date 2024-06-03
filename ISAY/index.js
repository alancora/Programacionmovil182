console.log('Hola');
//funcion
/*
function suma(a,b){ 
    return a+b
}
*/
//funcion fatArrow
/*
const suma=(a,b)=>{
    return a+b
}
*/
//funcion fatArrow simplificada 
/*
console.log(suma(2,3));
*/



/*const usuario={ 
    nombre:'Alan',
    apellido:'Cora',
    edad:22,
    direccion: { 
        pais:'Mexico',
        ciudad:'Qro',
        calle:'perrona'
    
    },
    
    
    
    
    amigos:[ 'cris','jocho'],
    estatus: true,
    enviaCorreo: enviarCorr=()=>'envian-do...'

}
//ppropiedades 
//console.log(usuario)
//console.log(usuario.direccion.calle)
//console.log(usuario.amigos)

//metodos
console.log(usuario.enviaCorreo())



*/

//Trabajo con el DOM

/*
const titulo= document.createElement('h1')
titulo.innerText='Soy un titulo creado con JS'
document.body.append(titulo)

const boton=document.createElement('button')
boton.innerText='Presioname'
document.body.append(boton)

boton.addEventListener('click',function (){
    //console.log('Evento click ejecutado')
    titulo.innerText="Evento click ejecutado"
    alert('Exito')
})
*/

//Trabajo con Arreglos
const nombres= ['Alan', 'Isa', 'Pablo', 'Juan Pablo']
/*
for (let i =0 ; i< nombres.length; i++){
    const elemento= nombres  [i]
    console.log(elemento)


}

nombres.forEach(function (nombre){
    console.log(nombre)
})*/
/*
const array2= nombres.map(function (nombre){
    console.log(nombre)
    return nombre
})

console.log(nombres)
console.log(array2)


//FUNCION FIND: Ubicar elementos en un arreglo
const resultado = nombres.find(function (nombre){
    if(nombre == 'Pablo')  {
    return nombre

   console.log(resultado) 
  */
  
  //FUNCION FILTER: RECORRE EL ARREGLO FILTRADO RESULTADO
  /*
  const resultado = nombres.find(function (nombre){
    if(nombre != 'Pablo') {
    return nombre
    if(nombre != 'Pablo') 
}   
})
    console.log(resultado) 
    console.log(nombres)
    
   */ 
    /*
    //FUNCION CONCAT:
    const edades=[78,89,12,8,10,15]
    console.log(nombres.concat(edades))

    console.log([...nombres, ...edades])

//MOSULOS: IMPORT & EXPORT

//import {suma, resta} from "./calculadora.js" 
import * as calc from "./calculadora.js"

console.log(calc.suma(45,54))
console.log(calc.suma(45,54))


//ejemplo de promesa

const ul= document.createElement('ul')


let datos= fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
console.log("Carga de datos completada")
return response.json()


}).then(function (data){
    console.log(data)
    data.forEach(function(pots){
        const li= document.createElement('li')
        li.innerHTML= post.title
        ul.append(li)

    })
document.body.append(ul)

})


console.log('Cargando HTML')
console.log('carga CSS')
console.log('Carga imagenes')

console.log(datos)



//EJEMPLO CON ASYNC AWAINT
const ul= document.createElement('ul')

async function cargarDatos(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos= await response.json()
    console.log(datos)
    datos.forEach(function(pots){
        const li= document.createElement('li')
        li.innerHTML= post.title
        ul.append(li)
    })
        document.body.append(ul)
}
cargarDatos()
console.log('Cargando HTML')
console.log('carga CSS')
console.log('Carga imagenes')



//examen

// Declarar el arreglo
let numeros = [9, 2, 8, 7, 5, 6, 6, 1, 3, 4, 2, 8, 1, 7, 6];

// Función asíncrona para generar el arreglo de pares
async function filtrarPares(numeros) {
  let pares = numeros.filter(num => num % 2 === 0);
  return pares;
}

// Función principal para ejecutar la tarea asíncrona y mostrar los resultados
async function main() {
  let pares = await filtrarPares(numeros);
  console.log("Arreglo original:", numeros);
  console.log("Arreglo de pares:", pares);
}

// Ejecutar la función principal
main();
*/

// Declarar el arreglo
let estudiantes = [
    { name: 'Mane', age: 15 },
    { name: 'Andrea', age: 22 },
    { name: 'Alma', age: 19 },
    { name: 'Emma', age: 29 },
    { name: 'Maria', age: 13 },
    { name: 'Luis', age: 16 },
    { name: 'Yair', age: 21 }
  ];
  
  // Función asíncrona para filtrar los estudiantes mayores de 18 años y guardar sus nombres
  async function filtrarEstudiantesMayores(estudiantes) {
    let nombresMayores = estudiantes
      .filter(estudiante => estudiante.age > 18)
      .map(estudiante => estudiante.name);
    return nombresMayores;
  }
  
  // Función principal para ejecutar la tarea asíncrona y mostrar los resultados
  async function main() {
    let nombresMayores = await filtrarEstudiantesMayores(estudiantes);
    console.log("Arreglo original:", estudiantes);
    console.log("Nombres de estudiantes mayores de 18 años:", nombresMayores);
  }
  
  // Ejecutar la función principal
  main();
  