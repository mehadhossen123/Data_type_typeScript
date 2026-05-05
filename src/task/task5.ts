

const logLength=<T extends {length:number}>(input:T):number=>{
    return input.length

}
const result=logLength("4")
console.log(result);