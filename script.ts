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

//57:02