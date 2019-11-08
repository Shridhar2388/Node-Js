// function statement syntax
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 5));

// function expression syntax, anonymous function

const sum_anonymous = function (a, b) {
    return a + b;
}

console.log(sum_anonymous(10, 15));

// ES6 arrow function
const sum_arrow_function = (a, b) => {
    return a + b;
}

console.log(sum_arrow_function(15, 15));

// ES6 function, when only one line of code present

const sum_arrow_function_1 = (a, b) => a+b;

console.log(sum_arrow_function_1(15, 25));
