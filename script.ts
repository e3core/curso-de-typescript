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

function rele ( {marca, bobina}: {marca: string, bobina: number}): number{
    console.log(`el contactor marca : ${marca} y la bobina es de ${bobina}V`)
    return bobina
}

let allenbradley = rele( {marca: 'siemens', bobina:24} )

// callback
const manzanas = (fn: (name: string) => void) => { // NOTA: cuando la funcion no devueve nada se coloca void
    fn('fruta')                             // si retorna algn valor se coloca el tipo ejemplo string
}                                           // si no le pasas nada colocara undefined

const fruta = (name: string) => {
    console.log(name)
}

manzanas( fruta )

//44:18
