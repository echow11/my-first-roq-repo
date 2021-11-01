const  addition = (numberOne, numberTwo) => {
    let total = numberOne + numberTwo;
    console.log(`The result of ${numberOne} + ${numberTwo} equals ${total}!`);
} 

const  subtraction = (numberOne, numberTwo) => {
    let total = numberOne - numberTwo;
    console.log(`The result of ${numberOne} - ${numberTwo} equals ${total}!`);
} 

const  multiply = (numberOne, numberTwo) => {
    let total = numberOne * numberTwo;
    console.log(`The result of ${numberOne} * ${numberTwo} equals ${total}!`);
} 

const  divide = (numberOne, numberTwo) => {
    let total = numberOne / numberTwo;
    console.log(`The result of ${numberOne} / ${numberTwo} equals ${total}!`);
} 


addition(10, 5);
subtraction(11, 6);
multiply(12, 7);
divide(14, 2);