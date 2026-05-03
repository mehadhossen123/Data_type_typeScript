//  here we have to learn function with generic

// have to make array with generic and non generic by  function.

const makeArrayTuple=(value:string)=>[value];

const makeArrayTupleWithGeneric=<T>(value:T)=>[value]


const result=makeArrayTupleWithGeneric("Mehad")

const student1={
    name:"Mehad hossen ",
    id:94,
    batch:"9th",
    hasCar:false,
    hasPen:true
}

const addStudentToCourse=<T>(studentInfo:T)=>{
    return {
        CourseTitle:"Next level web Development",
        ...studentInfo
    }

}

const res=addStudentToCourse(student1);
console.log(res)

