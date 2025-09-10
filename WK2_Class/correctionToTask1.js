// Simple Expense Calculator

let monthlyIncome = 10000;
let dailyExpenses = 500;
let monthlyExpenses = 1000;
let savings = 0;
let spendings = 232323;

// Assume 30 days in a month
let totalDailyExpenses = dailyExpenses * 30;

// Total deductions
let totalDeductions = totalDailyExpenses + monthlyExpenses + savings + spendings;

// Final balance
let balanceLeft = monthlyIncome - totalDeductions;


console.log("Monthly Income     :", monthlyIncome);
console.log("Total Daily Exp.   :", totalDailyExpenses);
console.log("Monthly Expenses   :", monthlyExpenses);
console.log("Savings            :", savings);
console.log("Other Spendings    :", spendings);
console.log("Balance Left       :", balanceLeft);
