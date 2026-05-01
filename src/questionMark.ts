// Question mark learn for different parts 

// ternary operator.

const canMarried=(value:number)=>{
    const result =value>=21? "tmi biya korte parba":"tmi biya korte parba na "
    console.log(result)
}

canMarried(20)

// nullish coalesing operator

const isAdmin=undefined;
const result=isAdmin?? "he is admin for this role";
console.log(result);