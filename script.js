/*

let js = 'amazing';

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = 'Jonas';
console.log(firstName);
console.log(firstName);
console.log(firstName);



// variable name conventions

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "Teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(year);
console.log(typeof year);

console.log(typeof null);


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


console.log(ageSarah, ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schimidt';

console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2019);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageSarah + ageJonas) / 2
console.log(ageSarah, ageJonas, averageAge);


// const massMark = 78;
// const massJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;
const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;


const BMIMArk = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMArk > BMIJohn;

console.log(BMIMArk, BMIJohn, markHigherBMI);

const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'M ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);
console.log('just a normal string...');

console.log('string with \n\
multiple \n\
spaces');

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sara can start driving License!');
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearLeft} years :) `);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;


const BMIMArk = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMArk > BMIJohn;

if (BMIMArk > BMIJohn) {
    console.log(`Mark's BMI is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI is higher than Mark's ${BMIMArk}!`);
}

// type conversation
const inputyear = '1991';
console.log(Number(inputyear), inputyear);
console.log(Number(inputyear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am ", + 23 + ' years old');
console.log("I am ", + String(23) + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;

if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log('YAY! height is defined!');
} else {
    console.log('HEIGHT IS UNDEFINED!');
}

const age = '18';
if (age === 18) console.log('You just became an adult! (scrict)');
if (age == 18) console.log('You just became an adult! (loose)');

const favourite = Number(prompt("what's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number!');
} else if (favourite === 9) {
    console.log('9 is also a cool number!');
} else {
    console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");


const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const isTired = false; // C

console.log(hasDriverLicense && hasGoodVision && isTired);

const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if (shouldDrive) {
    console.log("She is able to drive");
} else {
    console.log("Someone else should drive");
}

const scoreDolphins = (102 + 102 + 106) / 3;
const scoreKoalas = (120 + 145 + 33) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins wins the trophy!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log("Koalas wins the trophy!");
} else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log("Both win the trophy!");
} else {
    console.log("No one wins the trophy");
}

const day = 'sunday';

switch (day) { // day === 'monday'
    case 'monday':
        console.log("plan course structure");
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

const age = 22;
// age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(drink2);

console.log(`I like do drink ${age >= 18 ? 'wine' : 'water'}`);

*/

bill = 430;
tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);

// payment = bill + (bill * (15 / 100));
// console.log(`The payments was ${payment} dollars`);