// tipo de dato que permite almacenar lista con valores estaticos

enum Users{
    // NormalUser = "normal", se pueden agregar como variables
    
    PayedUser,
    AdminUser,
    MegaUser,
}

const myUser = Users.AdminUser
console.log(myUser)