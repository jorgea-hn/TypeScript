namespace DatabaseEntity {
    export class User {
        constructor(public name: string) {
        }
    }

    const myUser = new User("Jorge")
    // console.log(myUser)
}

const myOtherUser = new DatabaseEntity.User("Jorge 2"); // Tengo que export la clase para poder utilizarlo afuera
console.log(myOtherUser)
