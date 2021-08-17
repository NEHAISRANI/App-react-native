// const arr=[1,2,3,4,57]
// const arr1=arr.map((item)=>item*2)
// const filtervalue=arr.filter((item)=>item<4)
// console.log(filtervalue)
// const reduceValue=arr.reduce((acc,curr)=>acc+curr)
// console.log(reduceValue)

// a=[5,7,89,3,7,8,90] 
// const arr1=[...a,100]
// console.log(arr1)

// function grade(marks){
//     var x=marks>60?"grade A":marks>=50&&marks<60?"grade B" :
//     marks>=40 && marks<50?"grade c":'Fail'
//     return(x)
// }
// console.log(grade(60))

// function grade(marks) {
//     let output = ""
//     switch (true) {
//         case marks > 60:
//             output = "Grade A"
//             break;
//         case marks >= 50 && marks <= 60:
//             output = "Grade B"
//             break;
//         case marks >= 35 && marks <= 50:
//             output = "Grade C"
//             break;
//         default:
//             output = "Fail"
//     }
//     return output
// }

// function num(){
//     for(let i=0;i<=100;i++){
//         let x=i%3 && i%5?"FizzBuzz":i%3?"Fizz":"Buzz"
//         console.log(x)
//     }
// }
// console.log(num())


// const Name=(callback)=>{
//     console.log('hi')
//     return callback();
//   }

//   const fullName=()=>{
//     return "neha"
//   }
//   console.log(Name(fullName));

// const printName = (callback) => {
//   return callback();
// }

// function name(){
//   return("neha");
// }
// console.log(printName(name));


// const printName = (callback) => {
//     return callback();
// }

// function namee() {
//     return ("neha");
// }
// console.log(printName(namee));

// const printName=(callback)=>{
//     console.log('hi')
//     callback();
// }

// function namee(){
//     console.log('neha')
// }
// console.log(printName(namee));

// function printName (callback){
//     console.log('hi')
//     callback(()=>{
//       return("aman")
//     });
// }
// function namee(callback){
//     console.log('neha')
//     callback()
// }
// console.log(printName(namee));

// let b= function(param1){
//  return function(){
//}
// }
// function xyz(){

// }
// b(xyz);

// i=0
// while(i<10){
//     console.log("neha")
//     i++
// }
// else{
//     console.log("nnnnn")
// }

// function odds(values){
//     return values.filter(x => x%2 == 0);
// }
// console.log(odds([1, 2,3,4, 5]));


// let a=new Promise((res,rej)=>{
//     setTimeout(()=>rej("nnn"),2000)
//    })
//    console.log(a.then(()=>{
//      console.log(a)
//    }),()=>{
//      console.log("aman")
//     })

// let arr=[1,2,3,4,5]
// const somehow=(x)=>{
//   console.log(x+2) 
// }
// arr.map(somehow)

// arr.map((x)=>console.log(x+2))

// function mymap(callback){
//   let result=[];
//   for(let i=0;i<arr.length;i++){
//     result.push(callback(arr[i],i,arr));
//   }
//   return result
// }
// mymap((x)=>console.log(x+2))

// let arr = [1,null,undefined,true,0];
// function myMap(x) {
//   if(x){
//     return (x)
//   }
// }
// console.log(arr.map(myMap));
// let name="Andrew"

// let convertFahrenheitTocelsius=function(n){
//   let celsius=(n-32)*5/9

//   if(n<=9){
//     let isFreezing=true
//   }
//   return celsius
// }
// let a=convertFahrenheitTocelsius(1)
// console.log(a)

// function descendingOrder(n){
//     n=n.toString()
//    console.log(n.split(""))
// }
// console.log(descendingOrder(011))

// const fs = require("fs");

// fs.writeFile("test1.js", "console.log('neha');", error => {
//     if (error) console.error(error);
//     else console.log("file created successfully!");
// });


// let myAccount = { name:"neha",expenses:0,income:0};


// let addExpenses=function(account,amount){
//     account.expenses=account.expenses+amount
//     console.log(account)
// }
// addExpenses(myAccount,2.50)
// console.log(myAccount)









// let notes=[1,3,34,34]
// d=notes.splice(1,1)
// console.log(d)
// console.log(notes)   




// function countSheeps(arrayOfSheep) {
//     let count=0
//     for(let i=0;i<arrayOfSheep.length;i++){
//       if(arrayOfSheep[i]===true){
//         count+=1
//       }
//     }
//     return(`There are ${count} sheeps in total`)
//   }
//   var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];
// console.log(countSheeps(array1));
  
// Try adding login functionality.. if i login then data should be persisted locally..even if i kill the app..and launch it again it should take me to home/drawer screen..and add a logout button in drawer. Which will remove all persisted data and take me back to login screen.


// Pending concepts :
//  App Theming
//  Clean Coding
//  Typescript integration
//  Animation
//  Context API
//  HOC
//  API calling and handling
a=10
function z(){
    var a=20
    if(true){
    console.log(a)
    }
}
z()
console.log(a)
