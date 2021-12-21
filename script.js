/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);
////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";
let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);
////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);
////////////////////////////////////
// let, const and var
let age = 30;
age = 31;
const birthYear = 1991;
// birthYear = 1990;
// const job;
var job = 'programmer';
job = 'teacher'
lastName = 'Schmedtmann';
console.log(lastName);
////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
////////////////////////////////////
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');
console.log(`String
multiple
lines`);

const age = 15;
const isOldEnough = age >= 18;
const yearLeft = 18 - age;

if (isOldEnough) {
    console.log(`Aswin can start driving 🚗`)
} else {
    console.log(`Aswin Has to wait for ${yearLeft} years 🙄`)
}*/

/*
control structure

if () {

} else {

} 
// variable declared within the block can not be accesed 
// outside
// can re assigned conditionaly.
const birthYear = 2001;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const heightMark = 1.88;
const weightMark = 95;
const weightJohn = 85;
const heightJohn = 1.76;

const BMIMark = weightMark / heightMark **2;
const BMIJohn = weightJohn/(heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn
if (BMIMark > BMIJohn) {
     console.log(`Mark has higher BMI than Jhon and his BMI is ${BMIMark}`)
} else {
    console.log(`John has higher BMI than Mark and his BMI is ${BMIJohn}`)
}

// Type conversion (Mannual) and coercion (automatically converts)

const inputYear = `1994`;
// convert string to number
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
NaN - Not a Number


// type coercion
console.log('I am '+ 27 + ' years old')
//where operator -,*,/ consider string as number perform the operation
console.log('23' - '10' - 3);
console.log('27'/'9');
console.log('23'<'10');
// + concate the string 
console.log('23'+'10');

// five Falsy values: 0, '', undefined, null, NaN.
Falsy value - Converted to false when try to convert it to Boolean
            exactly not false initialy but it become false when convert it to boolean


const money = 100;
if (money) {
    console.log('Do not spend it all');
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log('YAAY! Height is defined');
} else {
    console.log('Height is undefined');
}
*/

//********Equality operator******
// const age = "27";
// if (age === 27){
//     console.log(`Its Aswin's age`)
// } else {
//     console.log(`its string`)
// }

// "==" -> compare the value
// "===" -> compare the type of value 

// const favourite = Number(prompt("What's your favourite number?"));


// Boolean logic - AND, OR, NOT
/* 
Boolean variables that can be either True or Flase

A And B - True when ALL are True
A OR B - True when one of the variable is true
NOT (!A) - Inverts True/ False

!A (True) - False
A (true) AND B (false) - false
A (true) OR B ( false) - false
*/
// Logic Operator
// const hasDriverLicense = true // A
// const hasGoodVision = true //B
// const isTried = false // 


// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasGoodVision && hasDriverLicense && !isTried;

// if (shouldDrive) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else can drive')
// }
// Code challenge

// const avgDolphin = (89+91+110)/3;
// const avgKollas = (10+95+123)/3;
// if (avgDolphin > avgKollas) {
//     console.log('Dolphins lift the trophy')
// } else  if (avgDolphin < avgKollas) {
//     console.log('Kollas lift the torphy')
// } else if (avgDolphin === avgKollas) {
//     console.log('Both wins the trophy')
// }

//Bonus 1 & 2
// const avgDolphin = (97+112+100)/3;
// const avgKollas = (109+95+55)/3;
// if (avgDolphin > avgKollas && avgDolphin >= 100) {
//     console.log('Dolphins lift the trophy 🏆')
// } else  if (avgDolphin < avgKollas && avgKollas >= 100) {
//     console.log('Kollas lift the torphy 🏆')
// } else if (avgDolphin === avgKollas && avgDolphin >= 100 && avgKollas >= 100) {
//     console.log('Both wins the trophy 😊')
// } else {
//     console.log('No one wins the trophy 😭')
// }

// Switch statement

// const day = 'sunday'
// switch(day)  {
// case 'Monday': // day === Monday does strict comparison
// console.log('Plan course structure');
// break;
// case 'tuesday' :
//     console.log('go for jog');
//     break;
// case 'wednesday' :
// case 'thrusday' :
//     console.log('plan for the task');
//     break;
// case 'friday' :
//     console.log('check for completion status');
//     break;
// case 'Saturday' :
// case 'sunday' :
//     console.log('Happy weekend🥳');
//     break;
// default :
//     console.log('Invalid data😯')
// }

// 27. Statement & Expression

// 28. Conditional Operator
//
/* 
const age = 23;
age >= 18 ? console.log('I like to drink 🍷') :
         console.log('I like to drink water 🚰');

const drink = age >= 18 ? 'Wine' : 'water' ;
console.log(drink);

let drink2;
if (age>= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? 'Wine' : 'water'}`);
*/

//****** Code challenege ********//
// let bill = 275
// let tip = bill <= 300 && bill >= 50 ? 
// bill*0.15 : bill * 0.2

// console.log(`The bill was ${bill}, 
// the tip was ${tip}, and the total vale is ${bill + tip}`);

// ********** end of fundamental part -1 **********//

