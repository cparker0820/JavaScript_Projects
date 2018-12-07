/**********************
*  Variables and Data Types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/************************************
*  Variables Mutation and Type Coercion
*/

/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable Mutation
age = 'twenty eight';
job = 'driver';

//'alert' creates a popup that must be cleared before continuing
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/************************************
*  Basic Operators
*/

/*
var year, yearJohn, yearMark;
year = 2018
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = year - ageJohn;
yearMark = year - ageMark;
console.log(yearJohn);
console.log(yearMark);

console.log(year + 2);
console.log(year * 2);
console.log(year/10);

// logical Operators
var johnOlder = ageJohn > ageMark; // should return 'false' boolean
console.log(johnOlder);

// typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/************************************
*  Operator Precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
