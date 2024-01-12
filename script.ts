// los tipos de datos usados en javascript son usados en type

// extension de typescript en vsc para ver errores pretty typescript errors

// los tipos de datos se puede colocar su tipo tan manual como typescript lo puede hace automaticamente

// inferir es laccion que realiza type script para tipar un dato dependiendo el valor que se le carga

// const nombre = 'hector'
// let nombres: string = 'juan';
// 
// const numero = 2
// let numeros: number = 34
// 
// const nova = null;
// const varios: null = null
// 
// const nodef = undefined
// let unico: undefined = undefined
// 
// // dato any = cualquier tipo de dato y que ignore el tipado de typescript
// 
// const anyValue: any = 'valor'
// 
// // unknown = es cuando no se sabe que tipo de dato es 
// 
// const nosabe: unknown = 'general'
// 
// // funciones 
// 
// function saludar( name: string){
//     console.log(`hola ${name}`)
// }
// 
// saludar('jose')
// 
// // funciones recibiendo objetos como argumentos
// 
// // Recibiendo el any de manera implicita
// function contactor ( {marca, bobina} ){
//     console.log( `el contactor marca : ${marca} y la bobina es de ${bobina}V` )
// }
// 
// // 1er manera 
// function rele ( {marca, bobina}: {marca: string, bobina: number} ){
//     console.log(`el contactor marca : ${marca} y la bobina es de ${bobina}V`);
// }
// 
// // 2da manera
// function relevador( dispocitivo: {marca: string, bobina: number}){
//     let {marca, bobina} = dispocitivo
//     console.log(`el contactor marca : ${marca} y la bobina es de ${bobina}V`);
// }
// 
// // los retornos si tienen inferencias

// function rele ( {marca, bobina}: {marca: string, bobina: number} ){
//     console.log(`el contactor marca : ${marca} y la bobina es de ${bobina}V`)
//     return bobina
// }

// otra manera de realizar tipado del retorno
// 
// function rele ( {marca, bobina}: {marca: string, bobina: number}): number{
//     console.log(`el contactor marca : ${marca} y la bobina es de ${bobina}V`)
//     return bobina
// }
// 
// let allenbradley = rele( {marca: 'siemens', bobina:24} )
// 
// // callback
// const manzanas = (fn: (name: string) => void) => { // NOTA: cuando la funcion no devueve nada se coloca void
//     fn('fruta')                             // si retorna algn valor se coloca el tipo ejemplo string
// }                                           // si no le pasas nada colocara undefined
// 
// const fruta = (name: string) => {
//     console.log(name)
// }
// 
// manzanas( fruta )
// 
// 
// //tipar las arrow functions
// // forma 1
// const sumar = ( a: number, b: number) : number => {
//     return a + b
// }
// 
// // forma 2
// const resta : ( a: number,b: number) => number = (a,b) => {
//     return a - b
// }
// 
// // never nunca devolvera nada
// function throwError( message: string):never{
//     throw new Error( message );
// };


// // un arreglo de string por inferencia
// const avengers = ['spideman','iroman','antman','hulk']
// 
// // funcion anonima por inferencia
// avengers.forEach( ( avengers ) => {
//     console.log( avengers )
// })


// objetos : estos pueden hacer inferencia 

// let contactor = {
//     marca: 'siemens',
//     corriente: 25,
//     operativo: true
// }
// 
// let dispocitivo = ( marca: string, corriente: number, operativo: boolean){
//     return {marca,corriente,operativo}
// }
// 
// let rele = dispocitivo( 'schneider',24,false )

// type alias 
// los alias deben empezar en mayuscula
// type Contactor = {
//     marca: string,
//     corriente: number,
//     operativo: boolean
// }
// 
// let contactor : Contactor = {
//     marca: 'siemens',
//     corriente: 25,
//     operativo: true
// }
// 
// let dispocitivo = ( marca: string, corriente: number, operativo: boolean): Contactor => {
//     return {marca,corriente,operativo}
// }
// 
// let rele = dispocitivo( 'schneider',24,false )
// 
// let proteccion = {
//     marca: 'abb',
//     corriente: 10,
//     operativo: false
// }
// 
// function guardamotor ( proteccion: Contactor) : Contactor{
//     let { marca,corriente,operativo } = proteccion
//     return { marca,corriente,operativo }
// }
// 
// guardamotor ( {marca: 'siemens',corriente: 5,operativo: false})

//optional property

// type idContacto = `${string}-${string}-${string}-${string}-${string}` // template union types
// type Contactor = {
//     readonly id?: idContacto; // se coloca el readonly cuando se quiera que la propiedad solo sea de lectura
//     marca: string;
//     corriente: number;
//     operativo: boolean;
//     existencia?: boolean; // se le coloca el signo ? al final para decir que esta propiedad es opcional si no se coloca sus instancias daran error
// };

// let contactor : Contactor = {
//     marca: 'siemens',
//     corriente: 25,
//    operativo: true,
// }

// let dispocitivo = ( marca: string, corriente: number, operativo: boolean): Contactor => {
//     return {id:crypto.randomUUID(),marca,corriente,operativo}
// }

// let rele = Object.freeze(dispocitivo('siemens',2,true)) // el Object.freeze hace que el codigo sea inmutable

// contactor.existencia = false

// contactor.existencia ?? true // esto se hace para colocar un valor por defecto

// la diferencia de readonly y Object.freeze es que readonly no sera compilado a js en cambio Object si

// template union types

// type hexadecimalColor = `#${string}`
// const color: hexadecimalColor= '0033ff' // como no tiene el # dara el error
// const color2: hexadecimalColor = '#0033ff' // este si posse el # por ese no da el error

// union types
/*
type variador = "local" | "remoto" | "ethernet" | "modbus" | "serial"; // union types

let bornera: string | number // esto quiere decir que la variable puede se string o number

let regleta : string | 20 // esto quiere decir que la variable puede se string o 20

type idContacto = `${string}-${string}-${string}-${string}-${string}`; // template union types

type Contactor = {
    readonly id?: idContacto; 
    marca: string;
    corriente: number;
    operativo: boolean;
    existencia?: variador; 
};

let contactor: Contactor = {
    marca: "siemens",
    corriente: 25,
    operativo: true,
};

let dispocitivo = (
    marca: string,
    corriente: number,
    operativo: boolean
): Contactor => {
    return { id: crypto.randomUUID(), marca, corriente, operativo };
};
*/

// let termico = dispocitivo('siemens',3,true)

// termico.existencia = 'remoto' // si se coloca un valor que no este cargado en el type dara error
// termico.existencia = "local"; // si se coloca un valor que no este cargado en el type dara error

// intersection types 

// type heroBasic = {
//    name : string
//    age : number
// }

// type heroProperty = {
//    isActive? : boolean
//     powerScale? : string
// }

// intersection types 
// type Hero = heroBasic & heroProperty // intersection types 

// let hero: Hero = {
//     name: 'thor',
//     age: 1500
// } 


// function createHero(input: heroBasic): Hero {
//     const { name, age } = input

//     return {
//         name,age,isActive : true, powerScale : 'exito'
//     }
// }

// type index
/*
type HeroProperties = {
    isActive: boolean,
    address: {
        planet: string,
        city: string
    }
}

const addressHero : HeroProperties['address'] = {
    planet: 'tierra',
    city : 'madrid'
}

// type from value con el typeof se extrae el tipo de una funcionobjeto etc

const address = {
    planet: 'tierra',
    city: 'maracay'
}

type Address = typeof address

const adressYoutube: Address = {
    planet: 'venus',
    city: 'maracay'
}


// type from function return
function createAdress() {
    return {
        planet: "venus",
        city: "maracay",
    };
}

type addgos = ReturnType<typeof createAdress>

// array
const lenguaje = [] // si se declara asi el tipo de dato sera never
const lenguajes: string[] = []  // una manera
const programacion : Array<string> = [] // otra manera
const programadores :( string | number )[] = [] // o es string o es number
const heroes: HeroProperties[] = [] //de tipo heroProperty
lenguajes.push('javascript')


let matriz: array[][] = []
type CellValue = 'X' | 'O' | ''
// Y A ESTO SE LE LLAMA TUPLA OSEA UN ARREGLO CON UNA TAMAÑO DEFINIDO 
type gameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
];
const gameBoard: gameBoard = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
]; 

//tuplas
*/

type RGB = [number,number,number]

let color : RGB = [255,6,34]

// las tuplas son mutables 

color.push(34); // esto agrega otro indice a las tuplas coa que no deberia

// para areglar esto se le coloca un readonly en el type de la tupla

// enumeraciones

enum ERROR_TYPES { // esto genera mucho codigo por eso en ocaciones se le agrega el const para no generar cogigo de mas
    NOT_FOUND,     // cuando se quiera creear una biblioteca o que se use afuera es mejor no colocarle el const
    UNAUTHORIZED,
    FORBIDDEN
}

function mostrarMensaje ( tipoDeError : ERROR_TYPES ) {
    if(tipoDeError === ERROR_TYPES.NOT_FOUND){
        console.log( 'no se encuentra el recurso' )
    } else if(tipoDeError === ERROR_TYPES.UNAUTHORIZED){
        console.log( 'no tienes permisos para acceder' )
    } else if(tipoDeError === ERROR_TYPES.FORBIDDEN) {
        console.log('no tienes permisos para acceder')
    }
}

// los enum puede servir para coleccion de datos finitos

// ASERCIONES DE TIPO

const canvas = document.getElementById('canvas')
// a esto se le llama recuperar un elemento en este caso es de tipo canvas
// y para hacer esto se hace de la siguiente manera
if( canvas != null && canvas instanceof HTMLCanvasElement){
    const ctx = canvas.getContext('2d') // Este metodo solo es de este html
}

const button = document.getElementById('button')
// es inferencia -> typescript se da cuenta que dentro del if 
// ya solo el button va a poder ser un HTMLButtonElement
if (button != null && button instanceof HTMLButtonElement){
    const ctx = button.getAttribute('jjj')
}

// 41:50


