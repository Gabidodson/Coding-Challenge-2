//Calculate the tip :)
let bill = 150;

if (bill <=300 && bill >= 50) {
    tip = bill *0.15;
} else if (bill > 300 || bill < 50) {
    tip = bill * 0.20;
}


//Output Details
console.log("Bill : $" + bill);
console.log("Tip: $" + tip);
console.log("Total amount: $" + (bill + tip));



//Create a Function
function calculatetip (bill) {
   let tip;
   bill= Number(bill)
    if (bill <=300 && bill >= 50) {
        tip = bill *0.15;
    } else if (bill > 300 || bill < 50) {
        tip = bill * 0.20;
    }

return tip;
}
let billamount=100;
let calculatedtip= calculatetip(billamount)
console.log("bill: $"+billamount);
console.log("tip: $"+ calculatedtip);
console.log("Total amount $" +(billamount + calculatedtip));


