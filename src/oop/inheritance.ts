// here we have to learn inheritance --> 


class parent {
  public name: string; // common
  public id: number; //common
  public country: string; //common

  constructor(name: string, id: number, country: string) {
    ((this.name = name), (this.id = id), (this.country = country));
  }
  getSleep(hours: number) {
    console.log(`${this.name} ${hours} ghonta gumay . `);
  }
}
// here is a Student ---> child .parent---> parent 
class Student extends parent {
   
}

const student1=new Student("mehad",40,"Bangladesh")
student1.getSleep(5);



class Teacher  extends parent{
 
  public designation:string

  constructor(name: string, id: number, country: string,designation:string) {
   super(name,id,country)
    this.designation=designation
  }
 

  getClass(hours:number){  // it's own property 
    console.log(`${this.name} take a class ${hours} hours`)
  }
}

const teacher1=new Teacher("Rafi",20,"India","senior teacher")
teacher1.getClass(8)