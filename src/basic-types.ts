export function basicTypesExample() {
    return {
        title: "Basic Types",
        explanation: `Typescript Data Types:
        boolean
        number
        string
        array
        tuple
        enum
        any
        void
        null and undefined
        never
        object`,
        code: `// boolean
        let isDone: boolean = false;
        // variable: data type annotation = value
        
        //number
        let myNumber: number = 42;
        
        //string
        let myName: string = "Seth"`,
    }
}

export function functionTypesExample() {
    return {
        title: "Function Types",
        explanation: `JS functions are objects, so TS allows you to annotate functions with types.
            - parameter types
            - return types`,
        code: `// parameter types`
    }
}

//example
 function add(x: number, y: number): number {
    return x + y;
 }