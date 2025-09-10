// Class Work: Simple Banking System (No Functions or Classes)
// Create 3 accounts as objects.
// Each account should have: name, balance, and currency.
// Deposit money into the first account.
// Add any amount and update the balance.
// Withdraw money from the second account.
// If the balance is not enough, print "Insufficient funds for withdrawal".
// Transfer money from the third account to the first account.
// If the transfer is possible, update both balances.
// Otherwise, print "Transfer failed".
// Compare balances:
// Print out which account has the highest balance.
// Print "Two accounts are equal" if any two balances are the same.
// Account status check:
// If balance > 0 → print "Active"
// If balance === 0 → print "Empty"
// If balance < 0 → print "Overdrawn"
// 🎯 Bonus Challenge
// Add a 4th account.
// Transfer money from the richest account to the poorest account.
// Show all balances before and after the transfer.
// 👉 Your task is to write the code in plain JavaScript using only:
// Strings
// Numbers
// Objects
// If/else statements
// Comparisons

// Class Work: Simple Banking System (No Functions or Classes)
// Create 3 accounts as objects.
// Each account should have: name, balance, and currency.
// Deposit money into the first account.
// Add any amount and update the balance.
// Withdraw money from the second account.
// If the balance is not enough, print "Insufficient funds for withdrawal".
// Transfer money from the third account to the first account.
// If the transfer is possible, update both balances.
// Otherwise, print "Transfer failed".
// Compare balances:
// Print out which account has the highest balance.
// Print "Two accounts are equal" if any two balances are the same.
// Account status check:
// If balance > 0 → print "Active"
// If balance === 0 → print "Empty"
// If balance < 0 → print "Overdrawn"
// 🎯 Bonus Challenge
// Add a 4th account.
// Transfer money from the richest account to the poorest account.
// Show all balances before and after the transfer.

// Create 3 accounts as objects
const user1 = { 
    name: "Alice",
    balance: 600000, 
    currency: "USD" 
};

const user2 = { 
    name: "Bob", 
    balance: 100000, 
    currency: "USD" 
};

const user3 = { 
    name: "Charlie", 
    balance: 200000, 
    currency: "USD" 
};

// 🎯 Bonus Challenge: Add a 4th account
const user4 = { 
    name: "Diana", 
    balance: 300000, 
    currency: "USD" 
};


// Deposit into first account
let depositAmount = 200000;
user1.balance = user1.balance + depositAmount;
console.log(user1.balance, "New balance");

// Withdraw from second account
let withdrawAmount = 50000;
user2.balance = user2.balance - withdrawAmount;
if (user2.balance >= withdrawAmount) {
  console.log(user2.balance);
} else {
  console.log("Insufficient funds for withdrawal");
}

// Transfer from third account to first account
let transferAmount = 100000;
user3.balance = user3.balance - transferAmount;
user1.balance = user1.balance + transferAmount;
if (user3.balance >= transferAmount) {
  console.log("Transfer successful");
} 
else {
  console.log("Transfer failed");
}
// //  Print out which account has the highest balance

if (user1.balance > user2.balance) {
    console.log("balance 1 is highest");
}
else {
    console.log("balance 2 is the highest");
}

if (user1.balance > user3.balance) {
    console.log("balance 1 is the highest");
}
else{
    console.log("balance 3 is the highest");
}

if(user1.balance > user4.balance){
    console.log("balance 1 is the highest");
}
else{
    console.log("balance 4 is the highest");
}

if(user2.balance > user3.balance){
    console.log("balance 2 is the highest");
}
else{
    console.log("balance 3 is the highest")
}
if(user2.balance > user4.balance){
    console.log("balance 2 is the highest");
}
else{
    console.log("balance 4 is the highest");
}

if(user3.balance > user4.balance){
    console.log("balance 3 is the highest");
}
else{
    console.log("balance 4 is the highest");
}

//  Check if two accounts are equal
if (user1.balance === user2.balance){
    console.log("The balance 1 & 2 are equal");
}
else if(user1.balance === user3.balance){
    console.log("The balance 1 & 3 are equal");
}
else if (user1.balance === user4.balance){
    console.log("The balance 1 & 4 are equal");
}
else if (user2.balance === user3.balance){
    console.log("The balance 2 & 3 are equal");
}
else if (user2.balance === user4.balance){
    console.log("The balance 2 & 4 are equal");
}
else if (user3.balance === user4.balance){
    console.log("The balance 2 & 4 are equal");
}

// Account status check
if(user1.balance > 0){
    console.log(user1.name,  "active");
}
else if(user1.balance === 0){
    console.log(user1.name,   "Empty");
}
else{
    console.log(user1.name,  "Overdrawn")
}

if (user3.balance > 0){
    console.log(user3.name,  "Active");
}
else if(user3.balance === 0){
    console.log(user3.name,   "Empty")
}
else{
    console.log(user3.name,  "Overdrawn")
}

if (user4.balance > 0){
    console.log(user4.name,  "Active");
}
else if(user4.balance === 0){
    console.log(user4.name,   "Empty")
}
else{
    console.log(user4.name,  "Overdrawn")
}

// Compare balances
 let richest = user1;
 if(user2.balance > richest.balance) richest = user2;
 if(user3.balance > richest.balance) richest = user3;
 if(user4.balance > richest.balance) richest = user4;
 console.log(richest.name,"::The account with the highest balance");

 let poorest = user1;
 if(user2.balance < poorest.balance) poorest = user2;
 if (user3.balance < poorest.balance) poorest = user3;
 if (user4.balance < poorest.balance) poorest = user4;
 console.log(poorest.name, ": The account with the lowest balance");
 
// Bonus Challenge: Transfer from richest to poorest

let richToPoorTransfer = 100000;
if (richest.balance >= richToPoorTransfer){
    console.log("Transfer successful")
}
else{
    console.log("Transfer failed");
}

console.log("After Richest-to-Poorest Transfer:");
console.log(user1.name + ": " + user1.balance);
console.log(user2.name + ": " + user2.balance);
console.log(user3.name + ": " + user3.balance);
console.log(user4.name + ": " + user4.balance);

