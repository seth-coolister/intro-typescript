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
    code: `
  // boolean
    let isDone: boolean = false; // "is assigned the value of"
// isDone is a variable annotated with the boolean data type and assigned the value false.
  
// number
    let myNumber: number = 42;
// myNumber is a variable annotated with the number data type and assigned the value 42.
  
// string
    let myName: string = "Seth";
// myName is a variable annotated with the string data type and assigned the value "Seth".
`,
  };
}

export function arrayTypesExample(){
    return {
        title: "Array Types",
        explanation: "Typescript adds a few different types for arrays, including array, tuple, and enum.",
        code: `
        // Array
        let myArray: number[] = [1, 2, 3, 4, 5];
        let myStringArray: string[] = ["What's up", "Scrub"]

        // Tuple
        let myTuple: [string, number] = ["What's up", 42]
        // Tuples are fixed-length arrays where each element has a specific data type
        // There can be any amount of elements in a tuble, but the data types must match specific data types in declaration

        // Enum
        enum Color {Red, Green, Blue}
        // Gives a limited set of options for values
        `
    }
}

export function specialTypesExample() {
  return {
    title: "Special Types",
    explanation: "TypeScript has a few data types that are atypical, including any, void, null, undefined, and never",
    code: `
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
    `
  }
}

export function functionTypesExample() {
    return {
      title: "Function Types",
      explanation: `In JavaScript, functions are objects. TypeScript allows you to annotate functions with types.
              - parameter types
              - return types`,
      code: `// parameter types`,
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