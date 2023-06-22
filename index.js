// Variables and Datatypes 
// A. Q + A 
/*
1. With the assignment operator, = 
2. call name of variable and use assignment operator, ex; a = 
3. declare name of new variable, use assignment operator, call name of existing operator, ex; let b = a
4. declare is just creating the name, assign is putting value to the variable, and define is both creating the name and assigning a value
5. Pseudocoding is writing the logic of the operation in plain / written language before translating to syntax.
6. Planning should be vast majority of your time, typing/syntax should be the last step. 
*/

// B. Strings
var firstVariable;
firstVariable = 'Hello World';
firstVariable = 1;
var secondVariable = firstVariable;
secondVariable = 'any string';
// firstVariable = 1
var yourName = 'Dylan Meyers';
console.log(`Hello, my name is ` + yourName);

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b );
console.log(c > d );
console.log('Name' === 'Name');
console.log(true || false );
console.log(false && false && false && false && false || true );
console.log(false == false);
console.log(e === 'Kevin');
console.log(a + b === c);
console.log(a * a === d);
console.log(48 == '48');

// D. The farm

let animal = 'cat';

if (animal = 'cow'){
    console.log('mooooo');
} else {
    console.log("Hey! You're not a cow.")
};

// E. Driver's Ed

let personAge = 25;
personAge >= 16 ? console.log('Here are they keys!'):console.log("Sorry, you're too young.")

// II. Loops 
// Good: for (let i = 0; i < 100; ++)

// A. The Basics 

for(let i = 0; i <= 10; i++){
    console.log(i)
}

for(let i = 10; i <= 400; i++){
    console.log(i)
}

for(let i = 12; i < 4000; i += 3){
    console.log(i)
}

// B. Get Even

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0 ){
        console.log(i + ' is an even number.')
    }
}

// C. Give me Five. 
for(let i = 0; i <= 100; i++){
    if(i % 5 && i % 3){
        console.log('I found a ' + i + ' High five!')
        console.log('I found a ' + i + ' Three is a crowd.')
    }
    if(i % 5 === 0){
        console.log('I found a ' + i + ' High five!')
    } 
    else if(i % 3 === 0){
        console.log('I found a ' + i + ' Three is a crowd.')
    }
}

// D. Savings account. 
let bankAccount = 0

for(let i = 1; i <= 10; i++){
    bankAccount += i;
    console.log(bankAccount)
}

for(let i = 1; i <= 100; i++){
    bankAccount = bankAccount + (i*2);
    console.log(bankAccount)
}

// Arrays & Control Flow

/* 
A. Talk About it
1. elements
2. no, they are created in the order they are given
3. shopping list, fibbonaci sequence
*/

// B. Easy does it

let arr = ['1a', '2s', '3s', '4d']

//C. Accessing Elements

const randomThings = [1, 10, 'hello', true];
randomThings[0];
randomThings[2] = 'World'
console.log(randomThings[2])
console.log(randomThings)

// D. Change Values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2];
ourClass[4] = 'Octocat';
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix It Up

const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "whyyy");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();
console.log(myArray);

// F. Biggie Smalls

let learning = 5;
if(learning > 100){
    console.log('big number')
} else {
    console.log('little number')
}

// G. Monkey in the Middle

if (learning < 5){
    console.log('little number')
} else if (learning > 10) {
    console.log('big number')
} else {
    console.log('monkey')
}

// H. What's in your closet? 

const kristynsCloset = [
    'left shoe',
    'cowboy boots',
    'right sock',
    'GA hoodie',
    'green pants',
    'yellow knit hat',
    'marshamallow peeps'
];

const thomsCloset = [
    [
        'grey button-up',
        'dark grey button-up',
        'light blue button-up',
        'blue button-up',
    ],[
        'grey jeans',
        'jeans',
        'PJs',
    ],[
        'wool mittens',
        'wool scarf',
        'raybans'
    ]
];
console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');
console.log(kristynsCloset.indexOf('yellow knit hat'));
kristynsCloset.splice(6, 0, 'raybans');
console.log(kristynsCloset);
kristynsCloset[5] = 'stained knit hat';
thomsCloset[0][0];
thomsCloset[1][1];
thomsCloset[2][1];
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!")
thomsCloset[1][2] = 'Footie Pajamas'
console.log(thomsCloset[1][2])

// IV. Functions

//A. I'm glad you think I can print a greeting. 

//B. 
function printCool(name){
    console.log(name + " is cool.")
}
printCool("Reynolds")

// C. 

function calculateCube(number){
    console.log(number ** 3 )
}
calculateCube(5)

// D. 
function isVowel(string){
    string = string.toUpperCase();
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    return vowels.includes(string)
}
console.log(isVowel('a'))

// E. 
function getTwoLengths(string1, string2){
    return [string1.length, string2.length]
}
console.log(getTwoLengths('testing', 'string'))

// F. 
function getMultipleLengths(string){
    let arr = []
    for(let item of string) {
        arr.push(item.length)
    }
    return arr
}
console.log(getMultipleLengths(["hello", "what", "is", "up"]))

// G. 
function maxOfThree(num1, num2, num3){
//    return Math.max(num1, num2, num3);
    if (num1 >= num2 && num1 >= num3){
        return num1
    } else if (num2 >= num1 && num2 >= num3){
        return num2
    } else {
        return num3
    }
}
console.log(maxOfThree(40, 7, 15))