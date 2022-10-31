// Enum
enum Color {
    Rojo = "Rojo", 
    Verde = "Verde",
    Azul = "Azul",
}
let colorFavorito: Color = Color.Azul;
// console.log(`Mi color favorito es: ${colorFavorito}`);

// Interface
interface Rectangle {
    width: number;
    height: number;
    color?: Color;
}
let rect: Rectangle = {
    width: 3, 
    height: 6,
    //color: Color.Rojo,
}
function area(r: Rectangle): number {
    return r.width * r.height;
}
const areaRect = area(rect);
rect.toString = function () {
    return this.color ? `Un Rectángulo ${this.color}` : `Un Rectángulo`;
}
console.log(areaRect);
console.log(rect.toString());

// Functions
function add(a: number, b: number): number {
    return a + b;
}
const sum = add(8, 3);
function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}
const addFour = createAdder(4);
const fourPlusSix = addFour(8);
// console.log(fourPlusSix);

// Optional Argument
function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}
const richard = fullName("Richard"); // the lastName is now undefined
// console.log(richard);

// Boolean
let muted: boolean = true;
muted = false;
// muted = "shut-up"; // generates an error 

// Numbers
let numerator: number = 43;
let denominator: number = 6;
let result = numerator / denominator;

// Strings
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arrays
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
people.push("9000");
// people.push(9000); // generates an error 
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("9000");
peopleAndNumbers.push(9000);


// Any
let comodin: any = "Joker";
comodin = { type: "WildCard" };

// Object
let someObject: object = { type: "WildCard" };