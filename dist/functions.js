var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var sayHi = function (name) {
    console.log("hola ".concat(name));
};
sayHi("Jorge");
function sayGoodBye(name) {
    console.log("Adios ".concat(name));
}
sayGoodBye("Jorge");
// Devuelve solo string
function show() {
    console.log("Hola");
    return "Hola";
}
// Ingreso un valor number o recibe este tipo de datos y regresa un string
function showN(age) {
    console.log("Hola");
    return "Hola";
}
var response = {
    id: 1,
    name: "Kevin",
    charge: "Developer",
    number: 4,
};
function showM(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    console.log("El id mandado es: ", name);
    return 1;
}
showM(response);
