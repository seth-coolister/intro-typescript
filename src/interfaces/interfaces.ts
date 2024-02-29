import curriculum from '../data/curriculum.json';

const blocks = curriculum['responsive-web-design'].blocks;

const blocksArray = Object.values(blocks);

const [basicCss, basicHTML, flexbox, grid] = blocksArray; // destructuring

// console.log(basicCss);

const navBar = document.querySelector('.navbar');

const buildTopNavFromJSON = (blocksArray: any) => {
    blocksArray.forEach((block: any, index: Number) => {
        console.log(block.meta.name)
        const navItem = document.createElement('a');
        navItem.classList.add('btn','btn-sm','w-32','m-2');
        navItem.href = `#${block.meta.name}`;
        navItem.textContent = block.meta.name;
        navBar?.appendChild(navItem);
    })
}

buildTopNavFromJSON(blocksArray);






























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
duck.quack();
duck.fly();
duck.swim();