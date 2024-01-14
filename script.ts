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
/*
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
// typeof para tipos: string boolean number
// instanceof para instancias : ejemplos fechas

*/


// fetching de datos en typescript

// quicktype.io esto sirve para copiar una API y y luego ver los tipos de cada dato
// esto devolvera el tipado 

/*
export type GithubRepo = {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
};

export type Item = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null | string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: Language | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: Visibility;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: DefaultBranch;
  score: number;
};

export enum DefaultBranch {
  Dev = "dev",
  Main = "main",
  Master = "master",
}

export enum Language {
  HTML = "HTML",
  JavaScript = "JavaScript",
  ObjectiveC = "Objective-C",
  TypeScript = "TypeScript",
}

export type License = {
  key: Key;
  name: Name;
  spdx_id: SpdxID;
  url: null | string;
  node_id: NodeID;
};

export enum Key {
  Apache20 = "apache-2.0",
  GPL30 = "gpl-3.0",
  MIT = "mit",
  Other = "other",
}

export enum Name {
  ApacheLicense20 = "Apache License 2.0",
  GNUGeneralPublicLicenseV30 = "GNU General Public License v3.0",
  MITLicense = "MIT License",
  Other = "Other",
}

export enum NodeID {
  MDc6TGljZW5ZZTA = "MDc6TGljZW5zZTA=",
  MDc6TGljZW5ZZTEz = "MDc6TGljZW5zZTEz",
  MDc6TGljZW5ZZTI = "MDc6TGljZW5zZTI=",
  MDc6TGljZW5ZZTk = "MDc6TGljZW5zZTk=",
}

export enum SpdxID {
  Apache20 = "Apache-2.0",
  GPL30 = "GPL-3.0",
  MIT = "MIT",
  Noassertion = "NOASSERTION",
}

export type Owner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
};

export enum Type {
  Organization = "Organization",
  User = "User",
}

export enum Visibility {
  Public = "public",
}

// esto tiene que ser en un modulo .mts
const API_URL = 'https://api.github.com/search/repositories?q=javascript'

const response = await fetch(API_URL)

if(!response.ok) {
    throw new Error('Request failed')
}
// el as dice que el await sera de tipo githubRepo
const data = await response.json() as GithubRepo

const repos = data.items.map( repos => {
    return {
        name : repos.id,
        id: repos.name,
        otro: repos.html_url
    }
})

*/

// LAS INTERFACES interface  ( las interface es como un molde )
// las interfaces son parecidas pero no son lo mismo que los type
/*
interface Heroe {
    id: string,
    name: string,
    age: number,
    saludar: () => void
}

const heroe : Heroe = {
    id: '1',
    name: 'spiderman',
    age: 20,
    saludar: () => {
        console.log( 'hola' )
    }
}

// otro ejemplo donde se puede sacar una interface de una interface
interface Producto {
    id: number
    nombre:string
    precio: number
    quantity: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: (Producto | Zapatilla)[]
}

const carrito: CarritoDeCompras = {
    totalPrice: 3400,
    productos: [
        {
            id: 1,
            nombre: 'shampo',
            precio: 230,
            quantity: 2
        },
        {
            id: 2,
            nombre: 'harina',
            precio: 346,
            quantity: 5
        }
    ]
}



// extender ua interface cosa que no hacen los types

interface Zapatilla extends Producto{
    talla: number
}

const zapatos: CarritoDeCompras = {
    totalPrice: 3400,
    productos: [
        {
            id: 1,
            nombre: 'adidas',
            precio: 230,
            quantity: 2,
            talla: 34
        },
        {
            id: 2,
            nombre: 'nike',
            precio: 346,
            quantity: 5,
            talla:23
        }
    ]
}

// otra manera de realizar extensiones péro que no es muy recomendada

interface devOp{
    line: string
    users: {
        name: string
        city: string
    }
}

interface devOp{
    done: boolean
}

let prueba: devOp = {
    line: 'hola mundo',
    users: {
        name: 'hector',
        city: 'maracay'
    },
    done:true
}

// nota las inteface no pueden hacer tipos primitivos ejemplo const RGB = [0,0,0]

// es mas recomendado usar mas tipos que interface pero para las clases es mejor usar interfarse

// NArrowing . es hacer un embudo de tipados osea si una variable tiene dos typos pero usar 
//el tipo dependiendo el escenario

function mostrarLongitud(objeto: number | string){
    if( typeof objeto === 'string'){
            return objeto.length;
    }
}

// otro ejemplo

interface Mario {
    company: 'nintendo', // aqui no se le coloca un tipado como tal si no un valor que no se podra cambiar
    nombre: string,
    saltar: () => void
}

interface Sonic {
    company: 'Sega',
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic
// primera manera

/*
function jugar ( personaje: Personaje){
    if (personaje.company === 'nintendo') {
        personaje.saltar()// este es mario
        return
    }
    // seguro que solo llega sonic
    personaje.correr()
}
*/

// segunda manera
//type guard
// comprobar si personaje es sonic
// esta funcion determina si es o no sonic
// es recomendable no usarlas mucho
/*
function checkIsSonic( personaje: Personaje): personaje is Sonic {
    return ( personaje as Sonic ).correr != undefined
}

function jugar( personaje: Personaje) {
    if(checkIsSonic(personaje)){
        personaje.correr()
    }
}

// otro ejeplo pero viendo el never
function fn(x: string | number){
    if( typeof x === 'string'){
        x.toLowerCase()
    } else if( typeof x === 'number'){
        x.toFixed(2)
    } else {
        console.log(typeof(x)) // que vendria siendo never
    }
}
*/

class Avengers {
    readonly  name: string
    private powerScore: number // nota a diferencia de # es que cuando compila a javascript aqui sera estatico
    public wonBattles: number = 0
    protected age: number = 0 // el protect proteje los datos de las instancias pero se pueden usar en las herencias
    constructor( name: string, powerScore: number){
        this.name = name
        this.powerScore = powerScore
    }

    get fullName() {
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number) {
        if (newPower <= 100) {
            this.powerScore = newPower
        } else {
            throw new Error('Power score cannot be more than 100')
        }
    }
}

let superHero = new Avengers('Spiderman',56)

// implementacion de interfaces en la clases

interface Hero {
    name: string
    powerScore: string
    wonBattles: number
    age: number
}

class Hero implements Hero {
    constructor( name: string,age:number ){
        this.name = name
        this.age = age
    }
}

