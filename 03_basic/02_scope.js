
//scope of the program
// var c =900                                    //global scope
let a =300
if(true){
    let a = 10                        //block scope
const b =20
// console.log(a);  //10

// var c =30
}
// console.log(a);          //300
// console.log(b);
// console.log(c);

//+++++++++++++++ NESTED SCOPE ++++++++++++++++++++

function one(){
    const username ="santoshi"

    function two() {
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
    
}
// one()

if (true) {
    const username = "santoshi"
    if (username =="santoshi") {
        const website = "youtube"
        // console.log(username+ website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//+++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++

console.log(add1(5))
function add1(num) {
    return num +1
}

console.log(add2(5))            //Declare+ variable hold [Error]
const add2 = function (num) {
    return+2
}
