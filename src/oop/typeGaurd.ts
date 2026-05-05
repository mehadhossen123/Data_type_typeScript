// here we have to learn type gaurd


type Alphaneumeric=string | number

const add= (num1:Alphaneumeric ,num2:Alphaneumeric)=>{
    if(typeof num1==='number' && typeof num2 ==='number'){
        return num1+num2;
    }
    else{
        return num1.toLocaleString()+num2.toString();
    }

}
const result=add(2,"4");
console.log(result)


const a=4;
console.log (typeof a.toString())
console.log(typeof a)


//  in guard 

type NormalUser={
    name:string
}
type AdminUser={
    name:string,
    role:string
}

const getUserInfo=(user:NormalUser | AdminUser)=>{
    if('role' in user){
        return console.log(`${user.name} and his role is ${user.role}`)
    }
    else{
        return console.log(`${user.name}  and he is a normal user }`);
    }
}
const result2=getUserInfo({name:"Mehad",role:"admin"})
console.log(result2)