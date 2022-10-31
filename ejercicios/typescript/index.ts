// Boolean
let muted: boolean = true;
muted = false;
// muted = "shut-up"; // generates an error 

// numbers
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

// Enum
enum Color {
    Rojo = "Rojo", 
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es: ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: "WildCard" };

// Object
let someObject: object = { type: "WildCard" };