//Primitive


//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const id = Symbol('123')
const anotherId = Symbol('123')    //Symbol => unique identifier
console.log(id);
console.log(anotherId);
console.log(id === anotherId);



//javascript is dynamicaly typed language

//Reference type[non primitive]

//Array, Objects,Funttions

const heros = ["shaktiman", "naagraj","doga"]
let myobj={
    name: "santoshi",
    age: 19,
}
const myFunction =function(){
    console.log("Hello world");
    
}

//+++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)
// copy             // same reference 
let myMom ="suprabha"
let anothername= myMom
anothername ="santoshi"
console.log(myMom);
console.log(anothername);
//only change in user2 bcoz it is copy of user1

let user_1 ={
    email: "sap12@www.com",
    upi:23525633663554,
}
let user_2 =user_1
user_2.email = "santoshi@12hjdi"
console.log(user_1.email);
console.log(user_2.email);
//change in both email same both

