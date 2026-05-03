// here we have to learn type interface 

// recap type alias.

type User ={
    name: string,
    age: number
}

const user1 : User={
    name: "Mehad",
    age:20

    
}

// interface 
interface User1{
    name:string,
    age:number
}

const user2={
    name:"jihad",
    age:20
    
}
interface User3 extends User1{
    role : "admin"| "manager"

}


// interface with array 


interface Iarr{
    [index:number]:string;
}

const arr:Iarr=["A","B","C","D"];
console.log(arr);
// learn interface with function
interface IAdd{
    (num1:number,num2:number):number
}
