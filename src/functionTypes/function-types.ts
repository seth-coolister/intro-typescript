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
const addArrow = (num1: number, num2: number): string =>
(num1 + num2).toString()`
    }
}

export const optionalParameters = () => {
    return {
        title: "Function parameters can be made optional by adding a ? after the variable name",
        explanation: "If the optional age parameter is provided below, the function will return a string that includes the name and age of the user. If the optional age parameter is not provided, the function will return a string that only includes the name of the user.",
        code: `
function greetUser(name: string, age?: number): string {
    if (age) {
        return "Hello " + name + " you are " + age + " years old today."
    }
    else {
        return "Hello " + " Name."
    }
}`
    }
}

export const callbackFunctions = () => {
    return {
        title: "Callback functions are functions that are passed as parameters for other functions",
        explanation: "Callback functions are functions that are passed as arguments for other functions, they are used to execute code after a certain event has occured",
        code: `
function delayedResponse(callback: (message: string) => void, delay: number): void {
    setTimeout(() => {
        callback('This is a delayed response');
    }, delay);
}

// usage
delayedResponse((message) => {
    console.log(message);
}, 2000);
`
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
    if(indicator < 5){
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
        case 3: 
            chosenExample = functionArrow();
            break;
        case 4:
            chosenExample = optionalParameters();
            break;
        case 5:
            chosenExample = callbackFunctions();
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

// callback functions are functions that are passed as arguments for other functions, they are used to execute code after a certain event has occured

function delayedResponse(callback: (message: string) => void, delay: number): void {
    setTimeout(() => {
        callback('This is a delayed response');
    }, delay);
}

// usage
delayedResponse((message) => {
    console.log(message);
}, 2000);

function fetchData(url: string, callback: (data: string) => void): void {
    // performs some asynchronous operation to fetch data from the provided url
    // when the operation is complete, the callback function is called with the fetched data
    const data = 'some data fetched from the URL';
    callback(data);
}