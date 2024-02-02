import { basicTypesExample, arrayTypesExample } from "./basic-types";

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

const cardTitle = document.querySelector("#cardTitle");
const cardExplanation = document.querySelector('#cardExplanation');
const cardCode = document.querySelector("#cardCode");

function loadExample(exampleType: string){
    // based on exampleType load appropriate example
    let chosenExampleType;
    switch(exampleType) {
        case "basic":
            chosenExampleType = basicTypesExample();
            break;
        case "array":
            chosenExampleType = arrayTypesExample();
            break;
        default:
            chosenExampleType = basicTypesExample();
    }

    cardTitle.textContent = chosenExampleType.title;
    cardExplanation.textContent = chosenExampleType.explanation;
    cardCode.innerHTML = chosenExampleType.code;
    document.querySelector("#codeDiv").classList.add("mockup-code");
}