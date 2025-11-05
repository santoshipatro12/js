//single ton => made from constructor not literals
// Object.create

//object literals

const sym = Symbol("key1")
const user ={
    name : "santoshi",
    "full name": "Santoshi Sisira Patro",  //cant access via dot method
    [sym]:"key1my",
    age: 19,
    loc :"Mumabi",
    email :"santoshi@microsoft.com",
    isLoggedIn: false,
    lastLoginDays :["Monday","Saturday"]
}
// console.log(user.name);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[sym]);

user.email ="santoshi@google.com"
// Object.freeze(user)
// console.log(user);


user.greeting =function(){
    console.log("hello js user....");
    
}

user.greeting2 =function(){
    console.log(`hello js user.. ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greeting2());

