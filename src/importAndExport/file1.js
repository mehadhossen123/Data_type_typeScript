const {a:x}=require('./file2.js')
const {a:y}=require('./file3.js')
// const add =require('./add.js')
// const result =add(x,y);

const {f1,f2}=require('./index.js');
console.log("the sum is ",f1(x,y))
console.log("the sub is ",f2(x,y))
