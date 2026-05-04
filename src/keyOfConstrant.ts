// here we have to learn key of constant.

type poorPeopleVehicles={
    car:string,
    cng:string,
    bike:string
}

type myVehicles="cng"|"car"|"bike"
type myVehicles2=keyof poorPeopleVehicles;
const myVehicle:myVehicles2='bike'
