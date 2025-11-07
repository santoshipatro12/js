const user ={
    username :"santoshi",
    price:999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "santu"    //value change
// user.welcomeMessage()

// console.log(this);       //empty obj

// function chai() {
//     let username ="santoshi"
//     console.log(this.username);
    
// }
// chai()

// const chai =function(){
//          let username ="santoshi"
//           console.log(this.username);
// }
// chai()

const chai =() =>{
         let username ="santoshi"
          console.log(this.username);
}
// chai()

// const add2 = (num1,num2)=>{
//     return num1+num2            explicit return
// }

// const add2 = (num1,num2)=>  num1+num2   //implicit funtion
// const add2 = (num1,num2)=>  (num1+num2)
const add2 = (num1,num2)=>  ({username:"santoshi"})

console.log(add2(3,2))

// 🔹 this inside object → the object
// 🔹 this inside function → global / undefined
// 🔹 this inside arrow function → takes from parent scope
// 🔹 Arrow functions → short, clean, no own this or arguments