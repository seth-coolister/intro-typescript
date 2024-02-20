import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

let indicator: number = 1;

// a parameter is a named variable passed into a function. Parameter variables represent imported arguments in functions.
// arguments are the actual values passed into a function when called.
function add(num1: number, num2: number): string {
    return (num1 + num2).toString();
}

// Same funciton but with fat arrow syntax
// data type functionName = (parameters) => return;
const addArrow = (num1: number, num2: number): string => (num1 + num2).toString();

export const functionParameterTypes = () => {
    return {
        title: "Data types can be set for function parameters",
        explanation: `When writing functions in TypeScript, you can specify the types of data that the function expects as parameters.`,
        code: `
        function add(num1: number, num2: number) {      
        return (num1 + num2);
        }`
    }
}

export const functionReturnTypes = () => {
    return {
        title: "Data types can be set for function return values",
        explanation: "When writing functions in TypeScript, you can specify the type of data that the function will return.",
        code: `
        function add(num1: number, num2: number): number {      
        return (num1 + num2);
        }`
    }
}

export const functionArrow = () => {
    return {
        title: 'All data typing of parameters and return values can be done in one line',
        explanation: 'Arrow functions are a shorter way to define functions in JavaScript and TypeScript',
        code: `
        const addArrow = (num1: number, num2: number): string => (num1 + num2).toString()`
    }
}

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

prevButton.addEventListener('click', () => {
    if(indicator > 1){
        indicator--;
        loadExample(indicator);
    }
})

nextButton.addEventListener('click', () => {
    if(indicator < 3){
        indicator++;
        loadExample(indicator);
    }
})


const cardTitle = document.querySelector("#cardTitle");
const cardExplanation = document.querySelector('#cardExplanation');
const cardCode = document.querySelector("#cardCode");

function loadExample(exampleNum: number = 1,) {
    // based on example load appropriate example
    let chosenExample;
    switch (exampleNum) {
        case 1:
            chosenExample = functionParameterTypes();
            break;
        case 2:
            chosenExample = functionReturnTypes();
            break;
        default:
            chosenExample = functionArrow();
            break;
    }

    cardTitle.textContent = chosenExample.title;
    cardExplanation.textContent = chosenExample.explanation;
    cardCode.innerHTML = hljs.highlight(chosenExample.code, {language:"typescript"}).value;
}

loadExample(indicator);