// tipo de dato que permite almacenar lista con valores estaticos
var Users;
(function (Users) {
    // NormalUser = "normal", se pueden agregar como variables
    Users[Users["PayedUser"] = 0] = "PayedUser";
    Users[Users["AdminUser"] = 1] = "AdminUser";
    Users[Users["MegaUser"] = 2] = "MegaUser";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser);
