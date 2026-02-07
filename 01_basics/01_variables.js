const accountId = 144553
let accountEmail = "lala@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 not allowed
accountEmail = "hehe@c.com"
accountPassword = "2345"
accountCity = "manipur"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var
because of issue in block scope and functional scope.
/*