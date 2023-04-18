let age = "Mayor"; //inferencia de datos


let age1: number = 20


// Tipos principales de datos
let edad: string = "20"
let meses: number= 10
let booleano: boolean = true
let person : Object = {}

let frutas: string[] = ["manzana","pera"]
let response : any = "hola"  // puede ser cualquier tipo de dato
response = 20
response = true

// Evitar el uso de any


function saludar(): void {
    console.log("Hola")
}

let response2: unknown;
response2 = true;
if (response2){

}

let response3 = null  // retorna valor vacio o nulo
let response4 = undefined // nunca ha tenido un valor



//-----------------------Combinacion de tipos-----------------

type response = string|undefined // crear tipo de respuestas


let response5 : number | undefined;
response5?.toString();

let response6 : response
let response7 : response


// Type ASSERTION
let message : any = "";

// Casteo 
// (message as string).length

let messageUppercase = <string>message;
messageUppercase.toUpperCase();

const canvas = document.getElementById("canvas") as HTMLCanvasElement // son lo mismo
// const canvas = <HTMLCanvasElement>document.getElementById("canvas")


