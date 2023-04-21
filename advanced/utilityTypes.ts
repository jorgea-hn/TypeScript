// Revisar la documentacion de los utilityTypes
//Partial<T>
interface Task {
    id:number;
    name:string;
    description:string;
}

function updateTask (id:string,task:Partial<Task>){// Partial<Task> prevenimos colocar los datos como opcionales 
    console.log();
}

const newTask={name:"Kevin"}
updateTask("1",newTask);


//Required<T>

interface ToDo{
    id?:number;
    name?:string;
}

const myToDo: Required<ToDo>={}; // Obliga a que se deben mandar todos los datos


// Records<Keys,Types> Para la creacion de objetos
//{key:value}
interface CatInfo{
    age:number;
    name:string;
}

type CatName = "moi"|"baris"|"luffy";

const cats: Record<CatName,CatInfo>={
    moi:{age:2,name:""},
    baris:{age:2,name:""},
    luffy:{age:2,name:""},
}

//Pick <T,Propertis> Selecciona todos menos este

interface ToDoo{
    title:string;
    description:string;
    completed:boolean;
}

type todoPreview = Pick<ToDoo,"title"|"completed">;
const otherTodoo: todoPreview = {title:"pikachu", completed:true}


// Omit  <T,Propertis>  omite todos menos este
type TodoOmitted = Omit<ToDoo,"description">;
const todoOmitted : TodoOmitted ={}



