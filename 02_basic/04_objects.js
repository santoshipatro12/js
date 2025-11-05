// const tinderUser = new Object()  Singleton obj
const tinderUser ={}                 //non Singleton obj

 tinderUser.id="123abc"
 tinderUser.name ="santoshi"
 tinderUser.isLoggedIn =false
console.log(tinderUser);

const regularUser ={
    email: "santoshi@gmail.com",
    fullname :{
        userFullName :{
            firstNmae: "Santoshi",
            lastName :"Patro"
        }
    }
}
// console.log(regularUser.fullname.userFullName.lastName);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3 ={obj1,obj2}
// const obj3 =Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id:1,
        email:"santu@www.com"
    },
]
// users[1].email
console.log(tinderUser);
console.log(Object.values(tinderUser)); //type => array
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
