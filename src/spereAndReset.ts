//Spread operator learn ----->>> 
const friends=["rakib","sakib"];
const schoolFriend=["Bonna","Tara","Monika"];
const collegeFriend=["Mosaref","Sihab","Tamim"];
friends.push(...collegeFriend,...schoolFriend);
console.log(friends);

// Rest operator 

const SentInvitation=(...friends:string[])=>{
   friends.forEach((ele:string)=>console.log(`sent the invitation :  ${ele}`))
    


}
SentInvitation("mehad","jihad","Rafi")
