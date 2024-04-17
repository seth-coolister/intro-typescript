import curriculum from '../data/curriculum.json';
import { CodeSnippet } from '../lib/classes/CodeSnippet';
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("typescript", typescript);

const blocks = curriculum['responsive-web-design'].blocks;

const blocksArray = Object.values(blocks);

const [basicCss, basicHTML, flexbox, grid] = blocksArray; // example of destructuring an array

let { meta, challenges } = basicCss; // example of destructuring an object

const navBar = document.querySelector('.navbar');
const navList = document.querySelector('#navList');
const snippetDisplay = document.querySelector('#snippetDisplay');

const buildTopNavFromJSON = (blocksArray: any) => {
    blocksArray.forEach((block: any, index: Number) => {
        //console.log(block.meta.name)
        const navItem = document.createElement('a');
        navItem.classList.add('btn','btn-sm','w-40','m-2','hover:bg-primary');
        navItem.href = `#${block.meta.dashedName}`;
        navItem.textContent = block.meta.name;

        navItem.addEventListener('click', () => {
                // find block that matches clicked nav item
                blocksArray.forEach((item:any) => {
                const navItem = document.querySelector(`a[href="#${item.meta.dashedName}"]`);
                navItem?.classList.remove('border-primary','border-2','text-cyan-800');
            })
            navItem.classList.add('border-primary','border-2','text-cyan-800');

            buildLeftNavFromJSON(block);
        })
        navBar?.appendChild(navItem);
    })
}

const buildLeftNavFromJSON = (block: any) => {
    while (navList?.firstChild) {
        navList.removeChild(navList.firstChild);
    }
    block.challenges.forEach((challenge: any) => {
        const listItem = document.createElement('li');
        listItem.textContent = challenge.title;
        listItem.classList.add('btn','btn-sm','w-60','my-1','border-2','hover:border-primary','hover:bg-white');

        listItem.addEventListener('click', () => {
            //console.log(challenge.title);
            buildSnippetDisplay(challenge);
            window.scrollTo({top: 0, behavior: 'smooth'})
        })

        navList?.appendChild(listItem);
    })
}

const buildSnippetDisplay = (challenge: any) => {
    // clear snippet display
    while (snippetDisplay?.firstChild) {
        snippetDisplay.removeChild(snippetDisplay.firstChild);
    }
    // need instances of a CodeSnippet class to be created here
    // we will call constructor method of codesnippet class here
    const snippet = new CodeSnippet(
        challenge.title, 
        challenge.description, 
        challenge.instructions,
        challenge.solutions[0].indexhtml.contents
        );

    // make dom elements to display code snippet

    const title = document.createElement('h2');
    title.textContent = snippet.title;
    title.classList.add('text-3xl','font-bold','my-4')

    const description = document.createElement('div');
    description.innerHTML = snippet.description;
    // description.innerHTML = hljs.highlight(snippet.description, {language:"typescript"}).value;

    const instructions = document.createElement('div');
    instructions.innerHTML = snippet.instructions;
    instructions.classList.add('bg-primary-content','p-4','rounded-2xl','text-primary','my-4');

    const snippetSolution = document.createElement('div');
    snippetSolution.innerHTML = snippet.solution;

    snippetDisplay?.appendChild(title);
    snippetDisplay?.appendChild(description);
    snippetDisplay?.appendChild(instructions);
    snippetDisplay?.appendChild(snippetSolution);
}

buildTopNavFromJSON(blocksArray);

buildLeftNavFromJSON(basicCss);

let firstChallenge = basicCss.challenges[0];
buildSnippetDisplay(firstChallenge);















/* 
A Duck object needs to be able to quack and fly and swim. We can define an interface for the Duck object that specifies the methods that the Duck object should have. We can then use the interface to define the Duck object. This is a simple example of how interfaces can be used to define objects in TypeScript.

*/

interface CanQuack {
    quack: () => void
}

interface CanFly {
    wingSpan: number;
    fly(): void
}

interface CanSwim {
    swim(): void;
}

// interface composition

class Duck implements CanQuack, CanFly, CanSwim {
    quack() {
        console.log('quack')
    }
    wingSpan: number;
    fly(){
        console.log('flap flap flap')
    }
    swim() {
        console.log('splash splash splash')
    }
}

const duck = new Duck();
//duck.quack();
//duck.fly();
//duck.swim();