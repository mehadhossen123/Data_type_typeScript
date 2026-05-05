// // fundamental of oop 
// // we have to learn class-->> object 

// class Animal{
//    public name:string;
//    public species:string;
//     public sound:string
//     constructor(name:string,species:string,sound:string){
//         this.name=name
//         this.species=species
//         this.sound=sound
    
//     }
//     makeSound(){
//         console.log(`the ${this.name} is make sound : ${this.sound}`)
//     }
// }


// const dog=new Animal ("Dogi bhai","dog","ghew ghew");
// const cat =new Animal("cati","cat","maw maw")
// dog.makeSound()
// cat.makeSound()
// console.log(dog);



class Animal{
  
    constructor (public name:string ,public species:string ,public sound:string){
        
    
    }
    makeSound(){
        console.log(`the ${this.name} is make sound : ${this.sound}`)
    }
}

const dog=new Animal ("Dogi bhai","dog","ghew ghew");
const cat =new Animal("cati","cat","maw maw")
dog.makeSound()
cat.makeSound()
console.log(dog);
