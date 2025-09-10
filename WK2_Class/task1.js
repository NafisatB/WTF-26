// Implement a simple Expense Calculator. should calculate following
 
//  Monthly income (eg. 2000000)
// Daily expenses (eg. 203023)
// Monthly expenses (eg. 3543545)
// Savings eg. (eg. 324342)
// Spendings (eg. 232323)
 
// Final result should be what is left.
let montlyIncome = 100;
let dailyExpenses = 50;
let monthlyExpenses = 1000;
let savings = 0;
let spendings = 232323;
 
let amountLeft = montlyIncome - monthlyExpenses - dailyExpenses - savings - spendings;

console.log("The Amount left is " + amountLeft);
