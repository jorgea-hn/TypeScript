var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Jorge");
    // console.log(myUser)
})(DatabaseEntity || (DatabaseEntity = {}));
var myOtherUser = new DatabaseEntity.User("Jorge 2"); // Tengo que export la clase para poder utilizarlo afuera
console.log(myOtherUser);
/// <reference path="namespaces.ts" />
var myOtherUser1 = new DatabaseEntity.User("Jorge 2"); // Tengo que export la clase para poder utilizarlo afuera
console.log(myOtherUser1);
