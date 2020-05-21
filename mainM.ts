// importo la clase Movie
import {Movie} from "./movie"
import { Imdb } from "./imdb"
import { Professional } from "./professional"
const fs = require('fs')

//Profesionales
let Actor1: Professional = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress")
let Actor2: Professional = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress")
let Actor3: Professional = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor")
let director: Professional = new Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director")
let writer: Professional = new Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer")

//Películas
let seven:Movie= new Movie("Seven", 1995, "EE.UU", "Crime")
let lamb: Movie = new Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler")
let matilda: Movie = new Movie("Matilda", 1998, "EE.UU", "Infantil")


let pelis: Movie[] = new Array(seven, lamb)
let pelis2: Imdb = new Imdb(pelis)

pelis2.escribirEnFicheroJSON("imdbBBDD.json")
console.log(pelis2.obtenerInstanciaIMDB("ImdbBBDD.json"));
console.log(pelis2);



// pelis2.escribirEnFicheroJSON("imdbBBDD.json");
// let objetoIMDB: Imdb = pelis2.obtenerInstanciaIMDB("BBDDpeliculas.json")

// fs.appendFileSync("imdbBBDD.json", matilda.printPeliculas())

// (pelis2.peliculas[0].printPeliculas())
