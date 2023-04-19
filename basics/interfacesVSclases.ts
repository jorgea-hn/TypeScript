// La interface solo es el esqueleto de la estructura del objeto
// pero la clase es el esqueleto y puede tener implementaciones osea codigo 

interface PersonInterface{
    name:string;
    code: string | number;
    charge:number;
    description?:string  //? este signo es para cuando el dato puede que vaya o no vaya
    sayHello:()=>string;
}

class PersonClass{
    sayHello(){
        console.log("gr")
        // fetch("...");
    }
}


// const personOne: PersonInterface = {};
// Me toca empezar a ingresar todos los valores

const personTwo: PersonClass = new PersonClass()
personTwo.sayHello();


interface PetInterface {
    sayHello:()=>string;
}


class PetClass{
    sayHello(){
        return "hola"
    }
}


class Dog implements PetInterface{
    // Me marca error si no completo la funcion
    sayHello() {
        return "Hola desde dog"
    };
}
//Implement te obliga a ingresar todos los datos.

class Cat extends PetClass{}
// No me marca error, extends me trae todo de la clase padre