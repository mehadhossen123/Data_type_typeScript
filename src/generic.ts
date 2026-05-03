// here we have to learn generic 


// type pore defined korte hoy .

// const arr1:string[]=["A","B","C","D"];

type ArrGeneric<t>=Array<t>;

const arr1:ArrGeneric<string> = ["A", "B", "C", "D"];


const arr2 :ArrGeneric<number>=[1,2,3,4];


const arr3 :ArrGeneric<boolean>=[true,false,true];

// tuple 

// generic for array of object 
type GenericUser<T>=Array<T>

const userList :GenericUser<{name:string,age:number}>=[
    {
        name:"Mehad",
        age:20
    },
    {
        name:"Rakib",
        age:40
    }
   
]