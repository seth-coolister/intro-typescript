import { ExampleCodeSnippet } from '../lib/classes/ExampleCodeSnippet';

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

const example1 = document.querySelector('#example1');
const example2 = document.querySelector('#example2');
const example3 = document.querySelector('#example3');
const example4 = document.querySelector('#example4');

const imgContent = document.querySelector('section > img');

const objOptions = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
}

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);

if(section1) sectionObserver.observe(section1);
if(section2) sectionObserver.observe(section2);
if(section3) sectionObserver.observe(section3);
if(section4) sectionObserver.observe(section4);

function callBackFunction(entries: IntersectionObserverEntry[]){
    entries.forEach(entry => {
        // const img = entry.target.querySelector('img');
        const div = entry.target.querySelector('div');
        const targetClass = (entry.target as HTMLElement).dataset.class;
        if(entry.isIntersecting){
            div.classList.remove(targetClass as string, "opacity-0");
        } else {
            div.classList.add(targetClass as string, "opacity-0");
        }
    })
}



const classExmaple = new ExampleCodeSnippet(
    'Class Example',
    `A class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or properties), and implementations of behavior (member functions or methods).`,
    `class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
        }
    }`

)

const abstractClassExample = new ExampleCodeSnippet(
    'Abstract Class Example',
    `Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.`,
    `
    abstract class Shape { 
        protected color: string; 
        abstract getArea(): number; 
        abstract getPerimeter(): number; 
        getColor(): string { return this.color; }
    }`
)

// add abstract class example
if (example1) example1.innerHTML = abstractClassExample.renderCodeSnippet();

const inheritanceExample = new ExampleCodeSnippet(
    'Inheritance Example',
    `Inheritance is a mechanism in which one calss acquires the property of another class. It helps to reuse, extend, and modify the code.`,
`
class Circle extends Shape {
    private radius: number;
    constructor(color: string, radius: number) {
        super();
        this.color = color;
        this.radius = radius
    }
    getArea(): number { return Math.PI * this.radius ** 2; }
    getPerimeter(): number { return 2 * Math.PI * this.radius; }
}`
)

// add inheritance example
if (example2) example2.innerHTML = inheritanceExample.renderCodeSnippet();

const polymorphismExample = new ExampleCodeSnippet(
    'Polymorphism Example',
    `Polymorphism is an object-oriented programming concept that refers to the ability of a variable, function, or object to take on multiple forms.`,
`
class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(color: string, width: number, height: number) {
        super();
        this.color = color;
        this.width = width;
        this.height = height;
    }
    getArea(): number { return this.width * this.height; }
    getPerimeter(): number { return 2 * (this.width + this.height); }
}`
)

// add polymorphism example
if (example3) example3.innerHTML = polymorphismExample.renderCodeSnippet();

const encapsulationExample = new ExampleCodeSnippet(
    'Encapsulation Example',
    `Encapsulation is the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components.`,
`
class Person {
    private name: string;
    private age: number;
    occupation: string;
    constructor(name: string, age: number, occupation: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    getName(): string { return this.name; }
    greet() { console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old. I work as a \${this.occupation}.\`); }
}`
)

// add encapsulation example
if (example4) example4.innerHTML = encapsulationExample.renderCodeSnippet();


// Abstraction

/* 
Abstract Class: The Shape class is declared as an abstract. It cannot be instatiated itself, but can be used to abstract the concept of a "shape"

Abstract Methods: functions inside abstract classes are methods. The methods getArea and getPerimeter must be implemented by any class that extends the shape class. The definitions are left to the subclasses to implement.

Encapsulation: Properties can be protected, public, and private. The color property is protected, meaning it can be accessed by the class itself and any class that extends it. It cannot be accessed from outside the class. This hides the internal state of the shape object, providing a level of abstraction.

Method: the getColor method provides a way to access the color property from outside the class without directly accessing the property itself. This is a form of abstraction, as internal implementation could change without affecting code that uses this method.
*/

abstract class Shape {

    protected color: string; // protected can be accessed within the class and any class that extends it

    abstract getArea(): number;

    abstract getPerimeter(): number;

    getColor(): string {
        return this.color;
    }

}

// Inheritance
/* 
Inheritance allows a class or subclass to have the same attributes and behaviors as another class (the parent / superclass) with the ability to add or override them.

The Circle class is the subclass and the Shape is the parent class. The Circle class inherits from the Shape class and has access to all public and protected members of Shape.

The super(color) call in the Circle constructor is also part of inheritance. It passes in the necessary parameters into the constructor. This is necessary because when a new circle is created, we also need to initialize the Shape properties.
*/

class Circle extends Shape {

    private radius: number; // private can only be accessed within the class

    constructor(color: string, radius: number) {
        super();
        this.color = color;
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

}

// Polymorphism
/* 
Polymorphism allows objects of different types to be treated as objects of a common type, typically achieved through inheritance and interfaces.
*/

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(color: string, width: number, height: number) {
        super();
        this.color = color;
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const shapes: Shape[] = [new Circle('red', 5), new Rectangle('blue', 4, 6)];

shapes.forEach(shape => {
    console.log(`Shape color: ${shape.getColor()}`);
    console.log(`Shape area: ${shape.getArea()}`);
    console.log(`Shape perimeter: ${shape.getPerimeter()}`);
});


// Encapsulation
/* 
Encapsulation restricts access to data and functions, keeping both safe from outside interference and misuse. It is achieved through access modifiers such as private, protected, and public. The data of an object is hidden from the outside world and only accessible through the object's methods.
*/

class Person {
    private name: string;
    private age: number;
    occupation: string;

    constructor(name: string, age: number, occupation: string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getName(): string {
        return this.name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I work as a ${this.occupation}.`);
    }
}

const alice = new Person('Alice', 25, 'Software Engineer');
alice.greet();
alice.getName(); 