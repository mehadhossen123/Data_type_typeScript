type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};


const userDetails:UserResponse={
    info:{
        address:{
            zipCode:"3ej"
        }
    }
    
}

const getZipCode=(code:UserResponse)=>{
   const zip=code.info?.address?.zipCode;
   return zip?? "00000"
}

const result=getZipCode(userDetails);
console.log(result)