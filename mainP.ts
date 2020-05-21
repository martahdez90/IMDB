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

/* let datos = function () {
    let title: string = prompt('Ingresa el titulo de la pelicula');
    let releaseYear: number = parseInt(prompt('Ingresa el año en que se estrenó'));
    let actors0: string = prompt('Ingresa el titulo de la pelicula');
    let nacionality: string = prompt('Ingresa la nacionalidad de la pelicula');
    //let director: Professional= prompt('Ingresa el titulo de la pelicula');
    let director: string = prompt('Ingresa el titulo de la pelicula');
    let writer: string = prompt('Ingresa el titulo de la pelicula');
    //let writer:Professional= prompt('Ingresa el titulo de la pelicula');
    let language: string = prompt('Ingresa el idioma de la pelicula');
    let plataform: string = prompt('Ingresa la plataforma de estreno');
    let isMCU: string = prompt('Ingresa el titulo de la pelicula');
    let mainCharacterName: string = prompt('Ingresa el nombre del actor principal');
    let producer: string = prompt('Ingresa el nombre del productor');
    let distributor: string = prompt('Ingresa el nombre del distribuidor');
    let genre: string = prompt('Ingresa el genero de la pelicula');
} */

// let moviePrompt: Movie = new Movie(title, releaseYear, nacionality, genre)

// moviePrompt.actors = [actor1, actor2, actor3]
// moviePrompt.director = director1;
// moviePrompt.writer = writer1
// moviePrompt.language = language
// moviePrompt.plataform = plataform
// moviePrompt.isMCU = isMCU
// moviePrompt.mainCharacterName = "Jorge"
// moviePrompt.producer = producer
// moviePrompt.distributor = distributor

/* function escribirEnFicheroJSON (nombreFichero: string){
    let result = ""
    result = JSON.stringify(this.peliculas)
    return fs.writeFileSync(nombreFichero, result);
}

escribirEnFicheroJSON("imdbBBDD.json") */

const prompts = require('prompts')

const question = [
    {
        type: "text",
        name: "username",
        message: "what is your username?"
    }
]
const response = prompts(question);

console.log(response)








