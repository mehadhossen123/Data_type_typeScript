//  here we have to learn access modifier

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    ((this.userId = userId),
      (this.userName = userName),
      (this.userBalance = userBalance));
  }

//   add balance using function 
//   addBal(balance: number) {
//     this.userBalance = this.userBalance + balance;
//   }


//  add balance using set() method

set addBal(amount:number){
    this.userBalance=this.userBalance+amount;
}

//    balance get korbo function use kre  


//   getBalance(){
//     return this.userBalance;
//   }
// }



//  balance get korbo get() method use kore 
get getBal(){
    return this.userBalance;
}
}

const mehadBaiAccount = new BankAccount(223344, "mehad", 50);
mehadBaiAccount.addBal=100;
console.log(mehadBaiAccount.getBal)
