//Union and Intersection have to learn 

type Employee={
    id:number,
    name:string,
    contactNo:string
}

type Manager={
    designation:string,
    teamSize:number
}

type EmployeeManager=Employee & Manager


const mehad :EmployeeManager={
    id:10,
    name:"Mehad",
    contactNo:"01743",
    designation:"ceo",
    teamSize:50
}
