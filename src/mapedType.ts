// here we have to learn mapped type

const arrOfNumber:number[]=[2,2,3,4];
const arrOfString:string[]=['2','2','3','4'];
const convertStToNumArr=arrOfNumber.map((num)=>num.toLocaleString());
console.log(convertStToNumArr);

type areaOfString={
    height:string,
    width:string
}


type areaOfNum={
    height:number,
    width:number
}

type Area<T>={
    [key in keyof T]:T[key]
}

const area1: Area<{height:string,width:number}>={
    height:"34",
    width:3

}