const accountId = 12345
let accontEmail = "pakiza@gmail.com"
var accountPassword = "00000"
accountCity = "Gujranwala"
let accountState;

// accountId = 2

accountEmail = "PT@PT.com"
accountPassword = "12121212"
accountCity = "Lahore"

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
