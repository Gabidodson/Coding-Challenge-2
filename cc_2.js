//Calculate the tip :)
let bill = 150;
let tip;

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
console.log("Bill: $"+billamount);
console.log("tip: $"+ calculatedtip);
console.log("Total amount $" +(billamount + calculatedtip));



//Utilize Arrays

//Data set 1
let bills1 = [275, 40, 430];
let tips1 = bills1.map(calculatedtip);
let totals1 = bills1.map((bill, index) => bill + tips1[index]);

//Data set 2
let bills2 = [125, 555, 44];
let tips2 = bills2.map(calculatedtip);
let totals2 = bills2.map((bill, index) => bill + tips2[index]);

// Output for Data set 1
console.log("Test Data set 1:",totals1);
bills1.forEach((bill, index) => {
    console.log(`Bill:$${bill}, Tip: $${tips1[index]}, Total: $${totals1[index]}`);
});

//Output for Data set 2
console.log("Test Data Set 2:",totals2);
bills2.forEach((bill, index) => {
    console.log(`Bill: $${bill}, Tip: $${tips2[index]}, Total: $${totals2[index]})`);

});
