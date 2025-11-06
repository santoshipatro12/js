

function sayMyName(){
    console.log("s");
console.log("a");
console.log("n");
console.log("t");
console.log("o");
console.log("s");
console.log("h");
console.log("i");
}
// sayMyName()

// function addTwoNos(num1,num2){
// console.log(num1+num2);

// }

function addTwoNos(num1,num2){
//  let result = num1+num2
//   return result
//   console.log("santoshi");  does not execute  

return num1+num2
}
const result = addTwoNos(5,6)
// console.log("Result: ", result);

function loginUserMessage(username ="san"){
    if(!username){
        console.log("Please enter Username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Santoshi"));
// console.log(loginUserMessage());

//when no of arguments are unknown eg.shopping cart

function calculateCartPrice(val1,val2,...num1) {  //rest op ...
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user ={
    username:"santoshi",
    price:189,
}
function handleObject(anyobj) {
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price:399,
})

const myNewArray =[200,250,642,58]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([24,566,75,12]));
