// Las interfaces funcionan como clases
// funciona como boceto u objeto
interface Person{
    name:string;
    code: string | number;
    charge:number;
    description?:string  //? este signo es para cuando el dato puede que vaya o no vaya
    sayHello:()=>string;
}




let person ={
    name:"Kevin",
    code: "01",
    charge:1,
    description:"Hola",
    sayHello:()=>{
        return "hola"
    }
}

let secondPerson: Person = {
    name: "",
    code: "",
    charge: 0,
    sayHello:()=>"Hola"
}

secondPerson.description = ""