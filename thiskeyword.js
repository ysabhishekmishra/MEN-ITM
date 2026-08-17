// console.log(this);
// function show(){
//     console.log(this);
// }
// show();

const user={
    name:"Abhi",
    age:25,
    greet(){
        console.log(`Hello,my name is ${this.name}`);
    }
}
const myGreet=user.greet;
myGreet();