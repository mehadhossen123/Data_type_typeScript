const product = { id: 101, name: "Keyboard", price: 50 };


const getProduct=<T,K extends keyof T>(obj:T,key:K)=>{
    return obj[key];

}
const result =getProduct(product,"name")