// importo la clase Movie
import {Movie} from "./movie"
import { Imdb } from "./imdb"

const fs = require('fs')
let seven:Movie= new Movie("Seven", 1995, "EE.UU", "Crime")
let lamb: Movie = new Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler")
let matilda:Movie= new Movie("Matilda", 1998, "EE.UU", "Infantil")


let pelis: Movie[] = new Array(seven, lamb)

let pelis2: Imdb = new Imdb(pelis)

console.log(pelis2.crearJson())
console.log(pelis2.readJson())
pelis2.escribirEnFicheroJSON("imdbBBDD.json");
console.log(pelis2.obtenerInstanciaIMDB("BBDDpeliculas.json"))
fs.appendFileSync("imdbBBDD.json", matilda.printPeliculas())

// (pelis2.peliculas[0].printPeliculas())
