 // avoid "var"
 // var name = 'Andreas';
 
 const name = 'Andreas';

 // const is NOT constant
 // that menas that const CAN have its value changed
 // const is a constant in the DECLARATION
 // const MUST be declared as it is initialized

const me = {};  // {} er et javascript-objekt 

me.name = "Andreas";

console.log(typeof me.name);


const hobbies = ["coding"];

hobbies.pop(); //pop fjerner den sidste/nyeste i listen.

hobbies.push("drawing", "painting");

console.log(hobbies);


const jsObject = {
    whatAmI: "jsObject",

};


const dancerName = "Computer";

// "" or '' or `` = string literals
console.log("I can't dance");
console.log('I can "dance"');
// `` (backticks)
// ``= template strings
// ${} syntax = string interpolation
console.log(`${dancerName} can dance '""'""'"
    line 1
    line 2
    """'""`);




// console.log , vs. + 

const assignmentDescription = "...and the value is...";
const value = 4;

// don't use plus (+) in console.log to avoid type coercion. If you use plus down under, the number 4 will become a string. 
console.log(assignmentDescription, value);



// data types
// number, string, boolean, bigint, null, undefined, symbol, object







 