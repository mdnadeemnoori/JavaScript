const accountId = 123456
let accountEmail = "abc@hmail.com"
var accountPassword = "9150273015" // prefer do not use var in javascript coz of issue in block scope and functional scope
accountCity = "Jaipur"
let accountHolder;
//To check wheather the declared data will reflect the new variable declare
//accountId = 234 // this is not allowed
console.log(accountId)
// using console.table to get the output in a table form
console.table([accountId, accountEmail, accountPassword, accountCity, accountHolder])