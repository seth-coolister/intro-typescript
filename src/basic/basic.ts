export function basicTypesExample() {
  return {
    title: "Basic Types",
    explanation: `TypeScript adds several data types on top of JavaScript's data types:
- boolean
- number
- string
- array
- tuple
- enum
- any
- void
- null and undefined
- never
- object `,
    code: `// Boolean
    let isDone: boolean = false; // "is assigned the value of"
// isDone (variable) annotated w/ boolean data type, assigned the value false.
  
// Number
    let myNumber: number = 42;
// myNumber (variable) annotated w/ number data type, assigned the value 42.
  
// String
    let myName: string = "Seth";
// myName (variable) annotated w/ string data type, assigned the value "Seth".
`,
  };
}

export function arrayTypesExample(){
  return {
    title: "Array Types",
    explanation: `TypeScript adds a few different types for arrays: 
- array
= tuple
- enum`,
    code: `// Array
    let myArray: number[] = [1, 2, 3, 4, 5];
    let myStringArray: string[] = ["Hello", "What's up"]

// Tuple
    let myTuple: [string, number] = ["What's up", 42]
// Tuples are fixed-length arrays where each element has a specific data type
// There can be any amount of elements in a tuble, but the data types must match specific data types in declaration

// Enum
    enum Color {Red, Green, Blue}
// Gives a limited set of options for values`
  }
}

export function specialTypesExample() {
  return {
    title: "Special Types",
    explanation: `TypeScript has a few data types that are atypical: 
- void
- null and undefined
- never`,
    code: `// Any type
    let notSure: any = myCar;
// type any can be assigned any value
    
// Void type
    function logMessage(message: string): void {
      console.log(message);
    }
// void is used on fuctions that return nothing
    
// Null and Undefined
    let u: undefined = undefined; // undefined is a JS primitive value and TS has a type named undefined that corresponds to the JS value
    
    let n: null = null; // same with undefined
    
// Never type
    function error(message: string): never {
      throw new Error(message);
    }
// never is a data type for values that never occur
// ex: a function that always throws an error will return a 'never'`
  }
}

//example
function add(x: number, y: number): number {
  return x + y;
}

let myArray: number[] = [1, 2, 3, 4, 5];
let myStringArray: string[] = ["What's up", "Scrub"]

enum Color {Red, Green, Blue}

const myCar = {
    make: "Toyota",
    model: "Camry",
    year: "2007",
    color: Color.Red
}

// any type
let notSure: any = myCar;
// type any can be assigned any value

// void type
function logMessage(message: string): void {
  console.log(message);
}
// void is used on fuctions that return nothing

// null and undefined
let u: undefined = undefined; // undefined is a JS primitive value and TS has a type named undefined that corresponds to the JS value

let n: null = null; // same with undefined

// never type
function error(message: string): never {
  throw new Error(message);
}
// never is a data type for values that never occur
// ex: a function that always throws an error will return a 'never'