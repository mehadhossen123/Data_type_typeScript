//  conditional type --> type ta onno condition er upor depand kore 
type A=null
type B=undefined
type C=A extends null?true:false
type D =A extends undefined? true:B extends undefined?true: false;

// example two 

type richPeopleVehicles={
    bike:string
    car:string,
    ship:string
}

type checkVehicles<T>= T extends keyof richPeopleVehicles?true:false

type hasCar=checkVehicles<"cat">