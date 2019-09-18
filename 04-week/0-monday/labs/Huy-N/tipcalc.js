var bill = prompt("Please enter your total bill: ") ;
   var service = prompt("How was the service?\n Please enter Good, OK, or Bad: ");
function tipAmount(){
   
        if (service = "Good")
            var tipValue = bill * .2;
            var totalBill =  bill + tipValue;
            console.log("Your total bill is " + totalBill + "plus a $" + tipValue "tip!")
        else if (service = "OK")
            var tipValue = bill * .15;
            var totalBill = bill + tipValue;
            console.log("Your total bill is " + totalBill + "plus a $" + tipValue "tip!");
        else if (service = "Bad")
        var tipValue = bill * .10;
        var totalBill = bill + tipValue;
        console.log("Your total bill is " + totalBill + "plus a $" + tipValue "tip!");  
}
console.log(tipAmount(100));