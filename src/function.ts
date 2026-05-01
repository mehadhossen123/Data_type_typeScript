// now we have to learn function

// arrow function , normal function 
 function addNormal(num1:number,num2:number):number{
    return num1+num2;
 }

 const result=addNormal(3,5);
 console.log("the result of normal function : ",result);


 const add=(num1:number,num2:number):number=>num1+num2;
 const result1=add(2,3);
 console.log("the result of arrow function : ",result1)

//    object --> function --> method 

const poorUser={
    name: "mehad",
    balance:30,
    addBalance(value:number){
        this.balance=this.balance+value;
        return result;
    }
}

poorUser.addBalance(20);
console.log(poorUser);

//  callback function 

const arr:number[]=[2,3,4,4,4];
const arr2=arr.map((ele:number):number=>ele*ele);
console.log("the answer is : ",arr2)