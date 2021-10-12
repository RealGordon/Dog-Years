/*
program to convert human age to dog years
__author: gordon.amamoo@amalitech.org
*/
//current human age
const myAge=27;

//the first 2 human years corresponds to 10.5 dog years
let earlyYears=2;
earlyYears*=10.5;

//Number of years left after the first 2 years
let laterYears=myAge-2;

//Compute the remaining dog years.
//Each year extra corresponds to 4 dog years
laterYears*=4;

console.log("First 2 years in dog years: "+earlyYears);
console.log("Later years in dog years: "+laterYears);

//Total age in dog years
myAgeInDogYears=earlyYears+laterYears;

//name  of human in lower case
const myName="Gordon".toLowerCase();

//printing name, human age and corresponding dog age to console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);