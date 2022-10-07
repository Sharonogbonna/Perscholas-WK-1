// ////////////////////////////////////////////////////////////////
// // Conditionals:
// ///////////////////////////////////////////////////////////////

// //1. Write a JavaScript display the larger of two integer
// let x = 5
// let y = 3

// if (x > y){
//   console.log(x)
// }else if(y > x){
//   console.log(y)
// }else{
//   console.log('They are the same')
// }

// /* 2. Write an if/else statement for the following requirements:

// If student gets 90 or higher: console log  A
// If students get 80 or above: console log B
// If students get 70 or above: console log C
// If students get 55 or above: console log D
// Any grade lower than 55 is F */

// let grade = 7

// if (grade >=55){
//   if(grade < 70){
//     console.log('D')
//   }else if(grade < 80){
//     console.log('C')
//   }else if (grade <90){
//     console.log('B')
//   }else{console.log('A')
//   }
// }else{
//   console.log('F')
// }

// //3. Write a JavaScript program that displays "Good Morning" if time is between 5AM-11:59 | "Good Afternoon" if time is between 12 - 16 | otherwise "Hey there"

// let time = "06:00"
// if (time >= "05:00" && time <= "11:59"){
//   console.log('Good Morning')
// }else if (time >= "12:00" && time < "16:00"){
//   console.log('Good Afternoon')
// }else{
//   console.log('Hey there')
// }

// // ////////////////////////////////////////////////////////////////
// // // Strings:
// // ///////////////////////////////////////////////////////////////
// // // Look up the following string methods!

// // Using charAt(), print the letter i in Sabrina

// let str = 'Sabrina'

// console.log(str.charAt(4))

// // Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// //Unicode is essentilally universal code that is used across several diffeent languages. It is specific to each character that is commonly used
// let name = 'Teddy'

// console.log(name.charCodeAt(2))

// // Using fromCharCode() - make it readable for us :). You'll see!

// console.log(String.fromCharCode(100))

// // Take your first and last name and concat()

// let firstName = 'Sharon'
// let lastName = 'Ogbonna'

// console.log(firstName.concat(lastName))

// // Create a string and make it return true using startsWith()

// let start = 'I get it from my momma'

// console.log(start.startsWith('I'))

// // Now use any variable with endsWith() and return false

// console.log(start.endsWith('I'))

// // Finish the following sentence. Use includes() and return true.
// const ozgur = 'Once upon a time Ozgur looked up at the Moon, and saw a cow'

// console.log(ozgur.includes('cow'))

// // Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
// const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

// console.log(joshHadALittleLambOopsCow.indexOf('cow'))

// ////////////////////////////////////////////////////////////////
// // Boolean:
// ///////////////////////////////////////////////////////////////

// // I just want my dreams to come true. 
// // With the powers of logical and comparison operators, PRINT TRUE please!
// // Replace the underscores.

// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

// console.log(a < b)
// console.log(c > b)
// console.log(d == d)
// console.log(d != a)
// console.log(a < 15)
// console.log(a < b < c)
// console.log(c > b > a != d)


// ////////////////////////////////////////////////////////////////
// // Loops:
// ///////////////////////////////////////////////////////////////
// // Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.

// for (let kensRoom = 1; kensRoom <= 10; kensRoom++){
//   console.log(`I'm sooo dizzy. I've spun ${kensRoom} times!`)
// }

// // Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
// for (let teosVision = 1; teosVision <= 20; teosVision++){
//   console.log(teosVision)
// }

// // But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
// let teosVision = 1

// while (teosVision <=20){
//   console.log("I'm Sorry")
//   teosVision++
// }

// // For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// // To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
// const whateverQueenBeySaid = {
//     thing1: 'shoes',
//     thing2: 'clothes',
//     thing3: 'gaming console'
//   }
//   let boxToTheLeft = ''
//   for (let thing in whateverQueenBeySaid){
//     boxToTheLeft += whateverQueenBeySaid[thing]
//   }
//   console.log(boxToTheLeft)
  
  // // Using (FOR IN LOOP), print the indexes of the array.
  // const lana = ['l', 'a', 'n', 'a']
  
  // let Lana = ''
  // for (let l in lana){
  //   Lana += lana[l]
  // } 
  // console.log(Lana)

  // // USE (FOR OF LOOP)!
  // const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

  // let text = ""
  // for (let t of tia){
  //   text += t
  // }
  // console.log(text)

  // // Look into forEach() loop, it accepts a callback aka a function inside a function. 
  // // Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
  // const perscholas = ['Amira', 'Arely', 'Jonathan']
  
  // perscholas.forEach(function(name){
  //   let pass = 'PS'
  //   console.log(`${name} ${pass}`)
  // })

////////////////////////////////////////////////////////////////
// Arrays:
///////////////////////////////////////////////////////////////

// Look up the following: Make a note of what each one of these methods do
// push() - adds new elements to the end of an array, and returns the new length
// pop() - removes the last element of an array, and returns that element
// unshift() - adds ne elements to the beginning of an array, and retunr the new length
// shift() - removes the first element of an array, and returns that element
// concat() -joins the arrays and return an array with the joined arrays
// splice() - adds/removes elements from an array
// slice() - selects part of an array, and returns the new array
// sort() - sorts the elements of an array
// includes() - check inf an array contains the specified element
// indexOf() - searth the array for an element and returns its position
// length - sets or returns the number of elements in an array

// /* You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket, Raphael pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
// var shoppingList = [

//   "cool ranch doritos",

//   "kings hawaiian sweet bread",

//   "peanut butter oreos",

//   "fruit loops cereal"

// ];

// shoppingList.push('Hendricks gin')
// console.log(shoppingList)

// //3.  Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.*/

// var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
// console.log(yoda.reverse())

//4. People been lining up for hours to get the newest iphone release. Help manage the unruly crowd of privileged customers by serving them one at a time and assiging it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];

// let length = waitList.length;
// let nowServing = ''

// for (var i=0; i<length; i++) {
//   nowServing = `now serving: ${waitList[0]}`
//   console.log(nowServing)
//   waitList.shift();
// }

// console.log(waitList)

//5. Help Nike sell more overpriced sneakers by changing their slogan from an array into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.

// var shoe = ["just", "do", "it"];
// let shoeString = ''

// for (let word of shoe){
//   shoeString += word + ' '
// }
// console.log(shoeString)

// ===== SPREAD OPERATOR ===== 

// // Create a variable and assign a value of a copied array using the spread operator

// let spread = [ "Chance the Rapper", "Khalid", "Tay-Tay", ..."Barry Manilow", "Piko Taro" ];

// console.log(spread)

// // Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
// const cars1 = ["Saab", "Volvo", ..."BMW"];

// const combined = [cars1, ...spread];
// console.log(combined)

////////////////////////////////////////////////////////////////
// Functions:
///////////////////////////////////////////////////////////////

// Don't forget to CALL your functions

//1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.


// function maxOfTwoNumbers(x,y){
//   if (x > y){
//     let maxnum = x
//   }else if(y > x){
//     maxnum = y
//   }else{
//   maxnum = 'They are the same'
//   }
// return maxnum
// }
// console.log(maxOfTwoNumbers(9, 11))

//2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3){
  if (num3 > num2 && num3 > num1){
    let biggest = num3
  }else if (num2 > num3 && num2 > num1){
    biggest = num2
  }else if (num1 > num2 && num1 > num3){
    biggest == num3
  }else {
    biggest = 'error'
  }
return biggest
}
console.log(maxOfThree(15, 20, 35))
console.log(maxOfThree(15, 50, 35))
console.log(maxOfThree(80, 20, 35))
//3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise

//4. Write a function charCount that takes a string and returns the length of the string.

//5. Write a function vowelCount that takes a String and returns the number of vowels in the String. Add a check for the string to be of 10 or less characters.