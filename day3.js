"use strict";
//CONDITIONALS
//write a nested if/else statement
// var num = 50 //num must be positice
// if(num >= 0){
//     if(num > 100){
//         console.log("num is greater than 100, yay")
//     }else{
//         console.log("num is less than 100, or whatever...")
//     }

// }else{
//     console.log("num is negative...")
// }

//basic begginer way, get your bread up shawty
// var num = 
// if(num >= 90){
//     console.log("You have an A")
// }
// else if(num >= 80 && num_grade < 90){
//     console.log("You have a B")
// }
// else if(num >=70 && num_grade < 80){
//     console.log("You have a C")
// }
// else if(num >=55 && num_grade < 70){
//     console.log("You have a D")
// }
// else{
//     console.log("You failed :(")
// }

// //Upgraded way using nesting because you are better than that
// let grade = 75
// if(grade >= 55){
//     if (grade < 70){
//         console.log("You get a D")
//     }else if(grade < 80){
//         console.log("C")
//     }else if(grade < 90){
//         console.log("B")
//     }else{
//         console.log("A")
//     }}
// else{
//     console.log("Fail")
// }          
//////////////////////////////////
//
//LOOPS
    //for loops
// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }       // for a number from 0 to 10 add one to it and print
// for(var i = 10; i>= 1; i--){
//     console.log(i)
// }     
// for(var i = 0; i <=10; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }
// for(var i = 0; i <=10; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }
////// create a loop that has a max number of students 
/// make variables classLimit and studentsInClass
// Make a for loop that adds one student to class until the limit is reached.
// after loop, log the number of students in class

// let classLimit = 4
// let studentsInClass = 0

// for(var i = 0; i <= classLimit; i++){
//     console.log("one run" + " " + i)
//     studentsInClass++
// }
// console.log(studentsInClass)

// let classLimit = 10
// let studentsInClass = 5

// for(var i = studentsInClass; i <= classLimit; studentsInClass++){
//     console.log("one run")
//    // studentsInClass++
// }
// console.log(studentsInClass)
// /////////////////////////////
//////ARRAYS

let movies = ["Everything, Everywhere, All at Once", "A Madea Christmas", "Safe Haven"]; //suddenly went blank on all movies ever and this is all i could think off

// console.log(movies[0]) //how to pull and index one time on a list

// movies.push("Les Misrables") // add item to the end of array

// console.log(movies) // prints the full array

// movies.unshift("Spiderman into the Spiderverse") // adds item to the begging of an array

// console.log(movies)

// movies.shift() //deletes the first timen of an array
// movies.pop() //deletes the last item of an array

// console.log(movies)
// //movies.splice allows you to edit different sections of the array
// //(x,y) where x is where you start and y is how many things you are deleting 
// //(x,y,1,2) you can also add additional items at the same time. In this case and 2 would be the new itmes
// // movies => [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places' ]
// // let removedMovies = movies.splice(3, 1, 'Spaceballs', 'Alien');
// // movies => [ 'Caddyshack', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien' ]
// // removedMovies = movies.splice(0, 3);
// // movies => [ 'Spaceballs', 'Alien' ]
// // removedMovies = movies.splice(1, 0, 'The Sting');
// // removedMovies => []
// // movies => [ 'Spaceballs', 'The Sting', 'Alien' ]
// // console.log(movies)
// // console.log(removedMovies)

/   / // hot to iterate through a list 

// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i])
// }
// movies.forEach(function(movie) {
//     // console.log(movie) // if you don't know how many items that are in the array
// })

// for(let x of movies){
//     console.log(x)
// }
        //copying some or all of an array

// movies => [ 'Spaceballs', 'The Sting', 'Alien' ]
// let lastTwoMovies = movies.slice(1, 3); // ['The Sting, 'Alien']
// console.log(lastTwoMovies)

// let moviesCopy =[...movies]
// console.log(moviesCopy)

// let moreMovies = ["Interstellar", ...movies, 'contact']
// console.log(moreMovies)

let movieStr = movies.join()
console.log(movieStr)

let otherMov = movies.join("-")
console.log(otherMov)