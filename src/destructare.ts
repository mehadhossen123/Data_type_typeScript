// array destructuring 

// object destructuring 

const manINfo={
    id:12,
    name:{
        firstName:"Mehad",
        lastName:"Hossen",

    },
    age:10
}

const {id,name:{lastName}}=manINfo;
console.log("The user id is : ",id);
console.log("User lastname is : ",lastName)
