// trafic police er moto  exact rule deya .

const addToStudent=<T extends {name:string,id:number}>(studentInfo:T)=>{
    return {
        courseName:"Next level webdevelopment course",
        ...studentInfo
    }
}

const student1={
    name:"Mehad",
    id:3,
    address:"Bhola",
    batch:"9th"
}
const student2={
    name:"Rafi",
    id:3,
    hasCar:false,
}

const result =addToStudent(student1);
const result2=addToStudent(student2)
console.log(result2);
