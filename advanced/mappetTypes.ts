// Es crear tipos de manera dinamica basandonos en otros tipos o interfaces


interface Person {
    name:string;
    age:number;
}

// interface GetPerson{
//     getName: ()=> string;
//     getAge: ()=> number;
// }

// Cada vez que crees una interfas debes crear un get para acceder 

type Getter<T> = {
    [Property in keyof T as `get${Capitalize<string & Property>}`]:()=>T[Property];
}

// Permite centralizar lo cual me permite hacer lo mismo que la interface GetPerson ademas es escalable con las interfaces que yo necsite usar 

type GetPerson = Getter<Person>;

interface Animal{
    id:string;
    name:string;
    type:number;
    isAdopted:boolean;
}

type GetAnimal = Getter<Animal>

// Ya me devuelve el get de cada atributo de la interface Animal sin necesidad de hacer otra interface