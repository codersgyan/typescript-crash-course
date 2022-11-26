// let num1 = 1;

// function calculate(num1: number, num2: number) {
//     return num1 + num2;
// }

// console.log(calculate(num1, 3));

// function getTotal(numbers: Array<number>) {
//     return numbers.reduce((acc, item) => {
//         return acc + item;
//     }, 0);
// }

// console.log(getTotal([3, 2, 1]));

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 'professor',
// };
// console.log(user);

// number
// string
// arr[]
// boolean

// Type alias

// type User = {
//     name: string;
//     age: number;
//     address?: string;
// };

// function login(userData: User): User {
//     return userData;
// }

// const user = {
//     name: 'Rakesh K',
//     age: 30,
// };

// console.log(login(user));

// type ID = number | string;

// const userId: ID = '123';
// Interfaces
// interface Transaction {
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }

// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean;
//     transactions: Transaction[];
// }

// const transaction1: Transaction = {
//     payerAccountNumber: 123,
//     payeeAccountNumber: 455,
// };

// const transaction2: Transaction = {
//     payerAccountNumber: 123,
//     payeeAccountNumber: 456,
// };

// const bankAccount: BankAccount = {
//     accountNumber: 123,
//     accountHolder: 'John Doe',
//     balance: 4000,
//     isActive: true,
//     transactions: [transaction1, transaction2],
// };

// Extend
// interface Book {
//     name: string;
//     price: number;
// }

// interface EBook extends Book {
//     // name: string;
//     // price: number;
//     fileSize: number;
//     format: string;
// }

// interface AudioBook extends EBook {
//     // name: string;
//     // price: number;
//     // fileSize: number;
//     // format: string;
//     duration: number;
// }

// const book: AudioBook = {
//     name: 'Atomic habits',
//     price: 1200,
//     fileSize: 300,
//     format: 'pdf',
//     duration: 4,
// };

// Merge
// interface Book {
//     name: string;
//     price: number;
// }

// interface Book {
//     size: number;
// }

// const book: Book = {
//     name: 'Atomic habits',
//     price: 1200,
//     size: 45,
// };

// type Book = {
//     name: string;
//     price: number;
// }

// type Book = {
//     size: number;
// }

// type SanitizedString = string;
// type EvenNumber = number;

// interface SanitizedString extends string {

// }
// Unions
// type ID = number | string;
// // Narrowing
// function printId(id: ID) {
//     if (typeof id === 'string') {
//         console.log(id.toUpperCase());
//     } else {
//         console.log(id);
//     }
// }

// printId('1');

// function getFirstThree(x: string | number[]) {
//     return x.slice(0, 3);
// }

// console.log(getFirstThree([1, 2, 3, 4, 5]));

// Generics

// function logString(arg: string) {
//     console.log(arg);
//     return arg;
// }

// function logNumber(arg: number) {
//     console.log(arg);
//     return arg;
// }

// function logArray(arg: any[]) {
//     console.log(arg);
//     return arg;
// }

// function logAnything<T>(arg: T): T {
//     console.log(arg);
//     return arg;
// }

// logAnything(['hello']);

// interface HasAge {
//     age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//     return people.sort((a, b) => b.age - a.age)[0];
// }

// const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 10 }];

// interface Player {
//     name: string;
//     age: number;
// }
// const players: Player[] = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 35 },
//     { name: 'Joe', age: 16 },
// ];
// // Assertion
// // const person = getOldest(players) as Player;

// const person = getOldest(people);
// // Generics
// person.age;

interface IPost {
    title: string;
    id: number;
    description: string;
}

interface IUser {
    id: number;
    name: string;
    age: number;
}

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };

// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };

// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }

// (async () => {
//     // const posts = await fetchPostData('/posts');
//     const posts = await fetchData<IPost[]>('/posts');
//     posts[0].
// })();

// Structural typing or duck typing
// interface ICreadential {
//     username: string;
//     password: string;
//     isAdmin?: boolean;
// }

// function login(credentials: ICreadential): boolean {
//     console.log(credentials);
//     return true;
// }

// const user = {
//     username: 'codersgyan',
//     password: 'secret',
//     isAdmin: true,
// };

// login(user);
// interface IAuth {
//     username: string;
//     password: string;
//     login(username: string, password: string): boolean;
// }

// const auth: IAuth = {
//     username: 'codersgyan',
//     password: 'secret',
//     login(username: string, password: string) {
//       return true;
//     }
// }

// inference
// let num = 'Coders';
