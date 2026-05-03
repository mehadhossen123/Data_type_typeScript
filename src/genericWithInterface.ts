// here we have to  learn generic with interface .
interface Developer<T,X=null>{
    name:string,
    salary:number,
    device:{
        brand:string,
        model:string,
        releasedYear:string
    },
    smartWatch:T,
    bike?:X
}


const poorDeveloper:Developer<{heartRate:string,stopWatch:boolean}>={
    name:"Mehad",
    salary:39999,
    device:{
        brand:"Lenovo",
        model:"A2",
        releasedYear:"2006"
    },
    smartWatch:{
        heartRate:"30",
        stopWatch:true


    }

}


type richDe ={
    calculator: string; aiFeatures: boolean

}



const richDeveloper: Developer< richDe,{brand:string,model:number}> = {
  name: "Jihad",
  salary: 45456,
  device: {
    brand: "hp",
    model: "A2",
    releasedYear: "2006",
  },
  smartWatch: {
    calculator: "30",
    aiFeatures: true,
  },
  bike:{
    brand:"Yamaha",
    model:4000
  }
};