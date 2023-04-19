// Son las mismas clases que javascript


// Public -> tiene alcance para todo
// Private -> tiene alcance solo en la clase
// Protected -> tiene alcance a la clase y las clases que extienden de la clase original


class Animal{
    public name:"generic animal"
    private age = 10;
    protected identity = "111"

    constructor(){

    }

    
    sayHi(){
        console.log("gr",this.age)
    }
}


class Dog extends Animal{
    type : "Pastor aleman"
    sayHi(): void {
        this.identity;
    }
}

const myAnimal : Animal = new Animal();
myAnimal.sayHi();
myAnimal.name


const myDog : Dog = new Dog();
myDog.type

