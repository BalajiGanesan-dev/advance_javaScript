class CheckMonthEndBalance{

    constructor(balance){
        this.balance = balance;
    }

    CheckBalanceAfterRent(amount){
        this.balance = this.balance- amount;
        return this;
    }

    CheckBalanceAfterEntertainment(amount){
        this.balance = this.balance- amount;
        return this;
    }

    CheckBalanceAfterFood(amount){
        this.balance = this.balance- amount;
        return this;
    }

}

var Bank = new CheckMonthEndBalance(10000);
Bank.CheckBalanceAfterRent(2000).CheckBalanceAfterEntertainment(1000).CheckBalanceAfterFood(500);
console.log(Bank.balance);

/* what is chaining ?
            Chaining is a design in javascript. In this pattern related functions are called consecutively from an object.
            eg : 
            * Promise chaining...

            * Jquery : $("#p1").css("color", "red").slideUp(2000).slideDown(2000)
            * RxJs :
                fromEvent(document, 'click').pipe(scan(count => count + 1, 0)).subscribe(count => console.log(`Clicked ${count} times`));

   Why we should know about chaining ?
            
            * All most all the frameworks are using javascript method chaining
            * Better understanding of syntax in frameworks like Angular , Jquery...
            * Customising the object and adding chains .
    
    When we need to use chaining ?
            
            * Reuse the previous result !

                $("#p1").css("color", "red");
                $("#p1").slideUp(2000);
                $("#p1").slideDown(2000);

    Advantages ?
            * Better perfomance because you are resuing the already created object!
            * Looks compact !
            * Reduce the number of local variables to be maintained
        
    Disadvantages ?
            * Affects readblity if chain grows to long ! 
            


*/