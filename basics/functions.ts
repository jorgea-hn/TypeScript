

const sayHi = (name)=>{
    console.log(`hola ${name}`)
}
sayHi("Jorge")

function sayGoodBye(name){
    console.log(`Adios ${name}`)
}

sayGoodBye("Jorge")

// Devuelve solo string
function show(): string {
    console.log("Hola")
    return "Hola"
}


// Ingreso un valor number o recibe este tipo de datos y regresa un string
function showN(age:number): string {
    console.log("Hola")
    return "Hola"
}


const response = {
    id:1,
    name:"Kevin",
    charge:"Developer",
    number:4,

}

function showM ({name,...other}:{id;name;charge;number}): number{
    console.log("El id mandado es: ", name)
    return 1;
}

showM(response)