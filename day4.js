//////
/* WHILE LOOPS
- as long as condition is met then the code will be executed
        -do while loops are similar and do the samething with different syntax and is always executed at least once
https://www.codecademy.com/learn/paths/introduction-to-javascript/tracks/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet
*/

//write while loop to count down to 0, starting anwhere beteen 5 and 10

// var i =7 // initialize our variable

// while(i >= 0){// as long as i is greaer than 0, this while loop will run
//     console.log(i) //printing i to console
//     i -= 1 //decrementing i by one
// }

// // excercise: Keep printing integers in multiples of 3 as long as integers are less than 35 using a while loop

// var i = 0

// while( i < 35){
//     console.log(i)
//     i += 3
// }

// // //excersie: keep printing integers in multiples of 5 as long as integers are less than 100

// var i = 0

// while(i < 100){
//     console.log(i)
//     i += 5
// }


// //excercise: Using a while loop print integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output.

// var i = 0

// while(i <= 20){
//     if(i % 2 == 0){
//     console.log(i * 3)
// }
//     i++
// }

// *****Using a while loop, print out all prime numbers between 0 - 20

// var i = 0

// while (i <= 20){
//     if (i==2 || i == 3){
//         console.log(i)
//     else
//     }
// }

// *** excersie with chase
// write a while loop that runs while i is less than 200 when i id divisable by 6 or is less than 30

//write while lopp
//check if divisiable by 5
//divide i by 2
//log half of i

// let i = 0
// while (i < 200){
//     if (i % 5 === 0){
//         console.log(i);
//         console.log(i/2);
//     }
//     i++
// }

// //exploring the difference between == and ==
// if ("300" == 300){
//     console.log("Same Values")
// }
// if ("300" === 300){
//     console.log("Same Values")
// }
// essentionally
// = Assigns Value
// == Returns true or false - compares value - soft
// === Returns true or false - compares value and type - strict

// ***Bonus logical question

//Nando went to the vending machine to buy himself a cookie. The cookie costs $4 dollars. He paid with a $10 bill, the vending machine paid him back in quarters. Write a loop that says how many quarters he got in return.

//What do we need to do
    /* create a loop
    subtract dolllars
    convert remaining dollars to quarters
    subtract
    log how many quarters */

/////***TYPES OF LOOPS***/
//for and //while have the same purpose the only difference is syntax
//do while WILL EXECUTE FIRST THAN EVALUATE
    // EXecute one time at least

///////////////////////////////////////
// ****** FUNCTIONS *********//
//https://www.codecademy.com/learn/paths/introduction-to-javascript/tracks/introduction-to-javascript/modules/learn-javascript-functions/cheatsheet

//ES5

// function addition (x,y){// function keyward MUST be used, addition is the name of the function, x and ya are parameter(PLACEHOLDERS)

//     var z // declaring z here
//     z = x + y
//     return z
// }
// console.log(addition(2,4))

// //ES6
// // Declaring a function
// let additionTwo = (x,y) => x + y // Implicit return
// //invoking or calling the function
// console.log(additionTwo(10,5))

// //or

// let additionThree = (x, y) => {
//     return x + y
// }
// console.log(additionThree(3,7))

// // write a functionthat add three numbers in ES5
// function addThree(a, b, c){
//     return a + b + c
// }
// console.log(addThree(2,3,4))

// // write a function that adds three number and divides the result by three in ES5

// function steps(d, e, f){
//     return (d + e + f)/3
// }

// console.log(steps(2,3,4))

////////////////////////////
//*****SCOPE*****/
