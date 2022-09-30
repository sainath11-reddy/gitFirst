const obj = {
    birthYear:2002,
    age:20
}


function callAge(present_year){
    return present_year-this.birthYear;
}
function printage(){
    console.log(`${this.age} is the age`)
}

console.log(callAge.call(obj, 2022));
let arr=[2022];
console.log(callAge.apply(obj,arr));
var bind = callAge.bind(obj);

console.log(bind(2022));
printage.call(obj);


// let multiply = function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(4);

// let multiplyByThree = multiply.bind(this,3);
// multiplyByThree(6);

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }

}
let multiplyByTwo = multiply(2);
multiplyByTwo(4);

let multiplyByThree = multiply(3);
multiplyByThree(8);

// console.log('d');
// const secureBooking = function () {
    
//      function a () {
//       passengerCount++;
//       console.log(`${passengerCount} passengers`);
//     }
//     let passengerCount = 0;
//     return a;

//   };
//   const booker = secureBooking();
//   booker();
//   booker();
//   booker();
//   console.dir(booker);

// // // console.log(obj);
// // function b(){

// // var x = 2;

// // var c = 4

// // console.log(c)

// // }


// // const obj ={a:"1000"};
// // console.log(a);
// // console.log(obj.a);
// // console.log(obj.c);
// // console.log(this.a);

// // console.log(this.c)

// // console.log(this.x)

// // console.log(window.a)

// // console.log(window.x)

// // console.log(b());
// // console.log(c);
// // let x = 100;
// // function abc() {

// //     console.log(a);
    
// // }  
// // abc();     
// // var a = 7;
    
// function outerfunction() {

//     console.log(a);
    
//     var a = 10;
    
    
    
//     innerfunction();
    
    
    
//     function innerfunction() {
    
//     console.log(a);
    
//     console.log(window.a);
    
//     console.log(this.a)
    
//     }
    
//     }
    
    
    
//     var a = 7;
    
//     var b =3
    
    
    
//     outerfunction();