const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

const imgContent = document.querySelector('section > img');

const objOptions = {
    root: null,
    threshold: 0.50,
    rootMargin: '0px'
}

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);

if(section1) sectionObserver.observe(section1);
if(section2) sectionObserver.observe(section2);
if(section3) sectionObserver.observe(section3);

function callBackFunction(entries: IntersectionObserverEntry[]){
    entries.forEach(entry => {
        const img = entry.target.querySelector('img');
        const targetClass = (entry.target as HTMLElement).dataset.class;
        if(entry.isIntersecting){
            img.classList.remove(targetClass as string, "opacity-0");
        } else {
            img.classList.add(targetClass as string, "opacity-0");
        }
    })
}



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