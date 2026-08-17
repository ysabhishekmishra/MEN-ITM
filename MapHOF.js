const numbers=[1,2,3,4,5];

const result=numbers.map(function(num){
    return num*2;
})
console.log(numbers);
console.log(result);



// const num=[10,20,30];

// num.map((element,index,arr)=>{
//     console.log(element);
//     console.log(index);
//     console.log(arr)
// })


// const val=[10,8,2,4,1,5,7,22];
// const ans=val.filter((num)=>{
//     return num%2===0;
// });
// console.log(ans);

// const users=["Abhishek","Nandini","Harshit"];

// const result = users.filter(
//     name=>name.startsWith("A")
// );

// console.log(result);


//SUM OF ARRAY BY REDUCE

const numbers=[10,20,30,20,50,10,30,30,30,20,22];
// const result = numbers.reduce((acc,value,index,array)=>{
//     console.log("acc:",acc);
//     console.log("value:",value);
//     console.log("index:",index);
//     console.log("array:",array);
//     return acc+value;
// },0);

// console.log(result);

// const max= numbers.reduce((max,num)=>{
//     return num>max ? num:max;
// },0);

// console.log(max);

// const result = numbers.reduce((acc,num)=>{
//     if(acc[num]){
//         acc[num]++;
//     }else{
//         acc[num]=1;
//     }
//     return acc;
// },{});
// console.log(result);

