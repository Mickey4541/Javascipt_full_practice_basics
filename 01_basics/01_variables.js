const account_Id = 4541
let accountEmail = "rajan@gmail.com"
var accountPassword = "12345"
accountCity = "Dang"
let accountState;

//account_Id = 2  not allowed(const cannot be changed.)

accountEmail = "bhandari@gmail.com"
accountCity = "Rolpa"
accountPassword = "2580"
console.log(account_Id);

/*
prefer not to use var because
of issue in block scope and functional scope.
*/

console.table([accountEmail,accountPassword,account_Id, accountCity, accountState]) //to print in table structure at once.