const accountId = 22939293
let accountEmail = "harsh@gmail.com"
var accountPassword = "125345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "messi@gmail.com"
accountPassword = "28832839"
accountCity = "Jaipur"

/* prefer not to use var bcz of issue in block scope & 
   functional scope */

console.log(accountId)

console.table([accountEmail,accountPassword,accountCity,accountState])