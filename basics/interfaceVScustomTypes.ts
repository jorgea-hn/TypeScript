interface Person {
    name:string;
    age:number;
}

interface Employes extends Person{
    charge:string;
}

const newEmployee: Employes={
    name:"",
    age:40,
    charge:"",
}


// Se puede extender entre interface- interface o type-interface
// Type Person =  {
//     name:string;
//     age:number;
// }

// interface Employes extends Person{
//     charge:string;
// }

// const newEmployee: Employes={
//     name:"",
//     age:40,
//     charge:"",
// }


// Union Types
type User={
    id:string;
}

type Admin = User & Person


//La union de tipos no se puede hacer con interface 
type datos = string | null | number

// Las interfaces se pueden acoplar entre si
interface Developer {
    name:string;
    stack:string[];
}

interface Developer{
    phone:string;
}

// const me:Developer={
//     phone
// }

// Utilizar mas interfaces sobre type
