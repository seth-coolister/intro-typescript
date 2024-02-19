// a parameter is a named variable passed into a function. Parameter variables represent imported arguments in functions.
// arguments are the actual values passed into a function when called.
function add(num1: number, num2: number): string {
    return (num1 + num2).toString();
}

// Same funciton but with fat arrow syntax
// data type functionName = (parameters) => return;
const addArrow = (num1: number, num2: number): string => (num1 + num2).toString();

export const functionTypesExample = () => {
    return {
        title: "Function Types",
        explanation: `In JavaScript, functions are objects. TypeScript allows you to annotate functions with types.
- parameter types
- return types`,
        code: ` code sample coming soon `,
    }
}

/* export function functionTypesExample() {
    return {
      title: "Function Types",
      explanation: `In JavaScript, functions are objects. TypeScript allows you to annotate functions with types.
              - parameter types
              - return types`,
      code: `// parameter types`,
    }
  } */