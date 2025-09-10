// 📝  Group Assignment:  Banking Practice (No Functions or Classes)
// Requirements:
// (1) Create 4 accounts as objects.
// Each should have: name, balance, currency, and type (e.g., "Savings", "Checking").
// (2) Simulate deposits:
// Add different deposit amounts to two accounts.
// Show the new balances.
//(3) Simulate withdrawals:
// Attempt withdrawals from two accounts.
// If the balance is insufficient, print:
// "Withdrawal denied for <name>: insufficient funds"
// (4) Transfers:
// Transfer money between two accounts only if they have the same currency.
// If currencies are different, print:
// "Transfer failed: currency mismatch"
// (5) Monthly maintenance:
// If account type is "Savings", add interest (e.g., 2% of balance).
// If account type is "Checking", deduct fees (e.g., 50 units).
//(6) Comparisons:
// Print out the account with the highest balance.
// Print out the account with the lowest balance.
// (7) Account status check:
// If balance > 0 → "Active"
// If balance === 0 → "Empty"
// If balance < 0 → "Overdrawn"
// (8) Transaction summary:
// After all operations, print all accounts with final balances and statuses in a clean format.
// 🎯 Bonus Challenge
// Add a foreign currency account (e.g., "EUR").
// Try to transfer from it into a "USD" account and handle the currency mismatch.
// Then, add an exchange rate (e.g., 1 EUR = 1.1 USD) and retry the transfer using conversion.
// Use functions in a clear and simple way. (if advance you loose your marks)
// GOAL: This assignment forces you to use:
// Strings → names, messages, account type.
// Numbers → balances, deposits, interest, fees.
// Objects → multiple accounts.
// If/else & comparisons → conditions for deposits, withdrawals, transfers, and status checks.

//          SOLUTIONS
// (1) Create 4 accounts as objects.
const acct1 = {
    name: "Binta",
    balance: 500000,
    currency: "NGN",
    type: "Savings"
}

const acct2 = {
    name: "Jane",
    balance: 400000,
    currency: "NGN",
    type: "Savings"
}

const acct3 = {
    name: "Josh",
    balance: 7000000,
    currency: "USD",
    type: "Checking"
}

const acct4 = {
    name: "Bunmi",
    balance: 20000000,
    currency: "USD",
    type: "Checking"
}

const acct5 = {
    name: "Jenifa",
    balance: 12000000,
    currency: "EUR",
    type: "Saving"
}

// (2) deposit to two different accounts with same currency
console.log("--------Solution 2--------");

let depositAmount1 = 50000;
acct1.balance = acct1.balance + depositAmount1;
console.log(acct1.name + ": " + acct1.balance + " " + acct1.currency );

let depositAmount2 = 150000;
acct2.balance = acct2.balance + depositAmount2;
console.log(acct2.name + ": " + acct2.balance + " " + acct2.currency);

// (3) withdrawal from two different accounts
console.log("--------Solution 3--------");

let withdrawAmount1 = 8000000;

if(acct3.balance >= withdrawAmount1){
    acct3.balance = acct3.balance - withdrawAmount1;
    console.log(acct3.balance + " " + acct3.currency);
}
else{
    console.log("Withdrawal denied for" + " " + acct3.name +":" + " " + "Insufficient fund");
}

let withdrawAmount2 = 200000;

if(acct4.balance >= withdrawAmount2){
    acct4.balance = acct4.balance - withdrawAmount2;
    console.log(acct4.balance + " " + acct4.currency);
}
else{
    console.log("Withdrawal denied for " + acct4.name +": " + "Insufficient fund"  )
}

// (4) transfer fund between two different accounts with different currency
console.log("--------Solution 4--------");

let transferAmount = 100000;
acct1.balance = acct1.balance - transferAmount;
acct3.balance = acct3.balance + transferAmount;
if(acct1.currency === acct3.currency){
    if(acct1.balance >= transferAmount){
        console.log("Transfer successful");
    }
} else{
    console.log("Transfer failed: currency mismatch")
}

// Bonus Challenge
console.log("-----Bonus Challenge-----");

let exchangeRateEURtoUSD = 1.1; // 1 EUR == 1.1 USD
let transferAmountEUR = 1000000;

if(acct5.balance >= transferAmountEUR){
    acct5.balance = acct5.balance - transferAmountEUR;

    let convertedEUR = transferAmountEUR * exchangeRateEURtoUSD;

    acct4.balance = acct4.balance + convertedEUR;
    console.log("Transfer successful");
}
else{
    console.log("Transaction failed");
}


//  (5) Monthly maintenance
console.log("--------Solution 5--------");

let interestRate = 0.02; //2%
let deductionFee = 50;
 
// Acct1
if(acct1.type === "Savings"){
    acct1.balance = acct1.balance + (acct1.balance * interestRate);
    console.log(acct1.balance + " " + acct1.currency + " " + acct1.type)
}
else if(acct1.type === "Checking"){
    acct1.balance = acct1.balance - deductionFee;
    console.log(acct1.balance + " " + acct1.currency + " " + acct1.type );
}

// Acct2
if(acct2.type === "Savings"){
    acct2.balance = acct2.balance + (acct2.balance * interestRate);
    console.log(acct2.balance + " " + acct2.currency + " " + acct2.type)
}
else if (acct2.type === "Checking"){
    acct2.balance = acct2.balance - deductionFee;
    console.log(acct2.balance + " " + acct2.currency + " " + acct2.type)
}

// Acct3
if (acct3.type === "Savings"){
    acct3.balance = acct3.balance + (acct3.balance * interestRate);
}
else if(acct3.type === "Checking"){
    acct3.balance = acct3.balance - deductionFee;
    console.log(acct3.balance + " " + acct3.currency + " " + acct3.type);
}

// Acct4
if(acct4.type === "Savings"){
    acct4.balance = acct4.balance + (acct4.balance * interestRate);
    console.log(acct4.balance + " " + acct4.currency + " " + acct4.type );
}
else if(acct4.type === "Checking"){
    acct4.balance = acct4.balance - deductionFee;
    console.log(acct4.balance + " " + acct4.currency + " " + acct4.type);
}

// Acct5
if(acct5.type === "Savings"){
    acct5.balance = acct5.balance + (acct5.balance * interestRate);
    console.log(acct5.balance + " " + acct5.currency + " " + acct5.type );
}
else if(acct5.type === "Checking"){
    acct5.balance = acct5.balance - deductionFee;
    console.log(acct5.balance + " " + acct5.currency + " " + acct5.type);
}

//  (6) comparisons
console.log("--------Solution 6--------");

// highest acct balance
let highest = acct1; //assuming acct1 with highest balance

if (acct2.balance > highest.balance){
    highest = acct2;
}
if(acct3.balance > highest.balance ){
    highest = acct3;
}
if (acct4.balance > highest.balance){
    highest = acct4;
}
if (acct5.balance > highest.balance){
    highest = acct5;
}
console.log(highest.name + ": " + highest.balance + " " + highest.currency + " " + highest.type)


// Lowest acct balance

let lowest = acct1; //assuming acct1 with lowest balance

if(acct2.balance < lowest.balance){
    lowest = acct2;
}
if(acct3.balance < lowest.balance){
    lowest = acct3;
}
if (acct4.balance < lowest.balance){
    lowest = acct4;
}
if (acct5.balance < lowest.balance){
    lowest = acct5;
}
console.log(lowest.name + ": " + lowest.balance + " " + lowest.currency + " " + lowest.type);

// (7) Account status check

// Acct1
console.log("--------Solution 7--------");

if(acct1.balance > 0){
    console.log("Acct1: Active");
}
else if(acct1.balance === 0){
    console.log("Acct1: Empty");
}
else{
    console.log("Overdrawn");
}

// Acct2
if(acct2.balance > 0){
    console.log("Acct2: Active");
}
else if(acct2.balance === 0){
    console.log("Acct2: Empty");
}
else{
    console.log("Overdrawn");
}

// Acct3
if(acct3.balance > 0){
    console.log("Acct3: Active");
}
else if(acct3.balance === 0){
    console.log("Acct3: Empty");
}
else{
    console.log("Overdrawn");
}

// Acct4
if(acct4.balance > 0){
    console.log("Acct4: Active");
}
else if(acct4.balance === 0){
    console.log("Acct4: Empty");
}
else{
    console.log("Overdrawn");
}

// Acct5
if(acct5.balance > 0){
    console.log("Acct5: Active");
}
else if(acct5.balance === 0){
    console.log("Acct5: Empty");
}
else{
    console.log("Overdrawn");
}

// (8) Transaction summary:
// After all operations, print all accounts with final balances and statuses in a clean format.
console.log("--------Transaction Summary-------");

// Function to get account status
function getStatus (balance){
    if (balance > 0){
        return "Active";
    }
    else if(balance === 0){
        return "Empty";
    }
    else{
        return "Overdrawn";
    }
}


// Function to print transaction summary
function printSummary(account){
    console.log(
        account.name + ": " + account.balance + " " + account.currency + " (" + getStatus(account.balance) + ")"
    );
}
printSummary(acct1);
printSummary(acct2);
printSummary(acct3);
printSummary(acct4);
printSummary(acct5);




