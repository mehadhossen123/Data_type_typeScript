// Non Primtive data dype 
//---> array , function, object 

let bazarList=['egg',"meat","fish","coconut"];
//bazarList.push(12)--> amra string er modde number add korte parbo na .
let bazarList1=["Egg",12,"fish",2,"meat",4];


// tuple -->> special type of array 

let list : [string,number]=["Mehad",12];

// when we use tuple -->> jokhon different data type thakbe tokhon amara tuple use korbo . 



// Object --> reference type 

const user:{ readonly organization:string;firstName:string;
    middleName?:string  // optional  type value assigned 
    lastName:string

}={
    organization:"programming hero",  // literal type--> ami value jokhn tpye hisabe use korbo seta ke leteral type bole .
    firstName:"Mehad",
    middleName:"",
    lastName:"rafi"
}



console.log(user);