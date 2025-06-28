const accountId = 12345;
let accountEmail = "harsh@gmail.com";
var password = "2233";
let city = "jaipur";
let accountState; // Fixed the colon (:) to equal sign (=) or leave it uninitialized

// accountId = 2;   // ❌ Not allowed because accountId is declared as const

// Reassigning other variables (allowed)

accountEmail = "asd@gmail.com";
password = "3322";
city = "bengaluru";

console.log(accountId);
console.table([accountId, accountEmail, password, city, accountState]);

// ⚠️ prefer not to use var because of issues with block scope and functional scope
