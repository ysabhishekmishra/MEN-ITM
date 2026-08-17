// function greet(name){
//     return `Hello ${name}`;
// }

// function processUser(name,callbackfunction){
//     console.log(callbackfunction(name));
// }

// processUser("Abhishek",greet);


// function createDiscount(discountPercent){
//     return function(price){
//         return price-(price * discountPercent)/100;
//     };
// }

// const festivalDiscount=createDiscount(20);
// const clearDiscount=createDiscount(50);

// console.log(festivalDiscount(1000));
// console.log(clearDiscount(1000)); 


//setTimeout(),map(),filter(),reduce(),forEach()

console.log("Hello1");

setTimeout(function(){
    console.log("Hello2 after 3 second");
},10000)
console.log("Hello3");