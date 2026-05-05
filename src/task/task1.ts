type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

const productDetails:CartItem={
    name:"Banana",
    price:400,
    quantity:5
}
const calculateTotal=(obj:CartItem)=>{
    const {price,quantity=1}=obj;
    const total=price*quantity;
    return total;
}

const result=calculateTotal(productDetails)
console.log("Total : ",result)