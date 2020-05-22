import { Professional } from "./professional"
import { Movie } from "./movie"
import { removeListener } from "cluster"
const fs = require('fs')

let actor1: Professional = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress")
let actor2: Professional = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress")
let actor3: Professional = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor")
let actor4: Professional = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor")
let actor5: Professional = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor")
let director2: Professional = new Professional("Alejandro Amenabar", 40, "male", 80, 175, "white", "brown", "hispanic", "no", "Spanish", 1, "director")
let director1: Professional = new Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director")
let writer1: Professional = new Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer")

/* function escribirEnFicheroJSON (nombreFichero: string){
    let result = ""
    result = JSON.stringify(this.peliculas)
    return fs.writeFileSync(nombreFichero, result);
}

escribirEnFicheroJSON("imdbBBDD.json") */
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var nombreactor = readlineSync = require('readline-sync');









