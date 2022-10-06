// console.log ( ' person1 : shows tickets');
// console.log ( ' person2 : shows tickets');
// const promiseWifeBringingTicks = new Promise ( ( resolve , reject ) => {
//   setTimeout ( () => {
//     resolve('ticket');
//  } , 3000 )
// } ) ;
// // console.log ( ' person4 : shows tickets');
// // console.log ( ' person5 : shows tickets');
// // promiseWifeBringingTicks.then ( ( t ) => {
// //   console.log ( `person3 : shows $ {t } ` ) ;
// // } ) ;
// // console.log ( ' person4 :
// // console.log ( ' person5 :
// //                       shows ticket ' ) ;
// //                       shows ticket ' ) ;

// const { reject } = require("async");

// const getPopcorn = promiseWifeBringingTicks.then( (t ) => {
//     console.log ( ' wife : i have the tics ' ) ;
//     console.log ( ' husband : we should go in ' ) ;
//     console.log ( ' wife : no i am hungry ' ) ; 
//     return new Promise ( ( resolve , reject ) => resolve ( `${t} popcorn` ) ) ;
//   } ) ;
//   const getButter = getPopcorn.then ( ( t ) => {
//     console.log("Husband: I got some popcorn");
//     console.log ('husband : we should go in ') ;    
//     console.log ( 'wife : I need butter on my popcorn') ;
//     return new Promise ( ( resolve , reject ) => resolve ( `${t} butter` ) ) ;
//   } ) ;
//   getButter.then ( ( t ) => console.log (t) ) ;
//   console.log ( ' person4 : shows tickets');
//   console.log ( ' person5 : shows tickets');

console.log ('person1:shows ticket');
console.log ('person2:shows ticket');
const preMovie = async () => {
 const promiseWifeBringingTicks = new Promise ((resolve , reject ) => {
    setTimeout (() => resolve ('ticket') ,3000);
 } ) ;
 const getPopcorn = new Promise ((resolve , reject ) => resolve (`popcorn`)) ;
 const getCandy = new Promise (( resolve , reject ) => resolve (`butter`)) ;
 const getColdDrinks = new Promise((resolve,reject)=>resolve(`Cold drinks`));
 let ticket = await promiseWifeBringingTicks ;
                      
 console.log (`wife : i have the ${ticket}`);
 console.log ('husband : we should go in ');
 console.log ( 'wife : no i am hungry') ;
 let popcorn = await getPopcorn ;
 console.log ( `husband :i got some ${popcorn}`);
 console.log ('husband :we should go in');
 console.log ( ' wife :I need butter on my popcorn ' ) ;

let butter = await getCandy ;
console.log ( `husband : i got some ${butter} on popcorn`) ;
console.log ( ` husband : anything else darling ?` ) ;
console.log(`wife: Can I get cold drinks darling`);
console.log("Husband: sure");
let coldDrinks = await getColdDrinks;
console.log ( `husband : i got some ${coldDrinks}`) ;
console.log ( ` husband : anything else darling ?` ) ;
console.log (`wife : lets got we are getting late`);
console.log ( `husband : thank you for the reminder * grins * ` ) ;
return ticket;
}

preMovie().then((m)=>console.log(`person3: shows ${m}`));
console.log("person 4: shows ticket");
console.log("person 5: shows ticket");