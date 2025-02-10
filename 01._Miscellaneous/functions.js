// task create a function called getRandomInt that has the parameters
// task min and max and an empty body for now



// hoisting, Dette vil virke da Javascript kører hele filen igennem inden udførsel. Den tager ikke linje for linje. 
console.log(getRandomInt(0, 10));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
};

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) - min);
};



const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) - min);
};

// action er callback function. 
// a callback is a function that is passed as a parameter to another function
// possibly with the aim of calling it later (but not necesserly)
          // name: string action: function
function genericPerformer(name, action) {
    return action(name);
};




// Lasse coding
const codingAction = (name) => `${name} likes coding.`;


// assignment: using the generic performer, I would like it to say:
// assignment: Lasse likes coding.. write it below

console.log(genericPerformer("Lasse", codingAction));





// Andreas sleeping
function sleepingAction(name) {
    return `${name} loves sleeping`;
};

console.log(genericPerformer("Andreas", sleepingAction));





// Tara boxing
// assignment: the desired result is: tara owns at boxing
// assignment: write it all as a one-liner

console.log(genericPerformer("Tara", (name) => `${name} owns at boxing`));





