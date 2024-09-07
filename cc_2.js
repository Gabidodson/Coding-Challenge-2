//Calculate the tip :)
let bill = 150;

if (bill <=300 && bill >= 50) {
    tip = bill *0.15;
} else if (bill > 300 || bill < 50) {
    tip = bill * 0.20;
}


//Output Details
System.out.print("Bill : $" + bill);
System.out.print("Tip: $" + tip);
System.out.print("Total amount: $" + (bill + tip));


