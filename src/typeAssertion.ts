// here we have to learn type assertion . jekhane amra bole dibo variable er type ki hobe . 


const name :unknown ="mehad";
//(name as number)
//  kg to gram converter with type assertion 
const kgToGramConverter=(input: string | number ):string | number | undefined=>{
    if(typeof input ==='number'){
        return input *1000; 
    }
    else if (typeof input ==='string'){
        const [value]=input.split(" ");
        const result=Number(value)*1000;
        return  result;
    }
}

const result1 =(kgToGramConverter(5) as number)
console.log("result one ",result1)
const result2 =(kgToGramConverter(5)as string);
console.log("result two ",result2)