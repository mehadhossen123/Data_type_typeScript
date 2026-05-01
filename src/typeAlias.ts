// here we have to learn type alias.



// here is type alias . 
type User={
     id:number;
    name:{
        firstName:string;
        lastName:string;

    };
    gender:'male'|"female";
    contactNo:string;
    address:{
        division:string;
        city:string
    }
}







const userInfo :User ={
    id:40,
    name:{
        firstName:"Mehad",
        lastName:"Hossen"
    },
    gender:'male',
    contactNo:"01743392604",
    address:{
        city:"Bhola",
        division:"Brishal"
    }

}

//  function for alias 

type addApp=(num1:number,num2:number)=>number;
const add :addApp=(num1,num2)=>num1+num2;