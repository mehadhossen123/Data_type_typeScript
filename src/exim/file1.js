const {a:x}=require('./file2.js')
const {a:y}=require('./file3')
const add =require('./add.js')
const result =add(x,y);
console.log("the sum is ",result)
