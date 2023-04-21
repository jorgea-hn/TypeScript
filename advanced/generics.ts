interface MyInterface {
    field: string | number
}

interface MyInterface2<T> {
    field: T
}

const myValue: MyInterface2<string>= {
    field: "",
}

// Ejemplo
interface UserResponse {
    id:number;
    name:string;
}

class HttpResponse<T>{
    data:T;
    status:number;
    code:number;
    constructor(data:T,status:number,code:number){
        this.data = data;
        this.status=status;
        this.code=code;
    }


}

const fetchUser = (): UserResponse=>{
    return {
        id:1,
        name:"Jorge",
    }
}

const myUser = fetchUser();
const res = new HttpResponse(myUser,200,1)
console.log(res)