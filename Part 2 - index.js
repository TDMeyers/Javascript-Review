// Part 2 

// Section 1 Arrays, Loops, and Conditional Reps 

// Part II: JavaScript Reps
///////////////////////////
// Easy Going 
///////////////////////////

for(let i = 1; i <= 20; i++){
    console.log(i);
};

///////////////////////////
// Get Even
///////////////////////////

for(let i = 1; i <= 200; i++){
    if(i % 2 === 0){
        console.log(i);
    }
};

///////////////////////////
// Fizz Buzz 
///////////////////////////

for(let i = 1; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log('Fizzbuzz')
    }
    else if (i % 3 === 0){
        console.log('Buzz')
    }
    else if (i % 5 === 0){
        console.log('Fizz')
    }
    else {
        console.log(i)
    }
};

///////////////////////////
// Wild Wild Life
///////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgon Dog", 2, "Upside Down"]

// 1. 
plantee[2]++;
console.log(plantee);

// 2. 
wolfy[3] = 'Gotham City';
console.log(wolfy)

// 3. 
dart[3] += 'Hawkins';
console.log(dart)

// 4. 
wolfy.shift();
console.log(wolfy);
wolfy.unshift('Gameboy');
console.log(wolfy);

///////////////////////////
// Wild Wild Life
///////////////////////////

console.log("Yell at the Ninja Turtles");
let turtleArray = ['Leonardo', 'Michelangelo', 'Donatello', 'Raphael'];
for (let turtle of turtleArray){
    console.log(turtle.toUpperCase());
}

///////////////////////////
// Methods, Revisited
///////////////////////////

console.log("Methods, Revisited");

const favMovies = [`Jaws`, `The Fellowship of the Ring`, `Howl's Moving Castle`, `Django Unchained`, `Titanic`, `Fast and Furious`];

console.log(favMovies.at(-1));

favMovies.sort();

console.log(favMovies);

favMovies.pop();

console.log(favMovies);

favMovies.push(`Guardians of the Galaxy`);

console.log(favMovies);

favMovies.reverse();

console.log(favMovies);

favMovies.shift();

console.log(favMovies);

favMovies.unshift(); // returns length of new array. 

console.log(favMovies.indexOf(`Django Unchained`));
favMovies.splice(favMovies.indexOf(`Django Unchained`), 1, `Avatar`);

console.log(favMovies); //Yes, alters our array. 

// favMovies.slice(-Math.floor(favMovies.length/2));
console.log(favMovies); 

let newMovies = favMovies.slice(-Math.floor(favMovies.length/2));

console.log(newMovies);

console.log(favMovies.indexOf(`Titanic`)); // -1, means it is not in the array

///////////////////////////
// Methods, Revisited
///////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1, 1);

console.log(whereIsWaldo);

whereIsWaldo[1][2] = "No one";

console.log(whereIsWaldo);

console.log(whereIsWaldo[2][1][1]);

///////////////////////////
// Excited Kitten
///////////////////////////

let catResponses = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for(let i = 0; i < 20; i++){
    if (i % 2 === 0){
        console.log(catResponses[Math.floor(Math.random()*3)])
    } else 
    {console.log("Love me, pet me! HSSSSS!")}
}

///////////////////////////
// Find the Median
///////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort();

let median = Math.floor(nums.length / 2) 

console.log(median)

///////////////////////////
// Return of the Closets
///////////////////////////

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
    ['grey button-up',
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

let kristynsShoe = kristynsCloset.splice(0,1);

thomsCloset[2].push(kristynsShoe[0]);

console.log(kristynsShoe, thomsCloset);

///////////////////////////
// Dress Us Up
///////////////////////////

// let outfit1 = {item1: kristynsCloset[0], item2: kristynsCloset[4], item3: kristynsCloset[2]}
// saving outfit as object
// function closetPrint(...object){
//     for(let item of object){
//         console.log(item)
//     }
// }
// closetPrint(outfit1)

console.log("Thom is wearing " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + " and " + thomsCloset[2][0] + "!");
console.log("Thom is wearing " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!");
console.log("Thom is wearing " + thomsCloset[0][2] + ", " + thomsCloset[1][2] + " and " + thomsCloset[2][2] + "!");

console.log("Kristyn is wearing " + kristynsCloset[2] + ", " + kristynsCloset[4] + " and " + kristynsCloset[1] + "!");
console.log("Kristyn is wearing " + kristynsCloset[3] + ", " + kristynsCloset[0] + " and " + kristynsCloset[3] + "!");
console.log("Kristyn is wearing " + kristynsCloset[0] + ", " + kristynsCloset[5] + " and " + kristynsCloset[6] + "!");

///////////////////////////
// Dirty Laundry
///////////////////////////

for (let item of kristynsCloset){
    console.log(`WHIRR: Now washing ` + item)
};

console.log(thomsCloset[0], thomsCloset[1], thomsCloset[2]);