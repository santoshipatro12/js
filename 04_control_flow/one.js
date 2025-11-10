//if statement
const isUserLoggedIn = true
const temp =41
// if (temp<50) {
//     console.log("less than 50");
    
// }else{
//     console.log("temp is greater than 50");
    
// }
// console.log("execute");

// const score =200
// if (score>100) {
//     const power ="fly"
//     console.log(`user power ${power}`);
    
// }

// const bal =1000
// if (bal>500) console.log("test"),console.log("test2");

// if (bal<500) {
//     console.log("less than 500");
    
// }else if(bal <750){
//     console.log("less than 750");
    
// }
// else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail =true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}
if (loggedInFromGoogle||loggedInFromEmail) {
    console.log("you are logged in");
    
}