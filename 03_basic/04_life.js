//Immediately Invoked Funtion Expressive (IIFE)
//immediately execute
//global scope does not pollute in iife 

(function chai() {
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();  //to end the code and run

( (name)=>{
    //unnamed IIFE with parameter pass
    console.log(`DB CONNECTED TWO ${name}`);
    
})('santoshi');
// insted of chai('santoshi)