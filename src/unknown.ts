//  unknown type .

const discountCalculator=(input:unknown)=>{
    if(typeof input ==='number'){
        const price=input*0.1;
        console.log(price);
    }
    else if(typeof input ==='string'){
        const [ProductPrice]=input.split(" ");
        const price=Number(ProductPrice)*0.1;
        console.log(price)
         
    }
    else{
        console.log("You are given wrong input ")
    }
}

discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null)