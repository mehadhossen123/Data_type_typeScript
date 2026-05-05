//  instance of guard 

class Person {
    name:string
    constructor(name:string){
        this.name=name
    }
    getSleep(sleepHours:number){
        console.log(`${this.name} daily ${sleepHours} gumay`)
    }
}
//  class one 
class Student extends Person{
    constructor(name:string){
        super(name)
    }

    doStudy(studyHours:number){
        console.log(`${this.name} porasuna kore ${studyHours} ghonta `)
    }
}

// class two 
class Teacher extends Person{
    constructor(name:string){
        super(name)
    }

    takeClass(classTime:number){
         console.log(`${this.name}  ${classTime} ney `);
        
    }
}

const takeUserInfo=(user:Person)=>{
    if(user instanceof Student){
        user.doStudy(5)
    }
    else if(user instanceof Teacher){
        user.takeClass(4)
    }
    else{
        user.getSleep(22)
    }

}

const student1=new Student("mehad")
const teacher1=new Teacher("rafi")
takeUserInfo(student1)