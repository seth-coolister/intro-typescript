import { ExampleCodeSnippet } from '../lib/classes/ExampleCodeSnippet'

// Generic Sample 1. Generic Function Example
function reverse<T>(itemArray: T[]): T[] {
  return itemArray.reverse()
}

const monsterArray = ['Frankenstein', 'Dracula', 'Blob', 'Zombie']
const reversedMonsterArray = reverse(monsterArray)
console.log(reversedMonsterArray)

const numberArray = [23983, 8923498, 20989384, 945982]
const reversedNumberArray = reverse(numberArray)
console.log(reversedNumberArray)

const objectArray = [
  { name: 'Frankenstein' },
  { name: 'Dracula' },
  { name: 'Blob' },
  { name: 'Zombie' },
]
const reversedObjectArray = reverse(objectArray)
console.log(reversedObjectArray)

const booleanArray = [true, true, false, false]
const reversedBooleanArray = reverse(booleanArray)
console.log(reversedBooleanArray)

// Generic Sample 2.

class DataStorage<T> {
  private data: T

  constructor(data: T) {
    this.data = data
  }

  getData(): T {
    return this.data
  }
}

const stringStorage = new DataStorage<string>('Hello World!  This is a string.')
console.log(stringStorage.getData())

const numberStorage = new DataStorage<number>(123456789)
console.log(numberStorage.getData())

const booleanStorage = new DataStorage<boolean>(true)
console.log(booleanStorage.getData())

const objectStorage = new DataStorage<object>({ name: 'Frankenstein' })
console.log(objectStorage.getData())

// Generic Sample 3.  Generic Constraints
interface hasAge {
  age: number
}

function getTotalAge<T extends hasAge>(people: T[]): number {
  return people.reduce((total, person) => total + person.age, 0)
}

const people = [
  { name: 'Frankenstein', age: 200, foo: 'bar' },
  { name: 'Dracula', age: 500 },
  { name: 'Zombie', age: 100 },
]

const totalAge = getTotalAge(people)
console.log(totalAge)

/* ------------------------------------------------------------- */

const detailView = document.querySelector('#detail-view')
const detailViewExample = document.createElement('div')
detailView.appendChild(detailViewExample)

const exampleOne = new ExampleCodeSnippet(
  'Generic Function Example',
  'This is an example of a generic function that reverses an array of any type.',
  `
function reverse<T>(itemArray: T[]): T[] {
  return itemArray.reverse();
}`
)

const exampleTwo = new ExampleCodeSnippet(
  'Generic Classes',
  'Generic classes allow you to write code that can be reused with different types of data.',
`
class DataStorage<T> {
  private data: T

  constructor(data: T) {
      this.data = data;
  }

  getData(): T {
      return this.data;
  }
}`
)

const exampleThree = new ExampleCodeSnippet(
  'Generic Constraints',
  'Generic constraints allow you to specify that a generic type must have certain properties.',
`
interface hasAge {
    age: number;
  }

function getTotalAge<T extends hasAge>(people: T[]): number {
  return people.reduce((total, person) => total + person.age, 0)
}`
)

const exampleFour = new ExampleCodeSnippet(
  'Generic Utility Function Example',
  'This is an example of a generic utility function that merges two arrays of different types',
`
function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

/*
Example:
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ['a', 'b', 'c', 'd', 'e'];
console.log(mergedArray);
output: [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e']
*/`
)

const listView = document.querySelector('#list-view')

function renderExample(example: ExampleCodeSnippet) {
  const exampleElement = document.createElement('div')
  exampleElement.classList.add(
    'text-xs',
    'bg-primary-content',
    'p-4',
    'mx-2',
    'my-4',
    'rounded-xl',
    'overflow-x-auto',
    'overflow-y-auto',
    'hover:bg-slate-600',
    'hover:cursor-pointer'
  )
  exampleElement.innerHTML = example.renderCodeSnippet()
  listView.appendChild(exampleElement)
  exampleElement.addEventListener('click', () => {
    detailViewExample.classList.add(
      'text-md',
      'w-full',
      'p-4',
      'rounded-xl',
      'bg-primary-content'
    )
    detailViewExample.innerHTML = example.renderCodeSnippet()
  })
}

renderExample(exampleOne)
renderExample(exampleTwo)
renderExample(exampleThree)
renderExample(exampleFour)

/* Generics in TypeScript are a tool that allows you to create reusable code components that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

Here's a simple example of a generic function in TypeScript:

function identity<T>(arg: T): T {
    return arg;
}

In this example, T is a type variable—a kind of variable that works on types rather than values. This function will return whatever is sent into it, and the type T will be determined by the caller of the function when they pass an argument. */

/* Generic classes allow you to write code that can be reused with different types of data.

class DataStorage<T> {
    private data: T

    constructor(data: T) {
        this.data = data;
    }

    getData(): T {
        return this.data;
    }
}

const numberStorage = new DataStorage<number>(10);
const stringStorage = new DataStorage<string>('Hello');
const booleanStorage = new DataStorage<boolean>(true);
const objectStorage = new DataStorage<object>({name: 'Frankenstein'});
const arrayStorage = new DataStorage<number[]>([1, 2, 3, 4, 5]);

*/