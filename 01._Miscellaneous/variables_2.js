"use strict";

// totalGlobalVariable = "Never EVER!!! do this";
// var globalVariable = "Also NEVER do this!";


// rules
// always use const if you can get away with it
// otherwise use let


function myFunction() {
    // function scope
}


{
    // block scope
    var myValue = true;
    {
        var myValue = false;
    }
    console.log(myValue);
}


{ // her bliver myValue true fordi man bruger let og den bliver sat i sit eget block scope. = false ligger i sit eget block scope 
    let myValue = true;
    {
        let myValue = false;
    }
    console.log(myValue);
}


// her er der et eksempel på et scoping problem med brugen af var. Her printer den 6 6 6 6 6 6
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
     console.log(i);

    }, 1000);
}


// her får du det "rigtige" resultat hvor dne printer o til 5 fordi man bruger let.
for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
     console.log(i);

    }, 1000);
}