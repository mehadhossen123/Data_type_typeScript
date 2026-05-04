// here we have to learn utility .

type Product={
    id:number,
    name:string;
    price:string,
    stock:number,
    color?:string
}

type ProductSummary=Pick<Product,'id'|'name'|'stock'>

type WithOutStock=Omit <Product,'stock'>

type ProductWithColor=Required <Product>
type ProductOptional=Partial<Product>

const emptyObj:Record<string,unknown>={}