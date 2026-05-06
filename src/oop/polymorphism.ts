//  h ere we have to learn 

class Person{
    getSleep(){
        console.log(`i a am normal person. gumay 10 hours `)
    }
}

class Student extends Person{
    getSleep() {
        console.log(`i am a student and sleep 8 hours`)
        
    }
}
class NextLevelWebDeveloper extends Person{
    getSleep(): void {
        console.log(`Next level web developer .ami gumay 6 hours `)
    }
}

const getSleepingHours=(param:Person)=>{
    param.getSleep()
}

const person1=new  Person()
const person2=new  Student()
const person3=new  NextLevelWebDeveloper()
getSleepingHours(person2)



// example ---2

class Shape {
    getArea():number{
        return 0

    }
}

class Circle extends Shape{
    radius:number
    constructor(radius:number){
        super()
        this.radius=radius
    }
    getArea()  {
         return Math.PI*this.radius*this.radius;
        
    }
}

class Rectangle extends Shape{
    height:number;
    width:number
    constructor(height:number,width:number){
        super()
        this.height=height,
        this.width=width
    }
    getArea() {
        return this.height*this.width;
        
    }

}

const getArea=(param:Shape)=>{
    return console.log(param.getArea()); 
}

const are1=new Shape()
const area2=new Circle(4);
const area3=new Rectangle(3,4)
getArea(area3)