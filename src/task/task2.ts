type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };
type Employee=Person & JobDetails;


const employeeProfile:Employee={
    name:"Mehad",
    age:23,
    role:"Admin",
    salary:5000
}

const getProfile=(profile:Employee):string=>{
    return `Name:${profile.name},Role :${profile.role}`

}
const result=getProfile(employeeProfile);
console.log(result)