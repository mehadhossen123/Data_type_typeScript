//  here we have to learn access modifier 

class BankAccount{
    public readonly userId:number;
    public userName:string;
    private userBalance:number
    constructor(userId:number,userName:string,userBalance:number){
        this.userId=userId,
        this.userName=userName,
        this.userBalance=userBalance
    }
    addBal(balance:number){
        this.userBalance=this.userBalance+balance
    }
}

const mehadBaiAccount=new BankAccount(223344,"mehad",50000);
mehadBaiAccount.addBal(30)
console.log(mehadBaiAccount);
