import { basicTypesExample, arrayTypesExample, specialTypesExample } from "./basic-types";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

/* document.querySelector("#basicTypesButton").addEventListener("click", () => {
    const basicTypes = basicTypesExample();
    document.querySelector("#basicTypesTitle").innerHTML = basicTypes.title;
    document.querySelector("#basicTypesExplanation").innerHTML = basicTypes.explanation;
    document.querySelector("#basicTypesCode").innerHTML = basicTypes.code;
    document.querySelector("#codeDiv").classList.add("mockup-code");
})

document.querySelector("#arrayTypesButton").addEventListener("click", () => {
    const arrayTypes = arrayTypesExample();
    document.querySelector("#basicTypesTitle").innerHTML = arrayTypes.title;
    document.querySelector("#basicTypesExplanation").innerHTML = arrayTypes.explanation;
    document.querySelector("#basicTypesCode").innerHTML = arrayTypes.code;
    document.querySelector("#codeDiv").classList.add("mockup-code");
}) // old code (ugly) */

document.querySelector('#basicTypesButton').addEventListener('click', () => loadExample("basic"))
document.querySelector('#arrayTypesButton').addEventListener('click', () => loadExample("array"))
document.querySelector('#specialTypesButton').addEventListener('click', () => loadExample("special"))

const cardTitle = document.querySelector("#cardTitle");
const cardExplanation = document.querySelector('#cardExplanation');
const cardCode = document.querySelector("#cardCode");

function loadExample(exampleType: string){
    // based on exampleType load appropriate example
    let chosenExample;
    switch(exampleType) {
        case "basic":
            chosenExample = basicTypesExample();
            break;
        case "array":
            chosenExample = arrayTypesExample();
            break;
        case "special":
            chosenExample = specialTypesExample();
            break;
        default:
            chosenExample = basicTypesExample();
    }

    cardTitle.textContent = chosenExample.title;
    cardExplanation.textContent = chosenExample.explanation;
    cardCode.innerHTML = hljs.highlight(chosenExample.code, {language:"typescript"}).value;
   //  document.querySelector("#codeDiv").classList.add("mockup-code");
}

loadExample("basic");