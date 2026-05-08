//  generic  sikhbo akhane.

type GenericArray<T> =Array<T>

const Students : GenericArray<string>=["mehad","rafi","jihad"]
const rollNumber:GenericArray<number>=[34,4,5,6]



type GenericCor<X,Y>=[X,Y];

const Coordinates:GenericCor<number,string>=[20,"20"]

type GenericUser<T>=Array<T>


const users:GenericArray<{name:string,age:number}>=[
    {
        name:"mehad",
        age:30
    },
    {
        name:"Rafi",
        age:50,
        
    }
]
    


